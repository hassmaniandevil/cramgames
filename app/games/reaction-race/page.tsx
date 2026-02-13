'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Heart } from 'lucide-react';
import { useUserStore, YearGroup } from '@/lib/stores/userStore';
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

interface TargetItem {
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

// Get difficulty level and settings based on year group
function getDifficultySettings(yearGroup: YearGroup | undefined): {
  level: 'KS3' | 'GCSE' | 'A-Level';
  baseSpawnInterval: number;
  minSpawnInterval: number;
  speedDecrement: number;
  totalTime: number;
} {
  const year = yearGroup ?? 10;

  if (year <= 9) {
    return {
      level: 'KS3',
      baseSpawnInterval: 2500,
      minSpawnInterval: 1500,
      speedDecrement: 80,
      totalTime: 90,
    };
  } else if (year <= 11) {
    return {
      level: 'GCSE',
      baseSpawnInterval: 2000,
      minSpawnInterval: 1000,
      speedDecrement: 100,
      totalTime: 60,
    };
  } else {
    return {
      level: 'A-Level',
      baseSpawnInterval: 1500,
      minSpawnInterval: 700,
      speedDecrement: 120,
      totalTime: 45,
    };
  }
}

const questions: Question[] = [
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
  const { profile } = useUserStore();
  const gameAreaRef = useRef<HTMLDivElement>(null);

  // Get difficulty settings
  const yearGroup = profile?.yearGroup;
  const difficultySettings = getDifficultySettings(yearGroup);

  // Game framework hooks
  const { gameState, isPlaying, startGame, finishGame, resetGame } = useGameState();
  const { time, start: startTimer, reset: resetTimer } = useGameTimer({
    initialTime: difficultySettings.totalTime,
    countDown: true,
    onTimeUp: finishGame,
  });
  const {
    score,
    combo,
    maxCombo,
    correctAnswers,
    wrongAnswers,
    accuracy,
    xpEarned,
    isPerfect,
    recordCorrect,
    recordWrong,
    reset: resetScore,
  } = useGameScore({ basePointsPerQuestion: 100 });
  const { playCorrect, playWrong } = useGameAudio();
  const { shake, shakeStyle } = useScreenShake();
  const { trigger: particleTrigger, config: particleConfig, emitCorrect, emitWrong } = useParticles();

  // Local game state
  const [lives, setLives] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [targets, setTargets] = useState<TargetItem[]>([]);
  const [round, setRound] = useState(0);
  const [spawnInterval, setSpawnInterval] = useState(difficultySettings.baseSpawnInterval);
  const [showFeedback, setShowFeedback] = useState<{ correct: boolean; x: number; y: number; points: number } | null>(null);

  // Generate targets for current question
  const generateTargets = useCallback((question: Question) => {
    if (!gameAreaRef.current) return;

    const area = gameAreaRef.current.getBoundingClientRect();
    const newTargets: TargetItem[] = [];
    const allAnswers = [question.correctAnswer, ...question.wrongAnswers.slice(0, 3)];
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

  // Progress to next round
  const nextRound = useCallback(() => {
    const questionIndex = round % questions.length;
    const question = questions[questionIndex];
    setCurrentQuestion(question);
    setRound(r => r + 1);

    setSpawnInterval(Math.max(
      difficultySettings.minSpawnInterval,
      difficultySettings.baseSpawnInterval - round * difficultySettings.speedDecrement
    ));

    setTimeout(() => {
      generateTargets(question);
    }, 500);
  }, [round, generateTargets, difficultySettings]);

  // Handle game start
  const handleStartGame = useCallback(() => {
    startGame();
    startTimer();
    setLives(3);
    setRound(0);
    setTargets([]);
    setSpawnInterval(difficultySettings.baseSpawnInterval);
    resetScore();
    setTimeout(() => nextRound(), 100);
  }, [startGame, startTimer, difficultySettings.baseSpawnInterval, resetScore, nextRound]);

  // Handle game restart
  const handleRestartGame = useCallback(() => {
    resetGame();
    resetTimer();
    setLives(3);
    setRound(0);
    setTargets([]);
    setCurrentQuestion(null);
    resetScore();
  }, [resetGame, resetTimer, resetScore]);

  // Handle target click
  const handleTargetClick = useCallback((target: TargetItem, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const feedbackX = rect.left + rect.width / 2;
    const feedbackY = rect.top;

    if (target.isCorrect) {
      const points = recordCorrect();
      playCorrect(combo + 1);
      emitCorrect(feedbackX, feedbackY);
      setShowFeedback({ correct: true, x: feedbackX, y: feedbackY, points });
      setTargets([]);

      setTimeout(() => {
        setShowFeedback(null);
        if (isPlaying) {
          nextRound();
        }
      }, 500);
    } else {
      setLives(l => l - 1);
      recordWrong();
      playWrong();
      shake(ShakePresets.wrong);
      emitWrong(feedbackX, feedbackY);
      setShowFeedback({ correct: false, x: feedbackX, y: feedbackY, points: 0 });

      // Remove the wrong target
      setTargets(prev => prev.filter(t => t.id !== target.id));

      setTimeout(() => {
        setShowFeedback(null);
      }, 300);
    }
  }, [recordCorrect, recordWrong, playCorrect, playWrong, shake, emitCorrect, emitWrong, combo, isPlaying, nextRound]);

  // Check for game over (no lives)
  useEffect(() => {
    if (lives <= 0 && isPlaying) {
      finishGame();
    }
  }, [lives, isPlaying, finishGame]);

  // Auto-advance if time runs out on targets
  useEffect(() => {
    if (!isPlaying || targets.length === 0) return;

    const timeout = setTimeout(() => {
      setLives(l => l - 1);
      recordWrong();
      setTargets([]);

      if (lives > 1 && isPlaying) {
        setTimeout(() => nextRound(), 500);
      }
    }, spawnInterval + 1500);

    return () => clearTimeout(timeout);
  }, [targets, isPlaying, spawnInterval, lives, nextRound, recordWrong]);

  // Stats object for finished screen
  const stats = {
    score,
    correctAnswers,
    wrongAnswers,
    combo,
    maxCombo,
    accuracy,
    xpEarned,
    isPerfect,
  };

  return (
    <>
      {/* Particle effects layer */}
      <ParticleEffect trigger={particleTrigger} {...particleConfig} />

      <GameFrame
        title="Reaction Race"
        subtitle="Tap the correct answer before time runs out!"
        icon={<Target size={40} className="text-orange-400" />}
        color="orange"
        gameState={gameState}
        onStart={handleStartGame}
        onRestart={handleRestartGame}
        time={time}
        totalTime={difficultySettings.totalTime}
        score={score}
        combo={combo}
        stats={stats}
        className="bg-[#0f0f17]"
        contentClassName="p-0"
      >
        {/* Playing screen content */}
        <div className="h-full flex flex-col" style={shakeStyle}>
          {/* Lives display */}
          <div className="flex items-center justify-center gap-2 py-2 bg-[#1a1a2e] border-b border-white/10">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 1 }}
                animate={{ scale: i < lives ? 1 : 0.5, opacity: i < lives ? 1 : 0.3 }}
              >
                <Heart
                  size={24}
                  className={i < lives ? 'text-red-500 fill-red-500' : 'text-gray-600 fill-gray-600'}
                />
              </motion.div>
            ))}
          </div>

          {/* Question */}
          <div className="px-4 py-3 text-center">
            <motion.div
              key={currentQuestion?.question}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1a1a2e] border border-white/10 rounded-2xl px-6 py-4"
            >
              <p className="text-white text-lg font-bold">
                {currentQuestion?.question}
              </p>
            </motion.div>
          </div>

          {/* Game area */}
          <div
            ref={gameAreaRef}
            className="flex-1 relative overflow-hidden bg-[#0a0a12]"
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
                  className="absolute rounded-full bg-gradient-to-br from-[#2a2a4a] to-[#1a1a2e] border-2 border-orange-500/30 shadow-xl flex items-center justify-center text-center font-bold text-white cursor-pointer hover:border-orange-400 hover:from-[#3a3a5a] hover:to-[#2a2a3e] transition-colors"
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
                  {showFeedback.correct ? `+${showFeedback.points}` : '-1'}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Round indicator */}
          <div className="px-4 py-2 text-center bg-[#1a1a2e] border-t border-white/10">
            <span className="text-gray-500 text-sm">Round {round}</span>
          </div>
        </div>
      </GameFrame>
    </>
  );
}
