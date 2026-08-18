import { Fragment, type ReactNode } from 'react';

/**
 * Rendu du gras `**…**` dans les textes courts.
 *
 * Les paragraphes de leçon passent par un rendu riche complet (glossaire,
 * prénom, filigrane). Les explications de quiz et les légendes de schémas
 * n'en ont pas besoin, mais emploient la même syntaxe : sans ce composant,
 * les astérisques s'affichaient telles quelles.
 */
const BOLD = /(\*\*[^*]+\*\*)/g;

export function Emphasis({ text }: { readonly text: string }): ReactNode {
  const parts = text.split(BOLD).filter((part) => part.length > 0);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={index}>{part.slice(2, -2)}</strong>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
