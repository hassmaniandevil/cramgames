'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import {
  X,
  Zap,
  Trophy,
  RotateCcw,
  Home,
  Target,
  Timer,
} from 'lucide-react';

interface Target {
  id: number;
  answer: string;
  isCorrect: boolean;
  x: number;
  y: number;
  size: number;
}

interface Question {
  question: string;
  correctAnswer: string;
  wrongAnswers: string[];
}

const questions: Question[] = [
  // Quick fire facts
  { question: 'What gas do plants absorb?', correctAnswer: 'CO₂', wrongAnswers: ['O₂', 'N₂', 'H₂'] },
  { question: 'Powerhouse of the cell?', correctAnswer: 'Mitochondria', wrongAnswers: ['Nucleus', 'Ribosome', 'Chloroplast'] },
  { question: 'Symbol for Sodium?', correctAnswer: 'Na', wrongAnswers: ['So', 'Sd', 'S'] },
  { question: 'Speed = Distance ÷ ?', correctAnswer: 'Time', wrongAnswers: ['Mass', 'Force', 'Energy'] },
  { question: '7 × 8 = ?', correctAnswer: '56', wrongAnswers: ['54', '48', '64'] },
  { question: 'What carries oxygen in blood?', correctAnswer: 'Haemoglobin', wrongAnswers: ['Plasma', 'Platelets', 'White cells'] },
  { question: 'Formula for water?', correctAnswer: 'H₂O', wrongAnswers: ['HO₂', 'H₂O₂', 'OH'] },
  { question: 'Unit of force?', correctAnswer: 'Newton', wrongAnswers: ['Joule', 'Watt', 'Pascal'] },
  { question: '√144 = ?', correctAnswer: '12', wrongAnswers: ['14', '11', '13'] },
  { question: 'Largest organ?', correctAnswer: 'Skin', wrongAnswers: ['Liver', 'Brain', 'Heart'] },
  { question: 'What does DNA stand for?', correctAnswer: 'Deoxyribonucleic acid', wrongAnswers: ['Dynamic nucleic acid', 'Dual nitrogen acid', 'Direct nucleus acid'] },
  { question: 'Symbol for Gold?', correctAnswer: 'Au', wrongAnswers: ['Go', 'Gd', 'Ag'] },
  { question: '9² = ?', correctAnswer: '81', wrongAnswers: ['72', '91', '63'] },
  { question: 'What type of energy is stored in food?', correctAnswer: 'Chemical', wrongAnswers: ['Thermal', 'Kinetic', 'Nuclear'] },
  { question: 'How many chromosomes in human cells?', correctAnswer: '46', wrongAnswers: ['23', '48', '42'] },
  { question: 'pH of pure water?', correctAnswer: '7', wrongAnswers: ['0', '14', '1'] },
  { question: 'F = m × ?', correctAnswer: 'a', wrongAnswers: ['v', 'g', 's'] },
  { question: '15% of 200?', correctAnswer: '30', wrongAnswers: ['25', '35', '20'] },
];

export default function ReactionRacePage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const gameAreaRef = useRef<HTMLDivElement>(null);

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [targets, setTargets] = useState<Target[]>([]);
  const [round, setRound] = useState(0);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [showFeedback, setShowFeedback] = useState<{ correct: boolean; x: number; y: number } | null>(null);
  const [spawnInterval, setSpawnInterval] = useState(2000);

  const generateTargets = useCallback((question: Question) => {
    if (!gameAreaRef.current) return;

    const area = gameAreaRef.current.getBoundingClientRect();
    const newTargets: Target[] = [];
    const allAnswers = [question.correctAnswer, ...question.wrongAnswers.slice(0, 3)];

    // Shuffle answers
    const shuffled = allAnswers.sort(() => Math.random() - 0.5);

    shuffled.forEach((answer, i) => {
      const size = 80 + Math.random() * 40;
      const x = Math.random() * (area.width - size - 20) + 10;
      const y = Math.random() * (area.height - size - 100) + 50;

      newTargets.push({
        id: Date.now() + i,
        answer,
        isCorrect: answer === question.correctAnswer,
        x,
        y,
        size,
      });
    });

    setTargets(newTargets);
  }, []);

  const nextRound = useCallback(() => {
    const questionIndex = round % questions.length;
    const question = questions[questionIndex];
    setCurrentQuestion(question);
    setRound(r => r + 1);

    // Speed up as game progresses
    setSpawnInterval(Math.max(1000, 2000 - round * 100));

    setTimeout(() => {
      generateTargets(question);
    }, 500);
  }, [round, generateTargets]);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setLives(3);
    setRound(0);
    setHits(0);
    setMisses(0);
    setTargets([]);
    setSpawnInterval(2000);
    setTimeout(() => nextRound(), 100);
  };

  const handleTargetClick = (target: Target, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const feedbackX = rect.left + rect.width / 2;
    const feedbackY = rect.top;

    if (target.isCorrect) {
      setScore(s => s + 25 + Math.floor(10 * Math.random()));
      setHits(h => h + 1);
      setShowFeedback({ correct: true, x: feedbackX, y: feedbackY });
      setTargets([]);

      setTimeout(() => {
        setShowFeedback(null);
        nextRound();
      }, 500);
    } else {
      setLives(l => l - 1);
      setMisses(m => m + 1);
      setShowFeedback({ correct: false, x: feedbackX, y: feedbackY });

      // Remove the wrong target
      setTargets(prev => prev.filter(t => t.id !== target.id));

      setTimeout(() => {
        setShowFeedback(null);
      }, 300);
    }
  };

  // Check for game over
  useEffect(() => {
    if (lives <= 0 && gameState === 'playing') {
      setGameState('finished');
      addXP(score);
    }
  }, [lives, gameState, score, addXP]);

  // Auto-advance if time runs out (targets disappear)
  useEffect(() => {
    if (gameState !== 'playing' || targets.length === 0) return;

    const timeout = setTimeout(() => {
      setLives(l => l - 1);
      setMisses(m => m + 1);
      setTargets([]);

      if (lives > 1) {
        setTimeout(() => nextRound(), 500);
      }
    }, spawnInterval + 1500);

    return () => clearTimeout(timeout);
  }, [targets, gameState, spawnInterval, lives, nextRound]);

  // Ready screen
  if (gameState === 'ready') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-sm"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl shadow-orange-500/50"
          >
            <Target size={64} className="text-white" />
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2 drop-shadow-lg">
            REACTION RACE
          </h1>
          <p className="text-white/80 mb-8 text-lg">
            Tap the correct answer before time runs out!
          </p>

          <div className="flex justify-center gap-4 mb-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-4xl"
              >
                ❤️
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="w-full py-5 text-xl font-black text-white bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/60 transition-shadow"
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
    const accuracy = hits + misses > 0 ? Math.round((hits / (hits + misses)) * 100) : 0;

    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md text-center border border-white/20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-xl"
          >
            <Trophy size={48} className="text-white" />
          </motion.div>

          <h1 className="text-3xl font-black text-white mb-2">
            GAME OVER!
          </h1>
          <p className="text-white/70 mb-6">
            Round {round} reached!
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-3xl font-black text-yellow-400">{score}</div>
              <div className="text-xs text-white/60">SCORE</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-3xl font-black text-green-400">{hits}</div>
              <div className="text-xs text-white/60">HITS</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-3xl font-black text-blue-400">{accuracy}%</div>
              <div className="text-xs text-white/60">ACCURACY</div>
            </div>
          </div>

          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startGame}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center gap-2"
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
    <div className="h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-black/30">
        <button
          onClick={() => router.push('/')}
          className="p-2 text-white/60 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 1 }}
              animate={{ scale: i < lives ? 1 : 0.5, opacity: i < lives ? 1 : 0.3 }}
              className="text-2xl"
            >
              ❤️
            </motion.span>
          ))}
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-xl">
          <Zap size={20} className="text-yellow-400" />
          <span className="font-bold text-yellow-400">{score}</span>
        </div>
      </header>

      {/* Question */}
      <div className="px-4 py-3 text-center">
        <motion.div
          key={currentQuestion?.question}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur rounded-2xl px-6 py-4"
        >
          <p className="text-white text-lg font-bold">
            {currentQuestion?.question}
          </p>
        </motion.div>
      </div>

      {/* Game area */}
      <div
        ref={gameAreaRef}
        className="flex-1 relative overflow-hidden"
      >
        <AnimatePresence>
          {targets.map((target) => (
            <motion.button
              key={target.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => handleTargetClick(target, e)}
              className="absolute rounded-full bg-gradient-to-br from-white to-gray-200 shadow-xl flex items-center justify-center text-center font-bold text-gray-800 cursor-pointer hover:from-yellow-100 hover:to-yellow-200 transition-colors"
              style={{
                left: target.x,
                top: target.y,
                width: target.size,
                height: target.size,
                fontSize: target.size > 100 ? '14px' : '12px',
                padding: '8px',
              }}
            >
              {target.answer}
            </motion.button>
          ))}
        </AnimatePresence>

        {/* Feedback */}
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 1, y: 0, scale: 1 }}
              animate={{ opacity: 0, y: -50, scale: 1.5 }}
              exit={{ opacity: 0 }}
              className={`fixed text-4xl font-black pointer-events-none ${
                showFeedback.correct ? 'text-green-400' : 'text-red-400'
              }`}
              style={{ left: showFeedback.x - 30, top: showFeedback.y - 30 }}
            >
              {showFeedback.correct ? '+25' : '-1'}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Round indicator */}
      <div className="px-4 py-2 text-center">
        <span className="text-white/50 text-sm">Round {round}</span>
      </div>
    </div>
  );
}
