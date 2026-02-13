// Existing exports
export { StreakFlame, StreakDisplay } from './StreakFlame';
export { ComboMultiplier, ComboIndicator } from './ComboMultiplier';
export { XPCounter, XPGain, XPGainManager, LevelUpCelebration } from './XPCounter';
export { Confetti, StarBurst, EmojiRain } from './Confetti';

// Game Framework Components
export { GameFrame, useScreenShake, ShakePresets } from './GameFrame';
export type { GameState } from './GameFrame';

// Game UI Components
export { GameTimer, CountdownOverlay } from './GameTimer';
export { ComboCounter } from './ComboCounter';
export { AnimatedXP, XPGainPopup } from './AnimatedXP';
export { ParticleEffect, useParticles } from './ParticleEffect';

// Re-export hooks
export { useGameState } from '@/lib/hooks/useGameState';
export { useGameTimer } from '@/lib/hooks/useGameTimer';
export { useGameScore } from '@/lib/hooks/useGameScore';
export { useGameAudio } from '@/lib/hooks/useGameAudio';

// Re-export utilities
export * from '@/lib/utils/gameUtils';
export * from '@/lib/utils/difficulty';
