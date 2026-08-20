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
    passwordHash: '38dc1fba51299f0f1834864abe9b1c8be75dff646930d0361d950cd4439388d4',
    passwordSalt: 'd45c4133db8713d7',
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
    passwordHash: '74a7c31b5a3bb77f967735718c0a0f97e3eac90adc440cbabee78b547cde6d74',
    passwordSalt: '653760ea8b6b7ecb',
    targetLevel: null,
    note: 'Compte de démonstration enseignant.',
    createdAt: CREATED_AT,
    archivedAt: null,
  },
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
