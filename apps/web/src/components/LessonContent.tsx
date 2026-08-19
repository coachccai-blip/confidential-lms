import { Fragment, useEffect, type ReactNode } from 'react';
import { personalise, pickVariant, type LessonBlock, type Locale, type LocalizedText } from '@lms/core';
import { Figure } from '../content';
import { getGlossaryEntry } from '../content';
import { Listen } from './Listen';
import { ProtectedText } from '../protection';
import { D, useI18n } from '../i18n';
import { useApp } from '../state/app-context';
import { InteractiveBlock } from './Interactive';
import { type NarrationSection } from '../feedback/narration';
import { NarrationChip, useNarrator } from './NarrationPlayer';
import { Reveal } from './Reveal';
import { useGlossary } from './GlossaryProvider';
import { IconAlert, IconCheck, IconInfo, IconShield, IconSparkle } from './Icons';

export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Balisage en ligne du contenu :
 *   `[[id|texte]]` → mot difficile cliquable, défini dans le glossaire ;
 *   `**texte**`    → mise en évidence.
 * Tout le reste est du texte, filigrané par apprenant.
 */
const INLINE = /(\[\[[^\]]+\]\]|\*\*[^*]+\*\*)/g;

function RichText({ text, fingerprint }: { readonly text: string; readonly fingerprint: string }): ReactNode {
  const { open } = useGlossary();
  const { user } = useApp();
  // Le jeton `{prenom}` est resolu ici, apres traduction : chaque langue
  // place le prenom ou sa syntaxe l'exige.
  const parts = personalise(text, user?.firstName).split(INLINE).filter((part) => part.length > 0);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('[[') && part.endsWith(']]')) {
          const inner = part.slice(2, -2);
          const separator = inner.indexOf('|');
          const id = separator === -1 ? inner : inner.slice(0, separator);
          const entry = getGlossaryEntry(id);
          const label = separator === -1 ? (entry?.term ?? inner) : inner.slice(separator + 1);
          if (!entry) return <Fragment key={index}>{label}</Fragment>;
          return (
            <button type="button" className="gloss" key={index} onClick={() => open(id)}>
              {label}
            </button>
          );
        }
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return <ProtectedText fingerprint={fingerprint} key={index}>{part}</ProtectedText>;
      })}
    </>
  );
}

const CALLOUT_ICONS = {
  info: IconInfo,
  warning: IconShield,
  danger: IconAlert,
  success: IconCheck,
} as const;

interface BlockProps {
  readonly block: LessonBlock;
  readonly fingerprint: string;
  readonly locale: Locale;
  readonly l: (text: LocalizedText) => string;
  /** Prénom de l'apprenant, injecté partout où le jeton apparaît. */
  readonly firstName: string | undefined;
}

function BlockRenderer({ block, fingerprint, locale, l, firstName }: BlockProps) {
  /** Raccourci : traduire puis résoudre le jeton `{prenom}`. */
  const p = (text: LocalizedText) => personalise(l(text), firstName);
  switch (block.type) {
    case 'heading':
      return (
        <h2 id={slugify(l(block.text))}>
          {block.emoji ? (
            <span className="block__emoji" aria-hidden="true">
              {block.emoji}
            </span>
          ) : null}
          <RichText text={l(block.text)} fingerprint={fingerprint} />
        </h2>
      );

    case 'paragraph':
      return (
        <p>
          {block.emoji ? (
            <span className="block__emoji" aria-hidden="true">
              {block.emoji}
            </span>
          ) : null}
          <RichText text={l(block.text)} fingerprint={fingerprint} />
        </p>
      );

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag className="prose-list">
          {block.items.map((item, index) => (
            <li key={index}>
              <span>
                <RichText text={l(item)} fingerprint={fingerprint} />
              </span>
            </li>
          ))}
        </Tag>
      );
    }

    case 'callout': {
      const Icon = CALLOUT_ICONS[block.tone];
      return (
        <aside className={`callout callout--${block.tone}`}>
          <span className="callout__icon">
            {block.emoji ? <span aria-hidden="true">{block.emoji}</span> : <Icon size={18} />}
          </span>
          <div>
            <div className="callout__title">
              <RichText text={l(block.title)} fingerprint={fingerprint} />
            </div>
            <div>
              <RichText text={l(block.text)} fingerprint={fingerprint} />
            </div>
          </div>
        </aside>
      );
    }

    case 'figure':
      return (
        <figure className="figure">
          <Figure figureId={block.figureId} locale={locale} />
          <figcaption>
            <RichText text={l(block.caption)} fingerprint={fingerprint} />
          </figcaption>
        </figure>
      );

    case 'table':
      return (
        <div className="table-wrap">
          {block.caption ? (
            <div className="table__caption">
              {block.emoji ? (
                <span className="block__emoji" aria-hidden="true">
                  {block.emoji}
                </span>
              ) : null}
              {l(block.caption)}
            </div>
          ) : null}
          <table className="table">
            {block.caption ? <caption className="sr-only">{l(block.caption)}</caption> : null}
            <thead>
              <tr>
                {block.headers.map((header, index) => (
                  <th key={index}>
                    <RichText text={l(header)} fingerprint={fingerprint} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>
                      {cellIndex === 0 ? (
                        <strong>
                          <RichText text={l(cell)} fingerprint={fingerprint} />
                        </strong>
                      ) : (
                        <RichText text={l(cell)} fingerprint={fingerprint} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'quote':
      return (
        <blockquote>
          <RichText text={l(block.text)} fingerprint={fingerprint} />
          <footer>
            <RichText text={l(block.source)} fingerprint={fingerprint} />
          </footer>
        </blockquote>
      );

    case 'keyvalues':
      return (
        <div className="keyvalues">
          <div className="keyvalues__title">
            {block.emoji ? (
              <span className="block__emoji" aria-hidden="true">
                {block.emoji}
              </span>
            ) : null}
            {l(block.title)}
          </div>
          <dl>
            {block.entries.map((entry, index) => (
              <div className="keyvalues__row" key={index}>
                <dt>
                  <RichText text={l(entry.label)} fingerprint={fingerprint} />
                </dt>
                <dd>
                  <RichText text={l(entry.value)} fingerprint={fingerprint} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case 'examples':
      return (
        <div className="examples">
          <div className="examples__title">
            {block.emoji ? (
              <span className="block__emoji" aria-hidden="true">
                {block.emoji}
              </span>
            ) : null}
            {l(block.title)}
          </div>
          {block.items.map((item, index) => (
            <div className={item.incorrect ? 'examples__item examples__item--incorrect' : 'examples__item'} key={index}>
              <span className="examples__fr">
                <ProtectedText fingerprint={fingerprint}>{personalise(item.fr, firstName)}</ProtectedText>
                {item.incorrect ? null : <Listen text={personalise(item.fr, firstName)} />}
              </span>
              <span className="examples__gloss">
                <RichText text={l(item.gloss)} fingerprint={fingerprint} />
              </span>
            </div>
          ))}
        </div>
      );

    case 'conjugation':
      return (
        <div className="conj">
          <div className="conj__title">
            {block.emoji ? (
              <span className="block__emoji" aria-hidden="true">
                {block.emoji}
              </span>
            ) : null}
            {l(block.title)}
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th />
                  {block.columns.map((column, index) => (
                    <th key={index}>{l(column)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.pronoun}>
                    <td className="conj__pronoun">{row.pronoun}</td>
                    {row.forms.map((form, index) => (
                      <td key={index}>{form}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note ? (
            <div className="conj__note">
              <RichText text={l(block.note)} fingerprint={fingerprint} />
            </div>
          ) : null}
        </div>
      );

    case 'interactive':
      return (
        <InteractiveBlock
          title={p(block.title)}
          hint={p(block.hint)}
          emoji={block.emoji}
          widget={block.widget}
          firstName={firstName}
        />
      );

    default:
      return null;
  }
}

/** Phrase d'accompagnement nominative, inseree dans le fil de la lecon. */
function CoachLine({
  text,
  fingerprint,
  tone = 'open',
}: {
  readonly text: LocalizedText;
  readonly fingerprint: string;
  readonly tone?: 'open' | 'mid';
}) {
  const { l } = useI18n();
  return (
    <p className={`coach coach--${tone}`}>
      <IconSparkle size={15} className="coach__icon" />
      <span>
        <RichText text={l(text)} fingerprint={fingerprint} />
      </span>
    </p>
  );
}

export function LessonBlocks({
  blocks,
  fingerprint,
  lessonId,
  narration,
}: {
  readonly blocks: readonly LessonBlock[];
  readonly fingerprint: string;
  /** Sert de graine : une lecon garde toujours la meme phrase d'accueil. */
  readonly lessonId?: string;
  /** Sections narrables de la leçon, pour les boutons d'écoute et le surlignage. */
  readonly narration?: readonly NarrationSection[];
}) {
  const { l, locale } = useI18n();
  const { user } = useApp();

  const seed = lessonId ?? '';
  const greeting = seed ? pickVariant(D.coach.greetings, seed) : null;
  const midway = seed ? pickVariant(D.coach.midway, `${seed}#mid`) : null;
  // L'encouragement tombe apres environ 60 % des blocs, jamais sur les deux
  // derniers : il doit relancer la lecture, pas la conclure.
  const midIndex = blocks.length >= 5 ? Math.min(Math.round(blocks.length * 0.6), blocks.length - 2) : -1;

  // Narration : quel bloc la voix lit-elle en ce moment, et où commencent
  // les sections ré-écoutables ? Le bouton de la première section vit dans
  // l'en-tête de la page (« Écouter la leçon ») : pas de doublon ici.
  const snapshot = useNarrator();
  const sections = narration ?? [];
  const narratedBlock = lessonId && snapshot.lessonKey === lessonId ? snapshot.blockIndex : null;
  const chipAt = new Map<number, number>();
  sections.forEach((section) => {
    if (section.index > 0) chipAt.set(section.firstBlockIndex, section.index);
  });

  useEffect(() => {
    if (narratedBlock === null || snapshot.status !== 'playing') return;
    const node = document.querySelector(`[data-nblock="${narratedBlock}"]`);
    node?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [narratedBlock, snapshot.status]);

  return (
    <div className="prose">
      {greeting ? <CoachLine text={greeting} fingerprint={fingerprint} /> : null}
      {blocks.map((block, index) => {
        const chipSection = chipAt.get(index);
        return (
          <Fragment key={index}>
            {chipSection !== undefined && lessonId ? (
              <NarrationChip lessonKey={lessonId} sections={sections} sectionIndex={chipSection} />
            ) : null}
            <div
              data-nblock={index}
              className={narratedBlock === index ? 'nblock nblock--live' : 'nblock'}
            >
              <Reveal index={index}>
                <BlockRenderer
                  block={block}
                  fingerprint={fingerprint}
                  locale={locale}
                  l={l}
                  firstName={user?.firstName}
                />
              </Reveal>
            </div>
            {midway && index === midIndex ? <CoachLine text={midway} fingerprint={fingerprint} tone="mid" /> : null}
          </Fragment>
        );
      })}
    </div>
  );
}
