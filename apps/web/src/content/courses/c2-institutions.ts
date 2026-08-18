import type { Course } from '@lms/core';
import { t } from '../tr';

const ID = 'crs_c2_institutions';

export const c2InstitutionsCourse: Course = {
  id: ID,
  slug: 'c2-institutions',
  level: 'C2',
  accentFrom: '#c4b5fd',
  accentTo: '#1e3a8a',
  status: 'published',
  title: t('France et francophonie : institutions et débats', 'France and the French-speaking world: institutions and debates', '法国与法语世界：制度与论辩'),
  subtitle: t('3 leçons · 1 quiz noté', '3 lessons · 1 graded quiz', '3 节课 · 1 次评分测验'),
  description: t(
    'Le vocabulaire des institutions, les références culturelles que les journaux ne définissent jamais, et la francophonie au-delà de la France. Le socle implicite d’une lecture C2.',
    'The vocabulary of institutions, the cultural references newspapers never define, and the French-speaking world beyond France. The implicit foundation of C2-level reading.',
    '制度词汇、报刊从不解释的文化典故，以及法国之外的法语世界。C2 阅读所依赖的隐性基础。',
  ),
  tags: [t('Civilisation', 'Civilisation', '国情文化'), t('Actualité', 'Current affairs', '时事')],
  modules: [
    {
      id: 'mod_c2in_1',
      courseId: ID,
      title: t('Comprendre les références', 'Understanding the references', '理解各类指涉'),
      summary: t(
        'Les institutions, les allusions culturelles, la francophonie.',
        'Institutions, cultural allusions, the French-speaking world.',
        '制度、文化典故、法语世界。',
      ),
      lessons: [
        {
          id: 'les_c2in_1',
          moduleId: 'mod_c2in_1',
          kind: 'text',
          durationMin: 13,
          title: t('Les institutions de la Ve République', 'The institutions of the Fifth Republic', '第五共和国的制度'),
          summary: t(
            'Qui décide quoi, et le vocabulaire que la presse emploie sans jamais l’expliquer.',
            'Who decides what, and the vocabulary the press uses without ever explaining it.',
            '谁决定什么，以及媒体从不加以解释的词汇。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Un article de presse français suppose acquis un vocabulaire institutionnel entier : « 49.3 », « navette parlementaire », « Conseil constitutionnel », « cohabitation ». Ces mots ne sont jamais définis, parce qu’un lecteur français les a appris à l’école. Les voici.',
                'A French press article assumes an entire institutional vocabulary: “49.3”, “navette parlementaire”, “Conseil constitutionnel”, “cohabitation”. These words are never defined, because a French reader learned them at school. Here they are.',
                '法国报刊文章默认读者掌握一整套制度词汇：“49.3”“navette parlementaire”“Conseil constitutionnel”“cohabitation”。这些词从不加以解释，因为法国读者在学校就学过。以下逐一说明。',
              ),
            },
            {
              type: 'table',
              caption: t('Qui fait quoi', 'Who does what', '各机构的职权'),
              headers: [t('Institution', 'Institution', '机构'), t('Rôle', 'Role', '职权'), t('Désignation', 'How it is chosen', '产生方式')],
              rows: [
                [t('Président de la République', 'President of the Republic', '共和国总统'), t('chef de l’État, nomme le gouvernement, peut dissoudre l’Assemblée', 'head of state, appoints the government, can dissolve the Assembly', '国家元首，任命政府，可解散国民议会'), t('élu au suffrage universel direct, cinq ans', 'elected by direct universal suffrage, five years', '直接普选产生，任期五年')],
                [t('Assemblée nationale', 'National Assembly', '国民议会'), t('vote la loi, peut renverser le gouvernement', 'passes laws, can bring down the government', '通过法律，可推翻政府'), t('577 députés élus pour cinq ans', '577 deputies elected for five years', '577 名议员，任期五年')],
                [t('Sénat', 'Senate', '参议院'), t('seconde lecture des lois, représente les collectivités', 'second reading of laws, represents local authorities', '法案二读，代表地方行政区'), t('élu au suffrage indirect', 'elected by indirect suffrage', '间接选举产生')],
                [t('Conseil constitutionnel', 'Constitutional Council', '宪法委员会'), t('vérifie la conformité des lois à la Constitution', 'checks that laws conform to the Constitution', '审查法律是否合宪'), t('neuf membres, neuf ans, non renouvelables', 'nine members, nine years, non-renewable', '九名成员，任期九年，不得连任')],
                [t('Conseil d’État', 'Council of State', '最高行政法院'), t('juge suprême de l’administration, conseille le gouvernement', 'supreme judge of the administration, advises the government', '行政诉讼的最高审级，并为政府提供咨询'), t('magistrats administratifs', 'administrative judges', '行政法官')],
              ],
            },
            {
              type: 'keyvalues',
              title: t('Le lexique que la presse ne définit jamais', 'The vocabulary the press never defines', '媒体从不解释的词汇'),
              entries: [
                { label: t('Le 49.3', 'Article 49.3', '第 49.3 条'), value: t('L’article de la Constitution qui permet d’adopter un texte sans vote, sauf si une motion de censure est votée. Devenu un mot du langage courant.', 'The constitutional article allowing a text to pass without a vote, unless a motion of no confidence succeeds. It has become an everyday word.', '宪法条款，允许法案不经表决即获通过，除非不信任案获得通过。已成为日常用语。') },
                { label: t('La navette parlementaire', 'The parliamentary shuttle', '两院往返审议'), value: t('L’aller-retour d’un texte entre Assemblée et Sénat jusqu’à un accord, ou le dernier mot donné à l’Assemblée.', 'The back-and-forth of a bill between Assembly and Senate until agreement, or the Assembly having the final say.', '法案在国民议会与参议院之间往返，直至达成一致，或由国民议会最终定夺。') },
                { label: t('La cohabitation', 'Cohabitation', '左右共治'), value: t('Un président et un Premier ministre de camps opposés. Trois occurrences depuis 1958 ; devenue rare depuis l’alignement des calendriers électoraux.', 'A president and prime minister from opposing camps. Three instances since 1958; rare since the electoral calendars were aligned.', '总统与总理分属对立阵营。1958 年以来出现过三次；自选举周期对齐后已很少见。') },
                { label: t('Les partenaires sociaux', 'The social partners', '社会伙伴'), value: t('Syndicats de salariés et organisations patronales, considérés ensemble comme un interlocuteur du gouvernement.', 'Employee unions and employers’ organisations, treated together as an interlocutor of the government.', '工会与雇主组织，被共同视为政府的对话方。') },
                { label: t('La laïcité', 'Laïcité', '世俗性原则'), value: t('La neutralité religieuse de l’État, posée par la loi de 1905. À distinguer de l’athéisme : elle garantit aussi la liberté de culte.', 'The religious neutrality of the state, established by the 1905 law. Not to be confused with atheism: it also guarantees freedom of worship.', '国家的宗教中立，由 1905 年法律确立。不可与无神论混淆：它同时保障宗教信仰自由。') },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              title: t('Les surnoms de la vie politique', 'Nicknames in political life', '政坛的代称'),
              text: t(
                'La presse désigne les institutions par leur adresse : **l’Élysée** (le président), **Matignon** (le Premier ministre), **Bercy** (l’Économie et les Finances), **le Quai d’Orsay** (les Affaires étrangères), **la place Beauvau** (l’Intérieur). « Matignon a tranché » signifie « le Premier ministre a décidé ».',
                'The press refers to institutions by their address: **l’Élysée** (the president), **Matignon** (the prime minister), **Bercy** (Economy and Finance), **le Quai d’Orsay** (Foreign Affairs), **la place Beauvau** (the Interior). “Matignon a tranché” means “the prime minister has decided”.',
                '媒体以官邸地址指代机构：**l’Élysée**（总统）、**Matignon**（总理）、**Bercy**（经济与财政部）、**le Quai d’Orsay**（外交部）、**la place Beauvau**（内政部）。“Matignon a tranché” 即“总理已作出决定”。',
              ),
            },
          ],
        },
        {
          id: 'les_c2in_2',
          moduleId: 'mod_c2in_1',
          kind: 'text',
          durationMin: 12,
          title: t('Les références culturelles partagées', 'Shared cultural references', '共享的文化典故'),
          summary: t(
            'Les allusions historiques, littéraires et scolaires qu’un article suppose connues.',
            'The historical, literary and school references an article assumes you know.',
            '文章默认你知晓的历史、文学与学校典故。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Comprendre chaque mot d’un éditorial et manquer complètement son propos : l’expérience est banale au niveau C1. En cause, les **allusions** — une date, un nom, un vers — qui portent l’essentiel du jugement sans jamais l’expliciter.',
                'Understanding every word of an editorial and missing its point entirely: this is a common experience at C1 level. The culprits are **allusions** — a date, a name, a line of verse — which carry the essential judgement without ever spelling it out.',
                '社论的每个词都懂，却完全没抓住要旨：这在 C1 阶段司空见惯。原因在于**典故**——一个日期、一个人名、一句诗——它们承载着核心判断却从不明说。',
              ),
            },
            {
              type: 'table',
              caption: t('Allusions historiques fréquentes', 'Frequent historical allusions', '常见历史典故'),
              headers: [t('Référence', 'Reference', '典故'), t('Fait', 'Fact', '所指'), t('Ce qu’elle signale', 'What it signals', '暗示的含义')],
              rows: [
                [t('Mai 68', 'May 68', '1968 年五月'), t('grèves et contestation étudiante de mai-juin 1968', 'strikes and student protest in May–June 1968', '1968 年 5—6 月的罢工与学生运动'), t('la révolte générationnelle, la libération des mœurs', 'generational revolt, the loosening of social mores', '代际反叛、风俗解放')],
                [t('La nuit du 4 août', 'The night of 4 August', '八月 4 日之夜'), t('abolition des privilèges en 1789', 'abolition of privileges in 1789', '1789 年废除特权'), t('un renoncement volontaire et soudain à des avantages', 'a sudden, voluntary surrender of advantages', '突然而自愿地放弃既得利益')],
                [t('L’appel du 18 Juin', 'The appeal of 18 June', '六月 18 日号召'), t('discours de De Gaulle depuis Londres en 1940', 'De Gaulle’s speech from London in 1940', '1940 年戴高乐在伦敦的讲话'), t('la résistance minoritaire contre l’évidence du moment', 'minority resistance against the apparent obvious', '少数派对当下“显然之事”的抵抗')],
                [t('L’affaire Dreyfus', 'The Dreyfus affair', '德雷福斯事件'), t('erreur judiciaire de 1894, révisée en 1906', 'a miscarriage of justice from 1894, overturned in 1906', '1894 年的冤案，1906 年平反'), t('la division du pays en deux camps irréconciliables', 'a country split into two irreconcilable camps', '国家分裂为两个不可调和的阵营')],
                [t('La Commune', 'The Commune', '巴黎公社'), t('insurrection parisienne de 1871', 'the Paris insurrection of 1871', '1871 年巴黎起义'), t('la révolte urbaine écrasée, et sa mémoire disputée', 'crushed urban revolt and its contested memory', '被镇压的城市起义及其争议性记忆')],
              ],
            },
            {
              type: 'keyvalues',
              title: t('Expressions issues de la littérature', 'Expressions from literature', '出自文学的表达'),
              entries: [
                { label: t('Un tartuffe', 'A tartuffe', 'Tartuffe 式人物'), value: t('Un hypocrite qui se pare de vertu, d’après la pièce de Molière (1664).', 'A hypocrite cloaked in virtue, from Molière’s play (1664).', '披着德行外衣的伪君子，出自莫里哀 1664 年的戏剧。') },
                { label: t('Se battre contre des moulins à vent', 'Tilting at windmills', '与风车搏斗'), value: t('Combattre des ennemis imaginaires, de Don Quichotte — référence partagée avec l’espagnol et l’anglais.', 'Fighting imaginary enemies, from Don Quixote — a reference shared with Spanish and English.', '与假想敌作战，出自《堂吉诃德》——西班牙语和英语中同样有此典故。') },
                { label: t('Le mythe de Sisyphe', 'The myth of Sisyphus', '西西弗神话'), value: t('L’effort recommencé sans fin ; via Camus (1942), une méditation sur l’absurde.', 'Endlessly repeated effort; via Camus (1942), a meditation on the absurd.', '永无止境地重复劳作；经加缪（1942）之手，成为对荒诞的沉思。') },
                { label: t('La madeleine de Proust', 'Proust’s madeleine', '普鲁斯特的玛德莱娜'), value: t('L’objet banal qui fait resurgir tout un pan de mémoire involontaire.', 'The ordinary object that brings a whole swathe of involuntary memory flooding back.', '让整片非自主记忆涌回的平凡之物。') },
                { label: t('Un Waterloo', 'A Waterloo', '滑铁卢'), value: t('Une défaite définitive après une série de succès. Employé bien au-delà du contexte militaire.', 'A final defeat after a run of successes. Used far beyond military contexts.', '连胜之后的决定性失败。用法远超军事语境。') },
              ],
            },
            {
              type: 'callout',
              tone: 'success',
              title: t('Comment combler ce socle', 'How to build this foundation', '如何补上这块基础'),
              text: t(
                'Lisez la presse avec un carnet : chaque fois qu’un nom propre vous arrête, notez-le et cherchez-le le soir même. Une trentaine de références couvre l’essentiel du discours public français. C’est un travail de quelques semaines, pas d’années.',
                'Read the press with a notebook: each time a proper name stops you, jot it down and look it up the same evening. Around thirty references cover the bulk of French public discourse. It is a few weeks’ work, not years.',
                '读报时备一个本子：每遇到一个让你卡住的专有名词，就记下来，当晚查清。约三十个典故就能覆盖法国公共话语的大部分内容。这是几周的功夫，而非数年。',
              ),
            },
          ],
        },
        {
          id: 'les_c2in_3',
          moduleId: 'mod_c2in_1',
          kind: 'text',
          durationMin: 12,
          title: t('La francophonie : un français, des français', 'The French-speaking world: one French, many Frenches', '法语世界：一种法语，多种法语'),
          summary: t(
            'Québec, Belgique, Suisse, Afrique : les variantes légitimes et ce qui les distingue.',
            'Quebec, Belgium, Switzerland, Africa: the legitimate variants and what sets them apart.',
            '魁北克、比利时、瑞士、非洲：各种合法变体及其区别。',
          ),
          blocks: [
            {
              type: 'paragraph',
              text: t(
                'Le français compte plus de trois cents millions de locuteurs, dont une minorité vit en France. Traiter la norme parisienne comme le seul français correct est une erreur factuelle autant que culturelle : les variantes possèdent leurs propres académies, leurs propres dictionnaires et leur propre littérature.',
                'French has more than three hundred million speakers, only a minority of whom live in France. Treating the Parisian norm as the only correct French is a factual as much as a cultural mistake: the variants have their own academies, dictionaries and literatures.',
                '法语使用者有三亿多，其中只有少数生活在法国。把巴黎标准视为唯一正确的法语，既是事实错误也是文化错误：各变体拥有各自的语言机构、词典和文学。',
              ),
            },
            {
              type: 'table',
              caption: t('Quatre aires, quelques marqueurs', 'Four areas, a few markers', '四个地区，若干标志'),
              headers: [t('Aire', 'Area', '地区'), t('Marqueurs lexicaux', 'Lexical markers', '词汇标志'), t('Trait notable', 'Notable feature', '显著特点')],
              rows: [
                [t('Québec', 'Quebec', '魁北克'), t('un char (voiture), magasiner (faire des courses), une fin de semaine (week-end)', 'un char (car), magasiner (to shop), une fin de semaine (weekend)', 'un char（汽车）、magasiner（购物）、une fin de semaine（周末）'), t('politique active de traduction des anglicismes', 'an active policy of translating anglicisms', '积极推行英语借词的本土化翻译')],
                [t('Belgique', 'Belgium', '比利时'), t('septante (70), nonante (90), une drache (grosse pluie), un kot (studio étudiant)', 'septante (70), nonante (90), une drache (downpour), un kot (student flat)', 'septante（70）、nonante（90）、une drache（暴雨）、un kot（学生公寓）'), t('numération plus régulière qu’en France', 'a more regular number system than in France', '数词体系比法国更规则')],
                [t('Suisse romande', 'French-speaking Switzerland', '瑞士法语区'), t('huitante (80), le natel (téléphone portable), une panosse (serpillière)', 'huitante (80), le natel (mobile phone), une panosse (floor cloth)', 'huitante（80）、le natel（手机）、une panosse（拖布）'), t('emprunts à l’allemand, débit souvent plus lent', 'borrowings from German, often a slower delivery', '有德语借词，语速通常较慢')],
                [t('Afrique francophone', 'French-speaking Africa', '非洲法语区'), t('un taxi-brousse, essencerie (station-service), ambiancer (mettre l’ambiance)', 'un taxi-brousse, essencerie (petrol station), ambiancer (to liven up)', 'un taxi-brousse、essencerie（加油站）、ambiancer（活跃气氛）'), t('la zone la plus dynamique démographiquement', 'the most demographically dynamic area', '人口增长最具活力的地区')],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              title: t('Variante n’est pas faute', 'A variant is not a mistake', '变体不等于错误'),
              text: t(
                '« Septante » n’est pas une déformation de « soixante-dix » : c’est la forme héritée du latin, restée en Belgique et en Suisse là où la France a adopté la numération vicésimale. Le jugement « c’est du mauvais français » repose sur une confusion entre norme dominante et correction linguistique.',
                '“Septante” is not a deformation of “soixante-dix”: it is the form inherited from Latin, retained in Belgium and Switzerland where France adopted vigesimal counting. Judging it “bad French” confuses a dominant norm with linguistic correctness.',
                '“Septante” 并非 “soixante-dix” 的变形，而是承自拉丁语的形式，在比利时和瑞士保留下来，而法国改用了二十进位。把它判为“糟糕的法语”，是把主导规范与语言正确性混为一谈。',
              ),
            },
            {
              type: 'examples',
              title: t('Reconnaître l’origine d’un texte', 'Recognising where a text comes from', '辨认文本的来源'),
              items: [
                { fr: '« Il a magasiné toute la fin de semaine. »', gloss: t('Québec : « magasiner » et « fin de semaine » sont les marqueurs les plus sûrs.', 'Quebec: “magasiner” and “fin de semaine” are the surest markers.', '魁北克：“magasiner” 与 “fin de semaine” 是最可靠的标志。') },
                { fr: '« On se voit à septante-cinq minutes du départ. »', gloss: t('Belgique ou Suisse : la numération donne l’origine immédiatement.', 'Belgium or Switzerland: the number system reveals the origin at once.', '比利时或瑞士：数词体系立刻暴露来源。') },
                { fr: '« Le courriel est arrivé ce matin. »', gloss: t('« Courriel », né au Québec, est aujourd’hui officiel en France aussi.', '“Courriel”, born in Quebec, is now official in France too.', '“Courriel” 源自魁北克，如今在法国也是官方用词。') },
                { fr: '« Le français de Belgique est un français approximatif. »', gloss: t('Jugement infondé : il s’agit d’une variante normée, pas d’un écart.', 'An unfounded judgement: this is a standardised variant, not a deviation.', '毫无根据的判断：那是有规范的变体，而非偏差。'), incorrect: true },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mod_c2in_q',
      courseId: ID,
      title: t('Évaluation', 'Assessment', '测评'),
      summary: t('Six questions sur les institutions, les références et la francophonie.', 'Six questions on institutions, references and the French-speaking world.', '六道题，考查制度、典故与法语世界。'),
      lessons: [
        {
          id: 'les_c2in_q',
          moduleId: 'mod_c2in_q',
          kind: 'quiz',
          durationMin: 8,
          quizId: 'qz_c2_institutions',
          title: t('Quiz — France et francophonie', 'Quiz — France and the French-speaking world', '测验 — 法国与法语世界'),
          summary: t('6 questions sur la civilisation française.', '6 questions on French civilisation.', '6 道题，考查法国国情文化。'),
        },
      ],
    },
  ],
};
