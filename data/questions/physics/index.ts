/**
 * Physics Question Bank Index
 * Combines all physics questions across difficulty levels
 */

import { ks3PhysicsQuestions, ks3PhysicsTerms, ks3PhysicsFormulas } from './ks3';
import { gcsePhysicsQuestions, gcsePhysicsTerms, gcsePhysicsFormulas } from './gcse';
import { alevelPhysicsQuestions, alevelPhysicsTerms, alevelPhysicsFormulas } from './alevel';

// Combined exports
export const physicsQuestions = [
  ...ks3PhysicsQuestions,
  ...gcsePhysicsQuestions,
  ...alevelPhysicsQuestions,
];

export const physicsTerms = [
  ...ks3PhysicsTerms,
  ...gcsePhysicsTerms,
  ...alevelPhysicsTerms,
];

export const physicsFormulas = [
  ...ks3PhysicsFormulas,
  ...gcsePhysicsFormulas,
  ...alevelPhysicsFormulas,
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
