'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, CheckCircle, Flame } from 'lucide-react';
import {
  GameFrame,
  useGameState,
  useGameTimer,
  useGameScore,
  useGameAudio,
  useScreenShake,
  ShakePresets,
  useParticles,
  ParticleEffect,
} from '@/components/game';

interface TermPair {
  id: string;
  term: string;
  definition: string;
  subject: string;
}

interface Round {
  title: string;
  subject: string;
  pairs: TermPair[];
}

const rounds: Round[] = [
  {
    title: 'Cell Biology',
    subject: 'Biology',
    pairs: [
      { id: '1', term: 'Mitochondria', definition: 'Produces energy (ATP) for the cell', subject: 'Biology' },
      { id: '2', term: 'Ribosome', definition: 'Makes proteins', subject: 'Biology' },
      { id: '3', term: 'Nucleus', definition: 'Contains DNA and controls the cell', subject: 'Biology' },
      { id: '4', term: 'Cell membrane', definition: 'Controls what enters and leaves the cell', subject: 'Biology' },
      { id: '5', term: 'Chloroplast', definition: 'Site of photosynthesis in plants', subject: 'Biology' },
    ],
  },
  {
    title: 'Chemical Bonding',
    subject: 'Chemistry',
    pairs: [
      { id: '1', term: 'Ionic bond', definition: 'Transfer of electrons between atoms', subject: 'Chemistry' },
      { id: '2', term: 'Covalent bond', definition: 'Sharing of electron pairs between atoms', subject: 'Chemistry' },
      { id: '3', term: 'Metallic bond', definition: 'Sea of delocalised electrons', subject: 'Chemistry' },
      { id: '4', term: 'Electrolyte', definition: 'Substance that conducts when dissolved or molten', subject: 'Chemistry' },
      { id: '5', term: 'Intermolecular forces', definition: 'Weak attractions between molecules', subject: 'Chemistry' },
    ],
  },
  {
    title: 'Forces & Motion',
    subject: 'Physics',
    pairs: [
      { id: '1', term: 'Velocity', definition: 'Speed in a given direction', subject: 'Physics' },
      { id: '2', term: 'Acceleration', definition: 'Rate of change of velocity', subject: 'Physics' },
      { id: '3', term: 'Momentum', definition: 'Mass multiplied by velocity', subject: 'Physics' },
      { id: '4', term: 'Friction', definition: 'Force that opposes motion between surfaces', subject: 'Physics' },
      { id: '5', term: 'Terminal velocity', definition: 'Maximum constant speed of a falling object', subject: 'Physics' },
    ],
  },
  {
    title: 'Algebra Terms',
    subject: 'Maths',
    pairs: [
      { id: '1', term: 'Coefficient', definition: 'The number in front of a variable', subject: 'Maths' },
      { id: '2', term: 'Variable', definition: 'A letter representing an unknown value', subject: 'Maths' },
      { id: '3', term: 'Expression', definition: 'Numbers and letters combined with operations', subject: 'Maths' },
      { id: '4', term: 'Equation', definition: 'Two expressions connected by an equals sign', subject: 'Maths' },
      { id: '5', term: 'Gradient', definition: 'The steepness of a line', subject: 'Maths' },
    ],
  },
  {
    title: 'Electricity',
    subject: 'Physics',
    pairs: [
      { id: '1', term: 'Current', definition: 'Flow of electrical charge (measured in Amps)', subject: 'Physics' },
      { id: '2', term: 'Voltage', definition: 'Energy transferred per unit charge (measured in Volts)', subject: 'Physics' },
      { id: '3', term: 'Resistance', definition: 'Opposition to current flow (measured in Ohms)', subject: 'Physics' },
      { id: '4', term: 'Power', definition: 'Rate of energy transfer (measured in Watts)', subject: 'Physics' },
      { id: '5', term: 'Conductor', definition: 'Material that allows charge to flow through it', subject: 'Physics' },
    ],
  },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const TOTAL_TIME = 60;

export default function DefinitionDashPage() {
  // Game framework hooks
  const { gameState, isPlaying, startGame: startGameState, finishGame, resetGame } = useGameState();
  const {
    score,
    combo,
    maxCombo,
    correctAnswers,
    wrongAnswers,
    accuracy,
    xpEarned,
    isPerfect,
    recordCorrect,
    recordWrong,
    reset: resetScore,
  } = useGameScore({ basePointsPerQuestion: 100 });
  const { time, start: startTimer, reset: resetTimer } = useGameTimer({
    initialTime: TOTAL_TIME,
    countDown: true,
    onTimeUp: finishGame,
  });
  const { playCorrect, playWrong } = useGameAudio();
  const { shake } = useScreenShake();
  const { trigger: particleTrigger, config: particleConfig, emitCorrect, emitWrong } = useParticles();

  // Game-specific state
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [shuffledTerms, setShuffledTerms] = useState<TermPair[]>([]);
  const [shuffledDefinitions, setShuffledDefinitions] = useState<TermPair[]>([]);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [wrongMatch, setWrongMatch] = useState<string | null>(null);

  const currentRound = rounds[currentRoundIndex];

  // Setup round
  const setupRound = useCallback((index: number) => {
    const round = rounds[index];
    setShuffledTerms(shuffleArray(round.pairs));
    setShuffledDefinitions(shuffleArray(round.pairs));
    setMatchedPairs(new Set());
    setSelectedTerm(null);
    setWrongMatch(null);
  }, []);

  // Start game handler
  const handleStartGame = useCallback(() => {
    setCurrentRoundIndex(0);
    setupRound(0);
    resetScore();
    resetTimer();
    startGameState();
    startTimer();
  }, [setupRound, resetScore, resetTimer, startGameState, startTimer]);

  // Restart game handler
  const handleRestartGame = useCallback(() => {
    resetGame();
    setCurrentRoundIndex(0);
    setupRound(0);
    resetScore();
    resetTimer();
  }, [resetGame, setupRound, resetScore, resetTimer]);

  // Handle term click
  const handleTermClick = (termId: string) => {
    if (matchedPairs.has(termId)) return;
    setSelectedTerm(termId);
    setWrongMatch(null);
  };

  // Handle definition click
  const handleDefinitionClick = (defPair: TermPair) => {
    if (!selectedTerm || matchedPairs.has(defPair.id)) return;

    if (selectedTerm === defPair.id) {
      // Correct match
      const newMatched = new Set(matchedPairs);
      newMatched.add(defPair.id);
      setMatchedPairs(newMatched);
      setSelectedTerm(null);
      setWrongMatch(null);

      recordCorrect();
      playCorrect(combo + 1);
      emitCorrect();

      // Check if round complete
      if (newMatched.size === currentRound.pairs.length) {
        // Bonus for completing round - record as extra correct
        recordCorrect();

        // Move to next round or finish
        if (currentRoundIndex < rounds.length - 1) {
          setTimeout(() => {
            setCurrentRoundIndex(i => i + 1);
            setupRound(currentRoundIndex + 1);
          }, 500);
        } else {
          setTimeout(() => {
            finishGame();
          }, 500);
        }
      }
    } else {
      // Wrong match
      setWrongMatch(defPair.id);
      recordWrong();
      playWrong();
      shake(ShakePresets.wrong);
      emitWrong();
      setTimeout(() => setWrongMatch(null), 500);
    }
  };

  // Build stats for GameFrame
  const stats = {
    score,
    correctAnswers,
    wrongAnswers,
    combo,
    maxCombo,
    accuracy,
    xpEarned,
    isPerfect,
  };

  return (
    <GameFrame
      title="Definition Dash"
      subtitle="Match terms to their definitions as fast as you can!"
      icon={<GitBranch size={40} className="text-green-400" />}
      color="green"
      gameState={gameState}
      onStart={handleStartGame}
      onRestart={handleRestartGame}
      time={time}
      totalTime={TOTAL_TIME}
      score={score}
      combo={combo}
      stats={stats}
    >
      {/* Particle effects */}
      <ParticleEffect trigger={particleTrigger} {...particleConfig} />

      {/* Progress and round info */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>{currentRound.title}</span>
          <span>Round {currentRoundIndex + 1}/{rounds.length}</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-green-500"
            animate={{ width: `${(matchedPairs.size / currentRound.pairs.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Combo indicator */}
      {combo >= 2 && isPlaying && (
        <div className="mb-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <div className="px-4 py-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-full">
              <span className="font-bold text-orange-400 flex items-center gap-1">
                <Flame size={16} /> {combo}x Combo!
              </span>
            </div>
          </motion.div>
        </div>
      )}

      {/* Subject tag */}
      <div className="flex justify-center mb-4">
        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
          {currentRound.subject}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        {/* Terms column */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-400 mb-2 text-center">Terms</h3>
          {shuffledTerms.map((pair) => {
            const isMatched = matchedPairs.has(pair.id);
            const isSelected = selectedTerm === pair.id;

            return (
              <motion.button
                key={pair.id}
                onClick={() => handleTermClick(pair.id)}
                disabled={isMatched}
                className={`w-full p-3 rounded-xl text-sm font-medium transition-all ${
                  isMatched
                    ? 'bg-green-500/20 text-green-400 opacity-60'
                    : isSelected
                    ? 'bg-purple-600 text-white scale-105'
                    : 'bg-white/5 border border-white/10 hover:border-purple-500/50 text-white'
                }`}
                whileTap={!isMatched ? { scale: 0.98 } : {}}
              >
                <span className="flex items-center gap-2">
                  {isMatched && <CheckCircle size={16} />}
                  {pair.term}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Definitions column */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-400 mb-2 text-center">Definitions</h3>
          {shuffledDefinitions.map((pair) => {
            const isMatched = matchedPairs.has(pair.id);
            const isWrong = wrongMatch === pair.id;

            return (
              <motion.button
                key={pair.id}
                onClick={() => handleDefinitionClick(pair)}
                disabled={isMatched || !selectedTerm}
                className={`w-full p-3 rounded-xl text-sm text-left transition-all ${
                  isMatched
                    ? 'bg-green-500/20 text-green-400 opacity-60'
                    : isWrong
                    ? 'bg-red-500/20 border-2 border-red-500 animate-shake'
                    : selectedTerm
                    ? 'bg-white/5 border border-white/10 hover:border-purple-500/50 cursor-pointer text-white'
                    : 'bg-white/5 text-gray-500'
                }`}
                whileTap={!isMatched && selectedTerm ? { scale: 0.98 } : {}}
              >
                <span className="flex items-center gap-2">
                  {isMatched && <CheckCircle size={16} />}
                  {pair.definition}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Instructions */}
      <AnimatePresence>
        {!selectedTerm && isPlaying && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-gray-400 text-sm mt-4"
          >
            Tap a term on the left to select it
          </motion.p>
        )}
        {selectedTerm && isPlaying && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-purple-400 text-sm mt-4 font-medium"
          >
            Now tap the matching definition on the right
          </motion.p>
        )}
      </AnimatePresence>
    </GameFrame>
  );
}
