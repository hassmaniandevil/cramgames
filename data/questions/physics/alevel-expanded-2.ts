/**
 * A-Level Physics Expanded Part 2
 * Advanced physics covering quantum, particle, and astrophysics
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================================================
// QUANTUM PHYSICS
// ============================================================================

const alevelQuantumPhysics: Question[] = [
  {
    id: 'phys-alevel-exp2-001',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Wave-Particle Duality',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the de Broglie wavelength of an electron moving at 2.0 × 10⁶ m/s? (mₑ = 9.11 × 10⁻³¹ kg)',
    correctAnswer: '3.6 × 10⁻¹⁰ m',
    wrongAnswers: [
      '1.8 × 10⁻¹⁰ m',
      '7.2 × 10⁻¹⁰ m',
      '3.6 × 10⁻⁸ m'
    ],
    explanation: 'λ = h/mv = (6.63 × 10⁻³⁴) / (9.11 × 10⁻³¹ × 2.0 × 10⁶) = 3.6 × 10⁻¹⁰ m. This is similar to atomic spacing - which is why electron diffraction works!',
    tags: ['quantum', 'de-broglie', 'wavelength'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp2-002',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Energy Levels',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'An electron transitions from n=4 to n=2 in hydrogen. Which series is the emitted photon part of?',
    correctAnswer: 'Balmer series (visible light)',
    wrongAnswers: [
      'Lyman series (UV)',
      'Paschen series (IR)',
      'Brackett series (IR)'
    ],
    explanation: 'Balmer = transitions TO n=2. Lyman = TO n=1 (UV). Paschen = TO n=3 (IR). The n=4→n=2 transition produces visible blue-green light at 486 nm.',
    tags: ['quantum', 'hydrogen', 'spectra'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp2-003',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Photoelectric Effect',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Light with photon energy 5.0 eV hits a metal with work function 2.3 eV. What is the max KE of emitted electrons?',
    correctAnswer: '2.7 eV',
    wrongAnswers: [
      '5.0 eV',
      '7.3 eV',
      '2.3 eV'
    ],
    explanation: 'KEmax = hf - φ = 5.0 - 2.3 = 2.7 eV. The work function is the minimum energy to release an electron. Any extra energy becomes kinetic energy. This proved light comes in packets (photons)!',
    tags: ['quantum', 'photoelectric', 'photons'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp2-004',
    subject: 'physics',
    topic: 'Quantum Physics',
    subtopic: 'Uncertainty Principle',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'According to Heisenberg\'s uncertainty principle, what happens if we measure position very precisely?',
    correctAnswer: 'Momentum becomes more uncertain',
    wrongAnswers: [
      'Momentum also becomes more precise',
      'Energy becomes more uncertain',
      'Time becomes more uncertain'
    ],
    explanation: 'ΔxΔp ≥ ℏ/2. More precise position (smaller Δx) requires larger momentum uncertainty (larger Δp). This isn\'t a measurement problem - it\'s fundamental to nature!',
    tags: ['quantum', 'uncertainty', 'heisenberg'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// PARTICLE PHYSICS
// ============================================================================

const alevelParticlePhysics: Question[] = [
  {
    id: 'phys-alevel-exp2-005',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Standard Model',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which particles make up a proton?',
    correctAnswer: 'Two up quarks and one down quark (uud)',
    wrongAnswers: [
      'Two down quarks and one up quark (ddu)',
      'Three up quarks (uuu)',
      'One up, one down, one strange (uds)'
    ],
    explanation: 'Proton = uud. Charge: (⅔) + (⅔) + (-⅓) = +1. Neutron = udd with charge (⅔) + (-⅓) + (-⅓) = 0. The strong force holds quarks together via gluon exchange.',
    tags: ['particles', 'quarks', 'standard-model'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp2-006',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Leptons',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In beta-minus decay, what particles are emitted?',
    correctAnswer: 'An electron and an antineutrino',
    wrongAnswers: [
      'A positron and a neutrino',
      'An electron and a neutrino',
      'A proton and an electron'
    ],
    explanation: 'β⁻: n → p + e⁻ + ν̄ₑ. A down quark changes to an up quark via W⁻ boson. The antineutrino was proposed by Pauli to conserve energy and momentum - it took 26 years to detect!',
    tags: ['particles', 'beta-decay', 'leptons'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp2-007',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Conservation Laws',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which quantity is NOT conserved in particle interactions?',
    correctAnswer: 'Mass (can be converted to energy)',
    wrongAnswers: [
      'Baryon number',
      'Lepton number',
      'Charge'
    ],
    explanation: 'E = mc². Mass can convert to energy and vice versa. But baryon number, lepton number, and charge are always conserved. Strangeness is conserved in strong interactions only.',
    tags: ['particles', 'conservation', 'interactions'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp2-008',
    subject: 'physics',
    topic: 'Particle Physics',
    subtopic: 'Feynman Diagrams',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In a Feynman diagram for electron-electron repulsion, what is exchanged?',
    correctAnswer: 'A virtual photon',
    wrongAnswers: [
      'A W boson',
      'A gluon',
      'A Higgs boson'
    ],
    explanation: 'Electromagnetic force = photon exchange. Strong force = gluon. Weak force = W and Z bosons. The photon is "virtual" because it exists only during the interaction and can\'t be directly detected.',
    tags: ['particles', 'feynman', 'bosons'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// ASTROPHYSICS
// ============================================================================

const alevelAstrophysics: Question[] = [
  {
    id: 'phys-alevel-exp2-009',
    subject: 'physics',
    topic: 'Astrophysics',
    subtopic: 'Stellar Evolution',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the final fate of a star with mass similar to the Sun?',
    correctAnswer: 'White dwarf',
    wrongAnswers: [
      'Neutron star',
      'Black hole',
      'Supernova remnant'
    ],
    explanation: 'Stars <8 solar masses end as white dwarfs. 8-25 solar masses → neutron star after supernova. >25 solar masses → black hole. Our Sun will become a white dwarf in about 5 billion years.',
    tags: ['astrophysics', 'stellar-evolution', 'white-dwarf'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp2-010',
    subject: 'physics',
    topic: 'Astrophysics',
    subtopic: 'HR Diagram',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'On an HR diagram, where would you find red giant stars?',
    correctAnswer: 'Upper right (bright and cool)',
    wrongAnswers: [
      'Upper left (bright and hot)',
      'Lower right (dim and cool)',
      'Lower left (dim and hot)'
    ],
    explanation: 'Red = cool (low T, right side). Giant = bright (high luminosity, top). Main sequence runs diagonally. White dwarfs are bottom left (hot but dim because they\'re small).',
    tags: ['astrophysics', 'hr-diagram', 'stars'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp2-011',
    subject: 'physics',
    topic: 'Astrophysics',
    subtopic: 'Cosmology',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What does Hubble\'s law tell us?',
    correctAnswer: 'Galaxies recede with velocity proportional to their distance',
    wrongAnswers: [
      'All galaxies are the same size',
      'The universe is contracting',
      'Light travels at different speeds in space'
    ],
    explanation: 'v = H₀d. Further galaxies move faster. This implies the universe is expanding! Running time backwards suggests everything was once in one point - evidence for the Big Bang.',
    tags: ['astrophysics', 'cosmology', 'hubble'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp2-012',
    subject: 'physics',
    topic: 'Astrophysics',
    subtopic: 'Black Holes',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the Schwarzschild radius of a black hole?',
    correctAnswer: 'The radius of the event horizon',
    wrongAnswers: [
      'The radius of the singularity',
      'The radius of the accretion disk',
      'The maximum radius a star can be'
    ],
    explanation: 'Rs = 2GM/c². At this radius, escape velocity equals light speed. Nothing inside can escape, not even light. For the Sun, Rs ≈ 3 km (but the Sun won\'t become a black hole).',
    tags: ['astrophysics', 'black-holes', 'relativity'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// NUCLEAR PHYSICS
// ============================================================================

const alevelNuclearPhysics: Question[] = [
  {
    id: 'phys-alevel-exp2-013',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Binding Energy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Iron-56 has the highest binding energy per nucleon. What does this mean?',
    correctAnswer: 'It\'s the most stable nucleus',
    wrongAnswers: [
      'It\'s the most radioactive',
      'It releases the most energy in fission',
      'It has the most protons'
    ],
    explanation: 'Higher BE/nucleon = more stable. Fusion releases energy for nuclei lighter than Fe-56. Fission releases energy for nuclei heavier than Fe-56. Iron is the "ash" of stellar fusion.',
    tags: ['nuclear', 'binding-energy', 'stability'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp2-014',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Radioactive Decay',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A sample has activity 800 Bq. After two half-lives, what is the activity?',
    correctAnswer: '200 Bq',
    wrongAnswers: [
      '400 Bq',
      '100 Bq',
      '0 Bq'
    ],
    explanation: 'Each half-life halves the activity. 800 → 400 (1 half-life) → 200 (2 half-lives). Activity = λN, so it decreases as N decreases. After 10 half-lives, activity is 1/1024 of original.',
    tags: ['nuclear', 'radioactivity', 'half-life'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp2-015',
    subject: 'physics',
    topic: 'Nuclear Physics',
    subtopic: 'Fusion',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why is nuclear fusion difficult to achieve on Earth?',
    correctAnswer: 'Nuclei must overcome electrostatic repulsion, requiring extreme temperatures',
    wrongAnswers: [
      'There\'s not enough hydrogen available',
      'Fusion produces too much radiation',
      'The reaction is too slow'
    ],
    explanation: 'Positive nuclei repel. At ~100 million K, particles have enough KE to overcome the Coulomb barrier. This is why fusion happens in star cores but is hard to replicate on Earth.',
    tags: ['nuclear', 'fusion', 'plasma'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// FIELDS
// ============================================================================

const alevelFieldsAdvanced: Question[] = [
  {
    id: 'phys-alevel-exp2-016',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Gravitational Potential',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the gravitational potential at the surface of Earth? (M = 6.0 × 10²⁴ kg, R = 6.4 × 10⁶ m)',
    correctAnswer: '-6.3 × 10⁷ J kg⁻¹',
    wrongAnswers: [
      '+6.3 × 10⁷ J kg⁻¹',
      '-9.8 J kg⁻¹',
      '0 J kg⁻¹'
    ],
    explanation: 'V = -GM/r = -(6.67 × 10⁻¹¹ × 6.0 × 10²⁴) / (6.4 × 10⁶) = -6.3 × 10⁷ J/kg. It\'s negative because work must be done AGAINST the field to move to infinity (where V = 0).',
    tags: ['fields', 'gravitational', 'potential'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp2-017',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Electric Fields',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Two parallel plates are 5 cm apart with a 100V potential difference. What is the electric field strength?',
    correctAnswer: '2000 V/m',
    wrongAnswers: [
      '20 V/m',
      '500 V/m',
      '2 V/m'
    ],
    explanation: 'E = V/d = 100 / 0.05 = 2000 V/m. Between parallel plates, the field is uniform. This is different from point charges where E ∝ 1/r².',
    tags: ['fields', 'electric', 'uniform'],
    yearGroup: [12, 13]
  },
  {
    id: 'phys-alevel-exp2-018',
    subject: 'physics',
    topic: 'Fields',
    subtopic: 'Orbits',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'For a satellite in circular orbit, which equation links orbital period to radius?',
    correctAnswer: 'T² ∝ r³ (Kepler\'s third law)',
    wrongAnswers: [
      'T ∝ r',
      'T² ∝ r²',
      'T ∝ r²'
    ],
    explanation: 'T² = (4π²/GM)r³. Higher orbits have longer periods. Geostationary satellites orbit at ~36,000 km with T = 24 hours. The ISS at ~400 km has T ≈ 90 minutes.',
    tags: ['fields', 'orbits', 'kepler'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const alevelPhysicsTermsExpanded2: TermDefinition[] = [
  {
    id: 'phys-alevel-exp2-term-001',
    subject: 'physics',
    topic: 'Quantum Physics',
    difficulty: 'alevel',
    term: 'de Broglie Wavelength',
    definition: 'The wavelength associated with a moving particle: λ = h/p = h/mv.',
    example: 'Electrons in an atom have wavelengths comparable to atomic spacing.',
    tags: ['quantum', 'wave-particle-duality']
  },
  {
    id: 'phys-alevel-exp2-term-002',
    subject: 'physics',
    topic: 'Quantum Physics',
    difficulty: 'alevel',
    term: 'Work Function',
    definition: 'The minimum energy needed to release an electron from a metal surface.',
    example: 'Zinc has work function 4.3 eV, requiring UV light for the photoelectric effect.',
    tags: ['quantum', 'photoelectric']
  },
  {
    id: 'phys-alevel-exp2-term-003',
    subject: 'physics',
    topic: 'Particle Physics',
    difficulty: 'alevel',
    term: 'Baryon',
    definition: 'A hadron made of three quarks. Has baryon number +1.',
    example: 'Protons (uud) and neutrons (udd) are baryons.',
    tags: ['particles', 'quarks', 'hadrons']
  },
  {
    id: 'phys-alevel-exp2-term-004',
    subject: 'physics',
    topic: 'Particle Physics',
    difficulty: 'alevel',
    term: 'Lepton',
    definition: 'A fundamental particle not affected by strong force. Includes electrons, muons, taus, and neutrinos.',
    example: 'The electron is the lightest charged lepton.',
    tags: ['particles', 'leptons', 'standard-model']
  },
  {
    id: 'phys-alevel-exp2-term-005',
    subject: 'physics',
    topic: 'Astrophysics',
    difficulty: 'alevel',
    term: 'Chandrasekhar Limit',
    definition: 'Maximum mass of a white dwarf (~1.4 solar masses). Above this, electron degeneracy pressure fails.',
    example: 'White dwarfs above this limit collapse to neutron stars or black holes.',
    tags: ['astrophysics', 'stellar-evolution']
  },
  {
    id: 'phys-alevel-exp2-term-006',
    subject: 'physics',
    topic: 'Astrophysics',
    difficulty: 'alevel',
    term: 'Redshift',
    definition: 'Increase in wavelength of light from receding objects. z = Δλ/λ = v/c.',
    example: 'Distant galaxies show redshift, indicating the universe is expanding.',
    tags: ['astrophysics', 'cosmology', 'doppler']
  },
  {
    id: 'phys-alevel-exp2-term-007',
    subject: 'physics',
    topic: 'Nuclear Physics',
    difficulty: 'alevel',
    term: 'Mass Defect',
    definition: 'Difference between mass of nucleons separately and combined in nucleus.',
    example: 'Helium-4 has mass defect 0.0304 u, converted to binding energy.',
    tags: ['nuclear', 'binding-energy', 'mass-energy']
  },
  {
    id: 'phys-alevel-exp2-term-008',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    term: 'Escape Velocity',
    definition: 'Minimum speed needed to escape a gravitational field: v = √(2GM/r).',
    example: 'Earth\'s escape velocity is 11.2 km/s.',
    tags: ['fields', 'gravitational', 'orbits']
  }
];

// ============================================================================
// FORMULAS
// ============================================================================

export const alevelPhysicsFormulasExpanded2: Formula[] = [
  {
    id: 'phys-alevel-exp2-form-001',
    subject: 'physics',
    topic: 'Quantum Physics',
    difficulty: 'alevel',
    name: 'de Broglie Wavelength',
    formula: 'λ = h/p = h/mv',
    variables: [
      { symbol: 'λ', meaning: 'Wavelength (m)' },
      { symbol: 'h', meaning: 'Planck constant (6.63 × 10⁻³⁴ J s)' },
      { symbol: 'p', meaning: 'Momentum (kg m/s)' },
      { symbol: 'm', meaning: 'Mass (kg)' },
      { symbol: 'v', meaning: 'Velocity (m/s)' }
    ],
    explanation: 'Matter has wave properties. Faster particles have shorter wavelengths.',
    tags: ['quantum', 'waves']
  },
  {
    id: 'phys-alevel-exp2-form-002',
    subject: 'physics',
    topic: 'Quantum Physics',
    difficulty: 'alevel',
    name: 'Photoelectric Equation',
    formula: 'hf = φ + KEmax',
    variables: [
      { symbol: 'hf', meaning: 'Photon energy (J)' },
      { symbol: 'φ', meaning: 'Work function (J)' },
      { symbol: 'KEmax', meaning: 'Maximum kinetic energy of electron (J)' }
    ],
    explanation: 'Photon energy = work function + kinetic energy of emitted electron.',
    tags: ['quantum', 'photoelectric']
  },
  {
    id: 'phys-alevel-exp2-form-003',
    subject: 'physics',
    topic: 'Nuclear Physics',
    difficulty: 'alevel',
    name: 'Mass-Energy Equivalence',
    formula: 'E = mc²',
    variables: [
      { symbol: 'E', meaning: 'Energy (J)' },
      { symbol: 'm', meaning: 'Mass (kg)' },
      { symbol: 'c', meaning: 'Speed of light (3 × 10⁸ m/s)' }
    ],
    explanation: 'Mass and energy are equivalent. 1 kg = 9 × 10¹⁶ J.',
    tags: ['nuclear', 'relativity', 'energy']
  },
  {
    id: 'phys-alevel-exp2-form-004',
    subject: 'physics',
    topic: 'Fields',
    difficulty: 'alevel',
    name: 'Gravitational Potential',
    formula: 'V = -GM/r',
    variables: [
      { symbol: 'V', meaning: 'Gravitational potential (J/kg)' },
      { symbol: 'G', meaning: 'Gravitational constant' },
      { symbol: 'M', meaning: 'Mass of body (kg)' },
      { symbol: 'r', meaning: 'Distance from centre (m)' }
    ],
    explanation: 'Potential is negative, zero at infinity. Work done against field is positive.',
    tags: ['fields', 'gravitational', 'potential']
  },
  {
    id: 'phys-alevel-exp2-form-005',
    subject: 'physics',
    topic: 'Astrophysics',
    difficulty: 'alevel',
    name: 'Hubble\'s Law',
    formula: 'v = H₀d',
    variables: [
      { symbol: 'v', meaning: 'Recession velocity (m/s or km/s)' },
      { symbol: 'H₀', meaning: 'Hubble constant (~70 km/s/Mpc)' },
      { symbol: 'd', meaning: 'Distance to galaxy (m or Mpc)' }
    ],
    explanation: 'Velocity of recession is proportional to distance. Evidence for expanding universe.',
    tags: ['astrophysics', 'cosmology', 'expansion']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const alevelPhysicsExpanded2: Question[] = [
  ...alevelQuantumPhysics,
  ...alevelParticlePhysics,
  ...alevelAstrophysics,
  ...alevelNuclearPhysics,
  ...alevelFieldsAdvanced
];
