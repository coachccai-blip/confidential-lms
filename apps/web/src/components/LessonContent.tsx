import { Fragment, type ReactNode } from 'react';
import type { LessonBlock, Locale, LocalizedText } from '@lms/core';
import { Figure } from '../content';
import { getGlossaryEntry } from '../content';
import { ProtectedText } from '../protection';
import { useI18n } from '../i18n';
import { useGlossary } from './GlossaryProvider';
import { IconAlert, IconCheck, IconInfo, IconShield } from './Icons';

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
  const parts = text.split(INLINE).filter((part) => part.length > 0);

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
}

function BlockRenderer({ block, fingerprint, locale, l }: BlockProps) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 id={slugify(l(block.text))}>
          <RichText text={l(block.text)} fingerprint={fingerprint} />
        </h2>
      );

    case 'paragraph':
      return (
        <p>
          <RichText text={l(block.text)} fingerprint={fingerprint} />
        </p>
      );

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag>
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
            <Icon size={18} />
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
          <div className="keyvalues__title">{l(block.title)}</div>
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
          <div className="examples__title">{l(block.title)}</div>
          {block.items.map((item, index) => (
            <div className={item.incorrect ? 'examples__item examples__item--incorrect' : 'examples__item'} key={index}>
              <span className="examples__fr">
                <ProtectedText fingerprint={fingerprint}>{item.fr}</ProtectedText>
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
          <div className="conj__title">{l(block.title)}</div>
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

    default:
      return null;
  }
}

export function LessonBlocks({
  blocks,
  fingerprint,
}: {
  readonly blocks: readonly LessonBlock[];
  readonly fingerprint: string;
}) {
  const { l, locale } = useI18n();
  return (
    <div className="prose">
      {blocks.map((block, index) => (
        <BlockRenderer block={block} fingerprint={fingerprint} locale={locale} l={l} key={index} />
      ))}
    </div>
  );
}
