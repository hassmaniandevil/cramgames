import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * Adaptive Difficulty System
 *
 * Invisibly adjusts difficulty based on recent performance.
 * Never shows "you're struggling" - just quietly recalibrates.
 *
 * ADHD Principle: Protect flow state by keeping challenge optimal
 */

interface PerformanceWindow {
  timestamp: number;
  correct: boolean;
  responseTimeMs: number;
}

interface AdaptiveDifficultyState {
  // Rolling window of recent answers (last 20)
  recentPerformance: PerformanceWindow[];

  // Current difficulty modifier (-2 to +2)
  // Negative = easier, Positive = harder
  difficultyModifier: number;

  // Per-subject modifiers (some subjects may be harder for user)
  subjectModifiers: Record<string, number>;

  // Confidence score (how sure we are about user's level)
  confidenceScore: number;

  // Actions
  recordAnswer: (correct: boolean, responseTimeMs: number, subject?: string) => void;
  getDifficultyForSubject: (subject: string) => 'easy' | 'medium' | 'hard';
  getOverallDifficulty: () => 'easy' | 'medium' | 'hard';
  shouldShowEasierQuestion: () => boolean;
  reset: () => void;
}

const WINDOW_SIZE = 20;
const ADJUSTMENT_THRESHOLD = 0.3; // How much accuracy must deviate to trigger adjustment

const initialState = {
  recentPerformance: [] as PerformanceWindow[],
  difficultyModifier: 0,
  subjectModifiers: {} as Record<string, number>,
  confidenceScore: 0,
};

export const useAdaptiveDifficultyStore = create<AdaptiveDifficultyState>()(
  persist(
    (set, get) => ({
      ...initialState,

      recordAnswer: (correct, responseTimeMs, subject) => {
        const state = get();

        // Add to performance window
        const newPerformance: PerformanceWindow = {
          timestamp: Date.now(),
          correct,
          responseTimeMs,
        };

        const recentPerformance = [
          ...state.recentPerformance.slice(-(WINDOW_SIZE - 1)),
          newPerformance,
        ];

        // Calculate rolling accuracy
        const accuracy = recentPerformance.filter(p => p.correct).length / recentPerformance.length;

        // Calculate average response time
        const avgResponseTime = recentPerformance.reduce((sum, p) => sum + p.responseTimeMs, 0) / recentPerformance.length;

        // Determine if we need to adjust difficulty
        let newModifier = state.difficultyModifier;

        // If accuracy is too high (>85%) and responses are fast (<3s), increase difficulty
        if (accuracy > 0.85 && avgResponseTime < 3000 && recentPerformance.length >= 10) {
          newModifier = Math.min(2, state.difficultyModifier + 0.2);
        }
        // If accuracy is too low (<50%), decrease difficulty
        else if (accuracy < 0.5 && recentPerformance.length >= 5) {
          newModifier = Math.max(-2, state.difficultyModifier - 0.3);
        }
        // If accuracy is in the "frustration zone" (50-60%), ease up slightly
        else if (accuracy >= 0.5 && accuracy < 0.6 && recentPerformance.length >= 8) {
          newModifier = Math.max(-2, state.difficultyModifier - 0.1);
        }

        // Update subject-specific modifier
        const subjectModifiers = { ...state.subjectModifiers };
        if (subject) {
          const subjectHistory = recentPerformance.slice(-10);
          const subjectAccuracy = subjectHistory.filter(p => p.correct).length / subjectHistory.length;

          if (subjectAccuracy < 0.5) {
            subjectModifiers[subject] = Math.max(-2, (subjectModifiers[subject] || 0) - 0.2);
          } else if (subjectAccuracy > 0.85) {
            subjectModifiers[subject] = Math.min(2, (subjectModifiers[subject] || 0) + 0.1);
          }
        }

        // Confidence increases with more data
        const confidenceScore = Math.min(1, recentPerformance.length / WINDOW_SIZE);

        set({
          recentPerformance,
          difficultyModifier: newModifier,
          subjectModifiers,
          confidenceScore,
        });
      },

      getDifficultyForSubject: (subject) => {
        const state = get();
        const subjectMod = state.subjectModifiers[subject] || 0;
        const totalMod = state.difficultyModifier + subjectMod;

        if (totalMod <= -1) return 'easy';
        if (totalMod >= 1) return 'hard';
        return 'medium';
      },

      getOverallDifficulty: () => {
        const modifier = get().difficultyModifier;
        if (modifier <= -1) return 'easy';
        if (modifier >= 1) return 'hard';
        return 'medium';
      },

      shouldShowEasierQuestion: () => {
        const state = get();
        // If we have enough data and accuracy is low, prefer easier questions
        if (state.recentPerformance.length >= 5) {
          const recentAccuracy = state.recentPerformance.slice(-5).filter(p => p.correct).length / 5;
          return recentAccuracy < 0.4;
        }
        return false;
      },

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'cramgames-adaptive-difficulty',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAdaptiveDifficultyStore;
