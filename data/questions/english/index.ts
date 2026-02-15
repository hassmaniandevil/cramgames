/**
 * English Question Bank Index
 */

import { ks3EnglishQuestions, ks3EnglishTerms } from './ks3';
import { gcseEnglishQuestions, gcseEnglishTerms } from './gcse';
import { alevelEnglishQuestions, alevelEnglishTerms } from './alevel';
import { englishExpanded, englishTermsExpanded } from './expanded';
import { ks3EnglishExpanded, ks3EnglishTermsExpanded } from './ks3-expanded';

export const englishQuestions = [
  ...ks3EnglishQuestions,
  ...ks3EnglishExpanded,
  ...gcseEnglishQuestions,
  ...alevelEnglishQuestions,
  ...englishExpanded,
];

export const englishTerms = [
  ...ks3EnglishTerms,
  ...ks3EnglishTermsExpanded,
  ...gcseEnglishTerms,
  ...alevelEnglishTerms,
  ...englishTermsExpanded,
];

export { ks3EnglishQuestions, ks3EnglishTerms } from './ks3';
export { gcseEnglishQuestions, gcseEnglishTerms } from './gcse';
export { alevelEnglishQuestions, alevelEnglishTerms } from './alevel';

export const englishStats = {
  totalQuestions: englishQuestions.length,
  totalTerms: englishTerms.length,
  byDifficulty: {
    ks3: ks3EnglishQuestions.length,
    gcse: gcseEnglishQuestions.length,
    alevel: alevelEnglishQuestions.length,
  },
};
