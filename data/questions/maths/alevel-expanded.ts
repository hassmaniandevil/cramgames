/**
 * A-Level Maths Expanded Question Bank
 * Fun-first gamified questions for advanced mathematics
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================
// PURE MATHS - CALCULUS
// ============================================

export const alevelMathsCalculus: Question[] = [
  // DIFFERENTIATION
  {
    id: 'math-alevel-exp-diff-001',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Differentiation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Differentiate y = 3x⁵ - 2x³ + 7x',
    correctAnswer: 'dy/dx = 15x⁴ - 6x² + 7',
    wrongAnswers: ['dy/dx = 15x⁴ - 6x² + 7x', 'dy/dx = 15x⁴ - 6x³ + 7', 'dy/dx = 3x⁴ - 2x² + 7'],
    explanation: 'Bring down the power, reduce power by 1: 5×3x⁴ - 3×2x² + 1×7x⁰ = 15x⁴ - 6x² + 7',
    hint: 'Power rule: d/dx(xⁿ) = nxⁿ⁻¹',
    tags: ['differentiation', 'power rule', 'polynomials'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-diff-002',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Differentiation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Differentiate y = sin(3x)',
    correctAnswer: 'dy/dx = 3cos(3x)',
    wrongAnswers: ['dy/dx = cos(3x)', 'dy/dx = -3cos(3x)', 'dy/dx = 3sin(3x)'],
    explanation: 'Chain rule: d/dx[sin(u)] = cos(u) × du/dx. Here u = 3x, du/dx = 3. So dy/dx = cos(3x) × 3 = 3cos(3x)',
    hint: 'Use the chain rule - don\'t forget to multiply by the derivative of the inside',
    tags: ['differentiation', 'chain rule', 'trig'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-diff-003',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Differentiation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Differentiate y = e^(2x+1)',
    correctAnswer: 'dy/dx = 2e^(2x+1)',
    wrongAnswers: ['dy/dx = e^(2x+1)', 'dy/dx = (2x+1)e^(2x)', 'dy/dx = e^2x'],
    explanation: 'Chain rule with e^u: d/dx[e^u] = e^u × du/dx. Here u = 2x+1, du/dx = 2. So dy/dx = e^(2x+1) × 2',
    hint: 'e to the power of something differentiates to itself × derivative of the power',
    tags: ['differentiation', 'chain rule', 'exponential'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-diff-004',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Differentiation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Use the product rule to differentiate y = x²sin(x)',
    correctAnswer: 'dy/dx = 2xsin(x) + x²cos(x)',
    wrongAnswers: ['dy/dx = 2xcos(x)', 'dy/dx = x²cos(x)', 'dy/dx = 2xsin(x) - x²cos(x)'],
    explanation: 'Product rule: d/dx[uv] = u\'v + uv\'. Here u = x², v = sin(x). u\' = 2x, v\' = cos(x). So dy/dx = 2x·sin(x) + x²·cos(x)',
    hint: 'Product rule: (first × derivative of second) + (derivative of first × second)',
    tags: ['differentiation', 'product rule', 'trig'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-diff-005',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Differentiation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Differentiate y = ln(x²)',
    correctAnswer: 'dy/dx = 2/x',
    wrongAnswers: ['dy/dx = 2x/x²', 'dy/dx = 1/x²', 'dy/dx = 2ln(x)'],
    explanation: 'Either use chain rule: d/dx[ln(u)] = (1/u)·du/dx = (1/x²)·2x = 2/x. OR simplify first: ln(x²) = 2ln(x), then differentiate: 2·(1/x) = 2/x',
    hint: 'You can simplify using log rules first, or use the chain rule',
    tags: ['differentiation', 'logarithms', 'chain rule'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-diff-006',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Stationary Points',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The curve y = x³ - 3x² has stationary points at x = 0 and x = 2. What type of point is at x = 2?',
    correctAnswer: 'Minimum',
    wrongAnswers: ['Maximum', 'Point of inflection', 'Cannot determine'],
    explanation: 'dy/dx = 3x² - 6x = 0 gives x = 0 or 2. d²y/dx² = 6x - 6. At x = 2: d²y/dx² = 12 - 6 = 6 > 0, so it\'s a minimum.',
    hint: 'Find the second derivative and substitute x = 2. Positive = minimum.',
    tags: ['differentiation', 'stationary points', 'second derivative'],
    yearGroup: [12, 13]
  },

  // INTEGRATION
  {
    id: 'math-alevel-exp-int-001',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Integration',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Find ∫(4x³ + 6x) dx',
    correctAnswer: 'x⁴ + 3x² + C',
    wrongAnswers: ['x⁴ + 3x² + C', '4x⁴ + 3x² + C', 'x⁴ + 6x² + C'],
    explanation: 'Increase power by 1, divide by new power: (4x⁴)/4 + (6x²)/2 + C = x⁴ + 3x² + C. Don\'t forget +C!',
    hint: 'Integration is the reverse of differentiation. Add 1 to power, divide by new power.',
    tags: ['integration', 'power rule', 'indefinite'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-int-002',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Integration',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Find ∫cos(2x) dx',
    correctAnswer: '½sin(2x) + C',
    wrongAnswers: ['sin(2x) + C', '2sin(2x) + C', '-½sin(2x) + C'],
    explanation: 'Integral of cos(ax) is (1/a)sin(ax). Here a = 2, so ∫cos(2x)dx = ½sin(2x) + C. Check by differentiating!',
    hint: 'When integrating trig functions, divide by the coefficient of x',
    tags: ['integration', 'trig', 'reverse chain rule'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-int-003',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Integration',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Find ∫e^(3x) dx',
    correctAnswer: '⅓e^(3x) + C',
    wrongAnswers: ['e^(3x) + C', '3e^(3x) + C', 'e^(3x)/x + C'],
    explanation: 'Integral of e^(ax) is (1/a)e^(ax). Here a = 3, so ∫e^(3x)dx = ⅓e^(3x) + C',
    hint: 'Divide by the coefficient of x when integrating exponentials',
    tags: ['integration', 'exponential', 'reverse chain rule'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-int-004',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Integration',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Evaluate ∫₀² (3x² + 1) dx',
    correctAnswer: '10',
    wrongAnswers: [],
    explanation: 'Integrate: x³ + x. Evaluate: [x³ + x]₀² = (8 + 2) - (0 + 0) = 10. Definite integrals give areas!',
    hint: 'Integrate first, then substitute upper and lower limits',
    tags: ['integration', 'definite', 'area'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-int-005',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Integration',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Find ∫(2x)/(x² + 1) dx',
    correctAnswer: 'ln|x² + 1| + C',
    wrongAnswers: ['ln|2x| + C', '(x² + 1)² + C', '2ln|x² + 1| + C'],
    explanation: 'Recognise this as ∫f\'(x)/f(x) form which gives ln|f(x)|. Here f(x) = x² + 1, f\'(x) = 2x. So answer is ln|x² + 1| + C',
    hint: 'Look for the pattern: numerator is the derivative of denominator',
    tags: ['integration', 'logarithms', 'recognition'],
    yearGroup: [12, 13]
  },
];

// ============================================
// PURE MATHS - ALGEBRA
// ============================================

export const alevelMathsAlgebra: Question[] = [
  // PARTIAL FRACTIONS
  {
    id: 'math-alevel-exp-pf-001',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Partial Fractions',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Express 5/(x(x+1)) in partial fractions',
    correctAnswer: '5/x - 5/(x+1)',
    wrongAnswers: ['5/x + 5/(x+1)', '1/x + 5/(x+1)', '5/x - 1/(x+1)'],
    explanation: '5/(x(x+1)) = A/x + B/(x+1). Multiply by x(x+1): 5 = A(x+1) + Bx. Let x=0: 5=A. Let x=-1: 5=-B, B=-5. So 5/x - 5/(x+1)',
    hint: 'Use cover-up method or substitution to find A and B',
    tags: ['partial fractions', 'algebra', 'integration prep'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-pf-002',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Partial Fractions',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Express (2x+3)/((x-1)(x+2)) in partial fractions',
    correctAnswer: '5/3(x-1) + 1/3(x+2)',
    wrongAnswers: ['2/(x-1) + 1/(x+2)', '1/(x-1) + 2/(x+2)', '5/(x-1) - 1/(x+2)'],
    explanation: 'Let it equal A/(x-1) + B/(x+2). Multiply up: 2x+3 = A(x+2) + B(x-1). x=1: 5=3A, A=5/3. x=-2: -1=-3B, B=1/3',
    hint: 'Substitute values that make each bracket zero',
    tags: ['partial fractions', 'algebra', 'technique'],
    yearGroup: [12, 13]
  },

  // BINOMIAL EXPANSION
  {
    id: 'math-alevel-exp-bin-001',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Binomial Expansion',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Find the coefficient of x³ in the expansion of (1 + 2x)⁵',
    correctAnswer: '80',
    wrongAnswers: ['40', '160', '20'],
    explanation: 'Using binomial: ⁵C₃(1)²(2x)³ = 10 × 1 × 8x³ = 80x³. Coefficient is 80.',
    hint: 'Use ⁿCᵣ × (first term)^(n-r) × (second term)^r',
    tags: ['binomial', 'expansion', 'coefficients'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-bin-002',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Binomial Expansion',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Expand (1 + x)^(-2) up to the x² term',
    correctAnswer: '1 - 2x + 3x²',
    wrongAnswers: ['1 - 2x + 4x²', '1 + 2x + 3x²', '1 - 2x - 3x²'],
    explanation: 'For |x| < 1: (1+x)ⁿ = 1 + nx + n(n-1)x²/2! + ... With n=-2: 1 + (-2)x + (-2)(-3)x²/2 = 1 - 2x + 3x²',
    hint: 'Use the general binomial formula for negative/fractional powers',
    tags: ['binomial', 'expansion', 'negative powers'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-bin-003',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Binomial Expansion',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'For what values of x is the expansion of (1 + 3x)^(-1/2) valid?',
    correctAnswer: '|x| < 1/3',
    wrongAnswers: ['|x| < 1', '|x| < 3', 'All real x'],
    explanation: 'Binomial expansion of (1+u)ⁿ for non-positive integer n is valid for |u| < 1. Here u = 3x, so |3x| < 1, giving |x| < 1/3',
    hint: 'The "inside" of the bracket must have absolute value less than 1',
    tags: ['binomial', 'expansion', 'validity'],
    yearGroup: [12, 13]
  },

  // SEQUENCES & SERIES
  {
    id: 'math-alevel-exp-seq-001',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Sequences',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'An arithmetic sequence has a₁ = 5 and a₁₀ = 32. Find the common difference.',
    correctAnswer: 'd = 3',
    wrongAnswers: ['d = 2.7', 'd = 27/10', 'd = 3.2'],
    explanation: 'aₙ = a₁ + (n-1)d. So 32 = 5 + 9d. 27 = 9d. d = 3.',
    hint: 'Use the formula aₙ = a₁ + (n-1)d',
    tags: ['sequences', 'arithmetic', 'formula'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-seq-002',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Sequences',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Find the sum of the first 20 terms of the arithmetic series 3 + 7 + 11 + ...',
    correctAnswer: '820',
    wrongAnswers: [],
    explanation: 'a = 3, d = 4, n = 20. Sₙ = n/2[2a + (n-1)d] = 20/2[6 + 76] = 10 × 82 = 820',
    hint: 'Sum formula: Sₙ = n/2[2a + (n-1)d]',
    tags: ['sequences', 'arithmetic', 'sum'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-seq-003',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Sequences',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A geometric series has first term 2 and common ratio 0.5. Find the sum to infinity.',
    correctAnswer: '4',
    wrongAnswers: ['2', 'Infinity', '1'],
    explanation: 'Sum to infinity S∞ = a/(1-r) for |r| < 1. S∞ = 2/(1-0.5) = 2/0.5 = 4',
    hint: 'Sum to infinity only exists when |r| < 1',
    tags: ['sequences', 'geometric', 'sum to infinity'],
    yearGroup: [12, 13]
  },
];

// ============================================
// STATISTICS
// ============================================

export const alevelMathsStats: Question[] = [
  // PROBABILITY DISTRIBUTIONS
  {
    id: 'math-alevel-exp-stat-001',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Binomial Distribution',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'X ~ B(10, 0.3). Find P(X = 3).',
    correctAnswer: '0.267 (3 s.f.)',
    wrongAnswers: ['0.300', '0.233', '0.117'],
    explanation: 'P(X = r) = ⁿCᵣ p^r (1-p)^(n-r). P(X=3) = ¹⁰C₃ × 0.3³ × 0.7⁷ = 120 × 0.027 × 0.0823 = 0.267',
    hint: 'Use the binomial probability formula',
    tags: ['statistics', 'binomial', 'probability'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-stat-002',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Normal Distribution',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'X ~ N(50, 16). What is P(X < 46)?',
    correctAnswer: '0.159 (3 s.f.)',
    wrongAnswers: ['0.309', '0.500', '0.841'],
    explanation: 'μ = 50, σ² = 16 so σ = 4. Standardise: Z = (46-50)/4 = -1. P(Z < -1) = 1 - Φ(1) = 1 - 0.841 = 0.159',
    hint: 'Standardise using Z = (X - μ)/σ, then use tables or calculator',
    tags: ['statistics', 'normal distribution', 'standardisation'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-stat-003',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Normal Distribution',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Heights are normally distributed with mean 170cm and SD 8cm. What height is exceeded by only 5% of people?',
    correctAnswer: '183.2 cm',
    wrongAnswers: ['186.4 cm', '178 cm', '156.8 cm'],
    explanation: 'We need P(X > x) = 0.05, so P(X < x) = 0.95. From tables, z = 1.645. x = μ + zσ = 170 + 1.645×8 = 183.16 ≈ 183.2cm',
    hint: 'Use inverse normal: find z-score for top 5%, then convert back',
    tags: ['statistics', 'normal distribution', 'inverse'],
    yearGroup: [12, 13]
  },

  // HYPOTHESIS TESTING
  {
    id: 'math-alevel-exp-hyp-001',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Hypothesis Testing',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In a binomial test at 5% significance level, we reject H₀ if P(observed or more extreme) < 0.05. What does a Type I error mean?',
    correctAnswer: 'Rejecting H₀ when it is actually true',
    wrongAnswers: ['Accepting H₀ when it is false', 'Getting a p-value of exactly 0.05', 'Using the wrong test'],
    explanation: 'Type I error = false positive = rejecting a true null hypothesis. The significance level (5%) is the probability of making a Type I error.',
    hint: 'Think about what can go wrong with rejection',
    tags: ['statistics', 'hypothesis testing', 'errors'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-hyp-002',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Hypothesis Testing',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A coin is flipped 20 times. We want to test H₀: p = 0.5 vs H₁: p > 0.5 at 5% level. We get 15 heads. What is our conclusion?',
    correctAnswer: 'Reject H₀ - evidence the coin is biased towards heads',
    wrongAnswers: ['Accept H₀ - no evidence of bias', 'Cannot conclude anything', 'Need more flips'],
    explanation: 'P(X ≥ 15 | p=0.5) = 0.021 < 0.05. Since this is less than our significance level, we reject H₀ and conclude there is evidence the coin is biased.',
    hint: 'Calculate P(X ≥ 15) under H₀ and compare to significance level',
    tags: ['statistics', 'hypothesis testing', 'binomial'],
    yearGroup: [12, 13]
  },
];

// ============================================
// MECHANICS
// ============================================

export const alevelMathsMechanics: Question[] = [
  // KINEMATICS
  {
    id: 'math-alevel-exp-mech-001',
    subject: 'maths',
    topic: 'Mechanics',
    subtopic: 'Kinematics',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A particle has velocity v = 6t - t² m/s. Find the displacement from t = 0 to t = 4.',
    correctAnswer: '26⅔ m',
    wrongAnswers: ['32 m', '24 m', '16 m'],
    explanation: 's = ∫v dt = ∫(6t - t²) dt = 3t² - t³/3. [3t² - t³/3]₀⁴ = (48 - 64/3) - 0 = 48 - 21⅓ = 26⅔ m',
    hint: 'Integrate velocity to get displacement',
    tags: ['mechanics', 'kinematics', 'integration'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-mech-002',
    subject: 'maths',
    topic: 'Mechanics',
    subtopic: 'Kinematics',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A ball is thrown upward at 20 m/s. Taking g = 10 m/s², what is the maximum height reached?',
    correctAnswer: '20 m',
    wrongAnswers: ['40 m', '10 m', '4 m'],
    explanation: 'At max height, v = 0. Using v² = u² + 2as: 0 = 400 - 20s. s = 20 m. Or use s = ut + ½at²: find t first, then s.',
    hint: 'At maximum height, velocity = 0. Use SUVAT equations.',
    tags: ['mechanics', 'kinematics', 'projectiles'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-mech-003',
    subject: 'maths',
    topic: 'Mechanics',
    subtopic: 'Kinematics',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Position is given by r = (3t² - 2)i + (t³ + 1)j. Find the velocity at t = 2.',
    correctAnswer: 'v = 12i + 12j',
    wrongAnswers: ['v = 6i + 3j', 'v = 10i + 9j', 'v = 12i + 8j'],
    explanation: 'v = dr/dt = 6ti + 3t²j. At t = 2: v = 12i + 12j. Speed = |v| = √(144 + 144) = 12√2',
    hint: 'Differentiate each component with respect to t',
    tags: ['mechanics', 'kinematics', 'vectors'],
    yearGroup: [12, 13]
  },

  // FORCES & DYNAMICS
  {
    id: 'math-alevel-exp-mech-004',
    subject: 'maths',
    topic: 'Mechanics',
    subtopic: 'Forces',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A 5kg mass on a smooth slope inclined at 30° to horizontal. What is the acceleration?',
    correctAnswer: '5 m/s² (taking g = 10)',
    wrongAnswers: ['10 m/s²', '8.66 m/s²', '2.5 m/s²'],
    explanation: 'Component of weight down slope = mg sin θ = 5 × 10 × sin 30° = 50 × 0.5 = 25 N. F = ma: 25 = 5a, a = 5 m/s²',
    hint: 'Resolve weight parallel to slope: mg sin θ',
    tags: ['mechanics', 'forces', 'inclined planes'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-mech-005',
    subject: 'maths',
    topic: 'Mechanics',
    subtopic: 'Connected Particles',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Two particles (3kg and 2kg) are connected by a light string over a smooth pulley. Find the acceleration.',
    correctAnswer: '2 m/s² (taking g = 10)',
    wrongAnswers: ['5 m/s²', '4 m/s²', '10 m/s²'],
    explanation: 'Net force = (3-2)g = 10 N downward on heavier side. Total mass = 5 kg. a = F/m = 10/5 = 2 m/s²',
    hint: 'The whole system accelerates together. Use F = ma for the system.',
    tags: ['mechanics', 'connected particles', 'pulleys'],
    yearGroup: [12, 13]
  },
  {
    id: 'math-alevel-exp-mech-006',
    subject: 'maths',
    topic: 'Mechanics',
    subtopic: 'Moments',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A uniform beam of length 4m and weight 200N rests on supports at each end. A 300N weight is placed 1m from one end. Find the reaction at that end.',
    correctAnswer: '325 N',
    wrongAnswers: ['250 N', '175 N', '400 N'],
    explanation: 'Taking moments about the other end: R₁×4 = 200×2 + 300×3 = 400 + 900 = 1300. R₁ = 325 N',
    hint: 'Take moments about one support to find reaction at the other',
    tags: ['mechanics', 'moments', 'equilibrium'],
    yearGroup: [12, 13]
  },
];

// ============================================
// TERMS & FORMULAS
// ============================================

export const alevelMathsTermsExpanded: TermDefinition[] = [
  {
    id: 'math-alevel-term-exp-001',
    subject: 'maths',
    term: 'Chain rule',
    definition: 'Method for differentiating composite functions: d/dx[f(g(x))] = f\'(g(x)) × g\'(x)',
    difficulty: 'alevel',
    relatedTerms: ['differentiation', 'composite function', 'product rule']
  },
  {
    id: 'math-alevel-term-exp-002',
    subject: 'maths',
    term: 'Partial fractions',
    definition: 'Breaking a fraction into simpler fractions that can be integrated separately',
    difficulty: 'alevel',
    relatedTerms: ['integration', 'algebra', 'logarithms']
  },
  {
    id: 'math-alevel-term-exp-003',
    subject: 'maths',
    term: 'Binomial distribution',
    definition: 'Models the number of successes in n independent trials with probability p: X ~ B(n, p)',
    difficulty: 'alevel',
    relatedTerms: ['probability', 'discrete', 'hypothesis testing']
  },
  {
    id: 'math-alevel-term-exp-004',
    subject: 'maths',
    term: 'Normal distribution',
    definition: 'Continuous bell-shaped distribution defined by mean μ and variance σ²: X ~ N(μ, σ²)',
    difficulty: 'alevel',
    relatedTerms: ['probability', 'continuous', 'standardisation']
  },
  {
    id: 'math-alevel-term-exp-005',
    subject: 'maths',
    term: 'Stationary point',
    definition: 'Point where dy/dx = 0 - can be maximum, minimum, or point of inflection',
    difficulty: 'alevel',
    relatedTerms: ['differentiation', 'turning point', 'second derivative']
  },
  {
    id: 'math-alevel-term-exp-006',
    subject: 'maths',
    term: 'Geometric series',
    definition: 'Series where each term is previous × common ratio r. Sum to infinity exists if |r| < 1',
    difficulty: 'alevel',
    relatedTerms: ['sequences', 'convergence', 'sum to infinity']
  },
];

export const alevelMathsFormulasExpanded: Formula[] = [
  {
    id: 'math-alevel-formula-exp-001',
    subject: 'maths',
    name: 'Chain Rule',
    formula: 'd/dx[f(g(x))] = f\'(g(x)) × g\'(x)',
    description: 'Differentiate composite functions by multiplying outer derivative by inner derivative',
    difficulty: 'alevel',
    topic: 'Calculus'
  },
  {
    id: 'math-alevel-formula-exp-002',
    subject: 'maths',
    name: 'Product Rule',
    formula: 'd/dx[uv] = u\'v + uv\'',
    description: 'Differentiate products: derivative of first × second + first × derivative of second',
    difficulty: 'alevel',
    topic: 'Calculus'
  },
  {
    id: 'math-alevel-formula-exp-003',
    subject: 'maths',
    name: 'Sum to Infinity (Geometric)',
    formula: 'S∞ = a/(1-r) for |r| < 1',
    description: 'Sum of infinite geometric series when common ratio has absolute value less than 1',
    difficulty: 'alevel',
    topic: 'Sequences'
  },
  {
    id: 'math-alevel-formula-exp-004',
    subject: 'maths',
    name: 'Binomial Probability',
    formula: 'P(X=r) = ⁿCᵣ × p^r × (1-p)^(n-r)',
    description: 'Probability of exactly r successes in n trials with probability p',
    difficulty: 'alevel',
    topic: 'Statistics'
  },
  {
    id: 'math-alevel-formula-exp-005',
    subject: 'maths',
    name: 'Standard Normal Transform',
    formula: 'Z = (X - μ)/σ',
    description: 'Convert any normal distribution to standard normal N(0,1)',
    difficulty: 'alevel',
    topic: 'Statistics'
  },
];

// Combined exports
export const alevelMathsExpanded = [
  ...alevelMathsCalculus,
  ...alevelMathsAlgebra,
  ...alevelMathsStats,
  ...alevelMathsMechanics,
];
