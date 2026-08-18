import { describe, expect, it } from 'vitest';
import { DEFAULT_LOCALE, LOCALES, isLocale, pick, sameInAllLocales } from '../locale';

describe('locales', () => {
  it('expose les trois langues de la plateforme', () => {
    expect(LOCALES).toEqual(['fr', 'en', 'zh']);
    expect(DEFAULT_LOCALE).toBe('fr');
  });

  it('valide un code de langue', () => {
    expect(isLocale('zh')).toBe(true);
    expect(isLocale('es')).toBe(false);
    expect(isLocale(null)).toBe(false);
  });

  it('sélectionne la variante demandée', () => {
    const text = { fr: 'Bonjour', en: 'Hello', zh: '你好' };
    expect(pick(text, 'zh')).toBe('你好');
    expect(pick(text, 'en')).toBe('Hello');
  });

  it('se replie sur le français quand une traduction manque', () => {
    expect(pick({ fr: 'Bonjour', en: '', zh: '' }, 'zh')).toBe('Bonjour');
    expect(pick({ fr: '', en: 'Hello', zh: '' }, 'zh')).toBe('Hello');
  });

  it('duplique une valeur dans les trois langues', () => {
    expect(sameInAllLocales('DELF')).toEqual({ fr: 'DELF', en: 'DELF', zh: 'DELF' });
  });
});
