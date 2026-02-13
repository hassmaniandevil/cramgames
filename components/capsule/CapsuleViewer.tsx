'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Lightbulb, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn } from '@/lib/utils/cn';

export interface CapsuleScreen {
  type: 'hook' | 'rule' | 'example' | 'interactive' | 'quiz';
  title?: string;
  content: string;
  image?: string;
  interactiveType?: 'slider' | 'toggle' | 'drag';
  quizQuestion?: {
    prompt: string;
    options: string[];
    correctIndex: number;
  };
}

export interface Capsule {
  id: string;
  title: string;
  topic: string;
  screens: CapsuleScreen[];
  archetype: 'mystery' | 'practical' | 'visual' | 'story';
}

export interface CapsuleViewerProps {
  capsule: Capsule;
  onComplete: () => void;
  onClose: () => void;
}

export function CapsuleViewer({ capsule, onComplete, onClose }: CapsuleViewerProps) {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const screen = capsule.screens[currentScreen];
  const isLastScreen = currentScreen === capsule.screens.length - 1;
  const progress = ((currentScreen + 1) / capsule.screens.length) * 100;

  const handleNext = () => {
    if (isLastScreen) {
      onComplete();
    } else {
      setCurrentScreen((prev) => prev + 1);
      setQuizAnswer(null);
      setShowQuizResult(false);
    }
  };

  const handlePrev = () => {
    if (currentScreen > 0) {
      setCurrentScreen((prev) => prev - 1);
      setQuizAnswer(null);
      setShowQuizResult(false);
    }
  };

  const handleQuizAnswer = (index: number) => {
    if (showQuizResult) return;
    setQuizAnswer(index);
    setShowQuizResult(true);
  };

  const getArchetypeStyle = () => {
    switch (capsule.archetype) {
      case 'mystery':
        return 'from-purple-900 to-indigo-900';
      case 'practical':
        return 'from-emerald-900 to-teal-900';
      case 'visual':
        return 'from-orange-900 to-red-900';
      case 'story':
        return 'from-blue-900 to-cyan-900';
      default:
        return 'from-gray-900 to-slate-900';
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background */}
      <div className={cn('absolute inset-0 bg-gradient-to-br', getArchetypeStyle())} />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-4">
        <button onClick={onClose} className="p-2 rounded-full bg-white/10">
          <X size={20} className="text-white" />
        </button>

        <h2 className="font-semibold text-white">{capsule.title}</h2>

        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Progress */}
      <div className="relative z-10 px-4">
        <ProgressBar value={progress} size="sm" />
        <p className="text-center text-white/50 text-xs mt-2">
          {currentScreen + 1} / {capsule.screens.length}
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            className="w-full max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {screen.type === 'hook' && (
              <HookScreen screen={screen} archetype={capsule.archetype} />
            )}

            {screen.type === 'rule' && <RuleScreen screen={screen} />}

            {screen.type === 'example' && <ExampleScreen screen={screen} />}

            {screen.type === 'interactive' && <InteractiveScreen screen={screen} />}

            {screen.type === 'quiz' && screen.quizQuestion && (
              <QuizScreen
                screen={screen}
                selectedAnswer={quizAnswer}
                showResult={showQuizResult}
                onAnswer={handleQuizAnswer}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex items-center justify-between p-4">
        <Button
          variant="ghost"
          onClick={handlePrev}
          disabled={currentScreen === 0}
          className="opacity-50 disabled:opacity-20"
        >
          <ChevronLeft size={20} />
          Back
        </Button>

        <Button
          onClick={handleNext}
          disabled={screen.type === 'quiz' && !showQuizResult}
          glow={isLastScreen}
        >
          {isLastScreen ? (
            <>
              <CheckCircle size={20} className="mr-2" />
              Complete
            </>
          ) : (
            <>
              Next
              <ChevronRight size={20} />
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
}

// Hook screen - attention-grabbing opening
function HookScreen({ screen, archetype }: { screen: CapsuleScreen; archetype: string }) {
  const icons = {
    mystery: '🔮',
    practical: '🛠️',
    visual: '👁️',
    story: '📖',
  };

  return (
    <div className="text-center">
      <motion.div
        className="text-6xl mb-6"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {icons[archetype as keyof typeof icons] || '💡'}
      </motion.div>

      <h2 className="text-3xl font-bold text-white mb-4">{screen.title}</h2>

      <p className="text-xl text-white/80 leading-relaxed">{screen.content}</p>
    </div>
  );
}

// Rule screen - the core concept
function RuleScreen({ screen }: { screen: CapsuleScreen }) {
  return (
    <Card variant="glass" padding="lg">
      <div className="flex items-start gap-3 mb-4">
        <Lightbulb className="text-yellow-400 flex-shrink-0 mt-1" />
        <h3 className="text-xl font-semibold text-white">{screen.title || 'The Rule'}</h3>
      </div>

      <p className="text-white/90 text-lg leading-relaxed">{screen.content}</p>

      {screen.image && (
        <div className="mt-4 rounded-xl overflow-hidden">
          <img src={screen.image} alt="" className="w-full" />
        </div>
      )}
    </Card>
  );
}

// Example screen
function ExampleScreen({ screen }: { screen: CapsuleScreen }) {
  return (
    <Card variant="elevated" padding="lg">
      <h3 className="text-lg font-semibold text-purple-400 mb-4">
        {screen.title || 'Example'}
      </h3>

      <div className="bg-galaxy-dark/50 rounded-xl p-4 font-mono text-white/90">
        {screen.content}
      </div>

      {screen.image && (
        <div className="mt-4 rounded-xl overflow-hidden">
          <img src={screen.image} alt="" className="w-full" />
        </div>
      )}
    </Card>
  );
}

// Interactive screen
function InteractiveScreen({ screen }: { screen: CapsuleScreen }) {
  const [value, setValue] = useState(50);

  return (
    <Card variant="gradient" padding="lg">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <Play className="text-green-400" />
        {screen.title || 'Try It!'}
      </h3>

      <p className="text-white/80 mb-6">{screen.content}</p>

      {screen.interactiveType === 'slider' && (
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="interactive-slider w-full"
          />
          <div className="text-center text-2xl font-bold text-white">{value}</div>
        </div>
      )}
    </Card>
  );
}

// Quiz screen
function QuizScreen({
  screen,
  selectedAnswer,
  showResult,
  onAnswer,
}: {
  screen: CapsuleScreen;
  selectedAnswer: number | null;
  showResult: boolean;
  onAnswer: (index: number) => void;
}) {
  const quiz = screen.quizQuestion!;
  const isCorrect = selectedAnswer === quiz.correctIndex;

  return (
    <Card variant="elevated" padding="lg">
      <h3 className="text-xl font-semibold text-white mb-4">Quick Check</h3>

      <p className="text-white/90 mb-6">{quiz.prompt}</p>

      <div className="space-y-3">
        {quiz.options.map((option, index) => (
          <motion.button
            key={index}
            className={cn(
              'w-full p-4 rounded-xl text-left transition-all',
              'bg-white/5 border-2',
              !showResult && 'border-white/20 hover:border-purple-500',
              showResult && index === quiz.correctIndex && 'border-green-500 bg-green-500/20',
              showResult && selectedAnswer === index && index !== quiz.correctIndex && 'border-red-500 bg-red-500/20'
            )}
            onClick={() => onAnswer(index)}
            disabled={showResult}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-white">{option}</span>
          </motion.button>
        ))}
      </div>

      {showResult && (
        <motion.div
          className={cn(
            'mt-4 p-4 rounded-xl',
            isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {isCorrect ? '🎉 Correct!' : `Not quite - the answer is: ${quiz.options[quiz.correctIndex]}`}
        </motion.div>
      )}
    </Card>
  );
}

// Sample capsule data
export const SAMPLE_CAPSULE: Capsule = {
  id: 'sample-algebra-1',
  title: 'Solving Equations',
  topic: 'algebra',
  archetype: 'practical',
  screens: [
    {
      type: 'hook',
      title: 'What if math was a balance?',
      content: 'Imagine a see-saw. Whatever you do to one side, you must do to the other to keep it balanced. That\'s exactly how equations work!',
    },
    {
      type: 'rule',
      title: 'The Golden Rule',
      content: 'Whatever operation you perform on one side of the equation, you must perform the exact same operation on the other side. This keeps the equation "balanced" and true.',
    },
    {
      type: 'example',
      title: 'See It In Action',
      content: '2x + 5 = 15\n\nStep 1: Subtract 5 from both sides\n2x + 5 - 5 = 15 - 5\n2x = 10\n\nStep 2: Divide both sides by 2\n2x ÷ 2 = 10 ÷ 2\nx = 5',
    },
    {
      type: 'quiz',
      content: '',
      quizQuestion: {
        prompt: 'To solve 3x + 7 = 19, what should you do first?',
        options: [
          'Divide by 3',
          'Subtract 7 from both sides',
          'Add 7 to both sides',
          'Multiply by 3',
        ],
        correctIndex: 1,
      },
    },
  ],
};
