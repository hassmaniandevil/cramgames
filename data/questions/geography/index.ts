/**
 * Geography Question Bank Index
 * Combines all geography questions across difficulty levels
 */

import { ks3GeographyQuestions, ks3GeographyTerms } from './ks3';
import { gcseGeographyQuestions, gcseGeographyTerms } from './gcse';
import { alevelGeographyQuestions, alevelGeographyTerms, alevelGeographyFormulas } from './alevel';

// Combined exports
export const geographyQuestions = [
  ...ks3GeographyQuestions,
  ...gcseGeographyQuestions,
  ...alevelGeographyQuestions,
];

export const geographyTerms = [
  ...ks3GeographyTerms,
  ...gcseGeographyTerms,
  ...alevelGeographyTerms,
];

export const geographyFormulas = [
  ...alevelGeographyFormulas,
];

// Re-export individual levels
export { ks3GeographyQuestions, ks3GeographyTerms } from './ks3';
export { gcseGeographyQuestions, gcseGeographyTerms } from './gcse';
export { alevelGeographyQuestions, alevelGeographyTerms, alevelGeographyFormulas } from './alevel';

// Statistics
export const geographyStats = {
  totalQuestions: geographyQuestions.length,
  totalTerms: geographyTerms.length,
  totalFormulas: geographyFormulas.length,
  byDifficulty: {
    ks3: ks3GeographyQuestions.length,
    gcse: gcseGeographyQuestions.length,
    alevel: alevelGeographyQuestions.length,
  },
};
