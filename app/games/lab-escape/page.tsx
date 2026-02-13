'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  Lightbulb,
  ArrowRight,
  Key,
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
import { useUserStore, YearGroup } from '@/lib/stores/userStore';
import { useLoreStore } from '@/lib/stores/loreStore';

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

const GAME_TIME = 300; // 5 minutes

export default function LabEscapePage() {
  const { profile } = useUserStore();
  const { unlockFragment } = useLoreStore();

  // Get difficulty based on user's year group
  const yearGroup = profile?.yearGroup ?? 10;
  const difficulty = getDifficultyFromYearGroup(yearGroup);
  const puzzles = useMemo(() => getPuzzlesForDifficulty(difficulty), [difficulty]);

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
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hintsUsed, setHintsUsed] = useState(0);

  const puzzle = puzzles[currentPuzzle];

  // Handle game start
  const handleStart = useCallback(() => {
    setCurrentPuzzle(0);
    setSelectedAnswer(null);
    setShowHint(false);
    setShowExplanation(false);
    setIsCorrect(null);
    setHintsUsed(0);
    startGame();
    timer.reset(GAME_TIME);
    timer.start();
    scoring.reset();
  }, [startGame, timer, scoring]);

  // Handle restart
  const handleRestart = useCallback(() => {
    resetGame();
    setTimeout(handleStart, 100);
  }, [resetGame, handleStart]);

  // Handle answer selection
  const handleAnswer = useCallback((answer: string) => {
    if (isCorrect !== null) return;

    setSelectedAnswer(answer);
    const correct = answer === puzzle.answer;
    setIsCorrect(correct);

    if (correct) {
      // Calculate time bonus based on remaining time
      const timeBonus = Math.floor(timer.time / 10);
      const hintPenalty = showHint ? 15 : 0;
      scoring.recordCorrect(timeBonus - hintPenalty);
      audio.playCorrect(scoring.combo);
      emitCorrect();
    } else {
      scoring.recordWrong();
      audio.playWrong();
      shake(ShakePresets.wrong);
      emitWrong();
    }

    setTimeout(() => {
      setShowExplanation(true);
    }, 500);
  }, [isCorrect, puzzle, timer.time, showHint, scoring, audio, emitCorrect, emitWrong, shake]);

  // Move to next room
  const nextRoom = useCallback(() => {
    if (currentPuzzle < puzzles.length - 1) {
      setCurrentPuzzle(p => p + 1);
      setSelectedAnswer(null);
      setShowHint(false);
      setShowExplanation(false);
      setIsCorrect(null);
    } else {
      // Escaped!
      timer.pause();
      finishGame();

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
  }, [currentPuzzle, puzzles.length, timer, finishGame, unlockFragment]);

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
        title="Lab Escape"
        subtitle="Solve science puzzles to escape the lab!"
        icon={<Lock size={40} className="text-amber-400" />}
        color="amber"
        gameState={gameState}
        onStart={handleStart}
        onRestart={handleRestart}
        time={timer.time}
        totalTime={GAME_TIME}
        score={scoring.score}
        combo={scoring.combo}
        stats={stats}
        zoneId="lab-escape"
      >
        <div style={shakeStyle} className="h-full flex flex-col items-center justify-center">
          {/* Progress */}
          <div className="w-full max-w-md mb-4">
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
            <p className="text-center text-gray-500 text-xs">Room {currentPuzzle + 1} of {puzzles.length}</p>
          </div>

          {/* Room content */}
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
              <span className="text-sm text-gray-400">{puzzle.subject}</span>
            </div>

            {/* Riddle */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4 border border-amber-500/30">
              <div className="flex items-start gap-3">
                <Lock className="text-amber-400 shrink-0 mt-1" size={24} />
                <p className="text-white text-lg leading-relaxed">{puzzle.riddle}</p>
              </div>
            </div>

            {/* Hint button */}
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

            {/* Hint display */}
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
              {puzzle.options.map((option) => {
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
      </GameFrame>
    </>
  );
}
