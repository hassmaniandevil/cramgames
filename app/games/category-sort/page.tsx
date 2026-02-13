'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import {
  X,
  Zap,
  Trophy,
  RotateCcw,
  Home,
  Layers,
  CheckCircle,
  XCircle,
  ArrowRight,
} from 'lucide-react';

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
}

const challenges: Challenge[] = [
  {
    id: 'bio-1',
    title: 'Plant vs Animal Cells',
    subject: 'Biology',
    categories: ['Plant Cells Only', 'Animal Cells Only', 'Both'],
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
    id: 'chem-1',
    title: 'Acids vs Alkalis',
    subject: 'Chemistry',
    categories: ['Acids', 'Alkalis', 'Neutral'],
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
    id: 'phys-1',
    title: 'Types of Energy',
    subject: 'Physics',
    categories: ['Kinetic', 'Potential', 'Other'],
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
    id: 'bio-2',
    title: 'Respiration Products',
    subject: 'Biology',
    categories: ['Aerobic Only', 'Anaerobic Only', 'Both'],
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
    id: 'chem-2',
    title: 'Types of Bonding',
    subject: 'Chemistry',
    categories: ['Ionic', 'Covalent', 'Metallic'],
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
    id: 'phys-2',
    title: 'EM Spectrum Uses',
    subject: 'Physics',
    categories: ['Radio', 'Visible', 'X-rays'],
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
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function CategorySortPage() {
  const router = useRouter();
  const { addXP } = useProgressStore();

  const [challengeIndex, setChallengeIndex] = useState(0);
  const [unsortedItems, setUnsortedItems] = useState<SortItem[]>([]);
  const [sortedItems, setSortedItems] = useState<Record<string, SortItem[]>>({});
  const [selectedItem, setSelectedItem] = useState<SortItem | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const challenge = challenges[challengeIndex];
  const totalChallenges = 4;

  useEffect(() => {
    if (challenge) {
      setUnsortedItems(shuffleArray(challenge.items));
      const initial: Record<string, SortItem[]> = {};
      challenge.categories.forEach(cat => {
        initial[cat] = [];
      });
      setSortedItems(initial);
      setSelectedItem(null);
      setShowResult(false);
    }
  }, [challengeIndex]);

  const handleItemClick = (item: SortItem) => {
    if (showResult) return;
    setSelectedItem(selectedItem?.id === item.id ? null : item);
  };

  const handleCategoryClick = (category: string) => {
    if (!selectedItem || showResult) return;

    // Move item to category
    setUnsortedItems(prev => prev.filter(i => i.id !== selectedItem.id));
    setSortedItems(prev => ({
      ...prev,
      [category]: [...prev[category], selectedItem],
    }));
    setSelectedItem(null);
  };

  const handleRemoveItem = (item: SortItem, category: string) => {
    if (showResult) return;

    setSortedItems(prev => ({
      ...prev,
      [category]: prev[category].filter(i => i.id !== item.id),
    }));
    setUnsortedItems(prev => [...prev, item]);
  };

  const checkAnswers = () => {
    let correct = 0;
    Object.entries(sortedItems).forEach(([category, items]) => {
      items.forEach(item => {
        if (item.category === category) {
          correct++;
        }
      });
    });

    setCorrectCount(correct);
    const points = correct * 10;
    setScore(s => s + points);
    if (points > 0) addXP(points);
    setShowResult(true);
  };

  const nextChallenge = () => {
    if (challengeIndex < totalChallenges - 1) {
      setChallengeIndex(prev => prev + 1);
    } else {
      setGameComplete(true);
    }
  };

  const resetGame = () => {
    setChallengeIndex(0);
    setScore(0);
    setGameComplete(false);
  };

  const allSorted = unsortedItems.length === 0;

  // Complete screen
  if (gameComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-teal-900 via-cyan-900 to-blue-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md text-center border border-white/20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-xl"
          >
            <Trophy size={48} className="text-white" />
          </motion.div>

          <h1 className="text-3xl font-black text-white mb-2">
            SORTING MASTER!
          </h1>
          <p className="text-white/70 mb-6">
            All categories complete!
          </p>

          <div className="text-5xl font-black text-yellow-400 mb-2">{score}</div>
          <div className="text-white/60 mb-8">Total XP Earned</div>

          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={resetGame}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              PLAY AGAIN
            </motion.button>
            <button
              onClick={() => router.push('/')}
              className="w-full py-4 font-bold text-white/80 bg-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
            >
              <Home size={20} />
              HOME
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 via-cyan-900 to-blue-900">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-black/30">
        <button
          onClick={() => router.push('/')}
          className="p-2 text-white/60 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        <div className="text-center">
          <h1 className="font-bold text-white">Category Sort</h1>
          <p className="text-xs text-white/60">{challengeIndex + 1} of {totalChallenges}</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-500/20 rounded-xl">
          <Zap size={18} className="text-yellow-400" />
          <span className="font-bold text-yellow-400">{score}</span>
        </div>
      </header>

      <main className="p-4 pb-32">
        {/* Challenge info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/10 backdrop-blur rounded-2xl p-4 mb-4 border border-white/20"
        >
          <div className="flex items-center gap-2 mb-2">
            <Layers size={20} className="text-teal-400" />
            <span className="text-sm px-2 py-1 bg-teal-500/30 text-teal-300 rounded-full">
              {challenge.subject}
            </span>
          </div>
          <h2 className="text-xl font-bold text-white">{challenge.title}</h2>
          <p className="text-sm text-white/60 mt-1">
            Tap an item, then tap a category to sort it
          </p>
        </motion.div>

        {/* Unsorted items */}
        {!showResult && unsortedItems.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-white/60 mb-2">Items to sort:</p>
            <div className="flex flex-wrap gap-2">
              {unsortedItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedItem?.id === item.id
                      ? 'bg-yellow-400 text-yellow-900 scale-105'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
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
                  className={`w-full p-4 rounded-2xl border-2 border-dashed transition-all text-left ${
                    showResult
                      ? isCorrectCategory
                        ? 'bg-green-500/20 border-green-400'
                        : 'bg-red-500/20 border-red-400'
                      : selectedItem
                      ? 'bg-white/10 border-yellow-400 hover:bg-white/20'
                      : 'bg-white/5 border-white/30'
                  }`}
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
                          className={`px-3 py-1 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                            showResult
                              ? isCorrect
                                ? 'bg-green-500 text-white'
                                : 'bg-red-500 text-white'
                              : 'bg-white/30 text-white hover:bg-white/40'
                          }`}
                        >
                          {item.text}
                          {showResult && !isCorrect && (
                            <span className="ml-1 text-xs">→ {item.category}</span>
                          )}
                        </motion.span>
                      );
                    })}
                    {items.length === 0 && (
                      <span className="text-white/30 text-sm">Drop items here</span>
                    )}
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Action button */}
        {!showResult ? (
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={checkAnswers}
            disabled={!allSorted}
            className="w-full mt-6 py-4 font-bold text-white bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {allSorted ? 'Check Answers' : `Sort all items (${unsortedItems.length} left)`}
          </motion.button>
        ) : (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-6"
          >
            <div className={`p-4 rounded-xl mb-4 ${
              correctCount === challenge.items.length ? 'bg-green-500/20' : 'bg-white/10'
            }`}>
              <p className="font-bold text-white text-center">
                {correctCount}/{challenge.items.length} correct = +{correctCount * 10} XP
              </p>
            </div>

            <button
              onClick={nextChallenge}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center gap-2"
            >
              {challengeIndex < totalChallenges - 1 ? (
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
      </main>
    </div>
  );
}
