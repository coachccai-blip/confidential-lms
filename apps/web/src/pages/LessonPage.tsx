import { useEffect, useMemo, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { lessonNeighbours, personalise, pickVariant } from '@lms/core';
import { AppShell } from '../components/AppShell';
import { LessonBlocks, slugify } from '../components/LessonContent';
import { ProgressBar } from '../components/Progress';
import { findLesson, findModuleOfLesson, getCourseBySlug } from '../content';
import { Shield, useProtectedScreen } from '../protection';
import { useApp } from '../state/app-context';
import { D, useI18n } from '../i18n';
import {
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconFingerprint,
  IconShieldCheck,
} from '../components/Icons';

export function LessonPage() {
  const { slug, lessonId } = useParams();
  const { user, state, fingerprint, markLessonViewed, completeLesson } = useApp();
  const { l } = useI18n();
  const course = getCourseBySlug(slug);
  const lesson = course ? findLesson(course, lessonId) : null;
  const sentinel = useRef<HTMLDivElement | null>(null);

  const { shieldReason } = useProtectedScreen();

  useEffect(() => {
    if (lesson) markLessonViewed(lesson.id, 0.1);
  }, [lesson, markLessonViewed]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [lessonId]);

  useEffect(() => {
    const node = sentinel.current;
    if (!node || !lesson) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          completeLesson(lesson.id, l(lesson.title));
        }
      },
      { threshold: 0.9 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [lesson, completeLesson]);

  const outline = useMemo(
    () => (lesson?.blocks ?? []).filter((block) => block.type === 'heading').map((block) => l(block.text)),
    [lesson, l],
  );

  if (!course || course.status !== 'published') return <Navigate to="/app" replace />;
  if (!lesson) return <Navigate to={`/app/cours/${course.slug}`} replace />;
  if (lesson.kind === 'quiz' && lesson.quizId) {
    return <Navigate to={`/app/cours/${course.slug}/quiz/${lesson.quizId}`} replace />;
  }

  const module = findModuleOfLesson(course, lesson.id);
  const neighbours = lessonNeighbours(course, lesson.id);
  const done = state.progress[lesson.id]?.completed === true;
  const positionPercent = ((neighbours.index + 1) / neighbours.total) * 100;

  const hrefOf = (target: typeof neighbours.next) =>
    !target
      ? `/app/cours/${course.slug}`
      : target.kind === 'quiz'
        ? `/app/cours/${course.slug}/quiz/${target.quizId}`
        : `/app/cours/${course.slug}/lecon/${target.id}`;

  return (
    <AppShell
      title={l(lesson.title)}
      crumb={l(module?.title ?? course.title)}
      actions={
        <span className="badge badge--success">
          <IconShieldCheck size={12} /> {l(D.common.protected)}
        </span>
      }
    >
      <Shield reason={shieldReason} />

      <div className="reader protected" data-testid="protected-content">
        <article>
          <header className="pagehead pagehead--reader">
            <div className="pagehead__text">
              <div className="row" style={{ gap: 'var(--space-3)', marginBottom: 'var(--space-3)', flexWrap: 'wrap' }}>
                <span className="badge">{l(D.common.stepOf(neighbours.index + 1, neighbours.total))}</span>
                <span className="badge">
                  <IconClock size={12} /> {l(D.common.minutesRead(lesson.durationMin))}
                </span>
                {done ? (
                  <span className="badge badge--success">
                    <IconCheck size={12} /> {l(D.lesson.completed)}
                  </span>
                ) : null}
              </div>
              <h1>{l(lesson.title)}</h1>
              <p>{l(lesson.summary)}</p>
              <p style={{ fontSize: '0.8rem', marginTop: 'var(--space-3)', color: 'var(--on-deep-muted)' }}>
                {l(D.lesson.glossHint)}
              </p>
              <div style={{ marginTop: 'var(--space-5)' }}>
                <ProgressBar value={positionPercent} thin />
              </div>
            </div>
          </header>

          <div style={{ marginTop: 'var(--space-8)' }}>
            <LessonBlocks blocks={lesson.blocks ?? []} fingerprint={fingerprint} lessonId={lesson.id} />
          </div>

          <div ref={sentinel} style={{ height: 1 }} aria-hidden="true" />

          <div
            className="callout callout--info"
            style={{ marginTop: 'var(--space-8)', alignItems: 'center' }}
          >
            <span className="callout__icon">
              <IconFingerprint size={18} />
            </span>
            <div style={{ flex: 1 }}>
              <div className="callout__title">
                {personalise(
                  l(done ? (pickVariant(D.coach.completion, lesson.id) ?? D.coach.personalNoteTitle) : D.coach.personalNoteTitle),
                  user?.firstName,
                )}
              </div>
              <span style={{ fontSize: '0.83rem' }}>{l(D.coach.personalNoteText)}</span>
            </div>
            {!done ? (
              <button
                type="button"
                className="btn btn--secondary btn--celebrate"
                onClick={() => completeLesson(lesson.id, l(lesson.title))}
              >
                <IconCheck size={15} /> {l(D.lesson.markDone)}
              </button>
            ) : null}
          </div>

          <nav className="lesson-nav">
            {neighbours.previous ? (
              <Link className="btn btn--secondary" to={hrefOf(neighbours.previous)}>
                <IconChevronLeft size={15} />
                <span className="lesson-nav__side">
                  <span className="muted" style={{ fontSize: '0.7rem' }}>
                    {l(D.lesson.previous)}
                  </span>
                  <span style={{ color: 'var(--text)' }}>{l(neighbours.previous.title)}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {neighbours.next ? (
              <Link className="btn btn--primary" to={hrefOf(neighbours.next)}>
                <span className="lesson-nav__side" style={{ alignItems: 'flex-end' }}>
                  <span style={{ fontSize: '0.7rem', opacity: 0.72 }}>{l(D.lesson.next)}</span>
                  <span>{l(neighbours.next.title)}</span>
                </span>
                <IconChevronRight size={15} />
              </Link>
            ) : (
              <Link className="btn btn--primary" to={`/app/cours/${course.slug}`}>
                {l(D.lesson.backToSyllabus)} <IconChevronRight size={15} />
              </Link>
            )}
          </nav>
        </article>

        {outline.length > 0 ? (
          <aside className="reader__outline">
            <span className="reader__outline-label">{l(D.lesson.onThisPage)}</span>
            {outline.map((heading) => (
              <a href={`#${slugify(heading)}`} key={heading}>
                {heading}
              </a>
            ))}
          </aside>
        ) : null}
      </div>
    </AppShell>
  );
}
