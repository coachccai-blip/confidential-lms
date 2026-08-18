/**
 * Internationalisation du contenu (français, anglais, chinois).
 *
 * Le français est la langue de référence : c'est la langue enseignée, donc
 * les exemples restent en français quelle que soit la langue d'interface,
 * seules les explications sont traduites.
 */

export const LOCALES = ['fr', 'en', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'fr';

/** Une chaîne déclinée dans les trois langues de la plateforme. */
export type LocalizedText = Readonly<Record<Locale, string>>;

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

/** Sélectionne une variante, avec repli sur le français puis sur l'anglais. */
export function pick(text: LocalizedText, locale: Locale): string {
  const value = text[locale];
  if (value && value.length > 0) return value;
  return text.fr || text.en || '';
}

/** Construit une valeur localisée identique dans les trois langues. */
export function sameInAllLocales(value: string): LocalizedText {
  return { fr: value, en: value, zh: value };
}

/** Étiquettes des langues, dans leur propre langue. */
export const LOCALE_LABELS: Readonly<Record<Locale, { readonly name: string; readonly short: string }>> = {
  fr: { name: 'Français', short: 'FR' },
  en: { name: 'English', short: 'EN' },
  zh: { name: '中文', short: 'ZH' },
};

/** Code BCP 47 utilisé pour l'attribut `lang` et les formats de date. */
export const LOCALE_TAGS: Readonly<Record<Locale, string>> = {
  fr: 'fr-FR',
  en: 'en-GB',
  zh: 'zh-CN',
};
