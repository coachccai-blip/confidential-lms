import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_a2_sante';

export const a2SanteCourse: Course = {
  id: ID,
  slug: 'a2-sante',
  level: 'A2',
  accentFrom: '#67e8f9',
  accentTo: '#0891b2',
  status: 'published',
  title: t('Le corps et la santé', 'Body and health', '身体与健康'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Dire où on a mal, comprendre le médecin, lire une ordonnance et connaître les numéros d’urgence. Le vocabulaire qu’on espère ne jamais utiliser — et qu’il faut donc savoir avant d’en avoir besoin.',
    'Saying where it hurts, understanding the doctor, reading a prescription and knowing the emergency numbers. The vocabulary you hope never to use — which is exactly why you must know it before you need it.',
    '说清哪里疼、听懂医生的话、看懂处方、记住急救电话。这是你希望永远用不上的词汇——正因如此，必须在需要之前就学会。',
  ),
  tags: [t('Vie quotidienne', 'Everyday life', '日常生活'), t('Santé', 'Health', '健康')],
  modules: [
    {
      id: 'mod_a2sa_1',
      courseId: ID,
      title: t('Du symptôme à la pharmacie', 'From symptom to pharmacy', '从症状到药房'),
      summary: t(
        'Décrire, consulter, se soigner : le parcours complet.',
        'Describing, consulting, treating: the whole journey.',
        '描述、就诊、治疗：完整的过程。',
      ),
      lessons: [
        {
          id: 'les_a2sa_1',
          moduleId: 'mod_a2sa_1',
          kind: 'text',
          durationMin: 11,
          title: t('J’ai mal à…', 'It hurts here…', '我这里疼……'),
          summary: t(
            'La formule unique pour toute douleur, et ses trois formes.',
            'The single formula for any pain, and its three forms.',
            '表达一切疼痛的唯一句型，及其三种形式。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🤕',
              text: t(
                'Une seule formule décrit toutes les douleurs : **avoir mal à** + la partie du corps. Toute la difficulté tient dans le petit mot du milieu, qui change selon le genre : au, à la, ou aux.',
                'One single formula describes every pain: **avoir mal à** + the body part. All the difficulty sits in the little word in the middle, which changes with gender: au, à la or aux.',
                '一个句型就能描述所有疼痛：**avoir mal à** + 身体部位。全部难点都在中间那个小词上，它随性、数变化：au、à la 或 aux。',
              ),
            },
            {
              type: 'interactive',
              emoji: '🎛️',
              title: t('Au, à la ou aux ?', 'Au, à la or aux?', 'au、à la 还是 aux？'),
              hint: t(
                'Croisez le genre du mot et la formule, {prenom}.',
                'Cross the word’s gender with the formula, {prenom}.',
                '{prenom}，把词的性与句型交叉查询。',
              ),
              widget: {
                kind: 'matrix',
                rowsLabel: t('La partie du corps', 'The body part', '身体部位'),
                columnsLabel: t('La formule', 'The formula', '句型'),
                rows: [
                  { id: 'r1', label: t('masculin — le dos, le ventre', 'masculine — le dos, le ventre', '阳性 — le dos、le ventre') },
                  { id: 'r2', label: t('féminin — la tête, la gorge', 'feminine — la tête, la gorge', '阴性 — la tête、la gorge') },
                  { id: 'r3', label: t('pluriel — les dents, les jambes', 'plural — les dents, les jambes', '复数 — les dents、les jambes') },
                  { id: 'r4', label: t('voyelle — l’épaule, l’œil', 'vowel — l’épaule, l’œil', '元音开头 — l’épaule、l’œil') },
                ],
                columns: [
                  { id: 'c1', label: t('J’ai mal…', 'J’ai mal…', 'J’ai mal…') },
                  { id: 'c2', label: t('Le médecin demande', 'The doctor asks', '医生会问') },
                ],
                cells: [
                  { row: 'r1', column: 'c1', answer: 'au', example: 'J’ai mal au dos.', gloss: t('À + le se contracte toujours en « au ». On ne dit jamais « à le ».', 'À + le always contracts to “au”. You never say “à le”.', 'à + le 永远缩合成 “au”，绝不说 “à le”。') },
                  { row: 'r1', column: 'c2', answer: 'depuis quand ?', example: 'Vous avez mal au dos depuis quand ?', gloss: t('« Depuis quand » demande le point de départ : « depuis lundi », « depuis trois jours ».', '“Depuis quand” asks for the starting point: “depuis lundi”, “depuis trois jours”.', '“depuis quand” 问起点：“depuis lundi”“depuis trois jours”。') },
                  { row: 'r2', column: 'c1', answer: 'à la', example: 'J’ai mal à la gorge.', gloss: t('Au féminin, rien ne se contracte : à la tête, à la gorge, à la main.', 'With feminine nouns nothing contracts: à la tête, à la gorge, à la main.', '阴性词不缩合：à la tête、à la gorge、à la main。') },
                  { row: 'r2', column: 'c2', answer: 'où exactement ?', example: 'Vous avez mal où, exactement ?', gloss: t('Réponse utile : « ici », en montrant. Le geste est permis, même recommandé.', 'A useful answer: “ici”, while pointing. Gesturing is allowed, even advised.', '有用的回答：“ici”，同时用手指。做手势是允许的，甚至值得推荐。') },
                  { row: 'r3', column: 'c1', answer: 'aux', example: 'J’ai mal aux dents.', gloss: t('À + les devient « aux ». La prononciation est la même que « au » : seul l’écrit les distingue.', 'À + les becomes “aux”. It sounds the same as “au”: only the spelling tells them apart.', 'à + les 变成 “aux”。读音与 “au” 相同，只有拼写能区分。') },
                  { row: 'r3', column: 'c2', answer: 'les deux ?', example: 'Aux deux jambes, ou à une seule ?', gloss: t('Le pluriel fait préciser : les deux côtés, ou un seul.', 'The plural invites precision: both sides, or just one.', '复数会引出追问：两侧都疼，还是只有一侧。') },
                  { row: 'r4', column: 'c1', answer: 'à l’', example: 'J’ai mal à l’épaule.', gloss: t('Devant une voyelle, « le » et « la » se réduisent à l’apostrophe : à l’épaule, à l’œil.', 'Before a vowel, “le” and “la” shrink to the apostrophe: à l’épaule, à l’œil.', '元音前 “le” 和 “la” 都缩成省音符：à l’épaule、à l’œil。') },
                  { row: 'r4', column: 'c2', answer: 'droite ou gauche ?', example: 'L’épaule droite ou la gauche ?', gloss: t('Droite et gauche s’accordent : le bras droit, la jambe droite.', '“Droite” and “gauche” agree: le bras droit, la jambe droite.', 'droite 和 gauche 要配合：le bras droit、la jambe droite。') },
                ],
              },
            },
            {
              type: 'callout',
              tone: 'warning',
              emoji: '🪤',
              title: t('« Je suis malade » ne suffit pas', '“Je suis malade” is not enough', '只说 “Je suis malade” 不够'),
              text: t(
                '« Malade » annonce un état général ; le médecin a besoin du détail. Ayez trois compléments prêts : **où** (j’ai mal à la tête), **depuis quand** (depuis hier), **comment** (ça pique, ça brûle, c’est supportable ou pas).',
                '“Malade” announces a general state; the doctor needs the detail. Have three add-ons ready: **where** (j’ai mal à la tête), **since when** (depuis hier), **how** (it stings, it burns, bearable or not).',
                '“malade” 只是笼统的状态，医生需要细节。备好三个补充：**哪里**（j’ai mal à la tête）、**从何时起**（depuis hier）、**怎样疼**（刺痛、灼痛、能不能忍受）。',
              ),
            },
            {
              type: 'interactive',
              emoji: '✏️',
              title: t('Complétez la plainte', 'Complete the complaint', '补全这句“诉苦”'),
              hint: t('Le genre du mot décide de tout.', 'The word’s gender decides everything.', '词的性决定一切。'),
              widget: {
                kind: 'fill',
                prompt: t('Au, à la, à l’ ou aux ?', 'Au, à la, à l’ or aux?', 'au、à la、à l’ 还是 aux？'),
                items: [
                  {
                    id: 'm1',
                    before: 'Depuis ce matin, j’ai très mal',
                    after: 'tête.',
                    options: ['à la', 'au', 'à l’'],
                    answer: 'à la',
                    why: t('« Tête » est féminin et commence par une consonne : à la tête.', '“Tête” is feminine and starts with a consonant: à la tête.', '“tête” 是阴性且以辅音开头：à la tête。'),
                  },
                  {
                    id: 'm2',
                    before: 'Il a mal',
                    after: 'ventre après chaque repas.',
                    options: ['au', 'à le', 'à la'],
                    answer: 'au',
                    why: t('« Ventre » est masculin : à + le = au. « À le » n’existe jamais.', '“Ventre” is masculine: à + le = au. “À le” never exists.', '“ventre” 是阳性：à + le = au。“à le” 永远不存在。'),
                  },
                  {
                    id: 'm3',
                    before: 'Elle a mal',
                    after: 'yeux quand elle lit trop.',
                    options: ['aux', 'à les', 'à l’'],
                    answer: 'aux',
                    why: t('« Yeux » est pluriel : à + les = aux. Et « œil » au singulier donne « à l’œil ».', '“Yeux” is plural: à + les = aux. And singular “œil” gives “à l’œil”.', '“yeux” 是复数：à + les = aux。单数 “œil” 则是 “à l’œil”。'),
                  },
                  {
                    id: 'm4',
                    before: 'Après le sport, j’ai mal',
                    after: 'épaule droite.',
                    options: ['à l’', 'à la', 'au'],
                    answer: 'à l’',
                    why: t('« Épaule » commence par une voyelle : l’article s’élide, quel que soit le genre.', '“Épaule” starts with a vowel: the article elides, whatever the gender.', '“épaule” 以元音开头：无论性，冠词都省音。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_a2sa_2',
          moduleId: 'mod_a2sa_1',
          kind: 'text',
          durationMin: 12,
          title: t('Chez le médecin', 'At the doctor’s', '看医生'),
          summary: t(
            'Le déroulé d’une consultation, et l’ordonnance décodée zone par zone.',
            'How a consultation unfolds, and the prescription decoded area by area.',
            '就诊的流程，以及逐区读懂处方。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '🩺',
              text: t(
                'Une consultation française suit toujours le même déroulé. Le connaître à l’avance change tout : on sait ce qui vient, on prépare ses réponses, et l’on repart avec un papier essentiel — l’ordonnance.',
                'A French consultation always follows the same script. Knowing it in advance changes everything: you know what comes next, you prepare your answers, and you leave with one essential paper — the prescription.',
                '法国的就诊过程总是同一套流程。提前了解就完全不同：你知道接下来是什么、能准备好回答，最后还会拿到一张关键的纸——处方。',
              ),
            },
            {
              type: 'interactive',
              emoji: '⏱️',
              title: t('La consultation, étape par étape', 'The consultation, step by step', '就诊流程，一步一步来'),
              hint: t('Suivez la frise : chaque repère donne la phrase à connaître.', 'Follow the timeline: each stop gives the sentence to know.', '沿时间轴看：每个节点都给出该会的句子。'),
              widget: {
                kind: 'timeline',
                points: [
                  {
                    id: 's1',
                    label: t('Prendre rendez-vous', 'Booking the appointment', '预约'),
                    headline: t('Par téléphone ou en ligne', 'By phone or online', '电话或网上'),
                    example: 'Bonjour, je voudrais un rendez-vous avec le docteur Morel, s’il vous plaît.',
                    gloss: t('« Je voudrais » est la forme polie de « je veux ». On vous proposera un créneau : notez la date et l’heure.', '“Je voudrais” is the polite form of “je veux”. You will be offered a slot: note the date and time.', '“je voudrais” 是 “je veux” 的礼貌形式。对方会给出时段：记下日期和时间。'),
                  },
                  {
                    id: 's2',
                    label: t('La salle d’attente', 'The waiting room', '候诊室'),
                    headline: t('On signale son arrivée', 'You announce your arrival', '报到'),
                    example: 'Bonjour, j’ai rendez-vous à dix heures.',
                    gloss: t('On dit bonjour à la salle entière en entrant : c’est l’usage, et le silence passerait pour de la froideur.', 'You greet the whole room as you enter: it is the custom, and silence would come across as cold.', '进门要向整个候诊室问好：这是习惯，不出声反而显得冷淡。'),
                  },
                  {
                    id: 's3',
                    label: t('Les questions du médecin', 'The doctor’s questions', '医生提问'),
                    headline: t('Où, depuis quand, comment', 'Where, since when, how', '哪里、从何时起、怎样'),
                    example: 'Qu’est-ce qui vous amène ? Vous avez de la fièvre ?',
                    gloss: t('« Qu’est-ce qui vous amène ? » ouvre presque toutes les consultations : c’est simplement « pourquoi venez-vous ? ».', '“Qu’est-ce qui vous amène ?” opens nearly every consultation: it simply means “why are you here?”.', '“Qu’est-ce qui vous amène ?” 几乎是每次就诊的开场白，意思就是“您为什么来？”。'),
                  },
                  {
                    id: 's4',
                    label: t('L’examen', 'The examination', '检查'),
                    headline: t('Des consignes à l’impératif', 'Instructions in the imperative', '命令式的指令'),
                    example: 'Respirez fort. Ouvrez la bouche. Allongez-vous.',
                    gloss: t('Trois consignes qui reviennent à chaque examen. Les comprendre du premier coup rend la visite deux fois plus courte.', 'Three instructions that come up in every examination. Understanding them first time makes the visit twice as short.', '每次检查都会出现的三个指令。第一遍就听懂，就诊时间能缩短一半。'),
                  },
                  {
                    id: 's5',
                    label: t('L’ordonnance', 'The prescription', '处方'),
                    headline: t('Le papier à ne pas perdre', 'The paper not to lose', '不能弄丢的纸'),
                    example: 'Je vous fais une ordonnance. C’est un comprimé matin et soir, pendant cinq jours.',
                    gloss: t('Sans ordonnance, la pharmacie ne délivre pas la plupart des médicaments. Elle sert aussi au remboursement.', 'Without a prescription, the pharmacy will not hand over most medicines. It is also needed for reimbursement.', '没有处方，药房不会出售大多数药品。报销也需要它。'),
                  },
                ],
              },
            },
            {
              type: 'interactive',
              emoji: '📄',
              title: t('L’ordonnance, zone par zone', 'The prescription, area by area', '处方的各个区域'),
              hint: t(
                'Cliquez chaque zone, ou lancez « Voir dans l’ordre » pour lire comme le pharmacien.',
                'Click each area, or press “Watch the order” to read like the pharmacist.',
                '点击各区域，或按“按顺序演示”，像药剂师那样读。',
              ),
              widget: {
                kind: 'layout',
                ratio: 0.707,
                zones: [
                  {
                    id: 'o1',
                    label: t('L’en-tête du médecin', 'The doctor’s letterhead', '医生抬头'),
                    x: 6, y: 4, w: 52, h: 14,
                    sample: 'Dr Claire Morel\nMédecin généraliste\n12 avenue des Tilleuls, 69003 Lyon',
                    detail: t('Qui prescrit, sa spécialité, son adresse. « Généraliste » : le médecin de premier recours, celui qu’on voit d’abord.', 'Who is prescribing, their speciality, their address. “Généraliste”: the first-line doctor, the one you see first.', '开方者、其专科与地址。“généraliste” 指首诊的全科医生。'),
                  },
                  {
                    id: 'o2',
                    label: t('La date', 'The date', '日期'),
                    x: 62, y: 8, w: 32, h: 7,
                    sample: 'Lyon, le 9 janvier 2026',
                    detail: t('Une ordonnance a une durée de validité — trois mois en général. Passé ce délai, retour chez le médecin.', 'A prescription has a validity period — usually three months. After that, back to the doctor.', '处方有有效期——通常三个月。过期就得再去看医生。'),
                  },
                  {
                    id: 'o3',
                    label: t('Le patient', 'The patient', '患者'),
                    x: 6, y: 21, w: 55, h: 7,
                    sample: '{prenom} Martin, 32 ans',
                    detail: t('Votre nom, parfois votre âge ou votre poids : la dose en dépend pour les enfants.', 'Your name, sometimes your age or weight: for children, the dose depends on it.', '你的姓名，有时还有年龄或体重：儿童的剂量取决于此。'),
                  },
                  {
                    id: 'o4',
                    label: t('Le médicament', 'The medicine', '药品'),
                    x: 6, y: 33, w: 88, h: 11,
                    sample: 'PARACÉTAMOL 1000 mg — boîte de 8 comprimés',
                    detail: t('Souvent en majuscules, avec le dosage. Le pharmacien peut substituer un générique : même molécule, prix plus bas.', 'Often in capitals, with the dosage. The pharmacist may substitute a generic: same molecule, lower price.', '常用大写字母书写，并注明剂量。药剂师可以换成仿制药：同一成分，价格更低。'),
                  },
                  {
                    id: 'o5',
                    label: t('La posologie', 'The dosage instructions', '用法用量'),
                    x: 6, y: 46, w: 88, h: 13,
                    sample: '1 comprimé matin, midi et soir, pendant 5 jours.\nÀ prendre au moment des repas.',
                    detail: t('La ligne la plus importante : combien, quand, pendant combien de temps. « Matin, midi et soir » = trois fois par jour.', 'The most important line: how much, when, for how long. “Matin, midi et soir” = three times a day.', '最重要的一行：吃多少、何时吃、吃多久。“matin, midi et soir” 即每天三次。'),
                  },
                  {
                    id: 'o6',
                    label: t('La signature', 'The signature', '签名'),
                    x: 58, y: 88, w: 36, h: 8,
                    sample: 'Dr C. Morel',
                    detail: t('Sans signature, l’ordonnance n’est pas valable. Le tampon du cabinet l’accompagne souvent.', 'Without the signature, the prescription is not valid. The practice’s stamp often goes with it.', '没有签名，处方无效。通常还会盖上诊所的章。'),
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'les_a2sa_3',
          moduleId: 'mod_a2sa_1',
          kind: 'text',
          durationMin: 11,
          title: t('Pharmacie et urgences', 'Pharmacy and emergencies', '药房与急救'),
          summary: t(
            'La croix verte, les numéros qui sauvent, et les phrases à débit rapide.',
            'The green cross, the numbers that save lives, and the fast-spoken sentences.',
            '绿十字、救命的号码，以及语速很快的那些话。',
          ),
          blocks: [
            {
              type: 'paragraph',
              emoji: '💊',
              text: t(
                'La pharmacie française fait plus que vendre des médicaments : le pharmacien conseille, oriente, et peut gérer les petits problèmes sans médecin. C’est la croix verte lumineuse qu’on trouve dans chaque quartier.',
                'A French pharmacy does more than sell medicine: the pharmacist advises, points you the right way, and can handle small problems without a doctor. It is the glowing green cross found in every neighbourhood.',
                '法国药房不只是卖药：药剂师会给建议、指路，小毛病不用看医生也能处理。每个街区都有那个发光的绿十字。',
              ),
            },
            {
              type: 'keyvalues',
              emoji: '🚨',
              title: t('Les numéros à connaître par cœur', 'The numbers to know by heart', '必须背熟的号码'),
              entries: [
                { label: t('15 — le SAMU', '15 — SAMU', '15 — 急救中心'), value: t('Urgence médicale : malaise, douleur forte, accident. Un médecin répond et décide de la suite.', 'Medical emergency: collapse, severe pain, accident. A doctor answers and decides what happens next.', '医疗急救：晕倒、剧痛、事故。由医生接听并决定后续处置。') },
                { label: t('17 — la police', '17 — police', '17 — 警察'), value: t('Agression, vol, danger immédiat.', 'Assault, theft, immediate danger.', '袭击、盗窃、紧急危险。') },
                { label: t('18 — les pompiers', '18 — fire brigade', '18 — 消防队'), value: t('Incendie, mais aussi accidents et secours : en France, les pompiers font les deux.', 'Fire, but also accidents and rescue: in France the fire brigade does both.', '火灾，也包括事故救援：在法国，消防队两者都管。') },
                { label: t('112 — numéro européen', '112 — European number', '112 — 欧洲通用号码'), value: t('Fonctionne partout en Europe, depuis n’importe quel téléphone, même sans carte SIM.', 'Works everywhere in Europe, from any phone, even without a SIM card.', '在全欧洲通用，任何手机都能拨打，没有 SIM 卡也行。') },
                { label: t('La pharmacie de garde', 'The duty pharmacy', '值班药房'), value: t('La nuit et le dimanche, une pharmacie par secteur reste ouverte. L’adresse est affichée sur la porte de toutes les autres.', 'At night and on Sundays, one pharmacy per area stays open. Its address is posted on the door of all the others.', '夜间和周日，每个片区有一家药房营业。其地址贴在其他所有药房的门上。') },
              ],
            },
            {
              type: 'interactive',
              emoji: '🎧',
              title: t('Comprendre le pharmacien', 'Understanding the pharmacist', '听懂药剂师'),
              hint: t(
                'Ces phrases sont dites vite au comptoir. Entraînez-vous ici, au calme.',
                'These sentences are spoken fast at the counter. Practise them here, in peace.',
                '柜台上这些话说得很快。趁现在安静，先练起来。',
              ),
              widget: {
                kind: 'listening',
                prompt: t('Écoutez, puis répondez.', 'Listen, then answer.', '先听，再回答。'),
                items: [
                  {
                    id: 'p1',
                    sentence: 'C’est un comprimé matin et soir, pendant cinq jours.',
                    question: t('Combien de comprimés par jour ?', 'How many tablets a day?', '每天吃几片？'),
                    options: [
                      t('Deux : un le matin, un le soir', 'Two: one morning, one evening', '两片：早一片，晚一片'),
                      t('Un seul par jour', 'Just one a day', '每天只吃一片'),
                      t('Cinq par jour', 'Five a day', '每天五片'),
                    ],
                    answer: 0,
                    why: t('« Matin et soir » = deux prises. « Cinq » porte sur les jours, pas sur les comprimés.', '“Matin et soir” = two doses. The “five” refers to days, not tablets.', '“matin et soir” 即两次。“cinq” 指的是天数，不是药片数。'),
                  },
                  {
                    id: 'p2',
                    sentence: 'À prendre de préférence au moment des repas.',
                    question: t('Quand faut-il prendre le médicament ?', 'When should you take the medicine?', '药应该什么时候吃？'),
                    options: [
                      t('En mangeant', 'While eating', '吃饭时'),
                      t('À jeun, avant de manger', 'On an empty stomach, before eating', '空腹，饭前'),
                      t('Uniquement le soir', 'Only in the evening', '只在晚上'),
                    ],
                    answer: 0,
                    why: t('« Au moment des repas » : pendant qu’on mange. « À jeun » serait le contraire.', '“Au moment des repas”: while you eat. “À jeun” would be the opposite.', '“au moment des repas” 指吃饭时。“à jeun” 才是相反的意思。'),
                  },
                  {
                    id: 'p3',
                    sentence: 'Je vous donne le générique, c’est la même chose et c’est moins cher.',
                    question: t('Que propose le pharmacien ?', 'What is the pharmacist offering?', '药剂师在提议什么？'),
                    options: [
                      t('Un médicament équivalent, moins cher', 'An equivalent medicine, cheaper', '同等药品，更便宜'),
                      t('Un médicament plus fort', 'A stronger medicine', '更强效的药'),
                      t('D’attendre le retour du médecin', 'To wait for the doctor', '等医生回来'),
                    ],
                    answer: 0,
                    why: t('Le générique : même molécule, marque différente, prix plus bas. Proposition très courante, qu’on peut accepter sans crainte.', 'A generic: same molecule, different brand, lower price. A very common offer, safe to accept.', '仿制药：同一成分，不同品牌，价格更低。这是很常见的提议，放心接受即可。'),
                  },
                ],
              },
            },
            {
              type: 'interactive',
              emoji: '🎧',
              title: t('Dictée de pharmacie', 'Pharmacy dictation', '药房听写'),
              hint: t('Écrivez la posologie comme si vous deviez la retenir.', 'Write the dosage down as if you had to remember it.', '像要记住用量那样，把它写下来。'),
              widget: {
                kind: 'dictation',
                prompt: t('Écoutez et écrivez la phrase.', 'Listen and write the sentence.', '听后写出句子。'),
                items: [
                  {
                    id: 'dd1',
                    sentence: 'J’ai mal à la gorge depuis hier.',
                    hint: t('Une plainte complète : où, et depuis quand.', 'A full complaint: where, and since when.', '完整的诉述：哪里疼，从何时起。'),
                    trap: t('« Depuis hier » : depuis + point de départ. Pas « depuis hier soir » ici — la phrase s’arrête à « hier ».', '“Depuis hier”: depuis + starting point. Not “depuis hier soir” here — the sentence stops at “hier”.', '“depuis hier”：depuis + 起点。这里不是 “depuis hier soir”——句子到 “hier” 为止。'),
                  },
                  {
                    id: 'dd2',
                    sentence: 'Prenez un comprimé toutes les six heures.',
                    hint: t('Une consigne de dosage, avec un mot au féminin pluriel.', 'A dosage instruction, with a feminine plural word.', '一条剂量指令，其中有个阴性复数的词。'),
                    trap: t('« Toutes les six heures » : « heures » est féminin, donc « toutes » — avec -es. « Tous les six heures » est une faute très fréquente.', '“Toutes les six heures”: “heures” is feminine, so “toutes” — with -es. “Tous les six heures” is a very common mistake.', '“toutes les six heures”：“heures” 是阴性，所以用 “toutes”。“tous les six heures” 是非常常见的错误。'),
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'mod_a2sa_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur la douleur, la consultation et l’urgence.', 'Six questions on pain, consultations and emergencies.', '六道题，考查疼痛表达、就诊与急救。'),
      lessons: [
        {
          id: 'les_a2sa_q',
          moduleId: 'mod_a2sa_q',
          kind: 'quiz',
          durationMin: 7,
          quizId: 'qz_a2_sante',
          title: t('Quiz — Le corps et la santé', 'Quiz — Body and health', '测验 — 身体与健康'),
          summary: t('6 questions à ne pas rater.', '6 questions you cannot afford to miss.', '6 道不容有失的题。'),
        },
      ],
    },
  ],
};
