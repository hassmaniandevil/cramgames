// Content loader to integrate with braintoken question database
// This adapts the braintoken format to CramGames's battle system

import { Question } from '@/lib/stores/battleStore';
import { Topic, Zone } from '@/components/map/PlanetView';

// Braintoken question format
interface BraintokenQuestion {
  id: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  type: string;
  content: {
    prompt: string;
    options?: string[];
    correctAnswer: string | number | string[];
    image?: string;
  };
  explanation: string;
  hints: string[];
  tags: string[];
}

interface BraintokenContent {
  domain: string;
  skill: string;
  yearGroup: number;
  questions: BraintokenQuestion[];
}

// Convert braintoken question to CramGames format
export function convertQuestion(btQuestion: BraintokenQuestion): Question {
  // Map braintoken types to CramGames types
  const typeMapping: Record<string, Question['type']> = {
    mcq: 'mcq',
    multiple_choice: 'mcq',
    numeric_input: 'numeric_input',
    numeric: 'numeric_input',
    true_false: 'true_false',
    fill_blank: 'fill_blank',
    ordering: 'order',
    matching: 'match',
  };

  return {
    id: btQuestion.id,
    type: typeMapping[btQuestion.type] || 'mcq',
    difficulty: btQuestion.difficulty,
    content: btQuestion.content,
    explanation: btQuestion.explanation,
    hints: btQuestion.hints || [],
    tags: btQuestion.tags || [],
  };
}

// Load questions for a specific zone
export async function loadZoneQuestions(
  subjectId: string,
  yearGroup: number,
  domain: string,
  count: number = 10
): Promise<Question[]> {
  try {
    // Path to braintoken content
    const basePath = process.env.BRAINTOKEN_CONTENT_PATH || '/Users/hassanyasin/braintoken/packages/content';

    // For client-side, we'll need to use an API route
    // For now, return sample questions for development
    return getSampleQuestions(subjectId, domain, count);
  } catch (error) {
    console.error('Failed to load questions:', error);
    return getSampleQuestions(subjectId, domain, count);
  }
}

// Sample questions for development/fallback
function getSampleQuestions(subjectId: string, domain: string, count: number): Question[] {
  const questions: Question[] = [];

  // Generate sample questions based on subject
  const templates = getQuestionTemplates(subjectId);

  for (let i = 0; i < count; i++) {
    const template = templates[i % templates.length];
    const difficulty = ['easy', 'medium', 'hard', 'expert'][Math.floor(i / 3) % 4] as Question['difficulty'];

    questions.push({
      id: `${subjectId}-${domain}-${i + 1}`,
      type: template.type,
      difficulty,
      content: {
        prompt: template.prompts[i % template.prompts.length],
        options: template.options,
        correctAnswer: template.correctAnswer,
      },
      explanation: template.explanation,
      hints: template.hints,
      tags: [subjectId, domain],
    });
  }

  return questions;
}

function getQuestionTemplates(subjectId: string) {
  const templates: Record<string, any[]> = {
    maths: [
      {
        type: 'numeric_input',
        prompts: [
          'Solve for x: 2x + 5 = 15',
          'What is 12 × 8?',
          'Find the value of 144 ÷ 12',
          'Calculate: 25 + 37 - 12',
        ],
        correctAnswer: 5,
        explanation: 'To solve for x, subtract 5 from both sides to get 2x = 10, then divide by 2 to get x = 5.',
        hints: ['Start by isolating the variable', 'What operation undoes addition?'],
      },
      {
        type: 'mcq',
        prompts: [
          'What is the square root of 64?',
          'Which number is prime?',
          'What is 15% of 200?',
        ],
        options: ['6', '7', '8', '9'],
        correctAnswer: '8',
        explanation: '8 × 8 = 64, so the square root of 64 is 8.',
        hints: ['A square root is a number multiplied by itself', 'Think: ? × ? = 64'],
      },
    ],
    biology: [
      {
        type: 'mcq',
        prompts: [
          'What is the powerhouse of the cell?',
          'Which organelle contains genetic material?',
          'What process converts sunlight to energy in plants?',
        ],
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'],
        correctAnswer: 'Mitochondria',
        explanation: 'Mitochondria produce ATP through cellular respiration, providing energy for the cell.',
        hints: ['It starts with an M', 'This organelle has a double membrane'],
      },
      {
        type: 'true_false',
        prompts: [
          'DNA stands for Deoxyribonucleic Acid',
          'Humans have 46 chromosomes',
          'Plants can perform photosynthesis at night',
        ],
        options: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'DNA is indeed Deoxyribonucleic Acid, the molecule that carries genetic information.',
        hints: ['Think about what you know about genetics'],
      },
    ],
    chemistry: [
      {
        type: 'mcq',
        prompts: [
          'What is the chemical symbol for water?',
          'Which element has atomic number 6?',
          'What type of bond forms between metals and non-metals?',
        ],
        options: ['H₂O', 'CO₂', 'NaCl', 'O₂'],
        correctAnswer: 'H₂O',
        explanation: 'Water consists of 2 hydrogen atoms bonded to 1 oxygen atom, written as H₂O.',
        hints: ['Water contains hydrogen and oxygen', 'The formula shows the atom counts'],
      },
    ],
    physics: [
      {
        type: 'mcq',
        prompts: [
          'What is the unit of force?',
          'Which of these is a vector quantity?',
          'What does the letter "c" represent in E=mc²?',
        ],
        options: ['Newton', 'Joule', 'Watt', 'Pascal'],
        correctAnswer: 'Newton',
        explanation: 'Force is measured in Newtons (N), named after Sir Isaac Newton.',
        hints: ['Named after a famous physicist', 'F = ma uses this unit'],
      },
    ],
    'english-language': [
      {
        type: 'mcq',
        prompts: [
          'Which word is a noun?',
          'Identify the verb in: "The cat slept peacefully."',
          'What type of sentence is "Close the door!"?',
        ],
        options: ['Running', 'Beautiful', 'Dog', 'Quickly'],
        correctAnswer: 'Dog',
        explanation: 'A noun is a word that represents a person, place, thing, or idea. "Dog" is a thing.',
        hints: ['Nouns name things', 'Can you put "the" in front of it?'],
      },
    ],
    'english-literature': [
      {
        type: 'mcq',
        prompts: [
          'Who wrote "Romeo and Juliet"?',
          'In which city is "A Christmas Carol" set?',
          'What literary device uses "like" or "as" for comparison?',
        ],
        options: ['Shakespeare', 'Dickens', 'Austen', 'Orwell'],
        correctAnswer: 'Shakespeare',
        explanation: 'William Shakespeare wrote Romeo and Juliet, one of the most famous plays in history.',
        hints: ['A famous playwright from Stratford-upon-Avon', 'Wrote during the Elizabethan era'],
      },
    ],
  };

  return templates[subjectId] || templates.maths;
}

// Get curriculum structure for a subject
export function getSubjectTopics(subjectId: string, yearGroup: number): Topic[] {
  const structures: Record<string, Topic[]> = {
    maths: [
      {
        id: 'number',
        name: 'Number',
        zones: [
          { id: 'maths-number-1', name: 'Place Value', topic: 'number', order: 1, questionsCount: 10 },
          { id: 'maths-number-2', name: 'Operations', topic: 'number', order: 2, questionsCount: 10 },
          { id: 'maths-number-3', name: 'Fractions', topic: 'number', order: 3, questionsCount: 10 },
          { id: 'maths-number-4', name: 'Decimals', topic: 'number', order: 4, questionsCount: 10 },
          { id: 'maths-number-5', name: 'Percentages', topic: 'number', order: 5, questionsCount: 10 },
          { id: 'maths-number-boss', name: 'Number Master', topic: 'number', order: 6, questionsCount: 15, isBoss: true },
        ],
      },
      {
        id: 'algebra',
        name: 'Algebra',
        zones: [
          { id: 'maths-algebra-1', name: 'Expressions', topic: 'algebra', order: 1, questionsCount: 10 },
          { id: 'maths-algebra-2', name: 'Equations', topic: 'algebra', order: 2, questionsCount: 10 },
          { id: 'maths-algebra-3', name: 'Sequences', topic: 'algebra', order: 3, questionsCount: 10 },
          { id: 'maths-algebra-4', name: 'Graphs', topic: 'algebra', order: 4, questionsCount: 10 },
          { id: 'maths-algebra-boss', name: 'Algebra Lord', topic: 'algebra', order: 5, questionsCount: 15, isBoss: true },
        ],
      },
      {
        id: 'geometry',
        name: 'Geometry',
        zones: [
          { id: 'maths-geometry-1', name: 'Angles', topic: 'geometry', order: 1, questionsCount: 10 },
          { id: 'maths-geometry-2', name: 'Shapes', topic: 'geometry', order: 2, questionsCount: 10 },
          { id: 'maths-geometry-3', name: 'Area', topic: 'geometry', order: 3, questionsCount: 10 },
          { id: 'maths-geometry-4', name: 'Volume', topic: 'geometry', order: 4, questionsCount: 10 },
          { id: 'maths-geometry-5', name: 'Transformations', topic: 'geometry', order: 5, questionsCount: 10 },
          { id: 'maths-geometry-boss', name: 'Shape Shifter', topic: 'geometry', order: 6, questionsCount: 15, isBoss: true },
        ],
      },
      {
        id: 'statistics',
        name: 'Statistics',
        zones: [
          { id: 'maths-stats-1', name: 'Averages', topic: 'statistics', order: 1, questionsCount: 10 },
          { id: 'maths-stats-2', name: 'Charts', topic: 'statistics', order: 2, questionsCount: 10 },
          { id: 'maths-stats-3', name: 'Probability', topic: 'statistics', order: 3, questionsCount: 10 },
          { id: 'maths-stats-boss', name: 'Data Demon', topic: 'statistics', order: 4, questionsCount: 15, isBoss: true },
        ],
      },
    ],
    biology: [
      {
        id: 'cells',
        name: 'Cells',
        zones: [
          { id: 'bio-cells-1', name: 'Cell Structure', topic: 'cells', order: 1, questionsCount: 10 },
          { id: 'bio-cells-2', name: 'Cell Division', topic: 'cells', order: 2, questionsCount: 10 },
          { id: 'bio-cells-3', name: 'Transport', topic: 'cells', order: 3, questionsCount: 10 },
          { id: 'bio-cells-boss', name: 'Cell Commander', topic: 'cells', order: 4, questionsCount: 15, isBoss: true },
        ],
      },
      {
        id: 'organisation',
        name: 'Organisation',
        zones: [
          { id: 'bio-org-1', name: 'Tissues', topic: 'organisation', order: 1, questionsCount: 10 },
          { id: 'bio-org-2', name: 'Organs', topic: 'organisation', order: 2, questionsCount: 10 },
          { id: 'bio-org-3', name: 'Systems', topic: 'organisation', order: 3, questionsCount: 10 },
          { id: 'bio-org-boss', name: 'Body Boss', topic: 'organisation', order: 4, questionsCount: 15, isBoss: true },
        ],
      },
    ],
    chemistry: [
      {
        id: 'atomic',
        name: 'Atomic Structure',
        zones: [
          { id: 'chem-atomic-1', name: 'Atoms', topic: 'atomic', order: 1, questionsCount: 10 },
          { id: 'chem-atomic-2', name: 'Elements', topic: 'atomic', order: 2, questionsCount: 10 },
          { id: 'chem-atomic-3', name: 'Periodic Table', topic: 'atomic', order: 3, questionsCount: 10 },
          { id: 'chem-atomic-boss', name: 'Atom King', topic: 'atomic', order: 4, questionsCount: 15, isBoss: true },
        ],
      },
      {
        id: 'bonding',
        name: 'Bonding',
        zones: [
          { id: 'chem-bond-1', name: 'Ionic Bonds', topic: 'bonding', order: 1, questionsCount: 10 },
          { id: 'chem-bond-2', name: 'Covalent Bonds', topic: 'bonding', order: 2, questionsCount: 10 },
          { id: 'chem-bond-3', name: 'Metallic Bonds', topic: 'bonding', order: 3, questionsCount: 10 },
          { id: 'chem-bond-boss', name: 'Bond Breaker', topic: 'bonding', order: 4, questionsCount: 15, isBoss: true },
        ],
      },
    ],
    physics: [
      {
        id: 'forces',
        name: 'Forces',
        zones: [
          { id: 'phys-forces-1', name: 'Types of Forces', topic: 'forces', order: 1, questionsCount: 10 },
          { id: 'phys-forces-2', name: 'Motion', topic: 'forces', order: 2, questionsCount: 10 },
          { id: 'phys-forces-3', name: 'Pressure', topic: 'forces', order: 3, questionsCount: 10 },
          { id: 'phys-forces-boss', name: 'Force Master', topic: 'forces', order: 4, questionsCount: 15, isBoss: true },
        ],
      },
      {
        id: 'energy',
        name: 'Energy',
        zones: [
          { id: 'phys-energy-1', name: 'Energy Stores', topic: 'energy', order: 1, questionsCount: 10 },
          { id: 'phys-energy-2', name: 'Energy Transfer', topic: 'energy', order: 2, questionsCount: 10 },
          { id: 'phys-energy-3', name: 'Power', topic: 'energy', order: 3, questionsCount: 10 },
          { id: 'phys-energy-boss', name: 'Energy Emperor', topic: 'energy', order: 4, questionsCount: 15, isBoss: true },
        ],
      },
    ],
    'english-language': [
      {
        id: 'reading',
        name: 'Reading',
        zones: [
          { id: 'eng-read-1', name: 'Comprehension', topic: 'reading', order: 1, questionsCount: 10 },
          { id: 'eng-read-2', name: 'Inference', topic: 'reading', order: 2, questionsCount: 10 },
          { id: 'eng-read-3', name: 'Analysis', topic: 'reading', order: 3, questionsCount: 10 },
          { id: 'eng-read-boss', name: 'Reading Ruler', topic: 'reading', order: 4, questionsCount: 15, isBoss: true },
        ],
      },
      {
        id: 'writing',
        name: 'Writing',
        zones: [
          { id: 'eng-write-1', name: 'Creative Writing', topic: 'writing', order: 1, questionsCount: 10 },
          { id: 'eng-write-2', name: 'Persuasive Writing', topic: 'writing', order: 2, questionsCount: 10 },
          { id: 'eng-write-boss', name: 'Word Wizard', topic: 'writing', order: 3, questionsCount: 15, isBoss: true },
        ],
      },
    ],
    'english-literature': [
      {
        id: 'shakespeare',
        name: 'Shakespeare',
        zones: [
          { id: 'lit-shake-1', name: 'Macbeth', topic: 'shakespeare', order: 1, questionsCount: 10 },
          { id: 'lit-shake-2', name: 'Romeo & Juliet', topic: 'shakespeare', order: 2, questionsCount: 10 },
          { id: 'lit-shake-boss', name: 'The Bard', topic: 'shakespeare', order: 3, questionsCount: 15, isBoss: true },
        ],
      },
      {
        id: 'poetry',
        name: 'Poetry',
        zones: [
          { id: 'lit-poetry-1', name: 'War Poetry', topic: 'poetry', order: 1, questionsCount: 10 },
          { id: 'lit-poetry-2', name: 'Love Poetry', topic: 'poetry', order: 2, questionsCount: 10 },
          { id: 'lit-poetry-boss', name: 'Poet Laureate', topic: 'poetry', order: 3, questionsCount: 15, isBoss: true },
        ],
      },
    ],
  };

  return structures[subjectId] || structures.maths;
}
