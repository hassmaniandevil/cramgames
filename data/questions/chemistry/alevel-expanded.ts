/**
 * A-Level Chemistry Expanded Question Bank
 * Fun-first gamified questions for advanced chemistry
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================
// PHYSICAL CHEMISTRY
// ============================================

export const alevelChemistryPhysical: Question[] = [
  // ATOMIC STRUCTURE
  {
    id: 'chem-alevel-exp-atom-001',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Electron Configuration',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Chromium has electron configuration [Ar] 3d⁵ 4s¹, not [Ar] 3d⁴ 4s². Why?',
    correctAnswer: 'Half-filled d subshell is more stable than partially filled',
    wrongAnswers: ['The 4s fills before 3d', 'Chromium is magnetic', 'It\'s a transcription error'],
    explanation: 'Half-filled and fully-filled d subshells have extra stability due to electron exchange energy. Cr "promotes" an electron from 4s to 3d to achieve this.',
    hint: 'Think about special stability of half-filled subshells',
    tags: ['atomic structure', 'electron configuration', 'd-block'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp-atom-002',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Ionisation Energy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'First ionisation energy generally increases across a period. Why does aluminium have lower IE than magnesium?',
    correctAnswer: 'Al loses a 3p electron (higher energy) vs Mg\'s 3s electron',
    wrongAnswers: ['Al is a larger atom', 'Al has more protons', 'Mg is more reactive'],
    explanation: 'Mg: [Ne] 3s². Al: [Ne] 3s² 3p¹. The 3p electron is slightly higher energy and shielded by 3s electrons, so easier to remove despite more protons.',
    hint: 'Which subshell does each element lose an electron from?',
    tags: ['atomic structure', 'ionisation energy', 'trends'],
    yearGroup: [12, 13]
  },

  // BONDING
  {
    id: 'chem-alevel-exp-bond-001',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Hybridisation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Carbon in methane is sp³ hybridised. What shape does this give?',
    correctAnswer: 'Tetrahedral with 109.5° bond angles',
    wrongAnswers: ['Square planar with 90° angles', 'Trigonal planar with 120° angles', 'Linear with 180° angles'],
    explanation: 'sp³ = one s and three p orbitals hybridise to form four equivalent sp³ orbitals. These repel equally, giving tetrahedral geometry. Classic VSEPR!',
    hint: 'Four equivalent sp³ orbitals arrange symmetrically',
    tags: ['bonding', 'hybridisation', 'shapes'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp-bond-002',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Hybridisation',
    difficulty: 'alevel',
    type: 'match',
    question: 'Match each hybridisation to its geometry:',
    correctAnswer: ['sp → Linear', 'sp² → Trigonal planar', 'sp³ → Tetrahedral'],
    wrongAnswers: [],
    explanation: 'sp: 2 regions, 180° (CO₂). sp²: 3 regions, 120° (BF₃). sp³: 4 regions, 109.5° (CH₄). The number in sp tells you geometry!',
    hint: 'Count the hybrid orbitals in each case',
    tags: ['bonding', 'hybridisation', 'geometry'],
    yearGroup: [12, 13]
  },

  // ENERGETICS
  {
    id: 'chem-alevel-exp-ener-001',
    subject: 'chemistry',
    topic: 'Energetics',
    subtopic: 'Enthalpy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Using Hess\'s Law, calculate ΔH for C(s) + O₂(g) → CO₂(g) given: CO(g) + ½O₂(g) → CO₂(g) ΔH = -283 kJ/mol and C(s) + ½O₂(g) → CO(g) ΔH = -110 kJ/mol',
    correctAnswer: '-393 kJ/mol',
    wrongAnswers: ['-173 kJ/mol', '+393 kJ/mol', '-503 kJ/mol'],
    explanation: 'Add the two equations: C + ½O₂ → CO (-110) and CO + ½O₂ → CO₂ (-283). Sum: C + O₂ → CO₂, ΔH = -110 + (-283) = -393 kJ/mol',
    hint: 'Energy is conserved - add the routes that get you from reactants to products',
    tags: ['energetics', 'Hess\'s Law', 'calculation'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp-ener-002',
    subject: 'chemistry',
    topic: 'Energetics',
    subtopic: 'Born-Haber Cycles',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In a Born-Haber cycle for NaCl, which step releases the most energy?',
    correctAnswer: 'Lattice enthalpy (exothermic)',
    wrongAnswers: ['Ionisation energy of Na', 'Atomisation of Cl₂', 'Electron affinity of Cl'],
    explanation: 'Lattice enthalpy for NaCl is about -787 kJ/mol - the strong ionic bonds forming release huge energy. This makes the overall process exothermic despite endothermic steps.',
    hint: 'Which step involves the strongest interactions?',
    tags: ['energetics', 'Born-Haber', 'lattice'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp-ener-003',
    subject: 'chemistry',
    topic: 'Energetics',
    subtopic: 'Entropy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which reaction has the greatest positive entropy change?',
    correctAnswer: 'CaCO₃(s) → CaO(s) + CO₂(g)',
    wrongAnswers: ['2H₂(g) + O₂(g) → 2H₂O(l)', 'Na(s) + ½Cl₂(g) → NaCl(s)', 'N₂(g) + 3H₂(g) → 2NH₃(g)'],
    explanation: 'Solids → gases = huge entropy increase! CaCO₃ decomposition creates a gas from a solid. The others make fewer gas moles or liquids/solids.',
    hint: 'Gases have much higher entropy than solids or liquids',
    tags: ['energetics', 'entropy', 'disorder'],
    yearGroup: [12, 13]
  },

  // EQUILIBRIUM
  {
    id: 'chem-alevel-exp-eq-001',
    subject: 'chemistry',
    topic: 'Equilibrium',
    subtopic: 'Le Chatelier\'s Principle',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'N₂ + 3H₂ ⇌ 2NH₃ (ΔH = -92 kJ/mol). How do you maximise NH₃ yield?',
    correctAnswer: 'High pressure, low temperature, remove NH₃',
    wrongAnswers: ['Low pressure, high temperature', 'High pressure, high temperature', 'Low pressure, low temperature'],
    explanation: 'Fewer moles on right (4→2) so high pressure favours products. Exothermic so low temperature favours products. Remove NH₃ to shift equilibrium right. This is the Haber process!',
    hint: 'Apply Le Chatelier to pressure, temperature, and concentration',
    tags: ['equilibrium', 'Le Chatelier', 'Haber process'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp-eq-002',
    subject: 'chemistry',
    topic: 'Equilibrium',
    subtopic: 'Kc',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'For A + 2B ⇌ C + D, what is the expression for Kc?',
    correctAnswer: 'Kc = [C][D]/[A][B]²',
    wrongAnswers: ['Kc = [A][B]²/[C][D]', 'Kc = [C][D]/[A][B]', 'Kc = [C]+[D]/[A]+[B]'],
    explanation: 'Kc = products/reactants, with each concentration raised to its stoichiometric coefficient. [B]² because there\'s 2B in the equation.',
    hint: 'Products over reactants, each raised to coefficient power',
    tags: ['equilibrium', 'Kc', 'expression'],
    yearGroup: [12, 13]
  },

  // KINETICS
  {
    id: 'chem-alevel-exp-kin-001',
    subject: 'chemistry',
    topic: 'Kinetics',
    subtopic: 'Rate Equations',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Rate = k[A][B]². If [B] is doubled, what happens to the rate?',
    correctAnswer: 'Rate quadruples (×4)',
    wrongAnswers: ['Rate doubles', 'Rate increases by 8×', 'Rate stays the same'],
    explanation: 'Rate depends on [B]². If [B] → 2[B], then [B]² → 4[B]². Rate increases by factor of 4 (quadruples).',
    hint: 'Square the change in concentration',
    tags: ['kinetics', 'rate equation', 'order'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp-kin-002',
    subject: 'chemistry',
    topic: 'Kinetics',
    subtopic: 'Half-life',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A first-order reaction has constant half-life regardless of concentration. What is the integrated rate equation?',
    correctAnswer: 'ln[A] = -kt + ln[A]₀',
    wrongAnswers: ['[A] = -kt + [A]₀', '1/[A] = kt + 1/[A]₀', '[A]² = -kt + [A]₀²'],
    explanation: 'First order: rate = k[A]. Integrating gives ln[A] = -kt + ln[A]₀. Plot ln[A] vs t = straight line with gradient -k. Half-life = ln2/k.',
    hint: 'First order reactions give ln plots, second order give 1/[A] plots',
    tags: ['kinetics', 'first order', 'half-life'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp-kin-003',
    subject: 'chemistry',
    topic: 'Kinetics',
    subtopic: 'Mechanisms',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The rate-determining step is the slowest step. If mechanism is: Step 1 (fast): A + B → C, Step 2 (slow): C + D → E, what is the rate equation?',
    correctAnswer: 'Rate = k[A][B][D] or similar (depends on how C is expressed)',
    wrongAnswers: ['Rate = k[C][D]', 'Rate = k[A][B]', 'Rate = k[E]'],
    explanation: 'RDS involves C and D, but C is formed from A and B. C = k[A][B]. Substituting: Rate = k\'[A][B][D]. The rate equation involves species before and at the RDS.',
    hint: 'Rate equation comes from the RDS, but intermediates must be substituted',
    tags: ['kinetics', 'mechanisms', 'RDS'],
    yearGroup: [12, 13]
  },

  // ACIDS AND BASES
  {
    id: 'chem-alevel-exp-acid-001',
    subject: 'chemistry',
    topic: 'Acids and Bases',
    subtopic: 'pH',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the pH of 0.01 mol/dm³ HCl (strong acid).',
    correctAnswer: '2',
    wrongAnswers: [],
    explanation: 'Strong acid fully dissociates: [H⁺] = [HCl] = 0.01 = 10⁻² mol/dm³. pH = -log[H⁺] = -log(10⁻²) = 2',
    hint: 'For strong acids, [H⁺] = acid concentration',
    tags: ['acids', 'pH', 'calculation'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp-acid-002',
    subject: 'chemistry',
    topic: 'Acids and Bases',
    subtopic: 'Buffers',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A buffer made from ethanoic acid and sodium ethanoate resists pH change. How does it neutralise added acid?',
    correctAnswer: 'Ethanoate ions (conjugate base) react with H⁺',
    wrongAnswers: ['Ethanoic acid reacts with H⁺', 'Water absorbs the H⁺', 'Sodium ions neutralise H⁺'],
    explanation: 'CH₃COO⁻ + H⁺ → CH₃COOH. The conjugate base mops up added H⁺, forming more weak acid. [H⁺] barely changes, so pH is buffered.',
    hint: 'Which component of the buffer is a base?',
    tags: ['acids', 'buffers', 'mechanism'],
    yearGroup: [12, 13]
  },
];

// ============================================
// ORGANIC CHEMISTRY
// ============================================

export const alevelChemistryOrganic: Question[] = [
  // MECHANISMS
  {
    id: 'chem-alevel-exp-org-001',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Mechanisms',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Alkenes react with bromine via electrophilic addition. In the first step, what attacks what?',
    correctAnswer: 'The electron-rich C=C attacks the δ+ end of Br-Br',
    wrongAnswers: ['Bromine attacks the carbon', 'A carbocation attacks bromine', 'Free radicals are involved'],
    explanation: 'The π electrons in C=C are nucleophilic. They attack the δ+ bromine (induced by approach). Br-Br heterolytically cleaves, forming carbocation intermediate.',
    hint: 'Think about where the electrons are',
    tags: ['organic', 'mechanisms', 'electrophilic addition'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp-org-002',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Mechanisms',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'SN1 vs SN2: which mechanism is favoured by tertiary halogenoalkanes?',
    correctAnswer: 'SN1 (carbocation stability outweighs steric hindrance)',
    wrongAnswers: ['SN2', 'Both equally', 'Neither - they don\'t react'],
    explanation: 'Tertiary alkyl groups: 1) Sterically hindered (blocks SN2), 2) Form stable 3° carbocations (stabilised by hyperconjugation). SN1 wins!',
    hint: 'Think about carbocation stability and steric effects',
    tags: ['organic', 'mechanisms', 'substitution'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp-org-003',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Isomerism',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'E/Z isomerism requires different groups on each carbon of a C=C double bond and...',
    correctAnswer: 'Restricted rotation around the double bond',
    wrongAnswers: ['A chiral centre', 'At least 4 carbon atoms', 'A halogen attached'],
    explanation: 'The double bond can\'t rotate, so groups stay fixed on one side or the other. If both carbons have two different groups, E/Z isomers exist.',
    hint: 'What property of double bonds prevents interconversion?',
    tags: ['organic', 'isomerism', 'E-Z'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp-org-004',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Optical Isomerism',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A chiral molecule rotates plane-polarised light. A racemic mixture contains...',
    correctAnswer: '50:50 mixture of enantiomers - no net rotation',
    wrongAnswers: ['Only one enantiomer', 'Double rotation', 'Absorbs all light'],
    explanation: 'Enantiomers rotate light equally but in opposite directions. 50:50 mixture = rotations cancel out = optically inactive.',
    hint: 'What happens when equal opposite effects combine?',
    tags: ['organic', 'isomerism', 'chirality'],
    yearGroup: [12, 13]
  },

  // CARBONYL COMPOUNDS
  {
    id: 'chem-alevel-exp-org-005',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Carbonyls',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'How do you distinguish an aldehyde from a ketone?',
    correctAnswer: 'Aldehydes give silver mirror with Tollens\'; ketones don\'t',
    wrongAnswers: ['Aldehydes don\'t react with NaBH₄', 'Ketones give yellow precipitate with 2,4-DNP', 'Aldehydes don\'t form carboxylic acids'],
    explanation: 'Aldehydes are easily oxidised to carboxylic acids. Tollens\' (Ag⁺/NH₃) is a mild oxidising agent - aldehydes reduce it to silver mirror. Ketones resist oxidation.',
    hint: 'Think about oxidation susceptibility',
    tags: ['organic', 'carbonyls', 'tests'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp-org-006',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Carbonyls',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Nucleophilic addition to a carbonyl: what attacks the carbonyl carbon?',
    correctAnswer: 'A nucleophile (electron-rich species) attacks the δ+ carbon',
    wrongAnswers: ['An electrophile attacks the δ- oxygen', 'Free radicals attack', 'H⁺ catalyses direct addition'],
    explanation: 'C=O is polarised (C is δ+, O is δ-). Nucleophiles (e.g., CN⁻, H⁻ from NaBH₄) donate electrons to the δ+ carbon. This is the key step in carbonyl chemistry!',
    hint: 'Where are the electrons going?',
    tags: ['organic', 'carbonyls', 'mechanisms'],
    yearGroup: [12, 13]
  },

  // POLYMERISATION
  {
    id: 'chem-alevel-exp-org-007',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Condensation polymerisation differs from addition polymerisation because...',
    correctAnswer: 'A small molecule (usually water) is eliminated in each step',
    wrongAnswers: ['It requires a catalyst', 'Only one monomer type is used', 'The polymer is always biodegradable'],
    explanation: 'Addition: monomers add directly (no loss). Condensation: functional groups react, eliminating H₂O (or similar). Examples: polyesters, polyamides (nylon).',
    hint: 'The name "condensation" hints at what happens',
    tags: ['organic', 'polymers', 'types'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp-org-008',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Nylon-6,6 is formed from hexane-1,6-diamine and hexanedioic acid. What functional group links the monomers?',
    correctAnswer: 'Amide (-CONH-)',
    wrongAnswers: ['Ester (-COO-)', 'Ether (-O-)', 'Peptide bond (only in proteins)'],
    explanation: 'Diamine (-NH₂) + diacid (-COOH) → amide link (-CONH-) + H₂O. Nylon is a polyamide. Same amide bond as in proteins!',
    hint: 'What forms when -NH₂ reacts with -COOH?',
    tags: ['organic', 'polymers', 'amides'],
    yearGroup: [12, 13]
  },
];

// ============================================
// A-LEVEL CHEMISTRY TERMS
// ============================================

export const alevelChemistryTermsExpanded: TermDefinition[] = [
  {
    id: 'chem-alevel-term-exp-001',
    subject: 'chemistry',
    term: 'Hybridisation',
    definition: 'Mixing of atomic orbitals to form new hybrid orbitals for bonding - sp, sp², sp³',
    difficulty: 'alevel',
    relatedTerms: ['bonding', 'orbitals', 'geometry']
  },
  {
    id: 'chem-alevel-term-exp-002',
    subject: 'chemistry',
    term: 'Lattice enthalpy',
    definition: 'Energy released when gaseous ions form ionic lattice (or energy needed to separate)',
    difficulty: 'alevel',
    relatedTerms: ['Born-Haber', 'ionic', 'energetics']
  },
  {
    id: 'chem-alevel-term-exp-003',
    subject: 'chemistry',
    term: 'Entropy',
    definition: 'Measure of disorder/randomness in a system - S, units J/K/mol',
    difficulty: 'alevel',
    relatedTerms: ['thermodynamics', 'Gibbs', 'spontaneity']
  },
  {
    id: 'chem-alevel-term-exp-004',
    subject: 'chemistry',
    term: 'Equilibrium constant Kc',
    definition: 'Ratio of product to reactant concentrations at equilibrium - only changes with temperature',
    difficulty: 'alevel',
    relatedTerms: ['equilibrium', 'Kp', 'Le Chatelier']
  },
  {
    id: 'chem-alevel-term-exp-005',
    subject: 'chemistry',
    term: 'Rate-determining step',
    definition: 'The slowest step in a mechanism - controls overall reaction rate',
    difficulty: 'alevel',
    relatedTerms: ['kinetics', 'mechanism', 'rate equation']
  },
  {
    id: 'chem-alevel-term-exp-006',
    subject: 'chemistry',
    term: 'Buffer solution',
    definition: 'Solution that resists pH change on addition of small amounts of acid or base',
    difficulty: 'alevel',
    relatedTerms: ['pH', 'weak acid', 'conjugate base']
  },
  {
    id: 'chem-alevel-term-exp-007',
    subject: 'chemistry',
    term: 'Nucleophile',
    definition: 'Electron-rich species that donates electrons to an electron-deficient atom',
    difficulty: 'alevel',
    relatedTerms: ['mechanisms', 'substitution', 'addition']
  },
  {
    id: 'chem-alevel-term-exp-008',
    subject: 'chemistry',
    term: 'Chiral centre',
    definition: 'Carbon atom bonded to four different groups - causes optical isomerism',
    difficulty: 'alevel',
    relatedTerms: ['isomerism', 'enantiomers', 'optical activity']
  },
];

// Combined export
export const alevelChemistryExpanded = [
  ...alevelChemistryPhysical,
  ...alevelChemistryOrganic,
];
