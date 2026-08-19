import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_b1_actes';

export const b1ActesCourse: Course = {
  id: ID,
  slug: 'b1-actes',
  level: 'B1',
  accentFrom: '#5eead4',
  accentTo: '#0ea5e9',
  status: 'published',
  title: t('Demander, refuser, se plaindre', 'Asking, refusing, complaining', '请求、拒绝、投诉'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Votre grammaire est correcte, et pourtant quelque chose coince ? C’est ici que ça se joue : demander sans donner d’ordre, dire non sans vexer, réclamer sans agresser. Le cours qui rend le français social.',
    'Your grammar is fine, yet something still jars? This is where it happens: asking without ordering, saying no without offending, complaining without attacking. The course that makes your French social.',
    '语法没错，却总觉得哪里不对？关键就在这里：请求而不像命令、拒绝而不伤人、投诉而不咄咄逼人。这门课让你的法语变得得体。',
  ),
  tags: [t('Oral', 'Speaking', '口语'), t('Politesse', 'Politeness', '礼貌')],
  modules: [
    {
      id: 'mod_b1ac_1',
      courseId: ID,
      title: t('Les trois gestes sociaux', 'The three social moves', '三种社交动作'),
      summary: t(
        'Demander, refuser, réclamer : trois situations, trois mécaniques.',
        'Asking, refusing, claiming: three situations, three mechanics.',
        '请求、拒绝、申诉：三种场合，三套方法。',
      ),
      lessons: [
        {
          id: 'les_b1ac_1',
          moduleId: 'mod_b1ac_1',
          kind: 'text',
          durationMin: 11,
          title: t('Demander : l’échelle de politesse', 'Asking: the politeness ladder', '请求：礼貌的阶梯'),
          summary: t(
            'Du direct au très poli, la même demande à quatre étages.',
            'From direct to very polite, the same request on four rungs.',
            '从直接到极为客气，同一个请求的四个层级。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🪜',
              text: t(
                'En français, la politesse ne s’ajoute pas avec des mots comme « please » : elle se fabrique dans le verbe. Plus la forme s’éloigne du présent — conditionnel, imparfait — plus la demande est douce. C’est une échelle, et chaque situation a son étage.',
                'In French, politeness is not added with words like “please”: it is built inside the verb. The further the form moves from the present — conditional, imperfect — the softer the request. It is a ladder, and every situation has its rung.',
                '法语的礼貌不是靠加一个 “please”：它是在动词里制造出来的。动词形式离现在时越远——条件式、未完成过去时——请求就越柔和。这是一架梯子，每种场合都有自己的一级。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎚️',
              title: t('La même demande, quatre étages', 'The same request, four rungs', '同一请求，四个层级'),
              hint: t(
                'Montez l’échelle cran par cran, {prenom} : écoutez comme le ton change.',
                'Climb the ladder rung by rung, {prenom}: hear how the tone shifts.',
                '{prenom}，一级一级往上爬：听听语气如何变化。',
              ),
              widget: {
                kind: 'switcher',
                steps: [
                  {
                    id: 'p1',
                    label: t('Direct', 'Direct', '直接'),
                    headline: t('Entre proches uniquement', 'Only between close people', '仅限亲近的人'),
                    example: 'Tu peux fermer la fenêtre ?',
                    gloss: t('Présent + intonation montante. Parfait avec un ami ; un peu brusque avec quiconque d’autre.', 'Present tense + rising intonation. Fine with a friend; a touch abrupt with anyone else.', '现在时加升调。对朋友没问题；对其他人略显唐突。'),
                  },
                  {
                    id: 'p2',
                    label: t('Poli', 'Polite', '客气'),
                    headline: t('Le conditionnel adoucit', 'The conditional softens', '条件式使语气变柔'),
                    example: 'Tu pourrais fermer la fenêtre ?',
                    gloss: t('« Pourrais » au lieu de « peux » : la demande devient une possibilité, pas une attente. Un seul verbe change, tout change.', '“Pourrais” instead of “peux”: the request becomes a possibility, not an expectation. One verb changes, everything changes.', '“pourrais” 替代 “peux”：请求成了一种可能，而非理所当然。只换一个动词，一切都变了。'),
                  },
                  {
                    id: 'p3',
                    label: t('Formel', 'Formal', '正式'),
                    headline: t('Vous + conditionnel', 'Vous + conditional', 'vous + 条件式'),
                    example: 'Est-ce que vous pourriez fermer la fenêtre, s’il vous plaît ?',
                    gloss: t('La forme passe-partout au travail et avec les inconnus. Impossible de se tromper avec elle.', 'The all-purpose form at work and with strangers. You cannot go wrong with it.', '职场和陌生人场合的万能形式。用它绝不会出错。'),
                  },
                  {
                    id: 'p4',
                    label: t('Très formel', 'Very formal', '非常正式'),
                    headline: t('La demande enveloppée', 'The wrapped-up request', '包装过的请求'),
                    example: 'Cela vous ennuierait-il de fermer la fenêtre ?',
                    gloss: t('On demande si cela dérange, au lieu de demander la chose. Réservé à l’écrit soigné et aux situations délicates — au quotidien, ce serait trop.', 'You ask whether it bothers them, instead of asking for the thing. For careful writing and delicate situations — in daily life it would be too much.', '不直接要求，而是问对方是否介意。用于讲究的书面语和微妙场合——日常这样说就过头了。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('« Je veux » est à bannir face à un guichet', 'Never say “je veux” at a counter', '在窗口前别说 “je veux”'),
              text: t(
                '« Je veux un billet » sonne comme un caprice d’enfant. Dites **je voudrais**, ou **j’aimerais** : c’est la même chose, un cran plus bas. La différence s’entend immédiatement, et l’accueil change avec elle.',
                '“Je veux un billet” sounds like a child’s demand. Say **je voudrais** or **j’aimerais**: the same thing, one notch lower. The difference is heard at once, and the welcome changes with it.',
                '“Je veux un billet” 听起来像小孩子耍性子。要说 **je voudrais** 或 **j’aimerais**：意思一样，低一个音阶。差别立刻能听出来，对方的态度也随之改变。',
              ),
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('Choisissez le bon étage', 'Pick the right rung', '选对层级'),
              hint: t('Regardez à qui l’on parle avant de choisir.', 'Look at who is being spoken to before choosing.', '选之前先看说话的对象是谁。'),
              widget: {
                kind: 'fill',
                prompt: t('Quelle forme convient ?', 'Which form fits?', '哪种形式合适？'),
                items: [
                  {
                    id: 'f1',
                    before: 'Au guichet de la gare : « Bonjour, je',
                    after: 'un aller-retour pour Lille, s’il vous plaît. »',
                    options: ['voudrais', 'veux', 'voulais'],
                    answer: 'voudrais',
                    why: t('Le conditionnel de politesse est la norme au guichet. « Veux » est brusque, « voulais » raconterait le passé.', 'The polite conditional is the norm at a counter. “Veux” is abrupt; “voulais” would be narrating the past.', '窗口前用礼貌条件式是常规。“veux” 生硬，“voulais” 则变成在讲过去。'),
                  },
                  {
                    id: 'f2',
                    before: 'À un collègue peu connu : «',
                    after: '-vous m’envoyer le dossier avant midi ? »',
                    options: ['Pourriez', 'Pouvez', 'Pouviez'],
                    answer: 'Pourriez',
                    why: t('« Pourriez-vous » est la formule professionnelle par défaut. « Pouvez-vous » reste correct, mais un ton plus sec.', '“Pourriez-vous” is the default professional formula. “Pouvez-vous” is still correct, but a notch drier.', '“Pourriez-vous” 是职场默认句式。“Pouvez-vous” 也对，但语气干硬一档。'),
                  },
                  {
                    id: 'f3',
                    before: 'Une demande délicate à son chef : « J’',
                    after: 'vous parler de mon salaire, si vous avez un moment. »',
                    options: ['aimerais', 'aime', 'aimais'],
                    answer: 'aimerais',
                    why: t('« J’aimerais » ouvre les sujets sensibles : le conditionnel laisse à l’autre la liberté de dire non — en apparence.', '“J’aimerais” opens sensitive topics: the conditional leaves the other person free to say no — in appearance.', '“j’aimerais” 用来开启敏感话题：条件式表面上给对方留了拒绝的自由。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_b1ac_2',
          moduleId: 'mod_b1ac_1',
          kind: 'text',
          durationMin: 11,
          title: t('Refuser sans vexer', 'Refusing without offending', '拒绝而不伤人'),
          summary: t(
            'L’anatomie du non à la française : remercier, regretter, compenser.',
            'The anatomy of the French no: thank, regret, offer something back.',
            '法式拒绝的解剖：致谢、遗憾、补偿。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🚪',
              text: t(
                'Un « non » sec ferme la relation en même temps que la demande. Le refus français se construit en trois temps : on remercie, on regrette, on propose autre chose. Le non est enveloppé — mais il reste un non.',
                'A flat “non” closes the relationship along with the request. The French refusal is built in three beats: you thank, you regret, you offer something else. The no is wrapped up — but it is still a no.',
                '干巴巴的 “non” 在拒绝请求的同时也关上了关系的门。法式拒绝分三步：致谢、表示遗憾、提出替代方案。这个“不”被包装起来了——但它仍然是“不”。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔬',
              title: t('Un refus parfait, décomposé', 'A perfect refusal, taken apart', '拆解一次完美的拒绝'),
              hint: t('Cliquez chaque segment pour voir son rôle.', 'Click each segment to see its role.', '点击每一段，看它的作用。'),
              widget: {
                kind: 'sentence',
                segments: [
                  {
                    text: 'C’est très gentil d’avoir pensé à moi,',
                    role: t('Le remerciement', 'The thank-you', '致谢'),
                    detail: t('On valide d’abord la demande : elle méritait d’être faite. L’autre ne perd pas la face.', 'You first validate the request: it deserved to be made. The other person keeps face.', '先肯定对方的请求：这个请求值得提出。对方不会丢面子。'),
                  },
                  {
                    text: 'malheureusement',
                    role: t('L’annonce du refus', 'The signal of refusal', '拒绝的信号'),
                    detail: t('« Malheureusement », « hélas », « je suis désolé » : le mot-signal qui prépare l’autre. Après lui, le non n’est plus une surprise.', '“Malheureusement”, “hélas”, “je suis désolé”: the signal word that prepares the listener. After it, the no is no longer a surprise.', '“malheureusement”“hélas”“je suis désolé”：让对方有心理准备的信号词。它一出现，“不”就不再突然。'),
                  },
                  {
                    text: 'je ne suis pas libre samedi,',
                    role: t('Le refus et sa raison', 'The refusal and its reason', '拒绝及理由'),
                    detail: t('Une raison courte, sans excès de détail : trop se justifier donne l’impression de mentir.', 'A short reason, without piling on detail: over-justifying sounds like lying.', '理由要简短，别堆细节：解释过多反而像在撒谎。'),
                  },
                  {
                    text: 'mais je suis partant pour la semaine prochaine.',
                    role: t('La contre-proposition', 'The counter-offer', '替代提议'),
                    detail: t('La clé du refus réussi : on ferme une porte, on en ouvre une autre. Sans elle, le non reste un mur.', 'The key to a successful refusal: you close one door and open another. Without it, the no stays a wall.', '成功拒绝的关键：关上一扇门，同时打开另一扇。没有它，“不”就是一堵墙。'),
                  },
                ],
              },
            },
            {
              type: 'interactive',
              emoji: '🎧',
              title: t('Oui, non, ou peut-être ?', 'Yes, no, or maybe?', '是、否，还是也许？'),
              hint: t(
                'Les refus français sont si enveloppés qu’on peut les prendre pour des oui. Écoutez bien.',
                'French refusals are so wrapped up that they can pass for a yes. Listen closely.',
                '法式拒绝包装得太好，常被误当成同意。仔细听。',
              ),
              widget: {
                kind: 'listening',
                prompt: t('La personne accepte-t-elle ?', 'Is the person accepting?', '这个人答应了吗？'),
                items: [
                  {
                    id: 'l1',
                    sentence: 'C’est adorable, mais je vais devoir décliner : je suis déjà pris ce soir-là.',
                    question: t('Que répond la personne ?', 'What is the person answering?', '这个人的回答是什么？'),
                    options: [
                      t('Non, poliment', 'No, politely', '礼貌地拒绝'),
                      t('Oui, avec plaisir', 'Yes, gladly', '欣然接受'),
                      t('Elle demande à réfléchir', 'They ask for time to think', '要求考虑一下'),
                    ],
                    answer: 0,
                    why: t('« Décliner » = refuser poliment. Le compliment d’ouverture ne change rien à la réponse.', '“Décliner” = to refuse politely. The opening compliment changes nothing about the answer.', '“décliner” 即礼貌拒绝。开头的恭维不改变答案本身。'),
                  },
                  {
                    id: 'l2',
                    sentence: 'Écoute, pourquoi pas, mais laisse-moi vérifier mon agenda et je te redis ça demain.',
                    question: t('Que répond la personne ?', 'What is the person answering?', '这个人的回答是什么？'),
                    options: [
                      t('Peut-être : elle ne s’engage pas encore', 'Maybe: they are not committing yet', '也许：还没有承诺'),
                      t('Oui, c’est confirmé', 'Yes, confirmed', '确定答应'),
                      t('Non, définitivement', 'No, definitively', '断然拒绝'),
                    ],
                    answer: 0,
                    why: t('« Pourquoi pas » + « je te redis ça » : une ouverture sans engagement. Rien n’est confirmé tant que la réponse n’est pas revenue.', '“Pourquoi pas” + “je te redis ça”: openness without commitment. Nothing is settled until the answer comes back.', '“pourquoi pas” 加 “je te redis ça”：有意愿但无承诺。在回复到来之前，什么都没定。'),
                  },
                  {
                    id: 'l3',
                    sentence: 'Ah, j’aurais adoré ! Une prochaine fois, promis.',
                    question: t('Que répond la personne ?', 'What is the person answering?', '这个人的回答是什么？'),
                    options: [
                      t('Non — le conditionnel passé enterre l’idée', 'No — the past conditional buries the idea', '拒绝——过去条件式已给这事画上句号'),
                      t('Oui, pour la prochaine fois', 'Yes, for next time', '答应下次参加'),
                      t('Elle hésite encore', 'They are still hesitating', '还在犹豫'),
                    ],
                    answer: 0,
                    why: t('« J’aurais adoré » : l’occasion est déjà passée dans sa tête. « Une prochaine fois » sans date est une formule de sortie, pas un engagement.', '“J’aurais adoré”: in their mind the occasion is already gone. “Une prochaine fois” with no date is an exit phrase, not a commitment.', '“j’aurais adoré”：在对方心里这事已经过去。没有日期的 “une prochaine fois” 是脱身用语，不是承诺。'),
                  },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'info',
              emoji: '🧭',
              title: t('Décoder les « oui » qui veulent dire non', 'Decoding the yeses that mean no', '识破那些意为“不”的“是”'),
              text: t(
                '« On se rappelle », « faut qu’on se fasse un truc », « je vais voir » : sans date ni action concrète, ces formules closent la conversation plus qu’elles ne promettent. Un vrai oui français vient avec un quand.',
                '“On se rappelle”, “faut qu’on se fasse un truc”, “je vais voir”: with no date or concrete action, these phrases close the conversation more than they promise anything. A real French yes comes with a when.',
                '“On se rappelle”“faut qu’on se fasse un truc”“je vais voir”：没有日期、没有具体行动，这些话与其说是承诺，不如说是收场。真正的法式同意，一定带着时间。',
              ),
            },
          ],
        },
        {
          id: 'les_b1ac_3',
          moduleId: 'mod_b1ac_1',
          kind: 'text',
          durationMin: 13,
          title: t('Réclamer et obtenir', 'Complaining and getting results', '投诉并达成目的'),
          summary: t(
            'La méthode en quatre temps, puis à vous d’écrire votre première réclamation.',
            'The four-beat method, then you write your first complaint.',
            '四步法，然后由你写出第一封投诉信。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '⚖️',
              text: t(
                'Une réclamation efficace n’est ni une colère ni une excuse : c’est un dossier. Les faits, le problème, la demande précise, le délai. Celui qui reste factuel obtient ; celui qui attaque reçoit des excuses — et rien d’autre.',
                'An effective complaint is neither a rant nor an apology: it is a case file. The facts, the problem, the precise request, the deadline. Whoever stays factual gets results; whoever attacks gets an apology — and nothing else.',
                '有效的投诉既不是发火也不是赔小心：它是一份卷宗。事实、问题、明确的诉求、期限。摆事实的人能拿到结果；发起攻击的人只能得到一句道歉——再无其他。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔢',
              title: t('Les quatre temps d’une réclamation', 'The four beats of a complaint', '投诉的四个步骤'),
              hint: t('Remettez la méthode dans l’ordre.', 'Put the method back in order.', '把方法排回正确顺序。'),
              widget: {
                kind: 'order',
                prompt: t('Du constat à la demande :', 'From the facts to the request:', '从陈述事实到提出诉求：'),
                items: [
                  { id: 'o1', text: t('Rappeler les faits, avec dates et références', 'State the facts, with dates and references', '陈述事实，附日期和编号') },
                  { id: 'o2', text: t('Décrire le problème constaté, sans juger', 'Describe the problem observed, without judging', '描述发现的问题，不作评判') },
                  { id: 'o3', text: t('Formuler une demande précise : remboursement, échange, geste', 'Make a precise request: refund, exchange, gesture', '提出明确诉求：退款、换货或补偿') },
                  { id: 'o4', text: t('Fixer un délai et annoncer la suite si rien ne vient', 'Set a deadline and announce the next step if nothing comes', '设定期限，并说明若无回应的后续') },
                ],
                successNote: t(
                  'C’est exactement le plan attendu dans la lettre de réclamation du DELF B1 — et celui qui fonctionne dans la vraie vie.',
                  'This is exactly the plan expected in the DELF B1 complaint letter — and the one that works in real life.',
                  '这正是 DELF B1 投诉信所要求的框架——也是现实生活中真正管用的那一套。',
                ),
              },
            },
            {
              type: 'examples',
              emoji: '🎯',
              title: t('Le ton juste, phrase par phrase', 'The right tone, sentence by sentence', '恰当的语气，逐句对照'),
              items: [
                {
                  fr: 'Votre service est nul, c’est inadmissible !',
                  incorrect: true,
                  gloss: t('Le jugement (« nul ») donne à l’autre une raison de se braquer au lieu de traiter le dossier.', 'The judgement (“nul”) gives the other side a reason to dig in instead of handling the case.', '“nul” 这样的评判给了对方抵触的理由，而不是处理问题的动力。'),
                },
                {
                  fr: 'Commande n° 4521 du 3 mars : le colis est arrivé ouvert et incomplet.',
                  gloss: t('Une référence, une date, deux faits vérifiables. Impossible à contester, donc obligé d’y répondre.', 'A reference, a date, two checkable facts. Impossible to dispute, therefore impossible to ignore.', '一个编号、一个日期、两个可核实的事实。无从反驳，也就无法不回应。'),
                },
                {
                  fr: 'Je vous demande donc le remboursement des 45 euros, sous quinze jours.',
                  gloss: t('La demande chiffrée avec son délai. « Sous quinze jours » est la formule consacrée.', 'The request with a figure and its deadline. “Sous quinze jours” is the set phrase.', '带金额和期限的诉求。“sous quinze jours” 是固定说法。'),
                },
                {
                  fr: 'Sans réponse de votre part, je saisirai une association de consommateurs.',
                  gloss: t('L’étape suivante, annoncée calmement au futur. Ce n’est pas une menace : c’est une information.', 'The next step, calmly announced in the future tense. Not a threat: information.', '用将来时平静地告知下一步。这不是威胁，是告知。'),
                },
              ],
            },
            {
              type: 'interactive',
              emoji: '✍️',
              title: t('À vous : votre première réclamation', 'Your turn: your first complaint', '轮到你：写第一封投诉信'),
              hint: t(
                'Écrivez, puis relisez-vous avec la grille — c’est elle, la vraie leçon.',
                'Write, then reread yourself with the check-list — that is the real lesson.',
                '先写，再用清单自查——清单才是真正的功课。',
              ),
              widget: {
                kind: 'writing',
                prompt: t('Situation : un vendeur en ligne vous a livré un pull troué.', 'Situation: an online shop delivered you a jumper with a hole in it.', '情境：网店寄来的毛衣上有个洞。'),
                brief: t(
                  'Écrivez le message de réclamation (60 à 80 mots) : les faits avec une date, le problème, votre demande précise, le délai. Restez factuel du début à la fin.',
                  'Write the complaint message (60–80 words): the facts with a date, the problem, your precise request, the deadline. Stay factual from start to finish.',
                  '写一封投诉信（60–80 词）：带日期的事实、问题、明确诉求、期限。从头到尾只摆事实。',
                ),
                targetWords: 70,
                criteria: [
                  { id: 'c1', text: t('J’ai donné une date et une référence de commande', 'I gave a date and an order reference', '我写了日期和订单编号') },
                  { id: 'c2', text: t('J’ai décrit le problème sans mot de jugement (« nul », « honteux »…)', 'I described the problem with no judgement words (“nul”, “honteux”…)', '我描述了问题，没用评判性词语（“nul”“honteux”……）') },
                  { id: 'c3', text: t('Ma demande est précise : remboursement **ou** échange, pas « faites quelque chose »', 'My request is precise: refund **or** exchange, not “do something”', '诉求明确：退款**或**换货，而不是“想想办法”') },
                  { id: 'c4', text: t('J’ai fixé un délai avec « sous … jours »', 'I set a deadline with “sous … jours”', '我用 “sous … jours” 设定了期限') },
                  { id: 'c5', text: t('J’ai utilisé au moins un conditionnel de politesse', 'I used at least one polite conditional', '我至少用了一个礼貌条件式') },
                  { id: 'c6', text: t('J’ouvre par « Madame, Monsieur, » et je ferme par une formule de politesse', 'I open with “Madame, Monsieur,” and close with a set phrase', '开头用 “Madame, Monsieur,”，结尾有礼貌套语') },
                ],
                model: 'Madame, Monsieur,\n\nJ’ai reçu le 12 mars le pull commandé sur votre site (commande n° 8804). En ouvrant le colis, j’ai constaté un trou de deux centimètres sur la manche gauche.\n\nJe vous demande donc soit l’échange de l’article, soit son remboursement, sous quinze jours. Vous trouverez en pièce jointe une photo du défaut.\n\nJe vous remercie par avance et vous prie d’agréer, Madame, Monsieur, mes salutations distinguées.\n\n{prenom} Martin',
                modelNote: t(
                  'Repérez la mécanique : date + référence, un fait mesurable (« deux centimètres »), une alternative précise, le délai, et pas un seul mot de colère.',
                  'Spot the machinery: date + reference, a measurable fact (“deux centimètres”), a precise alternative, the deadline, and not one angry word.',
                  '注意其中的机关：日期加编号、可测量的事实（“deux centimètres”）、明确的两选一诉求、期限——而且没有一个愤怒的字眼。',
                ),
              },
            },
          ],
        },
      ],
    },
    {
      id: 'mod_b1ac_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur la demande, le refus et la réclamation.', 'Six questions on asking, refusing and complaining.', '六道题，考查请求、拒绝与投诉。'),
      lessons: [
        {
          id: 'les_b1ac_q',
          moduleId: 'mod_b1ac_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_b1_actes',
          title: t('Quiz — Demander, refuser, se plaindre', 'Quiz — Asking, refusing, complaining', '测验 — 请求、拒绝、投诉'),
          summary: t('6 questions de tact.', '6 questions of tact.', '6 道分寸题。'),
        },
      ],
    },
  ],
};
