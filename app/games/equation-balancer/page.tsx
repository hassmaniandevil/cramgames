'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useUserStore, YearGroup } from '@/lib/stores/userStore';
import {
  X,
  Zap,
  Trophy,
  RotateCcw,
  Home,
  Scale,
  CheckCircle,
  XCircle,
  ArrowRight,
} from 'lucide-react';

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

export default function EquationBalancerPage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const { profile } = useUserStore();

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'complete'>('ready');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [usedIds, setUsedIds] = useState<Set<string>>(new Set());
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  // Get difficulty based on year group
  const yearGroup = profile?.yearGroup ?? 10;
  const difficultyLevel = getDifficultyFromYearGroup(yearGroup);
  const allowedDifficulties = getEquationDifficultyFilter(difficultyLevel);
  const filteredEquations = equations.filter(eq => allowedDifficulties.includes(eq.difficulty));

  const totalQuestions = Math.min(8, filteredEquations.length);

  const loadQuestion = () => {
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
  };

  const startGame = () => {
    setGameState('playing');
    loadQuestion();
  };

  const handleAnswer = (answer: string) => {
    if (showResult || !question) return;

    setSelectedAnswer(answer);
    setShowResult(true);

    const correct = answer === question.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      const points = showHint ? 10 : 20;
      setScore(s => s + points);
      setCorrectCount(c => c + 1);
      addXP(points);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      loadQuestion();
    } else {
      setGameState('complete');
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setUsedIds(new Set());
    setCorrectCount(0);
    setQuestion(null);
    setGameState('ready');
  };

  // Ready screen - show difficulty level
  if (gameState === 'ready') {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-8 w-full max-w-md text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-pastel-purple flex items-center justify-center"
          >
            <Scale size={40} className="text-accent" />
          </motion.div>

          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Equation Balancer
          </h1>
          <p className="text-text-secondary mb-4">
            Balance chemical equations by choosing the correct coefficients
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated rounded-full mb-6">
            <span className="text-sm text-text-muted">Difficulty:</span>
            <span className={`font-bold ${
              difficultyLevel === 'KS3' ? 'text-green-400' :
              difficultyLevel === 'GCSE' ? 'text-amber-400' :
              'text-red-400'
            }`}>
              {difficultyLevel}
            </span>
            <span className="text-xs text-text-muted">(Year {yearGroup})</span>
          </div>

          <div className="text-sm text-text-muted mb-6">
            {difficultyLevel === 'KS3' && 'Simple equations with basic coefficients'}
            {difficultyLevel === 'GCSE' && 'Includes combustion and displacement reactions'}
            {difficultyLevel === 'A-Level' && 'Complex equations with larger coefficients'}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">{totalQuestions}</div>
              <div className="text-xs text-text-muted">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-xp">{totalQuestions * 20}</div>
              <div className="text-xs text-text-muted">Max XP</div>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full btn-primary flex items-center justify-center gap-2"
          >
            <Zap size={20} />
            Start Game
          </button>
        </motion.div>
      </div>
    );
  }

  // Complete screen
  if (gameState === 'complete') {
    const accuracy = Math.round((correctCount / totalQuestions) * 100);

    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-8 w-full max-w-md text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-pastel-yellow flex items-center justify-center"
          >
            <Trophy size={40} className="text-amber-500" />
          </motion.div>

          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Equations Balanced!
          </h1>
          <p className="text-text-secondary mb-6">
            Great chemistry skills!
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-xp">{score}</div>
              <div className="text-xs text-text-muted">XP Earned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-correct">{accuracy}%</div>
              <div className="text-xs text-text-muted">Accuracy</div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-text-secondary">Equations balanced</span>
              <span className="font-bold text-text-primary">{correctCount}/{totalQuestions}</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={resetGame}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              Play Again
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full card p-4 text-text-primary font-semibold flex items-center justify-center gap-2 hover:bg-surface-elevated transition-colors"
            >
              <Home size={20} />
              Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass sticky top-0 z-50 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="p-2 hover:bg-surface-elevated rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
          <div className="text-center">
            <h1 className="font-bold text-text-primary">Equation Balancer</h1>
            <p className="text-xs text-text-muted">{currentIndex + 1} of {totalQuestions}</p>
          </div>
          <div className="flex items-center gap-1">
            <Zap size={18} className="text-xp" />
            <span className="font-bold text-xp">{score}</span>
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="max-w-2xl mx-auto px-4 pt-4">
        <div className="h-2 bg-surface-elevated rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-purple-400"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <main className="max-w-2xl mx-auto p-4 pb-32">
        {question && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {/* Equation display */}
            <div className="card p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Scale size={20} className="text-accent" />
                <span className="text-sm px-2 py-1 bg-pastel-purple text-accent rounded-full">
                  Chemistry
                </span>
              </div>

              <h2 className="text-lg font-semibold text-text-primary mb-4">
                Choose the correctly balanced equation:
              </h2>

              <div className="p-4 bg-surface-elevated rounded-xl text-center">
                <p className="text-xl font-mono text-text-primary">
                  {question.equation.unbalanced}
                </p>
                <p className="text-sm text-text-muted mt-2">Unbalanced equation</p>
              </div>

              {!showResult && (
                <button
                  onClick={() => setShowHint(true)}
                  className="mt-4 text-sm text-accent hover:underline"
                >
                  {showHint ? `Hint: ${question.equation.hint}` : 'Need a hint? (-10 XP if correct)'}
                </button>
              )}
            </div>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrectOption = option === question.correctAnswer;

                let className = 'option-card justify-center font-mono text-base';
                if (showResult) {
                  if (isCorrectOption) className += ' correct';
                  else if (isSelected) className += ' wrong';
                }

                return (
                  <motion.button
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleAnswer(option)}
                    className={className}
                    disabled={showResult}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-surface-elevated flex items-center justify-center text-sm font-bold">
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </span>
                    {showResult && isCorrectOption && (
                      <CheckCircle size={20} className="text-correct ml-auto" />
                    )}
                    {showResult && isSelected && !isCorrectOption && (
                      <XCircle size={20} className="text-incorrect ml-auto" />
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
                <div className={`card p-4 mb-4 ${isCorrect ? 'bg-pastel-green' : 'bg-pastel-pink'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {isCorrect ? (
                      <CheckCircle size={20} className="text-correct" />
                    ) : (
                      <XCircle size={20} className="text-incorrect" />
                    )}
                    <span className="font-bold text-text-primary">
                      {isCorrect ? `Correct! +${showHint ? 10 : 20} XP` : 'Not quite right'}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    {question.equation.hint}
                  </p>
                </div>

                <button
                  onClick={nextQuestion}
                  className="w-full btn-primary py-4 flex items-center justify-center gap-2"
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
        )}
      </main>
    </div>
  );
}
