'use client';

import { useMemo, useCallback } from 'react';
import { useUserStore } from '@/lib/stores/userStore';
import { getAllQuestions, getRandomQuestions, Question } from '@/data/questions/index';

interface UseGameQuestionsOptions {
  count?: number;
  subjects?: string[];
  difficulty?: 'easy' | 'medium' | 'hard' | 'mixed';
  shuffle?: boolean;
}

export function useGameQuestions(options: UseGameQuestionsOptions = {}) {
  const { profile } = useUserStore();

  const {
    count = 20,
    subjects,
    difficulty = 'mixed',
    shuffle = true,
  } = options;

  // Calculate active subjects and year group
  const yearGroup = profile?.yearGroup || 9;
  const activeSubjects = subjects || profile?.subjects || ['maths', 'biology', 'chemistry', 'physics', 'english', 'history', 'geography'];

  const questions = useMemo(() => {
    // Use the optimized getRandomQuestions function
    return getRandomQuestions(count, {
      subjects: activeSubjects,
      yearGroup,
      difficulty: difficulty === 'mixed' ? undefined : difficulty,
    });
  }, [yearGroup, activeSubjects.join(','), difficulty, count, shuffle]);

  // Get more questions (for infinite games)
  const getMoreQuestions = useCallback((existingIds: string[], additionalCount: number = 10): Question[] => {
    const all = getAllQuestions();

    let filtered = all.filter(q =>
      q.yearGroup <= yearGroup &&
      activeSubjects.includes(q.subject) &&
      !existingIds.includes(q.id)
    );

    if (difficulty !== 'mixed') {
      filtered = filtered.filter(q => q.difficulty === difficulty);
    }

    return filtered.sort(() => Math.random() - 0.5).slice(0, additionalCount);
  }, [yearGroup, activeSubjects, difficulty]);

  // Calculate total available
  const totalAvailable = useMemo(() => {
    const all = getAllQuestions();
    return all.filter(q =>
      q.yearGroup <= yearGroup &&
      activeSubjects.includes(q.subject)
    ).length;
  }, [yearGroup, activeSubjects.join(',')]);

  return {
    questions,
    getMoreQuestions,
    totalAvailable,
  };
}

// Simple function version for non-hook contexts
export function getGameQuestions(options: {
  yearGroup?: number;
  subjects?: string[];
  difficulty?: 'easy' | 'medium' | 'hard' | 'mixed';
  count?: number;
} = {}): Question[] {
  const {
    yearGroup = 9,
    subjects = ['maths', 'biology', 'chemistry', 'physics', 'english', 'history', 'geography'],
    difficulty = 'mixed',
    count = 20,
  } = options;

  return getRandomQuestions(count, {
    subjects,
    yearGroup,
    difficulty: difficulty === 'mixed' ? undefined : difficulty,
  });
}

export default useGameQuestions;
