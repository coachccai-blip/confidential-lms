import { useEffect } from 'react';
import { useApp } from '../state/app-context';
import { playSound } from './sounds';

/* ------------------------------------------------------------------
   Bruitage de clic, posé une fois pour toute l'application.

   Un écouteur unique en phase de capture vaut mieux qu'un `onClick` sur
   chaque bouton : rien à brancher, rien à oublier, et un seul endroit où
   décider ce qui sonne.

   Ne sonnent que les commandes réelles — boutons, liens de navigation,
   options de quiz, éléments de schéma. Un clic dans un paragraphe ou un
   champ de saisie reste muet.
   ------------------------------------------------------------------ */

const INTERACTIVE = 'button, a[href], summary, [role="button"]';

/** Ces commandes portent déjà leur propre son, plus expressif. */
const HAS_OWN_SOUND = '.option, .btn--celebrate, .ix-chip, .ix-step, .ix-seg, .ix-timeline__stop, .ix-wheel__spoke';

export function ClickSound() {
  const { state } = useApp();

  useEffect(() => {
    if (!state.soundOn) return;

    const onPointerDown = (event: Event) => {
      const target = event.target as Element | null;
      if (!target || typeof target.closest !== 'function') return;

      const control = target.closest(INTERACTIVE);
      if (!control) return;
      if (control.hasAttribute('disabled') || control.getAttribute('aria-disabled') === 'true') return;

      // Les éléments de schéma ont un son de sélection, plus haut : c'est
      // ce qui distingue « j'explore » de « je valide ».
      if (control.closest('.ix')) {
        playSound('select', true);
        return;
      }
      if (control.matches(HAS_OWN_SOUND)) return;

      playSound('tap', true);
    };

    // En capture, et sur `pointerdown` : le son doit accompagner l'appui,
    // pas le relâchement, sinon il paraît en retard.
    document.addEventListener('pointerdown', onPointerDown, true);
    return () => document.removeEventListener('pointerdown', onPointerDown, true);
  }, [state.soundOn]);

  return null;
}
