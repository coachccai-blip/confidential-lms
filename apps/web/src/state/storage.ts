import {
  DEFAULT_LOCALE,
  type AdminLock,
  type Device,
  type LearnerAccount,
  type LearnerReport,
  type LessonProgress,
  type Locale,
  type QuizAttempt,
  type SecurityEvent,
  type SessionToken,
  type User,
} from '@lms/core';

export type ThemeName = 'dark' | 'light';

export interface PersistedState {
  readonly version: number;
  readonly user: User | null;
  readonly devices: readonly Device[];
  readonly sessions: readonly SessionToken[];
  readonly currentSessionId: string | null;
  readonly currentDeviceId: string | null;
  readonly progress: Readonly<Record<string, LessonProgress>>;
  readonly attempts: readonly QuizAttempt[];
  readonly events: readonly SecurityEvent[];
  readonly theme: ThemeName;
  readonly locale: Locale;
  /** Verrou de l'espace de pilotage. `null` tant qu'aucun mot de passe n'est posé. */
  readonly adminLock: AdminLock | null;
  /** Cohorte gérée par l'administrateur depuis ce navigateur. */
  readonly learners: readonly LearnerAccount[];
  /** Remontées de progression importées, une par apprenant. */
  readonly reports: readonly LearnerReport[];
  /** Code d'inscription porté par la session en cours, s'il y en a un. */
  readonly enrolmentCode: string | null;
  /** Langues d'interface déjà employées : alimente le badge « polyglotte ». */
  readonly localesUsed: readonly Locale[];
  /** Badges déjà notifiés, pour ne pas réannoncer les mêmes. */
  readonly badgesSeen: readonly string[];
  /** Bruitages : coupés d'un clic, et le choix survit au rechargement. */
  readonly soundOn: boolean;
}

export const STORAGE_KEY = 'magmatica.state.v1';
/** v2 : ajout du verrou administrateur, de la cohorte et des remontées. */
const STATE_VERSION = 2;

export const EMPTY_STATE: PersistedState = {
  version: STATE_VERSION,
  user: null,
  devices: [],
  sessions: [],
  currentSessionId: null,
  currentDeviceId: null,
  progress: {},
  attempts: [],
  events: [],
  theme: 'dark',
  locale: DEFAULT_LOCALE,
  adminLock: null,
  learners: [],
  reports: [],
  enrolmentCode: null,
  localesUsed: [DEFAULT_LOCALE],
  badgesSeen: [],
  soundOn: true,
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

/**
 * Lecture defensive : un stockage corrompu ou d'une version anterieure
 * repart d'un etat vide plutot que de faire planter l'application.
 */
export function loadState(): PersistedState {
  if (typeof window === 'undefined') return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_STATE;
    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed)) return EMPTY_STATE;
    const version = parsed['version'];
    // Une v1 est complétée par les valeurs par défaut plutôt que jetée :
    // la progression déjà enregistrée survit à la mise à jour.
    if (version !== STATE_VERSION && version !== 1) return EMPTY_STATE;
    return { ...EMPTY_STATE, ...(parsed as Partial<PersistedState>), version: STATE_VERSION };
  } catch {
    return EMPTY_STATE;
  }
}

export function saveState(state: PersistedState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Quota depasse ou stockage bloque : l'application reste utilisable en memoire.
  }
}

export function clearState(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
