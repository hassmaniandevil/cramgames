'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useUserStore } from '@/lib/stores/userStore';
import {
  X,
  Zap,
  Trophy,
  RotateCcw,
  Home,
  Brain,
  Clock,
} from 'lucide-react';

interface Card {
  id: number;
  content: string;
  pairId: number;
  type: 'term' | 'definition';
  isFlipped: boolean;
  isMatched: boolean;
}

interface Pair {
  term: string;
  definition: string;
  subject: string;
  difficulty: 'ks3' | 'gcse' | 'alevel';
}

type DifficultyLevel = 'KS3' | 'GCSE' | 'A-Level';

// Helper to get difficulty level from year group
function getDifficultyFromYearGroup(yearGroup: number): { level: DifficultyLevel; filter: ('ks3' | 'gcse' | 'alevel')[] } {
  if (yearGroup <= 9) {
    // Years 7-9: KS3
    return { level: 'KS3', filter: ['ks3'] };
  } else if (yearGroup <= 11) {
    // Years 10-11: GCSE
    return { level: 'GCSE', filter: ['ks3', 'gcse'] };
  } else {
    // Years 12-13: A-Level
    return { level: 'A-Level', filter: ['ks3', 'gcse', 'alevel'] };
  }
}

const allPairs: Pair[] = [
  // KS3 Biology - Basic concepts
  { term: 'Cell', definition: 'Basic unit of life', subject: 'Biology', difficulty: 'ks3' },
  { term: 'Nucleus', definition: 'Contains DNA', subject: 'Biology', difficulty: 'ks3' },
  { term: 'Photosynthesis', definition: 'Plants make food', subject: 'Biology', difficulty: 'ks3' },
  { term: 'Respiration', definition: 'Releases energy', subject: 'Biology', difficulty: 'ks3' },
  { term: 'Digestion', definition: 'Breaks down food', subject: 'Biology', difficulty: 'ks3' },
  { term: 'Vertebrate', definition: 'Animal with backbone', subject: 'Biology', difficulty: 'ks3' },

  // KS3 Chemistry - Basic concepts
  { term: 'Atom', definition: 'Smallest particle', subject: 'Chemistry', difficulty: 'ks3' },
  { term: 'Element', definition: 'One type of atom', subject: 'Chemistry', difficulty: 'ks3' },
  { term: 'Compound', definition: 'Two+ elements bonded', subject: 'Chemistry', difficulty: 'ks3' },
  { term: 'Mixture', definition: 'Not chemically joined', subject: 'Chemistry', difficulty: 'ks3' },
  { term: 'Acid', definition: 'pH less than 7', subject: 'Chemistry', difficulty: 'ks3' },
  { term: 'Alkali', definition: 'pH more than 7', subject: 'Chemistry', difficulty: 'ks3' },

  // KS3 Physics - Basic concepts
  { term: 'Force', definition: 'Push or pull', subject: 'Physics', difficulty: 'ks3' },
  { term: 'Energy', definition: 'Ability to do work', subject: 'Physics', difficulty: 'ks3' },
  { term: 'Speed', definition: 'Distance over time', subject: 'Physics', difficulty: 'ks3' },
  { term: 'Current', definition: 'Flow of charge', subject: 'Physics', difficulty: 'ks3' },
  { term: 'Voltage', definition: 'Electrical push', subject: 'Physics', difficulty: 'ks3' },
  { term: 'Frequency', definition: 'Waves per second', subject: 'Physics', difficulty: 'ks3' },

  // GCSE Biology - Intermediate
  { term: 'Mitosis', definition: 'Cell division for growth', subject: 'Biology', difficulty: 'gcse' },
  { term: 'Meiosis', definition: 'Cell division for gametes', subject: 'Biology', difficulty: 'gcse' },
  { term: 'Enzyme', definition: 'Biological catalyst', subject: 'Biology', difficulty: 'gcse' },
  { term: 'Chloroplast', definition: 'Site of photosynthesis', subject: 'Biology', difficulty: 'gcse' },
  { term: 'Mitochondria', definition: 'Releases energy (ATP)', subject: 'Biology', difficulty: 'gcse' },
  { term: 'Osmosis', definition: 'Water through membrane', subject: 'Biology', difficulty: 'gcse' },
  { term: 'Stomata', definition: 'Leaf pores for gas exchange', subject: 'Biology', difficulty: 'gcse' },
  { term: 'Allele', definition: 'Version of a gene', subject: 'Biology', difficulty: 'gcse' },

  // GCSE Chemistry - Intermediate
  { term: 'Covalent bond', definition: 'Shared electrons', subject: 'Chemistry', difficulty: 'gcse' },
  { term: 'Ionic bond', definition: 'Electron transfer', subject: 'Chemistry', difficulty: 'gcse' },
  { term: 'Catalyst', definition: 'Speeds up reaction', subject: 'Chemistry', difficulty: 'gcse' },
  { term: 'Electrolysis', definition: 'Splits using electricity', subject: 'Chemistry', difficulty: 'gcse' },
  { term: 'Oxidation', definition: 'Loss of electrons', subject: 'Chemistry', difficulty: 'gcse' },
  { term: 'Reduction', definition: 'Gain of electrons', subject: 'Chemistry', difficulty: 'gcse' },
  { term: 'Isotope', definition: 'Same protons, diff neutrons', subject: 'Chemistry', difficulty: 'gcse' },
  { term: 'Endothermic', definition: 'Absorbs heat energy', subject: 'Chemistry', difficulty: 'gcse' },

  // GCSE Physics - Intermediate
  { term: 'Velocity', definition: 'Speed + direction', subject: 'Physics', difficulty: 'gcse' },
  { term: 'Acceleration', definition: 'Change in velocity', subject: 'Physics', difficulty: 'gcse' },
  { term: 'Momentum', definition: 'Mass times velocity', subject: 'Physics', difficulty: 'gcse' },
  { term: 'Wavelength', definition: 'Distance between peaks', subject: 'Physics', difficulty: 'gcse' },
  { term: 'Resistance', definition: 'Opposes current', subject: 'Physics', difficulty: 'gcse' },
  { term: 'Power', definition: 'Energy per second', subject: 'Physics', difficulty: 'gcse' },
  { term: 'Half-life', definition: 'Time for half to decay', subject: 'Physics', difficulty: 'gcse' },
  { term: 'Refraction', definition: 'Light bending at boundary', subject: 'Physics', difficulty: 'gcse' },

  // A-Level Biology - Advanced
  { term: 'Glycolysis', definition: 'Glucose to pyruvate', subject: 'Biology', difficulty: 'alevel' },
  { term: 'Krebs cycle', definition: 'Acetyl-CoA oxidation', subject: 'Biology', difficulty: 'alevel' },
  { term: 'Transcription', definition: 'DNA to mRNA', subject: 'Biology', difficulty: 'alevel' },
  { term: 'Translation', definition: 'mRNA to protein', subject: 'Biology', difficulty: 'alevel' },
  { term: 'Chemiosmosis', definition: 'ATP via H+ gradient', subject: 'Biology', difficulty: 'alevel' },
  { term: 'Synapse', definition: 'Neuron junction', subject: 'Biology', difficulty: 'alevel' },
  { term: 'Epistasis', definition: 'Gene masking gene', subject: 'Biology', difficulty: 'alevel' },
  { term: 'Codominance', definition: 'Both alleles expressed', subject: 'Biology', difficulty: 'alevel' },

  // A-Level Chemistry - Advanced
  { term: 'Enthalpy', definition: 'Heat at constant pressure', subject: 'Chemistry', difficulty: 'alevel' },
  { term: 'Entropy', definition: 'Measure of disorder', subject: 'Chemistry', difficulty: 'alevel' },
  { term: 'Nucleophile', definition: 'Electron pair donor', subject: 'Chemistry', difficulty: 'alevel' },
  { term: 'Electrophile', definition: 'Electron pair acceptor', subject: 'Chemistry', difficulty: 'alevel' },
  { term: 'Kc', definition: 'Equilibrium constant', subject: 'Chemistry', difficulty: 'alevel' },
  { term: 'Buffer', definition: 'Resists pH change', subject: 'Chemistry', difficulty: 'alevel' },
  { term: 'Ligand', definition: 'Ion/molecule donor', subject: 'Chemistry', difficulty: 'alevel' },
  { term: 'Chirality', definition: 'Non-superimposable mirror', subject: 'Chemistry', difficulty: 'alevel' },

  // A-Level Physics - Advanced
  { term: 'Capacitance', definition: 'Charge per volt', subject: 'Physics', difficulty: 'alevel' },
  { term: 'Inductance', definition: 'Opposes current change', subject: 'Physics', difficulty: 'alevel' },
  { term: 'Doppler effect', definition: 'Frequency shift motion', subject: 'Physics', difficulty: 'alevel' },
  { term: 'Photoelectric', definition: 'Light ejects electrons', subject: 'Physics', difficulty: 'alevel' },
  { term: 'de Broglie', definition: 'Matter has wavelength', subject: 'Physics', difficulty: 'alevel' },
  { term: 'SHM', definition: 'Restoring force prop. to x', subject: 'Physics', difficulty: 'alevel' },
  { term: 'Binding energy', definition: 'Energy to split nucleus', subject: 'Physics', difficulty: 'alevel' },
  { term: 'Gravitational field', definition: 'Force per unit mass', subject: 'Physics', difficulty: 'alevel' },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function createCards(gamePairs: Pair[]): Card[] {
  const cards: Card[] = [];
  gamePairs.forEach((pair, index) => {
    cards.push({
      id: index * 2,
      content: pair.term,
      pairId: index,
      type: 'term',
      isFlipped: false,
      isMatched: false,
    });
    cards.push({
      id: index * 2 + 1,
      content: pair.definition,
      pairId: index,
      type: 'definition',
      isFlipped: false,
      isMatched: false,
    });
  });
  return shuffleArray(cards);
}

export default function MemoryMatchPage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const { profile } = useUserStore();

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  // Get year group from profile, default to 10 (GCSE) if not set
  const yearGroup = profile?.yearGroup ?? 10;

  // Determine difficulty based on year group
  const { level: difficultyLevel, filter: difficultyFilter } = useMemo(
    () => getDifficultyFromYearGroup(yearGroup),
    [yearGroup]
  );

  // Filter pairs based on difficulty
  const availablePairs = useMemo(
    () => allPairs.filter(pair => difficultyFilter.includes(pair.difficulty)),
    [difficultyFilter]
  );

  const totalPairs = 6; // 12 cards total

  const startGame = () => {
    const gamePairs = shuffleArray(availablePairs).slice(0, totalPairs);
    setCards(createCards(gamePairs));
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setScore(0);
    setTimer(0);
    setGameState('playing');
  };

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => {
      setTimer(t => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState]);

  // Check for match
  useEffect(() => {
    if (flippedCards.length !== 2) return;

    setIsChecking(true);
    const [first, second] = flippedCards;
    const firstCard = cards.find(c => c.id === first);
    const secondCard = cards.find(c => c.id === second);

    if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
      // Match found
      setTimeout(() => {
        setCards(prev => prev.map(card =>
          card.id === first || card.id === second
            ? { ...card, isMatched: true }
            : card
        ));
        setMatches(m => m + 1);
        setScore(s => s + 25);
        setFlippedCards([]);
        setIsChecking(false);

        // Check if game complete
        if (matches + 1 === totalPairs) {
          const timeBonus = Math.max(0, 100 - timer);
          const moveBonus = Math.max(0, 50 - (moves - totalPairs) * 2);
          const finalScore = score + 25 + timeBonus + moveBonus;
          setScore(finalScore);
          addXP(finalScore);
          setGameState('finished');
        }
      }, 500);
    } else {
      // No match
      setTimeout(() => {
        setCards(prev => prev.map(card =>
          card.id === first || card.id === second
            ? { ...card, isFlipped: false }
            : card
        ));
        setFlippedCards([]);
        setIsChecking(false);
      }, 1000);
    }

    setMoves(m => m + 1);
  }, [flippedCards, cards, matches, moves, score, timer, totalPairs, addXP]);

  const handleCardClick = (cardId: number) => {
    if (isChecking) return;
    if (flippedCards.length >= 2) return;

    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    setCards(prev => prev.map(c =>
      c.id === cardId ? { ...c, isFlipped: true } : c
    ));
    setFlippedCards(prev => [...prev, cardId]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-pastel-pink flex items-center justify-center">
            <Brain size={48} className="text-pink-500" />
          </div>

          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Memory Match
          </h1>
          <p className="text-text-secondary mb-4">
            Match scientific terms with their definitions!
          </p>

          <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
            difficultyLevel === 'KS3'
              ? 'bg-pastel-green text-green-600'
              : difficultyLevel === 'GCSE'
              ? 'bg-pastel-blue text-blue-600'
              : 'bg-pastel-purple text-purple-600'
          }`}>
            {difficultyLevel} Difficulty
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-accent">{totalPairs * 2}</div>
              <p className="text-sm text-text-muted">Cards</p>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-correct">{totalPairs}</div>
              <p className="text-sm text-text-muted">Pairs</p>
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
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-pastel-pink flex items-center justify-center"
          >
            <Trophy size={40} className="text-pink-500" />
          </motion.div>

          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Memory Master!
          </h1>
          <p className="text-text-secondary mb-6">
            All pairs matched!
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-xp">{score}</div>
              <div className="text-xs text-text-muted">Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">{moves}</div>
              <div className="text-xs text-text-muted">Moves</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-correct">{formatTime(timer)}</div>
              <div className="text-xs text-text-muted">Time</div>
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

          <div className="flex items-center gap-2 px-4 py-2 bg-pastel-pink rounded-xl">
            <Clock size={20} className="text-pink-500" />
            <span className="font-mono font-bold text-lg text-pink-500">
              {formatTime(timer)}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-accent">{moves}</div>
              <div className="text-xs text-text-muted">Moves</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-correct">{matches}/{totalPairs}</div>
              <div className="text-xs text-text-muted">Pairs</div>
            </div>
          </div>
        </div>
      </header>

      {/* Game grid */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="grid grid-cols-3 gap-3 max-w-md w-full">
          {cards.map((card) => (
            <motion.button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`aspect-[3/4] rounded-xl text-sm font-medium p-2 transition-all ${
                card.isMatched
                  ? 'bg-pastel-green border-2 border-correct'
                  : card.isFlipped
                  ? card.type === 'term'
                    ? 'bg-pastel-purple border-2 border-accent'
                    : 'bg-pastel-blue border-2 border-blue-500'
                  : 'bg-surface-elevated hover:bg-surface-elevated/80'
              }`}
              whileHover={!card.isFlipped && !card.isMatched ? { scale: 1.05 } : {}}
              whileTap={!card.isFlipped && !card.isMatched ? { scale: 0.95 } : {}}
            >
              {card.isFlipped || card.isMatched ? (
                <motion.span
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  className={`block ${
                    card.type === 'term' ? 'text-accent font-bold' : 'text-text-primary'
                  }`}
                >
                  {card.content}
                </motion.span>
              ) : (
                <span className="text-2xl">?</span>
              )}
            </motion.button>
          ))}
        </div>
      </main>
    </div>
  );
}
