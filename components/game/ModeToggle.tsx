'use client';

import { motion } from 'framer-motion';
import { BookOpen, Swords } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useSessionStore } from '@/lib/stores/sessionStore';

/**
 * Learn vs Fight Mode Toggle
 *
 * Gives users autonomy over their learning approach.
 * ADHD brains resist forced learning - let them choose.
 *
 * Learn Mode: Concept capsules first, then practice
 * Battle Mode: Jump straight into questions
 */

interface ModeToggleProps {
  className?: string;
  onModeChange?: (mode: 'learn' | 'battle') => void;
}

export function ModeToggle({ className, onModeChange }: ModeToggleProps) {
  const { preferredMode, setPreferredMode } = useSessionStore();
  const currentMode = preferredMode || 'battle';

  const handleModeChange = (mode: 'learn' | 'battle') => {
    setPreferredMode(mode);
    onModeChange?.(mode);
  };

  return (
    <div className={cn('flex gap-2 p-1 bg-surface-elevated rounded-xl', className)}>
      <ModeButton
        mode="learn"
        isActive={currentMode === 'learn'}
        onClick={() => handleModeChange('learn')}
        icon={BookOpen}
        label="Learn"
        description="Study first"
      />
      <ModeButton
        mode="battle"
        isActive={currentMode === 'battle'}
        onClick={() => handleModeChange('battle')}
        icon={Swords}
        label="Battle"
        description="Jump in"
      />
    </div>
  );
}

interface ModeButtonProps {
  mode: 'learn' | 'battle';
  isActive: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  description: string;
}

function ModeButton({ mode, isActive, onClick, icon: Icon, label, description }: ModeButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'flex-1 relative px-4 py-3 rounded-lg transition-colors',
        isActive
          ? mode === 'learn'
            ? 'bg-blue-500/20 text-blue-400'
            : 'bg-orange-500/20 text-orange-400'
          : 'text-text-muted hover:text-text-secondary'
      )}
      whileTap={{ scale: 0.97 }}
    >
      {isActive && (
        <motion.div
          layoutId="mode-indicator"
          className={cn(
            'absolute inset-0 rounded-lg -z-10',
            mode === 'learn' ? 'bg-blue-500/10' : 'bg-orange-500/10'
          )}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
        />
      )}
      <div className="flex flex-col items-center gap-1">
        <Icon size={20} className={isActive ? '' : 'opacity-60'} />
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xs opacity-60">{description}</span>
      </div>
    </motion.button>
  );
}

export default ModeToggle;
