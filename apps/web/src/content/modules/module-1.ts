import type { Lesson } from '@lms/core';

const MODULE_ID = 'mod_volc_1';

export const module1Lessons: readonly Lesson[] = [
  {
    id: 'les_1_1',
    moduleId: MODULE_ID,
    kind: 'text',
    title: 'Un monde de feu : ce que recouvre le mot « volcan »',
    summary: 'Définitions, chiffres clés et idées reçues à corriger avant d’entrer dans la mécanique.',
    durationMin: 9,
    blocks: [
      {
        type: 'paragraph',
        text: "Un volcan n'est pas une montagne qui crache du feu : c'est l'extrémité visible d'un système de plomberie souterrain. Le mot désigne à la fois le conduit qui amène des roches fondues jusqu'à la surface et l'édifice construit par l'accumulation de ce qui en sort. Certains volcans n'ont pas de relief du tout — les fissures islandaises, les dorsales sous-marines — et pourtant ils produisent l'essentiel du magma terrestre.",
      },
      {
        type: 'paragraph',
        text: "Comprendre un volcan, c'est donc répondre à trois questions dans l'ordre : d'où vient la matière fondue, comment remonte-t-elle, et que se passe-t-il quand elle arrive en haut. Ce cours suit exactement cette progression. Les trois premiers modules construisent le modèle physique ; le dernier vous apprend à le lire sur des données réelles de surveillance.",
      },
      { type: 'heading', text: 'Le vocabulaire minimal' },
      {
        type: 'keyvalues',
        title: 'Cinq termes à ne plus confondre',
        entries: [
          { label: 'Magma', value: "Roche fondue tant qu'elle est sous terre. Elle contient des cristaux et des gaz dissous sous pression." },
          { label: 'Lave', value: "Le même matériau une fois sorti à l'air libre : il a perdu la majeure partie de ses gaz." },
          { label: 'Éruption', value: "Toute arrivée de magma, de gaz ou de fragments à la surface — y compris sans coulée spectaculaire." },
          { label: 'Téphra', value: "Terme générique pour tous les fragments projetés : cendres (< 2 mm), lapillis (2 à 64 mm), bombes (> 64 mm)." },
          { label: 'Édifice', value: "Le relief construit par les éruptions successives. Il peut être détruit par une seule d'entre elles." },
        ],
      },
      { type: 'heading', text: 'Combien de volcans, et où ?' },
      {
        type: 'list',
        items: [
          "Environ 1 350 volcans terrestres sont considérés comme actifs, c'est-à-dire ayant connu une éruption au cours des 10 000 dernières années.",
          "Entre 50 et 85 d'entre eux entrent en éruption chaque année ; à tout instant, une vingtaine sont en activité sur la planète.",
          "Près de 800 millions de personnes vivent à moins de 100 km d'un volcan actif — la proximité n'est pas un accident, elle est recherchée pour la fertilité des sols.",
          "Le volcanisme sous-marin, invisible depuis la surface, produit à lui seul environ trois quarts du magma émis chaque année.",
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Actif, endormi, éteint : une classification trompeuse',
        text: "Un volcan « endormi » depuis 500 ans peut se réveiller en quelques semaines ; le Pinatubo dormait depuis environ 500 ans avant 1991, et l'éruption fut la deuxième plus puissante du XXe siècle. Les volcanologues raisonnent en probabilité d'éruption sur une fenêtre de temps, pas en catégories fixes.",
      },
      { type: 'heading', text: 'Trois idées reçues à évacuer tout de suite' },
      {
        type: 'list',
        ordered: true,
        items: [
          "« La lave est le principal danger. » Faux : elle avance en général assez lentement pour qu'on s'en écarte. Ce sont les écoulements pyroclastiques, les lahars et les famines post-éruptives qui font l'immense majorité des victimes.",
          "« Les volcans sont imprévisibles. » Inexact : la plupart des éruptions sont précédées de signaux mesurables pendant des jours ou des semaines. Ce qui reste difficile, c'est de dater précisément et de dimensionner l'éruption.",
          "« Le volcanisme réchauffe le climat. » À l'inverse : une grande éruption explosive injecte du soufre dans la stratosphère et refroidit la planète pendant un à trois ans.",
        ],
      },
      {
        type: 'quote',
        text: "Les volcans ne tuent pas les gens : ce sont les décisions prises autour des volcans qui tuent les gens.",
        source: 'Adage des observatoires volcanologiques, repris après la catastrophe de Nevado del Ruiz (1985)',
      },
    ],
  },
  {
    id: 'les_1_2',
    moduleId: MODULE_ID,
    kind: 'text',
    title: 'Anatomie de la planète : d’où vient la chaleur',
    summary: 'Structure interne, gradient géothermique et raison physique pour laquelle le manteau ne fond presque jamais.',
    durationMin: 11,
    blocks: [
      {
        type: 'paragraph',
        text: "La Terre est une machine thermique qui évacue lentement la chaleur accumulée lors de sa formation et celle produite en continu par la désintégration des éléments radioactifs (uranium, thorium, potassium 40). Le flux de chaleur total atteint environ 47 térawatts. Le volcanisme n'est qu'une des soupapes de ce refroidissement — la plus visible, pas la plus efficace.",
      },
      { type: 'figure', figureId: 'terre-coupe', caption: 'Structure interne de la Terre. Tout le volcanisme se joue dans les 200 premiers kilomètres.' },
      { type: 'heading', text: 'Quatre enveloppes, deux logiques' },
      {
        type: 'paragraph',
        text: "On décrit classiquement la Terre par sa composition chimique : croûte, manteau, noyau externe liquide, graine solide. Mais pour comprendre le volcanisme, le découpage utile est mécanique. La lithosphère — croûte plus sommet du manteau, soit 70 à 150 km — est rigide et cassante : elle se fragmente en plaques. En dessous, l'asthénosphère est solide mais ductile : elle flue de quelques centimètres par an, comme un glacier de roche.",
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Le manteau n’est pas un océan de lave',
        text: "C'est l'erreur la plus répandue. Le manteau est solide à plus de 99 %. Le magma n'existe que dans des poches temporaires, produites par fusion partielle locale, et représente une fraction infime du volume. Sans mécanisme déclencheur précis, rien ne fond.",
      },
      { type: 'heading', text: 'Pourquoi une roche chaude reste solide' },
      {
        type: 'paragraph',
        text: "La température de fusion d'une roche augmente avec la pression. À 100 km de profondeur, la péridotite du manteau avoisine 1 300 °C, mais son point de fusion à cette pression dépasse 1 600 °C : elle reste solide. Faire fondre du manteau ne demande donc pas d'ajouter de la chaleur, mais de modifier l'une des trois variables du problème.",
      },
      {
        type: 'keyvalues',
        title: 'Les trois seuls moyens de fabriquer du magma',
        entries: [
          { label: 'Décompression', value: "Le manteau chaud remonte, la pression chute plus vite que la température : il franchit son solidus et fond. C'est le mécanisme des dorsales et des points chauds." },
          { label: 'Hydratation', value: "L'eau libérée par une plaque plongeante abaisse le point de fusion du manteau de 100 à 300 °C. C'est le mécanisme des zones de subduction." },
          { label: 'Apport de chaleur', value: "Un magma basaltique chaud sous-plaque une croûte continentale et la fait fondre à son tour. Mécanisme secondaire, mais responsable des magmas les plus explosifs." },
        ],
      },
      {
        type: 'paragraph',
        text: "Retenez cette hiérarchie : la décompression produit l'essentiel du volume, l'hydratation produit l'essentiel du danger. Le premier mécanisme donne des basaltes fluides et des éruptions spectaculaires mais peu meurtrières ; le second donne des magmas visqueux, chargés en gaz, à l'origine des catastrophes historiques.",
      },
      {
        type: 'callout',
        tone: 'success',
        title: 'À retenir',
        text: "Le volcanisme n'est pas alimenté par un réservoir central de lave, mais par des zones de fusion partielle créées ponctuellement là où la pression chute ou l'eau s'infiltre.",
      },
    ],
  },
  {
    id: 'les_1_3',
    moduleId: MODULE_ID,
    kind: 'text',
    title: 'Tectonique des plaques : la machine à volcans',
    summary: 'Les trois contextes géodynamiques, la ceinture de feu, et les exceptions instructives.',
    durationMin: 12,
    blocks: [
      {
        type: 'paragraph',
        text: "Si l'on reporte sur une carte les 1 350 volcans actifs, ils ne se répartissent pas au hasard : ils dessinent des lignes. Ces lignes sont les frontières des plaques lithosphériques. Une carte des volcans est, à quelques exceptions près, une carte de la tectonique.",
      },
      { type: 'figure', figureId: 'tectonique-limites', caption: 'Les trois types de limites de plaques. Seuls deux d’entre eux produisent du volcanisme significatif.' },
      { type: 'heading', text: 'Divergence : la fabrique de croûte océanique' },
      {
        type: 'paragraph',
        text: "Le long des 65 000 km de dorsales océaniques, deux plaques s'écartent de 2 à 18 cm par an. Le manteau remonte pour combler le vide, décompresse et fond à hauteur de 10 à 20 %. Le basalte produit se met en place sous 2 500 m d'eau en moyenne : la pression hydrostatique empêche les gaz de s'expanser, donc les éruptions y sont calmes. C'est le plus grand système volcanique de la planète, et presque personne ne le voit.",
      },
      {
        type: 'paragraph',
        text: "L'Islande est l'exception pédagogique parfaite : la dorsale médio-atlantique y émerge, dopée par un point chaud. On peut y observer à pied ce qui se passe normalement à 2 500 m sous l'eau — d'où les éruptions fissurales de Holuhraun (2014) ou de la péninsule de Reykjanes depuis 2021.",
      },
      { type: 'heading', text: 'Subduction : la fabrique de catastrophes' },
      {
        type: 'paragraph',
        text: "Quand une plaque océanique dense plonge sous une autre plaque, elle emporte de l'eau piégée dans ses minéraux hydratés. Vers 100 à 150 km de profondeur, la pression et la température libèrent cette eau, qui migre dans le manteau sus-jacent et abaisse son point de fusion. Le magma produit traverse ensuite une croûte épaisse, s'y arrête, cristallise partiellement, s'enrichit en silice et en gaz. Résultat : des magmas visqueux et explosifs, alignés en arcs volcaniques à 100-200 km de la fosse.",
      },
      {
        type: 'callout',
        tone: 'danger',
        title: 'La ceinture de feu du Pacifique',
        text: "Cet anneau de 40 000 km, des Andes à l'Indonésie en passant par le Japon et les Aléoutiennes, concentre environ 75 % des volcans émergés actifs et 90 % des séismes. C'est aussi là que vivent les populations les plus exposées : Java, à elle seule, compte 45 millions d'habitants dans les zones de danger volcanique.",
      },
      { type: 'heading', text: 'Points chauds : les volcans hors-la-loi' },
      { type: 'figure', figureId: 'contextes-volcaniques', caption: 'Trois contextes, trois mécanismes de fusion, trois signatures éruptives.' },
      {
        type: 'paragraph',
        text: "Hawaï se trouve à 3 500 km de toute limite de plaque. L'explication : un panache mantellique, colonne de matériel anormalement chaud qui remonte depuis les profondeurs du manteau et perce la plaque au-dessus. Comme le panache reste fixe pendant que la plaque défile, il grave un chapelet de volcans dont l'âge croît régulièrement avec la distance — la chaîne Hawaï-Empereur s'étend sur 6 000 km et 80 millions d'années. La Réunion, les Canaries et Yellowstone relèvent du même modèle.",
      },
      {
        type: 'table',
        caption: 'Signature des trois contextes volcaniques',
        headers: ['Contexte', 'Mécanisme de fusion', 'Magma dominant', 'Style éruptif', 'Exemple'],
        rows: [
          ['Dorsale', 'Décompression', 'Basalte', 'Effusif, sous-marin', 'Dorsale médio-atlantique'],
          ['Subduction', 'Hydratation du manteau', 'Andésite à rhyolite', 'Explosif, dangereux', 'Merapi, Mont St. Helens'],
          ['Point chaud océanique', 'Panache mantellique', 'Basalte', 'Effusif, fontaines de lave', 'Kīlauea, Piton de la Fournaise'],
          ['Point chaud continental', 'Panache + fusion crustale', 'Rhyolite', 'Caldeiras géantes', 'Yellowstone'],
          ['Rift continental', 'Décompression + amincissement', 'Basalte à phonolite', 'Variable', 'Nyiragongo, rift est-africain'],
        ],
      },
      {
        type: 'callout',
        tone: 'success',
        title: 'La règle opérationnelle',
        text: "Dites-moi dans quel contexte se trouve un volcan, je vous dirai comment il éruptera. C'est le raisonnement de base de tout volcanologue face à un édifice inconnu — et la base du module suivant.",
      },
    ],
  },
  {
    id: 'les_1_q',
    moduleId: MODULE_ID,
    kind: 'quiz',
    title: 'Quiz — Origines du volcanisme',
    summary: '8 questions sur la structure interne, la fusion partielle et les contextes tectoniques.',
    durationMin: 8,
    quizId: 'qz_volc_1',
  },
];
