import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_c1_debat';

export const c1DebatCourse: Course = {
  id: ID,
  slug: 'c1-debat',
  level: 'C1',
  accentFrom: '#a5b4fc',
  accentTo: '#1e40af',
  status: 'published',
  title: t('Débattre et convaincre', 'Debating and convincing', '辩论与说服'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Prendre la parole, tenir sa position, répondre à une objection sans se braquer. Les formules exactes d’un débat en français, et le rythme qui va avec.',
    'Taking the floor, holding your position, answering an objection without getting defensive. The exact phrases of a French debate, and the rhythm that goes with them.',
    '发言、守住立场、回应异议而不动怒。法语辩论的确切句式，以及与之相配的节奏。',
  ),
  tags: [t('Oral', 'Speaking', '口语'), t('Argumentation', 'Argumentation', '论证')],
  modules: [
    {
      id: 'mod_c1db_1',
      courseId: ID,
      title: t('Tenir sa place dans un échange', 'Holding your place in an exchange', '在交锋中站稳'),
      summary: t(
        'Structurer, réfuter, nuancer : les trois moments d’un débat.',
        'Structuring, refuting, qualifying: the three moments of a debate.',
        '搭结构、驳观点、留余地：辩论的三个环节。',
      ),
      lessons: [
        {
          id: 'les_c1db_1',
          moduleId: 'mod_c1db_1',
          kind: 'text',
          durationMin: 12,
          title: t('Structurer une intervention en deux minutes', 'Structuring a two-minute intervention', '两分钟发言的结构'),
          summary: t(
            'Le plan que le jury attend, et les mots qui le rendent audible.',
            'The plan the examiners expect, and the words that make it audible.',
            '考官期待的框架，以及让它听得见的那些词。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🎤',
              text: t(
                'Une intervention réussie s’entend avant d’être comprise. L’auditeur doit savoir à chaque instant où vous en êtes : c’est le rôle des mots de structure, qu’on prononce plus lentement que le reste.',
                'A successful intervention is heard before it is understood. The listener must know at every moment where you are: that is the job of structural markers, which you say more slowly than the rest.',
                '成功的发言是先被“听出结构”，再被理解。听者必须随时知道你讲到哪儿了：这正是结构词的作用，说的时候要比其余部分慢一些。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🗺️',
              title: t('Les cinq temps d’une prise de parole', 'The five stages of taking the floor', '发言的五个阶段'),
              hint: t(
                'Suivez la frise, {prenom} : chaque repère porte sa formule.',
                'Follow the timeline, {prenom}: each marker carries its phrase.',
                '{prenom}，沿时间轴看：每个节点都配有对应的句式。',
              ),
              widget: {
                kind: 'timeline',
                points: [
                  {
                    id: 'p1',
                    label: t('Reformuler la question', 'Reframe the question', '复述问题'),
                    headline: t('Vingt secondes pour montrer qu’on a compris', 'Twenty seconds to show you understood', '用二十秒表明你听懂了'),
                    example: 'Si je comprends bien, la question porte moins sur le coût que sur la méthode.',
                    gloss: t('Reformuler donne le temps de réfléchir et déplace déjà le débat sur votre terrain.', 'Reframing buys you thinking time and already shifts the debate onto your ground.', '复述既争取到思考时间，也已经把辩论拉到你的场地上。'),
                  },
                  {
                    id: 'p2',
                    label: t('Annoncer le plan', 'Announce the plan', '宣布提纲'),
                    headline: t('Deux points, jamais trois', 'Two points, never three', '两点，绝不三点'),
                    example: 'Je voudrais insister sur deux aspects : d’abord le calendrier, ensuite le financement.',
                    gloss: t('Annoncer deux points est tenable en deux minutes ; en annoncer trois vous oblige à bâcler le dernier.', 'Announcing two points is doable in two minutes; announcing three forces you to rush the last one.', '两分钟内讲两点是可行的；宣布三点就势必草草收尾。'),
                  },
                  {
                    id: 'p3',
                    label: t('Développer avec un exemple', 'Develop with an example', '举例展开'),
                    headline: t('Une idée, une preuve, une phrase de conclusion', 'One idea, one piece of evidence, one closing sentence', '一个观点、一个论据、一句小结'),
                    example: 'Prenons le cas de Nantes : la ville a réduit ses émissions sans perdre d’habitants.',
                    gloss: t('Un exemple précis vaut trois arguments abstraits, et il se retient. Nommez le lieu, le chiffre ou la date.', 'One precise example is worth three abstract arguments, and it sticks. Name the place, the figure or the date.', '一个具体例子胜过三个抽象论点，而且让人记住。要点出地点、数字或日期。'),
                  },
                  {
                    id: 'p4',
                    label: t('Concéder une objection', 'Concede an objection', '承认一个异议'),
                    headline: t('Le moment qui fait la différence au C1', 'The moment that makes the difference at C1', 'C1 水平的分水岭'),
                    example: 'Il est vrai que le coût initial est élevé. Reste que l’économie apparaît dès la troisième année.',
                    gloss: t('Concéder d’abord désarme l’objection avant qu’elle soit posée. « Reste que » relance sans agressivité.', 'Conceding first disarms the objection before it is even raised. “Reste que” picks things back up without aggression.', '先让步，可以在异议提出前就化解它。“reste que” 能不带攻击性地把话头接回来。'),
                  },
                  {
                    id: 'p5',
                    label: t('Conclure et rendre la parole', 'Conclude and hand back', '收尾并把话交回'),
                    headline: t('Une phrase, pas un résumé', 'One sentence, not a summary', '一句话，不是总结'),
                    example: 'C’est pourquoi il me semble préférable d’avancer par étapes.',
                    gloss: t('Terminer nettement évite la fin qui s’éteint, très pénalisée à l’oral d’examen.', 'Ending cleanly avoids the fade-out ending, heavily penalised in an oral exam.', '干脆收尾能避免虎头蛇尾，这在口试中扣分很重。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '🎧',
              title: t('Ralentir sur les mots de structure', 'Slow down on the structural markers', '在结构词上放慢'),
              text: t(
                '« D’abord », « ensuite », « c’est pourquoi » doivent s’entendre. Marquez une micro-pause avant et après : c’est ce qui donne l’impression d’un discours construit, même quand vous improvisez.',
                '“D’abord”, “ensuite”, “c’est pourquoi” must be heard. Put a micro-pause before and after: that is what gives the impression of a structured speech, even when you are improvising.',
                '“d’abord”“ensuite”“c’est pourquoi” 必须让人听见。前后各留一个极短的停顿：即使是即兴发挥，也会显得条理分明。',
              ),
            },
          ],
        },
        {
          id: 'les_c1db_2',
          moduleId: 'mod_c1db_1',
          kind: 'text',
          durationMin: 11,
          title: t('Répondre à une objection', 'Answering an objection', '回应异议'),
          summary: t(
            'Quatre stratégies, de la plus douce à la plus ferme.',
            'Four strategies, from the gentlest to the firmest.',
            '四种策略，由柔到刚。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🛡️',
              text: t(
                'En français, contredire frontalement referme la discussion. On commence donc presque toujours par accorder quelque chose à l’autre, avant de reprendre la main. Le choix de la formule dit exactement jusqu’où vous cédez.',
                'In French, contradicting head-on closes the discussion down. So you almost always start by granting the other person something before taking back the lead. The phrase you choose says exactly how far you are giving ground.',
                '在法语里，正面反驳会让讨论关闭。所以几乎总是先认可对方一点，再夺回主动。所选的句式恰恰表明你让步到什么程度。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎚️',
              title: t('De la concession au refus', 'From concession to refusal', '从让步到拒绝'),
              hint: t('Chaque cran est plus ferme que le précédent.', 'Each step is firmer than the one before.', '每一档都比前一档更强硬。'),
              widget: {
                kind: 'switcher',
                steps: [
                  {
                    id: 'o1',
                    label: t('J’accorde beaucoup', 'I grant a lot', '大幅让步'),
                    headline: t('Je vous rejoins sur…', 'Je vous rejoins sur…', 'Je vous rejoins sur……'),
                    example: 'Je vous rejoins sur le constat, même si j’en tire une autre conclusion.',
                    gloss: t('On valide les faits et on déplace le désaccord vers l’interprétation. Presque impossible à contrer.', 'You validate the facts and move the disagreement onto interpretation. Almost impossible to counter.', '认可事实，把分歧转移到解读上。几乎无法反驳。'),
                  },
                  {
                    id: 'o2',
                    label: t('J’accorde un point', 'I grant one point', '承认一点'),
                    headline: t('Il est vrai que… mais', 'Il est vrai que… mais', 'Il est vrai que…… mais'),
                    example: 'Il est vrai que le dispositif coûte cher, mais il évite des dépenses plus lourdes.',
                    gloss: t('La concession classique. Le « mais » annonce que l’essentiel arrive après.', 'The classic concession. The “mais” signals that the main point comes next.', '经典的让步。“mais” 预告重点在后面。'),
                  },
                  {
                    id: 'o3',
                    label: t('Je nuance', 'I qualify', '提出保留'),
                    headline: t('Encore faut-il…', 'Encore faut-il…', 'Encore faut-il……'),
                    example: 'Encore faut-il que les communes disposent des moyens de l’appliquer.',
                    gloss: t('On accepte le principe et on pose une condition qui, en pratique, bloque tout. Formule très efficace.', 'You accept the principle and set a condition that, in practice, blocks everything. A very effective phrase.', '接受原则，却提出一个在实践中足以卡死一切的条件。极为有效的句式。'),
                  },
                  {
                    id: 'o4',
                    label: t('Je conteste', 'I dispute', '直接质疑'),
                    headline: t('Permettez-moi de revenir sur…', 'Permettez-moi de revenir sur…', 'Permettez-moi de revenir sur……'),
                    example: 'Permettez-moi de revenir sur le chiffre que vous citez : il porte sur une seule région.',
                    gloss: t('Le désaccord franc, mais poli. « Permettez-moi » garde la forme là où « c’est faux » casserait l’échange.', 'Open disagreement, but polite. “Permettez-moi” keeps the form where “c’est faux” would break the exchange.', '坦率而不失礼的反对。“permettez-moi” 保住了体面，而 “c’est faux” 会把交流谈崩。'),
                  },
                ],
              },
            },
            {
              type: 'interactive',
              emoji: '🔬',
              title: t('Une réponse d’expert, décomposée', 'An expert answer, taken apart', '拆解一个高手的回应'),
              hint: t('Cliquez chaque segment pour voir la manœuvre.', 'Click each segment to see the manoeuvre.', '点击每一段，看看其中的手法。'),
              widget: {
                kind: 'sentence',
                segments: [
                  {
                    text: 'Votre remarque est juste sur un point,',
                    role: t('La concession d’ouverture', 'The opening concession', '开场让步'),
                    detail: t('On accorde immédiatement quelque chose. L’interlocuteur baisse sa garde et écoute la suite.', 'You grant something straight away. Your interlocutor lowers their guard and listens to what follows.', '一开口就先认可一点。对方放下戒备，才会听你往下说。'),
                  },
                  { text: 'et je ne le conteste pas.' },
                  {
                    text: 'Cela dit,',
                    role: t('Le pivot', 'The pivot', '转折点'),
                    detail: t('Plus souple que « mais », plus ferme que « toutefois ». C’est le connecteur le plus courant à l’oral soigné.', 'Softer than “mais”, firmer than “toutefois”. It is the most common connector in careful speech.', '比 “mais” 柔和，比 “toutefois” 坚定。这是考究口语中最常用的连接词。'),
                  },
                  { text: 'les données que vous citez' },
                  {
                    text: 'datent de 2019,',
                    role: t('L’argument factuel', 'The factual argument', '事实论据'),
                    detail: t('Un fait vérifiable, pas une opinion. C’est ce qui distingue une réfutation d’une contradiction.', 'A verifiable fact, not an opinion. That is what separates a refutation from a mere contradiction.', '这是可核实的事实，而非意见。这正是驳斥与抬杠的区别。'),
                  },
                  { text: 'et la situation a changé depuis.' },
                  {
                    text: 'D’où ma proposition d’actualiser l’étude.',
                    role: t('La sortie constructive', 'The constructive exit', '建设性收尾'),
                    detail: t('On ne s’arrête pas sur le désaccord : on propose la suite. C’est ce que le jury attend au niveau C1.', 'You do not stop at the disagreement: you propose what comes next. That is what examiners expect at C1.', '不停留在分歧上，而是提出下一步。这正是 C1 考官期待的。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('« Je ne suis pas d’accord » ferme la porte', '“Je ne suis pas d’accord” closes the door', '“Je ne suis pas d’accord” 会把门关上'),
              text: t(
                'La formule est correcte, mais elle place l’échange sur le terrain des personnes. Préférez porter le désaccord sur l’argument : « ce raisonnement suppose que… », « cette lecture néglige… ». On conteste l’idée, pas celui qui la porte.',
                'The phrase is correct, but it puts the exchange on personal ground. Prefer to aim the disagreement at the argument: “ce raisonnement suppose que…”, “cette lecture néglige…”. You dispute the idea, not the person holding it.',
                '这句话本身没错，却把交流拉到了人身层面。更好的做法是让分歧对准论点：“ce raisonnement suppose que……”“cette lecture néglige……”。质疑的是观点，不是持有观点的人。',
              ),
            },
          ],
        },
        {
          id: 'les_c1db_3',
          moduleId: 'mod_c1db_1',
          kind: 'text',
          durationMin: 10,
          title: t('Prendre et garder la parole', 'Taking and keeping the floor', '抢到并守住发言权'),
          summary: t(
            'Les formules pour entrer dans une discussion animée sans couper brutalement.',
            'The phrases for entering a lively discussion without cutting in rudely.',
            '在热烈讨论中插话而不失礼的句式。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🗣️',
              text: t(
                'Dans une réunion française, on se coupe la parole beaucoup plus qu’ailleurs, mais selon des règles précises. Attendre poliment son tour revient souvent à ne jamais parler ; il faut savoir entrer sans agresser.',
                'In a French meeting people interrupt far more than elsewhere, but by precise rules. Politely waiting your turn often means never speaking at all; you have to know how to come in without attacking.',
                '在法国的会议上，打断别人比别处频繁得多，但有明确的规矩。礼貌地等轮到自己，往往意味着永远开不了口；要懂得如何插话而不冒犯。',
              ),
            },
            {
              type: 'keyvalues',
              emoji: '🎯',
              title: t('Entrer dans la discussion', 'Getting into the discussion', '切入讨论'),
              entries: [
                { label: t('Juste un mot là-dessus', 'Juste un mot là-dessus', 'Juste un mot là-dessus'), value: t('Promet une intervention courte, ce qui fait céder l’autre. Tenez la promesse, ou vous ne l’obtiendrez plus.', 'Promises a short intervention, which makes the other person give way. Keep the promise, or you will not get it again.', '承诺只说几句，对方因此让出话头。要说到做到，否则下次没人再让。') },
                { label: t('Si je peux me permettre', 'Si je peux me permettre', 'Si je peux me permettre'), value: t('Très poli, presque cérémonieux. Efficace face à quelqu’un de plus haut placé.', 'Very polite, almost ceremonial. Effective with someone senior to you.', '非常礼貌，近乎郑重。面对上级时很有效。') },
                { label: t('Pour rebondir sur ce que vous dites', 'Pour rebondir sur ce que vous dites', 'Pour rebondir sur ce que vous dites'), value: t('Se raccroche au propos précédent : personne ne peut refuser une intervention qui prolonge la sienne.', 'Hooks onto what was just said: nobody can refuse an intervention that extends their own.', '接住上一句话：没人会拒绝一个延续自己观点的发言。') },
                { label: t('Un instant, si vous permettez', 'Un instant, si vous permettez', 'Un instant, si vous permettez'), value: t('Pour reprendre la parole qu’on vous a prise. Ferme, mais reste dans les formes.', 'To take back the floor someone took from you. Firm, but still within the forms.', '用来夺回被抢走的发言权。坚定，但不失礼数。') },
                { label: t('J’y viens', 'J’y viens', 'J’y viens'), value: t('La réponse à « et le budget ? » quand on vous interrompt : vous gardez la parole et promettez d’y répondre.', 'The answer to “and the budget?” when you are interrupted: you keep the floor and promise to get there.', '被人插问“预算呢？”时的回答：既守住话语权，又承诺稍后回应。') },
              ],
            },
            {
              type: 'interactive',
              emoji: '🔢',
              title: t('L’ordre d’une réfutation efficace', 'The order of an effective refutation', '有效驳斥的顺序'),
              hint: t('Remettez les cinq mouvements dans l’ordre.', 'Put the five moves back in order.', '把五个动作排好顺序。'),
              widget: {
                kind: 'order',
                prompt: t('De l’écoute à la relance :', 'From listening to handing back:', '从倾听到把话交回：'),
                items: [
                  { id: 'r1', text: t('Reprendre en une phrase ce que l’autre vient de dire', 'Sum up in one sentence what the other person just said', '用一句话概括对方刚说的内容') },
                  { id: 'r2', text: t('Accorder le point qui est effectivement juste', 'Grant the point that is genuinely right', '承认对方确实站得住的一点') },
                  { id: 'r3', text: t('Marquer le pivot : cela dit, reste que, encore faut-il', 'Mark the pivot: cela dit, reste que, encore faut-il', '标出转折：cela dit、reste que、encore faut-il') },
                  { id: 'r4', text: t('Poser le fait vérifiable qui change la lecture', 'Put down the verifiable fact that changes the reading', '摆出改变判断的可核实事实') },
                  { id: 'r5', text: t('Proposer la suite, et rendre la parole', 'Propose the next step, and hand the floor back', '提出下一步，并把话交回') },
                ],
                successNote: t(
                  'Cet enchaînement fonctionne aussi bien à l’oral du DALF qu’en réunion : il donne l’impression d’écouter, même quand on est en désaccord total.',
                  'This sequence works just as well in the DALF oral as in a meeting: it gives the impression of listening, even in total disagreement.',
                  '这套顺序在 DALF 口试和会议上同样管用：即使完全不同意，也会让人觉得你在倾听。',
                ),
              },
            },
          ],
        },
      ],
    },
    {
      id: 'mod_c1db_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur l’argumentation orale.', 'Six questions on spoken argumentation.', '六道题，考查口头论证。'),
      lessons: [
        {
          id: 'les_c1db_q',
          moduleId: 'mod_c1db_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_c1_debat',
          title: t('Quiz — Débattre et convaincre', 'Quiz — Debating and convincing', '测验 — 辩论与说服'),
          summary: t('6 questions sur les formules du débat.', '6 questions on debating phrases.', '6 道题，考查辩论句式。'),
        },
      ],
    },
  ],
};
