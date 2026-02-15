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
import { gcseHistoryExpanded2, gcseHistoryTermsExpanded2, gcseHistoryTimelineExpanded2 } from './gcse-expanded-2';
import { ks3HistoryExpanded2, ks3HistoryTermsExpanded2, ks3HistoryTimelineExpanded2 } from './ks3-expanded-2';

// Combined exports
export const historyQuestions = [
  ...ks3HistoryQuestions,
  ...ks3HistoryExpanded,
  ...ks3HistoryExpanded2,
  ...gcseHistoryQuestions,
  ...gcseHistoryExpanded,
  ...gcseHistoryExpanded2,
  ...alevelHistoryQuestions,
  ...alevelHistoryExpanded,
  ...historyExpanded,
];

export const historyTerms = [
  ...ks3HistoryTerms,
  ...ks3HistoryTermsExpanded,
  ...ks3HistoryTermsExpanded2,
  ...gcseHistoryTerms,
  ...gcseHistoryTermsExpanded,
  ...gcseHistoryTermsExpanded2,
  ...alevelHistoryTerms,
  ...alevelHistoryTermsExpanded,
  ...historyTermsExpanded,
];

export const historyTimeline = [
  ...ks3HistoryTimeline,
  ...ks3HistoryTimelineExpanded,
  ...ks3HistoryTimelineExpanded2,
  ...gcseHistoryTimeline,
  ...gcseHistoryTimelineExpanded,
  ...gcseHistoryTimelineExpanded2,
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
