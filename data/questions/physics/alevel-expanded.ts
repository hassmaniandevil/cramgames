/**
 * A-Level Physics Expanded Question Bank
 * Fun-first gamified questions for advanced physics
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================
// MECHANICS
// ============================================

export const alevelPhysicsMechanics: Question[] = [
  {
    id: 'phys-alevel-exp-mech-001',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Circular Motion',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A car goes around a circular track at constant speed. Is it accelerating?',
    correctAnswer: 'Yes - velocity direction changes, so there\'s centripetal acceleration',
    wrongAnswers: ['No - speed is constant', 'Only if the driver brakes', 'Only on a banked track'],
    explanation: 'Acceleration is change in velocity (speed AND direction). Constant speed but changing direction = acceleration toward the center. That\'s centripetal acceleration!',
    hint: 'Velocity is a vector - direction matters',
    tags: ['mechanics', 'circular motion', 'acceleration'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp-mech-002',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Circular Motion',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A satellite orbits Earth at constant speed. The centripetal force is provided by...',
    correctAnswer: 'Gravity',
    wrongAnswers: ['Rocket thrusters', 'Air resistance', 'Magnetic force'],
    explanation: 'No rockets needed once in orbit! Gravity constantly pulls the satellite toward Earth\'s center, providing the centripetal force. The satellite is essentially "falling" around Earth.',
    hint: 'What force acts on objects near Earth?',
    tags: ['mechanics', 'circular motion', 'gravity'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp-mech-003',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Simple Harmonic Motion',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'For simple harmonic motion, acceleration is always...',
    correctAnswer: 'Proportional to displacement and directed toward equilibrium',
    wrongAnswers: ['Constant throughout', 'Zero at maximum displacement', 'Maximum at equilibrium'],
    explanation: 'SHM definition: a = -ω²x. Acceleration is proportional to displacement but opposite in direction. Maximum acceleration at maximum displacement, zero at equilibrium.',
    hint: 'Think about a pendulum - where does it accelerate most?',
    tags: ['mechanics', 'SHM', 'acceleration'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp-mech-004',
    subject: 'physics',
    topic: 'Mechanics',
    subtopic: 'Simple Harmonic Motion',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The period of a simple pendulum depends on...',
    correctAnswer: 'Length and gravitational field strength (T = 2π√(l/g))',
    wrongAnswers: ['Mass of the bob', 'Amplitude of swing', 'Material of the string'],
    explanation: 'T = 2π√(l/g). Period only depends on length and g. That\'s why grandfather clocks work! Mass doesn\'t matter - Galileo discovered this.',
    hint: 'The formula doesn\'t include mass or amplitude',
    tags: ['mechanics', 'SHM', 'pendulum'],
    yearGroup: [12, 13]
  },

  // FIELDS
  {
    id: 'phys-alevel-exp-field-001',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Gravitational Fields',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Gravitational field strength g decreases with altitude. At what height is g half its surface value?',
    correctAnswer: 'About 2,640 km (where r = √2 × Earth\'s radius)',
    wrongAnswers: ['Half Earth\'s radius', 'Earth\'s radius', 'At the Moon\'s orbit'],
    explanation: 'g ∝ 1/r². For g to halve, r² must double, so r = √2 × R. √2 × 6371 = 9010 km from center = 2640 km above surface. The inverse square law!',
    hint: 'Use the inverse square relationship: g ∝ 1/r²',
    tags: ['fields', 'gravity', 'inverse square'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp-field-002',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Electric Fields',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The electric field between two parallel plates is uniform. This means...',
    correctAnswer: 'Field strength is the same at all points between the plates',
    wrongAnswers: ['Field lines are curved', 'Only positive charges feel force', 'The field only exists at the plates'],
    explanation: 'Uniform field = same strength and direction everywhere. E = V/d is constant. This is why we use parallel plates for particle accelerators - predictable force!',
    hint: 'Look at the field line pattern between parallel plates',
    tags: ['fields', 'electric', 'uniform'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp-field-003',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Electric Fields',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Electric potential is zero at infinity. What does this mean for potential near a positive charge?',
    correctAnswer: 'Potential is positive and increases as you approach the charge',
    wrongAnswers: ['Potential is negative', 'Potential is always zero', 'Potential decreases toward the charge'],
    explanation: 'V = kQ/r for a point charge. Positive Q gives positive V. As r decreases, V increases. Work is done on a positive test charge to bring it closer.',
    hint: 'Think about the work needed to bring charges together',
    tags: ['fields', 'electric', 'potential'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp-field-004',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Magnetic Fields',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A charged particle enters a magnetic field perpendicular to B. The particle will...',
    correctAnswer: 'Move in a circular path (force always perpendicular to velocity)',
    wrongAnswers: ['Accelerate in a straight line', 'Stop immediately', 'Spiral outward'],
    explanation: 'F = BQv acts perpendicular to both B and v. This force constantly changes direction of v but not speed. Result: circular motion!',
    hint: 'What happens when force is always perpendicular to velocity?',
    tags: ['fields', 'magnetic', 'circular motion'],
    yearGroup: [12, 13]
  },

  // NUCLEAR PHYSICS
  {
    id: 'phys-alevel-exp-nuc-001',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Binding Energy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Iron-56 has the highest binding energy per nucleon. What does this mean?',
    correctAnswer: 'Iron is the most stable nucleus - hardest to break apart per nucleon',
    wrongAnswers: ['Iron is the heaviest element', 'Iron is radioactive', 'Iron releases most energy in fission'],
    explanation: 'High binding energy per nucleon = very stable. That\'s why both fusion (light elements → Fe) and fission (heavy elements → Fe) release energy. Iron is the nuclear "bottom of the hill."',
    hint: 'Think about what it means to be "well bound"',
    tags: ['nuclear', 'binding energy', 'stability'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp-nuc-002',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Mass-Energy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In nuclear reactions, mass is not conserved. Where does the "missing" mass go?',
    correctAnswer: 'Converted to energy (E = mc²)',
    wrongAnswers: ['Absorbed by neutrinos', 'Lost to the surroundings', 'It\'s a measurement error'],
    explanation: 'Mass and energy are equivalent! The mass difference (mass defect) becomes kinetic energy of products, gamma rays, etc. Small mass = huge energy because c² is enormous.',
    hint: 'Einstein\'s most famous equation explains this',
    tags: ['nuclear', 'mass-energy', 'E=mc²'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp-nuc-003',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Fission and Fusion',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why is nuclear fusion harder to achieve than fission?',
    correctAnswer: 'Nuclei must overcome electrostatic repulsion to get close enough',
    wrongAnswers: ['Fusion releases less energy', 'We don\'t have fusion fuels', 'Fusion produces too much radiation'],
    explanation: 'Protons repel each other! For fusion, nuclei need extreme temperatures (millions of degrees) to have enough kinetic energy to overcome this Coulomb barrier. That\'s why the Sun is hot!',
    hint: 'What force acts between two positive charges?',
    tags: ['nuclear', 'fusion', 'Coulomb barrier'],
    yearGroup: [12, 13]
  },

  // QUANTUM PHYSICS
  {
    id: 'phys-alevel-exp-quant-001',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In the photoelectric effect, increasing light intensity does NOT increase max electron KE. Why?',
    correctAnswer: 'Each photon gives one electron energy hf; intensity just changes photon number',
    wrongAnswers: ['More photons share the energy', 'Electrons can only absorb so much', 'The metal gets saturated'],
    explanation: 'One photon ejects one electron. More photons = more electrons, but each electron still gets energy hf. Max KE = hf - φ depends only on frequency, not intensity!',
    hint: 'Think about what one photon does to one electron',
    tags: ['quantum', 'photoelectric', 'photons'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp-quant-002',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Wave-Particle Duality',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The de Broglie wavelength of a particle is λ = h/p. What happens to λ as a particle speeds up?',
    correctAnswer: 'λ decreases (higher momentum = shorter wavelength)',
    wrongAnswers: ['λ increases', 'λ stays the same', 'λ becomes zero'],
    explanation: 'λ = h/p = h/mv. As v increases, p increases, so λ decreases. Fast particles have very short wavelengths - that\'s why electron microscopes work!',
    hint: 'Wavelength is inversely proportional to momentum',
    tags: ['quantum', 'de Broglie', 'wave-particle'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp-quant-003',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Energy Levels',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Hydrogen atoms emit light at specific wavelengths (line spectrum). This is because...',
    correctAnswer: 'Electrons can only occupy specific energy levels',
    wrongAnswers: ['Hydrogen has one electron', 'White light is filtered', 'Atoms emit all wavelengths'],
    explanation: 'Energy levels are quantised! Electrons jump between levels, emitting photons with E = hf = E₂ - E₁. Specific energy differences = specific frequencies = lines not a continuous spectrum.',
    hint: 'Quantised means "only certain values allowed"',
    tags: ['quantum', 'energy levels', 'spectra'],
    yearGroup: [12, 13]
  },

  // PARTICLE PHYSICS
  {
    id: 'phys-alevel-exp-part-001',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Quarks',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A proton is made of uud quarks. What is a neutron made of?',
    correctAnswer: 'udd (up, down, down)',
    wrongAnswers: ['uuu', 'ddd', 'udd'],
    explanation: 'Up quark: +⅔e. Down quark: -⅓e. Proton (uud): +⅔ +⅔ -⅓ = +1e. Neutron (udd): +⅔ -⅓ -⅓ = 0. The quark model explains charges perfectly!',
    hint: 'Neutron is neutral (charge = 0). Do the maths with quark charges.',
    tags: ['particles', 'quarks', 'standard model'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp-part-002',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Conservation Laws',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In beta-minus decay, a neutron becomes a proton. What else is produced?',
    correctAnswer: 'Electron and antineutrino (to conserve charge and lepton number)',
    wrongAnswers: ['Just an electron', 'Positron and neutrino', 'Two electrons'],
    explanation: 'n → p + e⁻ + ν̄ₑ. Charge: 0 → +1 + (-1) + 0 ✓. Lepton number: 0 → 0 + 1 + (-1) ✓. The antineutrino was predicted before discovery!',
    hint: 'Both charge and lepton number must be conserved',
    tags: ['particles', 'decay', 'conservation'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp-part-003',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Forces',
    difficulty: 'alevel',
    type: 'match',
    question: 'Match each force to its exchange particle:',
    correctAnswer: ['Electromagnetic → Photon', 'Strong nuclear → Gluon', 'Weak nuclear → W and Z bosons'],
    wrongAnswers: [],
    explanation: 'Forces are mediated by exchange particles! EM uses massless photons (infinite range). Strong uses gluons (short range, holds nucleus together). Weak uses heavy W/Z bosons (very short range, causes decay).',
    hint: 'Each fundamental force has its own carrier particle',
    tags: ['particles', 'forces', 'exchange particles'],
    yearGroup: [12, 13]
  },

  // ASTROPHYSICS
  {
    id: 'phys-alevel-exp-astro-001',
    subject: 'physics',
    topic: 'Astrophysics',
    subtopic: 'Stellar Classification',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'On the Hertzsprung-Russell diagram, where are red giants found?',
    correctAnswer: 'Top right (high luminosity, low temperature)',
    wrongAnswers: ['Top left (high luminosity, high temperature)', 'Bottom right', 'Center'],
    explanation: 'Red giants are huge (high luminosity) but relatively cool (low surface temperature = red color). Main sequence runs diagonally. White dwarfs are bottom left (hot but tiny).',
    hint: 'Red = cool, Giant = luminous. Where on the axes?',
    tags: ['astrophysics', 'HR diagram', 'stars'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp-astro-002',
    subject: 'physics',
    topic: 'Astrophysics',
    subtopic: 'Cosmology',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Hubble\'s Law states v = H₀d. What does this tell us about the universe?',
    correctAnswer: 'The universe is expanding - more distant galaxies recede faster',
    wrongAnswers: ['The universe is contracting', 'All galaxies move at the same speed', 'Only nearby galaxies move'],
    explanation: 'Recession velocity is proportional to distance. Everything is moving apart - the space itself is expanding! This led to the Big Bang theory.',
    hint: 'What does it mean if recession speed increases with distance?',
    tags: ['astrophysics', 'Hubble', 'cosmology'],
    yearGroup: [12, 13]
  },
];

// ============================================
// A-LEVEL PHYSICS TERMS
// ============================================

export const alevelPhysicsTermsExpanded: TermDefinition[] = [
  {
    id: 'phys-alevel-term-exp-001',
    subject: 'physics',
    term: 'Centripetal acceleration',
    definition: 'Acceleration toward the center of circular motion: a = v²/r = ω²r',
    difficulty: 'alevel',
    relatedTerms: ['circular motion', 'angular velocity', 'centripetal force']
  },
  {
    id: 'phys-alevel-term-exp-002',
    subject: 'physics',
    term: 'Simple harmonic motion',
    definition: 'Motion where acceleration is proportional to displacement and directed toward equilibrium: a = -ω²x',
    difficulty: 'alevel',
    relatedTerms: ['oscillation', 'pendulum', 'spring']
  },
  {
    id: 'phys-alevel-term-exp-003',
    subject: 'physics',
    term: 'Electric potential',
    definition: 'Work done per unit charge to bring a small positive charge from infinity to that point: V = kQ/r',
    difficulty: 'alevel',
    relatedTerms: ['potential energy', 'field strength', 'equipotential']
  },
  {
    id: 'phys-alevel-term-exp-004',
    subject: 'physics',
    term: 'Binding energy',
    definition: 'Energy required to completely separate all nucleons in a nucleus - or energy released when nucleus forms',
    difficulty: 'alevel',
    relatedTerms: ['mass defect', 'fission', 'fusion']
  },
  {
    id: 'phys-alevel-term-exp-005',
    subject: 'physics',
    term: 'Work function',
    definition: 'Minimum energy needed to remove an electron from a metal surface: φ = hf₀',
    difficulty: 'alevel',
    relatedTerms: ['photoelectric effect', 'threshold frequency', 'photon']
  },
  {
    id: 'phys-alevel-term-exp-006',
    subject: 'physics',
    term: 'de Broglie wavelength',
    definition: 'Wavelength associated with a moving particle: λ = h/p = h/mv',
    difficulty: 'alevel',
    relatedTerms: ['wave-particle duality', 'matter waves', 'momentum']
  },
  {
    id: 'phys-alevel-term-exp-007',
    subject: 'physics',
    term: 'Lepton',
    definition: 'Fundamental particle that doesn\'t feel strong force - electrons, muons, taus and their neutrinos',
    difficulty: 'alevel',
    relatedTerms: ['particles', 'standard model', 'conservation']
  },
  {
    id: 'phys-alevel-term-exp-008',
    subject: 'physics',
    term: 'Baryon',
    definition: 'Particle made of three quarks - includes protons and neutrons',
    difficulty: 'alevel',
    relatedTerms: ['quarks', 'hadrons', 'mesons']
  },
];

// ============================================
// A-LEVEL PHYSICS FORMULAS
// ============================================

export const alevelPhysicsFormulasExpanded: Formula[] = [
  {
    id: 'phys-alevel-formula-exp-001',
    subject: 'physics',
    name: 'Centripetal Acceleration',
    formula: 'a = v²/r = ω²r',
    description: 'Acceleration toward center of circular motion',
    difficulty: 'alevel',
    topic: 'Mechanics'
  },
  {
    id: 'phys-alevel-formula-exp-002',
    subject: 'physics',
    name: 'SHM Acceleration',
    formula: 'a = -ω²x',
    description: 'Acceleration proportional to displacement, directed toward equilibrium',
    difficulty: 'alevel',
    topic: 'Mechanics'
  },
  {
    id: 'phys-alevel-formula-exp-003',
    subject: 'physics',
    name: 'Gravitational Field Strength',
    formula: 'g = GM/r²',
    description: 'Field strength at distance r from mass M',
    difficulty: 'alevel',
    topic: 'Fields'
  },
  {
    id: 'phys-alevel-formula-exp-004',
    subject: 'physics',
    name: 'Photoelectric Equation',
    formula: 'hf = φ + KE_max',
    description: 'Photon energy = work function + max kinetic energy of electron',
    difficulty: 'alevel',
    topic: 'Quantum'
  },
  {
    id: 'phys-alevel-formula-exp-005',
    subject: 'physics',
    name: 'de Broglie Wavelength',
    formula: 'λ = h/p = h/mv',
    description: 'Wavelength of a particle with momentum p',
    difficulty: 'alevel',
    topic: 'Quantum'
  },
  {
    id: 'phys-alevel-formula-exp-006',
    subject: 'physics',
    name: 'Mass-Energy Equivalence',
    formula: 'E = mc²',
    description: 'Energy equivalent of mass m',
    difficulty: 'alevel',
    topic: 'Nuclear'
  },
];

// Combined export
export const alevelPhysicsExpanded = [...alevelPhysicsMechanics];
