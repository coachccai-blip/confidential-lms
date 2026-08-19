# Vignettes de formation

Déposez ici l'image de couverture d'un cours. **Le nom du fichier est le slug
du cours** — rien d'autre à faire : `covers.ts` la détecte au build, Vite
l'empreinte et la sert au bon chemin de base.

    a1-premiers-mots.jpg   → cours « Premiers mots, premières phrases »
    c2-humour.jpg          → cours « L'humour et les jeux de langue »

Extensions acceptées : `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`.
Les slugs disponibles sont ceux de `src/content/courses/*.ts`.

Un cours sans vignette retombe sur son dégradé de couleurs : le catalogue
reste cohérent même partiellement illustré.

## Cadrage

La carte affiche une bande de **132 px de haut** sur environ 320 px de large,
soit un rapport proche de 2,4:1, recadrée depuis le centre. Générez en 16:9 :
les bords haut et bas seront rognés, gardez donc le sujet centré.

Le **coin inférieur gauche** reçoit la lettre du niveau (« A1 ») en blanc.
Laissez-le vide.

## Poids

Visez moins de 200 Ko par image, en 800 à 1200 px de large. Au-delà, le
catalogue devient lent à afficher pour un gain invisible : la vignette n'est
jamais rendue à plus de 360 px de large.

## Les 36 slugs attendus

Un fichier par ligne, l'extension au choix. Cochez au fur et à mesure.

| Niveau | Slugs |
|---|---|
| A1 | `a1-premiers-mots` · `a1-present` · `a1-nommer` · `a1-quotidien` · `a1-sons` · `a1-comprendre` |
| A2 | `a2-raconter` · `a2-reperes` · `a2-decrire` · `a2-vie-pratique` · `a2-ecrire` · `a2-sante` |
| B1 | `grammaire` · `conjugaison` · `b1-pronoms` · `b1-discours` · `b1-actes` · `delf-b1` |
| B2 | `b2-demarches` · `b2-nuance` · `b2-presse` · `b2-professionnel` · `b2-relief` · `delf-b2` |
| C1 | `c1-academique` · `c1-debat` · `c1-lexique` · `c1-oral-rapide` · `c1-orthographe` · `dalf-c1` |
| C2 | `c2-litterature` · `c2-institutions` · `c2-stylistique` · `c2-traduction` · `c2-humour` · `dalf-c2` |

Attention aux trois slugs qui ne portent pas le préfixe de leur niveau :
`grammaire`, `conjugaison` (B1) et les quatre diplômes `delf-b1`, `delf-b2`,
`dalf-c1`, `dalf-c2`.
