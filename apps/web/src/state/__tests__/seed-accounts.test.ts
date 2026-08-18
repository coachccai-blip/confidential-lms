import { describe, expect, it } from 'vitest';
import { credentialsOfLearner, verifyLearnerPassword } from '@lms/core';
import { DEMO_CREDENTIALS, SEED_ACCOUNTS, withSeedAccounts } from '../seed-accounts';

describe('comptes de démonstration', () => {
  it('accepte exactement les mots de passe annoncés sur l’écran de connexion', async () => {
    for (const demo of DEMO_CREDENTIALS) {
      const account = SEED_ACCOUNTS.find((entry) => entry.username === demo.username);
      expect(account, `compte ${demo.username} introuvable`).toBeDefined();
      if (!account) continue;
      const credentials = credentialsOfLearner(account);
      expect(await verifyLearnerPassword(credentials, demo.password)).toBe(true);
      expect(await verifyLearnerPassword(credentials, `${demo.password}x`)).toBe(false);
      expect(account.role).toBe(demo.role);
    }
  });

  it('n’expose aucun mot de passe en clair dans les comptes livrés', () => {
    const serialized = JSON.stringify(SEED_ACCOUNTS);
    for (const demo of DEMO_CREDENTIALS) {
      expect(serialized).not.toContain(demo.password);
    }
  });

  it('livre un compte apprenant et un compte d’administration', () => {
    expect(SEED_ACCOUNTS.filter((a) => a.role === 'admin')).toHaveLength(1);
    expect(SEED_ACCOUNTS.filter((a) => a.role === 'learner')).toHaveLength(1);
  });

  it('réinjecte les comptes absents sans dupliquer les présents', () => {
    expect(withSeedAccounts([])).toHaveLength(SEED_ACCOUNTS.length);
    expect(withSeedAccounts(SEED_ACCOUNTS)).toHaveLength(SEED_ACCOUNTS.length);
    expect(withSeedAccounts(SEED_ACCOUNTS.slice(0, 1))).toHaveLength(SEED_ACCOUNTS.length);
  });

  it('conserve les comptes créés par l’enseignant', () => {
    const first = SEED_ACCOUNTS[0];
    expect(first).toBeDefined();
    if (!first) return;
    const custom = { ...first, id: 'lrn_custom', username: 'lea' };
    const merged = withSeedAccounts([custom]);
    expect(merged.some((a) => a.id === 'lrn_custom')).toBe(true);
    expect(merged).toHaveLength(SEED_ACCOUNTS.length + 1);
  });
});
