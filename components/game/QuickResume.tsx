'use client';

import { motion } from 'framer-motion';
import { Play, X, Clock, Zap } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useSessionStore, GameSession } from '@/lib/stores/sessionStore';
import { useRouter } from 'next/navigation';

/**
 * Quick Resume Component
 *
 * Shows a "Continue where you left off" prompt.
 * Removes task initiation friction - just one tap to continue.
 *
 * ADHD Principle: No thinking required, instant continuation
 */

interface QuickResumeProps {
  className?: string;
  onDismiss?: () => void;
}

export function QuickResume({ className, onDismiss }: QuickResumeProps) {
  const router = useRouter();
  const { getResumeSession, showQuickResume } = useSessionStore();

  const session = getResumeSession();

  if (!session || !showQuickResume) return null;

  // Format time since last activity
  const getTimeSince = (timestamp: number): string => {
    const hours = Math.floor((Date.now() - timestamp) / (1000 * 60 * 60));
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  const handleResume = () => {
    router.push(`/games/${session.gameId}`);
  };

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent/20 to-purple-500/20 border border-accent/30 p-4',
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Dismiss button */}
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="absolute top-2 right-2 p-1 text-text-muted hover:text-text-primary transition-colors"
        >
          <X size={16} />
        </button>
      )}

      <div className="flex items-center gap-4">
        {/* Play button - large and inviting */}
        <motion.button
          onClick={handleResume}
          className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30 flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(139, 92, 246, 0.4)',
              '0 0 0 10px rgba(139, 92, 246, 0)',
            ],
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Play size={28} className="text-white ml-1" fill="white" />
        </motion.button>

        {/* Session info */}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-accent font-medium uppercase tracking-wide mb-1">
            Continue Playing
          </p>
          <h3 className="font-semibold text-text-primary truncate">
            {session.gameName}
          </h3>
          <div className="flex items-center gap-3 mt-1 text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {getTimeSince(session.lastActivityAt)}
            </span>
            {session.progress.xpEarned > 0 && (
              <span className="flex items-center gap-1">
                <Zap size={12} className="text-yellow-500" />
                {session.progress.xpEarned} XP earned
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Progress indicator if applicable */}
      {session.progress.questionsAnswered > 0 && (
        <div className="mt-3 flex items-center gap-2 text-xs text-text-muted">
          <span>
            {session.progress.questionsCorrect}/{session.progress.questionsAnswered} correct
          </span>
          <div className="flex-1 h-1 bg-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-accent"
              style={{
                width: `${(session.progress.questionsCorrect / session.progress.questionsAnswered) * 100}%`,
              }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default QuickResume;
