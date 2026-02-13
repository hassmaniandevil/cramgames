'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings,
  X,
  Check,
  GraduationCap,
  BookOpen,
  Calculator,
  Dna,
  FlaskConical,
  Atom,
  Feather,
  ScrollText,
  Globe,
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useUserStore, YearGroup } from '@/lib/stores/userStore';

/**
 * Quick Settings Component
 *
 * Super intuitive way to change:
 * - School year (affects difficulty)
 * - Active subjects (focus areas)
 *
 * ADHD Principle: No friction, visual, one-tap toggles
 */

const YEAR_GROUPS: { value: YearGroup; label: string; stage: string }[] = [
  { value: 7, label: 'Year 7', stage: 'KS3' },
  { value: 8, label: 'Year 8', stage: 'KS3' },
  { value: 9, label: 'Year 9', stage: 'KS3' },
  { value: 10, label: 'Year 10', stage: 'GCSE' },
  { value: 11, label: 'Year 11', stage: 'GCSE' },
  { value: 12, label: 'Year 12', stage: 'A-Level' },
  { value: 13, label: 'Year 13', stage: 'A-Level' },
];

const SUBJECTS = [
  { id: 'maths', name: 'Maths', icon: Calculator, color: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/50' },
  { id: 'biology', name: 'Biology', icon: Dna, color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/50' },
  { id: 'chemistry', name: 'Chemistry', icon: FlaskConical, color: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-500/50' },
  { id: 'physics', name: 'Physics', icon: Atom, color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/50' },
  { id: 'english', name: 'English', icon: Feather, color: 'text-rose-400', bg: 'bg-rose-500/20', border: 'border-rose-500/50' },
  { id: 'history', name: 'History', icon: ScrollText, color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/50' },
  { id: 'geography', name: 'Geography', icon: Globe, color: 'text-teal-400', bg: 'bg-teal-500/20', border: 'border-teal-500/50' },
];

interface QuickSettingsProps {
  className?: string;
}

export function QuickSettings({ className }: QuickSettingsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { profile, setProfile } = useUserStore();

  // Use local state for immediate UI feedback
  const [selectedYear, setSelectedYear] = useState<YearGroup>(profile?.yearGroup || 10);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(
    profile?.subjects?.length ? profile.subjects : SUBJECTS.map(s => s.id)
  );

  // Sync local state when profile changes (e.g., on hydration)
  useEffect(() => {
    if (profile?.yearGroup) {
      setSelectedYear(profile.yearGroup);
    }
    if (profile?.subjects?.length) {
      setSelectedSubjects(profile.subjects);
    }
  }, [profile?.yearGroup, profile?.subjects]);

  const toggleSubject = (subjectId: string) => {
    const newSubjects = selectedSubjects.includes(subjectId)
      ? selectedSubjects.filter(s => s !== subjectId)
      : [...selectedSubjects, subjectId];

    // Ensure at least one subject is selected
    if (newSubjects.length > 0) {
      setSelectedSubjects(newSubjects);
      setProfile({ subjects: newSubjects });
    }
  };

  const handleYearChange = (year: YearGroup) => {
    setSelectedYear(year);
    setProfile({ yearGroup: year });
  };

  const currentYearInfo = YEAR_GROUPS.find(y => y.value === selectedYear);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors',
          className
        )}
      >
        <GraduationCap size={18} className="text-purple-400" />
        <span className="text-sm font-medium text-white">
          {currentYearInfo?.label}
        </span>
        <span className="text-xs px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400">
          {selectedSubjects.length} subjects
        </span>
      </button>

      {/* Settings modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="relative z-10 w-full max-w-md bg-[#1a1a24] rounded-t-3xl sm:rounded-2xl p-6 max-h-[85vh] overflow-y-auto border border-white/10"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Settings size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-white">Quick Settings</h2>
                    <p className="text-xs text-gray-400">Customize your experience</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              </div>

              {/* Year Level */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                  <GraduationCap size={16} />
                  School Year
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {YEAR_GROUPS.map((year) => {
                    const isSelected = selectedYear === year.value;
                    return (
                      <div
                        key={year.value}
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleYearChange(year.value);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            handleYearChange(year.value);
                          }
                        }}
                        className={cn(
                          'py-3 px-2 rounded-xl text-center transition-all cursor-pointer select-none',
                          isSelected
                            ? 'bg-purple-600 text-white'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10 active:bg-white/20'
                        )}
                      >
                        <div className="text-sm font-semibold pointer-events-none">
                          {year.label.replace('Year ', 'Y')}
                        </div>
                        <div className={cn(
                          'text-xs mt-0.5 pointer-events-none',
                          isSelected ? 'text-white/70' : 'text-gray-500'
                        )}>
                          {year.stage}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Subjects */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                  <BookOpen size={16} />
                  Subjects
                  <span className="text-xs text-gray-500">(tap to toggle)</span>
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {SUBJECTS.map((subject) => {
                    const isActive = selectedSubjects.includes(subject.id);
                    const Icon = subject.icon;

                    return (
                      <button
                        key={subject.id}
                        type="button"
                        onClick={() => toggleSubject(subject.id)}
                        className={cn(
                          'flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer border-2',
                          isActive
                            ? `${subject.bg} ${subject.border} ${subject.color}`
                            : 'bg-white/5 text-gray-400 border-transparent hover:bg-white/10'
                        )}
                      >
                        <div className={cn(
                          'w-8 h-8 rounded-lg flex items-center justify-center',
                          isActive ? 'bg-white/20' : 'bg-white/5'
                        )}>
                          <Icon size={18} />
                        </div>
                        <span className="flex-1 text-left font-medium text-sm">
                          {subject.name}
                        </span>
                        {isActive && (
                          <Check size={16} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick summary */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-gray-400 text-center">
                  Showing <span className="font-semibold text-white">{currentYearInfo?.stage}</span> content
                  for <span className="font-semibold text-purple-400">{selectedSubjects.length} subjects</span>
                </p>
              </div>

              {/* Done button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full mt-4 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-500 transition-colors"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default QuickSettings;
