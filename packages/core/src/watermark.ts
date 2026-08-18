/**
 * Filigranes (brief section 4.3).
 *
 * Deux mecanismes complementaires :
 *  - un filigrane VISIBLE, dont la position se deplace toutes les 30 s afin
 *    d'empecher un recadrage fixe (calcul de position ici, rendu cote UI) ;
 *  - un filigrane INVISIBLE, injecte dans le texte sous forme de caracteres
 *    de largeur nulle encodant l'identifiant de l'apprenant, afin d'identifier
 *    la source d'un copier-coller ou d'une retranscription.
 *
 * Limite honnete : un attaquant informe peut supprimer les caracteres de
 * largeur nulle (normalisation, retranscription manuelle, OCR d'une photo).
 * Le filigrane invisible vise le partage opportuniste, pas l'adversaire expert.
 */

/**
 * Alphabet de la charge utile : quatre caracteres de largeur nulle codant
 * chacun deux bits, plus un marqueur de delimitation. Cette base 4 divise
 * par deux le nombre de caracteres injectes par rapport a un codage binaire.
 */
export const ZW_SYMBOLS = ['\u200B', '\u200C', '\u200D', '\uFEFF'] as const;
/** Conserve pour compatibilite : symbole du couple de bits 00. */
export const ZW_ZERO = ZW_SYMBOLS[0];
/** Conserve pour compatibilite : symbole du couple de bits 01. */
export const ZW_ONE = ZW_SYMBOLS[1];
/** Delimiteur de charge utile. */
export const ZW_MARK = '\u2060'; // WORD JOINER

const ZW_ALL = /[\u200B-\u200F\u2060-\u2064\uFEFF]/g;
const SYMBOL_INDEX = new Map<string, number>(ZW_SYMBOLS.map((symbol, index) => [symbol, index]));

/** Retire tous les caracteres de largeur nulle d'une chaine. */
export function stripInvisible(text: string): string {
  return text.replace(ZW_ALL, '');
}

/** Encode une charge utile texte en une sequence de caracteres invisibles. */
export function encodeInvisible(payload: string): string {
  const bytes = new TextEncoder().encode(payload);
  let out = ZW_MARK;
  for (const byte of bytes) {
    // Quatre paires de bits par octet, du poids fort au poids faible.
    for (let shift = 6; shift >= 0; shift -= 2) {
      out += ZW_SYMBOLS[(byte >> shift) & 0b11];
    }
  }
  return out + ZW_MARK;
}

/**
 * Decode la premiere charge utile invisible valide trouvee dans un texte.
 *
 * Le balayage teste chaque segment delimite par un marqueur : un extrait
 * copie au milieu d'une charge utile reste ainsi decodable grace a la
 * charge utile suivante.
 */
export function decodeInvisible(text: string): string | null {
  const marks: number[] = [];
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === ZW_MARK) marks.push(i);
  }

  for (let m = 0; m < marks.length - 1; m += 1) {
    const from = marks[m] as number;
    const to = marks[m + 1] as number;
    const decoded = decodeSegment(text.slice(from + 1, to));
    if (decoded !== null) return decoded;
  }
  return null;
}

function decodeSegment(body: string): string | null {
  const pairs: number[] = [];
  for (const char of body) {
    const index = SYMBOL_INDEX.get(char);
    // Tout autre caractere (espace, lettre) est ignore : la charge utile
    // survit a une reinsertion intercalee dans du texte visible.
    if (index !== undefined) pairs.push(index);
  }
  if (pairs.length < 4 || pairs.length % 4 !== 0) return null;

  const bytes = new Uint8Array(pairs.length / 4);
  for (let i = 0; i < bytes.length; i += 1) {
    bytes[i] =
      ((pairs[i * 4] as number) << 6) |
      ((pairs[i * 4 + 1] as number) << 4) |
      ((pairs[i * 4 + 2] as number) << 2) |
      (pairs[i * 4 + 3] as number);
  }
  try {
    const value = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    // Une charge utile valide ne contient jamais de caractere de controle.
    return /[\u0000-\u001F]/.test(value) ? null : value;
  } catch {
    return null;
  }
}

export interface FingerprintInput {
  readonly userId: string;
  readonly deviceId: string;
  /** Horodatage ISO du service du contenu. */
  readonly issuedAt: string;
}

/** Version du format d'empreinte, pour rester decodable apres evolution. */
export const FINGERPRINT_VERSION = '1';

function compactId(id: string): string {
  return id.replace(/^[a-z]+_/, '');
}

/**
 * Construit la charge utile de tracabilite embarquee dans chaque texte.
 *
 * Le format est volontairement compact — quatre champs separes par `~`,
 * horodatage a l'heure code en base 36 — car chaque caractere de la charge
 * utile coute quatre caracteres invisibles dans le document servi.
 */
export function buildFingerprint(input: FingerprintInput): string {
  const parsed = Date.parse(input.issuedAt);
  const hour = Number.isNaN(parsed) ? '0' : Math.floor(parsed / 3_600_000).toString(36);
  return [FINGERPRINT_VERSION, compactId(input.userId), compactId(input.deviceId), hour].join('~');
}

export interface ParsedFingerprint {
  readonly version: string;
  readonly userRef: string;
  readonly deviceRef: string;
  /** Heure de consultation, arrondie a l'heure. */
  readonly at: Date | null;
}

/** Relit une empreinte extraite d'un contenu fuite. */
export function parseFingerprint(payload: string): ParsedFingerprint | null {
  const parts = payload.split('~');
  if (parts.length !== 4) return null;
  const [version, userRef, deviceRef, hourCode] = parts as [string, string, string, string];
  if (version !== FINGERPRINT_VERSION || userRef.length === 0 || deviceRef.length === 0) return null;
  const hours = Number.parseInt(hourCode, 36);
  return {
    version,
    userRef,
    deviceRef,
    at: Number.isNaN(hours) ? null : new Date(hours * 3_600_000),
  };
}

export interface WatermarkOptions {
  /** Nombre de mots entre deux injections de la charge utile. */
  readonly everyWords?: number;
}

/**
 * Injecte la charge utile dans un texte, de facon repetee, pour qu'un extrait
 * copie de quelques dizaines de mots contienne toujours une empreinte complete.
 */
export function watermarkText(
  text: string,
  fingerprint: string,
  options: WatermarkOptions = {},
): string {
  const everyWords = Math.max(4, options.everyWords ?? 12);
  const payload = encodeInvisible(fingerprint);
  const words = stripInvisible(text).split(' ');
  const out: string[] = [];

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i] ?? '';
    const isLast = i === words.length - 1;
    // La charge utile est collee au mot : le texte visible reste identique
    // caractere pour caractere une fois les invisibles retires.
    out.push(!isLast && (i + 1) % everyWords === 0 ? word + payload : word);
  }
  // Toujours au moins une empreinte, meme pour un texte tres court.
  const joined = out.join(' ');
  return joined.includes(payload) ? joined : joined + payload;
}

/** Extrait l'empreinte d'un texte filigrane (verification cote admin). */
export function readFingerprint(text: string): string | null {
  return decodeInvisible(text);
}
