import { create } from 'zustand';

export interface Question {
  id: string;
  type: 'mcq' | 'numeric_input' | 'true_false' | 'fill_blank' | 'order' | 'match';
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  content: {
    prompt: string;
    options?: string[];
    correctAnswer: string | number | string[];
    image?: string;
  };
  explanation: string;
  hints: string[];
  tags: string[];
}

export interface BattleConfig {
  zoneId: string;
  zoneName: string;
  subjectId: string;
  isBoss: boolean;
  questionsCount: number;
  timeLimit?: number; // seconds, optional
}

export type BattlePhase = 'loading' | 'ready' | 'question' | 'feedback' | 'results' | 'capsule';

interface BattleState {
  // Config
  config: BattleConfig | null;
  questions: Question[];

  // Current state
  phase: BattlePhase;
  currentQuestionIndex: number;
  currentQuestion: Question | null;

  // Scoring
  score: number;
  combo: number;
  maxCombo: number;
  correctCount: number;
  wrongCount: number;
  xpEarned: number;

  // Timing
  questionStartTime: number;
  answerTime: number; // ms taken for last answer

  // Feedback
  lastAnswerCorrect: boolean | null;
  selectedAnswer: string | number | null;
  showExplanation: boolean;

  // Actions
  startBattle: (config: BattleConfig, questions: Question[]) => void;
  submitAnswer: (answer: string | number) => { correct: boolean; xp: number };
  nextQuestion: () => void;
  showCapsule: () => void;
  skipCapsule: () => void;
  endBattle: () => BattleResults;
  toggleExplanation: () => void;
  reset: () => void;
}

export interface BattleResults {
  zoneId: string;
  score: number;
  maxScore: number;
  accuracy: number;
  maxCombo: number;
  xpEarned: number;
  perfectRound: boolean;
  newMastery?: number;
}

// XP calculations
function calculateBaseXP(difficulty: Question['difficulty']): number {
  switch (difficulty) {
    case 'easy': return 10;
    case 'medium': return 15;
    case 'hard': return 25;
    case 'expert': return 40;
    default: return 10;
  }
}

function calculateComboMultiplier(combo: number): number {
  if (combo <= 1) return 1;
  if (combo === 2) return 1.2;
  if (combo === 3) return 1.5;
  if (combo === 4) return 1.8;
  if (combo === 5) return 2.0;
  return 2.5; // Max multiplier
}

function calculateSpeedBonus(timeMs: number): number {
  // Bonus for quick answers (under 10 seconds)
  if (timeMs < 3000) return 1.5;
  if (timeMs < 5000) return 1.3;
  if (timeMs < 10000) return 1.1;
  return 1;
}

const initialState = {
  config: null,
  questions: [],
  phase: 'loading' as BattlePhase,
  currentQuestionIndex: 0,
  currentQuestion: null,
  score: 0,
  combo: 0,
  maxCombo: 0,
  correctCount: 0,
  wrongCount: 0,
  xpEarned: 0,
  questionStartTime: 0,
  answerTime: 0,
  lastAnswerCorrect: null,
  selectedAnswer: null,
  showExplanation: false,
};

export const useBattleStore = create<BattleState>((set, get) => ({
  ...initialState,

  startBattle: (config, questions) => {
    set({
      ...initialState,
      config,
      questions,
      phase: 'ready',
      currentQuestion: questions[0],
      questionStartTime: Date.now(),
    });

    // Short delay then start
    setTimeout(() => {
      set({ phase: 'question', questionStartTime: Date.now() });
    }, 500);
  },

  submitAnswer: (answer) => {
    const state = get();
    if (!state.currentQuestion || state.phase !== 'question') {
      return { correct: false, xp: 0 };
    }

    const question = state.currentQuestion;
    const answerTime = Date.now() - state.questionStartTime;

    // Check if answer is correct
    let correct = false;
    if (typeof question.content.correctAnswer === 'number') {
      correct = Number(answer) === question.content.correctAnswer;
    } else if (Array.isArray(question.content.correctAnswer)) {
      // For ordering/matching
      correct = JSON.stringify(answer) === JSON.stringify(question.content.correctAnswer);
    } else {
      correct = String(answer).toLowerCase().trim() === String(question.content.correctAnswer).toLowerCase().trim();
    }

    // Calculate XP
    let xp = 0;
    let newCombo = state.combo;

    if (correct) {
      newCombo = state.combo + 1;
      const baseXP = calculateBaseXP(question.difficulty);
      const comboMult = calculateComboMultiplier(newCombo);
      const speedBonus = calculateSpeedBonus(answerTime);
      xp = Math.round(baseXP * comboMult * speedBonus);

      // Boss bonus
      if (state.config?.isBoss) {
        xp = Math.round(xp * 1.5);
      }
    } else {
      newCombo = 0;
    }

    set({
      phase: 'feedback',
      lastAnswerCorrect: correct,
      selectedAnswer: answer,
      answerTime,
      combo: newCombo,
      maxCombo: Math.max(state.maxCombo, newCombo),
      correctCount: state.correctCount + (correct ? 1 : 0),
      wrongCount: state.wrongCount + (correct ? 0 : 1),
      score: state.score + (correct ? 1 : 0),
      xpEarned: state.xpEarned + xp,
    });

    return { correct, xp };
  },

  nextQuestion: () => {
    const state = get();
    const nextIndex = state.currentQuestionIndex + 1;

    if (nextIndex >= state.questions.length) {
      // Battle complete - show results
      set({ phase: 'results' });
    } else {
      // Next question
      set({
        phase: 'question',
        currentQuestionIndex: nextIndex,
        currentQuestion: state.questions[nextIndex],
        lastAnswerCorrect: null,
        selectedAnswer: null,
        showExplanation: false,
        questionStartTime: Date.now(),
      });
    }
  },

  showCapsule: () => {
    set({ phase: 'capsule' });
  },

  skipCapsule: () => {
    get().nextQuestion();
  },

  endBattle: () => {
    const state = get();
    const totalQuestions = state.questions.length;
    const accuracy = totalQuestions > 0 ? state.correctCount / totalQuestions : 0;

    return {
      zoneId: state.config?.zoneId || '',
      score: state.score,
      maxScore: totalQuestions,
      accuracy,
      maxCombo: state.maxCombo,
      xpEarned: state.xpEarned,
      perfectRound: state.correctCount === totalQuestions && totalQuestions > 0,
    };
  },

  toggleExplanation: () => {
    set((state) => ({ showExplanation: !state.showExplanation }));
  },

  reset: () => {
    set(initialState);
  },
}));
