import type { Lesson } from '@lms/core';

const MODULE_ID = 'mod_volc_4';

export const module4Lessons: readonly Lesson[] = [
  {
    id: 'les_4_1',
    moduleId: MODULE_ID,
    kind: 'text',
    title: 'Surveiller un volcan : quatre familles de signaux',
    summary: 'Sismologie, déformation, géochimie, télédétection — et comment les croiser.',
    durationMin: 12,
    blocks: [
      {
        type: 'paragraph',
        text: "Un volcan qui se réveille prévient. Le magma qui monte fracture la roche, gonfle l'édifice, dégaze et chauffe le sol. Quatre familles d'instruments écoutent ces manifestations, et c'est leur convergence — jamais un signal isolé — qui fonde une décision d'alerte.",
      },
      { type: 'figure', figureId: 'surveillance-reseau', caption: 'Réseau type d’un observatoire : du sismomètre enterré au satellite radar.' },
      { type: 'heading', text: '1. Sismologie : entendre la roche casser' },
      {
        type: 'paragraph',
        text: "C'est l'outil le plus ancien et le plus discriminant. On distingue les séismes volcano-tectoniques, à haute fréquence, qui traduisent la fracturation fragile ; les séismes à longue période, provoqués par la résonance des fluides dans les conduits ; et le trémor, vibration continue signalant un mouvement soutenu de magma ou de gaz. Le passage des VT au trémor est le signal classique d'une éruption imminente.",
      },
      { type: 'heading', text: '2. Déformation : voir le sol respirer' },
      {
        type: 'paragraph',
        text: "L'accumulation de magma gonfle l'édifice de quelques millimètres à plusieurs mètres. Les stations GNSS mesurent ce déplacement en continu au millimètre près ; les inclinomètres détectent des basculements de l'ordre du microradian ; l'interférométrie radar satellitaire (InSAR) cartographie la déformation sur toute la surface, y compris sur des volcans sans instrument au sol. C'est aujourd'hui la seule méthode qui permette de surveiller des centaines de volcans isolés.",
      },
      { type: 'heading', text: '3. Géochimie : lire la composition des gaz' },
      {
        type: 'paragraph',
        text: "Le rapport CO₂/SO₂ est un thermomètre de profondeur : le CO₂, peu soluble, s'échappe en premier depuis les zones profondes, tandis que le SO₂ marque l'arrivée de magma frais à faible profondeur. Une hausse brutale du flux de SO₂ — mesuré par spectrométrie au sol ou depuis un satellite — indique qu'un magma dégazant est proche de la surface.",
      },
      { type: 'heading', text: '4. Télédétection et observation directe' },
      {
        type: 'list',
        items: [
          "Imagerie thermique : détection des anomalies de température au sol et suivi de la croissance d'un dôme.",
          "Caméras et webcams : mesure de la hauteur du panache, détection des explosions, documentation continue.",
          "Infrasons : les réseaux de microbarographes détectent les explosions à des centaines de kilomètres, y compris de nuit ou sous les nuages.",
          "Hydrologie : température, pH et niveau des lacs de cratère, précurseurs des éruptions phréatiques.",
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Un seul signal ne suffit jamais',
        text: "Une crise sismique peut s'arrêter sans éruption — c'est même le cas le plus fréquent. Seule la convergence de plusieurs familles de signaux (sismicité migrante + inflation + hausse du SO₂) justifie de passer un niveau d'alerte. C'est ce qu'on appelle l'approche multiparamètres.",
      },
      {
        type: 'keyvalues',
        title: 'Ordre de grandeur des précurseurs',
        entries: [
          { label: 'Semaines à mois avant', value: 'Sismicité profonde, inflation lente, hausse du CO₂.' },
          { label: 'Jours avant', value: 'Migration des séismes vers la surface, accélération de la déformation.' },
          { label: 'Heures avant', value: 'Trémor continu, flux de SO₂ en forte hausse, anomalies thermiques.' },
          { label: 'Après le début', value: 'Suivi de la colonne, cartographie des dépôts, veille lahars pendant des années.' },
        ],
      },
    ],
  },
  {
    id: 'les_4_2',
    moduleId: MODULE_ID,
    kind: 'text',
    title: 'De la donnée à la décision : alerte, évacuation, crise',
    summary: 'Niveaux d’alerte, cartes d’aléas, et les facteurs humains qui font échouer les bons diagnostics.',
    durationMin: 12,
    blocks: [
      {
        type: 'paragraph',
        text: "Une prévision juste ne sauve personne si elle ne se transforme pas en décision. La volcanologie appliquée est autant une affaire de sociologie et d'organisation que de géophysique — les catastrophes du XXe siècle le démontrent avec une régularité troublante.",
      },
      { type: 'figure', figureId: 'niveaux-alerte', caption: 'Échelle d’alerte type. Chaque niveau est associé à des mesures prédéfinies, décidées à froid.' },
      { type: 'heading', text: 'La carte d’aléas, document fondateur' },
      {
        type: 'paragraph',
        text: "Avant tout instrument, un observatoire cartographie les dépôts des éruptions passées : jusqu'où sont allées les nuées, quelles vallées ont canalisé les lahars, quelle épaisseur de cendre est tombée et où. Le passé récent d'un volcan est le meilleur prédicteur de son futur proche. Cette carte, croisée avec l'occupation du sol, définit les zones à évacuer et les itinéraires — bien avant la crise.",
      },
      { type: 'heading', text: 'Décider sous incertitude' },
      {
        type: 'paragraph',
        text: "Le volcanologue ne dit jamais « il y aura une éruption mardi ». Il énonce des probabilités : « 60 % de chances d'une éruption VEI ≥ 3 dans les deux semaines ». Les observatoires formalisent ce raisonnement avec des arbres d'événements probabilistes qui rendent explicites les hypothèses et permettent de les réviser à chaque nouvelle donnée.",
      },
      {
        type: 'callout',
        tone: 'danger',
        title: 'Le coût asymétrique de l’erreur',
        text: "Évacuer pour rien coûte de l'argent, de la crédibilité et provoque des pillages. Ne pas évacuer coûte des vies. Cette asymétrie doit être assumée politiquement à froid, pas arbitrée dans l'urgence : c'est précisément ce qui a manqué à Armero en 1985.",
      },
      { type: 'heading', text: 'Les cinq facteurs d’échec récurrents' },
      {
        type: 'list',
        ordered: true,
        items: [
          "Fatigue d'alerte : des alertes répétées sans éruption érodent la crédibilité et la population cesse de partir.",
          "Pression économique et politique : tourisme, élections, récoltes, coût des relogements. À Saint-Pierre en 1902, une élection approchait.",
          "Chaîne de communication trop longue : à Armero, l'information a existé mais n'a pas atteint le maire à temps ni sous une forme actionnable.",
          "Message inadapté : une probabilité mal expliquée est entendue comme une hésitation. Le Pinatubo a réussi notamment grâce à une vidéo montrant concrètement ce qu'est une nuée ardente.",
          "Attachement au lieu : bétail, biens, refus de laisser une maison. L'évacuation doit prévoir l'hébergement, la sécurité des biens et une date de retour.",
        ],
      },
      { type: 'heading', text: 'Ce qui fonctionne' },
      {
        type: 'list',
        items: [
          "Une échelle d'alerte à quatre ou cinq niveaux, avec des mesures pré-décidées et connues de tous.",
          "Un porte-parole unique et scientifique, distinct de l'autorité politique qui décide.",
          "Des exercices d'évacuation réguliers, avec les écoles, en période calme.",
          "Une surveillance maintenue après l'éruption : les lahars tuent souvent des années plus tard.",
          "Des cartes d'aléas opposables, intégrées au droit de l'urbanisme, pour empêcher la reconstruction en zone rouge.",
        ],
      },
    ],
  },
  {
    id: 'les_4_3',
    moduleId: MODULE_ID,
    kind: 'text',
    title: 'Vivre avec les volcans : bénéfices et climat',
    summary: 'Sols, géothermie, ressources, et l’effet réel du volcanisme sur le climat global.',
    durationMin: 10,
    blocks: [
      {
        type: 'paragraph',
        text: "Si 800 millions de personnes vivent près d'un volcan, ce n'est pas par inconscience : c'est parce que le volcanisme est, sur le temps long, une des activités les plus fertilisantes de la planète. Terminer ce cours en ne voyant que l'aléa reviendrait à passer à côté de la moitié du sujet.",
      },
      { type: 'heading', text: 'Des sols exceptionnels' },
      {
        type: 'paragraph',
        text: "Les cendres altérées donnent des andosols : structure aérée, forte capacité de rétention d'eau, richesse en phosphore, potassium et oligo-éléments. Java nourrit plus de 145 millions d'habitants sur 132 000 km², avec jusqu'à trois récoltes de riz par an. Les vignobles de Santorin, du Vésuve ou de Lanzarote exploitent la même chimie.",
      },
      { type: 'heading', text: 'Énergie géothermique' },
      {
        type: 'paragraph',
        text: "Le gradient thermique élevé des zones volcaniques permet de produire électricité et chaleur en continu, sans intermittence. L'Islande couvre environ 66 % de son énergie primaire par la géothermie et chauffe 90 % de ses logements ainsi. Le Kenya tire plus de 40 % de son électricité des champs géothermiques du rift, et les Philippines figurent parmi les premiers producteurs mondiaux.",
      },
      {
        type: 'keyvalues',
        title: 'Ce que les volcans fournissent',
        entries: [
          { label: 'Ressources minérales', value: 'Cuivre porphyrique, or épithermal, soufre, pouzzolane, perlite.' },
          { label: 'Matériaux', value: 'Basalte concassé, pierre ponce, tuf de construction, laine de roche.' },
          { label: 'Tourisme', value: 'Islande, Hawaï, Etna, Bali : ressource économique majeure et fragile.' },
          { label: 'Atmosphère et océans', value: 'Le dégazage volcanique a fourni l’essentiel de l’eau et du CO₂ primitifs.' },
          { label: 'Régulation du carbone', value: 'Couplé à l’altération des silicates, il stabilise le climat sur des millions d’années.' },
        ],
      },
      { type: 'heading', text: 'Volcans et climat : rétablir les ordres de grandeur' },
      {
        type: 'paragraph',
        text: "Une éruption explosive majeure injecte du SO₂ dans la stratosphère, où il forme des aérosols de sulfate qui réfléchissent le rayonnement solaire. L'effet est un refroidissement de 0,2 à 0,7 °C pendant un à trois ans — mesuré après le Pinatubo comme après le Tambora. À l'inverse, sur le CO₂, l'ordre de grandeur est sans appel : le volcanisme mondial en émet environ 0,3 à 0,4 gigatonne par an, contre plus de 37 gigatonnes pour les activités humaines, soit un rapport de l'ordre de 1 à 100.",
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'À retenir pour le débat public',
        text: "Le volcanisme refroidit à court terme et pèse marginalement sur le CO₂ atmosphérique actuel. Les grandes provinces basaltiques du passé, elles, ont bien modifié le climat — mais sur un million d'années et avec des débits sans commune mesure avec le volcanisme contemporain.",
      },
      {
        type: 'quote',
        text: "Le volcan n'est ni un ennemi ni un allié : c'est un voisin très ancien dont il faut apprendre le langage.",
        source: 'Conclusion du parcours — Magmatica',
      },
      {
        type: 'callout',
        tone: 'success',
        title: 'Vous arrivez au bout du parcours',
        text: "Il ne reste qu'à valider l'examen final : 12 questions couvrant les quatre modules, 80 % de bonnes réponses exigées, deux tentatives.",
      },
    ],
  },
  {
    id: 'les_4_q',
    moduleId: MODULE_ID,
    kind: 'quiz',
    title: 'Examen final certifiant',
    summary: '12 questions transversales. Seuil de réussite : 80 %. Deux tentatives autorisées.',
    durationMin: 15,
    quizId: 'qz_volc_final',
  },
];
