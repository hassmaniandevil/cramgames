'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Heart, AlertTriangle } from 'lucide-react';
import {
  GameFrame,
  useGameState,
  useGameScore,
  useGameAudio,
  useScreenShake,
  ShakePresets,
  useParticles,
  ParticleEffect,
} from '@/components/game';
import { useUserStore } from '@/lib/stores/userStore';

interface FallingAnswer {
  id: number;
  text: string;
  isCorrect: boolean;
  x: number;
  y: number;
  speed: number;
}

interface Question {
  question: string;
  correctAnswer: string;
  wrongAnswers: string[];
  difficulty: 'KS3' | 'GCSE' | 'A-Level';
}

const QUESTIONS: Question[] = [
  // KS3 Questions
  { question: '8 × 7 = ?', correctAnswer: '56', wrongAnswers: ['54', '48', '63'], difficulty: 'KS3' },
  { question: 'What gas do we breathe out?', correctAnswer: 'CO₂', wrongAnswers: ['O₂', 'N₂', 'H₂'], difficulty: 'KS3' },
  { question: 'Angles in a triangle sum to?', correctAnswer: '180°', wrongAnswers: ['360°', '90°', '270°'], difficulty: 'KS3' },
  { question: 'What is the largest planet?', correctAnswer: 'Jupiter', wrongAnswers: ['Saturn', 'Neptune', 'Mars'], difficulty: 'KS3' },
  { question: '12 × 12 = ?', correctAnswer: '144', wrongAnswers: ['124', '132', '156'], difficulty: 'KS3' },
  { question: 'How many sides does a hexagon have?', correctAnswer: '6', wrongAnswers: ['5', '7', '8'], difficulty: 'KS3' },
  { question: 'What is 50% of 80?', correctAnswer: '40', wrongAnswers: ['30', '50', '45'], difficulty: 'KS3' },
  { question: 'Which organ pumps blood?', correctAnswer: 'Heart', wrongAnswers: ['Lungs', 'Liver', 'Brain'], difficulty: 'KS3' },

  // GCSE Questions
  { question: 'Chemical symbol for Gold?', correctAnswer: 'Au', wrongAnswers: ['Ag', 'Go', 'Gd'], difficulty: 'GCSE' },
  { question: 'Powerhouse of the cell?', correctAnswer: 'Mitochondria', wrongAnswers: ['Nucleus', 'Ribosome', 'Chloroplast'], difficulty: 'GCSE' },
  { question: 'Unit of electrical resistance?', correctAnswer: 'Ohm', wrongAnswers: ['Volt', 'Amp', 'Watt'], difficulty: 'GCSE' },
  { question: 'Solve: 5x = 35', correctAnswer: 'x = 7', wrongAnswers: ['x = 5', 'x = 8', 'x = 6'], difficulty: 'GCSE' },
  { question: 'Atomic number of Oxygen?', correctAnswer: '8', wrongAnswers: ['6', '16', '12'], difficulty: 'GCSE' },
  { question: 'What process releases energy from glucose?', correctAnswer: 'Respiration', wrongAnswers: ['Photosynthesis', 'Digestion', 'Osmosis'], difficulty: 'GCSE' },
  { question: 'Speed = Distance ÷ ?', correctAnswer: 'Time', wrongAnswers: ['Mass', 'Force', 'Velocity'], difficulty: 'GCSE' },
  { question: 'What type of bond shares electrons?', correctAnswer: 'Covalent', wrongAnswers: ['Ionic', 'Metallic', 'Hydrogen'], difficulty: 'GCSE' },
  { question: '√225 = ?', correctAnswer: '15', wrongAnswers: ['14', '16', '13'], difficulty: 'GCSE' },
  { question: 'Where is DNA found?', correctAnswer: 'Nucleus', wrongAnswers: ['Cytoplasm', 'Ribosome', 'Cell membrane'], difficulty: 'GCSE' },
  { question: 'F = m × ?', correctAnswer: 'a', wrongAnswers: ['v', 'g', 's'], difficulty: 'GCSE' },
  { question: 'What is H₂SO₄?', correctAnswer: 'Sulphuric acid', wrongAnswers: ['Hydrochloric acid', 'Nitric acid', 'Carbonic acid'], difficulty: 'GCSE' },

  // A-Level Questions
  { question: 'Derivative of sin(x)?', correctAnswer: 'cos(x)', wrongAnswers: ['-cos(x)', 'tan(x)', '-sin(x)'], difficulty: 'A-Level' },
  { question: "What is Avogadro's number?", correctAnswer: '6.02 × 10²³', wrongAnswers: ['3.14 × 10²³', '9.81 × 10²³', '1.38 × 10²³'], difficulty: 'A-Level' },
  { question: 'What is the integral of 1/x?', correctAnswer: 'ln|x| + C', wrongAnswers: ['x⁻¹ + C', 'eˣ + C', '1/x² + C'], difficulty: 'A-Level' },
  { question: 'Which particle has no charge?', correctAnswer: 'Neutron', wrongAnswers: ['Proton', 'Electron', 'Positron'], difficulty: 'A-Level' },
  { question: "What is the units of Planck's constant?", correctAnswer: 'J·s', wrongAnswers: ['J/s', 'N·m', 'W·s'], difficulty: 'A-Level' },
  { question: 'What is ATP used for?', correctAnswer: 'Energy transfer', wrongAnswers: ['Protein synthesis', 'Cell division', 'DNA replication'], difficulty: 'A-Level' },
  { question: 'E = mc² - what is c?', correctAnswer: 'Speed of light', wrongAnswers: ['Coulomb constant', 'Specific heat', 'Concentration'], difficulty: 'A-Level' },
  { question: 'Oxidation state of Fe in Fe₂O₃?', correctAnswer: '+3', wrongAnswers: ['+2', '+6', '+1'], difficulty: 'A-Level' },
];

// Map year group to starting difficulty
function getStartingDifficulty(yearGroup: number): 'KS3' | 'GCSE' | 'A-Level' {
  if (yearGroup <= 9) return 'KS3';
  if (yearGroup <= 11) return 'GCSE';
  return 'A-Level';
}

// Get questions filtered by difficulty (includes easier levels too)
function getQuestionsForDifficulty(difficulty: 'KS3' | 'GCSE' | 'A-Level'): Question[] {
  if (difficulty === 'KS3') {
    return QUESTIONS.filter(q => q.difficulty === 'KS3');
  }
  if (difficulty === 'GCSE') {
    return QUESTIONS.filter(q => q.difficulty === 'KS3' || q.difficulty === 'GCSE');
  }
  // A-Level gets all questions
  return QUESTIONS;
}

export default function SpeedBlitzPage() {
  const { profile } = useUserStore();
  const yearGroup = profile?.yearGroup || 10;
  const difficulty = getStartingDifficulty(yearGroup);
  const filteredQuestions = getQuestionsForDifficulty(difficulty);

  // Game framework hooks
  const { gameState, isPlaying, startGame: startGameState, finishGame, resetGame } = useGameState();
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
  const { shake, shakeStyle } = useScreenShake();
  const { trigger: particleTrigger, config: particleConfig, emitCorrect, emitWrong } = useParticles();

  // Game-specific state
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [lives, setLives] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [fallingAnswers, setFallingAnswers] = useState<FallingAnswer[]>([]);
  const [showFeedback, setShowFeedback] = useState<{ correct: boolean; x: number; y: number; points: number } | null>(null);
  const [gameSpeed, setGameSpeed] = useState(1);

  const spawnAnswers = useCallback(() => {
    if (!currentQuestion || !gameAreaRef.current) return;

    const area = gameAreaRef.current.getBoundingClientRect();
    const answers = [currentQuestion.correctAnswer, ...currentQuestion.wrongAnswers.slice(0, 2)];
    const shuffled = answers.sort(() => Math.random() - 0.5);

    const newAnswers: FallingAnswer[] = shuffled.map((text, i) => ({
      id: Date.now() + i,
      text,
      isCorrect: text === currentQuestion.correctAnswer,
      x: (area.width / 4) + (i * area.width / 4) - 50 + (Math.random() * 30 - 15),
      y: -60 - (i * 80),
      speed: 1.5 + Math.random() * 0.5,
    }));

    setFallingAnswers(newAnswers);
  }, [currentQuestion]);

  const nextQuestion = useCallback(() => {
    const nextIdx = questionIndex % filteredQuestions.length;
    setCurrentQuestion(filteredQuestions[nextIdx]);
    setQuestionIndex(i => i + 1);
    setTimeout(() => spawnAnswers(), 100);
  }, [questionIndex, spawnAnswers, filteredQuestions]);

  const handleStart = () => {
    startGameState();
    setLives(3);
    setQuestionIndex(0);
    setGameSpeed(1);
    setFallingAnswers([]);
    resetScore();
    setTimeout(() => {
      const question = filteredQuestions[0];
      setCurrentQuestion(question);
      setQuestionIndex(1);
    }, 500);
  };

  const handleRestart = () => {
    resetGame();
    setTimeout(() => handleStart(), 100);
  };

  // Spawn answers when question changes
  useEffect(() => {
    if (currentQuestion && isPlaying) {
      spawnAnswers();
    }
  }, [currentQuestion, isPlaying, spawnAnswers]);

  // Game loop - animate falling answers
  useEffect(() => {
    if (!isPlaying) return;

    const animate = () => {
      setFallingAnswers(prev => {
        const gameArea = gameAreaRef.current;
        if (!gameArea) return prev;

        const areaHeight = gameArea.getBoundingClientRect().height;
        let missedCorrect = false;

        const updated = prev.map(answer => ({
          ...answer,
          y: answer.y + answer.speed * gameSpeed * 2,
        })).filter(answer => {
          if (answer.y > areaHeight) {
            if (answer.isCorrect) {
              missedCorrect = true;
            }
            return false;
          }
          return true;
        });

        if (missedCorrect) {
          setLives(l => l - 1);
          recordWrong();
          playWrong();
          shake(ShakePresets.wrong);
          setFallingAnswers([]);
          setTimeout(() => nextQuestion(), 500);
        }

        return updated;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, gameSpeed, nextQuestion, recordWrong, playWrong, shake]);

  // Check for game over
  useEffect(() => {
    if (lives <= 0 && isPlaying) {
      finishGame();
    }
  }, [lives, isPlaying, finishGame]);

  const handleAnswerClick = (answer: FallingAnswer, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const feedbackX = rect.left + rect.width / 2;
    const feedbackY = rect.top;

    if (answer.isCorrect) {
      const points = recordCorrect();
      playCorrect(combo + 1);
      emitCorrect(feedbackX, feedbackY);
      setShowFeedback({ correct: true, x: feedbackX, y: feedbackY, points });
      setFallingAnswers([]);

      // Speed up every 5 questions
      if (questionIndex % 5 === 0) {
        setGameSpeed(s => Math.min(s + 0.2, 3));
      }

      setTimeout(() => {
        setShowFeedback(null);
        nextQuestion();
      }, 400);
    } else {
      setLives(l => l - 1);
      recordWrong();
      playWrong();
      shake(ShakePresets.wrong);
      emitWrong(feedbackX, feedbackY);
      setShowFeedback({ correct: false, x: feedbackX, y: feedbackY, points: 0 });

      // Remove wrong answer
      setFallingAnswers(prev => prev.filter(a => a.id !== answer.id));

      setTimeout(() => setShowFeedback(null), 300);
    }
  };

  // Build stats object for GameFrame
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

  // Ready screen content
  const readyContent = (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <div className="flex justify-center gap-4 mb-8">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Heart size={32} className="text-red-500 fill-red-500" />
          </motion.div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 text-left max-w-xs">
        <div className="flex items-center gap-2 text-yellow-400 mb-2">
          <AlertTriangle size={20} />
          <span className="font-bold">HOW TO PLAY</span>
        </div>
        <ul className="text-white/70 text-sm space-y-1">
          <li>Answers fall from above</li>
          <li>Tap the correct answer</li>
          <li>Speed increases over time</li>
          <li>Build combos for bonus points!</li>
        </ul>
      </div>
    </div>
  );

  // Playing screen content
  const playingContent = (
    <div className="flex flex-col h-full" style={shakeStyle}>
      {/* Particle effects */}
      <ParticleEffect trigger={particleTrigger} {...particleConfig} />

      {/* Lives display */}
      <div className="flex justify-center gap-2 mb-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ scale: i < lives ? 1 : 0.5, opacity: i < lives ? 1 : 0.3 }}
          >
            <Heart
              size={24}
              className={i < lives ? 'text-red-500 fill-red-500' : 'text-gray-600'}
            />
          </motion.div>
        ))}
      </div>

      {/* Question */}
      <div className="px-4 mb-4 text-center">
        <motion.div
          key={currentQuestion?.question}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl px-6 py-4"
        >
          <p className="text-white text-lg font-bold">
            {currentQuestion?.question}
          </p>
        </motion.div>

        {/* Combo indicator */}
        {combo > 1 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mt-2 inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
          >
            <span className="font-bold text-white text-sm">{combo}x COMBO</span>
          </motion.div>
        )}
      </div>

      {/* Game area */}
      <div
        ref={gameAreaRef}
        className="flex-1 relative overflow-hidden"
      >
        <AnimatePresence>
          {fallingAnswers.map((answer) => (
            <motion.button
              key={answer.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => handleAnswerClick(answer, e)}
              className="absolute px-6 py-3 rounded-2xl bg-gradient-to-br from-white to-gray-200 shadow-xl font-bold text-gray-800 cursor-pointer hover:from-yellow-100 hover:to-yellow-200 transition-colors min-w-[100px] text-center"
              style={{
                left: answer.x,
                top: answer.y,
              }}
            >
              {answer.text}
            </motion.button>
          ))}
        </AnimatePresence>

        {/* Feedback */}
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 1, y: 0, scale: 1 }}
              animate={{ opacity: 0, y: -50, scale: 1.5 }}
              exit={{ opacity: 0 }}
              className={`fixed text-4xl font-black pointer-events-none ${
                showFeedback.correct ? 'text-green-400' : 'text-red-400'
              }`}
              style={{ left: showFeedback.x - 30, top: showFeedback.y - 30 }}
            >
              {showFeedback.correct ? `+${showFeedback.points}` : '-1'}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Speed indicator */}
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
          <span className="text-white/70 text-sm">Speed: {gameSpeed.toFixed(1)}x</span>
        </div>
      </div>

      {/* Progress */}
      <div className="px-4 py-2 text-center">
        <span className="text-white/50 text-sm">Question {questionIndex}</span>
      </div>
    </div>
  );

  return (
    <GameFrame
      title="Speed Blitz"
      subtitle="Tap falling answers before they escape!"
      icon={<Rocket size={40} className="text-cyan-400" />}
      color="cyan"
      gameState={gameState}
      onStart={handleStart}
      onRestart={handleRestart}
      score={score}
      combo={combo}
      showTimer={false}
      stats={stats}
    >
      {gameState === 'ready' && readyContent}
      {gameState === 'playing' && playingContent}
    </GameFrame>
  );
}
