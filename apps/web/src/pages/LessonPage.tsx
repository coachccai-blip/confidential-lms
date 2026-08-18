import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { lessonNeighbours } from '@lms/core';
import { AppShell } from '../components/AppShell';
import { LessonBlocks, slugify } from '../components/LessonContent';
import { ProgressBar } from '../components/Progress';
import { findLesson, findModuleOfLesson, getCourseBySlug } from '../content';
import { Shield, Watermark, useContentProtection } from '../protection';
import { useApp } from '../state/app-context';
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
  const { user, state, fingerprint, logEvent, pushToast, markLessonViewed, completeLesson } = useApp();
  const course = getCourseBySlug(slug);
  const lesson = course ? findLesson(course, lessonId) : null;
  const sentinel = useRef<HTMLDivElement | null>(null);

  const onNotice = useCallback(
    (notice: { tone: 'warning' | 'danger' | 'info'; title: string; text: string }) =>
      pushToast({ tone: notice.tone, title: notice.title, text: notice.text }),
    [pushToast],
  );

  const { shieldReason } = useContentProtection({
    enabled: true,
    fingerprint,
    onEvent: logEvent,
    onNotice,
  });

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
          completeLesson(lesson.id, lesson.title);
        }
      },
      { threshold: 0.9 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [lesson, completeLesson]);

  const outline = useMemo(
    () => (lesson?.blocks ?? []).filter((block) => block.type === 'heading').map((block) => block.text),
    [lesson],
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
      title={lesson.title}
      crumb={module?.title ?? course.title}
      actions={
        <span className="badge badge--success" title="Protections de contenu actives sur cet écran">
          <IconShieldCheck size={12} /> Protégé
        </span>
      }
    >
      <Shield reason={shieldReason} />
      {user ? <Watermark email={user.email} phone={user.phone} fixed repeat={18} /> : null}

      <div className="reader protected" data-testid="protected-content">
        <article>
          <div className="row" style={{ gap: 'var(--space-3)', marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
            <span className="badge">
              Étape {neighbours.index + 1} / {neighbours.total}
            </span>
            <span className="badge">
              <IconClock size={12} /> {lesson.durationMin} min de lecture
            </span>
            {done ? (
              <span className="badge badge--success">
                <IconCheck size={12} /> Terminée
              </span>
            ) : null}
          </div>

          <h1 style={{ marginBottom: 'var(--space-3)' }}>{lesson.title}</h1>
          <p className="secondary" style={{ maxWidth: '62ch', marginBottom: 'var(--space-6)' }}>
            {lesson.summary}
          </p>
          <ProgressBar value={positionPercent} thin />

          <div style={{ marginTop: 'var(--space-8)' }}>
            <LessonBlocks blocks={lesson.blocks ?? []} fingerprint={fingerprint} />
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
              <div className="callout__title">Cet exemplaire vous est personnellement attribué</div>
              <span style={{ fontSize: '0.83rem' }}>
                Le texte ci-dessus contient une empreinte invisible liée à votre compte et à cet appareil. Toute copie,
                même partielle, reste identifiable.
              </span>
            </div>
            {!done ? (
              <button type="button" className="btn btn--secondary" onClick={() => completeLesson(lesson.id, lesson.title)}>
                <IconCheck size={15} /> Marquer terminée
              </button>
            ) : null}
          </div>

          <nav className="lesson-nav">
            {neighbours.previous ? (
              <Link className="btn btn--secondary" to={hrefOf(neighbours.previous)}>
                <IconChevronLeft size={15} />
                <span className="lesson-nav__side">
                  <span className="muted" style={{ fontSize: '0.7rem' }}>
                    Précédent
                  </span>
                  <span style={{ color: 'var(--text)' }}>{neighbours.previous.title}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {neighbours.next ? (
              <Link className="btn btn--primary" to={hrefOf(neighbours.next)}>
                <span className="lesson-nav__side" style={{ alignItems: 'flex-end' }}>
                  <span style={{ fontSize: '0.7rem', opacity: 0.72 }}>Suivant</span>
                  <span>{neighbours.next.title}</span>
                </span>
                <IconChevronRight size={15} />
              </Link>
            ) : (
              <Link className="btn btn--primary" to={`/app/cours/${course.slug}`}>
                Retour au sommaire <IconChevronRight size={15} />
              </Link>
            )}
          </nav>
        </article>

        {outline.length > 0 ? (
          <aside className="reader__outline">
            <span className="reader__outline-label">Sur cette page</span>
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
