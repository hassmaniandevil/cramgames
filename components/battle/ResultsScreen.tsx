'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Star, Trophy, Zap, Target, TrendingUp, ArrowRight, RotateCcw, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CircularProgress } from '@/components/ui/ProgressBar';
import { Confetti } from '@/components/game/Confetti';
import { cn } from '@/lib/utils/cn';
import { BattleResults } from '@/lib/stores/battleStore';

export interface ResultsScreenProps {
  results: BattleResults;
  onContinue: () => void;
  onRetry: () => void;
  onViewCapsules?: () => void;
  autoAdvanceSeconds?: number; // Auto-advance after X seconds (ADHD momentum)
}

export function ResultsScreen({
  results,
  onContinue,
  onRetry,
  onViewCapsules,
  autoAdvanceSeconds = 8, // Default 8 seconds auto-advance for momentum
}: ResultsScreenProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [animatedXP, setAnimatedXP] = useState(0);
  const [countdown, setCountdown] = useState(autoAdvanceSeconds);
  const [autoAdvancePaused, setAutoAdvancePaused] = useState(false);

  const accuracy = Math.round(results.accuracy * 100);
  const isPerfect = results.perfectRound;
  const isGood = accuracy >= 80;

  useEffect(() => {
    // Trigger confetti for good performance
    if (isGood) {
      setShowConfetti(true);
    }

    // Animate XP count
    const duration = 1500;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setAnimatedXP(Math.round(progress * results.xpEarned));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isGood, results.xpEarned]);

  // Auto-advance countdown for "Just One More" momentum
  useEffect(() => {
    if (autoAdvancePaused || countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          onContinue();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [autoAdvancePaused, countdown, onContinue]);

  // Get performance message
  const getMessage = () => {
    if (isPerfect) return { title: 'PERFECT!', subtitle: 'Flawless victory!', emoji: '🏆' };
    if (accuracy >= 90) return { title: 'AMAZING!', subtitle: 'Outstanding performance!', emoji: '🌟' };
    if (accuracy >= 80) return { title: 'GREAT JOB!', subtitle: 'You\'re crushing it!', emoji: '🔥' };
    if (accuracy >= 60) return { title: 'GOOD WORK!', subtitle: 'Keep practicing!', emoji: '💪' };
    return { title: 'KEEP GOING!', subtitle: 'Every attempt makes you stronger', emoji: '📚' };
  };

  const message = getMessage();

  // Get mastery level display
  const getMasteryBadge = () => {
    if (!results.newMastery) return null;
    const badges = [
      null,
      { name: 'Bronze', color: 'text-amber-600', bg: 'bg-amber-600/20' },
      { name: 'Silver', color: 'text-gray-300', bg: 'bg-gray-300/20' },
      { name: 'Gold', color: 'text-yellow-400', bg: 'bg-yellow-400/20' },
    ];
    return badges[results.newMastery];
  };

  const masteryBadge = getMasteryBadge();

  return (
    <>
      <Confetti active={showConfetti} count={isPerfect ? 80 : 40} />

      <motion.div
        className="min-h-screen flex flex-col items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Main result card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
        >
          <Card variant="gradient" padding="lg" className="w-full max-w-md text-center">
            {/* Emoji and message */}
            <motion.div
              className="text-6xl mb-4"
              animate={isPerfect ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
              transition={{ repeat: isPerfect ? Infinity : 0, duration: 1 }}
            >
              {message.emoji}
            </motion.div>

            <motion.h1
              className={cn(
                'text-3xl md:text-4xl font-black mb-2',
                isPerfect && 'bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {message.title}
            </motion.h1>

            <motion.p
              className="text-white/60 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {message.subtitle}
            </motion.p>

            {/* Accuracy circle */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.5 }}
            >
              <CircularProgress
                value={accuracy}
                size={120}
                strokeWidth={8}
                variant={accuracy >= 90 ? 'gold' : accuracy >= 70 ? 'silver' : 'bronze'}
              />
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <motion.div
                className="p-3 rounded-xl bg-white/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Target size={20} className="mx-auto mb-1 text-green-400" />
                <div className="text-xl font-bold text-white">
                  {results.score}/{results.maxScore}
                </div>
                <div className="text-xs text-white/50">Score</div>
              </motion.div>

              <motion.div
                className="p-3 rounded-xl bg-white/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Zap size={20} className="mx-auto mb-1 text-orange-400" fill="currentColor" />
                <div className="text-xl font-bold text-white">
                  {results.maxCombo}x
                </div>
                <div className="text-xs text-white/50">Max Combo</div>
              </motion.div>

              <motion.div
                className="p-3 rounded-xl bg-white/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Star size={20} className="mx-auto mb-1 text-yellow-400" fill="currentColor" />
                <motion.div
                  className="text-xl font-bold text-yellow-400"
                  key={animatedXP}
                >
                  +{animatedXP}
                </motion.div>
                <div className="text-xs text-white/50">XP Earned</div>
              </motion.div>
            </div>

            {/* Mastery badge if earned */}
            {masteryBadge && (
              <motion.div
                className={cn('inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6', masteryBadge.bg)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.9 }}
              >
                <Trophy size={18} className={masteryBadge.color} />
                <span className={cn('font-semibold', masteryBadge.color)}>
                  {masteryBadge.name} Mastery Achieved!
                </span>
              </motion.div>
            )}

            {/* Action buttons - "Just One More" momentum design */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                {/* Pulsing Continue button with auto-advance */}
                <motion.div
                  animate={!autoAdvancePaused ? {
                    scale: [1, 1.02, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(139, 92, 246, 0)',
                      '0 0 0 8px rgba(139, 92, 246, 0.3)',
                      '0 0 0 0 rgba(139, 92, 246, 0)',
                    ],
                  } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="rounded-xl"
                >
                  <Button onClick={onContinue} className="w-full relative overflow-hidden" glow>
                    {/* Progress bar for auto-advance */}
                    {!autoAdvancePaused && (
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        initial={{ scaleX: 1 }}
                        animate={{ scaleX: 0 }}
                        transition={{ duration: autoAdvanceSeconds, ease: 'linear' }}
                        style={{ transformOrigin: 'left' }}
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-center">
                      Next Battle
                      <ArrowRight size={18} className="ml-2" />
                      {!autoAdvancePaused && (
                        <span className="ml-2 text-sm opacity-70">({countdown}s)</span>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <Button
                  onClick={() => {
                    setAutoAdvancePaused(true);
                    onRetry();
                  }}
                  variant="secondary"
                  className="flex-1"
                >
                  <RotateCcw size={18} className="mr-2" />
                  Retry
                </Button>

                {onViewCapsules && (
                  <Button
                    onClick={() => {
                      setAutoAdvancePaused(true);
                      onViewCapsules();
                    }}
                    variant="secondary"
                    className="flex-1"
                  >
                    <BookOpen size={18} className="mr-2" />
                    Study
                  </Button>
                )}
              </motion.div>

              {/* Pause auto-advance link */}
              {!autoAdvancePaused && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  onClick={() => setAutoAdvancePaused(true)}
                  className="text-xs text-white/40 hover:text-white/60 transition-colors"
                >
                  Pause auto-continue
                </motion.button>
              )}
            </div>
          </Card>
        </motion.div>

        {/* XP breakdown (expandable) */}
        <motion.details
          className="mt-4 w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <summary className="text-white/40 text-sm cursor-pointer hover:text-white/60 text-center">
            View XP breakdown
          </summary>
          <Card variant="glass" padding="sm" className="mt-2 text-sm">
            <div className="space-y-2 text-white/60">
              <div className="flex justify-between">
                <span>Base XP ({results.score} correct)</span>
                <span>+{results.score * 10}</span>
              </div>
              {results.maxCombo > 1 && (
                <div className="flex justify-between">
                  <span>Combo bonus (max {results.maxCombo}x)</span>
                  <span>+{Math.round(results.xpEarned * 0.2)}</span>
                </div>
              )}
              {isPerfect && (
                <div className="flex justify-between text-yellow-400">
                  <span>Perfect round bonus</span>
                  <span>+50</span>
                </div>
              )}
              <div className="border-t border-white/10 pt-2 flex justify-between font-bold text-white">
                <span>Total</span>
                <span className="text-yellow-400">+{results.xpEarned} XP</span>
              </div>
            </div>
          </Card>
        </motion.details>
      </motion.div>
    </>
  );
}
