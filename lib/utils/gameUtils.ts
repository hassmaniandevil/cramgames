/**
 * Shared Game Utilities
 *
 * Common functions used across all games to reduce duplication
 */

/**
 * Shuffle an array using Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Format seconds as MM:SS or M:SS
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Format seconds as just seconds with decimal
 */
export function formatTimeShort(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  return formatTime(seconds);
}

/**
 * Calculate combo multiplier
 * Combo increases with consecutive correct answers
 */
export function calculateComboMultiplier(combo: number): number {
  if (combo < 2) return 1;
  if (combo < 5) return 1.5;
  if (combo < 10) return 2;
  if (combo < 15) return 2.5;
  if (combo < 20) return 3;
  return 4; // Max multiplier at 20+ combo
}

/**
 * Calculate points for an answer
 */
export function calculatePoints(
  basePoints: number,
  combo: number,
  timeBonus: number = 0,
  difficultyMultiplier: number = 1
): number {
  const comboMultiplier = calculateComboMultiplier(combo);
  return Math.round((basePoints + timeBonus) * comboMultiplier * difficultyMultiplier);
}

/**
 * Calculate XP earned from a game session
 */
export function calculateXP(
  correctAnswers: number,
  totalQuestions: number,
  combo: number,
  difficultyMultiplier: number = 1,
  isPerfect: boolean = false
): number {
  const baseXP = correctAnswers * 10;
  const accuracyBonus = Math.round((correctAnswers / Math.max(totalQuestions, 1)) * 50);
  const comboBonus = Math.min(combo * 5, 100);
  const perfectBonus = isPerfect ? 50 : 0;

  return Math.round((baseXP + accuracyBonus + comboBonus + perfectBonus) * difficultyMultiplier);
}

/**
 * Get accuracy percentage
 */
export function calculateAccuracy(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

/**
 * Get grade based on accuracy
 */
export function getGrade(accuracy: number): { grade: string; color: string; emoji: string } {
  if (accuracy >= 95) return { grade: 'S', color: 'text-yellow-400', emoji: '🌟' };
  if (accuracy >= 90) return { grade: 'A+', color: 'text-green-400', emoji: '🎯' };
  if (accuracy >= 80) return { grade: 'A', color: 'text-green-500', emoji: '✨' };
  if (accuracy >= 70) return { grade: 'B', color: 'text-blue-400', emoji: '👍' };
  if (accuracy >= 60) return { grade: 'C', color: 'text-purple-400', emoji: '📚' };
  if (accuracy >= 50) return { grade: 'D', color: 'text-orange-400', emoji: '💪' };
  return { grade: 'F', color: 'text-red-400', emoji: '🔄' };
}

/**
 * Generate a random integer between min and max (inclusive)
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Pick a random element from an array
 */
export function randomPick<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Pick n random elements from an array (without replacement)
 */
export function randomPickN<T>(array: T[], n: number): T[] {
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, Math.min(n, array.length));
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * clamp(t, 0, 1);
}

/**
 * Ease out cubic - for smooth animations
 */
export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Delay execution (for animations)
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Get encouragement message based on performance
 */
export function getEncouragementMessage(accuracy: number, streak: number = 0): string {
  if (accuracy >= 95) {
    return streak > 5 ? "Unstoppable! 🔥" : "Perfect mastery!";
  }
  if (accuracy >= 80) {
    return streak > 3 ? "On fire! Keep going!" : "Excellent work!";
  }
  if (accuracy >= 60) {
    return "Good progress! Keep practising!";
  }
  if (accuracy >= 40) {
    return "You're learning! Try again!";
  }
  return "Every expert was once a beginner!";
}

/**
 * Vibrate device if supported (for haptic feedback)
 */
export function vibrate(pattern: number | number[] = 50): void {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

/**
 * Strong vibrate for wrong answers
 */
export function vibrateError(): void {
  vibrate([50, 50, 50]);
}

/**
 * Light vibrate for correct answers
 */
export function vibrateSuccess(): void {
  vibrate(30);
}

/**
 * Combo vibrate - intensity based on combo
 */
export function vibrateCombo(combo: number): void {
  if (combo < 3) {
    vibrate(20);
  } else if (combo < 10) {
    vibrate(40);
  } else {
    vibrate([30, 30, 30]);
  }
}
