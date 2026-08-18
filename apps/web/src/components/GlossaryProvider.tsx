import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LOCALES, LOCALE_LABELS, pick } from '@lms/core';
import { getGlossaryEntry } from '../content';
import { D, useI18n } from '../i18n';
import { IconX } from './Icons';

interface GlossaryContextValue {
  readonly open: (id: string) => void;
}

const GlossaryContext = createContext<GlossaryContextValue | null>(null);

/**
 * Fenêtre de définition des mots difficiles.
 *
 * Les trois langues sont affichées simultanément — et non selon l'interface —
 * pour que l'apprenant puisse comparer la définition française avec sa langue
 * d'appui, ce qui est précisément l'intérêt de l'exercice.
 */
export function GlossaryProvider({ children }: { readonly children: ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const { l, locale } = useI18n();

  const open = useCallback((id: string) => setOpenId(id), []);
  const close = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    if (!openId) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.stopPropagation();
        close();
      }
    }
    document.addEventListener('keydown', onKey, true);
    return () => document.removeEventListener('keydown', onKey, true);
  }, [openId, close]);

  const value = useMemo<GlossaryContextValue>(() => ({ open }), [open]);
  const entry = openId ? getGlossaryEntry(openId) : null;

  return (
    <GlossaryContext.Provider value={value}>
      {children}
      {entry ? (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={entry.term} onClick={close}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <header className="modal__head">
              <span className="modal__eyebrow">{l(D.glossary.eyebrow)}</span>
              <div className="modal__term">
                <h2>{entry.term}</h2>
                {entry.ipa ? <span className="modal__ipa">{entry.ipa}</span> : null}
                <span className="modal__pos">{l(entry.partOfSpeech)}</span>
              </div>
              <button type="button" className="modal__close" onClick={close} aria-label={l(D.common.close)}>
                <IconX size={15} />
              </button>
            </header>

            <div className="modal__body">
              {LOCALES.map((code) => (
                <div className={code === locale ? 'definition definition--active' : 'definition'} key={code}>
                  <span className="definition__lang">{LOCALE_LABELS[code].short}</span>
                  <p>{pick(entry.definition, code)}</p>
                </div>
              ))}
            </div>

            {entry.example ? (
              <div className="modal__example">
                <q>{entry.example.fr}</q>
                <span>{l(entry.example.gloss)}</span>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </GlossaryContext.Provider>
  );
}

export function useGlossary(): GlossaryContextValue {
  const context = useContext(GlossaryContext);
  if (!context) throw new Error('useGlossary doit être utilisé dans un GlossaryProvider');
  return context;
}
