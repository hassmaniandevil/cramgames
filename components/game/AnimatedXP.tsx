'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { playXPSound } from '@/lib/audio/synthSounds';

interface AnimatedXPProps {
  value: number;
  className?: string;
  showLabel?: boolean;
  animate?: boolean;
  onAnimationComplete?: () => void;
}

/**
 * Animated XP counter that counts up with sound and visual effects
 */
export function AnimatedXP({
  value,
  className,
  showLabel = true,
  animate = true,
  onAnimationComplete,
}: AnimatedXPProps) {
  const [displayValue, setDisplayValue] = useState(animate ? 0 : value);
  const [isAnimating, setIsAnimating] = useState(false);
  const previousValue = useRef(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!animate) {
      setDisplayValue(value);
      return;
    }

    // Skip animation for initial render
    if (previousValue.current === 0 && value === 0) {
      return;
    }

    const startValue = previousValue.current;
    const endValue = value;
    const diff = endValue - startValue;

    if (diff === 0) return;

    setIsAnimating(true);

    // Animate the count
    const duration = Math.min(1500, Math.max(500, diff * 10));
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(startValue + diff * eased);

      setDisplayValue(currentValue);

      // Play tick sound occasionally
      if (progress < 1 && Math.random() < 0.15) {
        playXPSound();
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(tick);
      } else {
        setIsAnimating(false);
        onAnimationComplete?.();
      }
    };

    animationRef.current = requestAnimationFrame(tick);
    previousValue.current = value;

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, animate, onAnimationComplete]);

  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      {/* Icon */}
      <motion.div
        animate={isAnimating ? {
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        } : {}}
        transition={{
          repeat: isAnimating ? Infinity : 0,
          duration: 0.3,
        }}
      >
        <Sparkles size={18} className="text-yellow-400" />
      </motion.div>

      {/* Value */}
      <div className="relative">
        <motion.span
          className={cn(
            'font-bold tabular-nums',
            isAnimating ? 'text-yellow-300' : 'text-white'
          )}
          animate={isAnimating ? { scale: [1, 1.05, 1] } : {}}
          transition={{ repeat: Infinity, duration: 0.2 }}
        >
          {displayValue.toLocaleString()}
        </motion.span>

        {/* Glow effect when animating */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              className="absolute inset-0 blur-md bg-yellow-400/50 -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Label */}
      {showLabel && (
        <span className="text-xs text-gray-400 font-medium">XP</span>
      )}
    </div>
  );
}

/**
 * XP Gain popup that floats up and fades out
 */
interface XPGainPopupProps {
  amount: number;
  trigger: number;
  x?: number;
  y?: number;
}

export function XPGainPopup({ amount, trigger, x, y }: XPGainPopupProps) {
  const [popups, setPopups] = useState<Array<{ id: number; amount: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (trigger > 0 && amount > 0) {
      const newPopup = {
        id: Date.now(),
        amount,
        x: x ?? (typeof window !== 'undefined' ? window.innerWidth / 2 : 200),
        y: y ?? (typeof window !== 'undefined' ? window.innerHeight / 2 : 200),
      };

      setPopups((prev) => [...prev, newPopup]);

      // Remove after animation
      setTimeout(() => {
        setPopups((prev) => prev.filter((p) => p.id !== newPopup.id));
      }, 1000);
    }
  }, [trigger, amount, x, y]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {popups.map((popup) => (
          <motion.div
            key={popup.id}
            initial={{
              x: popup.x,
              y: popup.y,
              opacity: 1,
              scale: 0.5,
            }}
            animate={{
              y: popup.y - 80,
              opacity: 0,
              scale: 1.2,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute flex items-center gap-1 font-bold text-yellow-300 text-lg"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <Sparkles size={16} />
            +{popup.amount}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default AnimatedXP;
