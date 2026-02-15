/**
 * Maths Expanded Questions Index
 * Combines all expanded/gamified maths questions
 */

import { ks3MathsNumber, ks3MathsNumberTerms } from './ks3-number';
import { ks3MathsAlgebra, ks3MathsAlgebraTerms } from './ks3-algebra';
import { ks3MathsGeometryStats, ks3MathsGeometryStatsTerms } from './ks3-geometry-stats';
import { ks3MathsExpanded, ks3MathsTermsExpanded, ks3MathsFormulasExpanded } from './ks3-expanded';
import { gcseMathsExpanded, gcseMathsTermsExpanded, gcseMathsFormulasExpanded } from './gcse-expanded';
import { alevelMathsExpanded, alevelMathsTermsExpanded, alevelMathsFormulasExpanded } from './alevel-expanded';
import { gcseMathsExpanded2, gcseMathsTermsExpanded2, gcseMathsFormulasExpanded2 } from './gcse-expanded-2';
import { alevelMathsExpanded2, alevelMathsTermsExpanded2, alevelMathsFormulasExpanded2 } from './alevel-expanded-2';

export const mathsExpandedQuestions = [
  ...ks3MathsNumber,
  ...ks3MathsAlgebra,
  ...ks3MathsGeometryStats,
  ...ks3MathsExpanded,
  ...gcseMathsExpanded,
  ...gcseMathsExpanded2,
  ...alevelMathsExpanded,
  ...alevelMathsExpanded2,
];

export const mathsExpandedTerms = [
  ...ks3MathsNumberTerms,
  ...ks3MathsAlgebraTerms,
  ...ks3MathsGeometryStatsTerms,
  ...ks3MathsTermsExpanded,
  ...gcseMathsTermsExpanded,
  ...gcseMathsTermsExpanded2,
  ...alevelMathsTermsExpanded,
  ...alevelMathsTermsExpanded2,
];

export const mathsExpandedFormulas = [
  ...ks3MathsFormulasExpanded,
  ...gcseMathsFormulasExpanded,
  ...gcseMathsFormulasExpanded2,
  ...alevelMathsFormulasExpanded,
  ...alevelMathsFormulasExpanded2,
];
