import type { LessonBlock } from '@lms/core';
import { Figure } from '../content/figures';
import { ProtectedText } from '../protection';
import { IconAlert, IconCheck, IconInfo, IconShield } from './Icons';

export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const CALLOUT_ICONS = {
  info: IconInfo,
  warning: IconShield,
  danger: IconAlert,
  success: IconCheck,
} as const;

function BlockRenderer({ block, fingerprint }: { readonly block: LessonBlock; readonly fingerprint: string }) {
  switch (block.type) {
    case 'heading':
      return (
        <h2 id={slugify(block.text)}>
          <ProtectedText fingerprint={fingerprint}>{block.text}</ProtectedText>
        </h2>
      );

    case 'paragraph':
      return (
        <p>
          <ProtectedText fingerprint={fingerprint}>{block.text}</ProtectedText>
        </p>
      );

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag>
          {block.items.map((item, index) => (
            <li key={index}>
              <span>
                <ProtectedText fingerprint={fingerprint}>{item}</ProtectedText>
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
              <ProtectedText fingerprint={fingerprint}>{block.title}</ProtectedText>
            </div>
            <div>
              <ProtectedText fingerprint={fingerprint}>{block.text}</ProtectedText>
            </div>
          </div>
        </aside>
      );
    }

    case 'figure':
      return (
        <figure className="figure">
          <Figure figureId={block.figureId} />
          <figcaption>
            <ProtectedText fingerprint={fingerprint}>{block.caption}</ProtectedText>
          </figcaption>
        </figure>
      );

    case 'table':
      return (
        <div className="table-wrap">
          <table className="table">
            {block.caption ? (
              <caption className="sr-only">{block.caption}</caption>
            ) : null}
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th key={header}>{header}</th>
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
                          <ProtectedText fingerprint={fingerprint}>{cell}</ProtectedText>
                        </strong>
                      ) : (
                        <ProtectedText fingerprint={fingerprint}>{cell}</ProtectedText>
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
          <ProtectedText fingerprint={fingerprint}>{block.text}</ProtectedText>
          <footer>
            <ProtectedText fingerprint={fingerprint}>{block.source}</ProtectedText>
          </footer>
        </blockquote>
      );

    case 'keyvalues':
      return (
        <div className="keyvalues">
          <div className="keyvalues__title">{block.title}</div>
          <dl>
            {block.entries.map((entry) => (
              <div className="keyvalues__row" key={entry.label}>
                <dt>
                  <ProtectedText fingerprint={fingerprint}>{entry.label}</ProtectedText>
                </dt>
                <dd>
                  <ProtectedText fingerprint={fingerprint}>{entry.value}</ProtectedText>
                </dd>
              </div>
            ))}
          </dl>
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
  return (
    <div className="prose">
      {blocks.map((block, index) => (
        <BlockRenderer block={block} fingerprint={fingerprint} key={index} />
      ))}
    </div>
  );
}
