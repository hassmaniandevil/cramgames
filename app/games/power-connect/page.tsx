'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link2, Check } from 'lucide-react';
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

type DifficultyLevel = 'KS3' | 'GCSE' | 'A-Level';

interface Connection {
  id: number;
  left: string;
  right: string;
  subject: string;
  difficulty: DifficultyLevel;
}

// Helper function to get difficulty level from year group
function getDifficultyFromYearGroup(yearGroup: YearGroup | undefined): DifficultyLevel {
  if (!yearGroup || yearGroup <= 9) return 'KS3';
  if (yearGroup <= 11) return 'GCSE';
  return 'A-Level';
}

interface ConnectionItem {
  id: string;
  text: string;
  side: 'left' | 'right';
  connectionId: number;
  isMatched: boolean;
}

const CONNECTIONS: Connection[] = [
  // Biology - KS3
  { id: 1, left: 'Nucleus', right: 'Controls the cell', subject: 'Biology', difficulty: 'KS3' },
  { id: 2, left: 'Cell membrane', right: 'Controls entry/exit', subject: 'Biology', difficulty: 'KS3' },
  { id: 3, left: 'Chloroplast', right: 'Photosynthesis', subject: 'Biology', difficulty: 'KS3' },
  { id: 4, left: 'Vacuole', right: 'Stores water', subject: 'Biology', difficulty: 'KS3' },
  // Biology - GCSE
  { id: 5, left: 'Mitochondria', right: 'ATP production', subject: 'Biology', difficulty: 'GCSE' },
  { id: 6, left: 'Ribosome', right: 'Protein synthesis', subject: 'Biology', difficulty: 'GCSE' },
  { id: 7, left: 'Enzyme', right: 'Biological catalyst', subject: 'Biology', difficulty: 'GCSE' },
  { id: 8, left: 'Osmosis', right: 'Water movement', subject: 'Biology', difficulty: 'GCSE' },
  // Biology - A-Level
  { id: 9, left: 'Krebs cycle', right: 'Acetyl CoA oxidation', subject: 'Biology', difficulty: 'A-Level' },
  { id: 10, left: 'Calvin cycle', right: 'Carbon fixation', subject: 'Biology', difficulty: 'A-Level' },
  { id: 11, left: 'Chemiosmosis', right: 'ATP synthase', subject: 'Biology', difficulty: 'A-Level' },
  { id: 12, left: 'Glycolysis', right: 'Pyruvate production', subject: 'Biology', difficulty: 'A-Level' },

  // Chemistry - KS3
  { id: 13, left: 'Sodium', right: 'Na', subject: 'Chemistry', difficulty: 'KS3' },
  { id: 14, left: 'Iron', right: 'Fe', subject: 'Chemistry', difficulty: 'KS3' },
  { id: 15, left: 'Carbon dioxide', right: 'CO₂', subject: 'Chemistry', difficulty: 'KS3' },
  { id: 16, left: 'Water', right: 'H₂O', subject: 'Chemistry', difficulty: 'KS3' },
  // Chemistry - GCSE
  { id: 17, left: 'Potassium', right: 'K', subject: 'Chemistry', difficulty: 'GCSE' },
  { id: 18, left: 'Lead', right: 'Pb', subject: 'Chemistry', difficulty: 'GCSE' },
  { id: 19, left: 'Oxidation', right: 'Loses electrons', subject: 'Chemistry', difficulty: 'GCSE' },
  { id: 20, left: 'Reduction', right: 'Gains electrons', subject: 'Chemistry', difficulty: 'GCSE' },
  // Chemistry - A-Level
  { id: 21, left: 'Enthalpy', right: 'ΔH', subject: 'Chemistry', difficulty: 'A-Level' },
  { id: 22, left: 'Entropy', right: 'ΔS', subject: 'Chemistry', difficulty: 'A-Level' },
  { id: 23, left: 'Nucleophile', right: 'Electron donor', subject: 'Chemistry', difficulty: 'A-Level' },
  { id: 24, left: 'Electrophile', right: 'Electron acceptor', subject: 'Chemistry', difficulty: 'A-Level' },

  // Physics - KS3
  { id: 25, left: 'Speed', right: 'Distance ÷ Time', subject: 'Physics', difficulty: 'KS3' },
  { id: 26, left: 'Force', right: 'Push or pull', subject: 'Physics', difficulty: 'KS3' },
  { id: 27, left: 'Energy', right: 'Joules (J)', subject: 'Physics', difficulty: 'KS3' },
  { id: 28, left: 'Current', right: 'Amperes (A)', subject: 'Physics', difficulty: 'KS3' },
  // Physics - GCSE
  { id: 29, left: 'Voltage', right: 'V = IR', subject: 'Physics', difficulty: 'GCSE' },
  { id: 30, left: 'Power', right: 'P = IV', subject: 'Physics', difficulty: 'GCSE' },
  { id: 31, left: 'Momentum', right: 'p = mv', subject: 'Physics', difficulty: 'GCSE' },
  { id: 32, left: 'Force', right: 'F = ma', subject: 'Physics', difficulty: 'GCSE' },
  // Physics - A-Level
  { id: 33, left: 'Kinetic energy', right: '½mv²', subject: 'Physics', difficulty: 'A-Level' },
  { id: 34, left: 'Wave speed', right: 'v = fλ', subject: 'Physics', difficulty: 'A-Level' },
  { id: 35, left: 'Gravitational PE', right: 'mgh', subject: 'Physics', difficulty: 'A-Level' },
  { id: 36, left: 'Electric field', right: 'E = F/Q', subject: 'Physics', difficulty: 'A-Level' },

  // Maths - KS3
  { id: 37, left: 'Area of rectangle', right: 'Length × Width', subject: 'Maths', difficulty: 'KS3' },
  { id: 38, left: 'Perimeter', right: 'Sum of all sides', subject: 'Maths', difficulty: 'KS3' },
  { id: 39, left: 'Mean', right: 'Sum ÷ Count', subject: 'Maths', difficulty: 'KS3' },
  { id: 40, left: 'Ratio', right: 'Comparison of values', subject: 'Maths', difficulty: 'KS3' },
  // Maths - GCSE
  { id: 41, left: 'Area of circle', right: 'πr²', subject: 'Maths', difficulty: 'GCSE' },
  { id: 42, left: 'Circumference', right: '2πr', subject: 'Maths', difficulty: 'GCSE' },
  { id: 43, left: 'Pythagoras', right: 'a² + b² = c²', subject: 'Maths', difficulty: 'GCSE' },
  { id: 44, left: 'Gradient', right: 'Rise ÷ Run', subject: 'Maths', difficulty: 'GCSE' },
  // Maths - A-Level
  { id: 45, left: 'Quadratic formula', right: '(-b ± √(b²-4ac))/2a', subject: 'Maths', difficulty: 'A-Level' },
  { id: 46, left: 'Derivative of sin(x)', right: 'cos(x)', subject: 'Maths', difficulty: 'A-Level' },
  { id: 47, left: 'Integral of 1/x', right: 'ln|x| + C', subject: 'Maths', difficulty: 'A-Level' },
  { id: 48, left: 'Chain rule', right: 'dy/dx = dy/du × du/dx', subject: 'Maths', difficulty: 'A-Level' },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const TOTAL_TIME = 90;
const TOTAL_ROUNDS = 5;
const MATCHES_PER_ROUND = 4;

export default function PowerConnectPage() {
  const { profile } = useUserStore();

  // Get difficulty based on user's year group
  const yearGroup = profile?.yearGroup;
  const difficulty = getDifficultyFromYearGroup(yearGroup);

  // Filter connections based on difficulty level
  const availableConnections = CONNECTIONS.filter(c => {
    if (difficulty === 'A-Level') return true;
    if (difficulty === 'GCSE') return c.difficulty === 'KS3' || c.difficulty === 'GCSE';
    return c.difficulty === 'KS3';
  });

  // Game framework hooks
  const { gameState, isPlaying, startGame, finishGame, resetGame } = useGameState();
  const { time, start: startTimer, reset: resetTimer } = useGameTimer({
    initialTime: TOTAL_TIME,
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
  const { shake } = useScreenShake();
  const { trigger: particleTrigger, config: particleConfig, emitCorrect, emitWrong } = useParticles();

  // Game state
  const [round, setRound] = useState(1);
  const [leftItems, setLeftItems] = useState<ConnectionItem[]>([]);
  const [rightItems, setRightItems] = useState<ConnectionItem[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ correct: boolean; leftId: string; rightId: string } | null>(null);
  const [matchedCount, setMatchedCount] = useState(0);

  const startRound = useCallback((roundNum: number) => {
    const roundConnections = shuffleArray(availableConnections).slice(0, MATCHES_PER_ROUND);

    const left: ConnectionItem[] = roundConnections.map((c) => ({
      id: `left-${c.id}`,
      text: c.left,
      side: 'left' as const,
      connectionId: c.id,
      isMatched: false,
    }));

    const right: ConnectionItem[] = roundConnections.map((c) => ({
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
  }, [availableConnections]);

  const handleStart = useCallback(() => {
    resetScore();
    resetTimer();
    startGame();
    startTimer();
    startRound(1);
  }, [resetScore, resetTimer, startGame, startTimer, startRound]);

  const handleRestart = useCallback(() => {
    resetGame();
    handleStart();
  }, [resetGame, handleStart]);

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
    if (!selectedLeft || !selectedRight || !isPlaying) return;

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

        recordCorrect();
        playCorrect(combo + 1);
        emitCorrect();
        setMatchedCount(c => c + 1);
      } else {
        recordWrong();
        playWrong();
        shake(ShakePresets.wrong);
        emitWrong();
      }

      setFeedback(null);
      setSelectedLeft(null);
      setSelectedRight(null);
    }, 600);
  }, [selectedLeft, selectedRight, leftItems, rightItems, isPlaying, combo, recordCorrect, recordWrong, playCorrect, playWrong, shake, emitCorrect, emitWrong]);

  // Check for round complete
  useEffect(() => {
    if (matchedCount === MATCHES_PER_ROUND && isPlaying) {
      setTimeout(() => {
        if (round < TOTAL_ROUNDS) {
          startRound(round + 1);
        } else {
          finishGame();
        }
      }, 800);
    }
  }, [matchedCount, round, isPlaying, startRound, finishGame]);

  const getItemStyle = (item: ConnectionItem, isSelected: boolean) => {
    if (item.isMatched) {
      return 'bg-emerald-500/30 border-emerald-500 opacity-50';
    }
    if (feedback) {
      const isInvolved = item.id === feedback.leftId || item.id === feedback.rightId;
      if (isInvolved) {
        return feedback.correct
          ? 'bg-emerald-500/30 border-emerald-500'
          : 'bg-red-500/30 border-red-500';
      }
    }
    if (isSelected) {
      return 'bg-cyan-500/30 border-cyan-400 shadow-lg shadow-cyan-500/30';
    }
    return 'bg-white/10 border-white/20 hover:bg-white/15';
  };

  // Stats for GameFrame
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
    <GameFrame
      title="POWER CONNECT"
      subtitle="Connect matching concepts to power up!"
      icon={<Link2 size={40} className="text-cyan-400" />}
      color="cyan"
      gameState={gameState}
      onStart={handleStart}
      onRestart={handleRestart}
      time={time}
      totalTime={TOTAL_TIME}
      score={score}
      combo={combo}
      stats={stats}
    >
      {/* Particle effects */}
      <ParticleEffect trigger={particleTrigger} {...particleConfig} />

      {/* Round indicator */}
      <div className="text-center mb-4">
        <span className="text-sm font-medium text-gray-400">
          Round {round}/{TOTAL_ROUNDS}
        </span>
      </div>

      {/* Instructions */}
      <div className="text-center mb-4">
        <p className="text-gray-500 text-sm">Connect matching pairs</p>
      </div>

      {/* Game area */}
      <div className="flex gap-4 flex-1">
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
                {item.isMatched && <Check size={20} className="text-emerald-400" />}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Center connector */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-8 h-full flex flex-col items-center justify-center gap-4">
            {Array.from({ length: MATCHES_PER_ROUND }).map((_, i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${i < matchedCount ? 'bg-emerald-400' : 'bg-white/20'}`}
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
                {item.isMatched && <Check size={20} className="text-emerald-400" />}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="flex justify-center gap-2">
          {Array.from({ length: MATCHES_PER_ROUND }).map((_, i) => (
            <motion.div
              key={i}
              className={`w-12 h-2 rounded-full ${i < matchedCount ? 'bg-emerald-400' : 'bg-white/20'}`}
              animate={i < matchedCount ? { scale: [1, 1.2, 1] } : {}}
            />
          ))}
        </div>
      </div>
    </GameFrame>
  );
}
