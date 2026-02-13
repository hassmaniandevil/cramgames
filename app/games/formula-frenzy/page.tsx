'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical } from 'lucide-react';
import { useUserStore, YearGroup } from '@/lib/stores/userStore';
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

type DifficultyLevel = 'KS3' | 'GCSE' | 'A-Level';

interface Formula {
  id: string;
  name: string;
  formula: string;
  subject: 'Physics' | 'Chemistry' | 'Maths';
  variables: { symbol: string; meaning: string }[];
  difficulty: DifficultyLevel;
}

interface Question {
  formula: Formula;
  questionType: 'name-to-formula' | 'formula-to-name' | 'variable-meaning';
  question: string;
  correctAnswer: string;
  options: string[];
}

const allFormulas: Formula[] = [
  // Physics - KS3 (simpler formulas)
  {
    id: 'p1',
    name: 'Speed',
    formula: 'v = d/t',
    subject: 'Physics',
    difficulty: 'KS3',
    variables: [
      { symbol: 'v', meaning: 'speed (m/s)' },
      { symbol: 'd', meaning: 'distance (m)' },
      { symbol: 't', meaning: 'time (s)' },
    ],
  },
  {
    id: 'p3',
    name: 'Force',
    formula: 'F = ma',
    subject: 'Physics',
    difficulty: 'KS3',
    variables: [
      { symbol: 'F', meaning: 'force (N)' },
      { symbol: 'm', meaning: 'mass (kg)' },
      { symbol: 'a', meaning: 'acceleration (m/s²)' },
    ],
  },
  {
    id: 'p4',
    name: 'Weight',
    formula: 'W = mg',
    subject: 'Physics',
    difficulty: 'KS3',
    variables: [
      { symbol: 'W', meaning: 'weight (N)' },
      { symbol: 'm', meaning: 'mass (kg)' },
      { symbol: 'g', meaning: 'gravitational field strength (N/kg)' },
    ],
  },
  {
    id: 'p10',
    name: 'Density',
    formula: 'ρ = m/V',
    subject: 'Physics',
    difficulty: 'KS3',
    variables: [
      { symbol: 'ρ', meaning: 'density (kg/m³)' },
      { symbol: 'm', meaning: 'mass (kg)' },
      { symbol: 'V', meaning: 'volume (m³)' },
    ],
  },
  // Physics - GCSE
  {
    id: 'p2',
    name: 'Acceleration',
    formula: 'a = (v-u)/t',
    subject: 'Physics',
    difficulty: 'GCSE',
    variables: [
      { symbol: 'a', meaning: 'acceleration (m/s²)' },
      { symbol: 'v', meaning: 'final velocity (m/s)' },
      { symbol: 'u', meaning: 'initial velocity (m/s)' },
      { symbol: 't', meaning: 'time (s)' },
    ],
  },
  {
    id: 'p5',
    name: 'Work Done',
    formula: 'W = Fd',
    subject: 'Physics',
    difficulty: 'GCSE',
    variables: [
      { symbol: 'W', meaning: 'work done (J)' },
      { symbol: 'F', meaning: 'force (N)' },
      { symbol: 'd', meaning: 'distance (m)' },
    ],
  },
  {
    id: 'p6',
    name: 'Kinetic Energy',
    formula: 'KE = ½mv²',
    subject: 'Physics',
    difficulty: 'GCSE',
    variables: [
      { symbol: 'KE', meaning: 'kinetic energy (J)' },
      { symbol: 'm', meaning: 'mass (kg)' },
      { symbol: 'v', meaning: 'velocity (m/s)' },
    ],
  },
  {
    id: 'p7',
    name: 'Gravitational Potential Energy',
    formula: 'GPE = mgh',
    subject: 'Physics',
    difficulty: 'GCSE',
    variables: [
      { symbol: 'GPE', meaning: 'gravitational potential energy (J)' },
      { symbol: 'm', meaning: 'mass (kg)' },
      { symbol: 'g', meaning: 'gravitational field strength (N/kg)' },
      { symbol: 'h', meaning: 'height (m)' },
    ],
  },
  {
    id: 'p8',
    name: 'Power',
    formula: 'P = W/t',
    subject: 'Physics',
    difficulty: 'GCSE',
    variables: [
      { symbol: 'P', meaning: 'power (W)' },
      { symbol: 'W', meaning: 'work done (J)' },
      { symbol: 't', meaning: 'time (s)' },
    ],
  },
  {
    id: 'p9',
    name: 'Pressure',
    formula: 'p = F/A',
    subject: 'Physics',
    difficulty: 'GCSE',
    variables: [
      { symbol: 'p', meaning: 'pressure (Pa)' },
      { symbol: 'F', meaning: 'force (N)' },
      { symbol: 'A', meaning: 'area (m²)' },
    ],
  },
  {
    id: 'p11',
    name: "Ohm's Law",
    formula: 'V = IR',
    subject: 'Physics',
    difficulty: 'GCSE',
    variables: [
      { symbol: 'V', meaning: 'voltage (V)' },
      { symbol: 'I', meaning: 'current (A)' },
      { symbol: 'R', meaning: 'resistance (Ω)' },
    ],
  },
  {
    id: 'p12',
    name: 'Electrical Power',
    formula: 'P = IV',
    subject: 'Physics',
    difficulty: 'GCSE',
    variables: [
      { symbol: 'P', meaning: 'power (W)' },
      { symbol: 'I', meaning: 'current (A)' },
      { symbol: 'V', meaning: 'voltage (V)' },
    ],
  },
  // Physics - A-Level
  {
    id: 'p13',
    name: 'Momentum',
    formula: 'p = mv',
    subject: 'Physics',
    difficulty: 'A-Level',
    variables: [
      { symbol: 'p', meaning: 'momentum (kg·m/s)' },
      { symbol: 'm', meaning: 'mass (kg)' },
      { symbol: 'v', meaning: 'velocity (m/s)' },
    ],
  },
  {
    id: 'p14',
    name: 'Impulse',
    formula: 'J = Ft',
    subject: 'Physics',
    difficulty: 'A-Level',
    variables: [
      { symbol: 'J', meaning: 'impulse (N·s)' },
      { symbol: 'F', meaning: 'force (N)' },
      { symbol: 't', meaning: 'time (s)' },
    ],
  },
  {
    id: 'p15',
    name: 'Wave Speed',
    formula: 'v = fλ',
    subject: 'Physics',
    difficulty: 'A-Level',
    variables: [
      { symbol: 'v', meaning: 'wave speed (m/s)' },
      { symbol: 'f', meaning: 'frequency (Hz)' },
      { symbol: 'λ', meaning: 'wavelength (m)' },
    ],
  },
  {
    id: 'p16',
    name: 'Gravitational Force',
    formula: 'F = Gm₁m₂/r²',
    subject: 'Physics',
    difficulty: 'A-Level',
    variables: [
      { symbol: 'F', meaning: 'gravitational force (N)' },
      { symbol: 'G', meaning: 'gravitational constant' },
      { symbol: 'm₁,m₂', meaning: 'masses (kg)' },
      { symbol: 'r', meaning: 'distance (m)' },
    ],
  },
  // Chemistry - GCSE
  {
    id: 'c1',
    name: 'Number of Moles (mass)',
    formula: 'n = m/Mr',
    subject: 'Chemistry',
    difficulty: 'GCSE',
    variables: [
      { symbol: 'n', meaning: 'number of moles' },
      { symbol: 'm', meaning: 'mass (g)' },
      { symbol: 'Mr', meaning: 'relative formula mass' },
    ],
  },
  {
    id: 'c2',
    name: 'Concentration',
    formula: 'c = n/V',
    subject: 'Chemistry',
    difficulty: 'GCSE',
    variables: [
      { symbol: 'c', meaning: 'concentration (mol/dm³)' },
      { symbol: 'n', meaning: 'number of moles' },
      { symbol: 'V', meaning: 'volume (dm³)' },
    ],
  },
  // Chemistry - A-Level
  {
    id: 'c3',
    name: 'Ideal Gas Law',
    formula: 'pV = nRT',
    subject: 'Chemistry',
    difficulty: 'A-Level',
    variables: [
      { symbol: 'p', meaning: 'pressure (Pa)' },
      { symbol: 'V', meaning: 'volume (m³)' },
      { symbol: 'n', meaning: 'moles' },
      { symbol: 'R', meaning: 'gas constant' },
      { symbol: 'T', meaning: 'temperature (K)' },
    ],
  },
  {
    id: 'c4',
    name: 'Enthalpy Change',
    formula: 'ΔH = mcΔT',
    subject: 'Chemistry',
    difficulty: 'A-Level',
    variables: [
      { symbol: 'ΔH', meaning: 'enthalpy change (J)' },
      { symbol: 'm', meaning: 'mass (g)' },
      { symbol: 'c', meaning: 'specific heat capacity' },
      { symbol: 'ΔT', meaning: 'temperature change (K)' },
    ],
  },
  // Maths - KS3
  {
    id: 'm1',
    name: 'Area of Circle',
    formula: 'A = πr²',
    subject: 'Maths',
    difficulty: 'KS3',
    variables: [
      { symbol: 'A', meaning: 'area' },
      { symbol: 'π', meaning: 'pi (≈3.14)' },
      { symbol: 'r', meaning: 'radius' },
    ],
  },
  {
    id: 'm2',
    name: 'Circumference',
    formula: 'C = 2πr',
    subject: 'Maths',
    difficulty: 'KS3',
    variables: [
      { symbol: 'C', meaning: 'circumference' },
      { symbol: 'π', meaning: 'pi (≈3.14)' },
      { symbol: 'r', meaning: 'radius' },
    ],
  },
  {
    id: 'm3',
    name: 'Pythagoras Theorem',
    formula: 'a² + b² = c²',
    subject: 'Maths',
    difficulty: 'KS3',
    variables: [
      { symbol: 'a', meaning: 'shorter side' },
      { symbol: 'b', meaning: 'shorter side' },
      { symbol: 'c', meaning: 'hypotenuse' },
    ],
  },
  // Maths - GCSE
  {
    id: 'm4',
    name: 'Quadratic Formula',
    formula: 'x = (-b±√(b²-4ac))/2a',
    subject: 'Maths',
    difficulty: 'GCSE',
    variables: [
      { symbol: 'x', meaning: 'solutions' },
      { symbol: 'a,b,c', meaning: 'coefficients from ax²+bx+c=0' },
    ],
  },
  {
    id: 'm5',
    name: 'Sine Rule',
    formula: 'a/sinA = b/sinB',
    subject: 'Maths',
    difficulty: 'GCSE',
    variables: [
      { symbol: 'a,b', meaning: 'sides' },
      { symbol: 'A,B', meaning: 'opposite angles' },
    ],
  },
  {
    id: 'm6',
    name: 'Cosine Rule',
    formula: 'c² = a² + b² - 2ab·cosC',
    subject: 'Maths',
    difficulty: 'GCSE',
    variables: [
      { symbol: 'a,b,c', meaning: 'sides' },
      { symbol: 'C', meaning: 'angle opposite to c' },
    ],
  },
  // Maths - A-Level
  {
    id: 'm7',
    name: 'Differentiation (Power Rule)',
    formula: 'd/dx(xⁿ) = nxⁿ⁻¹',
    subject: 'Maths',
    difficulty: 'A-Level',
    variables: [
      { symbol: 'x', meaning: 'variable' },
      { symbol: 'n', meaning: 'power' },
    ],
  },
  {
    id: 'm8',
    name: 'Integration (Power Rule)',
    formula: '∫xⁿdx = xⁿ⁺¹/(n+1) + c',
    subject: 'Maths',
    difficulty: 'A-Level',
    variables: [
      { symbol: 'x', meaning: 'variable' },
      { symbol: 'n', meaning: 'power (n≠-1)' },
      { symbol: 'c', meaning: 'constant' },
    ],
  },
];

// Helper function to get difficulty level from year group
function getDifficultyFromYearGroup(yearGroup: YearGroup): DifficultyLevel {
  if (yearGroup >= 7 && yearGroup <= 9) return 'KS3';
  if (yearGroup >= 10 && yearGroup <= 11) return 'GCSE';
  return 'A-Level'; // Years 12-13
}

// Helper function to get formulas based on difficulty
function getFormulasForDifficulty(difficulty: DifficultyLevel): Formula[] {
  switch (difficulty) {
    case 'KS3':
      // KS3 only gets KS3 formulas
      return allFormulas.filter(f => f.difficulty === 'KS3');
    case 'GCSE':
      // GCSE gets KS3 + GCSE formulas
      return allFormulas.filter(f => f.difficulty === 'KS3' || f.difficulty === 'GCSE');
    case 'A-Level':
      // A-Level gets all formulas
      return allFormulas;
  }
}

function generateQuestion(usedIds: Set<string>, formulas: Formula[]): Question | null {
  const available = formulas.filter(f => !usedIds.has(f.id));
  if (available.length === 0) return null;

  const formula = available[Math.floor(Math.random() * available.length)];
  const questionType = Math.random() < 0.5 ? 'name-to-formula' : 'formula-to-name';

  let question: string;
  let correctAnswer: string;
  let options: string[];

  if (questionType === 'name-to-formula') {
    question = `What is the formula for ${formula.name}?`;
    correctAnswer = formula.formula;
    const otherFormulas = formulas.filter(f => f.id !== formula.id);
    const wrongOptions = otherFormulas
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(f => f.formula);
    options = [correctAnswer, ...wrongOptions].sort(() => Math.random() - 0.5);
  } else {
    question = `Which quantity does ${formula.formula} calculate?`;
    correctAnswer = formula.name;
    const otherFormulas = formulas.filter(f => f.id !== formula.id);
    const wrongOptions = otherFormulas
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(f => f.name);
    options = [correctAnswer, ...wrongOptions].sort(() => Math.random() - 0.5);
  }

  return { formula, questionType, question, correctAnswer, options };
}

const TOTAL_TIME = 60;

export default function FormulaFrenzyPage() {
  const { profile } = useUserStore();

  // Get difficulty from user's year group (default to GCSE if not set)
  const yearGroup = profile?.yearGroup ?? 10;
  const difficulty = getDifficultyFromYearGroup(yearGroup);
  const formulas = getFormulasForDifficulty(difficulty);

  // Game framework hooks
  const { gameState, isPlaying, startGame, finishGame, resetGame } = useGameState();
  const { playCorrect, playWrong } = useGameAudio();
  const { shake } = useScreenShake();
  const { trigger: particleTrigger, config: particleConfig, emitCorrect, emitWrong } = useParticles();

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

  const { time, start: startTimer, reset: resetTimer } = useGameTimer({
    initialTime: TOTAL_TIME,
    countDown: true,
    onTimeUp: finishGame,
  });

  // Game-specific state
  const [question, setQuestion] = useState<Question | null>(null);
  const [usedIds, setUsedIds] = useState<Set<string>>(new Set());
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const newQuestion = useCallback(() => {
    const q = generateQuestion(usedIds, formulas);
    if (q) {
      setQuestion(q);
      setUsedIds(prev => {
        const newSet = new Set(Array.from(prev));
        newSet.add(q.formula.id);
        return newSet;
      });
    } else {
      // Reset if we've used all formulas
      setUsedIds(new Set());
      const fresh = generateQuestion(new Set(), formulas);
      if (fresh) {
        setQuestion(fresh);
        setUsedIds(new Set([fresh.formula.id]));
      }
    }
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, [usedIds, formulas]);

  const handleStartGame = useCallback(() => {
    startGame();
    resetScore();
    resetTimer();
    setUsedIds(new Set());
    startTimer();
    // Generate first question after state reset
    const q = generateQuestion(new Set(), formulas);
    if (q) {
      setQuestion(q);
      setUsedIds(new Set([q.formula.id]));
    }
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, [startGame, resetScore, resetTimer, startTimer, formulas]);

  const handleRestartGame = useCallback(() => {
    resetGame();
    handleStartGame();
  }, [resetGame, handleStartGame]);

  const handleAnswer = useCallback((answer: string) => {
    if (showFeedback || !question) return;

    setSelectedAnswer(answer);
    setShowFeedback(true);

    const correct = answer === question.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      recordCorrect();
      playCorrect(combo + 1);
      emitCorrect();
    } else {
      recordWrong();
      playWrong();
      shake(ShakePresets.wrong);
      emitWrong();
    }

    setTimeout(() => {
      newQuestion();
    }, correct ? 400 : 1000);
  }, [showFeedback, question, combo, recordCorrect, recordWrong, playCorrect, playWrong, shake, emitCorrect, emitWrong, newQuestion]);

  // Stats object for GameFrame
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

  // Get subject badge colors (dark theme)
  const getSubjectBadgeClasses = (subject: string) => {
    switch (subject) {
      case 'Physics':
        return 'bg-purple-500/20 text-purple-400';
      case 'Chemistry':
        return 'bg-green-500/20 text-green-400';
      case 'Maths':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <>
      <ParticleEffect trigger={particleTrigger} {...particleConfig} />
      <GameFrame
        title="Formula Frenzy"
        subtitle="Match formulas to their names! Physics, Chemistry & Maths equations."
        icon={<FlaskConical size={40} className="text-blue-400" />}
        color="blue"
        gameState={gameState}
        onStart={handleStartGame}
        onRestart={handleRestartGame}
        time={time}
        totalTime={TOTAL_TIME}
        score={score}
        combo={combo}
        stats={stats}
      >
        {isPlaying && question && (
          <div className="flex-1 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={question.formula.id + question.questionType}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-md"
              >
                {/* Subject badge */}
                <div className="flex justify-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSubjectBadgeClasses(question.formula.subject)}`}>
                    {question.formula.subject}
                  </span>
                </div>

                {/* Question */}
                <div className="p-6 mb-6 text-center rounded-xl bg-[#1a1a24] border border-white/10">
                  <p className="text-xl font-bold text-white">
                    {question.question}
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrectAnswer = option === question.correctAnswer;

                    let buttonClasses = 'w-full p-4 rounded-xl text-lg font-semibold transition-all duration-200 text-center border';

                    if (showFeedback) {
                      if (isCorrectAnswer) {
                        buttonClasses += ' bg-green-500/20 border-green-500 text-green-400';
                      } else if (isSelected) {
                        buttonClasses += ' bg-red-500/20 border-red-500 text-red-400';
                      } else {
                        buttonClasses += ' bg-[#1a1a24] border-white/10 text-gray-500';
                      }
                    } else {
                      buttonClasses += ' bg-[#1a1a24] border-white/10 text-white hover:bg-[#252532] hover:border-white/20';
                    }

                    return (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleAnswer(option)}
                        className={buttonClasses}
                        disabled={showFeedback}
                      >
                        {option}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Feedback */}
                <AnimatePresence>
                  {showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`mt-4 p-4 rounded-xl ${
                        isCorrect ? 'bg-green-500/20 border border-green-500/50' : 'bg-red-500/20 border border-red-500/50'
                      }`}
                    >
                      <p className={`font-bold text-center ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                        {isCorrect ? `+${score > 0 ? 100 + (combo > 1 ? Math.floor((combo - 1) * 10) : 0) : 100} points!` : `Answer: ${question.correctAnswer}`}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-gray-400 text-center mt-1">
                          {question.formula.name}: {question.formula.formula}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </GameFrame>
    </>
  );
}
