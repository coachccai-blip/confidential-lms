import { useMemo, useState, type FormEvent } from 'react';
import {
  CEFR_LEVELS,
  MIN_ADMIN_PASSWORD_LENGTH,
  buildRoster,
  encodeInvite,
  parseFingerprint,
  ratePassword,
  readFingerprint,
  stripInvisible,
  summarizeEvents,
  watermarkText,
  type CefrLevel,
  type LearnerAccount,
} from '@lms/core';
import { AppShell } from '../components/AppShell';
import { ProgressBar } from '../components/Progress';
import { allLessons } from '../content';
import { useApp } from '../state/app-context';
import { D, useI18n } from '../i18n';
import {
  IconAlert,
  IconArchive,
  IconCheck,
  IconCopy,
  IconFingerprint,
  IconInbox,
  IconLock,
  IconSearch,
  IconShieldCheck,
  IconUser,
  IconUserPlus,
} from '../components/Icons';

const SAMPLE_TEXT =
  'Le subjonctif n’exprime pas un temps mais un regard : celui de la subjectivité. ' +
  'L’indicatif présente les faits comme réels ; le subjonctif les présente comme voulus, ' +
  'redoutés, souhaités ou mis en doute. On ne le choisit presque jamais librement.';

/** Copie dans le presse-papiers, avec repli sur la sélection manuelle. */
async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/* ------------------------------------------------------------------
   Écran de verrouillage.

   Il n'y a pas de serveur derrière cette page : ce verrou empêche une
   ouverture accidentelle ou opportuniste, rien de plus. L'encadré
   d'avertissement le dit à l'utilisateur plutôt que de le laisser croire
   à une authentification.
   ------------------------------------------------------------------ */
function AdminLockScreen() {
  const { adminNeedsSetup, setAdminPassword, unlockAdmin } = useApp();
  const { l } = useI18n();
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const strength = ratePassword(password);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (adminNeedsSetup) {
        if (password.length < MIN_ADMIN_PASSWORD_LENGTH) {
          setError(l(D.admin.setupTooShort(MIN_ADMIN_PASSWORD_LENGTH)));
          return;
        }
        if (password !== confirmation) {
          setError(l(D.admin.setupMismatch));
          return;
        }
        await setAdminPassword(password);
        return;
      }
      const ok = await unlockAdmin(password);
      if (!ok) setError(l(D.admin.lockWrong));
    } finally {
      setBusy(false);
      setPassword('');
      setConfirmation('');
    }
  }

  return (
    <AppShell title={l(D.nav.admin)} crumb={l(D.nav.administration)}>
      <section className="card" style={{ maxWidth: 560, margin: '0 auto' }}>
        <div className="row" style={{ marginBottom: 'var(--space-4)' }}>
          <IconLock size={18} style={{ color: 'var(--accent)' }} />
          <h3 style={{ fontSize: '0.95rem' }}>
            {l(adminNeedsSetup ? D.admin.setupTitle : D.admin.lockTitle)}
          </h3>
        </div>
        <p className="secondary" style={{ fontSize: '0.87rem', marginBottom: 'var(--space-5)' }}>
          {l(adminNeedsSetup ? D.admin.setupIntro : D.admin.lockIntro)}
        </p>

        <form onSubmit={onSubmit}>
          <div className="field">
            <label className="field__label" htmlFor="admin-password">
              {l(adminNeedsSetup ? D.admin.newPassword : D.admin.lockPassword)}
            </label>
            <input
              id="admin-password"
              className="input"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete={adminNeedsSetup ? 'new-password' : 'current-password'}
              autoFocus
              required
            />
            {adminNeedsSetup && password.length > 0 ? (
              <span className="field__hint">{l(D.admin.strength[strength])}</span>
            ) : null}
          </div>

          {adminNeedsSetup ? (
            <div className="field">
              <label className="field__label" htmlFor="admin-confirm">
                {l(D.admin.setupConfirm)}
              </label>
              <input
                id="admin-confirm"
                className="input"
                type="password"
                value={confirmation}
                onChange={(event) => setConfirmation(event.target.value)}
                autoComplete="new-password"
                required
              />
            </div>
          ) : null}

          {error ? (
            <div className="callout callout--danger" style={{ padding: 'var(--space-3) var(--space-4)' }}>
              <span className="callout__icon">
                <IconAlert size={16} />
              </span>
              <span style={{ fontSize: '0.85rem' }}>{error}</span>
            </div>
          ) : null}

          <button type="submit" className="btn btn--primary btn--block" disabled={busy}>
            {l(adminNeedsSetup ? D.admin.setupSubmit : D.admin.lockSubmit)}
          </button>
        </form>

        <div className="callout callout--warning" style={{ marginTop: 'var(--space-5)' }}>
          <span className="callout__icon">
            <IconAlert size={16} />
          </span>
          <div>
            <div className="callout__title">{l(D.admin.lockWarningTitle)}</div>
            <span style={{ fontSize: '0.84rem' }}>{l(D.admin.lockWarningText)}</span>
          </div>
        </div>
      </section>
    </AppShell>
  );
}

/* --------------------- Création d'un compte apprenant --------------------- */

function NewLearnerForm({ onCreated }: { readonly onCreated: (learner: LearnerAccount) => void }) {
  const { createLearner } = useApp();
  const { l } = useI18n();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [targetLevel, setTargetLevel] = useState<CefrLevel | ''>('');
  const [note, setNote] = useState('');
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const outcome = createLearner({
      displayName,
      email,
      targetLevel: targetLevel === '' ? null : targetLevel,
      note,
    });
    if (!outcome.ok) {
      setError(
        l(
          outcome.reason === 'name-required'
            ? D.admin.errorNameRequired
            : outcome.reason === 'email-invalid'
              ? D.admin.errorEmailInvalid
              : D.admin.errorEmailDuplicate,
        ),
      );
      return;
    }
    setError(null);
    setDisplayName('');
    setEmail('');
    setNote('');
    setTargetLevel('');
    onCreated(outcome.learner);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid--2">
        <div className="field">
          <label className="field__label" htmlFor="learner-name">
            {l(D.admin.fieldName)}
          </label>
          <input
            id="learner-name"
            className="input"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            required
          />
        </div>
        <div className="field">
          <label className="field__label" htmlFor="learner-email">
            {l(D.admin.fieldEmail)}
          </label>
          <input
            id="learner-email"
            className="input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="field">
          <label className="field__label" htmlFor="learner-level">
            {l(D.admin.fieldLevel)}
          </label>
          <select
            id="learner-level"
            className="input"
            value={targetLevel}
            onChange={(event) => setTargetLevel(event.target.value as CefrLevel | '')}
          >
            <option value="">{l(D.admin.noLevel)}</option>
            {CEFR_LEVELS.map((level) => (
              <option key={level} value={level}>
                {l(D.levels[level])}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label className="field__label" htmlFor="learner-note">
            {l(D.admin.fieldNote)}
          </label>
          <input
            id="learner-note"
            className="input"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder={l(D.admin.fieldNotePlaceholder)}
          />
        </div>
      </div>

      {error ? (
        <div className="callout callout--danger" style={{ padding: 'var(--space-3) var(--space-4)' }}>
          <span className="callout__icon">
            <IconAlert size={16} />
          </span>
          <span style={{ fontSize: '0.85rem' }}>{error}</span>
        </div>
      ) : null}

      <button type="submit" className="btn btn--primary">
        <IconUserPlus size={15} /> {l(D.admin.create)}
      </button>
    </form>
  );
}

/* ----------------------------- Bloc invitation ---------------------------- */

function InviteBlock({ learner }: { readonly learner: LearnerAccount }) {
  const { l } = useI18n();
  const [copied, setCopied] = useState(false);
  const invite = useMemo(() => encodeInvite(learner), [learner]);

  return (
    <div className="callout callout--success" style={{ marginTop: 'var(--space-4)' }}>
      <span className="callout__icon">
        <IconCheck size={16} />
      </span>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div className="callout__title">{l(D.admin.createdTitle)}</div>
        <span style={{ fontSize: '0.85rem' }}>{l(D.admin.createdText(learner.displayName))}</span>
        <p className="muted" style={{ fontSize: '0.8rem', margin: 'var(--space-3) 0 var(--space-2)' }}>
          {l(D.admin.inviteIntro)}
        </p>
        <textarea className="textarea textarea--code" data-allow-select="true" readOnly value={invite} rows={3} />
        <div className="row" style={{ marginTop: 'var(--space-2)', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn--secondary btn--sm"
            onClick={() => {
              void copyToClipboard(invite).then(setCopied);
            }}
          >
            <IconCopy size={14} /> {l(copied ? D.admin.copied : D.admin.copy)}
          </button>
          <span className="mono" style={{ fontSize: '0.82rem' }}>
            {l(D.admin.code)} : {learner.code}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Page complète ----------------------------- */

export function AdminPage() {
  const {
    user,
    state,
    fingerprint,
    adminUnlocked,
    lockAdmin,
    archiveLearner,
    restoreLearner,
    importReport,
    pushToast,
  } = useApp();
  const { l, formatDate } = useI18n();
  const [sample, setSample] = useState('');
  const [justCreated, setJustCreated] = useState<LearnerAccount | null>(null);
  const [reportInput, setReportInput] = useState('');
  const [showArchived, setShowArchived] = useState(false);

  const lessons = allLessons();
  const summary = summarizeEvents(state.events);

  const active = state.learners.filter((learner) => learner.archivedAt === null);
  const visible = showArchived ? state.learners : active;
  const roster = useMemo(
    () => buildRoster(visible, state.reports, lessons.length),
    [visible, state.reports, lessons.length],
  );

  const withReport = roster.filter((row) => row.report !== null);
  const averageProgress =
    withReport.length === 0
      ? 0
      : Math.round(withReport.reduce((sum, row) => sum + row.progress, 0) / withReport.length);
  const atRisk = withReport.filter((row) => (row.report?.riskScore ?? 0) >= 25).length;

  const decoded = useMemo(() => {
    if (!sample.trim()) return null;
    const found = readFingerprint(sample);
    const visibleText = stripInvisible(sample);
    return {
      fingerprint: found,
      parsed: found ? parseFingerprint(found) : null,
      visibleLength: visibleText.length,
      hiddenChars: sample.length - visibleText.length,
    };
  }, [sample]);

  const YES = l(D.admin.yes);
  const NO = l(D.common.none);
  const matrix = [
    { measure: l(D.account.protections[7]), values: [NO, 'setContentProtection', 'FLAG_SECURE / iOS'] },
    { measure: l(D.account.protections[2]), values: [YES, YES, YES] },
    { measure: l(D.account.protections[3]), values: [YES, YES, NO] },
    { measure: l(D.account.protections[0]), values: [YES, YES, YES] },
    { measure: l(D.account.protections[1]), values: [YES, YES, YES] },
    {
      measure: l(D.account.protections[5]),
      values: [l(D.admin.bestEffort), l(D.admin.bestEffort), 'iOS : capturedDidChange'],
    },
  ];

  if (!adminUnlocked) return <AdminLockScreen />;

  function onImport(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const outcome = importReport(reportInput);
    if (!outcome.ok) {
      pushToast({ tone: 'danger', title: D.admin.importFailed });
      return;
    }
    setReportInput('');
    if (outcome.known) {
      pushToast({ tone: 'success', title: D.admin.importOk(outcome.report.displayName || outcome.report.code) });
    } else {
      pushToast({ tone: 'warning', title: D.admin.importUnknown });
    }
  }

  return (
    <AppShell title={l(D.nav.admin)} crumb={l(D.nav.administration)} wide>
      <header className="pagehead">
        <div className="pagehead__text">
          <span className="pagehead__eyebrow">{l(D.admin.eyebrow)}</span>
          <h1>{l(D.admin.title)}</h1>
          <p>{l(D.admin.intro)}</p>
        </div>
        <button type="button" className="btn btn--secondary" onClick={lockAdmin}>
          <IconLock size={15} /> {l(D.admin.lockAgain)}
        </button>
      </header>

      <div className="callout callout--warning" style={{ marginBottom: 'var(--space-6)' }}>
        <span className="callout__icon">
          <IconAlert size={16} />
        </span>
        <div>
          <div className="callout__title">{l(D.admin.lockWarningTitle)}</div>
          <span style={{ fontSize: '0.84rem' }}>{l(D.admin.lockWarningText)}</span>
        </div>
      </div>

      <div className="grid grid--4" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="stat">
          <span className="stat__label">{l(D.admin.learners)}</span>
          <span className="stat__value">{active.length}</span>
          <span className="stat__hint">{l(D.admin.learnersHint)}</span>
        </div>
        <div className="stat">
          <span className="stat__label">{l(D.admin.avgProgress)}</span>
          <span className="stat__value">{averageProgress}%</span>
          <ProgressBar value={averageProgress} thin />
          <span className="stat__hint">{l(D.admin.avgProgressHint)}</span>
        </div>
        <div className="stat">
          <span className="stat__label">{l(D.admin.atRisk)}</span>
          <span className="stat__value" style={{ color: atRisk > 0 ? 'var(--warning)' : undefined }}>
            {atRisk}
          </span>
          <span className="stat__hint">{l(D.admin.atRiskHint)}</span>
        </div>
        <div className="stat">
          <span className="stat__label">{l(D.admin.criticalEvents)}</span>
          <span className="stat__value" style={{ color: summary.critical > 0 ? 'var(--danger)' : undefined }}>
            {summary.critical}
          </span>
          <span className="stat__hint">{l(D.admin.criticalHint)}</span>
        </div>
      </div>

      <section className="card" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="row" style={{ marginBottom: 'var(--space-3)' }}>
          <IconUserPlus size={18} style={{ color: 'var(--accent)' }} />
          <h3 style={{ fontSize: '0.95rem' }}>{l(D.admin.newLearner)}</h3>
        </div>
        <p className="secondary" style={{ fontSize: '0.87rem', marginBottom: 'var(--space-4)', maxWidth: '76ch' }}>
          {l(D.admin.rosterIntro)}
        </p>
        <NewLearnerForm onCreated={setJustCreated} />
        {justCreated ? <InviteBlock learner={justCreated} /> : null}
      </section>

      <section className="card card--flush" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card__header">
          <IconUser size={17} />
          <h3>{l(D.admin.rosterTitle)}</h3>
          {state.learners.some((learner) => learner.archivedAt !== null) ? (
            <button
              type="button"
              className="btn btn--ghost btn--sm card__hint"
              onClick={() => setShowArchived((value) => !value)}
            >
              <IconArchive size={14} /> {l(D.admin.showArchived)}
            </button>
          ) : null}
        </div>

        {roster.length === 0 ? (
          <p className="muted" style={{ padding: 'var(--space-6)', fontSize: '0.88rem' }}>
            {l(D.admin.emptyRoster)}
          </p>
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>{l(D.admin.thLearner)}</th>
                  <th>{l(D.admin.thLevel)}</th>
                  <th>{l(D.admin.thProgress)}</th>
                  <th>{l(D.admin.thQuizAvg)}</th>
                  <th>{l(D.admin.thLastActivity)}</th>
                  <th>{l(D.admin.thRisk)}</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {roster.map((row) => {
                  const isArchived = row.learner.archivedAt !== null;
                  const risk = row.report?.riskScore ?? 0;
                  return (
                    <tr key={row.learner.id} style={isArchived ? { opacity: 0.55 } : undefined}>
                      <td>
                        <strong>{row.learner.displayName}</strong>
                        {isArchived ? (
                          <span className="badge" style={{ marginLeft: 8 }}>
                            {l(D.admin.archived)}
                          </span>
                        ) : null}
                        <div className="muted" style={{ fontSize: '0.76rem' }}>
                          {row.learner.email}
                        </div>
                        <div className="mono muted" style={{ fontSize: '0.72rem' }}>
                          {row.learner.code}
                        </div>
                      </td>
                      <td>
                        {row.learner.targetLevel ? (
                          <span className="badge badge--accent">{row.learner.targetLevel}</span>
                        ) : (
                          <span className="muted">—</span>
                        )}
                      </td>
                      <td style={{ minWidth: 170 }}>
                        {row.report ? (
                          <div className="row" style={{ gap: 'var(--space-3)' }}>
                            <span className="tabnum" style={{ width: 38 }}>
                              {row.progress}%
                            </span>
                            <span style={{ flex: 1 }}>
                              <ProgressBar value={row.progress} thin />
                            </span>
                          </div>
                        ) : (
                          <span className="muted" style={{ fontSize: '0.8rem' }}>
                            {l(D.admin.noReport)}
                          </span>
                        )}
                      </td>
                      <td>
                        {row.quizAverage === null ? (
                          <span className="muted">{l(D.common.none)}</span>
                        ) : (
                          <span className={row.quizAverage >= 70 ? 'badge badge--success' : 'badge badge--warning'}>
                            {row.quizAverage}%
                          </span>
                        )}
                      </td>
                      <td style={{ fontSize: '0.8rem' }}>
                        {row.lastActivity ? formatDate(row.lastActivity, { dateStyle: 'medium' }) : '—'}
                      </td>
                      <td>
                        <span
                          className={
                            risk >= 50
                              ? 'severity severity--critical'
                              : risk >= 25
                                ? 'severity severity--warning'
                                : 'severity severity--info'
                          }
                        >
                          {risk >= 25 ? <IconAlert size={13} /> : <span className="dot" />}
                          {risk}
                        </span>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn--ghost btn--sm"
                          onClick={() =>
                            isArchived ? restoreLearner(row.learner.id) : archiveLearner(row.learner.id)
                          }
                        >
                          {l(isArchived ? D.admin.restore : D.admin.archive)}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="card" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="row" style={{ marginBottom: 'var(--space-3)' }}>
          <IconInbox size={18} style={{ color: 'var(--accent)' }} />
          <h3 style={{ fontSize: '0.95rem' }}>{l(D.admin.reportsTitle)}</h3>
        </div>
        <p className="secondary" style={{ fontSize: '0.87rem', marginBottom: 'var(--space-4)', maxWidth: '76ch' }}>
          {l(D.admin.reportsIntro)}
        </p>
        <form onSubmit={onImport}>
          <div className="field">
            <textarea
              className="textarea textarea--code"
              data-allow-select="true"
              value={reportInput}
              onChange={(event) => setReportInput(event.target.value)}
              placeholder={l(D.admin.reportPlaceholder)}
              rows={4}
            />
          </div>
          <button type="submit" className="btn btn--primary" disabled={reportInput.trim().length === 0}>
            <IconInbox size={15} /> {l(D.admin.importReport)}
          </button>
        </form>
      </section>

      <section className="card" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="row" style={{ marginBottom: 'var(--space-4)' }}>
          <IconFingerprint size={18} style={{ color: 'var(--accent)' }} />
          <h3 style={{ fontSize: '0.95rem' }}>{l(D.admin.verifierTitle)}</h3>
        </div>
        <p className="secondary" style={{ fontSize: '0.87rem', marginBottom: 'var(--space-4)', maxWidth: '76ch' }}>
          {l(D.admin.verifierIntro)}
        </p>

        <div className="row" style={{ marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn--secondary"
            onClick={() => setSample(watermarkText(SAMPLE_TEXT, fingerprint, { everyWords: 24 }))}
          >
            {l(D.admin.insertMarked)}
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => setSample(SAMPLE_TEXT)}>
            {l(D.admin.insertClean)}
          </button>
          {sample ? (
            <button type="button" className="btn btn--ghost" onClick={() => setSample('')}>
              {l(D.admin.clear)}
            </button>
          ) : null}
        </div>

        <div className="field" style={{ marginBottom: 'var(--space-4)' }}>
          <label className="field__label" htmlFor="sample">
            {l(D.admin.sampleLabel)}
          </label>
          <textarea
            id="sample"
            className="textarea"
            data-allow-select="true"
            value={sample}
            onChange={(event) => setSample(event.target.value)}
            placeholder={l(D.admin.samplePlaceholder)}
          />
        </div>

        {decoded ? (
          decoded.fingerprint ? (
            <div className="callout callout--danger">
              <span className="callout__icon">
                <IconSearch size={18} />
              </span>
              <div style={{ minWidth: 0 }}>
                <div className="callout__title">{l(D.admin.found)}</div>
                <div className="mono" style={{ marginTop: 4 }}>
                  {decoded.fingerprint}
                </div>
                {decoded.parsed ? (
                  <div className="keyvalues" style={{ marginTop: 'var(--space-3)', background: 'var(--bg-elevated)' }}>
                    <div className="keyvalues__row">
                      <dt>{l(D.admin.fpLearner)}</dt>
                      <dd className="mono">
                        {decoded.parsed.userRef}
                        {user && user.id.endsWith(decoded.parsed.userRef) ? ` — ${user.displayName} (${user.email})` : ''}
                      </dd>
                    </div>
                    <div className="keyvalues__row">
                      <dt>{l(D.admin.fpDevice)}</dt>
                      <dd className="mono">{decoded.parsed.deviceRef}</dd>
                    </div>
                    <div className="keyvalues__row">
                      <dt>{l(D.admin.fpReadAt)}</dt>
                      <dd>
                        {decoded.parsed.at
                          ? formatDate(decoded.parsed.at, { dateStyle: 'full', timeStyle: 'short' })
                          : l(D.common.none)}
                      </dd>
                    </div>
                  </div>
                ) : null}
                <div className="muted" style={{ fontSize: '0.78rem', marginTop: 6 }}>
                  {l(D.admin.fpStats(decoded.hiddenChars, decoded.visibleLength))}
                </div>
              </div>
            </div>
          ) : (
            <div className="callout callout--info">
              <span className="callout__icon">
                <IconSearch size={18} />
              </span>
              <div>
                <div className="callout__title">{l(D.admin.notFound)}</div>
                <span style={{ fontSize: '0.85rem' }}>{l(D.admin.notFoundText)}</span>
              </div>
            </div>
          )
        ) : null}
      </section>

      <section className="card card--flush">
        <div className="card__header">
          <IconShieldCheck size={17} />
          <h3>{l(D.admin.matrix)}</h3>
          <span className="card__hint">{l(D.admin.matrixHint)}</span>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>{l(D.admin.thMeasure)}</th>
                <th>{l(D.admin.thWeb)}</th>
                <th>{l(D.admin.thDesktop)}</th>
                <th>{l(D.admin.thMobile)}</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row) => (
                <tr key={row.measure}>
                  <td>
                    <strong>{row.measure}</strong>
                  </td>
                  {row.values.map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}
