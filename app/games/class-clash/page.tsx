'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  X,
  Trophy,
  Users,
  Crown,
  Medal,
  Target,
  TrendingUp,
  School,
  Copy,
  Check,
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
import { useUserStore, YearGroup } from '@/lib/stores/userStore';
import { cn } from '@/lib/utils/cn';

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
    return { label: 'KS3 Level', level: 'KS3' };
  }
  if (yearGroup <= 9) {
    return { label: 'KS3 Level', level: 'KS3' };
  }
  if (yearGroup <= 11) {
    return { label: 'GCSE Level', level: 'GCSE' };
  }
  return { label: 'A-Level', level: 'A-Level' };
}

const CLASSES = ['10A', '10B', '10C', '10D', '11A', '11B', '11C', '11D', '9A', '9B', '9C'];
const GAME_TIME = 90; // 90 seconds for the game

export default function ClassClashPage() {
  const router = useRouter();
  const { profile } = useUserStore();
  const yearGroup = profile?.yearGroup;
  const difficultyInfo = getDifficultyLevel(yearGroup);

  // View state for pre/post game screens
  const [view, setView] = useState<'menu' | 'select-class' | 'game' | 'leaderboard'>('menu');
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [classCode, setClassCode] = useState('');
  const [copied, setCopied] = useState(false);

  // Game framework hooks
  const { gameState, isPlaying, startGame: startGameState, finishGame, resetGame } = useGameState();
  const timer = useGameTimer({
    initialTime: GAME_TIME,
    countDown: true,
    onTimeUp: finishGame,
  });
  const scoring = useGameScore({ basePointsPerQuestion: 100 });
  const { playCorrect, playWrong } = useGameAudio();
  const { shake, shakeStyle } = useScreenShake();
  const { trigger: particleTrigger, config: particleConfig, emitCorrect, emitWrong } = useParticles();

  // Game-specific state
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  // Generate class code
  const generateClassCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'CLASS-';
    for (let i = 0; i < 4; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  };

  // Copy class code
  const copyCode = async () => {
    await navigator.clipboard.writeText(classCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Select class and start game
  const selectClass = (className: string) => {
    setSelectedClass(className);
    setClassCode(generateClassCode());
    setView('game');
  };

  // Handle game start (called by GameFrame)
  const handleStart = useCallback(() => {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    scoring.reset();
    timer.reset(GAME_TIME);
    startGameState();
    timer.start();
  }, [scoring, timer, startGameState]);

  // Handle restart
  const handleRestart = useCallback(() => {
    resetGame();
    setTimeout(handleStart, 100);
  }, [resetGame, handleStart]);

  // Handle answer selection
  const handleAnswer = useCallback((index: number) => {
    if (showFeedback || !currentQuestion) return;

    setSelectedAnswer(index);
    setShowFeedback(true);

    const isCorrect = index === currentQuestion.correctIndex;

    if (isCorrect) {
      scoring.recordCorrect();
      playCorrect(scoring.combo + 1);
      emitCorrect();
    } else {
      scoring.recordWrong();
      playWrong();
      shake(ShakePresets.wrong);
      emitWrong();
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(i => i + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        finishGame();
      }
    }, isCorrect ? 500 : 1000);
  }, [showFeedback, currentQuestion, currentQuestionIndex, questions.length, scoring, playCorrect, playWrong, shake, emitCorrect, emitWrong, finishGame]);

  // Build stats for GameFrame
  const stats = {
    score: scoring.score,
    correctAnswers: scoring.correctAnswers,
    wrongAnswers: scoring.wrongAnswers,
    combo: scoring.combo,
    maxCombo: scoring.maxCombo,
    accuracy: scoring.accuracy,
    xpEarned: scoring.xpEarned,
    isPerfect: scoring.isPerfect,
  };

  // Menu screen
  if (view === 'menu') {
    return (
      <div className="min-h-screen bg-[#0f0f17] flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md w-full"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-28 h-28 mx-auto mb-6 rounded-2xl bg-blue-500/20 border-2 border-blue-500/50 flex items-center justify-center"
          >
            <School size={56} className="text-blue-400" />
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2">CLASS CLASH</h1>
          <p className="text-gray-400 mb-2">Compete for your class!</p>

          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <span className={`text-sm font-semibold ${
              difficultyInfo.level === 'KS3' ? 'text-green-400' :
              difficultyInfo.level === 'GCSE' ? 'text-yellow-400' :
              'text-red-400'
            }`}>
              {difficultyInfo.label}
            </span>
            {yearGroup && (
              <span className="text-gray-500 text-sm">| Year {yearGroup}</span>
            )}
          </div>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setView('select-class')}
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl font-bold text-white shadow-lg flex items-center justify-center gap-3"
            >
              <Target size={24} />
              START CHALLENGE
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setView('leaderboard')}
              className="w-full py-4 px-6 bg-white/5 border border-white/10 rounded-2xl font-bold text-white flex items-center justify-center gap-3"
            >
              <TrendingUp size={24} />
              VIEW LEADERBOARD
            </motion.button>
          </div>

          <button
            onClick={() => router.push('/')}
            className="mt-8 text-gray-500 hover:text-white transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  // Select class screen
  if (view === 'select-class') {
    return (
      <div className="min-h-screen bg-[#0f0f17] p-6">
        <button
          onClick={() => setView('menu')}
          className="absolute top-4 left-4 p-2 text-gray-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="max-w-md mx-auto pt-12">
          <h2 className="text-2xl font-bold text-white text-center mb-2">Select Your Class</h2>
          <p className="text-gray-400 text-center mb-8">Your score will contribute to your class total</p>

          <div className="grid grid-cols-3 gap-3">
            {CLASSES.map((cls) => (
              <motion.button
                key={cls}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => selectClass(cls)}
                className="p-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/10 transition-colors"
              >
                {cls}
              </motion.button>
            ))}
          </div>

          <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl">
            <p className="text-gray-400 text-sm text-center">
              Don't see your class? Ask your teacher to create one!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Leaderboard screen
  if (view === 'leaderboard') {
    return (
      <div className="min-h-screen bg-[#0f0f17] p-6">
        <button
          onClick={() => setView('menu')}
          className="absolute top-4 left-4 p-2 text-gray-500 hover:text-white transition-colors"
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
                className={cn(
                  'p-4 rounded-xl bg-white/5 border flex items-center gap-4',
                  i === 0 ? 'border-yellow-500/50' : 'border-white/10'
                )}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cls.color} flex items-center justify-center font-black text-white`}>
                  {i === 0 ? <Crown size={24} /> : i === 1 ? <Medal size={24} /> : i === 2 ? <Medal size={24} /> : i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white">Class {cls.name}</h3>
                  <p className="text-gray-500 text-sm">{cls.members} students</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-yellow-400">{cls.score.toLocaleString()}</p>
                  <p className="text-gray-500 text-xs">points</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setView('select-class')}
            className="w-full mt-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl font-bold text-white"
          >
            JOIN THE BATTLE
          </motion.button>
        </div>
      </div>
    );
  }

  // Game view using GameFrame
  // Custom ready content with class info
  const readyContent = (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 text-center">
        <p className="text-gray-400 text-sm">Playing for</p>
        <p className="text-2xl font-bold text-white">Class {selectedClass}</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 text-center">
        <p className="text-gray-400 text-xs mb-1">YOUR CLASS CODE</p>
        <div className="flex items-center justify-center gap-2">
          <p className="font-mono font-bold text-white">{classCode}</p>
          <button onClick={copyCode} className="text-gray-400 hover:text-white transition-colors">
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-400 mb-4">
        <Users size={20} />
        <span>10 questions | {GAME_TIME} seconds</span>
      </div>
    </div>
  );

  // Custom playing content
  const playingContent = (
    <div style={shakeStyle} className="h-full flex flex-col">
      {/* Question counter */}
      <div className="text-center mb-4">
        <span className="text-gray-400 text-sm">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
      </div>

      {/* Question card */}
      {currentQuestion && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex-1 flex flex-col"
          >
            {/* Question */}
            <div className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">
                  {currentQuestion.subject}
                </span>
                <span className={cn(
                  'text-xs px-2 py-1 rounded-full',
                  currentQuestion.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                  currentQuestion.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                )}>
                  {currentQuestion.points} pts
                </span>
              </div>
              <p className="text-xl font-bold text-white">{currentQuestion.question}</p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-3">
              {currentQuestion.options.map((option, i) => {
                const isSelected = selectedAnswer === i;
                const isCorrectAnswer = i === currentQuestion.correctIndex;

                return (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={!showFeedback ? { scale: 1.02 } : {}}
                    whileTap={!showFeedback ? { scale: 0.98 } : {}}
                    onClick={() => handleAnswer(i)}
                    disabled={showFeedback}
                    className={cn(
                      'p-4 rounded-xl border-2 text-white font-semibold text-left transition-all',
                      showFeedback
                        ? isCorrectAnswer
                          ? 'bg-green-500/20 border-green-500 text-green-400'
                          : isSelected
                            ? 'bg-red-500/20 border-red-500 text-red-400'
                            : 'bg-white/5 border-white/10 text-gray-400'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-500/50'
                    )}
                  >
                    {option}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={cn(
                'flex-1 h-2 rounded-full',
                i < currentQuestionIndex ? 'bg-blue-500' :
                i === currentQuestionIndex ? 'bg-blue-400' :
                'bg-white/10'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // Custom finished content (class-specific results)
  const finishedContent = (
    <div className="flex-1 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring' }}
        className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6"
      >
        <Trophy size={48} className="text-white" />
      </motion.div>

      <h1 className="text-3xl font-black text-white mb-2">CHALLENGE COMPLETE!</h1>
      <p className="text-gray-400 mb-2">Class {selectedClass}</p>

      <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-6 inline-block">
        <p className="text-gray-400 text-xs">YOUR CLASS CODE</p>
        <div className="flex items-center gap-2">
          <p className="font-mono font-bold text-white">{classCode}</p>
          <button onClick={copyCode} className="text-gray-400 hover:text-white transition-colors">
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8 w-full max-w-sm">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
          <p className="text-3xl font-black text-yellow-400">{scoring.score}</p>
          <p className="text-xs text-gray-500">POINTS</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
          <p className="text-3xl font-black text-green-400">{scoring.correctAnswers}/{questions.length}</p>
          <p className="text-xs text-gray-500">CORRECT</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
          <p className="text-3xl font-black text-blue-400">{scoring.accuracy}%</p>
          <p className="text-xs text-gray-500">ACCURACY</p>
        </div>
      </div>

      <p className="text-gray-300 mb-6 bg-green-500/10 border border-green-500/30 rounded-xl p-3">
        +{scoring.score} points added to Class {selectedClass}!
      </p>

      <div className="space-y-3 w-full max-w-sm">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleRestart}
          className="w-full py-4 font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center gap-2"
        >
          Play Again
        </motion.button>
        <button
          onClick={() => setView('leaderboard')}
          className="w-full py-4 font-bold text-gray-300 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
        >
          <TrendingUp size={20} />
          VIEW LEADERBOARD
        </button>
        <button
          onClick={() => router.push('/')}
          className="w-full py-4 font-bold text-gray-500 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
        >
          HOME
        </button>
      </div>
    </div>
  );

  return (
    <>
      <ParticleEffect trigger={particleTrigger} {...particleConfig} />

      {gameState === 'finished' ? (
        <div className="min-h-screen bg-[#0f0f17] flex flex-col">
          {finishedContent}
        </div>
      ) : (
        <GameFrame
          title="Class Clash"
          subtitle={`Playing for Class ${selectedClass}`}
          icon={<School size={40} className="text-blue-400" />}
          color="blue"
          gameState={gameState}
          onStart={handleStart}
          onRestart={handleRestart}
          onClose={() => setView('menu')}
          time={timer.time}
          totalTime={GAME_TIME}
          score={scoring.score}
          combo={scoring.combo}
          stats={stats}
        >
          {gameState === 'ready' && readyContent}
          {gameState === 'playing' && playingContent}
        </GameFrame>
      )}
    </>
  );
}
