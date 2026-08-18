import { useMemo } from 'react';
import {
  BADGES,
  computeStreak,
  dayOf,
  earnedBadges,
  levelFromXp,
  totalXp,
  type BadgeId,
  type LevelState,
} from '@lms/core';
import { computeCourseProgress } from '@lms/core';
import { allLessons, courses } from '../content';
import { useApp } from './app-context';

export interface GamificationState {
  readonly xp: number;
  readonly level: LevelState;
  readonly streak: number;
  readonly badges: readonly BadgeId[];
  readonly lessonsCompleted: number;
  readonly lessonsTotal: number;
  readonly quizzesPassed: number;
  readonly perfectQuizzes: number;
  readonly coursesFinished: number;
}

/**
 * Tout est dérivé de l'état déjà persisté — progression, tentatives, langues
 * employées. Rien n'est stocké en double : un compteur de points enregistré à
 * part finirait par diverger de la progression réelle.
 */
export function useGamification(): GamificationState {
  const { state } = useApp();

  return useMemo(() => {
    const lessons = allLessons();
    const completedEntries = Object.values(state.progress).filter((entry) => entry?.completed);
    const lessonsCompleted = completedEntries.length;

    const coursesFinished = courses.filter(
      (course) => computeCourseProgress(course, state.progress).finished,
    ).length;

    // Un quiz ne compte qu'une fois : c'est sa meilleure tentative qui vaut.
    const bestByQuiz = new Map<string, number>();
    for (const attempt of state.attempts) {
      const best = bestByQuiz.get(attempt.quizId) ?? -1;
      if (attempt.percentage > best) bestByQuiz.set(attempt.quizId, attempt.percentage);
    }
    const passedQuizIds = new Set(
      state.attempts.filter((attempt) => attempt.passed).map((attempt) => attempt.quizId),
    );
    const perfectQuizzes = [...bestByQuiz.values()].filter((score) => score === 100).length;

    const activeDays = [
      ...completedEntries.map((entry) => dayOf(entry.lastViewedAt)),
      ...state.attempts.map((attempt) => dayOf(attempt.submittedAt)),
    ];
    const streak = computeStreak(activeDays, dayOf(new Date().toISOString()));

    // Heure locale du lecteur : c'est bien sa nuit à lui qui compte.
    const lateNight = [...completedEntries.map((e) => e.lastViewedAt), ...state.attempts.map((a) => a.submittedAt)].some(
      (iso) => {
        const hour = new Date(iso).getHours();
        return hour >= 22 || hour < 5;
      },
    );

    const xp = totalXp({ lessonsCompleted, attempts: state.attempts, coursesFinished });

    return {
      xp,
      level: levelFromXp(xp),
      streak,
      badges: earnedBadges({
        lessonsCompleted,
        quizzesPassed: passedQuizIds.size,
        perfectQuizzes,
        coursesFinished,
        levelsFinished: 0,
        streak,
        localesUsed: state.localesUsed.length,
        lateNight,
      }),
      lessonsCompleted,
      lessonsTotal: lessons.length,
      quizzesPassed: passedQuizIds.size,
      perfectQuizzes,
      coursesFinished,
    };
  }, [state.progress, state.attempts, state.localesUsed]);
}

/** Badges déclarés, dans l'ordre d'affichage. */
export const ALL_BADGES = [...BADGES].sort((a, b) => a.rank - b.rank);
