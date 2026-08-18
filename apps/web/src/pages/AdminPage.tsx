import { useMemo, useState } from 'react';
import {
  computeCourseProgress,
  parseFingerprint,
  readFingerprint,
  stripInvisible,
  summarizeEvents,
  watermarkText,
} from '@lms/core';
import { AppShell } from '../components/AppShell';
import { ProgressBar } from '../components/Progress';
import { volcansCourse } from '../content';
import { useApp } from '../state/app-context';
import { IconAlert, IconFingerprint, IconSearch, IconShieldCheck, IconUser } from '../components/Icons';

/** Cohorte de demonstration : ces lignes illustrent la vue de pilotage admin. */
const COHORT = [
  { name: 'Thomas Bertrand', email: 'thomas.bertrand@exemple.fr', progress: 100, quiz: 92, risk: 4, devices: 2 },
  { name: 'Aïcha Ndiaye', email: 'aicha.ndiaye@exemple.fr', progress: 76, quiz: 88, risk: 0, devices: 1 },
  { name: 'Julien Marchand', email: 'julien.marchand@exemple.fr', progress: 61, quiz: 71, risk: 28, devices: 3 },
  { name: 'Léa Fontaine', email: 'lea.fontaine@exemple.fr', progress: 45, quiz: 64, risk: 8, devices: 1 },
  { name: 'Karim Haddad', email: 'karim.haddad@exemple.fr', progress: 32, quiz: 0, risk: 56, devices: 3 },
  { name: 'Sophie Vernier', email: 'sophie.vernier@exemple.fr', progress: 18, quiz: 0, risk: 0, devices: 1 },
] as const;

const PROTECTION_MATRIX = [
  { measure: 'Blocage des captures d’écran', web: 'Impossible', desktop: 'Oui — setContentProtection', mobile: 'Android : FLAG_SECURE · iOS : détection seule' },
  { measure: 'Blocage copier / couper', web: 'Oui', desktop: 'Oui', mobile: 'Oui' },
  { measure: 'Blocage impression / PDF', web: 'Oui', desktop: 'Oui', mobile: 'Sans objet' },
  { measure: 'Filigrane nominatif visible', web: 'Oui', desktop: 'Oui', mobile: 'Oui' },
  { measure: 'Empreinte invisible dans le texte', web: 'Oui', desktop: 'Oui', mobile: 'Oui' },
  { measure: 'Détection d’enregistrement d’écran', web: 'Non', desktop: 'Best-effort (processus)', mobile: 'iOS : capturedDidChange' },
  { measure: 'Photo de l’écran par un tiers', web: 'Impossible à bloquer', desktop: 'Impossible à bloquer', mobile: 'Impossible à bloquer' },
] as const;

const SAMPLE_TEXT =
  'Un écoulement pyroclastique est un mélange de gaz, de cendres et de blocs, plus dense que l’air, ' +
  'qui dévale les flancs du volcan à des vitesses de 100 à 700 km/h et à des températures de 200 à 700 °C. ' +
  'Aucun bâtiment civil ne lui résiste : la seule mesure efficace reste l’évacuation préventive.';

export function AdminPage() {
  const { user, state, fingerprint } = useApp();
  const [sample, setSample] = useState('');

  const myProgress = computeCourseProgress(volcansCourse, state.progress);
  const summary = summarizeEvents(state.events);

  const decoded = useMemo(() => {
    if (!sample.trim()) return null;
    const fingerprint = readFingerprint(sample);
    return {
      fingerprint,
      parsed: fingerprint ? parseFingerprint(fingerprint) : null,
      visibleLength: stripInvisible(sample).length,
      hiddenChars: sample.length - stripInvisible(sample).length,
    };
  }, [sample]);

  const rows = [
    {
      name: user?.displayName ?? 'Vous',
      email: user?.email ?? '',
      progress: myProgress.percentage,
      quiz: state.attempts[0]?.percentage ?? 0,
      risk: summary.riskScore,
      devices: state.devices.length,
      isMe: true,
    },
    ...COHORT.map((entry) => ({ ...entry, isMe: false })),
  ];

  const averageProgress = Math.round(rows.reduce((sum, row) => sum + row.progress, 0) / rows.length);
  const atRisk = rows.filter((row) => row.risk >= 25).length;

  return (
    <AppShell title="Pilotage & traçabilité" crumb="Administration" wide>
      <div className="page__header">
        <div>
          <h1>Espace administrateur</h1>
          <p>
            Suivi des apprenants, journal de sécurité consolidé et vérification d’empreinte. Cette vue reproduit le
            tableau de bord prévu au brief ; les lignes autres que la vôtre sont des données de démonstration.
          </p>
        </div>
      </div>

      <div className="grid grid--4" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="stat">
          <span className="stat__label">Apprenants</span>
          <span className="stat__value">{rows.length}</span>
          <span className="stat__hint">sur une licence de 100 places</span>
        </div>
        <div className="stat">
          <span className="stat__label">Progression moyenne</span>
          <span className="stat__value">{averageProgress}%</span>
          <ProgressBar value={averageProgress} thin />
        </div>
        <div className="stat">
          <span className="stat__label">Comptes à surveiller</span>
          <span className="stat__value" style={{ color: atRisk > 0 ? 'var(--warning)' : undefined }}>
            {atRisk}
          </span>
          <span className="stat__hint">score de risque ≥ 25</span>
        </div>
        <div className="stat">
          <span className="stat__label">Événements critiques</span>
          <span className="stat__value" style={{ color: summary.critical > 0 ? 'var(--danger)' : undefined }}>
            {summary.critical}
          </span>
          <span className="stat__hint">sur votre session en cours</span>
        </div>
      </div>

      <section className="card card--flush" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card__header">
          <IconUser size={17} />
          <h3>Suivi des apprenants — Les volcans</h3>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Apprenant</th>
                <th>Progression</th>
                <th>Dernier quiz</th>
                <th>Appareils</th>
                <th>Risque</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.email}>
                  <td>
                    <strong>{row.name}</strong>
                    {row.isMe ? <span className="badge badge--accent" style={{ marginLeft: 8 }}>Vous</span> : null}
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
                      <span className="muted">—</span>
                    )}
                  </td>
                  <td className="tabnum">{row.devices} / 3</td>
                  <td>
                    <span
                      className={
                        row.risk >= 50 ? 'severity severity--critical' : row.risk >= 25 ? 'severity severity--warning' : 'severity severity--info'
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
          <h3 style={{ fontSize: '0.95rem' }}>Vérificateur d’empreinte — identifier la source d’une fuite</h3>
        </div>
        <p className="secondary" style={{ fontSize: '0.87rem', marginBottom: 'var(--space-4)', maxWidth: '76ch' }}>
          Collez ici un extrait de texte récupéré sur un support tiers (email, forum, document partagé). Si l’extrait
          provient de la plateforme, l’empreinte invisible révèle l’apprenant, l’appareil et l’heure de consultation.
          Les deux boutons ci-dessous injectent le même extrait de démonstration, avec puis sans filigrane, pour
          comparer les verdicts.
        </p>

        <div className="row" style={{ marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn--secondary"
            onClick={() => setSample(watermarkText(SAMPLE_TEXT, fingerprint, { everyWords: 24 }))}
          >
            Insérer un extrait filigrané d’exemple
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => setSample(SAMPLE_TEXT)}>
            Insérer le même texte sans filigrane
          </button>
          {sample ? (
            <button type="button" className="btn btn--ghost" onClick={() => setSample('')}>
              Effacer
            </button>
          ) : null}
        </div>

        <div className="field" style={{ marginBottom: 'var(--space-4)' }}>
          <label className="field__label" htmlFor="sample">
            Extrait suspect
          </label>
          <textarea
            id="sample"
            className="textarea"
            data-allow-select="true"
            value={sample}
            onChange={(event) => setSample(event.target.value)}
            placeholder="Collez ici le texte à analyser…"
          />
        </div>

        {decoded ? (
          decoded.fingerprint ? (
            <div className="callout callout--danger">
              <span className="callout__icon">
                <IconSearch size={18} />
              </span>
              <div>
                <div className="callout__title">Empreinte identifiée</div>
                <div className="mono" style={{ marginTop: 4 }}>
                  {decoded.fingerprint}
                </div>
                {decoded.parsed ? (
                  <div className="keyvalues" style={{ marginTop: 'var(--space-3)', background: 'var(--bg-elevated)' }}>
                    <div className="keyvalues__row">
                      <dt>Apprenant</dt>
                      <dd className="mono">
                        {decoded.parsed.userRef}
                        {user && user.id.endsWith(decoded.parsed.userRef) ? ` — ${user.displayName} (${user.email})` : ''}
                      </dd>
                    </div>
                    <div className="keyvalues__row">
                      <dt>Appareil</dt>
                      <dd className="mono">{decoded.parsed.deviceRef}</dd>
                    </div>
                    <div className="keyvalues__row">
                      <dt>Consulté vers</dt>
                      <dd>
                        {decoded.parsed.at
                          ? decoded.parsed.at.toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' })
                          : 'inconnu'}
                      </dd>
                    </div>
                  </div>
                ) : null}
                <div className="muted" style={{ fontSize: '0.78rem', marginTop: 6 }}>
                  {decoded.hiddenChars} caractères invisibles détectés pour {decoded.visibleLength} caractères visibles.
                  L’empreinte est répétée tous les 24 mots : un extrait de quelques lignes suffit à identifier la source.
                </div>
              </div>
            </div>
          ) : (
            <div className="callout callout--info">
              <span className="callout__icon">
                <IconSearch size={18} />
              </span>
              <div>
                <div className="callout__title">Aucune empreinte détectée</div>
                <span style={{ fontSize: '0.85rem' }}>
                  Cet extrait ne provient pas de la plateforme, ou il a été retranscrit manuellement, normalisé, ou
                  passé par un OCR — ce qui détruit les caractères de largeur nulle.
                </span>
              </div>
            </div>
          )
        ) : null}
      </section>

      <section className="card card--flush">
        <div className="card__header">
          <IconShieldCheck size={17} />
          <h3>Matrice de protection par plateforme</h3>
          <span className="card__hint">Limites documentées honnêtement</span>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Mesure</th>
                <th>Web (cette démo)</th>
                <th>Desktop Electron</th>
                <th>Mobile React Native</th>
              </tr>
            </thead>
            <tbody>
              {PROTECTION_MATRIX.map((row) => (
                <tr key={row.measure}>
                  <td>
                    <strong>{row.measure}</strong>
                  </td>
                  <td>{row.web}</td>
                  <td>{row.desktop}</td>
                  <td>{row.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}
