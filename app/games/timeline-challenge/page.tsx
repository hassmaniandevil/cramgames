'use client';

import { useState, useEffect } from 'react';
import { motion, Reorder } from 'framer-motion';
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
import {
  Clock,
  GripVertical,
  CheckCircle,
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

const TOTAL_TIME = 120; // 2 minutes for all challenges

export default function TimelineChallengePage() {
  // Game framework hooks
  const { gameState, isPlaying, startGame, finishGame, resetGame } = useGameState();
  const { time, start: startTimer, reset: resetTimer } = useGameTimer({
    initialTime: TOTAL_TIME,
    countDown: true,
    onTimeUp: finishGame,
  });
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [orderedEvents, setOrderedEvents] = useState<TimelineEvent[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const challenge = challenges[currentIndex];

  // Initialize events when challenge changes
  useEffect(() => {
    if (challenge && isPlaying) {
      setOrderedEvents(shuffleArray(challenge.events));
    }
  }, [currentIndex, challenge, isPlaying]);

  // Handle game start
  const handleStart = () => {
    startGame();
    startTimer();
    setOrderedEvents(shuffleArray(challenges[0].events));
  };

  // Handle game restart
  const handleRestart = () => {
    resetGame();
    resetTimer();
    resetScore();
    setCurrentIndex(0);
    setShowResult(false);
    setCorrectCount(0);
  };

  // Check the order of events
  const checkOrder = () => {
    let correct = 0;
    orderedEvents.forEach((event, index) => {
      if (event.order === index + 1) {
        correct++;
      }
    });

    const totalEvents = challenge.events.length;
    setCorrectCount(correct);

    if (correct === totalEvents) {
      // Perfect order - full points
      recordCorrect();
      playCorrect(combo + 1);
      emitCorrect();
    } else if (correct >= totalEvents * 0.7) {
      // Mostly correct - partial points
      recordCorrect();
      playCorrect(1);
      emitCorrect();
    } else {
      // Too many wrong
      recordWrong();
      playWrong();
      shake(ShakePresets.wrong);
      emitWrong();
    }

    setShowResult(true);
  };

  // Move to next challenge or finish
  const nextChallenge = () => {
    if (currentIndex < challenges.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowResult(false);
    } else {
      finishGame();
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
    <>
      <ParticleEffect trigger={particleTrigger} {...particleConfig} />
      <GameFrame
        title="Timeline Challenge"
        subtitle="Drag and drop to arrange events in the correct order!"
        icon={<Clock size={40} className="text-purple-400" />}
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
        {isPlaying && (
          <div className="max-w-2xl mx-auto">
            {/* Challenge Info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-[#1a1a2e] rounded-2xl p-6 mb-6 border border-white/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <Clock size={20} className="text-purple-400" />
                <span className="text-sm px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                  {challenge.subject}
                </span>
                <span className="ml-auto text-sm text-gray-400">
                  {currentIndex + 1} of {challenges.length}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white">{challenge.title}</h2>
              <p className="text-sm text-gray-400 mt-2">
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
                    className="bg-[#1a1a2e] rounded-xl p-4 cursor-grab active:cursor-grabbing touch-none border border-white/10"
                    whileDrag={{
                      scale: 1.02,
                      boxShadow: '0 8px 30px rgba(168, 85, 247, 0.2)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">
                        {index + 1}
                      </div>
                      <span className="flex-1 text-white font-medium">{event.text}</span>
                      <GripVertical size={20} className="text-gray-500" />
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
                      className={`rounded-xl p-4 border-2 ${
                        isCorrect
                          ? 'bg-green-500/10 border-green-500/50'
                          : 'bg-red-500/10 border-red-500/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                        }`}>
                          {isCorrect ? <CheckCircle size={18} /> : event.order}
                        </div>
                        <span className="flex-1 text-white font-medium">{event.text}</span>
                        {!isCorrect && (
                          <span className="text-sm text-red-400 font-medium">
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
                className="w-full mt-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-colors"
              >
                Check Order
              </motion.button>
            ) : (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="mt-6"
              >
                <div className={`rounded-xl p-4 mb-4 border ${
                  correctCount === challenge.events.length
                    ? 'bg-green-500/10 border-green-500/50'
                    : 'bg-purple-500/10 border-purple-500/50'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    {correctCount === challenge.events.length ? (
                      <CheckCircle size={20} className="text-green-400" />
                    ) : (
                      <Clock size={20} className="text-purple-400" />
                    )}
                    <span className="font-bold text-white">
                      {correctCount}/{challenge.events.length} correct
                    </span>
                    {correctCount === challenge.events.length && (
                      <span className="ml-auto text-green-400 font-bold">Perfect!</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-300">{challenge.explanation}</p>
                </div>

                <button
                  onClick={nextChallenge}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-colors"
                >
                  {currentIndex < challenges.length - 1 ? 'Next Timeline' : 'Complete'}
                </button>
              </motion.div>
            )}
          </div>
        )}
      </GameFrame>
    </>
  );
}
