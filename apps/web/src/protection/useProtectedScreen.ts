import { useCallback, useMemo } from 'react';
import { D, useI18n } from '../i18n';
import { useApp } from '../state/app-context';
import { useContentProtection, type ProtectionNotice, type ShieldReason } from './useContentProtection';

const NOTICES = {
  copy: { tone: 'warning', title: D.toast.copyTitle, text: D.toast.copyText },
  save: { tone: 'warning', title: D.toast.saveTitle, text: D.toast.saveText },
  print: { tone: 'danger', title: D.toast.printTitle, text: D.toast.printText },
  screenshot: { tone: 'danger', title: D.toast.screenshotTitle, text: D.toast.screenshotText },
  devtools: { tone: 'danger', title: D.toast.devtoolsTitle, text: D.toast.devtoolsText },
} as const;

/**
 * Active la couche de protection sur un écran de contenu.
 *
 * La couche elle-même ne connaît aucune langue : elle signale une intention
 * (« copie bloquée »), et c'est ici qu'on choisit les mots. Les notifications
 * suivent donc la langue courante, même si elle change après coup.
 */
export function useProtectedScreen(): { readonly shieldReason: ShieldReason } {
  const { fingerprint, logEvent, pushToast } = useApp();
  const { l } = useI18n();

  const clipboardNotice = useMemo(
    () => `${l(D.brand.name)} — ${l(D.course.protectedBanner)}`,
    [l],
  );

  const onNotice = useCallback(
    (notice: ProtectionNotice) => {
      const message = NOTICES[notice];
      pushToast({ tone: message.tone, title: message.title, text: message.text });
    },
    [pushToast],
  );

  return useContentProtection({ enabled: true, fingerprint, clipboardNotice, onEvent: logEvent, onNotice });
}
