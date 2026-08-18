import { useMemo, useState } from 'react';
import { summarizeEvents, type SecuritySeverity } from '@lms/core';
import { AppShell } from '../components/AppShell';
import { ProgressBar } from '../components/Progress';
import { useApp } from '../state/app-context';
import { IconAlert, IconInfo, IconShieldCheck } from '../components/Icons';

const FILTERS: readonly { readonly id: 'all' | SecuritySeverity; readonly label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'critical', label: 'Critiques' },
  { id: 'warning', label: 'Avertissements' },
  { id: 'info', label: 'Informations' },
];

export function SecurityPage() {
  const { state } = useApp();
  const [filter, setFilter] = useState<'all' | SecuritySeverity>('all');
  const summary = useMemo(() => summarizeEvents(state.events), [state.events]);
  const events = useMemo(
    () => (filter === 'all' ? state.events : state.events.filter((event) => event.severity === filter)),
    [state.events, filter],
  );

  return (
    <AppShell title="Journal de sécurité" crumb="Compte" wide>
      <div className="page__header">
        <div>
          <h1>Journal de sécurité</h1>
          <p>
            Chaque tentative de copie, d’impression ou de capture est horodatée et rattachée à votre compte et à votre
            appareil. Ce journal est consultable par l’administrateur de la formation.
          </p>
        </div>
      </div>

      <div className="grid grid--4" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="stat">
          <span className="stat__label">Score de risque</span>
          <span className="stat__value">{summary.riskScore}</span>
          <ProgressBar value={summary.riskScore} thin />
        </div>
        <div className="stat">
          <span className="stat__label">Événements</span>
          <span className="stat__value">{summary.total}</span>
          <span className="stat__hint">journal borné aux 200 derniers</span>
        </div>
        <div className="stat">
          <span className="stat__label">Critiques</span>
          <span className="stat__value" style={{ color: summary.critical > 0 ? 'var(--danger)' : undefined }}>
            {summary.critical}
          </span>
          <span className="stat__hint">impression, capture, devtools</span>
        </div>
        <div className="stat">
          <span className="stat__label">Avertissements</span>
          <span className="stat__value" style={{ color: summary.warning > 0 ? 'var(--warning)' : undefined }}>
            {summary.warning}
          </span>
          <span className="stat__hint">copie, session révoquée</span>
        </div>
      </div>

      <div className="row" style={{ marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
        {FILTERS.map((item) => (
          <button
            type="button"
            key={item.id}
            className={filter === item.id ? 'btn btn--secondary' : 'btn btn--ghost'}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <section className="card card--flush">
        <div className="card__header">
          <IconShieldCheck size={17} />
          <h3>Événements enregistrés</h3>
          <span className="card__hint">{events.length} affiché(s)</span>
        </div>

        {events.length === 0 ? (
          <div className="empty" style={{ border: 'none' }}>
            <IconInfo size={20} />
            <span>Aucun événement pour ce filtre.</span>
          </div>
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Horodatage</th>
                  <th>Événement</th>
                  <th>Gravité</th>
                  <th>Appareil</th>
                  <th>Détails</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td className="mono" style={{ whiteSpace: 'nowrap' }}>
                      {new Date(event.at).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'medium' })}
                    </td>
                    <td>
                      <strong>{event.label}</strong>
                    </td>
                    <td>
                      <span className={`severity severity--${event.severity}`}>
                        {event.severity === 'critical' ? <IconAlert size={13} /> : <span className="dot" />}
                        {event.severity === 'critical'
                          ? 'Critique'
                          : event.severity === 'warning'
                            ? 'Avertissement'
                            : 'Information'}
                      </span>
                    </td>
                    <td className="mono">{event.deviceId}</td>
                    <td className="muted" style={{ fontSize: '0.8rem' }}>
                      {event.metadata
                        ? Object.entries(event.metadata)
                            .map(([key, value]) => `${key} : ${value}`)
                            .join(' · ')
                        : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <p className="muted" style={{ fontSize: '0.8rem', marginTop: 'var(--space-5)', maxWidth: '78ch' }}>
        En production, ces événements sont transmis au serveur en temps réel et déclenchent des alertes administrateur
        (connexions depuis des IP très éloignées en peu de temps, répétition de tentatives de capture, partage de
        compte suspecté). Dans cette démonstration statique, ils restent dans votre navigateur.
      </p>
    </AppShell>
  );
}
