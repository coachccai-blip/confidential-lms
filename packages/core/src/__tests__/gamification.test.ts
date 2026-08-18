import { describe, expect, it } from 'vitest';
import {
  BADGES,
  LEVEL_THRESHOLDS,
  XP,
  computeStreak,
  dayOf,
  earnedBadges,
  levelFromXp,
  totalXp,
} from '../gamification';
import type { QuizAttempt } from '../types';

function attempt(overrides: Partial<QuizAttempt> = {}): QuizAttempt {
  return {
    id: 'att_1',
    quizId: 'qz_1',
    startedAt: '2026-03-01T10:00:00.000Z',
    submittedAt: '2026-03-01T10:08:00.000Z',
    score: 6,
    maxScore: 8,
    percentage: 75,
    passed: true,
    responses: {},
    ...overrides,
  };
}

const NO_BADGE = {
  lessonsCompleted: 0,
  quizzesPassed: 0,
  perfectQuizzes: 0,
  coursesFinished: 0,
  levelsFinished: 0,
  streak: 0,
  localesUsed: 1,
  lateNight: false,
};

describe('niveaux', () => {
  it('démarre au niveau 1 sans aucun point', () => {
    const state = levelFromXp(0);
    expect(state.level).toBe(1);
    expect(state.percentage).toBe(0);
    expect(state.toNextLevel).toBe(LEVEL_THRESHOLDS[1]);
  });

  it('monte d’un niveau exactement au seuil', () => {
    const below = levelFromXp((LEVEL_THRESHOLDS[1] ?? 0) - 1);
    const at = levelFromXp(LEVEL_THRESHOLDS[1] ?? 0);
    expect(below.level).toBe(1);
    expect(at.level).toBe(2);
    expect(at.percentage).toBe(0);
  });

  it('situe l’avancement dans le niveau courant', () => {
    const floor = LEVEL_THRESHOLDS[1] ?? 0;
    const ceiling = LEVEL_THRESHOLDS[2] ?? 0;
    const state = levelFromXp(Math.round((floor + ceiling) / 2));
    expect(state.level).toBe(2);
    expect(state.percentage).toBeGreaterThan(45);
    expect(state.percentage).toBeLessThan(55);
  });

  it('plafonne au dernier palier sans jamais déborder', () => {
    const state = levelFromXp(999_999);
    expect(state.level).toBe(LEVEL_THRESHOLDS.length);
    expect(state.ceiling).toBeNull();
    expect(state.toNextLevel).toBeNull();
    expect(state.percentage).toBe(100);
  });

  it('traite un total négatif ou fractionnaire sans casser', () => {
    expect(levelFromXp(-50).level).toBe(1);
    expect(levelFromXp(-50).xp).toBe(0);
    expect(levelFromXp(45.9).xp).toBe(45);
  });
});

describe('points', () => {
  it('compte les leçons et les quiz réussis', () => {
    const xp = totalXp({ lessonsCompleted: 3, attempts: [attempt()], coursesFinished: 0 });
    expect(xp).toBe(3 * XP.lesson + XP.quizPassed);
  });

  it('ajoute le bonus du sans-faute', () => {
    const xp = totalXp({ lessonsCompleted: 0, attempts: [attempt({ percentage: 100 })], coursesFinished: 0 });
    expect(xp).toBe(XP.quizPassed + XP.perfectQuiz);
  });

  it('ne compte qu’une fois un quiz repassé', () => {
    const attempts = [attempt({ id: 'a', percentage: 75 }), attempt({ id: 'b', percentage: 88 })];
    expect(totalXp({ lessonsCompleted: 0, attempts, coursesFinished: 0 })).toBe(XP.quizPassed);
  });

  it('retient la meilleure tentative, pas la dernière', () => {
    const attempts = [attempt({ id: 'a', percentage: 100 }), attempt({ id: 'b', percentage: 40, passed: false })];
    expect(totalXp({ lessonsCompleted: 0, attempts, coursesFinished: 0 })).toBe(XP.quizPassed + XP.perfectQuiz);
  });

  it('ne rapporte rien pour un quiz échoué', () => {
    const failed = attempt({ percentage: 20, passed: false });
    expect(totalXp({ lessonsCompleted: 0, attempts: [failed], coursesFinished: 0 })).toBe(0);
  });

  it('ajoute la prime de cours terminé', () => {
    expect(totalXp({ lessonsCompleted: 0, attempts: [], coursesFinished: 2 })).toBe(2 * XP.courseFinished);
  });
});

describe('série de jours', () => {
  it('compte les jours consécutifs jusqu’à aujourd’hui', () => {
    expect(computeStreak(['2026-03-03', '2026-03-02', '2026-03-01'], '2026-03-03')).toBe(3);
  });

  it('tolère une journée en cours pas encore ouverte', () => {
    expect(computeStreak(['2026-03-02', '2026-03-01'], '2026-03-03')).toBe(2);
  });

  it('repart de zéro après deux jours d’absence', () => {
    expect(computeStreak(['2026-03-01', '2026-02-28'], '2026-03-04')).toBe(0);
  });

  it('s’arrête au premier trou', () => {
    expect(computeStreak(['2026-03-03', '2026-03-02', '2026-02-27'], '2026-03-03')).toBe(2);
  });

  it('ignore les doublons du même jour', () => {
    expect(computeStreak(['2026-03-03', '2026-03-03', '2026-03-02'], '2026-03-03')).toBe(2);
  });

  it('rend zéro sans aucune activité', () => {
    expect(computeStreak([], '2026-03-03')).toBe(0);
  });

  it('extrait la journée d’un horodatage', () => {
    expect(dayOf('2026-03-03T22:14:00.000Z')).toBe('2026-03-03');
  });
});

describe('badges', () => {
  it('n’accorde rien à un compte vierge', () => {
    expect(earnedBadges(NO_BADGE)).toEqual([]);
  });

  it('accorde le premier badge dès la première leçon', () => {
    expect(earnedBadges({ ...NO_BADGE, lessonsCompleted: 1 })).toEqual(['first-lesson']);
  });

  it('cumule les badges atteints', () => {
    const badges = earnedBadges({
      ...NO_BADGE,
      lessonsCompleted: 6,
      quizzesPassed: 2,
      perfectQuizzes: 1,
      streak: 8,
    });
    expect(badges).toContain('five-lessons');
    expect(badges).toContain('perfect-quiz');
    expect(badges).toContain('streak-3');
    expect(badges).toContain('streak-7');
  });

  it('récompense l’usage des trois langues', () => {
    expect(earnedBadges({ ...NO_BADGE, localesUsed: 2 })).not.toContain('polyglot');
    expect(earnedBadges({ ...NO_BADGE, localesUsed: 3 })).toContain('polyglot');
  });

  it('déclare un badge par identifiant, sans doublon ni oubli', () => {
    const ids = BADGES.map((badge) => badge.id);
    expect(new Set(ids).size).toBe(ids.length);
    const all = earnedBadges({
      lessonsCompleted: 50,
      quizzesPassed: 20,
      perfectQuizzes: 5,
      coursesFinished: 3,
      levelsFinished: 1,
      streak: 30,
      localesUsed: 3,
      lateNight: true,
    });
    expect([...all].sort()).toEqual([...ids].sort());
  });

  it('classe les badges du plus accessible au plus rare', () => {
    const ranks = BADGES.map((badge) => badge.rank);
    expect(ranks).toEqual([...ranks].sort((a, b) => a - b));
  });
});
