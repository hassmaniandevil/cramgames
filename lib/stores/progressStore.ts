import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type MasteryLevel = 0 | 1 | 2 | 3; // 0=none, 1=bronze, 2=silver, 3=gold

export interface ZoneMastery {
  zoneId: string;
  mastery: MasteryLevel;
  questionsAttempted: number;
  questionsCorrect: number;
  lastAttemptAt: number;
  bestCombo: number;
}

export interface SubjectProgress {
  subjectId: string;
  totalXP: number;
  zonesUnlocked: number;
  zonesCompleted: number;
  bossesDefeated: number;
}

// Rank thresholds
const RANKS = [
  { name: 'Cadet', minXP: 0, icon: '🌱' },
  { name: 'Explorer', minXP: 500, icon: '🌟' },
  { name: 'Voyager', minXP: 2000, icon: '✨' },
  { name: 'Navigator', minXP: 5000, icon: '🚀' },
  { name: 'Commander', minXP: 10000, icon: '⚡' },
  { name: 'Captain', minXP: 20000, icon: '🔥' },
  { name: 'Admiral', minXP: 40000, icon: '💫' },
  { name: 'Legend', minXP: 75000, icon: '👑' },
  { name: 'Ascended', minXP: 150000, icon: '🌌' },
] as const;

export type RankName = typeof RANKS[number]['name'];

interface ProgressState {
  // Global stats
  totalXP: number;
  level: number;
  currentLevelXP: number;
  xpToNextLevel: number;

  // Per-zone mastery
  zoneMastery: Record<string, ZoneMastery>;

  // Per-subject progress
  subjectProgress: Record<string, SubjectProgress>;

  // Spaced repetition queue
  reviewQueue: string[]; // Zone IDs due for review

  // Stats
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  totalBattlesCompleted: number;
  perfectGames: number;
  longestCombo: number;

  // Actions
  addXP: (amount: number, zoneId?: string) => { leveledUp: boolean; newLevel?: number };
  updateZoneMastery: (zoneId: string, correct: boolean, combo: number) => void;
  calculateMasteryLevel: (zoneId: string) => MasteryLevel;
  getRank: () => typeof RANKS[number];
  addToReviewQueue: (zoneId: string) => void;
  getNextReview: () => string | null;
  recordBattleComplete: (questionsCorrect: number, questionsTotal: number) => void;
  reset: () => void;
}

// XP required for each level (progressive curve)
function xpForLevel(level: number): number {
  return Math.floor(100 * Math.pow(1.15, level - 1));
}

const initialState = {
  totalXP: 0,
  level: 1,
  currentLevelXP: 0,
  xpToNextLevel: 100,
  zoneMastery: {},
  subjectProgress: {},
  reviewQueue: [],
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
  totalBattlesCompleted: 0,
  perfectGames: 0,
  longestCombo: 0,
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialState,

      addXP: (amount, zoneId) => {
        const state = get();
        let newTotalXP = state.totalXP + amount;
        let newLevel = state.level;
        let newCurrentLevelXP = state.currentLevelXP + amount;
        let newXpToNextLevel = state.xpToNextLevel;
        let leveledUp = false;

        // Check for level up(s)
        while (newCurrentLevelXP >= newXpToNextLevel) {
          newCurrentLevelXP -= newXpToNextLevel;
          newLevel++;
          newXpToNextLevel = xpForLevel(newLevel);
          leveledUp = true;
        }

        // Update subject progress if zoneId provided
        const subjectProgress = { ...state.subjectProgress };
        if (zoneId) {
          const subjectId = zoneId.split('-')[0]; // e.g., "maths-algebra-1" -> "maths"
          if (!subjectProgress[subjectId]) {
            subjectProgress[subjectId] = {
              subjectId,
              totalXP: 0,
              zonesUnlocked: 0,
              zonesCompleted: 0,
              bossesDefeated: 0,
            };
          }
          subjectProgress[subjectId].totalXP += amount;
        }

        set({
          totalXP: newTotalXP,
          level: newLevel,
          currentLevelXP: newCurrentLevelXP,
          xpToNextLevel: newXpToNextLevel,
          subjectProgress,
        });

        return { leveledUp, newLevel: leveledUp ? newLevel : undefined };
      },

      updateZoneMastery: (zoneId, correct, combo) => {
        const state = get();
        const existing = state.zoneMastery[zoneId] || {
          zoneId,
          mastery: 0 as MasteryLevel,
          questionsAttempted: 0,
          questionsCorrect: 0,
          lastAttemptAt: 0,
          bestCombo: 0,
        };

        const updated: ZoneMastery = {
          ...existing,
          questionsAttempted: existing.questionsAttempted + 1,
          questionsCorrect: existing.questionsCorrect + (correct ? 1 : 0),
          lastAttemptAt: Date.now(),
          bestCombo: Math.max(existing.bestCombo, combo),
        };

        // Recalculate mastery
        const accuracy = updated.questionsCorrect / updated.questionsAttempted;
        if (updated.questionsAttempted >= 20 && accuracy >= 0.9) {
          updated.mastery = 3; // Gold
        } else if (updated.questionsAttempted >= 10 && accuracy >= 0.8) {
          updated.mastery = 2; // Silver
        } else if (updated.questionsAttempted >= 5 && accuracy >= 0.6) {
          updated.mastery = 1; // Bronze
        }

        set({
          zoneMastery: { ...state.zoneMastery, [zoneId]: updated },
          totalQuestionsAnswered: state.totalQuestionsAnswered + 1,
          totalCorrectAnswers: state.totalCorrectAnswers + (correct ? 1 : 0),
          longestCombo: Math.max(state.longestCombo, combo),
        });
      },

      calculateMasteryLevel: (zoneId) => {
        const mastery = get().zoneMastery[zoneId];
        return mastery?.mastery || 0;
      },

      getRank: () => {
        const totalXP = get().totalXP;
        let rank: (typeof RANKS)[number] = RANKS[0];
        for (const r of RANKS) {
          if (totalXP >= r.minXP) {
            rank = r;
          } else {
            break;
          }
        }
        return rank;
      },

      addToReviewQueue: (zoneId) => {
        const queue = get().reviewQueue;
        if (!queue.includes(zoneId)) {
          set({ reviewQueue: [...queue, zoneId] });
        }
      },

      getNextReview: () => {
        const queue = get().reviewQueue;
        if (queue.length === 0) return null;

        // Return the first item and remove it from queue
        const next = queue[0];
        set({ reviewQueue: queue.slice(1) });
        return next;
      },

      recordBattleComplete: (questionsCorrect, questionsTotal) => {
        const state = get();
        const isPerfect = questionsCorrect === questionsTotal && questionsTotal > 0;

        set({
          totalBattlesCompleted: state.totalBattlesCompleted + 1,
          perfectGames: state.perfectGames + (isPerfect ? 1 : 0),
        });
      },

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'cramgames-progress',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
