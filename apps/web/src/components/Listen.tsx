import { useEffect, useState } from 'react';
import { canSpeakFrench, onVoicesReady, speakFrench, type SpeechRate } from '../feedback/speech';
import { D, useI18n } from '../i18n';
import { IconTurtle, IconVolume } from './Icons';

/**
 * Bouton d'écoute posé à côté d'un exemple français.
 *
 * Deux vitesses seulement : normale pour entendre la phrase telle qu'on la
 * dit, et lente pour distinguer chaque syllabe. Les curseurs de vitesse
 * fins ne servent à rien pédagogiquement et encombrent l'interface.
 *
 * Le bouton disparaît quand aucune voix française n'est installée : mieux
 * vaut ne rien proposer qu'un bouton silencieux, ou pire, du français lu
 * par une voix anglaise.
 */
export function useFrenchVoice(): boolean {
  const [ready, setReady] = useState(() => canSpeakFrench());
  useEffect(() => {
    if (ready) return;
    return onVoicesReady(() => setReady(canSpeakFrench()));
  }, [ready]);
  return ready;
}

interface ListenProps {
  readonly text: string;
  /** Ajoute le bouton « tortue » qui relit lentement. */
  readonly slow?: boolean;
  readonly label?: string;
}

export function Listen({ text, slow = true, label }: ListenProps) {
  const { l } = useI18n();
  const available = useFrenchVoice();
  const [speaking, setSpeaking] = useState<SpeechRate | null>(null);

  // Une lecture ne doit pas survivre au démontage : quitter une leçon
  // pendant que la voix parle laisserait le son courir sur l'écran suivant.
  useEffect(() => () => setSpeaking(null), []);

  if (!available) return null;

  const say = (rate: SpeechRate): void => {
    setSpeaking(rate);
    speakFrench(text, { rate, onEnd: () => setSpeaking(null) });
  };

  return (
    <span className="listen">
      <button
        type="button"
        className={speaking === 'normal' ? 'listen__btn listen__btn--on' : 'listen__btn'}
        onClick={() => say('normal')}
        aria-label={label ?? l(D.ix.listen)}
        title={label ?? l(D.ix.listen)}
      >
        <IconVolume size={15} />
      </button>
      {slow ? (
        <button
          type="button"
          className={speaking === 'slow' ? 'listen__btn listen__btn--on' : 'listen__btn'}
          onClick={() => say('slow')}
          aria-label={l(D.ix.listenSlow)}
          title={l(D.ix.listenSlow)}
        >
          <IconTurtle size={15} />
        </button>
      ) : null}
    </span>
  );
}
