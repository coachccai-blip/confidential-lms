import { useEffect, useState } from 'react';
import { watermarkLabel, watermarkPositionAt } from '@lms/core';

export interface WatermarkProps {
  readonly email: string;
  readonly phone: string;
  /** Nombre de repetitions du motif (mosaique). */
  readonly repeat?: number;
  /** Filigrane fixe couvrant tout l'ecran, plutot que la zone parente. */
  readonly fixed?: boolean;
  /** Periode de deplacement, en millisecondes (30 s par defaut). */
  readonly periodMs?: number;
}

/**
 * Filigrane visible (brief section 4.3).
 *
 * Le motif est repete en mosaique et se deplace a intervalle regulier afin
 * qu'un recadrage ne puisse pas eliminer durablement l'identifiant.
 * L'overlay est `pointer-events: none` : il n'entrave jamais l'interaction.
 */
export function Watermark({ email, phone, repeat = 12, fixed = false, periodMs = 30_000 }: WatermarkProps) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), periodMs);
    return () => window.clearInterval(timer);
  }, [periodMs]);

  const position = watermarkPositionAt(now, periodMs);
  const label = watermarkLabel(email, phone, new Date(now));

  return (
    <div className={fixed ? 'watermark watermark--fixed' : 'watermark'} aria-hidden="true" data-testid="watermark">
      <div
        className="watermark__grid"
        style={{ transform: `translate(${position.offsetX}%, ${position.offsetY}%) rotate(${position.angle}deg)` }}
      >
        {Array.from({ length: repeat }, (_, index) => (
          <span className="watermark__text" key={index}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
