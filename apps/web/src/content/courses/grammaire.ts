import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_grammaire';

export const grammaireCourse: Course = {
  id: ID,
  slug: 'grammaire',
  level: 'B1',
  accentFrom: '#67e8f9',
  accentTo: '#2563eb',
  status: 'published',
  title: t('Grammaire française essentielle', 'Essential French grammar', '法语核心语法'),
  subtitle: t('2 modules · 4 leçons · 1 quiz noté', '2 modules · 4 lessons · 1 graded quiz', '2 个单元 · 4 节课 · 1 次评分测验'),
  description: t(
    'Les quatre points de grammaire qui pèsent le plus lourd dans une copie : le genre des noms, l’accord du participe passé, les pronoms relatifs et l’expression de la logique. Chaque règle est posée, illustrée, puis mise à l’épreuve.',
    'The four grammar points that weigh most heavily in a written paper: noun gender, past participle agreement, relative pronouns and expressing logic. Each rule is stated, illustrated, then tested.',
    '在书面考试中最关键的四个语法点：名词的性、过去分词配合、关系代词以及逻辑关系的表达。每条规则都先讲解、再举例、最后检验。',
  ),
  tags: [t('Grammaire', 'Grammar', '语法'), t('Niveau B1', 'Level B1', 'B1 级别')],
  modules: [
    {
      id: 'mod_gram_1',
      courseId: ID,
      title: t('La phrase et ses accords', 'The sentence and its agreements', '句子及其性数配合'),
      summary: t(
        'Ce qui décide de la forme des mots : le genre, le nombre et l’auxiliaire.',
        'What decides the form of words: gender, number and the auxiliary.',
        '决定词形的因素：性、数与助动词。',
      ),
      lessons: [
        {
          id: 'les_gram_1',
          moduleId: 'mod_gram_1',
          kind: 'text',
          durationMin: 11,
          title: t('Le genre des noms : ce qui se devine, ce qui s’apprend', 'Noun gender: what you can guess, what you must learn', '名词的性：可推断的与需记忆的'),
          summary: t(
            'Les terminaisons qui trahissent le genre, et la courte liste des pièges à mémoriser.',
            'The endings that give gender away, and the short list of traps to memorise.',
            '能够提示词性的词尾，以及必须记住的少数陷阱。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'En français, tout nom porte un [[genre|genre]] : masculin ou féminin. Ce n’est pas une question de logique — une table n’a rien de féminin — mais une propriété du mot, qu’il faut connaître pour accorder le [[determinant|déterminant]] et l’adjectif. La bonne nouvelle : la terminaison du nom permet de deviner juste dans environ 80 % des cas.',
                'In French every noun carries a [[genre|gender]]: masculine or feminine. It is not a matter of logic — a table is not feminine in any real sense — but a property of the word, which you need to know in order to make the [[determinant|determiner]] and the adjective agree. The good news: the ending of the noun lets you guess correctly about 80% of the time.',
                '在法语中，每个名词都有[[genre|性]]：阳性或阴性。这并非逻辑问题——桌子本身并无阴性可言——而是词语的属性，必须掌握它才能让[[determinant|限定词]]和形容词正确配合。好消息是：名词词尾能让你在约 80% 的情况下猜对。',
              ),
            },
            { type: 'heading', emoji: '🔹', text: t('Les terminaisons fiables', 'Reliable endings', '可靠的词尾') },
            {
              type: 'table',
              headers: [
                t('Terminaison', 'Ending', '词尾'),
                t('Genre', 'Gender', '性'),
                t('Exemples', 'Examples', '例词'),
                t('Exceptions à retenir', 'Exceptions to remember', '需记住的例外'),
              ],
              rows: [
                [t('-tion, -sion, -té', '-tion, -sion, -té', '-tion, -sion, -té'), t('féminin', 'feminine', '阴性'), t('la nation, la décision, la beauté', 'la nation, la décision, la beauté', 'la nation, la décision, la beauté'), t('le côté, le comité', 'le côté, le comité', 'le côté, le comité')],
                [t('-ment, -age, -eau', '-ment, -age, -eau', '-ment, -age, -eau'), t('masculin', 'masculine', '阳性'), t('le gouvernement, le village, le bureau', 'le gouvernement, le village, le bureau', 'le gouvernement, le village, le bureau'), t('la page, la plage, l’eau', 'la page, la plage, l’eau', 'la page, la plage, l’eau')],
                [t('-ance, -ence, -ude', '-ance, -ence, -ude', '-ance, -ence, -ude'), t('féminin', 'feminine', '阴性'), t('la confiance, la patience, l’habitude', 'la confiance, la patience, l’habitude', 'la confiance, la patience, l’habitude'), t('le silence', 'le silence', 'le silence')],
                [t('-isme, -oir', '-isme, -oir', '-isme, -oir'), t('masculin', 'masculine', '阳性'), t('le tourisme, le devoir', 'le tourisme, le devoir', 'le tourisme, le devoir'), t('— (aucune courante)', '— (none common)', '—（无常见例外）')],
                [t('-eur (abstrait)', '-eur (abstract)', '-eur（抽象名词）'), t('féminin', 'feminine', '阴性'), t('la douceur, la valeur', 'la douceur, la valeur', 'la douceur, la valeur'), t('le bonheur, le malheur, l’honneur', 'le bonheur, le malheur, l’honneur', 'le bonheur, le malheur, l’honneur')],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🏷️',
              title: t('Apprenez le nom avec son article', 'Learn the noun with its article', '记单词时连同冠词一起记'),
              text: t(
                'Ne notez jamais « problème » seul dans votre carnet : notez « un problème ». Le déterminant fait partie du mot pour un apprenant, et ce réflexe supprime la moitié des fautes d’accord en production écrite.',
                'Never write “problème” alone in your notebook: write “un problème”. For a learner the determiner is part of the word, and this habit removes half of your agreement errors in writing.',
                '不要在笔记本上只写“problème”，而要写“un problème”。对学习者而言，限定词是词语的一部分；养成这个习惯能消除书面表达中一半的配合错误。',
              ),
            },
            { type: 'heading', emoji: '🪤', text: t('Les pièges classiques', 'Classic traps', '经典陷阱') },
            {
              type: 'examples',
              emoji: '💬',
              title: t('À mémoriser tels quels', 'Memorise these as they are', '原样记忆'),
              items: [
                { fr: 'un problème, un système, un thème, un programme', gloss: t('Terminaison -ème / -amme, pourtant masculins.', 'Ending in -ème / -amme, yet masculine.', '虽以 -ème / -amme 结尾，却是阳性。') },
                { fr: 'une page, une plage, une image, une cage', gloss: t('Les seuls -age féminins courants.', 'The only common feminine -age words.', '常见的少数几个阴性 -age 词。') },
                { fr: 'un musée, un lycée, un trophée', gloss: t('En -ée mais masculins ; « une idée » reste féminine.', 'In -ée but masculine; “une idée” stays feminine.', '以 -ée 结尾却是阳性；“une idée”仍为阴性。') },
                { fr: 'le poste (l’emploi) / la poste (le service)', gloss: t('Le genre change le sens : soyez attentif.', 'Gender changes the meaning here: pay attention.', '性别不同，词义也不同，需注意。') },
              ],
            },
            { type: 'heading', emoji: '🏷️', text: t('L’accord se propage', 'Agreement spreads', '配合会向外扩散') },
            {
              type: 'paragraph',
              text: t(
                'Une fois le genre connu, l’[[accord|accord]] se propage mécaniquement à tout ce qui dépend du nom : déterminant, adjectif épithète, adjectif attribut et [[participe-passe|participe passé]]. Une seule erreur de genre en début de phrase entraîne donc souvent trois fautes visibles à la correction.',
                'Once the gender is known, [[accord|agreement]] spreads mechanically to everything depending on the noun: determiner, attributive adjective, predicative adjective and [[participe-passe|past participle]]. A single gender error at the start of a sentence therefore often produces three visible mistakes for the examiner.',
                '一旦确定了性，[[accord|配合]]便会机械地扩散到依附于该名词的一切成分：限定词、定语形容词、表语形容词以及[[participe-passe|过去分词]]。因此，句首一个性别错误往往会在阅卷时暴露出三处错误。',
              ),
            },
            {
              type: 'examples',
              emoji: '🪤',
              title: t('Une erreur, trois conséquences', 'One error, three consequences', '一个错误，三重后果'),
              items: [
                { fr: 'Cette décision, prise hier, s’est révélée efficace.', gloss: t('Chaîne correcte au féminin.', 'Correct feminine chain.', '正确的阴性配合链。') },
                { fr: 'Ce décision, pris hier, s’est révélé efficace.', gloss: t('Une seule erreur de genre en contamine trois autres.', 'One gender error contaminates three others.', '一个性别错误污染了另外三处。'), incorrect: true },
              ],
            },
          ],
        },
        {
          id: 'les_gram_2',
          moduleId: 'mod_gram_1',
          kind: 'text',
          durationMin: 13,
          title: t('L’accord du participe passé, en trois questions', 'Past participle agreement, in three questions', '过去分词配合的三个问题'),
          summary: t(
            'La règle réputée difficile devient simple si on la pose comme un arbre de décision.',
            'The rule with a fearsome reputation becomes simple once framed as a decision tree.',
            '这条以难著称的规则，只要写成决策树就变得简单。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'L’accord du [[participe-passe|participe passé]] concentre à lui seul une part importante des fautes, y compris chez les francophones natifs. Pourtant, trois questions posées dans l’ordre suffisent à trancher presque tous les cas rencontrés au DELF.',
                'Agreement of the [[participe-passe|past participle]] alone accounts for a large share of mistakes, even among native speakers. Yet three questions asked in order settle almost every case you will meet in the DELF.',
                '[[participe-passe|过去分词]]的配合本身就占了错误的很大一部分，连母语者也不例外。但只要按顺序问三个问题，几乎所有 DELF 中出现的情况都能解决。',
              ),
            },
            {
              type: 'list',
              ordered: true,
              items: [
                t(
                  'Quel est l’[[auxiliaire|auxiliaire]] ? Avec **être**, le participe s’accorde avec le sujet.',
                  'Which [[auxiliaire|auxiliary]] is used? With **être**, the participle agrees with the subject.',
                  '使用哪个[[auxiliaire|助动词]]？用 **être** 时，分词与主语配合。',
                ),
                t(
                  'Avec **avoir**, y a-t-il un [[cod|COD]] ? S’il n’y en a pas, aucun accord.',
                  'With **avoir**, is there a [[cod|direct object]]? If not, no agreement.',
                  '用 **avoir** 时，是否有[[cod|直接宾语]]？没有则不配合。',
                ),
                t(
                  'Si oui, ce COD est-il **placé avant** le verbe ? Seulement alors, le participe s’accorde avec lui.',
                  'If there is one, does it come **before** the verb? Only then does the participle agree with it.',
                  '如果有，它是否**位于动词之前**？只有这时分词才与之配合。',
                ),
              ],
            },
            { type: 'figure', figureId: 'accord-arbre', caption: t('L’arbre de décision complet, en trois questions.', 'The full decision tree, in three questions.', '完整的三步决策树。') },
            { type: 'heading', emoji: '🏷️', text: t('Le cas « être » : l’accord avec le sujet', 'The “être” case: agreement with the subject', '“être”的情况：与主语配合') },
            {
              type: 'examples',
              emoji: '💬',
              title: t('Auxiliaire être', 'Auxiliary être', '助动词 être'),
              items: [
                { fr: 'Elle est partie à huit heures.', gloss: t('Sujet féminin singulier → partie.', 'Feminine singular subject → partie.', '主语为阴性单数 → partie。') },
                { fr: 'Mes sœurs sont arrivées hier soir.', gloss: t('Sujet féminin pluriel → arrivées.', 'Feminine plural subject → arrivées.', '主语为阴性复数 → arrivées。') },
                { fr: 'Les documents ont été envoyés.', gloss: t('[[voix-passive|Voix passive]] : accord avec le sujet.', '[[voix-passive|Passive voice]]: agreement with the subject.', '[[voix-passive|被动语态]]：与主语配合。') },
              ],
            },
            { type: 'heading', emoji: '🔹', text: t('Le cas « avoir » : la place du COD décide', 'The “avoir” case: the position of the object decides', '“avoir”的情况：由宾语位置决定') },
            {
              type: 'examples',
              emoji: '💬',
              title: t('Auxiliaire avoir', 'Auxiliary avoir', '助动词 avoir'),
              items: [
                { fr: 'J’ai lu ces trois romans.', gloss: t('COD après le verbe → pas d’accord.', 'Object after the verb → no agreement.', '宾语在动词之后 → 不配合。') },
                { fr: 'Ces trois romans, je les ai lus.', gloss: t('COD « les » placé avant → accord au masculin pluriel.', 'Object “les” placed before → masculine plural agreement.', '宾语“les”前置 → 阳性复数配合。') },
                { fr: 'La lettre que j’ai reçue est encourageante.', gloss: t('« que » reprend « la lettre », placé avant → reçue.', '“que” refers to “la lettre”, placed before → reçue.', '“que”指代“la lettre”，位于前 → reçue。') },
                { fr: 'Elle a téléphoné à ses parents.', gloss: t('Pas de COD, seulement un [[coi|COI]] → aucun accord.', 'No direct object, only an [[coi|indirect object]] → no agreement.', '没有直接宾语，只有[[coi|间接宾语]] → 不配合。') },
              ],
            },
            {
              type: 'interactive',
              emoji: '🔀',
              title: t('L’accord du participe, en deux questions', 'Participle agreement, in two questions', '过去分词配合：两个问题'),
              hint: t(
                'Choisissez l’auxiliaire, puis la place du complément d’objet direct.',
                'Pick the auxiliary, then where the direct object sits.',
                '先选择助动词，再选择直接宾语的位置。',
              ),
              widget: {
                kind: 'matrix',
                rowsLabel: t('Auxiliaire', 'Auxiliary', '助动词'),
                columnsLabel: t('Place du COD', 'Position of the direct object', '直接宾语的位置'),
                rows: [
                  { id: 'avoir', label: t('avoir', 'avoir', 'avoir') },
                  { id: 'etre', label: t('être', 'être', 'être') },
                  { id: 'pron', label: t('verbe pronominal', 'reflexive verb', '自反动词') },
                ],
                columns: [
                  { id: 'before', label: t('Avant le verbe', 'Before the verb', '动词之前') },
                  { id: 'after', label: t('Après le verbe, ou absent', 'After the verb, or none', '动词之后，或没有') },
                ],
                cells: [
                  { row: 'avoir', column: 'before', answer: t('accord avec le COD', 'agrees with the object', '与宾语配合').fr, example: 'Les lettres que j’ai écrites.', gloss: t('Le COD « que » précède le verbe : le participe s’accorde en genre et en nombre avec lui.', 'The object “que” precedes the verb, so the participle agrees with it in gender and number.', '宾语 “que” 位于动词之前，因此分词与之作性数配合。') },
                  { row: 'avoir', column: 'after', answer: t('aucun accord', 'no agreement', '不配合').fr, example: 'J’ai écrit des lettres.', gloss: t('Le COD suit le verbe : le participe reste invariable, quel que soit le sujet.', 'The object follows the verb: the participle stays invariable, whatever the subject.', '宾语位于动词之后：无论主语为何，分词保持不变。') },
                  { row: 'etre', column: 'before', answer: t('accord avec le sujet', 'agrees with the subject', '与主语配合').fr, example: 'Elles sont parties tôt.', gloss: t('Avec être, le participe se comporte comme un adjectif : il suit le sujet, jamais l’objet.', 'With être, the participle behaves like an adjective: it follows the subject, never the object.', '用 être 时，分词如同形容词：随主语变化，绝不随宾语。') },
                  { row: 'etre', column: 'after', answer: t('accord avec le sujet', 'agrees with the subject', '与主语配合').fr, example: 'Marie est arrivée.', gloss: t('La place du complément ne change rien : avec être, c’est toujours le sujet qui commande.', 'The complement’s position changes nothing: with être, the subject always governs.', '补语位置无关紧要：用 être 时始终由主语决定。') },
                  { row: 'pron', column: 'before', answer: t('accord avec le COD', 'agrees with the object', '与宾语配合').fr, example: 'Elle s’est lavée.', gloss: t('« Se » est ici le COD et précède le verbe : accord. C’est le cas le plus fréquent.', 'Here “se” is the object and precedes the verb, so it agrees. This is the most frequent case.', '此处 “se” 是宾语且位于动词前，故配合。这是最常见的情形。') },
                  { row: 'pron', column: 'after', answer: t('aucun accord', 'no agreement', '不配合').fr, example: 'Elle s’est lavé les mains.', gloss: t('Le COD « les mains » suit le verbe ; « se » devient complément d’objet indirect, donc pas d’accord.', 'The object “les mains” follows the verb; “se” becomes an indirect object, so no agreement.', '宾语 “les mains” 位于动词后，“se” 变为间接宾语，故不配合。') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('Le piège des verbes pronominaux', 'The reflexive verb trap', '自反动词的陷阱'),
              text: t(
                'Un [[verbe-pronominal|verbe pronominal]] se conjugue avec être, mais l’accord suit en réalité la règle du COD. « Elles se sont lavées » (se = COD, accord) mais « Elles se sont lavé les mains » (le COD est « les mains », placé après : pas d’accord).',
                'A [[verbe-pronominal|reflexive verb]] takes “être”, but agreement actually follows the direct-object rule. “Elles se sont lavées” (se = object, agreement) but “Elles se sont lavé les mains” (the object is “les mains”, placed after: no agreement).',
                '[[verbe-pronominal|自反动词]]用 être，但配合实际遵循直接宾语规则。“Elles se sont lavées”（se 为宾语，需配合），而“Elles se sont lavé les mains”（宾语是“les mains”，位于其后：不配合）。',
              ),
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '✅',
              title: t('Le réflexe de relecture', 'The proofreading reflex', '复查时的固定动作'),
              text: t(
                'Lors de la relecture, soulignez chaque participe passé et posez les trois questions. Cette vérification prend deux minutes et rapporte souvent un point entier sur le critère « morphosyntaxe ».',
                'When proofreading, underline every past participle and ask the three questions. This check takes two minutes and often earns a full point on the “morphosyntax” criterion.',
                '复查时，把每个过去分词划出来，逐一问那三个问题。这项检查只需两分钟，却常常能在“形态句法”一项上多拿一整分。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_gram_2',
      courseId: ID,
      title: t('Relier et nuancer', 'Linking and qualifying', '连接与细化'),
      summary: t(
        'Passer de phrases juxtaposées à un texte qui se tient.',
        'Moving from juxtaposed sentences to a text that holds together.',
        '从零散句子过渡到结构严密的文章。',
      ),
      lessons: [
        {
          id: 'les_gram_3',
          moduleId: 'mod_gram_2',
          kind: 'text',
          durationMin: 12,
          title: t('Les pronoms relatifs : qui, que, dont, où', 'Relative pronouns: qui, que, dont, où', '关系代词：qui、que、dont、où'),
          summary: t(
            'Un seul critère décide du bon pronom : la fonction du mot repris.',
            'A single criterion decides the right pronoun: the function of the word taken up.',
            '选择关系代词只看一个标准：被指代成分的句法功能。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le [[pronom-relatif|pronom relatif]] évite la répétition en fusionnant deux phrases. Le choix ne dépend ni du sens ni de la personne, mais uniquement de la fonction que remplit l’[[antecedent|antécédent]] dans la [[subordonnee|subordonnée]].',
                'The [[pronom-relatif|relative pronoun]] avoids repetition by merging two sentences. The choice depends neither on meaning nor on person, but only on the function of the [[antecedent|antecedent]] inside the [[subordonnee|subordinate clause]].',
                '[[pronom-relatif|关系代词]]通过合并两个句子来避免重复。选择哪一个既不取决于意义，也不取决于人称，而仅取决于[[antecedent|先行词]]在[[subordonnee|从句]]中承担的功能。',
              ),
            },
            {
              type: 'table',
              emoji: '📊',
              caption: t('Choisir en une seconde', 'Choosing in one second', '一秒钟做出选择'),
              headers: [
                t('Pronom', 'Pronoun', '代词'),
                t('L’antécédent est…', 'The antecedent is…', '先行词是……'),
                t('Test', 'Test', '检验方法'),
                t('Exemple', 'Example', '例句'),
              ],
              rows: [
                [t('qui', 'qui', 'qui'), t('sujet du verbe suivant', 'subject of the following verb', '后续动词的主语'), t('remplaçable par il / elle', 'replaceable by il / elle', '可用 il / elle 替换'), t('L’étudiant qui parle est belge.', 'L’étudiant qui parle est belge.', 'L’étudiant qui parle est belge.')],
                [t('que', 'que', 'que'), t('[[cod|COD]] du verbe suivant', '[[cod|direct object]] of the following verb', '后续动词的[[cod|直接宾语]]'), t('remplaçable par le / la', 'replaceable by le / la', '可用 le / la 替换'), t('Le livre que je lis est passionnant.', 'Le livre que je lis est passionnant.', 'Le livre que je lis est passionnant.')],
                [t('dont', 'dont', 'dont'), t('complément introduit par « de »', 'complement introduced by “de”', '由“de”引导的补语'), t('le verbe se construit avec de', 'the verb takes “de”', '动词与 de 搭配'), t('Le projet dont je vous parle…', 'Le projet dont je vous parle…', 'Le projet dont je vous parle…')],
                [t('où', 'où', 'où'), t('complément de lieu ou de temps', 'complement of place or time', '地点或时间状语'), t('remplaçable par là / alors', 'replaceable by là / alors', '可用 là / alors 替换'), t('L’année où j’ai déménagé.', 'L’année où j’ai déménagé.', 'L’année où j’ai déménagé.')],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('« dont » : le piège numéro un', '“dont”: trap number one', '“dont”：头号陷阱'),
              text: t(
                'On emploie « dont » quand le verbe ou le nom de la subordonnée se construit avec « de » : parler **de** quelque chose, avoir besoin **de**, être fier **de**, le prix **de**. Erreur fréquente : « le livre dont j’ai besoin **de** » — le « de » est déjà contenu dans « dont ».',
                'Use “dont” when the verb or noun in the clause is built with “de”: parler **de** something, avoir besoin **de**, être fier **de**, le prix **de**. A frequent error: “le livre dont j’ai besoin **de**” — the “de” is already inside “dont”.',
                '当从句中的动词或名词与“de”搭配时使用“dont”：parler **de**、avoir besoin **de**、être fier **de**、le prix **de**。常见错误：“le livre dont j’ai besoin **de**”——“de”已经包含在“dont”之中。',
              ),
            },
            {
              type: 'examples',
              emoji: '💬',
              title: t('Fusionner deux phrases', 'Merging two sentences', '合并两个句子'),
              items: [
                { fr: 'Je connais un restaurant. Ce restaurant sert des plats végétariens. → Je connais un restaurant qui sert des plats végétariens.', gloss: t('L’antécédent est sujet → qui.', 'The antecedent is the subject → qui.', '先行词作主语 → qui。') },
                { fr: 'Voici le dossier. Je vous ai parlé de ce dossier. → Voici le dossier dont je vous ai parlé.', gloss: t('« parler de » → dont.', '“parler de” → dont.', '“parler de” → dont。') },
                { fr: 'C’est une décision que je suis fier.', gloss: t('Faux : « être fier de » exige dont.', 'Wrong: “être fier de” requires dont.', '错误：“être fier de”要求用 dont。'), incorrect: true },
                { fr: 'C’est une décision dont je suis fier.', gloss: t('Correct.', 'Correct.', '正确。') },
              ],
            },
          ],
        },
        {
          id: 'les_gram_4',
          moduleId: 'mod_gram_2',
          kind: 'text',
          durationMin: 12,
          title: t('Cause, but, conséquence, opposition', 'Cause, purpose, consequence, contrast', '原因、目的、结果、对立'),
          summary: t(
            'Les quatre relations logiques attendues dans toute production écrite, et le mode qu’elles imposent.',
            'The four logical relations expected in any written production, and the mood each requires.',
            '任何书面表达都需要的四种逻辑关系，以及它们各自要求的语式。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'À partir du B1, un correcteur ne juge plus seulement la correction des phrases : il évalue la cohérence du texte. Les [[connecteur|connecteurs logiques]] sont l’outil de cette cohérence. Il suffit d’en maîtriser une douzaine, mais parfaitement — y compris le [[mode|mode]] qu’ils commandent.',
                'From B1 onwards an examiner no longer judges only sentence accuracy: they assess the coherence of the text. [[connecteur|Logical connectors]] are the tool for that coherence. A dozen of them is enough, provided you master them fully — including the [[mode|mood]] they require.',
                '从 B1 起，阅卷人不再只看句子是否正确，而是评估文章的连贯性。[[connecteur|逻辑连接词]]正是实现连贯的工具。掌握十几个就够，但必须彻底掌握——包括它们所要求的[[mode|语式]]。',
              ),
            },
            {
              type: 'table',
              emoji: '💡',
              caption: t('Le tableau à connaître par cœur', 'The table to know by heart', '必须熟记的表格'),
              headers: [
                t('Relation', 'Relation', '关系'),
                t('+ indicatif', '+ indicative', '+ 直陈式'),
                t('+ [[subjonctif|subjonctif]]', '+ [[subjonctif|subjunctive]]', '+ [[subjonctif|虚拟式]]'),
                t('+ nom', '+ noun', '+ 名词'),
              ],
              rows: [
                [t('Cause', 'Cause', '原因'), t('parce que, puisque, comme', 'parce que, puisque, comme', 'parce que, puisque, comme'), t('ce n’est pas que', 'ce n’est pas que', 'ce n’est pas que'), t('en raison de, grâce à, à cause de', 'en raison de, grâce à, à cause de', 'en raison de, grâce à, à cause de')],
                [t('Conséquence', 'Consequence', '结果'), t('donc, si bien que, c’est pourquoi', 'donc, si bien que, c’est pourquoi', 'donc, si bien que, c’est pourquoi'), t('trop… pour que, assez… pour que', 'trop… pour que, assez… pour que', 'trop… pour que, assez… pour que'), t('d’où, par conséquent', 'd’où, par conséquent', 'd’où, par conséquent')],
                [t('But', 'Purpose', '目的'), t('— (jamais)', '— (never)', '—（从不）'), t('pour que, afin que, de peur que', 'pour que, afin que, de peur que', 'pour que, afin que, de peur que'), t('en vue de, dans le but de', 'en vue de, dans le but de', 'en vue de, dans le but de')],
                [t('Opposition / [[concession|concession]]', 'Contrast / [[concession|concession]]', '对立 / [[concession|让步]]'), t('mais, alors que, tandis que', 'mais, alors que, tandis que', 'mais, alors que, tandis que'), t('bien que, quoique', 'bien que, quoique', 'bien que, quoique'), t('malgré, en dépit de', 'malgré, en dépit de', 'malgré, en dépit de')],
              ],
            },
            {
              type: 'callout',
              tone: 'danger',
              emoji: '🪤',
              title: t('La faute qui coûte le plus cher', 'The costliest mistake', '代价最高的错误'),
              text: t(
                '« Bien que » et « pour que » exigent TOUJOURS le subjonctif. « Bien qu’il **est** fatigué » est une faute lourde ; il faut « bien qu’il **soit** fatigué ». Inversement, « parce que » n’est jamais suivi du subjonctif.',
                '“Bien que” and “pour que” ALWAYS require the subjunctive. “Bien qu’il **est** fatigué” is a serious mistake; it must be “bien qu’il **soit** fatigué”. Conversely, “parce que” is never followed by the subjunctive.',
                '“Bien que”和“pour que”永远要求虚拟式。“Bien qu’il **est** fatigué”是严重错误，应为“bien qu’il **soit** fatigué”。反之，“parce que”后绝不用虚拟式。',
              ),
            },
            {
              type: 'examples',
              emoji: '💬',
              title: t('Exprimer la même idée de quatre façons', 'Expressing the same idea four ways', '用四种方式表达同一想法'),
              items: [
                { fr: 'Le musée a fermé parce que les travaux ont commencé.', gloss: t('Cause, registre courant.', 'Cause, standard register.', '原因，通用语体。') },
                { fr: 'Le musée a fermé en raison du début des travaux.', gloss: t('Cause + [[nominalisation|nominalisation]] : plus [[soutenu|soutenu]].', 'Cause + [[nominalisation|nominalisation]]: more [[soutenu|formal]].', '原因 + [[nominalisation|名词化]]：更[[soutenu|正式]]。') },
                { fr: 'Les travaux ont commencé ; le musée a donc fermé.', gloss: t('Même fait, présenté comme une conséquence.', 'Same fact, presented as a consequence.', '同一事实，以结果的方式呈现。') },
                { fr: 'Bien que les travaux aient commencé, le musée reste ouvert.', gloss: t('Concession + subjonctif obligatoire.', 'Concession + compulsory subjunctive.', '让步 + 必须使用虚拟式。') },
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '💡',
              title: t('Conseil de production écrite', 'Writing tip', '写作建议'),
              text: t(
                'Visez trois connecteurs différents par paragraphe, jamais le même deux fois de suite. Un texte B2 qui enchaîne « et… et… et… » plafonne à la moyenne, quelle que soit la richesse des idées.',
                'Aim for three different connectors per paragraph, never the same one twice in a row. A B2 text that strings together “et… et… et…” will not rise above average, however rich the ideas.',
                '每段争取使用三个不同的连接词，切勿连续重复同一个。一篇不断使用“et… et… et…”的 B2 作文，无论内容多丰富，也只能得到中等分数。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_gram_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Vérifiez vos acquis avant de passer à la conjugaison.', 'Check what you have learned before moving on to conjugation.', '在学习动词变位之前，先检验掌握情况。'),
      lessons: [
        {
          id: 'les_gram_q',
          moduleId: 'mod_gram_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_grammaire',
          title: t('Quiz — Grammaire essentielle', 'Quiz — Essential grammar', '测验 — 核心语法'),
          summary: t('8 questions sur le genre, l’accord, les relatifs et les connecteurs.', '8 questions on gender, agreement, relatives and connectors.', '8 道题，涵盖性、配合、关系代词与连接词。'),
        },
      ],
    },
  ],
};
