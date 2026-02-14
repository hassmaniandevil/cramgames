/**
 * Question Bank Types
 *
 * Comprehensive type definitions for the CramGames question system
 */

export type Subject = 'maths' | 'biology' | 'chemistry' | 'physics' | 'english' | 'history' | 'geography';

export type DifficultyLevel = 'ks3' | 'gcse' | 'alevel';

export type QuestionType =
  | 'multiple-choice'    // 4 options, 1 correct
  | 'true-false'         // True or False
  | 'fill-blank'         // Fill in the blank
  | 'match'              // Match pairs
  | 'order'              // Put in correct order
  | 'numeric'            // Calculate a number
  | 'definition'         // Term -> Definition
  | 'formula'            // Formula recognition/application
  | 'diagram'            // Label parts of diagram
  | 'equation';          // Balance or solve equation

export interface Question {
  id: string;
  subject: Subject;
  topic: string;
  subtopic?: string;
  difficulty: DifficultyLevel;
  type: QuestionType;
  question: string;
  correctAnswer: string | number | string[];
  wrongAnswers?: (string | number)[];
  options?: string[];
  explanation?: string;
  hint?: string;
  tags?: string[];
  yearGroup?: number[];  // Which year groups this applies to (7-13)
}

export interface TermDefinition {
  id: string;
  subject: Subject;
  topic: string;
  difficulty: DifficultyLevel;
  term: string;
  definition: string;
  example?: string;
  tags?: string[];
}

export interface Formula {
  id: string;
  subject: Subject;
  topic: string;
  difficulty: DifficultyLevel;
  name: string;
  formula: string;
  variables: { symbol: string; meaning: string }[];
  units?: string;
  example?: string;
}

export interface TimelineEvent {
  id: string;
  subject: Subject;
  topic: string;
  difficulty: DifficultyLevel;
  event: string;
  year: number | string;
  description?: string;
}

export interface DiagramPart {
  id: string;
  subject: Subject;
  topic: string;
  difficulty: DifficultyLevel;
  diagramName: string;
  partName: string;
  partFunction: string;
  position?: { x: number; y: number };
}

// Topic structure for curriculum mapping
export interface Topic {
  id: string;
  subject: Subject;
  name: string;
  difficulty: DifficultyLevel;
  subtopics: string[];
  questionCount: number;
}

// Question bank statistics
export interface QuestionBankStats {
  totalQuestions: number;
  bySubject: Record<Subject, number>;
  byDifficulty: Record<DifficultyLevel, number>;
  byType: Record<QuestionType, number>;
}
