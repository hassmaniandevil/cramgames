'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUserStore, YearGroup } from '@/lib/stores/userStore';
import {
  Scale,
  CheckCircle,
  XCircle,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import {
  GameFrame,
  useGameState,
  useGameTimer,
  useGameScore,
  useGameAudio,
  useScreenShake,
  ShakePresets,
  useParticles,
  ParticleEffect,
} from '@/components/game';

interface Equation {
  id: string;
  reactants: string;
  products: string;
  unbalanced: string;
  balanced: string;
  coefficients: number[];
  hint: string;
  difficulty: 'ks3' | 'gcse' | 'alevel';
}

type DifficultyLevel = 'KS3' | 'GCSE' | 'A-Level';

function getDifficultyFromYearGroup(yearGroup: YearGroup): DifficultyLevel {
  if (yearGroup >= 7 && yearGroup <= 9) return 'KS3';
  if (yearGroup >= 10 && yearGroup <= 11) return 'GCSE';
  if (yearGroup >= 12 && yearGroup <= 13) return 'A-Level';
  // Default to GCSE for primary years (shouldn't happen for chemistry)
  return 'GCSE';
}

function getEquationDifficultyFilter(level: DifficultyLevel): ('ks3' | 'gcse' | 'alevel')[] {
  switch (level) {
    case 'KS3':
      return ['ks3'];
    case 'GCSE':
      return ['ks3', 'gcse'];
    case 'A-Level':
      return ['ks3', 'gcse', 'alevel'];
  }
}

const equations: Equation[] = [
  // KS3 level - simple equations
  {
    id: 'e1',
    reactants: 'H₂ + O₂',
    products: 'H₂O',
    unbalanced: 'H₂ + O₂ → H₂O',
    balanced: '2H₂ + O₂ → 2H₂O',
    coefficients: [2, 1, 2],
    hint: 'Count the oxygen atoms on each side',
    difficulty: 'ks3',
  },
  {
    id: 'e5',
    reactants: 'Na + Cl₂',
    products: 'NaCl',
    unbalanced: 'Na + Cl₂ → NaCl',
    balanced: '2Na + Cl₂ → 2NaCl',
    coefficients: [2, 1, 2],
    hint: 'Cl₂ has 2 chlorine atoms',
    difficulty: 'ks3',
  },
  {
    id: 'e7',
    reactants: 'CaCO₃',
    products: 'CaO + CO₂',
    unbalanced: 'CaCO₃ → CaO + CO₂',
    balanced: 'CaCO₃ → CaO + CO₂',
    coefficients: [1, 1, 1],
    hint: 'This equation is already balanced!',
    difficulty: 'ks3',
  },
  {
    id: 'e10',
    reactants: 'Zn + HCl',
    products: 'ZnCl₂ + H₂',
    unbalanced: 'Zn + HCl → ZnCl₂ + H₂',
    balanced: 'Zn + 2HCl → ZnCl₂ + H₂',
    coefficients: [1, 2, 1, 1],
    hint: 'You need 2 HCl to get 2 chlorine atoms',
    difficulty: 'ks3',
  },
  // GCSE level - moderate equations
  {
    id: 'e2',
    reactants: 'N₂ + H₂',
    products: 'NH₃',
    unbalanced: 'N₂ + H₂ → NH₃',
    balanced: 'N₂ + 3H₂ → 2NH₃',
    coefficients: [1, 3, 2],
    hint: 'Start with nitrogen - you need 2 NH₃ molecules',
    difficulty: 'gcse',
  },
  {
    id: 'e4',
    reactants: 'CH₄ + O₂',
    products: 'CO₂ + H₂O',
    unbalanced: 'CH₄ + O₂ → CO₂ + H₂O',
    balanced: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
    coefficients: [1, 2, 1, 2],
    hint: 'Balance carbon first, then hydrogen, then oxygen',
    difficulty: 'gcse',
  },
  {
    id: 'e6',
    reactants: 'Mg + HCl',
    products: 'MgCl₂ + H₂',
    unbalanced: 'Mg + HCl → MgCl₂ + H₂',
    balanced: 'Mg + 2HCl → MgCl₂ + H₂',
    coefficients: [1, 2, 1, 1],
    hint: 'MgCl₂ needs 2 chlorine atoms',
    difficulty: 'gcse',
  },
  // A-Level - complex equations
  {
    id: 'e3',
    reactants: 'Fe + O₂',
    products: 'Fe₂O₃',
    unbalanced: 'Fe + O₂ → Fe₂O₃',
    balanced: '4Fe + 3O₂ → 2Fe₂O₃',
    coefficients: [4, 3, 2],
    hint: 'Find the LCM of oxygen atoms (6)',
    difficulty: 'alevel',
  },
  {
    id: 'e8',
    reactants: 'Al + O₂',
    products: 'Al₂O₃',
    unbalanced: 'Al + O₂ → Al₂O₃',
    balanced: '4Al + 3O₂ → 2Al₂O₃',
    coefficients: [4, 3, 2],
    hint: 'You need 6 oxygen atoms on each side',
    difficulty: 'alevel',
  },
  {
    id: 'e9',
    reactants: 'C₂H₆ + O₂',
    products: 'CO₂ + H₂O',
    unbalanced: 'C₂H₆ + O₂ → CO₂ + H₂O',
    balanced: '2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O',
    coefficients: [2, 7, 4, 6],
    hint: 'Balance C, then H, then O - this one is tricky!',
    difficulty: 'alevel',
  },
];

interface Question {
  equation: Equation;
  options: string[];
  correctAnswer: string;
}

function generateQuestion(usedIds: Set<string>, filteredEquations: Equation[]): Question | null {
  const available = filteredEquations.filter(eq => !usedIds.has(eq.id));
  if (available.length === 0) return null;

  const equation = available[Math.floor(Math.random() * available.length)];

  // Generate wrong options by modifying coefficients
  const wrongOptions: string[] = [];
  const parts = equation.balanced.split(' → ');

  // Create variations
  const variations = [
    equation.unbalanced,
    parts[0].replace(/^(\d*)/, (m) => m ? String(Number(m) + 1) : '2') + ' → ' + parts[1],
    parts[0] + ' → ' + parts[1].replace(/^(\d*)/, (m) => m ? String(Number(m) + 1) : '2'),
  ].filter(v => v !== equation.balanced);

  while (wrongOptions.length < 3 && variations.length > 0) {
    const idx = Math.floor(Math.random() * variations.length);
    const option = variations.splice(idx, 1)[0];
    if (!wrongOptions.includes(option) && option !== equation.balanced) {
      wrongOptions.push(option);
    }
  }

  // Add more random variations if needed
  while (wrongOptions.length < 3) {
    const randomEq = equations[Math.floor(Math.random() * equations.length)];
    if (randomEq.balanced !== equation.balanced && !wrongOptions.includes(randomEq.balanced)) {
      wrongOptions.push(randomEq.balanced);
    }
  }

  const options = [equation.balanced, ...wrongOptions.slice(0, 3)].sort(() => Math.random() - 0.5);

  return {
    equation,
    options,
    correctAnswer: equation.balanced,
  };
}

const TOTAL_TIME = 120; // 2 minutes for the game

export default function EquationBalancerPage() {
  const { profile } = useUserStore();

  // Get difficulty based on year group
  const yearGroup = profile?.yearGroup ?? 10;
  const difficultyLevel = useMemo(() => getDifficultyFromYearGroup(yearGroup), [yearGroup]);
  const allowedDifficulties = useMemo(() => getEquationDifficultyFilter(difficultyLevel), [difficultyLevel]);
  const filteredEquations = useMemo(
    () => equations.filter(eq => allowedDifficulties.includes(eq.difficulty)),
    [allowedDifficulties]
  );

  const totalQuestions = Math.min(8, filteredEquations.length);

  // Game framework hooks
  const { gameState, isPlaying, startGame: startGameState, finishGame, resetGame } = useGameState();
  const {
    score,
    combo,
    maxCombo,
    correctAnswers,
    wrongAnswers,
    accuracy,
    xpEarned,
    isPerfect,
    recordCorrect,
    recordWrong,
    reset: resetScore,
  } = useGameScore({ basePointsPerQuestion: 100 });
  const { playCorrect, playWrong } = useGameAudio();
  const { shake } = useScreenShake();
  const { trigger: particleTrigger, config: particleConfig, emitCorrect, emitWrong } = useParticles();

  // Timer hook
  const { time, start: startTimer, reset: resetTimer } = useGameTimer({
    initialTime: TOTAL_TIME,
    countDown: true,
    onTimeUp: finishGame,
  });

  // Game-specific state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [usedIds, setUsedIds] = useState<Set<string>>(new Set());
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const loadQuestion = useCallback(() => {
    const q = generateQuestion(usedIds, filteredEquations);
    if (q) {
      setQuestion(q);
      setUsedIds(prev => {
        const newSet = new Set(Array.from(prev));
        newSet.add(q.equation.id);
        return newSet;
      });
      setSelectedAnswer(null);
      setShowResult(false);
      setShowHint(false);
    }
  }, [usedIds, filteredEquations]);

  const handleStart = useCallback(() => {
    resetScore();
    resetTimer();
    setCurrentIndex(0);
    setUsedIds(new Set());
    setQuestion(null);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowHint(false);
    startGameState();
    startTimer();
    // Load first question after state is ready
    setTimeout(() => {
      const q = generateQuestion(new Set(), filteredEquations);
      if (q) {
        setQuestion(q);
        setUsedIds(new Set([q.equation.id]));
      }
    }, 0);
  }, [resetScore, resetTimer, startGameState, startTimer, filteredEquations]);

  const handleRestart = useCallback(() => {
    resetGame();
    handleStart();
  }, [resetGame, handleStart]);

  const handleAnswer = useCallback((answer: string) => {
    if (showResult || !question) return;

    setSelectedAnswer(answer);
    setShowResult(true);

    const correct = answer === question.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      // Hint penalty reduces points
      const timeBonus = showHint ? -50 : 0;
      recordCorrect(timeBonus);
      playCorrect(combo + 1);
      emitCorrect();
    } else {
      recordWrong();
      playWrong();
      shake(ShakePresets.wrong);
      emitWrong();
    }
  }, [showResult, question, showHint, combo, recordCorrect, recordWrong, playCorrect, playWrong, shake, emitCorrect, emitWrong]);

  const nextQuestion = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      loadQuestion();
    } else {
      finishGame();
    }
  }, [currentIndex, totalQuestions, loadQuestion, finishGame]);

  // Build stats object for GameFrame
  const stats = {
    score,
    correctAnswers,
    wrongAnswers,
    combo,
    maxCombo,
    accuracy,
    xpEarned,
    isPerfect,
  };

  return (
    <>
      {/* Particle effects layer */}
      <ParticleEffect trigger={particleTrigger} {...particleConfig} />

      <GameFrame
        title="Equation Balancer"
        subtitle="Balance chemical equations by choosing the correct coefficients"
        icon={<Scale size={40} className="text-purple-400" />}
        color="purple"
        gameState={gameState}
        onStart={handleStart}
        onRestart={handleRestart}
        time={time}
        totalTime={TOTAL_TIME}
        score={score}
        combo={combo}
        stats={stats}
      >
        {/* Game content - only rendered when playing */}
        {isPlaying && question && (
          <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full">
            {/* Progress indicator */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Question {currentIndex + 1} of {totalQuestions}</span>
                <span className={`font-medium ${
                  difficultyLevel === 'KS3' ? 'text-green-400' :
                  difficultyLevel === 'GCSE' ? 'text-amber-400' :
                  'text-red-400'
                }`}>
                  {difficultyLevel}
                </span>
              </div>
              <div className="h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-purple-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={question.equation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Equation display */}
                <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Scale size={20} className="text-purple-400" />
                    <span className="text-sm px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                      Chemistry
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-white mb-4">
                    Choose the correctly balanced equation:
                  </h2>

                  <div className="p-4 bg-[#0f0f17] rounded-xl text-center border border-white/5">
                    <p className="text-xl font-mono text-white">
                      {question.equation.unbalanced}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">Unbalanced equation</p>
                  </div>

                  {!showResult && (
                    <button
                      onClick={() => setShowHint(true)}
                      className="mt-4 text-sm text-purple-400 hover:text-purple-300 hover:underline flex items-center gap-1 transition-colors"
                    >
                      <Lightbulb size={14} />
                      {showHint ? `Hint: ${question.equation.hint}` : 'Need a hint? (-50 points if correct)'}
                    </button>
                  )}
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrectOption = option === question.correctAnswer;

                    let bgClass = 'bg-[#1a1a2e] border-white/10 hover:bg-[#252538] hover:border-purple-500/50';
                    if (showResult) {
                      if (isCorrectOption) {
                        bgClass = 'bg-green-500/20 border-green-500/50';
                      } else if (isSelected) {
                        bgClass = 'bg-red-500/20 border-red-500/50';
                      } else {
                        bgClass = 'bg-[#1a1a2e] border-white/10 opacity-50';
                      }
                    }

                    return (
                      <motion.button
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleAnswer(option)}
                        className={`w-full p-4 rounded-xl border flex items-center justify-between font-mono text-base transition-all ${bgClass}`}
                        disabled={showResult}
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="text-white">{option}</span>
                        </span>
                        {showResult && isCorrectOption && (
                          <CheckCircle size={20} className="text-green-400" />
                        )}
                        {showResult && isSelected && !isCorrectOption && (
                          <XCircle size={20} className="text-red-400" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Result feedback */}
                {showResult && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mt-6"
                  >
                    <div className={`rounded-xl p-4 mb-4 border ${
                      isCorrect
                        ? 'bg-green-500/10 border-green-500/30'
                        : 'bg-red-500/10 border-red-500/30'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        {isCorrect ? (
                          <CheckCircle size={20} className="text-green-400" />
                        ) : (
                          <XCircle size={20} className="text-red-400" />
                        )}
                        <span className={`font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                          {isCorrect ? `Correct! +${showHint ? 50 : 100} points` : 'Not quite right'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">
                        {question.equation.hint}
                      </p>
                    </div>

                    <button
                      onClick={nextQuestion}
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:from-purple-400 hover:to-purple-500 transition-all"
                    >
                      {currentIndex < totalQuestions - 1 ? (
                        <>
                          Next Equation
                          <ArrowRight size={20} />
                        </>
                      ) : (
                        'See Results'
                      )}
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </GameFrame>
    </>
  );
}
