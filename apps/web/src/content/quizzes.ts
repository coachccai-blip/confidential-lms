import type { Quiz } from '@lms/core';
import { t } from './tr';

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
        '填空：« Les lettres que j’ai … hier sont parties. »',
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
        '填空：« Voici le dossier … je vous ai parlé. »',
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
        '填空：« Tous les étés, nous … à la mer. »',
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
        '愈过去时：« Quand je suis arrivé, il était déjà parti. »',
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
        '错误。表假设的“si”之后用现在时、未完成过去时或愈过去时，绝不用条件式。« Si j’avais le temps, je viendrais. »',
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
        '转述引语：« Il a dit : “Je viendrai.” » 变为……',
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
        '« J’aurais dû partir plus tôt » 表达什么？',
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
      prompt: t('Que veut dire « Ce n’est pas un franc succès » ?', 'What does “Ce n’est pas un franc succès” mean?', '« Ce n’est pas un franc succès » 是什么意思？'),
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

export const quizzes: Readonly<Record<string, Quiz>> = {
  [grammaire.id]: grammaire,
  [conjugaison.id]: conjugaison,
  [delfB1.id]: delfB1,
  [delfB2.id]: delfB2,
  [dalfC1.id]: dalfC1,
  [dalfC2.id]: dalfC2,
};

export function getQuiz(quizId: string): Quiz | null {
  return quizzes[quizId] ?? null;
}
