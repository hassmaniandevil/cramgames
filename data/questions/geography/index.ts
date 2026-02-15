/**
 * Geography Question Bank Index
 * Combines all geography questions across difficulty levels
 */

import { ks3GeographyQuestions, ks3GeographyTerms } from './ks3';
import { gcseGeographyQuestions, gcseGeographyTerms } from './gcse';
import { alevelGeographyQuestions, alevelGeographyTerms, alevelGeographyFormulas } from './alevel';
import { geographyExpanded, geographyTermsExpanded } from './expanded';
import { ks3GeographyExpandedNew, ks3GeographyTermsExpanded } from './ks3-expanded';
import { gcseGeographyExpandedNew, gcseGeographyTermsExpanded } from './gcse-expanded';
import { alevelGeographyExpandedNew, alevelGeographyTermsExpanded } from './alevel-expanded';

// Combined exports
export const geographyQuestions = [
  ...ks3GeographyQuestions,
  ...ks3GeographyExpandedNew,
  ...gcseGeographyQuestions,
  ...gcseGeographyExpandedNew,
  ...alevelGeographyQuestions,
  ...alevelGeographyExpandedNew,
  ...geographyExpanded,
];

export const geographyTerms = [
  ...ks3GeographyTerms,
  ...ks3GeographyTermsExpanded,
  ...gcseGeographyTerms,
  ...gcseGeographyTermsExpanded,
  ...alevelGeographyTerms,
  ...alevelGeographyTermsExpanded,
  ...geographyTermsExpanded,
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
