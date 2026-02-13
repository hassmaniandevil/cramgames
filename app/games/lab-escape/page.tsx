'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useLoreStore } from '@/lib/stores/loreStore';
import { useUserStore, YearGroup } from '@/lib/stores/userStore';
import {
  X,
  Zap,
  Trophy,
  RotateCcw,
  Home,
  Lock,
  Key,
  DoorOpen,
  Lightbulb,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

interface Puzzle {
  id: number;
  roomName: string;
  roomEmoji: string;
  riddle: string;
  hint: string;
  answer: string;
  options: string[];
  subject: string;
  explanation: string;
  difficulty: 'KS3' | 'GCSE' | 'A-Level';
}

// Helper function to get difficulty level from year group
function getDifficultyFromYearGroup(yearGroup: YearGroup): 'KS3' | 'GCSE' | 'A-Level' {
  if (yearGroup <= 9) return 'KS3';
  if (yearGroup <= 11) return 'GCSE';
  return 'A-Level';
}

// Helper function to get difficulty label for display
function getDifficultyLabel(difficulty: 'KS3' | 'GCSE' | 'A-Level'): string {
  switch (difficulty) {
    case 'KS3': return 'KS3 (Years 7-9)';
    case 'GCSE': return 'GCSE (Years 10-11)';
    case 'A-Level': return 'A-Level (Years 12-13)';
  }
}

const ALL_PUZZLES: Puzzle[] = [
  // KS3 Puzzles
  {
    id: 1,
    roomName: 'The Chemical Chamber',
    roomEmoji: '⚗️',
    riddle: 'I am element 79, treasured by all. What am I?',
    hint: 'Think precious metal...',
    answer: 'Gold (Au)',
    options: ['Silver (Ag)', 'Gold (Au)', 'Iron (Fe)', 'Copper (Cu)'],
    subject: 'Chemistry',
    explanation: 'Gold has atomic number 79 and symbol Au (from Latin "aurum").',
    difficulty: 'KS3',
  },
  {
    id: 2,
    roomName: 'The Biology Bay',
    roomEmoji: '🧬',
    riddle: 'The code to exit lies in a cell organelle. It turns food into energy, what is it?',
    hint: 'The powerhouse...',
    answer: 'Mitochondria',
    options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Ribosome'],
    subject: 'Biology',
    explanation: 'Mitochondria perform cellular respiration, converting glucose to ATP.',
    difficulty: 'KS3',
  },
  {
    id: 3,
    roomName: 'The Physics Vault',
    roomEmoji: '⚡',
    riddle: 'V = IR. If current is 2A and resistance is 5Ω, what voltage unlocks this door?',
    hint: 'Multiply them...',
    answer: '10V',
    options: ['7V', '10V', '2.5V', '3V'],
    subject: 'Physics',
    explanation: 'Using Ohm\'s Law: V = I × R = 2 × 5 = 10 volts.',
    difficulty: 'KS3',
  },
  {
    id: 4,
    roomName: 'The Maths Maze',
    roomEmoji: '🔢',
    riddle: 'A triangle\'s sides are 3, 4, and 5. What is the area?',
    hint: 'It\'s a right-angled triangle...',
    answer: '6',
    options: ['12', '6', '10', '7.5'],
    subject: 'Maths',
    explanation: 'For a right triangle: Area = ½ × base × height = ½ × 3 × 4 = 6.',
    difficulty: 'KS3',
  },
  {
    id: 5,
    roomName: 'The Periodic Prison',
    roomEmoji: '📊',
    riddle: 'I have 11 protons and react violently with water. What element am I?',
    hint: 'First of the alkali metals on row 3...',
    answer: 'Sodium',
    options: ['Potassium', 'Sodium', 'Lithium', 'Calcium'],
    subject: 'Chemistry',
    explanation: 'Sodium (Na) has atomic number 11 and is a highly reactive alkali metal.',
    difficulty: 'KS3',
  },
  {
    id: 6,
    roomName: 'The DNA Dungeon',
    roomEmoji: '🔬',
    riddle: 'The sequence reads ATCG. What base pairs with A?',
    hint: 'A-T, C-G...',
    answer: 'Thymine',
    options: ['Guanine', 'Cytosine', 'Thymine', 'Adenine'],
    subject: 'Biology',
    explanation: 'In DNA, Adenine always pairs with Thymine (A-T), and Cytosine with Guanine (C-G).',
    difficulty: 'KS3',
  },
  {
    id: 7,
    roomName: 'The Force Field',
    roomEmoji: '🚀',
    riddle: 'F = ma. A 10kg object accelerates at 3m/s². What force is needed to escape?',
    hint: 'Multiply mass by acceleration...',
    answer: '30N',
    options: ['13N', '30N', '3.3N', '7N'],
    subject: 'Physics',
    explanation: 'Using Newton\'s Second Law: F = m × a = 10 × 3 = 30 Newtons.',
    difficulty: 'KS3',
  },
  {
    id: 8,
    roomName: 'The Final Chamber',
    roomEmoji: '🏆',
    riddle: 'A circle has radius 7. What is its area? (Use π = 22/7)',
    hint: 'Area = πr²...',
    answer: '154',
    options: ['44', '154', '49', '308'],
    subject: 'Maths',
    explanation: 'Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154.',
    difficulty: 'KS3',
  },
  // GCSE Puzzles
  {
    id: 9,
    roomName: 'The Electrochemistry Lab',
    roomEmoji: '🔋',
    riddle: 'In electrolysis of copper sulfate, what forms at the cathode?',
    hint: 'Reduction happens at the cathode...',
    answer: 'Copper metal',
    options: ['Oxygen gas', 'Copper metal', 'Hydrogen gas', 'Sulfur'],
    subject: 'Chemistry',
    explanation: 'Cu²⁺ ions gain electrons at the cathode (reduction) to form copper metal.',
    difficulty: 'GCSE',
  },
  {
    id: 10,
    roomName: 'The Genetics Room',
    roomEmoji: '🧬',
    riddle: 'If a heterozygous tall pea plant (Tt) crosses with a short plant (tt), what fraction will be tall?',
    hint: 'Draw a Punnett square...',
    answer: '1/2',
    options: ['1/4', '1/2', '3/4', 'All'],
    subject: 'Biology',
    explanation: 'Tt × tt gives Tt, Tt, tt, tt. Half (2/4 = 1/2) are tall (Tt).',
    difficulty: 'GCSE',
  },
  {
    id: 11,
    roomName: 'The Wave Chamber',
    roomEmoji: '🌊',
    riddle: 'A wave has frequency 50Hz and wavelength 2m. What is its speed?',
    hint: 'v = fλ...',
    answer: '100 m/s',
    options: ['25 m/s', '52 m/s', '100 m/s', '48 m/s'],
    subject: 'Physics',
    explanation: 'Using v = fλ: v = 50 × 2 = 100 m/s.',
    difficulty: 'GCSE',
  },
  {
    id: 12,
    roomName: 'The Quadratic Vault',
    roomEmoji: '📐',
    riddle: 'Solve x² - 5x + 6 = 0. What are the solutions?',
    hint: 'Factorise: (x-?)(x-?) = 0...',
    answer: 'x = 2, x = 3',
    options: ['x = 1, x = 6', 'x = 2, x = 3', 'x = -2, x = -3', 'x = 5, x = 1'],
    subject: 'Maths',
    explanation: 'x² - 5x + 6 = (x-2)(x-3) = 0, so x = 2 or x = 3.',
    difficulty: 'GCSE',
  },
  {
    id: 13,
    roomName: 'The Acid-Base Lab',
    roomEmoji: '🧪',
    riddle: 'What is the pH of a solution with [H⁺] = 0.001 mol/dm³?',
    hint: 'pH = -log₁₀[H⁺]...',
    answer: '3',
    options: ['1', '3', '0.001', '7'],
    subject: 'Chemistry',
    explanation: 'pH = -log₁₀(0.001) = -log₁₀(10⁻³) = 3.',
    difficulty: 'GCSE',
  },
  {
    id: 14,
    roomName: 'The Heart Room',
    roomEmoji: '❤️',
    riddle: 'Which blood vessel carries deoxygenated blood FROM the heart to the lungs?',
    hint: 'It\'s an artery, but special...',
    answer: 'Pulmonary artery',
    options: ['Pulmonary vein', 'Pulmonary artery', 'Aorta', 'Vena cava'],
    subject: 'Biology',
    explanation: 'The pulmonary artery is unique - it carries deoxygenated blood from the right ventricle to the lungs.',
    difficulty: 'GCSE',
  },
  {
    id: 15,
    roomName: 'The Energy Vault',
    roomEmoji: '⚡',
    riddle: 'A 2kg object is lifted 5m. What gravitational potential energy does it gain? (g = 10 m/s²)',
    hint: 'GPE = mgh...',
    answer: '100 J',
    options: ['10 J', '50 J', '100 J', '17 J'],
    subject: 'Physics',
    explanation: 'GPE = mgh = 2 × 10 × 5 = 100 Joules.',
    difficulty: 'GCSE',
  },
  {
    id: 16,
    roomName: 'The Trigonometry Chamber',
    roomEmoji: '📏',
    riddle: 'In a right triangle, if sin(θ) = 0.6 and cos(θ) = 0.8, what is tan(θ)?',
    hint: 'tan = sin/cos...',
    answer: '0.75',
    options: ['1.4', '0.48', '0.75', '1.33'],
    subject: 'Maths',
    explanation: 'tan(θ) = sin(θ)/cos(θ) = 0.6/0.8 = 0.75.',
    difficulty: 'GCSE',
  },
  // A-Level Puzzles
  {
    id: 17,
    roomName: 'The Organic Lab',
    roomEmoji: '⚗️',
    riddle: 'What type of reaction mechanism does a tertiary halogenoalkane undergo with aqueous NaOH?',
    hint: 'Tertiary carbons favor elimination or one-step substitution...',
    answer: 'SN1',
    options: ['SN1', 'SN2', 'E1', 'E2'],
    subject: 'Chemistry',
    explanation: 'Tertiary halogenoalkanes undergo SN1 due to steric hindrance preventing SN2, and the stable tertiary carbocation intermediate.',
    difficulty: 'A-Level',
  },
  {
    id: 18,
    roomName: 'The Protein Chamber',
    roomEmoji: '🧬',
    riddle: 'What is the maximum number of ATP molecules produced from one glucose molecule via aerobic respiration?',
    hint: 'Glycolysis + Link + Krebs + ETC...',
    answer: '38',
    options: ['2', '36', '38', '4'],
    subject: 'Biology',
    explanation: 'Theoretical maximum: Glycolysis (2) + Link reaction (2) + Krebs (2) + Oxidative phosphorylation (32) = 38 ATP.',
    difficulty: 'A-Level',
  },
  {
    id: 19,
    roomName: 'The Quantum Vault',
    roomEmoji: '⚛️',
    riddle: 'A photon has wavelength 500nm. What is its energy? (h = 6.63×10⁻³⁴ Js, c = 3×10⁸ m/s)',
    hint: 'E = hf = hc/λ...',
    answer: '3.98×10⁻¹⁹ J',
    options: ['3.98×10⁻¹⁹ J', '1.33×10⁻²⁷ J', '9.95×10⁻²⁶ J', '3.98×10⁻²⁵ J'],
    subject: 'Physics',
    explanation: 'E = hc/λ = (6.63×10⁻³⁴ × 3×10⁸)/(500×10⁻⁹) = 3.98×10⁻¹⁹ J.',
    difficulty: 'A-Level',
  },
  {
    id: 20,
    roomName: 'The Calculus Chamber',
    roomEmoji: '∫',
    riddle: 'What is the integral of e^(2x) dx?',
    hint: 'Remember the chain rule in reverse...',
    answer: '(1/2)e^(2x) + C',
    options: ['e^(2x) + C', '2e^(2x) + C', '(1/2)e^(2x) + C', 'e^(x²) + C'],
    subject: 'Maths',
    explanation: '∫e^(2x)dx = (1/2)e^(2x) + C. Divide by the coefficient of x.',
    difficulty: 'A-Level',
  },
  {
    id: 21,
    roomName: 'The Equilibrium Lab',
    roomEmoji: '⚖️',
    riddle: 'For the reaction N₂ + 3H₂ ⇌ 2NH₃, what happens to yield when pressure increases?',
    hint: 'Le Chatelier\'s principle - count the moles...',
    answer: 'Increases',
    options: ['Increases', 'Decreases', 'No change', 'Oscillates'],
    subject: 'Chemistry',
    explanation: 'Higher pressure favors the side with fewer gas moles. 4 moles → 2 moles, so equilibrium shifts right, increasing NH₃ yield.',
    difficulty: 'A-Level',
  },
  {
    id: 22,
    roomName: 'The Evolution Room',
    roomEmoji: '🦎',
    riddle: 'Which type of selection results in two distinct phenotypes and a bimodal distribution?',
    hint: 'It\'s not stabilizing or directional...',
    answer: 'Disruptive selection',
    options: ['Stabilizing selection', 'Directional selection', 'Disruptive selection', 'Balancing selection'],
    subject: 'Biology',
    explanation: 'Disruptive selection favors extreme phenotypes over intermediate ones, creating a bimodal distribution.',
    difficulty: 'A-Level',
  },
  {
    id: 23,
    roomName: 'The Relativity Chamber',
    roomEmoji: '🌌',
    riddle: 'A particle travels at 0.8c. What is its Lorentz factor γ?',
    hint: 'γ = 1/√(1-v²/c²)...',
    answer: '5/3',
    options: ['1.25', '5/3', '0.6', '2'],
    subject: 'Physics',
    explanation: 'γ = 1/√(1-0.64) = 1/√0.36 = 1/0.6 = 5/3 ≈ 1.67.',
    difficulty: 'A-Level',
  },
  {
    id: 24,
    roomName: 'The Complex Plane',
    roomEmoji: '🔮',
    riddle: 'What is the modulus of the complex number 3 + 4i?',
    hint: '|z| = √(a² + b²)...',
    answer: '5',
    options: ['7', '5', '1', '√7'],
    subject: 'Maths',
    explanation: '|3 + 4i| = √(3² + 4²) = √(9 + 16) = √25 = 5.',
    difficulty: 'A-Level',
  },
];

// Filter puzzles by difficulty
function getPuzzlesForDifficulty(difficulty: 'KS3' | 'GCSE' | 'A-Level'): Puzzle[] {
  return ALL_PUZZLES.filter(p => p.difficulty === difficulty).slice(0, 8);
}

export default function LabEscapePage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const { unlockFragment } = useLoreStore();
  const { profile } = useUserStore();

  // Get difficulty based on user's year group
  const yearGroup = profile?.yearGroup ?? 10;
  const difficulty = getDifficultyFromYearGroup(yearGroup);
  const difficultyLabel = getDifficultyLabel(difficulty);
  const puzzles = getPuzzlesForDifficulty(difficulty);

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'escaped' | 'failed'>('ready');
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setGameState('failed');
          addXP(Math.floor(score / 2));
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, score, addXP]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startGame = () => {
    setGameState('playing');
    setCurrentPuzzle(0);
    setSelectedAnswer(null);
    setShowHint(false);
    setShowExplanation(false);
    setIsCorrect(null);
    setHintsUsed(0);
    setMistakes(0);
    setScore(0);
    setTimeLeft(300);
  };

  const handleAnswer = (answer: string) => {
    if (isCorrect !== null) return;

    setSelectedAnswer(answer);
    const puzzle = puzzles[currentPuzzle];
    const correct = answer === puzzle.answer;
    setIsCorrect(correct);

    if (correct) {
      const basePoints = 50;
      const hintPenalty = showHint ? 15 : 0;
      const timeBonus = Math.floor(timeLeft / 10);
      setScore(s => s + basePoints - hintPenalty + timeBonus);
    } else {
      setMistakes(m => m + 1);
    }

    setTimeout(() => {
      setShowExplanation(true);
    }, 500);
  };

  const nextRoom = () => {
    if (currentPuzzle < puzzles.length - 1) {
      setCurrentPuzzle(p => p + 1);
      setSelectedAnswer(null);
      setShowHint(false);
      setShowExplanation(false);
      setIsCorrect(null);
    } else {
      // Escaped!
      setGameState('escaped');
      addXP(score + 100);

      // Unlock lore
      unlockFragment({
        id: 'lab-escape-lore',
        subject: 'physics',
        title: 'The Escape Artist\'s Creed',
        content: 'In the CramGames universe, knowledge is the ultimate key. Every scientist who changed history did so by escaping conventional thinking. Einstein escaped Newton\'s absolute time. Darwin escaped fixed species. Curie escaped safe assumptions. To master the Lab Escape is to join their ranks - breaking free through the power of understanding.',
        rarity: 'rare',
        unlocked: true,
      });
    }
  };

  const puzzle = puzzles[currentPuzzle];

  // Ready screen
  if (gameState === 'ready') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-sm"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center shadow-2xl shadow-amber-500/50"
          >
            <Lock size={64} className="text-white" />
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2 drop-shadow-lg">
            LAB ESCAPE
          </h1>
          <p className="text-white/80 mb-4 text-lg">
            Solve science puzzles to escape the lab!
          </p>

          <div className="bg-gradient-to-r from-amber-500/20 to-red-500/20 rounded-xl px-4 py-2 mb-6 border border-amber-500/30">
            <div className="flex items-center justify-center gap-2">
              <Zap size={16} className="text-amber-400" />
              <span className="font-bold text-amber-400 text-sm">DIFFICULTY: {difficulty}</span>
            </div>
            <p className="text-white/60 text-xs text-center mt-1">{difficultyLabel}</p>
          </div>

          <div className="bg-white/10 rounded-xl p-4 mb-6 text-left space-y-2">
            <div className="flex items-center gap-2 text-amber-400">
              <AlertCircle size={18} />
              <span className="font-bold text-sm">MISSION BRIEFING</span>
            </div>
            <p className="text-white/70 text-sm">
              You're trapped in a science lab! Solve {puzzles.length} puzzles to unlock each room and escape.
            </p>
            <ul className="text-white/60 text-sm space-y-1 ml-4">
              <li>• 5 minute time limit</li>
              <li>• Use hints (costs points)</li>
              <li>• Wrong answers are explained</li>
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="w-full py-5 text-xl font-black text-white bg-gradient-to-r from-amber-500 to-red-600 rounded-2xl shadow-lg shadow-amber-500/50"
          >
            BEGIN ESCAPE
          </motion.button>

          <button
            onClick={() => router.push('/')}
            className="mt-6 text-white/60 hover:text-white transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  // Escaped screen
  if (gameState === 'escaped') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-green-900 to-emerald-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring' }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/50"
          >
            <DoorOpen size={48} className="text-white" />
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2">YOU ESCAPED!</h1>
          <p className="text-white/70 mb-6">All {puzzles.length} rooms completed!</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-black text-yellow-400">{score + 100}</div>
              <div className="text-xs text-white/60">XP</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-black text-green-400">{puzzles.length - mistakes}</div>
              <div className="text-xs text-white/60">PERFECT</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-3xl font-black text-amber-400">{formatTime(timeLeft)}</div>
              <div className="text-xs text-white/60">LEFT</div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={startGame}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              ESCAPE AGAIN
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

  // Failed screen
  if (gameState === 'failed') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-900 via-slate-900 to-red-900 flex flex-col items-center justify-center p-6">
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
            <Lock size={48} className="text-white" />
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2">TIME'S UP!</h1>
          <p className="text-white/70 mb-6">You reached room {currentPuzzle + 1} of {puzzles.length}</p>

          <div className="bg-white/10 rounded-xl p-4 mb-8">
            <div className="text-3xl font-black text-yellow-400">{Math.floor(score / 2)}</div>
            <div className="text-xs text-white/60">XP EARNED</div>
          </div>

          <div className="space-y-3">
            <button
              onClick={startGame}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              TRY AGAIN
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

  // Playing screen
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-black/30">
        <button
          onClick={() => router.push('/')}
          className="p-2 text-white/60 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className={`px-4 py-2 rounded-xl ${timeLeft < 60 ? 'bg-red-500/30' : 'bg-white/10'}`}>
          <span className={`font-mono font-bold ${timeLeft < 60 ? 'text-red-400' : 'text-white'}`}>
            {formatTime(timeLeft)}
          </span>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-xl">
          <Zap size={20} className="text-yellow-400" />
          <span className="font-bold text-yellow-400">{score}</span>
        </div>
      </header>

      {/* Progress */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-2 mb-2">
          {puzzles.map((_, i) => (
            <motion.div
              key={i}
              className={`flex-1 h-2 rounded-full ${
                i < currentPuzzle
                  ? 'bg-green-500'
                  : i === currentPuzzle
                  ? 'bg-amber-500'
                  : 'bg-white/20'
              }`}
              animate={i === currentPuzzle ? { opacity: [1, 0.5, 1] } : {}}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          ))}
        </div>
        <p className="text-center text-white/50 text-xs">Room {currentPuzzle + 1} of {puzzles.length}</p>
      </div>

      {/* Room */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        <motion.div
          key={currentPuzzle}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          {/* Room header */}
          <div className="text-center mb-6">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-6xl mb-3"
            >
              {puzzle.roomEmoji}
            </motion.div>
            <h2 className="text-2xl font-black text-white">{puzzle.roomName}</h2>
            <span className="text-sm text-white/60">{puzzle.subject}</span>
          </div>

          {/* Riddle */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4 border border-amber-500/30">
            <div className="flex items-start gap-3">
              <Lock className="text-amber-400 shrink-0 mt-1" size={24} />
              <p className="text-white text-lg leading-relaxed">{puzzle.riddle}</p>
            </div>
          </div>

          {/* Hint */}
          {!showHint && isCorrect === null && (
            <button
              onClick={() => {
                setShowHint(true);
                setHintsUsed(h => h + 1);
              }}
              className="w-full mb-4 py-2 text-amber-400 text-sm flex items-center justify-center gap-2 hover:text-amber-300"
            >
              <Lightbulb size={16} />
              Show hint (-15 points)
            </button>
          )}

          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 p-3 bg-amber-500/20 rounded-xl border border-amber-500/30"
              >
                <p className="text-amber-300 text-sm flex items-center gap-2">
                  <Lightbulb size={16} />
                  {puzzle.hint}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Options */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {puzzle.options.map((option, i) => {
              let buttonClass = 'bg-white/10 border-white/20 hover:bg-white/15';
              if (isCorrect !== null) {
                if (option === puzzle.answer) {
                  buttonClass = 'bg-green-500/30 border-green-500';
                } else if (option === selectedAnswer && option !== puzzle.answer) {
                  buttonClass = 'bg-red-500/30 border-red-500';
                }
              }

              return (
                <motion.button
                  key={option}
                  whileHover={isCorrect === null ? { scale: 1.02 } : {}}
                  whileTap={isCorrect === null ? { scale: 0.98 } : {}}
                  onClick={() => handleAnswer(option)}
                  disabled={isCorrect !== null}
                  className={`p-4 rounded-xl border-2 text-white font-semibold transition-all ${buttonClass}`}
                >
                  {option}
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl mb-4 ${isCorrect ? 'bg-green-500/20 border border-green-500/30' : 'bg-blue-500/20 border border-blue-500/30'}`}
              >
                <p className={`text-sm ${isCorrect ? 'text-green-300' : 'text-blue-300'}`}>
                  {puzzle.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next button */}
          {showExplanation && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={nextRoom}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center gap-2"
            >
              {currentPuzzle < puzzles.length - 1 ? (
                <>
                  Next Room
                  <ArrowRight size={20} />
                </>
              ) : (
                <>
                  <Key size={20} />
                  ESCAPE!
                </>
              )}
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
