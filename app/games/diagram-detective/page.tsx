'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
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
import { cn } from '@/lib/utils/cn';

interface DiagramPart {
  id: string;
  name: string;
  description: string;
  position: { top: string; left: string };
}

interface Diagram {
  id: string;
  title: string;
  subject: 'Biology' | 'Physics' | 'Chemistry';
  description: string;
  parts: DiagramPart[];
  asciiArt: string;
}

const diagrams: Diagram[] = [
  {
    id: 'cell',
    title: 'Animal Cell',
    subject: 'Biology',
    description: 'Label the parts of an animal cell',
    asciiArt: `
    ╭─────────────────────────────╮
    │     ┌───────┐               │
    │     │Nucleus│    ○ Ribosome │
    │     │  ◉    │               │
    │     └───────┘  ∿∿ ER        │
    │                             │
    │  ⬭ Mitochondria    ◯        │
    │                  Vacuole    │
    │         Cell membrane       │
    ╰─────────────────────────────╯
    `,
    parts: [
      { id: 'p1', name: 'Nucleus', description: 'Contains DNA, controls cell activities', position: { top: '25%', left: '30%' } },
      { id: 'p2', name: 'Mitochondria', description: 'Site of aerobic respiration, releases energy', position: { top: '60%', left: '20%' } },
      { id: 'p3', name: 'Cell membrane', description: 'Controls what enters and leaves the cell', position: { top: '80%', left: '50%' } },
      { id: 'p4', name: 'Ribosome', description: 'Site of protein synthesis', position: { top: '25%', left: '70%' } },
      { id: 'p5', name: 'Cytoplasm', description: 'Jelly-like substance where reactions occur', position: { top: '50%', left: '50%' } },
    ],
  },
  {
    id: 'eye',
    title: 'Human Eye',
    subject: 'Biology',
    description: 'Label the parts of the eye',
    asciiArt: `
           Light →
    ╭──────────────────────────╮
    │  Cornea   Iris  Lens     │
    │    ╱      │●│    ╲       │
    │   ╱       │ │     ╲      │
    │  ╱   Pupil└─┘      ╲     │ Retina
    │ ╱                   ╲    │
    │╱                     ╲───│ Optic
    │                          │ nerve
    ╰──────────────────────────╯
    `,
    parts: [
      { id: 'p1', name: 'Cornea', description: 'Transparent front, refracts light', position: { top: '30%', left: '15%' } },
      { id: 'p2', name: 'Iris', description: 'Colored part, controls pupil size', position: { top: '30%', left: '35%' } },
      { id: 'p3', name: 'Pupil', description: 'Hole that lets light in', position: { top: '45%', left: '35%' } },
      { id: 'p4', name: 'Lens', description: 'Focuses light onto retina', position: { top: '30%', left: '50%' } },
      { id: 'p5', name: 'Retina', description: 'Contains light receptors (rods and cones)', position: { top: '50%', left: '85%' } },
    ],
  },
  {
    id: 'circuit',
    title: 'Series Circuit',
    subject: 'Physics',
    description: 'Label the circuit components',
    asciiArt: `
    ┌────────────────────────┐
    │                        │
    │    ─┤├─    Resistor   │
    │   Capacitor            │
   ─┴─                       │
   ═╪═ Cell                  │
   ─┬─                       │
    │      ○─╱──○            │
    │      Switch            │
    │                        │
    └────────────────────────┘
    `,
    parts: [
      { id: 'p1', name: 'Cell/Battery', description: 'Provides electrical energy (EMF)', position: { top: '45%', left: '10%' } },
      { id: 'p2', name: 'Switch', description: 'Opens/closes circuit, controls current flow', position: { top: '65%', left: '45%' } },
      { id: 'p3', name: 'Resistor', description: 'Opposes current flow, measured in Ohms', position: { top: '25%', left: '60%' } },
      { id: 'p4', name: 'Ammeter', description: 'Measures current in Amps (in series)', position: { top: '45%', left: '85%' } },
      { id: 'p5', name: 'Wire', description: 'Conducts electricity with low resistance', position: { top: '10%', left: '50%' } },
    ],
  },
  {
    id: 'atom',
    title: 'Atomic Structure',
    subject: 'Chemistry',
    description: 'Label the parts of an atom',
    asciiArt: `
           Electron shells
              ╭───╮
           ╭──│   │──╮
          ╱   ╰───╯   ╲
         ╱             ╲
        │    ⊕ ⊖ ⊕     │  ← Nucleus
        │    ⊖ ⊕ ⊖     │   (protons +
         ╲   ⊕ ⊖ ⊕   ╱      neutrons)
          ╲         ╱
           ╰───────╯
              ◦ ← Electron
    `,
    parts: [
      { id: 'p1', name: 'Nucleus', description: 'Centre of atom, contains protons and neutrons', position: { top: '45%', left: '50%' } },
      { id: 'p2', name: 'Proton', description: 'Positive charge (+1), in nucleus', position: { top: '40%', left: '35%' } },
      { id: 'p3', name: 'Neutron', description: 'No charge (0), in nucleus', position: { top: '40%', left: '65%' } },
      { id: 'p4', name: 'Electron', description: 'Negative charge (-1), orbits nucleus', position: { top: '80%', left: '50%' } },
      { id: 'p5', name: 'Electron shell', description: 'Energy levels where electrons orbit', position: { top: '15%', left: '50%' } },
    ],
  },
  {
    id: 'wave',
    title: 'Transverse Wave',
    subject: 'Physics',
    description: 'Label the wave properties',
    asciiArt: `
         ╭──╮ Peak/Crest
        ╱    ╲         ╭──╮
       ╱      ╲       ╱    ╲
    ──╱────────╲─────╱──────╲──
                ╲   ╱
                 ╲ ╱ Trough
                  ╰
    ←─── Wavelength (λ) ───→

    ↕ Amplitude
    `,
    parts: [
      { id: 'p1', name: 'Wavelength', description: 'Distance between two identical points on wave', position: { top: '70%', left: '50%' } },
      { id: 'p2', name: 'Amplitude', description: 'Maximum displacement from rest position', position: { top: '85%', left: '15%' } },
      { id: 'p3', name: 'Crest/Peak', description: 'Highest point of the wave', position: { top: '15%', left: '30%' } },
      { id: 'p4', name: 'Trough', description: 'Lowest point of the wave', position: { top: '55%', left: '55%' } },
      { id: 'p5', name: 'Rest position', description: 'Equilibrium line, zero displacement', position: { top: '40%', left: '10%' } },
    ],
  },
  {
    id: 'leaf',
    title: 'Leaf Cross-Section',
    subject: 'Biology',
    description: 'Label the leaf structures',
    asciiArt: `
    ═══════════════════════════  Waxy cuticle
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  Upper epidermis

    ┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃  Palisade mesophyll
    ┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃  (photosynthesis)

    ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○   Spongy mesophyll
      ○ ○ ○   ○ ○   ○ ○ ○    (gas exchange)

    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  Lower epidermis
    ═══════╦══════╦═══════════
           ║      ║  Stomata
    `,
    parts: [
      { id: 'p1', name: 'Waxy cuticle', description: 'Waterproof layer, prevents water loss', position: { top: '8%', left: '50%' } },
      { id: 'p2', name: 'Palisade mesophyll', description: 'Packed with chloroplasts, main photosynthesis site', position: { top: '30%', left: '50%' } },
      { id: 'p3', name: 'Spongy mesophyll', description: 'Air spaces for gas exchange', position: { top: '55%', left: '50%' } },
      { id: 'p4', name: 'Stomata', description: 'Pores for gas exchange, controlled by guard cells', position: { top: '90%', left: '40%' } },
      { id: 'p5', name: 'Guard cells', description: 'Control opening/closing of stomata', position: { top: '90%', left: '60%' } },
    ],
  },
];

interface Question {
  diagram: Diagram;
  targetPart: DiagramPart;
  options: string[];
}

function generateQuestion(diagram: Diagram, answeredParts: Set<string>): Question | null {
  const availableParts = diagram.parts.filter(p => !answeredParts.has(p.id));
  if (availableParts.length === 0) return null;

  const targetPart = availableParts[Math.floor(Math.random() * availableParts.length)];

  // Get wrong options from other parts
  const wrongOptions = diagram.parts
    .filter(p => p.id !== targetPart.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(p => p.name);

  const options = [targetPart.name, ...wrongOptions].sort(() => Math.random() - 0.5);

  return { diagram, targetPart, options };
}

// Map year group to difficulty level
type DifficultyLevel = 'Primary' | 'KS3' | 'GCSE' | 'A-Level';

function getDifficultyFromYearGroup(yearGroup: YearGroup | undefined): { level: DifficultyLevel; color: string } {
  if (!yearGroup) return { level: 'GCSE', color: 'text-purple-400' };
  if (yearGroup <= 6) {
    return { level: 'Primary', color: 'text-green-400' };
  } else if (yearGroup <= 9) {
    return { level: 'KS3', color: 'text-blue-400' };
  } else if (yearGroup <= 11) {
    return { level: 'GCSE', color: 'text-purple-400' };
  } else {
    return { level: 'A-Level', color: 'text-amber-400' };
  }
}

const partsPerDiagram = 3; // Ask about 3 parts per diagram

export default function DiagramDetectivePage() {
  const { profile } = useUserStore();

  // Determine difficulty based on user's year group
  const difficulty = useMemo(() => getDifficultyFromYearGroup(profile?.yearGroup), [profile?.yearGroup]);

  // Game framework hooks
  const { gameState, isPlaying, startGame, finishGame, resetGame } = useGameState();
  const timer = useGameTimer({
    initialTime: 120,
    countDown: true,
    onTimeUp: finishGame,
  });
  const scoring = useGameScore({ basePointsPerQuestion: 100 });
  const audio = useGameAudio();
  const { shake, shakeStyle } = useScreenShake();
  const { trigger: particleTrigger, config: particleConfig, emitCorrect, emitWrong } = useParticles();

  // Game-specific state
  const [diagramIndex, setDiagramIndex] = useState(0);
  const [answeredParts, setAnsweredParts] = useState<Set<string>>(new Set());
  const [question, setQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentDiagram = diagrams[diagramIndex];

  // Load a new question for the current diagram
  const loadQuestion = useCallback(() => {
    const q = generateQuestion(currentDiagram, answeredParts);
    if (q) {
      setQuestion(q);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  }, [currentDiagram, answeredParts]);

  // Handle game start
  const handleStart = useCallback(() => {
    startGame();
    timer.reset(120);
    timer.start();
    scoring.reset();
    setDiagramIndex(0);
    setAnsweredParts(new Set());
    // Question will be loaded by useEffect
  }, [startGame, timer, scoring]);

  // Handle restart
  const handleRestart = useCallback(() => {
    resetGame();
    setTimeout(handleStart, 100);
  }, [resetGame, handleStart]);

  // Handle answer selection
  const handleAnswer = useCallback((answer: string) => {
    if (showResult || !question) return;

    setSelectedAnswer(answer);
    setShowResult(true);

    const correct = answer === question.targetPart.name;
    setIsCorrect(correct);

    if (correct) {
      scoring.recordCorrect();
      audio.playCorrect(scoring.combo);
      emitCorrect();
    } else {
      scoring.recordWrong();
      audio.playWrong();
      shake(ShakePresets.wrong);
      emitWrong();
    }

    setAnsweredParts(prev => {
      const newSet = new Set(Array.from(prev));
      newSet.add(question.targetPart.id);
      return newSet;
    });
  }, [showResult, question, scoring, audio, shake, emitCorrect, emitWrong]);

  // Handle next question
  const nextQuestion = useCallback(() => {
    if (answeredParts.size >= partsPerDiagram) {
      // Move to next diagram
      if (diagramIndex < diagrams.length - 1) {
        setDiagramIndex(prev => prev + 1);
        setAnsweredParts(new Set());
      } else {
        // Game complete
        timer.pause();
        finishGame();
      }
    } else {
      loadQuestion();
    }
  }, [answeredParts.size, diagramIndex, timer, finishGame, loadQuestion]);

  // Load question when diagram changes or game starts
  useEffect(() => {
    if (isPlaying && !question) {
      loadQuestion();
    }
  }, [isPlaying, question, loadQuestion]);

  // Load new question when diagram index changes
  useEffect(() => {
    if (isPlaying) {
      loadQuestion();
    }
  }, [diagramIndex, isPlaying]);

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

  // Get subject color
  const getSubjectBgColor = (subject: string) => {
    switch (subject) {
      case 'Biology': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Physics': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Chemistry': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      default: return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    }
  };

  return (
    <>
      <ParticleEffect trigger={particleTrigger} {...particleConfig} />

      <GameFrame
        title="Diagram Detective"
        subtitle="Can you identify the parts of scientific diagrams?"
        icon={<Search size={40} className="text-purple-400" />}
        color="purple"
        gameState={gameState}
        onStart={handleStart}
        onRestart={handleRestart}
        time={timer.time}
        totalTime={120}
        score={scoring.score}
        combo={scoring.combo}
        stats={stats}
        zoneId="science-diagrams"
      >
        <div style={shakeStyle} className="h-full flex flex-col">
          {question && (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${question.diagram.id}-${question.targetPart.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-2xl mx-auto"
              >
                {/* Progress dots */}
                <div className="flex justify-center gap-2 mb-4">
                  {Array.from({ length: partsPerDiagram }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        'w-3 h-3 rounded-full transition-colors',
                        i < answeredParts.size ? 'bg-green-500' : 'bg-white/10'
                      )}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-400">
                    Diagram {diagramIndex + 1}/{diagrams.length}
                  </span>
                </div>

                {/* Diagram card */}
                <div className="bg-[#16161d] border border-white/10 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Search size={20} className="text-purple-400" />
                    <span className={cn(
                      'text-sm px-3 py-1 rounded-full border',
                      getSubjectBgColor(currentDiagram.subject)
                    )}>
                      {currentDiagram.subject}
                    </span>
                    <span className={cn(
                      'text-sm px-3 py-1 rounded-full border bg-white/5 border-white/10',
                      difficulty.color
                    )}>
                      {difficulty.level}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2">
                    {currentDiagram.title}
                  </h2>

                  {/* ASCII Art Diagram */}
                  <div className="p-4 bg-[#0a0a0f] rounded-xl mb-4 overflow-x-auto">
                    <pre className="text-xs sm:text-sm font-mono text-white whitespace-pre leading-relaxed">
                      {currentDiagram.asciiArt}
                    </pre>
                  </div>

                  {/* Question */}
                  <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-xl">
                    <p className="font-semibold text-white text-center">
                      What is the function of: <span className="text-purple-400">{question.targetPart.name}</span>?
                    </p>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrectOption = option === question.targetPart.name;
                    const optionPart = currentDiagram.parts.find(p => p.name === option);

                    return (
                      <motion.button
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleAnswer(option)}
                        disabled={showResult}
                        className={cn(
                          'w-full p-4 rounded-xl font-medium text-left transition-all border-2',
                          'flex items-center gap-3',
                          showResult
                            ? isCorrectOption
                              ? 'bg-green-500/20 border-green-500 text-green-400'
                              : isSelected
                                ? 'bg-red-500/20 border-red-500 text-red-400'
                                : 'bg-white/5 border-white/10 text-gray-400'
                            : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50'
                        )}
                      >
                        <span className="w-8 h-8 rounded-full bg-[#0a0a0f] flex items-center justify-center text-sm font-bold shrink-0">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="flex-1">{optionPart?.description || option}</span>
                        {showResult && isCorrectOption && (
                          <CheckCircle size={20} className="text-green-400 shrink-0" />
                        )}
                        {showResult && isSelected && !isCorrectOption && (
                          <XCircle size={20} className="text-red-400 shrink-0" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Result feedback */}
                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="mt-6"
                    >
                      <div className={cn(
                        'p-4 rounded-xl mb-4 border',
                        isCorrect
                          ? 'bg-green-500/20 border-green-500/30'
                          : 'bg-red-500/20 border-red-500/30'
                      )}>
                        <div className="flex items-center gap-2 mb-2">
                          {isCorrect ? (
                            <CheckCircle size={20} className="text-green-400" />
                          ) : (
                            <XCircle size={20} className="text-red-400" />
                          )}
                          <span className={cn(
                            'font-bold',
                            isCorrect ? 'text-green-400' : 'text-red-400'
                          )}>
                            {isCorrect ? `Correct! +${scoring.comboMultiplier > 1 ? Math.round(100 * scoring.comboMultiplier) : 100} points` : `That's ${selectedAnswer}`}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300">
                          <strong className="text-white">{question.targetPart.name}:</strong> {question.targetPart.description}
                        </p>
                      </div>

                      <button
                        onClick={nextQuestion}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                      >
                        {answeredParts.size >= partsPerDiagram ? (
                          diagramIndex < diagrams.length - 1 ? (
                            <>
                              Next Diagram
                              <ArrowRight size={20} />
                            </>
                          ) : (
                            'See Results'
                          )
                        ) : (
                          <>
                            Next Part
                            <ArrowRight size={20} />
                          </>
                        )}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </GameFrame>
    </>
  );
}
