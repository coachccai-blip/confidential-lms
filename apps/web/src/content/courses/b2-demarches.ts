import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_b2_demarches';

export const b2DemarchesCourse: Course = {
  id: ID,
  slug: 'b2-demarches',
  level: 'B2',
  accentFrom: '#818cf8',
  accentTo: '#4338ca',
  status: 'published',
  title: t('Vivre en France : les démarches', 'Living in France: paperwork', '在法国生活：行政手续'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Justificatif, attestation, dossier, préavis : la langue de l’administration française est une langue dans la langue. Voici son vocabulaire, ses documents types et ses codes — pour que la préfecture, la banque et le propriétaire cessent d’être des épreuves.',
    'Justificatif, attestation, dossier, préavis: French administrative language is a language within the language. Here are its vocabulary, its standard documents and its codes — so that the préfecture, the bank and the landlord stop being ordeals.',
    'justificatif、attestation、dossier、préavis：法国行政用语是语言中的语言。这里是它的词汇、标准文件和规则——让预约警局、办银行、租房子不再是磨难。',
  ),
  tags: [t('Vie en France', 'Life in France', '在法生活'), t('Administration', 'Paperwork', '行政')],
  modules: [
    {
      id: 'mod_b2de_1',
      courseId: ID,
      title: t('Papiers, logement, banque', 'Papers, housing, bank', '证件、住房、银行'),
      summary: t(
        'Les trois chantiers de toute installation en France.',
        'The three building sites of any move to France.',
        '在法国安顿下来的三大工程。',
      ),
      lessons: [
        {
          id: 'les_b2de_1',
          moduleId: 'mod_b2de_1',
          kind: 'text',
          durationMin: 12,
          title: t('La langue de l’administration', 'The language of the administration', '行政机构的语言'),
          summary: t(
            'Dix mots qui reviennent dans tous les dossiers, et ce qu’ils exigent vraiment.',
            'Ten words that appear in every file, and what they actually require.',
            '每份材料里都会出现的十个词，以及它们真正要求什么。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🏛️',
              text: t(
                'L’administration française ne demande jamais « une preuve que vous habitez ici » : elle demande « un justificatif de domicile de moins de trois mois ». Même chose, autre langue. Dix mots ouvrent la plupart des guichets — les voici.',
                'The French administration never asks for “proof that you live here”: it asks for “un justificatif de domicile de moins de trois mois”. Same thing, different language. Ten words open most counters — here they are.',
                '法国行政机构从不说“证明你住在这里”，而是要“un justificatif de domicile de moins de trois mois”。同一个意思，另一种语言。十个词能敲开大多数窗口——就是下面这些。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🔗',
              title: t('Le décodeur administratif', 'The admin decoder', '行政词汇解码器'),
              hint: t('Reliez chaque mot de dossier à ce qu’il désigne vraiment.', 'Match each file word to what it really means.', '把每个材料用词与其真实所指配对。'),
              widget: {
                kind: 'pairs',
                prompt: t('Ce mot désigne…', 'This word means…', '这个词指的是……'),
                pairs: [
                  { id: 'a1', left: 'un justificatif de domicile', right: t('une facture récente prouvant votre adresse — électricité, internet, quittance', 'a recent bill proving your address — electricity, internet, rent receipt', '证明住址的近期账单——电费、网费或房租收据') },
                  { id: 'a2', left: 'une attestation', right: t('un document officiel qui certifie un fait : assurance, hébergement, travail', 'an official paper certifying a fact: insurance, lodging, employment', '证明某一事实的正式文件：保险、住宿或工作') },
                  { id: 'a3', left: 'un acte de naissance', right: t('le document d’état civil, souvent exigé en version de moins de trois mois', 'the civil-status document, often required less than three months old', '出生证明文件，常要求三个月内的版本') },
                  { id: 'a4', left: 'un RIB', right: t('le relevé d’identité bancaire : les coordonnées de votre compte, à donner sans risque', 'your bank details slip: your account coordinates, safe to hand over', '银行账户信息单：你的账户号码，可放心提供') },
                  { id: 'a5', left: 'le préavis', right: t('le délai à respecter avant de partir — logement ou travail', 'the notice period before leaving — housing or job', '离开前须遵守的预告期——租房或工作皆然') },
                  { id: 'a6', left: 'une pièce à fournir', right: t('un document à joindre au dossier ; il en manque un, le dossier repart', 'a document to include in the file; one missing, the whole file bounces back', '需附入材料的文件；缺一份，整份材料就被退回') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'danger',
              emoji: '🚨',
              title: t('« De moins de trois mois » : la mention qui invalide tout', '“Less than three months old”: the clause that voids everything', '“三个月内”：让一切作废的条款'),
              text: t(
                'La moitié des dossiers refusés le sont pour un document trop ancien. « Un justificatif de moins de trois mois » signifie daté d’il y a moins de trois mois **au jour du dépôt** — pas au jour où vous l’avez imprimé. Vérifiez les dates la veille du rendez-vous.',
                'Half of all rejected files fail because a document is too old. “Un justificatif de moins de trois mois” means dated within three months **of the day you submit** — not the day you printed it. Check the dates the night before your appointment.',
                '被退回的材料有一半是因为文件过期。“un justificatif de moins de trois mois” 指的是**递交当天**往前三个月内开具的——不是你打印的那天。约见前一晚务必核对日期。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎧',
              title: t('Au guichet', 'At the counter', '在窗口前'),
              hint: t(
                'Le vocabulaire du guichet, à vitesse réelle. La tortue est là si besoin.',
                'Counter vocabulary at real speed. The turtle is there if you need it.',
                '窗口用语，真实语速。需要时可点乌龟慢速。',
              ),
              widget: {
                kind: 'listening',
                prompt: t('Que vous dit l’agent ?', 'What is the clerk telling you?', '工作人员在对你说什么？'),
                items: [
                  {
                    id: 'g1',
                    sentence: 'Il manque une pièce à votre dossier : le justificatif de domicile.',
                    question: t('Quel est le problème ?', 'What is the problem?', '问题出在哪里？'),
                    options: [
                      t('Un document est absent du dossier', 'A document is missing from the file', '材料里缺一份文件'),
                      t('Le dossier est refusé définitivement', 'The file is definitively rejected', '材料被彻底拒绝'),
                      t('L’adresse est fausse', 'The address is wrong', '地址有误'),
                    ],
                    answer: 0,
                    why: t('« Il manque une pièce » : il suffit d’apporter le document. Rien n’est refusé — pas encore.', '“Il manque une pièce”: you just need to bring the document. Nothing is rejected — yet.', '“il manque une pièce”：补上那份文件即可。目前还没有被拒。'),
                  },
                  {
                    id: 'g2',
                    sentence: 'Votre attestation date de plus de trois mois, il m’en faut une récente.',
                    question: t('Que devez-vous faire ?', 'What must you do?', '你需要做什么？'),
                    options: [
                      t('Obtenir une attestation plus récente', 'Get a more recent attestation', '重新开一份近期证明'),
                      t('Payer un supplément', 'Pay an extra fee', '补交费用'),
                      t('Revenir dans trois mois', 'Come back in three months', '三个月后再来'),
                    ],
                    answer: 0,
                    why: t('Le document est trop ancien : on refait le même, daté d’aujourd’hui. La plupart s’obtiennent en ligne en quelques minutes.', 'The paper is too old: you get the same one, dated today. Most can be downloaded online in minutes.', '文件过期了：重新开一份今天日期的即可。大多数几分钟就能在网上下载。'),
                  },
                  {
                    id: 'g3',
                    sentence: 'Je vous fais un récépissé, il vaut titre de séjour en attendant la carte.',
                    question: t('Que reçoit la personne ?', 'What does the person receive?', '这个人拿到了什么？'),
                    options: [
                      t('Un document provisoire qui remplace la carte', 'A temporary paper standing in for the card', '一份暂时替代正式卡片的文件'),
                      t('La carte définitive', 'The final card', '正式卡片'),
                      t('Un simple reçu de paiement', 'A mere payment receipt', '一张缴费收据'),
                    ],
                    answer: 0,
                    why: t('Le récépissé prouve que la demande est en cours et donne les mêmes droits en attendant. À garder sur soi.', 'The récépissé proves the application is under way and grants the same rights meanwhile. Keep it on you.', 'récépissé 证明申请正在办理，等待期间享有同样权利。要随身携带。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_b2de_2',
          moduleId: 'mod_b2de_1',
          kind: 'text',
          durationMin: 12,
          title: t('Le formulaire CERFA, zone par zone', 'The CERFA form, area by area', 'CERFA 表格的各个区域'),
          summary: t(
            'Le formulaire officiel type, et l’ordre dans lequel un dossier se construit.',
            'The standard official form, and the order in which a file is built.',
            '标准官方表格，以及一份材料的组建顺序。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '📋',
              text: t(
                'Tous les formulaires officiels français — impôts, séjour, allocations — portent un numéro CERFA et suivent la même architecture. Apprenez-la une fois : vous saurez remplir tous les autres.',
                'Every official French form — taxes, residence, benefits — carries a CERFA number and follows the same architecture. Learn it once: you will know how to fill in all the others.',
                '法国所有官方表格——税务、居留、补贴——都有一个 CERFA 编号，结构也完全相同。学会一次，其余的全都会填。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🗂️',
              title: t('Anatomie d’un CERFA', 'Anatomy of a CERFA', 'CERFA 表格的构造'),
              hint: t(
                'Cliquez chaque zone, {prenom}, ou suivez l’ordre de remplissage.',
                'Click each area, {prenom}, or follow the filling order.',
                '{prenom}，点击各区域，或按填写顺序浏览。',
              ),
              widget: {
                kind: 'layout',
                ratio: 0.707,
                zones: [
                  {
                    id: 'f1',
                    label: t('Le numéro CERFA', 'The CERFA number', 'CERFA 编号'),
                    x: 6, y: 4, w: 30, h: 7,
                    sample: 'cerfa n° 14571*05',
                    detail: t('L’identifiant du formulaire. Le chiffre après l’étoile est la version : un dossier déposé avec une vieille version peut être refusé.', 'The form’s identifier. The figure after the star is the version: filing with an old version can get the dossier refused.', '表格的编号。星号后的数字是版本号：用旧版本提交可能被拒。'),
                  },
                  {
                    id: 'f2',
                    label: t('L’objet de la demande', 'The purpose of the request', '申请事项'),
                    x: 40, y: 4, w: 54, h: 10,
                    sample: 'Demande d’attestation d’accueil',
                    detail: t('Le titre dit ce que ce formulaire obtient. Vérifiez-le : beaucoup de démarches ont des formulaires presque jumeaux.', 'The title says what this form obtains. Check it: many procedures have near-twin forms.', '标题说明这张表能办成什么事。要核对：许多手续的表格长得几乎一样。'),
                  },
                  {
                    id: 'f3',
                    label: t('L’état civil', 'Civil status', '个人信息'),
                    x: 6, y: 17, w: 88, h: 16,
                    sample: 'NOM : MARTIN — Prénom : {prenom}\nNé(e) le : 12/04/1994 à : Lyon\nNationalité : française',
                    detail: t('NOM en majuscules = nom de famille. « Né(e) le » : la date, « à » : la ville. Les dates s’écrivent jour/mois/année, jamais l’inverse.', 'NOM in capitals = surname. “Né(e) le”: the date; “à”: the town. Dates go day/month/year, never the other way.', '大写 NOM 是姓。“Né(e) le” 填日期，“à” 填城市。日期按日/月/年，绝不能颠倒。'),
                  },
                  {
                    id: 'f4',
                    label: t('Les coordonnées', 'Contact details', '联系方式'),
                    x: 6, y: 36, w: 88, h: 12,
                    sample: 'Adresse : 8 rue de la Paix — 69001 Lyon\nCourriel : {prenom}.martin@mail.fr',
                    detail: t('« Courriel » est le mot officiel pour e-mail. L’adresse doit correspondre exactement au justificatif de domicile joint.', '“Courriel” is the official word for e-mail. The address must match the enclosed proof of address exactly.', '“courriel” 是电子邮件的官方说法。地址必须与随附的住址证明完全一致。'),
                  },
                  {
                    id: 'f5',
                    label: t('Le cadre réservé', 'The reserved box', '专用栏'),
                    x: 6, y: 51, w: 88, h: 12,
                    sample: 'Cadre réservé à l’administration — ne rien inscrire',
                    detail: t('N’écrivez jamais dans ce cadre, même pour aider. Un formulaire annoté hors des cases peut être rejeté.', 'Never write in this box, even to be helpful. A form annotated outside its fields can be rejected.', '这一栏千万别写字，好心帮忙也不行。在栏外做标注的表格可能被退回。'),
                  },
                  {
                    id: 'f6',
                    label: t('L’engagement sur l’honneur', 'The sworn statement', '诚信声明'),
                    x: 6, y: 66, w: 88, h: 12,
                    sample: 'J’atteste sur l’honneur l’exactitude des renseignements ci-dessus.',
                    detail: t('« Sur l’honneur » engage votre responsabilité : une fausse déclaration est un délit, pas une simple erreur.', '“Sur l’honneur” makes you legally responsible: a false statement is an offence, not a mere mistake.', '“sur l’honneur” 意味着承担法律责任：虚假申报是违法行为，不是普通错误。'),
                  },
                  {
                    id: 'f7',
                    label: t('Fait à, le, signature', 'Place, date, signature', '地点、日期、签名'),
                    x: 40, y: 84, w: 54, h: 12,
                    sample: 'Fait à Lyon, le 9 janvier 2026\nSignature : {prenom} Martin',
                    detail: t('« Fait à » + la ville, « le » + la date, puis la signature. Sans ces trois éléments, le formulaire n’a aucune valeur.', '“Fait à” + town, “le” + date, then the signature. Without those three, the form is worthless.', '“Fait à” 加城市，“le” 加日期，再签名。缺了这三样，表格毫无效力。'),
                  },
                ],
              },
            },
            {
              type: 'interactive',
              emoji: '🔢',
              title: t('Monter un dossier, dans l’ordre', 'Building a file, in order', '按顺序组建一份材料'),
              hint: t('L’ordre évite les allers-retours au guichet.', 'The right order saves trips back to the counter.', '顺序对了，就不用来回跑窗口。'),
              widget: {
                kind: 'order',
                prompt: t('De la liste des pièces au dépôt :', 'From the list of documents to submission:', '从材料清单到递交：'),
                items: [
                  { id: 's1', text: t('Lire la liste des pièces à fournir, en entier', 'Read the list of required documents, in full', '通读所需材料清单') },
                  { id: 's2', text: t('Vérifier les dates : tout justificatif de moins de trois mois', 'Check the dates: every proof less than three months old', '核对日期：所有证明都须在三个月内') },
                  { id: 's3', text: t('Remplir le CERFA, dans sa dernière version', 'Fill in the CERFA, in its latest version', '填写最新版本的 CERFA 表格') },
                  { id: 's4', text: t('Photocopier chaque pièce — l’original reste avec vous', 'Photocopy every document — the original stays with you', '每份材料复印——原件自己保留') },
                  { id: 's5', text: t('Déposer le dossier et exiger un récépissé de dépôt', 'Submit the file and insist on a submission receipt', '递交材料并索取回执') },
                ],
                successNote: t(
                  'Le récépissé final est votre preuve de dépôt : sans lui, un dossier égaré est un dossier qui n’a jamais existé.',
                  'The final receipt is your proof of submission: without it, a lost file is a file that never existed.',
                  '回执是你递交材料的凭证：没有它，材料一旦遗失，就等于从未递交过。',
                ),
              },
            },
          ],
        },
        {
          id: 'les_b2de_3',
          moduleId: 'mod_b2de_1',
          kind: 'text',
          durationMin: 13,
          title: t('Logement et banque', 'Housing and bank', '住房与银行'),
          summary: t(
            'Bail, caution, préavis, RIB — puis à vous d’écrire au propriétaire.',
            'Lease, deposit, notice, bank details — then you write to the landlord.',
            '租约、押金、预告期、账户单——然后由你给房东写信。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🏠',
              text: t(
                'Louer un logement en France a son vocabulaire propre, et deux mots s’y ressemblent dangereusement. La **caution** est la somme bloquée en garantie ; le **garant** est la personne qui s’engage à payer si vous ne payez pas. Les confondre dans un dossier fait mauvaise impression.',
                'Renting in France comes with its own vocabulary, and two words are dangerously alike. The **caution** is the sum held as a guarantee; the **garant** is the person who commits to pay if you do not. Mixing them up in an application looks bad.',
                '在法国租房有一套专门词汇，其中两个词极易混淆。**caution** 是被押作担保的钱；**garant** 是承诺在你不付款时替你付的人。在申请材料里弄混会留下坏印象。',
              ),
            },
            {
              type: 'keyvalues',
              emoji: '🗝️',
              title: t('Le lexique du locataire', 'The tenant’s lexicon', '租房者词典'),
              entries: [
                { label: t('le bail', 'le bail', 'le bail'), value: t('Le contrat de location. Trois ans renouvelables pour un logement vide, un an pour un meublé.', 'The rental contract. Three renewable years for an unfurnished flat, one year furnished.', '租赁合同。空房三年可续，带家具一年。') },
                { label: t('la caution (le dépôt de garantie)', 'la caution (le dépôt de garantie)', 'la caution（押金）'), value: t('Un mois de loyer hors charges pour un vide. Restituée dans les deux mois après votre départ, moins les éventuelles retenues.', 'One month’s rent excluding charges for an unfurnished flat. Returned within two months of your leaving, minus any deductions.', '空房为一个月净房租。退房后两个月内返还，可能扣除相应费用。') },
                { label: t('le garant', 'le garant', 'le garant'), value: t('La personne — ou le dispositif public Visale — qui paiera si vous ne payez pas. Exigé de presque tous les locataires jeunes ou étrangers.', 'The person — or the public Visale scheme — who will pay if you do not. Required of nearly all young or foreign tenants.', '在你无法付款时代付的人——或公共担保项目 Visale。几乎所有年轻或外籍租客都被要求提供。') },
                { label: t('les charges', 'les charges', 'les charges'), value: t('Les frais collectifs en plus du loyer : eau, entretien, parfois chauffage. « CC » = charges comprises, « HC » = hors charges.', 'Shared costs on top of the rent: water, maintenance, sometimes heating. “CC” = charges included, “HC” = excluded.', '房租之外的公共费用：水费、维护费，有时含暖气。“CC” 指含杂费，“HC” 指不含。') },
                { label: t('le préavis', 'le préavis', 'le préavis'), value: t('Le délai entre votre lettre de départ et la fin du bail : un à trois mois. La lettre part en recommandé avec accusé de réception.', 'The period between your leaving letter and the end of the lease: one to three months. The letter goes by registered post with acknowledgement.', '从寄出退租信到租约结束的期限：一到三个月。信件须用挂号并要求回执。') },
                { label: t('l’état des lieux', 'l’état des lieux', 'l’état des lieux'), value: t('L’inspection du logement à l’entrée et à la sortie. Tout défaut non noté à l’entrée vous sera facturé à la sortie.', 'The inspection at move-in and move-out. Any defect not recorded at move-in will be billed to you at move-out.', '入住与退房时的房况清点。入住时没记录的瑕疵，退房时都会算在你头上。') },
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              emoji: '💡',
              title: t('Le recommandé avec accusé de réception', 'Registered post with acknowledgement', '带回执的挂号信'),
              text: t(
                'Préavis, réclamation, résiliation : toute lettre qui engage des délais part en **recommandé avec accusé de réception** — « en recommandé avec AR ». C’est la preuve légale de la date d’envoi, et le préavis court à partir de la réception.',
                'Notice, complaint, cancellation: any letter that starts a legal clock goes by **registered post with acknowledgement of receipt** — “en recommandé avec AR”. It is the legal proof of the sending date, and the notice period runs from receipt.',
                '退租、投诉、解约：凡是启动法律期限的信件，都要寄**带回执的挂号信**——“en recommandé avec AR”。它是寄出日期的法律凭证，预告期从对方签收之日起算。',
              ),
            },
            {
              type: 'interactive',
              emoji: '✍️',
              title: t('À vous : écrire au propriétaire', 'Your turn: writing to the landlord', '轮到你：给房东写信'),
              hint: t(
                'Un vrai courrier de locataire, avec la grille de relecture d’un examinateur.',
                'A real tenant’s letter, with an examiner’s check-list.',
                '一封真实的租客信函，配上考官级的自查清单。',
              ),
              widget: {
                kind: 'writing',
                prompt: t('Situation : le chauffage de votre appartement est en panne depuis une semaine.', 'Situation: your flat’s heating has been broken for a week.', '情境：你公寓的暖气坏了一个星期。'),
                brief: t(
                  'Écrivez au propriétaire (80 à 100 mots) : signalez la panne avec sa date, rappelez qu’il doit faire les réparations, demandez une intervention rapide et annoncez l’envoi en recommandé si rien ne bouge.',
                  'Write to the landlord (80–100 words): report the breakdown with its date, remind them the repairs are their responsibility, request a prompt intervention and announce a registered letter if nothing moves.',
                  '给房东写信（80–100 词）：报告故障及日期，提醒维修是其责任，要求尽快上门，并说明若无进展将寄挂号信。',
                ),
                targetWords: 90,
                criteria: [
                  { id: 'w1', text: t('La date du début de la panne est indiquée', 'The date the breakdown began is stated', '写明了故障开始的日期') },
                  { id: 'w2', text: t('Le ton reste factuel : aucun reproche personnel', 'The tone stays factual: no personal reproach', '语气保持客观：没有针对个人的指责') },
                  { id: 'w3', text: t('La demande est datée : « avant le… », « sous huit jours »', 'The request has a date: “avant le…”, “sous huit jours”', '诉求带期限：“avant le…”“sous huit jours”') },
                  { id: 'w4', text: t('La suite est annoncée : recommandé avec AR, puis conciliation', 'The next step is announced: registered letter, then mediation', '写明后续：挂号信，再调解') },
                  { id: 'w5', text: t('Le vocabulaire du cours est employé : intervention, réparations, préjudice…', 'Course vocabulary is used: intervention, réparations, préjudice…', '用上了本课词汇：intervention、réparations、préjudice……') },
                  { id: 'w6', text: t('Appel et formule de politesse encadrent la lettre', 'A greeting and a set closing phrase frame the letter', '信首有称呼，信尾有礼貌套语') },
                ],
                model: 'Madame,\n\nJe vous informe que le chauffage de l’appartement que je loue au 8 rue de la Paix est en panne depuis le 2 janvier. Malgré mon appel de lundi, aucune intervention n’a été programmée.\n\nLes réparations de cet ordre incombent au propriétaire. Je vous demande donc de faire intervenir un technicien avant le 15 janvier. Sans nouvelle de votre part à cette date, je vous adresserai ce signalement en recommandé avec accusé de réception.\n\nJe vous prie d’agréer, Madame, mes salutations distinguées.\n\n{prenom} Martin',
                modelNote: t(
                  'Observez la progression : le fait daté, le rappel du droit en une phrase (« incombent au propriétaire »), la demande datée, puis l’étape suivante — annoncée, jamais brandie.',
                  'Watch the progression: the dated fact, the legal reminder in one sentence (“incombent au propriétaire”), the dated request, then the next step — announced, never brandished.',
                  '注意推进的层次：带日期的事实、一句话点明法律责任（“incombent au propriétaire”）、带期限的诉求，然后是下一步——只作告知，绝不挥舞威胁。',
                ),
              },
            },
          ],
        },
      ],
    },
    {
      id: 'mod_b2de_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur les démarches, le logement et la banque.', 'Six questions on paperwork, housing and banking.', '六道题，考查行政手续、住房与银行。'),
      lessons: [
        {
          id: 'les_b2de_q',
          moduleId: 'mod_b2de_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_b2_demarches',
          title: t('Quiz — Les démarches', 'Quiz — Paperwork', '测验 — 行政手续'),
          summary: t('6 questions de survie administrative.', '6 questions of administrative survival.', '6 道行政生存题。'),
        },
      ],
    },
  ],
};
