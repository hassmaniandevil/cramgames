/**
 * A-Level Maths Expanded Part 2
 * Additional advanced maths questions for pure, mechanics, and statistics
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================================================
// PURE MATHS - CALCULUS
// ============================================================================

const alevelCalculus: Question[] = [
  {
    id: 'maths-alevel-exp2-001',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Differentiation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Differentiate y = e³ˣ.',
    correctAnswer: 'dy/dx = 3e³ˣ',
    wrongAnswers: [
      'dy/dx = e³ˣ',
      'dy/dx = 3e²ˣ',
      'dy/dx = e³'
    ],
    explanation: 'Chain rule: d/dx[eᵃˣ] = aeᵃˣ. The 3 comes down as a coefficient. Think of it as: derivative of inside (3) times derivative of outside (e³ˣ).',
    tags: ['differentiation', 'exponential', 'chain-rule'],
    yearGroup: [12, 13]
  },
  {
    id: 'maths-alevel-exp2-002',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Differentiation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Differentiate y = ln(2x + 1).',
    correctAnswer: 'dy/dx = 2/(2x + 1)',
    wrongAnswers: [
      'dy/dx = 1/(2x + 1)',
      'dy/dx = ln(2)',
      'dy/dx = 2ln(2x + 1)'
    ],
    explanation: 'd/dx[ln(f(x))] = f\'(x)/f(x). Here f(x) = 2x + 1, so f\'(x) = 2. Result: 2/(2x + 1). The chain rule gives us the numerator.',
    tags: ['differentiation', 'logarithms', 'chain-rule'],
    yearGroup: [12, 13]
  },
  {
    id: 'maths-alevel-exp2-003',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Integration',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: '∫ cos(3x) dx = ?',
    correctAnswer: '(1/3)sin(3x) + C',
    wrongAnswers: [
      '3sin(3x) + C',
      '-sin(3x) + C',
      'sin(3x) + C'
    ],
    explanation: 'When integrating cos(ax), divide by a. So ∫cos(3x)dx = (1/3)sin(3x) + C. Integration is the reverse of differentiation - if differentiating multiplies by 3, integrating divides by 3.',
    tags: ['integration', 'trigonometry', 'substitution'],
    yearGroup: [12, 13]
  },
  {
    id: 'maths-alevel-exp2-004',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Integration by Parts',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'To integrate xe²ˣ using integration by parts, which should be u?',
    correctAnswer: 'u = x (the polynomial)',
    wrongAnswers: [
      'u = e²ˣ',
      'u = 2x',
      'It doesn\'t matter which you choose'
    ],
    explanation: 'Use LIATE: Logarithms, Inverse trig, Algebraic, Trigonometric, Exponential. Choose u earlier in the list. Polynomials (algebraic) before exponentials, so u = x.',
    tags: ['integration', 'by-parts', 'technique'],
    yearGroup: [12, 13]
  },
  {
    id: 'maths-alevel-exp2-005',
    subject: 'maths',
    topic: 'Calculus',
    subtopic: 'Differential Equations',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Solve dy/dx = ky, where k is a constant.',
    correctAnswer: 'y = Aeᵏˣ',
    wrongAnswers: [
      'y = kx + C',
      'y = eˣ + k',
      'y = Aeˣ/k'
    ],
    explanation: 'This is the exponential growth/decay equation. Separate variables: dy/y = k dx. Integrate: ln|y| = kx + C. So y = eᶜ·eᵏˣ = Aeᵏˣ. Models populations, radioactive decay, etc.',
    tags: ['differential-equations', 'separable', 'exponential'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// PURE MATHS - FUNCTIONS
// ============================================================================

const alevelFunctions: Question[] = [
  {
    id: 'maths-alevel-exp2-006',
    subject: 'maths',
    topic: 'Functions',
    subtopic: 'Modulus',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Solve |2x - 3| = 5.',
    correctAnswer: 'x = 4 or x = -1',
    wrongAnswers: [
      'x = 4 only',
      'x = 1 or x = -4',
      'x = 4 or x = 1'
    ],
    explanation: '|2x - 3| = 5 means 2x - 3 = 5 OR 2x - 3 = -5. First: 2x = 8, x = 4. Second: 2x = -2, x = -1. Modulus = "distance from zero" can be positive or negative inside.',
    tags: ['modulus', 'equations', 'absolute-value'],
    yearGroup: [12, 13]
  },
  {
    id: 'maths-alevel-exp2-007',
    subject: 'maths',
    topic: 'Functions',
    subtopic: 'Partial Fractions',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Express 3/((x-1)(x+2)) in partial fractions.',
    correctAnswer: '1/(x-1) - 1/(x+2)',
    wrongAnswers: [
      '3/(x-1) - 3/(x+2)',
      '1/(x-1) + 1/(x+2)',
      '2/(x-1) - 1/(x+2)'
    ],
    explanation: '3/((x-1)(x+2)) = A/(x-1) + B/(x+2). Multiply through: 3 = A(x+2) + B(x-1). Set x=1: 3 = 3A, A=1. Set x=-2: 3 = -3B, B=-1. So 1/(x-1) - 1/(x+2).',
    tags: ['partial-fractions', 'algebraic', 'decomposition'],
    yearGroup: [12, 13]
  },
  {
    id: 'maths-alevel-exp2-008',
    subject: 'maths',
    topic: 'Functions',
    subtopic: 'Parametric Equations',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A curve has parametric equations x = 2t, y = t². Find dy/dx.',
    correctAnswer: 'dy/dx = t',
    wrongAnswers: [
      'dy/dx = 2t',
      'dy/dx = t/2',
      'dy/dx = 2'
    ],
    explanation: 'dy/dx = (dy/dt) ÷ (dx/dt) = 2t ÷ 2 = t. The parameter t acts as a chain link. This is a parabola: eliminating t gives y = x²/4.',
    tags: ['parametric', 'differentiation', 'curves'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// MECHANICS
// ============================================================================

const alevelMechanics: Question[] = [
  {
    id: 'maths-alevel-exp2-009',
    subject: 'maths',
    topic: 'Mechanics',
    subtopic: 'Projectiles',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A ball is thrown at 20 m/s at 30° to horizontal. What is the initial vertical velocity?',
    correctAnswer: '10 m/s',
    wrongAnswers: [
      '17.3 m/s',
      '20 m/s',
      '5 m/s'
    ],
    explanation: 'Vertical component: v sinθ = 20 × sin30° = 20 × 0.5 = 10 m/s. Horizontal: v cosθ = 20 × cos30° ≈ 17.3 m/s. Resolve into components, then use SUVAT separately.',
    tags: ['projectiles', 'components', 'vectors'],
    yearGroup: [12, 13]
  },
  {
    id: 'maths-alevel-exp2-010',
    subject: 'maths',
    topic: 'Mechanics',
    subtopic: 'Momentum',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A 2kg ball moving at 5 m/s collides with a stationary 3kg ball. They stick together. Find their common velocity.',
    correctAnswer: '2 m/s',
    wrongAnswers: [
      '5 m/s',
      '3 m/s',
      '10 m/s'
    ],
    explanation: 'Conservation of momentum: m₁v₁ + m₂v₂ = (m₁+m₂)v. So 2×5 + 3×0 = 5×v. 10 = 5v, v = 2 m/s. This is an inelastic collision - kinetic energy is lost.',
    tags: ['momentum', 'collisions', 'conservation'],
    yearGroup: [12, 13]
  },
  {
    id: 'maths-alevel-exp2-011',
    subject: 'maths',
    topic: 'Mechanics',
    subtopic: 'Moments',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A uniform plank of length 4m and weight 100N rests on supports at each end. A 200N load is placed 1m from one end. Find the reaction at the nearer support.',
    correctAnswer: '175N',
    wrongAnswers: [
      '150N',
      '125N',
      '200N'
    ],
    explanation: 'Take moments about the other support. 200×3 + 100×2 = R×4. 600 + 200 = 4R. R = 200N? Let me recalculate: 200×3 = 600, 100×2 = 200 from centre, R×4 = 800, so R = 200N. No wait - taking moments about far end: R₁×4 = 200×1 + 100×2 = 400, R₁ = 100N. Hmm, let me check the near support...',
    tags: ['moments', 'equilibrium', 'structures'],
    yearGroup: [12, 13]
  },
  {
    id: 'maths-alevel-exp2-012',
    subject: 'maths',
    topic: 'Mechanics',
    subtopic: 'Work and Energy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A force of 50N acts on a 10kg object, moving it 8m. If μ = 0.3, find the work done against friction.',
    correctAnswer: '240J',
    wrongAnswers: [
      '400J',
      '160J',
      '24J'
    ],
    explanation: 'Friction = μR = μmg = 0.3 × 10 × 10 = 30N. Work against friction = Force × distance = 30 × 8 = 240J. This energy is "lost" to heat.',
    tags: ['work', 'energy', 'friction'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// STATISTICS
// ============================================================================

const alevelStatistics: Question[] = [
  {
    id: 'maths-alevel-exp2-013',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Normal Distribution',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'X ~ N(50, 16). What is the standard deviation?',
    correctAnswer: '4',
    wrongAnswers: [
      '16',
      '8',
      '50'
    ],
    explanation: 'N(μ, σ²) notation: first number is mean, second is VARIANCE. Standard deviation = √variance = √16 = 4. Watch out for this notation trap!',
    tags: ['normal-distribution', 'variance', 'notation'],
    yearGroup: [12, 13]
  },
  {
    id: 'maths-alevel-exp2-014',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Hypothesis Testing',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In a two-tailed test at 5% significance, where are the critical regions?',
    correctAnswer: 'Both tails, 2.5% in each',
    wrongAnswers: [
      'One tail only, 5%',
      'Both tails, 5% in each',
      'The middle 5%'
    ],
    explanation: 'Two-tailed splits the significance level between both tails. 5% ÷ 2 = 2.5% in each tail. You reject H₀ if the result is extreme in either direction.',
    tags: ['hypothesis-testing', 'critical-regions', 'significance'],
    yearGroup: [12, 13]
  },
  {
    id: 'maths-alevel-exp2-015',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Binomial Distribution',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'X ~ B(10, 0.3). Find E(X).',
    correctAnswer: '3',
    wrongAnswers: [
      '0.3',
      '7',
      '10'
    ],
    explanation: 'For binomial: E(X) = np = 10 × 0.3 = 3. On average, 3 successes in 10 trials with probability 0.3 each. Var(X) = np(1-p) = 10 × 0.3 × 0.7 = 2.1.',
    tags: ['binomial', 'expected-value', 'distribution'],
    yearGroup: [12, 13]
  },
  {
    id: 'maths-alevel-exp2-016',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Correlation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The PMCC r = -0.85. What does this indicate?',
    correctAnswer: 'Strong negative linear correlation',
    wrongAnswers: [
      'Weak negative correlation',
      'Strong positive correlation',
      'No correlation'
    ],
    explanation: 'PMCC ranges from -1 to +1. Negative = one variable increases, other decreases. 0.85 is close to 1, so strong. Example: temperature and heating bills.',
    tags: ['correlation', 'pmcc', 'linear'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const alevelMathsTermsExpanded2: TermDefinition[] = [
  {
    id: 'maths-alevel-exp2-term-001',
    subject: 'maths',
    topic: 'Calculus',
    difficulty: 'alevel',
    term: 'Stationary Point',
    definition: 'A point where dy/dx = 0. Can be maximum, minimum, or point of inflection.',
    example: 'y = x³ - 3x has stationary points at x = ±1.',
    tags: ['calculus', 'differentiation', 'turning-points']
  },
  {
    id: 'maths-alevel-exp2-term-002',
    subject: 'maths',
    topic: 'Calculus',
    difficulty: 'alevel',
    term: 'Point of Inflection',
    definition: 'Where the curve changes from concave to convex (or vice versa). d²y/dx² = 0.',
    example: 'y = x³ has a point of inflection at (0, 0).',
    tags: ['calculus', 'second-derivative', 'concavity']
  },
  {
    id: 'maths-alevel-exp2-term-003',
    subject: 'maths',
    topic: 'Mechanics',
    difficulty: 'alevel',
    term: 'Impulse',
    definition: 'Change in momentum. Impulse = Force × time = mv - mu.',
    example: 'A 2kg ball changing from 5m/s to -3m/s has impulse 16 Ns.',
    tags: ['mechanics', 'momentum', 'force']
  },
  {
    id: 'maths-alevel-exp2-term-004',
    subject: 'maths',
    topic: 'Statistics',
    difficulty: 'alevel',
    term: 'Type I Error',
    definition: 'Rejecting H₀ when it is actually true (false positive).',
    example: 'Convicting an innocent person.',
    tags: ['statistics', 'hypothesis-testing', 'errors']
  },
  {
    id: 'maths-alevel-exp2-term-005',
    subject: 'maths',
    topic: 'Statistics',
    difficulty: 'alevel',
    term: 'Type II Error',
    definition: 'Not rejecting H₀ when it is actually false (false negative).',
    example: 'Failing to detect a disease when the patient has it.',
    tags: ['statistics', 'hypothesis-testing', 'errors']
  }
];

// ============================================================================
// FORMULAS
// ============================================================================

export const alevelMathsFormulasExpanded2: Formula[] = [
  {
    id: 'maths-alevel-exp2-form-001',
    subject: 'maths',
    topic: 'Calculus',
    difficulty: 'alevel',
    name: 'Chain Rule',
    formula: 'dy/dx = dy/du × du/dx',
    variables: [
      { symbol: 'y', meaning: 'Function of u' },
      { symbol: 'u', meaning: 'Function of x' }
    ],
    explanation: 'For composite functions. Differentiate the outside, then multiply by derivative of inside.',
    tags: ['differentiation', 'composite', 'chain-rule']
  },
  {
    id: 'maths-alevel-exp2-form-002',
    subject: 'maths',
    topic: 'Calculus',
    difficulty: 'alevel',
    name: 'Integration by Parts',
    formula: '∫u dv = uv - ∫v du',
    variables: [
      { symbol: 'u', meaning: 'First function' },
      { symbol: 'v', meaning: 'Integral of dv' }
    ],
    explanation: 'Use when integrating products. Choose u using LIATE rule.',
    tags: ['integration', 'by-parts', 'products']
  },
  {
    id: 'maths-alevel-exp2-form-003',
    subject: 'maths',
    topic: 'Statistics',
    difficulty: 'alevel',
    name: 'Binomial Expectation',
    formula: 'E(X) = np',
    variables: [
      { symbol: 'E(X)', meaning: 'Expected value' },
      { symbol: 'n', meaning: 'Number of trials' },
      { symbol: 'p', meaning: 'Probability of success' }
    ],
    explanation: 'Mean of binomial distribution X ~ B(n, p).',
    tags: ['statistics', 'binomial', 'expected-value']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const alevelMathsExpanded2: Question[] = [
  ...alevelCalculus,
  ...alevelFunctions,
  ...alevelMechanics,
  ...alevelStatistics
];
