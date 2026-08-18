import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_delf_b1';

export const delfB1Course: Course = {
  id: ID,
  slug: 'delf-b1',
  category: 'delf-b1',
  level: 'B1',
  accentFrom: '#5eead4',
  accentTo: '#0ea5e9',
  status: 'published',
  title: t('Préparation au DELF B1', 'DELF B1 preparation', 'DELF B1 备考'),
  subtitle: t('2 modules · 4 leçons · 1 quiz noté', '2 modules · 4 lessons · 1 graded quiz', '2 个单元 · 4 节课 · 1 次评分测验'),
  description: t(
    'Le B1 marque le passage à l’autonomie : comprendre l’essentiel d’un document authentique, raconter, expliquer, donner son avis. Ce parcours décrit les quatre épreuves, leur barème, et la méthode qui permet de ne pas perdre de points bêtement.',
    'B1 marks the shift to independence: grasping the essentials of an authentic document, narrating, explaining, giving an opinion. This path covers the four papers, their marking and the method that stops you losing marks needlessly.',
    'B1 标志着进入自主运用阶段：理解真实材料的要点，叙述、解释并表达观点。本课程介绍四项考试、评分标准，以及避免无谓失分的方法。',
  ),
  tags: [t('DELF', 'DELF', 'DELF'), t('Niveau B1', 'Level B1', 'B1 级别'), t('Examen', 'Exam', '考试')],
  modules: [
    {
      id: 'mod_b1_1',
      courseId: ID,
      title: t('Les épreuves de compréhension', 'The comprehension papers', '理解类考试'),
      summary: t('Écouter et lire sous contrainte de temps.', 'Listening and reading under time pressure.', '在时间压力下进行听力与阅读。'),
      lessons: [
        {
          id: 'les_b1_1',
          moduleId: 'mod_b1_1',
          kind: 'text',
          durationMin: 11,
          title: t('L’examen en un coup d’œil', 'The exam at a glance', '考试一览'),
          summary: t(
            'Structure, durées, barème et conditions de réussite : ce qu’il faut savoir avant de réviser.',
            'Structure, timings, marking and pass conditions: what to know before you start revising.',
            '结构、时长、评分与通过条件：复习前必须了解的内容。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le DELF B1 comporte quatre [[epreuve|épreuves]] indépendantes, chacune notée sur 25 points. Deux conditions doivent être remplies simultanément : obtenir au moins 50 sur 100 au total, **et** au moins 5 sur 25 à chaque épreuve. Une note éliminatoire dans une seule épreuve invalide donc l’ensemble, même avec un excellent total.',
                'The DELF B1 has four independent [[epreuve|papers]], each marked out of 25. Two conditions must be met at once: at least 50 out of 100 overall, **and** at least 5 out of 25 in each paper. A single disqualifying mark therefore invalidates the whole exam, even with an excellent total.',
                'DELF B1 包含四项独立[[epreuve|考试]]，每项满分 25 分。必须同时满足两个条件：总分至少 50/100，**且**每项至少 5/25。因此，任何一项低于最低分都会导致整体不合格，即使总分很高。',
              ),
            },
            { type: 'figure', figureId: 'epreuves-delf', caption: t('Les quatre épreuves, leurs durées et leur poids.', 'The four papers, their durations and their weight.', '四项考试的时长与分值。') },
            {
              type: 'table',
              caption: t('Déroulé de la journée', 'How the day runs', '考试当天流程'),
              headers: [t('Épreuve', 'Paper', '科目'), t('Durée', 'Duration', '时长'), t('Points', 'Marks', '分值'), t('Ce qui est évalué', 'What is assessed', '考查内容')],
              rows: [
                [t('Compréhension de l’oral', 'Listening', '听力理解'), t('≈ 25 min', '≈ 25 min', '约 25 分钟'), t('25', '25', '25'), t('3 documents, 2 écoutes pour deux d’entre eux', '3 recordings, two of them played twice', '3 段录音，其中两段播放两遍')],
                [t('Compréhension des écrits', 'Reading', '阅读理解'), t('35 min', '35 min', '35 分钟'), t('25', '25', '25'), t('2 textes : repérage d’informations et analyse', '2 texts: locating information and analysis', '2 篇文章：信息定位与分析')],
                [t('Production écrite', 'Writing', '书面表达'), t('45 min', '45 min', '45 分钟'), t('25', '25', '25'), t('160 mots minimum : essai, courrier ou article', 'minimum 160 words: essay, letter or article', '不少于 160 词：短文、书信或文章')],
                [t('Production orale', 'Speaking', '口语表达'), t('15 min + 10 min de préparation', '15 min + 10 min preparation', '15 分钟 + 10 分钟准备'), t('25', '25', '25'), t('3 parties : entretien, exercice en interaction, monologue', '3 parts: interview, role play, monologue', '3 部分：面谈、互动练习、独白')],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              title: t('La note éliminatoire, premier piège', 'The disqualifying mark, first trap', '最低分要求：第一个陷阱'),
              text: t(
                'Beaucoup de candidats négligent l’épreuve qu’ils redoutent le plus, en misant sur les trois autres. C’est la stratégie la plus risquée : viser 12 sur 25 partout est plus sûr que viser 22 sur trois épreuves et 4 sur la quatrième.',
                'Many candidates neglect the paper they fear most, betting on the other three. That is the riskiest strategy: aiming for 12 out of 25 everywhere is safer than 22 in three papers and 4 in the fourth.',
                '许多考生因为害怕某一科而放弃它，寄希望于其他三科。这是最危险的做法：每科都拿 12/25，比三科拿 22 分、一科只得 4 分要稳妥得多。',
              ),
            },
            { type: 'heading', text: t('Ce que « B1 » veut dire concrètement', 'What “B1” actually means', '“B1”究竟意味着什么') },
            {
              type: 'keyvalues',
              title: t('Les descripteurs officiels, traduits en actes', 'The official descriptors, turned into actions', '官方能力描述的具体化'),
              entries: [
                { label: t('Comprendre', 'Understand', '理解'), value: t('Suivre une conversation courante et l’essentiel d’une émission de radio sur un sujet familier.', 'Follow an everyday conversation and the gist of a radio programme on a familiar topic.', '能听懂日常对话，以及熟悉话题广播节目的主要内容。') },
                { label: t('Lire', 'Read', '阅读'), value: t('Repérer l’information utile dans un article de presse ou un courrier administratif simple.', 'Locate useful information in a press article or a simple administrative letter.', '能在报刊文章或简单行政信函中找到所需信息。') },
                { label: t('Écrire', 'Write', '写作'), value: t('Rédiger un texte articulé de 160 à 180 mots exprimant une opinion et la justifiant.', 'Write a connected 160–180-word text stating and justifying an opinion.', '能写出 160–180 词、结构连贯并说明理由的文章。') },
                { label: t('Parler', 'Speak', '口语'), value: t('Raconter une expérience, argumenter simplement, se débrouiller dans une négociation de la vie quotidienne.', 'Recount an experience, argue simply, cope with an everyday negotiation.', '能讲述经历、进行简单论证，并应对日常协商情境。') },
              ],
            },
          ],
        },
        {
          id: 'les_b1_2',
          moduleId: 'mod_b1_1',
          kind: 'text',
          durationMin: 12,
          title: t('Compréhension de l’oral et des écrits : la méthode', 'Listening and reading: the method', '听力与阅读：方法'),
          summary: t(
            'Où placer son attention, dans quel ordre lire, et comment ne pas perdre de points sur la forme.',
            'Where to focus, in which order to read, and how not to lose marks on form.',
            '注意力该放在哪里、按什么顺序阅读，以及如何避免因形式失分。',
          ),
          blocks: [
            { type: 'heading', text: t('Compréhension de l’oral', 'Listening comprehension', '听力理解') },
            {
              type: 'paragraph',
              text: t(
                'Les questions sont toujours données **avant** l’écoute : ces trente secondes sont la partie la plus rentable de l’épreuve. Lisez-les et soulignez le mot interrogatif — qui, où, combien, pourquoi. Vous saurez alors quelle information chasser au lieu d’essayer de tout comprendre.',
                'The questions are always given **before** the recording: those thirty seconds are the most profitable part of the paper. Read them and underline the question word — who, where, how many, why. You will then know which information to hunt for instead of trying to understand everything.',
                '题目总是在录音**之前**给出：这三十秒是整场考试中回报最高的时间。读题并划出疑问词——谁、哪里、多少、为什么。这样你就知道该捕捉什么信息，而不是试图听懂一切。',
              ),
            },
            {
              type: 'list',
              ordered: true,
              items: [
                t('Avant l’écoute : lire les questions, repérer le type d’information attendu (chiffre, lieu, opinion).', 'Before listening: read the questions, identify the type of information expected (figure, place, opinion).', '听前：读题，判断所需信息类型（数字、地点、观点）。'),
                t('Première écoute : saisir la situation globale — qui parle, à qui, dans quel but.', 'First listening: grasp the overall situation — who is speaking, to whom, for what purpose.', '第一遍：把握整体情境——谁在说、对谁说、目的为何。'),
                t('Entre les deux écoutes : noter des réponses provisoires, même incomplètes.', 'Between the two listenings: jot down provisional answers, even incomplete ones.', '两遍之间：写下初步答案，即使不完整。'),
                t('Seconde écoute : vérifier et compléter, en se concentrant sur les questions laissées vides.', 'Second listening: check and complete, focusing on unanswered questions.', '第二遍：核对并补全，重点关注空着的题目。'),
                t('Toujours répondre : une réponse plausible ne coûte rien, une case vide vaut zéro.', 'Always answer: a plausible answer costs nothing, an empty box scores zero.', '一定要作答：合理的猜测毫无损失，空着必然零分。'),
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              title: t('Le piège des distracteurs', 'The distractor trap', '干扰项陷阱'),
              text: t(
                'Les enregistrements citent souvent trois chiffres ou trois lieux, dont un seul répond à la question. Écoutez la structure : « d’abord… finalement… », « on avait prévu… mais ». C’est presque toujours l’information qui suit « finalement » ou « mais » qui est attendue.',
                'Recordings often mention three figures or three places, only one of which answers the question. Listen for the structure: “d’abord… finalement…”, “on avait prévu… mais”. The expected information almost always follows “finalement” or “mais”.',
                '录音常会提到三个数字或三个地点，但只有一个是答案。注意结构词：“d’abord… finalement…”“on avait prévu… mais”。答案几乎总是出现在“finalement”或“mais”之后。',
              ),
            },
            { type: 'heading', text: t('Compréhension des écrits', 'Reading comprehension', '阅读理解') },
            {
              type: 'paragraph',
              text: t(
                'Trente-cinq minutes pour deux textes, c’est court. La méthode gagnante inverse l’ordre naturel : lisez les questions d’abord, puis balayez le texte à leur recherche. Le premier exercice teste le repérage rapide ; le second demande de saisir l’intention de l’auteur et parfois l’[[implicite|implicite]].',
                'Thirty-five minutes for two texts is short. The winning method reverses the natural order: read the questions first, then scan the text for them. The first task tests fast retrieval; the second requires grasping the author’s intention and sometimes the [[implicite|implicit meaning]].',
                '两篇文章只有三十五分钟，时间很紧。有效方法是颠倒常规顺序：先读题，再带着问题扫读文章。第一题考查快速定位；第二题要求把握作者意图，有时还包括[[implicite|言外之意]]。',
              ),
            },
            {
              type: 'examples',
              title: t('Justifier une réponse : la règle des deux éléments', 'Justifying an answer: the two-element rule', '答案说明：两要素规则'),
              items: [
                { fr: 'Vrai ou faux ? « L’auteur approuve la réforme. » Justification : citez la phrase du texte.', gloss: t('Sans citation, la réponse ne compte pas, même si le choix est juste.', 'Without a quotation the answer does not count, even if the choice is right.', '没有引文，即使选对也不给分。') },
                { fr: 'Faux — « cette mesure me paraît précipitée » (ligne 12).', gloss: t('Réponse + citation exacte + ligne : barème respecté.', 'Answer + exact quotation + line: the marking scheme is satisfied.', '答案 + 准确引文 + 行号：符合评分要求。') },
                { fr: 'Faux, parce que l’auteur n’est pas d’accord.', gloss: t('Reformulation sans citation : zéro point.', 'Restatement without quotation: no marks.', '只有复述没有引文：零分。'), incorrect: true },
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              title: t('Gestion du temps', 'Time management', '时间管理'),
              text: t(
                'Quinze minutes par texte, cinq minutes de relecture. Si une question résiste plus d’une minute, laissez-la et revenez-y : les questions valent le même nombre de points, quelle que soit leur difficulté.',
                'Fifteen minutes per text, five minutes to review. If a question resists for more than a minute, leave it and come back: all questions are worth the same, whatever their difficulty.',
                '每篇文章十五分钟，留五分钟复查。若某题超过一分钟仍无头绪，先跳过再回头：无论难易，每题分值相同。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_b1_2',
      courseId: ID,
      title: t('Les épreuves de production', 'The production papers', '表达类考试'),
      summary: t('Écrire et parler selon les attentes du jury.', 'Writing and speaking to the examiners’ expectations.', '按照考官期待进行写作与口语表达。'),
      lessons: [
        {
          id: 'les_b1_3',
          moduleId: 'mod_b1_2',
          kind: 'text',
          durationMin: 13,
          title: t('Production écrite : structurer 160 mots utiles', 'Writing: structuring 160 useful words', '书面表达：写好 160 词'),
          summary: t(
            'Le plan en quatre paragraphes, les formules d’ouverture et de clôture, et le compte de mots.',
            'The four-paragraph plan, opening and closing formulas, and the word count.',
            '四段式提纲、开头与结尾套语，以及字数控制。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'La [[consigne|consigne]] précise toujours trois choses : le type de texte, le destinataire et le nombre de mots. Les trois sont notés. Un excellent texte qui ignore le destinataire perd des points sur le critère « respect de la consigne », qui vaut à lui seul un quart de la note.',
                'The [[consigne|instruction]] always specifies three things: the type of text, the addressee and the word count. All three are marked. An excellent text that ignores the addressee loses marks on the “task fulfilment” criterion, which alone is worth a quarter of the score.',
                '[[consigne|题目要求]]总会明确三点：文体、收信对象和字数。三者都计分。即使写得再好，若忽略收信对象，也会在“切题”一项失分，而该项占总分的四分之一。',
              ),
            },
            { type: 'figure', figureId: 'plan-essai', caption: t('Le plan en quatre paragraphes, applicable à toutes les consignes B1.', 'The four-paragraph plan, usable for every B1 task.', '四段式提纲，适用于所有 B1 题目。') },
            {
              type: 'keyvalues',
              title: t('Répartition des 45 minutes', 'Splitting the 45 minutes', '45 分钟的分配'),
              entries: [
                { label: t('5 minutes', '5 minutes', '5 分钟'), value: t('Analyser la consigne et noter trois idées, en français, sous forme de mots-clés.', 'Analyse the instruction and note three ideas, in French, as keywords.', '分析题目要求，用法语以关键词形式记下三个想法。') },
                { label: t('30 minutes', '30 minutes', '30 分钟'), value: t('Rédiger sans s’arrêter, en respectant le plan choisi.', 'Write without stopping, following the chosen plan.', '按照提纲一气呵成地写完。') },
                { label: t('10 minutes', '10 minutes', '10 分钟'), value: t('Relire trois fois : accords, temps, connecteurs. Une relecture par point.', 'Proofread three times: agreements, tenses, connectors. One pass per point.', '复查三遍：性数配合、时态、连接词，每遍只查一项。') },
              ],
            },
            {
              type: 'examples',
              title: t('Banque de formules pour la lettre', 'Phrase bank for the letter', '书信常用套语'),
              items: [
                { fr: 'Madame, Monsieur,', gloss: t('Ouverture neutre quand on ignore le nom du destinataire.', 'Neutral opening when the addressee’s name is unknown.', '不知道收信人姓名时的中性称呼。') },
                { fr: 'Je me permets de vous écrire au sujet de…', gloss: t('Annonce polie de l’objet du courrier.', 'Polite announcement of the letter’s purpose.', '礼貌地说明写信目的。') },
                { fr: 'Je vous serais reconnaissant(e) de bien vouloir…', gloss: t('Demande formelle au [[conditionnel|conditionnel]].', 'Formal request in the [[conditionnel|conditional]].', '用[[conditionnel|条件式]]提出正式请求。') },
                { fr: 'Dans l’attente de votre réponse, je vous prie d’agréer mes salutations distinguées.', gloss: t('Formule de clôture standard, à mémoriser telle quelle.', 'Standard closing formula, to be memorised as it is.', '标准结尾套语，需原样背下。') },
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              title: t('Le compte de mots', 'The word count', '字数统计'),
              text: t(
                'Écrire 130 mots quand on en demande 160 fait perdre des points automatiquement. Écrire 250 mots en fait perdre aussi : le hors-sujet et les répétitions se multiplient. Comptez les mots de la première ligne, multipliez par le nombre de lignes : c’est assez précis et cela prend dix secondes.',
                'Writing 130 words when 160 are required loses marks automatically. Writing 250 also loses marks: irrelevance and repetition multiply. Count the words in the first line and multiply by the number of lines: accurate enough, and it takes ten seconds.',
                '要求 160 词却只写 130 词会自动扣分；写 250 词同样扣分，因为跑题和重复会增多。数出第一行的词数再乘以行数：足够准确，只需十秒。',
              ),
            },
            {
              type: 'callout',
              tone: 'success',
              title: t('Trois gestes qui rapportent', 'Three moves that pay off', '三个加分动作'),
              text: t(
                'Employer au moins un [[subjonctif|subjonctif]] correct, un [[connecteur|connecteur]] d’opposition et un exemple personnel daté. Ces trois éléments déclenchent presque toujours les points des critères « morphosyntaxe » et « cohérence ».',
                'Use at least one correct [[subjonctif|subjunctive]], one contrast [[connecteur|connector]] and one dated personal example. These three almost always trigger marks under “morphosyntax” and “coherence”.',
                '至少用对一个[[subjonctif|虚拟式]]、一个表转折的[[connecteur|连接词]]，以及一个带时间的亲身例子。这三点几乎总能拿到“形态句法”与“连贯性”两项的分数。',
              ),
            },
          ],
        },
        {
          id: 'les_b1_4',
          moduleId: 'mod_b1_2',
          kind: 'text',
          durationMin: 12,
          title: t('Production orale : les trois parties de l’épreuve', 'Speaking: the three parts of the paper', '口语表达：考试的三个部分'),
          summary: t(
            'Entretien dirigé, exercice en interaction, monologue suivi : ce que le jury attend à chaque étape.',
            'Guided interview, interactive task, sustained monologue: what the panel expects at each stage.',
            '面谈、互动练习、连续独白：考官在每个环节的期待。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Quinze minutes face à deux examinateurs, dont dix minutes de préparation pour la seule troisième partie. L’épreuve est brève : chaque silence coûte cher, et chaque partie a ses propres règles du jeu.',
                'Fifteen minutes facing two examiners, with ten minutes of preparation for the third part only. The paper is short: every silence is costly, and each part has its own rules.',
                '面对两位考官共十五分钟，其中十分钟准备时间仅用于第三部分。考试时间很短：每一次沉默都代价高昂，而每个部分都有各自的规则。',
              ),
            },
            {
              type: 'table',
              headers: [t('Partie', 'Part', '部分'), t('Durée', 'Duration', '时长'), t('Tâche', 'Task', '任务'), t('Erreur à éviter', 'Mistake to avoid', '需避免的错误')],
              rows: [
                [t('1. [[entretien|Entretien dirigé]]', '1. [[entretien|Guided interview]]', '1. [[entretien|引导式面谈]]'), t('2 à 3 min', '2–3 min', '2–3 分钟'), t('Se présenter, parler de ses études, de ses projets', 'Introduce yourself, talk about your studies and plans', '自我介绍，谈学习与计划'), t('Réciter un texte appris par cœur', 'Reciting a memorised text', '背诵事先记好的文本')],
                [t('2. Exercice en interaction', '2. Interactive task', '2. 互动练习'), t('3 à 4 min', '3–4 min', '3–4 分钟'), t('Résoudre une situation : réserver, réclamer, convaincre', 'Solve a situation: booking, complaining, persuading', '解决情境问题：预订、投诉、说服'), t('Rester passif et attendre les questions', 'Staying passive and waiting for questions', '被动等待考官提问')],
                [t('3. [[monologue|Monologue suivi]]', '3. [[monologue|Sustained monologue]]', '3. [[monologue|连续独白]]'), t('5 à 7 min', '5–7 min', '5–7 分钟'), t('Dégager le thème d’un court document et donner son avis', 'Identify the theme of a short document and give an opinion', '概括短文主题并表达观点'), t('Résumer le document sans jamais donner son avis', 'Summarising the document without ever giving an opinion', '只复述材料而不表明观点')],
              ],
            },
            { type: 'heading', text: t('La troisième partie, celle qui départage', 'The third part, the decisive one', '第三部分：决定成败') },
            {
              type: 'paragraph',
              text: t(
                'Le document est court — quelques lignes ou un titre de presse. Le jury n’attend pas un résumé : il attend que vous dégagiez le thème en une phrase, puis que vous défendiez une position pendant plusieurs minutes. Utilisez vos dix minutes de préparation pour noter un plan en trois points, jamais des phrases entières.',
                'The document is short — a few lines or a headline. The panel does not want a summary: they want you to state the theme in one sentence, then defend a position for several minutes. Use your ten minutes of preparation to note a three-point plan, never full sentences.',
                '材料很短——几行文字或一个新闻标题。考官不要复述，而是希望你用一句话点明主题，然后用几分钟为某一立场辩护。十分钟准备时间应用来列出三点提纲，切勿写完整句子。',
              ),
            },
            {
              type: 'examples',
              title: t('Amorces à réutiliser', 'Openers you can reuse', '可复用的开场句'),
              items: [
                { fr: 'Ce document aborde la question de… Il pose un problème que je trouve d’actualité.', gloss: t('Annonce du thème en une phrase.', 'States the theme in one sentence.', '一句话点明主题。') },
                { fr: 'À mon avis, … D’une part…, d’autre part…', gloss: t('Position claire, puis deux arguments.', 'Clear stance, then two arguments.', '先亮明立场，再给出两条论据。') },
                { fr: 'Je pense qu’il faut nuancer : si… en revanche…', gloss: t('Montre une capacité de [[nuance|nuance]], très valorisée.', 'Shows a capacity for [[nuance|nuance]], highly valued.', '体现[[nuance|细致区分]]的能力，很受赞赏。') },
                { fr: 'Pour conclure, je dirais que…', gloss: t('Clôture nette, à préparer avant de commencer.', 'A clean ending, to prepare before you start.', '干净利落的收尾，开口前就该准备好。') },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              title: t('Que faire quand le mot manque', 'What to do when the word escapes you', '想不起单词时怎么办'),
              text: t(
                'N’arrêtez jamais votre phrase. Employez une [[perpehrase|périphrase]] : « c’est un objet qui sert à… », « la personne qui s’occupe de… ». Le jury évalue la capacité à communiquer, pas le lexique parfait ; une reformulation réussie rapporte plus qu’un blanc de dix secondes.',
                'Never stop mid-sentence. Use a [[perpehrase|circumlocution]]: “c’est un objet qui sert à…”, “la personne qui s’occupe de…”. The panel assesses your ability to communicate, not perfect vocabulary; a successful workaround earns more than a ten-second silence.',
                '千万不要中途停下。使用[[perpehrase|迂回表达]]：“c’est un objet qui sert à…”“la personne qui s’occupe de…”。考官评估的是沟通能力而非完美词汇；成功的变通表达远胜十秒钟的沉默。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_b1_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Vérifiez votre connaissance de l’examen et de la méthode.', 'Check your knowledge of the exam and the method.', '检验你对考试与方法的掌握。'),
      lessons: [
        {
          id: 'les_b1_q',
          moduleId: 'mod_b1_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_delf_b1',
          title: t('Quiz — DELF B1', 'Quiz — DELF B1', '测验 — DELF B1'),
          summary: t('8 questions sur le format, le barème et la méthode des quatre épreuves.', '8 questions on the format, marking and method of the four papers.', '8 道题，涵盖四项考试的形式、评分与方法。'),
        },
      ],
    },
  ],
};
