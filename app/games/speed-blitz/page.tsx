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
  Rocket,
  AlertTriangle,
  Heart,
} from 'lucide-react';

interface FallingAnswer {
  id: number;
  text: string;
  isCorrect: boolean;
  x: number;
  y: number;
  speed: number;
}

interface Question {
  question: string;
  correctAnswer: string;
  wrongAnswers: string[];
}

const QUESTIONS: Question[] = [
  { question: 'Chemical symbol for Gold?', correctAnswer: 'Au', wrongAnswers: ['Ag', 'Go', 'Gd'] },
  { question: 'Powerhouse of the cell?', correctAnswer: 'Mitochondria', wrongAnswers: ['Nucleus', 'Ribosome', 'Chloroplast'] },
  { question: '8 × 7 = ?', correctAnswer: '56', wrongAnswers: ['54', '48', '63'] },
  { question: 'Unit of electrical resistance?', correctAnswer: 'Ohm', wrongAnswers: ['Volt', 'Amp', 'Watt'] },
  { question: 'What gas do we breathe out?', correctAnswer: 'CO₂', wrongAnswers: ['O₂', 'N₂', 'H₂'] },
  { question: 'Solve: 5x = 35', correctAnswer: 'x = 7', wrongAnswers: ['x = 5', 'x = 8', 'x = 6'] },
  { question: 'Atomic number of Oxygen?', correctAnswer: '8', wrongAnswers: ['6', '16', '12'] },
  { question: 'What process releases energy from glucose?', correctAnswer: 'Respiration', wrongAnswers: ['Photosynthesis', 'Digestion', 'Osmosis'] },
  { question: 'Speed = Distance ÷ ?', correctAnswer: 'Time', wrongAnswers: ['Mass', 'Force', 'Velocity'] },
  { question: 'What type of bond shares electrons?', correctAnswer: 'Covalent', wrongAnswers: ['Ionic', 'Metallic', 'Hydrogen'] },
  { question: '√225 = ?', correctAnswer: '15', wrongAnswers: ['14', '16', '13'] },
  { question: 'Where is DNA found?', correctAnswer: 'Nucleus', wrongAnswers: ['Cytoplasm', 'Ribosome', 'Cell membrane'] },
  { question: 'F = m × ?', correctAnswer: 'a', wrongAnswers: ['v', 'g', 's'] },
  { question: 'What is H₂SO₄?', correctAnswer: 'Sulphuric acid', wrongAnswers: ['Hydrochloric acid', 'Nitric acid', 'Carbonic acid'] },
  { question: 'Angles in a triangle sum to?', correctAnswer: '180°', wrongAnswers: ['360°', '90°', '270°'] },
];

export default function SpeedBlitzPage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [fallingAnswers, setFallingAnswers] = useState<FallingAnswer[]>([]);
  const [combo, setCombo] = useState(0);
  const [showFeedback, setShowFeedback] = useState<{ correct: boolean; x: number; y: number } | null>(null);
  const [gameSpeed, setGameSpeed] = useState(1);

  const spawnAnswers = useCallback(() => {
    if (!currentQuestion || !gameAreaRef.current) return;

    const area = gameAreaRef.current.getBoundingClientRect();
    const answers = [currentQuestion.correctAnswer, ...currentQuestion.wrongAnswers.slice(0, 2)];
    const shuffled = answers.sort(() => Math.random() - 0.5);

    const newAnswers: FallingAnswer[] = shuffled.map((text, i) => ({
      id: Date.now() + i,
      text,
      isCorrect: text === currentQuestion.correctAnswer,
      x: (area.width / 4) + (i * area.width / 4) - 50 + (Math.random() * 30 - 15),
      y: -60 - (i * 80),
      speed: 1.5 + Math.random() * 0.5,
    }));

    setFallingAnswers(newAnswers);
  }, [currentQuestion]);

  const nextQuestion = useCallback(() => {
    const nextIdx = questionIndex % QUESTIONS.length;
    setCurrentQuestion(QUESTIONS[nextIdx]);
    setQuestionIndex(i => i + 1);
    setTimeout(() => spawnAnswers(), 100);
  }, [questionIndex, spawnAnswers]);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setLives(3);
    setQuestionIndex(0);
    setCombo(0);
    setGameSpeed(1);
    setFallingAnswers([]);
    setTimeout(() => {
      const question = QUESTIONS[0];
      setCurrentQuestion(question);
      setQuestionIndex(1);
    }, 500);
  };

  // Spawn answers when question changes
  useEffect(() => {
    if (currentQuestion && gameState === 'playing') {
      spawnAnswers();
    }
  }, [currentQuestion, gameState, spawnAnswers]);

  // Game loop - animate falling answers
  useEffect(() => {
    if (gameState !== 'playing') return;

    const animate = () => {
      setFallingAnswers(prev => {
        const gameArea = gameAreaRef.current;
        if (!gameArea) return prev;

        const areaHeight = gameArea.getBoundingClientRect().height;
        let missedCorrect = false;

        const updated = prev.map(answer => ({
          ...answer,
          y: answer.y + answer.speed * gameSpeed * 2,
        })).filter(answer => {
          if (answer.y > areaHeight) {
            if (answer.isCorrect) {
              missedCorrect = true;
            }
            return false;
          }
          return true;
        });

        if (missedCorrect) {
          setLives(l => l - 1);
          setCombo(0);
          setFallingAnswers([]);
          setTimeout(() => nextQuestion(), 500);
        }

        return updated;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gameState, gameSpeed, nextQuestion]);

  // Check for game over
  useEffect(() => {
    if (lives <= 0 && gameState === 'playing') {
      setGameState('finished');
      addXP(score);
    }
  }, [lives, gameState, score, addXP]);

  const handleAnswerClick = (answer: FallingAnswer, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const feedbackX = rect.left + rect.width / 2;
    const feedbackY = rect.top;

    if (answer.isCorrect) {
      const points = 25 + combo * 10;
      setScore(s => s + points);
      setCombo(c => c + 1);
      setShowFeedback({ correct: true, x: feedbackX, y: feedbackY });
      setFallingAnswers([]);

      // Speed up every 5 questions
      if (questionIndex % 5 === 0) {
        setGameSpeed(s => Math.min(s + 0.2, 3));
      }

      setTimeout(() => {
        setShowFeedback(null);
        nextQuestion();
      }, 400);
    } else {
      setLives(l => l - 1);
      setCombo(0);
      setShowFeedback({ correct: false, x: feedbackX, y: feedbackY });

      // Remove wrong answer
      setFallingAnswers(prev => prev.filter(a => a.id !== answer.id));

      setTimeout(() => setShowFeedback(null), 300);
    }
  };

  // Ready screen
  if (gameState === 'ready') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-violet-900 to-purple-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-sm"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50"
          >
            <Rocket size={64} className="text-white" />
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2 drop-shadow-lg">
            SPEED BLITZ
          </h1>
          <p className="text-white/80 mb-8 text-lg">
            Tap falling answers before they escape!
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

          <div className="bg-white/10 rounded-xl p-4 mb-6 text-left">
            <div className="flex items-center gap-2 text-yellow-400 mb-2">
              <AlertTriangle size={20} />
              <span className="font-bold">HOW TO PLAY</span>
            </div>
            <ul className="text-white/70 text-sm space-y-1">
              <li>• Answers fall from above</li>
              <li>• Tap the correct answer</li>
              <li>• Speed increases over time</li>
              <li>• Build combos for bonus points!</li>
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="w-full py-5 text-xl font-black text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg shadow-cyan-500/50"
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
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-violet-900 to-purple-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md text-center border border-white/20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-xl"
          >
            <Trophy size={48} className="text-white" />
          </motion.div>

          <h1 className="text-3xl font-black text-white mb-2">
            GAME OVER!
          </h1>
          <p className="text-white/70 mb-6">
            You answered {questionIndex} questions!
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-3xl font-black text-yellow-400">{score}</div>
              <div className="text-xs text-white/60">SCORE</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-3xl font-black text-orange-400">{combo}</div>
              <div className="text-xs text-white/60">MAX COMBO</div>
            </div>
          </div>

          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startGame}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center gap-2"
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
    <div className="h-screen bg-gradient-to-b from-indigo-900 via-violet-900 to-purple-900 flex flex-col overflow-hidden">
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

        {/* Combo indicator */}
        {combo > 1 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mt-2 inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
          >
            <span className="font-bold text-white text-sm">🔥 {combo}x COMBO</span>
          </motion.div>
        )}
      </div>

      {/* Game area */}
      <div
        ref={gameAreaRef}
        className="flex-1 relative overflow-hidden"
      >
        <AnimatePresence>
          {fallingAnswers.map((answer) => (
            <motion.button
              key={answer.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => handleAnswerClick(answer, e)}
              className="absolute px-6 py-3 rounded-2xl bg-gradient-to-br from-white to-gray-200 shadow-xl font-bold text-gray-800 cursor-pointer hover:from-yellow-100 hover:to-yellow-200 transition-colors min-w-[100px] text-center"
              style={{
                left: answer.x,
                top: answer.y,
              }}
            >
              {answer.text}
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
              {showFeedback.correct ? `+${25 + (combo - 1) * 10}` : '-1'}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Speed indicator */}
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 rounded-full">
          <span className="text-white/70 text-sm">Speed: {gameSpeed.toFixed(1)}x</span>
        </div>
      </div>

      {/* Progress */}
      <div className="px-4 py-2 text-center">
        <span className="text-white/50 text-sm">Question {questionIndex}</span>
      </div>
    </div>
  );
}
