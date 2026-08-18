import { useState, type FormEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { decodeInvite, type InvitePayload } from '@lms/core';
import { useApp } from '../state/app-context';
import { D, useI18n } from '../i18n';
import { LanguageSwitch } from '../components/LanguageSwitch';
import {
  IconEyeOff,
  IconFingerprint,
  IconLayers,
  IconLock,
  IconMoon,
  IconSun,
} from '../components/Icons';
import { Toasts } from '../components/Toasts';

const FEATURE_ICONS = [IconFingerprint, IconEyeOff, IconLayers, IconLock] as const;

export function LoginPage() {
  const { user, signIn, theme, toggleTheme, pushToast } = useApp();
  const { l } = useI18n();
  const navigate = useNavigate();
  const [email, setEmail] = useState('marie.dubois@exemple.fr');
  const [firstName, setFirstName] = useState('Marie');
  const [password, setPassword] = useState('demo-lumiere');
  const [invite, setInvite] = useState('');
  const [applied, setApplied] = useState<InvitePayload | null>(null);
  const [inviteNotice, setInviteNotice] = useState<{ ok: boolean; text: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (user) return <Navigate to="/app" replace />;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(l(D.login.errorEmail));
      return;
    }
    if (password.length < 8) {
      setError(l(D.login.errorPassword));
      return;
    }

    setBusy(true);
    try {
      const outcome = await signIn({
        email: email.trim(),
        password,
        firstName: firstName.trim(),
        invite: applied,
      });
      if (!outcome.ok) {
        setError(outcome.reason === 'bad-password' ? l(D.login.errorWrongPassword) : outcome.message);
        return;
      }
      pushToast({ tone: 'success', title: D.toast.signedInTitle, text: D.toast.signedInText });
      navigate('/app');
    } finally {
      setBusy(false);
    }
  }

  /**
   * L'invitation remplit le formulaire au lieu de le remplacer : l'apprenant
   * voit ce qui a été renseigné et reste libre de le corriger.
   */
  function applyInvite() {
    const decoded = decodeInvite(invite);
    if (!decoded) {
      setApplied(null);
      setInviteNotice({ ok: false, text: l(D.login.inviteFailed) });
      return;
    }
    setFirstName(decoded.firstName);
    setEmail(decoded.email);
    setPassword('');
    setApplied(decoded);
    setInviteNotice({ ok: true, text: l(D.login.inviteOk(decoded.firstName)) });
  }

  return (
    <div className="auth">
      <section className="auth__aside">
        <div className="brand">
          <span className="brand__mark">
            <IconLayers size={19} style={{ color: '#04121f' }} />
          </span>
          <span>
            <span className="brand__name">{l(D.brand.name)}</span>
            <span className="brand__tag" style={{ display: 'block' }}>
              {l(D.brand.tagline)}
            </span>
          </span>
        </div>

        <div className="auth__pitch">
          <h1>{l(D.login.headline)}</h1>
          <p>{l(D.login.intro)}</p>

          <div className="auth__features">
            {D.login.features.map((feature, index) => {
              const Icon = FEATURE_ICONS[index] ?? IconLock;
              return (
                <div className="auth__feature" key={index}>
                  <Icon size={17} />
                  <span>
                    <strong>{l(feature.title)}.</strong> {l(feature.text)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <p style={{ fontSize: '0.78rem', position: 'relative', maxWidth: '52ch', color: 'var(--on-deep-muted)' }}>
          {l(D.login.disclaimer)}
        </p>
      </section>

      <section className="auth__panel">
        <form className="auth__form" onSubmit={onSubmit}>
          <div className="row row--between">
            <h2>{l(D.login.title)}</h2>
            <div className="row" style={{ gap: 'var(--space-2)' }}>
              <LanguageSwitch />
              <button type="button" className="icon-btn" onClick={toggleTheme} aria-label={l(D.common.darkMode)}>
                {theme === 'dark' ? <IconSun size={17} /> : <IconMoon size={17} />}
              </button>
            </div>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="invite">
              {l(D.login.inviteLabel)}
            </label>
            <div className="row" style={{ alignItems: 'stretch' }}>
              <input
                id="invite"
                className="input"
                value={invite}
                onChange={(event) => setInvite(event.target.value)}
                placeholder={l(D.login.invitePlaceholder)}
                style={{ flex: 1, minWidth: 0 }}
              />
              <button
                type="button"
                className="btn btn--secondary"
                onClick={applyInvite}
                disabled={invite.trim().length === 0}
              >
                {l(D.login.inviteApply)}
              </button>
            </div>
            {inviteNotice ? (
              <span className="field__hint" style={{ color: inviteNotice.ok ? 'var(--success)' : 'var(--danger)' }}>
                {inviteNotice.text}
              </span>
            ) : null}
          </div>

          <div className="field">
            <label className="field__label" htmlFor="firstName">
              {l(D.login.firstName)}
            </label>
            <input
              id="firstName"
              className="input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="given-name"
              required
            />
            <span className="field__hint">{l(D.login.firstNameHint)}</span>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="email">
              {l(D.login.email)}
            </label>
            <input
              id="email"
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            <span className="field__hint">{l(D.login.emailHint)}</span>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="password">
              {l(D.login.password)}
            </label>
            <input
              id="password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          {error ? (
            <div className="callout callout--danger" style={{ padding: 'var(--space-3) var(--space-4)' }}>
              <span className="callout__icon">
                <IconLock size={16} />
              </span>
              <span style={{ fontSize: '0.85rem' }}>{error}</span>
            </div>
          ) : null}

          <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={busy}>
            {l(D.login.submit)}
          </button>

          <div className="auth__demo">
            <strong style={{ color: 'var(--text-secondary)' }}>{l(D.login.demoTitle)}</strong>
            <span>{l(D.login.demoText)}</span>
          </div>
        </form>
      </section>

      <Toasts />
    </div>
  );
}
