import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_c2_stylistique';

export const c2StylistiqueCourse: Course = {
  id: ID,
  slug: 'c2-stylistique',
  level: 'C2',
  accentFrom: '#c4b5fd',
  accentTo: '#1e3a8a',
  status: 'published',
  title: t('Le style : rythme, figures, ironie', 'Style: rhythm, figures, irony', '文体：节奏、修辞、反讽'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Au C2, deux phrases peuvent dire la même chose et ne pas produire le même effet. Voici ce qui fait cette différence : la longueur des groupes, la place des mots, et ce qu’on laisse entendre sans le dire.',
    'At C2, two sentences can say the same thing and not produce the same effect. Here is what makes that difference: the length of the groups, the placing of words, and what you imply without saying it.',
    '到了 C2，两句话可以意思相同、效果迥异。造成差异的是：意群的长短、词语的位置，以及不说出口的言外之意。',
  ),
  tags: [t('Style', 'Style', '文体'), t('Analyse', 'Analysis', '分析')],
  modules: [
    {
      id: 'mod_c2st_1',
      courseId: ID,
      title: t('Ce qui fait l’effet d’une phrase', 'What creates the effect of a sentence', '句子效果的来源'),
      summary: t(
        'Le rythme, la figure, puis l’implicite.',
        'Rhythm, then figure, then implication.',
        '先节奏，再修辞，最后是言外之意。',
      ),
      lessons: [
        {
          id: 'les_c2st_1',
          moduleId: 'mod_c2st_1',
          kind: 'text',
          durationMin: 12,
          title: t('Le rythme de la phrase', 'The rhythm of the sentence', '句子的节奏'),
          summary: t(
            'Pourquoi une phrase qui s’allonge apaise, et une phrase qui raccourcit frappe.',
            'Why a lengthening sentence soothes, and a shortening one strikes.',
            '为什么句子越拉越长会让人平静，越缩越短则如重击。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🎵',
              text: t(
                'La phrase française se découpe en groupes de souffle. Leur longueur relative fait tout l’effet : trois groupes de plus en plus longs ouvrent et apaisent, trois groupes de plus en plus courts serrent et concluent.',
                'A French sentence breaks into breath groups. Their relative length does all the work: three groups getting longer open things up and soothe, three getting shorter tighten and conclude.',
                '法语句子会切分成若干气息组。它们的相对长短决定一切：三个逐渐变长的意群使人舒展平静，三个逐渐变短的意群则收紧并给出结论。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎚️',
              title: t('Trois rythmes, trois effets', 'Three rhythms, three effects', '三种节奏，三种效果'),
              hint: t(
                'Lisez chaque exemple à voix haute, {prenom} : l’effet s’entend plus qu’il ne se démontre.',
                'Read each example aloud, {prenom}: the effect is heard rather than demonstrated.',
                '{prenom}，把每个例句读出声：效果靠听，而不靠讲。',
              ),
              widget: {
                kind: 'switcher',
                steps: [
                  {
                    id: 'y1',
                    label: t('La phrase qui s’ouvre', 'The opening sentence', '渐开的句子'),
                    headline: t('Groupes de plus en plus longs', 'Groups getting longer', '意群越来越长'),
                    example: 'Il partit, sans se retourner, vers la ville qu’il ne reverrait jamais.',
                    gloss: t('Deux mots, quatre mots, huit mots. L’ampleur croissante donne une impression d’espace et de calme.', 'Two words, four words, eight words. The growing span gives an impression of space and calm.', '两个词、四个词、八个词。逐渐铺开的幅度带来空间感与平静。'),
                  },
                  {
                    id: 'y2',
                    label: t('La phrase qui se ferme', 'The closing sentence', '渐收的句子'),
                    headline: t('Groupes de plus en plus courts', 'Groups getting shorter', '意群越来越短'),
                    example: 'Il avait tout préparé, tout prévu, tout perdu.',
                    gloss: t('L’inverse exact : la contraction produit un effet de chute, souvent ironique ou tragique.', 'The exact opposite: the contraction produces a falling effect, often ironic or tragic.', '恰好相反：收缩产生下坠感，常带反讽或悲剧色彩。'),
                  },
                  {
                    id: 'y3',
                    label: t('La phrase brisée', 'The broken sentence', '断裂的句子'),
                    headline: t('Une phrase très courte après une longue', 'A very short sentence after a long one', '长句之后接一个极短句'),
                    example: 'On avait promis des moyens, des délais, un accompagnement, une réforme complète du dispositif. Rien n’est venu.',
                    gloss: t('Le contraste fait toute la force. C’est le procédé le plus utilisé en éditorial et en plaidoirie.', 'The contrast does all the work. It is the most used device in editorials and in courtroom pleading.', '全部力量来自反差。这是社论和法庭辩护中最常用的手法。'),
                  },
                ],
              },
            },
            {
              type: 'quote',
              text: t(
                'Ce qui se conçoit bien s’énonce clairement, et les mots pour le dire arrivent aisément.',
                'What is well conceived is clearly stated, and the words to say it come easily.',
                '想得清楚，说得就明白，表达它的词语也会自然而来。',
              ),
              source: t('Nicolas Boileau, Art poétique', 'Nicolas Boileau, Art poétique', '尼古拉·布瓦洛《诗艺》'),
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🧭',
              title: t('Le vers de Boileau applique sa propre règle', 'Boileau’s line applies its own rule', '布瓦洛这句诗自证其理'),
              text: t(
                'Deux hémistiches équilibrés, aucune inversion, aucun mot rare : la phrase fait ce qu’elle dit. C’est exactement ce qu’un correcteur de C2 attend d’un commentaire — montrer que la forme travaille avec le sens.',
                'Two balanced half-lines, no inversion, no rare word: the sentence does what it says. That is exactly what a C2 marker expects from a commentary — showing that form works with meaning.',
                '两个平衡的半句、没有倒装、没有生僻词：这句话做到了它所说的。这正是 C2 阅卷人对文本评析的期待——证明形式与意义在协同工作。',
              ),
            },
          ],
        },
        {
          id: 'les_c2st_2',
          moduleId: 'mod_c2st_1',
          kind: 'text',
          durationMin: 12,
          title: t('Les figures qu’on rencontre vraiment', 'The figures you actually meet', '真正会遇到的修辞格'),
          summary: t(
            'Six procédés qui reviennent dans tous les textes, et à quoi ils servent.',
            'Six devices that recur in every text, and what they are for.',
            '六种在所有文本里反复出现的手法，以及它们的用处。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🎭',
              text: t(
                'Nommer une figure ne suffit pas : un commentaire n’a de valeur que s’il dit quel effet elle produit ici. Voici les six qu’on rencontre le plus souvent, avec l’effet à mentionner à chaque fois.',
                'Naming a figure is not enough: a commentary is only worth something if it says what effect the figure produces here. Here are the six you meet most often, with the effect to mention each time.',
                '光说出修辞格的名称没有用：评析只有指出它在此处产生了什么效果才有价值。以下是最常遇到的六种，以及每种应指出的效果。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔗',
              title: t('La figure et son effet', 'The figure and its effect', '修辞格及其效果'),
              hint: t('Reliez chaque procédé à ce qu’il produit sur le lecteur.', 'Match each device to what it does to the reader.', '把每种手法与它对读者的作用配对。'),
              widget: {
                kind: 'pairs',
                prompt: t('Ce procédé sert à…', 'This device serves to…', '这种手法用于……'),
                pairs: [
                  { id: 'g1', left: 'la litote — « ce n’est pas mauvais »', right: t('dire beaucoup en affirmant peu ; c’est une politesse et une force', 'say a lot by claiming little; it is both politeness and force', '以少言多；既是礼貌，也是力量') },
                  { id: 'g2', left: 'l’anaphore — répéter en tête de phrase', right: t('marteler une idée et donner un rythme de discours', 'hammer an idea home and give the rhythm of a speech', '反复敲打一个观点，赋予演讲式的节奏') },
                  { id: 'g3', left: 'l’antithèse — deux termes opposés', right: t('rendre visible une tension, souvent dans une seule phrase', 'make a tension visible, often within a single sentence', '让张力可见，常常就在一句话之内') },
                  { id: 'g4', left: 'la métonymie — « boire un verre »', right: t('nommer par un détail proche, ce qui rend la langue plus concrète', 'name by a nearby detail, which makes the language more concrete', '用相邻的细节指代整体，使语言更具体') },
                  { id: 'g5', left: 'l’hyperbole — « mille fois »', right: t('grossir volontairement, souvent pour amuser ou dénoncer', 'deliberately magnify, often to amuse or to denounce', '有意夸大，常为逗趣或揭露') },
                  { id: 'g6', left: 'la gradation — de plus en plus fort', right: t('conduire le lecteur vers un sommet, puis le lâcher', 'lead the reader to a peak, then let go', '把读者引向高峰，再放手') },
                ],
              },
            },
            {
              type: 'examples',
              emoji: '📚',
              title: t('La même idée, quatre figures', 'The same idea, four figures', '同一想法，四种修辞'),
              items: [
                {
                  fr: 'Ce résultat n’est pas négligeable.',
                  gloss: t(
                    'Litote : on nie le contraire pour affirmer avec force sans avoir l’air d’insister. Très fréquent dans la presse sérieuse.',
                    'Litotes: you deny the opposite to assert strongly without seeming to insist. Very frequent in the serious press.',
                    '曲言法：否定反面以强力肯定，却显得不着力。在严肃报刊中极为常见。',
                  ),
                },
                {
                  fr: 'Rien n’a bougé. Rien n’a changé. Rien n’a été tenté.',
                  gloss: t(
                    'Anaphore : la répétition en tête de phrase transforme un constat en accusation.',
                    'Anaphora: repeating at the head of each clause turns an observation into an accusation.',
                    '首语重复：在每句开头重复，把陈述变成指控。',
                  ),
                },
                {
                  fr: 'Beaucoup de promesses, peu d’actes.',
                  gloss: t(
                    'Antithèse : deux groupes symétriques et opposés. L’absence de verbe accentue encore le contraste.',
                    'Antithesis: two symmetrical, opposed groups. The absence of a verb sharpens the contrast further.',
                    '对照：两个对称而相反的意群。没有动词进一步强化了反差。',
                  ),
                },
                {
                  fr: 'Une gêne, puis une inquiétude, puis une panique.',
                  gloss: t(
                    'Gradation : chaque terme est plus fort que le précédent. Le lecteur suit la montée sans qu’on la lui explique.',
                    'Gradation: each term is stronger than the last. The reader follows the rise without having it explained.',
                    '递进：每个词都比前一个更强。读者自行跟上这层层升级，无需解释。',
                  ),
                },
              ],
            },
          ],
        },
        {
          id: 'les_c2st_3',
          moduleId: 'mod_c2st_1',
          kind: 'text',
          durationMin: 11,
          title: t('L’ironie et le second degré', 'Irony and saying the opposite', '反讽与话中有话'),
          summary: t(
            'Comment le français signale qu’il ne pense pas ce qu’il écrit.',
            'How French signals that it does not mean what it writes.',
            '法语如何暗示自己并非字面所写的意思。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🙃',
              text: t(
                'L’ironie française passe rarement par le ton : elle est dans le texte. Un mot trop élogieux, un guillemet isolé, un adverbe déplacé — le lecteur est censé faire le reste. C’est le dernier obstacle avant la vraie maîtrise.',
                'French irony rarely travels through tone: it sits in the text. One word too flattering, a lone pair of quotation marks, a misplaced adverb — the reader is expected to do the rest. It is the last obstacle before real mastery.',
                '法语的反讽很少靠语气传达，而是藏在文字里：一个过誉的词、一对孤零零的引号、一个位置错开的副词——其余的要靠读者自己领会。这是通往真正精通前的最后一道坎。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔬',
              title: t('Repérer les signaux d’ironie', 'Spotting the signals of irony', '识别反讽的信号'),
              hint: t('Chaque segment souligné contient un indice.', 'Each underlined segment holds a clue.', '每个带下划线的部分都藏着线索。'),
              widget: {
                kind: 'sentence',
                segments: [
                  { text: 'Le rapport, ' },
                  {
                    text: 'remarquable de concision',
                    role: t('L’éloge excessif', 'The excessive praise', '过度的褒扬'),
                    detail: t('Un compliment trop appuyé pour un document administratif. L’exagération est le premier signal de l’ironie.', 'A compliment far too emphatic for an administrative document. Overstatement is the first signal of irony.', '对一份行政文件而言，这句恭维过于用力。夸张是反讽的第一个信号。'),
                  },
                  { text: ', occupe ' },
                  {
                    text: 'quatre cents pages',
                    role: t('Le fait qui contredit l’éloge', 'The fact that contradicts the praise', '与褒扬相矛盾的事实'),
                    detail: t('Le chiffre dément l’adjectif : la concision annoncée n’existe pas. L’ironie naît de cet écart, jamais du ton.', 'The figure belies the adjective: the announced concision does not exist. Irony comes from that gap, never from tone.', '数字戳穿了形容词：所谓简洁并不存在。反讽来自这道落差，而非语气。'),
                  },
                  { text: ' et conclut, ' },
                  {
                    text: '« prudemment »',
                    role: t('Les guillemets de distance', 'Scare quotes', '表示距离的引号'),
                    detail: t('Les guillemets autour d’un seul mot signifient : je reprends ce mot, mais je ne l’assume pas. C’est le signal le plus net.', 'Quotation marks around a single word mean: I am borrowing this word, but I do not stand by it. It is the clearest signal.', '给单个词加引号意味着：我借用这个词，但我不认同它。这是最明确的信号。'),
                  },
                  { text: ', qu’il faudra poursuivre la réflexion.' },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '⚠️',
              title: t('Les guillemets isolés changent le sens', 'Lone quotation marks change the meaning', '孤立的引号会改变意思'),
              text: t(
                'Écrire que la réforme a été menée « en concertation » signifie exactement le contraire. Ce procédé est constant dans la presse ; l’ignorer, c’est lire un éditorial comme un communiqué.',
                'Writing that the reform was carried out “in consultation” means precisely the opposite. This device is constant in the press; missing it means reading an editorial as if it were a press release.',
                '写下改革是在“协商中”进行的，意思恰恰相反。这一手法在报刊中随处可见；忽略它，就会把社论当成通稿来读。',
              ),
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('Ironique ou sincère ?', 'Ironic or sincere?', '反讽还是真诚？'),
              hint: t('Cherchez le mot qui ne colle pas avec le reste.', 'Look for the word that does not fit the rest.', '找出与其余部分格格不入的那个词。'),
              widget: {
                kind: 'fill',
                prompt: t('Complétez pour rendre la phrase ironique :', 'Complete to make the sentence ironic:', '补全，使句子带上反讽：'),
                items: [
                  {
                    id: 'z1',
                    before: 'La réunion, d’une',
                    after: 'efficacité, a duré six heures.',
                    options: ['réelle', 'rare', 'certaine'],
                    answer: 'rare',
                    why: t('« D’une rare efficacité » suivi de six heures : l’éloge superlatif se heurte au fait. C’est le mécanisme même de l’ironie.', '“D’une rare efficacité” followed by six hours: the superlative praise collides with the fact. That is the very mechanism of irony.', '“d’une rare efficacité” 后面跟着六小时：最高级的褒扬与事实相撞。这正是反讽的机制。'),
                  },
                  {
                    id: 'z2',
                    before: 'Le dossier a été traité avec',
                    after: 'diligence que l’on sait.',
                    options: ['la', 'une', 'toute'],
                    answer: 'la',
                    why: t('« La diligence que l’on sait » sous-entend que tout le monde connaît la lenteur du service. Le sous-entendu tient à l’article défini.', '“La diligence que l’on sait” implies everyone knows how slow the service is. The implication rests on the definite article.', '“la diligence que l’on sait” 暗示人人都知道这个部门有多慢。这层暗示全靠定冠词。'),
                  },
                  {
                    id: 'z3',
                    before: 'Il nous a',
                    after: 'expliqué que la décision ne dépendait pas de lui.',
                    options: ['patiemment', 'brièvement', 'clairement'],
                    answer: 'patiemment',
                    why: t('« Patiemment » suggère qu’il l’a répété souvent, donc que l’argument est une esquive habituelle.', '“Patiemment” suggests he has repeated it often, so that the argument is a habitual dodge.', '“patiemment” 暗示他已重复多次，也就是说这套说辞是惯用的推脱。'),
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'mod_c2st_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur le rythme, les figures et l’ironie.', 'Six questions on rhythm, figures and irony.', '六道题，考查节奏、修辞与反讽。'),
      lessons: [
        {
          id: 'les_c2st_q',
          moduleId: 'mod_c2st_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_c2_stylistique',
          title: t('Quiz — Le style', 'Quiz — Style', '测验 — 文体'),
          summary: t('6 questions d’analyse stylistique.', '6 questions of stylistic analysis.', '6 道文体分析题。'),
        },
      ],
    },
  ],
};
