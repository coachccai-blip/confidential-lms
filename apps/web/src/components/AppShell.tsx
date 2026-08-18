import { useEffect, useState, type ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { computeCourseProgress } from '@lms/core';
import { useApp } from '../state/app-context';
import { volcansCourse } from '../content';
import {
  IconBook,
  IconGauge,
  IconHome,
  IconLogout,
  IconMenu,
  IconMoon,
  IconShieldCheck,
  IconSun,
  IconUser,
  IconVolcano,
} from './Icons';
import { ProgressBar } from './Progress';
import { Toasts } from './Toasts';

export interface AppShellProps {
  readonly title: string;
  readonly crumb?: string;
  readonly actions?: ReactNode;
  readonly children: ReactNode;
  readonly wide?: boolean;
}

export function AppShell({ title, crumb, actions, children, wide = false }: AppShellProps) {
  const { user, state, signOut, theme, toggleTheme } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const progress = computeCourseProgress(volcansCourse, state.progress);
  const initials = (user?.displayName ?? 'AP')
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const criticalEvents = state.events.filter((event) => event.severity === 'critical').length;

  return (
    <div className="app-shell">
      {menuOpen ? <div className="scrim" onClick={() => setMenuOpen(false)} aria-hidden="true" /> : null}

      <aside className={menuOpen ? 'sidebar sidebar--open' : 'sidebar'}>
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

        <nav className="nav" aria-label="Navigation principale">
          <span className="nav__label">Apprentissage</span>
          <NavLink to="/app" end className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}>
            <IconHome size={17} /> Tableau de bord
          </NavLink>
          <NavLink
            to="/app/cours/volcans"
            className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}
          >
            <IconBook size={17} /> Mes formations
            <span className="nav__badge">{progress.percentage}%</span>
          </NavLink>

          <span className="nav__label">Compte</span>
          <NavLink to="/app/compte" className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}>
            <IconUser size={17} /> Appareils &amp; sessions
          </NavLink>
          <NavLink
            to="/app/securite"
            className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}
          >
            <IconShieldCheck size={17} /> Journal de sécurité
            {criticalEvents > 0 ? <span className="nav__badge">{criticalEvents}</span> : null}
          </NavLink>

          {user?.role === 'admin' ? (
            <>
              <span className="nav__label">Administration</span>
              <NavLink to="/admin" className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}>
                <IconGauge size={17} /> Pilotage &amp; traçabilité
              </NavLink>
            </>
          ) : null}
          <div className="side-course">
            <span className="side-course__label">Parcours en cours</span>
            <span className="side-course__title">Les volcans — comprendre la Terre qui gronde</span>
            <ProgressBar value={progress.percentage} thin />
            <span className="muted" style={{ fontSize: '0.72rem' }}>
              {progress.completed} / {progress.total} étapes · {progress.percentage} %
            </span>
          </div>
        </nav>

        <div className="sidebar__footer">
          <div className="shield-bar" style={{ justifyContent: 'center' }}>
            <span className="shield-bar__pill">
              <IconShieldCheck size={12} /> Protections actives
            </span>
          </div>
          <NavLink to="/app/compte" className="user-chip">
            <span className="avatar">{initials}</span>
            <span className="user-chip__meta">
              <span className="user-chip__name">{user?.displayName ?? 'Apprenant'}</span>
              <span className="user-chip__mail">{user?.email ?? ''}</span>
            </span>
          </NavLink>
          <button type="button" className="btn btn--ghost btn--block" onClick={signOut}>
            <IconLogout size={16} /> Se déconnecter
          </button>
        </div>
      </aside>

      <div className="main">
        <header className="topbar">
          <button type="button" className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Ouvrir le menu">
            <IconMenu size={18} />
          </button>
          {crumb ? (
            <>
              <span className="topbar__crumb">{crumb}</span>
              <span className="topbar__crumb" aria-hidden="true">
                /
              </span>
            </>
          ) : null}
          <span className="topbar__title">{title}</span>
          <div className="topbar__actions">
            {actions}
            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
              title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            >
              {theme === 'dark' ? <IconSun size={17} /> : <IconMoon size={17} />}
            </button>
          </div>
        </header>

        <main className={wide ? 'page' : 'page page--narrow'}>{children}</main>
      </div>

      <Toasts />
    </div>
  );
}
