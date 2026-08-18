import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_delf_b2';

export const delfB2Course: Course = {
  id: ID,
  slug: 'delf-b2',
  category: 'delf-b2',
  level: 'B2',
  accentFrom: '#38bdf8',
  accentTo: '#4338ca',
  status: 'published',
  title: t('Préparation au DELF B2', 'DELF B2 preparation', 'DELF B2 备考'),
  subtitle: t('2 modules · 4 leçons · 1 quiz noté', '2 modules · 4 lessons · 1 graded quiz', '2 个单元 · 4 节课 · 1 次评分测验'),
  description: t(
    'Le B2 ouvre les portes de l’université française. Il ne récompense plus la correction, mais l’argumentation : savoir défendre une position, concéder sans céder, et repérer ce qu’un texte ne dit pas explicitement.',
    'B2 opens the doors of French universities. It no longer rewards accuracy but argumentation: defending a position, conceding without giving in, and spotting what a text does not say outright.',
    'B2 是进入法国高校的门槛。它考查的不再是语言正确性，而是论证能力：为立场辩护、让步而不退让，并识别文本未明说的内容。',
  ),
  tags: [t('DELF', 'DELF', 'DELF'), t('Niveau B2', 'Level B2', 'B2 级别'), t('Argumentation', 'Argumentation', '论证')],
  modules: [
    {
      id: 'mod_b2_1',
      courseId: ID,
      title: t('Argumenter à l’écrit', 'Arguing in writing', '书面论证'),
      summary: t('L’essai et la lettre formelle, deux exercices, une même architecture.', 'The essay and the formal letter: two tasks, one architecture.', '论述文与正式书信：两种题型，同一结构。'),
      lessons: [
        {
          id: 'les_b2_1',
          moduleId: 'mod_b2_1',
          kind: 'text',
          durationMin: 14,
          title: t('L’essai argumenté : plan, thèse, concession', 'The argumentative essay: plan, thesis, concession', '论述文：提纲、论点、让步'),
          summary: t(
            'Deux plans possibles, un seul objectif : montrer qu’on pense contre soi-même avant de conclure.',
            'Two possible plans, one goal: showing you can think against yourself before concluding.',
            '两种可选提纲，同一个目标：在下结论前展示自我反驳的能力。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'La production écrite du B2 demande 250 mots environ, en 60 minutes. Ce n’est pas un exercice de langue mais un exercice de pensée : le jury vérifie que vous savez poser une [[problematique|problématique]], la traiter et y répondre. Un texte sans plan lisible plafonne, même sans faute.',
                'The B2 writing paper asks for around 250 words in 60 minutes. It is not a language exercise but a thinking exercise: the panel checks that you can set out a [[problematique|central question]], deal with it and answer it. A text with no readable plan hits a ceiling, even with no mistakes.',
                'B2 写作要求 60 分钟内写约 250 词。这不是语言练习，而是思维练习：考官考查你能否提出[[problematique|核心问题]]、展开论述并作出回答。没有清晰提纲的文章即使没有语法错误，分数也上不去。',
              ),
            },
            {
              type: 'table',
              caption: t('Deux plans, deux usages', 'Two plans, two uses', '两种提纲，两种用途'),
              headers: [t('Plan', 'Plan', '提纲'), t('Structure', 'Structure', '结构'), t('Quand l’employer', 'When to use it', '适用情形')],
              rows: [
                [t('Dialectique', 'Dialectical', '正反合'), t('[[these|Thèse]] → [[antithese|antithèse]] → synthèse', '[[these|Thesis]] → [[antithese|antithesis]] → synthesis', '[[these|正论]] → [[antithese|反论]] → 综合'), t('Sujet polémique : « Faut-il interdire… ? »', 'Controversial topic: “Should we ban…?”', '有争议的题目：“是否应当禁止……？”')],
                [t('Thématique', 'Thematic', '主题式'), t('Aspect 1 → aspect 2 → aspect 3', 'Aspect 1 → aspect 2 → aspect 3', '方面 1 → 方面 2 → 方面 3'), t('Sujet ouvert : « Quels sont les effets de… ? »', 'Open topic: “What are the effects of…?”', '开放式题目：“……有哪些影响？”')],
              ],
            },
            { type: 'heading', text: t('L’architecture attendue', 'The expected architecture', '期待的文章结构') },
            {
              type: 'list',
              ordered: true,
              items: [
                t(
                  '**Introduction (40 mots)** : amener le sujet par un fait ou un constat, poser la problématique sous forme de question, annoncer le plan.',
                  '**Introduction (40 words)**: bring in the topic with a fact or observation, state the central question, announce the plan.',
                  '**引言（40 词）**：以事实或现象引入话题，提出核心问题，宣布提纲。',
                ),
                t(
                  '**Deux ou trois paragraphes (60 mots chacun)** : une idée par paragraphe, un argument, un exemple concret.',
                  '**Two or three paragraphs (60 words each)**: one idea per paragraph, one argument, one concrete example.',
                  '**两到三段（每段 60 词）**：每段一个观点、一条论据、一个具体例证。',
                ),
                t(
                  '**Conclusion (40 mots)** : répondre explicitement à la problématique, puis ouvrir sur une question plus large.',
                  '**Conclusion (40 words)**: answer the central question explicitly, then open onto a broader issue.',
                  '**结论（40 词）**：明确回答核心问题，再引出更广的思考。',
                ),
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              title: t('Le mouvement qui fait la différence', 'The move that makes the difference', '决定成败的一步'),
              text: t(
                'La [[concession|concession]] est la marque du B2. « Certes, le télétravail réduit les trajets ; il fragilise cependant le lien collectif. » Une copie qui ne concède jamais rien est perçue comme un exercice de niveau B1, quelle que soit la richesse du vocabulaire.',
                '[[concession|Concession]] is the hallmark of B2. “Certes, le télétravail réduit les trajets ; il fragilise cependant le lien collectif.” A paper that never concedes anything reads as a B1 exercise, however rich the vocabulary.',
                '[[concession|让步]]是 B2 的标志。“Certes, le télétravail réduit les trajets ; il fragilise cependant le lien collectif.” 从不让步的文章，无论词汇多丰富，都会被看作 B1 水平。',
              ),
            },
            {
              type: 'examples',
              title: t('Banque d’articulateurs B2', 'B2 connector bank', 'B2 连接词库'),
              items: [
                { fr: 'Il convient de rappeler que… / Force est de constater que…', gloss: t('Ouvertures de paragraphe en registre [[soutenu|soutenu]].', 'Paragraph openers in a [[soutenu|formal]] register.', '[[soutenu|正式]]语体的段落开头。') },
                { fr: 'Certes… il n’en demeure pas moins que…', gloss: t('Concession suivie d’un retournement : très valorisé.', 'Concession followed by a reversal: highly valued.', '先让步后反转：非常加分。') },
                { fr: 'À cet égard, l’exemple de… est éclairant.', gloss: t('Introduire un exemple sans dire « par exemple ».', 'Introducing an example without saying “par exemple”.', '不用“par exemple”也能引出例证。') },
                { fr: 'En définitive, il apparaît que…', gloss: t('Amorce de conclusion, plus élégante que « pour conclure ».', 'A conclusion opener, more elegant than “pour conclure”.', '结论开头语，比“pour conclure”更雅致。') },
              ],
            },
          ],
        },
        {
          id: 'les_b2_2',
          moduleId: 'mod_b2_1',
          kind: 'text',
          durationMin: 11,
          title: t('La lettre formelle : réclamer, demander, protester', 'The formal letter: complaining, requesting, protesting', '正式书信：投诉、请求、抗议'),
          summary: t(
            'Un genre codifié où les formules comptent autant que les arguments.',
            'A codified genre where the set phrases count as much as the arguments.',
            '这是一种高度程式化的文体，套语与论据同样重要。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'La lettre formelle est l’autre sujet possible du B2. Sa structure est rigide, ce qui la rend rentable : la moitié du texte peut être préparée à l’avance sous forme de formules apprises, ce qui libère du temps pour les arguments.',
                'The formal letter is the other possible B2 task. Its structure is rigid, which makes it profitable: half the text can be prepared in advance as memorised formulas, freeing up time for the arguments.',
                '正式书信是 B2 的另一种可能题型。它结构固定，因而"性价比"很高：一半内容可以事先以套语形式准备好，从而腾出时间构思论据。',
              ),
            },
            {
              type: 'keyvalues',
              title: t('Les cinq mouvements obligatoires', 'The five compulsory moves', '五个必备环节'),
              entries: [
                { label: t('1. En-tête', '1. Heading', '1. 抬头'), value: t('Expéditeur, destinataire, lieu et date, objet. Quatre lignes, jamais oubliées.', 'Sender, addressee, place and date, subject. Four lines, never forgotten.', '寄件人、收件人、地点与日期、事由。四行，缺一不可。') },
                { label: t('2. Exposé des faits', '2. Statement of facts', '2. 陈述事实'), value: t('Que s’est-il passé, quand, où. Précis, daté, sans émotion.', 'What happened, when, where. Precise, dated, unemotional.', '发生了什么、何时、何地。准确、注明日期、不带情绪。') },
                { label: t('3. Argumentation', '3. Argumentation', '3. 论证'), value: t('Deux arguments hiérarchisés, du plus faible au plus fort.', 'Two ranked arguments, from weakest to strongest.', '两条论据，由弱到强排列。') },
                { label: t('4. Demande', '4. Request', '4. 请求'), value: t('Ce que vous attendez concrètement, au [[conditionnel|conditionnel]] de politesse.', 'What you concretely expect, in the polite [[conditionnel|conditional]].', '用礼貌[[conditionnel|条件式]]提出具体诉求。') },
                { label: t('5. Formule finale', '5. Closing formula', '5. 结尾套语'), value: t('Une phrase figée, reprise mot pour mot. Ne jamais improviser ici.', 'A fixed sentence, reproduced word for word. Never improvise here.', '固定句式，逐字照写。此处切勿自创。') },
              ],
            },
            {
              type: 'examples',
              title: t('Le ton juste : ferme sans être agressif', 'The right tone: firm without aggression', '恰当的语气：坚定而不失礼'),
              items: [
                { fr: 'Je me permets de vous faire part de mon mécontentement concernant…', gloss: t('Ferme et parfaitement poli.', 'Firm and perfectly polite.', '既坚定又完全得体。') },
                { fr: 'Je constate que l’engagement pris n’a pas été respecté.', gloss: t('Fait objectif plutôt qu’accusation.', 'An objective fact rather than an accusation.', '陈述客观事实，而非指责。') },
                { fr: 'Je vous serais reconnaissant de bien vouloir procéder au remboursement.', gloss: t('Demande claire, chiffrée si possible.', 'A clear request, quantified if possible.', '明确请求，尽量给出数额。') },
                { fr: 'Votre service est inadmissible et vos employés incompétents.', gloss: t('Registre familier et agressif : pénalisé.', 'Informal, aggressive register: penalised.', '语气粗俗且带攻击性：会被扣分。'), incorrect: true },
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              title: t('Le registre, critère noté', 'Register, a marked criterion', '语体：明确的评分项'),
              text: t(
                'Le [[registre|registre de langue]] figure explicitement dans la grille. Bannissez les contractions de l’oral (« y a », « faut »), les abréviations et le tutoiement. Utilisez la [[nominalisation|nominalisation]] et la [[voix-passive|voix passive]] : « l’annulation de ma réservation n’a pas été confirmée ».',
                '[[registre|Register]] appears explicitly in the marking grid. Ban spoken contractions (“y a”, “faut”), abbreviations and the informal “tu”. Use [[nominalisation|nominalisation]] and the [[voix-passive|passive voice]]: “l’annulation de ma réservation n’a pas été confirmée”.',
                '[[registre|语体]]在评分表中有明确一项。避免口语缩略（“y a”“faut”）、缩写以及用“tu”称呼。多用[[nominalisation|名词化]]与[[voix-passive|被动语态]]：“l’annulation de ma réservation n’a pas été confirmée”。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_b2_2',
      courseId: ID,
      title: t('Comprendre et débattre', 'Understanding and debating', '理解与辩论'),
      summary: t('Repérer l’implicite à l’écrit, défendre une position à l’oral.', 'Spotting the implicit in writing, defending a position orally.', '在书面材料中识别隐含义，在口语中为立场辩护。'),
      lessons: [
        {
          id: 'les_b2_3',
          moduleId: 'mod_b2_2',
          kind: 'text',
          durationMin: 12,
          title: t('Repérer l’implicite et le point de vue', 'Spotting the implicit and the point of view', '识别隐含义与观点立场'),
          summary: t(
            'Au B2, la question n’est plus « que dit le texte ? » mais « que pense l’auteur ? ».',
            'At B2 the question is no longer “what does the text say?” but “what does the author think?”.',
            '到了 B2，问题不再是“文章说了什么”，而是“作者怎么想”。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Les textes du B2 sont des articles d’opinion, des tribunes, des éditoriaux. Leur auteur a un point de vue, mais il l’exprime rarement en toutes lettres. Repérer l’[[implicite|implicite]] est explicitement au programme de l’épreuve, et c’est ce qui distingue une copie B2 d’une copie B1.',
                'B2 texts are opinion pieces, op-eds and editorials. Their author has a point of view but rarely states it outright. Spotting the [[implicite|implicit]] is explicitly on the syllabus, and it is what sets a B2 paper apart from a B1 one.',
                'B2 的文章多为评论、专栏与社论。作者有明确观点，却很少直说。识别[[implicite|隐含义]]是考纲明确要求的能力，也是区分 B2 与 B1 的关键。',
              ),
            },
            {
              type: 'keyvalues',
              title: t('Quatre indices qui trahissent l’opinion', 'Four clues that give away the opinion', '暴露作者立场的四个线索'),
              entries: [
                { label: t('Le lexique évaluatif', 'Evaluative vocabulary', '评价性词汇'), value: t('« une mesure prétendue efficace » : la [[connotation|connotation]] fait tout le travail.', '“une mesure prétendue efficace”: the [[connotation|connotation]] does all the work.', '“une mesure prétendue efficace”：全靠[[connotation|感情色彩]]传达态度。') },
                { label: t('Les guillemets de distance', 'Scare quotes', '引号的距离感'), value: t('« Cette “réforme” aurait permis… » : l’auteur récuse le terme.', '“Cette ‘réforme’ aurait permis…”: the author rejects the word.', '“Cette « réforme » aurait permis…”：作者并不认可这个说法。') },
                { label: t('Le [[conditionnel|conditionnel]] journalistique', 'The journalistic [[conditionnel|conditional]]', '新闻[[conditionnel|条件式]]'), value: t('« Le dispositif aurait réduit les délais » : information non confirmée, donc mise à distance.', '“Le dispositif aurait réduit les délais”: unconfirmed information, held at arm’s length.', '“Le dispositif aurait réduit les délais”：信息未经证实，作者刻意保持距离。') },
                { label: t('La [[litote|litote]] et l’[[euphemisme|euphémisme]]', '[[litote|Litotes]] and [[euphemisme|euphemism]]', '[[litote|曲言法]]与[[euphemisme|委婉语]]'), value: t('« Ce n’est pas un franc succès » signifie « c’est un échec ».', '“Ce n’est pas un franc succès” means “it is a failure”.', '“Ce n’est pas un franc succès”意思是“这是失败”。') },
              ],
            },
            {
              type: 'examples',
              title: t('Décoder une phrase', 'Decoding a sentence', '解读句子'),
              items: [
                { fr: 'Les autorités se sont enfin décidées à agir.', gloss: t('« Enfin » = reproche implicite sur la lenteur.', '“Enfin” = an implicit reproach about the delay.', '“Enfin”暗含对拖延的责备。') },
                { fr: 'Une initiative que d’aucuns jugeront audacieuse.', gloss: t('Prudence : l’auteur ne s’engage pas, il attribue l’avis à d’autres.', 'Caution: the author does not commit, attributing the view to others.', '谨慎表态：作者不表明立场，把观点归于他人。') },
                { fr: 'Reste à savoir si les moyens suivront.', gloss: t('Scepticisme poli sur la faisabilité.', 'Polite scepticism about feasibility.', '对可行性的委婉怀疑。') },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              title: t('La question type', 'The typical question', '典型题型'),
              text: t(
                '« L’auteur est-il favorable à cette mesure ? Justifiez par deux éléments du texte. » Une réponse complète cite deux indices de nature différente — par exemple un mot connoté et une tournure au conditionnel — et non deux fois le même procédé.',
                '“Is the author in favour of this measure? Justify with two elements from the text.” A complete answer cites two clues of different kinds — say, a loaded word and a conditional turn of phrase — not the same device twice.',
                '“作者赞成这项措施吗？请引用文中两处加以说明。”完整的回答应引用两类不同的线索——例如一个带感情色彩的词和一个条件式表达——而不是同一手法用两次。',
              ),
            },
          ],
        },
        {
          id: 'les_b2_4',
          moduleId: 'mod_b2_2',
          kind: 'text',
          durationMin: 12,
          title: t('L’oral B2 : présenter et défendre un point de vue', 'B2 speaking: presenting and defending a viewpoint', 'B2 口语：陈述并捍卫观点'),
          summary: t(
            'Vingt minutes de préparation, dix minutes d’exposé, dix minutes de débat avec le jury.',
            'Twenty minutes of preparation, a ten-minute presentation, ten minutes of debate with the panel.',
            '二十分钟准备、十分钟陈述、十分钟与考官辩论。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'L’oral du B2 se déroule en deux temps : un [[monologue|monologue suivi]] d’environ dix minutes à partir d’un court article, puis un débat où le jury vous contredit délibérément. Cette contradiction n’est pas hostile : elle teste votre capacité à défendre une position sans vous braquer ni vous effondrer.',
                'The B2 speaking test has two stages: a [[monologue|sustained monologue]] of about ten minutes based on a short article, then a debate in which the panel deliberately contradicts you. That contradiction is not hostile: it tests your ability to defend a position without either digging in or collapsing.',
                'B2 口试分两个阶段：先是基于一篇短文的约十分钟[[monologue|连续独白]]，随后是考官刻意反驳你的辩论环节。这种反驳并无敌意，而是检验你能否既不固执己见、也不轻易放弃地为立场辩护。',
              ),
            },
            {
              type: 'list',
              ordered: true,
              items: [
                t('**Préparation (30 min)** : lire l’article, identifier la thèse de l’auteur, choisir votre propre position et noter trois arguments.', '**Preparation (30 min)**: read the article, identify the author’s thesis, choose your own position and note three arguments.', '**准备（30 分钟）**：读文章、找出作者论点、确定自己的立场并记下三条论据。'),
                t('**Exposé (10 min)** : présenter le document en deux phrases, annoncer votre position, développer, conclure.', '**Presentation (10 min)**: present the document in two sentences, state your position, develop it, conclude.', '**陈述（10 分钟）**：用两句话介绍材料，表明立场，展开论述，作出结论。'),
                t('**Débat (10 min)** : accueillir l’objection, la reformuler, y répondre, éventuellement concéder un point.', '**Debate (10 min)**: take the objection on board, restate it, answer it, and concede a point if appropriate.', '**辩论（10 分钟）**：接受质疑、复述质疑、作出回应，必要时让步一点。'),
              ],
            },
            {
              type: 'examples',
              title: t('Répondre à une objection sans perdre pied', 'Answering an objection without losing your footing', '面对质疑而不失方寸'),
              items: [
                { fr: 'Si je vous comprends bien, vous suggérez que… C’est un point important, mais…', gloss: t('Reformuler avant de répondre : gagne du temps et montre l’écoute.', 'Restate before answering: buys time and shows you are listening.', '先复述再回答：既争取时间又体现倾听。') },
                { fr: 'Je vous rejoins sur ce point précis ; en revanche, sur…', gloss: t('[[concession|Concession]] partielle : la marque d’un vrai B2.', 'Partial [[concession|concession]]: the mark of a true B2.', '部分[[concession|让步]]：真正 B2 水平的标志。') },
                { fr: 'Permettez-moi de nuancer : tout dépend du contexte…', gloss: t('Introduire une [[nuance|nuance]] plutôt que de céder.', 'Introduce a [[nuance|nuance]] rather than give in.', '引入[[nuance|细致区分]]，而非直接让步。') },
                { fr: 'Oui, vous avez raison, je me suis trompé.', gloss: t('Abandonner sa position ferme la discussion : évitez.', 'Abandoning your position closes the discussion: avoid it.', '放弃立场会终止讨论：应当避免。'), incorrect: true },
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              title: t('Ce que le jury note vraiment', 'What the panel actually marks', '考官真正评什么'),
              text: t(
                'La grille distingue quatre critères : capacité à argumenter, aisance dans l’interaction, étendue du lexique et correction grammaticale. Les deux premiers pèsent plus que les deux derniers. Un candidat fluide qui fait quelques fautes obtient une meilleure note qu’un candidat irréprochable mais hésitant.',
                'The grid distinguishes four criteria: ability to argue, ease in interaction, range of vocabulary and grammatical accuracy. The first two weigh more than the last two. A fluent candidate who makes a few mistakes scores higher than a flawless but hesitant one.',
                '评分表分为四项：论证能力、互动流畅度、词汇广度与语法正确性。前两项权重高于后两项。表达流畅但有些许错误的考生，得分高于语言无误却犹豫迟疑的考生。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_b2_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Huit questions sur l’argumentation et l’implicite.', 'Eight questions on argumentation and implicit meaning.', '八道题，考查论证与隐含义。'),
      lessons: [
        {
          id: 'les_b2_q',
          moduleId: 'mod_b2_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_delf_b2',
          title: t('Quiz — DELF B2', 'Quiz — DELF B2', '测验 — DELF B2'),
          summary: t('8 questions sur l’essai, la lettre formelle, l’implicite et le débat.', '8 questions on the essay, the formal letter, implicit meaning and the debate.', '8 道题，涵盖论述文、正式书信、隐含义与辩论。'),
        },
      ],
    },
  ],
};
