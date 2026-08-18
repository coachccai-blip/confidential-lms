import type { LocalizedText } from '@lms/core';

/** Raccourci d'écriture du contenu trilingue : t(français, anglais, chinois). */
export const t = (fr: string, en: string, zh: string): LocalizedText => ({ fr, en, zh });
