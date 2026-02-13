'use client';

// Haptic feedback patterns
type HapticPattern = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error' | 'selection';

// Vibration patterns in milliseconds [vibrate, pause, vibrate, pause, ...]
const PATTERNS: Record<HapticPattern, number | number[]> = {
  light: 10,
  medium: 20,
  heavy: 40,
  success: [10, 30, 10, 30, 20],
  warning: [20, 50, 20],
  error: [50, 30, 50, 30, 50],
  selection: 5,
};

// Check if haptics are available
export function hasHaptics(): boolean {
  return typeof navigator !== 'undefined' && 'vibrate' in navigator;
}

// Trigger haptic feedback
export function haptic(pattern: HapticPattern = 'light') {
  if (!hasHaptics()) return;

  try {
    navigator.vibrate(PATTERNS[pattern]);
  } catch (e) {
    // Silently fail
  }
}

// Cancel any ongoing vibration
export function cancelHaptic() {
  if (!hasHaptics()) return;

  try {
    navigator.vibrate(0);
  } catch (e) {
    // Silently fail
  }
}

// Haptic feedback for correct answer
export function hapticCorrect() {
  haptic('success');
}

// Haptic feedback for wrong answer
export function hapticWrong() {
  haptic('error');
}

// Haptic feedback for UI interaction
export function hapticTap() {
  haptic('selection');
}

// Haptic feedback for milestone/celebration
export function hapticCelebration() {
  if (!hasHaptics()) return;

  // Exciting pattern for achievements
  try {
    navigator.vibrate([20, 40, 20, 40, 30, 50, 40, 60, 50]);
  } catch (e) {
    // Silently fail
  }
}

// Haptic feedback for combo
export function hapticCombo(comboLevel: number) {
  if (!hasHaptics()) return;

  // Increasingly intense vibration for higher combos
  const intensity = Math.min(comboLevel * 5, 50);

  try {
    navigator.vibrate(intensity);
  } catch (e) {
    // Silently fail
  }
}
