import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * Session Resume System
 *
 * Remembers where the user left off and enables instant continuation.
 * Removes task initiation friction.
 *
 * ADHD Principle: No thinking required - just continue
 */

export interface GameSession {
  gameId: string;
  gameName: string;
  startedAt: number;
  lastActivityAt: number;
  progress: {
    questionsAnswered: number;
    questionsCorrect: number;
    currentStreak: number;
    xpEarned: number;
  };
  state?: Record<string, any>; // Game-specific state
}

interface SessionState {
  // Current active session (if any)
  activeSession: GameSession | null;

  // Recent sessions for quick resume
  recentSessions: GameSession[];

  // Preferred game mode
  preferredMode: 'learn' | 'battle' | null;

  // Last played subject
  lastSubject: string | null;

  // Quick action preference
  showQuickResume: boolean;

  // Actions
  startSession: (gameId: string, gameName: string) => void;
  updateSession: (progress: Partial<GameSession['progress']>, state?: Record<string, any>) => void;
  endSession: () => void;
  getResumeSession: () => GameSession | null;
  setPreferredMode: (mode: 'learn' | 'battle') => void;
  setLastSubject: (subject: string) => void;
  clearRecentSessions: () => void;
  reset: () => void;
}

const MAX_RECENT_SESSIONS = 5;

const initialState = {
  activeSession: null as GameSession | null,
  recentSessions: [] as GameSession[],
  preferredMode: null as 'learn' | 'battle' | null,
  lastSubject: null as string | null,
  showQuickResume: true,
};

export const useSessionStore = create<SessionState>()(
  persist(
    (set, get) => ({
      ...initialState,

      startSession: (gameId, gameName) => {
        const now = Date.now();
        const newSession: GameSession = {
          gameId,
          gameName,
          startedAt: now,
          lastActivityAt: now,
          progress: {
            questionsAnswered: 0,
            questionsCorrect: 0,
            currentStreak: 0,
            xpEarned: 0,
          },
        };

        set({ activeSession: newSession });
      },

      updateSession: (progress, state) => {
        const session = get().activeSession;
        if (!session) return;

        set({
          activeSession: {
            ...session,
            lastActivityAt: Date.now(),
            progress: {
              ...session.progress,
              ...progress,
            },
            state: state ? { ...session.state, ...state } : session.state,
          },
        });
      },

      endSession: () => {
        const session = get().activeSession;
        if (!session) return;

        // Add to recent sessions (if meaningful progress was made)
        if (session.progress.questionsAnswered > 0) {
          const recentSessions = [
            session,
            ...get().recentSessions.filter(s => s.gameId !== session.gameId),
          ].slice(0, MAX_RECENT_SESSIONS);

          set({
            activeSession: null,
            recentSessions,
          });
        } else {
          set({ activeSession: null });
        }
      },

      getResumeSession: () => {
        const state = get();

        // If there's an active session from today, return it
        if (state.activeSession) {
          const hoursSinceActivity = (Date.now() - state.activeSession.lastActivityAt) / (1000 * 60 * 60);
          if (hoursSinceActivity < 24) {
            return state.activeSession;
          }
        }

        // Otherwise, return the most recent session
        if (state.recentSessions.length > 0) {
          const recent = state.recentSessions[0];
          const hoursSinceActivity = (Date.now() - recent.lastActivityAt) / (1000 * 60 * 60);
          if (hoursSinceActivity < 72) { // Within 3 days
            return recent;
          }
        }

        return null;
      },

      setPreferredMode: (mode) => {
        set({ preferredMode: mode });
      },

      setLastSubject: (subject) => {
        set({ lastSubject: subject });
      },

      clearRecentSessions: () => {
        set({ recentSessions: [] });
      },

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'cramgames-session',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useSessionStore;
