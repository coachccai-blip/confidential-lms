import { LOCALES, LOCALE_LABELS } from '@lms/core';
import { D, useI18n } from '../i18n';

/** Bascule FR / EN / ZH. La langue est mémorisée avec le reste de l'état. */
export function LanguageSwitch({ deep = false }: { readonly deep?: boolean }) {
  const { locale, setLocale, l } = useI18n();

  return (
    <div className={deep ? 'lang-switch lang-switch--deep' : 'lang-switch'} role="group" aria-label={l(D.common.changeLanguage)}>
      {LOCALES.map((code) => (
        <button
          type="button"
          key={code}
          className={code === locale ? 'lang-switch__btn lang-switch__btn--active' : 'lang-switch__btn'}
          onClick={() => setLocale(code)}
          aria-pressed={code === locale}
          title={LOCALE_LABELS[code].name}
        >
          {LOCALE_LABELS[code].short}
        </button>
      ))}
    </div>
  );
}
