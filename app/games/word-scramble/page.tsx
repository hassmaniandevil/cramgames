'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUserStore, YearGroup } from '@/lib/stores/userStore';
import {
  Shuffle,
  Lightbulb,
  Delete,
} from 'lucide-react';
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

interface Word {
  word: string;
  hint: string;
  subject: string;
  difficulty: 'ks3' | 'gcse' | 'alevel';
}

// KS3 words (Years 7-9) - shorter, simpler terms
const ks3Words: Word[] = [
  // Biology
  { word: 'CELL', hint: 'Basic unit of life', subject: 'Biology', difficulty: 'ks3' },
  { word: 'NUCLEUS', hint: 'Contains DNA in a cell', subject: 'Biology', difficulty: 'ks3' },
  { word: 'ENZYME', hint: 'Biological catalyst', subject: 'Biology', difficulty: 'ks3' },
  { word: 'ORGAN', hint: 'Made of tissues working together', subject: 'Biology', difficulty: 'ks3' },
  { word: 'TISSUE', hint: 'Group of similar cells', subject: 'Biology', difficulty: 'ks3' },
  { word: 'HABITAT', hint: 'Where an organism lives', subject: 'Biology', difficulty: 'ks3' },
  { word: 'SPECIES', hint: 'Group that can breed together', subject: 'Biology', difficulty: 'ks3' },
  { word: 'VACCINE', hint: 'Teaches immune system', subject: 'Biology', difficulty: 'ks3' },
  // Chemistry
  { word: 'ATOM', hint: 'Smallest particle of an element', subject: 'Chemistry', difficulty: 'ks3' },
  { word: 'ELEMENT', hint: 'Made of one type of atom', subject: 'Chemistry', difficulty: 'ks3' },
  { word: 'MIXTURE', hint: 'Two or more substances not bonded', subject: 'Chemistry', difficulty: 'ks3' },
  { word: 'PROTON', hint: 'Positive particle in nucleus', subject: 'Chemistry', difficulty: 'ks3' },
  { word: 'NEUTRON', hint: 'Neutral particle in nucleus', subject: 'Chemistry', difficulty: 'ks3' },
  { word: 'METAL', hint: 'Conducts heat and electricity', subject: 'Chemistry', difficulty: 'ks3' },
  { word: 'ACID', hint: 'Has pH less than 7', subject: 'Chemistry', difficulty: 'ks3' },
  { word: 'ALKALI', hint: 'Has pH greater than 7', subject: 'Chemistry', difficulty: 'ks3' },
  // Physics
  { word: 'FORCE', hint: 'Push or pull', subject: 'Physics', difficulty: 'ks3' },
  { word: 'ENERGY', hint: 'Ability to do work', subject: 'Physics', difficulty: 'ks3' },
  { word: 'SPEED', hint: 'Distance over time', subject: 'Physics', difficulty: 'ks3' },
  { word: 'MASS', hint: 'Amount of matter', subject: 'Physics', difficulty: 'ks3' },
  { word: 'WEIGHT', hint: 'Force of gravity on object', subject: 'Physics', difficulty: 'ks3' },
  { word: 'MAGNET', hint: 'Attracts iron', subject: 'Physics', difficulty: 'ks3' },
  { word: 'CURRENT', hint: 'Flow of electric charge', subject: 'Physics', difficulty: 'ks3' },
  { word: 'VOLTAGE', hint: 'Electrical push', subject: 'Physics', difficulty: 'ks3' },
  // Maths
  { word: 'FRACTION', hint: 'Part of a whole', subject: 'Maths', difficulty: 'ks3' },
  { word: 'RATIO', hint: 'Comparison of two quantities', subject: 'Maths', difficulty: 'ks3' },
  { word: 'ANGLE', hint: 'Measured in degrees', subject: 'Maths', difficulty: 'ks3' },
  { word: 'RADIUS', hint: 'Distance from centre to edge', subject: 'Maths', difficulty: 'ks3' },
  { word: 'AREA', hint: 'Space inside a shape', subject: 'Maths', difficulty: 'ks3' },
  { word: 'VOLUME', hint: 'Space inside a 3D shape', subject: 'Maths', difficulty: 'ks3' },
  { word: 'PRIME', hint: 'Only divisible by 1 and itself', subject: 'Maths', difficulty: 'ks3' },
  { word: 'FACTOR', hint: 'Number that divides exactly', subject: 'Maths', difficulty: 'ks3' },
];

// GCSE words (Years 10-11) - medium complexity terms
const gcseWords: Word[] = [
  // Biology
  { word: 'MITOCHONDRIA', hint: 'Powerhouse of the cell', subject: 'Biology', difficulty: 'gcse' },
  { word: 'CHLOROPLAST', hint: 'Where photosynthesis happens', subject: 'Biology', difficulty: 'gcse' },
  { word: 'RIBOSOME', hint: 'Makes proteins', subject: 'Biology', difficulty: 'gcse' },
  { word: 'CHROMOSOME', hint: 'Contains genes', subject: 'Biology', difficulty: 'gcse' },
  { word: 'PHOTOSYNTHESIS', hint: 'Plants make glucose using light', subject: 'Biology', difficulty: 'gcse' },
  { word: 'RESPIRATION', hint: 'Releases energy from glucose', subject: 'Biology', difficulty: 'gcse' },
  { word: 'OSMOSIS', hint: 'Water moves through membrane', subject: 'Biology', difficulty: 'gcse' },
  { word: 'DIFFUSION', hint: 'Particles spread from high to low', subject: 'Biology', difficulty: 'gcse' },
  { word: 'ANTIBODY', hint: 'Fights pathogens', subject: 'Biology', difficulty: 'gcse' },
  { word: 'MUTATION', hint: 'Change in DNA sequence', subject: 'Biology', difficulty: 'gcse' },
  // Chemistry
  { word: 'ELECTRON', hint: 'Negative particle orbiting nucleus', subject: 'Chemistry', difficulty: 'gcse' },
  { word: 'ISOTOPE', hint: 'Same element, different mass', subject: 'Chemistry', difficulty: 'gcse' },
  { word: 'CATALYST', hint: 'Speeds up reaction unchanged', subject: 'Chemistry', difficulty: 'gcse' },
  { word: 'OXIDATION', hint: 'Loss of electrons', subject: 'Chemistry', difficulty: 'gcse' },
  { word: 'REDUCTION', hint: 'Gain of electrons', subject: 'Chemistry', difficulty: 'gcse' },
  { word: 'ELECTROLYSIS', hint: 'Using electricity to split compounds', subject: 'Chemistry', difficulty: 'gcse' },
  { word: 'COVALENT', hint: 'Shared electron bond', subject: 'Chemistry', difficulty: 'gcse' },
  { word: 'IONIC', hint: 'Bond from electron transfer', subject: 'Chemistry', difficulty: 'gcse' },
  { word: 'POLYMER', hint: 'Long chain molecule', subject: 'Chemistry', difficulty: 'gcse' },
  { word: 'ALKANE', hint: 'Saturated hydrocarbon', subject: 'Chemistry', difficulty: 'gcse' },
  // Physics
  { word: 'VELOCITY', hint: 'Speed in a direction', subject: 'Physics', difficulty: 'gcse' },
  { word: 'MOMENTUM', hint: 'Mass times velocity', subject: 'Physics', difficulty: 'gcse' },
  { word: 'FREQUENCY', hint: 'Waves per second', subject: 'Physics', difficulty: 'gcse' },
  { word: 'WAVELENGTH', hint: 'Distance between wave peaks', subject: 'Physics', difficulty: 'gcse' },
  { word: 'RESISTANCE', hint: 'Opposes current flow', subject: 'Physics', difficulty: 'gcse' },
  { word: 'TRANSFORMER', hint: 'Changes voltage', subject: 'Physics', difficulty: 'gcse' },
  { word: 'RADIATION', hint: 'Energy travelling as waves', subject: 'Physics', difficulty: 'gcse' },
  { word: 'REFRACTION', hint: 'Light bends at boundary', subject: 'Physics', difficulty: 'gcse' },
  { word: 'REFLECTION', hint: 'Light bounces back', subject: 'Physics', difficulty: 'gcse' },
  { word: 'FRICTION', hint: 'Force opposing motion', subject: 'Physics', difficulty: 'gcse' },
  // Maths
  { word: 'QUADRATIC', hint: 'Equation with x squared', subject: 'Maths', difficulty: 'gcse' },
  { word: 'HYPOTENUSE', hint: 'Longest side of right triangle', subject: 'Maths', difficulty: 'gcse' },
  { word: 'CIRCUMFERENCE', hint: 'Distance around a circle', subject: 'Maths', difficulty: 'gcse' },
  { word: 'GRADIENT', hint: 'Steepness of a line', subject: 'Maths', difficulty: 'gcse' },
  { word: 'PROBABILITY', hint: 'Chance of something happening', subject: 'Maths', difficulty: 'gcse' },
  { word: 'EQUATION', hint: 'Statement with equals sign', subject: 'Maths', difficulty: 'gcse' },
  { word: 'VARIABLE', hint: 'Unknown represented by letter', subject: 'Maths', difficulty: 'gcse' },
  { word: 'COEFFICIENT', hint: 'Number in front of variable', subject: 'Maths', difficulty: 'gcse' },
];

// A-Level words (Years 12-13) - advanced, longer terms
const alevelWords: Word[] = [
  // Biology
  { word: 'CHEMIOSMOSIS', hint: 'ATP synthesis using proton gradient', subject: 'Biology', difficulty: 'alevel' },
  { word: 'DENATURATION', hint: 'Protein losing its shape', subject: 'Biology', difficulty: 'alevel' },
  { word: 'GLYCOLYSIS', hint: 'First stage of respiration', subject: 'Biology', difficulty: 'alevel' },
  { word: 'TRANSCRIPTION', hint: 'DNA to mRNA', subject: 'Biology', difficulty: 'alevel' },
  { word: 'TRANSLATION', hint: 'mRNA to protein', subject: 'Biology', difficulty: 'alevel' },
  { word: 'PHOSPHORYLATION', hint: 'Adding phosphate group', subject: 'Biology', difficulty: 'alevel' },
  { word: 'HOMEOSTASIS', hint: 'Maintaining internal conditions', subject: 'Biology', difficulty: 'alevel' },
  { word: 'NEUROTRANSMITTER', hint: 'Chemical messenger at synapse', subject: 'Biology', difficulty: 'alevel' },
  // Chemistry
  { word: 'STOICHIOMETRY', hint: 'Calculation of reactants and products', subject: 'Chemistry', difficulty: 'alevel' },
  { word: 'ELECTRONEGATIVITY', hint: 'Attraction for bonding electrons', subject: 'Chemistry', difficulty: 'alevel' },
  { word: 'STEREOISOMER', hint: 'Same formula, different arrangement', subject: 'Chemistry', difficulty: 'alevel' },
  { word: 'NUCLEOPHILE', hint: 'Electron pair donor', subject: 'Chemistry', difficulty: 'alevel' },
  { word: 'ELECTROPHILE', hint: 'Electron pair acceptor', subject: 'Chemistry', difficulty: 'alevel' },
  { word: 'ENTHALPY', hint: 'Heat content of a system', subject: 'Chemistry', difficulty: 'alevel' },
  { word: 'EQUILIBRIUM', hint: 'Forward equals reverse rate', subject: 'Chemistry', difficulty: 'alevel' },
  { word: 'SPECTROSCOPY', hint: 'Analysis using light absorption', subject: 'Chemistry', difficulty: 'alevel' },
  // Physics
  { word: 'SUPERPOSITION', hint: 'Waves combining at a point', subject: 'Physics', difficulty: 'alevel' },
  { word: 'POLARISATION', hint: 'Restricting wave oscillation', subject: 'Physics', difficulty: 'alevel' },
  { word: 'CAPACITANCE', hint: 'Ability to store charge', subject: 'Physics', difficulty: 'alevel' },
  { word: 'GRAVITATIONAL', hint: 'Related to mass attraction', subject: 'Physics', difficulty: 'alevel' },
  { word: 'ELECTROMAGNETIC', hint: 'Combined electric and magnetic', subject: 'Physics', difficulty: 'alevel' },
  { word: 'PHOTOELECTRIC', hint: 'Electrons released by light', subject: 'Physics', difficulty: 'alevel' },
  { word: 'INTERFERENCE', hint: 'Waves meeting and combining', subject: 'Physics', difficulty: 'alevel' },
  { word: 'THERMODYNAMICS', hint: 'Study of heat and energy', subject: 'Physics', difficulty: 'alevel' },
  // Maths
  { word: 'DIFFERENTIATION', hint: 'Finding rate of change', subject: 'Maths', difficulty: 'alevel' },
  { word: 'INTEGRATION', hint: 'Finding area under curve', subject: 'Maths', difficulty: 'alevel' },
  { word: 'LOGARITHM', hint: 'Inverse of exponential', subject: 'Maths', difficulty: 'alevel' },
  { word: 'ASYMPTOTE', hint: 'Line curve approaches', subject: 'Maths', difficulty: 'alevel' },
  { word: 'POLYNOMIAL', hint: 'Expression with multiple terms', subject: 'Maths', difficulty: 'alevel' },
  { word: 'TRIGONOMETRY', hint: 'Study of triangles and angles', subject: 'Maths', difficulty: 'alevel' },
  { word: 'PERMUTATION', hint: 'Arrangement where order matters', subject: 'Maths', difficulty: 'alevel' },
  { word: 'COMBINATION', hint: 'Selection where order doesn\'t matter', subject: 'Maths', difficulty: 'alevel' },
];

// Helper function to get difficulty level from year group
function getDifficultyFromYearGroup(yearGroup: YearGroup): { level: 'ks3' | 'gcse' | 'alevel'; label: string } {
  if (yearGroup >= 7 && yearGroup <= 9) {
    return { level: 'ks3', label: 'KS3' };
  } else if (yearGroup >= 10 && yearGroup <= 11) {
    return { level: 'gcse', label: 'GCSE' };
  } else if (yearGroup >= 12 && yearGroup <= 13) {
    return { level: 'alevel', label: 'A-Level' };
  }
  // Default to GCSE for primary years (shouldn't happen but fallback)
  return { level: 'gcse', label: 'GCSE' };
}

// Helper function to get words for a difficulty level
function getWordsForDifficulty(level: 'ks3' | 'gcse' | 'alevel'): Word[] {
  switch (level) {
    case 'ks3':
      return ks3Words;
    case 'gcse':
      return gcseWords;
    case 'alevel':
      return alevelWords;
    default:
      return gcseWords;
  }
}

function scrambleWord(word: string): string {
  const arr = word.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Make sure it's actually scrambled
  if (arr.join('') === word && word.length > 1) {
    return scrambleWord(word);
  }
  return arr.join('');
}

const TOTAL_TIME = 90;

export default function WordScramblePage() {
  const profile = useUserStore((state) => state.profile);

  // Get difficulty based on user's year group
  const yearGroup = profile?.yearGroup ?? 10;
  const { level: difficultyLevel } = useMemo(
    () => getDifficultyFromYearGroup(yearGroup),
    [yearGroup]
  );
  const words = useMemo(() => getWordsForDifficulty(difficultyLevel), [difficultyLevel]);

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
  const { playCorrect, playWrong } = useGameAudio();
  const { shake } = useScreenShake();
  const { trigger: particleTrigger, config: particleConfig, emitCorrect, emitWrong } = useParticles();

  // Game-specific state
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [scrambled, setScrambled] = useState('');
  const [guess, setGuess] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set());
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null);

  // Timer hook with finishGame callback
  const { time, start: startTimer, reset: resetTimer } = useGameTimer({
    initialTime: TOTAL_TIME,
    countDown: true,
    onTimeUp: finishGame,
  });

  const newWord = useCallback(() => {
    const available = words.filter(w => !usedWords.has(w.word));
    if (available.length === 0) {
      // Reset if all words used
      setUsedWords(new Set());
      const word = words[Math.floor(Math.random() * words.length)];
      setCurrentWord(word);
      setScrambled(scrambleWord(word.word));
    } else {
      const word = available[Math.floor(Math.random() * available.length)];
      setCurrentWord(word);
      setScrambled(scrambleWord(word.word));
      setUsedWords(prev => {
        const newSet = new Set(Array.from(prev));
        newSet.add(word.word);
        return newSet;
      });
    }
    setGuess('');
    setShowHint(false);
    setShowFeedback(null);
  }, [usedWords, words]);

  const handleStart = useCallback(() => {
    resetScore();
    resetTimer();
    setUsedWords(new Set());
    startGameState();
    startTimer();
    // Get first word after a small delay to ensure state is ready
    setTimeout(() => {
      const word = words[Math.floor(Math.random() * words.length)];
      setCurrentWord(word);
      setScrambled(scrambleWord(word.word));
      setUsedWords(new Set([word.word]));
      setGuess('');
      setShowHint(false);
      setShowFeedback(null);
    }, 0);
  }, [resetScore, resetTimer, startGameState, startTimer, words]);

  const handleRestart = useCallback(() => {
    resetGame();
    handleStart();
  }, [resetGame, handleStart]);

  const handleSubmit = useCallback(() => {
    if (!currentWord || showFeedback) return;

    if (guess.toUpperCase() === currentWord.word) {
      // Hint penalty reduces points
      const hintPenalty = showHint ? 50 : 0;
      const pointsEarned = recordCorrect() - hintPenalty;
      playCorrect(combo + 1);
      emitCorrect();
      setShowFeedback('correct');

      setTimeout(() => {
        newWord();
      }, 500);
    } else {
      recordWrong();
      playWrong();
      shake(ShakePresets.wrong);
      emitWrong();
      setShowFeedback('wrong');
      setTimeout(() => {
        setShowFeedback(null);
      }, 500);
    }
  }, [currentWord, guess, showHint, showFeedback, combo, recordCorrect, recordWrong, playCorrect, playWrong, shake, emitCorrect, emitWrong, newWord]);

  const handleLetterClick = useCallback((letter: string) => {
    setGuess(prev => prev + letter);
  }, []);

  const handleBackspace = useCallback(() => {
    setGuess(prev => prev.slice(0, -1));
  }, []);

  const handleSkip = useCallback(() => {
    recordWrong();
    newWord();
  }, [recordWrong, newWord]);

  // Build stats object for GameFrame
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
    <>
      {/* Particle effects layer */}
      <ParticleEffect trigger={particleTrigger} {...particleConfig} />

      <GameFrame
        title="Word Scramble"
        subtitle="Unscramble scientific terms as fast as you can!"
        icon={<Shuffle size={40} className="text-purple-400" />}
        color="purple"
        gameState={gameState}
        onStart={handleStart}
        onRestart={handleRestart}
        time={time}
        totalTime={TOTAL_TIME}
        score={score}
        combo={combo}
        stats={stats}
      >
        {/* Game content - only rendered when playing */}
        {isPlaying && currentWord && (
          <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWord.word}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full"
              >
                {/* Subject badge */}
                <div className="flex justify-center mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {currentWord.subject}
                  </span>
                </div>

                {/* Scrambled letters */}
                <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-6 mb-4 text-center">
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {scrambled.split('').map((letter, i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                        onClick={() => handleLetterClick(letter)}
                        className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-400 font-bold text-lg flex items-center justify-center hover:scale-110 hover:bg-purple-500/30 transition-all"
                      >
                        {letter}
                      </motion.button>
                    ))}
                  </div>

                  {/* Hint */}
                  {showHint ? (
                    <p className="text-sm text-gray-400">
                      Hint: {currentWord.hint}
                    </p>
                  ) : (
                    <button
                      onClick={() => setShowHint(true)}
                      className="text-sm text-purple-400 hover:text-purple-300 hover:underline flex items-center justify-center gap-1 mx-auto transition-colors"
                    >
                      <Lightbulb size={14} /> Show hint (-50 points)
                    </button>
                  )}
                </div>

                {/* Answer area */}
                <div className={`bg-[#1a1a2e] border rounded-2xl p-4 mb-4 min-h-[60px] flex items-center justify-center transition-colors ${
                  showFeedback === 'correct' ? 'border-green-500/50 bg-green-500/10' :
                  showFeedback === 'wrong' ? 'border-red-500/50 bg-red-500/10' : 'border-white/10'
                }`}>
                  <div className="flex flex-wrap justify-center gap-1">
                    {guess.split('').map((letter, i) => (
                      <span
                        key={i}
                        className="w-8 h-8 rounded bg-white/10 text-white font-bold flex items-center justify-center"
                      >
                        {letter}
                      </span>
                    ))}
                    {guess.length < currentWord.word.length && (
                      <span className="w-8 h-8 rounded border-2 border-dashed border-white/20" />
                    )}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleBackspace}
                    className="bg-[#1a1a2e] border border-white/10 rounded-xl p-4 hover:bg-white/5 transition-colors"
                  >
                    <Delete size={24} className="text-gray-400" />
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={guess.length !== currentWord.word.length}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-400 hover:to-purple-500 transition-all"
                  >
                    Check Answer
                  </button>
                  <button
                    onClick={handleSkip}
                    className="bg-[#1a1a2e] border border-white/10 rounded-xl px-4 hover:bg-white/5 transition-colors text-gray-400 font-medium"
                  >
                    Skip
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </GameFrame>
    </>
  );
}
