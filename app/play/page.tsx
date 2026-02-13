'use client';

import { GalaxyMap } from '@/components/map/GalaxyMap';
import { StreakFlame } from '@/components/game/StreakFlame';
import { XPCounter } from '@/components/game/XPCounter';
import { useProgressStore } from '@/lib/stores/progressStore';
import { Home, User, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PlayPage() {
  const { totalXP, getRank } = useProgressStore();
  const rank = getRank();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <motion.header
        className="flex items-center justify-between p-4 border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">{rank.icon}</span>
          <span className="text-white/60 text-sm font-medium">{rank.name}</span>
        </div>

        <XPCounter value={totalXP} showIcon size="sm" />

        <StreakFlame size="sm" />
      </motion.header>

      {/* Galaxy map */}
      <main className="flex-1">
        <GalaxyMap />
      </main>

      {/* Bottom navigation */}
      <nav className="flex items-center justify-around p-4 border-t border-white/10 bg-galaxy-dark/80 backdrop-blur-sm safe-area-bottom">
        <Link
          href="/"
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
        >
          <Home size={24} />
          <span className="text-xs">Home</span>
        </Link>

        <Link
          href="/play"
          className="flex flex-col items-center gap-1 text-purple-400"
        >
          <motion.div
            className="p-3 -mt-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </motion.div>
          <span className="text-xs font-medium">Play</span>
        </Link>

        <Link
          href="/codex"
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
        >
          <BookOpen size={24} />
          <span className="text-xs">Codex</span>
        </Link>

        <Link
          href="/profile"
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
        >
          <User size={24} />
          <span className="text-xs">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
