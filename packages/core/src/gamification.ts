/* ------------------------------------------------------------------
   Gamification : points, niveaux, séries et badges.

   Le barème est volontairement lisible : un apprenant doit pouvoir deviner
   ce qui lui rapporte des points sans lire de documentation. Les valeurs
   sont exportées pour que l'interface les affiche plutôt que de les
   redéclarer de son côté.
   ------------------------------------------------------------------ */

import type { QuizAttempt } from './types';

/** Barème, en points d'expérience. */
export const XP = {
  /** Une leçon marquée terminée. */
  lesson: 10,
  /** Un quiz réussi, quel que soit le score. */
  quizPassed: 25,
  /** Bonus pour un sans-faute. */
  perfectQuiz: 15,
  /** Bonus versé une seule fois, au dernier module d'un cours. */
  courseFinished: 50,
} as const;

/**
 * Seuils cumulés. Le premier palier tombe vite — il faut que le second
 * niveau soit atteint dans la première séance — puis l'écart se creuse.
 */
export const LEVEL_THRESHOLDS: readonly number[] = [0, 40, 120, 260, 480, 800, 1250, 1850, 2600, 3550];

export interface LevelState {
  /** Niveau courant, à partir de 1. */
  readonly level: number;
  readonly xp: number;
  /** Points au seuil du niveau courant. */
  readonly floor: number;
  /** Points au seuil du niveau suivant, `null` au dernier palier. */
  readonly ceiling: number | null;
  /** Avancement dans le niveau courant, de 0 à 100. */
  readonly percentage: number;
  /** Points restant à gagner pour changer de niveau, `null` au dernier. */
  readonly toNextLevel: number | null;
}

export function levelFromXp(xp: number): LevelState {
  const safe = Math.max(0, Math.floor(xp));
  let index = 0;
  for (let i = 0; i < LEVEL_THRESHOLDS.length; i += 1) {
    if (safe >= (LEVEL_THRESHOLDS[i] ?? 0)) index = i;
  }
  const floor = LEVEL_THRESHOLDS[index] ?? 0;
  const ceiling = index + 1 < LEVEL_THRESHOLDS.length ? (LEVEL_THRESHOLDS[index + 1] ?? null) : null;
  const span = ceiling === null ? 0 : ceiling - floor;
  return {
    level: index + 1,
    xp: safe,
    floor,
    ceiling,
    percentage: ceiling === null ? 100 : Math.min(100, Math.round(((safe - floor) / span) * 100)),
    toNextLevel: ceiling === null ? null : ceiling - safe,
  };
}

/* ------------------------------- Séries ------------------------------- */

/** Journée civile d'un instant ISO, au format `AAAA-MM-JJ`. */
export function dayOf(iso: string): string {
  return iso.slice(0, 10);
}

/**
 * Série de jours consécutifs terminant aujourd'hui — ou hier, pour laisser
 * la journée en cours au lecteur qui n'a pas encore ouvert l'application.
 * Au-delà, la série est rompue et repart à zéro.
 */
export function computeStreak(activeDays: readonly string[], today: string): number {
  if (activeDays.length === 0) return 0;
  const unique = [...new Set(activeDays)].sort().reverse();
  const first = unique[0];
  if (first === undefined) return 0;

  const gap = daysBetween(first, today);
  if (gap > 1) return 0;

  let streak = 1;
  for (let i = 1; i < unique.length; i += 1) {
    const previous = unique[i - 1];
    const current = unique[i];
    if (previous === undefined || current === undefined) break;
    if (daysBetween(current, previous) !== 1) break;
    streak += 1;
  }
  return streak;
}

function daysBetween(earlier: string, later: string): number {
  const a = Date.parse(`${earlier}T00:00:00Z`);
  const b = Date.parse(`${later}T00:00:00Z`);
  if (Number.isNaN(a) || Number.isNaN(b)) return Number.POSITIVE_INFINITY;
  return Math.round((b - a) / 86_400_000);
}

/* ------------------------------- Badges ------------------------------- */

export type BadgeId =
  | 'first-lesson'
  | 'five-lessons'
  | 'first-quiz'
  | 'perfect-quiz'
  | 'course-done'
  | 'level-done'
  | 'streak-3'
  | 'streak-7'
  | 'polyglot'
  | 'night-owl';

export interface BadgeDefinition {
  readonly id: BadgeId;
  readonly emoji: string;
  /** Ordre d'affichage : du plus accessible au plus rare. */
  readonly rank: number;
}

export const BADGES: readonly BadgeDefinition[] = [
  { id: 'first-lesson', emoji: '🌱', rank: 1 },
  { id: 'first-quiz', emoji: '🎯', rank: 2 },
  { id: 'five-lessons', emoji: '📚', rank: 3 },
  { id: 'streak-3', emoji: '🔥', rank: 4 },
  { id: 'perfect-quiz', emoji: '💯', rank: 5 },
  { id: 'polyglot', emoji: '🌍', rank: 6 },
  { id: 'course-done', emoji: '🏅', rank: 7 },
  { id: 'streak-7', emoji: '⚡', rank: 8 },
  { id: 'night-owl', emoji: '🌙', rank: 9 },
  { id: 'level-done', emoji: '👑', rank: 10 },
];

export interface BadgeInput {
  readonly lessonsCompleted: number;
  readonly quizzesPassed: number;
  readonly perfectQuizzes: number;
  readonly coursesFinished: number;
  readonly levelsFinished: number;
  readonly streak: number;
  /** Nombre de langues d'interface employées au moins une fois. */
  readonly localesUsed: number;
  /** Vrai si au moins une étape a été terminée entre 22 h et 5 h, heure locale. */
  readonly lateNight: boolean;
}

/** Badges obtenus pour un état donné. Fonction pure : rejouable à l'identique. */
export function earnedBadges(input: BadgeInput): readonly BadgeId[] {
  const earned: BadgeId[] = [];
  if (input.lessonsCompleted >= 1) earned.push('first-lesson');
  if (input.quizzesPassed >= 1) earned.push('first-quiz');
  if (input.lessonsCompleted >= 5) earned.push('five-lessons');
  if (input.streak >= 3) earned.push('streak-3');
  if (input.perfectQuizzes >= 1) earned.push('perfect-quiz');
  if (input.localesUsed >= 3) earned.push('polyglot');
  if (input.coursesFinished >= 1) earned.push('course-done');
  if (input.streak >= 7) earned.push('streak-7');
  if (input.lateNight) earned.push('night-owl');
  if (input.levelsFinished >= 1) earned.push('level-done');
  return earned;
}

/* -------------------------------- Total ------------------------------- */

export interface XpInput {
  readonly lessonsCompleted: number;
  readonly attempts: readonly QuizAttempt[];
  readonly coursesFinished: number;
}

/**
 * Total des points. Les quiz comptent une seule fois : c'est la meilleure
 * tentative qui est retenue, sinon repasser un quiz déjà réussi rapporterait
 * indéfiniment.
 */
export function totalXp(input: XpInput): number {
  const best = new Map<string, QuizAttempt>();
  for (const attempt of input.attempts) {
    const current = best.get(attempt.quizId);
    if (!current || attempt.percentage > current.percentage) best.set(attempt.quizId, attempt);
  }

  let xp = input.lessonsCompleted * XP.lesson;
  for (const attempt of best.values()) {
    if (attempt.passed) xp += XP.quizPassed;
    if (attempt.percentage === 100) xp += XP.perfectQuiz;
  }
  xp += input.coursesFinished * XP.courseFinished;
  return xp;
}
