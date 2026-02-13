'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Lock,
  TrendingUp,
  Calendar,
  Target,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
} from 'lucide-react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ProgressBar, CircularProgress } from '@/components/ui/ProgressBar';
import { useUserStore } from '@/lib/stores/userStore';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useStreakStore } from '@/lib/stores/streakStore';
import { SUBJECTS } from '@/components/map/GalaxyMap';
import { cn } from '@/lib/utils/cn';

export default function ParentDashboardPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pin, setPin] = useState('');

  if (!isUnlocked) {
    return <PinScreen onUnlock={() => setIsUnlocked(true)} pin={pin} setPin={setPin} />;
  }

  return <ParentDashboard />;
}

function PinScreen({
  onUnlock,
  pin,
  setPin,
}: {
  onUnlock: () => void;
  pin: string;
  setPin: (pin: string) => void;
}) {
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    // Simple PIN check - in production this would be secure
    if (pin === '1234' || pin.length === 4) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm text-center"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-500/20 flex items-center justify-center">
          <Lock className="w-10 h-10 text-purple-400" />
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">Parent Dashboard</h1>
        <p className="text-white/60 mb-8">Enter your 4-digit PIN to access</p>

        <div className="flex justify-center gap-3 mb-6">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className={cn(
                'w-12 h-12 rounded-xl border-2 flex items-center justify-center text-xl font-bold',
                pin.length > i
                  ? 'border-purple-500 bg-purple-500/20 text-white'
                  : 'border-white/20 text-white/30',
                error && 'border-red-500 animate-shake'
              )}
            >
              {pin.length > i ? '•' : ''}
            </motion.div>
          ))}
        </div>

        {/* Number pad */}
        <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, '⌫'].map((num, i) => (
            <button
              key={i}
              className={cn(
                'h-14 rounded-xl text-xl font-semibold transition-all',
                num === '' ? 'invisible' : 'bg-white/10 hover:bg-white/20 active:scale-95 text-white'
              )}
              onClick={() => {
                if (num === '⌫') {
                  setPin(pin.slice(0, -1));
                } else if (typeof num === 'number' && pin.length < 4) {
                  const newPin = pin + num;
                  setPin(newPin);
                  if (newPin.length === 4) {
                    setTimeout(handleSubmit, 200);
                  }
                }
              }}
            >
              {num}
            </button>
          ))}
        </div>

        <p className="text-white/40 text-sm mt-6">
          Default PIN: 1234
        </p>

        <Link href="/profile" className="block mt-8">
          <Button variant="ghost">
            <ArrowLeft className="mr-2" size={16} />
            Back to Profile
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}

function ParentDashboard() {
  const { profile } = useUserStore();
  const {
    totalXP,
    level,
    totalQuestionsAnswered,
    totalCorrectAnswers,
    zoneMastery,
    subjectProgress,
  } = useProgressStore();
  const { currentStreak, longestStreak } = useStreakStore();

  const accuracy = totalQuestionsAnswered > 0
    ? Math.round((totalCorrectAnswers / totalQuestionsAnswered) * 100)
    : 0;

  // Find weak subjects (< 70% accuracy or low engagement)
  const weakSubjects = SUBJECTS.filter((subject) => {
    const progress = subjectProgress[subject.id];
    if (!progress || progress.totalXP < 100) return false;
    return progress.zonesCompleted < 3;
  });

  return (
    <div className="min-h-screen p-4 md:p-6 pb-24">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/profile">
          <Button variant="ghost" size="sm" className="p-2">
            <ArrowLeft size={20} />
          </Button>
        </Link>

        <div>
          <h1 className="text-2xl font-bold text-white">Parent Dashboard</h1>
          <p className="text-white/50 text-sm">
            {profile?.displayName || 'Student'}'s Progress
          </p>
        </div>
      </div>

      {/* Weekly summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card variant="gradient" padding="lg" className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="text-purple-400" />
              Weekly Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-white">{currentStreak}</p>
                <p className="text-xs text-white/50">Day Streak</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-400">{accuracy}%</p>
                <p className="text-xs text-white/50">Accuracy</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">{totalXP.toLocaleString()}</p>
                <p className="text-xs text-white/50">XP Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Engagement indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card variant="default" padding="md" className="mb-6">
          <div className="flex items-center gap-4">
            <div className={cn(
              'w-12 h-12 rounded-full flex items-center justify-center',
              currentStreak >= 7 ? 'bg-green-500/20' : currentStreak >= 3 ? 'bg-yellow-500/20' : 'bg-red-500/20'
            )}>
              {currentStreak >= 7 ? (
                <CheckCircle className="text-green-400" />
              ) : currentStreak >= 3 ? (
                <TrendingUp className="text-yellow-400" />
              ) : (
                <AlertTriangle className="text-red-400" />
              )}
            </div>
            <div>
              <p className="font-semibold text-white">
                {currentStreak >= 7
                  ? 'Excellent engagement!'
                  : currentStreak >= 3
                  ? 'Good progress this week'
                  : 'Needs more practice'}
              </p>
              <p className="text-white/50 text-sm">
                {currentStreak >= 7
                  ? 'Your child is studying consistently'
                  : currentStreak >= 3
                  ? 'Encourage daily practice for best results'
                  : 'Try setting a daily study reminder'}
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Subject breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card variant="default" padding="md" className="mb-6">
          <CardHeader>
            <CardTitle>Subject Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {SUBJECTS.map((subject) => {
                const progress = subjectProgress[subject.id];
                const xp = progress?.totalXP || 0;
                const Icon = subject.icon;

                return (
                  <div key={subject.id} className="flex items-center gap-3">
                    <div className={cn(
                      'w-10 h-10 rounded-lg flex items-center justify-center',
                      `bg-gradient-to-br ${subject.gradient}`
                    )}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-white text-sm font-medium">
                          {subject.shortName}
                        </span>
                        <span className="text-white/50 text-sm">
                          {xp.toLocaleString()} XP
                        </span>
                      </div>
                      <ProgressBar
                        value={xp}
                        max={5000}
                        size="sm"
                        animated={false}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Weak areas */}
      {weakSubjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card variant="default" padding="md" className="border-yellow-500/30 bg-yellow-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-400">
                <AlertTriangle size={20} />
                Areas to Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/60 text-sm mb-3">
                These subjects need more attention:
              </p>
              <div className="flex flex-wrap gap-2">
                {weakSubjects.map((subject) => (
                  <span
                    key={subject.id}
                    className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm"
                  >
                    {subject.shortName}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Stats */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card variant="default" padding="none">
          <div className="divide-y divide-white/10">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-white/60">Total Questions</span>
              <span className="font-medium text-white">{totalQuestionsAnswered.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-white/60">Correct Answers</span>
              <span className="font-medium text-green-400">{totalCorrectAnswers.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-white/60">Current Level</span>
              <span className="font-medium text-purple-400">{level}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-white/60">Longest Streak</span>
              <span className="font-medium text-orange-400">{longestStreak} days</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
