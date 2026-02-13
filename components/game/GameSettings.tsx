'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, GraduationCap, BookOpen, Sparkles, ChevronDown } from 'lucide-react';
import { useUserStore, YearGroup, Curriculum } from '@/lib/stores/userStore';

const YEAR_GROUPS: { value: YearGroup; label: string; description: string }[] = [
  { value: 1, label: 'Year 1', description: 'Ages 5-6' },
  { value: 2, label: 'Year 2', description: 'Ages 6-7' },
  { value: 3, label: 'Year 3', description: 'Ages 7-8' },
  { value: 4, label: 'Year 4', description: 'Ages 8-9' },
  { value: 5, label: 'Year 5', description: 'Ages 9-10' },
  { value: 6, label: 'Year 6', description: 'Ages 10-11' },
  { value: 7, label: 'Year 7', description: 'Ages 11-12' },
  { value: 8, label: 'Year 8', description: 'Ages 12-13' },
  { value: 9, label: 'Year 9', description: 'Ages 13-14' },
  { value: 10, label: 'Year 10', description: 'GCSE Year 1' },
  { value: 11, label: 'Year 11', description: 'GCSE Year 2' },
  { value: 12, label: 'Year 12', description: 'A-Level Year 1' },
  { value: 13, label: 'Year 13', description: 'A-Level Year 2' },
];

const SUBJECTS = [
  { id: 'maths', label: 'Maths', color: 'bg-blue-500' },
  { id: 'biology', label: 'Biology', color: 'bg-green-500' },
  { id: 'chemistry', label: 'Chemistry', color: 'bg-purple-500' },
  { id: 'physics', label: 'Physics', color: 'bg-orange-500' },
  { id: 'english', label: 'English', color: 'bg-pink-500' },
  { id: 'history', label: 'History', color: 'bg-amber-500' },
];

const DIFFICULTIES = [
  { id: 'easy', label: 'Easy', description: 'Foundation level' },
  { id: 'medium', label: 'Medium', description: 'Standard level' },
  { id: 'hard', label: 'Hard', description: 'Challenge level' },
  { id: 'mixed', label: 'Mixed', description: 'All difficulties' },
];

interface GameSettingsProps {
  // Optional: allow games to show only certain settings
  showYearGroup?: boolean;
  showSubjects?: boolean;
  showDifficulty?: boolean;
  // Current game-specific difficulty (if different from global)
  currentDifficulty?: string;
  onDifficultyChange?: (difficulty: string) => void;
}

export function GameSettingsButton({
  showYearGroup = true,
  showSubjects = true,
  showDifficulty = true,
  currentDifficulty,
  onDifficultyChange,
}: GameSettingsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
        aria-label="Game Settings"
      >
        <Settings size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <GameSettingsModal
            onClose={() => setIsOpen(false)}
            showYearGroup={showYearGroup}
            showSubjects={showSubjects}
            showDifficulty={showDifficulty}
            currentDifficulty={currentDifficulty}
            onDifficultyChange={onDifficultyChange}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function GameSettingsModal({
  onClose,
  showYearGroup,
  showSubjects,
  showDifficulty,
  currentDifficulty,
  onDifficultyChange,
}: GameSettingsProps & { onClose: () => void }) {
  const { profile, setProfile } = useUserStore();
  const [localYearGroup, setLocalYearGroup] = useState<YearGroup>(profile?.yearGroup || 9);
  const [localSubjects, setLocalSubjects] = useState<string[]>(profile?.subjects || ['maths', 'biology', 'chemistry', 'physics']);
  const [localDifficulty, setLocalDifficulty] = useState(currentDifficulty || 'mixed');
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);

  const handleSave = () => {
    setProfile({
      yearGroup: localYearGroup,
      subjects: localSubjects,
    });
    if (onDifficultyChange) {
      onDifficultyChange(localDifficulty);
    }
    onClose();
  };

  const toggleSubject = (subjectId: string) => {
    if (localSubjects.includes(subjectId)) {
      if (localSubjects.length > 1) {
        setLocalSubjects(localSubjects.filter(s => s !== subjectId));
      }
    } else {
      setLocalSubjects([...localSubjects, subjectId]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#1a1a24] rounded-2xl overflow-hidden border border-white/10"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Settings className="text-purple-400" size={20} />
            Game Settings
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Year Group */}
          {showYearGroup && (
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <GraduationCap size={16} className="text-blue-400" />
                Year Group
              </label>
              <div className="relative">
                <button
                  onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
                  className="w-full flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div>
                    <span className="font-medium">Year {localYearGroup}</span>
                    <span className="text-gray-500 ml-2 text-sm">
                      {YEAR_GROUPS.find(y => y.value === localYearGroup)?.description}
                    </span>
                  </div>
                  <ChevronDown size={20} className={`text-gray-400 transition-transform ${yearDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {yearDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-[#252532] border border-white/10 rounded-xl overflow-hidden z-10 max-h-60 overflow-y-auto"
                    >
                      {YEAR_GROUPS.map((year) => (
                        <button
                          key={year.value}
                          onClick={() => {
                            setLocalYearGroup(year.value);
                            setYearDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-3 hover:bg-white/10 transition-colors ${
                            localYearGroup === year.value ? 'bg-purple-500/20 text-purple-400' : ''
                          }`}
                        >
                          <span className="font-medium">{year.label}</span>
                          <span className="text-sm text-gray-500">{year.description}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Subjects */}
          {showSubjects && (
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <BookOpen size={16} className="text-green-400" />
                Subjects
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SUBJECTS.map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => toggleSubject(subject.id)}
                    className={`p-3 rounded-xl border transition-all ${
                      localSubjects.includes(subject.id)
                        ? 'bg-white/10 border-purple-500'
                        : 'bg-white/5 border-white/10 opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${subject.color}`} />
                      <span className="font-medium text-sm">{subject.label}</span>
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">Select at least one subject</p>
            </div>
          )}

          {/* Difficulty */}
          {showDifficulty && (
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Sparkles size={16} className="text-amber-400" />
                Difficulty
              </label>
              <div className="grid grid-cols-2 gap-2">
                {DIFFICULTIES.map((diff) => (
                  <button
                    key={diff.id}
                    onClick={() => setLocalDifficulty(diff.id)}
                    className={`p-3 rounded-xl border transition-all text-left ${
                      localDifficulty === diff.id
                        ? 'bg-white/10 border-purple-500'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="font-medium text-sm">{diff.label}</div>
                    <div className="text-xs text-gray-500">{diff.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-white/5 hover:bg-white/10 rounded-xl font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-3 px-4 bg-purple-600 hover:bg-purple-500 rounded-xl font-medium transition-colors"
          >
            Save Changes
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default GameSettingsButton;
