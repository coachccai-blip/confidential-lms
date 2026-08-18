import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_c1_academique';

export const c1AcademiqueCourse: Course = {
  id: ID,
  slug: 'c1-academique',
  level: 'C1',
  accentFrom: '#a5b4fc',
  accentTo: '#1e40af',
  status: 'published',
  title: t('Écrire à l’université : synthèse et dissertation', 'Writing at university: synthesis and dissertation', '大学写作：综述与论说文'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'La méthode française de la dissertation, la synthèse de documents et les codes du style académique — reformulation, citation, objectivité apparente.',
    'The French dissertation method, the synthesis of documents, and the codes of academic style — reformulation, quotation, apparent objectivity.',
    '法式论说文写作方法、材料综述，以及学术文体的规范——转述、引用与表面的客观性。',
  ),
  tags: [t('Écrit académique', 'Academic writing', '学术写作'), t('Méthodologie', 'Methodology', '方法论')],
  modules: [
    {
      id: 'mod_c1ac_1',
      courseId: ID,
      title: t('Méthode et style', 'Method and style', '方法与文体'),
      summary: t(
        'La dissertation, la synthèse, et l’écriture impersonnelle.',
        'The dissertation, the synthesis, and impersonal writing.',
        '论说文、综述，以及无人称写作。',
      ),
      lessons: [
        {
          id: 'les_c1ac_1',
          moduleId: 'mod_c1ac_1',
          kind: 'text',
          durationMin: 14,
          title: t('La dissertation : problématiser avant de rédiger', 'The dissertation: problematising before writing', '论说文：动笔前先提出问题'),
          summary: t(
            'Analyser le sujet, dégager une problématique, choisir un plan — les trois quarts du travail.',
            'Analysing the topic, drawing out a problematic, choosing a plan — three quarters of the work.',
            '分析题目、提炼问题意识、选择结构——这占了四分之三的工作量。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'La dissertation française n’est pas un essai d’opinion. C’est la mise en scène d’un **problème** : le sujet contient une tension, on l’expose, on l’explore, on la résout partiellement. Un devoir qui se contente de répondre « oui, et voici pourquoi » est jugé hors sujet, quelle que soit la qualité de la langue.',
                'The French dissertation is not an opinion essay. It stages a **problem**: the topic contains a tension, which you expose, explore, and partly resolve. A paper that merely answers “yes, and here is why” is judged off-topic, however good the language.',
                '法式论说文不是观点随笔，而是对一个**问题**的呈现：题目内含张力，你要把它揭示、展开、部分地化解。若只是回答“是的，理由如下”，无论语言多好都会被判为偏题。',
              ),
            },
            {
              type: 'table',
              caption: t('Les quatre étapes préparatoires', 'The four preparatory steps', '四个准备步骤'),
              headers: [t('Étape', 'Step', '步骤'), t('Question à se poser', 'Question to ask', '要问自己的问题'), t('Durée indicative', 'Rough time', '大致耗时')],
              rows: [
                [t('Analyse des termes', 'Analysing the terms', '分析题中术语'), t('Chaque mot du sujet a-t-il plusieurs sens ? Lequel retient-on ?', 'Does each word of the topic have several meanings? Which one is retained?', '题目中每个词是否有多重含义？取哪一层？'), t('10 minutes', '10 minutes', '10 分钟')],
                [t('Problématique', 'Problematic', '问题意识'), t('Quelle contradiction le sujet cache-t-il ?', 'What contradiction does the topic conceal?', '题目掩藏着怎样的矛盾？'), t('10 minutes', '10 minutes', '10 分钟')],
                [t('Plan détaillé', 'Detailed outline', '详细提纲'), t('Chaque partie répond-elle à une facette du problème ?', 'Does each part answer one facet of the problem?', '每一部分是否回应问题的一个侧面？'), t('20 minutes', '20 minutes', '20 分钟')],
                [t('Exemples', 'Examples', '例证'), t('Ai-je un exemple précis par sous-partie ?', 'Do I have one precise example per sub-part?', '每个小节是否都有一个具体例证？'), t('10 minutes', '10 minutes', '10 分钟')],
              ],
            },
            {
              type: 'keyvalues',
              title: t('Trois plans classiques', 'Three classic outlines', '三种经典结构'),
              entries: [
                { label: t('Dialectique', 'Dialectical', '正反合'), value: t('Thèse / antithèse / dépassement. Convient aux sujets formulés en question fermée : « Faut-il… ? »', 'Thesis / antithesis / synthesis. Suited to closed questions: “Faut-il… ?”', '正题 / 反题 / 超越。适用于封闭式提问：“Faut-il… ?”') },
                { label: t('Analytique', 'Analytical', '分析式'), value: t('Description / causes / conséquences. Pour les sujets d’explication d’un phénomène.', 'Description / causes / consequences. For topics explaining a phenomenon.', '描述 / 原因 / 后果。适用于解释某一现象的题目。') },
                { label: t('Thématique', 'Thematic', '主题式'), value: t('Trois angles complémentaires — économique, social, culturel. Risque : la juxtaposition sans progression.', 'Three complementary angles — economic, social, cultural. Risk: juxtaposition with no progression.', '三个互补角度——经济、社会、文化。风险：只是并列而没有递进。') },
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              title: t('Le troisième temps n’est pas un compromis', 'The third movement is not a compromise', '第三部分不是折中'),
              text: t(
                'Le « dépassement » d’un plan dialectique ne consiste pas à dire « les deux thèses ont du bon ». Il déplace la question : il montre que l’opposition initiale reposait sur un présupposé qu’on peut abandonner. Sans ce déplacement, la troisième partie n’est qu’une redite tiède.',
                'The “synthesis” of a dialectical outline does not consist in saying “both theses have merit”. It shifts the question: it shows that the initial opposition rested on a presupposition that can be dropped. Without that shift, the third part is only a lukewarm repetition.',
                '正反合结构中的“合”并非说“两种观点都有道理”。它移动了问题本身：表明最初的对立建立在一个可以放弃的预设之上。没有这一移动，第三部分只是温吞的重复。',
              ),
            },
            { type: 'heading', text: t('Introduction et conclusion', 'Introduction and conclusion', '引言与结论') },
            {
              type: 'paragraph',
              text: t(
                'L’introduction suit un entonnoir en quatre mouvements : **accroche**, **définition des termes**, **problématique**, **annonce du plan**. La conclusion en compte deux : **bilan** des étapes parcourues, puis **ouverture** — une question voisine, jamais une opinion personnelle nouvelle.',
                'The introduction follows a funnel in four movements: **hook**, **definition of terms**, **problematic**, **announcement of the outline**. The conclusion has two: a **summary** of the steps covered, then an **opening** — a neighbouring question, never a fresh personal opinion.',
                '引言遵循漏斗式四步：**切入**、**界定术语**、**提出问题**、**交代结构**。结论有两步：**总结**已走过的论证步骤，然后**开放**——提出一个相邻的问题，绝不是新的个人观点。',
              ),
            },
          ],
        },
        {
          id: 'les_c1ac_2',
          moduleId: 'mod_c1ac_1',
          kind: 'text',
          durationMin: 13,
          title: t('La synthèse de documents', 'The synthesis of documents', '材料综述'),
          summary: t(
            'Confronter trois ou quatre textes sans jamais donner son avis : l’exercice le plus codifié.',
            'Confronting three or four texts without ever giving your own view: the most codified exercise of all.',
            '对照三四篇材料而绝不表达己见：规范最严格的一项训练。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'La synthèse consiste à faire dialoguer plusieurs documents autour d’une problématique commune. Deux interdits en gouvernent l’écriture : **aucune opinion personnelle**, et **aucune citation longue**. Tout doit être reformulé, tout doit être attribué.',
                'A synthesis makes several documents talk to each other around a shared problematic. Two prohibitions govern the writing: **no personal opinion**, and **no long quotation**. Everything must be reformulated, and everything must be attributed.',
                '综述要让若干材料围绕同一问题展开对话。写作受两条禁令约束：**不得掺入个人观点**，**不得长篇引用**。一切都必须转述，一切都必须注明出处。',
              ),
            },
            {
              type: 'table',
              caption: t('Confronter les documents', 'Confronting the documents', '对照材料'),
              headers: [t('Relation', 'Relation', '关系'), t('Formulations', 'Wordings', '表述方式')],
              rows: [
                [t('Convergence', 'Convergence', '一致'), t('Les trois auteurs s’accordent sur… / Ce constat, partagé par X et Y, …', 'Les trois auteurs s’accordent sur… / Ce constat, partagé par X et Y, …', 'Les trois auteurs s’accordent sur… / Ce constat, partagé par X et Y, …')],
                [t('Divergence', 'Divergence', '分歧'), t('X y voit une chance, là où Y redoute… / L’analyse de Z s’écarte sur ce point.', 'X y voit une chance, là où Y redoute… / L’analyse de Z s’écarte sur ce point.', 'X y voit une chance, là où Y redoute… / L’analyse de Z s’écarte sur ce point.')],
                [t('Complémentarité', 'Complementarity', '互补'), t('Le document 3 apporte à cette analyse une dimension absente des deux premiers.', 'Le document 3 apporte à cette analyse une dimension absente des deux premiers.', 'Le document 3 apporte à cette analyse une dimension absente des deux premiers.')],
                [t('Nuance', 'Qualification', '限定'), t('X ne va pas jusqu’à affirmer que… / L’auteur se garde de généraliser.', 'X ne va pas jusqu’à affirmer que… / L’auteur se garde de généraliser.', 'X ne va pas jusqu’à affirmer que… / L’auteur se garde de généraliser.')],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              title: t('Reformuler n’est pas paraphraser', 'Reformulating is not paraphrasing', '转述不等于换词复述'),
              text: t(
                'Paraphraser, c’est remplacer chaque mot par un synonyme en gardant la structure. Reformuler, c’est **changer le point de vue de la phrase** : passer du verbe au nom, de l’actif au passif, du particulier au général. La différence est immédiatement visible pour un correcteur.',
                'To paraphrase is to replace each word with a synonym while keeping the structure. To reformulate is to **change the sentence’s point of view**: from verb to noun, from active to passive, from the particular to the general. The difference is immediately visible to a marker.',
                '换词复述是保留结构、逐词替换同义词。转述则是**改变句子的视角**：动词变名词、主动变被动、个别变一般。这一区别阅卷人一眼可见。',
              ),
            },
            {
              type: 'examples',
              title: t('Trois techniques de reformulation', 'Three reformulation techniques', '三种转述技巧'),
              items: [
                { fr: 'Les prix ont fortement augmenté. → La forte hausse des prix…', gloss: t('Nominalisation : le verbe devient un nom, la phrase se compacte.', 'Nominalisation: the verb becomes a noun and the sentence compacts.', '名词化：动词变名词，句子被压缩。') },
                { fr: 'L’auteur critique cette mesure. → Cette mesure fait l’objet d’une critique.', gloss: t('Changement de voix : l’objet devient sujet, l’auteur passe au second plan.', 'Change of voice: the object becomes the subject, the author recedes.', '语态转换：宾语变主语，作者退居次要位置。') },
                { fr: 'Beaucoup de jeunes quittent la région. → L’exode des jeunes s’accentue.', gloss: t('Montée en généralité : le fait devient un phénomène nommé.', 'Rising in generality: the fact becomes a named phenomenon.', '上升到一般层面：具体事实变为有名称的现象。') },
                { fr: 'Les prix ont beaucoup monté.', gloss: t('Simple substitution de synonymes : c’est de la paraphrase, pas une reformulation.', 'Mere synonym substitution: this is paraphrase, not reformulation.', '只是替换同义词：属于换词复述，而非转述。'), incorrect: true },
              ],
            },
          ],
        },
        {
          id: 'les_c1ac_3',
          moduleId: 'mod_c1ac_1',
          kind: 'text',
          durationMin: 12,
          title: t('Le style académique : objectivité et modalisation', 'Academic style: objectivity and hedging', '学术文体：客观性与限定语'),
          summary: t(
            'Écrire sans « je », citer correctement, et doser la prudence sans se dérober.',
            'Writing without “je”, quoting properly, and calibrating caution without hiding.',
            '不用 “je” 写作、正确引用，并把谨慎拿捏得恰到好处而不回避立场。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'L’écrit académique français évite le « je » sans pour autant devenir anonyme. Il déplace la subjectivité vers des constructions impersonnelles : « on », « il apparaît que », « cette étude montre ». L’auteur reste présent, mais par ses choix d’analyse, non par sa personne.',
                'French academic writing avoids “je” without becoming anonymous. It shifts subjectivity into impersonal constructions: “on”, “il apparaît que”, “cette étude montre”. The author remains present, but through analytical choices rather than in person.',
                '法语学术写作避免使用 “je”，但并不因此变得匿名。它把主观性转移到无人称结构中：“on”“il apparaît que”“cette étude montre”。作者依然在场，只是通过分析选择而非本人现身。',
              ),
            },
            {
              type: 'keyvalues',
              title: t('Remplacer le « je »', 'Replacing “je”', '替代 “je” 的方式'),
              entries: [
                { label: t('Le « on » d’analyse', 'The analytical “on”', '分析性的 “on”'), value: t('« On observe que », « on peut avancer que ». Standard dans les sciences humaines.', '“On observe que”, “on peut avancer que”. Standard in the humanities.', '“On observe que”“on peut avancer que”。人文学科的标准写法。') },
                { label: t('Le sujet inanimé', 'The inanimate subject', '无生命主语'), value: t('« Cette étude montre », « les données suggèrent », « le tableau 2 indique ».', '“Cette étude montre”, “les données suggèrent”, “le tableau 2 indique”.', '“Cette étude montre”“les données suggèrent”“le tableau 2 indique”。') },
                { label: t('La tournure impersonnelle', 'The impersonal turn', '无人称结构'), value: t('« Il apparaît que », « il convient de distinguer », « il n’est pas exclu que » + subjonctif.', '“Il apparaît que”, “il convient de distinguer”, “il n’est pas exclu que” + subjunctive.', '“Il apparaît que”“il convient de distinguer”“il n’est pas exclu que” + 虚拟式。') },
                { label: t('Le passif', 'The passive', '被动语态'), value: t('« Ces résultats ont été obtenus par… » : place la méthode au centre.', '“Ces résultats ont été obtenus par…”: puts the method at the centre.', '“Ces résultats ont été obtenus par…”：把方法置于中心。') },
              ],
            },
            {
              type: 'table',
              caption: t('Doser la certitude', 'Calibrating certainty', '把握确定性程度'),
              headers: [t('Degré', 'Degree', '程度'), t('Marqueurs', 'Markers', '标记语'), t('Effet', 'Effect', '效果')],
              rows: [
                [t('Fort', 'Strong', '强'), t('il est établi que, les données montrent que', 'il est établi que, les données montrent que', 'il est établi que、les données montrent que'), t('engage l’auteur : à réserver aux faits solides', 'commits the author: reserve for solid facts', '作者承担责任：仅用于确凿事实')],
                [t('Moyen', 'Medium', '中'), t('il semble que, tout porte à croire que', 'il semble que, tout porte à croire que', 'il semble que、tout porte à croire que'), t('prudent mais affirmatif : le registre le plus utile', 'cautious yet affirmative: the most useful register', '谨慎而肯定：最有用的语体')],
                [t('Faible', 'Weak', '弱'), t('on pourrait supposer, il n’est pas impossible que', 'on pourrait supposer, il n’est pas impossible que', 'on pourrait supposer、il n’est pas impossible que'), t('hypothèse assumée comme telle', 'a hypothesis openly presented as such', '明确标示为假设')],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              title: t('Trop de prudence tue l’argument', 'Too much caution kills the argument', '过度谨慎会毁掉论证'),
              text: t(
                'Un texte où chaque phrase est modalisée — « il semblerait qu’on puisse peut-être envisager » — ne dit plus rien. La règle : moduler les **interprétations**, affirmer les **faits**. Un correcteur C1 sanctionne autant l’assertion brutale que l’effacement systématique.',
                'A text in which every sentence is hedged — “it would seem that one might perhaps consider” — says nothing at all. The rule: hedge **interpretations**, assert **facts**. A C1 marker penalises blunt assertion and systematic self-effacement alike.',
                '每句话都加限定语的文章——“似乎或许可以考虑”——等于什么也没说。规则是：对**解释**加限定，对**事实**下断言。C1 阅卷人对生硬断言和一味回避同样扣分。',
              ),
            },
            {
              type: 'examples',
              title: t('Citer sans plagier', 'Quoting without plagiarising', '引用而不抄袭'),
              items: [
                { fr: 'Comme le note Bourdieu, « le goût classe et classe celui qui classe » (1979, p. 6).', gloss: t('Citation courte entre guillemets français, référence complète.', 'A short quotation in French guillemets, with a full reference.', '用法语书名号的短引文，附完整出处。') },
                { fr: 'Selon cette analyse, les préférences esthétiques fonctionnent comme des marqueurs sociaux (Bourdieu, 1979).', gloss: t('Reformulation attribuée : la source reste citée même sans guillemets.', 'An attributed reformulation: the source is still cited even without quotation marks.', '注明出处的转述：即使没有引号也要标明来源。') },
                { fr: 'Les guillemets français sont « comme ceci », avec des espaces insécables.', gloss: t('L’usage typographique français diffère des guillemets anglais.', 'French typographic usage differs from English quotation marks.', '法语排印习惯与英语引号不同。') },
                { fr: 'Le goût classe et classe celui qui classe.', gloss: t('Reprise mot pour mot sans guillemets ni source : c’est un plagiat.', 'A word-for-word borrowing with no quotation marks or source: this is plagiarism.', '逐字照搬而无引号和出处：这是抄袭。'), incorrect: true },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mod_c1ac_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur la méthode et le style académiques.', 'Six questions on academic method and style.', '六道题，考查学术方法与文体。'),
      lessons: [
        {
          id: 'les_c1ac_q',
          moduleId: 'mod_c1ac_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_c1_academique',
          title: t('Quiz — Écrire à l’université', 'Quiz — Writing at university', '测验 — 大学写作'),
          summary: t('6 questions sur la dissertation et la synthèse.', '6 questions on the dissertation and the synthesis.', '6 道题，考查论说文与综述。'),
        },
      ],
    },
  ],
};
