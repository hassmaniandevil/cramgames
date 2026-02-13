import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface StreakShield {
  used: boolean;
  earnedAt: number;
}

// Streak milestones and their rewards
export const STREAK_MILESTONES = [
  { days: 3, reward: 'shield', xpBonus: 50, message: '3 days blazing!' },
  { days: 7, reward: 'shield', xpBonus: 100, message: 'One week warrior!' },
  { days: 14, reward: 'shield', xpBonus: 200, message: 'Two week titan!' },
  { days: 30, reward: 'shield', xpBonus: 500, message: 'Monthly master!' },
  { days: 50, reward: 'shield', xpBonus: 750, message: 'Halfway legend!' },
  { days: 100, reward: 'shield', xpBonus: 1500, message: 'Century champion!' },
  { days: 365, reward: 'shield', xpBonus: 5000, message: 'Year-round royalty!' },
] as const;

// Flame intensity levels
export type FlameIntensity = 'cold' | 'warm' | 'hot' | 'blazing';

function getFlameIntensity(streakDays: number): FlameIntensity {
  if (streakDays === 0) return 'cold';
  if (streakDays < 7) return 'warm';
  if (streakDays < 30) return 'hot';
  return 'blazing';
}

/**
 * ADHD-Friendly Momentum Messages
 * Never shame, always encourage forward motion
 */
export function getMomentumMessage(currentStreak: number, wasReset: boolean, previousStreak: number): {
  title: string;
  subtitle: string;
  encouragement: string;
} {
  // Streak was just reset - use encouraging language
  if (wasReset && previousStreak > 0) {
    return {
      title: 'Fresh Start',
      subtitle: `You had ${previousStreak} days. Let's build again.`,
      encouragement: 'Every master has restarted. The only way is forward.',
    };
  }

  // New user or returning after long break
  if (currentStreak === 0) {
    return {
      title: 'Ready to Begin',
      subtitle: 'Your journey starts now',
      encouragement: 'One question at a time. You\'ve got this.',
    };
  }

  // Building momentum
  if (currentStreak === 1) {
    return {
      title: 'Day 1',
      subtitle: 'Momentum building',
      encouragement: 'The first step is always the hardest. You took it.',
    };
  }

  if (currentStreak <= 3) {
    return {
      title: `${currentStreak} Days Strong`,
      subtitle: 'Pattern forming',
      encouragement: 'Your brain is starting to expect this. Keep it up.',
    };
  }

  if (currentStreak <= 7) {
    return {
      title: `${currentStreak} Day Streak`,
      subtitle: 'Habit building',
      encouragement: 'This is becoming part of your routine. Powerful.',
    };
  }

  if (currentStreak <= 14) {
    return {
      title: `${currentStreak} Days`,
      subtitle: 'Habit established',
      encouragement: 'You\'ve proven you can do this. It\'s who you are now.',
    };
  }

  if (currentStreak <= 30) {
    return {
      title: `${currentStreak} Day Streak`,
      subtitle: 'Unstoppable momentum',
      encouragement: 'Most people never get here. You\'re exceptional.',
    };
  }

  return {
    title: `${currentStreak} Days`,
    subtitle: 'Legendary dedication',
    encouragement: 'You\'ve built something incredible. Keep the fire burning.',
  };
}

interface StreakState {
  currentStreak: number;
  longestStreak: number;
  previousStreak: number; // Track for momentum recovery messaging
  lastActivityDate: string; // YYYY-MM-DD format
  shields: StreakShield[];
  milestonesReached: number[]; // Days of milestones already claimed
  todayComplete: boolean;
  streakWasReset: boolean; // Track if streak was just reset

  // Computed
  flameIntensity: FlameIntensity;

  // Actions
  recordActivity: () => { streakMaintained: boolean; milestoneReached?: typeof STREAK_MILESTONES[number] };
  useShield: () => boolean;
  checkStreakStatus: () => { needsActivity: boolean; hoursRemaining: number };
  addShield: () => void;
  getMomentumMessage: () => { title: string; subtitle: string; encouragement: string };
  acknowledgeReset: () => void;
  reset: () => void;
}

function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

function getYesterdayString(): string {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split('T')[0];
}

const initialState = {
  currentStreak: 0,
  longestStreak: 0,
  previousStreak: 0,
  lastActivityDate: '',
  shields: [] as StreakShield[],
  milestonesReached: [] as number[],
  todayComplete: false,
  streakWasReset: false,
  flameIntensity: 'cold' as FlameIntensity,
};

export const useStreakStore = create<StreakState>()(
  persist(
    (set, get) => ({
      ...initialState,

      recordActivity: () => {
        const state = get();
        const today = getTodayString();
        const yesterday = getYesterdayString();

        // Already completed today
        if (state.lastActivityDate === today) {
          return { streakMaintained: true };
        }

        let newStreak = state.currentStreak;
        let streakMaintained = false;
        let streakWasReset = false;
        let previousStreak = state.previousStreak;

        if (state.lastActivityDate === yesterday) {
          // Consecutive day - increment streak
          newStreak = state.currentStreak + 1;
          streakMaintained = true;
        } else if (state.lastActivityDate === '') {
          // First ever activity
          newStreak = 1;
          streakMaintained = true;
        } else {
          // Streak broken - check for shield
          const availableShield = state.shields.find((s) => !s.used);
          if (availableShield) {
            // Use shield to maintain streak
            const updatedShields = state.shields.map((s) =>
              s === availableShield ? { ...s, used: true } : s
            );
            newStreak = state.currentStreak + 1;
            streakMaintained = true;
            set({ shields: updatedShields });
          } else {
            // Reset streak - but don't shame, encourage!
            previousStreak = state.currentStreak;
            newStreak = 1;
            streakMaintained = false;
            streakWasReset = state.currentStreak > 0;
          }
        }

        // Check for milestone
        let milestoneReached: typeof STREAK_MILESTONES[number] | undefined;
        const milestone = STREAK_MILESTONES.find(
          (m) => m.days === newStreak && !state.milestonesReached.includes(m.days)
        );
        if (milestone) {
          milestoneReached = milestone;
          set({
            milestonesReached: [...state.milestonesReached, milestone.days],
          });

          // Add shield if reward is shield
          if (milestone.reward === 'shield') {
            get().addShield();
          }
        }

        set({
          currentStreak: newStreak,
          longestStreak: Math.max(state.longestStreak, newStreak),
          previousStreak,
          lastActivityDate: today,
          todayComplete: true,
          streakWasReset,
          flameIntensity: getFlameIntensity(newStreak),
        });

        return { streakMaintained, milestoneReached };
      },

      useShield: () => {
        const state = get();
        const availableShield = state.shields.find((s) => !s.used);
        if (!availableShield) return false;

        set({
          shields: state.shields.map((s) =>
            s === availableShield ? { ...s, used: true } : s
          ),
        });
        return true;
      },

      checkStreakStatus: () => {
        const state = get();
        const today = getTodayString();

        if (state.lastActivityDate === today) {
          return { needsActivity: false, hoursRemaining: 0 };
        }

        // Calculate hours until end of day
        const now = new Date();
        const endOfDay = new Date(now);
        endOfDay.setHours(23, 59, 59, 999);
        const hoursRemaining = Math.ceil(
          (endOfDay.getTime() - now.getTime()) / (1000 * 60 * 60)
        );

        return { needsActivity: true, hoursRemaining };
      },

      addShield: () => {
        set((state) => ({
          shields: [...state.shields, { used: false, earnedAt: Date.now() }],
        }));
      },

      getMomentumMessage: () => {
        const state = get();
        return getMomentumMessage(state.currentStreak, state.streakWasReset, state.previousStreak);
      },

      acknowledgeReset: () => {
        // User has seen the reset message, clear the flag
        set({ streakWasReset: false });
      },

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'cramgames-streak',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Update flame intensity on load
          state.flameIntensity = getFlameIntensity(state.currentStreak);

          // Check if streak should be reset (missed a day without shield)
          const today = getTodayString();
          const yesterday = getYesterdayString();
          if (
            state.lastActivityDate !== today &&
            state.lastActivityDate !== yesterday &&
            state.lastActivityDate !== ''
          ) {
            // Streak was broken
            state.currentStreak = 0;
            state.todayComplete = false;
            state.flameIntensity = 'cold';
          }
        }
      },
    }
  )
);
