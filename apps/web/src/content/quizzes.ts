import type { Quiz } from '@lms/core';

/**
 * Quiz notes du parcours « Les volcans ».
 * Trois quiz de module (seuil 70 %, credit partiel) et un examen final
 * certifiant (seuil 80 %, sans credit partiel, deux tentatives).
 */

const quizModule1: Quiz = {
  id: 'qz_volc_1',
  title: 'Quiz — Origines du volcanisme',
  description: 'Structure interne, fusion partielle et contextes tectoniques. Module 1.',
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'q1_1',
      kind: 'single',
      prompt: 'Dans quel état se trouve l’essentiel du manteau terrestre ?',
      points: 1,
      explanation:
        'Le manteau est solide à plus de 99 %. Il est ductile — il flue de quelques centimètres par an — mais ce n’est pas un océan de lave. Le magma n’existe que dans des poches temporaires de fusion partielle.',
      answers: [
        { id: 'a', text: 'Solide, mais capable de fluer lentement', correct: true },
        { id: 'b', text: 'Entièrement liquide, comme un océan de lave', correct: false },
        { id: 'c', text: 'Gazeux au-delà de 100 km de profondeur', correct: false },
        { id: 'd', text: 'Alternativement solide et liquide selon les saisons', correct: false },
      ],
    },
    {
      id: 'q1_2',
      kind: 'multiple',
      prompt: 'Quels mécanismes peuvent produire du magma à partir d’un manteau solide ?',
      points: 2,
      explanation:
        'Trois mécanismes seulement : la décompression (dorsales, points chauds), l’hydratation par l’eau libérée d’une plaque plongeante (subduction) et l’apport de chaleur par sous-placage basaltique. Le refroidissement fait exactement l’inverse.',
      answers: [
        { id: 'a', text: 'La décompression liée à la remontée du manteau', correct: true },
        { id: 'b', text: 'L’ajout d’eau qui abaisse le point de fusion', correct: true },
        { id: 'c', text: 'L’apport de chaleur par un magma plus chaud sous-jacent', correct: true },
        { id: 'd', text: 'Le refroidissement rapide de la lithosphère', correct: false },
      ],
    },
    {
      id: 'q1_3',
      kind: 'single',
      prompt: 'Pourquoi le volcanisme de subduction est-il particulièrement explosif ?',
      points: 1,
      explanation:
        'L’eau libérée par la plaque plongeante génère des magmas hydratés qui, en traversant une croûte épaisse, s’enrichissent en silice. Un magma riche en silice est visqueux : il retient ses gaz jusqu’à la rupture.',
      answers: [
        { id: 'a', text: 'Parce que les magmas y sont riches en silice et en gaz dissous', correct: true },
        { id: 'b', text: 'Parce que la température du magma y est la plus élevée', correct: false },
        { id: 'c', text: 'Parce que les plaques s’y écartent très rapidement', correct: false },
        { id: 'd', text: 'Parce que la croûte océanique y est très mince', correct: false },
      ],
    },
    {
      id: 'q1_4',
      kind: 'boolean',
      prompt: 'Hawaï se situe à la limite entre deux plaques tectoniques.',
      points: 1,
      explanation:
        'Faux. Hawaï se trouve à environ 3 500 km de toute limite de plaque : c’est un volcanisme de point chaud, alimenté par un panache mantellique fixe que la plaque Pacifique survole.',
      answers: [
        { id: 'v', text: 'Vrai', correct: false },
        { id: 'f', text: 'Faux', correct: true },
      ],
    },
    {
      id: 'q1_5',
      kind: 'single',
      prompt: 'Quelle proportion du magma terrestre est émise par les dorsales océaniques ?',
      points: 1,
      explanation:
        'Le volcanisme sous-marin, dorsales en tête, produit environ trois quarts du magma émis chaque année. Invisible depuis la surface, c’est pourtant le principal système volcanique de la planète.',
      answers: [
        { id: 'a', text: 'Environ trois quarts', correct: true },
        { id: 'b', text: 'Environ un quart', correct: false },
        { id: 'c', text: 'Moins de 5 %', correct: false },
        { id: 'd', text: 'La totalité', correct: false },
      ],
    },
    {
      id: 'q1_6',
      kind: 'multiple',
      prompt: 'Quelles affirmations sur la ceinture de feu du Pacifique sont exactes ?',
      points: 2,
      explanation:
        'La ceinture de feu concentre environ 75 % des volcans émergés actifs et 90 % des séismes, sur environ 40 000 km de limites majoritairement en subduction. Elle n’est pas une dorsale et n’est pas inhabitée — Java en est le contre-exemple le plus peuplé.',
      answers: [
        { id: 'a', text: 'Elle concentre environ 75 % des volcans émergés actifs', correct: true },
        { id: 'b', text: 'Elle est dominée par des zones de subduction', correct: true },
        { id: 'c', text: 'Elle correspond à une dorsale océanique continue', correct: false },
        { id: 'd', text: 'Elle regroupe environ 90 % des séismes de la planète', correct: true },
      ],
    },
    {
      id: 'q1_7',
      kind: 'single',
      prompt: 'Qu’est-ce qui distingue la lithosphère de l’asthénosphère ?',
      points: 1,
      explanation:
        'Le découpage est mécanique, pas chimique : la lithosphère (croûte + sommet du manteau) est rigide et cassante, l’asthénosphère est solide mais ductile et flue lentement.',
      answers: [
        { id: 'a', text: 'Leur comportement mécanique : rigide contre ductile', correct: true },
        { id: 'b', text: 'Leur composition chimique, totalement différente', correct: false },
        { id: 'c', text: 'La présence de fer uniquement dans l’asthénosphère', correct: false },
        { id: 'd', text: 'Leur état : la lithosphère est liquide', correct: false },
      ],
    },
    {
      id: 'q1_8',
      kind: 'boolean',
      prompt: 'Un volcan « endormi » depuis plusieurs siècles peut se réveiller en quelques semaines.',
      points: 1,
      explanation:
        'Vrai. Le Pinatubo dormait depuis environ 500 ans avant l’éruption VEI 6 de juin 1991, précédée de seulement deux mois de signaux précurseurs.',
      answers: [
        { id: 'v', text: 'Vrai', correct: true },
        { id: 'f', text: 'Faux', correct: false },
      ],
    },
  ],
};

const quizModule2: Quiz = {
  id: 'qz_volc_2',
  title: 'Quiz — Magmas et édifices',
  description: 'Viscosité, gaz, plomberie magmatique et morphologie. Module 2.',
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'q2_1',
      kind: 'single',
      prompt: 'Quel paramètre chimique contrôle principalement la viscosité d’un magma ?',
      points: 1,
      explanation:
        'La teneur en silice. Les tétraèdres SiO₄ se polymérisent en chaînes qui freinent l’écoulement : entre un basalte et une rhyolite, la viscosité peut varier d’un facteur un million.',
      answers: [
        { id: 'a', text: 'La teneur en silice', correct: true },
        { id: 'b', text: 'La teneur en fer', correct: false },
        { id: 'c', text: 'La teneur en calcium', correct: false },
        { id: 'd', text: 'La densité du magma', correct: false },
      ],
    },
    {
      id: 'q2_2',
      kind: 'single',
      prompt: 'Quel gaz domine très largement les émissions volcaniques ?',
      points: 1,
      explanation:
        'La vapeur d’eau représente 60 à 90 % des gaz émis, devant le CO₂ et le SO₂. C’est aussi elle qui, en se vésiculant, fournit l’essentiel de l’énergie d’une explosion.',
      answers: [
        { id: 'a', text: 'La vapeur d’eau', correct: true },
        { id: 'b', text: 'Le dioxyde de soufre', correct: false },
        { id: 'c', text: 'Le dioxyde de carbone', correct: false },
        { id: 'd', text: 'Le méthane', correct: false },
      ],
    },
    {
      id: 'q2_3',
      kind: 'multiple',
      prompt: 'Quelles conditions favorisent une éruption explosive ?',
      points: 2,
      explanation:
        'Magma visqueux, riche en gaz dissous, et éventuellement interaction avec de l’eau externe. Une température élevée diminue au contraire la viscosité et favorise l’effusion.',
      answers: [
        { id: 'a', text: 'Un magma très visqueux', correct: true },
        { id: 'b', text: 'Une forte teneur en gaz dissous', correct: true },
        { id: 'c', text: 'La rencontre avec une nappe phréatique ou un lac', correct: true },
        { id: 'd', text: 'Une température de magma très élevée', correct: false },
      ],
    },
    {
      id: 'q2_4',
      kind: 'single',
      prompt: 'À quelle profondeur se situe typiquement le réservoir magmatique d’un volcan d’arc ?',
      points: 1,
      explanation:
        'Entre 3 et 10 km pour la plupart des volcans d’arc. Le réservoir n’est pas une caverne de liquide mais une bouillie cristalline contenant 10 à 50 % de liquide.',
      answers: [
        { id: 'a', text: 'Entre 3 et 10 km', correct: true },
        { id: 'b', text: 'Entre 50 et 100 km', correct: false },
        { id: 'c', text: 'À moins de 200 m sous le cratère', correct: false },
        { id: 'd', text: 'Dans le noyau externe', correct: false },
      ],
    },
    {
      id: 'q2_5',
      kind: 'single',
      prompt: 'Qu’est-ce qu’un dyke ?',
      points: 1,
      explanation:
        'Une intrusion magmatique qui recoupe les couches encaissantes. Sa propagation produit une migration de micro-séismes, signal majeur pour anticiper le point de sortie du magma.',
      answers: [
        { id: 'a', text: 'Une intrusion de magma qui recoupe les couches de roche', correct: true },
        { id: 'b', text: 'Une intrusion qui s’insinue entre les couches', correct: false },
        { id: 'c', text: 'Un cratère secondaire sur le flanc', correct: false },
        { id: 'd', text: 'Une coulée de boue volcanique', correct: false },
      ],
    },
    {
      id: 'q2_6',
      kind: 'single',
      prompt: 'Quelle morphologie correspond à des pentes de 5 à 10° et un volume pouvant dépasser 50 000 km³ ?',
      points: 1,
      explanation:
        'Le volcan bouclier, construit par empilement de coulées basaltiques fluides. Le Mauna Loa s’élève de 9 000 m depuis le plancher océanique pour environ 75 000 km³.',
      answers: [
        { id: 'a', text: 'Le volcan bouclier', correct: true },
        { id: 'b', text: 'Le stratovolcan', correct: false },
        { id: 'c', text: 'Le cône de scories', correct: false },
        { id: 'd', text: 'Le maar', correct: false },
      ],
    },
    {
      id: 'q2_7',
      kind: 'boolean',
      prompt: 'Un cône de scories peut naître, croître et s’éteindre au cours d’une seule éruption.',
      points: 1,
      explanation:
        'Vrai. Le Paricutín est apparu dans un champ mexicain en février 1943, a atteint 336 m en un an et s’est définitivement éteint en 1952.',
      answers: [
        { id: 'v', text: 'Vrai', correct: true },
        { id: 'f', text: 'Faux', correct: false },
      ],
    },
    {
      id: 'q2_8',
      kind: 'single',
      prompt: 'Pourquoi l’interaction entre magma et eau externe est-elle si violente ?',
      points: 1,
      explanation:
        'En se vaporisant instantanément, l’eau multiplie son volume par environ 1 700. C’est ce mécanisme phréatomagmatique qui explique la puissance exceptionnelle du Hunga Tonga en janvier 2022.',
      answers: [
        { id: 'a', text: 'L’eau vaporisée multiplie son volume par environ 1 700', correct: true },
        { id: 'b', text: 'L’eau réagit chimiquement avec la silice', correct: false },
        { id: 'c', text: 'L’eau augmente la température du magma', correct: false },
        { id: 'd', text: 'L’eau dissout la croûte et ouvre le conduit', correct: false },
      ],
    },
  ],
};

const quizModule3: Quiz = {
  id: 'qz_volc_3',
  title: 'Quiz — Éruptions et aléas',
  description: 'Styles éruptifs, échelle VEI, létalité des aléas et cas historiques. Module 3.',
  passingScore: 70,
  maxAttempts: 3,
  partialCredit: true,
  questions: [
    {
      id: 'q3_1',
      kind: 'single',
      prompt: 'Que signifie un passage de VEI 4 à VEI 5 ?',
      points: 1,
      explanation:
        'L’échelle est logarithmique : chaque échelon multiplie par dix le volume de matériaux émis. Un VEI 5 n’est pas un peu plus fort qu’un VEI 4, il est dix fois plus volumineux.',
      answers: [
        { id: 'a', text: 'Le volume émis est multiplié par 10', correct: true },
        { id: 'b', text: 'Le volume émis est multiplié par 2', correct: false },
        { id: 'c', text: 'Le nombre de victimes est multiplié par 10', correct: false },
        { id: 'd', text: 'La durée de l’éruption double', correct: false },
      ],
    },
    {
      id: 'q3_2',
      kind: 'single',
      prompt: 'Quel aléa volcanique a causé le plus grand nombre de morts en une seule occurrence au XXe siècle ?',
      points: 1,
      explanation:
        'La nuée ardente de la Montagne Pelée, le 8 mai 1902, a détruit Saint-Pierre en moins de deux minutes : environ 28 000 morts, deux survivants.',
      answers: [
        { id: 'a', text: 'Un écoulement pyroclastique', correct: true },
        { id: 'b', text: 'Une coulée de lave', correct: false },
        { id: 'c', text: 'Une retombée de cendres', correct: false },
        { id: 'd', text: 'Une pluie de bombes volcaniques', correct: false },
      ],
    },
    {
      id: 'q3_3',
      kind: 'multiple',
      prompt: 'Quelles affirmations décrivent correctement un lahar ?',
      points: 2,
      explanation:
        'Un lahar est une coulée de boue volcanique de densité proche du béton frais, qui suit les vallées à 20-60 km/h et peut survenir longtemps après l’éruption. Il n’est pas incandescent : ce n’est pas un écoulement pyroclastique.',
      answers: [
        { id: 'a', text: 'C’est une coulée de boue chargée de matériaux volcaniques', correct: true },
        { id: 'b', text: 'Il suit les vallées et peut parcourir des dizaines de kilomètres', correct: true },
        { id: 'c', text: 'Il peut se déclencher des mois ou des années après l’éruption', correct: true },
        { id: 'd', text: 'Il se déplace à plus de 500 km/h à 700 °C', correct: false },
      ],
    },
    {
      id: 'q3_4',
      kind: 'single',
      prompt: 'Quelle éruption a provoqué « l’année sans été » de 1816 ?',
      points: 1,
      explanation:
        'Le Tambora (Indonésie, avril 1815, VEI 7) a injecté environ 60 Mt de SO₂ dans la stratosphère, refroidissant le globe de 0,4 à 0,7 °C et provoquant gelées estivales et famines dans l’hémisphère nord.',
      answers: [
        { id: 'a', text: 'Le Tambora, en 1815', correct: true },
        { id: 'b', text: 'Le Krakatoa, en 1883', correct: false },
        { id: 'c', text: 'Le Vésuve, en 79', correct: false },
        { id: 'd', text: 'Le Pinatubo, en 1991', correct: false },
      ],
    },
    {
      id: 'q3_5',
      kind: 'boolean',
      prompt: 'La coulée de lave est la première cause de mortalité volcanique.',
      points: 1,
      explanation:
        'Faux. La lave représente moins de 1 % des victimes : elle avance en général assez lentement pour qu’on s’en écarte. Les écoulements pyroclastiques, les lahars, les tsunamis et les famines dominent les bilans.',
      answers: [
        { id: 'v', text: 'Vrai', correct: false },
        { id: 'f', text: 'Faux', correct: true },
      ],
    },
    {
      id: 'q3_6',
      kind: 'single',
      prompt: 'Pourquoi l’éruption du Pinatubo en 1991 est-elle citée comme une réussite ?',
      points: 1,
      explanation:
        'Malgré un VEI 6, l’évacuation préventive de 60 000 personnes, appuyée sur une échelle d’alerte claire et une pédagogie de terrain, a limité le bilan à environ 850 morts au lieu de dizaines de milliers attendus.',
      answers: [
        { id: 'a', text: 'L’évacuation préventive a limité le bilan humain malgré un VEI 6', correct: true },
        { id: 'b', text: 'L’éruption avait été datée au jour près six mois à l’avance', correct: false },
        { id: 'c', text: 'Aucune retombée de cendres n’a atteint les zones habitées', correct: false },
        { id: 'd', text: 'L’éruption a finalement été annulée', correct: false },
      ],
    },
    {
      id: 'q3_7',
      kind: 'single',
      prompt: 'Qu’est-ce qui rend une éruption plinienne reconnaissable ?',
      points: 1,
      explanation:
        'Une colonne éruptive soutenue de 20 à 45 km de hauteur, alimentée pendant plusieurs heures, dont l’effondrement engendre ensuite des écoulements pyroclastiques. Pline le Jeune l’a décrite en 79 depuis Misène.',
      answers: [
        { id: 'a', text: 'Une colonne soutenue de 20 à 45 km pendant plusieurs heures', correct: true },
        { id: 'b', text: 'Des fontaines de lave basaltique de 300 m', correct: false },
        { id: 'c', text: 'Des explosions rythmées toutes les minutes', correct: false },
        { id: 'd', text: 'Une coulée continue sans projection', correct: false },
      ],
    },
    {
      id: 'q3_8',
      kind: 'multiple',
      prompt: 'Quels effets une retombée de cendres de 10 cm peut-elle provoquer ?',
      points: 2,
      explanation:
        'Dix centimètres de cendre humide représentent environ 100 kg/m² : les toitures s’effondrent. S’y ajoutent la destruction des récoltes, les court-circuits électriques et l’abrasion des moteurs, dont les réacteurs d’avion. En revanche la cendre ne fertilise les sols qu’après des années d’altération.',
      answers: [
        { id: 'a', text: 'L’effondrement de toitures sous la surcharge', correct: true },
        { id: 'b', text: 'La destruction des récoltes', correct: true },
        { id: 'c', text: 'La fermeture de l’espace aérien', correct: true },
        { id: 'd', text: 'Une fertilisation immédiate des sols en quelques jours', correct: false },
      ],
    },
    {
      id: 'q3_9',
      kind: 'single',
      prompt: 'Qu’a révélé la catastrophe du Nevado del Ruiz en 1985 ?',
      points: 1,
      explanation:
        'Une éruption modeste (VEI 3) a fait fondre une calotte glaciaire ; les lahars ont détruit Armero à 48 km, faisant 23 000 morts. Les cartes d’aléas désignaient précisément cette zone : c’est la chaîne de décision, non la science, qui a échoué.',
      answers: [
        { id: 'a', text: 'Qu’une carte d’aléas sans chaîne de décision ne sauve personne', correct: true },
        { id: 'b', text: 'Que les lahars sont impossibles à cartographier', correct: false },
        { id: 'c', text: 'Que seuls les VEI ≥ 5 sont dangereux', correct: false },
        { id: 'd', text: 'Que la surveillance sismique est inutile', correct: false },
      ],
    },
  ],
};

const quizFinal: Quiz = {
  id: 'qz_volc_final',
  title: 'Examen final certifiant',
  description:
    '12 questions transversales sur l’ensemble du parcours. Seuil de réussite : 80 %. Deux tentatives autorisées, sans crédit partiel.',
  passingScore: 80,
  maxAttempts: 2,
  partialCredit: false,
  questions: [
    {
      id: 'qf_1',
      kind: 'single',
      prompt: 'Quel mécanisme produit le plus grand volume de magma sur Terre ?',
      points: 1,
      explanation: 'La fusion par décompression sous les dorsales océaniques, qui alimente environ trois quarts du magma émis chaque année.',
      answers: [
        { id: 'a', text: 'La fusion par décompression sous les dorsales', correct: true },
        { id: 'b', text: 'La fusion par hydratation en subduction', correct: false },
        { id: 'c', text: 'La fusion de la croûte continentale', correct: false },
        { id: 'd', text: 'La fusion du noyau externe', correct: false },
      ],
    },
    {
      id: 'qf_2',
      kind: 'multiple',
      prompt: 'Quels signaux constituent des précurseurs classiques d’une éruption ?',
      points: 2,
      explanation:
        'Sismicité migrant vers la surface, inflation de l’édifice mesurée au GNSS ou par InSAR, et hausse du flux de SO₂ signalant un magma dégazant proche de la surface. La baisse de température des fumerolles n’est pas un précurseur d’éruption imminente.',
      answers: [
        { id: 'a', text: 'Une sismicité qui migre vers la surface', correct: true },
        { id: 'b', text: 'Une inflation mesurée de l’édifice', correct: true },
        { id: 'c', text: 'Une hausse du flux de SO₂', correct: true },
        { id: 'd', text: 'Une baisse durable de la température des fumerolles', correct: false },
      ],
    },
    {
      id: 'qf_3',
      kind: 'single',
      prompt: 'Quel type de magma alimente un stratovolcan d’arc typique ?',
      points: 1,
      explanation: 'Andésite à dacite : silice intermédiaire à élevée, viscosité forte, alternance de coulées et de retombées — d’où le profil composite à 25-35°.',
      answers: [
        { id: 'a', text: 'Andésite à dacite', correct: true },
        { id: 'b', text: 'Basalte très fluide', correct: false },
        { id: 'c', text: 'Péridotite non fondue', correct: false },
        { id: 'd', text: 'Carbonatite', correct: false },
      ],
    },
    {
      id: 'qf_4',
      kind: 'boolean',
      prompt: 'Le VEI mesure la dangerosité d’une éruption pour les populations.',
      points: 1,
      explanation:
        'Faux. Le VEI mesure l’explosivité (volume de téphras et hauteur de colonne). Le Laki, VEI 4 essentiellement effusif, a été bien plus meurtrier que bien des VEI 6 survenus loin de toute population.',
      answers: [
        { id: 'v', text: 'Vrai', correct: false },
        { id: 'f', text: 'Faux', correct: true },
      ],
    },
    {
      id: 'qf_5',
      kind: 'single',
      prompt: 'Quelle est la seule protection efficace contre un écoulement pyroclastique ?',
      points: 1,
      explanation: 'La distance, obtenue par évacuation préventive. Aucun bâtiment civil ne résiste à un mélange à 200-700 °C circulant à plusieurs centaines de km/h.',
      answers: [
        { id: 'a', text: 'L’évacuation préventive de la zone d’aléa', correct: true },
        { id: 'b', text: 'Un abri en béton armé', correct: false },
        { id: 'c', text: 'Une digue de déviation', correct: false },
        { id: 'd', text: 'Un masque filtrant', correct: false },
      ],
    },
    {
      id: 'qf_6',
      kind: 'single',
      prompt: 'Que traduit un trémor volcanique continu ?',
      points: 1,
      explanation: 'Un mouvement soutenu de fluides — magma ou gaz — dans les conduits. Le passage de séismes volcano-tectoniques discrets à un trémor continu annonce souvent une éruption imminente.',
      answers: [
        { id: 'a', text: 'Un mouvement soutenu de magma ou de gaz dans les conduits', correct: true },
        { id: 'b', text: 'Le refroidissement définitif du réservoir', correct: false },
        { id: 'c', text: 'Un séisme tectonique lointain', correct: false },
        { id: 'd', text: 'La fin de la crise éruptive', correct: false },
      ],
    },
    {
      id: 'qf_7',
      kind: 'multiple',
      prompt: 'Quels facteurs humains ont historiquement transformé une crise volcanique en catastrophe ?',
      points: 2,
      explanation:
        'Pression politique et économique (Saint-Pierre 1902), chaîne de communication défaillante (Armero 1985) et fatigue d’alerte figurent parmi les causes récurrentes. Un excès d’exercices d’évacuation n’a jamais été identifié comme facteur aggravant.',
      answers: [
        { id: 'a', text: 'La pression politique ou économique sur la décision', correct: true },
        { id: 'b', text: 'Une chaîne de communication trop longue', correct: true },
        { id: 'c', text: 'La fatigue d’alerte après des alertes sans suite', correct: true },
        { id: 'd', text: 'Un excès d’exercices d’évacuation préventifs', correct: false },
      ],
    },
    {
      id: 'qf_8',
      kind: 'single',
      prompt: 'Quel est l’effet climatique d’une éruption explosive majeure ?',
      points: 1,
      explanation: 'Un refroidissement global de 0,2 à 0,7 °C pendant un à trois ans, dû aux aérosols de sulfate injectés dans la stratosphère — mesuré après le Pinatubo comme après le Tambora.',
      answers: [
        { id: 'a', text: 'Un refroidissement global temporaire', correct: true },
        { id: 'b', text: 'Un réchauffement global durable', correct: false },
        { id: 'c', text: 'Aucun effet mesurable', correct: false },
        { id: 'd', text: 'Un refroidissement permanent de plusieurs siècles', correct: false },
      ],
    },
    {
      id: 'qf_9',
      kind: 'single',
      prompt: 'Comment se compare le CO₂ émis par le volcanisme à celui des activités humaines ?',
      points: 1,
      explanation: 'Environ 0,3 à 0,4 Gt/an pour le volcanisme contre plus de 37 Gt/an pour les activités humaines, soit un rapport de l’ordre de 1 à 100.',
      answers: [
        { id: 'a', text: 'Environ cent fois moins', correct: true },
        { id: 'b', text: 'Environ dix fois plus', correct: false },
        { id: 'c', text: 'Exactement équivalent', correct: false },
        { id: 'd', text: 'Environ deux fois plus', correct: false },
      ],
    },
    {
      id: 'qf_10',
      kind: 'boolean',
      prompt: 'L’InSAR permet de surveiller la déformation de volcans dépourvus d’instruments au sol.',
      points: 1,
      explanation: 'Vrai. L’interférométrie radar satellitaire cartographie les déplacements du sol depuis l’espace : c’est aujourd’hui la seule méthode capable de couvrir des centaines de volcans isolés.',
      answers: [
        { id: 'v', text: 'Vrai', correct: true },
        { id: 'f', text: 'Faux', correct: false },
      ],
    },
    {
      id: 'qf_11',
      kind: 'single',
      prompt: 'Pourquoi 800 millions de personnes vivent-elles près d’un volcan actif ?',
      points: 1,
      explanation:
        'Principalement pour la fertilité exceptionnelle des andosols issus de l’altération des cendres, à quoi s’ajoutent la géothermie, les ressources minérales et le tourisme.',
      answers: [
        { id: 'a', text: 'Pour la fertilité des sols volcaniques et les ressources associées', correct: true },
        { id: 'b', text: 'Par méconnaissance totale du risque', correct: false },
        { id: 'c', text: 'Parce que les zones volcaniques sont exemptes de séismes', correct: false },
        { id: 'd', text: 'Parce que le climat y est systématiquement plus doux', correct: false },
      ],
    },
    {
      id: 'qf_12',
      kind: 'single',
      prompt: 'Quelle démarche fonde une décision d’alerte fiable dans un observatoire ?',
      points: 1,
      explanation:
        'L’approche multiparamètres : c’est la convergence de plusieurs familles de signaux indépendants (sismicité, déformation, géochimie, thermique) qui justifie un changement de niveau, jamais un indicateur isolé.',
      answers: [
        { id: 'a', text: 'La convergence de plusieurs familles de signaux indépendants', correct: true },
        { id: 'b', text: 'Le seul comptage quotidien des séismes', correct: false },
        { id: 'c', text: 'L’observation visuelle du panache uniquement', correct: false },
        { id: 'd', text: 'La moyenne historique des intervalles entre éruptions', correct: false },
      ],
    },
  ],
};

export const quizzes: Readonly<Record<string, Quiz>> = {
  [quizModule1.id]: quizModule1,
  [quizModule2.id]: quizModule2,
  [quizModule3.id]: quizModule3,
  [quizFinal.id]: quizFinal,
};

export function getQuiz(quizId: string): Quiz | null {
  return quizzes[quizId] ?? null;
}
