'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Zap, Star, Crown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface ComboCounterProps {
  combo: number;
  className?: string;
  showMultiplier?: boolean;
}

/**
 * Get combo tier based on count
 */
function getComboTier(combo: number): {
  tier: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: typeof Flame;
  multiplier: number;
} {
  if (combo >= 20) {
    return {
      tier: 'LEGENDARY',
      color: 'text-yellow-300',
      bgColor: 'bg-gradient-to-r from-yellow-500/30 to-orange-500/30',
      borderColor: 'border-yellow-400',
      icon: Crown,
      multiplier: 4,
    };
  }
  if (combo >= 15) {
    return {
      tier: 'EPIC',
      color: 'text-purple-300',
      bgColor: 'bg-gradient-to-r from-purple-500/30 to-pink-500/30',
      borderColor: 'border-purple-400',
      icon: Star,
      multiplier: 3,
    };
  }
  if (combo >= 10) {
    return {
      tier: 'SUPER',
      color: 'text-blue-300',
      bgColor: 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30',
      borderColor: 'border-blue-400',
      icon: Zap,
      multiplier: 2.5,
    };
  }
  if (combo >= 5) {
    return {
      tier: 'GREAT',
      color: 'text-green-300',
      bgColor: 'bg-gradient-to-r from-green-500/30 to-emerald-500/30',
      borderColor: 'border-green-400',
      icon: Flame,
      multiplier: 2,
    };
  }
  if (combo >= 2) {
    return {
      tier: 'COMBO',
      color: 'text-orange-300',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-400/50',
      icon: Flame,
      multiplier: 1.5,
    };
  }
  return {
    tier: '',
    color: 'text-gray-400',
    bgColor: 'bg-white/5',
    borderColor: 'border-white/10',
    icon: Flame,
    multiplier: 1,
  };
}

export function ComboCounter({ combo, className, showMultiplier = true }: ComboCounterProps) {
  const tier = getComboTier(combo);
  const Icon = tier.icon;
  const isMilestone = combo > 0 && combo % 5 === 0;

  if (combo < 2) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={combo}
        initial={{ scale: 0.5, opacity: 0, y: 10 }}
        animate={{
          scale: isMilestone ? [1, 1.2, 1] : 1,
          opacity: 1,
          y: 0,
        }}
        exit={{ scale: 0.8, opacity: 0, y: -10 }}
        transition={{
          duration: 0.3,
          scale: isMilestone ? { duration: 0.5, times: [0, 0.5, 1] } : undefined,
        }}
        className={cn(
          'flex items-center gap-2 px-3 py-1.5 rounded-full border-2',
          tier.bgColor,
          tier.borderColor,
          className
        )}
      >
        {/* Animated icon */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: combo >= 10 ? [0, 10, -10, 0] : 0,
          }}
          transition={{
            repeat: Infinity,
            duration: combo >= 10 ? 0.5 : 1,
          }}
        >
          <Icon size={18} className={tier.color} />
        </motion.div>

        {/* Combo count */}
        <div className="flex items-baseline gap-1">
          <span className={cn('font-bold text-lg', tier.color)}>
            {combo}
          </span>
          {tier.tier && (
            <span className={cn('text-xs font-semibold uppercase', tier.color)}>
              {tier.tier}
            </span>
          )}
        </div>

        {/* Multiplier */}
        {showMultiplier && tier.multiplier > 1 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={cn(
              'text-xs font-bold px-1.5 py-0.5 rounded bg-black/30',
              tier.color
            )}
          >
            ×{tier.multiplier}
          </motion.span>
        )}

        {/* Milestone glow effect */}
        {isMilestone && (
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.5 }}
            style={{
              background: `radial-gradient(circle, ${tier.color.replace('text-', '')}40 0%, transparent 70%)`,
            }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default ComboCounter;
