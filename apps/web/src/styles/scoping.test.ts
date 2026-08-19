import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * `.prose` enveloppe tout le fil de la leçon, widgets interactifs compris. Une
 * règle écrite `.prose li` ne décrit donc pas « une puce du texte courant »,
 * elle décrit « n'importe quel li de la leçon » — y compris les arrêts d'une
 * frise ou les cases d'une liste de contrôle, qui ont leur propre mise en page.
 * Et comme `.prose li` (une classe, deux éléments) l'emporte sur `.ix-slot`
 * (une classe), le widget perd. La typographie du fil de lecture doit donc être
 * portée par une classe à elle, `.prose-list`.
 */
const dossier = join(__dirname);
const feuilles = readdirSync(dossier).filter((f) => f.endsWith('.css'));

describe('portée des styles de lecture', () => {
  it('ne cible jamais les listes par simple descendance depuis .prose', () => {
    const fuites: string[] = [];
    for (const nom of feuilles) {
      readFileSync(join(dossier, nom), 'utf8')
        .split('\n')
        .forEach((ligne, i) => {
          if (/\.prose\s+(ul|ol|li)\b/.test(ligne)) fuites.push(`${nom}:${i + 1} → ${ligne.trim()}`);
        });
    }
    expect(fuites).toEqual([]);
  });
});
