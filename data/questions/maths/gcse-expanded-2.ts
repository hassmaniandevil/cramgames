/**
 * GCSE Maths Expanded Part 2
 * Additional questions covering all major GCSE topics
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================================================
// NUMBER - ADVANCED
// ============================================================================

const gcseMathsNumberAdvanced: Question[] = [
  {
    id: 'maths-gcse-exp2-001',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Standard Form',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Calculate (3 × 10⁴) × (4 × 10⁵) and give your answer in standard form.',
    correctAnswer: '1.2 × 10¹⁰',
    wrongAnswers: [
      '12 × 10⁹',
      '1.2 × 10⁹',
      '12 × 10²⁰'
    ],
    explanation: 'Multiply the numbers: 3 × 4 = 12. Add the powers: 10⁴ × 10⁵ = 10⁹. So 12 × 10⁹ = 1.2 × 10¹⁰ in proper standard form (1 ≤ a < 10).',
    tags: ['standard-form', 'multiplication', 'powers'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-002',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Surds',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Simplify √75.',
    correctAnswer: '5√3',
    wrongAnswers: [
      '3√5',
      '25√3',
      '√75 (cannot be simplified)'
    ],
    explanation: '√75 = √(25 × 3) = √25 × √3 = 5√3. Find the largest square factor (25) and simplify. This is like extracting perfect squares from under the root.',
    tags: ['surds', 'simplification', 'roots'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-003',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Surds',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Rationalise the denominator: 6/(√2).',
    correctAnswer: '3√2',
    wrongAnswers: [
      '6√2',
      '3/√2',
      '6√2/2'
    ],
    explanation: 'Multiply top and bottom by √2: (6 × √2)/(√2 × √2) = 6√2/2 = 3√2. We\'ve removed the irrational number from the denominator.',
    tags: ['surds', 'rationalising', 'fractions'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-004',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Bounds',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A length is 8.4 cm to 1 decimal place. What are the error bounds?',
    correctAnswer: '8.35 ≤ length < 8.45',
    wrongAnswers: [
      '8.3 ≤ length < 8.5',
      '8.4 ≤ length ≤ 8.4',
      '8.35 < length < 8.45'
    ],
    explanation: 'With 1 d.p., the error is ±0.05. Lower bound: 8.4 - 0.05 = 8.35 (included). Upper bound: 8.4 + 0.05 = 8.45 (not included, would round to 8.5).',
    tags: ['bounds', 'accuracy', 'decimals'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// ALGEBRA - ADVANCED
// ============================================================================

const gcseMathsAlgebraAdvanced: Question[] = [
  {
    id: 'maths-gcse-exp2-005',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Quadratic Equations',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Solve x² + 5x + 6 = 0 by factorising.',
    correctAnswer: 'x = -2 or x = -3',
    wrongAnswers: [
      'x = 2 or x = 3',
      'x = -2 or x = 3',
      'x = 1 or x = 6'
    ],
    explanation: 'Find two numbers that multiply to +6 and add to +5: that\'s +2 and +3. So (x + 2)(x + 3) = 0. Therefore x = -2 or x = -3.',
    tags: ['quadratics', 'factorising', 'equations'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-006',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Quadratic Formula',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'For the quadratic ax² + bx + c = 0, what is the discriminant?',
    correctAnswer: 'b² - 4ac',
    wrongAnswers: [
      'b² + 4ac',
      '4ac - b²',
      '2a'
    ],
    explanation: 'The discriminant tells you about the roots: if b² - 4ac > 0, two real roots; = 0, one repeated root; < 0, no real roots. It\'s the bit under the square root in the quadratic formula.',
    tags: ['quadratics', 'discriminant', 'roots'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-007',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Simultaneous Equations',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'Solve: 2x + 3y = 13 and 4x - y = 5. Find the value of x.',
    correctAnswer: '2',
    explanation: 'From equation 2: y = 4x - 5. Substitute into equation 1: 2x + 3(4x - 5) = 13 → 2x + 12x - 15 = 13 → 14x = 28 → x = 2.',
    tags: ['simultaneous', 'substitution', 'linear'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-008',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Algebraic Fractions',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Simplify: (x² - 9)/(x + 3).',
    correctAnswer: 'x - 3',
    wrongAnswers: [
      'x + 3',
      'x² - 3',
      '(x - 9)/3'
    ],
    explanation: 'x² - 9 is a difference of two squares: (x + 3)(x - 3). So (x + 3)(x - 3)/(x + 3) = x - 3. The (x + 3) cancels out.',
    tags: ['algebraic-fractions', 'factorising', 'difference-of-squares'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-009',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Inequalities',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Solve 3x - 7 < 2x + 5.',
    correctAnswer: 'x < 12',
    wrongAnswers: [
      'x > 12',
      'x < -12',
      'x > -2'
    ],
    explanation: 'Subtract 2x from both sides: x - 7 < 5. Add 7 to both sides: x < 12. Treat it like an equation - just don\'t flip the sign unless multiplying/dividing by negative.',
    tags: ['inequalities', 'linear', 'solving'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-010',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Functions',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'If f(x) = 3x - 2, find f⁻¹(x).',
    correctAnswer: '(x + 2)/3',
    wrongAnswers: [
      '3x + 2',
      '(x - 2)/3',
      '1/(3x - 2)'
    ],
    explanation: 'To find the inverse: let y = 3x - 2. Swap x and y: x = 3y - 2. Solve for y: x + 2 = 3y, so y = (x + 2)/3. The inverse "undoes" the function.',
    tags: ['functions', 'inverse', 'notation'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// GEOMETRY - ADVANCED
// ============================================================================

const gcseMathsGeometryAdvanced: Question[] = [
  {
    id: 'maths-gcse-exp2-011',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Circle Theorems',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'An angle at the centre of a circle is 140°. What is the angle at the circumference subtended by the same arc?',
    correctAnswer: '70°',
    wrongAnswers: [
      '140°',
      '280°',
      '35°'
    ],
    explanation: 'Circle theorem: angle at centre = 2 × angle at circumference. So angle at circumference = 140° ÷ 2 = 70°. Picture the arc "spreading out" more when viewed from the edge.',
    tags: ['circle-theorems', 'angles', 'geometry'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-012',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Circle Theorems',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A tangent meets a radius at point P. What is the angle between them?',
    correctAnswer: '90°',
    wrongAnswers: [
      '45°',
      '60°',
      'It depends on the circle'
    ],
    explanation: 'A tangent is always perpendicular to the radius at the point of contact. This is one of the most important circle properties!',
    tags: ['circle-theorems', 'tangent', 'perpendicular'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-013',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Trigonometry',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'Find sin 30°.',
    correctAnswer: '0.5',
    explanation: 'The exact values: sin 30° = 0.5, cos 30° = √3/2, tan 30° = 1/√3. These come from the 30-60-90 triangle (half an equilateral). Worth memorising!',
    tags: ['trigonometry', 'exact-values', 'sine'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-014',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Sine Rule',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In a triangle, a = 8cm, A = 45°, B = 60°. Which formula finds side b?',
    correctAnswer: 'b = 8 × sin60°/sin45°',
    wrongAnswers: [
      'b = 8 × sin45°/sin60°',
      'b = 8 × cos60°/cos45°',
      'b = 8 × tan60°'
    ],
    explanation: 'Sine rule: a/sinA = b/sinB. So b/sin60° = 8/sin45°. Therefore b = 8 × sin60°/sin45°. Use this when you have angle-side pairs.',
    tags: ['trigonometry', 'sine-rule', 'non-right-triangles'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-015',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Vectors',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'If a = (3, 2) and b = (1, -4), find a + b.',
    correctAnswer: '(4, -2)',
    wrongAnswers: [
      '(4, 6)',
      '(2, 6)',
      '(-2, -2)'
    ],
    explanation: 'Add components separately: (3 + 1, 2 + (-4)) = (4, -2). Vectors add like tip-to-tail arrows. The result is the "shortcut" from start to finish.',
    tags: ['vectors', 'addition', 'components'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-016',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Transformations',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which transformation maps shape A to shape B if B is twice the size of A and in the same position?',
    correctAnswer: 'Enlargement, scale factor 2, centre at a vertex of A',
    wrongAnswers: [
      'Rotation 180°',
      'Translation by vector (2, 2)',
      'Reflection in the y-axis'
    ],
    explanation: 'Size change = enlargement. Scale factor 2 doubles the size. The centre must be on shape A if B overlaps the original position. Enlargements preserve angles but not lengths.',
    tags: ['transformations', 'enlargement', 'scale-factor'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// STATISTICS AND PROBABILITY
// ============================================================================

const gcseMathsStatsProb: Question[] = [
  {
    id: 'maths-gcse-exp2-017',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Histograms',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In a histogram, the frequency of a class is represented by what?',
    correctAnswer: 'The area of the bar',
    wrongAnswers: [
      'The height of the bar',
      'The width of the bar',
      'The perimeter of the bar'
    ],
    explanation: 'Unlike bar charts, histograms use AREA, not height. Frequency density = frequency ÷ class width. This allows fair comparison of different class widths.',
    tags: ['histograms', 'frequency-density', 'statistics'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-018',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Cumulative Frequency',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'On a cumulative frequency graph, how do you find the median?',
    correctAnswer: 'Find the value at n/2 on the cumulative frequency axis',
    wrongAnswers: [
      'Find the highest point',
      'Calculate the mean of all values',
      'Find where the graph crosses the x-axis'
    ],
    explanation: 'Plot cumulative frequency vs upper class boundary. The median is at n/2 (half of total). Draw horizontal to curve, then down to x-axis. Q1 is at n/4, Q3 at 3n/4.',
    tags: ['cumulative-frequency', 'median', 'quartiles'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-019',
    subject: 'maths',
    topic: 'Probability',
    subtopic: 'Tree Diagrams',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A bag has 3 red and 2 blue balls. One is picked, not replaced, then another. P(both red)?',
    correctAnswer: '3/5 × 2/4 = 6/20 = 3/10',
    wrongAnswers: [
      '3/5 × 3/5 = 9/25',
      '3/5 × 2/5 = 6/25',
      '3/5 + 2/4 = 11/10'
    ],
    explanation: 'Without replacement: first pick P(red) = 3/5. Now 4 balls left, 2 red: second P(red) = 2/4. Multiply along branches: 3/5 × 2/4 = 6/20 = 3/10.',
    tags: ['probability', 'tree-diagrams', 'without-replacement'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-020',
    subject: 'maths',
    topic: 'Probability',
    subtopic: 'Venn Diagrams',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In a Venn diagram, what does P(A ∩ B) represent?',
    correctAnswer: 'Probability of both A AND B',
    wrongAnswers: [
      'Probability of A OR B',
      'Probability of A only',
      'Probability of neither A nor B'
    ],
    explanation: '∩ means intersection = AND = the overlap. ∪ means union = OR = everything in either. P(A ∩ B) is found in the football-shaped overlap region.',
    tags: ['probability', 'venn-diagrams', 'set-notation'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// RATIO AND PROPORTION
// ============================================================================

const gcseMathsRatioProportion: Question[] = [
  {
    id: 'maths-gcse-exp2-021',
    subject: 'maths',
    topic: 'Ratio',
    subtopic: 'Direct Proportion',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'y is directly proportional to x². If y = 12 when x = 2, find y when x = 3.',
    correctAnswer: '27',
    wrongAnswers: [
      '18',
      '36',
      '24'
    ],
    explanation: 'y = kx². Using y = 12, x = 2: 12 = k × 4, so k = 3. When x = 3: y = 3 × 9 = 27. The k value stays constant throughout.',
    tags: ['proportion', 'direct', 'quadratic'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-022',
    subject: 'maths',
    topic: 'Ratio',
    subtopic: 'Inverse Proportion',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'y is inversely proportional to x. If y = 6 when x = 4, find y when x = 8.',
    correctAnswer: '3',
    wrongAnswers: [
      '12',
      '48',
      '2'
    ],
    explanation: 'y = k/x. Using y = 6, x = 4: 6 = k/4, so k = 24. When x = 8: y = 24/8 = 3. As x doubles, y halves - that\'s inverse proportion.',
    tags: ['proportion', 'inverse', 'reciprocal'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-023',
    subject: 'maths',
    topic: 'Ratio',
    subtopic: 'Compound Interest',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '£500 invested at 3% compound interest per year. Value after 2 years?',
    correctAnswer: '£530.45',
    wrongAnswers: [
      '£530.00',
      '£515.00',
      '£545.00'
    ],
    explanation: 'Compound: 500 × 1.03² = 500 × 1.0609 = £530.45. Each year multiplies by 1.03. Simple interest would give £530 (just adding 3% of original each year).',
    tags: ['compound-interest', 'growth', 'percentage'],
    yearGroup: [10, 11]
  },
  {
    id: 'maths-gcse-exp2-024',
    subject: 'maths',
    topic: 'Ratio',
    subtopic: 'Similar Shapes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Two similar cylinders have heights in ratio 2:3. Their volumes are in ratio?',
    correctAnswer: '8:27',
    wrongAnswers: [
      '2:3',
      '4:9',
      '6:9'
    ],
    explanation: 'For similar shapes: lengths in ratio k:1, areas in k²:1, volumes in k³:1. Heights 2:3 means volumes 2³:3³ = 8:27. This applies to all similar 3D shapes.',
    tags: ['similar-shapes', 'ratio', 'volume'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const gcseMathsTermsExpanded2: TermDefinition[] = [
  {
    id: 'maths-gcse-exp2-term-001',
    subject: 'maths',
    topic: 'Number',
    difficulty: 'gcse',
    term: 'Surd',
    definition: 'An irrational root that cannot be simplified to a whole number, like √2 or √3.',
    example: '√8 = 2√2 is a surd in simplified form.',
    tags: ['surds', 'irrational', 'roots']
  },
  {
    id: 'maths-gcse-exp2-term-002',
    subject: 'maths',
    topic: 'Number',
    difficulty: 'gcse',
    term: 'Upper Bound',
    definition: 'The highest possible value a rounded measurement could be.',
    example: '5.7 to 1 d.p. has upper bound 5.75 (not included).',
    tags: ['bounds', 'accuracy', 'measurement']
  },
  {
    id: 'maths-gcse-exp2-term-003',
    subject: 'maths',
    topic: 'Algebra',
    difficulty: 'gcse',
    term: 'Discriminant',
    definition: 'b² - 4ac from the quadratic formula. Determines the nature of roots.',
    example: 'If discriminant > 0, two distinct real roots.',
    tags: ['quadratics', 'roots', 'discriminant']
  },
  {
    id: 'maths-gcse-exp2-term-004',
    subject: 'maths',
    topic: 'Algebra',
    difficulty: 'gcse',
    term: 'Inverse Function',
    definition: 'A function that reverses another function, written f⁻¹(x).',
    example: 'If f(x) = 2x + 1, then f⁻¹(x) = (x - 1)/2.',
    tags: ['functions', 'inverse', 'mapping']
  },
  {
    id: 'maths-gcse-exp2-term-005',
    subject: 'maths',
    topic: 'Geometry',
    difficulty: 'gcse',
    term: 'Cyclic Quadrilateral',
    definition: 'A quadrilateral with all four vertices on a circle. Opposite angles sum to 180°.',
    example: 'If one angle is 70°, the opposite angle is 110°.',
    tags: ['circles', 'quadrilaterals', 'angles']
  },
  {
    id: 'maths-gcse-exp2-term-006',
    subject: 'maths',
    topic: 'Statistics',
    difficulty: 'gcse',
    term: 'Frequency Density',
    definition: 'Frequency ÷ class width. Used for the y-axis in histograms.',
    example: 'Frequency 20 in class width 5 gives density 4.',
    tags: ['histograms', 'frequency', 'density']
  }
];

// ============================================================================
// FORMULAS
// ============================================================================

export const gcseMathsFormulasExpanded2: Formula[] = [
  {
    id: 'maths-gcse-exp2-form-001',
    subject: 'maths',
    topic: 'Algebra',
    difficulty: 'gcse',
    name: 'Quadratic Formula',
    formula: 'x = (-b ± √(b² - 4ac)) / 2a',
    variables: [
      { symbol: 'a', meaning: 'Coefficient of x²' },
      { symbol: 'b', meaning: 'Coefficient of x' },
      { symbol: 'c', meaning: 'Constant term' }
    ],
    explanation: 'Solves any quadratic ax² + bx + c = 0. The ± gives two solutions.',
    tags: ['quadratics', 'solving', 'formula']
  },
  {
    id: 'maths-gcse-exp2-form-002',
    subject: 'maths',
    topic: 'Geometry',
    difficulty: 'gcse',
    name: 'Sine Rule',
    formula: 'a/sinA = b/sinB = c/sinC',
    variables: [
      { symbol: 'a, b, c', meaning: 'Sides of triangle' },
      { symbol: 'A, B, C', meaning: 'Angles opposite to sides a, b, c' }
    ],
    explanation: 'For non-right triangles. Use when you have angle-side pairs.',
    tags: ['trigonometry', 'triangles', 'non-right']
  },
  {
    id: 'maths-gcse-exp2-form-003',
    subject: 'maths',
    topic: 'Geometry',
    difficulty: 'gcse',
    name: 'Cosine Rule',
    formula: 'a² = b² + c² - 2bc cosA',
    variables: [
      { symbol: 'a', meaning: 'Side to find (opposite angle A)' },
      { symbol: 'b, c', meaning: 'Other two sides' },
      { symbol: 'A', meaning: 'Included angle' }
    ],
    explanation: 'Use when you have two sides and included angle, or all three sides.',
    tags: ['trigonometry', 'triangles', 'non-right']
  },
  {
    id: 'maths-gcse-exp2-form-004',
    subject: 'maths',
    topic: 'Statistics',
    difficulty: 'gcse',
    name: 'Interquartile Range',
    formula: 'IQR = Q3 - Q1',
    variables: [
      { symbol: 'IQR', meaning: 'Interquartile range' },
      { symbol: 'Q1', meaning: 'Lower quartile (25th percentile)' },
      { symbol: 'Q3', meaning: 'Upper quartile (75th percentile)' }
    ],
    explanation: 'Measures spread of middle 50% of data. Not affected by outliers.',
    tags: ['statistics', 'spread', 'quartiles']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const gcseMathsExpanded2: Question[] = [
  ...gcseMathsNumberAdvanced,
  ...gcseMathsAlgebraAdvanced,
  ...gcseMathsGeometryAdvanced,
  ...gcseMathsStatsProb,
  ...gcseMathsRatioProportion
];
