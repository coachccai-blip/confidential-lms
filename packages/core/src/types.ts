import type { LocalizedText } from './locale';

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

/** Bloc de titre de section. */
export interface LessonBlockHeading {
  readonly type: 'heading';
  readonly text: LocalizedText;
}

export interface LessonBlockParagraph {
  readonly type: 'paragraph';
  readonly text: LocalizedText;
}

export interface LessonBlockList {
  readonly type: 'list';
  readonly ordered?: boolean;
  readonly items: readonly LocalizedText[];
}

export interface LessonBlockCallout {
  readonly type: 'callout';
  readonly tone: 'info' | 'warning' | 'danger' | 'success';
  readonly title: LocalizedText;
  readonly text: LocalizedText;
}

export interface LessonBlockFigure {
  readonly type: 'figure';
  /** Identifiant d'une illustration SVG rendue par le client. */
  readonly figureId: string;
  readonly caption: LocalizedText;
}

export interface LessonBlockTable {
  readonly type: 'table';
  readonly caption?: LocalizedText;
  readonly headers: readonly LocalizedText[];
  readonly rows: readonly (readonly LocalizedText[])[];
}

export interface LessonBlockQuote {
  readonly type: 'quote';
  readonly text: LocalizedText;
  readonly source: LocalizedText;
}

export interface LessonBlockKeyValues {
  readonly type: 'keyvalues';
  readonly title: LocalizedText;
  readonly entries: readonly { readonly label: LocalizedText; readonly value: LocalizedText }[];
}

/**
 * Série d'exemples en français.
 *
 * La phrase reste en français — c'est la langue enseignée — tandis que la
 * glose (traduction ou explication) suit la langue d'interface.
 */
export interface LessonBlockExamples {
  readonly type: 'examples';
  readonly title: LocalizedText;
  readonly items: readonly {
    readonly fr: string;
    readonly gloss: LocalizedText;
    /** Marque une tournure fautive à ne pas reproduire. */
    readonly incorrect?: boolean;
  }[];
}

/** Tableau de conjugaison : les formes verbales ne sont jamais traduites. */
export interface LessonBlockConjugation {
  readonly type: 'conjugation';
  readonly title: LocalizedText;
  readonly note?: LocalizedText;
  readonly columns: readonly LocalizedText[];
  readonly rows: readonly { readonly pronoun: string; readonly forms: readonly string[] }[];
}

export type LessonBlock =
  | LessonBlockHeading
  | LessonBlockParagraph
  | LessonBlockList
  | LessonBlockCallout
  | LessonBlockFigure
  | LessonBlockTable
  | LessonBlockQuote
  | LessonBlockKeyValues
  | LessonBlockExamples
  | LessonBlockConjugation;

export interface Lesson {
  readonly id: string;
  readonly moduleId: string;
  readonly kind: LessonKind;
  readonly title: LocalizedText;
  readonly summary: LocalizedText;
  /** Durée de lecture estimée, en minutes. */
  readonly durationMin: number;
  readonly blocks?: readonly LessonBlock[];
  /** Renseigné pour kind === 'quiz'. */
  readonly quizId?: string;
  /** Renseigné pour kind === 'video' (playlist HLS chiffrée AES-128, phase 2). */
  readonly hlsPlaylistId?: string;
}

export interface CourseModule {
  readonly id: string;
  readonly courseId: string;
  readonly title: LocalizedText;
  readonly summary: LocalizedText;
  readonly lessons: readonly Lesson[];
}

export type CourseStatus = 'draft' | 'published';

/** Catégories du catalogue de français. */
export type CourseCategory = 'grammaire' | 'conjugaison' | 'delf-b1' | 'delf-b2' | 'dalf-c1' | 'dalf-c2';

/** Niveaux du Cadre européen commun de référence. */
export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Course {
  readonly id: string;
  readonly slug: string;
  readonly category: CourseCategory;
  readonly level: CefrLevel;
  readonly title: LocalizedText;
  readonly subtitle: LocalizedText;
  readonly description: LocalizedText;
  readonly status: CourseStatus;
  readonly accentFrom: string;
  readonly accentTo: string;
  readonly tags: readonly LocalizedText[];
  readonly modules: readonly CourseModule[];
}

/**
 * Entrée de glossaire (mot difficile cliquable dans les leçons).
 *
 * Le terme est en français ; la définition et l'exemple sont fournis dans
 * les trois langues pour que l'apprenant comprenne sans quitter la leçon.
 */
export interface GlossaryEntry {
  readonly id: string;
  readonly term: string;
  /** Transcription phonétique (API). */
  readonly ipa?: string;
  /** Nature grammaticale, déjà localisée. */
  readonly partOfSpeech: LocalizedText;
  readonly definition: LocalizedText;
  readonly example?: {
    readonly fr: string;
    readonly gloss: LocalizedText;
  };
}

export type QuestionKind = 'single' | 'multiple' | 'boolean';

export interface Answer {
  readonly id: string;
  readonly text: LocalizedText;
  readonly correct: boolean;
}

export interface Question {
  readonly id: string;
  readonly kind: QuestionKind;
  readonly prompt: LocalizedText;
  readonly points: number;
  readonly answers: readonly Answer[];
  /** Correction affichée après validation. */
  readonly explanation: LocalizedText;
}

export interface Quiz {
  readonly id: string;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
  /** Pourcentage minimal de réussite, 0-100. */
  readonly passingScore: number;
  /** 0 = illimité. */
  readonly maxAttempts: number;
  /** Crédit partiel sur les questions à choix multiples. */
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
