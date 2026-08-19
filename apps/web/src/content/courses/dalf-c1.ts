import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_dalf_c1';

export const dalfC1Course: Course = {
  id: ID,
  slug: 'dalf-c1',
  level: 'C1',
  accentFrom: '#a5b4fc',
  accentTo: '#1e40af',
  status: 'published',
  title: t('Préparation au DALF C1', 'DALF C1 preparation', 'DALF C1 备考'),
  subtitle: t('2 modules · 4 leçons · 1 quiz noté', '2 modules · 4 lessons · 1 graded quiz', '2 个单元 · 4 节课 · 1 次评分测验'),
  description: t(
    'Le C1 change de nature : on ne teste plus votre français, on teste ce que vous en faites. Synthèse de plusieurs documents, exposé argumenté, registre soutenu — voici la méthode des deux épreuves qui font échouer la majorité des candidats.',
    'C1 changes in nature: it no longer tests your French, it tests what you do with it. Synthesis of several documents, argued presentation, formal register — here is the method for the two papers that fail most candidates.',
    'C1 的性质发生了变化：考的不再是你的法语，而是你用法语做什么。文献综述、论证性陈述、正式语体——以下是让多数考生失利的两项考试的应对方法。',
  ),
  tags: [t('DALF', 'DALF', 'DALF'), t('Niveau C1', 'Level C1', 'C1 级别'), t('Synthèse', 'Synthesis', '综述')],
  modules: [
    {
      id: 'mod_c1_1',
      courseId: ID,
      title: t('La synthèse de documents', 'Document synthesis', '文献综述'),
      summary: t('L’épreuve la plus technique du DALF, décomposée en gestes.', 'The most technical DALF paper, broken down into steps.', 'DALF 中最具技术性的一项，拆解为具体步骤。'),
      lessons: [
        {
          id: 'les_c1_1',
          moduleId: 'mod_c1_1',
          kind: 'text',
          durationMin: 13,
          title: t('Lire et confronter les documents', 'Reading and comparing the documents', '阅读与比对材料'),
          summary: t(
            'Avant d’écrire une ligne : extraire les idées, les croiser, construire un tableau.',
            'Before writing a single line: extract the ideas, cross-reference them, build a grid.',
            '动笔之前：提取观点、交叉比对、绘制表格。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'La [[synthese|synthèse de documents]] fournit deux à trois textes totalisant environ 1 000 mots, à restituer en 220 mots. Trois interdits absolus : donner son avis, citer littéralement, traiter les documents l’un après l’autre. Le jury attend un texte unique qui **croise** les sources.',
                'The [[synthese|document synthesis]] gives you two or three texts totalling about 1,000 words, to be restated in 220. Three absolute bans: giving your opinion, quoting literally, dealing with the documents one after another. The panel expects a single text that **cross-references** the sources.',
                '[[synthese|文献综述]]提供两到三篇合计约 1000 词的文章，要求用 220 词复述。三条绝对禁令：表达个人观点、逐字引用、逐篇分述。考官要求的是一篇**交叉整合**各来源的统一文本。',
              ),
            },
            { type: 'figure', figureId: 'synthese-c1', caption: t('Le circuit complet, du dossier au texte final.', 'The full circuit, from dossier to final text.', '从材料到成稿的完整流程。') },
            {
              type: 'keyvalues',
              emoji: '🎓',
              title: t('Les 2 h 10 de l’épreuve, minutées', 'The 2 h 10 of the paper, timed', '2 小时 10 分钟的时间分配'),
              entries: [
                { label: t('30 min — lecture active', '30 min — active reading', '30 分钟——精读'), value: t('Une couleur par idée, pas par document. Repérer ce qui se répète d’un texte à l’autre.', 'One colour per idea, not per document. Spot what recurs across texts.', '按观点而非按文章标色。找出各篇之间重复出现的内容。') },
                { label: t('20 min — tableau croisé', '20 min — cross-reference grid', '20 分钟——交叉表'), value: t('Lignes = idées, colonnes = documents. Le plan apparaît tout seul.', 'Rows = ideas, columns = documents. The plan emerges by itself.', '行为观点、列为文章。提纲会自然浮现。') },
                { label: t('50 min — rédaction', '50 min — writing', '50 分钟——写作'), value: t('Introduction, deux ou trois parties, pas de conclusion personnelle.', 'Introduction, two or three parts, no personal conclusion.', '引言、两到三部分，不写个人结论。') },
                { label: t('30 min — essai', '30 min — essay', '30 分钟——议论文'), value: t('La seconde partie de l’épreuve : 250 mots où l’avis personnel est cette fois demandé.', 'The second part of the paper: 250 words where your own view is required this time.', '考试第二部分：250 词，这次要求表达个人观点。') },
              ],
            },
            {
              type: 'table',
              emoji: '🧭',
              caption: t('Le tableau croisé, cœur de la méthode', 'The cross-reference grid, heart of the method', '交叉表：方法的核心'),
              headers: [t('Idée', 'Idea', '观点'), t('Doc 1', 'Doc 1', '文献 1'), t('Doc 2', 'Doc 2', '文献 2'), t('Doc 3', 'Doc 3', '文献 3')],
              rows: [
                [t('Constat partagé', 'Shared observation', '共同判断'), t('✓ développé', '✓ developed', '✓ 详述'), t('✓ mentionné', '✓ mentioned', '✓ 提及'), t('✓ chiffré', '✓ quantified', '✓ 数据支持')],
                [t('Cause avancée', 'Cause put forward', '提出的原因'), t('économique', 'economic', '经济'), t('culturelle', 'cultural', '文化'), t('—', '—', '—')],
                [t('Solution proposée', 'Proposed solution', '提出的方案'), t('—', '—', '—'), t('réglementaire', 'regulatory', '监管'), t('éducative', 'educational', '教育')],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '💡',
              title: t('Comment le plan émerge du tableau', 'How the plan emerges from the grid', '提纲如何从表格中产生'),
              text: t(
                'Une ligne cochée dans tous les documents devient un point de consensus, à placer en premier. Une ligne cochée dans un seul document est un point de divergence, à traiter ensuite. Le plan est donc dicté par le dossier, jamais choisi à l’avance.',
                'A row ticked in every document becomes a point of consensus, to be placed first. A row ticked in only one document is a divergence, to be handled next. The plan is therefore dictated by the dossier, never chosen in advance.',
                '在所有文献中都被勾选的一行是共识点，应放在最前。只在一篇中出现的是分歧点，随后处理。因此提纲由材料决定，绝不能事先设定。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔢',
              title: t('La lecture croisée, pas à pas', 'Cross-reading, step by step', '交叉阅读，步步为营'),
              hint: t('L’ordre évite le piège classique : résumer document par document.', 'The order avoids the classic trap: summarising document by document.', '这套顺序能避开经典陷阱：逐篇复述材料。'),
              widget: {
                kind: 'order',
                prompt: t('Du dossier au tableau de confrontation :', 'From the dossier to the comparison table:', '从材料到对照表：'),
                items: [
                  { id: 'o1', text: t('Lire la consigne d’abord : elle dit quoi chercher', 'Read the instructions first: they say what to look for', '先读题目要求：它告诉你要找什么') },
                  { id: 'o2', text: t('Survoler chaque document : source, date, thèse', 'Skim each document: source, date, thesis', '快览每篇材料：来源、日期、论点') },
                  { id: 'o3', text: t('Dégager deux ou trois axes communs aux documents', 'Draw out two or three axes shared by the documents', '提炼两三条贯穿各篇的主线') },
                  { id: 'o4', text: t('Classer chaque idée sous son axe, avec sa source', 'File each idea under its axis, with its source', '把每个观点连同出处归入主线') },
                  { id: 'o5', text: t('Repérer les points d’accord et de friction entre les sources', 'Spot where the sources agree and where they clash', '找出各来源的共识与分歧') },
                ],
                successNote: t(
                  'Le tableau par axes est ce qui distingue une synthèse d’une suite de résumés — c’est le cœur de la note.',
                  'The axis-based table is what separates a synthesis from a string of summaries — it is the heart of the mark.',
                  '按主线整理的对照表，正是综述与流水账的分界——也是得分的核心。',
                ),
              },
            },
          ],
        },
        {
          id: 'les_c1_2',
          moduleId: 'mod_c1_1',
          kind: 'text',
          durationMin: 13,
          title: t('Rédiger la synthèse : reformuler sans trahir', 'Writing the synthesis: rephrasing without betraying', '撰写综述：改写而不失真'),
          summary: t(
            'La frontière entre reformulation valorisée et paraphrase pénalisée.',
            'The line between rewarded reformulation and penalised paraphrase.',
            '受褒奖的改写与被扣分的照搬之间的界线。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'La [[reformulation|reformulation]] est la compétence centrale du C1. Reformuler, ce n’est pas remplacer trois mots par des synonymes — cela s’appelle une [[paraphrase|paraphrase]] et c’est sanctionné. C’est reconstruire l’idée dans une syntaxe entièrement différente.',
                '[[reformulation|Reformulation]] is the core C1 skill. It does not mean swapping three words for synonyms — that is a [[paraphrase|paraphrase]], and it is penalised. It means rebuilding the idea in an entirely different syntax.',
                '[[reformulation|改写]]是 C1 的核心能力。改写不是把三个词换成同义词——那叫[[paraphrase|照搬]]，是要扣分的。改写意味着用完全不同的句法重构原意。',
              ),
            },
            {
              type: 'examples',
              emoji: '📄',
              title: t('Trois degrés de reformulation', 'Three degrees of reformulation', '改写的三个层次'),
              items: [
                { fr: 'Original : « Les jeunes diplômés peinent à trouver un premier emploi stable. »', gloss: t('Le texte source.', 'The source text.', '原文。') },
                { fr: 'Les jeunes diplômés ont du mal à trouver un premier emploi stable.', gloss: t('Paraphrase : un seul mot changé. Pénalisé.', 'Paraphrase: one word changed. Penalised.', '照搬：只换了一个词。会被扣分。'), incorrect: true },
                { fr: 'L’insertion professionnelle durable des diplômés récents demeure problématique.', gloss: t('Reformulation : [[nominalisation|nominalisation]], lexique différent, syntaxe refondue.', 'Reformulation: [[nominalisation|nominalisation]], different vocabulary, recast syntax.', '改写：[[nominalisation|名词化]]、更换词汇、重构句法。') },
                { fr: 'Selon les trois auteurs, l’accès à un emploi pérenne constitue le principal obstacle rencontré à la sortie des études.', gloss: t('Reformulation + croisement des sources : niveau attendu.', 'Reformulation + cross-referencing: the expected level.', '改写并整合多源：达到要求水平。') },
              ],
            },
            {
              type: 'keyvalues',
              emoji: '🧭',
              title: t('Quatre techniques de reformulation', 'Four reformulation techniques', '四种改写技巧'),
              entries: [
                { label: t('[[nominalisation|Nominalisation]]', '[[nominalisation|Nominalisation]]', '[[nominalisation|名词化]]'), value: t('« les prix augmentent » → « la hausse des prix »', '“les prix augmentent” → “la hausse des prix”', '“les prix augmentent” → “la hausse des prix”') },
                { label: t('Changement de [[voix-passive|voix]]', 'Change of [[voix-passive|voice]]', '改变[[voix-passive|语态]]'), value: t('« le gouvernement a adopté la loi » → « la loi a été adoptée »', '“le gouvernement a adopté la loi” → “la loi a été adoptée”', '“le gouvernement a adopté la loi” → “la loi a été adoptée”') },
                { label: t('Changement de catégorie', 'Change of word class', '改变词类'), value: t('« il est nécessaire de » → « la nécessité de »', '“il est nécessaire de” → “la nécessité de”', '“il est nécessaire de” → “la nécessité de”') },
                { label: t('Généralisation', 'Generalisation', '概括'), value: t('« Berlin, Madrid et Rome » → « plusieurs capitales européennes »', '“Berlin, Madrid and Rome” → “several European capitals”', '“柏林、马德里和罗马” → “数个欧洲首都”') },
              ],
            },
            {
              type: 'interactive',
              emoji: '⏰',
              title: t('Les deux heures de la synthèse, minute par minute', 'The two hours of the synthesis, minute by minute', '综述的两小时，分秒安排'),
              hint: t(
                'Chaque étape a son budget. Le dépassement de la première coûte la dernière.',
                'Each stage has its budget. Overrunning the first costs you the last.',
                '每个阶段都有时间预算。第一步超时，最后一步就没了。',
              ),
              widget: {
                kind: 'timeline',
                points: [
                  {
                    id: 'read',
                    label: t('0 → 25 min', '0 → 25 min', '0 → 25 分钟'),
                    headline: t('Lecture et repérage', 'Reading and locating', '通读与定位'),
                    example: 'Une couleur par document, un mot-clé par paragraphe.',
                    gloss: t('On lit tout avant d’écrire quoi que ce soit. Commencer à rédiger au premier document produit un collage, pas une synthèse.', 'You read everything before writing anything. Starting to draft at the first document produces a collage, not a synthesis.', '写任何东西之前先通读全部材料。从第一份材料就开始动笔，得到的是拼贴而非综述。'),
                  },
                  {
                    id: 'grid',
                    label: t('25 → 50 min', '25 → 50 min', '25 → 50 分钟'),
                    headline: t('Tableau de confrontation', 'Confrontation grid', '对照表'),
                    example: 'Une ligne par idée, une colonne par document.',
                    gloss: t('Les convergences et les divergences apparaissent d’elles-mêmes : ce tableau est le plan, il ne reste qu’à le lire.', 'Convergences and divergences surface on their own: this grid is the outline, all that remains is to read it.', '一致与分歧会自行浮现：这张表就是提纲，剩下的只是读它。'),
                  },
                  {
                    id: 'write',
                    label: t('50 → 105 min', '50 → 105 min', '50 → 105 分钟'),
                    headline: t('Rédaction', 'Drafting', '撰写'),
                    example: 'Introduction, deux ou trois axes, pas de conclusion personnelle.',
                    gloss: t('On rédige d’un trait, sans revenir en arrière. Les corrections viennent après, jamais pendant.', 'You draft in one pass, without going back. Corrections come afterwards, never during.', '一气呵成，不回头修改。修订留到之后，绝不在写作中进行。'),
                  },
                  {
                    id: 'check',
                    label: t('105 → 120 min', '105 → 120 min', '105 → 120 分钟'),
                    headline: t('Relecture ciblée', 'Targeted proofreading', '定向复查'),
                    example: 'Accords, nombre de mots, attribution des idées.',
                    gloss: t('Trois passes rapides valent mieux qu’une relecture générale : on cherche une chose à la fois.', 'Three quick passes beat one general reread: you look for one thing at a time.', '三遍快速专项检查胜过一遍笼统重读：每次只找一类问题。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'danger',
              emoji: '🪤',
              title: t('Les trois fautes éliminatoires', 'The three disqualifying errors', '三类致命错误'),
              text: t(
                'Donner son opinion (« il me semble que… »), traiter les documents séparément (« le document 1 dit que… »), ou dépasser de plus de 10 % le nombre de mots. Chacune coûte plusieurs points, et la première dénature l’exercice.',
                'Giving your opinion (“il me semble que…”), treating the documents separately (“le document 1 dit que…”), or exceeding the word count by more than 10%. Each costs several marks, and the first distorts the whole exercise.',
                '表达个人观点（“il me semble que…”）、逐篇分述（“le document 1 dit que…”）、或超出字数 10% 以上。每一项都会扣掉数分，其中第一项更是完全违背题意。',
              ),
            },
            {
              type: 'examples',
              emoji: '📄',
              title: t('Formules pour attribuer sans citer', 'Formulas to attribute without quoting', '不引用而标明出处的句式'),
              items: [
                { fr: 'Les trois auteurs s’accordent sur…', gloss: t('Point de consensus : ouvre la première partie.', 'Point of consensus: opens the first part.', '共识点：用作第一部分的开头。') },
                { fr: 'Si le premier article insiste sur…, le second privilégie…', gloss: t('Divergence exprimée en une phrase, sans plan par document.', 'Divergence expressed in one sentence, with no per-document plan.', '一句话呈现分歧，避免按文献分述。') },
                { fr: 'Une nuance apparaît toutefois chez…', gloss: t('Introduire une [[nuance|nuance]] tout en restant neutre.', 'Introducing a [[nuance|nuance]] while staying neutral.', '在保持中立的同时引入[[nuance|细微差别]]。') },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mod_c1_2',
      courseId: ID,
      title: t('L’oral et le registre', 'Speaking and register', '口语与语体'),
      summary: t('L’exposé sur dossier et la langue soutenue qu’il exige.', 'The dossier-based presentation and the formal language it demands.', '基于材料的陈述及其所需的正式语言。'),
      lessons: [
        {
          id: 'les_c1_3',
          moduleId: 'mod_c1_2',
          kind: 'text',
          durationMin: 12,
          title: t('L’exposé à partir d’un dossier', 'The dossier-based presentation', '基于材料的口头陈述'),
          summary: t(
            'Une heure de préparation, dix minutes d’exposé, quinze minutes d’entretien.',
            'One hour of preparation, a ten-minute presentation, fifteen minutes of discussion.',
            '一小时准备、十分钟陈述、十五分钟问答。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'L’oral du C1 reprend la logique de la synthèse, mais à l’oral et avec une prise de position finale. L’[[exposé|exposé]] doit être structuré comme un devoir : introduction avec [[problematique|problématique]], développement en deux parties, conclusion assumée.',
                'The C1 speaking test follows the logic of the synthesis, but orally and with a final stance. The [[exposé|presentation]] must be structured like an essay: introduction with a [[problematique|central question]], development in two parts, an owned conclusion.',
                'C1 口试沿用综述的逻辑，但改为口头形式，并需在最后表明立场。[[exposé|陈述]]应像论文一样组织：引言提出[[problematique|核心问题]]，主体分两部分展开，结论明确表态。',
              ),
            },
            {
              type: 'list',
              ordered: true,
              items: [
                t('**Introduction (1 min)** : présenter le dossier en une phrase, poser la problématique, annoncer le plan.', '**Introduction (1 min)**: present the dossier in one sentence, state the central question, announce the plan.', '**引言（1 分钟）**：用一句话介绍材料，提出核心问题，宣布提纲。'),
                t('**Développement (7 min)** : deux parties équilibrées, chacune appuyée sur au moins deux documents différents.', '**Development (7 min)**: two balanced parts, each supported by at least two different documents.', '**主体（7 分钟）**：两部分篇幅相当，每部分至少引用两份不同材料。'),
                t('**Conclusion (2 min)** : répondre à la problématique et prendre position clairement.', '**Conclusion (2 min)**: answer the central question and take a clear stance.', '**结论（2 分钟）**：回答核心问题并明确表态。'),
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('L’erreur qui coûte le plus', 'The costliest error', '代价最大的错误'),
              text: t(
                'Lire ses notes. Le jury sanctionne immédiatement un exposé récité. Préparez des mots-clés, jamais des phrases : vous devez regarder les examinateurs et reformuler en direct. C’est précisément cette capacité qui définit le C1.',
                'Reading your notes. The panel immediately penalises a recited presentation. Prepare keywords, never sentences: you must look at the examiners and reformulate live. That capacity is precisely what defines C1.',
                '照着笔记念。考官会立即对背诵式陈述扣分。只准备关键词，绝不写完整句子：你必须看着考官并即时组织语言。这正是 C1 所定义的能力。',
              ),
            },
            {
              type: 'examples',
              emoji: '🎚️',
              title: t('Formules d’exposé en registre soutenu', 'Presentation formulas in a formal register', '正式语体的陈述句式'),
              items: [
                { fr: 'Ce dossier réunit trois documents qui interrogent, chacun à sa manière, la place de…', gloss: t('Présentation globale, sans énumération plate.', 'Global presentation, avoiding a flat list.', '整体介绍，避免平铺直叙的罗列。') },
                { fr: 'La question qui se pose dès lors est de savoir si…', gloss: t('Problématique en une phrase.', 'Central question in one sentence.', '一句话提出核心问题。') },
                { fr: 'Nous examinerons dans un premier temps…, avant d’envisager…', gloss: t('Annonce de plan, marque de structuration.', 'Plan announcement, a mark of structure.', '宣布提纲，体现结构意识。') },
                { fr: 'Il ressort de cette confrontation que…', gloss: t('Transition vers la conclusion.', 'Transition to the conclusion.', '过渡到结论。') },
              ],
            },
            {
              type: 'interactive',
              emoji: '🔢',
              title: t('L’exposé, de la préparation à la chute', 'The presentation, from prep to closing line', '从准备到收尾的陈述'),
              hint: t('Une heure de préparation se découpe, elle ne se subit pas.', 'One hour of preparation is carved up, not endured.', '一小时的准备时间要切分使用，不能被它拖着走。'),
              widget: {
                kind: 'order',
                prompt: t('Comment employer l’heure de préparation :', 'How to spend the preparation hour:', '这一小时该怎么用：'),
                items: [
                  { id: 'o1', text: t('Quinze minutes : lire le dossier, crayon en main', 'Fifteen minutes: read the dossier, pencil in hand', '十五分钟：手执铅笔读材料') },
                  { id: 'o2', text: t('Dix minutes : formuler la problématique', 'Ten minutes: shape the problématique', '十分钟：拟定论题') },
                  { id: 'o3', text: t('Vingt minutes : bâtir le plan et choisir les exemples', 'Twenty minutes: build the plan and pick the examples', '二十分钟：搭提纲、选例子') },
                  { id: 'o4', text: t('Dix minutes : rédiger en entier l’introduction et la conclusion', 'Ten minutes: write the introduction and conclusion in full', '十分钟：把开头和结尾完整写出') },
                  { id: 'o5', text: t('Cinq minutes : préparer la première phrase de chaque partie', 'Five minutes: prepare the first sentence of each part', '五分钟：备好每部分的第一句话') },
                ],
                successNote: t(
                  'Introduction et conclusion rédigées mot à mot : ce sont les deux moments où le trac frappe, et les deux que le jury retient.',
                  'Introduction and conclusion written out word for word: those are the two moments nerves strike, and the two the panel remembers.',
                  '开头和结尾要逐字写好：这是怯场最凶的两个时刻，也是考官记得最牢的两处。',
                ),
              },
            },
          ],
        },
        {
          id: 'les_c1_4',
          moduleId: 'mod_c1_2',
          kind: 'text',
          durationMin: 11,
          title: t('Le registre soutenu et les nuances', 'Formal register and nuance', '正式语体与细微差别'),
          summary: t(
            'Ce qui sépare un excellent B2 d’un C1 : la précision lexicale et la maîtrise du degré.',
            'What separates an excellent B2 from a C1: lexical precision and control of degree.',
            '优秀的 B2 与 C1 之别：词汇的精确度与程度的把控。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Au C1, la correction grammaticale est supposée acquise. Ce qui est évalué, c’est la finesse : choisir le mot exact plutôt que le mot approchant, doser l’affirmation, employer le [[registre|registre]] adapté à la situation.',
                'At C1, grammatical accuracy is taken for granted. What is assessed is subtlety: choosing the exact word rather than the approximate one, calibrating assertion, using the [[registre|register]] fitting the situation.',
                '在 C1 阶段，语法正确被视为理所当然。真正被评估的是精细度：选用准确而非近似的词、拿捏断言的分寸、使用与场合相符的[[registre|语体]]。',
              ),
            },
            {
              type: 'table',
              emoji: '📊',
              caption: t('Trois registres, un même contenu', 'Three registers, the same content', '三种语体，同一内容'),
              headers: [t('Familier', 'Informal', '口语'), t('Courant', 'Standard', '通用'), t('[[soutenu|Soutenu]]', '[[soutenu|Formal]]', '[[soutenu|正式]]')],
              rows: [
                [t('C’est nul.', 'C’est nul.', 'C’est nul.'), t('Ce n’est pas satisfaisant.', 'Ce n’est pas satisfaisant.', 'Ce n’est pas satisfaisant.'), t('Cela laisse à désirer.', 'Cela laisse à désirer.', 'Cela laisse à désirer.')],
                [t('Il a plein de fric.', 'Il a plein de fric.', 'Il a plein de fric.'), t('Il est riche.', 'Il est riche.', 'Il est riche.'), t('Il jouit d’une aisance certaine.', 'Il jouit d’une aisance certaine.', 'Il jouit d’une aisance certaine.')],
                [t('On va voir.', 'On va voir.', 'On va voir.'), t('Nous verrons.', 'Nous verrons.', 'Nous verrons.'), t('La question reste à trancher.', 'La question reste à trancher.', 'La question reste à trancher.')],
              ],
            },
            {
              type: 'keyvalues',
              emoji: '🗂️',
              title: t('Doser l’affirmation', 'Calibrating assertion', '拿捏断言的分寸'),
              entries: [
                { label: t('Certitude', 'Certainty', '确定'), value: t('Il est incontestable que… / Force est de constater que…', 'Il est incontestable que… / Force est de constater que…', 'Il est incontestable que… / Force est de constater que…') },
                { label: t('Forte probabilité', 'Strong probability', '高度可能'), value: t('Tout porte à croire que… / Il y a fort à parier que…', 'Tout porte à croire que… / Il y a fort à parier que…', 'Tout porte à croire que… / Il y a fort à parier que…') },
                { label: t('Réserve', 'Reservation', '保留'), value: t('Il conviendrait de nuancer… / On peut s’interroger sur…', 'Il conviendrait de nuancer… / On peut s’interroger sur…', 'Il conviendrait de nuancer… / On peut s’interroger sur…') },
                { label: t('Désaccord poli', 'Polite disagreement', '委婉反对'), value: t('Cette lecture ne va pas de soi. / L’argument mérite d’être discuté.', 'Cette lecture ne va pas de soi. / L’argument mérite d’être discuté.', 'Cette lecture ne va pas de soi. / L’argument mérite d’être discuté.') },
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '✅',
              title: t('L’exercice quotidien recommandé', 'The recommended daily exercise', '建议的日常练习'),
              text: t(
                'Prenez chaque jour, {prenom}, une phrase d’un journal français et réécrivez-la dans les trois registres. Dix minutes par jour pendant un mois valent mieux que trois heures de listes de vocabulaire : c’est la manipulation, non la mémorisation, qui installe le [[registre|registre]].',
                'Take one sentence from a French newspaper every day, {prenom}, and rewrite it in all three registers. Ten minutes a day for a month beats three hours of vocabulary lists: it is manipulation, not memorisation, that installs [[registre|register]].',
                '{prenom}，每天从法语报纸中取一句话，用三种语体各改写一遍。每天十分钟坚持一个月，胜过三小时背词表：真正内化[[registre|语体]]的是运用，而非记忆。',
              ),
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('Trouvez le mot du registre soutenu', 'Find the formal-register word', '找出正式语体的用词'),
              hint: t('Même sens, autre étage de la langue.', 'Same meaning, another storey of the language.', '意思相同，语言的楼层不同。'),
              widget: {
                kind: 'fill',
                prompt: t('Quelle variante appartient au registre soutenu ?', 'Which variant belongs to the formal register?', '哪个说法属于正式语体？'),
                items: [
                  {
                    id: 'f1',
                    before: 'Le rapport',
                    after: 'plusieurs difficultés de mise en œuvre.',
                    options: ['met en évidence', 'montre bien', 'fait voir'],
                    answer: 'met en évidence',
                    why: t('« Mettre en évidence » est la locution des écrits académiques ; « montrer bien » relève du courant.', '“Mettre en évidence” is the phrase of academic writing; “montrer bien” belongs to everyday register.', '“mettre en évidence” 是学术写作用语；“montrer bien” 属于日常语体。'),
                  },
                  {
                    id: 'f2',
                    before: 'Les auteurs',
                    after: 'que cette mesure reste insuffisante.',
                    options: ['estiment', 'pensent', 'trouvent'],
                    answer: 'estiment',
                    why: t('« Estimer » signale un jugement pesé ; « penser » et « trouver » sont neutres ou familiers dans une synthèse.', '“Estimer” signals a weighed judgement; “penser” and “trouver” read as neutral or casual in a synthesis.', '“estimer” 表示经过权衡的判断；在综述中 “penser” 和 “trouver” 显得平淡甚至随便。'),
                  },
                  {
                    id: 'f3',
                    before: 'Cette hausse',
                    after: 'de plusieurs facteurs conjugués.',
                    options: ['résulte', 'vient', 'est à cause'],
                    answer: 'résulte',
                    why: t('« Résulter de » est la cause au registre soutenu. « Est à cause » n’est correct dans aucun registre.', '“Résulter de” is cause in the formal register. “Est à cause” is wrong in every register.', '“résulter de” 是正式语体的因果表达。“est à cause” 在任何语体里都不对。'),
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'mod_c1_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Huit questions sur la synthèse, l’exposé et le registre.', 'Eight questions on synthesis, presentation and register.', '八道题，考查综述、陈述与语体。'),
      lessons: [
        {
          id: 'les_c1_q',
          moduleId: 'mod_c1_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_dalf_c1',
          title: t('Quiz — DALF C1', 'Quiz — DALF C1', '测验 — DALF C1'),
          summary: t('8 questions sur la méthode de la synthèse et de l’exposé.', '8 questions on the synthesis and presentation methods.', '8 道题，涵盖综述与陈述的方法。'),
        },
      ],
    },
  ],
};
