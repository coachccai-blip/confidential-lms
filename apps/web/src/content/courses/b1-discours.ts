import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_b1_discours';

export const b1DiscoursCourse: Course = {
  id: ID,
  slug: 'b1-discours',
  level: 'B1',
  accentFrom: '#5eead4',
  accentTo: '#0ea5e9',
  status: 'published',
  title: t('Rapporter ce qui a été dit', 'Reporting what was said', '转述别人说的话'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Raconter une conversation, transmettre une consigne, rapporter une question. Ce qui change quand on passe du direct à l’indirect, et ce qui ne change pas.',
    'Retelling a conversation, passing on an instruction, reporting a question. What changes when you move from direct to indirect speech, and what does not.',
    '复述一段对话、转达一条指令、转述一个问题。从直接引语变成间接引语时，什么会变、什么不会变。',
  ),
  tags: [t('Grammaire', 'Grammar', '语法'), t('Oral', 'Speaking', '口语')],
  modules: [
    {
      id: 'mod_b1di_1',
      courseId: ID,
      title: t('Du direct à l’indirect', 'From direct to indirect', '从直接到间接'),
      summary: t(
        'Trois cas : une affirmation, une question, un ordre.',
        'Three cases: a statement, a question, an order.',
        '三种情况：陈述、疑问、命令。',
      ),
      lessons: [
        {
          id: 'les_b1di_1',
          moduleId: 'mod_b1di_1',
          kind: 'text',
          durationMin: 11,
          title: t('Rapporter une affirmation', 'Reporting a statement', '转述陈述句'),
          summary: t(
            'Ce qu’on enlève, ce qu’on ajoute, ce qui se déplace.',
            'What you remove, what you add, what moves.',
            '去掉什么、加上什么、什么位置要挪。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🗣️',
              text: t(
                'Passer au discours indirect, c’est enlever les guillemets et recoller la phrase avec « que ». Trois choses bougent en même temps : le pronom, le possessif, et parfois le temps du verbe.',
                'Moving into indirect speech means taking away the quotation marks and gluing the sentence back with “que”. Three things shift at once: the pronoun, the possessive, and sometimes the tense.',
                '改成间接引语，就是去掉引号，用 “que” 把句子接回来。三样东西同时变化：人称代词、物主限定词，有时还有动词时态。',
              ),
            },
            {
              type: 'examples',
              emoji: '🔄',
              title: t('La même phrase, avant et après', 'The same sentence, before and after', '同一句话，转述前后'),
              items: [
                {
                  fr: 'Paul dit : « Je suis fatigué. » → Paul dit qu’il est fatigué.',
                  gloss: t(
                    'Je devient il, et « que » relie les deux morceaux. Le temps ne bouge pas, parce que « dit » est au présent.',
                    'Je becomes il, and “que” joins the two parts. The tense does not move, because “dit” is in the present.',
                    'je 变成 il，用 “que” 把两部分连起来。时态不变，因为 “dit” 是现在时。',
                  ),
                },
                {
                  fr: 'Elle m’a écrit : « J’ai perdu mes clés. » → Elle m’a écrit qu’elle avait perdu ses clés.',
                  gloss: t(
                    'Ici le verbe introducteur est au passé : le passé composé recule au plus-que-parfait, et « mes » devient « ses ».',
                    'Here the introducing verb is in the past: the passé composé steps back to the pluperfect, and “mes” becomes “ses”.',
                    '这里引导动词是过去时：复合过去时退到愈过去时，“mes” 变成 “ses”。',
                  ),
                },
                {
                  fr: 'Paul dit qu’il est fatigué.',
                  gloss: t(
                    'On n’écrit jamais « Paul dit que : il est fatigué ». Les deux-points et les guillemets disparaissent complètement.',
                    'You never write “Paul dit que : il est fatigué”. The colon and the quotation marks vanish completely.',
                    '绝不能写成 “Paul dit que : il est fatigué”。冒号和引号完全消失。',
                  ),
                },
              ],
            },
            {
              type: 'interactive',
              emoji: '⏱️',
              title: t('Quand le verbe introducteur est au passé', 'When the introducing verb is in the past', '当引导动词是过去时'),
              hint: t(
                'Suivez la frise, {prenom} : chaque temps recule d’un cran.',
                'Follow the timeline, {prenom}: each tense steps back one notch.',
                '{prenom}，沿时间轴看：每个时态都后退一格。',
              ),
              widget: {
                kind: 'timeline',
                points: [
                  {
                    id: 't1',
                    label: t('présent → imparfait', 'present → imperfect', '现在时 → 未完成过去时'),
                    headline: t('Le recul le plus courant', 'The most common step back', '最常见的后退'),
                    example: '« Je travaille. » → Il a dit qu’il travaillait.',
                    gloss: t('Le présent du moment où il parlait devient de l’imparfait quand on le raconte plus tard.', 'The present of the moment he spoke becomes an imperfect when you retell it later.', '他说话当时的现在时，事后转述时变成未完成过去时。'),
                  },
                  {
                    id: 't2',
                    label: t('passé composé → plus-que-parfait', 'passé composé → pluperfect', '复合过去时 → 愈过去时'),
                    headline: t('Un passé avant le passé', 'A past before the past', '过去之前的过去'),
                    example: '« J’ai fini. » → Il a dit qu’il avait fini.',
                    gloss: t('L’auxiliaire passe à l’imparfait : « ai fini » devient « avait fini ».', 'The auxiliary moves to the imperfect: “ai fini” becomes “avait fini”.', '助动词变为未完成过去时：“ai fini” 变成 “avait fini”。'),
                  },
                  {
                    id: 't3',
                    label: t('futur → conditionnel', 'future → conditional', '将来时 → 条件式'),
                    headline: t('Le futur vu depuis le passé', 'The future seen from the past', '从过去看未来'),
                    example: '« Je viendrai. » → Il a dit qu’il viendrait.',
                    gloss: t('Ce n’est pas une hypothèse : c’est simplement le futur raconté après coup.', 'This is not a hypothesis: it is simply the future retold afterwards.', '这不是假设，只是事后讲述的将来。'),
                  },
                  {
                    id: 't4',
                    label: t('imparfait → imparfait', 'imperfect → imperfect', '未完成过去时 → 未完成过去时'),
                    headline: t('Le temps qui ne bouge plus', 'The tense that stops moving', '不再变化的时态'),
                    example: '« Je dormais. » → Il a dit qu’il dormait.',
                    gloss: t('L’imparfait et le plus-que-parfait sont déjà au fond du passé : ils restent tels quels.', 'The imperfect and the pluperfect are already deep in the past: they stay as they are.', '未完成过去时和愈过去时已经处于过去的最深处：保持原样。',),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🧭',
              title: t('Si le verbe introducteur est au présent, rien ne recule', 'If the introducing verb is in the present, nothing steps back', '若引导动词是现在时，则什么都不后退'),
              text: t(
                '« Il dit qu’il viendra » garde le futur. Le recul des temps ne se déclenche que si l’on rapporte depuis le passé : **il a dit**, **il avait dit**, **il disait**. C’est la première chose à vérifier.',
                '“Il dit qu’il viendra” keeps the future. The tense shift only kicks in when you report from the past: **il a dit**, **il avait dit**, **il disait**. That is the first thing to check.',
                '“Il dit qu’il viendra” 保留将来时。只有从过去转述时才会发生时态后退：**il a dit**、**il avait dit**、**il disait**。这是首先要确认的。',
              ),
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('Faites reculer le temps', 'Step the tense back', '让时态后退'),
              hint: t('Le verbe introducteur est au passé dans chaque phrase.', 'The introducing verb is in the past in every sentence.', '每句话的引导动词都是过去时。'),
              widget: {
                kind: 'fill',
                prompt: t('Complétez la phrase rapportée :', 'Complete the reported sentence:', '补全转述句：'),
                items: [
                  {
                    id: 'd1',
                    before: '« Je pars demain. » → Elle m’a dit qu’elle',
                    after: 'le lendemain.',
                    options: ['partait', 'part', 'partira'],
                    answer: 'partait',
                    why: t('Présent → imparfait. Notez aussi que « demain » devient « le lendemain » : les repères de temps reculent eux aussi.', 'Present → imperfect. Note too that “demain” becomes “le lendemain”: time markers step back as well.', '现在时 → 未完成过去时。另外注意 “demain” 变成 “le lendemain”：时间标记也随之后退。'),
                  },
                  {
                    id: 'd2',
                    before: '« J’ai réservé la salle. » → Il a expliqué qu’il',
                    after: 'la salle.',
                    options: ['avait réservé', 'a réservé', 'réservait'],
                    answer: 'avait réservé',
                    why: t('Passé composé → plus-que-parfait : l’auxiliaire avoir passe à l’imparfait.', 'Passé composé → pluperfect: the auxiliary “avoir” moves to the imperfect.', '复合过去时 → 愈过去时：助动词 avoir 变为未完成过去时。'),
                  },
                  {
                    id: 'd3',
                    before: '« Nous vous rappellerons. » → Ils ont promis qu’ils nous',
                    after: '.',
                    options: ['rappelleraient', 'rappelleront', 'rappelaient'],
                    answer: 'rappelleraient',
                    why: t('Futur → conditionnel présent. C’est la forme qu’on entend dans tous les comptes rendus de réunion.', 'Future → present conditional. This is the form you hear in every meeting report.', '将来时 → 条件式现在时。这是所有会议纪要里都会听到的形式。'),
                  },
                  {
                    id: 'd4',
                    before: '« Je ne comprenais pas. » → Elle a avoué qu’elle ne',
                    after: 'pas.',
                    options: ['comprenait', 'avait compris', 'comprendrait'],
                    answer: 'comprenait',
                    why: t('L’imparfait ne recule pas : il reste imparfait.', 'The imperfect does not step back: it stays imperfect.', '未完成过去时不后退：保持不变。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_b1di_2',
          moduleId: 'mod_b1di_1',
          kind: 'text',
          durationMin: 10,
          title: t('Rapporter une question', 'Reporting a question', '转述疑问句'),
          summary: t(
            'Le point d’interrogation disparaît, et l’ordre des mots redevient normal.',
            'The question mark disappears, and word order goes back to normal.',
            '问号消失，语序回到正常。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '❓',
              text: t(
                'Une question rapportée n’est plus une question : elle devient un morceau de phrase. On enlève le point d’interrogation, on remet le sujet devant le verbe, et on choisit le bon mot de liaison.',
                'A reported question is no longer a question: it becomes part of a sentence. You drop the question mark, put the subject back before the verb, and pick the right linking word.',
                '被转述的问题不再是问句，而是句子的一部分。去掉问号，把主语放回动词前，再选对连接词。',
              ),
            },
            {
              type: 'table',
              emoji: '📊',
              caption: t('Quel mot de liaison choisir', 'Which linking word to choose', '该选哪个连接词'),
              headers: [t('Question directe', 'Direct question', '直接疑问'), t('Devient', 'Becomes', '变成'), t('Exemple rapporté', 'Reported example', '转述示例')],
              rows: [
                [t('Question par oui ou non', 'Yes-or-no question', '是非问句'), t('si', 'si', 'si'), t('Il demande si tu viens.', 'Il demande si tu viens.', 'Il demande si tu viens.')],
                [t('Qu’est-ce que…', 'Qu’est-ce que…', 'Qu’est-ce que……'), t('ce que', 'ce que', 'ce que'), t('Il demande ce que tu fais.', 'Il demande ce que tu fais.', 'Il demande ce que tu fais.')],
                [t('Qu’est-ce qui…', 'Qu’est-ce qui…', 'Qu’est-ce qui……'), t('ce qui', 'ce qui', 'ce qui'), t('Il demande ce qui se passe.', 'Il demande ce qui se passe.', 'Il demande ce qui se passe.')],
                [t('Où, quand, comment, pourquoi', 'Où, quand, comment, pourquoi', 'Où、quand、comment、pourquoi'), t('le même mot', 'the same word', '原词不变'), t('Il demande où tu habites.', 'Il demande où tu habites.', 'Il demande où tu habites.')],
              ],
            },
            {
              type: 'callout',
              tone: 'danger',
              emoji: '🚨',
              title: t('« Est-ce que » n’existe pas dans une question rapportée', '“Est-ce que” does not exist in a reported question', '转述疑问句中没有 “est-ce que”'),
              text: t(
                'On ne dit jamais « Il demande est-ce que tu viens ». « Est-ce que » sert uniquement à poser une vraie question ; rapporté, il devient **si**. Et l’inversion disparaît : « Il demande où habites-tu » est faux, on dit « où tu habites ».',
                'You never say “Il demande est-ce que tu viens”. “Est-ce que” only exists to ask a real question; reported, it becomes **si**. And the inversion goes: “Il demande où habites-tu” is wrong, you say “où tu habites”.',
                '绝不能说 “Il demande est-ce que tu viens”。“est-ce que” 只用于真正提问；转述时变成 **si**。倒装也随之消失：“Il demande où habites-tu” 是错的，应说 “où tu habites”。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔗',
              title: t('Reliez la question à sa forme rapportée', 'Match the question to its reported form', '把问句与其转述形式配对'),
              hint: t('Cinq questions, cinq mots de liaison.', 'Five questions, five linking words.', '五个问句，五个连接词。'),
              widget: {
                kind: 'pairs',
                prompt: t('Il me demande…', 'He asks me…', '他问我……'),
                pairs: [
                  { id: 'q1', left: '« Tu viens ? »', right: t('… si je viens', '… si je viens', '……si je viens') },
                  { id: 'q2', left: '« Qu’est-ce que tu veux ? »', right: t('… ce que je veux', '… ce que je veux', '……ce que je veux') },
                  { id: 'q3', left: '« Qu’est-ce qui ne va pas ? »', right: t('… ce qui ne va pas', '… ce qui ne va pas', '……ce qui ne va pas') },
                  { id: 'q4', left: '« Pourquoi es-tu parti ? »', right: t('… pourquoi je suis parti', '… pourquoi je suis parti', '……pourquoi je suis parti') },
                  { id: 'q5', left: '« Quand est-ce que ça commence ? »', right: t('… quand ça commence', '… quand ça commence', '……quand ça commence') },
                ],
              },
            },
          ],
        },
        {
          id: 'les_b1di_3',
          moduleId: 'mod_b1di_1',
          kind: 'text',
          durationMin: 10,
          title: t('Rapporter un ordre, choisir son verbe', 'Reporting an order, choosing your verb', '转述命令，选好动词'),
          summary: t(
            'De + infinitif, et les verbes qui disent comment la phrase a été dite.',
            'De + infinitive, and the verbs that say how the sentence was said.',
            'de + 不定式，以及那些表明“怎么说”的动词。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '📣',
              text: t(
                'Un ordre rapporté ne garde pas l’impératif. On le remplace par **de** suivi de l’infinitif, et le tour est joué : « Sors ! » devient « Il m’a dit de sortir ».',
                'A reported order does not keep the imperative. You replace it with **de** followed by the infinitive, and that is it: “Sors !” becomes “Il m’a dit de sortir”.',
                '转述命令时不保留命令式，而用 **de** 加不定式代替，就这么简单：“Sors !” 变成 “Il m’a dit de sortir”。',
              ),
            },
            {
              type: 'examples',
              emoji: '🎯',
              title: t('Toujours la même construction', 'Always the same construction', '结构始终相同'),
              items: [
                {
                  fr: '« Attendez ici. » → Elle nous a demandé d’attendre ici.',
                  gloss: t('De devient d’ devant une voyelle. La personne à qui on parle passe en pronom : nous.', 'De becomes d’ before a vowel. The person addressed becomes a pronoun: nous.', '元音前 de 变为 d’。被称呼的人变成代词：nous。'),
                },
                {
                  fr: '« Ne fais pas de bruit. » → Il m’a dit de ne pas faire de bruit.',
                  gloss: t('À la forme négative, « ne pas » se met en bloc, juste avant l’infinitif.', 'In the negative, “ne pas” stays as one block, right before the infinitive.', '否定时 “ne pas” 整体放在不定式之前。'),
                },
                {
                  fr: 'Il m’a dit de ne fais pas de bruit.',
                  incorrect: true,
                  gloss: t('Faux : après « de », il faut l’infinitif, jamais un verbe conjugué.', 'Wrong: after “de” you need the infinitive, never a conjugated verb.', '错误：“de” 后面必须是不定式，绝不能是变位动词。'),
                },
              ],
            },
            {
              type: 'keyvalues',
              emoji: '🎨',
              title: t('Les verbes qui remplacent « dire »', 'Verbs that replace “dire”', '可以替代 “dire” 的动词'),
              entries: [
                { label: t('affirmer', 'affirmer', 'affirmer'), value: t('Dire avec certitude, sans hésiter. Utile dans un compte rendu.', 'To say with certainty, without hesitating. Useful in a report.', '肯定地说，毫不迟疑。写报告时很有用。') },
                { label: t('reconnaître', 'reconnaître', 'reconnaître'), value: t('Admettre quelque chose qui ne nous arrange pas.', 'To admit something that does not suit you.', '承认对自己不利的事。') },
                { label: t('prévenir', 'prévenir', 'prévenir'), value: t('Annoncer à l’avance, souvent pour éviter un problème.', 'To announce in advance, often to avoid a problem.', '提前告知，通常是为了避免麻烦。') },
                { label: t('suggérer', 'suggérer', 'suggérer'), value: t('Proposer sans imposer. Beaucoup plus doux que « demander ».', 'To propose without imposing. Much softer than “demander”.', '提出建议而不强加。比 “demander” 温和得多。') },
                { label: t('rappeler', 'rappeler', 'rappeler'), value: t('Redire quelque chose que l’autre savait déjà.', 'To say again something the other person already knew.', '重申对方已经知道的事。') },
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '💡',
              title: t('Le verbe choisi raconte déjà la scène', 'The verb you choose already tells the scene', '所选动词本身就在讲故事'),
              text: t(
                '« Il a dit qu’il était en retard » est neutre. « Il a reconnu qu’il était en retard » ajoute qu’il l’admet à contrecœur. Varier ces verbes est ce qui distingue un B1 solide d’un A2 avancé.',
                '“Il a dit qu’il était en retard” is neutral. “Il a reconnu qu’il était en retard” adds that he admits it reluctantly. Varying these verbs is what sets a solid B1 apart from an advanced A2.',
                '“Il a dit qu’il était en retard” 是中性的。“Il a reconnu qu’il était en retard” 则透露出他是勉强承认。灵活变换这些动词，正是扎实的 B1 与高阶 A2 的分野。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔢',
              title: t('Les étapes pour rapporter une phrase', 'The steps to report a sentence', '转述一句话的步骤'),
              hint: t('Remettez les cinq étapes dans l’ordre.', 'Put the five steps back in order.', '把五个步骤排好顺序。'),
              widget: {
                kind: 'order',
                prompt: t('De la phrase entendue à la phrase rapportée :', 'From the sentence you heard to the reported sentence:', '从听到的句子到转述的句子：'),
                items: [
                  { id: 'o1', text: t('Choisir le verbe introducteur : dire, demander, expliquer…', 'Choose the introducing verb: dire, demander, expliquer…', '选择引导动词：dire、demander、expliquer……') },
                  { id: 'o2', text: t('Repérer si c’est une affirmation, une question ou un ordre', 'Work out whether it is a statement, a question or an order', '判断这是陈述、疑问还是命令') },
                  { id: 'o3', text: t('Poser le bon mot de liaison : que, si, ce que, de', 'Put down the right linking word: que, si, ce que, de', '放上正确的连接词：que、si、ce que、de') },
                  { id: 'o4', text: t('Ajuster les pronoms et les possessifs', 'Adjust the pronouns and possessives', '调整人称代词和物主限定词') },
                  { id: 'o5', text: t('Faire reculer le temps du verbe si l’on rapporte depuis le passé', 'Step the tense back if you are reporting from the past', '若从过去转述，则让动词时态后退') },
                ],
                successNote: t(
                  'Ces cinq étapes suffisent pour rapporter n’importe quelle phrase, y compris à l’examen.',
                  'These five steps are enough to report any sentence, including in an exam.',
                  '这五个步骤足以转述任何句子，考试时也一样。',
                ),
              },
            },
          ],
        },
      ],
    },
    {
      id: 'mod_b1di_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur le discours rapporté.', 'Six questions on reported speech.', '六道题，考查间接引语。'),
      lessons: [
        {
          id: 'les_b1di_q',
          moduleId: 'mod_b1di_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_b1_discours',
          title: t('Quiz — Le discours rapporté', 'Quiz — Reported speech', '测验 — 间接引语'),
          summary: t('6 questions sur les temps et les liaisons.', '6 questions on tenses and linking words.', '6 道题，考查时态与连接词。'),
        },
      ],
    },
  ],
};
