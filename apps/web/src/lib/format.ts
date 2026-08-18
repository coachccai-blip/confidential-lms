/** Formate une durée en minutes façon « 2 h 55 » ou « 45 min ». */
export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours} h` : `${hours} h ${String(rest).padStart(2, '0')}`;
}

export const LEVEL_LABEL = {
  debutant: 'débutant',
  intermediaire: 'intermédiaire',
  avance: 'avancé',
} as const;

/** Formate un nombre à la française (virgule décimale). */
export function formatNumber(value: number): string {
  return value.toLocaleString('fr-FR', { maximumFractionDigits: 2 });
}
