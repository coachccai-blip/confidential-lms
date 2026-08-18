import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { bestScore, computeCourseProgress, estimatedRemainingMinutes, isQuizPassed } from '@lms/core';
import { AppShell } from '../components/AppShell';
import { ProgressBar, ProgressRing } from '../components/Progress';
import { getCourseBySlug } from '../content';
import { useApp } from '../state/app-context';
import { LEVEL_LABEL, formatDuration } from '../lib/format';
import {
  IconAward,
  IconCheck,
  IconChevronDown,
  IconChevronRight,
  IconClock,
  IconList,
  IconPlay,
  IconShieldCheck,
} from '../components/Icons';

export function CoursePage() {
  const { slug } = useParams();
  const { state } = useApp();
  const course = getCourseBySlug(slug);
  const [collapsed, setCollapsed] = useState<readonly string[]>([]);

  if (!course || course.status !== 'published') return <Navigate to="/app" replace />;

  const progress = computeCourseProgress(course, state.progress);
  const remaining = estimatedRemainingMinutes(course, state.progress);
  const resumeHref = progress.resumeLesson
    ? progress.resumeLesson.kind === 'quiz'
      ? `/app/cours/${course.slug}/quiz/${progress.resumeLesson.quizId}`
      : `/app/cours/${course.slug}/lecon/${progress.resumeLesson.id}`
    : `/app/cours/${course.slug}`;

  function toggle(moduleId: string) {
    setCollapsed((current) =>
      current.includes(moduleId) ? current.filter((id) => id !== moduleId) : [...current, moduleId],
    );
  }

  return (
    <AppShell title={course.title} crumb="Mes formations" wide>
      <section className="hero">
        <div
          className="hero__glow"
          style={{ background: `linear-gradient(120deg, ${course.accentFrom}, ${course.accentTo})` }}
        />
        <div className="hero__content">
          <div className="hero__text">
            <div className="wrap">
              {course.tags.map((tag) => (
                <span className="badge badge--accent" key={tag}>
                  {tag}
                </span>
              ))}
              <span className="badge">Niveau {LEVEL_LABEL[course.level]}</span>
            </div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <div className="hero__actions">
              <Link className="btn btn--primary btn--lg" to={resumeHref}>
                <IconPlay size={15} /> {progress.started ? 'Reprendre le parcours' : 'Commencer le module 1'}
              </Link>
              <span className="badge">
                <IconClock size={12} /> {formatDuration(remaining)} restantes
              </span>
              <span className="badge">
                <IconList size={12} /> {progress.total} étapes
              </span>
            </div>
          </div>

          <aside className="hero__aside">
            <ProgressRing value={progress.percentage} size={124} />
            <span className="muted" style={{ fontSize: '0.8rem', textAlign: 'center' }}>
              {progress.completed} étape{progress.completed > 1 ? 's' : ''} terminée{progress.completed > 1 ? 's' : ''} sur{' '}
              {progress.total}
            </span>
            {progress.finished ? (
              <span className="badge badge--success">
                <IconAward size={12} /> Parcours terminé
              </span>
            ) : null}
          </aside>
        </div>
      </section>

      <div className="shield-bar" style={{ marginBottom: 'var(--space-6)' }}>
        <IconShieldCheck size={14} />
        Contenu protégé : filigrane nominatif, copie et impression désactivées, journalisation des accès.
        <span className="shield-bar__pill" style={{ marginLeft: 'auto' }}>
          Traçabilité active
        </span>
      </div>

      <div className="stack">
        {course.modules.map((module, moduleIndex) => {
          const moduleProgress = progress.modules[moduleIndex];
          const isCollapsed = collapsed.includes(module.id);

          return (
            <section className="module" key={module.id}>
              <button type="button" className="module__head" onClick={() => toggle(module.id)} aria-expanded={!isCollapsed}>
                <span className="module__index">{moduleIndex + 1}</span>
                <span style={{ minWidth: 0 }}>
                  <span className="module__title" style={{ display: 'block' }}>
                    {module.title}
                  </span>
                  <span className="module__summary">{module.summary}</span>
                </span>
                <span className="module__meta">
                  <span className="muted tabnum" style={{ fontSize: '0.78rem' }}>
                    {moduleProgress?.completed ?? 0}/{moduleProgress?.total ?? 0}
                  </span>
                  <span className="module__progress">
                    <ProgressBar value={moduleProgress?.percentage ?? 0} thin />
                  </span>
                  {isCollapsed ? <IconChevronRight size={16} /> : <IconChevronDown size={16} />}
                </span>
              </button>

              {isCollapsed
                ? null
                : module.lessons.map((lesson) => {
                    const done = state.progress[lesson.id]?.completed === true;
                    const quizScore = lesson.quizId ? bestScore(lesson.quizId, state.attempts) : null;
                    const quizPassed = lesson.quizId ? isQuizPassed(lesson.quizId, state.attempts) : false;
                    const href =
                      lesson.kind === 'quiz'
                        ? `/app/cours/${course.slug}/quiz/${lesson.quizId}`
                        : `/app/cours/${course.slug}/lecon/${lesson.id}`;

                    return (
                      <Link className="lesson-row" to={href} key={lesson.id}>
                        <span className={done ? 'lesson-row__check lesson-row__check--done' : 'lesson-row__check'}>
                          <IconCheck size={11} />
                        </span>
                        <span style={{ minWidth: 0 }}>
                          <span className="lesson-row__title" style={{ display: 'block' }}>
                            {lesson.title}
                          </span>
                          <span className="lesson-row__sub">{lesson.summary}</span>
                        </span>
                        <span className="lesson-row__meta">
                          {lesson.kind === 'quiz' ? (
                            quizScore !== null ? (
                              <span className={quizPassed ? 'badge badge--success' : 'badge badge--warning'}>
                                {quizScore}%
                              </span>
                            ) : (
                              <span className="badge badge--accent">Quiz</span>
                            )
                          ) : null}
                          <span className="row" style={{ gap: 5 }}>
                            <IconClock size={12} /> {lesson.durationMin} min
                          </span>
                          <IconChevronRight size={15} />
                        </span>
                      </Link>
                    );
                  })}
            </section>
          );
        })}
      </div>
    </AppShell>
  );
}
