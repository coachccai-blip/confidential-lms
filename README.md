# Magmatica — LMS à contenu protégé

Plateforme de formation en ligne dont le contenu est **filigrané par apprenant** et dont les
gestes de copie sont **bloqués et journalisés**. Le parcours de démonstration est un cours
certifiant complet sur **les volcans** : 4 modules, 12 leçons illustrées, 4 quiz notés dont un
examen final.

**➜ Démonstration en ligne : https://coachccai-blip.github.io/confidential-lms/**

Connexion libre : renseignez n'importe quel email et téléphone valides — ils deviennent votre
filigrane. Une adresse commençant par `admin@` ouvre en plus l'espace d'administration.

---

## 1. Ce que contient ce dépôt — et ce qu'il ne contient pas

Le [brief initial](#8-couverture-du-brief) décrit un produit à quatre applications : backend
Fastify + PostgreSQL, espace admin Next.js, application desktop Electron et application mobile
React Native, avec vidéos HLS chiffrées en AES-128.

**GitHub Pages ne sert que des fichiers statiques** : aucun processus serveur, aucune base de
données, aucun binaire desktop ou mobile n'y est exécutable. Ce dépôt livre donc la partie du
produit qui a un sens sur cette cible, sans en masquer les limites :

| Livré ici | Statut |
|---|---|
| Application apprenant complète (catalogue, lecteur, quiz, progression, compte) | ✅ Fonctionnel |
| Toutes les protections réalisables dans un navigateur | ✅ Fonctionnel |
| Filigrane visible mobile + filigrane invisible par apprenant | ✅ Fonctionnel |
| Session unique, limite de 3 appareils, journal de sécurité | ✅ Fonctionnel, **simulé côté client** |
| Espace admin : suivi apprenants, vérificateur d'empreinte, matrice de protection | ✅ Fonctionnel, données de démonstration |
| Cours « Les volcans » et ses 37 questions de quiz | ✅ Contenu réel et complet |
| Backend Fastify + PostgreSQL + Prisma, auth argon2, JWT/refresh | ❌ Phase 1 restante — voir [§7](#7-feuille-de-route) |
| Application Electron (`setContentProtection`) | ❌ Phase 2 |
| Application React Native (`FLAG_SECURE`) | ❌ Phase 3 |
| Pipeline vidéo HLS chiffré AES-128 | ❌ Phase 2 |

> **Important.** L'authentification et les sessions de cette démonstration sont **simulées dans
> le navigateur** (`localStorage`). Aucun mot de passe n'est vérifié, aucune donnée ne quitte
> votre poste. C'est un choix assumé pour rendre les mécanismes de protection *observables* sans
> serveur ; en production, tout ce qui est décrit au [§4](#4-sessions-et-anti-partage) doit être
> arbitré côté serveur, un client ne pouvant jamais s'auto-contrôler.

---

## 2. Le cours de démonstration

**« Les volcans — comprendre la Terre qui gronde »** · niveau intermédiaire · ≈ 2 h 55.

| Module | Leçons | Quiz |
|---|---|---|
| 1 · Origines du volcanisme | Définitions et chiffres clés · Structure interne et fusion partielle · Tectonique des plaques | 8 questions, seuil 70 % |
| 2 · Magmas et édifices | Viscosité et gaz · Anatomie d'un volcan · Typologie des édifices | 8 questions, seuil 70 % |
| 3 · Éruptions et aléas | Styles éruptifs et VEI · Aléas et létalité réelle · Six éruptions historiques | 9 questions, seuil 70 % |
| 4 · Surveiller, prévoir, vivre avec | Instrumentation · Alerte et évacuation · Bénéfices et climat | **Examen final** : 12 questions, seuil 80 %, 2 tentatives |

Le contenu est rédigé, structuré en blocs typés (paragraphes, encadrés, tableaux, citations,
listes de définitions) et illustré par **dix schémas SVG écrits à la main**, sans dépendance
externe et adaptés au thème clair comme au thème sombre.

Le moteur de quiz gère les questions à réponse unique, à réponses multiples et vrai/faux, avec
seuil de passage configurable, nombre de tentatives limité, crédit partiel optionnel, correction
commentée question par question et historique des tentatives.

---

## 3. Protections implémentées — et leurs limites réelles

Le principe directeur du brief est conservé : la protection absolue n'existe pas, l'objectif est
la **dissuasion maximale et la traçabilité**. Chaque mesure ci-dessous est accompagnée de ce
qu'elle ne fait pas.

### 3.1 Filigrane visible

Un calque affiche en mosaïque `email · téléphone · horodatage UTC`, en diagonale, par-dessus le
contenu et par-dessus les schémas. La position et l'angle changent **toutes les 30 secondes**
(`watermarkPositionAt`), ce qui empêche de définir un recadrage fixe qui l'éliminerait.

> **Limite.** Le filigrane reste visible sur une photo prise avec un téléphone — c'est
> précisément son rôle. Un attaquant peut en revanche masquer la zone concernée par retouche
> s'il ne copie qu'un court extrait entre deux motifs.

### 3.2 Filigrane invisible dans le texte

Chaque chaîne de texte servie est marquée par des **caractères de largeur nulle** encodant
l'identifiant de l'apprenant, celui de l'appareil et l'heure de consultation. L'encodage utilise
quatre symboles invisibles (2 bits par caractère) et l'empreinte est **répétée tous les 24 mots**,
de sorte qu'un extrait de quelques lignes suffit à identifier la source. Le rendu visuel est
strictement identique : `stripInvisible(marqué) === original` est vérifié par un test unitaire.

L'espace admin embarque un **vérificateur d'empreinte** : on y colle un extrait suspect, il en
extrait l'apprenant, l'appareil et l'heure.

> **Limites.** Une retranscription manuelle, un passage par OCR, ou une normalisation Unicode
> (`String.normalize`, certains éditeurs, la plupart des CMS) détruisent l'empreinte. Un
> adversaire informé peut la retirer en une ligne de code. Ce mécanisme vise le partage
> opportuniste — capture de texte, transfert par email, dépôt sur un drive — pas l'adversaire
> expert.

### 3.3 Blocage des gestes de copie

Sur les écrans de contenu : menu contextuel, sélection de texte, glisser-déposer, `Ctrl/Cmd+C`,
`Ctrl/Cmd+X`, `Ctrl/Cmd+S`, `Ctrl/Cmd+U`, `Ctrl/Cmd+P`, `F12` et `Ctrl+Shift+I/J/C` sont
interceptés. `window.print` est remplacé et une règle `@media print` neutralise l'impression et
l'export PDF. Si une copie parvient tout de même à s'exécuter, le presse-papiers reçoit un
**avertissement contenant l'empreinte de traçabilité** à la place du contenu.

> **Limites.** Tout cela s'exécute dans le navigateur de l'apprenant, donc sous son contrôle :
> désactiver JavaScript, lire le HTML via les outils de développement ou récupérer la réponse
> réseau contourne l'ensemble. C'est un frein, pas une barrière. Le blocage véritable suppose
> l'application desktop (phase 2).

### 3.4 Masquage automatique

Le contenu est remplacé par un écran de garde flouté dès que la fenêtre perd le focus plus de
700 ms ou que l'onglet passe en arrière-plan (`visibilitychange`), ainsi que pendant une tentative
d'impression. Un écart anormal entre `outerWidth/innerWidth` fait suspecter des outils de
développement ancrés et déclenche un événement critique.

> **Limites.** Un navigateur **ne peut pas** détecter une capture d'écran système ni un logiciel
> d'enregistrement (OBS, Bandicam). La touche `PrintScreen` n'est détectable que lorsque la page
> a le focus, et l'événement ne permet pas d'empêcher la capture — seulement de la journaliser et
> d'avertir l'utilisateur. La détection d'outils de développement est heuristique et se contourne
> trivialement (fenêtre détachée).

### 3.5 Ce qui est structurellement impossible sur le web

| Mesure du brief | Web | Desktop Electron | Mobile React Native |
|---|---|---|---|
| Blocage matériel des captures d'écran | **Impossible** | `win.setContentProtection(true)` (WDA_EXCLUDEFROMCAPTURE / macOS) | Android `FLAG_SECURE` ; iOS : détection seule |
| Détection d'enregistrement d'écran | Impossible | Best-effort : inspection des processus | iOS `UIScreen.capturedDidChange` |
| Photo de l'écran par un tiers | Impossible | Impossible | Impossible |
| Blocage copie / impression | Oui (contournable) | Oui | Oui |
| Filigranes visible et invisible | Oui | Oui | Oui |

C'est la raison pour laquelle le brief réserve l'accès au contenu aux applications desktop et
mobile. **Cette démonstration web est une vitrine fonctionnelle, pas le canal de diffusion
recommandé.**

---

## 4. Sessions et anti-partage

- **Session unique** : toute nouvelle connexion révoque les sessions actives précédentes
  (`revokeOtherSessions`). La révocation est propagée aux autres onglets en temps réel via
  l'événement `storage` — ouvrez deux onglets et reconnectez-vous dans le second pour voir le
  premier être déconnecté.
- **Trois appareils maximum** par compte, identifiés par une empreinte matérielle best-effort
  (plateforme, agent utilisateur, langue, fuseau, résolution, cœurs CPU). Le quatrième appareil
  est refusé avec invitation à en retirer un depuis l'espace compte.
- **Jetons d'accès de 15 minutes**, conformément au brief ; les sessions expirées et révoquées
  restent visibles dans l'espace compte avec leur motif.
- **Journal de sécurité** : chaque événement (copie bloquée, impression, capture, devtools,
  révocation, appareil retiré…) est horodaté, classé par gravité et agrégé en score de risque.

> **Limite majeure et assumée.** Dans cette démonstration statique, ces règles sont appliquées
> **par le client**, donc réinitialisables en vidant le stockage du navigateur. En production, la
> session unique et la limite d'appareils doivent être arbitrées par le serveur (refresh tokens
> révocables en base, WebSocket de déconnexion) — le client ne fait alors qu'afficher la
> décision.

---

## 5. Architecture

Monorepo pnpm, TypeScript strict partout (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`,
`verbatimModuleSyntax`).

```
confidential-lms/
├── packages/core/          # Logique métier pure, sans dépendance UI — 46 tests unitaires
│   └── src/
│       ├── types.ts        # Modèle de données complet du brief (§6)
│       ├── quiz.ts         # Correction, crédit partiel, tentatives, meilleur score
│       ├── progress.ts     # Progression par module/cours, reprise, voisinage de leçon
│       ├── watermark.ts    # Filigranes visible (positions) et invisible (encodage base 4)
│       ├── device.ts       # Empreinte d'appareil, limite de 3, session unique
│       └── security.ts     # Catalogue d'événements, gravités, score de risque
└── apps/web/               # Application React 19 + Vite, déployée sur Pages
    └── src/
        ├── content/        # Le cours : 4 modules, quiz, 10 figures SVG
        ├── protection/     # Watermark, ProtectedText, Shield, useContentProtection
        ├── state/          # Contexte applicatif, persistance, session inter-onglets
        ├── components/     # Coque, icônes, rendu des blocs de leçon
        ├── pages/          # Connexion, tableau de bord, cours, leçon, quiz, compte, sécurité, admin
        └── styles/         # Design system : tokens, thèmes clair/sombre, composants
```

Le découpage n'est pas cosmétique : `packages/core` ne dépend ni de React ni du DOM, ce qui
permet de le réutiliser tel quel dans l'application Electron, l'application React Native et
l'API Fastify des phases suivantes.

### Choix techniques notables

- **Aucune dépendance de rendu tierce** : pas de framework CSS, pas de librairie de composants,
  pas d'icônes externes, pas de police distante. Le design system tient en six feuilles de style
  à variables, les icônes et les schémas sont des SVG écrits à la main. Le bundle final fait
  ~398 ko de JS et ~32 ko de CSS.
- **Routage par hash** (`HashRouter`), qui évite toute réécriture d'URL côté serveur — nécessaire
  sur GitHub Pages ; un `404.html` est tout de même généré en filet de sécurité.
- **Thème clair / sombre** piloté par `data-theme`, sombre par défaut, avec des tokens redéfinis
  intégralement pour chaque thème (aucune couleur codée en dur dans les composants).

---

## 6. Démarrage

```bash
pnpm install
pnpm dev          # serveur de développement Vite
pnpm test         # 46 tests unitaires sur la logique métier et les protections
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

### Tests des protections (vérification manuelle)

Checklist reproductible sur la démonstration en ligne :

1. Ouvrir une leçon → le filigrane affiche vos email et téléphone, et se déplace après 30 s.
2. Clic droit → menu bloqué ; `Ctrl+C` → notification « Copie bloquée » et entrée au journal.
3. `Ctrl+P` → impression neutralisée, événement critique enregistré.
4. Changer d'onglet → le contenu est masqué par l'écran de garde.
5. Espace admin → « Insérer un extrait filigrané d'exemple » → l'empreinte identifie l'apprenant.
6. Ouvrir un second onglet et s'y reconnecter → le premier onglet est déconnecté (session unique).
7. Journal de sécurité → tous les événements ci-dessus sont horodatés et classés.

---

## 7. Feuille de route

**Phase 1 restante — backend.** API Fastify + PostgreSQL/Prisma reprenant `packages/core`,
argon2id pour les mots de passe, JWT 15 min + refresh tokens révocables en base, filigranage du
texte **côté serveur** (aucun contenu brut ne doit transiter), rate limiting sur les endpoints de
contenu, et espace admin Next.js avec builder de cours en glisser-déposer.

**Phase 2 — desktop Electron.** `setContentProtection(true)`, `contextIsolation`, DevTools
désactivés en production, refus de démarrage en mode debug, détection des enregistreurs d'écran,
et lecteur vidéo HLS chiffré AES-128 dont les clés sont servies par URL signée à 60 s.

**Phase 3 — mobile React Native.** `FLAG_SECURE` sur Android, détection de capture et
d'enregistrement sur iOS, détection root/jailbreak, parité fonctionnelle avec l'app desktop.

**Phase 4 — finitions.** Alertes admin (connexions depuis des IP très éloignées en peu de temps),
tableaux de bord de cohorte, et exécution de la checklist manuelle sur les quatre systèmes.

---

## 8. Couverture du brief

| Exigence | État |
|---|---|
| §4.1 Protections desktop | Portées au web dans la limite du possible ; Electron en phase 2 |
| §4.2 Protections mobile | Phase 3 |
| §4.3 Filigrane visible mobile + invisible par apprenant | ✅ |
| §4.4 Session unique, 3 appareils, journal de sécurité | ✅ (arbitré client dans la démo) |
| §4.5 URLs signées, HLS chiffré, rate limiting | Phase 1/2 — aucun média n'est servi ici |
| §5 Quiz notés, seuils, tentatives, corrections | ✅ |
| §5 Progression par cours/module, reprise | ✅ |
| §5 Tableau de bord admin et journal | ✅ (données de démonstration) |
| §5 Builder de cours en glisser-déposer | Phase 1 — le contenu est versionné en TypeScript typé |
| §6 Modèle de données | ✅ intégralement typé dans `packages/core/src/types.ts` |
| §8 TypeScript strict, tests sur sessions et protections | ✅ 46 tests |
| §8 README documentant honnêtement les limites | ✅ ce document |
| §8 Budget services tiers = 0 € | ✅ aucune dépendance payante, aucun appel réseau externe |

---

## 9. Confidentialité de la démonstration

Cette application ne communique avec aucun serveur. Les informations saisies à la connexion
(nom, email, téléphone) restent dans le `localStorage` de votre navigateur, servent uniquement à
générer les filigranes, et disparaissent avec le bouton **« Tout effacer »** de l'espace compte.
