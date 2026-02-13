'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useUserStore } from '@/lib/stores/userStore';
import {
  X,
  Zap,
  Trophy,
  RotateCcw,
  Home,
  Users,
  Swords,
  Clock,
  Copy,
  Check,
  Share2,
  Crown,
} from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  subject: string;
}

const QUESTIONS: Question[] = [
  { question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'], correctIndex: 1, subject: 'Biology' },
  { question: 'What is the chemical symbol for Gold?', options: ['Go', 'Au', 'Ag', 'Gd'], correctIndex: 1, subject: 'Chemistry' },
  { question: 'What is 12 × 8?', options: ['84', '96', '88', '92'], correctIndex: 1, subject: 'Maths' },
  { question: 'What unit is electrical resistance measured in?', options: ['Volts', 'Amps', 'Ohms', 'Watts'], correctIndex: 2, subject: 'Physics' },
  { question: 'What is the formula for speed?', options: ['Distance × Time', 'Distance ÷ Time', 'Time ÷ Distance', 'Mass × Velocity'], correctIndex: 1, subject: 'Physics' },
  { question: 'Which base pairs with Adenine in DNA?', options: ['Guanine', 'Cytosine', 'Thymine', 'Uracil'], correctIndex: 2, subject: 'Biology' },
  { question: 'What is 15% of 200?', options: ['25', '30', '35', '40'], correctIndex: 1, subject: 'Maths' },
  { question: 'What is the atomic number of Carbon?', options: ['8', '6', '12', '14'], correctIndex: 1, subject: 'Chemistry' },
  { question: 'Solve: 3x + 5 = 20', options: ['x = 3', 'x = 5', 'x = 7', 'x = 15'], correctIndex: 1, subject: 'Maths' },
  { question: 'What process do plants use to make food?', options: ['Respiration', 'Digestion', 'Photosynthesis', 'Osmosis'], correctIndex: 2, subject: 'Biology' },
];

const ROUND_TIME = 10; // seconds per question

// Map year group to difficulty level
function getDifficultyFromYearGroup(yearGroup: number): { level: string; label: string } {
  if (yearGroup >= 1 && yearGroup <= 6) {
    return { level: 'primary', label: 'Primary' };
  } else if (yearGroup >= 7 && yearGroup <= 9) {
    return { level: 'ks3', label: 'KS3' };
  } else if (yearGroup >= 10 && yearGroup <= 11) {
    return { level: 'gcse', label: 'GCSE' };
  } else if (yearGroup >= 12 && yearGroup <= 13) {
    return { level: 'alevel', label: 'A-Level' };
  }
  return { level: 'gcse', label: 'GCSE' }; // Default
}

export default function PvPBattlePage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const { profile } = useUserStore();

  // Get year group and difficulty from user profile
  const yearGroup = profile?.yearGroup ?? 10;
  const difficulty = getDifficultyFromYearGroup(yearGroup);

  const [gameState, setGameState] = useState<'menu' | 'waiting' | 'playing' | 'results'>('menu');
  const [mode, setMode] = useState<'host' | 'join' | null>(null);
  const [roomCode, setRoomCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [copied, setCopied] = useState(false);

  // Game state
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_TIME);
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [playerAnswered, setPlayerAnswered] = useState(false);

  // Generate room code
  const generateRoomCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  };

  // Start hosting
  const startHost = () => {
    const code = generateRoomCode();
    setRoomCode(code);
    setMode('host');
    setGameState('waiting');

    // Simulate opponent joining after delay (in real app, this would be WebSocket)
    setTimeout(() => {
      startGame();
    }, 3000);
  };

  // Join game
  const joinGame = () => {
    if (inputCode.length === 6) {
      setRoomCode(inputCode.toUpperCase());
      setMode('join');
      startGame();
    }
  };

  // Start the actual game
  const startGame = () => {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 5);
    setQuestions(shuffled);
    setCurrentQuestion(0);
    setPlayerScore(0);
    setOpponentScore(0);
    setTimeLeft(ROUND_TIME);
    setSelectedAnswer(null);
    setShowResult(false);
    setPlayerAnswered(false);
    setGameState('playing');
  };

  // Timer effect
  useEffect(() => {
    if (gameState !== 'playing' || showResult) return;

    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          handleTimeUp();
          return ROUND_TIME;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, showResult, currentQuestion]);

  const handleTimeUp = () => {
    if (!playerAnswered) {
      // Player didn't answer in time
      setSelectedAnswer(-1);
    }
    setShowResult(true);

    // Simulate opponent answering (in real app, this would be from server)
    const opponentCorrect = Math.random() > 0.4; // 60% chance opponent is correct
    if (opponentCorrect) {
      setOpponentScore(s => s + 100);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(q => q + 1);
        setTimeLeft(ROUND_TIME);
        setSelectedAnswer(null);
        setShowResult(false);
        setPlayerAnswered(false);
      } else {
        // Game over
        setGameState('results');
        const finalScore = playerScore + (selectedAnswer === questions[currentQuestion]?.correctIndex ? 100 : 0);
        addXP(finalScore);
      }
    }, 2000);
  };

  const handleAnswer = (index: number) => {
    if (playerAnswered || showResult) return;

    setSelectedAnswer(index);
    setPlayerAnswered(true);

    const question = questions[currentQuestion];
    if (index === question.correctIndex) {
      // Bonus for speed
      const speedBonus = Math.floor(timeLeft * 5);
      setPlayerScore(s => s + 100 + speedBonus);
    }
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareCode = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'CramGames PvP Challenge!',
        text: `Join my PvP battle! Code: ${roomCode}`,
        url: window.location.href,
      });
    } else {
      copyCode();
    }
  };

  // Menu screen
  if (gameState === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md w-full"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-28 h-28 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center shadow-2xl shadow-rose-500/50"
          >
            <Swords size={56} className="text-white" />
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2">PvP BATTLE</h1>
          <p className="text-white/60 mb-8">Challenge a friend to a quiz duel!</p>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startHost}
              className="w-full py-4 px-6 bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl font-bold text-white shadow-lg flex items-center justify-center gap-3"
            >
              <Crown size={24} />
              HOST GAME
            </motion.button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-transparent text-white/40 text-sm">or join a game</span>
              </div>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value.toUpperCase().slice(0, 6))}
                placeholder="ENTER CODE"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 text-center font-mono text-lg tracking-widest"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={joinGame}
                disabled={inputCode.length !== 6}
                className="px-6 py-3 bg-white/20 rounded-xl font-bold text-white disabled:opacity-50"
              >
                JOIN
              </motion.button>
            </div>
          </div>

          <button
            onClick={() => router.push('/')}
            className="mt-8 text-white/60 hover:text-white"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  // Waiting for opponent
  if (gameState === 'waiting') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md w-full"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            className="w-20 h-20 mx-auto mb-6 rounded-full border-4 border-white/20 border-t-rose-500"
          />

          <h2 className="text-2xl font-bold text-white mb-2">Waiting for opponent...</h2>
          <p className="text-white/60 mb-6">Share this code with your friend</p>

          <div className="bg-white/10 rounded-2xl p-6 mb-4">
            <p className="text-white/60 text-sm mb-2">ROOM CODE</p>
            <p className="text-4xl font-mono font-black text-white tracking-widest">{roomCode}</p>
          </div>

          <div className="bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-xl px-4 py-3 mb-6 border border-rose-500/30">
            <p className="text-white/60 text-xs mb-1">DIFFICULTY LEVEL</p>
            <p className="text-lg font-bold text-white">{difficulty.label} (Year {yearGroup})</p>
          </div>

          <div className="flex gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyCode}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-xl text-white"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
              {copied ? 'Copied!' : 'Copy'}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shareCode}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-xl text-white"
            >
              <Share2 size={20} />
              Share
            </motion.button>
          </div>

          <button
            onClick={() => setGameState('menu')}
            className="mt-8 text-white/60 hover:text-white"
          >
            Cancel
          </button>
        </motion.div>
      </div>
    );
  }

  // Results screen
  if (gameState === 'results') {
    const playerWon = playerScore > opponentScore;
    const tie = playerScore === opponentScore;

    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md w-full"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring' }}
            className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-2xl ${
              playerWon ? 'bg-gradient-to-br from-yellow-400 to-amber-500 shadow-yellow-500/50' :
              tie ? 'bg-gradient-to-br from-gray-400 to-gray-500' :
              'bg-gradient-to-br from-red-500 to-red-700'
            }`}
          >
            {playerWon ? <Crown size={48} className="text-white" /> :
             tie ? <Users size={48} className="text-white" /> :
             <Swords size={48} className="text-white" />}
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-2">
            {playerWon ? 'VICTORY!' : tie ? 'TIE GAME!' : 'DEFEAT'}
          </h1>
          <p className="text-white/60 mb-8">
            {playerWon ? 'You crushed it!' : tie ? 'Evenly matched!' : 'Better luck next time!'}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className={`rounded-2xl p-4 ${playerWon ? 'bg-yellow-500/20 ring-2 ring-yellow-500' : 'bg-white/10'}`}>
              <p className="text-white/60 text-sm mb-1">YOU</p>
              <p className="text-3xl font-black text-white">{playerScore}</p>
            </div>
            <div className={`rounded-2xl p-4 ${!playerWon && !tie ? 'bg-rose-500/20 ring-2 ring-rose-500' : 'bg-white/10'}`}>
              <p className="text-white/60 text-sm mb-1">OPPONENT</p>
              <p className="text-3xl font-black text-white">{opponentScore}</p>
            </div>
          </div>

          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setGameState('menu')}
              className="w-full py-4 font-bold text-white bg-gradient-to-r from-rose-500 to-orange-500 rounded-xl flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              PLAY AGAIN
            </motion.button>
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
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-900 via-purple-900 to-indigo-900 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-black/30">
        <button onClick={() => router.push('/')} className="p-2 text-white/60">
          <X size={24} />
        </button>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="text-xs text-white/60">YOU</p>
            <p className="font-bold text-yellow-400">{playerScore}</p>
          </div>
          <div className="text-2xl">⚔️</div>
          <div className="text-center">
            <p className="text-xs text-white/60">OPP</p>
            <p className="font-bold text-rose-400">{opponentScore}</p>
          </div>
        </div>
        <div className="w-10" />
      </header>

      {/* Timer */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/60 text-sm">Q{currentQuestion + 1}/{questions.length}</span>
          <div className="flex items-center gap-2">
            <Clock size={16} className={timeLeft <= 3 ? 'text-red-400' : 'text-white/60'} />
            <span className={`font-mono font-bold ${timeLeft <= 3 ? 'text-red-400' : 'text-white'}`}>
              {timeLeft}s
            </span>
          </div>
        </div>
        <div className="h-2 bg-black/30 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${timeLeft <= 3 ? 'bg-red-500' : 'bg-gradient-to-r from-rose-500 to-orange-500'}`}
            initial={{ width: '100%' }}
            animate={{ width: `${(timeLeft / ROUND_TIME) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-6">
            <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">{question?.subject}</span>
            <p className="text-xl font-bold text-white mt-3">{question?.question}</p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {question?.options.map((option, i) => {
              let buttonClass = 'bg-white/10 border-white/20 hover:bg-white/15';
              if (showResult) {
                if (i === question.correctIndex) {
                  buttonClass = 'bg-green-500/30 border-green-500';
                } else if (i === selectedAnswer && i !== question.correctIndex) {
                  buttonClass = 'bg-red-500/30 border-red-500';
                }
              } else if (selectedAnswer === i) {
                buttonClass = 'bg-rose-500/30 border-rose-500';
              }

              return (
                <motion.button
                  key={i}
                  whileHover={!showResult && selectedAnswer === null ? { scale: 1.02 } : {}}
                  whileTap={!showResult && selectedAnswer === null ? { scale: 0.98 } : {}}
                  onClick={() => handleAnswer(i)}
                  disabled={showResult || playerAnswered}
                  className={`p-4 rounded-xl border-2 text-white font-semibold text-left transition-all ${buttonClass}`}
                >
                  {option}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
