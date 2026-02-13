'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Question } from '@/lib/stores/battleStore';
import { cn } from '@/lib/utils/cn';

export interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: string | number) => void;
  disabled?: boolean;
  selectedAnswer?: string | number | null;
  showCorrect?: boolean;
  className?: string;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  disabled = false,
  selectedAnswer,
  showCorrect = false,
  className,
}: QuestionCardProps) {
  const [showHint, setShowHint] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const [numericInput, setNumericInput] = useState('');

  const handleOptionClick = (option: string, index: number) => {
    if (disabled) return;
    onAnswer(option);
  };

  const handleNumericSubmit = () => {
    if (disabled || !numericInput) return;
    const value = parseFloat(numericInput);
    if (!isNaN(value)) {
      onAnswer(value);
    }
  };

  const showNextHint = () => {
    if (hintIndex < question.hints.length - 1) {
      setHintIndex(hintIndex + 1);
    }
    setShowHint(true);
  };

  const isCorrectOption = (option: string) => {
    return option === question.content.correctAnswer;
  };

  const isSelectedOption = (option: string) => {
    return option === selectedAnswer;
  };

  return (
    <motion.div
      className={cn('w-full', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card variant="elevated" padding="lg" className="relative">
        {/* Question counter */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-white/50">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span
            className={cn(
              'px-3 py-1 rounded-full text-xs font-medium',
              question.difficulty === 'easy' && 'bg-green-500/20 text-green-400',
              question.difficulty === 'medium' && 'bg-yellow-500/20 text-yellow-400',
              question.difficulty === 'hard' && 'bg-orange-500/20 text-orange-400',
              question.difficulty === 'expert' && 'bg-red-500/20 text-red-400'
            )}
          >
            {question.difficulty}
          </span>
        </div>

        {/* Question prompt */}
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 leading-relaxed">
          {question.content.prompt}
        </h2>

        {/* Image if present */}
        {question.content.image && (
          <div className="mb-6 rounded-xl overflow-hidden">
            <img
              src={question.content.image}
              alt="Question diagram"
              className="w-full max-h-64 object-contain bg-white/5"
            />
          </div>
        )}

        {/* Answer options based on type */}
        <div className="space-y-3">
          {question.type === 'mcq' || question.type === 'true_false' ? (
            // Multiple choice / True-False
            question.content.options?.map((option, index) => (
              <motion.button
                key={index}
                className={cn(
                  'w-full p-4 rounded-xl text-left transition-all duration-200',
                  'bg-galaxy-dark/90 border-2',
                  !disabled && !isSelectedOption(option) && 'border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10',
                  isSelectedOption(option) && !showCorrect && 'border-purple-500 bg-purple-500/20',
                  showCorrect && isCorrectOption(option) && 'border-green-500 bg-green-500/20',
                  showCorrect && isSelectedOption(option) && !isCorrectOption(option) && 'border-red-500 bg-red-500/20 animate-shake',
                  disabled && !isSelectedOption(option) && !isCorrectOption(option) && 'opacity-50'
                )}
                onClick={() => handleOptionClick(option, index)}
                disabled={disabled}
                whileTap={disabled ? {} : { scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
                      'bg-purple-500/30 text-purple-300',
                      showCorrect && isCorrectOption(option) && 'bg-green-500 text-white',
                      showCorrect && isSelectedOption(option) && !isCorrectOption(option) && 'bg-red-500 text-white'
                    )}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-white">{option}</span>
                </div>
              </motion.button>
            ))
          ) : question.type === 'numeric_input' ? (
            // Numeric input
            <div className="space-y-4">
              <input
                type="number"
                value={numericInput}
                onChange={(e) => setNumericInput(e.target.value)}
                disabled={disabled}
                placeholder="Enter your answer..."
                className={cn(
                  'w-full p-4 rounded-xl text-xl font-mono text-center',
                  'bg-galaxy-dark/90 border-2 border-purple-500/30',
                  'focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20',
                  'text-white placeholder-white/30',
                  disabled && 'opacity-50'
                )}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleNumericSubmit();
                  }
                }}
              />
              {!disabled && (
                <Button
                  onClick={handleNumericSubmit}
                  disabled={!numericInput}
                  className="w-full"
                >
                  Submit Answer
                </Button>
              )}
              {showCorrect && (
                <div className={cn(
                  'p-4 rounded-xl text-center',
                  parseFloat(numericInput) === question.content.correctAnswer
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                )}>
                  Correct answer: <strong>{question.content.correctAnswer}</strong>
                </div>
              )}
            </div>
          ) : null}
        </div>

        {/* Hint button */}
        {question.hints.length > 0 && !showCorrect && (
          <div className="mt-6">
            {!showHint ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={showNextHint}
                className="text-white/50 hover:text-white"
              >
                <Lightbulb size={16} className="mr-2" />
                Need a hint?
              </Button>
            ) : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30"
              >
                <div className="flex items-start gap-2">
                  <Lightbulb size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                  <p className="text-yellow-200 text-sm">
                    {question.hints[hintIndex]}
                  </p>
                </div>
                {hintIndex < question.hints.length - 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={showNextHint}
                    className="mt-2 text-yellow-400/70"
                  >
                    Another hint ({question.hints.length - hintIndex - 1} left)
                  </Button>
                )}
              </motion.div>
            )}
          </div>
        )}
      </Card>
    </motion.div>
  );
}
