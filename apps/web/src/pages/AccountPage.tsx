import { MAX_DEVICES, activeSessions } from '@lms/core';
import { AppShell } from '../components/AppShell';
import { useApp } from '../state/app-context';
import { D, useI18n } from '../i18n';
import {
  IconFingerprint,
  IconLock,
  IconMonitor,
  IconShieldCheck,
  IconSmartphone,
  IconTrash,
  IconUser,
} from '../components/Icons';

export function AccountPage() {
  const { user, state, device, forgetDevice, revokeSession, resetDemo } = useApp();
  const { l, formatDate } = useI18n();
  const nowIso = new Date().toISOString();
  const sessions = activeSessions(state.sessions, nowIso);

  const initials = (user?.displayName ?? 'AP')
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <AppShell title={l(D.nav.devices)} crumb={l(D.nav.account)} wide>
      <header className="pagehead">
        <div className="pagehead__text">
          <span className="pagehead__eyebrow">{l(D.account.eyebrow)}</span>
          <h1>{l(D.account.title)}</h1>
          <p>{l(D.account.intro(MAX_DEVICES))}</p>
        </div>
      </header>

      <div className="grid grid--2" style={{ marginBottom: 'var(--space-6)' }}>
        <section className="card">
          <div className="row" style={{ marginBottom: 'var(--space-5)' }}>
            <span className="avatar" style={{ width: 40, height: 40, fontSize: '0.9rem' }}>
              {initials}
            </span>
            <div>
              <div style={{ fontWeight: 600 }}>{user?.displayName}</div>
              <div className="muted" style={{ fontSize: '0.82rem' }}>
                {user?.role === 'admin' ? l(D.account.role.admin) : l(D.account.role.learner)} ·{' '}
                {user ? l(D.account.memberSince(formatDate(user.createdAt, { dateStyle: 'medium' }))) : ''}
              </div>
            </div>
          </div>

          <div className="keyvalues">
            <div className="keyvalues__title">{l(D.account.identity)}</div>
            <div className="keyvalues__row">
              <dt>{l(D.account.fieldEmail)}</dt>
              <dd className="mono">{user?.email}</dd>
            </div>
            <div className="keyvalues__row">
              <dt>{l(D.account.fieldPhone)}</dt>
              <dd className="mono">{user?.phone}</dd>
            </div>
            <div className="keyvalues__row">
              <dt>{l(D.account.fieldLearnerId)}</dt>
              <dd className="mono">{user?.id}</dd>
            </div>
            <div className="keyvalues__row">
              <dt>{l(D.account.fieldDeviceFp)}</dt>
              <dd className="mono">{device?.fingerprint ?? l(D.common.none)}</dd>
            </div>
          </div>

          <p className="muted" style={{ fontSize: '0.78rem', marginTop: 'var(--space-4)' }}>
            <IconFingerprint size={12} style={{ display: 'inline', verticalAlign: '-2px' }} /> {l(D.account.identityNote)}
          </p>
        </section>

        <section className="card">
          <div className="row" style={{ marginBottom: 'var(--space-4)' }}>
            <IconShieldCheck size={17} style={{ color: 'var(--accent)' }} />
            <h3 style={{ fontSize: '0.95rem' }}>{l(D.account.protectionsTitle)}</h3>
          </div>
          <ul className="stack stack--tight">
            {D.account.protections.map((protection, index) => {
              const isDesktopOnly = index === D.account.protections.length - 1;
              return (
                <li className="row" key={index} style={{ alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <span
                    className={isDesktopOnly ? 'badge badge--warning' : 'badge badge--success'}
                    style={{ marginTop: 2, flex: 'none' }}
                  >
                    {isDesktopOnly ? l(D.account.statusDesktop) : l(D.account.statusOn)}
                  </span>
                  <span className="secondary" style={{ fontSize: '0.83rem' }}>
                    {l(protection)}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <section className="card card--flush" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card__header">
          <IconMonitor size={17} />
          <h3>{l(D.account.devices)}</h3>
          <span className="card__hint">
            {state.devices.length} / {MAX_DEVICES}
          </span>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>{l(D.account.thDevice)}</th>
                <th>{l(D.account.thFingerprint)}</th>
                <th>{l(D.account.thFirstSeen)}</th>
                <th>{l(D.account.thLastSeen)}</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {state.devices.map((item) => (
                <tr key={item.id}>
                  <td>
                    <span className="row" style={{ gap: 'var(--space-2)' }}>
                      {item.platform === 'android' || item.platform === 'ios' ? (
                        <IconSmartphone size={15} />
                      ) : (
                        <IconMonitor size={15} />
                      )}
                      <strong>{item.label}</strong>
                      {item.id === state.currentDeviceId ? (
                        <span className="badge badge--accent">{l(D.account.thisDevice)}</span>
                      ) : null}
                    </span>
                  </td>
                  <td className="mono">{item.fingerprint}</td>
                  <td>{formatDate(item.firstSeenAt)}</td>
                  <td>{formatDate(item.lastSeenAt)}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button type="button" className="btn btn--danger" onClick={() => forgetDevice(item.id)}>
                      <IconTrash size={14} /> {l(D.account.remove)}
                    </button>
                  </td>
                </tr>
              ))}
              {state.devices.length === 0 ? (
                <tr>
                  <td colSpan={5} className="muted">
                    {l(D.account.noDevices)}
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card card--flush" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card__header">
          <IconLock size={17} />
          <h3>{l(D.account.sessions)}</h3>
          <span className="card__hint">{l(D.account.sessionsHint(sessions.length))}</span>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>{l(D.account.thSession)}</th>
                <th>{l(D.account.thOpened)}</th>
                <th>{l(D.account.thExpires)}</th>
                <th>{l(D.account.thState)}</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {state.sessions
                .slice()
                .reverse()
                .slice(0, 8)
                .map((session) => {
                  const isActive = !session.revokedAt && session.expiresAt > nowIso;
                  return (
                    <tr key={session.id}>
                      <td className="mono">{session.id}</td>
                      <td>{formatDate(session.issuedAt)}</td>
                      <td>{formatDate(session.expiresAt, { timeStyle: 'short' })}</td>
                      <td>
                        {isActive ? (
                          <span className="badge badge--success">{l(D.account.stateActive)}</span>
                        ) : session.revokedAt ? (
                          <span className="badge badge--danger">
                            {l(D.account.stateRevoked)}
                            {session.revokedReason ? ` · ${l(D.account.revokedReason[session.revokedReason])}` : ''}
                          </span>
                        ) : (
                          <span className="badge">{l(D.account.stateExpired)}</span>
                        )}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        {isActive && session.id !== state.currentSessionId ? (
                          <button type="button" className="btn btn--secondary" onClick={() => revokeSession(session.id)}>
                            {l(D.account.revoke)}
                          </button>
                        ) : null}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card">
        <div className="row row--between" style={{ flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <div>
            <div className="row" style={{ gap: 'var(--space-2)' }}>
              <IconUser size={16} />
              <strong>{l(D.account.resetTitle)}</strong>
            </div>
            <p className="muted" style={{ fontSize: '0.82rem', marginTop: 4, maxWidth: '64ch' }}>
              {l(D.account.resetText)}
            </p>
          </div>
          <button type="button" className="btn btn--danger" onClick={resetDemo}>
            <IconTrash size={15} /> {l(D.account.resetButton)}
          </button>
        </div>
      </section>
    </AppShell>
  );
}
