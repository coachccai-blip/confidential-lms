import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_b2_presse';

export const b2PresseCourse: Course = {
  id: ID,
  slug: 'b2-presse',
  level: 'B2',
  accentFrom: '#818cf8',
  accentTo: '#4338ca',
  status: 'published',
  title: t('Lire la presse française', 'Reading the French press', '读懂法国报刊'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Un article de presse cache la moitié de son sens dans sa forme : le titre, le choix du verbe, la place de la source. Voici comment lire vite et comprendre ce qui n’est pas écrit.',
    'A news article hides half its meaning in its form: the headline, the choice of verb, where the source sits. Here is how to read fast and understand what is not written.',
    '新闻报道有一半的含义藏在形式里：标题、动词的选择、消息来源的位置。本课教你快速阅读，并读懂那些没写出来的东西。',
  ),
  tags: [t('Compréhension écrite', 'Reading', '阅读'), t('Actualité', 'Current affairs', '时事')],
  modules: [
    {
      id: 'mod_b2ps_1',
      courseId: ID,
      title: t('Décoder un article', 'Decoding an article', '解读一篇报道'),
      summary: t(
        'La forme du texte, le vocabulaire, puis ce que l’auteur laisse entendre.',
        'The shape of the text, the vocabulary, then what the writer implies.',
        '先看文本结构，再看词汇，最后看作者的言外之意。',
      ),
      lessons: [
        {
          id: 'les_b2ps_1',
          moduleId: 'mod_b2ps_1',
          kind: 'text',
          durationMin: 12,
          title: t('L’anatomie d’une page de journal', 'The anatomy of a newspaper page', '报纸版面的构造'),
          summary: t(
            'Chaque zone de la page a un nom et une fonction précise.',
            'Every area of the page has a name and a precise function.',
            '版面上的每个区域都有名称和明确的功能。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '📰',
              text: t(
                'Un article français suit toujours le même montage. Si vous savez où regarder, vous pouvez décider en quinze secondes si le texte vaut une lecture complète — c’est exactement ce qu’attend une épreuve de compréhension écrite.',
                'A French article always follows the same assembly. If you know where to look, you can decide in fifteen seconds whether the text is worth reading in full — which is exactly what a reading paper asks of you.',
                '法语报道的组装方式始终如一。只要知道该看哪里，十五秒内就能判断值不值得通读——阅读考试要的正是这个。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🗞️',
              title: t('La page, zone par zone', 'The page, area by area', '版面的各个区域'),
              hint: t(
                'Cliquez chaque zone, {prenom}, ou lancez « Voir dans l’ordre » pour suivre le parcours de lecture rapide.',
                'Click each area, {prenom}, or press “Watch the order” to follow the fast-reading path.',
                '{prenom}，点击各区域，或按“按顺序演示”跟随快速阅读的路径。',
              ),
              widget: {
                kind: 'layout',
                ratio: 0.75,
                zones: [
                  {
                    id: 'j1',
                    label: t('La rubrique', 'The section', '栏目'),
                    x: 6, y: 4, w: 30, h: 6,
                    sample: 'ÉCONOMIE',
                    detail: t('En haut, en petites capitales. Elle vous dit déjà quel vocabulaire attendre, et donc quoi réviser avant de lire.', 'At the top, in small capitals. It already tells you what vocabulary to expect, and so what to revise before reading.', '位于顶部，小号大写字母。它已经告诉你会遇到哪类词汇，也就是读前该复习什么。'),
                  },
                  {
                    id: 'j2',
                    label: t('Le titre', 'The headline', '标题'),
                    x: 6, y: 12, w: 88, h: 12,
                    sample: 'Les péages autoroutiers augmenteront de 3 % en février',
                    detail: t('Souvent sans verbe conjugué, ou avec un verbe au présent même pour le passé. Il annonce le fait, jamais l’analyse.', 'Often with no conjugated verb, or with a present tense even for a past event. It states the fact, never the analysis.', '常常没有变位动词，或即使讲过去的事也用现在时。它只陈述事实，从不给出分析。'),
                  },
                  {
                    id: 'j3',
                    label: t('Le chapeau', 'The standfirst', '导语'),
                    x: 6, y: 26, w: 88, h: 12,
                    sample: 'En gras sous le titre : la hausse touchera l’ensemble du réseau concédé et sera annoncée à la fin du mois.',
                    detail: t('Le paragraphe en gras. Il répond déjà à qui, quoi, où, quand. Beaucoup de questions d’examen se règlent ici seul.', 'The bold paragraph. It already answers who, what, where, when. Many exam questions are settled here alone.', '加粗的那一段。它已经回答了谁、什么、何地、何时。许多考题仅凭这里就能作答。'),
                  },
                  {
                    id: 'j4',
                    label: t('La signature', 'The byline', '署名'),
                    x: 6, y: 40, w: 40, h: 5,
                    sample: 'Par Claire Dumont, envoyée spéciale',
                    detail: t('« Envoyé spécial » signifie sur place ; « correspondant » signifie installé dans le pays. Une dépêche non signée vient d’une agence.', '“Envoyé spécial” means on site; “correspondant” means based in the country. An unsigned piece comes from a news agency.', '“envoyé spécial”指赴现场采访；“correspondant”指常驻该国。未署名的消息来自通讯社。'),
                  },
                  {
                    id: 'j5',
                    label: t('L’attaque', 'The opening paragraph', '开篇段'),
                    x: 6, y: 47, w: 88, h: 16,
                    sample: 'Le premier paragraphe reprend l’essentiel, puis ajoute le premier élément de contexte.',
                    detail: t('Le français appelle cela l’attaque. Elle répète volontairement le chapeau : ce n’est pas une maladresse, c’est la règle du métier.', 'French calls this the attaque. It deliberately repeats the standfirst: that is not clumsiness, it is the professional rule.', '法语称之为 attaque。它有意重复导语内容：这不是笨拙，而是行业规范。'),
                  },
                  {
                    id: 'j6',
                    label: t('Le corps', 'The body', '正文'),
                    x: 6, y: 65, w: 60, h: 22,
                    sample: 'Les paragraphes suivants vont du plus important au moins important : c’est la pyramide inversée.',
                    detail: t('On peut couper la fin d’un article sans perdre l’information principale. Pour lire vite, les derniers paragraphes sont donc facultatifs.', 'You can cut the end of an article without losing the main information. To read fast, the last paragraphs are therefore optional.', '砍掉文章结尾也不会丢失主要信息。因此快速阅读时，最后几段可以略过。'),
                  },
                  {
                    id: 'j7',
                    label: t('L’encadré', 'The sidebar', '边栏'),
                    x: 68, y: 65, w: 26, h: 22,
                    sample: 'Chiffres clés\n\n9 000 km\nde réseau concédé',
                    detail: t('Les chiffres à retenir sont souvent isolés ici. C’est la zone la plus rentable quand une question porte sur des données.', 'The figures worth remembering are often set apart here. It is the most profitable area when a question is about data.', '值得记住的数字常常单独列在这里。若考题涉及数据，这块区域最划算。'),
                  },
                  {
                    id: 'j8',
                    label: t('La chute', 'The closing line', '结尾句'),
                    x: 6, y: 89, w: 88, h: 7,
                    sample: 'La dernière phrase, souvent une citation ou une question ouverte.',
                    detail: t('C’est là que l’opinion du journal se glisse le plus souvent. Une question ouverte en fin d’article n’est jamais neutre.', 'This is where the paper’s own view most often slips in. An open question at the end of an article is never neutral.', '报纸自身的立场最常悄悄藏在这里。文末的开放式问题从来都不是中立的。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '⏱️',
              title: t('La lecture en quinze secondes', 'The fifteen-second read', '十五秒速读法'),
              text: t(
                'Rubrique, titre, chapeau, encadré, dernière phrase. Ces cinq zones donnent le sujet, le fait, les chiffres et le point de vue. Le corps ne sert qu’à vérifier.',
                'Section, headline, standfirst, sidebar, last sentence. Those five areas give you the topic, the fact, the figures and the angle. The body only serves to check.',
                '栏目、标题、导语、边栏、末句。这五个区域就能给出主题、事实、数据和立场。正文只用来核对。',
              ),
            },
          ],
        },
        {
          id: 'les_b2ps_2',
          moduleId: 'mod_b2ps_1',
          kind: 'text',
          durationMin: 11,
          title: t('La langue des titres', 'The language of headlines', '标题的语言'),
          summary: t(
            'Pourquoi les titres semblent grammaticalement faux, et comment les lire.',
            'Why headlines look grammatically wrong, and how to read them.',
            '为什么标题看起来不合语法，以及该怎么读。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '✂️',
              text: t(
                'Un titre doit tenir en une ligne. Les journalistes suppriment donc tout ce qui peut l’être : les articles, l’auxiliaire, parfois le verbe entier. Le résultat déroute, mais il obéit à quatre procédés seulement.',
                'A headline has to fit on one line. So journalists cut everything they can: articles, the auxiliary, sometimes the verb itself. The result is confusing, but it follows only four devices.',
                '标题必须一行装下，所以记者会砍掉一切可以砍的：冠词、助动词，有时连动词都不留。结果让人费解，但其实只用了四种手法。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎚️',
              title: t('Les quatre procédés des titres', 'The four headline devices', '标题的四种手法'),
              hint: t('Passez d’un cran à l’autre pour voir la phrase complète reconstituée.', 'Move from step to step to see the full sentence rebuilt.', '逐档切换，看完整句子如何还原。'),
              widget: {
                kind: 'switcher',
                steps: [
                  {
                    id: 'h1',
                    label: t('Le titre sans verbe', 'The verbless headline', '无动词标题'),
                    headline: t('Deux groupes de mots séparés par deux points', 'Two word groups separated by a colon', '用冒号隔开的两组词'),
                    example: 'Grève des transports : trafic très perturbé mardi',
                    gloss: t('À reconstituer : « Le trafic sera très perturbé mardi à cause d’une grève des transports. » Les deux points remplacent le lien de cause.', 'To rebuild: “Le trafic sera très perturbé mardi à cause d’une grève des transports.” The colon replaces the cause link.', '还原为：“Le trafic sera très perturbé mardi à cause d’une grève des transports.” 冒号替代了因果连接。'),
                  },
                  {
                    id: 'h2',
                    label: t('Le présent pour le passé', 'The present for the past', '用现在时讲过去'),
                    headline: t('L’événement est raconté comme s’il arrivait', 'The event is told as if it were happening', '事件像正在发生一样被讲述'),
                    example: 'Un incendie ravage une usine de Roubaix',
                    gloss: t('L’incendie a eu lieu hier. Le présent rend la scène vivante ; on l’appelle le présent de narration.', 'The fire happened yesterday. The present makes the scene vivid; it is called the narrative present.', '火灾发生在昨天。现在时让画面更鲜活，这叫历史现在时。'),
                  },
                  {
                    id: 'h3',
                    label: t('Le conditionnel de prudence', 'The cautious conditional', '谨慎条件式'),
                    headline: t('L’information n’est pas confirmée', 'The information is not confirmed', '信息尚未证实'),
                    example: 'Le groupe supprimerait 400 postes',
                    gloss: t('Le conditionnel prévient : le journal rapporte une rumeur ou une source unique, et refuse d’en garantir l’exactitude.', 'The conditional warns you: the paper is reporting a rumour or a single source, and declines to vouch for it.', '条件式在提醒你：报纸转述的是传闻或单一来源，不为其准确性背书。'),
                  },
                  {
                    id: 'h4',
                    label: t('Le style nominal', 'The nominal style', '名词化风格'),
                    headline: t('Le verbe devient un nom', 'The verb turns into a noun', '动词变成名词'),
                    example: 'Baisse du chômage, hausse des faillites',
                    gloss: t('« Baisse » remplace « le chômage baisse ». Ce style compact domine les titres et les rapports officiels.', '“Baisse” replaces “le chômage baisse”. This compact style dominates headlines and official reports.', '“baisse” 替代 “le chômage baisse”。这种紧凑风格主导着标题和官方报告。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('Le conditionnel change tout le sens', 'The conditional changes the whole meaning', '条件式改变全部含义'),
              text: t(
                '« Le groupe supprime 400 postes » est un fait. « Le groupe supprimerait 400 postes » veut dire que ce n’est pas vérifié. Confondre les deux, c’est se tromper sur l’information elle-même, pas seulement sur la grammaire.',
                '“Le groupe supprime 400 postes” is a fact. “Le groupe supprimerait 400 postes” means it is unverified. Mixing the two means getting the information wrong, not just the grammar.',
                '“Le groupe supprime 400 postes” 是事实。“Le groupe supprimerait 400 postes” 意味着未经证实。混淆二者，错的不只是语法，而是信息本身。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔗',
              title: t('Reliez chaque titre à ce qu’il dit vraiment', 'Match each headline to what it really says', '把每个标题与其真实含义配对'),
              hint: t('Attention au mode du verbe.', 'Watch the mood of the verb.', '注意动词的语式。'),
              widget: {
                kind: 'pairs',
                prompt: t('Ce que le journal affirme :', 'What the paper is claiming:', '报纸在主张什么：'),
                pairs: [
                  { id: 'n1', left: 'Le ministre démissionne', right: t('C’est confirmé, c’est arrivé', 'It is confirmed, it has happened', '已证实，已经发生') },
                  { id: 'n2', left: 'Le ministre démissionnerait', right: t('C’est une rumeur, le journal se protège', 'It is a rumour, the paper is covering itself', '这是传闻，报纸在自我保护') },
                  { id: 'n3', left: 'Vers une démission du ministre', right: t('C’est probable, mais rien n’est fait', 'It is likely, but nothing has happened yet', '很可能，但尚未发生') },
                  { id: 'n4', left: 'Démission du ministre : les réactions', right: t('C’est acquis, on passe déjà à la suite', 'It is settled, we are already on to what follows', '已成定局，话题已转向后续') },
                  { id: 'n5', left: 'Le ministre va-t-il démissionner ?', right: t('Personne ne sait, et le journal l’assume', 'Nobody knows, and the paper admits it', '无人知晓，报纸也坦承这一点') },
                ],
              },
            },
          ],
        },
        {
          id: 'les_b2ps_3',
          moduleId: 'mod_b2ps_1',
          kind: 'text',
          durationMin: 12,
          title: t('Repérer le point de vue', 'Spotting the angle', '识别立场'),
          summary: t(
            'Les mots qui trahissent une opinion dans un texte qui se dit neutre.',
            'The words that give away an opinion in a text that claims to be neutral.',
            '在自称中立的文本中，哪些词暴露了立场。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🕵️',
              text: t(
                'Un article informatif n’écrit jamais « je pense que ». L’opinion passe par le choix des mots : un verbe de parole, un adjectif, un chiffre présenté d’une certaine façon. Savoir les repérer est une compétence directement évaluée au B2.',
                'An informative article never writes “I think that”. The opinion travels through word choice: a reporting verb, an adjective, a figure presented in a certain way. Spotting them is a skill directly assessed at B2.',
                '资讯类报道从不写 “我认为”。立场藏在选词里：一个引述动词、一个形容词、一种呈现数字的方式。识别它们正是 B2 直接考查的能力。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔬',
              title: t('Une phrase, ses signaux cachés', 'One sentence, its hidden signals', '一句话中的隐藏信号'),
              hint: t('Cliquez les segments soulignés pour voir ce qu’ils révèlent.', 'Click the underlined segments to see what they reveal.', '点击带下划线的部分，看看它们透露了什么。'),
              widget: {
                kind: 'sentence',
                segments: [
                  { text: 'La direction' },
                  {
                    text: 'prétend',
                    role: t('Verbe de parole orienté', 'A loaded reporting verb', '带倾向的引述动词'),
                    detail: t('« Prétendre » signifie affirmer sans preuve. Le journaliste aurait pu écrire « déclare », neutre, ou « explique », favorable. Le choix est un jugement.', '“Prétendre” means to claim without proof. The journalist could have written “déclare”, neutral, or “explique”, favourable. The choice is a judgement.', '“prétendre” 意为无凭据地宣称。记者本可以写中性的 “déclare”，或偏正面的 “explique”。这个选择本身就是评判。'),
                  },
                  { text: 'que le plan sera' },
                  {
                    text: 'indolore',
                    role: t('Adjectif emprunté au discours de l’entreprise', 'An adjective borrowed from the company’s own wording', '借自企业口径的形容词'),
                    detail: t('Un mot que la direction emploie, repris sans guillemets. Le lecteur attentif entend l’ironie ; c’est un procédé courant.', 'A word the management uses, picked up without quotation marks. The attentive reader hears the irony; it is a common device.', '这是管理层的用词，被原样引用却不加引号。细心的读者能听出反讽；这是常见手法。'),
                  },
                  { text: 'pour les salariés,' },
                  {
                    text: 'alors même que',
                    role: t('Connecteur d’opposition forte', 'A strong contrast connector', '强对立连接词'),
                    detail: t('Plus fort que « mais » : il souligne une contradiction que l’auteur juge flagrante. C’est ici que l’opinion devient nette.', 'Stronger than “mais”: it underlines a contradiction the writer finds glaring. This is where the opinion becomes clear.', '比 “mais” 更强：它凸显作者认为显而易见的矛盾。立场正是在这里变得明确。'),
                  },
                  { text: 'trois sites doivent fermer.' },
                ],
              },
            },
            {
              type: 'table',
              emoji: '📊',
              caption: t('Le même fait, trois verbes de parole', 'The same fact, three reporting verbs', '同一事实，三个引述动词'),
              headers: [t('Verbe', 'Verb', '动词'), t('Ce qu’il suggère', 'What it suggests', '暗示什么'), t('Niveau de confiance', 'Level of trust', '信任度')],
              rows: [
                [t('déclarer, indiquer', 'déclarer, indiquer', 'déclarer、indiquer'), t('Le journal ne se prononce pas', 'The paper takes no position', '报纸不表态'), t('Neutre', 'Neutral', '中性')],
                [t('expliquer, souligner', 'expliquer, souligner', 'expliquer、souligner'), t('Le propos est présenté comme sensé', 'The remark is presented as sound', '把话语呈现为有道理'), t('Favorable', 'Favourable', '正面')],
                [t('prétendre, affirmer sans preuve', 'prétendre, affirmer sans preuve', 'prétendre、affirmer sans preuve'), t('Le journal doute ouvertement', 'The paper openly doubts it', '报纸公开表示怀疑'), t('Défavorable', 'Unfavourable', '负面')],
                [t('reconnaître, admettre', 'reconnaître, admettre', 'reconnaître、admettre'), t('Le locuteur cède du terrain', 'The speaker is giving ground', '说话者在退让'), t('Défavorable au locuteur', 'Unfavourable to the speaker', '对说话者不利')],
              ],
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('Choisissez le mot qui oriente', 'Choose the word that steers the reader', '选出引导读者的那个词'),
              hint: t('Chaque choix change le jugement porté sur la phrase.', 'Each choice changes the judgement the sentence carries.', '每个选择都会改变句子传达的评判。'),
              widget: {
                kind: 'fill',
                prompt: t('Quel mot rend la phrase critique ?', 'Which word makes the sentence critical?', '哪个词让句子带上批评意味？'),
                items: [
                  {
                    id: 'p1',
                    before: 'Le maire',
                    after: 'avoir consulté les habitants.',
                    options: ['affirme', 'prétend', 'indique'],
                    answer: 'prétend',
                    why: t('« Prétend » sous-entend que le journal n’y croit pas. Les deux autres verbes laissent le lecteur libre.', '“Prétend” implies the paper does not believe it. The other two verbs leave the reader free.', '“prétend” 暗示报纸并不相信。另外两个动词把判断留给读者。'),
                  },
                  {
                    id: 'p2',
                    before: 'Le dispositif a coûté 4 millions d’euros pour',
                    after: 'trente emplois.',
                    options: ['créer', 'ne créer que', 'permettre de créer'],
                    answer: 'ne créer que',
                    why: t('« Ne … que » pose le chiffre comme insuffisant. Le fait est identique, l’évaluation change du tout au tout.', '“Ne … que” frames the figure as insufficient. The fact is the same, the evaluation flips completely.', '“ne … que” 把这个数字框定为不足。事实未变，评价却完全反转。'),
                  },
                  {
                    id: 'p3',
                    before: 'La mesure a été adoptée',
                    after: 'l’avis des syndicats.',
                    options: ['après', 'malgré', 'selon'],
                    answer: 'malgré',
                    why: t('« Malgré » place le journal du côté des syndicats. « Après » se contente de dater les faits.', '“Malgré” puts the paper on the unions’ side. “Après” merely dates the events.', '“malgré” 让报纸站到工会一边。“après” 只是交代时间先后。'),
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'mod_b2ps_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur la lecture de la presse.', 'Six questions on reading the press.', '六道题，考查报刊阅读。'),
      lessons: [
        {
          id: 'les_b2ps_q',
          moduleId: 'mod_b2ps_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_b2_presse',
          title: t('Quiz — Lire la presse', 'Quiz — Reading the press', '测验 — 报刊阅读'),
          summary: t('6 questions sur les titres, les sources et le point de vue.', '6 questions on headlines, sources and angle.', '6 道题，考查标题、来源与立场。'),
        },
      ],
    },
  ],
};
