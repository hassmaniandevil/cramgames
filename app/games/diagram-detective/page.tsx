'use client';

import { useState, useEffect } from 'react';
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
  Search,
  CheckCircle,
  XCircle,
  ArrowRight,
} from 'lucide-react';

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
function getDifficultyFromYearGroup(yearGroup: number): { level: string; label: string; color: string } {
  if (yearGroup <= 6) {
    return { level: 'Primary', label: 'Primary', color: 'bg-green-500/20 text-green-400 border-green-500/30' };
  } else if (yearGroup <= 9) {
    return { level: 'KS3', label: 'KS3', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' };
  } else if (yearGroup <= 11) {
    return { level: 'GCSE', label: 'GCSE', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' };
  } else {
    return { level: 'A-Level', label: 'A-Level', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' };
  }
}

export default function DiagramDetectivePage() {
  const router = useRouter();
  const { addXP } = useProgressStore();
  const { profile } = useUserStore();

  const yearGroup = profile?.yearGroup || 9;
  const difficulty = getDifficultyFromYearGroup(yearGroup);

  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [diagramIndex, setDiagramIndex] = useState(0);
  const [answeredParts, setAnsweredParts] = useState<Set<string>>(new Set());
  const [question, setQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const currentDiagram = diagrams[diagramIndex];
  const partsPerDiagram = 3; // Ask about 3 parts per diagram

  const loadQuestion = () => {
    const q = generateQuestion(currentDiagram, answeredParts);
    if (q) {
      setQuestion(q);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  useEffect(() => {
    loadQuestion();
  }, [diagramIndex]);

  const handleAnswer = (answer: string) => {
    if (showResult || !question) return;

    setSelectedAnswer(answer);
    setShowResult(true);
    setTotalQuestions(t => t + 1);

    const correct = answer === question.targetPart.name;
    setIsCorrect(correct);

    if (correct) {
      setScore(s => s + 15);
      setTotalCorrect(c => c + 1);
      addXP(15);
    }

    setAnsweredParts(prev => {
      const newSet = new Set(Array.from(prev));
      newSet.add(question.targetPart.id);
      return newSet;
    });
  };

  const nextQuestion = () => {
    if (answeredParts.size >= partsPerDiagram) {
      // Move to next diagram
      if (diagramIndex < diagrams.length - 1) {
        setDiagramIndex(prev => prev + 1);
        setAnsweredParts(new Set());
      } else {
        setGameComplete(true);
        setGameState('finished');
      }
    } else {
      loadQuestion();
    }
  };

  const resetGame = () => {
    setDiagramIndex(0);
    setAnsweredParts(new Set());
    setScore(0);
    setTotalCorrect(0);
    setTotalQuestions(0);
    setGameComplete(false);
    setGameState('playing');
    loadQuestion();
  };

  // Ready screen
  if (gameState === 'ready') {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-sm w-full"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
            <Search size={48} className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Diagram Detective
          </h1>
          <p className="text-text-secondary mb-6">
            Can you identify the parts of scientific diagrams?
          </p>

          {/* Difficulty badge */}
          <div className="flex justify-center mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-bold border ${difficulty.color}`}>
              {difficulty.label} Level
            </span>
          </div>

          {/* Settings display */}
          <div className="card p-4 mb-6">
            <span className="text-sm text-text-muted block mb-3">Your Settings</span>
            <div className="space-y-2 text-left">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Year Group:</span>
                <span className="text-text-primary font-medium">Year {yearGroup}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Difficulty:</span>
                <span className={`font-medium ${difficulty.color.split(' ')[1]}`}>{difficulty.label}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Diagrams:</span>
                <span className="text-text-primary font-medium">{diagrams.length} to complete</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Parts per diagram:</span>
                <span className="text-text-primary font-medium">{partsPerDiagram}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="card p-4 text-center">
              <Search size={24} className="text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-text-muted">Identify</p>
            </div>
            <div className="card p-4 text-center">
              <Zap size={24} className="text-xp mx-auto mb-2" />
              <p className="text-sm text-text-muted">+15 XP</p>
            </div>
            <div className="card p-4 text-center">
              <Trophy size={24} className="text-pink-400 mx-auto mb-2" />
              <p className="text-sm text-text-muted">Master</p>
            </div>
          </div>

          <button
            onClick={() => setGameState('playing')}
            className="w-full btn-primary py-4 text-lg font-bold"
          >
            Start Game
          </button>

          <button
            onClick={() => router.push('/')}
            className="mt-4 text-text-muted hover:text-text-primary transition-colors"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  // Complete screen
  if (gameComplete) {
    const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-8 w-full max-w-md text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-pastel-pink flex items-center justify-center"
          >
            <Trophy size={40} className="text-pink-500" />
          </motion.div>

          <h1 className="text-2xl font-bold text-text-primary mb-2">
            Diagram Expert!
          </h1>
          <p className="text-text-secondary mb-4">
            Great knowledge of scientific diagrams!
          </p>

          {/* Difficulty badge */}
          <div className="flex justify-center mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${difficulty.color}`}>
              {difficulty.label} Level
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-xp">{score}</div>
              <div className="text-xs text-text-muted">XP Earned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-correct">{accuracy}%</div>
              <div className="text-xs text-text-muted">Accuracy</div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-text-secondary">Parts labelled correctly</span>
              <span className="font-bold text-text-primary">{totalCorrect}/{totalQuestions}</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={resetGame}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} />
              Play Again
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full card p-4 text-text-primary font-semibold flex items-center justify-center gap-2 hover:bg-surface-elevated transition-colors"
            >
              <Home size={20} />
              Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass sticky top-0 z-50 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="p-2 hover:bg-surface-elevated rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
          <div className="text-center">
            <h1 className="font-bold text-text-primary">Diagram Detective</h1>
            <p className="text-xs text-text-muted">Diagram {diagramIndex + 1} of {diagrams.length}</p>
          </div>
          <div className="flex items-center gap-1">
            <Zap size={18} className="text-xp" />
            <span className="font-bold text-xp">{score}</span>
          </div>
        </div>
      </header>

      {/* Progress dots */}
      <div className="max-w-2xl mx-auto px-4 pt-4">
        <div className="flex justify-center gap-2">
          {Array.from({ length: partsPerDiagram }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i < answeredParts.size ? 'bg-correct' : 'bg-surface-elevated'
              }`}
            />
          ))}
        </div>
      </div>

      <main className="max-w-2xl mx-auto p-4 pb-32">
        {question && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {/* Diagram card */}
            <div className="card p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Search size={20} className="text-accent" />
                <span className={`text-sm px-2 py-1 rounded-full ${
                  currentDiagram.subject === 'Biology' ? 'bg-pastel-green text-correct' :
                  currentDiagram.subject === 'Physics' ? 'bg-pastel-blue text-blue-600' :
                  'bg-pastel-yellow text-amber-600'
                }`}>
                  {currentDiagram.subject}
                </span>
                <span className={`text-sm px-2 py-1 rounded-full border ${difficulty.color}`}>
                  {difficulty.label}
                </span>
              </div>

              <h2 className="text-xl font-bold text-text-primary mb-2">
                {currentDiagram.title}
              </h2>

              {/* ASCII Art Diagram */}
              <div className="p-4 bg-surface-elevated rounded-xl mb-4 overflow-x-auto">
                <pre className="text-xs sm:text-sm font-mono text-text-primary whitespace-pre leading-relaxed">
                  {currentDiagram.asciiArt}
                </pre>
              </div>

              {/* Question */}
              <div className="p-4 bg-pastel-purple rounded-xl">
                <p className="font-semibold text-text-primary text-center">
                  What is the function of: <span className="text-accent">{question.targetPart.name}</span>?
                </p>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrectOption = option === question.targetPart.name;
                const optionPart = currentDiagram.parts.find(p => p.name === option);

                let className = 'option-card text-left';
                if (showResult) {
                  if (isCorrectOption) className += ' correct';
                  else if (isSelected) className += ' wrong';
                }

                return (
                  <motion.button
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleAnswer(option)}
                    className={className}
                    disabled={showResult}
                  >
                    <span className="flex items-center gap-3 flex-1">
                      <span className="w-8 h-8 rounded-full bg-surface-elevated flex items-center justify-center text-sm font-bold shrink-0">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-left">{optionPart?.description || option}</span>
                    </span>
                    {showResult && isCorrectOption && (
                      <CheckCircle size={20} className="text-correct shrink-0" />
                    )}
                    {showResult && isSelected && !isCorrectOption && (
                      <XCircle size={20} className="text-incorrect shrink-0" />
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
                  <div className={`card p-4 mb-4 ${isCorrect ? 'bg-pastel-green' : 'bg-pastel-pink'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {isCorrect ? (
                        <CheckCircle size={20} className="text-correct" />
                      ) : (
                        <XCircle size={20} className="text-incorrect" />
                      )}
                      <span className="font-bold text-text-primary">
                        {isCorrect ? 'Correct! +15 XP' : `That's ${selectedAnswer}`}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary">
                      <strong>{question.targetPart.name}:</strong> {question.targetPart.description}
                    </p>
                  </div>

                  <button
                    onClick={nextQuestion}
                    className="w-full btn-primary py-4 flex items-center justify-center gap-2"
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
        )}
      </main>
    </div>
  );
}
