import { useEffect, useRef, useState, type ReactNode } from 'react';

/* ------------------------------------------------------------------
   Apparition à la lecture.

   Le bloc monte de quelques pixels en se révélant, une fois, quand il
   entre dans la fenêtre. Trois garde-fous :

   - un seul déclenchement par bloc. Un élément qui réapparaît à chaque
     passage transforme le défilement en clignotement ;
   - le contenu est présent dans le DOM dès le départ. L'animation ne
     porte que sur l'opacité et la translation : la recherche du
     navigateur, la lecture d'écran et l'impression voient tout ;
   - si le système demande moins d'animation, ou si l'API d'observation
     manque, tout s'affiche directement.
   ------------------------------------------------------------------ */

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function Reveal({ children, index = 0 }: { readonly children: ReactNode; readonly index?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(() => prefersReducedMotion() || typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    if (shown) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      // Marge basse négative : le bloc se révèle un peu avant d'être au bord,
      // sinon le mouvement se produit hors du champ de lecture.
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      className={shown ? 'reveal reveal--in' : 'reveal'}
      // Le décalage ne s'applique qu'aux premiers blocs : au-delà, l'attente
      // deviendrait perceptible.
      style={index < 4 ? { transitionDelay: `${index * 55}ms` } : undefined}
    >
      {children}
    </div>
  );
}
