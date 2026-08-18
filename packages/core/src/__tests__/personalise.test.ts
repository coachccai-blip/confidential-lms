import { describe, expect, it } from 'vitest';
import { DEFAULT_FIRST_NAME, isPersonalised, personalise, pickVariant } from '../personalise';

describe('personnalisation par le prénom', () => {
  it('remplace toutes les occurrences du jeton', () => {
    expect(personalise('Bonjour {prenom} ! Continue, {prenom}.', 'Bob')).toBe('Bonjour Bob ! Continue, Bob.');
  });

  it('laisse intact un texte sans jeton', () => {
    const text = 'Le subjonctif exprime un regard, pas un temps.';
    expect(personalise(text, 'Bob')).toBe(text);
  });

  it('retombe sur un repli plutôt que de laisser un trou', () => {
    expect(personalise('Bonjour {prenom},', '   ')).toBe(`Bonjour ${DEFAULT_FIRST_NAME},`);
    expect(personalise('Bonjour {prenom},', null)).toBe(`Bonjour ${DEFAULT_FIRST_NAME},`);
    expect(personalise('Bonjour {prenom},', undefined)).toBe(`Bonjour ${DEFAULT_FIRST_NAME},`);
  });

  it('gère les prénoms accentués et chinois', () => {
    expect(personalise('Bonjour {prenom} !', 'Élodie')).toBe('Bonjour Élodie !');
    expect(personalise('{prenom}，你好！', '伟')).toBe('伟，你好！');
  });

  it('coupe les espaces autour du prénom', () => {
    expect(personalise('Bonjour {prenom}.', '  Bob  ')).toBe('Bonjour Bob.');
  });

  it('repère un texte personnalisé', () => {
    expect(isPersonalised('Bonjour {prenom}')).toBe(true);
    expect(isPersonalised('Bonjour')).toBe(false);
  });
});

describe('choix de variante', () => {
  const variants = ['a', 'b', 'c', 'd'] as const;

  it('rend toujours la même variante pour une même clé', () => {
    expect(pickVariant(variants, 'les_a1pm_1')).toBe(pickVariant(variants, 'les_a1pm_1'));
  });

  it('répartit les clés sur plusieurs variantes', () => {
    const keys = Array.from({ length: 60 }, (_, index) => `les_${index}`);
    const seen = new Set(keys.map((key) => pickVariant(variants, key)));
    expect(seen.size).toBeGreaterThan(1);
  });

  it('rend null sur un ensemble vide', () => {
    expect(pickVariant([], 'x')).toBeNull();
  });
});
