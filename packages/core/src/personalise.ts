/* ------------------------------------------------------------------
   Personnalisation du contenu par le prénom de l'apprenant.

   Le prénom remplit deux rôles à la fois :
   - il engage — une leçon qui interpelle le lecteur se suit mieux qu'un
     texte anonyme ;
   - il rend une fuite attribuable, sans avoir à barrer l'écran d'une
     adresse électronique ou d'un numéro de téléphone.

   Le contenu des cours est rédigé avec le jeton `{prenom}`. Il est résolu
   au rendu, dans la langue affichée : la place du prénom n'est pas la même
   en français, en anglais et en chinois, et le jeton laisse chaque version
   le poser où il faut.
   ------------------------------------------------------------------ */

export const FIRST_NAME_TOKEN = '{prenom}';

const TOKEN_RE = /\{prenom\}/g;

/** Repli employé quand aucun prénom n'est connu (démonstration ouverte). */
export const DEFAULT_FIRST_NAME = 'Apprenant';

/**
 * Remplace le jeton par le prénom.
 *
 * Un prénom vide ou uniquement composé d'espaces retombe sur le repli plutôt
 * que de laisser un trou dans la phrase : « Bonjour , » se remarque bien plus
 * qu'un « Bonjour Apprenant, » un peu impersonnel.
 */
export function personalise(text: string, firstName: string | null | undefined): string {
  if (!text.includes('{prenom}')) return text;
  const name = (firstName ?? '').trim() || DEFAULT_FIRST_NAME;
  return text.replace(TOKEN_RE, name);
}

/** Vrai si le texte comporte au moins une occurrence du jeton. */
export function isPersonalised(text: string): boolean {
  return text.includes(FIRST_NAME_TOKEN);
}

/**
 * Choisit une entrée d'un ensemble de variantes, de façon stable pour une
 * clé donnée. Deux visites de la même leçon montrent la même phrase — une
 * rotation aléatoire à chaque rendu donnerait l'impression d'un bug.
 */
export function pickVariant<T>(variants: readonly T[], key: string): T | null {
  if (variants.length === 0) return null;
  let hash = 0x811c9dc5;
  for (let i = 0; i < key.length; i += 1) {
    hash ^= key.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return variants[hash % variants.length] ?? null;
}
