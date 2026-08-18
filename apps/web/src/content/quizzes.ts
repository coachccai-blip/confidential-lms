import type { Quiz } from '@lms/core';
import { t } from './tr';
import { complementQuizzes } from './quizzes-complements';

/** Quiz notés du catalogue de français. Seuil 70 %, trois tentatives. */

const grammaire: Quiz = {
  id: 'qz_grammaire',
  title: t('Quiz — Grammaire essentielle', 'Quiz — Essential grammar', '测验 — 核心语法'),
  description: t(
    'Genre, accord du participe passé, pronoms relatifs et connecteurs logiques.',
    'Gender, past participle agreement, relative pronouns and logical connectors.',
    '名词的性、过去分词配合、关系代词与逻辑连接词。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'g1',
      kind: 'single',
      points: 1,
      prompt: t('Quel mot est féminin ?', 'Which word is feminine?', '下列哪个词是阴性？'),
      explanation: t(
        'Les noms en -tion sont féminins : la décision. « Problème », « musée » et « silence » sont masculins malgré leurs terminaisons trompeuses.',
        'Nouns ending in -tion are feminine: la décision. “Problème”, “musée” and “silence” are masculine despite their misleading endings.',
        '以 -tion 结尾的名词为阴性：la décision。“Problème”“musée”和“silence”虽词尾具有迷惑性，但都是阳性。',
      ),
      answers: [
        { id: 'a', text: t('décision', 'décision', 'décision'), correct: true },
        { id: 'b', text: t('problème', 'problème', 'problème'), correct: false },
        { id: 'c', text: t('musée', 'musée', 'musée'), correct: false },
        { id: 'd', text: t('silence', 'silence', 'silence'), correct: false },
      ],
    },
    {
      id: 'g2',
      kind: 'single',
      points: 1,
      prompt: t(
        'Complétez : « Les lettres que j’ai … hier sont parties. »',
        'Complete: “Les lettres que j’ai … hier sont parties.”',
        '填空：“Les lettres que j’ai … hier sont parties.”',
      ),
      explanation: t(
        'Le COD « que » (= les lettres) est placé avant le verbe : le participe s’accorde au féminin pluriel → écrites.',
        'The direct object “que” (= les lettres) comes before the verb, so the participle agrees in the feminine plural → écrites.',
        '直接宾语“que”（即 les lettres）位于动词之前，因此分词作阴性复数配合 → écrites。',
      ),
      answers: [
        { id: 'a', text: t('écrites', 'écrites', 'écrites'), correct: true },
        { id: 'b', text: t('écrit', 'écrit', 'écrit'), correct: false },
        { id: 'c', text: t('écrits', 'écrits', 'écrits'), correct: false },
        { id: 'd', text: t('écrite', 'écrite', 'écrite'), correct: false },
      ],
    },
    {
      id: 'g3',
      kind: 'multiple',
      points: 2,
      prompt: t(
        'Dans quels cas le participe passé s’accorde-t-il ?',
        'In which cases does the past participle agree?',
        '在哪些情况下过去分词需要配合？',
      ),
      explanation: t(
        'Avec être, accord avec le sujet ; avec avoir, accord seulement si le COD précède le verbe. Un COD placé après, ou un simple COI, n’entraîne aucun accord.',
        'With “être”, agreement with the subject; with “avoir”, agreement only if the direct object precedes the verb. An object placed after, or a mere indirect object, triggers no agreement.',
        '用 être 时与主语配合；用 avoir 时仅当直接宾语位于动词之前才配合。宾语后置或仅有间接宾语时都不配合。',
      ),
      answers: [
        { id: 'a', text: t('Avec l’auxiliaire être', 'With the auxiliary “être”', '使用助动词 être 时'), correct: true },
        { id: 'b', text: t('Avec avoir, quand le COD précède le verbe', 'With “avoir”, when the object precedes the verb', '使用 avoir 且直接宾语前置时'), correct: true },
        { id: 'c', text: t('Avec avoir, quand le COD suit le verbe', 'With “avoir”, when the object follows the verb', '使用 avoir 且直接宾语后置时'), correct: false },
        { id: 'd', text: t('À la voix passive', 'In the passive voice', '被动语态中'), correct: true },
      ],
    },
    {
      id: 'g4',
      kind: 'single',
      points: 1,
      prompt: t(
        'Complétez : « Voici le dossier … je vous ai parlé. »',
        'Complete: “Voici le dossier … je vous ai parlé.”',
        '填空：“Voici le dossier … je vous ai parlé.”',
      ),
      explanation: t(
        'On dit « parler de quelque chose » : la construction avec « de » impose le pronom relatif « dont ».',
        'The verb is “parler de something”: the “de” construction requires the relative pronoun “dont”.',
        '动词搭配为“parler de quelque chose”，带“de”的结构要求使用关系代词“dont”。',
      ),
      answers: [
        { id: 'a', text: t('dont', 'dont', 'dont'), correct: true },
        { id: 'b', text: t('que', 'que', 'que'), correct: false },
        { id: 'c', text: t('qui', 'qui', 'qui'), correct: false },
        { id: 'd', text: t('où', 'où', 'où'), correct: false },
      ],
    },
    {
      id: 'g5',
      kind: 'boolean',
      points: 1,
      prompt: t(
        '« Bien que » peut être suivi de l’indicatif.',
        '“Bien que” can be followed by the indicative.',
        '“Bien que”后可以接直陈式。',
      ),
      explanation: t(
        'Faux. « Bien que » exige toujours le subjonctif : bien qu’il soit fatigué, jamais « bien qu’il est fatigué ».',
        'False. “Bien que” always requires the subjunctive: bien qu’il soit fatigué, never “bien qu’il est fatigué”.',
        '错误。“Bien que”永远要求虚拟式：bien qu’il soit fatigué，绝不能说“bien qu’il est fatigué”。',
      ),
      answers: [
        { id: 'v', text: t('Vrai', 'True', '正确'), correct: false },
        { id: 'f', text: t('Faux', 'False', '错误'), correct: true },
      ],
    },
    {
      id: 'g6',
      kind: 'multiple',
      points: 2,
      prompt: t(
        'Quelles expressions introduisent une conséquence ?',
        'Which expressions introduce a consequence?',
        '哪些表达用于引出结果？',
      ),
      explanation: t(
        '« Par conséquent », « si bien que » et « c’est pourquoi » marquent la conséquence. « En raison de » introduit une cause.',
        '“Par conséquent”, “si bien que” and “c’est pourquoi” mark consequence. “En raison de” introduces a cause.',
        '“Par conséquent”“si bien que”和“c’est pourquoi”表示结果；“En raison de”引出原因。',
      ),
      answers: [
        { id: 'a', text: t('par conséquent', 'par conséquent', 'par conséquent'), correct: true },
        { id: 'b', text: t('si bien que', 'si bien que', 'si bien que'), correct: true },
        { id: 'c', text: t('en raison de', 'en raison de', 'en raison de'), correct: false },
        { id: 'd', text: t('c’est pourquoi', 'c’est pourquoi', 'c’est pourquoi'), correct: true },
      ],
    },
    {
      id: 'g7',
      kind: 'single',
      points: 1,
      prompt: t(
        'Quelle phrase est correcte ?',
        'Which sentence is correct?',
        '哪个句子是正确的？',
      ),
      explanation: t(
        '« Être fier de » se construit avec « de », donc avec « dont ». Le « de » ne doit pas être répété après le pronom.',
        '“Être fier de” takes “de”, hence “dont”. The “de” must not be repeated after the pronoun.',
        '“Être fier de”与“de”搭配，故用“dont”。代词之后不可重复“de”。',
      ),
      answers: [
        { id: 'a', text: t('C’est un projet dont je suis fier.', 'C’est un projet dont je suis fier.', 'C’est un projet dont je suis fier.'), correct: true },
        { id: 'b', text: t('C’est un projet que je suis fier.', 'C’est un projet que je suis fier.', 'C’est un projet que je suis fier.'), correct: false },
        { id: 'c', text: t('C’est un projet dont je suis fier de.', 'C’est un projet dont je suis fier de.', 'C’est un projet dont je suis fier de.'), correct: false },
        { id: 'd', text: t('C’est un projet qui je suis fier.', 'C’est un projet qui je suis fier.', 'C’est un projet qui je suis fier.'), correct: false },
      ],
    },
    {
      id: 'g8',
      kind: 'single',
      points: 1,
      prompt: t(
        'Quel pronom relatif remplace un complément de temps ou de lieu ?',
        'Which relative pronoun replaces a complement of time or place?',
        '哪个关系代词用于替代时间或地点状语？',
      ),
      explanation: t(
        '« Où » vaut pour le lieu comme pour le temps : la ville où j’habite, l’année où je suis né.',
        '“Où” covers both place and time: la ville où j’habite, l’année où je suis né.',
        '“Où”既可指地点也可指时间：la ville où j’habite、l’année où je suis né。',
      ),
      answers: [
        { id: 'a', text: t('où', 'où', 'où'), correct: true },
        { id: 'b', text: t('dont', 'dont', 'dont'), correct: false },
        { id: 'c', text: t('que', 'que', 'que'), correct: false },
        { id: 'd', text: t('lequel', 'lequel', 'lequel'), correct: false },
      ],
    },
  ],
};

const conjugaison: Quiz = {
  id: 'qz_conjugaison',
  title: t('Quiz — Conjugaison', 'Quiz — Conjugation', '测验 — 动词变位'),
  description: t(
    'Passé, futur, conditionnel et subjonctif : choisir le temps juste.',
    'Past, future, conditional and subjunctive: choosing the right tense.',
    '过去时、将来时、条件式与虚拟式：选择正确的时态。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'c1',
      kind: 'single',
      points: 1,
      prompt: t(
        'Complétez : « Tous les étés, nous … à la mer. »',
        'Complete: “Tous les étés, nous … à la mer.”',
        '填空：“Tous les étés, nous … à la mer.”',
      ),
      explanation: t(
        '« Tous les étés » indique une habitude passée : l’imparfait s’impose → nous allions.',
        '“Tous les étés” indicates a past habit: the imperfect is required → nous allions.',
        '“Tous les étés”表示过去的习惯，必须用未完成过去时 → nous allions。',
      ),
      answers: [
        { id: 'a', text: t('allions', 'allions', 'allions'), correct: true },
        { id: 'b', text: t('sommes allés', 'sommes allés', 'sommes allés'), correct: false },
        { id: 'c', text: t('irons', 'irons', 'irons'), correct: false },
        { id: 'd', text: t('étions allés', 'étions allés', 'étions allés'), correct: false },
      ],
    },
    {
      id: 'c2',
      kind: 'single',
      points: 1,
      prompt: t(
        'Quel temps exprime une action antérieure à une autre action passée ?',
        'Which tense expresses an action prior to another past action?',
        '哪种时态表示先于另一过去动作发生的动作？',
      ),
      explanation: t(
        'Le plus-que-parfait : « Quand je suis arrivé, il était déjà parti. »',
        'The pluperfect: “Quand je suis arrivé, il était déjà parti.”',
        '愈过去时：“Quand je suis arrivé, il était déjà parti.”',
      ),
      answers: [
        { id: 'a', text: t('le plus-que-parfait', 'the pluperfect', '愈过去时'), correct: true },
        { id: 'b', text: t('l’imparfait', 'the imperfect', '未完成过去时'), correct: false },
        { id: 'c', text: t('le passé composé', 'the passé composé', '复合过去时'), correct: false },
        { id: 'd', text: t('le conditionnel passé', 'the past conditional', '过去条件式'), correct: false },
      ],
    },
    {
      id: 'c3',
      kind: 'boolean',
      points: 1,
      prompt: t(
        'On peut employer le conditionnel juste après « si ».',
        'The conditional can be used right after “si”.',
        '可以在“si”之后直接使用条件式。',
      ),
      explanation: t(
        'Faux. Après « si » d’hypothèse : présent, imparfait ou plus-que-parfait, jamais le conditionnel. « Si j’avais le temps, je viendrais. »',
        'False. After hypothetical “si”: present, imperfect or pluperfect, never the conditional. “Si j’avais le temps, je viendrais.”',
        '错误。表假设的“si”之后用现在时、未完成过去时或愈过去时，绝不用条件式。“Si j’avais le temps, je viendrais.”',
      ),
      answers: [
        { id: 'v', text: t('Vrai', 'True', '正确'), correct: false },
        { id: 'f', text: t('Faux', 'False', '错误'), correct: true },
      ],
    },
    {
      id: 'c4',
      kind: 'multiple',
      points: 2,
      prompt: t(
        'Quelles expressions imposent le subjonctif ?',
        'Which expressions require the subjunctive?',
        '哪些表达要求使用虚拟式？',
      ),
      explanation: t(
        '« Il faut que », « bien que » et « pour que » exigent le subjonctif. « Espérer que » est suivi de l’indicatif.',
        '“Il faut que”, “bien que” and “pour que” require the subjunctive. “Espérer que” takes the indicative.',
        '“Il faut que”“bien que”和“pour que”要求虚拟式；“Espérer que”后接直陈式。',
      ),
      answers: [
        { id: 'a', text: t('il faut que', 'il faut que', 'il faut que'), correct: true },
        { id: 'b', text: t('bien que', 'bien que', 'bien que'), correct: true },
        { id: 'c', text: t('espérer que', 'espérer que', 'espérer que'), correct: false },
        { id: 'd', text: t('pour que', 'pour que', 'pour que'), correct: true },
      ],
    },
    {
      id: 'c5',
      kind: 'single',
      points: 1,
      prompt: t(
        'Sur quelle forme prend-on le radical de l’imparfait ?',
        'Which form gives the stem of the imperfect?',
        '未完成过去时的词干取自哪个形式？',
      ),
      explanation: t(
        'Sur la forme « nous » du présent : nous finiss-ons → je finiss-ais. Seule exception : être.',
        'On the “nous” form of the present: nous finiss-ons → je finiss-ais. The only exception is “être”.',
        '取自现在时“nous”形式：nous finiss-ons → je finiss-ais。唯一例外是 être。',
      ),
      answers: [
        { id: 'a', text: t('la forme « nous » du présent', 'the “nous” form of the present', '现在时“nous”形式'), correct: true },
        { id: 'b', text: t('l’infinitif', 'the infinitive', '不定式'), correct: false },
        { id: 'c', text: t('la forme « ils » du présent', 'the “ils” form of the present', '现在时“ils”形式'), correct: false },
        { id: 'd', text: t('le participe passé', 'the past participle', '过去分词'), correct: false },
      ],
    },
    {
      id: 'c6',
      kind: 'single',
      points: 1,
      prompt: t(
        'Discours rapporté : « Il a dit : “Je viendrai.” » devient…',
        'Reported speech: “Il a dit : ‘Je viendrai.’” becomes…',
        '转述引语：“Il a dit : ‘Je viendrai.’”变为……',
      ),
      explanation: t(
        'Après un verbe introducteur au passé, le futur devient conditionnel : il a dit qu’il viendrait.',
        'After a past introducing verb, the future becomes the conditional: il a dit qu’il viendrait.',
        '引导动词为过去时时，将来时变为条件式：il a dit qu’il viendrait。',
      ),
      answers: [
        { id: 'a', text: t('il a dit qu’il viendrait', 'il a dit qu’il viendrait', 'il a dit qu’il viendrait'), correct: true },
        { id: 'b', text: t('il a dit qu’il viendra', 'il a dit qu’il viendra', 'il a dit qu’il viendra'), correct: false },
        { id: 'c', text: t('il a dit qu’il venait', 'il a dit qu’il venait', 'il a dit qu’il venait'), correct: false },
        { id: 'd', text: t('il a dit qu’il était venu', 'il a dit qu’il était venu', 'il a dit qu’il était venu'), correct: false },
      ],
    },
    {
      id: 'c7',
      kind: 'single',
      points: 1,
      prompt: t(
        'Quelle est la forme correcte du subjonctif présent de « aller » à la 1re personne ?',
        'What is the correct present subjunctive of “aller” in the first person?',
        '“aller”的现在虚拟式第一人称正确形式是什么？',
      ),
      explanation: t(
        '« Aller » est irrégulier au subjonctif : que j’aille, que tu ailles, mais que nous allions.',
        '“Aller” is irregular in the subjunctive: que j’aille, que tu ailles, but que nous allions.',
        '“Aller”的虚拟式不规则：que j’aille、que tu ailles，但 que nous allions。',
      ),
      answers: [
        { id: 'a', text: t('que j’aille', 'que j’aille', 'que j’aille'), correct: true },
        { id: 'b', text: t('que j’alle', 'que j’alle', 'que j’alle'), correct: false },
        { id: 'c', text: t('que je vais', 'que je vais', 'que je vais'), correct: false },
        { id: 'd', text: t('que j’irai', 'que j’irai', 'que j’irai'), correct: false },
      ],
    },
    {
      id: 'c8',
      kind: 'single',
      points: 1,
      prompt: t(
        'Que signifie « J’aurais dû partir plus tôt » ?',
        'What does “J’aurais dû partir plus tôt” mean?',
        '“J’aurais dû partir plus tôt” 表达什么？',
      ),
      explanation: t(
        'Le conditionnel passé exprime ici le regret ou le reproche : je ne suis pas parti assez tôt, et je le regrette.',
        'The past conditional here expresses regret or reproach: I did not leave early enough, and I regret it.',
        '此处过去条件式表达遗憾或自责：我没有早点走，为此感到后悔。',
      ),
      answers: [
        { id: 'a', text: t('un regret sur le passé', 'a regret about the past', '对过去的遗憾'), correct: true },
        { id: 'b', text: t('une intention future', 'a future intention', '未来的打算'), correct: false },
        { id: 'c', text: t('une obligation présente', 'a present obligation', '当下的义务'), correct: false },
        { id: 'd', text: t('une habitude passée', 'a past habit', '过去的习惯'), correct: false },
      ],
    },
  ],
};

const delfB1: Quiz = {
  id: 'qz_delf_b1',
  title: t('Quiz — DELF B1', 'Quiz — DELF B1', '测验 — DELF B1'),
  description: t(
    'Format de l’examen, barème et méthode des quatre épreuves.',
    'Exam format, marking and method for the four papers.',
    '考试形式、评分标准与四项考试的方法。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'b1q1',
      kind: 'single',
      points: 1,
      prompt: t('Sur combien de points chaque épreuve du DELF B1 est-elle notée ?', 'Out of how many marks is each DELF B1 paper scored?', 'DELF B1 每项考试的满分是多少？'),
      explanation: t(
        'Chaque épreuve vaut 25 points, pour un total de 100. Il faut 50/100 au total et au moins 5/25 par épreuve.',
        'Each paper is worth 25 marks, for a total of 100. You need 50/100 overall and at least 5/25 in each paper.',
        '每项 25 分，总分 100 分。需总分达到 50/100，且每项不低于 5/25。',
      ),
      answers: [
        { id: 'a', text: t('25 points', '25 marks', '25 分'), correct: true },
        { id: 'b', text: t('20 points', '20 marks', '20 分'), correct: false },
        { id: 'c', text: t('50 points', '50 marks', '50 分'), correct: false },
        { id: 'd', text: t('100 points', '100 marks', '100 分'), correct: false },
      ],
    },
    {
      id: 'b1q2',
      kind: 'boolean',
      points: 1,
      prompt: t(
        'Un total de 60/100 suffit à obtenir le diplôme, quelle que soit la note de chaque épreuve.',
        'A total of 60/100 is enough to pass, whatever the mark in each paper.',
        '只要总分达到 60/100 即可通过，无论单科成绩如何。',
      ),
      explanation: t(
        'Faux. Une note inférieure à 5/25 dans une seule épreuve est éliminatoire, même avec un excellent total.',
        'False. A mark below 5/25 in a single paper is disqualifying, even with an excellent total.',
        '错误。任何一科低于 5/25 即不合格，即使总分很高也不行。',
      ),
      answers: [
        { id: 'v', text: t('Vrai', 'True', '正确'), correct: false },
        { id: 'f', text: t('Faux', 'False', '错误'), correct: true },
      ],
    },
    {
      id: 'b1q3',
      kind: 'single',
      points: 1,
      prompt: t('Combien de mots minimum pour la production écrite du B1 ?', 'What is the minimum word count for the B1 writing paper?', 'B1 书面表达最少需要多少词？'),
      explanation: t(
        '160 mots minimum. Écrire nettement moins fait perdre des points sur le respect de la consigne.',
        'A minimum of 160 words. Writing markedly less loses marks on task fulfilment.',
        '至少 160 词。明显少写会在“切题”一项失分。',
      ),
      answers: [
        { id: 'a', text: t('160 mots', '160 words', '160 词'), correct: true },
        { id: 'b', text: t('100 mots', '100 words', '100 词'), correct: false },
        { id: 'c', text: t('250 mots', '250 words', '250 词'), correct: false },
        { id: 'd', text: t('300 mots', '300 words', '300 词'), correct: false },
      ],
    },
    {
      id: 'b1q4',
      kind: 'multiple',
      points: 2,
      prompt: t(
        'Que faire pendant les secondes précédant une écoute ?',
        'What should you do in the seconds before a recording starts?',
        '录音开始前的几秒钟应该做什么？',
      ),
      explanation: t(
        'Lire les questions, souligner les mots interrogatifs et anticiper le type d’information. Traduire mentalement fait perdre un temps précieux.',
        'Read the questions, underline the question words and anticipate the type of information. Translating in your head wastes precious time.',
        '读题、划出疑问词并预判所需信息类型。在脑中翻译只会浪费宝贵时间。',
      ),
      answers: [
        { id: 'a', text: t('Lire les questions', 'Read the questions', '阅读题目'), correct: true },
        { id: 'b', text: t('Souligner les mots interrogatifs', 'Underline the question words', '划出疑问词'), correct: true },
        { id: 'c', text: t('Traduire les questions dans sa langue', 'Translate the questions into your own language', '把题目翻译成母语'), correct: false },
        { id: 'd', text: t('Anticiper le type d’information attendu', 'Anticipate the type of information expected', '预判所需的信息类型'), correct: true },
      ],
    },
    {
      id: 'b1q5',
      kind: 'single',
      points: 1,
      prompt: t(
        'En compréhension des écrits, comment justifier une réponse « vrai ou faux » ?',
        'In the reading paper, how should a “true or false” answer be justified?',
        '在阅读理解中，“判断正误”题应如何说明理由？',
      ),
      explanation: t(
        'Il faut citer la phrase exacte du texte. Une reformulation, même juste, ne rapporte pas les points de justification.',
        'You must quote the exact sentence from the text. A restatement, even a correct one, earns no justification marks.',
        '必须引用原文原句。即使复述正确，也拿不到说明理由的分数。',
      ),
      answers: [
        { id: 'a', text: t('En citant la phrase exacte du texte', 'By quoting the exact sentence from the text', '引用原文原句'), correct: true },
        { id: 'b', text: t('En reformulant l’idée avec ses mots', 'By restating the idea in your own words', '用自己的话复述观点'), correct: false },
        { id: 'c', text: t('En donnant son opinion personnelle', 'By giving your personal opinion', '给出个人看法'), correct: false },
        { id: 'd', text: t('En indiquant seulement le numéro du paragraphe', 'By giving only the paragraph number', '只写出段落编号'), correct: false },
      ],
    },
    {
      id: 'b1q6',
      kind: 'single',
      points: 1,
      prompt: t(
        'Quelle est la troisième partie de l’épreuve orale du B1 ?',
        'What is the third part of the B1 speaking paper?',
        'B1 口试的第三部分是什么？',
      ),
      explanation: t(
        'Le monologue suivi : à partir d’un court document, le candidat dégage le thème puis exprime et défend son opinion.',
        'The sustained monologue: from a short document, the candidate identifies the theme then states and defends an opinion.',
        '连续独白：考生根据一份短材料概括主题，然后表达并捍卫自己的观点。',
      ),
      answers: [
        { id: 'a', text: t('Le monologue suivi', 'The sustained monologue', '连续独白'), correct: true },
        { id: 'b', text: t('L’entretien dirigé', 'The guided interview', '引导式面谈'), correct: false },
        { id: 'c', text: t('La synthèse de documents', 'The document synthesis', '文献综述'), correct: false },
        { id: 'd', text: t('La dictée', 'The dictation', '听写'), correct: false },
      ],
    },
    {
      id: 'b1q7',
      kind: 'single',
      points: 1,
      prompt: t(
        'Que faire à l’oral quand un mot vous manque ?',
        'What should you do in the speaking test when a word escapes you?',
        '口试中想不起某个单词时该怎么办？',
      ),
      explanation: t(
        'Employer une périphrase : « c’est un objet qui sert à… ». Le jury évalue la capacité à communiquer, pas le lexique parfait.',
        'Use a circumlocution: “c’est un objet qui sert à…”. The panel assesses communication, not perfect vocabulary.',
        '使用迂回表达：“c’est un objet qui sert à…”。考官评估的是沟通能力，而非完美词汇。',
      ),
      answers: [
        { id: 'a', text: t('Utiliser une périphrase', 'Use a circumlocution', '使用迂回表达'), correct: true },
        { id: 'b', text: t('S’arrêter et attendre l’aide du jury', 'Stop and wait for the panel’s help', '停下来等考官帮忙'), correct: false },
        { id: 'c', text: t('Employer le mot de sa langue maternelle', 'Use the word from your own language', '直接用母语词汇'), correct: false },
        { id: 'd', text: t('Changer complètement de sujet', 'Change the topic completely', '完全转换话题'), correct: false },
      ],
    },
    {
      id: 'b1q8',
      kind: 'multiple',
      points: 2,
      prompt: t(
        'Quels éléments la consigne de production écrite impose-t-elle ?',
        'Which elements does the writing instruction impose?',
        '书面表达的题目要求规定了哪些内容？',
      ),
      explanation: t(
        'Le type de texte, le destinataire et le nombre de mots sont imposés et notés. Le choix du vocabulaire reste libre.',
        'The text type, the addressee and the word count are imposed and marked. Vocabulary choice remains free.',
        '文体、收信对象与字数都是硬性规定并计入评分；词汇选择则自由。',
      ),
      answers: [
        { id: 'a', text: t('Le type de texte', 'The text type', '文体'), correct: true },
        { id: 'b', text: t('Le destinataire', 'The addressee', '收信对象'), correct: true },
        { id: 'c', text: t('Le nombre de mots', 'The word count', '字数'), correct: true },
        { id: 'd', text: t('Le vocabulaire à employer', 'The vocabulary to use', '必须使用的词汇'), correct: false },
      ],
    },
  ],
};

const delfB2: Quiz = {
  id: 'qz_delf_b2',
  title: t('Quiz — DELF B2', 'Quiz — DELF B2', '测验 — DELF B2'),
  description: t(
    'Essai argumenté, lettre formelle, implicite et débat.',
    'Argumentative essay, formal letter, implicit meaning and debate.',
    '论述文、正式书信、隐含义与辩论。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'b2q1',
      kind: 'single',
      points: 1,
      prompt: t('Quel plan convient à un sujet polémique du type « Faut-il interdire… ? »', 'Which plan suits a controversial topic such as “Should we ban…?”', '面对“是否应当禁止……？”这类争议题目，应采用哪种提纲？'),
      explanation: t(
        'Le plan dialectique : thèse, antithèse, synthèse. Il permet d’examiner les deux positions avant de trancher.',
        'The dialectical plan: thesis, antithesis, synthesis. It lets you examine both positions before deciding.',
        '正反合提纲：正论、反论、综合。可在下结论前审视双方立场。',
      ),
      answers: [
        { id: 'a', text: t('Le plan dialectique', 'The dialectical plan', '正反合提纲'), correct: true },
        { id: 'b', text: t('Le plan thématique', 'The thematic plan', '主题式提纲'), correct: false },
        { id: 'c', text: t('Le plan chronologique', 'The chronological plan', '时间顺序提纲'), correct: false },
        { id: 'd', text: t('Aucun plan n’est nécessaire', 'No plan is needed', '不需要提纲'), correct: false },
      ],
    },
    {
      id: 'b2q2',
      kind: 'single',
      points: 1,
      prompt: t('Que signale la formule « Certes…, il n’en demeure pas moins que… » ?', 'What does “Certes…, il n’en demeure pas moins que…” signal?', '“Certes…, il n’en demeure pas moins que…”表示什么？'),
      explanation: t(
        'Une concession suivie d’un retournement : on admet un point adverse avant de le dépasser. C’est la marque du B2.',
        'A concession followed by a reversal: an opposing point is admitted, then overridden. This is the hallmark of B2.',
        '先让步后反转：承认对方观点，随后加以超越。这是 B2 的标志性手法。',
      ),
      answers: [
        { id: 'a', text: t('Une concession suivie d’un retournement', 'A concession followed by a reversal', '先让步后反转'), correct: true },
        { id: 'b', text: t('Une cause', 'A cause', '原因'), correct: false },
        { id: 'c', text: t('Une conséquence', 'A consequence', '结果'), correct: false },
        { id: 'd', text: t('Un exemple', 'An example', '举例'), correct: false },
      ],
    },
    {
      id: 'b2q3',
      kind: 'multiple',
      points: 2,
      prompt: t('Quels indices révèlent l’opinion implicite d’un auteur ?', 'Which clues reveal an author’s implicit opinion?', '哪些线索能揭示作者的隐含观点？'),
      explanation: t(
        'Le lexique connoté, les guillemets de distance et le conditionnel journalistique trahissent le point de vue. Le nombre de paragraphes n’indique rien.',
        'Loaded vocabulary, scare quotes and the journalistic conditional give away the viewpoint. The number of paragraphs indicates nothing.',
        '带感情色彩的词汇、表距离感的引号以及新闻条件式都会泄露立场；段落数量则毫无提示作用。',
      ),
      answers: [
        { id: 'a', text: t('Le lexique évaluatif', 'Evaluative vocabulary', '评价性词汇'), correct: true },
        { id: 'b', text: t('Les guillemets de distance', 'Scare quotes', '表距离感的引号'), correct: true },
        { id: 'c', text: t('Le conditionnel journalistique', 'The journalistic conditional', '新闻条件式'), correct: true },
        { id: 'd', text: t('Le nombre de paragraphes', 'The number of paragraphs', '段落数量'), correct: false },
      ],
    },
    {
      id: 'b2q4',
      kind: 'single',
      points: 1,
      prompt: t('Que veut dire « Ce n’est pas un franc succès » ?', 'What does “Ce n’est pas un franc succès” mean?', '“Ce n’est pas un franc succès” 是什么意思？'),
      explanation: t(
        'C’est une litote : en niant le contraire, l’auteur signifie qu’il s’agit d’un échec.',
        'It is litotes: by negating the opposite, the author means it is a failure.',
        '这是曲言法：通过否定反面，作者实际是在说这是一次失败。',
      ),
      answers: [
        { id: 'a', text: t('C’est un échec', 'It is a failure', '这是失败'), correct: true },
        { id: 'b', text: t('C’est une réussite modérée', 'It is a moderate success', '这是中等程度的成功'), correct: false },
        { id: 'c', text: t('Le résultat est inconnu', 'The result is unknown', '结果未知'), correct: false },
        { id: 'd', text: t('L’auteur n’a pas d’avis', 'The author has no opinion', '作者没有立场'), correct: false },
      ],
    },
    {
      id: 'b2q5',
      kind: 'boolean',
      points: 1,
      prompt: t(
        'Dans une lettre formelle, il est admis d’employer « y a » et « faut ».',
        'In a formal letter it is acceptable to use “y a” and “faut”.',
        '在正式书信中可以使用“y a”和“faut”。',
      ),
      explanation: t(
        'Faux. Ces contractions relèvent du registre familier oral et sont pénalisées : le registre figure explicitement dans la grille d’évaluation.',
        'False. These contractions belong to informal speech and are penalised: register appears explicitly in the marking grid.',
        '错误。这些缩略形式属于口语体，会被扣分：语体在评分表中有明确一项。',
      ),
      answers: [
        { id: 'v', text: t('Vrai', 'True', '正确'), correct: false },
        { id: 'f', text: t('Faux', 'False', '错误'), correct: true },
      ],
    },
    {
      id: 'b2q6',
      kind: 'single',
      points: 1,
      prompt: t('Combien de mots environ pour la production écrite du B2 ?', 'Roughly how many words for the B2 writing paper?', 'B2 书面表达大约需要多少词？'),
      explanation: t(
        'Environ 250 mots en 60 minutes. Le dépassement important est pénalisé au même titre que l’insuffisance.',
        'Around 250 words in 60 minutes. Going well over is penalised just as much as falling short.',
        '60 分钟内约 250 词。大幅超出与明显不足同样会被扣分。',
      ),
      answers: [
        { id: 'a', text: t('250 mots', '250 words', '250 词'), correct: true },
        { id: 'b', text: t('160 mots', '160 words', '160 词'), correct: false },
        { id: 'c', text: t('400 mots', '400 words', '400 词'), correct: false },
        { id: 'd', text: t('700 mots', '700 words', '700 词'), correct: false },
      ],
    },
    {
      id: 'b2q7',
      kind: 'single',
      points: 1,
      prompt: t(
        'Pendant le débat oral, le jury vous contredit. Quelle est la meilleure réaction ?',
        'During the oral debate the panel contradicts you. What is the best reaction?',
        '口语辩论中考官反驳你，最佳应对是什么？',
      ),
      explanation: t(
        'Reformuler l’objection, puis y répondre en concédant éventuellement un point précis. Abandonner sa position ferme la discussion.',
        'Restate the objection, then answer it, conceding a specific point if appropriate. Abandoning your position closes the discussion.',
        '先复述质疑，再作回应，必要时在具体一点上让步。放弃立场会终止讨论。',
      ),
      answers: [
        { id: 'a', text: t('Reformuler l’objection puis y répondre', 'Restate the objection then answer it', '先复述质疑再作回应'), correct: true },
        { id: 'b', text: t('Abandonner sa position', 'Abandon your position', '放弃自己的立场'), correct: false },
        { id: 'c', text: t('Répéter son argument à l’identique', 'Repeat your argument word for word', '原样重复原有论据'), correct: false },
        { id: 'd', text: t('Garder le silence', 'Stay silent', '保持沉默'), correct: false },
      ],
    },
    {
      id: 'b2q8',
      kind: 'multiple',
      points: 2,
      prompt: t('Quels critères pèsent le plus dans la grille de l’oral B2 ?', 'Which criteria weigh most in the B2 speaking grid?', 'B2 口语评分表中哪些标准权重最高？'),
      explanation: t(
        'La capacité à argumenter et l’aisance dans l’interaction pèsent plus que l’étendue du lexique et la correction grammaticale.',
        'The ability to argue and ease in interaction weigh more than vocabulary range and grammatical accuracy.',
        '论证能力与互动流畅度的权重高于词汇广度与语法正确性。',
      ),
      answers: [
        { id: 'a', text: t('La capacité à argumenter', 'The ability to argue', '论证能力'), correct: true },
        { id: 'b', text: t('L’aisance dans l’interaction', 'Ease in interaction', '互动流畅度'), correct: true },
        { id: 'c', text: t('L’absence totale de fautes', 'A complete absence of mistakes', '完全无语法错误'), correct: false },
        { id: 'd', text: t('La vitesse d’élocution', 'Speaking speed', '语速'), correct: false },
      ],
    },
  ],
};

const dalfC1: Quiz = {
  id: 'qz_dalf_c1',
  title: t('Quiz — DALF C1', 'Quiz — DALF C1', '测验 — DALF C1'),
  description: t(
    'Synthèse de documents, exposé sur dossier et registre soutenu.',
    'Document synthesis, dossier-based presentation and formal register.',
    '文献综述、基于材料的陈述与正式语体。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'c1q1',
      kind: 'multiple',
      points: 2,
      prompt: t('Qu’est-il interdit de faire dans une synthèse de documents ?', 'What is forbidden in a document synthesis?', '文献综述中禁止做什么？'),
      explanation: t(
        'Donner son opinion, citer littéralement et traiter les documents l’un après l’autre. Attribuer une idée à ses auteurs est en revanche attendu.',
        'Giving your opinion, quoting literally and dealing with the documents one after another. Attributing an idea to its authors, however, is expected.',
        '表达个人观点、逐字引用、逐篇分述。而将观点归于相应作者则是必需的。',
      ),
      answers: [
        { id: 'a', text: t('Donner son opinion', 'Give your opinion', '表达个人观点'), correct: true },
        { id: 'b', text: t('Citer littéralement les textes', 'Quote the texts literally', '逐字引用原文'), correct: true },
        { id: 'c', text: t('Traiter les documents séparément', 'Deal with the documents separately', '逐篇分开处理'), correct: true },
        { id: 'd', text: t('Attribuer une idée à ses auteurs', 'Attribute an idea to its authors', '将观点归于作者'), correct: false },
      ],
    },
    {
      id: 'c1q2',
      kind: 'single',
      points: 1,
      prompt: t('Quelle transformation relève de la reformulation, et non de la paraphrase ?', 'Which transformation counts as reformulation rather than paraphrase?', '哪种转换属于改写而非照搬？'),
      explanation: t(
        'La nominalisation avec refonte de la syntaxe : « les prix augmentent » → « la hausse des prix ». Changer un seul mot reste une paraphrase.',
        'Nominalisation with recast syntax: “les prix augmentent” → “la hausse des prix”. Changing a single word remains a paraphrase.',
        '名词化并重构句法：“les prix augmentent” → “la hausse des prix”。仅替换一个词仍属照搬。',
      ),
      answers: [
        { id: 'a', text: t('« les prix augmentent » → « la hausse des prix »', '“les prix augmentent” → “la hausse des prix”', '“les prix augmentent” → “la hausse des prix”'), correct: true },
        { id: 'b', text: t('« peinent à » → « ont du mal à »', '“peinent à” → “ont du mal à”', '“peinent à” → “ont du mal à”'), correct: false },
        { id: 'c', text: t('recopier la phrase entre guillemets', 'copying the sentence in quotation marks', '把句子加引号照抄'), correct: false },
        { id: 'd', text: t('supprimer un adjectif', 'deleting an adjective', '删去一个形容词'), correct: false },
      ],
    },
    {
      id: 'c1q3',
      kind: 'single',
      points: 1,
      prompt: t('Comment construire le plan d’une synthèse ?', 'How should the plan of a synthesis be built?', '综述的提纲应如何构建？'),
      explanation: t(
        'À partir d’un tableau croisé idées × documents : les points communs à tous les textes ouvrent, les divergences suivent. Le plan est dicté par le dossier.',
        'From a grid of ideas × documents: points shared by all texts come first, divergences follow. The plan is dictated by the dossier.',
        '依据“观点 × 文献”交叉表：所有文本的共识点在前，分歧点在后。提纲由材料决定。',
      ),
      answers: [
        { id: 'a', text: t('À partir d’un tableau croisé idées × documents', 'From an ideas × documents grid', '依据“观点 × 文献”交叉表'), correct: true },
        { id: 'b', text: t('En suivant l’ordre des documents', 'By following the order of the documents', '按照文献顺序'), correct: false },
        { id: 'c', text: t('En reprenant le plan du document le plus long', 'By reusing the plan of the longest document', '沿用最长那篇的结构'), correct: false },
        { id: 'd', text: t('En choisissant un plan type avant la lecture', 'By picking a template plan before reading', '阅读前先选定模板提纲'), correct: false },
      ],
    },
    {
      id: 'c1q4',
      kind: 'single',
      points: 1,
      prompt: t('Quelle est l’erreur la plus lourde pendant l’exposé oral du C1 ?', 'What is the most serious error during the C1 oral presentation?', 'C1 口头陈述中最严重的错误是什么？'),
      explanation: t(
        'Lire ses notes. Le jury attend une reformulation en direct, avec contact visuel : c’est précisément la compétence évaluée.',
        'Reading your notes. The panel expects live reformulation with eye contact: that is precisely the skill assessed.',
        '照着笔记念。考官期待的是与考官对视、即时组织语言，而这正是被考查的能力。',
      ),
      answers: [
        { id: 'a', text: t('Lire ses notes', 'Reading your notes', '照着笔记念'), correct: true },
        { id: 'b', text: t('Annoncer son plan', 'Announcing your plan', '宣布提纲'), correct: false },
        { id: 'c', text: t('Prendre position en conclusion', 'Taking a stance in the conclusion', '在结论中表明立场'), correct: false },
        { id: 'd', text: t('Citer deux documents dans une même partie', 'Citing two documents in the same part', '在同一部分引用两份材料'), correct: false },
      ],
    },
    {
      id: 'c1q5',
      kind: 'single',
      points: 1,
      prompt: t('Quelle formulation appartient au registre soutenu ?', 'Which phrasing belongs to the formal register?', '哪种说法属于正式语体？'),
      explanation: t(
        '« Cela laisse à désirer » est soutenu ; « c’est nul » est familier et « ce n’est pas satisfaisant » relève du registre courant.',
        '“Cela laisse à désirer” is formal; “c’est nul” is informal and “ce n’est pas satisfaisant” is standard.',
        '“Cela laisse à désirer”属正式语体；“c’est nul”是口语，“ce n’est pas satisfaisant”属通用语体。',
      ),
      answers: [
        { id: 'a', text: t('Cela laisse à désirer.', 'Cela laisse à désirer.', 'Cela laisse à désirer.'), correct: true },
        { id: 'b', text: t('C’est nul.', 'C’est nul.', 'C’est nul.'), correct: false },
        { id: 'c', text: t('C’est pas terrible.', 'C’est pas terrible.', 'C’est pas terrible.'), correct: false },
        { id: 'd', text: t('Ça va pas du tout.', 'Ça va pas du tout.', 'Ça va pas du tout.'), correct: false },
      ],
    },
    {
      id: 'c1q6',
      kind: 'boolean',
      points: 1,
      prompt: t(
        'La seconde partie de l’épreuve écrite du C1 demande un avis personnel.',
        'The second part of the C1 writing paper calls for a personal opinion.',
        'C1 笔试第二部分要求表达个人观点。',
      ),
      explanation: t(
        'Vrai. Après la synthèse — strictement neutre — vient un essai argumenté de 250 mots où la prise de position est cette fois exigée.',
        'True. After the strictly neutral synthesis comes a 250-word argued essay where a stance is this time required.',
        '正确。在严格中立的综述之后，是一篇 250 词的议论文，此时必须表明立场。',
      ),
      answers: [
        { id: 'v', text: t('Vrai', 'True', '正确'), correct: true },
        { id: 'f', text: t('Faux', 'False', '错误'), correct: false },
      ],
    },
    {
      id: 'c1q7',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles techniques permettent de reformuler ?', 'Which techniques allow you to reformulate?', '哪些技巧可用于改写？'),
      explanation: t(
        'Nominalisation, changement de voix, changement de catégorie grammaticale et généralisation. Recopier en changeant la ponctuation n’est pas une reformulation.',
        'Nominalisation, change of voice, change of word class and generalisation. Copying with different punctuation is not reformulation.',
        '名词化、变换语态、改变词类与概括。仅改动标点照抄不算改写。',
      ),
      answers: [
        { id: 'a', text: t('La nominalisation', 'Nominalisation', '名词化'), correct: true },
        { id: 'b', text: t('Le passage à la voix passive', 'Switching to the passive voice', '改为被动语态'), correct: true },
        { id: 'c', text: t('La généralisation', 'Generalisation', '概括'), correct: true },
        { id: 'd', text: t('Recopier en changeant la ponctuation', 'Copying with different punctuation', '改动标点后照抄'), correct: false },
      ],
    },
    {
      id: 'c1q8',
      kind: 'single',
      points: 1,
      prompt: t('Combien de mots pour la synthèse du DALF C1 ?', 'How many words for the DALF C1 synthesis?', 'DALF C1 的综述需要多少词？'),
      explanation: t(
        'Environ 220 mots, à partir d’un dossier d’environ 1 000 mots. Dépasser de plus de 10 % est sanctionné.',
        'Around 220 words, from a dossier of about 1,000 words. Exceeding by more than 10% is penalised.',
        '约 220 词，源自约 1000 词的材料。超出 10% 以上会被扣分。',
      ),
      answers: [
        { id: 'a', text: t('environ 220 mots', 'around 220 words', '约 220 词'), correct: true },
        { id: 'b', text: t('environ 160 mots', 'around 160 words', '约 160 词'), correct: false },
        { id: 'c', text: t('environ 500 mots', 'around 500 words', '约 500 词'), correct: false },
        { id: 'd', text: t('environ 700 mots', 'around 700 words', '约 700 词'), correct: false },
      ],
    },
  ],
};

const dalfC2: Quiz = {
  id: 'qz_dalf_c2',
  title: t('Quiz — DALF C2', 'Quiz — DALF C2', '测验 — DALF C2'),
  description: t(
    'Compte rendu oral, article structuré et procédés de style.',
    'Oral report, structured article and stylistic devices.',
    '口头汇报、结构化文章与修辞手法。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'c2q1',
      kind: 'single',
      points: 1,
      prompt: t('Combien d’épreuves compte le DALF C2 ?', 'How many papers does the DALF C2 have?', 'DALF C2 有几项考试？'),
      explanation: t(
        'Deux épreuves seulement, notées sur 50 points chacune : une épreuve orale à partir d’un dossier sonore et une épreuve écrite à partir d’un dossier documentaire.',
        'Only two papers, each marked out of 50: an oral paper based on an audio dossier and a written paper based on a documentary dossier.',
        '仅两项，各占 50 分：基于音频材料的口试与基于文献材料的笔试。',
      ),
      answers: [
        { id: 'a', text: t('Deux', 'Two', '两项'), correct: true },
        { id: 'b', text: t('Quatre', 'Four', '四项'), correct: false },
        { id: 'c', text: t('Trois', 'Three', '三项'), correct: false },
        { id: 'd', text: t('Une seule', 'Just one', '一项'), correct: false },
      ],
    },
    {
      id: 'c2q2',
      kind: 'boolean',
      points: 1,
      prompt: t(
        'Le compte rendu de l’épreuve orale doit inclure votre point de vue.',
        'The report in the oral paper must include your own viewpoint.',
        '口试中的汇报部分必须包含你的个人观点。',
      ),
      explanation: t(
        'Faux. Le compte rendu est strictement neutre ; le point de vue n’apparaît que dans le développement personnel qui suit.',
        'False. The report is strictly neutral; your viewpoint appears only in the personal development that follows.',
        '错误。汇报必须严格中立；个人观点只出现在随后的展开部分。',
      ),
      answers: [
        { id: 'v', text: t('Vrai', 'True', '正确'), correct: false },
        { id: 'f', text: t('Faux', 'False', '错误'), correct: true },
      ],
    },
    {
      id: 'c2q3',
      kind: 'single',
      points: 1,
      prompt: t('« Un ajustement des effectifs » pour désigner des licenciements est…', '“Un ajustement des effectifs” to refer to redundancies is…', '用“un ajustement des effectifs”指代裁员属于……'),
      explanation: t(
        'Un euphémisme : une formulation atténuée qui adoucit une réalité désagréable.',
        'A euphemism: a softened phrasing that tones down an unpleasant reality.',
        '委婉语：用缓和的说法淡化令人不快的事实。',
      ),
      answers: [
        { id: 'a', text: t('un euphémisme', 'a euphemism', '委婉语'), correct: true },
        { id: 'b', text: t('une litote', 'litotes', '曲言法'), correct: false },
        { id: 'c', text: t('une périphrase', 'a circumlocution', '迂回表达'), correct: false },
        { id: 'd', text: t('une anaphore', 'an anaphora', '回指'), correct: false },
      ],
    },
    {
      id: 'c2q4',
      kind: 'multiple',
      points: 2,
      prompt: t('Que doit restituer un compte rendu de niveau C2 ?', 'What must a C2-level report convey?', 'C2 水平的汇报必须传达什么？'),
      explanation: t(
        'Le contenu, mais aussi le ton, l’ironie et les réserves exprimées par les intervenants. Le jugement personnel, lui, n’a pas sa place ici.',
        'The content, but also the tone, irony and reservations expressed by the speakers. Personal judgement has no place here.',
        '不仅是内容，还包括发言者的语气、反讽与保留态度。个人评判在此没有位置。',
      ),
      answers: [
        { id: 'a', text: t('Le contenu des interventions', 'The content of the contributions', '发言内容'), correct: true },
        { id: 'b', text: t('Le ton et l’ironie éventuelle', 'Tone and any irony', '语气与可能的反讽'), correct: true },
        { id: 'c', text: t('Les réserves exprimées', 'The reservations expressed', '所表达的保留态度'), correct: true },
        { id: 'd', text: t('Votre jugement sur les intervenants', 'Your judgement of the speakers', '你对发言者的评价'), correct: false },
      ],
    },
    {
      id: 'c2q5',
      kind: 'single',
      points: 1,
      prompt: t('Quel genre exige des nominalisations et la voix passive ?', 'Which genre calls for nominalisations and the passive voice?', '哪种文体要求使用名词化与被动语态？'),
      explanation: t(
        'Le rapport institutionnel : registre soutenu et impersonnel, où l’on efface l’énonciateur.',
        'The institutional report: a formal, impersonal register in which the speaker is effaced.',
        '机构报告：正式且不带个人色彩的语体，隐去陈述者。',
      ),
      answers: [
        { id: 'a', text: t('le rapport', 'the report', '报告'), correct: true },
        { id: 'b', text: t('l’article de vulgarisation', 'the popular-science article', '科普文章'), correct: false },
        { id: 'c', text: t('la lettre ouverte', 'the open letter', '公开信'), correct: false },
        { id: 'd', text: t('le témoignage', 'the personal account', '亲历叙述'), correct: false },
      ],
    },
    {
      id: 'c2q6',
      kind: 'single',
      points: 1,
      prompt: t('Combien de mots pour l’épreuve écrite du C2 ?', 'How many words for the C2 writing paper?', 'C2 笔试需要写多少词？'),
      explanation: t(
        'Environ 700 mots, en 3 h 30, à partir d’un dossier de quatre à six documents.',
        'Around 700 words, in 3 h 30, from a dossier of four to six documents.',
        '约 700 词，限时 3 小时 30 分，依据四到六份材料。',
      ),
      answers: [
        { id: 'a', text: t('environ 700 mots', 'around 700 words', '约 700 词'), correct: true },
        { id: 'b', text: t('environ 250 mots', 'around 250 words', '约 250 词'), correct: false },
        { id: 'c', text: t('environ 400 mots', 'around 400 words', '约 400 词'), correct: false },
        { id: 'd', text: t('environ 1 200 mots', 'around 1,200 words', '约 1200 词'), correct: false },
      ],
    },
    {
      id: 'c2q7',
      kind: 'single',
      points: 1,
      prompt: t(
        'Dans « cette volte-face ne laisse pas d’interroger », quel procédé reconnaît-on ?',
        'In “cette volte-face ne laisse pas d’interroger”, which device do you recognise?',
        '在“cette volte-face ne laisse pas d’interroger”中可以辨认出哪种手法？',
      ),
      explanation: t(
        'Une reprise anaphorique évaluative — « volte-face » requalifie le fait — doublée d’une litote qui exprime le doute sans l’asséner.',
        'An evaluative anaphoric reference — “volte-face” re-labels the fact — combined with litotes expressing doubt without hammering it home.',
        '带评价色彩的回指——“volte-face”重新定性该事实——并结合曲言法，含蓄地表达怀疑。',
      ),
      answers: [
        { id: 'a', text: t('une reprise anaphorique évaluative', 'an evaluative anaphoric reference', '带评价色彩的回指'), correct: true },
        { id: 'b', text: t('une question oratoire', 'a rhetorical question', '反问'), correct: false },
        { id: 'c', text: t('une énumération', 'an enumeration', '列举'), correct: false },
        { id: 'd', text: t('une comparaison', 'a comparison', '比喻'), correct: false },
      ],
    },
    {
      id: 'c2q8',
      kind: 'single',
      points: 1,
      prompt: t(
        'Comment vérifier le rythme de son texte avant de rendre sa copie ?',
        'How can you check the rhythm of your text before handing it in?',
        '交卷前如何检验文章的节奏？',
      ),
      explanation: t(
        'En le relisant à voix haute : le souffle qui manque signale des phrases trop longues, la monotonie une absence d’alternance long/court.',
        'By reading it aloud: running out of breath signals over-long sentences, monotony a lack of long/short alternation.',
        '朗读出来：气不够用说明句子过长，单调则说明缺少长短句交替。',
      ),
      answers: [
        { id: 'a', text: t('En le relisant à voix haute', 'By reading it aloud', '朗读一遍'), correct: true },
        { id: 'b', text: t('En comptant les adjectifs', 'By counting the adjectives', '数形容词的数量'), correct: false },
        { id: 'c', text: t('En vérifiant le nombre de paragraphes', 'By checking the number of paragraphs', '核对段落数量'), correct: false },
        { id: 'd', text: t('En relisant uniquement la conclusion', 'By rereading only the conclusion', '只重读结论'), correct: false },
      ],
    },
  ],
};


/* ------------------------------------------------------------------
   Quiz des niveaux A1 → C2. Même format : 6 questions, seuil 70 %.
   ------------------------------------------------------------------ */

const a1PremiersMots: Quiz = {
  id: 'qz_a1_premiers_mots',
  title: t('Quiz — Premiers mots', 'Quiz — First words', '测验 — 最初的词语'),
  description: t(
    'Salutations, présentation, alphabet, nombres et date.',
    'Greetings, introductions, the alphabet, numbers and dates.',
    '问候、自我介绍、字母、数字与日期。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'a1pm1',
      kind: 'single',
      points: 1,
      prompt: t('Vous entrez dans une boulangerie à 10 h. Que dites-vous ?', 'You walk into a bakery at 10 a.m. What do you say?', '上午 10 点走进面包店，你会说什么？'),
      explanation: t(
        '« Bonjour » couvre toute la journée jusqu’en fin d’après-midi et convient à un commerçant inconnu. « Salut » est réservé aux proches, « bonsoir » s’emploie en fin de journée.',
        '“Bonjour” covers the whole day until late afternoon and is right for a shopkeeper you do not know. “Salut” is for close acquaintances, and “bonsoir” is used from the end of the day.',
        '“Bonjour” 适用于从早晨到傍晚的整段时间，对不相识的店员正合适。“Salut” 仅限熟人，“bonsoir” 到傍晚才用。',
      ),
      answers: [
        { id: 'a', text: t('Bonjour', 'Bonjour', 'Bonjour'), correct: true },
        { id: 'b', text: t('Bonsoir', 'Bonsoir', 'Bonsoir'), correct: false },
        { id: 'c', text: t('Salut', 'Salut', 'Salut'), correct: false },
        { id: 'd', text: t('Bonne journée', 'Bonne journée', 'Bonne journée'), correct: false },
      ],
    },
    {
      id: 'a1pm2',
      kind: 'single',
      points: 1,
      prompt: t('Vous parlez à un professeur que vous ne connaissez pas. Quelle formule choisir ?', 'You are speaking to a teacher you do not know. Which form do you choose?', '你在和一位不认识的老师说话，该用哪种说法？'),
      explanation: t(
        'Avec une personne inconnue et dans un cadre institutionnel, on emploie « vous ». Personne n’est jamais vexé d’être vouvoyé ; c’est l’interlocuteur qui proposera éventuellement le tutoiement.',
        'With someone you do not know, in an institutional setting, you use “vous”. Nobody is ever offended by being addressed as “vous”; it is the other person who may propose switching to “tu”.',
        '面对不相识的人、且在机构场合，应使用 “vous”。没有人会因被称作 “vous” 而不快；改用 “tu” 应由对方提出。',
      ),
      answers: [
        { id: 'a', text: t('Comment allez-vous ?', 'Comment allez-vous ?', 'Comment allez-vous ?'), correct: true },
        { id: 'b', text: t('Comment vas-tu ?', 'Comment vas-tu ?', 'Comment vas-tu ?'), correct: false },
        { id: 'c', text: t('Ça va ?', 'Ça va ?', 'Ça va ?'), correct: false },
        { id: 'd', text: t('Tu vas bien ?', 'Tu vas bien ?', 'Tu vas bien ?'), correct: false },
      ],
    },
    {
      id: 'a1pm3',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles phrases de présentation sont correctes ?', 'Which introduction sentences are correct?', '下列自我介绍的句子哪些正确？'),
      explanation: t(
        '« Je m’appelle » est pronominal, « j’habite à » précède une ville, et la profession se dit sans article. En revanche l’âge se donne avec « avoir » : « j’ai vingt ans ».',
        '“Je m’appelle” is reflexive, “j’habite à” precedes a city, and jobs take no article. Age, however, uses “avoir”: “j’ai vingt ans”.',
        '“Je m’appelle” 是自反动词，“j’habite à” 后接城市名，职业前不加冠词。而年龄要用 “avoir”：“j’ai vingt ans”。',
      ),
      answers: [
        { id: 'a', text: t('Je m’appelle Paul.', 'Je m’appelle Paul.', 'Je m’appelle Paul.'), correct: true },
        { id: 'b', text: t('J’habite à Bordeaux.', 'J’habite à Bordeaux.', 'J’habite à Bordeaux.'), correct: true },
        { id: 'c', text: t('Je suis professeur.', 'Je suis professeur.', 'Je suis professeur.'), correct: true },
        { id: 'd', text: t('Je suis vingt ans.', 'Je suis vingt ans.', 'Je suis vingt ans.'), correct: false },
      ],
    },
    {
      id: 'a1pm4',
      kind: 'single',
      points: 1,
      prompt: t('Comment dit-on 95 en français de France ?', 'How do you say 95 in the French of France?', '在法国的法语中，95 怎么说？'),
      explanation: t(
        'À partir de 80, la France compte par vingtaines : 95 = 4 × 20 + 15, soit « quatre-vingt-quinze ». « Nonante-cinq » est correct, mais s’emploie en Belgique et en Suisse.',
        'From 80 on, France counts in twenties: 95 = 4 × 20 + 15, that is “quatre-vingt-quinze”. “Nonante-cinq” is correct but used in Belgium and Switzerland.',
        '从 80 起，法国以二十进位计数：95 = 4 × 20 + 15，即 “quatre-vingt-quinze”。“Nonante-cinq” 也正确，但用于比利时和瑞士。',
      ),
      answers: [
        { id: 'a', text: t('quatre-vingt-quinze', 'quatre-vingt-quinze', 'quatre-vingt-quinze'), correct: true },
        { id: 'b', text: t('nonante-cinq', 'nonante-cinq', 'nonante-cinq'), correct: false },
        { id: 'c', text: t('quatre-vingt-cinq-dix', 'quatre-vingt-cinq-dix', 'quatre-vingt-cinq-dix'), correct: false },
        { id: 'd', text: t('nonante-quinze', 'nonante-quinze', 'nonante-quinze'), correct: false },
      ],
    },
    {
      id: 'a1pm5',
      kind: 'single',
      points: 1,
      prompt: t('Il est 19 h 45. Comment le dit-on dans une conversation ordinaire ?', 'It is 19:45. How do you say it in ordinary conversation?', '现在是 19:45，日常对话中怎么说？'),
      explanation: t(
        'Dans la conversation, on utilise l’heure sur douze et l’on retranche le quart de l’heure suivante : « huit heures moins le quart ». « Dix-neuf heures quarante-cinq » est l’heure officielle, correcte mais formelle.',
        'In conversation you use the twelve-hour clock and subtract the quarter from the following hour: “huit heures moins le quart”. “Dix-neuf heures quarante-cinq” is official time, correct but formal.',
        '日常对话使用十二小时制，并从下一个整点减去一刻钟：“huit heures moins le quart”。“Dix-neuf heures quarante-cinq” 属正式时间表达，正确但偏正式。',
      ),
      answers: [
        { id: 'a', text: t('Il est huit heures moins le quart.', 'Il est huit heures moins le quart.', 'Il est huit heures moins le quart.'), correct: true },
        { id: 'b', text: t('Il est sept heures quarante-cinq du soir.', 'Il est sept heures quarante-cinq du soir.', 'Il est sept heures quarante-cinq du soir.'), correct: false },
        { id: 'c', text: t('Il est huit heures et quart.', 'Il est huit heures et quart.', 'Il est huit heures et quart.'), correct: false },
        { id: 'd', text: t('Il est sept heures et demie.', 'Il est sept heures et demie.', 'Il est sept heures et demie.'), correct: false },
      ],
    },
    {
      id: 'a1pm6',
      kind: 'single',
      points: 1,
      prompt: t('Quelle date est écrite correctement ?', 'Which date is written correctly?', '哪个日期写法正确？'),
      explanation: t(
        'La date française suit l’ordre article + chiffre + mois, sans majuscule au mois. Seul le premier du mois est ordinal : « le 1er mai », mais « le 2 mai ».',
        'French dates follow the order article + number + month, with no capital on the month. Only the first of the month is ordinal: “le 1er mai”, but “le 2 mai”.',
        '法语日期的顺序是冠词 + 数字 + 月份，月份不大写。只有每月 1 号用序数：“le 1er mai”，但说 “le 2 mai”。',
      ),
      answers: [
        { id: 'a', text: t('le 14 juillet 2026', 'le 14 juillet 2026', 'le 14 juillet 2026'), correct: true },
        { id: 'b', text: t('le Juillet 14 2026', 'le Juillet 14 2026', 'le Juillet 14 2026'), correct: false },
        { id: 'c', text: t('le 14e juillet 2026', 'le 14e juillet 2026', 'le 14e juillet 2026'), correct: false },
        { id: 'd', text: t('juillet le 14, 2026', 'juillet le 14, 2026', 'juillet le 14, 2026'), correct: false },
      ],
    },
  ],
};

const a1Present: Quiz = {
  id: 'qz_a1_present',
  title: t('Quiz — Le présent', 'Quiz — The present tense', '测验 — 现在时'),
  description: t(
    'Être, avoir, verbes en -er, aller, faire, venir et le futur proche.',
    'Être, avoir, -er verbs, aller, faire, venir and the near future.',
    'Être、avoir、-er 动词、aller、faire、venir 以及近将来时。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'a1pr1',
      kind: 'single',
      points: 1,
      prompt: t('Complétez : « Elle … trente ans. »', 'Complete: “Elle … trente ans.”', '填空：“Elle … trente ans.”'),
      explanation: t(
        'L’âge se dit avec **avoir** en français, là où l’anglais et le chinois emploient « être ». « Elle a trente ans », jamais « elle est trente ans ».',
        'Age uses **avoir** in French, where English and Chinese use “be”. “Elle a trente ans”, never “elle est trente ans”.',
        '法语用 **avoir** 表示年龄，而英语和中文用“是”。要说 “Elle a trente ans”，绝不能说 “elle est trente ans”。',
      ),
      answers: [
        { id: 'a', text: t('a', 'a', 'a'), correct: true },
        { id: 'b', text: t('est', 'est', 'est'), correct: false },
        { id: 'c', text: t('fait', 'fait', 'fait'), correct: false },
        { id: 'd', text: t('va', 'va', 'va'), correct: false },
      ],
    },
    {
      id: 'a1pr2',
      kind: 'single',
      points: 1,
      prompt: t('Quelle forme est correcte : « nous … à midi » (manger) ?', 'Which form is correct: “nous … à midi” (manger)?', '哪个形式正确：“nous … à midi”（manger）？'),
      explanation: t(
        'Les verbes en -ger conservent le **e** devant la terminaison -ons pour garder le son [ʒ] : nous mangeons, nous voyageons, nous changeons.',
        'Verbs in -ger keep the **e** before the -ons ending to preserve the [ʒ] sound: nous mangeons, nous voyageons, nous changeons.',
        '-ger 结尾的动词在 -ons 前保留 **e**，以维持 [ʒ] 音：nous mangeons、nous voyageons、nous changeons。',
      ),
      answers: [
        { id: 'a', text: t('mangeons', 'mangeons', 'mangeons'), correct: true },
        { id: 'b', text: t('mangons', 'mangons', 'mangons'), correct: false },
        { id: 'c', text: t('manglons', 'manglons', 'manglons'), correct: false },
        { id: 'd', text: t('mangeions', 'mangeions', 'mangeions'), correct: false },
      ],
    },
    {
      id: 'a1pr3',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles formes du présent sont correctes ?', 'Which present-tense forms are correct?', '下列现在时形式哪些正确？'),
      explanation: t(
        '« Vous faites » et « vous êtes » sont irrégulières mais correctes. « Vous disez » n’existe pas : c’est « vous dites ». « Ils vont » est la forme attendue de aller, « ils allent » n’existe pas.',
        '“Vous faites” and “vous êtes” are irregular but correct. “Vous disez” does not exist: it is “vous dites”. “Ils vont” is the expected form of aller; “ils allent” does not exist.',
        '“Vous faites” 与 “vous êtes” 虽不规则但正确。“Vous disez” 不存在，应为 “vous dites”。aller 的正确形式是 “ils vont”，“ils allent” 不存在。',
      ),
      answers: [
        { id: 'a', text: t('vous faites', 'vous faites', 'vous faites'), correct: true },
        { id: 'b', text: t('vous êtes', 'vous êtes', 'vous êtes'), correct: true },
        { id: 'c', text: t('vous disez', 'vous disez', 'vous disez'), correct: false },
        { id: 'd', text: t('ils allent', 'ils allent', 'ils allent'), correct: false },
      ],
    },
    {
      id: 'a1pr4',
      kind: 'single',
      points: 1,
      prompt: t('Que signifie « je viens de manger » ?', 'What does “je viens de manger” mean?', '“je viens de manger” 是什么意思？'),
      explanation: t(
        '« Venir de + infinitif » exprime le passé récent : l’action est terminée depuis quelques minutes. Pour le futur proche, on utilise « aller + infinitif » : « je vais manger ».',
        '“Venir de + infinitive” expresses the recent past: the action finished a few minutes ago. For the near future you use “aller + infinitive”: “je vais manger”.',
        '“Venir de + 不定式”表示最近过去：动作在几分钟前结束。表示近将来则用 “aller + 不定式”：“je vais manger”。',
      ),
      answers: [
        { id: 'a', text: t('J’ai mangé il y a quelques minutes.', 'I ate a few minutes ago.', '我几分钟前刚吃过。'), correct: true },
        { id: 'b', text: t('Je vais manger dans un instant.', 'I am about to eat.', '我马上就要吃。'), correct: false },
        { id: 'c', text: t('Je mange en ce moment.', 'I am eating right now.', '我此刻正在吃。'), correct: false },
        { id: 'd', text: t('J’ai l’habitude de manger.', 'I usually eat.', '我习惯吃。'), correct: false },
      ],
    },
    {
      id: 'a1pr5',
      kind: 'single',
      points: 1,
      prompt: t('Complétez : « Je vais … restaurant. »', 'Complete: “Je vais … restaurant.”', '填空：“Je vais … restaurant.”'),
      explanation: t(
        '« Restaurant » est masculin et commence par une consonne : « à + le » se contracte obligatoirement en **au**. La forme « à le » n’existe pas en français.',
        '“Restaurant” is masculine and starts with a consonant: “à + le” must contract to **au**. The form “à le” does not exist in French.',
        '“Restaurant” 是阳性且以辅音开头：“à + le” 必须缩合为 **au**。法语中不存在 “à le” 这一形式。',
      ),
      answers: [
        { id: 'a', text: t('au', 'au', 'au'), correct: true },
        { id: 'b', text: t('à le', 'à le', 'à le'), correct: false },
        { id: 'c', text: t('en', 'en', 'en'), correct: false },
        { id: 'd', text: t('du', 'du', 'du'), correct: false },
      ],
    },
    {
      id: 'a1pr6',
      kind: 'single',
      points: 1,
      prompt: t('Combien de formes de « parler » se prononcent [paʁl] au présent ?', 'How many present-tense forms of “parler” are pronounced [paʁl]?', 'parler 的现在时中有几个形式读作 [paʁl]？'),
      explanation: t(
        'Je parle, tu parles, il parle et ils parlent se prononcent tous de la même façon : les terminaisons -e, -es et -ent sont muettes. Seules « nous parlons » et « vous parlez » se distinguent à l’oral.',
        'Je parle, tu parles, il parle and ils parlent are all pronounced the same way: the endings -e, -es and -ent are silent. Only “nous parlons” and “vous parlez” stand out in speech.',
        'Je parle、tu parles、il parle 和 ils parlent 读音完全相同：词尾 -e、-es、-ent 均不发音。口语中只有 “nous parlons” 和 “vous parlez” 有区别。',
      ),
      answers: [
        { id: 'a', text: t('Quatre', 'Four', '四个'), correct: true },
        { id: 'b', text: t('Deux', 'Two', '两个'), correct: false },
        { id: 'c', text: t('Trois', 'Three', '三个'), correct: false },
        { id: 'd', text: t('Six', 'Six', '六个'), correct: false },
      ],
    },
  ],
};

const a1Nommer: Quiz = {
  id: 'qz_a1_nommer',
  title: t('Quiz — Nommer les choses', 'Quiz — Naming things', '测验 — 称说事物'),
  description: t(
    'Articles, genre, pluriel, question et négation.',
    'Articles, gender, plural, questions and negation.',
    '冠词、性、复数、疑问与否定。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'a1no1',
      kind: 'single',
      points: 1,
      prompt: t('Quel mot est féminin ?', 'Which word is feminine?', '哪个词是阴性？'),
      explanation: t(
        'Les noms en **-té** sont féminins : la liberté, la beauté, la société. « Fromage », « bureau » et « moment » sont masculins, comme la plupart des noms en -age, -eau et -ment.',
        'Nouns in **-té** are feminine: la liberté, la beauté, la société. “Fromage”, “bureau” and “moment” are masculine, like most nouns in -age, -eau and -ment.',
        '以 **-té** 结尾的名词为阴性：la liberté、la beauté、la société。“Fromage”“bureau”“moment” 是阳性，与多数以 -age、-eau、-ment 结尾的名词一致。',
      ),
      answers: [
        { id: 'a', text: t('liberté', 'liberté', 'liberté'), correct: true },
        { id: 'b', text: t('fromage', 'fromage', 'fromage'), correct: false },
        { id: 'c', text: t('bureau', 'bureau', 'bureau'), correct: false },
        { id: 'd', text: t('moment', 'moment', 'moment'), correct: false },
      ],
    },
    {
      id: 'a1no2',
      kind: 'single',
      points: 1,
      prompt: t('Quel est le pluriel de « le journal » ?', 'What is the plural of “le journal”?', '“le journal” 的复数是什么？'),
      explanation: t(
        'Les noms en **-al** font leur pluriel en **-aux** : le journal → les journaux, l’animal → les animaux, le cheval → les chevaux.',
        'Nouns in **-al** form their plural in **-aux**: le journal → les journaux, l’animal → les animaux, le cheval → les chevaux.',
        '以 **-al** 结尾的名词复数变为 **-aux**：le journal → les journaux、l’animal → les animaux、le cheval → les chevaux。',
      ),
      answers: [
        { id: 'a', text: t('les journaux', 'les journaux', 'les journaux'), correct: true },
        { id: 'b', text: t('les journals', 'les journals', 'les journals'), correct: false },
        { id: 'c', text: t('les journalx', 'les journalx', 'les journalx'), correct: false },
        { id: 'd', text: t('les journales', 'les journales', 'les journales'), correct: false },
      ],
    },
    {
      id: 'a1no3',
      kind: 'single',
      points: 1,
      prompt: t('Complétez : « Je n’ai pas … voiture. »', 'Complete: “Je n’ai pas … voiture.”', '填空：“Je n’ai pas … voiture.”'),
      explanation: t(
        'Après une négation, les articles un, une et des deviennent **de**. Exception : après le verbe « être », l’article ne change pas — « ce n’est pas une voiture ».',
        'After a negative, the articles un, une and des become **de**. Exception: after the verb “être” the article does not change — “ce n’est pas une voiture”.',
        '否定之后，冠词 un、une、des 变为 **de**。例外：在动词 “être” 之后冠词不变——“ce n’est pas une voiture”。',
      ),
      answers: [
        { id: 'a', text: t('de', 'de', 'de'), correct: true },
        { id: 'b', text: t('une', 'une', 'une'), correct: false },
        { id: 'c', text: t('la', 'la', 'la'), correct: false },
        { id: 'd', text: t('des', 'des', 'des'), correct: false },
      ],
    },
    {
      id: 'a1no4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles questions sont correctement formées ?', 'Which questions are correctly formed?', '下列疑问句哪些构造正确？'),
      explanation: t(
        'L’intonation, « est-ce que » et l’inversion sont les trois formes correctes, dans trois registres différents. « Est-ce que viens-tu ? » cumule deux procédés : c’est impossible.',
        'Intonation, “est-ce que” and inversion are the three correct forms, in three different registers. “Est-ce que viens-tu ?” combines two devices, which is impossible.',
        '升调、“est-ce que” 和倒装是三种正确形式，分属三种语体。“Est-ce que viens-tu ?” 叠加了两种手法，不能成立。',
      ),
      answers: [
        { id: 'a', text: t('Tu viens ?', 'Tu viens ?', 'Tu viens ?'), correct: true },
        { id: 'b', text: t('Est-ce que tu viens ?', 'Est-ce que tu viens ?', 'Est-ce que tu viens ?'), correct: true },
        { id: 'c', text: t('Viens-tu ?', 'Viens-tu ?', 'Viens-tu ?'), correct: true },
        { id: 'd', text: t('Est-ce que viens-tu ?', 'Est-ce que viens-tu ?', 'Est-ce que viens-tu ?'), correct: false },
      ],
    },
    {
      id: 'a1no5',
      kind: 'single',
      points: 1,
      prompt: t('Quelle suite est correctement accordée ?', 'Which phrase is correctly agreed?', '哪个词组的性数配合正确？'),
      explanation: t(
        'Au féminin pluriel, l’adjectif prend **-e** puis **-s** : des petites tables vertes. Les adjectifs de taille se placent avant le nom, les couleurs après.',
        'In the feminine plural the adjective takes **-e** then **-s**: des petites tables vertes. Size adjectives go before the noun, colours after.',
        '阴性复数时形容词先加 **-e** 再加 **-s**：des petites tables vertes。表示大小的形容词前置，颜色形容词后置。',
      ),
      answers: [
        { id: 'a', text: t('des petites tables vertes', 'des petites tables vertes', 'des petites tables vertes'), correct: true },
        { id: 'b', text: t('des petit tables vert', 'des petit tables vert', 'des petit tables vert'), correct: false },
        { id: 'c', text: t('des petites tables vert', 'des petites tables vert', 'des petites tables vert'), correct: false },
        { id: 'd', text: t('des vertes petites tables', 'des vertes petites tables', 'des vertes petites tables'), correct: false },
      ],
    },
    {
      id: 'a1no6',
      kind: 'single',
      points: 1,
      prompt: t('Pourquoi dit-on « les amis » [lezami] ?', 'Why is “les amis” pronounced [lezami]?', '为什么 “les amis” 读作 [lezami]？'),
      explanation: t(
        'Devant une voyelle, le **s** de « les » se prononce [z] : c’est la liaison. Comme le s du nom reste muet, cette liaison est souvent le seul indice sonore du pluriel.',
        'Before a vowel, the **s** of “les” is pronounced [z]: this is liaison. Since the noun’s s stays silent, this liaison is often the only audible clue of the plural.',
        '元音前，“les” 的 **s** 读作 [z]，这就是联诵。由于名词的 s 不发音，这一联诵往往是复数唯一可听的线索。',
      ),
      answers: [
        { id: 'a', text: t('C’est une liaison : le s de « les » se prononce [z] devant une voyelle.', 'It is a liaison: the s of “les” is pronounced [z] before a vowel.', '这是联诵：元音前 “les” 的 s 读作 [z]。'), correct: true },
        { id: 'b', text: t('Parce que le s du nom « amis » se prononce.', 'Because the s of the noun “amis” is pronounced.', '因为名词 “amis” 的 s 要发音。'), correct: false },
        { id: 'c', text: t('Parce que le mot est masculin pluriel.', 'Because the word is masculine plural.', '因为该词是阳性复数。'), correct: false },
        { id: 'd', text: t('C’est une exception sans règle.', 'It is an exception with no rule.', '这是没有规律的例外。'), correct: false },
      ],
    },
  ],
};

const a2Raconter: Quiz = {
  id: 'qz_a2_raconter',
  title: t('Quiz — Raconter au passé', 'Quiz — Telling the past', '测验 — 讲述过去'),
  description: t(
    'Passé composé, choix de l’auxiliaire, imparfait et opposition des deux temps.',
    'Passé composé, choice of auxiliary, imparfait and the contrast between the two tenses.',
    '复合过去时、助动词的选择、未完成过去时，以及两种时态的对立。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'a2ra1',
      kind: 'single',
      points: 1,
      prompt: t('Complétez : « Marie … arrivée à huit heures. »', 'Complete: “Marie … arrivée à huit heures.”', '填空：“Marie … arrivée à huit heures.”'),
      explanation: t(
        '« Arriver » est un verbe de déplacement : il se conjugue avec **être**, et le participe s’accorde alors avec le sujet — « arrivée » au féminin singulier.',
        '“Arriver” is a verb of movement: it takes **être**, and the participle then agrees with the subject — “arrivée” in the feminine singular.',
        '“Arriver” 是位移动词：用 **être** 变位，此时分词与主语配合——阴性单数作 “arrivée”。',
      ),
      answers: [
        { id: 'a', text: t('est', 'est', 'est'), correct: true },
        { id: 'b', text: t('a', 'a', 'a'), correct: false },
        { id: 'c', text: t('était', 'était', 'était'), correct: false },
        { id: 'd', text: t('avait', 'avait', 'avait'), correct: false },
      ],
    },
    {
      id: 'a2ra2',
      kind: 'multiple',
      points: 2,
      prompt: t('Quels verbes se conjuguent avec « être » au passé composé ?', 'Which verbs take “être” in the passé composé?', '复合过去时中，哪些动词用 “être”？'),
      explanation: t(
        'Aller, partir et se lever prennent être : les deux premiers sont des verbes de déplacement, le troisième est pronominal. « Manger » prend avoir, comme l’immense majorité des verbes.',
        'Aller, partir and se lever take être: the first two are verbs of movement, the third is reflexive. “Manger” takes avoir, like the vast majority of verbs.',
        'Aller、partir 和 se lever 用 être：前两个是位移动词，第三个是自反动词。“Manger” 用 avoir，与绝大多数动词一样。',
      ),
      answers: [
        { id: 'a', text: t('aller', 'aller', 'aller'), correct: true },
        { id: 'b', text: t('partir', 'partir', 'partir'), correct: true },
        { id: 'c', text: t('se lever', 'se lever', 'se lever'), correct: true },
        { id: 'd', text: t('manger', 'manger', 'manger'), correct: false },
      ],
    },
    {
      id: 'a2ra3',
      kind: 'single',
      points: 1,
      prompt: t('Comment forme-t-on le radical de l’imparfait ?', 'How do you form the imparfait stem?', '未完成过去时的词干如何构成？'),
      explanation: t(
        'On prend la forme **nous** du présent et on retire **-ons** : nous finissons → finiss- → je finissais. Un seul verbe échappe à la règle, « être » (j’étais).',
        'You take the **nous** form of the present and remove **-ons**: nous finissons → finiss- → je finissais. Only one verb escapes the rule, “être” (j’étais).',
        '取现在时的 **nous** 形式，去掉 **-ons**：nous finissons → finiss- → je finissais。只有 “être” 一个动词例外（j’étais）。',
      ),
      answers: [
        { id: 'a', text: t('À partir de la forme « nous » du présent, sans -ons.', 'From the “nous” form of the present, minus -ons.', '取现在时 “nous” 形式，去掉 -ons。'), correct: true },
        { id: 'b', text: t('À partir de l’infinitif, sans -er.', 'From the infinitive, minus -er.', '取不定式，去掉 -er。'), correct: false },
        { id: 'c', text: t('À partir du participe passé.', 'From the past participle.', '取过去分词。'), correct: false },
        { id: 'd', text: t('À partir de la forme « je » du présent.', 'From the “je” form of the present.', '取现在时 “je” 形式。'), correct: false },
      ],
    },
    {
      id: 'a2ra4',
      kind: 'single',
      points: 1,
      prompt: t('« Je … quand le téléphone … » : quelle combinaison de temps ?', '“Je … quand le téléphone …”: which combination of tenses?', '“Je … quand le téléphone …”：该用哪种时态组合？'),
      explanation: t(
        'L’action en cours (le décor) se met à l’imparfait, l’événement qui l’interrompt au passé composé : « je dormais quand le téléphone a sonné ».',
        'The ongoing action (the backdrop) goes in the imparfait, the event that interrupts it in the passé composé: “je dormais quand le téléphone a sonné”.',
        '正在进行的动作（背景）用未完成过去时，打断它的事件用复合过去时：“je dormais quand le téléphone a sonné”。',
      ),
      answers: [
        { id: 'a', text: t('dormais / a sonné', 'dormais / a sonné', 'dormais / a sonné'), correct: true },
        { id: 'b', text: t('ai dormi / sonnait', 'ai dormi / sonnait', 'ai dormi / sonnait'), correct: false },
        { id: 'c', text: t('ai dormi / a sonné', 'ai dormi / a sonné', 'ai dormi / a sonné'), correct: false },
        { id: 'd', text: t('dormais / sonnait', 'dormais / sonnait', 'dormais / sonnait'), correct: false },
      ],
    },
    {
      id: 'a2ra5',
      kind: 'single',
      points: 1,
      prompt: t('Quel marqueur appelle plutôt l’imparfait ?', 'Which marker calls for the imparfait?', '哪个标记词更倾向于使用未完成过去时？'),
      explanation: t(
        '« Tous les jours » signale une habitude répétée sans limite précise : c’est l’imparfait. « Soudain », « hier » et « en 2019 » bornent l’action et appellent le passé composé.',
        '“Tous les jours” signals a repeated habit with no precise boundary: that is the imparfait. “Soudain”, “hier” and “en 2019” bound the action and call for the passé composé.',
        '“Tous les jours” 表示没有明确界限的反复习惯：用未完成过去时。“Soudain”“hier”“en 2019” 为动作划定界限，需用复合过去时。',
      ),
      answers: [
        { id: 'a', text: t('tous les jours', 'tous les jours', 'tous les jours'), correct: true },
        { id: 'b', text: t('soudain', 'soudain', 'soudain'), correct: false },
        { id: 'c', text: t('hier', 'hier', 'hier'), correct: false },
        { id: 'd', text: t('en 2019', 'en 2019', 'en 2019'), correct: false },
      ],
    },
    {
      id: 'a2ra6',
      kind: 'single',
      points: 1,
      prompt: t('Quelle différence entre « j’ai su » et « je savais » ?', 'What is the difference between “j’ai su” and “je savais”?', '“j’ai su” 与 “je savais” 有何区别？'),
      explanation: t(
        'Avec certains verbes d’état, le passé composé marque le **début** de l’état : « j’ai su » = j’ai appris à ce moment-là. L’imparfait décrit l’état lui-même : « je savais » = je connaissais déjà.',
        'With certain stative verbs, the passé composé marks the **onset** of the state: “j’ai su” = I found out at that moment. The imparfait describes the state itself: “je savais” = I already knew.',
        '对某些状态动词，复合过去时标示状态的**开始**：“j’ai su” 指那一刻得知。未完成过去时描述状态本身：“je savais” 指早已知道。',
      ),
      answers: [
        { id: 'a', text: t('« J’ai su » marque le moment où j’ai appris ; « je savais » décrit un état déjà acquis.', '“J’ai su” marks the moment I found out; “je savais” describes a state already in place.', '“J’ai su” 标示得知的那一刻；“je savais” 描述已有的状态。'), correct: true },
        { id: 'b', text: t('Les deux formes sont interchangeables.', 'The two forms are interchangeable.', '两种形式可互换。'), correct: false },
        { id: 'c', text: t('« Je savais » est plus poli.', '“Je savais” is more polite.', '“Je savais” 更礼貌。'), correct: false },
        { id: 'd', text: t('« J’ai su » ne s’emploie qu’à l’écrit.', '“J’ai su” is used only in writing.', '“J’ai su” 只用于书面。'), correct: false },
      ],
    },
  ],
};

const a2Reperes: Quiz = {
  id: 'qz_a2_reperes',
  title: t('Quiz — Se repérer', 'Quiz — Finding your bearings', '测验 — 定位表达'),
  description: t(
    'Prépositions de lieu, expressions de durée, quantités et pronoms y et en.',
    'Prepositions of place, duration expressions, quantities and the pronouns y and en.',
    '地点介词、时段表达、数量，以及代词 y 和 en。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'a2re1',
      kind: 'single',
      points: 1,
      prompt: t('Complétez : « Je vais … Japon. »', 'Complete: “Je vais … Japon.”', '填空：“Je vais … Japon.”'),
      explanation: t(
        '« Le Japon » est un pays masculin : on emploie **au** (à + le). Devant un pays féminin on dirait « en » (en France), devant un pluriel « aux » (aux États-Unis).',
        '“Le Japon” is a masculine country: you use **au** (à + le). Before a feminine country you would say “en” (en France), before a plural “aux” (aux États-Unis).',
        '“Le Japon” 是阳性国名，用 **au**（à + le）。阴性国名前用 “en”（en France），复数国名前用 “aux”（aux États-Unis）。',
      ),
      answers: [
        { id: 'a', text: t('au', 'au', 'au'), correct: true },
        { id: 'b', text: t('en', 'en', 'en'), correct: false },
        { id: 'c', text: t('à', 'à', 'à'), correct: false },
        { id: 'd', text: t('aux', 'aux', 'aux'), correct: false },
      ],
    },
    {
      id: 'a2re2',
      kind: 'single',
      points: 1,
      prompt: t('Complétez : « J’habite ici … trois ans. »', 'Complete: “J’habite ici … trois ans.”', '填空：“J’habite ici … trois ans.”'),
      explanation: t(
        '« Depuis » exprime une durée commencée dans le passé et qui continue ; elle se construit avec le **présent**. « Pendant » clôt la période et « il y a » désigne un point du passé.',
        '“Depuis” expresses a duration that began in the past and continues; it takes the **present**. “Pendant” closes the period and “il y a” marks a point in the past.',
        '“Depuis” 表示始于过去并持续至今的时段，须搭配**现在时**。“Pendant” 表示已结束的时段，“il y a” 指过去的某个时点。',
      ),
      answers: [
        { id: 'a', text: t('depuis', 'depuis', 'depuis'), correct: true },
        { id: 'b', text: t('pendant', 'pendant', 'pendant'), correct: false },
        { id: 'c', text: t('il y a', 'il y a', 'il y a'), correct: false },
        { id: 'd', text: t('dans', 'dans', 'dans'), correct: false },
      ],
    },
    {
      id: 'a2re3',
      kind: 'single',
      points: 1,
      prompt: t('Quelle phrase est correcte ?', 'Which sentence is correct?', '哪句正确？'),
      explanation: t(
        'Toutes les expressions de quantité sont suivies de **de** seul : beaucoup de gens, un kilo de tomates, peu de temps. « Beaucoup des » n’est possible que devant un groupe déjà déterminé (« beaucoup des gens que j’ai vus »).',
        'All quantity expressions are followed by **de** alone: beaucoup de gens, un kilo de tomates, peu de temps. “Beaucoup des” is only possible before an already determined group (“beaucoup des gens que j’ai vus”).',
        '所有数量表达后只接 **de**：beaucoup de gens、un kilo de tomates、peu de temps。“Beaucoup des” 仅可用于已限定的群体之前（“beaucoup des gens que j’ai vus”）。',
      ),
      answers: [
        { id: 'a', text: t('Il y a beaucoup de gens ici.', 'Il y a beaucoup de gens ici.', 'Il y a beaucoup de gens ici.'), correct: true },
        { id: 'b', text: t('Il y a beaucoup des gens ici.', 'Il y a beaucoup des gens ici.', 'Il y a beaucoup des gens ici.'), correct: false },
        { id: 'c', text: t('Il y a beaucoup les gens ici.', 'Il y a beaucoup les gens ici.', 'Il y a beaucoup les gens ici.'), correct: false },
        { id: 'd', text: t('Il y a beaucoup gens ici.', 'Il y a beaucoup gens ici.', 'Il y a beaucoup gens ici.'), correct: false },
      ],
    },
    {
      id: 'a2re4',
      kind: 'single',
      points: 1,
      prompt: t('« Vous avez des enfants ? » Quelle réponse est correcte ?', '“Vous avez des enfants ?” Which answer is correct?', '“Vous avez des enfants ?” 哪个回答正确？'),
      explanation: t(
        'Le pronom **en** remplace le groupe introduit par « des » et se place avant le verbe ; lorsqu’une quantité est précisée, on la répète à la fin : « j’en ai deux ».',
        'The pronoun **en** replaces the group introduced by “des” and goes before the verb; when a quantity is specified, it is repeated at the end: “j’en ai deux”.',
        '代词 **en** 取代由 “des” 引导的成分，置于动词之前；若指明数量，则在句末重复：“j’en ai deux”。',
      ),
      answers: [
        { id: 'a', text: t('Oui, j’en ai deux.', 'Oui, j’en ai deux.', 'Oui, j’en ai deux.'), correct: true },
        { id: 'b', text: t('Oui, j’ai deux.', 'Oui, j’ai deux.', 'Oui, j’ai deux.'), correct: false },
        { id: 'c', text: t('Oui, j’y ai deux.', 'Oui, j’y ai deux.', 'Oui, j’y ai deux.'), correct: false },
        { id: 'd', text: t('Oui, j’ai en deux.', 'Oui, j’ai en deux.', 'Oui, j’ai en deux.'), correct: false },
      ],
    },
    {
      id: 'a2re5',
      kind: 'multiple',
      points: 2,
      prompt: t('Dans quelles phrases « y » est-il correctement employé ?', 'In which sentences is “y” correctly used?', '“y” 在哪些句子中使用正确？'),
      explanation: t(
        '« Y » remplace un complément de lieu et se place **avant** le verbe conjugué, ou avant l’infinitif dont il dépend. Il ne peut jamais terminer une phrase ni suivre le verbe.',
        '“Y” replaces a place complement and goes **before** the conjugated verb, or before the infinitive it depends on. It can never end a sentence or follow the verb.',
        '“Y” 取代地点补语，置于变位动词**之前**，或所依附的不定式之前。它绝不能位于句末，也不能跟在动词之后。',
      ),
      answers: [
        { id: 'a', text: t('J’y vais demain.', 'J’y vais demain.', 'J’y vais demain.'), correct: true },
        { id: 'b', text: t('Je vais y aller.', 'Je vais y aller.', 'Je vais y aller.'), correct: true },
        { id: 'c', text: t('Je vais y.', 'Je vais y.', 'Je vais y.'), correct: false },
        { id: 'd', text: t('Je y vais.', 'Je y vais.', 'Je y vais.'), correct: false },
      ],
    },
    {
      id: 'a2re6',
      kind: 'single',
      points: 1,
      prompt: t('« Le train part … dix minutes. » Quel mot ?', '“Le train part … dix minutes.” Which word?', '“Le train part … dix minutes.” 该用哪个词？'),
      explanation: t(
        '**Dans** situe un moment précis à venir : le train part dans dix minutes. « Il y a » situerait ce moment dans le passé, « pendant » indiquerait une durée complète.',
        '**Dans** places a precise moment in the future: the train leaves in ten minutes. “Il y a” would place it in the past, and “pendant” would indicate a complete duration.',
        '**Dans** 指向将来的某个具体时刻：火车十分钟后开。“Il y a” 指向过去，“pendant” 表示完整时段。',
      ),
      answers: [
        { id: 'a', text: t('dans', 'dans', 'dans'), correct: true },
        { id: 'b', text: t('il y a', 'il y a', 'il y a'), correct: false },
        { id: 'c', text: t('pendant', 'pendant', 'pendant'), correct: false },
        { id: 'd', text: t('depuis', 'depuis', 'depuis'), correct: false },
      ],
    },
  ],
};

const a2Decrire: Quiz = {
  id: 'qz_a2_decrire',
  title: t('Quiz — Décrire et comparer', 'Quiz — Describing and comparing', '测验 — 描写与比较'),
  description: t(
    'Place de l’adjectif, comparatif, superlatif et expression de l’opinion.',
    'Adjective position, comparative, superlative and expressing opinion.',
    '形容词位置、比较级、最高级与观点表达。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'a2de1',
      kind: 'single',
      points: 1,
      prompt: t('Où se place normalement l’adjectif de couleur ?', 'Where does a colour adjective normally go?', '颜色形容词通常放在哪里？'),
      explanation: t(
        'Les adjectifs de couleur, de forme, de nationalité et de matière se placent **après** le nom : une voiture rouge, une table ronde, un ami chinois.',
        'Adjectives of colour, shape, nationality and material go **after** the noun: une voiture rouge, une table ronde, un ami chinois.',
        '表示颜色、形状、国籍和材质的形容词置于名词**之后**：une voiture rouge、une table ronde、un ami chinois。',
      ),
      answers: [
        { id: 'a', text: t('Après le nom', 'After the noun', '名词之后'), correct: true },
        { id: 'b', text: t('Avant le nom', 'Before the noun', '名词之前'), correct: false },
        { id: 'c', text: t('Avant ou après, indifféremment', 'Either side, it makes no difference', '前后皆可，没有区别'), correct: false },
        { id: 'd', text: t('Toujours en fin de phrase', 'Always at the end of the sentence', '总是位于句末'), correct: false },
      ],
    },
    {
      id: 'a2de2',
      kind: 'single',
      points: 1,
      prompt: t('Que signifie « mon ancien professeur » ?', 'What does “mon ancien professeur” mean?', '“mon ancien professeur” 是什么意思？'),
      explanation: t(
        'Placé **avant** le nom, « ancien » signifie « d’avant, précédent ». Placé après, il signifie « très vieux » : un livre ancien. La place change le sens.',
        'Placed **before** the noun, “ancien” means “former, previous”. Placed after, it means “very old”: un livre ancien. Position changes the meaning.',
        '置于名词**之前**，“ancien” 意为“以前的、前任的”。置于其后则意为“非常古老的”：un livre ancien。位置改变词义。',
      ),
      answers: [
        { id: 'a', text: t('Le professeur que j’avais avant', 'The teacher I had before', '我以前的老师'), correct: true },
        { id: 'b', text: t('Un professeur très âgé', 'A very old teacher', '一位年纪很大的老师'), correct: false },
        { id: 'c', text: t('Un professeur célèbre', 'A famous teacher', '一位著名的老师'), correct: false },
        { id: 'd', text: t('Un professeur d’histoire ancienne', 'A teacher of ancient history', '一位教古代史的老师'), correct: false },
      ],
    },
    {
      id: 'a2de3',
      kind: 'single',
      points: 1,
      prompt: t('Complétez : « Ce gâteau est … que l’autre. »', 'Complete: “Ce gâteau est … que l’autre.”', '填空：“Ce gâteau est … que l’autre.”'),
      explanation: t(
        'Le comparatif de supériorité de **bon** est **meilleur** ; « plus bon » n’existe pas. Attention à ne pas confondre avec « mieux », qui est le comparatif de l’adverbe « bien ».',
        'The comparative of superiority of **bon** is **meilleur**; “plus bon” does not exist. Take care not to confuse it with “mieux”, the comparative of the adverb “bien”.',
        '**Bon** 的较高级是 **meilleur**；“plus bon” 不存在。注意不要与副词 “bien” 的比较级 “mieux” 混淆。',
      ),
      answers: [
        { id: 'a', text: t('meilleur', 'meilleur', 'meilleur'), correct: true },
        { id: 'b', text: t('plus bon', 'plus bon', 'plus bon'), correct: false },
        { id: 'c', text: t('mieux', 'mieux', 'mieux'), correct: false },
        { id: 'd', text: t('plus mieux', 'plus mieux', 'plus mieux'), correct: false },
      ],
    },
    {
      id: 'a2de4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles comparaisons sont correctement construites ?', 'Which comparisons are correctly built?', '哪些比较结构构造正确？'),
      explanation: t(
        'Devant un **nom**, on emploie « plus de » ; après un **verbe**, « plus » seul. Avec un adjectif on utilise « plus… que ». « Plus que de livres » et « travaille plus de que moi » mélangent ces constructions.',
        'Before a **noun** you use “plus de”; after a **verb**, “plus” alone. With an adjective you use “plus… que”. “Plus que de livres” and “travaille plus de que moi” mix these constructions up.',
        '名词前用 “plus de”；动词后只用 “plus”。与形容词搭配用 “plus… que”。“Plus que de livres” 和 “travaille plus de que moi” 把这些结构混在了一起。',
      ),
      answers: [
        { id: 'a', text: t('J’ai plus de livres que toi.', 'J’ai plus de livres que toi.', 'J’ai plus de livres que toi.'), correct: true },
        { id: 'b', text: t('Il travaille plus que moi.', 'Il travaille plus que moi.', 'Il travaille plus que moi.'), correct: true },
        { id: 'c', text: t('J’ai plus que de livres toi.', 'J’ai plus que de livres toi.', 'J’ai plus que de livres toi.'), correct: false },
        { id: 'd', text: t('Il travaille plus de que moi.', 'Il travaille plus de que moi.', 'Il travaille plus de que moi.'), correct: false },
      ],
    },
    {
      id: 'a2de5',
      kind: 'single',
      points: 1,
      prompt: t('Quel connecteur exprime la conséquence ?', 'Which connector expresses consequence?', '哪个连接词表示结果？'),
      explanation: t(
        '**Donc** introduit la conséquence : « il pleut, donc on reste ». « Parce que » introduit la cause, « mais » l’opposition, « de plus » l’addition.',
        '**Donc** introduces consequence: “il pleut, donc on reste”. “Parce que” introduces cause, “mais” opposition, “de plus” addition.',
        '**Donc** 引出结果：“il pleut, donc on reste”。“Parce que” 引出原因，“mais” 表转折，“de plus” 表递进。',
      ),
      answers: [
        { id: 'a', text: t('donc', 'donc', 'donc'), correct: true },
        { id: 'b', text: t('parce que', 'parce que', 'parce que'), correct: false },
        { id: 'c', text: t('mais', 'mais', 'mais'), correct: false },
        { id: 'd', text: t('de plus', 'de plus', 'de plus'), correct: false },
      ],
    },
    {
      id: 'a2de6',
      kind: 'single',
      points: 1,
      prompt: t('Quel enchaînement correspond à un avis bien construit au niveau A2 ?', 'Which sequence matches a well-built opinion at A2 level?', '哪个顺序符合 A2 水平结构良好的观点表达？'),
      explanation: t(
        'Un avis A2 réussi suit trois temps : on annonce (« à mon avis »), on justifie (« parce que »), on nuance (« c’est vrai que… mais », « ça dépend de »). C’est exactement ce que valorisent les examinateurs.',
        'A successful A2 opinion follows three steps: state (“à mon avis”), justify (“parce que”), qualify (“c’est vrai que… mais”, “ça dépend de”). This is precisely what examiners reward.',
        '成功的 A2 观点分三步：提出（“à mon avis”）、论证（“parce que”）、补充分寸（“c’est vrai que… mais”“ça dépend de”）。这正是考官所看重的。',
      ),
      answers: [
        { id: 'a', text: t('Annoncer, justifier, nuancer', 'State, justify, qualify', '提出、论证、补充分寸'), correct: true },
        { id: 'b', text: t('Nuancer, annoncer, conclure', 'Qualify, state, conclude', '补充分寸、提出、总结'), correct: false },
        { id: 'c', text: t('Justifier, annoncer, répéter', 'Justify, state, repeat', '论证、提出、重复'), correct: false },
        { id: 'd', text: t('Annoncer seulement, sans justifier', 'State only, without justifying', '只提出，不论证'), correct: false },
      ],
    },
  ],
};

const b2Nuance: Quiz = {
  id: 'qz_b2_nuance',
  title: t('Quiz — Nuancer sa pensée', 'Quiz — Shading your thinking', '测验 — 让表达更有层次'),
  description: t(
    'Subjonctif, système hypothétique, conditionnel et connecteurs de concession.',
    'Subjunctive, hypothetical system, conditional and concession connectors.',
    '虚拟式、假设体系、条件式与让步连接词。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'b2nu1',
      kind: 'single',
      points: 1,
      prompt: t('Quelle phrase exige le subjonctif ?', 'Which sentence requires the subjunctive?', '哪句要求使用虚拟式？'),
      explanation: t(
        '« Il faut que » exprime la nécessité et impose le subjonctif : « il faut qu’il vienne ». Les verbes de certitude et « espérer » se construisent avec l’indicatif.',
        '“Il faut que” expresses necessity and requires the subjunctive: “il faut qu’il vienne”. Verbs of certainty and “espérer” take the indicative.',
        '“Il faut que” 表示必要性，要求虚拟式：“il faut qu’il vienne”。表确信的动词以及 “espérer” 则接直陈式。',
      ),
      answers: [
        { id: 'a', text: t('Il faut qu’il … tôt.', 'Il faut qu’il … tôt.', 'Il faut qu’il … tôt.'), correct: true },
        { id: 'b', text: t('J’espère qu’il … tôt.', 'J’espère qu’il … tôt.', 'J’espère qu’il … tôt.'), correct: false },
        { id: 'c', text: t('Je sais qu’il … tôt.', 'Je sais qu’il … tôt.', 'Je sais qu’il … tôt.'), correct: false },
        { id: 'd', text: t('Il est certain qu’il … tôt.', 'Il est certain qu’il … tôt.', 'Il est certain qu’il … tôt.'), correct: false },
      ],
    },
    {
      id: 'b2nu2',
      kind: 'single',
      points: 1,
      prompt: t('Complétez : « Si j’avais le temps, je … . »', 'Complete: “Si j’avais le temps, je … .”', '填空：“Si j’avais le temps, je … .”'),
      explanation: t(
        'Après « si + imparfait », la principale se met au **conditionnel présent** : « si j’avais le temps, je viendrais ». On n’emploie jamais le conditionnel directement après « si ».',
        'After “si + imperfect”, the main clause takes the **present conditional**: “si j’avais le temps, je viendrais”. A conditional is never used directly after “si”.',
        '“si + 未完成过去时”之后，主句用**条件式现在时**：“si j’avais le temps, je viendrais”。“si” 之后绝不直接用条件式。',
      ),
      answers: [
        { id: 'a', text: t('viendrais', 'viendrais', 'viendrais'), correct: true },
        { id: 'b', text: t('viendrai', 'viendrai', 'viendrai'), correct: false },
        { id: 'c', text: t('venais', 'venais', 'venais'), correct: false },
        { id: 'd', text: t('serais venu', 'serais venu', 'serais venu'), correct: false },
      ],
    },
    {
      id: 'b2nu3',
      kind: 'single',
      points: 1,
      prompt: t('Quelle phrase contient une faute ?', 'Which sentence contains a mistake?', '哪句有错误？'),
      explanation: t(
        'Le conditionnel est impossible après un « si » d’hypothèse : il faut « si j’avais su ». C’est la faute la plus repérable du français écrit.',
        'A conditional is impossible after a hypothetical “si”: it must be “si j’avais su”. This is the most conspicuous mistake in written French.',
        '表假设的 “si” 之后不能用条件式：应写 “si j’avais su”。这是法语书面表达中最显眼的错误。',
      ),
      answers: [
        { id: 'a', text: t('Si j’aurais su, je ne serais pas venu.', 'Si j’aurais su, je ne serais pas venu.', 'Si j’aurais su, je ne serais pas venu.'), correct: true },
        { id: 'b', text: t('S’il pleut, je prendrai un parapluie.', 'S’il pleut, je prendrai un parapluie.', 'S’il pleut, je prendrai un parapluie.'), correct: false },
        { id: 'c', text: t('Si j’étais riche, je voyagerais.', 'Si j’étais riche, je voyagerais.', 'Si j’étais riche, je voyagerais.'), correct: false },
        { id: 'd', text: t('Si tu étais venu, on aurait dîné ensemble.', 'Si tu étais venu, on aurait dîné ensemble.', 'Si tu étais venu, on aurait dîné ensemble.'), correct: false },
      ],
    },
    {
      id: 'b2nu4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles conjonctions sont suivies du subjonctif ?', 'Which conjunctions are followed by the subjunctive?', '哪些连词后接虚拟式？'),
      explanation: t(
        'Bien que, pour que et avant que appellent le subjonctif. « Après que » demande en principe l’indicatif, puisque le fait est accompli — même si l’usage oral tend à l’aligner sur « avant que ».',
        'Bien que, pour que and avant que call for the subjunctive. “Après que” in principle requires the indicative, since the event has taken place — even though spoken usage tends to align it with “avant que”.',
        'Bien que、pour que 和 avant que 后接虚拟式。“Après que” 原则上要求直陈式，因为事件已经发生——尽管口语中常被类推为与 “avant que” 相同。',
      ),
      answers: [
        { id: 'a', text: t('bien que', 'bien que', 'bien que'), correct: true },
        { id: 'b', text: t('pour que', 'pour que', 'pour que'), correct: true },
        { id: 'c', text: t('avant que', 'avant que', 'avant que'), correct: true },
        { id: 'd', text: t('après que', 'après que', 'après que'), correct: false },
      ],
    },
    {
      id: 'b2nu5',
      kind: 'single',
      points: 1,
      prompt: t('Quel est le rôle de « or » dans un raisonnement ?', 'What is the role of “or” in an argument?', '“or” 在论证中起什么作用？'),
      explanation: t(
        '**Or** introduit le fait qui fait basculer le raisonnement : « Tous prévoyaient une baisse. Or les chiffres ont augmenté. » Il ne propose pas d’alternative, contrairement à « ou ».',
        '**Or** introduces the fact that tips the reasoning over: “Tous prévoyaient une baisse. Or les chiffres ont augmenté.” It does not offer an alternative, unlike “ou”.',
        '**Or** 引出扭转推理走向的事实：“Tous prévoyaient une baisse. Or les chiffres ont augmenté.” 它不像 “ou” 那样提供选择。',
      ),
      answers: [
        { id: 'a', text: t('Il introduit un fait qui renverse ce qui précède.', 'It introduces a fact that overturns what precedes.', '引出扭转前文的事实。'), correct: true },
        { id: 'b', text: t('Il propose une alternative, comme « ou ».', 'It offers an alternative, like “ou”.', '像 “ou” 一样提供选择。'), correct: false },
        { id: 'c', text: t('Il exprime la conséquence, comme « donc ».', 'It expresses consequence, like “donc”.', '像 “donc” 一样表示结果。'), correct: false },
        { id: 'd', text: t('Il ajoute un argument, comme « de plus ».', 'It adds an argument, like “de plus”.', '像 “de plus” 一样追加论据。'), correct: false },
      ],
    },
    {
      id: 'b2nu6',
      kind: 'single',
      points: 1,
      prompt: t('Comment éviter le subjonctif quand les deux propositions ont le même sujet ?', 'How do you avoid the subjunctive when both clauses share a subject?', '当主从句主语相同时，如何避免虚拟式？'),
      explanation: t(
        'On remplace la subordonnée par un infinitif : « je veux partir » plutôt que « je veux que je parte », « avant de partir » plutôt que « avant que je parte ». C’est plus court et toujours correct.',
        'You replace the subordinate clause with an infinitive: “je veux partir” rather than “je veux que je parte”, “avant de partir” rather than “avant que je parte”. It is shorter and always correct.',
        '用不定式取代从句：说 “je veux partir” 而非 “je veux que je parte”，说 “avant de partir” 而非 “avant que je parte”。更简洁，且永远正确。',
      ),
      answers: [
        { id: 'a', text: t('On emploie un infinitif à la place de la subordonnée.', 'You use an infinitive in place of the subordinate clause.', '用不定式代替从句。'), correct: true },
        { id: 'b', text: t('On emploie l’indicatif à la place du subjonctif.', 'You use the indicative instead of the subjunctive.', '用直陈式代替虚拟式。'), correct: false },
        { id: 'c', text: t('On supprime la conjonction « que ».', 'You delete the conjunction “que”.', '删去连词 “que”。'), correct: false },
        { id: 'd', text: t('On emploie le conditionnel.', 'You use the conditional.', '改用条件式。'), correct: false },
      ],
    },
  ],
};

const b2Professionnel: Quiz = {
  id: 'qz_b2_professionnel',
  title: t('Quiz — Français professionnel', 'Quiz — French for the workplace', '测验 — 职场法语'),
  description: t(
    'Courriel, réunion, CV, lettre de motivation et entretien.',
    'Emails, meetings, CVs, cover letters and interviews.',
    '邮件、会议、简历、求职信与面试。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'b2pr1',
      kind: 'single',
      points: 1,
      prompt: t('Vous écrivez à un service dont vous ignorez le nom du destinataire. Quelle formule d’appel ?', 'You are writing to a department without knowing the recipient’s name. Which salutation?', '你要写信给某部门但不知收件人姓名，该用哪种称呼？'),
      explanation: t(
        'Quand le destinataire est inconnu, on écrit « Madame, Monsieur, » — les deux formes séparées par une virgule. « Cher Monsieur » suppose une relation établie ; « Bonjour » seul est trop familier à l’écrit formel.',
        'When the recipient is unknown, you write “Madame, Monsieur,” — both forms separated by a comma. “Cher Monsieur” presupposes an established relationship; “Bonjour” on its own is too informal for formal writing.',
        '收件人不明时写 “Madame, Monsieur,”——两种称呼以逗号分隔。“Cher Monsieur” 意味着已有交情；单写 “Bonjour” 在正式书面语中过于随意。',
      ),
      answers: [
        { id: 'a', text: t('Madame, Monsieur,', 'Madame, Monsieur,', 'Madame, Monsieur,'), correct: true },
        { id: 'b', text: t('Cher Monsieur,', 'Cher Monsieur,', 'Cher Monsieur,'), correct: false },
        { id: 'c', text: t('Bonjour,', 'Bonjour,', 'Bonjour,'), correct: false },
        { id: 'd', text: t('Salut,', 'Salut,', 'Salut,'), correct: false },
      ],
    },
    {
      id: 'b2pr2',
      kind: 'single',
      points: 1,
      prompt: t('Quelle formule de politesse convient à la majorité des courriels professionnels ?', 'Which closing suits the majority of professional emails?', '哪种结尾适用于大多数职场邮件？'),
      explanation: t(
        '« Cordialement » est la formule passe-partout du courriel professionnel français. La formule longue « Je vous prie d’agréer… » est réservée aux lettres officielles et aux candidatures.',
        '“Cordialement” is the all-purpose closing of the French professional email. The long formula “Je vous prie d’agréer…” is reserved for official letters and job applications.',
        '“Cordialement” 是法语职场邮件的万能结尾。长套语 “Je vous prie d’agréer…” 仅用于正式信函和求职信。',
      ),
      answers: [
        { id: 'a', text: t('Cordialement,', 'Cordialement,', 'Cordialement,'), correct: true },
        { id: 'b', text: t('Je vous prie d’agréer l’expression de mes salutations distinguées.', 'Je vous prie d’agréer l’expression de mes salutations distinguées.', 'Je vous prie d’agréer l’expression de mes salutations distinguées.'), correct: false },
        { id: 'c', text: t('Meilleures salutations,', 'Meilleures salutations,', 'Meilleures salutations,'), correct: false },
        { id: 'd', text: t('Salutations,', 'Salutations,', 'Salutations,'), correct: false },
      ],
    },
    {
      id: 'b2pr3',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles formules conviennent pour exprimer un désaccord en réunion ?', 'Which formulas are suitable for disagreeing in a meeting?', '哪些句式适合在会议上表达异议？'),
      explanation: t(
        'Le désaccord professionnel français passe par l’atténuation : « je crains de ne pas partager », « permettez-moi d’émettre une réserve ». « Vous vous trompez complètement » est techniquement correct mais professionnellement coûteux.',
        'Professional disagreement in French runs through hedging: “je crains de ne pas partager”, “permettez-moi d’émettre une réserve”. “Vous vous trompez complètement” is technically correct but professionally costly.',
        '法语职场中的异议靠缓和语气：“je crains de ne pas partager”“permettez-moi d’émettre une réserve”。“Vous vous trompez complètement” 语法无误，但职场代价很高。',
      ),
      answers: [
        { id: 'a', text: t('Je crains de ne pas partager cet avis.', 'Je crains de ne pas partager cet avis.', 'Je crains de ne pas partager cet avis.'), correct: true },
        { id: 'b', text: t('Permettez-moi d’émettre une réserve.', 'Permettez-moi d’émettre une réserve.', 'Permettez-moi d’émettre une réserve.'), correct: true },
        { id: 'c', text: t('Je vous rejoins en partie, cependant…', 'Je vous rejoins en partie, cependant…', 'Je vous rejoins en partie, cependant…'), correct: true },
        { id: 'd', text: t('Vous vous trompez complètement.', 'Vous vous trompez complètement.', 'Vous vous trompez complètement.'), correct: false },
      ],
    },
    {
      id: 'b2pr4',
      kind: 'single',
      points: 1,
      prompt: t('Quelle longueur attend-on d’un CV français avec cinq ans d’expérience ?', 'How long should a French CV be with five years of experience?', '有五年工作经验的法国简历应有多长？'),
      explanation: t(
        'Le CV français tient sur **une page** jusqu’à une dizaine d’années d’expérience. Il ne comporte plus ni photo obligatoire, ni date de naissance, ni situation familiale.',
        'A French CV fits on **one page** for up to about ten years of experience. It no longer includes a compulsory photo, date of birth or family situation.',
        '十年以内经验的法国简历应控制在**一页**。不再包含强制照片、出生日期或家庭状况。',
      ),
      answers: [
        { id: 'a', text: t('Une page', 'One page', '一页'), correct: true },
        { id: 'b', text: t('Deux pages minimum', 'Two pages minimum', '至少两页'), correct: false },
        { id: 'c', text: t('Trois pages', 'Three pages', '三页'), correct: false },
        { id: 'd', text: t('Aucune limite', 'No limit', '没有限制'), correct: false },
      ],
    },
    {
      id: 'b2pr5',
      kind: 'single',
      points: 1,
      prompt: t('Quel plan structure une lettre de motivation efficace ?', 'Which plan structures an effective cover letter?', '有效的求职信采用怎样的结构？'),
      explanation: t(
        'Le plan « vous / moi / nous » commence par l’entreprise, enchaîne sur deux ou trois réalisations chiffrées, et conclut sur ce que la rencontre produirait. Commencer par soi produit une lettre interchangeable.',
        'The “you / me / us” plan starts with the company, moves on to two or three quantified achievements, and concludes with what the match would produce. Starting with yourself produces an interchangeable letter.',
        '“贵方 / 本人 / 双方”结构：先谈公司，再列举两三项可量化的成绩，最后谈双方结合能带来什么。以自己开头会写出千篇一律的信。',
      ),
      answers: [
        { id: 'a', text: t('Vous, moi, nous', 'You, me, us', '贵方、本人、双方'), correct: true },
        { id: 'b', text: t('Moi, moi, vous', 'Me, me, you', '本人、本人、贵方'), correct: false },
        { id: 'c', text: t('Un résumé du CV en trois paragraphes', 'A three-paragraph summary of the CV', '简历的三段式摘要'), correct: false },
        { id: 'd', text: t('Une liste de vos qualités personnelles', 'A list of your personal qualities', '个人品质清单'), correct: false },
      ],
    },
    {
      id: 'b2pr6',
      kind: 'single',
      points: 1,
      prompt: t('En entretien d’embauche, tutoie-t-on le recruteur ?', 'In a job interview, do you use “tu” with the recruiter?', '求职面试中可以对招聘方用 “tu” 吗？'),
      explanation: t(
        'On vouvoie systématiquement en entretien, même dans une entreprise où le tutoiement est la norme au quotidien. Si le recruteur propose le tutoiement, on le suit ; on ne le propose jamais soi-même.',
        'You always use “vous” in an interview, even in a company where “tu” is the daily norm. If the recruiter offers “tu”, follow their lead; never propose it yourself.',
        '面试中一律用 “vous”，即使公司日常以 “tu” 相称。若招聘方提出用 “tu”，可以跟随；但绝不由你先提。',
      ),
      answers: [
        { id: 'a', text: t('Non, on vouvoie, sauf si le recruteur propose le tutoiement.', 'No, you use “vous”, unless the recruiter offers “tu”.', '不可，应用 “vous”，除非招聘方主动提出用 “tu”。'), correct: true },
        { id: 'b', text: t('Oui, c’est la norme dans les entreprises modernes.', 'Yes, it is the norm in modern companies.', '可以，这是现代企业的常规。'), correct: false },
        { id: 'c', text: t('Cela dépend de l’âge du recruteur.', 'It depends on the recruiter’s age.', '取决于招聘方的年龄。'), correct: false },
        { id: 'd', text: t('Oui, si l’entreprise est une jeune pousse.', 'Yes, if the company is a start-up.', '可以，如果公司是初创企业。'), correct: false },
      ],
    },
  ],
};

const c1Academique: Quiz = {
  id: 'qz_c1_academique',
  title: t('Quiz — Écrire à l’université', 'Quiz — Writing at university', '测验 — 大学写作'),
  description: t(
    'Dissertation, synthèse de documents, reformulation et style académique.',
    'Dissertation, synthesis of documents, reformulation and academic style.',
    '论说文、材料综述、转述与学术文体。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'c1ac1',
      kind: 'single',
      points: 1,
      prompt: t('Qu’est-ce qui distingue une dissertation d’un essai d’opinion ?', 'What distinguishes a dissertation from an opinion essay?', '论说文与观点随笔的区别是什么？'),
      explanation: t(
        'La dissertation met en scène un **problème** contenu dans le sujet ; elle l’expose, l’explore et le résout partiellement. Un devoir qui répond « oui, et voici pourquoi » est jugé hors sujet, même bien écrit.',
        'The dissertation stages a **problem** contained in the topic; it exposes, explores and partly resolves it. A paper answering “yes, and here is why” is judged off-topic, however well written.',
        '论说文呈现题目中蕴含的**问题**：揭示它、展开它、部分地化解它。若只回答“是的，理由如下”，即便文笔出色也算偏题。',
      ),
      answers: [
        { id: 'a', text: t('Elle construit un problème au lieu d’affirmer une position.', 'It builds a problem instead of asserting a position.', '它构建问题，而非陈述立场。'), correct: true },
        { id: 'b', text: t('Elle est plus longue.', 'It is longer.', '它篇幅更长。'), correct: false },
        { id: 'c', text: t('Elle interdit les exemples.', 'It forbids examples.', '它禁止举例。'), correct: false },
        { id: 'd', text: t('Elle se rédige au passé simple.', 'It is written in the passé simple.', '它使用简单过去时写作。'), correct: false },
      ],
    },
    {
      id: 'c1ac2',
      kind: 'single',
      points: 1,
      prompt: t('Que doit produire la troisième partie d’un plan dialectique ?', 'What should the third part of a dialectical outline produce?', '正反合结构的第三部分应产生什么？'),
      explanation: t(
        'Le dépassement déplace la question : il montre que l’opposition initiale reposait sur un présupposé qu’on peut abandonner. Dire « les deux thèses ont du bon » n’est pas un dépassement, c’est un compromis tiède.',
        'The synthesis shifts the question: it shows that the initial opposition rested on a presupposition that can be dropped. Saying “both theses have merit” is not a synthesis, it is a lukewarm compromise.',
        '“合”移动了问题本身：表明最初的对立建立在一个可以放弃的预设之上。说“两种观点都有道理”不是超越，而是温吞的折中。',
      ),
      answers: [
        { id: 'a', text: t('Un déplacement de la question posée', 'A shift in the question asked', '对所提问题的移动'), correct: true },
        { id: 'b', text: t('Un compromis entre les deux premières parties', 'A compromise between the first two parts', '前两部分之间的折中'), correct: false },
        { id: 'c', text: t('Un résumé des deux premières parties', 'A summary of the first two parts', '前两部分的总结'), correct: false },
        { id: 'd', text: t('Une opinion personnelle enfin exprimée', 'A personal opinion finally expressed', '终于说出的个人观点'), correct: false },
      ],
    },
    {
      id: 'c1ac3',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles règles régissent la synthèse de documents ?', 'Which rules govern the synthesis of documents?', '材料综述受哪些规则约束？'),
      explanation: t(
        'La synthèse interdit l’opinion personnelle et les citations longues : tout doit être reformulé et attribué. En revanche, elle n’impose aucun ordre chronologique des documents et n’interdit pas de signaler des divergences — au contraire.',
        'A synthesis forbids personal opinion and long quotations: everything must be reformulated and attributed. It imposes no chronological order on the documents, however, and does not forbid pointing out divergences — quite the opposite.',
        '综述禁止个人观点和长篇引用：一切都必须转述并注明出处。但它并不要求材料按时间排序，也不禁止指出分歧——恰恰相反。',
      ),
      answers: [
        { id: 'a', text: t('Aucune opinion personnelle', 'No personal opinion', '不掺入个人观点'), correct: true },
        { id: 'b', text: t('Reformuler au lieu de citer longuement', 'Reformulate instead of quoting at length', '转述而非长篇引用'), correct: true },
        { id: 'c', text: t('Attribuer chaque idée à son document', 'Attribute each idea to its document', '每个观点都标明出处'), correct: true },
        { id: 'd', text: t('Traiter les documents dans l’ordre chronologique', 'Treat the documents in chronological order', '按时间顺序处理材料'), correct: false },
      ],
    },
    {
      id: 'c1ac4',
      kind: 'single',
      points: 1,
      prompt: t('« Les prix ont fortement augmenté » → « La forte hausse des prix… ». De quelle technique s’agit-il ?', '“Les prix ont fortement augmenté” → “La forte hausse des prix…”. Which technique is this?', '“Les prix ont fortement augmenté” → “La forte hausse des prix…” 这是什么技巧？'),
      explanation: t(
        'La **nominalisation** transforme un verbe en nom et compacte la phrase. C’est l’outil central de la reformulation, à distinguer de la simple substitution de synonymes, qui reste de la paraphrase.',
        '**Nominalisation** turns a verb into a noun and compacts the sentence. It is the central tool of reformulation, distinct from mere synonym substitution, which remains paraphrase.',
        '**名词化**把动词变为名词，压缩句子。这是转述的核心工具，与单纯替换同义词（仍属换词复述）不同。',
      ),
      answers: [
        { id: 'a', text: t('La nominalisation', 'Nominalisation', '名词化'), correct: true },
        { id: 'b', text: t('La paraphrase', 'Paraphrase', '换词复述'), correct: false },
        { id: 'c', text: t('La citation indirecte', 'Indirect quotation', '间接引用'), correct: false },
        { id: 'd', text: t('La montée en généralité', 'Rising in generality', '上升到一般层面'), correct: false },
      ],
    },
    {
      id: 'c1ac5',
      kind: 'single',
      points: 1,
      prompt: t('Comment remplacer le « je » dans un écrit académique français ?', 'How do you replace “je” in French academic writing?', '法语学术写作中如何替代 “je”？'),
      explanation: t(
        'On déplace la subjectivité vers des constructions impersonnelles : le « on » d’analyse, le sujet inanimé (« cette étude montre »), la tournure impersonnelle (« il apparaît que ») ou le passif. L’auteur reste présent par ses choix d’analyse.',
        'You shift subjectivity into impersonal constructions: the analytical “on”, an inanimate subject (“cette étude montre”), an impersonal turn (“il apparaît que”) or the passive. The author remains present through analytical choices.',
        '把主观性转移到无人称结构中：分析性的 “on”、无生命主语（“cette étude montre”）、无人称句式（“il apparaît que”）或被动语态。作者通过分析选择而在场。',
      ),
      answers: [
        { id: 'a', text: t('Par le « on » d’analyse, un sujet inanimé, une tournure impersonnelle ou le passif', 'By the analytical “on”, an inanimate subject, an impersonal turn or the passive', '用分析性的 “on”、无生命主语、无人称句式或被动语态'), correct: true },
        { id: 'b', text: t('Par « nous » exclusivement', 'By “nous” exclusively', '一律用 “nous”'), correct: false },
        { id: 'c', text: t('En supprimant tout sujet grammatical', 'By deleting every grammatical subject', '删去所有语法主语'), correct: false },
        { id: 'd', text: t('En écrivant à la deuxième personne', 'By writing in the second person', '改用第二人称'), correct: false },
      ],
    },
    {
      id: 'c1ac6',
      kind: 'single',
      points: 1,
      prompt: t('Quel est le risque d’une modalisation systématique ?', 'What is the risk of systematic hedging?', '处处使用限定语有什么风险？'),
      explanation: t(
        'Un texte où chaque phrase est atténuée ne dit plus rien. La règle : moduler les **interprétations**, affirmer les **faits**. Un correcteur sanctionne autant l’assertion brutale que l’effacement systématique.',
        'A text in which every sentence is hedged says nothing. The rule: hedge **interpretations**, assert **facts**. A marker penalises blunt assertion and systematic self-effacement alike.',
        '每句话都加限定语的文章等于什么也没说。规则是：对**解释**加限定，对**事实**下断言。阅卷人对生硬断言与一味回避同样扣分。',
      ),
      answers: [
        { id: 'a', text: t('Le texte n’affirme plus rien et perd sa portée.', 'The text asserts nothing and loses its force.', '文章不再有所主张，失去分量。'), correct: true },
        { id: 'b', text: t('Le texte devient trop court.', 'The text becomes too short.', '文章变得太短。'), correct: false },
        { id: 'c', text: t('Le texte perd sa cohérence grammaticale.', 'The text loses its grammatical coherence.', '文章失去语法连贯性。'), correct: false },
        { id: 'd', text: t('Aucun risque : la prudence est toujours valorisée.', 'No risk: caution is always rewarded.', '没有风险：谨慎总会得到肯定。'), correct: false },
      ],
    },
  ],
};

const c1Oral: Quiz = {
  id: 'qz_c1_oral',
  title: t('Quiz — Le français parlé vite', 'Quiz — Fast spoken French', '测验 — 快速口语'),
  description: t(
    'Réductions de l’oral, registres de langue et implicite culturel.',
    'Spoken reductions, language registers and cultural implicitness.',
    '口语缩减、语言语体与文化默契。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'c1or1',
      kind: 'single',
      points: 1,
      prompt: t('À quoi correspond « Y en a plus » à l’écrit ?', 'What is “Y en a plus” in writing?', '“Y en a plus” 的书面形式是什么？'),
      explanation: t(
        'Trois réductions se cumulent : « il » se réduit à [i] puis disparaît devant « y », et le « ne » de la négation tombe. La forme écrite complète est « Il n’y en a plus ».',
        'Three reductions combine: “il” shrinks to [i] then disappears before “y”, and the negative “ne” drops. The full written form is “Il n’y en a plus”.',
        '三重缩减叠加：“il” 先弱化为 [i]，再在 “y” 前消失，否定词 “ne” 脱落。完整书面形式是 “Il n’y en a plus”。',
      ),
      answers: [
        { id: 'a', text: t('Il n’y en a plus.', 'Il n’y en a plus.', 'Il n’y en a plus.'), correct: true },
        { id: 'b', text: t('Il y en a plusieurs.', 'Il y en a plusieurs.', 'Il y en a plusieurs.'), correct: false },
        { id: 'c', text: t('Y a-t-il encore ?', 'Y a-t-il encore ?', 'Y a-t-il encore ?'), correct: false },
        { id: 'd', text: t('Il en a plus.', 'Il en a plus.', 'Il en a plus.'), correct: false },
      ],
    },
    {
      id: 'c1or2',
      kind: 'single',
      points: 1,
      prompt: t('Un apprenant C1 comprend un journal mais pas une conversation rapide. Pourquoi ?', 'A C1 learner understands a newspaper but not fast conversation. Why?', 'C1 学习者读得懂报纸却听不懂快速对话，为什么？'),
      explanation: t(
        'Il cherche des sons qui n’ont jamais été prononcés : l’oral supprime systématiquement le « ne », des « e », le « l » de « il », la voyelle de « tu ». Ce n’est pas un manque de vocabulaire.',
        'They are looking for sounds that were never uttered: speech systematically deletes “ne”, some “e” sounds, the “l” of “il”, the vowel of “tu”. It is not a vocabulary gap.',
        '他在寻找根本没被发出的音：口语系统性地删去 “ne”、部分 “e”、“il” 的 “l”、“tu” 的元音。这不是词汇不足。',
      ),
      answers: [
        { id: 'a', text: t('L’oral supprime une partie des sons que l’écrit conserve.', 'Speech deletes part of the sounds writing preserves.', '口语删去了书面语保留的一部分音。'), correct: true },
        { id: 'b', text: t('Le vocabulaire de l’oral est beaucoup plus riche.', 'Spoken vocabulary is much richer.', '口语词汇丰富得多。'), correct: false },
        { id: 'c', text: t('La grammaire de l’oral est différente de celle de l’écrit.', 'Spoken grammar is different from written grammar.', '口语语法与书面语法不同。'), correct: false },
        { id: 'd', text: t('Les journaux emploient un français simplifié.', 'Newspapers use simplified French.', '报纸使用简化法语。'), correct: false },
      ],
    },
    {
      id: 'c1or3',
      kind: 'single',
      points: 1,
      prompt: t('Dans quel registre se situe « bouffer » ?', 'Which register does “bouffer” belong to?', '“bouffer” 属于哪种语体？'),
      explanation: t(
        '« Bouffer » est familier. La série complète est : se restaurer (soutenu), manger (courant), bouffer (familier), se goinfrer (très familier). Employer « bouffer » dans un courriel professionnel est une erreur de registre.',
        '“Bouffer” is colloquial. The full series is: se restaurer (formal), manger (standard), bouffer (colloquial), se goinfrer (slang). Using “bouffer” in a professional email is a register mistake.',
        '“Bouffer” 属口语。完整序列为：se restaurer（正式）、manger（通用）、bouffer（口语）、se goinfrer（俚俗）。在职场邮件中用 “bouffer” 属语体错误。',
      ),
      answers: [
        { id: 'a', text: t('Familier', 'Colloquial', '口语'), correct: true },
        { id: 'b', text: t('Courant', 'Standard', '通用'), correct: false },
        { id: 'c', text: t('Soutenu', 'Formal', '正式'), correct: false },
        { id: 'd', text: t('Technique', 'Technical', '专业'), correct: false },
      ],
    },
    {
      id: 'c1or4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quels mots relèvent du verlan ?', 'Which words are verlan?', '哪些词属于倒读语？'),
      explanation: t(
        'Meuf (femme), relou (lourd) et chelou (louche) inversent les syllabes du mot d’origine. « Bagnole » est simplement un mot familier pour « voiture », sans inversion.',
        'Meuf (femme), relou (lourd) and chelou (louche) reverse the syllables of the original word. “Bagnole” is simply a colloquial word for “voiture”, with no reversal.',
        'Meuf（femme）、relou（lourd）、chelou（louche）都颠倒了原词的音节。“Bagnole” 只是 “voiture” 的口语说法，并无音节颠倒。',
      ),
      answers: [
        { id: 'a', text: t('meuf', 'meuf', 'meuf'), correct: true },
        { id: 'b', text: t('relou', 'relou', 'relou'), correct: true },
        { id: 'c', text: t('chelou', 'chelou', 'chelou'), correct: true },
        { id: 'd', text: t('bagnole', 'bagnole', 'bagnole'), correct: false },
      ],
    },
    {
      id: 'c1or5',
      kind: 'single',
      points: 1,
      prompt: t('Que signifie « ce n’est pas mauvais » dit d’un plat ?', 'What does “ce n’est pas mauvais” mean about a dish?', '评价一道菜时说 “ce n’est pas mauvais” 是什么意思？'),
      explanation: t(
        'C’est une **litote** : on dit moins pour signifier plus. « Ce n’est pas mauvais » équivaut à « c’est très bon », comme « il n’est pas bête » signifie « il est brillant ».',
        'This is **litotes**: saying less to mean more. “Ce n’est pas mauvais” amounts to “it is very good”, just as “il n’est pas bête” means “he is brilliant”.',
        '这是**曲言法**：以少言多。“Ce n’est pas mauvais” 相当于“非常好吃”，正如 “il n’est pas bête” 意为“他很聪明”。',
      ),
      answers: [
        { id: 'a', text: t('C’est très bon — c’est une litote.', 'It is very good — this is litotes.', '非常好吃——这是曲言法。'), correct: true },
        { id: 'b', text: t('C’est acceptable sans plus.', 'It is merely acceptable.', '勉强能接受而已。'), correct: false },
        { id: 'c', text: t('C’est mauvais, dit avec ironie.', 'It is bad, said ironically.', '很难吃，说的是反话。'), correct: false },
        { id: 'd', text: t('Le locuteur n’a pas d’avis.', 'The speaker has no opinion.', '说话人没有看法。'), correct: false },
      ],
    },
    {
      id: 'c1or6',
      kind: 'single',
      points: 1,
      prompt: t('En réunion, « il faudrait qu’on en reparle » signifie le plus souvent…', 'In a meeting, “il faudrait qu’on en reparle” most often means…', '会议上说 “il faudrait qu’on en reparle” 通常意味着……'),
      explanation: t(
        'C’est un désaccord poli, différé hors de la réunion. De la même famille : « on verra » (souvent non), « intéressant… » avec une pause (désaccord courtois).',
        'It is a polite disagreement, deferred beyond the meeting. From the same family: “on verra” (usually no), “intéressant…” with a pause (courteous disagreement).',
        '这是礼貌的不同意，把分歧推到会后。同类还有：“on verra”（多半是“不”）、带停顿的 “intéressant…”（客气的异议）。',
      ),
      answers: [
        { id: 'a', text: t('Je ne suis pas d’accord, mais je ne le dirai pas ici.', 'I disagree, but I will not say so here.', '我不同意，但不打算在这里说。'), correct: true },
        { id: 'b', text: t('Le sujet m’enthousiasme et je veux l’approfondir.', 'The subject excites me and I want to go deeper.', '这个话题让我兴奋，我想深入探讨。'), correct: false },
        { id: 'c', text: t('Je n’ai pas compris la proposition.', 'I did not understand the proposal.', '我没听懂这个提议。'), correct: false },
        { id: 'd', text: t('La réunion doit être reportée.', 'The meeting must be postponed.', '会议需要改期。'), correct: false },
      ],
    },
  ],
};

const c2Litterature: Quiz = {
  id: 'qz_c2_litterature',
  title: t('Quiz — Lire la littérature', 'Quiz — Reading literature', '测验 — 阅读文学'),
  description: t(
    'Temps du récit, figures de style et méthode du commentaire composé.',
    'Narrative tenses, figures of style and the method of the commentaire composé.',
    '叙事时态、修辞格与文本细读方法。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'c2li1',
      kind: 'single',
      points: 1,
      prompt: t('Quel temps du récit écrit n’existe pas dans la conversation ?', 'Which written-narrative tense does not exist in conversation?', '哪种书面叙事时态在口语中不存在？'),
      explanation: t(
        'Le passé simple a disparu de l’oral depuis plus d’un siècle mais reste le temps de l’événement dans le récit écrit. Il correspond au passé composé de la conversation.',
        'The passé simple vanished from speech more than a century ago but remains the tense of events in written narrative. It corresponds to the passé composé in conversation.',
        '简单过去时一个多世纪前已退出口语，但仍是书面叙事中表示事件的时态。它对应口语中的复合过去时。',
      ),
      answers: [
        { id: 'a', text: t('Le passé simple', 'The passé simple', '简单过去时'), correct: true },
        { id: 'b', text: t('L’imparfait', 'The imparfait', '未完成过去时'), correct: false },
        { id: 'c', text: t('Le plus-que-parfait', 'The pluperfect', '愈过去时'), correct: false },
        { id: 'd', text: t('Le passé composé', 'The passé composé', '复合过去时'), correct: false },
      ],
    },
    {
      id: 'c2li2',
      kind: 'single',
      points: 1,
      prompt: t('Quelle est la forme de passé simple de « faire » à la troisième personne du pluriel ?', 'What is the passé simple of “faire” in the third person plural?', 'faire 的简单过去时第三人称复数是什么？'),
      explanation: t(
        'Les formes de troisième personne — il fit, ils firent — représentent la grande majorité des occurrences réelles du passé simple, puisque le récit est presque toujours à la troisième personne.',
        'The third-person forms — il fit, ils firent — make up the vast majority of real occurrences of the passé simple, since narrative is nearly always in the third person.',
        '第三人称形式——il fit、ils firent——占简单过去时实际出现的绝大多数，因为叙事几乎总用第三人称。',
      ),
      answers: [
        { id: 'a', text: t('ils firent', 'ils firent', 'ils firent'), correct: true },
        { id: 'b', text: t('ils faisirent', 'ils faisirent', 'ils faisirent'), correct: false },
        { id: 'c', text: t('ils faisaient', 'ils faisaient', 'ils faisaient'), correct: false },
        { id: 'd', text: t('ils ont fait', 'ils ont fait', 'ils ont fait'), correct: false },
      ],
    },
    {
      id: 'c2li3',
      kind: 'single',
      points: 1,
      prompt: t('« Boire un verre » : de quelle figure s’agit-il ?', '“Boire un verre”: which figure is this?', '“Boire un verre” 属于哪种修辞格？'),
      explanation: t(
        'C’est une **métonymie** : le contenant (le verre) désigne le contenu (la boisson). Même procédé dans « lire un Zola » — l’auteur pour l’œuvre.',
        'This is **metonymy**: the container (the glass) stands for the content (the drink). The same device appears in “lire un Zola” — the author for the work.',
        '这是**转喻**：以容器（杯子）代内容（饮料）。“lire un Zola” 同理——以作者代作品。',
      ),
      answers: [
        { id: 'a', text: t('Une métonymie', 'Metonymy', '转喻'), correct: true },
        { id: 'b', text: t('Une métaphore', 'Metaphor', '隐喻'), correct: false },
        { id: 'c', text: t('Un oxymore', 'Oxymoron', '矛盾修辞'), correct: false },
        { id: 'd', text: t('Un chiasme', 'Chiasmus', '交错配列'), correct: false },
      ],
    },
    {
      id: 'c2li4',
      kind: 'single',
      points: 1,
      prompt: t('Que manque-t-il à « On relève une métaphore filée au deuxième paragraphe » ?', 'What is missing from “On relève une métaphore filée au deuxième paragraphe”?', '“On relève une métaphore filée au deuxième paragraphe” 缺了什么？'),
      explanation: t(
        'Le relevé est fait, mais ni l’effet ni le sens ne sont dégagés. Le schéma complet est **procédé → citation → effet → sens** : sans les deux derniers temps, il n’y a pas d’analyse.',
        'The device is identified, but neither its effect nor its meaning is drawn out. The full pattern is **device → quotation → effect → meaning**: without the last two steps there is no analysis.',
        '手法指认了，但既未说明效果也未阐释意义。完整模式是**手法 → 引文 → 效果 → 意义**：缺少后两步就不成其为分析。',
      ),
      answers: [
        { id: 'a', text: t('L’effet produit et le sens qu’il construit', 'The effect produced and the meaning it builds', '所产生的效果及其建构的意义'), correct: true },
        { id: 'b', text: t('Le nom de l’auteur', 'The author’s name', '作者姓名'), correct: false },
        { id: 'c', text: t('La date de publication', 'The date of publication', '出版日期'), correct: false },
        { id: 'd', text: t('Une comparaison avec un autre texte', 'A comparison with another text', '与另一文本的比较'), correct: false },
      ],
    },
    {
      id: 'c2li5',
      kind: 'multiple',
      points: 2,
      prompt: t('Quels plans faut-il éviter dans un commentaire composé ?', 'Which outlines should be avoided in a commentaire composé?', '文本细读中应避免哪些提纲？'),
      explanation: t(
        'Séparer le fond de la forme dissocie ce qui fait sens ensemble ; suivre les paragraphes du texte n’est qu’une paraphrase ; parler de la biographie est hors sujet. Seuls des axes construits à partir du texte sont recevables.',
        'Separating content from form dissociates what makes sense together; following the text’s paragraphs is mere paraphrase; discussing biography is off-topic. Only axes built from the text itself are acceptable.',
        '把内容与形式割裂，会拆散本应共同产生意义的部分；跟随文本段落只是复述；谈论生平属于偏题。只有从文本本身出发构建的轴线才可接受。',
      ),
      answers: [
        { id: 'a', text: t('Le fond puis la forme', 'Content then form', '先内容后形式'), correct: true },
        { id: 'b', text: t('Paragraphe 1, paragraphe 2, paragraphe 3', 'Paragraph 1, paragraph 2, paragraph 3', '第 1 段、第 2 段、第 3 段'), correct: true },
        { id: 'c', text: t('La vie de l’auteur', 'The author’s life', '作者生平'), correct: true },
        { id: 'd', text: t('Des axes construits à partir des relevés', 'Axes built from textual evidence', '从文本证据出发构建的轴线'), correct: false },
      ],
    },
    {
      id: 'c2li6',
      kind: 'single',
      points: 1,
      prompt: t('« Il marchait depuis une heure. Soudain, une porte s’ouvre. » Comment interpréter ce présent ?', '“Il marchait depuis une heure. Soudain, une porte s’ouvre.” How should this present be read?', '“Il marchait depuis une heure. Soudain, une porte s’ouvre.” 这个现在时该如何理解？'),
      explanation: t(
        'C’est un **présent de narration** : il rapproche brusquement la scène du lecteur. Ce n’est jamais une faute de concordance ; un correcteur attend que vous l’identifiiez comme un effet voulu.',
        'This is a **narrative present**: it abruptly brings the scene closer to the reader. It is never a sequence-of-tenses error; an examiner expects you to identify it as a deliberate effect.',
        '这是**叙述现在时**：它把场景骤然推近读者。这绝非时态呼应的错误；阅卷人期待你将其识别为有意为之的效果。',
      ),
      answers: [
        { id: 'a', text: t('Un présent de narration, qui rapproche la scène du lecteur', 'A narrative present, bringing the scene closer to the reader', '叙述现在时，把场景推近读者'), correct: true },
        { id: 'b', text: t('Une faute de concordance des temps', 'A sequence-of-tenses error', '时态呼应的错误'), correct: false },
        { id: 'c', text: t('Une action qui se déroule aujourd’hui', 'An action taking place today', '今天正在发生的动作'), correct: false },
        { id: 'd', text: t('Un présent de vérité générale', 'A gnomic present', '表示普遍真理的现在时'), correct: false },
      ],
    },
  ],
};

const c2Institutions: Quiz = {
  id: 'qz_c2_institutions',
  title: t('Quiz — France et francophonie', 'Quiz — France and the French-speaking world', '测验 — 法国与法语世界'),
  description: t(
    'Institutions de la Ve République, références culturelles et variantes du français.',
    'Institutions of the Fifth Republic, cultural references and varieties of French.',
    '第五共和国制度、文化典故与法语变体。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'c2in1',
      kind: 'single',
      points: 1,
      prompt: t('Que désigne « Matignon » dans la presse française ?', 'What does “Matignon” refer to in the French press?', '法国媒体中的 “Matignon” 指什么？'),
      explanation: t(
        'La presse désigne les institutions par leur adresse : Matignon est la résidence du Premier ministre, l’Élysée celle du président, Bercy le ministère de l’Économie, le Quai d’Orsay les Affaires étrangères.',
        'The press names institutions by their address: Matignon is the prime minister’s residence, the Élysée the president’s, Bercy the Economy ministry, the Quai d’Orsay Foreign Affairs.',
        '媒体以官邸地址指代机构：Matignon 是总理府，l’Élysée 是总统府，Bercy 指经济部，le Quai d’Orsay 指外交部。',
      ),
      answers: [
        { id: 'a', text: t('Le Premier ministre', 'The prime minister', '总理'), correct: true },
        { id: 'b', text: t('Le président de la République', 'The president of the Republic', '共和国总统'), correct: false },
        { id: 'c', text: t('Le ministère des Affaires étrangères', 'The foreign ministry', '外交部'), correct: false },
        { id: 'd', text: t('Le Conseil constitutionnel', 'The Constitutional Council', '宪法委员会'), correct: false },
      ],
    },
    {
      id: 'c2in2',
      kind: 'single',
      points: 1,
      prompt: t('Que permet l’article 49.3 de la Constitution ?', 'What does article 49.3 of the Constitution allow?', '宪法第 49.3 条允许什么？'),
      explanation: t(
        'Il permet au gouvernement de faire adopter un texte **sans vote**, sauf si une motion de censure est adoptée. Le nombre est devenu un mot courant du débat public français.',
        'It allows the government to pass a bill **without a vote**, unless a motion of no confidence is carried. The number has become an everyday word in French public debate.',
        '它允许政府**不经表决**通过法案，除非不信任案获得通过。这个数字已成为法国公共辩论中的日常用词。',
      ),
      answers: [
        { id: 'a', text: t('Adopter un texte sans vote, sauf motion de censure', 'Passing a bill without a vote, barring a no-confidence motion', '不经表决通过法案，除非不信任案获通过'), correct: true },
        { id: 'b', text: t('Dissoudre l’Assemblée nationale', 'Dissolving the National Assembly', '解散国民议会'), correct: false },
        { id: 'c', text: t('Organiser un référendum', 'Calling a referendum', '举行公投'), correct: false },
        { id: 'd', text: t('Réviser la Constitution', 'Revising the Constitution', '修订宪法'), correct: false },
      ],
    },
    {
      id: 'c2in3',
      kind: 'single',
      points: 1,
      prompt: t('À quoi renvoie « l’affaire Dreyfus » dans un texte contemporain ?', 'What does “the Dreyfus affair” evoke in a contemporary text?', '当代文本中提到“德雷福斯事件”意味着什么？'),
      explanation: t(
        'Au-delà de l’erreur judiciaire de 1894, l’allusion signale une **division du pays en deux camps irréconciliables** autour d’une question de principe. C’est ce sens figuré que la presse mobilise.',
        'Beyond the 1894 miscarriage of justice, the allusion signals a **country split into two irreconcilable camps** over a matter of principle. It is this figurative sense the press draws on.',
        '除了 1894 年的冤案本身，这一典故还标示着**国家因原则问题分裂为两个不可调和的阵营**。媒体调用的正是这层引申义。',
      ),
      answers: [
        { id: 'a', text: t('Une société coupée en deux camps irréconciliables', 'A society split into two irreconcilable camps', '社会分裂为两个不可调和的阵营'), correct: true },
        { id: 'b', text: t('Une révolte étudiante', 'A student revolt', '学生运动'), correct: false },
        { id: 'c', text: t('Un renoncement volontaire à des privilèges', 'A voluntary surrender of privileges', '自愿放弃特权'), correct: false },
        { id: 'd', text: t('Une défaite militaire décisive', 'A decisive military defeat', '决定性的军事失败'), correct: false },
      ],
    },
    {
      id: 'c2in4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quels mots signalent un texte venu du Québec ?', 'Which words signal a text from Quebec?', '哪些词表明文本来自魁北克？'),
      explanation: t(
        '« Magasiner », « fin de semaine » et « char » sont des marqueurs québécois nets, liés à une politique active de traduction des anglicismes. « Septante » situerait le texte en Belgique ou en Suisse.',
        '“Magasiner”, “fin de semaine” and “char” are clear Quebec markers, tied to an active policy of translating anglicisms. “Septante” would place the text in Belgium or Switzerland.',
        '“Magasiner”“fin de semaine”“char” 是明确的魁北克标志，与积极推行英语借词本土化的政策有关。“Septante” 则会把文本定位在比利时或瑞士。',
      ),
      answers: [
        { id: 'a', text: t('magasiner', 'magasiner', 'magasiner'), correct: true },
        { id: 'b', text: t('une fin de semaine', 'une fin de semaine', 'une fin de semaine'), correct: true },
        { id: 'c', text: t('un char', 'un char', 'un char'), correct: true },
        { id: 'd', text: t('septante', 'septante', 'septante'), correct: false },
      ],
    },
    {
      id: 'c2in5',
      kind: 'single',
      points: 1,
      prompt: t('« Septante » est-il du mauvais français ?', 'Is “septante” bad French?', '“Septante” 是糟糕的法语吗？'),
      explanation: t(
        'Non : c’est la forme héritée du latin, restée en Belgique et en Suisse là où la France a adopté la numération vicésimale. Juger cette variante fautive confond norme dominante et correction linguistique.',
        'No: it is the form inherited from Latin, retained in Belgium and Switzerland where France adopted vigesimal counting. Calling this variant wrong confuses a dominant norm with linguistic correctness.',
        '不是：它是承自拉丁语的形式，在比利时和瑞士保留下来，而法国改用了二十进位。把这一变体判为错误，是把主导规范与语言正确性混为一谈。',
      ),
      answers: [
        { id: 'a', text: t('Non, c’est une variante normée de Belgique et de Suisse.', 'No, it is a standardised variant from Belgium and Switzerland.', '不是，它是比利时和瑞士的规范变体。'), correct: true },
        { id: 'b', text: t('Oui, la seule forme correcte est « soixante-dix ».', 'Yes, the only correct form is “soixante-dix”.', '是的，唯一正确的形式是 “soixante-dix”。'), correct: false },
        { id: 'c', text: t('Oui, c’est une déformation régionale récente.', 'Yes, it is a recent regional distortion.', '是的，这是晚近的地区性讹变。'), correct: false },
        { id: 'd', text: t('Cela dépend du contexte formel ou informel.', 'It depends on whether the context is formal or informal.', '取决于场合是否正式。'), correct: false },
      ],
    },
    {
      id: 'c2in6',
      kind: 'single',
      points: 1,
      prompt: t('Que garantit la laïcité telle que posée par la loi de 1905 ?', 'What does laïcité, as established by the 1905 law, guarantee?', '1905 年法律确立的世俗性原则保障什么？'),
      explanation: t(
        'La laïcité pose la **neutralité religieuse de l’État** et garantit en même temps la liberté de culte. Elle se distingue de l’athéisme, qui est une position personnelle sur l’existence de Dieu.',
        'Laïcité establishes the **religious neutrality of the state** and at the same time guarantees freedom of worship. It differs from atheism, which is a personal position on the existence of God.',
        '世俗性原则确立**国家的宗教中立**，同时保障宗教信仰自由。它不同于无神论——后者是关于神是否存在的个人立场。',
      ),
      answers: [
        { id: 'a', text: t('La neutralité religieuse de l’État et la liberté de culte', 'The religious neutrality of the state and freedom of worship', '国家的宗教中立与宗教信仰自由'), correct: true },
        { id: 'b', text: t('L’athéisme comme doctrine officielle', 'Atheism as an official doctrine', '以无神论为官方学说'), correct: false },
        { id: 'c', text: t('Le financement des cultes par l’État', 'State funding of religions', '由国家资助各宗教'), correct: false },
        { id: 'd', text: t('L’interdiction de toute pratique religieuse', 'A ban on all religious practice', '禁止一切宗教活动'), correct: false },
      ],
    },
  ],
};

export const quizzes: Readonly<Record<string, Quiz>> = {
  [a1PremiersMots.id]: a1PremiersMots,
  [a1Present.id]: a1Present,
  [a1Nommer.id]: a1Nommer,
  [a2Raconter.id]: a2Raconter,
  [a2Reperes.id]: a2Reperes,
  [a2Decrire.id]: a2Decrire,
  [grammaire.id]: grammaire,
  [conjugaison.id]: conjugaison,
  [delfB1.id]: delfB1,
  [delfB2.id]: delfB2,
  [b2Nuance.id]: b2Nuance,
  [b2Professionnel.id]: b2Professionnel,
  [dalfC1.id]: dalfC1,
  [c1Academique.id]: c1Academique,
  [c1Oral.id]: c1Oral,
  [dalfC2.id]: dalfC2,
  [c2Litterature.id]: c2Litterature,
  [c2Institutions.id]: c2Institutions,
  ...complementQuizzes,
};

export function getQuiz(quizId: string): Quiz | null {
  return quizzes[quizId] ?? null;
}
