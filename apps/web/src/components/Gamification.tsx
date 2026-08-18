import { useEffect, useRef } from 'react';
import { XP } from '@lms/core';
import { D, useI18n } from '../i18n';
import { useFeedback } from '../feedback/useFeedback';
import { useApp } from '../state/app-context';
import { ALL_BADGES, useGamification } from '../state/useGamification';
import { IconAward, IconSparkle } from './Icons';

/* ------------------------------------------------------------------
   Gamification.

   Le parti pris : les points suivent la progression réelle, ils ne la
   remplacent pas. Le panneau montre donc toujours à quoi correspond un
   point, et les badges non obtenus restent visibles — un objectif caché
   ne motive personne.
   ------------------------------------------------------------------ */

/** Anneau de niveau : l'arc se remplit à l'avancement dans le palier. */
function LevelRing({ percentage, level }: { readonly percentage: number; readonly level: number }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const filled = (Math.min(100, Math.max(0, percentage)) / 100) * circumference;

  return (
    <svg className="ring" viewBox="0 0 80 80" role="img" aria-hidden="true">
      <circle className="ring__track" cx="40" cy="40" r={radius} />
      <circle
        className="ring__value"
        cx="40"
        cy="40"
        r={radius}
        strokeDasharray={`${filled} ${circumference - filled}`}
      />
      <text className="ring__label" x="40" y="46" textAnchor="middle">
        {level}
      </text>
    </svg>
  );
}

/**
 * Annonce les changements de niveau et les badges nouvellement obtenus.
 *
 * Les badges déjà annoncés sont mémorisés : rouvrir l'application ne doit
 * pas rejouer les notifications d'hier.
 */
export function GamificationWatcher() {
  const { state, user, pushToast, markBadgesSeen } = useApp();
  const { level, badges } = useGamification();
  const { play, celebrate } = useFeedback();
  const previousLevel = useRef<number | null>(null);
  const knownLessons = useRef<Set<string> | null>(null);

  /*
   * Une leçon s'achève de deux façons : par le bouton, ou en atteignant le
   * bas de la page. La célébration est donc accrochée à la progression
   * elle-même, pas au clic — sinon la moitié des fins passeraient inaperçues.
   */
  useEffect(() => {
    const completed = new Set(
      Object.entries(state.progress)
        .filter(([, entry]) => entry?.completed)
        .map(([lessonId]) => lessonId),
    );

    // Au premier rendu on enregistre l'existant sans rien fêter : rouvrir
    // l'application ne doit pas rejouer les leçons d'hier.
    if (knownLessons.current === null) {
      knownLessons.current = completed;
      return;
    }

    const fresh = [...completed].filter((id) => !knownLessons.current?.has(id));
    knownLessons.current = completed;
    if (fresh.length > 0) celebrate('complete', { x: 0.5, y: 0.55 });
  }, [state.progress, celebrate]);

  useEffect(() => {
    if (previousLevel.current !== null && level.level > previousLevel.current) {
      pushToast({
        tone: 'success',
        title: D.game.levelUpTitle,
        text: D.game.levelUpText(user?.firstName ?? '', level.level),
      });
      // Un palier franchi mérite plus qu'un badge : gerbe pleine largeur.
      celebrate('levelUp', { x: 0.5, y: 0.35 });
    }
    previousLevel.current = level.level;
  }, [level.level, pushToast, user?.firstName, celebrate]);

  useEffect(() => {
    const fresh = badges.filter((id) => !state.badgesSeen.includes(id));
    if (fresh.length === 0) return;
    for (const id of fresh) {
      const definition = ALL_BADGES.find((badge) => badge.id === id);
      pushToast({
        tone: 'success',
        title: D.game.badgeUnlockedTitle,
        text: {
          fr: `${definition?.emoji ?? '🏅'} ${D.game.badges[id].name.fr}`,
          en: `${definition?.emoji ?? '🏅'} ${D.game.badges[id].name.en}`,
          zh: `${definition?.emoji ?? '🏅'} ${D.game.badges[id].name.zh}`,
        },
      });
    }
    play('badge');
    markBadgesSeen(fresh);
  }, [badges, state.badgesSeen, pushToast, markBadgesSeen, play]);

  return null;
}

/** Puce compacte, affichée dans la barre latérale. */
export function LevelChip() {
  const { l } = useI18n();
  const { level, streak } = useGamification();

  return (
    <div className="levelchip">
      <span className="levelchip__level">
        <IconSparkle size={13} /> {l(D.game.levelLabel(level.level))}
      </span>
      <span className="levelchip__xp">{l(D.game.xpLabel(level.xp))}</span>
      {streak > 0 ? (
        <span className="levelchip__streak" title={l(D.game.streak(streak))}>
          🔥 {streak}
        </span>
      ) : null}
    </div>
  );
}

/** Panneau complet du tableau de bord. */
export function GamificationPanel() {
  const { l } = useI18n();
  const game = useGamification();
  const earned = new Set(game.badges);

  return (
    <section className="card game">
      <div className="row" style={{ marginBottom: 'var(--space-5)' }}>
        <IconAward size={18} style={{ color: 'var(--accent)' }} />
        <h3 style={{ fontSize: '0.95rem' }}>{l(D.game.title)}</h3>
      </div>

      <div className="game__head">
        <LevelRing percentage={game.level.percentage} level={game.level.level} />
        <div className="game__figures">
          <div className="game__xp">{l(D.game.xpLabel(game.level.xp))}</div>
          <div className="game__next">
            {game.level.toNextLevel === null ? l(D.game.maxLevel) : l(D.game.toNext(game.level.toNextLevel))}
          </div>
          <div className="game__streak">
            {game.streak > 0 ? (
              <>
                <span aria-hidden="true">🔥</span> {l(D.game.streak(game.streak))}
              </>
            ) : (
              l(D.game.streakNone)
            )}
            <span className="game__streak-hint">{l(D.game.streakHint)}</span>
          </div>
        </div>
      </div>

      <div className="game__section">
        <div className="game__section-head">
          <span>{l(D.game.badgesTitle)}</span>
          <span className="muted">{l(D.game.badgesCount(earned.size, ALL_BADGES.length))}</span>
        </div>
        <ul className="badges">
          {ALL_BADGES.map((badge) => {
            const has = earned.has(badge.id);
            const definition = D.game.badges[badge.id];
            return (
              <li className={has ? 'badge-tile badge-tile--earned' : 'badge-tile'} key={badge.id}>
                <span className="badge-tile__emoji" aria-hidden="true">
                  {badge.emoji}
                </span>
                <span className="badge-tile__text">
                  <strong>{l(definition.name)}</strong>
                  <span>{has ? l(definition.hint) : l(D.game.locked)}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="game__section">
        <div className="game__section-head">
          <span>{l(D.game.scoreTitle)}</span>
        </div>
        <ul className="game__scale">
          <li>{l(D.game.scoreLesson(XP.lesson))}</li>
          <li>{l(D.game.scoreQuiz(XP.quizPassed))}</li>
          <li>{l(D.game.scorePerfect(XP.perfectQuiz))}</li>
          <li>{l(D.game.scoreCourse(XP.courseFinished))}</li>
        </ul>
      </div>
    </section>
  );
}
