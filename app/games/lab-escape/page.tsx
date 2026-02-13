'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useLoreStore } from '@/lib/stores/loreStore';
import {
  X,
  Zap,
  Trophy,
  RotateCcw,
  Home,
  Lock,
  Key,
  DoorOpen,
  Lightbulb,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

interface Puzzle {
  id: number;
  roomName: string;
  roomEmoji: string;
  riddle: string;
  hint: string;
  answer: string;
  options: string[];
  subject: string;
  explanation: string;
}

const PUZZLES: Puzzle[] = [
  {
    id: 1,
    roomName: 'The Chemical Chamber',
    roomEmoji: '⚗️',
    riddle: 'I am element 79, treasured by all. What am I?',
    hint: 'Think precious metal...',
    answer: 'Gold (Au)',
    options: ['Silver (Ag)', 'Gold (Au)', 'Iron (Fe)', 'Copper (Cu)'],
    subject: 'Chemistry',
    explanation: 'Gold has atomic number 79 and symbol Au (from Latin "aurum").',
  },
  {
    id: 2,
    roomName: 'The Biology Bay',
    roomEmoji: '🧬',
    riddle: 'The code to exit lies in a cell organelle. It turns food into energy, what is it?',
    hint: 'The powerhouse...',
    answer: 'Mitochondria',
    options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Ribosome'],
    subject: 'Biology',
    explanation: 'Mitochondria perform cellular respiration, converting glucose to ATP.',
  },
  {
    id: 3,
    roomName: 'The Physics Vault',
    roomEmoji: '⚡',
    riddle: 'V = IR. If current is 2A and resistance is 5Ω, what voltage unlocks this door?',
    hint: 'Multiply them...',
    answer: '10V',
    options: ['7V', '10V', '2.5V', '3V'],
    subject: 'Physics',
    explanation: 'Using Ohm\'s Law: V = I × R = 2 × 5 = 10 volts.',
  },
  {
    id: 4,
    roomName: 'The Maths Maze',
    roomEmoji: '🔢',
    riddle: 'A triangle\'s sides are 3, 4, and 5. What is the area?',
    hint: 'It\'s a right-angled triangle...',
    answer: '6',
    options: ['12', '6', '10', '7.5'],
    subject: 'Maths',
    explanation: 'For a right triangle: Area = ½ × base × height = ½ × 3 × 4 = 6.',
  },
  {
    id: 5,
    roomName: 'The Periodic Prison',
    roomEmoji: '📊',
    riddle: 'I have 11 protons and react violently with water. What element am I?',
    hint: 'First of the alkali metals on row 3...',
    answer: 'Sodium',
    options: ['Potassium', 'Sodium', 'Lithium', 'Calcium'],
    subject: 'Chemistry',
    explanation: 'Sodium (Na) has atomic number 11 and is a highly reactive alkali metal.',
  },
  {
    id: 6,
    roomName: 'The DNA Dungeon',
    roomEmoji: '🔬',
    riddle: 'The sequence reads ATCG. What base pairs with A?',
    hint: 'A-T, C-G...',
    answer: 'Thymine',
    options: ['Guanine', 'Cytosine', 'Thymine', 'Adenine'],
    subject: 'Biology',
    explanation: 'In DNA, Adenine always pairs with Thymine (A-T), and Cytosine with Guanine (C-G).',
  },
  {
    id: 7,
    roomName: 'The Force Field',
    roomEmoji: '🚀',
    riddle: 'F = ma. A 10kg object accelerates at 3m/s². What force is needed to escape?',
    hint: 'Multiply mass by acceleration...',
    answer: '30N',
    options: ['13N', '30N', '3.3N', '7N'],
    subject: 'Physics',
    explanation: 'Using Newton\'s Second Law: F = m × a = 10 × 3 = 30 Newtons.',
  },
  {
    id: 8,
    roomName: 'The Final Chamber',
    roomEmoji: '🏆',
    riddle: 'A circle has radius 7. What is its area? (Use π = 22/7)',
    hint: 'Area = πr²...',
    answer: '154',
    options: ['44', '154', '49', '308'],
    subject: 'Maths',
    explanation: 'Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154.',
  },
];

export default function LabEscapePage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const { unlockFragment } = useLoreStore();

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'escaped' | 'failed'>('ready');
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setGameState('failed');
          addXP(Math.floor(score / 2));
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, score, addXP]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startGame = () => {
    setGameState('playing');
    setCurrentPuzzle(0);
    setSelectedAnswer(null);
    setShowHint(false);
    setShowExplanation(false);
    setIsCorrect(null);
    setHintsUsed(0);
    setMistakes(0);
    setScore(0);
    setTimeLeft(300);
  };

  const handleAnswer = (answer: string) => {
    if (isCorrect !== null) return;

    setSelectedAnswer(answer);
    const puzzle = PUZZLES[currentPuzzle];
    const correct = answer === puzzle.answer;
    setIsCorrect(correct);

    if (correct) {
      const basePoints = 50;
      const hintPenalty = showHint ? 15 : 0;
      const timeBonus = Math.floor(timeLeft / 10);
      setScore(s => s + basePoints - hintPenalty + timeBonus);
    } else {
      setMistakes(m => m + 1);
    }

    setTimeout(() => {
      setShowExplanation(true);
    }, 500);
  };

  const nextRoom = () => {
    if (currentPuzzle < PUZZLES.length - 1) {
      setCurrentPuzzle(p => p + 1);
      setSelectedAnswer(null);
      setShowHint(false);
      setShowExplanation(false);
      setIsCorrect(null);
    } else {
      // Escaped!
      setGameState('escaped');
      addXP(score + 100);

      // Unlock lore
      unlockFragment({
        id: 'lab-escape-lore',
        subject: 'physics',
        title: 'The Escape Artist\'s Creed',
        content: 'In the CramGames universe, knowledge is the ultimate key. Every scientist who changed history did so by escaping conventional thinking. Einstein escaped Newton\'s absolute time. Darwin escaped fixed species. Curie escaped safe assumptions. To master the Lab Escape is to join their ranks - breaking free through the power of understanding.',
        rarity: 'rare',
        unlocked: true,
      });
    }
  };

  const puzzle = PUZZLES[currentPuzzle];

  // Ready screen
  if (gameState === 'ready') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-sm"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center shadow-2xl shadow-amber-500/50"
          >
            <Lock size={64} className="text-white" />
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2 drop-shadow-lg">
            LAB ESCAPE
          </h1>
          <p className="text-white/80 mb-8 text-lg">
            Solve science puzzles to escape the lab!
          </p>

          <div className="bg-white/10 rounded-xl p-4 mb-6 text-left space-y-2">
            <div className="flex items-center gap-2 text-amber-400">
              <AlertCircle size={18} />
              <span className="font-bold text-sm">MISSION BRIEFING</span>
            </div>
            <p className="text-white/70 text-sm">
              You're trapped in a science lab! Solve 8 puzzles to unlock each room and escape.
            </p>
            <ul className="text-white/60 text-sm space-y-1 ml-4">
              <li>• 5 minute time limit</li>
              <li>• Use hints (costs points)</li>
              <li>• Wrong answers are explained</li>
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="w-full py-5 text-xl font-black text-white bg-gradient-to-r from-amber-500 to-red-600 rounded-2xl shadow-lg shadow-amber-500/50"
          >
            BEGIN ESCAPE
          </motion.button>

          <button
            onClick={() => router.push('/')}
            className="mt-6 text-white/60 hover:text-white transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  // Escaped screen
  if (gameState === 'escaped') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-green-900 to-emerald-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring' }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/50"
          >
            <DoorOpen size={48} className="text-white" />
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2">YOU ESCAPED!</h1>
          <p className="text-white/70 mb-6">All {PUZZLES.length} rooms completed!</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-black text-yellow-400">{score + 100}</div>
              <div className="text-xs text-white/60">XP</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-black text-green-400">{PUZZLES.length - mistakes}</div>
              <div className="text-xs text-white/60">PERFECT</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-black text-amber-400">{formatTime(timeLeft)}</div>
              <div className="text-xs text-white/60">LEFT</div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={startGame}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              ESCAPE AGAIN
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full py-4 font-bold text-white/80 bg-white/10 rounded-xl flex items-center justify-center gap-2"
            >
              <Home size={20} />
              HOME
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Failed screen
  if (gameState === 'failed') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-900 via-slate-900 to-red-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-2xl"
          >
            <Lock size={48} className="text-white" />
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2">TIME'S UP!</h1>
          <p className="text-white/70 mb-6">You reached room {currentPuzzle + 1} of {PUZZLES.length}</p>

          <div className="bg-white/10 rounded-xl p-4 mb-8">
            <div className="text-3xl font-black text-yellow-400">{Math.floor(score / 2)}</div>
            <div className="text-xs text-white/60">XP EARNED</div>
          </div>

          <div className="space-y-3">
            <button
              onClick={startGame}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              TRY AGAIN
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full py-4 font-bold text-white/80 bg-white/10 rounded-xl flex items-center justify-center gap-2"
            >
              <Home size={20} />
              HOME
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Playing screen
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-black/30">
        <button
          onClick={() => router.push('/')}
          className="p-2 text-white/60 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className={`px-4 py-2 rounded-xl ${timeLeft < 60 ? 'bg-red-500/30' : 'bg-white/10'}`}>
          <span className={`font-mono font-bold ${timeLeft < 60 ? 'text-red-400' : 'text-white'}`}>
            {formatTime(timeLeft)}
          </span>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-xl">
          <Zap size={20} className="text-yellow-400" />
          <span className="font-bold text-yellow-400">{score}</span>
        </div>
      </header>

      {/* Progress */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-2 mb-2">
          {PUZZLES.map((_, i) => (
            <motion.div
              key={i}
              className={`flex-1 h-2 rounded-full ${
                i < currentPuzzle
                  ? 'bg-green-500'
                  : i === currentPuzzle
                  ? 'bg-amber-500'
                  : 'bg-white/20'
              }`}
              animate={i === currentPuzzle ? { opacity: [1, 0.5, 1] } : {}}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          ))}
        </div>
        <p className="text-center text-white/50 text-xs">Room {currentPuzzle + 1} of {PUZZLES.length}</p>
      </div>

      {/* Room */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        <motion.div
          key={currentPuzzle}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          {/* Room header */}
          <div className="text-center mb-6">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-6xl mb-3"
            >
              {puzzle.roomEmoji}
            </motion.div>
            <h2 className="text-2xl font-black text-white">{puzzle.roomName}</h2>
            <span className="text-sm text-white/60">{puzzle.subject}</span>
          </div>

          {/* Riddle */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4 border border-amber-500/30">
            <div className="flex items-start gap-3">
              <Lock className="text-amber-400 shrink-0 mt-1" size={24} />
              <p className="text-white text-lg leading-relaxed">{puzzle.riddle}</p>
            </div>
          </div>

          {/* Hint */}
          {!showHint && isCorrect === null && (
            <button
              onClick={() => {
                setShowHint(true);
                setHintsUsed(h => h + 1);
              }}
              className="w-full mb-4 py-2 text-amber-400 text-sm flex items-center justify-center gap-2 hover:text-amber-300"
            >
              <Lightbulb size={16} />
              Show hint (-15 points)
            </button>
          )}

          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 p-3 bg-amber-500/20 rounded-xl border border-amber-500/30"
              >
                <p className="text-amber-300 text-sm flex items-center gap-2">
                  <Lightbulb size={16} />
                  {puzzle.hint}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Options */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {puzzle.options.map((option, i) => {
              let buttonClass = 'bg-white/10 border-white/20 hover:bg-white/15';
              if (isCorrect !== null) {
                if (option === puzzle.answer) {
                  buttonClass = 'bg-green-500/30 border-green-500';
                } else if (option === selectedAnswer && option !== puzzle.answer) {
                  buttonClass = 'bg-red-500/30 border-red-500';
                }
              }

              return (
                <motion.button
                  key={option}
                  whileHover={isCorrect === null ? { scale: 1.02 } : {}}
                  whileTap={isCorrect === null ? { scale: 0.98 } : {}}
                  onClick={() => handleAnswer(option)}
                  disabled={isCorrect !== null}
                  className={`p-4 rounded-xl border-2 text-white font-semibold transition-all ${buttonClass}`}
                >
                  {option}
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl mb-4 ${isCorrect ? 'bg-green-500/20 border border-green-500/30' : 'bg-blue-500/20 border border-blue-500/30'}`}
              >
                <p className={`text-sm ${isCorrect ? 'text-green-300' : 'text-blue-300'}`}>
                  {puzzle.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next button */}
          {showExplanation && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={nextRoom}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center gap-2"
            >
              {currentPuzzle < PUZZLES.length - 1 ? (
                <>
                  Next Room
                  <ArrowRight size={20} />
                </>
              ) : (
                <>
                  <Key size={20} />
                  ESCAPE!
                </>
              )}
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
