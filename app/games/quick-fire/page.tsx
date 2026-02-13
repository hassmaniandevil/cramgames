'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useUserStore } from '@/lib/stores/userStore';
import type { Question } from '@/data/questions/index';
export const dynamic = 'force-dynamic';
import { GameSettingsButton } from '@/components/game/GameSettings';
import {
  X,
  Zap,
  Clock,
  Trophy,
  RotateCcw,
  Home,
  Flame,
  Check,
  X as XIcon,
  Timer,
  Heart,
  Settings,
} from 'lucide-react';

interface Statement {
  id: string;
  text: string;
  isTrue: boolean;
  subject: string;
  explanation: string;
}

// Convert questions to true/false statements
function questionsToStatements(questions: Question[]): Statement[] {
  const statements: Statement[] = [];

  questions.forEach(q => {
    // Create a TRUE statement (the correct answer)
    statements.push({
      id: `${q.id}-true`,
      text: `${q.question.replace('?', '')} - Answer: ${q.correctAnswer}`,
      isTrue: true,
      subject: q.subject.charAt(0).toUpperCase() + q.subject.slice(1),
      explanation: q.explanation,
    });

    // Create FALSE statements (wrong answers)
    if (q.wrongAnswers.length > 0) {
      const wrongAnswer = q.wrongAnswers[Math.floor(Math.random() * q.wrongAnswers.length)];
      statements.push({
        id: `${q.id}-false`,
        text: `${q.question.replace('?', '')} - Answer: ${wrongAnswer}`,
        isTrue: false,
        subject: q.subject.charAt(0).toUpperCase() + q.subject.slice(1),
        explanation: `Incorrect! The correct answer is ${q.correctAnswer}. ${q.explanation}`,
      });
    }
  });

  return statements;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function QuickFirePage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const { profile } = useUserStore();

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | 'mixed'>('mixed');
  const [shuffledStatements, setShuffledStatements] = useState<Statement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [lives, setLives] = useState(3);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<{ correct: boolean; explanation: string } | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const currentStatement = shuffledStatements[currentIndex];

  // State for questions (loaded on client only)
  const [questionsLoaded, setQuestionsLoaded] = useState(false);
  const questionsRef = useRef<Question[]>([]);

  // Load questions on client side only
  useEffect(() => {
    // Dynamic import to avoid SSG issues
    import('@/data/questions/index').then(({ getAllQuestions }) => {
      const yearGroup = profile?.yearGroup || 9;
      const subjects = profile?.subjects || ['maths', 'biology', 'chemistry', 'physics', 'english', 'history', 'geography'];
      const allQuestions = getAllQuestions();

      let filtered = allQuestions.filter(q =>
        q.yearGroup <= yearGroup &&
        subjects.includes(q.subject)
      );

      if (difficulty !== 'mixed') {
        filtered = filtered.filter(q => q.difficulty === difficulty);
      }

      questionsRef.current = filtered;
      setQuestionsLoaded(true);
    });
  }, [profile?.yearGroup, profile?.subjects, difficulty]);

  // Get available questions
  const availableQuestions = questionsRef.current;

  // Start game
  const startGame = () => {
    const questions = shuffleArray(availableQuestions).slice(0, 15);
    const statements = questionsToStatements(questions);
    setShuffledStatements(shuffleArray(statements).slice(0, 20));
    setGameState('playing');
    setCurrentIndex(0);
    setTimeLeft(5);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setLives(3);
    setShowFeedback(false);
    setLastAnswer(null);
    setCorrectAnswers(0);
  };

  // Timer
  useEffect(() => {
    if (gameState !== 'playing' || showFeedback) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          handleAnswer(null);
          return 5;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, showFeedback, currentIndex]);

  // Handle answer
  const handleAnswer = useCallback((answer: boolean | null) => {
    if (showFeedback || !currentStatement) return;

    setShowFeedback(true);

    const isCorrect = answer === currentStatement.isTrue;

    setLastAnswer({
      correct: isCorrect,
      explanation: currentStatement.explanation,
    });

    if (isCorrect) {
      const comboBonus = Math.floor(combo / 3) * 5;
      setScore(s => s + 10 + comboBonus);
      setCombo(c => c + 1);
      setMaxCombo(m => Math.max(m, combo + 1));
      setCorrectAnswers(c => c + 1);
    } else {
      setCombo(0);
      setLives(l => l - 1);
    }

    setTimeout(() => {
      if (!isCorrect && lives <= 1) {
        addXP(score);
        setGameState('finished');
      } else if (currentIndex >= shuffledStatements.length - 1) {
        addXP(score + (isCorrect ? 10 : 0));
        setGameState('finished');
      } else {
        setCurrentIndex(i => i + 1);
        setTimeLeft(5);
        setShowFeedback(false);
        setLastAnswer(null);
      }
    }, isCorrect ? 500 : 1500);
  }, [showFeedback, currentStatement, combo, score, lives, currentIndex, shuffledStatements.length, addXP]);

  // Loading screen while questions load
  if (!questionsLoaded) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-amber-500/30 border-t-amber-500 animate-spin" />
          <p className="text-gray-400">Loading questions...</p>
        </motion.div>
      </div>
    );
  }

  // Ready screen
  if (gameState === 'ready') {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-sm w-full"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
            <Timer size={48} className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">
            Quick Fire
          </h1>
          <p className="text-gray-400 mb-6">
            True or False? You have 5 seconds per question!
          </p>

          {/* Settings display */}
          <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-400">Your Settings</span>
              <GameSettingsButton
                currentDifficulty={difficulty}
                onDifficultyChange={(d) => setDifficulty(d as any)}
              />
            </div>
            <div className="space-y-2 text-left">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Year Group:</span>
                <span className="text-white font-medium">Year {profile?.yearGroup || 9}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subjects:</span>
                <span className="text-white font-medium">
                  {(profile?.subjects || ['maths', 'biology', 'chemistry', 'physics']).length} selected
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Difficulty:</span>
                <span className="text-white font-medium capitalize">{difficulty}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Questions Available:</span>
                <span className="text-green-400 font-medium">{availableQuestions.length}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <Clock size={24} className="text-blue-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">5 seconds</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <Heart size={24} className="text-red-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">3 lives</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <Flame size={24} className="text-orange-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Combos!</p>
            </div>
          </div>

          <button
            onClick={startGame}
            disabled={availableQuestions.length < 10}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {availableQuestions.length < 10 ? 'Need more questions (adjust settings)' : 'Start Game'}
          </button>

          <button
            onClick={() => router.push('/')}
            className="mt-4 text-gray-500 hover:text-white transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  // Finished screen
  if (gameState === 'finished') {
    const total = currentIndex + 1;
    const accuracy = total > 0 ? Math.round((correctAnswers / total) * 100) : 0;

    return (
      <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#16161d] border border-white/10 rounded-2xl p-8 w-full max-w-md text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
              lives > 0 ? 'bg-green-500/20' : 'bg-red-500/20'
            }`}
          >
            {lives > 0 ? (
              <Trophy size={40} className="text-green-400" />
            ) : (
              <XIcon size={40} className="text-red-400" />
            )}
          </motion.div>

          <h1 className="text-2xl font-bold text-white mb-2">
            {lives > 0 ? 'Well Done!' : 'Game Over!'}
          </h1>
          <p className="text-gray-400 mb-6">
            {lives > 0 ? 'You completed the challenge!' : 'You ran out of lives!'}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">{score}</div>
              <div className="text-xs text-gray-500">Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">{maxCombo}x</div>
              <div className="text-xs text-gray-500">Max Combo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{accuracy}%</div>
              <div className="text-xs text-gray-500">Accuracy</div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={startGame}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              Play Again
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full bg-white/5 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
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
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => router.push('/')}
            className="p-2 -ml-2 text-gray-500 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          {/* Lives */}
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <Heart
                key={i}
                size={20}
                className={i <= lives ? 'text-red-500' : 'text-gray-700'}
                fill={i <= lives ? 'currentColor' : 'none'}
              />
            ))}
          </div>

          {/* Timer */}
          <motion.div
            className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
              timeLeft > 2 ? 'bg-green-500' : 'bg-red-500'
            }`}
            animate={timeLeft <= 2 ? { scale: [1, 1.1, 1] } : {}}
            transition={{ repeat: timeLeft <= 2 ? Infinity : 0, duration: 0.3 }}
          >
            <Clock size={18} className="text-white" />
            <span className="font-mono font-bold text-white">{timeLeft}s</span>
          </motion.div>

          {/* Score */}
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-yellow-400" />
            <span className="font-bold text-yellow-400">{score}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-white/5">
          <motion.div
            className="h-full bg-purple-500"
            animate={{ width: `${((currentIndex + 1) / shuffledStatements.length) * 100}%` }}
          />
        </div>

        {/* Combo indicator */}
        {combo >= 2 && (
          <div className="px-4 pb-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <div className="px-4 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full">
                <span className="font-bold text-orange-400 flex items-center gap-1">
                  <Flame size={16} /> {combo}x Combo!
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        {currentStatement && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStatement.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full max-w-md"
            >
              {/* Subject tag */}
              <div className="flex justify-center mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                  {currentStatement.subject}
                </span>
              </div>

              {/* Statement */}
              <div className="bg-[#16161d] border border-white/10 rounded-2xl p-6 mb-8 text-center">
                <p className="text-xl font-bold text-white leading-relaxed">
                  {currentStatement.text}
                </p>
              </div>

              {/* True/False buttons */}
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(true)}
                  disabled={showFeedback}
                  className={`p-6 rounded-2xl flex flex-col items-center gap-2 transition-all ${
                    showFeedback && currentStatement.isTrue
                      ? 'bg-green-500 text-white'
                      : showFeedback && !currentStatement.isTrue
                      ? 'bg-white/5 opacity-50'
                      : 'bg-green-500/20 hover:bg-green-500/30 border border-green-500/30'
                  }`}
                >
                  <Check size={40} className={showFeedback && currentStatement.isTrue ? 'text-white' : 'text-green-400'} />
                  <span className={`font-bold text-lg ${showFeedback && currentStatement.isTrue ? 'text-white' : 'text-green-400'}`}>
                    TRUE
                  </span>
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(false)}
                  disabled={showFeedback}
                  className={`p-6 rounded-2xl flex flex-col items-center gap-2 transition-all ${
                    showFeedback && !currentStatement.isTrue
                      ? 'bg-red-500 text-white'
                      : showFeedback && currentStatement.isTrue
                      ? 'bg-white/5 opacity-50'
                      : 'bg-red-500/20 hover:bg-red-500/30 border border-red-500/30'
                  }`}
                >
                  <XIcon size={40} className={showFeedback && !currentStatement.isTrue ? 'text-white' : 'text-red-400'} />
                  <span className={`font-bold text-lg ${showFeedback && !currentStatement.isTrue ? 'text-white' : 'text-red-400'}`}>
                    FALSE
                  </span>
                </motion.button>
              </div>

              {/* Feedback */}
              <AnimatePresence>
                {showFeedback && lastAnswer && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-6 p-4 rounded-xl ${
                      lastAnswer.correct ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'
                    }`}
                  >
                    <p className={`font-bold mb-1 ${lastAnswer.correct ? 'text-green-400' : 'text-red-400'}`}>
                      {lastAnswer.correct ? 'Correct!' : 'Wrong!'}
                    </p>
                    <p className="text-sm text-gray-400">{lastAnswer.explanation}</p>
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
