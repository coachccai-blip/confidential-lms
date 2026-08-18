import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_b2_relief';

export const b2ReliefCourse: Course = {
  id: ID,
  slug: 'b2-relief',
  level: 'B2',
  accentFrom: '#818cf8',
  accentTo: '#4338ca',
  status: 'published',
  title: t('Donner du relief à ses phrases', 'Giving your sentences relief', '让句子有起伏'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'À ce stade, vos phrases sont correctes mais plates. Trois outils changent cela : la mise en relief, la voix passive et le style nominal — c’est-à-dire choisir quel mot le lecteur verra en premier.',
    'By this stage your sentences are correct but flat. Three tools change that: cleft structures, the passive voice and the nominal style — that is, choosing which word the reader sees first.',
    '到这个阶段，你的句子正确却平淡。三样工具能改变这一点：强调句、被动语态和名词化风格——也就是决定读者最先看到哪个词。',
  ),
  tags: [t('Grammaire avancée', 'Advanced grammar', '高阶语法'), t('Style', 'Style', '文体')],
  modules: [
    {
      id: 'mod_b2re_1',
      courseId: ID,
      title: t('Choisir ce qu’on met en avant', 'Choosing what to put forward', '决定突出什么'),
      summary: t(
        'Trois façons de déplacer l’accent sans changer les faits.',
        'Three ways to move the emphasis without changing the facts.',
        '三种方式，在不改变事实的前提下移动重心。',
      ),
      lessons: [
        {
          id: 'les_b2re_1',
          moduleId: 'mod_b2re_1',
          kind: 'text',
          durationMin: 11,
          title: t('La mise en relief', 'Cleft structures', '强调句'),
          summary: t(
            'C’est … que, ce qui … c’est : les tournures qui pointent du doigt.',
            'C’est … que, ce qui … c’est: the structures that point a finger.',
            'C’est … que、ce qui … c’est：用来“指出重点”的句式。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🔦',
              text: t(
                'Le français ne peut pas appuyer sur un mot en le criant, comme le fait l’anglais parlé. Il déplace donc le mot important au début de la phrase, dans une structure faite pour ça. C’est ce qu’on appelle la mise en relief.',
                'French cannot lean on a word by shouting it, the way spoken English does. So it moves the important word to the front, inside a structure built for the job. That is what is called a cleft.',
                '法语无法像英语口语那样靠重读来强调某个词，于是把重点词移到句首，装进一个专门的句式里。这就是所谓的强调句。',
              ),
            },
            {
              type: 'examples',
              emoji: '🎯',
              title: t('Une même information, quatre accents différents', 'One piece of information, four different emphases', '同一信息，四种不同重心'),
              items: [
                {
                  fr: 'Marc a offert ces fleurs à Julie hier.',
                  gloss: t('Phrase neutre : aucun élément n’est mis en avant.', 'Neutral sentence: nothing is put forward.', '中性句：没有任何成分被突出。'),
                },
                {
                  fr: 'C’est Marc qui a offert ces fleurs à Julie.',
                  gloss: t('On insiste sur l’auteur : pas quelqu’un d’autre, Marc. Après « c’est », on emploie qui parce que Marc est le sujet.', 'You stress the doer: not someone else, Marc. After “c’est” you use qui because Marc is the subject.', '强调施动者：不是别人，就是 Marc。“c’est” 后面用 qui，因为 Marc 是主语。'),
                },
                {
                  fr: 'C’est à Julie qu’il a offert ces fleurs.',
                  gloss: t('On insiste sur le destinataire. La préposition « à » reste collée au mot mis en avant.', 'You stress the recipient. The preposition “à” stays attached to the word being highlighted.', '强调接受者。介词 “à” 仍紧跟被强调的词。'),
                },
                {
                  fr: 'Ce qu’il a offert à Julie, c’est un bouquet de pivoines.',
                  gloss: t('On garde le suspense : l’objet arrive en dernier, ce qui lui donne tout le poids.', 'You keep the suspense: the object arrives last, which gives it all the weight.', '制造悬念：宾语最后出现，因而承载全部分量。'),
                },
              ],
            },
            {
              type: 'interactive',
              emoji: '🎛️',
              title: t('Quelle structure pour quel mot ?', 'Which structure for which word?', '哪个成分用哪种结构？'),
              hint: t(
                'Croisez la fonction du mot et la structure, {prenom}.',
                'Cross the word’s function with the structure, {prenom}.',
                '{prenom}，把成分的功能与结构交叉查询。',
              ),
              widget: {
                kind: 'matrix',
                rowsLabel: t('Ce qu’on veut mettre en avant', 'What you want to highlight', '想突出什么'),
                columnsLabel: t('Structure', 'Structure', '结构'),
                rows: [
                  { id: 'r1', label: t('Le sujet', 'The subject', '主语') },
                  { id: 'r2', label: t('Le complément direct', 'The direct object', '直接宾语') },
                  { id: 'r3', label: t('Un complément avec préposition', 'A complement with a preposition', '带介词的补语') },
                ],
                columns: [
                  { id: 'c1', label: t('C’est … qui / que', 'C’est … qui / que', 'C’est … qui / que') },
                  { id: 'c2', label: t('Ce qui / ce que …, c’est', 'Ce qui / ce que …, c’est', 'Ce qui / ce que …, c’est') },
                ],
                cells: [
                  { row: 'r1', column: 'c1', answer: 'c’est … qui', example: 'C’est Paul qui décide.', gloss: t('Qui, sans exception, quand le mot mis en avant est le sujet du verbe qui suit.', 'Qui, without exception, when the highlighted word is the subject of the following verb.', '被强调的词若是后面动词的主语，一律用 qui。') },
                  { row: 'r1', column: 'c2', answer: 'ce qui …, c’est', example: 'Ce qui me gêne, c’est le bruit.', gloss: t('« Ce qui » quand l’élément mis en avant fait l’action du verbe : c’est le bruit qui gêne.', '“Ce qui” when the highlighted element does the action: it is the noise that bothers.', '当被强调成分是动作的发出者时用 “ce qui”：是噪音在打扰。') },
                  { row: 'r2', column: 'c1', answer: 'c’est … que', example: 'C’est ce livre que je cherchais.', gloss: t('Que, parce que le livre est l’objet de « cherchais ». Que devient qu’ devant une voyelle.', 'Que, because the book is the object of “cherchais”. Que becomes qu’ before a vowel.', '用 que，因为书是 “cherchais” 的宾语。元音前 que 变成 qu’。') },
                  { row: 'r2', column: 'c2', answer: 'ce que …, c’est', example: 'Ce que je veux, c’est comprendre.', gloss: t('« Ce que » suivi d’un sujet, comme le relatif que. Cette tournure est très fréquente à l’oral.', '“Ce que” followed by a subject, like the relative que. This turn of phrase is very frequent in speech.', '“ce que” 后面跟主语，与关系代词 que 一致。这个说法在口语中极为常见。') },
                  { row: 'r3', column: 'c1', answer: 'c’est à / avec / pour … que', example: 'C’est avec elle que je travaille.', gloss: t('La préposition passe devant, et le reste de la phrase suit avec que.', 'The preposition moves to the front, and the rest of the sentence follows with que.', '介词移到前面，句子其余部分用 que 引出。') },
                  { row: 'r3', column: 'c2', answer: 'ce dont …, c’est', example: 'Ce dont j’ai besoin, c’est de temps.', gloss: t('Avec un verbe construit avec de, on emploie « ce dont ». Le « de » réapparaît après c’est.', 'With a verb built on de, you use “ce dont”. The “de” reappears after c’est.', '动词若与 de 搭配，则用 “ce dont”。“de” 会在 c’est 之后重新出现。') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('« C’est » reste au singulier', '“C’est” stays singular', '“C’est” 保持单数'),
              text: t(
                'À l’oral et dans la plupart des écrits courants, on dit « c’est eux », « c’est les voisins », même au pluriel. La forme « ce sont » existe, mais elle appartient au registre soutenu : réservez-la à l’écrit formel.',
                'In speech and in most everyday writing, people say “c’est eux”, “c’est les voisins”, even in the plural. The form “ce sont” exists, but belongs to the formal register: keep it for formal writing.',
                '在口语和多数日常书面语中，即使是复数也说 “c’est eux”“c’est les voisins”。“ce sont” 确实存在，但属于正式语体：留给正式书面表达。',
              ),
            },
          ],
        },
        {
          id: 'les_b2re_2',
          moduleId: 'mod_b2re_1',
          kind: 'text',
          durationMin: 11,
          title: t('La voix passive et ses remplaçants', 'The passive voice and its stand-ins', '被动语态及其替代形式'),
          summary: t(
            'Quand le français préfère « on » ou « se », et quand il assume le passif.',
            'When French prefers “on” or “se”, and when it goes with the passive.',
            '法语何时偏爱 “on” 或 “se”，何时才使用被动。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🔄',
              text: t(
                'Le passif existe en français, mais il est bien moins fréquent qu’en anglais. Trois solutions se partagent le travail : le vrai passif, le pronom « on », et la tournure pronominale avec « se ». Choisir la mauvaise est la marque la plus visible d’une traduction mot à mot.',
                'The passive exists in French, but it is far less frequent than in English. Three solutions share the work: the true passive, the pronoun “on”, and the reflexive turn with “se”. Picking the wrong one is the clearest sign of word-for-word translation.',
                '法语有被动语态，但远不如英语常用。三种方案分担这项工作：真正的被动、代词 “on”，以及带 “se” 的自反结构。选错了，是逐字翻译最明显的痕迹。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎚️',
              title: t('Trois façons de ne pas nommer l’auteur', 'Three ways of not naming the doer', '三种不点名施动者的方式'),
              hint: t('Comparez les trois crans sur la même information.', 'Compare the three steps on the same piece of information.', '就同一信息比较这三档。'),
              widget: {
                kind: 'switcher',
                steps: [
                  {
                    id: 'v1',
                    label: t('Le passif', 'The passive', '被动'),
                    headline: t('Quand l’auteur compte, ou quand on veut de la solennité', 'When the doer matters, or when you want solemnity', '当施动者重要，或需要庄重时'),
                    example: 'La loi a été votée par l’Assemblée nationale.',
                    gloss: t('On garde le passif surtout si le complément d’agent est mentionné. Sans « par … », le français cherche généralement autre chose.', 'You keep the passive above all when the agent is mentioned. Without “par …”, French usually looks for something else.', '尤其当出现施动者时才保留被动。若没有 “par …”，法语通常另寻他法。'),
                  },
                  {
                    id: 'v2',
                    label: t('Le pronom on', 'The pronoun on', '代词 on'),
                    headline: t('La solution par défaut à l’oral', 'The default solution in speech', '口语中的默认方案'),
                    example: 'On a voté la loi hier soir.',
                    gloss: t('« On » remplace un sujet inconnu, général ou évident. C’est la tournure la plus naturelle dans une conversation.', '“On” replaces an unknown, general or obvious subject. It is the most natural turn in conversation.', '“on” 替代未知、泛指或不言自明的主语。这是对话中最自然的说法。'),
                  },
                  {
                    id: 'v3',
                    label: t('La tournure avec se', 'The reflexive turn with se', '带 se 的结构'),
                    headline: t('Pour une habitude ou une règle générale', 'For a habit or a general rule', '用于习惯或普遍规律'),
                    example: 'Ce plat se mange froid. Le vin blanc se sert frais.',
                    gloss: t('Elle décrit ce qui se fait normalement, sans dire qui le fait. Très fréquente dans les recettes et les modes d’emploi.', 'It describes what is normally done, without saying who does it. Very frequent in recipes and instructions.', '它描述通常的做法，而不说明由谁来做。在菜谱和说明书中极为常见。'),
                  },
                ],
              },
            },
            {
              type: 'examples',
              emoji: '⚠️',
              title: t('Le calque à éviter', 'The calque to avoid', '要避免的直译'),
              items: [
                {
                  fr: 'Il a été donné un livre à Marie.',
                  incorrect: true,
                  gloss: t('Impossible en français : un complément indirect ne peut pas devenir sujet du passif. On dit « On a donné un livre à Marie ».', 'Impossible in French: an indirect object cannot become the subject of a passive. You say “On a donné un livre à Marie”.', '法语中不成立：间接宾语不能成为被动句的主语。应说 “On a donné un livre à Marie”。'),
                },
                {
                  fr: 'On m’a dit que la réunion était annulée.',
                  gloss: t('C’est ainsi qu’on rend « I was told ». Le français passe par « on », pas par le passif.', 'This is how you render “I was told”. French goes through “on”, not through the passive.', '“I was told” 就该这样表达。法语用 “on”，不用被动。'),
                },
                {
                  fr: 'Le français se parle dans trente-cinq pays.',
                  gloss: t('Plus léger que « le français est parlé dans trente-cinq pays », et parfaitement correct.', 'Lighter than “le français est parlé dans trente-cinq pays”, and perfectly correct.', '比 “le français est parlé dans trente-cinq pays” 更轻快，而且完全正确。'),
                },
              ],
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('Quelle tournure sonne français ?', 'Which turn sounds French?', '哪种说法更地道？'),
              hint: t('Demandez-vous si l’auteur de l’action est utile.', 'Ask yourself whether the doer of the action is useful.', '先问问自己：施动者有必要出现吗？'),
              widget: {
                kind: 'fill',
                prompt: t('Complétez :', 'Complete:', '补全：'),
                items: [
                  {
                    id: 'a1',
                    before: 'Ici,',
                    after: 'parle français et anglais.',
                    options: ['on', 'il est'],
                    answer: 'on',
                    why: t('L’auteur n’a aucun intérêt ici : « on » est la tournure normale. Le passif ferait lourd.', 'The doer is of no interest here: “on” is the normal turn. The passive would feel heavy.', '这里施动者无关紧要：“on” 才是常规说法。用被动会显得笨重。'),
                  },
                  {
                    id: 'a2',
                    before: 'Le rapport',
                    after: 'par la commission d’enquête.',
                    options: ['a été rédigé', 'se rédige'],
                    answer: 'a été rédigé',
                    why: t('L’auteur est nommé et compte : c’est exactement le cas où le passif s’impose.', 'The doer is named and matters: this is precisely where the passive belongs.', '施动者被点名且很重要：这正是必须用被动的情形。'),
                  },
                  {
                    id: 'a3',
                    before: 'Le champagne',
                    after: 'bien frais, jamais glacé.',
                    options: ['se boit', 'est bu'],
                    answer: 'se boit',
                    why: t('Une règle générale, sans auteur : la tournure avec « se » est la plus naturelle.', 'A general rule, with no doer: the “se” turn is the most natural.', '这是没有施动者的普遍规律：“se” 结构最自然。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_b2re_3',
          moduleId: 'mod_b2re_1',
          kind: 'text',
          durationMin: 10,
          title: t('Le style nominal', 'The nominal style', '名词化风格'),
          summary: t(
            'Transformer les verbes en noms : le réflexe des textes officiels.',
            'Turning verbs into nouns: the reflex of official texts.',
            '把动词变成名词：官方文本的思维定式。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🏛️',
              text: t(
                'Les rapports, les titres et les textes administratifs remplacent les verbes par des noms. « Les prix augmentent » devient « l’augmentation des prix ». Comprendre ce mécanisme, c’est débloquer d’un coup toute la langue officielle.',
                'Reports, headlines and administrative texts replace verbs with nouns. “Les prix augmentent” becomes “l’augmentation des prix”. Understanding this mechanism unlocks the whole official language at once.',
                '报告、标题和行政文本会用名词替代动词。“Les prix augmentent” 变成 “l’augmentation des prix”。理解这个机制，官方语言便一下子通了。',
              ),
            },
            {
              type: 'table',
              emoji: '📊',
              caption: t('Du verbe au nom : les suffixes qui reviennent', 'From verb to noun: the recurring suffixes', '从动词到名词：常见后缀'),
              headers: [t('Suffixe', 'Suffix', '后缀'), t('Verbe', 'Verb', '动词'), t('Nom', 'Noun', '名词')],
              rows: [
                [t('-tion', '-tion', '-tion'), t('augmenter', 'augmenter', 'augmenter'), t('l’augmentation', 'l’augmentation', 'l’augmentation')],
                [t('-ment', '-ment', '-ment'), t('changer', 'changer', 'changer'), t('le changement', 'le changement', 'le changement')],
                [t('-age', '-age', '-age'), t('recycler', 'recycler', 'recycler'), t('le recyclage', 'le recyclage', 'le recyclage')],
                [t('-ure', '-ure', '-ure'), t('fermer', 'fermer', 'fermer'), t('la fermeture', 'la fermeture', 'la fermeture')],
                [t('-ée', '-ée', '-ée'), t('arriver', 'arriver', 'arriver'), t('l’arrivée', 'l’arrivée', 'l’arrivée')],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🧭',
              title: t('Le suffixe donne presque toujours le genre', 'The suffix nearly always gives you the gender', '后缀几乎总能决定性别'),
              text: t(
                'Les noms en **-tion**, **-ure** et **-ée** sont féminins ; ceux en **-ment** et **-age** sont masculins. C’est l’une des rares règles de genre qui ne souffre presque aucune exception.',
                'Nouns in **-tion**, **-ure** and **-ée** are feminine; those in **-ment** and **-age** are masculine. This is one of the few gender rules with almost no exceptions.',
                '以 **-tion**、**-ure**、**-ée** 结尾的名词是阴性；以 **-ment**、**-age** 结尾的是阳性。这是少数几乎没有例外的性别规则之一。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔗',
              title: t('Retrouvez le nom qui correspond', 'Find the matching noun', '找出对应的名词'),
              hint: t('Le suffixe suffit à deviner le genre.', 'The suffix is enough to guess the gender.', '看后缀就能猜出性别。'),
              widget: {
                kind: 'pairs',
                prompt: t('Le verbe devient…', 'The verb becomes…', '动词变成……'),
                pairs: [
                  { id: 'n1', left: 'construire', right: t('la construction — féminin, comme tous les noms en -tion', 'la construction — feminine, like all nouns in -tion', 'la construction —— 阴性，与所有 -tion 名词一样') },
                  { id: 'n2', left: 'développer', right: t('le développement — masculin, comme tous les noms en -ment', 'le développement — masculine, like all nouns in -ment', 'le développement —— 阳性，与所有 -ment 名词一样') },
                  { id: 'n3', left: 'ouvrir', right: t('l’ouverture — féminin, formé sur un radical irrégulier', 'l’ouverture — feminine, built on an irregular stem', 'l’ouverture —— 阴性，由不规则词根构成') },
                  { id: 'n4', left: 'partir', right: t('le départ — masculin, sans suffixe visible', 'le départ — masculine, with no visible suffix', 'le départ —— 阳性，没有明显后缀') },
                  { id: 'n5', left: 'stationner', right: t('le stationnement — masculin, le mot des panneaux de rue', 'le stationnement — masculine, the word on street signs', 'le stationnement —— 阳性，路牌上的那个词') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '⚖️',
              title: t('À doser : trop de noms étouffe la phrase', 'Use sparingly: too many nouns smother the sentence', '要有分寸：名词过多会闷死句子'),
              text: t(
                '« La mise en œuvre de la procédure de vérification de la conformité » est du français correct, mais illisible. Dans une copie d’examen, alternez : un ou deux groupes nominaux par paragraphe, pas davantage.',
                '“La mise en œuvre de la procédure de vérification de la conformité” is correct French, but unreadable. In an exam paper, alternate: one or two noun groups per paragraph, no more.',
                '“La mise en œuvre de la procédure de vérification de la conformité” 语法正确，却无法卒读。考试作文中要交替使用：每段一到两个名词词组，不要更多。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_b2re_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur la mise en relief, le passif et le style nominal.', 'Six questions on clefts, the passive and the nominal style.', '六道题，考查强调句、被动与名词化。'),
      lessons: [
        {
          id: 'les_b2re_q',
          moduleId: 'mod_b2re_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_b2_relief',
          title: t('Quiz — Le relief de la phrase', 'Quiz — Sentence relief', '测验 — 句子的起伏'),
          summary: t('6 questions sur les trois outils du cours.', '6 questions on the three tools of the course.', '6 道题，考查本课的三样工具。'),
        },
      ],
    },
  ],
};
