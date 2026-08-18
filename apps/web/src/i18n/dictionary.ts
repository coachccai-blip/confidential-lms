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

  levels: {
    A1: t('A1 · Découverte', 'A1 · Breakthrough', 'A1 · 入门'),
    A2: t('A2 · Survie', 'A2 · Waystage', 'A2 · 基础'),
    B1: t('B1 · Seuil', 'B1 · Threshold', 'B1 · 门槛'),
    B2: t('B2 · Avancé', 'B2 · Vantage', 'B2 · 进阶'),
    C1: t('C1 · Autonome', 'C1 · Effective proficiency', 'C1 · 熟练'),
    C2: t('C2 · Maîtrise', 'C2 · Mastery', 'C2 · 精通'),
  },

  levelHints: {
    A1: t(
      'Se présenter, poser des questions simples, comprendre des phrases du quotidien.',
      'Introduce yourself, ask simple questions, understand everyday phrases.',
      '自我介绍、提出简单问题、听懂日常用语。',
    ),
    A2: t(
      'Raconter au passé, décrire, se repérer dans le temps et l’espace.',
      'Talk about the past, describe things, find your way in time and space.',
      '讲述过去、进行描述、把握时间与空间的表达。',
    ),
    B1: t(
      'Se débrouiller seul, exprimer une opinion et la justifier, viser le DELF B1.',
      'Manage on your own, state and justify an opinion, aim for the DELF B1.',
      '独立应对日常、表达并论证观点、备考 DELF B1。',
    ),
    B2: t(
      'Argumenter, nuancer, tenir un échange professionnel, viser le DELF B2.',
      'Argue, qualify, hold a professional exchange, aim for the DELF B2.',
      '进行论证与细致表达、应对职场交流、备考 DELF B2。',
    ),
    C1: t(
      'Synthétiser des sources, écrire et comprendre à un niveau académique.',
      'Synthesise sources, write and understand at academic level.',
      '综合多方材料，在学术层面读写与理解。',
    ),
    C2: t(
      'Restituer, styliser, convaincre : le français sans plafond.',
      'Report, shape a style, convince: French with no ceiling.',
      '复述、驾驭文体、以理服人：法语再无上限。',
    ),
  },

  login: {
    inviteLabel: t('Invitation de votre enseignant', 'Invitation from your teacher', '教师发送的邀请'),
    invitePlaceholder: t(
      'Collez ici l’invitation reçue (facultatif)',
      'Paste the invitation you received (optional)',
      '在此粘贴收到的邀请（可选）',
    ),
    inviteApply: t('Utiliser cette invitation', 'Use this invitation', '使用此邀请'),
    inviteOk: (name: string) =>
      t(
        `Invitation reconnue : bienvenue, ${name}.`,
        `Invitation recognised: welcome, ${name}.`,
        `邀请已识别：欢迎您，${name}。`,
      ),
    inviteFailed: t(
      'Cette invitation est illisible ou incomplète.',
      'This invitation is unreadable or incomplete.',
      '该邀请无法识别或不完整。',
    ),
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
      'Six niveaux vous attendent, du A1 au C2, avec trois cours complets par palier.',
      'Six levels are waiting, from A1 to C2, with three complete courses at each step.',
      '六个等级已就绪，从 A1 到 C2，每个等级各有三门完整课程。',
    ),
    statProgress: t('Progression globale', 'Overall progress', '总体进度'),
    statSteps: t('Étapes terminées', 'Steps completed', '已完成步骤'),
    statStepsHint: (n: number) => t(`sur ${n} parcours`, `across ${n} courses`, `覆盖 ${n} 门课程`),
    statQuizzes: t('Quiz réussis', 'Quizzes passed', '已通过测验'),
    statQuizzesHint: t('quiz notés du catalogue', 'graded quizzes in the catalogue', '课程目录中的评分测验'),
    statCourses: t('Cours terminés', 'Courses completed', '已完成课程'),
    statCoursesHint: (n: number) => t(`sur ${n} au catalogue`, `out of ${n} in the catalogue`, `目录共 ${n} 门`),
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
    reportTitle: t('Transmettre ma progression', 'Send my progress', '发送我的学习进度'),
    reportIntro: t(
      'Cette plateforme fonctionne sans serveur : votre progression reste sur cet appareil. Pour que votre enseignant la voie, copiez le relevé ci-dessous et envoyez-le-lui.',
      'This platform runs without a server: your progress stays on this device. So that your teacher can see it, copy the record below and send it to them.',
      '本平台无服务器运行：您的进度保存在本设备上。若希望教师看到，请复制下方记录并发送给他。',
    ),
    reportGenerate: t('Établir mon relevé', 'Generate my record', '生成我的记录'),
    reportCopy: t('Copier le relevé', 'Copy the record', '复制记录'),
    reportCopied: t('Relevé copié.', 'Record copied.', '记录已复制。'),
    reportNoCode: t(
      'Aucun code d’inscription n’est associé à cette session : votre enseignant devra vous rapprocher à la main. Reconnectez-vous avec l’invitation qu’il vous a envoyée pour éviter cela.',
      'No enrolment code is attached to this session: your teacher will have to match you by hand. Sign in again with the invitation they sent you to avoid this.',
      '本次会话未关联报名代码：教师需要手动匹配。请使用教师发送的邀请重新登录以避免此情况。',
    ),
    reportCode: (code: string) => t(`Code d’inscription : ${code}`, `Enrolment code: ${code}`, `报名代码：${code}`),
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
    resetCohort: (n: number) =>
      t(
        `Attention : cela supprimera aussi les ${n} comptes apprenants créés depuis cet appareil, leurs remontées de progression et le mot de passe de l’espace de pilotage. Exportez-les d’abord si vous souhaitez les conserver.`,
        `Warning: this will also delete the ${n} learner accounts created on this device, their progress reports and the management workspace password. Export them first if you want to keep them.`,
        `注意：这还会删除在本设备上创建的 ${n} 个学员账户、他们的进度回传以及管理空间密码。如需保留，请先导出。`,
      ),
    resetConfirm: t(
      'Effacer définitivement les comptes apprenants et toute la progression enregistrée sur cet appareil ?',
      'Permanently erase the learner accounts and all progress stored on this device?',
      '确定要永久删除本设备上的学员账户和全部已保存进度吗？',
    ),
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
      'Créez les comptes de vos apprenants, suivez leur progression et vérifiez l’origine d’un extrait fuité.',
      'Create your learners’ accounts, follow their progress and trace the origin of a leaked excerpt.',
      '创建学员账户、跟踪学习进度，并追查泄露片段的来源。',
    ),
    learners: t('Apprenants', 'Learners', '学员数'),
    learnersHint: t('comptes actifs dans la cohorte', 'active accounts in the cohort', '班级中的有效账户'),
    avgProgress: t('Progression moyenne', 'Average progress', '平均进度'),
    atRisk: t('Comptes à surveiller', 'Accounts to watch', '需关注账户'),
    atRiskHint: t('score de risque ≥ 25', 'risk score ≥ 25', '风险评分 ≥ 25'),
    criticalEvents: t('Événements critiques', 'Critical events', '严重事件'),
    criticalHint: t('sur votre session en cours', 'in your current session', '本次会话中'),
    avgProgressHint: t(
      'sur les remontées reçues',
      'across the reports received',
      '基于已收到的进度回传',
    ),
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

    /* --- Verrou d'accès --- */
    lockTitle: t('Espace réservé à l’enseignant', 'Teacher-only area', '仅限教师的空间'),
    lockIntro: t(
      'Saisissez le mot de passe pour ouvrir le pilotage de la cohorte.',
      'Enter the password to open cohort management.',
      '请输入密码以打开班级管理。',
    ),
    lockPassword: t('Mot de passe', 'Password', '密码'),
    lockSubmit: t('Ouvrir l’espace', 'Open the workspace', '打开空间'),
    lockWrong: t('Mot de passe incorrect.', 'Incorrect password.', '密码不正确。'),
    lockAgain: t('Verrouiller', 'Lock', '锁定'),
    setupTitle: t('Choisissez un mot de passe', 'Choose a password', '设置密码'),
    setupIntro: t(
      'Aucun mot de passe n’est encore défini sur cet appareil. Choisissez-en un : il sera demandé à chaque ouverture de l’espace de pilotage.',
      'No password has been set on this device yet. Choose one: it will be requested each time the management workspace is opened.',
      '此设备尚未设置密码。请设置一个：每次打开管理空间时都会要求输入。',
    ),
    setupSubmit: t('Enregistrer le mot de passe', 'Save the password', '保存密码'),
    setupTooShort: (n: number) =>
      t(
        `Le mot de passe doit compter au moins ${n} caractères.`,
        `The password must be at least ${n} characters long.`,
        `密码至少需要 ${n} 个字符。`,
      ),
    setupMismatch: t('Les deux saisies diffèrent.', 'The two entries differ.', '两次输入不一致。'),
    setupConfirm: t('Confirmez le mot de passe', 'Confirm the password', '确认密码'),
    changePassword: t('Changer le mot de passe', 'Change the password', '修改密码'),
    currentPassword: t('Mot de passe actuel', 'Current password', '当前密码'),
    newPassword: t('Nouveau mot de passe', 'New password', '新密码'),
    passwordChanged: t('Mot de passe mis à jour.', 'Password updated.', '密码已更新。'),
    strength: {
      'too-short': t('Trop court', 'Too short', '过短'),
      weak: t('Faible', 'Weak', '较弱'),
      fair: t('Correct', 'Fair', '一般'),
      strong: t('Robuste', 'Strong', '强'),
    },
    lockWarningTitle: t(
      'Ce mot de passe protège un affichage, pas des données',
      'This password protects a view, not data',
      '此密码保护的是界面，而非数据',
    ),
    lockWarningText: t(
      'Le site est publié en pages statiques : aucun serveur ne vérifie ce mot de passe. Il évite qu’un regard de passage ouvre la page, mais quiconque sait lire le stockage du navigateur contournera le verrou. Une authentification réelle suppose le back-end décrit dans le brief.',
      'The site is published as static pages: no server verifies this password. It stops a passer-by from opening the page, but anyone able to read browser storage will bypass it. Real authentication requires the back-end described in the brief.',
      '本站以静态页面发布：没有服务器校验此密码。它能阻止路人随手打开页面，但任何会读取浏览器存储的人都能绕过。真正的身份验证需要方案中所述的后端。',
    ),

    /* --- Comptes apprenants --- */
    rosterTitle: t('Comptes apprenants', 'Learner accounts', '学员账户'),
    rosterIntro: t(
      'Créez un compte par apprenant, puis transmettez-lui son invitation. Le code sert ensuite à rapprocher ses remontées de progression.',
      'Create one account per learner, then send them their invitation. The code is then used to match their progress reports.',
      '为每位学员创建一个账户，然后把邀请发给他。之后用该代码来匹配他回传的进度。',
    ),
    newLearner: t('Nouvel apprenant', 'New learner', '新增学员'),
    fieldName: t('Nom affiché', 'Display name', '显示姓名'),
    fieldEmail: t('Adresse électronique', 'Email address', '电子邮箱'),
    fieldLevel: t('Niveau visé', 'Target level', '目标等级'),
    fieldNote: t('Note interne', 'Internal note', '内部备注'),
    fieldNotePlaceholder: t(
      'Groupe, objectif, rythme… visible de vous seul.',
      'Group, goal, pace… visible to you only.',
      '班级、目标、进度……仅您可见。',
    ),
    noLevel: t('Sans niveau imposé', 'No set level', '不指定等级'),
    create: t('Créer le compte', 'Create the account', '创建账户'),
    createdTitle: t('Compte créé', 'Account created', '账户已创建'),
    createdText: (name: string) =>
      t(
        `Le compte de ${name} est prêt. Copiez son invitation ci-dessous.`,
        `${name}’s account is ready. Copy their invitation below.`,
        `${name} 的账户已就绪。请复制下方的邀请。`,
      ),
    errorNameRequired: t('Le nom est obligatoire.', 'The name is required.', '姓名为必填项。'),
    errorEmailInvalid: t('Adresse électronique invalide.', 'Invalid email address.', '电子邮箱无效。'),
    errorEmailDuplicate: t(
      'Un compte actif utilise déjà cette adresse.',
      'An active account already uses this address.',
      '已有一个有效账户使用该地址。',
    ),
    inviteTitle: t('Invitation à transmettre', 'Invitation to send', '待转交的邀请'),
    inviteIntro: t(
      'L’apprenant colle cette invitation sur l’écran de connexion : son nom, son adresse et son code sont alors renseignés automatiquement.',
      'The learner pastes this invitation on the sign-in screen: their name, address and code are then filled in automatically.',
      '学员在登录界面粘贴此邀请：姓名、邮箱和代码会自动填入。',
    ),
    copy: t('Copier', 'Copy', '复制'),
    copied: t('Copié', 'Copied', '已复制'),
    code: t('Code', 'Code', '代码'),
    archive: t('Archiver', 'Archive', '归档'),
    restore: t('Réactiver', 'Reactivate', '恢复'),
    archived: t('Archivé', 'Archived', '已归档'),
    showArchived: t('Afficher les comptes archivés', 'Show archived accounts', '显示已归档账户'),
    emptyRoster: t(
      'Aucun compte pour l’instant. Créez le premier ci-dessus.',
      'No accounts yet. Create the first one above.',
      '目前还没有账户。请在上方创建第一个。',
    ),

    /* --- Remontées de progression --- */
    reportsTitle: t('Remontées de progression', 'Progress reports', '进度回传'),
    reportsIntro: t(
      'Sans serveur, la progression ne circule pas toute seule. Chaque apprenant exporte la sienne depuis « Appareils & sessions » et vous la transmet ; collez-la ici pour mettre le suivi à jour.',
      'Without a server, progress does not travel on its own. Each learner exports theirs from “Devices & sessions” and sends it to you; paste it here to update the tracking table.',
      '没有服务器，进度不会自动传递。每位学员从“设备与会话”导出自己的进度并发给您；粘贴到此处即可更新跟踪表。',
    ),
    reportPlaceholder: t(
      'Collez ici la remontée reçue de l’apprenant…',
      'Paste the report received from the learner here…',
      '在此粘贴收到的学员进度回传……',
    ),
    importReport: t('Importer la remontée', 'Import the report', '导入进度'),
    importOk: (name: string) =>
      t(
        `Progression de ${name} mise à jour.`,
        `${name}’s progress has been updated.`,
        `${name} 的进度已更新。`,
      ),
    importUnknown: t(
      'Remontée importée, mais son code ne correspond à aucun compte de la cohorte.',
      'Report imported, but its code matches no account in the cohort.',
      '进度已导入，但其代码与班级中的任何账户都不匹配。',
    ),
    importFailed: t(
      'Contenu illisible : ce n’est pas une remontée de progression.',
      'Unreadable content: this is not a progress report.',
      '内容无法识别：这不是一份进度回传。',
    ),
    thQuizAvg: t('Moyenne quiz', 'Quiz average', '测验均分'),
    thLastActivity: t('Dernière activité', 'Last activity', '最近活动'),
    thLevel: t('Niveau', 'Level', '等级'),
    noReport: t('Aucune remontée', 'No report yet', '尚无回传'),
    exportRoster: t('Exporter la cohorte', 'Export the cohort', '导出班级'),
    exportRosterHint: t(
      'Sauvegarde complète des comptes et des remontées, à conserver hors du navigateur.',
      'A full backup of accounts and reports, to keep outside the browser.',
      '账户与进度的完整备份，请保存在浏览器之外。',
    ),
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
    'admin-unlocked': t('Espace de pilotage ouvert', 'Admin workspace unlocked', '已打开管理空间'),
    'admin-unlock-failed': t(
      'Mot de passe administrateur refusé',
      'Admin password rejected',
      '管理员密码被拒绝',
    ),
  },
} as const;
