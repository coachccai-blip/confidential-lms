import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * `base` est pilote par la variable d'environnement VITE_BASE afin de servir
 * l'application aussi bien en local (`/`) que sous GitHub Pages
 * (`/<nom-du-depot>/`), voir .github/workflows/deploy.yml.
 */
export default defineConfig({
  base: process.env['VITE_BASE'] ?? '/',
  plugins: [react()],
  build: {
    target: 'es2022',
    cssCodeSplit: false,
    reportCompressedSize: false,
  },
});
