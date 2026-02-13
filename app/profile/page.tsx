'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Settings, Trophy, Target, Zap, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { XPBar, CircularProgress } from '@/components/ui/ProgressBar';
import { StreakDisplay } from '@/components/game/StreakFlame';
import { useUserStore } from '@/lib/stores/userStore';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useStreakStore } from '@/lib/stores/streakStore';
import { cn } from '@/lib/utils/cn';

export default function ProfilePage() {
  const { profile, settings, setSettings } = useUserStore();
  const {
    totalXP,
    level,
    currentLevelXP,
    xpToNextLevel,
    totalQuestionsAnswered,
    totalCorrectAnswers,
    longestCombo,
    totalBattlesCompleted,
    getRank,
  } = useProgressStore();
  const { longestStreak } = useStreakStore();

  const rank = getRank();
  const accuracy = totalQuestionsAnswered > 0
    ? Math.round((totalCorrectAnswers / totalQuestionsAnswered) * 100)
    : 0;

  return (
    <div className="min-h-screen p-4 md:p-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/play">
          <Button variant="ghost" size="sm" className="p-2">
            <ArrowLeft size={20} />
          </Button>
        </Link>

        <Link href="/profile/settings">
          <Button variant="ghost" size="sm" className="p-2">
            <Settings size={20} />
          </Button>
        </Link>
      </div>

      {/* Profile card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card variant="gradient" padding="lg" className="text-center mb-6">
          {/* Avatar */}
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-5xl shadow-lg shadow-purple-500/30">
            {profile?.avatar || '🚀'}
          </div>

          {/* Name and rank */}
          <h1 className="text-2xl font-bold text-white mb-1">
            {profile?.displayName || 'Explorer'}
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/60">
            <span className="text-xl">{rank.icon}</span>
            <span>{rank.name}</span>
          </div>

          {/* Level and XP */}
          <div className="mt-6">
            <XPBar
              currentXP={currentLevelXP}
              xpForLevel={xpToNextLevel}
              level={level}
            />
          </div>
        </Card>
      </motion.div>

      {/* Streak */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card variant="elevated" padding="lg" className="mb-6">
          <StreakDisplay />
          <p className="text-center text-white/40 text-sm mt-2">
            Best streak: {longestStreak} days
          </p>
        </Card>
      </motion.div>

      {/* Stats grid */}
      <motion.div
        className="grid grid-cols-2 gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card variant="default" padding="md" className="text-center">
          <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
          <p className="text-2xl font-bold text-white">{totalXP.toLocaleString()}</p>
          <p className="text-xs text-white/50">Total XP</p>
        </Card>

        <Card variant="default" padding="md" className="text-center">
          <Target className="w-8 h-8 mx-auto mb-2 text-green-400" />
          <p className="text-2xl font-bold text-white">{accuracy}%</p>
          <p className="text-xs text-white/50">Accuracy</p>
        </Card>

        <Card variant="default" padding="md" className="text-center">
          <Trophy className="w-8 h-8 mx-auto mb-2 text-purple-400" />
          <p className="text-2xl font-bold text-white">{longestCombo}x</p>
          <p className="text-xs text-white/50">Best Combo</p>
        </Card>

        <Card variant="default" padding="md" className="text-center">
          <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-400" />
          <p className="text-2xl font-bold text-white">{totalBattlesCompleted}</p>
          <p className="text-xs text-white/50">Battles Won</p>
        </Card>
      </motion.div>

      {/* Detailed stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card variant="default" padding="none">
          <div className="divide-y divide-white/10">
            <StatRow label="Questions Answered" value={totalQuestionsAnswered.toLocaleString()} />
            <StatRow label="Correct Answers" value={totalCorrectAnswers.toLocaleString()} />
            <StatRow
              label="Year Group"
              value={`Year ${profile?.yearGroup || '?'}`}
            />
            <StatRow
              label="Curriculum"
              value={profile?.curriculum === 'uk-gcse' ? 'UK GCSE' : 'UK KS3'}
            />
          </div>
        </Card>
      </motion.div>

      {/* Settings shortcuts */}
      <motion.div
        className="mt-6 space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card variant="default" padding="sm" interactive>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔊</span>
              <span className="text-white">Sound Effects</span>
            </div>
            <ToggleSwitch
              enabled={settings.soundEnabled}
              onChange={(enabled) => setSettings({ soundEnabled: enabled })}
            />
          </div>
        </Card>

        <Card variant="default" padding="sm" interactive>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">📳</span>
              <span className="text-white">Haptics</span>
            </div>
            <ToggleSwitch
              enabled={settings.hapticsEnabled}
              onChange={(enabled) => setSettings({ hapticsEnabled: enabled })}
            />
          </div>
        </Card>

        <Link href="/parent">
          <Card variant="default" padding="sm" interactive>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">👨‍👩‍👧</span>
                <span className="text-white">Parent Dashboard</span>
              </div>
              <ChevronRight className="text-white/30" />
            </div>
          </Card>
        </Link>
      </motion.div>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-white/60">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}

function ToggleSwitch({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={cn(
        'w-12 h-7 rounded-full p-1 transition-colors',
        enabled ? 'bg-purple-500' : 'bg-white/20'
      )}
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-full shadow"
        animate={{ x: enabled ? 20 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  );
}
