'use client';

import { useState, useCallback } from 'react';

export type GameState = 'ready' | 'playing' | 'paused' | 'finished';

export interface GameStateResult {
  gameState: GameState;
  isReady: boolean;
  isPlaying: boolean;
  isPaused: boolean;
  isFinished: boolean;
  startGame: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  finishGame: () => void;
  resetGame: () => void;
}

/**
 * Hook for managing game state machine
 *
 * State transitions:
 * ready -> playing (startGame)
 * playing -> paused (pauseGame)
 * paused -> playing (resumeGame)
 * playing -> finished (finishGame)
 * finished -> ready (resetGame)
 */
export function useGameState(initialState: GameState = 'ready'): GameStateResult {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const startGame = useCallback(() => {
    setGameState('playing');
  }, []);

  const pauseGame = useCallback(() => {
    setGameState('paused');
  }, []);

  const resumeGame = useCallback(() => {
    setGameState('playing');
  }, []);

  const finishGame = useCallback(() => {
    setGameState('finished');
  }, []);

  const resetGame = useCallback(() => {
    setGameState('ready');
  }, []);

  return {
    gameState,
    isReady: gameState === 'ready',
    isPlaying: gameState === 'playing',
    isPaused: gameState === 'paused',
    isFinished: gameState === 'finished',
    startGame,
    pauseGame,
    resumeGame,
    finishGame,
    resetGame,
  };
}
