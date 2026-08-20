import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { SEED_ACCOUNTS, withSeedAccounts } from '../seed-accounts';

describe('comptes de démonstration', () => {
  /*
   * Les mots de passe ne vivent plus nulle part dans le dépôt — ni dans le
   * code, ni ici : le dépôt est public, un test qui les connaîtrait les
   * publierait. On vérifie donc la STRUCTURE : chaque compte porte un
   * condensé et un sel de la bonne forme, et rien qui ressemble à un
   * mot de passe en clair.
   */
  it('ne stocke que des condensés : 64 hexa de SHA-256 et un sel de 16 hexa', () => {
    for (const account of SEED_ACCOUNTS) {
      expect(account.passwordHash).toMatch(/^[0-9a-f]{64}$/);
      expect(account.passwordSalt).toMatch(/^[0-9a-f]{16}$/);
    }
  });

  it('ne laisse aucun champ ni commentaire de mot de passe en clair dans la source', () => {
    const source = readFileSync(join(__dirname, '..', 'seed-accounts.ts'), 'utf8');
    expect(source).not.toMatch(/password\s*:/);
    expect(source).not.toMatch(/\/\/\s*\S*12345/);
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
