import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_c1_oral';

export const c1OralCourse: Course = {
  id: ID,
  slug: 'c1-oral-rapide',
  level: 'C1',
  accentFrom: '#a5b4fc',
  accentTo: '#1e40af',
  status: 'published',
  title: t('Comprendre le français parlé vite', 'Understanding fast spoken French', '听懂语速快的法语'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Pourquoi un C1 lit un journal sans effort mais perd le fil d’une conversation entre amis : réductions, registres, implicite culturel. Le cours qui comble ce décalage.',
    'Why a C1 learner reads a newspaper effortlessly yet loses the thread of a chat between friends: reductions, registers, cultural implicitness. The course that closes that gap.',
    '为什么 C1 水平的人读报毫不费力，却跟不上朋友间的闲聊：语音缩减、语体差异、文化默契。本课程弥合这道落差。',
  ),
  tags: [t('Oral', 'Listening', '听力'), t('Registre', 'Register', '语体')],
  modules: [
    {
      id: 'mod_c1or_1',
      courseId: ID,
      title: t('Ce que l’oreille doit apprendre', 'What the ear has to learn', '耳朵需要学会的东西'),
      summary: t(
        'Les réductions de l’oral, les registres, et l’implicite.',
        'Spoken reductions, registers, and implicitness.',
        '口语缩减、语体，以及言外之意。',
      ),
      lessons: [
        {
          id: 'les_c1or_1',
          moduleId: 'mod_c1or_1',
          kind: 'text',
          durationMin: 13,
          title: t('Ce qui disparaît à l’oral', 'What disappears in speech', '口语中消失的成分'),
          summary: t(
            'Chute du ne, du e, du il, du tu : la phrase parlée est bien plus courte que la phrase écrite.',
            'Dropping ne, e, il, tu: the spoken sentence is far shorter than the written one.',
            'ne、e、il、tu 的脱落：口语句子远比书面句子短。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Un apprenant C1 qui « n’entend rien » à une conversation rapide n’a pas un problème de vocabulaire : il cherche des sons qui n’ont jamais été prononcés. Le français parlé supprime systématiquement une partie de ce que l’écrit conserve. Ces chutes ne sont ni du relâchement ni de l’argot — elles sont la norme.',
                'A C1 learner who “hears nothing” in a fast conversation does not have a vocabulary problem: they are looking for sounds that were never uttered. Spoken French systematically deletes part of what writing preserves. These deletions are neither sloppiness nor slang — they are the norm.',
                '在快速对话中“什么都听不懂”的 C1 学习者并非词汇不足，而是在寻找根本没被发出的音。法语口语会系统性地删去书面语保留的一部分成分。这些脱落既不是马虎也不是俚语——它们就是常态。',
              ),
            },
            {
              type: 'table',
              emoji: '🗣️',
              caption: t('Les grandes chutes de l’oral courant', 'The main deletions in everyday speech', '日常口语的主要脱落现象'),
              headers: [t('Phénomène', 'Phenomenon', '现象'), t('Écrit', 'Written', '书面'), t('Prononcé', 'Spoken', '口语'), t('Fréquence', 'Frequency', '频率')],
              rows: [
                [t('Chute du « ne »', 'Dropping “ne”', '“ne” 脱落'), t('Je ne sais pas.', 'Je ne sais pas.', 'Je ne sais pas.'), t('[ʃepa] — « chais pas »', '[ʃepa] — “chais pas”', '[ʃepa] —— “chais pas”'), t('quasi systématique', 'almost systematic', '几乎无一例外')],
                [t('Chute du « e »', 'Dropping “e”', '“e” 脱落'), t('Je te le demande.', 'Je te le demande.', 'Je te le demande.'), t('[ʃtəldəmɑ̃d]', '[ʃtəldəmɑ̃d]', '[ʃtəldəmɑ̃d]'), t('très fréquente', 'very frequent', '非常常见')],
                [t('« il » → [i]', '“il” → [i]', '“il” → [i]'), t('Il y a un problème.', 'Il y a un problème.', 'Il y a un problème.'), t('[jaœ̃pʁɔblɛm] — « y a »', '[jaœ̃pʁɔblɛm] — “y a”', '[jaœ̃pʁɔblɛm] —— “y a”'), t('systématique à l’oral', 'systematic in speech', '口语中一贯如此')],
                [t('« tu » → [t]', '“tu” → [t]', '“tu” → [t]'), t('Tu es prêt ? Tu as vu ?', 'Tu es prêt ? Tu as vu ?', 'Tu es prêt ? Tu as vu ?'), t('[tɛpʁɛ] / [tavy] — « t’es », « t’as »', '[tɛpʁɛ] / [tavy] — “t’es”, “t’as”', '[tɛpʁɛ] / [tavy] —— “t’es”“t’as”'), t('systématique', 'systematic', '一贯如此')],
                [t('« qu’est-ce que » → [kɛs]', '“qu’est-ce que” → [kɛs]', '“qu’est-ce que” → [kɛs]'), t('Qu’est-ce que tu fais ?', 'Qu’est-ce que tu fais ?', 'Qu’est-ce que tu fais ?'), t('[kɛstyfɛ] ou même [tyfɛkwa]', '[kɛstyfɛ] or even [tyfɛkwa]', '[kɛstyfɛ]，甚至 [tyfɛkwa]'), t('très fréquente', 'very frequent', '非常常见')],
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '✅',
              title: t('Comprendre ne veut pas dire imiter', 'Understanding does not mean imitating', '听懂不等于要模仿'),
              text: t(
                'Vous devez **reconnaître** ces formes instantanément ; vous n’êtes pas obligé de les produire. Un locuteur non natif qui prononce « je ne sais pas » en entier reste parfaitement naturel. En revanche, celui qui ne comprend pas « chais pas » perd la moitié de la conversation.',
                'You must **recognise** these forms instantly; you are not obliged to produce them. A non-native speaker who says “je ne sais pas” in full still sounds perfectly natural. Someone who does not understand “chais pas”, however, loses half the conversation.',
                '你必须能瞬间**识别**这些形式，但不一定要说出来。非母语者完整地说 “je ne sais pas” 依然自然得体。可若听不懂 “chais pas”，就会漏掉一半的对话。',
              ),
            },
            {
              type: 'interactive',
              emoji: '👂',
              title: t('Ce que l’oreille doit reconstituer', 'What the ear has to rebuild', '耳朵需要还原的成分'),
              hint: t(
                'Cliquez chaque morceau pour voir ce qui a été prononcé — ou pas.',
                'Click each piece to see what was actually uttered — or not.',
                '点击每个部分，看看实际发出了什么音——或没发出。',
              ),
              widget: {
                kind: 'sentence',
                segments: [
                  {
                    text: 'Il',
                    role: t('Réduit à [i], puis avalé', 'Reduced to [i], then swallowed', '弱化为 [i]，随后被吞'),
                    detail: t('Devant « y », le pronom disparaît complètement : « il y a » se dit « y a ». C’est systématique, pas relâché.', 'Before “y”, the pronoun vanishes entirely: “il y a” is said “y a”. This is systematic, not sloppy.', '在 “y” 之前，该代词完全消失：“il y a” 说成 “y a”。这是常态，并非马虎。'),
                  },
                  {
                    text: 'ne',
                    role: t('Absent à l’oral', 'Absent in speech', '口语中不出现'),
                    detail: t('La chute du « ne » est quasi systématique en conversation. À l’écrit, en revanche, elle est une faute.', 'Dropping “ne” is almost systematic in conversation. In writing, however, it is a mistake.', '对话中省略 “ne” 几乎是常态。但在书面语中，这是错误。'),
                  },
                  {
                    text: 'y en a',
                    role: t('Bloc soudé [jɑ̃na]', 'A welded block [jɑ̃na]', '连成一体的 [jɑ̃na]'),
                    detail: t('Trois mots, une seule masse sonore. C’est ce bloc qu’il faut apprendre à reconnaître d’un coup, sans le découper.', 'Three words, one sound mass. This is the block to learn to recognise at once, without slicing it up.', '三个词，一团声音。要学会整体识别这个块，不必逐词切分。'),
                  },
                  {
                    text: 'plus',
                    role: t('Le s ne se prononce pas', 'The s is not pronounced', 's 不发音'),
                    detail: t('Dans la négation « ne… plus », le s est muet : [ply]. Prononcé [plys], le mot signifierait le contraire — « davantage ».', 'In the negative “ne… plus”, the s is silent: [ply]. Pronounced [plys], the word would mean the opposite — “more”.', '在否定结构 “ne… plus” 中，s 不发音：[ply]。若读作 [plys]，词义则相反——“更多”。'),
                  },
                  { text: '.' },
                ],
              },
            },
            {
              type: 'examples',
              emoji: '🗣️',
              title: t('Décoder à l’oreille', 'Decoding by ear', '用耳朵解码'),
              items: [
                { fr: '« Y en a plus » = Il n’y en a plus.', gloss: t('Trois chutes cumulées : il, ne, et la liaison.', 'Three deletions at once: il, ne, and the liaison.', '三重脱落叠加：il、ne 以及联诵。') },
                { fr: '« Faut qu’on y aille » = Il faut que nous y allions.', gloss: t('Chute de « il » + « on » pour « nous » : la phrase perd un tiers de sa longueur.', 'Dropping “il” + “on” for “nous”: the sentence loses a third of its length.', '“il” 脱落 + 用 “on” 代 “nous”：句子缩短了三分之一。') },
                { fr: '« Ch’ais pas c’qu’i veut » = Je ne sais pas ce qu’il veut.', gloss: t('Quatre réductions dans une seule phrase de six syllabes.', 'Four reductions in a single six-syllable sentence.', '一句六个音节的话里有四处缩减。') },
                { fr: '« T’as pas vu Jean ? » = Tu n’as pas vu Jean ?', gloss: t('Chute du tu et du ne : la question reste parfaitement polie entre proches.', 'Dropping tu and ne: the question remains perfectly polite among friends.', 'tu 与 ne 脱落：在熟人之间这个问句依然完全礼貌。') },
              ],
            },
          ],
        },
        {
          id: 'les_c1or_2',
          moduleId: 'mod_c1or_1',
          kind: 'text',
          durationMin: 12,
          title: t('Les registres : dire la même chose à quatre niveaux', 'Registers: saying the same thing at four levels', '语体：同一件事的四种说法'),
          summary: t(
            'Soutenu, courant, familier, argotique — et le coût social d’une erreur de registre.',
            'Formal, standard, colloquial, slang — and the social cost of a register mistake.',
            '正式、通用、口语、俚语——以及语体用错的社交代价。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le français stratifie son lexique bien plus nettement que l’anglais. Un même contenu se dit à quatre niveaux, et employer le mauvais niveau est plus dommageable qu’une faute de grammaire : cela signale une mauvaise lecture de la situation.',
                'French stratifies its vocabulary far more sharply than English. The same content can be said at four levels, and using the wrong one is more damaging than a grammar mistake: it signals a misreading of the situation.',
                '法语的词汇分层比英语鲜明得多。同一内容有四个层次的说法，用错层次比语法出错更糟：它表明你误读了场合。',
              ),
            },
            {
              type: 'table',
              emoji: '🎚️',
              caption: t('Quatre registres, un même sens', 'Four registers, one meaning', '四种语体，同一含义'),
              headers: [t('Soutenu', 'Formal', '正式'), t('Courant', 'Standard', '通用'), t('Familier', 'Colloquial', '口语'), t('Très familier', 'Slang', '俚俗')],
              rows: [
                [t('se restaurer', 'se restaurer', 'se restaurer'), t('manger', 'manger', 'manger'), t('bouffer', 'bouffer', 'bouffer'), t('se goinfrer', 'se goinfrer', 'se goinfrer')],
                [t('un véhicule', 'un véhicule', 'un véhicule'), t('une voiture', 'une voiture', 'une voiture'), t('une bagnole', 'une bagnole', 'une bagnole'), t('une caisse', 'une caisse', 'une caisse')],
                [t('un emploi', 'un emploi', 'un emploi'), t('un travail', 'un travail', 'un travail'), t('un boulot', 'un boulot', 'un boulot'), t('un job, un taf', 'un job, un taf', 'un job、un taf')],
                [t('être contrarié', 'être contrarié', 'être contrarié'), t('être énervé', 'être énervé', 'être énervé'), t('être remonté', 'être remonté', 'être remonté'), t('être furax', 'être furax', 'être furax')],
                [t('une somme d’argent', 'une somme d’argent', 'une somme d’argent'), t('de l’argent', 'de l’argent', 'de l’argent'), t('du fric', 'du fric', 'du fric'), t('du blé, de la thune', 'du blé, de la thune', 'du blé、de la thune')],
              ],
            },
            {
              type: 'interactive',
              emoji: '🎚️',
              title: t('Le cadran des registres', 'The register dial', '语体刻度盘'),
              hint: t(
                'Un même contenu, quatre crans. Trouvez celui qui correspond à votre situation, {prenom}.',
                'One content, four notches. Find the one that matches your situation, {prenom}.',
                '同一内容，四个刻度。{prenom}，找到与你所处情境相符的那一档。',
              ),
              widget: {
                kind: 'switcher',
                steps: [
                  {
                    id: 'soutenu',
                    label: t('Soutenu', 'Formal', '正式'),
                    headline: t('rapport, discours, lettre officielle', 'report, speech, official letter', '报告、演讲、正式信函'),
                    example: 'Je vous saurais gré de bien vouloir vous restaurer avant la séance.',
                    gloss: t('Vocabulaire rare, syntaxe complète, aucune ellipse. Employé à l’oral courant, il produit un effet comique.', 'Rare vocabulary, complete syntax, no ellipsis. Used in ordinary speech, it comes across as comic.', '词汇少见、句法完整、不省略。若用于日常口语则显得滑稽。'),
                  },
                  {
                    id: 'courant',
                    label: t('Courant', 'Standard', '通用'),
                    headline: t('le choix sûr en toute situation', 'the safe choice in any situation', '任何场合都稳妥的选择'),
                    example: 'Vous pouvez manger avant la réunion.',
                    gloss: t('Ni marqué ni relâché. C’est le registre à produire quand on hésite : il ne détonne nulle part.', 'Neither marked nor casual. This is the register to produce when unsure: it jars nowhere.', '既不刻意也不随便。拿不准时就用这一档：在任何场合都不突兀。'),
                  },
                  {
                    id: 'familier',
                    label: t('Familier', 'Colloquial', '口语'),
                    headline: t('collègues proches, amis', 'close colleagues, friends', '亲近的同事、朋友'),
                    example: 'Tu peux bouffer un truc avant la réu.',
                    gloss: t('Chute du « ne », mots familiers, abréviations. À reconnaître absolument, à produire avec discernement.', 'Dropped “ne”, colloquial words, abbreviations. Recognise it without fail, produce it with judgement.', '省略 “ne”、口语词汇、缩略形式。必须能听懂，使用则需审时度势。'),
                  },
                  {
                    id: 'argotique',
                    label: t('Très familier', 'Slang', '俚俗'),
                    headline: t('entre proches, jamais au travail', 'among close friends, never at work', '仅限熟人之间，绝不用于职场'),
                    example: 'Va te goinfrer avant, on a une réu chelou.',
                    gloss: t('Argot et verlan. Comprenez-le pour suivre une conversation ; ne l’employez pas hors du cercle qui l’emploie déjà.', 'Slang and verlan. Understand it to follow a conversation; do not use it outside the circle that already does.', '俚语与倒读语。听懂它以跟上对话；但不要在本就不使用它的圈子之外说出口。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '💡',
              title: t('Le verlan, à comprendre seulement', 'Verlan: for comprehension only', '倒读语：只需听懂'),
              text: t(
                'Le verlan inverse les syllabes : **meuf** (femme), **ouf** (fou), **relou** (lourd), **chelou** (louche), **teuf** (fête). Ces mots sont entrés dans l’usage courant des moins de quarante ans. Comprenez-les ; ne les employez pas dans un contexte professionnel.',
                'Verlan reverses syllables: **meuf** (femme), **ouf** (fou), **relou** (lourd), **chelou** (louche), **teuf** (fête). These words have entered everyday use among under-forties. Understand them; do not use them in a professional context.',
                '倒读语把音节颠倒：**meuf**（femme）、**ouf**（fou）、**relou**（lourd）、**chelou**（louche）、**teuf**（fête）。这些词已进入四十岁以下人群的日常用语。听懂即可，勿用于职场场合。',
              ),
            },
            {
              type: 'examples',
              emoji: '🪤',
              title: t('Erreurs de registre typiques', 'Typical register mistakes', '典型的语体错误'),
              items: [
                { fr: 'Dans un courriel à un client : « J’ai bossé sur le dossier. »', gloss: t('« Bossé » est familier : écrivez « j’ai travaillé sur le dossier ».', '“Bossé” is colloquial: write “j’ai travaillé sur le dossier”.', '“Bossé” 属口语：应写 “j’ai travaillé sur le dossier”。'), incorrect: true },
                { fr: 'À un ami, au café : « Je me restaurerais volontiers. »', gloss: t('Registre soutenu dans un cadre familier : l’effet est comique, voire snob.', 'Formal register in a casual setting: the effect is comic, even snobbish.', '在随意场合用正式语体：显得滑稽，甚至做作。'), incorrect: true },
                { fr: 'À un collègue proche : « Tu viens manger ? »', gloss: t('Registre courant : le choix sûr dans presque toutes les situations.', 'Standard register: the safe choice in almost every situation.', '通用语体：几乎在任何场合都稳妥。') },
                { fr: 'Dans un rapport : « Le véhicule a été immobilisé. »', gloss: t('Registre soutenu approprié à l’écrit administratif.', 'Formal register, appropriate for administrative writing.', '正式语体，适用于行政文书。') },
              ],
            },
          ],
        },
        {
          id: 'les_c1or_3',
          moduleId: 'mod_c1or_1',
          kind: 'text',
          durationMin: 12,
          title: t('L’implicite : humour, ironie, sous-entendus', 'Implicitness: humour, irony, innuendo', '言外之意：幽默、反讽、暗示'),
          summary: t(
            'Ce qui n’est pas dit, et que tout le monde comprend. Le dernier obstacle avant l’aisance.',
            'What is not said and everyone understands. The last obstacle before fluency.',
            '没说出口却人人明白的东西。通向自如表达的最后一道关卡。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'À partir du C1, la difficulté n’est plus linguistique mais **pragmatique** : la phrase est comprise mot à mot, son intention échappe. Le français pratique volontiers la litote, l’ironie et l’euphémisme — trois procédés où le sens s’écarte de la lettre.',
                'From C1 on, the difficulty is no longer linguistic but **pragmatic**: the sentence is understood word for word, yet its intention escapes you. French readily uses litotes, irony and euphemism — three devices where meaning departs from the letter.',
                '从 C1 起，难点不再是语言层面，而是**语用**层面：字面全都听懂，意图却没抓到。法语惯用曲言、反讽和委婉语——这三种手法中，含义都偏离字面。',
              ),
            },
            {
              type: 'keyvalues',
              emoji: '🗂️',
              title: t('Trois procédés à décoder', 'Three devices to decode', '三种需要解码的手法'),
              entries: [
                { label: t('La litote', 'Litotes', '曲言法'), value: t('Dire moins pour signifier plus : « ce n’est pas mauvais » = c’est très bon ; « il n’est pas bête » = il est brillant.', 'Saying less to mean more: “ce n’est pas mauvais” = it is very good; “il n’est pas bête” = he is brilliant.', '以少言多：“ce n’est pas mauvais” 意为非常好；“il n’est pas bête” 意为他很聪明。') },
                { label: t('L’ironie', 'Irony', '反讽'), value: t('Dire le contraire, signalé par l’intonation : « Bravo, c’est réussi ! » après un échec.', 'Saying the opposite, signalled by intonation: “Bravo, c’est réussi !” after a failure.', '说反话，由语调提示：失败之后来一句 “Bravo, c’est réussi !”。') },
                { label: t('L’euphémisme', 'Euphemism', '委婉语'), value: t('Adoucir : « il nous a quittés » pour « il est mort », « un plan social » pour des licenciements.', 'Softening: “il nous a quittés” for “il est mort”, “un plan social” for redundancies.', '缓和表达：用 “il nous a quittés” 代替 “il est mort”，用 “un plan social” 指裁员。') },
              ],
            },
            {
              type: 'table',
              emoji: '📊',
              caption: t('Ce qu’on dit, ce qu’on veut dire', 'What is said, what is meant', '所说与所指'),
              headers: [t('Formule', 'Phrase', '说法'), t('Sens littéral', 'Literal meaning', '字面义'), t('Sens réel', 'Actual meaning', '实际义')],
              rows: [
                [t('« C’est pas faux. »', '“C’est pas faux.”', '“C’est pas faux.”'), t('ce n’est pas erroné', 'it is not wrong', '这不算错'), t('tu as raison, mais je ne veux pas l’admettre franchement', 'you are right, but I would rather not admit it outright', '你说得对，但我不想爽快承认')],
                [t('« On verra. »', '“On verra.”', '“On verra.”'), t('nous verrons plus tard', 'we will see later', '以后再看'), t('le plus souvent : non, mais poliment', 'usually: no, but politely', '多数情况下是委婉的拒绝')],
                [t('« Intéressant… »', '“Intéressant…”', '“Intéressant…”'), t('cela présente un intérêt', 'this is of interest', '这有意思'), t('avec une pause, signale un désaccord courtois', 'with a pause, signals polite disagreement', '若伴有停顿，表示礼貌的不认同')],
                [t('« Il faudrait qu’on en reparle. »', '“Il faudrait qu’on en reparle.”', '“Il faudrait qu’on en reparle.”'), t('une nouvelle discussion serait utile', 'a further discussion would be useful', '有必要再谈一次'), t('je ne suis pas d’accord et je préfère ne pas le dire ici', 'I disagree and prefer not to say so here', '我不同意，但不想当场说出来')],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '⚠️',
              title: t('L’ironie ne se traduit pas, elle s’entend', 'Irony is not translated, it is heard', '反讽靠听，不靠译'),
              text: t(
                'L’ironie française est rarement signalée par un mot ; elle repose sur une **intonation descendante** et un léger ralentissement. À l’écrit, elle passe par le contexte ou l’exagération manifeste. En cas de doute réel, une question neutre — « tu es sérieux ? » — reste toujours acceptable.',
                'French irony is rarely flagged by a word; it rests on a **falling intonation** and a slight slowing down. In writing it comes through context or obvious exaggeration. If you are genuinely unsure, a neutral question — “tu es sérieux ?” — is always acceptable.',
                '法语的反讽很少靠某个词提示，而是依靠**下降语调**和略微放慢的语速。书面上则通过上下文或明显夸张来体现。若确实拿不准，问一句中性的 “tu es sérieux ?” 永远得体。',
              ),
            },
            {
              type: 'quote',
              text: t(
                '— Alors, cette présentation ? — Disons que la salle était bien chauffée. — À ce point ? — Le directeur a même trouvé le temps de consulter son téléphone. Deux fois. — Bon. On en reparle demain ?',
                '“So, how did the presentation go?” “Let us just say the room was nicely heated.” “That bad?” “The director even found time to check his phone. Twice.” “Right. Shall we talk about it tomorrow?”',
                '“那场演示怎么样？”“这么说吧，会议室暖气挺足的。”“有那么糟？”“总监甚至抽空看了手机。两次。”“好吧。明天再聊？”',
              ),
              source: t('Dialogue type — trois répliques, aucune critique explicite', 'Model dialogue — three exchanges, not one explicit criticism', '范例对话 —— 三个来回，没有一句明确批评'),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_c1or_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur l’oral rapide, les registres et l’implicite.', 'Six questions on fast speech, registers and implicitness.', '六道题，考查快速口语、语体与言外之意。'),
      lessons: [
        {
          id: 'les_c1or_q',
          moduleId: 'mod_c1or_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_c1_oral',
          title: t('Quiz — Le français parlé vite', 'Quiz — Fast spoken French', '测验 — 快速口语'),
          summary: t('6 questions sur la compréhension orale fine.', '6 questions on fine-grained listening comprehension.', '6 道题，考查精细听力理解。'),
        },
      ],
    },
  ],
};
