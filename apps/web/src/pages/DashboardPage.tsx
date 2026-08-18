import { Link } from 'react-router-dom';
import { computeCourseProgress, isQuizPassed } from '@lms/core';
import { AppShell } from '../components/AppShell';
import { ProgressBar, ProgressRing } from '../components/Progress';
import { Figure, allLessons, courses, quizzes } from '../content';
import { useApp } from '../state/app-context';
import { D, useI18n } from '../i18n';
import { IconBook, IconChevronRight, IconPlay, IconShieldCheck, IconSparkle } from '../components/Icons';
import { CourseCatalogue } from '../components/CourseCatalogue';
import { GamificationPanel } from '../components/Gamification';

export function DashboardPage() {
  const { user, state } = useApp();
  const { l, locale } = useI18n();

  const lessons = allLessons();
  const completed = lessons.filter((lesson) => state.progress[lesson.id]?.completed).length;
  const percentage = lessons.length === 0 ? 0 : Math.round((completed / lessons.length) * 100);
  const coursesDone = courses.filter((course) => computeCourseProgress(course, state.progress).finished).length;
  const quizIds = Object.keys(quizzes);
  const quizzesPassed = quizIds.filter((id) => isQuizPassed(id, state.attempts)).length;

  // Le parcours à reprendre : le premier commencé mais non terminé, sinon le premier du catalogue.
  const started = courses.filter((course) => computeCourseProgress(course, state.progress).started);
  const current =
    started.find((course) => !computeCourseProgress(course, state.progress).finished) ?? started[0] ?? courses[0];
  const currentProgress = current ? computeCourseProgress(current, state.progress) : null;
  const resumeLesson = currentProgress?.resumeLesson ?? null;
  const resumeHref =
    current && resumeLesson
      ? resumeLesson.kind === 'quiz'
        ? `/app/cours/${current.slug}/quiz/${resumeLesson.quizId}`
        : `/app/cours/${current.slug}/lecon/${resumeLesson.id}`
      : '/app/catalogue';

  const firstName = user?.firstName ?? '';

  return (
    <AppShell title={l(D.nav.dashboard)} wide>
      <header className="pagehead">
        <div className="pagehead__text">
          <span className="pagehead__eyebrow">{l(D.dashboard.eyebrow)}</span>
          <h1>{l(D.dashboard.greeting(firstName))}</h1>
          <p>{percentage > 0 ? l(D.dashboard.introStarted) : l(D.dashboard.introNew)}</p>
        </div>
        <div className="pagehead__aside">
          <ProgressRing value={percentage} size={104} />
        </div>
      </header>

      <div className="grid grid--4" style={{ marginBottom: 'var(--space-8)' }}>
        <div className="stat">
          <span className="stat__label">{l(D.dashboard.statProgress)}</span>
          <span className="stat__value">{percentage}%</span>
          <ProgressBar value={percentage} thin />
        </div>
        <div className="stat">
          <span className="stat__label">{l(D.dashboard.statSteps)}</span>
          <span className="stat__value">
            {completed}
            <span className="muted" style={{ fontSize: '1rem', fontWeight: 500 }}>
              {' '}
              / {lessons.length}
            </span>
          </span>
          <span className="stat__hint">{l(D.dashboard.statStepsHint(courses.length))}</span>
        </div>
        <div className="stat">
          <span className="stat__label">{l(D.dashboard.statQuizzes)}</span>
          <span className="stat__value">
            {quizzesPassed}
            <span className="muted" style={{ fontSize: '1rem', fontWeight: 500 }}>
              {' '}
              / {quizIds.length}
            </span>
          </span>
          <span className="stat__hint">{l(D.dashboard.statQuizzesHint)}</span>
        </div>
        <div className="stat">
          <span className="stat__label">{l(D.dashboard.statCourses)}</span>
          <span className="stat__value">
            {coursesDone}
            <span className="muted" style={{ fontSize: '1rem', fontWeight: 500 }}>
              {' '}
              / {courses.length}
            </span>
          </span>
          <span className="stat__hint">{l(D.dashboard.statCoursesHint(courses.length))}</span>
        </div>
      </div>

      {current && currentProgress ? (
        <section className="card" style={{ marginBottom: 'var(--space-8)', padding: 0, overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 'var(--space-8)', padding: 'var(--space-8)', flexWrap: 'wrap', alignItems: 'center' }}>
            <ProgressRing value={currentProgress.percentage} size={112} />
            <div style={{ flex: '1 1 320px', minWidth: 0 }}>
              <span className="badge badge--accent">
                <IconSparkle size={12} /> {l(D.levels[current.level])}
              </span>
              <h2 style={{ margin: 'var(--space-3) 0 var(--space-2)' }}>{l(current.title)}</h2>
              <p className="secondary" style={{ maxWidth: '58ch' }}>
                {resumeLesson ? l(D.dashboard.nextStep(l(resumeLesson.title))) : l(D.dashboard.allDone)}
              </p>
              <div className="row" style={{ marginTop: 'var(--space-5)', flexWrap: 'wrap' }}>
                <Link className="btn btn--primary" to={resumeHref}>
                  <IconPlay size={15} /> {currentProgress.started ? l(D.dashboard.resume) : l(D.dashboard.start)}
                </Link>
                <Link className="btn btn--secondary" to={`/app/cours/${current.slug}`}>
                  <IconBook size={15} /> {l(D.dashboard.syllabus)}
                </Link>
              </div>
            </div>
          </div>
          <div className="shield-bar" style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none', borderBottom: 'none' }}>
            <IconShieldCheck size={14} />
            {l(D.dashboard.protectedNotice(user?.email ?? ''))}
          </div>
        </section>
      ) : null}

      <div style={{ marginBottom: 'var(--space-8)' }}>
        <GamificationPanel />
      </div>

      <figure className="figure" style={{ marginBottom: 'var(--space-8)' }}>
        <Figure figureId="cecrl-echelle" locale={locale} />
      </figure>

      <div className="row row--between" style={{ marginBottom: 'var(--space-5)', flexWrap: 'wrap' }}>
        <h2>{l(D.dashboard.catalogue)}</h2>
        <Link className="btn btn--secondary" to="/app/catalogue">
          {l(D.nav.catalogue)} <IconChevronRight size={15} />
        </Link>
      </div>
      <CourseCatalogue />

    </AppShell>
  );
}
