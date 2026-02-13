'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  size: number;
  rotation: number;
  delay: number;
}

export interface ConfettiProps {
  active: boolean;
  count?: number;
  duration?: number;
  colors?: string[];
}

const DEFAULT_COLORS = [
  '#8b5cf6', // purple
  '#ec4899', // pink
  '#06b6d4', // cyan
  '#22c55e', // green
  '#eab308', // yellow
  '#f97316', // orange
];

export function Confetti({
  active,
  count = 50,
  duration = 3000,
  colors = DEFAULT_COLORS,
}: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (active) {
      const newPieces: ConfettiPiece[] = [];
      for (let i = 0; i < count; i++) {
        newPieces.push({
          id: i,
          x: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 8 + 6,
          rotation: Math.random() * 360,
          delay: Math.random() * 0.5,
        });
      }
      setPieces(newPieces);

      // Clear after animation
      const timer = setTimeout(() => {
        setPieces([]);
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setPieces([]);
    }
  }, [active, count, duration, colors]);

  return (
    <AnimatePresence>
      {pieces.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
          {pieces.map((piece) => (
            <motion.div
              key={piece.id}
              className="absolute"
              style={{
                left: `${piece.x}%`,
                top: -20,
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              }}
              initial={{
                y: 0,
                rotate: piece.rotation,
                opacity: 1,
              }}
              animate={{
                y: window.innerHeight + 50,
                rotate: piece.rotation + 720,
                opacity: 0,
              }}
              transition={{
                duration: 2 + Math.random(),
                delay: piece.delay,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

// Star burst effect
export interface StarBurstProps {
  active: boolean;
  x?: number;
  y?: number;
  count?: number;
  color?: string;
}

export function StarBurst({
  active,
  x = 50,
  y = 50,
  count = 8,
  color = '#eab308',
}: StarBurstProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (active) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 800);
      return () => clearTimeout(timer);
    }
  }, [active]);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[100]"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {[...Array(count)].map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
            initial={{
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              x: Math.cos(angle) * 60,
              y: Math.sin(angle) * 60,
              scale: 0,
              opacity: 0,
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        );
      })}
      {/* Center burst */}
      <motion.div
        className="absolute rounded-full"
        style={{
          backgroundColor: color,
          width: 20,
          height: 20,
          left: -10,
          top: -10,
        }}
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
    </div>
  );
}

// Emoji rain for celebrations
export interface EmojiRainProps {
  active: boolean;
  emoji?: string;
  count?: number;
}

export function EmojiRain({ active, emoji = '🎉', count = 20 }: EmojiRainProps) {
  const [drops, setDrops] = useState<Array<{ id: number; x: number; delay: number; size: number }>>([]);

  useEffect(() => {
    if (active) {
      const newDrops = [...Array(count)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        size: Math.random() * 16 + 20,
      }));
      setDrops(newDrops);

      const timer = setTimeout(() => setDrops([]), 3000);
      return () => clearTimeout(timer);
    } else {
      setDrops([]);
    }
  }, [active, count]);

  return (
    <AnimatePresence>
      {drops.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
          {drops.map((drop) => (
            <motion.div
              key={drop.id}
              className="absolute"
              style={{
                left: `${drop.x}%`,
                top: -50,
                fontSize: drop.size,
              }}
              initial={{ y: 0, rotate: 0 }}
              animate={{
                y: window.innerHeight + 100,
                rotate: 360,
              }}
              transition={{
                duration: 2 + Math.random(),
                delay: drop.delay,
                ease: 'linear',
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
