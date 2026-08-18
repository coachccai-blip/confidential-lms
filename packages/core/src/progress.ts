import type { LocalizedText } from './locale';
import type { Course, Lesson, LessonProgress } from './types';

export type ProgressMap = Readonly<Record<string, LessonProgress>>;

export interface ModuleProgress {
  readonly moduleId: string;
  readonly title: LocalizedText;
  readonly total: number;
  readonly completed: number;
  readonly percentage: number;
}

export interface CourseProgress {
  readonly courseId: string;
  readonly total: number;
  readonly completed: number;
  readonly percentage: number;
  readonly modules: readonly ModuleProgress[];
  /** Lecon a ouvrir pour « reprendre la ou on s'est arrete ». */
  readonly resumeLesson: Lesson | null;
  readonly started: boolean;
  readonly finished: boolean;
}

export function flattenLessons(course: Course): Lesson[] {
  return course.modules.flatMap((m) => [...m.lessons]);
}

export function isCompleted(progress: ProgressMap, lessonId: string): boolean {
  return progress[lessonId]?.completed === true;
}

export function computeCourseProgress(course: Course, progress: ProgressMap): CourseProgress {
  const modules = course.modules.map((module) => {
    const total = module.lessons.length;
    const completed = module.lessons.filter((l) => isCompleted(progress, l.id)).length;
    return {
      moduleId: module.id,
      title: module.title,
      total,
      completed,
      percentage: total === 0 ? 0 : Math.round((completed / total) * 100),
    } satisfies ModuleProgress;
  });

  const all = flattenLessons(course);
  const completed = all.filter((l) => isCompleted(progress, l.id)).length;
  const percentage = all.length === 0 ? 0 : Math.round((completed / all.length) * 100);

  return {
    courseId: course.id,
    total: all.length,
    completed,
    percentage,
    modules,
    resumeLesson: resolveResumeLesson(course, progress),
    started: completed > 0 || all.some((l) => progress[l.id] !== undefined),
    finished: all.length > 0 && completed === all.length,
  };
}

/**
 * Reprise : premiere lecon non terminee ; a defaut la derniere lecon consultee ;
 * a defaut la premiere lecon du cours.
 */
export function resolveResumeLesson(course: Course, progress: ProgressMap): Lesson | null {
  const all = flattenLessons(course);
  if (all.length === 0) return null;

  const firstUnfinished = all.find((l) => !isCompleted(progress, l.id));
  if (firstUnfinished) return firstUnfinished;

  let latest: Lesson | null = null;
  let latestAt = '';
  for (const lesson of all) {
    const entry = progress[lesson.id];
    if (entry && entry.lastViewedAt > latestAt) {
      latestAt = entry.lastViewedAt;
      latest = lesson;
    }
  }
  return latest ?? all[0] ?? null;
}

export interface LessonNeighbours {
  readonly previous: Lesson | null;
  readonly next: Lesson | null;
  readonly index: number;
  readonly total: number;
}

export function lessonNeighbours(course: Course, lessonId: string): LessonNeighbours {
  const all = flattenLessons(course);
  const index = all.findIndex((l) => l.id === lessonId);
  return {
    previous: index > 0 ? all[index - 1] ?? null : null,
    next: index >= 0 && index < all.length - 1 ? all[index + 1] ?? null : null,
    index,
    total: all.length,
  };
}

export function estimatedRemainingMinutes(course: Course, progress: ProgressMap): number {
  return flattenLessons(course)
    .filter((l) => !isCompleted(progress, l.id))
    .reduce((sum, l) => sum + l.durationMin, 0);
}
