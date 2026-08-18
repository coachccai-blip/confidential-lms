/**
 * Modele de donnees du LMS (brief section 6).
 *
 * Ces types sont partages entre l'application web (apprenant + admin),
 * et sont destines a etre reutilises tels quels par les futurs clients
 * Electron / React Native ainsi que par l'API Fastify (phases 2 a 4).
 */

export type UserRole = 'admin' | 'learner';

export interface User {
  readonly id: string;
  readonly role: UserRole;
  /** Sert d'identifiant de connexion ET de marqueur de filigrane. */
  readonly email: string;
  /** Second marqueur de filigrane (brief section 4.3). */
  readonly phone: string;
  readonly displayName: string;
  /** Argon2id cote serveur. Jamais expose au client en production. */
  readonly passwordHash?: string;
  readonly createdAt: string;
}

export type DevicePlatform = 'web' | 'desktop' | 'android' | 'ios';

export interface Device {
  readonly id: string;
  readonly userId: string;
  readonly label: string;
  readonly platform: DevicePlatform;
  /** Empreinte materielle best-effort (brief section 4.4). */
  readonly fingerprint: string;
  readonly firstSeenAt: string;
  readonly lastSeenAt: string;
}

export interface SessionToken {
  readonly id: string;
  readonly userId: string;
  readonly deviceId: string;
  readonly issuedAt: string;
  readonly expiresAt: string;
  readonly revokedAt?: string;
  readonly revokedReason?: 'new-session' | 'manual' | 'device-removed' | 'expired';
}

export type LessonKind = 'text' | 'video' | 'quiz';

export interface LessonBlockHeading {
  readonly type: 'heading';
  readonly text: string;
}
export interface LessonBlockParagraph {
  readonly type: 'paragraph';
  readonly text: string;
}
export interface LessonBlockList {
  readonly type: 'list';
  readonly ordered?: boolean;
  readonly items: readonly string[];
}
export interface LessonBlockCallout {
  readonly type: 'callout';
  readonly tone: 'info' | 'warning' | 'danger' | 'success';
  readonly title: string;
  readonly text: string;
}
export interface LessonBlockFigure {
  readonly type: 'figure';
  /** Identifiant d'une illustration SVG rendue par le client. */
  readonly figureId: string;
  readonly caption: string;
}
export interface LessonBlockTable {
  readonly type: 'table';
  readonly caption?: string;
  readonly headers: readonly string[];
  readonly rows: readonly (readonly string[])[];
}
export interface LessonBlockQuote {
  readonly type: 'quote';
  readonly text: string;
  readonly source: string;
}
export interface LessonBlockKeyValues {
  readonly type: 'keyvalues';
  readonly title: string;
  readonly entries: readonly { readonly label: string; readonly value: string }[];
}

export type LessonBlock =
  | LessonBlockHeading
  | LessonBlockParagraph
  | LessonBlockList
  | LessonBlockCallout
  | LessonBlockFigure
  | LessonBlockTable
  | LessonBlockQuote
  | LessonBlockKeyValues;

export interface Lesson {
  readonly id: string;
  readonly moduleId: string;
  readonly kind: LessonKind;
  readonly title: string;
  readonly summary: string;
  /** Duree de lecture estimee, en minutes. */
  readonly durationMin: number;
  readonly blocks?: readonly LessonBlock[];
  /** Renseigne pour kind === 'quiz'. */
  readonly quizId?: string;
  /** Renseigne pour kind === 'video' (playlist HLS chiffree AES-128, phase 2). */
  readonly hlsPlaylistId?: string;
}

export interface CourseModule {
  readonly id: string;
  readonly courseId: string;
  readonly title: string;
  readonly summary: string;
  readonly lessons: readonly Lesson[];
}

export type CourseStatus = 'draft' | 'published';

export interface Course {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly level: 'debutant' | 'intermediaire' | 'avance';
  readonly status: CourseStatus;
  readonly accentFrom: string;
  readonly accentTo: string;
  readonly tags: readonly string[];
  readonly modules: readonly CourseModule[];
}

export type QuestionKind = 'single' | 'multiple' | 'boolean';

export interface Answer {
  readonly id: string;
  readonly text: string;
  readonly correct: boolean;
}

export interface Question {
  readonly id: string;
  readonly kind: QuestionKind;
  readonly prompt: string;
  readonly points: number;
  readonly answers: readonly Answer[];
  /** Correction affichee apres validation (brief section 5). */
  readonly explanation: string;
}

export interface Quiz {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  /** Pourcentage minimal de reussite, 0-100. */
  readonly passingScore: number;
  /** 0 = illimite. */
  readonly maxAttempts: number;
  /** Credit partiel sur les questions a choix multiples. */
  readonly partialCredit: boolean;
  readonly questions: readonly Question[];
}

export interface Enrollment {
  readonly userId: string;
  readonly courseId: string;
  readonly enrolledAt: string;
}

export interface LessonProgress {
  readonly lessonId: string;
  readonly completed: boolean;
  readonly lastViewedAt: string;
  /** Position de lecture (0-1) pour la reprise. */
  readonly ratio: number;
}

export interface QuizAttempt {
  readonly id: string;
  readonly quizId: string;
  readonly startedAt: string;
  readonly submittedAt: string;
  readonly score: number;
  readonly maxScore: number;
  readonly percentage: number;
  readonly passed: boolean;
  readonly responses: Readonly<Record<string, readonly string[]>>;
}

export type SecurityEventType =
  | 'login'
  | 'logout'
  | 'session-revoked'
  | 'device-registered'
  | 'device-limit-reached'
  | 'device-removed'
  | 'copy-blocked'
  | 'cut-blocked'
  | 'context-menu-blocked'
  | 'print-blocked'
  | 'save-blocked'
  | 'screenshot-shortcut'
  | 'devtools-suspected'
  | 'focus-lost'
  | 'visibility-hidden'
  | 'quiz-passed'
  | 'quiz-failed'
  | 'lesson-completed';

export type SecuritySeverity = 'info' | 'warning' | 'critical';

export interface SecurityEvent {
  readonly id: string;
  readonly userId: string;
  readonly deviceId: string;
  readonly type: SecurityEventType;
  readonly severity: SecuritySeverity;
  readonly at: string;
  readonly label: string;
  readonly metadata?: Readonly<Record<string, string | number | boolean>>;
}
