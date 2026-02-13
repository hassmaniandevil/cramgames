'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
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
  Atom,
} from 'lucide-react';

interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  group: string;
  fact: string;
}

// KS3 Elements - Simple, commonly encountered elements (Years 7-9)
const ks3Elements: Element[] = [
  { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, group: 'Non-metal', fact: 'Lightest element, makes up 75% of the universe' },
  { symbol: 'He', name: 'Helium', atomicNumber: 2, group: 'Noble Gas', fact: 'Used in balloons, makes your voice squeaky' },
  { symbol: 'C', name: 'Carbon', atomicNumber: 6, group: 'Non-metal', fact: 'Basis of all organic life' },
  { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, group: 'Non-metal', fact: 'Makes up 78% of air' },
  { symbol: 'O', name: 'Oxygen', atomicNumber: 8, group: 'Non-metal', fact: 'Essential for respiration' },
  { symbol: 'Na', name: 'Sodium', atomicNumber: 11, group: 'Alkali Metal', fact: 'Reacts explosively with water' },
  { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, group: 'Alkaline Earth', fact: 'Burns with bright white flame' },
  { symbol: 'Al', name: 'Aluminium', atomicNumber: 13, group: 'Metal', fact: 'Most abundant metal in Earth\'s crust' },
  { symbol: 'S', name: 'Sulfur', atomicNumber: 16, group: 'Non-metal', fact: 'Yellow solid, smells like rotten eggs' },
  { symbol: 'Cl', name: 'Chlorine', atomicNumber: 17, group: 'Halogen', fact: 'Used to purify water' },
  { symbol: 'K', name: 'Potassium', atomicNumber: 19, group: 'Alkali Metal', fact: 'Essential for nerve function' },
  { symbol: 'Ca', name: 'Calcium', atomicNumber: 20, group: 'Alkaline Earth', fact: 'Found in bones and teeth' },
  { symbol: 'Fe', name: 'Iron', atomicNumber: 26, group: 'Transition Metal', fact: 'Most common element on Earth by mass' },
  { symbol: 'Cu', name: 'Copper', atomicNumber: 29, group: 'Transition Metal', fact: 'Excellent conductor, used in wiring' },
  { symbol: 'Au', name: 'Gold', atomicNumber: 79, group: 'Transition Metal', fact: 'Does not tarnish or corrode' },
];

// GCSE Elements - All commonly tested elements (Years 10-11)
const gcseElements: Element[] = [
  { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, group: 'Non-metal', fact: 'Lightest element, makes up 75% of the universe' },
  { symbol: 'He', name: 'Helium', atomicNumber: 2, group: 'Noble Gas', fact: 'Used in balloons, makes your voice squeaky' },
  { symbol: 'Li', name: 'Lithium', atomicNumber: 3, group: 'Alkali Metal', fact: 'Used in rechargeable batteries' },
  { symbol: 'C', name: 'Carbon', atomicNumber: 6, group: 'Non-metal', fact: 'Basis of all organic life' },
  { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, group: 'Non-metal', fact: 'Makes up 78% of air' },
  { symbol: 'O', name: 'Oxygen', atomicNumber: 8, group: 'Non-metal', fact: 'Essential for respiration' },
  { symbol: 'F', name: 'Fluorine', atomicNumber: 9, group: 'Halogen', fact: 'Most reactive non-metal' },
  { symbol: 'Ne', name: 'Neon', atomicNumber: 10, group: 'Noble Gas', fact: 'Used in bright signs' },
  { symbol: 'Na', name: 'Sodium', atomicNumber: 11, group: 'Alkali Metal', fact: 'Reacts explosively with water' },
  { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, group: 'Alkaline Earth', fact: 'Burns with bright white flame' },
  { symbol: 'Al', name: 'Aluminium', atomicNumber: 13, group: 'Metal', fact: 'Most abundant metal in Earth\'s crust' },
  { symbol: 'Si', name: 'Silicon', atomicNumber: 14, group: 'Metalloid', fact: 'Used in computer chips' },
  { symbol: 'P', name: 'Phosphorus', atomicNumber: 15, group: 'Non-metal', fact: 'Glows in the dark, found in DNA' },
  { symbol: 'S', name: 'Sulfur', atomicNumber: 16, group: 'Non-metal', fact: 'Yellow solid, smells like rotten eggs' },
  { symbol: 'Cl', name: 'Chlorine', atomicNumber: 17, group: 'Halogen', fact: 'Used to purify water' },
  { symbol: 'Ar', name: 'Argon', atomicNumber: 18, group: 'Noble Gas', fact: 'Third most abundant gas in atmosphere' },
  { symbol: 'K', name: 'Potassium', atomicNumber: 19, group: 'Alkali Metal', fact: 'Essential for nerve function' },
  { symbol: 'Ca', name: 'Calcium', atomicNumber: 20, group: 'Alkaline Earth', fact: 'Found in bones and teeth' },
  { symbol: 'Fe', name: 'Iron', atomicNumber: 26, group: 'Transition Metal', fact: 'Most common element on Earth by mass' },
  { symbol: 'Cu', name: 'Copper', atomicNumber: 29, group: 'Transition Metal', fact: 'Excellent conductor, used in wiring' },
  { symbol: 'Zn', name: 'Zinc', atomicNumber: 30, group: 'Transition Metal', fact: 'Used to galvanise steel' },
  { symbol: 'Br', name: 'Bromine', atomicNumber: 35, group: 'Halogen', fact: 'Only liquid non-metal at room temp' },
  { symbol: 'Ag', name: 'Silver', atomicNumber: 47, group: 'Transition Metal', fact: 'Best conductor of electricity' },
  { symbol: 'I', name: 'Iodine', atomicNumber: 53, group: 'Halogen', fact: 'Essential for thyroid function' },
  { symbol: 'Au', name: 'Gold', atomicNumber: 79, group: 'Transition Metal', fact: 'Does not tarnish or corrode' },
  { symbol: 'Hg', name: 'Mercury', atomicNumber: 80, group: 'Transition Metal', fact: 'Only liquid metal at room temp' },
  { symbol: 'Pb', name: 'Lead', atomicNumber: 82, group: 'Metal', fact: 'Dense metal, blocks radiation' },
];

// A-Level Elements - Extended periodic table knowledge (Years 12-13)
const aLevelElements: Element[] = [
  ...gcseElements,
  { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, group: 'Alkaline Earth', fact: 'Lightweight but toxic, used in aerospace' },
  { symbol: 'B', name: 'Boron', atomicNumber: 5, group: 'Metalloid', fact: 'Used in glass and detergents' },
  { symbol: 'Sc', name: 'Scandium', atomicNumber: 21, group: 'Transition Metal', fact: 'Used in aluminium alloys for aircraft' },
  { symbol: 'Ti', name: 'Titanium', atomicNumber: 22, group: 'Transition Metal', fact: 'Strong, lightweight, corrosion-resistant' },
  { symbol: 'V', name: 'Vanadium', atomicNumber: 23, group: 'Transition Metal', fact: 'Used in steel alloys for tools' },
  { symbol: 'Cr', name: 'Chromium', atomicNumber: 24, group: 'Transition Metal', fact: 'Used in stainless steel and chrome plating' },
  { symbol: 'Mn', name: 'Manganese', atomicNumber: 25, group: 'Transition Metal', fact: 'Essential for steel production' },
  { symbol: 'Co', name: 'Cobalt', atomicNumber: 27, group: 'Transition Metal', fact: 'Used in batteries and blue pigments' },
  { symbol: 'Ni', name: 'Nickel', atomicNumber: 28, group: 'Transition Metal', fact: 'Used in coins and stainless steel' },
  { symbol: 'Ga', name: 'Gallium', atomicNumber: 31, group: 'Metal', fact: 'Melts in your hand at 29.76C' },
  { symbol: 'Ge', name: 'Germanium', atomicNumber: 32, group: 'Metalloid', fact: 'Used in semiconductors and fiber optics' },
  { symbol: 'As', name: 'Arsenic', atomicNumber: 33, group: 'Metalloid', fact: 'Historic poison, now used in semiconductors' },
  { symbol: 'Se', name: 'Selenium', atomicNumber: 34, group: 'Non-metal', fact: 'Used in solar cells and electronics' },
  { symbol: 'Kr', name: 'Krypton', atomicNumber: 36, group: 'Noble Gas', fact: 'Used in photography flash lamps' },
  { symbol: 'Rb', name: 'Rubidium', atomicNumber: 37, group: 'Alkali Metal', fact: 'Used in atomic clocks' },
  { symbol: 'Sr', name: 'Strontium', atomicNumber: 38, group: 'Alkaline Earth', fact: 'Creates red colour in fireworks' },
  { symbol: 'Pd', name: 'Palladium', atomicNumber: 46, group: 'Transition Metal', fact: 'Used in catalytic converters' },
  { symbol: 'Sn', name: 'Tin', atomicNumber: 50, group: 'Metal', fact: 'Used in tin cans and solder' },
  { symbol: 'Xe', name: 'Xenon', atomicNumber: 54, group: 'Noble Gas', fact: 'Used in camera flashes and anaesthesia' },
  { symbol: 'Ba', name: 'Barium', atomicNumber: 56, group: 'Alkaline Earth', fact: 'Creates green colour in fireworks' },
  { symbol: 'Pt', name: 'Platinum', atomicNumber: 78, group: 'Transition Metal', fact: 'Rarer than gold, used in catalysts' },
  { symbol: 'U', name: 'Uranium', atomicNumber: 92, group: 'Actinide', fact: 'Radioactive, used in nuclear power' },
];

type DifficultyLevel = 'KS3' | 'GCSE' | 'A-Level';

// Determine difficulty level based on year group
function getDifficultyFromYearGroup(yearGroup: YearGroup | undefined): DifficultyLevel {
  if (!yearGroup) return 'GCSE'; // Default to GCSE
  if (yearGroup >= 7 && yearGroup <= 9) return 'KS3';
  if (yearGroup >= 10 && yearGroup <= 11) return 'GCSE';
  if (yearGroup >= 12) return 'A-Level';
  return 'KS3'; // Primary years default to KS3
}

// Get elements based on difficulty
function getElementsForDifficulty(difficulty: DifficultyLevel): Element[] {
  switch (difficulty) {
    case 'KS3':
      return ks3Elements;
    case 'GCSE':
      return gcseElements;
    case 'A-Level':
      return aLevelElements;
    default:
      return gcseElements;
  }
}

type QuestionType = 'symbol-to-name' | 'name-to-symbol' | 'atomic-number' | 'group';

interface Question {
  element: Element;
  type: QuestionType;
  question: string;
  correctAnswer: string;
  options: string[];
}

function generateQuestion(elements: Element[]): Question {
  const element = elements[Math.floor(Math.random() * elements.length)];
  const types: QuestionType[] = ['symbol-to-name', 'name-to-symbol', 'atomic-number', 'group'];
  const type = types[Math.floor(Math.random() * types.length)];

  let question: string;
  let correctAnswer: string;
  let options: string[];

  const otherElements = elements.filter(e => e.symbol !== element.symbol);

  switch (type) {
    case 'symbol-to-name':
      question = `What element has the symbol ${element.symbol}?`;
      correctAnswer = element.name;
      options = [
        correctAnswer,
        ...otherElements.sort(() => Math.random() - 0.5).slice(0, 3).map(e => e.name)
      ].sort(() => Math.random() - 0.5);
      break;

    case 'name-to-symbol':
      question = `What is the symbol for ${element.name}?`;
      correctAnswer = element.symbol;
      options = [
        correctAnswer,
        ...otherElements.sort(() => Math.random() - 0.5).slice(0, 3).map(e => e.symbol)
      ].sort(() => Math.random() - 0.5);
      break;

    case 'atomic-number':
      question = `What is the atomic number of ${element.name}?`;
      correctAnswer = element.atomicNumber.toString();
      const wrongNumbers = [
        element.atomicNumber + 1,
        element.atomicNumber - 1,
        element.atomicNumber + 2,
      ].filter(n => n > 0).slice(0, 3);
      options = [correctAnswer, ...wrongNumbers.map(n => n.toString())].sort(() => Math.random() - 0.5);
      break;

    case 'group':
      question = `Which group does ${element.name} (${element.symbol}) belong to?`;
      correctAnswer = element.group;
      const allGroups = Array.from(new Set(elements.map(e => e.group)));
      const wrongGroups = allGroups.filter(g => g !== element.group).sort(() => Math.random() - 0.5).slice(0, 3);
      options = [correctAnswer, ...wrongGroups].sort(() => Math.random() - 0.5);
      break;
  }

  return { element, type, question, correctAnswer, options };
}

export default function ElementHuntPage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const { profile } = useUserStore();

  // Determine difficulty based on user's year group
  const difficulty = useMemo(() => getDifficultyFromYearGroup(profile?.yearGroup), [profile?.yearGroup]);
  const elements = useMemo(() => getElementsForDifficulty(difficulty), [difficulty]);

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const newQuestion = useCallback(() => {
    setQuestion(generateQuestion(elements));
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, [elements]);

  const startGame = () => {
    setGameState('playing');
    setTimeLeft(60);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
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
      const points = 12 + comboBonus;
      setScore(s => s + points);
      setCombo(c => c + 1);
      setMaxCombo(m => Math.max(m, combo + 1));
      setCorrectAnswers(c => c + 1);
    } else {
      setCombo(0);
    }

    setTimeout(() => {
      newQuestion();
    }, correct ? 400 : 1200);
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
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-pastel-green flex items-center justify-center">
            <Atom size={48} className="text-correct" />
          </div>

          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Element Hunt
          </h1>
          <p className="text-text-secondary mb-4">
            Test your periodic table knowledge! Symbols, names, atomic numbers & groups.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-6">
            <span className="text-sm font-medium text-accent">
              Difficulty: {difficulty}
            </span>
            <span className="text-xs text-text-muted">
              ({elements.length} elements)
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
              <p className="text-sm text-text-muted">Learn facts</p>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full btn-primary py-4 text-lg"
          >
            Start Hunt
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
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-pastel-green flex items-center justify-center"
          >
            <Trophy size={40} className="text-correct" />
          </motion.div>

          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Element Expert!
          </h1>
          <p className="text-text-secondary mb-6">
            Great periodic table knowledge!
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
              Hunt Again
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
            className="flex items-center gap-2 px-4 py-2 bg-pastel-green rounded-xl"
            animate={timeLeft <= 10 ? { scale: [1, 1.1, 1] } : {}}
            transition={{ repeat: timeLeft <= 10 ? Infinity : 0, duration: 0.5 }}
          >
            <Clock size={20} className={timeLeft <= 10 ? 'text-incorrect' : 'text-correct'} />
            <span className={`font-mono font-bold text-lg ${timeLeft <= 10 ? 'text-incorrect' : 'text-correct'}`}>
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
              key={question.element.symbol + question.type}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md"
            >
              {/* Element display */}
              <div className="flex justify-center mb-4">
                <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  className="w-20 h-20 bg-gradient-to-br from-accent to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-3xl font-bold text-white">
                    {question.type === 'name-to-symbol' ? '?' : question.element.symbol}
                  </span>
                </motion.div>
              </div>

              {/* Question */}
              <div className="card p-6 mb-6 text-center">
                <p className="text-xl font-bold text-text-primary">
                  {question.question}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3">
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
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
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

              {/* Feedback with fun fact */}
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
                      {isCorrect ? `+${12 + Math.floor(combo / 3) * 5} points!` : `Answer: ${question.correctAnswer}`}
                    </p>
                    <p className="text-sm text-text-secondary text-center mt-2">
                      {question.element.fact}
                    </p>
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
