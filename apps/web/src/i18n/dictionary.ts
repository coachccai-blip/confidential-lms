import type { LocalizedText } from '@lms/core';

/**
 * Dictionnaire d'interface.
 *
 * Chaque entrée porte ses trois traductions côte à côte : il est donc
 * impossible d'ajouter une clé en oubliant une langue, et une relecture
 * compare les trois versions d'un seul coup d'œil.
 */

const t = (fr: string, en: string, zh: string): LocalizedText => ({ fr, en, zh });

export const D = {
  brand: {
    name: t('Lumière', 'Lumière', 'Lumière'),
    tagline: t('Français protégé', 'Protected French', '受保护的法语课程'),
  },

  common: {
    minutes: (n: number) => t(`${n} min`, `${n} min`, `${n} 分钟`),
    minutesRead: (n: number) => t(`${n} min de lecture`, `${n} min read`, `阅读 ${n} 分钟`),
    remaining: (value: string) => t(`${value} restantes`, `${value} left`, `剩余 ${value}`),
    stepOf: (a: number, b: number) => t(`Étape ${a} / ${b}`, `Step ${a} / ${b}`, `第 ${a} / ${b} 步`),
    close: t('Fermer', 'Close', '关闭'),
    level: t('Niveau', 'Level', '级别'),
    quiz: t('Quiz', 'Quiz', '测验'),
    protected: t('Protégé', 'Protected', '已保护'),
    darkMode: t('Mode sombre', 'Dark mode', '深色模式'),
    lightMode: t('Mode clair', 'Light mode', '浅色模式'),
    openMenu: t('Ouvrir le menu', 'Open menu', '打开菜单'),
    changeLanguage: t('Changer de langue', 'Change language', '切换语言'),
    none: t('—', '—', '—'),
  },

  nav: {
    learning: t('Apprentissage', 'Learning', '学习'),
    account: t('Compte', 'Account', '账户'),
    administration: t('Administration', 'Administration', '管理'),
    dashboard: t('Tableau de bord', 'Dashboard', '学习总览'),
    catalogue: t('Catalogue de cours', 'Course catalogue', '课程目录'),
    devices: t('Appareils & sessions', 'Devices & sessions', '设备与会话'),
    security: t('Journal de sécurité', 'Security log', '安全日志'),
    admin: t('Pilotage & traçabilité', 'Analytics & tracing', '数据与溯源'),
    signOut: t('Se déconnecter', 'Sign out', '退出登录'),
    inProgress: t('Parcours en cours', 'Course in progress', '进行中的课程'),
    stepsDone: (a: number, b: number, p: number) =>
      t(`${a} / ${b} étapes · ${p} %`, `${a} / ${b} steps · ${p}%`, `${a} / ${b} 步 · ${p}%`),
  },

  categories: {
    grammaire: t('Grammaire', 'Grammar', '语法'),
    conjugaison: t('Conjugaison', 'Conjugation', '动词变位'),
    'delf-b1': t('Préparation DELF B1', 'DELF B1 preparation', 'DELF B1 备考'),
    'delf-b2': t('Préparation DELF B2', 'DELF B2 preparation', 'DELF B2 备考'),
    'dalf-c1': t('Préparation DALF C1', 'DALF C1 preparation', 'DALF C1 备考'),
    'dalf-c2': t('Préparation DALF C2', 'DALF C2 preparation', 'DALF C2 备考'),
  },

  categoryHints: {
    grammaire: t(
      'Les structures de la phrase française, expliquées puis mises en pratique.',
      'The structures of the French sentence, explained then practised.',
      '法语句子结构的讲解与实践。',
    ),
    conjugaison: t(
      'Les temps et les modes qui comptent vraiment, du présent au subjonctif.',
      'The tenses and moods that actually matter, from present to subjunctive.',
      '从现在时到虚拟式，真正重要的时态与语式。',
    ),
    'delf-b1': t(
      'Les quatre épreuves du DELF B1, méthode et entraînement.',
      'The four DELF B1 papers: method and practice.',
      'DELF B1 四项考试的方法与训练。',
    ),
    'delf-b2': t(
      'Argumenter, synthétiser, débattre : le niveau attendu au B2.',
      'Argue, synthesise, debate: what B2 expects of you.',
      '论证、综合、辩论：B2 级别的要求。',
    ),
    'dalf-c1': t(
      'Synthèse de documents et exposé : les épreuves reines du C1.',
      'Document synthesis and oral presentation: the core C1 papers.',
      '文献综述与口头陈述：C1 的核心考试。',
    ),
    'dalf-c2': t(
      'Restituer, reformuler, convaincre : la maîtrise attendue au C2.',
      'Report, reformulate, convince: the mastery C2 demands.',
      '复述、改写、说服：C2 所要求的精通程度。',
    ),
  },

  login: {
    headline: t(
      'Le français, enseigné clairement. Vos cours, protégés.',
      'French, taught clearly. Your courses, protected.',
      '清晰的法语教学，受保护的课程内容。',
    ),
    intro: t(
      'Grammaire, conjugaison et préparation au DELF/DALF, en français, anglais et chinois. Chaque leçon est marquée au nom de l’apprenant qui la consulte.',
      'Grammar, conjugation and DELF/DALF preparation, in French, English and Chinese. Every lesson is watermarked with the name of the learner reading it.',
      '语法、动词变位与 DELF/DALF 备考，课程内容与界面均提供法语、英语和中文。每节课都带有阅读者的姓名水印。',
    ),
    features: [
      {
        title: t('Trois langues, un seul cours', 'Three languages, one course', '三种语言，一套课程'),
        text: t(
          'Les explications suivent votre langue ; les exemples restent en français, comme il se doit.',
          'Explanations follow your language; examples stay in French, as they should.',
          '讲解使用您选择的语言，例句始终保留法语原文。',
        ),
      },
      {
        title: t('Mots difficiles cliquables', 'Clickable difficult words', '生词可点击'),
        text: t(
          'Un mot vous échappe ? Cliquez : sa définition apparaît en français, anglais et chinois.',
          'Stuck on a word? Click it: the definition appears in French, English and Chinese.',
          '遇到生词？点击即可查看法语、英语和中文释义。',
        ),
      },
      {
        title: t('Filigrane nominatif', 'Named watermark', '实名水印'),
        text: t(
          'Votre email et votre téléphone s’affichent sur chaque écran, et une empreinte invisible marque chaque texte.',
          'Your email and phone appear on every screen, and an invisible fingerprint marks every text.',
          '每个页面都显示您的邮箱与电话，每段文字都嵌入隐形指纹。',
        ),
      },
      {
        title: t('Copie et impression bloquées', 'Copy and print blocked', '禁止复制与打印'),
        text: t(
          'Sélection, clic droit, Ctrl+C et Ctrl+P sont neutralisés, et chaque tentative est journalisée.',
          'Selection, right-click, Ctrl+C and Ctrl+P are disabled, and every attempt is logged.',
          '已禁用选中、右键、Ctrl+C 与 Ctrl+P，每次尝试都会被记录。',
        ),
      },
    ],
    disclaimer: t(
      'Démonstration web publique. Le blocage matériel des captures d’écran nécessite les applications desktop et mobile décrites dans le README.',
      'Public web demo. Hardware-level screenshot blocking requires the desktop and mobile apps described in the README.',
      '这是公开的网页演示。系统级截屏拦截需使用 README 中描述的桌面端与移动端应用。',
    ),
    title: t('Connexion apprenant', 'Learner sign-in', '学员登录'),
    name: t('Nom complet', 'Full name', '姓名'),
    email: t('Adresse email', 'Email address', '电子邮箱'),
    emailHint: t(
      'Affichée dans le filigrane de chaque écran de contenu.',
      'Shown in the watermark on every content screen.',
      '将显示在每个内容页面的水印中。',
    ),
    phone: t('Téléphone', 'Phone number', '电话号码'),
    phoneHint: t(
      'Second marqueur de traçabilité, exigé par la politique de diffusion.',
      'Second tracing marker, required by the distribution policy.',
      '第二个溯源标记，依据内容分发政策要求。',
    ),
    password: t('Mot de passe', 'Password', '密码'),
    submit: t('Accéder à mes cours', 'Open my courses', '进入我的课程'),
    demoTitle: t('Mode démonstration', 'Demo mode', '演示模式'),
    demoText: t(
      'Aucun serveur n’est interrogé : l’authentification, les sessions et la progression sont simulées localement pour rendre les protections observables. Une adresse commençant par admin@ ouvre l’espace d’administration.',
      'No server is contacted: authentication, sessions and progress are simulated locally so the protections stay observable. An address starting with admin@ opens the admin area.',
      '不会访问任何服务器：登录、会话与学习进度均在本地模拟，以便观察各项保护机制。使用 admin@ 开头的邮箱可进入管理后台。',
    ),
    errorEmail: t('Adresse email invalide.', 'Invalid email address.', '邮箱地址无效。'),
    errorPhone: t(
      'Numéro de téléphone invalide — il sert au filigrane de traçabilité.',
      'Invalid phone number — it is used by the tracing watermark.',
      '电话号码无效——它用于生成溯源水印。',
    ),
    errorPassword: t(
      'Le mot de passe doit contenir au moins 8 caractères.',
      'The password must contain at least 8 characters.',
      '密码至少需要 8 个字符。',
    ),
  },

  dashboard: {
    eyebrow: t('Espace apprenant', 'Learner area', '学员空间'),
    greeting: (name: string) => t(`Bonjour ${name}`, `Hello ${name}`, `${name}，您好`),
    introStarted: t(
      'Reprenez là où vous vous êtes arrêté. Votre progression est enregistrée à chaque étape terminée.',
      'Pick up where you left off. Your progress is saved after every completed step.',
      '从上次中断处继续。每完成一步都会保存进度。',
    ),
    introNew: t(
      'Six parcours vous attendent : grammaire, conjugaison et préparation aux quatre diplômes DELF et DALF.',
      'Six courses are waiting: grammar, conjugation and preparation for the four DELF and DALF diplomas.',
      '六门课程已就绪：语法、动词变位，以及四项 DELF 与 DALF 文凭备考。',
    ),
    statProgress: t('Progression globale', 'Overall progress', '总体进度'),
    statSteps: t('Étapes terminées', 'Steps completed', '已完成步骤'),
    statStepsHint: (n: number) => t(`sur ${n} parcours`, `across ${n} courses`, `覆盖 ${n} 门课程`),
    statQuizzes: t('Quiz réussis', 'Quizzes passed', '已通过测验'),
    statQuizzesHint: t('quiz notés du catalogue', 'graded quizzes in the catalogue', '课程目录中的评分测验'),
    statTime: t('Temps restant estimé', 'Estimated time left', '预计剩余时间'),
    statTimeHint: (n: number) => t(`${n} minutes de contenu`, `${n} minutes of content`, `${n} 分钟的内容`),
    resume: t('Reprendre', 'Resume', '继续学习'),
    start: t('Commencer', 'Start', '开始学习'),
    syllabus: t('Voir le sommaire', 'View syllabus', '查看目录'),
    nextStep: (title: string) => t(`Prochaine étape : ${title}`, `Next step: ${title}`, `下一步：${title}`),
    allDone: t('Parcours terminé — félicitations.', 'Course completed — congratulations.', '课程已完成——恭喜！'),
    protectedNotice: (email: string) =>
      t(
        `Contenu filigrané au nom de ${email} · copie, impression et export désactivés · chaque accès est journalisé.`,
        `Content watermarked for ${email} · copy, print and export disabled · every access is logged.`,
        `内容已加上 ${email} 的水印 · 已禁用复制、打印与导出 · 每次访问都会记录。`,
      ),
    catalogue: t('Catalogue', 'Catalogue', '课程目录'),
  },

  course: {
    steps: (n: number) => t(`${n} étapes`, `${n} steps`, `${n} 个步骤`),
    startFirst: t('Commencer le module 1', 'Start module 1', '开始第 1 单元'),
    resume: t('Reprendre le parcours', 'Resume the course', '继续本课程'),
    completedSteps: (a: number, b: number) =>
      t(`${a} étape(s) terminée(s) sur ${b}`, `${a} of ${b} steps completed`, `已完成 ${a} / ${b} 步`),
    finished: t('Parcours terminé', 'Course completed', '课程已完成'),
    protectedBanner: t(
      'Contenu protégé : filigrane nominatif, copie et impression désactivées, journalisation des accès.',
      'Protected content: named watermark, copy and print disabled, access logging.',
      '受保护内容：实名水印、禁止复制与打印、访问全程记录。',
    ),
    tracingOn: t('Traçabilité active', 'Tracing active', '溯源已启用'),
  },

  lesson: {
    completed: t('Terminée', 'Completed', '已完成'),
    markDone: t('Marquer terminée', 'Mark as done', '标记为已完成'),
    onThisPage: t('Sur cette page', 'On this page', '本页目录'),
    previous: t('Précédent', 'Previous', '上一步'),
    next: t('Suivant', 'Next', '下一步'),
    backToSyllabus: t('Retour au sommaire', 'Back to syllabus', '返回目录'),
    fingerprintTitle: t(
      'Cet exemplaire vous est personnellement attribué',
      'This copy is personally assigned to you',
      '本副本已绑定到您的账户',
    ),
    fingerprintText: t(
      'Le texte ci-dessus contient une empreinte invisible liée à votre compte et à cet appareil. Toute copie, même partielle, reste identifiable.',
      'The text above carries an invisible fingerprint tied to your account and this device. Any copy, even partial, remains identifiable.',
      '以上文字包含与您的账户和本设备绑定的隐形指纹。即使只复制片段，也可追溯来源。',
    ),
    glossHint: t(
      'Les mots soulignés sont expliqués : cliquez pour voir la définition en trois langues.',
      'Underlined words are explained: click to see the definition in three languages.',
      '带下划线的词语可点击，查看三种语言的释义。',
    ),
  },

  quiz: {
    passing: (n: number) => t(`Seuil de réussite ${n} %`, `Pass mark ${n}%`, `及格线 ${n}%`),
    questions: (n: number) => t(`${n} questions`, `${n} questions`, `${n} 道题`),
    attemptsLeft: (left: number, max: number) =>
      t(
        `${left} tentative(s) restante(s) sur ${max}`,
        `${left} of ${max} attempts left`,
        `剩余 ${left} / ${max} 次作答机会`,
      ),
    attemptsUnlimited: t('Tentatives illimitées', 'Unlimited attempts', '作答次数不限'),
    partialOn: t('Crédit partiel activé', 'Partial credit enabled', '启用部分给分'),
    partialOff: t('Sans crédit partiel', 'No partial credit', '不设部分给分'),
    answered: (a: number, b: number) =>
      t(`${a} / ${b} répondues`, `${a} / ${b} answered`, `已作答 ${a} / ${b}`),
    submit: t('Valider mes réponses', 'Submit my answers', '提交答案'),
    submitCount: (a: number, b: number) =>
      t(`Valider mes réponses (${a}/${b})`, `Submit my answers (${a}/${b})`, `提交答案（${a}/${b}）`),
    kindSingle: t('Une seule bonne réponse', 'One correct answer', '单选题'),
    kindMultiple: t('Plusieurs bonnes réponses', 'Several correct answers', '多选题'),
    kindBoolean: t('Vrai ou faux', 'True or false', '判断题'),
    points: (n: number) => t(`${n} point(s)`, `${n} point(s)`, `${n} 分`),
    passed: t('Quiz réussi', 'Quiz passed', '测验通过'),
    failed: t('Seuil non atteint', 'Pass mark not reached', '未达及格线'),
    passedText: (correct: number, total: number) =>
      t(
        `Vous avez répondu correctement à ${correct} question(s) sur ${total}. Le détail des corrections figure ci-dessous.`,
        `You answered ${correct} of ${total} questions correctly. Full corrections are below.`,
        `您答对了 ${total} 题中的 ${correct} 题。详细解析见下方。`,
      ),
    failedText: (threshold: number) =>
      t(
        `Il fallait atteindre ${threshold} %. Relisez les corrections ci-dessous avant de retenter.`,
        `You needed ${threshold}%. Review the corrections below before trying again.`,
        `需要达到 ${threshold}%。请先阅读下方解析，再重新作答。`,
      ),
    statPoints: t('Points', 'Points', '得分'),
    statCorrect: t('Questions justes', 'Correct answers', '答对题数'),
    statAttempts: t('Tentatives restantes', 'Attempts left', '剩余机会'),
    retry: t('Refaire le quiz', 'Retake the quiz', '重新作答'),
    correction: t('Correction.', 'Correction.', '解析：'),
    history: t('Historique des tentatives', 'Attempt history', '作答记录'),
    historyCount: (n: number) => t(`${n} enregistrée(s)`, `${n} recorded`, `共 ${n} 条`),
    pointsOf: (a: string, b: number) => t(`${a} / ${b} points`, `${a} / ${b} points`, `${a} / ${b} 分`),
    exhausted: t('Nombre de tentatives épuisé', 'No attempts left', '作答次数已用完'),
    exhaustedText: (max: number) =>
      t(
        `Vous avez utilisé les ${max} tentatives autorisées pour ce quiz. Contactez votre formateur pour en obtenir une supplémentaire.`,
        `You have used all ${max} attempts allowed for this quiz. Contact your teacher for another one.`,
        `您已用完本测验允许的 ${max} 次作答机会。如需更多机会，请联系您的老师。`,
      ),
    toastPassed: t('Quiz réussi', 'Quiz passed', '测验通过'),
    toastFailed: t('Seuil non atteint', 'Pass mark not reached', '未达及格线'),
    toastScore: (score: number, threshold: number) =>
      t(
        `Score : ${score} % (seuil ${threshold} %).`,
        `Score: ${score}% (pass mark ${threshold}%).`,
        `得分：${score}%（及格线 ${threshold}%）。`,
      ),
  },

  glossary: {
    eyebrow: t('Mot expliqué', 'Word explained', '词语释义'),
    example: t('Exemple', 'Example', '例句'),
  },

  account: {
    eyebrow: t('Compte', 'Account', '账户'),
    title: t('Appareils et sessions', 'Devices and sessions', '设备与会话'),
    intro: (max: number) =>
      t(
        `Gérez les appareils autorisés et les sessions actives. La politique de diffusion limite chaque compte à ${max} appareils et à une seule session simultanée.`,
        `Manage authorised devices and active sessions. The distribution policy limits each account to ${max} devices and a single concurrent session.`,
        `管理已授权的设备与活动会话。分发政策规定每个账户最多 ${max} 台设备，且同时只能有一个会话。`,
      ),
    role: { admin: t('Administrateur', 'Administrator', '管理员'), learner: t('Apprenant', 'Learner', '学员') },
    memberSince: (date: string) => t(`inscrit le ${date}`, `member since ${date}`, `注册于 ${date}`),
    identity: t('Identité de filigrane', 'Watermark identity', '水印身份'),
    fieldEmail: t('Email', 'Email', '邮箱'),
    fieldPhone: t('Téléphone', 'Phone', '电话'),
    fieldLearnerId: t('Identifiant apprenant', 'Learner ID', '学员编号'),
    fieldDeviceFp: t('Empreinte appareil', 'Device fingerprint', '设备指纹'),
    identityNote: t(
      'Ces valeurs composent l’empreinte injectée dans chaque leçon que vous consultez.',
      'These values make up the fingerprint injected into every lesson you read.',
      '这些信息构成注入到您所阅读的每节课中的指纹。',
    ),
    protectionsTitle: t('État des protections', 'Protection status', '保护状态'),
    statusOn: t('Actif', 'Active', '已启用'),
    statusDesktop: t('Application desktop requise', 'Desktop app required', '需桌面端应用'),
    protections: [
      t(
        'Filigrane visible email + téléphone, repositionné toutes les 30 s',
        'Visible email + phone watermark, repositioned every 30 s',
        '显示邮箱与电话的水印，每 30 秒变换位置',
      ),
      t(
        'Empreinte invisible injectée dans chaque texte servi',
        'Invisible fingerprint injected into every text served',
        '每段文字都注入隐形指纹',
      ),
      t(
        'Copie, couper, clic droit et glisser-déposer neutralisés',
        'Copy, cut, right-click and drag-and-drop disabled',
        '已禁用复制、剪切、右键与拖放',
      ),
      t('Impression et export PDF désactivés', 'Printing and PDF export disabled', '已禁用打印与导出 PDF'),
      t(
        'Masquage du contenu en perte de focus ou onglet caché',
        'Content hidden on focus loss or background tab',
        '窗口失焦或标签页切换时隐藏内容',
      ),
      t(
        'Détection best-effort des outils de développement',
        'Best-effort developer tools detection',
        '尽力检测开发者工具',
      ),
      t(
        'Session unique — toute nouvelle connexion révoque les autres',
        'Single session — any new sign-in revokes the others',
        '单一会话——新的登录会注销其他会话',
      ),
      t(
        'Blocage matériel des captures d’écran',
        'Hardware-level screenshot blocking',
        '系统级截屏拦截',
      ),
    ],
    devices: t('Appareils enregistrés', 'Registered devices', '已注册设备'),
    thDevice: t('Appareil', 'Device', '设备'),
    thFingerprint: t('Empreinte', 'Fingerprint', '指纹'),
    thFirstSeen: t('Première connexion', 'First seen', '首次登录'),
    thLastSeen: t('Dernière activité', 'Last activity', '最近活动'),
    thisDevice: t('Cet appareil', 'This device', '当前设备'),
    remove: t('Retirer', 'Remove', '移除'),
    noDevices: t('Aucun appareil enregistré.', 'No registered device.', '暂无已注册设备。'),
    sessions: t('Sessions', 'Sessions', '会话'),
    sessionsHint: (n: number) =>
      t(
        `${n} active(s) · jeton valable 15 min`,
        `${n} active · token valid for 15 min`,
        `${n} 个活动会话 · 令牌有效期 15 分钟`,
      ),
    thSession: t('Session', 'Session', '会话'),
    thOpened: t('Ouverte le', 'Opened', '开始时间'),
    thExpires: t('Expire', 'Expires', '过期时间'),
    thState: t('État', 'State', '状态'),
    stateActive: t('Active', 'Active', '活动中'),
    stateRevoked: t('Révoquée', 'Revoked', '已注销'),
    stateExpired: t('Expirée', 'Expired', '已过期'),
    revoke: t('Révoquer', 'Revoke', '注销'),
    revokedReason: {
      'new-session': t('nouvelle connexion', 'new sign-in', '新的登录'),
      manual: t('action manuelle', 'manual action', '手动操作'),
      'device-removed': t('appareil retiré', 'device removed', '设备已移除'),
      expired: t('expiration', 'expiry', '已过期'),
    },
    resetTitle: t('Réinitialiser la démonstration', 'Reset the demo', '重置演示数据'),
    resetText: t(
      'Efface la progression, les tentatives de quiz, les appareils et le journal de sécurité stockés dans ce navigateur. Aucune donnée n’a jamais quitté votre poste.',
      'Erases progress, quiz attempts, devices and the security log stored in this browser. No data has ever left your machine.',
      '清除本浏览器中保存的学习进度、测验记录、设备与安全日志。这些数据从未离开您的设备。',
    ),
    resetButton: t('Tout effacer', 'Erase everything', '全部清除'),
  },

  security: {
    eyebrow: t('Sécurité', 'Security', '安全'),
    title: t('Journal de sécurité', 'Security log', '安全日志'),
    intro: t(
      'Chaque tentative de copie, d’impression ou de capture est horodatée et rattachée à votre compte et à votre appareil. Ce journal est consultable par l’administrateur de la formation.',
      'Every copy, print or capture attempt is timestamped and linked to your account and device. This log is visible to the course administrator.',
      '每一次复制、打印或截屏尝试都会记录时间，并关联到您的账户与设备。课程管理员可查看此日志。',
    ),
    riskScore: t('Score de risque', 'Risk score', '风险评分'),
    events: t('Événements', 'Events', '事件数'),
    eventsHint: t('journal borné aux 200 derniers', 'log capped at the last 200', '仅保留最近 200 条'),
    critical: t('Critiques', 'Critical', '严重'),
    criticalHint: t('impression, capture, devtools', 'print, capture, devtools', '打印、截屏、开发者工具'),
    warning: t('Avertissements', 'Warnings', '警告'),
    warningHint: t('copie, session révoquée', 'copy, revoked session', '复制、会话注销'),
    filterAll: t('Tous', 'All', '全部'),
    filterCritical: t('Critiques', 'Critical', '严重'),
    filterWarning: t('Avertissements', 'Warnings', '警告'),
    filterInfo: t('Informations', 'Information', '信息'),
    recorded: t('Événements enregistrés', 'Recorded events', '已记录事件'),
    shown: (n: number) => t(`${n} affiché(s)`, `${n} shown`, `显示 ${n} 条`),
    thTime: t('Horodatage', 'Timestamp', '时间'),
    thEvent: t('Événement', 'Event', '事件'),
    thSeverity: t('Gravité', 'Severity', '级别'),
    thDevice: t('Appareil', 'Device', '设备'),
    thDetails: t('Détails', 'Details', '详情'),
    empty: t('Aucun événement pour ce filtre.', 'No event for this filter.', '该筛选条件下暂无事件。'),
    sevCritical: t('Critique', 'Critical', '严重'),
    sevWarning: t('Avertissement', 'Warning', '警告'),
    sevInfo: t('Information', 'Information', '信息'),
    footnote: t(
      'En production, ces événements sont transmis au serveur en temps réel et déclenchent des alertes administrateur. Dans cette démonstration statique, ils restent dans votre navigateur.',
      'In production these events are sent to the server in real time and raise administrator alerts. In this static demo they stay in your browser.',
      '在正式环境中，这些事件会实时发送至服务器并触发管理员告警。在本静态演示中，它们仅保存在您的浏览器内。',
    ),
  },

  admin: {
    eyebrow: t('Administration', 'Administration', '管理'),
    title: t('Espace administrateur', 'Administrator area', '管理后台'),
    intro: t(
      'Suivi des apprenants, journal de sécurité consolidé et vérification d’empreinte. Les lignes autres que la vôtre sont des données de démonstration.',
      'Learner tracking, consolidated security log and fingerprint verification. Rows other than yours are demo data.',
      '学员跟踪、安全日志汇总与指纹校验。除您本人外，其余行均为演示数据。',
    ),
    learners: t('Apprenants', 'Learners', '学员数'),
    learnersHint: t('sur une licence de 100 places', 'on a 100-seat licence', '许可席位共 100 个'),
    avgProgress: t('Progression moyenne', 'Average progress', '平均进度'),
    atRisk: t('Comptes à surveiller', 'Accounts to watch', '需关注账户'),
    atRiskHint: t('score de risque ≥ 25', 'risk score ≥ 25', '风险评分 ≥ 25'),
    criticalEvents: t('Événements critiques', 'Critical events', '严重事件'),
    criticalHint: t('sur votre session en cours', 'in your current session', '本次会话中'),
    tracking: t('Suivi des apprenants', 'Learner tracking', '学员跟踪'),
    thLearner: t('Apprenant', 'Learner', '学员'),
    thProgress: t('Progression', 'Progress', '进度'),
    thLastQuiz: t('Dernier quiz', 'Last quiz', '最近测验'),
    thDevices: t('Appareils', 'Devices', '设备'),
    thRisk: t('Risque', 'Risk', '风险'),
    you: t('Vous', 'You', '您'),
    verifierTitle: t(
      'Vérificateur d’empreinte — identifier la source d’une fuite',
      'Fingerprint checker — trace a leak back to its source',
      '指纹校验器——定位泄露来源',
    ),
    verifierIntro: t(
      'Collez ici un extrait de texte récupéré sur un support tiers. Si l’extrait provient de la plateforme, l’empreinte invisible révèle l’apprenant, l’appareil et l’heure de consultation.',
      'Paste an excerpt found on a third-party channel. If it came from the platform, the invisible fingerprint reveals the learner, the device and the time it was read.',
      '粘贴在第三方渠道发现的文本片段。若其来自本平台，隐形指纹将揭示学员、设备与阅读时间。',
    ),
    insertMarked: t('Insérer un extrait filigrané', 'Insert a watermarked excerpt', '插入带水印的片段'),
    insertClean: t('Insérer le même texte sans filigrane', 'Insert the same text without a watermark', '插入无水印的同一文本'),
    clear: t('Effacer', 'Clear', '清空'),
    sampleLabel: t('Extrait suspect', 'Suspect excerpt', '可疑片段'),
    samplePlaceholder: t('Collez ici le texte à analyser…', 'Paste the text to analyse here…', '在此粘贴待分析的文本……'),
    found: t('Empreinte identifiée', 'Fingerprint identified', '已识别指纹'),
    notFound: t('Aucune empreinte détectée', 'No fingerprint detected', '未检测到指纹'),
    notFoundText: t(
      'Cet extrait ne provient pas de la plateforme, ou il a été retranscrit manuellement, normalisé, ou passé par un OCR — ce qui détruit les caractères de largeur nulle.',
      'This excerpt did not come from the platform, or it was retyped, normalised, or passed through OCR — which destroys zero-width characters.',
      '该片段并非来自本平台，或已被手动重新输入、规范化或经过 OCR 处理——这些操作会破坏零宽字符。',
    ),
    fpLearner: t('Apprenant', 'Learner', '学员'),
    fpDevice: t('Appareil', 'Device', '设备'),
    fpReadAt: t('Consulté vers', 'Read around', '阅读时间约'),
    fpStats: (hidden: number, visible: number) =>
      t(
        `${hidden} caractères invisibles pour ${visible} caractères visibles. L’empreinte est répétée tous les 24 mots.`,
        `${hidden} invisible characters for ${visible} visible ones. The fingerprint repeats every 24 words.`,
        `${hidden} 个隐形字符对应 ${visible} 个可见字符。指纹每 24 个词重复一次。`,
      ),
    matrix: t('Matrice de protection par plateforme', 'Protection matrix by platform', '各平台保护能力对照'),
    matrixHint: t('Limites documentées honnêtement', 'Limits documented honestly', '如实记录各项限制'),
    thMeasure: t('Mesure', 'Measure', '措施'),
    thWeb: t('Web (cette démo)', 'Web (this demo)', '网页（本演示）'),
    thDesktop: t('Desktop Electron', 'Electron desktop', 'Electron 桌面端'),
    thMobile: t('Mobile React Native', 'React Native mobile', 'React Native 移动端'),
    yes: t('Oui', 'Yes', '支持'),
    bestEffort: t('Best-effort', 'Best-effort', '尽力而为'),
  },

  shield: {
    blurTitle: t('Contenu masqué', 'Content hidden', '内容已隐藏'),
    blurText: t(
      'La fenêtre a perdu le focus. Revenez sur l’application pour réafficher la leçon.',
      'The window lost focus. Come back to the app to show the lesson again.',
      '窗口已失去焦点。返回应用即可重新显示本课内容。',
    ),
    hiddenTitle: t('Onglet en arrière-plan', 'Tab in background', '标签页处于后台'),
    hiddenText: t(
      'Le contenu est masqué tant que cet onglet n’est pas au premier plan.',
      'Content stays hidden until this tab is in the foreground.',
      '在该标签页回到前台之前，内容将保持隐藏。',
    ),
    printTitle: t('Impression désactivée', 'Printing disabled', '已禁用打印'),
    printText: t(
      'Le contenu ne peut être ni imprimé ni exporté. Tentative enregistrée.',
      'The content cannot be printed or exported. Attempt recorded.',
      '内容无法打印或导出。此次尝试已被记录。',
    ),
    active: t('Protection active', 'Protection active', '保护已启用'),
  },

  toast: {
    signedInTitle: t('Connexion établie', 'Signed in', '登录成功'),
    signedInText: t(
      'Protections de contenu activées sur cet appareil.',
      'Content protections enabled on this device.',
      '已在本设备启用内容保护。',
    ),
    copyTitle: t('Copie bloquée', 'Copy blocked', '复制已阻止'),
    copyText: t(
      'Le contenu est protégé. Votre empreinte a été enregistrée dans le journal de sécurité.',
      'The content is protected. Your fingerprint has been recorded in the security log.',
      '内容受保护。您的指纹已记入安全日志。',
    ),
    saveTitle: t('Sauvegarde bloquée', 'Saving blocked', '保存已阻止'),
    saveText: t(
      'L’enregistrement de la page et l’affichage du code source sont désactivés.',
      'Saving the page and viewing its source are disabled.',
      '已禁用保存页面与查看源代码。',
    ),
    printTitle: t('Impression désactivée', 'Printing disabled', '已禁用打印'),
    printText: t(
      'Le contenu de formation ne peut pas être imprimé ni exporté en PDF.',
      'Course content cannot be printed or exported to PDF.',
      '课程内容无法打印或导出为 PDF。',
    ),
    screenshotTitle: t('Capture d’écran détectée', 'Screenshot detected', '检测到截屏'),
    screenshotText: t(
      'Le navigateur ne peut pas bloquer la capture. Le contenu affiché porte votre filigrane nominatif.',
      'The browser cannot block the capture. The displayed content carries your named watermark.',
      '浏览器无法阻止截屏。所显示的内容带有您的实名水印。',
    ),
    devtoolsTitle: t('Outils de développement suspectés', 'Developer tools suspected', '疑似打开开发者工具'),
    devtoolsText: t(
      'Cet événement est horodaté dans le journal de sécurité de votre compte.',
      'This event is timestamped in your account security log.',
      '该事件已记入您账户的安全日志。',
    ),
    sessionRevokedTitle: t('Session révoquée', 'Session revoked', '会话已注销'),
    sessionRevokedText: t(
      'Une nouvelle connexion a été détectée sur ce compte. Une seule session est autorisée.',
      'A new sign-in was detected on this account. Only one session is allowed.',
      '检测到该账户的新登录。同时只允许一个会话。',
    ),
    singleSessionTitle: t('Session unique appliquée', 'Single session enforced', '已执行单一会话'),
    singleSessionText: (n: number) =>
      t(
        `${n} session(s) active(s) ont été révoquées par cette connexion.`,
        `${n} active session(s) were revoked by this sign-in.`,
        `本次登录已注销 ${n} 个活动会话。`,
      ),
    deviceRemovedTitle: t('Appareil retiré', 'Device removed', '设备已移除'),
    deviceRemovedText: t(
      'Ses sessions actives ont été révoquées.',
      'Its active sessions have been revoked.',
      '该设备的活动会话已被注销。',
    ),
    resetTitle: t('Démonstration réinitialisée', 'Demo reset', '演示已重置'),
    resetText: t(
      'Progression, appareils et journal effacés.',
      'Progress, devices and log erased.',
      '已清除学习进度、设备与日志。',
    ),
  },

  securityEvents: {
    login: t('Connexion réussie', 'Successful sign-in', '登录成功'),
    logout: t('Déconnexion', 'Sign-out', '退出登录'),
    'session-revoked': t('Session révoquée', 'Session revoked', '会话已注销'),
    'device-registered': t('Nouvel appareil enregistré', 'New device registered', '注册了新设备'),
    'device-limit-reached': t('Limite de 3 appareils atteinte', '3-device limit reached', '已达到 3 台设备上限'),
    'device-removed': t('Appareil retiré du compte', 'Device removed from account', '设备已从账户移除'),
    'copy-blocked': t('Tentative de copie bloquée', 'Copy attempt blocked', '已阻止复制尝试'),
    'cut-blocked': t('Tentative de couper bloquée', 'Cut attempt blocked', '已阻止剪切尝试'),
    'context-menu-blocked': t('Clic droit bloqué', 'Right-click blocked', '已阻止右键菜单'),
    'print-blocked': t('Tentative d’impression bloquée', 'Print attempt blocked', '已阻止打印尝试'),
    'save-blocked': t('Tentative de sauvegarde bloquée', 'Save attempt blocked', '已阻止保存尝试'),
    'screenshot-shortcut': t('Raccourci de capture détecté', 'Capture shortcut detected', '检测到截屏快捷键'),
    'devtools-suspected': t('Outils de développement suspectés', 'Developer tools suspected', '疑似开发者工具'),
    'focus-lost': t('Perte de focus, contenu masqué', 'Focus lost, content hidden', '失去焦点，内容已隐藏'),
    'visibility-hidden': t('Onglet masqué, contenu protégé', 'Tab hidden, content protected', '标签页隐藏，内容受保护'),
    'quiz-passed': t('Quiz réussi', 'Quiz passed', '测验通过'),
    'quiz-failed': t('Quiz échoué', 'Quiz failed', '测验未通过'),
    'lesson-completed': t('Leçon terminée', 'Lesson completed', '本课已完成'),
  },
} as const;
