import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CEFR_LEVELS } from '@lms/core';
import { allLessons, courses, coursesByLevel } from '../content';
import { D, useI18n } from '../i18n';
import { useApp } from '../state/app-context';
import { LanguageSwitch } from '../components/LanguageSwitch';
import { Toasts } from '../components/Toasts';
import {
  IconChevronRight,
  IconLayers,
  IconLock,
  IconMoon,
  IconSun,
} from '../components/Icons';

/* ------------------------------------------------------------------
   Page d'accueil publique.

   C'est la seule page visible sans compte : elle doit dire ce que la
   plateforme contient et mener à la connexion, sans rien laisser fuir du
   contenu protégé — on annonce les titres des cours, jamais leur corps.
   ------------------------------------------------------------------ */

/** Compteur qui s'anime une fois, quand la carte entre dans la fenêtre. */
function CountUp({ to, suffix = '' }: { readonly to: number; readonly suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setValue(to);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 900;
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          // Sortie en douceur : le compteur ralentit avant de s'arrêter.
          setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="tabnum">
      {value}
      {suffix}
    </span>
  );
}

export function HomePage() {
  const { l, locale } = useI18n();
  const { theme, toggleTheme, user } = useApp();
  const lessons = allLessons();
  const interactiveCount = courses
    .flatMap((course) => course.modules.flatMap((module) => module.lessons))
    .flatMap((lesson) => lesson.blocks ?? [])
    .filter((block) => block.type === 'interactive').length;

  const [title, subtitle] = l(D.home.heroTitle).split('\n');

  return (
    <div className="home">
      <header className="home__bar">
        <span className="brand">
          <span className="brand__mark">
            <IconLayers size={19} style={{ color: '#04121f' }} />
          </span>
          <span>
            <span className="brand__name">{l(D.brand.name)}</span>
            <span className="brand__tag" style={{ display: 'block' }}>
              {l(D.brand.tagline)}
            </span>
          </span>
        </span>

        <div className="row" style={{ gap: 'var(--space-2)' }}>
          <LanguageSwitch deep />
          <button
            type="button"
            className="icon-btn icon-btn--deep"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? l(D.common.lightMode) : l(D.common.darkMode)}
          >
            {theme === 'dark' ? <IconSun size={17} /> : <IconMoon size={17} />}
          </button>
          <Link className="btn btn--primary" to={user ? '/app' : '/connexion'}>
            <IconLock size={15} /> {l(D.home.signIn)}
          </Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__inner">
          <span className="hero__eyebrow">{l(D.home.heroEyebrow)}</span>
          <h1 className="hero__title">
            {title}
            {subtitle ? (
              <>
                <br />
                <span className="hero__title-accent">{subtitle}</span>
              </>
            ) : null}
          </h1>
          <p className="hero__text">{l(D.home.heroText)}</p>
          <div className="hero__actions">
            <Link className="btn btn--primary btn--lg" to={user ? '/app' : '/connexion'}>
              {l(D.home.heroCta)} <IconChevronRight size={16} />
            </Link>
            <a className="btn btn--secondary btn--lg" href="#programme">
              {l(D.home.heroSecondary)}
            </a>
          </div>

          <dl className="hero__stats">
            <div>
              <dt>
                <CountUp to={courses.length} />
              </dt>
              <dd>{l(D.home.statCourses)}</dd>
            </div>
            <div>
              <dt>
                <CountUp to={lessons.length} />
              </dt>
              <dd>{l(D.home.statSteps)}</dd>
            </div>
            <div>
              <dt>
                <CountUp to={3} />
              </dt>
              <dd>{l(D.home.statLanguages)}</dd>
            </div>
            <div>
              <dt>
                <CountUp to={interactiveCount} />
              </dt>
              <dd>{l(D.home.statSchemas)}</dd>
            </div>
          </dl>
        </div>
      </section>

      <main className="home__body">
        <section id="programme" className="home__section">
          <h2>{l(D.home.levelsTitle)}</h2>
          <p className="home__lede">{l(D.home.levelsText)}</p>

          <div className="ladder">
            {CEFR_LEVELS.map((level, index) => (
              <article className="ladder__step" key={level} style={{ ['--i' as string]: index }}>
                <header>
                  <span className="ladder__badge">{level}</span>
                  <span className="ladder__name">{l(D.levels[level]).split('·')[1]?.trim()}</span>
                </header>
                <p className="ladder__hint">{l(D.levelHints[level])}</p>
                <ul className="ladder__courses">
                  {coursesByLevel(level).map((course) => (
                    <li key={course.id}>{l(course.title)}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="home__section">
          <h2>{l(D.home.featuresTitle)}</h2>
          <div className="pitch">
            {D.home.features.map((feature, index) => (
              <article className="pitch__card" key={index} style={{ ['--i' as string]: index }}>
                <span className="pitch__emoji" aria-hidden="true">
                  {feature.emoji}
                </span>
                <h3>{l(feature.title)}</h3>
                <p>{l(feature.text)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home__section">
          <h2>{l(D.home.howTitle)}</h2>
          <ol className="steps">
            {D.home.steps.map((step, index) => (
              <li key={index}>
                <span className="steps__rank">{index + 1}</span>
                <div>
                  <strong>{l(step.title)}</strong>
                  <span>{l(step.text)}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="home__cta">
          <h2>{l(D.home.ctaTitle)}</h2>
          <p>{l(D.home.ctaText)}</p>
          <Link className="btn btn--primary btn--lg" to={user ? '/app' : '/connexion'}>
            <IconLock size={16} /> {l(D.home.signIn)}
          </Link>
        </section>
      </main>

      <footer className="home__footer" lang={locale}>
        {l(D.home.footerNote)}
      </footer>

      <Toasts />
    </div>
  );
}
