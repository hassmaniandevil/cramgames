'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { playTimerWarningSound } from '@/lib/audio/synthSounds';

interface GameTimerProps {
  time: number;
  totalTime?: number;
  isRunning?: boolean;
  isCountdown?: boolean;
  showProgress?: boolean;
  className?: string;
  onTimeWarning?: () => void;
}

/**
 * Format time as M:SS or 0:SS
 */
function formatTime(seconds: number): string {
  const mins = Math.floor(Math.abs(seconds) / 60);
  const secs = Math.abs(seconds) % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function GameTimer({
  time,
  totalTime,
  isRunning = true,
  isCountdown = true,
  showProgress = true,
  className,
  onTimeWarning,
}: GameTimerProps) {
  const isUrgent = isCountdown && time <= 10 && time > 5;
  const isCritical = isCountdown && time <= 5;
  const progress = totalTime ? (isCountdown ? time / totalTime : 1 - time / totalTime) : 1;
  const lastWarningRef = useRef<number>(0);

  // Play warning sound at specific times
  useEffect(() => {
    if (isCountdown && isRunning && time <= 10 && time > 0) {
      if (time !== lastWarningRef.current && time <= 5) {
        playTimerWarningSound();
        onTimeWarning?.();
      }
      lastWarningRef.current = time;
    }
  }, [time, isCountdown, isRunning, onTimeWarning]);

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Timer icon */}
      <motion.div
        animate={isCritical ? {
          scale: [1, 1.2, 1],
          rotate: [0, -10, 10, 0],
        } : isUrgent ? {
          scale: [1, 1.1, 1],
        } : {}}
        transition={{
          repeat: isCritical || isUrgent ? Infinity : 0,
          duration: isCritical ? 0.3 : 0.5,
        }}
        className={cn(
          'flex items-center justify-center',
          isCritical ? 'text-red-400' : isUrgent ? 'text-orange-400' : 'text-gray-400'
        )}
      >
        {isCritical ? (
          <AlertTriangle size={18} />
        ) : (
          <Clock size={18} />
        )}
      </motion.div>

      {/* Time display */}
      <div className="relative">
        <motion.span
          className={cn(
            'font-mono font-bold text-lg tabular-nums',
            isCritical ? 'text-red-400' : isUrgent ? 'text-orange-400' : 'text-white'
          )}
          animate={isCritical ? {
            scale: [1, 1.1, 1],
          } : {}}
          transition={{
            repeat: isCritical ? Infinity : 0,
            duration: 0.5,
          }}
        >
          {formatTime(time)}
        </motion.span>

        {/* Pulse effect for critical time */}
        <AnimatePresence>
          {isCritical && (
            <motion.div
              className="absolute inset-0 rounded bg-red-500/30 blur-md -z-10"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
              exit={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      {showProgress && totalTime && (
        <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className={cn(
              'h-full rounded-full',
              isCritical
                ? 'bg-gradient-to-r from-red-500 to-red-400'
                : isUrgent
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-400'
                  : 'bg-gradient-to-r from-purple-500 to-blue-400'
            )}
            initial={{ width: '100%' }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </div>
  );
}

/**
 * Countdown overlay (3, 2, 1, GO!)
 */
interface CountdownOverlayProps {
  isActive: boolean;
  onComplete: () => void;
}

export function CountdownOverlay({ isActive, onComplete }: CountdownOverlayProps) {
  const [count, setCount] = useState<number | 'GO' | null>(null);

  useEffect(() => {
    if (!isActive) {
      setCount(null);
      return;
    }

    setCount(3);
    const counts = [3, 2, 1, 'GO' as const];
    let index = 0;

    const interval = setInterval(() => {
      index++;
      if (index < counts.length) {
        setCount(counts[index]);
      } else {
        clearInterval(interval);
        setCount(null);
        onComplete();
      }
    }, 800);

    return () => clearInterval(interval);
  }, [isActive, onComplete]);

  return (
    <AnimatePresence>
      {count !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            key={count}
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{
              type: 'spring',
              damping: 15,
              stiffness: 300,
            }}
            className={cn(
              'text-8xl font-black',
              count === 'GO'
                ? 'text-green-400'
                : 'text-white'
            )}
          >
            {count}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default GameTimer;
