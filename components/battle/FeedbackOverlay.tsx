'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronRight, BookOpen, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ComboMultiplier } from '@/components/game/ComboMultiplier';
import { cn } from '@/lib/utils/cn';

export interface FeedbackOverlayProps {
  isCorrect: boolean;
  combo: number;
  xpGained: number;
  explanation: string;
  showExplanation: boolean;
  onToggleExplanation: () => void;
  onContinue: () => void;
}

export function FeedbackOverlay({
  isCorrect,
  combo,
  xpGained,
  explanation,
  showExplanation,
  onToggleExplanation,
  onContinue,
}: FeedbackOverlayProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-end justify-center pb-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop with color - softer for wrong answers */}
      <motion.div
        className={cn(
          'absolute inset-0',
          isCorrect ? 'bg-green-500/10' : 'bg-amber-500/10' // Amber instead of red - less harsh
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Feedback card - softer colors for wrong answers */}
      <motion.div
        className={cn(
          'relative w-full max-w-lg rounded-2xl p-6',
          'border-2 backdrop-blur-xl',
          isCorrect
            ? 'bg-green-950/80 border-green-500'
            : 'bg-amber-950/80 border-amber-500' // Amber instead of red
        )}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        {/* Icon and message */}
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.1 }}
          >
            {isCorrect ? (
              <CheckCircle
                size={48}
                className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
              />
            ) : (
              <BookOpen
                size={48}
                className="text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]"
              />
            )}
          </motion.div>

          <div className="flex-1">
            <motion.h3
              className={cn(
                'text-2xl font-bold',
                isCorrect ? 'text-green-400' : 'text-amber-400'
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              {isCorrect ? getCorrectMessage(combo) : getWrongMessage()}
            </motion.h3>

            {isCorrect && (
              <motion.div
                className="flex items-center gap-4 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                {/* XP gained */}
                <span className="text-yellow-400 font-bold">
                  +{xpGained} XP
                </span>

                {/* Combo */}
                {combo > 1 && <ComboMultiplier combo={combo} size="sm" />}
              </motion.div>
            )}
          </div>
        </div>

        {/* Explanation toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={onToggleExplanation}
            className={cn(
              'flex items-center gap-2 text-sm mb-4',
              'text-white/60 hover:text-white transition-colors'
            )}
          >
            <BookOpen size={16} />
            {showExplanation ? 'Hide explanation' : 'Explain simply'}
          </button>

          {/* Explanation content */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-4">
                  <p className="text-white/80 text-sm leading-relaxed">
                    {explanation}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Continue button */}
        <Button
          onClick={onContinue}
          className="w-full"
          glow
        >
          Continue
          <ChevronRight size={20} className="ml-2" />
        </Button>
      </motion.div>

      {/* Floating stars for correct answers */}
      {isCorrect && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${20 + Math.random() * 60}%`,
                bottom: '20%',
              }}
              initial={{ y: 0, opacity: 1 }}
              animate={{
                y: -200 - Math.random() * 100,
                opacity: 0,
                rotate: Math.random() * 360,
              }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            >
              ⭐
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// Correct answer messages - more fun variety!
function getCorrectMessage(combo: number): string {
  if (combo >= 6) {
    const maxMessages = ['UNSTOPPABLE!', 'LEGENDARY!', 'GODLIKE!', 'MAXIMUM POWER!'];
    return maxMessages[Math.floor(Math.random() * maxMessages.length)];
  }
  if (combo >= 4) {
    const highMessages = ['On fire!', 'Incredible!', 'Amazing!', 'Brilliant!'];
    return highMessages[Math.floor(Math.random() * highMessages.length)];
  }
  if (combo >= 2) {
    const comboMessages = ['Nice combo!', 'Keep it up!', 'Rolling!', 'Smooth!'];
    return comboMessages[Math.floor(Math.random() * comboMessages.length)];
  }

  const correctMessages = [
    'Correct!',
    'Nailed it!',
    'Perfect!',
    'You got it!',
    'Spot on!',
    'That\'s right!',
    'Bingo!',
  ];
  return correctMessages[Math.floor(Math.random() * correctMessages.length)];
}

// Wrong answer messages - ADHD-friendly, shame-free
// Never highlight failure, always point to learning
function getWrongMessage(): string {
  const messages = [
    'Not quite — let\'s see why',
    'Good try! Here\'s the key...',
    'Almost there! Quick tip:',
    'Tricky one! The answer is...',
    'Nice attempt! Remember:',
    'Learning moment!',
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}
