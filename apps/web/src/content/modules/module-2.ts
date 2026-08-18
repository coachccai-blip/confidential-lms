import type { Lesson } from '@lms/core';

const MODULE_ID = 'mod_volc_2';

export const module2Lessons: readonly Lesson[] = [
  {
    id: 'les_2_1',
    moduleId: MODULE_ID,
    kind: 'text',
    title: 'Viscosité et gaz : les deux variables qui décident de tout',
    summary: 'Pourquoi un magma coule ou explose — le couple silice/gaz expliqué par la physique.',
    durationMin: 12,
    blocks: [
      {
        type: 'paragraph',
        text: "Deux volcans peuvent émettre exactement le même volume de magma : l'un produira une coulée que l'on photographie de près, l'autre rasera une vallée en quatre minutes. La différence ne tient pas à la quantité de magma, mais à deux propriétés physiques : sa viscosité et sa teneur en gaz dissous.",
      },
      { type: 'heading', text: 'La viscosité, gouvernée par la silice' },
      {
        type: 'paragraph',
        text: "Le silicium et l'oxygène forment des tétraèdres SiO₄ qui se lient entre eux en chaînes et en réseaux. Plus le magma est riche en silice, plus ces polymères sont longs et enchevêtrés, et plus le liquide résiste à l'écoulement. Entre un basalte et une rhyolite, la viscosité augmente d'un facteur pouvant atteindre un million.",
      },
      { type: 'figure', figureId: 'viscosite-silice', caption: 'La composition chimique commande la viscosité, qui commande le style éruptif.' },
      {
        type: 'list',
        items: [
          "Un basalte à 1 200 °C a la consistance d'un miel chaud : il s'écoule à 10 km/h sur une pente forte et libère ses gaz sans difficulté.",
          "Une rhyolite à 800 °C a la consistance d'un mastic froid : elle avance de quelques mètres par jour et retient ses gaz jusqu'à la rupture.",
          "La température joue dans le même sens : un magma qui refroidit devient plus visqueux, et la cristallisation qui l'accompagne aggrave encore le phénomène.",
        ],
      },
      { type: 'heading', text: 'Les gaz : le moteur de l’explosion' },
      {
        type: 'paragraph',
        text: "Un magma contient 0,5 à 6 % de gaz dissous en masse — principalement de la vapeur d'eau (60 à 90 %), du CO₂ et du SO₂. Sous pression, ils restent en solution, exactement comme le CO₂ d'une bouteille fermée. Lors de la remontée, la pression chute et les gaz forment des bulles : c'est l'exsolution. Le volume, lui, explose littéralement — un kilo de magma à 5 % d'eau peut voir son volume multiplié par plusieurs centaines en se vésiculant.",
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'L’analogie de la bouteille',
        text: "Ouvrez lentement une bouteille d'eau gazeuse : les bulles s'échappent, rien ne déborde — c'est un basalte fluide. Secouez une bouteille de sirop épais puis ouvrez-la d'un coup : la mousse est projetée — c'est une rhyolite. Le gaz est le même, seule la capacité du liquide à le laisser partir change.",
      },
      {
        type: 'paragraph',
        text: "Quand les bulles ne peuvent plus s'échapper, la pression interne monte jusqu'à dépasser la résistance mécanique du magma. Celui-ci se fragmente alors brutalement en une mousse de verre : c'est le seuil de fragmentation, atteint typiquement vers 70 à 80 % de vésicularité. Au-dessus de ce seuil, on ne parle plus de coulée mais de jet de particules propulsé à plusieurs centaines de mètres par seconde.",
      },
      {
        type: 'keyvalues',
        title: 'Le diagramme de décision, en une ligne',
        entries: [
          { label: 'Peu de silice + gaz libres', value: "Éruption effusive : coulées, fontaines de lave, lacs de lave. Danger localisé." },
          { label: 'Beaucoup de silice + gaz piégés', value: "Éruption explosive : colonne plinienne, écoulements pyroclastiques. Danger régional." },
          { label: 'Magma visqueux + eau externe', value: "Éruption phréatomagmatique : la plus violente à volume égal, par vaporisation instantanée." },
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Le cas particulier de l’eau externe',
        text: "Lorsqu'un magma rencontre une nappe phréatique, un lac de cratère ou l'océan peu profond, l'eau se vaporise instantanément et multiplie son volume par 1 700. L'éruption du Hunga Tonga en janvier 2022 doit sa puissance exceptionnelle à ce mécanisme : l'onde de choc a fait trois fois le tour de la Terre.",
      },
    ],
  },
  {
    id: 'les_2_2',
    moduleId: MODULE_ID,
    kind: 'text',
    title: 'Anatomie d’un volcan : du réservoir au cratère',
    summary: 'Chambre magmatique, conduit, dykes et sills : la plomberie qui précède l’éruption.',
    durationMin: 10,
    blocks: [
      {
        type: 'paragraph',
        text: "Le magma ne monte pas d'un trait depuis sa zone de fusion. Il stationne, se refroidit, cristallise, se recharge, se fracture un chemin. Cette histoire souterraine dure souvent des siècles, et c'est elle que la surveillance instrumentale tente de lire en temps réel.",
      },
      { type: 'figure', figureId: 'volcan-coupe', caption: 'Coupe schématique d’un stratovolcan et de son système d’alimentation.' },
      { type: 'heading', text: 'Le réservoir magmatique' },
      {
        type: 'paragraph',
        text: "Longtemps imaginé comme une caverne remplie de liquide, le réservoir est aujourd'hui décrit comme une bouillie cristalline : un enchevêtrement de cristaux baignant dans 10 à 50 % de liquide, entre 3 et 10 km de profondeur pour la plupart des volcans d'arc. Une éruption survient lorsqu'une recharge de magma chaud venu d'en dessous remobilise cette bouillie, ou lorsque la pression dépasse la résistance du toit du réservoir.",
      },
      {
        type: 'list',
        items: [
          "Recharge profonde : un magma plus chaud réchauffe le réservoir, refond les cristaux et augmente brutalement la pression. Cette signature se détecte par des séismes profonds à longue période.",
          "Cristallisation : en cristallisant, le magma concentre les gaz dans le liquide résiduel et se met lui-même sous pression. Mécanisme lent, sur des décennies.",
          "Déstabilisation du toit : un séisme, un glissement de flanc ou l'effondrement d'un dôme réduisent la pression au-dessus du réservoir et déclenchent l'exsolution.",
        ],
      },
      { type: 'heading', text: 'Dykes, sills et conduits' },
      {
        type: 'paragraph',
        text: "Le magma se fraie un chemin en fracturant la roche. Quand la fracture recoupe les couches, on parle de dyke ; quand elle s'insinue entre elles, de sill. La propagation d'un dyke produit un cortège de micro-séismes qui migrent dans l'espace et dans le temps : c'est le signal le plus précieux de la volcanologie opérationnelle, car il indique où et à quelle vitesse le magma progresse.",
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Lire une migration sismique',
        text: "En 2018 au Kīlauea, les volcanologues ont suivi un dyke migrant de 40 km en quelques jours vers la zone de rift est. La localisation des séismes a permis d'anticiper le point de sortie et d'évacuer avant l'ouverture des fissures dans le quartier de Leilani Estates.",
      },
      {
        type: 'keyvalues',
        title: 'Les organes d’un édifice',
        entries: [
          { label: 'Cratère', value: 'Dépression sommitale de moins de 2 km, creusée par les explosions et l’effondrement du conduit.' },
          { label: 'Caldeira', value: 'Dépression de 2 à 50 km formée par effondrement du toit après une vidange massive du réservoir.' },
          { label: 'Dôme', value: 'Extrusion de lave trop visqueuse pour s’écouler. Son effondrement engendre des nuées ardentes.' },
          { label: 'Cône adventif', value: 'Petit édifice sur le flanc, alimenté par un conduit secondaire.' },
          { label: 'Fumerolle', value: 'Émission de gaz sans magma. La composition et la température renseignent sur l’état du réservoir.' },
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Le flanc, maillon faible',
        text: "Un édifice construit par empilement est intrinsèquement instable. Le 18 mai 1980, le flanc nord du Mont St. Helens a glissé en bloc — 2,5 km³ de roche — décomprimant instantanément le système et transformant une éruption attendue en explosion latérale dévastatrice sur 600 km².",
      },
    ],
  },
  {
    id: 'les_2_3',
    moduleId: MODULE_ID,
    kind: 'text',
    title: 'Typologie des édifices volcaniques',
    summary: 'Boucliers, stratovolcans, cônes de scories, caldeiras et trapps : lire un paysage.',
    durationMin: 9,
    blocks: [
      {
        type: 'paragraph',
        text: "La forme d'un volcan raconte son histoire éruptive. Un profil est un résumé statistique de milliers d'éruptions : il traduit la viscosité moyenne des produits émis et la proportion de matériel fragmenté par rapport aux coulées.",
      },
      { type: 'figure', figureId: 'types-edifices', caption: 'Quatre morphologies pour quatre régimes éruptifs — à la même échelle relative.' },
      { type: 'heading', text: 'Volcans boucliers' },
      {
        type: 'paragraph',
        text: "Bâtis presque exclusivement de coulées basaltiques fluides, ils présentent des pentes de 5 à 10° et des dimensions colossales. Le Mauna Loa culmine à 4 169 m au-dessus du niveau de la mer, mais s'élève en réalité de 9 000 m depuis le plancher océanique, pour un volume d'environ 75 000 km³ : c'est la plus grande montagne de la planète en volume.",
      },
      { type: 'heading', text: 'Stratovolcans' },
      {
        type: 'paragraph',
        text: "Ce sont les volcans de carte postale : Fuji, Merapi, Cotopaxi, Mayon. Leur silhouette conique à 25-35° de pente vient de l'alternance de coulées visqueuses et de couches de téphras — d'où le nom de composites. Ils dominent les arcs de subduction, sont les plus meurtriers, et se reconstruisent souvent à l'intérieur de leur propre caldeira après une destruction.",
      },
      { type: 'heading', text: 'Cônes de scories et champs monogéniques' },
      {
        type: 'paragraph',
        text: "Un cône de scories naît d'une seule éruption et meurt avec elle. Le Paricutín, au Mexique, a surgi dans un champ de maïs le 20 février 1943, atteint 336 m en un an, puis s'est éteint définitivement en 1952. Les champs monogéniques comme la chaîne des Puys posent un problème de prévision particulier : la prochaine éruption ne se produira pas au même endroit que la précédente.",
      },
      { type: 'heading', text: 'Caldeiras et provinces basaltiques' },
      {
        type: 'paragraph',
        text: "Aux deux extrêmes du spectre se trouvent les systèmes capables de modifier le climat. Les caldeiras de type Yellowstone, Toba ou Campi Flegrei stockent des centaines à des milliers de km³ de magma rhyolitique et produisent des éruptions VEI 7-8 très rares. Les trapps — Deccan, Sibérie — émettent des millions de km³ de basalte sur un million d'années et coïncident avec les grandes extinctions de masse.",
      },
      {
        type: 'table',
        caption: 'Repères morphologiques',
        headers: ['Type', 'Pente', 'Volume typique', 'Magma', 'Durée de vie'],
        rows: [
          ['Cône de scories', '30-35°', '< 1 km³', 'Basalte', 'Une seule éruption'],
          ['Stratovolcan', '25-35°', '10 à 500 km³', 'Andésite / dacite', '10 000 à 1 M d’années'],
          ['Volcan bouclier', '5-10°', '1 000 à 80 000 km³', 'Basalte', '1 à 5 M d’années'],
          ['Caldeira', 'Dépression', '100 à 5 000 km³ émis', 'Rhyolite', 'Plusieurs M d’années'],
          ['Trapps', 'Plateau', '> 1 000 000 km³', 'Basalte', '~1 M d’années'],
        ],
      },
      {
        type: 'callout',
        tone: 'success',
        title: 'Exercice de lecture',
        text: "Face à une photo de volcan inconnu, posez-vous trois questions dans l'ordre : quelle pente ? quel contexte tectonique ? quelle taille ? Vous en déduirez la composition probable du magma, donc le style éruptif attendu, donc les aléas à cartographier en priorité.",
      },
    ],
  },
  {
    id: 'les_2_q',
    moduleId: MODULE_ID,
    kind: 'quiz',
    title: 'Quiz — Magmas et édifices',
    summary: '8 questions sur la viscosité, les gaz, la plomberie magmatique et la morphologie.',
    durationMin: 8,
    quizId: 'qz_volc_2',
  },
];
