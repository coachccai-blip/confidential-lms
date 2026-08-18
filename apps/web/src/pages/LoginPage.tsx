import { useState, type FormEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useApp } from '../state/app-context';
import {
  IconEyeOff,
  IconFingerprint,
  IconLock,
  IconShieldCheck,
  IconSun,
  IconMoon,
  IconVolcano,
} from '../components/Icons';
import { Toasts } from '../components/Toasts';

const FEATURES = [
  {
    icon: IconFingerprint,
    title: 'Filigrane nominatif',
    text: 'Chaque écran affiche votre email et votre téléphone ; chaque texte porte une empreinte invisible qui identifie la source d’une fuite.',
  },
  {
    icon: IconLock,
    title: 'Copie, impression et export bloqués',
    text: 'Sélection, clic droit, copier-coller, Ctrl+P et sauvegarde de page sont neutralisés sur les écrans de contenu.',
  },
  {
    icon: IconEyeOff,
    title: 'Masquage automatique',
    text: 'Le contenu disparaît dès que la fenêtre perd le focus ou passe en arrière-plan.',
  },
  {
    icon: IconShieldCheck,
    title: 'Session unique, 3 appareils maximum',
    text: 'Une nouvelle connexion révoque les précédentes. Chaque événement est horodaté dans votre journal de sécurité.',
  },
] as const;

export function LoginPage() {
  const { user, signIn, theme, toggleTheme, pushToast } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState('marie.dubois@exemple.fr');
  const [phone, setPhone] = useState('+33 6 12 34 56 78');
  const [name, setName] = useState('Marie Dubois');
  const [password, setPassword] = useState('demo-magmatica');
  const [error, setError] = useState<string | null>(null);

  if (user) return <Navigate to="/app" replace />;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Adresse email invalide.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 8) {
      setError('Numéro de téléphone invalide — il sert au filigrane de traçabilité.');
      return;
    }
    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }

    const outcome = signIn({ email: email.trim(), phone: phone.trim(), displayName: name.trim() || 'Apprenant' });
    if (!outcome.ok) {
      setError(outcome.message);
      return;
    }
    pushToast({ tone: 'success', title: 'Connexion établie', text: 'Protections de contenu activées sur cet appareil.' });
    navigate('/app');
  }

  return (
    <div className="auth">
      <section className="auth__aside">
        <div className="brand">
          <span className="brand__mark">
            <IconVolcano size={19} style={{ color: '#1a0d04' }} />
          </span>
          <span>
            <span className="brand__name">Magmatica</span>
            <span className="brand__tag" style={{ display: 'block' }}>
              Formation protégée
            </span>
          </span>
        </div>

        <div className="auth__pitch">
          <h1>Vos formations, protégées et traçables.</h1>
          <p>
            Plateforme de diffusion de contenus pédagogiques à forte valeur commerciale. Chaque leçon est marquée au nom
            de l’apprenant qui la consulte, et chaque tentative de copie est enregistrée.
          </p>

          <div className="auth__features">
            {FEATURES.map((feature) => (
              <div className="auth__feature" key={feature.title}>
                <feature.icon size={17} />
                <span>
                  <strong style={{ color: 'var(--text)' }}>{feature.title}.</strong> {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="muted" style={{ fontSize: '0.78rem', position: 'relative', maxWidth: '52ch' }}>
          Démonstration web publique. Les protections système les plus fortes — blocage réel des captures d’écran —
          nécessitent les applications Electron et mobile décrites dans le README du projet.
        </p>
      </section>

      <section className="auth__panel">
        <form className="auth__form" onSubmit={onSubmit}>
          <div className="row row--between">
            <h2>Connexion apprenant</h2>
            <button type="button" className="icon-btn" onClick={toggleTheme} aria-label="Changer de thème">
              {theme === 'dark' ? <IconSun size={17} /> : <IconMoon size={17} />}
            </button>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="name">
              Nom complet
            </label>
            <input id="name" className="input" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="email">
              Adresse email
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
            <span className="field__hint">Affichée dans le filigrane de chaque écran de contenu.</span>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="phone">
              Téléphone
            </label>
            <input
              id="phone"
              className="input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              required
            />
            <span className="field__hint">Second marqueur de traçabilité, exigé par la politique de diffusion.</span>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="password">
              Mot de passe
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

          <button type="submit" className="btn btn--primary btn--lg btn--block">
            Accéder à mes formations
          </button>

          <div className="auth__demo">
            <strong style={{ color: 'var(--text-secondary)' }}>Mode démonstration</strong>
            <span>
              Aucun serveur n’est interrogé : l’authentification, les sessions et la progression sont simulées localement
              pour rendre les mécanismes de protection observables. Utilisez une adresse commençant par
              <span className="mono"> admin@ </span>
              pour ouvrir l’espace d’administration.
            </span>
          </div>
        </form>
      </section>

      <Toasts />
    </div>
  );
}
