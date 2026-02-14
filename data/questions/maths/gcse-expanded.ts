/**
 * GCSE Maths Expanded Question Bank
 * Fun-first gamified questions with real-world contexts
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================
// NUMBER & ALGEBRA
// ============================================

export const gcseMathsNumberAlgebra: Question[] = [
  // STANDARD FORM
  {
    id: 'math-gcse-exp-sf-001',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Standard Form',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The distance to the Moon is 384,400 km. What\'s this in standard form?',
    correctAnswer: '3.844 × 10⁵ km',
    wrongAnswers: ['38.44 × 10⁴ km', '384.4 × 10³ km', '3.844 × 10⁶ km'],
    explanation: 'Move the decimal to get a number between 1 and 10 (3.844), then count how many places you moved it (5 places right = 10⁵). Perfect for space stuff!',
    hint: 'The number before × 10 must be between 1 and 10',
    tags: ['standard form', 'powers', 'space'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-sf-002',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Standard Form',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'A virus is 0.00012 mm across. Express this in standard form as a × 10ⁿ. What is n?',
    correctAnswer: '-4',
    wrongAnswers: [],
    explanation: '0.00012 = 1.2 × 10⁻⁴. We moved the decimal 4 places right to get 1.2, so n = -4 (negative because original number was less than 1).',
    hint: 'Negative powers mean numbers less than 1',
    tags: ['standard form', 'negative powers', 'science'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-sf-003',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Standard Form',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '(3 × 10⁴) × (2 × 10³) = ?',
    correctAnswer: '6 × 10⁷',
    wrongAnswers: ['6 × 10¹²', '5 × 10⁷', '6 × 10¹'],
    explanation: 'Multiply the numbers (3 × 2 = 6) and add the powers (4 + 3 = 7). Laws of indices make standard form calculations easy!',
    hint: 'Multiply the numbers, add the powers',
    tags: ['standard form', 'indices', 'multiplication'],
    yearGroup: [10, 11]
  },

  // SURDS
  {
    id: 'math-gcse-exp-surd-001',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Surds',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Simplify √72',
    correctAnswer: '6√2',
    wrongAnswers: ['8√2', '3√8', '√72 (cannot simplify)'],
    explanation: '72 = 36 × 2 = 6² × 2. So √72 = √(36 × 2) = √36 × √2 = 6√2. Find the biggest square number that fits!',
    hint: 'Find a square number that divides into 72',
    tags: ['surds', 'simplify', 'square roots'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-surd-002',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Surds',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Rationalise the denominator: 1/(√3)',
    correctAnswer: '√3/3',
    wrongAnswers: ['3/√3', '√3', '1/3'],
    explanation: 'Multiply top and bottom by √3: (1 × √3)/(√3 × √3) = √3/3. No surds in the denominator = rationalised!',
    hint: 'Multiply by √3/√3 (which equals 1)',
    tags: ['surds', 'rationalise', 'fractions'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-surd-003',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Surds',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '(2 + √3)(2 - √3) = ?',
    correctAnswer: '1',
    wrongAnswers: ['4 - 3', '4 + 3', '7'],
    explanation: 'This is "difference of two squares": (a+b)(a-b) = a² - b². So (2)² - (√3)² = 4 - 3 = 1. The surds cancel out!',
    hint: 'Use the difference of two squares pattern',
    tags: ['surds', 'expand', 'difference of squares'],
    yearGroup: [10, 11]
  },

  // INDICES
  {
    id: 'math-gcse-exp-ind-001',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Indices',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is 27^(2/3)?',
    correctAnswer: '9',
    wrongAnswers: ['18', '81', '3'],
    explanation: 'The denominator (3) is the root, the numerator (2) is the power. So 27^(2/3) = (³√27)² = 3² = 9. Root first, then power!',
    hint: 'Fractional indices: bottom is root, top is power',
    tags: ['indices', 'fractional', 'powers'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-ind-002',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Indices',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Simplify: (x³)⁴ ÷ x⁵',
    correctAnswer: 'x⁷',
    wrongAnswers: ['x¹²', 'x⁷/⁵', 'x²'],
    explanation: '(x³)⁴ = x¹² (multiply powers). Then x¹² ÷ x⁵ = x⁷ (subtract powers). Index laws are your best friends!',
    hint: 'Power of a power = multiply. Division = subtract.',
    tags: ['indices', 'laws', 'simplify'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-ind-003',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Indices',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is 16^(-3/4)?',
    correctAnswer: '1/8',
    wrongAnswers: ['-8', '8', '-1/8'],
    explanation: 'Negative power = reciprocal. 16^(3/4) = (⁴√16)³ = 2³ = 8. So 16^(-3/4) = 1/8. Negative flips it upside down!',
    hint: 'Negative power means 1 over the positive version',
    tags: ['indices', 'negative', 'fractional'],
    yearGroup: [10, 11]
  },

  // QUADRATICS
  {
    id: 'math-gcse-exp-quad-001',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Quadratics',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Solve x² - 5x + 6 = 0',
    correctAnswer: 'x = 2 or x = 3',
    wrongAnswers: ['x = -2 or x = -3', 'x = 6 or x = -1', 'x = 1 or x = 6'],
    explanation: 'Factorise: (x - 2)(x - 3) = 0. Either (x - 2) = 0 giving x = 2, or (x - 3) = 0 giving x = 3. Find two numbers that multiply to +6 and add to -5!',
    hint: 'Find two numbers that multiply to 6 and add to -5',
    tags: ['quadratics', 'factorise', 'solve'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-quad-002',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Quadratics',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Use the quadratic formula to solve x² + 2x - 5 = 0. What are the solutions (to 2 d.p.)?',
    correctAnswer: 'x = 1.45 or x = -3.45',
    wrongAnswers: ['x = 2.45 or x = -2.45', 'x = 1.45 or x = 3.45', 'x = 0.45 or x = -4.45'],
    explanation: 'x = (-b ± √(b²-4ac))/2a = (-2 ± √(4+20))/2 = (-2 ± √24)/2. √24 ≈ 4.899, so x = (-2 + 4.899)/2 = 1.45 or x = (-2 - 4.899)/2 = -3.45',
    hint: 'a=1, b=2, c=-5. Plug into x = (-b ± √(b²-4ac))/2a',
    tags: ['quadratics', 'formula', 'solve'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-quad-003',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Quadratics',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A ball is thrown upward. Its height h metres after t seconds is h = 20t - 5t². When does it hit the ground?',
    correctAnswer: 't = 4 seconds',
    wrongAnswers: ['t = 2 seconds', 't = 5 seconds', 't = 20 seconds'],
    explanation: 'Ground = h = 0. So 20t - 5t² = 0. Factor: 5t(4 - t) = 0. t = 0 (start) or t = 4 (landing). Physics and maths unite!',
    hint: 'Set h = 0 and solve for t',
    tags: ['quadratics', 'physics', 'real world'],
    yearGroup: [10, 11]
  },

  // SIMULTANEOUS EQUATIONS
  {
    id: 'math-gcse-exp-sim-001',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Simultaneous Equations',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Solve: 2x + y = 10 and x - y = 2',
    correctAnswer: 'x = 4, y = 2',
    wrongAnswers: ['x = 2, y = 6', 'x = 3, y = 4', 'x = 5, y = 0'],
    explanation: 'Add the equations: 3x = 12, so x = 4. Substitute back: 2(4) + y = 10, so y = 2. Elimination is your friend!',
    hint: 'Add the equations to eliminate y',
    tags: ['simultaneous', 'linear', 'elimination'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-sim-002',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Simultaneous Equations',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '3 pizzas and 2 drinks cost £26. 2 pizzas and 3 drinks cost £24. How much is one pizza?',
    correctAnswer: '£6',
    wrongAnswers: ['£8', '£5', '£7'],
    explanation: 'Let p = pizza, d = drink. 3p + 2d = 26 and 2p + 3d = 24. Multiply first by 3 and second by 2, subtract: 5p = 30, p = £6. Maths feeds you!',
    hint: 'Set up two equations and eliminate one variable',
    tags: ['simultaneous', 'word problem', 'real world'],
    yearGroup: [10, 11]
  },

  // INEQUALITIES
  {
    id: 'math-gcse-exp-ineq-001',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Inequalities',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Solve 3x - 7 < 2x + 5',
    correctAnswer: 'x < 12',
    wrongAnswers: ['x > 12', 'x < -12', 'x > -12'],
    explanation: 'Rearrange: 3x - 2x < 5 + 7, so x < 12. Treat it like an equation, but keep the inequality sign pointing the right way!',
    hint: 'Rearrange like an equation',
    tags: ['inequalities', 'linear', 'solve'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-ineq-002',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Inequalities',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Solve -2x > 8',
    correctAnswer: 'x < -4',
    wrongAnswers: ['x > -4', 'x > 4', 'x < 4'],
    explanation: 'Divide by -2, BUT flip the sign when dividing by negative: x < -4. This catches out so many people - remember to flip!',
    hint: 'When you divide/multiply by a negative, FLIP the inequality sign',
    tags: ['inequalities', 'negative', 'flip'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-ineq-003',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Inequalities',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'List the integers that satisfy -3 < x ≤ 2',
    correctAnswer: '-2, -1, 0, 1, 2',
    wrongAnswers: ['-3, -2, -1, 0, 1, 2', '-2, -1, 0, 1', '-3, -2, -1, 0, 1'],
    explanation: 'x > -3 (not including -3) and x ≤ 2 (including 2). So start at -2 and go up to and including 2. The symbols matter!',
    hint: '< means not included, ≤ means included',
    tags: ['inequalities', 'integers', 'notation'],
    yearGroup: [10, 11]
  },
];

// ============================================
// GEOMETRY & MEASURES
// ============================================

export const gcseMathsGeometry: Question[] = [
  // TRIGONOMETRY
  {
    id: 'math-gcse-exp-trig-001',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Trigonometry',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'SOH CAH TOA! In a right-angled triangle, sin θ = opposite/hypotenuse. If sin θ = 0.6 and the opposite side is 9cm, what\'s the hypotenuse?',
    correctAnswer: '15 cm',
    wrongAnswers: ['5.4 cm', '14.4 cm', '10 cm'],
    explanation: '0.6 = 9/hypotenuse, so hypotenuse = 9/0.6 = 15 cm. SOH tells you: Sin = Opposite/Hypotenuse. Rearrange to find what you need!',
    hint: 'Rearrange: hypotenuse = opposite ÷ sin θ',
    tags: ['trigonometry', 'sin', 'SOHCAHTOA'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-trig-002',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Trigonometry',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A ladder leans against a wall at 70° to the ground. The ladder is 4m long. How high up the wall does it reach?',
    correctAnswer: '3.76 m',
    wrongAnswers: ['1.37 m', '2.73 m', '4.26 m'],
    explanation: 'Height is opposite to the 70° angle, ladder is hypotenuse. sin 70° = height/4, so height = 4 × sin 70° = 4 × 0.94 = 3.76 m',
    hint: 'You have hypotenuse, you want opposite, use SIN',
    tags: ['trigonometry', 'sin', 'real world'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-trig-003',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Trigonometry',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Find angle x if tan x = 7/4 (give answer to 1 d.p.)',
    correctAnswer: '60.3°',
    wrongAnswers: ['29.7°', '75.3°', '45.0°'],
    explanation: 'If tan x = 7/4 = 1.75, then x = tan⁻¹(1.75) = 60.3°. Use the inverse tan button on your calculator (tan⁻¹ or arctan).',
    hint: 'Use inverse tan (tan⁻¹) on your calculator',
    tags: ['trigonometry', 'tan', 'inverse'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-trig-004',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Trigonometry',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In a non-right triangle, side a = 8 cm, angle A = 40°, angle B = 70°. Find side b using the sine rule.',
    correctAnswer: '11.7 cm',
    wrongAnswers: ['5.5 cm', '8.7 cm', '14.2 cm'],
    explanation: 'Sine rule: a/sin A = b/sin B. So 8/sin 40° = b/sin 70°. b = 8 × sin 70°/sin 40° = 8 × 0.94/0.64 = 11.7 cm',
    hint: 'Sine rule: a/sinA = b/sinB',
    tags: ['trigonometry', 'sine rule', 'non-right'],
    yearGroup: [10, 11]
  },

  // CIRCLE THEOREMS
  {
    id: 'math-gcse-exp-circle-001',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Circle Theorems',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'An angle at the centre of a circle is 140°. What is the angle at the circumference subtended by the same arc?',
    correctAnswer: '70°',
    wrongAnswers: ['140°', '280°', '40°'],
    explanation: 'The angle at the centre is TWICE the angle at the circumference. So circumference angle = 140° ÷ 2 = 70°. This theorem comes up constantly!',
    hint: 'Centre angle = 2 × circumference angle',
    tags: ['circles', 'theorems', 'angles'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-circle-002',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Circle Theorems',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'ABCD is a cyclic quadrilateral (all corners on a circle). Angle A = 85°. What is angle C?',
    correctAnswer: '95°',
    wrongAnswers: ['85°', '170°', '180°'],
    explanation: 'In a cyclic quadrilateral, opposite angles add up to 180°. So C = 180° - 85° = 95°. Think of it as angles "balancing" across the circle.',
    hint: 'Opposite angles in a cyclic quad sum to 180°',
    tags: ['circles', 'theorems', 'cyclic'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-circle-003',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Circle Theorems',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A tangent meets a radius at the circumference. What angle do they make?',
    correctAnswer: '90°',
    wrongAnswers: ['45°', '180°', '60°'],
    explanation: 'A tangent is ALWAYS perpendicular to the radius at the point of contact. Always 90°, no exceptions! This is why wheels roll smoothly.',
    hint: 'Tangent touches the circle at exactly one point, perpendicular to radius',
    tags: ['circles', 'theorems', 'tangent'],
    yearGroup: [10, 11]
  },

  // PYTHAGORAS & 3D
  {
    id: 'math-gcse-exp-pyth-001',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Pythagoras',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A box is 3m × 4m × 12m. What\'s the length of the space diagonal (corner to opposite corner through the box)?',
    correctAnswer: '13 m',
    wrongAnswers: ['19 m', '5 m', '17 m'],
    explanation: 'Use 3D Pythagoras: d² = 3² + 4² + 12² = 9 + 16 + 144 = 169, so d = 13m. Or use base diagonal first: √(9+16) = 5, then √(25+144) = 13.',
    hint: 'd² = l² + w² + h² for 3D Pythagoras',
    tags: ['pythagoras', '3D', 'diagonal'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-pyth-002',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Pythagoras',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A cone has base radius 6cm and slant height 10cm. What\'s the vertical height?',
    correctAnswer: '8 cm',
    wrongAnswers: ['4 cm', '11.66 cm', '16 cm'],
    explanation: 'The radius, height, and slant height form a right triangle. h² + 6² = 10², so h² = 100 - 36 = 64, h = 8cm. Classic 6-8-10 triangle!',
    hint: 'Slant height is the hypotenuse',
    tags: ['pythagoras', 'cone', '3D'],
    yearGroup: [10, 11]
  },

  // VECTORS
  {
    id: 'math-gcse-exp-vec-001',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Vectors',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'If a = (3, 2) and b = (1, -5), what is 2a - b?',
    correctAnswer: '(5, 9)',
    wrongAnswers: ['(5, -1)', '(7, 9)', '(4, -3)'],
    explanation: '2a = (6, 4). 2a - b = (6-1, 4-(-5)) = (5, 9). Multiply each component, then subtract each component. Vectors are just pairs of numbers!',
    hint: 'Work with x and y components separately',
    tags: ['vectors', 'algebra', 'components'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-vec-002',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Vectors',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Point M is the midpoint of AB where A has position vector a and B has position vector b. What is the position vector of M?',
    correctAnswer: '½(a + b)',
    wrongAnswers: ['a + b', '½(b - a)', 'a - b'],
    explanation: 'To get to M, go to A then half way to B: a + ½(b - a) = a + ½b - ½a = ½a + ½b = ½(a + b). The midpoint formula for vectors!',
    hint: 'Average of the two position vectors',
    tags: ['vectors', 'midpoint', 'position'],
    yearGroup: [10, 11]
  },
];

// ============================================
// STATISTICS & PROBABILITY
// ============================================

export const gcseMathsStats: Question[] = [
  // PROBABILITY
  {
    id: 'math-gcse-exp-prob-001',
    subject: 'maths',
    topic: 'Probability',
    subtopic: 'Tree Diagrams',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A bag has 3 red and 2 blue balls. You pick one, DON\'T replace it, then pick another. What\'s P(both red)?',
    correctAnswer: '3/10',
    wrongAnswers: ['9/25', '6/20', '2/5'],
    explanation: 'P(1st red) = 3/5. After removing a red, P(2nd red) = 2/4 = 1/2. P(both red) = 3/5 × 1/2 = 3/10. Without replacement changes the probabilities!',
    hint: 'Multiply probabilities, but update the denominator after first pick',
    tags: ['probability', 'tree diagram', 'without replacement'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-prob-002',
    subject: 'maths',
    topic: 'Probability',
    subtopic: 'Conditional Probability',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'P(A) = 0.4, P(B) = 0.5, P(A and B) = 0.2. Find P(A given B).',
    correctAnswer: '0.4',
    wrongAnswers: ['0.2', '0.5', '0.25'],
    explanation: 'P(A|B) = P(A and B)/P(B) = 0.2/0.5 = 0.4. "Given B" means we\'re only considering outcomes where B happened, so B is our new "sample space."',
    hint: 'P(A|B) = P(A and B) ÷ P(B)',
    tags: ['probability', 'conditional', 'formula'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-prob-003',
    subject: 'maths',
    topic: 'Probability',
    subtopic: 'Venn Diagrams',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In a class of 30: 18 play football (F), 12 play tennis (T), and 5 play both. How many play neither?',
    correctAnswer: '5',
    wrongAnswers: ['0', '10', '3'],
    explanation: 'F only = 18-5 = 13, T only = 12-5 = 7, both = 5. Total playing something = 13+7+5 = 25. Neither = 30-25 = 5. Venn diagrams make this visible!',
    hint: 'Don\'t double-count the "both" section',
    tags: ['probability', 'venn diagram', 'sets'],
    yearGroup: [10, 11]
  },

  // STATISTICS
  {
    id: 'math-gcse-exp-stats-001',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Histograms',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In a histogram, what does the HEIGHT of a bar represent?',
    correctAnswer: 'Frequency density',
    wrongAnswers: ['Frequency', 'Class width', 'Cumulative frequency'],
    explanation: 'Histograms use frequency DENSITY (frequency ÷ class width), not just frequency. The AREA of each bar represents frequency. This handles unequal class widths!',
    hint: 'It\'s not frequency - there\'s a special term for histograms',
    tags: ['statistics', 'histograms', 'density'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-stats-002',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Cumulative Frequency',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'On a cumulative frequency graph, you find the median at the...',
    correctAnswer: 'n/2 position on the cumulative frequency axis',
    wrongAnswers: ['n position', 'n/4 position', 'Top of the graph'],
    explanation: 'For median: find n/2 on the y-axis (cumulative frequency), go across to the curve, then down to the x-axis. For quartiles: n/4 and 3n/4.',
    hint: 'Median is the middle value - half of n',
    tags: ['statistics', 'cumulative frequency', 'median'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-stats-003',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Box Plots',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A box plot shows: Min = 12, Q1 = 18, Median = 25, Q3 = 32, Max = 45. What is the interquartile range?',
    correctAnswer: '14',
    wrongAnswers: ['33', '7', '20'],
    explanation: 'IQR = Q3 - Q1 = 32 - 18 = 14. The IQR shows the spread of the middle 50% of data - useful because it\'s not affected by outliers!',
    hint: 'IQR = Upper quartile minus lower quartile',
    tags: ['statistics', 'box plot', 'spread'],
    yearGroup: [10, 11]
  },
  {
    id: 'math-gcse-exp-stats-004',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Correlation',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A scatter graph shows: as x increases, y decreases with points close to a line. Describe the correlation.',
    correctAnswer: 'Strong negative correlation',
    wrongAnswers: ['Strong positive correlation', 'Weak negative correlation', 'No correlation'],
    explanation: 'Negative = one goes up, other goes down. Strong = points are close to the line of best fit. Perfect combo of direction (negative) and strength (strong)!',
    hint: 'Direction (positive/negative) + strength (strong/weak)',
    tags: ['statistics', 'correlation', 'scatter'],
    yearGroup: [10, 11]
  },
];

// ============================================
// GCSE MATHS TERMS
// ============================================

export const gcseMathsTermsExpanded: TermDefinition[] = [
  {
    id: 'math-gcse-term-exp-001',
    subject: 'maths',
    term: 'Surd',
    definition: 'An irrational root like √2 or √3 that can\'t be simplified to a whole number - left in root form for exact answers',
    difficulty: 'gcse',
    relatedTerms: ['irrational', 'root', 'rationalise']
  },
  {
    id: 'math-gcse-term-exp-002',
    subject: 'maths',
    term: 'Rationalise',
    definition: 'Removing a surd from the denominator by multiplying top and bottom by a suitable value',
    difficulty: 'gcse',
    relatedTerms: ['surd', 'denominator', 'fraction']
  },
  {
    id: 'math-gcse-term-exp-003',
    subject: 'maths',
    term: 'Discriminant',
    definition: 'b² - 4ac in the quadratic formula - tells you how many solutions: positive = 2, zero = 1, negative = 0 real solutions',
    difficulty: 'gcse',
    relatedTerms: ['quadratic', 'roots', 'solutions']
  },
  {
    id: 'math-gcse-term-exp-004',
    subject: 'maths',
    term: 'Asymptote',
    definition: 'A line that a curve approaches but never quite touches - like y = 1/x approaching the axes',
    difficulty: 'gcse',
    relatedTerms: ['graph', 'reciprocal', 'limit']
  },
  {
    id: 'math-gcse-term-exp-005',
    subject: 'maths',
    term: 'Vector',
    definition: 'A quantity with both magnitude (size) AND direction - unlike scalars which only have magnitude',
    difficulty: 'gcse',
    relatedTerms: ['scalar', 'magnitude', 'direction']
  },
  {
    id: 'math-gcse-term-exp-006',
    subject: 'maths',
    term: 'Frequency density',
    definition: 'Frequency ÷ class width, used as the height in histograms to allow for unequal class widths',
    difficulty: 'gcse',
    relatedTerms: ['histogram', 'frequency', 'class width']
  },
  {
    id: 'math-gcse-term-exp-007',
    subject: 'maths',
    term: 'Interquartile range (IQR)',
    definition: 'Q3 - Q1, the range of the middle 50% of data - a measure of spread that ignores outliers',
    difficulty: 'gcse',
    relatedTerms: ['quartile', 'spread', 'box plot']
  },
  {
    id: 'math-gcse-term-exp-008',
    subject: 'maths',
    term: 'Cyclic quadrilateral',
    definition: 'A four-sided shape where all corners lie on a circle - opposite angles add up to 180°',
    difficulty: 'gcse',
    relatedTerms: ['circle theorem', 'inscribed', 'quadrilateral']
  },
];

// ============================================
// GCSE MATHS FORMULAS
// ============================================

export const gcseMathsFormulasExpanded: Formula[] = [
  {
    id: 'math-gcse-formula-exp-001',
    subject: 'maths',
    name: 'Quadratic Formula',
    formula: 'x = (-b ± √(b² - 4ac)) / 2a',
    description: 'Solves any quadratic equation ax² + bx + c = 0. The ± means you get TWO answers!',
    difficulty: 'gcse',
    topic: 'Algebra'
  },
  {
    id: 'math-gcse-formula-exp-002',
    subject: 'maths',
    name: 'Sine Rule',
    formula: 'a/sin A = b/sin B = c/sin C',
    description: 'For any triangle (not just right-angled). Use when you have a side and its opposite angle.',
    difficulty: 'gcse',
    topic: 'Trigonometry'
  },
  {
    id: 'math-gcse-formula-exp-003',
    subject: 'maths',
    name: 'Cosine Rule',
    formula: 'a² = b² + c² - 2bc cos A',
    description: 'For finding sides/angles in non-right triangles. Use when you DON\'T have opposite pairs.',
    difficulty: 'gcse',
    topic: 'Trigonometry'
  },
  {
    id: 'math-gcse-formula-exp-004',
    subject: 'maths',
    name: 'Compound Interest',
    formula: 'A = P(1 + r/100)ⁿ',
    description: 'P = principal, r = rate %, n = years. Used for savings, loans, and population growth!',
    difficulty: 'gcse',
    topic: 'Number'
  },
  {
    id: 'math-gcse-formula-exp-005',
    subject: 'maths',
    name: 'Cone Volume',
    formula: 'V = ⅓πr²h',
    description: 'A cone is one-third of a cylinder with the same base and height. Ice cream scoop maths!',
    difficulty: 'gcse',
    topic: 'Geometry'
  },
  {
    id: 'math-gcse-formula-exp-006',
    subject: 'maths',
    name: 'Sphere Volume',
    formula: 'V = ⁴⁄₃πr³',
    description: 'For spheres like balls, planets, bubbles. Remember four-thirds!',
    difficulty: 'gcse',
    topic: 'Geometry'
  },
];

// Combined exports
export const gcseMathsExpanded = [
  ...gcseMathsNumberAlgebra,
  ...gcseMathsGeometry,
  ...gcseMathsStats,
];
