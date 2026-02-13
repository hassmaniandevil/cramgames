'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export interface GameTimerOptions {
  initialTime: number;
  countDown?: boolean; // true = countdown, false = count up
  onTimeUp?: () => void;
  autoStart?: boolean;
}

export interface GameTimerResult {
  time: number;
  isRunning: boolean;
  isUrgent: boolean; // true when time < 10 seconds (countdown)
  isCritical: boolean; // true when time < 5 seconds (countdown)
  formattedTime: string;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: (newTime?: number) => void;
  addTime: (seconds: number) => void;
}

/**
 * Hook for managing game timers
 *
 * Supports both countdown and count-up modes
 * Provides urgency states for visual feedback
 */
export function useGameTimer({
  initialTime,
  countDown = true,
  onTimeUp,
  autoStart = false,
}: GameTimerOptions): GameTimerResult {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(autoStart);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const onTimeUpRef = useRef(onTimeUp);

  // Keep callback ref updated
  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  // Timer logic
  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (countDown) {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            setIsRunning(false);
            onTimeUpRef.current?.();
            return 0;
          }
          return newTime;
        } else {
          return prevTime + 1;
        }
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, countDown]);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resume = useCallback(() => {
    setIsRunning(true);
  }, []);

  const reset = useCallback((newTime?: number) => {
    setTime(newTime ?? initialTime);
    setIsRunning(false);
  }, [initialTime]);

  const addTime = useCallback((seconds: number) => {
    setTime((prev) => Math.max(0, prev + seconds));
  }, []);

  // Format time as MM:SS or M:SS
  const formattedTime = `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`;

  return {
    time,
    isRunning,
    isUrgent: countDown && time <= 10 && time > 5,
    isCritical: countDown && time <= 5,
    formattedTime,
    start,
    pause,
    resume,
    reset,
    addTime,
  };
}
