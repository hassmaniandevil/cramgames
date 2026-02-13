'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useUserStore, YearGroup } from '@/lib/stores/userStore';
import {
  X,
  Zap,
  Clock,
  Trophy,
  RotateCcw,
  Home,
  Flame,
  GitBranch,
  CheckCircle,
} from 'lucide-react';

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

// Helper function to determine difficulty level based on year group
function getDifficultyFromYearGroup(yearGroup: YearGroup): { level: 'KS3' | 'GCSE' | 'A-Level'; label: string; color: string } {
  if (yearGroup <= 9) {
    return { level: 'KS3', label: 'KS3 Level', color: 'bg-pastel-green text-correct' };
  } else if (yearGroup <= 11) {
    return { level: 'GCSE', label: 'GCSE Level', color: 'bg-pastel-purple text-accent' };
  } else {
    return { level: 'A-Level', label: 'A-Level', color: 'bg-pastel-pink text-incorrect' };
  }
}

export default function DefinitionDashPage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const { profile } = useUserStore();

  // Get year group from user profile, default to 10 (GCSE) if not set
  const yearGroup = profile?.yearGroup ?? 10;
  const difficulty = getDifficultyFromYearGroup(yearGroup as YearGroup);

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [shuffledTerms, setShuffledTerms] = useState<TermPair[]>([]);
  const [shuffledDefinitions, setShuffledDefinitions] = useState<TermPair[]>([]);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [wrongMatch, setWrongMatch] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [totalMatches, setTotalMatches] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);

  const currentRound = rounds[currentRoundIndex];

  // Start game
  const startGame = () => {
    setGameState('playing');
    setCurrentRoundIndex(0);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setTimeLeft(60);
    setTotalMatches(0);
    setWrongAttempts(0);
    setupRound(0);
  };

  // Setup round
  const setupRound = (index: number) => {
    const round = rounds[index];
    setShuffledTerms(shuffleArray(round.pairs));
    setShuffledDefinitions(shuffleArray(round.pairs));
    setMatchedPairs(new Set());
    setSelectedTerm(null);
    setWrongMatch(null);
  };

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          addXP(score);
          setGameState('finished');
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, score, addXP]);

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
      // Correct match!
      const newMatched = new Set(matchedPairs);
      newMatched.add(defPair.id);
      setMatchedPairs(newMatched);
      setSelectedTerm(null);
      setWrongMatch(null);

      const comboBonus = Math.floor(combo / 2) * 5;
      setScore(s => s + 10 + comboBonus);
      setCombo(c => c + 1);
      setMaxCombo(m => Math.max(m, combo + 1));
      setTotalMatches(t => t + 1);

      // Check if round complete
      if (newMatched.size === currentRound.pairs.length) {
        // Bonus for completing round
        setScore(s => s + 25);

        // Move to next round or finish
        if (currentRoundIndex < rounds.length - 1) {
          setTimeout(() => {
            setCurrentRoundIndex(i => i + 1);
            setupRound(currentRoundIndex + 1);
          }, 500);
        } else {
          setTimeout(() => {
            addXP(score + 25);
            setGameState('finished');
          }, 500);
        }
      }
    } else {
      // Wrong match
      setWrongMatch(defPair.id);
      setCombo(0);
      setWrongAttempts(w => w + 1);
      setTimeout(() => setWrongMatch(null), 500);
    }
  };

  // Ready screen
  if (gameState === 'ready') {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-sm"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-pastel-green flex items-center justify-center">
            <GitBranch size={48} className="text-correct" />
          </div>

          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Definition Dash
          </h1>
          <p className="text-text-secondary mb-4">
            Match terms to their definitions as fast as you can!
          </p>

          {/* Difficulty level badge */}
          <div className="flex justify-center mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${difficulty.color}`}>
              {difficulty.label}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="card p-4 text-center">
              <Clock size={24} className="text-accent mx-auto mb-2" />
              <p className="text-sm text-text-muted">60 seconds</p>
            </div>
            <div className="card p-4 text-center">
              <Flame size={24} className="text-streak mx-auto mb-2" />
              <p className="text-sm text-text-muted">Combo bonus</p>
            </div>
            <div className="card p-4 text-center">
              <Zap size={24} className="text-xp mx-auto mb-2" />
              <p className="text-sm text-text-muted">Earn XP</p>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full btn-primary py-4 text-lg"
          >
            Start Game
          </button>

          <button
            onClick={() => router.push('/')}
            className="mt-4 text-text-muted hover:text-text-primary transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  // Finished screen
  if (gameState === 'finished') {
    const accuracy = totalMatches + wrongAttempts > 0
      ? Math.round((totalMatches / (totalMatches + wrongAttempts)) * 100)
      : 0;

    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-8 w-full max-w-md text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-pastel-green flex items-center justify-center"
          >
            <Trophy size={40} className="text-correct" />
          </motion.div>

          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Great Work!
          </h1>
          <p className="text-text-secondary mb-6">
            You completed {currentRoundIndex + 1} rounds!
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-xp">{score}</div>
              <div className="text-xs text-text-muted">Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-streak">{maxCombo}x</div>
              <div className="text-xs text-text-muted">Max Combo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-correct">{accuracy}%</div>
              <div className="text-xs text-text-muted">Accuracy</div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={startGame}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              Play Again
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full card p-4 text-text-primary font-semibold flex items-center justify-center gap-2 hover:bg-surface-elevated transition-colors"
            >
              <Home size={20} />
              Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Playing screen
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="glass sticky top-0 z-40 safe-top">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => router.push('/')}
            className="p-2 -ml-2 text-text-muted hover:text-text-primary transition-colors"
          >
            <X size={24} />
          </button>

          {/* Timer */}
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-pastel-purple rounded-xl"
            animate={timeLeft <= 10 ? { scale: [1, 1.1, 1] } : {}}
            transition={{ repeat: timeLeft <= 10 ? Infinity : 0, duration: 0.5 }}
          >
            <Clock size={20} className={timeLeft <= 10 ? 'text-incorrect' : 'text-accent'} />
            <span className={`font-mono font-bold text-lg ${timeLeft <= 10 ? 'text-incorrect' : 'text-accent'}`}>
              {timeLeft}s
            </span>
          </motion.div>

          {/* Score */}
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-xp" />
            <span className="font-bold text-xp">{score}</span>
          </div>
        </div>

        {/* Progress */}
        <div className="px-4 pb-2">
          <div className="flex justify-between text-xs text-text-muted mb-1">
            <span>{currentRound.title}</span>
            <span>Round {currentRoundIndex + 1}/{rounds.length}</span>
          </div>
          <div className="h-2 bg-surface-elevated rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-correct"
              animate={{ width: `${(matchedPairs.size / currentRound.pairs.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Combo indicator */}
        {combo >= 2 && (
          <div className="px-4 pb-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <div className="px-4 py-1 bg-gradient-to-r from-streak/20 to-amber-500/20 border border-streak/30 rounded-full">
                <span className="font-bold text-streak flex items-center gap-1">
                  <Flame size={16} /> {combo}x Combo!
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 p-4">
        <div className="max-w-2xl mx-auto">
          {/* Subject tag */}
          <div className="flex justify-center mb-4">
            <span className="px-3 py-1 bg-pastel-purple text-accent rounded-full text-sm font-medium">
              {currentRound.subject}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Terms column */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-text-muted mb-2 text-center">Terms</h3>
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
                        ? 'bg-pastel-green text-correct opacity-60'
                        : isSelected
                        ? 'bg-accent text-white scale-105'
                        : 'bg-surface border border-border hover:border-accent'
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
              <h3 className="text-sm font-semibold text-text-muted mb-2 text-center">Definitions</h3>
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
                        ? 'bg-pastel-green text-correct opacity-60'
                        : isWrong
                        ? 'bg-pastel-pink border-2 border-incorrect animate-shake'
                        : selectedTerm
                        ? 'bg-surface border border-border hover:border-accent cursor-pointer'
                        : 'bg-surface-elevated text-text-muted'
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
            {!selectedTerm && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-text-muted text-sm mt-4"
              >
                Tap a term on the left to select it
              </motion.p>
            )}
            {selectedTerm && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-accent text-sm mt-4 font-medium"
              >
                Now tap the matching definition on the right
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
