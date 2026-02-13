'use client';

import { motion } from 'framer-motion';
import { X, Zap, Target, Timer } from 'lucide-react';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { StreakFlame } from '@/components/game/StreakFlame';
import { ComboIndicator } from '@/components/game/ComboMultiplier';
import { cn } from '@/lib/utils/cn';

export interface BattleHUDProps {
  zoneName: string;
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  combo: number;
  xpEarned: number;
  timeRemaining?: number; // seconds, optional
  isBoss?: boolean;
  onExit?: () => void;
}

export function BattleHUD({
  zoneName,
  currentQuestion,
  totalQuestions,
  score,
  combo,
  xpEarned,
  timeRemaining,
  isBoss = false,
  onExit,
}: BattleHUDProps) {
  const progress = ((currentQuestion) / totalQuestions) * 100;

  return (
    <div className="w-full space-y-4">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        {/* Exit button */}
        <button
          onClick={onExit}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X size={20} className="text-white/60" />
        </button>

        {/* Zone name */}
        <div className="flex items-center gap-2">
          {isBoss && (
            <motion.span
              className="text-orange-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              👑
            </motion.span>
          )}
          <span className={cn(
            'font-semibold text-sm',
            isBoss ? 'text-orange-400' : 'text-white/80'
          )}>
            {zoneName}
          </span>
        </div>

        {/* Streak */}
        <StreakFlame size="sm" showShields={false} />
      </div>

      {/* Progress bar */}
      <div className="relative">
        <ProgressBar
          value={currentQuestion}
          max={totalQuestions}
          size="sm"
          variant={isBoss ? 'mastery' : 'default'}
        />
        {/* Question indicator dots */}
        <div className="flex justify-between mt-2">
          {[...Array(totalQuestions)].map((_, i) => (
            <motion.div
              key={i}
              className={cn(
                'w-2 h-2 rounded-full',
                i < currentQuestion
                  ? 'bg-purple-500'
                  : i === currentQuestion
                  ? 'bg-white'
                  : 'bg-white/20'
              )}
              initial={i === currentQuestion ? { scale: 0 } : {}}
              animate={i === currentQuestion ? { scale: 1 } : {}}
            />
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-between text-sm">
        {/* Score */}
        <div className="flex items-center gap-2 text-green-400">
          <Target size={16} />
          <span className="font-medium">
            {score}/{totalQuestions}
          </span>
        </div>

        {/* Combo */}
        <div className="flex items-center gap-2">
          <ComboIndicator combo={combo} />
          {combo > 1 && (
            <motion.span
              className={cn(
                'font-bold text-sm',
                combo >= 5 ? 'text-pink-400' : combo >= 3 ? 'text-yellow-400' : 'text-cyan-400'
              )}
              key={combo}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
            >
              {combo}x
            </motion.span>
          )}
        </div>

        {/* XP earned */}
        <div className="flex items-center gap-1 text-yellow-400">
          <Zap size={16} fill="currentColor" />
          <motion.span
            className="font-medium tabular-nums"
            key={xpEarned}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
          >
            +{xpEarned}
          </motion.span>
        </div>

        {/* Timer if present */}
        {timeRemaining !== undefined && (
          <div
            className={cn(
              'flex items-center gap-1',
              timeRemaining < 10 ? 'text-red-400' : 'text-white/60'
            )}
          >
            <Timer size={16} />
            <span className="font-mono tabular-nums">
              {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// Boss battle intro animation
export function BossIntro({
  bossName,
  bossDescription,
  onStart,
}: {
  bossName: string;
  bossDescription?: string;
  onStart: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="text-center p-8"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', delay: 0.2 }}
      >
        {/* Boss icon */}
        <motion.div
          className="text-8xl mb-6"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [-5, 5, -5],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          👑
        </motion.div>

        {/* Boss name */}
        <motion.h1
          className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {bossName}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl text-orange-300/80 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          BOSS BATTLE
        </motion.p>

        {bossDescription && (
          <motion.p
            className="text-white/60 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {bossDescription}
          </motion.p>
        )}

        {/* Start button */}
        <motion.button
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg shadow-lg shadow-orange-500/30"
          onClick={onStart}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          CHALLENGE THE BOSS
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
