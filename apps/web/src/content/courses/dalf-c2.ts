import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_dalf_c2';

export const dalfC2Course: Course = {
  id: ID,
  slug: 'dalf-c2',
  level: 'C2',
  accentFrom: '#c4b5fd',
  accentTo: '#1e3a8a',
  status: 'published',
  title: t('Préparation au DALF C2', 'DALF C2 preparation', 'DALF C2 备考'),
  subtitle: t('2 modules · 4 leçons · 1 quiz noté', '2 modules · 4 lessons · 1 graded quiz', '2 个单元 · 4 节课 · 1 次评分测验'),
  description: t(
    'Le dernier échelon du CECRL. Deux épreuves seulement, mais totales : écouter un dossier sonore et en rendre compte, puis produire un article structuré à partir de documents. On n’y évalue plus la langue, mais la pensée qu’elle transporte.',
    'The top rung of the CEFR. Only two papers, but total ones: listen to an audio dossier and report on it, then produce a structured article from documents. Language itself is no longer assessed — the thought it carries is.',
    'CEFR 的最高级别。只有两项考试，却全面彻底：听一组音频材料并作出汇报，再依据文献撰写结构化文章。此时考查的已不是语言本身，而是语言所承载的思想。',
  ),
  tags: [t('DALF', 'DALF', 'DALF'), t('Niveau C2', 'Level C2', 'C2 级别'), t('Maîtrise', 'Mastery', '精通')],
  modules: [
    {
      id: 'mod_c2_1',
      courseId: ID,
      title: t('Écouter et restituer', 'Listening and reporting', '听辨与复述'),
      summary: t('L’épreuve orale : comprendre un dossier sonore long et le reformuler.', 'The oral paper: understanding a long audio dossier and reformulating it.', '口试：理解较长音频材料并加以复述。'),
      lessons: [
        {
          id: 'les_c2_1',
          moduleId: 'mod_c2_1',
          kind: 'text',
          durationMin: 13,
          title: t('L’épreuve orale C2 : compte rendu et développement', 'The C2 oral: report and development', 'C2 口试：汇报与展开'),
          summary: t(
            'Une heure de préparation sur un dossier sonore, puis trente minutes face au jury.',
            'One hour of preparation on an audio dossier, then thirty minutes facing the panel.',
            '一小时准备音频材料，随后三十分钟面对考官。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le DALF C2 ne comporte que deux épreuves, chacune notée sur 50 points. L’épreuve orale repose sur un dossier sonore d’une dizaine de minutes — journal, débat, conférence — écouté deux fois. Il faut ensuite produire un [[compte-rendu|compte rendu]] fidèle puis un développement personnel argumenté.',
                'The DALF C2 has only two papers, each marked out of 50. The oral paper is based on a ten-minute audio dossier — news bulletin, debate, lecture — played twice. You must then deliver a faithful [[compte-rendu|report]] followed by a personal argued development.',
                'DALF C2 只有两项考试，每项满分 50 分。口试基于约十分钟的音频材料——新闻、辩论或讲座——播放两遍。随后需先作忠实的[[compte-rendu|内容汇报]]，再进行个人论证性展开。',
              ),
            },
            {
              type: 'keyvalues',
              title: t('Le déroulé, minute par minute', 'The timing, minute by minute', '逐分钟流程'),
              entries: [
                { label: t('1re écoute', '1st listening', '第一遍听'), value: t('Ne rien écrire, ou presque : identifier la situation, les intervenants et la thèse dominante.', 'Write almost nothing: identify the situation, the speakers and the dominant thesis.', '几乎不做笔记：辨明情境、发言人与主导观点。') },
                { label: t('2e écoute', '2nd listening', '第二遍听'), value: t('Noter en arborescence, pas en phrases : idée principale, sous-idées, exemples chiffrés.', 'Take tree-structured notes, not sentences: main idea, sub-ideas, quantified examples.', '用树状结构记录，不写句子：主旨、次要观点、数据实例。') },
                { label: t('Préparation (1 h)', 'Preparation (1 h)', '准备（1 小时）'), value: t('Construire deux plans distincts : un pour le compte rendu, un pour le développement.', 'Build two separate plans: one for the report, one for the development.', '拟出两份独立提纲：一份用于汇报，一份用于展开。') },
                { label: t('Passage (30 min)', 'Performance (30 min)', '应试（30 分钟）'), value: t('10 min de compte rendu, 10 min de développement, 10 min d’entretien.', '10 min report, 10 min development, 10 min discussion.', '10 分钟汇报、10 分钟展开、10 分钟问答。') },
              ],
            },
            {
              type: 'callout',
              tone: 'danger',
              title: t('La confusion fatale', 'The fatal confusion', '致命的混淆'),
              text: t(
                'Le compte rendu est **neutre** : il restitue ce que disent les intervenants, sans jugement. Le développement est **personnel** : vous y prenez position. Mélanger les deux — glisser son avis dans le compte rendu — est la faute la plus fréquente et la plus lourdement sanctionnée à ce niveau.',
                'The report is **neutral**: it restates what the speakers say, without judgement. The development is **personal**: there you take a stance. Mixing the two — slipping your opinion into the report — is the most frequent and most heavily penalised error at this level.',
                '汇报必须**中立**：只复述发言者的内容，不加评判。展开则是**个人的**：在此表明立场。把两者混为一谈——在汇报中夹带个人观点——是这一级别最常见也最严重的错误。',
              ),
            },
            {
              type: 'examples',
              title: t('Marquer la frontière par les formules', 'Marking the boundary with set phrases', '用句式划清界线'),
              items: [
                { fr: 'Les intervenants s’accordent à reconnaître que… / L’un d’eux objecte cependant que…', gloss: t('Compte rendu : attribution systématique, aucun jugement.', 'Report: systematic attribution, no judgement.', '汇报：始终注明出处，不作评判。') },
                { fr: 'J’en viens à présent au développement personnel que m’inspire ce dossier.', gloss: t('Transition explicite : le jury sait où commence votre avis.', 'An explicit transition: the panel knows where your opinion starts.', '明确过渡：让考官知道个人观点从何开始。') },
                { fr: 'Il me semble que la position défendue par le second intervenant néglige…', gloss: t('Développement : la prise de position est assumée.', 'Development: the stance is owned.', '展开部分：明确承担自己的立场。') },
                { fr: 'Le premier intervenant a tort de penser que…', gloss: t('Placé dans le compte rendu, ce jugement fait chuter la note.', 'Placed in the report, this judgement collapses the mark.', '若出现在汇报部分，这类评判会使分数骤降。'), incorrect: true },
              ],
            },
          ],
        },
        {
          id: 'les_c2_2',
          moduleId: 'mod_c2_1',
          kind: 'text',
          durationMin: 12,
          title: t('Reformuler sans trahir : techniques avancées', 'Reformulating without betraying: advanced techniques', '不失真的改写：进阶技巧'),
          summary: t(
            'Restituer une pensée complexe dans ses propres mots, y compris ce qui n’est pas dit.',
            'Restating a complex thought in your own words, including what is left unsaid.',
            '用自己的话复述复杂思想，包括未言明的部分。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Au C2, la [[reformulation|reformulation]] porte aussi sur ce qui n’est pas dit : le ton, l’ironie, la [[connotation|connotation]]. Restituer « l’orateur a qualifié la mesure de “courageuse” » sans signaler l’ironie du guillemet, c’est trahir le document.',
                'At C2, [[reformulation|reformulation]] also covers what is not said: tone, irony, [[connotation|connotation]]. Reporting “the speaker called the measure ‘courageous’” without flagging the irony of the quotation marks betrays the document.',
                '在 C2 阶段，[[reformulation|改写]]还须涵盖未言明的部分：语气、反讽与[[connotation|感情色彩]]。若复述“发言人称该措施‘勇敢’”却不指出引号中的反讽，就是对材料的背离。',
              ),
            },
            {
              type: 'keyvalues',
              title: t('Restituer une intention, pas seulement un contenu', 'Reporting an intention, not just content', '复述意图，而不仅是内容'),
              entries: [
                { label: t('Ironie', 'Irony', '反讽'), value: t('« L’orateur feint de louer la mesure pour mieux en souligner l’inefficacité. »', '“The speaker feigns praise for the measure the better to underline its ineffectiveness.”', '“发言人佯装称赞该措施，实则突出其无效。”') },
                { label: t('[[litote|Litote]]', '[[litote|Litotes]]', '[[litote|曲言法]]'), value: t('« Sans se déclarer hostile, il laisse entendre son opposition. »', '“Without declaring himself hostile, he hints at his opposition.”', '“他并未明言反对，却暗示了自己的立场。”') },
                { label: t('Réserve', 'Reservation', '保留态度'), value: t('« La journaliste rapporte l’information au [[conditionnel|conditionnel]], marquant sa prudence. »', '“The journalist reports the information in the [[conditionnel|conditional]], signalling caution.”', '“记者用[[conditionnel|条件式]]转述该信息，以示谨慎。”') },
                { label: t('Implicite culturel', 'Cultural implicit', '文化隐含'), value: t('« La référence à mai 68 situe le propos dans une tradition contestataire. »', '“The reference to May 68 places the remark in a protest tradition.”', '“对 1968 年五月风暴的引用，将该言论置于抗议传统之中。”') },
                { label: t('Concession feinte', 'Feigned concession', '假意让步'), value: t('« Il concède un point mineur pour mieux réfuter l’essentiel. »', '“He concedes a minor point the better to refute the main one.”', '“他在次要问题上让步，以便更有力地驳斥核心论点。”') },
              ],
            },
            {
              type: 'examples',
              title: t('Du mot à l’intention', 'From word to intention', '从字面到意图'),
              items: [
                { fr: 'Entendu : « Cette réforme, si tant est qu’on puisse l’appeler ainsi… »', gloss: t('Restitution : « L’intervenant conteste jusqu’à la dénomination de la mesure. »', 'Report: “The speaker disputes even the naming of the measure.”', '复述：“发言人甚至质疑该措施的名称本身。”') },
                { fr: 'Entendu : « On nous promet des résultats. Depuis dix ans. »', gloss: t('Restitution : « Le ton, ironique, souligne la répétition des promesses non tenues. »', 'Report: “The ironic tone underlines repeated unkept promises.”', '复述：“反讽的语气强调了承诺一再落空。”') },
                { fr: 'Restitution : « Il a dit que la réforme n’était pas bonne. »', gloss: t('Trop plat : l’intention et le registre disparaissent.', 'Too flat: intention and register vanish.', '过于平淡：意图与语体都消失了。'), incorrect: true },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              title: t('L’entraînement le plus efficace', 'The most effective training', '最有效的训练'),
              text: t(
                'Écoutez dix minutes d’une matinale de radio française, puis enregistrez-vous en restituant le contenu pendant trois minutes, sans notes. Réécoutez-vous : vous entendrez immédiatement où vous avez paraphrasé au lieu de reformuler.',
                'Listen to ten minutes of a French radio breakfast show, then record yourself reporting the content for three minutes, without notes. Play it back: you will hear at once where you paraphrased instead of reformulating.',
                '听十分钟法语广播早间节目，然后不看笔记录下自己三分钟的复述。回放录音：你会立刻听出哪些地方只是照搬而非改写。',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_c2_2',
      courseId: ID,
      title: t('Écrire au niveau C2', 'Writing at C2 level', 'C2 级别的写作'),
      summary: t('L’article structuré et ce qui, dans le style, signale la maîtrise.', 'The structured article, and what in style signals mastery.', '结构化文章，以及文风中体现精通的标志。'),
      lessons: [
        {
          id: 'les_c2_3',
          moduleId: 'mod_c2_2',
          kind: 'text',
          durationMin: 13,
          title: t('L’article structuré : du dossier au texte', 'The structured article: from dossier to text', '结构化文章：从材料到成文'),
          summary: t(
            'Trois heures trente pour produire un texte de 700 mots à partir d’un dossier de plusieurs pages.',
            'Three and a half hours to produce a 700-word text from a multi-page dossier.',
            '三个半小时，依据数页材料写出 700 词的文章。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'L’épreuve écrite du C2 fournit un dossier de quatre à six documents et une [[consigne|consigne]] précise : rédiger un article, un éditorial, un rapport ou une lettre ouverte, pour un destinataire identifié. Le genre demandé fait partie de la note : un article de vulgarisation et un rapport administratif n’ont ni la même syntaxe ni le même [[registre|registre]].',
                'The C2 writing paper provides a dossier of four to six documents and a precise [[consigne|instruction]]: write an article, an editorial, a report or an open letter, for an identified addressee. The required genre is part of the mark: a popular-science article and an administrative report share neither syntax nor [[registre|register]].',
                'C2 笔试提供四到六份材料和明确的[[consigne|题目要求]]：为特定读者撰写文章、社论、报告或公开信。所要求的文体本身即为评分内容：科普文章与行政报告在句法与[[registre|语体]]上截然不同。',
              ),
            },
            {
              type: 'table',
              caption: t('Quatre genres, quatre contraintes', 'Four genres, four constraints', '四种文体，四种要求'),
              headers: [t('Genre', 'Genre', '文体'), t('Destinataire', 'Addressee', '读者'), t('Registre', 'Register', '语体'), t('Marque distinctive', 'Distinctive feature', '显著特征')],
              rows: [
                [t('Article de presse', 'Press article', '报刊文章'), t('grand public', 'general public', '普通读者'), t('courant soutenu', 'standard-to-formal', '通用偏正式'), t('accroche, sous-titres, exemples concrets', 'hook, subheadings, concrete examples', '导语、小标题、具体实例')],
                [t('Éditorial', 'Editorial', '社论'), t('lecteurs fidèles', 'regular readers', '固定读者'), t('soutenu, engagé', 'formal, committed', '正式且立场鲜明'), t('prise de position assumée dès l’ouverture', 'a stance owned from the opening', '开篇即明确表态')],
                [t('Rapport', 'Report', '报告'), t('hiérarchie, institution', 'management, institution', '上级、机构'), t('soutenu, impersonnel', 'formal, impersonal', '正式且不带个人色彩'), t('[[nominalisation|nominalisations]], [[voix-passive|voix passive]], recommandations', '[[nominalisation|nominalisations]], [[voix-passive|passive voice]], recommendations', '[[nominalisation|名词化]]、[[voix-passive|被动语态]]、建议')],
                [t('Lettre ouverte', 'Open letter', '公开信'), t('autorité + opinion publique', 'an authority + public opinion', '当局与公众'), t('soutenu, rhétorique', 'formal, rhetorical', '正式且富修辞'), t('apostrophe, questions oratoires', 'direct address, rhetorical questions', '呼语、反问')],
              ],
            },
            {
              type: 'keyvalues',
              title: t('Répartition des 3 h 30', 'Splitting the 3 h 30', '3 小时 30 分钟的分配'),
              entries: [
                { label: t('45 min', '45 min', '45 分钟'), value: t('Lecture du dossier et relevé des idées, par thème et non par document.', 'Reading the dossier and noting ideas, by theme rather than by document.', '阅读材料并按主题（而非按文献）记录观点。') },
                { label: t('30 min', '30 min', '30 分钟'), value: t('Plan détaillé : chaque partie adossée à des documents précis.', 'Detailed plan: each part anchored to specific documents.', '详细提纲：每部分都对应具体材料。') },
                { label: t('105 min', '105 min', '105 分钟'), value: t('Rédaction au propre, sans brouillon intégral — le temps ne le permet pas.', 'Writing the final version, with no full draft — there is no time.', '直接写终稿，不打完整草稿——时间不允许。') },
                { label: t('30 min', '30 min', '30 分钟'), value: t('Relecture ciblée : accords, connecteurs, répétitions, longueur des phrases.', 'Targeted proofreading: agreements, connectors, repetitions, sentence length.', '定向复查：性数配合、连接词、重复、句长。') },
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              title: t('Le dossier n’est pas un stock de citations', 'The dossier is not a stock of quotations', '材料不是引文仓库'),
              text: t(
                'Un article C2 ne juxtapose pas les sources : il les digère. Chaque idée empruntée doit être fondue dans votre propre argumentation, attribuée si nécessaire, mais jamais recopiée. Un texte qui enchaîne « selon le document 2… selon le document 3… » relève encore du C1.',
                'A C2 article does not juxtapose sources: it digests them. Every borrowed idea must be melted into your own argument, attributed where necessary, but never copied. A text that strings together “selon le document 2… selon le document 3…” is still C1 work.',
                'C2 文章不是把材料并列堆砌，而是加以消化。每一个借来的观点都必须融入你自己的论证，必要时注明出处，但绝不照抄。不断出现“selon le document 2… selon le document 3…”的文章仍停留在 C1 水平。',
              ),
            },
          ],
        },
        {
          id: 'les_c2_4',
          moduleId: 'mod_c2_2',
          kind: 'text',
          durationMin: 12,
          title: t('Style, ironie, implicite : la signature du C2', 'Style, irony, implicit: the C2 signature', '文风、反讽与隐含：C2 的标志'),
          summary: t(
            'Les procédés qui font qu’une copie ne ressemble plus à un exercice scolaire.',
            'The devices that stop a paper looking like a school exercise.',
            '让作文不再像课堂练习的写作手法。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'À ce niveau, correction et richesse lexicale ne suffisent plus : elles sont attendues. Ce qui distingue une copie C2, c’est la présence d’une voix — un texte dont on sent qu’il a été pensé par quelqu’un, et non produit par application d’un plan.',
                'At this level, accuracy and lexical range are no longer enough: they are expected. What sets a C2 paper apart is the presence of a voice — a text you can feel was thought by someone, not produced by applying a template.',
                '在这一级别，语言正确与词汇丰富已不足为奇：它们是基本要求。真正区分 C2 作文的是一种"声音"——让人感到这是某个人思考的产物，而非套用模板写出的文章。',
              ),
            },
            {
              type: 'keyvalues',
              title: t('Cinq procédés à maîtriser', 'Five devices to master', '需掌握的五种手法'),
              entries: [
                { label: t('[[litote|Litote]]', '[[litote|Litotes]]', '[[litote|曲言法]]'), value: t('« Le bilan n’est pas des plus flatteurs. » Dire moins pour signifier davantage.', '“Le bilan n’est pas des plus flatteurs.” Saying less to mean more.', '“Le bilan n’est pas des plus flatteurs.” 以少言多。') },
                { label: t('[[euphemisme|Euphémisme]]', '[[euphemisme|Euphemism]]', '[[euphemisme|委婉语]]'), value: t('« un ajustement des effectifs » pour désigner des suppressions de postes.', '“un ajustement des effectifs” to refer to job cuts.', '用“un ajustement des effectifs”指代裁员。') },
                { label: t('[[perpehrase|Périphrase]]', '[[perpehrase|Circumlocution]]', '[[perpehrase|迂回表达]]'), value: t('« la langue de Molière », « le pays du Soleil-Levant » : évite la répétition et ajoute une couleur culturelle.', '“la langue de Molière”, “le pays du Soleil-Levant”: avoids repetition and adds cultural colour.', '“la langue de Molière”“le pays du Soleil-Levant”：既避免重复，又增添文化色彩。') },
                { label: t('[[anaphore|Reprise anaphorique]]', '[[anaphore|Anaphoric reference]]', '[[anaphore|回指]]'), value: t('Reprendre un nom par un synonyme évaluatif : « cette décision » → « cette volte-face ».', 'Referring back with an evaluative synonym: “cette décision” → “cette volte-face”.', '用带评价色彩的同义词回指：“cette décision” → “cette volte-face”。') },
                { label: t('Question oratoire', 'Rhetorical question', '反问'), value: t('« Faut-il pour autant renoncer ? » Relance le raisonnement sans rompre le fil.', '“Faut-il pour autant renoncer ?” Restarts the reasoning without breaking the thread.', '“Faut-il pour autant renoncer ?” 推进论证而不中断行文。') },
              ],
            },
            {
              type: 'examples',
              title: t('La même idée, deux niveaux', 'The same idea, two levels', '同一想法，两种水平'),
              items: [
                { fr: 'Le gouvernement a changé d’avis, ce qui est surprenant et pose problème.', gloss: t('Correct, mais scolaire : niveau B2.', 'Correct, but school-like: B2 level.', '正确却显生硬：B2 水平。') },
                { fr: 'Cette volte-face, dont on cherche encore la justification, ne laisse pas d’interroger.', gloss: t('[[anaphore|Reprise]] évaluative, [[litote|litote]], registre [[soutenu|soutenu]] : C2.', 'Evaluative [[anaphore|reference]], [[litote|litotes]], [[soutenu|formal]] register: C2.', '评价性[[anaphore|回指]]、[[litote|曲言]]、[[soutenu|正式]]语体：C2。') },
                { fr: 'On peut se demander si l’objectif affiché était bien celui qui était poursuivi.', gloss: t('Doute exprimé sans accusation directe : maîtrise de l’[[implicite|implicite]].', 'Doubt expressed without direct accusation: mastery of the [[implicite|implicit]].', '不作直接指控地表达怀疑：驾驭[[implicite|隐含义]]。') },
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              title: t('Le test de la lecture à voix haute', 'The read-aloud test', '朗读检验法'),
              text: t(
                'Relisez votre texte à voix haute. Si vous manquez de souffle, vos phrases sont trop longues. Si le rythme est monotone, alternez : une phrase longue, une phrase courte. Le C2 s’entend autant qu’il se lit.',
                'Read your text aloud. If you run out of breath, your sentences are too long. If the rhythm is monotonous, alternate: one long sentence, one short. C2 is heard as much as it is read.',
                '把文章朗读一遍。若感到气不够用，说明句子太长；若节奏单调，就交替使用长句与短句。C2 的水准既看得见，也听得出。',
              ),
            },
            {
              type: 'quote',
              text: t(
                'Ce qui se conçoit bien s’énonce clairement, et les mots pour le dire arrivent aisément.',
                'What is well conceived is clearly stated, and the words to say it come easily.',
                '凡构思清晰者，表达必明白，措辞自然涌现。',
              ),
              source: t('Nicolas Boileau, Art poétique, 1674', 'Nicolas Boileau, Art poétique, 1674', '尼古拉·布瓦洛，《诗艺》，1674 年'),
            },
          ],
        },
      ],
    },
    {
      id: 'mod_c2_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Huit questions sur les deux épreuves et les procédés de style.', 'Eight questions on the two papers and stylistic devices.', '八道题，考查两项考试与修辞手法。'),
      lessons: [
        {
          id: 'les_c2_q',
          moduleId: 'mod_c2_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_dalf_c2',
          title: t('Quiz — DALF C2', 'Quiz — DALF C2', '测验 — DALF C2'),
          summary: t('8 questions sur le compte rendu, l’article et les figures de style.', '8 questions on the report, the article and stylistic devices.', '8 道题，涵盖汇报、文章写作与修辞手法。'),
        },
      ],
    },
  ],
};
