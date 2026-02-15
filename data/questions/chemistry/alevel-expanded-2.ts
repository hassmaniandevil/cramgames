/**
 * A-Level Chemistry Expanded Part 2
 * More advanced chemistry for physical, organic, and inorganic topics
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================================================
// PHYSICAL CHEMISTRY - ADVANCED
// ============================================================================

const alevelPhysicalAdvanced: Question[] = [
  {
    id: 'chem-alevel-exp2-001',
    subject: 'chemistry',
    topic: 'Thermodynamics',
    subtopic: 'Lattice Enthalpy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Using a Born-Haber cycle, which factor would INCREASE lattice enthalpy?',
    correctAnswer: 'Smaller ionic radii',
    wrongAnswers: [
      'Larger ionic radii',
      'Lower ionic charges',
      'Weaker electrostatic forces'
    ],
    explanation: 'Lattice enthalpy ∝ (charge × charge) / (sum of radii). Smaller ions get closer together = stronger attraction = higher lattice enthalpy. MgO has higher LE than NaCl for both reasons!',
    tags: ['thermodynamics', 'born-haber', 'lattice-enthalpy'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-002',
    subject: 'chemistry',
    topic: 'Thermodynamics',
    subtopic: 'Entropy Changes',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which process has the LARGEST positive entropy change?',
    correctAnswer: 'CaCO₃(s) → CaO(s) + CO₂(g)',
    wrongAnswers: [
      'H₂O(l) → H₂O(s)',
      'NaCl(s) → Na⁺(aq) + Cl⁻(aq)',
      '2H₂(g) + O₂(g) → 2H₂O(l)'
    ],
    explanation: 'Creating gas from solid = huge entropy increase. Gas molecules have massively more disorder than solids. The last option actually DECREASES entropy (3 mol gas → 0 mol gas).',
    tags: ['thermodynamics', 'entropy', 'state-changes'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-003',
    subject: 'chemistry',
    topic: 'Kinetics',
    subtopic: 'Rate-Determining Step',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The rate equation for A + 2B → C is rate = k[A]. What does this tell us about the mechanism?',
    correctAnswer: 'The rate-determining step involves only A',
    wrongAnswers: [
      'B is not involved in the reaction',
      'The reaction is instantaneous',
      'A is a catalyst'
    ],
    explanation: 'Rate equations tell us what\'s in the rate-determining step. [B] not appearing means B reacts AFTER the slow step. The molecularity of RDS equals the overall order.',
    tags: ['kinetics', 'mechanisms', 'rds'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-004',
    subject: 'chemistry',
    topic: 'Equilibria',
    subtopic: 'Le Chatelier',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = -92 kJ/mol. What conditions favor ammonia production?',
    correctAnswer: 'Low temperature and high pressure',
    wrongAnswers: [
      'High temperature and low pressure',
      'High temperature and high pressure',
      'Low temperature and low pressure'
    ],
    explanation: 'Exothermic = low T favors products. 4 moles → 2 moles = high P favors products. But industry uses 450°C anyway - why? Low T is too slow! The Haber process is a beautiful compromise.',
    tags: ['equilibria', 'le-chatelier', 'industry'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-005',
    subject: 'chemistry',
    topic: 'Electrochemistry',
    subtopic: 'Fuel Cells',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In an alkaline hydrogen fuel cell, what happens at the negative electrode?',
    correctAnswer: 'H₂ is oxidized: H₂ + 2OH⁻ → 2H₂O + 2e⁻',
    wrongAnswers: [
      'O₂ is reduced to water',
      'H₂ is reduced to H⁺',
      'Water is electrolyzed'
    ],
    explanation: 'Fuel cells reverse electrolysis. At the negative electrode (anode), hydrogen is oxidized, releasing electrons that flow through the circuit. The only byproduct is water - clean energy!',
    tags: ['electrochemistry', 'fuel-cells', 'green-chemistry'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-006',
    subject: 'chemistry',
    topic: 'Acids and Bases',
    subtopic: 'Ka and pKa',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Ethanoic acid has Ka = 1.7 × 10⁻⁵. What is its pKa?',
    correctAnswer: '4.77',
    wrongAnswers: [
      '5.23',
      '-4.77',
      '1.7'
    ],
    explanation: 'pKa = -log(Ka) = -log(1.7 × 10⁻⁵) = -(log 1.7 + log 10⁻⁵) = -(0.23 - 5) = 4.77. Lower pKa = stronger acid.',
    tags: ['acids-bases', 'pka', 'calculations'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// ORGANIC CHEMISTRY - ADVANCED MECHANISMS
// ============================================================================

const alevelOrganicAdvanced: Question[] = [
  {
    id: 'chem-alevel-exp2-007',
    subject: 'chemistry',
    topic: 'Organic Synthesis',
    subtopic: 'Retrosynthesis',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'To convert ethanol to ethyl ethanoate, which reagent is needed?',
    correctAnswer: 'Ethanoic acid with concentrated H₂SO₄ catalyst',
    wrongAnswers: [
      'Sodium hydroxide',
      'Potassium dichromate',
      'Hydrogen bromide'
    ],
    explanation: 'Esterification: alcohol + carboxylic acid → ester + water. The H₂SO₄ catalyzes by protonating the carbonyl, making it more electrophilic. Reflux is needed as the reaction is slow.',
    tags: ['organic', 'synthesis', 'esters'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-008',
    subject: 'chemistry',
    topic: 'Carbonyl Chemistry',
    subtopic: 'Reduction',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the product when propanal is reduced with NaBH₄?',
    correctAnswer: 'Propan-1-ol',
    wrongAnswers: [
      'Propan-2-ol',
      'Propanoic acid',
      'Propane'
    ],
    explanation: 'NaBH₄ is a reducing agent that provides H⁻ (hydride) to the carbonyl carbon. Aldehydes → primary alcohols. Ketones → secondary alcohols. It\'s a selective reducing agent - doesn\'t reduce C=C.',
    tags: ['organic', 'reduction', 'carbonyls'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-009',
    subject: 'chemistry',
    topic: 'Carbonyl Chemistry',
    subtopic: 'Nucleophilic Addition',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the mechanism for HCN addition to a carbonyl?',
    correctAnswer: 'Nucleophilic addition',
    wrongAnswers: [
      'Electrophilic addition',
      'Free radical substitution',
      'Nucleophilic substitution'
    ],
    explanation: 'CN⁻ is the nucleophile, attacking the δ+ carbonyl carbon. A new C-C bond forms! The product (cyanohydrin) has one more carbon - useful for chain extension.',
    tags: ['organic', 'mechanisms', 'nucleophilic-addition'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-010',
    subject: 'chemistry',
    topic: 'Amines',
    subtopic: 'Basicity',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Rank these bases in order of strength: ammonia, methylamine, phenylamine.',
    correctAnswer: 'Methylamine > ammonia > phenylamine',
    wrongAnswers: [
      'Phenylamine > ammonia > methylamine',
      'Ammonia > methylamine > phenylamine',
      'Phenylamine > methylamine > ammonia'
    ],
    explanation: 'Methyl group donates electrons → more available lone pair → stronger base. Phenyl group delocalizes the lone pair into the ring → less available → weaker base. Electron density on N is key!',
    tags: ['organic', 'amines', 'basicity'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-011',
    subject: 'chemistry',
    topic: 'Amino Acids',
    subtopic: 'Zwitterions',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'At its isoelectric point, an amino acid exists as what?',
    correctAnswer: 'A zwitterion with no net charge',
    wrongAnswers: [
      'A cation',
      'An anion',
      'An uncharged molecule with no ions'
    ],
    explanation: 'At the isoelectric point (pI), the amino acid has both NH₃⁺ and COO⁻ groups - a zwitterion. It carries charges but the net charge is zero. This is why it doesn\'t move in electrophoresis at pI.',
    tags: ['organic', 'amino-acids', 'biochemistry'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-012',
    subject: 'chemistry',
    topic: 'Proteins',
    subtopic: 'Structure',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What type of bond holds together the secondary structure of proteins?',
    correctAnswer: 'Hydrogen bonds between C=O and N-H of the backbone',
    wrongAnswers: [
      'Peptide bonds',
      'Disulfide bridges',
      'Ionic bonds between R groups'
    ],
    explanation: 'Secondary structure (α-helix, β-sheet) is stabilized by H-bonds between backbone atoms. Primary = peptide bonds (sequence). Tertiary = all interactions including R group bonding.',
    tags: ['organic', 'proteins', 'structure'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// INORGANIC CHEMISTRY - ADVANCED
// ============================================================================

const alevelInorganicAdvanced: Question[] = [
  {
    id: 'chem-alevel-exp2-013',
    subject: 'chemistry',
    topic: 'Transition Metals',
    subtopic: 'Redox Titrations',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In a redox titration of Fe²⁺ with MnO₄⁻, what colour change indicates the endpoint?',
    correctAnswer: 'Colourless to permanent pale pink',
    wrongAnswers: [
      'Purple to colourless',
      'Green to purple',
      'Yellow to orange'
    ],
    explanation: 'MnO₄⁻ (purple) is reduced to Mn²⁺ (colourless) by Fe²⁺. At the endpoint, excess MnO₄⁻ isn\'t reduced → pale pink persists. It\'s self-indicating - no indicator needed!',
    tags: ['transition-metals', 'titrations', 'redox'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-014',
    subject: 'chemistry',
    topic: 'Transition Metals',
    subtopic: 'Bidentate Ligands',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'EDTA⁴⁻ is a hexadentate ligand. What does this mean?',
    correctAnswer: 'It forms 6 coordinate bonds to one metal ion',
    wrongAnswers: [
      'It has 6 carbon atoms',
      'It bonds to 6 different metal ions',
      'It has a charge of -6'
    ],
    explanation: 'Polydentate ligands have multiple lone pairs that can bond. EDTA wraps around a metal ion, forming a very stable complex (chelate effect). Used in treating heavy metal poisoning!',
    tags: ['transition-metals', 'ligands', 'chelation'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-015',
    subject: 'chemistry',
    topic: 'Transition Metals',
    subtopic: 'Isomerism',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: '[Co(NH₃)₄Cl₂]⁺ can exist as cis and trans isomers. What type of isomerism is this?',
    correctAnswer: 'Geometric (cis-trans) isomerism',
    wrongAnswers: [
      'Optical isomerism',
      'Structural isomerism',
      'Ionisation isomerism'
    ],
    explanation: 'In octahedral complexes with formula MA₄B₂, the B ligands can be adjacent (cis, 90°) or opposite (trans, 180°). These have different properties - cis-platin is an anti-cancer drug!',
    tags: ['transition-metals', 'isomerism', 'complexes'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-016',
    subject: 'chemistry',
    topic: 'Periodicity',
    subtopic: 'Diagonal Relationships',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Lithium and magnesium show diagonal relationship. Which property do they share?',
    correctAnswer: 'Both form nitrides when heated in nitrogen',
    wrongAnswers: [
      'Both form strongly alkaline hydroxides',
      'Both carbonates decompose at very high temperatures',
      'Both are liquid at room temperature'
    ],
    explanation: 'Li and Mg have similar charge density (charge/radius ratio). Both form nitrides directly (6Li + N₂ → 2Li₃N), unlike other Group 1 metals. Diagonal relationships = similar chemistry!',
    tags: ['periodicity', 'diagonal', 'group1-2'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// PRACTICAL CHEMISTRY
// ============================================================================

const alevelPracticalChemistry: Question[] = [
  {
    id: 'chem-alevel-exp2-017',
    subject: 'chemistry',
    topic: 'Practical Skills',
    subtopic: 'Titrations',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why is a white tile placed under the conical flask during titration?',
    correctAnswer: 'To see the colour change more clearly',
    wrongAnswers: [
      'To keep the flask warm',
      'To prevent spillage',
      'To neutralize the acid'
    ],
    explanation: 'The white background provides contrast, making the subtle endpoint colour change easier to spot. Small details in technique make big differences in accuracy!',
    tags: ['practical', 'titration', 'technique'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-018',
    subject: 'chemistry',
    topic: 'Practical Skills',
    subtopic: 'Recrystallisation',
    difficulty: 'alevel',
    type: 'order',
    question: 'Order the steps for recrystallising an impure solid.',
    correctAnswer: ['Dissolve in minimum hot solvent', 'Filter hot solution', 'Cool slowly', 'Filter crystals', 'Wash with cold solvent'],
    explanation: 'Dissolve in minimum hot solvent (impurities stay dissolved). Filter to remove insoluble impurities. Cool slowly for pure crystals. Filter and wash with cold solvent to remove soluble impurities.',
    tags: ['practical', 'purification', 'technique'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-alevel-exp2-019',
    subject: 'chemistry',
    topic: 'Practical Skills',
    subtopic: 'Error Analysis',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A burette has uncertainty ±0.05 cm³. For a titre of 25.00 cm³, what is the percentage uncertainty?',
    correctAnswer: '0.4% (2 × 0.05/25 × 100)',
    wrongAnswers: [
      '0.2%',
      '0.05%',
      '2%'
    ],
    explanation: 'Two readings (start and end) so total uncertainty = 2 × 0.05 = 0.10 cm³. Percentage = (0.10/25.00) × 100 = 0.4%. Always consider all measurements contributing to uncertainty!',
    tags: ['practical', 'errors', 'calculations'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const alevelChemistryTermsExpanded2: TermDefinition[] = [
  {
    id: 'chem-alevel-exp2-term-001',
    subject: 'chemistry',
    topic: 'Thermodynamics',
    difficulty: 'alevel',
    term: 'Lattice Enthalpy',
    definition: 'Energy change when 1 mole of an ionic compound forms from gaseous ions, or dissociates into gaseous ions.',
    example: 'Na⁺(g) + Cl⁻(g) → NaCl(s), ΔH = -787 kJ/mol',
    tags: ['thermodynamics', 'ionic-bonding']
  },
  {
    id: 'chem-alevel-exp2-term-002',
    subject: 'chemistry',
    topic: 'Thermodynamics',
    difficulty: 'alevel',
    term: 'Born-Haber Cycle',
    definition: 'An enthalpy cycle that uses Hess\'s law to calculate lattice enthalpy indirectly.',
    example: 'Using known values of atomisation, ionisation, and formation enthalpies to find LE.',
    tags: ['thermodynamics', 'cycles', 'hess']
  },
  {
    id: 'chem-alevel-exp2-term-003',
    subject: 'chemistry',
    topic: 'Kinetics',
    difficulty: 'alevel',
    term: 'Rate-Determining Step',
    definition: 'The slowest step in a reaction mechanism, which determines the overall rate.',
    example: 'SN1 reactions: ionisation to form carbocation is the RDS.',
    tags: ['kinetics', 'mechanisms']
  },
  {
    id: 'chem-alevel-exp2-term-004',
    subject: 'chemistry',
    topic: 'Organic',
    difficulty: 'alevel',
    term: 'Cyanohydrin',
    definition: 'Product of nucleophilic addition of HCN to an aldehyde or ketone, containing -OH and -CN groups.',
    example: 'Ethanal + HCN → 2-hydroxypropanenitrile',
    tags: ['organic', 'carbonyls', 'synthesis']
  },
  {
    id: 'chem-alevel-exp2-term-005',
    subject: 'chemistry',
    topic: 'Organic',
    difficulty: 'alevel',
    term: 'Zwitterion',
    definition: 'A molecule with both positive and negative charges but zero net charge.',
    example: 'Amino acids at their isoelectric point: H₃N⁺-CHR-COO⁻',
    tags: ['organic', 'amino-acids', 'biochemistry']
  },
  {
    id: 'chem-alevel-exp2-term-006',
    subject: 'chemistry',
    topic: 'Inorganic',
    difficulty: 'alevel',
    term: 'Chelate Effect',
    definition: 'The enhanced stability of complexes formed with polydentate ligands compared to monodentate.',
    example: 'EDTA complexes are more stable than equivalent hexaaqua complexes.',
    tags: ['transition-metals', 'complexes', 'stability']
  },
  {
    id: 'chem-alevel-exp2-term-007',
    subject: 'chemistry',
    topic: 'Inorganic',
    difficulty: 'alevel',
    term: 'Disproportionation',
    definition: 'A reaction where the same element is both oxidized and reduced.',
    example: '2Cu⁺ → Cu²⁺ + Cu (Cu⁺ oxidized to Cu²⁺ and reduced to Cu)',
    tags: ['redox', 'transition-metals']
  }
];

// ============================================================================
// FORMULAS
// ============================================================================

export const alevelChemistryFormulasExpanded2: Formula[] = [
  {
    id: 'chem-alevel-exp2-form-001',
    subject: 'chemistry',
    topic: 'Thermodynamics',
    difficulty: 'alevel',
    name: 'Entropy Change (Standard)',
    formula: 'ΔS° = ΣS°(products) - ΣS°(reactants)',
    variables: [
      { symbol: 'ΔS°', meaning: 'Standard entropy change (J K⁻¹ mol⁻¹)' },
      { symbol: 'S°', meaning: 'Standard molar entropy' }
    ],
    explanation: 'Calculate total entropy change from tabulated entropy values.',
    tags: ['thermodynamics', 'entropy']
  },
  {
    id: 'chem-alevel-exp2-form-002',
    subject: 'chemistry',
    topic: 'Acids and Bases',
    difficulty: 'alevel',
    name: 'Ionic Product of Water',
    formula: 'Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C',
    variables: [
      { symbol: 'Kw', meaning: 'Ionic product of water' },
      { symbol: '[H⁺]', meaning: 'Hydrogen ion concentration' },
      { symbol: '[OH⁻]', meaning: 'Hydroxide ion concentration' }
    ],
    explanation: 'Links pH and pOH: pH + pOH = 14 at 25°C.',
    tags: ['acids-bases', 'equilibrium']
  },
  {
    id: 'chem-alevel-exp2-form-003',
    subject: 'chemistry',
    topic: 'Kinetics',
    difficulty: 'alevel',
    name: 'Half-life (First Order)',
    formula: 't½ = ln2/k = 0.693/k',
    variables: [
      { symbol: 't½', meaning: 'Half-life (s)' },
      { symbol: 'k', meaning: 'Rate constant (s⁻¹)' }
    ],
    explanation: 'Half-life is constant for first-order reactions, independent of concentration.',
    tags: ['kinetics', 'half-life', 'first-order']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const alevelChemistryExpanded2: Question[] = [
  ...alevelPhysicalAdvanced,
  ...alevelOrganicAdvanced,
  ...alevelInorganicAdvanced,
  ...alevelPracticalChemistry
];
