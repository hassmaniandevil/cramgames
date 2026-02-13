'use client';

/**
 * Synthesized Audio System
 *
 * Creates satisfying game sounds using Web Audio API.
 * No external audio files needed - works offline.
 *
 * ADHD Principle: Sensory feedback that's satisfying but not chaotic
 */

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  // Resume if suspended (browser autoplay policy)
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  return audioContext;
}

// Volume control
let masterVolume = 0.5;
let isMuted = false;

export function setVolume(volume: number) {
  masterVolume = Math.max(0, Math.min(1, volume));
}

export function getVolume(): number {
  return masterVolume;
}

export function setMuted(muted: boolean) {
  isMuted = muted;
}

export function isSoundMuted(): boolean {
  return isMuted;
}

// Helper to create oscillator
function createOscillator(
  ctx: AudioContext,
  frequency: number,
  type: OscillatorType = 'sine',
  duration: number,
  volume: number = 1
): { osc: OscillatorNode; gain: GainNode } {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.value = frequency;

  gain.gain.value = volume * masterVolume;

  osc.connect(gain);
  gain.connect(ctx.destination);

  return { osc, gain };
}

/**
 * Correct answer sound - bright, ascending, satisfying pop
 */
export function playCorrectSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Primary tone - bright pop
    const { osc: osc1, gain: gain1 } = createOscillator(ctx, 880, 'sine', 0.15, 0.4);
    gain1.gain.setValueAtTime(0.4 * masterVolume, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc1.start(now);
    osc1.stop(now + 0.15);

    // Harmonic overtone
    const { osc: osc2, gain: gain2 } = createOscillator(ctx, 1320, 'sine', 0.1, 0.2);
    gain2.gain.setValueAtTime(0.2 * masterVolume, now + 0.02);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
    osc2.start(now + 0.02);
    osc2.stop(now + 0.12);

    // Quick ascending arpeggio for extra satisfaction
    const { osc: osc3, gain: gain3 } = createOscillator(ctx, 1760, 'sine', 0.08, 0.15);
    gain3.gain.setValueAtTime(0.15 * masterVolume, now + 0.05);
    gain3.gain.exponentialRampToValueAtTime(0.01, now + 0.13);
    osc3.start(now + 0.05);
    osc3.stop(now + 0.13);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Wrong answer sound - soft, gentle "boop" (not harsh)
 */
export function playWrongSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Soft descending tone - not harsh or punishing
    const { osc, gain } = createOscillator(ctx, 300, 'sine', 0.2, 0.25);
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.15);
    gain.gain.setValueAtTime(0.25 * masterVolume, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.start(now);
    osc.stop(now + 0.2);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Combo sound - escalating pitch based on combo level
 */
export function playComboSound(combo: number) {
  if (isMuted || combo < 2) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Base frequency increases with combo
    const baseFreq = 440 + (combo - 2) * 100;
    const volume = Math.min(0.5, 0.3 + combo * 0.05);

    // Shimmering chord for combos
    const frequencies = [baseFreq, baseFreq * 1.25, baseFreq * 1.5];

    frequencies.forEach((freq, i) => {
      const { osc, gain } = createOscillator(ctx, freq, 'sine', 0.2, volume / 3);
      gain.gain.setValueAtTime((volume / 3) * masterVolume, now + i * 0.02);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.start(now + i * 0.02);
      osc.stop(now + 0.25);
    });

    // Add sparkle for high combos
    if (combo >= 5) {
      const { osc: sparkle, gain: sparkleGain } = createOscillator(ctx, 2000 + combo * 100, 'sine', 0.1, 0.15);
      sparkleGain.gain.setValueAtTime(0.15 * masterVolume, now + 0.05);
      sparkleGain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      sparkle.start(now + 0.05);
      sparkle.stop(now + 0.15);
    }
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * XP gain sound - satisfying coin-like ding
 */
export function playXPSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Coin ding sound
    const { osc, gain } = createOscillator(ctx, 1200, 'sine', 0.15, 0.3);
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
    gain.gain.setValueAtTime(0.3 * masterVolume, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.start(now);
    osc.stop(now + 0.15);

    // Metallic overtone
    const { osc: osc2, gain: gain2 } = createOscillator(ctx, 2400, 'sine', 0.1, 0.1);
    gain2.gain.setValueAtTime(0.1 * masterVolume, now);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc2.start(now);
    osc2.stop(now + 0.1);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Level up sound - triumphant fanfare
 */
export function playLevelUpSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Ascending fanfare
    const notes = [523, 659, 784, 1047]; // C5, E5, G5, C6

    notes.forEach((freq, i) => {
      const { osc, gain } = createOscillator(ctx, freq, 'sine', 0.3, 0.3);
      const startTime = now + i * 0.1;
      gain.gain.setValueAtTime(0.3 * masterVolume, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
      osc.start(startTime);
      osc.stop(startTime + 0.3);
    });

    // Sustained final note
    const { osc: final, gain: finalGain } = createOscillator(ctx, 1047, 'sine', 0.5, 0.4);
    finalGain.gain.setValueAtTime(0.4 * masterVolume, now + 0.4);
    finalGain.gain.exponentialRampToValueAtTime(0.01, now + 0.9);
    final.start(now + 0.4);
    final.stop(now + 0.9);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Streak milestone sound - celebratory
 */
export function playStreakSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Quick ascending scale
    const notes = [440, 554, 659, 880];

    notes.forEach((freq, i) => {
      const { osc, gain } = createOscillator(ctx, freq, 'triangle', 0.15, 0.25);
      const startTime = now + i * 0.08;
      gain.gain.setValueAtTime(0.25 * masterVolume, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.15);
      osc.start(startTime);
      osc.stop(startTime + 0.15);
    });

    // Shimmer at the end
    const { osc: shimmer, gain: shimmerGain } = createOscillator(ctx, 1760, 'sine', 0.2, 0.2);
    shimmerGain.gain.setValueAtTime(0.2 * masterVolume, now + 0.32);
    shimmerGain.gain.exponentialRampToValueAtTime(0.01, now + 0.52);
    shimmer.start(now + 0.32);
    shimmer.stop(now + 0.52);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Button tap sound - subtle click
 */
export function playTapSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Quick, subtle click
    const { osc, gain } = createOscillator(ctx, 600, 'sine', 0.05, 0.15);
    gain.gain.setValueAtTime(0.15 * masterVolume, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
    osc.start(now);
    osc.stop(now + 0.05);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Success/completion sound
 */
export function playSuccessSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Major chord arpeggio
    const notes = [523, 659, 784]; // C major

    notes.forEach((freq, i) => {
      const { osc, gain } = createOscillator(ctx, freq, 'sine', 0.25, 0.25);
      const startTime = now + i * 0.05;
      gain.gain.setValueAtTime(0.25 * masterVolume, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.25);
      osc.start(startTime);
      osc.stop(startTime + 0.25);
    });
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Timer warning sound - gentle reminder
 */
export function playTimerWarningSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Soft double-beep
    [0, 0.15].forEach(delay => {
      const { osc, gain } = createOscillator(ctx, 440, 'sine', 0.1, 0.2);
      gain.gain.setValueAtTime(0.2 * masterVolume, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.01, now + delay + 0.1);
      osc.start(now + delay);
      osc.stop(now + delay + 0.1);
    });
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Mission complete sound
 */
export function playMissionCompleteSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Triumphant flourish
    const notes = [392, 523, 659, 784, 1047]; // G4 to C6

    notes.forEach((freq, i) => {
      const { osc, gain } = createOscillator(ctx, freq, 'sine', 0.2, 0.3);
      const startTime = now + i * 0.08;
      gain.gain.setValueAtTime(0.3 * masterVolume, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.2);
      osc.start(startTime);
      osc.stop(startTime + 0.2);
    });

    // Final chord
    [1047, 1319, 1568].forEach((freq, i) => {
      const { osc, gain } = createOscillator(ctx, freq, 'sine', 0.4, 0.2);
      gain.gain.setValueAtTime(0.2 * masterVolume, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
      osc.start(now + 0.4);
      osc.stop(now + 0.8);
    });
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Game countdown tick
 */
export function playTickSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const { osc, gain } = createOscillator(ctx, 800, 'sine', 0.05, 0.2);
    gain.gain.setValueAtTime(0.2 * masterVolume, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
    osc.start(now);
    osc.stop(now + 0.05);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Game start GO!
 */
export function playGoSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const { osc, gain } = createOscillator(ctx, 1047, 'sine', 0.2, 0.4);
    gain.gain.setValueAtTime(0.4 * masterVolume, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.start(now);
    osc.stop(now + 0.2);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Time's up sound
 */
export function playTimeUpSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Descending "game over" tone
    const { osc, gain } = createOscillator(ctx, 400, 'sawtooth', 0.4, 0.2);
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.4);
    gain.gain.setValueAtTime(0.2 * masterVolume, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Boss defeated fanfare
 */
export function playBossDefeatedSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Triumphant arpeggio
    const notes = [262, 330, 392, 523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      const { osc, gain } = createOscillator(ctx, freq, 'sine', 0.2, 0.3);
      const startTime = now + i * 0.07;
      gain.gain.setValueAtTime(0.3 * masterVolume, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.2);
      osc.start(startTime);
      osc.stop(startTime + 0.2);
    });

    // Final chord
    setTimeout(() => {
      [523, 659, 784, 1047].forEach((freq) => {
        const { osc, gain } = createOscillator(ctx, freq, 'sine', 0.5, 0.25);
        gain.gain.setValueAtTime(0.25 * masterVolume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.5);
      });
    }, 500);
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Perfect round sound
 */
export function playPerfectSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      const { osc, gain } = createOscillator(ctx, freq, 'sine', 0.3, 0.3);
      const startTime = now + i * 0.08;
      gain.gain.setValueAtTime(0.3 * masterVolume, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
      osc.start(startTime);
      osc.stop(startTime + 0.3);
    });
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Streak broken sound
 */
export function playStreakBrokenSound() {
  if (isMuted) return;

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Descending sad tones
    const notes = [294, 262, 220];
    notes.forEach((freq, i) => {
      const { osc, gain } = createOscillator(ctx, freq, 'triangle', 0.2, 0.2);
      const startTime = now + i * 0.1;
      gain.gain.setValueAtTime(0.2 * masterVolume, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.2);
      osc.start(startTime);
      osc.stop(startTime + 0.2);
    });
  } catch (e) {
    console.warn('Audio error:', e);
  }
}

/**
 * Initialize audio context (call on user interaction)
 */
export function initAudio(): void {
  try {
    getAudioContext();
  } catch (e) {
    console.warn('Failed to initialize audio:', e);
  }
}

export default {
  playCorrectSound,
  playWrongSound,
  playComboSound,
  playXPSound,
  playLevelUpSound,
  playStreakSound,
  playTapSound,
  playSuccessSound,
  playTimerWarningSound,
  playMissionCompleteSound,
  playTickSound,
  playGoSound,
  playTimeUpSound,
  playBossDefeatedSound,
  playPerfectSound,
  playStreakBrokenSound,
  initAudio,
  setVolume,
  getVolume,
  setMuted,
  isSoundMuted,
};
