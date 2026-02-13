'use client';

import { use, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useHydration } from '@/lib/stores/useHydration';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useStreakStore } from '@/lib/stores/streakStore';
import {
  X,
  Clock,
  Flame,
  Zap,
  Heart,
  CheckCircle,
  XCircle,
  Trophy,
  Target,
  RotateCcw,
  Home,
} from 'lucide-react';

// Sample questions
const SAMPLE_QUESTIONS = [
  {
    id: '1',
    question: 'What is 7 × 8?',
    options: ['54', '56', '58', '64'],
    correctIndex: 1,
    explanation: '7 × 8 = 56. Think of it as 7 × 8 = (7 × 10) - (7 × 2) = 70 - 14 = 56',
  },
  {
    id: '2',
    question: 'Solve for x: 2x + 5 = 15',
    options: ['x = 4', 'x = 5', 'x = 10', 'x = 7'],
    correctIndex: 1,
    explanation: 'Subtract 5 from both sides: 2x = 10. Then divide by 2: x = 5',
  },
  {
    id: '3',
    question: 'What is 25% of 80?',
    options: ['15', '20', '25', '40'],
    correctIndex: 1,
    explanation: '25% = 1/4, so 80 ÷ 4 = 20',
  },
  {
    id: '4',
    question: 'What is the square root of 144?',
    options: ['11', '12', '13', '14'],
    correctIndex: 1,
    explanation: '12 × 12 = 144, so √144 = 12',
  },
  {
    id: '5',
    question: 'Simplify: 3x + 2x',
    options: ['5x', '6x', '5x²', '6'],
    correctIndex: 0,
    explanation: 'Like terms can be added: 3x + 2x = 5x',
  },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function BattlePage({ params }: PageProps) {
  const { id: zoneId } = use(params);
  const router = useRouter();
  const hydrated = useHydration();
  const { addXP, updateZoneMastery } = useProgressStore();
  const { recordActivity } = useStreakStore();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(30);
  const [screenShake, setScreenShake] = useState(false);

  const questions = SAMPLE_QUESTIONS;
  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  // Timer countdown
  useEffect(() => {
    if (showResult || gameOver) return;

    const interval = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          handleAnswer(-1); // Time's up
          return 30;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, showResult, gameOver]);

  // Reset timer on question change
  useEffect(() => {
    setTimer(30);
  }, [currentIndex]);

  const handleAnswer = useCallback((index: number) => {
    if (showResult || selectedAnswer !== null) return;

    setSelectedAnswer(index);
    setShowResult(true);

    const isCorrect = index === currentQuestion.correctIndex;

    if (isCorrect) {
      const newCombo = combo + 1;
      const xp = 10 + (newCombo * 2);
      setCombo(newCombo);
      setMaxCombo(Math.max(maxCombo, newCombo));
      setScore(score + 1);
      setXpEarned(xpEarned + xp);
      updateZoneMastery(zoneId, true, newCombo);
    } else {
      setCombo(0);
      setLives(lives - 1);
      setScreenShake(true);
      setTimeout(() => setScreenShake(false), 500);
      updateZoneMastery(zoneId, false, 0);
      if (lives <= 1) {
        setTimeout(() => setGameOver(true), 1500);
      }
    }
  }, [showResult, selectedAnswer, currentQuestion, combo, maxCombo, score, xpEarned, lives, zoneId, updateZoneMastery]);

  const handleContinue = useCallback(() => {
    if (currentIndex >= questions.length - 1) {
      addXP(xpEarned, zoneId);
      recordActivity();
      setGameOver(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  }, [currentIndex, questions.length, xpEarned, zoneId, addXP, recordActivity]);

  if (!hydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Zap size={48} className="text-accent mx-auto mb-4 animate-pulse" />
          <p className="text-text-secondary">Loading...</p>
        </motion.div>
      </div>
    );
  }

  // Results screen
  if (gameOver) {
    const won = lives > 0;
    const accuracy = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-8 w-full max-w-md text-center"
        >
          {/* Result Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
              won ? 'bg-pastel-green' : 'bg-pastel-pink'
            }`}
          >
            {won ? (
              <Trophy size={40} className="text-correct" />
            ) : (
              <XCircle size={40} className="text-incorrect" />
            )}
          </motion.div>

          <h1 className="text-2xl font-bold text-text-primary mb-2">
            {won ? 'Great Job!' : 'Out of Lives'}
          </h1>
          <p className="text-text-secondary mb-6">
            {won ? 'You completed the lesson!' : 'Better luck next time'}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-correct">{score}/{questions.length}</div>
              <div className="text-xs text-text-muted">Correct</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">{maxCombo}x</div>
              <div className="text-xs text-text-muted">Max Combo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-xp">+{xpEarned}</div>
              <div className="text-xs text-text-muted">XP</div>
            </div>
          </div>

          {/* Accuracy bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-text-secondary">Accuracy</span>
              <span className="font-bold text-text-primary">{accuracy}%</span>
            </div>
            <div className="progress-track">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${accuracy}%` }}
                transition={{ delay: 0.5 }}
                className="progress-fill"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => router.push('/play')}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Continue
            </button>
            <button
              onClick={() => window.location.reload()}
              className="w-full card p-4 text-text-primary font-semibold flex items-center justify-center gap-2 hover:bg-surface-elevated transition-colors"
            >
              <RotateCcw size={20} />
              Try Again
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background flex flex-col ${screenShake ? 'animate-shake' : ''}`}>
      {/* Header */}
      <header className="glass sticky top-0 z-40 safe-top">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => router.push('/play')}
            className="p-2 -ml-2 text-text-muted hover:text-text-primary transition-colors"
          >
            <X size={24} />
          </button>

          {/* Lives */}
          <div className="flex items-center gap-1 px-3 py-1.5 bg-pastel-pink rounded-xl">
            <Heart size={18} className="text-incorrect" fill="currentColor" />
            <span className="font-bold text-incorrect">{lives}</span>
          </div>

          {/* Timer */}
          <motion.div
            className="flex items-center gap-2"
            animate={timer <= 5 ? { scale: [1, 1.1, 1] } : {}}
            transition={{ repeat: timer <= 5 ? Infinity : 0, duration: 0.5 }}
          >
            <Clock size={18} className={timer <= 5 ? 'text-incorrect' : 'text-text-secondary'} />
            <span className={`font-mono font-bold ${timer <= 5 ? 'text-incorrect' : 'text-text-primary'}`}>
              {timer}s
            </span>
          </motion.div>

          {/* Stats */}
          <div className="flex items-center gap-3">
            {/* Streak */}
            <div className="flex items-center gap-1">
              <motion.div
                animate={combo >= 3 ? { scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] } : {}}
                transition={{ repeat: combo >= 3 ? Infinity : 0, duration: 0.4 }}
              >
                <Flame
                  size={20}
                  className={combo >= 2 ? 'text-streak' : 'text-text-muted'}
                  fill={combo >= 2 ? 'currentColor' : 'none'}
                />
              </motion.div>
              <span className={`font-bold ${combo >= 2 ? 'text-streak' : 'text-text-secondary'}`}>
                {combo}
              </span>
            </div>

            {/* XP */}
            <div className="flex items-center gap-1">
              <Zap size={18} className="text-xp" fill="currentColor" />
              <motion.span
                key={xpEarned}
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                className="font-bold text-xp"
              >
                {xpEarned}
              </motion.span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-4 pb-2">
          <div className="progress-track">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Timer Bar */}
        <div className="h-1 bg-surface-elevated">
          <motion.div
            className={`h-full ${timer > 10 ? 'bg-correct' : timer > 5 ? 'bg-streak' : 'bg-incorrect'}`}
            animate={{ width: `${(timer / 30) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </header>

      {/* Combo Indicator */}
      <AnimatePresence>
        {combo >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex justify-center py-2"
          >
            <div className="px-4 py-2 bg-gradient-to-r from-streak/20 to-amber-500/20 border border-streak/30 rounded-full">
              <span className="font-bold text-streak">{combo}x Combo!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 px-4 py-4 pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            {/* Question Card */}
            <div className="card p-6 mb-6">
              <p className="text-xs text-text-muted mb-2">
                Question {currentIndex + 1} of {questions.length}
              </p>
              <h2 className="text-xl font-bold text-text-primary leading-relaxed">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctIndex;
                const showCorrectness = showResult;

                let className = 'option-card w-full';
                if (showCorrectness) {
                  if (isCorrect) className += ' correct';
                  else if (isSelected) className += ' wrong';
                } else if (isSelected) {
                  className += ' selected';
                }

                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleAnswer(index)}
                    className={className}
                    disabled={showResult}
                  >
                    <span className="option-badge">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1 text-left font-medium text-text-primary">
                      {option}
                    </span>
                    {showCorrectness && isCorrect && (
                      <CheckCircle size={24} className="text-correct" />
                    )}
                    {showCorrectness && isSelected && !isCorrect && (
                      <XCircle size={24} className="text-incorrect" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Feedback & Continue */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="px-4 pb-6 safe-bottom"
          >
            {/* Feedback */}
            <div
              className={`card p-4 mb-4 ${
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-pastel-green border-correct'
                  : 'bg-pastel-pink border-incorrect'
              } border-2`}
            >
              <div className="flex items-center gap-3 mb-2">
                {selectedAnswer === currentQuestion.correctIndex ? (
                  <CheckCircle size={24} className="text-correct" />
                ) : (
                  <XCircle size={24} className="text-incorrect" />
                )}
                <span className="font-bold text-text-primary">
                  {selectedAnswer === currentQuestion.correctIndex
                    ? combo > 2 ? 'Amazing!' : 'Correct!'
                    : 'Not quite'}
                </span>
                {selectedAnswer === currentQuestion.correctIndex && (
                  <span className="ml-auto font-bold text-xp">
                    +{10 + combo * 2} XP
                  </span>
                )}
              </div>
              <p className="text-sm text-text-secondary">
                {currentQuestion.explanation}
              </p>
            </div>

            <button
              onClick={handleContinue}
              className={`w-full py-4 rounded-2xl font-bold text-white ${
                selectedAnswer === currentQuestion.correctIndex
                  ? 'bg-gradient-to-r from-correct to-emerald-400'
                  : 'bg-gradient-to-r from-incorrect to-pink-400'
              }`}
            >
              Continue
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
