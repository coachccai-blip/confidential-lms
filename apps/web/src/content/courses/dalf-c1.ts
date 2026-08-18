import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_dalf_c1';

export const dalfC1Course: Course = {
  id: ID,
  slug: 'dalf-c1',
  category: 'dalf-c1',
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
              title: t('Comment le plan émerge du tableau', 'How the plan emerges from the grid', '提纲如何从表格中产生'),
              text: t(
                'Une ligne cochée dans tous les documents devient un point de consensus, à placer en premier. Une ligne cochée dans un seul document est un point de divergence, à traiter ensuite. Le plan est donc dicté par le dossier, jamais choisi à l’avance.',
                'A row ticked in every document becomes a point of consensus, to be placed first. A row ticked in only one document is a divergence, to be handled next. The plan is therefore dictated by the dossier, never chosen in advance.',
                '在所有文献中都被勾选的一行是共识点，应放在最前。只在一篇中出现的是分歧点，随后处理。因此提纲由材料决定，绝不能事先设定。',
              ),
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
              title: t('Quatre techniques de reformulation', 'Four reformulation techniques', '四种改写技巧'),
              entries: [
                { label: t('[[nominalisation|Nominalisation]]', '[[nominalisation|Nominalisation]]', '[[nominalisation|名词化]]'), value: t('« les prix augmentent » → « la hausse des prix »', '“les prix augmentent” → “la hausse des prix”', '“les prix augmentent” → “la hausse des prix”') },
                { label: t('Changement de [[voix-passive|voix]]', 'Change of [[voix-passive|voice]]', '改变[[voix-passive|语态]]'), value: t('« le gouvernement a adopté la loi » → « la loi a été adoptée »', '“le gouvernement a adopté la loi” → “la loi a été adoptée”', '“le gouvernement a adopté la loi” → “la loi a été adoptée”') },
                { label: t('Changement de catégorie', 'Change of word class', '改变词类'), value: t('« il est nécessaire de » → « la nécessité de »', '“il est nécessaire de” → “la nécessité de”', '“il est nécessaire de” → “la nécessité de”') },
                { label: t('Généralisation', 'Generalisation', '概括'), value: t('« Berlin, Madrid et Rome » → « plusieurs capitales européennes »', '“Berlin, Madrid and Rome” → “several European capitals”', '“柏林、马德里和罗马” → “数个欧洲首都”') },
              ],
            },
            {
              type: 'callout',
              tone: 'danger',
              title: t('Les trois fautes éliminatoires', 'The three disqualifying errors', '三类致命错误'),
              text: t(
                'Donner son opinion (« il me semble que… »), traiter les documents séparément (« le document 1 dit que… »), ou dépasser de plus de 10 % le nombre de mots. Chacune coûte plusieurs points, et la première dénature l’exercice.',
                'Giving your opinion (“il me semble que…”), treating the documents separately (“le document 1 dit que…”), or exceeding the word count by more than 10%. Each costs several marks, and the first distorts the whole exercise.',
                '表达个人观点（“il me semble que…”）、逐篇分述（“le document 1 dit que…”）、或超出字数 10% 以上。每一项都会扣掉数分，其中第一项更是完全违背题意。',
              ),
            },
            {
              type: 'examples',
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
              title: t('L’erreur qui coûte le plus', 'The costliest error', '代价最大的错误'),
              text: t(
                'Lire ses notes. Le jury sanctionne immédiatement un exposé récité. Préparez des mots-clés, jamais des phrases : vous devez regarder les examinateurs et reformuler en direct. C’est précisément cette capacité qui définit le C1.',
                'Reading your notes. The panel immediately penalises a recited presentation. Prepare keywords, never sentences: you must look at the examiners and reformulate live. That capacity is precisely what defines C1.',
                '照着笔记念。考官会立即对背诵式陈述扣分。只准备关键词，绝不写完整句子：你必须看着考官并即时组织语言。这正是 C1 所定义的能力。',
              ),
            },
            {
              type: 'examples',
              title: t('Formules d’exposé en registre soutenu', 'Presentation formulas in a formal register', '正式语体的陈述句式'),
              items: [
                { fr: 'Ce dossier réunit trois documents qui interrogent, chacun à sa manière, la place de…', gloss: t('Présentation globale, sans énumération plate.', 'Global presentation, avoiding a flat list.', '整体介绍，避免平铺直叙的罗列。') },
                { fr: 'La question qui se pose dès lors est de savoir si…', gloss: t('Problématique en une phrase.', 'Central question in one sentence.', '一句话提出核心问题。') },
                { fr: 'Nous examinerons dans un premier temps…, avant d’envisager…', gloss: t('Annonce de plan, marque de structuration.', 'Plan announcement, a mark of structure.', '宣布提纲，体现结构意识。') },
                { fr: 'Il ressort de cette confrontation que…', gloss: t('Transition vers la conclusion.', 'Transition to the conclusion.', '过渡到结论。') },
              ],
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
              title: t('L’exercice quotidien recommandé', 'The recommended daily exercise', '建议的日常练习'),
              text: t(
                'Prenez chaque jour une phrase d’un journal français et réécrivez-la dans les trois registres. Dix minutes par jour pendant un mois valent mieux que trois heures de listes de vocabulaire : c’est la manipulation, non la mémorisation, qui installe le [[registre|registre]].',
                'Take one sentence from a French newspaper every day and rewrite it in all three registers. Ten minutes a day for a month beats three hours of vocabulary lists: it is manipulation, not memorisation, that installs [[registre|register]].',
                '每天从法语报纸中取一句话，用三种语体各改写一遍。每天十分钟坚持一个月，胜过三小时背词表：真正内化[[registre|语体]]的是运用，而非记忆。',
              ),
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
