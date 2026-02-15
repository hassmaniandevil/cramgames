/**
 * KS3 Chemistry Expanded Part 2
 * Fun-first chemistry for Years 7-9
 */

import { Question, TermDefinition } from '../types';

// ============================================================================
// ATOMS AND ELEMENTS
// ============================================================================

const ks3AtomsElements: Question[] = [
  {
    id: 'chem-ks3-exp2-001',
    subject: 'chemistry',
    topic: 'Atoms and Elements',
    subtopic: 'Atomic Structure',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What determines which element an atom is?',
    correctAnswer: 'The number of protons in the nucleus',
    wrongAnswers: [
      'The number of electrons',
      'The number of neutrons',
      'The size of the atom'
    ],
    explanation: 'Proton number = atomic number = element identity. Carbon ALWAYS has 6 protons. Change the protons and you\'ve made a different element entirely!',
    tags: ['atoms', 'protons', 'identity'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'chem-ks3-exp2-002',
    subject: 'chemistry',
    topic: 'Atoms and Elements',
    subtopic: 'Periodic Table',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Elements in the same group have similar properties because they have...',
    correctAnswer: 'The same number of electrons in their outer shell',
    wrongAnswers: [
      'The same number of protons',
      'The same mass',
      'The same color'
    ],
    explanation: 'Outer shell electrons determine how atoms bond and react. Group 1 elements all have 1 outer electron - they\'re all reactive metals that fizz in water!',
    tags: ['periodic-table', 'groups', 'electrons'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'chem-ks3-exp2-003',
    subject: 'chemistry',
    topic: 'Atoms and Elements',
    subtopic: 'Metals vs Non-metals',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which property is typical of metals?',
    correctAnswer: 'Good conductor of electricity',
    wrongAnswers: [
      'Brittle when hit',
      'Poor conductor of heat',
      'Dull appearance'
    ],
    explanation: 'Metals conduct electricity because they have free electrons that can move. They\'re also shiny, malleable (can be bent), and conduct heat. Most elements are metals!',
    tags: ['metals', 'properties', 'conductivity'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'chem-ks3-exp2-004',
    subject: 'chemistry',
    topic: 'Atoms and Elements',
    subtopic: 'Noble Gases',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why are noble gases unreactive?',
    correctAnswer: 'They have full outer electron shells',
    wrongAnswers: [
      'They are too heavy',
      'They are invisible',
      'They have no electrons'
    ],
    explanation: 'Noble gases (helium, neon, argon...) have complete outer shells - they\'re happy as they are! They don\'t need to gain, lose, or share electrons. Chemically lazy!',
    tags: ['noble-gases', 'stability', 'electrons'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// REACTIONS
// ============================================================================

const ks3Reactions: Question[] = [
  {
    id: 'chem-ks3-exp2-005',
    subject: 'chemistry',
    topic: 'Chemical Reactions',
    subtopic: 'Conservation of Mass',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In a chemical reaction, atoms are...',
    correctAnswer: 'Rearranged but not created or destroyed',
    wrongAnswers: [
      'Created from nothing',
      'Destroyed completely',
      'Changed into different elements'
    ],
    explanation: 'Conservation of mass: atoms just get reshuffled into new arrangements. 12g of carbon + 32g of oxygen → 44g of CO₂. Total mass stays the same!',
    tags: ['reactions', 'conservation', 'mass'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'chem-ks3-exp2-006',
    subject: 'chemistry',
    topic: 'Chemical Reactions',
    subtopic: 'Combustion',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What are the products of complete combustion of methane?',
    correctAnswer: 'Carbon dioxide and water',
    wrongAnswers: [
      'Carbon and water',
      'Carbon monoxide and water',
      'Nothing - fuel disappears'
    ],
    explanation: 'CH₄ + 2O₂ → CO₂ + 2H₂O. Complete combustion = plenty of oxygen = CO₂. Incomplete combustion (not enough O₂) makes deadly carbon monoxide instead!',
    tags: ['combustion', 'products', 'complete'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'chem-ks3-exp2-007',
    subject: 'chemistry',
    topic: 'Chemical Reactions',
    subtopic: 'Thermal Decomposition',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What happens when copper carbonate is heated?',
    correctAnswer: 'It breaks down into copper oxide and carbon dioxide',
    wrongAnswers: [
      'It melts',
      'It explodes',
      'Nothing happens'
    ],
    explanation: 'Green copper carbonate turns black (copper oxide) when heated, releasing CO₂. "Thermal decomposition" = heat breaking a compound into simpler substances.',
    tags: ['decomposition', 'thermal', 'carbonates'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'chem-ks3-exp2-008',
    subject: 'chemistry',
    topic: 'Chemical Reactions',
    subtopic: 'Neutralisation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Acid + alkali produces...',
    correctAnswer: 'Salt + water',
    wrongAnswers: [
      'More acid',
      'Explosion',
      'Gas only'
    ],
    explanation: 'Neutralisation: H⁺ from acid + OH⁻ from alkali → H₂O. The leftover ions make a salt. Stomach acid + antacid = neutral stomach (and relief!).',
    tags: ['neutralisation', 'acid', 'alkali'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// ACIDS AND ALKALIS
// ============================================================================

const ks3AcidsAlkalis: Question[] = [
  {
    id: 'chem-ks3-exp2-009',
    subject: 'chemistry',
    topic: 'Acids and Alkalis',
    subtopic: 'pH Scale',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'A substance with pH 3 is...',
    correctAnswer: 'A strong acid',
    wrongAnswers: [
      'Neutral',
      'A weak alkali',
      'A strong alkali'
    ],
    explanation: 'pH scale: 0-6 = acid, 7 = neutral, 8-14 = alkali. Lower numbers = stronger acid. Stomach acid is about pH 2 (very acidic), pure water is pH 7.',
    tags: ['ph', 'acids', 'strength'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'chem-ks3-exp2-010',
    subject: 'chemistry',
    topic: 'Acids and Alkalis',
    subtopic: 'Indicators',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Universal indicator turns yellow in...',
    correctAnswer: 'A weak acid',
    wrongAnswers: [
      'A strong acid (red)',
      'Neutral solution (green)',
      'An alkali (blue/purple)'
    ],
    explanation: 'Universal indicator: red/orange = strong acid, yellow = weak acid, green = neutral, blue = weak alkali, purple = strong alkali. It\'s a pH rainbow!',
    tags: ['indicators', 'ph', 'colors'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'chem-ks3-exp2-011',
    subject: 'chemistry',
    topic: 'Acids and Alkalis',
    subtopic: 'Reactions',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What gas is produced when acid reacts with a metal?',
    correctAnswer: 'Hydrogen',
    wrongAnswers: [
      'Oxygen',
      'Carbon dioxide',
      'Nitrogen'
    ],
    explanation: 'Metal + acid → salt + hydrogen. The hydrogen bubbles - you can test it with a lit splint (makes a squeaky pop!). Example: Mg + 2HCl → MgCl₂ + H₂.',
    tags: ['acids', 'metals', 'hydrogen'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'chem-ks3-exp2-012',
    subject: 'chemistry',
    topic: 'Acids and Alkalis',
    subtopic: 'Carbonates',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What gas is produced when acid reacts with a carbonate?',
    correctAnswer: 'Carbon dioxide',
    wrongAnswers: [
      'Hydrogen',
      'Oxygen',
      'Chlorine'
    ],
    explanation: 'Carbonate + acid → salt + water + CO₂. The CO₂ fizzes! Test with limewater (turns cloudy). Antacids are carbonates that neutralize stomach acid.',
    tags: ['acids', 'carbonates', 'co2'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// MATERIALS AND EARTH
// ============================================================================

const ks3MaterialsEarth: Question[] = [
  {
    id: 'chem-ks3-exp2-013',
    subject: 'chemistry',
    topic: 'Earth and Atmosphere',
    subtopic: 'Rock Types',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which rock type is formed from cooled magma or lava?',
    correctAnswer: 'Igneous',
    wrongAnswers: [
      'Sedimentary',
      'Metamorphic',
      'Composite'
    ],
    explanation: 'Igneous = from fire. Granite forms slowly underground (large crystals), basalt forms quickly from lava (small crystals). The faster it cools, the smaller the crystals.',
    tags: ['rocks', 'igneous', 'formation'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'chem-ks3-exp2-014',
    subject: 'chemistry',
    topic: 'Earth and Atmosphere',
    subtopic: 'Atmosphere',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is the main gas in Earth\'s atmosphere?',
    correctAnswer: 'Nitrogen (about 78%)',
    wrongAnswers: [
      'Oxygen (about 78%)',
      'Carbon dioxide (about 78%)',
      'Hydrogen (about 78%)'
    ],
    explanation: 'Atmosphere: 78% nitrogen, 21% oxygen, 1% other (including argon, CO₂). Plants make oxygen; animals use it. The balance has been stable for millions of years.',
    tags: ['atmosphere', 'gases', 'composition'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'chem-ks3-exp2-015',
    subject: 'chemistry',
    topic: 'Materials',
    subtopic: 'Polymers',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is a polymer?',
    correctAnswer: 'A long chain molecule made of repeating units',
    wrongAnswers: [
      'A type of metal',
      'A single atom',
      'A mixture of gases'
    ],
    explanation: 'Polymers are like chains of linked monomers: -A-A-A-A-A-. Plastics are synthetic polymers. Your DNA and proteins are natural polymers!',
    tags: ['polymers', 'plastics', 'structure'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'chem-ks3-exp2-016',
    subject: 'chemistry',
    topic: 'Materials',
    subtopic: 'Ceramics',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What property makes ceramics useful for tiles and pottery?',
    correctAnswer: 'They resist heat and water',
    wrongAnswers: [
      'They conduct electricity',
      'They bend easily',
      'They are transparent'
    ],
    explanation: 'Ceramics (clay, glass, porcelain) are hard, brittle, and heat-resistant. Great for tiles, but drop them and they shatter! Trade-offs everywhere.',
    tags: ['ceramics', 'properties', 'materials'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const ks3ChemistryTermsExpanded2: TermDefinition[] = [
  {
    id: 'chem-ks3-exp2-term-001',
    subject: 'chemistry',
    topic: 'Atoms',
    difficulty: 'ks3',
    term: 'Atomic Number',
    definition: 'The number of protons in an atom\'s nucleus. Defines which element it is.',
    example: 'Carbon has atomic number 6 (6 protons).',
    tags: ['atoms', 'protons', 'periodic-table']
  },
  {
    id: 'chem-ks3-exp2-term-002',
    subject: 'chemistry',
    topic: 'Reactions',
    difficulty: 'ks3',
    term: 'Reactant',
    definition: 'A substance that takes part in and undergoes change during a reaction.',
    example: 'In burning methane, the reactants are methane and oxygen.',
    tags: ['reactions', 'equations']
  },
  {
    id: 'chem-ks3-exp2-term-003',
    subject: 'chemistry',
    topic: 'Reactions',
    difficulty: 'ks3',
    term: 'Product',
    definition: 'A substance formed during a chemical reaction.',
    example: 'In burning methane, the products are carbon dioxide and water.',
    tags: ['reactions', 'equations']
  },
  {
    id: 'chem-ks3-exp2-term-004',
    subject: 'chemistry',
    topic: 'Acids',
    difficulty: 'ks3',
    term: 'Salt',
    definition: 'A compound formed when an acid reacts with a base, metal, or carbonate.',
    example: 'Sodium chloride (table salt) forms from HCl + NaOH.',
    tags: ['acids', 'neutralisation', 'salts']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const ks3ChemistryExpanded2: Question[] = [
  ...ks3AtomsElements,
  ...ks3Reactions,
  ...ks3AcidsAlkalis,
  ...ks3MaterialsEarth
];
