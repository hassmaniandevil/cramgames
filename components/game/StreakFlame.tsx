'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Shield } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useStreakStore, FlameIntensity } from '@/lib/stores/streakStore';

export interface StreakFlameProps {
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  showShields?: boolean;
  className?: string;
}

export function StreakFlame({
  size = 'md',
  showCount = true,
  showShields = false,
  className,
}: StreakFlameProps) {
  const { currentStreak, flameIntensity, shields } = useStreakStore();
  const availableShields = shields.filter((s) => !s.used).length;

  const sizes = {
    sm: { icon: 20, text: 'text-sm' },
    md: { icon: 28, text: 'text-base' },
    lg: { icon: 40, text: 'text-xl' },
  };

  const flameColors: Record<FlameIntensity, string> = {
    cold: 'text-slate-500',
    warm: 'text-orange-500',
    hot: 'text-red-500',
    blazing: 'text-yellow-400',
  };

  const flameGlows: Record<FlameIntensity, string> = {
    cold: '',
    warm: 'drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]',
    hot: 'drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]',
    blazing: 'drop-shadow-[0_0_16px_rgba(234,179,8,0.7)]',
  };

  const getAnimation = (intensity: FlameIntensity) => {
    if (intensity === 'cold') return undefined;
    if (intensity === 'warm') return { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 0.5 } };
    if (intensity === 'hot') return { scale: [1, 1.08, 1], rotate: [-2, 2, -2], transition: { repeat: Infinity, duration: 0.3 } };
    return { scale: [1, 1.1, 0.95, 1.1, 1], rotate: [-3, 3, -3, 3, 0], transition: { repeat: Infinity, duration: 0.25 } };
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Flame icon with animation */}
      <motion.div
        className={cn('relative', flameColors[flameIntensity])}
        animate={getAnimation(flameIntensity)}
      >
        <Flame
          size={sizes[size].icon}
          className={cn('flame-icon', flameGlows[flameIntensity])}
          fill={flameIntensity !== 'cold' ? 'currentColor' : 'none'}
        />

        {/* Particle effects for blazing */}
        {flameIntensity === 'blazing' && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                style={{
                  left: '50%',
                  bottom: '0',
                }}
                animate={{
                  y: [-5, -20],
                  x: [(i - 1) * 5, (i - 1) * 8],
                  opacity: [1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.6,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Streak count */}
      {showCount && (
        <AnimatePresence mode="wait">
          <motion.span
            key={currentStreak}
            className={cn(
              'font-bold',
              sizes[size].text,
              flameColors[flameIntensity]
            )}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {currentStreak}
          </motion.span>
        </AnimatePresence>
      )}

      {/* Shields indicator */}
      {showShields && availableShields > 0 && (
        <div className="flex items-center gap-1 ml-2 text-cyan-400">
          <Shield size={16} />
          <span className="text-sm font-medium">{availableShields}</span>
        </div>
      )}
    </div>
  );
}

// Large streak display for profile/celebrations
export function StreakDisplay({ className }: { className?: string }) {
  const { currentStreak, longestStreak, flameIntensity } = useStreakStore();

  return (
    <div className={cn('text-center', className)}>
      <div className="flex items-center justify-center gap-4">
        <StreakFlame size="lg" showCount={false} />
        <motion.div
          className="text-5xl font-black"
          animate={
            flameIntensity === 'blazing'
              ? { scale: [1, 1.05, 1] }
              : {}
          }
          transition={{ repeat: Infinity, duration: 0.5 }}
        >
          <span
            className={cn(
              flameIntensity === 'cold' && 'text-slate-500',
              flameIntensity === 'warm' && 'text-orange-500',
              flameIntensity === 'hot' && 'text-red-500',
              flameIntensity === 'blazing' && 'text-yellow-400'
            )}
          >
            {currentStreak}
          </span>
        </motion.div>
      </div>
      <p className="mt-2 text-white/60 text-sm">
        day streak{currentStreak !== 1 ? 's' : ''}
      </p>
      {longestStreak > currentStreak && (
        <p className="mt-1 text-white/40 text-xs">
          Best: {longestStreak} days
        </p>
      )}
    </div>
  );
}
