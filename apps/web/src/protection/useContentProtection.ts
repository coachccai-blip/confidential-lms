import { useEffect, useRef, useState } from 'react';
import type { SecurityEventType } from '@lms/core';

export type ShieldReason = 'blur' | 'hidden' | 'print' | null;

export interface ProtectionMessage {
  readonly title: string;
  readonly text: string;
}

/** Libellés fournis par l'appelant : la couche protection reste sans langue. */
export interface ProtectionMessages {
  readonly clipboardNotice: string;
  readonly copy: ProtectionMessage;
  readonly save: ProtectionMessage;
  readonly print: ProtectionMessage;
  readonly screenshot: ProtectionMessage;
  readonly devtools: ProtectionMessage;
}

export interface ProtectionOptions {
  readonly enabled: boolean;
  readonly fingerprint: string;
  readonly messages: ProtectionMessages;
  readonly onEvent: (type: SecurityEventType, metadata?: Record<string, string | number | boolean>) => void;
  readonly onNotice: (notice: { readonly tone: 'warning' | 'danger' | 'info'; readonly title: string; readonly text: string }) => void;
}

/** Delai avant masquage sur perte de focus (evite le clignotement). */
const BLUR_GRACE_MS = 700;
/** Ecart de taille de fenetre au-dela duquel on suspecte des devtools ancrees. */
const DEVTOOLS_DELTA_PX = 170;

/**
 * Protections applicables dans un navigateur (brief section 4.1, adapte au web).
 *
 * Limite honnete et documentee dans le README : un navigateur ne peut pas
 * bloquer une capture d'ecran systeme ni un enregistrement. Ces mesures
 * elevent le cout du pillage opportuniste et alimentent la tracabilite ;
 * le blocage reel de la capture necessite l'application Electron
 * (`setContentProtection`) ou Android (`FLAG_SECURE`).
 */
export function useContentProtection(options: ProtectionOptions): { readonly shieldReason: ShieldReason } {
  const { enabled, fingerprint, messages, onEvent, onNotice } = options;
  const [shieldReason, setShieldReason] = useState<ShieldReason>(null);
  const blurTimer = useRef<number | null>(null);
  const devtoolsFlagged = useRef(false);
  const lastNoticeAt = useRef(0);

  useEffect(() => {
    if (!enabled) {
      setShieldReason(null);
      return;
    }

    /** Evite d'empiler deux avertissements pour un meme geste. */
    function notify(payload: { tone: 'warning' | 'danger' | 'info'; title: string; text: string }) {
      const now = Date.now();
      if (now - lastNoticeAt.current < 1500) return;
      lastNoticeAt.current = now;
      onNotice(payload);
    }

    const notice = `${messages.clipboardNotice}\n${fingerprint}`;

    function onContextMenu(event: MouseEvent) {
      event.preventDefault();
      onEvent('context-menu-blocked');
    }

    function onCopy(event: ClipboardEvent) {
      event.preventDefault();
      // Le presse-papiers recoit l'avertissement filigrane, pas le contenu.
      event.clipboardData?.setData('text/plain', notice);
      onEvent('copy-blocked');
      notify({ tone: 'warning', ...messages.copy });
    }

    function onCut(event: ClipboardEvent) {
      event.preventDefault();
      event.clipboardData?.setData('text/plain', notice);
      onEvent('cut-blocked');
    }

    function onDragStart(event: DragEvent) {
      event.preventDefault();
    }

    function onSelectStart(event: Event) {
      const target = event.target as HTMLElement | null;
      // Les champs de saisie restent utilisables (quiz, recherche, compte).
      if (target?.closest('input, textarea, [data-allow-select="true"]')) return;
      event.preventDefault();
    }

    function onBeforePrint() {
      setShieldReason('print');
      onEvent('print-blocked');
      notify({ tone: 'danger', ...messages.print });
      window.setTimeout(() => setShieldReason((current) => (current === 'print' ? null : current)), 2500);
    }

    function onKeyDown(event: KeyboardEvent) {
      const key = event.key.toLowerCase();
      const meta = event.ctrlKey || event.metaKey;

      if (meta && ['c', 'x'].includes(key)) {
        const target = event.target as HTMLElement | null;
        if (target?.closest('input, textarea')) return;
        event.preventDefault();
        onEvent('copy-blocked', { raccourci: `${event.ctrlKey ? 'Ctrl' : 'Cmd'}+${key.toUpperCase()}` });
        notify({ tone: 'warning', ...messages.copy });
      }

      if (meta && key === 'p') {
        event.preventDefault();
        onBeforePrint();
      }

      if (meta && ['s', 'u'].includes(key)) {
        event.preventDefault();
        onEvent('save-blocked', { raccourci: key.toUpperCase() });
        notify({ tone: 'warning', ...messages.save });
      }

      if (key === 'f12' || (meta && event.shiftKey && ['i', 'j', 'c'].includes(key))) {
        event.preventDefault();
        onEvent('devtools-suspected', { raccourci: key.toUpperCase() });
      }

      if (key === 'printscreen') {
        onEvent('screenshot-shortcut');
        notify({ tone: 'danger', ...messages.screenshot });
        // Tentative best-effort de neutralisation du presse-papiers.
        void navigator.clipboard?.writeText(notice).catch(() => undefined);
      }
    }

    function onBlur() {
      if (blurTimer.current) window.clearTimeout(blurTimer.current);
      blurTimer.current = window.setTimeout(() => {
        setShieldReason('blur');
        onEvent('focus-lost');
      }, BLUR_GRACE_MS);
    }

    function onFocus() {
      if (blurTimer.current) window.clearTimeout(blurTimer.current);
      setShieldReason((current) => (current === 'blur' ? null : current));
    }

    function onVisibility() {
      if (document.visibilityState === 'hidden') {
        setShieldReason('hidden');
        onEvent('visibility-hidden');
      } else {
        setShieldReason((current) => (current === 'hidden' ? null : current));
      }
    }

    function onResize() {
      const widthGap = window.outerWidth - window.innerWidth;
      const heightGap = window.outerHeight - window.innerHeight;
      const suspicious = widthGap > DEVTOOLS_DELTA_PX || heightGap > DEVTOOLS_DELTA_PX;
      if (suspicious && !devtoolsFlagged.current) {
        devtoolsFlagged.current = true;
        onEvent('devtools-suspected', { ecartX: widthGap, ecartY: heightGap });
        notify({ tone: 'danger', ...messages.devtools });
      }
      if (!suspicious) devtoolsFlagged.current = false;
    }

    const originalPrint = window.print.bind(window);
    window.print = () => {
      onBeforePrint();
    };

    document.addEventListener('contextmenu', onContextMenu);
    document.addEventListener('copy', onCopy);
    document.addEventListener('cut', onCut);
    document.addEventListener('dragstart', onDragStart);
    document.addEventListener('selectstart', onSelectStart);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('beforeprint', onBeforePrint);
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);
    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      if (blurTimer.current) window.clearTimeout(blurTimer.current);
      window.print = originalPrint;
      document.removeEventListener('contextmenu', onContextMenu);
      document.removeEventListener('copy', onCopy);
      document.removeEventListener('cut', onCut);
      document.removeEventListener('dragstart', onDragStart);
      document.removeEventListener('selectstart', onSelectStart);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('beforeprint', onBeforePrint);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('resize', onResize);
    };
  }, [enabled, fingerprint, messages, onEvent, onNotice]);

  return { shieldReason };
}
