/**
 * Chemistry Question Bank Index
 * Combines all chemistry questions across difficulty levels
 */

import { ks3ChemistryQuestions, ks3ChemistryTerms } from './ks3';
import { gcseChemistryQuestions, gcseChemistryTerms, gcseChemistryFormulas } from './gcse';
import { alevelChemistryQuestions, alevelChemistryTerms, alevelChemistryFormulas } from './alevel';

// Combined exports
export const chemistryQuestions = [
  ...ks3ChemistryQuestions,
  ...gcseChemistryQuestions,
  ...alevelChemistryQuestions,
];

export const chemistryTerms = [
  ...ks3ChemistryTerms,
  ...gcseChemistryTerms,
  ...alevelChemistryTerms,
];

export const chemistryFormulas = [
  ...gcseChemistryFormulas,
  ...alevelChemistryFormulas,
];

// Re-export individual levels
export { ks3ChemistryQuestions, ks3ChemistryTerms } from './ks3';
export { gcseChemistryQuestions, gcseChemistryTerms, gcseChemistryFormulas } from './gcse';
export { alevelChemistryQuestions, alevelChemistryTerms, alevelChemistryFormulas } from './alevel';

// Statistics
export const chemistryStats = {
  totalQuestions: chemistryQuestions.length,
  totalTerms: chemistryTerms.length,
  totalFormulas: chemistryFormulas.length,
  byDifficulty: {
    ks3: ks3ChemistryQuestions.length,
    gcse: gcseChemistryQuestions.length,
    alevel: alevelChemistryQuestions.length,
  },
};
