import type { Lesson } from '@lms/core';

const MODULE_ID = 'mod_volc_3';

export const module3Lessons: readonly Lesson[] = [
  {
    id: 'les_3_1',
    moduleId: MODULE_ID,
    kind: 'text',
    title: 'Styles éruptifs et échelle VEI',
    summary: 'Du hawaïen au plinien : classer une éruption et comprendre ce que mesure vraiment le VEI.',
    durationMin: 11,
    blocks: [
      {
        type: 'paragraph',
        text: "Les volcanologues nomment les styles éruptifs d'après les volcans qui les incarnent le mieux. Cette nomenclature n'est pas décorative : chaque nom correspond à un couple viscosité/teneur en gaz, donc à une hauteur de colonne, une portée des produits et un périmètre de danger.",
      },
      {
        type: 'table',
        caption: 'Les styles éruptifs, du plus calme au plus violent',
        headers: ['Style', 'Colonne', 'Magma', 'Manifestation', 'Volcan de référence'],
        rows: [
          ['Hawaïen', '< 1 km', 'Basalte très fluide', 'Fontaines et lacs de lave, coulées rapides', 'Kīlauea'],
          ['Strombolien', '1 à 5 km', 'Basalte', 'Explosions rythmées toutes les minutes, bombes', 'Stromboli'],
          ['Vulcanien', '5 à 15 km', 'Andésite', 'Explosions brèves et violentes, blocs balistiques', 'Sakurajima'],
          ['Péléen', 'Variable', 'Dacite', 'Croissance puis effondrement de dôme, nuées ardentes', 'Montagne Pelée'],
          ['Plinien', '20 à 45 km', 'Rhyolite / dacite', 'Colonne stratosphérique soutenue pendant des heures', 'Vésuve'],
          ['Phréatomagmatique', 'Très variable', 'Tous', 'Interaction magma / eau, explosions surtseyennes', 'Hunga Tonga'],
        ],
      },
      { type: 'heading', text: 'Ce que mesure l’indice VEI' },
      {
        type: 'paragraph',
        text: "L'échelle VEI (Volcanic Explosivity Index), proposée en 1982, classe les éruptions de 0 à 8 en combinant le volume de téphras émis et la hauteur de la colonne. Elle est logarithmique : chaque échelon multiplie le volume par dix. Un VEI 5 n'est pas « un peu plus fort » qu'un VEI 4, il est dix fois plus volumineux.",
      },
      { type: 'figure', figureId: 'echelle-vei', caption: 'Échelle VEI. La rareté croît aussi vite que la puissance : un VEI 8 tous les 50 000 ans environ.' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Les limites de l’indice',
        text: "Le VEI mesure l'explosivité, pas la létalité et pas le volume total émis. L'éruption du Laki (1783), essentiellement effusive, est classée VEI 4 mais a tué environ 20 % de la population islandaise et provoqué des dizaines de milliers de morts en Europe par ses aérosols. Une éruption modeste au mauvais endroit tue plus qu'une éruption colossale au milieu du Pacifique.",
      },
      { type: 'heading', text: 'Fréquence et statistique' },
      {
        type: 'list',
        items: [
          "VEI 2 : plusieurs dizaines par an. C'est le régime ordinaire du volcanisme actif.",
          "VEI 4 : environ une par an ou deux à l'échelle mondiale — Eyjafjallajökull en 2010, qui a paralysé le trafic aérien européen sans faire de victime directe.",
          "VEI 5 : une par décennie environ — Mont St. Helens 1980.",
          "VEI 6 : une par siècle environ — Pinatubo 1991, qui a fait baisser la température moyenne du globe de 0,5 °C pendant deux ans.",
          "VEI 7 : une par millénaire environ — Tambora 1815 et son « année sans été » en 1816.",
          "VEI 8 : une tous les 50 000 ans environ. Aucune n'a été observée par l'humanité moderne.",
        ],
      },
    ],
  },
  {
    id: 'les_3_2',
    moduleId: MODULE_ID,
    kind: 'text',
    title: 'Les aléas volcaniques et leur létalité réelle',
    summary: 'Nuées ardentes, lahars, retombées, gaz, tsunamis : ce qui tue vraiment, et à quelle distance.',
    durationMin: 13,
    blocks: [
      {
        type: 'paragraph',
        text: "Sur les quelque 280 000 morts attribuables au volcanisme depuis 1500, la lave représente moins de 1 % du bilan. Hiérarchiser correctement les aléas est la compétence la plus utile de ce cours : c'est elle qui détermine où tracer les périmètres d'évacuation.",
      },
      { type: 'figure', figureId: 'produits-eruptifs', caption: 'Les trois familles d’aléas et leurs trajectoires respectives autour d’un édifice.' },
      { type: 'heading', text: 'Écoulements pyroclastiques : l’aléa n°1' },
      {
        type: 'paragraph',
        text: "Un écoulement pyroclastique — la « nuée ardente » de Lacroix — est un mélange de gaz, de cendres et de blocs, plus dense que l'air, qui dévale les flancs à 100-700 km/h à des températures de 200 à 700 °C. Il ne se contourne pas, ne s'anticipe pas une fois déclenché, franchit les reliefs et peut traverser plusieurs kilomètres d'eau. Le 8 mai 1902, la nuée de la Montagne Pelée a tué environ 28 000 personnes à Saint-Pierre en moins de deux minutes ; il y eut deux survivants.",
      },
      {
        type: 'callout',
        tone: 'danger',
        title: 'La seule parade est la distance',
        text: "Aucun bâtiment civil ne résiste à un écoulement pyroclastique. La seule mesure efficace est l'évacuation préventive de la zone d'aléa, décidée avant l'éruption sur la base des dépôts anciens cartographiés.",
      },
      { type: 'heading', text: 'Lahars : le tueur différé' },
      {
        type: 'paragraph',
        text: "Un lahar est une coulée de boue volcanique : cendres mobilisées par une pluie intense, la fonte d'un glacier ou la vidange d'un lac de cratère. Sa densité est celle du béton frais, sa vitesse de 20 à 60 km/h, et il suit les vallées — donc précisément là où les villages se sont installés. Il peut survenir des mois ou des années après l'éruption, quand la vigilance est retombée.",
      },
      {
        type: 'quote',
        text: "Le 13 novembre 1985, une éruption pourtant modeste (VEI 3) du Nevado del Ruiz fait fondre une partie de sa calotte glaciaire. Quatre lahars descendent les vallées et ensevelissent la ville d'Armero, à 48 km du cratère : 23 000 morts. Les cartes d'aléas existaient et désignaient précisément cette zone ; elles n'ont pas été suivies d'évacuation.",
        source: 'Catastrophe d’Armero, Colombie — cas d’école de la volcanologie appliquée',
      },
      { type: 'heading', text: 'Retombées de cendres' },
      {
        type: 'paragraph',
        text: "Rarement mortelles directement, les cendres provoquent l'essentiel des dégâts matériels. Dix centimètres de cendre humide représentent une surcharge d'environ 100 kg/m² : les toitures s'effondrent. Elles détruisent les récoltes, court-circuitent les réseaux électriques, abrasent les moteurs — dont les réacteurs d'avion, d'où la fermeture de l'espace aérien européen en avril 2010.",
      },
      { type: 'heading', text: 'Gaz, tsunamis et effondrements' },
      {
        type: 'list',
        items: [
          "Gaz : le CO₂, plus dense que l'air, s'accumule dans les dépressions. En 1986, le lac Nyos au Cameroun a relâché un nuage de CO₂ qui a asphyxié 1 746 personnes en une nuit. Le SO₂, lui, produit des pluies acides et des aérosols climatiques.",
          "Tsunamis : l'effondrement d'un flanc dans la mer ou une explosion sous-marine génèrent des vagues. Le Krakatoa en 1883 a tué environ 36 000 personnes, essentiellement par tsunami, non par l'explosion elle-même.",
          "Glissements de flanc : jusqu'à plusieurs km³ de matériaux qui se mettent en mouvement, décomprimant le système magmatique et déclenchant une explosion latérale.",
          "Famines et épidémies : historiquement la première cause de mortalité différée, par destruction des récoltes et des réseaux d'eau potable.",
        ],
      },
      {
        type: 'keyvalues',
        title: 'Distances de sécurité indicatives',
        entries: [
          { label: 'Bombes balistiques', value: '2 à 5 km du cratère' },
          { label: 'Écoulements pyroclastiques', value: '5 à 30 km, canalisés par les vallées' },
          { label: 'Lahars', value: 'Jusqu’à 100 km le long des rivières' },
          { label: 'Retombées épaisses', value: '10 à 100 km sous le vent dominant' },
          { label: 'Effets climatiques', value: 'Hémisphérique à global, pour un VEI ≥ 6' },
        ],
      },
    ],
  },
  {
    id: 'les_3_3',
    moduleId: MODULE_ID,
    kind: 'text',
    title: 'Six éruptions qui ont changé l’histoire',
    summary: 'Vésuve, Tambora, Krakatoa, Pelée, St. Helens, Pinatubo : ce que chacune a appris à la discipline.',
    durationMin: 14,
    blocks: [
      {
        type: 'paragraph',
        text: "La volcanologie moderne s'est construite sur des catastrophes. Chacune des six éruptions suivantes a produit une avancée conceptuelle ou institutionnelle précise — et c'est à ce titre qu'elles figurent ici.",
      },
      { type: 'heading', text: '79 — Vésuve : la naissance du style plinien' },
      {
        type: 'paragraph',
        text: "Pline le Jeune décrit depuis Misène une colonne « semblable à un pin parasol » qui s'élève à environ 30 km. Après dix-huit heures de retombées de ponces, la colonne s'effondre et six écoulements pyroclastiques successifs ensevelissent Pompéi et Herculanum. Son récit, adressé à Tacite, est le premier compte rendu scientifique d'une éruption — d'où le nom d'éruption plinienne. Les corps moulés dans la cendre ont permis d'établir que la mort a été causée par le choc thermique, non par l'asphyxie.",
      },
      { type: 'heading', text: '1815 — Tambora : l’année sans été' },
      {
        type: 'paragraph',
        text: "La plus puissante éruption des temps historiques (VEI 7, ~150 km³) tue environ 12 000 personnes directement, puis 70 000 de plus par famine en Indonésie. Les 60 mégatonnes de SO₂ injectées dans la stratosphère font chuter la température moyenne du globe de 0,4 à 0,7 °C. En 1816, l'Europe et l'Amérique du Nord connaissent des gelées en juin et de mauvaises récoltes généralisées. C'est la démonstration que le volcanisme est un forçage climatique.",
      },
      { type: 'heading', text: '1883 — Krakatoa : l’événement global' },
      {
        type: 'paragraph',
        text: "L'explosion finale est entendue à 4 800 km, à Rodrigues, et l'onde de pression fait sept fois le tour de la Terre. Les tsunamis de 30 m tuent environ 36 000 personnes. Grâce au télégraphe, c'est la première catastrophe naturelle relayée mondialement en quelques heures : la volcanologie devient un sujet public et international.",
      },
      { type: 'heading', text: '1902 — Montagne Pelée : la nuée ardente' },
      {
        type: 'paragraph',
        text: "Saint-Pierre, « Petit Paris des Antilles », est détruite en moins de deux minutes le 8 mai. Les signes précurseurs étaient nombreux ; une commission officielle avait conclu, à la veille d'une élection, que la ville n'était pas menacée. Alfred Lacroix décrit et nomme le phénomène. Deux leçons durables : l'écoulement pyroclastique devient l'aléa central de la discipline, et la question de l'indépendance de l'expertise scientifique vis-à-vis du politique est posée pour la première fois.",
      },
      { type: 'heading', text: '1980 — Mont St. Helens : l’instabilité de flanc' },
      {
        type: 'paragraph',
        text: "Deux mois de sismicité et un renflement du flanc nord de 140 m précèdent l'événement. Le 18 mai, un séisme de magnitude 5,1 déclenche le plus grand glissement de terrain jamais observé (2,5 km³), qui décomprime instantanément le cryptodôme : l'explosion part latéralement et dévaste 600 km² de forêt en quelques minutes. 57 morts, dont le volcanologue David Johnston. L'éruption a fondé la discipline de la surveillance de la déformation.",
      },
      { type: 'heading', text: '1991 — Pinatubo : la réussite' },
      {
        type: 'paragraph',
        text: "Après 500 ans de sommeil, le Pinatubo se réveille en avril. Le PHIVOLCS et l'USGS déploient un réseau d'urgence, établissent une échelle d'alerte à cinq niveaux et diffusent une vidéo pédagogique dans les villages. 60 000 personnes sont évacuées avant l'éruption VEI 6 du 15 juin. Bilan : environ 850 morts, la plupart dues à l'effondrement de toitures sous la cendre détrempée par un typhon concomitant — au lieu des dizaines de milliers attendus. C'est le meilleur retour sur investissement documenté de la volcanologie opérationnelle.",
      },
      {
        type: 'callout',
        tone: 'success',
        title: 'La leçon commune',
        text: "Dans presque tous les cas meurtriers, les signaux existaient. Ce qui a manqué n'est pas la donnée scientifique mais la chaîne de décision : cartographie d'aléas ignorée, expertise contredite par le pouvoir politique, ou absence de plan d'évacuation. C'est l'objet du dernier module.",
      },
      {
        type: 'table',
        caption: 'Récapitulatif',
        headers: ['Éruption', 'VEI', 'Victimes', 'Cause principale', 'Apport à la discipline'],
        rows: [
          ['Vésuve 79', '5', '~2 000', 'Écoulements pyroclastiques', 'Premier récit scientifique'],
          ['Tambora 1815', '7', '~82 000', 'Famine post-éruptive', 'Forçage climatique volcanique'],
          ['Krakatoa 1883', '6', '~36 000', 'Tsunami', 'Première catastrophe médiatisée'],
          ['Pelée 1902', '4', '~28 000', 'Nuée ardente', 'Aléa pyroclastique, rôle de l’expertise'],
          ['St. Helens 1980', '5', '57', 'Explosion latérale', 'Surveillance de la déformation'],
          ['Pinatubo 1991', '6', '~850', 'Effondrement de toitures', 'Évacuation préventive réussie'],
        ],
      },
    ],
  },
  {
    id: 'les_3_q',
    moduleId: MODULE_ID,
    kind: 'quiz',
    title: 'Quiz — Éruptions et aléas',
    summary: '9 questions sur les styles éruptifs, le VEI, la létalité des aléas et les cas historiques.',
    durationMin: 9,
    quizId: 'qz_volc_3',
  },
];
