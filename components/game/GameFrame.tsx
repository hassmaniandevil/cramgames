'use client';

import { ReactNode, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { X, Play, RotateCcw, Trophy, Target, Flame, Sparkles, Home } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useUserStore } from '@/lib/stores/userStore';
import { useProgressStore } from '@/lib/stores/progressStore';
import { getDifficultyName, getPointsMultiplier } from '@/lib/utils/difficulty';
import { initAudio, playGoSound, playSuccessSound, playPerfectSound } from '@/lib/audio/synthSounds';
import { GameTimer } from './GameTimer';
import { ComboCounter } from './ComboCounter';
import { AnimatedXP, XPGainPopup } from './AnimatedXP';
import { ParticleEffect, useParticles } from './ParticleEffect';
import { useScreenShake, ShakePresets } from '@/lib/hooks/useScreenShake';

export type GameState = 'ready' | 'playing' | 'paused' | 'finished';

interface GameStats {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  combo: number;
  maxCombo: number;
  accuracy: number;
  xpEarned: number;
  isPerfect: boolean;
}

interface GameFrameProps {
  // Game identity
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  color?: string; // Tailwind color class (e.g., 'purple', 'green')

  // Game state
  gameState: GameState;
  onStart: () => void;
  onRestart: () => void;
  onClose?: () => void;

  // Timer (optional)
  time?: number;
  totalTime?: number;
  showTimer?: boolean;

  // Score tracking
  score?: number;
  combo?: number;
  showCombo?: boolean;

  // Results
  stats?: GameStats;

  // Zone tracking (for progression)
  zoneId?: string;

  // Content
  children: ReactNode;

  // Styling
  className?: string;
  contentClassName?: string;
}

/**
 * GameFrame - Reusable wrapper for all games
 *
 * Provides:
 * - Ready screen with play button
 * - Header with timer, score, combo
 * - Finished screen with results
 * - Automatic XP tracking
 * - Screen shake integration
 * - Particle effects
 */
export function GameFrame({
  title,
  subtitle,
  icon,
  color = 'purple',

  gameState,
  onStart,
  onRestart,
  onClose,

  time,
  totalTime,
  showTimer = true,

  score = 0,
  combo = 0,
  showCombo = true,

  stats,
  zoneId,

  children,
  className,
  contentClassName,
}: GameFrameProps) {
  const router = useRouter();
  const { profile } = useUserStore();
  const { addXP, updateZoneMastery } = useProgressStore();
  const { shake, shakeStyle } = useScreenShake();
  const { trigger: particleTrigger, config: particleConfig, emitConfetti } = useParticles();

  const yearGroup = profile?.yearGroup || 10;
  const difficultyName = getDifficultyName(yearGroup);
  const pointsMultiplier = getPointsMultiplier(yearGroup);

  // Initialize audio on first interaction
  useEffect(() => {
    initAudio();
  }, []);

  // Handle close
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    } else {
      router.push('/');
    }
  }, [onClose, router]);

  // Handle game finish - save progress
  useEffect(() => {
    if (gameState === 'finished' && stats) {
      // Add XP
      addXP(stats.xpEarned);

      // Update zone mastery if zone provided
      if (zoneId) {
        updateZoneMastery(zoneId, stats.accuracy >= 80, stats.accuracy);
      }

      // Play sound
      if (stats.isPerfect) {
        playPerfectSound();
        emitConfetti();
      } else {
        playSuccessSound();
      }
    }
  }, [gameState, stats, zoneId, addXP, updateZoneMastery, emitConfetti]);

  // Color classes
  const colorClasses = {
    bg: `bg-${color}-500/20`,
    border: `border-${color}-500/50`,
    text: `text-${color}-400`,
    button: `bg-${color}-600 hover:bg-${color}-500`,
    gradient: `from-${color}-500 to-${color}-600`,
  };

  return (
    <div
      className={cn(
        'min-h-screen bg-[#0f0f17] text-white flex flex-col',
        className
      )}
      style={shakeStyle}
    >
      {/* Particle effects layer */}
      <ParticleEffect trigger={particleTrigger} {...particleConfig} />

      {/* Ready Screen */}
      <AnimatePresence mode="wait">
        {gameState === 'ready' && (
          <motion.div
            key="ready"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex-1 flex flex-col items-center justify-center p-6"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>

            {/* Game icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ type: 'spring', damping: 10 }}
              className={cn(
                'w-24 h-24 rounded-2xl flex items-center justify-center mb-6',
                `bg-${color}-500/20 border-2 border-${color}-500/50`
              )}
            >
              {icon || <Target size={40} className={`text-${color}-400`} />}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold text-center mb-2"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-gray-400 text-center mb-6"
              >
                {subtitle}
              </motion.p>
            )}

            {/* Difficulty badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              <Sparkles size={16} className="text-yellow-400" />
              <span className="text-sm font-medium">{difficultyName}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-sm text-gray-400">Year {yearGroup}</span>
              {pointsMultiplier > 1 && (
                <>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-sm text-yellow-400">×{pointsMultiplier} XP</span>
                </>
              )}
            </motion.div>

            {/* Play button */}
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                playGoSound();
                onStart();
              }}
              className={cn(
                'flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg text-white',
                `bg-gradient-to-r ${colorClasses.gradient}`
              )}
            >
              <Play size={24} fill="currentColor" />
              Play
            </motion.button>
          </motion.div>
        )}

        {/* Playing Screen */}
        {gameState === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              {/* Left: Close + Title */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-400" />
                </button>
                <span className="font-semibold text-sm text-gray-300">{title}</span>
              </div>

              {/* Center: Timer */}
              {showTimer && time !== undefined && (
                <GameTimer
                  time={time}
                  totalTime={totalTime}
                  showProgress={!!totalTime}
                />
              )}

              {/* Right: Score + Combo */}
              <div className="flex items-center gap-3">
                {showCombo && <ComboCounter combo={combo} />}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5">
                  <Trophy size={16} className="text-yellow-400" />
                  <span className="font-bold tabular-nums">{score.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Game content */}
            <div className={cn('flex-1 p-4', contentClassName)}>
              {children}
            </div>
          </motion.div>
        )}

        {/* Finished Screen */}
        {gameState === 'finished' && stats && (
          <motion.div
            key="finished"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col items-center justify-center p-6"
          >
            {/* Trophy animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', damping: 10 }}
              className={cn(
                'w-24 h-24 rounded-full flex items-center justify-center mb-6',
                stats.isPerfect
                  ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
                  : stats.accuracy >= 80
                    ? 'bg-gradient-to-br from-green-400 to-emerald-500'
                    : stats.accuracy >= 60
                      ? 'bg-gradient-to-br from-blue-400 to-cyan-500'
                      : 'bg-gradient-to-br from-purple-400 to-pink-500'
              )}
            >
              <Trophy size={48} className="text-white" />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold mb-2"
            >
              {stats.isPerfect ? 'Perfect!' : stats.accuracy >= 80 ? 'Great Job!' : 'Good Effort!'}
            </motion.h2>

            {/* Score */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-4xl font-black mb-6"
            >
              {stats.score.toLocaleString()}
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4 mb-6 w-full max-w-xs"
            >
              <StatCard
                icon={<Target size={20} className="text-green-400" />}
                label="Accuracy"
                value={`${stats.accuracy}%`}
              />
              <StatCard
                icon={<Flame size={20} className="text-orange-400" />}
                label="Max Combo"
                value={`×${stats.maxCombo}`}
              />
              <StatCard
                icon={<Trophy size={20} className="text-blue-400" />}
                label="Correct"
                value={`${stats.correctAnswers}/${stats.correctAnswers + stats.wrongAnswers}`}
              />
              <StatCard
                icon={<Sparkles size={20} className="text-yellow-400" />}
                label="XP Earned"
                value={`+${stats.xpEarned}`}
              />
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="flex gap-3"
            >
              <button
                onClick={handleClose}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Home size={20} />
                Home
              </button>
              <button
                onClick={onRestart}
                className={cn(
                  'flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white',
                  `bg-gradient-to-r ${colorClasses.gradient}`
                )}
              >
                <RotateCcw size={20} />
                Play Again
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Stat card for results screen
 */
function StatCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
      {icon}
      <div>
        <div className="text-xs text-gray-400">{label}</div>
        <div className="font-bold">{value}</div>
      </div>
    </div>
  );
}

/**
 * Export shake hook for games to use
 */
export { useScreenShake, ShakePresets };

export default GameFrame;
