/**
 * A-Level Physics Question Bank
 * Comprehensive questions for UK A-Level Physics curriculum
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================================================
// MECHANICS - 20 Questions
// ============================================================================

const mechanicsQuestions: Question[] = [
  {
    id: 'phys-al-mech-001',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Motion',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A ball is thrown vertically upwards with velocity 20 m/s. What is its velocity at the highest point?',
    correctAnswer: '0 m/s',
    wrongAnswers: ['20 m/s', '10 m/s', '-20 m/s'],
    options: ['0 m/s', '20 m/s', '10 m/s', '-20 m/s'],
    explanation: 'At the highest point, the ball momentarily stops before falling back down.',
    tags: ['kinematics', 'projectile'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-002',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Motion',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A car accelerates uniformly from rest to 30 m/s in 6 seconds. Calculate the acceleration in m/s².',
    correctAnswer: 5,
    explanation: 'a = (v - u)/t = (30 - 0)/6 = 5 m/s²',
    tags: ['kinematics', 'acceleration'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-003',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Motion',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which quantity is a vector?',
    correctAnswer: 'Displacement',
    wrongAnswers: ['Speed', 'Distance', 'Time'],
    options: ['Displacement', 'Speed', 'Distance', 'Time'],
    explanation: 'Displacement has both magnitude and direction, making it a vector quantity.',
    tags: ['vectors', 'kinematics'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-004',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Motion',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'An object falls freely from rest. How far does it fall in 3 seconds? (g = 10 m/s²)',
    correctAnswer: 45,
    explanation: 's = ut + ½at² = 0 + ½(10)(3²) = 45 m',
    tags: ['kinematics', 'free fall'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-005',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Forces',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'According to Newton\'s Third Law, when you push against a wall:',
    correctAnswer: 'The wall pushes back with equal and opposite force',
    wrongAnswers: ['The wall absorbs your force', 'The wall pushes back with greater force', 'No force acts on you'],
    options: ['The wall pushes back with equal and opposite force', 'The wall absorbs your force', 'The wall pushes back with greater force', 'No force acts on you'],
    explanation: 'Newton\'s Third Law: Every action has an equal and opposite reaction.',
    tags: ['Newton\'s Laws', 'forces'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-006',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Forces',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A 5 kg mass experiences a net force of 20 N. Calculate the acceleration in m/s².',
    correctAnswer: 4,
    explanation: 'F = ma, so a = F/m = 20/5 = 4 m/s²',
    tags: ['Newton\'s Laws', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-007',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Forces',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the condition for an object to be in equilibrium?',
    correctAnswer: 'Net force and net torque are both zero',
    wrongAnswers: ['Net force is zero only', 'The object is stationary', 'The object moves at constant velocity'],
    options: ['Net force and net torque are both zero', 'Net force is zero only', 'The object is stationary', 'The object moves at constant velocity'],
    explanation: 'For complete equilibrium, both translational and rotational conditions must be satisfied.',
    tags: ['equilibrium', 'forces'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-008',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Forces',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A 2 kg mass on a frictionless surface has forces of 10 N east and 6 N west. Calculate the resultant acceleration in m/s².',
    correctAnswer: 2,
    explanation: 'Resultant force = 10 - 6 = 4 N. a = F/m = 4/2 = 2 m/s²',
    tags: ['forces', 'Newton\'s Laws'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-009',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Energy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which type of collision conserves kinetic energy?',
    correctAnswer: 'Elastic collision',
    wrongAnswers: ['Inelastic collision', 'Perfectly inelastic collision', 'Explosive collision'],
    options: ['Elastic collision', 'Inelastic collision', 'Perfectly inelastic collision', 'Explosive collision'],
    explanation: 'In elastic collisions, both momentum and kinetic energy are conserved.',
    tags: ['collisions', 'energy'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-010',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Energy',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the kinetic energy of a 4 kg object moving at 5 m/s. Give answer in J.',
    correctAnswer: 50,
    explanation: 'KE = ½mv² = ½(4)(5²) = 50 J',
    tags: ['kinetic energy', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-011',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Energy',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A 2 kg mass is raised 10 m. Calculate the gravitational potential energy gained. (g = 10 m/s²)',
    correctAnswer: 200,
    explanation: 'GPE = mgh = 2 × 10 × 10 = 200 J',
    tags: ['potential energy', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-012',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Energy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Work done by a force is calculated as:',
    correctAnswer: 'Force × displacement × cos(θ)',
    wrongAnswers: ['Force × displacement × sin(θ)', 'Force × velocity', 'Force × time'],
    options: ['Force × displacement × cos(θ)', 'Force × displacement × sin(θ)', 'Force × velocity', 'Force × time'],
    explanation: 'Work = Fs cos(θ), where θ is the angle between force and displacement.',
    tags: ['work', 'energy'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-013',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Motion',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The gradient of a velocity-time graph represents:',
    correctAnswer: 'Acceleration',
    wrongAnswers: ['Displacement', 'Distance', 'Speed'],
    options: ['Acceleration', 'Displacement', 'Distance', 'Speed'],
    explanation: 'The gradient gives the rate of change of velocity, which is acceleration.',
    tags: ['graphs', 'kinematics'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-014',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Motion',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A projectile is launched horizontally at 20 m/s from a height of 45 m. How long does it take to hit the ground? (g = 10 m/s²)',
    correctAnswer: 3,
    explanation: 's = ½gt², 45 = ½(10)t², t² = 9, t = 3 s',
    tags: ['projectiles', 'kinematics'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-015',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Forces',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the moment of a 50 N force acting 2 m from a pivot. Give answer in Nm.',
    correctAnswer: 100,
    explanation: 'Moment = Force × perpendicular distance = 50 × 2 = 100 Nm',
    tags: ['moments', 'forces'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-016',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Energy',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A machine has an efficiency of 80%. If the input power is 500 W, calculate the useful output power in W.',
    correctAnswer: 400,
    explanation: 'Efficiency = output/input × 100%, so output = 0.8 × 500 = 400 W',
    tags: ['efficiency', 'power'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-017',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Motion',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'The area under a velocity-time graph represents _____.',
    correctAnswer: 'displacement',
    explanation: 'Area under v-t graph = velocity × time = displacement.',
    tags: ['graphs', 'kinematics'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-018',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Forces',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the principle of conservation of momentum?',
    correctAnswer: 'Total momentum before collision equals total momentum after collision in an isolated system',
    wrongAnswers: ['Momentum is always conserved in all collisions', 'Momentum increases during collisions', 'Momentum only applies to elastic collisions'],
    options: ['Total momentum before collision equals total momentum after collision in an isolated system', 'Momentum is always conserved in all collisions', 'Momentum increases during collisions', 'Momentum only applies to elastic collisions'],
    explanation: 'In an isolated system with no external forces, total momentum is conserved.',
    tags: ['momentum', 'conservation'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-019',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Energy',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A spring with spring constant 200 N/m is compressed by 0.1 m. Calculate the elastic potential energy stored in J.',
    correctAnswer: 1,
    explanation: 'EPE = ½kx² = ½(200)(0.1²) = 1 J',
    tags: ['springs', 'energy'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-mech-020',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Motion',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'For circular motion at constant speed, the acceleration:',
    correctAnswer: 'Points towards the centre of the circle',
    wrongAnswers: ['Points away from the centre', 'Is zero', 'Points tangent to the circle'],
    options: ['Points towards the centre of the circle', 'Points away from the centre', 'Is zero', 'Points tangent to the circle'],
    explanation: 'Centripetal acceleration always points towards the centre, causing the change in direction.',
    tags: ['circular motion', 'acceleration'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// ELECTRIC CIRCUITS - 15 Questions
// ============================================================================

const electricCircuitsQuestions: Question[] = [
  {
    id: 'phys-al-elec-001',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'EMF',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the electromotive force (EMF) of a cell?',
    correctAnswer: 'The energy transferred per unit charge by the cell',
    wrongAnswers: ['The current flowing through the cell', 'The resistance of the cell', 'The power output of the cell'],
    options: ['The energy transferred per unit charge by the cell', 'The current flowing through the cell', 'The resistance of the cell', 'The power output of the cell'],
    explanation: 'EMF is the work done per unit charge in moving charge around a complete circuit.',
    tags: ['EMF', 'cells'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-elec-002',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'EMF',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A cell has EMF 12 V and internal resistance 2 Ω. When connected to a 4 Ω resistor, calculate the current in A.',
    correctAnswer: 2,
    explanation: 'I = EMF/(R + r) = 12/(4 + 2) = 2 A',
    tags: ['EMF', 'internal resistance'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-elec-003',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'Resistance',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Three 6 Ω resistors are connected in parallel. Calculate the total resistance in Ω.',
    correctAnswer: 2,
    explanation: '1/R = 1/6 + 1/6 + 1/6 = 3/6 = 1/2, so R = 2 Ω',
    tags: ['resistance', 'parallel'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-elec-004',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'Resistance',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'How does the resistance of a metal wire change when temperature increases?',
    correctAnswer: 'Resistance increases',
    wrongAnswers: ['Resistance decreases', 'Resistance stays constant', 'Resistance becomes zero'],
    options: ['Resistance increases', 'Resistance decreases', 'Resistance stays constant', 'Resistance becomes zero'],
    explanation: 'Higher temperature causes more lattice vibrations, increasing collisions with electrons.',
    tags: ['resistance', 'temperature'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-elec-005',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'Resistance',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A wire has resistance 8 Ω. If its length is doubled and diameter halved, calculate the new resistance in Ω.',
    correctAnswer: 64,
    explanation: 'R ∝ L/A. Doubling L doubles R. Halving diameter quarters A, quadrupling R. New R = 8 × 2 × 4 = 64 Ω',
    tags: ['resistance', 'resistivity'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-elec-006',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'EMF',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A cell with EMF 6 V and internal resistance 1 Ω delivers 2 A. Calculate the terminal pd in V.',
    correctAnswer: 4,
    explanation: 'Terminal pd = EMF - Ir = 6 - (2)(1) = 4 V',
    tags: ['EMF', 'terminal pd'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-elec-007',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'Resistance',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which component has a resistance that decreases as temperature increases?',
    correctAnswer: 'Thermistor (NTC)',
    wrongAnswers: ['Metal wire', 'Filament lamp', 'Fixed resistor'],
    options: ['Thermistor (NTC)', 'Metal wire', 'Filament lamp', 'Fixed resistor'],
    explanation: 'NTC thermistors have negative temperature coefficient - more charge carriers at higher temperatures.',
    tags: ['thermistor', 'resistance'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-elec-008',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'Resistance',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the power dissipated when 3 A flows through a 4 Ω resistor. Give answer in W.',
    correctAnswer: 36,
    explanation: 'P = I²R = 3² × 4 = 36 W',
    tags: ['power', 'resistance'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-elec-009',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'EMF',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'The _____ pd is the voltage measured across the terminals of a cell when current flows.',
    correctAnswer: 'terminal',
    explanation: 'Terminal pd = EMF - lost volts (Ir).',
    tags: ['EMF', 'pd'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-elec-010',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'Resistance',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In a potential divider circuit, how is the output voltage related to the resistances?',
    correctAnswer: 'Vout = Vin × R2/(R1 + R2)',
    wrongAnswers: ['Vout = Vin × R1/(R1 + R2)', 'Vout = Vin × (R1 + R2)/R2', 'Vout = Vin × R1 × R2'],
    options: ['Vout = Vin × R2/(R1 + R2)', 'Vout = Vin × R1/(R1 + R2)', 'Vout = Vin × (R1 + R2)/R2', 'Vout = Vin × R1 × R2'],
    explanation: 'The output voltage depends on the ratio of R2 to total resistance.',
    tags: ['potential divider', 'circuits'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-elec-011',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'EMF',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'The EMF of a cell is always greater than the terminal pd when current flows.',
    correctAnswer: 'True',
    explanation: 'Some energy is lost in the internal resistance, so terminal pd is always less than EMF.',
    tags: ['EMF', 'internal resistance'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-elec-012',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'Resistance',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A 12 V supply is connected to two resistors (3 Ω and 6 Ω) in series. Calculate the pd across the 6 Ω resistor in V.',
    correctAnswer: 8,
    explanation: 'Total R = 9 Ω, I = 12/9 = 4/3 A. V = IR = (4/3)(6) = 8 V',
    tags: ['series', 'pd'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-elec-013',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'Resistance',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is Kirchhoff\'s First Law based on?',
    correctAnswer: 'Conservation of charge',
    wrongAnswers: ['Conservation of energy', 'Conservation of momentum', 'Ohm\'s Law'],
    options: ['Conservation of charge', 'Conservation of energy', 'Conservation of momentum', 'Ohm\'s Law'],
    explanation: 'The sum of currents into a junction equals the sum of currents out (charge is conserved).',
    tags: ['Kirchhoff', 'current'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-elec-014',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'Resistance',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A wire has resistivity 1.7 × 10⁻⁸ Ωm, length 2 m, and cross-sectional area 1 × 10⁻⁶ m². Calculate resistance in Ω.',
    correctAnswer: 0.034,
    explanation: 'R = ρL/A = (1.7 × 10⁻⁸ × 2)/(1 × 10⁻⁶) = 0.034 Ω',
    tags: ['resistivity', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-elec-015',
    subject: 'physics',
    topic: 'Electric Circuits',
    subtopic: 'EMF',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'For maximum power transfer from a cell to an external resistor:',
    correctAnswer: 'External resistance should equal internal resistance',
    wrongAnswers: ['External resistance should be zero', 'External resistance should be infinite', 'External resistance should be twice internal resistance'],
    options: ['External resistance should equal internal resistance', 'External resistance should be zero', 'External resistance should be infinite', 'External resistance should be twice internal resistance'],
    explanation: 'Maximum power transfer occurs when R = r, though efficiency is only 50%.',
    tags: ['power transfer', 'EMF'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// WAVES - 15 Questions
// ============================================================================

const wavesQuestions: Question[] = [
  {
    id: 'phys-al-wave-001',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Superposition',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the principle of superposition?',
    correctAnswer: 'When two waves meet, the resultant displacement is the sum of individual displacements',
    wrongAnswers: ['Waves cancel each other out completely', 'Waves always combine to increase amplitude', 'Waves pass through each other unchanged'],
    options: ['When two waves meet, the resultant displacement is the sum of individual displacements', 'Waves cancel each other out completely', 'Waves always combine to increase amplitude', 'Waves pass through each other unchanged'],
    explanation: 'Superposition: resultant displacement equals algebraic sum of individual displacements.',
    tags: ['superposition', 'waves'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-wave-002',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Interference',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'For constructive interference, the path difference must be:',
    correctAnswer: 'A whole number of wavelengths (nλ)',
    wrongAnswers: ['An odd number of half wavelengths', 'Zero only', 'Any value'],
    options: ['A whole number of wavelengths (nλ)', 'An odd number of half wavelengths', 'Zero only', 'Any value'],
    explanation: 'Constructive interference occurs when waves arrive in phase (path difference = nλ).',
    tags: ['interference', 'path difference'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-wave-003',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Interference',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What conditions are required for observable interference?',
    correctAnswer: 'Coherent sources with the same frequency',
    wrongAnswers: ['Sources with different frequencies', 'Sources with high intensity', 'Sources very close together'],
    options: ['Coherent sources with the same frequency', 'Sources with different frequencies', 'Sources with high intensity', 'Sources very close together'],
    explanation: 'Coherent sources maintain a constant phase relationship, essential for stable interference patterns.',
    tags: ['interference', 'coherence'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-wave-004',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Superposition',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'When two waves of equal amplitude are 180° out of phase, _____ interference occurs.',
    correctAnswer: 'destructive',
    explanation: 'At 180° phase difference, crests meet troughs, causing cancellation.',
    tags: ['interference', 'phase'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-wave-005',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Interference',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'In a double-slit experiment, the wavelength is 600 nm and slit separation is 0.3 mm. Calculate the fringe spacing at a screen 2 m away in mm.',
    correctAnswer: 4,
    explanation: 'w = λD/d = (600 × 10⁻⁹ × 2)/(0.3 × 10⁻³) = 4 × 10⁻³ m = 4 mm',
    tags: ['Young\'s slits', 'interference'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-wave-006',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Superposition',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Standing waves are formed by:',
    correctAnswer: 'Two waves of equal frequency travelling in opposite directions',
    wrongAnswers: ['A single wave reflecting off a surface', 'Two waves of different frequencies', 'Waves travelling in the same direction'],
    options: ['Two waves of equal frequency travelling in opposite directions', 'A single wave reflecting off a surface', 'Two waves of different frequencies', 'Waves travelling in the same direction'],
    explanation: 'Standing waves result from superposition of identical waves travelling in opposite directions.',
    tags: ['standing waves', 'superposition'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-wave-007',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Superposition',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In a standing wave, what are points of zero displacement called?',
    correctAnswer: 'Nodes',
    wrongAnswers: ['Antinodes', 'Peaks', 'Troughs'],
    options: ['Nodes', 'Antinodes', 'Peaks', 'Troughs'],
    explanation: 'Nodes are positions of permanent destructive interference with zero displacement.',
    tags: ['standing waves', 'nodes'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-wave-008',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Interference',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Light of wavelength 500 nm passes through a diffraction grating with 500 lines per mm. Calculate the angle of the first order maximum in degrees.',
    correctAnswer: 14.5,
    explanation: 'd = 1/500 = 2 × 10⁻³ mm = 2 × 10⁻⁶ m. sin θ = nλ/d = 500 × 10⁻⁹/2 × 10⁻⁶ = 0.25. θ = 14.5°',
    tags: ['diffraction grating', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-wave-009',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Interference',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the phase difference for destructive interference?',
    correctAnswer: '(2n + 1)π radians or odd multiples of π',
    wrongAnswers: ['2nπ radians', 'π/2 radians', 'Zero'],
    options: ['(2n + 1)π radians or odd multiples of π', '2nπ radians', 'π/2 radians', 'Zero'],
    explanation: 'Destructive interference requires waves to be π, 3π, 5π... radians out of phase.',
    tags: ['interference', 'phase'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-wave-010',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Superposition',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Energy is transferred along a standing wave.',
    correctAnswer: 'False',
    explanation: 'In a standing wave, energy is stored but not transferred along the wave.',
    tags: ['standing waves', 'energy'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-wave-011',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Interference',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why is a diffraction grating better than double slits for measuring wavelength?',
    correctAnswer: 'It produces sharper, brighter maxima',
    wrongAnswers: ['It is cheaper', 'It works with any light source', 'It produces more colours'],
    options: ['It produces sharper, brighter maxima', 'It is cheaper', 'It works with any light source', 'It produces more colours'],
    explanation: 'Multiple slits create narrow, intense maxima, improving measurement accuracy.',
    tags: ['diffraction grating', 'interference'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-wave-012',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Superposition',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A string fixed at both ends has length 1.2 m. Calculate the wavelength of the third harmonic in m.',
    correctAnswer: 0.8,
    explanation: 'For nth harmonic: L = nλ/2. λ = 2L/n = 2(1.2)/3 = 0.8 m',
    tags: ['standing waves', 'harmonics'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-wave-013',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Interference',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'Single-slit diffraction produces a central maximum that is _____ the width of other maxima.',
    correctAnswer: 'twice',
    explanation: 'The central maximum has angular width 2λ/a, while others have width λ/a.',
    tags: ['diffraction', 'single slit'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-wave-014',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Superposition',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In a stationary wave, all points between two nodes:',
    correctAnswer: 'Vibrate in phase with each other',
    wrongAnswers: ['Vibrate out of phase', 'Have the same amplitude', 'Are stationary'],
    options: ['Vibrate in phase with each other', 'Vibrate out of phase', 'Have the same amplitude', 'Are stationary'],
    explanation: 'Points between adjacent nodes oscillate together, reaching maxima simultaneously.',
    tags: ['standing waves', 'phase'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-wave-015',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Interference',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'The path difference between two coherent sources is 1.5 wavelengths. What is the phase difference in radians?',
    correctAnswer: 3,
    explanation: 'Phase difference = (2π/λ) × path difference = 2π × 1.5 = 3π ≈ 9.42 rad, but expressed as 3π',
    tags: ['interference', 'path difference'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// QUANTUM PHYSICS - 15 Questions
// ============================================================================

const quantumQuestions: Question[] = [
  {
    id: 'phys-al-quant-001',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What happens to photoelectron emission when light intensity increases (above threshold)?',
    correctAnswer: 'More electrons are emitted but with the same maximum kinetic energy',
    wrongAnswers: ['Fewer electrons are emitted', 'Electrons have more kinetic energy', 'No change occurs'],
    options: ['More electrons are emitted but with the same maximum kinetic energy', 'Fewer electrons are emitted', 'Electrons have more kinetic energy', 'No change occurs'],
    explanation: 'Higher intensity means more photons, emitting more electrons, but each photon still has the same energy.',
    tags: ['photoelectric', 'intensity'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-quant-002',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The work function of a metal is:',
    correctAnswer: 'The minimum energy needed to remove an electron from the metal surface',
    wrongAnswers: ['The maximum kinetic energy of emitted electrons', 'The energy of incident photons', 'The threshold wavelength'],
    options: ['The minimum energy needed to remove an electron from the metal surface', 'The maximum kinetic energy of emitted electrons', 'The energy of incident photons', 'The threshold wavelength'],
    explanation: 'Work function (φ) is the binding energy holding electrons in the metal.',
    tags: ['photoelectric', 'work function'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-quant-003',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the energy of a photon with frequency 5 × 10¹⁴ Hz. (h = 6.63 × 10⁻³⁴ Js). Give answer in eV. (1 eV = 1.6 × 10⁻¹⁹ J)',
    correctAnswer: 2.07,
    explanation: 'E = hf = 6.63 × 10⁻³⁴ × 5 × 10¹⁴ = 3.315 × 10⁻¹⁹ J = 2.07 eV',
    tags: ['photon energy', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-quant-004',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'The photoelectric equation is: hf = φ + _____',
    correctAnswer: 'KEmax',
    explanation: 'Photon energy = work function + maximum kinetic energy of photoelectrons.',
    tags: ['photoelectric', 'equation'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-quant-005',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why does the photoelectric effect provide evidence for the particle nature of light?',
    correctAnswer: 'Electrons are emitted instantly regardless of intensity',
    wrongAnswers: ['Light travels in straight lines', 'Light can be reflected', 'Light has different colours'],
    options: ['Electrons are emitted instantly regardless of intensity', 'Light travels in straight lines', 'Light can be reflected', 'Light has different colours'],
    explanation: 'Wave theory predicts gradual energy absorption, but instant emission shows photons transfer energy in discrete packets.',
    tags: ['photoelectric', 'wave-particle'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-quant-006',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A metal has work function 2.0 eV. Calculate the threshold frequency in Hz. (h = 6.63 × 10⁻³⁴ Js, 1 eV = 1.6 × 10⁻¹⁹ J)',
    correctAnswer: 4.83e14,
    explanation: 'f₀ = φ/h = (2.0 × 1.6 × 10⁻¹⁹)/(6.63 × 10⁻³⁴) = 4.83 × 10¹⁴ Hz',
    tags: ['photoelectric', 'threshold'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-quant-007',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the de Broglie wavelength?',
    correctAnswer: 'The wavelength associated with a moving particle',
    wrongAnswers: ['The wavelength of light emitted by an atom', 'The size of an electron', 'The distance between atoms'],
    options: ['The wavelength associated with a moving particle', 'The wavelength of light emitted by an atom', 'The size of an electron', 'The distance between atoms'],
    explanation: 'de Broglie proposed all matter has wave properties with λ = h/p.',
    tags: ['wave-particle', 'de Broglie'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-quant-008',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the de Broglie wavelength of an electron moving at 2 × 10⁶ m/s. (h = 6.63 × 10⁻³⁴ Js, mₑ = 9.11 × 10⁻³¹ kg). Give answer in nm.',
    correctAnswer: 0.364,
    explanation: 'λ = h/mv = 6.63 × 10⁻³⁴/(9.11 × 10⁻³¹ × 2 × 10⁶) = 3.64 × 10⁻¹⁰ m = 0.364 nm',
    tags: ['de Broglie', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-quant-009',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Below the threshold frequency, increasing light intensity will eventually cause electron emission.',
    correctAnswer: 'False',
    explanation: 'No emission occurs below threshold frequency regardless of intensity - each photon lacks sufficient energy.',
    tags: ['photoelectric', 'threshold'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-quant-010',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In the photoelectric effect, what determines the stopping potential?',
    correctAnswer: 'The maximum kinetic energy of the photoelectrons',
    wrongAnswers: ['The intensity of light', 'The work function only', 'The number of electrons emitted'],
    options: ['The maximum kinetic energy of the photoelectrons', 'The intensity of light', 'The work function only', 'The number of electrons emitted'],
    explanation: 'Stopping potential Vs gives KEmax = eVs.',
    tags: ['photoelectric', 'stopping potential'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-quant-011',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A photon has wavelength 400 nm. Calculate its energy in eV. (h = 6.63 × 10⁻³⁴ Js, c = 3 × 10⁸ m/s)',
    correctAnswer: 3.1,
    explanation: 'E = hc/λ = (6.63 × 10⁻³⁴ × 3 × 10⁸)/(400 × 10⁻⁹) = 4.97 × 10⁻¹⁹ J = 3.1 eV',
    tags: ['photon energy', 'wavelength'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-quant-012',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Electron diffraction provides evidence that:',
    correctAnswer: 'Electrons have wave properties',
    wrongAnswers: ['Electrons are particles', 'Light is a wave', 'Atoms contain electrons'],
    options: ['Electrons have wave properties', 'Electrons are particles', 'Light is a wave', 'Atoms contain electrons'],
    explanation: 'Diffraction is a wave phenomenon - electron diffraction demonstrates wave-particle duality.',
    tags: ['electron diffraction', 'wave-particle'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-quant-013',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'The quantum of electromagnetic radiation is called a _____.',
    correctAnswer: 'photon',
    explanation: 'Einstein proposed light consists of discrete packets of energy called photons.',
    tags: ['photon', 'quantum'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-quant-014',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Light of frequency 6 × 10¹⁴ Hz hits a metal with work function 1.5 eV. Calculate the maximum KE of electrons in eV.',
    correctAnswer: 0.98,
    explanation: 'E = hf = 6.63 × 10⁻³⁴ × 6 × 10¹⁴ = 3.98 × 10⁻¹⁹ J = 2.48 eV. KEmax = 2.48 - 1.5 = 0.98 eV',
    tags: ['photoelectric', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-quant-015',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'As electron velocity increases, its de Broglie wavelength:',
    correctAnswer: 'Decreases',
    wrongAnswers: ['Increases', 'Stays the same', 'Becomes zero'],
    options: ['Decreases', 'Increases', 'Stays the same', 'Becomes zero'],
    explanation: 'λ = h/mv, so as v increases, λ decreases.',
    tags: ['de Broglie', 'wavelength'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// PARTICLE PHYSICS - 10 Questions
// ============================================================================

const particleQuestions: Question[] = [
  {
    id: 'phys-al-part-001',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Quarks',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the quark composition of a proton?',
    correctAnswer: 'uud (two up quarks, one down quark)',
    wrongAnswers: ['udd', 'uuu', 'ddd'],
    options: ['uud (two up quarks, one down quark)', 'udd', 'uuu', 'ddd'],
    explanation: 'Proton has charge +1: (2/3 + 2/3 - 1/3) = +1',
    tags: ['quarks', 'hadrons'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-part-002',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Quarks',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the charge of an up quark?',
    correctAnswer: '+2/3 e',
    wrongAnswers: ['-1/3 e', '+1 e', '-2/3 e'],
    options: ['+2/3 e', '-1/3 e', '+1 e', '-2/3 e'],
    explanation: 'Up quarks have charge +2/3, down quarks have charge -1/3.',
    tags: ['quarks', 'charge'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-part-003',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Leptons',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which particles are leptons?',
    correctAnswer: 'Electrons and neutrinos',
    wrongAnswers: ['Protons and neutrons', 'Quarks', 'Photons'],
    options: ['Electrons and neutrinos', 'Protons and neutrons', 'Quarks', 'Photons'],
    explanation: 'Leptons are fundamental particles not made of quarks: e, μ, τ and their neutrinos.',
    tags: ['leptons', 'classification'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-part-004',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Quarks',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'Particles made of three quarks are called _____.',
    correctAnswer: 'baryons',
    explanation: 'Baryons (e.g., protons, neutrons) contain three quarks. Mesons contain a quark-antiquark pair.',
    tags: ['baryons', 'quarks'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-part-005',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Leptons',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the lepton number of an electron?',
    correctAnswer: '+1',
    wrongAnswers: ['0', '-1', '+2'],
    options: ['+1', '0', '-1', '+2'],
    explanation: 'Electrons and neutrinos have lepton number +1; their antiparticles have -1.',
    tags: ['leptons', 'conservation'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-part-006',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Quarks',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the quark composition of a neutron?',
    correctAnswer: 'udd (one up quark, two down quarks)',
    wrongAnswers: ['uud', 'uuu', 'ddd'],
    options: ['udd (one up quark, two down quarks)', 'uud', 'uuu', 'ddd'],
    explanation: 'Neutron has charge 0: (2/3 - 1/3 - 1/3) = 0',
    tags: ['quarks', 'neutron'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-part-007',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Quarks',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Quarks can exist as free particles outside of hadrons.',
    correctAnswer: 'False',
    explanation: 'Quarks are confined within hadrons due to colour confinement - they cannot be isolated.',
    tags: ['quarks', 'confinement'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-part-008',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Leptons',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In beta-minus decay, which particles are emitted?',
    correctAnswer: 'An electron and an antineutrino',
    wrongAnswers: ['A positron and a neutrino', 'An alpha particle', 'A proton and an electron'],
    options: ['An electron and an antineutrino', 'A positron and a neutrino', 'An alpha particle', 'A proton and an electron'],
    explanation: 'β⁻: n → p + e⁻ + ν̄ₑ. Lepton number is conserved (0 → 0 + 1 + (-1)).',
    tags: ['beta decay', 'leptons'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-part-009',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Quarks',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What are the six flavours of quarks?',
    correctAnswer: 'Up, down, charm, strange, top, bottom',
    wrongAnswers: ['Red, green, blue, anti-red, anti-green, anti-blue', 'Electron, muon, tau, and their neutrinos', 'Proton, neutron, pion, kaon, sigma, lambda'],
    options: ['Up, down, charm, strange, top, bottom', 'Red, green, blue, anti-red, anti-green, anti-blue', 'Electron, muon, tau, and their neutrinos', 'Proton, neutron, pion, kaon, sigma, lambda'],
    explanation: 'There are six quark flavours in three generations: (u,d), (c,s), (t,b).',
    tags: ['quarks', 'flavours'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-part-010',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Leptons',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'The exchange particle for the electromagnetic force is the _____.',
    correctAnswer: 'photon',
    explanation: 'Photons mediate the electromagnetic interaction between charged particles.',
    tags: ['exchange particles', 'forces'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// FIELDS - 15 Questions
// ============================================================================

const fieldsQuestions: Question[] = [
  {
    id: 'phys-al-field-001',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Gravitational',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Gravitational field strength is defined as:',
    correctAnswer: 'Force per unit mass',
    wrongAnswers: ['Force per unit charge', 'Energy per unit mass', 'Mass per unit area'],
    options: ['Force per unit mass', 'Force per unit charge', 'Energy per unit mass', 'Mass per unit area'],
    explanation: 'g = F/m, measured in N/kg or m/s².',
    tags: ['gravitational field', 'definition'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-field-002',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Gravitational',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the gravitational field strength at distance 2R from Earth\'s centre, if g at surface is 10 N/kg.',
    correctAnswer: 2.5,
    explanation: 'g ∝ 1/r². At 2R: g = 10/4 = 2.5 N/kg',
    tags: ['gravitational field', 'inverse square'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-field-003',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Electric',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Electric field strength is defined as:',
    correctAnswer: 'Force per unit positive charge',
    wrongAnswers: ['Force per unit mass', 'Energy per unit charge', 'Charge per unit area'],
    options: ['Force per unit positive charge', 'Force per unit mass', 'Energy per unit charge', 'Charge per unit area'],
    explanation: 'E = F/Q, measured in N/C or V/m.',
    tags: ['electric field', 'definition'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-field-004',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Electric',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the electric field strength between parallel plates 2 cm apart with pd of 100 V. Give answer in V/m.',
    correctAnswer: 5000,
    explanation: 'E = V/d = 100/0.02 = 5000 V/m',
    tags: ['electric field', 'parallel plates'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-field-005',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Magnetic',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The force on a current-carrying wire in a magnetic field is maximum when:',
    correctAnswer: 'The wire is perpendicular to the field',
    wrongAnswers: ['The wire is parallel to the field', 'The wire is at 45° to the field', 'The current is maximum'],
    options: ['The wire is perpendicular to the field', 'The wire is parallel to the field', 'The wire is at 45° to the field', 'The current is maximum'],
    explanation: 'F = BIL sin θ, maximum when θ = 90°.',
    tags: ['magnetic force', 'current'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-field-006',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Gravitational',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'Gravitational potential at a point is the work done per unit _____ in bringing a mass from infinity to that point.',
    correctAnswer: 'mass',
    explanation: 'V = W/m = -GM/r, always negative as work is done by the field.',
    tags: ['gravitational potential', 'definition'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-field-007',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Electric',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The direction of an electric field line shows:',
    correctAnswer: 'The direction a positive test charge would move',
    wrongAnswers: ['The direction a negative charge would move', 'The direction of electron flow', 'The direction of increasing potential'],
    options: ['The direction a positive test charge would move', 'The direction a negative charge would move', 'The direction of electron flow', 'The direction of increasing potential'],
    explanation: 'Field lines point from positive to negative, showing force on a positive test charge.',
    tags: ['electric field', 'field lines'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-field-008',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Magnetic',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A wire of length 0.2 m carrying 5 A is in a magnetic field of 0.4 T at right angles. Calculate the force in N.',
    correctAnswer: 0.4,
    explanation: 'F = BIL = 0.4 × 5 × 0.2 = 0.4 N',
    tags: ['magnetic force', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-field-009',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Gravitational',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Gravitational potential is always negative.',
    correctAnswer: 'True',
    explanation: 'Work must be done against the field to escape to infinity, so potential is defined as negative.',
    tags: ['gravitational potential', 'sign'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-field-010',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Electric',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the force between two charges of +2 μC and -3 μC separated by 0.1 m. (k = 9 × 10⁹ Nm²/C²). Give answer in N.',
    correctAnswer: 5.4,
    explanation: 'F = kQ₁Q₂/r² = 9 × 10⁹ × 2 × 10⁻⁶ × 3 × 10⁻⁶/0.01 = 5.4 N',
    tags: ['Coulomb\'s law', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-field-011',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Magnetic',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the direction of the force on a positive charge moving through a magnetic field?',
    correctAnswer: 'Perpendicular to both velocity and field (use Fleming\'s left-hand rule)',
    wrongAnswers: ['Parallel to the field', 'Opposite to the velocity', 'Along the field lines'],
    options: ['Perpendicular to both velocity and field (use Fleming\'s left-hand rule)', 'Parallel to the field', 'Opposite to the velocity', 'Along the field lines'],
    explanation: 'F = BQv sin θ, direction given by Fleming\'s left-hand rule for conventional current.',
    tags: ['magnetic force', 'direction'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-field-012',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Gravitational',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The escape velocity from a planet depends on:',
    correctAnswer: 'The planet\'s mass and radius',
    wrongAnswers: ['The mass of the escaping object', 'The planet\'s rotation speed', 'The temperature of the planet'],
    options: ['The planet\'s mass and radius', 'The mass of the escaping object', 'The planet\'s rotation speed', 'The temperature of the planet'],
    explanation: 'v = √(2GM/R), independent of the escaping object\'s mass.',
    tags: ['escape velocity', 'gravitational'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-field-013',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Electric',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'Electric potential is the work done per unit _____ in bringing a charge from infinity.',
    correctAnswer: 'charge',
    explanation: 'V = W/Q = kQ/r, can be positive or negative depending on the source charge.',
    tags: ['electric potential', 'definition'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-field-014',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Magnetic',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'An electron (q = 1.6 × 10⁻¹⁹ C) moves at 2 × 10⁷ m/s perpendicular to a 0.5 T field. Calculate the force in N.',
    correctAnswer: 1.6e-12,
    explanation: 'F = BQv = 0.5 × 1.6 × 10⁻¹⁹ × 2 × 10⁷ = 1.6 × 10⁻¹² N',
    tags: ['magnetic force', 'charged particles'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-field-015',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Gravitational',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'For a satellite in circular orbit, the centripetal force is provided by:',
    correctAnswer: 'Gravitational attraction',
    wrongAnswers: ['Rocket thrust', 'The satellite\'s momentum', 'Air resistance'],
    options: ['Gravitational attraction', 'Rocket thrust', 'The satellite\'s momentum', 'Air resistance'],
    explanation: 'Gravity provides the centripetal force: GMm/r² = mv²/r.',
    tags: ['orbital motion', 'satellites'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// NUCLEAR PHYSICS - 10 Questions
// ============================================================================

const nuclearQuestions: Question[] = [
  {
    id: 'phys-al-nucl-001',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Radioactivity',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which radiation has the highest ionising power?',
    correctAnswer: 'Alpha',
    wrongAnswers: ['Beta', 'Gamma', 'Neutron'],
    options: ['Alpha', 'Beta', 'Gamma', 'Neutron'],
    explanation: 'Alpha particles are large and slow, causing many ionisations per unit path length.',
    tags: ['radiation', 'ionisation'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-nucl-002',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Radioactivity',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A sample has activity 800 Bq. After two half-lives, what is the activity in Bq?',
    correctAnswer: 200,
    explanation: 'After each half-life, activity halves: 800 → 400 → 200 Bq',
    tags: ['half-life', 'activity'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-nucl-003',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Mass-Energy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is binding energy?',
    correctAnswer: 'The energy required to separate all nucleons in a nucleus',
    wrongAnswers: ['The energy released in fission', 'The mass of the nucleus', 'The energy holding electrons in an atom'],
    options: ['The energy required to separate all nucleons in a nucleus', 'The energy released in fission', 'The mass of the nucleus', 'The energy holding electrons in an atom'],
    explanation: 'Binding energy = mass defect × c², represents nuclear stability.',
    tags: ['binding energy', 'nucleus'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-nucl-004',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Radioactivity',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'The decay constant λ and half-life T½ are related by T½ = _____/λ.',
    correctAnswer: 'ln2',
    explanation: 'T½ = ln2/λ ≈ 0.693/λ',
    tags: ['decay constant', 'half-life'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-nucl-005',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Mass-Energy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Nuclear fission releases energy because:',
    correctAnswer: 'Products have higher binding energy per nucleon than reactants',
    wrongAnswers: ['Mass is created', 'Electrons are released', 'The nucleus gets heavier'],
    options: ['Products have higher binding energy per nucleon than reactants', 'Mass is created', 'Electrons are released', 'The nucleus gets heavier'],
    explanation: 'Moving to higher binding energy per nucleon releases the mass defect as energy.',
    tags: ['fission', 'binding energy'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-nucl-006',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Radioactivity',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A sample has a decay constant of 0.1 s⁻¹. Calculate the half-life in seconds. (ln2 = 0.693)',
    correctAnswer: 6.93,
    explanation: 'T½ = ln2/λ = 0.693/0.1 = 6.93 s',
    tags: ['half-life', 'decay constant'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-nucl-007',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Mass-Energy',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the energy equivalent of 1 atomic mass unit in MeV. (1 u = 1.66 × 10⁻²⁷ kg, c = 3 × 10⁸ m/s)',
    correctAnswer: 931,
    explanation: 'E = mc² = 1.66 × 10⁻²⁷ × (3 × 10⁸)² = 1.49 × 10⁻¹⁰ J = 931 MeV',
    tags: ['mass-energy', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-nucl-008',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Radioactivity',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which statement about gamma radiation is correct?',
    correctAnswer: 'It has no charge and no mass',
    wrongAnswers: ['It has charge +2 and mass 4', 'It has charge -1 and mass 0', 'It has charge 0 and mass 1'],
    options: ['It has no charge and no mass', 'It has charge +2 and mass 4', 'It has charge -1 and mass 0', 'It has charge 0 and mass 1'],
    explanation: 'Gamma rays are electromagnetic radiation - photons with no charge or rest mass.',
    tags: ['gamma', 'properties'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-nucl-009',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Mass-Energy',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Nuclear fusion requires very high temperatures to overcome electrostatic repulsion.',
    correctAnswer: 'True',
    explanation: 'High kinetic energy is needed for nuclei to get close enough for the strong force to act.',
    tags: ['fusion', 'conditions'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-al-nucl-010',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Radioactivity',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In alpha decay, the mass number decreases by:',
    correctAnswer: '4',
    wrongAnswers: ['0', '1', '2'],
    options: ['4', '0', '1', '2'],
    explanation: 'An alpha particle (helium nucleus) has mass number 4 and atomic number 2.',
    tags: ['alpha decay', 'changes'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// TERM DEFINITIONS - 25 Terms
// ============================================================================

export const alevelPhysicsTerms: TermDefinition[] = [
  {
    id: 'phys-al-term-001',
    subject: 'physics',
    topic: 'Mechanics',
    difficulty: 'alevel',
    term: 'Displacement',
    definition: 'The distance moved in a specified direction from a reference point',
    example: 'Walking 5 km north gives a displacement of 5 km north',
    tags: ['kinematics', 'vectors']
  },
  {
    id: 'phys-al-term-002',
    subject: 'physics',
    topic: 'Mechanics',
    difficulty: 'alevel',
    term: 'Momentum',
    definition: 'The product of an object\'s mass and velocity (p = mv)',
    example: 'A 2 kg ball moving at 3 m/s has momentum 6 kg m/s',
    tags: ['momentum', 'conservation']
  },
  {
    id: 'phys-al-term-003',
    subject: 'physics',
    topic: 'Mechanics',
    difficulty: 'alevel',
    term: 'Impulse',
    definition: 'The change in momentum of an object, equal to force multiplied by time',
    example: 'A force of 10 N acting for 2 s gives an impulse of 20 Ns',
    tags: ['impulse', 'momentum']
  },
  {
    id: 'phys-al-term-004',
    subject: 'physics',
    topic: 'Electric Circuits',
    difficulty: 'alevel',
    term: 'Electromotive force (EMF)',
    definition: 'The energy transferred per unit charge by a source in driving charge around a complete circuit',
    example: 'A 12 V battery has EMF of 12 J/C',
    tags: ['EMF', 'circuits']
  },
  {
    id: 'phys-al-term-005',
    subject: 'physics',
    topic: 'Electric Circuits',
    difficulty: 'alevel',
    term: 'Internal resistance',
    definition: 'The resistance to current flow within the source itself',
    example: 'A cell with 1 Ω internal resistance loses voltage when current flows',
    tags: ['resistance', 'EMF']
  },
  {
    id: 'phys-al-term-006',
    subject: 'physics',
    topic: 'Waves',
    difficulty: 'alevel',
    term: 'Coherence',
    definition: 'When two sources have a constant phase relationship and the same frequency',
    example: 'Two slits illuminated by the same laser are coherent sources',
    tags: ['coherence', 'interference']
  },
  {
    id: 'phys-al-term-007',
    subject: 'physics',
    topic: 'Waves',
    difficulty: 'alevel',
    term: 'Path difference',
    definition: 'The difference in distance travelled by two waves from their sources to a point',
    example: 'Path difference of λ gives constructive interference',
    tags: ['path difference', 'interference']
  },
  {
    id: 'phys-al-term-008',
    subject: 'physics',
    topic: 'Quantum Physics',
    difficulty: 'alevel',
    term: 'Photon',
    definition: 'A quantum of electromagnetic radiation with energy E = hf',
    example: 'Blue light photons have more energy than red light photons',
    tags: ['photon', 'quantum']
  },
  {
    id: 'phys-al-term-009',
    subject: 'physics',
    topic: 'Quantum Physics',
    difficulty: 'alevel',
    term: 'Work function',
    definition: 'The minimum energy needed to remove an electron from a metal surface',
    example: 'Caesium has a low work function of about 2 eV',
    tags: ['photoelectric', 'work function']
  },
  {
    id: 'phys-al-term-010',
    subject: 'physics',
    topic: 'Quantum Physics',
    difficulty: 'alevel',
    term: 'Threshold frequency',
    definition: 'The minimum frequency of light needed to cause photoelectric emission',
    example: 'Below threshold frequency, no electrons are emitted regardless of intensity',
    tags: ['photoelectric', 'threshold']
  },
  {
    id: 'phys-al-term-011',
    subject: 'physics',
    topic: 'Particle Physics',
    difficulty: 'alevel',
    term: 'Hadron',
    definition: 'A particle made of quarks that experiences the strong nuclear force',
    example: 'Protons and neutrons are hadrons',
    tags: ['hadrons', 'quarks']
  },
  {
    id: 'phys-al-term-012',
    subject: 'physics',
    topic: 'Particle Physics',
    difficulty: 'alevel',
    term: 'Lepton',
    definition: 'A fundamental particle that does not experience the strong nuclear force',
    example: 'Electrons and neutrinos are leptons',
    tags: ['leptons', 'particles']
  },
  {
    id: 'phys-al-term-013',
    subject: 'physics',
    topic: 'Particle Physics',
    difficulty: 'alevel',
    term: 'Baryon',
    definition: 'A hadron made of three quarks',
    example: 'Protons (uud) and neutrons (udd) are baryons',
    tags: ['baryons', 'quarks']
  },
  {
    id: 'phys-al-term-014',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    term: 'Gravitational field strength',
    definition: 'The gravitational force per unit mass at a point in space',
    example: 'On Earth\'s surface, g ≈ 9.81 N/kg',
    tags: ['gravitational', 'field strength']
  },
  {
    id: 'phys-al-term-015',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    term: 'Electric field strength',
    definition: 'The electrostatic force per unit positive charge at a point in space',
    example: 'Between parallel plates: E = V/d',
    tags: ['electric', 'field strength']
  },
  {
    id: 'phys-al-term-016',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    term: 'Gravitational potential',
    definition: 'The work done per unit mass in bringing a mass from infinity to that point',
    example: 'Gravitational potential is always negative near a mass',
    tags: ['gravitational', 'potential']
  },
  {
    id: 'phys-al-term-017',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    term: 'Electric potential',
    definition: 'The work done per unit positive charge in bringing a charge from infinity',
    example: 'V = kQ/r for a point charge',
    tags: ['electric', 'potential']
  },
  {
    id: 'phys-al-term-018',
    subject: 'physics',
    topic: 'Nuclear Physics',
    difficulty: 'alevel',
    term: 'Half-life',
    definition: 'The time taken for half the radioactive nuclei to decay',
    example: 'Carbon-14 has a half-life of 5730 years',
    tags: ['radioactivity', 'decay']
  },
  {
    id: 'phys-al-term-019',
    subject: 'physics',
    topic: 'Nuclear Physics',
    difficulty: 'alevel',
    term: 'Binding energy',
    definition: 'The energy required to completely separate all nucleons in a nucleus',
    example: 'Iron-56 has the highest binding energy per nucleon',
    tags: ['nuclear', 'energy']
  },
  {
    id: 'phys-al-term-020',
    subject: 'physics',
    topic: 'Nuclear Physics',
    difficulty: 'alevel',
    term: 'Mass defect',
    definition: 'The difference between the mass of a nucleus and the sum of its individual nucleons',
    example: 'Mass defect is converted to binding energy via E = mc²',
    tags: ['nuclear', 'mass-energy']
  },
  {
    id: 'phys-al-term-021',
    subject: 'physics',
    topic: 'Waves',
    difficulty: 'alevel',
    term: 'Superposition',
    definition: 'When two or more waves meet, the resultant displacement is the vector sum of individual displacements',
    example: 'Two waves of amplitude A can combine to give amplitude 2A or 0',
    tags: ['superposition', 'waves']
  },
  {
    id: 'phys-al-term-022',
    subject: 'physics',
    topic: 'Mechanics',
    difficulty: 'alevel',
    term: 'Centre of mass',
    definition: 'The point where the entire mass of a body can be considered to act',
    example: 'For a uniform sphere, centre of mass is at the geometric centre',
    tags: ['mechanics', 'equilibrium']
  },
  {
    id: 'phys-al-term-023',
    subject: 'physics',
    topic: 'Electric Circuits',
    difficulty: 'alevel',
    term: 'Resistivity',
    definition: 'A material property that determines resistance for a given geometry (ρ = RA/L)',
    example: 'Copper has low resistivity (1.7 × 10⁻⁸ Ωm), making it a good conductor',
    tags: ['resistance', 'materials']
  },
  {
    id: 'phys-al-term-024',
    subject: 'physics',
    topic: 'Quantum Physics',
    difficulty: 'alevel',
    term: 'de Broglie wavelength',
    definition: 'The wavelength associated with a moving particle (λ = h/p)',
    example: 'Fast electrons have shorter de Broglie wavelengths',
    tags: ['wave-particle', 'quantum']
  },
  {
    id: 'phys-al-term-025',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    term: 'Equipotential',
    definition: 'A line or surface where all points have the same potential',
    example: 'Equipotentials are always perpendicular to field lines',
    tags: ['fields', 'potential']
  }
];

// ============================================================================
// FORMULAS - 30 Formulas
// ============================================================================

export const alevelPhysicsFormulas: Formula[] = [
  {
    id: 'phys-al-form-001',
    subject: 'physics',
    topic: 'Mechanics',
    difficulty: 'alevel',
    name: 'SUVAT equation (velocity)',
    formula: 'v = u + at',
    variables: [
      { symbol: 'v', meaning: 'final velocity (m/s)' },
      { symbol: 'u', meaning: 'initial velocity (m/s)' },
      { symbol: 'a', meaning: 'acceleration (m/s²)' },
      { symbol: 't', meaning: 'time (s)' }
    ],
    units: 'm/s',
    example: 'A car accelerating from 10 m/s at 2 m/s² for 5 s reaches v = 10 + 2×5 = 20 m/s'
  },
  {
    id: 'phys-al-form-002',
    subject: 'physics',
    topic: 'Mechanics',
    difficulty: 'alevel',
    name: 'SUVAT equation (displacement)',
    formula: 's = ut + ½at²',
    variables: [
      { symbol: 's', meaning: 'displacement (m)' },
      { symbol: 'u', meaning: 'initial velocity (m/s)' },
      { symbol: 'a', meaning: 'acceleration (m/s²)' },
      { symbol: 't', meaning: 'time (s)' }
    ],
    units: 'm',
    example: 'Free fall from rest for 2 s: s = 0 + ½×10×4 = 20 m'
  },
  {
    id: 'phys-al-form-003',
    subject: 'physics',
    topic: 'Mechanics',
    difficulty: 'alevel',
    name: 'SUVAT equation (velocity squared)',
    formula: 'v² = u² + 2as',
    variables: [
      { symbol: 'v', meaning: 'final velocity (m/s)' },
      { symbol: 'u', meaning: 'initial velocity (m/s)' },
      { symbol: 'a', meaning: 'acceleration (m/s²)' },
      { symbol: 's', meaning: 'displacement (m)' }
    ],
    units: 'm²/s²',
    example: 'Object falling 5 m from rest: v² = 0 + 2×10×5 = 100, v = 10 m/s'
  },
  {
    id: 'phys-al-form-004',
    subject: 'physics',
    topic: 'Mechanics',
    difficulty: 'alevel',
    name: 'Newton\'s Second Law',
    formula: 'F = ma',
    variables: [
      { symbol: 'F', meaning: 'resultant force (N)' },
      { symbol: 'm', meaning: 'mass (kg)' },
      { symbol: 'a', meaning: 'acceleration (m/s²)' }
    ],
    units: 'N',
    example: 'A 10 kg mass with acceleration 3 m/s² has force F = 10×3 = 30 N'
  },
  {
    id: 'phys-al-form-005',
    subject: 'physics',
    topic: 'Mechanics',
    difficulty: 'alevel',
    name: 'Kinetic energy',
    formula: 'KE = ½mv²',
    variables: [
      { symbol: 'KE', meaning: 'kinetic energy (J)' },
      { symbol: 'm', meaning: 'mass (kg)' },
      { symbol: 'v', meaning: 'velocity (m/s)' }
    ],
    units: 'J',
    example: 'A 2 kg mass at 4 m/s has KE = ½×2×16 = 16 J'
  },
  {
    id: 'phys-al-form-006',
    subject: 'physics',
    topic: 'Mechanics',
    difficulty: 'alevel',
    name: 'Gravitational potential energy',
    formula: 'GPE = mgh',
    variables: [
      { symbol: 'GPE', meaning: 'gravitational potential energy (J)' },
      { symbol: 'm', meaning: 'mass (kg)' },
      { symbol: 'g', meaning: 'gravitational field strength (N/kg)' },
      { symbol: 'h', meaning: 'height (m)' }
    ],
    units: 'J',
    example: 'A 5 kg mass at 10 m has GPE = 5×10×10 = 500 J'
  },
  {
    id: 'phys-al-form-007',
    subject: 'physics',
    topic: 'Mechanics',
    difficulty: 'alevel',
    name: 'Momentum',
    formula: 'p = mv',
    variables: [
      { symbol: 'p', meaning: 'momentum (kg m/s)' },
      { symbol: 'm', meaning: 'mass (kg)' },
      { symbol: 'v', meaning: 'velocity (m/s)' }
    ],
    units: 'kg m/s',
    example: 'A 3 kg object at 5 m/s has momentum p = 3×5 = 15 kg m/s'
  },
  {
    id: 'phys-al-form-008',
    subject: 'physics',
    topic: 'Electric Circuits',
    difficulty: 'alevel',
    name: 'Ohm\'s Law',
    formula: 'V = IR',
    variables: [
      { symbol: 'V', meaning: 'potential difference (V)' },
      { symbol: 'I', meaning: 'current (A)' },
      { symbol: 'R', meaning: 'resistance (Ω)' }
    ],
    units: 'V',
    example: 'A 2 A current through 5 Ω gives V = 2×5 = 10 V'
  },
  {
    id: 'phys-al-form-009',
    subject: 'physics',
    topic: 'Electric Circuits',
    difficulty: 'alevel',
    name: 'Electrical power',
    formula: 'P = IV = I²R = V²/R',
    variables: [
      { symbol: 'P', meaning: 'power (W)' },
      { symbol: 'I', meaning: 'current (A)' },
      { symbol: 'V', meaning: 'potential difference (V)' },
      { symbol: 'R', meaning: 'resistance (Ω)' }
    ],
    units: 'W',
    example: '3 A through 4 Ω: P = 3² × 4 = 36 W'
  },
  {
    id: 'phys-al-form-010',
    subject: 'physics',
    topic: 'Electric Circuits',
    difficulty: 'alevel',
    name: 'Resistivity',
    formula: 'R = ρL/A',
    variables: [
      { symbol: 'R', meaning: 'resistance (Ω)' },
      { symbol: 'ρ', meaning: 'resistivity (Ωm)' },
      { symbol: 'L', meaning: 'length (m)' },
      { symbol: 'A', meaning: 'cross-sectional area (m²)' }
    ],
    units: 'Ω',
    example: 'A 2 m wire with ρ = 10⁻⁸ Ωm and A = 10⁻⁶ m² has R = 0.02 Ω'
  },
  {
    id: 'phys-al-form-011',
    subject: 'physics',
    topic: 'Electric Circuits',
    difficulty: 'alevel',
    name: 'EMF equation',
    formula: 'ε = I(R + r)',
    variables: [
      { symbol: 'ε', meaning: 'EMF (V)' },
      { symbol: 'I', meaning: 'current (A)' },
      { symbol: 'R', meaning: 'external resistance (Ω)' },
      { symbol: 'r', meaning: 'internal resistance (Ω)' }
    ],
    units: 'V',
    example: 'EMF = 12 V, R = 4 Ω, r = 2 Ω gives I = 12/6 = 2 A'
  },
  {
    id: 'phys-al-form-012',
    subject: 'physics',
    topic: 'Waves',
    difficulty: 'alevel',
    name: 'Wave equation',
    formula: 'v = fλ',
    variables: [
      { symbol: 'v', meaning: 'wave speed (m/s)' },
      { symbol: 'f', meaning: 'frequency (Hz)' },
      { symbol: 'λ', meaning: 'wavelength (m)' }
    ],
    units: 'm/s',
    example: 'A 500 Hz wave with λ = 0.6 m has speed v = 500×0.6 = 300 m/s'
  },
  {
    id: 'phys-al-form-013',
    subject: 'physics',
    topic: 'Waves',
    difficulty: 'alevel',
    name: 'Young\'s double slit',
    formula: 'w = λD/d',
    variables: [
      { symbol: 'w', meaning: 'fringe spacing (m)' },
      { symbol: 'λ', meaning: 'wavelength (m)' },
      { symbol: 'D', meaning: 'screen distance (m)' },
      { symbol: 'd', meaning: 'slit separation (m)' }
    ],
    units: 'm',
    example: 'λ = 600 nm, D = 1 m, d = 0.5 mm gives w = 1.2 mm'
  },
  {
    id: 'phys-al-form-014',
    subject: 'physics',
    topic: 'Waves',
    difficulty: 'alevel',
    name: 'Diffraction grating',
    formula: 'd sin θ = nλ',
    variables: [
      { symbol: 'd', meaning: 'grating spacing (m)' },
      { symbol: 'θ', meaning: 'angle of diffraction (degrees)' },
      { symbol: 'n', meaning: 'order number' },
      { symbol: 'λ', meaning: 'wavelength (m)' }
    ],
    units: 'm',
    example: 'For first order (n=1) with λ = 500 nm and d = 2 μm: sin θ = 0.25, θ = 14.5°'
  },
  {
    id: 'phys-al-form-015',
    subject: 'physics',
    topic: 'Quantum Physics',
    difficulty: 'alevel',
    name: 'Photon energy',
    formula: 'E = hf = hc/λ',
    variables: [
      { symbol: 'E', meaning: 'photon energy (J)' },
      { symbol: 'h', meaning: 'Planck constant (6.63 × 10⁻³⁴ Js)' },
      { symbol: 'f', meaning: 'frequency (Hz)' },
      { symbol: 'λ', meaning: 'wavelength (m)' }
    ],
    units: 'J',
    example: 'A photon of λ = 500 nm has E = 3.98 × 10⁻¹⁹ J = 2.5 eV'
  },
  {
    id: 'phys-al-form-016',
    subject: 'physics',
    topic: 'Quantum Physics',
    difficulty: 'alevel',
    name: 'Photoelectric equation',
    formula: 'hf = φ + KEmax',
    variables: [
      { symbol: 'hf', meaning: 'photon energy (J)' },
      { symbol: 'φ', meaning: 'work function (J)' },
      { symbol: 'KEmax', meaning: 'maximum kinetic energy of electron (J)' }
    ],
    units: 'J',
    example: 'If hf = 4 eV and φ = 2 eV, then KEmax = 2 eV'
  },
  {
    id: 'phys-al-form-017',
    subject: 'physics',
    topic: 'Quantum Physics',
    difficulty: 'alevel',
    name: 'de Broglie wavelength',
    formula: 'λ = h/p = h/mv',
    variables: [
      { symbol: 'λ', meaning: 'de Broglie wavelength (m)' },
      { symbol: 'h', meaning: 'Planck constant (Js)' },
      { symbol: 'p', meaning: 'momentum (kg m/s)' },
      { symbol: 'm', meaning: 'mass (kg)' },
      { symbol: 'v', meaning: 'velocity (m/s)' }
    ],
    units: 'm',
    example: 'An electron at 10⁶ m/s has λ ≈ 0.7 nm'
  },
  {
    id: 'phys-al-form-018',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    name: 'Newton\'s law of gravitation',
    formula: 'F = GMm/r²',
    variables: [
      { symbol: 'F', meaning: 'gravitational force (N)' },
      { symbol: 'G', meaning: 'gravitational constant (6.67 × 10⁻¹¹ Nm²/kg²)' },
      { symbol: 'M', meaning: 'mass 1 (kg)' },
      { symbol: 'm', meaning: 'mass 2 (kg)' },
      { symbol: 'r', meaning: 'separation (m)' }
    ],
    units: 'N',
    example: 'Force between Earth and Moon uses masses and orbital radius'
  },
  {
    id: 'phys-al-form-019',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    name: 'Gravitational field strength',
    formula: 'g = GM/r²',
    variables: [
      { symbol: 'g', meaning: 'gravitational field strength (N/kg)' },
      { symbol: 'G', meaning: 'gravitational constant (Nm²/kg²)' },
      { symbol: 'M', meaning: 'mass (kg)' },
      { symbol: 'r', meaning: 'distance from centre (m)' }
    ],
    units: 'N/kg',
    example: 'At Earth\'s surface: g = 9.81 N/kg'
  },
  {
    id: 'phys-al-form-020',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    name: 'Gravitational potential',
    formula: 'V = -GM/r',
    variables: [
      { symbol: 'V', meaning: 'gravitational potential (J/kg)' },
      { symbol: 'G', meaning: 'gravitational constant (Nm²/kg²)' },
      { symbol: 'M', meaning: 'mass (kg)' },
      { symbol: 'r', meaning: 'distance from centre (m)' }
    ],
    units: 'J/kg',
    example: 'Potential is always negative, approaching zero at infinity'
  },
  {
    id: 'phys-al-form-021',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    name: 'Coulomb\'s law',
    formula: 'F = kQ₁Q₂/r²',
    variables: [
      { symbol: 'F', meaning: 'electrostatic force (N)' },
      { symbol: 'k', meaning: 'Coulomb constant (8.99 × 10⁹ Nm²/C²)' },
      { symbol: 'Q₁', meaning: 'charge 1 (C)' },
      { symbol: 'Q₂', meaning: 'charge 2 (C)' },
      { symbol: 'r', meaning: 'separation (m)' }
    ],
    units: 'N',
    example: 'Two 1 μC charges 0.1 m apart: F = 0.9 N'
  },
  {
    id: 'phys-al-form-022',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    name: 'Electric field (point charge)',
    formula: 'E = kQ/r²',
    variables: [
      { symbol: 'E', meaning: 'electric field strength (N/C)' },
      { symbol: 'k', meaning: 'Coulomb constant (Nm²/C²)' },
      { symbol: 'Q', meaning: 'charge (C)' },
      { symbol: 'r', meaning: 'distance (m)' }
    ],
    units: 'N/C or V/m',
    example: 'E decreases with the square of distance from the charge'
  },
  {
    id: 'phys-al-form-023',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    name: 'Electric field (uniform)',
    formula: 'E = V/d',
    variables: [
      { symbol: 'E', meaning: 'electric field strength (V/m)' },
      { symbol: 'V', meaning: 'potential difference (V)' },
      { symbol: 'd', meaning: 'plate separation (m)' }
    ],
    units: 'V/m',
    example: '1000 V across 2 cm gives E = 50000 V/m'
  },
  {
    id: 'phys-al-form-024',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    name: 'Magnetic force on wire',
    formula: 'F = BIL sin θ',
    variables: [
      { symbol: 'F', meaning: 'force (N)' },
      { symbol: 'B', meaning: 'magnetic flux density (T)' },
      { symbol: 'I', meaning: 'current (A)' },
      { symbol: 'L', meaning: 'length of wire (m)' },
      { symbol: 'θ', meaning: 'angle between wire and field' }
    ],
    units: 'N',
    example: 'A 0.5 m wire carrying 3 A in 0.2 T field (perpendicular): F = 0.3 N'
  },
  {
    id: 'phys-al-form-025',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    name: 'Magnetic force on moving charge',
    formula: 'F = BQv sin θ',
    variables: [
      { symbol: 'F', meaning: 'force (N)' },
      { symbol: 'B', meaning: 'magnetic flux density (T)' },
      { symbol: 'Q', meaning: 'charge (C)' },
      { symbol: 'v', meaning: 'velocity (m/s)' },
      { symbol: 'θ', meaning: 'angle between velocity and field' }
    ],
    units: 'N',
    example: 'Electron at 10⁶ m/s in 0.1 T field: F = 1.6 × 10⁻¹⁴ N'
  },
  {
    id: 'phys-al-form-026',
    subject: 'physics',
    topic: 'Nuclear Physics',
    difficulty: 'alevel',
    name: 'Radioactive decay law',
    formula: 'N = N₀e^(-λt)',
    variables: [
      { symbol: 'N', meaning: 'number of nuclei remaining' },
      { symbol: 'N₀', meaning: 'initial number of nuclei' },
      { symbol: 'λ', meaning: 'decay constant (s⁻¹)' },
      { symbol: 't', meaning: 'time (s)' }
    ],
    units: 'nuclei',
    example: 'After one half-life: N = N₀e^(-0.693) = 0.5N₀'
  },
  {
    id: 'phys-al-form-027',
    subject: 'physics',
    topic: 'Nuclear Physics',
    difficulty: 'alevel',
    name: 'Half-life equation',
    formula: 'T½ = ln2/λ',
    variables: [
      { symbol: 'T½', meaning: 'half-life (s)' },
      { symbol: 'λ', meaning: 'decay constant (s⁻¹)' }
    ],
    units: 's',
    example: 'If λ = 0.01 s⁻¹, then T½ = 69.3 s'
  },
  {
    id: 'phys-al-form-028',
    subject: 'physics',
    topic: 'Nuclear Physics',
    difficulty: 'alevel',
    name: 'Activity',
    formula: 'A = λN',
    variables: [
      { symbol: 'A', meaning: 'activity (Bq)' },
      { symbol: 'λ', meaning: 'decay constant (s⁻¹)' },
      { symbol: 'N', meaning: 'number of nuclei' }
    ],
    units: 'Bq',
    example: 'If N = 10⁶ and λ = 10⁻³ s⁻¹, then A = 1000 Bq'
  },
  {
    id: 'phys-al-form-029',
    subject: 'physics',
    topic: 'Nuclear Physics',
    difficulty: 'alevel',
    name: 'Mass-energy equivalence',
    formula: 'E = mc²',
    variables: [
      { symbol: 'E', meaning: 'energy (J)' },
      { symbol: 'm', meaning: 'mass (kg)' },
      { symbol: 'c', meaning: 'speed of light (3 × 10⁸ m/s)' }
    ],
    units: 'J',
    example: '1 kg of mass is equivalent to 9 × 10¹⁶ J of energy'
  },
  {
    id: 'phys-al-form-030',
    subject: 'physics',
    topic: 'Mechanics',
    difficulty: 'alevel',
    name: 'Centripetal acceleration',
    formula: 'a = v²/r = ω²r',
    variables: [
      { symbol: 'a', meaning: 'centripetal acceleration (m/s²)' },
      { symbol: 'v', meaning: 'linear velocity (m/s)' },
      { symbol: 'r', meaning: 'radius (m)' },
      { symbol: 'ω', meaning: 'angular velocity (rad/s)' }
    ],
    units: 'm/s²',
    example: 'Object at 10 m/s in circle of radius 5 m: a = 100/5 = 20 m/s²'
  }
];

// ============================================================================
// COMBINED EXPORT
// ============================================================================

export const alevelPhysicsQuestions: Question[] = [
  ...mechanicsQuestions,
  ...electricCircuitsQuestions,
  ...wavesQuestions,
  ...quantumQuestions,
  ...particleQuestions,
  ...fieldsQuestions,
  ...nuclearQuestions
];
