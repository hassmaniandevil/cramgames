import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Curriculum = 'uk-primary' | 'uk-ks3' | 'uk-gcse' | 'uk-alevel';
export type YearGroup = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export interface UserSettings {
  soundEnabled: boolean;
  hapticsEnabled: boolean;
  reducedMotion: boolean;
  darkMode: boolean; // Always dark for now, but future-proofing
}

export interface UserProfile {
  id: string;
  displayName: string;
  avatar: string;
  curriculum: Curriculum;
  yearGroup: YearGroup;
  subjects: string[];
  createdAt: number;
  lastActiveAt: number;
  onboardingComplete: boolean;
}

interface UserState {
  profile: UserProfile | null;
  settings: UserSettings;
  isLoading: boolean;

  // Actions
  setProfile: (profile: Partial<UserProfile>) => void;
  setSettings: (settings: Partial<UserSettings>) => void;
  completeOnboarding: () => void;
  updateLastActive: () => void;
  reset: () => void;
}

const defaultSettings: UserSettings = {
  soundEnabled: true,
  hapticsEnabled: true,
  reducedMotion: false,
  darkMode: true,
};

const defaultProfile: UserProfile = {
  id: '',
  displayName: '',
  avatar: '🚀',
  curriculum: 'uk-gcse',
  yearGroup: 10,
  subjects: [],
  createdAt: 0,
  lastActiveAt: 0,
  onboardingComplete: false,
};

// Generate a fun random display name
function generateDisplayName(): string {
  const adjectives = [
    'Cosmic', 'Stellar', 'Quantum', 'Blazing', 'Thunder', 'Neon', 'Crystal',
    'Shadow', 'Lightning', 'Turbo', 'Mega', 'Ultra', 'Super', 'Hyper', 'Epic',
  ];
  const nouns = [
    'Phoenix', 'Dragon', 'Ninja', 'Wizard', 'Knight', 'Ranger', 'Hunter',
    'Falcon', 'Wolf', 'Tiger', 'Panther', 'Hawk', 'Storm', 'Blaze', 'Spark',
  ];
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const num = Math.floor(Math.random() * 100);
  return `${adj}${noun}${num}`;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      profile: null,
      settings: defaultSettings,
      isLoading: true,

      setProfile: (partial) => {
        set((state) => ({
          profile: state.profile
            ? { ...state.profile, ...partial }
            : {
                ...defaultProfile,
                ...partial,
                id: crypto.randomUUID(),
                displayName: partial.displayName || generateDisplayName(),
                createdAt: Date.now(),
                lastActiveAt: Date.now(),
              },
        }));
      },

      setSettings: (partial) => {
        set((state) => ({
          settings: { ...state.settings, ...partial },
        }));
      },

      completeOnboarding: () => {
        set((state) => ({
          profile: state.profile
            ? { ...state.profile, onboardingComplete: true }
            : null,
        }));
      },

      updateLastActive: () => {
        set((state) => ({
          profile: state.profile
            ? { ...state.profile, lastActiveAt: Date.now() }
            : null,
        }));
      },

      reset: () => {
        set({
          profile: null,
          settings: defaultSettings,
          isLoading: false,
        });
      },
    }),
    {
      name: 'cramgames-user',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isLoading = false;
        }
      },
    }
  )
);
