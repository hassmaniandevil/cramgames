'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import {
  X,
  Zap,
  Trophy,
  RotateCcw,
  Home,
  Link2,
  Check,
  XCircle,
} from 'lucide-react';

interface Connection {
  id: number;
  left: string;
  right: string;
  subject: string;
}

interface ConnectionItem {
  id: string;
  text: string;
  side: 'left' | 'right';
  connectionId: number;
  isMatched: boolean;
}

const CONNECTIONS: Connection[] = [
  // Biology
  { id: 1, left: 'Mitochondria', right: 'ATP production', subject: 'Biology' },
  { id: 2, left: 'Chloroplast', right: 'Photosynthesis', subject: 'Biology' },
  { id: 3, left: 'Nucleus', right: 'DNA storage', subject: 'Biology' },
  { id: 4, left: 'Ribosome', right: 'Protein synthesis', subject: 'Biology' },
  { id: 5, left: 'Cell membrane', right: 'Controls entry/exit', subject: 'Biology' },
  { id: 6, left: 'Enzyme', right: 'Biological catalyst', subject: 'Biology' },
  // Chemistry
  { id: 7, left: 'Sodium', right: 'Na', subject: 'Chemistry' },
  { id: 8, left: 'Potassium', right: 'K', subject: 'Chemistry' },
  { id: 9, left: 'Iron', right: 'Fe', subject: 'Chemistry' },
  { id: 10, left: 'Lead', right: 'Pb', subject: 'Chemistry' },
  { id: 11, left: 'Oxidation', right: 'Loses electrons', subject: 'Chemistry' },
  { id: 12, left: 'Reduction', right: 'Gains electrons', subject: 'Chemistry' },
  // Physics
  { id: 13, left: 'Voltage', right: 'V = IR', subject: 'Physics' },
  { id: 14, left: 'Power', right: 'P = IV', subject: 'Physics' },
  { id: 15, left: 'Momentum', right: 'p = mv', subject: 'Physics' },
  { id: 16, left: 'Force', right: 'F = ma', subject: 'Physics' },
  { id: 17, left: 'Kinetic energy', right: '½mv²', subject: 'Physics' },
  { id: 18, left: 'Wave speed', right: 'v = fλ', subject: 'Physics' },
  // Maths
  { id: 19, left: 'Area of circle', right: 'πr²', subject: 'Maths' },
  { id: 20, left: 'Circumference', right: '2πr', subject: 'Maths' },
  { id: 21, left: 'Pythagoras', right: 'a² + b² = c²', subject: 'Maths' },
  { id: 22, left: 'Quadratic', right: 'ax² + bx + c', subject: 'Maths' },
  { id: 23, left: 'Gradient', right: 'Rise ÷ Run', subject: 'Maths' },
  { id: 24, left: 'SOHCAHTOA', right: 'Trigonometry', subject: 'Maths' },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function PowerConnectPage() {
  const router = useRouter();
  const { addXP } = useProgressStore();

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [leftItems, setLeftItems] = useState<ConnectionItem[]>([]);
  const [rightItems, setRightItems] = useState<ConnectionItem[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ correct: boolean; leftId: string; rightId: string } | null>(null);
  const [matchedCount, setMatchedCount] = useState(0);
  const [totalRounds] = useState(5);

  const startRound = (roundNum: number) => {
    const roundConnections = shuffleArray(CONNECTIONS).slice(0, 4);

    const left: ConnectionItem[] = roundConnections.map((c, i) => ({
      id: `left-${c.id}`,
      text: c.left,
      side: 'left' as const,
      connectionId: c.id,
      isMatched: false,
    }));

    const right: ConnectionItem[] = roundConnections.map((c, i) => ({
      id: `right-${c.id}`,
      text: c.right,
      side: 'right' as const,
      connectionId: c.id,
      isMatched: false,
    }));

    setLeftItems(shuffleArray(left));
    setRightItems(shuffleArray(right));
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatchedCount(0);
    setRound(roundNum);
  };

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    startRound(1);
  };

  const handleSelect = (item: ConnectionItem) => {
    if (item.isMatched || feedback) return;

    if (item.side === 'left') {
      setSelectedLeft(item.id === selectedLeft ? null : item.id);
    } else {
      setSelectedRight(item.id === selectedRight ? null : item.id);
    }
  };

  // Check for match when both sides are selected
  useEffect(() => {
    if (!selectedLeft || !selectedRight) return;

    const leftItem = leftItems.find(i => i.id === selectedLeft);
    const rightItem = rightItems.find(i => i.id === selectedRight);

    if (!leftItem || !rightItem) return;

    const isMatch = leftItem.connectionId === rightItem.connectionId;

    setFeedback({ correct: isMatch, leftId: selectedLeft, rightId: selectedRight });

    setTimeout(() => {
      if (isMatch) {
        // Mark as matched
        setLeftItems(prev => prev.map(i =>
          i.id === selectedLeft ? { ...i, isMatched: true } : i
        ));
        setRightItems(prev => prev.map(i =>
          i.id === selectedRight ? { ...i, isMatched: true } : i
        ));

        setScore(s => s + 25 + streak * 5);
        setStreak(s => {
          const newStreak = s + 1;
          setMaxStreak(m => Math.max(m, newStreak));
          return newStreak;
        });
        setMatchedCount(c => c + 1);
      } else {
        setStreak(0);
      }

      setFeedback(null);
      setSelectedLeft(null);
      setSelectedRight(null);
    }, 600);
  }, [selectedLeft, selectedRight, leftItems, rightItems, streak]);

  // Check for round complete
  useEffect(() => {
    if (matchedCount === 4 && gameState === 'playing') {
      setTimeout(() => {
        if (round < totalRounds) {
          startRound(round + 1);
        } else {
          setGameState('finished');
          addXP(score);
        }
      }, 800);
    }
  }, [matchedCount, round, totalRounds, gameState, score, addXP]);

  const getItemStyle = (item: ConnectionItem, isSelected: boolean) => {
    if (item.isMatched) {
      return 'bg-green-500/30 border-green-500 opacity-50';
    }
    if (feedback) {
      const isInvolved = item.id === feedback.leftId || item.id === feedback.rightId;
      if (isInvolved) {
        return feedback.correct
          ? 'bg-green-500/30 border-green-500'
          : 'bg-red-500/30 border-red-500';
      }
    }
    if (isSelected) {
      return 'bg-cyan-500/30 border-cyan-400 shadow-lg shadow-cyan-500/30';
    }
    return 'bg-white/10 border-white/20 hover:bg-white/15';
  };

  // Ready screen
  if (gameState === 'ready') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-purple-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-sm"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50"
          >
            <Link2 size={64} className="text-white" />
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2 drop-shadow-lg">
            POWER CONNECT
          </h1>
          <p className="text-white/80 mb-8 text-lg">
            Connect matching concepts to power up!
          </p>

          <div className="bg-white/10 rounded-xl p-4 mb-6 text-left">
            <ul className="text-white/70 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400" />
                Tap one item on each side
              </li>
              <li className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                Correct matches turn green
              </li>
              <li className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-400" />
                Build streaks for bonus points!
              </li>
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="w-full py-5 text-xl font-black text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl shadow-lg shadow-cyan-500/50"
          >
            START GAME
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

  // Finished screen
  if (gameState === 'finished') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-purple-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md text-center border border-white/20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center shadow-xl"
          >
            <Trophy size={48} className="text-white" />
          </motion.div>

          <h1 className="text-3xl font-black text-white mb-2">
            CONNECTED!
          </h1>
          <p className="text-white/70 mb-6">
            All {totalRounds} rounds complete!
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-3xl font-black text-yellow-400">{score}</div>
              <div className="text-xs text-white/60">SCORE</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-3xl font-black text-orange-400">{maxStreak}</div>
              <div className="text-xs text-white/60">MAX STREAK</div>
            </div>
          </div>

          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startGame}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              PLAY AGAIN
            </motion.button>
            <button
              onClick={() => router.push('/')}
              className="w-full py-4 font-bold text-white/80 bg-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-900 to-purple-900 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-black/30">
        <button
          onClick={() => router.push('/')}
          className="p-2 text-white/60 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-white">Round {round}/{totalRounds}</div>
          </div>
          {streak > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            >
              <span className="font-bold text-white text-sm">🔥 {streak}</span>
            </motion.div>
          )}
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-xl">
          <Zap size={20} className="text-yellow-400" />
          <span className="font-bold text-yellow-400">{score}</span>
        </div>
      </header>

      {/* Instructions */}
      <div className="px-4 py-3 text-center">
        <p className="text-white/60 text-sm">Connect matching pairs</p>
      </div>

      {/* Game area */}
      <div className="flex-1 flex gap-4 px-4 pb-4">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-3">
          {leftItems.map((item) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={!item.isMatched && !feedback ? { scale: 1.02 } : {}}
              whileTap={!item.isMatched && !feedback ? { scale: 0.98 } : {}}
              onClick={() => handleSelect(item)}
              disabled={item.isMatched || !!feedback}
              className={`flex-1 p-4 rounded-xl border-2 font-semibold text-white transition-all ${getItemStyle(item, selectedLeft === item.id)}`}
            >
              <div className="flex items-center justify-between">
                <span>{item.text}</span>
                {item.isMatched && <Check size={20} className="text-green-400" />}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Center connector */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-8 h-full flex flex-col items-center justify-center gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${i < matchedCount ? 'bg-green-400' : 'bg-white/20'}`}
                animate={i < matchedCount ? { scale: [1, 1.5, 1] } : {}}
              />
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 flex flex-col gap-3">
          {rightItems.map((item) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={!item.isMatched && !feedback ? { scale: 1.02 } : {}}
              whileTap={!item.isMatched && !feedback ? { scale: 0.98 } : {}}
              onClick={() => handleSelect(item)}
              disabled={item.isMatched || !!feedback}
              className={`flex-1 p-4 rounded-xl border-2 font-semibold text-white transition-all ${getItemStyle(item, selectedRight === item.id)}`}
            >
              <div className="flex items-center justify-between">
                <span>{item.text}</span>
                {item.isMatched && <Check size={20} className="text-green-400" />}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="px-4 py-3">
        <div className="flex justify-center gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className={`w-12 h-2 rounded-full ${i < matchedCount ? 'bg-green-400' : 'bg-white/20'}`}
              animate={i < matchedCount ? { scale: [1, 1.2, 1] } : {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
