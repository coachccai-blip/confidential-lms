# Lumière — LMS de français à contenu protégé

Plateforme de cours de français dont le contenu est **trilingue** (français, anglais, chinois),
**filigrané par apprenant** et dont les gestes de copie sont **bloqués et journalisés**. Le
catalogue couvre les six niveaux du CECRL, de A1 à C2, à raison de cinq cours complets par palier.

**➜ Démonstration en ligne : https://coachccai-blip.github.io/confidential-lms/**

**L'accès est fermé : il faut un compte.** Deux comptes de démonstration sont livrés avec
l'application et affichés sur l'écran de connexion.

| Rôle | Identifiant | Mot de passe |
|---|---|---|
| Apprenant | `Bob` | `Bob12345+` |
| Enseignant | `SuperBob` | `SuperBob12345+` |

Le compte enseignant ouvre en plus l'espace de pilotage, où se créent les autres comptes.

---

## 1. Ce que contient ce dépôt — et ce qu'il ne contient pas

Le [brief initial](#9-couverture-du-brief) décrit un produit à quatre applications : backend
Fastify + PostgreSQL, espace admin Next.js, application desktop Electron et application mobile
React Native, avec vidéos HLS chiffrées en AES-128.

**GitHub Pages ne sert que des fichiers statiques** : aucun processus serveur, aucune base de
données, aucun binaire desktop ou mobile n'y est exécutable. Ce dépôt livre donc la partie du
produit qui a un sens sur cette cible, sans en masquer les limites :

| Livré ici | Statut |
|---|---|
| Page d'accueil publique + connexion par identifiant et mot de passe | ✅ Fonctionnel |
| Application apprenant complète (catalogue, lecteur, quiz, progression, compte) | ✅ Fonctionnel |
| Interface **et** contenu en français, anglais et chinois | ✅ Fonctionnel |
| Glossaire : mots difficiles cliquables, définis dans les trois langues | ✅ 49 entrées |
| 30 cours de français rangés par niveau (A1 → C2), 126 étapes, 30 quiz notés | ✅ Contenu réel et complet |
| Comptes apprenants, invitations et suivi de progression | ✅ Fonctionnel, **sans serveur** (§7) |
| Toutes les protections réalisables dans un navigateur | ✅ Fonctionnel |
| Contenu nominatif (prénom dans les leçons) + empreinte invisible par apprenant | ✅ Fonctionnel |
| Comptes apprenants avec mot de passe, créés par l'enseignant | ✅ Fonctionnel, **vérifié côté client** (§9) |
| Schémas manipulables, animations, points, séries et badges | ✅ Fonctionnel |
| Session unique, limite de 3 appareils, journal de sécurité | ✅ Fonctionnel, **simulé côté client** |
| Espace admin : suivi apprenants, vérificateur d'empreinte, matrice de protection | ✅ Fonctionnel, données de démonstration |
| Backend Fastify + PostgreSQL + Prisma, auth argon2, JWT/refresh | ❌ Phase 1 restante — voir [§8](#8-feuille-de-route) |
| Application Electron (`setContentProtection`) | ❌ Phase 2 |
| Application React Native (`FLAG_SECURE`) | ❌ Phase 3 |
| Pipeline vidéo HLS chiffré AES-128 | ❌ Phase 2 |

> **Important.** L'authentification et les sessions de cette démonstration sont **simulées dans
> le navigateur** (`localStorage`). Aucun mot de passe n'est vérifié, aucune donnée ne quitte
> votre poste. C'est un choix assumé pour rendre les mécanismes de protection *observables* sans
> serveur ; en production, tout ce qui est décrit au [§5](#5-sessions-et-anti-partage) doit être
> arbitré côté serveur, un client ne pouvant jamais s'auto-contrôler.

---

## 2. Le catalogue

Le **niveau du CECRL est la catégorie** : trente cours, cinq par palier, du débutant complet
à la maîtrise.

| Niveau | Cours | Contenu |
|---|---|---|
| **A1 · Découverte** | Premiers mots, premières phrases | Saluer et prendre congé · se présenter et épeler · compter, l'heure et la date |
| | Le présent des verbes du quotidien | Être et avoir · les verbes en -er · aller, faire, venir et le futur proche |
| | Nommer les choses : articles, genre et nombre | Le système des articles · le pluriel · question et négation |
| | Ma vie de tous les jours | Possessifs et famille · les pièces du logement · le déroulé d'une journée |
| | Les sons du français | Lettres muettes · liaisons obligatoires et interdites · les sons difficiles |
| **A2 · Survie** | Raconter au passé : composé et imparfait | Choix de l'auxiliaire et accord · l'imparfait · décor contre événement |
| | Se repérer : lieu, temps et quantité | Prépositions de lieu et pronom « y » · depuis / pendant / il y a / dans · quantités et pronom « en » |
| | Décrire, comparer, donner son avis | Place et accord de l'adjectif · comparatif et superlatif · annoncer, justifier, nuancer |
| | Se débrouiller au quotidien | Faire ses courses · au restaurant · transports et rendez-vous |
| | Écrire au quotidien | Message et carte postale · **la lettre sur feuille A4, zone par zone** · remplir un formulaire |
| **B1 · Seuil** | Grammaire française essentielle | Genre des noms · accord du participe passé · pronoms relatifs · connecteurs logiques |
| | Conjugaison : les temps qui comptent | Imparfait vs passé composé · plus-que-parfait · futur et conditionnel · subjonctif |
| | Les pronoms sans hésiter | Direct ou indirect · y et en · qui, que, dont, où |
| | Rapporter ce qui a été dit | Concordance des temps · questions rapportées · ordres et verbes de parole |
| | Préparation au DELF B1 | Format et barème · méthode des compréhensions · production écrite · production orale |
| **B2 · Avancé** | Préparation au DELF B2 | Essai argumenté · lettre formelle · repérage de l'implicite · monologue et débat |
| | Nuancer sa pensée | Subjonctif · système hypothétique à trois niveaux · concession et restriction |
| | Le français professionnel | Courriel · prise de parole en réunion · CV, lettre de motivation, entretien |
| | Lire la presse française | **Anatomie d'une page de journal** · la langue des titres · repérer le point de vue |
| | Donner du relief à ses phrases | Mise en relief · voix passive, « on » et « se » · style nominal |
| **C1 · Autonome** | Préparation au DALF C1 | Lecture croisée · rédaction de la synthèse · exposé sur dossier · registre soutenu |
| | Écrire à l'université | Méthode de la dissertation · synthèse de documents · style académique et modalisation |
| | Comprendre le français parlé vite | Réductions de l'oral · quatre registres · litote, ironie, sous-entendus |
| | Le mot juste | Nuances entre synonymes · couples verbe-nom · faux amis tenaces |
| | Débattre et convaincre | Structurer une intervention · répondre à une objection · prendre et garder la parole |
| **C2 · Maîtrise** | Préparation au DALF C2 | Compte rendu oral · reformulation avancée · article structuré · style et implicite |
| | Lire la littérature française | Temps du récit littéraire · figures de style · commentaire composé |
| | France et francophonie | Institutions de la Ve République · références culturelles · variantes du français |
| | Le style : rythme, figures, ironie | Rythme de la phrase · six figures et leur effet · signaux d'ironie |
| | Penser en français, pas traduire | Nom contre verbe · expressions sans équivalent · réécrire une phrase traduite |

Chaque cours comprend **3 ou 4 leçons** et **1 quiz noté** (6 à 8 questions, seuil 70 %, trois
tentatives, crédit partiel, correction commentée question par question). Soit **126 étapes**,
**30 quiz** et **192 questions** au total.

Les leçons utilisent des blocs typés adaptés à l'enseignement d'une langue : paragraphes,
tableaux comparatifs, **tableaux de conjugaison**, **séries d'exemples** (phrase française +
glose dans la langue de l'apprenant, avec marquage des tournures fautives), encadrés, listes de
définitions et **sept schémas SVG** écrits à la main, dont les libellés suivent eux aussi la
langue d'interface.

---

## 3. Trilinguisme

### Ce qui est traduit, ce qui ne l'est pas

C'est le choix pédagogique central du projet : **les explications suivent la langue de
l'apprenant, les exemples restent en français.** Un apprenant sinophone lit « 未完成过去时铺设背景 »
puis l'exemple *« Il pleuvait et les rues étaient vides. »* — la langue cible n'est jamais
diluée.

De même, les tableaux de conjugaison ne sont jamais traduits : seuls leurs en-têtes et leurs
notes le sont.

### Comment c'est implémenté

Le type `LocalizedText = Record<'fr' | 'en' | 'zh', string>` remplace `string` partout où du
texte est affiché — titres de cours, blocs de leçon, questions de quiz, options de réponse,
corrections. Le compilateur refuse donc tout contenu qui oublierait une langue.

L'interface suit le même principe : un dictionnaire unique où chaque entrée porte ses trois
traductions côte à côte (`apps/web/src/i18n/dictionary.ts`). Il n'existe pas de fichier `en.json`
susceptible de diverger d'un `fr.json` — **une clé manquante est une erreur de compilation**, pas
un texte non traduit en production.

Le typage garantit qu'aucune langue ne manque ; neuf tests (`apps/web/src/i18n/i18n.test.ts`)
garantissent en plus que les trois versions **disent la même chose**. Ils parcourent les 1 392
chaînes du produit — interface, cours, quiz, glossaire — et échouent si une traduction est vide,
si les nombres annoncés divergent d'une langue à l'autre, si un texte chinois cite le français
avec des chevrons `« »` au lieu de guillemets `“ ”`, ou si un terme clé change de rendu d'un
écran à l'autre (« parcours » doit toujours donner *course* et 课程, jamais *path* ni 路径).

Le choix de langue est mémorisé avec le reste de l'état, met à jour l'attribut `lang` du document
et pilote le formatage des dates et des nombres via `Intl`.

---

## 4. Mots difficiles cliquables

Dans le corps des leçons, les termes techniques sont balisés `[[identifiant|texte affiché]]`. Le
rendu les transforme en boutons soulignés ; un clic ouvre une fenêtre affichant **les trois
définitions simultanément** — et non celle de la langue courante — pour que l'apprenant compare
la formulation française avec sa langue d'appui. Chaque entrée porte sa transcription
phonétique, sa nature grammaticale et un exemple en français avec sa glose.

Le glossaire compte **49 entrées** couvrant le vocabulaire de la grammaire (déterminant, accord,
antécédent, subordonnée…), de la conjugaison (radical, terminaison, concordance des temps…) et
des examens (synthèse, reformulation, problématique, litote, périphrase, barème…).

---

## 5. Ce qui rend les leçons vivantes

### 5.1 Schémas manipulables

Un tableau se lit, un schéma se manipule. Neuf familles couvrent ce que l'enseignement d'une
langue demande le plus souvent ; **les trente cours en comptent au moins un**, soixante-treize
au total.

| Famille | Ce qu'elle sert | Exemple dans le catalogue |
|---|---|---|
| **Roue** | parcourir une conjugaison personne par personne | la roue d'`être` au présent (A1), celle du passé simple (C2) |
| **Matrice** | croiser deux critères | le sélecteur d'article, genre × détermination (A1) ; direct ou indirect (B1) |
| **Frise** | situer un fait dans le temps | `depuis` / `pendant` / `il y a` / `dans` (A2) ; le recul des temps au discours rapporté (B1) |
| **Sélecteur** | faire varier un même énoncé | les quatre registres de langue (C1), les trois systèmes hypothétiques (B2) |
| **Phrase** | décomposer un énoncé segment par segment | l'anatomie d'une négation (A1), les signaux d'ironie (C2) |
| **Document** | montrer *où* écrire, et *dans quel ordre* | **la feuille A4 d'une lettre** et la carte postale (A2), la page de journal (B2) |
| **Remise en ordre** | reconstituer une suite d'étapes | les huit éléments d'une lettre (A2), les cinq mouvements d'une réfutation (C1) |
| **Appariement** | relier une expression à ce qu'elle signifie | le vocabulaire des formulaires (A2), les faux amis (C1) |
| **Texte à trous** | choisir la forme juste, avec l'explication | direct ou indirect (B1), le mot qui oriente un article (B2) |

Le **document** répond à une demande précise : pour apprendre à rédiger une lettre, rien ne
remplace une feuille A4 dont chaque zone s'allume à son tour. Le bouton « Voir dans l'ordre »
parcourt les huit zones au rythme d'une par seconde et demie ; la signature porte le prénom de
l'apprenant, comme partout ailleurs.

Trois règles tenues partout : **tout est bouton** — rien ne dépend du survol, l'exploration est
identique au clavier et au doigt ; **une seule zone de réponse**, à hauteur plancher, pour que la
page ne saute pas sous le lecteur ; **une sélection par défaut**, sans quoi un schéma vide ne
montre pas ce qu'il sait faire.

### 5.2 Emojis et repères visuels

**396 blocs** portent un emoji, choisi d'après le sujet du titre — 🪤 pour un piège, 🔄 pour une
conjugaison, 🗣️ pour un point d'oral, ⚖️ pour une comparaison. La règle est **un emoji au plus par
bloc**, jamais deux, et jamais dans le corps du texte : il sert de repère de balayage, pas de
décoration.

### 5.3 Apparition à la lecture

Les blocs montent de quelques pixels en se révélant, une fois, quand ils entrent dans la fenêtre.
Le contenu est présent dans le DOM dès le départ — l'animation ne porte que sur l'opacité et la
translation — de sorte que la recherche dans la page, la lecture d'écran et l'impression voient
tout. `prefers-reduced-motion: reduce` désactive l'ensemble.

### 5.4 Points, séries et badges

| Ce qui rapporte | Points |
|---|---|
| Une leçon terminée | +10 |
| Un quiz réussi | +25 |
| Un sans-faute | +15 |
| Un cours achevé | +50 |

Dix paliers, une **série de jours consécutifs**, et **dix badges** — du premier pas au palier
CECRL franchi, en passant par « polyglotte » (avoir consulté le site dans les trois langues) et
« oiseau de nuit ». Les badges non obtenus restent visibles en gris : un objectif caché ne motive
personne.

Tout est **dérivé de la progression déjà enregistrée** — aucun compteur n'est stocké en double,
sans quoi il finirait par diverger de la réalité. Un quiz repassé ne rapporte pas deux fois :
c'est sa meilleure tentative qui compte.

---

## 6. Couleurs, contrastes et retour sensoriel

### 6.1 Une palette vérifiée, pas estimée

Les couleurs de texte ne sont pas choisies à l'œil : un script calcule le contraste WCAG de
chaque paire employée, dans les deux thèmes, et le tableau doit être vert avant livraison.

La passe a corrigé de vrais défauts, tous du côté clair : les mentions secondaires à 3,75:1, les
tons de succès et d'avertissement sous le seuil, et surtout des **bordures de champ à 1,25:1** —
autrement dit des zones de saisie sans contour visible, ce qui rendait les listes déroulantes
difficiles à repérer.

Trois familles de traits sont désormais distinguées, parce qu'elles ne répondent pas aux mêmes
exigences :

| Jeton | Rôle | Seuil visé |
|---|---|---|
| `--border` | filet de séparation, purement décoratif | aucun |
| `--border-strong` | structure d'un bloc | aucun |
| `--field-border` | contour d'un champ, d'un bouton, d'une option | **3:1** (WCAG 1.4.11) |

La liste déroulante reçoit en plus son propre chevron : celui du système ne suit pas le thème de
la page, et ses options sont repeintes explicitement, faute de quoi le menu s'ouvre aux couleurs
du système d'exploitation.

### 6.2 Sons, appuis et célébrations

Les bruitages sont **synthétisés par l'API Web Audio** : aucun fichier à charger, donc rien qui
parte sur le réseau. Huit sons courts, construits sur une gamme pentatonique — deux notes prises
au hasard dedans ne peuvent pas sonner faux.

| Geste | Son |
|---|---|
| Clic sur une commande | note brève |
| Choix dans un schéma ou une réponse de quiz | note plus haute |
| Étape terminée | arpège de quatre notes + confettis |
| Quiz réussi | tierce montante + confettis |
| Sans-faute, changement de palier | arpège prolongé + confettis |
| Badge obtenu | deux notes cristallines |
| Quiz échoué | deux notes descendantes, sourdes |

Un seul écouteur en phase de capture couvre toute l'application : rien à brancher bouton par
bouton, donc rien à oublier. Les confettis sont dessinés sur un canevas créé à la demande et
retiré dès la fin.

Trois garde-fous : le son se **coupe d'un clic** depuis la barre supérieure et le choix survit au
rechargement ; `prefers-reduced-motion: reduce` désactive sons et confettis ensemble ; et un
navigateur qui refuse l'audio ne provoque jamais d'erreur — un bruitage est un agrément, il ne
doit rien interrompre.

La célébration est accrochée à **la progression, pas au clic** : une leçon s'achève aussi bien
par son bouton qu'en atteignant le bas de la page, et les deux méritent la même fête.

---

## 7. Protections implémentées — et leurs limites réelles

Le principe directeur du brief est conservé : la protection absolue n'existe pas, l'objectif est
la **dissuasion maximale et la traçabilité**. Chaque mesure ci-dessous est accompagnée de ce
qu'elle ne fait pas.

### 7.1 Marquage nominatif du contenu

Une première version barrait chaque écran d'une mosaïque `email · téléphone · horodatage`. Elle a
été **retirée** : elle gênait la lecture et exposait des données personnelles en permanence, pour
un gain de traçabilité que l'empreinte invisible assure déjà.

Le marquage visible passe désormais par le **prénom de l'apprenant, inscrit dans le corps des
leçons**. Le contenu des cours est rédigé avec le jeton `{prenom}`, résolu au rendu dans la langue
affichée — la place du prénom n'est pas la même en français, en anglais et en chinois. À cela
s'ajoutent des phrases d'accompagnement nominatives à l'ouverture, au milieu et à la fin de chaque
leçon, ainsi que dans les quiz.

Le prénom sert donc deux fins à la fois : il **engage** — une leçon qui interpelle son lecteur se
suit mieux qu'un texte anonyme — et il rend une **fuite attribuable**, sans afficher d'adresse ni
de numéro par-dessus le texte.

> **Limite.** Un prénom se remplace en quelques secondes dans un traitement de texte. Il dissuade
> le partage spontané d'une capture, pas un effacement délibéré — c'est l'empreinte invisible du
> paragraphe suivant qui couvre ce cas.

### 7.2 Empreinte invisible dans le texte

Chaque chaîne de texte servie est marquée par des **caractères de largeur nulle** encodant
l'identifiant de l'apprenant, celui de l'appareil et l'heure de consultation. L'encodage utilise
quatre symboles invisibles (2 bits par caractère) et l'empreinte est **répétée tous les 24 mots**,
de sorte qu'un extrait de quelques lignes suffit à identifier la source. Le rendu visuel est
strictement identique : `stripInvisible(marqué) === original` est vérifié par un test unitaire.

L'espace admin embarque un **vérificateur d'empreinte** : on y colle un extrait suspect, il en
extrait l'apprenant, l'appareil et l'heure. Deux boutons injectent un extrait de démonstration,
avec puis sans filigrane, pour comparer les deux verdicts.

> **Limites.** Une retranscription manuelle, un passage par OCR, ou une normalisation Unicode
> (`String.normalize`, certains éditeurs, la plupart des CMS) détruisent l'empreinte. Un
> adversaire informé peut la retirer en une ligne de code. Ce mécanisme vise le partage
> opportuniste — capture de texte, transfert par email, dépôt sur un drive — pas l'adversaire
> expert.

### 7.3 Blocage des gestes de copie

Sur les écrans de contenu : menu contextuel, sélection de texte, glisser-déposer, `Ctrl/Cmd+C`,
`Ctrl/Cmd+X`, `Ctrl/Cmd+S`, `Ctrl/Cmd+U`, `Ctrl/Cmd+P`, `F12` et `Ctrl+Shift+I/J/C` sont
interceptés. `window.print` est remplacé et une règle `@media print` neutralise l'impression et
l'export PDF. Si une copie parvient tout de même à s'exécuter, le presse-papiers reçoit un
**avertissement contenant l'empreinte de traçabilité** à la place du contenu.

> **Limites.** Tout cela s'exécute dans le navigateur de l'apprenant, donc sous son contrôle :
> désactiver JavaScript, lire le HTML via les outils de développement ou récupérer la réponse
> réseau contourne l'ensemble. C'est un frein, pas une barrière. Le blocage véritable suppose
> l'application desktop (phase 2).

### 7.4 Masquage automatique

Le contenu est remplacé par un écran de garde flouté dès que la fenêtre perd le focus plus de
700 ms ou que l'onglet passe en arrière-plan (`visibilitychange`), ainsi que pendant une tentative
d'impression. Un écart anormal entre `outerWidth/innerWidth` fait suspecter des outils de
développement ancrés et déclenche un événement critique.

> **Limites.** Un navigateur **ne peut pas** détecter une capture d'écran système ni un logiciel
> d'enregistrement (OBS, Bandicam). La touche `PrintScreen` n'est détectable que lorsque la page
> a le focus, et l'événement ne permet pas d'empêcher la capture — seulement de la journaliser et
> d'avertir l'utilisateur. La détection d'outils de développement est heuristique et se contourne
> trivialement (fenêtre détachée).

### 7.5 Ce qui est structurellement impossible sur le web

| Mesure du brief | Web | Desktop Electron | Mobile React Native |
|---|---|---|---|
| Blocage matériel des captures d'écran | **Impossible** | `win.setContentProtection(true)` | Android `FLAG_SECURE` ; iOS : détection seule |
| Détection d'enregistrement d'écran | Impossible | Best-effort : inspection des processus | iOS `UIScreen.capturedDidChange` |
| Photo de l'écran par un tiers | Impossible | Impossible | Impossible |
| Blocage copie / impression | Oui (contournable) | Oui | Oui |
| Filigranes visible et invisible | Oui | Oui | Oui |

C'est la raison pour laquelle le brief réserve l'accès au contenu aux applications desktop et
mobile. **Cette démonstration web est une vitrine fonctionnelle, pas le canal de diffusion
recommandé.**

---

## 8. Sessions et anti-partage

- **Session unique** : toute nouvelle connexion révoque les sessions actives précédentes
  (`revokeOtherSessions`). La révocation est propagée aux autres onglets en temps réel via
  l'événement `storage` — ouvrez deux onglets et reconnectez-vous dans le second pour voir le
  premier être déconnecté.
- **Trois appareils maximum** par compte, identifiés par une empreinte matérielle best-effort
  (plateforme, agent utilisateur, langue, fuseau, résolution, cœurs CPU).
- **Jetons d'accès de 15 minutes**, conformément au brief ; les sessions expirées et révoquées
  restent visibles dans l'espace compte avec leur motif.
- **Journal de sécurité** : chaque événement est horodaté, classé par gravité, traduit dans les
  trois langues et agrégé en score de risque.

> **Limite majeure et assumée.** Dans cette démonstration statique, ces règles sont appliquées
> **par le client**, donc réinitialisables en vidant le stockage du navigateur. En production, la
> session unique et la limite d'appareils doivent être arbitrées par le serveur.

---

## 9. Espace enseignant : comptes et suivi

L'espace `/admin` est protégé par un **mot de passe** choisi à la première ouverture, puis
redemandé à chaque rechargement de la page. Il donne accès à la création de comptes apprenants
et au suivi de leur progression.

> ### Ce que ce mot de passe protège, et ce qu'il ne protège pas
>
> Le site est publié en **pages statiques** : aucun serveur ne vérifie ce mot de passe. Le
> condensé SHA-256 salé est calculé et comparé dans le navigateur, et il est lisible dans le
> stockage local. Ce verrou empêche donc une ouverture accidentelle ou opportuniste de la page —
> pas un examen déterminé. **Ce n'est pas une authentification.** Celle-ci suppose le back-end
> Fastify décrit dans le brief : Argon2id côté serveur, jetons signés, contrôle d'accès sur
> chaque requête. L'interface le dit à l'utilisateur au lieu de le laisser croire l'inverse.

### Créer un compte

Un compte se crée avec **un prénom, un nom facultatif, une adresse électronique et un mot de
passe**. Le mot de passe est pré-rempli par une proposition dictable (`nuage-cedre-26`), que
l'enseignant garde ou remplace.

Le **prénom est obligatoire** : c'est lui qui apparaît dans le corps des leçons (§5.1). Il n'est
donc pas un simple libellé d'affichage.

> **Le mot de passe apprenant est vérifié dans le navigateur.** Son condensé SHA-256 salé voyage
> dans l'invitation, faute de serveur pour l'héberger. Il empêche un camarade d'ouvrir le compte
> de quelqu'un d'autre avec sa seule adresse ; il ne protège pas le contenu contre le titulaire
> du compte, et il reste attaquable hors ligne.

### Faire voyager le compte, sans serveur

Comme il n'y a pas de base de données partagée, un compte créé par l'enseignant doit **voyager
jusqu'à l'apprenant**, et sa progression doit **revenir**. Deux objets encodés assurent ce trajet.

| Objet | Sens | Contenu | Où l'utiliser |
|---|---|---|---|
| **Invitation** | enseignant → apprenant | code d'inscription, prénom, nom, adresse, niveau visé, condensé du mot de passe | collée sur l'écran de connexion |
| **Remontée de progression** | apprenant → enseignant | code, prénom, étapes terminées, meilleurs scores de quiz, nombre d'appareils, score de risque | collée dans l'espace de pilotage |

Le **code d'inscription** (`LUM-4K7P-2XQF`) est la clé de rapprochement. Son alphabet exclut
`O`, `0`, `I` et `1` pour qu'il puisse se dicter au téléphone sans ambiguïté. Il identifie, il ne
protège pas : ce n'est pas un secret.

Le parcours complet, vérifié de bout en bout par un test de navigation :

1. l'enseignant crée le compte, note le mot de passe et copie l'invitation ;
2. l'apprenant la colle à la connexion — prénom, adresse et code sont renseignés ;
3. il saisit le mot de passe reçu ; une saisie erronée est refusée et journalisée ;
4. l'apprenant travaille ; sa progression reste sur son appareil ;
5. depuis **« Appareils & sessions »**, il établit son relevé et le transmet ;
6. l'enseignant l'importe : la ligne de suivi se met à jour.

Sans compte créé par un enseignant, la démonstration publique reste ouverte : n'importe quelle
adresse et n'importe quel mot de passe d'au moins huit caractères y donnent accès.

Un import plus ancien que celui déjà connu est ignoré, de sorte qu'un doublon ne fasse jamais
reculer le suivi. Les comptes s'archivent sans se supprimer, et un compte archivé libère son
adresse électronique.

### Ce que l'espace de pilotage affiche

Progression par apprenant, moyenne des quiz, nombre de quiz réussis, dernière activité, score de
risque issu du journal de sécurité, et le vérificateur d'empreinte qui remonte d'un extrait fuité
jusqu'à l'apprenant, l'appareil et l'heure de consultation.

---

## 10. Architecture et design

Monorepo pnpm, TypeScript strict partout (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`,
`verbatimModuleSyntax`).

```
confidential-lms/
├── packages/core/          # Logique métier pure, sans dépendance UI — 111 tests unitaires
│   └── src/
│       ├── locale.ts       # Locale, LocalizedText, résolution avec repli
│       ├── types.ts        # Modèle de données complet, entièrement localisé
│       ├── quiz.ts         # Correction, crédit partiel, tentatives, meilleur score
│       ├── progress.ts     # Progression par module/cours, reprise, voisinage de leçon
│       ├── watermark.ts    # Empreinte invisible par apprenant (encodage base 4)
│       ├── personalise.ts  # Jeton {prenom}, choix stable de variante
│       ├── gamification.ts # Points, niveaux, séries, badges
│       ├── device.ts       # Empreinte d'appareil, limite de 3, session unique
│       ├── security.ts     # Catalogue d'événements, gravités, score de risque
│       └── roster.ts       # Comptes apprenants, invitations, remontées, verrou admin
└── apps/web/               # Application React 19 + Vite, déployée sur Pages
    └── src/
        ├── content/        # 30 cours (A1 → C2), 30 quiz, glossaire, 7 figures SVG
        ├── i18n/           # Dictionnaire trilingue unique + hook useI18n
        ├── protection/     # Watermark, ProtectedText, Shield, useProtectedScreen
        ├── state/          # Contexte applicatif, persistance, session inter-onglets
        ├── components/     # Coque, glossaire, sélecteur de langue, rendu des blocs
        ├── components/     # Coquille, catalogue, contenu de leçon, schémas manipulables, gamification
        ├── feedback/       # Bruitages synthétisés, confettis, son au clic
        ├── pages/          # Connexion, tableau de bord, catalogue, cours, leçon, quiz, compte, sécurité, admin
        └── styles/         # Design system « bleu océan », thèmes clair et sombre
```

### Le thème « bleu océan »

Trois familles de surfaces, déclarées en variables CSS :

- `bg` / `panel` : la surface courante, claire ou sombre selon le thème choisi ;
- `deep` : un bleu profond **identique dans les deux thèmes**, qui porte les titres en blanc —
  barre latérale, bandeau de page, en-tête de leçon, écran de connexion. C'est ce qui garantit
  que les titres ressortent, y compris en mode clair ;
- `accent` : l'azur de surface, réservé aux actions, aux repères et aux mots du glossaire.

Aucune dépendance de rendu tierce : pas de framework CSS, pas de librairie de composants, pas
d'icônes externes, pas de police distante — la pile système est enrichie des faces CJK pour que
le chinois s'affiche correctement sans requête réseau.

---

## 11. Feuille de route

**Phase 1 restante — backend.** API Fastify + PostgreSQL/Prisma reprenant `packages/core`,
argon2id, JWT 15 min + refresh tokens révocables, filigranage du texte **côté serveur**, rate
limiting, et espace admin Next.js avec builder de cours.

**Phase 2 — desktop Electron.** `setContentProtection(true)`, `contextIsolation`, DevTools
désactivés en production, détection des enregistreurs d'écran, lecteur vidéo HLS chiffré AES-128.

**Phase 3 — mobile React Native.** `FLAG_SECURE` sur Android, détection de capture et
d'enregistrement sur iOS, détection root/jailbreak.

**Phase 4 — finitions.** Alertes admin, tableaux de bord de cohorte, et exécution de la checklist
manuelle sur les quatre systèmes.

---

## 12. Couverture du brief

| Exigence | État |
|---|---|
| §4.1 Protections desktop | Portées au web dans la limite du possible ; Electron en phase 2 |
| §4.2 Protections mobile | Phase 3 |
| §4.3 Marquage nominatif du contenu + empreinte invisible par apprenant | ✅ (filigrane en mosaïque retiré, voir §5.1) |
| §4.4 Session unique, 3 appareils, journal de sécurité | ✅ (arbitré client dans la démo) |
| §4.5 URLs signées, HLS chiffré, rate limiting | Phase 1/2 — aucun média n'est servi ici |
| §5 Quiz notés, seuils, tentatives, corrections | ✅ 30 quiz, 192 questions |
| §5 Progression par cours/module, reprise | ✅ |
| §5 Comptes apprenants créés par l'enseignant | ✅ (invitation + remontée, sans serveur — voir §9) |
| §5 Tableau de bord admin et journal | ✅ (alimenté par les remontées importées) |
| §5 Mot de passe administrateur | ⚠️ verrou d'affichage, pas une authentification — voir §9 |
| §5 Mot de passe apprenant défini par l'enseignant | ⚠️ vérifié côté client — voir §9 |
| §5 Gamification : points, niveaux, séries, badges | ✅ dérivée de la progression réelle (§5.4) |
| §5 Bruitages, appuis et célébrations | ✅ synthétisés, coupables d'un clic (§6.2) |
| §7 Accès fermé par identifiant et mot de passe | ⚠️ vérifié côté client — voir §9 |
| §7 Contrastes conformes WCAG AA dans les deux thèmes | ✅ vérifiés par calcul (§6.1) |
| §5 Contenu interactif (schémas manipulables) | ✅ 73 schémas, neuf familles, au moins un par cours (§5.1) |
| §5 Builder de cours en glisser-déposer | Phase 1 — le contenu est versionné en TypeScript typé |
| §6 Modèle de données | ✅ intégralement typé dans `packages/core/src/types.ts` |
| §8 TypeScript strict, tests sur sessions et protections | ✅ 125 tests (111 métier + 14 applicatifs) |
| §8 README documentant honnêtement les limites | ✅ ce document |
| §8 Budget services tiers = 0 € | ✅ aucune dépendance payante, aucun appel réseau externe |

---

## 13. Démarrage

```bash
pnpm install
pnpm dev          # serveur de développement Vite
pnpm test         # 60 tests : logique métier, protections et cohérence trilingue
pnpm typecheck    # TypeScript strict sur les deux paquets
pnpm build        # build de production dans apps/web/dist
```

Node 20+ et pnpm 10 requis.

### Déploiement

`.github/workflows/deploy.yml` s'exécute à chaque push sur `main` : vérification des types, tests,
build avec `VITE_BASE=/<nom-du-dépôt>/`, puis publication du contenu de `apps/web/dist` sur la
branche **`gh-pages`** (avec `404.html` en filet de sécurité SPA et `.nojekyll`).

Prérequis côté dépôt, à faire une fois : **Settings → Pages → Source = « Deploy from a branch »,
branche `gh-pages`, dossier `/ (root)`**.

### Vérification manuelle des protections

1. Se connecter avec `Bob` / `Bob12345+` — sans compte, la plateforme reste fermée.
2. Ouvrir une leçon → votre prénom apparaît dans le texte, à l'ouverture, au milieu et à la fin.
3. Manipuler un schéma (roue, matrice, frise) → au clavier aussi : `Tab` puis `Entrée`.
4. Cliquer sur un mot souligné → la définition apparaît en français, anglais et chinois.
5. Basculer FR / EN / ZH → interface **et** contenu changent, les exemples restent en français.
6. Clic droit → menu bloqué ; `Ctrl+C` → notification et entrée au journal.
7. `Ctrl+P` → impression neutralisée, événement critique enregistré.
8. Changer d'onglet → le contenu est masqué par l'écran de garde.
9. Terminer une leçon → arpège, confettis, points crédités, badge « premier pas » annoncé.
10. Couper le son depuis la barre supérieure → le choix survit au rechargement.
11. Se connecter en `SuperBob` → l'espace de pilotage apparaît dans le menu.
12. Ouvrir un second onglet et s'y reconnecter → le premier onglet est déconnecté.

---

## 14. Confidentialité de la démonstration

Cette application ne communique avec aucun serveur. Les informations saisies à la connexion
(prénom, adresse) restent dans le `localStorage` de votre navigateur, servent à personnaliser les
leçons et à composer l'empreinte invisible, et disparaissent avec le bouton **« Tout effacer »**
de l'espace compte. Le numéro de téléphone n'est plus demandé : il ne servait qu'au filigrane en
mosaïque, retiré.
Les comptes apprenants créés dans l'espace enseignant y résident également : « Tout effacer » les
supprime aussi, et le prévient explicitement avant de le faire.
