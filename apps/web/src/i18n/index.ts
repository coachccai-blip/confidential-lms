import { useCallback, useMemo } from 'react';
import { LOCALE_TAGS, pick, type Locale, type LocalizedText } from '@lms/core';
import { useApp } from '../state/app-context';

export { D } from './dictionary';

export interface I18n {
  readonly locale: Locale;
  readonly localeTag: string;
  readonly setLocale: (locale: Locale) => void;
  /** Résout une valeur localisée dans la langue courante. */
  readonly l: (text: LocalizedText) => string;
  /** Formate une date dans la langue courante. */
  readonly formatDate: (value: string | Date, options?: Intl.DateTimeFormatOptions) => string;
  readonly formatNumber: (value: number, options?: Intl.NumberFormatOptions) => string;
}

export function useI18n(): I18n {
  const { locale, setLocale } = useApp();
  const localeTag = LOCALE_TAGS[locale];

  const l = useCallback((text: LocalizedText) => pick(text, locale), [locale]);

  const formatDate = useCallback(
    (value: string | Date, options: Intl.DateTimeFormatOptions = { dateStyle: 'short', timeStyle: 'short' }) =>
      new Date(value).toLocaleString(localeTag, options),
    [localeTag],
  );

  const formatNumber = useCallback(
    (value: number, options: Intl.NumberFormatOptions = { maximumFractionDigits: 2 }) =>
      value.toLocaleString(localeTag, options),
    [localeTag],
  );

  return useMemo(
    () => ({ locale, localeTag, setLocale, l, formatDate, formatNumber }),
    [locale, localeTag, setLocale, l, formatDate, formatNumber],
  );
}

/** Formate une durée en minutes selon la langue. */
export function formatDuration(minutes: number, locale: Locale): string {
  if (minutes < 60) return locale === 'zh' ? `${minutes} 分钟` : `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (locale === 'zh') return rest === 0 ? `${hours} 小时` : `${hours} 小时 ${rest} 分`;
  return rest === 0 ? `${hours} h` : `${hours} h ${String(rest).padStart(2, '0')}`;
}
