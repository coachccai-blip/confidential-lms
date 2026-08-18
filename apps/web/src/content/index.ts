import { CEFR_LEVELS, type CefrLevel, type Course, type CourseModule, type Lesson } from '@lms/core';
import { a1PremiersMotsCourse } from './courses/a1-premiers-mots';
import { a1PresentCourse } from './courses/a1-present';
import { a1NommerCourse } from './courses/a1-nommer';
import { a2RaconterCourse } from './courses/a2-raconter';
import { a2ReperesCourse } from './courses/a2-reperes';
import { a2DecrireCourse } from './courses/a2-decrire';
import { grammaireCourse } from './courses/grammaire';
import { conjugaisonCourse } from './courses/conjugaison';
import { delfB1Course } from './courses/delf-b1';
import { delfB2Course } from './courses/delf-b2';
import { b2NuanceCourse } from './courses/b2-nuance';
import { b2ProfessionnelCourse } from './courses/b2-professionnel';
import { dalfC1Course } from './courses/dalf-c1';
import { c1AcademiqueCourse } from './courses/c1-academique';
import { c1OralCourse } from './courses/c1-oral-rapide';
import { dalfC2Course } from './courses/dalf-c2';
import { c2LitteratureCourse } from './courses/c2-litterature';
import { c2InstitutionsCourse } from './courses/c2-institutions';

/** Le catalogue, rangé par palier du CECRL : du débutant complet à la maîtrise. */
export const courses: readonly Course[] = [
  a1PremiersMotsCourse,
  a1PresentCourse,
  a1NommerCourse,
  a2RaconterCourse,
  a2ReperesCourse,
  a2DecrireCourse,
  grammaireCourse,
  conjugaisonCourse,
  delfB1Course,
  delfB2Course,
  b2NuanceCourse,
  b2ProfessionnelCourse,
  dalfC1Course,
  c1AcademiqueCourse,
  c1OralCourse,
  dalfC2Course,
  c2LitteratureCourse,
  c2InstitutionsCourse,
];

/** Ordre d'affichage des niveaux dans le catalogue. */
export const LEVEL_ORDER: readonly CefrLevel[] = CEFR_LEVELS;

export function coursesByLevel(level: CefrLevel): readonly Course[] {
  return courses.filter((course) => course.level === level);
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
