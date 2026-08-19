import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_c2_humour';

export const c2HumourCourse: Course = {
  id: ID,
  slug: 'c2-humour',
  level: 'C2',
  accentFrom: '#c4b5fd',
  accentTo: '#1e3a8a',
  status: 'published',
  title: t('L’humour et les jeux de langue', 'Humour and wordplay', '幽默与文字游戏'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'On peut suivre un débat entier et rester de marbre devant la blague qui fait rire toute la table. Ce cours démonte les mécanismes du rire français : calembours, absurde, second degré, et les références que tout le monde partage sans jamais les expliquer.',
    'You can follow a whole debate and stay stone-faced at the joke that cracks up the table. This course takes apart the machinery of French laughter: puns, the absurd, second-degree humour, and the references everyone shares without ever explaining them.',
    '你可以听懂整场辩论，却在满桌大笑的那个笑话前面无表情。这门课拆解法式笑点的机关：双关、荒诞、反话，以及人人共享却从不解释的文化梗。',
  ),
  tags: [t('Culture', 'Culture', '文化'), t('Maîtrise', 'Mastery', '精通')],
  modules: [
    {
      id: 'mod_c2hu_1',
      courseId: ID,
      title: t('Comprendre pourquoi ça rit', 'Understanding why they laugh', '弄懂笑点在哪'),
      summary: t(
        'Les mécanismes, la satire, puis les références partagées.',
        'The mechanisms, the satire, then the shared references.',
        '先机关，再讽刺，最后是共同的文化梗。',
      ),
      lessons: [
        {
          id: 'les_c2hu_1',
          moduleId: 'mod_c2hu_1',
          kind: 'text',
          durationMin: 12,
          title: t('Les mécanismes du rire', 'The machinery of laughter', '笑的机关'),
          summary: t(
            'Calembour, absurde, autodérision : chaque rire a sa mécanique.',
            'Pun, absurdity, self-mockery: every laugh has its mechanism.',
            '双关、荒诞、自嘲：每种笑都有自己的机关。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🎭',
              text: t(
                'L’humour est la dernière compétence linguistique : il exige d’entendre deux sens en même temps, à la vitesse de la conversation. La bonne nouvelle, c’est qu’il se démonte. Quand on connaît les cinq mécanismes, on cesse de rire par politesse — on rit parce qu’on a compris.',
                'Humour is the final language skill: it demands hearing two meanings at once, at conversation speed. The good news is that it can be taken apart. Once you know the five mechanisms, you stop laughing out of politeness — you laugh because you got it.',
                '幽默是语言能力的最后一关：它要求你以对话的速度同时听出两层意思。好消息是，它可以被拆解。掌握了五种机关之后，你就不再是出于礼貌而笑——而是因为真的听懂了。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔗',
              title: t('Cinq mécanismes, cinq exemples', 'Five mechanisms, five examples', '五种机关，五个例子'),
              hint: t('Reliez chaque blague à son ressort.', 'Match each joke to its spring.', '把每个笑话与其发条配对。'),
              widget: {
                kind: 'pairs',
                prompt: t('Qu’est-ce qui fait rire ici ?', 'What makes this funny?', '这里的笑点是什么？'),
                pairs: [
                  { id: 'm1', left: '« Je suis au régime sec. — Ah, plus d’alcool ? — Non, plus de sec. »', right: t('le calembour : un mot, deux sens, et le second arrive en retard', 'the pun: one word, two meanings, and the second lands late', '双关：一个词两个意思，第二层姗姗来迟') },
                  { id: 'm2', left: '« Un poisson rentre dans un bar. Il ressort : c’était un tabac. »', right: t('l’absurde : la logique tient, le monde non', 'the absurd: the logic holds, the world does not', '荒诞：逻辑成立，世界不成立') },
                  { id: 'm3', left: '« Avec mon sens de l’orientation, je me perds dans mon studio. »', right: t('l’autodérision : on rit de soi avant que les autres s’en chargent', 'self-mockery: laughing at yourself before others do it for you', '自嘲：抢在别人之前先笑自己') },
                  { id: 'm4', left: '« Quel temps magnifique », sous une pluie battante.', right: t('le second degré : dire le contraire, en comptant sur l’évidence', 'second-degree humour: saying the opposite, banking on the obvious', '反话：说反义，指望事实不言自明') },
                  { id: 'm5', left: '« C’est celui qui dit qui y est. »', right: t('la répartie d’école : une formule figée, connue de tous depuis l’enfance', 'the playground comeback: a fixed phrase everyone knows from childhood', '校园式回嘴：人人从小就会的固定句式') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🎓',
              title: t('Premier ou second degré : la question à se poser', 'First or second degree: the question to ask', '正话还是反话：该问自己的问题'),
              text: t(
                'Les Français demandent eux-mêmes : « c’est du premier ou du second degré ? ». **Premier degré** : le propos est sérieux, à prendre tel quel. **Second degré** : il dit le contraire de ce qu’il pense, et compte sur vous pour le voir. Dans le doute, regardez si le propos est trop énorme pour être sincère — c’est le signal le plus fiable.',
                'The French themselves ask: “premier ou second degré ?”. **First degree**: the statement is serious, to be taken as is. **Second degree**: it says the opposite of what is meant, and counts on you to see it. When in doubt, check whether the claim is too enormous to be sincere — that is the most reliable signal.',
                '法国人自己也会问：“premier ou second degré ?”。**第一层**：话是认真的，照字面理解。**第二层**：说的是心里所想的反面，并指望你能看穿。拿不准时，看这话是否夸张到不可能当真——这是最可靠的信号。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎧',
              title: t('Sérieux ou pas ?', 'Serious or not?', '当真还是玩笑？'),
              hint: t(
                'À l’oral, seul le contexte tranche. Écoutez chaque réplique.',
                'In speech, only the context decides. Listen to each line.',
                '口语中只有语境能给出答案。听每一句台词。',
              ),
              widget: {
                kind: 'listening',
                prompt: t('Comment faut-il prendre la phrase ?', 'How should the sentence be taken?', '这句话该怎么理解？'),
                items: [
                  {
                    id: 'l1',
                    sentence: 'Trois heures de retard, bravo, très fort.',
                    question: t('Que pense vraiment la personne ?', 'What does the person really think?', '这个人真实的想法是什么？'),
                    options: [
                      t('Elle est exaspérée : c’est ironique', 'They are exasperated: it is ironic', '气坏了：这是反话'),
                      t('Elle félicite sincèrement', 'They are sincerely congratulating', '真心称赞'),
                      t('Elle est impressionnée par la ponctualité', 'They are impressed by the punctuality', '为对方的守时而叹服'),
                    ],
                    answer: 0,
                    why: t('« Bravo » après un échec est l’ironie française la plus courante. Plus le compliment est appuyé, plus la critique est forte.', '“Bravo” after a failure is the most common French irony. The heavier the compliment, the harsher the criticism.', '失败之后的 “bravo” 是最常见的法式反讽。恭维越用力，批评就越重。'),
                  },
                  {
                    id: 'l2',
                    sentence: 'Non mais je dis ça, je dis rien, hein.',
                    question: t('Que fait la personne ?', 'What is the person doing?', '这个人在干什么？'),
                    options: [
                      t('Elle critique — tout en se donnant une porte de sortie', 'They are criticising — while keeping an exit door', '在批评——同时给自己留后路'),
                      t('Elle retire vraiment ce qu’elle a dit', 'They are genuinely taking it back', '真的收回前言'),
                      t('Elle n’a pas d’avis', 'They have no opinion', '没有任何看法'),
                    ],
                    answer: 0,
                    why: t('« Je dis ça, je dis rien » accompagne toujours une remarque qu’on veut faire entendre sans l’assumer. La formule dit exactement l’inverse de ce qu’elle prétend.', '“Je dis ça, je dis rien” always escorts a remark meant to be heard without being owned. The phrase does exactly the opposite of what it claims.', '“je dis ça, je dis rien” 总是伴随一句想让人听见却不想负责的话。这个句式做的恰恰是它声称不做的事。'),
                  },
                  {
                    id: 'l3',
                    sentence: 'C’est pas faux.',
                    question: t('Que veut souvent dire cette réponse devenue culte ?', 'What does this cult reply often mean?', '这句流行语常常意味着什么？'),
                    options: [
                      t('« Je n’ai pas tout compris, mais je préfère acquiescer »', '“I did not quite follow, but I would rather agree”', '“我没全听懂，但还是附和一下”'),
                      t('Un désaccord ferme', 'Firm disagreement', '坚决反对'),
                      t('Une correction grammaticale', 'A grammar correction', '纠正语法'),
                    ],
                    answer: 0,
                    why: t('Depuis la série Kaamelott, « c’est pas faux » est la réplique de celui qui n’a pas compris un mot compliqué. La citer, c’est avouer en riant.', 'Since the series Kaamelott, “c’est pas faux” is the line of someone who did not understand a fancy word. Quoting it is a laughing confession.', '自剧集《Kaamelott》以来，“c’est pas faux” 就是没听懂难词之人的标准台词。引用它，等于笑着承认。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_c2hu_2',
          moduleId: 'mod_c2hu_1',
          kind: 'text',
          durationMin: 12,
          title: t('La satire et les titres joueurs', 'Satire and playful headlines', '讽刺与玩梗的标题'),
          summary: t(
            'Du Canard enchaîné aux titres de Libération : rire en lisant la presse.',
            'From Le Canard enchaîné to Libération’s front pages: laughing while reading the press.',
            '从《鸭鸣报》到《解放报》的标题：边读报边会心一笑。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '📰',
              text: t(
                'La presse française joue avec sa langue comme peu d’autres. **Le Canard enchaîné**, hebdomadaire satirique fondé en 1915, révèle des scandales très sérieux sous des calembours ; **Libération** a fait du titre-jeu-de-mots sa signature. Comprendre ces titres, c’est réussir un petit test de C2 chaque matin.',
                'The French press plays with its language like few others. **Le Canard enchaîné**, a satirical weekly founded in 1915, breaks very serious scandals beneath puns; **Libération** has made the wordplay headline its signature. Decoding these titles is a small C2 test passed every morning.',
                '法国报刊玩弄语言的程度世所罕见。创刊于 1915 年的讽刺周报**《鸭鸣报》**用双关语揭露极其严肃的丑闻；**《解放报》**则把文字游戏标题当成招牌。读懂这些标题，等于每天早晨通过一次小型 C2 测试。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔬',
              title: t('Un titre joueur, décortiqué', 'A playful headline, dissected', '拆解一个玩梗标题'),
              hint: t('Cliquez chaque segment : le jeu se cache dans les mots soulignés.', 'Click each segment: the game hides in the underlined words.', '点击每一段：玄机藏在下划线的词里。'),
              widget: {
                kind: 'sentence',
                segments: [
                  { text: 'Sur la grève des trains, un quotidien titre : ' },
                  {
                    text: '« La SNCF',
                    role: t('La cible', 'The target', '被打趣的对象'),
                    detail: t('La compagnie ferroviaire nationale : personnage récurrent de l’humour français, comme la météo ou l’administration.', 'The national railway company: a recurring character of French humour, like the weather or the administration.', '国家铁路公司：法式幽默的常驻角色，和天气、行政机构一样。'),
                  },
                  {
                    text: 'reste à quai »',
                    role: t('L’expression détournée', 'The hijacked expression', '被挪用的成语'),
                    detail: t('« Rester à quai » se dit d’un voyageur qui rate son train. Appliquée à la SNCF elle-même, l’expression retourne le rôle : c’est le comble, ressort classique du titre français.', '“Rester à quai” describes a traveller who misses their train. Applied to the SNCF itself, it flips the roles: the epitome of the thing — a classic spring of French headlines.', '“rester à quai” 本指误了火车、留在站台的旅客。用到铁路公司自己身上，角色便颠倒了：这正是“讽刺之极致”，法式标题的经典发条。'),
                  },
                  { text: ' — et tout lecteur français sourit ' },
                  {
                    text: 'avant même l’article.',
                    role: t('Pourquoi ça marche', 'Why it works', '为什么奏效'),
                    detail: t('Le jeu de mots récompense le lecteur qui possède l’expression d’origine. C’est un clin d’œil entre initiés — et vous venez d’en être.', 'The pun rewards the reader who owns the original expression. It is a wink between insiders — and you just became one.', '这个文字游戏犒赏的是掌握原始成语的读者。这是圈内人之间的眨眼示意——而你刚刚入圈。'),
                  },
                ],
              },
            },
            {
              type: 'examples',
              emoji: '🗞️',
              title: t('Le kit du titre satirique', 'The satirical headline kit', '讽刺标题工具箱'),
              items: [
                {
                  fr: 'Une expression figée + un mot remplacé : « Qui vole un bœuf… vole un œuf. »',
                  gloss: t('Le proverbe inversé. Le lecteur reconnaît la formule d’origine et mesure l’écart — c’est l’écart qui fait rire.', 'The inverted proverb. The reader recognises the original formula and measures the gap — the gap is the joke.', '被反转的谚语。读者认出原句，量出偏差——笑点就在偏差里。'),
                },
                {
                  fr: 'Le zeugma : « Il a pris la porte et ses responsabilités. »',
                  gloss: t('Un même verbe attelé à un sens concret et un sens abstrait. Figure reine des chroniqueurs.', 'One verb yoked to a concrete meaning and an abstract one. The columnists’ favourite figure.', '同一个动词同时拉着一个具体义和一个抽象义。专栏作家的看家修辞。'),
                },
                {
                  fr: 'La fausse précision : « Réforme reportée sine die, c’est-à-dire à jamais. »',
                  gloss: t('La glose assassine : on fait mine d’expliquer un terme savant, et l’explication est le jugement.', 'The killer gloss: pretending to explain a learned term, where the explanation is the verdict.', '致命的“注释”：假装解释一个高深术语，而解释本身就是判决。'),
                },
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('L’humour ne se signale jamais', 'The humour is never flagged', '幽默从不自我标注'),
              text: t(
                'Un titre satirique français ne porte ni guillemets d’excuse ni émoticône. Le texte est présenté avec le plus grand sérieux — c’est au lecteur de voir. Prendre Le Gorafi (le site parodique) pour une vraie information est un rite de passage : tout le monde s’y est fait prendre une fois.',
                'A French satirical headline carries no apologetic quotes and no emoji. The text is delivered with the utmost seriousness — spotting it is the reader’s job. Mistaking Le Gorafi (the parody site) for real news is a rite of passage: everyone has been caught once.',
                '法国的讽刺标题不加引号示意，也没有表情符号。文本一本正经地端上来——看穿它是读者的任务。把恶搞网站 Le Gorafi 当成真新闻，是人人都经历过一次的“成人礼”。',
              ),
            },
          ],
        },
        {
          id: 'les_c2hu_3',
          moduleId: 'mod_c2hu_1',
          kind: 'text',
          durationMin: 12,
          title: t('Les références que tout le monde partage', 'The references everyone shares', '人人共享的文化梗'),
          summary: t(
            'Répliques cultes, chansons, publicités : le fonds commun du rire français.',
            'Cult lines, songs, adverts: the common stock of French laughter.',
            '经典台词、歌曲、广告：法式笑声的共同底库。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🎬',
              text: t(
                'Une partie de l’humour français ne s’invente pas : elle se **cite**. Répliques de films, slogans publicitaires, petites phrases politiques — glissées dans la conversation sans guillemets, elles créent une connivence immédiate entre ceux qui les reconnaissent. En voici le premier étage.',
                'Part of French humour is not invented: it is **quoted**. Film lines, advertising slogans, politicians’ soundbites — slipped into conversation without quotation marks, they create instant complicity between those who recognise them. Here is the ground floor.',
                '法式幽默有一部分不是原创，而是**引用**。电影台词、广告口号、政客名言——不带引号地滑进对话，在认得出的人之间制造即刻的默契。以下是最基础的一层。',
              ),
            },
            {
              type: 'keyvalues',
              emoji: '💬',
              title: t('Six citations à reconnaître', 'Six quotations to recognise', '六句必认的引语'),
              entries: [
                { label: t('« T’as de beaux yeux, tu sais. »', '« T’as de beaux yeux, tu sais. »', '« T’as de beaux yeux, tu sais. »'), value: t('Quai des brumes, 1938. LA réplique de séduction, toujours citée au second degré aujourd’hui.', 'Quai des brumes, 1938. THE seduction line, only ever quoted tongue-in-cheek today.', '《雾码头》，1938。经典的调情台词，如今引用时一律带着玩笑意味。') },
                { label: t('« Les cons, ça ose tout… »', '« Les cons, ça ose tout… »', '« Les cons, ça ose tout… »'), value: t('Les Tontons flingueurs, 1963. « …c’est même à ça qu’on les reconnaît. » Se cite pour soupirer devant une audace malvenue.', 'Les Tontons flingueurs, 1963. “…that is even how you spot them.” Quoted as a sigh at unwelcome audacity.', '《亡命的老舅们》，1963。“……正因如此才认得出他们。” 用来对不知天高地厚者一声叹息。') },
                { label: t('« C’est pas faux. »', '« C’est pas faux. »', '« C’est pas faux. »'), value: t('Kaamelott, 2005. L’aveu déguisé de celui qui n’a pas compris. S’emploie sur soi-même, en souriant.', 'Kaamelott, 2005. The disguised confession of not having understood. Used about oneself, smiling.', '《Kaamelott》，2005。没听懂时的变相招供。多用于自己身上，一笑置之。') },
                { label: t('« Un pour tous, tous pour un ! »', '« Un pour tous, tous pour un ! »', '« Un pour tous, tous pour un ! »'), value: t('Dumas, Les Trois Mousquetaires. Sert à lancer n’importe quel effort collectif — souvent avec emphase parodique.', 'Dumas, The Three Musketeers. Launches any collective effort — usually with parodic emphasis.', '大仲马《三个火枪手》。用来为任何集体行动打气——通常带着戏仿式的夸张。') },
                { label: t('« Parce que vous le valez bien. »', '« Parce que vous le valez bien. »', '« Parce que vous le valez bien. »'), value: t('Slogan L’Oréal. Se glisse après n’importe quel petit plaisir qu’on s’offre : ironie douce garantie.', 'The L’Oréal slogan. Slipped in after any small treat one allows oneself: gentle irony guaranteed.', '欧莱雅广告语。犒劳自己之后随口一句：温和的自嘲效果拉满。') },
                { label: t('« La réponse D. »', '« La réponse D. »', '« La réponse D. »'), value: t('Qui veut gagner des millions. Se dit quand on choisit au hasard en faisant mine d’être sûr.', 'Who Wants to Be a Millionaire. Said when guessing blindly while feigning confidence.', '《谁想成为百万富翁》。瞎猜却装作胸有成竹时的标准台词。') },
              ],
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('La citation juste au bon moment', 'The right quote at the right time', '恰到好处的引用'),
              hint: t('Choisissez la référence qui ferait mouche.', 'Pick the reference that would land.', '选出能一击即中的那个梗。'),
              widget: {
                kind: 'fill',
                prompt: t('Que glisser dans la conversation ?', 'What to slip into the conversation?', '这时该接哪一句？'),
                items: [
                  {
                    id: 'q1',
                    before: 'Un collègue s’offre un troisième croissant : «',
                    after: '», lance-t-il en souriant.',
                    options: ['Parce que je le vaux bien', 'Un pour tous', 'C’est pas faux'],
                    answer: 'Parce que je le vaux bien',
                    why: t('Le slogan publicitaire détourné sur un petit plaisir personnel : emploi canonique.', 'The advertising slogan hijacked for a small personal treat: textbook usage.', '把广告语挪用到犒劳自己的小事上：教科书级用法。'),
                  },
                  {
                    id: 'q2',
                    before: 'Quelqu’un emploie « paradigme » trois fois en une phrase. Vous :',
                    after: '',
                    options: ['C’est pas faux.', 'T’as de beaux yeux, tu sais.', 'La réponse D.'],
                    answer: 'C’est pas faux.',
                    why: t('La réplique de Kaamelott avoue en riant qu’on a décroché devant le jargon. Les initiés comprendront — c’est le but.', 'The Kaamelott line laughingly admits you got lost in the jargon. Insiders will get it — that is the point.', '这句《Kaamelott》台词笑着承认被术语绕晕了。懂梗的人自会心领神会——这正是目的。'),
                  },
                  {
                    id: 'q3',
                    before: 'On vous demande de deviner entre quatre options, vous n’en avez aucune idée : «',
                    after: '! »',
                    options: ['La réponse D', 'Les cons, ça ose tout', 'Un pour tous'],
                    answer: 'La réponse D',
                    why: t('Le réflexe du jeu télévisé : choisir au hasard avec aplomb. Toute table française sourira.', 'The game-show reflex: guessing with aplomb. Any French table will smile.', '电视问答的条件反射：一本正经地瞎猜。任何一桌法国人都会会心一笑。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '🏁',
              title: t('Le dernier palier est franchi ensemble', 'The last level is cleared together', '最后一关，一起通关'),
              text: t(
                'Rire dans une langue, c’est y être chez soi. Le jour où vous glissez « c’est pas faux » au bon moment et où la table rit **avec** vous, {prenom}, le C2 n’est plus un niveau : c’est votre langue.',
                'Laughing in a language means being at home in it. The day you drop “c’est pas faux” at the right moment and the table laughs **with** you, {prenom}, C2 is no longer a level: it is your language.',
                '能在一门语言里笑，才算真正安了家。当你在恰当的时刻抛出 “c’est pas faux”，而全桌人**跟着**你一起笑的那天，{prenom}，C2 就不再是一个级别——它已是你的语言。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_c2hu_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur les mécanismes du rire et les références.', 'Six questions on the machinery of laughter and the references.', '六道题，考查笑的机关与文化梗。'),
      lessons: [
        {
          id: 'les_c2hu_q',
          moduleId: 'mod_c2hu_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_c2_humour',
          title: t('Quiz — L’humour', 'Quiz — Humour', '测验 — 幽默'),
          summary: t('6 questions — au premier degré, promis.', '6 questions — first-degree ones, promise.', '6 道题——保证句句是正话。'),
        },
      ],
    },
  ],
};
