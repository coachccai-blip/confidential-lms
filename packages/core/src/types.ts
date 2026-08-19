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
  /** Sert d'identifiant de connexion. */
  readonly email: string;
  /**
   * Prénom. Repris dans le corps des leçons pour interpeller l'apprenant :
   * c'est à la fois un ressort d'engagement et la marque qui rend une fuite
   * attribuable, sans afficher d'adresse ni de numéro par-dessus le texte.
   */
  readonly firstName: string;
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
  /** Un emoji au plus, posé devant le titre pour ancrer la section. */
  readonly emoji?: string;
}

export interface LessonBlockParagraph {
  readonly type: 'paragraph';
  /** Un emoji au plus, en tête de paragraphe. Jamais deux. */
  readonly emoji?: string;
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
  readonly emoji?: string;
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
  readonly emoji?: string;
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
  readonly emoji?: string;
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
  readonly emoji?: string;
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
  readonly emoji?: string;
  readonly title: LocalizedText;
  readonly note?: LocalizedText;
  readonly columns: readonly LocalizedText[];
  readonly rows: readonly { readonly pronoun: string; readonly forms: readonly string[] }[];
}


/* ------------------------------------------------------------------
   Schémas manipulables.

   Un tableau se lit ; un schéma se manipule. Ces cinq familles couvrent
   ce que l'enseignement d'une langue demande le plus souvent : parcourir
   une conjugaison, croiser deux critères, situer un fait dans le temps,
   faire varier un même énoncé, et décomposer une phrase.

   Chaque widget est utilisable au clavier : ce sont des boutons, pas des
   zones sensibles au survol.
   ------------------------------------------------------------------ */

/** Une personne de la roue de conjugaison. */
export interface WheelPerson {
  readonly pronoun: string;
  readonly form: string;
  /** Transcription phonétique, affichée telle quelle. */
  readonly phonetic?: string;
  readonly note: LocalizedText;
}

/** Roue de conjugaison : on choisit une personne, la forme se détache. */
export interface WidgetWheel {
  readonly kind: 'wheel';
  /** Infinitif au centre de la roue. */
  readonly verb: string;
  readonly persons: readonly WheelPerson[];
}

/** Croisement de deux critères : la case répond à la double question. */
export interface WidgetMatrix {
  readonly kind: 'matrix';
  readonly rowsLabel: LocalizedText;
  readonly columnsLabel: LocalizedText;
  readonly rows: readonly { readonly id: string; readonly label: LocalizedText }[];
  readonly columns: readonly { readonly id: string; readonly label: LocalizedText }[];
  readonly cells: readonly {
    readonly row: string;
    readonly column: string;
    /** Réponse mise en avant : article, terminaison, forme. */
    readonly answer: string;
    readonly example: string;
    readonly gloss: LocalizedText;
  }[];
}

/** Frise : chaque repère porte un temps verbal et son exemple. */
export interface WidgetTimeline {
  readonly kind: 'timeline';
  readonly points: readonly {
    readonly id: string;
    readonly label: LocalizedText;
    readonly headline: LocalizedText;
    readonly example: string;
    readonly gloss: LocalizedText;
  }[];
}

/** Sélecteur linéaire : un même contenu à plusieurs crans. */
export interface WidgetSwitcher {
  readonly kind: 'switcher';
  readonly steps: readonly {
    readonly id: string;
    readonly label: LocalizedText;
    readonly headline: LocalizedText;
    readonly example: string;
    readonly gloss: LocalizedText;
  }[];
}

/** Phrase décomposée : chaque segment révèle sa fonction. */
export interface WidgetSentence {
  readonly kind: 'sentence';
  readonly segments: readonly {
    readonly text: string;
    /** Un segment sans rôle est un simple liant, non cliquable. */
    readonly role?: LocalizedText;
    readonly detail?: LocalizedText;
  }[];
}


/* ---------------- Documents et activités manipulables ---------------- */

/**
 * Zone d'un document : position et taille en pourcentage de la page, coin
 * supérieur gauche. Travailler en pourcentage laisse la page se
 * redimensionner sans que la mise en page se disloque.
 */
export interface LayoutZone {
  readonly id: string;
  readonly label: LocalizedText;
  readonly x: number;
  readonly y: number;
  readonly w: number;
  readonly h: number;
  readonly align?: 'left' | 'center' | 'right';
  /** Contenu d'exemple, en français : c'est ce qu'on écrit vraiment là. */
  readonly sample: string;
  readonly detail: LocalizedText;
}

/**
 * Page de document — lettre, courriel, copie d'examen — dont chaque zone
 * s'explique. Un bouton parcourt les zones dans l'ordre où on les rédige :
 * savoir *où* écrire ne suffit pas, il faut savoir *dans quel ordre*.
 */
export interface WidgetLayout {
  readonly kind: 'layout';
  /** Rapport largeur/hauteur. 0.707 pour une A4 en portrait. */
  readonly ratio?: number;
  readonly zones: readonly LayoutZone[];
}

/** Remise en ordre : les éléments sont donnés dans le bon ordre, l'affichage les mélange. */
export interface WidgetOrder {
  readonly kind: 'order';
  readonly prompt: LocalizedText;
  readonly items: readonly { readonly id: string; readonly text: LocalizedText }[];
  readonly successNote: LocalizedText;
}

/** Appariement : on relie une expression française à ce qu'elle signifie. */
export interface WidgetPairs {
  readonly kind: 'pairs';
  readonly prompt: LocalizedText;
  readonly pairs: readonly { readonly id: string; readonly left: string; readonly right: LocalizedText }[];
}

/** Texte à trous : on choisit la forme juste, l'explication suit. */
export interface WidgetFill {
  readonly kind: 'fill';
  readonly prompt: LocalizedText;
  readonly items: readonly {
    readonly id: string;
    readonly before: string;
    readonly after: string;
    readonly options: readonly string[];
    readonly answer: string;
    readonly why: LocalizedText;
  }[];
}

/* ---------------- Écoute et production ---------------- */

/**
 * Compréhension orale : on écoute une phrase, on répond sur ce qu'on a
 * entendu. Le texte français reste dans les données — il sert à la fois
 * à la synthèse vocale et à la transcription révélée après coup, de sorte
 * qu'un apprenant sans voix française installée puisse quand même
 * travailler l'exercice en lisant.
 */
export interface WidgetListening {
  readonly kind: 'listening';
  readonly prompt: LocalizedText;
  readonly items: readonly {
    readonly id: string;
    /** Phrase lue à voix haute, en français. */
    readonly sentence: string;
    readonly question: LocalizedText;
    readonly options: readonly LocalizedText[];
    /** Index de la bonne réponse dans `options`. */
    readonly answer: number;
    readonly why: LocalizedText;
  }[];
}

/**
 * Dictée : on écoute, on écrit, la correction est automatique.
 *
 * C'est le seul exercice de production dont la correction ne demande
 * aucun jugement : la réponse attendue est connue mot pour mot, et la
 * comparaison se fait après normalisation (casse, accents décoratifs,
 * ponctuation) pour ne pas sanctionner une virgule oubliée.
 */
export interface WidgetDictation {
  readonly kind: 'dictation';
  readonly prompt: LocalizedText;
  readonly items: readonly {
    readonly id: string;
    readonly sentence: string;
    /** Indice affiché avant la première écoute. */
    readonly hint: LocalizedText;
    /** Piège que la phrase vise, expliqué après correction. */
    readonly trap: LocalizedText;
  }[];
}

/**
 * Atelier d'écriture : on rédige, puis on se relit avec une grille.
 *
 * Aucun serveur ne peut corriger un texte libre ici. La grille de
 * relecture transfère donc la correction à l'apprenant, ce qui est de
 * toute façon la compétence visée à l'examen : savoir relire sa copie.
 * Le texte modèle n'apparaît qu'après la relecture, sinon il est recopié.
 */
export interface WidgetWriting {
  readonly kind: 'writing';
  readonly prompt: LocalizedText;
  /** Consigne complète, comme sur un sujet d'examen. */
  readonly brief: LocalizedText;
  /** Nombre de mots attendu, affiché comme repère. */
  readonly targetWords?: number;
  readonly criteria: readonly { readonly id: string; readonly text: LocalizedText }[];
  /** Texte modèle en français, révélé après la relecture. */
  readonly model: string;
  readonly modelNote: LocalizedText;
}

export type LessonWidget =
  | WidgetWheel
  | WidgetMatrix
  | WidgetTimeline
  | WidgetSwitcher
  | WidgetSentence
  | WidgetLayout
  | WidgetOrder
  | WidgetPairs
  | WidgetFill
  | WidgetListening
  | WidgetDictation
  | WidgetWriting;

export interface LessonBlockInteractive {
  readonly type: 'interactive';
  readonly title: LocalizedText;
  readonly hint: LocalizedText;
  readonly emoji?: string;
  readonly widget: LessonWidget;
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
  | LessonBlockConjugation
  | LessonBlockInteractive;

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

/**
 * Niveaux du Cadre européen commun de référence.
 *
 * Le niveau est aussi la catégorie du catalogue : les cours sont rangés par
 * palier, du débutant complet à la maîtrise.
 */
export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

/** Les six niveaux, dans l'ordre de progression. */
export const CEFR_LEVELS: readonly CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export interface Course {
  readonly id: string;
  readonly slug: string;
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
  | 'lesson-completed'
  | 'admin-unlocked'
  | 'admin-unlock-failed'
  | 'login-refused';

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
