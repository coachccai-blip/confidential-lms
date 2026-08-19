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

/** Vitesse de lecture : normale pour écouter, lente pour répéter, rapide pour réviser. */
export type SpeechRate = 'normal' | 'slow' | 'fast';

const RATES: Readonly<Record<SpeechRate, number>> = { normal: 0.95, slow: 0.62, fast: 1.5 };

/** Valeur numérique d'une vitesse, pour les lecteurs qui fabriquent leurs utterances. */
export function rateValue(rate: SpeechRate): number {
  return RATES[rate];
}

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

/** Langues que la plateforme sait faire parler : celles de l'interface. */
export type SpeechLang = 'fr' | 'en' | 'zh';

/**
 * Variante préférée par langue. Pour le français, la norme hexagonale
 * (liaisons, « soixante-dix ») est celle que le catalogue enseigne ;
 * pour l'anglais et le chinois, on prend les variantes les plus répandues
 * chez les apprenants visés.
 */
const PREFERRED_TAGS: Readonly<Record<SpeechLang, readonly string[]>> = {
  fr: ['fr-fr'],
  en: ['en-us', 'en-gb'],
  zh: ['zh-cn', 'cmn-hans-cn', 'zh-tw', 'zh-hk'],
};

/**
 * Choisit la meilleure voix disponible pour une langue.
 *
 * Les voix locales passent avant les voix réseau : elles démarrent sans
 * latence et fonctionnent hors connexion.
 */
export function pickVoiceFor(lang: SpeechLang): SpeechSynthesisVoice | null {
  if (voices.length === 0) refreshVoices();
  const candidates = voices.filter((voice) => voice.lang.toLowerCase().startsWith(lang === 'zh' ? 'zh' : lang));
  if (candidates.length === 0 && lang === 'zh') {
    // Certains moteurs étiquettent le mandarin « cmn-… » plutôt que « zh-… ».
    candidates.push(...voices.filter((voice) => voice.lang.toLowerCase().startsWith('cmn')));
  }
  if (candidates.length === 0) return null;
  for (const tag of PREFERRED_TAGS[lang]) {
    const local = candidates.find((voice) => voice.lang.toLowerCase() === tag && voice.localService);
    if (local) return local;
    const any = candidates.find((voice) => voice.lang.toLowerCase() === tag);
    if (any) return any;
  }
  return candidates.find((voice) => voice.localService) ?? candidates[0] ?? null;
}

function pickVoice(): SpeechSynthesisVoice | null {
  return pickVoiceFor('fr');
}

/** Vrai si le navigateur peut lire la langue demandée à voix haute. */
export function canSpeak(lang: SpeechLang): boolean {
  return synth() !== null && pickVoiceFor(lang) !== null;
}

/** Vrai si le navigateur peut lire du français à voix haute. */
export function canSpeakFrench(): boolean {
  return canSpeak('fr');
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

/**
 * Prépare un texte de leçon pour la voix : retire le gras `**`, résout les
 * mots de glossaire `[[id|libellé]]`, remplace les puces médianes par des
 * virgules et normalise les blancs.
 */
export function cleanForSpeech(text: string): string {
  return text
    .replace(/\*\*/g, '')
    .replace(/\[\[([^\]|]+)\|?([^\]]*)\]\]/g, (_, id: string, label: string) => label || id)
    .replace(/·/g, ', ')
    .replace(/\s+/g, ' ')
    .trim();
}

/* ------------------------------------------------------------------
   Médiation entre lectures concurrentes.

   `speechSynthesis` est un canal unique : si un bouton d'exemple parle
   pendant que le narrateur lit la leçon, le dernier arrivé coupe l'autre
   sans prévenir. Le narrateur s'abonne donc ici pour se mettre en pause
   proprement quand une lecture ponctuelle démarre.
   ------------------------------------------------------------------ */

const externalSpeakListeners = new Set<() => void>();

/** Prévient les lecteurs de longue durée qu'une lecture ponctuelle démarre. */
function notifyExternalSpeak(): void {
  for (const listener of externalSpeakListeners) listener();
}

/** S'abonne aux lectures ponctuelles (boutons d'exemple, dictée). */
export function onExternalSpeak(listener: () => void): () => void {
  externalSpeakListeners.add(listener);
  return () => externalSpeakListeners.delete(listener);
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
  notifyExternalSpeak();
  const clean = cleanForSpeech(text);
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
