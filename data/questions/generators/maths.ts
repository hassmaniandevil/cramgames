// Maths Question Generator - Produces thousands of varied questions
import { Question } from '../index';

// Helper to shuffle array
const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

// Helper to pick random items
const pick = <T>(arr: T[], n: number): T[] => shuffle(arr).slice(0, n);

// Helper to generate wrong answers for numbers
const wrongNumbers = (correct: number, range: number = 5): string[] => {
  const wrongs: number[] = [];
  while (wrongs.length < 3) {
    const offset = Math.floor(Math.random() * range * 2) - range;
    const wrong = correct + offset;
    if (wrong !== correct && wrong >= 0 && !wrongs.includes(wrong)) {
      wrongs.push(wrong);
    }
  }
  return wrongs.map(String);
};

// ==========================================
// ARITHMETIC GENERATORS (Years 1-6)
// ==========================================

function generateAdditionQuestions(): Question[] {
  const questions: Question[] = [];

  // Year 1: Addition to 10
  for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10 - a; b++) {
      questions.push({
        id: `math-add-y1-${a}-${b}`,
        question: `What is ${a} + ${b}?`,
        correctAnswer: String(a + b),
        wrongAnswers: wrongNumbers(a + b, 3),
        explanation: `${a} + ${b} = ${a + b}. Count on ${b} from ${a}.`,
        subject: 'maths',
        yearGroup: 1,
        topic: 'Addition',
        difficulty: 'easy'
      });
    }
  }

  // Year 2: Addition to 20
  for (let i = 0; i < 50; i++) {
    const a = Math.floor(Math.random() * 15) + 5;
    const b = Math.floor(Math.random() * 15) + 5;
    if (a + b <= 20) {
      questions.push({
        id: `math-add-y2-${i}`,
        question: `What is ${a} + ${b}?`,
        correctAnswer: String(a + b),
        wrongAnswers: wrongNumbers(a + b, 4),
        explanation: `${a} + ${b} = ${a + b}`,
        subject: 'maths',
        yearGroup: 2,
        topic: 'Addition',
        difficulty: 'easy'
      });
    }
  }

  // Year 3: Addition to 100
  for (let i = 0; i < 100; i++) {
    const a = Math.floor(Math.random() * 50) + 10;
    const b = Math.floor(Math.random() * 50) + 10;
    questions.push({
      id: `math-add-y3-${i}`,
      question: `What is ${a} + ${b}?`,
      correctAnswer: String(a + b),
      wrongAnswers: wrongNumbers(a + b, 10),
      explanation: `${a} + ${b} = ${a + b}`,
      subject: 'maths',
      yearGroup: 3,
      topic: 'Addition',
      difficulty: 'easy'
    });
  }

  // Year 4: Addition to 1000
  for (let i = 0; i < 100; i++) {
    const a = Math.floor(Math.random() * 500) + 100;
    const b = Math.floor(Math.random() * 500) + 100;
    questions.push({
      id: `math-add-y4-${i}`,
      question: `What is ${a} + ${b}?`,
      correctAnswer: String(a + b),
      wrongAnswers: wrongNumbers(a + b, 50),
      explanation: `${a} + ${b} = ${a + b}. Add the hundreds, tens, and units.`,
      subject: 'maths',
      yearGroup: 4,
      topic: 'Addition',
      difficulty: 'medium'
    });
  }

  return questions;
}

function generateSubtractionQuestions(): Question[] {
  const questions: Question[] = [];

  // Year 1: Subtraction to 10
  for (let a = 2; a <= 10; a++) {
    for (let b = 1; b < a; b++) {
      questions.push({
        id: `math-sub-y1-${a}-${b}`,
        question: `What is ${a} - ${b}?`,
        correctAnswer: String(a - b),
        wrongAnswers: wrongNumbers(a - b, 3),
        explanation: `${a} - ${b} = ${a - b}. Take away ${b} from ${a}.`,
        subject: 'maths',
        yearGroup: 1,
        topic: 'Subtraction',
        difficulty: 'easy'
      });
    }
  }

  // Year 2-4: Larger subtractions
  for (let year = 2; year <= 4; year++) {
    const max = year === 2 ? 20 : year === 3 ? 100 : 1000;
    for (let i = 0; i < 50; i++) {
      const a = Math.floor(Math.random() * max * 0.8) + max * 0.2;
      const b = Math.floor(Math.random() * a * 0.8);
      questions.push({
        id: `math-sub-y${year}-${i}`,
        question: `What is ${Math.floor(a)} - ${Math.floor(b)}?`,
        correctAnswer: String(Math.floor(a - b)),
        wrongAnswers: wrongNumbers(Math.floor(a - b), Math.floor(max / 20)),
        explanation: `${Math.floor(a)} - ${Math.floor(b)} = ${Math.floor(a - b)}`,
        subject: 'maths',
        yearGroup: year,
        topic: 'Subtraction',
        difficulty: year <= 2 ? 'easy' : 'medium'
      });
    }
  }

  return questions;
}

function generateMultiplicationQuestions(): Question[] {
  const questions: Question[] = [];

  // Times tables (Years 2-4)
  for (let table = 2; table <= 12; table++) {
    for (let mult = 1; mult <= 12; mult++) {
      const year = table <= 5 ? 2 : table <= 10 ? 3 : 4;
      questions.push({
        id: `math-mult-table-${table}-${mult}`,
        question: `What is ${table} × ${mult}?`,
        correctAnswer: String(table * mult),
        wrongAnswers: wrongNumbers(table * mult, Math.max(5, table)),
        explanation: `${table} × ${mult} = ${table * mult}. This is from the ${table} times table.`,
        subject: 'maths',
        yearGroup: year,
        topic: 'Multiplication',
        difficulty: 'easy'
      });

      // Reverse order
      if (mult !== table) {
        questions.push({
          id: `math-mult-table-${mult}-${table}-rev`,
          question: `What is ${mult} × ${table}?`,
          correctAnswer: String(table * mult),
          wrongAnswers: wrongNumbers(table * mult, Math.max(5, table)),
          explanation: `${mult} × ${table} = ${table * mult}. Multiplication is commutative.`,
          subject: 'maths',
          yearGroup: year,
          topic: 'Multiplication',
          difficulty: 'easy'
        });
      }
    }
  }

  // Year 5-6: Larger multiplications
  for (let i = 0; i < 100; i++) {
    const a = Math.floor(Math.random() * 50) + 10;
    const b = Math.floor(Math.random() * 12) + 2;
    questions.push({
      id: `math-mult-y5-${i}`,
      question: `What is ${a} × ${b}?`,
      correctAnswer: String(a * b),
      wrongAnswers: wrongNumbers(a * b, 50),
      explanation: `${a} × ${b} = ${a * b}`,
      subject: 'maths',
      yearGroup: 5,
      topic: 'Multiplication',
      difficulty: 'medium'
    });
  }

  return questions;
}

function generateDivisionQuestions(): Question[] {
  const questions: Question[] = [];

  // Division facts from times tables (Years 3-4)
  for (let divisor = 2; divisor <= 12; divisor++) {
    for (let mult = 1; mult <= 12; mult++) {
      const dividend = divisor * mult;
      questions.push({
        id: `math-div-${dividend}-${divisor}`,
        question: `What is ${dividend} ÷ ${divisor}?`,
        correctAnswer: String(mult),
        wrongAnswers: wrongNumbers(mult, 3),
        explanation: `${dividend} ÷ ${divisor} = ${mult} because ${divisor} × ${mult} = ${dividend}`,
        subject: 'maths',
        yearGroup: divisor <= 5 ? 3 : 4,
        topic: 'Division',
        difficulty: 'easy'
      });
    }
  }

  // Year 5-6: Larger divisions
  for (let i = 0; i < 100; i++) {
    const divisor = Math.floor(Math.random() * 10) + 2;
    const quotient = Math.floor(Math.random() * 50) + 10;
    const dividend = divisor * quotient;
    questions.push({
      id: `math-div-y5-${i}`,
      question: `What is ${dividend} ÷ ${divisor}?`,
      correctAnswer: String(quotient),
      wrongAnswers: wrongNumbers(quotient, 10),
      explanation: `${dividend} ÷ ${divisor} = ${quotient}`,
      subject: 'maths',
      yearGroup: 5,
      topic: 'Division',
      difficulty: 'medium'
    });
  }

  return questions;
}

// ==========================================
// FRACTIONS, DECIMALS, PERCENTAGES (Years 3-11)
// ==========================================

function generateFractionQuestions(): Question[] {
  const questions: Question[] = [];

  // Basic fractions of amounts (Year 3-4)
  const fractions = [
    { num: 1, den: 2, name: 'half' },
    { num: 1, den: 4, name: 'quarter' },
    { num: 3, den: 4, name: 'three quarters' },
    { num: 1, den: 3, name: 'third' },
    { num: 1, den: 5, name: 'fifth' },
    { num: 1, den: 10, name: 'tenth' },
  ];

  fractions.forEach((frac, fi) => {
    const amounts = [10, 12, 20, 24, 30, 40, 50, 60, 100];
    amounts.forEach((amount, ai) => {
      if (amount % frac.den === 0) {
        const answer = (amount * frac.num) / frac.den;
        questions.push({
          id: `math-frac-of-${fi}-${ai}`,
          question: `What is ${frac.num}/${frac.den} of ${amount}?`,
          correctAnswer: String(answer),
          wrongAnswers: wrongNumbers(answer, Math.ceil(answer / 4)),
          explanation: `${frac.num}/${frac.den} of ${amount} = ${amount} ÷ ${frac.den} × ${frac.num} = ${answer}`,
          subject: 'maths',
          yearGroup: 4,
          topic: 'Fractions',
          difficulty: 'easy'
        });
      }
    });
  });

  // Simplifying fractions (Year 5-6)
  const simplifyPairs = [
    { orig: '2/4', simp: '1/2' }, { orig: '3/6', simp: '1/2' }, { orig: '4/8', simp: '1/2' },
    { orig: '2/6', simp: '1/3' }, { orig: '3/9', simp: '1/3' }, { orig: '4/12', simp: '1/3' },
    { orig: '2/8', simp: '1/4' }, { orig: '3/12', simp: '1/4' }, { orig: '5/10', simp: '1/2' },
    { orig: '6/8', simp: '3/4' }, { orig: '9/12', simp: '3/4' }, { orig: '4/6', simp: '2/3' },
    { orig: '6/9', simp: '2/3' }, { orig: '8/12', simp: '2/3' }, { orig: '10/15', simp: '2/3' },
    { orig: '6/10', simp: '3/5' }, { orig: '8/10', simp: '4/5' }, { orig: '15/20', simp: '3/4' },
  ];

  simplifyPairs.forEach((pair, i) => {
    const wrongAnswers = simplifyPairs.filter(p => p.simp !== pair.simp).slice(0, 3).map(p => p.simp);
    questions.push({
      id: `math-simp-frac-${i}`,
      question: `Simplify ${pair.orig}`,
      correctAnswer: pair.simp,
      wrongAnswers,
      explanation: `${pair.orig} simplifies to ${pair.simp} by dividing numerator and denominator by their common factor.`,
      subject: 'maths',
      yearGroup: 5,
      topic: 'Fractions',
      difficulty: 'medium'
    });
  });

  // Adding fractions (Year 5-6)
  const fracAdditions = [
    { q: '1/4 + 1/4', a: '2/4 or 1/2' }, { q: '1/4 + 2/4', a: '3/4' },
    { q: '1/3 + 1/3', a: '2/3' }, { q: '1/5 + 2/5', a: '3/5' },
    { q: '1/8 + 3/8', a: '4/8 or 1/2' }, { q: '2/6 + 3/6', a: '5/6' },
  ];

  fracAdditions.forEach((item, i) => {
    questions.push({
      id: `math-frac-add-${i}`,
      question: `Calculate: ${item.q}`,
      correctAnswer: item.a.split(' or ')[0],
      wrongAnswers: ['1/2', '3/4', '2/3', '4/5'].filter(x => !item.a.includes(x)).slice(0, 3),
      explanation: `${item.q} = ${item.a}. Add the numerators when denominators are the same.`,
      subject: 'maths',
      yearGroup: 5,
      topic: 'Fractions',
      difficulty: 'medium'
    });
  });

  return questions;
}

function generatePercentageQuestions(): Question[] {
  const questions: Question[] = [];

  // Basic percentages (Year 5-6)
  const percents = [10, 20, 25, 50, 75, 100, 5, 15, 30, 40, 60, 70, 80, 90];
  const amounts = [10, 20, 40, 50, 60, 80, 100, 200, 500, 1000];

  percents.forEach((pct, pi) => {
    amounts.forEach((amt, ai) => {
      const answer = (pct / 100) * amt;
      if (Number.isInteger(answer)) {
        questions.push({
          id: `math-pct-${pi}-${ai}`,
          question: `What is ${pct}% of ${amt}?`,
          correctAnswer: String(answer),
          wrongAnswers: wrongNumbers(answer, Math.max(5, Math.ceil(answer / 5))),
          explanation: `${pct}% of ${amt} = ${amt} × ${pct}/100 = ${answer}`,
          subject: 'maths',
          yearGroup: pct % 10 === 0 ? 5 : 6,
          topic: 'Percentages',
          difficulty: pct % 25 === 0 ? 'easy' : 'medium'
        });
      }
    });
  });

  // Percentage increase/decrease (Year 7-9)
  for (let i = 0; i < 50; i++) {
    const original = (Math.floor(Math.random() * 20) + 1) * 10;
    const pct = [10, 20, 25, 50][Math.floor(Math.random() * 4)];
    const increase = (pct / 100) * original;

    questions.push({
      id: `math-pct-inc-${i}`,
      question: `Increase ${original} by ${pct}%`,
      correctAnswer: String(original + increase),
      wrongAnswers: wrongNumbers(original + increase, 20),
      explanation: `${pct}% of ${original} = ${increase}. So ${original} + ${increase} = ${original + increase}`,
      subject: 'maths',
      yearGroup: 7,
      topic: 'Percentages',
      difficulty: 'medium'
    });

    questions.push({
      id: `math-pct-dec-${i}`,
      question: `Decrease ${original} by ${pct}%`,
      correctAnswer: String(original - increase),
      wrongAnswers: wrongNumbers(original - increase, 20),
      explanation: `${pct}% of ${original} = ${increase}. So ${original} - ${increase} = ${original - increase}`,
      subject: 'maths',
      yearGroup: 7,
      topic: 'Percentages',
      difficulty: 'medium'
    });
  }

  return questions;
}

// ==========================================
// ALGEBRA (Years 6-13)
// ==========================================

function generateAlgebraQuestions(): Question[] {
  const questions: Question[] = [];

  // Simple equations (Year 6-7)
  for (let x = 1; x <= 12; x++) {
    for (let a = 2; a <= 5; a++) {
      const b = Math.floor(Math.random() * 20) + 1;
      const result = a * x + b;
      questions.push({
        id: `math-alg-simple-${a}-${x}-${b}`,
        question: `Solve: ${a}x + ${b} = ${result}`,
        correctAnswer: `x = ${x}`,
        wrongAnswers: [`x = ${x + 1}`, `x = ${x - 1}`, `x = ${x + 2}`],
        explanation: `${a}x + ${b} = ${result} → ${a}x = ${result - b} → x = ${x}`,
        subject: 'maths',
        yearGroup: 7,
        topic: 'Algebra',
        difficulty: 'medium'
      });
    }
  }

  // Expanding brackets (Year 7-8)
  for (let a = 2; a <= 5; a++) {
    for (let b = 1; b <= 5; b++) {
      questions.push({
        id: `math-expand-${a}-${b}`,
        question: `Expand: ${a}(x + ${b})`,
        correctAnswer: `${a}x + ${a * b}`,
        wrongAnswers: [`${a}x + ${b}`, `x + ${a * b}`, `${a + b}x`],
        explanation: `${a}(x + ${b}) = ${a}×x + ${a}×${b} = ${a}x + ${a * b}`,
        subject: 'maths',
        yearGroup: 7,
        topic: 'Algebra',
        difficulty: 'easy'
      });

      questions.push({
        id: `math-expand-neg-${a}-${b}`,
        question: `Expand: ${a}(x - ${b})`,
        correctAnswer: `${a}x - ${a * b}`,
        wrongAnswers: [`${a}x + ${a * b}`, `${a}x - ${b}`, `x - ${a * b}`],
        explanation: `${a}(x - ${b}) = ${a}×x - ${a}×${b} = ${a}x - ${a * b}`,
        subject: 'maths',
        yearGroup: 7,
        topic: 'Algebra',
        difficulty: 'easy'
      });
    }
  }

  // Expanding double brackets (Year 8-9)
  for (let a = 1; a <= 5; a++) {
    for (let b = 1; b <= 5; b++) {
      const middle = a + b;
      const end = a * b;
      questions.push({
        id: `math-expand-double-${a}-${b}`,
        question: `Expand: (x + ${a})(x + ${b})`,
        correctAnswer: `x² + ${middle}x + ${end}`,
        wrongAnswers: [`x² + ${a}x + ${end}`, `x² + ${middle}x + ${a + b}`, `x² + ${a * b}x + ${middle}`],
        explanation: `Use FOIL: x² + ${b}x + ${a}x + ${end} = x² + ${middle}x + ${end}`,
        subject: 'maths',
        yearGroup: 8,
        topic: 'Algebra',
        difficulty: 'medium'
      });
    }
  }

  // Factorising (Year 9-10)
  for (let a = 1; a <= 6; a++) {
    for (let b = 1; b <= 6; b++) {
      if (a !== b) {
        const sum = a + b;
        const product = a * b;
        questions.push({
          id: `math-factorise-${a}-${b}`,
          question: `Factorise: x² + ${sum}x + ${product}`,
          correctAnswer: `(x + ${a})(x + ${b})`,
          wrongAnswers: [`(x + ${a})(x - ${b})`, `(x - ${a})(x + ${b})`, `(x + ${sum})(x + 1)`],
          explanation: `Find two numbers that add to ${sum} and multiply to ${product}: ${a} and ${b}`,
          subject: 'maths',
          yearGroup: 9,
          topic: 'Algebra',
          difficulty: 'hard'
        });
      }
    }
  }

  // Difference of squares (Year 9-10)
  for (let a = 2; a <= 10; a++) {
    const aSquared = a * a;
    questions.push({
      id: `math-diff-squares-${a}`,
      question: `Factorise: x² - ${aSquared}`,
      correctAnswer: `(x + ${a})(x - ${a})`,
      wrongAnswers: [`(x + ${a})²`, `(x - ${a})²`, `(x + ${aSquared})(x - 1)`],
      explanation: `Difference of two squares: a² - b² = (a+b)(a-b). Here b = ${a}.`,
      subject: 'maths',
      yearGroup: 10,
      topic: 'Algebra',
      difficulty: 'medium'
    });
  }

  // Quadratic formula (Year 10-11)
  const quadratics = [
    { a: 1, b: -5, c: 6, roots: 'x = 2 or x = 3' },
    { a: 1, b: -7, c: 12, roots: 'x = 3 or x = 4' },
    { a: 1, b: -8, c: 15, roots: 'x = 3 or x = 5' },
    { a: 1, b: 5, c: 6, roots: 'x = -2 or x = -3' },
    { a: 1, b: -1, c: -6, roots: 'x = 3 or x = -2' },
    { a: 2, b: -7, c: 3, roots: 'x = 3 or x = 0.5' },
  ];

  quadratics.forEach((q, i) => {
    const bSign = q.b >= 0 ? '+' : '';
    const cSign = q.c >= 0 ? '+' : '';
    questions.push({
      id: `math-quadratic-${i}`,
      question: `Solve: ${q.a === 1 ? '' : q.a}x² ${bSign}${q.b}x ${cSign}${q.c} = 0`,
      correctAnswer: q.roots,
      wrongAnswers: ['x = 1 or x = 2', 'x = -1 or x = 4', 'x = 0 or x = 5'],
      explanation: `Factorise or use the quadratic formula to get ${q.roots}`,
      subject: 'maths',
      yearGroup: 10,
      topic: 'Quadratics',
      difficulty: 'hard'
    });
  });

  return questions;
}

// ==========================================
// GEOMETRY (Years 3-11)
// ==========================================

function generateGeometryQuestions(): Question[] {
  const questions: Question[] = [];

  // Shape properties (Year 3-4)
  const shapes = [
    { name: 'triangle', sides: 3, angles: 180 },
    { name: 'square', sides: 4, angles: 360 },
    { name: 'rectangle', sides: 4, angles: 360 },
    { name: 'pentagon', sides: 5, angles: 540 },
    { name: 'hexagon', sides: 6, angles: 720 },
    { name: 'heptagon', sides: 7, angles: 900 },
    { name: 'octagon', sides: 8, angles: 1080 },
  ];

  shapes.forEach((shape, i) => {
    questions.push({
      id: `math-shape-sides-${i}`,
      question: `How many sides does a ${shape.name} have?`,
      correctAnswer: String(shape.sides),
      wrongAnswers: wrongNumbers(shape.sides, 2),
      explanation: `A ${shape.name} has ${shape.sides} sides.`,
      subject: 'maths',
      yearGroup: 3,
      topic: 'Shapes',
      difficulty: 'easy'
    });

    if (shape.sides >= 4) {
      questions.push({
        id: `math-shape-angles-${i}`,
        question: `What is the sum of interior angles in a ${shape.name}?`,
        correctAnswer: `${shape.angles}°`,
        wrongAnswers: [`${shape.angles - 180}°`, `${shape.angles + 180}°`, `${shape.sides * 90}°`],
        explanation: `Sum = (n-2) × 180° = (${shape.sides}-2) × 180° = ${shape.angles}°`,
        subject: 'maths',
        yearGroup: 8,
        topic: 'Angles',
        difficulty: 'medium'
      });
    }
  });

  // Area of rectangles (Year 4-5)
  for (let l = 2; l <= 12; l++) {
    for (let w = 2; w <= 10; w++) {
      if (l >= w) {
        questions.push({
          id: `math-area-rect-${l}-${w}`,
          question: `Find the area of a rectangle with length ${l}cm and width ${w}cm`,
          correctAnswer: `${l * w}cm²`,
          wrongAnswers: [`${l + w}cm²`, `${2 * (l + w)}cm²`, `${l * w + 10}cm²`],
          explanation: `Area = length × width = ${l} × ${w} = ${l * w}cm²`,
          subject: 'maths',
          yearGroup: 4,
          topic: 'Area',
          difficulty: 'easy'
        });
      }
    }
  }

  // Perimeter (Year 4-5)
  for (let l = 3; l <= 15; l++) {
    for (let w = 2; w <= 10; w++) {
      if (l >= w) {
        questions.push({
          id: `math-perim-rect-${l}-${w}`,
          question: `Find the perimeter of a rectangle with length ${l}m and width ${w}m`,
          correctAnswer: `${2 * (l + w)}m`,
          wrongAnswers: [`${l + w}m`, `${l * w}m`, `${2 * l + w}m`],
          explanation: `Perimeter = 2(length + width) = 2(${l} + ${w}) = ${2 * (l + w)}m`,
          subject: 'maths',
          yearGroup: 4,
          topic: 'Perimeter',
          difficulty: 'easy'
        });
      }
    }
  }

  // Area of triangles (Year 5-6)
  for (let b = 4; b <= 16; b += 2) {
    for (let h = 3; h <= 12; h++) {
      const area = (b * h) / 2;
      if (Number.isInteger(area)) {
        questions.push({
          id: `math-area-tri-${b}-${h}`,
          question: `Find the area of a triangle with base ${b}cm and height ${h}cm`,
          correctAnswer: `${area}cm²`,
          wrongAnswers: [`${b * h}cm²`, `${b + h}cm²`, `${area + 5}cm²`],
          explanation: `Area = ½ × base × height = ½ × ${b} × ${h} = ${area}cm²`,
          subject: 'maths',
          yearGroup: 5,
          topic: 'Area',
          difficulty: 'medium'
        });
      }
    }
  }

  // Circle calculations (Year 7-9)
  const radii = [1, 2, 3, 4, 5, 7, 10];
  radii.forEach(r => {
    questions.push({
      id: `math-circle-area-${r}`,
      question: `Find the area of a circle with radius ${r}cm. Give your answer in terms of π.`,
      correctAnswer: `${r * r}π cm²`,
      wrongAnswers: [`${2 * r}π cm²`, `${r}π cm²`, `${r * r * 2}π cm²`],
      explanation: `Area = πr² = π × ${r}² = ${r * r}π cm²`,
      subject: 'maths',
      yearGroup: 7,
      topic: 'Circles',
      difficulty: 'medium'
    });

    questions.push({
      id: `math-circle-circum-${r}`,
      question: `Find the circumference of a circle with radius ${r}cm. Give your answer in terms of π.`,
      correctAnswer: `${2 * r}π cm`,
      wrongAnswers: [`${r}π cm`, `${r * r}π cm`, `${4 * r}π cm`],
      explanation: `Circumference = 2πr = 2 × π × ${r} = ${2 * r}π cm`,
      subject: 'maths',
      yearGroup: 7,
      topic: 'Circles',
      difficulty: 'medium'
    });
  });

  // Pythagoras (Year 8-9)
  const pythagoreanTriples = [
    [3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [5, 12, 13]
  ];

  pythagoreanTriples.forEach(([a, b, c], i) => {
    questions.push({
      id: `math-pythag-hyp-${i}`,
      question: `A right-angled triangle has sides ${a}cm and ${b}cm. Find the hypotenuse.`,
      correctAnswer: `${c}cm`,
      wrongAnswers: [`${a + b}cm`, `${c + 1}cm`, `${c - 1}cm`],
      explanation: `c² = a² + b² = ${a}² + ${b}² = ${a*a} + ${b*b} = ${c*c}. So c = ${c}cm`,
      subject: 'maths',
      yearGroup: 8,
      topic: 'Pythagoras',
      difficulty: 'medium'
    });

    questions.push({
      id: `math-pythag-side-${i}`,
      question: `A right-angled triangle has hypotenuse ${c}cm and one side ${a}cm. Find the other side.`,
      correctAnswer: `${b}cm`,
      wrongAnswers: [`${c - a}cm`, `${b + 1}cm`, `${b - 1}cm`],
      explanation: `b² = c² - a² = ${c}² - ${a}² = ${c*c} - ${a*a} = ${b*b}. So b = ${b}cm`,
      subject: 'maths',
      yearGroup: 8,
      topic: 'Pythagoras',
      difficulty: 'hard'
    });
  });

  // Trigonometry (Year 10-11)
  const trigValues = [
    { angle: 30, sin: '0.5', cos: '√3/2', tan: '1/√3' },
    { angle: 45, sin: '√2/2', cos: '√2/2', tan: '1' },
    { angle: 60, sin: '√3/2', cos: '0.5', tan: '√3' },
    { angle: 0, sin: '0', cos: '1', tan: '0' },
    { angle: 90, sin: '1', cos: '0', tan: 'undefined' },
  ];

  trigValues.forEach((t, i) => {
    if (t.angle !== 90) {
      questions.push({
        id: `math-trig-sin-${i}`,
        question: `What is sin(${t.angle}°)?`,
        correctAnswer: t.sin,
        wrongAnswers: [t.cos, t.tan, '0.7'].filter(x => x !== t.sin).slice(0, 3),
        explanation: `sin(${t.angle}°) = ${t.sin}. This is a standard angle to memorise.`,
        subject: 'maths',
        yearGroup: 10,
        topic: 'Trigonometry',
        difficulty: 'medium'
      });
    }
  });

  return questions;
}

// ==========================================
// STATISTICS & PROBABILITY (Years 4-11)
// ==========================================

function generateStatisticsQuestions(): Question[] {
  const questions: Question[] = [];

  // Mean calculations (Year 6-8)
  const dataSets = [
    { data: [2, 4, 6, 8, 10], mean: 6 },
    { data: [3, 5, 7, 9, 11], mean: 7 },
    { data: [1, 2, 3, 4, 5], mean: 3 },
    { data: [10, 20, 30, 40, 50], mean: 30 },
    { data: [4, 7, 9, 8, 12], mean: 8 },
    { data: [15, 20, 25, 30, 35], mean: 25 },
    { data: [6, 8, 10, 12, 14], mean: 10 },
    { data: [2, 5, 8, 11, 14], mean: 8 },
  ];

  dataSets.forEach((ds, i) => {
    questions.push({
      id: `math-mean-${i}`,
      question: `Find the mean of: ${ds.data.join(', ')}`,
      correctAnswer: String(ds.mean),
      wrongAnswers: wrongNumbers(ds.mean, 3),
      explanation: `Mean = (${ds.data.join(' + ')}) ÷ ${ds.data.length} = ${ds.data.reduce((a, b) => a + b)} ÷ ${ds.data.length} = ${ds.mean}`,
      subject: 'maths',
      yearGroup: 6,
      topic: 'Statistics',
      difficulty: 'medium'
    });
  });

  // Median (Year 6-8)
  const medianSets = [
    { data: [1, 3, 5, 7, 9], median: 5 },
    { data: [2, 4, 6, 8, 10, 12], median: 7 },
    { data: [5, 8, 12, 15, 20], median: 12 },
    { data: [3, 7, 7, 9, 14], median: 7 },
  ];

  medianSets.forEach((ds, i) => {
    questions.push({
      id: `math-median-${i}`,
      question: `Find the median of: ${ds.data.join(', ')}`,
      correctAnswer: String(ds.median),
      wrongAnswers: wrongNumbers(ds.median, 3),
      explanation: `Put in order and find the middle value: ${ds.median}`,
      subject: 'maths',
      yearGroup: 6,
      topic: 'Statistics',
      difficulty: 'medium'
    });
  });

  // Probability (Year 5-9)
  questions.push(
    {
      id: 'math-prob-coin',
      question: 'What is the probability of getting heads when flipping a fair coin?',
      correctAnswer: '1/2 or 0.5',
      wrongAnswers: ['1/4', '1/3', '2/3'],
      explanation: 'A fair coin has 2 outcomes, 1 is heads. P(heads) = 1/2',
      subject: 'maths',
      yearGroup: 5,
      topic: 'Probability',
      difficulty: 'easy'
    },
    {
      id: 'math-prob-dice-6',
      question: 'What is the probability of rolling a 6 on a fair dice?',
      correctAnswer: '1/6',
      wrongAnswers: ['1/3', '1/2', '6'],
      explanation: 'A dice has 6 outcomes, 1 is a six. P(6) = 1/6',
      subject: 'maths',
      yearGroup: 5,
      topic: 'Probability',
      difficulty: 'easy'
    },
    {
      id: 'math-prob-dice-even',
      question: 'What is the probability of rolling an even number on a fair dice?',
      correctAnswer: '1/2 or 3/6',
      wrongAnswers: ['1/3', '1/6', '2/3'],
      explanation: 'Even numbers: 2, 4, 6. That\'s 3 out of 6 = 1/2',
      subject: 'maths',
      yearGroup: 6,
      topic: 'Probability',
      difficulty: 'medium'
    }
  );

  // More probability (Year 7-9)
  for (let red = 2; red <= 5; red++) {
    for (let blue = 2; blue <= 5; blue++) {
      const total = red + blue;
      questions.push({
        id: `math-prob-balls-r${red}-b${blue}`,
        question: `A bag contains ${red} red balls and ${blue} blue balls. What is the probability of picking a red ball?`,
        correctAnswer: `${red}/${total}`,
        wrongAnswers: [`${blue}/${total}`, `${red}/${blue}`, `1/${total}`],
        explanation: `P(red) = red balls / total balls = ${red}/${total}`,
        subject: 'maths',
        yearGroup: 7,
        topic: 'Probability',
        difficulty: 'medium'
      });
    }
  }

  return questions;
}

// ==========================================
// INDICES AND STANDARD FORM (Years 7-11)
// ==========================================

function generateIndicesQuestions(): Question[] {
  const questions: Question[] = [];

  // Basic powers (Year 6-7)
  for (let base = 2; base <= 10; base++) {
    questions.push({
      id: `math-power-sq-${base}`,
      question: `What is ${base}²?`,
      correctAnswer: String(base * base),
      wrongAnswers: wrongNumbers(base * base, 10),
      explanation: `${base}² = ${base} × ${base} = ${base * base}`,
      subject: 'maths',
      yearGroup: 6,
      topic: 'Indices',
      difficulty: 'easy'
    });
  }

  for (let base = 2; base <= 5; base++) {
    questions.push({
      id: `math-power-cube-${base}`,
      question: `What is ${base}³?`,
      correctAnswer: String(base * base * base),
      wrongAnswers: wrongNumbers(base * base * base, 20),
      explanation: `${base}³ = ${base} × ${base} × ${base} = ${base * base * base}`,
      subject: 'maths',
      yearGroup: 6,
      topic: 'Indices',
      difficulty: 'easy'
    });
  }

  // Index laws (Year 8-10)
  const indexLaws = [
    { q: 'Simplify: x³ × x⁴', a: 'x⁷', rule: 'Add powers when multiplying: 3+4=7' },
    { q: 'Simplify: x⁸ ÷ x³', a: 'x⁵', rule: 'Subtract powers when dividing: 8-3=5' },
    { q: 'Simplify: (x²)³', a: 'x⁶', rule: 'Multiply powers: 2×3=6' },
    { q: 'Simplify: x⁰', a: '1', rule: 'Any number to power 0 equals 1' },
    { q: 'Simplify: 2³ × 2²', a: '2⁵ = 32', rule: 'Add powers: 3+2=5, then 2⁵=32' },
    { q: 'Simplify: 3⁴ ÷ 3²', a: '3² = 9', rule: 'Subtract powers: 4-2=2, then 3²=9' },
  ];

  indexLaws.forEach((law, i) => {
    questions.push({
      id: `math-index-law-${i}`,
      question: law.q,
      correctAnswer: law.a,
      wrongAnswers: ['x³', 'x¹²', 'x²'].filter(x => x !== law.a).slice(0, 3),
      explanation: law.rule,
      subject: 'maths',
      yearGroup: 8,
      topic: 'Indices',
      difficulty: 'medium'
    });
  });

  // Standard form (Year 9-10)
  const standardFormQ = [
    { num: 5000, sf: '5 × 10³' },
    { num: 70000, sf: '7 × 10⁴' },
    { num: 3200000, sf: '3.2 × 10⁶' },
    { num: 0.005, sf: '5 × 10⁻³' },
    { num: 0.00042, sf: '4.2 × 10⁻⁴' },
    { num: 8500, sf: '8.5 × 10³' },
  ];

  standardFormQ.forEach((item, i) => {
    questions.push({
      id: `math-sf-${i}`,
      question: `Write ${item.num} in standard form`,
      correctAnswer: item.sf,
      wrongAnswers: ['5 × 10²', '5 × 10⁴', '50 × 10²'].filter(x => x !== item.sf).slice(0, 3),
      explanation: `${item.num} = ${item.sf}`,
      subject: 'maths',
      yearGroup: 9,
      topic: 'Standard Form',
      difficulty: 'medium'
    });
  });

  return questions;
}

// ==========================================
// A-LEVEL TOPICS (Years 12-13)
// ==========================================

function generateALevelQuestions(): Question[] {
  const questions: Question[] = [];

  // Differentiation
  const diffRules = [
    { f: 'x²', df: '2x' },
    { f: 'x³', df: '3x²' },
    { f: '5x⁴', df: '20x³' },
    { f: '3x²', df: '6x' },
    { f: 'x⁵', df: '5x⁴' },
    { f: '4x³', df: '12x²' },
    { f: '2x⁶', df: '12x⁵' },
    { f: 'x', df: '1' },
    { f: '7', df: '0' },
    { f: 'x⁻¹', df: '-x⁻²' },
  ];

  diffRules.forEach((rule, i) => {
    questions.push({
      id: `math-diff-${i}`,
      question: `Differentiate: y = ${rule.f}`,
      correctAnswer: `dy/dx = ${rule.df}`,
      wrongAnswers: [`dy/dx = ${rule.f}`, `dy/dx = x`, `dy/dx = 2`],
      explanation: `Using the power rule: multiply by the power, reduce power by 1`,
      subject: 'maths',
      yearGroup: 12,
      topic: 'Differentiation',
      difficulty: 'medium'
    });
  });

  // Integration
  const intRules = [
    { f: 'x', intf: 'x²/2 + c' },
    { f: 'x²', intf: 'x³/3 + c' },
    { f: '3x²', intf: 'x³ + c' },
    { f: '4x³', intf: 'x⁴ + c' },
    { f: '2x', intf: 'x² + c' },
    { f: '6x²', intf: '2x³ + c' },
    { f: '1', intf: 'x + c' },
    { f: 'x⁴', intf: 'x⁵/5 + c' },
  ];

  intRules.forEach((rule, i) => {
    questions.push({
      id: `math-int-${i}`,
      question: `Find: ∫${rule.f} dx`,
      correctAnswer: rule.intf,
      wrongAnswers: ['x + c', 'x² + c', '2x + c'].filter(x => x !== rule.intf).slice(0, 3),
      explanation: `Increase the power by 1 and divide by the new power`,
      subject: 'maths',
      yearGroup: 12,
      topic: 'Integration',
      difficulty: 'medium'
    });
  });

  // Logarithms
  const logQs = [
    { q: 'Simplify: log₁₀(100)', a: '2', exp: 'log₁₀(100) = log₁₀(10²) = 2' },
    { q: 'Simplify: log₂(8)', a: '3', exp: 'log₂(8) = log₂(2³) = 3' },
    { q: 'Simplify: log₃(27)', a: '3', exp: 'log₃(27) = log₃(3³) = 3' },
    { q: 'Simplify: ln(e)', a: '1', exp: 'ln(e) = logₑ(e) = 1' },
    { q: 'Simplify: ln(e³)', a: '3', exp: 'ln(eⁿ) = n' },
    { q: 'Simplify: log₅(25)', a: '2', exp: 'log₅(25) = log₅(5²) = 2' },
  ];

  logQs.forEach((item, i) => {
    questions.push({
      id: `math-log-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['0', '1', '4', '5'].filter(x => x !== item.a).slice(0, 3),
      explanation: item.exp,
      subject: 'maths',
      yearGroup: 12,
      topic: 'Logarithms',
      difficulty: 'medium'
    });
  });

  return questions;
}

// ==========================================
// EXPORT ALL MATHS QUESTIONS
// ==========================================

export function generateAllMathsQuestions(): Question[] {
  return [
    ...generateAdditionQuestions(),
    ...generateSubtractionQuestions(),
    ...generateMultiplicationQuestions(),
    ...generateDivisionQuestions(),
    ...generateFractionQuestions(),
    ...generatePercentageQuestions(),
    ...generateAlgebraQuestions(),
    ...generateGeometryQuestions(),
    ...generateStatisticsQuestions(),
    ...generateIndicesQuestions(),
    ...generateALevelQuestions(),
  ];
}

export default generateAllMathsQuestions;
