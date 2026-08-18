import type { Course, CourseModule, Lesson } from '@lms/core';
import { module1Lessons } from './modules/module-1';
import { module2Lessons } from './modules/module-2';
import { module3Lessons } from './modules/module-3';
import { module4Lessons } from './modules/module-4';

const COURSE_ID = 'crs_volcans';

const modules: readonly CourseModule[] = [
  {
    id: 'mod_volc_1',
    courseId: COURSE_ID,
    title: 'Origines du volcanisme',
    summary: 'Ce qu’est vraiment un volcan, d’où vient la chaleur et pourquoi les volcans s’alignent.',
    lessons: module1Lessons,
  },
  {
    id: 'mod_volc_2',
    courseId: COURSE_ID,
    title: 'Magmas et édifices',
    summary: 'Viscosité, gaz, plomberie magmatique et lecture des morphologies volcaniques.',
    lessons: module2Lessons,
  },
  {
    id: 'mod_volc_3',
    courseId: COURSE_ID,
    title: 'Éruptions et aléas',
    summary: 'Styles éruptifs, échelle VEI, hiérarchie réelle des dangers et cas historiques.',
    lessons: module3Lessons,
  },
  {
    id: 'mod_volc_4',
    courseId: COURSE_ID,
    title: 'Surveiller, prévoir, vivre avec',
    summary: 'Instrumentation, chaîne de décision, bénéfices du volcanisme et effets climatiques.',
    lessons: module4Lessons,
  },
];

export const volcansCourse: Course = {
  id: COURSE_ID,
  slug: 'volcans',
  title: 'Les volcans — comprendre la Terre qui gronde',
  subtitle: 'Parcours certifiant · 4 modules · 12 leçons · 4 quiz notés',
  description:
    'Un parcours complet et rigoureux, de la fusion partielle du manteau à la gestion d’une crise éruptive. Vous saurez lire un édifice volcanique, anticiper son style éruptif, hiérarchiser les aléas et interpréter les données d’un observatoire.',
  level: 'intermediaire',
  status: 'published',
  accentFrom: '#ffb020',
  accentTo: '#e2453b',
  tags: ['Géosciences', 'Risques naturels', 'Certifiant'],
  modules,
};

/** Deux parcours annonces, pour illustrer le catalogue multi-formations. */
const upcomingCourses: readonly Course[] = [
  {
    id: 'crs_seismes',
    slug: 'seismes',
    title: 'Séismes et tsunamis',
    subtitle: 'En préparation · sortie prévue au prochain trimestre',
    description:
      'Mécanique de la rupture sismique, magnitudes et intensités, alerte précoce et génération des tsunamis.',
    level: 'intermediaire',
    status: 'draft',
    accentFrom: '#5aa9f8',
    accentTo: '#3b64d8',
    tags: ['Géosciences', 'Risques naturels'],
    modules: [],
  },
  {
    id: 'crs_climat',
    slug: 'climat-paleo',
    title: 'Paléoclimats et carottes glaciaires',
    subtitle: 'En préparation · sortie prévue au prochain semestre',
    description: 'Reconstruire 800 000 ans de climat à partir des archives glaciaires, marines et volcaniques.',
    level: 'avance',
    status: 'draft',
    accentFrom: '#3ecf8e',
    accentTo: '#17845a',
    tags: ['Climat', 'Méthodes'],
    modules: [],
  },
];

export const courses: readonly Course[] = [volcansCourse, ...upcomingCourses];

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

export function moduleIndexOfLesson(course: Course, lessonId: string): number {
  return course.modules.findIndex((module) => module.lessons.some((lesson) => lesson.id === lessonId));
}

export { getQuiz, quizzes } from './quizzes';
