import { useEffect, useState, type ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { computeCourseProgress } from '@lms/core';
import { useApp } from '../state/app-context';
import { allLessons, courses } from '../content';
import { D, useI18n } from '../i18n';
import {
  IconBook,
  IconGauge,
  IconHome,
  IconLogout,
  IconMenu,
  IconMoon,
  IconShieldCheck,
  IconSun,
  IconVolume,
  IconVolumeOff,
  IconUser,
  IconLayers,
} from './Icons';
import { playSound } from '../feedback/sounds';
import { GamificationWatcher, LevelChip } from './Gamification';
import { LanguageSwitch } from './LanguageSwitch';
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
  const { user, state, signOut, theme, toggleTheme, toggleSound } = useApp();
  const { l } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const lessons = allLessons();
  const completed = lessons.filter((lesson) => state.progress[lesson.id]?.completed).length;
  const percentage = lessons.length === 0 ? 0 : Math.round((completed / lessons.length) * 100);

  // Le parcours mis en avant : le premier commencé mais non terminé.
  const currentCourse =
    courses.find((course) => {
      const progress = computeCourseProgress(course, state.progress);
      return progress.started && !progress.finished;
    }) ?? courses[0];

  // Le compteur du bandeau porte sur CE cours, pas sur le catalogue entier.
  const currentProgress = currentCourse ? computeCourseProgress(currentCourse, state.progress) : null;

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
            <IconLayers size={19} style={{ color: '#04121f' }} />
          </span>
          <span>
            <span className="brand__name">{l(D.brand.name)}</span>
            <span className="brand__tag" style={{ display: 'block' }}>
              {l(D.brand.tagline)}
            </span>
          </span>
        </div>

        <nav className="nav" aria-label={l(D.nav.learning)}>
          <span className="nav__label">{l(D.nav.learning)}</span>
          <NavLink to="/app" end className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}>
            <IconHome size={17} /> {l(D.nav.dashboard)}
          </NavLink>
          <NavLink
            to="/app/catalogue"
            className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}
          >
            <IconBook size={17} /> {l(D.nav.catalogue)}
            <span className="nav__badge">{percentage}%</span>
          </NavLink>

          <span className="nav__label">{l(D.nav.account)}</span>
          <NavLink to="/app/compte" className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}>
            <IconUser size={17} /> {l(D.nav.devices)}
          </NavLink>
          <NavLink
            to="/app/securite"
            className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}
          >
            <IconShieldCheck size={17} /> {l(D.nav.security)}
            {criticalEvents > 0 ? <span className="nav__badge">{criticalEvents}</span> : null}
          </NavLink>

          {user?.role === 'admin' ? (
            <>
              <span className="nav__label">{l(D.nav.administration)}</span>
              <NavLink to="/admin" className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}>
                <IconGauge size={17} /> {l(D.nav.admin)}
              </NavLink>
            </>
          ) : null}

          <LevelChip />

          <div className="side-course">
            <span className="side-course__label">{l(D.nav.inProgress)}</span>
            <span className="side-course__title">{currentCourse ? l(currentCourse.title) : ''}</span>
            <ProgressBar value={currentProgress?.percentage ?? 0} thin />
            <span style={{ fontSize: '0.72rem', color: 'var(--on-deep-muted)' }}>
              {l(
                D.nav.stepsDone(
                  currentProgress?.completed ?? 0,
                  currentProgress?.total ?? 0,
                  currentProgress?.percentage ?? 0,
                ),
              )}
            </span>
          </div>
        </nav>

        <div className="sidebar__footer">
          <LanguageSwitch deep />
          <NavLink to="/app/compte" className="user-chip">
            <span className="avatar">{initials}</span>
            <span className="user-chip__meta">
              <span className="user-chip__name">{user?.displayName ?? '—'}</span>
              <span className="user-chip__mail">{user?.email ?? ''}</span>
            </span>
          </NavLink>
          <button type="button" className="btn btn--ghost btn--block" onClick={signOut} style={{ color: 'var(--on-deep-secondary)' }}>
            <IconLogout size={16} /> {l(D.nav.signOut)}
          </button>
        </div>
      </aside>

      <div className="main">
        <header className="topbar">
          <button type="button" className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={l(D.common.openMenu)}>
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
            <LanguageSwitch />
            <button
              type="button"
              className="icon-btn"
              onClick={() => {
                // Le son de bascule ne se joue qu'à l'allumage : le couper
                // en émettant un bruit serait contradictoire.
                if (!state.soundOn) playSound('toggle', true);
                toggleSound();
              }}
              aria-pressed={state.soundOn}
              aria-label={l(state.soundOn ? D.common.soundOff : D.common.soundOn)}
              title={l(state.soundOn ? D.common.soundOff : D.common.soundOn)}
            >
              {state.soundOn ? <IconVolume size={17} /> : <IconVolumeOff size={17} />}
            </button>
            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? l(D.common.lightMode) : l(D.common.darkMode)}
              title={theme === 'dark' ? l(D.common.lightMode) : l(D.common.darkMode)}
            >
              {theme === 'dark' ? <IconSun size={17} /> : <IconMoon size={17} />}
            </button>
          </div>
        </header>

        <main className={wide ? 'page' : 'page page--narrow'}>{children}</main>
      </div>

      <GamificationWatcher />
      <Toasts />
    </div>
  );
}
