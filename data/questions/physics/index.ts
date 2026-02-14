/**
 * Physics Question Bank Index
 * Combines all physics questions across difficulty levels
 */

import { ks3PhysicsQuestions, ks3PhysicsTerms, ks3PhysicsFormulas } from './ks3';
import { gcsePhysicsQuestions, gcsePhysicsTerms, gcsePhysicsFormulas } from './gcse';
import { alevelPhysicsQuestions, alevelPhysicsTerms, alevelPhysicsFormulas } from './alevel';
import { ks3PhysicsExpanded, ks3PhysicsTermsExpanded } from './ks3-expanded';
import { gcsePhysicsExpanded, gcsePhysicsTermsExpanded, gcsePhysicsFormulasExpanded } from './gcse-expanded';
import { alevelPhysicsExpanded, alevelPhysicsTermsExpanded, alevelPhysicsFormulasExpanded } from './alevel-expanded';

// Combined exports (base + expanded)
export const physicsQuestions = [
  ...ks3PhysicsQuestions,
  ...ks3PhysicsExpanded,
  ...gcsePhysicsQuestions,
  ...gcsePhysicsExpanded,
  ...alevelPhysicsQuestions,
  ...alevelPhysicsExpanded,
];

export const physicsTerms = [
  ...ks3PhysicsTerms,
  ...ks3PhysicsTermsExpanded,
  ...gcsePhysicsTerms,
  ...gcsePhysicsTermsExpanded,
  ...alevelPhysicsTerms,
  ...alevelPhysicsTermsExpanded,
];

export const physicsFormulas = [
  ...ks3PhysicsFormulas,
  ...gcsePhysicsFormulas,
  ...gcsePhysicsFormulasExpanded,
  ...alevelPhysicsFormulas,
  ...alevelPhysicsFormulasExpanded,
];

// Re-export individual levels
export { ks3PhysicsQuestions, ks3PhysicsTerms, ks3PhysicsFormulas } from './ks3';
export { gcsePhysicsQuestions, gcsePhysicsTerms, gcsePhysicsFormulas } from './gcse';
export { alevelPhysicsQuestions, alevelPhysicsTerms, alevelPhysicsFormulas } from './alevel';

// Statistics
export const physicsStats = {
  totalQuestions: physicsQuestions.length,
  totalTerms: physicsTerms.length,
  totalFormulas: physicsFormulas.length,
  byDifficulty: {
    ks3: ks3PhysicsQuestions.length,
    gcse: gcsePhysicsQuestions.length,
    alevel: alevelPhysicsQuestions.length,
  },
};
