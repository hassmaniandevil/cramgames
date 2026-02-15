/**
 * Chemistry Question Bank Index
 * Combines all chemistry questions across difficulty levels
 */

import { ks3ChemistryQuestions, ks3ChemistryTerms } from './ks3';
import { gcseChemistryQuestions, gcseChemistryTerms, gcseChemistryFormulas } from './gcse';
import { alevelChemistryQuestions, alevelChemistryTerms, alevelChemistryFormulas } from './alevel';
import { ks3ChemistryExpanded, ks3ChemistryTermsExpanded } from './ks3-expanded';
import { gcseChemistryExpanded, gcseChemistryTermsExpanded } from './gcse-expanded';
import { alevelChemistryExpanded, alevelChemistryTermsExpanded } from './alevel-expanded';

// Combined exports (base + expanded)
export const chemistryQuestions = [
  ...ks3ChemistryQuestions,
  ...ks3ChemistryExpanded,
  ...gcseChemistryQuestions,
  ...gcseChemistryExpanded,
  ...alevelChemistryQuestions,
  ...alevelChemistryExpanded,
];

export const chemistryTerms = [
  ...ks3ChemistryTerms,
  ...ks3ChemistryTermsExpanded,
  ...gcseChemistryTerms,
  ...gcseChemistryTermsExpanded,
  ...alevelChemistryTerms,
  ...alevelChemistryTermsExpanded,
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
