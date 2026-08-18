# Lumière — LMS de français à contenu protégé

Plateforme de cours de français dont le contenu est **trilingue** (français, anglais, chinois),
**filigrané par apprenant** et dont les gestes de copie sont **bloqués et journalisés**. Six
parcours couvrent la grammaire, la conjugaison et la préparation aux quatre diplômes DELF et DALF.

**➜ Démonstration en ligne : https://coachccai-blip.github.io/confidential-lms/**

Connexion libre : renseignez n'importe quel email et téléphone valides — ils deviennent votre
filigrane. Une adresse commençant par `admin@` ouvre en plus l'espace d'administration.

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
| Application apprenant complète (catalogue, lecteur, quiz, progression, compte) | ✅ Fonctionnel |
| Interface **et** contenu en français, anglais et chinois | ✅ Fonctionnel |
| Glossaire : mots difficiles cliquables, définis dans les trois langues | ✅ 49 entrées |
| Six parcours de français, 24 leçons, 6 quiz notés (48 questions) | ✅ Contenu réel et complet |
| Toutes les protections réalisables dans un navigateur | ✅ Fonctionnel |
| Filigrane visible mobile + filigrane invisible par apprenant | ✅ Fonctionnel |
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

Six parcours, du seuil d'autonomie à la maîtrise, couvrant les niveaux B1 à C2 du CECRL.

| Catégorie | Parcours | Niveau | Contenu |
|---|---|---|---|
| Grammaire | Grammaire française essentielle | B1 | Genre des noms · accord du participe passé · pronoms relatifs · connecteurs logiques |
| Conjugaison | Les temps qui comptent | B1 | Imparfait vs passé composé · plus-que-parfait et concordance · futur et conditionnel · subjonctif |
| DELF B1 | Préparation au DELF B1 | B1 | Format et barème · méthode des compréhensions · production écrite · production orale |
| DELF B2 | Préparation au DELF B2 | B2 | Essai argumenté · lettre formelle · repérage de l'implicite · monologue et débat |
| DALF C1 | Préparation au DALF C1 | C1 | Lecture croisée des documents · rédaction de la synthèse · exposé sur dossier · registre soutenu |
| DALF C2 | Préparation au DALF C2 | C2 | Compte rendu oral · reformulation avancée · article structuré · style, ironie, implicite |

Chaque parcours comprend **4 leçons** et **1 quiz noté** (8 questions, seuil 70 %, trois
tentatives, crédit partiel, correction commentée question par question).

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

## 5. Protections implémentées — et leurs limites réelles

Le principe directeur du brief est conservé : la protection absolue n'existe pas, l'objectif est
la **dissuasion maximale et la traçabilité**. Chaque mesure ci-dessous est accompagnée de ce
qu'elle ne fait pas.

### 5.1 Filigrane visible

Un calque affiche en mosaïque `email · téléphone · horodatage UTC`, en diagonale, par-dessus le
contenu et par-dessus les schémas. La position et l'angle changent **toutes les 30 secondes**
(`watermarkPositionAt`), ce qui empêche de définir un recadrage fixe qui l'éliminerait.

> **Limite.** Le filigrane reste visible sur une photo prise avec un téléphone — c'est
> précisément son rôle. Un attaquant peut en revanche masquer la zone concernée par retouche
> s'il ne copie qu'un court extrait entre deux motifs.

### 5.2 Filigrane invisible dans le texte

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

### 5.3 Blocage des gestes de copie

Sur les écrans de contenu : menu contextuel, sélection de texte, glisser-déposer, `Ctrl/Cmd+C`,
`Ctrl/Cmd+X`, `Ctrl/Cmd+S`, `Ctrl/Cmd+U`, `Ctrl/Cmd+P`, `F12` et `Ctrl+Shift+I/J/C` sont
interceptés. `window.print` est remplacé et une règle `@media print` neutralise l'impression et
l'export PDF. Si une copie parvient tout de même à s'exécuter, le presse-papiers reçoit un
**avertissement contenant l'empreinte de traçabilité** à la place du contenu.

> **Limites.** Tout cela s'exécute dans le navigateur de l'apprenant, donc sous son contrôle :
> désactiver JavaScript, lire le HTML via les outils de développement ou récupérer la réponse
> réseau contourne l'ensemble. C'est un frein, pas une barrière. Le blocage véritable suppose
> l'application desktop (phase 2).

### 5.4 Masquage automatique

Le contenu est remplacé par un écran de garde flouté dès que la fenêtre perd le focus plus de
700 ms ou que l'onglet passe en arrière-plan (`visibilitychange`), ainsi que pendant une tentative
d'impression. Un écart anormal entre `outerWidth/innerWidth` fait suspecter des outils de
développement ancrés et déclenche un événement critique.

> **Limites.** Un navigateur **ne peut pas** détecter une capture d'écran système ni un logiciel
> d'enregistrement (OBS, Bandicam). La touche `PrintScreen` n'est détectable que lorsque la page
> a le focus, et l'événement ne permet pas d'empêcher la capture — seulement de la journaliser et
> d'avertir l'utilisateur. La détection d'outils de développement est heuristique et se contourne
> trivialement (fenêtre détachée).

### 5.5 Ce qui est structurellement impossible sur le web

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

## 6. Sessions et anti-partage

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

## 7. Architecture et design

Monorepo pnpm, TypeScript strict partout (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`,
`verbatimModuleSyntax`).

```
confidential-lms/
├── packages/core/          # Logique métier pure, sans dépendance UI — 51 tests unitaires
│   └── src/
│       ├── locale.ts       # Locale, LocalizedText, résolution avec repli
│       ├── types.ts        # Modèle de données complet, entièrement localisé
│       ├── quiz.ts         # Correction, crédit partiel, tentatives, meilleur score
│       ├── progress.ts     # Progression par module/cours, reprise, voisinage de leçon
│       ├── watermark.ts    # Filigranes visible (positions) et invisible (encodage base 4)
│       ├── device.ts       # Empreinte d'appareil, limite de 3, session unique
│       └── security.ts     # Catalogue d'événements, gravités, score de risque
└── apps/web/               # Application React 19 + Vite, déployée sur Pages
    └── src/
        ├── content/        # 6 parcours, 6 quiz, glossaire, 7 figures SVG
        ├── i18n/           # Dictionnaire trilingue unique + hook useI18n
        ├── protection/     # Watermark, ProtectedText, Shield, useProtectedScreen
        ├── state/          # Contexte applicatif, persistance, session inter-onglets
        ├── components/     # Coque, glossaire, sélecteur de langue, rendu des blocs
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

## 8. Feuille de route

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

## 9. Couverture du brief

| Exigence | État |
|---|---|
| §4.1 Protections desktop | Portées au web dans la limite du possible ; Electron en phase 2 |
| §4.2 Protections mobile | Phase 3 |
| §4.3 Filigrane visible mobile + invisible par apprenant | ✅ |
| §4.4 Session unique, 3 appareils, journal de sécurité | ✅ (arbitré client dans la démo) |
| §4.5 URLs signées, HLS chiffré, rate limiting | Phase 1/2 — aucun média n'est servi ici |
| §5 Quiz notés, seuils, tentatives, corrections | ✅ 6 quiz, 48 questions |
| §5 Progression par cours/module, reprise | ✅ |
| §5 Tableau de bord admin et journal | ✅ (données de démonstration) |
| §5 Builder de cours en glisser-déposer | Phase 1 — le contenu est versionné en TypeScript typé |
| §6 Modèle de données | ✅ intégralement typé dans `packages/core/src/types.ts` |
| §8 TypeScript strict, tests sur sessions et protections | ✅ 51 tests |
| §8 README documentant honnêtement les limites | ✅ ce document |
| §8 Budget services tiers = 0 € | ✅ aucune dépendance payante, aucun appel réseau externe |

---

## 10. Démarrage

```bash
pnpm install
pnpm dev          # serveur de développement Vite
pnpm test         # 51 tests unitaires sur la logique métier et les protections
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

1. Ouvrir une leçon → le filigrane affiche vos email et téléphone, et se déplace après 30 s.
2. Cliquer sur un mot souligné → la définition apparaît en français, anglais et chinois.
3. Basculer FR / EN / ZH → interface **et** contenu changent, les exemples restent en français.
4. Clic droit → menu bloqué ; `Ctrl+C` → notification et entrée au journal.
5. `Ctrl+P` → impression neutralisée, événement critique enregistré.
6. Changer d'onglet → le contenu est masqué par l'écran de garde.
7. Espace admin → « Insérer un extrait filigrané » → l'empreinte identifie l'apprenant.
8. Ouvrir un second onglet et s'y reconnecter → le premier onglet est déconnecté.

---

## 11. Confidentialité de la démonstration

Cette application ne communique avec aucun serveur. Les informations saisies à la connexion
(nom, email, téléphone) restent dans le `localStorage` de votre navigateur, servent uniquement à
générer les filigranes, et disparaissent avec le bouton **« Tout effacer »** de l'espace compte.
