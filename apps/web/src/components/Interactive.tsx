import { createContext, useContext, useMemo, useState } from 'react';
import { personalise } from '@lms/core';
import type {
  LessonWidget,
  WidgetMatrix,
  WidgetSentence,
  WidgetSwitcher,
  WidgetTimeline,
  WidgetWheel,
} from '@lms/core';
import { useI18n } from '../i18n';
import { IconChevronRight, IconSparkle } from './Icons';

/* ------------------------------------------------------------------
   Schémas manipulables.

   Trois principes tenus dans tous les widgets :

   - tout est bouton. Rien ne dépend du survol : au clavier comme au doigt,
     l'exploration doit être identique ;
   - une seule zone de réponse. Le contenu change à la sélection, jamais la
     hauteur du bloc — sinon la page saute sous le lecteur ;
   - une sélection par défaut. Un schéma vide ne montre pas ce qu'il sait
     faire, donc personne ne clique.
   ------------------------------------------------------------------ */

/**
 * Le prénom traverse les widgets par un contexte local : le faire descendre
 * en props obligerait chaque sous-composant à le relayer sans l'utiliser.
 */
const NameContext = createContext('');

function useName(): string {
  return useContext(NameContext);
}

/** Réponse affichée sous le sélecteur, commune à plusieurs widgets. */
function Readout({
  headline,
  example,
  gloss,
}: {
  readonly headline: string;
  readonly example: string;
  readonly gloss: string;
}) {
  const name = useName();
  return (
    <div className="ix__readout" role="status" aria-live="polite">
      <div className="ix__headline">{personalise(headline, name)}</div>
      <div className="ix__example" lang="fr">
        {personalise(example, name)}
      </div>
      <p className="ix__gloss">{personalise(gloss, name)}</p>
    </div>
  );
}

/* ------------------------------ Roue ------------------------------ */

function Wheel({ widget }: { readonly widget: WidgetWheel }) {
  const { l } = useI18n();
  const [active, setActive] = useState(0);
  const person = widget.persons[active] ?? widget.persons[0];
  const count = widget.persons.length;

  return (
    <div className="ix-wheel">
      <div className="ix-wheel__dial" style={{ ['--ix-count' as string]: count }}>
        <div className="ix-wheel__hub">
          <span className="ix-wheel__verb" lang="fr">
            {widget.verb}
          </span>
        </div>
        {widget.persons.map((entry, index) => (
          <button
            key={entry.pronoun}
            type="button"
            className={index === active ? 'ix-wheel__spoke ix-wheel__spoke--active' : 'ix-wheel__spoke'}
            style={{ ['--ix-index' as string]: index }}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          >
            <span lang="fr">{entry.pronoun}</span>
          </button>
        ))}
      </div>

      {person ? (
        <Readout
          headline={`${person.pronoun} ${person.form}`}
          example={person.phonetic ?? ''}
          gloss={l(person.note)}
        />
      ) : null}
    </div>
  );
}

/* ----------------------------- Matrice ----------------------------- */

function Matrix({ widget }: { readonly widget: WidgetMatrix }) {
  const { l } = useI18n();
  const [row, setRow] = useState(widget.rows[0]?.id ?? '');
  const [column, setColumn] = useState(widget.columns[0]?.id ?? '');

  const cell = useMemo(
    () => widget.cells.find((entry) => entry.row === row && entry.column === column) ?? null,
    [widget.cells, row, column],
  );

  return (
    <div className="ix-matrix">
      <div className="ix-matrix__axes">
        <fieldset className="ix-axis">
          <legend className="ix-axis__legend">{l(widget.rowsLabel)}</legend>
          <div className="ix-axis__options">
            {widget.rows.map((entry) => (
              <button
                key={entry.id}
                type="button"
                className={entry.id === row ? 'ix-chip ix-chip--active' : 'ix-chip'}
                aria-pressed={entry.id === row}
                onClick={() => setRow(entry.id)}
              >
                {l(entry.label)}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="ix-axis">
          <legend className="ix-axis__legend">{l(widget.columnsLabel)}</legend>
          <div className="ix-axis__options">
            {widget.columns.map((entry) => (
              <button
                key={entry.id}
                type="button"
                className={entry.id === column ? 'ix-chip ix-chip--active' : 'ix-chip'}
                aria-pressed={entry.id === column}
                onClick={() => setColumn(entry.id)}
              >
                {l(entry.label)}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      {cell ? (
        <Readout headline={cell.answer} example={cell.example} gloss={l(cell.gloss)} />
      ) : (
        <div className="ix__readout ix__readout--empty" role="status">
          <span className="ix__gloss">—</span>
        </div>
      )}
    </div>
  );
}

/* ------------------------------ Frise ------------------------------ */

function Timeline({ widget }: { readonly widget: WidgetTimeline }) {
  const { l } = useI18n();
  const [active, setActive] = useState(Math.min(1, widget.points.length - 1));
  const point = widget.points[active] ?? widget.points[0];

  return (
    <div className="ix-timeline">
      <div className="ix-timeline__track">
        <span className="ix-timeline__line" aria-hidden="true" />
        {widget.points.map((entry, index) => (
          <button
            key={entry.id}
            type="button"
            className={index === active ? 'ix-timeline__stop ix-timeline__stop--active' : 'ix-timeline__stop'}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          >
            <span className="ix-timeline__dot" aria-hidden="true" />
            <span className="ix-timeline__label">{l(entry.label)}</span>
          </button>
        ))}
      </div>

      {point ? <Readout headline={l(point.headline)} example={point.example} gloss={l(point.gloss)} /> : null}
    </div>
  );
}

/* ---------------------------- Sélecteur ---------------------------- */

function Switcher({ widget }: { readonly widget: WidgetSwitcher }) {
  const { l } = useI18n();
  const [active, setActive] = useState(0);
  const step = widget.steps[active] ?? widget.steps[0];

  return (
    <div className="ix-switcher">
      <div className="ix-switcher__steps">
        {widget.steps.map((entry, index) => (
          <button
            key={entry.id}
            type="button"
            className={index === active ? 'ix-step ix-step--active' : 'ix-step'}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          >
            <span className="ix-step__rank">{index + 1}</span>
            <span className="ix-step__label">{l(entry.label)}</span>
          </button>
        ))}
      </div>

      {step ? <Readout headline={l(step.headline)} example={step.example} gloss={l(step.gloss)} /> : null}
    </div>
  );
}

/* ------------------------- Phrase décomposée ------------------------ */

function Sentence({ widget }: { readonly widget: WidgetSentence }) {
  const { l } = useI18n();
  const name = useName();
  const clickable = widget.segments
    .map((segment, index) => ({ segment, index }))
    .filter(({ segment }) => segment.role !== undefined);
  const [active, setActive] = useState(clickable[0]?.index ?? -1);
  const current = active >= 0 ? widget.segments[active] : undefined;

  return (
    <div className="ix-sentence">
      <p className="ix-sentence__line" lang="fr">
        {widget.segments.map((segment, index) =>
          segment.role === undefined ? (
            <span className="ix-seg ix-seg--plain" key={index}>
              {personalise(segment.text, name)}
            </span>
          ) : (
            <button
              key={index}
              type="button"
              className={index === active ? 'ix-seg ix-seg--active' : 'ix-seg'}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              {personalise(segment.text, name)}
            </button>
          ),
        )}
      </p>

      {current?.role ? (
        <div className="ix__readout" role="status" aria-live="polite">
          <div className="ix__headline">{l(current.role)}</div>
          {current.detail ? <p className="ix__gloss">{l(current.detail)}</p> : null}
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------ Cadre ------------------------------ */

function WidgetBody({ widget }: { readonly widget: LessonWidget }) {
  switch (widget.kind) {
    case 'wheel':
      return <Wheel widget={widget} />;
    case 'matrix':
      return <Matrix widget={widget} />;
    case 'timeline':
      return <Timeline widget={widget} />;
    case 'switcher':
      return <Switcher widget={widget} />;
    case 'sentence':
      return <Sentence widget={widget} />;
    default:
      return null;
  }
}

export function InteractiveBlock({
  title,
  hint,
  emoji,
  widget,
  firstName,
}: {
  /** Déjà traduits et personnalisés par l'appelant. */
  readonly title: string;
  readonly hint: string;
  readonly emoji?: string | undefined;
  readonly widget: LessonWidget;
  readonly firstName?: string | undefined;
}) {
  return (
    <section className="ix">
      <header className="ix__head">
        <span className="ix__badge" aria-hidden="true">
          {emoji ?? <IconSparkle size={15} />}
        </span>
        <div>
          <h3 className="ix__title">{title}</h3>
          <p className="ix__hint">
            <IconChevronRight size={12} /> {hint}
          </p>
        </div>
      </header>
      <NameContext.Provider value={firstName ?? ''}>
        <WidgetBody widget={widget} />
      </NameContext.Provider>
    </section>
  );
}
