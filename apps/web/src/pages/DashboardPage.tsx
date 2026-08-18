import { Link } from 'react-router-dom';
import { bestScore, computeCourseProgress, estimatedRemainingMinutes, isQuizPassed } from '@lms/core';
import { AppShell } from '../components/AppShell';
import { ProgressBar, ProgressRing } from '../components/Progress';
import { courses, volcansCourse } from '../content';
import { formatDuration } from '../lib/format';
import { useApp } from '../state/app-context';
import { IconAward, IconBook, IconClock, IconPlay, IconShieldCheck, IconSparkle } from '../components/Icons';

const TOTAL_MINUTES = volcansCourse.modules.flatMap((m) => m.lessons).reduce((sum, l) => sum + l.durationMin, 0);

export function DashboardPage() {
  const { user, state } = useApp();
  const progress = computeCourseProgress(volcansCourse, state.progress);
  const remaining = estimatedRemainingMinutes(volcansCourse, state.progress);
  const quizzesPassed = ['qz_volc_1', 'qz_volc_2', 'qz_volc_3', 'qz_volc_final'].filter((id) =>
    isQuizPassed(id, state.attempts),
  ).length;
  const finalScore = bestScore('qz_volc_final', state.attempts);
  const firstName = (user?.displayName ?? '').split(' ')[0] ?? '';

  return (
    <AppShell title="Tableau de bord" wide>
      <div className="page__header">
        <div>
          <h1>Bonjour {firstName}</h1>
          <p>
            {progress.started
              ? 'Reprenez votre parcours là où vous vous êtes arrêté. Votre progression est enregistrée à chaque leçon terminée.'
              : 'Votre parcours certifiant vous attend. Comptez environ ' + formatDuration(TOTAL_MINUTES) + ' au total.'}
          </p>
        </div>
      </div>

      <div className="grid grid--4" style={{ marginBottom: 'var(--space-8)' }}>
        <div className="stat">
          <span className="stat__label">Progression</span>
          <span className="stat__value">{progress.percentage}%</span>
          <ProgressBar value={progress.percentage} thin />
        </div>
        <div className="stat">
          <span className="stat__label">Étapes terminées</span>
          <span className="stat__value">
            {progress.completed}
            <span className="muted" style={{ fontSize: '1rem', fontWeight: 500 }}>
              {' '}
              / {progress.total}
            </span>
          </span>
          <span className="stat__hint">sur 4 modules</span>
        </div>
        <div className="stat">
          <span className="stat__label">Quiz réussis</span>
          <span className="stat__value">
            {quizzesPassed}
            <span className="muted" style={{ fontSize: '1rem', fontWeight: 500 }}>
              {' '}
              / 4
            </span>
          </span>
          <span className="stat__hint">{finalScore !== null ? `Examen final : ${finalScore} %` : 'Examen final non passé'}</span>
        </div>
        <div className="stat">
          <span className="stat__label">Temps restant estimé</span>
          <span className="stat__value">{formatDuration(remaining)}</span>
          <span className="stat__hint">{remaining} minutes de contenu</span>
        </div>
      </div>

      <section className="card" style={{ marginBottom: 'var(--space-8)', padding: 0, overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 'var(--space-8)', padding: 'var(--space-8)', flexWrap: 'wrap', alignItems: 'center' }}>
          <ProgressRing value={progress.percentage} size={116} />
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <span className="badge badge--accent">
              <IconSparkle size={12} /> Parcours en cours
            </span>
            <h2 style={{ margin: 'var(--space-3) 0 var(--space-2)' }}>{volcansCourse.title}</h2>
            <p className="secondary" style={{ maxWidth: '58ch' }}>
              {progress.resumeLesson
                ? `Prochaine étape : ${progress.resumeLesson.title}`
                : 'Parcours terminé — félicitations.'}
            </p>
            <div className="row" style={{ marginTop: 'var(--space-5)', flexWrap: 'wrap' }}>
              {progress.resumeLesson ? (
                <Link
                  className="btn btn--primary"
                  to={
                    progress.resumeLesson.kind === 'quiz'
                      ? `/app/cours/volcans/quiz/${progress.resumeLesson.quizId}`
                      : `/app/cours/volcans/lecon/${progress.resumeLesson.id}`
                  }
                >
                  <IconPlay size={15} /> {progress.started ? 'Reprendre' : 'Commencer le parcours'}
                </Link>
              ) : null}
              <Link className="btn btn--secondary" to="/app/cours/volcans">
                <IconBook size={15} /> Voir le sommaire
              </Link>
            </div>
          </div>
        </div>
        <div className="shield-bar" style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none', borderBottom: 'none' }}>
          <IconShieldCheck size={14} />
          Contenu filigrané au nom de {user?.email} · copie, impression et export désactivés · chaque accès est journalisé.
        </div>
      </section>

      <h2 style={{ marginBottom: 'var(--space-4)' }}>Catalogue</h2>
      <div className="grid grid--3">
        {courses.map((course) => {
          const isPublished = course.status === 'published';
          const courseProgress = isPublished ? computeCourseProgress(course, state.progress) : null;
          const inner = (
            <>
              <div
                className="course-card__cover"
                style={{ background: `linear-gradient(135deg, ${course.accentFrom}, ${course.accentTo})`, opacity: isPublished ? 1 : 0.4 }}
              />
              <div className="course-card__body">
                <div className="wrap">
                  {course.tags.map((tag) => (
                    <span className="badge" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="course-card__title">{course.title}</span>
                <span className="course-card__desc">{course.description}</span>
                {courseProgress ? <ProgressBar value={courseProgress.percentage} thin /> : null}
                <div className="course-card__foot">
                  <span className="row" style={{ gap: 6 }}>
                    <IconClock size={13} />
                    {isPublished ? formatDuration(TOTAL_MINUTES) : 'Bientôt'}
                  </span>
                  {isPublished ? (
                    <span className="badge badge--success">
                      <IconAward size={12} /> Certifiant
                    </span>
                  ) : (
                    <span className="badge">En préparation</span>
                  )}
                </div>
              </div>
            </>
          );

          return isPublished ? (
            <Link className="course-card" to={`/app/cours/${course.slug}`} key={course.id}>
              {inner}
            </Link>
          ) : (
            <div className="course-card" key={course.id} style={{ cursor: 'not-allowed' }}>
              {inner}
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
