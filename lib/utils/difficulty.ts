import { YearGroup } from '@/lib/stores/userStore';

/**
 * Difficulty levels based on UK education system
 */
export type DifficultyLevel = 'ks3-easy' | 'ks3-medium' | 'gcse' | 'alevel';

/**
 * Get difficulty level from year group
 */
export function getDifficultyLevel(yearGroup: YearGroup): DifficultyLevel {
  if (yearGroup <= 7) return 'ks3-easy';
  if (yearGroup <= 9) return 'ks3-medium';
  if (yearGroup <= 11) return 'gcse';
  return 'alevel';
}

/**
 * Get numeric difficulty (1-10) from year group
 */
export function getDifficultyNumber(yearGroup: YearGroup): number {
  if (yearGroup <= 7) return 1;
  if (yearGroup === 8) return 2;
  if (yearGroup === 9) return 3;
  if (yearGroup === 10) return 5;
  if (yearGroup === 11) return 6;
  if (yearGroup === 12) return 8;
  return 10; // Year 13
}

/**
 * Get display name for difficulty
 */
export function getDifficultyName(yearGroup: YearGroup): string {
  if (yearGroup <= 9) return 'KS3';
  if (yearGroup <= 11) return 'GCSE';
  return 'A-Level';
}

/**
 * Get time limit modifier based on difficulty
 * Higher difficulty = slightly more time for complex questions
 */
export function getTimeModifier(yearGroup: YearGroup): number {
  if (yearGroup <= 9) return 1.0;
  if (yearGroup <= 11) return 1.2;
  return 1.5; // A-Level gets more time
}

/**
 * Get points multiplier based on difficulty
 * Harder questions = more points
 */
export function getPointsMultiplier(yearGroup: YearGroup): number {
  if (yearGroup <= 7) return 1.0;
  if (yearGroup <= 9) return 1.2;
  if (yearGroup <= 11) return 1.5;
  return 2.0; // A-Level
}
