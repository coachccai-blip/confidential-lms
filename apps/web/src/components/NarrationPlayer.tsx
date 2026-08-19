import { useEffect, useState, useSyncExternalStore } from 'react';
import { canSpeak, onVoicesReady } from '../feedback/speech';
import { narrator, type NarrationSection, type NarratorSnapshot } from '../feedback/narration';
import { D, useI18n } from '../i18n';
import {
  IconChevronLeft,
  IconChevronRight,
  IconPause,
  IconPlay,
  IconTurtle,
  IconVolume,
  IconX,
} from './Icons';

/** État du narrateur, réactif : chaque commande du lecteur le fait avancer. */
export function useNarrator(): NarratorSnapshot {
  return useSyncExternalStore(narrator.subscribe, narrator.getSnapshot);
}

/**
 * Vrai quand le navigateur a une voix pour la langue d'interface — la
 * condition d'existence de toute l'interface de narration. Les segments
 * français exigent en plus une voix française, mais le narrateur les
 * saute proprement s'il le faut.
 */
export function useNarrationVoice(): boolean {
  const { locale } = useI18n();
  const [ready, setReady] = useState(() => canSpeak(locale));
  useEffect(() => {
    setReady(canSpeak(locale));
    return onVoicesReady(() => setReady(canSpeak(locale)));
  }, [locale]);
  return ready;
}

interface ChipProps {
  readonly lessonKey: string;
  readonly sections: readonly NarrationSection[];
  readonly sectionIndex: number;
}

/**
 * Bouton d'écoute posé au début d'une section. Celui qui suit une
 * activité se lit « Écouter la suite » : c'est lui qui relance la
 * narration interrompue le temps de la manipulation.
 */
export function NarrationChip({ lessonKey, sections, sectionIndex }: ChipProps) {
  const { l } = useI18n();
  const snapshot = useNarrator();
  const available = useNarrationVoice();
  const section = sections[sectionIndex];
  if (!available || !section) return null;

  const isCurrent = snapshot.lessonKey === lessonKey && snapshot.sectionIndex === sectionIndex;
  const playingHere = isCurrent && snapshot.status === 'playing';
  const label = section.resumesAfterActivity ? l(D.narration.listenRest) : l(D.narration.listenSection);

  return (
    <div className="nchip-row">
      <button
        type="button"
        className={playingHere ? 'nchip nchip--on' : 'nchip'}
        onClick={() => {
          if (playingHere) narrator.pause();
          else if (isCurrent && snapshot.status === 'paused') narrator.resume();
          else narrator.play(lessonKey, sections, sectionIndex);
        }}
      >
        {playingHere ? <IconPause size={14} /> : <IconVolume size={14} />}
        <span>{label}</span>
        <span className="nchip__title">{section.title}</span>
      </button>
    </div>
  );
}

interface PlayerProps {
  readonly lessonKey: string;
}

/**
 * Barre de lecture flottante. N'apparaît que pendant une narration de la
 * leçon affichée, et disparaît dès l'arrêt.
 *
 * `speechSynthesis` ne sachant pas se déplacer dans un flux, les boutons
 * ±5 s sont reconstruits à partir des frontières de mots : le saut est
 * précis au mot près et reste borné au segment en cours.
 */
export function NarrationPlayer({ lessonKey }: PlayerProps) {
  const { l } = useI18n();
  const snapshot = useNarrator();

  if (snapshot.status === 'idle' || snapshot.lessonKey !== lessonKey) return null;

  const playing = snapshot.status === 'playing';

  // Trois vitesses en cycle : normale → lente (comprendre) → rapide (réviser).
  const SPEED_CYCLE = { normal: 'slow', slow: 'fast', fast: 'normal' } as const;
  const speedName =
    snapshot.rate === 'slow'
      ? l(D.narration.speedSlow)
      : snapshot.rate === 'fast'
        ? l(D.narration.speedFast)
        : l(D.narration.speedNormal);
  const speedLabel = `${l(D.narration.speed)} : ${speedName}`;

  return (
    <div className="nplayer" role="region" aria-label={l(D.narration.nowPlaying)}>
      <div className="nplayer__meta">
        <span className="nplayer__title">{snapshot.sectionTitle}</span>
        <span className="nplayer__pos">
          {l(D.narration.sectionOf(snapshot.sectionIndex + 1, snapshot.sectionCount))}
          {' · '}
          {l(D.narration.segmentOf(snapshot.segmentIndex + 1, snapshot.segmentCount))}
        </span>
      </div>

      <div className="nplayer__controls">
        <button
          type="button"
          className="nplayer__btn"
          onClick={() => narrator.previousSegment()}
          aria-label={l(D.narration.previousSegment)}
          title={l(D.narration.previousSegment)}
        >
          <IconChevronLeft size={16} />
        </button>

        <button
          type="button"
          className="nplayer__btn nplayer__btn--seek"
          onClick={() => narrator.seek(-1)}
          aria-label={l(D.narration.back5)}
          title={l(D.narration.back5)}
        >
          −5s
        </button>

        <button
          type="button"
          className="nplayer__btn nplayer__btn--main"
          onClick={() => narrator.toggle()}
          aria-label={playing ? l(D.narration.pause) : l(D.narration.resume)}
          title={playing ? l(D.narration.pause) : l(D.narration.resume)}
        >
          {playing ? <IconPause size={18} /> : <IconPlay size={18} />}
        </button>

        <button
          type="button"
          className="nplayer__btn nplayer__btn--seek"
          onClick={() => narrator.seek(1)}
          aria-label={l(D.narration.forward5)}
          title={l(D.narration.forward5)}
        >
          +5s
        </button>

        <button
          type="button"
          className="nplayer__btn"
          onClick={() => narrator.nextSegment()}
          aria-label={l(D.narration.nextSegment)}
          title={l(D.narration.nextSegment)}
        >
          <IconChevronRight size={16} />
        </button>

        <button
          type="button"
          className={snapshot.rate === 'normal' ? 'nplayer__btn nplayer__btn--seek' : 'nplayer__btn nplayer__btn--seek nplayer__btn--on'}
          onClick={() => narrator.setRate(SPEED_CYCLE[snapshot.rate])}
          aria-label={speedLabel}
          title={speedLabel}
        >
          {snapshot.rate === 'slow' ? <IconTurtle size={16} /> : snapshot.rate === 'fast' ? '×1,5' : '×1'}
        </button>

        <button
          type="button"
          className="nplayer__btn nplayer__btn--stop"
          onClick={() => narrator.stop()}
          aria-label={l(D.narration.stop)}
          title={l(D.narration.stop)}
        >
          <IconX size={16} />
        </button>
      </div>
    </div>
  );
}
