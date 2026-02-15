/**
 * KS3 Maths Expanded Question Bank
 * Fun-first gamified maths for Years 7-9
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================
// NUMBER - BASICS & OPERATIONS
// ============================================

export const ks3MathsNumberBasics: Question[] = [
  {
    id: 'math-ks3-exp-num-001',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Place Value',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In the number 45,678, what is the value of the digit 5?',
    correctAnswer: '5,000',
    wrongAnswers: ['500', '50', '5'],
    explanation: 'The 5 is in the thousands column! Read from right: 8 is units, 7 is tens, 6 is hundreds, 5 is thousands. So it\'s worth 5 × 1000 = 5,000. Place value is like addresses for digits!',
    hint: 'Count the columns from the right',
    tags: ['number', 'place-value', 'basics'],
    yearGroup: [7]
  },
  {
    id: 'math-ks3-exp-num-002',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Negative Numbers',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'What is -8 + 5?',
    correctAnswer: -3,
    wrongAnswers: [-13, 3, 13],
    explanation: 'Start at -8 on the number line, move 5 steps right (adding), and you land on -3. Think of it like owing £8, then getting £5 - you still owe £3!',
    hint: 'Use a number line - adding means moving right',
    tags: ['number', 'negative', 'operations'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-num-003',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Negative Numbers',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'What is -4 × -3?',
    correctAnswer: 12,
    wrongAnswers: [-12, -7, 7],
    explanation: 'Negative × negative = positive! Think of it as "the opposite of the opposite" which brings you back to positive. Two wrongs DO make a right in maths!',
    hint: 'What happens when you multiply two negatives?',
    tags: ['number', 'negative', 'multiplication'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-num-004',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Order of Operations',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'Calculate: 3 + 4 × 2',
    correctAnswer: 11,
    wrongAnswers: [14, 10, 24],
    explanation: 'BIDMAS/BODMAS! Multiplication before addition. So 4 × 2 = 8 first, then 3 + 8 = 11. Not left to right - operations have a pecking order!',
    hint: 'Remember BIDMAS - which operation comes first?',
    tags: ['number', 'bodmas', 'operations'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-num-005',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Powers',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'What is 2⁴?',
    correctAnswer: 16,
    wrongAnswers: [8, 6, 24],
    explanation: '2⁴ means 2 × 2 × 2 × 2 = 16. The small number (exponent) tells you how many times to multiply. Powers grow FAST - 2¹⁰ is already 1024!',
    hint: 'Multiply 2 by itself 4 times',
    tags: ['number', 'powers', 'indices'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'math-ks3-exp-num-006',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Square Roots',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'What is √81?',
    correctAnswer: 9,
    wrongAnswers: [8, 9.5, 41],
    explanation: 'Square root asks: what number times itself gives 81? Since 9 × 9 = 81, √81 = 9. It\'s the opposite of squaring!',
    hint: 'What number multiplied by itself equals 81?',
    tags: ['number', 'roots', 'squares'],
    yearGroup: [7, 8, 9]
  },
];

// ============================================
// NUMBER - FRACTIONS, DECIMALS, PERCENTAGES
// ============================================

export const ks3MathsFDP: Question[] = [
  {
    id: 'math-ks3-exp-fdp-001',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Fractions',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is ½ + ¼?',
    correctAnswer: '¾',
    wrongAnswers: ['²⁄₆', '¼', '²⁄₄'],
    explanation: 'Find a common denominator! ½ = ²⁄₄, so ²⁄₄ + ¼ = ³⁄₄. You can\'t just add tops and bottoms - that\'s like adding apples and oranges!',
    hint: 'Convert to the same denominator first',
    tags: ['fractions', 'addition', 'basics'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-fdp-002',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Fractions',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is ²⁄₃ × ³⁄₄?',
    correctAnswer: '½',
    wrongAnswers: ['⁶⁄₇', '⁵⁄₇', '²⁄₄'],
    explanation: 'Multiplying fractions is easy - tops × tops, bottoms × bottoms! (2×3)/(3×4) = 6/12 = ½. No common denominators needed for multiplication!',
    hint: 'Multiply numerators, multiply denominators, then simplify',
    tags: ['fractions', 'multiplication', 'simplifying'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-fdp-003',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Decimals',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'Convert ³⁄₈ to a decimal.',
    correctAnswer: 0.375,
    wrongAnswers: [0.38, 0.3, 3.8],
    explanation: 'Divide top by bottom: 3 ÷ 8 = 0.375. You can also build up: ⅛ = 0.125, so ³⁄₈ = 3 × 0.125 = 0.375.',
    hint: 'Divide the numerator by the denominator',
    tags: ['fractions', 'decimals', 'conversion'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-fdp-004',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Percentages',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'What is 15% of 80?',
    correctAnswer: 12,
    wrongAnswers: [15, 8, 120],
    explanation: 'Method 1: 10% of 80 = 8, 5% = 4, so 15% = 12. Method 2: 80 × 0.15 = 12. Finding 10% first is often the quickest trick!',
    hint: 'Find 10% and 5% separately, then add',
    tags: ['percentages', 'calculation', 'mental-maths'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'math-ks3-exp-fdp-005',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'Percentages',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'A £60 item is reduced by 25%. What is the sale price?',
    correctAnswer: 45,
    wrongAnswers: [35, 15, 75],
    explanation: '25% of £60 = £15 (quarter of 60). Sale price = £60 - £15 = £45. Or multiply by 0.75 directly (100% - 25% = 75%).',
    hint: 'Find 25% first, then subtract from the original',
    tags: ['percentages', 'decrease', 'money'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'math-ks3-exp-fdp-006',
    subject: 'maths',
    topic: 'Number',
    subtopic: 'FDP Conversion',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match equivalent values:',
    correctAnswer: ['½ → 0.5 → 50%', '¼ → 0.25 → 25%', '⅕ → 0.2 → 20%', '⅛ → 0.125 → 12.5%'],
    wrongAnswers: [],
    explanation: 'These conversions are worth memorizing! Fractions, decimals, and percentages are just different ways of writing the same value. Fluency in converting helps with mental maths.',
    hint: 'These are key equivalents to know by heart',
    tags: ['fdp', 'conversion', 'equivalents'],
    yearGroup: [7, 8]
  },
];

// ============================================
// ALGEBRA BASICS
// ============================================

export const ks3MathsAlgebraBasics: Question[] = [
  {
    id: 'math-ks3-exp-alg-001',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Simplifying',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Simplify: 3a + 2b + 5a - b',
    correctAnswer: '8a + b',
    wrongAnswers: ['8ab', '10ab', '8a + 3b'],
    explanation: 'Collect like terms! 3a + 5a = 8a, and 2b - b = b. You can only combine terms with the same letter. Think of a and b as different types of fruit - you can\'t add apples and bananas!',
    hint: 'Group the a terms and b terms separately',
    tags: ['algebra', 'simplifying', 'like-terms'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-alg-002',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Substitution',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'If x = 4, what is 3x + 7?',
    correctAnswer: 19,
    wrongAnswers: [14, 34, 21],
    explanation: 'Replace x with 4: 3 × 4 + 7 = 12 + 7 = 19. Substitution is just swapping letters for numbers. The × sign is hidden between 3 and x!',
    hint: '3x means 3 times x',
    tags: ['algebra', 'substitution', 'evaluation'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-alg-003',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Expanding',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Expand: 3(x + 4)',
    correctAnswer: '3x + 12',
    wrongAnswers: ['3x + 4', 'x + 12', '7x'],
    explanation: 'Multiply everything inside the bracket by 3: 3 × x = 3x, and 3 × 4 = 12. The bracket is like a protective shield - you must get past it by multiplying everything inside!',
    hint: 'Multiply both terms inside by 3',
    tags: ['algebra', 'expanding', 'brackets'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'math-ks3-exp-alg-004',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Factorising',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Factorise: 6x + 9',
    correctAnswer: '3(2x + 3)',
    wrongAnswers: ['6(x + 9)', '3(2x + 9)', '9(x + 1)'],
    explanation: 'Find the highest common factor of 6 and 9, which is 3. Divide both terms by 3: 6x ÷ 3 = 2x, 9 ÷ 3 = 3. So 6x + 9 = 3(2x + 3). Factorising is the reverse of expanding!',
    hint: 'What\'s the highest number that divides both 6 and 9?',
    tags: ['algebra', 'factorising', 'hcf'],
    yearGroup: [8, 9]
  },
  {
    id: 'math-ks3-exp-alg-005',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Equations',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'Solve: 2x + 5 = 13',
    correctAnswer: 4,
    wrongAnswers: [9, 3, 6],
    explanation: 'Get x alone! Subtract 5 from both sides: 2x = 8. Then divide by 2: x = 4. Whatever you do to one side, do to the other - keep the equation balanced!',
    hint: 'First get rid of the +5, then deal with the ×2',
    tags: ['algebra', 'equations', 'solving'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'math-ks3-exp-alg-006',
    subject: 'maths',
    topic: 'Algebra',
    subtopic: 'Equations',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'Solve: 3x - 7 = x + 5',
    correctAnswer: 6,
    wrongAnswers: [4, -1, 12],
    explanation: 'Get all x terms on one side! Subtract x from both sides: 2x - 7 = 5. Add 7: 2x = 12. Divide by 2: x = 6. Check: 3(6) - 7 = 11, and 6 + 5 = 11 ✓',
    hint: 'First collect x terms on one side',
    tags: ['algebra', 'equations', 'two-step'],
    yearGroup: [8, 9]
  },
];

// ============================================
// GEOMETRY - ANGLES & SHAPES
// ============================================

export const ks3MathsGeometry: Question[] = [
  {
    id: 'math-ks3-exp-geo-001',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Angles',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'Two angles on a straight line are x° and 130°. Find x.',
    correctAnswer: 50,
    wrongAnswers: [130, 230, 40],
    explanation: 'Angles on a straight line add to 180°! So x + 130 = 180, meaning x = 50°. A straight line is half a full turn (360° ÷ 2 = 180°).',
    hint: 'What do angles on a straight line add up to?',
    tags: ['geometry', 'angles', 'straight-line'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-geo-002',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Angles',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'Find the missing angle in a triangle with angles 65° and 75°.',
    correctAnswer: 40,
    wrongAnswers: [140, 80, 60],
    explanation: 'Angles in a triangle sum to 180°! So missing angle = 180 - 65 - 75 = 40°. This works for ANY triangle - right-angled, isosceles, scalene, all of them!',
    hint: 'Triangle angles always add up to 180°',
    tags: ['geometry', 'angles', 'triangles'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-geo-003',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Polygons',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'What is the sum of interior angles in a pentagon (5 sides)?',
    correctAnswer: 540,
    wrongAnswers: [360, 720, 450],
    explanation: 'Formula: (n-2) × 180° where n = sides. For pentagon: (5-2) × 180 = 3 × 180 = 540°. Think of it as splitting into triangles - a pentagon makes 3 triangles!',
    hint: 'Use (n-2) × 180 where n is the number of sides',
    tags: ['geometry', 'polygons', 'angles'],
    yearGroup: [8, 9]
  },
  {
    id: 'math-ks3-exp-geo-004',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Area',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'Find the area of a triangle with base 8cm and height 5cm.',
    correctAnswer: 20,
    wrongAnswers: [40, 13, 25],
    explanation: 'Area of triangle = ½ × base × height = ½ × 8 × 5 = 20 cm². It\'s half a rectangle with the same base and height!',
    hint: 'Triangle area is half of base times height',
    tags: ['geometry', 'area', 'triangles'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-geo-005',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Circles',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'A circle has radius 7cm. What is its circumference? (Use π = 22/7)',
    correctAnswer: '44 cm',
    wrongAnswers: ['14 cm', '154 cm', '22 cm'],
    explanation: 'Circumference = 2πr = 2 × (22/7) × 7 = 44 cm. The 7s cancel nicely! Circumference is the distance around the outside - the perimeter of a circle.',
    hint: 'C = 2πr, and π ≈ 22/7',
    tags: ['geometry', 'circles', 'circumference'],
    yearGroup: [8, 9]
  },
  {
    id: 'math-ks3-exp-geo-006',
    subject: 'maths',
    topic: 'Geometry',
    subtopic: 'Pythagoras',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'A right triangle has legs of 3cm and 4cm. Find the hypotenuse.',
    correctAnswer: 5,
    wrongAnswers: [7, 12, 6],
    explanation: 'Pythagoras: a² + b² = c². So 3² + 4² = 9 + 16 = 25 = c². Therefore c = √25 = 5. The 3-4-5 triangle is famous - memorize it!',
    hint: 'Use a² + b² = c² then square root',
    tags: ['geometry', 'pythagoras', 'triangles'],
    yearGroup: [8, 9]
  },
];

// ============================================
// STATISTICS & PROBABILITY
// ============================================

export const ks3MathsStats: Question[] = [
  {
    id: 'math-ks3-exp-stat-001',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Averages',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'Find the mean of: 4, 7, 8, 9, 12',
    correctAnswer: 8,
    wrongAnswers: [7, 9, 40],
    explanation: 'Mean = sum ÷ count = (4+7+8+9+12) ÷ 5 = 40 ÷ 5 = 8. The mean is the "fair share" - if you shared 40 sweets equally among 5 people.',
    hint: 'Add all values, then divide by how many there are',
    tags: ['statistics', 'mean', 'averages'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-stat-002',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Averages',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'Find the median of: 3, 7, 9, 15, 21',
    correctAnswer: 9,
    wrongAnswers: [11, 7, 15],
    explanation: 'Median = middle value when ordered! Already in order, and there are 5 values, so the middle (3rd) is 9. If there were 6 values, you\'d average the two middle ones.',
    hint: 'Find the middle value',
    tags: ['statistics', 'median', 'averages'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-stat-003',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Range',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'Find the range of: 12, 5, 23, 8, 17',
    correctAnswer: 18,
    wrongAnswers: [23, 5, 13],
    explanation: 'Range = highest - lowest = 23 - 5 = 18. Range measures spread - how far apart the data is. A larger range means more variation.',
    hint: 'Subtract the smallest from the largest',
    tags: ['statistics', 'range', 'spread'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-stat-004',
    subject: 'maths',
    topic: 'Probability',
    subtopic: 'Basic',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'A bag contains 3 red and 5 blue balls. What\'s the probability of picking red?',
    correctAnswer: '3/8',
    wrongAnswers: ['3/5', '5/8', '1/3'],
    explanation: 'Probability = favorable outcomes ÷ total outcomes = 3 ÷ 8 = 3/8. Total balls = 3 + 5 = 8. Probability is always between 0 (impossible) and 1 (certain).',
    hint: 'Divide red balls by total balls',
    tags: ['probability', 'basic', 'fractions'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'math-ks3-exp-stat-005',
    subject: 'maths',
    topic: 'Probability',
    subtopic: 'Expected Frequency',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'If I flip a fair coin 50 times, how many heads would I expect?',
    correctAnswer: 25,
    wrongAnswers: [50, 10, 30],
    explanation: 'Expected frequency = probability × trials = ½ × 50 = 25. This is the EXPECTED value - in practice you might get 23 or 27, but on average it\'s 25.',
    hint: 'Multiply the probability by the number of trials',
    tags: ['probability', 'expected', 'frequency'],
    yearGroup: [8, 9]
  },
  {
    id: 'math-ks3-exp-stat-006',
    subject: 'maths',
    topic: 'Statistics',
    subtopic: 'Pie Charts',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'In a pie chart, what angle represents 25% of the data?',
    correctAnswer: 90,
    wrongAnswers: [25, 45, 180],
    explanation: 'Full circle = 360°. So 25% = ¼ of 360° = 90°. Think: 25% is a quarter, and a quarter turn is a right angle (90°)!',
    hint: '25% is the same as ¼',
    tags: ['statistics', 'pie-charts', 'angles'],
    yearGroup: [7, 8]
  },
];

// ============================================
// RATIO & PROPORTION
// ============================================

export const ks3MathsRatio: Question[] = [
  {
    id: 'math-ks3-exp-rat-001',
    subject: 'maths',
    topic: 'Ratio',
    subtopic: 'Simplifying',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Simplify the ratio 12:18',
    correctAnswer: '2:3',
    wrongAnswers: ['4:6', '6:9', '1:1.5'],
    explanation: 'Find the HCF of 12 and 18, which is 6. Divide both by 6: 12÷6 : 18÷6 = 2:3. Simplifying ratios is like simplifying fractions!',
    hint: 'Divide both numbers by their highest common factor',
    tags: ['ratio', 'simplifying', 'hcf'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-rat-002',
    subject: 'maths',
    topic: 'Ratio',
    subtopic: 'Sharing',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'Share £45 in the ratio 2:3. What is the larger share?',
    correctAnswer: 27,
    wrongAnswers: [18, 15, 22.5],
    explanation: 'Total parts = 2 + 3 = 5. One part = £45 ÷ 5 = £9. Larger share = 3 parts = 3 × £9 = £27. Always find what "one part" is worth first!',
    hint: 'Find the total number of parts, then the value of one part',
    tags: ['ratio', 'sharing', 'division'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'math-ks3-exp-rat-003',
    subject: 'maths',
    topic: 'Proportion',
    subtopic: 'Direct',
    difficulty: 'ks3',
    type: 'numeric',
    question: '5 books cost £35. How much do 8 books cost?',
    correctAnswer: 56,
    wrongAnswers: [40, 64, 43],
    explanation: 'One book = £35 ÷ 5 = £7. So 8 books = 8 × £7 = £56. This is direct proportion - as quantity increases, cost increases at the same rate.',
    hint: 'Find the cost of one book first',
    tags: ['proportion', 'direct', 'unitary'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'math-ks3-exp-rat-004',
    subject: 'maths',
    topic: 'Ratio',
    subtopic: 'Maps & Scales',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'A map has scale 1:50000. Two towns are 3cm apart on the map. What is the real distance in km?',
    correctAnswer: 1.5,
    wrongAnswers: [150, 15, 0.15],
    explanation: 'Real distance = 3 × 50000 = 150000 cm = 1500 m = 1.5 km. Remember: 100cm = 1m, 1000m = 1km. Scale maps make the world pocket-sized!',
    hint: 'Multiply map distance by scale factor, then convert units',
    tags: ['ratio', 'scale', 'maps'],
    yearGroup: [8, 9]
  },
];

// ============================================
// SEQUENCES
// ============================================

export const ks3MathsSequences: Question[] = [
  {
    id: 'math-ks3-exp-seq-001',
    subject: 'maths',
    topic: 'Sequences',
    subtopic: 'Term-to-Term',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'Find the next term: 3, 7, 11, 15, ...',
    correctAnswer: 19,
    wrongAnswers: [17, 20, 22],
    explanation: 'The pattern is +4 each time (term-to-term rule). So next = 15 + 4 = 19. This is an arithmetic sequence with common difference 4.',
    hint: 'What\'s added each time?',
    tags: ['sequences', 'arithmetic', 'patterns'],
    yearGroup: [7, 8]
  },
  {
    id: 'math-ks3-exp-seq-002',
    subject: 'maths',
    topic: 'Sequences',
    subtopic: 'nth Term',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'The sequence 5, 8, 11, 14... has nth term:',
    correctAnswer: '3n + 2',
    wrongAnswers: ['3n', 'n + 3', '3n + 5'],
    explanation: 'Common difference = 3, so it\'s 3n + something. When n=1: 3(1) + ? = 5, so ? = 2. nth term = 3n + 2. Check: n=2 gives 3(2)+2 = 8 ✓',
    hint: 'The coefficient of n equals the common difference',
    tags: ['sequences', 'nth-term', 'formula'],
    yearGroup: [8, 9]
  },
  {
    id: 'math-ks3-exp-seq-003',
    subject: 'maths',
    topic: 'Sequences',
    subtopic: 'Geometric',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'Find the next term: 2, 6, 18, 54, ...',
    correctAnswer: 162,
    wrongAnswers: [108, 72, 216],
    explanation: 'Each term is multiplied by 3 (common ratio = 3). So 54 × 3 = 162. This is a geometric sequence - it multiplies rather than adds!',
    hint: 'What do you multiply by each time?',
    tags: ['sequences', 'geometric', 'patterns'],
    yearGroup: [8, 9]
  },
];

// ============================================
// TERMS
// ============================================

export const ks3MathsTermsExpanded: TermDefinition[] = [
  {
    id: 'math-ks3-exp-term-001',
    subject: 'maths',
    difficulty: 'ks3',
    term: 'Integer',
    definition: 'A whole number, which can be positive, negative, or zero',
    example: '-5, 0, 7, and 100 are all integers. 3.5 is not an integer.',
    tags: ['number', 'integers', 'definitions']
  },
  {
    id: 'math-ks3-exp-term-002',
    subject: 'maths',
    difficulty: 'ks3',
    term: 'Prime Number',
    definition: 'A number greater than 1 that can only be divided by 1 and itself',
    example: '2, 3, 5, 7, 11, 13 are prime. 9 is not prime (divides by 3). 2 is the only even prime!',
    tags: ['number', 'primes', 'definitions']
  },
  {
    id: 'math-ks3-exp-term-003',
    subject: 'maths',
    difficulty: 'ks3',
    term: 'Coefficient',
    definition: 'The number multiplied by a variable in an algebraic term',
    example: 'In 5x, the coefficient is 5. In -3y², the coefficient is -3.',
    tags: ['algebra', 'terms', 'definitions']
  },
  {
    id: 'math-ks3-exp-term-004',
    subject: 'maths',
    difficulty: 'ks3',
    term: 'Hypotenuse',
    definition: 'The longest side of a right-angled triangle, opposite the right angle',
    example: 'In a 3-4-5 right triangle, 5 is the hypotenuse.',
    tags: ['geometry', 'triangles', 'definitions']
  },
  {
    id: 'math-ks3-exp-term-005',
    subject: 'maths',
    difficulty: 'ks3',
    term: 'Reciprocal',
    definition: 'One divided by a number, or flipping a fraction upside down',
    example: 'The reciprocal of 4 is ¼. The reciprocal of ²⁄₃ is ³⁄₂.',
    tags: ['number', 'fractions', 'definitions']
  },
  {
    id: 'math-ks3-exp-term-006',
    subject: 'maths',
    difficulty: 'ks3',
    term: 'Perpendicular',
    definition: 'Lines or planes meeting at right angles (90°)',
    example: 'The corner of a room where walls meet the floor is perpendicular.',
    tags: ['geometry', 'lines', 'definitions']
  },
];

// ============================================
// FORMULAS
// ============================================

export const ks3MathsFormulasExpanded: Formula[] = [
  {
    id: 'math-ks3-exp-form-001',
    subject: 'maths',
    topic: 'Geometry',
    difficulty: 'ks3',
    name: 'Area of Rectangle',
    formula: 'A = l × w',
    variables: [
      { symbol: 'A', meaning: 'Area' },
      { symbol: 'l', meaning: 'Length' },
      { symbol: 'w', meaning: 'Width' }
    ],
    units: 'Square units (cm², m²)',
    description: 'Count the unit squares inside a rectangle'
  },
  {
    id: 'math-ks3-exp-form-002',
    subject: 'maths',
    topic: 'Geometry',
    difficulty: 'ks3',
    name: 'Area of Triangle',
    formula: 'A = ½ × b × h',
    variables: [
      { symbol: 'A', meaning: 'Area' },
      { symbol: 'b', meaning: 'Base' },
      { symbol: 'h', meaning: 'Perpendicular height' }
    ],
    units: 'Square units',
    description: 'Half the area of a rectangle with same base and height'
  },
  {
    id: 'math-ks3-exp-form-003',
    subject: 'maths',
    topic: 'Geometry',
    difficulty: 'ks3',
    name: 'Circumference of Circle',
    formula: 'C = 2πr or C = πd',
    variables: [
      { symbol: 'C', meaning: 'Circumference' },
      { symbol: 'r', meaning: 'Radius' },
      { symbol: 'd', meaning: 'Diameter' }
    ],
    units: 'Length units (cm, m)',
    description: 'Distance around the outside of a circle'
  },
  {
    id: 'math-ks3-exp-form-004',
    subject: 'maths',
    topic: 'Statistics',
    difficulty: 'ks3',
    name: 'Mean',
    formula: 'Mean = Sum of values ÷ Number of values',
    description: 'The average - what each value would be if shared equally'
  },
];

// Combined exports
export const ks3MathsExpanded = [
  ...ks3MathsNumberBasics,
  ...ks3MathsFDP,
  ...ks3MathsAlgebraBasics,
  ...ks3MathsGeometry,
  ...ks3MathsStats,
  ...ks3MathsRatio,
  ...ks3MathsSequences,
];
