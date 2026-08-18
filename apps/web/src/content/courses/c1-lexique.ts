import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_c1_lexique';

export const c1LexiqueCourse: Course = {
  id: ID,
  slug: 'c1-lexique',
  level: 'C1',
  accentFrom: '#a5b4fc',
  accentTo: '#1e40af',
  status: 'published',
  title: t('Le mot juste', 'The right word', '用词精准'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'À ce niveau, l’erreur n’est plus grammaticale : c’est le mot presque juste. Nuances entre synonymes, mots qui vont ensemble, faux amis tenaces — de quoi passer du correct à l’exact.',
    'At this level the mistake is no longer grammatical: it is the almost-right word. Shades between synonyms, words that go together, stubborn false friends — what it takes to move from correct to exact.',
    '到了这个级别，错误不再出在语法，而是“差不多对”的那个词。近义词的细微差别、固定搭配、顽固的假朋友——这些决定了你是“正确”还是“精准”。',
  ),
  tags: [t('Lexique', 'Vocabulary', '词汇'), t('Précision', 'Precision', '精准度')],
  modules: [
    {
      id: 'mod_c1lx_1',
      courseId: ID,
      title: t('Du correct à l’exact', 'From correct to exact', '从正确到精准'),
      summary: t(
        'Trois sources d’imprécision, et comment les corriger chacune.',
        'Three sources of imprecision, and how to fix each one.',
        '三种不精准的来源，以及各自的纠正办法。',
      ),
      lessons: [
        {
          id: 'les_c1lx_1',
          moduleId: 'mod_c1lx_1',
          kind: 'text',
          durationMin: 12,
          title: t('Les synonymes ne le sont jamais tout à fait', 'Synonyms are never quite synonyms', '近义词从来都不完全相同'),
          summary: t(
            'Quatre mots pour une idée, quatre emplois différents.',
            'Four words for one idea, four different uses.',
            '一个意思四个词，四种不同用法。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🔍',
              text: t(
                'Un dictionnaire bilingue donne quatre traductions pour un mot, sans dire laquelle employer. La différence n’est presque jamais dans le sens : elle est dans le registre, l’intensité, ou ce que le mot laisse entendre.',
                'A bilingual dictionary gives four translations for a word without saying which to use. The difference is almost never in the meaning: it lies in the register, the intensity, or what the word implies.',
                '双语词典给出一个词的四种译法，却不告诉你该用哪个。差别几乎从不在词义本身，而在语体、强度，或这个词的言外之意。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎚️',
              title: t('Quatre façons de dire qu’un problème existe', 'Four ways of saying a problem exists', '说“存在问题”的四种方式'),
              hint: t(
                'Glissez d’un cran à l’autre, {prenom} : l’intensité monte.',
                'Slide from step to step, {prenom}: the intensity rises.',
                '{prenom}，逐档滑动：强度在上升。',
              ),
              widget: {
                kind: 'switcher',
                steps: [
                  {
                    id: 'i1',
                    label: t('un souci', 'un souci', 'un souci'),
                    headline: t('Familier, minimisant', 'Colloquial, playing it down', '口语，淡化处理'),
                    example: 'On a eu un petit souci avec la livraison.',
                    gloss: t('Employé pour rassurer. À l’écrit professionnel, il fait léger, voire désinvolte.', 'Used to reassure. In professional writing it sounds light, even offhand.', '用来安抚对方。在职场书面语中显得轻描淡写，甚至有些随意。'),
                  },
                  {
                    id: 'i2',
                    label: t('un problème', 'un problème', 'un problème'),
                    headline: t('Neutre, passe-partout', 'Neutral, all-purpose', '中性、通用'),
                    example: 'Nous avons rencontré un problème technique.',
                    gloss: t('Le mot par défaut. Correct partout, mais il ne dit rien de la gravité.', 'The default word. Correct everywhere, but it says nothing about seriousness.', '默认用词。哪里都能用，但完全没有透露严重程度。'),
                  },
                  {
                    id: 'i3',
                    label: t('une difficulté', 'une difficulté', 'une difficulté'),
                    headline: t('Soutenu, orienté vers la solution', 'Formal, solution-oriented', '正式，指向解决方案'),
                    example: 'Le projet se heurte à des difficultés de financement.',
                    gloss: t('Suggère un obstacle qu’on va franchir. C’est le mot des rapports et des demandes de subvention.', 'Suggests an obstacle you are going to get past. This is the word of reports and grant applications.', '暗示这是即将被跨越的障碍。这是报告和经费申请里的用词。'),
                  },
                  {
                    id: 'i4',
                    label: t('un écueil', 'un écueil', 'un écueil'),
                    headline: t('Littéraire, image du rocher sous l’eau', 'Literary, the image of a rock under water', '文雅，暗礁的意象'),
                    example: 'Le principal écueil de cette méthode reste sa lourdeur.',
                    gloss: t('Un danger qu’on ne voit pas venir. Très efficace à l’écrit, ridicule dans une conversation.', 'A danger you do not see coming. Very effective in writing, ridiculous in conversation.', '一种看不见的危险。用于书面极为有力，用于对话则很滑稽。'),
                  },
                ],
              },
            },
            {
              type: 'examples',
              emoji: '⚖️',
              title: t('Trois paires que les dictionnaires confondent', 'Three pairs dictionaries confuse', '词典常混淆的三对词'),
              items: [
                {
                  fr: 'Il a fini son travail. / Il a achevé son roman.',
                  gloss: t(
                    '« Finir » convient à toute tâche. « Achever » suppose une œuvre longue, et un peu de solennité.',
                    '“Finir” suits any task. “Achever” implies a long piece of work, and a touch of solemnity.',
                    '“finir” 适用于任何任务。“achever” 则暗示一项长期作品，还带点庄重感。',
                  ),
                },
                {
                  fr: 'Une preuve évidente. / Un indice troublant.',
                  gloss: t(
                    'La preuve établit ; l’indice suggère seulement. Les confondre change la force de tout un raisonnement.',
                    'A preuve establishes; an indice merely suggests. Confusing them changes the force of a whole argument.',
                    'preuve 是确证，indice 只是提示。混用会改变整个论证的力度。',
                  ),
                },
                {
                  fr: 'Un problème important. / Un problème considérable.',
                  gloss: t(
                    '« Important » parle de l’enjeu ; « considérable » parle de la taille. Un détail peut être important sans être considérable.',
                    '“Important” speaks of the stakes; “considérable” speaks of size. A detail can be important without being considérable.',
                    '“important” 讲的是重要性，“considérable” 讲的是规模。一个细节可以很重要，却算不上巨大。',
                  ),
                },
              ],
            },
          ],
        },
        {
          id: 'les_c1lx_2',
          moduleId: 'mod_c1lx_1',
          kind: 'text',
          durationMin: 11,
          title: t('Les mots qui vont ensemble', 'Words that go together', '固定搭配'),
          summary: t(
            'Pourquoi on « prend » une décision et on « pousse » un cri.',
            'Why you “take” a decision and “push” a cry in French.',
            '为什么法语里决定要“拿”，喊叫要“推”。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🧲',
              text: t(
                'Chaque langue associe ses verbes et ses noms à sa façon, sans logique transposable. Ces couples s’apprennent ensemble, comme un seul mot : c’est le travail lexical le plus rentable à ce niveau.',
                'Every language pairs its verbs and nouns in its own way, with no logic you can transpose. These couples are learned as a single unit: it is the most profitable vocabulary work at this level.',
                '每种语言都以自己的方式搭配动词和名词，其中的逻辑无法移植。这些搭配要作为一个整体来记：这是这个阶段最划算的词汇功课。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎛️',
              title: t('Quel verbe pour quel nom ?', 'Which verb for which noun?', '哪个动词配哪个名词？'),
              hint: t('Croisez le nom et le verbe : la case dit si le couple existe.', 'Cross the noun with the verb: the cell says whether the pair exists.', '把名词与动词交叉：格子会告诉你这个搭配是否成立。'),
              widget: {
                kind: 'matrix',
                rowsLabel: t('Le nom', 'The noun', '名词'),
                columnsLabel: t('Le verbe attendu', 'The expected verb', '应搭配的动词'),
                rows: [
                  { id: 'r1', label: t('une décision', 'a decision', '决定') },
                  { id: 'r2', label: t('un risque', 'a risk', '风险') },
                  { id: 'r3', label: t('une erreur', 'a mistake', '错误') },
                  { id: 'r4', label: t('un objectif', 'a goal', '目标') },
                ],
                columns: [
                  { id: 'c1', label: t('Le verbe français', 'The French verb', '法语动词') },
                  { id: 'c2', label: t('L’erreur fréquente', 'The frequent mistake', '常见错误') },
                ],
                cells: [
                  { row: 'r1', column: 'c1', answer: 'prendre', example: 'prendre une décision', gloss: t('On prend une décision, on la prend seul ou à plusieurs. Le verbe ne change jamais.', 'You take a decision, alone or together. The verb never changes.', '决定是“拿”的，一个人或多人都一样。动词从不改变。') },
                  { row: 'r1', column: 'c2', answer: 'faire une décision', example: 'faire une décision', gloss: t('Calque de l’anglais. Inexistant en français, et immédiatement repéré.', 'A calque from English. Non-existent in French, and spotted at once.', '英语直译。法语中不存在，且一眼就会被识破。') },
                  { row: 'r2', column: 'c1', answer: 'courir', example: 'courir un risque', gloss: t('On court un risque, comme on courrait vers un danger. On peut aussi prendre un risque, volontairement.', 'You run a risk, as you would run towards a danger. You can also take a risk, deliberately.', '风险是“跑”的，像朝危险奔去。也可以说 prendre un risque，表示主动冒险。') },
                  { row: 'r2', column: 'c2', answer: 'avoir un risque', example: 'avoir un risque', gloss: t('On dit « il y a un risque », mais jamais « j’ai un risque ».', 'You say “il y a un risque”, but never “j’ai un risque”.', '可以说 “il y a un risque”，但绝不说 “j’ai un risque”。') },
                  { row: 'r3', column: 'c1', answer: 'commettre', example: 'commettre une erreur', gloss: t('Registre soutenu. À l’oral, « faire une erreur » passe très bien.', 'Formal register. In speech, “faire une erreur” is perfectly fine.', '正式语体。口语中说 “faire une erreur” 完全没问题。') },
                  { row: 'r3', column: 'c2', answer: 'prendre une erreur', example: 'prendre une erreur', gloss: t('N’existe pas. Le verbe prendre est réservé à la décision, au risque, au rendez-vous.', 'Does not exist. The verb prendre is reserved for decisions, risks and appointments.', '不存在。动词 prendre 只用于决定、风险和约会。') },
                  { row: 'r4', column: 'c1', answer: 'atteindre / se fixer', example: 'se fixer un objectif, puis l’atteindre', gloss: t('On se fixe un objectif au départ, on l’atteint à l’arrivée. Deux verbes, deux moments.', 'You set yourself a goal at the start and reach it at the end. Two verbs, two moments.', '一开始 se fixer un objectif，最后 atteindre。两个动词，两个时刻。') },
                  { row: 'r4', column: 'c2', answer: 'arriver un objectif', example: 'arriver un objectif', gloss: t('Impossible : arriver ne prend jamais de complément direct.', 'Impossible: arriver never takes a direct object.', '不可能：arriver 从不带直接宾语。') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '💡',
              title: t('Notez le couple, jamais le mot seul', 'Note the pair, never the word alone', '记搭配，不要只记单词'),
              text: t(
                'Un carnet de vocabulaire efficace ne contient pas « décision ». Il contient « prendre une décision difficile ». Le verbe et l’adjectif s’apprennent en même temps que le nom, et ressortent ensemble à l’oral.',
                'An effective vocabulary notebook does not contain “décision”. It contains “prendre une décision difficile”. The verb and the adjective are learned along with the noun, and come back out together in speech.',
                '高效的词汇本里不该只写 “décision”，而该写 “prendre une décision difficile”。动词和形容词与名词一起记住，说话时也会一起冒出来。',
              ),
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('Complétez le couple', 'Complete the pair', '补全搭配'),
              hint: t('Un seul verbe est possible dans chaque phrase.', 'Only one verb works in each sentence.', '每句只有一个动词说得通。'),
              widget: {
                kind: 'fill',
                prompt: t('Le verbe qui va avec :', 'The verb that goes with it:', '与之搭配的动词：'),
                items: [
                  {
                    id: 'c1',
                    before: 'Il faudra',
                    after: 'des mesures avant la fin du mois.',
                    options: ['prendre', 'faire', 'donner'],
                    answer: 'prendre',
                    why: t('On prend des mesures, comme on prend une décision. C’est l’expression consacrée de l’administration.', 'You take measures, as you take a decision. It is the set phrase of the administration.', '措施是“拿”的，和决定一样。这是行政语言的固定说法。'),
                  },
                  {
                    id: 'c2',
                    before: 'Cette réforme va',
                    after: 'de vives critiques.',
                    options: ['susciter', 'produire', 'donner'],
                    answer: 'susciter',
                    why: t('« Susciter » va avec critiques, débat, intérêt, émotion. « Produire » se réserve aux objets et aux effets mesurables.', '“Susciter” goes with criticism, debate, interest, emotion. “Produire” is for objects and measurable effects.', '“susciter” 搭配批评、辩论、兴趣、情绪。“produire” 则用于实物和可量化的结果。'),
                  },
                  {
                    id: 'c3',
                    before: 'Nous devons',
                    after: 'compte des remarques du jury.',
                    options: ['tenir', 'prendre', 'avoir'],
                    answer: 'tenir',
                    why: t('« Tenir compte de » est une expression figée : aucun autre verbe ne peut y entrer.', '“Tenir compte de” is a fixed expression: no other verb can go in.', '“tenir compte de” 是固定表达：换任何动词都不行。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_c1lx_3',
          moduleId: 'mod_c1lx_1',
          kind: 'text',
          durationMin: 11,
          title: t('Les faux amis qui résistent', 'The false friends that hold out', '顽固的假朋友'),
          summary: t(
            'Les mots qui ressemblent à l’anglais et ne veulent pas dire la même chose.',
            'The words that look English and do not mean the same thing.',
            '那些长得像英语、意思却不同的词。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🎭',
              text: t(
                'Les faux amis simples s’oublient vite. Ceux qui restent sont les plus traîtres : le mot existe dans les deux langues, avec un sens voisin, et la phrase reste compréhensible. Personne ne vous corrige, et l’erreur s’installe.',
                'Simple false friends are quickly forgotten. The ones that stay are the most treacherous: the word exists in both languages with a nearby meaning, and the sentence stays understandable. Nobody corrects you, and the mistake settles in.',
                '简单的假朋友很快就会忘掉。留下的那些最阴险：这个词在两种语言里都有，意思相近，句子也说得通。没人纠正你，错误就此扎根。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔗',
              title: t('Ce que le mot veut vraiment dire', 'What the word really means', '这个词的真正含义'),
              hint: t('Cinq mots courants, cinq sens inattendus.', 'Five common words, five unexpected meanings.', '五个常见词，五个出人意料的含义。'),
              widget: {
                kind: 'pairs',
                prompt: t('En français, ce mot signifie :', 'In French, this word means:', '在法语中，这个词的意思是：'),
                pairs: [
                  { id: 'f1', left: 'éventuellement', right: t('si le cas se présente, peut-être — et non « finalement »', 'if the case arises, possibly — not “eventually”', '如有需要、也许——而不是“最终”') },
                  { id: 'f2', left: 'actuellement', right: t('en ce moment — et non « en réalité »', 'at the moment — not “actually”', '此刻、目前——而不是“实际上”') },
                  { id: 'f3', left: 'sensible', right: t('qui ressent fortement, ou notable — et non « raisonnable »', 'easily moved, or noticeable — not “sensible”', '易感的，或显著的——而不是“明智的”') },
                  { id: 'f4', left: 'rester', right: t('demeurer quelque part — et non « se reposer »', 'to stay somewhere — not “to rest”', '停留在某处——而不是“休息”') },
                  { id: 'f5', left: 'assister à', right: t('être présent à un événement — et non « aider »', 'to attend an event — not “to assist”', '出席某活动——而不是“协助”') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'danger',
              emoji: '🚨',
              title: t('« Éventuellement » peut renverser un contrat', '“Éventuellement” can flip a contract', '“éventuellement” 能颠覆一份合同'),
              text: t(
                'Écrire « nous livrerons éventuellement en mars » veut dire « peut-être en mars, si besoin » — et non « nous finirons par livrer en mars ». Dans un courriel professionnel, cet écart change l’engagement pris.',
                'Writing “nous livrerons éventuellement en mars” means “possibly in March, if needed” — not “we will eventually deliver in March”. In a professional email, that gap changes the commitment you are making.',
                '写下 “nous livrerons éventuellement en mars”，意思是“也许三月，视情况而定”，而不是“我们最终会在三月交付”。在职场邮件里，这个差距改变了你所作的承诺。',
              ),
            },
            {
              type: 'keyvalues',
              emoji: '🗂️',
              title: t('Comment dire ce que vous vouliez dire', 'How to say what you actually meant', '你原本想说的该怎么表达'),
              entries: [
                { label: t('« finalement », au sens de à la fin', '“eventually”, in the sense of in the end', '“最终”的意思'), value: t('Employez **finalement** ou **à terme** : « Nous livrerons finalement en mars. »', 'Use **finalement** or **à terme**: “Nous livrerons finalement en mars.”', '用 **finalement** 或 **à terme**：“Nous livrerons finalement en mars.”') },
                { label: t('« en réalité »', '“actually”', '“实际上”'), value: t('Employez **en fait** ou **en réalité**, jamais actuellement.', 'Use **en fait** or **en réalité**, never actuellement.', '用 **en fait** 或 **en réalité**，绝不用 actuellement。') },
                { label: t('« raisonnable »', '“sensible”', '“明智的”'), value: t('Employez **raisonnable** ou **judicieux** : « une décision judicieuse ».', 'Use **raisonnable** or **judicieux**: “une décision judicieuse”.', '用 **raisonnable** 或 **judicieux**：“une décision judicieuse”。') },
                { label: t('« se reposer »', '“to rest”', '“休息”'), value: t('Employez **se reposer** : « Je me repose une heure. »', 'Use **se reposer**: “Je me repose une heure.”', '用 **se reposer**：“Je me repose une heure.”') },
                { label: t('« aider »', '“to assist”', '“协助”'), value: t('Employez **aider** ou **assister quelqu’un** — avec un complément direct, sans « à ».', 'Use **aider** or **assister quelqu’un** — with a direct object, no “à”.', '用 **aider** 或 **assister quelqu’un**——直接带宾语，不加 “à”。') },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mod_c1lx_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur la précision lexicale.', 'Six questions on lexical precision.', '六道题，考查用词精准度。'),
      lessons: [
        {
          id: 'les_c1lx_q',
          moduleId: 'mod_c1lx_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_c1_lexique',
          title: t('Quiz — Le mot juste', 'Quiz — The right word', '测验 — 用词精准'),
          summary: t('6 questions sur les nuances, les couples et les faux amis.', '6 questions on shades, collocations and false friends.', '6 道题，考查词义差别、搭配与假朋友。'),
        },
      ],
    },
  ],
};
