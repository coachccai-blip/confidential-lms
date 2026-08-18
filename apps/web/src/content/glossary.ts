import type { GlossaryEntry, LocalizedText } from '@lms/core';

const t = (fr: string, en: string, zh: string): LocalizedText => ({ fr, en, zh });

const NOUN = t('nom masculin', 'masculine noun', '阳性名词');
const NOUN_F = t('nom féminin', 'feminine noun', '阴性名词');
const ADJ = t('adjectif', 'adjective', '形容词');
const LOC = t('locution', 'set phrase', '固定用语');

/**
 * Glossaire des mots difficiles.
 *
 * Chaque entrée est référencée dans les leçons par la syntaxe `[[id|texte]]`
 * et s'ouvre dans une fenêtre affichant les trois langues simultanément :
 * l'apprenant compare la définition française avec sa langue d'appui.
 */
const entries: readonly GlossaryEntry[] = [
  {
    id: 'determinant',
    term: 'déterminant',
    ipa: '/de.tɛʁ.mi.nɑ̃/',
    partOfSpeech: NOUN,
    definition: t(
      'Petit mot placé devant le nom pour en préciser le genre, le nombre et la référence : le, une, ce, mon, plusieurs.',
      'A short word placed before a noun to mark its gender, number and reference: le, une, ce, mon, plusieurs.',
      '置于名词前的小词，用于标示名词的性、数和所指：le、une、ce、mon、plusieurs。',
    ),
    example: {
      fr: 'Ce livre appartient à mon voisin.',
      gloss: t(
        '« Ce » et « mon » sont deux déterminants.',
        '“Ce” and “mon” are two determiners.',
        '“Ce”和“mon”是两个限定词。',
      ),
    },
  },
  {
    id: 'genre',
    term: 'genre',
    partOfSpeech: NOUN,
    definition: t(
      'Catégorie du nom, masculin ou féminin, qui commande l’accord du déterminant et de l’adjectif.',
      'The category of a noun — masculine or feminine — which governs agreement of determiners and adjectives.',
      '名词的性别范畴（阳性或阴性），决定限定词与形容词的性数配合。',
    ),
    example: {
      fr: 'une table basse, un tabouret bas',
      gloss: t(
        'L’adjectif change de forme selon le genre du nom.',
        'The adjective changes form according to the gender of the noun.',
        '形容词的形式随名词的性而变化。',
      ),
    },
  },
  {
    id: 'accord',
    term: 'accord',
    partOfSpeech: NOUN,
    definition: t(
      'Modification de la forme d’un mot (adjectif, participe, verbe) pour s’aligner sur le genre, le nombre ou la personne d’un autre mot.',
      'Changing the form of a word (adjective, participle, verb) so that it matches the gender, number or person of another word.',
      '改变某个词（形容词、分词、动词）的形式，使其与另一个词的性、数或人称一致。',
    ),
    example: {
      fr: 'Les portes sont ouvertes.',
      gloss: t(
        '« ouvertes » s’accorde avec « les portes », féminin pluriel.',
        '“ouvertes” agrees with “les portes”, feminine plural.',
        '“ouvertes”与阴性复数的“les portes”保持一致。',
      ),
    },
  },
  {
    id: 'participe-passe',
    term: 'participe passé',
    partOfSpeech: NOUN,
    definition: t(
      'Forme du verbe utilisée avec un auxiliaire pour construire les temps composés : mangé, fini, pris, venu.',
      'The verb form used with an auxiliary to build compound tenses: mangé, fini, pris, venu.',
      '与助动词一起构成复合时态的动词形式：mangé、fini、pris、venu。',
    ),
    example: {
      fr: 'Elle a pris le train ; elle est venue à pied.',
      gloss: t(
        '« pris » et « venue » sont des participes passés.',
        '“pris” and “venue” are past participles.',
        '“pris”和“venue”都是过去分词。',
      ),
    },
  },
  {
    id: 'auxiliaire',
    term: 'auxiliaire',
    partOfSpeech: NOUN,
    definition: t(
      'Verbe « être » ou « avoir » employé devant un participe passé pour former un temps composé.',
      'The verb “être” or “avoir” used before a past participle to build a compound tense.',
      '置于过去分词前构成复合时态的动词“être”或“avoir”。',
    ),
    example: {
      fr: 'Nous avons compris ; nous sommes partis.',
      gloss: t(
        '« avons » et « sommes » sont les auxiliaires.',
        '“avons” and “sommes” are the auxiliaries.',
        '“avons”和“sommes”是助动词。',
      ),
    },
  },
  {
    id: 'cod',
    term: 'complément d’objet direct (COD)',
    partOfSpeech: NOUN,
    definition: t(
      'Groupe qui complète le verbe sans préposition et répond à la question « qui ? » ou « quoi ? ».',
      'A phrase completing the verb without a preposition, answering “whom?” or “what?”.',
      '不带介词直接补充动词的成分，回答“谁”或“什么”。',
    ),
    example: {
      fr: 'J’ai lu ce roman. → J’ai lu quoi ? ce roman.',
      gloss: t(
        '« ce roman » est le COD du verbe « lire ».',
        '“ce roman” is the direct object of “lire”.',
        '“ce roman”是动词“lire”的直接宾语。',
      ),
    },
  },
  {
    id: 'coi',
    term: 'complément d’objet indirect (COI)',
    partOfSpeech: NOUN,
    definition: t(
      'Groupe relié au verbe par une préposition, généralement « à » ou « de ».',
      'A phrase linked to the verb by a preposition, usually “à” or “de”.',
      '通过介词（通常是“à”或“de”）与动词相连的成分。',
    ),
    example: {
      fr: 'Je parle à ma sœur.',
      gloss: t(
        '« à ma sœur » est le COI.',
        '“à ma sœur” is the indirect object.',
        '“à ma sœur”是间接宾语。',
      ),
    },
  },
  {
    id: 'pronom-relatif',
    term: 'pronom relatif',
    partOfSpeech: NOUN,
    definition: t(
      'Mot (qui, que, dont, où, lequel) qui relie une proposition subordonnée à un nom déjà cité, appelé antécédent.',
      'A word (qui, que, dont, où, lequel) linking a subordinate clause to a noun already mentioned, called the antecedent.',
      '连接从句与前文已提到的名词（先行词）的词：qui、que、dont、où、lequel。',
    ),
    example: {
      fr: 'Le film que j’ai vu hier était excellent.',
      gloss: t(
        '« que » relie la subordonnée au nom « le film ».',
        '“que” links the clause to the noun “le film”.',
        '“que”把从句与名词“le film”连接起来。',
      ),
    },
  },
  {
    id: 'antecedent',
    term: 'antécédent',
    partOfSpeech: NOUN,
    definition: t(
      'Nom ou groupe nominal que le pronom relatif reprend et remplace dans la subordonnée.',
      'The noun or noun phrase that the relative pronoun refers back to inside the clause.',
      '关系代词在从句中所指代的名词或名词短语。',
    ),
    example: {
      fr: 'La ville où je suis né a changé.',
      gloss: t(
        '« la ville » est l’antécédent de « où ».',
        '“la ville” is the antecedent of “où”.',
        '“la ville”是“où”的先行词。',
      ),
    },
  },
  {
    id: 'subordonnee',
    term: 'proposition subordonnée',
    partOfSpeech: NOUN_F,
    definition: t(
      'Proposition qui dépend d’une autre et ne peut pas exister seule ; elle est introduite par que, qui, quand, si…',
      'A clause that depends on another and cannot stand alone; it is introduced by que, qui, quand, si…',
      '依附于主句、不能独立存在的从句，由 que、qui、quand、si 等引导。',
    ),
    example: {
      fr: 'Je pense qu’il viendra.',
      gloss: t(
        '« qu’il viendra » est la subordonnée.',
        '“qu’il viendra” is the subordinate clause.',
        '“qu’il viendra”是从句。',
      ),
    },
  },
  {
    id: 'connecteur',
    term: 'connecteur logique',
    partOfSpeech: NOUN,
    definition: t(
      'Mot ou expression qui articule les idées d’un texte : cependant, en effet, par conséquent, en revanche.',
      'A word or phrase that links the ideas of a text: cependant, en effet, par conséquent, en revanche.',
      '连接文章观点的词语：cependant、en effet、par conséquent、en revanche。',
    ),
    example: {
      fr: 'Le prix est élevé ; en revanche, la qualité est irréprochable.',
      gloss: t(
        '« en revanche » marque une opposition.',
        '“en revanche” marks a contrast.',
        '“en revanche”表示转折。',
      ),
    },
  },
  {
    id: 'concordance',
    term: 'concordance des temps',
    partOfSpeech: NOUN_F,
    definition: t(
      'Règle qui fixe le temps du verbe de la subordonnée en fonction du temps de la principale.',
      'The rule that sets the tense of the subordinate verb according to the tense of the main clause.',
      '根据主句时态确定从句动词时态的规则。',
    ),
    example: {
      fr: 'Il a dit qu’il partirait le lendemain.',
      gloss: t(
        'Principale au passé → subordonnée au conditionnel.',
        'Main clause in the past → subordinate in the conditional.',
        '主句用过去时 → 从句用条件式。',
      ),
    },
  },
  {
    id: 'imparfait',
    term: 'imparfait',
    partOfSpeech: NOUN,
    definition: t(
      'Temps du passé qui décrit un décor, une habitude ou une action en cours, sans en marquer la fin.',
      'A past tense describing a setting, a habit or an ongoing action, without marking its end.',
      '描述背景、习惯或正在进行的动作的过去时，不强调动作的结束。',
    ),
    example: {
      fr: 'Il pleuvait et les rues étaient vides.',
      gloss: t(
        'Décor planté à l’imparfait.',
        'The setting is described in the imperfect.',
        '用未完成过去时描绘场景。',
      ),
    },
  },
  {
    id: 'passe-compose',
    term: 'passé composé',
    partOfSpeech: NOUN,
    definition: t(
      'Temps du passé qui rapporte un événement daté, ponctuel, qui fait avancer le récit.',
      'A past tense reporting a dated, one-off event that moves the narrative forward.',
      '叙述具体、一次性、推动情节发展的过去事件的时态。',
    ),
    example: {
      fr: 'Soudain, le téléphone a sonné.',
      gloss: t(
        'Événement ponctuel au passé composé.',
        'A one-off event in the passé composé.',
        '用复合过去时表示一次性事件。',
      ),
    },
  },
  {
    id: 'plus-que-parfait',
    term: 'plus-que-parfait',
    partOfSpeech: NOUN,
    definition: t(
      'Temps qui exprime une action antérieure à une autre action passée.',
      'A tense expressing an action that happened before another past action.',
      '表示先于另一过去动作发生的时态。',
    ),
    example: {
      fr: 'Quand je suis arrivé, il était déjà parti.',
      gloss: t(
        '« était parti » précède « suis arrivé ».',
        '“était parti” happens before “suis arrivé”.',
        '“était parti”发生在“suis arrivé”之前。',
      ),
    },
  },
  {
    id: 'conditionnel',
    term: 'conditionnel',
    partOfSpeech: NOUN,
    definition: t(
      'Mode qui exprime l’hypothèse, la politesse, le souhait, ou une information non confirmée.',
      'A mood expressing hypothesis, politeness, a wish, or unconfirmed information.',
      '表示假设、礼貌、愿望或未经证实信息的语式。',
    ),
    example: {
      fr: 'Je voudrais un renseignement.',
      gloss: t(
        'Conditionnel de politesse, bien plus courtois que « je veux ».',
        'Conditional of politeness, far more courteous than “je veux”.',
        '礼貌性条件式，比“je veux”客气得多。',
      ),
    },
  },
  {
    id: 'subjonctif',
    term: 'subjonctif',
    partOfSpeech: NOUN,
    definition: t(
      'Mode du verbe employé après certaines expressions de volonté, d’émotion, de doute ou de nécessité.',
      'A verb mood used after certain expressions of will, emotion, doubt or necessity.',
      '用于表达意愿、情感、怀疑或必要性之后的动词语式。',
    ),
    example: {
      fr: 'Il faut que tu viennes.',
      gloss: t(
        '« il faut que » impose le subjonctif.',
        '“il faut que” requires the subjunctive.',
        '“il faut que”后必须使用虚拟式。',
      ),
    },
  },
  {
    id: 'mode',
    term: 'mode',
    partOfSpeech: NOUN,
    definition: t(
      'Manière dont le verbe présente l’action : indicatif (réel), subjonctif (envisagé), conditionnel, impératif.',
      'The way a verb presents the action: indicative (real), subjunctive (considered), conditional, imperative.',
      '动词呈现动作的方式：直陈式（真实）、虚拟式（设想）、条件式、命令式。',
    ),
  },
  {
    id: 'radical',
    term: 'radical',
    partOfSpeech: NOUN,
    definition: t(
      'Partie stable du verbe, obtenue en retirant la terminaison, à laquelle on ajoute les marques de temps et de personne.',
      'The stable part of a verb, obtained by removing the ending, to which tense and person markers are added.',
      '去掉词尾后动词不变的部分，用于附加时态和人称词尾。',
    ),
    example: {
      fr: 'parler → parl- + -ons',
      gloss: t('« parl- » est le radical.', '“parl-” is the stem.', '“parl-”是词干。'),
    },
  },
  {
    id: 'terminaison',
    term: 'terminaison',
    partOfSpeech: NOUN_F,
    definition: t(
      'Fin du verbe conjugué, qui indique la personne, le nombre et le temps.',
      'The ending of a conjugated verb, which indicates person, number and tense.',
      '变位动词的词尾，标示人称、数和时态。',
    ),
  },
  {
    id: 'verbe-pronominal',
    term: 'verbe pronominal',
    partOfSpeech: NOUN,
    definition: t(
      'Verbe accompagné d’un pronom réfléchi (se laver, s’en aller) et conjugué avec l’auxiliaire être aux temps composés.',
      'A verb accompanied by a reflexive pronoun (se laver, s’en aller), conjugated with “être” in compound tenses.',
      '带自反代词的动词（se laver、s’en aller），复合时态用助动词“être”。',
    ),
    example: {
      fr: 'Elles se sont levées tôt.',
      gloss: t(
        'Auxiliaire être et accord avec le sujet.',
        'Auxiliary “être” and agreement with the subject.',
        '使用助动词“être”并与主语性数配合。',
      ),
    },
  },
  {
    id: 'registre',
    term: 'registre de langue',
    partOfSpeech: NOUN,
    definition: t(
      'Niveau de langue adapté à la situation : familier, courant ou soutenu.',
      'The level of language suited to the situation: informal, standard or formal.',
      '适合具体场合的语言层次：口语体、通用语体或正式语体。',
    ),
    example: {
      fr: 'bagnole (familier) / voiture (courant) / automobile (soutenu)',
      gloss: t(
        'Trois mots, un seul objet, trois registres.',
        'Three words, one object, three registers.',
        '三个词指同一事物，却属于三种语体。',
      ),
    },
  },
  {
    id: 'soutenu',
    term: 'soutenu',
    partOfSpeech: ADJ,
    definition: t(
      'Se dit d’un registre élaboré, employé à l’écrit formel et attendu aux épreuves C1 et C2.',
      'Describes an elaborate register, used in formal writing and expected in the C1 and C2 papers.',
      '指精致考究的语体，用于正式书面语，也是 C1、C2 考试的要求。',
    ),
  },
  {
    id: 'nuance',
    term: 'nuance',
    partOfSpeech: NOUN_F,
    definition: t(
      'Différence fine de sens ou d’intensité entre deux formulations proches.',
      'A subtle difference in meaning or intensity between two similar formulations.',
      '两种相近表达之间在意义或程度上的细微差别。',
    ),
    example: {
      fr: 'Il est possible que… / Il se pourrait que…',
      gloss: t(
        'La seconde formule est plus prudente.',
        'The second phrasing is more cautious.',
        '第二种说法更为谨慎。',
      ),
    },
  },
  {
    id: 'reformulation',
    term: 'reformulation',
    partOfSpeech: NOUN_F,
    definition: t(
      'Reprise d’une idée avec d’autres mots, sans en changer le sens ni recopier la formulation d’origine.',
      'Restating an idea in different words, without changing its meaning or copying the original wording.',
      '用不同的措辞复述某一观点，既不改变原意，也不照抄原文。',
    ),
    example: {
      fr: 'L’auteur soutient que… → Selon l’auteur, …',
      gloss: t(
        'Compétence centrale de la synthèse C1.',
        'A core skill for the C1 synthesis paper.',
        '这是 C1 综述题的核心能力。',
      ),
    },
  },
  {
    id: 'paraphrase',
    term: 'paraphrase',
    partOfSpeech: NOUN_F,
    definition: t(
      'Reprise trop proche du texte source ; à la différence de la reformulation, elle est pénalisée aux examens.',
      'A restatement that stays too close to the source text; unlike reformulation, it is penalised in exams.',
      '过于贴近原文的复述；与改写不同，它在考试中会被扣分。',
    ),
  },
  {
    id: 'synthese',
    term: 'synthèse de documents',
    partOfSpeech: NOUN_F,
    definition: t(
      'Exercice du DALF C1 consistant à confronter plusieurs textes et à en restituer les idées de façon organisée, sans donner son avis.',
      'A DALF C1 task requiring you to compare several texts and restate their ideas in an organised way, without giving your own opinion.',
      'DALF C1 的题型：比较多篇文本并有条理地复述其观点，不得加入个人意见。',
    ),
  },
  {
    id: 'problematique',
    term: 'problématique',
    partOfSpeech: NOUN_F,
    definition: t(
      'Question centrale qui oriente un devoir argumenté et à laquelle la conclusion doit répondre.',
      'The central question guiding an argumentative essay, which the conclusion must answer.',
      '贯穿论述文的核心问题，结论必须对其作出回答。',
    ),
  },
  {
    id: 'these',
    term: 'thèse',
    partOfSpeech: NOUN_F,
    definition: t(
      'Position défendue dans un texte argumenté.',
      'The position defended in an argumentative text.',
      '论述文中所支持的观点或立场。',
    ),
  },
  {
    id: 'antithese',
    term: 'antithèse',
    partOfSpeech: NOUN_F,
    definition: t(
      'Position opposée à la thèse, examinée pour montrer qu’on a envisagé l’autre point de vue.',
      'The position opposed to the thesis, examined to show that the other viewpoint has been considered.',
      '与主论点相对的立场，用以表明已考虑对立观点。',
    ),
  },
  {
    id: 'implicite',
    term: 'implicite',
    partOfSpeech: NOUN,
    definition: t(
      'Ce qui est suggéré sans être dit ; le repérer est explicitement évalué à partir du niveau B2.',
      'What is suggested without being said; spotting it is explicitly assessed from B2 upwards.',
      '未明说而被暗示的内容；从 B2 起，识别隐含义是明确的评分点。',
    ),
    example: {
      fr: '« Il est arrivé, disons, tardivement. »',
      gloss: t(
        '« disons » signale un reproche non formulé.',
        '“disons” signals an unspoken criticism.',
        '“disons”暗示了一种未直说的责备。',
      ),
    },
  },
  {
    id: 'litote',
    term: 'litote',
    partOfSpeech: NOUN_F,
    definition: t(
      'Figure qui dit peu pour suggérer beaucoup, souvent par la négation du contraire.',
      'A figure of speech that says little to suggest much, often by negating the opposite.',
      '以少言多的修辞手法，常通过否定反面来实现。',
    ),
    example: {
      fr: 'Ce n’est pas mauvais.',
      gloss: t(
        'Sous-entendu : c’est très bon.',
        'Implied meaning: it is very good.',
        '言外之意：非常好。',
      ),
    },
  },
  {
    id: 'euphemisme',
    term: 'euphémisme',
    partOfSpeech: NOUN,
    definition: t(
      'Formule atténuée qui adoucit une réalité désagréable.',
      'A softened expression that tones down an unpleasant reality.',
      '用委婉的说法缓和令人不快的事实。',
    ),
    example: {
      fr: 'un plan de sauvegarde de l’emploi',
      gloss: t(
        'Désigne en réalité des licenciements.',
        'It actually refers to redundancies.',
        '实际指的是裁员。',
      ),
    },
  },
  {
    id: 'perpehrase',
    term: 'périphrase',
    partOfSpeech: NOUN_F,
    definition: t(
      'Groupe de mots employé à la place d’un terme unique, souvent pour éviter une répétition.',
      'A group of words used instead of a single term, often to avoid repetition.',
      '用一组词代替单个词语，常用于避免重复。',
    ),
    example: {
      fr: 'la capitale française = Paris',
      gloss: t(
        'Utile pour varier le vocabulaire d’un texte.',
        'Useful to vary the vocabulary of a text.',
        '有助于丰富文章的词汇变化。',
      ),
    },
  },
  {
    id: 'articulateur',
    term: 'articulateur',
    partOfSpeech: NOUN,
    definition: t(
      'Synonyme de connecteur logique, employé dans les grilles d’évaluation du DELF et du DALF.',
      'Synonym of logical connector, used in DELF and DALF marking grids.',
      '逻辑连接词的同义说法，常见于 DELF、DALF 评分表。',
    ),
  },
  {
    id: 'bareme',
    term: 'barème',
    partOfSpeech: NOUN,
    definition: t(
      'Répartition des points entre les épreuves et les critères d’évaluation.',
      'The distribution of marks across papers and assessment criteria.',
      '各考试科目与评分标准之间的分值分配。',
    ),
    example: {
      fr: 'Chaque épreuve du DELF vaut 25 points sur 100.',
      gloss: t(
        'Le total détermine l’admission.',
        'The total determines whether you pass.',
        '总分决定是否通过考试。',
      ),
    },
  },
  {
    id: 'epreuve',
    term: 'épreuve',
    partOfSpeech: NOUN_F,
    definition: t(
      'Partie notée d’un examen : compréhension de l’oral, compréhension des écrits, production écrite, production orale.',
      'A graded part of an exam: listening, reading, writing, speaking.',
      '考试中的一个计分部分：听力、阅读、写作、口语。',
    ),
  },
  {
    id: 'consigne',
    term: 'consigne',
    partOfSpeech: NOUN_F,
    definition: t(
      'Instruction officielle qui fixe la tâche, le nombre de mots et le destinataire ; s’en écarter coûte des points.',
      'The official instruction setting the task, the word count and the addressee; departing from it costs marks.',
      '规定任务、字数与收信对象的官方指示；偏离要求会被扣分。',
    ),
  },
  {
    id: 'compte-rendu',
    term: 'compte rendu',
    partOfSpeech: NOUN,
    definition: t(
      'Restitution fidèle et organisée du contenu d’un document, sans commentaire personnel.',
      'A faithful, organised restatement of a document’s content, without personal comment.',
      '对文献内容忠实且有条理的复述，不加入个人评论。',
    ),
  },
  {
    id: 'exposé',
    term: 'exposé',
    partOfSpeech: NOUN,
    definition: t(
      'Présentation orale structurée à partir d’un ou plusieurs documents, suivie d’un entretien avec le jury.',
      'A structured oral presentation based on one or more documents, followed by a discussion with the examiners.',
      '基于一份或多份文件的结构化口头陈述，随后与考官进行讨论。',
    ),
  },
  {
    id: 'entretien',
    term: 'entretien dirigé',
    partOfSpeech: NOUN,
    definition: t(
      'Première partie de l’oral du DELF : échange guidé par l’examinateur sur des sujets familiers.',
      'The first part of the DELF speaking paper: a guided exchange with the examiner on familiar topics.',
      'DELF 口试的第一部分：考官引导的日常话题交流。',
    ),
  },
  {
    id: 'monologue',
    term: 'monologue suivi',
    partOfSpeech: NOUN,
    definition: t(
      'Prise de parole continue et structurée du candidat, sans interruption, sur un sujet imposé.',
      'A continuous, structured turn by the candidate, uninterrupted, on a set topic.',
      '考生就指定题目进行的连续、有条理的独白，中途不被打断。',
    ),
  },
  {
    id: 'connotation',
    term: 'connotation',
    partOfSpeech: NOUN_F,
    definition: t(
      'Valeur affective ou culturelle que porte un mot en plus de son sens strict.',
      'The emotional or cultural value a word carries beyond its strict meaning.',
      '词语在字面意义之外所带有的情感或文化色彩。',
    ),
    example: {
      fr: 'économe / radin',
      gloss: t(
        'Même idée, connotation opposée.',
        'Same idea, opposite connotation.',
        '意思相近，褒贬相反。',
      ),
    },
  },
  {
    id: 'gerondif',
    term: 'gérondif',
    partOfSpeech: NOUN,
    definition: t(
      'Forme « en + participe présent » qui exprime la simultanéité, la manière ou la condition.',
      'The “en + present participle” form expressing simultaneity, manner or condition.',
      '“en + 现在分词”形式，表示同时、方式或条件。',
    ),
    example: {
      fr: 'Il répond en souriant.',
      gloss: t(
        'Manière : il répond avec le sourire.',
        'Manner: he answers with a smile.',
        '方式：他微笑着回答。',
      ),
    },
  },
  {
    id: 'voix-passive',
    term: 'voix passive',
    partOfSpeech: NOUN_F,
    definition: t(
      'Construction où le sujet subit l’action : « le rapport a été rédigé par la commission ».',
      'A construction where the subject undergoes the action: “le rapport a été rédigé par la commission”.',
      '主语承受动作的结构：“le rapport a été rédigé par la commission”。',
    ),
  },
  {
    id: 'nominalisation',
    term: 'nominalisation',
    partOfSpeech: NOUN_F,
    definition: t(
      'Transformation d’un verbe en nom, procédé caractéristique de l’écrit soutenu.',
      'Turning a verb into a noun, a hallmark of formal written French.',
      '把动词转化为名词，是正式书面法语的典型手法。',
    ),
    example: {
      fr: 'Les prix ont augmenté → l’augmentation des prix',
      gloss: t(
        'Le style devient plus dense et plus formel.',
        'The style becomes denser and more formal.',
        '文风更凝练、更正式。',
      ),
    },
  },
  {
    id: 'concession',
    term: 'concession',
    partOfSpeech: NOUN_F,
    definition: t(
      'Mouvement argumentatif qui admet un point adverse avant de le dépasser : « certes…, mais… ».',
      'An argumentative move that concedes an opposing point before overriding it: “certes…, mais…”.',
      '先承认对方观点、再加以超越的论证方式：“certes…, mais…”。',
    ),
    example: {
      fr: 'Certes, le coût est élevé ; il reste cependant inférieur aux bénéfices attendus.',
      gloss: t(
        'Structure très valorisée au B2 et au C1.',
        'A structure highly valued at B2 and C1.',
        '这种结构在 B2 和 C1 中很受推崇。',
      ),
    },
  },
  {
    id: 'anaphore',
    term: 'reprise anaphorique',
    partOfSpeech: NOUN_F,
    definition: t(
      'Manière de reprendre un élément déjà cité par un pronom ou un synonyme, pour éviter la répétition.',
      'A way of referring back to something already mentioned using a pronoun or synonym, to avoid repetition.',
      '用代词或同义词回指已提及的内容，以避免重复。',
    ),
    example: {
      fr: 'Le rapport a paru hier. Ce document dresse un bilan sévère.',
      gloss: t(
        '« ce document » reprend « le rapport ».',
        '“ce document” refers back to “le rapport”.',
        '“ce document”回指“le rapport”。',
      ),
    },
  },
  {
    id: 'idiomatique',
    term: 'expression idiomatique',
    partOfSpeech: LOC,
    definition: t(
      'Expression figée dont le sens ne se déduit pas des mots pris séparément.',
      'A fixed expression whose meaning cannot be worked out from the individual words.',
      '固定表达，其含义无法从单个词语推导出来。',
    ),
    example: {
      fr: 'tomber dans les pommes = s’évanouir',
      gloss: t(
        'Rien à voir avec les pommes.',
        'Nothing to do with apples.',
        '与苹果毫无关系。',
      ),
    },
  },
];

export const glossary: ReadonlyMap<string, GlossaryEntry> = new Map(entries.map((entry) => [entry.id, entry]));

export function getGlossaryEntry(id: string): GlossaryEntry | null {
  return glossary.get(id) ?? null;
}

export const glossaryEntries = entries;
