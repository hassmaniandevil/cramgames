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
import { gcseChemistryExpanded2, gcseChemistryTermsExpanded2 } from './gcse-expanded-2';
import { alevelChemistryExpanded2, alevelChemistryTermsExpanded2, alevelChemistryFormulasExpanded2 } from './alevel-expanded-2';

// Combined exports (base + expanded)
export const chemistryQuestions = [
  ...ks3ChemistryQuestions,
  ...ks3ChemistryExpanded,
  ...gcseChemistryQuestions,
  ...gcseChemistryExpanded,
  ...gcseChemistryExpanded2,
  ...alevelChemistryQuestions,
  ...alevelChemistryExpanded,
  ...alevelChemistryExpanded2,
];

export const chemistryTerms = [
  ...ks3ChemistryTerms,
  ...ks3ChemistryTermsExpanded,
  ...gcseChemistryTerms,
  ...gcseChemistryTermsExpanded,
  ...gcseChemistryTermsExpanded2,
  ...alevelChemistryTerms,
  ...alevelChemistryTermsExpanded,
  ...alevelChemistryTermsExpanded2,
];

export const chemistryFormulas = [
  ...gcseChemistryFormulas,
  ...alevelChemistryFormulas,
  ...alevelChemistryFormulasExpanded2,
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
