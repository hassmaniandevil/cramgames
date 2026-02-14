/**
 * GCSE Chemistry Expanded Question Bank
 * Fun-first gamified questions with real-world contexts
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================
// ATOMIC STRUCTURE & BONDING
// ============================================

export const gcseChemistryAtomicBonding: Question[] = [
  {
    id: 'chem-gcse-exp-atom-001',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Subatomic Particles',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'An atom has atomic number 11 and mass number 23. How many neutrons does it have?',
    correctAnswer: '12',
    wrongAnswers: ['11', '23', '34'],
    explanation: 'Neutrons = mass number - atomic number = 23 - 11 = 12. Mass number = protons + neutrons. This atom is sodium (Na)!',
    hint: 'Neutrons = mass number - protons (atomic number)',
    tags: ['atoms', 'subatomic', 'calculation'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-atom-002',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Isotopes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Carbon-12 and Carbon-14 are isotopes. What\'s the same and what\'s different?',
    correctAnswer: 'Same protons/electrons, different neutrons',
    wrongAnswers: ['Same everything', 'Same neutrons, different protons', 'Same neutrons, different electrons'],
    explanation: 'Isotopes have the same number of protons (same element) but different neutrons (different mass). C-14 is used in radiocarbon dating!',
    hint: 'The "12" and "14" are mass numbers...',
    tags: ['atoms', 'isotopes', 'definition'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-atom-003',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Electron Configuration',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the electron configuration of calcium (atomic number 20)?',
    correctAnswer: '2, 8, 8, 2',
    wrongAnswers: ['2, 8, 10', '2, 8, 2, 8', '2, 18'],
    explanation: 'Fill shells in order: first shell holds 2, second holds 8, third holds 8, fourth gets the remaining 2. Total = 20 electrons!',
    hint: 'Shell capacity: 2, 8, 8...',
    tags: ['atoms', 'electrons', 'configuration'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-bond-001',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Ionic Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Sodium chloride (NaCl) forms when sodium reacts with chlorine. What happens to the electrons?',
    correctAnswer: 'Sodium loses one electron, chlorine gains it',
    wrongAnswers: ['Electrons are shared equally', 'Both atoms gain electrons', 'No electrons transfer'],
    explanation: 'Na (2,8,1) loses 1 electron → Na⁺ (2,8). Cl (2,8,7) gains 1 electron → Cl⁻ (2,8,8). Both achieve stable full outer shells!',
    hint: 'Metals lose, non-metals gain',
    tags: ['bonding', 'ionic', 'electron transfer'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-bond-002',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Covalent Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Water (H₂O) has covalent bonds. Why does oxygen form TWO bonds with hydrogen?',
    correctAnswer: 'Oxygen needs 2 more electrons to fill its outer shell',
    wrongAnswers: ['Oxygen is magnetic', 'Hydrogen can only bond once', 'Water would evaporate otherwise'],
    explanation: 'Oxygen has 6 outer electrons, needs 8 for a full shell. Each hydrogen shares 1 electron. 6 + 2 = 8. Full shell achieved!',
    hint: 'How many electrons does oxygen need to be stable?',
    tags: ['bonding', 'covalent', 'water'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-bond-003',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Metallic Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Metals conduct electricity because...',
    correctAnswer: 'Delocalised electrons can flow through the structure',
    wrongAnswers: ['Metal atoms vibrate a lot', 'Metal is shiny', 'There are no electrons in metals'],
    explanation: 'In metallic bonding, outer electrons aren\'t attached to specific atoms - they form a "sea of electrons" that can flow when voltage is applied!',
    hint: 'What type of particle carries electrical charge?',
    tags: ['bonding', 'metallic', 'conductivity'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-struct-001',
    subject: 'chemistry',
    topic: 'Structure',
    subtopic: 'Giant Covalent',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Diamond and graphite are both pure carbon, but diamond is hard and graphite is soft. Why?',
    correctAnswer: 'Different arrangements: diamond has 4 bonds per carbon, graphite has 3 with layers',
    wrongAnswers: ['Graphite is impure', 'Diamond has more atoms', 'They\'re completely different elements'],
    explanation: 'Diamond: each C bonded to 4 others in rigid 3D structure = super hard. Graphite: each C bonded to 3 others in layers that slide = soft. Same atoms, different properties!',
    hint: 'Think about the structure and how atoms are arranged',
    tags: ['structure', 'allotropes', 'carbon'],
    yearGroup: [10, 11]
  },

  // QUANTITATIVE CHEMISTRY
  {
    id: 'chem-gcse-exp-quant-001',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Relative Atomic Mass',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Chlorine has two isotopes: Cl-35 (75%) and Cl-37 (25%). What\'s its relative atomic mass?',
    correctAnswer: '35.5',
    wrongAnswers: ['36', '35', '37'],
    explanation: 'RAM = (35 × 0.75) + (37 × 0.25) = 26.25 + 9.25 = 35.5. It\'s a weighted average based on abundance. Most chlorine is Cl-35!',
    hint: 'Weighted average: (mass × abundance) for each isotope',
    tags: ['quantitative', 'RAM', 'calculation'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-quant-002',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Moles',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'How many moles are in 44g of carbon dioxide (CO₂)? (Mr of CO₂ = 44)',
    correctAnswer: '1',
    wrongAnswers: [],
    explanation: 'Moles = mass / Mr = 44 / 44 = 1 mole. One mole of CO₂ has a mass of 44g - this is its molar mass!',
    hint: 'Moles = mass ÷ Mr',
    tags: ['quantitative', 'moles', 'calculation'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-quant-003',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Concentration',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '0.5 moles of HCl is dissolved in 250 cm³ of water. What is the concentration in mol/dm³?',
    correctAnswer: '2 mol/dm³',
    wrongAnswers: ['0.002 mol/dm³', '0.5 mol/dm³', '125 mol/dm³'],
    explanation: 'First convert: 250 cm³ = 0.25 dm³. Concentration = moles/volume = 0.5/0.25 = 2 mol/dm³. Remember: 1000 cm³ = 1 dm³!',
    hint: 'Convert cm³ to dm³ first (÷1000)',
    tags: ['quantitative', 'concentration', 'calculation'],
    yearGroup: [10, 11]
  },

  // REACTIONS
  {
    id: 'chem-gcse-exp-react-001',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Reactivity Series',
    difficulty: 'gcse',
    type: 'order',
    question: 'Arrange these metals from most reactive to least reactive:',
    correctAnswer: ['Potassium', 'Magnesium', 'Zinc', 'Copper'],
    wrongAnswers: [],
    explanation: 'K is so reactive it catches fire in water! Mg reacts steadily. Zn reacts slowly. Cu barely reacts at all. More reactive = loses electrons more easily.',
    hint: 'Think about reactions with water and acids',
    tags: ['reactions', 'reactivity series', 'metals'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-react-002',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Displacement',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Magnesium is added to copper sulfate solution. What happens?',
    correctAnswer: 'Magnesium displaces copper - solution turns colourless, brown copper forms',
    wrongAnswers: ['No reaction', 'Copper displaces magnesium', 'Solution turns green'],
    explanation: 'Mg is more reactive than Cu, so Mg replaces Cu in the compound: Mg + CuSO₄ → MgSO₄ + Cu. The copper metal is the brown solid!',
    hint: 'More reactive metal kicks out the less reactive one',
    tags: ['reactions', 'displacement', 'metals'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-react-003',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Electrolysis',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'During electrolysis of copper sulfate solution, what forms at the negative electrode (cathode)?',
    correctAnswer: 'Copper metal',
    wrongAnswers: ['Oxygen gas', 'Copper sulfate', 'Hydrogen gas'],
    explanation: 'Cu²⁺ ions are attracted to the negative cathode, gain electrons, and become copper metal: Cu²⁺ + 2e⁻ → Cu. This is REDUCTION (gain of electrons).',
    hint: 'Positive ions go to the negative electrode',
    tags: ['reactions', 'electrolysis', 'electrodes'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-react-004',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Acids and Alkalis',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Hydrochloric acid + sodium hydroxide → sodium chloride + water. What type of reaction is this?',
    correctAnswer: 'Neutralisation',
    wrongAnswers: ['Displacement', 'Combustion', 'Decomposition'],
    explanation: 'Acid + alkali → salt + water. This is neutralisation! The H⁺ from the acid combines with OH⁻ from the alkali to make H₂O (water).',
    hint: 'What happens when acid meets alkali?',
    tags: ['reactions', 'neutralisation', 'acids'],
    yearGroup: [10, 11]
  },

  // RATES OF REACTION
  {
    id: 'chem-gcse-exp-rate-001',
    subject: 'chemistry',
    topic: 'Rates',
    subtopic: 'Collision Theory',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Increasing temperature speeds up reactions. Why?',
    correctAnswer: 'Particles move faster, collide more often with more energy',
    wrongAnswers: ['Particles get bigger', 'The reaction becomes exothermic', 'Particles disappear faster'],
    explanation: 'Higher temperature = more kinetic energy = faster particles = more collisions = more successful collisions (with enough activation energy). Reactions speed up!',
    hint: 'Think about particle movement and collisions',
    tags: ['rates', 'collision theory', 'temperature'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-rate-002',
    subject: 'chemistry',
    topic: 'Rates',
    subtopic: 'Surface Area',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Powdered limestone reacts faster with acid than limestone chips. Why?',
    correctAnswer: 'Powder has greater surface area for acid to attack',
    wrongAnswers: ['Powder is a different substance', 'Chips are too heavy', 'The powder is hotter'],
    explanation: 'More surface area = more particles exposed = more collisions per second = faster reaction. That\'s why we grate cheese and chop vegetables!',
    hint: 'Which has more surface exposed to the acid?',
    tags: ['rates', 'surface area', 'practical'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-rate-003',
    subject: 'chemistry',
    topic: 'Rates',
    subtopic: 'Catalysts',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A catalyst speeds up a reaction. What happens to the catalyst afterwards?',
    correctAnswer: 'It\'s unchanged - can be used again',
    wrongAnswers: ['It\'s used up', 'It becomes part of the product', 'It evaporates'],
    explanation: 'Catalysts provide an alternative pathway with lower activation energy, but aren\'t consumed. Industrial processes love catalysts - they\'re economical!',
    hint: 'Can you reuse a catalyst?',
    tags: ['rates', 'catalysts', 'definition'],
    yearGroup: [10, 11]
  },

  // ORGANIC CHEMISTRY
  {
    id: 'chem-gcse-exp-org-001',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the molecular formula of butane (an alkane with 4 carbons)?',
    correctAnswer: 'C₄H₁₀',
    wrongAnswers: ['C₄H₈', 'C₄H₄', 'C₄H₁₂'],
    explanation: 'Alkanes follow CₙH₂ₙ₊₂. With 4 carbons: H = 2(4) + 2 = 10. So C₄H₁₀. Butane is used in lighters!',
    hint: 'Alkanes: CₙH₂ₙ₊₂',
    tags: ['organic', 'alkanes', 'formula'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-org-002',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How do you test for an alkene (unsaturated hydrocarbon)?',
    correctAnswer: 'Add bromine water - it turns colourless',
    wrongAnswers: ['Heat it - it catches fire', 'Add water - it dissolves', 'Smell it - alkenes smell sweet'],
    explanation: 'Bromine water is orange. Alkenes have a C=C double bond that reacts with bromine, turning the solution colourless. Alkanes don\'t react - stays orange!',
    hint: 'The classic test uses something orange...',
    tags: ['organic', 'alkenes', 'test'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-org-003',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Cracking',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why do oil refineries crack large hydrocarbon molecules?',
    correctAnswer: 'To produce smaller, more useful molecules like petrol and alkenes for plastics',
    wrongAnswers: ['Because large molecules are dangerous', 'To make the oil smell better', 'Large molecules don\'t burn'],
    explanation: 'Crude oil has too many long-chain alkanes. Cracking breaks them into shorter chains (fuels) and alkenes (for making plastics). Supply meets demand!',
    hint: 'What products are more valuable - long or short chains?',
    tags: ['organic', 'cracking', 'industrial'],
    yearGroup: [10, 11]
  },

  // ATMOSPHERE
  {
    id: 'chem-gcse-exp-atmos-001',
    subject: 'chemistry',
    topic: 'Atmosphere',
    subtopic: 'Composition',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the approximate composition of Earth\'s atmosphere?',
    correctAnswer: '78% nitrogen, 21% oxygen, 1% other gases',
    wrongAnswers: ['50% oxygen, 50% nitrogen', '78% oxygen, 21% nitrogen', '90% nitrogen, 10% carbon dioxide'],
    explanation: 'Nitrogen dominates (78%), oxygen is second (21%). The "other gases" include argon (~0.9%), CO₂ (~0.04%), and trace amounts of others.',
    hint: 'Nitrogen is most abundant, oxygen is what we breathe',
    tags: ['atmosphere', 'composition', 'percentages'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-atmos-002',
    subject: 'chemistry',
    topic: 'Atmosphere',
    subtopic: 'Climate Change',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How do greenhouse gases cause global warming?',
    correctAnswer: 'They absorb infrared radiation from Earth and re-emit it, trapping heat',
    wrongAnswers: ['They block sunlight from reaching Earth', 'They react with ozone', 'They reflect heat from the sun'],
    explanation: 'Sunlight reaches Earth and is absorbed. Earth emits infrared (heat). Greenhouse gases absorb this infrared and re-emit some back down. Heat trapped!',
    hint: 'It\'s about trapping outgoing heat, not blocking incoming light',
    tags: ['atmosphere', 'greenhouse', 'climate'],
    yearGroup: [10, 11]
  },

  // EARTH'S RESOURCES
  {
    id: 'chem-gcse-exp-resource-001',
    subject: 'chemistry',
    topic: 'Resources',
    subtopic: 'Potable Water',
    difficulty: 'gcse',
    type: 'order',
    question: 'Put these steps for making potable water in the correct order:',
    correctAnswer: ['Sedimentation', 'Filtration', 'Chlorination'],
    wrongAnswers: [],
    explanation: 'First, large particles settle (sedimentation). Then water passes through sand/gravel beds (filtration). Finally, chlorine kills bacteria (chlorination). Clean water!',
    hint: 'Remove big stuff first, kill germs last',
    tags: ['resources', 'water treatment', 'order'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp-resource-002',
    subject: 'chemistry',
    topic: 'Resources',
    subtopic: 'Life Cycle Assessment',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A life cycle assessment (LCA) examines environmental impact at which stages?',
    correctAnswer: 'Raw materials, manufacturing, use, and disposal',
    wrongAnswers: ['Only disposal', 'Only manufacturing', 'Only when the product is used'],
    explanation: 'LCA looks at EVERYTHING: extracting resources, making the product, using it, and disposing of it. A plastic bag might use little material but take 500 years to decompose!',
    hint: 'From cradle to grave - the whole journey',
    tags: ['resources', 'LCA', 'sustainability'],
    yearGroup: [10, 11]
  },
];

// ============================================
// GCSE CHEMISTRY TERMS
// ============================================

export const gcseChemistryTermsExpanded: TermDefinition[] = [
  {
    id: 'chem-gcse-term-exp-001',
    subject: 'chemistry',
    term: 'Isotope',
    definition: 'Atoms of the same element with different numbers of neutrons - same protons, different mass',
    difficulty: 'gcse',
    relatedTerms: ['protons', 'neutrons', 'atomic mass']
  },
  {
    id: 'chem-gcse-term-exp-002',
    subject: 'chemistry',
    term: 'Delocalised electrons',
    definition: 'Electrons not attached to specific atoms - free to move through a structure (like in metals)',
    difficulty: 'gcse',
    relatedTerms: ['metallic bonding', 'conductivity', 'graphite']
  },
  {
    id: 'chem-gcse-term-exp-003',
    subject: 'chemistry',
    term: 'Activation energy',
    definition: 'Minimum energy particles need to react - the energy barrier that must be overcome',
    difficulty: 'gcse',
    relatedTerms: ['collision theory', 'catalyst', 'rates']
  },
  {
    id: 'chem-gcse-term-exp-004',
    subject: 'chemistry',
    term: 'Saturated hydrocarbon',
    definition: 'Hydrocarbon with only single bonds between carbons - alkanes are saturated',
    difficulty: 'gcse',
    relatedTerms: ['alkanes', 'unsaturated', 'double bond']
  },
  {
    id: 'chem-gcse-term-exp-005',
    subject: 'chemistry',
    term: 'Reduction',
    definition: 'Gain of electrons (or loss of oxygen) - happens at the cathode during electrolysis',
    difficulty: 'gcse',
    relatedTerms: ['oxidation', 'electrolysis', 'redox']
  },
  {
    id: 'chem-gcse-term-exp-006',
    subject: 'chemistry',
    term: 'Greenhouse gas',
    definition: 'Gas that absorbs and re-emits infrared radiation - CO₂, methane, water vapour trap heat',
    difficulty: 'gcse',
    relatedTerms: ['climate change', 'atmosphere', 'infrared']
  },
];

// Combined export
export const gcseChemistryExpanded = [...gcseChemistryAtomicBonding];
