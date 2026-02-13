'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useUserStore, YearGroup } from '@/lib/stores/userStore';
import {
  X,
  Zap,
  Trophy,
  RotateCcw,
  Home,
  Users,
  Crown,
  Medal,
  Target,
  TrendingUp,
  School,
  Copy,
  Check,
  Share2,
} from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  subject: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

const QUESTIONS: Question[] = [
  { question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi body'], correctIndex: 1, subject: 'Biology', difficulty: 'easy', points: 100 },
  { question: 'What is the chemical formula for water?', options: ['H2O', 'CO2', 'NaCl', 'O2'], correctIndex: 0, subject: 'Chemistry', difficulty: 'easy', points: 100 },
  { question: 'What is 15% of 80?', options: ['8', '10', '12', '15'], correctIndex: 2, subject: 'Maths', difficulty: 'easy', points: 100 },
  { question: 'What is the unit of force?', options: ['Joule', 'Watt', 'Newton', 'Pascal'], correctIndex: 2, subject: 'Physics', difficulty: 'easy', points: 100 },
  { question: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], correctIndex: 1, subject: 'Physics', difficulty: 'easy', points: 100 },
  { question: 'What happens during oxidation?', options: ['Gain electrons', 'Lose electrons', 'Gain protons', 'Lose neutrons'], correctIndex: 1, subject: 'Chemistry', difficulty: 'medium', points: 150 },
  { question: 'Solve: 2x² = 32', options: ['x = ±2', 'x = ±4', 'x = ±8', 'x = ±16'], correctIndex: 1, subject: 'Maths', difficulty: 'medium', points: 150 },
  { question: 'What enzyme breaks down starch?', options: ['Protease', 'Lipase', 'Amylase', 'Pepsin'], correctIndex: 2, subject: 'Biology', difficulty: 'medium', points: 150 },
  { question: 'What is the equation for kinetic energy?', options: ['½mv', '½mv²', 'mv²', 'mgh'], correctIndex: 1, subject: 'Physics', difficulty: 'medium', points: 150 },
  { question: 'What is the pH of a strong acid?', options: ['0-2', '5-6', '7', '12-14'], correctIndex: 0, subject: 'Chemistry', difficulty: 'hard', points: 200 },
];

interface ClassScore {
  name: string;
  score: number;
  members: number;
  color: string;
}

const MOCK_LEADERBOARD: ClassScore[] = [
  { name: '10A', score: 12450, members: 28, color: 'from-yellow-500 to-amber-500' },
  { name: '10B', score: 11200, members: 26, color: 'from-gray-400 to-gray-500' },
  { name: '10C', score: 10800, members: 25, color: 'from-amber-600 to-amber-700' },
  { name: '10D', score: 9500, members: 27, color: 'from-slate-500 to-slate-600' },
  { name: '11A', score: 8900, members: 24, color: 'from-slate-500 to-slate-600' },
];

// Helper function to determine difficulty level based on year group
function getDifficultyLevel(yearGroup: YearGroup | undefined): { label: string; level: 'KS3' | 'GCSE' | 'A-Level' } {
  if (!yearGroup) {
    return { label: 'GCSE Level', level: 'GCSE' };
  }
  if (yearGroup <= 6) {
    // Primary years 1-6 default to KS3 difficulty (easiest available)
    return { label: 'KS3 Level', level: 'KS3' };
  }
  if (yearGroup <= 9) {
    // Years 7-9 are KS3
    return { label: 'KS3 Level', level: 'KS3' };
  }
  if (yearGroup <= 11) {
    // Years 10-11 are GCSE
    return { label: 'GCSE Level', level: 'GCSE' };
  }
  // Years 12-13 are A-Level
  return { label: 'A-Level', level: 'A-Level' };
}

export default function ClassClashPage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const { profile } = useUserStore();

  // Get year group from user profile and determine difficulty
  const yearGroup = profile?.yearGroup;
  const difficultyInfo = getDifficultyLevel(yearGroup);

  const [gameState, setGameState] = useState<'menu' | 'select-class' | 'playing' | 'results' | 'leaderboard'>('menu');
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [classCode, setClassCode] = useState('');
  const [copied, setCopied] = useState(false);

  const startGame = () => {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    setCorrectAnswers(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameState('playing');
  };

  const handleAnswer = (index: number) => {
    if (showResult) return;

    setSelectedAnswer(index);
    setShowResult(true);

    const question = questions[currentQuestion];
    if (index === question.correctIndex) {
      const streakBonus = Math.min(streak * 10, 50);
      setScore(s => s + question.points + streakBonus);
      setStreak(s => s + 1);
      setCorrectAnswers(c => c + 1);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(q => q + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameState('results');
        addXP(score);
      }
    }, 1500);
  };

  const generateClassCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'CLASS-';
    for (let i = 0; i < 4; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  };

  const selectClass = (className: string) => {
    setSelectedClass(className);
    setClassCode(generateClassCode());
    startGame();
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(classCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Menu screen
  if (gameState === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md w-full"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-28 h-28 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-500/50"
          >
            <School size={56} className="text-white" />
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2">CLASS CLASH</h1>
          <p className="text-white/60 mb-2">Compete for your class!</p>

          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
            <span className={`text-sm font-semibold ${
              difficultyInfo.level === 'KS3' ? 'text-green-400' :
              difficultyInfo.level === 'GCSE' ? 'text-yellow-400' :
              'text-red-400'
            }`}>
              {difficultyInfo.label}
            </span>
            {yearGroup && (
              <span className="text-white/40 text-sm">| Year {yearGroup}</span>
            )}
          </div>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setGameState('select-class')}
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl font-bold text-white shadow-lg flex items-center justify-center gap-3"
            >
              <Target size={24} />
              START CHALLENGE
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setGameState('leaderboard')}
              className="w-full py-4 px-6 bg-white/10 rounded-2xl font-bold text-white flex items-center justify-center gap-3"
            >
              <TrendingUp size={24} />
              VIEW LEADERBOARD
            </motion.button>
          </div>

          <button
            onClick={() => router.push('/')}
            className="mt-8 text-white/60 hover:text-white"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  // Select class screen
  if (gameState === 'select-class') {
    const classes = ['10A', '10B', '10C', '10D', '11A', '11B', '11C', '11D', '9A', '9B', '9C'];

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 p-6">
        <button
          onClick={() => setGameState('menu')}
          className="absolute top-4 left-4 p-2 text-white/60 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="max-w-md mx-auto pt-12">
          <h2 className="text-2xl font-bold text-white text-center mb-2">Select Your Class</h2>
          <p className="text-white/60 text-center mb-8">Your score will contribute to your class total</p>

          <div className="grid grid-cols-3 gap-3">
            {classes.map((cls) => (
              <motion.button
                key={cls}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => selectClass(cls)}
                className="p-4 bg-white/10 rounded-xl font-bold text-white hover:bg-white/20 transition-colors"
              >
                {cls}
              </motion.button>
            ))}
          </div>

          <div className="mt-8 p-4 bg-white/10 rounded-xl">
            <p className="text-white/60 text-sm text-center">
              Don't see your class? Ask your teacher to create one!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Leaderboard screen
  if (gameState === 'leaderboard') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 p-6">
        <button
          onClick={() => setGameState('menu')}
          className="absolute top-4 left-4 p-2 text-white/60 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="max-w-md mx-auto pt-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Trophy className="text-yellow-400" size={28} />
            <h2 className="text-2xl font-bold text-white">Class Leaderboard</h2>
          </div>

          <div className="space-y-3">
            {MOCK_LEADERBOARD.map((cls, i) => (
              <motion.div
                key={cls.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-4 rounded-xl bg-white/10 flex items-center gap-4 ${i === 0 ? 'ring-2 ring-yellow-500' : ''}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cls.color} flex items-center justify-center font-black text-white`}>
                  {i === 0 ? <Crown size={24} /> : i === 1 ? <Medal size={24} /> : i === 2 ? <Medal size={24} /> : i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white">Class {cls.name}</h3>
                  <p className="text-white/60 text-sm">{cls.members} students</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-yellow-400">{cls.score.toLocaleString()}</p>
                  <p className="text-white/60 text-xs">points</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setGameState('select-class')}
            className="w-full mt-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl font-bold text-white"
          >
            JOIN THE BATTLE
          </motion.button>
        </div>
      </div>
    );
  }

  // Results screen
  if (gameState === 'results') {
    const accuracy = Math.round((correctAnswers / questions.length) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md w-full"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring' }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl"
          >
            <Trophy size={48} className="text-white" />
          </motion.div>

          <h1 className="text-3xl font-black text-white mb-2">CHALLENGE COMPLETE!</h1>
          <p className="text-white/60 mb-2">Class {selectedClass}</p>

          <div className="bg-white/10 rounded-xl p-3 mb-6 inline-block">
            <p className="text-white/60 text-xs">YOUR CLASS CODE</p>
            <div className="flex items-center gap-2">
              <p className="font-mono font-bold text-white">{classCode}</p>
              <button onClick={copyCode} className="text-white/60 hover:text-white">
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-black text-yellow-400">{score}</p>
              <p className="text-xs text-white/60">POINTS</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-black text-green-400">{correctAnswers}/{questions.length}</p>
              <p className="text-xs text-white/60">CORRECT</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-black text-blue-400">{accuracy}%</p>
              <p className="text-xs text-white/60">ACCURACY</p>
            </div>
          </div>

          <p className="text-white/80 mb-6 bg-green-500/20 rounded-xl p-3">
            +{score} points added to Class {selectedClass}!
          </p>

          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startGame}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              PLAY AGAIN
            </motion.button>
            <button
              onClick={() => setGameState('leaderboard')}
              className="w-full py-4 font-bold text-white/80 bg-white/10 rounded-xl flex items-center justify-center gap-2"
            >
              <TrendingUp size={20} />
              VIEW LEADERBOARD
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full py-4 font-bold text-white/60 bg-white/5 rounded-xl flex items-center justify-center gap-2"
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
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-black/30">
        <button onClick={() => router.push('/')} className="p-2 text-white/60">
          <X size={24} />
        </button>

        <div className="text-center">
          <p className="text-xs text-white/60">Class {selectedClass}</p>
          <p className="font-bold text-white">Q{currentQuestion + 1}/{questions.length}</p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 bg-yellow-500/20 rounded-xl">
          <Zap size={16} className="text-yellow-400" />
          <span className="font-bold text-yellow-400">{score}</span>
        </div>
      </header>

      {/* Streak indicator */}
      {streak > 1 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-center"
        >
          <span className="font-bold text-white">🔥 {streak} STREAK! +{Math.min(streak * 10, 50)} bonus</span>
        </motion.div>
      )}

      {/* Question */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">{question?.subject}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                question?.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                question?.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'
              }`}>{question?.points} pts</span>
            </div>
            <p className="text-xl font-bold text-white">{question?.question}</p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {question?.options.map((option, i) => {
              let buttonClass = 'bg-white/10 border-white/20 hover:bg-white/15';
              if (showResult) {
                if (i === question.correctIndex) {
                  buttonClass = 'bg-green-500/30 border-green-500';
                } else if (i === selectedAnswer && i !== question.correctIndex) {
                  buttonClass = 'bg-red-500/30 border-red-500';
                }
              }

              return (
                <motion.button
                  key={i}
                  whileHover={!showResult ? { scale: 1.02 } : {}}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
                  onClick={() => handleAnswer(i)}
                  disabled={showResult}
                  className={`p-4 rounded-xl border-2 text-white font-semibold text-left transition-all ${buttonClass}`}
                >
                  {option}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Progress */}
      <div className="px-4 py-3">
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-2 rounded-full ${
                i < currentQuestion ? 'bg-blue-500' :
                i === currentQuestion ? 'bg-blue-400' :
                'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
