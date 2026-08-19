import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_a2_decrire';

export const a2DecrireCourse: Course = {
  id: ID,
  slug: 'a2-decrire',
  level: 'A2',
  accentFrom: '#67e8f9',
  accentTo: '#0891b2',
  status: 'published',
  title: t('Décrire, comparer, donner son avis', 'Describing, comparing, giving your opinion', '描写、比较、表达看法'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Placer et accorder l’adjectif, construire un comparatif et un superlatif, puis formuler un avis nuancé sans quitter le niveau A2.',
    'Placing and agreeing adjectives, building comparatives and superlatives, then giving a nuanced opinion without leaving A2 level.',
    '形容词的位置与配合、构成比较级与最高级，并在 A2 水平内表达有分寸的看法。',
  ),
  tags: [t('Expression', 'Expression', '表达'), t('Grammaire', 'Grammar', '语法')],
  modules: [
    {
      id: 'mod_a2de_1',
      courseId: ID,
      title: t('Qualifier et évaluer', 'Qualifying and evaluating', '修饰与评价'),
      summary: t(
        'L’adjectif, la comparaison, puis l’opinion personnelle.',
        'The adjective, comparison, then personal opinion.',
        '形容词、比较，以及个人看法。',
      ),
      lessons: [
        {
          id: 'les_a2de_1',
          moduleId: 'mod_a2de_1',
          kind: 'text',
          durationMin: 11,
          title: t('L’adjectif : place et accord', 'The adjective: position and agreement', '形容词：位置与配合'),
          summary: t(
            'Avant ou après le nom — et les adjectifs qui changent de sens selon leur place.',
            'Before or after the noun — and the adjectives that change meaning depending on position.',
            '在名词之前还是之后——以及因位置不同而改变词义的形容词。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'En anglais et en chinois, l’adjectif se place avant le nom. En français, il vient le plus souvent **après** : « une voiture rouge », « un film intéressant ». Seule une petite famille d’adjectifs très courants se place avant.',
                'In English and Chinese, the adjective comes before the noun. In French it usually goes **after**: “une voiture rouge”, “un film intéressant”. Only a small family of very common adjectives comes before.',
                '英语和中文的形容词放在名词前面。法语则通常放在**后面**：“une voiture rouge”“un film intéressant”。只有一小类极常用的形容词前置。',
              ),
            },
            {
              type: 'keyvalues',
              emoji: '🏷️',
              title: t('Les adjectifs qui passent devant', 'The adjectives that go in front', '前置的形容词'),
              entries: [
                { label: t('La taille', 'Size', '大小'), value: t('grand, petit, gros, long : un grand jardin, une petite rue', 'grand, petit, gros, long: un grand jardin, une petite rue', 'grand、petit、gros、long：un grand jardin、une petite rue') },
                { label: t('L’âge', 'Age', '年龄'), value: t('jeune, vieux, nouveau : un jeune homme, une vieille amie', 'jeune, vieux, nouveau: un jeune homme, une vieille amie', 'jeune、vieux、nouveau：un jeune homme、une vieille amie') },
                { label: t('La qualité générale', 'General quality', '总体评价'), value: t('bon, mauvais, beau, joli : un bon film, une belle journée', 'bon, mauvais, beau, joli: un bon film, une belle journée', 'bon、mauvais、beau、joli：un bon film、une belle journée') },
                { label: t('Le rang', 'Rank', '次序'), value: t('premier, dernier, autre, même : le premier jour, la dernière fois', 'premier, dernier, autre, même: le premier jour, la dernière fois', 'premier、dernier、autre、même：le premier jour、la dernière fois') },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🧭',
              title: t('Un moyen mnémotechnique', 'A memory aid', '记忆窍门'),
              text: t(
                'Beauté, Âge, Nombre, Grandeur, Sens général : les adjectifs qui répondent à ces cinq critères se placent avant le nom. Tous les autres — couleur, forme, nationalité, matière, religion — se placent après.',
                'Beauty, Age, Number, Greatness, general Sense: adjectives matching these five criteria go before the noun. All others — colour, shape, nationality, material, religion — go after.',
                '美感、年龄、数量、大小、总体评价：符合这五类标准的形容词前置。其余——颜色、形状、国籍、材质、宗教——一律后置。',
              ),
            },
            { type: 'heading', emoji: '🔀', text: t('Les adjectifs à double sens', 'Adjectives with two meanings', '一词两义的形容词') },
            {
              type: 'table',
              emoji: '📊',
              caption: t('La place change le sens', 'Position changes the meaning', '位置改变词义'),
              headers: [t('Adjectif', 'Adjective', '形容词'), t('Avant le nom', 'Before the noun', '名词之前'), t('Après le nom', 'After the noun', '名词之后')],
              rows: [
                [t('ancien', 'ancien', 'ancien'), t('mon ancien professeur = celui d’avant', 'mon ancien professeur = my former teacher', 'mon ancien professeur = 我以前的老师'), t('un livre ancien = très vieux', 'un livre ancien = a very old book', 'un livre ancien = 一本古书')],
                [t('propre', 'propre', 'propre'), t('ma propre voiture = qui m’appartient', 'ma propre voiture = my own car', 'ma propre voiture = 我自己的车'), t('une voiture propre = pas sale', 'une voiture propre = a clean car', 'une voiture propre = 干净的车')],
                [t('grand', 'grand', 'grand'), t('un grand homme = important', 'un grand homme = a great man', 'un grand homme = 伟人'), t('un homme grand = de haute taille', 'un homme grand = a tall man', 'un homme grand = 个子高的人')],
                [t('cher', 'cher', 'cher'), t('mon cher ami = affection', 'mon cher ami = dear friend', 'mon cher ami = 亲爱的朋友'), t('un repas cher = coûteux', 'un repas cher = an expensive meal', 'un repas cher = 昂贵的一餐')],
              ],
            },
            {
              type: 'examples',
              emoji: '🔀',
              title: t('Accords irréguliers à connaître', 'Irregular agreements to know', '需掌握的不规则配合'),
              items: [
                { fr: 'un beau jardin → un bel arbre → une belle maison', gloss: t('Beau devient « bel » devant une voyelle. Idem : nouveau/nouvel, vieux/vieil.', 'Beau becomes “bel” before a vowel. Likewise: nouveau/nouvel, vieux/vieil.', '元音前 beau 变为 “bel”。同理：nouveau/nouvel、vieux/vieil。') },
                { fr: 'un homme sportif → une femme sportive', gloss: t('-if devient -ive : actif/active, neuf/neuve.', '-if becomes -ive: actif/active, neuf/neuve.', '-if 变 -ive：actif/active、neuf/neuve。') },
                { fr: 'un cas sérieux → une affaire sérieuse', gloss: t('-eux devient -euse : heureux/heureuse.', '-eux becomes -euse: heureux/heureuse.', '-eux 变 -euse：heureux/heureuse。') },
                { fr: 'une maison blanc', gloss: t('Blanc a un féminin irrégulier : « blanche ».', 'Blanc has an irregular feminine: “blanche”.', 'Blanc 的阴性不规则：应为 “blanche”。'), incorrect: true },
              ],
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('Avant ou après le nom ?', 'Before or after the noun?', '名词前还是名词后？'),
              hint: t('Beau, grand, petit, jeune, vieux, bon : la petite famille qui passe devant.', 'Beau, grand, petit, jeune, vieux, bon: the small family that goes in front.', 'beau、grand、petit、jeune、vieux、bon：可以前置的一小家子。'),
              widget: {
                kind: 'fill',
                prompt: t('Placez l’adjectif :', 'Place the adjective:', '给形容词找位置：'),
                items: [
                  {
                    id: 'f1',
                    before: 'Ils ont acheté une',
                    after: '.',
                    options: ['voiture rouge', 'rouge voiture'],
                    answer: 'voiture rouge',
                    why: t('Les couleurs se placent toujours après le nom, sans exception.', 'Colours always go after the noun, no exception.', '颜色形容词永远后置，没有例外。'),
                  },
                  {
                    id: 'f2',
                    before: 'C’est un',
                    after: 'très sympathique.',
                    options: ['petit café', 'café petit'],
                    answer: 'petit café',
                    why: t('« Petit » fait partie de la famille qui précède le nom : un petit café, une grande maison.', '“Petit” belongs to the family that precedes the noun: un petit café, une grande maison.', '“petit” 属于前置的那一小类：un petit café、une grande maison。'),
                  },
                  {
                    id: 'f3',
                    before: 'Elle porte une',
                    after: '.',
                    options: ['robe élégante', 'élégante robe'],
                    answer: 'robe élégante',
                    why: t('Hors de la petite famille, l’adjectif suit le nom : une robe élégante, un film intéressant.', 'Outside the small family, the adjective follows the noun: une robe élégante, un film intéressant.', '不在那一小类里的形容词都后置：une robe élégante、un film intéressant。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_a2de_2',
          moduleId: 'mod_a2de_1',
          kind: 'text',
          durationMin: 10,
          title: t('Comparer : plus, moins, aussi', 'Comparing: plus, moins, aussi', '比较：plus、moins、aussi'),
          summary: t(
            'Le comparatif régulier, le superlatif, et les deux irréguliers à retenir.',
            'The regular comparative, the superlative, and the two irregulars to remember.',
            '规则比较级、最高级，以及两个需牢记的不规则形式。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le comparatif français est mécanique : un mot devant l’adjectif, **que** devant le point de comparaison. Aucun changement de forme de l’adjectif, contrairement à l’anglais (big → bigger).',
                'The French comparative is mechanical: one word before the adjective, **que** before the point of comparison. The adjective itself never changes form, unlike English (big → bigger).',
                '法语比较级很机械：形容词前加一个词，比较对象前加 **que**。与英语不同（big → bigger），形容词本身不变形。',
              ),
            },
            {
              type: 'table',
              emoji: '⚖️',
              caption: t('Comparatif et superlatif', 'Comparative and superlative', '比较级与最高级'),
              headers: [t('Degré', 'Degree', '级'), t('Formule', 'Formula', '结构'), t('Exemple', 'Example', '例句')],
              rows: [
                [t('Supériorité', 'Superiority', '较高'), t('plus + adjectif + que', 'plus + adjective + que', 'plus + 形容词 + que'), t('Lyon est plus grand que Nantes.', 'Lyon est plus grand que Nantes.', 'Lyon est plus grand que Nantes.')],
                [t('Infériorité', 'Inferiority', '较低'), t('moins + adjectif + que', 'moins + adjective + que', 'moins + 形容词 + que'), t('Ce livre est moins cher que l’autre.', 'Ce livre est moins cher que l’autre.', 'Ce livre est moins cher que l’autre.')],
                [t('Égalité', 'Equality', '相等'), t('aussi + adjectif + que', 'aussi + adjective + que', 'aussi + 形容词 + que'), t('Elle est aussi rapide que lui.', 'Elle est aussi rapide que lui.', 'Elle est aussi rapide que lui.')],
                [t('Superlatif', 'Superlative', '最高级'), t('le / la / les plus (ou moins) + adjectif', 'le / la / les plus (or moins) + adjective', 'le / la / les plus（或 moins）+ 形容词'), t('C’est le film le plus intéressant de l’année.', 'C’est le film le plus intéressant de l’année.', 'C’est le film le plus intéressant de l’année.')],
              ],
            },
            {
              type: 'interactive',
              emoji: '⚖️',
              title: t('La table de comparaison', 'The comparison table', '比较结构表'),
              hint: t(
                'Croisez le degré et ce que vous comparez : la formule se compose.',
                'Cross the degree with what you are comparing: the formula assembles itself.',
                '将比较程度与比较对象交叉选择，结构随即组合而成。',
              ),
              widget: {
                kind: 'matrix',
                rowsLabel: t('Degré', 'Degree', '程度'),
                columnsLabel: t('Ce qu’on compare', 'What is compared', '比较对象'),
                rows: [
                  { id: 'plus', label: t('Supériorité', 'Superiority', '较高') },
                  { id: 'moins', label: t('Infériorité', 'Inferiority', '较低') },
                  { id: 'egal', label: t('Égalité', 'Equality', '相等') },
                ],
                columns: [
                  { id: 'adj', label: t('Un adjectif', 'An adjective', '形容词') },
                  { id: 'nom', label: t('Un nom', 'A noun', '名词') },
                  { id: 'verbe', label: t('Un verbe', 'A verb', '动词') },
                ],
                cells: [
                  { row: 'plus', column: 'adj', answer: 'plus … que', example: 'Lyon est plus grand que Nantes.', gloss: t('L’adjectif ne change jamais de forme, contrairement à l’anglais.', 'The adjective never changes form, unlike in English.', '与英语不同，形容词本身从不变形。') },
                  { row: 'plus', column: 'nom', answer: 'plus de … que', example: 'J’ai plus de livres que toi.', gloss: t('Devant un nom, « de » s’intercale obligatoirement.', 'Before a noun, “de” is compulsory.', '名词前必须插入 “de”。') },
                  { row: 'plus', column: 'verbe', answer: 'plus que', example: 'Il travaille plus que moi.', gloss: t('Après un verbe, ni « de » ni article : « plus » seul.', 'After a verb, no “de” and no article: just “plus”.', '动词后既不加 “de” 也不加冠词，只用 “plus”。') },
                  { row: 'moins', column: 'adj', answer: 'moins … que', example: 'Ce livre est moins cher que l’autre.', gloss: t('Symétrique de « plus », sans irrégularité.', 'Symmetrical to “plus”, with no irregularity.', '与 “plus” 对称，没有不规则形式。') },
                  { row: 'moins', column: 'nom', answer: 'moins de … que', example: 'Il y a moins de monde que hier.', gloss: t('Même règle du « de » que pour la supériorité.', 'The same “de” rule as for superiority.', '与较高级的 “de” 规则相同。') },
                  { row: 'moins', column: 'verbe', answer: 'moins que', example: 'Je dors moins que toi.', gloss: t('Là encore, rien entre le verbe et « moins ».', 'Again, nothing between the verb and “moins”.', '同样，动词与 “moins” 之间不加任何成分。') },
                  { row: 'egal', column: 'adj', answer: 'aussi … que', example: 'Elle est aussi rapide que lui.', gloss: t('« Aussi » pour l’égalité d’un adjectif — pas « autant ».', '“Aussi” for equality of an adjective — not “autant”.', '形容词的相等用 “aussi”，而非 “autant”。') },
                  { row: 'egal', column: 'nom', answer: 'autant de … que', example: 'J’ai autant de temps que toi.', gloss: t('Ici « autant », pas « aussi » : c’est l’erreur la plus fréquente.', 'Here “autant”, not “aussi”: this is the most frequent error.', '这里用 “autant” 而非 “aussi”：这是最常见的错误。') },
                  { row: 'egal', column: 'verbe', answer: 'autant que', example: 'Il travaille autant que moi.', gloss: t('Après un verbe, « autant que » sans complément intermédiaire.', 'After a verb, “autant que” with nothing in between.', '动词后用 “autant que”，中间不加成分。') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('Deux irréguliers, et un seul vrai piège', 'Two irregulars, and only one real trap', '两个不规则形式，一个真正的陷阱'),
              text: t(
                '**Bon** devient « meilleur » (jamais « plus bon ») et **bien** devient « mieux » (jamais « plus bien »). Le piège : « meilleur » est un adjectif, « mieux » un adverbe. « Ce gâteau est meilleur » mais « il cuisine mieux ».',
                '**Bon** becomes “meilleur” (never “plus bon”) and **bien** becomes “mieux” (never “plus bien”). The trap: “meilleur” is an adjective, “mieux” an adverb. “Ce gâteau est meilleur” but “il cuisine mieux”.',
                '**Bon** 变为 “meilleur”（绝不说 “plus bon”），**bien** 变为 “mieux”（绝不说 “plus bien”）。陷阱在于：“meilleur” 是形容词，“mieux” 是副词。要说 “Ce gâteau est meilleur”，但 “il cuisine mieux”。',
              ),
            },
            {
              type: 'examples',
              emoji: '💬',
              title: t('Comparer des noms et des actions', 'Comparing nouns and actions', '比较名词与动作'),
              items: [
                { fr: 'J’ai plus de livres que toi.', gloss: t('Devant un nom : plus **de** / moins **de** / autant **de**.', 'Before a noun: plus **de** / moins **de** / autant **de**.', '名词前用：plus **de** / moins **de** / autant **de**。') },
                { fr: 'Il travaille plus que moi.', gloss: t('Après un verbe : plus / moins / autant, sans « de ».', 'After a verb: plus / moins / autant, without “de”.', '动词后用 plus / moins / autant，不加 “de”。') },
                { fr: 'C’est la meilleure boulangerie du quartier.', gloss: t('Superlatif irrégulier de « bon » : « la meilleure ».', 'Irregular superlative of “bon”: “la meilleure”.', '“bon” 的不规则最高级：“la meilleure”。') },
                { fr: 'Ce vin est plus bon que l’autre.', gloss: t('« Plus bon » n’existe pas : il faut « meilleur ».', '“Plus bon” does not exist: it must be “meilleur”.', '“Plus bon” 不存在：应用 “meilleur”。'), incorrect: true },
              ],
            },
          ],
        },
        {
          id: 'les_a2de_3',
          moduleId: 'mod_a2de_1',
          kind: 'text',
          durationMin: 11,
          title: t('Donner son avis et le justifier', 'Giving an opinion and justifying it', '表达看法并说明理由'),
          summary: t(
            'Les verbes d’opinion, les connecteurs de cause et de conséquence, et l’art de nuancer.',
            'Opinion verbs, cause-and-consequence connectors, and the art of qualifying what you say.',
            '表达看法的动词、因果连接词，以及有分寸地表达的技巧。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Au niveau A2, un avis complet tient en trois temps : on l’**annonce**, on le **justifie**, on le **nuance**. Cette structure est exactement celle qu’attendent les examinateurs à l’oral du DELF.',
                'At A2 level, a complete opinion has three steps: you **state** it, you **justify** it, you **qualify** it. This is exactly the structure DELF examiners expect in the speaking test.',
                'A2 水平的完整观点分三步：**提出**、**论证**、**补充分寸**。这正是 DELF 口语考官期待的结构。',
              ),
            },
            {
              type: 'keyvalues',
              emoji: '🧠',
              title: t('Annoncer son avis', 'Stating your opinion', '提出看法'),
              entries: [
                { label: t('Je pense que / Je crois que', 'Je pense que / Je crois que', 'Je pense que / Je crois que'), value: t('Les deux plus neutres. Suivis de l’indicatif : « je pense que c’est vrai ».', 'The two most neutral. Followed by the indicative: “je pense que c’est vrai”.', '最中性的两个，后接直陈式：“je pense que c’est vrai”。') },
                { label: t('À mon avis / Selon moi', 'À mon avis / Selon moi', 'À mon avis / Selon moi'), value: t('En début de phrase, très fréquent à l’oral comme à l’écrit.', 'At the start of a sentence, very frequent in speech and writing.', '置于句首，口语和书面都很常用。') },
                { label: t('Je trouve que', 'Je trouve que', 'Je trouve que'), value: t('Pour un jugement personnel sur une expérience : « je trouve que ce film est trop long ».', 'For a personal judgement about an experience: “je trouve que ce film est trop long”.', '用于对经历的个人判断：“je trouve que ce film est trop long”。') },
                { label: t('Je ne pense pas que', 'Je ne pense pas que', 'Je ne pense pas que'), value: t('À la forme négative, le subjonctif s’impose : « je ne pense pas que ce soit vrai ».', 'In the negative, the subjunctive is required: “je ne pense pas que ce soit vrai”.', '否定形式要求虚拟式：“je ne pense pas que ce soit vrai”。') },
              ],
            },
            {
              type: 'table',
              emoji: '📊',
              caption: t('Justifier et enchaîner', 'Justifying and linking', '论证与衔接'),
              headers: [t('Relation', 'Relation', '关系'), t('Connecteurs', 'Connectors', '连接词'), t('Exemple', 'Example', '例句')],
              rows: [
                [t('Cause', 'Cause', '原因'), t('parce que, car, comme', 'parce que, car, comme', 'parce que、car、comme'), t('Je n’y vais pas parce que c’est trop loin.', 'Je n’y vais pas parce que c’est trop loin.', 'Je n’y vais pas parce que c’est trop loin.')],
                [t('Conséquence', 'Consequence', '结果'), t('donc, alors, c’est pourquoi', 'donc, alors, c’est pourquoi', 'donc、alors、c’est pourquoi'), t('Il pleut, donc on reste à la maison.', 'Il pleut, donc on reste à la maison.', 'Il pleut, donc on reste à la maison.')],
                [t('Opposition', 'Opposition', '转折'), t('mais, pourtant, par contre', 'mais, pourtant, par contre', 'mais、pourtant、par contre'), t('C’est cher, mais la qualité est là.', 'C’est cher, mais la qualité est là.', 'C’est cher, mais la qualité est là.')],
                [t('Addition', 'Addition', '递进'), t('et, de plus, en plus', 'et, de plus, en plus', 'et、de plus、en plus'), t('C’est pratique et, de plus, ce n’est pas cher.', 'C’est pratique et, de plus, ce n’est pas cher.', 'C’est pratique et, de plus, ce n’est pas cher.')],
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '🧠',
              title: t('Nuancer vaut mieux qu’affirmer', 'Qualifying beats asserting', '有分寸胜过绝对'),
              text: t(
                'Retenez ceci, {prenom} : un avis A2 réussi n’est pas un avis tranché, c’est un avis **construit**. Trois formules suffisent : « d’un côté… de l’autre », « c’est vrai que… mais », « ça dépend de ». Les examinateurs valorisent nettement cette souplesse.',
                'Remember this, {prenom}: a successful A2 opinion is not a blunt one, it is a **structured** one. Three formulas are enough: “d’un côté… de l’autre”, “c’est vrai que… mais”, “ça dépend de”. Examiners clearly reward this flexibility.',
                '{prenom}，请记住：成功的 A2 观点不是斩钉截铁，而是**有结构**。三个句式就够了：“d’un côté… de l’autre”“c’est vrai que… mais”“ça dépend de”。考官明显更青睐这种灵活性。',
              ),
            },
            {
              type: 'quote',
              text: t(
                'À mon avis, vivre en ville est plus pratique que vivre à la campagne, parce que tout est proche : les magasins, les transports, le travail. C’est vrai que c’est plus bruyant et plus cher, mais je trouve qu’on gagne beaucoup de temps. Ça dépend aussi de la période de la vie : avec des enfants, je choisirais peut-être la campagne.',
                'In my opinion, living in a city is more practical than living in the countryside, because everything is close by: shops, transport, work. It is true that it is noisier and more expensive, but I find you save a lot of time. It also depends on the stage of life: with children, I might choose the countryside.',
                '我认为住在城市比住在乡下更方便，因为一切都在附近：商店、交通、工作。的确更吵也更贵，但我觉得能省下很多时间。这也取决于人生阶段：如果有了孩子，我或许会选择乡下。',
              ),
              source: t('Réponse type — annoncer, justifier, nuancer', 'Model answer — state, justify, qualify', '范例回答 —— 提出、论证、补充分寸'),
            },
            {
              type: 'interactive',
              emoji: '🔗',
              title: t('Chaque formule à sa place', 'Each phrase in its place', '每个句式各就各位'),
              hint: t('Annoncer, nuancer, conclure : trois moments, trois outils.', 'Announcing, qualifying, concluding: three moments, three tools.', '亮观点、留余地、下结论：三个时刻，三样工具。'),
              widget: {
                kind: 'pairs',
                prompt: t('Cette formule sert à…', 'This phrase is for…', '这个句式用来……'),
                pairs: [
                  { id: 'p1', left: 'À mon avis,', right: t('annoncer que ce qui suit est une opinion', 'announce that an opinion follows', '预告接下来是个人观点') },
                  { id: 'p2', left: 'parce que', right: t('donner la raison, juste après l’avis', 'give the reason, right after the opinion', '紧跟观点给出理由') },
                  { id: 'p3', left: 'c’est vrai que… mais', right: t('reconnaître l’autre côté avant de trancher', 'grant the other side before deciding', '先承认另一面再作取舍') },
                  { id: 'p4', left: 'par exemple', right: t('appuyer l’avis sur un cas concret', 'back the opinion with a concrete case', '用具体事例支撑观点') },
                  { id: 'p5', left: 'donc', right: t('fermer le raisonnement par la conclusion', 'close the reasoning with the conclusion', '用结论收束论证') },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'mod_a2de_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur l’adjectif, la comparaison et l’opinion.', 'Six questions on adjectives, comparison and opinion.', '六道题，考查形容词、比较与观点表达。'),
      lessons: [
        {
          id: 'les_a2de_q',
          moduleId: 'mod_a2de_q',
          kind: 'quiz',
          durationMin: 7,
          quizId: 'qz_a2_decrire',
          title: t('Quiz — Décrire et comparer', 'Quiz — Describing and comparing', '测验 — 描写与比较'),
          summary: t('6 questions sur la qualification et l’avis.', '6 questions on qualifying and opinion.', '6 道题，考查修饰与观点表达。'),
        },
      ],
    },
  ],
};
