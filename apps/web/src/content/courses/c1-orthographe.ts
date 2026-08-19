import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_c1_orthographe';

export const c1OrthographeCourse: Course = {
  id: ID,
  slug: 'c1-orthographe',
  level: 'C1',
  accentFrom: '#a5b4fc',
  accentTo: '#1e40af',
  status: 'published',
  title: t('Écrire sans faute', 'Writing without mistakes', '写作零差错'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Un C1 s’exprime avec finesse — et perd des points sur a/à, leur/leurs, -é/-er. Ce cours attaque les fautes qui survivent à des années de français : les homophones, les accords traîtres, et la ponctuation à la française.',
    'A C1 learner writes with finesse — and drops marks on a/à, leur/leurs, -é/-er. This course attacks the mistakes that survive years of French: homophones, treacherous agreements, and French-style punctuation.',
    'C1 水平的人表达细腻——却在 a/à、leur/leurs、-é/-er 上丢分。这门课直击那些学了多年法语仍挥之不去的错误：同音词、暗藏陷阱的配合，以及法式标点。',
  ),
  tags: [t('Écrit', 'Writing', '写作'), t('Précision', 'Precision', '精准度')],
  modules: [
    {
      id: 'mod_c1og_1',
      courseId: ID,
      title: t('Les fautes qui restent', 'The mistakes that linger', '挥之不去的错误'),
      summary: t(
        'Homophones, accords, ponctuation : trois chantiers, trois méthodes.',
        'Homophones, agreements, punctuation: three worksites, three methods.',
        '同音词、配合、标点：三个战场，三套方法。',
      ),
      lessons: [
        {
          id: 'les_c1og_1',
          moduleId: 'mod_c1og_1',
          kind: 'text',
          durationMin: 12,
          title: t('Les homophones grammaticaux', 'Grammatical homophones', '语法同音词'),
          summary: t(
            'A/à, et/est, ce/se, son/sont : le test de substitution qui tranche à tous les coups.',
            'A/à, et/est, ce/se, son/sont: the substitution test that settles it every time.',
            'a/à、et/est、ce/se、son/sont：一招见效的替换检验法。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '👂',
              text: t(
                'Ces mots s’entendent pareil et s’écrivent différemment — l’oreille ne peut donc pas aider. La méthode est ailleurs : **remplacer** le mot par une forme qui, elle, s’entend. Si « avait » passe, c’est « a » ; sinon c’est « à ». Un test par paire, et le doute disparaît.',
                'These words sound identical and are written differently — so the ear cannot help. The method lies elsewhere: **substitute** the word with a form you can hear. If “avait” fits, it is “a”; if not, it is “à”. One test per pair, and the doubt is gone.',
                '这些词读音相同、写法不同——耳朵帮不上忙。方法在别处：**替换**成一个听得出来的形式。能换成 “avait”，就是 “a”；换不了，就是 “à”。一对一个检验法，疑惑就此消失。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎛️',
              title: t('La table des tests', 'The test table', '检验法一览表'),
              hint: t(
                'Croisez la paire et son test, {prenom} : la case donne l’exemple.',
                'Cross each pair with its test, {prenom}: the cell gives the example.',
                '{prenom}，把每一对词与其检验法交叉：格子里有例子。',
              ),
              widget: {
                kind: 'matrix',
                rowsLabel: t('La paire', 'The pair', '这一对'),
                columnsLabel: t('Le test', 'The test', '检验法'),
                rows: [
                  { id: 'r1', label: t('a / à', 'a / à', 'a / à') },
                  { id: 'r2', label: t('et / est', 'et / est', 'et / est') },
                  { id: 'r3', label: t('ce / se', 'ce / se', 'ce / se') },
                  { id: 'r4', label: t('ou / où', 'ou / où', 'ou / où') },
                ],
                columns: [
                  { id: 'c1', label: t('Remplacez par…', 'Substitute with…', '试着替换成……') },
                  { id: 'c2', label: t('Si ça ne passe pas', 'If it does not fit', '若替换不了'),
                  },
                ],
                cells: [
                  { row: 'r1', column: 'c1', answer: 'avait', example: 'Il a fini. → Il avait fini. ✓', gloss: t('« Avait » passe : c’est le verbe avoir, sans accent.', '“Avait” fits: it is the verb avoir, no accent.', '能换成 “avait”：这是动词 avoir，不带重音符。') },
                  { row: 'r1', column: 'c2', answer: 'à', example: 'Il va à Lyon. → Il va avait Lyon. ✗', gloss: t('« Avait » ne passe pas : c’est la préposition, avec accent grave.', '“Avait” does not fit: it is the preposition, with a grave accent.', '换不成 “avait”：这是介词，带开音符。') },
                  { row: 'r2', column: 'c1', answer: 'était', example: 'Le café est chaud. → était chaud. ✓', gloss: t('« Était » passe : c’est le verbe être.', '“Était” fits: it is the verb être.', '能换成 “était”：这是动词 être。') },
                  { row: 'r2', column: 'c2', answer: 'et', example: 'Un café et un thé. → était un thé. ✗', gloss: t('« Était » ne passe pas : c’est la conjonction — remplaçable par « et puis ».', '“Était” does not fit: it is the conjunction — replaceable by “et puis”.', '换不成 “était”：这是连词——可以换成 “et puis”。') },
                  { row: 'r3', column: 'c1', answer: 'un / le', example: 'Ce livre. → Le livre. ✓', gloss: t('Remplaçable par « le » : c’est le démonstratif ce.', 'Replaceable by “le”: it is the demonstrative ce.', '能换成 “le”：这是指示词 ce。') },
                  { row: 'r3', column: 'c2', answer: 'se', example: 'Il se lève. → Il le lève. ✗', gloss: t('Collé à un verbe pronominal : c’est se. Le test : conjuguer à « je » donne « me ».', 'Stuck to a reflexive verb: it is se. The test: with “je” it becomes “me”.', '紧贴自反动词：是 se。检验：改成 “je” 会变 “me”。') },
                  { row: 'r4', column: 'c1', answer: 'ou bien', example: 'Thé ou café ? → ou bien café ✓', gloss: t('« Ou bien » passe : c’est le choix, sans accent.', '“Ou bien” fits: it is the choice, no accent.', '能换成 “ou bien”：表示选择，不带重音符。') },
                  { row: 'r4', column: 'c2', answer: 'où', example: 'La ville où je vis. → ou bien je vis ✗', gloss: t('« Ou bien » ne passe pas : c’est le lieu ou le temps, avec accent.', '“Ou bien” does not fit: it is place or time, with the accent.', '换不成 “ou bien”：表示地点或时间，带重音符。') },
                ],
              },
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('Appliquez le test', 'Apply the test', '用检验法做题'),
              hint: t('Faites la substitution dans votre tête avant de cliquer.', 'Run the substitution in your head before clicking.', '点击前先在心里做替换。'),
              widget: {
                kind: 'fill',
                prompt: t('Quelle graphie est la bonne ?', 'Which spelling is right?', '哪种写法正确？'),
                items: [
                  {
                    id: 'h1',
                    before: 'Elle',
                    after: 'décidé de partir sont retour en mai.',
                    options: ['a', 'à'],
                    answer: 'a',
                    why: t('« Elle avait décidé » passe : verbe avoir, sans accent. (Et vous avez vu le piège suivant : c’est « son retour », pas « sont ».)', '“Elle avait décidé” fits: verb avoir, no accent. (And you spotted the next trap: it should be “son retour”, not “sont”.)', '“elle avait décidé” 成立：动词 avoir，不带重音符。（你也发现了下一个陷阱：应是 “son retour”，不是 “sont”。）'),
                  },
                  {
                    id: 'h2',
                    before: 'Les invités',
                    after: 'arrivés vers vingt heures.',
                    options: ['sont', 'son'],
                    answer: 'sont',
                    why: t('« Étaient arrivés » passe : c’est le verbe être. « Son » est le possessif : son manteau.', '“Étaient arrivés” fits: it is the verb être. “Son” is the possessive: son manteau.', '能换成 “étaient”：这是动词 être。“son” 是物主词：son manteau。'),
                  },
                  {
                    id: 'h3',
                    before: 'Je ne sais pas',
                    after: 'il habite désormais.',
                    options: ['où', 'ou'],
                    answer: 'où',
                    why: t('« Ou bien » ne passe pas : on parle d’un lieu, donc où avec accent.', '“Ou bien” does not fit: this is about a place, so où with the accent.', '换不成 “ou bien”：说的是地点，所以是带重音符的 où。'),
                  },
                  {
                    id: 'h4',
                    before: 'Ils ne',
                    after: 'doutent pas que ce projet aboutira.',
                    options: ['se', 'ce'],
                    answer: 'se',
                    why: t('« Se douter » est pronominal : avec « je », ça donne « je me doute ». Le test du « me » ne rate jamais.', '“Se douter” is reflexive: with “je” it gives “je me doute”. The “me” test never fails.', '“se douter” 是自反动词：换成 “je” 得 “je me doute”。“me” 检验法从不失手。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '💡',
              title: t('La relecture ciblée', 'The targeted proofread', '定向复查'),
              text: t(
                'Ne relisez pas « pour les fautes » : relisez **pour une seule paire à la fois**. Un passage pour les a/à, un pour les accords. Deux relectures ciblées attrapent plus de fautes qu’une relecture générale — c’est la technique des correcteurs professionnels.',
                'Do not proofread “for mistakes”: proofread **for one pair at a time**. One pass for a/à, one for agreements. Two targeted passes catch more than one general read — it is how professional proofreaders work.',
                '不要“为找错”而复查，要**一次只查一对**。一遍只看 a/à，一遍只看配合。两次定向复查比一次泛读抓到的错误更多——这正是职业校对的做法。',
              ),
            },
          ],
        },
        {
          id: 'les_c1og_2',
          moduleId: 'mod_c1og_1',
          kind: 'text',
          durationMin: 12,
          title: t('Les accords qu’on rate encore', 'The agreements you still miss', '仍会写错的配合'),
          summary: t(
            '-é ou -er, tout/tous, leur/leurs : les trois derniers verrous.',
            '-é or -er, tout/tous, leur/leurs: the last three locks.',
            '-é 还是 -er、tout/tous、leur/leurs：最后三道关卡。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🔒',
              text: t(
                'À l’oral, « manger », « mangé » et « mangeait » se confondent souvent dans le flot. À l’écrit, la confusion -é / -er est la faute la plus fréquente de tout le web francophone. Le test tient en un mot : **remplacer par vendre**.',
                'In speech, “manger”, “mangé” and “mangeait” often blur into the flow. In writing, the -é / -er mix-up is the single most frequent mistake on the French-speaking web. The test takes one word: **substitute with vendre**.',
                '口语的语流中，“manger”“mangé”“mangeait” 常常混在一起。而在书面上，-é / -er 之混是整个法语网络上最常见的错误。检验只需一个词：**换成 vendre**。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎚️',
              title: t('Le test de « vendre »', 'The “vendre” test', '“vendre” 检验法'),
              hint: t('Un verbe du troisième groupe s’entend, lui. Écoutez chaque exemple.', 'A third-group verb can be heard. Listen to each example.', '第三组动词是听得出来的。逐个听例句。'),
              widget: {
                kind: 'switcher',
                steps: [
                  {
                    id: 'v1',
                    label: t('-er = vendre', '-er = vendre', '-er = vendre'),
                    headline: t('Si « vendre » passe, infinitif', 'If “vendre” fits: infinitive', '能换 “vendre”，就是不定式'),
                    example: 'Je vais manger. → Je vais vendre. ✓',
                    gloss: t('Après aller, pouvoir, vouloir, devoir et après une préposition : toujours l’infinitif en -er.', 'After aller, pouvoir, vouloir, devoir and after a preposition: always the -er infinitive.', '在 aller、pouvoir、vouloir、devoir 和介词之后：永远用 -er 不定式。'),
                  },
                  {
                    id: 'v2',
                    label: t('-é = vendu', '-é = vendu', '-é = vendu'),
                    headline: t('Si « vendu » passe, participe', 'If “vendu” fits: participle', '能换 “vendu”，就是分词'),
                    example: 'J’ai mangé. → J’ai vendu. ✓',
                    gloss: t('Après avoir et être : le participe en -é, qui s’accorde selon les règles du participe passé.', 'After avoir and être: the -é participle, which agrees by the past-participle rules.', '在 avoir 和 être 之后：-é 分词，按过去分词规则配合。'),
                  },
                  {
                    id: 'v3',
                    label: t('-ait = vendait', '-ait = vendait', '-ait = vendait'),
                    headline: t('Si « vendait » passe, imparfait', 'If “vendait” fits: imperfect', '能换 “vendait”，就是未完成过去时'),
                    example: 'Il mangeait seul. → Il vendait seul. ✓',
                    gloss: t('Le troisième homophone qu’on oublie : l’imparfait. Le test de « vendre » distingue les trois d’un coup.', 'The third homophone people forget: the imperfect. The “vendre” test separates all three at once.', '常被遗忘的第三个同音形式：未完成过去时。“vendre” 检验法一次分清三者。'),
                  },
                ],
              },
            },
            {
              type: 'examples',
              emoji: '⚖️',
              title: t('Tout, tous, toute, toutes', 'Tout, tous, toute, toutes', 'tout、tous、toute、toutes'),
              items: [
                {
                  fr: 'Tous les dossiers sont prêts.',
                  gloss: t('Devant « les » + masculin pluriel : tous. Il se prononce [tu] ici — le s ne s’entend que sans nom derrière.', 'Before “les” + masculine plural: tous. Pronounced [tu] here — the s is only heard with no noun after.', '在 “les” 加阳性复数前用 tous。这里读 [tu]——只有后面不接名词时才读出 s。'),
                },
                {
                  fr: 'Ils sont tous venus.',
                  gloss: t('Sans nom derrière, tous se prononce [tus] : c’est le pronom. L’oreille peut enfin aider.', 'With no noun after, tous is pronounced [tus]: it is the pronoun. For once the ear can help.', '后面没有名词时 tous 读 [tus]：这是代词。这一次耳朵终于能帮上忙。'),
                },
                {
                  fr: 'Elle est tout étonnée. / Elle est toute pâle.',
                  gloss: t('« Tout » adverbe reste invariable… sauf devant consonne au féminin : toute pâle. L’exception des exceptions — à connaître pour les concours.',
                    'Adverbial “tout” stays invariable… except before a consonant with a feminine adjective: toute pâle. The exception among exceptions — worth knowing for competitive exams.',
                    '副词 “tout” 不变化……唯独在阴性形容词的辅音前变成 toute：toute pâle。例外中的例外——备考必须知道。'),
                },
                {
                  fr: 'Je leur ai rendu leurs clés.',
                  gloss: t('« Leur » pronom (à eux) est invariable ; « leurs » possessif s’accorde avec les clés. Deux mots différents dans la même phrase.', 'Pronoun “leur” (to them) is invariable; possessive “leurs” agrees with the keys. Two different words in one sentence.', '代词 “leur”（给他们）不变；物主词 “leurs” 与钥匙配合。同一句话里是两个不同的词。'),
                },
              ],
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('Les trois verrous, en situation', 'The three locks, in context', '三道关卡的实战'),
              hint: t('Testez avec « vendre » et avec « me ».', 'Test with “vendre” and with “me”.', '用 “vendre” 和 “me” 来检验。'),
              widget: {
                kind: 'fill',
                prompt: t('Complétez sans faute :', 'Complete without a mistake:', '零差错地补全：'),
                items: [
                  {
                    id: 'a1',
                    before: 'Merci de nous avoir',
                    after: 'vos remarques.',
                    options: ['envoyé', 'envoyer', 'envoyez'],
                    answer: 'envoyé',
                    why: t('« Avoir vendu vos remarques » : participe. Le COD « vos remarques » est après le verbe, donc pas d’accord.', '“Avoir vendu vos remarques”: participle. The object “vos remarques” follows the verb, so no agreement.', '“avoir vendu vos remarques”：分词。宾语在动词后，不必配合。'),
                  },
                  {
                    id: 'a2',
                    before: 'Il faut',
                    after: 'ce rapport avant midi.',
                    options: ['terminer', 'terminé', 'terminez'],
                    answer: 'terminer',
                    why: t('« Il faut vendre » : infinitif après « il faut », toujours.', '“Il faut vendre”: always the infinitive after “il faut”.', '“il faut vendre”：“il faut” 后面永远接不定式。'),
                  },
                  {
                    id: 'a3',
                    before: 'Les visiteuses sont',
                    after: 'repartir avant la fin.',
                    options: ['toutes', 'tous', 'tout'],
                    answer: 'toutes',
                    why: t('Pronom renvoyant à « les visiteuses », féminin pluriel : toutes, prononcé [tut].', 'A pronoun standing for “les visiteuses”, feminine plural: toutes, pronounced [tut].', '代词指代 “les visiteuses”，阴性复数：toutes，读 [tut]。'),
                  },
                  {
                    id: 'a4',
                    before: 'Les élèves ont rangé',
                    after: 'affaires avant de sortir.',
                    options: ['leurs', 'leur', 'leures'],
                    answer: 'leurs',
                    why: t('Possessif accordé avec « affaires », pluriel : leurs. « Leures » n’existe pas — leur ne prend jamais de e.', 'Possessive agreeing with plural “affaires”: leurs. “Leures” does not exist — leur never takes an e.', '与复数 “affaires” 配合的物主词：leurs。“leures” 不存在——leur 永远不加 e。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_c1og_3',
          moduleId: 'mod_c1og_1',
          kind: 'text',
          durationMin: 12,
          title: t('La ponctuation à la française — et la dictée', 'French punctuation — and the dictation', '法式标点——外加一场听写'),
          summary: t(
            'Les espaces qui surprennent le monde entier, puis la dictée des pièges.',
            'The spaces that surprise the whole world, then the trap dictation.',
            '让全世界惊讶的空格规则，然后是一场陷阱听写。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '⌨️',
              text: t(
                'La ponctuation française a une règle que presque aucune autre langue ne partage : les signes doubles — ; : ! ? « » — prennent une **espace avant** et une après. « Bonjour ! » et non « Bonjour! ». À l’écran comme sur papier, c’est un marqueur immédiat de texte soigné.',
                'French punctuation has a rule almost no other language shares: two-part marks — ; : ! ? « » — take a **space before** as well as after. “Bonjour !” and not “Bonjour!”. On screen as on paper, it instantly marks a text as carefully written.',
                '法语标点有一条几乎独一无二的规则：双部件符号——分号、冒号、感叹号、问号和法式引号——**前面**也要留空格。要写 “Bonjour !” 而不是 “Bonjour!”。无论屏幕还是纸面，这都是文字讲究与否的直接标志。',
              ),
            },
            {
              type: 'table',
              emoji: '📊',
              caption: t('Espace ou pas ? La règle des signes', 'Space or not? The rule by mark', '加不加空格？各符号的规则'),
              headers: [t('Signe', 'Mark', '符号'), t('Avant', 'Before', '前'), t('Après', 'After', '后')],
              rows: [
                [t('. et ,', '. and ,', '. 和 ,'), t('rien', 'nothing', '不加'), t('une espace', 'a space', '空格')],
                [t('; : ! ?', '; : ! ?', '; : ! ?'), t('une espace (insécable)', 'a space (non-breaking)', '空格（不断行）'), t('une espace', 'a space', '空格')],
                [t('les guillemets « »', 'the guillemets « »', '法式引号'), t('ouvrant : espace après / fermant : espace avant', 'opening: space after it / closing: space before it', '开引号后加空格 / 闭引号前加空格'), t('—', '—', '—')],
                [t('l’apostrophe', 'the apostrophe', '省音符'), t('rien', 'nothing', '不加'), t('rien : l’ami, jamais l’ ami', 'nothing: l’ami, never l’ ami', '不加：l’ami，绝不写 l’ ami')],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🔤',
              title: t('Majuscules : moins qu’en anglais', 'Capitals: fewer than in English', '大写：比英语少'),
              text: t(
                'Le français n’a pas de majuscule aux mois (janvier), aux jours (lundi), aux langues (le français) ni aux adjectifs de nationalité (la cuisine italienne). Il en garde une pour les habitants : **les Italiens**. Un texte truffé de majuscules anglaises se repère au premier coup d’œil.',
                'French puts no capital on months (janvier), days (lundi), languages (le français) or nationality adjectives (la cuisine italienne). It keeps one for the people themselves: **les Italiens**. A text riddled with English-style capitals is spotted at a glance.',
                '法语的月份（janvier）、星期（lundi）、语言（le français）和国籍形容词（la cuisine italienne）都不大写。只有指“国民”本身时保留大写：**les Italiens**。满篇英式大写的文本一眼就会被认出来。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎧',
              title: t('La dictée des pièges', 'The trap dictation', '陷阱听写'),
              hint: t(
                'Chaque phrase concentre un piège du cours. Écoutez, écrivez, comparez.',
                'Each sentence packs one trap from the course. Listen, write, compare.',
                '每句话都埋着本课的一个陷阱。听、写、对照。',
              ),
              widget: {
                kind: 'dictation',
                prompt: t(
                  'Écrivez chaque phrase. La correction compare mot à mot.',
                  'Write each sentence. The check compares word by word.',
                  '写出每句话。系统逐词比对。',
                ),
                items: [
                  {
                    id: 'c1',
                    sentence: 'Ils ont tous accepté de leur parler.',
                    hint: t('Un « tous » pronom, un « leur » invariable, un -é et un -er.', 'A pronoun “tous”, an invariable “leur”, one -é and one -er.', '一个代词 “tous”、一个不变的 “leur”、一个 -é 和一个 -er。'),
                    trap: t('« Tous » se prononce [tus] car il est pronom ; « accepté » = vendu ; « parler » = vendre ; « leur » devant un verbe ne prend jamais de s.', '“Tous” is pronounced [tus] because it is a pronoun; “accepté” = vendu; “parler” = vendre; “leur” before a verb never takes an s.', '“tous” 作代词读 [tus]；“accepté” 对应 vendu；“parler” 对应 vendre；动词前的 “leur” 永远不加 s。'),
                  },
                  {
                    id: 'c2',
                    sentence: 'Elle est allée là où personne ne va.',
                    hint: t('Un accord avec être, deux accents décisifs.', 'One agreement with être, two decisive accents.', '一个与 être 的配合，两个关键的重音符。'),
                    trap: t('« Allée » s’accorde avec elle ; « là » et « où » portent l’accent — sans lui, « la ou » signifierait tout autre chose.', '“Allée” agrees with elle; “là” and “où” carry the accent — without it, “la ou” would mean something else entirely.', '“allée” 与 elle 配合；“là” 和 “où” 都带重音符——没有它，“la ou” 就完全是另一个意思。'),
                  },
                  {
                    id: 'c3',
                    sentence: 'Ces employés se sont trompés de salle.',
                    hint: t('Un « ces », un « se », et un participe qui s’accorde.', 'A “ces”, a “se”, and a participle that agrees.', '一个 “ces”、一个 “se”，还有一个要配合的分词。'),
                    trap: t('« Ces » = démonstratif pluriel (remplaçable par « les ») ; « se sont trompés » : verbe pronominal, accord avec le sujet masculin pluriel.', '“Ces” = plural demonstrative (replaceable by “les”); “se sont trompés”: reflexive verb, agreeing with the masculine plural subject.', '“ces” 是复数指示词（可换成 “les”）；“se sont trompés”：自反动词，与阳性复数主语配合。'),
                  },
                  {
                    id: 'c4',
                    sentence: 'Quel que soit le résultat, elles resteront toutes confiantes.',
                    hint: t('« Quel que » en deux mots, et un « toutes » au féminin.', '“Quel que” in two words, and a feminine “toutes”.', '分写的 “quel que”，和阴性的 “toutes”。'),
                    trap: t('« Quel que » s’écrit en deux mots devant le verbe être au subjonctif ; « toutes » renvoie à elles — prononcé [tut].', '“Quel que” is written as two words before être in the subjunctive; “toutes” refers to elles — pronounced [tut].', '“quel que” 在虚拟式 être 前分写为两个词；“toutes” 指代 elles——读 [tut]。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '🏆',
              title: t('Zéro faute n’existe pas — la relecture, si', 'Zero mistakes do not exist — proofreading does', '“零差错”不存在——复查存在'),
              text: t(
                'Les correcteurs professionnels font des fautes en écrivant ; ils ne les laissent pas en relisant. Trois passes ciblées — homophones, accords, ponctuation — sur chaque texte important : voilà le vrai secret du « sans faute ».',
                'Professional proofreaders make mistakes while writing; they just do not leave them in when rereading. Three targeted passes — homophones, agreements, punctuation — over every important text: that is the real secret of “flawless”.',
                '职业校对写作时也会出错；他们只是不让错误在复查后留下来。对每篇重要文本做三次定向复查——同音词、配合、标点——这才是“零差错”的真正秘诀。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_c1og_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur les homophones, les accords et la ponctuation.', 'Six questions on homophones, agreements and punctuation.', '六道题，考查同音词、配合与标点。'),
      lessons: [
        {
          id: 'les_c1og_q',
          moduleId: 'mod_c1og_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_c1_orthographe',
          title: t('Quiz — Écrire sans faute', 'Quiz — Writing without mistakes', '测验 — 写作零差错'),
          summary: t('6 questions de chasse à la faute.', '6 mistake-hunting questions.', '6 道“捉错”题。'),
        },
      ],
    },
  ],
};
