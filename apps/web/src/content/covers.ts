/**
 * Vignettes de formation.
 *
 * Les images vivent dans `src/assets/covers/` et sont nommees d'apres le slug
 * du cours : `a1-premiers-mots.jpg` couvre le cours `a1-premiers-mots`. Le
 * rapprochement se fait ici, automatiquement — deposer un fichier suffit a le
 * voir apparaitre, sans toucher au code ni aux donnees de contenu.
 *
 * Passer par `import.meta.glob` plutot que par une liste ecrite a la main a
 * deux avantages : Vite empreinte les fichiers (donc le cache navigateur se
 * purge tout seul a chaque nouvelle version) et prefixe le chemin de base de
 * GitHub Pages, ce qu'une URL ecrite en dur ne ferait pas.
 *
 * Un cours sans vignette retombe sur son degrade de couleurs : le catalogue
 * reste coherent meme partiellement illustre.
 */
const files = import.meta.glob<string>('../assets/covers/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const bySlug = new Map<string, string>();
for (const [path, url] of Object.entries(files)) {
  const name = path.split('/').pop();
  if (!name) continue;
  bySlug.set(name.replace(/\.[^.]+$/, ''), url);
}

/** URL de la vignette d'un cours, ou `null` s'il n'en a pas encore. */
export function coverOf(slug: string): string | null {
  return bySlug.get(slug) ?? null;
}

/** Nombre de vignettes disponibles — utilise par les tests. */
export function coverCount(): number {
  return bySlug.size;
}
