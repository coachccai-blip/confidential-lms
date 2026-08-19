import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_c2_litterature';

export const c2LitteratureCourse: Course = {
  id: ID,
  slug: 'c2-litterature',
  level: 'C2',
  accentFrom: '#c4b5fd',
  accentTo: '#1e3a8a',
  status: 'published',
  title: t('Lire la littérature française', 'Reading French literature', '阅读法国文学'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Les temps du récit littéraire, l’analyse stylistique et le commentaire composé : lire un texte français comme un lecteur cultivé, non comme un décodeur.',
    'The tenses of literary narrative, stylistic analysis and the commentaire composé: reading a French text as a cultivated reader rather than a decoder.',
    '文学叙事的时态、文体分析与文本细读：像有素养的读者那样阅读法语文本，而非像解码者。',
  ),
  tags: [t('Littérature', 'Literature', '文学'), t('Analyse', 'Analysis', '分析')],
  modules: [
    {
      id: 'mod_c2li_1',
      courseId: ID,
      title: t('Lire, analyser, commenter', 'Reading, analysing, commenting', '阅读、分析、评论'),
      summary: t(
        'Les temps du récit, les figures de style, la méthode du commentaire.',
        'Narrative tenses, figures of style, the method of the commentary.',
        '叙事时态、修辞格、评论方法。',
      ),
      lessons: [
        {
          id: 'les_c2li_1',
          moduleId: 'mod_c2li_1',
          kind: 'text',
          durationMin: 14,
          title: t('Les temps du récit littéraire', 'The tenses of literary narrative', '文学叙事的时态'),
          summary: t(
            'Passé simple, imparfait, plus-que-parfait, passé antérieur : le système que l’oral ignore.',
            'Passé simple, imparfait, pluperfect, past anterior: the system speech ignores.',
            '简单过去时、未完成过去时、愈过去时、先过去时：口语从不使用的一套体系。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le **passé simple** a disparu de la conversation depuis plus d’un siècle, mais il règne toujours sur le récit écrit : romans, contes, biographies, articles historiques. On ne le produit presque jamais ; on doit le reconnaître instantanément.',
                'The **passé simple** vanished from conversation more than a century ago, yet it still rules written narrative: novels, tales, biographies, historical articles. You will almost never produce it; you must recognise it instantly.',
                '**简单过去时**在一个多世纪前就已退出口语，却依然统治着书面叙事：小说、故事、传记、历史文章。你几乎永远不必使用它，但必须能瞬间识别。',
              ),
            },
            {
              type: 'conjugation',
              emoji: '💡',
              title: t('Le passé simple : trois modèles', 'The passé simple: three patterns', '简单过去时的三种模式'),
              note: t(
                'Les formes de troisième personne — **il fit**, **ils firent** — représentent à elles seules la grande majorité des occurrences réelles : le récit est presque toujours à la troisième personne.',
                'The third-person forms — **il fit**, **ils firent** — make up the vast majority of real occurrences on their own: narrative is nearly always in the third person.',
                '第三人称形式——**il fit**、**ils firent**——本身就占了实际出现频率的绝大部分：叙事几乎总用第三人称。',
              ),
              columns: [t('parler', 'parler', 'parler'), t('finir', 'finir', 'finir'), t('être', 'être', 'être'), t('avoir', 'avoir', 'avoir')],
              rows: [
                { pronoun: 'je / j’', forms: ['parlai', 'finis', 'fus', 'eus'] },
                { pronoun: 'tu', forms: ['parlas', 'finis', 'fus', 'eus'] },
                { pronoun: 'il / elle', forms: ['parla', 'finit', 'fut', 'eut'] },
                { pronoun: 'nous', forms: ['parlâmes', 'finîmes', 'fûmes', 'eûmes'] },
                { pronoun: 'vous', forms: ['parlâtes', 'finîtes', 'fûtes', 'eûtes'] },
                { pronoun: 'ils / elles', forms: ['parlèrent', 'finirent', 'furent', 'eurent'] },
              ],
            },
            {
              type: 'interactive',
              emoji: '📜',
              title: t('La roue du passé simple', 'The wheel of the passé simple', '简单过去时转轮'),
              hint: t(
                'Cliquez une personne : les deux formes du bas concentrent l’essentiel des occurrences réelles.',
                'Click a person: the two bottom forms account for nearly all real occurrences.',
                '点击任一人称：下方两个形式几乎涵盖了全部实际用例。',
              ),
              widget: {
                kind: 'wheel',
                verb: 'être',
                persons: [
                  { pronoun: 'je', form: 'fus', phonetic: '[ʒə fy]', note: t('Rarissime hors du récit à la première personne, très littéraire.', 'Extremely rare outside first-person narrative, and highly literary.', '除第一人称叙事外极为罕见，文学色彩浓厚。') },
                  { pronoun: 'tu', form: 'fus', phonetic: '[ty fy]', note: t('Pratiquement introuvable : le passé simple ne s’adresse à personne.', 'Practically never found: the passé simple addresses nobody.', '几乎见不到：简单过去时不用于对话。') },
                  { pronoun: 'il / elle', form: 'fut', phonetic: '[il fy]', note: t('La forme reine. Le récit est presque toujours à la troisième personne du singulier.', 'The dominant form. Narrative is nearly always in the third person singular.', '最主要的形式。叙事几乎总用第三人称单数。') },
                  { pronoun: 'nous', form: 'fûmes', phonetic: '[nu fym]', note: t('L’accent circonflexe marque toutes les 1res personnes du pluriel au passé simple.', 'The circumflex marks every first-person plural in the passé simple.', '长音符标示简单过去时所有第一人称复数形式。') },
                  { pronoun: 'vous', form: 'fûtes', phonetic: '[vu fyt]', note: t('Forme de récit soutenu, essentiellement dans les textes anciens.', 'A formal narrative form, essentially in older texts.', '正式叙事形式，主要见于古旧文本。') },
                  { pronoun: 'ils / elles', form: 'furent', phonetic: '[il fyʁ]', note: t('La seconde forme réellement fréquente, avec « il fut ».', 'The second genuinely frequent form, alongside “il fut”.', '与 “il fut” 并列，是另一个真正高频的形式。') },
                ],
              },
            },
            {
              type: 'table',
              emoji: '✍️',
              caption: t('Répartition des temps dans un récit écrit', 'How tenses divide up a written narrative', '书面叙事中的时态分工'),
              headers: [t('Temps', 'Tense', '时态'), t('Fonction', 'Function', '功能'), t('Équivalent oral', 'Spoken equivalent', '口语对应')],
              rows: [
                [t('Passé simple', 'Passé simple', '简单过去时'), t('l’événement qui fait avancer le récit', 'the event that moves the narrative on', '推进叙事的事件'), t('passé composé', 'passé composé', '复合过去时')],
                [t('Imparfait', 'Imparfait', '未完成过去时'), t('le décor, l’habitude, l’arrière-plan', 'the setting, habit, background', '背景、习惯、衬托'), t('imparfait — identique', 'imparfait — the same', '未完成过去时 —— 相同')],
                [t('Plus-que-parfait', 'Pluperfect', '愈过去时'), t('un fait antérieur à l’événement', 'a fact prior to the event', '先于事件的事实'), t('plus-que-parfait — identique', 'pluperfect — the same', '愈过去时 —— 相同')],
                [t('Passé antérieur', 'Past anterior', '先过去时'), t('l’immédiate antériorité après « dès que », « à peine »', 'immediate anteriority after “dès que”, “à peine”', '紧接在 “dès que”“à peine” 之后的先行动作'), t('inexistant à l’oral', 'does not exist in speech', '口语中不存在')],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🔄',
              title: t('Le présent de narration', 'The narrative present', '叙述现在时'),
              text: t(
                'Un récit au passé peut basculer soudainement au présent pour rapprocher une scène du lecteur : « Il marchait depuis une heure. Soudain, une porte s’ouvre. » Ce n’est jamais une faute de concordance : c’est un effet de mise en scène, et un correcteur C2 attend que vous le reconnaissiez comme tel.',
                'A past narrative can suddenly switch to the present to bring a scene closer to the reader: “Il marchait depuis une heure. Soudain, une porte s’ouvre.” This is never a sequence-of-tenses error: it is a staging effect, and a C2 examiner expects you to recognise it as such.',
                '过去时的叙述可以突然转入现在时，把某个场景推到读者眼前：“Il marchait depuis une heure. Soudain, une porte s’ouvre.” 这绝非时态呼应的错误，而是一种舞台化效果，C2 阅卷人期待你能识别出来。',
              ),
            },
            {
              type: 'quote',
              text: t(
                'Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire : « Je m’endors. »',
                'For a long time, I used to go to bed early. Sometimes, my candle scarcely out, my eyes would close so quickly that I had no time to say to myself: “I am falling asleep.”',
                '在很长一段时间里，我都很早就上床睡觉。有时，蜡烛刚一熄灭，我的眼睛就闭得那么快，来不及对自己说一声：“我要睡着了。”',
              ),
              source: t('Marcel Proust, Du côté de chez Swann, 1913', 'Marcel Proust, Du côté de chez Swann, 1913', '马塞尔·普鲁斯特《在斯万家那边》，1913 年'),
            },
            {
              type: 'paragraph',
              text: t(
                'Cette ouverture célèbre mêle passé composé (« je me suis couché »), imparfait d’habitude (« se fermaient », « n’avais pas ») et discours direct au présent. Proust n’emploie pas le passé simple : il installe d’emblée un temps de la mémoire, répétitif et sans bord net, plutôt qu’un temps de l’événement.',
                'This famous opening mixes passé composé (“je me suis couché”), habitual imperfect (“se fermaient”, “n’avais pas”) and direct speech in the present. Proust does not use the passé simple: from the outset he installs a time of memory — repetitive and without sharp edges — rather than a time of events.',
                '这段著名的开篇混用了复合过去时（“je me suis couché”）、表习惯的未完成过去时（“se fermaient”“n’avais pas”）以及现在时的直接引语。普鲁斯特没有使用简单过去时：他一开始就确立的是记忆的时间——反复而没有清晰边界——而非事件的时间。',
              ),
            },
          ],
        },
        {
          id: 'les_c2li_2',
          moduleId: 'mod_c2li_1',
          kind: 'text',
          durationMin: 13,
          title: t('Repérer et nommer les figures de style', 'Spotting and naming figures of style', '识别与命名修辞格'),
          summary: t(
            'Les figures qui reviennent le plus souvent, et l’erreur de les collectionner sans les interpréter.',
            'The figures that recur most often, and the mistake of collecting them without interpreting them.',
            '最常出现的修辞格，以及只罗列而不阐释的错误。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Nommer une figure ne vaut rien en soi. Ce qui compte, c’est de dire **ce qu’elle produit** dans ce texte précis. Un commentaire qui énumère « métaphore, anaphore, chiasme » sans conséquence interprétative est jugé descriptif, donc faible.',
                'Naming a figure is worth nothing in itself. What counts is stating **what it produces** in this particular text. A commentary that lists “metaphor, anaphora, chiasmus” with no interpretive consequence is judged descriptive, and therefore weak.',
                '给修辞格命名本身毫无价值。关键在于说明它在这个具体文本中**产生了什么效果**。若评论只罗列“隐喻、首语重复、交错配列”而不作阐释，会被判为描述性的，因而薄弱。',
              ),
            },
            {
              type: 'table',
              emoji: '📖',
              caption: t('Les figures à connaître', 'Figures worth knowing', '值得掌握的修辞格'),
              headers: [t('Figure', 'Figure', '修辞格'), t('Définition', 'Definition', '定义'), t('Exemple', 'Example', '例子')],
              rows: [
                [t('Métaphore', 'Metaphor', '隐喻'), t('comparaison sans outil de comparaison', 'a comparison with no comparison marker', '不带比较词的比喻'), t('« Cet homme est un roc. »', '“Cet homme est un roc.”', '“Cet homme est un roc.”')],
                [t('Métonymie', 'Metonymy', '转喻'), t('le contenant pour le contenu, la partie pour le tout', 'container for content, part for whole', '以容器代内容、以部分代整体'), t('« Boire un verre », « lire un Zola »', '“Boire un verre”, “lire un Zola”', '“Boire un verre”“lire un Zola”')],
                [t('Anaphore', 'Anaphora', '首语重复'), t('répétition en tête de plusieurs segments', 'repetition at the start of several segments', '在多个片段开头重复'), t('« Rien de ce qui… Rien de ce que… »', '“Rien de ce qui… Rien de ce que…”', '“Rien de ce qui… Rien de ce que…”')],
                [t('Chiasme', 'Chiasmus', '交错配列'), t('structure croisée AB / BA', 'crossed AB / BA structure', 'AB / BA 的交叉结构'), t('« Il faut manger pour vivre et non vivre pour manger. »', '“Il faut manger pour vivre et non vivre pour manger.”', '“Il faut manger pour vivre et non vivre pour manger.”')],
                [t('Oxymore', 'Oxymoron', '矛盾修辞'), t('deux termes contradictoires accolés', 'two contradictory terms joined', '两个矛盾词并置'), t('« Cette obscure clarté »', '“Cette obscure clarté”', '“Cette obscure clarté”')],
                [t('Hypallage', 'Hypallage', '移就'), t('un adjectif déplacé vers un mot voisin', 'an adjective shifted onto a neighbouring word', '形容词移用于邻近的词'), t('« Ce marchand assis à son comptoir morose »', '“Ce marchand assis à son comptoir morose”', '“Ce marchand assis à son comptoir morose”')],
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '💬',
              title: t('La formule qui transforme un relevé en analyse', 'The formula that turns a list into an analysis', '把罗列变成分析的句式'),
              text: t(
                'Utilisez systématiquement le schéma, {prenom} : **procédé → citation → effet → sens**. « L’anaphore de "rien" (l. 4-7) martèle la négation et transforme la description en réquisitoire. » Sans le troisième et le quatrième temps, il n’y a pas d’analyse.',
                'Systematically use the pattern, {prenom}: **device → quotation → effect → meaning**. “The anaphora of ‘rien’ (ll. 4-7) hammers the negation home and turns the description into an indictment.” Without the third and fourth steps there is no analysis.',
                '{prenom}，请始终使用这一模式：**手法 → 引文 → 效果 → 意义**。“‘rien’ 的首语重复（第 4—7 行）反复敲击否定，把描写变成了控诉。”缺少第三、第四步就不成其为分析。',
              ),
            },
            {
              type: 'examples',
              emoji: '💬',
              title: t('Du relevé à l’interprétation', 'From listing to interpretation', '从罗列到阐释'),
              items: [
                { fr: 'On relève une métaphore filée au deuxième paragraphe.', gloss: t('Constat pur : aucune valeur analytique.', 'A bare observation: no analytical value.', '纯粹的观察：没有分析价值。'), incorrect: true },
                { fr: 'La métaphore filée de la mer, courant sur tout le paragraphe, dissout les contours du personnage et prépare sa disparition finale.', gloss: t('Procédé, portée, effet, lien avec l’ensemble du texte.', 'Device, scope, effect, link to the text as a whole.', '手法、范围、效果，以及与全文的关联。') },
                { fr: 'L’auteur utilise beaucoup d’adjectifs.', gloss: t('Observation trop générale pour signifier quoi que ce soit.', 'Too general an observation to mean anything.', '观察过于笼统，说明不了任何问题。'), incorrect: true },
                { fr: 'L’accumulation d’adjectifs de couleur froide installe une distance ironique entre le narrateur et la scène qu’il décrit.', gloss: t('Le fait linguistique est relié à une posture narrative.', 'The linguistic fact is tied to a narrative stance.', '语言事实与叙述姿态相连。') },
              ],
            },
            {
              type: 'interactive',
              emoji: '🔗',
              title: t('La figure derrière la phrase', 'The figure behind the sentence', '句子背后的修辞格'),
              hint: t('Nommer, citer, dire l’effet : ici, on s’entraîne à nommer.', 'Name, quote, state the effect: here you practise naming.', '命名、引用、说效果：这里先练命名。'),
              widget: {
                kind: 'pairs',
                prompt: t('Quelle figure se cache ici ?', 'Which figure hides here?', '这里藏着哪种修辞格？'),
                pairs: [
                  { id: 'p1', left: '« Paris ouvrit ses ailes. »', right: t('la personnification : la ville agit comme un être vivant', 'personification: the city acts like a living being', '拟人：城市像生命体一样行动') },
                  { id: 'p2', left: '« Je me meurs, je suis mort, je suis enterré. »', right: t('la gradation : chaque terme dépasse le précédent', 'gradation: each term outdoes the last', '递进：一词强过一词') },
                  { id: 'p3', left: '« Cette obscure clarté qui tombe des étoiles »', right: t('l’oxymore : deux termes contradictoires soudés', 'oxymoron: two contradictory terms welded together', '矛盾修辞：两个相反的词焊在一起') },
                  { id: 'p4', left: '« Va, je ne te hais point. »', right: t('la litote : dire moins pour faire entendre plus', 'litotes: saying less to mean more', '曲言：说得少，意在多') },
                  { id: 'p5', left: '« La France a une pensée pour eux. »', right: t('la métonymie : le pays pour ses habitants', 'metonymy: the country for its people', '借代：以国家代国民') },
                ],
              },
            },
          ],
        },
        {
          id: 'les_c2li_3',
          moduleId: 'mod_c2li_1',
          kind: 'text',
          durationMin: 13,
          title: t('Le commentaire composé', 'The commentaire composé', '文本细读'),
          summary: t(
            'Construire un plan à partir du texte lui-même, et non d’une grille apprise d’avance.',
            'Building an outline from the text itself, not from a grid learned in advance.',
            '从文本本身出发构建提纲，而非套用事先背好的框架。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le commentaire composé se distingue de l’explication linéaire : au lieu de suivre le texte ligne à ligne, il **construit des axes** qui traversent l’extrait. Chaque axe est une hypothèse de lecture, vérifiée par des relevés précis.',
                'The commentaire composé differs from a line-by-line explication: instead of following the text line by line, it **builds axes** that cut across the extract. Each axis is a reading hypothesis, verified by precise textual evidence.',
                '文本细读不同于逐行讲解：它不逐句跟随文本，而是**构建若干轴线**贯穿全段。每条轴线都是一个阅读假设，需由精确的文本证据加以验证。',
              ),
            },
            {
              type: 'keyvalues',
              emoji: '🕰️',
              title: t('Les quatre temps du travail', 'The four stages of the work', '工作的四个阶段'),
              entries: [
                { label: t('1. Lecture et relevés', '1. Reading and note-taking', '1. 阅读与摘录'), value: t('Trois lectures : sens général, procédés, structure. On note tout, on trie ensuite.', 'Three readings: general sense, devices, structure. Note everything, sort afterwards.', '读三遍：整体理解、修辞手法、结构。先全部记下，再筛选。') },
                { label: t('2. Regroupement', '2. Grouping', '2. 归类'), value: t('Les relevés se rassemblent d’eux-mêmes en deux ou trois faisceaux : ce sont les axes.', 'The notes naturally cluster into two or three bundles: these are the axes.', '摘录会自然聚成两三束：这就是轴线。') },
                { label: t('3. Problématique', '3. Problematic', '3. 提出问题'), value: t('Une question à laquelle les axes répondent ensemble, jamais séparément.', 'A question the axes answer together, never separately.', '一个由各条轴线共同回答的问题，而非各自为政。') },
                { label: t('4. Rédaction', '4. Writing', '4. 撰写'), value: t('Chaque sous-partie : affirmation, citation entre guillemets, analyse, conclusion partielle.', 'Each sub-part: claim, quotation in guillemets, analysis, partial conclusion.', '每个小节：论点、引文（用书名号）、分析、小结。') },
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🧭',
              title: t('Les trois plans à éviter', 'Three outlines to avoid', '三种应避免的提纲'),
              text: t(
                '**« Le fond puis la forme »** sépare artificiellement ce qui fait sens ensemble. **« Paragraphe 1, paragraphe 2, paragraphe 3 »** n’est pas un plan, c’est une paraphrase. **« La vie de l’auteur »** est hors sujet : le commentaire porte sur le texte, non sur la biographie.',
                '**“Content then form”** artificially separates what makes sense together. **“Paragraph 1, paragraph 2, paragraph 3”** is not an outline, it is paraphrase. **“The author’s life”** is off-topic: the commentary is about the text, not the biography.',
                '**“先内容后形式”**人为割裂了本应共同产生意义的部分。**“第 1 段、第 2 段、第 3 段”**不是提纲，而是复述。**“作者生平”**属于偏题：细读针对的是文本，而非传记。',
              ),
            },
            {
              type: 'table',
              emoji: '📊',
              caption: t('Un exemple d’axes bien construits', 'An example of well-built axes', '构建得当的轴线示例'),
              headers: [t('Axe', 'Axis', '轴线'), t('Hypothèse', 'Hypothesis', '假设'), t('Relevés attendus', 'Expected evidence', '预期证据')],
              rows: [
                [t('I. Un tableau immobile', 'I. A motionless tableau', '一、静止的画面'), t('le texte suspend le temps avant l’événement', 'the text suspends time before the event', '文本在事件发生前悬置了时间'), t('imparfaits duratifs, absence de verbes d’action, champ lexical du silence', 'durative imperfects, absence of action verbs, lexical field of silence', '表持续的未完成过去时、动作动词缺席、沉默的词汇场')],
                [t('II. Une menace qui affleure', 'II. A threat surfacing', '二、浮现的威胁'), t('des indices contredisent la paix apparente', 'clues contradict the apparent calm', '若干迹象与表面的平静相抵触'), t('adjectifs sombres, comparaisons animales, rythme qui s’accélère', 'dark adjectives, animal comparisons, quickening rhythm', '阴郁的形容词、动物性比喻、加快的节奏')],
                [t('III. Le regard du narrateur', 'III. The narrator’s gaze', '三、叙述者的目光'), t('la description est en réalité un jugement', 'the description is in fact a judgement', '描写实为评判'), t('modalisateurs, ironie, focalisation interne intermittente', 'hedging markers, irony, intermittent internal focalisation', '限定语、反讽、时断时续的内聚焦')],
              ],
            },
            {
              type: 'interactive',
              emoji: '🔢',
              title: t('Le commentaire composé, dans l’ordre', 'The commentaire composé, in order', '文本细读的正确顺序'),
              hint: t('Le classement par procédés — et non par lignes — fait tout l’exercice.', 'Organising by device — not line by line — is the whole exercise.', '按手法而非按行文顺序来组织，正是这项练习的全部要义。'),
              widget: {
                kind: 'order',
                prompt: t('De la première lecture au plan :', 'From first reading to plan:', '从初读到提纲：'),
                items: [
                  { id: 'o1', text: t('Lire le texte deux fois, la seconde crayon en main', 'Read the text twice, the second time pencil in hand', '通读两遍，第二遍手执铅笔') },
                  { id: 'o2', text: t('Relever les procédés marquants : temps, figures, rythme', 'Note the striking devices: tenses, figures, rhythm', '标出突出的手法：时态、修辞、节奏') },
                  { id: 'o3', text: t('Regrouper les relevés en deux ou trois effets d’ensemble', 'Group the findings into two or three overall effects', '把所得归并为两三种整体效果') },
                  { id: 'o4', text: t('Faire de chaque effet un axe du plan — jamais « lignes 1 à 10 »', 'Turn each effect into an axis of the plan — never “lines 1 to 10”', '让每种效果成为提纲的一轴——绝不用“第 1 至 10 行”') },
                  { id: 'o5', text: t('Vérifier que chaque axe suit le schéma procédé → citation → effet → sens', 'Check every axis follows device → quotation → effect → meaning', '核对每一轴都遵循手法 → 引文 → 效果 → 意义') },
                ],
                successNote: t(
                  'Le plan « début / milieu / fin » est l’erreur éliminatoire du commentaire : on classe par effets, jamais par ordre du texte.',
                  'The “beginning / middle / end” plan is the disqualifying mistake of the commentaire: you organise by effects, never by text order.',
                  '“开头/中间/结尾”式提纲是文本细读的致命错误：要按效果分类，绝不按原文顺序。',
                ),
              },
            },
          ],
        },
      ],
    },
    {
      id: 'mod_c2li_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur les temps du récit, les figures et le commentaire.', 'Six questions on narrative tenses, figures and the commentary.', '六道题，考查叙事时态、修辞格与文本细读。'),
      lessons: [
        {
          id: 'les_c2li_q',
          moduleId: 'mod_c2li_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_c2_litterature',
          title: t('Quiz — Lire la littérature', 'Quiz — Reading literature', '测验 — 阅读文学'),
          summary: t('6 questions sur l’analyse littéraire.', '6 questions on literary analysis.', '6 道题，考查文学分析。'),
        },
      ],
    },
  ],
};
