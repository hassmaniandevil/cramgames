'use client';

import { useState, useEffect } from 'react';
import { motion, Reorder } from 'framer-motion';
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
  GripVertical,
  CheckCircle,
  XCircle,
  Play,
  BookOpen,
} from 'lucide-react';

interface TimelineEvent {
  id: string;
  text: string;
  order: number;
}

interface Challenge {
  id: string;
  title: string;
  subject: string;
  events: TimelineEvent[];
  explanation: string;
}

const challenges: Challenge[] = [
  {
    id: 'bio-1',
    title: 'Stages of Mitosis',
    subject: 'Biology',
    events: [
      { id: 'e1', text: 'Interphase - DNA replicates', order: 1 },
      { id: 'e2', text: 'Prophase - Chromosomes condense', order: 2 },
      { id: 'e3', text: 'Metaphase - Chromosomes line up in middle', order: 3 },
      { id: 'e4', text: 'Anaphase - Chromosomes pulled apart', order: 4 },
      { id: 'e5', text: 'Telophase - Nuclear membranes reform', order: 5 },
      { id: 'e6', text: 'Cytokinesis - Cell divides in two', order: 6 },
    ],
    explanation: 'Mitosis follows IPMATC: Interphase, Prophase, Metaphase, Anaphase, Telophase, Cytokinesis. Remember: "I Propose Men Are Terrific Chaps"',
  },
  {
    id: 'chem-1',
    title: 'Reactivity Series (Most to Least)',
    subject: 'Chemistry',
    events: [
      { id: 'e1', text: 'Potassium (K)', order: 1 },
      { id: 'e2', text: 'Sodium (Na)', order: 2 },
      { id: 'e3', text: 'Calcium (Ca)', order: 3 },
      { id: 'e4', text: 'Magnesium (Mg)', order: 4 },
      { id: 'e5', text: 'Zinc (Zn)', order: 5 },
      { id: 'e6', text: 'Iron (Fe)', order: 6 },
      { id: 'e7', text: 'Copper (Cu)', order: 7 },
    ],
    explanation: 'Reactivity series: K > Na > Ca > Mg > Al > Zn > Fe > Cu > Ag > Au. More reactive metals displace less reactive ones from compounds.',
  },
  {
    id: 'physics-1',
    title: 'Electromagnetic Spectrum (Longest to Shortest Wavelength)',
    subject: 'Physics',
    events: [
      { id: 'e1', text: 'Radio waves', order: 1 },
      { id: 'e2', text: 'Microwaves', order: 2 },
      { id: 'e3', text: 'Infrared', order: 3 },
      { id: 'e4', text: 'Visible light', order: 4 },
      { id: 'e5', text: 'Ultraviolet', order: 5 },
      { id: 'e6', text: 'X-rays', order: 6 },
      { id: 'e7', text: 'Gamma rays', order: 7 },
    ],
    explanation: 'Remember: "Red Monkeys In Vans Use X-ray Glasses". Radio has longest wavelength (lowest frequency), Gamma has shortest (highest frequency).',
  },
  {
    id: 'bio-2',
    title: 'Human Digestive System Path',
    subject: 'Biology',
    events: [
      { id: 'e1', text: 'Mouth - Mechanical digestion & amylase', order: 1 },
      { id: 'e2', text: 'Oesophagus - Food travels down', order: 2 },
      { id: 'e3', text: 'Stomach - Protein digestion (protease)', order: 3 },
      { id: 'e4', text: 'Small intestine - Nutrient absorption', order: 4 },
      { id: 'e5', text: 'Large intestine - Water absorption', order: 5 },
      { id: 'e6', text: 'Rectum - Waste storage', order: 6 },
    ],
    explanation: 'Food follows: Mouth → Oesophagus → Stomach → Small Intestine → Large Intestine → Rectum. Most chemical digestion happens in the small intestine.',
  },
  {
    id: 'maths-1',
    title: 'Order of Operations (BIDMAS)',
    subject: 'Maths',
    events: [
      { id: 'e1', text: 'Brackets', order: 1 },
      { id: 'e2', text: 'Indices (Powers)', order: 2 },
      { id: 'e3', text: 'Division', order: 3 },
      { id: 'e4', text: 'Multiplication', order: 4 },
      { id: 'e5', text: 'Addition', order: 5 },
      { id: 'e6', text: 'Subtraction', order: 6 },
    ],
    explanation: 'BIDMAS: Brackets, Indices, Division, Multiplication, Addition, Subtraction. Division and Multiplication have equal priority (left to right), same for Addition and Subtraction.',
  },
  {
    id: 'physics-2',
    title: 'Energy Transfers in a Power Station',
    subject: 'Physics',
    events: [
      { id: 'e1', text: 'Chemical energy in fuel', order: 1 },
      { id: 'e2', text: 'Thermal energy (burning)', order: 2 },
      { id: 'e3', text: 'Kinetic energy (steam)', order: 3 },
      { id: 'e4', text: 'Kinetic energy (turbine)', order: 4 },
      { id: 'e5', text: 'Electrical energy (generator)', order: 5 },
    ],
    explanation: 'In a thermal power station: Chemical → Thermal → Kinetic (steam) → Kinetic (turbine) → Electrical. Energy is always conserved but efficiency is never 100%.',
  },
  {
    id: 'chem-2',
    title: 'Fractional Distillation Products (Lowest to Highest Boiling Point)',
    subject: 'Chemistry',
    events: [
      { id: 'e1', text: 'Refinery gases (bottled gas)', order: 1 },
      { id: 'e2', text: 'Petrol (car fuel)', order: 2 },
      { id: 'e3', text: 'Kerosene (jet fuel)', order: 3 },
      { id: 'e4', text: 'Diesel (lorry fuel)', order: 4 },
      { id: 'e5', text: 'Fuel oil (ships/heating)', order: 5 },
      { id: 'e6', text: 'Bitumen (roads)', order: 6 },
    ],
    explanation: 'Shorter hydrocarbon chains have lower boiling points. They rise highest in the fractionating column and are collected first. Bitumen has the longest chains.',
  },
  {
    id: 'bio-3',
    title: 'Levels of Organisation in the Body',
    subject: 'Biology',
    events: [
      { id: 'e1', text: 'Cells', order: 1 },
      { id: 'e2', text: 'Tissues', order: 2 },
      { id: 'e3', text: 'Organs', order: 3 },
      { id: 'e4', text: 'Organ systems', order: 4 },
      { id: 'e5', text: 'Organism', order: 5 },
    ],
    explanation: 'The hierarchy: Cells → Tissues (groups of similar cells) → Organs (groups of tissues) → Organ systems (groups of organs) → Organism.',
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

// Get difficulty level label from year group
function getDifficultyFromYearGroup(yearGroup: YearGroup): { level: string; label: string; color: string } {
  if (yearGroup >= 7 && yearGroup <= 9) {
    return { level: 'KS3', label: 'Key Stage 3', color: 'text-blue-400' };
  } else if (yearGroup >= 10 && yearGroup <= 11) {
    return { level: 'GCSE', label: 'GCSE Level', color: 'text-purple-400' };
  } else if (yearGroup >= 12 && yearGroup <= 13) {
    return { level: 'A-Level', label: 'A-Level', color: 'text-amber-400' };
  }
  // Default for primary years
  return { level: 'Foundation', label: 'Foundation Level', color: 'text-green-400' };
}

export default function TimelineChallengePage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const { profile } = useUserStore();

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [orderedEvents, setOrderedEvents] = useState<TimelineEvent[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const yearGroup = profile?.yearGroup || 10;
  const difficulty = getDifficultyFromYearGroup(yearGroup);
  const challenge = challenges[currentIndex];

  useEffect(() => {
    if (challenge) {
      setOrderedEvents(shuffleArray(challenge.events));
    }
  }, [currentIndex]);

  const checkOrder = () => {
    let correct = 0;
    orderedEvents.forEach((event, index) => {
      if (event.order === index + 1) {
        correct++;
      }
    });

    const accuracy = correct / challenge.events.length;
    setCorrectCount(correct);

    if (accuracy === 1) {
      setScore(s => s + 50);
      addXP(50);
    } else if (accuracy >= 0.7) {
      const xp = Math.round(30 * accuracy);
      setScore(s => s + xp);
      addXP(xp);
    }

    setShowResult(true);
  };

  const nextChallenge = () => {
    if (currentIndex < challenges.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowResult(false);
    } else {
      setGameComplete(true);
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setShowResult(false);
    setScore(0);
    setGameComplete(false);
    setGameState('ready');
  };

  const startGame = () => {
    setGameState('playing');
  };

  // Ready screen
  if (gameState === 'ready') {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-8 w-full max-w-md text-center"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
            <Clock size={48} className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Timeline Challenge
          </h1>
          <p className="text-text-secondary mb-6">
            Drag and drop to arrange events in the correct order!
          </p>

          {/* Difficulty Badge */}
          <div className="bg-surface-elevated rounded-xl p-4 mb-6 border border-white/10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <BookOpen size={20} className={difficulty.color} />
              <span className={`text-lg font-bold ${difficulty.color}`}>
                {difficulty.level}
              </span>
            </div>
            <div className="space-y-2 text-left">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Difficulty:</span>
                <span className={`font-medium ${difficulty.color}`}>{difficulty.label}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Year Group:</span>
                <span className="text-text-primary font-medium">Year {yearGroup}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Challenges:</span>
                <span className="text-text-primary font-medium">{challenges.length} timelines</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-surface-elevated rounded-xl p-4 text-center border border-white/10">
              <GripVertical size={24} className="text-accent mx-auto mb-2" />
              <p className="text-sm text-text-muted">Drag to reorder</p>
            </div>
            <div className="bg-surface-elevated rounded-xl p-4 text-center border border-white/10">
              <Zap size={24} className="text-xp mx-auto mb-2" />
              <p className="text-sm text-text-muted">Earn XP</p>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full btn-primary py-4 flex items-center justify-center gap-2"
          >
            <Play size={20} />
            Start Challenge
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

  // Complete screen
  if (gameComplete) {
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
            All Timelines Complete!
          </h1>
          <p className="text-text-secondary mb-6">
            You've mastered the sequences!
          </p>

          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-xp">{score}</div>
            <div className="text-sm text-text-muted">Total XP earned</div>
          </div>

          <div className="space-y-3">
            <button
              onClick={resetGame}
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass sticky top-0 z-50 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="p-2 hover:bg-surface-elevated rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
          <div className="text-center">
            <h1 className="font-bold text-text-primary">Timeline Challenge</h1>
            <p className="text-xs text-text-muted">{currentIndex + 1} of {challenges.length}</p>
          </div>
          <div className="flex items-center gap-1">
            <Zap size={18} className="text-xp" />
            <span className="font-bold text-xp">{score}</span>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 pb-32">
        {/* Challenge Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="card p-6 mb-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <Clock size={20} className="text-accent" />
            <span className="text-sm px-2 py-1 bg-pastel-purple text-accent rounded-full">
              {challenge.subject}
            </span>
          </div>
          <h2 className="text-xl font-bold text-text-primary">{challenge.title}</h2>
          <p className="text-sm text-text-muted mt-2">
            Drag to arrange in the correct order
          </p>
        </motion.div>

        {/* Reorderable List */}
        {!showResult ? (
          <Reorder.Group
            axis="y"
            values={orderedEvents}
            onReorder={setOrderedEvents}
            className="space-y-3"
          >
            {orderedEvents.map((event, index) => (
              <Reorder.Item
                key={event.id}
                value={event}
                className="card p-4 cursor-grab active:cursor-grabbing touch-none"
                whileDrag={{
                  scale: 1.02,
                  boxShadow: '0 8px 30px rgba(124, 92, 255, 0.2)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pastel-purple rounded-full flex items-center justify-center text-accent font-bold">
                    {index + 1}
                  </div>
                  <span className="flex-1 text-text-primary font-medium">{event.text}</span>
                  <GripVertical size={20} className="text-text-muted" />
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        ) : (
          <div className="space-y-3">
            {orderedEvents.map((event, index) => {
              const isCorrect = event.order === index + 1;

              return (
                <motion.div
                  key={event.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`card p-4 border-2 ${
                    isCorrect ? 'bg-pastel-green border-correct' : 'bg-pastel-pink border-incorrect'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      isCorrect ? 'bg-correct text-white' : 'bg-incorrect text-white'
                    }`}>
                      {isCorrect ? <CheckCircle size={18} /> : event.order}
                    </div>
                    <span className="flex-1 text-text-primary font-medium">{event.text}</span>
                    {!isCorrect && (
                      <span className="text-sm text-incorrect font-medium">
                        Should be #{event.order}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Action Button / Explanation */}
        {!showResult ? (
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={checkOrder}
            className="w-full mt-6 btn-primary py-4"
          >
            Check Order
          </motion.button>
        ) : (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-6"
          >
            <div className={`card p-4 mb-4 ${
              correctCount === challenge.events.length ? 'bg-pastel-green' : 'bg-pastel-purple'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {correctCount === challenge.events.length ? (
                  <CheckCircle size={20} className="text-correct" />
                ) : (
                  <XCircle size={20} className="text-accent" />
                )}
                <span className="font-bold text-text-primary">
                  {correctCount}/{challenge.events.length} correct
                </span>
                {correctCount === challenge.events.length && (
                  <span className="ml-auto text-correct font-bold">+50 XP</span>
                )}
              </div>
              <p className="text-sm text-text-secondary">{challenge.explanation}</p>
            </div>

            <button
              onClick={nextChallenge}
              className="w-full btn-primary py-4"
            >
              {currentIndex < challenges.length - 1 ? 'Next Timeline' : 'Complete'}
            </button>
          </motion.div>
        )}
      </main>
    </div>
  );
}
