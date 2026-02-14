/**
 * History Question Bank Index
 * Combines all history questions across difficulty levels
 */

import { ks3HistoryQuestions, ks3HistoryTerms, ks3HistoryTimeline } from './ks3';
import { gcseHistoryQuestions, gcseHistoryTerms, gcseHistoryTimeline } from './gcse';
import { alevelHistoryQuestions, alevelHistoryTerms, alevelHistoryTimeline } from './alevel';
import { historyExpanded, historyTermsExpanded, historyTimelineExpanded } from './expanded';

// Combined exports
export const historyQuestions = [
  ...ks3HistoryQuestions,
  ...gcseHistoryQuestions,
  ...alevelHistoryQuestions,
  ...historyExpanded,
];

export const historyTerms = [
  ...ks3HistoryTerms,
  ...gcseHistoryTerms,
  ...alevelHistoryTerms,
  ...historyTermsExpanded,
];

export const historyTimeline = [
  ...ks3HistoryTimeline,
  ...gcseHistoryTimeline,
  ...alevelHistoryTimeline,
  ...historyTimelineExpanded,
];

// Re-export individual levels
export { ks3HistoryQuestions, ks3HistoryTerms, ks3HistoryTimeline } from './ks3';
export { gcseHistoryQuestions, gcseHistoryTerms, gcseHistoryTimeline } from './gcse';
export { alevelHistoryQuestions, alevelHistoryTerms, alevelHistoryTimeline } from './alevel';

// Statistics
export const historyStats = {
  totalQuestions: historyQuestions.length,
  totalTerms: historyTerms.length,
  totalTimeline: historyTimeline.length,
  byDifficulty: {
    ks3: ks3HistoryQuestions.length,
    gcse: gcseHistoryQuestions.length,
    alevel: alevelHistoryQuestions.length,
  },
};
