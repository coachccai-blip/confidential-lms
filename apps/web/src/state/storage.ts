import type { Device, LessonProgress, QuizAttempt, SecurityEvent, SessionToken, User } from '@lms/core';

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
}

export const STORAGE_KEY = 'magmatica.state.v1';
const STATE_VERSION = 1;

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
    if (!isRecord(parsed) || parsed['version'] !== STATE_VERSION) return EMPTY_STATE;
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
