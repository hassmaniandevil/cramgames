import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {
  STORY_CHAPTERS,
  BONUS_FRAGMENTS,
  isRequirementMet,
  LoreChapter,
  BonusFragment
} from '@/data/lore/story';

// Keep the old interface for backwards compatibility
export interface LoreFragment {
  id: string;
  subject: string;
  title: string;
  content: string;
  rarity: 'common' | 'rare' | 'legendary';
  unlocked: boolean;
  unlockedAt?: Date;
}

// Player stats that determine what's unlocked
export interface PlayerStats {
  totalXP: number;
  completedZones: number;
  bossesDefeated: number;
  currentStreak: number;
  longestStreak: number;
  overallMastery: number;
  perfectGames: number;
  subjectsStarted: number;
}

interface LoreState {
  // Read tracking - which chapters/fragments have been read
  readChapterIds: string[];
  readBonusIds: string[];

  // Track when chapters were first unlocked (for "New!" badges)
  unlockedChapterIds: string[];
  unlockedBonusIds: string[];

  // Last viewed for resuming
  lastViewedChapterId: string | null;

  // Actions
  markChapterRead: (chapterId: string) => void;
  markBonusRead: (bonusId: string) => void;
  isChapterRead: (chapterId: string) => boolean;
  isBonusRead: (bonusId: string) => boolean;
  setLastViewedChapter: (chapterId: string) => void;

  // Get unlocked content based on external stats
  getUnlockedChapters: (stats: PlayerStats) => LoreChapter[];
  getUnlockedBonusFragments: (stats: PlayerStats) => BonusFragment[];
  getNextLockedChapter: (stats: PlayerStats) => LoreChapter | null;
  getProgress: (stats: PlayerStats) => {
    chaptersUnlocked: number;
    chaptersTotal: number;
    bonusUnlocked: number;
    bonusTotal: number;
    chaptersRead: number;
    bonusRead: number;
  };

  // Track when new content becomes available
  checkForNewUnlocks: (stats: PlayerStats) => { newChapters: LoreChapter[]; newBonus: BonusFragment[] };

  // Legacy support
  fragments: LoreFragment[];
  totalFragmentsCollected: number;
  legendaryCount: number;
  rareCount: number;
  unlockFragment: (fragment: LoreFragment) => boolean;
  isFragmentUnlocked: (fragmentId: string) => boolean;
  getSubjectFragments: (subject: string) => LoreFragment[];
  getSubjectProgress: (subject: string) => { unlocked: number; total: number };

  reset: () => void;
}

const initialState = {
  readChapterIds: [] as string[],
  readBonusIds: [] as string[],
  unlockedChapterIds: ['ch-1'] as string[], // Chapter 1 starts unlocked
  unlockedBonusIds: [] as string[],
  lastViewedChapterId: null as string | null,

  // Legacy
  fragments: [] as LoreFragment[],
  totalFragmentsCollected: 0,
  legendaryCount: 0,
  rareCount: 0,
};

export const useLoreStore = create<LoreState>()(
  persist(
    (set, get) => ({
      ...initialState,

      markChapterRead: (chapterId) => {
        const state = get();
        if (!state.readChapterIds.includes(chapterId)) {
          set({
            readChapterIds: [...state.readChapterIds, chapterId],
            lastViewedChapterId: chapterId,
          });
        } else {
          set({ lastViewedChapterId: chapterId });
        }
      },

      markBonusRead: (bonusId) => {
        const state = get();
        if (!state.readBonusIds.includes(bonusId)) {
          set({
            readBonusIds: [...state.readBonusIds, bonusId],
          });
        }
      },

      isChapterRead: (chapterId) => {
        return get().readChapterIds.includes(chapterId);
      },

      isBonusRead: (bonusId) => {
        return get().readBonusIds.includes(bonusId);
      },

      setLastViewedChapter: (chapterId) => {
        set({ lastViewedChapterId: chapterId });
      },

      getUnlockedChapters: (stats) => {
        return STORY_CHAPTERS.filter(chapter =>
          isRequirementMet(chapter.unlockRequirement, stats)
        );
      },

      getUnlockedBonusFragments: (stats) => {
        return BONUS_FRAGMENTS.filter(fragment =>
          isRequirementMet(fragment.requirement, stats)
        );
      },

      getNextLockedChapter: (stats) => {
        return STORY_CHAPTERS.find(chapter =>
          !isRequirementMet(chapter.unlockRequirement, stats)
        ) || null;
      },

      getProgress: (stats) => {
        const state = get();
        const unlockedChapters = STORY_CHAPTERS.filter(chapter =>
          isRequirementMet(chapter.unlockRequirement, stats)
        );
        const unlockedBonus = BONUS_FRAGMENTS.filter(fragment =>
          isRequirementMet(fragment.requirement, stats)
        );

        return {
          chaptersUnlocked: unlockedChapters.length,
          chaptersTotal: STORY_CHAPTERS.length,
          bonusUnlocked: unlockedBonus.length,
          bonusTotal: BONUS_FRAGMENTS.length,
          chaptersRead: state.readChapterIds.filter(id =>
            unlockedChapters.some(c => c.id === id)
          ).length,
          bonusRead: state.readBonusIds.filter(id =>
            unlockedBonus.some(b => b.id === id)
          ).length,
        };
      },

      checkForNewUnlocks: (stats) => {
        const state = get();

        // Find newly unlocked chapters
        const unlockedChapters = STORY_CHAPTERS.filter(chapter =>
          isRequirementMet(chapter.unlockRequirement, stats)
        );
        const newChapters = unlockedChapters.filter(
          chapter => !state.unlockedChapterIds.includes(chapter.id)
        );

        // Find newly unlocked bonus fragments
        const unlockedBonus = BONUS_FRAGMENTS.filter(fragment =>
          isRequirementMet(fragment.requirement, stats)
        );
        const newBonus = unlockedBonus.filter(
          fragment => !state.unlockedBonusIds.includes(fragment.id)
        );

        // Update tracked unlocks
        if (newChapters.length > 0 || newBonus.length > 0) {
          set({
            unlockedChapterIds: [
              ...state.unlockedChapterIds,
              ...newChapters.map(c => c.id),
            ],
            unlockedBonusIds: [
              ...state.unlockedBonusIds,
              ...newBonus.map(b => b.id),
            ],
          });
        }

        return { newChapters, newBonus };
      },

      // Legacy methods for backwards compatibility
      unlockFragment: (fragment) => {
        const state = get();
        const existing = state.fragments.find(f => f.id === fragment.id);
        if (existing?.unlocked) {
          return false;
        }

        const unlockedFragment: LoreFragment = {
          ...fragment,
          unlocked: true,
          unlockedAt: new Date(),
        };

        const updatedFragments = existing
          ? state.fragments.map(f => f.id === fragment.id ? unlockedFragment : f)
          : [...state.fragments, unlockedFragment];

        set({
          fragments: updatedFragments,
          totalFragmentsCollected: state.totalFragmentsCollected + 1,
          legendaryCount: state.legendaryCount + (fragment.rarity === 'legendary' ? 1 : 0),
          rareCount: state.rareCount + (fragment.rarity === 'rare' ? 1 : 0),
        });

        return true;
      },

      isFragmentUnlocked: (fragmentId) => {
        const fragment = get().fragments.find(f => f.id === fragmentId);
        return fragment?.unlocked ?? false;
      },

      getSubjectFragments: (subject) => {
        return get().fragments.filter(f => f.subject === subject);
      },

      getSubjectProgress: (subject) => {
        const subjectFragments = get().fragments.filter(f => f.subject === subject);
        const unlocked = subjectFragments.filter(f => f.unlocked).length;
        return { unlocked, total: 3 };
      },

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'cramgames-lore-v2',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLoreStore;
