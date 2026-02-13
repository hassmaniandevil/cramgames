// Comprehensive UK Curriculum Question Bank
// Generates 20,000+ questions across all subjects and year groups

export interface Question {
  id: string;
  question: string;
  correctAnswer: string;
  wrongAnswers: string[];
  explanation: string;
  subject: 'maths' | 'biology' | 'chemistry' | 'physics' | 'english' | 'history' | 'geography';
  yearGroup: number; // 1-13
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Import generators
import { generateAllMathsQuestions } from './generators/maths';
import { generateBiologyQuestions, generateChemistryQuestions, generatePhysicsQuestions } from './generators/science';
import { generateAllEnglishQuestions } from './generators/english';
import { generateAllHistoryQuestions } from './generators/history';
import { generateAllGeographyQuestions } from './generators/geography';

// Import additional hand-crafted questions (supplements the generators)
import { englishQuestions as handcraftedEnglish } from './english';
import { historyQuestions as handcraftedHistory } from './history';

// ============================================
// LAZY LOADING CACHE
// ============================================

// Cache for generated questions - only generate once when first accessed
let _allQuestions: Question[] | null = null;
let _mathsQuestions: Question[] | null = null;
let _biologyQuestions: Question[] | null = null;
let _chemistryQuestions: Question[] | null = null;
let _physicsQuestions: Question[] | null = null;
let _englishQuestions: Question[] | null = null;
let _historyQuestions: Question[] | null = null;
let _geographyQuestions: Question[] | null = null;

// Lazy getters for each subject
export function getMathsQuestions(): Question[] {
  if (!_mathsQuestions) {
    _mathsQuestions = generateAllMathsQuestions();
  }
  return _mathsQuestions;
}

export function getBiologyQuestions(): Question[] {
  if (!_biologyQuestions) {
    _biologyQuestions = generateBiologyQuestions();
  }
  return _biologyQuestions;
}

export function getChemistryQuestions(): Question[] {
  if (!_chemistryQuestions) {
    _chemistryQuestions = generateChemistryQuestions();
  }
  return _chemistryQuestions;
}

export function getPhysicsQuestions(): Question[] {
  if (!_physicsQuestions) {
    _physicsQuestions = generatePhysicsQuestions();
  }
  return _physicsQuestions;
}

export function getEnglishQuestions(): Question[] {
  if (!_englishQuestions) {
    _englishQuestions = [
      ...generateAllEnglishQuestions(),
      ...(handcraftedEnglish as Question[])
    ];
  }
  return _englishQuestions;
}

export function getHistoryQuestions(): Question[] {
  if (!_historyQuestions) {
    _historyQuestions = [
      ...generateAllHistoryQuestions(),
      ...(handcraftedHistory as Question[])
    ];
  }
  return _historyQuestions;
}

export function getGeographyQuestions(): Question[] {
  if (!_geographyQuestions) {
    _geographyQuestions = generateAllGeographyQuestions();
  }
  return _geographyQuestions;
}

// Get all questions (lazy loaded)
export function getAllQuestions(): Question[] {
  if (!_allQuestions) {
    _allQuestions = [
      ...getMathsQuestions(),
      ...getBiologyQuestions(),
      ...getChemistryQuestions(),
      ...getPhysicsQuestions(),
      ...getEnglishQuestions(),
      ...getHistoryQuestions(),
      ...getGeographyQuestions(),
    ];
  }
  return _allQuestions;
}

// For backwards compatibility - lazy getter
export const allQuestions: Question[] = [];

// Initialize allQuestions on first access (using a getter won't work with exported const)
// Instead, we'll use the getAllQuestions() function

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getQuestionsBySubject(subject: string): Question[] {
  switch(subject) {
    case 'maths': return getMathsQuestions();
    case 'biology': return getBiologyQuestions();
    case 'chemistry': return getChemistryQuestions();
    case 'physics': return getPhysicsQuestions();
    case 'english': return getEnglishQuestions();
    case 'history': return getHistoryQuestions();
    case 'geography': return getGeographyQuestions();
    default: return getAllQuestions().filter(q => q.subject === subject);
  }
}

export function getQuestionsByYearGroup(yearGroup: number): Question[] {
  // Return questions for this year and below (cumulative learning)
  return getAllQuestions().filter(q => q.yearGroup <= yearGroup);
}

export function getQuestionsByTopic(topic: string): Question[] {
  return getAllQuestions().filter(q => q.topic.toLowerCase().includes(topic.toLowerCase()));
}

export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): Question[] {
  return getAllQuestions().filter(q => q.difficulty === difficulty);
}

export function getRandomQuestions(count: number, filters?: {
  subject?: string;
  subjects?: string[];
  yearGroup?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  topic?: string;
}): Question[] {
  let filtered: Question[];

  // Optimize by getting only the needed subjects
  if (filters?.subject) {
    filtered = [...getQuestionsBySubject(filters.subject)];
  } else if (filters?.subjects && filters.subjects.length > 0) {
    filtered = filters.subjects.flatMap(s => getQuestionsBySubject(s));
  } else {
    filtered = [...getAllQuestions()];
  }

  // Filter by year group (cumulative - include all questions up to this year)
  if (filters?.yearGroup) {
    const yearGroup = filters.yearGroup;
    filtered = filtered.filter(q => q.yearGroup <= yearGroup);
  }

  // Filter by difficulty
  if (filters?.difficulty) {
    const difficulty = filters.difficulty;
    filtered = filtered.filter(q => q.difficulty === difficulty);
  }

  // Filter by topic
  if (filters?.topic) {
    const topic = filters.topic.toLowerCase();
    filtered = filtered.filter(q => q.topic.toLowerCase().includes(topic));
  }

  // Shuffle and take count
  const shuffled = filtered.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Get question count by subject
export function getQuestionCountBySubject(): Record<string, number> {
  return {
    maths: getMathsQuestions().length,
    biology: getBiologyQuestions().length,
    chemistry: getChemistryQuestions().length,
    physics: getPhysicsQuestions().length,
    english: getEnglishQuestions().length,
    history: getHistoryQuestions().length,
    geography: getGeographyQuestions().length,
  };
}

// Get question count by year group
export function getQuestionCountByYearGroup(): Record<number, number> {
  const counts: Record<number, number> = {};
  getAllQuestions().forEach(q => {
    counts[q.yearGroup] = (counts[q.yearGroup] || 0) + 1;
  });
  return counts;
}

// Get total question count
export function getTotalQuestionCount(): number {
  return getAllQuestions().length;
}

// Get unique topics
export function getUniqueTopics(): string[] {
  const topics = new Set<string>();
  getAllQuestions().forEach(q => topics.add(q.topic));
  return Array.from(topics).sort();
}

// Get topics by subject
export function getTopicsBySubject(subject: string): string[] {
  const topics = new Set<string>();
  getQuestionsBySubject(subject).forEach(q => topics.add(q.topic));
  return Array.from(topics).sort();
}

// Log stats (for debugging)
export function logQuestionStats(): void {
  console.log('=== Question Bank Statistics ===');
  console.log(`Total Questions: ${getTotalQuestionCount()}`);
  console.log('\nBy Subject:');
  Object.entries(getQuestionCountBySubject()).forEach(([subject, count]) => {
    console.log(`  ${subject}: ${count}`);
  });
  console.log('\nBy Year Group:');
  Object.entries(getQuestionCountByYearGroup())
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .forEach(([year, count]) => {
      console.log(`  Year ${year}: ${count}`);
    });
  console.log('\nUnique Topics:', getUniqueTopics().length);
}

// Export subject-specific arrays (for backwards compatibility)
export const mathsQuestions: Question[] = [];
export const biologyQuestions: Question[] = [];
export const chemistryQuestions: Question[] = [];
export const physicsQuestions: Question[] = [];
export const englishQuestions: Question[] = [];
export const historyQuestions: Question[] = [];
export const geographyQuestions: Question[] = [];

export default getAllQuestions;
