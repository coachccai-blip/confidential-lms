import type { Device, DevicePlatform, SessionToken } from './types';

/** Brief section 4.4 : maximum 3 appareils enregistres par compte. */
export const MAX_DEVICES = 3;

export interface FingerprintSource {
  readonly platform: DevicePlatform;
  readonly userAgent: string;
  readonly language: string;
  readonly timezone: string;
  readonly screen: string;
  readonly hardwareConcurrency: number;
}

/**
 * Empreinte d'appareil best-effort (FNV-1a 32 bits sur les signaux stables).
 * Limite honnete : deux navigateurs identiques sur deux machines identiques
 * produisent la meme empreinte ; c'est un frein au partage, pas une preuve.
 */
export function computeFingerprint(source: FingerprintSource): string {
  const raw = [
    source.platform,
    source.userAgent,
    source.language,
    source.timezone,
    source.screen,
    String(source.hardwareConcurrency),
  ].join('|');

  let hash = 0x811c9dc5;
  for (let i = 0; i < raw.length; i += 1) {
    hash ^= raw.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return `fp_${hash.toString(16).padStart(8, '0')}`;
}

export type DeviceRegistration =
  | { readonly status: 'known'; readonly device: Device; readonly devices: readonly Device[] }
  | { readonly status: 'registered'; readonly device: Device; readonly devices: readonly Device[] }
  | { readonly status: 'limit-reached'; readonly devices: readonly Device[] };

export function registerDevice(
  devices: readonly Device[],
  candidate: Device,
  max = MAX_DEVICES,
): DeviceRegistration {
  const existing = devices.find((d) => d.fingerprint === candidate.fingerprint);
  if (existing) {
    const updated = { ...existing, lastSeenAt: candidate.lastSeenAt };
    return {
      status: 'known',
      device: updated,
      devices: devices.map((d) => (d.id === existing.id ? updated : d)),
    };
  }
  if (devices.length >= max) {
    return { status: 'limit-reached', devices };
  }
  return { status: 'registered', device: candidate, devices: [...devices, candidate] };
}

export function removeDevice(devices: readonly Device[], deviceId: string): Device[] {
  return devices.filter((d) => d.id !== deviceId);
}

/**
 * Session unique (brief section 4.4) : toute nouvelle session revoque
 * immediatement les sessions actives precedentes.
 */
export function revokeOtherSessions(
  sessions: readonly SessionToken[],
  keepSessionId: string,
  at: string,
): SessionToken[] {
  return sessions.map((session) =>
    session.id === keepSessionId || session.revokedAt
      ? session
      : { ...session, revokedAt: at, revokedReason: 'new-session' as const },
  );
}

export function activeSessions(sessions: readonly SessionToken[], nowIso: string): SessionToken[] {
  return sessions.filter((s) => !s.revokedAt && s.expiresAt > nowIso);
}
