'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Gift, ChevronRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useDailyMissionStore, DailyMission as DailyMissionType } from '@/lib/stores/dailyMissionStore';
import { useProgressStore } from '@/lib/stores/progressStore';
import { playMissionCompleteSound, playXPSound } from '@/lib/audio/synthSounds';

/**
 * Daily Mystery Mission Component
 *
 * Shows today's mission and progress.
 * Creates anticipation and daily engagement.
 *
 * ADHD Principle: Novelty & variation, clear progress, instant reward
 */

interface DailyMissionProps {
  className?: string;
  compact?: boolean;
  onStartMission?: () => void;
}

export function DailyMission({ className, compact = false, onStartMission }: DailyMissionProps) {
  const { getMission, claimReward } = useDailyMissionStore();
  const { addXP } = useProgressStore();
  const [mission, setMission] = useState<DailyMissionType | null>(null);
  const [showReward, setShowReward] = useState(false);
  const [claimedXP, setClaimedXP] = useState(0);

  useEffect(() => {
    setMission(getMission());
  }, [getMission]);

  if (!mission) return null;

  const progress = Math.min(100, (mission.progress / mission.target) * 100);
  const isComplete = mission.completed;
  const isClaimed = !!mission.claimedAt;

  const handleClaim = () => {
    if (!isComplete || isClaimed) return;

    const xp = claimReward();
    if (xp > 0) {
      addXP(xp);
      setClaimedXP(xp);
      setShowReward(true);
      playMissionCompleteSound();

      setTimeout(() => {
        setShowReward(false);
        setMission(getMission());
      }, 2000);
    }
  };

  if (compact) {
    return (
      <motion.button
        onClick={isComplete && !isClaimed ? handleClaim : onStartMission}
        className={cn(
          'flex items-center gap-3 px-4 py-3 rounded-xl border transition-all',
          isComplete && !isClaimed
            ? 'bg-yellow-500/20 border-yellow-500/50 hover:bg-yellow-500/30'
            : 'bg-surface-elevated border-border hover:border-accent/50',
          className
        )}
        whileTap={{ scale: 0.98 }}
      >
        <div className={cn(
          'w-10 h-10 rounded-lg flex items-center justify-center',
          isComplete ? 'bg-yellow-500/20' : 'bg-accent/20'
        )}>
          {isComplete ? (
            <Gift size={20} className="text-yellow-500" />
          ) : (
            <Sparkles size={20} className="text-accent" />
          )}
        </div>

        <div className="flex-1 text-left">
          <div className="text-sm font-medium text-text-primary">
            {isComplete && !isClaimed ? 'Claim Reward!' : mission.title}
          </div>
          <div className="text-xs text-text-muted">
            {mission.progress}/{mission.target} • +{mission.xpReward} XP
          </div>
        </div>

        {/* Progress or claim indicator */}
        {isComplete && !isClaimed ? (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <Gift size={18} className="text-yellow-500" />
          </motion.div>
        ) : (
          <div className="w-12 h-1.5 bg-surface rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        )}
      </motion.button>
    );
  }

  return (
    <>
      <motion.div
        className={cn(
          'relative overflow-hidden rounded-2xl border p-5',
          isComplete && !isClaimed
            ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/10 border-yellow-500/30'
            : 'bg-surface-elevated border-border',
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Sparkle decorations for unclaimed complete mission */}
        {isComplete && !isClaimed && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-yellow-500/30"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 3) * 30}%`,
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              >
                <Sparkles size={16} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={cn(
              'w-12 h-12 rounded-xl flex items-center justify-center',
              isComplete ? 'bg-yellow-500/20' : 'bg-accent/20'
            )}>
              {isClaimed ? (
                <Check size={24} className="text-green-500" />
              ) : isComplete ? (
                <Gift size={24} className="text-yellow-500" />
              ) : (
                <Sparkles size={24} className="text-accent" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">Daily Mission</h3>
              <p className="text-sm text-text-muted">{mission.title}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-yellow-500">+{mission.xpReward} XP</div>
            <div className="text-xs text-text-muted">Reward</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary mb-4">{mission.description}</p>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-text-muted">Progress</span>
            <span className="font-medium text-text-primary">
              {mission.progress}/{mission.target}
            </span>
          </div>
          <div className="h-3 bg-surface rounded-full overflow-hidden">
            <motion.div
              className={cn(
                'h-full rounded-full',
                isComplete ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-accent'
              )}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Action button */}
        {isClaimed ? (
          <div className="text-center text-sm text-green-500 font-medium">
            Completed! Come back tomorrow for a new mission.
          </div>
        ) : isComplete ? (
          <motion.button
            onClick={handleClaim}
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Gift size={18} />
            Claim {mission.xpReward} XP!
          </motion.button>
        ) : (
          <button
            onClick={onStartMission}
            className="w-full py-3 bg-accent/20 text-accent font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-accent/30 transition-colors"
          >
            Start Mission
            <ChevronRight size={18} />
          </button>
        )}
      </motion.div>

      {/* Reward popup */}
      <AnimatePresence>
        {showReward && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-surface rounded-2xl p-8 text-center max-w-sm mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <motion.div
                className="text-6xl mb-4"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
              >
                🎉
              </motion.div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">Mission Complete!</h2>
              <motion.div
                className="text-3xl font-black text-yellow-500"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: 3, duration: 0.3 }}
              >
                +{claimedXP} XP
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default DailyMission;
