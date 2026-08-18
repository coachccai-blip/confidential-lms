/** Generateur d'identifiants courts, sans dependance externe. */
export function createId(prefix: string, entropy: () => number = Math.random): string {
  const part = () => Math.floor(entropy() * 0xffffff).toString(36).padStart(4, '0');
  return `${prefix}_${part()}${part()}`;
}

export function shortHash(input: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(36);
}
