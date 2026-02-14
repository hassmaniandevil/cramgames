/**
 * GCSE Physics Expanded Question Bank
 * Fun-first gamified questions with real-world contexts
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================
// ENERGY
// ============================================

export const gcsePhysicsEnergy: Question[] = [
  {
    id: 'phys-gcse-exp-energy-001',
    subject: 'physics',
    topic: 'Energy',
    subtopic: 'Energy Transfers',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Your phone gets warm while charging. What energy transfer is happening?',
    correctAnswer: 'Electrical to chemical (stored) with some wasted as thermal',
    wrongAnswers: ['Thermal to electrical', 'Chemical to kinetic', 'Light to sound'],
    explanation: 'Useful: electrical energy charges the battery (chemical store). Wasted: some energy heats the phone. That\'s why phones get warm when charging fast!',
    hint: 'Think about what\'s useful vs what\'s wasted',
    tags: ['energy', 'transfer', 'practical'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-energy-002',
    subject: 'physics',
    topic: 'Energy',
    subtopic: 'Efficiency',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'An LED bulb uses 10W and produces 7W of light. What is its efficiency as a percentage?',
    correctAnswer: '70',
    wrongAnswers: [],
    explanation: 'Efficiency = useful output/total input × 100 = 7/10 × 100 = 70%. LEDs are way more efficient than old filament bulbs (only ~5% efficient)!',
    hint: 'Useful output ÷ total input × 100',
    tags: ['energy', 'efficiency', 'calculation'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-energy-003',
    subject: 'physics',
    topic: 'Energy',
    subtopic: 'Specific Heat Capacity',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Water has a very high specific heat capacity (4,200 J/kg°C). Why does this make it good for heating systems?',
    correctAnswer: 'It can store lots of energy and release it slowly',
    wrongAnswers: ['It heats up faster than other liquids', 'It\'s transparent', 'It flows easily through pipes'],
    explanation: 'High SHC means water absorbs LOTS of energy for each degree it heats up. It then releases this energy slowly as it cools - perfect for radiators!',
    hint: 'Think about what "stores lots of energy" means for heating',
    tags: ['energy', 'specific heat capacity', 'practical'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-energy-004',
    subject: 'physics',
    topic: 'Energy',
    subtopic: 'Power',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Two students run up the same stairs. Student A takes 3 seconds, Student B takes 6 seconds. Compare their power outputs.',
    correctAnswer: 'Student A has twice the power of Student B',
    wrongAnswers: ['They have the same power', 'Student B has twice the power', 'Power doesn\'t apply here'],
    explanation: 'Power = energy/time. Same energy transferred (same height gained), but A takes half the time, so twice the power. That\'s why sprinters are powerful!',
    hint: 'Power = energy transferred ÷ time taken',
    tags: ['energy', 'power', 'calculation'],
    yearGroup: [10, 11]
  },

  // FORCES
  {
    id: 'phys-gcse-exp-forces-001',
    subject: 'physics',
    topic: 'Forces',
    subtopic: 'Newton\'s Laws',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'You\'re on a skateboard and throw a ball forward. What happens to you?',
    correctAnswer: 'You move backwards (Newton\'s third law)',
    wrongAnswers: ['Nothing - you stay still', 'You move forwards', 'You spin around'],
    explanation: 'Every action has an equal and opposite reaction! You push the ball forward, the ball pushes you backward. This is how rockets work in space!',
    hint: 'Action and reaction are equal and opposite',
    tags: ['forces', 'Newton', 'third law'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-forces-002',
    subject: 'physics',
    topic: 'Forces',
    subtopic: 'Resultant Forces',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'A car has a driving force of 4000N and air resistance of 1500N. What is the resultant force in Newtons?',
    correctAnswer: '2500',
    wrongAnswers: [],
    explanation: 'Forces in opposite directions subtract: 4000 - 1500 = 2500N forward. The car accelerates because there\'s an unbalanced resultant force!',
    hint: 'Subtract forces going in opposite directions',
    tags: ['forces', 'resultant', 'calculation'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-forces-003',
    subject: 'physics',
    topic: 'Forces',
    subtopic: 'Terminal Velocity',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A skydiver falls at terminal velocity. What can you say about the forces acting on them?',
    correctAnswer: 'Weight equals air resistance - forces are balanced',
    wrongAnswers: ['Weight is greater than air resistance', 'There are no forces acting', 'Air resistance is greater than weight'],
    explanation: 'Terminal velocity = constant speed = balanced forces = zero resultant force. Weight down equals drag up. The skydiver keeps falling but doesn\'t accelerate!',
    hint: 'Constant velocity means balanced forces',
    tags: ['forces', 'terminal velocity', 'balanced'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-forces-004',
    subject: 'physics',
    topic: 'Forces',
    subtopic: 'Momentum',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A 2kg ball moving at 5m/s hits a stationary 3kg ball. They stick together. What\'s their combined velocity?',
    correctAnswer: '2 m/s',
    wrongAnswers: ['5 m/s', '3.33 m/s', '1.67 m/s'],
    explanation: 'Conservation of momentum: 2×5 + 3×0 = (2+3)×v. So 10 = 5v, v = 2m/s. Total momentum before = total momentum after. Always!',
    hint: 'Total momentum is conserved: m₁v₁ = (m₁+m₂)v',
    tags: ['forces', 'momentum', 'conservation'],
    yearGroup: [10, 11]
  },

  // WAVES
  {
    id: 'phys-gcse-exp-waves-001',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Wave Properties',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A wave has frequency 50Hz and wavelength 0.4m. What is its speed?',
    correctAnswer: '20 m/s',
    wrongAnswers: ['125 m/s', '0.008 m/s', '50.4 m/s'],
    explanation: 'Wave speed = frequency × wavelength. v = f × λ = 50 × 0.4 = 20 m/s. This equation works for ALL waves - sound, light, water, everything!',
    hint: 'v = f × λ (speed = frequency × wavelength)',
    tags: ['waves', 'equation', 'calculation'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-waves-002',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'EM Spectrum',
    difficulty: 'gcse',
    type: 'order',
    question: 'Arrange these EM waves from lowest to highest frequency:',
    correctAnswer: ['Radio', 'Infrared', 'Visible light', 'X-rays'],
    wrongAnswers: [],
    explanation: 'Lower frequency = longer wavelength = less energy. Radio waves are chilled out, X-rays are intense! Remember: all EM waves travel at the speed of light in a vacuum.',
    hint: 'Think about which waves are most dangerous (highest energy/frequency)',
    tags: ['waves', 'EM spectrum', 'order'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-waves-003',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Sound',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Sound can\'t travel through space. Why not?',
    correctAnswer: 'Sound is a mechanical wave and needs particles to vibrate',
    wrongAnswers: ['Space is too cold', 'Sound waves get absorbed', 'The vacuum is too big'],
    explanation: 'Sound is a longitudinal wave - particles vibrate and pass energy along. No particles in space = nothing to vibrate = no sound. In space, no one can hear you scream!',
    hint: 'What do sound waves need to travel through?',
    tags: ['waves', 'sound', 'mechanical'],
    yearGroup: [10, 11]
  },

  // ELECTRICITY
  {
    id: 'phys-gcse-exp-elec-001',
    subject: 'physics',
    topic: 'Electricity',
    subtopic: 'Circuits',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In a series circuit with three identical bulbs, one bulb blows. What happens to the other two?',
    correctAnswer: 'They go out too - the circuit is broken',
    wrongAnswers: ['They get brighter', 'They stay the same', 'They get dimmer but stay on'],
    explanation: 'Series circuits have only ONE path for current. Break that path anywhere and current stops flowing everywhere. That\'s why fairy lights are annoying when one bulb goes!',
    hint: 'How many paths does current have in a series circuit?',
    tags: ['electricity', 'series', 'circuits'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-elec-002',
    subject: 'physics',
    topic: 'Electricity',
    subtopic: 'Circuits',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In a parallel circuit, more branches are added. What happens to the total resistance?',
    correctAnswer: 'Total resistance decreases',
    wrongAnswers: ['Total resistance increases', 'Total resistance stays the same', 'Resistance becomes zero'],
    explanation: 'More branches = more paths for current = easier for current to flow = lower total resistance. It\'s like adding more checkout lanes at a supermarket - faster flow!',
    hint: 'Think about more paths = easier or harder for current?',
    tags: ['electricity', 'parallel', 'resistance'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-elec-003',
    subject: 'physics',
    topic: 'Electricity',
    subtopic: 'Power',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'A kettle draws 10A from a 230V mains supply. What is its power in watts?',
    correctAnswer: '2300',
    wrongAnswers: [],
    explanation: 'P = I × V = 10 × 230 = 2300W = 2.3kW. That\'s why kettles are one of the most power-hungry appliances in your home!',
    hint: 'P = I × V (Power = Current × Voltage)',
    tags: ['electricity', 'power', 'calculation'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-elec-004',
    subject: 'physics',
    topic: 'Electricity',
    subtopic: 'Static',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'You get a shock touching a car door after driving. What caused the static build-up?',
    correctAnswer: 'Friction between you and the car seat transferred electrons',
    wrongAnswers: ['The car battery charged you', 'Air rubbing against the car', 'Your phone was charging'],
    explanation: 'Friction moves electrons from one material to another. You gained (or lost) electrons, became charged, and discharged when you touched the metal car - zap!',
    hint: 'What were you rubbing against while driving?',
    tags: ['electricity', 'static', 'practical'],
    yearGroup: [10, 11]
  },

  // MAGNETISM
  {
    id: 'phys-gcse-exp-mag-001',
    subject: 'physics',
    topic: 'Magnetism',
    subtopic: 'Electromagnets',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'An electromagnet is used in a scrapyard crane. What advantage does it have over a permanent magnet?',
    correctAnswer: 'It can be switched off to release the metal',
    wrongAnswers: ['It\'s stronger', 'It\'s cheaper', 'It never breaks'],
    explanation: 'Electromagnets only work when current flows - switch off the current, magnetism stops, metal drops! You can\'t do that with a permanent magnet.',
    hint: 'What makes electromagnets controllable?',
    tags: ['magnetism', 'electromagnets', 'practical'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-mag-002',
    subject: 'physics',
    topic: 'Magnetism',
    subtopic: 'Motor Effect',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A wire carrying current is placed in a magnetic field. What happens?',
    correctAnswer: 'The wire experiences a force (motor effect)',
    wrongAnswers: ['The wire melts', 'Nothing happens', 'The magnetic field disappears'],
    explanation: 'Current + magnetic field = force on the wire. This is the motor effect! It\'s how electric motors work - current flows, wire moves, motor spins.',
    hint: 'This effect is used in electric motors...',
    tags: ['magnetism', 'motor effect', 'force'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-mag-003',
    subject: 'physics',
    topic: 'Magnetism',
    subtopic: 'Transformers',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A step-up transformer has 100 turns on the primary coil and 500 on the secondary. If input voltage is 10V, what\'s the output?',
    correctAnswer: '50V',
    wrongAnswers: ['2V', '500V', '100V'],
    explanation: 'V₂/V₁ = N₂/N₁. So V₂ = 10 × (500/100) = 10 × 5 = 50V. More turns on secondary = higher voltage out. National Grid uses this to reduce energy losses!',
    hint: 'Turns ratio = voltage ratio',
    tags: ['magnetism', 'transformers', 'calculation'],
    yearGroup: [10, 11]
  },

  // RADIOACTIVITY
  {
    id: 'phys-gcse-exp-rad-001',
    subject: 'physics',
    topic: 'Radioactivity',
    subtopic: 'Types of Radiation',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each radiation type to its properties:',
    correctAnswer: ['Alpha → Stopped by paper, most ionising', 'Beta → Stopped by aluminium, fast electrons', 'Gamma → Stopped by lead/concrete, EM wave'],
    wrongAnswers: [],
    explanation: 'Alpha: big, slow, stopped easily but very ionising. Beta: smaller, faster, medium penetration. Gamma: no mass, very penetrating but least ionising.',
    hint: 'Big particles = more ionising but stopped easily',
    tags: ['radioactivity', 'radiation types', 'properties'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-rad-002',
    subject: 'physics',
    topic: 'Radioactivity',
    subtopic: 'Half-life',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A sample has activity 800Bq. After 30 minutes, it\'s 100Bq. What\'s the half-life?',
    correctAnswer: '10 minutes',
    wrongAnswers: ['30 minutes', '15 minutes', '7.5 minutes'],
    explanation: '800 → 400 → 200 → 100. That\'s 3 half-lives in 30 minutes. 30 ÷ 3 = 10 minutes per half-life. Each half-life, activity halves!',
    hint: 'Count how many times it halved',
    tags: ['radioactivity', 'half-life', 'calculation'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-rad-003',
    subject: 'physics',
    topic: 'Radioactivity',
    subtopic: 'Uses',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why is technetium-99m used as a medical tracer?',
    correctAnswer: 'It\'s a gamma emitter with a short half-life (6 hours)',
    wrongAnswers: ['It\'s an alpha emitter - very ionising', 'It has a half-life of 1000 years', 'It glows in the dark'],
    explanation: 'Gamma radiation penetrates the body and is detected outside. Short half-life means it decays quickly, reducing patient exposure. Perfect for medical imaging!',
    hint: 'What properties make radiation safe for medical use?',
    tags: ['radioactivity', 'medical', 'uses'],
    yearGroup: [10, 11]
  },

  // SPACE
  {
    id: 'phys-gcse-exp-space-001',
    subject: 'physics',
    topic: 'Space',
    subtopic: 'Life Cycle of Stars',
    difficulty: 'gcse',
    type: 'order',
    question: 'Put these stages of a massive star\'s life in order:',
    correctAnswer: ['Nebula', 'Main sequence', 'Red supergiant', 'Supernova', 'Neutron star/black hole'],
    wrongAnswers: [],
    explanation: 'Massive stars burn hot and die spectacularly! Nebula → star forms → burns hydrogen → expands → explodes as supernova → leaves behind a neutron star or black hole.',
    hint: 'Start from gas cloud, end with the most extreme object',
    tags: ['space', 'stars', 'life cycle'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp-space-002',
    subject: 'physics',
    topic: 'Space',
    subtopic: 'Red Shift',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Light from distant galaxies is red-shifted. What does this tell us about the universe?',
    correctAnswer: 'Galaxies are moving away from us - the universe is expanding',
    wrongAnswers: ['Galaxies are getting hotter', 'Galaxies are getting closer', 'Light is getting tired'],
    explanation: 'Red shift = wavelength stretched = source moving away. All distant galaxies show red shift, meaning everything is moving apart. Evidence for the Big Bang!',
    hint: 'What causes light waves to stretch?',
    tags: ['space', 'red shift', 'Big Bang'],
    yearGroup: [10, 11]
  },
];

// ============================================
// GCSE PHYSICS TERMS
// ============================================

export const gcsePhysicsTermsExpanded: TermDefinition[] = [
  {
    id: 'phys-gcse-term-exp-001',
    subject: 'physics',
    term: 'Specific heat capacity',
    definition: 'Energy needed to raise 1kg of a substance by 1°C - water\'s is high (4,200 J/kg°C), metals are low',
    difficulty: 'gcse',
    relatedTerms: ['energy', 'temperature', 'heating']
  },
  {
    id: 'phys-gcse-term-exp-002',
    subject: 'physics',
    term: 'Resultant force',
    definition: 'The single force that has the same effect as all forces acting on an object combined',
    difficulty: 'gcse',
    relatedTerms: ['forces', 'Newton', 'acceleration']
  },
  {
    id: 'phys-gcse-term-exp-003',
    subject: 'physics',
    term: 'Terminal velocity',
    definition: 'Maximum velocity reached when drag equals weight - no more acceleration',
    difficulty: 'gcse',
    relatedTerms: ['forces', 'drag', 'balanced']
  },
  {
    id: 'phys-gcse-term-exp-004',
    subject: 'physics',
    term: 'Half-life',
    definition: 'Time taken for half the radioactive nuclei in a sample to decay, or for activity to halve',
    difficulty: 'gcse',
    relatedTerms: ['radioactivity', 'decay', 'activity']
  },
  {
    id: 'phys-gcse-term-exp-005',
    subject: 'physics',
    term: 'Red shift',
    definition: 'Increase in wavelength of light from objects moving away - evidence the universe is expanding',
    difficulty: 'gcse',
    relatedTerms: ['Doppler', 'Big Bang', 'universe']
  },
  {
    id: 'phys-gcse-term-exp-006',
    subject: 'physics',
    term: 'Motor effect',
    definition: 'Force experienced by a current-carrying wire in a magnetic field - how motors work',
    difficulty: 'gcse',
    relatedTerms: ['magnetism', 'current', 'force']
  },
];

// ============================================
// GCSE PHYSICS FORMULAS
// ============================================

export const gcsePhysicsFormulasExpanded: Formula[] = [
  {
    id: 'phys-gcse-formula-exp-001',
    subject: 'physics',
    name: 'Kinetic Energy',
    formula: 'KE = ½mv²',
    description: 'Energy of moving objects. Note: velocity is SQUARED, so doubling speed quadruples energy!',
    difficulty: 'gcse',
    topic: 'Energy'
  },
  {
    id: 'phys-gcse-formula-exp-002',
    subject: 'physics',
    name: 'Gravitational Potential Energy',
    formula: 'GPE = mgh',
    description: 'Energy stored due to height. m = mass, g = 10 N/kg, h = height in metres.',
    difficulty: 'gcse',
    topic: 'Energy'
  },
  {
    id: 'phys-gcse-formula-exp-003',
    subject: 'physics',
    name: 'Wave Speed Equation',
    formula: 'v = fλ',
    description: 'Works for ALL waves. v = speed, f = frequency, λ = wavelength.',
    difficulty: 'gcse',
    topic: 'Waves'
  },
  {
    id: 'phys-gcse-formula-exp-004',
    subject: 'physics',
    name: 'Momentum',
    formula: 'p = mv',
    description: 'Momentum is conserved in collisions. p = momentum, m = mass, v = velocity.',
    difficulty: 'gcse',
    topic: 'Forces'
  },
  {
    id: 'phys-gcse-formula-exp-005',
    subject: 'physics',
    name: 'Electrical Power',
    formula: 'P = IV (also P = I²R and P = V²/R)',
    description: 'Power in watts. Three versions for different known quantities.',
    difficulty: 'gcse',
    topic: 'Electricity'
  },
];

// Combined export
export const gcsePhysicsExpanded = [...gcsePhysicsEnergy];
