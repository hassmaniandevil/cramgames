'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import {
  X,
  Zap,
  Clock,
  Trophy,
  Target,
  RotateCcw,
  Home,
  Flame,
  Calculator,
} from 'lucide-react';

interface MathProblem {
  question: string;
  answer: number;
  options: number[];
}

function generateProblem(difficulty: number): MathProblem {
  const operations = ['+', '-', '×', '÷'];

  let a: number, b: number, answer: number, question: string;

  if (difficulty < 3) {
    // Easy: single digit addition/subtraction
    const op = Math.random() > 0.5 ? '+' : '-';
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    if (op === '-' && b > a) [a, b] = [b, a];
    answer = op === '+' ? a + b : a - b;
    question = `${a} ${op} ${b}`;
  } else if (difficulty < 6) {
    // Medium: times tables or two-digit operations
    const opType = Math.floor(Math.random() * 3);
    if (opType === 0) {
      // Times tables
      a = Math.floor(Math.random() * 12) + 1;
      b = Math.floor(Math.random() * 12) + 1;
      answer = a * b;
      question = `${a} × ${b}`;
    } else if (opType === 1) {
      // Two-digit addition
      a = Math.floor(Math.random() * 50) + 10;
      b = Math.floor(Math.random() * 50) + 10;
      answer = a + b;
      question = `${a} + ${b}`;
    } else {
      // Two-digit subtraction
      a = Math.floor(Math.random() * 50) + 50;
      b = Math.floor(Math.random() * 50) + 10;
      answer = a - b;
      question = `${a} - ${b}`;
    }
  } else {
    // Hard: division, larger numbers, percentages
    const opType = Math.floor(Math.random() * 4);
    if (opType === 0) {
      // Division (exact)
      b = Math.floor(Math.random() * 12) + 2;
      answer = Math.floor(Math.random() * 12) + 1;
      a = b * answer;
      question = `${a} ÷ ${b}`;
    } else if (opType === 1) {
      // Percentage
      const percent = [10, 20, 25, 50][Math.floor(Math.random() * 4)];
      a = Math.floor(Math.random() * 10 + 1) * 20;
      answer = (percent / 100) * a;
      question = `${percent}% of ${a}`;
    } else if (opType === 2) {
      // Squares
      a = Math.floor(Math.random() * 12) + 1;
      answer = a * a;
      question = `${a}²`;
    } else {
      // Three number operation
      a = Math.floor(Math.random() * 10) + 1;
      b = Math.floor(Math.random() * 10) + 1;
      const c = Math.floor(Math.random() * 10) + 1;
      answer = a + b + c;
      question = `${a} + ${b} + ${c}`;
    }
  }

  // Generate wrong options
  const options = [answer];
  while (options.length < 4) {
    let wrong: number;
    const offset = Math.floor(Math.random() * 10) + 1;
    wrong = Math.random() > 0.5 ? answer + offset : answer - offset;
    if (wrong > 0 && !options.includes(wrong)) {
      options.push(wrong);
    }
  }

  // Shuffle options
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  return { question, answer, options };
}

export default function NumberNinjaPage() {
  const router = useRouter();
  const { addXP } = useProgressStore();

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [problem, setProblem] = useState<MathProblem | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [difficulty, setDifficulty] = useState(1);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  // Generate new problem
  const newProblem = useCallback(() => {
    setProblem(generateProblem(difficulty));
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, [difficulty]);

  // Start game
  const startGame = () => {
    setGameState('playing');
    setTimeLeft(60);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setDifficulty(1);
    setTotalAnswered(0);
    setCorrectAnswers(0);
    newProblem();
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

  // Handle answer
  const handleAnswer = (answer: number) => {
    if (showFeedback || !problem) return;

    setSelectedAnswer(answer);
    setShowFeedback(true);
    setTotalAnswered(t => t + 1);

    const correct = answer === problem.answer;
    setIsCorrect(correct);

    if (correct) {
      const comboBonus = Math.floor(combo / 3) * 5;
      const points = 10 + comboBonus;
      setScore(s => s + points);
      setCombo(c => c + 1);
      setMaxCombo(m => Math.max(m, combo + 1));
      setCorrectAnswers(c => c + 1);

      // Increase difficulty every 5 correct
      if ((correctAnswers + 1) % 5 === 0) {
        setDifficulty(d => Math.min(d + 1, 10));
      }
    } else {
      setCombo(0);
    }

    // Auto advance after short delay
    setTimeout(() => {
      newProblem();
    }, correct ? 300 : 800);
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
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-pastel-purple flex items-center justify-center">
            <Calculator size={48} className="text-accent" />
          </div>

          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Number Ninja
          </h1>
          <p className="text-text-secondary mb-8">
            Answer as many maths questions as you can in 60 seconds!
          </p>

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
              <p className="text-sm text-text-muted">Earn XP</p>
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
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-pastel-purple flex items-center justify-center"
          >
            <Trophy size={40} className="text-accent" />
          </motion.div>

          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Time's Up!
          </h1>
          <p className="text-text-secondary mb-6">
            Great mental maths workout!
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

          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-text-secondary">Questions answered</span>
              <span className="font-bold text-text-primary">{correctAnswers}/{totalAnswered}</span>
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

          {/* Timer */}
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-pastel-purple rounded-xl"
            animate={timeLeft <= 10 ? { scale: [1, 1.1, 1] } : {}}
            transition={{ repeat: timeLeft <= 10 ? Infinity : 0, duration: 0.5 }}
          >
            <Clock size={20} className={timeLeft <= 10 ? 'text-incorrect' : 'text-accent'} />
            <span className={`font-mono font-bold text-lg ${timeLeft <= 10 ? 'text-incorrect' : 'text-accent'}`}>
              {timeLeft}s
            </span>
          </motion.div>

          {/* Score */}
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-xp" />
            <span className="font-bold text-xp">{score}</span>
          </div>
        </div>

        {/* Combo indicator */}
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
        {problem && (
          <AnimatePresence mode="wait">
            <motion.div
              key={problem.question}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md"
            >
              {/* Question */}
              <div className="card p-8 mb-6 text-center">
                <p className="text-4xl font-bold text-text-primary">
                  {problem.question} = ?
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3">
                {problem.options.map((option, index) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectAnswer = option === problem.answer;

                  let className = 'option-card justify-center text-xl font-bold';
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

              {/* Feedback */}
              <AnimatePresence>
                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-4 p-4 rounded-xl text-center ${
                      isCorrect ? 'bg-pastel-green' : 'bg-pastel-pink'
                    }`}
                  >
                    <span className={`font-bold ${isCorrect ? 'text-correct' : 'text-incorrect'}`}>
                      {isCorrect ? `+${10 + Math.floor(combo / 3) * 5} points!` : `Answer: ${problem.answer}`}
                    </span>
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
