import type { LearnerAccount } from '@lms/core';

/* ------------------------------------------------------------------
   Comptes de démonstration.

   L'accès est fermé : sans compte, on n'entre pas. Ces deux-là sont
   donc livrés avec l'application, sinon un navigateur neuf n'aurait
   aucun moyen d'ouvrir la plateforme.

   Leur condensé est calculé une fois pour toutes, avec un sel fixe, et
   inscrit ici : `hashPassword(sel, mot de passe)` en SHA-256. Un test
   unitaire vérifie que ces valeurs correspondent bien aux mots de passe
   annoncés — si l'algorithme changeait, il échouerait.

   Ce sont des identifiants de démonstration, publiés dans le dépôt et
   affichés sur l'écran de connexion. Ils ne protègent rien : ils
   permettent de visiter. Une mise en production suppose le back-end
   décrit dans le README, où les comptes vivent côté serveur.
   ------------------------------------------------------------------ */

const CREATED_AT = '2026-01-01T00:00:00.000Z';

export const SEED_ACCOUNTS: readonly LearnerAccount[] = [
  {
    id: 'lrn_seed_bob',
    username: 'Bob',
    role: 'learner',
    code: 'LUM-BOB1-DEMO',
    firstName: 'Bob',
    lastName: '',
    email: 'bob@lumiere.demo',
    // Bob12345+
    passwordHash: '92ba77bee20bbb0fca7c1b5f0488751a6ae7493f9c5f4ddd18e264170078e13d',
    passwordSalt: 'a1b2c3d4e5f60718',
    targetLevel: 'A1',
    note: 'Compte de démonstration apprenant.',
    createdAt: CREATED_AT,
    archivedAt: null,
  },
  {
    id: 'lrn_seed_superbob',
    username: 'SuperBob',
    role: 'admin',
    code: 'LUM-SBOB-DEMO',
    firstName: 'SuperBob',
    lastName: '',
    email: 'superbob@lumiere.demo',
    // SuperBob12345+
    passwordHash: 'fae4287caaa6244ec4b14fd18a03da93fd9b48ebf9f44d03e05dabab711236bf',
    passwordSalt: '9f8e7d6c5b4a3210',
    targetLevel: null,
    note: 'Compte de démonstration enseignant.',
    createdAt: CREATED_AT,
    archivedAt: null,
  },
];

/** Ce que l'écran de connexion affiche, pour que la démonstration soit visitable. */
export const DEMO_CREDENTIALS = [
  { username: 'Bob', password: 'Bob12345+', role: 'learner' as const },
  { username: 'SuperBob', password: 'SuperBob12345+', role: 'admin' as const },
];

/**
 * Réinjecte les comptes livrés s'ils manquent. Un compte supprimé par
 * l'enseignant depuis son espace ne doit pas réapparaître : seuls les
 * identifiants absents sont ajoutés.
 */
export function withSeedAccounts(learners: readonly LearnerAccount[]): readonly LearnerAccount[] {
  const known = new Set(learners.map((learner) => learner.id));
  const missing = SEED_ACCOUNTS.filter((account) => !known.has(account.id));
  return missing.length === 0 ? learners : [...learners, ...missing];
}
