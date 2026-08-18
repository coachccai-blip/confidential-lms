import { useCallback } from 'react';
import { useApp } from '../state/app-context';
import { burstConfetti } from './confetti';
import { playSound, type SoundName } from './sounds';

/**
 * Point d'entrée unique du retour sensoriel : un son, éventuellement des
 * confettis. Passer par ce crochet évite que chaque écran ait à savoir si
 * l'utilisateur a coupé le son.
 */
export function useFeedback() {
  const { state } = useApp();
  const enabled = state.soundOn;

  const play = useCallback((name: SoundName) => playSound(name, enabled), [enabled]);

  const celebrate = useCallback(
    (name: SoundName = 'complete', origin?: { x: number; y: number }) => {
      playSound(name, enabled);
      burstConfetti(origin?.x ?? 0.5, origin?.y ?? 0.42);
    },
    [enabled],
  );

  return { play, celebrate, enabled };
}
