import { describe, expect, it } from 'vitest';
import {
  buildFingerprint,
  parseFingerprint,
  decodeInvisible,
  encodeInvisible,
  readFingerprint,
  stripInvisible,
  watermarkLabel,
  watermarkPositionAt,
  watermarkText,
} from '../watermark';

const TEXT =
  'Le magma remonte vers la surface car il est moins dense que les roches encaissantes, ' +
  'et sa viscosite conditionne directement le style eruptif observe en surface par les volcanologues.';

describe('filigrane invisible', () => {
  it('encode puis decode une charge utile a l identique', () => {
    const payload = 'u:usr_42|d:dev_7|t:2026-08-18T09';
    expect(decodeInvisible(encodeInvisible(payload))).toBe(payload);
  });

  it('gere les caracteres accentues et les symboles', () => {
    const payload = 'élève@exemple.fr · +33 6 12 34 56 78';
    expect(decodeInvisible(encodeInvisible(payload))).toBe(payload);
  });

  it('n injecte aucun caractere visible dans le texte', () => {
    const marked = watermarkText(TEXT, 'u:usr_1|d:dev_1|t:2026-08-18T09');
    expect(stripInvisible(marked)).toBe(TEXT);
    expect(marked).not.toBe(TEXT);
  });

  it('permet de retrouver l empreinte de l apprenant', () => {
    const fingerprint = buildFingerprint({
      userId: 'usr_9',
      deviceId: 'dev_3',
      issuedAt: '2026-08-18T09:41:02.000Z',
    });
    expect(fingerprint).toBe(`1~9~3~${Math.floor(Date.parse('2026-08-18T09:41:02.000Z') / 3_600_000).toString(36)}`);
    expect(readFingerprint(watermarkText(TEXT, fingerprint))).toBe(fingerprint);
  });

  it('repete l empreinte pour qu un extrait copie reste tracable', () => {
    const fingerprint = 'u:usr_5|d:dev_2|t:2026-08-18T10';
    const marked = watermarkText(TEXT, fingerprint, { everyWords: 8 });
    // Un extrait de la seconde moitie du texte doit encore porter l empreinte.
    const excerpt = marked.slice(Math.floor(marked.length / 2));
    expect(readFingerprint(excerpt)).toBe(fingerprint);
  });

  it('filigrane meme un texte plus court que la periode d injection', () => {
    const fingerprint = 'u:usr_6|d:dev_1|t:2026-08-18T11';
    const marked = watermarkText('Deux mots.', fingerprint, { everyWords: 12 });
    expect(readFingerprint(marked)).toBe(fingerprint);
  });

  it('retourne null quand aucune empreinte n est presente', () => {
    expect(readFingerprint(TEXT)).toBeNull();
  });

  it('relit les champs d une empreinte decodee', () => {
    const fingerprint = buildFingerprint({
      userId: 'usr_9f2a',
      deviceId: 'dev_71bc',
      issuedAt: '2026-08-18T09:41:02.000Z',
    });
    const parsed = parseFingerprint(fingerprint);
    expect(parsed?.userRef).toBe('9f2a');
    expect(parsed?.deviceRef).toBe('71bc');
    expect(parsed?.at?.toISOString()).toBe('2026-08-18T09:00:00.000Z');
    expect(parseFingerprint('texte quelconque')).toBeNull();
  });

  it('reste compact : moins de 30 caracteres de charge utile', () => {
    const fingerprint = buildFingerprint({
      userId: 'usr_9f2a41bd',
      deviceId: 'dev_71bc02ee',
      issuedAt: '2026-08-18T09:41:02.000Z',
    });
    expect(fingerprint.length).toBeLessThan(30);
  });
});

describe('filigrane visible', () => {
  it('change de position toutes les 30 secondes', () => {
    const a = watermarkPositionAt(0);
    const b = watermarkPositionAt(29_999);
    const c = watermarkPositionAt(30_000);
    expect(b).toEqual(a);
    expect(c.step).toBe(a.step + 1);
    expect([c.offsetX, c.offsetY]).not.toEqual([a.offsetX, a.offsetY]);
  });

  it('reste dans une plage d affichage raisonnable', () => {
    for (let step = 0; step < 40; step += 1) {
      const pos = watermarkPositionAt(step * 30_000);
      expect(Math.abs(pos.offsetX)).toBeLessThanOrEqual(50);
      expect(Math.abs(pos.offsetY)).toBeLessThanOrEqual(50);
      expect(pos.angle).toBeLessThan(0);
    }
  });

  it('compose un libelle avec email, telephone et horodatage', () => {
    const label = watermarkLabel('marie@exemple.fr', '+33 6 11 22 33 44', new Date('2026-08-18T09:41:00Z'));
    expect(label).toContain('marie@exemple.fr');
    expect(label).toContain('+33 6 11 22 33 44');
    expect(label).toContain('2026-08-18 09:41');
  });
});
