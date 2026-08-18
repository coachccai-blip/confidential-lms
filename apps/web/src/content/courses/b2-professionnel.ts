import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_b2_professionnel';

export const b2ProfessionnelCourse: Course = {
  id: ID,
  slug: 'b2-professionnel',
  level: 'B2',
  accentFrom: '#818cf8',
  accentTo: '#4338ca',
  status: 'published',
  title: t('Le français professionnel', 'French for the workplace', '职场法语'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Écrire un courriel qui obtient une réponse, prendre la parole en réunion, candidater à un poste : les trois situations où le niveau de langue se voit immédiatement.',
    'Writing an email that gets an answer, speaking up in a meeting, applying for a job: the three situations where your level of French shows at once.',
    '写一封能得到回复的邮件、在会议上发言、申请职位：这三种场合最能立刻显露语言水平。',
  ),
  tags: [t('Monde du travail', 'World of work', '职场'), t('Écrit', 'Writing', '写作')],
  modules: [
    {
      id: 'mod_b2pr_1',
      courseId: ID,
      title: t('Écrire et parler au travail', 'Writing and speaking at work', '职场中的书面与口头表达'),
      summary: t(
        'Le courriel, la réunion, la candidature.',
        'The email, the meeting, the job application.',
        '邮件、会议、求职。',
      ),
      lessons: [
        {
          id: 'les_b2pr_1',
          moduleId: 'mod_b2pr_1',
          kind: 'text',
          durationMin: 12,
          title: t('Le courriel professionnel', 'The professional email', '职场邮件'),
          summary: t(
            'Formules d’appel, corps du message, formules de politesse — et le degré de formalité juste.',
            'Salutations, body, closing formulas — and the right degree of formality.',
            '称呼、正文、结尾套语——以及恰当的正式程度。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le courriel français reste plus formel que son équivalent anglophone. Trois éléments sont attendus et leur absence se remarque : une **formule d’appel**, un **objet explicite**, et une **formule de politesse finale** complète. Le message le plus court en comporte encore les trois.',
                'French emails remain more formal than their English-language equivalents. Three elements are expected and their absence is noticed: a **salutation**, an **explicit subject line**, and a full **closing formula**. Even the shortest message still contains all three.',
                '法语邮件比英语邮件更为正式。有三项要素不可缺少，缺了会被注意到：**称呼**、**明确的主题**，以及完整的**结尾套语**。即便最短的邮件也保留这三项。',
              ),
            },
            {
              type: 'table',
              caption: t('Choisir la formule d’appel', 'Choosing the salutation', '选择称呼'),
              headers: [t('Destinataire', 'Recipient', '收件人'), t('Formule', 'Salutation', '称呼'), t('Remarque', 'Note', '说明')],
              rows: [
                [t('Inconnu, service', 'Unknown person, department', '陌生人、某部门'), t('Madame, Monsieur,', 'Madame, Monsieur,', 'Madame, Monsieur,'), t('Les deux, séparés par une virgule. Jamais « Cher Monsieur ».', 'Both, separated by a comma. Never “Cher Monsieur”.', '两者并列，用逗号分隔。切勿写 “Cher Monsieur”。')],
                [t('Personne identifiée', 'Named person', '已知姓名'), t('Madame Durand,', 'Madame Durand,', 'Madame Durand,'), t('Le nom sans le prénom. Pas d’abréviation « Mme ».', 'Surname only, no first name. No “Mme” abbreviation.', '只写姓，不写名。不用缩写 “Mme”。')],
                [t('Collègue habituel', 'Regular colleague', '常打交道的同事'), t('Bonjour Sophie,', 'Bonjour Sophie,', 'Bonjour Sophie,'), t('Standard interne dans la plupart des entreprises.', 'The internal standard in most companies.', '多数企业内部的标准写法。')],
                [t('Supérieur hiérarchique', 'Line manager', '上级'), t('Bonjour Madame, / Madame,', 'Bonjour Madame, / Madame,', 'Bonjour Madame, / Madame,'), t('Selon l’usage de l’entreprise ; observez avant d’imiter.', 'Depending on company practice; observe before imitating.', '视公司惯例而定；先观察再模仿。')],
              ],
            },
            {
              type: 'keyvalues',
              title: t('Les formules de politesse finales', 'Closing formulas', '结尾套语'),
              entries: [
                { label: t('Cordialement,', 'Cordialement,', 'Cordialement,'), value: t('Le passe-partout absolu. Convient à 90 % des courriels professionnels.', 'The universal default. Suitable for 90 % of professional emails.', '万能默认写法，适用于 90 % 的职场邮件。') },
                { label: t('Bien cordialement,', 'Bien cordialement,', 'Bien cordialement,'), value: t('Légèrement plus chaleureux, pour un correspondant connu.', 'Slightly warmer, for someone you know.', '略显亲切，用于相识的收件人。') },
                { label: t('Bien à vous,', 'Bien à vous,', 'Bien à vous,'), value: t('Courtois et souple, de plus en plus courant.', 'Courteous and flexible, increasingly common.', '礼貌而灵活，日益常见。') },
                { label: t('Je vous prie d’agréer, Madame, l’expression de mes salutations distinguées.', 'The full formal closing', '完整的正式结尾'), value: t('Formule complète, réservée aux lettres officielles et aux candidatures. Reprenez exactement la formule d’appel utilisée en tête.', 'The full formula, reserved for official letters and job applications. Repeat exactly the salutation used at the top.', '完整套语，仅用于正式信函与求职信。须原样重复开头的称呼。') },
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              title: t('Les faux amis de la politesse', 'False friends of politeness', '礼貌用语中的“假朋友”'),
              text: t(
                'Ne traduisez pas « Best regards » par « Meilleures salutations » : c’est un calque. N’écrivez pas « Salutations » seul, qui sonne sec. Et évitez « Merci d’avance », que certains lecteurs perçoivent comme une pression.',
                'Do not translate “Best regards” as “Meilleures salutations”: that is a calque. Do not write “Salutations” on its own, which sounds curt. And avoid “Merci d’avance”, which some readers experience as pressure.',
                '不要把 “Best regards” 直译为 “Meilleures salutations”，那是生硬的照搬。也不要单写 “Salutations”，显得冷淡。此外避免 “Merci d’avance”，部分读者会觉得是施压。',
              ),
            },
            { type: 'heading', text: t('Le corps du message', 'The body of the message', '邮件正文') },
            {
              type: 'quote',
              text: t(
                'Objet : Demande de report de la réunion du 12 mars\n\nMadame Durand,\n\nJe me permets de vous écrire au sujet de la réunion prévue le 12 mars en début d’après-midi. Un déplacement client, confirmé ce matin, m’empêchera malheureusement d’y assister.\n\nSerait-il envisageable de la reporter au 14 ou au 15 mars ? Je reste disponible sur ces deux journées, à l’horaire qui vous conviendra.\n\nJe vous remercie par avance de votre compréhension et reste à votre disposition pour tout complément.\n\nBien cordialement,\nPaul Mercier',
                'Subject: Request to postpone the meeting of 12 March\n\nMadame Durand,\n\nI am writing regarding the meeting scheduled for 12 March in the early afternoon. A client visit, confirmed this morning, will unfortunately prevent me from attending.\n\nWould it be possible to move it to 14 or 15 March? I am available on both days, at whatever time suits you.\n\nThank you in advance for your understanding; I remain available should you need any further information.\n\nBest regards,\nPaul Mercier',
                '主题：关于推迟三月 12 日会议的请求\n\nMadame Durand，\n\n我写信是关于定于三月 12 日下午稍早时候的会议。今早确认的一次客户出差恐怕使我无法出席。\n\n是否有可能改到三月 14 日或 15 日？这两天我都有空，时间由您定。\n\n提前感谢您的理解，如需补充信息我随时候命。\n\n此致敬礼，\nPaul Mercier',
              ),
              source: t('Courriel type — objet, motif, demande, disponibilité, politesse', 'Model email — subject, reason, request, availability, closing', '范例邮件 —— 主题、缘由、请求、可安排时间、致意'),
            },
          ],
        },
        {
          id: 'les_b2pr_2',
          moduleId: 'mod_b2pr_1',
          kind: 'text',
          durationMin: 11,
          title: t('Prendre la parole en réunion', 'Speaking up in a meeting', '在会议上发言'),
          summary: t(
            'Demander la parole, exprimer un désaccord sans heurter, relancer et conclure.',
            'Asking for the floor, disagreeing without friction, moving things on and closing.',
            '请求发言、不伤和气地表达异议、推进讨论并收尾。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'En réunion, la difficulté n’est pas le vocabulaire technique — vous le connaissez — mais les **transitions** : entrer dans la conversation, marquer un désaccord, reprendre la main après une interruption. Une vingtaine de formules suffisent.',
                'In a meeting, the difficulty is not the technical vocabulary — you know that — but the **transitions**: getting into the conversation, signalling disagreement, taking back the floor after an interruption. Twenty or so formulas are enough.',
                '在会议中，难点不在专业词汇——那你已经掌握——而在于**过渡**：如何插入话题、表达异议、被打断后重新接过话头。约二十个句式就够了。',
              ),
            },
            {
              type: 'table',
              caption: t('Vingt formules pour la réunion', 'Twenty meeting formulas', '会议二十句'),
              headers: [t('Intention', 'Purpose', '意图'), t('Formules', 'Formulas', '句式')],
              rows: [
                [t('Prendre la parole', 'Taking the floor', '开始发言'), t('Si je peux me permettre… / J’aimerais revenir sur un point. / Puis-je ajouter quelque chose ?', 'Si je peux me permettre… / J’aimerais revenir sur un point. / Puis-je ajouter quelque chose ?', 'Si je peux me permettre… / J’aimerais revenir sur un point. / Puis-je ajouter quelque chose ?')],
                [t('Approuver', 'Agreeing', '赞同'), t('Je partage votre analyse. / C’est exactement mon avis. / Vous avez raison sur ce point.', 'Je partage votre analyse. / C’est exactement mon avis. / Vous avez raison sur ce point.', 'Je partage votre analyse. / C’est exactement mon avis. / Vous avez raison sur ce point.')],
                [t('Nuancer', 'Qualifying', '保留意见'), t('Je vous rejoins en partie, cependant… / C’est un point de vue, même si…', 'Je vous rejoins en partie, cependant… / C’est un point de vue, même si…', 'Je vous rejoins en partie, cependant… / C’est un point de vue, même si…')],
                [t('Contester', 'Disagreeing', '反对'), t('Je crains de ne pas partager cet avis. / Permettez-moi d’émettre une réserve.', 'Je crains de ne pas partager cet avis. / Permettez-moi d’émettre une réserve.', 'Je crains de ne pas partager cet avis. / Permettez-moi d’émettre une réserve.')],
                [t('Recentrer', 'Refocusing', '拉回主题'), t('Pour revenir à l’ordre du jour… / Nous nous éloignons peut-être du sujet.', 'Pour revenir à l’ordre du jour… / Nous nous éloignons peut-être du sujet.', 'Pour revenir à l’ordre du jour… / Nous nous éloignons peut-être du sujet.')],
                [t('Conclure', 'Concluding', '收尾'), t('En résumé, nous retenons trois points. / Je propose que nous en restions là.', 'En résumé, nous retenons trois points. / Je propose que nous en restions là.', 'En résumé, nous retenons trois points. / Je propose que nous en restions là.')],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              title: t('Le désaccord français passe par l’atténuation', 'French disagreement runs through hedging', '法语中的异议靠缓和语气'),
              text: t(
                'Dire « je ne suis pas d’accord » n’est pas impoli, mais reste abrupt en contexte professionnel. On préfère amortir : « je crains de ne pas partager », « je me demande si… ». Ce n’est pas de l’hypocrisie, c’est le registre attendu.',
                'Saying “je ne suis pas d’accord” is not rude, but it is abrupt in a professional setting. People prefer to cushion it: “je crains de ne pas partager”, “je me demande si…”. This is not hypocrisy, it is the expected register.',
                '说 “je ne suis pas d’accord” 并不失礼，但在职场语境中显得生硬。人们更倾向于缓和：“je crains de ne pas partager”“je me demande si…”。这不是虚伪，而是场合所要求的语体。',
              ),
            },
            {
              type: 'examples',
              title: t('Gérer les moments difficiles', 'Handling awkward moments', '应对棘手时刻'),
              items: [
                { fr: 'Pardon, je n’avais pas terminé.', gloss: t('Reprendre la parole après une interruption, sans agressivité.', 'Taking the floor back after an interruption, without aggression.', '被打断后接回话头，不带攻击性。') },
                { fr: 'Je n’ai pas bien saisi, pourriez-vous préciser ?', gloss: t('Demander une reformulation sans avouer une incompréhension totale.', 'Asking for a rewording without admitting total incomprehension.', '请对方重述，又不暴露完全没听懂。') },
                { fr: 'Je vous propose d’en discuter après la réunion.', gloss: t('Déplacer un désaccord hors de la table : très employé.', 'Moving a disagreement off the table: very commonly used.', '把分歧移出会场：非常常用。') },
                { fr: 'Vous vous trompez complètement.', gloss: t('Techniquement correct, professionnellement coûteux.', 'Technically correct, professionally costly.', '语法没错，但职场代价很高。'), incorrect: true },
              ],
            },
          ],
        },
        {
          id: 'les_b2pr_3',
          moduleId: 'mod_b2pr_1',
          kind: 'text',
          durationMin: 12,
          title: t('Candidater : CV, lettre et entretien', 'Applying: CV, cover letter and interview', '求职：简历、求职信与面试'),
          summary: t(
            'Les attentes françaises en matière de candidature, et les trois questions d’entretien à préparer.',
            'French expectations for job applications, and the three interview questions to prepare.',
            '法国求职的惯例要求，以及必须准备的三个面试问题。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le CV français tient sur **une page** jusqu’à une dizaine d’années d’expérience. Il ne comporte ni photo obligatoire, ni date de naissance, ni situation familiale : ces mentions ont été progressivement abandonnées pour limiter les discriminations.',
                'A French CV fits on **one page** for up to about ten years of experience. It includes no compulsory photo, no date of birth and no family situation: these details have gradually been dropped to limit discrimination.',
                '十年以内工作经验的法国简历应控制在**一页**。不强制附照片，也不写出生日期和家庭状况：这些内容已逐步取消，以减少歧视。',
              ),
            },
            {
              type: 'keyvalues',
              title: t('La lettre de motivation en trois temps', 'The cover letter in three movements', '求职信的三段式'),
              entries: [
                { label: t('Vous', 'You (the company)', '贵方'), value: t('Ce que vous savez de l’entreprise et pourquoi ce poste précis. Jamais de généralités.', 'What you know about the company and why this particular role. Never generalities.', '你对该公司的了解，以及为何是这个岗位。切忌泛泛而谈。') },
                { label: t('Moi', 'Me', '本人'), value: t('Deux ou trois réalisations chiffrées, pas une paraphrase du CV.', 'Two or three quantified achievements, not a paraphrase of the CV.', '两三项可量化的成绩，而非简历的复述。') },
                { label: t('Nous', 'Us', '双方'), value: t('Ce que la rencontre produirait concrètement, et la demande d’entretien.', 'What the match would concretely produce, and the request for an interview.', '双方结合能带来什么，以及请求面试。') },
              ],
            },
            {
              type: 'table',
              caption: t('Trois questions d’entretien et ce qu’elles cherchent', 'Three interview questions and what they are after', '三个面试问题及其考查点'),
              headers: [t('Question', 'Question', '问题'), t('Ce qu’on évalue', 'What is assessed', '考查点'), t('Stratégie', 'Strategy', '应答策略')],
              rows: [
                [t('Parlez-moi de vous.', 'Tell me about yourself.', 'Parlez-moi de vous.'), t('la capacité à synthétiser une trajectoire professionnelle', 'the ability to summarise a professional trajectory', '概括职业经历的能力'), t('Deux minutes, trois étapes, une conclusion tournée vers le poste.', 'Two minutes, three stages, a conclusion pointing at the role.', '两分钟、三个阶段，结尾落到该岗位。')],
                [t('Quels sont vos défauts ?', 'What are your weaknesses?', 'Quels sont vos défauts ?'), t('la lucidité, pas la perfection', 'self-awareness, not perfection', '自我认知，而非完美'), t('Un défaut réel, mineur pour le poste, et ce que vous en faites.', 'A real weakness, minor for the role, and what you do about it.', '一个真实、对该岗位影响不大的缺点，以及你的应对。')],
                [t('Pourquoi nous ?', 'Why us?', 'Pourquoi nous ?'), t('la préparation effective', 'genuine preparation', '是否真正做了功课'), t('Un fait précis sur l’entreprise, relié à votre projet.', 'A specific fact about the company, tied to your plans.', '关于公司的一个具体事实，并与你的规划相连。')],
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              title: t('Le vouvoiement est la règle', 'Vouvoiement is the rule', '面试一律用 vous'),
              text: t(
                'En entretien, on vouvoie systématiquement, même dans une entreprise où tout le monde se tutoie au quotidien. Si le recruteur propose le tutoiement, suivez-le ; ne le proposez jamais vous-même.',
                'In an interview you always use “vous”, even in a company where everyone uses “tu” day to day. If the recruiter offers “tu”, follow their lead; never offer it yourself.',
                '面试中一律用 “vous”，即便公司日常人人互称 “tu”。若招聘方主动提出用 “tu”，可以跟随；但绝不要由你先提。',
              ),
            },
            {
              type: 'examples',
              title: t('Formules utiles en entretien', 'Useful interview formulas', '面试实用句式'),
              items: [
                { fr: 'Ce poste m’intéresse pour deux raisons précises.', gloss: t('Annoncer le nombre d’arguments structure immédiatement la réponse.', 'Announcing how many arguments you have instantly structures the answer.', '先说明有几点理由，能立刻使回答条理清晰。') },
                { fr: 'Dans mon poste précédent, j’ai réduit les délais de traitement de 30 %.', gloss: t('Une réalisation chiffrée vaut dix adjectifs.', 'One quantified achievement is worth ten adjectives.', '一项可量化的成绩胜过十个形容词。') },
                { fr: 'Auriez-vous des questions sur mon parcours ?', gloss: t('Reprendre l’initiative à la fin, sans forcer.', 'Taking back the initiative at the end, without forcing it.', '在结尾自然地重新掌握主动。') },
                { fr: 'Je suis passionné et motivé.', gloss: t('Sans exemple concret, ces mots ne pèsent rien.', 'Without a concrete example these words carry no weight.', '没有具体例证，这些词毫无分量。'), incorrect: true },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mod_b2pr_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur le courriel, la réunion et la candidature.', 'Six questions on emails, meetings and job applications.', '六道题，考查邮件、会议与求职。'),
      lessons: [
        {
          id: 'les_b2pr_q',
          moduleId: 'mod_b2pr_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_b2_professionnel',
          title: t('Quiz — Français professionnel', 'Quiz — French for the workplace', '测验 — 职场法语'),
          summary: t('6 questions sur les usages du monde du travail.', '6 questions on workplace conventions.', '6 道题，考查职场惯例。'),
        },
      ],
    },
  ],
};
