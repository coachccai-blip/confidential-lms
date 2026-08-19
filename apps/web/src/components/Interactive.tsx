import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { personalise } from '@lms/core';
import type {
  LessonWidget,
  WidgetDictation,
  WidgetFill,
  WidgetLayout,
  WidgetListening,
  WidgetOrder,
  WidgetPairs,
  WidgetMatrix,
  WidgetSentence,
  WidgetSwitcher,
  WidgetTimeline,
  WidgetWheel,
  WidgetWriting,
} from '@lms/core';
import { D, useI18n } from '../i18n';
import { useFeedback } from '../feedback/useFeedback';
import { speakFrench } from '../feedback/speech';
import { Emphasis } from './Emphasis';
import { IconCheck, IconChevronRight, IconEar, IconPencil, IconPlay, IconSparkle, IconTurtle, IconVolume, IconX } from './Icons';
import { Listen, useFrenchVoice } from './Listen';

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

/** Glose d'un schéma : le jeton `{prenom}` puis le gras sont résolus ici. */
function Gloss({ text }: { readonly text: string }) {
  const name = useName();
  return <Emphasis text={personalise(text, name)} />;
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
        <Listen text={personalise(example, name)} />
      </div>
      <p className="ix__gloss">
        <Gloss text={gloss} />
      </p>
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
          {current.detail ? (
            <p className="ix__gloss">
              <Gloss text={l(current.detail)} />
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}


/* ------------------------- Page de document ------------------------- */

/**
 * Une page dont chaque zone s'explique. Le bouton « Voir dans l'ordre »
 * parcourt les zones une à une : savoir où écrire ne suffit pas, encore
 * faut-il savoir par quoi commencer.
 */
function Layout({ widget }: { readonly widget: WidgetLayout }) {
  const { l } = useI18n();
  const name = useName();
  const { play } = useFeedback();
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<number | null>(null);

  const zone = widget.zones[active] ?? widget.zones[0];

  useEffect(() => {
    if (!playing) return;
    // Une zone toutes les 1,6 s : le temps de lire l'explication.
    timer.current = window.setTimeout(() => {
      setActive((current) => {
        if (current + 1 >= widget.zones.length) {
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 1600);
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, [playing, active, widget.zones.length]);

  return (
    <div className="ix-layout">
      <div className="ix-layout__stage">
        <div
          className="ix-page"
          style={{ aspectRatio: String(widget.ratio ?? 0.707) }}
          role="group"
          aria-label={l(D.ix.documentLabel)}
        >
          {widget.zones.map((entry, index) => (
            <button
              key={entry.id}
              type="button"
              className={index === active ? 'ix-page__zone ix-page__zone--active' : 'ix-page__zone'}
              style={{
                left: `${entry.x}%`,
                top: `${entry.y}%`,
                width: `${entry.w}%`,
                height: `${entry.h}%`,
                textAlign: entry.align ?? 'left',
                // Les zones apparaissent en cascade au premier affichage.
                animationDelay: `${index * 70}ms`,
              }}
              aria-pressed={index === active}
              onClick={() => {
                setPlaying(false);
                setActive(index);
              }}
            >
              <span className="ix-page__sample" lang="fr">
                {personalise(entry.sample, name)}
              </span>
              <span className="ix-page__tag">{index + 1}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="btn btn--secondary btn--sm ix-layout__play"
          onClick={() => {
            play('select');
            setActive(0);
            setPlaying(true);
          }}
        >
          <IconPlay size={13} /> {l(D.ix.playOrder)}
        </button>
      </div>

      {zone ? (
        <div className="ix__readout ix-layout__readout" role="status" aria-live="polite">
          <div className="ix__headline">
            {active + 1}. {l(zone.label)}
          </div>
          <div className="ix__example" lang="fr">
            {personalise(zone.sample, name)}
          </div>
          <p className="ix__gloss">
            <Gloss text={l(zone.detail)} />
          </p>
        </div>
      ) : null}
    </div>
  );
}

/* --------------------------- Remise en ordre ------------------------- */

/** Mélange stable : le même widget propose toujours le même désordre. */
function shuffleStable<T>(items: readonly T[], seed: string): readonly T[] {
  const out = [...items];
  let hash = 0x811c9dc5;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  for (let i = out.length - 1; i > 0; i -= 1) {
    hash = Math.imul(hash ^ i, 0x01000193) >>> 0;
    const j = hash % (i + 1);
    const a = out[i];
    const b = out[j];
    if (a !== undefined && b !== undefined) {
      out[i] = b;
      out[j] = a;
    }
  }
  // Un mélange qui retombe sur l'ordre d'origine ôte tout intérêt.
  return out.every((item, index) => item === items[index]) ? [...out].reverse() : out;
}

function Order({ widget }: { readonly widget: WidgetOrder }) {
  const { l } = useI18n();
  const { play, celebrate } = useFeedback();
  const pool = useMemo(
    () => shuffleStable(widget.items, widget.items.map((item) => item.id).join('|')),
    [widget.items],
  );
  const [placed, setPlaced] = useState<readonly string[]>([]);
  const [wrong, setWrong] = useState<string | null>(null);

  const done = placed.length === widget.items.length;
  const nextId = widget.items[placed.length]?.id;

  function pick(id: string) {
    if (done || placed.includes(id)) return;
    if (id === nextId) {
      const next = [...placed, id];
      setPlaced(next);
      setWrong(null);
      if (next.length === widget.items.length) celebrate('success');
      else play('select');
      return;
    }
    // Une erreur ne réinitialise rien : on signale et on laisse réessayer.
    setWrong(id);
    play('error');
    window.setTimeout(() => setWrong(null), 600);
  }

  return (
    <div className="ix-order">
      <p className="ix-order__prompt">{l(widget.prompt)}</p>

      <ol className="ix-order__slots">
        {widget.items.map((item, index) => {
          const filled = placed[index];
          const entry = filled ? widget.items.find((candidate) => candidate.id === filled) : undefined;
          return (
            <li key={item.id} className={entry ? 'ix-slot ix-slot--filled' : 'ix-slot'}>
              <span className="ix-slot__rank">{index + 1}</span>
              <span className="ix-slot__text">{entry ? l(entry.text) : '—'}</span>
              {entry ? <IconCheck size={14} className="ix-slot__check" /> : null}
            </li>
          );
        })}
      </ol>

      <div className="ix-order__pool">
        {pool.map((item) => {
          const used = placed.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              className={
                wrong === item.id ? 'ix-token ix-token--wrong' : used ? 'ix-token ix-token--used' : 'ix-token'
              }
              disabled={used}
              onClick={() => pick(item.id)}
            >
              {l(item.text)}
            </button>
          );
        })}
      </div>

      {done ? (
        <div className="ix__readout ix-order__done" role="status">
          <div className="ix__headline">
            <IconCheck size={16} /> {l(D.ix.wellDone)}
          </div>
          <p className="ix__gloss">
            <Gloss text={l(widget.successNote)} />
          </p>
        </div>
      ) : null}
    </div>
  );
}

/* ---------------------------- Appariement ---------------------------- */

function Pairs({ widget }: { readonly widget: WidgetPairs }) {
  const { l } = useI18n();
  const { play, celebrate } = useFeedback();
  const rights = useMemo(
    () => shuffleStable(widget.pairs, widget.pairs.map((pair) => pair.id).join('|')),
    [widget.pairs],
  );
  const [selected, setSelected] = useState<string | null>(null);
  const [matched, setMatched] = useState<readonly string[]>([]);
  const [missed, setMissed] = useState<string | null>(null);

  function chooseRight(id: string) {
    if (!selected || matched.includes(id)) return;
    if (id === selected) {
      const next = [...matched, id];
      setMatched(next);
      setSelected(null);
      if (next.length === widget.pairs.length) celebrate('success');
      else play('select');
      return;
    }
    setMissed(id);
    play('error');
    window.setTimeout(() => setMissed(null), 600);
  }

  return (
    <div className="ix-pairs">
      <p className="ix-order__prompt">{l(widget.prompt)}</p>
      <div className="ix-pairs__grid">
        <div className="ix-pairs__column">
          {widget.pairs.map((pair) => (
            <button
              key={pair.id}
              type="button"
              className={
                matched.includes(pair.id)
                  ? 'ix-token ix-token--done'
                  : selected === pair.id
                    ? 'ix-token ix-token--active'
                    : 'ix-token'
              }
              disabled={matched.includes(pair.id)}
              onClick={() => {
                setSelected(pair.id);
                play('tap');
              }}
              lang="fr"
            >
              {pair.left}
            </button>
          ))}
        </div>
        <div className="ix-pairs__column">
          {rights.map((pair) => (
            <button
              key={pair.id}
              type="button"
              className={
                matched.includes(pair.id)
                  ? 'ix-token ix-token--done'
                  : missed === pair.id
                    ? 'ix-token ix-token--wrong'
                    : 'ix-token'
              }
              disabled={matched.includes(pair.id) || selected === null}
              onClick={() => chooseRight(pair.id)}
            >
              {l(pair.right)}
            </button>
          ))}
        </div>
      </div>
      {matched.length === widget.pairs.length ? (
        <div className="ix__readout" role="status">
          <div className="ix__headline">
            <IconCheck size={16} /> {l(D.ix.allMatched)}
          </div>
        </div>
      ) : (
        <p className="ix__gloss">{l(selected ? D.ix.nowPickMeaning : D.ix.pickExpression)}</p>
      )}
    </div>
  );
}

/* --------------------------- Texte à trous --------------------------- */

function Fill({ widget }: { readonly widget: WidgetFill }) {
  const { l } = useI18n();
  const name = useName();
  const { play, celebrate } = useFeedback();
  const [answers, setAnswers] = useState<Readonly<Record<string, string>>>({});

  const solved = widget.items.filter((item) => answers[item.id] === item.answer).length;

  function choose(itemId: string, option: string, answer: string) {
    if (answers[itemId] === answer) return;
    setAnswers((current) => ({ ...current, [itemId]: option }));
    if (option === answer) {
      const total = widget.items.filter((item) =>
        item.id === itemId ? true : answers[item.id] === item.answer,
      ).length;
      if (total === widget.items.length) celebrate('success');
      else play('select');
    } else {
      play('error');
    }
  }

  return (
    <div className="ix-fill">
      <p className="ix-order__prompt">
        {l(widget.prompt)} <span className="ix-fill__score">{solved} / {widget.items.length}</span>
      </p>

      {widget.items.map((item) => {
        const chosen = answers[item.id];
        const correct = chosen === item.answer;
        return (
          <div className={correct ? 'ix-gap ix-gap--correct' : 'ix-gap'} key={item.id}>
            <p className="ix-gap__sentence" lang="fr">
              {personalise(item.before, name)}
              <span className={correct ? 'ix-gap__slot ix-gap__slot--filled' : 'ix-gap__slot'}>
                {correct ? item.answer : chosen ? chosen : '…'}
              </span>
              {personalise(item.after, name)}
            </p>
            {correct ? (
              <p className="ix-gap__why">
                <IconCheck size={13} /> <Gloss text={l(item.why)} />
              </p>
            ) : (
              <div className="ix-gap__options">
                {item.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={
                      chosen === option ? 'ix-token ix-token--wrong' : 'ix-token ix-token--small'
                    }
                    onClick={() => choose(item.id, option, item.answer)}
                    lang="fr"
                  >
                    {chosen === option ? <IconX size={12} /> : null}
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------- Compréhension orale ------------------------- */

/**
 * Aligne deux suites de mots par plus longue sous-suite commune.
 *
 * Une comparaison position par position compterait faux tout le reste de
 * la phrase dès qu'un mot est sauté ; l'alignement ne pénalise que les
 * mots réellement absents ou déformés.
 */
function alignWords(expected: readonly string[], written: readonly string[]): boolean[] {
  const rows = expected.length;
  const cols = written.length;
  const table: number[][] = Array.from({ length: rows + 1 }, () => Array<number>(cols + 1).fill(0));
  for (let i = rows - 1; i >= 0; i -= 1) {
    for (let j = cols - 1; j >= 0; j -= 1) {
      table[i]![j] =
        expected[i] === written[j]
          ? (table[i + 1]![j + 1] ?? 0) + 1
          : Math.max(table[i + 1]![j] ?? 0, table[i]![j + 1] ?? 0);
    }
  }
  const matched = Array<boolean>(rows).fill(false);
  let i = 0;
  let j = 0;
  while (i < rows && j < cols) {
    if (expected[i] === written[j]) {
      matched[i] = true;
      i += 1;
      j += 1;
    } else if ((table[i + 1]?.[j] ?? 0) >= (table[i]?.[j + 1] ?? 0)) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return matched;
}

/** Prépare une phrase à la comparaison : casse, ponctuation, apostrophes. */
function dictationWords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[.,;:!?«»"“”()—–…]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 0);
}

function Listening({ widget }: { readonly widget: WidgetListening }) {
  const { l } = useI18n();
  const { play, celebrate } = useFeedback();
  const voiced = useFrenchVoice();
  const [answers, setAnswers] = useState<Readonly<Record<string, number>>>({});
  const [heard, setHeard] = useState<Readonly<Record<string, boolean>>>({});

  const solved = widget.items.filter((item) => answers[item.id] === item.answer).length;

  function say(item: WidgetListening['items'][number], rate: 'normal' | 'slow') {
    speakFrench(item.sentence, { rate });
    setHeard((current) => ({ ...current, [item.id]: true }));
  }

  function choose(itemId: string, index: number, answer: number) {
    if (answers[itemId] === answer) return;
    setAnswers((current) => ({ ...current, [itemId]: index }));
    if (index === answer) {
      const total = widget.items.filter((item) =>
        item.id === itemId ? true : answers[item.id] === item.answer,
      ).length;
      if (total === widget.items.length) celebrate('success');
      else play('success');
    } else {
      play('error');
    }
  }

  return (
    <div className="ix-listen">
      <p className="ix-order__prompt">
        {l(widget.prompt)} <span className="ix-fill__score">{solved} / {widget.items.length}</span>
      </p>
      {voiced ? null : <p className="ix__gloss">{l(D.ix.noVoice)}</p>}

      {widget.items.map((item, itemIndex) => {
        const chosen = answers[item.id];
        const correct = chosen === item.answer;
        // Sans voix française, l'exercice bascule en lecture : la phrase
        // s'affiche, la question reste la même.
        const revealed = !voiced || correct;
        return (
          <div className={correct ? 'ix-quiz ix-quiz--correct' : 'ix-quiz'} key={item.id}>
            <div className="ix-quiz__audio">
              <span className="ix-quiz__index">{itemIndex + 1}</span>
              {voiced ? (
                <>
                  <button type="button" className="btn btn--secondary btn--sm" onClick={() => say(item, 'normal')}>
                    <IconVolume size={14} /> {l(D.ix.listen)}
                  </button>
                  <button type="button" className="btn btn--ghost btn--sm" onClick={() => say(item, 'slow')}>
                    <IconTurtle size={14} /> {l(D.ix.listenSlow)}
                  </button>
                </>
              ) : null}
              {revealed ? (
                <span className="ix-quiz__sentence" lang="fr">« {item.sentence} »</span>
              ) : null}
            </div>
            <p className="ix-quiz__question">{l(item.question)}</p>
            {correct ? (
              <p className="ix-gap__why">
                <IconCheck size={13} /> <Gloss text={l(item.why)} />
              </p>
            ) : (
              <div className="ix-gap__options">
                {item.options.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    className={chosen === index ? 'ix-token ix-token--wrong' : 'ix-token ix-token--small'}
                    onClick={() => choose(item.id, index, item.answer)}
                    disabled={voiced && heard[item.id] !== true}
                  >
                    {chosen === index ? <IconX size={12} /> : null}
                    {l(option)}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------- Dictée ------------------------------- */

interface DictationState {
  readonly text: string;
  readonly checked: boolean;
  readonly revealed: boolean;
}

function Dictation({ widget }: { readonly widget: WidgetDictation }) {
  const { l } = useI18n();
  const { play, celebrate } = useFeedback();
  const voiced = useFrenchVoice();
  const [states, setStates] = useState<Readonly<Record<string, DictationState>>>({});

  function patch(id: string, changes: Partial<DictationState>) {
    setStates((current) => ({
      ...current,
      [id]: { text: '', checked: false, revealed: false, ...current[id], ...changes },
    }));
  }

  return (
    <div className="ix-dictation">
      <p className="ix-order__prompt">{l(widget.prompt)}</p>
      {voiced ? null : <p className="ix__gloss">{l(D.ix.noVoice)}</p>}

      {widget.items.map((item, index) => {
        const state = states[item.id] ?? { text: '', checked: false, revealed: false };
        const expected = dictationWords(item.sentence);
        const written = dictationWords(state.text);
        const matched = state.checked ? alignWords(expected, written) : [];
        const good = matched.filter(Boolean).length;
        const perfect = state.checked && good === expected.length && written.length === expected.length;
        const wrongCount = expected.length - good;

        return (
          <div className={perfect ? 'ix-dictee ix-dictee--done' : 'ix-dictee'} key={item.id}>
            <div className="ix-quiz__audio">
              <span className="ix-quiz__index">{index + 1}</span>
              {voiced ? (
                <>
                  <button
                    type="button"
                    className="btn btn--secondary btn--sm"
                    onClick={() => speakFrench(item.sentence, { rate: 'normal' })}
                  >
                    <IconVolume size={14} /> {l(D.ix.dictationPlay)}
                  </button>
                  <button
                    type="button"
                    className="btn btn--ghost btn--sm"
                    onClick={() => speakFrench(item.sentence, { rate: 'slow' })}
                  >
                    <IconTurtle size={14} /> {l(D.ix.listenSlow)}
                  </button>
                </>
              ) : (
                <span className="ix-quiz__sentence" lang="fr">« {item.sentence} »</span>
              )}
              <span className="ix-dictee__hint">{l(item.hint)}</span>
            </div>

            {perfect || state.revealed ? (
              <div className="ix-dictee__result">
                <p className="ix-dictee__answer" lang="fr">
                  {perfect ? <IconCheck size={14} /> : null} {item.sentence}
                </p>
                <p className="ix-gap__why">
                  {perfect ? <IconCheck size={13} /> : <IconChevronRight size={13} />}{' '}
                  {perfect ? `${l(D.ix.dictationPerfect)} — ` : ''}
                  <Gloss text={l(item.trap)} />
                </p>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  className="input ix-dictee__input"
                  lang="fr"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  placeholder={l(D.ix.dictationPlaceholder)}
                  value={state.text}
                  onChange={(event) => patch(item.id, { text: event.target.value, checked: false })}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && state.text.trim().length > 0) {
                      patch(item.id, { checked: true });
                      if (dictationWords(state.text).join(' ') === expected.join(' ')) celebrate('success');
                      else play('error');
                    }
                  }}
                />
                {state.checked ? (
                  <div className="ix-dictee__diff" aria-live="polite">
                    <p className="ix-dictee__tokens" lang="fr">
                      {expected.map((word, wordIndex) => (
                        <span
                          key={wordIndex}
                          className={matched[wordIndex] ? 'ix-word ix-word--ok' : 'ix-word ix-word--ko'}
                        >
                          {matched[wordIndex] ? word : '•'.repeat(Math.max(word.length, 2))}
                        </span>
                      ))}
                    </p>
                    <p className="ix__gloss">
                      {l(D.ix.dictationScore(good, expected.length))} · {l(D.ix.dictationClose(wrongCount))}{' '}
                      {l(D.ix.dictationLegend)}
                    </p>
                  </div>
                ) : null}
                <div className="ix-dictee__actions">
                  <button
                    type="button"
                    className="btn btn--primary btn--sm"
                    disabled={state.text.trim().length === 0}
                    onClick={() => {
                      patch(item.id, { checked: true });
                      if (dictationWords(state.text).join(' ') === expected.join(' ')) celebrate('success');
                      else play('error');
                    }}
                  >
                    <IconCheck size={14} /> {l(D.ix.dictationCheck)}
                  </button>
                  {state.checked ? (
                    <button type="button" className="btn btn--ghost btn--sm" onClick={() => patch(item.id, { revealed: true })}>
                      {l(D.ix.dictationReveal)}
                    </button>
                  ) : null}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* --------------------------- Atelier d'écriture --------------------------- */

function Writing({ widget }: { readonly widget: WidgetWriting }) {
  const { l } = useI18n();
  const name = useName();
  const { play, celebrate } = useFeedback();
  const [text, setText] = useState('');
  const [checking, setChecking] = useState(false);
  const [ticked, setTicked] = useState<ReadonlySet<string>>(new Set());
  const [modelShown, setModelShown] = useState(false);

  const words = text.split(/\s+/).filter((word) => word.length > 0).length;
  const done = ticked.size;
  const total = widget.criteria.length;

  function toggle(id: string) {
    setTicked((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
        play('toggle');
      } else {
        next.add(id);
        if (next.size === total) celebrate('success');
        else play('select');
      }
      return next;
    });
  }

  return (
    <div className="ix-writing">
      <p className="ix-order__prompt">{l(widget.prompt)}</p>
      <div className="ix-writing__brief">
        <IconPencil size={15} />
        <Gloss text={l(widget.brief)} />
      </div>

      <textarea
        className="textarea ix-writing__area"
        lang="fr"
        spellCheck={false}
        placeholder={l(D.ix.writingPlaceholder)}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <div className="ix-writing__meta">
        <span className="ix__gloss">
          {l(D.ix.writingCount(words))}
          {widget.targetWords ? ` / ~${widget.targetWords}` : ''}
        </span>
        {checking ? null : (
          <button
            type="button"
            className="btn btn--primary btn--sm"
            disabled={words === 0}
            onClick={() => {
              setChecking(true);
              play('select');
            }}
          >
            <IconCheck size={14} /> {l(D.ix.writingCheck)}
          </button>
        )}
      </div>

      {checking ? (
        <div className="ix-writing__review">
          <p className="ix-writing__review-title">
            {l(D.ix.writingChecklist)}{' '}
            <span className="ix-fill__score">
              {done === total ? l(D.ix.writingAllDone) : l(D.ix.writingDone(done, total))}
            </span>
          </p>
          <p className="ix__gloss">{l(D.ix.writingChecklistHint)}</p>
          <ul className="ix-writing__criteria">
            {widget.criteria.map((criterion) => {
              const on = ticked.has(criterion.id);
              return (
                <li key={criterion.id}>
                  <button
                    type="button"
                    className={on ? 'ix-crit ix-crit--on' : 'ix-crit'}
                    aria-pressed={on}
                    onClick={() => toggle(criterion.id)}
                  >
                    <span className="ix-crit__box">{on ? <IconCheck size={12} /> : null}</span>
                    <Gloss text={l(criterion.text)} />
                  </button>
                </li>
              );
            })}
          </ul>
          {modelShown ? (
            <div className="ix-writing__model">
              <p className="ix-writing__model-label">
                {l(D.ix.writingModelLabel)} <Listen text={personalise(widget.model, name)} />
              </p>
              <p className="ix-writing__model-text" lang="fr">{personalise(widget.model, name)}</p>
              <p className="ix__gloss"><Gloss text={l(widget.modelNote)} /></p>
            </div>
          ) : (
            <button type="button" className="btn btn--secondary btn--sm" onClick={() => setModelShown(true)}>
              <IconEar size={14} /> {l(D.ix.writingModel)}
            </button>
          )}
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
    case 'layout':
      return <Layout widget={widget} />;
    case 'order':
      return <Order widget={widget} />;
    case 'pairs':
      return <Pairs widget={widget} />;
    case 'fill':
      return <Fill widget={widget} />;
    case 'listening':
      return <Listening widget={widget} />;
    case 'dictation':
      return <Dictation widget={widget} />;
    case 'writing':
      return <Writing widget={widget} />;
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
