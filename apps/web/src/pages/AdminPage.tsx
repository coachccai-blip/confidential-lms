import { useMemo, useState } from 'react';
import { parseFingerprint, readFingerprint, stripInvisible, summarizeEvents, watermarkText } from '@lms/core';
import { AppShell } from '../components/AppShell';
import { ProgressBar } from '../components/Progress';
import { allLessons } from '../content';
import { useApp } from '../state/app-context';
import { D, useI18n } from '../i18n';
import { IconAlert, IconFingerprint, IconSearch, IconShieldCheck, IconUser } from '../components/Icons';

/** Cohorte de démonstration : ces lignes illustrent la vue de pilotage admin. */
const COHORT = [
  { name: 'Thomas Bertrand', email: 'thomas.bertrand@exemple.fr', progress: 100, quiz: 92, risk: 4, devices: 2 },
  { name: 'Aïcha Ndiaye', email: 'aicha.ndiaye@exemple.fr', progress: 76, quiz: 88, risk: 0, devices: 1 },
  { name: 'Chen Wei', email: 'chen.wei@exemple.cn', progress: 61, quiz: 71, risk: 28, devices: 3 },
  { name: 'Léa Fontaine', email: 'lea.fontaine@exemple.fr', progress: 45, quiz: 64, risk: 8, devices: 1 },
  { name: 'Karim Haddad', email: 'karim.haddad@exemple.fr', progress: 32, quiz: 0, risk: 56, devices: 3 },
  { name: 'Sophie Vernier', email: 'sophie.vernier@exemple.fr', progress: 18, quiz: 0, risk: 0, devices: 1 },
] as const;

const SAMPLE_TEXT =
  'Le subjonctif n’exprime pas un temps mais un regard : celui de la subjectivité. ' +
  'L’indicatif présente les faits comme réels ; le subjonctif les présente comme voulus, ' +
  'redoutés, souhaités ou mis en doute. On ne le choisit presque jamais librement.';

export function AdminPage() {
  const { user, state, fingerprint } = useApp();
  const { l, formatDate } = useI18n();
  const [sample, setSample] = useState('');

  const lessons = allLessons();
  const completed = lessons.filter((lesson) => state.progress[lesson.id]?.completed).length;
  const myPercentage = lessons.length === 0 ? 0 : Math.round((completed / lessons.length) * 100);
  const summary = summarizeEvents(state.events);

  const decoded = useMemo(() => {
    if (!sample.trim()) return null;
    const found = readFingerprint(sample);
    const visible = stripInvisible(sample);
    return {
      fingerprint: found,
      parsed: found ? parseFingerprint(found) : null,
      visibleLength: visible.length,
      hiddenChars: sample.length - visible.length,
    };
  }, [sample]);

  const rows = [
    {
      name: user?.displayName ?? '—',
      email: user?.email ?? '',
      progress: myPercentage,
      quiz: state.attempts[0]?.percentage ?? 0,
      risk: summary.riskScore,
      devices: state.devices.length,
      isMe: true,
    },
    ...COHORT.map((entry) => ({ ...entry, isMe: false })),
  ];

  const averageProgress = Math.round(rows.reduce((sum, row) => sum + row.progress, 0) / rows.length);
  const atRisk = rows.filter((row) => row.risk >= 25).length;

  const matrix = [
    { measure: l(D.account.protections[7]), values: ['—', 'setContentProtection', 'FLAG_SECURE / iOS'] },
    { measure: l(D.account.protections[2]), values: ['Oui', 'Oui', 'Oui'] },
    { measure: l(D.account.protections[3]), values: ['Oui', 'Oui', '—'] },
    { measure: l(D.account.protections[0]), values: ['Oui', 'Oui', 'Oui'] },
    { measure: l(D.account.protections[1]), values: ['Oui', 'Oui', 'Oui'] },
    { measure: l(D.account.protections[5]), values: ['Best-effort', 'Best-effort', 'iOS : capturedDidChange'] },
  ];

  return (
    <AppShell title={l(D.nav.admin)} crumb={l(D.nav.administration)} wide>
      <header className="pagehead">
        <div className="pagehead__text">
          <span className="pagehead__eyebrow">{l(D.admin.eyebrow)}</span>
          <h1>{l(D.admin.title)}</h1>
          <p>{l(D.admin.intro)}</p>
        </div>
      </header>

      <div className="grid grid--4" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="stat">
          <span className="stat__label">{l(D.admin.learners)}</span>
          <span className="stat__value">{rows.length}</span>
          <span className="stat__hint">{l(D.admin.learnersHint)}</span>
        </div>
        <div className="stat">
          <span className="stat__label">{l(D.admin.avgProgress)}</span>
          <span className="stat__value">{averageProgress}%</span>
          <ProgressBar value={averageProgress} thin />
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

      <section className="card card--flush" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card__header">
          <IconUser size={17} />
          <h3>{l(D.admin.tracking)}</h3>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>{l(D.admin.thLearner)}</th>
                <th>{l(D.admin.thProgress)}</th>
                <th>{l(D.admin.thLastQuiz)}</th>
                <th>{l(D.admin.thDevices)}</th>
                <th>{l(D.admin.thRisk)}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.email}>
                  <td>
                    <strong>{row.name}</strong>
                    {row.isMe ? (
                      <span className="badge badge--accent" style={{ marginLeft: 8 }}>
                        {l(D.admin.you)}
                      </span>
                    ) : null}
                    <div className="muted" style={{ fontSize: '0.76rem' }}>
                      {row.email}
                    </div>
                  </td>
                  <td style={{ minWidth: 170 }}>
                    <div className="row" style={{ gap: 'var(--space-3)' }}>
                      <span className="tabnum" style={{ width: 38 }}>
                        {row.progress}%
                      </span>
                      <span style={{ flex: 1 }}>
                        <ProgressBar value={row.progress} thin />
                      </span>
                    </div>
                  </td>
                  <td>
                    {row.quiz > 0 ? (
                      <span className={row.quiz >= 70 ? 'badge badge--success' : 'badge badge--warning'}>{row.quiz}%</span>
                    ) : (
                      <span className="muted">{l(D.common.none)}</span>
                    )}
                  </td>
                  <td className="tabnum">{row.devices} / 3</td>
                  <td>
                    <span
                      className={
                        row.risk >= 50
                          ? 'severity severity--critical'
                          : row.risk >= 25
                            ? 'severity severity--warning'
                            : 'severity severity--info'
                      }
                    >
                      {row.risk >= 25 ? <IconAlert size={13} /> : <span className="dot" />}
                      {row.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
