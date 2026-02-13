'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

export interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'xp' | 'health' | 'mastery';
  animated?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  showLabel = false,
  size = 'md',
  variant = 'default',
  animated = true,
  className,
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const sizes = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  const variants = {
    default: 'from-purple-500 to-pink-500',
    xp: 'from-yellow-400 to-orange-500',
    health: 'from-green-400 to-emerald-500',
    mastery: 'from-cyan-400 to-blue-500',
  };

  const glows = {
    default: 'shadow-purple-500/50',
    xp: 'shadow-yellow-500/50',
    health: 'shadow-green-500/50',
    mastery: 'shadow-cyan-500/50',
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Track */}
      <div
        className={cn(
          'w-full rounded-full bg-galaxy-dark/80 overflow-hidden',
          sizes[size]
        )}
      >
        {/* Fill */}
        <motion.div
          className={cn(
            'h-full rounded-full bg-gradient-to-r relative',
            variants[variant],
            percentage > 0 && `shadow-lg ${glows[variant]}`
          )}
          initial={animated ? { width: 0 } : { width: `${percentage}%` }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
        </motion.div>
      </div>

      {/* Label */}
      {showLabel && (
        <div className="flex justify-between mt-1 text-xs text-white/60">
          <span>{value.toLocaleString()}</span>
          <span>{max.toLocaleString()}</span>
        </div>
      )}
    </div>
  );
}

// XP-specific progress bar with level indicator
export interface XPBarProps {
  currentXP: number;
  xpForLevel: number;
  level: number;
  className?: string;
}

export function XPBar({ currentXP, xpForLevel, level, className }: XPBarProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {/* Level badge */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-galaxy-dark shadow-lg shadow-yellow-500/30">
        {level}
      </div>

      {/* Progress */}
      <div className="flex-1">
        <ProgressBar value={currentXP} max={xpForLevel} variant="xp" size="md" />
        <div className="flex justify-between mt-1 text-xs">
          <span className="text-yellow-400 font-medium">
            {currentXP.toLocaleString()} XP
          </span>
          <span className="text-white/50">
            {xpForLevel.toLocaleString()} to next level
          </span>
        </div>
      </div>
    </div>
  );
}

// Circular progress for mastery
export interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  variant?: 'default' | 'bronze' | 'silver' | 'gold';
  showValue?: boolean;
  className?: string;
}

export function CircularProgress({
  value,
  size = 60,
  strokeWidth = 4,
  variant = 'default',
  showValue = true,
  className,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  const colors = {
    default: { stroke: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.5)' },
    bronze: { stroke: '#ca8a04', glow: 'rgba(202, 138, 4, 0.5)' },
    silver: { stroke: '#9ca3af', glow: 'rgba(156, 163, 175, 0.5)' },
    gold: { stroke: '#eab308', glow: 'rgba(234, 179, 8, 0.5)' },
  };

  return (
    <div className={cn('relative inline-flex', className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colors[variant].stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            filter: `drop-shadow(0 0 6px ${colors[variant].glow})`,
          }}
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-white">{Math.round(value)}%</span>
        </div>
      )}
    </div>
  );
}
