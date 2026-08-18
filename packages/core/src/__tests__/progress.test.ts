import { describe, expect, it } from 'vitest';
import {
  computeCourseProgress,
  estimatedRemainingMinutes,
  flattenLessons,
  lessonNeighbours,
  resolveResumeLesson,
} from '../progress';
import type { Course, LessonProgress } from '../types';

const lesson = (id: string, moduleId: string, durationMin = 10) =>
  ({
    id,
    moduleId,
    kind: 'text' as const,
    title: `Lecon ${id}`,
    summary: '',
    durationMin,
    blocks: [],
  });

const course: Course = {
  id: 'crs_1',
  slug: 'test',
  title: 'Cours de test',
  subtitle: '',
  description: '',
  level: 'debutant',
  status: 'published',
  accentFrom: '#000',
  accentTo: '#fff',
  tags: [],
  modules: [
    {
      id: 'mod_1',
      courseId: 'crs_1',
      title: 'Module 1',
      summary: '',
      lessons: [lesson('l1', 'mod_1'), lesson('l2', 'mod_1', 15)],
    },
    {
      id: 'mod_2',
      courseId: 'crs_1',
      title: 'Module 2',
      summary: '',
      lessons: [lesson('l3', 'mod_2', 20), lesson('l4', 'mod_2', 5)],
    },
  ],
};

const done = (lessonId: string, at: string): LessonProgress => ({
  lessonId,
  completed: true,
  lastViewedAt: at,
  ratio: 1,
});

describe('progression', () => {
  it('aplatit les lecons dans l ordre du parcours', () => {
    expect(flattenLessons(course).map((l) => l.id)).toEqual(['l1', 'l2', 'l3', 'l4']);
  });

  it('calcule la progression globale et par module', () => {
    const progress = { l1: done('l1', '2026-08-18T09:00:00.000Z'), l2: done('l2', '2026-08-18T09:20:00.000Z') };
    const result = computeCourseProgress(course, progress);
    expect(result.completed).toBe(2);
    expect(result.percentage).toBe(50);
    expect(result.modules[0]?.percentage).toBe(100);
    expect(result.modules[1]?.percentage).toBe(0);
    expect(result.started).toBe(true);
    expect(result.finished).toBe(false);
  });

  it('detecte un cours termine', () => {
    const progress = {
      l1: done('l1', '2026-08-18T09:00:00.000Z'),
      l2: done('l2', '2026-08-18T09:10:00.000Z'),
      l3: done('l3', '2026-08-18T09:20:00.000Z'),
      l4: done('l4', '2026-08-18T09:30:00.000Z'),
    };
    const result = computeCourseProgress(course, progress);
    expect(result.percentage).toBe(100);
    expect(result.finished).toBe(true);
  });

  it('reprend a la premiere lecon non terminee', () => {
    const progress = { l1: done('l1', '2026-08-18T09:00:00.000Z') };
    expect(resolveResumeLesson(course, progress)?.id).toBe('l2');
  });

  it('reprend a la premiere lecon quand rien n a ete consulte', () => {
    expect(resolveResumeLesson(course, {})?.id).toBe('l1');
  });

  it('reprend a la derniere lecon consultee quand tout est termine', () => {
    const progress = {
      l1: done('l1', '2026-08-18T09:00:00.000Z'),
      l2: done('l2', '2026-08-18T11:00:00.000Z'),
      l3: done('l3', '2026-08-18T09:20:00.000Z'),
      l4: done('l4', '2026-08-18T09:30:00.000Z'),
    };
    expect(resolveResumeLesson(course, progress)?.id).toBe('l2');
  });

  it('resout les lecons precedente et suivante', () => {
    expect(lessonNeighbours(course, 'l2')).toMatchObject({ index: 1, total: 4 });
    expect(lessonNeighbours(course, 'l2').previous?.id).toBe('l1');
    expect(lessonNeighbours(course, 'l2').next?.id).toBe('l3');
    expect(lessonNeighbours(course, 'l1').previous).toBeNull();
    expect(lessonNeighbours(course, 'l4').next).toBeNull();
  });

  it('estime le temps restant', () => {
    expect(estimatedRemainingMinutes(course, {})).toBe(50);
    expect(estimatedRemainingMinutes(course, { l3: done('l3', '2026-08-18T09:00:00.000Z') })).toBe(30);
  });
});
