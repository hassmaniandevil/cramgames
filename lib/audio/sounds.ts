'use client';

import { Howl, Howler } from 'howler';

// Sound effects configuration
const SOUNDS = {
  // Answer feedback
  correct: { src: ['/sounds/correct.mp3'], volume: 0.6 },
  wrong: { src: ['/sounds/wrong.mp3'], volume: 0.4 },

  // Combo sounds (ascending pitch)
  combo2: { src: ['/sounds/combo2.mp3'], volume: 0.5 },
  combo3: { src: ['/sounds/combo3.mp3'], volume: 0.55 },
  combo4: { src: ['/sounds/combo4.mp3'], volume: 0.6 },
  combo5: { src: ['/sounds/combo5.mp3'], volume: 0.65 },
  comboMax: { src: ['/sounds/combo-max.mp3'], volume: 0.7 },

  // Milestones
  streakMilestone: { src: ['/sounds/streak-milestone.mp3'], volume: 0.7 },
  levelUp: { src: ['/sounds/level-up.mp3'], volume: 0.8 },
  bossDefeat: { src: ['/sounds/boss-defeat.mp3'], volume: 0.8 },

  // UI
  tap: { src: ['/sounds/tap.mp3'], volume: 0.3 },
  swoosh: { src: ['/sounds/swoosh.mp3'], volume: 0.4 },
  pop: { src: ['/sounds/pop.mp3'], volume: 0.4 },

  // Rewards
  xpGain: { src: ['/sounds/xp-gain.mp3'], volume: 0.5 },
  loreUnlock: { src: ['/sounds/lore-unlock.mp3'], volume: 0.6 },
};

type SoundName = keyof typeof SOUNDS;

// Sound instances cache
const soundInstances: Partial<Record<SoundName, Howl>> = {};

// Initialize a sound (lazy loading)
function getSound(name: SoundName): Howl {
  if (!soundInstances[name]) {
    soundInstances[name] = new Howl({
      ...SOUNDS[name],
      preload: true,
    });
  }
  return soundInstances[name]!;
}

// Play a sound
export function playSound(name: SoundName, options?: { rate?: number; volume?: number }) {
  try {
    const sound = getSound(name);
    const id = sound.play();

    if (options?.rate) {
      sound.rate(options.rate, id);
    }
    if (options?.volume !== undefined) {
      sound.volume(options.volume, id);
    }

    return id;
  } catch (e) {
    // Silently fail if sounds aren't loaded
    console.warn(`Sound ${name} failed to play:`, e);
    return -1;
  }
}

// Play combo sound based on combo count
export function playComboSound(combo: number) {
  if (combo === 2) playSound('combo2');
  else if (combo === 3) playSound('combo3');
  else if (combo === 4) playSound('combo4');
  else if (combo === 5) playSound('combo5');
  else if (combo >= 6) playSound('comboMax');
}

// Global volume control
export function setMasterVolume(volume: number) {
  Howler.volume(Math.max(0, Math.min(1, volume)));
}

export function getMasterVolume(): number {
  return Howler.volume();
}

// Mute/unmute
export function setMuted(muted: boolean) {
  Howler.mute(muted);
}

// Preload essential sounds
export function preloadSounds() {
  const essential: SoundName[] = ['correct', 'wrong', 'tap', 'xpGain'];
  essential.forEach(getSound);
}

// Generate placeholder sounds using Web Audio API (for development)
export function generatePlaceholderSounds() {
  if (typeof window === 'undefined') return;

  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

  // Generate a simple beep as placeholder
  function createBeep(frequency: number, duration: number, type: OscillatorType = 'sine'): string {
    const sampleRate = audioContext.sampleRate;
    const numSamples = sampleRate * duration;
    const buffer = audioContext.createBuffer(1, numSamples, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      const envelope = Math.exp(-t * 5); // Decay envelope
      data[i] = Math.sin(2 * Math.PI * frequency * t) * envelope * 0.5;
    }

    // Convert to WAV blob URL
    // This is a simplified version - in production, use pre-recorded sounds
    return '';
  }

  console.log('Audio system initialized with Web Audio API fallback');
}
