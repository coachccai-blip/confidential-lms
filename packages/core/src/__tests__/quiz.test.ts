import { describe, expect, it } from 'vitest';
import { attemptsLeft, bestScore, canAttempt, gradeQuiz, isQuizPassed, shuffleWithSeed } from '../quiz';
import { sameInAllLocales as L } from '../locale';
import type { Quiz, QuizAttempt } from '../types';

const quiz: Quiz = {
  id: 'qz_test',
  title: L('Quiz de test'),
  description: L(''),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: false,
  questions: [
    {
      id: 'q1',
      kind: 'single',
      prompt: L('Quel auxiliaire accompagne « aller » au passe compose ?'),
      points: 1,
      explanation: L('Les verbes de mouvement comme « aller » se conjuguent avec etre.'),
      answers: [
        { id: 'q1a', text: L('etre'), correct: true },
        { id: 'q1b', text: L('avoir'), correct: false },
        { id: 'q1c', text: L('faire'), correct: false },
      ],
    },
    {
      id: 'q2',
      kind: 'multiple',
      prompt: L('Quels temps appartiennent au mode indicatif ?'),
      points: 2,
      explanation: L('Present, imparfait et futur simple sont des temps de l indicatif.'),
      answers: [
        { id: 'q2a', text: L('Present'), correct: true },
        { id: 'q2b', text: L('Imparfait'), correct: true },
        { id: 'q2c', text: L('Subjonctif present'), correct: false },
        { id: 'q2d', text: L('Futur simple'), correct: true },
      ],
    },
    {
      id: 'q3',
      kind: 'boolean',
      prompt: L('Le participe passe employe avec etre s accorde avec le sujet.'),
      points: 1,
      explanation: L('Avec l auxiliaire etre, l accord se fait en genre et en nombre avec le sujet.'),
      answers: [
        { id: 'q3v', text: L('Vrai'), correct: true },
        { id: 'q3f', text: L('Faux'), correct: false },
      ],
    },
  ],
};

describe('correction de quiz', () => {
  it('note un sans-faute a 100 %', () => {
    const result = gradeQuiz(quiz, { q1: ['q1a'], q2: ['q2a', 'q2b', 'q2d'], q3: ['q3v'] });
    expect(result.score).toBe(4);
    expect(result.maxScore).toBe(4);
    expect(result.percentage).toBe(100);
    expect(result.passed).toBe(true);
    expect(result.correctCount).toBe(3);
  });

  it('ne donne aucun point sur un QCM incomplet sans credit partiel', () => {
    const result = gradeQuiz(quiz, { q1: ['q1a'], q2: ['q2a', 'q2b'], q3: ['q3v'] });
    expect(result.score).toBe(2);
    expect(result.percentage).toBe(50);
    expect(result.passed).toBe(false);
  });

  it('applique le credit partiel quand il est active', () => {
    const partial: Quiz = { ...quiz, partialCredit: true };
    const result = gradeQuiz(partial, { q1: ['q1a'], q2: ['q2a', 'q2b'], q3: ['q3v'] });
    // 2 bonnes / 3 attendues, 0 mauvaise => 2/3 des 2 points = 1.33
    expect(result.score).toBeCloseTo(3.33, 2);
    expect(result.passed).toBe(true);
  });

  it('penalise une mauvaise reponse en credit partiel', () => {
    const partial: Quiz = { ...quiz, partialCredit: true };
    const result = gradeQuiz(partial, { q2: ['q2a', 'q2b', 'q2c'] });
    // (2 bonnes - 1 mauvaise) / 3 => 0.33 * 2 points = 0.67
    expect(result.score).toBeCloseTo(0.67, 2);
  });

  it('ne descend jamais sous zero', () => {
    const partial: Quiz = { ...quiz, partialCredit: true };
    const result = gradeQuiz(partial, { q2: ['q2c'] });
    expect(result.score).toBe(0);
  });

  it('marque les questions non repondues', () => {
    const result = gradeQuiz(quiz, { q1: ['q1a'] });
    const q2 = result.questions.find((q) => q.questionId === 'q2');
    expect(q2?.answered).toBe(false);
    expect(q2?.correct).toBe(false);
    expect(result.percentage).toBe(25);
  });

  it('expose la correction et les bonnes reponses pour chaque question', () => {
    const result = gradeQuiz(quiz, {});
    for (const question of result.questions) {
      expect(question.explanation.fr.length).toBeGreaterThan(0);
      expect(question.explanation.en.length).toBeGreaterThan(0);
      expect(question.correctAnswerIds.length).toBeGreaterThan(0);
    }
  });

  it('ignore les doublons de selection', () => {
    const result = gradeQuiz(quiz, { q1: ['q1a', 'q1a'] });
    expect(result.questions[0]?.correct).toBe(true);
  });

  it('respecte le seuil de passage configure', () => {
    const strict: Quiz = { ...quiz, passingScore: 100 };
    const result = gradeQuiz(strict, { q1: ['q1a'], q2: ['q2a', 'q2b', 'q2d'], q3: ['q3f'] });
    expect(result.percentage).toBe(75);
    expect(result.passed).toBe(false);
  });
});

const attempt = (id: string, quizId: string, percentage: number, passed: boolean): QuizAttempt => ({
  id,
  quizId,
  startedAt: '2026-08-18T09:00:00.000Z',
  submittedAt: '2026-08-18T09:05:00.000Z',
  score: percentage / 25,
  maxScore: 4,
  percentage,
  passed,
  responses: {},
});

describe('tentatives', () => {
  it('decompte les tentatives restantes', () => {
    const attempts = [attempt('a1', 'qz_test', 50, false)];
    expect(attemptsLeft(quiz, attempts)).toBe(2);
    expect(canAttempt(quiz, attempts)).toBe(true);
  });

  it('bloque au-dela du maximum', () => {
    const attempts = [
      attempt('a1', 'qz_test', 50, false),
      attempt('a2', 'qz_test', 60, false),
      attempt('a3', 'qz_test', 65, false),
    ];
    expect(attemptsLeft(quiz, attempts)).toBe(0);
    expect(canAttempt(quiz, attempts)).toBe(false);
  });

  it('autorise un nombre illimite de tentatives quand maxAttempts vaut 0', () => {
    const unlimited: Quiz = { ...quiz, maxAttempts: 0 };
    expect(attemptsLeft(unlimited, [attempt('a1', 'qz_test', 10, false)])).toBe(Number.POSITIVE_INFINITY);
  });

  it('retient le meilleur score et le statut de reussite', () => {
    const attempts = [attempt('a1', 'qz_test', 40, false), attempt('a2', 'qz_test', 85, true)];
    expect(bestScore('qz_test', attempts)).toBe(85);
    expect(isQuizPassed('qz_test', attempts)).toBe(true);
    expect(bestScore('qz_autre', attempts)).toBeNull();
  });
});

describe('melange deterministe', () => {
  it('produit le meme ordre pour une meme graine', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(shuffleWithSeed(items, 42)).toEqual(shuffleWithSeed(items, 42));
    expect(shuffleWithSeed(items, 42)).not.toEqual(shuffleWithSeed(items, 43));
    expect([...shuffleWithSeed(items, 7)].sort()).toEqual(items);
  });
});
