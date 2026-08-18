import type { LocalizedText } from './locale';
import type { Question, Quiz, QuizAttempt } from './types';

export interface GradedQuestion {
  readonly questionId: string;
  readonly prompt: LocalizedText;
  readonly kind: Question['kind'];
  readonly selected: readonly string[];
  readonly correctAnswerIds: readonly string[];
  readonly correct: boolean;
  readonly earned: number;
  readonly possible: number;
  readonly explanation: LocalizedText;
  readonly answered: boolean;
}

export interface QuizResult {
  readonly quizId: string;
  readonly score: number;
  readonly maxScore: number;
  readonly percentage: number;
  readonly passed: boolean;
  readonly questions: readonly GradedQuestion[];
  readonly correctCount: number;
  readonly total: number;
}

export type QuizResponses = Readonly<Record<string, readonly string[]>>;

function correctIdsOf(question: Question): string[] {
  return question.answers.filter((a) => a.correct).map((a) => a.id);
}

function gradeQuestion(question: Question, selected: readonly string[], partialCredit: boolean): GradedQuestion {
  const correctIds = correctIdsOf(question);
  const picked = [...new Set(selected)];
  const good = picked.filter((id) => correctIds.includes(id)).length;
  const bad = picked.filter((id) => !correctIds.includes(id)).length;
  const exact = good === correctIds.length && bad === 0 && correctIds.length > 0;

  let earned = 0;
  if (exact) {
    earned = question.points;
  } else if (partialCredit && question.kind === 'multiple' && correctIds.length > 0) {
    const ratio = Math.max(0, (good - bad) / correctIds.length);
    earned = Math.round(question.points * ratio * 100) / 100;
  }

  return {
    questionId: question.id,
    prompt: question.prompt,
    kind: question.kind,
    selected: picked,
    correctAnswerIds: correctIds,
    correct: exact,
    earned,
    possible: question.points,
    explanation: question.explanation,
    answered: picked.length > 0,
  };
}

/** Corrige une tentative de quiz. Fonction pure : testee unitairement. */
export function gradeQuiz(quiz: Quiz, responses: QuizResponses): QuizResult {
  const questions = quiz.questions.map((q) => gradeQuestion(q, responses[q.id] ?? [], quiz.partialCredit));
  const score = Math.round(questions.reduce((sum, q) => sum + q.earned, 0) * 100) / 100;
  const maxScore = questions.reduce((sum, q) => sum + q.possible, 0);
  const percentage = maxScore === 0 ? 0 : Math.round((score / maxScore) * 100);

  return {
    quizId: quiz.id,
    score,
    maxScore,
    percentage,
    passed: percentage >= quiz.passingScore,
    questions,
    correctCount: questions.filter((q) => q.correct).length,
    total: questions.length,
  };
}

/** Nombre de tentatives restantes (Infinity si illimite). */
export function attemptsLeft(quiz: Quiz, attempts: readonly QuizAttempt[]): number {
  if (quiz.maxAttempts <= 0) return Number.POSITIVE_INFINITY;
  const used = attempts.filter((a) => a.quizId === quiz.id).length;
  return Math.max(0, quiz.maxAttempts - used);
}

export function canAttempt(quiz: Quiz, attempts: readonly QuizAttempt[]): boolean {
  return attemptsLeft(quiz, attempts) > 0;
}

/** Meilleur score obtenu sur un quiz, en pourcentage. */
export function bestScore(quizId: string, attempts: readonly QuizAttempt[]): number | null {
  const scores = attempts.filter((a) => a.quizId === quizId).map((a) => a.percentage);
  return scores.length === 0 ? null : Math.max(...scores);
}

export function isQuizPassed(quizId: string, attempts: readonly QuizAttempt[]): boolean {
  return attempts.some((a) => a.quizId === quizId && a.passed);
}

/** Melange deterministe (seed) : meme ordre pour une meme tentative. */
export function shuffleWithSeed<T>(items: readonly T[], seed: number): T[] {
  const out = [...items];
  let state = seed >>> 0 || 1;
  for (let i = out.length - 1; i > 0; i -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const j = state % (i + 1);
    const a = out[i] as T;
    const b = out[j] as T;
    out[i] = b;
    out[j] = a;
  }
  return out;
}
