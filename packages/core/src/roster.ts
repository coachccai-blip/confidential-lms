/* ------------------------------------------------------------------
   Gestion de cohorte : comptes apprenants, invitations, remontées de
   progression.

   AVERTISSEMENT DE SÉCURITÉ — à lire avant de s'appuyer sur ce module.

   L'application est servie en pages statiques : il n'y a aucun serveur
   pour vérifier un mot de passe ni pour stocker une liste d'apprenants.
   Tout ce qui suit s'exécute donc dans le navigateur de l'administrateur.

   - Le mot de passe administrateur est un **verrou d'affichage**, pas une
     authentification. Il empêche un regard par-dessus l'épaule d'ouvrir
     l'espace de pilotage ; il n'empêche pas quelqu'un de lire le stockage
     local ou le code de la page. Une vraie authentification suppose le
     back-end Fastify décrit dans le brief (Argon2id + jetons signés).
   - Le comparatif se fait sur un condensé SHA-256 salé, calculé avec
     `crypto.subtle`. Le condensé n'est jamais réversible, mais il est
     lisible dans le stockage local, donc attaquable hors ligne.
   - Les comptes créés ici vivent dans ce navigateur. Ils atteignent
     l'apprenant par une **invitation** qu'il colle sur son appareil, et
     reviennent par une **remontée de progression** qu'il réexporte.
   - Le mot de passe **apprenant** relève de la même logique : son condensé
     voyage dans l'invitation et la vérification se fait sur l'appareil de
     l'apprenant. Il empêche un camarade d'ouvrir son compte avec sa seule
     adresse ; il ne protège pas le contenu contre son titulaire.
   ------------------------------------------------------------------ */

import { createId } from './ids';
import type { CefrLevel } from './types';

/** Compte apprenant créé par l'administrateur. */
export interface LearnerAccount {
  readonly id: string;
  /** Code lisible communiqué à l'apprenant : sert de clé de rapprochement. */
  readonly code: string;
  /**
   * Prénom, obligatoire : il est repris dans le corps des leçons pour
   * interpeller l'apprenant, et c'est lui qui rend une fuite attribuable.
   */
  readonly firstName: string;
  /** Nom de famille, facultatif : sert au repérage dans la liste, pas au contenu. */
  readonly lastName: string;
  readonly email: string;
  /** Condensé du mot de passe choisi par l'enseignant, et son sel. */
  readonly passwordHash: string;
  readonly passwordSalt: string;
  /** Niveau visé, ou `null` si l'apprenant part de zéro sans cible. */
  readonly targetLevel: CefrLevel | null;
  readonly note: string;
  readonly createdAt: string;
  readonly archivedAt: string | null;
}

/** Nom complet affiché dans la liste de l'enseignant. */
export function fullName(learner: Pick<LearnerAccount, 'firstName' | 'lastName'>): string {
  return `${learner.firstName} ${learner.lastName}`.trim();
}

/** Instantané de progression exporté par un apprenant, importé par l'admin. */
export interface LearnerReport {
  readonly kind: 'lumiere.report.v1';
  readonly code: string;
  readonly firstName: string;
  readonly email: string;
  readonly exportedAt: string;
  /** Étapes terminées, identifiant de leçon → date de fin. */
  readonly completedLessons: Readonly<Record<string, string>>;
  /** Meilleur score par quiz, en pourcentage. */
  readonly quizScores: Readonly<Record<string, number>>;
  readonly deviceCount: number;
  readonly riskScore: number;
}

/** Charge utile d'invitation, encodée puis transmise à l'apprenant. */
export interface InvitePayload {
  readonly kind: 'lumiere.invite.v2';
  readonly code: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  /**
   * Le condensé du mot de passe voyage avec l'invitation : c'est la seule
   * façon, sans serveur, de vérifier la saisie sur l'appareil de l'apprenant.
   * Il est salé, donc illisible ; il reste néanmoins attaquable hors ligne.
   */
  readonly passwordHash: string;
  readonly passwordSalt: string;
  readonly targetLevel: CefrLevel | null;
}

/* ------------------------------ Codes ------------------------------ */

/** Alphabet sans O/0/I/1 : un code se relit et se dicte sans ambiguïté. */
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

/**
 * Code d'inscription de la forme `LUM-4K7P-2XQF`. Douze caractères
 * significatifs, soit environ 60 bits : suffisant pour éviter toute
 * collision dans une cohorte, insuffisant pour tenir lieu de secret.
 */
export function createEnrolmentCode(random: () => number = Math.random): string {
  const pick = () => CODE_ALPHABET[Math.floor(random() * CODE_ALPHABET.length)] ?? 'A';
  const group = (size: number) => Array.from({ length: size }, pick).join('');
  return `LUM-${group(4)}-${group(4)}`;
}

/** Normalise un code saisi à la main : casse, espaces, tirets manquants. */
export function normalizeCode(input: string): string {
  const cleaned = input.toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (!cleaned.startsWith('LUM')) return cleaned;
  const body = cleaned.slice(3);
  if (body.length !== 8) return cleaned;
  return `LUM-${body.slice(0, 4)}-${body.slice(4)}`;
}

/* ---------------------------- Comptes ------------------------------ */

export interface CreateLearnerInput {
  readonly firstName: string;
  readonly lastName?: string;
  readonly email: string;
  readonly password: string;
  readonly targetLevel?: CefrLevel | null;
  readonly note?: string;
}

export type CreateLearnerOutcome =
  | { readonly ok: true; readonly learner: LearnerAccount }
  | {
      readonly ok: false;
      readonly reason: 'name-required' | 'email-invalid' | 'email-duplicate' | 'password-too-short';
    };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Longueur minimale du mot de passe d'un apprenant. */
export const MIN_LEARNER_PASSWORD_LENGTH = 8;

/**
 * Valide les champs avant création. Séparé de `createLearner` parce que le
 * calcul du condensé est asynchrone : l'appelant veut connaître l'erreur de
 * saisie sans avoir à attendre `crypto.subtle`.
 */
export function validateLearnerInput(
  existing: readonly LearnerAccount[],
  input: CreateLearnerInput,
): Exclude<CreateLearnerOutcome, { ok: true }> | null {
  const firstName = input.firstName.trim();
  const email = input.email.trim().toLowerCase();

  if (firstName.length === 0) return { ok: false, reason: 'name-required' };
  if (!EMAIL_RE.test(email)) return { ok: false, reason: 'email-invalid' };
  if (input.password.length < MIN_LEARNER_PASSWORD_LENGTH) return { ok: false, reason: 'password-too-short' };
  if (existing.some((learner) => learner.email === email && learner.archivedAt === null)) {
    return { ok: false, reason: 'email-duplicate' };
  }
  return null;
}

export async function createLearner(
  existing: readonly LearnerAccount[],
  input: CreateLearnerInput,
  now: string,
  random: () => number = Math.random,
): Promise<CreateLearnerOutcome> {
  const invalid = validateLearnerInput(existing, input);
  if (invalid) return invalid;

  let code = createEnrolmentCode(random);
  let guard = 0;
  while (existing.some((learner) => learner.code === code) && guard < 50) {
    code = createEnrolmentCode(random);
    guard += 1;
  }

  const passwordSalt = createSalt(random);

  return {
    ok: true,
    learner: {
      id: createId('lrn', random),
      code,
      firstName: input.firstName.trim(),
      lastName: (input.lastName ?? '').trim(),
      email: input.email.trim().toLowerCase(),
      passwordHash: await hashPassword(input.password, passwordSalt),
      passwordSalt,
      targetLevel: input.targetLevel ?? null,
      note: (input.note ?? '').trim(),
      createdAt: now,
      archivedAt: null,
    },
  };
}

/**
 * Propose un mot de passe lisible : deux mots courants, un nombre, un tiret.
 * L'enseignant le dicte sans ambiguïté et l'apprenant le retient.
 */
const PASSWORD_WORDS = [
  'azur', 'brise', 'cedre', 'delta', 'ecume', 'foret', 'givre', 'hublot',
  'ilot', 'jardin', 'lagune', 'maree', 'nuage', 'olive', 'prisme', 'quartz',
  'rivage', 'sable', 'tresse', 'vallon',
] as const;

export function suggestPassword(random: () => number = Math.random): string {
  const pick = () => PASSWORD_WORDS[Math.floor(random() * PASSWORD_WORDS.length)] ?? 'azur';
  const number = 10 + Math.floor(random() * 90);
  return `${pick()}-${pick()}-${number}`;
}

export function archiveLearner(
  learners: readonly LearnerAccount[],
  learnerId: string,
  now: string,
): readonly LearnerAccount[] {
  return learners.map((learner) =>
    learner.id === learnerId ? { ...learner, archivedAt: learner.archivedAt ?? now } : learner,
  );
}

export function restoreLearner(
  learners: readonly LearnerAccount[],
  learnerId: string,
): readonly LearnerAccount[] {
  return learners.map((learner) => (learner.id === learnerId ? { ...learner, archivedAt: null } : learner));
}

/* --------------------------- Invitations --------------------------- */

/** Base64url : transportable dans un courriel ou un message sans échappement. */
function toBase64Url(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  const base64 = typeof btoa === 'function' ? btoa(binary) : Buffer.from(bytes).toString('base64');
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(encoded: string): string | null {
  try {
    const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
    const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
    if (typeof atob === 'function') {
      const binary = atob(padded);
      const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
      return new TextDecoder().decode(bytes);
    }
    return Buffer.from(padded, 'base64').toString('utf8');
  } catch {
    return null;
  }
}

/** Encode un compte en invitation collable par l'apprenant. */
export function encodeInvite(learner: LearnerAccount): string {
  const payload: InvitePayload = {
    kind: 'lumiere.invite.v2',
    code: learner.code,
    firstName: learner.firstName,
    lastName: learner.lastName,
    email: learner.email,
    passwordHash: learner.passwordHash,
    passwordSalt: learner.passwordSalt,
    targetLevel: learner.targetLevel,
  };
  return toBase64Url(JSON.stringify(payload));
}

/** Relit une invitation. Retourne `null` si elle est illisible ou tronquée. */
export function decodeInvite(encoded: string): InvitePayload | null {
  const json = fromBase64Url(encoded.trim());
  if (json === null) return null;
  try {
    const parsed: unknown = JSON.parse(json);
    if (typeof parsed !== 'object' || parsed === null) return null;
    const record = parsed as Record<string, unknown>;
    if (record['kind'] !== 'lumiere.invite.v2') return null;
    const code = record['code'];
    const firstName = record['firstName'];
    const email = record['email'];
    const passwordHash = record['passwordHash'];
    const passwordSalt = record['passwordSalt'];
    const level = record['targetLevel'];
    if (
      typeof code !== 'string' ||
      typeof firstName !== 'string' ||
      typeof email !== 'string' ||
      typeof passwordHash !== 'string' ||
      typeof passwordSalt !== 'string'
    ) {
      return null;
    }
    return {
      kind: 'lumiere.invite.v2',
      code,
      firstName,
      lastName: typeof record['lastName'] === 'string' ? record['lastName'] : '',
      email,
      passwordHash,
      passwordSalt,
      targetLevel: typeof level === 'string' ? (level as CefrLevel) : null,
    };
  } catch {
    return null;
  }
}

/* ------------------------- Remontées de suivi ----------------------- */

export function encodeReport(report: LearnerReport): string {
  return toBase64Url(JSON.stringify(report));
}

export function decodeReport(encoded: string): LearnerReport | null {
  const trimmed = encoded.trim();
  // On accepte aussi bien le JSON brut que la forme encodée.
  const json = trimmed.startsWith('{') ? trimmed : fromBase64Url(trimmed);
  if (json === null) return null;
  try {
    const parsed: unknown = JSON.parse(json);
    if (typeof parsed !== 'object' || parsed === null) return null;
    const record = parsed as Record<string, unknown>;
    if (record['kind'] !== 'lumiere.report.v1') return null;
    const code = record['code'];
    if (typeof code !== 'string') return null;
    return {
      kind: 'lumiere.report.v1',
      code,
      firstName: typeof record['firstName'] === 'string' ? record['firstName'] : '',
      email: typeof record['email'] === 'string' ? record['email'] : '',
      exportedAt: typeof record['exportedAt'] === 'string' ? record['exportedAt'] : '',
      completedLessons: asStringMap(record['completedLessons']),
      quizScores: asNumberMap(record['quizScores']),
      deviceCount: typeof record['deviceCount'] === 'number' ? record['deviceCount'] : 0,
      riskScore: typeof record['riskScore'] === 'number' ? record['riskScore'] : 0,
    };
  } catch {
    return null;
  }
}

function asStringMap(value: unknown): Readonly<Record<string, string>> {
  if (typeof value !== 'object' || value === null) return {};
  const out: Record<string, string> = {};
  for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
    if (typeof entry === 'string') out[key] = entry;
  }
  return out;
}

function asNumberMap(value: unknown): Readonly<Record<string, number>> {
  if (typeof value !== 'object' || value === null) return {};
  const out: Record<string, number> = {};
  for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
    if (typeof entry === 'number' && Number.isFinite(entry)) out[key] = entry;
  }
  return out;
}

/**
 * Fusionne une remontée dans la liste existante : une seule ligne par code,
 * on conserve la plus récente. Une remontée antérieure à celle déjà connue
 * est ignorée, pour qu'un import en double ne fasse jamais reculer le suivi.
 */
export function mergeReport(
  reports: readonly LearnerReport[],
  incoming: LearnerReport,
): readonly LearnerReport[] {
  const previous = reports.find((report) => report.code === incoming.code);
  if (!previous) return [...reports, incoming];
  if (previous.exportedAt > incoming.exportedAt) return reports;
  return reports.map((report) => (report.code === incoming.code ? incoming : report));
}

/* ------------------------------ Suivi ------------------------------- */

export interface LearnerRow {
  readonly learner: LearnerAccount;
  readonly report: LearnerReport | null;
  /** Pourcentage d'étapes terminées sur l'ensemble du catalogue. */
  readonly progress: number;
  /** Moyenne des meilleurs scores de quiz, ou `null` si aucun quiz passé. */
  readonly quizAverage: number | null;
  readonly quizzesPassed: number;
  readonly lastActivity: string | null;
}

export function buildRoster(
  learners: readonly LearnerAccount[],
  reports: readonly LearnerReport[],
  totalLessons: number,
  passingScore = 70,
): readonly LearnerRow[] {
  return learners.map((learner) => {
    const report = reports.find((entry) => entry.code === learner.code) ?? null;
    if (!report) {
      return { learner, report: null, progress: 0, quizAverage: null, quizzesPassed: 0, lastActivity: null };
    }

    const done = Object.keys(report.completedLessons).length;
    const scores = Object.values(report.quizScores);
    const dates = Object.values(report.completedLessons).filter((date) => date.length > 0);

    return {
      learner,
      report,
      progress: totalLessons === 0 ? 0 : Math.round((done / totalLessons) * 100),
      quizAverage:
        scores.length === 0 ? null : Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length),
      quizzesPassed: scores.filter((score) => score >= passingScore).length,
      lastActivity: dates.length === 0 ? report.exportedAt || null : dates.sort().at(-1) ?? null,
    };
  });
}

/* ---------------------- Verrou administrateur ----------------------- */

export interface AdminLock {
  /** Condensé SHA-256 de `salt + mot de passe`, en hexadécimal. */
  readonly hash: string;
  readonly salt: string;
  readonly updatedAt: string;
}

/** Mot de passe livré avec la démonstration, à changer dès la première ouverture. */
export const DEFAULT_ADMIN_PASSWORD = 'lumiere-admin';

export const MIN_ADMIN_PASSWORD_LENGTH = 10;

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Condensé salé du mot de passe. Une fonction de dérivation lente (Argon2id,
 * scrypt) serait requise côté serveur ; ici, la vérification est locale et
 * le condensé lui-même est lisible, donc le renforcement n'apporterait
 * qu'une fausse assurance.
 */
export async function hashPassword(password: string, salt: string): Promise<string> {
  const data = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return toHex(digest);
}

export function createSalt(random: () => number = Math.random): string {
  return Array.from({ length: 16 }, () => Math.floor(random() * 16).toString(16)).join('');
}

export async function createAdminLock(
  password: string,
  now: string,
  random: () => number = Math.random,
): Promise<AdminLock> {
  const salt = createSalt(random);
  return { hash: await hashPassword(password, salt), salt, updatedAt: now };
}

export async function verifyAdminPassword(lock: AdminLock, password: string): Promise<boolean> {
  const candidate = await hashPassword(password, lock.salt);
  return timingSafeEqual(candidate, lock.hash);
}

/** Comparaison à temps constant : sans utilité réelle ici, mais sans coût. */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/* --------------------- Connexion d'un apprenant --------------------- */

/**
 * Ce qu'il faut pour vérifier une connexion : soit le compte présent dans ce
 * navigateur (l'enseignant se connecte chez lui), soit l'invitation que
 * l'apprenant vient de coller (premier accès sur son appareil).
 */
export interface LearnerCredentials {
  readonly code: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly passwordHash: string;
  readonly passwordSalt: string;
  readonly targetLevel: CefrLevel | null;
}

export function credentialsOfLearner(learner: LearnerAccount): LearnerCredentials {
  return {
    code: learner.code,
    firstName: learner.firstName,
    lastName: learner.lastName,
    email: learner.email,
    passwordHash: learner.passwordHash,
    passwordSalt: learner.passwordSalt,
    targetLevel: learner.targetLevel,
  };
}

export function credentialsOfInvite(invite: InvitePayload): LearnerCredentials {
  return {
    code: invite.code,
    firstName: invite.firstName,
    lastName: invite.lastName,
    email: invite.email,
    passwordHash: invite.passwordHash,
    passwordSalt: invite.passwordSalt,
    targetLevel: invite.targetLevel,
  };
}

/** Retrouve un compte actif par son adresse, insensible à la casse. */
export function findLearnerByEmail(
  learners: readonly LearnerAccount[],
  email: string,
): LearnerAccount | null {
  const needle = email.trim().toLowerCase();
  return learners.find((learner) => learner.email === needle && learner.archivedAt === null) ?? null;
}

export async function verifyLearnerPassword(
  credentials: LearnerCredentials,
  password: string,
): Promise<boolean> {
  const candidate = await hashPassword(password, credentials.passwordSalt);
  return timingSafeEqual(candidate, credentials.passwordHash);
}

export type PasswordStrength = 'too-short' | 'weak' | 'fair' | 'strong';

export function ratePassword(password: string): PasswordStrength {
  if (password.length < MIN_ADMIN_PASSWORD_LENGTH) return 'too-short';
  const families = [/[a-z]/, /[A-Z]/, /\d/, /[^\w\s]/].filter((pattern) => pattern.test(password)).length;
  if (password.length >= 16 && families >= 3) return 'strong';
  if (families >= 3 || password.length >= 14) return 'fair';
  return 'weak';
}
