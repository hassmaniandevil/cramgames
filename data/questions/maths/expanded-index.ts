/**
 * Maths Expanded Questions Index
 * Combines all expanded/gamified maths questions
 */

import { ks3MathsNumber, ks3MathsNumberTerms } from './ks3-number';
import { ks3MathsAlgebra, ks3MathsAlgebraTerms } from './ks3-algebra';
import { ks3MathsGeometryStats, ks3MathsGeometryStatsTerms } from './ks3-geometry-stats';

export const mathsExpandedQuestions = [
  ...ks3MathsNumber,
  ...ks3MathsAlgebra,
  ...ks3MathsGeometryStats,
];

export const mathsExpandedTerms = [
  ...ks3MathsNumberTerms,
  ...ks3MathsAlgebraTerms,
  ...ks3MathsGeometryStatsTerms,
];
