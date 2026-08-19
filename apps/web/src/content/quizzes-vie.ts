import type { Quiz } from '@lms/core';
import { t } from './tr';

/**
 * Quiz des six cours « vivre et se débrouiller » : se faire comprendre,
 * santé, actes de parole, démarches, orthographe, humour. Mêmes règles
 * que partout : seuil 70 %, trois tentatives, six questions.
 */

const a1Comprendre: Quiz = {
  id: 'qz_a1_comprendre',
  title: t('Quiz — Se faire comprendre', 'Quiz — Making yourself understood', '测验 — 让别人听懂你'),
  description: t(
    'Phrases de secours, impératif et consignes de classe.',
    'Rescue sentences, the imperative and classroom instructions.',
    '救场句、命令式与课堂指令。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'sc1',
      kind: 'single',
      points: 1,
      prompt: t('On parle trop vite pour vous. Que dites-vous ?', 'Someone is speaking too fast for you. What do you say?', '对方说得太快，你该说什么？'),
      explanation: t(
        '« Plus lentement » = moins vite. « Plus fort » concerne le volume, et « répéter » ferait redire à la même vitesse.',
        '“Plus lentement” means less fast. “Plus fort” is about volume, and “répéter” would get the same speed again.',
        '“plus lentement” 指更慢。“plus fort” 是音量问题，“répéter” 只会让对方按原速再说一遍。',
      ),
      answers: [
        { id: 'a', text: t('Vous pouvez parler plus lentement ?', 'Vous pouvez parler plus lentement ?', 'Vous pouvez parler plus lentement ?'), correct: true },
        { id: 'b', text: t('Vous pouvez parler plus fort ?', 'Vous pouvez parler plus fort ?', 'Vous pouvez parler plus fort ?'), correct: false },
        { id: 'c', text: t('Vous pouvez épeler ?', 'Vous pouvez épeler ?', 'Vous pouvez épeler ?'), correct: false },
        { id: 'd', text: t('Ça s’écrit comment ?', 'Ça s’écrit comment ?', 'Ça s’écrit comment ?'), correct: false },
      ],
    },
    {
      id: 'sc2',
      kind: 'single',
      points: 1,
      prompt: t('Vous cherchez le mot français pour « ticket ». Que demandez-vous ?', 'You are looking for the French word for “ticket”. What do you ask?', '你想知道 “ticket” 的法语怎么说。该怎么问？'),
      explanation: t(
        '« Comment on dit … ? » cherche le mot ; « qu’est-ce que ça veut dire ? » cherche le sens — c’est le trajet inverse.',
        '“Comment on dit …?” looks for the word; “qu’est-ce que ça veut dire?” looks for the meaning — the opposite direction.',
        '“comment on dit … ?” 找的是词；“qu’est-ce que ça veut dire ?” 找的是意思——方向正好相反。',
      ),
      answers: [
        { id: 'a', text: t('Comment on dit « ticket » en français ?', 'Comment on dit « ticket » en français ?', 'Comment on dit « ticket » en français ?'), correct: true },
        { id: 'b', text: t('Qu’est-ce que ça veut dire, « ticket » ?', 'Qu’est-ce que ça veut dire, « ticket » ?', 'Qu’est-ce que ça veut dire, « ticket » ?'), correct: false },
        { id: 'c', text: t('Vous pouvez répéter ?', 'Vous pouvez répéter ?', 'Vous pouvez répéter ?'), correct: false },
        { id: 'd', text: t('Ça se prononce comment ?', 'Ça se prononce comment ?', 'Ça se prononce comment ?'), correct: false },
      ],
    },
    {
      id: 'sc3',
      kind: 'single',
      points: 1,
      prompt: t('À un ami : quelle forme de l’impératif est correcte ?', 'To a friend: which imperative form is correct?', '对朋友说话时，哪个命令式正确？'),
      explanation: t(
        'À « tu », les verbes en -er perdent leur s final : « regarde », pas « regardes ». C’est la seule règle propre à l’impératif.',
        'With “tu”, -er verbs drop the final s: “regarde”, not “regardes”. It is the imperative’s only special rule.',
        '对 “tu”，-er 动词去掉词尾 s：是 “regarde”，不是 “regardes”。这是命令式唯一的特殊规则。',
      ),
      answers: [
        { id: 'a', text: t('Regarde !', 'Regarde !', 'Regarde !'), correct: true },
        { id: 'b', text: t('Regardes !', 'Regardes !', 'Regardes !'), correct: false },
        { id: 'c', text: t('Tu regarde !', 'Tu regarde !', 'Tu regarde !'), correct: false },
        { id: 'd', text: t('Regarder !', 'Regarder !', 'Regarder !'), correct: false },
      ],
    },
    {
      id: 'sc4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quelles phrases sont des demandes polies ?', 'Which sentences are polite requests?', '哪些句子是礼貌的请求？'),
      explanation: t(
        'L’impératif devient poli avec « s’il vous plaît », et « pardon » adoucit tout. Un impératif nu comme « Répète » reste un ordre.',
        'The imperative turns polite with “s’il vous plaît”, and “pardon” softens everything. A bare imperative like “Répète” stays an order.',
        '命令式加上 “s’il vous plaît” 就变礼貌，“pardon” 能软化一切。像 “Répète” 这样光秃秃的命令式仍是命令。',
      ),
      answers: [
        { id: 'a', text: t('Répétez, s’il vous plaît.', 'Répétez, s’il vous plaît.', 'Répétez, s’il vous plaît.'), correct: true },
        { id: 'b', text: t('Pardon, vous pouvez répéter ?', 'Pardon, vous pouvez répéter ?', 'Pardon, vous pouvez répéter ?'), correct: true },
        { id: 'c', text: t('Répète.', 'Répète.', 'Répète.'), correct: false },
        { id: 'd', text: t('Donne-moi ton stylo, s’il te plaît.', 'Donne-moi ton stylo, s’il te plaît.', 'Donne-moi ton stylo, s’il te plaît.'), correct: true },
      ],
    },
    {
      id: 'sc5',
      kind: 'single',
      points: 1,
      prompt: t('La consigne « Cochez la bonne réponse » demande de…', 'The instruction “Cochez la bonne réponse” asks you to…', '指令 “Cochez la bonne réponse” 要求你……'),
      explanation: t(
        '« Cocher » = marquer une case d’une croix. « Relier » associe deux colonnes, « compléter » remplit un trou.',
        '“Cocher” = mark a box with a cross. “Relier” matches two columns, “compléter” fills a gap.',
        '“cocher” 即在方框里打叉。“relier” 是两栏连线，“compléter” 是填空。',
      ),
      answers: [
        { id: 'a', text: t('marquer une case', 'mark a box', '勾选方框'), correct: true },
        { id: 'b', text: t('relier deux colonnes', 'match two columns', '两栏连线'), correct: false },
        { id: 'c', text: t('écrire une phrase', 'write a sentence', '写一个句子'), correct: false },
        { id: 'd', text: t('lire à voix haute', 'read aloud', '朗读'), correct: false },
      ],
    },
    {
      id: 'sc6',
      kind: 'boolean',
      points: 1,
      prompt: t('« Allons au cinéma ! » inclut la personne qui parle.', '“Allons au cinéma !” includes the speaker.', '“Allons au cinéma !” 包含说话人自己。'),
      explanation: t(
        'Vrai. La forme « nous » de l’impératif propose de faire ensemble : c’est le « let’s » français.',
        'True. The “nous” imperative proposes doing something together: it is the French “let’s”.',
        '对。命令式的 “nous” 形式是提议一起做：相当于英语的 “let’s”。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: true },
        { id: 'b', text: t('Faux', 'False', '错'), correct: false },
      ],
    },
  ],
};

const a2Sante: Quiz = {
  id: 'qz_a2_sante',
  title: t('Quiz — Le corps et la santé', 'Quiz — Body and health', '测验 — 身体与健康'),
  description: t(
    'Avoir mal à, la consultation, l’ordonnance et les urgences.',
    '“Avoir mal à”, the consultation, the prescription and emergencies.',
    '“avoir mal à”、就诊、处方与急救。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'sa1',
      kind: 'single',
      points: 1,
      prompt: t('Complétez : « J’ai mal … dents. »', 'Complete: “J’ai mal … dents.”', '填空：“J’ai mal … dents.”'),
      explanation: t(
        '« Dents » est pluriel : à + les = aux. « À les » n’existe jamais en français.',
        '“Dents” is plural: à + les = aux. “À les” never exists in French.',
        '“dents” 是复数：à + les = aux。法语里永远没有 “à les”。',
      ),
      answers: [
        { id: 'a', text: t('aux', 'aux', 'aux'), correct: true },
        { id: 'b', text: t('à les', 'à les', 'à les'), correct: false },
        { id: 'c', text: t('à la', 'à la', 'à la'), correct: false },
        { id: 'd', text: t('au', 'au', 'au'), correct: false },
      ],
    },
    {
      id: 'sa2',
      kind: 'single',
      points: 1,
      prompt: t('Le médecin demande « Qu’est-ce qui vous amène ? ». Que veut-il savoir ?', 'The doctor asks “Qu’est-ce qui vous amène ?”. What do they want to know?', '医生问 “Qu’est-ce qui vous amène ?”，想知道什么？'),
      explanation: t(
        'C’est l’ouverture rituelle de la consultation : « pourquoi venez-vous ? ». On y répond par le symptôme : « j’ai mal à… depuis… ».',
        'It is the ritual opening of the consultation: “why are you here?”. You answer with the symptom: “j’ai mal à… depuis…”.',
        '这是就诊的固定开场白：“您为什么来？”。回答时直接说症状：“j’ai mal à… depuis…”。',
      ),
      answers: [
        { id: 'a', text: t('La raison de votre visite', 'The reason for your visit', '你来就诊的原因'), correct: true },
        { id: 'b', text: t('Votre moyen de transport', 'How you travelled here', '你怎么来的'), correct: false },
        { id: 'c', text: t('Qui vous accompagne', 'Who is with you', '谁陪你来的'), correct: false },
        { id: 'd', text: t('Le nom de votre médecin habituel', 'Your usual doctor’s name', '你平时的医生是谁'), correct: false },
      ],
    },
    {
      id: 'sa3',
      kind: 'single',
      points: 1,
      prompt: t('« Un comprimé matin, midi et soir » : combien de prises par jour ?', '“Un comprimé matin, midi et soir”: how many doses a day?', '“Un comprimé matin, midi et soir”：每天服几次？'),
      explanation: t(
        'Matin + midi + soir = trois prises. La posologie se lit toujours en nombre de moments, pas en nombre total.',
        'Matin + midi + soir = three doses. Dosage instructions always count moments of the day, not a total.',
        '早、中、晚 = 三次。用量说明数的是时点，不是总量。',
      ),
      answers: [
        { id: 'a', text: t('Trois', 'Three', '三次'), correct: true },
        { id: 'b', text: t('Une', 'One', '一次'), correct: false },
        { id: 'c', text: t('Deux', 'Two', '两次'), correct: false },
        { id: 'd', text: t('Quatre', 'Four', '四次'), correct: false },
      ],
    },
    {
      id: 'sa4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quels numéros joignent un service d’urgence en France ?', 'Which numbers reach an emergency service in France?', '在法国，哪些号码能接通急救服务？'),
      explanation: t(
        '15 le SAMU, 18 les pompiers, 112 le numéro européen. Le 36 15 est un ancien code du Minitel, resté dans les plaisanteries.',
        '15 is SAMU, 18 the fire brigade, 112 the European number. 36 15 is an old Minitel code, surviving only in jokes.',
        '15 是急救中心，18 是消防队，112 是欧洲通用号码。36 15 是老式 Minitel 的代码，如今只活在玩笑里。',
      ),
      answers: [
        { id: 'a', text: t('le 15', '15', '15'), correct: true },
        { id: 'b', text: t('le 18', '18', '18'), correct: true },
        { id: 'c', text: t('le 112', '112', '112'), correct: true },
        { id: 'd', text: t('le 36 15', '36 15', '36 15'), correct: false },
      ],
    },
    {
      id: 'sa5',
      kind: 'single',
      points: 1,
      prompt: t('Le pharmacien propose « le générique ». C’est…', 'The pharmacist offers “le générique”. It is…', '药剂师提议 “le générique”，指的是……'),
      explanation: t(
        'Même molécule, marque différente, prix plus bas. On peut accepter sans hésiter — le pharmacien y est même encouragé.',
        'Same molecule, different brand, lower price. You can accept without hesitation — pharmacists are even encouraged to offer it.',
        '同一成分、不同品牌、更低价格。可以放心接受——药剂师甚至被鼓励这样提议。',
      ),
      answers: [
        { id: 'a', text: t('le même médicament, moins cher', 'the same medicine, cheaper', '同样的药，更便宜'), correct: true },
        { id: 'b', text: t('un médicament plus puissant', 'a stronger medicine', '更强效的药'), correct: false },
        { id: 'c', text: t('un médicament sans ordonnance', 'an over-the-counter medicine', '非处方药'), correct: false },
        { id: 'd', text: t('un produit de parapharmacie', 'a parapharmacy product', '药妆产品'), correct: false },
      ],
    },
    {
      id: 'sa6',
      kind: 'boolean',
      points: 1,
      prompt: t('La nuit, toutes les pharmacies sont fermées sans exception.', 'At night, every pharmacy is closed without exception.', '夜里所有药房都关门，无一例外。'),
      explanation: t(
        'Faux. Une pharmacie de garde reste ouverte par secteur, et son adresse est affichée sur la porte de toutes les autres.',
        'False. One duty pharmacy per area stays open, and its address is posted on every other pharmacy’s door.',
        '错。每个片区都有一家值班药房营业，其地址就贴在其他药房的门上。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: false },
        { id: 'b', text: t('Faux', 'False', '错'), correct: true },
      ],
    },
  ],
};

const b1Actes: Quiz = {
  id: 'qz_b1_actes',
  title: t('Quiz — Demander, refuser, se plaindre', 'Quiz — Asking, refusing, complaining', '测验 — 请求、拒绝、投诉'),
  description: t(
    'Conditionnel de politesse, refus enveloppé et réclamation efficace.',
    'The polite conditional, the wrapped-up refusal and the effective complaint.',
    '礼貌条件式、包装过的拒绝与有效投诉。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'ba1',
      kind: 'single',
      points: 1,
      prompt: t('Au guichet, quelle formule est la bonne ?', 'At the counter, which phrase is right?', '在窗口前，哪句才对？'),
      explanation: t(
        'Le conditionnel « je voudrais » est la norme de la demande polie. « Je veux » sonne comme un caprice, quel que soit le sourire.',
        'The conditional “je voudrais” is the standard polite request. “Je veux” sounds like a whim, however wide the smile.',
        '条件式 “je voudrais” 是礼貌请求的标准。“je veux” 无论笑得多灿烂都像在耍性子。',
      ),
      answers: [
        { id: 'a', text: t('Je voudrais un billet pour Lyon.', 'Je voudrais un billet pour Lyon.', 'Je voudrais un billet pour Lyon.'), correct: true },
        { id: 'b', text: t('Je veux un billet pour Lyon.', 'Je veux un billet pour Lyon.', 'Je veux un billet pour Lyon.'), correct: false },
        { id: 'c', text: t('Donnez un billet pour Lyon.', 'Donnez un billet pour Lyon.', 'Donnez un billet pour Lyon.'), correct: false },
        { id: 'd', text: t('Un billet, vite.', 'Un billet, vite.', 'Un billet, vite.'), correct: false },
      ],
    },
    {
      id: 'ba2',
      kind: 'single',
      points: 1,
      prompt: t('« J’aurais adoré ! Une prochaine fois, promis. » Cette réponse est…', '“J’aurais adoré ! Une prochaine fois, promis.” This answer is…', '“J’aurais adoré ! Une prochaine fois, promis.” 这个回答是……'),
      explanation: t(
        'Le conditionnel passé enterre l’occasion, et « une prochaine fois » sans date est une formule de sortie. C’est un non habillé.',
        'The past conditional buries the occasion, and a dateless “une prochaine fois” is an exit phrase. It is a dressed-up no.',
        '过去条件式已给这次机会画上句号，没有日期的 “une prochaine fois” 只是脱身话。这是一个穿了外衣的“不”。',
      ),
      answers: [
        { id: 'a', text: t('un refus poli', 'a polite refusal', '礼貌的拒绝'), correct: true },
        { id: 'b', text: t('une acceptation pour plus tard', 'an acceptance for later', '答应改天参加'), correct: false },
        { id: 'c', text: t('une hésitation sincère', 'genuine hesitation', '真诚的犹豫'), correct: false },
        { id: 'd', text: t('une demande de précision', 'a request for details', '要求说明细节'), correct: false },
      ],
    },
    {
      id: 'ba3',
      kind: 'multiple',
      points: 2,
      prompt: t('Que contient un refus à la française réussi ?', 'What goes into a successful French-style refusal?', '一次成功的法式拒绝包含什么？'),
      explanation: t(
        'Remercier, marquer le regret, proposer autre chose : le non est enveloppé. La longue justification, elle, sonne faux.',
        'Thanking, signalling regret, offering an alternative: the no comes wrapped. A long justification, though, rings false.',
        '致谢、表达遗憾、提出替代方案：这个“不”是包装好的。冗长的辩解反而显得虚假。',
      ),
      answers: [
        { id: 'a', text: t('un remerciement', 'a thank-you', '一句致谢'), correct: true },
        { id: 'b', text: t('un mot de regret : « malheureusement »', 'a regret word: “malheureusement”', '一个遗憾词：“malheureusement”'), correct: true },
        { id: 'c', text: t('une contre-proposition', 'a counter-offer', '一个替代提议'), correct: true },
        { id: 'd', text: t('une longue justification détaillée', 'a long, detailed justification', '一大段详细辩解'), correct: false },
      ],
    },
    {
      id: 'ba4',
      kind: 'single',
      points: 1,
      prompt: t('Dans une réclamation, quelle phrase obtient le plus ?', 'In a complaint, which sentence gets the most?', '投诉时，哪句话最能拿到结果？'),
      explanation: t(
        'Les faits datés et référencés obligent à répondre. Les jugements (« scandaleux », « nul ») donnent une raison de se braquer.',
        'Dated, referenced facts force an answer. Judgements (“scandaleux”, “nul”) hand the other side a reason to dig in.',
        '带日期和编号的事实让对方不得不回应。评判性字眼（“scandaleux”“nul”）只会给对方抵触的理由。',
      ),
      answers: [
        { id: 'a', text: t('Commande n° 4521 du 3 mars : le colis est arrivé incomplet.', 'Commande n° 4521 du 3 mars : le colis est arrivé incomplet.', 'Commande n° 4521 du 3 mars : le colis est arrivé incomplet.'), correct: true },
        { id: 'b', text: t('Votre service est scandaleux.', 'Votre service est scandaleux.', 'Votre service est scandaleux.'), correct: false },
        { id: 'c', text: t('Je suis très en colère contre vous.', 'Je suis très en colère contre vous.', 'Je suis très en colère contre vous.'), correct: false },
        { id: 'd', text: t('Faites quelque chose, n’importe quoi.', 'Faites quelque chose, n’importe quoi.', 'Faites quelque chose, n’importe quoi.'), correct: false },
      ],
    },
    {
      id: 'ba5',
      kind: 'single',
      points: 1,
      prompt: t('Que signifie « sous quinze jours » ?', 'What does “sous quinze jours” mean?', '“sous quinze jours” 是什么意思？'),
      explanation: t(
        '« Sous » + durée = dans un délai maximal de. C’est la préposition des délais dans les courriers formels.',
        '“Sous” + duration = within at most. It is the deadline preposition of formal letters.',
        '“sous” 加时长 = 最迟在……之内。这是正式信函中表达期限的介词。',
      ),
      answers: [
        { id: 'a', text: t('dans un délai maximal de quinze jours', 'within fifteen days at most', '最迟十五天之内'), correct: true },
        { id: 'b', text: t('après quinze jours', 'after fifteen days', '十五天之后'), correct: false },
        { id: 'c', text: t('pendant exactement quinze jours', 'for exactly fifteen days', '整整持续十五天'), correct: false },
        { id: 'd', text: t('tous les quinze jours', 'every fifteen days', '每十五天一次'), correct: false },
      ],
    },
    {
      id: 'ba6',
      kind: 'boolean',
      points: 1,
      prompt: t('« On se rappelle » sans date est le plus souvent une formule de clôture, pas un engagement.', '“On se rappelle” with no date is most often a closing phrase, not a commitment.', '不带日期的 “On se rappelle” 多半是收场话，不是承诺。'),
      explanation: t(
        'Vrai. Un vrai oui français vient avec un quand. Sans date ni action, la formule referme poliment la conversation.',
        'True. A real French yes comes with a when. With no date or action, the phrase politely closes the conversation.',
        '对。真正的法式同意一定带时间。没有日期、没有行动，这句话只是礼貌地结束对话。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: true },
        { id: 'b', text: t('Faux', 'False', '错'), correct: false },
      ],
    },
  ],
};

const b2Demarches: Quiz = {
  id: 'qz_b2_demarches',
  title: t('Quiz — Les démarches', 'Quiz — Paperwork', '测验 — 行政手续'),
  description: t(
    'Vocabulaire administratif, CERFA, logement et banque.',
    'Administrative vocabulary, CERFA forms, housing and banking.',
    '行政词汇、CERFA 表格、住房与银行。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'de1',
      kind: 'single',
      points: 1,
      prompt: t('Qu’est-ce qu’un « justificatif de domicile » ?', 'What is a “justificatif de domicile”?', '什么是 “justificatif de domicile”？'),
      explanation: t(
        'Un document récent prouvant votre adresse : facture d’électricité, d’internet, quittance de loyer. « De moins de trois mois » au jour du dépôt.',
        'A recent document proving your address: electricity or internet bill, rent receipt. “Less than three months old” on the day you submit.',
        '证明住址的近期文件：电费单、网费单或房租收据。以递交当天计，须在三个月以内。',
      ),
      answers: [
        { id: 'a', text: t('une facture récente prouvant votre adresse', 'a recent bill proving your address', '证明住址的近期账单'), correct: true },
        { id: 'b', text: t('votre contrat de travail', 'your work contract', '你的劳动合同'), correct: false },
        { id: 'c', text: t('votre pièce d’identité', 'your ID document', '你的身份证件'), correct: false },
        { id: 'd', text: t('un plan de votre quartier', 'a map of your neighbourhood', '你所在街区的地图'), correct: false },
      ],
    },
    {
      id: 'de2',
      kind: 'single',
      points: 1,
      prompt: t('Quelle est la différence entre la caution et le garant ?', 'What is the difference between the “caution” and the “garant”?', '“caution” 和 “garant” 有什么区别？'),
      explanation: t(
        'La caution est la somme bloquée en garantie ; le garant est la personne qui s’engage à payer à votre place. Les confondre est l’erreur type du dossier de location.',
        'The caution is the sum held as a guarantee; the garant is the person who commits to pay in your place. Mixing them up is the classic rental-file mistake.',
        'caution 是押作担保的钱；garant 是承诺替你付款的人。混淆二者是租房材料里的典型错误。',
      ),
      answers: [
        { id: 'a', text: t('La caution est une somme, le garant est une personne', 'The caution is a sum, the garant is a person', 'caution 是一笔钱，garant 是一个人'), correct: true },
        { id: 'b', text: t('Ce sont deux mots pour la même chose', 'They are two words for the same thing', '两个词指同一样东西'), correct: false },
        { id: 'c', text: t('La caution est une personne, le garant une somme', 'The caution is a person, the garant a sum', 'caution 是人，garant 是钱'), correct: false },
        { id: 'd', text: t('Le garant est un document officiel', 'The garant is an official document', 'garant 是一份官方文件'), correct: false },
      ],
    },
    {
      id: 'de3',
      kind: 'single',
      points: 1,
      prompt: t('L’agent dit : « Je vous fais un récépissé. » C’est…', 'The clerk says: “Je vous fais un récépissé.” It is…', '工作人员说 “Je vous fais un récépissé.”，这是……'),
      explanation: t(
        'Le récépissé prouve que la demande est déposée et en cours. Il donne provisoirement les mêmes droits que le document attendu.',
        'The récépissé proves the application has been filed and is in progress. It temporarily grants the same rights as the awaited document.',
        'récépissé 证明申请已递交、正在办理，等待期间暂时享有与正式文件相同的权利。',
      ),
      answers: [
        { id: 'a', text: t('une preuve provisoire que la demande est en cours', 'temporary proof that the application is under way', '证明申请正在办理的临时凭证'), correct: true },
        { id: 'b', text: t('un refus déguisé', 'a disguised refusal', '变相的拒绝'), correct: false },
        { id: 'c', text: t('une facture à payer', 'a bill to pay', '一张待付账单'), correct: false },
        { id: 'd', text: t('le document définitif', 'the final document', '正式文件本身'), correct: false },
      ],
    },
    {
      id: 'de4',
      kind: 'multiple',
      points: 2,
      prompt: t('Que faut-il vérifier avant de déposer un dossier ?', 'What should you check before submitting a file?', '递交材料前该核对什么？'),
      explanation: t(
        'Dates des justificatifs, version du CERFA, copies faites — et l’original reste avec vous. Écrire dans le cadre réservé est au contraire interdit.',
        'Dates on the proofs, the CERFA version, the copies made — and the original stays with you. Writing in the reserved box is, on the contrary, forbidden.',
        '证明文件的日期、CERFA 的版本、复印是否齐全——原件自己保留。至于在专用栏里写字，恰恰是被禁止的。',
      ),
      answers: [
        { id: 'a', text: t('que chaque justificatif date de moins de trois mois', 'every proof is less than three months old', '每份证明都在三个月以内'), correct: true },
        { id: 'b', text: t('que le CERFA est dans sa dernière version', 'the CERFA is the latest version', 'CERFA 是最新版本'), correct: true },
        { id: 'c', text: t('que chaque pièce est photocopiée', 'every document is photocopied', '每份材料都已复印'), correct: true },
        { id: 'd', text: t('que le cadre réservé est bien rempli', 'the reserved box is properly filled in', '专用栏已填好'), correct: false },
      ],
    },
    {
      id: 'de5',
      kind: 'single',
      points: 1,
      prompt: t('Pour résilier un bail, la lettre de préavis part…', 'To end a lease, the notice letter goes…', '要解除租约，退租信应当……'),
      explanation: t(
        'En recommandé avec accusé de réception : c’est la preuve légale de la date, et le préavis court à partir de la réception.',
        'By registered post with acknowledgement of receipt: it is the legal proof of the date, and the notice period runs from receipt.',
        '用带回执的挂号信寄出：这是日期的法律凭证，预告期从对方签收起算。',
      ),
      answers: [
        { id: 'a', text: t('en recommandé avec accusé de réception', 'by registered post with acknowledgement', '用带回执的挂号信'), correct: true },
        { id: 'b', text: t('par simple e-mail', 'by ordinary e-mail', '用普通电子邮件'), correct: false },
        { id: 'c', text: t('par téléphone', 'by phone', '打电话'), correct: false },
        { id: 'd', text: t('en main propre, sans trace', 'hand-delivered, with no record', '当面交付，不留痕迹'), correct: false },
      ],
    },
    {
      id: 'de6',
      kind: 'boolean',
      points: 1,
      prompt: t('« HC » dans une annonce de location signifie « hors charges ».', '“HC” in a rental ad means “excluding charges”.', '租房广告里的 “HC” 意为“不含杂费”。'),
      explanation: t(
        'Vrai. « HC » = hors charges, « CC » = charges comprises. La différence peut dépasser cent euros par mois : à vérifier avant de comparer.',
        'True. “HC” = excluding charges, “CC” = charges included. The gap can top a hundred euros a month: check before comparing.',
        '对。“HC” 指不含杂费，“CC” 指含杂费。差额每月可能超过一百欧元：比较前务必确认。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: true },
        { id: 'b', text: t('Faux', 'False', '错'), correct: false },
      ],
    },
  ],
};

const c1Orthographe: Quiz = {
  id: 'qz_c1_orthographe',
  title: t('Quiz — Écrire sans faute', 'Quiz — Writing without mistakes', '测验 — 写作零差错'),
  description: t(
    'Homophones, accords difficiles et ponctuation française.',
    'Homophones, tricky agreements and French punctuation.',
    '同音词、疑难配合与法式标点。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'or1',
      kind: 'single',
      points: 1,
      prompt: t('Complétez : « Elle … appris la nouvelle hier. »', 'Complete: “Elle … appris la nouvelle hier.”', '填空：“Elle … appris la nouvelle hier.”'),
      explanation: t(
        '« Elle avait appris » passe : c’est le verbe avoir, donc « a » sans accent. Le test de substitution tranche en une seconde.',
        '“Elle avait appris” fits: it is the verb avoir, so “a” with no accent. The substitution test settles it in a second.',
        '能换成 “elle avait appris”：这是动词 avoir，所以是不带重音符的 “a”。替换检验一秒见分晓。',
      ),
      answers: [
        { id: 'a', text: t('a', 'a', 'a'), correct: true },
        { id: 'b', text: t('à', 'à', 'à'), correct: false },
        { id: 'c', text: t('as', 'as', 'as'), correct: false },
        { id: 'd', text: t('ah', 'ah', 'ah'), correct: false },
      ],
    },
    {
      id: 'or2',
      kind: 'single',
      points: 1,
      prompt: t('Complétez : « Merci de me … le document. »', 'Complete: “Merci de me … le document.”', '填空：“Merci de me … le document.”'),
      explanation: t(
        '« Merci de me vendre » passe, « merci de me vendu » non : après la préposition « de », toujours l’infinitif en -er.',
        '“Merci de me vendre” fits, “merci de me vendu” does not: after the preposition “de”, always the -er infinitive.',
        '能说 “merci de me vendre”，不能说 “merci de me vendu”：介词 “de” 后面永远接 -er 不定式。',
      ),
      answers: [
        { id: 'a', text: t('renvoyer', 'renvoyer', 'renvoyer'), correct: true },
        { id: 'b', text: t('renvoyé', 'renvoyé', 'renvoyé'), correct: false },
        { id: 'c', text: t('renvoyez', 'renvoyez', 'renvoyez'), correct: false },
        { id: 'd', text: t('renvoyait', 'renvoyait', 'renvoyait'), correct: false },
      ],
    },
    {
      id: 'or3',
      kind: 'single',
      points: 1,
      prompt: t('Quelle phrase est correcte ?', 'Which sentence is correct?', '哪句是正确的？'),
      explanation: t(
        '« Leur » devant un verbe est un pronom invariable ; « leurs » s’accorde avec le nom qui suit. Ici : je leur ai rendu leurs affaires.',
        '“Leur” before a verb is an invariable pronoun; “leurs” agrees with the following noun. Here: je leur ai rendu leurs affaires.',
        '动词前的 “leur” 是不变代词；“leurs” 与后面的名词配合。正确说法：je leur ai rendu leurs affaires。',
      ),
      answers: [
        { id: 'a', text: t('Je leur ai rendu leurs affaires.', 'Je leur ai rendu leurs affaires.', 'Je leur ai rendu leurs affaires.'), correct: true },
        { id: 'b', text: t('Je leurs ai rendu leur affaires.', 'Je leurs ai rendu leur affaires.', 'Je leurs ai rendu leur affaires.'), correct: false },
        { id: 'c', text: t('Je leurs ai rendu leurs affaires.', 'Je leurs ai rendu leurs affaires.', 'Je leurs ai rendu leurs affaires.'), correct: false },
        { id: 'd', text: t('Je leur ai rendu leur affaires.', 'Je leur ai rendu leur affaires.', 'Je leur ai rendu leur affaires.'), correct: false },
      ],
    },
    {
      id: 'or4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quels signes prennent une espace AVANT en typographie française ?', 'Which marks take a space BEFORE them in French typography?', '法式排版中，哪些符号前面要加空格？'),
      explanation: t(
        'Les signes doubles — ; : ! ? — prennent une espace avant et après. La virgule n’en prend qu’après : c’est un signe simple.',
        'Two-part marks — ; : ! ? — take a space before and after. The comma only takes one after: it is a single mark.',
        '双部件符号——; : ! ?——前后都要空格。逗号只在后面加空格：它是单部件符号。',
      ),
      answers: [
        { id: 'a', text: t('le point d’interrogation ?', 'the question mark ?', '问号 ?'), correct: true },
        { id: 'b', text: t('le point-virgule ;', 'the semicolon ;', '分号 ;'), correct: true },
        { id: 'c', text: t('les deux-points :', 'the colon :', '冒号 :'), correct: true },
        { id: 'd', text: t('la virgule ,', 'the comma ,', '逗号 ,'), correct: false },
      ],
    },
    {
      id: 'or5',
      kind: 'single',
      points: 1,
      prompt: t('Quelle phrase respecte les majuscules françaises ?', 'Which sentence follows French capitalisation?', '哪句符合法语的大写规则？'),
      explanation: t(
        'Ni les mois, ni les langues, ni les adjectifs de nationalité ne prennent de majuscule ; seuls les habitants en prennent une : les Italiens.',
        'Months, languages and nationality adjectives take no capital; only the people themselves do: les Italiens.',
        '月份、语言和国籍形容词都不大写；只有指“国民”时才大写：les Italiens。',
      ),
      answers: [
        { id: 'a', text: t('En janvier, j’apprends le français avec des amis italiens.', 'En janvier, j’apprends le français avec des amis italiens.', 'En janvier, j’apprends le français avec des amis italiens.'), correct: true },
        { id: 'b', text: t('En Janvier, j’apprends le Français avec des amis Italiens.', 'En Janvier, j’apprends le Français avec des amis Italiens.', 'En Janvier, j’apprends le Français avec des amis Italiens.'), correct: false },
        { id: 'c', text: t('En janvier, j’apprends le Français avec des amis italiens.', 'En janvier, j’apprends le Français avec des amis italiens.', 'En janvier, j’apprends le Français avec des amis italiens.'), correct: false },
        { id: 'd', text: t('En Janvier, j’apprends le français avec des amis italiens.', 'En Janvier, j’apprends le français avec des amis italiens.', 'En Janvier, j’apprends le français avec des amis italiens.'), correct: false },
      ],
    },
    {
      id: 'or6',
      kind: 'boolean',
      points: 1,
      prompt: t('Dans « Ils sont tous venus », le s de « tous » se prononce.', 'In “Ils sont tous venus”, the s of “tous” is pronounced.', '在 “Ils sont tous venus” 中，“tous” 的 s 要发音。'),
      explanation: t(
        'Vrai. Sans nom derrière, « tous » est pronom et se prononce [tus]. Devant un nom — tous les jours — il se prononce [tu].',
        'True. With no noun after it, “tous” is a pronoun, pronounced [tus]. Before a noun — tous les jours — it is pronounced [tu].',
        '对。后面没有名词时 “tous” 是代词，读 [tus]。在名词前——tous les jours——读 [tu]。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: true },
        { id: 'b', text: t('Faux', 'False', '错'), correct: false },
      ],
    },
  ],
};

const c2Humour: Quiz = {
  id: 'qz_c2_humour',
  title: t('Quiz — L’humour', 'Quiz — Humour', '测验 — 幽默'),
  description: t(
    'Mécanismes du rire, satire de presse et références partagées.',
    'The machinery of laughter, press satire and shared references.',
    '笑的机关、报刊讽刺与共同文化梗。',
  ),
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'hu1',
      kind: 'single',
      points: 1,
      prompt: t('« Trois heures de retard, bravo. » Le « bravo » est…', '“Trois heures de retard, bravo.” The “bravo” is…', '“Trois heures de retard, bravo.” 这里的 “bravo” 是……'),
      explanation: t(
        'Un compliment posé sur un échec est l’ironie française la plus courante : plus l’éloge est appuyé, plus la critique est forte.',
        'Praise placed on a failure is the most common French irony: the heavier the compliment, the harsher the criticism.',
        '把赞美放在失败上是最常见的法式反讽：恭维越用力，批评越重。',
      ),
      answers: [
        { id: 'a', text: t('ironique : c’est un reproche', 'ironic: it is a reproach', '反讽：其实是责备'), correct: true },
        { id: 'b', text: t('une vraie félicitation', 'genuine congratulations', '真心的祝贺'), correct: false },
        { id: 'c', text: t('une formule de politesse neutre', 'a neutral polite formula', '中性的客套话'), correct: false },
        { id: 'd', text: t('un mot d’encouragement', 'a word of encouragement', '鼓励的话'), correct: false },
      ],
    },
    {
      id: 'hu2',
      kind: 'single',
      points: 1,
      prompt: t('Qu’est-ce que Le Canard enchaîné ?', 'What is Le Canard enchaîné?', '《鸭鸣报》是什么？'),
      explanation: t(
        'Un hebdomadaire satirique fondé en 1915, qui révèle des scandales très sérieux sous des jeux de mots. Satirique ne veut pas dire faux.',
        'A satirical weekly founded in 1915, breaking very serious scandals beneath wordplay. Satirical does not mean fake.',
        '创刊于 1915 年的讽刺周报，用文字游戏包裹极其严肃的丑闻揭露。“讽刺”不等于“虚假”。',
      ),
      answers: [
        { id: 'a', text: t('un journal satirique qui publie de vraies enquêtes', 'a satirical paper publishing real investigations', '刊登真实调查的讽刺报纸'), correct: true },
        { id: 'b', text: t('un site de fausses nouvelles parodiques', 'a parody fake-news site', '恶搞假新闻网站'), correct: false },
        { id: 'c', text: t('une émission de télévision', 'a television programme', '一档电视节目'), correct: false },
        { id: 'd', text: t('une bande dessinée pour enfants', 'a children’s comic', '儿童漫画'), correct: false },
      ],
    },
    {
      id: 'hu3',
      kind: 'single',
      points: 1,
      prompt: t('Le titre « La SNCF reste à quai » fait rire parce que…', 'The headline “La SNCF reste à quai” raises a smile because…', '标题 “La SNCF reste à quai” 让人发笑，是因为……'),
      explanation: t(
        '« Rester à quai » se dit du voyageur qui rate son train ; appliqué à la compagnie elle-même, l’expression retourne les rôles.',
        '“Rester à quai” describes a traveller missing their train; applied to the company itself, the expression flips the roles.',
        '“rester à quai” 本指误车留在站台的旅客；用到铁路公司自己身上，角色就被颠倒了。',
      ),
      answers: [
        { id: 'a', text: t('l’expression du voyageur est retournée contre la compagnie', 'the traveller’s expression is turned back on the company', '旅客的成语被反过来用在公司身上'), correct: true },
        { id: 'b', text: t('le mot « quai » est un mot rare', 'the word “quai” is rare', '“quai” 是个生僻词'), correct: false },
        { id: 'c', text: t('c’est une citation de film', 'it quotes a film', '这是电影台词'), correct: false },
        { id: 'd', text: t('la phrase contient une faute volontaire', 'the sentence has a deliberate mistake', '句中有故意写错的地方'), correct: false },
      ],
    },
    {
      id: 'hu4',
      kind: 'multiple',
      points: 2,
      prompt: t('Quels indices suggèrent le second degré ?', 'Which clues suggest second-degree humour?', '哪些线索暗示这是反话？'),
      explanation: t(
        'L’énormité du propos, le contraste avec les faits et une formule culte citée sont les signaux fiables. Un ton parfaitement sérieux, lui, ne prouve rien : le second degré s’énonce sérieusement.',
        'The enormity of the claim, the clash with the facts and a quoted cult phrase are the reliable signals. A perfectly serious tone proves nothing: second-degree humour is delivered seriously.',
        '说法夸张到离谱、与事实相抵触、引用了众人皆知的梗——这些才是可靠信号。而一本正经的语气什么也证明不了：反话恰恰是正经说出来的。',
      ),
      answers: [
        { id: 'a', text: t('un propos trop énorme pour être sincère', 'a claim too enormous to be sincere', '夸张到不可能当真的说法'), correct: true },
        { id: 'b', text: t('un contraste flagrant avec les faits', 'a flagrant clash with the facts', '与事实的明显矛盾'), correct: true },
        { id: 'c', text: t('une réplique culte glissée dans la phrase', 'a cult line slipped into the sentence', '句中夹带的经典台词'), correct: true },
        { id: 'd', text: t('un ton parfaitement sérieux', 'a perfectly serious tone', '一本正经的语气'), correct: false },
      ],
    },
    {
      id: 'hu5',
      kind: 'single',
      points: 1,
      prompt: t('Quelqu’un répond « C’est pas faux ». Que signale-t-il souvent ?', 'Someone replies “C’est pas faux”. What are they often signalling?', '有人回答 “C’est pas faux”，通常在暗示什么？'),
      explanation: t(
        'Depuis Kaamelott, la formule avoue en riant qu’on n’a pas compris un mot compliqué. La citer sur soi-même est une élégance.',
        'Since Kaamelott, the phrase is a laughing admission of not having understood a fancy word. Using it about yourself is a graceful move.',
        '自《Kaamelott》以来，这句话就是笑着承认没听懂难词。用在自己身上，是一种优雅。',
      ),
      answers: [
        { id: 'a', text: t('qu’il n’a pas tout compris, avec autodérision', 'that they did not quite follow, self-mockingly', '带着自嘲承认没全听懂'), correct: true },
        { id: 'b', text: t('un désaccord ferme', 'firm disagreement', '坚决反对'), correct: false },
        { id: 'c', text: t('une correction de grammaire', 'a grammar correction', '在纠正语法'), correct: false },
        { id: 'd', text: t('une conclusion scientifique', 'a scientific conclusion', '科学结论'), correct: false },
      ],
    },
    {
      id: 'hu6',
      kind: 'boolean',
      points: 1,
      prompt: t('Un titre satirique français se signale par des guillemets ou un émoticône.', 'A French satirical headline flags itself with quotation marks or an emoji.', '法国的讽刺标题会用引号或表情符号自我标注。'),
      explanation: t(
        'Faux. La satire se présente avec le plus grand sérieux : c’est au lecteur de la voir. Le Gorafi piège tout le monde au moins une fois.',
        'False. Satire is delivered with the utmost seriousness: spotting it is the reader’s job. Le Gorafi catches everyone at least once.',
        '错。讽刺以最一本正经的面目出现：识破它是读者的任务。Le Gorafi 至少骗过每个人一次。',
      ),
      answers: [
        { id: 'a', text: t('Vrai', 'True', '对'), correct: false },
        { id: 'b', text: t('Faux', 'False', '错'), correct: true },
      ],
    },
  ],
};

/** Les six quiz du volet « vivre et se débrouiller ». */
export const vieQuizzes: Readonly<Record<string, Quiz>> = {
  [a1Comprendre.id]: a1Comprendre,
  [a2Sante.id]: a2Sante,
  [b1Actes.id]: b1Actes,
  [b2Demarches.id]: b2Demarches,
  [c1Orthographe.id]: c1Orthographe,
  [c2Humour.id]: c2Humour,
};
