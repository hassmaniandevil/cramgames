'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  velocity: { x: number; y: number };
  rotation: number;
  type: 'circle' | 'star' | 'spark' | 'confetti';
}

interface ParticleEffectProps {
  trigger: number; // Increment to trigger new burst
  type?: 'correct' | 'wrong' | 'combo' | 'levelup' | 'confetti';
  x?: number; // Position (center of screen if not provided)
  y?: number;
  count?: number;
  className?: string;
}

const COLORS = {
  correct: ['#22c55e', '#4ade80', '#86efac', '#10b981'],
  wrong: ['#ef4444', '#f87171', '#fca5a5'],
  combo: ['#a855f7', '#c084fc', '#e879f9', '#f472b6', '#fb923c'],
  levelup: ['#fbbf24', '#f59e0b', '#fcd34d', '#fef08a'],
  confetti: ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899'],
};

const PARTICLE_TYPES = {
  correct: 'star' as const,
  wrong: 'spark' as const,
  combo: 'star' as const,
  levelup: 'confetti' as const,
  confetti: 'confetti' as const,
};

export function ParticleEffect({
  trigger,
  type = 'correct',
  x,
  y,
  count = 12,
  className,
}: ParticleEffectProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  const createParticles = useCallback(() => {
    const colors = COLORS[type];
    const particleType = PARTICLE_TYPES[type];
    const centerX = x ?? (typeof window !== 'undefined' ? window.innerWidth / 2 : 200);
    const centerY = y ?? (typeof window !== 'undefined' ? window.innerHeight / 2 : 200);

    const newParticles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const speed = 100 + Math.random() * 150;

      newParticles.push({
        id: Date.now() + i,
        x: centerX,
        y: centerY,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: type === 'confetti' ? 8 + Math.random() * 8 : 4 + Math.random() * 6,
        velocity: {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed - 50, // Slight upward bias
        },
        rotation: Math.random() * 360,
        type: particleType,
      });
    }

    setParticles(newParticles);

    // Clear particles after animation
    setTimeout(() => {
      setParticles([]);
    }, 1000);
  }, [type, x, y, count]);

  useEffect(() => {
    if (trigger > 0) {
      createParticles();
    }
  }, [trigger, createParticles]);

  return (
    <div className={cn('fixed inset-0 pointer-events-none z-50 overflow-hidden', className)}>
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 1,
              rotate: particle.rotation,
              opacity: 1,
            }}
            animate={{
              x: particle.x + particle.velocity.x,
              y: particle.y + particle.velocity.y + 100, // Gravity
              scale: 0,
              rotate: particle.rotation + 360,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="absolute"
            style={{
              width: particle.size,
              height: particle.size,
            }}
          >
            {particle.type === 'circle' && (
              <div
                className="w-full h-full rounded-full"
                style={{ backgroundColor: particle.color }}
              />
            )}
            {particle.type === 'star' && (
              <svg
                viewBox="0 0 24 24"
                fill={particle.color}
                className="w-full h-full"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            )}
            {particle.type === 'spark' && (
              <div
                className="w-full h-full"
                style={{
                  backgroundColor: particle.color,
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                }}
              />
            )}
            {particle.type === 'confetti' && (
              <div
                className="w-full h-full rounded-sm"
                style={{
                  backgroundColor: particle.color,
                  transform: `rotate(${Math.random() * 45}deg)`,
                }}
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/**
 * Hook for managing particle effects
 */
export function useParticles() {
  const [trigger, setTrigger] = useState(0);
  const [config, setConfig] = useState<{
    type: ParticleEffectProps['type'];
    x?: number;
    y?: number;
    count?: number;
  }>({ type: 'correct' });

  const emit = useCallback((
    type: ParticleEffectProps['type'] = 'correct',
    options?: { x?: number; y?: number; count?: number }
  ) => {
    setConfig({ type, ...options });
    setTrigger((t) => t + 1);
  }, []);

  const emitCorrect = useCallback((x?: number, y?: number) => {
    emit('correct', { x, y, count: 8 });
  }, [emit]);

  const emitWrong = useCallback((x?: number, y?: number) => {
    emit('wrong', { x, y, count: 6 });
  }, [emit]);

  const emitCombo = useCallback((combo: number, x?: number, y?: number) => {
    emit('combo', { x, y, count: Math.min(combo * 2, 20) });
  }, [emit]);

  const emitLevelUp = useCallback(() => {
    emit('levelup', { count: 30 });
  }, [emit]);

  const emitConfetti = useCallback(() => {
    emit('confetti', { count: 50 });
  }, [emit]);

  return {
    trigger,
    config,
    emit,
    emitCorrect,
    emitWrong,
    emitCombo,
    emitLevelUp,
    emitConfetti,
  };
}

export default ParticleEffect;
