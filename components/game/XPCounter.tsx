'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export interface XPCounterProps {
  value: number;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

export function XPCounter({
  value,
  animated = true,
  size = 'md',
  showIcon = true,
  className,
}: XPCounterProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const previousValue = useRef(value);

  useEffect(() => {
    if (!animated || value === previousValue.current) {
      setDisplayValue(value);
      previousValue.current = value;
      return;
    }

    // Animate counting up
    const diff = value - previousValue.current;
    const steps = Math.min(Math.abs(diff), 30);
    const stepSize = diff / steps;
    let current = previousValue.current;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      current += stepSize;

      if (step >= steps) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.round(current));
      }
    }, 30);

    previousValue.current = value;

    return () => clearInterval(interval);
  }, [value, animated]);

  const sizes = {
    sm: { text: 'text-sm', icon: 14 },
    md: { text: 'text-base', icon: 18 },
    lg: { text: 'text-xl', icon: 24 },
  };

  return (
    <div
      className={cn(
        'flex items-center gap-1.5 font-bold text-yellow-400',
        sizes[size].text,
        className
      )}
    >
      {showIcon && (
        <Star
          size={sizes[size].icon}
          className="drop-shadow-[0_0_6px_rgba(250,204,21,0.5)]"
          fill="currentColor"
        />
      )}
      <motion.span
        className="tabular-nums"
        key={displayValue}
        initial={animated ? { scale: 1.2 } : {}}
        animate={{ scale: 1 }}
      >
        {displayValue.toLocaleString()}
      </motion.span>
      <span className="text-yellow-400/60 font-normal">XP</span>
    </div>
  );
}

// Floating XP gain component
export interface XPGainProps {
  amount: number;
  x?: number;
  y?: number;
  onComplete?: () => void;
}

export function XPGain({ amount, x = 50, y = 50, onComplete }: XPGainProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 1, scale: 0.5, y: 0 }}
      animate={{
        opacity: 0,
        scale: 1.5,
        y: -60,
      }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      +{amount} XP
    </motion.div>
  );
}

// XP gain queue manager
export function XPGainManager() {
  const [gains, setGains] = useState<Array<{ id: number; amount: number; x: number; y: number }>>([]);
  const nextId = useRef(0);

  // Expose function to trigger XP gains
  useEffect(() => {
    (window as any).showXPGain = (amount: number, x?: number, y?: number) => {
      const id = nextId.current++;
      setGains((prev) => [
        ...prev,
        { id, amount, x: x ?? 50, y: y ?? 50 },
      ]);
    };

    return () => {
      delete (window as any).showXPGain;
    };
  }, []);

  const handleComplete = (id: number) => {
    setGains((prev) => prev.filter((g) => g.id !== id));
  };

  return (
    <AnimatePresence>
      {gains.map((gain) => (
        <XPGain
          key={gain.id}
          amount={gain.amount}
          x={gain.x}
          y={gain.y}
          onComplete={() => handleComplete(gain.id)}
        />
      ))}
    </AnimatePresence>
  );
}

// Level up celebration
export interface LevelUpProps {
  level: number;
  onComplete?: () => void;
}

export function LevelUpCelebration({ level, onComplete }: LevelUpProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background overlay */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Level up content */}
      <motion.div
        className="relative flex flex-col items-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <motion.div
          className="text-6xl mb-4"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        >
          <TrendingUp className="w-20 h-20 text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.7)]" />
        </motion.div>

        <motion.h2
          className="text-4xl font-black text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          LEVEL UP!
        </motion.h2>

        <motion.div
          className="text-7xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
        >
          {level}
        </motion.div>

        {/* Particle burst */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            return (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-yellow-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{
                  x: Math.cos(angle) * 150,
                  y: Math.sin(angle) * 150,
                  opacity: 0,
                }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              />
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
