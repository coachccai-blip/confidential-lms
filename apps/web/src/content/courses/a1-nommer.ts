import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_a1_nommer';

export const a1NommerCourse: Course = {
  id: ID,
  slug: 'a1-nommer',
  level: 'A1',
  accentFrom: '#7dd3fc',
  accentTo: '#0284c7',
  status: 'published',
  title: t('Nommer les choses : articles, genre et nombre', 'Naming things: articles, gender and number', '称说事物：冠词、性与数'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Le / la / les, un / une / des, du / de la : le système des articles français expliqué simplement, avec le pluriel et les premières questions.',
    'Le / la / les, un / une / des, du / de la: the French article system explained simply, with the plural and your first questions.',
    'Le / la / les、un / une / des、du / de la：用简单的方式讲清法语冠词体系，并涵盖复数与最初的疑问句。',
  ),
  tags: [t('Grammaire', 'Grammar', '语法'), t('Débutant', 'Beginner', '初级')],
  modules: [
    {
      id: 'mod_a1no_1',
      courseId: ID,
      title: t('Le nom et ses accompagnateurs', 'The noun and its companions', '名词及其伴随成分'),
      summary: t(
        'Choisir l’article, former le pluriel, poser une question simple.',
        'Choosing the article, forming the plural, asking a simple question.',
        '选择冠词、构成复数、提出简单问题。',
      ),
      lessons: [
        {
          id: 'les_a1no_1',
          moduleId: 'mod_a1no_1',
          kind: 'text',
          durationMin: 11,
          title: t('Un, une, le, la : quel article choisir ?', 'Un, une, le, la: which article to choose?', 'Un、une、le、la：该用哪个冠词？'),
          summary: t(
            'Défini ou indéfini, masculin ou féminin : deux décisions à prendre avant chaque nom.',
            'Definite or indefinite, masculine or feminine: two decisions before every noun.',
            '定指还是不定指、阳性还是阴性：每个名词前都要做两个判断。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'En français, un nom ne se promène presque jamais seul : il est précédé d’un article. Là où le chinois emploie le nom nu et l’anglais parfois « books », le français impose « le livre », « un livre » ou « des livres ». C’est l’adaptation la plus coûteuse pour un débutant — et la plus rentable.',
                'In French a noun almost never travels alone: it is preceded by an article. Where Chinese uses the bare noun and English sometimes says “books”, French requires “le livre”, “un livre” or “des livres”. This is the costliest adjustment for a beginner — and the most rewarding.',
                '法语中名词几乎从不单独出现：前面必须有冠词。中文可以直接用光杆名词，英语有时说 “books”，而法语要求说 “le livre”“un livre”或 “des livres”。这是初学者代价最高、也最值得投入的一项调整。',
              ),
            },
            {
              type: 'table',
              emoji: '🏷️',
              caption: t('Le système des articles', 'The article system', '冠词体系'),
              headers: [
                t('Type d’article', 'Type of article', '冠词类型'),
                t('Masculin', 'Masculine', '阳性'),
                t('Féminin', 'Feminine', '阴性'),
                t('Pluriel', 'Plural', '复数'),
              ],
              rows: [
                [t('Défini — on sait lequel', 'Definite — we know which one', '定冠词 —— 特指'), t('le livre, l’ami', 'le livre, l’ami', 'le livre、l’ami'), t('la table, l’école', 'la table, l’école', 'la table、l’école'), t('les livres, les tables', 'les livres, les tables', 'les livres、les tables')],
                [t('Indéfini — un parmi d’autres', 'Indefinite — one among others', '不定冠词 —— 泛指'), t('un livre', 'un livre', 'un livre'), t('une table', 'une table', 'une table'), t('des livres', 'des livres', 'des livres')],
                [t('Partitif — une quantité non comptée', 'Partitive — an uncounted quantity', '部分冠词 —— 不可数的量'), t('du pain', 'du pain', 'du pain'), t('de la confiture', 'de la confiture', 'de la confiture'), t('des épinards', 'des épinards', 'des épinards')],
              ],
            },
            {
              type: 'interactive',
              emoji: '🎛️',
              title: t('Le sélecteur d’article', 'The article picker', '冠词选择器'),
              hint: t(
                '{prenom}, choisissez un genre et une détermination : l’article correct apparaît.',
                '{prenom}, pick a gender and a kind of determination: the correct article appears.',
                '{prenom}，选择性别与限定类型，正确的冠词随即显示。',
              ),
              widget: {
                kind: 'matrix',
                rowsLabel: t('Genre et nombre', 'Gender and number', '性与数'),
                columnsLabel: t('Type de détermination', 'Kind of determination', '限定类型'),
                rows: [
                  { id: 'm', label: t('Masculin', 'Masculine', '阳性') },
                  { id: 'f', label: t('Féminin', 'Feminine', '阴性') },
                  { id: 'p', label: t('Pluriel', 'Plural', '复数') },
                ],
                columns: [
                  { id: 'def', label: t('Défini — on sait lequel', 'Definite — we know which', '定指') },
                  { id: 'ind', label: t('Indéfini — un parmi d’autres', 'Indefinite — one among others', '不定指') },
                  { id: 'part', label: t('Partitif — une quantité', 'Partitive — a quantity', '部分冠词') },
                ],
                cells: [
                  { row: 'm', column: 'def', answer: 'le / l’', example: 'le livre, l’ami', gloss: t('Devant une voyelle, « le » s’élide en « l’ ».', 'Before a vowel, “le” elides to “l’”.', '元音前 “le” 省音为 “l’”。') },
                  { row: 'm', column: 'ind', answer: 'un', example: 'un livre, un ami', gloss: t('Pas d’élision : « un » se maintient devant la voyelle, avec liaison.', 'No elision: “un” stays before a vowel, with liaison.', '不省音：“un” 在元音前保持不变，并发生联诵。') },
                  { row: 'm', column: 'part', answer: 'du / de l’', example: 'du pain, de l’argent', gloss: t('On prélève une part d’une matière non comptée.', 'You take a portion of an uncounted substance.', '从不可数的整体中取一部分。') },
                  { row: 'f', column: 'def', answer: 'la / l’', example: 'la table, l’école', gloss: t('Même élision que « le » devant une voyelle ou un h muet.', 'Same elision as “le” before a vowel or a silent h.', '与 “le” 相同，在元音或哑音 h 前省音。') },
                  { row: 'f', column: 'ind', answer: 'une', example: 'une table, une école', gloss: t('Toujours « une », sans élision ni exception.', 'Always “une”, no elision, no exception.', '一律用 “une”，不省音，无例外。') },
                  { row: 'f', column: 'part', answer: 'de la / de l’', example: 'de la confiture, de l’eau', gloss: t('« De l’ » s’emploie aux deux genres devant une voyelle.', '“De l’” is used for both genders before a vowel.', '元音前两种性别都用 “de l’”。') },
                  { row: 'p', column: 'def', answer: 'les', example: 'les livres, les écoles', gloss: t('Liaison en [z] devant une voyelle : c’est souvent le seul indice sonore du pluriel.', 'A [z] liaison before a vowel: often the only audible clue of the plural.', '元音前联诵为 [z]：这往往是复数唯一可听的线索。') },
                  { row: 'p', column: 'ind', answer: 'des', example: 'des livres, des écoles', gloss: t('Après une négation, « des » devient « de » : « je n’ai pas de livres ».', 'After a negative, “des” becomes “de”: “je n’ai pas de livres”.', '否定之后 “des” 变为 “de”：“je n’ai pas de livres”。') },
                  { row: 'p', column: 'part', answer: 'des', example: 'des épinards, des pâtes', gloss: t('Au pluriel, partitif et indéfini se confondent en « des ».', 'In the plural, partitive and indefinite merge into “des”.', '复数时，部分冠词与不定冠词合并为 “des”。') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '💡',
              title: t('Devant une voyelle, le et la deviennent l’', 'Before a vowel, le and la become l’', '元音前 le 与 la 变为 l’'),
              text: t(
                '« l’ami », « l’école », « l’heure » — le **h** de « heure » est muet, il compte comme une voyelle. Quelques mots ont un h dit aspiré qui bloque l’élision : « le héros », « la haine ».',
                '“l’ami”, “l’école”, “l’heure” — the **h** of “heure” is silent and counts as a vowel. A few words have a so-called aspirate h that blocks elision: “le héros”, “la haine”.',
                '“l’ami”“l’école”“l’heure” —— “heure” 的 **h** 不发音，视同元音。少数词带有所谓的送气 h，阻止省音：“le héros”“la haine”。',
              ),
            },
            { type: 'heading', emoji: '🏷️', text: t('Deviner le genre : des indices fiables', 'Guessing the gender: reliable clues', '判断词性：可靠的线索') },
            {
              type: 'paragraph',
              text: t(
                'Le genre d’un nom français n’a presque aucun rapport avec le sens : « la table » n’est pas plus féminine qu’une chaise. Mais la **terminaison** donne une indication correcte dans la grande majorité des cas.',
                'The gender of a French noun has almost nothing to do with meaning: “la table” is no more feminine than a chair. But the **ending** gives a correct clue in the vast majority of cases.',
                '法语名词的性几乎与词义无关：“la table” 并不比椅子更“阴性”。但**词尾**在绝大多数情况下能给出正确提示。',
              ),
            },
            {
              type: 'keyvalues',
              emoji: '🏷️',
              title: t('Terminaisons qui trahissent le genre', 'Endings that reveal the gender', '暴露词性的词尾'),
              entries: [
                { label: t('Féminin', 'Feminine', '阴性'), value: t('-tion, -sion, -té, -ette, -ance, -ence, -ure : la nation, la liberté, la voiture', '-tion, -sion, -té, -ette, -ance, -ence, -ure: la nation, la liberté, la voiture', '-tion、-sion、-té、-ette、-ance、-ence、-ure：la nation、la liberté、la voiture') },
                { label: t('Masculin', 'Masculine', '阳性'), value: t('-ment, -age, -eau, -isme, -oir : le moment, le fromage, le bureau', '-ment, -age, -eau, -isme, -oir: le moment, le fromage, le bureau', '-ment、-age、-eau、-isme、-oir：le moment、le fromage、le bureau') },
                { label: t('Exceptions à retenir', 'Exceptions to remember', '需牢记的例外'), value: t('la page, la plage, la cage, l’image sont féminines malgré -age', 'la page, la plage, la cage, l’image are feminine despite -age', '尽管以 -age 结尾，la page、la plage、la cage、l’image 却是阴性') },
                { label: t('Toujours masculins', 'Always masculine', '一律阳性'), value: t('les jours, les mois, les saisons, les langues, les arbres : le lundi, le français, le chêne', 'days, months, seasons, languages, trees: le lundi, le français, le chêne', '星期、月份、季节、语言、树木：le lundi、le français、le chêne') },
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '✅',
              title: t('Apprenez le nom avec son article', 'Learn the noun with its article', '把名词和冠词一起记'),
              text: t(
                'N’écrivez jamais « table » dans votre carnet de vocabulaire, écrivez « **une** table ». Le genre s’apprend en même temps que le mot ; le rattraper après coup demande dix fois plus d’efforts.',
                'Never write “table” in your vocabulary notebook, write “**une** table”. Gender is learned together with the word; catching up afterwards takes ten times the effort.',
                '在词汇本上不要只写 “table”，要写 “**une** table”。词性应与单词同时习得；事后补救要花十倍的力气。',
              ),
            },
          ],
        },
        {
          id: 'les_a1no_2',
          moduleId: 'mod_a1no_1',
          kind: 'text',
          durationMin: 9,
          title: t('Le pluriel : un s qu’on n’entend pas', 'The plural: an s you cannot hear', '复数：听不见的 s'),
          summary: t(
            'Former le pluriel à l’écrit, le signaler à l’oral, et accorder l’adjectif.',
            'Forming the plural in writing, marking it in speech, and making the adjective agree.',
            '书面构成复数、口语中标示复数，以及形容词的配合。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'À l’écrit, le pluriel français est simple : on ajoute un **s**. À l’oral, ce s est muet — « le livre » et « les livres » ne diffèrent que par l’article. C’est donc l’article, et non le nom, qui porte l’information de nombre.',
                'In writing, the French plural is simple: you add an **s**. In speech that s is silent — “le livre” and “les livres” differ only by the article. So it is the article, not the noun, that carries the number information.',
                '书面上，法语复数很简单：加一个 **s**。但口语中这个 s 不发音——“le livre” 与 “les livres” 只靠冠词区分。因此承载数的信息的是冠词，而非名词。',
              ),
            },
            {
              type: 'table',
              emoji: '🔀',
              caption: t('Les pluriels irréguliers', 'Irregular plurals', '不规则复数'),
              headers: [t('Terminaison', 'Ending', '词尾'), t('Pluriel', 'Plural', '复数'), t('Exemple', 'Example', '例子')],
              rows: [
                [t('-s, -x, -z', '-s, -x, -z', '-s、-x、-z'), t('invariable', 'unchanged', '不变'), t('le bras → les bras, le prix → les prix', 'le bras → les bras, le prix → les prix', 'le bras → les bras、le prix → les prix')],
                [t('-eau, -eu', '-eau, -eu', '-eau、-eu'), t('+ x', '+ x', '加 x'), t('le bateau → les bateaux, le jeu → les jeux', 'le bateau → les bateaux, le jeu → les jeux', 'le bateau → les bateaux、le jeu → les jeux')],
                [t('-al', '-al', '-al'), t('→ -aux', '→ -aux', '→ -aux'), t('le journal → les journaux, l’animal → les animaux', 'le journal → les journaux, l’animal → les animaux', 'le journal → les journaux、l’animal → les animaux')],
                [t('Irréguliers', 'Irregulars', '特殊'), t('à mémoriser', 'to memorise', '需强记'), t('l’œil → les yeux, monsieur → messieurs', 'l’œil → les yeux, monsieur → messieurs', 'l’œil → les yeux、monsieur → messieurs')],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🗣️',
              title: t('La liaison rend le pluriel audible', 'Liaison makes the plural audible', '联诵让复数变得可听'),
              text: t(
                'Devant une voyelle, le s de « les » se prononce [z] : « les amis » [lezami], « les écoles » [lezekɔl]. C’est souvent le seul indice sonore du pluriel : ne le supprimez pas.',
                'Before a vowel, the s of “les” is pronounced [z]: “les amis” [lezami], “les écoles” [lezekɔl]. This is often the only audible clue of the plural: do not drop it.',
                '元音前，“les” 的 s 读作 [z]：“les amis” [lezami]、“les écoles” [lezekɔl]。这往往是复数唯一可听的线索，不要省略。',
              ),
            },
            { type: 'heading', emoji: '🏷️', text: t('L’adjectif suit le nom', 'The adjective follows the noun', '形容词随名词变化') },
            {
              type: 'examples',
              emoji: '🏷️',
              title: t('Accorder l’adjectif en genre et en nombre', 'Agreeing the adjective in gender and number', '形容词的性数配合'),
              items: [
                { fr: 'un petit livre vert', gloss: t('Les adjectifs de taille se placent avant, les couleurs après.', 'Size adjectives go before, colours after.', '表示大小的形容词前置，颜色形容词后置。') },
                { fr: 'une petite table verte', gloss: t('Féminin : + e à chaque adjectif.', 'Feminine: + e on each adjective.', '阴性：每个形容词加 e。') },
                { fr: 'des petites tables vertes', gloss: t('Féminin pluriel : + e puis + s.', 'Feminine plural: + e then + s.', '阴性复数：先加 e，再加 s。') },
                { fr: 'des petit tables vert', gloss: t('Aucun accord : l’erreur la plus visible à l’écrit.', 'No agreement: the most visible written error.', '完全不配合：书面上最扎眼的错误。'), incorrect: true },
              ],
            },
          ],
        },
        {
          id: 'les_a1no_3',
          moduleId: 'mod_a1no_1',
          kind: 'text',
          durationMin: 10,
          title: t('Poser une question et dire non', 'Asking a question and saying no', '提问与否定'),
          summary: t(
            'Trois façons de questionner, la négation en deux morceaux, et les mots interrogatifs de base.',
            'Three ways of asking, the two-part negative, and the basic question words.',
            '三种提问方式、由两部分组成的否定，以及基本疑问词。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le français offre trois registres pour poser la même question. Un débutant doit savoir les reconnaître tous les trois, mais n’a besoin d’en produire qu’un seul : l’intonation.',
                'French offers three registers for asking the same question. A beginner needs to recognise all three but only needs to produce one: intonation.',
                '同一个问题，法语有三种语体的问法。初学者需要能听懂这三种，但只需会说其中一种：升调提问。',
              ),
            },
            {
              type: 'table',
              emoji: '❓',
              caption: t('Trois façons de poser la même question', 'Three ways of asking the same question', '同一问题的三种问法'),
              headers: [t('Forme', 'Form', '形式'), t('Exemple', 'Example', '例子'), t('Registre', 'Register', '语体')],
              rows: [
                [t('Intonation', 'Intonation', '升调'), t('Tu viens ?', 'Tu viens ?', 'Tu viens ?'), t('familier, oral — le plus fréquent', 'informal, spoken — the most frequent', '口语随意体 —— 最常用')],
                [t('Est-ce que', 'Est-ce que', 'Est-ce que'), t('Est-ce que tu viens ?', 'Est-ce que tu viens ?', 'Est-ce que tu viens ?'), t('neutre, utilisable partout', 'neutral, usable everywhere', '中性，通用')],
                [t('Inversion', 'Inversion', '倒装'), t('Viens-tu ?', 'Viens-tu ?', 'Viens-tu ?'), t('soutenu, surtout à l’écrit', 'formal, mostly written', '正式，多用于书面')],
              ],
            },
            {
              type: 'keyvalues',
              emoji: '🗂️',
              title: t('Les mots interrogatifs essentiels', 'The essential question words', '必备疑问词'),
              entries: [
                { label: t('Qui', 'Qui', 'Qui'), value: t('la personne : Qui est-ce ? C’est ma sœur.', 'the person: Qui est-ce ? C’est ma sœur.', '问人：Qui est-ce ? C’est ma sœur.') },
                { label: t('Que / Quoi', 'Que / Quoi', 'Que / Quoi'), value: t('la chose : Qu’est-ce que c’est ? Tu fais quoi ?', 'the thing: Qu’est-ce que c’est ? Tu fais quoi ?', '问物：Qu’est-ce que c’est ? Tu fais quoi ?') },
                { label: t('Où / Quand', 'Où / Quand', 'Où / Quand'), value: t('le lieu et le moment : Où habites-tu ? Quand est-ce qu’on part ?', 'place and time: Où habites-tu ? Quand est-ce qu’on part ?', '问地点与时间：Où habites-tu ? Quand est-ce qu’on part ?') },
                { label: t('Comment / Pourquoi', 'Comment / Pourquoi', 'Comment / Pourquoi'), value: t('la manière et la cause. On répond à « pourquoi » par « parce que ».', 'manner and cause. You answer “pourquoi” with “parce que”.', '问方式与原因。回答 “pourquoi” 要用 “parce que”。') },
                { label: t('Combien', 'Combien', 'Combien'), value: t('la quantité : Ça coûte combien ? Combien de frères as-tu ?', 'quantity: Ça coûte combien ? Combien de frères as-tu ?', '问数量：Ça coûte combien ? Combien de frères as-tu ?') },
              ],
            },
            { type: 'heading', emoji: '🔄', text: t('La négation encadre le verbe', 'The negative wraps around the verb', '否定包住动词') },
            {
              type: 'paragraph',
              text: t(
                'La négation française est en deux morceaux : **ne** avant le verbe, **pas** après. À l’oral courant, le « ne » disparaît presque toujours — « je sais pas » — mais à l’écrit il reste obligatoire.',
                'The French negative comes in two pieces: **ne** before the verb, **pas** after. In everyday speech the “ne” almost always disappears — “je sais pas” — but in writing it remains compulsory.',
                '法语否定由两部分构成：动词前的 **ne** 和动词后的 **pas**。日常口语中 “ne” 几乎总是脱落——“je sais pas”——但书面语中必须保留。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🧩',
              title: t('Anatomie d’une négation', 'Anatomy of a negative', '否定句的构造'),
              hint: t(
                'Cliquez chaque morceau, {prenom} : dans cet exemple, chaque mot a une fonction précise.',
                'Click each piece, {prenom}: in this example, every word has a precise function.',
                '{prenom}，逐个点击：在这个例子里，每个词都有明确的功能。',
              ),
              widget: {
                kind: 'sentence',
                segments: [
                  {
                    text: 'Je',
                    role: t('Sujet', 'Subject', '主语'),
                    detail: t('Le pronom sujet ne se supprime jamais en français, contrairement à l’espagnol ou au chinois.', 'The subject pronoun is never dropped in French, unlike Spanish or Chinese.', '法语中主语代词绝不省略，这与西班牙语或中文不同。'),
                  },
                  {
                    text: 'n’',
                    role: t('Première partie de la négation', 'First half of the negative', '否定的第一部分'),
                    detail: t('« Ne », élidé devant une voyelle. À l’oral courant il disparaît presque toujours — mais jamais à l’écrit.', '“Ne”, elided before a vowel. In everyday speech it almost always vanishes — but never in writing.', '“Ne” 在元音前省音。日常口语中几乎总是脱落——但书面语中绝不省略。'),
                  },
                  {
                    text: 'ai',
                    role: t('Verbe conjugué', 'Conjugated verb', '变位动词'),
                    detail: t('C’est lui que la négation encadre : « ne » avant, « pas » après.', 'This is what the negative wraps around: “ne” before, “pas” after.', '否定正是包住它：“ne” 在前，“pas” 在后。'),
                  },
                  {
                    text: 'pas',
                    role: t('Seconde partie de la négation', 'Second half of the negative', '否定的第二部分'),
                    detail: t('C’est « pas » qui porte réellement le sens négatif à l’oral, puisque « ne » tombe.', 'It is “pas” that actually carries the negative meaning in speech, since “ne” drops.', '口语中真正承载否定意义的是 “pas”，因为 “ne” 会脱落。'),
                  },
                  {
                    text: 'de',
                    role: t('Article transformé', 'Transformed article', '被改变的冠词'),
                    detail: t('Après une négation, un / une / des deviennent « de ». On ne dit pas « je n’ai pas une voiture ».', 'After a negative, un / une / des become “de”. You do not say “je n’ai pas une voiture”.', '否定之后，un / une / des 变为 “de”。不能说 “je n’ai pas une voiture”。'),
                  },
                  {
                    text: 'voiture',
                    role: t('Complément d’objet', 'Object', '宾语'),
                    detail: t('Le nom perd son article d’origine mais garde son genre : c’est « une voiture » qui est niée.', 'The noun loses its original article but keeps its gender: it is “une voiture” that is being negated.', '名词失去原有冠词但保留性别：被否定的是 “une voiture”。'),
                  },
                  { text: '.' },
                ],
              },
            },
            {
              type: 'examples',
              emoji: '🏷️',
              title: t('Négation et article', 'Negation and article', '否定与冠词'),
              items: [
                { fr: 'Je ne comprends pas.', gloss: t('La phrase la plus utile de tout le niveau A1.', 'The single most useful sentence at A1 level.', 'A1 阶段最有用的一句话。') },
                { fr: 'Je n’ai pas de voiture.', gloss: t('Après une négation, un / une / des deviennent **de**.', 'After a negative, un / une / des become **de**.', '否定之后，un / une / des 变为 **de**。') },
                { fr: 'Ce n’est pas un problème.', gloss: t('Exception : après « être », l’article ne change pas.', 'Exception: after “être” the article does not change.', '例外：在 “être” 之后冠词不变。') },
                { fr: 'Je n’ai pas une voiture.', gloss: t('Sauf insistance sur le nombre, il faut « pas de voiture ».', 'Unless you are stressing the number, it must be “pas de voiture”.', '除非强调数量，否则应说 “pas de voiture”。'), incorrect: true },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mod_a1no_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur les articles, le pluriel et la question.', 'Six questions on articles, the plural and questions.', '六道题，考查冠词、复数与疑问句。'),
      lessons: [
        {
          id: 'les_a1no_q',
          moduleId: 'mod_a1no_q',
          kind: 'quiz',
          durationMin: 6,
          quizId: 'qz_a1_nommer',
          title: t('Quiz — Nommer les choses', 'Quiz — Naming things', '测验 — 称说事物'),
          summary: t('6 questions sur le genre, le nombre et la négation.', '6 questions on gender, number and negation.', '6 道题，考查性、数与否定。'),
        },
      ],
    },
  ],
};
