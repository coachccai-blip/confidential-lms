import { describe, expect, it } from 'vitest';
import {
  DEFAULT_ADMIN_PASSWORD,
  archiveLearner,
  credentialsOfInvite,
  credentialsOfLearner,
  findLearnerByEmail,
  fullName,
  suggestPassword,
  validateLearnerInput,
  verifyLearnerPassword,
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
    firstName: 'Wei',
    lastName: 'Chen',
    email: 'chen.wei@exemple.cn',
    // Condensé de « azur-lagune-42 » avec ce sel, calculé dans le test dédié.
    passwordHash: 'a'.repeat(64),
    passwordSalt: '0123456789abcdef',
    targetLevel: 'B1',
    note: '',
    createdAt: NOW,
    archivedAt: null,
    ...overrides,
  };
}

const VALID_INPUT = {
  firstName: 'Wei',
  lastName: 'Chen',
  email: 'Chen.Wei@Exemple.cn',
  password: 'azur-lagune-42',
};

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
  it('crée un compte, lui attribue un code et condense le mot de passe', async () => {
    const outcome = await createLearner([], VALID_INPUT, NOW, seeded(3));
    expect(outcome.ok).toBe(true);
    if (!outcome.ok) return;
    expect(outcome.learner.firstName).toBe('Wei');
    expect(outcome.learner.email).toBe('chen.wei@exemple.cn');
    expect(outcome.learner.code).toMatch(/^LUM-/);
    expect(outcome.learner.archivedAt).toBeNull();
    expect(outcome.learner.passwordHash).toMatch(/^[0-9a-f]{64}$/);
  });

  it('ne conserve jamais le mot de passe en clair', async () => {
    const outcome = await createLearner([], VALID_INPUT, NOW, seeded(3));
    expect(outcome.ok).toBe(true);
    if (!outcome.ok) return;
    expect(JSON.stringify(outcome.learner)).not.toContain('lagune');
  });

  it('refuse un prénom vide, un courriel invalide, un mot de passe court, un doublon', () => {
    const existing = [makeLearner()];
    expect(validateLearnerInput(existing, { ...VALID_INPUT, firstName: '  ' })?.reason).toBe('name-required');
    expect(validateLearnerInput(existing, { ...VALID_INPUT, email: 'pas-un-email' })?.reason).toBe('email-invalid');
    expect(validateLearnerInput(existing, { ...VALID_INPUT, password: 'court' })?.reason).toBe('password-too-short');
    expect(validateLearnerInput(existing, { ...VALID_INPUT, email: 'chen.wei@exemple.cn' })?.reason).toBe(
      'email-duplicate',
    );
    expect(validateLearnerInput(existing, { ...VALID_INPUT, email: 'autre@exemple.fr' })).toBeNull();
  });

  it('autorise à réutiliser le courriel d’un compte archivé', () => {
    const existing = [makeLearner({ archivedAt: NOW })];
    expect(validateLearnerInput(existing, { ...VALID_INPUT, email: 'chen.wei@exemple.cn' })).toBeNull();
  });

  it('archive puis restaure sans perdre le compte', () => {
    const learners = [makeLearner()];
    const archived = archiveLearner(learners, 'lrn_1', NOW);
    expect(archived[0]?.archivedAt).toBe(NOW);
    expect(restoreLearner(archived, 'lrn_1')[0]?.archivedAt).toBeNull();
  });

  it('compose le nom complet en tolérant un nom de famille absent', () => {
    expect(fullName({ firstName: 'Wei', lastName: 'Chen' })).toBe('Wei Chen');
    expect(fullName({ firstName: 'Wei', lastName: '' })).toBe('Wei');
  });

  it('propose un mot de passe dictable et assez long', () => {
    const password = suggestPassword(seeded(5));
    expect(password).toMatch(/^[a-z]+-[a-z]+-\d{2}$/);
    expect(password.length).toBeGreaterThanOrEqual(8);
  });
});

describe('connexion d’un apprenant', () => {
  it('accepte le mot de passe choisi par l’enseignant et refuse les autres', async () => {
    const outcome = await createLearner([], VALID_INPUT, NOW, seeded(3));
    expect(outcome.ok).toBe(true);
    if (!outcome.ok) return;
    const credentials = credentialsOfLearner(outcome.learner);
    expect(await verifyLearnerPassword(credentials, 'azur-lagune-42')).toBe(true);
    expect(await verifyLearnerPassword(credentials, 'azur-lagune-43')).toBe(false);
    expect(await verifyLearnerPassword(credentials, '')).toBe(false);
  });

  it('vérifie aussi bien depuis l’invitation que depuis le compte local', async () => {
    const outcome = await createLearner([], VALID_INPUT, NOW, seeded(3));
    expect(outcome.ok).toBe(true);
    if (!outcome.ok) return;
    const invite = decodeInvite(encodeInvite(outcome.learner));
    expect(invite).not.toBeNull();
    if (!invite) return;
    expect(await verifyLearnerPassword(credentialsOfInvite(invite), 'azur-lagune-42')).toBe(true);
    expect(await verifyLearnerPassword(credentialsOfInvite(invite), 'mauvais')).toBe(false);
  });

  it('retrouve un compte par son adresse, sans tenir compte de la casse', () => {
    const learners = [makeLearner(), makeLearner({ id: 'lrn_2', email: 'lea@exemple.fr', archivedAt: NOW })];
    expect(findLearnerByEmail(learners, '  CHEN.WEI@exemple.CN ')?.id).toBe('lrn_1');
    // Un compte archivé ne permet plus de se connecter.
    expect(findLearnerByEmail(learners, 'lea@exemple.fr')).toBeNull();
    expect(findLearnerByEmail(learners, 'inconnu@exemple.fr')).toBeNull();
  });

  it('sale le condensé : deux comptes du même mot de passe diffèrent', async () => {
    const a = await createLearner([], VALID_INPUT, NOW, seeded(3));
    const b = await createLearner([], { ...VALID_INPUT, email: 'autre@exemple.fr' }, NOW, seeded(9));
    expect(a.ok && b.ok).toBe(true);
    if (!a.ok || !b.ok) return;
    expect(a.learner.passwordSalt).not.toBe(b.learner.passwordSalt);
    expect(a.learner.passwordHash).not.toBe(b.learner.passwordHash);
  });
});

describe('invitations', () => {
  it('fait l’aller-retour sans perte', () => {
    const learner = makeLearner();
    const decoded = decodeInvite(encodeInvite(learner));
    expect(decoded).toEqual({
      kind: 'lumiere.invite.v2',
      code: learner.code,
      firstName: 'Wei',
      lastName: 'Chen',
      email: learner.email,
      passwordHash: learner.passwordHash,
      passwordSalt: learner.passwordSalt,
      targetLevel: 'B1',
    });
  });

  it('survit aux caractères accentués et chinois', () => {
    const learner = makeLearner({ firstName: '伟', lastName: 'Élodie Français' });
    expect(decodeInvite(encodeInvite(learner))?.firstName).toBe('伟');
    expect(decodeInvite(encodeInvite(learner))?.lastName).toBe('Élodie Français');
  });

  it('refuse une invitation privée de son condensé', () => {
    const learner = makeLearner();
    const truncated = { kind: 'lumiere.invite.v2', code: learner.code, firstName: 'Wei', email: learner.email };
    expect(decodeInvite(btoa(JSON.stringify(truncated)))).toBeNull();
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
    firstName: 'Wei',
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
      firstName: 'Wei',
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
