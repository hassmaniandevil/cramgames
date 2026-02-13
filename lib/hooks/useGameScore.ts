'use client';

import { useState, useCallback } from 'react';
import {
  calculateComboMultiplier,
  calculatePoints,
  calculateXP,
  calculateAccuracy,
  getGrade,
} from '@/lib/utils/gameUtils';

export interface GameScoreOptions {
  basePointsPerQuestion?: number;
  difficultyMultiplier?: number;
}

export interface GameScoreResult {
  score: number;
  combo: number;
  maxCombo: number;
  correctAnswers: number;
  wrongAnswers: number;
  totalAnswered: number;
  accuracy: number;
  xpEarned: number;
  grade: { grade: string; color: string; emoji: string };
  comboMultiplier: number;
  isPerfect: boolean;
  recordCorrect: (timeBonus?: number) => number; // Returns points earned
  recordWrong: () => void;
  reset: () => void;
}

/**
 * Hook for managing game scoring
 *
 * Tracks score, combo, accuracy, and calculates XP
 */
export function useGameScore({
  basePointsPerQuestion = 100,
  difficultyMultiplier = 1,
}: GameScoreOptions = {}): GameScoreResult {
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const totalAnswered = correctAnswers + wrongAnswers;
  const accuracy = calculateAccuracy(correctAnswers, totalAnswered);
  const isPerfect = wrongAnswers === 0 && correctAnswers > 0;
  const xpEarned = calculateXP(correctAnswers, totalAnswered, maxCombo, difficultyMultiplier, isPerfect);
  const grade = getGrade(accuracy);
  const comboMultiplier = calculateComboMultiplier(combo);

  const recordCorrect = useCallback((timeBonus: number = 0): number => {
    const newCombo = combo + 1;
    const points = calculatePoints(basePointsPerQuestion, newCombo, timeBonus, difficultyMultiplier);

    setCombo(newCombo);
    setMaxCombo((prev) => Math.max(prev, newCombo));
    setCorrectAnswers((prev) => prev + 1);
    setScore((prev) => prev + points);

    return points;
  }, [combo, basePointsPerQuestion, difficultyMultiplier]);

  const recordWrong = useCallback(() => {
    setCombo(0);
    setWrongAnswers((prev) => prev + 1);
  }, []);

  const reset = useCallback(() => {
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
  }, []);

  return {
    score,
    combo,
    maxCombo,
    correctAnswers,
    wrongAnswers,
    totalAnswered,
    accuracy,
    xpEarned,
    grade,
    comboMultiplier,
    isPerfect,
    recordCorrect,
    recordWrong,
    reset,
  };
}
