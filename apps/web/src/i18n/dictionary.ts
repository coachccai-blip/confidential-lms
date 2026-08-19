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
    soundOn: t('Activer les sons', 'Turn sounds on', '开启音效'),
    soundOff: t('Couper les sons', 'Turn sounds off', '关闭音效'),
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

  /* ------------------------------------------------------------------
     Page d'accueil publique : la seule page visible sans compte.
     ------------------------------------------------------------------ */
  home: {
    signIn: t('Se connecter', 'Sign in', '登录'),
    heroEyebrow: t('Français · A1 → C2', 'French · A1 → C2', '法语 · A1 → C2'),
    heroTitle: t(
      'Le français, enseigné clairement.\nVos cours, protégés.',
      'French, taught clearly.\nYour courses, protected.',
      '清晰的法语教学。\n受保护的课程内容。',
    ),
    heroText: t(
      'Dix-huit cours complets, du premier bonjour à la lecture de Proust. Chaque leçon est trilingue, manipulable, et porte le nom de l’apprenant qui la consulte.',
      'Eighteen complete courses, from your first bonjour to reading Proust. Every lesson is trilingual, hands-on, and carries the name of the learner reading it.',
      '十八门完整课程，从第一句 bonjour 到阅读普鲁斯特。每节课都是三语的、可动手操作的，并带有阅读者的姓名。',
    ),
    heroCta: t('Accéder à mes cours', 'Open my courses', '进入我的课程'),
    heroSecondary: t('Voir le programme', 'See the syllabus', '查看课程安排'),
    statCourses: t('cours complets', 'complete courses', '门完整课程'),
    statSteps: t('étapes de travail', 'learning steps', '个学习步骤'),
    statLanguages: t('langues d’interface', 'interface languages', '种界面语言'),
    statSchemas: t('schémas manipulables', 'hands-on diagrams', '个可操作图示'),

    levelsTitle: t('Six niveaux, six cours chacun', 'Six levels, six courses each', '六个等级，每级六门课'),
    levelsText: t(
      'Le niveau du Cadre européen est la catégorie : on entre au palier qui correspond, on en sort quand les six cours sont terminés.',
      'The Common European Framework level is the category: you start at the step that fits and leave it when all six courses are done.',
      '欧洲共同框架的等级即为分类：从合适的层级进入，六门课程全部完成后即可离开。',
    ),

    featuresTitle: t('Ce qui distingue ces cours', 'What sets these courses apart', '这些课程的独到之处'),
    features: [
      {
        emoji: '🌍',
        title: t('Trilingue de bout en bout', 'Trilingual throughout', '全程三语'),
        text: t(
          'Interface et contenu en français, anglais et chinois. Les exemples, eux, restent en français : c’est la langue qu’on apprend.',
          'Interface and content in French, English and Chinese. The examples stay in French: that is the language being learned.',
          '界面与内容提供法语、英语和中文。例句始终保持法语——这正是所学的语言。',
        ),
      },
      {
        emoji: '🎛️',
        title: t('Des schémas qu’on manipule', 'Diagrams you can work', '可动手操作的图示'),
        text: t(
          'Roues de conjugaison, matrices d’articles, frises de temps : on clique, la réponse se compose. Un tableau se lit, un schéma s’explore.',
          'Conjugation wheels, article matrices, tense timelines: you click, the answer assembles. A table is read; a diagram is explored.',
          '动词变位转轮、冠词矩阵、时态轴：点击即可组合出答案。表格供阅读，图示供探索。',
        ),
      },
      {
        emoji: '💬',
        title: t('Les mots difficiles expliqués', 'Difficult words explained', '难词随手可查'),
        text: t(
          'Chaque terme technique est cliquable et ouvre ses trois définitions à la fois, avec sa phonétique et un exemple.',
          'Every technical term is clickable and opens all three definitions at once, with its phonetics and an example.',
          '每个专业术语均可点击，同时给出三语释义、音标和例句。',
        ),
      },
      {
        emoji: '🏅',
        title: t('Une progression qui se voit', 'Progress you can see', '看得见的进步'),
        text: t(
          'Points, paliers, série de jours et badges — tous calculés sur le travail réellement fait, jamais sur le temps passé.',
          'Points, levels, day streaks and badges — all computed from work actually done, never from time spent.',
          '积分、等级、连续天数与徽章——全部依据实际完成的学习，而非停留时长。',
        ),
      },
      {
        emoji: '🔒',
        title: t('Un contenu qui reste chez vous', 'Content that stays with you', '内容不外流'),
        text: t(
          'Copie, impression et export sont neutralisés, chaque tentative est journalisée, et une empreinte invisible relie tout extrait à son lecteur.',
          'Copying, printing and exporting are disabled, every attempt is logged, and an invisible fingerprint ties any excerpt to its reader.',
          '复制、打印与导出均被禁用，每次尝试都会记录，隐形指纹将任何片段与其读者关联。',
        ),
      },
      {
        emoji: '📊',
        title: t('Un suivi pour l’enseignant', 'Tracking for the teacher', '面向教师的跟踪'),
        text: t(
          'Comptes créés à la main, progression par apprenant, moyennes de quiz et vérificateur d’empreinte en cas de fuite.',
          'Hand-created accounts, per-learner progress, quiz averages, and a fingerprint checker in case of a leak.',
          '手动创建账户、逐人跟踪进度、测验均分，并在泄露时提供指纹校验器。',
        ),
      },
    ],

    howTitle: t('Comment ça se passe', 'How it works', '使用流程'),
    steps: [
      {
        title: t('Votre enseignant crée votre compte', 'Your teacher creates your account', '教师为您创建账户'),
        text: t('Il vous transmet un identifiant et un mot de passe.', 'They send you a username and a password.', '他会把登录标识和密码发给您。'),
      },
      {
        title: t('Vous entrez au niveau qui vous correspond', 'You start at the level that fits', '从适合您的等级开始'),
        text: t('De A1 pour un débutant complet à C2 pour la maîtrise.', 'From A1 for a complete beginner to C2 for mastery.', '从零基础的 A1 到精通级的 C2。'),
      },
      {
        title: t('Vous travaillez, la progression suit', 'You work, progress follows', '您学习，进度随之累积'),
        text: t('Chaque étape terminée rapporte des points et se retrouve dans le suivi.', 'Each completed step earns points and appears in the tracking table.', '每完成一步即可获得积分，并显示在跟踪表中。'),
      },
    ],

    ctaTitle: t('Prêt à commencer ?', 'Ready to begin?', '准备好开始了吗？'),
    ctaText: t(
      'Connectez-vous avec les identifiants fournis par votre enseignant — ou avec le compte de démonstration.',
      'Sign in with the credentials your teacher gave you — or with the demo account.',
      '使用教师提供的账户登录——或使用演示账户。',
    ),
    footerNote: t(
      'Démonstration web publique. Aucune donnée ne quitte votre navigateur.',
      'Public web demo. No data ever leaves your browser.',
      '公开网页演示。任何数据都不会离开您的浏览器。',
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
        title: t('Contenu nominatif', 'Named content', '实名内容'),
        text: t(
          'Les leçons vous appellent par votre prénom, et une empreinte invisible marque chaque texte servi.',
          'The lessons address you by your first name, and an invisible fingerprint marks every text served.',
          '课程会以您的名字称呼您，并在每段文字中嵌入隐形指纹。',
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
    login: t('Identifiant', 'Username', '登录标识'),
    loginHint: t(
      'Celui que votre enseignant vous a communiqué.',
      'The one your teacher gave you.',
      '教师发给您的那一个。',
    ),
    password: t('Mot de passe', 'Password', '密码'),
    backHome: t('Retour à l’accueil', 'Back to home', '返回首页'),
    demoAccounts: t('Comptes de démonstration', 'Demo accounts', '演示账户'),
    demoRoleLearner: t('Apprenant', 'Learner', '学员'),
    demoRoleAdmin: t('Enseignant', 'Teacher', '教师'),
    demoFill: t('Remplir', 'Fill in', '填入'),
    submit: t('Accéder à mes cours', 'Open my courses', '进入我的课程'),
    demoTitle: t('Accès réservé', 'Restricted access', '访问受限'),
    demoText: t(
      'La plateforme n’est pas ouverte : il faut un compte. Les deux comptes ci-dessus permettent de la visiter ; les autres sont créés par l’enseignant depuis son espace, et transmis par invitation.',
      'The platform is not open: an account is required. The two accounts above let you visit it; the others are created by the teacher from their workspace and sent by invitation.',
      '本平台并非开放访问：必须持有账户。上方两个账户可供参观；其余账户由教师在其工作区创建，并通过邀请发送。',
    ),
    errorRequired: t(
      'Renseignez votre identifiant et votre mot de passe.',
      'Enter your username and your password.',
      '请填写登录标识和密码。',
    ),
    errorBadCredentials: t(
      'Identifiant ou mot de passe incorrect.',
      'Incorrect username or password.',
      '登录标识或密码不正确。',
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
      'Six niveaux vous attendent, du A1 au C2, avec six cours complets par palier.',
      'Six levels are waiting, from A1 to C2, with six complete courses at each step.',
      '六个等级已就绪，从 A1 到 C2，每个等级各有六门完整课程。',
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
    identity: t('Identité traçable', 'Traceable identity', '可溯源身份'),
    fieldUsername: t('Identifiant de connexion', 'Sign-in username', '登录标识'),
    fieldUsernameHint: t(
      'Lettres, chiffres, point, tiret ou souligné. C’est ce que l’apprenant saisira pour entrer.',
      'Letters, digits, dot, hyphen or underscore. This is what the learner will type to sign in.',
      '字母、数字、点、连字符或下划线。学员将用它登录。',
    ),
    errorUsernameInvalid: t(
      'Identifiant invalide : 3 à 32 caractères, sans espace ni accent.',
      'Invalid username: 3 to 32 characters, no spaces or accents.',
      '标识无效：需 3 至 32 个字符，不含空格或重音符号。',
    ),
    errorUsernameDuplicate: t(
      'Cet identifiant est déjà pris.',
      'This username is already taken.',
      '该标识已被占用。',
    ),
    fieldFirstName: t('Prénom', 'First name', '名字'),
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
    fieldLearnerId: t('Identifiant apprenant', 'Learner ID', '学员编号'),
    fieldDeviceFp: t('Empreinte appareil', 'Device fingerprint', '设备指纹'),
    identityNote: t(
      'Votre identifiant et celui de cet appareil composent l’empreinte invisible injectée dans chaque leçon. Votre prénom, lui, apparaît en clair dans le texte des cours.',
      'Your identifier and this device’s make up the invisible fingerprint injected into every lesson. Your first name, in turn, appears in plain sight in the course text.',
      '您的编号与本设备编号共同构成注入每节课的隐形指纹；而您的名字则明确出现在课文之中。',
    ),
    protectionsTitle: t('État des protections', 'Protection status', '保护状态'),
    statusOn: t('Actif', 'Active', '已启用'),
    statusDesktop: t('Application desktop requise', 'Desktop app required', '需桌面端应用'),
    protections: [
      t(
        'Prénom de l’apprenant inscrit dans le corps des leçons',
        'Learner’s first name written into the body of the lessons',
        '学员名字写入课文正文',
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
    fieldUsername: t('Identifiant de connexion', 'Sign-in username', '登录标识'),
    fieldUsernameHint: t(
      'Lettres, chiffres, point, tiret ou souligné. C’est ce que l’apprenant saisira pour entrer.',
      'Letters, digits, dot, hyphen or underscore. This is what the learner will type to sign in.',
      '字母、数字、点、连字符或下划线。学员将用它登录。',
    ),
    errorUsernameInvalid: t(
      'Identifiant invalide : 3 à 32 caractères, sans espace ni accent.',
      'Invalid username: 3 to 32 characters, no spaces or accents.',
      '标识无效：需 3 至 32 个字符，不含空格或重音符号。',
    ),
    errorUsernameDuplicate: t(
      'Cet identifiant est déjà pris.',
      'This username is already taken.',
      '该标识已被占用。',
    ),
    fieldFirstName: t('Prénom', 'First name', '名字'),
    fieldFirstNameHint: t(
      'Repris dans le corps des leçons pour interpeller l’apprenant.',
      'Used inside the lessons to address the learner.',
      '将出现在课文中，用于称呼学员。',
    ),
    fieldLastName: t('Nom de famille (facultatif)', 'Surname (optional)', '姓氏（可选）'),
    fieldEmail: t('Adresse électronique', 'Email address', '电子邮箱'),
    fieldPassword: t('Mot de passe', 'Password', '密码'),
    fieldPasswordHint: t(
      'À communiquer à l’apprenant avec son invitation. Il pourra le lire dans l’invitation, pas ici : notez-le maintenant.',
      'To be given to the learner along with their invitation. They will not be able to read it later — note it down now.',
      '请随邀请一并告知学员。之后无法再查看，请立即记下。',
    ),
    regenerate: t('Autre', 'Another', '换一个'),
    errorPasswordShort: (n: number) =>
      t(
        `Le mot de passe doit compter au moins ${n} caractères.`,
        `The password must be at least ${n} characters long.`,
        `密码至少需要 ${n} 个字符。`,
      ),
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

  /* ------------------------------------------------------------------
     Voix d'accompagnement.

     Ces phrases encadrent chaque leçon et portent le prénom de l'apprenant.
     Elles sont écrites en plusieurs variantes : une leçon donnée en tire
     toujours la même, mais deux leçons voisines n'ouvrent pas pareil.
     ------------------------------------------------------------------ */
  coach: {
    greetings: [
      t('Bonjour {prenom} 👋 Prenons cette leçon tranquillement.', 'Hello {prenom} 👋 Let’s take this lesson calmly.', '{prenom}，你好 👋 我们慢慢来学这一课。'),
      t('Content de vous retrouver, {prenom} ☀️ On y va.', 'Good to see you again, {prenom} ☀️ Off we go.', '很高兴又见到你，{prenom} ☀️ 我们开始吧。'),
      t('{prenom}, cette leçon est faite pour être relue. Prenez votre temps 🕰️', '{prenom}, this lesson is meant to be reread. Take your time 🕰️', '{prenom}，这一课值得重读。慢慢来 🕰️'),
      t('On continue, {prenom} 🚀 Chaque leçon ajoute une pièce au tableau.', 'Let’s carry on, {prenom} 🚀 Each lesson adds a piece to the picture.', '继续加油，{prenom} 🚀 每一课都为整体添上一块拼图。'),
      t('Bienvenue {prenom} 📘 Une notion, quelques exemples, et c’est acquis.', 'Welcome {prenom} 📘 One idea, a few examples, and it sticks.', '欢迎你，{prenom} 📘 一个知识点、几个例子，就能掌握。'),
      t('{prenom}, installez-vous : on va décortiquer ça ensemble 🔍', '{prenom}, settle in: we are going to unpack this together 🔍', '{prenom}，坐好，我们一起把它拆解开 🔍'),
      t('Ravi de vous revoir, {prenom} 🌊 On avance à votre rythme.', 'Glad to see you back, {prenom} 🌊 We move at your pace.', '很高兴你回来了，{prenom} 🌊 按你的节奏推进。'),
      t('Nouvelle étape, {prenom} 🧭 Celle-ci éclaire les suivantes.', 'New step, {prenom} 🧭 This one lights up the next ones.', '新的一步，{prenom} 🧭 这一课会照亮后面的内容。'),
    ],
    midway: [
      t('Vous tenez le bon fil, {prenom} 💪 La suite découle de ce qui précède.', 'You are on the right track, {prenom} 💪 What follows flows from this.', '你抓住要点了，{prenom} 💪 后面的内容由此展开。'),
      t('Pause d’une seconde, {prenom} : relisez le tableau ci-dessus avant de continuer 👀', 'One second, {prenom}: reread the table above before going on 👀', '停一秒，{prenom}：继续之前请重读上面的表格 👀'),
      t('C’est ici que ça se joue, {prenom} ⚡ Le reste n’est que déclinaison.', 'This is the crux, {prenom} ⚡ The rest is just variation.', '关键就在这里，{prenom} ⚡ 其余不过是变化形式。'),
      t('Encore un effort, {prenom} 🌱 Cette notion sert dans tous les cours suivants.', 'One more push, {prenom} 🌱 This idea is used in every later course.', '再坚持一下，{prenom} 🌱 这个知识点在之后的所有课程中都会用到。'),
      t('{prenom}, si un point résiste, revenez au premier exemple 🔁', '{prenom}, if something resists, go back to the first example 🔁', '{prenom}，如果哪里没弄懂，就回到第一个例子 🔁'),
      t('Belle progression, {prenom} ✨ La moitié la plus dense est derrière vous.', 'Nice progress, {prenom} ✨ The densest half is behind you.', '进展不错，{prenom} ✨ 最难的一半已经过去了。'),
    ],
    completion: [
      t('Leçon terminée, {prenom} 🎉 Une de plus au compteur.', 'Lesson finished, {prenom} 🎉 One more in the bag.', '本课完成，{prenom} 🎉 又拿下一课。'),
      t('Bravo {prenom} 🏅 Vous pouvez enchaîner ou revenir plus tard.', 'Well done {prenom} 🏅 Carry on now or come back later.', '做得好，{prenom} 🏅 可以继续，也可以稍后再来。'),
      t('C’est acquis, {prenom} ✅ Le prochain point s’appuie dessus.', 'That’s learned, {prenom} ✅ The next point builds on it.', '已经掌握了，{prenom} ✅ 下一个知识点以此为基础。'),
      t('Excellent, {prenom} 🌟 Votre progression vient d’avancer.', 'Excellent, {prenom} 🌟 Your progress just moved up.', '很棒，{prenom} 🌟 你的进度又前进了。'),
    ],
    quizIntro: [
      t('À vous de jouer, {prenom} 🎯 Six questions, aucune piège gratuit.', 'Your turn, {prenom} 🎯 Six questions, no gratuitous traps.', '轮到你了，{prenom} 🎯 六道题，没有无谓的陷阱。'),
      t('{prenom}, ce quiz vérifie la compréhension, pas la mémoire 🧠', '{prenom}, this quiz tests understanding, not memory 🧠', '{prenom}，这次测验考查理解，而非记忆 🧠'),
      t('Prenez votre temps, {prenom} ⏳ Chaque réponse est commentée ensuite.', 'Take your time, {prenom} ⏳ Every answer is explained afterwards.', '慢慢来，{prenom} ⏳ 每道题之后都有讲解。'),
    ],
    quizPassed: (name: string, score: number) =>
      t(
        `Réussi, ${name} 🎉 ${score} % — le seuil est franchi.`,
        `Passed, ${name} 🎉 ${score} % — you are over the threshold.`,
        `通过了，${name} 🎉 ${score} %，已越过合格线。`,
      ),
    quizFailed: (name: string, score: number) =>
      t(
        `${score} % cette fois, ${name}. Relisez les corrections : elles pointent exactement ce qui manque 🔍`,
        `${score} % this time, ${name}. Read the corrections: they point at exactly what is missing 🔍`,
        `这次 ${score} %，${name}。请看讲解，它们准确指出了欠缺之处 🔍`,
      ),
    personalNoteTitle: t('Cet exemplaire porte votre nom', 'This copy carries your name', '此副本带有您的姓名'),
    personalNoteText: t(
      'Votre prénom est inscrit dans le corps de cette leçon, et une empreinte invisible y est jointe. Un extrait recopié reste attribuable.',
      'Your first name is written into the body of this lesson, and an invisible fingerprint comes with it. A copied excerpt remains attributable.',
      '您的名字已写入本课正文，并附带隐形指纹。被复制的片段仍可追溯来源。',
    ),
  },

  /* ------------------------------------------------------------------
     Gamification. Le barème est affiché : un apprenant doit pouvoir
     deviner ce qui lui rapporte des points sans lire de règlement.
     ------------------------------------------------------------------ */
  game: {
    title: t('Votre progression', 'Your progress', '你的成长'),
    levelLabel: (n: number) => t(`Niveau ${n}`, `Level ${n}`, `第 ${n} 级`),
    xpLabel: (n: number) => t(n > 1 ? `${n} points` : `${n} point`, n > 1 ? `${n} points` : `${n} point`, `${n} 点`),
    toNext: (n: number) =>
      t(
        n > 1 ? `${n} points avant le niveau suivant` : `${n} point avant le niveau suivant`,
        n > 1 ? `${n} points to the next level` : `${n} point to the next level`,
        `距下一级还差 ${n} 点`,
      ),
    maxLevel: t('Niveau maximal atteint 👑', 'Top level reached 👑', '已达最高等级 👑'),
    // L'accord se fait à un : « 1 jour », « 2 jours ». L'anglais suit la même règle.
    streak: (n: number) =>
      t(
        n > 1 ? `${n} jours d’affilée` : `${n} jour d’affilée`,
        n > 1 ? `${n} days in a row` : `${n} day in a row`,
        `连续 ${n} 天`,
      ),
    streakNone: t('Série à démarrer', 'Streak not started', '连续记录尚未开始'),
    streakHint: t(
      'Une étape terminée aujourd’hui prolonge la série.',
      'One step completed today keeps the streak alive.',
      '今天完成一步即可延续记录。',
    ),
    badgesTitle: t('Badges', 'Badges', '徽章'),
    badgesCount: (earned: number, total: number) =>
      t(`${earned} sur ${total}`, `${earned} of ${total}`, `${earned} / ${total}`),
    locked: t('Pas encore débloqué', 'Not unlocked yet', '尚未解锁'),
    scoreTitle: t('Comment gagner des points', 'How to earn points', '如何获得点数'),
    scoreLesson: (n: number) => t(`+${n} par leçon terminée`, `+${n} per lesson completed`, `每完成一课 +${n}`),
    scoreQuiz: (n: number) => t(`+${n} par quiz réussi`, `+${n} per quiz passed`, `每通过一次测验 +${n}`),
    scorePerfect: (n: number) => t(`+${n} pour un sans-faute`, `+${n} for a perfect score`, `满分额外 +${n}`),
    scoreCourse: (n: number) => t(`+${n} par cours achevé`, `+${n} per course finished`, `每完成一门课程 +${n}`),
    levelUpTitle: t('Niveau supérieur 🎉', 'Level up 🎉', '升级了 🎉'),
    levelUpText: (name: string, n: number) =>
      t(
        `Bravo ${name}, vous passez au niveau ${n}.`,
        `Well done ${name}, you have reached level ${n}.`,
        `恭喜 ${name}，你已升至第 ${n} 级。`,
      ),
    badgeUnlockedTitle: t('Nouveau badge', 'New badge', '获得新徽章'),
    badges: {
      'first-lesson': {
        name: t('Premier pas', 'First step', '第一步'),
        hint: t('Terminer une première leçon.', 'Finish a first lesson.', '完成第一节课。'),
      },
      'first-quiz': {
        name: t('Première cible', 'First target', '首中靶心'),
        hint: t('Réussir un premier quiz.', 'Pass a first quiz.', '通过第一次测验。'),
      },
      'five-lessons': {
        name: t('Cinq leçons', 'Five lessons', '五节课'),
        hint: t('Terminer cinq leçons, tous cours confondus.', 'Finish five lessons, across all courses.', '在所有课程中累计完成五节课。'),
      },
      'streak-3': {
        name: t('Trois jours', 'Three days', '三天'),
        hint: t('Travailler trois jours de suite.', 'Study three days in a row.', '连续三天学习。'),
      },
      'perfect-quiz': {
        name: t('Sans-faute', 'Flawless', '满分'),
        hint: t('Obtenir 100 % à un quiz.', 'Score 100 % on a quiz.', '在一次测验中获得 100 %。'),
      },
      polyglot: {
        name: t('Polyglotte', 'Polyglot', '多语者'),
        hint: t('Consulter le site dans les trois langues.', 'View the site in all three languages.', '用三种语言浏览本站。'),
      },
      'course-done': {
        name: t('Cours achevé', 'Course finished', '课程完成'),
        hint: t('Terminer toutes les étapes d’un cours.', 'Finish every step of a course.', '完成一门课程的全部步骤。'),
      },
      'streak-7': {
        name: t('Une semaine', 'One week', '一周'),
        hint: t('Travailler sept jours de suite.', 'Study seven days in a row.', '连续七天学习。'),
      },
      'night-owl': {
        name: t('Oiseau de nuit', 'Night owl', '夜猫子'),
        hint: t('Terminer une étape tard dans la nuit.', 'Finish a step late at night.', '在深夜完成一步。'),
      },
      'level-done': {
        name: t('Palier franchi', 'Level cleared', '通关一级'),
        hint: t('Terminer les six cours d’un niveau du CECRL.', 'Finish all six courses of one CEFR level.', '完成某一 CEFR 等级的六门课程。'),
      },
    },
  },

  /** Libellés des schémas manipulables. */
  ix: {
    documentLabel: t('Page de document', 'Document page', '文档页面'),
    playOrder: t('Voir dans l’ordre', 'Watch the order', '按顺序演示'),
    wellDone: t('C’est dans l’ordre', 'That’s the right order', '顺序正确'),
    allMatched: t('Tout est relié', 'Everything is matched', '全部配对完成'),
    pickExpression: t(
      'Choisissez une expression à gauche.',
      'Pick an expression on the left.',
      '请在左侧选择一个表达。',
    ),
    nowPickMeaning: t(
      'Choisissez maintenant ce qu’elle veut dire.',
      'Now pick what it means.',
      '现在选择它的意思。',
    ),

    /* Écoute */
    listen: t('Écouter', 'Listen', '朗读'),
    listenSlow: t('Écouter lentement', 'Listen slowly', '慢速朗读'),
    listening: t('Lecture en cours', 'Playing', '正在朗读'),
    noVoice: t(
      'Votre navigateur ne propose pas de voix française : l’écoute est indisponible ici.',
      'Your browser offers no French voice, so listening is unavailable here.',
      '你的浏览器没有法语语音，因此无法朗读。',
    ),

    /* Dictée */
    dictationPlay: t('Écouter la phrase', 'Play the sentence', '播放句子'),
    dictationPlaceholder: t('Écrivez ce que vous entendez…', 'Write what you hear…', '写下你听到的内容……'),
    dictationCheck: t('Vérifier', 'Check', '检查'),
    dictationRetry: t('Réessayer', 'Try again', '再试一次'),
    dictationReveal: t('Voir la réponse', 'Show the answer', '显示答案'),
    dictationPerfect: t('Sans faute', 'Word perfect', '完全正确'),
    dictationClose: (n: number) =>
      t(
        `Presque : ${n} mot${n > 1 ? 's' : ''} à corriger.`,
        `Almost: ${n} word${n > 1 ? 's' : ''} to fix.`,
        `就差一点：还有 ${n} 个词要改。`,
      ),
    dictationScore: (ok: number, total: number) =>
      t(`${ok} mots justes sur ${total}`, `${ok} words right out of ${total}`, `${total} 个词中对了 ${ok} 个`),
    dictationLegend: t(
      'En vert ce qui est juste, en rouge ce qui diffère de la phrase entendue.',
      'Green is right, red differs from the sentence you heard.',
      '绿色表示正确，红色表示与听到的句子不同。',
    ),

    /* Atelier d’écriture */
    writingYourTurn: t('À vous d’écrire', 'Your turn to write', '轮到你来写'),
    writingPlaceholder: t('Écrivez votre réponse ici…', 'Write your answer here…', '在此写下你的答案……'),
    writingCheck: t('Je me relis', 'Check my work', '开始自查'),
    writingChecklist: t('Grille de relecture', 'Self-check list', '自查清单'),
    writingChecklistHint: t(
      'Cochez chaque point que votre texte respecte. Ce qui reste décoché est ce qu’il faut reprendre.',
      'Tick every point your text meets. What stays unticked is what to rework.',
      '逐条勾选你的文本已经做到的地方。没勾上的就是要修改的。',
    ),
    writingModel: t('Voir un texte modèle', 'Show a model answer', '查看范文'),
    writingModelLabel: t('Un texte possible', 'One possible text', '一种可能的写法'),
    writingCount: (n: number) =>
      t(`${n} mots écrits`, `${n} words written`, `已写 ${n} 个词`),
    writingDone: (ok: number, total: number) =>
      t(
        `${ok} critères sur ${total} respectés`,
        `${ok} of ${total} criteria met`,
        `${total} 条标准中达成 ${ok} 条`,
      ),
    writingAllDone: t('Tout y est', 'Everything is there', '全部达成'),
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
    'login-refused': t('Mot de passe refusé à la connexion', 'Password rejected at sign-in', '登录时密码被拒绝'),
  },
} as const;
