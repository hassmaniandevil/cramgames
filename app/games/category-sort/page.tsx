'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  CheckCircle,
  XCircle,
  ArrowRight,
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
import { useUserStore } from '@/lib/stores/userStore';
import { cn } from '@/lib/utils/cn';

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

interface SortItem {
  id: string;
  text: string;
  category: string;
}

interface Challenge {
  id: string;
  title: string;
  subject: string;
  categories: string[];
  items: SortItem[];
  difficulty: 'ks3' | 'gcse' | 'alevel';
}

const allChallenges: Challenge[] = [
  // KS3 Challenges
  {
    id: 'bio-ks3-1',
    title: 'Plant vs Animal Cells',
    subject: 'Biology',
    categories: ['Plant Cells Only', 'Animal Cells Only', 'Both'],
    difficulty: 'ks3',
    items: [
      { id: '1', text: 'Cell wall', category: 'Plant Cells Only' },
      { id: '2', text: 'Chloroplasts', category: 'Plant Cells Only' },
      { id: '3', text: 'Large vacuole', category: 'Plant Cells Only' },
      { id: '4', text: 'Centrioles', category: 'Animal Cells Only' },
      { id: '5', text: 'Nucleus', category: 'Both' },
      { id: '6', text: 'Mitochondria', category: 'Both' },
      { id: '7', text: 'Cell membrane', category: 'Both' },
      { id: '8', text: 'Ribosomes', category: 'Both' },
    ],
  },
  {
    id: 'chem-ks3-1',
    title: 'Acids vs Alkalis',
    subject: 'Chemistry',
    categories: ['Acids', 'Alkalis', 'Neutral'],
    difficulty: 'ks3',
    items: [
      { id: '1', text: 'Lemon juice', category: 'Acids' },
      { id: '2', text: 'Vinegar', category: 'Acids' },
      { id: '3', text: 'Stomach acid', category: 'Acids' },
      { id: '4', text: 'Soap', category: 'Alkalis' },
      { id: '5', text: 'Bleach', category: 'Alkalis' },
      { id: '6', text: 'Baking soda', category: 'Alkalis' },
      { id: '7', text: 'Pure water', category: 'Neutral' },
      { id: '8', text: 'Salt water', category: 'Neutral' },
    ],
  },
  {
    id: 'phys-ks3-1',
    title: 'Types of Energy',
    subject: 'Physics',
    categories: ['Kinetic', 'Potential', 'Other'],
    difficulty: 'ks3',
    items: [
      { id: '1', text: 'Moving car', category: 'Kinetic' },
      { id: '2', text: 'Flowing water', category: 'Kinetic' },
      { id: '3', text: 'Sound waves', category: 'Kinetic' },
      { id: '4', text: 'Stretched spring', category: 'Potential' },
      { id: '5', text: 'Book on shelf', category: 'Potential' },
      { id: '6', text: 'Chemical bonds', category: 'Potential' },
      { id: '7', text: 'Light', category: 'Other' },
      { id: '8', text: 'Heat', category: 'Other' },
    ],
  },
  {
    id: 'bio-ks3-2',
    title: 'Vertebrates vs Invertebrates',
    subject: 'Biology',
    categories: ['Vertebrates', 'Invertebrates'],
    difficulty: 'ks3',
    items: [
      { id: '1', text: 'Dog', category: 'Vertebrates' },
      { id: '2', text: 'Fish', category: 'Vertebrates' },
      { id: '3', text: 'Snake', category: 'Vertebrates' },
      { id: '4', text: 'Frog', category: 'Vertebrates' },
      { id: '5', text: 'Spider', category: 'Invertebrates' },
      { id: '6', text: 'Worm', category: 'Invertebrates' },
      { id: '7', text: 'Jellyfish', category: 'Invertebrates' },
      { id: '8', text: 'Snail', category: 'Invertebrates' },
    ],
  },

  // GCSE Challenges
  {
    id: 'bio-gcse-1',
    title: 'Respiration Products',
    subject: 'Biology',
    categories: ['Aerobic Only', 'Anaerobic Only', 'Both'],
    difficulty: 'gcse',
    items: [
      { id: '1', text: 'Carbon dioxide', category: 'Aerobic Only' },
      { id: '2', text: 'Water', category: 'Aerobic Only' },
      { id: '3', text: 'Lots of ATP', category: 'Aerobic Only' },
      { id: '4', text: 'Lactic acid', category: 'Anaerobic Only' },
      { id: '5', text: 'Ethanol', category: 'Anaerobic Only' },
      { id: '6', text: 'Small amount ATP', category: 'Anaerobic Only' },
      { id: '7', text: 'Glucose used', category: 'Both' },
      { id: '8', text: 'Energy released', category: 'Both' },
    ],
  },
  {
    id: 'chem-gcse-1',
    title: 'Types of Bonding',
    subject: 'Chemistry',
    categories: ['Ionic', 'Covalent', 'Metallic'],
    difficulty: 'gcse',
    items: [
      { id: '1', text: 'NaCl (salt)', category: 'Ionic' },
      { id: '2', text: 'MgO', category: 'Ionic' },
      { id: '3', text: 'H₂O (water)', category: 'Covalent' },
      { id: '4', text: 'CO₂', category: 'Covalent' },
      { id: '5', text: 'CH₄ (methane)', category: 'Covalent' },
      { id: '6', text: 'Copper wire', category: 'Metallic' },
      { id: '7', text: 'Iron nail', category: 'Metallic' },
      { id: '8', text: 'Gold ring', category: 'Metallic' },
    ],
  },
  {
    id: 'phys-gcse-1',
    title: 'EM Spectrum Uses',
    subject: 'Physics',
    categories: ['Radio', 'Visible', 'X-rays'],
    difficulty: 'gcse',
    items: [
      { id: '1', text: 'TV signals', category: 'Radio' },
      { id: '2', text: 'WiFi', category: 'Radio' },
      { id: '3', text: 'Bluetooth', category: 'Radio' },
      { id: '4', text: 'Photography', category: 'Visible' },
      { id: '5', text: 'Fibre optics', category: 'Visible' },
      { id: '6', text: 'Medical imaging', category: 'X-rays' },
      { id: '7', text: 'Airport security', category: 'X-rays' },
      { id: '8', text: 'Cancer treatment', category: 'X-rays' },
    ],
  },
  {
    id: 'bio-gcse-2',
    title: 'Inherited vs Environmental',
    subject: 'Biology',
    categories: ['Inherited', 'Environmental', 'Both'],
    difficulty: 'gcse',
    items: [
      { id: '1', text: 'Eye colour', category: 'Inherited' },
      { id: '2', text: 'Blood type', category: 'Inherited' },
      { id: '3', text: 'Scars', category: 'Environmental' },
      { id: '4', text: 'Language spoken', category: 'Environmental' },
      { id: '5', text: 'Height', category: 'Both' },
      { id: '6', text: 'Weight', category: 'Both' },
      { id: '7', text: 'Skin colour', category: 'Both' },
      { id: '8', text: 'Intelligence', category: 'Both' },
    ],
  },

  // A-Level Challenges
  {
    id: 'bio-alevel-1',
    title: 'Photosynthesis Stages',
    subject: 'Biology',
    categories: ['Light-dependent', 'Light-independent', 'Both'],
    difficulty: 'alevel',
    items: [
      { id: '1', text: 'Photolysis of water', category: 'Light-dependent' },
      { id: '2', text: 'Electron transport chain', category: 'Light-dependent' },
      { id: '3', text: 'ATP production via chemiosmosis', category: 'Light-dependent' },
      { id: '4', text: 'Carbon fixation', category: 'Light-independent' },
      { id: '5', text: 'RuBisCO enzyme', category: 'Light-independent' },
      { id: '6', text: 'Regeneration of RuBP', category: 'Light-independent' },
      { id: '7', text: 'Uses ATP', category: 'Both' },
      { id: '8', text: 'Occurs in chloroplast', category: 'Both' },
    ],
  },
  {
    id: 'chem-alevel-1',
    title: 'Reaction Mechanisms',
    subject: 'Chemistry',
    categories: ['Nucleophilic', 'Electrophilic', 'Radical'],
    difficulty: 'alevel',
    items: [
      { id: '1', text: 'Hydrolysis of haloalkanes', category: 'Nucleophilic' },
      { id: '2', text: 'OH⁻ attacks C+', category: 'Nucleophilic' },
      { id: '3', text: 'Addition to alkenes', category: 'Electrophilic' },
      { id: '4', text: 'Benzene nitration', category: 'Electrophilic' },
      { id: '5', text: 'Bromination of alkanes', category: 'Radical' },
      { id: '6', text: 'UV light initiation', category: 'Radical' },
      { id: '7', text: 'Chain propagation', category: 'Radical' },
      { id: '8', text: 'Homolytic fission', category: 'Radical' },
    ],
  },
  {
    id: 'phys-alevel-1',
    title: 'Particle Properties',
    subject: 'Physics',
    categories: ['Bosons', 'Fermions', 'Both'],
    difficulty: 'alevel',
    items: [
      { id: '1', text: 'Photon', category: 'Bosons' },
      { id: '2', text: 'Gluon', category: 'Bosons' },
      { id: '3', text: 'W and Z bosons', category: 'Bosons' },
      { id: '4', text: 'Electron', category: 'Fermions' },
      { id: '5', text: 'Quark', category: 'Fermions' },
      { id: '6', text: 'Neutrino', category: 'Fermions' },
      { id: '7', text: 'Has mass', category: 'Both' },
      { id: '8', text: 'Follows quantum mechanics', category: 'Both' },
    ],
  },
  {
    id: 'chem-alevel-2',
    title: 'Electrode Processes',
    subject: 'Chemistry',
    categories: ['Anode', 'Cathode', 'Both'],
    difficulty: 'alevel',
    items: [
      { id: '1', text: 'Oxidation occurs', category: 'Anode' },
      { id: '2', text: 'Electrons released', category: 'Anode' },
      { id: '3', text: 'Positive electrode', category: 'Anode' },
      { id: '4', text: 'Reduction occurs', category: 'Cathode' },
      { id: '5', text: 'Electrons gained', category: 'Cathode' },
      { id: '6', text: 'Negative electrode', category: 'Cathode' },
      { id: '7', text: 'Made of metal/carbon', category: 'Both' },
      { id: '8', text: 'Conducts electricity', category: 'Both' },
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

const TOTAL_CHALLENGES = 4;
const GAME_TIME = 120; // 2 minutes

export default function CategorySortPage() {
  const { profile } = useUserStore();
  const yearGroup = profile?.yearGroup ?? 10;

  // Determine difficulty based on year group
  const { filter: difficultyFilter } = useMemo(
    () => getDifficultyFromYearGroup(yearGroup),
    [yearGroup]
  );

  // Filter challenges based on difficulty
  const availableChallenges = useMemo(
    () => allChallenges.filter(c => difficultyFilter.includes(c.difficulty)),
    [difficultyFilter]
  );

  // Game state hooks
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
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [unsortedItems, setUnsortedItems] = useState<SortItem[]>([]);
  const [sortedItems, setSortedItems] = useState<Record<string, SortItem[]>>({});
  const [selectedItem, setSelectedItem] = useState<SortItem | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameChallenges, setGameChallenges] = useState<Challenge[]>([]);
  const [correctCount, setCorrectCount] = useState(0);

  const challenge = gameChallenges[challengeIndex];

  // Handle game start
  const handleStart = useCallback(() => {
    const shuffled = shuffleArray(availableChallenges).slice(0, TOTAL_CHALLENGES);
    setGameChallenges(shuffled);
    setChallengeIndex(0);
    startGame();
    timer.reset(GAME_TIME);
    timer.start();
    scoring.reset();
  }, [availableChallenges, startGame, timer, scoring]);

  // Handle restart
  const handleRestart = useCallback(() => {
    resetGame();
    setTimeout(handleStart, 100);
  }, [resetGame, handleStart]);

  // Initialize challenge when it changes
  useEffect(() => {
    if (challenge && isPlaying) {
      setUnsortedItems(shuffleArray(challenge.items));
      const initial: Record<string, SortItem[]> = {};
      challenge.categories.forEach(cat => {
        initial[cat] = [];
      });
      setSortedItems(initial);
      setSelectedItem(null);
      setShowResult(false);
    }
  }, [challengeIndex, challenge, isPlaying]);

  const handleItemClick = useCallback((item: SortItem) => {
    if (showResult) return;
    setSelectedItem(selectedItem?.id === item.id ? null : item);
  }, [showResult, selectedItem]);

  const handleCategoryClick = useCallback((category: string) => {
    if (!selectedItem || showResult) return;

    // Move item to category
    setUnsortedItems(prev => prev.filter(i => i.id !== selectedItem.id));
    setSortedItems(prev => ({
      ...prev,
      [category]: [...prev[category], selectedItem],
    }));
    setSelectedItem(null);
  }, [selectedItem, showResult]);

  const handleRemoveItem = useCallback((item: SortItem, category: string) => {
    if (showResult) return;

    setSortedItems(prev => ({
      ...prev,
      [category]: prev[category].filter(i => i.id !== item.id),
    }));
    setUnsortedItems(prev => [...prev, item]);
  }, [showResult]);

  const checkAnswers = useCallback(() => {
    if (!challenge) return;

    let correct = 0;
    let wrong = 0;

    Object.entries(sortedItems).forEach(([category, items]) => {
      items.forEach(item => {
        if (item.category === category) {
          correct++;
        } else {
          wrong++;
        }
      });
    });

    setCorrectCount(correct);
    setShowResult(true);

    // Record each correct/wrong answer for scoring
    for (let i = 0; i < correct; i++) {
      scoring.recordCorrect();
    }
    for (let i = 0; i < wrong; i++) {
      scoring.recordWrong();
    }

    // Play appropriate feedback
    if (correct === challenge.items.length) {
      audio.playCorrect(scoring.combo);
      emitCorrect();
    } else if (wrong > 0) {
      audio.playWrong();
      shake(ShakePresets.wrong);
      emitWrong();
    } else {
      audio.playCorrect(scoring.combo);
      emitCorrect();
    }
  }, [challenge, sortedItems, scoring, audio, shake, emitCorrect, emitWrong]);

  const nextChallenge = useCallback(() => {
    if (challengeIndex < TOTAL_CHALLENGES - 1) {
      setChallengeIndex(prev => prev + 1);
    } else {
      finishGame();
    }
  }, [challengeIndex, finishGame]);

  const allSorted = unsortedItems.length === 0;

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
        title="Category Sort"
        subtitle="Sort items into the correct categories!"
        icon={<Layers size={40} className="text-teal-400" />}
        color="teal"
        gameState={gameState}
        onStart={handleStart}
        onRestart={handleRestart}
        time={timer.time}
        totalTime={GAME_TIME}
        score={scoring.score}
        combo={scoring.combo}
        stats={stats}
      >
        <div style={shakeStyle} className="h-full flex flex-col">
          {challenge ? (
            <div className="flex-1 overflow-auto pb-24">
              {/* Challenge info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Layers size={20} className="text-teal-400" />
                  <span className="text-sm px-2 py-1 bg-teal-500/20 text-teal-300 rounded-full">
                    {challenge.subject}
                  </span>
                  <span className="text-sm text-gray-500 ml-auto">
                    {challengeIndex + 1} of {TOTAL_CHALLENGES}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white">{challenge.title}</h2>
                <p className="text-sm text-gray-400 mt-1">
                  Tap an item, then tap a category to sort it
                </p>
              </motion.div>

              {/* Unsorted items */}
              {!showResult && unsortedItems.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Items to sort:</p>
                  <div className="flex flex-wrap gap-2">
                    {unsortedItems.map((item) => (
                      <motion.button
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                        className={cn(
                          'px-4 py-2 rounded-xl font-medium transition-all',
                          selectedItem?.id === item.id
                            ? 'bg-yellow-400 text-yellow-900 scale-105'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        )}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.text}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              <div className="space-y-3">
                {challenge.categories.map((category, index) => {
                  const items = sortedItems[category] || [];
                  const isCorrectCategory = showResult && items.every(i => i.category === category);

                  return (
                    <motion.div
                      key={category}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleCategoryClick(category)}
                        disabled={showResult || !selectedItem}
                        className={cn(
                          'w-full p-4 rounded-2xl border-2 border-dashed transition-all text-left',
                          showResult
                            ? isCorrectCategory
                              ? 'bg-green-500/10 border-green-500/50'
                              : 'bg-red-500/10 border-red-500/50'
                            : selectedItem
                            ? 'bg-white/5 border-yellow-400/50 hover:bg-white/10'
                            : 'bg-white/5 border-white/20'
                        )}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-white">{category}</span>
                          {showResult && (
                            isCorrectCategory ? (
                              <CheckCircle size={20} className="text-green-400" />
                            ) : (
                              <XCircle size={20} className="text-red-400" />
                            )
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 min-h-[40px]">
                          {items.map((item) => {
                            const isCorrect = item.category === category;
                            return (
                              <motion.span
                                key={item.id}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (!showResult) handleRemoveItem(item, category);
                                }}
                                className={cn(
                                  'px-3 py-1 rounded-lg text-sm font-medium cursor-pointer transition-colors',
                                  showResult
                                    ? isCorrect
                                      ? 'bg-green-500/20 text-green-400'
                                      : 'bg-red-500/20 text-red-400'
                                    : 'bg-white/20 text-white hover:bg-white/30'
                                )}
                              >
                                {item.text}
                                {showResult && !isCorrect && (
                                  <span className="ml-1 text-xs opacity-70">
                                    {' -> '}{item.category}
                                  </span>
                                )}
                              </motion.span>
                            );
                          })}
                          {items.length === 0 && (
                            <span className="text-gray-500 text-sm">Drop items here</span>
                          )}
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Action button */}
              <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0f0f17] via-[#0f0f17] to-transparent">
                {!showResult ? (
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    onClick={checkAnswers}
                    disabled={!allSorted}
                    className={cn(
                      'w-full py-4 font-bold text-white rounded-xl transition-all',
                      allSorted
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500'
                        : 'bg-white/10 text-gray-400'
                    )}
                  >
                    {allSorted ? 'Check Answers' : `Sort all items (${unsortedItems.length} left)`}
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="space-y-3"
                  >
                    <div className={cn(
                      'p-4 rounded-xl',
                      correctCount === challenge.items.length
                        ? 'bg-green-500/10 border border-green-500/30'
                        : 'bg-white/5 border border-white/10'
                    )}>
                      <p className="font-bold text-white text-center">
                        {correctCount}/{challenge.items.length} correct
                      </p>
                    </div>

                    <button
                      onClick={nextChallenge}
                      className="w-full py-4 font-bold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center gap-2"
                    >
                      {challengeIndex < TOTAL_CHALLENGES - 1 ? (
                        <>
                          Next Category
                          <ArrowRight size={20} />
                        </>
                      ) : (
                        'See Results'
                      )}
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-400">Loading challenge...</p>
            </div>
          )}
        </div>
      </GameFrame>
    </>
  );
}
