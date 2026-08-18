import { describe, expect, it } from 'vitest';
import {
  MAX_DEVICES,
  activeSessions,
  computeFingerprint,
  registerDevice,
  removeDevice,
  revokeOtherSessions,
} from '../device';
import { createSecurityEvent, summarizeEvents, trimEvents } from '../security';
import type { Device, SessionToken } from '../types';

const source = {
  platform: 'web' as const,
  userAgent: 'Mozilla/5.0 (Macintosh)',
  language: 'fr-FR',
  timezone: 'Europe/Paris',
  screen: '1512x982x2',
  hardwareConcurrency: 10,
};

const device = (id: string, fingerprint: string): Device => ({
  id,
  userId: 'usr_1',
  label: `Appareil ${id}`,
  platform: 'web',
  fingerprint,
  firstSeenAt: '2026-08-01T10:00:00.000Z',
  lastSeenAt: '2026-08-01T10:00:00.000Z',
});

describe('empreinte d appareil', () => {
  it('est stable pour des signaux identiques', () => {
    expect(computeFingerprint(source)).toBe(computeFingerprint({ ...source }));
  });

  it('change des qu un signal change', () => {
    expect(computeFingerprint(source)).not.toBe(computeFingerprint({ ...source, timezone: 'Europe/Lisbon' }));
    expect(computeFingerprint(source)).not.toBe(computeFingerprint({ ...source, screen: '1920x1080x1' }));
  });
});

describe('limite de 3 appareils', () => {
  it('enregistre un nouvel appareil sous la limite', () => {
    const result = registerDevice([device('d1', 'fp_a')], device('d2', 'fp_b'));
    expect(result.status).toBe('registered');
    expect(result.devices).toHaveLength(2);
  });

  it('reconnait un appareil deja enregistre sans consommer de place', () => {
    const known = { ...device('d1', 'fp_a'), lastSeenAt: '2026-08-18T08:00:00.000Z' };
    const result = registerDevice([device('d1', 'fp_a')], known);
    expect(result.status).toBe('known');
    expect(result.devices).toHaveLength(1);
    expect(result.devices[0]?.lastSeenAt).toBe('2026-08-18T08:00:00.000Z');
  });

  it('bloque le 4e appareil', () => {
    const devices = [device('d1', 'fp_a'), device('d2', 'fp_b'), device('d3', 'fp_c')];
    expect(devices).toHaveLength(MAX_DEVICES);
    const result = registerDevice(devices, device('d4', 'fp_d'));
    expect(result.status).toBe('limit-reached');
    expect(result.devices).toHaveLength(3);
  });

  it('libere une place apres retrait d un appareil', () => {
    const devices = [device('d1', 'fp_a'), device('d2', 'fp_b'), device('d3', 'fp_c')];
    const after = removeDevice(devices, 'd2');
    expect(after).toHaveLength(2);
    expect(registerDevice(after, device('d4', 'fp_d')).status).toBe('registered');
  });
});

const session = (id: string, revoked = false): SessionToken => ({
  id,
  userId: 'usr_1',
  deviceId: 'd1',
  issuedAt: '2026-08-18T08:00:00.000Z',
  expiresAt: '2026-08-18T08:15:00.000Z',
  ...(revoked ? { revokedAt: '2026-08-18T08:05:00.000Z', revokedReason: 'manual' as const } : {}),
});

describe('session unique', () => {
  it('revoque toutes les autres sessions a la connexion', () => {
    const sessions = [session('s1'), session('s2'), session('s3')];
    const after = revokeOtherSessions(sessions, 's3', '2026-08-18T09:00:00.000Z');
    expect(after.filter((s) => s.revokedAt).map((s) => s.id)).toEqual(['s1', 's2']);
    expect(after.find((s) => s.id === 's1')?.revokedReason).toBe('new-session');
    expect(after.find((s) => s.id === 's3')?.revokedAt).toBeUndefined();
  });

  it('ne rerevoque pas une session deja revoquee', () => {
    const sessions = [session('s1', true), session('s2')];
    const after = revokeOtherSessions(sessions, 's2', '2026-08-18T09:00:00.000Z');
    expect(after[0]?.revokedAt).toBe('2026-08-18T08:05:00.000Z');
    expect(after[0]?.revokedReason).toBe('manual');
  });

  it('ne considere actives que les sessions non revoquees et non expirees', () => {
    const sessions = [session('s1', true), session('s2')];
    expect(activeSessions(sessions, '2026-08-18T08:10:00.000Z').map((s) => s.id)).toEqual(['s2']);
    expect(activeSessions(sessions, '2026-08-18T09:00:00.000Z')).toHaveLength(0);
  });
});

describe('journal de securite', () => {
  it('associe libelle et severite au type d evenement', () => {
    const event = createSecurityEvent({
      id: 'ev_1',
      userId: 'usr_1',
      deviceId: 'd1',
      type: 'print-blocked',
      at: '2026-08-18T09:00:00.000Z',
    });
    expect(event.severity).toBe('critical');
    expect(event.label).toContain('impression');
  });

  it('agrege un score de risque borne a 100', () => {
    const events = Array.from({ length: 20 }, (_, i) =>
      createSecurityEvent({
        id: `ev_${i}`,
        userId: 'usr_1',
        deviceId: 'd1',
        type: 'devtools-suspected',
        at: `2026-08-18T09:${String(i).padStart(2, '0')}:00.000Z`,
      }),
    );
    const summary = summarizeEvents(events);
    expect(summary.critical).toBe(20);
    expect(summary.riskScore).toBe(100);
    expect(summary.lastAt).toBe('2026-08-18T09:19:00.000Z');
  });

  it('borne le journal aux evenements les plus recents', () => {
    const events = Array.from({ length: 10 }, (_, i) =>
      createSecurityEvent({
        id: `ev_${i}`,
        userId: 'usr_1',
        deviceId: 'd1',
        type: 'copy-blocked',
        at: `2026-08-18T09:0${i}:00.000Z`,
      }),
    );
    const trimmed = trimEvents(events, 3);
    expect(trimmed).toHaveLength(3);
    expect(trimmed[0]?.id).toBe('ev_9');
  });
});
