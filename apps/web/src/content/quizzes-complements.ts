import type { Quiz } from '@lms/core';
import { t } from './tr';

/**
 * Quiz des douze cours ajoutés pour porter le catalogue à cinq cours par
 * niveau. Mêmes règles que le fichier principal : seuil 70 %, trois
 * tentatives, six questions par quiz.
 */

const a1Quotidien: Quiz = {
  id: 'qz_a1_quotidien',
  title: t('Quiz — Ma vie de tous les jours', 'Quiz — My everyday life', '测验 — 我的日常生活'),
  description: t(
    'Possessifs, vocabulaire de la famille, pièces de la maison et moments de la journée.',
    'Possessives, family vocabulary, rooms of the house and moments of the day.',
    '物主限定词、家庭词汇、房间名称与一天中的时段。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'aq1',
      kind: 'single',
      points: 1,
      prompt: t('Comment dit-on « my friend » à propos d’une femme ?', 'How do you say “my friend” about a woman?', '谈到一位女性朋友时，“my friend” 怎么说？'),
      explanation: t(
        '« Amie » est féminin, mais commence par une voyelle. Le français évite deux voyelles qui se suivent : on emploie donc « mon », comme devant un mot masculin.',
        '“Amie” is feminine but starts with a vowel. French avoids two vowels in a row, so you use “mon”, just as before a masculine word.',
        '“amie” 是阴性，但以元音开头。法语要避免两个元音相连，所以用 “mon”，就像在阳性词前一样。',
      ),
      answers: [
        { id: 'a', text: t('mon amie', 'mon amie', 'mon amie'), correct: true },
        { id: 'b', text: t('ma amie', 'ma amie', 'ma amie'), correct: false },
        { id: 'c', text: t('mes amie', 'mes amie', 'mes amie'), correct: false },
        { id: 'd', text: t('me amie', 'me amie', 'me amie'), correct: false },
      ],
    },
    {
      id: 'aq2',
      kind: 'single',
      points: 1,
      prompt: t('« Son frère » : que sait-on du propriétaire ?', '“Son frère”: what do we know about the owner?', '“Son frère”：我们能知道所有者的什么信息？'),
      explanation: t(
        'Rien. En français, le possessif s’accorde avec l’objet possédé, pas avec la personne. « Son frère » peut être le frère d’un homme comme d’une femme.',
        'Nothing. In French the possessive agrees with the thing owned, not with the person. “Son frère” can be a man’s brother or a woman’s.',
        '什么也不知道。法语的物主限定词与被拥有的事物一致，而不是与人一致。“son frère” 可以是男性的兄弟，也可以是女性的。',
      ),
      answers: [
        { id: 'a', text: t('Rien : ce peut être un homme ou une femme', 'Nothing: it can be a man or a woman', '无从得知：可能是男性也可能是女性'), correct: true },
        { id: 'b', text: t('C’est forcément un homme', 'It must be a man', '一定是男性'), correct: false },
        { id: 'c', text: t('C’est forcément une femme', 'It must be a woman', '一定是女性'), correct: false },
        { id: 'd', text: t('Il y a plusieurs propriétaires', 'There are several owners', '有多个所有者'), correct: false },
      ],
    },
    {
      id: 'aq3',
      kind: 'single',
      points: 1,
      prompt: t('Que veut dire « les parents » en français ?', 'What does “les parents” mean in French?', '法语中 “les parents” 是什么意思？'),
      explanation: t(
        '« Les parents » désigne le père et la mère. Pour parler de la famille au sens large, on dit « la famille » ou « les proches ».',
        '“Les parents” means the father and the mother. To speak of the wider family you say “la famille” or “les proches”.',
        '“les parents” 指父亲和母亲。要指更广的亲属，则说 “la famille” 或 “les proches”。',
      ),
      answers: [
        { id: 'a', text: t('Le père et la mère', 'The father and the mother', '父亲和母亲'), correct: true },
        { id: 'b', text: t('Toute la famille, oncles compris', 'The whole family, uncles included', '整个家族，包括叔伯'), correct: false },
        { id: 'c', text: t('Les grands-parents', 'The grandparents', '祖父母'), correct: false },
        { id: 'd', text: t('Les voisins proches', 'Close neighbours', '近邻'), correct: false },
      ],
    },
    {
      id: 'aq4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles phrases sont correctes ?', 'Which sentences are correct?', '哪些句子是正确的？'),
      explanation: t(
        '« Mes » et « nos » sont les seules formes du pluriel, quel que soit le genre. « Ta amie » est impossible : devant une voyelle, on dit « ton amie ».',
        '“Mes” and “nos” are the only plural forms, whatever the gender. “Ta amie” is impossible: before a vowel you say “ton amie”.',
        '“mes” 和 “nos” 是复数唯一的形式，不分性别。“ta amie” 不成立：元音前要说 “ton amie”。',
      ),
      answers: [
        { id: 'a', text: t('Mes parents habitent à Lyon.', 'Mes parents habitent à Lyon.', 'Mes parents habitent à Lyon.'), correct: true },
        { id: 'b', text: t('Nos enfants sont à l’école.', 'Nos enfants sont à l’école.', 'Nos enfants sont à l’école.'), correct: true },
        { id: 'c', text: t('Ta amie arrive demain.', 'Ta amie arrive demain.', 'Ta amie arrive demain.'), correct: false },
        { id: 'd', text: t('Son adresse est ici.', 'Son adresse est ici.', 'Son adresse est ici.'), correct: true },
      ],
    },
    {
      id: 'aq5',
      kind: 'single',
      points: 1,
      prompt: t('Dans quelle pièce prépare-t-on les repas ?', 'In which room do you prepare meals?', '在哪个房间准备饭菜？'),
      explanation: t(
        'La cuisine. Attention : le mot désigne à la fois la pièce et l’art de cuisiner — « la cuisine française » ne parle pas d’une pièce.',
        'La cuisine. Careful: the word means both the room and the art of cooking — “la cuisine française” is not about a room.',
        '是 la cuisine。注意：这个词既指房间，也指烹饪——“la cuisine française” 说的不是房间。',
      ),
      answers: [
        { id: 'a', text: t('la cuisine', 'la cuisine', 'la cuisine'), correct: true },
        { id: 'b', text: t('le salon', 'le salon', 'le salon'), correct: false },
        { id: 'c', text: t('la chambre', 'la chambre', 'la chambre'), correct: false },
        { id: 'd', text: t('le couloir', 'le couloir', 'le couloir'), correct: false },
      ],
    },
    {
      id: 'aq6',
      kind: 'boolean',
      points: 1,
      prompt: t('« Je me lève » et « je lève » veulent dire la même chose.', '“Je me lève” and “je lève” mean the same thing.', '“Je me lève” 和 “je lève” 意思相同。'),
      explanation: t(
        'Faux. « Je me lève » veut dire que je sors du lit ; « je lève » demande un complément : je lève la main, je lève un objet.',
        'False. “Je me lève” means I get out of bed; “je lève” needs an object: je lève la main, je lève un objet.',
        '错。“Je me lève” 指我起床；“je lève” 需要宾语：je lève la main、je lève un objet。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: false },
        { id: 'b', text: t('Faux', 'False', '错'), correct: true },
      ],
    },
  ],
};

const a1Sons: Quiz = {
  id: 'qz_a1_sons',
  title: t('Quiz — Les sons du français', 'Quiz — The sounds of French', '测验 — 法语语音'),
  description: t(
    'Lettres muettes, liaisons obligatoires et interdites, sons qui n’existent pas ailleurs.',
    'Silent letters, compulsory and forbidden liaisons, sounds that exist nowhere else.',
    '不发音的字母、必读与禁读的联诵，以及别处没有的音。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'as1',
      kind: 'single',
      points: 1,
      prompt: t('Combien de sons entend-on dans « ils parlent » ?', 'How many sounds do you hear in “ils parlent”?', '“ils parlent” 里能听到多少个音？'),
      explanation: t(
        'On entend « il parl ». Le s de « ils » et le -ent de « parlent » sont muets : à l’oreille, « il parle » et « ils parlent » sont identiques.',
        'You hear “il parl”. The s of “ils” and the -ent of “parlent” are silent: to the ear, “il parle” and “ils parlent” are identical.',
        '听到的是 “il parl”。“ils” 的 s 和 “parlent” 的 -ent 都不发音：耳朵听来，“il parle” 与 “ils parlent” 完全相同。',
      ),
      answers: [
        { id: 'a', text: t('Autant que dans « il parle » : les deux se prononcent pareil', 'As many as in “il parle”: the two sound the same', '和 “il parle” 一样多：两者读音相同'), correct: true },
        { id: 'b', text: t('Un son de plus, à cause du s', 'One more sound, because of the s', '多一个音，因为有 s'), correct: false },
        { id: 'c', text: t('Deux sons de plus, à cause de -ent', 'Two more sounds, because of -ent', '多两个音，因为有 -ent'), correct: false },
        { id: 'd', text: t('Un son de moins', 'One sound fewer', '少一个音'), correct: false },
      ],
    },
    {
      id: 'as2',
      kind: 'single',
      points: 1,
      prompt: t('Dans « les enfants », comment se prononce le s de « les » ?', 'In “les enfants”, how is the s of “les” pronounced?', '在 “les enfants” 中，“les” 的 s 怎么读？'),
      explanation: t(
        'Comme un z. Devant une voyelle, le s final se prononce et se colle au mot suivant : c’est la liaison, et elle est obligatoire après un déterminant.',
        'Like a z. Before a vowel, the final s is pronounced and sticks to the next word: that is liaison, and it is compulsory after a determiner.',
        '读作 z。在元音前，词尾的 s 要发音并与后一个词相连：这就是联诵，在限定词之后是必读的。',
      ),
      answers: [
        { id: 'a', text: t('Comme un z, collé à « enfants »', 'Like a z, joined to “enfants”', '读作 z，与 “enfants” 相连'), correct: true },
        { id: 'b', text: t('Comme un s dur', 'Like a hard s', '读作清辅音 s'), correct: false },
        { id: 'c', text: t('Il reste muet', 'It stays silent', '仍然不发音'), correct: false },
        { id: 'd', text: t('Comme un ch', 'Like a “ch”', '读作 ch'), correct: false },
      ],
    },
    {
      id: 'as3',
      kind: 'multiple',
      points: 2,
      prompt: t('Dans quels cas la liaison est-elle obligatoire ?', 'In which cases is the liaison compulsory?', '哪些情况下联诵是必读的？'),
      explanation: t(
        'La liaison est obligatoire après un déterminant, après un pronom sujet devant son verbe, et dans un adjectif suivi de son nom. Elle est en revanche interdite après « et ».',
        'Liaison is compulsory after a determiner, after a subject pronoun before its verb, and in an adjective followed by its noun. It is forbidden after “et”.',
        '联诵在以下情况必读：限定词之后、主语代词与其动词之间、形容词与其后名词之间。而在 “et” 之后则禁止联诵。',
      ),
      answers: [
        { id: 'a', text: t('les amis', 'les amis', 'les amis'), correct: true },
        { id: 'b', text: t('nous avons', 'nous avons', 'nous avons'), correct: true },
        { id: 'c', text: t('et alors', 'et alors', 'et alors'), correct: false },
        { id: 'd', text: t('un petit enfant', 'un petit enfant', 'un petit enfant'), correct: true },
      ],
    },
    {
      id: 'as4',
      kind: 'single',
      points: 1,
      prompt: t('Quelle lettre finale se prononce le plus souvent ?', 'Which final letter is most often pronounced?', '哪个词尾字母最常发音？'),
      explanation: t(
        'Le r se prononce presque toujours à la fin d’un mot — sauf dans les infinitifs en -er et quelques mots comme « monsieur ». Les d, s, t, x finaux sont muets dans l’immense majorité des cas.',
        'The r is nearly always pronounced at the end of a word — except in -er infinitives and a few words like “monsieur”. Final d, s, t and x are silent in the vast majority of cases.',
        '词尾的 r 几乎总是发音——除了 -er 结尾的不定式和 “monsieur” 等少数词。词尾的 d、s、t、x 在绝大多数情况下不发音。',
      ),
      answers: [
        { id: 'a', text: t('le r', 'r', 'r'), correct: true },
        { id: 'b', text: t('le s', 's', 's'), correct: false },
        { id: 'c', text: t('le t', 't', 't'), correct: false },
        { id: 'd', text: t('le x', 'x', 'x'), correct: false },
      ],
    },
    {
      id: 'as5',
      kind: 'single',
      points: 1,
      prompt: t('Quelle est la différence entre « dessus » et « dessous » à l’oral ?', 'What is the difference between “dessus” and “dessous” in speech?', '口语中 “dessus” 和 “dessous” 有什么区别？'),
      explanation: t(
        'Le son u de « dessus » se fait lèvres arrondies et langue en avant ; le son ou de « dessous » se fait langue en arrière. C’est la paire qui demande le plus d’entraînement.',
        'The u sound of “dessus” is made with rounded lips and the tongue forward; the ou sound of “dessous” has the tongue back. It is the pair that needs the most practice.',
        '“dessus” 的 u 音要圆唇、舌位靠前；“dessous” 的 ou 音舌位靠后。这一对最需要反复练习。',
      ),
      answers: [
        { id: 'a', text: t('La position de la langue : en avant pour u, en arrière pour ou', 'Tongue position: forward for u, back for ou', '舌位：u 靠前，ou 靠后'), correct: true },
        { id: 'b', text: t('La longueur de la voyelle', 'The length of the vowel', '元音的长短'), correct: false },
        { id: 'c', text: t('L’accent tonique', 'The stress', '重音位置'), correct: false },
        { id: 'd', text: t('Aucune : les deux se prononcent pareil', 'None: the two sound the same', '没有区别：两者读音相同'), correct: false },
      ],
    },
    {
      id: 'as6',
      kind: 'boolean',
      points: 1,
      prompt: t('En français, l’accent tonique tombe sur la dernière syllabe du groupe.', 'In French, the stress falls on the last syllable of the group.', '法语的重音落在意群的最后一个音节上。'),
      explanation: t(
        'Vrai. Le français accentue la fin du groupe de mots, pas chaque mot séparément. C’est pourquoi les phrases semblent « couler » sans relief pour une oreille anglophone.',
        'True. French stresses the end of the word group, not each word separately. That is why sentences seem to “flow” without relief to an English-speaking ear.',
        '对。法语重读的是整个词组的末尾，而不是每个单词。这正是为什么在英语母语者听来，法语句子像是平滑“流过”。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: true },
        { id: 'b', text: t('Faux', 'False', '错'), correct: false },
      ],
    },
  ],
};

const a2ViePratique: Quiz = {
  id: 'qz_a2_vie_pratique',
  title: t('Quiz — Se débrouiller', 'Quiz — Getting by', '测验 — 应对日常'),
  description: t(
    'Courses, restaurant, transports : les phrases qui servent tous les jours.',
    'Shopping, restaurant, transport: the sentences you need every day.',
    '购物、餐厅、交通：每天都用得上的句子。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'av1',
      kind: 'single',
      points: 1,
      prompt: t('Que dit-on en entrant dans une petite boutique ?', 'What do you say when entering a small shop?', '走进一家小店时该说什么？'),
      explanation: t(
        'On dit « Bonjour » avant toute chose. Entrer sans saluer est perçu comme impoli en France, bien plus que dans beaucoup d’autres pays.',
        'You say “Bonjour” before anything else. Walking in without greeting is seen as rude in France, far more than in many other countries.',
        '首先要说 “Bonjour”。在法国，进门不打招呼被视为失礼，程度远超许多国家。',
      ),
      answers: [
        { id: 'a', text: t('Bonjour', 'Bonjour', 'Bonjour'), correct: true },
        { id: 'b', text: t('Rien, on attend d’être servi', 'Nothing, you wait to be served', '什么也不说，等着被招呼'), correct: false },
        { id: 'c', text: t('S’il vous plaît', 'S’il vous plaît', 'S’il vous plaît'), correct: false },
        { id: 'd', text: t('Excusez-moi', 'Excusez-moi', 'Excusez-moi'), correct: false },
      ],
    },
    {
      id: 'av2',
      kind: 'single',
      points: 1,
      prompt: t('Au restaurant, que demande-t-on pour payer ?', 'At the restaurant, what do you ask for to pay?', '在餐厅结账时要说什么？'),
      explanation: t(
        '« L’addition, s’il vous plaît. » Le mot « facture » appartient au commerce et à l’administration ; au restaurant, on dit l’addition.',
        '“L’addition, s’il vous plaît.” The word “facture” belongs to business and admin; in a restaurant you say l’addition.',
        '说 “L’addition, s’il vous plaît.”。“facture” 属于商务和行政用语；在餐厅要说 l’addition。',
      ),
      answers: [
        { id: 'a', text: t('L’addition, s’il vous plaît', 'L’addition, s’il vous plaît', 'L’addition, s’il vous plaît'), correct: true },
        { id: 'b', text: t('La facture, s’il vous plaît', 'La facture, s’il vous plaît', 'La facture, s’il vous plaît'), correct: false },
        { id: 'c', text: t('Le ticket, s’il vous plaît', 'Le ticket, s’il vous plaît', 'Le ticket, s’il vous plaît'), correct: false },
        { id: 'd', text: t('Le compte, s’il vous plaît', 'Le compte, s’il vous plaît', 'Le compte, s’il vous plaît'), correct: false },
      ],
    },
    {
      id: 'av3',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles formules servent à demander son chemin ?', 'Which phrases are used to ask the way?', '哪些说法用来问路？'),
      explanation: t(
        'Les trois premières sont des demandes polies et usuelles. « Où est-ce ? » sans autre précision est trop vague pour être compris.',
        'The first three are polite, everyday requests. “Où est-ce ?” on its own is too vague to be understood.',
        '前三种都是礼貌而常用的问法。单说 “Où est-ce ?” 太含糊，别人无法理解。',
      ),
      answers: [
        { id: 'a', text: t('Pardon, je cherche la gare.', 'Pardon, je cherche la gare.', 'Pardon, je cherche la gare.'), correct: true },
        { id: 'b', text: t('Excusez-moi, où se trouve la poste ?', 'Excusez-moi, où se trouve la poste ?', 'Excusez-moi, où se trouve la poste ?'), correct: true },
        { id: 'c', text: t('Pour aller au musée, s’il vous plaît ?', 'Pour aller au musée, s’il vous plaît ?', 'Pour aller au musée, s’il vous plaît ?'), correct: true },
        { id: 'd', text: t('Où est-ce ?', 'Où est-ce ?', 'Où est-ce ?'), correct: false },
      ],
    },
    {
      id: 'av4',
      kind: 'single',
      points: 1,
      prompt: t('Un commerçant dit « Ce sera tout ? ». Que demande-t-il ?', 'A shopkeeper says “Ce sera tout ?”. What is being asked?', '店员说 “Ce sera tout ?”，他在问什么？'),
      explanation: t(
        'Il demande si vous voulez autre chose. On répond « Ce sera tout, merci » ou « Non, il me faudrait aussi… ».',
        'They are asking whether you want anything else. You answer “Ce sera tout, merci” or “Non, il me faudrait aussi…”.',
        '他在问你还要不要别的。回答 “Ce sera tout, merci” 或 “Non, il me faudrait aussi……”。',
      ),
      answers: [
        { id: 'a', text: t('Si vous voulez autre chose', 'Whether you want anything else', '你还要不要别的'), correct: true },
        { id: 'b', text: t('Si vous payez en espèces', 'Whether you are paying cash', '你是否付现金'), correct: false },
        { id: 'c', text: t('Si vous avez la monnaie', 'Whether you have change', '你有没有零钱'), correct: false },
        { id: 'd', text: t('Si vous voulez un sac', 'Whether you want a bag', '你要不要袋子'), correct: false },
      ],
    },
    {
      id: 'av5',
      kind: 'single',
      points: 1,
      prompt: t('Que veut dire « composter son billet » ?', 'What does “composter son billet” mean?', '“composter son billet” 是什么意思？'),
      explanation: t(
        'Valider son billet dans une machine avant de monter dans le train. Sans validation, le billet n’est pas valable et l’amende s’applique.',
        'To validate your ticket in a machine before boarding the train. Without validation the ticket is not valid and a fine applies.',
        '上车前把车票放进机器打印生效。未打印的车票无效，会被罚款。',
      ),
      answers: [
        { id: 'a', text: t('Le valider dans une machine avant de monter', 'Validate it in a machine before boarding', '上车前在机器上打印生效'), correct: true },
        { id: 'b', text: t('L’acheter au guichet', 'Buy it at the counter', '在窗口购买'), correct: false },
        { id: 'c', text: t('Le jeter après le voyage', 'Throw it away after the trip', '旅程结束后扔掉'), correct: false },
        { id: 'd', text: t('Le réserver à l’avance', 'Book it in advance', '提前预订'), correct: false },
      ],
    },
    {
      id: 'av6',
      kind: 'boolean',
      points: 1,
      prompt: t('En France, le service est compris dans le prix affiché au restaurant.', 'In France, service is included in the price shown at a restaurant.', '在法国，餐厅标示的价格已包含服务费。'),
      explanation: t(
        'Vrai. Le service est toujours compris. Laisser quelques pièces reste possible si l’on est content, mais ce n’est jamais attendu.',
        'True. Service is always included. Leaving a few coins is still possible if you are happy, but it is never expected.',
        '对。服务费始终包含在内。满意的话可以留几枚硬币，但从不是必须的。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: true },
        { id: 'b', text: t('Faux', 'False', '错'), correct: false },
      ],
    },
  ],
};

const a2Ecrire: Quiz = {
  id: 'qz_a2_ecrire',
  title: t('Quiz — Écrire au quotidien', 'Quiz — Everyday writing', '测验 — 日常书写'),
  description: t(
    'Messages, carte postale, lettre sur feuille A4 et formulaires administratifs.',
    'Messages, postcards, a letter on an A4 sheet and official forms.',
    '短信、明信片、A4 纸书信与行政表格。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'ae1',
      kind: 'single',
      points: 1,
      prompt: t('Sur une lettre, où placez-vous vos propres coordonnées ?', 'On a letter, where do you put your own details?', '在信纸上，你自己的信息放在哪里？'),
      explanation: t(
        'En haut à gauche. Celles du destinataire vont à droite et un peu plus bas : ce décalage est le premier repère d’une lettre bien mise en page.',
        'Top left. The recipient’s go on the right and slightly lower: that offset is the first landmark of a well-laid-out letter.',
        '左上角。收信人的信息放在右侧且略低：这个错落是版式规范的第一标志。',
      ),
      answers: [
        { id: 'a', text: t('En haut à gauche', 'Top left', '左上角'), correct: true },
        { id: 'b', text: t('En haut à droite', 'Top right', '右上角'), correct: false },
        { id: 'c', text: t('En bas à gauche', 'Bottom left', '左下角'), correct: false },
        { id: 'd', text: t('Au centre de la page', 'In the centre of the page', '页面正中'), correct: false },
      ],
    },
    {
      id: 'ae2',
      kind: 'single',
      points: 1,
      prompt: t('Vous avez écrit « Madame la Directrice, ». Que doit contenir la formule de politesse ?', 'You wrote “Madame la Directrice,”. What must the closing formula contain?', '你写了 “Madame la Directrice,”。致意套语必须包含什么？'),
      explanation: t(
        'Exactement le même appel, mot pour mot : « Je vous prie d’agréer, Madame la Directrice, … ». Reprendre un titre différent est l’erreur la plus sanctionnée.',
        'Exactly the same greeting, word for word: “Je vous prie d’agréer, Madame la Directrice, …”. Using a different title is the most penalised mistake.',
        '一字不差地重复同样的称呼：“Je vous prie d’agréer, Madame la Directrice, ……”。换成别的头衔是扣分最重的错误。',
      ),
      answers: [
        { id: 'a', text: t('Le même appel, mot pour mot', 'The same greeting, word for word', '一字不差的同一称呼'), correct: true },
        { id: 'b', text: t('Simplement « Madame »', 'Simply “Madame”', '只写 “Madame”'), correct: false },
        { id: 'c', text: t('Le nom de famille de la personne', 'The person’s surname', '对方的姓氏'), correct: false },
        { id: 'd', text: t('Rien : la formule se suffit à elle-même', 'Nothing: the formula stands alone', '什么都不用：套语自成一体'), correct: false },
      ],
    },
    {
      id: 'ae3',
      kind: 'single',
      points: 1,
      prompt: t('Sur un formulaire, que demande la case « NOM » ?', 'On a form, what does the “NOM” box ask for?', '表格上的 “NOM” 栏要求填什么？'),
      explanation: t(
        'Le nom de famille, en majuscules. Le prénom a sa propre case. Se tromper inverse votre identité dans tout le dossier.',
        'The surname, in capitals. The first name has its own box. Getting it wrong flips your identity across the whole file.',
        '姓氏，用大写。名字有单独的栏。填错会让整份材料的身份颠倒。',
      ),
      answers: [
        { id: 'a', text: t('Le nom de famille', 'The surname', '姓氏'), correct: true },
        { id: 'b', text: t('Le prénom', 'The first name', '名字'), correct: false },
        { id: 'c', text: t('Le nom complet', 'The full name', '全名'), correct: false },
        { id: 'd', text: t('Le nom d’usage du conjoint', 'The spouse’s used name', '配偶的惯用姓'), correct: false },
      ],
    },
    {
      id: 'ae4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles formules conviennent à un collègue qu’on connaît peu ?', 'Which phrases suit a colleague you barely know?', '哪些说法适合用于不太熟的同事？'),
      explanation: t(
        '« Bonne journée » et « Cordialement » conviennent partout. « Bises » et « Je t’embrasse » se réservent aux proches et mettent mal à l’aise au travail.',
        '“Bonne journée” and “Cordialement” work everywhere. “Bises” and “Je t’embrasse” are for close people and make things awkward at work.',
        '“Bonne journée” 和 “Cordialement” 到处都合适。“Bises” 和 “Je t’embrasse” 只用于亲近的人，用在职场会让人尴尬。',
      ),
      answers: [
        { id: 'a', text: t('Bonne journée', 'Bonne journée', 'Bonne journée'), correct: true },
        { id: 'b', text: t('Cordialement', 'Cordialement', 'Cordialement'), correct: true },
        { id: 'c', text: t('Bises', 'Bises', 'Bises'), correct: false },
        { id: 'd', text: t('Je t’embrasse', 'Je t’embrasse', 'Je t’embrasse'), correct: false },
      ],
    },
    {
      id: 'ae5',
      kind: 'single',
      points: 1,
      prompt: t('Sur une enveloppe, où se place le code postal ?', 'On an envelope, where does the postcode go?', '在信封上，邮政编码写在哪里？'),
      explanation: t(
        'Avant la ville, sur la même ligne : « 75011 Paris ». Cinq chiffres, sans espace au milieu.',
        'Before the town, on the same line: “75011 Paris”. Five digits, with no space in the middle.',
        '写在城市名之前，同一行：“75011 Paris”。五位数字，中间不空格。',
      ),
      answers: [
        { id: 'a', text: t('Avant la ville, sur la même ligne', 'Before the town, on the same line', '城市名之前，同一行'), correct: true },
        { id: 'b', text: t('Après la ville', 'After the town', '城市名之后'), correct: false },
        { id: 'c', text: t('Sur une ligne séparée', 'On a separate line', '单独一行'), correct: false },
        { id: 'd', text: t('En haut à droite, sous le timbre', 'Top right, under the stamp', '右上角，邮票下方'), correct: false },
      ],
    },
    {
      id: 'ae6',
      kind: 'boolean',
      points: 1,
      prompt: t('« Rayer la mention inutile » veut dire barrer ce qui ne s’applique pas.', '“Rayer la mention inutile” means crossing out what does not apply.', '“Rayer la mention inutile” 意思是划掉不适用的部分。'),
      explanation: t(
        'Vrai. On barre l’option qui ne vous concerne pas, par exemple dans « Monsieur / Madame ».',
        'True. You cross out the option that does not concern you, for instance in “Monsieur / Madame”.',
        '对。划掉与你无关的选项，例如在 “Monsieur / Madame” 中。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: true },
        { id: 'b', text: t('Faux', 'False', '错'), correct: false },
      ],
    },
  ],
};

const b1Pronoms: Quiz = {
  id: 'qz_b1_pronoms',
  title: t('Quiz — Les pronoms', 'Quiz — Pronouns', '测验 — 代词'),
  description: t(
    'Pronoms directs et indirects, y et en, pronoms relatifs.',
    'Direct and indirect pronouns, y and en, relative pronouns.',
    '直接与间接宾语代词、y 与 en、关系代词。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'bp1',
      kind: 'single',
      points: 1,
      prompt: t('Complétez : « Je téléphone à ma sœur. → Je … téléphone. »', 'Complete: “Je téléphone à ma sœur. → Je … téléphone.”', '填空：“Je téléphone à ma sœur. → Je … téléphone.”'),
      explanation: t(
        'On téléphone **à** quelqu’un : le complément est indirect, donc « lui », au masculin comme au féminin.',
        'You phone **à** someone: the complement is indirect, so “lui”, for a man and a woman alike.',
        '“téléphoner à” 某人：这是间接补语，所以用 “lui”，男女通用。',
      ),
      answers: [
        { id: 'a', text: t('lui', 'lui', 'lui'), correct: true },
        { id: 'b', text: t('la', 'la', 'la'), correct: false },
        { id: 'c', text: t('elle', 'elle', 'elle'), correct: false },
        { id: 'd', text: t('leur', 'leur', 'leur'), correct: false },
      ],
    },
    {
      id: 'bp2',
      kind: 'single',
      points: 1,
      prompt: t('« Tu as besoin de mon aide ? » — Quelle réponse est correcte ?', '“Tu as besoin de mon aide ?” — Which answer is correct?', '“Tu as besoin de mon aide ?” —— 哪个回答正确？'),
      explanation: t(
        'Avoir besoin **de** quelque chose : la préposition est « de », donc le pronom est « en ».',
        'To need **de** something: the preposition is “de”, so the pronoun is “en”.',
        '“avoir besoin de” 某物：介词是 de，所以用代词 en。',
      ),
      answers: [
        { id: 'a', text: t('Oui, j’en ai besoin.', 'Oui, j’en ai besoin.', 'Oui, j’en ai besoin.'), correct: true },
        { id: 'b', text: t('Oui, j’y ai besoin.', 'Oui, j’y ai besoin.', 'Oui, j’y ai besoin.'), correct: false },
        { id: 'c', text: t('Oui, je la ai besoin.', 'Oui, je la ai besoin.', 'Oui, je la ai besoin.'), correct: false },
        { id: 'd', text: t('Oui, je lui ai besoin.', 'Oui, je lui ai besoin.', 'Oui, je lui ai besoin.'), correct: false },
      ],
    },
    {
      id: 'bp3',
      kind: 'single',
      points: 1,
      prompt: t('« Le film … je parle sort demain. » Quel relatif ?', '“Le film … je parle sort demain.” Which relative?', '“Le film … je parle sort demain.” 用哪个关系代词？'),
      explanation: t(
        'On parle **de** quelque chose : le « de » impose « dont ». Le test : couper la phrase en deux fait réapparaître la préposition.',
        'You speak **de** something: the “de” forces “dont”. The test: splitting the sentence in two brings the preposition back.',
        '“parler de” 某事：这个 de 决定了要用 dont。检验方法：把句子拆成两半，介词就会重新出现。',
      ),
      answers: [
        { id: 'a', text: t('dont', 'dont', 'dont'), correct: true },
        { id: 'b', text: t('que', 'que', 'que'), correct: false },
        { id: 'c', text: t('qui', 'qui', 'qui'), correct: false },
        { id: 'd', text: t('où', 'où', 'où'), correct: false },
      ],
    },
    {
      id: 'bp4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quels verbes se construisent avec « à » et demandent donc lui ou leur ?', 'Which verbs are built with “à” and therefore need lui or leur?', '哪些动词与 “à” 搭配，因而需要用 lui 或 leur？'),
      explanation: t(
        'Téléphoner, répondre et plaire se construisent avec « à ». Aider prend un complément direct : on dit « je l’aide ».',
        'Téléphoner, répondre and plaire are built with “à”. Aider takes a direct object: you say “je l’aide”.',
        'téléphoner、répondre、plaire 都与 “à” 搭配。aider 则直接带宾语：说 “je l’aide”。',
      ),
      answers: [
        { id: 'a', text: t('téléphoner', 'téléphoner', 'téléphoner'), correct: true },
        { id: 'b', text: t('répondre', 'répondre', 'répondre'), correct: true },
        { id: 'c', text: t('aider', 'aider', 'aider'), correct: false },
        { id: 'd', text: t('plaire', 'plaire', 'plaire'), correct: true },
      ],
    },
    {
      id: 'bp5',
      kind: 'single',
      points: 1,
      prompt: t('« La femme … parle est ma voisine. » Quel relatif ?', '“La femme … parle est ma voisine.” Which relative?', '“La femme … parle est ma voisine.” 用哪个关系代词？'),
      explanation: t(
        'Un verbe conjugué suit immédiatement : c’est donc « qui », le relatif sujet. « Qui » ne s’élide jamais.',
        'A conjugated verb comes straight after: so it is “qui”, the subject relative. “Qui” never elides.',
        '紧跟着一个变位动词：因此用主语关系代词 “qui”。“qui” 从不省音。',
      ),
      answers: [
        { id: 'a', text: t('qui', 'qui', 'qui'), correct: true },
        { id: 'b', text: t('que', 'que', 'que'), correct: false },
        { id: 'c', text: t('dont', 'dont', 'dont'), correct: false },
        { id: 'd', text: t('qu’', 'qu’', 'qu’'), correct: false },
      ],
    },
    {
      id: 'bp6',
      kind: 'boolean',
      points: 1,
      prompt: t('Le pronom « y » peut remplacer une personne.', 'The pronoun “y” can replace a person.', '代词 “y” 可以替代人。'),
      explanation: t(
        'Faux. « Y » remplace un lieu ou une chose introduite par « à ». Pour une personne, on garde « à lui », « à elle », ou on emploie lui et leur.',
        'False. “Y” replaces a place or a thing introduced by “à”. For a person you keep “à lui”, “à elle”, or use lui and leur.',
        '错。“y” 替代由 “à” 引出的地点或事物。若是人，则保留 “à lui”“à elle”，或使用 lui 和 leur。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: false },
        { id: 'b', text: t('Faux', 'False', '错'), correct: true },
      ],
    },
  ],
};

const b1Discours: Quiz = {
  id: 'qz_b1_discours',
  title: t('Quiz — Le discours rapporté', 'Quiz — Reported speech', '测验 — 间接引语'),
  description: t(
    'Concordance des temps, questions rapportées et ordres rapportés.',
    'Sequence of tenses, reported questions and reported orders.',
    '时态呼应、转述疑问句与转述命令。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'bd1',
      kind: 'single',
      points: 1,
      prompt: t('« Je viendrai. » → Il a promis qu’il …', '“Je viendrai.” → Il a promis qu’il …', '“Je viendrai.” → Il a promis qu’il ……'),
      explanation: t(
        'Le verbe introducteur est au passé, donc le futur recule au conditionnel présent : « viendrait ». Ce n’est pas une hypothèse.',
        'The introducing verb is in the past, so the future steps back to the present conditional: “viendrait”. This is not a hypothesis.',
        '引导动词是过去时，因此将来时退为条件式现在时：“viendrait”。这并不是假设。',
      ),
      answers: [
        { id: 'a', text: t('viendrait', 'viendrait', 'viendrait'), correct: true },
        { id: 'b', text: t('viendra', 'viendra', 'viendra'), correct: false },
        { id: 'c', text: t('venait', 'venait', 'venait'), correct: false },
        { id: 'd', text: t('était venu', 'était venu', 'était venu'), correct: false },
      ],
    },
    {
      id: 'bd2',
      kind: 'single',
      points: 1,
      prompt: t('« Tu viens ? » → Il demande …', '“Tu viens ?” → Il demande …', '“Tu viens ?” → Il demande ……'),
      explanation: t(
        'Une question par oui ou non devient « si ». « Est-ce que » disparaît complètement dans une question rapportée.',
        'A yes-or-no question becomes “si”. “Est-ce que” disappears completely in a reported question.',
        '是非问句变成 “si”。“est-ce que” 在转述疑问句中完全消失。',
      ),
      answers: [
        { id: 'a', text: t('… si je viens', '… si je viens', '……si je viens'), correct: true },
        { id: 'b', text: t('… est-ce que je viens', '… est-ce que je viens', '……est-ce que je viens'), correct: false },
        { id: 'c', text: t('… que je viens', '… que je viens', '……que je viens'), correct: false },
        { id: 'd', text: t('… ce que je viens', '… ce que je viens', '……ce que je viens'), correct: false },
      ],
    },
    {
      id: 'bd3',
      kind: 'single',
      points: 1,
      prompt: t('« Attends-moi ! » → Elle m’a dit …', '“Attends-moi !” → Elle m’a dit …', '“Attends-moi !” → Elle m’a dit ……'),
      explanation: t(
        'Un ordre rapporté prend « de » suivi de l’infinitif. L’impératif ne survit jamais au discours indirect.',
        'A reported order takes “de” followed by the infinitive. The imperative never survives indirect speech.',
        '转述命令用 “de” 加不定式。命令式在间接引语中绝不保留。',
      ),
      answers: [
        { id: 'a', text: t('… de l’attendre', '… de l’attendre', '……de l’attendre'), correct: true },
        { id: 'b', text: t('… que je l’attends', '… que je l’attends', '……que je l’attends'), correct: false },
        { id: 'c', text: t('… attends-la', '… attends-la', '……attends-la'), correct: false },
        { id: 'd', text: t('… si je l’attends', '… si je l’attends', '……si je l’attends'), correct: false },
      ],
    },
    {
      id: 'bd4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quels temps reculent quand le verbe introducteur est au passé ?', 'Which tenses step back when the introducing verb is in the past?', '当引导动词是过去时，哪些时态会后退？'),
      explanation: t(
        'Le présent devient imparfait, le passé composé devient plus-que-parfait, le futur devient conditionnel. L’imparfait, lui, ne bouge plus.',
        'The present becomes imperfect, the passé composé becomes pluperfect, the future becomes conditional. The imperfect no longer moves.',
        '现在时变未完成过去时，复合过去时变愈过去时，将来时变条件式。未完成过去时则不再变化。',
      ),
      answers: [
        { id: 'a', text: t('le présent', 'the present', '现在时'), correct: true },
        { id: 'b', text: t('le passé composé', 'the passé composé', '复合过去时'), correct: true },
        { id: 'c', text: t('le futur simple', 'the simple future', '简单将来时'), correct: true },
        { id: 'd', text: t('l’imparfait', 'the imperfect', '未完成过去时'), correct: false },
      ],
    },
    {
      id: 'bd5',
      kind: 'single',
      points: 1,
      prompt: t('« Qu’est-ce qui ne va pas ? » → Il demande …', '“Qu’est-ce qui ne va pas ?” → Il demande …', '“Qu’est-ce qui ne va pas ?” → Il demande ……'),
      explanation: t(
        '« Qu’est-ce qui » devient « ce qui », parce que l’élément interrogé est sujet du verbe qui suit.',
        '“Qu’est-ce qui” becomes “ce qui”, because the questioned element is the subject of the following verb.',
        '“qu’est-ce qui” 变成 “ce qui”，因为被问的成分是后面动词的主语。',
      ),
      answers: [
        { id: 'a', text: t('… ce qui ne va pas', '… ce qui ne va pas', '……ce qui ne va pas'), correct: true },
        { id: 'b', text: t('… ce que ne va pas', '… ce que ne va pas', '……ce que ne va pas'), correct: false },
        { id: 'c', text: t('… si ne va pas', '… si ne va pas', '……si ne va pas'), correct: false },
        { id: 'd', text: t('… qu’est-ce qui ne va pas', '… qu’est-ce qui ne va pas', '……qu’est-ce qui ne va pas'), correct: false },
      ],
    },
    {
      id: 'bd6',
      kind: 'boolean',
      points: 1,
      prompt: t('« Il dit qu’il viendra » est correct : rien ne recule.', '“Il dit qu’il viendra” is correct: nothing steps back.', '“Il dit qu’il viendra” 是正确的：没有任何后退。'),
      explanation: t(
        'Vrai. Le verbe introducteur est au présent : la concordance des temps ne s’applique pas. Le futur reste futur.',
        'True. The introducing verb is in the present: the sequence of tenses does not apply. The future stays future.',
        '对。引导动词是现在时：时态呼应不适用。将来时保持将来时。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: true },
        { id: 'b', text: t('Faux', 'False', '错'), correct: false },
      ],
    },
  ],
};

const b2Presse: Quiz = {
  id: 'qz_b2_presse',
  title: t('Quiz — Lire la presse', 'Quiz — Reading the press', '测验 — 报刊阅读'),
  description: t(
    'Anatomie d’un article, langue des titres et repérage du point de vue.',
    'The anatomy of an article, the language of headlines and spotting the angle.',
    '报道的构造、标题的语言，以及立场的识别。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'bs1',
      kind: 'single',
      points: 1,
      prompt: t('Que signifie le titre « Le groupe supprimerait 400 postes » ?', 'What does the headline “Le groupe supprimerait 400 postes” mean?', '标题 “Le groupe supprimerait 400 postes” 是什么意思？'),
      explanation: t(
        'Le conditionnel signale que l’information n’est pas confirmée. Le journal rapporte une source unique et refuse d’en garantir l’exactitude.',
        'The conditional signals that the information is not confirmed. The paper is reporting a single source and declines to vouch for it.',
        '条件式表明信息尚未证实。报纸转述的是单一来源，不为其准确性背书。',
      ),
      answers: [
        { id: 'a', text: t('L’information n’est pas confirmée', 'The information is not confirmed', '信息尚未证实'), correct: true },
        { id: 'b', text: t('La suppression est déjà effective', 'The cuts have already happened', '裁员已经实施'), correct: false },
        { id: 'c', text: t('C’est une hypothèse du journaliste', 'It is the journalist’s own hypothesis', '这是记者本人的假设'), correct: false },
        { id: 'd', text: t('La décision sera prise demain', 'The decision will be taken tomorrow', '决定将于明天作出'), correct: false },
      ],
    },
    {
      id: 'bs2',
      kind: 'single',
      points: 1,
      prompt: t('Comment s’appelle le paragraphe en gras placé sous le titre ?', 'What is the bold paragraph under the headline called?', '标题下方那段加粗文字叫什么？'),
      explanation: t(
        'Le chapeau. Il répond déjà aux questions qui, quoi, où et quand : beaucoup de questions d’examen se règlent en le lisant seul.',
        'Le chapeau. It already answers who, what, where and when: many exam questions are settled by reading it alone.',
        '叫 le chapeau。它已经回答了谁、什么、何地、何时：许多考题仅读这一段就能作答。',
      ),
      answers: [
        { id: 'a', text: t('le chapeau', 'le chapeau', 'le chapeau'), correct: true },
        { id: 'b', text: t('l’attaque', 'l’attaque', 'l’attaque'), correct: false },
        { id: 'c', text: t('la chute', 'la chute', 'la chute'), correct: false },
        { id: 'd', text: t('l’encadré', 'l’encadré', 'l’encadré'), correct: false },
      ],
    },
    {
      id: 'bs3',
      kind: 'single',
      points: 1,
      prompt: t('Que suggère le verbe « prétendre » dans un article ?', 'What does the verb “prétendre” suggest in an article?', '报道中的动词 “prétendre” 暗示什么？'),
      explanation: t(
        'Que le journal doute du propos rapporté. Un verbe neutre serait « déclarer » ou « indiquer » ; « expliquer » serait au contraire favorable.',
        'That the paper doubts the reported words. A neutral verb would be “déclarer” or “indiquer”; “expliquer” would be favourable.',
        '表明报纸对所转述的话存疑。中性的动词是 “déclarer” 或 “indiquer”；“expliquer” 则偏正面。',
      ),
      answers: [
        { id: 'a', text: t('Le journal doute du propos', 'The paper doubts the statement', '报纸对该说法存疑'), correct: true },
        { id: 'b', text: t('Le propos est confirmé', 'The statement is confirmed', '该说法已获证实'), correct: false },
        { id: 'c', text: t('Le journal reste neutre', 'The paper stays neutral', '报纸保持中立'), correct: false },
        { id: 'd', text: t('Le propos est une citation exacte', 'The statement is a word-for-word quote', '该说法是原话引用'), correct: false },
      ],
    },
    {
      id: 'bs4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles zones lit-on d’abord pour comprendre un article en quinze secondes ?', 'Which areas do you read first to grasp an article in fifteen seconds?', '要在十五秒内看懂一篇报道，先读哪些区域？'),
      explanation: t(
        'Le titre, le chapeau et l’encadré de chiffres donnent le fait et les données. Le corps ne sert ensuite qu’à vérifier ce qu’on a compris.',
        'The headline, the standfirst and the figures sidebar give the fact and the data. The body then only serves to check what you understood.',
        '标题、导语和数字边栏给出事实与数据。正文之后只用来核对你的理解。',
      ),
      answers: [
        { id: 'a', text: t('le titre', 'the headline', '标题'), correct: true },
        { id: 'b', text: t('le chapeau', 'the standfirst', '导语'), correct: true },
        { id: 'c', text: t('l’encadré de chiffres', 'the figures sidebar', '数字边栏'), correct: true },
        { id: 'd', text: t('les derniers paragraphes', 'the final paragraphs', '最后几段'), correct: false },
      ],
    },
    {
      id: 'bs5',
      kind: 'single',
      points: 1,
      prompt: t('Que veut dire « pyramide inversée » en presse ?', 'What does “pyramide inversée” mean in journalism?', '新闻中的 “pyramide inversée” 是什么意思？'),
      explanation: t(
        'L’information la plus importante vient en premier, la moins importante en dernier. On peut couper la fin d’un article sans rien perdre d’essentiel.',
        'The most important information comes first, the least important last. You can cut the end of an article without losing anything essential.',
        '最重要的信息放在最前，最次要的放在最后。砍掉文章结尾不会丢失任何要点。',
      ),
      answers: [
        { id: 'a', text: t('L’essentiel d’abord, les détails ensuite', 'The essentials first, the details after', '要点在前，细节在后'), correct: true },
        { id: 'b', text: t('La conclusion avant l’introduction', 'The conclusion before the introduction', '结论在引言之前'), correct: false },
        { id: 'c', text: t('Les paragraphes de plus en plus longs', 'Paragraphs getting longer and longer', '段落越来越长'), correct: false },
        { id: 'd', text: t('Le titre répété à la fin', 'The headline repeated at the end', '标题在结尾重复'), correct: false },
      ],
    },
    {
      id: 'bs6',
      kind: 'boolean',
      points: 1,
      prompt: t('Un titre au présent parle toujours d’un événement en cours.', 'A headline in the present always refers to an ongoing event.', '现在时的标题总是指正在发生的事件。'),
      explanation: t(
        'Faux. La presse emploie le présent de narration pour des faits passés : « Un incendie ravage une usine » raconte un incendie de la veille.',
        'False. The press uses the narrative present for past events: “Un incendie ravage une usine” describes a fire from the day before.',
        '错。报刊用历史现在时讲述已发生的事：“Un incendie ravage une usine” 说的是前一天的火灾。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: false },
        { id: 'b', text: t('Faux', 'False', '错'), correct: true },
      ],
    },
  ],
};

const b2Relief: Quiz = {
  id: 'qz_b2_relief',
  title: t('Quiz — Le relief de la phrase', 'Quiz — Sentence relief', '测验 — 句子的起伏'),
  description: t(
    'Mise en relief, voix passive et ses remplaçants, style nominal.',
    'Cleft structures, the passive and its stand-ins, the nominal style.',
    '强调句、被动语态及其替代形式、名词化风格。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'br1',
      kind: 'single',
      points: 1,
      prompt: t('Complétez : « C’est Paul … a décidé. »', 'Complete: “C’est Paul … a décidé.”', '填空：“C’est Paul … a décidé.”'),
      explanation: t(
        'Paul est le sujet du verbe « a décidé » : on emploie « qui ». Le choix ne dépend jamais du sens, seulement de la fonction.',
        'Paul is the subject of the verb “a décidé”: you use “qui”. The choice never depends on meaning, only on function.',
        'Paul 是动词 “a décidé” 的主语：所以用 “qui”。这个选择从不取决于意思，只取决于语法功能。',
      ),
      answers: [
        { id: 'a', text: t('qui', 'qui', 'qui'), correct: true },
        { id: 'b', text: t('que', 'que', 'que'), correct: false },
        { id: 'c', text: t('dont', 'dont', 'dont'), correct: false },
        { id: 'd', text: t('lequel', 'lequel', 'lequel'), correct: false },
      ],
    },
    {
      id: 'br2',
      kind: 'single',
      points: 1,
      prompt: t('Comment rendre « I was told that the meeting was cancelled » ?', 'How do you render “I was told that the meeting was cancelled”?', '“I was told that the meeting was cancelled” 该怎么表达？'),
      explanation: t(
        'Le français passe par « on » : « On m’a dit que la réunion était annulée. » Un complément indirect ne peut jamais devenir sujet d’un passif.',
        'French goes through “on”: “On m’a dit que la réunion était annulée.” An indirect object can never become the subject of a passive.',
        '法语用 “on”：“On m’a dit que la réunion était annulée.” 间接宾语永远不能成为被动句的主语。',
      ),
      answers: [
        { id: 'a', text: t('On m’a dit que la réunion était annulée.', 'On m’a dit que la réunion était annulée.', 'On m’a dit que la réunion était annulée.'), correct: true },
        { id: 'b', text: t('J’ai été dit que la réunion était annulée.', 'J’ai été dit que la réunion était annulée.', 'J’ai été dit que la réunion était annulée.'), correct: false },
        { id: 'c', text: t('Il m’est dit que la réunion était annulée.', 'Il m’est dit que la réunion était annulée.', 'Il m’est dit que la réunion était annulée.'), correct: false },
        { id: 'd', text: t('Je me suis dit la réunion annulée.', 'Je me suis dit la réunion annulée.', 'Je me suis dit la réunion annulée.'), correct: false },
      ],
    },
    {
      id: 'br3',
      kind: 'single',
      points: 1,
      prompt: t('Quel nom correspond au verbe « fermer » ?', 'Which noun corresponds to the verb “fermer”?', '动词 “fermer” 对应哪个名词？'),
      explanation: t(
        '« La fermeture », féminin comme tous les noms en -ure. Le suffixe donne le genre presque sans exception.',
        '“La fermeture”, feminine like all nouns in -ure. The suffix gives the gender almost without exception.',
        '是 “la fermeture”，与所有 -ure 名词一样是阴性。后缀几乎无例外地决定性别。',
      ),
      answers: [
        { id: 'a', text: t('la fermeture', 'la fermeture', 'la fermeture'), correct: true },
        { id: 'b', text: t('le fermement', 'le fermement', 'le fermement'), correct: false },
        { id: 'c', text: t('la fermation', 'la fermation', 'la fermation'), correct: false },
        { id: 'd', text: t('le fermage', 'le fermage', 'le fermage'), correct: false },
      ],
    },
    {
      id: 'br4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quels noms sont féminins ?', 'Which nouns are feminine?', '哪些名词是阴性？'),
      explanation: t(
        'Les noms en -tion, -ure et -ée sont féminins ; ceux en -ment et -age sont masculins. C’est l’une des rares règles de genre presque sans exception.',
        'Nouns in -tion, -ure and -ée are feminine; those in -ment and -age are masculine. It is one of the few gender rules with almost no exceptions.',
        '以 -tion、-ure、-ée 结尾的名词是阴性；以 -ment、-age 结尾的是阳性。这是少数几乎没有例外的性别规则之一。',
      ),
      answers: [
        { id: 'a', text: t('augmentation', 'augmentation', 'augmentation'), correct: true },
        { id: 'b', text: t('ouverture', 'ouverture', 'ouverture'), correct: true },
        { id: 'c', text: t('changement', 'changement', 'changement'), correct: false },
        { id: 'd', text: t('arrivée', 'arrivée', 'arrivée'), correct: true },
      ],
    },
    {
      id: 'br5',
      kind: 'single',
      points: 1,
      prompt: t('Quelle phrase est la plus naturelle pour une règle générale ?', 'Which sentence is the most natural for a general rule?', '表达普遍规律时，哪句最自然？'),
      explanation: t(
        'La tournure avec « se » décrit ce qui se fait normalement, sans nommer d’auteur. C’est la forme des recettes et des modes d’emploi.',
        'The “se” turn describes what is normally done, without naming a doer. It is the form used in recipes and instructions.',
        '“se” 结构描述通常的做法，不点明施动者。这是菜谱和说明书使用的形式。',
      ),
      answers: [
        { id: 'a', text: t('Ce plat se mange froid.', 'Ce plat se mange froid.', 'Ce plat se mange froid.'), correct: true },
        { id: 'b', text: t('Ce plat est mangé froid.', 'Ce plat est mangé froid.', 'Ce plat est mangé froid.'), correct: false },
        { id: 'c', text: t('On mange ce plat par les gens froid.', 'On mange ce plat par les gens froid.', 'On mange ce plat par les gens froid.'), correct: false },
        { id: 'd', text: t('Ce plat a été mangé froid.', 'Ce plat a été mangé froid.', 'Ce plat a été mangé froid.'), correct: false },
      ],
    },
    {
      id: 'br6',
      kind: 'boolean',
      points: 1,
      prompt: t('« C’est eux qui décident » est acceptable à l’oral.', '“C’est eux qui décident” is acceptable in speech.', '“C’est eux qui décident” 在口语中可以接受。'),
      explanation: t(
        'Vrai. « Ce sont » appartient au registre soutenu et à l’écrit formel ; à l’oral, « c’est » reste au singulier même devant un pluriel.',
        'True. “Ce sont” belongs to the formal register and formal writing; in speech “c’est” stays singular even before a plural.',
        '对。“ce sont” 属于正式语体和正式书面语；口语中即使后面是复数，“c’est” 也保持单数。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: true },
        { id: 'b', text: t('Faux', 'False', '错'), correct: false },
      ],
    },
  ],
};

const c1Lexique: Quiz = {
  id: 'qz_c1_lexique',
  title: t('Quiz — Le mot juste', 'Quiz — The right word', '测验 — 用词精准'),
  description: t(
    'Nuances entre synonymes, couples verbe-nom et faux amis tenaces.',
    'Shades between synonyms, verb-noun collocations and stubborn false friends.',
    '近义词的差别、动名搭配与顽固的假朋友。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'cl1',
      kind: 'single',
      points: 1,
      prompt: t('Que veut dire « éventuellement » en français ?', 'What does “éventuellement” mean in French?', '法语中 “éventuellement” 是什么意思？'),
      explanation: t(
        '« Le cas échéant, peut-être ». Pour dire « à la fin », le français emploie « finalement » ou « à terme ». Dans un contrat, la confusion change l’engagement pris.',
        '“If the case arises, possibly”. To say “in the end”, French uses “finalement” or “à terme”. In a contract, the confusion changes the commitment made.',
        '意思是“如有必要，也许”。要表达“最终”，法语用 “finalement” 或 “à terme”。在合同中，混淆会改变所作的承诺。',
      ),
      answers: [
        { id: 'a', text: t('Le cas échéant, peut-être', 'If the case arises, possibly', '如有必要，也许'), correct: true },
        { id: 'b', text: t('Finalement, à la fin', 'Eventually, in the end', '最终、到头来'), correct: false },
        { id: 'c', text: t('Certainement', 'Certainly', '肯定地'), correct: false },
        { id: 'd', text: t('Régulièrement', 'Regularly', '定期地'), correct: false },
      ],
    },
    {
      id: 'cl2',
      kind: 'single',
      points: 1,
      prompt: t('Quel verbe va avec « une décision » ?', 'Which verb goes with “une décision”?', '哪个动词与 “une décision” 搭配？'),
      explanation: t(
        'On **prend** une décision. « Faire une décision » est un calque de l’anglais, immédiatement repéré à l’écrit comme à l’oral.',
        'You **take** a decision. “Faire une décision” is a calque from English, spotted at once in writing and in speech.',
        '决定是 **prendre** 的。“faire une décision” 是英语直译，无论书面还是口语都一眼被识破。',
      ),
      answers: [
        { id: 'a', text: t('prendre', 'prendre', 'prendre'), correct: true },
        { id: 'b', text: t('faire', 'faire', 'faire'), correct: false },
        { id: 'c', text: t('donner', 'donner', 'donner'), correct: false },
        { id: 'd', text: t('mettre', 'mettre', 'mettre'), correct: false },
      ],
    },
    {
      id: 'cl3',
      kind: 'single',
      points: 1,
      prompt: t('Quel mot désigne un obstacle qu’on ne voit pas venir ?', 'Which word means an obstacle you do not see coming?', '哪个词指“看不见的障碍”？'),
      explanation: t(
        '« Un écueil », littéralement un rocher sous la surface. Le mot est littéraire : très efficace à l’écrit, déplacé dans une conversation.',
        '“Un écueil”, literally a rock below the surface. The word is literary: very effective in writing, out of place in conversation.',
        '是 “un écueil”，字面意思是水面下的礁石。这个词偏文雅：书面表达很有力，用在对话中则不合适。',
      ),
      answers: [
        { id: 'a', text: t('un écueil', 'un écueil', 'un écueil'), correct: true },
        { id: 'b', text: t('un souci', 'un souci', 'un souci'), correct: false },
        { id: 'c', text: t('un problème', 'un problème', 'un problème'), correct: false },
        { id: 'd', text: t('une difficulté', 'une difficulté', 'une difficulté'), correct: false },
      ],
    },
    {
      id: 'cl4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles associations existent en français ?', 'Which pairings exist in French?', '哪些搭配在法语中成立？'),
      explanation: t(
        'On court un risque, on commet une erreur, on tient compte de quelque chose. En revanche « prendre une erreur » n’existe pas.',
        'You run a risk, commit a mistake, take account of something. “Prendre une erreur”, however, does not exist.',
        '风险要 courir，错误要 commettre，某事要 tenir compte de。而 “prendre une erreur” 并不存在。',
      ),
      answers: [
        { id: 'a', text: t('courir un risque', 'courir un risque', 'courir un risque'), correct: true },
        { id: 'b', text: t('commettre une erreur', 'commettre une erreur', 'commettre une erreur'), correct: true },
        { id: 'c', text: t('prendre une erreur', 'prendre une erreur', 'prendre une erreur'), correct: false },
        { id: 'd', text: t('tenir compte de', 'tenir compte de', 'tenir compte de'), correct: true },
      ],
    },
    {
      id: 'cl5',
      kind: 'single',
      points: 1,
      prompt: t('Que veut dire « assister à une réunion » ?', 'What does “assister à une réunion” mean?', '“assister à une réunion” 是什么意思？'),
      explanation: t(
        'Y être présent. Pour dire « aider quelqu’un », on emploie « aider » ou « assister quelqu’un », avec un complément direct et sans « à ».',
        'To be present at it. To say “help someone”, you use “aider” or “assister quelqu’un”, with a direct object and no “à”.',
        '指出席会议。要表达“帮助某人”，用 “aider” 或 “assister quelqu’un”，直接带宾语，不加 “à”。',
      ),
      answers: [
        { id: 'a', text: t('Y être présent', 'To be present at it', '出席会议'), correct: true },
        { id: 'b', text: t('Aider à l’organiser', 'To help organise it', '协助组织会议'), correct: false },
        { id: 'c', text: t('La diriger', 'To chair it', '主持会议'), correct: false },
        { id: 'd', text: t('La reporter', 'To postpone it', '推迟会议'), correct: false },
      ],
    },
    {
      id: 'cl6',
      kind: 'boolean',
      points: 1,
      prompt: t('« Actuellement » et « en réalité » veulent dire la même chose.', '“Actuellement” and “en réalité” mean the same thing.', '“actuellement” 和 “en réalité” 意思相同。'),
      explanation: t(
        'Faux. « Actuellement » veut dire « en ce moment ». Pour « en réalité », on emploie « en fait » ou « en réalité ».',
        'False. “Actuellement” means “at the moment”. For “actually”, you use “en fait” or “en réalité”.',
        '错。“actuellement” 意为“此刻、目前”。要表达“实际上”，用 “en fait” 或 “en réalité”。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: false },
        { id: 'b', text: t('Faux', 'False', '错'), correct: true },
      ],
    },
  ],
};

const c1Debat: Quiz = {
  id: 'qz_c1_debat',
  title: t('Quiz — Débattre et convaincre', 'Quiz — Debating and convincing', '测验 — 辩论与说服'),
  description: t(
    'Structure d’une intervention, réponse à une objection, prise de parole.',
    'The structure of an intervention, answering an objection, taking the floor.',
    '发言的结构、回应异议、争取发言权。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'cd1',
      kind: 'single',
      points: 1,
      prompt: t('Par quoi commence une intervention réussie de deux minutes ?', 'How does a successful two-minute intervention start?', '一场成功的两分钟发言从什么开始？'),
      explanation: t(
        'Par une reformulation de la question. Elle prouve qu’on a écouté, donne le temps de réfléchir, et déplace déjà le débat sur son terrain.',
        'With a reframing of the question. It proves you listened, buys thinking time, and already shifts the debate onto your ground.',
        '从复述问题开始。它既证明你在听，又争取到思考时间，还已经把辩论拉到你的场地上。',
      ),
      answers: [
        { id: 'a', text: t('Une reformulation de la question', 'A reframing of the question', '复述问题'), correct: true },
        { id: 'b', text: t('Le premier argument, sans attendre', 'The first argument, straight away', '不等不靠，直接抛出第一个论点'), correct: false },
        { id: 'c', text: t('Une anecdote personnelle', 'A personal anecdote', '一段个人轶事'), correct: false },
        { id: 'd', text: t('Une objection à l’orateur précédent', 'An objection to the previous speaker', '对上一位发言者的反驳'), correct: false },
      ],
    },
    {
      id: 'cd2',
      kind: 'single',
      points: 1,
      prompt: t('Que signifie « Encore faut-il que … » dans un débat ?', 'What does “Encore faut-il que …” mean in a debate?', '辩论中的 “Encore faut-il que ……” 是什么意思？'),
      explanation: t(
        'On accepte le principe, mais on pose une condition qui, en pratique, bloque tout. C’est une objection élégante et très difficile à contrer.',
        'You accept the principle but set a condition that, in practice, blocks everything. It is an elegant objection and very hard to counter.',
        '接受原则，却提出一个在实践中足以卡死一切的条件。这是一种优雅且极难反驳的异议。',
      ),
      answers: [
        { id: 'a', text: t('J’accepte le principe, mais je pose une condition', 'I accept the principle but set a condition', '我接受原则，但提出一个条件'), correct: true },
        { id: 'b', text: t('Je suis entièrement d’accord', 'I agree completely', '我完全同意'), correct: false },
        { id: 'c', text: t('Je refuse catégoriquement', 'I refuse outright', '我断然拒绝'), correct: false },
        { id: 'd', text: t('Je demande la parole', 'I am asking for the floor', '我请求发言'), correct: false },
      ],
    },
    {
      id: 'cd3',
      kind: 'single',
      points: 1,
      prompt: t('On vous interrompt pour demander le budget. Que répondez-vous pour garder la parole ?', 'You are interrupted with a question about the budget. What do you say to keep the floor?', '有人插话问预算。你说什么来守住发言权？'),
      explanation: t(
        '« J’y viens » promet d’y répondre sans céder la parole. La formule est brève, polie, et fonctionne aussi bien en réunion qu’à l’examen.',
        '“J’y viens” promises to get there without giving up the floor. The phrase is short, polite, and works in a meeting as well as in an exam.',
        '“J’y viens” 承诺稍后回应，同时不交出发言权。这句话简短、礼貌，在会议和考试中都管用。',
      ),
      answers: [
        { id: 'a', text: t('J’y viens.', 'J’y viens.', 'J’y viens.'), correct: true },
        { id: 'b', text: t('Ce n’est pas la question.', 'Ce n’est pas la question.', 'Ce n’est pas la question.'), correct: false },
        { id: 'c', text: t('Je ne sais pas.', 'Je ne sais pas.', 'Je ne sais pas.'), correct: false },
        { id: 'd', text: t('Laissez-moi parler.', 'Laissez-moi parler.', 'Laissez-moi parler.'), correct: false },
      ],
    },
    {
      id: 'cd4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles formules permettent d’entrer poliment dans une discussion ?', 'Which phrases let you enter a discussion politely?', '哪些说法能礼貌地切入讨论？'),
      explanation: t(
        'Les trois premières annoncent une intervention brève ou se raccrochent au propos en cours. « Vous avez tort » attaque la personne et ferme l’échange.',
        'The first three announce a short intervention or hook onto what is being said. “Vous avez tort” attacks the person and closes the exchange down.',
        '前三种要么预告只说几句，要么接住正在讨论的内容。“Vous avez tort” 攻击的是人，会让交流关闭。',
      ),
      answers: [
        { id: 'a', text: t('Juste un mot là-dessus', 'Juste un mot là-dessus', 'Juste un mot là-dessus'), correct: true },
        { id: 'b', text: t('Si je peux me permettre', 'Si je peux me permettre', 'Si je peux me permettre'), correct: true },
        { id: 'c', text: t('Pour rebondir sur ce que vous dites', 'Pour rebondir sur ce que vous dites', 'Pour rebondir sur ce que vous dites'), correct: true },
        { id: 'd', text: t('Vous avez tort', 'Vous avez tort', 'Vous avez tort'), correct: false },
      ],
    },
    {
      id: 'cd5',
      kind: 'single',
      points: 1,
      prompt: t('Pourquoi éviter « Je ne suis pas d’accord » dans un débat soutenu ?', 'Why avoid “Je ne suis pas d’accord” in a formal debate?', '在正式辩论中为什么要避免说 “Je ne suis pas d’accord”？'),
      explanation: t(
        'La formule place le désaccord sur les personnes. Mieux vaut viser l’argument : « ce raisonnement suppose que… », « cette lecture néglige… ».',
        'The phrase puts the disagreement on the people. Better to aim at the argument: “ce raisonnement suppose que…”, “cette lecture néglige…”.',
        '这句话把分歧引向个人。更好的做法是针对论点：“ce raisonnement suppose que……”“cette lecture néglige……”。',
      ),
      answers: [
        { id: 'a', text: t('Elle vise la personne au lieu de l’argument', 'It targets the person instead of the argument', '它针对的是人，而不是论点'), correct: true },
        { id: 'b', text: t('Elle est grammaticalement fautive', 'It is grammatically wrong', '它语法上有错'), correct: false },
        { id: 'c', text: t('Elle appartient au registre familier', 'It belongs to the colloquial register', '它属于口语体'), correct: false },
        { id: 'd', text: t('Elle est trop longue à prononcer', 'It takes too long to say', '它说起来太长'), correct: false },
      ],
    },
    {
      id: 'cd6',
      kind: 'boolean',
      points: 1,
      prompt: t('Dans une intervention courte, mieux vaut annoncer deux points que trois.', 'In a short intervention, it is better to announce two points than three.', '在简短发言中，宣布两点比三点更好。'),
      explanation: t(
        'Vrai. Deux points sont tenables en deux minutes ; en annoncer trois oblige presque toujours à bâcler le dernier, ce que le jury remarque.',
        'True. Two points are doable in two minutes; announcing three nearly always forces you to rush the last one, which examiners notice.',
        '对。两分钟内讲两点是可行的；宣布三点几乎总会让最后一点草草收场，而考官看得出来。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: true },
        { id: 'b', text: t('Faux', 'False', '错'), correct: false },
      ],
    },
  ],
};

const c2Stylistique: Quiz = {
  id: 'qz_c2_stylistique',
  title: t('Quiz — Le style', 'Quiz — Style', '测验 — 文体'),
  description: t(
    'Rythme de la phrase, figures de style et signaux d’ironie.',
    'Sentence rhythm, figures of speech and signals of irony.',
    '句子节奏、修辞格与反讽信号。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'cs1',
      kind: 'single',
      points: 1,
      prompt: t('Quel effet produit une suite de groupes de plus en plus courts ?', 'What effect do groups getting shorter and shorter produce?', '意群越来越短会产生什么效果？'),
      explanation: t(
        'Un effet de chute : la contraction serre la phrase et la conclut, souvent avec une pointe d’ironie ou de tragique.',
        'A falling effect: the contraction tightens the sentence and closes it, often with a touch of irony or tragedy.',
        '下坠效果：收缩让句子收紧并收尾，常带一点反讽或悲剧色彩。',
      ),
      answers: [
        { id: 'a', text: t('Un effet de chute, qui conclut', 'A falling effect, which concludes', '下坠感，起到收束作用'), correct: true },
        { id: 'b', text: t('Un effet d’ouverture et de calme', 'An effect of opening and calm', '舒展与平静'), correct: false },
        { id: 'c', text: t('Un effet comique systématique', 'A systematically comic effect', '必然的喜剧效果'), correct: false },
        { id: 'd', text: t('Aucun effet particulier', 'No particular effect', '没有特别效果'), correct: false },
      ],
    },
    {
      id: 'cs2',
      kind: 'single',
      points: 1,
      prompt: t('Comment s’appelle la figure de « ce résultat n’est pas négligeable » ?', 'What is the figure in “ce résultat n’est pas négligeable” called?', '“ce résultat n’est pas négligeable” 用的是什么修辞格？'),
      explanation: t(
        'La litote : on nie le contraire pour affirmer fortement, sans avoir l’air d’insister. Très fréquente dans la presse sérieuse.',
        'Litotes: you deny the opposite in order to assert strongly, without seeming to insist. Very frequent in the serious press.',
        '曲言法：否定反面以强力肯定，却显得不着力。在严肃报刊中极为常见。',
      ),
      answers: [
        { id: 'a', text: t('la litote', 'litotes', '曲言法'), correct: true },
        { id: 'b', text: t('l’hyperbole', 'hyperbole', '夸张'), correct: false },
        { id: 'c', text: t('la métonymie', 'metonymy', '借代'), correct: false },
        { id: 'd', text: t('l’anaphore', 'anaphora', '首语重复'), correct: false },
      ],
    },
    {
      id: 'cs3',
      kind: 'single',
      points: 1,
      prompt: t('Que signalent des guillemets autour d’un seul mot ?', 'What do quotation marks around a single word signal?', '给单个词加引号意味着什么？'),
      explanation: t(
        'Que l’auteur reprend le mot sans l’assumer. C’est le signal d’ironie le plus net de la presse française : le mot dit le contraire de ce qu’il affirme.',
        'That the writer is borrowing the word without standing by it. It is the clearest signal of irony in the French press: the word means the opposite of what it states.',
        '作者借用这个词却不认同它。这是法国报刊中最明确的反讽信号：这个词的实际意思与字面相反。',
      ),
      answers: [
        { id: 'a', text: t('L’auteur reprend le mot sans l’assumer', 'The writer borrows the word without standing by it', '作者借用该词却不认同'), correct: true },
        { id: 'b', text: t('Il s’agit d’une citation exacte', 'It is a word-for-word quotation', '这是原话引用'), correct: false },
        { id: 'c', text: t('Le mot est étranger', 'The word is foreign', '这是外来词'), correct: false },
        { id: 'd', text: t('Le mot est un titre d’ouvrage', 'The word is the title of a work', '这是作品标题'), correct: false },
      ],
    },
    {
      id: 'cs4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quels indices révèlent une intention ironique ?', 'Which clues reveal an ironic intention?', '哪些线索揭示了反讽意图？'),
      explanation: t(
        'Un éloge trop appuyé, un fait qui contredit cet éloge, des guillemets isolés : ce sont les trois signaux les plus fréquents. Une phrase simplement longue n’indique rien.',
        'Praise laid on too thick, a fact contradicting that praise, lone quotation marks: these are the three most frequent signals. A merely long sentence indicates nothing.',
        '过度的褒扬、与褒扬矛盾的事实、孤立的引号：这是最常见的三个信号。仅仅句子长并不说明什么。',
      ),
      answers: [
        { id: 'a', text: t('Un éloge exagéré', 'Exaggerated praise', '夸张的褒扬'), correct: true },
        { id: 'b', text: t('Un fait qui contredit l’éloge', 'A fact that contradicts the praise', '与褒扬矛盾的事实'), correct: true },
        { id: 'c', text: t('Des guillemets autour d’un seul mot', 'Quotation marks around a single word', '给单个词加的引号'), correct: true },
        { id: 'd', text: t('Une phrase longue', 'A long sentence', '一个长句'), correct: false },
      ],
    },
    {
      id: 'cs5',
      kind: 'single',
      points: 1,
      prompt: t('À quoi sert l’anaphore ?', 'What is anaphora for?', '首语重复有什么作用？'),
      explanation: t(
        'À marteler une idée en répétant les mêmes mots en tête de phrase. Elle donne un rythme de discours et transforme un constat en accusation.',
        'To hammer an idea home by repeating the same words at the start of each clause. It gives the rhythm of a speech and turns an observation into an accusation.',
        '通过在每句开头重复相同的词来敲打一个观点。它赋予演讲式的节奏，并把陈述变成指控。',
      ),
      answers: [
        { id: 'a', text: t('Marteler une idée par la répétition en tête de phrase', 'Hammer an idea home by repeating at the start of clauses', '通过句首重复来强化观点'), correct: true },
        { id: 'b', text: t('Opposer deux termes contraires', 'Set two opposite terms against each other', '让两个相反的词对立'), correct: false },
        { id: 'c', text: t('Exagérer volontairement', 'Deliberately exaggerate', '有意夸大'), correct: false },
        { id: 'd', text: t('Nommer une chose par un détail proche', 'Name a thing by a nearby detail', '用相邻细节指代事物'), correct: false },
      ],
    },
    {
      id: 'cs6',
      kind: 'boolean',
      points: 1,
      prompt: t('En français écrit, l’ironie se signale surtout par le ton.', 'In written French, irony is signalled mainly by tone.', '在法语书面语中，反讽主要靠语气来标示。'),
      explanation: t(
        'Faux. À l’écrit il n’y a pas de ton : l’ironie passe par le lexique, les guillemets et l’écart entre l’éloge et le fait rapporté.',
        'False. In writing there is no tone: irony travels through vocabulary, quotation marks and the gap between the praise and the reported fact.',
        '错。书面语没有语气：反讽靠词汇、引号，以及褒扬与所述事实之间的落差来传达。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: false },
        { id: 'b', text: t('Faux', 'False', '错'), correct: true },
      ],
    },
  ],
};

const c2Traduction: Quiz = {
  id: 'qz_c2_traduction',
  title: t('Quiz — Penser en français', 'Quiz — Thinking in French', '测验 — 用法语思考'),
  description: t(
    'Structures propres au français, expressions sans équivalent, réécriture.',
    'Structures specific to French, expressions with no equivalent, rewriting.',
    '法语特有的结构、无对应形式的表达，以及改写。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'ct1',
      kind: 'single',
      points: 1,
      prompt: t('Que veut dire « J’ai failli manquer le train » ?', 'What does “J’ai failli manquer le train” mean?', '“J’ai failli manquer le train” 是什么意思？'),
      explanation: t(
        'Que je ne l’ai pas manqué. « Faillir » énonce toujours ce qui a été évité de justesse : c’est le contresens le plus fréquent à ce niveau.',
        'That I did not miss it. “Faillir” always states what was narrowly avoided: it is the most frequent misreading at this level.',
        '意思是我并没有误车。“faillir” 表达的永远是险些发生却避免了的事：这是这个级别最常见的误解。',
      ),
      answers: [
        { id: 'a', text: t('Je ne l’ai pas manqué, de justesse', 'I did not miss it, only just', '我险些误车，但没有'), correct: true },
        { id: 'b', text: t('Je l’ai manqué', 'I missed it', '我误了车'), correct: false },
        { id: 'c', text: t('Je le manque souvent', 'I often miss it', '我经常误车'), correct: false },
        { id: 'd', text: t('Je vais le manquer', 'I am going to miss it', '我将要误车'), correct: false },
      ],
    },
    {
      id: 'ct2',
      kind: 'single',
      points: 1,
      prompt: t('Quelle version sonne le plus française ?', 'Which version sounds the most French?', '哪个版本听起来最像法语？'),
      explanation: t(
        'Le français nomme la cause et en fait le sujet : la phrase devient plus dense et plus nette. La juxtaposition laisse le lien implicite et paraît faible à l’écrit.',
        'French names the cause and makes it the subject: the sentence becomes denser and sharper. Juxtaposition leaves the link implicit and reads as weak in writing.',
        '法语点明原因并让它充当主语：句子更凝练、更清晰。并列则让关联停留在暗示层面，书面上显得弱。',
      ),
      answers: [
        { id: 'a', text: t('La pluie nous a retenus à la maison.', 'La pluie nous a retenus à la maison.', 'La pluie nous a retenus à la maison.'), correct: true },
        { id: 'b', text: t('Il pleuvait. Nous sommes restés à la maison.', 'Il pleuvait. Nous sommes restés à la maison.', 'Il pleuvait. Nous sommes restés à la maison.'), correct: false },
        { id: 'c', text: t('C’était la pluie et donc nous avons fait rester à la maison.', 'C’était la pluie et donc nous avons fait rester à la maison.', 'C’était la pluie et donc nous avons fait rester à la maison.'), correct: false },
        { id: 'd', text: t('Il y avait de la pluie, donc nous sommes restés.', 'Il y avait de la pluie, donc nous sommes restés.', 'Il y avait de la pluie, donc nous sommes restés.'), correct: false },
      ],
    },
    {
      id: 'ct3',
      kind: 'single',
      points: 1,
      prompt: t('Que veut dire « J’ai eu beau relire le contrat » ?', 'What does “J’ai eu beau relire le contrat” mean?', '“J’ai eu beau relire le contrat” 是什么意思？'),
      explanation: t(
        'Que j’ai relu le contrat sans résultat. « Avoir beau » annonce toujours un effort qui échoue, et la suite de la phrase dit lequel.',
        'That I reread the contract to no avail. “Avoir beau” always announces an effort that fails, and the rest of the sentence says how.',
        '意思是我反复读了合同却毫无收获。“avoir beau” 永远预告一次失败的努力，后半句说明结果。',
      ),
      answers: [
        { id: 'a', text: t('Je l’ai relu, mais sans résultat', 'I reread it, but to no avail', '我读了，但毫无结果'), correct: true },
        { id: 'b', text: t('J’ai aimé le relire', 'I enjoyed rereading it', '我喜欢重读它'), correct: false },
        { id: 'c', text: t('Je l’ai relu longuement et j’ai trouvé', 'I reread it at length and found something', '我细读之后有所发现'), correct: false },
        { id: 'd', text: t('Je vais devoir le relire', 'I will have to reread it', '我将不得不重读'), correct: false },
      ],
    },
    {
      id: 'ct4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quels gestes allègent une phrase qui sent la traduction ?', 'Which moves lighten a sentence that smells of translation?', '哪些动作能让翻译腔的句子变轻？'),
      explanation: t(
        'Mettre le vrai sujet en premier, supprimer les verbes vides et condenser une proposition en groupe nominal allègent la phrase. Ajouter des propositions relatives l’alourdit encore.',
        'Putting the real subject first, deleting empty verbs and condensing a clause into a noun group all lighten the sentence. Adding relative clauses weighs it down further.',
        '把真正的主语提前、删掉空洞动词、把从句浓缩为名词词组，都能让句子变轻。而增加关系从句只会更笨重。',
      ),
      answers: [
        { id: 'a', text: t('Mettre le vrai sujet en premier', 'Put the real subject first', '把真正的主语放在最前'), correct: true },
        { id: 'b', text: t('Supprimer les verbes vides comme « il y a »', 'Delete empty verbs such as “il y a”', '删掉 “il y a” 这类空洞动词'), correct: true },
        { id: 'c', text: t('Condenser une proposition en groupe nominal', 'Condense a clause into a noun group', '把从句浓缩成名词词组'), correct: true },
        { id: 'd', text: t('Ajouter des propositions relatives', 'Add relative clauses', '增加关系从句'), correct: false },
      ],
    },
    {
      id: 'ct5',
      kind: 'single',
      points: 1,
      prompt: t('Que reprend « ce qui » dans « Il est parti sans dire au revoir, ce qui a surpris tout le monde » ?', 'What does “ce qui” pick up in “Il est parti sans dire au revoir, ce qui a surpris tout le monde”?', '在 “Il est parti sans dire au revoir, ce qui a surpris tout le monde” 中，“ce qui” 指代什么？'),
      explanation: t(
        'Toute la proposition précédente, pas un nom. C’est la façon française d’enchaîner un commentaire sur ce qu’on vient de dire.',
        'The whole preceding clause, not a noun. It is the French way of tacking a comment onto what you have just said.',
        '指代前面整个从句，而不是某个名词。这是法语对刚说过的话追加评论的方式。',
      ),
      answers: [
        { id: 'a', text: t('Toute la proposition précédente', 'The whole preceding clause', '前面整个从句'), correct: true },
        { id: 'b', text: t('Le mot « au revoir »', 'The words “au revoir”', '“au revoir” 这个词'), correct: false },
        { id: 'c', text: t('Le sujet « il »', 'The subject “il”', '主语 “il”'), correct: false },
        { id: 'd', text: t('Le mot « tout le monde »', 'The words “tout le monde”', '“tout le monde” 这个词'), correct: false },
      ],
    },
    {
      id: 'ct6',
      kind: 'boolean',
      points: 1,
      prompt: t('Lire sa phrase à voix haute sans reprendre son souffle est un bon test de longueur.', 'Reading your sentence aloud without taking a breath is a good length test.', '一口气把句子读出来，是检验长度的好方法。'),
      explanation: t(
        'Vrai. Si l’air manque avant la fin, la phrase est trop longue pour un lecteur français. Le test ne coûte rien et remplace n’importe quelle règle.',
        'True. If you run out of air before the end, the sentence is too long for a French reader. The test costs nothing and replaces any rule.',
        '对。如果读不到句尾就没气了，这句话对法语读者来说太长。这个检验不花成本，胜过任何规则。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: true },
        { id: 'b', text: t('Faux', 'False', '错'), correct: false },
      ],
    },
  ],
};

/** Les douze quiz des cours complémentaires, indexés par identifiant. */
export const complementQuizzes: Readonly<Record<string, Quiz>> = {
  [a1Quotidien.id]: a1Quotidien,
  [a1Sons.id]: a1Sons,
  [a2ViePratique.id]: a2ViePratique,
  [a2Ecrire.id]: a2Ecrire,
  [b1Pronoms.id]: b1Pronoms,
  [b1Discours.id]: b1Discours,
  [b2Presse.id]: b2Presse,
  [b2Relief.id]: b2Relief,
  [c1Lexique.id]: c1Lexique,
  [c1Debat.id]: c1Debat,
  [c2Stylistique.id]: c2Stylistique,
  [c2Traduction.id]: c2Traduction,
};
