'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useUserStore, YearGroup } from '@/lib/stores/userStore';
import {
  X,
  Zap,
  Clock,
  Trophy,
  RotateCcw,
  Home,
  Flame,
  FlaskConical,
} from 'lucide-react';

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

export default function FormulaFrenzyPage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const { profile } = useUserStore();

  // Get difficulty from user's year group (default to GCSE if not set)
  const yearGroup = profile?.yearGroup ?? 10;
  const difficulty = getDifficultyFromYearGroup(yearGroup);
  const formulas = getFormulasForDifficulty(difficulty);

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [usedIds, setUsedIds] = useState<Set<string>>(new Set());
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const newQuestion = () => {
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
  };

  const startGame = () => {
    setGameState('playing');
    setTimeLeft(60);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setUsedIds(new Set());
    setTotalAnswered(0);
    setCorrectAnswers(0);
    newQuestion();
  };

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setGameState('finished');
          addXP(score);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, score, addXP]);

  const handleAnswer = (answer: string) => {
    if (showFeedback || !question) return;

    setSelectedAnswer(answer);
    setShowFeedback(true);
    setTotalAnswered(t => t + 1);

    const correct = answer === question.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      const comboBonus = Math.floor(combo / 3) * 5;
      const points = 15 + comboBonus;
      setScore(s => s + points);
      setCombo(c => c + 1);
      setMaxCombo(m => Math.max(m, combo + 1));
      setCorrectAnswers(c => c + 1);
    } else {
      setCombo(0);
    }

    setTimeout(() => {
      newQuestion();
    }, correct ? 400 : 1000);
  };

  // Ready screen
  if (gameState === 'ready') {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-sm"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-pastel-blue flex items-center justify-center">
            <FlaskConical size={48} className="text-blue-500" />
          </div>

          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Formula Frenzy
          </h1>
          <p className="text-text-secondary mb-4">
            Match formulas to their names! Physics, Chemistry & Maths equations.
          </p>

          {/* Difficulty Badge */}
          <div className="flex justify-center mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-bold ${
              difficulty === 'KS3' ? 'bg-pastel-green text-correct' :
              difficulty === 'GCSE' ? 'bg-pastel-blue text-blue-600' :
              'bg-pastel-purple text-accent'
            }`}>
              {difficulty} Level ({formulas.length} formulas)
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="card p-4 text-center">
              <Clock size={24} className="text-accent mx-auto mb-2" />
              <p className="text-sm text-text-muted">60 seconds</p>
            </div>
            <div className="card p-4 text-center">
              <Flame size={24} className="text-streak mx-auto mb-2" />
              <p className="text-sm text-text-muted">Build combos</p>
            </div>
            <div className="card p-4 text-center">
              <Zap size={24} className="text-xp mx-auto mb-2" />
              <p className="text-sm text-text-muted">15+ XP each</p>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full btn-primary py-4 text-lg"
          >
            Start Game
          </button>

          <button
            onClick={() => router.push('/')}
            className="mt-4 text-text-muted hover:text-text-primary transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  // Finished screen
  if (gameState === 'finished') {
    const accuracy = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;

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
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-pastel-blue flex items-center justify-center"
          >
            <Trophy size={40} className="text-blue-500" />
          </motion.div>

          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Formula Master!
          </h1>
          <p className="text-text-secondary mb-6">
            Great formula knowledge!
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-xp">{score}</div>
              <div className="text-xs text-text-muted">Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-streak">{maxCombo}x</div>
              <div className="text-xs text-text-muted">Max Combo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-correct">{accuracy}%</div>
              <div className="text-xs text-text-muted">Accuracy</div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={startGame}
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

  // Playing screen
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="glass sticky top-0 z-40 safe-top">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => router.push('/')}
            className="p-2 -ml-2 text-text-muted hover:text-text-primary transition-colors"
          >
            <X size={24} />
          </button>

          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-pastel-blue rounded-xl"
            animate={timeLeft <= 10 ? { scale: [1, 1.1, 1] } : {}}
            transition={{ repeat: timeLeft <= 10 ? Infinity : 0, duration: 0.5 }}
          >
            <Clock size={20} className={timeLeft <= 10 ? 'text-incorrect' : 'text-blue-500'} />
            <span className={`font-mono font-bold text-lg ${timeLeft <= 10 ? 'text-incorrect' : 'text-blue-500'}`}>
              {timeLeft}s
            </span>
          </motion.div>

          <div className="flex items-center gap-2">
            <Zap size={20} className="text-xp" />
            <span className="font-bold text-xp">{score}</span>
          </div>
        </div>

        {combo >= 2 && (
          <div className="px-4 pb-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <div className="px-4 py-1 bg-gradient-to-r from-streak/20 to-amber-500/20 border border-streak/30 rounded-full">
                <span className="font-bold text-streak flex items-center gap-1">
                  <Flame size={16} /> {combo}x Combo!
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        {question && (
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
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  question.formula.subject === 'Physics' ? 'bg-pastel-purple text-accent' :
                  question.formula.subject === 'Chemistry' ? 'bg-pastel-green text-correct' :
                  'bg-pastel-blue text-blue-600'
                }`}>
                  {question.formula.subject}
                </span>
              </div>

              {/* Question */}
              <div className="card p-6 mb-6 text-center">
                <p className="text-xl font-bold text-text-primary">
                  {question.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectAnswer = option === question.correctAnswer;

                  let className = 'option-card justify-center text-lg font-semibold';
                  if (showFeedback) {
                    if (isCorrectAnswer) className += ' correct';
                    else if (isSelected) className += ' wrong';
                  }

                  return (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleAnswer(option)}
                      className={className}
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
                      isCorrect ? 'bg-pastel-green' : 'bg-pastel-pink'
                    }`}
                  >
                    <p className={`font-bold text-center ${isCorrect ? 'text-correct' : 'text-incorrect'}`}>
                      {isCorrect ? `+${15 + Math.floor(combo / 3) * 5} points!` : `Answer: ${question.correctAnswer}`}
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-text-secondary text-center mt-1">
                        {question.formula.name}: {question.formula.formula}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        )}
      </main>
    </div>
  );
}
