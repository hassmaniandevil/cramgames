'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator } from 'lucide-react';
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
import { useUserStore } from '@/lib/stores/userStore';
import { cn } from '@/lib/utils/cn';

interface MathProblem {
  question: string;
  answer: number;
  options: number[];
}

// Map year group to starting difficulty
function getStartingDifficulty(yearGroup: number): number {
  if (yearGroup <= 7) return 1;
  if (yearGroup <= 9) return 3;
  if (yearGroup <= 11) return 5;
  return 7;
}

function generateProblem(difficulty: number): MathProblem {
  let a: number, b: number, c: number, answer: number, question: string;

  if (difficulty < 3) {
    // KS3 Easy: single digit addition/subtraction
    const op = Math.random() > 0.5 ? '+' : '-';
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    if (op === '-' && b > a) [a, b] = [b, a];
    answer = op === '+' ? a + b : a - b;
    question = `${a} ${op} ${b}`;
  } else if (difficulty < 5) {
    // KS3 Medium: times tables or two-digit operations
    const opType = Math.floor(Math.random() * 3);
    if (opType === 0) {
      a = Math.floor(Math.random() * 12) + 1;
      b = Math.floor(Math.random() * 12) + 1;
      answer = a * b;
      question = `${a} × ${b}`;
    } else if (opType === 1) {
      a = Math.floor(Math.random() * 50) + 10;
      b = Math.floor(Math.random() * 50) + 10;
      answer = a + b;
      question = `${a} + ${b}`;
    } else {
      a = Math.floor(Math.random() * 50) + 50;
      b = Math.floor(Math.random() * 50) + 10;
      answer = a - b;
      question = `${a} - ${b}`;
    }
  } else if (difficulty < 7) {
    // GCSE: division, percentages, squares
    const opType = Math.floor(Math.random() * 5);
    if (opType === 0) {
      b = Math.floor(Math.random() * 12) + 2;
      answer = Math.floor(Math.random() * 15) + 1;
      a = b * answer;
      question = `${a} ÷ ${b}`;
    } else if (opType === 1) {
      const percent = [10, 15, 20, 25, 50, 75][Math.floor(Math.random() * 6)];
      a = Math.floor(Math.random() * 10 + 1) * 20;
      answer = (percent / 100) * a;
      question = `${percent}% of ${a}`;
    } else if (opType === 2) {
      a = Math.floor(Math.random() * 15) + 1;
      answer = a * a;
      question = `${a}²`;
    } else if (opType === 3) {
      a = Math.floor(Math.random() * 20) + 5;
      b = Math.floor(Math.random() * 20) + 5;
      c = Math.floor(Math.random() * 20) + 5;
      answer = a + b - c;
      question = `${a} + ${b} - ${c}`;
    } else {
      a = Math.floor(Math.random() * 10) + 2;
      b = Math.floor(Math.random() * 10) + 1;
      c = Math.floor(Math.random() * 10) + 1;
      answer = a * b + c;
      question = `${a} × ${b} + ${c}`;
    }
  } else if (difficulty < 9) {
    // A-Level Foundation
    const opType = Math.floor(Math.random() * 6);
    if (opType === 0) {
      a = Math.floor(Math.random() * 6) + 2;
      answer = a * a * a;
      question = `${a}³`;
    } else if (opType === 1) {
      const roots = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
      a = roots[Math.floor(Math.random() * roots.length)];
      answer = Math.sqrt(a);
      question = `√${a}`;
    } else if (opType === 2) {
      const fracs = [[1,4], [1,5], [2,5], [3,4], [2,3], [3,5]];
      const [num, den] = fracs[Math.floor(Math.random() * fracs.length)];
      a = den * (Math.floor(Math.random() * 10) + 5);
      answer = (num / den) * a;
      question = `${num}/${den} of ${a}`;
    } else if (opType === 3) {
      a = Math.floor(Math.random() * 20) + 10;
      b = Math.floor(Math.random() * 30) + 15;
      answer = a - b;
      question = `${a} - ${b}`;
    } else if (opType === 4) {
      a = Math.floor(Math.random() * 8) + 2;
      answer = Math.pow(2, a);
      question = `2^${a}`;
    } else {
      a = 12; b = 4; c = 2;
      answer = 24;
      question = `${a} × ${b} ÷ ${c}`;
    }
  } else {
    // A-Level Advanced
    const opType = Math.floor(Math.random() * 6);
    if (opType === 0) {
      a = Math.floor(Math.random() * 4) + 3;
      answer = [6, 24, 120, 720][a - 3];
      question = `${a}!`;
    } else if (opType === 1) {
      a = Math.floor(Math.random() * 5) + 1;
      const n = Math.floor(Math.random() * 4) + 3;
      answer = (n * (2 * a + (n - 1))) / 2;
      question = `${a} + ${a+1} + ... + ${a+n-1}`;
    } else if (opType === 2) {
      a = Math.floor(Math.random() * 50) + 50;
      b = Math.floor(Math.random() * 9) + 2;
      answer = a * b;
      question = `${a} × ${b}`;
    } else if (opType === 3) {
      a = Math.floor(Math.random() * 5 + 1) * 50;
      const percent = [10, 20, 25][Math.floor(Math.random() * 3)];
      answer = a + (percent / 100) * a;
      question = `${a} + ${percent}%`;
    } else if (opType === 4) {
      const cubes = [8, 27, 64, 125, 216];
      a = cubes[Math.floor(Math.random() * cubes.length)];
      answer = Math.round(Math.pow(a, 1/3));
      question = `∛${a}`;
    } else {
      a = Math.floor(Math.random() * 10) + 5;
      b = Math.floor(Math.random() * 10) + 5;
      answer = a * a + b * b;
      question = `${a}² + ${b}²`;
    }
  }

  // Generate wrong options
  const options = [answer];
  const offsetRange = Math.max(5, Math.abs(Math.floor(answer * 0.2)));
  while (options.length < 4) {
    const offset = Math.floor(Math.random() * offsetRange) + 1;
    const wrong = Math.random() > 0.5 ? answer + offset : answer - offset;
    if (!options.includes(wrong)) {
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
  const { profile } = useUserStore();
  const yearGroup = profile?.yearGroup || 10;
  const startingDifficulty = getStartingDifficulty(yearGroup);

  // Game state hooks
  const { gameState, isPlaying, startGame, finishGame, resetGame } = useGameState();
  const timer = useGameTimer({
    initialTime: 60,
    countDown: true,
    onTimeUp: finishGame,
  });
  const scoring = useGameScore({ basePointsPerQuestion: 100 });
  const audio = useGameAudio();
  const { shake, shakeStyle } = useScreenShake();
  const { trigger: particleTrigger, config: particleConfig, emitCorrect, emitWrong } = useParticles();

  // Game-specific state
  const [problem, setProblem] = useState<MathProblem | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [difficulty, setDifficulty] = useState(startingDifficulty);

  // Generate new problem
  const newProblem = useCallback(() => {
    setProblem(generateProblem(difficulty));
    setSelectedAnswer(null);
    setShowFeedback(false);
  }, [difficulty]);

  // Handle game start
  const handleStart = useCallback(() => {
    startGame();
    timer.reset(60);
    timer.start();
    scoring.reset();
    setDifficulty(startingDifficulty);
    newProblem();
  }, [startGame, timer, scoring, startingDifficulty, newProblem]);

  // Handle restart
  const handleRestart = useCallback(() => {
    resetGame();
    setTimeout(handleStart, 100);
  }, [resetGame, handleStart]);

  // Handle answer selection
  const handleAnswer = useCallback((answer: number) => {
    if (showFeedback || !problem) return;

    setSelectedAnswer(answer);
    setShowFeedback(true);

    const correct = answer === problem.answer;
    setIsCorrect(correct);

    if (correct) {
      const points = scoring.recordCorrect();
      audio.playCorrect(scoring.combo);
      emitCorrect();

      // Increase difficulty every 5 correct
      if ((scoring.correctAnswers + 1) % 5 === 0) {
        setDifficulty(d => Math.min(d + 1, 10));
      }
    } else {
      scoring.recordWrong();
      audio.playWrong();
      shake(ShakePresets.wrong);
      emitWrong();
    }

    // Auto advance
    setTimeout(() => {
      newProblem();
    }, correct ? 300 : 800);
  }, [showFeedback, problem, scoring, audio, shake, emitCorrect, emitWrong, newProblem]);

  // Generate initial problem when playing starts
  useEffect(() => {
    if (isPlaying && !problem) {
      newProblem();
    }
  }, [isPlaying, problem, newProblem]);

  // Calculate stats for results
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

  return (
    <>
      <ParticleEffect trigger={particleTrigger} {...particleConfig} />

      <GameFrame
        title="Number Ninja"
        subtitle="Answer as many maths questions as you can!"
        icon={<Calculator size={40} className="text-purple-400" />}
        color="purple"
        gameState={gameState}
        onStart={handleStart}
        onRestart={handleRestart}
        time={timer.time}
        totalTime={60}
        score={scoring.score}
        combo={scoring.combo}
        stats={stats}
        zoneId="maths-mental-math"
      >
        <div style={shakeStyle} className="h-full flex flex-col items-center justify-center">
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
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6 text-center">
                  <p className="text-4xl font-bold text-white">
                    {problem.question} = ?
                  </p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-2 gap-3">
                  {problem.options.map((option, index) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrectAnswer = option === problem.answer;

                    return (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleAnswer(option)}
                        disabled={showFeedback}
                        className={cn(
                          'p-6 rounded-xl font-bold text-xl transition-all',
                          'border-2',
                          showFeedback
                            ? isCorrectAnswer
                              ? 'bg-green-500/20 border-green-500 text-green-400'
                              : isSelected
                                ? 'bg-red-500/20 border-red-500 text-red-400'
                                : 'bg-white/5 border-white/10 text-gray-400'
                            : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50'
                        )}
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
                      className={cn(
                        'mt-4 p-4 rounded-xl text-center font-bold',
                        isCorrect
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      )}
                    >
                      {isCorrect
                        ? `+${scoring.score} points!`
                        : `Answer: ${problem.answer}`
                      }
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </GameFrame>
    </>
  );
}
