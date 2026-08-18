import { useMemo, useState } from 'react';
import { summarizeEvents, type SecuritySeverity } from '@lms/core';
import { AppShell } from '../components/AppShell';
import { ProgressBar } from '../components/Progress';
import { useApp } from '../state/app-context';
import { D, useI18n } from '../i18n';
import { IconAlert, IconInfo, IconShieldCheck } from '../components/Icons';

export function SecurityPage() {
  const { state } = useApp();
  const { l, formatDate } = useI18n();
  const [filter, setFilter] = useState<'all' | SecuritySeverity>('all');

  const summary = useMemo(() => summarizeEvents(state.events), [state.events]);
  const events = useMemo(
    () => (filter === 'all' ? state.events : state.events.filter((event) => event.severity === filter)),
    [state.events, filter],
  );

  const filters = [
    { id: 'all' as const, label: l(D.security.filterAll) },
    { id: 'critical' as const, label: l(D.security.filterCritical) },
    { id: 'warning' as const, label: l(D.security.filterWarning) },
    { id: 'info' as const, label: l(D.security.filterInfo) },
  ];

  const severityLabel = (severity: SecuritySeverity) =>
    severity === 'critical' ? l(D.security.sevCritical) : severity === 'warning' ? l(D.security.sevWarning) : l(D.security.sevInfo);

  return (
    <AppShell title={l(D.nav.security)} crumb={l(D.nav.account)} wide>
      <header className="pagehead">
        <div className="pagehead__text">
          <span className="pagehead__eyebrow">{l(D.security.eyebrow)}</span>
          <h1>{l(D.security.title)}</h1>
          <p>{l(D.security.intro)}</p>
        </div>
      </header>

      <div className="grid grid--4" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="stat">
          <span className="stat__label">{l(D.security.riskScore)}</span>
          <span className="stat__value">{summary.riskScore}</span>
          <ProgressBar value={summary.riskScore} thin />
        </div>
        <div className="stat">
          <span className="stat__label">{l(D.security.events)}</span>
          <span className="stat__value">{summary.total}</span>
          <span className="stat__hint">{l(D.security.eventsHint)}</span>
        </div>
        <div className="stat">
          <span className="stat__label">{l(D.security.critical)}</span>
          <span className="stat__value" style={{ color: summary.critical > 0 ? 'var(--danger)' : undefined }}>
            {summary.critical}
          </span>
          <span className="stat__hint">{l(D.security.criticalHint)}</span>
        </div>
        <div className="stat">
          <span className="stat__label">{l(D.security.warning)}</span>
          <span className="stat__value" style={{ color: summary.warning > 0 ? 'var(--warning)' : undefined }}>
            {summary.warning}
          </span>
          <span className="stat__hint">{l(D.security.warningHint)}</span>
        </div>
      </div>

      <div className="row" style={{ marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
        {filters.map((item) => (
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
          <h3>{l(D.security.recorded)}</h3>
          <span className="card__hint">{l(D.security.shown(events.length))}</span>
        </div>

        {events.length === 0 ? (
          <div className="empty" style={{ border: 'none' }}>
            <IconInfo size={20} />
            <span>{l(D.security.empty)}</span>
          </div>
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>{l(D.security.thTime)}</th>
                  <th>{l(D.security.thEvent)}</th>
                  <th>{l(D.security.thSeverity)}</th>
                  <th>{l(D.security.thDevice)}</th>
                  <th>{l(D.security.thDetails)}</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td className="mono" style={{ whiteSpace: 'nowrap' }}>
                      {formatDate(event.at, { dateStyle: 'short', timeStyle: 'medium' })}
                    </td>
                    <td>
                      <strong>{l(D.securityEvents[event.type])}</strong>
                    </td>
                    <td>
                      <span className={`severity severity--${event.severity}`}>
                        {event.severity === 'critical' ? <IconAlert size={13} /> : <span className="dot" />}
                        {severityLabel(event.severity)}
                      </span>
                    </td>
                    <td className="mono">{event.deviceId}</td>
                    <td className="muted" style={{ fontSize: '0.8rem' }}>
                      {event.metadata
                        ? Object.entries(event.metadata)
                            .map(([key, value]) => `${key} : ${value}`)
                            .join(' · ')
                        : l(D.common.none)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <p className="muted" style={{ fontSize: '0.8rem', marginTop: 'var(--space-5)', maxWidth: '78ch' }}>
        {l(D.security.footnote)}
      </p>
    </AppShell>
  );
}
