import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {
  MAX_DEVICES,
  buildFingerprint,
  computeFingerprint,
  createId,
  createSecurityEvent,
  registerDevice,
  removeDevice as removeDeviceFrom,
  revokeOtherSessions,
  trimEvents,
  type Device,
  type QuizAttempt,
  type SecurityEvent,
  type SecurityEventType,
  type Locale,
  type LocalizedText,
  type SessionToken,
  type User,
} from '@lms/core';
import { EMPTY_STATE, STORAGE_KEY, clearState, loadState, saveState, type PersistedState, type ThemeName } from './storage';
import { LOCALE_TAGS } from '@lms/core';
import { D } from '../i18n/dictionary';

/** Duree d'un jeton d'acces : 15 minutes (brief section 3). */
const ACCESS_TOKEN_TTL_MS = 15 * 60 * 1000;

export interface Toast {
  readonly id: string;
  readonly tone: 'info' | 'success' | 'warning' | 'danger';
  /** Localisé, jamais résolu : la notification suit la langue en cours. */
  readonly title: LocalizedText;
  readonly text?: LocalizedText;
}

export interface SignInInput {
  readonly email: string;
  readonly phone: string;
  readonly displayName: string;
}

export type SignInOutcome =
  | { readonly ok: true }
  | { readonly ok: false; readonly reason: 'device-limit'; readonly message: string };

export interface AppContextValue {
  readonly state: PersistedState;
  readonly user: User | null;
  readonly device: Device | null;
  readonly theme: ThemeName;
  readonly locale: Locale;
  readonly toasts: readonly Toast[];
  /** Charge utile injectee dans le texte servi a cet apprenant. */
  readonly fingerprint: string;
  readonly signIn: (input: SignInInput) => SignInOutcome;
  readonly signOut: () => void;
  readonly forgetDevice: (deviceId: string) => void;
  readonly revokeSession: (sessionId: string) => void;
  readonly setTheme: (theme: ThemeName) => void;
  readonly setLocale: (locale: Locale) => void;
  readonly toggleTheme: () => void;
  readonly logEvent: (type: SecurityEventType, metadata?: Record<string, string | number | boolean>) => void;
  readonly markLessonViewed: (lessonId: string, ratio?: number) => void;
  readonly completeLesson: (lessonId: string, title: string) => void;
  readonly recordAttempt: (attempt: QuizAttempt, quizTitle: string) => void;
  readonly pushToast: (toast: Omit<Toast, 'id'>) => void;
  readonly dismissToast: (id: string) => void;
  readonly resetDemo: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

function describeEnvironment(): { label: string; fingerprint: string } {
  if (typeof navigator === 'undefined') {
    return { label: 'Environnement inconnu', fingerprint: 'fp_unknown' };
  }
  const ua = navigator.userAgent;
  const browser = /Edg\//.test(ua)
    ? 'Edge'
    : /OPR\//.test(ua)
      ? 'Opera'
      : /Firefox\//.test(ua)
        ? 'Firefox'
        : /Chrome\//.test(ua)
          ? 'Chrome'
          : /Safari\//.test(ua)
            ? 'Safari'
            : 'Navigateur';
  const os = /Windows/.test(ua)
    ? 'Windows'
    : /Mac OS X/.test(ua)
      ? 'macOS'
      : /Android/.test(ua)
        ? 'Android'
        : /iPhone|iPad/.test(ua)
          ? 'iOS'
          : /Linux/.test(ua)
            ? 'Linux'
            : 'Système inconnu';

  const fingerprint = computeFingerprint({
    platform: 'web',
    userAgent: ua,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'unknown',
    screen: typeof window === 'undefined' ? '0x0x1' : `${window.screen.width}x${window.screen.height}x${window.devicePixelRatio}`,
    hardwareConcurrency: navigator.hardwareConcurrency || 0,
  });

  return { label: `${browser} sur ${os}`, fingerprint };
}

export function AppProvider({ children }: { readonly children: ReactNode }) {
  const [state, setState] = useState<PersistedState>(() => loadState());
  const [toasts, setToasts] = useState<readonly Toast[]>([]);
  const sessionRef = useRef<string | null>(state.currentSessionId);

  useEffect(() => {
    sessionRef.current = state.currentSessionId;
  }, [state.currentSessionId]);

  useEffect(() => {
    saveState(state);
  }, [state]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', LOCALE_TAGS[state.locale]);
  }, [state.locale]);

  const dismissToast = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const pushToast = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = createId('toast');
      setToasts((current) => [...current.slice(-3), { ...toast, id }]);
      window.setTimeout(() => dismissToast(id), 6000);
    },
    [dismissToast],
  );

  const appendEvent = useCallback(
    (previous: PersistedState, type: SecurityEventType, metadata?: Record<string, string | number | boolean>): SecurityEvent[] => {
      const event = createSecurityEvent({
        id: createId('ev'),
        userId: previous.user?.id ?? 'anonyme',
        deviceId: previous.currentDeviceId ?? 'inconnu',
        type,
        at: new Date().toISOString(),
        ...(metadata ? { metadata } : {}),
      });
      return trimEvents([event, ...previous.events]);
    },
    [],
  );

  const logEvent = useCallback(
    (type: SecurityEventType, metadata?: Record<string, string | number | boolean>) => {
      setState((previous) => ({ ...previous, events: appendEvent(previous, type, metadata) }));
    },
    [appendEvent],
  );

  const signIn = useCallback(
    (input: SignInInput): SignInOutcome => {
      const now = new Date();
      const nowIso = now.toISOString();
      const environment = describeEnvironment();
      const current = loadState();

      const user: User =
        current.user && current.user.email === input.email
          ? { ...current.user, phone: input.phone, displayName: input.displayName }
          : {
              id: createId('usr'),
              role: input.email.startsWith('admin@') ? 'admin' : 'learner',
              email: input.email,
              phone: input.phone,
              displayName: input.displayName,
              createdAt: nowIso,
            };

      const candidate: Device = {
        id: createId('dev'),
        userId: user.id,
        label: environment.label,
        platform: 'web',
        fingerprint: environment.fingerprint,
        firstSeenAt: nowIso,
        lastSeenAt: nowIso,
      };

      const registration = registerDevice(current.devices, candidate);
      if (registration.status === 'limit-reached') {
        setState((previous) => ({
          ...previous,
          events: appendEvent(previous, 'device-limit-reached', { limite: MAX_DEVICES }),
        }));
        return {
          ok: false,
          reason: 'device-limit',
          message: `Limite de ${MAX_DEVICES} appareils atteinte. Retirez un appareil depuis votre espace compte avant de vous connecter ici.`,
        };
      }

      const session: SessionToken = {
        id: createId('ses'),
        userId: user.id,
        deviceId: registration.device.id,
        issuedAt: nowIso,
        expiresAt: new Date(now.getTime() + ACCESS_TOKEN_TTL_MS).toISOString(),
      };

      const revokedCount = current.sessions.filter((s) => !s.revokedAt).length;
      const sessions = [...revokeOtherSessions(current.sessions, session.id, nowIso), session];

      setState(() => {
        let next: PersistedState = {
          ...current,
          user,
          devices: registration.devices,
          currentDeviceId: registration.device.id,
          currentSessionId: session.id,
          sessions,
        };
        next = { ...next, events: appendEvent(next, 'login', { appareil: registration.device.label }) };
        if (registration.status === 'registered' && current.devices.length > 0) {
          next = { ...next, events: appendEvent(next, 'device-registered', { appareil: registration.device.label }) };
        }
        if (revokedCount > 0) {
          next = { ...next, events: appendEvent(next, 'session-revoked', { sessions: revokedCount }) };
        }
        return next;
      });

      if (revokedCount > 0) {
        pushToast({
          tone: 'warning',
          title: D.toast.singleSessionTitle,
          text: D.toast.singleSessionText(revokedCount),
        });
      }

      return { ok: true };
    },
    [appendEvent, pushToast],
  );

  const signOut = useCallback(() => {
    setState((previous) => {
      const nowIso = new Date().toISOString();
      const withEvent = { ...previous, events: appendEvent(previous, 'logout') };
      return {
        ...withEvent,
        currentSessionId: null,
        sessions: previous.sessions.map((session) =>
          session.id === previous.currentSessionId && !session.revokedAt
            ? { ...session, revokedAt: nowIso, revokedReason: 'manual' as const }
            : session,
        ),
      };
    });
  }, [appendEvent]);

  const forgetDevice = useCallback(
    (deviceId: string) => {
      setState((previous) => {
        const nowIso = new Date().toISOString();
        const isCurrent = previous.currentDeviceId === deviceId;
        const withEvent = { ...previous, events: appendEvent(previous, 'device-removed') };
        return {
          ...withEvent,
          devices: removeDeviceFrom(previous.devices, deviceId),
          sessions: previous.sessions.map((session) =>
            session.deviceId === deviceId && !session.revokedAt
              ? { ...session, revokedAt: nowIso, revokedReason: 'device-removed' as const }
              : session,
          ),
          currentDeviceId: isCurrent ? null : previous.currentDeviceId,
          currentSessionId: isCurrent ? null : previous.currentSessionId,
        };
      });
      pushToast({ tone: 'info', title: D.toast.deviceRemovedTitle, text: D.toast.deviceRemovedText });
    },
    [appendEvent, pushToast],
  );

  const revokeSession = useCallback(
    (sessionId: string) => {
      setState((previous) => {
        const nowIso = new Date().toISOString();
        const withEvent = { ...previous, events: appendEvent(previous, 'session-revoked', { manuelle: true }) };
        return {
          ...withEvent,
          sessions: previous.sessions.map((session) =>
            session.id === sessionId ? { ...session, revokedAt: nowIso, revokedReason: 'manual' as const } : session,
          ),
          currentSessionId: previous.currentSessionId === sessionId ? null : previous.currentSessionId,
        };
      });
    },
    [appendEvent],
  );

  const setTheme = useCallback((theme: ThemeName) => {
    setState((previous) => ({ ...previous, theme }));
  }, []);

  const setLocale = useCallback((locale: Locale) => {
    setState((previous) => ({ ...previous, locale }));
  }, []);

  const toggleTheme = useCallback(() => {
    setState((previous) => ({ ...previous, theme: previous.theme === 'dark' ? 'light' : 'dark' }));
  }, []);

  const markLessonViewed = useCallback((lessonId: string, ratio = 0) => {
    setState((previous) => {
      const existing = previous.progress[lessonId];
      return {
        ...previous,
        progress: {
          ...previous.progress,
          [lessonId]: {
            lessonId,
            completed: existing?.completed ?? false,
            lastViewedAt: new Date().toISOString(),
            ratio: Math.max(existing?.ratio ?? 0, ratio),
          },
        },
      };
    });
  }, []);

  const completeLesson = useCallback(
    (lessonId: string, title: string) => {
      setState((previous) => {
        if (previous.progress[lessonId]?.completed) return previous;
        const next: PersistedState = {
          ...previous,
          progress: {
            ...previous.progress,
            [lessonId]: { lessonId, completed: true, lastViewedAt: new Date().toISOString(), ratio: 1 },
          },
        };
        return { ...next, events: appendEvent(next, 'lesson-completed', { lecon: title }) };
      });
    },
    [appendEvent],
  );

  const recordAttempt = useCallback(
    (attempt: QuizAttempt, quizTitle: string) => {
      setState((previous) => {
        const next: PersistedState = { ...previous, attempts: [attempt, ...previous.attempts].slice(0, 60) };
        return {
          ...next,
          events: appendEvent(next, attempt.passed ? 'quiz-passed' : 'quiz-failed', {
            quiz: quizTitle,
            score: `${attempt.percentage}%`,
          }),
        };
      });
    },
    [appendEvent],
  );

  const resetDemo = useCallback(() => {
    clearState();
    setState({ ...EMPTY_STATE, theme: state.theme });
    pushToast({ tone: 'info', title: D.toast.resetTitle, text: D.toast.resetText });
  }, [pushToast, state.theme]);

  /**
   * Session unique inter-onglets : si un autre onglet ouvre une nouvelle
   * session, cet onglet est deconnecte immediatement (brief section 4.4).
   */
  useEffect(() => {
    function onStorage(event: StorageEvent) {
      if (event.key !== STORAGE_KEY || !event.newValue) return;
      const next = loadState();
      const mine = sessionRef.current;
      if (mine && next.currentSessionId && next.currentSessionId !== mine) {
        setState({ ...next, currentSessionId: null });
        pushToast({
          tone: 'danger',
          title: D.toast.sessionRevokedTitle,
          text: D.toast.sessionRevokedText,
        });
      } else {
        setState(next);
      }
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [pushToast]);

  const fingerprint = useMemo(
    () =>
      buildFingerprint({
        userId: state.user?.id ?? 'anonyme',
        deviceId: state.currentDeviceId ?? 'inconnu',
        issuedAt: new Date().toISOString(),
      }),
    [state.user?.id, state.currentDeviceId],
  );

  const device = useMemo(
    () => state.devices.find((d) => d.id === state.currentDeviceId) ?? null,
    [state.devices, state.currentDeviceId],
  );

  const value = useMemo<AppContextValue>(
    () => ({
      state,
      user: state.currentSessionId ? state.user : null,
      device,
      theme: state.theme,
      locale: state.locale,
      toasts,
      fingerprint,
      signIn,
      signOut,
      forgetDevice,
      revokeSession,
      setTheme,
      setLocale,
      toggleTheme,
      logEvent,
      markLessonViewed,
      completeLesson,
      recordAttempt,
      pushToast,
      dismissToast,
      resetDemo,
    }),
    [
      state,
      device,
      toasts,
      fingerprint,
      signIn,
      signOut,
      forgetDevice,
      revokeSession,
      setTheme,
      setLocale,
      toggleTheme,
      logEvent,
      markLessonViewed,
      completeLesson,
      recordAttempt,
      pushToast,
      dismissToast,
      resetDemo,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp doit être utilisé dans un AppProvider');
  return context;
}
