import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_a2_reperes';

export const a2ReperesCourse: Course = {
  id: ID,
  slug: 'a2-reperes',
  level: 'A2',
  accentFrom: '#67e8f9',
  accentTo: '#0891b2',
  status: 'published',
  title: t('Se repérer : lieu, temps et quantité', 'Finding your bearings: place, time and quantity', '定位表达：地点、时间与数量'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Demander son chemin, situer un événement dans le temps, acheter la bonne quantité. Les prépositions, les expressions de durée et les pronoms y et en.',
    'Asking the way, placing an event in time, buying the right amount. Prepositions, duration expressions and the pronouns y and en.',
    '问路、把事件安放在时间轴上、买到合适的分量。涵盖介词、时段表达以及代词 y 和 en。',
  ),
  tags: [t('Vie quotidienne', 'Everyday life', '日常生活'), t('Grammaire', 'Grammar', '语法')],
  modules: [
    {
      id: 'mod_a2re_1',
      courseId: ID,
      title: t('Situer dans l’espace et le temps', 'Locating in space and time', '在空间与时间中定位'),
      summary: t(
        'Prépositions de lieu, expressions de durée, quantités et pronoms compléments.',
        'Prepositions of place, duration expressions, quantities and object pronouns.',
        '地点介词、时段表达、数量以及宾语代词。',
      ),
      lessons: [
        {
          id: 'les_a2re_1',
          moduleId: 'mod_a2re_1',
          kind: 'text',
          durationMin: 11,
          title: t('Où ? Les prépositions de lieu', 'Where? Prepositions of place', '在哪里？地点介词'),
          summary: t(
            'Villes, pays, bâtiments : la préposition change, et le pronom « y » remplace tout.',
            'Cities, countries, buildings: the preposition changes, and the pronoun “y” replaces them all.',
            '城市、国家、建筑：介词各不相同，而代词 “y” 可以取代它们全部。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Choisir la bonne préposition de lieu demande deux informations : le **type de lieu** (ville, pays, île) et, pour les pays, leur **genre**. Une fois ces deux points fixés, le choix est mécanique.',
                'Choosing the right preposition of place requires two pieces of information: the **type of place** (city, country, island) and, for countries, their **gender**. Once these are settled, the choice is mechanical.',
                '选对地点介词需要两项信息：**地点类型**（城市、国家、岛屿），以及国家的**性别**。一旦这两点确定，选择就是机械的。',
              ),
            },
            {
              type: 'table',
              emoji: '📍',
              caption: t('Aller quelque part, venir de quelque part', 'Going somewhere, coming from somewhere', '去某地、从某地来'),
              headers: [t('Lieu', 'Place', '地点'), t('Aller à', 'Going to', '去'), t('Venir de', 'Coming from', '来自')],
              rows: [
                [t('Ville', 'City', '城市'), t('à Paris, à Shanghai', 'à Paris, à Shanghai', 'à Paris、à Shanghai'), t('de Paris, de Shanghai', 'de Paris, de Shanghai', 'de Paris、de Shanghai')],
                [t('Pays féminin (-e)', 'Feminine country (-e)', '阴性国家（以 -e 结尾）'), t('en France, en Chine', 'en France, en Chine', 'en France、en Chine'), t('de France, de Chine', 'de France, de Chine', 'de France、de Chine')],
                [t('Pays masculin', 'Masculine country', '阳性国家'), t('au Japon, au Canada', 'au Japon, au Canada', 'au Japon、au Canada'), t('du Japon, du Canada', 'du Japon, du Canada', 'du Japon、du Canada')],
                [t('Pays pluriel', 'Plural country', '复数国名'), t('aux États-Unis, aux Pays-Bas', 'aux États-Unis, aux Pays-Bas', 'aux États-Unis、aux Pays-Bas'), t('des États-Unis, des Pays-Bas', 'des États-Unis, des Pays-Bas', 'des États-Unis、des Pays-Bas')],
                [t('Chez une personne', 'At someone’s place', '在某人处'), t('chez le médecin, chez moi', 'chez le médecin, chez moi', 'chez le médecin、chez moi'), t('de chez le médecin', 'de chez le médecin', 'de chez le médecin')],
              ],
            },
            {
              type: 'interactive',
              emoji: '🗺️',
              title: t('Le sélecteur de préposition', 'The preposition picker', '介词选择器'),
              hint: t(
                'Croisez le type de lieu et le sens du déplacement, {prenom}.',
                'Cross the type of place with the direction of travel, {prenom}.',
                '{prenom}，将地点类型与位移方向交叉选择。',
              ),
              widget: {
                kind: 'matrix',
                rowsLabel: t('Type de lieu', 'Type of place', '地点类型'),
                columnsLabel: t('Sens du déplacement', 'Direction of travel', '位移方向'),
                rows: [
                  { id: 'city', label: t('Ville', 'City', '城市') },
                  { id: 'fem', label: t('Pays féminin', 'Feminine country', '阴性国家') },
                  { id: 'masc', label: t('Pays masculin', 'Masculine country', '阳性国家') },
                  { id: 'plur', label: t('Pays pluriel', 'Plural country', '复数国名') },
                ],
                columns: [
                  { id: 'to', label: t('J’y vais', 'I am going there', '我去那里') },
                  { id: 'from', label: t('J’en viens', 'I come from there', '我从那里来') },
                ],
                cells: [
                  { row: 'city', column: 'to', answer: 'à', example: 'Je vais à Lyon.', gloss: t('Toutes les villes prennent « à », sans exception de genre.', 'Every city takes “à”, with no gender exception.', '所有城市名前一律用 “à”，不分性别。') },
                  { row: 'city', column: 'from', answer: 'de', example: 'Je viens de Shanghai.', gloss: t('« De » simple, sans article, devant un nom de ville.', 'A plain “de”, with no article, before a city name.', '城市名前用简单的 “de”，不加冠词。') },
                  { row: 'fem', column: 'to', answer: 'en', example: 'Je vais en France, en Chine.', gloss: t('Les pays en -e sont presque tous féminins, et prennent « en ».', 'Countries ending in -e are nearly all feminine, and take “en”.', '以 -e 结尾的国家几乎都是阴性，用 “en”。') },
                  { row: 'fem', column: 'from', answer: 'de', example: 'Je viens de Chine.', gloss: t('Toujours « de » nu, jamais « de la » pour un pays féminin.', 'Always a bare “de”, never “de la” for a feminine country.', '一律用光杆 “de”，阴性国名绝不用 “de la”。') },
                  { row: 'masc', column: 'to', answer: 'au', example: 'Je vais au Japon, au Canada.', gloss: t('« Au » est la contraction de « à + le ». Attention : le Mexique est masculin malgré son -e.', '“Au” is the contraction of “à + le”. Note: le Mexique is masculine despite its -e.', '“Au” 是 “à + le” 的缩合。注意：le Mexique 虽以 -e 结尾却是阳性。') },
                  { row: 'masc', column: 'from', answer: 'du', example: 'Je viens du Japon.', gloss: t('« Du » est la contraction de « de + le ».', '“Du” is the contraction of “de + le”.', '“Du” 是 “de + le” 的缩合。') },
                  { row: 'plur', column: 'to', answer: 'aux', example: 'Je vais aux États-Unis.', gloss: t('« Aux » vaut pour « à + les », avec liaison en [z].', '“Aux” stands for “à + les”, with a [z] liaison.', '“Aux” 相当于 “à + les”，联诵为 [z]。') },
                  { row: 'plur', column: 'from', answer: 'des', example: 'Je viens des Pays-Bas.', gloss: t('« Des » vaut pour « de + les ».', '“Des” stands for “de + les”.', '“Des” 相当于 “de + les”。') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🔀',
              title: t('L’exception mémorable : le Mexique', 'The memorable exception: le Mexique', '值得记住的例外：le Mexique'),
              text: t(
                'La règle « pays en -e = féminin » a quelques exceptions, dont le Mexique, le Cambodge et le Mozambique : on dit « au Mexique ». Elles sont assez rares pour être apprises une par une.',
                'The rule “country ending in -e = feminine” has a few exceptions, including le Mexique, le Cambodge and le Mozambique: you say “au Mexique”. They are rare enough to be learned one by one.',
                '“以 -e 结尾的国家为阴性”这条规则有少数例外，包括 le Mexique、le Cambodge 和 le Mozambique：要说 “au Mexique”。数量少，可逐个记忆。',
              ),
            },
            { type: 'heading', emoji: '✍️', text: t('Décrire une position', 'Describing a position', '描述位置') },
            {
              type: 'keyvalues',
              emoji: '📍',
              title: t('Les prépositions de position', 'Prepositions of position', '方位介词'),
              entries: [
                { label: t('sur / sous', 'sur / sous', 'sur / sous'), value: t('Le livre est sur la table, le chat est sous la chaise.', 'Le livre est sur la table, le chat est sous la chaise.', 'Le livre est sur la table, le chat est sous la chaise.') },
                { label: t('devant / derrière', 'devant / derrière', 'devant / derrière'), value: t('Je t’attends devant la gare, le jardin est derrière la maison.', 'Je t’attends devant la gare, le jardin est derrière la maison.', 'Je t’attends devant la gare, le jardin est derrière la maison.') },
                { label: t('à côté de / en face de', 'à côté de / en face de', 'à côté de / en face de'), value: t('La pharmacie est à côté de la banque, en face du parc. Attention : « de + le » = « du ».', 'La pharmacie est à côté de la banque, en face du parc. Note: “de + le” = “du”.', 'La pharmacie est à côté de la banque, en face du parc。注意：“de + le” = “du”。') },
                { label: t('entre / parmi', 'entre / parmi', 'entre / parmi'), value: t('Entre deux éléments, parmi plusieurs : entre la poste et l’école ; parmi les invités.', 'Between two items, among several: entre la poste et l’école; parmi les invités.', '两者之间用 entre，多者之中用 parmi：entre la poste et l’école；parmi les invités。') },
                { label: t('au bout de / au coin de', 'au bout de / au coin de', 'au bout de / au coin de'), value: t('Indispensables pour indiquer un chemin : « au bout de la rue, au coin de l’avenue ».', 'Essential for giving directions: “au bout de la rue, au coin de l’avenue”.', '指路时必不可少：“au bout de la rue, au coin de l’avenue”。') },
              ],
            },
            {
              type: 'examples',
              emoji: '👉',
              title: t('Le pronom « y » remplace le lieu', 'The pronoun “y” replaces the place', '代词 “y” 取代地点'),
              items: [
                { fr: 'Tu vas à Lyon ? — Oui, j’y vais demain.', gloss: t('« y » remplace « à Lyon » et se place avant le verbe.', '“y” replaces “à Lyon” and goes before the verb.', '“y” 取代 “à Lyon”，置于动词之前。') },
                { fr: 'Elle habite en Chine depuis dix ans ? — Elle y habite depuis dix ans.', gloss: t('« y » vaut pour tout complément de lieu introduit par à, en, dans, sur.', '“y” works for any place complement introduced by à, en, dans, sur.', '由 à、en、dans、sur 引导的地点补语都可用 “y” 取代。') },
                { fr: 'Je vais y aller.', gloss: t('Avec un infinitif, « y » se place juste devant celui-ci.', 'With an infinitive, “y” goes immediately before it.', '与不定式连用时，“y” 紧置于不定式之前。') },
                { fr: 'Oui, je vais y.', gloss: t('« y » ne peut jamais terminer une phrase : « j’y vais ».', '“y” can never end a sentence: “j’y vais”.', '“y” 绝不能置于句末：应说 “j’y vais”。'), incorrect: true },
              ],
            },
          ],
        },
        {
          id: 'les_a2re_2',
          moduleId: 'mod_a2re_1',
          kind: 'text',
          durationMin: 10,
          title: t('Quand ? Depuis, pendant, il y a, dans', 'When? Depuis, pendant, il y a, dans', '何时？Depuis、pendant、il y a、dans'),
          summary: t(
            'Quatre expressions que les apprenants confondent systématiquement, et comment les départager.',
            'Four expressions learners systematically confuse, and how to tell them apart.',
            '四个学习者常混淆的表达，以及区分它们的方法。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Ces quatre mots répondent tous à « combien de temps ? », mais chacun se rattache à un moment différent : maintenant, le passé, ou l’avenir. Le tableau ci-dessous les distingue une fois pour toutes.',
                'These four words all answer “how long?”, but each is anchored to a different moment: now, the past, or the future. The table below separates them once and for all.',
                '这四个词都回答“多久”，但各自锚定不同的时间点：现在、过去或将来。下表一次性把它们区分清楚。',
              ),
            },
            {
              type: 'table',
              emoji: '🕰️',
              caption: t('Quatre expressions de durée', 'Four duration expressions', '四种时段表达'),
              headers: [t('Mot', 'Word', '词'), t('Sens', 'Meaning', '含义'), t('Temps du verbe', 'Verb tense', '动词时态'), t('Exemple', 'Example', '例句')],
              rows: [
                [t('depuis', 'depuis', 'depuis'), t('a commencé dans le passé, continue maintenant', 'started in the past, still going on', '始于过去，持续至今'), t('présent', 'present', '现在时'), t('J’habite ici depuis trois ans.', 'J’habite ici depuis trois ans.', 'J’habite ici depuis trois ans.')],
                [t('pendant', 'pendant', 'pendant'), t('une durée complète et terminée', 'a complete, finished duration', '完整且已结束的时段'), t('passé composé', 'passé composé', '复合过去时'), t('J’ai vécu à Lille pendant trois ans.', 'J’ai vécu à Lille pendant trois ans.', 'J’ai vécu à Lille pendant trois ans.')],
                [t('il y a', 'il y a', 'il y a'), t('un moment précis dans le passé', 'a precise moment in the past', '过去的某个具体时刻'), t('passé composé', 'passé composé', '复合过去时'), t('Je suis arrivé il y a deux heures.', 'Je suis arrivé il y a deux heures.', 'Je suis arrivé il y a deux heures.')],
                [t('dans', 'dans', 'dans'), t('un moment précis à venir', 'a precise moment to come', '将来的某个具体时刻'), t('futur / futur proche', 'future / near future', '将来时 / 近将来时'), t('Le train part dans dix minutes.', 'Le train part dans dix minutes.', 'Le train part dans dix minutes.')],
              ],
            },
            {
              type: 'interactive',
              emoji: '📆',
              title: t('Quatre mots sur une frise', 'Four words on a timeline', '时间轴上的四个词'),
              hint: t(
                'Chaque repère montre le mot attendu, {prenom}, et le temps qui va avec.',
                'Each marker shows the word expected, {prenom}, and the tense that goes with it.',
                '{prenom}，每个标记显示对应的词及其搭配的时态。',
              ),
              widget: {
                kind: 'timeline',
                points: [
                  {
                    id: 'ilya',
                    label: t('Point du passé', 'A point in the past', '过去的某一点'),
                    headline: t('il y a + durée → passé composé', 'il y a + duration → passé composé', 'il y a + 时长 → 复合过去时'),
                    example: 'Je suis arrivé il y a deux heures.',
                    gloss: t('Un moment daté, pas une durée : on compte à rebours depuis maintenant.', 'A dated moment, not a duration: you count backwards from now.', '一个有明确时点的时刻，而非时段：从现在往回数。'),
                  },
                  {
                    id: 'pendant',
                    label: t('Période close', 'A closed period', '已结束的时段'),
                    headline: t('pendant + durée → passé composé', 'pendant + duration → passé composé', 'pendant + 时长 → 复合过去时'),
                    example: 'J’ai vécu à Lille pendant trois ans.',
                    gloss: t('La période a un début et une fin, tous deux dans le passé.', 'The period has a beginning and an end, both in the past.', '这段时间有始有终，两端都在过去。'),
                  },
                  {
                    id: 'depuis',
                    label: t('Jusqu’à maintenant', 'Up to now', '延续至今'),
                    headline: t('depuis + durée → présent', 'depuis + duration → present', 'depuis + 时长 → 现在时'),
                    example: 'J’habite ici depuis trois ans.',
                    gloss: t('C’est le piège principal : la continuation impose le présent, jamais le passé composé.', 'This is the main trap: continuation requires the present, never the passé composé.', '这是主要陷阱：持续意味着必须用现在时，绝不用复合过去时。'),
                  },
                  {
                    id: 'dans',
                    label: t('Point à venir', 'A point to come', '将来的某一点'),
                    headline: t('dans + durée → futur', 'dans + duration → future', 'dans + 时长 → 将来时'),
                    example: 'Le train part dans dix minutes.',
                    gloss: t('« Dans » regarde vers l’avant ; « en » indiquerait le temps mis pour faire quelque chose.', '“Dans” looks forward; “en” would indicate the time taken to do something.', '“Dans” 指向未来；“en” 则表示完成某事所需的时间。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🔄',
              title: t('Depuis se construit avec le présent, pas le passé', 'Depuis takes the present, not the past', 'Depuis 搭配现在时，而非过去时'),
              text: t(
                'L’anglais dit « I have lived here for three years », le chinois marque la continuation autrement. Le français, lui, emploie le **présent** : « j’habite ici depuis trois ans ». Dire « j’ai habité ici depuis trois ans » signifierait que c’est fini.',
                'English says “I have lived here for three years”; Chinese marks continuation differently. French uses the **present**: “j’habite ici depuis trois ans”. Saying “j’ai habité ici depuis trois ans” would mean it is over.',
                '英语说 “I have lived here for three years”，中文用别的方式表示持续。法语则用**现在时**：“j’habite ici depuis trois ans”。若说 “j’ai habité ici depuis trois ans”，意思就变成已经结束了。',
              ),
            },
            {
              type: 'examples',
              emoji: '💬',
              title: t('Les distinguer en contexte', 'Telling them apart in context', '在语境中区分'),
              items: [
                { fr: 'J’apprends le français depuis six mois.', gloss: t('J’apprends encore aujourd’hui : présent + depuis.', 'I am still learning today: present + depuis.', '今天仍在学：现在时 + depuis。') },
                { fr: 'J’ai appris le français pendant six mois, puis j’ai arrêté.', gloss: t('La période est close : passé composé + pendant.', 'The period is closed: passé composé + pendant.', '这段时间已结束：复合过去时 + pendant。') },
                { fr: 'J’ai commencé le français il y a six mois.', gloss: t('Un point de départ daté, pas une durée.', 'A dated starting point, not a duration.', '一个有明确日期的起点，而非时段。') },
                { fr: 'J’ai habité ici depuis trois ans.', gloss: t('Contradiction : « depuis » annonce une continuation, le passé composé la ferme.', 'A contradiction: “depuis” announces continuation, the passé composé closes it.', '自相矛盾：“depuis” 表示持续，复合过去时却将其终结。'), incorrect: true },
              ],
            },
          ],
        },
        {
          id: 'les_a2re_3',
          moduleId: 'mod_a2re_1',
          kind: 'text',
          durationMin: 10,
          title: t('Combien ? Quantités et pronom « en »', 'How much? Quantities and the pronoun “en”', '多少？数量与代词 “en”'),
          summary: t(
            'Du pain ou un pain, beaucoup de ou beaucoup des, et le pronom qui évite les répétitions.',
            'Du pain or un pain, beaucoup de or beaucoup des, and the pronoun that avoids repetition.',
            'Du pain 还是 un pain、beaucoup de 还是 beaucoup des，以及避免重复的代词。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Pour parler de quantité, le français distingue ce qui se **compte** (deux pommes) de ce qui se **prélève** (du café). Cette distinction est absente du chinois et floue en anglais : elle mérite dix minutes d’attention.',
                'To talk about quantity, French distinguishes what can be **counted** (two apples) from what is **taken from a mass** (some coffee). This distinction does not exist in Chinese and is blurred in English: it deserves ten minutes of attention.',
                '表达数量时，法语区分**可数**之物（两个苹果）与**从整体中取用**之物（一些咖啡）。中文没有这种区分，英语中也较模糊：值得花十分钟留意。',
              ),
            },
            {
              type: 'table',
              emoji: '🔢',
              caption: t('Compter ou prélever', 'Counting or taking a portion', '计数还是取量'),
              headers: [t('Situation', 'Situation', '情形'), t('Article', 'Article', '冠词'), t('Exemple', 'Example', '例子')],
              rows: [
                [t('On compte les unités', 'You count units', '计算个数'), t('un, une, deux, trois…', 'un, une, deux, trois…', 'un、une、deux、trois……'), t('Je voudrais deux croissants.', 'Je voudrais deux croissants.', 'Je voudrais deux croissants.')],
                [t('On prélève une part', 'You take a portion', '取一部分'), t('du, de la, de l’', 'du, de la, de l’', 'du、de la、de l’'), t('Je voudrais du pain, de la confiture.', 'Je voudrais du pain, de la confiture.', 'Je voudrais du pain, de la confiture.')],
                [t('Après une quantité précise', 'After a precise quantity', '在明确数量之后'), t('de (invariable)', 'de (invariable)', 'de（不变）'), t('un kilo de tomates, beaucoup de travail', 'un kilo de tomates, beaucoup de travail', 'un kilo de tomates、beaucoup de travail')],
                [t('Après une négation', 'After a negative', '否定之后'), t('de (invariable)', 'de (invariable)', 'de（不变）'), t('Je ne bois pas de café.', 'Je ne bois pas de café.', 'Je ne bois pas de café.')],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('« Beaucoup de », jamais « beaucoup des »', '“Beaucoup de”, never “beaucoup des”', '只说 “beaucoup de”，不说 “beaucoup des”'),
              text: t(
                'Toutes les expressions de quantité — beaucoup, peu, assez, trop, un peu, un kilo, une bouteille — sont suivies de **de** seul. « Beaucoup de gens », jamais « beaucoup des gens ».',
                'All quantity expressions — beaucoup, peu, assez, trop, un peu, un kilo, une bouteille — are followed by **de** alone. “Beaucoup de gens”, never “beaucoup des gens”.',
                '所有数量表达——beaucoup、peu、assez、trop、un peu、un kilo、une bouteille——后面只接 **de**。要说 “beaucoup de gens”，绝不说 “beaucoup des gens”。',
              ),
            },
            { type: 'heading', emoji: '👉', text: t('Le pronom « en »', 'The pronoun “en”', '代词 “en”') },
            {
              type: 'paragraph',
              text: t(
                '« En » remplace un groupe introduit par **de**, **du**, **de la** ou **des**, ainsi qu’un nom précédé d’un nombre. Comme « y », il se place avant le verbe. Dans une réponse, on répète la quantité à la fin.',
                '“En” replaces a group introduced by **de**, **du**, **de la** or **des**, and also a noun preceded by a number. Like “y”, it goes before the verb. In an answer, the quantity is repeated at the end.',
                '“En” 取代由 **de**、**du**、**de la** 或 **des** 引导的成分，也可取代数词后的名词。与 “y” 一样置于动词之前。回答时要在句末重复数量。',
              ),
            },
            {
              type: 'examples',
              emoji: '💬',
              title: t('« En » à l’œuvre', '“En” in action', '“En” 的用法'),
              items: [
                { fr: 'Tu veux du café ? — Oui, j’en veux bien.', gloss: t('« en » remplace « du café ».', '“en” replaces “du café”.', '“en” 取代 “du café”。') },
                { fr: 'Vous avez des enfants ? — Oui, j’en ai deux.', gloss: t('Avec un nombre, on répète le nombre à la fin.', 'With a number, the number is repeated at the end.', '带数词时，要在句末重复数词。') },
                { fr: 'Elle parle souvent de son travail ? — Elle en parle tout le temps.', gloss: t('« en » vaut aussi pour « de + chose » après un verbe.', '“en” also covers “de + thing” after a verb.', '动词后的 “de + 事物” 同样用 “en” 取代。') },
                { fr: 'Oui, j’ai deux.', gloss: t('Sans « en », la phrase est incomplète : « j’en ai deux ».', 'Without “en” the sentence is incomplete: “j’en ai deux”.', '缺了 “en” 句子就不完整：应说 “j’en ai deux”。'), incorrect: true },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mod_a2re_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur les prépositions, la durée et la quantité.', 'Six questions on prepositions, duration and quantity.', '六道题，考查介词、时段与数量。'),
      lessons: [
        {
          id: 'les_a2re_q',
          moduleId: 'mod_a2re_q',
          kind: 'quiz',
          durationMin: 7,
          quizId: 'qz_a2_reperes',
          title: t('Quiz — Se repérer', 'Quiz — Finding your bearings', '测验 — 定位表达'),
          summary: t('6 questions sur le lieu, le temps et la quantité.', '6 questions on place, time and quantity.', '6 道题，考查地点、时间与数量。'),
        },
      ],
    },
  ],
};
