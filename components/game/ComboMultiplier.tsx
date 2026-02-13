'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export interface ComboMultiplierProps {
  combo: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ComboMultiplier({
  combo,
  size = 'md',
  className,
}: ComboMultiplierProps) {
  if (combo <= 0) return null;

  const sizes = {
    sm: { container: 'text-sm', icon: 14 },
    md: { container: 'text-lg', icon: 20 },
    lg: { container: 'text-2xl', icon: 28 },
  };

  // Combo level determines visuals
  const level = Math.min(combo, 6);
  const multiplier = combo >= 6 ? 2.5 : combo >= 5 ? 2 : combo >= 4 ? 1.8 : combo >= 3 ? 1.5 : combo >= 2 ? 1.2 : 1;

  const colors = [
    '', // 0
    'text-blue-400', // 1
    'text-cyan-400', // 2
    'text-green-400', // 3
    'text-yellow-400', // 4
    'text-orange-400', // 5
    'text-pink-400', // 6+
  ];

  const glows = [
    '',
    'drop-shadow-[0_0_6px_rgba(96,165,250,0.5)]',
    'drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]',
    'drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]',
    'drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]',
    'drop-shadow-[0_0_14px_rgba(251,146,60,0.6)]',
    'drop-shadow-[0_0_16px_rgba(236,72,153,0.7)]',
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={combo}
        className={cn(
          'flex items-center gap-1 font-bold',
          sizes[size].container,
          colors[level],
          glows[level],
          className
        )}
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.5, opacity: 0, y: -10 }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      >
        <motion.div
          animate={
            level >= 5
              ? {
                  rotate: [0, -10, 10, -10, 10, 0],
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{ repeat: Infinity, duration: 0.4 }}
        >
          <Zap size={sizes[size].icon} fill="currentColor" />
        </motion.div>

        <span className="tabular-nums">
          {combo}x
        </span>

        {/* Multiplier badge for high combos */}
        {combo >= 2 && (
          <motion.span
            className="ml-1 text-xs opacity-80"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            ({multiplier}x XP)
          </motion.span>
        )}

        {/* MAX badge */}
        {combo >= 6 && (
          <motion.span
            className="ml-2 px-2 py-0.5 text-xs font-black bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ repeat: Infinity, duration: 0.3 }}
          >
            MAX!
          </motion.span>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

// Compact combo indicator for battle HUD
export function ComboIndicator({ combo }: { combo: number }) {
  if (combo <= 1) return null;

  return (
    <motion.div
      className="flex items-center gap-1"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 500 }}
    >
      <div className="flex">
        {[...Array(Math.min(combo, 6))].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full -ml-0.5 first:ml-0"
            style={{
              backgroundColor: i < 2 ? '#60a5fa' : i < 4 ? '#4ade80' : '#f472b6',
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.05 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
