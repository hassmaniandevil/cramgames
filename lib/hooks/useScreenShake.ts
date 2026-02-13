'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

export interface ScreenShakeOptions {
  intensity?: number;
  duration?: number;
}

/**
 * Hook for screen shake effect
 *
 * Returns a shake state and trigger function
 * Apply the shakeStyle to the container element
 */
export function useScreenShake() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const shake = useCallback(({ intensity = 10, duration = 300 }: ScreenShakeOptions = {}) => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / duration;

      if (progress >= 1) {
        setOffset({ x: 0, y: 0 });
        return;
      }

      // Decay shake intensity over time
      const currentIntensity = intensity * (1 - progress);
      const x = (Math.random() - 0.5) * 2 * currentIntensity;
      const y = (Math.random() - 0.5) * 2 * currentIntensity;

      setOffset({ x, y });
      animationRef.current = requestAnimationFrame(animate);
    };

    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    animate();

    // Ensure cleanup after duration
    timeoutRef.current = setTimeout(() => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setOffset({ x: 0, y: 0 });
    }, duration);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shakeStyle = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
  };

  return {
    shake,
    shakeStyle,
    isShaking: offset.x !== 0 || offset.y !== 0,
  };
}

/**
 * Predefined shake intensities
 */
export const ShakePresets = {
  light: { intensity: 5, duration: 200 },
  medium: { intensity: 10, duration: 300 },
  heavy: { intensity: 20, duration: 400 },
  wrong: { intensity: 8, duration: 250 },
  correct: { intensity: 3, duration: 100 },
};
