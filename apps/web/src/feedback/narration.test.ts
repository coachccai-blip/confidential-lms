import { describe, expect, it } from 'vitest';
import type { LessonBlock } from '@lms/core';
import { buildNarration } from './narration';

/**
 * La segmentation est le contrat de la narration : c'est elle qui garantit
 * que la voix ne lit jamais l'écran comme un seul bloc, qu'elle se tait
 * devant une dictée, et que les exemples restent lus en français.
 */

const t = (fr: string, en: string, zh: string) => ({ fr, en, zh });

const PHRASES = {
  activityInvite: 'À vous : faites l’activité, puis lancez la suite.',
  avoid: 'À ne pas dire :',
};

const BLOCKS: readonly LessonBlock[] = [
  { type: 'heading', text: t('Le présent', 'The present', '现在时') },
  { type: 'paragraph', text: t('On **l’emploie** chaque jour, {prenom}.', 'You use it daily, {prenom}.', '每天都用，{prenom}。') },
  { type: 'list', items: [t('un', 'one', '一'), t('deux', 'two', '二'), t('trois', 'three', '三')] },
  {
    type: 'examples',
    title: t('Exemples', 'Examples', '例句'),
    items: [
      { fr: 'Je [[etre|suis]] là.', gloss: t('Être, présent.', 'To be, present.', '是，现在时。') },
      { fr: 'Je suis manger.', gloss: t('Calque à éviter.', 'A calque to avoid.', '要避免的直译。'), incorrect: true },
    ],
  },
  {
    type: 'interactive',
    title: t('La roue', 'The wheel', '转盘'),
    hint: t('Tournez la roue.', 'Spin the wheel.', '转动转盘。'),
    widget: {
      kind: 'dictation',
      prompt: t('Écrivez.', 'Write.', '写。'),
      items: [{ id: 'd1', sentence: 'La phrase secrète de la dictée.', hint: t('a', 'a', '一'), trap: t('b', 'b', '二') }],
    },
  },
  { type: 'paragraph', text: t('Après l’activité.', 'After the activity.', '活动之后。') },
  { type: 'heading', text: t('Suite', 'Next', '接下来') },
  { type: 'paragraph', text: t('Fin.', 'End.', '结束。') },
];

describe('segmentation de la narration', () => {
  const sections = buildNarration(BLOCKS, 'fr', 'Léa', 'Titre de la leçon', PHRASES);

  it('découpe en sections : titre → activité → reprise → titre suivant', () => {
    expect(sections.map((section) => section.title)).toEqual(['Le présent', 'Le présent', 'Suite']);
    expect(sections.map((section) => section.endsWithActivity)).toEqual([true, false, false]);
    expect(sections.map((section) => section.resumesAfterActivity)).toEqual([false, true, false]);
  });

  it('fait un segment par item de liste, jamais un bloc unique', () => {
    const first = sections[0]!;
    const listSegments = first.segments.filter((segment) => segment.blockIndex === 2);
    expect(listSegments.map((segment) => segment.text)).toEqual(['un', 'deux', 'trois']);
  });

  it('nettoie le balisage et résout le prénom', () => {
    const paragraph = sections[0]!.segments.find((segment) => segment.blockIndex === 1);
    expect(paragraph?.text).toBe('On l’emploie chaque jour, Léa.');
    // Le glossaire `[[etre|suis]]` doit se lire « suis », pas « etre suis ».
    const examples = sections[0]!.segments.filter((segment) => segment.blockIndex === 3);
    expect(examples.map((segment) => segment.text)).toContain('Je suis là.');
  });

  it('ne prononce jamais une tournure fautive, seulement son explication', () => {
    const texts = sections.flatMap((section) => section.segments.map((segment) => segment.text));
    expect(texts.some((text) => text.includes('Je suis manger'))).toBe(false);
    expect(texts.some((text) => text.startsWith('À ne pas dire :'))).toBe(true);
  });

  it('lit le titre de l’activité et l’invitation, jamais le contenu de la dictée', () => {
    const first = sections[0]!;
    const last = first.segments[first.segments.length - 1]!;
    expect(last.text).toBe(PHRASES.activityInvite);
    const texts = sections.flatMap((section) => section.segments.map((segment) => segment.text));
    expect(texts.some((text) => text.includes('phrase secrète'))).toBe(false);
  });

  it('garde la voix française pour les exemples quand l’interface est en chinois', () => {
    const zh = buildNarration(BLOCKS, 'zh', undefined, '课程标题', PHRASES);
    const example = zh.flatMap((s) => s.segments).find((segment) => segment.text === 'Je suis là.');
    expect(example?.lang).toBe('fr');
    const explanation = zh.flatMap((s) => s.segments).find((segment) => segment.blockIndex === 1);
    expect(explanation?.lang).toBe('zh');
    expect(explanation?.text).toContain('每天都用');
  });

  it('intitule la première section du titre de la leçon quand aucun titre ne la précède', () => {
    const noHeading = buildNarration(BLOCKS.slice(1, 3), 'fr', undefined, 'Titre de la leçon', PHRASES);
    expect(noHeading[0]?.title).toBe('Titre de la leçon');
  });

  it('ignore les sections vides plutôt que de créer des boutons muets', () => {
    const emptyish: readonly LessonBlock[] = [
      { type: 'heading', text: t('A', 'A', '一') },
      { type: 'heading', text: t('B', 'B', '二') },
    ];
    const result = buildNarration(emptyish, 'fr', undefined, 'X', PHRASES);
    expect(result.map((section) => section.segments.length)).toEqual([1, 1]);
    expect(result.map((section) => section.index)).toEqual([0, 1]);
  });
});

describe('français enchâssé dans les segments anglais et chinois', () => {
  const one = (blocks: readonly LessonBlock[], locale: 'en' | 'zh') =>
    buildNarration(blocks, locale, undefined, 'T', PHRASES).flatMap((section) => section.segments);

  const partsOf = (segment: { text: string; parts: readonly { lang: string; start: number; end: number }[] }) =>
    segment.parts.map((part) => [part.lang, segment.text.slice(part.start, part.end)] as const);

  it('en chinois, toute suite latine est lue par la voix française', () => {
    const [seg] = one([{ type: 'paragraph', text: t('x', 'x', '两者并列，用逗号分隔。切勿写 “Cher Monsieur”。') }], 'zh');
    expect(partsOf(seg!)).toEqual([
      ['zh', '两者并列，用逗号分隔。切勿写'],
      ['fr', 'Cher Monsieur'],
    ]);
  });

  it('en anglais, une citation française passe en voix française, une anglaise non', () => {
    const [seg] = one(
      [{ type: 'paragraph', text: t('x', 'Do not translate “Best regards” as “Meilleures salutations”.', 'x') }],
      'en',
    );
    const parts = partsOf(seg!);
    expect(parts.map(([lang]) => lang)).toEqual(['en', 'fr']);
    expect(parts[0]![1]).toContain('Best regards');
    expect(parts[1]![1]).toContain('Meilleures salutations');
  });

  it('tranche le gras au cas par cas : français en voix française, anglais en voix anglaise', () => {
    const [fr] = one([{ type: 'paragraph', text: t('x', 'Use **à terme** here.', 'x') }], 'en');
    expect(partsOf(fr!).map(([lang]) => lang)).toEqual(['en', 'fr', 'en']);
    const [en] = one([{ type: 'paragraph', text: t('x', 'A CV fits on **one page** here.', 'x') }], 'en');
    expect(en!.parts.map((part) => part.lang)).toEqual(['en']);
  });

  it('reconnaît une formule entièrement française sans balisage', () => {
    const [seg] = one([{ type: 'paragraph', text: t('x', 'Je vous prie d’agréer…', 'x') }], 'en');
    expect(seg!.parts.map((part) => part.lang)).toEqual(['fr']);
  });

  it('étend un mot à diacritique à ses voisins français, pas aux mots anglais', () => {
    const [seg] = one([{ type: 'paragraph', text: t('x', 'The phrase à terme is common.', 'x') }], 'en');
    expect(partsOf(seg!)).toEqual([
      ['en', 'The phrase'],
      ['fr', 'à terme'],
      ['en', 'is common.'],
    ]);
  });

  it('suit la langue du libellé de glossaire : traduit → langue du texte, français → voix française', () => {
    const [tr] = one([{ type: 'paragraph', text: t('x', 'This is the [[concordance|sequence of tenses]] rule.', 'x') }], 'en');
    expect(tr!.parts.map((part) => part.lang)).toEqual(['en']);
    const [fr] = one([{ type: 'paragraph', text: t('x', 'The [[passe-compose|passé composé]] moves the story.', 'x') }], 'en');
    expect(partsOf(fr!).some(([lang, text]) => lang === 'fr' && (text ?? '').includes('passé composé'))).toBe(true);
  });

  it('lit toujours les citations « » en français', () => {
    const [seg] = one(
      [{ type: 'paragraph', text: t('x', 'A famous line: « Les cons, ça ose tout. »', 'x') }],
      'en',
    );
    expect(partsOf(seg!).some(([lang, text]) => lang === 'fr' && (text ?? '').includes('Les cons'))).toBe(true);
  });

  it('borne un passage français à sa virgule : la suite anglaise garde sa voix', () => {
    const [seg] = one(
      [{ type: 'paragraph', text: t('x', 'Bonne journée / Bonne soirée, when leaving the shop.', 'x') }],
      'en',
    );
    const parts = partsOf(seg!);
    expect(parts[0]![0]).toBe('fr');
    expect(parts[parts.length - 1]![0]).toBe('en');
    expect(parts[parts.length - 1]![1]).toContain('when leaving');
  });

  it('garde des index de parties exacts, contigus et non vides', () => {
    const segments = one(
      [{ type: 'paragraph', text: t('x', 'Say “bonjour madame” then “merci beaucoup” politely.', 'x') }],
      'en',
    );
    const seg = segments[0]!;
    for (const part of seg.parts) {
      expect(part.start).toBeLessThan(part.end);
      expect(seg.text.slice(part.start, part.end).trim().length).toBeGreaterThan(0);
    }
    for (let i = 1; i < seg.parts.length; i += 1) {
      expect(seg.parts[i]!.start).toBeGreaterThanOrEqual(seg.parts[i - 1]!.end);
    }
  });
});
