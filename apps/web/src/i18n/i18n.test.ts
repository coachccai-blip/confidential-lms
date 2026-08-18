import { describe, expect, it } from 'vitest';
import type { LocalizedText } from '@lms/core';
import { D } from './dictionary';
import { courses, glossaryEntries, quizzes } from '../content';

/**
 * Contrôles de cohérence trilingue.
 *
 * Le typage garantit qu'aucune langue ne manque ; ces tests garantissent que
 * les trois versions disent bien la même chose et respectent les conventions
 * de chaque langue — ce qu'un apprenant bilingue remarquerait immédiatement.
 */

interface Row {
  readonly path: string;
  readonly fr: string;
  readonly en: string;
  readonly zh: string;
}

function isTriple(value: unknown): value is LocalizedText {
  if (typeof value !== 'object' || value === null) return false;
  const keys = Object.keys(value).sort();
  return keys.length === 3 && keys[0] === 'en' && keys[1] === 'fr' && keys[2] === 'zh';
}

/** Parcourt une structure et collecte toutes les valeurs localisées. */
function collect(value: unknown, path: string, rows: Row[], depth = 0): void {
  if (depth > 14) return;
  if (isTriple(value)) {
    rows.push({ path, ...value });
    return;
  }
  if (typeof value === 'function') {
    const fn = value as (...args: unknown[]) => unknown;
    const args = Array.from({ length: fn.length }, (_, i) => (i === 0 ? 3 : i === 1 ? 7 : 'X'));
    collect(fn(...args), `${path}()`, rows, depth + 1);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collect(item, `${path}[${index}]`, rows, depth + 1));
    return;
  }
  if (typeof value === 'object' && value !== null) {
    for (const [key, item] of Object.entries(value)) {
      collect(item, path ? `${path}.${key}` : key, rows, depth + 1);
    }
  }
}

const rows: Row[] = [];
collect(D, 'UI', rows);
collect(courses, 'COURSE', rows);
collect(quizzes, 'QUIZ', rows);
collect(glossaryEntries, 'GLOSS', rows);

const CJK = /[一-鿿]/;
/** Champs porteurs d'explication : toujours traduits, contrairement au matériel français. */
const EXPLANATORY =
  /(\.text|\.title|\.summary|\.description|\.caption|\.note|\.gloss|\.prompt|\.explanation|\.tagline|\.subtitle|items\[\d+\]$)/;

/** Normalise les séparateurs de milliers avant de comparer les nombres. */
function digits(text: string): string {
  return (text.replace(/(\d)[  ,](\d)/g, '$1$2').match(/\d+/g) ?? []).sort().join(',');
}

describe('cohérence trilingue', () => {
  it('collecte l’ensemble du contenu localisé', () => {
    expect(rows.length).toBeGreaterThan(1300);
  });

  it('ne laisse aucune traduction vide', () => {
    const empty = rows.filter((row) => !row.fr.trim() || !row.en.trim() || !row.zh.trim());
    expect(empty.map((row) => row.path)).toEqual([]);
  });

  it('traduit tous les champs explicatifs en chinois', () => {
    const untranslated = rows.filter((row) => EXPLANATORY.test(row.path) && !CJK.test(row.zh));
    // Seul le matériel français (formes verbales, formules) reste en français.
    const suspicious = untranslated.filter((row) => row.fr.split(' ').length > 12);
    expect(suspicious.map((row) => row.path)).toEqual([]);
  });

  it('n’introduit jamais de caractères chinois dans la version anglaise', () => {
    expect(rows.filter((row) => CJK.test(row.en)).map((row) => row.path)).toEqual([]);
  });

  it('cite le français avec des guillemets chinois dans les textes chinois', () => {
    // « » est une convention française : en chinois on attend “ ”.
    const mixed = rows.filter((row) => CJK.test(row.zh) && /[«»]/.test(row.zh));
    expect(mixed.map((row) => row.path)).toEqual([]);
  });

  it('annonce les mêmes nombres dans les trois langues', () => {
    const ordinals = /1re|1st|2e|2nd|première|first|mai 68|May 68|1968/i;
    const diverging = rows
      .filter((row) => !ordinals.test(`${row.fr} ${row.en}`))
      .filter((row) => digits(row.fr) !== digits(row.en) || digits(row.en) !== digits(row.zh));
    expect(diverging.map((row) => `${row.path} :: ${row.fr}`)).toEqual([]);
  });

  it('rend « parcours » par « course » et 课程, jamais par « path » ni 路径', () => {
    const paths = rows.filter((row) => /parcours/i.test(row.fr) && row.fr.length < 60);
    expect(paths.filter((row) => /\bpaths?\b/i.test(row.en)).map((row) => row.path)).toEqual([]);
    expect(paths.filter((row) => /路径/.test(row.zh)).map((row) => row.path)).toEqual([]);
  });

  it('distingue en chinois le cours (课程) de la leçon (本课 / 节课)', () => {
    expect(D.course.finished.zh).toBe('课程已完成');
    expect(D.securityEvents['lesson-completed'].zh).not.toBe(D.course.finished.zh);
  });

  it('garde une terminologie stable pour les termes clés de l’interface', () => {
    const glossary: Record<string, { en: RegExp; zh: RegExp }> = {
      apprenant: { en: /learner/i, zh: /学员/ },
      filigrane: { en: /watermark/i, zh: /水印/ },
      empreinte: { en: /fingerprint/i, zh: /指纹/ },
      appareil: { en: /device/i, zh: /设备/ },
    };
    const breaches: string[] = [];
    for (const [term, expected] of Object.entries(glossary)) {
      for (const row of rows) {
        if (!row.path.startsWith('UI') || row.fr.length > 46) continue;
        if (!new RegExp(term, 'i').test(row.fr)) continue;
        if (!expected.en.test(row.en)) breaches.push(`${row.path} (en) :: ${row.en}`);
        if (!expected.zh.test(row.zh)) breaches.push(`${row.path} (zh) :: ${row.zh}`);
      }
    }
    expect(breaches).toEqual([]);
  });
});
