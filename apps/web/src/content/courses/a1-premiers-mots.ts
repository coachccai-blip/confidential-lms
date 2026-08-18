import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_a1_premiers_mots';

export const a1PremiersMotsCourse: Course = {
  id: ID,
  slug: 'a1-premiers-mots',
  level: 'A1',
  accentFrom: '#7dd3fc',
  accentTo: '#0284c7',
  status: 'published',
  title: t('Premiers mots, premières phrases', 'First words, first sentences', '最初的词语与句子'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Le tout début : dire bonjour, se présenter, épeler son nom, compter et donner l’heure. Tout ce qu’il faut pour tenir une première conversation de trente secondes sans paniquer.',
    'The very beginning: saying hello, introducing yourself, spelling your name, counting and telling the time. Everything you need to survive a first thirty-second conversation.',
    '真正的起点：打招呼、自我介绍、拼写姓名、数数与说时间。撑过第一次三十秒对话所需的一切。',
  ),
  tags: [t('Oral', 'Speaking', '口语'), t('Débutant complet', 'Absolute beginner', '零基础')],
  modules: [
    {
      id: 'mod_a1pm_1',
      courseId: ID,
      title: t('Entrer en contact', 'Making contact', '开口交流'),
      summary: t(
        'Saluer, se nommer, compter : les trois gestes de la première rencontre.',
        'Greeting, naming yourself, counting: the three moves of a first meeting.',
        '问候、报出姓名、数数：初次见面的三个动作。',
      ),
      lessons: [
        {
          id: 'les_a1pm_1',
          moduleId: 'mod_a1pm_1',
          kind: 'text',
          durationMin: 9,
          title: t('Bonjour : saluer et prendre congé', 'Bonjour: greeting and taking leave', 'Bonjour：问候与告别'),
          summary: t(
            'Les formules de base, et le seul choix qui compte vraiment : tu ou vous.',
            'The basic formulas, and the one choice that really matters: tu or vous.',
            '基础用语，以及唯一真正重要的选择：tu 还是 vous。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'En français, on salue toujours. Entrer dans une boulangerie sans dire « bonjour » est perçu comme impoli — bien plus qu’une faute de grammaire. Commencez donc par ces quelques mots : ils ouvrent toutes les portes.',
                'In French you always greet people. Walking into a bakery without saying “bonjour” comes across as rude — far more so than a grammar mistake. So start with these few words: they open every door.',
                '在法国，见面一定要问候。走进面包店不说 “bonjour” 会被视为失礼——比语法错误严重得多。所以先掌握这几个词：它们能打开每一扇门。',
              ),
            },
            {
              type: 'table',
              emoji: '🕰️',
              caption: t('Saluer selon le moment', 'Greeting by time of day', '按时段问候'),
              headers: [
                t('Formule', 'Phrase', '用语'),
                t('Quand', 'When', '何时'),
                t('Registre', 'Register', '语体'),
              ],
              rows: [
                [t('Bonjour', 'Bonjour', 'Bonjour'), t('du matin jusqu’à la fin de l’après-midi', 'from morning until late afternoon', '从早晨到傍晚'), t('neutre, toujours correct', 'neutral, always safe', '中性，永远得体')],
                [t('Bonsoir', 'Bonsoir', 'Bonsoir'), t('à partir de la fin de journée', 'from the end of the day onwards', '从傍晚开始'), t('neutre', 'neutral', '中性')],
                [t('Salut', 'Salut', 'Salut'), t('arrivée ET départ, entre proches', 'both arriving and leaving, among friends', '见面和道别都可用，限熟人之间'), t('familier', 'informal', '口语')],
                [t('Au revoir', 'Au revoir', 'Au revoir'), t('en partant', 'when leaving', '离开时'), t('neutre', 'neutral', '中性')],
                [t('Bonne journée / Bonne soirée', 'Bonne journée / Bonne soirée', 'Bonne journée / Bonne soirée'), t('en partant, après « au revoir »', 'when leaving, after “au revoir”', '道别后再加一句'), t('chaleureux', 'warm', 'friendly 亲切')],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '👋',
              title: t('« Bonjour » ne se dit qu’une fois par jour', '“Bonjour” is said only once a day', '“Bonjour”一天只说一次'),
              text: t(
                'Si vous recroisez la même personne dans la journée, on dit « rebonjour » en plaisantant, ou simplement rien. Redire « bonjour » à quelqu’un qu’on vient de saluer surprend toujours un francophone.',
                'If you meet the same person again later in the day, people jokingly say “rebonjour”, or simply nothing. Saying “bonjour” twice to the same person always surprises a French speaker.',
                '如果同一天再次遇到同一个人，法国人会开玩笑说 “rebonjour”，或者干脆什么都不说。对刚问候过的人再说一次 “bonjour” 总会让法语母语者感到意外。',
              ),
            },
            { type: 'heading', emoji: '❓', text: t('Tu ou vous : la question qui compte', 'Tu or vous: the question that matters', 'Tu 还是 vous：真正重要的问题') },
            {
              type: 'paragraph',
              text: t(
                'Le français distingue deux façons de dire « vous » : **tu** pour une seule personne proche, **vous** pour une personne qu’on ne connaît pas — et aussi pour plusieurs personnes. Se tromper de forme n’empêche pas d’être compris, mais peut sembler brusque.',
                'French has two ways of saying “you”: **tu** for one person you are close to, **vous** for someone you do not know — and also for several people. Getting it wrong will not stop you being understood, but it can sound abrupt.',
                '法语有两种表达“你/您”的方式：**tu** 用于关系亲近的单个人，**vous** 用于不熟悉的人，同时也用于多个人。用错不会让人听不懂，但可能显得唐突。',
              ),
            },
            {
              type: 'examples',
              emoji: '💬',
              title: t('La règle du débutant', 'The beginner’s rule', '初学者法则'),
              items: [
                { fr: 'Bonjour, comment allez-vous ?', gloss: t('Avec un adulte inconnu, un commerçant, un professeur. Toujours sûr.', 'With an adult you do not know, a shopkeeper, a teacher. Always safe.', '对陌生成年人、店员、老师使用。永远安全。') },
                { fr: 'Salut, comment ça va ?', gloss: t('Entre amis, entre étudiants, en famille.', 'Among friends, students, family.', '朋友、同学、家人之间。') },
                { fr: 'Ça va ? — Ça va, merci. Et vous ?', gloss: t('L’échange le plus fréquent de toute la langue.', 'The most frequent exchange in the whole language.', '整个法语中最常见的对话。') },
                { fr: 'Bonjour, comment vas-tu ?', gloss: t('À un inconnu : trop familier, on préfère « allez-vous ».', 'To a stranger: too familiar — “allez-vous” is preferred.', '对陌生人：过于随便，应说 “allez-vous”。'), incorrect: true },
              ],
            },
            {
              type: 'interactive',
              emoji: '🎚️',
              title: t('Tu ou vous : le curseur social', 'Tu or vous: the social dial', 'Tu 还是 vous：社交刻度'),
              hint: t(
                'Passez d’une situation à l’autre, {prenom}, pour voir ce qui se dit.',
                'Move from one situation to the next, {prenom}, to see what is said.',
                '{prenom}，在不同情境间切换，看看该怎么说。',
              ),
              widget: {
                kind: 'switcher',
                steps: [
                  {
                    id: 'stranger',
                    label: t('Un inconnu', 'A stranger', '陌生人'),
                    headline: t('vous — toujours sûr', 'vous — always safe', 'vous —— 永远稳妥'),
                    example: 'Bonjour, comment allez-vous ?',
                    gloss: t('Commerçant, guichet, passant : le vouvoiement ne vexe jamais personne.', 'Shopkeeper, counter, passer-by: “vous” never offends anyone.', '店员、柜台、路人：用 vous 从不会冒犯任何人。'),
                  },
                  {
                    id: 'work',
                    label: t('Au travail', 'At work', '职场'),
                    headline: t('vous, puis selon l’usage', 'vous, then as the workplace goes', 'vous，之后视惯例而定'),
                    example: 'Bonjour Madame, vous avez une minute ?',
                    gloss: t('On vouvoie d’abord et on observe : certaines entreprises se tutoient entièrement, d’autres pas du tout.', 'Start with “vous” and observe: some companies use “tu” throughout, others not at all.', '先用 vous 并观察：有些公司全员互称 tu，有些则完全不用。'),
                  },
                  {
                    id: 'known',
                    label: t('Un collègue proche', 'A close colleague', '关系近的同事'),
                    headline: t('tu, une fois proposé', 'tu, once it has been offered', 'tu，在对方提出之后'),
                    example: 'Salut, tu viens manger ?',
                    gloss: t('Le passage au tutoiement se propose : « on peut se tutoyer ». Ne le prenez pas d’office.', 'The switch to “tu” is offered: “on peut se tutoyer”. Do not assume it.', '改用 tu 需由对方提出：“on peut se tutoyer”。不要自作主张。'),
                  },
                  {
                    id: 'family',
                    label: t('Famille et amis', 'Family and friends', '家人与朋友'),
                    headline: t('tu, sans hésitation', 'tu, without hesitation', 'tu，无需犹豫'),
                    example: 'Ça va ? Tu as passé un bon week-end ?',
                    gloss: t('Vouvoyer un ami serait perçu comme une mise à distance délibérée.', 'Using “vous” with a friend would read as deliberately keeping them at a distance.', '对朋友用 vous 会被理解为刻意保持距离。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '💡',
              title: t('En cas de doute', 'When in doubt', '拿不准时'),
              text: t(
                'Employez **vous**. Personne n’a jamais été vexé qu’on lui dise « vous ». Si votre interlocuteur préfère le tutoiement, il vous le dira : « on peut se tutoyer ».',
                'Use **vous**. Nobody has ever been offended by being called “vous”. If the other person prefers “tu”, they will tell you: “on peut se tutoyer”.',
                '就用 **vous**。从没有人因为被称作 “vous” 而生气。如果对方更愿意用 “tu”，他会告诉你：“on peut se tutoyer”。',
              ),
            },
          ],
        },
        {
          id: 'les_a1pm_2',
          moduleId: 'mod_a1pm_1',
          kind: 'text',
          durationMin: 10,
          title: t('Je m’appelle… : se présenter et épeler', 'Je m’appelle…: introducing yourself and spelling', 'Je m’appelle…：自我介绍与拼读'),
          summary: t(
            'Nom, nationalité, profession, et l’alphabet pour épeler quand on vous le demande.',
            'Name, nationality, job, and the alphabet for when you are asked to spell.',
            '姓名、国籍、职业，以及被要求拼写时所需的字母表。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Une présentation tient en quatre phrases. Apprenez-les comme un bloc : vous les réutiliserez à chaque première rencontre, à l’hôtel, à la banque, en cours.',
                'An introduction fits into four sentences. Learn them as one block: you will reuse them at every first meeting, at the hotel, at the bank, in class.',
                '自我介绍只需四句话。把它们当作一个整体来记：每次初次见面、在酒店、在银行、在课堂上都会用到。',
              ),
            },
            {
              type: 'examples',
              emoji: '💬',
              title: t('Les quatre phrases à savoir par cœur', 'The four sentences to know by heart', '必须背下的四句话'),
              items: [
                { fr: 'Je m’appelle {prenom}.', gloss: t('Votre phrase, {prenom} : littéralement « je m’appelle », car le verbe est pronominal.', 'Your own sentence, {prenom}: literally “I call myself”, because the verb is reflexive.', '{prenom}，这就是你的句子：字面意思是“我叫自己”，因为这是自反动词。') },
                { fr: 'Je suis française. / Je suis chinois.', gloss: t('La nationalité s’accorde : française au féminin, chinois au masculin.', 'Nationality agrees: française for a woman, chinois for a man.', '国籍需性数配合：女性用 française，男性用 chinois。') },
                { fr: 'J’habite à Lyon.', gloss: t('« à » devant une ville, toujours.', '“à” before a city, always.', '城市名前一律用 “à”。') },
                { fr: 'Je suis étudiante. / Je suis ingénieur.', gloss: t('Pas d’article devant la profession, contrairement à l’anglais.', 'No article before the job, unlike English.', '职业前不加冠词，与英语不同。') },
              ],
            },
            {
              type: 'conjugation',
              emoji: '🔄',
              title: t('S’appeler au présent', 'S’appeler in the present', '现在时的 s’appeler'),
              note: t(
                'Attention au double **l** aux personnes du singulier et à la troisième du pluriel : c’est une irrégularité d’orthographe, pas de prononciation.',
                'Note the double **l** in the singular forms and the third-person plural: this is a spelling irregularity, not a pronunciation one.',
                '注意单数各人称和第三人称复数中的双写 **l**：这是拼写上的不规则，而非发音。',
              ),
              columns: [t('s’appeler', 's’appeler', 's’appeler')],
              rows: [
                { pronoun: 'je', forms: ['m’appelle'] },
                { pronoun: 'tu', forms: ['t’appelles'] },
                { pronoun: 'il / elle', forms: ['s’appelle'] },
                { pronoun: 'nous', forms: ['nous appelons'] },
                { pronoun: 'vous', forms: ['vous appelez'] },
                { pronoun: 'ils / elles', forms: ['s’appellent'] },
              ],
            },
            { type: 'heading', emoji: '✍️', text: t('Épeler son nom', 'Spelling your name', '拼读姓名') },
            {
              type: 'paragraph',
              text: t(
                'On vous demandera souvent « Vous pouvez épeler ? ». Sept lettres posent problème aux apprenants parce qu’elles ne se prononcent pas comme en anglais : **E** [ə], **I** [i], **G** [ʒe], **J** [ʒi], **Y** [igʁɛk], **W** [dubləve], **R** [ɛʁ].',
                'You will often be asked “Vous pouvez épeler ?”. Seven letters trip learners up because they are not pronounced as in English: **E** [ə], **I** [i], **G** [ʒe], **J** [ʒi], **Y** [igʁɛk], **W** [dubləve], **R** [ɛʁ].',
                '别人常会问 “Vous pouvez épeler ?”。有七个字母会让学习者出错，因为它们的读法与英语不同：**E** [ə]、**I** [i]、**G** [ʒe]、**J** [ʒi]、**Y** [igʁɛk]、**W** [dubləve]、**R** [ɛʁ]。',
              ),
            },
            {
              type: 'keyvalues',
              emoji: '✍️',
              title: t('Les accents, à dire quand on épelle', 'Accents, to be said when spelling', '拼读时要说出的符号'),
              entries: [
                { label: t('é', 'é', 'é'), value: t('« e accent aigu » — été, café, étudiant', '“e accent aigu” — été, café, étudiant', '“e accent aigu” —— été、café、étudiant') },
                { label: t('è', 'è', 'è'), value: t('« e accent grave » — mère, très, problème', '“e accent grave” — mère, très, problème', '“e accent grave” —— mère、très、problème') },
                { label: t('ê', 'ê', 'ê'), value: t('« e accent circonflexe » — être, fenêtre', '“e accent circonflexe” — être, fenêtre', '“e accent circonflexe” —— être、fenêtre') },
                { label: t('ç', 'ç', 'ç'), value: t('« c cédille » — français, ça, garçon', '“c cédille” — français, ça, garçon', '“c cédille” —— français、ça、garçon') },
                { label: t('-', '-', '-'), value: t('« trait d’union » — Jean-Pierre, Saint-Étienne', '“trait d’union” — Jean-Pierre, Saint-Étienne', '“trait d’union”（连字符）—— Jean-Pierre、Saint-Étienne') },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🪤',
              title: t('Le piège du prénom et du nom', 'The first-name / surname trap', '名与姓的陷阱'),
              text: t(
                'En français, **le prénom** vient d’abord (Marie), **le nom** ensuite (Dubois) — l’inverse de l’ordre chinois. Sur un formulaire, « NOM » en majuscules désigne le nom de famille, et « Prénom » le prénom.',
                'In French, **le prénom** (first name) comes first (Marie), **le nom** (surname) second (Dubois) — the reverse of Chinese order. On a form, “NOM” in capitals means the surname, and “Prénom” the first name.',
                '在法语中，**le prénom**（名）在前（Marie），**le nom**（姓）在后（Dubois）——与中文顺序相反。表格上大写的 “NOM” 指姓氏，“Prénom” 指名字。',
              ),
            },
          ],
        },
        {
          id: 'les_a1pm_3',
          moduleId: 'mod_a1pm_1',
          kind: 'text',
          durationMin: 10,
          title: t('Compter, dire l’heure et la date', 'Counting, telling the time and the date', '数数、说时间与日期'),
          summary: t(
            'Les nombres et leurs pièges, l’heure officielle et l’heure courante, les jours et les mois.',
            'Numbers and their traps, official and everyday time, days and months.',
            '数字及其陷阱、正式与日常的时间表达、星期与月份。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Les nombres français sont réguliers jusqu’à 69. Ensuite, la langue compte par vingtaines, héritage médiéval : 70 se dit « soixante-dix » (60 + 10), 80 « quatre-vingts » (4 × 20), 90 « quatre-vingt-dix » (4 × 20 + 10). C’est la seule difficulté réelle.',
                'French numbers are regular up to 69. After that, the language counts in twenties, a medieval legacy: 70 is “soixante-dix” (60 + 10), 80 is “quatre-vingts” (4 × 20), 90 is “quatre-vingt-dix” (4 × 20 + 10). That is the only real difficulty.',
                '法语数字到 69 都很规则。之后则以二十进位，这是中世纪的遗留：70 说成 “soixante-dix”（60 + 10），80 是 “quatre-vingts”（4 × 20），90 是 “quatre-vingt-dix”（4 × 20 + 10）。这是唯一真正的难点。',
              ),
            },
            {
              type: 'table',
              emoji: '🔢',
              caption: t('Les dizaines qui posent problème', 'The tricky tens', '容易出错的整十数'),
              headers: [t('Nombre', 'Number', '数字'), t('Français', 'French', '法语'), t('Décomposition', 'Breakdown', '构成')],
              rows: [
                [t('70', '70', '70'), t('soixante-dix', 'soixante-dix', 'soixante-dix'), t('60 + 10', '60 + 10', '60 + 10')],
                [t('71', '71', '71'), t('soixante et onze', 'soixante et onze', 'soixante et onze'), t('60 + 11', '60 + 11', '60 + 11')],
                [t('80', '80', '80'), t('quatre-vingts', 'quatre-vingts', 'quatre-vingts'), t('4 × 20', '4 × 20', '4 × 20')],
                [t('81', '81', '81'), t('quatre-vingt-un', 'quatre-vingt-un', 'quatre-vingt-un'), t('4 × 20 + 1', '4 × 20 + 1', '4 × 20 + 1')],
                [t('95', '95', '95'), t('quatre-vingt-quinze', 'quatre-vingt-quinze', 'quatre-vingt-quinze'), t('4 × 20 + 15', '4 × 20 + 15', '4 × 20 + 15')],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🏛️',
              title: t('En Belgique et en Suisse, c’est plus simple', 'In Belgium and Switzerland it is simpler', '在比利时和瑞士更简单'),
              text: t(
                'On y dit « septante » (70), « nonante » (90), et « huitante » (80) dans une partie de la Suisse. Ces formes sont parfaitement correctes ; elles ne sont simplement pas utilisées en France.',
                'There people say “septante” (70), “nonante” (90), and “huitante” (80) in parts of Switzerland. These forms are perfectly correct; they are simply not used in France.',
                '在那里人们说 “septante”（70）、“nonante”（90），瑞士部分地区还说 “huitante”（80）。这些形式完全正确，只是法国不用。',
              ),
            },
            { type: 'heading', emoji: '🕰️', text: t('Quelle heure est-il ?', 'What time is it?', '现在几点？') },
            {
              type: 'examples',
              emoji: '🕰️',
              title: t('Deux façons de dire la même heure', 'Two ways of giving the same time', '同一时刻的两种说法'),
              items: [
                { fr: 'Il est quatorze heures trente.', gloss: t('Heure officielle : horaires, trains, rendez-vous formels.', 'Official time: timetables, trains, formal appointments.', '正式时间：时刻表、火车、正式约会。') },
                { fr: 'Il est deux heures et demie.', gloss: t('Heure courante : conversation de tous les jours.', 'Everyday time: ordinary conversation.', '日常时间：普通对话。') },
                { fr: 'Il est huit heures moins le quart.', gloss: t('7 h 45 : on retranche le quart de l’heure suivante.', '7:45: you subtract a quarter from the next hour.', '7:45：从下一个整点减去一刻钟。') },
                { fr: 'Il est midi. / Il est minuit.', gloss: t('Jamais « douze heures » dans la conversation.', 'Never “douze heures” in conversation.', '日常对话中绝不说 “douze heures”。') },
              ],
            },
            {
              type: 'keyvalues',
              emoji: '🗂️',
              title: t('Jours, mois, dates', 'Days, months, dates', '星期、月份、日期'),
              entries: [
                { label: t('Les jours', 'Days', '星期'), value: t('lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche — sans majuscule', 'lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche — no capital letter', 'lundi、mardi、mercredi、jeudi、vendredi、samedi、dimanche —— 不大写') },
                { label: t('Les mois', 'Months', '月份'), value: t('janvier, février, mars… décembre — sans majuscule non plus', 'janvier, février, mars… décembre — no capital either', 'janvier、février、mars…… décembre —— 同样不大写') },
                { label: t('Une date', 'A date', '日期'), value: t('« le 14 juillet 2026 » : article + chiffre + mois. Jamais « juillet 14 ».', '“le 14 juillet 2026”: article + number + month. Never “juillet 14”.', '“le 14 juillet 2026”：冠词 + 数字 + 月份。绝不说 “juillet 14”。') },
                { label: t('Le premier', 'The first', '一号'), value: t('Seul le 1er est ordinal : « le 1er mai », mais « le 2 mai ».', 'Only the 1st is ordinal: “le 1er mai”, but “le 2 mai”.', '只有 1 号用序数：“le 1er mai”，但说 “le 2 mai”。') },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mod_a1pm_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur les salutations, la présentation et les nombres.', 'Six questions on greetings, introductions and numbers.', '六道题，考查问候、自我介绍与数字。'),
      lessons: [
        {
          id: 'les_a1pm_q',
          moduleId: 'mod_a1pm_q',
          kind: 'quiz',
          durationMin: 6,
          quizId: 'qz_a1_premiers_mots',
          title: t('Quiz — Premiers mots', 'Quiz — First words', '测验 — 最初的词语'),
          summary: t('6 questions sur les formules de base.', '6 questions on the basic phrases.', '6 道题，考查基础用语。'),
        },
      ],
    },
  ],
};
