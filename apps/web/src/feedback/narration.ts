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

/* ================== Segmentation ================== */

export interface NarrationSegment {
  /** Stable au sein de la leçon : `bloc.rang-dans-le-bloc`. */
  readonly id: string;
  /** Index du bloc d'origine, pour surligner le passage lu. */
  readonly blockIndex: number;
  /** Voix à employer : la langue d'interface, ou le français des exemples. */
  readonly lang: SpeechLang;
  readonly text: string;
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
    const clean = text.trim();
    if (clean.length === 0) return;
    const target = ensure(blockIndex);
    target.segments.push({
      id: `${blockIndex}.${target.segments.length}`,
      blockIndex,
      lang,
      text: clean,
    });
  };

  blocks.forEach((block, blockIndex) => {
    switch (block.type) {
      case 'heading': {
        close();
        currentHeading = localized(block.text);
        push(blockIndex, locale, currentHeading);
        break;
      }

      case 'paragraph':
        push(blockIndex, locale, localized(block.text));
        break;

      case 'list':
        for (const item of block.items) push(blockIndex, locale, localized(item));
        break;

      case 'callout':
        push(blockIndex, locale, localized(block.title));
        push(blockIndex, locale, localized(block.text));
        break;

      case 'figure':
        push(blockIndex, locale, localized(block.caption));
        break;

      case 'table': {
        if (block.caption) push(blockIndex, locale, localized(block.caption));
        for (const row of block.rows) {
          push(blockIndex, locale, row.map((cell) => localized(cell)).join(', '));
        }
        break;
      }

      case 'quote':
        push(blockIndex, locale, localized(block.text));
        push(blockIndex, locale, localized(block.source));
        break;

      case 'keyvalues':
        push(blockIndex, locale, localized(block.title));
        for (const entry of block.entries) {
          push(blockIndex, locale, `${localized(entry.label)}. ${localized(entry.value)}`);
        }
        break;

      case 'examples': {
        push(blockIndex, locale, localized(block.title));
        for (const item of block.items) {
          if (item.incorrect) {
            // La tournure fautive n'est jamais prononcée : l'oreille
            // retiendrait la mélodie de l'erreur. Seule l'explication passe.
            push(blockIndex, locale, `${phrases.avoid} ${localized(item.gloss)}`);
            continue;
          }
          push(blockIndex, 'fr', spoken(item.fr));
          push(blockIndex, locale, localized(item.gloss));
        }
        break;
      }

      case 'conjugation': {
        push(blockIndex, locale, localized(block.title));
        for (const row of block.rows) {
          push(blockIndex, 'fr', `${row.pronoun} : ${row.forms.join(', ')}`);
        }
        if (block.note) push(blockIndex, locale, localized(block.note));
        break;
      }

      case 'interactive': {
        // Titre + invitation, puis silence : l'activité se fait à l'écran.
        push(blockIndex, locale, `${localized(block.title)}. ${localized(block.hint)}`);
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
   * Le découpage au caractère suit une frontière de mot : repartir au
   * milieu d'un mot ferait prononcer un fragment.
   */
  private speakCurrent(fromChar: number): void {
    const engine = typeof window === 'undefined' ? null : window.speechSynthesis;
    const segment = this.sections[this.section]?.segments[this.segment];
    if (!engine || !segment) {
      this.stop();
      return;
    }

    const voice = pickVoiceFor(segment.lang);
    if (!voice) {
      // Pas de voix pour cette langue : on saute le segment plutôt que de
      // le faire lire avec le mauvais accent.
      this.advance();
      return;
    }

    let start = Math.max(0, Math.min(fromChar, segment.text.length - 1));
    if (start > 0) {
      const space = segment.text.lastIndexOf(' ', start);
      start = space === -1 ? 0 : space + 1;
    }

    this.sliceBase = start;
    this.lastChar = start;
    this.timeline = [];
    this.cancelling = false;

    const utterance = new SpeechSynthesisUtterance(segment.text.slice(start));
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
