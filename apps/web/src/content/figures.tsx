import type { ReactNode } from 'react';
import { pick, type Locale, type LocalizedText } from '@lms/core';
import { t } from './tr';

/**
 * Illustrations pédagogiques en SVG inline.
 *
 * Aucune ressource externe : les schémas héritent des variables de thème et
 * leurs libellés suivent la langue d'interface, comme le reste du contenu.
 */

const LABEL = { fontSize: 11, fill: 'var(--text-muted)', fontFamily: 'var(--font-sans)' } as const;
const TITLE = { fontSize: 12, fill: 'var(--text)', fontWeight: 600, fontFamily: 'var(--font-sans)' } as const;
const SMALL = { fontSize: 9.5, fill: 'var(--text-muted)', fontFamily: 'var(--font-sans)' } as const;

interface FigureProps {
  readonly locale: Locale;
}

function useL(locale: Locale) {
  return (text: LocalizedText) => pick(text, locale);
}

/** Arbre de décision de l'accord du participe passé. */
function AccordTree({ locale }: FigureProps) {
  const l = useL(locale);
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label={l(t('Arbre de décision de l’accord du participe passé', 'Decision tree for past participle agreement', '过去分词配合决策树'))}>
      <rect x="228" y="10" width="184" height="34" rx="8" fill="var(--panel-2)" stroke="var(--border-strong)" />
      <text x="320" y="32" style={TITLE} textAnchor="middle">
        {l(t('Quel auxiliaire ?', 'Which auxiliary?', '用哪个助动词？'))}
      </text>

      <path d="M300 44 L150 78" stroke="var(--border-strong)" />
      <path d="M340 44 L470 78" stroke="var(--border-strong)" />
      <text x="205" y="62" style={SMALL} textAnchor="middle">être</text>
      <text x="420" y="62" style={SMALL} textAnchor="middle">avoir</text>

      <rect x="40" y="78" width="220" height="52" rx="8" fill="var(--success-soft)" stroke="var(--success)" />
      <text x="150" y="100" style={{ ...TITLE, fill: 'var(--success)' }} textAnchor="middle">
        {l(t('Accord avec le sujet', 'Agreement with the subject', '与主语配合'))}
      </text>
      <text x="150" y="118" style={SMALL} textAnchor="middle">
        Elle est partie · Elles sont venues
      </text>

      <rect x="370" y="78" width="240" height="34" rx="8" fill="var(--panel-2)" stroke="var(--border-strong)" />
      <text x="490" y="100" style={TITLE} textAnchor="middle">
        {l(t('Y a-t-il un COD ?', 'Is there a direct object?', '有直接宾语吗？'))}
      </text>

      <path d="M430 112 L360 150" stroke="var(--border-strong)" />
      <path d="M540 112 L560 150" stroke="var(--border-strong)" />
      <text x="378" y="132" style={SMALL} textAnchor="middle">{l(t('non', 'no', '没有'))}</text>
      <text x="566" y="132" style={SMALL} textAnchor="middle">{l(t('oui', 'yes', '有'))}</text>

      <rect x="250" y="150" width="216" height="52" rx="8" fill="var(--panel-2)" stroke="var(--border-strong)" />
      <text x="358" y="172" style={TITLE} textAnchor="middle">
        {l(t('Aucun accord', 'No agreement', '不配合'))}
      </text>
      <text x="358" y="190" style={SMALL} textAnchor="middle">
        Elle a téléphoné · J’ai lu ces romans
      </text>

      <rect x="480" y="150" width="150" height="34" rx="8" fill="var(--panel-2)" stroke="var(--border-strong)" />
      <text x="555" y="172" style={{ ...TITLE, fontSize: 11 }} textAnchor="middle">
        {l(t('Placé avant ?', 'Placed before?', '是否前置？'))}
      </text>

      <path d="M520 184 L470 226" stroke="var(--border-strong)" />
      <path d="M580 184 L580 226" stroke="var(--border-strong)" />
      <text x="482" y="206" style={SMALL} textAnchor="middle">{l(t('non', 'no', '否'))}</text>
      <text x="596" y="206" style={SMALL} textAnchor="middle">{l(t('oui', 'yes', '是'))}</text>

      <rect x="330" y="226" width="180" height="34" rx="8" fill="var(--panel-2)" stroke="var(--border-strong)" />
      <text x="420" y="248" style={{ ...TITLE, fontSize: 11 }} textAnchor="middle">
        {l(t('Aucun accord', 'No agreement', '不配合'))}
      </text>

      <rect x="524" y="226" width="112" height="52" rx="8" fill="var(--success-soft)" stroke="var(--success)" />
      <text x="580" y="246" style={{ ...TITLE, fontSize: 11, fill: 'var(--success)' }} textAnchor="middle">
        {l(t('Accord', 'Agreement', '需配合'))}
      </text>
      <text x="580" y="264" style={{ ...SMALL, fontSize: 8.5 }} textAnchor="middle">
        Je les ai lus
      </text>
    </svg>
  );
}

/** Les temps du passé sur une ligne du temps. */
function Timeline({ locale }: FigureProps) {
  const l = useL(locale);
  const marks = [
    { x: 90, label: t('plus-que-parfait', 'pluperfect', '愈过去时'), example: 'il était parti', note: t('avant l’autre action passée', 'before the other past action', '先于另一过去动作') },
    { x: 250, label: t('imparfait', 'imperfect', '未完成过去时'), example: 'il pleuvait', note: t('décor, durée, habitude', 'setting, duration, habit', '背景、持续、习惯') },
    { x: 400, label: t('passé composé', 'passé composé', '复合过去时'), example: 'le train est arrivé', note: t('événement ponctuel', 'one-off event', '一次性事件') },
    { x: 552, label: t('présent', 'present', '现在时'), example: 'je raconte', note: t('moment où l’on parle', 'moment of speaking', '说话的时刻') },
  ];
  return (
    <svg viewBox="0 0 640 220" role="img" aria-label={l(t('Les temps du passé sur une ligne du temps', 'Past tenses on a timeline', '时间轴上的过去时态'))}>
      <line x1="30" y1="120" x2="610" y2="120" stroke="var(--border-strong)" strokeWidth="1.5" />
      <path d="M604 114 l10 6 -10 6z" fill="var(--border-strong)" />
      {marks.map((mark, index) => (
        <g key={mark.example}>
          <circle cx={mark.x} cy="120" r="6" fill={index === 3 ? 'var(--accent)' : 'var(--panel)'} stroke="var(--accent)" strokeWidth="2" />
          <line x1={mark.x} y1="114" x2={mark.x} y2={index % 2 === 0 ? 76 : 126} stroke="var(--border-strong)" strokeDasharray="2 3" />
          <text x={mark.x} y={index % 2 === 0 ? 66 : 152} style={TITLE} textAnchor="middle">
            {l(mark.label)}
          </text>
          <text x={mark.x} y={index % 2 === 0 ? 50 : 168} style={{ ...SMALL, fontStyle: 'italic', fill: 'var(--accent)' }} textAnchor="middle">
            {mark.example}
          </text>
          <text x={mark.x} y={index % 2 === 0 ? 34 : 184} style={{ ...SMALL, fontSize: 8.5 }} textAnchor="middle">
            {l(mark.note)}
          </text>
        </g>
      ))}
      <text x="30" y="208" style={SMALL}>
        {l(t('← passé lointain', '← distant past', '← 更早的过去'))}
      </text>
      <text x="610" y="208" style={SMALL} textAnchor="end">
        {l(t('maintenant →', 'now →', '现在 →'))}
      </text>
    </svg>
  );
}

/** Les quatre modes du verbe. */
function Moods({ locale }: FigureProps) {
  const l = useL(locale);
  const moods = [
    { name: t('Indicatif', 'Indicative', '直陈式'), role: t('le fait est réel', 'the fact is real', '事实真实存在'), tenses: 'présent · imparfait · passé composé · futur', tone: 'var(--accent)' },
    { name: t('Subjonctif', 'Subjunctive', '虚拟式'), role: t('le fait est envisagé', 'the fact is envisaged', '事实只是设想'), tenses: 'présent · passé', tone: 'var(--ocean-1)' },
    { name: t('Conditionnel', 'Conditional', '条件式'), role: t('le fait dépend d’une condition', 'the fact depends on a condition', '事实取决于条件'), tenses: 'présent · passé', tone: 'var(--info)' },
    { name: t('Impératif', 'Imperative', '命令式'), role: t('le fait est demandé', 'the fact is requested', '发出请求或命令'), tenses: 'présent', tone: 'var(--success)' },
  ];
  return (
    <svg viewBox="0 0 640 250" role="img" aria-label={l(t('Les quatre modes du verbe français', 'The four moods of the French verb', '法语动词的四种语式'))}>
      {moods.map((mood, index) => {
        const y = 12 + index * 58;
        return (
          <g key={mood.tenses}>
            <rect x="20" y={y} width="600" height="48" rx="10" fill="var(--panel-2)" stroke="var(--border)" />
            <rect x="20" y={y} width="6" height="48" rx="3" fill={mood.tone} />
            <text x="44" y={y + 20} style={{ ...TITLE, fill: mood.tone }}>
              {l(mood.name)}
            </text>
            <text x="44" y={y + 37} style={LABEL}>
              {l(mood.role)}
            </text>
            <text x="610" y={y + 29} style={{ ...SMALL, fontStyle: 'italic' }} textAnchor="end">
              {mood.tenses}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** Les quatre épreuves du DELF. */
function DelfPapers({ locale }: FigureProps) {
  const l = useL(locale);
  const papers = [
    { name: t('Compréhension de l’oral', 'Listening', '听力理解'), time: t('≈ 25 min', '≈ 25 min', '约 25 分钟') },
    { name: t('Compréhension des écrits', 'Reading', '阅读理解'), time: t('35 min', '35 min', '35 分钟') },
    { name: t('Production écrite', 'Writing', '书面表达'), time: t('45 min', '45 min', '45 分钟') },
    { name: t('Production orale', 'Speaking', '口语表达'), time: t('15 min', '15 min', '15 分钟') },
  ];
  return (
    <svg viewBox="0 0 640 230" role="img" aria-label={l(t('Les quatre épreuves du DELF', 'The four DELF papers', 'DELF 的四项考试'))}>
      {papers.map((paper, index) => {
        const x = 20 + index * 152;
        return (
          <g key={paper.time.fr + index}>
            <rect x={x} y="24" width="140" height="120" rx="12" fill="var(--panel-2)" stroke="var(--border-strong)" />
            <rect x={x} y="24" width="140" height="4" rx="2" fill="var(--accent)" />
            <text x={x + 70} y="60" style={{ ...TITLE, fontSize: 22, fill: 'var(--accent)' }} textAnchor="middle">
              25
            </text>
            <text x={x + 70} y="76" style={{ ...SMALL, fontSize: 8.5 }} textAnchor="middle">
              {l(t('points', 'marks', '分'))}
            </text>
            <text x={x + 70} y="104" style={{ ...LABEL, fill: 'var(--text)' }} textAnchor="middle">
              {l(paper.name).length > 22 ? `${l(paper.name).slice(0, 21)}…` : l(paper.name)}
            </text>
            <text x={x + 70} y="124" style={SMALL} textAnchor="middle">
              {l(paper.time)}
            </text>
          </g>
        );
      })}
      <rect x="20" y="164" width="600" height="46" rx="10" fill="var(--warning-soft)" stroke="var(--warning)" />
      <text x="320" y="184" style={{ ...TITLE, fill: 'var(--warning)' }} textAnchor="middle">
        {l(t('Total 100 points — admission à partir de 50', 'Total 100 marks — pass from 50', '总分 100 分 — 50 分及格'))}
      </text>
      <text x="320" y="200" style={SMALL} textAnchor="middle">
        {l(t('note éliminatoire en dessous de 5 / 25 dans une seule épreuve', 'disqualifying below 5 / 25 in any single paper', '任何一项低于 5 / 25 即不合格'))}
      </text>
    </svg>
  );
}

/** Plan en quatre paragraphes. */
function EssayPlan({ locale }: FigureProps) {
  const l = useL(locale);
  const parts = [
    { name: t('Introduction', 'Introduction', '引言'), words: '40', detail: t('amener le sujet, poser la question, annoncer le plan', 'introduce the topic, ask the question, announce the plan', '引入话题、提出问题、宣布提纲'), h: 34 },
    { name: t('Partie 1', 'Part 1', '第一部分'), words: '60', detail: t('une idée, un argument, un exemple', 'one idea, one argument, one example', '一个观点、一条论据、一个例证'), h: 52 },
    { name: t('Partie 2', 'Part 2', '第二部分'), words: '60', detail: t('idée opposée ou complémentaire + concession', 'opposing or complementary idea + concession', '对立或互补观点 + 让步'), h: 52 },
    { name: t('Conclusion', 'Conclusion', '结论'), words: '40', detail: t('répondre à la question, puis ouvrir', 'answer the question, then open up', '回答问题，随后引申'), h: 34 },
  ];
  let y = 14;
  return (
    <svg viewBox="0 0 640 240" role="img" aria-label={l(t('Plan en quatre paragraphes', 'Four-paragraph plan', '四段式提纲'))}>
      {parts.map((part) => {
        const top = y;
        y += part.h + 10;
        return (
          <g key={part.words + part.name.fr}>
            <rect x="20" y={top} width="600" height={part.h} rx="8" fill="var(--panel-2)" stroke="var(--border)" />
            <rect x="20" y={top} width="5" height={part.h} rx="2.5" fill="var(--accent)" />
            <text x="42" y={top + 21} style={TITLE}>
              {l(part.name)}
            </text>
            <text x="150" y={top + 21} style={LABEL}>
              {l(part.detail)}
            </text>
            <text x="606" y={top + 21} style={{ ...SMALL, fill: 'var(--accent)' }} textAnchor="end">
              ≈ {part.words} {l(t('mots', 'words', '词'))}
            </text>
          </g>
        );
      })}
      <text x="320" y="232" style={SMALL} textAnchor="middle">
        {l(t('Total ≈ 200 mots pour une consigne à 160 : la marge sert aux connecteurs.', 'Total ≈ 200 words for a 160-word task: the margin goes to connectors.', '总计约 200 词以应对 160 词的要求：余量留给连接词。'))}
      </text>
    </svg>
  );
}

/** Circuit de la synthèse C1. */
function SynthesisFlow({ locale }: FigureProps) {
  const l = useL(locale);
  const steps = [
    { name: t('Lecture active', 'Active reading', '精读'), detail: t('une couleur par idée', 'one colour per idea', '按观点标色'), time: '30 min' },
    { name: t('Tableau croisé', 'Cross-reference grid', '交叉表'), detail: t('idées × documents', 'ideas × documents', '观点 × 文献'), time: '20 min' },
    { name: t('Plan', 'Plan', '提纲'), detail: t('consensus puis divergences', 'consensus then divergences', '先共识后分歧'), time: '10 min' },
    { name: t('Rédaction', 'Writing', '写作'), detail: t('reformuler, jamais citer', 'reformulate, never quote', '改写，绝不引用'), time: '50 min' },
  ];
  return (
    <svg viewBox="0 0 640 200" role="img" aria-label={l(t('Circuit de la synthèse de documents', 'Document synthesis workflow', '文献综述流程'))}>
      {steps.map((step, index) => {
        const x = 18 + index * 158;
        return (
          <g key={step.time + index}>
            <rect x={x} y="42" width="132" height="86" rx="12" fill="var(--panel-2)" stroke="var(--border-strong)" />
            <circle cx={x + 24} cy="66" r="12" fill="var(--accent-soft)" stroke="var(--accent-border)" />
            <text x={x + 24} y="70" style={{ ...TITLE, fontSize: 11, fill: 'var(--accent)' }} textAnchor="middle">
              {index + 1}
            </text>
            <text x={x + 44} y="70" style={{ ...TITLE, fontSize: 11 }}>
              {step.time}
            </text>
            <text x={x + 16} y="96" style={{ ...LABEL, fill: 'var(--text)' }}>
              {l(step.name)}
            </text>
            <text x={x + 16} y="112" style={{ ...SMALL, fontSize: 8.5 }}>
              {l(step.detail)}
            </text>
            {index < steps.length - 1 ? (
              <path d={`M${x + 136} 85 l14 0 m-5 -4 l5 4 -5 4`} stroke="var(--accent)" strokeWidth="1.6" fill="none" />
            ) : null}
          </g>
        );
      })}
      <rect x="18" y="146" width="604" height="38" rx="10" fill="var(--danger-soft)" stroke="var(--danger)" />
      <text x="320" y="170" style={{ ...TITLE, fill: 'var(--danger)' }} textAnchor="middle">
        {l(t('Jamais d’avis personnel · jamais de citation · jamais document par document', 'Never a personal opinion · never a quotation · never document by document', '绝不表达个人观点 · 绝不引用原文 · 绝不逐篇分述'))}
      </text>
    </svg>
  );
}

/** Échelle CECRL et position des parcours. */
function CefrScale({ locale }: FigureProps) {
  const l = useL(locale);
  const levels = [
    { code: 'A1', h: 26, label: t('découverte', 'breakthrough', '入门') },
    { code: 'A2', h: 44, label: t('survie', 'waystage', '基础') },
    { code: 'B1', h: 68, label: t('seuil', 'threshold', '门槛') },
    { code: 'B2', h: 96, label: t('avancé', 'vantage', '进阶') },
    { code: 'C1', h: 124, label: t('autonome', 'effective', '熟练') },
    { code: 'C2', h: 152, label: t('maîtrise', 'mastery', '精通') },
  ];
  return (
    <svg viewBox="0 0 640 220" role="img" aria-label={l(t('Échelle des niveaux du CECRL', 'CEFR level scale', 'CEFR 等级量表'))}>
      {levels.map((level, index) => {
        const x = 40 + index * 96;
        const y = 176 - level.h;
        const covered = true;
        return (
          <g key={level.code}>
            <rect
              x={x}
              y={y}
              width="70"
              height={level.h}
              rx="8"
              fill={covered ? 'var(--accent-soft)' : 'var(--panel-2)'}
              stroke={covered ? 'var(--accent-border)' : 'var(--border)'}
            />
            <text x={x + 35} y={y + 22} style={{ ...TITLE, fontSize: 14, fill: covered ? 'var(--accent)' : 'var(--text-muted)' }} textAnchor="middle">
              {level.code}
            </text>
            <text x={x + 35} y="194" style={SMALL} textAnchor="middle">
              {l(level.label)}
            </text>
          </g>
        );
      })}
      <line x1="30" y1="178" x2="620" y2="178" stroke="var(--border-strong)" />
      <text x="30" y="26" style={TITLE}>
        {l(t('Le catalogue couvre les six niveaux, du débutant à la maîtrise', 'The catalogue covers all six levels, from beginner to mastery', '课程目录覆盖全部六个级别，从零基础到精通'))}
      </text>
      <text x="30" y="212" style={SMALL}>
        {l(t('Trois cours par niveau, du premier mot à la maîtrise stylistique.', 'Three courses per level, from the first word to stylistic mastery.', '每个级别三门课程，从第一个单词到文体驾驭。'))}
      </text>
    </svg>
  );
}

const FIGURES: Readonly<Record<string, (props: FigureProps) => ReactNode>> = {
  'accord-arbre': AccordTree,
  'ligne-temps': Timeline,
  'modes-temps': Moods,
  'epreuves-delf': DelfPapers,
  'plan-essai': EssayPlan,
  'synthese-c1': SynthesisFlow,
  'cecrl-echelle': CefrScale,
};

export function Figure({ figureId, locale }: { readonly figureId: string; readonly locale: Locale }): ReactNode {
  const Component = FIGURES[figureId];
  return Component ? <Component locale={locale} /> : null;
}
