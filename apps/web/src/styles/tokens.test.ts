import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Un `var(--jeton)` qui pointe vers un nom inexistant, sans valeur de repli,
 * rend la déclaration entière invalide : la propriété retombe sur sa valeur
 * initiale. Un `padding: var(--space-6) var(--space-8) var(--space-7)` où seul
 * `--space-7` manque ne perd pas un côté, il perd les quatre — l'encadré se
 * retrouve sans marge intérieure, sans la moindre erreur en console.
 *
 * Les variables posées depuis le JSX (`style={{ '--ix-index': i }}`) sont
 * légitimement absentes des feuilles de style : on les déclare ici.
 */
const POSEES_EN_JSX = new Set(['--i', '--ix-index', '--ix-count']);

const dossier = join(__dirname);
const feuilles = readdirSync(dossier).filter((f) => f.endsWith('.css'));

const source = feuilles.map((f) => ({ nom: f, texte: readFileSync(join(dossier, f), 'utf8') }));

const definis = new Set<string>();
for (const { texte } of source) {
  for (const m of texte.matchAll(/^\s*(--[\w-]+)\s*:/gm)) definis.add(m[1]!);
}

describe('jetons CSS', () => {
  it('déclare au moins la palette et l’échelle d’espacement', () => {
    expect(definis.size).toBeGreaterThan(40);
    expect(definis.has('--space-8')).toBe(true);
  });

  it('ne référence aucun jeton inexistant sans valeur de repli', () => {
    const orphelins: string[] = [];
    for (const { nom, texte } of source) {
      texte.split('\n').forEach((ligne, i) => {
        for (const m of ligne.matchAll(/var\(\s*(--[\w-]+)\s*([,)])/g)) {
          const jeton = m[1]!;
          const aUnRepli = m[2] === ',';
          if (aUnRepli || definis.has(jeton) || POSEES_EN_JSX.has(jeton)) continue;
          orphelins.push(`${nom}:${i + 1} → ${jeton}  (${ligne.trim().slice(0, 80)})`);
        }
      });
    }
    expect(orphelins).toEqual([]);
  });
});
