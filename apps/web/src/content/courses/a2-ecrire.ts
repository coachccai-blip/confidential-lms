import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_a2_ecrire';

export const a2EcrireCourse: Course = {
  id: ID,
  slug: 'a2-ecrire',
  level: 'A2',
  accentFrom: '#67e8f9',
  accentTo: '#0891b2',
  status: 'published',
  title: t('Écrire au quotidien', 'Everyday writing', '日常书写'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Un message, une carte postale, une lettre. Où placer chaque chose sur la page, dans quel ordre l’écrire, et comment finir sans se tromper de ton.',
    'A message, a postcard, a letter. Where to put each part on the page, in what order to write it, and how to end without getting the tone wrong.',
    '短信、明信片、书信。每一部分写在纸上的哪个位置、按什么顺序写，以及如何用对语气收尾。',
  ),
  tags: [t('Écrit', 'Writing', '写作'), t('Vie quotidienne', 'Everyday life', '日常生活')],
  modules: [
    {
      id: 'mod_a2ec_1',
      courseId: ID,
      title: t('Du message à la lettre', 'From message to letter', '从短信到书信'),
      summary: t(
        'Trois formats, du plus court au plus formel.',
        'Three formats, from the shortest to the most formal.',
        '三种形式，由最短到最正式。',
      ),
      lessons: [
        {
          id: 'les_a2ec_1',
          moduleId: 'mod_a2ec_1',
          kind: 'text',
          durationMin: 10,
          title: t('Le message et la carte postale', 'The message and the postcard', '短信与明信片'),
          summary: t(
            'Écrire court sans être sec : les formules qui suffisent.',
            'Writing short without sounding curt: the phrases that are enough.',
            '写得短而不生硬：够用的那些说法。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '💬',
              text: t(
                'Plus le message est court, plus le ton compte. En deux lignes, on n’a pas la place d’expliquer : ce sont les formules d’ouverture et de fin qui portent toute la politesse.',
                'The shorter the message, the more the tone matters. In two lines there is no room to explain: the opening and closing phrases carry all the politeness.',
                '信息越短，语气越重要。两行字里没有余地解释：全部的礼貌都由开头和结尾承担。',
              ),
            },
            {
              type: 'table',
              emoji: '📊',
              caption: t('Trois niveaux, trois façons d’ouvrir', 'Three levels, three ways to open', '三种层级，三种开头'),
              headers: [t('À qui', 'To whom', '写给谁'), t('Ouverture', 'Opening', '开头'), t('Fin', 'Ending', '结尾')],
              rows: [
                [t('Un ami', 'A friend', '朋友'), t('Salut Marc ! / Coucou !', 'Salut Marc ! / Coucou !', 'Salut Marc ! / Coucou !'), t('Bises / À bientôt / Bisous', 'Bises / À bientôt / Bisous', 'Bises / À bientôt / Bisous')],
                [t('Un collègue', 'A colleague', '同事'), t('Bonjour Sophie,', 'Bonjour Sophie,', 'Bonjour Sophie,'), t('Bonne journée / À demain', 'Bonne journée / À demain', 'Bonne journée / À demain')],
                [t('Quelqu’un qu’on ne connaît pas', 'Someone you do not know', '陌生人'), t('Bonjour,', 'Bonjour,', 'Bonjour,'), t('Cordialement', 'Cordialement', 'Cordialement')],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('« Bises » ne s’écrit pas à tout le monde', '“Bises” is not for everyone', '“Bises” 不是对谁都能写'),
              text: t(
                '« Bises » ou « bisous » se réservent aux proches — famille, amis. Envoyé à un collègue qu’on connaît peu, c’est très embarrassant. En cas de doute, **Bonne journée** convient partout.',
                '“Bises” and “bisous” are for close people — family, friends. Sent to a colleague you barely know, it is deeply awkward. When in doubt, **Bonne journée** works everywhere.',
                '“Bises” 或 “bisous” 只用于亲近的人——家人、朋友。发给不太熟的同事会非常尴尬。拿不准时，**Bonne journée** 到处都合适。',
              ),
            },
            {
              type: 'interactive',
              emoji: '📮',
              title: t('Une carte postale, zone par zone', 'A postcard, area by area', '明信片的各个区域'),
              hint: t(
                'Cliquez chaque zone, ou lancez « Voir dans l’ordre » pour suivre la rédaction.',
                'Click each area, or press “Watch the order” to follow the writing.',
                '点击各区域，或按“按顺序演示”跟随书写过程。',
              ),
              widget: {
                kind: 'layout',
                ratio: 1.45,
                zones: [
                  {
                    id: 'c1',
                    label: t('La date et le lieu', 'Date and place', '日期与地点'),
                    x: 5, y: 6, w: 42, h: 12,
                    sample: 'Nice, le 14 juillet',
                    detail: t('En haut à gauche : la ville, une virgule, puis « le » et la date. C’est l’usage sur une carte comme sur une lettre.', 'Top left: the town, a comma, then “le” and the date. This is the convention on cards as on letters.', '左上角：城市、逗号，然后是 “le” 和日期。明信片与书信都是这样。'),
                  },
                  {
                    id: 'c2',
                    label: t('L’appel', 'The greeting', '称呼'),
                    x: 5, y: 22, w: 42, h: 10,
                    sample: 'Chère Camille,',
                    detail: t('« Cher » au masculin, « Chère » au féminin. Toujours suivi d’une virgule, et on passe à la ligne ensuite.', '“Cher” for a man, “Chère” for a woman. Always followed by a comma, then a new line.', '男性用 “Cher”，女性用 “Chère”。后面永远跟逗号，然后换行。'),
                  },
                  {
                    id: 'c3',
                    label: t('Le corps', 'The body', '正文'),
                    x: 5, y: 35, w: 42, h: 42,
                    sample: 'Je passe une semaine formidable ici. Le temps est superbe et la mer est à dix minutes à pied. Je pense bien à toi.',
                    detail: t('Trois phrases suffisent : où je suis, ce que je fais, ce que j’en pense. Sur une carte, on écrit au présent.', 'Three sentences are enough: where I am, what I am doing, what I think of it. On a card you write in the present.', '三句话就够：我在哪里、在做什么、感觉如何。明信片用现在时。'),
                  },
                  {
                    id: 'c4',
                    label: t('La formule de fin', 'The closing phrase', '结尾语'),
                    x: 5, y: 79, w: 42, h: 9,
                    sample: 'Je t’embrasse,',
                    detail: t('Entre proches : « Je t’embrasse », « Bises », « À très vite ». Toujours suivi d’une virgule.', 'Between close people: “Je t’embrasse”, “Bises”, “À très vite”. Always followed by a comma.', '亲近的人之间：“Je t’embrasse”“Bises”“À très vite”。后面永远跟逗号。'),
                  },
                  {
                    id: 'c5',
                    label: t('La signature', 'The signature', '署名'),
                    x: 5, y: 89, w: 42, h: 8,
                    sample: '{prenom}',
                    detail: t('Le prénom seul suffit entre proches. Sur une lettre formelle, on écrit prénom et nom.', 'The first name alone is enough between close people. On a formal letter you write first name and surname.', '亲近的人之间只写名字即可。正式书信要写名和姓。'),
                  },
                  {
                    id: 'c6',
                    label: t('Le timbre', 'The stamp', '邮票'),
                    x: 78, y: 5, w: 17, h: 18,
                    sample: '🇫🇷',
                    detail: t('En haut à droite, toujours. C’est aussi vrai pour une enveloppe.', 'Top right, always. The same goes for an envelope.', '永远在右上角。信封也是如此。'),
                  },
                  {
                    id: 'c7',
                    label: t('L’adresse du destinataire', 'The recipient’s address', '收信人地址'),
                    x: 54, y: 42, w: 42, h: 34,
                    sample: 'Camille Rousseau\n12 rue des Lilas\n75011 Paris',
                    detail: t('À droite, en bas. Le code postal se met **avant** la ville, sur la même ligne. Cinq chiffres, sans espace.', 'On the right, low down. The postcode goes **before** the town, on the same line. Five digits, no space.', '在右侧偏下。邮政编码在城市名**之前**，同一行。五位数字，中间不空格。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_a2ec_2',
          moduleId: 'mod_a2ec_1',
          kind: 'text',
          durationMin: 12,
          title: t('La lettre sur une feuille A4', 'A letter on an A4 sheet', 'A4 纸上的书信'),
          summary: t(
            'Où va chaque élément sur la page, et dans quel ordre on les écrit.',
            'Where each element goes on the page, and in what order you write them.',
            '每个部分在纸上的位置，以及书写的顺序。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '📄',
              text: t(
                'La lettre française a une mise en page fixe, et un correcteur d’examen la vérifie avant même de lire le texte. La bonne nouvelle : une fois apprise, elle ne change plus jamais.',
                'The French letter has a fixed layout, and an exam marker checks it before even reading the text. The good news: once learned, it never changes.',
                '法语书信有固定的版式，阅卷人甚至在读内容之前就会先检查它。好消息是：学会之后就一劳永逸。',
              ),
            },
            {
              type: 'interactive',
              emoji: '✉️',
              title: t('La feuille A4, zone par zone', 'The A4 sheet, area by area', 'A4 纸的各个区域'),
              hint: t(
                'Lancez « Voir dans l’ordre », {prenom} : les zones s’allument dans l’ordre où on les écrit.',
                'Press “Watch the order”, {prenom}: the areas light up in the order you write them.',
                '{prenom}，点击“按顺序演示”：各区域会按书写顺序依次亮起。',
              ),
              widget: {
                kind: 'layout',
                ratio: 0.707,
                zones: [
                  {
                    id: 'l1',
                    label: t('Vos coordonnées', 'Your details', '你的信息'),
                    x: 7, y: 4, w: 40, h: 13,
                    sample: '{prenom} Martin\n8 rue de la Paix\n69001 Lyon',
                    detail: t('En haut à **gauche** : votre nom, votre adresse. C’est l’expéditeur, donc c’est vous. Trois lignes suffisent.', 'Top **left**: your name, your address. This is the sender, so it is you. Three lines are enough.', '**左**上角：你的姓名和地址。这是寄信人，也就是你。三行就够。'),
                  },
                  {
                    id: 'l2',
                    label: t('Les coordonnées du destinataire', 'The recipient’s details', '收信人信息'),
                    x: 53, y: 19, w: 40, h: 13,
                    sample: 'Madame la Directrice\nÉcole Jules Ferry\n69003 Lyon',
                    detail: t('En haut à **droite**, un peu plus bas que les vôtres. C’est ce décalage qui distingue immédiatement une lettre bien mise en page.', 'Top **right**, slightly lower than yours. That offset is what immediately marks a well-laid-out letter.', '**右**上角，比你的信息略低。正是这个错落让一封版式规范的信一眼可辨。'),
                  },
                  {
                    id: 'l3',
                    label: t('Le lieu et la date', 'Place and date', '地点与日期'),
                    x: 53, y: 34, w: 40, h: 7,
                    sample: 'Lyon, le 3 mars 2026',
                    detail: t('À droite, sous l’adresse du destinataire. La ville, une virgule, « le », puis la date. Pas de majuscule au mois.', 'On the right, under the recipient’s address. The town, a comma, “le”, then the date. No capital on the month.', '在右侧，收信人地址下方。城市、逗号、“le”，然后是日期。月份不大写。'),
                  },
                  {
                    id: 'l4',
                    label: t('L’objet', 'The subject line', '事由'),
                    x: 7, y: 44, w: 55, h: 7,
                    sample: 'Objet : demande d’inscription',
                    detail: t('À gauche, souligné ou en gras. Une ligne, pas plus : le lecteur doit savoir de quoi il s’agit avant de lire.', 'On the left, underlined or in bold. One line, no more: the reader must know what it is about before reading.', '在左侧，加下划线或加粗。只写一行：读者在读正文前就该知道所为何事。'),
                  },
                  {
                    id: 'l5',
                    label: t('L’appel', 'The greeting', '称呼'),
                    x: 7, y: 53, w: 40, h: 6,
                    sample: 'Madame la Directrice,',
                    detail: t('Sans « Cher » dans une lettre officielle. On reprend le titre exact de la personne, suivi d’une virgule.', 'No “Cher” in an official letter. You repeat the person’s exact title, followed by a comma.', '正式信函中不用 “Cher”。原样重复对方的头衔，后跟逗号。'),
                  },
                  {
                    id: 'l6',
                    label: t('Le corps', 'The body', '正文'),
                    x: 7, y: 61, w: 86, h: 22,
                    sample: 'Je vous écris afin d’inscrire ma fille à la rentrée de septembre.\n\nElle est actuellement en CE2 à l’école Voltaire. Vous trouverez ci-joint son dossier scolaire.',
                    detail: t('Un paragraphe par idée, une ligne vide entre eux. On commence par **pourquoi on écrit**, puis on donne les détails.', 'One paragraph per idea, a blank line between them. Start with **why you are writing**, then give the details.', '一个想法一段，段间空一行。先说明**写信的原因**，再给出细节。'),
                  },
                  {
                    id: 'l7',
                    label: t('La formule de politesse', 'The closing formula', '致意套语'),
                    x: 7, y: 85, w: 86, h: 8,
                    sample: 'Je vous prie d’agréer, Madame la Directrice, l’expression de mes salutations distinguées.',
                    detail: t('La règle d’or : elle doit **reprendre exactement** l’appel écrit plus haut. Si vous avez écrit « Madame la Directrice », vous le réécrivez ici, mot pour mot.', 'The golden rule: it must **repeat exactly** the greeting written above. If you wrote “Madame la Directrice”, you write it again here, word for word.', '黄金法则：必须**原样重复**上面的称呼。若你写的是 “Madame la Directrice”，这里就要一字不差地再写一遍。'),
                  },
                  {
                    id: 'l8',
                    label: t('La signature', 'The signature', '签名'),
                    x: 60, y: 94, w: 33, h: 5,
                    sample: '{prenom} Martin',
                    detail: t('En bas à **droite**, sous la formule de politesse. Prénom puis nom, à la main sur une lettre papier.', 'Bottom **right**, under the closing formula. First name then surname, handwritten on a paper letter.', '**右**下角，在致意套语下方。先名后姓；纸质信件需手写。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '💡',
              title: t('Le repère facile : moi à gauche, l’autre à droite', 'An easy landmark: me on the left, them on the right', '好记的口诀：我在左，对方在右'),
              text: t(
                'Vos coordonnées à gauche, celles du destinataire à droite et plus bas, la date encore en dessous. Ce seul repère suffit à placer les trois quarts de la page.',
                'Your details on the left, the recipient’s on the right and lower, the date lower still. That single landmark places three quarters of the page.',
                '你的信息在左，收信人的在右且更低，日期还要再低一些。仅凭这一条口诀就能定好四分之三的版面。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔢',
              title: t('Dans quel ordre écrit-on ?', 'In what order do you write?', '书写顺序是什么？'),
              hint: t(
                'Remettez les huit éléments dans l’ordre de rédaction.',
                'Put the eight elements back in writing order.',
                '把八个部分按书写顺序排好。',
              ),
              widget: {
                kind: 'order',
                prompt: t(
                  'De la première ligne à la signature :',
                  'From the first line to the signature:',
                  '从第一行到签名：',
                ),
                items: [
                  { id: 'w1', text: t('Vos coordonnées, en haut à gauche', 'Your details, top left', '你的信息，左上角') },
                  { id: 'w2', text: t('Les coordonnées du destinataire, à droite', 'The recipient’s details, on the right', '收信人信息，右侧') },
                  { id: 'w3', text: t('Le lieu et la date', 'Place and date', '地点与日期') },
                  { id: 'w4', text: t('L’objet de la lettre', 'The subject line', '信件事由') },
                  { id: 'w5', text: t('L’appel : « Madame, », « Monsieur, »', 'The greeting: “Madame,”, “Monsieur,”', '称呼：“Madame,”“Monsieur,”') },
                  { id: 'w6', text: t('Le corps de la lettre', 'The body of the letter', '信件正文') },
                  { id: 'w7', text: t('La formule de politesse', 'The closing formula', '致意套语') },
                  { id: 'w8', text: t('La signature', 'The signature', '签名') },
                ],
                successNote: t(
                  'C’est exactement cet ordre que vérifie un correcteur du DELF, avant même de lire ce que vous avez écrit.',
                  'This is exactly the order a DELF marker checks, before even reading what you wrote.',
                  'DELF 阅卷人正是按这个顺序检查，甚至在读你写的内容之前。',
                ),
              },
            },
          ],
        },
        {
          id: 'les_a2ec_3',
          moduleId: 'mod_a2ec_1',
          kind: 'text',
          durationMin: 10,
          title: t('Remplir un formulaire', 'Filling in a form', '填写表格'),
          summary: t(
            'Les mots des documents administratifs, et ceux qui piègent tout le monde.',
            'The words on official documents, and the ones that catch everyone out.',
            '行政文件上的词汇，以及人人都会踩的坑。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '📋',
              text: t(
                'Un formulaire français emploie toujours les mêmes étiquettes. Deux d’entre elles trompent presque tous les débutants, et une erreur peut coûter un dossier refusé.',
                'A French form always uses the same labels. Two of them fool almost every beginner, and a mistake can get a file rejected.',
                '法国表格总是使用同样的字段。其中两个几乎骗过所有初学者，填错可能导致材料被退回。',
              ),
            },
            {
              type: 'callout',
              tone: 'danger',
              emoji: '🚨',
              title: t('NOM n’est pas votre nom complet', 'NOM is not your full name', 'NOM 不是你的全名'),
              text: t(
                'Sur un formulaire, **NOM** en majuscules désigne le nom de famille, et **Prénom** le prénom. Écrire son prénom dans la case NOM inverse votre identité dans tout le dossier. Deuxième piège : **Née** demande le nom de jeune fille, pas la date.',
                'On a form, **NOM** in capitals means the surname, and **Prénom** the first name. Writing your first name in the NOM box flips your identity across the whole file. Second trap: **Née** asks for the maiden name, not the date.',
                '在表格上，大写的 **NOM** 指姓氏，**Prénom** 指名字。把名字填进 NOM 栏，会让整份材料的身份颠倒。第二个坑：**Née** 要求填婚前姓氏，而不是日期。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔗',
              title: t('Le vocabulaire des formulaires', 'Form vocabulary', '表格词汇'),
              hint: t(
                'Reliez chaque étiquette à ce qu’elle demande vraiment.',
                'Match each label to what it actually asks for.',
                '把每个字段与其真正要求的内容配对。',
              ),
              widget: {
                kind: 'pairs',
                prompt: t('Ce qu’on vous demande de remplir :', 'What you are asked to fill in:', '需要你填写的内容：'),
                pairs: [
                  { id: 'v1', left: 'NOM', right: t('le nom de famille, en majuscules', 'the surname, in capitals', '姓氏，大写') },
                  { id: 'v2', left: 'Prénom', right: t('le prénom, celui qu’on emploie pour vous appeler', 'the first name, the one people call you by', '名字，别人称呼你时用的那个') },
                  { id: 'v3', left: 'Date de naissance', right: t('le jour, le mois, l’année — dans cet ordre', 'day, month, year — in that order', '日、月、年——按此顺序') },
                  { id: 'v4', left: 'Lieu de naissance', right: t('la ville et le pays où vous êtes né', 'the town and country where you were born', '出生的城市与国家') },
                  { id: 'v5', left: 'Domicile', right: t('l’adresse où vous habitez actuellement', 'the address where you currently live', '你目前居住的地址') },
                  { id: 'v6', left: 'Ci-joint', right: t('les documents ajoutés à l’envoi', 'the documents added to the sending', '随附的文件') },
                ],
              },
            },
            {
              type: 'keyvalues',
              emoji: '🗂️',
              title: t('Les mentions qu’on retrouve partout', 'Wordings you find everywhere', '随处可见的用语'),
              entries: [
                { label: t('Veuillez remplir en majuscules', 'Please fill in capitals', '请用大写填写'), value: t('« Veuillez » est une façon polie de dire « merci de ». On l’ignore rarement sans conséquence.', '“Veuillez” is a polite way of saying “please”. Ignoring it rarely goes unnoticed.', '“Veuillez” 是礼貌的“请”。忽视它通常不会没有后果。') },
                { label: t('Cocher la case', 'Tick the box', '勾选方框'), value: t('« Cochez la case correspondante » : mettre une croix, pas un rond.', '“Cochez la case correspondante”: put a cross, not a circle.', '“Cochez la case correspondante”：打叉，而不是画圈。') },
                { label: t('Rayer la mention inutile', 'Cross out as appropriate', '删去不适用项'), value: t('On barre ce qui ne s’applique pas : « Monsieur / ~~Madame~~ ».', 'You cross out what does not apply: “Monsieur / ~~Madame~~”.', '划掉不适用的选项：“Monsieur / ~~Madame~~”。') },
                { label: t('Lu et approuvé', 'Read and approved', '已阅并同意'), value: t('À recopier à la main avant de signer sur certains contrats. C’est une formalité, mais elle est exigée.', 'To be copied by hand before signing on some contracts. A formality, but a required one.', '某些合同签字前须手抄这句话。虽是形式，却是必需的。') },
                { label: t('Fait à … le …', 'Done at … on …', '于……，日期……'), value: t('« Fait à Lyon, le 3 mars 2026 » : le lieu et la date de signature, juste au-dessus du nom.', '“Fait à Lyon, le 3 mars 2026”: the place and date of signing, just above the name.', '“Fait à Lyon, le 3 mars 2026”：签署的地点与日期，就在姓名上方。') },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mod_a2ec_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur les messages, la lettre et les formulaires.', 'Six questions on messages, letters and forms.', '六道题，考查短信、书信与表格。'),
      lessons: [
        {
          id: 'les_a2ec_q',
          moduleId: 'mod_a2ec_q',
          kind: 'quiz',
          durationMin: 7,
          quizId: 'qz_a2_ecrire',
          title: t('Quiz — Écrire au quotidien', 'Quiz — Everyday writing', '测验 — 日常书写'),
          summary: t('6 questions sur les écrits du quotidien.', '6 questions on everyday writing.', '6 道题，考查日常书面表达。'),
        },
      ],
    },
  ],
};
