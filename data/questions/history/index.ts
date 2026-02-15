/**
 * History Question Bank Index
 * Combines all history questions across difficulty levels
 */

import { ks3HistoryQuestions, ks3HistoryTerms, ks3HistoryTimeline } from './ks3';
import { gcseHistoryQuestions, gcseHistoryTerms, gcseHistoryTimeline } from './gcse';
import { alevelHistoryQuestions, alevelHistoryTerms, alevelHistoryTimeline } from './alevel';
import { historyExpanded, historyTermsExpanded, historyTimelineExpanded } from './expanded';
import { ks3HistoryExpanded, ks3HistoryTermsExpanded, ks3HistoryTimelineExpanded } from './ks3-expanded';
import { gcseHistoryExpanded, gcseHistoryTermsExpanded, gcseHistoryTimelineExpanded } from './gcse-expanded';
import { alevelHistoryExpanded, alevelHistoryTermsExpanded, alevelHistoryTimelineExpanded } from './alevel-expanded';

// Combined exports
export const historyQuestions = [
  ...ks3HistoryQuestions,
  ...ks3HistoryExpanded,
  ...gcseHistoryQuestions,
  ...gcseHistoryExpanded,
  ...alevelHistoryQuestions,
  ...alevelHistoryExpanded,
  ...historyExpanded,
];

export const historyTerms = [
  ...ks3HistoryTerms,
  ...ks3HistoryTermsExpanded,
  ...gcseHistoryTerms,
  ...gcseHistoryTermsExpanded,
  ...alevelHistoryTerms,
  ...alevelHistoryTermsExpanded,
  ...historyTermsExpanded,
];

export const historyTimeline = [
  ...ks3HistoryTimeline,
  ...ks3HistoryTimelineExpanded,
  ...gcseHistoryTimeline,
  ...gcseHistoryTimelineExpanded,
  ...alevelHistoryTimeline,
  ...alevelHistoryTimelineExpanded,
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
