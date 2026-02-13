'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  BookOpen,
  Lock,
  ChevronRight,
  X,
  Scroll,
  Star,
  Sparkles,
  Trophy,
  Flame,
  Target,
  Zap,
  BookMarked,
  Eye,
  EyeOff,
} from 'lucide-react';
import { useLoreStore, PlayerStats } from '@/lib/stores/loreStore';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useStreakStore } from '@/lib/stores/streakStore';
import {
  STORY_CHAPTERS,
  BONUS_FRAGMENTS,
  LoreChapter,
  BonusFragment,
} from '@/data/lore/story';

export default function CodexPage() {
  const router = useRouter();
  const [selectedChapter, setSelectedChapter] = useState<LoreChapter | null>(null);
  const [selectedBonus, setSelectedBonus] = useState<BonusFragment | null>(null);
  const [showBonusSection, setShowBonusSection] = useState(false);

  // Get stores
  const {
    readChapterIds,
    readBonusIds,
    markChapterRead,
    markBonusRead,
    getUnlockedChapters,
    getUnlockedBonusFragments,
    getNextLockedChapter,
    getProgress,
  } = useLoreStore();

  const progressStore = useProgressStore();
  const streakStore = useStreakStore();

  // Calculate player stats for unlock requirements
  const playerStats: PlayerStats = useMemo(() => {
    const completedZones = Object.values(progressStore.zoneMastery).filter(
      z => z.mastery >= 1
    ).length;

    const bossesDefeated = Object.values(progressStore.subjectProgress).reduce(
      (sum, s) => sum + (s.bossesDefeated || 0),
      0
    );

    // Calculate overall mastery (percentage of zones at bronze or higher)
    const totalZones = Math.max(Object.keys(progressStore.zoneMastery).length, 1);
    const overallMastery = Math.round((completedZones / totalZones) * 100);

    // Count subjects started
    const subjectsStarted = Object.keys(progressStore.subjectProgress).length;

    // Perfect games are tracked in the progress store
    const perfectGames = progressStore.perfectGames || 0;

    return {
      totalXP: progressStore.totalXP,
      completedZones,
      bossesDefeated,
      currentStreak: streakStore.currentStreak,
      longestStreak: streakStore.longestStreak,
      overallMastery,
      perfectGames,
      subjectsStarted,
    };
  }, [progressStore, streakStore]);

  // Get unlocked content
  const unlockedChapters = getUnlockedChapters(playerStats);
  const unlockedBonus = getUnlockedBonusFragments(playerStats);
  const nextLockedChapter = getNextLockedChapter(playerStats);
  const progress = getProgress(playerStats);

  // Handle chapter selection
  const handleChapterClick = (chapter: LoreChapter) => {
    setSelectedChapter(chapter);
    markChapterRead(chapter.id);
  };

  // Handle bonus selection
  const handleBonusClick = (bonus: BonusFragment) => {
    setSelectedBonus(bonus);
    markBonusRead(bonus.id);
  };

  // Check if chapter is read
  const isChapterRead = (chapterId: string) => readChapterIds.includes(chapterId);
  const isBonusRead = (bonusId: string) => readBonusIds.includes(bonusId);

  // Get icon for requirement type
  const getRequirementIcon = (type: string) => {
    switch (type) {
      case 'xp': return Zap;
      case 'zones': return Target;
      case 'bosses': return Trophy;
      case 'streak': return Flame;
      case 'mastery': return Star;
      case 'perfect': return Sparkles;
      case 'all_subjects': return BookMarked;
      default: return Lock;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass sticky top-0 z-50 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <button
            onClick={() => router.push('/')}
            className="p-2 hover:bg-surface-elevated rounded-lg transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex-1">
            <h1 className="font-bold text-text-primary flex items-center gap-2">
              <BookOpen size={20} className="text-amber-500" />
              The Encrypted Journal
            </h1>
            <p className="text-xs text-text-muted">Uncover the mystery</p>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 bg-amber-500/20 rounded-xl">
            <Scroll size={16} className="text-amber-500" />
            <span className="font-bold text-amber-500">
              {progress.chaptersUnlocked}/{progress.chaptersTotal}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 pb-32">
        {/* Story Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-5 mb-6 bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <BookOpen size={24} className="text-amber-500" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-text-primary">The Mystery Unfolds</h2>
              <p className="text-sm text-text-muted">
                {progress.chaptersUnlocked === progress.chaptersTotal
                  ? 'You have uncovered all secrets'
                  : `${progress.chaptersTotal - progress.chaptersUnlocked} chapters remain hidden`}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-3 bg-surface-elevated rounded-full overflow-hidden mb-3">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500"
              initial={{ width: 0 }}
              animate={{ width: `${(progress.chaptersUnlocked / progress.chaptersTotal) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-text-muted">
              {progress.chaptersRead} of {progress.chaptersUnlocked} read
            </span>
            {unlockedBonus.length > 0 && (
              <span className="text-purple-400">
                +{progress.bonusUnlocked} bonus fragments
              </span>
            )}
          </div>
        </motion.div>

        {/* Next Unlock Teaser */}
        {nextLockedChapter && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card p-4 mb-6 border border-dashed border-text-muted/30"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center flex-shrink-0">
                <Lock size={20} className="text-text-muted" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-text-muted mb-1">Next chapter requires:</p>
                <div className="flex items-center gap-2">
                  {(() => {
                    const Icon = getRequirementIcon(nextLockedChapter.unlockRequirement.type);
                    return <Icon size={16} className="text-amber-500" />;
                  })()}
                  <span className="font-medium text-text-primary">
                    {nextLockedChapter.unlockRequirement.description}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Chapter List */}
        <div className="space-y-3 mb-8">
          <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide px-1">
            Chapters
          </h3>

          {STORY_CHAPTERS.map((chapter, index) => {
            const isUnlocked = unlockedChapters.some(c => c.id === chapter.id);
            const isRead = isChapterRead(chapter.id);

            return (
              <motion.button
                key={chapter.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => isUnlocked && handleChapterClick(chapter)}
                disabled={!isUnlocked}
                className={`w-full p-4 rounded-xl text-left transition-all ${
                  isUnlocked
                    ? 'bg-surface-elevated hover:bg-surface-elevated/80 cursor-pointer'
                    : 'bg-surface-elevated/30 cursor-not-allowed opacity-60'
                } ${isRead ? '' : isUnlocked ? 'ring-2 ring-amber-500/50' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isUnlocked
                        ? isRead
                          ? 'bg-amber-500/20'
                          : 'bg-amber-500/30'
                        : 'bg-surface-elevated'
                    }`}
                  >
                    {isUnlocked ? (
                      isRead ? (
                        <Eye size={22} className="text-amber-500" />
                      ) : (
                        <span className="text-lg font-bold text-amber-500">
                          {chapter.chapterNumber}
                        </span>
                      )
                    ) : (
                      <Lock size={20} className="text-text-muted" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-text-muted">
                        Chapter {chapter.chapterNumber}
                      </span>
                      {isUnlocked && !isRead && (
                        <span className="text-xs px-1.5 py-0.5 bg-amber-500 text-white rounded font-medium">
                          NEW
                        </span>
                      )}
                    </div>
                    <h4
                      className={`font-semibold truncate ${
                        isUnlocked ? 'text-text-primary' : 'text-text-muted'
                      }`}
                    >
                      {isUnlocked ? chapter.title : '???'}
                    </h4>
                    <p className="text-sm text-text-muted truncate">
                      {isUnlocked ? chapter.subtitle : chapter.unlockRequirement.description}
                    </p>
                  </div>
                  {isUnlocked && (
                    <ChevronRight size={20} className="text-text-muted flex-shrink-0" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Bonus Fragments Section */}
        <div className="space-y-3">
          <button
            onClick={() => setShowBonusSection(!showBonusSection)}
            className="w-full flex items-center justify-between px-1 py-2"
          >
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide flex items-center gap-2">
              <Sparkles size={16} className="text-purple-400" />
              Bonus Fragments
              {unlockedBonus.length > 0 && (
                <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded-full">
                  {unlockedBonus.length}
                </span>
              )}
            </h3>
            <ChevronRight
              size={18}
              className={`text-text-muted transition-transform ${showBonusSection ? 'rotate-90' : ''}`}
            />
          </button>

          <AnimatePresence>
            {showBonusSection && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden space-y-2"
              >
                {unlockedBonus.length === 0 ? (
                  <div className="text-center py-8 text-text-muted">
                    <EyeOff size={32} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No bonus fragments yet.</p>
                    <p className="text-xs mt-1">
                      Achieve special milestones to unlock extra lore!
                    </p>
                  </div>
                ) : (
                  BONUS_FRAGMENTS.map((bonus, index) => {
                    const isUnlocked = unlockedBonus.some(b => b.id === bonus.id);
                    const isRead = isBonusRead(bonus.id);

                    if (!isUnlocked) return null;

                    return (
                      <motion.button
                        key={bonus.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleBonusClick(bonus)}
                        className={`w-full p-3 rounded-xl text-left transition-all bg-purple-500/10 hover:bg-purple-500/20 ${
                          isRead ? '' : 'ring-1 ring-purple-500/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                            <Sparkles size={18} className="text-purple-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-text-primary truncate">
                                {bonus.title}
                              </h4>
                              {!isRead && (
                                <span className="text-xs px-1.5 py-0.5 bg-purple-500 text-white rounded font-medium">
                                  NEW
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-text-muted truncate">
                              {bonus.requirement.description}
                            </p>
                          </div>
                          <ChevronRight size={16} className="text-text-muted flex-shrink-0" />
                        </div>
                      </motion.button>
                    );
                  })
                )}

                {/* Show locked bonus hints */}
                {BONUS_FRAGMENTS.filter(b => !unlockedBonus.some(u => u.id === b.id))
                  .slice(0, 3)
                  .map((bonus, index) => (
                    <div
                      key={bonus.id}
                      className="p-3 rounded-xl bg-surface-elevated/30 opacity-50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center flex-shrink-0">
                          <Lock size={16} className="text-text-muted" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-text-muted">Hidden Fragment</h4>
                          <p className="text-xs text-text-muted">
                            {bonus.requirement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Your Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card p-4 mt-8"
        >
          <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-3">
            Your Progress
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-xp" />
              <span className="text-text-secondary">{playerStats.totalXP.toLocaleString()} XP</span>
            </div>
            <div className="flex items-center gap-2">
              <Target size={16} className="text-correct" />
              <span className="text-text-secondary">{playerStats.completedZones} zones</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy size={16} className="text-amber-500" />
              <span className="text-text-secondary">{playerStats.bossesDefeated} bosses</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame size={16} className="text-streak" />
              <span className="text-text-secondary">{playerStats.currentStreak} day streak</span>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Chapter Detail Modal */}
      <AnimatePresence>
        {selectedChapter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedChapter(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-surface rounded-2xl max-w-lg w-full max-h-[85vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-border bg-gradient-to-r from-amber-900/20 to-orange-900/10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-amber-500 font-medium mb-1">
                      Chapter {selectedChapter.chapterNumber}
                    </p>
                    <h2 className="text-xl font-bold text-text-primary">
                      {selectedChapter.title}
                    </h2>
                    <p className="text-sm text-text-muted mt-0.5">
                      {selectedChapter.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedChapter(null)}
                    className="p-2 hover:bg-surface-elevated rounded-lg transition-colors -mr-2 -mt-1"
                  >
                    <X size={20} className="text-text-muted" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="px-6 py-5 overflow-y-auto max-h-[60vh]">
                <div className="prose prose-sm prose-invert max-w-none">
                  {selectedChapter.content.split('\n\n').map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-text-secondary leading-relaxed mb-4 last:mb-0 whitespace-pre-wrap"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Cliffhanger */}
                {selectedChapter.cliffhanger && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-sm text-amber-500/80 italic">
                      {selectedChapter.cliffhanger}
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-border bg-surface-elevated/50">
                <button
                  onClick={() => setSelectedChapter(null)}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bonus Fragment Modal */}
      <AnimatePresence>
        {selectedBonus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedBonus(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-surface rounded-2xl max-w-lg w-full max-h-[80vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-border bg-gradient-to-r from-purple-900/20 to-indigo-900/10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Sparkles size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-purple-400 font-medium">Bonus Fragment</p>
                      <h2 className="text-lg font-bold text-text-primary">
                        {selectedBonus.title}
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedBonus(null)}
                    className="p-2 hover:bg-surface-elevated rounded-lg transition-colors -mr-2 -mt-1"
                  >
                    <X size={20} className="text-text-muted" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="px-6 py-5 overflow-y-auto max-h-[55vh]">
                <div className="prose prose-sm prose-invert max-w-none">
                  {selectedBonus.content.split('\n\n').map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-text-secondary leading-relaxed mb-4 last:mb-0 whitespace-pre-wrap"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-border bg-surface-elevated/50">
                <p className="text-xs text-text-muted text-center mb-3">
                  Earned by: {selectedBonus.requirement.description}
                </p>
                <button
                  onClick={() => setSelectedBonus(null)}
                  className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
