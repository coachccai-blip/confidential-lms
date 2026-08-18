import { describe, expect, it } from 'vitest';
import {
  DEFAULT_ADMIN_PASSWORD,
  archiveLearner,
  buildRoster,
  createAdminLock,
  createEnrolmentCode,
  createLearner,
  decodeInvite,
  decodeReport,
  encodeInvite,
  encodeReport,
  mergeReport,
  normalizeCode,
  ratePassword,
  restoreLearner,
  verifyAdminPassword,
  type LearnerAccount,
  type LearnerReport,
} from '../roster';

/** Générateur déterministe : les tests ne dépendent pas de Math.random. */
function seeded(seed: number): () => number {
  let value = seed;
  return () => {
    value = (value * 1664525 + 1013904223) % 0xffffffff;
    return value / 0xffffffff;
  };
}

const NOW = '2026-03-01T10:00:00.000Z';

function makeLearner(overrides: Partial<LearnerAccount> = {}): LearnerAccount {
  return {
    id: 'lrn_1',
    code: 'LUM-ABCD-2345',
    displayName: 'Chen Wei',
    email: 'chen.wei@exemple.cn',
    targetLevel: 'B1',
    note: '',
    createdAt: NOW,
    archivedAt: null,
    ...overrides,
  };
}

describe('codes d’inscription', () => {
  it('produit un code lisible, sans caractère ambigu', () => {
    const code = createEnrolmentCode(seeded(7));
    expect(code).toMatch(/^LUM-[A-Z2-9]{4}-[A-Z2-9]{4}$/);
    expect(code).not.toMatch(/[OI01]/);
  });

  it('normalise une saisie manuelle approximative', () => {
    expect(normalizeCode(' lum abcd 2345 ')).toBe('LUM-ABCD-2345');
    expect(normalizeCode('lum-abcd-2345')).toBe('LUM-ABCD-2345');
  });
});

describe('création de comptes', () => {
  it('crée un compte et lui attribue un code', () => {
    const outcome = createLearner([], { displayName: 'Chen Wei', email: 'Chen.Wei@Exemple.cn' }, NOW, seeded(3));
    expect(outcome.ok).toBe(true);
    if (!outcome.ok) return;
    expect(outcome.learner.email).toBe('chen.wei@exemple.cn');
    expect(outcome.learner.code).toMatch(/^LUM-/);
    expect(outcome.learner.archivedAt).toBeNull();
  });

  it('refuse un nom vide, un courriel invalide, un doublon', () => {
    const existing = [makeLearner()];
    expect(createLearner(existing, { displayName: '  ', email: 'a@b.fr' }, NOW).ok).toBe(false);
    expect(createLearner(existing, { displayName: 'X', email: 'pas-un-email' }, NOW).ok).toBe(false);
    const duplicate = createLearner(existing, { displayName: 'X', email: 'chen.wei@exemple.cn' }, NOW);
    expect(duplicate.ok).toBe(false);
    if (!duplicate.ok) expect(duplicate.reason).toBe('email-duplicate');
  });

  it('autorise à réutiliser le courriel d’un compte archivé', () => {
    const existing = [makeLearner({ archivedAt: NOW })];
    expect(createLearner(existing, { displayName: 'X', email: 'chen.wei@exemple.cn' }, NOW).ok).toBe(true);
  });

  it('archive puis restaure sans perdre le compte', () => {
    const learners = [makeLearner()];
    const archived = archiveLearner(learners, 'lrn_1', NOW);
    expect(archived[0]?.archivedAt).toBe(NOW);
    expect(restoreLearner(archived, 'lrn_1')[0]?.archivedAt).toBeNull();
  });
});

describe('invitations', () => {
  it('fait l’aller-retour sans perte', () => {
    const learner = makeLearner();
    const decoded = decodeInvite(encodeInvite(learner));
    expect(decoded).toEqual({
      kind: 'lumiere.invite.v1',
      code: learner.code,
      displayName: learner.displayName,
      email: learner.email,
      targetLevel: 'B1',
    });
  });

  it('survit aux caractères accentués et chinois', () => {
    const learner = makeLearner({ displayName: '陈伟 · Élodie Français' });
    expect(decodeInvite(encodeInvite(learner))?.displayName).toBe('陈伟 · Élodie Français');
  });

  it('refuse une invitation illisible ou d’un autre format', () => {
    expect(decodeInvite('pas-une-invitation')).toBeNull();
    expect(decodeInvite('')).toBeNull();
    expect(decodeInvite(btoa(JSON.stringify({ kind: 'autre', code: 'X' })))).toBeNull();
  });
});

describe('remontées de progression', () => {
  const report: LearnerReport = {
    kind: 'lumiere.report.v1',
    code: 'LUM-ABCD-2345',
    displayName: 'Chen Wei',
    email: 'chen.wei@exemple.cn',
    exportedAt: '2026-03-02T08:00:00.000Z',
    completedLessons: { les_a1pm_1: '2026-03-01T09:00:00.000Z', les_a1pm_2: '2026-03-02T07:00:00.000Z' },
    quizScores: { qz_a1_premiers_mots: 83 },
    deviceCount: 2,
    riskScore: 0,
  };

  it('fait l’aller-retour sans perte', () => {
    expect(decodeReport(encodeReport(report))).toEqual(report);
  });

  it('accepte aussi le JSON brut, pour un fichier ouvert à la main', () => {
    expect(decodeReport(JSON.stringify(report))?.code).toBe(report.code);
  });

  it('ignore les champs corrompus au lieu de tout rejeter', () => {
    const corrupted = { ...report, quizScores: { bon: 90, mauvais: 'beaucoup' }, deviceCount: null };
    const decoded = decodeReport(JSON.stringify(corrupted));
    expect(decoded?.quizScores).toEqual({ bon: 90 });
    expect(decoded?.deviceCount).toBe(0);
  });

  it('remplace une remontée par une plus récente, jamais l’inverse', () => {
    const older = { ...report, exportedAt: '2026-03-01T08:00:00.000Z', quizScores: {} };
    expect(mergeReport([report], older)).toEqual([report]);
    const newer = { ...report, exportedAt: '2026-03-03T08:00:00.000Z' };
    expect(mergeReport([report], newer)).toEqual([newer]);
  });

  it('ajoute une remontée d’un apprenant encore inconnu', () => {
    const other = { ...report, code: 'LUM-WXYZ-9876' };
    expect(mergeReport([report], other)).toHaveLength(2);
  });
});

describe('tableau de suivi', () => {
  const learners = [makeLearner(), makeLearner({ id: 'lrn_2', code: 'LUM-WXYZ-9876', email: 'lea@exemple.fr' })];
  const reports: LearnerReport[] = [
    {
      kind: 'lumiere.report.v1',
      code: 'LUM-ABCD-2345',
      displayName: 'Chen Wei',
      email: 'chen.wei@exemple.cn',
      exportedAt: '2026-03-02T08:00:00.000Z',
      completedLessons: { a: '2026-03-01T09:00:00.000Z', b: '2026-03-02T07:00:00.000Z' },
      quizScores: { q1: 83, q2: 55 },
      deviceCount: 2,
      riskScore: 12,
    },
  ];

  it('calcule progression, moyenne et quiz réussis', () => {
    const rows = buildRoster(learners, reports, 8);
    expect(rows[0]?.progress).toBe(25);
    expect(rows[0]?.quizAverage).toBe(69);
    expect(rows[0]?.quizzesPassed).toBe(1);
    expect(rows[0]?.lastActivity).toBe('2026-03-02T07:00:00.000Z');
  });

  it('affiche un apprenant sans remontée sans le faire disparaître', () => {
    const rows = buildRoster(learners, reports, 8);
    expect(rows).toHaveLength(2);
    expect(rows[1]?.report).toBeNull();
    expect(rows[1]?.progress).toBe(0);
    expect(rows[1]?.quizAverage).toBeNull();
  });
});

describe('verrou administrateur', () => {
  it('accepte le bon mot de passe et refuse les autres', async () => {
    const lock = await createAdminLock(DEFAULT_ADMIN_PASSWORD, NOW, seeded(11));
    expect(await verifyAdminPassword(lock, DEFAULT_ADMIN_PASSWORD)).toBe(true);
    expect(await verifyAdminPassword(lock, 'lumiere-admi')).toBe(false);
    expect(await verifyAdminPassword(lock, '')).toBe(false);
  });

  it('ne stocke jamais le mot de passe en clair', async () => {
    const lock = await createAdminLock('correct-cheval-batterie-agrafe', NOW, seeded(11));
    expect(JSON.stringify(lock)).not.toContain('cheval');
    expect(lock.hash).toMatch(/^[0-9a-f]{64}$/);
  });

  it('sale le condensé : deux verrous du même mot de passe diffèrent', async () => {
    const first = await createAdminLock('correct-cheval-batterie', NOW, seeded(1));
    const second = await createAdminLock('correct-cheval-batterie', NOW, seeded(2));
    expect(first.salt).not.toBe(second.salt);
    expect(first.hash).not.toBe(second.hash);
  });

  it('note la robustesse du mot de passe', () => {
    expect(ratePassword('court')).toBe('too-short');
    expect(ratePassword('motdepasselong')).toBe('fair');
    expect(ratePassword('Motdepasse1!')).toBe('fair');
    expect(ratePassword('Motdepasse-Long-1!')).toBe('strong');
  });
});
