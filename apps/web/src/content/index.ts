import type { Course, CourseCategory, CourseModule, Lesson } from '@lms/core';
import { grammaireCourse } from './courses/grammaire';
import { conjugaisonCourse } from './courses/conjugaison';
import { delfB1Course } from './courses/delf-b1';
import { delfB2Course } from './courses/delf-b2';
import { dalfC1Course } from './courses/dalf-c1';
import { dalfC2Course } from './courses/dalf-c2';

/** Le catalogue, dans l'ordre pédagogique : bases, puis diplômes. */
export const courses: readonly Course[] = [
  grammaireCourse,
  conjugaisonCourse,
  delfB1Course,
  delfB2Course,
  dalfC1Course,
  dalfC2Course,
];

/** Ordre d'affichage des catégories dans le catalogue. */
export const CATEGORY_ORDER: readonly CourseCategory[] = [
  'grammaire',
  'conjugaison',
  'delf-b1',
  'delf-b2',
  'dalf-c1',
  'dalf-c2',
];

export function coursesByCategory(category: CourseCategory): readonly Course[] {
  return courses.filter((course) => course.category === category);
}

export function getCourseBySlug(slug: string | undefined): Course | null {
  if (!slug) return null;
  return courses.find((course) => course.slug === slug) ?? null;
}

export function findLesson(course: Course, lessonId: string | undefined): Lesson | null {
  if (!lessonId) return null;
  for (const module of course.modules) {
    const lesson = module.lessons.find((item) => item.id === lessonId);
    if (lesson) return lesson;
  }
  return null;
}

export function findModuleOfLesson(course: Course, lessonId: string): CourseModule | null {
  return course.modules.find((module) => module.lessons.some((lesson) => lesson.id === lessonId)) ?? null;
}

/** Toutes les étapes du catalogue, tous parcours confondus. */
export function allLessons(): readonly Lesson[] {
  return courses.flatMap((course) => course.modules.flatMap((module) => module.lessons));
}

export { Figure } from './figures';
export { getQuiz, quizzes } from './quizzes';
export { getGlossaryEntry, glossary, glossaryEntries } from './glossary';
