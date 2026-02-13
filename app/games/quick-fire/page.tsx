'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Check, X as XIcon, Heart, Flame } from 'lucide-react';
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
import type { Question } from '@/data/questions/index';

export const dynamic = 'force-dynamic';

interface Statement {
  id: string;
  text: string;
  isTrue: boolean;
  subject: string;
  explanation: string;
}

// Convert questions to true/false statements
function questionsToStatements(questions: Question[]): Statement[] {
  const statements: Statement[] = [];

  questions.forEach(q => {
    // Create a TRUE statement (the correct answer)
    statements.push({
      id: `${q.id}-true`,
      text: `${q.question.replace('?', '')} - Answer: ${q.correctAnswer}`,
      isTrue: true,
      subject: q.subject.charAt(0).toUpperCase() + q.subject.slice(1),
      explanation: q.explanation,
    });

    // Create FALSE statements (wrong answers)
    if (q.wrongAnswers.length > 0) {
      const wrongAnswer = q.wrongAnswers[Math.floor(Math.random() * q.wrongAnswers.length)];
      statements.push({
        id: `${q.id}-false`,
        text: `${q.question.replace('?', '')} - Answer: ${wrongAnswer}`,
        isTrue: false,
        subject: q.subject.charAt(0).toUpperCase() + q.subject.slice(1),
        explanation: `Incorrect! The correct answer is ${q.correctAnswer}. ${q.explanation}`,
      });
    }
  });

  return statements;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function QuickFirePage() {
  const { profile } = useUserStore();

  // Game framework hooks
  const { gameState, isPlaying, startGame, finishGame, resetGame } = useGameState();
  const timer = useGameTimer({
    initialTime: 5,
    countDown: true,
    onTimeUp: () => handleTimeUp(),
  });
  const scoring = useGameScore({ basePointsPerQuestion: 100 });
  const audio = useGameAudio();
  const { shake, shakeStyle } = useScreenShake();
  const { trigger: particleTrigger, config: particleConfig, emitCorrect, emitWrong } = useParticles();

  // Game-specific state
  const [shuffledStatements, setShuffledStatements] = useState<Statement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<{ correct: boolean; explanation: string } | null>(null);
  const [questionsLoaded, setQuestionsLoaded] = useState(false);
  const questionsRef = useRef<Question[]>([]);
  const feedbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentStatement = shuffledStatements[currentIndex];

  // Load questions on client side only
  useEffect(() => {
    import('@/data/questions/index').then(({ getAllQuestions }) => {
      const yearGroup = profile?.yearGroup || 9;
      const subjects = profile?.subjects || ['maths', 'biology', 'chemistry', 'physics', 'english', 'history', 'geography'];
      const allQuestions = getAllQuestions();

      const filtered = allQuestions.filter(q =>
        q.yearGroup <= yearGroup &&
        subjects.includes(q.subject)
      );

      questionsRef.current = filtered;
      setQuestionsLoaded(true);
    });
  }, [profile?.yearGroup, profile?.subjects]);

  const availableQuestions = questionsRef.current;

  // Handle time up (wrong answer)
  const handleTimeUp = useCallback(() => {
    if (showFeedback || !currentStatement) return;
    handleAnswer(null);
  }, [showFeedback, currentStatement]);

  // Move to next question or finish game
  const moveToNext = useCallback((wasCorrect: boolean, currentLives: number) => {
    if (!wasCorrect && currentLives <= 0) {
      finishGame();
    } else if (currentIndex >= shuffledStatements.length - 1) {
      finishGame();
    } else {
      setCurrentIndex(i => i + 1);
      timer.reset(5);
      timer.start();
      setShowFeedback(false);
      setLastAnswer(null);
    }
  }, [currentIndex, shuffledStatements.length, finishGame, timer]);

  // Handle answer
  const handleAnswer = useCallback((answer: boolean | null) => {
    if (showFeedback || !currentStatement) return;

    timer.pause();
    setShowFeedback(true);

    const isCorrect = answer === currentStatement.isTrue;

    setLastAnswer({
      correct: isCorrect,
      explanation: currentStatement.explanation,
    });

    let newLives = lives;

    if (isCorrect) {
      scoring.recordCorrect();
      audio.playCorrect(scoring.combo + 1);
      emitCorrect();
    } else {
      scoring.recordWrong();
      audio.playWrong();
      shake(ShakePresets.wrong);
      emitWrong();
      newLives = lives - 1;
      setLives(newLives);
    }

    // Clear any existing timeout
    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current);
    }

    feedbackTimeoutRef.current = setTimeout(() => {
      moveToNext(isCorrect, newLives);
    }, isCorrect ? 500 : 1500);
  }, [showFeedback, currentStatement, lives, scoring, audio, shake, emitCorrect, emitWrong, timer, moveToNext]);

  // Handle game start
  const handleStart = useCallback(() => {
    const questions = shuffleArray(availableQuestions).slice(0, 15);
    const statements = questionsToStatements(questions);
    setShuffledStatements(shuffleArray(statements).slice(0, 20));
    setCurrentIndex(0);
    setLives(3);
    setShowFeedback(false);
    setLastAnswer(null);
    scoring.reset();
    startGame();
    timer.reset(5);
    timer.start();
  }, [availableQuestions, startGame, timer, scoring]);

  // Handle restart
  const handleRestart = useCallback(() => {
    resetGame();
    setTimeout(handleStart, 100);
  }, [resetGame, handleStart]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current);
      }
    };
  }, []);

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

  // Loading screen while questions load
  if (!questionsLoaded) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-amber-500/30 border-t-amber-500 animate-spin" />
          <p className="text-gray-400">Loading questions...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <ParticleEffect trigger={particleTrigger} {...particleConfig} />

      <GameFrame
        title="Quick Fire"
        subtitle="True or False? You have 5 seconds per question!"
        icon={<Timer size={40} className="text-amber-400" />}
        color="amber"
        gameState={gameState}
        onStart={handleStart}
        onRestart={handleRestart}
        time={timer.time}
        totalTime={5}
        score={scoring.score}
        combo={scoring.combo}
        stats={stats}
      >
        <div style={shakeStyle} className="h-full flex flex-col items-center justify-center">
          {currentStatement && (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStatement.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="w-full max-w-md"
              >
                {/* Lives indicator */}
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3].map((i) => (
                    <Heart
                      key={i}
                      size={24}
                      className={i <= lives ? 'text-red-500' : 'text-gray-700'}
                      fill={i <= lives ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>

                {/* Combo indicator */}
                {scoring.combo >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center mb-4"
                  >
                    <div className="px-4 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full">
                      <span className="font-bold text-orange-400 flex items-center gap-1">
                        <Flame size={16} /> {scoring.combo}x Combo!
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Subject tag */}
                <div className="flex justify-center mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                    {currentStatement.subject}
                  </span>
                </div>

                {/* Statement */}
                <div className="bg-[#16161d] border border-white/10 rounded-2xl p-6 mb-8 text-center">
                  <p className="text-xl font-bold text-white leading-relaxed">
                    {currentStatement.text}
                  </p>
                </div>

                {/* True/False buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer(true)}
                    disabled={showFeedback}
                    className={`p-6 rounded-2xl flex flex-col items-center gap-2 transition-all ${
                      showFeedback && currentStatement.isTrue
                        ? 'bg-green-500 text-white'
                        : showFeedback && !currentStatement.isTrue
                        ? 'bg-white/5 opacity-50'
                        : 'bg-green-500/20 hover:bg-green-500/30 border border-green-500/30'
                    }`}
                  >
                    <Check size={40} className={showFeedback && currentStatement.isTrue ? 'text-white' : 'text-green-400'} />
                    <span className={`font-bold text-lg ${showFeedback && currentStatement.isTrue ? 'text-white' : 'text-green-400'}`}>
                      TRUE
                    </span>
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer(false)}
                    disabled={showFeedback}
                    className={`p-6 rounded-2xl flex flex-col items-center gap-2 transition-all ${
                      showFeedback && !currentStatement.isTrue
                        ? 'bg-red-500 text-white'
                        : showFeedback && currentStatement.isTrue
                        ? 'bg-white/5 opacity-50'
                        : 'bg-red-500/20 hover:bg-red-500/30 border border-red-500/30'
                    }`}
                  >
                    <XIcon size={40} className={showFeedback && !currentStatement.isTrue ? 'text-white' : 'text-red-400'} />
                    <span className={`font-bold text-lg ${showFeedback && !currentStatement.isTrue ? 'text-white' : 'text-red-400'}`}>
                      FALSE
                    </span>
                  </motion.button>
                </div>

                {/* Feedback */}
                <AnimatePresence>
                  {showFeedback && lastAnswer && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`mt-6 p-4 rounded-xl ${
                        lastAnswer.correct ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'
                      }`}
                    >
                      <p className={`font-bold mb-1 ${lastAnswer.correct ? 'text-green-400' : 'text-red-400'}`}>
                        {lastAnswer.correct ? 'Correct!' : 'Wrong!'}
                      </p>
                      <p className="text-sm text-gray-400">{lastAnswer.explanation}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress */}
                <div className="mt-6 text-center text-sm text-gray-500">
                  Question {currentIndex + 1} of {shuffledStatements.length}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </GameFrame>
    </>
  );
}
