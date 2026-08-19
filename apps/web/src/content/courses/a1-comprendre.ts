import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_a1_comprendre';

export const a1ComprendreCourse: Course = {
  id: ID,
  slug: 'a1-comprendre',
  level: 'A1',
  accentFrom: '#7dd3fc',
  accentTo: '#0284c7',
  status: 'published',
  title: t('Se faire comprendre', 'Making yourself understood', '让别人听懂你'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Les phrases qui sauvent une conversation quand on ne comprend pas, l’impératif pour demander simplement, et l’art d’épeler et de noter ce qu’on entend. Le cours à suivre en premier : il débloque tous les autres.',
    'The sentences that rescue a conversation when you do not understand, the imperative for asking simply, and the art of spelling out and writing down what you hear. Take this course first: it unlocks all the others.',
    '听不懂时能救场的句子、用命令式简单地提出请求，以及拼读和记下所听内容的本领。建议最先学这门课：它能解锁其他所有课程。',
  ),
  tags: [t('Oral', 'Speaking', '口语'), t('Survie', 'Survival', '生存法语')],
  modules: [
    {
      id: 'mod_a1co_1',
      courseId: ID,
      title: t('Parler, demander, noter', 'Speaking, asking, writing down', '开口、提问、记录'),
      summary: t(
        'Trois situations : je ne comprends pas, je demande, je note.',
        'Three situations: I do not understand, I ask, I write it down.',
        '三种情况：听不懂、要提问、要记下来。',
      ),
      lessons: [
        {
          id: 'les_a1co_1',
          moduleId: 'mod_a1co_1',
          kind: 'text',
          durationMin: 10,
          title: t('Les phrases de secours', 'The rescue sentences', '救场句'),
          summary: t(
            'Sept phrases à savoir par cœur avant toutes les autres.',
            'Seven sentences to know by heart before any others.',
            '先于一切、必须背熟的七句话。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🆘',
              text: t(
                'Personne ne comprend tout, même les Français entre eux. La différence entre un débutant bloqué et un débutant qui progresse tient à sept phrases : elles permettent de faire répéter, ralentir, expliquer. Apprenez-les en premier, {prenom} — elles servent à apprendre tout le reste.',
                'Nobody understands everything, not even the French among themselves. The difference between a stuck beginner and one who improves comes down to seven sentences: they get people to repeat, slow down, explain. Learn them first, {prenom} — they are the tool for learning everything else.',
                '没有人什么都听得懂，法国人之间也一样。停滞不前的初学者与不断进步的初学者，差别就在七句话：它们能请对方重复、放慢、解释。{prenom}，先把它们学会——它们是学会其余一切的工具。',
              ),
            },
            {
              type: 'examples',
              emoji: '🛟',
              title: t('Les sept phrases qui sauvent', 'The seven rescue sentences', '七句救场话'),
              items: [
                {
                  fr: 'Pardon, je n’ai pas compris.',
                  gloss: t('La base. « Pardon » adoucit, et personne ne s’en vexe jamais.', 'The basic one. “Pardon” softens it, and nobody ever takes offence.', '最基本的一句。“Pardon” 让语气变柔和，没人会介意。'),
                },
                {
                  fr: 'Vous pouvez répéter, s’il vous plaît ?',
                  gloss: t('À l’oral, la question se pose sans inversion : le ton monte, c’est tout.', 'In speech, the question needs no inversion: the voice just rises at the end.', '口语中提问不需要倒装：句尾语调上扬即可。'),
                },
                {
                  fr: 'Vous pouvez parler plus lentement ?',
                  gloss: t('Les Français accélèrent sans s’en rendre compte. Cette phrase remet la conversation à votre vitesse.', 'French speakers speed up without noticing. This sentence brings the conversation back to your speed.', '法国人不知不觉就会越说越快。这句话能把对话拉回你的速度。'),
                },
                {
                  fr: 'Qu’est-ce que ça veut dire, « embouteillage » ?',
                  gloss: t('Remplacez le mot par celui qui vous bloque. C’est la phrase qui transforme chaque conversation en leçon.', 'Swap in whichever word is blocking you. This is the sentence that turns every conversation into a lesson.', '把卡住你的那个词放进去。这句话能把每次对话变成一堂课。'),
                },
                {
                  fr: 'Comment on dit « ticket » en français ?',
                  gloss: t('L’inverse de la précédente : vous avez l’idée, il vous manque le mot français.', 'The mirror of the previous one: you have the idea, you are missing the French word.', '与上一句相反：你有想法，缺的是法语单词。'),
                },
                {
                  fr: 'Ça s’écrit comment ?',
                  gloss: t('Indispensable pour les noms propres et les mots qu’on veut retrouver plus tard.', 'Essential for proper names and words you want to look up later.', '问人名和想事后查找的词时必不可少。'),
                },
                {
                  fr: 'Je suis désolé, je parle un petit peu français.',
                  gloss: t('Dite en français, cette phrase prouve le contraire — et met tout le monde de votre côté.', 'Said in French, this sentence proves the opposite — and gets everyone on your side.', '用法语说出这句话，本身就证明并非如此——还会让所有人都站在你这边。'),
                },
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '💡',
              title: t('Le réflexe : répéter ce qu’on a compris', 'The reflex: repeat what you did catch', '好习惯：复述你听到的部分'),
              text: t(
                'Plutôt que « je n’ai pas compris » tout court, répétez le morceau entendu : « La gare… ? ». Votre interlocuteur ne répète alors que ce qui manque, au lieu de tout redire plus fort.',
                'Rather than a bare “je n’ai pas compris”, repeat the piece you caught: “La gare…?”. The other person then repeats only the missing part, instead of saying everything again, louder.',
                '与其只说 “je n’ai pas compris”，不如复述听到的片段：“La gare…?”。对方就只会补上缺的部分，而不是把整句话更大声地再说一遍。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎧',
              title: t('Vous avez l’oreille ?', 'Is your ear ready?', '你的耳朵准备好了吗？'),
              hint: t(
                'Écoutez chaque phrase — au besoin en vitesse lente — puis répondez.',
                'Listen to each sentence — slowly if needed — then answer.',
                '听每个句子——需要时用慢速——然后作答。',
              ),
              widget: {
                kind: 'listening',
                prompt: t('Que dit la personne ?', 'What is the person saying?', '这个人在说什么？'),
                items: [
                  {
                    id: 'e1',
                    sentence: 'Vous pouvez parler plus lentement, s’il vous plaît ?',
                    question: t('Que demande la personne ?', 'What is the person asking for?', '这个人在请求什么？'),
                    options: [
                      t('De parler moins vite', 'To speak less fast', '说得慢一点'),
                      t('De parler plus fort', 'To speak louder', '说得大声一点'),
                      t('De répéter le dernier mot', 'To repeat the last word', '重复最后一个词'),
                    ],
                    answer: 0,
                    why: t('« Plus lentement » : moins vite. « Plus fort » serait pour le volume.', '“Plus lentement” means less fast. “Plus fort” would be about volume.', '“plus lentement” 指更慢。“plus fort” 才是指音量。'),
                  },
                  {
                    id: 'e2',
                    sentence: 'Qu’est-ce que ça veut dire ?',
                    question: t('Qu’est-ce qui manque à la personne ?', 'What is the person missing?', '这个人缺的是什么？'),
                    options: [
                      t('Le sens d’un mot', 'The meaning of a word', '一个词的意思'),
                      t('Le mot français', 'The French word', '法语单词'),
                      t('L’orthographe', 'The spelling', '拼写'),
                    ],
                    answer: 0,
                    why: t('« Ça veut dire » interroge le sens. Pour trouver le mot, on dirait « comment on dit ». ', '“Ça veut dire” asks about meaning. To find the word you would say “comment on dit”.', '“ça veut dire” 问的是意思。要找词该说 “comment on dit”。'),
                  },
                  {
                    id: 'e3',
                    sentence: 'Ça s’écrit comment ?',
                    question: t('Que va faire l’autre personne ?', 'What will the other person do?', '对方接下来会做什么？'),
                    options: [
                      t('Épeler le mot', 'Spell the word out', '把词拼出来'),
                      t('Traduire le mot', 'Translate the word', '翻译这个词'),
                      t('Parler plus lentement', 'Speak more slowly', '说得更慢'),
                    ],
                    answer: 0,
                    why: t('« S’écrire » appelle l’orthographe : la réponse sera lettre par lettre.', '“S’écrire” calls for spelling: the answer will come letter by letter.', '“s’écrire” 要的是拼写：对方会一个字母一个字母地回答。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_a1co_2',
          moduleId: 'mod_a1co_1',
          kind: 'text',
          durationMin: 11,
          title: t('L’impératif : demander sans détour', 'The imperative: asking straight out', '命令式：直接提出请求'),
          summary: t(
            'Trois formes seulement, et le mot magique qui les adoucit toutes.',
            'Only three forms, and the magic word that softens them all.',
            '只有三种形式，外加一个让它们全都变客气的神奇短语。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '👉',
              text: t(
                'L’impératif est le temps des consignes : « écoutez », « répétez », « regarde ». C’est le verbe du présent, sans sujet, à trois personnes seulement. Vous l’entendez à chaque cours de français — il est temps de le comprendre.',
                'The imperative is the tense of instructions: “écoutez”, “répétez”, “regarde”. It is the present-tense verb, with no subject, in only three persons. You hear it in every French class — time to understand it.',
                '命令式是发出指令的时态：“écoutez”“répétez”“regarde”。它就是现在时动词去掉主语，只有三个人称。每节法语课你都在听它——是时候弄懂它了。',
              ),
            },
            {
              type: 'conjugation',
              emoji: '🔧',
              title: t('L’impératif se fabrique en une seconde', 'The imperative is built in one second', '命令式一秒钟就能造出来'),
              note: t(
                'On prend le présent, on enlève le sujet. Seule règle : à « tu », les verbes en -er perdent leur s final.',
                'Take the present tense, drop the subject. Only rule: with “tu”, -er verbs lose their final s.',
                '取现在时，去掉主语。唯一的规则：对 “tu”，-er 动词去掉词尾的 s。',
              ),
              columns: [t('parler', 'parler', 'parler'), t('finir', 'finir', 'finir'), t('venir', 'venir', 'venir')],
              rows: [
                { pronoun: '(tu)', forms: ['parle', 'finis', 'viens'] },
                { pronoun: '(nous)', forms: ['parlons', 'finissons', 'venons'] },
                { pronoun: '(vous)', forms: ['parlez', 'finissez', 'venez'] },
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('Sec sans lui, poli avec lui', 'Curt without it, polite with it', '不加它显得生硬，加了它就客气'),
              text: t(
                'Un impératif seul est un ordre : « Répétez. » Avec **s’il vous plaît** — ou **s’il te plaît** avec un proche — il devient une demande normale : « Répétez, s’il vous plaît. » Ce petit ajout change entièrement la façon dont on vous perçoit.',
                'A bare imperative is an order: “Répétez.” With **s’il vous plaît** — or **s’il te plaît** with someone close — it becomes a normal request: “Répétez, s’il vous plaît.” That small addition entirely changes how you come across.',
                '光秃秃的命令式是命令：“Répétez.” 加上 **s’il vous plaît**——对亲近的人用 **s’il te plaît**——就成了正常的请求：“Répétez, s’il vous plaît.” 这一点点添加会彻底改变别人对你的印象。',
              ),
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('Fabriquez la consigne', 'Build the instruction', '造出这句指令'),
              hint: t('Attention au s final des verbes en -er.', 'Watch the final s on -er verbs.', '注意 -er 动词词尾的 s。'),
              widget: {
                kind: 'fill',
                prompt: t('Quelle forme est correcte ?', 'Which form is right?', '哪个形式正确？'),
                items: [
                  {
                    id: 'i1',
                    before: 'À un ami :',
                    after: '-moi ton numéro, s’il te plaît.',
                    options: ['Donne', 'Donnes', 'Donnez'],
                    answer: 'Donne',
                    why: t('Verbe en -er à « tu » : le s du présent disparaît. « Donnes » est la faute la plus courante.', 'An -er verb with “tu”: the present-tense s disappears. “Donnes” is the most common mistake.', '-er 动词对 “tu”：现在时的 s 消失。“Donnes” 是最常见的错误。'),
                  },
                  {
                    id: 'i2',
                    before: 'À un inconnu :',
                    after: 'la deuxième rue à droite.',
                    options: ['Prenez', 'Prends', 'Prendre'],
                    answer: 'Prenez',
                    why: t('On vouvoie un inconnu : forme « vous ». L’infinitif « prendre » ne donne jamais d’ordre à quelqu’un en face.', 'You use “vous” with a stranger. The infinitive “prendre” never gives an order to someone in front of you.', '对陌生人用 “vous” 的形式。不定式 “prendre” 不能对面前的人发出指令。'),
                  },
                  {
                    id: 'i3',
                    before: 'Le professeur à la classe :',
                    after: 'la page trente-deux.',
                    options: ['Ouvrez', 'Ouvre', 'Ouvrons'],
                    answer: 'Ouvrez',
                    why: t('La classe entière : « vous ». « Ouvrons » inclurait le professeur lui-même.', 'The whole class: “vous”. “Ouvrons” would include the teacher too.', '面对全班用 “vous”。“Ouvrons” 会把老师自己也算进去。'),
                  },
                  {
                    id: 'i4',
                    before: 'Entre amis, pour proposer :',
                    after: 'au cinéma ce soir !',
                    options: ['Allons', 'Allez', 'Va'],
                    answer: 'Allons',
                    why: t('« Allons » = « faisons-le ensemble ». C’est la forme de la proposition, pas de l’ordre.', '“Allons” means “let’s do it together”. It is the form of the suggestion, not the order.', '“Allons” 意为“我们一起去吧”。这是提议的形式，不是命令。'),
                  },
                ],
              },
            },
            {
              type: 'interactive',
              emoji: '🔗',
              title: t('Les consignes de la classe', 'Classroom instructions', '课堂指令'),
              hint: t('Vous les entendrez à chaque leçon.', 'You will hear these in every lesson.', '每节课你都会听到它们。'),
              widget: {
                kind: 'pairs',
                prompt: t('Que faut-il faire ?', 'What should you do?', '该做什么？'),
                pairs: [
                  { id: 'c1', left: 'Écoutez et répétez.', right: t('entendre, puis dire à son tour', 'hear it, then say it in turn', '先听，再跟着说') },
                  { id: 'c2', left: 'Complétez la phrase.', right: t('remplir le trou avec le mot juste', 'fill the gap with the right word', '用正确的词填空') },
                  { id: 'c3', left: 'Cochez la bonne réponse.', right: t('marquer une case parmi plusieurs', 'tick one box among several', '在多个选项中勾选一个') },
                  { id: 'c4', left: 'Reliez les deux colonnes.', right: t('associer chaque élément à son partenaire', 'match each item with its partner', '把每项与对应项连起来') },
                  { id: 'c5', left: 'Lisez à voix haute.', right: t('prononcer le texte, pas seulement le lire des yeux', 'say the text aloud, not just read it silently', '把文本读出声，而不只是默读') },
                ],
              },
            },
          ],
        },
        {
          id: 'les_a1co_3',
          moduleId: 'mod_a1co_1',
          kind: 'text',
          durationMin: 12,
          title: t('Épeler, noter, vérifier', 'Spelling, writing down, checking', '拼读、记录、核对'),
          summary: t(
            'Vos premières dictées : de deux mots à une phrase entière.',
            'Your first dictations: from two words to a full sentence.',
            '你的第一次听写：从两个词到一整句。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '📝',
              text: t(
                'Noter ce qu’on entend est la compétence qui relie l’oreille et l’écrit. Un numéro de téléphone, un nom de rue, un rendez-vous : dans la vraie vie, mal noter coûte cher. On s’entraîne ici sans risque.',
                'Writing down what you hear is the skill that connects your ear to the page. A phone number, a street name, an appointment: in real life, writing it down wrong is costly. Here you can practise without risk.',
                '把听到的写下来，是连接耳朵与纸面的能力。电话号码、街道名、约会时间：在现实生活里写错代价很大。在这里练习则毫无风险。',
              ),
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🔤',
              title: t('Trois lettres à confirmer systématiquement', 'Three letters to always double-check', '三个必须再确认的字母'),
              text: t(
                'Au téléphone, **b**, **p** et **d** s’entendent presque pareil, et **g** / **j** s’inversent par rapport à l’anglais. Les Français eux-mêmes confirment : « B comme Bernard », « P comme Paris ». Faites pareil, personne ne trouvera cela étrange.',
                'On the phone, **b**, **p** and **d** sound nearly identical, and **g** / **j** are swapped compared with English. French speakers themselves confirm: “B comme Bernard”, “P comme Paris”. Do the same — nobody will find it odd.',
                '电话里 **b**、**p**、**d** 听起来几乎一样，而 **g** 和 **j** 的读音与英语正好互换。法国人自己也会确认：“B comme Bernard”“P comme Paris”。照着做，没人会觉得奇怪。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎧',
              title: t('À vos stylos', 'Pens ready', '拿起笔来'),
              hint: t(
                'Écoutez autant de fois que nécessaire — la vitesse lente aide beaucoup — puis écrivez la phrase.',
                'Listen as many times as you need — the slow speed helps a lot — then type the sentence.',
                '想听几遍就听几遍——慢速很有帮助——然后把句子写下来。',
              ),
              widget: {
                kind: 'dictation',
                prompt: t(
                  'Écrivez exactement ce que vous entendez. Les majuscules et la ponctuation ne comptent pas.',
                  'Write exactly what you hear. Capitals and punctuation do not count.',
                  '写下你听到的内容。大小写和标点不计分。',
                ),
                items: [
                  {
                    id: 'd1',
                    sentence: 'Je m’appelle Paul.',
                    hint: t('Trois mots. Attention à l’apostrophe.', 'Three words. Mind the apostrophe.', '三个词。注意省音符。'),
                    trap: t('« M’appelle » : le e de « me » disparaît devant la voyelle, remplacé par une apostrophe.', '“M’appelle”: the e of “me” disappears before the vowel, replaced by an apostrophe.', '“m’appelle”：“me” 的 e 在元音前消失，由省音符代替。'),
                  },
                  {
                    id: 'd2',
                    sentence: 'Il habite à Paris.',
                    hint: t('Le h ne s’entend pas, mais il s’écrit.', 'The h is silent, but it is written.', 'h 不发音，但要写出来。'),
                    trap: t('« Habite » commence par un h muet : on entend « il abite », on écrit « il habite ».', '“Habite” starts with a silent h: you hear “il abite”, you write “il habite”.', '“habite” 以哑音 h 开头：听到的是 “il abite”，写出来是 “il habite”。'),
                  },
                  {
                    id: 'd3',
                    sentence: 'Nous avons deux enfants.',
                    hint: t('Deux liaisons se cachent dans cette phrase.', 'Two liaisons hide in this sentence.', '这句话里藏着两个联诵。'),
                    trap: t('« Nous‿avons » et « deux‿enfants » : les liaisons collent les mots à l’oreille, mais chaque mot garde son orthographe.', '“Nous‿avons” and “deux‿enfants”: liaisons glue the words together for the ear, but each word keeps its spelling.', '“nous‿avons” 和 “deux‿enfants”：联诵让词在耳中连成一片，但每个词的拼写不变。'),
                  },
                  {
                    id: 'd4',
                    sentence: 'Elle est née le trois mars.',
                    hint: t('Une date, et un accord au féminin.', 'A date, and a feminine agreement.', '一个日期，一个阴性配合。'),
                    trap: t('« Née » prend deux e : le participe s’accorde avec « elle ». Et la date se dit sans « de » : « le trois mars ».', '“Née” takes two e’s: the participle agrees with “elle”. And the date has no “de”: “le trois mars”.', '“née” 有两个 e：分词与 “elle” 配合。日期不加 “de”：“le trois mars”。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '🏆',
              title: t('La dictée est un jeu français', 'Dictation is a French game', '听写是法国人的游戏'),
              text: t(
                'La France organise de vrais championnats de dictée, télévisés, avec des célébrités qui font des fautes. Vous venez d’entrer dans une tradition nationale — et chaque dictée réussie ici muscle votre oreille pour la rue.',
                'France holds real dictation championships, on television, with celebrities making mistakes. You have just joined a national tradition — and every dictation you get right here trains your ear for the street.',
                '法国有真正的听写锦标赛，还上电视，名人们也会写错。你刚刚加入了一项国民传统——在这里每写对一次，耳朵就更能应付街头的真实法语。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_a1co_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur les phrases de secours et l’impératif.', 'Six questions on rescue sentences and the imperative.', '六道题，考查救场句与命令式。'),
      lessons: [
        {
          id: 'les_a1co_q',
          moduleId: 'mod_a1co_q',
          kind: 'quiz',
          durationMin: 7,
          quizId: 'qz_a1_comprendre',
          title: t('Quiz — Se faire comprendre', 'Quiz — Making yourself understood', '测验 — 让别人听懂你'),
          summary: t('6 questions pour vérifier vos réflexes.', '6 questions to check your reflexes.', '6 道题，检验你的应对反应。'),
        },
      ],
    },
  ],
};
