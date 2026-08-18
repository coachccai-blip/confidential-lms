/* ------------------------------------------------------------------
   Gerbe de confettis.

   Dessinée sur un canevas créé à la demande, posé au-dessus de la page en
   `pointer-events: none`, puis retiré dès la fin. Aucune dépendance, et
   rien qui subsiste après l'animation.

   Les couleurs sont celles de la marque : une explosion arc-en-ciel
   jurerait avec le reste de l'interface.
   ------------------------------------------------------------------ */

const COLORS = ['#67e8f9', '#38bdf8', '#2563eb', '#a5b4fc', '#ffffff'] as const;

interface Piece {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  spin: number;
  size: number;
  color: string;
  life: number;
}

function reducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Projette des confettis depuis un point de l'écran, en fraction de la
 * fenêtre (0.5 / 0.5 = le centre). L'appel est sans effet si le système
 * demande moins d'animations.
 */
export function burstConfetti(originX = 0.5, originY = 0.45, count = 90): void {
  if (typeof document === 'undefined' || reducedMotion()) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'confetti-layer';
  const context = canvas.getContext('2d');
  if (!context) return;

  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.scale(dpr, dpr);
  document.body.appendChild(canvas);

  const startX = width * originX;
  const startY = height * originY;

  const pieces: Piece[] = Array.from({ length: count }, () => {
    // Éventail vers le haut : un tir horizontal retombe hors du champ.
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.9;
    const speed = 5 + Math.random() * 8;
    return {
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      rotation: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.28,
      size: 5 + Math.random() * 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)] ?? '#38bdf8',
      life: 1,
    };
  });

  const GRAVITY = 0.24;
  const DRAG = 0.988;
  let frame = 0;

  const step = () => {
    frame += 1;
    context.clearRect(0, 0, width, height);
    let alive = 0;

    for (const piece of pieces) {
      piece.vy += GRAVITY;
      piece.vx *= DRAG;
      piece.vy *= DRAG;
      piece.x += piece.vx;
      piece.y += piece.vy;
      piece.rotation += piece.spin;
      // Les pièces s'effacent progressivement à partir de la mi-course.
      piece.life = Math.max(0, 1 - frame / 110);

      if (piece.life <= 0 || piece.y > height + 40) continue;
      alive += 1;

      context.save();
      context.globalAlpha = piece.life;
      context.translate(piece.x, piece.y);
      context.rotate(piece.rotation);
      context.fillStyle = piece.color;
      // Rectangle aplati : un confetti qui tourne doit paraître fin de profil.
      context.fillRect(-piece.size / 2, -piece.size / 4, piece.size, piece.size / 2);
      context.restore();
    }

    if (alive > 0 && frame < 160) {
      requestAnimationFrame(step);
    } else {
      canvas.remove();
    }
  };

  requestAnimationFrame(step);
}
