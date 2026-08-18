import type { SecurityEvent, SecurityEventType, SecuritySeverity } from './types';

interface EventDescriptor {
  readonly label: string;
  readonly severity: SecuritySeverity;
}

const CATALOG: Readonly<Record<SecurityEventType, EventDescriptor>> = {
  login: { label: 'Connexion reussie', severity: 'info' },
  logout: { label: 'Deconnexion', severity: 'info' },
  'session-revoked': { label: 'Session revoquee (connexion ailleurs)', severity: 'warning' },
  'device-registered': { label: 'Nouvel appareil enregistre', severity: 'info' },
  'device-limit-reached': { label: 'Limite de 3 appareils atteinte', severity: 'warning' },
  'device-removed': { label: 'Appareil retire du compte', severity: 'info' },
  'copy-blocked': { label: 'Tentative de copie bloquee', severity: 'warning' },
  'cut-blocked': { label: 'Tentative de couper bloquee', severity: 'warning' },
  'context-menu-blocked': { label: 'Clic droit bloque', severity: 'info' },
  'print-blocked': { label: "Tentative d'impression bloquee", severity: 'critical' },
  'save-blocked': { label: 'Tentative de sauvegarde de page bloquee', severity: 'warning' },
  'screenshot-shortcut': { label: 'Raccourci de capture detecte', severity: 'critical' },
  'devtools-suspected': { label: 'Outils de developpement suspectes', severity: 'critical' },
  'focus-lost': { label: 'Perte de focus prolongee, contenu masque', severity: 'info' },
  'visibility-hidden': { label: 'Onglet masque, contenu protege', severity: 'info' },
  'quiz-passed': { label: 'Quiz reussi', severity: 'info' },
  'quiz-failed': { label: 'Quiz echoue', severity: 'info' },
  'lesson-completed': { label: 'Lecon terminee', severity: 'info' },
  'admin-unlocked': { label: "Ouverture de l'espace d'administration", severity: 'info' },
  'admin-unlock-failed': { label: "Mot de passe administrateur refuse", severity: 'warning' },
  'login-refused': { label: 'Mot de passe apprenant refuse', severity: 'warning' },
};

export function describeEvent(type: SecurityEventType): EventDescriptor {
  return CATALOG[type];
}

export interface NewSecurityEvent {
  readonly id: string;
  readonly userId: string;
  readonly deviceId: string;
  readonly type: SecurityEventType;
  readonly at: string;
  readonly metadata?: Readonly<Record<string, string | number | boolean>>;
}

export function createSecurityEvent(input: NewSecurityEvent): SecurityEvent {
  const descriptor = describeEvent(input.type);
  return {
    id: input.id,
    userId: input.userId,
    deviceId: input.deviceId,
    type: input.type,
    at: input.at,
    label: descriptor.label,
    severity: descriptor.severity,
    ...(input.metadata ? { metadata: input.metadata } : {}),
  };
}

export interface SecuritySummary {
  readonly total: number;
  readonly critical: number;
  readonly warning: number;
  readonly lastAt: string | null;
  /** Score de risque 0-100, agrege pour la vue admin. */
  readonly riskScore: number;
}

const WEIGHTS: Readonly<Record<SecuritySeverity, number>> = { info: 0, warning: 4, critical: 12 };

export function summarizeEvents(events: readonly SecurityEvent[]): SecuritySummary {
  let critical = 0;
  let warning = 0;
  let raw = 0;
  let lastAt: string | null = null;

  for (const event of events) {
    if (event.severity === 'critical') critical += 1;
    if (event.severity === 'warning') warning += 1;
    raw += WEIGHTS[event.severity];
    if (lastAt === null || event.at > lastAt) lastAt = event.at;
  }

  return {
    total: events.length,
    critical,
    warning,
    lastAt,
    riskScore: Math.min(100, raw),
  };
}

/** Conserve les N evenements les plus recents (journal borne cote client). */
export function trimEvents(events: readonly SecurityEvent[], max = 200): SecurityEvent[] {
  return [...events].sort((a, b) => (a.at < b.at ? 1 : -1)).slice(0, max);
}
