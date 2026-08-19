/* ------------------------------------------------------------------
   Narration audio des leçons.

   Deux responsabilités, volontairement séparées :

   1. La SEGMENTATION (pure, testable) : transformer les blocs d'une
      leçon en une suite de segments narrables — un par titre,
      paragraphe, légende, item de liste… — regroupés en sections
      ré-écoutables. La voix ne lit jamais l'écran comme un bloc de
      texte unique : le découpage donne le rythme, et une pause d'une
      seconde sépare chaque segment.

   2. Le NARRATEUR (singleton à état) : jouer ces segments avec la
      bonne voix par langue (les explications dans la langue de
      l'interface, les exemples toujours en français), et offrir les
      commandes d'un vrai lecteur : pause, reprise, segment
      précédent/suivant, ±5 secondes, vitesse lente.

   Contrainte structurante : `speechSynthesis` ne sait ni se déplacer
   dans un flux ni reprendre de façon fiable après `pause()` (cassé sur
   Chrome Android notamment). Le lecteur reconstruit donc ces gestes
   lui-même : chaque utterance rapporte la position du mot en cours
   (évènement `boundary`), et « pause », « reprendre » ou « ±5 s »
   deviennent « annuler, puis reparler à partir du bon caractère ».
   ------------------------------------------------------------------ */

import { personalise, pick, type LessonBlock, type Locale, type LocalizedText } from '@lms/core';
import {
  cleanForSpeech,
  onExternalSpeak,
  pickVoiceFor,
  rateValue,
  type SpeechLang,
  type SpeechRate,
} from './speech';

/* ================== Détection du français enchâssé ==================

   En interface anglaise ou chinoise, le français ne vit pas que dans les
   blocs d'exemples : il s'invite au milieu des phrases — entre guillemets
   (“Cher Monsieur”), en gras (**à terme**), en mots de glossaire, ou en
   formules entières (« Bien à vous, »). Lire ces fragments avec la voix
   anglaise ou chinoise enseignerait une prononciation fausse : chaque
   segment est donc découpé en PARTIES, chacune avec sa voix.

   Le chinois est le cas simple : toute suite de caractères latins y est
   du français. L'anglais demande une heuristique : diacritiques, élisions
   (j', d', qu'), et un petit lexique de mots exclusivement français. */

const FR_DIACRITIC = /[àâçéèêëîïôûùüÿœæÀÂÇÉÈÊËÎÏÔÛÙÜŸŒÆ]/;
const FR_ELISION = /(?:^|[^\p{L}])(?:qu|[jdlcnmst])[’'](?=\p{L})/iu;

/** Mots qu'un texte anglais n'emploie pas — présence = français. */
const FR_WORDS = new Set([
  'je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils', 'elles', 'moi', 'toi', 'lui',
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'au', 'aux', 'de', 'et', 'est',
  'sont', 'ne', 'pas', 'très', 'bien', 'avec', 'dans', 'pour', 'sur', 'mais',
  'donc', 'alors', 'oui', 'non', 'merci', 'bonjour', 'bonsoir', 'monsieur',
  'madame', 'messieurs', 'cher', 'chère', 'votre', 'notre', 'vos', 'nos',
  'mon', 'ma', 'mes', 'ton', 'ta', 'tes', 'son', 'sa', 'ses', 'ce', 'cette',
  'ces', 'qui', 'que', 'quand', 'comment', 'pourquoi', 'parce', 'être',
  'avoir', 'suis', 'sommes', 'êtes', 'avons', 'avez', 'ont', 'vais', 'allez',
  'allons', 'vont', 'veux', 'veut', 'peux', 'peut', 'tout', 'tous', 'toute',
  'toutes', 'rien', 'en', 'y', 'bon', 'bonne', 'bons', 'bonnes', 'beau',
  'belle', 'petit', 'petite', 'grand', 'grande', 'ici', 'là', 'chez', 'après',
  'avant', 'sans', 'sous', 'entre', 'contre', 'depuis', 'pendant', 'toujours',
]);

/**
 * Mots sans diacritique mais impossibles en anglais : leur seule présence
 * prouve un passage français (« au revoir », « merci vous »…).
 */
const FR_STRONG_WORDS = new Set([
  'bonjour', 'bonsoir', 'salut', 'revoir', 'merci', 'monsieur', 'madame',
  'mademoiselle', 'cordialement', 'salutations', 'beaucoup', 'toujours',
  'jamais', 'vous', 'je', 'tu', 'nous', 'oui', 'moi', 'toi', 'voici', 'voila',
]);

/** Mots anglais courants : ils bornent l'expansion d'un fragment français. */
const EN_STOP = new Set([
  'the', 'a', 'an', 'of', 'to', 'in', 'is', 'are', 'or', 'and', 'for', 'with',
  'on', 'at', 'it', 'its', 'this', 'that', 'these', 'those', 'use', 'never',
  'not', 'no', 'yes', 'you', 'your', 'say', 'said', 'says', 'means', 'was',
  'were', 'be', 'been', 'by', 'as', 'but', 'if', 'then', 'than', 'so', 'we',
  'they', 'he', 'she', 'i', 'my', 'our', 'their', 'from', 'into', 'out', 'do',
  'does', 'did', 'have', 'has', 'had', 'will', 'would', 'can', 'could',
  'should', 'must', 'may', 'might', 'one', 'word', 'words', 'verb', 'verbs',
  'french', 'english', 'write', 'written', 'add', 'always', 'only', 'when',
  'where', 'why', 'how', 'who', 'whom', 'which', 'while', 'after', 'before',
  'during', 'between', 'both', 'each', 'other', 'another', 'more', 'most',
  'less', 'least', 'also', 'just', 'here', 'there', 'some', 'any', 'all',
  'every', 'very', 'well', 'still', 'then', 'too', 'again', 'often',
  'usually', 'sometimes', 'people', 'someone', 'something', 'nothing',
  'everything', 'means', 'meaning', 'sentence', 'sentences', 'question',
  'questions', 'answer', 'answers',
]);

/** Salutations et mots grammaticaux anglais absents du français. */
const EN_MARKERS = /\b(?:the|is|are|you|your|not|and|of|to|this|that|it|we|they|best|regards|please|thanks?|hello|hi|sorry|dear|mister|mrs?)\b/i;

/** Vrai si un fragment cité est manifestement de l'anglais. */
export function looksEnglish(text: string): boolean {
  return EN_MARKERS.test(text) && !FR_DIACRITIC.test(text);
}

/** Vrai si un fragment (citation, gras, bout de phrase) est du français. */
export function looksFrench(text: string): boolean {
  if (FR_DIACRITIC.test(text)) return true;
  if (FR_ELISION.test(text)) return true;
  const words = text.toLowerCase().match(/[\p{L}’']+/gu) ?? [];
  const hits = words.filter((word) => FR_WORDS.has(word.replace(/[’']/g, '’').normalize('NFC'))).length;
  if (words.length <= 3) return hits >= 1;
  if (words.length > 10) return hits >= 3;
  return hits >= 2;
}

/* ================== Segmentation ================== */

/** Tranche d'un segment lue d'une seule voix : [start, end) dans `text`. */
export interface NarrationPart {
  readonly lang: SpeechLang;
  readonly start: number;
  readonly end: number;
}

export interface NarrationSegment {
  /** Stable au sein de la leçon : `bloc.rang-dans-le-bloc`. */
  readonly id: string;
  /** Index du bloc d'origine, pour surligner le passage lu. */
  readonly blockIndex: number;
  /** Voix de la première partie — les segments mixtes en ont plusieurs. */
  readonly lang: SpeechLang;
  readonly text: string;
  /** Parties contiguës du texte, chacune avec sa voix. */
  readonly parts: readonly NarrationPart[];
}

export interface NarrationSection {
  readonly index: number;
  /** Titre affiché dans le lecteur : celui de la partie en cours. */
  readonly title: string;
  readonly firstBlockIndex: number;
  readonly segments: readonly NarrationSegment[];
  /**
   * Vrai si la section se clôt sur une activité interactive : la lecture
   * s'y arrête et invite l'apprenant à manipuler, la suite se relance
   * par le bouton placé après l'activité.
   */
  readonly endsWithActivity: boolean;
  /** Vrai si la section précédente s'est close sur une activité. */
  readonly resumesAfterActivity: boolean;
}

/** Phrases d'accompagnement, localisées par l'appelant (composant React). */
export interface NarrationPhrases {
  /** « À vous : faites l'activité à l'écran, puis lancez la suite. » */
  readonly activityInvite: string;
  /** « À ne pas dire : » — préfixe des tournures fautives. */
  readonly avoid: string;
}

/** Morceau intermédiaire du découpage, avant assemblage en parties. */
interface Piece {
  readonly lang: SpeechLang;
  readonly text: string;
}

/** Balisage et citations : les frontières naturelles du français enchâssé. */
const MIXED_TOKEN = /\[\[([^\]|]+)\|?([^\]]*)\]\]|\*\*([^*]+)\*\*|«\s*([^»]*?)\s*»|“([^”]*)”/gu;

/** Suite latine dans un texte chinois : lettres, chiffres et liants. */
const ZH_LATIN_RUN = /[\p{Script=Latin}][\p{Script=Latin}0-9’'.,;:!?…\-\s]*[\p{Script=Latin}0-9.!?…]|[\p{Script=Latin}]/gu;

/**
 * Découpe un texte non balisé de langue `locale` en morceaux par voix.
 *
 * Chinois : toute suite latine est du français, sans ambiguïté possible.
 * Anglais : un fragment entier peut être français (formules épistolaires),
 * sinon on isole les mots à diacritiques en les étendant aux voisins qui
 * ne sont pas des mots anglais courants (« à terme », pas « à » tout seul).
 */
function splitPlain(chunk: string, locale: SpeechLang): Piece[] {
  if (chunk.trim().length === 0) return [];
  if (locale === 'zh') {
    const pieces: Piece[] = [];
    let cursor = 0;
    for (const match of chunk.matchAll(ZH_LATIN_RUN)) {
      const index = match.index ?? 0;
      if (index > cursor) pieces.push({ lang: 'zh', text: chunk.slice(cursor, index) });
      pieces.push({ lang: 'fr', text: match[0] });
      cursor = index + match[0].length;
    }
    if (cursor < chunk.length) pieces.push({ lang: 'zh', text: chunk.slice(cursor) });
    return pieces;
  }

  // Anglais. Fragment entièrement français ? Un vrai fragment français ne
  // contient aucun mot-outil anglais — un simple diacritique ne suffit pas,
  // « The phrase à terme is common » resterait sinon tout entier français.
  const bare = (w: string): string => w.toLowerCase().replace(/[^\p{L}’']/gu, '');
  const allWords = chunk.split(/\s+/).map(bare).filter((w) => w.length > 0);
  const enHits = allWords.filter((w) => EN_STOP.has(w)).length;
  if (enHits === 0 && looksFrench(chunk)) return [{ lang: 'fr', text: chunk }];

  // Sinon : isoler les passages à preuve forte (diacritique, élision) en les
  // étendant de façon directionnelle — à gauche seulement sur des mots
  // français avérés (« la », « les »…), à droite sur les mots qui ne sont
  // pas de l'anglais courant, trois mots au plus (« à terme », pas la
  // moitié de la phrase).
  const words = chunk.split(/(\s+)/);
  const isWord = (w: string): boolean => /\p{L}/u.test(w);
  const strong = (w: string): boolean =>
    FR_DIACRITIC.test(w) || FR_ELISION.test(w) || FR_STRONG_WORDS.has(bare(w));
  const french = words.map((w) => (isWord(w) ? (strong(w) ? 2 : 0) : -1));
  for (let i = 0; i < words.length; i += 1) {
    if (french[i] !== 2 || !isWord(words[i] ?? '')) continue;
    for (let j = i - 2; j >= 0; j -= 2) {
      const w = bare(words[j] ?? '');
      if (french[j] === 2 || FR_WORDS.has(w)) french[j] = 2;
      else break;
    }
    // « Bonne soirée, when leaving » : la virgule clôt le passage français.
    if (/[.,;:!?…]\s*$/.test((words[i] ?? '').trim())) continue;
    let reach = 0;
    for (let j = i + 2; j < words.length && reach < 3; j += 2) {
      const w = bare(words[j] ?? '');
      if (french[j] === 2) continue;
      if (w.length === 0 || EN_STOP.has(w)) break;
      french[j] = 2;
      reach += 1;
      // La ponctuation de fin de mot clôt le passage : « à terme, » s'arrête là.
      if (/[.,;:!?…]$/.test((words[j] ?? '').trim())) break;
    }
  }
  // Les blancs suivent la couleur de leurs voisins pour rester contigus.
  for (let i = 0; i < words.length; i += 1) {
    if (french[i] === -1 && french[i - 1] === 2 && french[i + 1] === 2) french[i] = 2;
  }
  const pieces: Piece[] = [];
  let buffer = '';
  let bufferFr = false;
  for (let i = 0; i < words.length; i += 1) {
    const word = words[i] ?? '';
    const isFr: boolean = french[i] === 2;
    if (buffer.length > 0 && isFr !== bufferFr && isWord(word)) {
      pieces.push({ lang: bufferFr ? 'fr' : locale, text: buffer });
      buffer = '';
      bufferFr = isFr;
    }
    buffer += word;
    if (isWord(word)) bufferFr = isFr;
  }
  if (buffer.length > 0) pieces.push({ lang: bufferFr ? 'fr' : locale, text: buffer });
  return pieces;
}

/** Découpe un texte balisé (gras, glossaire, citations) en morceaux par voix. */
function splitMixed(rawText: string, locale: SpeechLang): Piece[] {
  const pieces: Piece[] = [];
  let cursor = 0;
  for (const match of rawText.matchAll(MIXED_TOKEN)) {
    const index = match.index ?? 0;
    if (index > cursor) pieces.push(...splitPlain(rawText.slice(cursor, index), locale));
    const [, glossId, glossLabel, bold, guillemets, quoted] = match;
    if (glossId !== undefined) {
      // En anglais et en chinois, le libellé d'un mot de glossaire est le
      // plus souvent TRADUIT ([[imparfait|imperfect]]) : il suit alors la
      // langue du texte. Il reste français quand il l'est manifestement
      // ([[passe-compose|passé composé]], [[etre|suis]]).
      const label = glossLabel || glossId;
      const norm = (value: string): string =>
        value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z]/g, '');
      const isFrench = looksFrench(label) || norm(label) === norm(glossId);
      if (locale === 'zh' && !isFrench) pieces.push(...splitPlain(label, 'zh'));
      else pieces.push({ lang: isFrench ? 'fr' : locale, text: label });
    } else if (bold !== undefined) {
      // Le gras met en avant tantôt du français, tantôt un mot de la langue
      // d'explication : on tranche au cas par cas.
      if (locale === 'zh') pieces.push(...splitPlain(bold, 'zh'));
      else pieces.push({ lang: looksFrench(bold) ? 'fr' : locale, text: bold });
    } else if (guillemets !== undefined) {
      // « … » est une citation à la française : toujours française.
      pieces.push({ lang: 'fr', text: guillemets });
    } else if (quoted !== undefined) {
      // Dans un cours de français, ce qu'on cite est presque toujours du
      // français : l'anglais doit se prouver, pas l'inverse.
      if (locale === 'zh') pieces.push(...splitPlain(quoted, 'zh'));
      else pieces.push({ lang: looksFrench(quoted) || !looksEnglish(quoted) ? 'fr' : locale, text: quoted });
    }
    cursor = index + match[0].length;
  }
  if (cursor < rawText.length) pieces.push(...splitPlain(rawText.slice(cursor), locale));
  return pieces;
}

/**
 * Nettoie, fusionne et indexe les morceaux en parties finales.
 *
 * Les morceaux contigus de même voix fusionnent — moins de coutures, une
 * prosodie plus naturelle — et la ponctuation orpheline (le point qui suit
 * une citation) est abandonnée : la coudre créerait des « ,, ».
 */
function assembleParts(pieces: readonly Piece[]): { text: string; parts: NarrationPart[] } | null {
  const merged: Array<{ lang: SpeechLang; text: string }> = [];
  for (const piece of pieces) {
    const clean = cleanForSpeech(piece.text);
    if (clean.length === 0) continue;
    if (!/[\p{L}\p{N}]/u.test(clean)) continue;
    const previous = merged[merged.length - 1];
    if (previous && previous.lang === piece.lang) {
      previous.text = `${previous.text} ${clean}`;
      continue;
    }
    merged.push({ lang: piece.lang, text: clean });
  }
  if (merged.length === 0) return null;
  const parts: NarrationPart[] = [];
  let text = '';
  for (const piece of merged) {
    if (text.length > 0) text += ' ';
    const start = text.length;
    text += piece.text;
    parts.push({ lang: piece.lang, start, end: text.length });
  }
  return { text, parts };
}

interface Draft {
  title: string;
  firstBlockIndex: number;
  segments: NarrationSegment[];
  endsWithActivity: boolean;
  resumesAfterActivity: boolean;
}

/**
 * Découpe une leçon en sections et segments narrables.
 *
 * Règles de découpage :
 * - chaque titre (`heading`) ouvre une section ;
 * - chaque activité interactive clôt la section en cours après avoir lu
 *   son titre et l'invitation à la faire — jamais son contenu, qui pour
 *   une dictée serait la réponse ;
 * - les phrases d'exemple, les formes de conjugaison et les tournures
 *   restent lues par la voix française, quelle que soit la langue de
 *   l'interface : c'est le son du français qu'on vient chercher.
 */
export function buildNarration(
  blocks: readonly LessonBlock[],
  locale: Locale,
  firstName: string | undefined,
  lessonTitle: string,
  phrases: NarrationPhrases,
): NarrationSection[] {
  const sections: NarrationSection[] = [];
  let draft: Draft | null = null;
  let currentHeading = lessonTitle;
  let afterActivity = false;

  // `raw` garde le balisage (**gras**, [[glossaire]]) : c'est lui qui signale
  // le français enchâssé. Le nettoyage se fait partie par partie.
  const raw = (value: LocalizedText): string => personalise(pick(value, locale), firstName);
  const spoken = (value: string): string => cleanForSpeech(personalise(value, firstName));
  const localized = (value: LocalizedText): string => spoken(pick(value, locale));

  const ensure = (blockIndex: number): Draft => {
    if (!draft) {
      draft = {
        title: currentHeading,
        firstBlockIndex: blockIndex,
        segments: [],
        endsWithActivity: false,
        resumesAfterActivity: afterActivity,
      };
      afterActivity = false;
    }
    return draft;
  };

  const close = (): void => {
    if (draft && draft.segments.length > 0) {
      sections.push({ index: sections.length, ...draft, segments: draft.segments });
    }
    draft = null;
  };

  const push = (blockIndex: number, lang: SpeechLang, text: string): void => {
    const pieces = lang === 'fr' || locale === 'fr'
      ? [{ lang, text: cleanForSpeech(text) }]
      : splitMixed(text, locale);
    const assembled = assembleParts(pieces);
    if (!assembled) return;
    const target = ensure(blockIndex);
    target.segments.push({
      id: `${blockIndex}.${target.segments.length}`,
      blockIndex,
      lang: assembled.parts[0]?.lang ?? lang,
      text: assembled.text,
      parts: assembled.parts,
    });
  };

  blocks.forEach((block, blockIndex) => {
    switch (block.type) {
      case 'heading': {
        close();
        currentHeading = localized(block.text);
        push(blockIndex, locale, raw(block.text));
        break;
      }

      case 'paragraph':
        push(blockIndex, locale, raw(block.text));
        break;

      case 'list':
        for (const item of block.items) push(blockIndex, locale, raw(item));
        break;

      case 'callout':
        push(blockIndex, locale, raw(block.title));
        push(blockIndex, locale, raw(block.text));
        break;

      case 'figure':
        push(blockIndex, locale, raw(block.caption));
        break;

      case 'table': {
        if (block.caption) push(blockIndex, locale, raw(block.caption));
        for (const row of block.rows) {
          push(blockIndex, locale, row.map((cell) => raw(cell)).join(', '));
        }
        break;
      }

      case 'quote':
        push(blockIndex, locale, raw(block.text));
        push(blockIndex, locale, raw(block.source));
        break;

      case 'keyvalues':
        push(blockIndex, locale, raw(block.title));
        for (const entry of block.entries) {
          push(blockIndex, locale, `${raw(entry.label)}. ${raw(entry.value)}`);
        }
        break;

      case 'examples': {
        push(blockIndex, locale, raw(block.title));
        for (const item of block.items) {
          if (item.incorrect) {
            // La tournure fautive n'est jamais prononcée : l'oreille
            // retiendrait la mélodie de l'erreur. Seule l'explication passe.
            push(blockIndex, locale, `${phrases.avoid} ${raw(item.gloss)}`);
            continue;
          }
          push(blockIndex, 'fr', spoken(item.fr));
          push(blockIndex, locale, raw(item.gloss));
        }
        break;
      }

      case 'conjugation': {
        push(blockIndex, locale, raw(block.title));
        for (const row of block.rows) {
          push(blockIndex, 'fr', `${row.pronoun} : ${row.forms.join(', ')}`);
        }
        if (block.note) push(blockIndex, locale, raw(block.note));
        break;
      }

      case 'interactive': {
        // Titre + invitation, puis silence : l'activité se fait à l'écran.
        push(blockIndex, locale, `${raw(block.title)}. ${raw(block.hint)}`);
        push(blockIndex, locale, phrases.activityInvite);
        const target = ensure(blockIndex);
        target.endsWithActivity = true;
        close();
        afterActivity = true;
        break;
      }
    }
  });

  close();
  return sections;
}

/* ================== Narrateur ================== */

/** Pause entre deux segments : le rythme d'une vraie narration. */
const SEGMENT_GAP_MS = 1000;
/** Couture entre deux voix au sein d'un même segment : à peine un souffle. */
const PART_GAP_MS = 150;
/** Amplitude d'un saut avant/arrière. */
const SEEK_MS = 5000;
/** Débit de secours (caractères/ms) quand la voix n'émet pas de `boundary`. */
const FALLBACK_CHARS_PER_MS = 0.016;

export type NarratorStatus = 'idle' | 'playing' | 'paused';

export interface NarratorSnapshot {
  readonly status: NarratorStatus;
  /** Clé de la leçon chargée, `null` au repos. */
  readonly lessonKey: string | null;
  readonly sectionIndex: number;
  readonly segmentIndex: number;
  readonly sectionCount: number;
  /** Nombre de segments de la section en cours. */
  readonly segmentCount: number;
  readonly sectionTitle: string;
  /** Bloc à surligner dans la page, `null` au repos. */
  readonly blockIndex: number | null;
  readonly rate: SpeechRate;
}

const IDLE: NarratorSnapshot = {
  status: 'idle',
  lessonKey: null,
  sectionIndex: 0,
  segmentIndex: 0,
  sectionCount: 0,
  segmentCount: 0,
  sectionTitle: '',
  blockIndex: null,
  rate: 'normal',
};

type Listener = () => void;

class Narrator {
  private sections: readonly NarrationSection[] = [];
  private lessonKey: string | null = null;
  private status: NarratorStatus = 'idle';
  private section = 0;
  private segment = 0;
  private rate: SpeechRate = 'normal';

  /** Décalage du début de l'utterance courante dans le texte du segment. */
  private sliceBase = 0;
  /** Position (absolue) du dernier mot annoncé par `boundary`. */
  private lastChar = 0;
  /** Chronologie `boundary` de l'utterance courante : [ms, caractère absolu]. */
  private timeline: Array<readonly [number, number]> = [];
  private utterStart = 0;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private gapTimer: number | null = null;
  /** Vrai pendant un cancel() volontaire : ses évènements ne comptent pas. */
  private cancelling = false;

  private snapshot: NarratorSnapshot = IDLE;
  private listeners = new Set<Listener>();

  constructor() {
    // Une lecture ponctuelle (bouton d'exemple, dictée) prend le canal :
    // on se met en pause au lieu de parler par-dessus.
    onExternalSpeak(() => {
      if (this.status === 'playing') this.pause({ external: true });
    });
  }

  /* ---- Abonnement React (useSyncExternalStore) ---- */

  subscribe = (listener: Listener): (() => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  getSnapshot = (): NarratorSnapshot => this.snapshot;

  private emit(): void {
    const active = this.sections[this.section];
    this.snapshot = {
      status: this.status,
      lessonKey: this.lessonKey,
      sectionIndex: this.section,
      segmentIndex: this.segment,
      sectionCount: this.sections.length,
      segmentCount: active?.segments.length ?? 0,
      sectionTitle: active?.title ?? '',
      blockIndex: this.status === 'idle' ? null : (active?.segments[this.segment]?.blockIndex ?? null),
      rate: this.rate,
    };
    for (const listener of this.listeners) listener();
  }

  /* ---- Commandes ---- */

  /** Lance la lecture d'une leçon à partir d'une section. */
  play(lessonKey: string, sections: readonly NarrationSection[], sectionIndex: number): void {
    this.clearGap();
    this.cancelUtterance();
    this.lessonKey = lessonKey;
    this.sections = sections;
    this.section = Math.max(0, Math.min(sectionIndex, sections.length - 1));
    this.segment = 0;
    // La vitesse choisie survit d'une écoute à l'autre : on ne la remet pas à zéro.
    this.status = 'playing';
    this.speakCurrent(0);
  }

  pause(options: { external?: boolean } = {}): void {
    if (this.status !== 'playing') return;
    this.clearGap();
    // On mémorise où on en était, puis on coupe : la reprise resservira
    // le texte à partir de ce caractère.
    if (!options.external) this.cancelUtterance();
    else this.currentUtterance = null; // le canal est déjà pris par l'autre lecture
    this.status = 'paused';
    this.emit();
  }

  resume(): void {
    if (this.status !== 'paused') return;
    this.status = 'playing';
    this.speakCurrent(this.lastChar);
  }

  toggle(): void {
    if (this.status === 'playing') this.pause();
    else if (this.status === 'paused') this.resume();
  }

  stop(): void {
    this.clearGap();
    this.cancelUtterance();
    this.status = 'idle';
    this.lessonKey = null;
    this.sections = [];
    this.section = 0;
    this.segment = 0;
    this.snapshot = { ...IDLE, rate: this.rate };
    for (const listener of this.listeners) listener();
  }

  nextSegment(): void {
    this.jumpTo(this.section, this.segment + 1);
  }

  previousSegment(): void {
    // Convention des lecteurs audio : au-delà de 2 s dans le segment,
    // « précédent » revient d'abord à son début.
    if (this.elapsedMs() > 2000 || this.segment === 0) this.jumpTo(this.section, this.segment);
    else this.jumpTo(this.section, this.segment - 1);
  }

  /** Saute d'environ ±5 secondes, borné au segment en cours. */
  seek(direction: 1 | -1): void {
    const text = this.currentText();
    if (!text) return;
    const elapsed = this.elapsedMs();
    const target = elapsed + direction * SEEK_MS;
    let char: number;
    if (target <= 0) {
      char = 0;
    } else {
      char = this.charAt(target);
    }
    char = Math.max(0, Math.min(char, text.length - 1));
    const wasPlaying = this.status === 'playing';
    this.clearGap();
    this.cancelUtterance();
    this.lastChar = char;
    if (wasPlaying || this.status === 'paused') {
      this.status = 'playing';
      this.speakCurrent(char);
    }
  }

  setRate(rate: SpeechRate): void {
    if (this.rate === rate) return;
    this.rate = rate;
    if (this.status === 'playing') {
      // La vitesse d'une utterance ne se change pas en vol : on reparle
      // depuis le mot en cours à la nouvelle vitesse.
      this.cancelUtterance();
      this.speakCurrent(this.lastChar);
    } else {
      this.emit();
    }
  }

  /* ---- Mécanique interne ---- */

  private jumpTo(sectionIndex: number, segmentIndex: number): void {
    const active = this.sections[sectionIndex];
    if (!active) return;
    this.clearGap();
    this.cancelUtterance();
    if (segmentIndex >= active.segments.length) {
      this.finishSection();
      return;
    }
    this.segment = Math.max(0, segmentIndex);
    if (this.status !== 'idle') {
      this.status = 'playing';
      this.speakCurrent(0);
    }
  }

  private currentText(): string | null {
    return this.sections[this.section]?.segments[this.segment]?.text ?? null;
  }

  private elapsedMs(): number {
    if (!this.currentUtterance) {
      // En pause : estime la position depuis le caractère mémorisé.
      return this.lastChar / (FALLBACK_CHARS_PER_MS * rateValue(this.rate));
    }
    return performance.now() - this.utterStart;
  }

  /** Caractère (absolu) atteint après `ms` millisecondes de lecture. */
  private charAt(ms: number): number {
    // La chronologie des `boundary` donne la correspondance exacte…
    for (let i = this.timeline.length - 1; i >= 0; i -= 1) {
      const entry = this.timeline[i];
      if (entry && entry[0] <= ms) {
        const [t, c] = entry;
        // … qu'on prolonge au débit observé pour les sauts en avant.
        const speed = this.observedSpeed();
        return Math.round(c + (ms - t) * speed);
      }
    }
    return Math.round(ms * this.observedSpeed());
  }

  private observedSpeed(): number {
    const first = this.timeline[0];
    const last = this.timeline[this.timeline.length - 1];
    if (first && last && last[0] - first[0] > 400 && last[1] > first[1]) {
      return (last[1] - first[1]) / (last[0] - first[0]);
    }
    return FALLBACK_CHARS_PER_MS * rateValue(this.rate);
  }

  /**
   * Parle le segment courant à partir d'un caractère donné.
   *
   * Un segment mixte (explication anglaise citant du français) se lit
   * partie par partie : chaque partie a sa voix, et l'enchaînement se
   * fait sur une couture brève — rien à voir avec la vraie pause entre
   * segments. Le découpage au caractère suit une frontière de mot :
   * repartir au milieu d'un mot ferait prononcer un fragment.
   */
  private speakCurrent(fromChar: number): void {
    const engine = typeof window === 'undefined' ? null : window.speechSynthesis;
    const segment = this.sections[this.section]?.segments[this.segment];
    if (!engine || !segment) {
      this.stop();
      return;
    }

    const clamped = Math.max(0, Math.min(fromChar, segment.text.length - 1));
    const part = segment.parts.find((candidate) => clamped < candidate.end) ?? segment.parts[segment.parts.length - 1];
    if (!part) {
      this.advance();
      return;
    }

    const voice = pickVoiceFor(part.lang);
    if (!voice) {
      // Pas de voix pour cette langue : on saute cette partie plutôt que
      // de la faire lire avec le mauvais accent.
      if (part.end < segment.text.length) this.speakCurrent(part.end + 1);
      else this.advance();
      return;
    }

    let start = Math.max(clamped, part.start);
    if (start > part.start) {
      const space = segment.text.lastIndexOf(' ', start);
      start = space > part.start ? space + 1 : part.start;
    }

    this.sliceBase = start;
    this.lastChar = start;
    this.timeline = [];
    this.cancelling = false;

    const utterance = new SpeechSynthesisUtterance(segment.text.slice(start, part.end));
    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.rate = rateValue(this.rate);
    utterance.pitch = 1;

    utterance.addEventListener('boundary', (event) => {
      if (this.currentUtterance !== utterance) return;
      const absolute = this.sliceBase + event.charIndex;
      this.lastChar = absolute;
      this.timeline.push([performance.now() - this.utterStart, absolute]);
    });

    const done = (): void => {
      if (this.currentUtterance !== utterance || this.cancelling) return;
      this.currentUtterance = null;
      if (part.end < segment.text.length) {
        // Partie suivante du même segment : couture courte, pas la pause
        // pleine — c'est la même phrase qui continue avec une autre voix.
        this.lastChar = part.end + 1;
        this.gapTimer = window.setTimeout(() => {
          this.gapTimer = null;
          if (this.status === 'playing') this.speakCurrent(part.end + 1);
        }, PART_GAP_MS);
        return;
      }
      this.advance();
    };
    utterance.addEventListener('end', done);
    utterance.addEventListener('error', done);

    engine.cancel();
    this.currentUtterance = utterance;
    this.utterStart = performance.now();
    engine.speak(utterance);
    this.emit();
  }

  /** Passe au segment suivant après la pause de 1,5 s. */
  private advance(): void {
    const active = this.sections[this.section];
    if (!active) {
      this.stop();
      return;
    }
    if (this.segment + 1 < active.segments.length) {
      this.segment += 1;
      this.lastChar = 0;
      this.emit();
      this.gapTimer = window.setTimeout(() => {
        this.gapTimer = null;
        if (this.status === 'playing') this.speakCurrent(0);
      }, SEGMENT_GAP_MS);
      return;
    }
    this.finishSection();
  }

  private finishSection(): void {
    const active = this.sections[this.section];
    const isLast = this.section + 1 >= this.sections.length;
    if (!active || isLast || active.endsWithActivity) {
      // Fin de leçon, ou activité à faire : la voix se tait, le bouton
      // placé après l'activité relancera la suite.
      this.stop();
      return;
    }
    this.section += 1;
    this.segment = 0;
    this.lastChar = 0;
    this.emit();
    this.gapTimer = window.setTimeout(() => {
      this.gapTimer = null;
      if (this.status === 'playing') this.speakCurrent(0);
    }, SEGMENT_GAP_MS);
  }

  private cancelUtterance(): void {
    if (typeof window === 'undefined') return;
    this.cancelling = true;
    this.currentUtterance = null;
    window.speechSynthesis?.cancel();
    this.cancelling = false;
  }

  private clearGap(): void {
    if (this.gapTimer !== null) {
      window.clearTimeout(this.gapTimer);
      this.gapTimer = null;
    }
  }
}

/** Lecteur unique de l'application : une seule voix à la fois. */
export const narrator = new Narrator();
