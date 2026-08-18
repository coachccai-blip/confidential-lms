import { useMemo, type ElementType, type ReactNode } from 'react';
import { watermarkText } from '@lms/core';

export interface ProtectedTextProps {
  readonly children: string;
  readonly fingerprint: string;
  readonly as?: ElementType;
  readonly className?: string;
  /** Densite d'injection de l'empreinte invisible. */
  readonly everyWords?: number;
}

/**
 * Rend un texte deja filigrane par apprenant (brief section 4.3).
 *
 * L'empreinte est injectee sous forme de caracteres de largeur nulle : le
 * rendu visuel est strictement identique, mais tout copier-coller emporte
 * l'identifiant de l'apprenant et de son appareil.
 */
export function ProtectedText({
  children,
  fingerprint,
  as: Tag = 'span',
  className,
  everyWords = 24,
}: ProtectedTextProps): ReactNode {
  const marked = useMemo(() => watermarkText(children, fingerprint, { everyWords }), [children, fingerprint, everyWords]);
  return <Tag className={className}>{marked}</Tag>;
}
