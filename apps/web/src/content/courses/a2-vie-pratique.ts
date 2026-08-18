import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_a2_pratique';

export const a2PratiqueCourse: Course = {
  id: ID,
  slug: 'a2-vie-pratique',
  level: 'A2',
  accentFrom: '#67e8f9',
  accentTo: '#0891b2',
  status: 'published',
  title: t('Se débrouiller au quotidien', 'Getting by day to day', '应对日常事务'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Faire ses courses, commander au restaurant, prendre un train, prendre rendez-vous. Les phrases exactes qu’on emploie, et celles qu’on entend en retour.',
    'Doing your shopping, ordering in a restaurant, catching a train, making an appointment. The exact phrases you use, and the ones you hear back.',
    '购物、点餐、乘火车、预约。你要说的原话，以及你会听到的回应。',
  ),
  tags: [t('Vie quotidienne', 'Everyday life', '日常生活'), t('Oral', 'Speaking', '口语')],
  modules: [
    {
      id: 'mod_a2pr_1',
      courseId: ID,
      title: t('Dans la vraie vie', 'In real life', '真实场景'),
      summary: t(
        'Les commerces, la table, les transports et les rendez-vous.',
        'Shops, the table, transport and appointments.',
        '商店、餐桌、交通与预约。',
      ),
      lessons: [
        {
          id: 'les_a2pr_1',
          moduleId: 'mod_a2pr_1',
          kind: 'text',
          durationMin: 11,
          title: t('Faire ses courses', 'Doing your shopping', '购物'),
          summary: t(
            'Demander, choisir la quantité, payer — et comprendre ce qu’on vous répond.',
            'Asking, choosing the quantity, paying — and understanding the answer.',
            '询问、选择数量、付款——并听懂对方的回答。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🛒',
              text: t(
                'Un achat suit toujours le même scénario, et il est court. Si vous connaissez les quatre répliques ci-dessous, vous pouvez acheter à peu près n’importe quoi, {prenom}.',
                'A purchase always follows the same short script. If you know the four lines below, you can buy just about anything, {prenom}.',
                '购物的流程总是一样，而且很短。{prenom}，掌握下面四句话，你几乎什么都能买。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎬',
              title: t('Le déroulé d’un achat', 'How a purchase unfolds', '一次购物的流程'),
              hint: t(
                'Remettez l’échange dans l’ordre, {prenom}.',
                'Put the exchange back in order, {prenom}.',
                '{prenom}，把对话顺序排好。',
              ),
              widget: {
                kind: 'order',
                prompt: t(
                  'Chez le boulanger, du bonjour au merci :',
                  'At the baker’s, from hello to thank you:',
                  '在面包店，从问好到道谢：',
                ),
                items: [
                  { id: 'a1', text: t('— Bonjour !  — Bonjour, madame.', '— Bonjour !  — Bonjour, madame.', '— Bonjour !  — Bonjour, madame.') },
                  { id: 'a2', text: t('— Je voudrais une baguette, s’il vous plaît.', '— Je voudrais une baguette, s’il vous plaît.', '— Je voudrais une baguette, s’il vous plaît.') },
                  { id: 'a3', text: t('— Et avec ceci ?  — Ce sera tout, merci.', '— Et avec ceci ?  — Ce sera tout, merci.', '— Et avec ceci ?  — Ce sera tout, merci.') },
                  { id: 'a4', text: t('— Ça fait 1,20 euro.  — Voilà.', '— Ça fait 1,20 euro.  — Voilà.', '— Ça fait 1,20 euro.  — Voilà.') },
                  { id: 'a5', text: t('— Merci, bonne journée !  — Vous aussi, au revoir.', '— Merci, bonne journée !  — Vous aussi, au revoir.', '— Merci, bonne journée !  — Vous aussi, au revoir.') },
                ],
                successNote: t(
                  '« Et avec ceci ? » veut dire « autre chose ? ». C’est la question la plus fréquente d’un commerçant français — et elle surprend toujours au début.',
                  '“Et avec ceci ?” means “anything else?”. It is the most frequent question from a French shopkeeper — and it always surprises at first.',
                  '“Et avec ceci ?” 的意思是“还要别的吗？”。这是法国店员最常问的一句——初次听到总会一愣。',
                ),
              },
            },
            {
              type: 'keyvalues',
              emoji: '⚖️',
              title: t('Demander une quantité', 'Asking for a quantity', '说明数量'),
              entries: [
                { label: t('Un poids', 'A weight', '重量'), value: t('« Cinq cents grammes de fromage » ou, plus courant, « une livre » — cinq cents grammes exactement.', '“Cinq cents grammes de fromage” or, more commonly, “une livre” — exactly five hundred grams.', '“Cinq cents grammes de fromage”，更常说 “une livre”——正好五百克。') },
                { label: t('Un nombre', 'A number', '数量'), value: t('« Trois pommes, s’il vous plaît. » Simple, et toujours suivi de « s’il vous plaît ».', '“Trois pommes, s’il vous plaît.” Simple, and always followed by “s’il vous plaît”.', '“Trois pommes, s’il vous plaît.” 很简单，而且总要加 “s’il vous plaît”。') },
                { label: t('Un contenant', 'A container', '容器'), value: t('« Une bouteille d’eau », « un pot de confiture », « une boîte de conserve ».', '“Une bouteille d’eau”, “un pot de confiture”, “une boîte de conserve”.', '“Une bouteille d’eau”“un pot de confiture”“une boîte de conserve”。') },
                { label: t('Approximatif', 'Approximate', '大约'), value: t('« Une dizaine d’œufs » : environ dix. Les mots en -aine disent « à peu près ».', '“Une dizaine d’œufs”: about ten. Words in -aine mean “roughly”.', '“Une dizaine d’œufs”：大约十个。以 -aine 结尾的词表示“大概”。') },
                { label: t('Le prix', 'The price', '价格'), value: t('« Ça fait combien ? » ou « C’est combien ? ». On répond « Ça fait douze euros cinquante ».', '“Ça fait combien ?” or “C’est combien ?”. The answer is “Ça fait douze euros cinquante”.', '“Ça fait combien ?” 或 “C’est combien ?”。回答是 “Ça fait douze euros cinquante”。') },
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('« Je veux » passe mal', '“Je veux” lands badly', '“Je veux” 听着不客气'),
              text: t(
                'Grammaticalement, « je veux une baguette » est correct. Socialement, c’est sec, presque impoli. On dit **je voudrais** — la forme au conditionnel — ou **je vais prendre**. La différence est petite à l’écrit, énorme à l’oreille.',
                'Grammatically, “je veux une baguette” is correct. Socially it is blunt, almost rude. Say **je voudrais** — the conditional — or **je vais prendre**. A small difference in writing, a huge one to the ear.',
                '从语法看，“je veux une baguette” 没错。但从社交看，它生硬，近乎失礼。应说 **je voudrais**（条件式）或 **je vais prendre**。书面差别很小，听感差别极大。',
              ),
            },
          ],
        },
        {
          id: 'les_a2pr_2',
          moduleId: 'mod_a2pr_1',
          kind: 'text',
          durationMin: 11,
          title: t('Au restaurant', 'At the restaurant', '在餐厅'),
          summary: t(
            'Réserver, commander, demander l’addition. Et lire une carte sans se tromper.',
            'Booking, ordering, asking for the bill. And reading a menu without slipping up.',
            '订位、点餐、结账，以及正确读懂菜单。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🍽️',
              text: t(
                'Un repas au restaurant suit un ordre fixe, et le vocabulaire de la carte réserve deux ou trois pièges qu’il vaut mieux connaître avant de commander.',
                'A restaurant meal follows a set order, and the menu vocabulary hides two or three traps worth knowing before you order.',
                '餐厅用餐有固定顺序，而菜单词汇藏着两三个陷阱，最好在点餐前就知道。',
              ),
            },
            {
              type: 'callout',
              tone: 'danger',
              emoji: '🪤',
              title: t('Le faux ami le plus coûteux : « la carte »', 'The costliest false friend: “la carte”', '代价最高的假朋友：“la carte”'),
              text: t(
                '**La carte** est la liste de tous les plats. **Le menu** est une formule à prix fixe : entrée, plat, dessert. Demander « le menu » quand on voulait la liste complète est l’erreur la plus fréquente des visiteurs anglophones.',
                '**La carte** is the list of all dishes. **Le menu** is a fixed-price set: starter, main, dessert. Asking for “le menu” when you wanted the full list is the most common mistake English-speaking visitors make.',
                '**La carte** 是全部菜品的清单。**Le menu** 是固定价格的套餐：前菜、主菜、甜点。想看全部菜品却说 “le menu”，是英语国家访客最常犯的错误。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🕐',
              title: t('Le déroulé d’un repas', 'How a meal unfolds', '一顿饭的流程'),
              hint: t(
                'Chaque moment a sa phrase. Cliquez pour la voir.',
                'Each moment has its phrase. Click to see it.',
                '每个环节都有对应的说法。点击查看。',
              ),
              widget: {
                kind: 'timeline',
                points: [
                  {
                    id: 'arrivee',
                    label: t('À l’arrivée', 'On arrival', '到店时'),
                    headline: t('Réserver ou demander une table', 'Booking or asking for a table', '订位或要一张桌子'),
                    example: 'Bonjour, une table pour deux, s’il vous plaît.',
                    gloss: t('Sans réservation, on attend qu’on vous place : on ne choisit pas sa table soi-même.', 'Without a booking, you wait to be seated: you do not pick your own table.', '没有预订就等待安排：不能自己挑桌子。'),
                  },
                  {
                    id: 'commande',
                    label: t('La commande', 'Ordering', '点餐'),
                    headline: t('Je vais prendre…', 'Je vais prendre…', 'Je vais prendre……'),
                    example: 'Je vais prendre le menu à vingt-deux euros.',
                    gloss: t('« Je vais prendre » est la formule la plus naturelle. « Pour moi, ce sera… » fonctionne aussi.', '“Je vais prendre” is the most natural formula. “Pour moi, ce sera…” also works.', '“Je vais prendre” 最自然。“Pour moi, ce sera…” 也可以。'),
                  },
                  {
                    id: 'pendant',
                    label: t('Pendant le repas', 'During the meal', '用餐中'),
                    headline: t('Une carafe d’eau, s’il vous plaît', 'A jug of tap water, please', '请给一壶自来水'),
                    example: 'Une carafe d’eau, s’il vous plaît.',
                    gloss: t('L’eau du robinet est gratuite et se demande ainsi. Si vous dites « de l’eau », on vous apportera une bouteille payante.', 'Tap water is free and is asked for this way. If you say “de l’eau”, you will get a bottle you pay for.', '自来水免费，就这样要。若只说 “de l’eau”，端来的会是收费瓶装水。'),
                  },
                  {
                    id: 'fin',
                    label: t('À la fin', 'At the end', '结束时'),
                    headline: t('L’addition, s’il vous plaît', 'The bill, please', '请结账'),
                    example: 'L’addition, s’il vous plaît.',
                    gloss: t('On la demande : elle n’arrive jamais spontanément. Un serveur qui l’apporterait sans qu’on la réclame semblerait pressé de vous voir partir.', 'You ask for it: it never comes on its own. A waiter bringing it unasked would seem eager to see you go.', '要主动索要：账单不会自己送来。若服务员未经请求就送上，会显得急着送客。'),
                  },
                ],
              },
            },
            {
              type: 'interactive',
              emoji: '🔗',
              title: t('Lire une carte', 'Reading a menu', '读懂菜单'),
              hint: t(
                'Reliez chaque mot de la carte à ce qu’il désigne vraiment.',
                'Match each menu word to what it actually means.',
                '把菜单上的每个词与其真实含义配对。',
              ),
              widget: {
                kind: 'pairs',
                prompt: t('Les mots de la carte :', 'Menu words:', '菜单词汇：'),
                pairs: [
                  { id: 'r1', left: 'une entrée', right: t('le premier plat, avant le plat principal — pas l’entrée du bâtiment', 'the first course, before the main — not the way in', '第一道菜，在主菜之前——不是“入口”') },
                  { id: 'r2', left: 'le plat', right: t('le plat principal, le cœur du repas', 'the main course, the heart of the meal', '主菜，一餐的核心') },
                  { id: 'r3', left: 'la formule', right: t('un choix limité à prix fixe, souvent au déjeuner', 'a limited fixed-price choice, often at lunch', '价格固定的有限选择，多见于午餐') },
                  { id: 'r4', left: 'saignant', right: t('une cuisson de viande peu cuite, rouge à cœur', 'a rare cooking, red in the middle', '一分熟，中心带血色') },
                  { id: 'r5', left: 'à point', right: t('la cuisson intermédiaire, rosée', 'medium cooking, pink', '中等熟度，粉红色') },
                  { id: 'r6', left: 'compris', right: t('inclus dans le prix — « service compris » veut dire que le pourboire n’est pas obligatoire', 'included in the price — “service compris” means a tip is not required', '已含在价格中——“service compris” 表示不必另付小费') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '💶',
              title: t('Le pourboire, en France', 'Tipping in France', '在法国给小费'),
              text: t(
                'Le service est **compris** dans le prix, par la loi. Laisser un pourboire reste possible mais n’est jamais attendu : une pièce ou deux si le repas vous a plu, rien du tout sinon. Personne ne s’en formalisera.',
                'Service is **included** in the price by law. Leaving a tip is possible but never expected: a coin or two if you enjoyed the meal, nothing otherwise. No one will take offence.',
                '按法律规定，服务费**已含**在价格中。可以给小费，但从不被期待：吃得满意就留一两枚硬币，否则不给也行。没人会介意。',
              ),
            },
          ],
        },
        {
          id: 'les_a2pr_3',
          moduleId: 'mod_a2pr_1',
          kind: 'text',
          durationMin: 11,
          title: t('Transports et rendez-vous', 'Transport and appointments', '交通与预约'),
          summary: t(
            'Acheter un billet, demander son chemin, fixer une heure au téléphone.',
            'Buying a ticket, asking the way, agreeing a time on the phone.',
            '买票、问路、在电话里约定时间。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🚆',
              text: t(
                'Trois situations très codées, où les mêmes phrases reviennent toujours. Les apprendre par cœur fait gagner un temps considérable.',
                'Three highly scripted situations where the same phrases always come back. Learning them by heart saves a great deal of time.',
                '三种高度程式化的场景，反复出现的都是同样的句子。背下来能省下大量时间。',
              ),
            },
            {
              type: 'examples',
              emoji: '🎫',
              title: t('Au guichet', 'At the ticket counter', '在售票窗口'),
              items: [
                { fr: 'Un aller simple pour Marseille, s’il vous plaît.', gloss: t('« Aller simple » = un seul trajet. « Aller-retour » pour les deux sens.', '“Aller simple” = one way. “Aller-retour” for both directions.', '“Aller simple” 是单程。往返用 “aller-retour”。') },
                { fr: 'Le prochain train part à quelle heure ?', gloss: t('Question très fréquente. On peut aussi dire : « Il y a un train vers midi ? »', 'A very frequent question. You can also say: “Il y a un train vers midi ?”', '非常常用的问句。也可以说：“Il y a un train vers midi ?”') },
                { fr: 'Il faut composter le billet avant de monter.', gloss: t('Sur certains trains régionaux, on valide son billet dans une borne sur le quai. L’oublier coûte une amende.', 'On some regional trains you validate your ticket at a machine on the platform. Forgetting costs a fine.', '某些地区列车需在站台机器上验票。忘记会被罚款。') },
                { fr: 'Je voudrais un ticket pour Marseille.', gloss: t('« Ticket » vaut pour le métro et le bus ; pour le train, on dit « un billet ».', '“Ticket” is for the metro and the bus; for the train you say “un billet”.', '“Ticket” 用于地铁和公交；火车票说 “un billet”。'), incorrect: true },
              ],
            },
            {
              type: 'interactive',
              emoji: '🧭',
              title: t('Demander son chemin', 'Asking the way', '问路'),
              hint: t(
                'Complétez ce qu’on vous répondra.',
                'Complete what you will be told.',
                '补全你会听到的回答。',
              ),
              widget: {
                kind: 'fill',
                prompt: t('Les indications qu’on entend le plus :', 'The directions you hear most:', '最常听到的指路说法：'),
                items: [
                  {
                    id: 'd1',
                    before: 'Continuez ',
                    after: ' jusqu’au feu.',
                    options: ['tout droit', 'à droite', 'droite'],
                    answer: 'tout droit',
                    why: t('« Tout droit » veut dire « straight on ». Ne pas confondre avec « à droite », qui veut dire « to the right ».', '“Tout droit” means “straight on”. Do not confuse it with “à droite”, which means “to the right”.', '“Tout droit” 意为“一直往前”。不要与意为“向右”的 “à droite” 混淆。'),
                  },
                  {
                    id: 'd2',
                    before: 'C’est ',
                    after: ' la boulangerie, vous ne pouvez pas le manquer.',
                    options: ['en face de', 'en face', 'devant de'],
                    answer: 'en face de',
                    why: t('« En face de » demande toujours « de » devant le lieu. Seul « en face » sans complément est possible.', '“En face de” always needs “de” before the place. “En face” alone works only with no complement.', '“En face de” 后面必须接 “de” 再接地点。只有不带补语时才能单说 “en face”。'),
                  },
                  {
                    id: 'd3',
                    before: 'Prenez la deuxième rue ',
                    after: ' droite.',
                    options: ['à', 'sur', 'dans'],
                    answer: 'à',
                    why: t('On dit toujours « à droite » et « à gauche », jamais « sur la droite » dans une indication de chemin.', 'You always say “à droite” and “à gauche”, never “sur la droite” when giving directions.', '指路时一律说 “à droite” 和 “à gauche”，绝不说 “sur la droite”。'),
                  },
                  {
                    id: 'd4',
                    before: 'C’est ',
                    after: ' cinq minutes à pied.',
                    options: ['à', 'dans', 'en'],
                    answer: 'à',
                    why: t('« À cinq minutes » indique une distance. « En cinq minutes » indiquerait le temps mis pour la parcourir.', '“À cinq minutes” gives a distance. “En cinq minutes” would give the time it takes.', '“À cinq minutes” 表示距离。“En cinq minutes” 则表示所需时间。'),
                  },
                ],
              },
            },
            {
              type: 'keyvalues',
              emoji: '📞',
              title: t('Prendre rendez-vous au téléphone', 'Making an appointment by phone', '电话预约'),
              entries: [
                { label: t('Ouvrir', 'Opening', '开场'), value: t('« Bonjour, je voudrais prendre rendez-vous, s’il vous plaît. » On donne son nom ensuite, pas avant.', '“Bonjour, je voudrais prendre rendez-vous, s’il vous plaît.” You give your name after, not before.', '“Bonjour, je voudrais prendre rendez-vous, s’il vous plaît.” 之后再报姓名，不要一开口就说。') },
                { label: t('Proposer', 'Suggesting', '提出时间'), value: t('« Est-ce que vous auriez quelque chose jeudi matin ? » Le conditionnel adoucit la demande.', '“Est-ce que vous auriez quelque chose jeudi matin ?” The conditional softens the request.', '“Est-ce que vous auriez quelque chose jeudi matin ?” 条件式让请求更委婉。') },
                { label: t('Accepter', 'Accepting', '接受'), value: t('« Très bien, c’est parfait. » ou « Ça me convient tout à fait. »', '“Très bien, c’est parfait.” or “Ça me convient tout à fait.”', '“Très bien, c’est parfait.” 或 “Ça me convient tout à fait.”') },
                { label: t('Refuser poliment', 'Politely declining', '婉拒'), value: t('« Ce serait possible un peu plus tard ? Je ne suis pas libre avant onze heures. »', '“Ce serait possible un peu plus tard ? Je ne suis pas libre avant onze heures.”', '“Ce serait possible un peu plus tard ? Je ne suis pas libre avant onze heures.”') },
                { label: t('Confirmer', 'Confirming', '确认'), value: t('« Donc jeudi 12 à dix heures. Je vous remercie, au revoir. » On répète toujours la date : c’est ce qui évite les malentendus.', '“Donc jeudi 12 à dix heures. Je vous remercie, au revoir.” Always repeat the date: that is what prevents misunderstandings.', '“Donc jeudi 12 à dix heures. Je vous remercie, au revoir.” 一定要重复日期：这样才不会弄错。') },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mod_a2pr_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur les commerces, le restaurant et les transports.', 'Six questions on shops, restaurants and transport.', '六道题，考查购物、餐厅与交通。'),
      lessons: [
        {
          id: 'les_a2pr_q',
          moduleId: 'mod_a2pr_q',
          kind: 'quiz',
          durationMin: 7,
          quizId: 'qz_a2_pratique',
          title: t('Quiz — Se débrouiller', 'Quiz — Getting by', '测验 — 应对日常'),
          summary: t('6 questions sur les situations du quotidien.', '6 questions on everyday situations.', '6 道题，考查日常场景。'),
        },
      ],
    },
  ],
};
