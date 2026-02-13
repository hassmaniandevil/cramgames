'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import {
  X,
  Zap,
  Clock,
  Trophy,
  RotateCcw,
  Home,
  Flame,
  Shuffle,
  Lightbulb,
  Delete,
} from 'lucide-react';

interface Word {
  word: string;
  hint: string;
  subject: string;
}

const words: Word[] = [
  // Biology
  { word: 'MITOCHONDRIA', hint: 'Powerhouse of the cell', subject: 'Biology' },
  { word: 'CHLOROPLAST', hint: 'Where photosynthesis happens', subject: 'Biology' },
  { word: 'NUCLEUS', hint: 'Contains DNA in a cell', subject: 'Biology' },
  { word: 'ENZYME', hint: 'Biological catalyst', subject: 'Biology' },
  { word: 'RIBOSOME', hint: 'Makes proteins', subject: 'Biology' },
  { word: 'CHROMOSOME', hint: 'Contains genes', subject: 'Biology' },
  { word: 'PHOTOSYNTHESIS', hint: 'Plants make glucose using light', subject: 'Biology' },
  { word: 'RESPIRATION', hint: 'Releases energy from glucose', subject: 'Biology' },
  { word: 'OSMOSIS', hint: 'Water moves through membrane', subject: 'Biology' },
  { word: 'DIFFUSION', hint: 'Particles spread from high to low', subject: 'Biology' },
  { word: 'ANTIBODY', hint: 'Fights pathogens', subject: 'Biology' },
  { word: 'VACCINE', hint: 'Teaches immune system', subject: 'Biology' },

  // Chemistry
  { word: 'ELECTRON', hint: 'Negative particle orbiting nucleus', subject: 'Chemistry' },
  { word: 'PROTON', hint: 'Positive particle in nucleus', subject: 'Chemistry' },
  { word: 'NEUTRON', hint: 'Neutral particle in nucleus', subject: 'Chemistry' },
  { word: 'ISOTOPE', hint: 'Same element, different mass', subject: 'Chemistry' },
  { word: 'CATALYST', hint: 'Speeds up reaction unchanged', subject: 'Chemistry' },
  { word: 'OXIDATION', hint: 'Loss of electrons', subject: 'Chemistry' },
  { word: 'REDUCTION', hint: 'Gain of electrons', subject: 'Chemistry' },
  { word: 'ELECTROLYSIS', hint: 'Using electricity to split compounds', subject: 'Chemistry' },
  { word: 'COVALENT', hint: 'Shared electron bond', subject: 'Chemistry' },
  { word: 'IONIC', hint: 'Bond from electron transfer', subject: 'Chemistry' },
  { word: 'POLYMER', hint: 'Long chain molecule', subject: 'Chemistry' },
  { word: 'ALKANE', hint: 'Saturated hydrocarbon', subject: 'Chemistry' },

  // Physics
  { word: 'VELOCITY', hint: 'Speed in a direction', subject: 'Physics' },
  { word: 'MOMENTUM', hint: 'Mass times velocity', subject: 'Physics' },
  { word: 'FREQUENCY', hint: 'Waves per second', subject: 'Physics' },
  { word: 'WAVELENGTH', hint: 'Distance between wave peaks', subject: 'Physics' },
  { word: 'RESISTANCE', hint: 'Opposes current flow', subject: 'Physics' },
  { word: 'VOLTAGE', hint: 'Electrical push', subject: 'Physics' },
  { word: 'TRANSFORMER', hint: 'Changes voltage', subject: 'Physics' },
  { word: 'RADIATION', hint: 'Energy travelling as waves', subject: 'Physics' },
  { word: 'REFRACTION', hint: 'Light bends at boundary', subject: 'Physics' },
  { word: 'REFLECTION', hint: 'Light bounces back', subject: 'Physics' },
  { word: 'GRAVITY', hint: 'Force of attraction between masses', subject: 'Physics' },
  { word: 'FRICTION', hint: 'Force opposing motion', subject: 'Physics' },

  // Maths
  { word: 'QUADRATIC', hint: 'Equation with x squared', subject: 'Maths' },
  { word: 'HYPOTENUSE', hint: 'Longest side of right triangle', subject: 'Maths' },
  { word: 'CIRCUMFERENCE', hint: 'Distance around a circle', subject: 'Maths' },
  { word: 'GRADIENT', hint: 'Steepness of a line', subject: 'Maths' },
  { word: 'PROBABILITY', hint: 'Chance of something happening', subject: 'Maths' },
  { word: 'FRACTION', hint: 'Part of a whole', subject: 'Maths' },
  { word: 'PERCENTAGE', hint: 'Out of 100', subject: 'Maths' },
  { word: 'EQUATION', hint: 'Statement with equals sign', subject: 'Maths' },
  { word: 'VARIABLE', hint: 'Unknown represented by letter', subject: 'Maths' },
  { word: 'COEFFICIENT', hint: 'Number in front of variable', subject: 'Maths' },
];

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

export default function WordScramblePage() {
  const router = useRouter();
  const { addXP } = useProgressStore();

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [timeLeft, setTimeLeft] = useState(90);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [scrambled, setScrambled] = useState('');
  const [guess, setGuess] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set());
  const [solved, setSolved] = useState(0);
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null);

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
  }, [usedWords]);

  const startGame = () => {
    setGameState('playing');
    setTimeLeft(90);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setSolved(0);
    setUsedWords(new Set());
    newWord();
  };

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setGameState('finished');
          addXP(score);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, score, addXP]);

  const handleSubmit = () => {
    if (!currentWord || showFeedback) return;

    if (guess.toUpperCase() === currentWord.word) {
      const comboBonus = Math.floor(combo / 2) * 5;
      const hintPenalty = showHint ? 5 : 0;
      const points = 20 + comboBonus - hintPenalty;
      setScore(s => s + points);
      setCombo(c => c + 1);
      setMaxCombo(m => Math.max(m, combo + 1));
      setSolved(s => s + 1);
      setShowFeedback('correct');

      setTimeout(() => {
        newWord();
      }, 500);
    } else {
      setCombo(0);
      setShowFeedback('wrong');
      setTimeout(() => {
        setShowFeedback(null);
      }, 500);
    }
  };

  const handleLetterClick = (letter: string, index: number) => {
    setGuess(prev => prev + letter);
  };

  const handleBackspace = () => {
    setGuess(prev => prev.slice(0, -1));
  };

  const handleSkip = () => {
    setCombo(0);
    newWord();
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
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-pastel-purple flex items-center justify-center">
            <Shuffle size={48} className="text-accent" />
          </div>

          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Word Scramble
          </h1>
          <p className="text-text-secondary mb-8">
            Unscramble scientific terms as fast as you can!
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="card p-4 text-center">
              <Clock size={24} className="text-accent mx-auto mb-2" />
              <p className="text-sm text-text-muted">90 seconds</p>
            </div>
            <div className="card p-4 text-center">
              <Flame size={24} className="text-streak mx-auto mb-2" />
              <p className="text-sm text-text-muted">Build combos</p>
            </div>
            <div className="card p-4 text-center">
              <Lightbulb size={24} className="text-xp mx-auto mb-2" />
              <p className="text-sm text-text-muted">Use hints</p>
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
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-pastel-purple flex items-center justify-center"
          >
            <Trophy size={40} className="text-accent" />
          </motion.div>

          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Word Wizard!
          </h1>
          <p className="text-text-secondary mb-6">
            Great vocabulary skills!
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-xp">{score}</div>
              <div className="text-xs text-text-muted">Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-correct">{solved}</div>
              <div className="text-xs text-text-muted">Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-streak">{maxCombo}x</div>
              <div className="text-xs text-text-muted">Max Combo</div>
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

          <div className="flex items-center gap-2">
            <Zap size={20} className="text-xp" />
            <span className="font-bold text-xp">{score}</span>
          </div>
        </div>

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
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        {currentWord && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWord.word}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-md"
            >
              {/* Subject badge */}
              <div className="flex justify-center mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-pastel-blue text-blue-600">
                  {currentWord.subject}
                </span>
              </div>

              {/* Scrambled letters */}
              <div className="card p-6 mb-4 text-center">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {scrambled.split('').map((letter, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      onClick={() => handleLetterClick(letter, i)}
                      className="w-10 h-10 rounded-lg bg-pastel-purple text-accent font-bold text-lg flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      {letter}
                    </motion.button>
                  ))}
                </div>

                {/* Hint */}
                {showHint ? (
                  <p className="text-sm text-text-secondary">
                    Hint: {currentWord.hint}
                  </p>
                ) : (
                  <button
                    onClick={() => setShowHint(true)}
                    className="text-sm text-accent hover:underline flex items-center justify-center gap-1 mx-auto"
                  >
                    <Lightbulb size={14} /> Show hint (-5 points)
                  </button>
                )}
              </div>

              {/* Answer area */}
              <div className={`card p-4 mb-4 min-h-[60px] flex items-center justify-center ${
                showFeedback === 'correct' ? 'bg-pastel-green' :
                showFeedback === 'wrong' ? 'bg-pastel-pink' : ''
              }`}>
                <div className="flex flex-wrap justify-center gap-1">
                  {guess.split('').map((letter, i) => (
                    <span
                      key={i}
                      className="w-8 h-8 rounded bg-surface-elevated text-text-primary font-bold flex items-center justify-center"
                    >
                      {letter}
                    </span>
                  ))}
                  {guess.length < currentWord.word.length && (
                    <span className="w-8 h-8 rounded border-2 border-dashed border-border" />
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleBackspace}
                  className="card p-4 hover:bg-surface-elevated transition-colors"
                >
                  <Delete size={24} className="text-text-muted" />
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={guess.length !== currentWord.word.length}
                  className="flex-1 btn-primary py-4 disabled:opacity-50"
                >
                  Check Answer
                </button>
                <button
                  onClick={handleSkip}
                  className="card p-4 hover:bg-surface-elevated transition-colors text-text-muted font-medium"
                >
                  Skip
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </main>
    </div>
  );
}
