import { useCallback, useMemo } from 'react';
import { D, useI18n } from '../i18n';
import { useApp } from '../state/app-context';
import { useContentProtection, type ProtectionMessages, type ShieldReason } from './useContentProtection';

/**
 * Active la couche de protection sur un écran de contenu, avec des libellés
 * dans la langue de l'apprenant.
 */
export function useProtectedScreen(): { readonly shieldReason: ShieldReason } {
  const { fingerprint, logEvent, pushToast } = useApp();
  const { l } = useI18n();

  const messages = useMemo<ProtectionMessages>(
    () => ({
      clipboardNotice: `${l(D.brand.name)} — ${l(D.course.protectedBanner)}`,
      copy: { title: l(D.toast.copyTitle), text: l(D.toast.copyText) },
      save: { title: l(D.toast.saveTitle), text: l(D.toast.saveText) },
      print: { title: l(D.toast.printTitle), text: l(D.toast.printText) },
      screenshot: { title: l(D.toast.screenshotTitle), text: l(D.toast.screenshotText) },
      devtools: { title: l(D.toast.devtoolsTitle), text: l(D.toast.devtoolsText) },
    }),
    [l],
  );

  const onNotice = useCallback(
    (notice: { tone: 'warning' | 'danger' | 'info'; title: string; text: string }) =>
      pushToast({ tone: notice.tone, title: notice.title, text: notice.text }),
    [pushToast],
  );

  return useContentProtection({ enabled: true, fingerprint, messages, onEvent: logEvent, onNotice });
}
