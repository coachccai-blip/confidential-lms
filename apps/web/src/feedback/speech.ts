/* ------------------------------------------------------------------
   Lecture à voix haute des exemples français.

   Le navigateur sait déjà parler : `speechSynthesis` est disponible
   partout, ne demande aucun fichier, et respecte donc la contrainte
   d'un site servi en pages statiques. C'est ce qui permet d'ajouter
   l'écoute à un catalogue entier sans alourdir le paquet d'un octet.

   Trois précautions dictées par l'API elle-même :
   - la liste des voix arrive de façon asynchrone sur plusieurs
     navigateurs : au premier appel elle est souvent vide, et se remplit
     après l'évènement `voiceschanged` ;
   - une voix française n'est pas garantie. Sans elle, on préfère se
     taire plutôt que de faire lire du français avec un accent anglais,
     ce qui apprendrait la mauvaise prononciation ;
   - un `speak()` qui se superpose au précédent produit une bouillie :
     on annule systématiquement ce qui est en cours.
   ------------------------------------------------------------------ */

/** Vitesse de lecture : normale pour écouter, lente pour répéter. */
export type SpeechRate = 'normal' | 'slow';

const RATES: Readonly<Record<SpeechRate, number>> = { normal: 0.95, slow: 0.62 };

let voices: SpeechSynthesisVoice[] = [];
let listening = false;

function synth(): SpeechSynthesis | null {
  if (typeof window === 'undefined') return null;
  return window.speechSynthesis ?? null;
}

function refreshVoices(): void {
  const engine = synth();
  if (!engine) return;
  voices = engine.getVoices();
}

/**
 * Choisit la meilleure voix française disponible.
 *
 * On préfère le français de France quand il existe : les autres variantes
 * sont excellentes, mais le catalogue enseigne les normes hexagonales
 * (liaisons, « soixante-dix »), et faire entendre autre chose brouillerait
 * la leçon.
 */
function pickVoice(): SpeechSynthesisVoice | null {
  if (voices.length === 0) refreshVoices();
  const french = voices.filter((voice) => voice.lang.toLowerCase().startsWith('fr'));
  if (french.length === 0) return null;
  return (
    french.find((voice) => voice.lang.toLowerCase() === 'fr-fr' && voice.localService) ??
    french.find((voice) => voice.lang.toLowerCase() === 'fr-fr') ??
    french[0] ??
    null
  );
}

/** Vrai si le navigateur peut lire du français à voix haute. */
export function canSpeakFrench(): boolean {
  return synth() !== null && pickVoice() !== null;
}

/**
 * S'abonne à l'arrivée des voix.
 *
 * Le bouton d'écoute doit se cacher tant qu'aucune voix française n'est
 * là, puis apparaître dès qu'elle arrive — sans quoi il resterait absent
 * pendant toute la session sur les navigateurs qui chargent tard.
 */
export function onVoicesReady(callback: () => void): () => void {
  const engine = synth();
  if (!engine) return () => {};
  refreshVoices();
  const handler = (): void => {
    refreshVoices();
    callback();
  };
  engine.addEventListener('voiceschanged', handler);
  if (!listening) {
    listening = true;
    // Certains navigateurs ne remplissent la liste qu'après un premier appel.
    engine.getVoices();
  }
  return () => engine.removeEventListener('voiceschanged', handler);
}

export interface SpeakOptions {
  readonly rate?: SpeechRate;
  /** Appelé à la fin de la lecture, y compris en cas d'interruption. */
  readonly onEnd?: () => void;
}

/**
 * Lit un texte français à voix haute. Sans voix française, ne fait rien.
 *
 * Le texte reçu vient des leçons : il peut contenir du gras de mise en
 * forme et des retours à la ligne, qui seraient lus tels quels.
 */
export function speakFrench(text: string, options: SpeakOptions = {}): boolean {
  const engine = synth();
  const voice = pickVoice();
  if (!engine || !voice) return false;

  engine.cancel();
  const clean = text
    .replace(/\*\*/g, '')
    .replace(/\[\[([^\]|]+)\|?([^\]]*)\]\]/g, (_, id: string, label: string) => label || id)
    .replace(/·/g, ', ')
    .replace(/\s+/g, ' ')
    .trim();
  if (clean.length === 0) return false;

  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.voice = voice;
  utterance.lang = voice.lang;
  utterance.rate = RATES[options.rate ?? 'normal'];
  utterance.pitch = 1;
  if (options.onEnd) {
    utterance.addEventListener('end', options.onEnd);
    utterance.addEventListener('error', options.onEnd);
  }
  engine.speak(utterance);
  return true;
}

/** Coupe la lecture en cours, par exemple en quittant une leçon. */
export function stopSpeaking(): void {
  synth()?.cancel();
}
