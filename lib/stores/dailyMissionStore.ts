import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * Daily Mystery Mission System
 *
 * Provides daily novelty without chaos - a single focus mission each day.
 * Creates anticipation and reason to return.
 *
 * ADHD Principle: Novelty & variation without overwhelming choices
 */

export type MissionType =
  | 'streak_starter'      // Complete 3 battles
  | 'subject_focus'       // Complete 5 questions in a specific subject
  | 'combo_hunter'        // Achieve a 5x combo
  | 'speed_demon'         // Answer 10 questions in under 3 seconds each
  | 'perfectionist'       // Get a perfect round
  | 'explorer'            // Try a new game mode
  | 'consistency'         // Answer 20 questions total
  | 'comeback_kid'        // Get 3 correct after getting one wrong
  | 'bonus_round';        // Secret bonus mission

export interface DailyMission {
  id: string;
  type: MissionType;
  title: string;
  description: string;
  target: number;
  progress: number;
  xpReward: number;
  completed: boolean;
  claimedAt?: number;
  subject?: string;  // For subject-specific missions
  gameMode?: string; // For game-specific missions
}

interface DailyMissionState {
  // Today's mission
  currentMission: DailyMission | null;
  missionDate: string; // YYYY-MM-DD

  // Historical stats
  missionsCompleted: number;
  totalBonusXP: number;
  currentMissionStreak: number; // Days in a row completing mission

  // Actions
  getMission: () => DailyMission;
  updateProgress: (type: MissionType, amount?: number, metadata?: { subject?: string; gameMode?: string }) => boolean;
  claimReward: () => number; // Returns XP earned
  checkAndRefreshMission: () => void;
  reset: () => void;
}

function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

// Mission templates
const MISSION_TEMPLATES: Omit<DailyMission, 'id' | 'progress' | 'completed'>[] = [
  {
    type: 'streak_starter',
    title: 'Momentum Builder',
    description: 'Complete 3 quick battles to build momentum',
    target: 3,
    xpReward: 50,
  },
  {
    type: 'combo_hunter',
    title: 'Combo Master',
    description: 'Achieve a 5x answer combo',
    target: 5,
    xpReward: 75,
  },
  {
    type: 'speed_demon',
    title: 'Lightning Round',
    description: 'Answer 10 questions in under 3 seconds each',
    target: 10,
    xpReward: 100,
  },
  {
    type: 'perfectionist',
    title: 'Flawless Victory',
    description: 'Get a perfect score in any battle',
    target: 1,
    xpReward: 100,
  },
  {
    type: 'consistency',
    title: 'Knowledge Seeker',
    description: 'Answer 20 questions in any mode',
    target: 20,
    xpReward: 60,
  },
  {
    type: 'comeback_kid',
    title: 'Bounce Back',
    description: 'Get 3 correct answers after making a mistake',
    target: 3,
    xpReward: 50,
  },
];

// Subject-specific missions
const SUBJECT_MISSIONS = [
  'maths', 'biology', 'chemistry', 'physics', 'english', 'history', 'geography'
].map(subject => ({
  type: 'subject_focus' as MissionType,
  title: `${subject.charAt(0).toUpperCase() + subject.slice(1)} Focus`,
  description: `Answer 5 ${subject} questions correctly`,
  target: 5,
  xpReward: 60,
  subject,
}));

function generateDailyMission(): DailyMission {
  // Combine all mission types
  const allMissions = [...MISSION_TEMPLATES, ...SUBJECT_MISSIONS];

  // Pick a random mission
  const template = allMissions[Math.floor(Math.random() * allMissions.length)];

  return {
    ...template,
    id: `mission-${getTodayString()}-${Math.random().toString(36).slice(2, 8)}`,
    progress: 0,
    completed: false,
  };
}

const initialState = {
  currentMission: null as DailyMission | null,
  missionDate: '',
  missionsCompleted: 0,
  totalBonusXP: 0,
  currentMissionStreak: 0,
};

export const useDailyMissionStore = create<DailyMissionState>()(
  persist(
    (set, get) => ({
      ...initialState,

      getMission: () => {
        const state = get();
        const today = getTodayString();

        // Check if we need a new mission
        if (state.missionDate !== today || !state.currentMission) {
          const newMission = generateDailyMission();
          set({
            currentMission: newMission,
            missionDate: today,
          });
          return newMission;
        }

        return state.currentMission;
      },

      updateProgress: (type, amount = 1, metadata) => {
        const state = get();
        const mission = state.currentMission;

        if (!mission || mission.completed) return false;
        if (mission.type !== type) return false;

        // Check subject/game mode match if applicable
        if (mission.subject && metadata?.subject !== mission.subject) return false;
        if (mission.gameMode && metadata?.gameMode !== mission.gameMode) return false;

        const newProgress = Math.min(mission.target, mission.progress + amount);
        const completed = newProgress >= mission.target;

        set({
          currentMission: {
            ...mission,
            progress: newProgress,
            completed,
          },
        });

        return completed;
      },

      claimReward: () => {
        const state = get();
        const mission = state.currentMission;

        if (!mission || !mission.completed || mission.claimedAt) return 0;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        // Check if streak continues
        const streakContinues = state.missionDate === yesterdayStr;

        set({
          currentMission: {
            ...mission,
            claimedAt: Date.now(),
          },
          missionsCompleted: state.missionsCompleted + 1,
          totalBonusXP: state.totalBonusXP + mission.xpReward,
          currentMissionStreak: streakContinues ? state.currentMissionStreak + 1 : 1,
        });

        return mission.xpReward;
      },

      checkAndRefreshMission: () => {
        const state = get();
        const today = getTodayString();

        if (state.missionDate !== today) {
          get().getMission(); // This will create a new mission
        }
      },

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'cramgames-daily-mission',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useDailyMissionStore;
