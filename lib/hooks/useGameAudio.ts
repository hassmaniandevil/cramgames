'use client';

import { useCallback, useEffect, useRef } from 'react';
import {
  playCorrectSound,
  playWrongSound,
  playComboSound,
  playXPSound,
  playLevelUpSound,
  playStreakSound,
  playTapSound,
  playSuccessSound,
  playTimerWarningSound,
  playTickSound,
  playGoSound,
  playTimeUpSound,
  playBossDefeatedSound,
  playPerfectSound,
  playStreakBrokenSound,
  initAudio,
  setVolume,
  setMuted,
} from '@/lib/audio/synthSounds';
import { vibrateSuccess, vibrateError, vibrateCombo } from '@/lib/utils/gameUtils';

export interface UseGameAudioOptions {
  enableHaptics?: boolean;
  volume?: number;
  muted?: boolean;
}

/**
 * Hook for managing game audio with haptic feedback
 *
 * Combines sound effects with device vibration for multi-sensory feedback
 */
export function useGameAudio({
  enableHaptics = true,
  volume = 0.5,
  muted = false,
}: UseGameAudioOptions = {}) {
  const initialized = useRef(false);

  // Initialize audio on mount
  useEffect(() => {
    if (!initialized.current) {
      initAudio();
      initialized.current = true;
    }
    setVolume(volume);
    setMuted(muted);
  }, [volume, muted]);

  // Sound + haptic combinations for correct answer
  const playCorrect = useCallback((combo: number = 0) => {
    playCorrectSound();
    if (combo > 1) {
      playComboSound(combo);
    }
    if (enableHaptics) {
      if (combo > 5) {
        vibrateCombo(combo);
      } else {
        vibrateSuccess();
      }
    }
  }, [enableHaptics]);

  // Sound + haptic for wrong answer
  const playWrong = useCallback(() => {
    playWrongSound();
    if (enableHaptics) {
      vibrateError();
    }
  }, [enableHaptics]);

  // Sound for game countdown
  const playCountdown = useCallback((count: number) => {
    if (count > 0) {
      playTickSound();
    } else {
      playGoSound();
    }
  }, []);

  // Sound for game finish
  const playFinish = useCallback((isPerfect: boolean, isBoss: boolean = false) => {
    if (isBoss) {
      playBossDefeatedSound();
    } else if (isPerfect) {
      playPerfectSound();
    } else {
      playSuccessSound();
    }
  }, []);

  return {
    playCorrect,
    playWrong,
    playCountdown,
    playFinish,
    playXP: playXPSound,
    playLevelUp: playLevelUpSound,
    playStreak: playStreakSound,
    playStreakBroken: playStreakBrokenSound,
    playTap: playTapSound,
    playTimerWarning: playTimerWarningSound,
    playTimeUp: playTimeUpSound,
    initAudio,
  };
}
