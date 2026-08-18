/* ------------------------------------------------------------------
   Bruitages.

   Tout est synthétisé à la volée par l'API Web Audio : aucun fichier à
   charger, donc rien qui parte sur le réseau et rien qui alourdisse le
   paquet. Les sons sont courts (moins de 400 ms), doux, et construits sur
   une gamme pentatonique — deux notes prises au hasard dedans ne peuvent
   pas sonner faux.

   Trois précautions :
   - le contexte audio n'est créé qu'au premier son, car un navigateur
     refuse de l'ouvrir avant un geste de l'utilisateur ;
   - le volume est bas par défaut, et une préférence système « moins
     d'animations » coupe tout ;
   - chaque note passe par une enveloppe : un son démarré ou coupé net
     produit un claquement désagréable.
   ------------------------------------------------------------------ */

export type SoundName =
  | 'tap'
  | 'select'
  | 'success'
  | 'error'
  | 'complete'
  | 'levelUp'
  | 'badge'
  | 'toggle';

interface Note {
  /** Fréquence en hertz. */
  readonly hz: number;
  /** Décalage du début, en secondes. */
  readonly at: number;
  readonly duration: number;
  readonly gain: number;
  readonly type?: OscillatorType;
}

/** Do majeur pentatonique : do, ré, mi, sol, la, sur trois octaves. */
const C5 = 523.25;
const D5 = 587.33;
const E5 = 659.25;
const G5 = 783.99;
const A5 = 880.0;
const C6 = 1046.5;
const E6 = 1318.5;
const G6 = 1568.0;
const G4 = 392.0;
const E4 = 329.63;

const SCORES: Readonly<Record<SoundName, readonly Note[]>> = {
  // Un clic : une seule note très brève, presque un toc.
  tap: [{ hz: G5, at: 0, duration: 0.055, gain: 0.16, type: 'triangle' }],
  // Une sélection : un cran plus haut, pour signaler que ça a « pris ».
  select: [{ hz: C6, at: 0, duration: 0.07, gain: 0.18, type: 'triangle' }],
  // Bascule d'un réglage : deux notes descendantes, discrètes.
  toggle: [
    { hz: E5, at: 0, duration: 0.06, gain: 0.13 },
    { hz: C5, at: 0.05, duration: 0.08, gain: 0.11 },
  ],
  // Réussite : tierce montante, franche mais sans triomphalisme.
  success: [
    { hz: E5, at: 0, duration: 0.11, gain: 0.17 },
    { hz: G5, at: 0.08, duration: 0.13, gain: 0.17 },
    { hz: C6, at: 0.16, duration: 0.22, gain: 0.16 },
  ],
  // Échec : deux notes qui descendent. Sourd, jamais agressif.
  error: [
    { hz: E4, at: 0, duration: 0.12, gain: 0.14, type: 'sine' },
    { hz: G4 * 0.75, at: 0.09, duration: 0.2, gain: 0.13, type: 'sine' },
  ],
  // Étape terminée : arpège de quatre notes.
  complete: [
    { hz: C5, at: 0, duration: 0.1, gain: 0.15 },
    { hz: E5, at: 0.07, duration: 0.1, gain: 0.15 },
    { hz: G5, at: 0.14, duration: 0.12, gain: 0.15 },
    { hz: C6, at: 0.21, duration: 0.3, gain: 0.16 },
  ],
  // Changement de niveau : le même arpège, prolongé d'une quinte.
  levelUp: [
    { hz: C5, at: 0, duration: 0.1, gain: 0.15 },
    { hz: E5, at: 0.07, duration: 0.1, gain: 0.15 },
    { hz: G5, at: 0.14, duration: 0.1, gain: 0.16 },
    { hz: C6, at: 0.21, duration: 0.12, gain: 0.17 },
    { hz: E6, at: 0.29, duration: 0.14, gain: 0.16 },
    { hz: G6, at: 0.37, duration: 0.34, gain: 0.15 },
  ],
  // Badge : deux notes cristallines, un peu carillon.
  badge: [
    { hz: A5, at: 0, duration: 0.13, gain: 0.15, type: 'sine' },
    { hz: E6, at: 0.09, duration: 0.28, gain: 0.14, type: 'sine' },
    { hz: D5 * 2, at: 0.09, duration: 0.28, gain: 0.07, type: 'sine' },
  ],
};

type AudioContextCtor = typeof AudioContext;

let context: AudioContext | null = null;

function audioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (context) return context;
  const Ctor: AudioContextCtor | undefined =
    window.AudioContext ?? (window as unknown as { webkitAudioContext?: AudioContextCtor }).webkitAudioContext;
  if (!Ctor) return null;
  try {
    context = new Ctor();
    return context;
  } catch {
    return null;
  }
}

function reducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Joue un son. Silencieux — jamais une erreur — si l'audio est indisponible,
 * refusé par le navigateur ou coupé par l'utilisateur : un bruitage est un
 * agrément, il ne doit jamais interrompre quoi que ce soit.
 */
export function playSound(name: SoundName, enabled: boolean): void {
  if (!enabled || reducedMotion()) return;
  const ctx = audioContext();
  if (!ctx) return;

  // Un contexte créé avant le premier geste reste suspendu.
  if (ctx.state === 'suspended') void ctx.resume().catch(() => undefined);

  const now = ctx.currentTime;
  for (const note of SCORES[name]) {
    try {
      const oscillator = ctx.createOscillator();
      const envelope = ctx.createGain();
      oscillator.type = note.type ?? 'triangle';
      oscillator.frequency.setValueAtTime(note.hz, now + note.at);

      // Attaque courte puis extinction exponentielle : sans cela, le début
      // et la fin de la note produisent un claquement.
      const start = now + note.at;
      const end = start + note.duration;
      envelope.gain.setValueAtTime(0.0001, start);
      envelope.gain.exponentialRampToValueAtTime(note.gain, start + 0.012);
      envelope.gain.exponentialRampToValueAtTime(0.0001, end);

      oscillator.connect(envelope);
      envelope.connect(ctx.destination);
      oscillator.start(start);
      oscillator.stop(end + 0.02);
    } catch {
      // Un navigateur qui refuse un oscillateur ne doit pas casser la page.
      return;
    }
  }
}
