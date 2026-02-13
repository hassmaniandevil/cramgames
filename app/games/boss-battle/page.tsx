'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useLoreStore } from '@/lib/stores/loreStore';
import {
  X,
  Zap,
  Trophy,
  RotateCcw,
  Home,
  Swords,
  Shield,
  Sword,
  Heart,
  Sparkles,
} from 'lucide-react';

interface BossQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  damage: number;
}

interface Boss {
  name: string;
  title: string;
  maxHp: number;
  emoji: string;
  color: string;
  questions: BossQuestion[];
  loreReward: {
    id: string;
    subject: string;
    title: string;
    content: string;
    rarity: 'common' | 'rare' | 'legendary';
  };
}

const BOSSES: Boss[] = [
  {
    name: 'PROFESSOR PROTON',
    title: 'Guardian of the Atom',
    maxHp: 100,
    emoji: '⚛️',
    color: 'from-blue-500 to-cyan-500',
    questions: [
      { question: 'What particle has a positive charge?', options: ['Electron', 'Proton', 'Neutron', 'Photon'], correctIndex: 1, damage: 25 },
      { question: 'What is the atomic number of Carbon?', options: ['12', '6', '8', '14'], correctIndex: 1, damage: 25 },
      { question: 'Where are electrons found?', options: ['Nucleus', 'Shells/Orbitals', 'Protons', 'Neutrons'], correctIndex: 1, damage: 25 },
      { question: 'What holds the nucleus together?', options: ['Gravity', 'Electromagnetic force', 'Strong nuclear force', 'Weak force'], correctIndex: 2, damage: 25 },
    ],
    loreReward: {
      id: 'boss-proton',
      subject: 'physics',
      title: 'The Proton\'s Secret',
      content: 'Protons are not fundamental particles - they\'re made of three quarks held together by gluons. The mass of these quarks accounts for only 1% of the proton\'s mass. The other 99% comes from the energy of the gluon field, proving Einstein\'s E=mc² in the most intimate way.',
      rarity: 'legendary',
    },
  },
  {
    name: 'DR. HELIX',
    title: 'Master of DNA',
    maxHp: 100,
    emoji: '🧬',
    color: 'from-green-500 to-emerald-500',
    questions: [
      { question: 'What sugar is found in DNA?', options: ['Glucose', 'Ribose', 'Deoxyribose', 'Fructose'], correctIndex: 2, damage: 25 },
      { question: 'Which base pairs with Adenine?', options: ['Guanine', 'Cytosine', 'Thymine', 'Uracil'], correctIndex: 2, damage: 25 },
      { question: 'What is the shape of DNA?', options: ['Single helix', 'Double helix', 'Triple helix', 'Linear'], correctIndex: 1, damage: 25 },
      { question: 'What enzyme copies DNA?', options: ['Ligase', 'Helicase', 'Polymerase', 'Amylase'], correctIndex: 2, damage: 25 },
    ],
    loreReward: {
      id: 'boss-helix',
      subject: 'biology',
      title: 'The Code of Life',
      content: 'Your DNA contains about 3 billion base pairs, yet only 2% codes for proteins. The rest was called "junk DNA" but we now know it contains crucial regulatory sequences. If you read aloud one DNA base per second, it would take 95 years to read your entire genome.',
      rarity: 'legendary',
    },
  },
  {
    name: 'BARON VON BEAKER',
    title: 'Alchemist Supreme',
    maxHp: 100,
    emoji: '⚗️',
    color: 'from-amber-500 to-orange-500',
    questions: [
      { question: 'What is the pH of a neutral solution?', options: ['0', '7', '14', '1'], correctIndex: 1, damage: 25 },
      { question: 'What happens during oxidation?', options: ['Gain electrons', 'Lose electrons', 'Gain protons', 'Lose protons'], correctIndex: 1, damage: 25 },
      { question: 'What is a catalyst?', options: ['Speeds up reaction', 'Slows reaction', 'Adds heat', 'Removes products'], correctIndex: 0, damage: 25 },
      { question: 'Which is an alkali metal?', options: ['Calcium', 'Iron', 'Sodium', 'Copper'], correctIndex: 2, damage: 25 },
    ],
    loreReward: {
      id: 'boss-beaker',
      subject: 'chemistry',
      title: 'The Philosopher\'s Burden',
      content: 'Hennig Brand discovered phosphorus in 1669 by boiling 1,500 gallons of urine, hoping to create gold. Instead, he found a glowing substance that ignited spontaneously. He called it "cold fire." This accidental discovery led to matches, fertilizers, and eventually... explosives.',
      rarity: 'legendary',
    },
  },
  {
    name: 'COUNTESS CALCULUS',
    title: 'Queen of Numbers',
    maxHp: 100,
    emoji: '👑',
    color: 'from-violet-500 to-purple-500',
    questions: [
      { question: 'What is 15% of 80?', options: ['8', '12', '15', '20'], correctIndex: 1, damage: 25 },
      { question: 'Solve: 3x + 7 = 22', options: ['x = 3', 'x = 5', 'x = 7', 'x = 15'], correctIndex: 1, damage: 25 },
      { question: 'What is √169?', options: ['11', '12', '13', '14'], correctIndex: 2, damage: 25 },
      { question: 'What is the area of a circle with radius 5?', options: ['25π', '10π', '5π', '50π'], correctIndex: 0, damage: 25 },
    ],
    loreReward: {
      id: 'boss-calculus',
      subject: 'maths',
      title: 'The Infinity Paradox',
      content: 'Georg Cantor proved that some infinities are bigger than others. The infinity of real numbers is larger than the infinity of integers, even though both are infinite. His work was so revolutionary that it drove him to a mental breakdown, but it laid the foundation for modern mathematics.',
      rarity: 'legendary',
    },
  },
];

export default function BossBattlePage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const { unlockFragment } = useLoreStore();

  const [gameState, setGameState] = useState<'select' | 'battle' | 'victory' | 'defeat'>('select');
  const [currentBoss, setCurrentBoss] = useState<Boss | null>(null);
  const [bossHp, setBossHp] = useState(100);
  const [playerHp, setPlayerHp] = useState(100);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [combo, setCombo] = useState(0);
  const [score, setScore] = useState(0);
  const [shakeScreen, setShakeScreen] = useState(false);
  const [defeatedBosses, setDefeatedBosses] = useState<string[]>([]);

  const startBattle = (boss: Boss) => {
    setCurrentBoss(boss);
    setBossHp(boss.maxHp);
    setPlayerHp(100);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setCombo(0);
    setScore(0);
    setGameState('battle');
  };

  const handleAnswer = (index: number) => {
    if (showResult || !currentBoss) return;

    setSelectedAnswer(index);
    const question = currentBoss.questions[questionIndex];
    const correct = index === question.correctIndex;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      // Damage boss
      const damage = question.damage + combo * 5;
      setBossHp(prev => Math.max(0, prev - damage));
      setCombo(c => c + 1);
      setScore(s => s + 50 + combo * 10);
    } else {
      // Boss damages player
      setPlayerHp(prev => Math.max(0, prev - 25));
      setCombo(0);
      setShakeScreen(true);
      setTimeout(() => setShakeScreen(false), 500);
    }

    setTimeout(() => {
      if (correct && bossHp - (question.damage + combo * 5) <= 0) {
        // Victory!
        setGameState('victory');
        addXP(score + 200);
        unlockFragment({
          ...currentBoss.loreReward,
          unlocked: true,
        });
        setDefeatedBosses(prev => [...prev, currentBoss.name]);
      } else if (!correct && playerHp - 25 <= 0) {
        // Defeat
        setGameState('defeat');
        addXP(Math.floor(score / 2));
      } else if (questionIndex < currentBoss.questions.length - 1) {
        // Next question
        setQuestionIndex(i => i + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // All questions done but boss not dead - boss wins
        if (bossHp > 0) {
          setGameState('defeat');
          addXP(Math.floor(score / 2));
        }
      }
    }, 1500);
  };

  // Boss selection
  if (gameState === 'select') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 p-6">
        <button
          onClick={() => router.push('/')}
          className="absolute top-4 left-4 p-2 text-white/60 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="max-w-md mx-auto pt-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center shadow-lg shadow-red-500/50">
              <Swords size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-black text-white mb-2">BOSS BATTLE</h1>
            <p className="text-white/60">Defeat bosses to unlock legendary lore!</p>
          </motion.div>

          <div className="space-y-4">
            {BOSSES.map((boss, i) => {
              const isDefeated = defeatedBosses.includes(boss.name);
              return (
                <motion.button
                  key={boss.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => startBattle(boss)}
                  className={`w-full p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-left transition-all hover:scale-[1.02] hover:bg-white/15 ${isDefeated ? 'opacity-60' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${boss.color} flex items-center justify-center text-3xl shadow-lg`}>
                      {boss.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-white">{boss.name}</h3>
                        {isDefeated && <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">DEFEATED</span>}
                      </div>
                      <p className="text-sm text-white/60">{boss.title}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Heart size={14} className="text-red-400" />
                        <span className="text-xs text-white/60">{boss.maxHp} HP</span>
                        <Sparkles size={14} className="text-amber-400 ml-2" />
                        <span className="text-xs text-amber-400">Legendary Lore</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Battle screen
  if (gameState === 'battle' && currentBoss) {
    const question = currentBoss.questions[questionIndex];

    return (
      <motion.div
        className={`min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex flex-col ${shakeScreen ? 'animate-shake' : ''}`}
        animate={shakeScreen ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <header className="p-4 flex items-center justify-between">
          <button onClick={() => router.push('/')} className="p-2 text-white/60">
            <X size={24} />
          </button>
          <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-xl">
            <Zap size={20} className="text-yellow-400" />
            <span className="font-bold text-yellow-400">{score}</span>
          </div>
        </header>

        {/* Boss area */}
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          {/* Boss */}
          <motion.div
            animate={isCorrect && showResult ? { scale: [1, 0.8, 1], x: [-20, 20, -20, 0] } : {}}
            className="text-center mb-6"
          >
            <motion.div
              className={`w-32 h-32 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${currentBoss.color} flex items-center justify-center text-6xl shadow-2xl`}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              {currentBoss.emoji}
            </motion.div>
            <h2 className="text-xl font-black text-white">{currentBoss.name}</h2>
            <p className="text-sm text-white/60">{currentBoss.title}</p>

            {/* Boss HP */}
            <div className="mt-3 w-48 mx-auto">
              <div className="flex justify-between text-xs text-white/60 mb-1">
                <span>HP</span>
                <span>{bossHp}/{currentBoss.maxHp}</span>
              </div>
              <div className="h-4 bg-black/50 rounded-full overflow-hidden border border-red-500/50">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-red-600"
                  animate={{ width: `${(bossHp / currentBoss.maxHp) * 100}%` }}
                />
              </div>
            </div>
          </motion.div>

          {/* Combo indicator */}
          {combo > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mb-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            >
              <span className="font-black text-white">🔥 {combo}x COMBO!</span>
            </motion.div>
          )}

          {/* Question */}
          <motion.div
            key={questionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
          >
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4 border border-white/20">
              <p className="text-lg font-bold text-white text-center">{question.question}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {question.options.map((option, i) => {
                let buttonClass = 'bg-white/10 border-white/20 hover:bg-white/20';
                if (showResult) {
                  if (i === question.correctIndex) {
                    buttonClass = 'bg-green-500/30 border-green-500';
                  } else if (i === selectedAnswer && i !== question.correctIndex) {
                    buttonClass = 'bg-red-500/30 border-red-500';
                  }
                }

                return (
                  <motion.button
                    key={i}
                    whileHover={!showResult ? { scale: 1.02 } : {}}
                    whileTap={!showResult ? { scale: 0.98 } : {}}
                    onClick={() => handleAnswer(i)}
                    disabled={showResult}
                    className={`p-4 rounded-xl border-2 text-white font-semibold transition-all ${buttonClass}`}
                  >
                    {option}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Player HP */}
          <div className="mt-6 w-full max-w-md">
            <div className="flex items-center gap-2 mb-1">
              <Shield size={16} className="text-blue-400" />
              <span className="text-xs text-white/60">Your HP</span>
              <span className="text-xs text-white/60 ml-auto">{playerHp}/100</span>
            </div>
            <div className="h-3 bg-black/50 rounded-full overflow-hidden border border-blue-500/50">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                animate={{ width: `${playerHp}%` }}
              />
            </div>
          </div>

          {/* Result feedback */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-black pointer-events-none ${isCorrect ? 'text-green-400' : 'text-red-400'}`}
              >
                {isCorrect ? (
                  <div className="flex items-center gap-2">
                    <Sword className="animate-pulse" />
                    -{question.damage + combo * 5}
                  </div>
                ) : (
                  'MISS!'
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress */}
        <div className="p-4 text-center">
          <span className="text-white/50 text-sm">Question {questionIndex + 1} of {currentBoss.questions.length}</span>
        </div>
      </motion.div>
    );
  }

  // Victory screen
  if (gameState === 'victory' && currentBoss) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring' }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-2xl shadow-yellow-500/50"
          >
            <Trophy size={48} className="text-white" />
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2">VICTORY!</h1>
          <p className="text-white/60 mb-6">You defeated {currentBoss.name}!</p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-amber-500/20 rounded-2xl p-4 mb-6 border border-amber-500/50"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="text-amber-400" />
              <span className="font-bold text-amber-400">LEGENDARY LORE UNLOCKED!</span>
            </div>
            <p className="text-sm text-white/80">{currentBoss.loreReward.title}</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-black text-yellow-400">{score + 200}</div>
              <div className="text-xs text-white/60">XP EARNED</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-black text-orange-400">{combo}</div>
              <div className="text-xs text-white/60">MAX COMBO</div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setGameState('select')}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              FIGHT ANOTHER BOSS
            </button>
            <button
              onClick={() => router.push('/codex')}
              className="w-full py-4 font-bold text-amber-400 bg-amber-500/20 rounded-xl flex items-center justify-center gap-2"
            >
              <Sparkles size={20} />
              VIEW LORE
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full py-4 font-bold text-white/80 bg-white/10 rounded-xl flex items-center justify-center gap-2"
            >
              <Home size={20} />
              HOME
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Defeat screen
  if (gameState === 'defeat' && currentBoss) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-red-900/50 to-slate-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-2xl"
          >
            <Swords size={48} className="text-white" />
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2">DEFEATED</h1>
          <p className="text-white/60 mb-6">{currentBoss.name} was too strong...</p>

          <div className="bg-white/10 rounded-xl p-4 mb-8">
            <div className="text-3xl font-black text-yellow-400">{Math.floor(score / 2)}</div>
            <div className="text-xs text-white/60">XP EARNED</div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => startBattle(currentBoss)}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              TRY AGAIN
            </button>
            <button
              onClick={() => setGameState('select')}
              className="w-full py-4 font-bold text-white/80 bg-white/10 rounded-xl flex items-center justify-center gap-2"
            >
              <Sword size={20} />
              CHOOSE DIFFERENT BOSS
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full py-4 font-bold text-white/60 bg-white/5 rounded-xl flex items-center justify-center gap-2"
            >
              <Home size={20} />
              HOME
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
