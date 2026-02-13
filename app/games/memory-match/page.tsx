'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain } from 'lucide-react';
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
import { useUserStore } from '@/lib/stores/userStore';
import { cn } from '@/lib/utils/cn';

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

const TOTAL_PAIRS = 6; // 12 cards total
const GAME_TIME = 90; // 90 seconds to match all pairs

export default function MemoryMatchPage() {
  const { profile } = useUserStore();

  // Game framework hooks
  const { gameState, isPlaying, startGame, finishGame, resetGame } = useGameState();
  const timer = useGameTimer({
    initialTime: GAME_TIME,
    countDown: true,
    onTimeUp: finishGame,
  });
  const scoring = useGameScore({ basePointsPerQuestion: 100 });
  const audio = useGameAudio();
  const { shake, shakeStyle } = useScreenShake();
  const { trigger: particleTrigger, config: particleConfig, emitCorrect, emitWrong } = useParticles();

  // Game-specific state
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);

  // Get year group from profile, default to 10 (GCSE) if not set
  const yearGroup = profile?.yearGroup ?? 10;

  // Determine difficulty based on year group
  const { filter: difficultyFilter } = useMemo(
    () => getDifficultyFromYearGroup(yearGroup),
    [yearGroup]
  );

  // Filter pairs based on difficulty
  const availablePairs = useMemo(
    () => allPairs.filter(pair => difficultyFilter.includes(pair.difficulty)),
    [difficultyFilter]
  );

  // Handle game start
  const handleStart = useCallback(() => {
    const gamePairs = shuffleArray(availablePairs).slice(0, TOTAL_PAIRS);
    setCards(createCards(gamePairs));
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setIsChecking(false);
    startGame();
    timer.reset(GAME_TIME);
    timer.start();
    scoring.reset();
  }, [availablePairs, startGame, timer, scoring]);

  // Handle restart
  const handleRestart = useCallback(() => {
    resetGame();
    setTimeout(handleStart, 100);
  }, [resetGame, handleStart]);

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
        const newMatches = matches + 1;
        setMatches(newMatches);
        setFlippedCards([]);
        setIsChecking(false);

        // Record correct match
        scoring.recordCorrect();
        audio.playCorrect(scoring.combo);
        emitCorrect();

        // Check if game complete
        if (newMatches === TOTAL_PAIRS) {
          timer.pause();
          finishGame();
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

        // Record wrong
        scoring.recordWrong();
        audio.playWrong();
        shake(ShakePresets.wrong);
        emitWrong();
      }, 1000);
    }

    setMoves(m => m + 1);
  }, [flippedCards, cards, matches, scoring, audio, shake, emitCorrect, emitWrong, timer, finishGame]);

  const handleCardClick = useCallback((cardId: number) => {
    if (isChecking) return;
    if (flippedCards.length >= 2) return;

    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    setCards(prev => prev.map(c =>
      c.id === cardId ? { ...c, isFlipped: true } : c
    ));
    setFlippedCards(prev => [...prev, cardId]);
  }, [isChecking, flippedCards, cards]);

  // Calculate stats for results
  const stats = {
    score: scoring.score,
    correctAnswers: scoring.correctAnswers,
    wrongAnswers: scoring.wrongAnswers,
    combo: scoring.combo,
    maxCombo: scoring.maxCombo,
    accuracy: scoring.accuracy,
    xpEarned: scoring.xpEarned,
    isPerfect: scoring.isPerfect,
  };

  return (
    <>
      <ParticleEffect trigger={particleTrigger} {...particleConfig} />

      <GameFrame
        title="Memory Match"
        subtitle="Match scientific terms with their definitions!"
        icon={<Brain size={40} className="text-pink-400" />}
        color="pink"
        gameState={gameState}
        onStart={handleStart}
        onRestart={handleRestart}
        time={timer.time}
        totalTime={GAME_TIME}
        score={scoring.score}
        combo={scoring.combo}
        stats={stats}
        zoneId="science-memory"
      >
        <div style={shakeStyle} className="h-full flex flex-col items-center justify-center">
          {/* Progress indicator */}
          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
              <span className="text-sm text-gray-400">Pairs:</span>
              <span className="font-bold text-white">{matches}/{TOTAL_PAIRS}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
              <span className="text-sm text-gray-400">Moves:</span>
              <span className="font-bold text-white">{moves}</span>
            </div>
          </div>

          {/* Game grid */}
          <div className="grid grid-cols-3 gap-3 max-w-md w-full">
            <AnimatePresence>
              {cards.map((card) => (
                <motion.button
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => handleCardClick(card.id)}
                  className={cn(
                    'aspect-[3/4] rounded-xl text-sm font-medium p-2 transition-all border-2',
                    card.isMatched
                      ? 'bg-green-500/20 border-green-500 text-green-400'
                      : card.isFlipped
                        ? card.type === 'term'
                          ? 'bg-purple-500/20 border-purple-500 text-purple-400'
                          : 'bg-blue-500/20 border-blue-500 text-blue-400'
                        : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-pink-500/50'
                  )}
                  whileHover={!card.isFlipped && !card.isMatched ? { scale: 1.05 } : {}}
                  whileTap={!card.isFlipped && !card.isMatched ? { scale: 0.95 } : {}}
                >
                  {card.isFlipped || card.isMatched ? (
                    <motion.span
                      initial={{ opacity: 0, rotateY: 90 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      className={cn(
                        'block',
                        card.type === 'term' ? 'font-bold' : ''
                      )}
                    >
                      {card.content}
                    </motion.span>
                  ) : (
                    <span className="text-2xl text-gray-400">?</span>
                  )}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </GameFrame>
    </>
  );
}
