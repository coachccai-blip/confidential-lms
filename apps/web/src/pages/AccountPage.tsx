import { MAX_DEVICES, activeSessions } from '@lms/core';
import { AppShell } from '../components/AppShell';
import { useApp } from '../state/app-context';
import {
  IconFingerprint,
  IconLock,
  IconMonitor,
  IconShieldCheck,
  IconSmartphone,
  IconTrash,
  IconUser,
} from '../components/Icons';

const PROTECTIONS = [
  { label: 'Filigrane visible email + téléphone, repositionné toutes les 30 s', status: 'Actif' },
  { label: 'Empreinte invisible injectée dans chaque texte servi', status: 'Actif' },
  { label: 'Copie, couper, clic droit, glisser-déposer neutralisés', status: 'Actif' },
  { label: 'Impression et export PDF désactivés', status: 'Actif' },
  { label: 'Masquage du contenu en perte de focus ou onglet caché', status: 'Actif' },
  { label: 'Détection best-effort des outils de développement', status: 'Actif' },
  { label: 'Session unique — toute nouvelle connexion révoque les autres', status: 'Actif' },
  { label: 'Blocage matériel des captures d’écran', status: 'Application desktop requise' },
] as const;

export function AccountPage() {
  const { user, state, device, forgetDevice, revokeSession, resetDemo } = useApp();
  const nowIso = new Date().toISOString();
  const sessions = activeSessions(state.sessions, nowIso);

  return (
    <AppShell title="Appareils & sessions" crumb="Compte" wide>
      <div className="page__header">
        <div>
          <h1>Mon compte</h1>
          <p>
            Gérez les appareils autorisés et les sessions actives. La politique de diffusion limite chaque compte à{' '}
            {MAX_DEVICES} appareils et à une seule session simultanée.
          </p>
        </div>
      </div>

      <div className="grid grid--2" style={{ marginBottom: 'var(--space-6)' }}>
        <section className="card">
          <div className="row" style={{ marginBottom: 'var(--space-5)' }}>
            <span className="avatar" style={{ width: 40, height: 40, fontSize: '0.9rem' }}>
              {(user?.displayName ?? 'AP')
                .split(' ')
                .map((part) => part.charAt(0))
                .join('')
                .slice(0, 2)
                .toUpperCase()}
            </span>
            <div>
              <div style={{ fontWeight: 600 }}>{user?.displayName}</div>
              <div className="muted" style={{ fontSize: '0.82rem' }}>
                {user?.role === 'admin' ? 'Administrateur' : 'Apprenant'} · inscrit le{' '}
                {user ? new Date(user.createdAt).toLocaleDateString('fr-FR') : '—'}
              </div>
            </div>
          </div>

          <div className="keyvalues">
            <div className="keyvalues__title">Identité de filigrane</div>
            <div className="keyvalues__row">
              <dt>Email</dt>
              <dd className="mono">{user?.email}</dd>
            </div>
            <div className="keyvalues__row">
              <dt>Téléphone</dt>
              <dd className="mono">{user?.phone}</dd>
            </div>
            <div className="keyvalues__row">
              <dt>Identifiant apprenant</dt>
              <dd className="mono">{user?.id}</dd>
            </div>
            <div className="keyvalues__row">
              <dt>Empreinte appareil</dt>
              <dd className="mono">{device?.fingerprint ?? '—'}</dd>
            </div>
          </div>

          <p className="muted" style={{ fontSize: '0.78rem', marginTop: 'var(--space-4)' }}>
            <IconFingerprint size={12} style={{ display: 'inline', verticalAlign: '-2px' }} /> Ces valeurs composent
            l’empreinte injectée dans chaque leçon que vous consultez.
          </p>
        </section>

        <section className="card">
          <div className="row" style={{ marginBottom: 'var(--space-4)' }}>
            <IconShieldCheck size={17} style={{ color: 'var(--accent)' }} />
            <h3 style={{ fontSize: '0.95rem' }}>État des protections</h3>
          </div>
          <ul className="stack stack--tight">
            {PROTECTIONS.map((protection) => (
              <li className="row" key={protection.label} style={{ alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                <span
                  className={protection.status === 'Actif' ? 'badge badge--success' : 'badge badge--warning'}
                  style={{ marginTop: 2, flex: 'none' }}
                >
                  {protection.status}
                </span>
                <span className="secondary" style={{ fontSize: '0.83rem' }}>
                  {protection.label}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="card card--flush" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="card__header">
          <IconMonitor size={17} />
          <h3>Appareils enregistrés</h3>
          <span className="card__hint">
            {state.devices.length} / {MAX_DEVICES}
          </span>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Appareil</th>
                <th>Empreinte</th>
                <th>Première connexion</th>
                <th>Dernière activité</th>
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
                      {item.id === state.currentDeviceId ? <span className="badge badge--accent">Cet appareil</span> : null}
                    </span>
                  </td>
                  <td className="mono">{item.fingerprint}</td>
                  <td>{new Date(item.firstSeenAt).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' })}</td>
                  <td>{new Date(item.lastSeenAt).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' })}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button type="button" className="btn btn--danger" onClick={() => forgetDevice(item.id)}>
                      <IconTrash size={14} /> Retirer
                    </button>
                  </td>
                </tr>
              ))}
              {state.devices.length === 0 ? (
                <tr>
                  <td colSpan={5} className="muted">
                    Aucun appareil enregistré.
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
          <h3>Sessions</h3>
          <span className="card__hint">{sessions.length} active(s) · jeton valable 15 min</span>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Session</th>
                <th>Ouverte le</th>
                <th>Expire</th>
                <th>État</th>
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
                      <td>{new Date(session.issuedAt).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' })}</td>
                      <td>{new Date(session.expiresAt).toLocaleTimeString('fr-FR', { timeStyle: 'short' })}</td>
                      <td>
                        {isActive ? (
                          <span className="badge badge--success">Active</span>
                        ) : session.revokedAt ? (
                          <span className="badge badge--danger">Révoquée · {session.revokedReason}</span>
                        ) : (
                          <span className="badge">Expirée</span>
                        )}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        {isActive && session.id !== state.currentSessionId ? (
                          <button type="button" className="btn btn--secondary" onClick={() => revokeSession(session.id)}>
                            Révoquer
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
              <strong>Réinitialiser la démonstration</strong>
            </div>
            <p className="muted" style={{ fontSize: '0.82rem', marginTop: 4, maxWidth: '64ch' }}>
              Efface la progression, les tentatives de quiz, les appareils et le journal de sécurité stockés dans ce
              navigateur. Aucune donnée n’a jamais quitté votre poste.
            </p>
          </div>
          <button type="button" className="btn btn--danger" onClick={resetDemo}>
            <IconTrash size={15} /> Tout effacer
          </button>
        </div>
      </section>
    </AppShell>
  );
}
