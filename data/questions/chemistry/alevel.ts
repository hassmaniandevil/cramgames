/**
 * A-Level Chemistry Question Bank
 * Comprehensive questions for UK A-Level Chemistry curriculum
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================================================
// PHYSICAL CHEMISTRY - 25 Questions
// ============================================================================

const physicalChemistryQuestions: Question[] = [
  // Enthalpy (5 questions)
  {
    id: 'chem-al-phys-001',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Enthalpy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the standard enthalpy of formation of an element in its standard state?',
    correctAnswer: '0 kJ mol⁻¹',
    wrongAnswers: ['1 kJ mol⁻¹', '-1 kJ mol⁻¹', 'Variable depending on the element'],
    options: ['0 kJ mol⁻¹', '1 kJ mol⁻¹', '-1 kJ mol⁻¹', 'Variable depending on the element'],
    explanation: 'By definition, the standard enthalpy of formation of an element in its standard state is zero.',
    tags: ['enthalpy', 'thermodynamics'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-002',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Enthalpy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which equation correctly represents Hess\'s Law?',
    correctAnswer: 'ΔH(reaction) = ΣΔHf(products) - ΣΔHf(reactants)',
    wrongAnswers: ['ΔH(reaction) = ΣΔHf(reactants) - ΣΔHf(products)', 'ΔH(reaction) = ΣΔHf(products) + ΣΔHf(reactants)', 'ΔH(reaction) = ΣΔHf(products) × ΣΔHf(reactants)'],
    options: ['ΔH(reaction) = ΣΔHf(products) - ΣΔHf(reactants)', 'ΔH(reaction) = ΣΔHf(reactants) - ΣΔHf(products)', 'ΔH(reaction) = ΣΔHf(products) + ΣΔHf(reactants)', 'ΔH(reaction) = ΣΔHf(products) × ΣΔHf(reactants)'],
    explanation: 'Hess\'s Law states that enthalpy change is independent of the route taken, calculated as products minus reactants.',
    tags: ['enthalpy', 'Hess\'s Law'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-003',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Enthalpy',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the enthalpy change for: C(s) + O₂(g) → CO₂(g), given bond energies: C=O = 805 kJ mol⁻¹, O=O = 498 kJ mol⁻¹, and atomisation of C = 715 kJ mol⁻¹. Give your answer in kJ mol⁻¹.',
    correctAnswer: -397,
    explanation: 'Bonds broken: C(s)→C(g) = 715, O=O = 498. Total = 1213 kJ. Bonds made: 2 × C=O = 1610 kJ. ΔH = 1213 - 1610 = -397 kJ mol⁻¹',
    tags: ['enthalpy', 'bond energies', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-004',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Enthalpy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the lattice enthalpy of an ionic compound?',
    correctAnswer: 'The enthalpy change when 1 mole of ionic solid forms from gaseous ions under standard conditions',
    wrongAnswers: ['The enthalpy change when ions dissolve in water', 'The enthalpy change when atoms form ions', 'The enthalpy change when a solid melts'],
    options: ['The enthalpy change when 1 mole of ionic solid forms from gaseous ions under standard conditions', 'The enthalpy change when ions dissolve in water', 'The enthalpy change when atoms form ions', 'The enthalpy change when a solid melts'],
    explanation: 'Lattice enthalpy is the energy released when gaseous ions come together to form an ionic lattice.',
    tags: ['enthalpy', 'lattice enthalpy', 'Born-Haber'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-005',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Enthalpy',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'The enthalpy change of _____ is the enthalpy change when 1 mole of water is formed from H⁺(aq) and OH⁻(aq).',
    correctAnswer: 'neutralisation',
    explanation: 'Enthalpy of neutralisation is approximately -57 kJ mol⁻¹ for strong acid-strong base reactions.',
    tags: ['enthalpy', 'neutralisation'],
    yearGroup: [12, 13]
  },
  // Entropy (5 questions)
  {
    id: 'chem-al-phys-006',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Entropy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What happens to entropy when a gas expands into a vacuum?',
    correctAnswer: 'Entropy increases',
    wrongAnswers: ['Entropy decreases', 'Entropy stays the same', 'Entropy becomes zero'],
    options: ['Entropy increases', 'Entropy decreases', 'Entropy stays the same', 'Entropy becomes zero'],
    explanation: 'When a gas expands, there are more possible positions for molecules, so disorder (entropy) increases.',
    tags: ['entropy', 'thermodynamics'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-007',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Entropy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which process would have the most positive entropy change?',
    correctAnswer: 'CaCO₃(s) → CaO(s) + CO₂(g)',
    wrongAnswers: ['H₂O(l) → H₂O(s)', 'N₂(g) + 3H₂(g) → 2NH₃(g)', '2SO₂(g) + O₂(g) → 2SO₃(g)'],
    options: ['CaCO₃(s) → CaO(s) + CO₂(g)', 'H₂O(l) → H₂O(s)', 'N₂(g) + 3H₂(g) → 2NH₃(g)', '2SO₂(g) + O₂(g) → 2SO₃(g)'],
    explanation: 'Decomposition producing a gas from a solid greatly increases entropy. The other options decrease moles of gas or involve solidification.',
    tags: ['entropy', 'thermodynamics'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-008',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Entropy',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'At absolute zero (0 K), the entropy of a perfect crystal is zero.',
    correctAnswer: 'True',
    explanation: 'This is the Third Law of Thermodynamics. At 0 K, there is only one possible arrangement (perfect order), so S = 0.',
    tags: ['entropy', 'Third Law'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-009',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Entropy',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate ΔS for a reaction where ΣS(products) = 350 J K⁻¹ mol⁻¹ and ΣS(reactants) = 280 J K⁻¹ mol⁻¹. Give answer in J K⁻¹ mol⁻¹.',
    correctAnswer: 70,
    explanation: 'ΔS = ΣS(products) - ΣS(reactants) = 350 - 280 = 70 J K⁻¹ mol⁻¹',
    tags: ['entropy', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-010',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Entropy',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'The units of entropy are _____ per Kelvin per mole.',
    correctAnswer: 'joules',
    explanation: 'Entropy is measured in J K⁻¹ mol⁻¹, unlike enthalpy which is measured in kJ mol⁻¹.',
    tags: ['entropy', 'units'],
    yearGroup: [12, 13]
  },
  // Gibbs Free Energy (5 questions)
  {
    id: 'chem-al-phys-011',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Gibbs Free Energy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'For a reaction to be spontaneous at all temperatures, what must be true?',
    correctAnswer: 'ΔH < 0 and ΔS > 0',
    wrongAnswers: ['ΔH > 0 and ΔS < 0', 'ΔH < 0 and ΔS < 0', 'ΔH > 0 and ΔS > 0'],
    options: ['ΔH < 0 and ΔS > 0', 'ΔH > 0 and ΔS < 0', 'ΔH < 0 and ΔS < 0', 'ΔH > 0 and ΔS > 0'],
    explanation: 'When ΔH < 0 and ΔS > 0, ΔG = ΔH - TΔS is always negative, so the reaction is always spontaneous.',
    tags: ['Gibbs free energy', 'spontaneity'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-012',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Gibbs Free Energy',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate ΔG at 298 K for a reaction where ΔH = -100 kJ mol⁻¹ and ΔS = +50 J K⁻¹ mol⁻¹. Give answer in kJ mol⁻¹.',
    correctAnswer: -114.9,
    explanation: 'ΔG = ΔH - TΔS = -100 - (298 × 0.050) = -100 - 14.9 = -114.9 kJ mol⁻¹. Note: convert ΔS to kJ.',
    tags: ['Gibbs free energy', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-013',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Gibbs Free Energy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'At what temperature does the reaction become spontaneous if ΔH = +40 kJ mol⁻¹ and ΔS = +100 J K⁻¹ mol⁻¹?',
    correctAnswer: 'Above 400 K',
    wrongAnswers: ['Below 400 K', 'At all temperatures', 'Never spontaneous'],
    options: ['Above 400 K', 'Below 400 K', 'At all temperatures', 'Never spontaneous'],
    explanation: 'At equilibrium, ΔG = 0, so T = ΔH/ΔS = 40000/100 = 400 K. Above this temperature, TΔS > ΔH, so ΔG < 0.',
    tags: ['Gibbs free energy', 'temperature'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-014',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Gibbs Free Energy',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'At equilibrium, the value of ΔG is _____.',
    correctAnswer: 'zero',
    explanation: 'At equilibrium, the forward and reverse reactions occur at equal rates, and ΔG = 0.',
    tags: ['Gibbs free energy', 'equilibrium'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-015',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Gibbs Free Energy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the relationship between ΔG° and the equilibrium constant K?',
    correctAnswer: 'ΔG° = -RT ln K',
    wrongAnswers: ['ΔG° = RT ln K', 'ΔG° = -RT/K', 'ΔG° = RT × K'],
    options: ['ΔG° = -RT ln K', 'ΔG° = RT ln K', 'ΔG° = -RT/K', 'ΔG° = RT × K'],
    explanation: 'The standard Gibbs free energy is related to the equilibrium constant by ΔG° = -RT ln K.',
    tags: ['Gibbs free energy', 'equilibrium constant'],
    yearGroup: [12, 13]
  },
  // Kinetics (5 questions)
  {
    id: 'chem-al-phys-016',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'For a second-order reaction, how does the half-life change as the reaction proceeds?',
    correctAnswer: 'Half-life increases as concentration decreases',
    wrongAnswers: ['Half-life remains constant', 'Half-life decreases as concentration decreases', 'Half-life is independent of concentration'],
    options: ['Half-life increases as concentration decreases', 'Half-life remains constant', 'Half-life decreases as concentration decreases', 'Half-life is independent of concentration'],
    explanation: 'For second-order reactions, t½ = 1/(k[A]₀), so half-life increases as concentration decreases.',
    tags: ['kinetics', 'half-life', 'reaction order'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-017',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the rate equation for a reaction that is first order in A and second order in B?',
    correctAnswer: 'rate = k[A][B]²',
    wrongAnswers: ['rate = k[A]²[B]', 'rate = k[A][B]', 'rate = k[A]²[B]²'],
    options: ['rate = k[A][B]²', 'rate = k[A]²[B]', 'rate = k[A][B]', 'rate = k[A]²[B]²'],
    explanation: 'First order in A means [A]¹, second order in B means [B]², giving rate = k[A][B]².',
    tags: ['kinetics', 'rate equation'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-018',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'If the activation energy is 50 kJ mol⁻¹ and the rate constant doubles when temperature increases by 10 K, what is the approximate temperature? Use R = 8.314 J K⁻¹ mol⁻¹. Give answer in K to nearest integer.',
    correctAnswer: 307,
    explanation: 'Using Arrhenius equation: ln(k₂/k₁) = Ea/R × (1/T₁ - 1/T₂). With k₂/k₁ = 2 and T₂ = T₁ + 10, solving gives T ≈ 307 K.',
    tags: ['kinetics', 'Arrhenius', 'activation energy'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-019',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What does the gradient of a graph of ln k against 1/T represent?',
    correctAnswer: '-Ea/R',
    wrongAnswers: ['Ea/R', '-Ea', 'Ea'],
    options: ['-Ea/R', 'Ea/R', '-Ea', 'Ea'],
    explanation: 'From ln k = ln A - Ea/RT, plotting ln k vs 1/T gives gradient = -Ea/R.',
    tags: ['kinetics', 'Arrhenius', 'graphical analysis'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-020',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Kinetics',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'The _____ step is the slowest step in a reaction mechanism and determines the overall rate.',
    correctAnswer: 'rate-determining',
    explanation: 'The rate-determining step is the slowest step and controls the overall reaction rate.',
    tags: ['kinetics', 'mechanism'],
    yearGroup: [12, 13]
  },
  // Equilibria (5 questions)
  {
    id: 'chem-al-phys-021',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Equilibria',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), what is the expression for Kp?',
    correctAnswer: 'Kp = (p(NH₃))² / (p(N₂) × (p(H₂))³)',
    wrongAnswers: ['Kp = (p(N₂) × (p(H₂))³) / (p(NH₃))²', 'Kp = p(NH₃) / (p(N₂) × p(H₂))', 'Kp = 2p(NH₃) / (p(N₂) × 3p(H₂))'],
    options: ['Kp = (p(NH₃))² / (p(N₂) × (p(H₂))³)', 'Kp = (p(N₂) × (p(H₂))³) / (p(NH₃))²', 'Kp = p(NH₃) / (p(N₂) × p(H₂))', 'Kp = 2p(NH₃) / (p(N₂) × 3p(H₂))'],
    explanation: 'Kp = products/reactants with partial pressures raised to their stoichiometric coefficients.',
    tags: ['equilibria', 'Kp'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-022',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Equilibria',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What effect does increasing pressure have on the equilibrium: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)?',
    correctAnswer: 'Shifts to the right (more SO₃)',
    wrongAnswers: ['Shifts to the left (more SO₂ and O₂)', 'No effect', 'Decreases the equilibrium constant'],
    options: ['Shifts to the right (more SO₃)', 'Shifts to the left (more SO₂ and O₂)', 'No effect', 'Decreases the equilibrium constant'],
    explanation: 'Increasing pressure favours the side with fewer moles of gas. Reactants: 3 moles, Products: 2 moles, so equilibrium shifts right.',
    tags: ['equilibria', 'Le Chatelier'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-023',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Equilibria',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Adding a catalyst changes the position of equilibrium.',
    correctAnswer: 'False',
    explanation: 'A catalyst increases the rate of both forward and reverse reactions equally, so equilibrium is reached faster but the position is unchanged.',
    tags: ['equilibria', 'catalysts'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-024',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Equilibria',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'If Kc = 4 for A ⇌ 2B and initial [A] = 1 mol dm⁻³ with no B present, what is [B] at equilibrium? Give answer in mol dm⁻³ to 2 decimal places.',
    correctAnswer: 0.89,
    explanation: 'Let x = decrease in [A]. At equilibrium: [A] = 1-x, [B] = 2x. Kc = (2x)²/(1-x) = 4. Solving: 4x² = 4 - 4x, x = 0.447. [B] = 2(0.447) = 0.89 mol dm⁻³.',
    tags: ['equilibria', 'calculations', 'Kc'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-phys-025',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    subtopic: 'Equilibria',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the relationship between Kp and Kc?',
    correctAnswer: 'Kp = Kc(RT)^Δn',
    wrongAnswers: ['Kp = Kc × RT', 'Kp = Kc/RT', 'Kp = Kc + RT'],
    options: ['Kp = Kc(RT)^Δn', 'Kp = Kc × RT', 'Kp = Kc/RT', 'Kp = Kc + RT'],
    explanation: 'Kp = Kc(RT)^Δn where Δn = moles of gaseous products - moles of gaseous reactants.',
    tags: ['equilibria', 'Kp', 'Kc'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// INORGANIC CHEMISTRY - 25 Questions
// ============================================================================

const inorganicChemistryQuestions: Question[] = [
  // Periodicity (6 questions)
  {
    id: 'chem-al-inorg-001',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why does the first ionisation energy decrease down Group 2?',
    correctAnswer: 'Increased shielding and greater atomic radius outweigh increased nuclear charge',
    wrongAnswers: ['Nuclear charge decreases', 'Electrons are in lower energy levels', 'There is less electron-electron repulsion'],
    options: ['Increased shielding and greater atomic radius outweigh increased nuclear charge', 'Nuclear charge decreases', 'Electrons are in lower energy levels', 'There is less electron-electron repulsion'],
    explanation: 'Down a group, outer electrons are further from the nucleus and more shielded, requiring less energy to remove.',
    tags: ['periodicity', 'ionisation energy'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-002',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why is there a small decrease in first ionisation energy between Mg and Al?',
    correctAnswer: 'Al loses a 3p electron which is higher in energy than the 3s electron lost by Mg',
    wrongAnswers: ['Al has more protons than Mg', 'Mg has more shielding than Al', 'Al has a larger atomic radius'],
    options: ['Al loses a 3p electron which is higher in energy than the 3s electron lost by Mg', 'Al has more protons than Mg', 'Mg has more shielding than Al', 'Al has a larger atomic radius'],
    explanation: 'The 3p subshell is slightly higher in energy and further from the nucleus than 3s, so less energy is needed to remove it.',
    tags: ['periodicity', 'ionisation energy', 'electron configuration'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-003',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What type of oxide does sulfur form?',
    correctAnswer: 'Acidic oxide',
    wrongAnswers: ['Basic oxide', 'Amphoteric oxide', 'Neutral oxide'],
    options: ['Acidic oxide', 'Basic oxide', 'Amphoteric oxide', 'Neutral oxide'],
    explanation: 'Non-metals form acidic oxides. SO₂ and SO₃ react with water to form acids (H₂SO₃ and H₂SO₄).',
    tags: ['periodicity', 'oxides'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-004',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'Aluminium oxide is described as _____ because it can act as both an acid and a base.',
    correctAnswer: 'amphoteric',
    explanation: 'Al₂O₃ reacts with acids to form Al³⁺ salts and with bases to form aluminate ions.',
    tags: ['periodicity', 'oxides', 'amphoteric'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-005',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which Period 3 chloride undergoes hydrolysis to produce acidic solutions?',
    correctAnswer: 'SiCl₄',
    wrongAnswers: ['NaCl', 'MgCl₂', 'AlCl₃ dissolved in excess water'],
    options: ['SiCl₄', 'NaCl', 'MgCl₂', 'AlCl₃ dissolved in excess water'],
    explanation: 'SiCl₄ hydrolyses completely: SiCl₄ + 4H₂O → Si(OH)₄ + 4HCl, producing an acidic solution.',
    tags: ['periodicity', 'chlorides', 'hydrolysis'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-006',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Periodicity',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Electronegativity increases across Period 3 from Na to Cl.',
    correctAnswer: 'True',
    explanation: 'Across a period, nuclear charge increases while shielding remains similar, so atoms attract bonding electrons more strongly.',
    tags: ['periodicity', 'electronegativity'],
    yearGroup: [12, 13]
  },
  // Group 2 (6 questions)
  {
    id: 'chem-al-inorg-007',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which Group 2 hydroxide is least soluble in water?',
    correctAnswer: 'Mg(OH)₂',
    wrongAnswers: ['Ca(OH)₂', 'Sr(OH)₂', 'Ba(OH)₂'],
    options: ['Mg(OH)₂', 'Ca(OH)₂', 'Sr(OH)₂', 'Ba(OH)₂'],
    explanation: 'Solubility of Group 2 hydroxides increases down the group. Mg(OH)₂ is the least soluble.',
    tags: ['Group 2', 'solubility'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-008',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which Group 2 sulfate is most soluble in water?',
    correctAnswer: 'MgSO₄',
    wrongAnswers: ['CaSO₄', 'SrSO₄', 'BaSO₄'],
    options: ['MgSO₄', 'CaSO₄', 'SrSO₄', 'BaSO₄'],
    explanation: 'Solubility of Group 2 sulfates decreases down the group. BaSO₄ is virtually insoluble.',
    tags: ['Group 2', 'solubility'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-009',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'alevel',
    type: 'equation',
    question: 'What is the balanced equation for the thermal decomposition of calcium carbonate?',
    correctAnswer: 'CaCO₃ → CaO + CO₂',
    explanation: 'All Group 2 carbonates decompose on heating to give the oxide and carbon dioxide.',
    tags: ['Group 2', 'thermal decomposition'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-010',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why does the thermal stability of Group 2 carbonates increase down the group?',
    correctAnswer: 'Larger cations polarise the carbonate ion less, making decomposition harder',
    wrongAnswers: ['Larger cations have weaker ionic bonds', 'Smaller cations have less charge density', 'Lattice enthalpy decreases down the group'],
    options: ['Larger cations polarise the carbonate ion less, making decomposition harder', 'Larger cations have weaker ionic bonds', 'Smaller cations have less charge density', 'Lattice enthalpy decreases down the group'],
    explanation: 'Smaller cations have higher charge density, polarising the carbonate ion more and weakening C-O bonds.',
    tags: ['Group 2', 'thermal stability', 'polarisation'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-011',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the trend in reactivity of Group 2 metals with water going down the group?',
    correctAnswer: 'Reactivity increases',
    wrongAnswers: ['Reactivity decreases', 'Reactivity stays the same', 'Only Ba reacts'],
    options: ['Reactivity increases', 'Reactivity decreases', 'Reactivity stays the same', 'Only Ba reacts'],
    explanation: 'Reactivity increases as ionisation energy decreases, making it easier for metals to lose electrons.',
    tags: ['Group 2', 'reactivity'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-012',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 2',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'Barium sulfate is used in _____ meals for X-ray imaging of the digestive system.',
    correctAnswer: 'barium',
    explanation: 'BaSO₄ is insoluble and non-toxic, making it safe to ingest for medical imaging.',
    tags: ['Group 2', 'applications'],
    yearGroup: [12, 13]
  },
  // Group 7 (7 questions)
  {
    id: 'chem-al-inorg-013',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why can chlorine displace bromine from potassium bromide solution?',
    correctAnswer: 'Chlorine is a stronger oxidising agent than bromine',
    wrongAnswers: ['Chlorine is more electronegative than bromine', 'Chlorine molecules are smaller', 'Chlorine has a higher boiling point'],
    options: ['Chlorine is a stronger oxidising agent than bromine', 'Chlorine is more electronegative than bromine', 'Chlorine molecules are smaller', 'Chlorine has a higher boiling point'],
    explanation: 'Cl₂ can oxidise Br⁻ to Br₂ because chlorine is a better oxidising agent (gains electrons more readily).',
    tags: ['Group 7', 'displacement', 'redox'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-014',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is observed when chlorine water is added to potassium iodide solution?',
    correctAnswer: 'Solution turns brown and brown solid may form',
    wrongAnswers: ['No reaction occurs', 'Solution turns green', 'A white precipitate forms'],
    options: ['Solution turns brown and brown solid may form', 'No reaction occurs', 'Solution turns green', 'A white precipitate forms'],
    explanation: 'Cl₂ displaces I₂ from KI. Iodine is brown in solution and may form a brown/black solid if in excess.',
    tags: ['Group 7', 'displacement', 'observations'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-015',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What products form when concentrated sulfuric acid reacts with sodium bromide?',
    correctAnswer: 'NaHSO₄, HBr, SO₂, Br₂',
    wrongAnswers: ['Only NaHSO₄ and HBr', 'NaBr and H₂SO₄', 'Na₂SO₄ and HBr'],
    options: ['NaHSO₄, HBr, SO₂, Br₂', 'Only NaHSO₄ and HBr', 'NaBr and H₂SO₄', 'Na₂SO₄ and HBr'],
    explanation: 'HBr formed initially is strong enough reducing agent to reduce H₂SO₄, producing SO₂ and Br₂.',
    tags: ['Group 7', 'reactions with acids'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-016',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'alevel',
    type: 'equation',
    question: 'Write the ionic equation for the reaction of chlorine with cold dilute sodium hydroxide.',
    correctAnswer: 'Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O',
    explanation: 'This is a disproportionation reaction where chlorine is both oxidised and reduced.',
    tags: ['Group 7', 'disproportionation'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-017',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which silver halide is least soluble in water?',
    correctAnswer: 'AgI',
    wrongAnswers: ['AgCl', 'AgBr', 'AgF'],
    options: ['AgI', 'AgCl', 'AgBr', 'AgF'],
    explanation: 'Solubility of silver halides: AgF > AgCl > AgBr > AgI. AgI is the least soluble.',
    tags: ['Group 7', 'silver halides', 'solubility'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-018',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What happens when dilute ammonia is added to a precipitate of silver chloride?',
    correctAnswer: 'The precipitate dissolves to form [Ag(NH₃)₂]⁺',
    wrongAnswers: ['No reaction occurs', 'A yellow precipitate forms', 'Chlorine gas is evolved'],
    options: ['The precipitate dissolves to form [Ag(NH₃)₂]⁺', 'No reaction occurs', 'A yellow precipitate forms', 'Chlorine gas is evolved'],
    explanation: 'AgCl dissolves in dilute ammonia forming the diamminesilver(I) complex ion.',
    tags: ['Group 7', 'silver halides', 'complex ions'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-019',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Group 7',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'In the disproportionation of chlorine with hot concentrated alkali, chlorine is oxidised to _____ and reduced to chloride.',
    correctAnswer: 'chlorate(V)',
    explanation: 'With hot conc. alkali: 3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O',
    tags: ['Group 7', 'disproportionation'],
    yearGroup: [12, 13]
  },
  // Transition Metals (6 questions)
  {
    id: 'chem-al-inorg-020',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why do transition metals form coloured compounds?',
    correctAnswer: 'd-d electron transitions absorb visible light',
    wrongAnswers: ['They have high melting points', 'They form ionic compounds', 'They have variable oxidation states'],
    options: ['d-d electron transitions absorb visible light', 'They have high melting points', 'They form ionic compounds', 'They have variable oxidation states'],
    explanation: 'Partially filled d orbitals allow electrons to be excited to higher energy d orbitals, absorbing specific wavelengths.',
    tags: ['transition metals', 'colour'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-021',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the electron configuration of Fe²⁺?',
    correctAnswer: '[Ar] 3d⁶',
    wrongAnswers: ['[Ar] 3d⁴ 4s²', '[Ar] 3d⁵ 4s¹', '[Ar] 3d⁸'],
    options: ['[Ar] 3d⁶', '[Ar] 3d⁴ 4s²', '[Ar] 3d⁵ 4s¹', '[Ar] 3d⁸'],
    explanation: 'Fe is [Ar] 3d⁶ 4s². When ionised, 4s electrons are lost first, so Fe²⁺ is [Ar] 3d⁶.',
    tags: ['transition metals', 'electron configuration'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-022',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the shape of [Cu(H₂O)₆]²⁺?',
    correctAnswer: 'Octahedral',
    wrongAnswers: ['Tetrahedral', 'Square planar', 'Linear'],
    options: ['Octahedral', 'Tetrahedral', 'Square planar', 'Linear'],
    explanation: 'With 6 ligands arranged around the central metal ion, the complex adopts an octahedral shape.',
    tags: ['transition metals', 'complex ions', 'shapes'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-023',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which ligand is bidentate?',
    correctAnswer: 'Ethylenediamine (en)',
    wrongAnswers: ['Water (H₂O)', 'Ammonia (NH₃)', 'Chloride (Cl⁻)'],
    options: ['Ethylenediamine (en)', 'Water (H₂O)', 'Ammonia (NH₃)', 'Chloride (Cl⁻)'],
    explanation: 'Ethylenediamine has two lone pairs on two N atoms that can both bond to the metal.',
    tags: ['transition metals', 'ligands', 'denticity'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-024',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'EDTA is a _____ ligand because it can form six coordinate bonds with a metal ion.',
    correctAnswer: 'hexadentate',
    explanation: 'EDTA has 4 oxygen and 2 nitrogen donor atoms, allowing it to form 6 bonds with a central metal.',
    tags: ['transition metals', 'ligands', 'chelation'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-inorg-025',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    subtopic: 'Transition Metals',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What colour change is observed when excess ammonia is added to [Cu(H₂O)₆]²⁺?',
    correctAnswer: 'Pale blue to deep blue',
    wrongAnswers: ['Blue to green', 'Blue to colourless', 'Blue to brown'],
    options: ['Pale blue to deep blue', 'Blue to green', 'Blue to colourless', 'Blue to brown'],
    explanation: 'Ammonia displaces water ligands: [Cu(H₂O)₆]²⁺ + 4NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺, giving a deep blue colour.',
    tags: ['transition metals', 'ligand exchange', 'colour'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// ORGANIC CHEMISTRY - 30 Questions
// ============================================================================

const organicChemistryQuestions: Question[] = [
  // Mechanisms (8 questions)
  {
    id: 'chem-al-org-001',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Mechanisms',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What type of mechanism occurs when ethene reacts with HBr?',
    correctAnswer: 'Electrophilic addition',
    wrongAnswers: ['Nucleophilic substitution', 'Free radical substitution', 'Electrophilic substitution'],
    options: ['Electrophilic addition', 'Nucleophilic substitution', 'Free radical substitution', 'Electrophilic substitution'],
    explanation: 'The electron-rich C=C bond attracts the electrophile H⁺, which adds across the double bond.',
    tags: ['mechanisms', 'alkenes'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-002',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Mechanisms',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In the SN2 mechanism, what happens to the rate if the concentration of nucleophile is doubled?',
    correctAnswer: 'Rate doubles',
    wrongAnswers: ['Rate stays the same', 'Rate quadruples', 'Rate halves'],
    options: ['Rate doubles', 'Rate stays the same', 'Rate quadruples', 'Rate halves'],
    explanation: 'SN2 is second order: rate = k[substrate][nucleophile]. Doubling [nucleophile] doubles the rate.',
    tags: ['mechanisms', 'nucleophilic substitution'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-003',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Mechanisms',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why does the SN1 mechanism give a racemic mixture?',
    correctAnswer: 'The planar carbocation can be attacked from either side',
    wrongAnswers: ['The reaction is reversible', 'There are two different nucleophiles', 'The leaving group can return'],
    options: ['The planar carbocation can be attacked from either side', 'The reaction is reversible', 'There are two different nucleophiles', 'The leaving group can return'],
    explanation: 'The planar carbocation intermediate has equal probability of nucleophilic attack from above or below.',
    tags: ['mechanisms', 'stereochemistry'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-004',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Mechanisms',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'In the nitration of benzene, the electrophile is the _____ ion (NO₂⁺).',
    correctAnswer: 'nitronium',
    explanation: 'The nitronium ion is generated from HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O',
    tags: ['mechanisms', 'aromatic chemistry'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-005',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Mechanisms',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the role of AlCl₃ in Friedel-Crafts acylation?',
    correctAnswer: 'It acts as a Lewis acid catalyst to generate the acylium ion',
    wrongAnswers: ['It is reduced to Al', 'It acts as a nucleophile', 'It removes water from the reaction'],
    options: ['It acts as a Lewis acid catalyst to generate the acylium ion', 'It is reduced to Al', 'It acts as a nucleophile', 'It removes water from the reaction'],
    explanation: 'AlCl₃ accepts a lone pair from the acyl chloride, forming the acylium ion (RCO⁺).',
    tags: ['mechanisms', 'Friedel-Crafts'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-006',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Mechanisms',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which carbocation is most stable?',
    correctAnswer: 'Tertiary carbocation',
    wrongAnswers: ['Primary carbocation', 'Secondary carbocation', 'Methyl carbocation'],
    options: ['Tertiary carbocation', 'Primary carbocation', 'Secondary carbocation', 'Methyl carbocation'],
    explanation: 'Tertiary carbocations are stabilised by three alkyl groups, which donate electrons via the inductive effect.',
    tags: ['mechanisms', 'carbocation stability'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-007',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Mechanisms',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What type of mechanism occurs when propan-2-ol is heated with concentrated H₂SO₄?',
    correctAnswer: 'Elimination (E1)',
    wrongAnswers: ['SN2', 'SN1', 'Free radical substitution'],
    options: ['Elimination (E1)', 'SN2', 'SN1', 'Free radical substitution'],
    explanation: 'Concentrated acid dehydrates alcohols via E1, forming a carbocation then eliminating H⁺ to give an alkene.',
    tags: ['mechanisms', 'elimination'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-008',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Mechanisms',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'In nucleophilic addition to carbonyl compounds, the nucleophile attacks the carbon atom.',
    correctAnswer: 'True',
    explanation: 'The carbonyl carbon is δ+ due to the electronegative oxygen, making it susceptible to nucleophilic attack.',
    tags: ['mechanisms', 'carbonyls'],
    yearGroup: [12, 13]
  },
  // Isomerism (7 questions)
  {
    id: 'chem-al-org-009',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Isomerism',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What type of isomerism is shown by but-2-ene?',
    correctAnswer: 'E/Z (geometric) isomerism',
    wrongAnswers: ['Structural isomerism', 'Optical isomerism', 'Positional isomerism'],
    options: ['E/Z (geometric) isomerism', 'Structural isomerism', 'Optical isomerism', 'Positional isomerism'],
    explanation: 'But-2-ene has two different groups on each carbon of the C=C, allowing E and Z isomers.',
    tags: ['isomerism', 'E/Z'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-010',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Isomerism',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What structural feature is required for optical isomerism?',
    correctAnswer: 'A chiral centre (carbon with 4 different groups)',
    wrongAnswers: ['A double bond', 'A ring structure', 'A carbonyl group'],
    options: ['A chiral centre (carbon with 4 different groups)', 'A double bond', 'A ring structure', 'A carbonyl group'],
    explanation: 'A carbon bonded to 4 different groups creates non-superimposable mirror images (enantiomers).',
    tags: ['isomerism', 'optical'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-011',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Isomerism',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'How many structural isomers does C₄H₁₀ have?',
    correctAnswer: 2,
    explanation: 'Butane (straight chain) and 2-methylpropane (branched) are the two structural isomers.',
    tags: ['isomerism', 'structural'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-012',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Isomerism',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which compound shows optical isomerism?',
    correctAnswer: '2-hydroxypropanoic acid (lactic acid)',
    wrongAnswers: ['Ethanol', 'Propan-1-ol', 'Propanone'],
    options: ['2-hydroxypropanoic acid (lactic acid)', 'Ethanol', 'Propan-1-ol', 'Propanone'],
    explanation: 'Lactic acid has a chiral carbon bonded to H, OH, CH₃, and COOH - all different groups.',
    tags: ['isomerism', 'optical'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-013',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Isomerism',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'A 50:50 mixture of two enantiomers is called a _____ mixture.',
    correctAnswer: 'racemic',
    explanation: 'A racemic mixture has equal amounts of both enantiomers and shows no optical activity.',
    tags: ['isomerism', 'optical'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-014',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Isomerism',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In E/Z nomenclature, what does "E" stand for?',
    correctAnswer: 'Entgegen (opposite sides)',
    wrongAnswers: ['Equal (same sides)', 'External', 'Equilibrium'],
    options: ['Entgegen (opposite sides)', 'Equal (same sides)', 'External', 'Equilibrium'],
    explanation: 'E (entgegen) means the highest priority groups are on opposite sides of the double bond.',
    tags: ['isomerism', 'nomenclature'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-015',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Isomerism',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Propanal and propanone are functional group isomers.',
    correctAnswer: 'True',
    explanation: 'Both have formula C₃H₆O but different functional groups (aldehyde vs ketone).',
    tags: ['isomerism', 'structural'],
    yearGroup: [12, 13]
  },
  // Synthesis Routes (8 questions)
  {
    id: 'chem-al-org-016',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Synthesis Routes',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What reagent converts a primary alcohol to an aldehyde without further oxidation?',
    correctAnswer: 'PCC (pyridinium chlorochromate) or distillation with acidified K₂Cr₂O₇',
    wrongAnswers: ['Reflux with acidified K₂Cr₂O₇', 'Reflux with KMnO₄', 'Conc. H₂SO₄'],
    options: ['PCC (pyridinium chlorochromate) or distillation with acidified K₂Cr₂O₇', 'Reflux with acidified K₂Cr₂O₇', 'Reflux with KMnO₄', 'Conc. H₂SO₄'],
    explanation: 'Distilling the aldehyde as it forms prevents further oxidation. Refluxing would give carboxylic acid.',
    tags: ['synthesis', 'oxidation'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-017',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Synthesis Routes',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is formed when a Grignard reagent reacts with methanal then hydrolysis?',
    correctAnswer: 'Primary alcohol',
    wrongAnswers: ['Secondary alcohol', 'Tertiary alcohol', 'Carboxylic acid'],
    options: ['Primary alcohol', 'Secondary alcohol', 'Tertiary alcohol', 'Carboxylic acid'],
    explanation: 'RMgBr + HCHO → RCH₂OMgBr, then H₃O⁺ → RCH₂OH (primary alcohol).',
    tags: ['synthesis', 'Grignard'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-018',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Synthesis Routes',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which reagent reduces a carboxylic acid to a primary alcohol?',
    correctAnswer: 'LiAlH₄',
    wrongAnswers: ['NaBH₄', 'H₂/Ni', 'Zn/HCl'],
    options: ['LiAlH₄', 'NaBH₄', 'H₂/Ni', 'Zn/HCl'],
    explanation: 'LiAlH₄ is a strong reducing agent. NaBH₄ is too weak to reduce carboxylic acids.',
    tags: ['synthesis', 'reduction'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-019',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Synthesis Routes',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'How can benzene be converted to phenylamine (aniline)?',
    correctAnswer: 'Nitration, then reduction with Sn/conc. HCl',
    wrongAnswers: ['Direct reaction with NH₃', 'Halogenation then amination', 'Friedel-Crafts with NH₃'],
    options: ['Nitration, then reduction with Sn/conc. HCl', 'Direct reaction with NH₃', 'Halogenation then amination', 'Friedel-Crafts with NH₃'],
    explanation: 'Benzene → nitrobenzene (HNO₃/H₂SO₄) → phenylamine (Sn/conc. HCl then NaOH).',
    tags: ['synthesis', 'aromatic'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-020',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Synthesis Routes',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'Amides can be prepared by reacting an acyl chloride with _____.',
    correctAnswer: 'ammonia',
    explanation: 'RCOCI + 2NH₃ → RCONH₂ + NH₄Cl. One mole of ammonia neutralises the HCl formed.',
    tags: ['synthesis', 'amides'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-021',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Synthesis Routes',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What product forms when a nitrile is hydrolysed with dilute acid?',
    correctAnswer: 'Carboxylic acid',
    wrongAnswers: ['Aldehyde', 'Amide', 'Primary amine'],
    options: ['Carboxylic acid', 'Aldehyde', 'Amide', 'Primary amine'],
    explanation: 'RCN + 2H₂O + H⁺ → RCOOH + NH₄⁺. Complete hydrolysis gives carboxylic acid.',
    tags: ['synthesis', 'nitriles'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-022',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Synthesis Routes',
    difficulty: 'alevel',
    type: 'equation',
    question: 'Write the equation for converting ethanol to ethanoic acid using acidified potassium dichromate.',
    correctAnswer: 'CH₃CH₂OH + 2[O] → CH₃COOH + H₂O',
    explanation: 'Primary alcohol is oxidised twice: first to aldehyde, then to carboxylic acid. [O] represents oxidation.',
    tags: ['synthesis', 'oxidation'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-023',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Synthesis Routes',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which reaction converts an aldehyde to a longer-chain nitrile?',
    correctAnswer: 'Reaction with HCN (nucleophilic addition)',
    wrongAnswers: ['Reaction with NaBH₃', 'Reaction with Grignard reagent', 'Reaction with PCl₅'],
    options: ['Reaction with HCN (nucleophilic addition)', 'Reaction with NaBH₃', 'Reaction with Grignard reagent', 'Reaction with PCl₅'],
    explanation: 'RCHO + HCN → RCH(OH)CN, a cyanohydrin, extending the carbon chain.',
    tags: ['synthesis', 'chain extension'],
    yearGroup: [12, 13]
  },
  // Spectroscopy (7 questions)
  {
    id: 'chem-al-org-024',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Spectroscopy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What does a broad absorption at 2500-3300 cm⁻¹ in an IR spectrum indicate?',
    correctAnswer: 'O-H in a carboxylic acid',
    wrongAnswers: ['O-H in an alcohol', 'N-H in an amine', 'C-H stretch'],
    options: ['O-H in a carboxylic acid', 'O-H in an alcohol', 'N-H in an amine', 'C-H stretch'],
    explanation: 'Carboxylic acid O-H gives a very broad absorption due to strong hydrogen bonding in dimers.',
    tags: ['spectroscopy', 'IR'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-025',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Spectroscopy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In ¹H NMR, a singlet at δ 2.1 ppm with integration 3 is characteristic of:',
    correctAnswer: 'CH₃ next to C=O',
    wrongAnswers: ['CH₃ next to O', 'CH₃ in an alkane', 'Aldehyde H'],
    options: ['CH₃ next to C=O', 'CH₃ next to O', 'CH₃ in an alkane', 'Aldehyde H'],
    explanation: 'The carbonyl group deshields adjacent protons to around δ 2.1 ppm.',
    tags: ['spectroscopy', 'NMR'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-026',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Spectroscopy',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'A compound with molecular formula C₂H₆O shows one peak in its ¹H NMR at δ 3.4 ppm. How many chemically equivalent hydrogen environments does it have?',
    correctAnswer: 1,
    explanation: 'Only dimethyl ether (CH₃OCH₃) fits: all 6 H are equivalent, giving one peak.',
    tags: ['spectroscopy', 'NMR', 'structure determination'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-027',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Spectroscopy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the m/z value of the molecular ion peak for propan-1-ol?',
    correctAnswer: '60',
    wrongAnswers: ['58', '46', '44'],
    options: ['60', '58', '46', '44'],
    explanation: 'C₃H₈O: (3×12) + (8×1) + (16) = 36 + 8 + 16 = 60.',
    tags: ['spectroscopy', 'mass spec'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-028',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Spectroscopy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What causes the splitting pattern of a triplet in ¹H NMR?',
    correctAnswer: 'Two adjacent equivalent hydrogens (n+1 rule: 2+1=3)',
    wrongAnswers: ['Three adjacent equivalent hydrogens', 'One adjacent hydrogen', 'No adjacent hydrogens'],
    options: ['Two adjacent equivalent hydrogens (n+1 rule: 2+1=3)', 'Three adjacent equivalent hydrogens', 'One adjacent hydrogen', 'No adjacent hydrogens'],
    explanation: 'The n+1 rule: n equivalent neighbouring protons cause n+1 peaks.',
    tags: ['spectroscopy', 'NMR', 'splitting'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-029',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Spectroscopy',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'In ¹³C NMR, deuterated chloroform (CDCl₃) is used as a solvent because it does not produce a _____ signal.',
    correctAnswer: 'carbon',
    explanation: 'CDCl₃ has only one carbon, giving a triplet at δ 77 ppm which is excluded from analysis.',
    tags: ['spectroscopy', 'NMR'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-org-030',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Spectroscopy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A peak at m/z 29 in a mass spectrum is likely due to:',
    correctAnswer: 'CHO⁺ fragment',
    wrongAnswers: ['CH₃⁺ fragment', 'C₂H₂⁺ fragment', 'CO⁺ fragment'],
    options: ['CHO⁺ fragment', 'CH₃⁺ fragment', 'C₂H₂⁺ fragment', 'CO⁺ fragment'],
    explanation: 'm/z 29 = CHO⁺ (12+1+16=29), characteristic of aldehydes.',
    tags: ['spectroscopy', 'mass spec', 'fragmentation'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// REDOX AND ELECTROCHEMISTRY - 10 Questions
// ============================================================================

const redoxElectrochemistryQuestions: Question[] = [
  {
    id: 'chem-al-redox-001',
    subject: 'chemistry',
    topic: 'Redox and Electrochemistry',
    subtopic: 'Electrode Potentials',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the standard electrode potential of the standard hydrogen electrode?',
    correctAnswer: '0.00 V',
    wrongAnswers: ['1.00 V', '-1.00 V', '0.76 V'],
    options: ['0.00 V', '1.00 V', '-1.00 V', '0.76 V'],
    explanation: 'The standard hydrogen electrode is defined as 0.00 V and all other electrode potentials are measured relative to it.',
    tags: ['electrochemistry', 'electrode potentials'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-redox-002',
    subject: 'chemistry',
    topic: 'Redox and Electrochemistry',
    subtopic: 'Electrode Potentials',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'If E°(Cu²⁺/Cu) = +0.34 V and E°(Zn²⁺/Zn) = -0.76 V, what is the EMF of the cell Zn|Zn²⁺||Cu²⁺|Cu?',
    correctAnswer: '+1.10 V',
    wrongAnswers: ['-1.10 V', '+0.42 V', '-0.42 V'],
    options: ['+1.10 V', '-1.10 V', '+0.42 V', '-0.42 V'],
    explanation: 'E°cell = E°(cathode) - E°(anode) = +0.34 - (-0.76) = +1.10 V',
    tags: ['electrochemistry', 'EMF'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-redox-003',
    subject: 'chemistry',
    topic: 'Redox and Electrochemistry',
    subtopic: 'Electrode Potentials',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'A more positive electrode potential means the species is a stronger oxidising agent.',
    correctAnswer: 'True',
    explanation: 'A more positive E° means greater tendency to accept electrons (be reduced), hence stronger oxidising agent.',
    tags: ['electrochemistry', 'oxidising agents'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-redox-004',
    subject: 'chemistry',
    topic: 'Redox and Electrochemistry',
    subtopic: 'Electrode Potentials',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Under standard conditions for electrode potential measurements, what is the concentration of ions in solution?',
    correctAnswer: '1.00 mol dm⁻³',
    wrongAnswers: ['0.10 mol dm⁻³', '0.01 mol dm⁻³', '2.00 mol dm⁻³'],
    options: ['1.00 mol dm⁻³', '0.10 mol dm⁻³', '0.01 mol dm⁻³', '2.00 mol dm⁻³'],
    explanation: 'Standard conditions: 298 K, 1 atm pressure, and 1.00 mol dm⁻³ concentration.',
    tags: ['electrochemistry', 'standard conditions'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-redox-005',
    subject: 'chemistry',
    topic: 'Redox and Electrochemistry',
    subtopic: 'Fuel Cells',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the overall reaction in a hydrogen fuel cell?',
    correctAnswer: '2H₂ + O₂ → 2H₂O',
    wrongAnswers: ['H₂ + O₂ → H₂O₂', 'H₂ → 2H⁺ + 2e⁻', '4H⁺ + O₂ + 4e⁻ → 2H₂O'],
    options: ['2H₂ + O₂ → 2H₂O', 'H₂ + O₂ → H₂O₂', 'H₂ → 2H⁺ + 2e⁻', '4H⁺ + O₂ + 4e⁻ → 2H₂O'],
    explanation: 'Hydrogen is oxidised at the anode and oxygen is reduced at the cathode to form water.',
    tags: ['fuel cells', 'hydrogen'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-redox-006',
    subject: 'chemistry',
    topic: 'Redox and Electrochemistry',
    subtopic: 'Fuel Cells',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the function of the platinum catalyst in a fuel cell?',
    correctAnswer: 'To increase the rate of the electrode reactions',
    wrongAnswers: ['To conduct electricity', 'To store hydrogen', 'To prevent corrosion'],
    options: ['To increase the rate of the electrode reactions', 'To conduct electricity', 'To store hydrogen', 'To prevent corrosion'],
    explanation: 'Platinum catalyses both the oxidation of hydrogen and the reduction of oxygen at the electrodes.',
    tags: ['fuel cells', 'catalysts'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-redox-007',
    subject: 'chemistry',
    topic: 'Redox and Electrochemistry',
    subtopic: 'Fuel Cells',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'In an alkaline hydrogen fuel cell, the electrolyte is _____ solution.',
    correctAnswer: 'potassium hydroxide',
    explanation: 'Alkaline fuel cells use KOH as the electrolyte to conduct OH⁻ ions.',
    tags: ['fuel cells', 'alkaline'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-redox-008',
    subject: 'chemistry',
    topic: 'Redox and Electrochemistry',
    subtopic: 'Electrode Potentials',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why is a salt bridge necessary in an electrochemical cell?',
    correctAnswer: 'To complete the circuit by allowing ion flow and maintain electrical neutrality',
    wrongAnswers: ['To increase the voltage', 'To prevent mixing of solutions', 'To speed up the reaction'],
    options: ['To complete the circuit by allowing ion flow and maintain electrical neutrality', 'To increase the voltage', 'To prevent mixing of solutions', 'To speed up the reaction'],
    explanation: 'The salt bridge allows ions to move between half-cells, maintaining charge balance as electrons flow.',
    tags: ['electrochemistry', 'salt bridge'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-redox-009',
    subject: 'chemistry',
    topic: 'Redox and Electrochemistry',
    subtopic: 'Electrode Potentials',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the cell potential if E°(Ag⁺/Ag) = +0.80 V and E°(Fe³⁺/Fe²⁺) = +0.77 V, with Ag as cathode. Give answer in V to 2 decimal places.',
    correctAnswer: 0.03,
    explanation: 'E°cell = E°(cathode) - E°(anode) = 0.80 - 0.77 = +0.03 V',
    tags: ['electrochemistry', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-redox-010',
    subject: 'chemistry',
    topic: 'Redox and Electrochemistry',
    subtopic: 'Fuel Cells',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the main advantage of fuel cells over conventional batteries?',
    correctAnswer: 'They can operate continuously as long as fuel is supplied',
    wrongAnswers: ['They are cheaper to produce', 'They do not require any catalyst', 'They work at room temperature only'],
    options: ['They can operate continuously as long as fuel is supplied', 'They are cheaper to produce', 'They do not require any catalyst', 'They work at room temperature only'],
    explanation: 'Unlike batteries which store energy, fuel cells convert chemical energy continuously from external fuel.',
    tags: ['fuel cells', 'advantages'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// ADVANCED CALCULATIONS - 10 Questions
// ============================================================================

const advancedCalculationsQuestions: Question[] = [
  {
    id: 'chem-al-calc-001',
    subject: 'chemistry',
    topic: 'Advanced Calculations',
    subtopic: 'pH',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the pH of 0.01 mol dm⁻³ HCl solution. Give answer to 2 decimal places.',
    correctAnswer: 2.00,
    explanation: 'HCl is a strong acid, so [H⁺] = 0.01 mol dm⁻³. pH = -log[H⁺] = -log(0.01) = 2.00',
    tags: ['pH', 'strong acids'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-calc-002',
    subject: 'chemistry',
    topic: 'Advanced Calculations',
    subtopic: 'pH',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the pH of a 0.1 mol dm⁻³ solution of ethanoic acid (Ka = 1.74 × 10⁻⁵ mol dm⁻³). Give answer to 2 decimal places.',
    correctAnswer: 2.88,
    explanation: '[H⁺] = √(Ka × c) = √(1.74 × 10⁻⁵ × 0.1) = 1.32 × 10⁻³. pH = -log(1.32 × 10⁻³) = 2.88',
    tags: ['pH', 'weak acids', 'Ka'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-calc-003',
    subject: 'chemistry',
    topic: 'Advanced Calculations',
    subtopic: 'Buffer Solutions',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A buffer solution is made from 0.1 mol dm⁻³ CH₃COOH and 0.1 mol dm⁻³ CH₃COONa. What is the pH? (Ka = 1.74 × 10⁻⁵)',
    correctAnswer: '4.76',
    wrongAnswers: ['2.88', '7.00', '9.24'],
    options: ['4.76', '2.88', '7.00', '9.24'],
    explanation: 'When [acid] = [salt], pH = pKa = -log(1.74 × 10⁻⁵) = 4.76',
    tags: ['buffer solutions', 'pH'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-calc-004',
    subject: 'chemistry',
    topic: 'Advanced Calculations',
    subtopic: 'Buffer Solutions',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'The Henderson-Hasselbalch equation states: pH = pKa + log(_____/[acid]).',
    correctAnswer: '[salt]',
    explanation: 'pH = pKa + log([A⁻]/[HA]) where [A⁻] is the conjugate base (salt) concentration.',
    tags: ['buffer solutions', 'Henderson-Hasselbalch'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-calc-005',
    subject: 'chemistry',
    topic: 'Advanced Calculations',
    subtopic: 'Kp',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'For N₂O₄ ⇌ 2NO₂ at equilibrium, p(N₂O₄) = 0.2 atm and p(NO₂) = 0.4 atm. Calculate Kp in atm.',
    correctAnswer: 0.8,
    explanation: 'Kp = (p(NO₂))²/p(N₂O₄) = (0.4)²/0.2 = 0.16/0.2 = 0.8 atm',
    tags: ['Kp', 'equilibrium'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-calc-006',
    subject: 'chemistry',
    topic: 'Advanced Calculations',
    subtopic: 'Ka',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'If the pH of a 0.05 mol dm⁻³ weak acid solution is 3.0, calculate Ka × 10⁵. Give answer to 1 decimal place.',
    correctAnswer: 2.0,
    explanation: '[H⁺] = 10⁻³ mol dm⁻³. Ka = [H⁺]²/[HA] = (10⁻³)²/0.05 = 2 × 10⁻⁵. So Ka × 10⁵ = 2.0',
    tags: ['Ka', 'weak acids'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-calc-007',
    subject: 'chemistry',
    topic: 'Advanced Calculations',
    subtopic: 'pH',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'Calculate the pH of 0.05 mol dm⁻³ NaOH solution. (Kw = 1 × 10⁻¹⁴). Give answer to 2 decimal places.',
    correctAnswer: 12.70,
    explanation: '[OH⁻] = 0.05, pOH = -log(0.05) = 1.30. pH = 14 - 1.30 = 12.70',
    tags: ['pH', 'strong bases'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-calc-008',
    subject: 'chemistry',
    topic: 'Advanced Calculations',
    subtopic: 'Buffer Solutions',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which pair of solutions would form a buffer?',
    correctAnswer: 'NH₃ and NH₄Cl',
    wrongAnswers: ['HCl and NaCl', 'NaOH and NaCl', 'HCl and NaOH'],
    options: ['NH₃ and NH₄Cl', 'HCl and NaCl', 'NaOH and NaCl', 'HCl and NaOH'],
    explanation: 'A buffer requires a weak acid/base and its conjugate. NH₃ (weak base) + NH₄⁺ (conjugate acid) forms a buffer.',
    tags: ['buffer solutions'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-calc-009',
    subject: 'chemistry',
    topic: 'Advanced Calculations',
    subtopic: 'Kp',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'For the reaction PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), what are the units of Kp?',
    correctAnswer: 'atm (or Pa or kPa)',
    wrongAnswers: ['No units', 'atm⁻¹', 'atm²'],
    options: ['atm (or Pa or kPa)', 'No units', 'atm⁻¹', 'atm²'],
    explanation: 'Kp = (pPCl₃ × pCl₂)/pPCl₅. Units = (atm × atm)/atm = atm',
    tags: ['Kp', 'units'],
    yearGroup: [12, 13]
  },
  {
    id: 'chem-al-calc-010',
    subject: 'chemistry',
    topic: 'Advanced Calculations',
    subtopic: 'Ka',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'If Ka = 6.3 × 10⁻⁵, calculate pKa to 2 decimal places.',
    correctAnswer: 4.20,
    explanation: 'pKa = -log Ka = -log(6.3 × 10⁻⁵) = 4.20',
    tags: ['Ka', 'pKa'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// A-LEVEL CHEMISTRY TERM DEFINITIONS - 20 Terms
// ============================================================================

export const alevelChemistryTerms: TermDefinition[] = [
  {
    id: 'chem-al-term-001',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    term: 'Enthalpy of formation',
    definition: 'The enthalpy change when 1 mole of a compound is formed from its elements in their standard states under standard conditions.',
    example: 'C(s) + O₂(g) → CO₂(g), ΔHf = -394 kJ mol⁻¹',
    tags: ['thermodynamics', 'enthalpy']
  },
  {
    id: 'chem-al-term-002',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    term: 'Entropy',
    definition: 'A measure of the disorder or randomness of a system. It quantifies the number of ways particles can be arranged.',
    example: 'Gases have higher entropy than liquids, which have higher entropy than solids.',
    tags: ['thermodynamics', 'entropy']
  },
  {
    id: 'chem-al-term-003',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    term: 'Gibbs free energy',
    definition: 'The energy available to do useful work. ΔG = ΔH - TΔS. A negative value indicates a spontaneous reaction.',
    example: 'For combustion of methane, ΔG is negative, indicating spontaneity.',
    tags: ['thermodynamics', 'Gibbs free energy']
  },
  {
    id: 'chem-al-term-004',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    term: 'Activation energy',
    definition: 'The minimum energy that colliding particles must have for a reaction to occur.',
    example: 'The Ea for the decomposition of hydrogen peroxide is lowered by catalase enzyme.',
    tags: ['kinetics', 'activation energy']
  },
  {
    id: 'chem-al-term-005',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    term: 'Rate-determining step',
    definition: 'The slowest step in a reaction mechanism, which controls the overall rate of the reaction.',
    example: 'In SN1 reactions, the formation of the carbocation is the rate-determining step.',
    tags: ['kinetics', 'mechanisms']
  },
  {
    id: 'chem-al-term-006',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    term: 'Dynamic equilibrium',
    definition: 'A state where the rate of forward reaction equals the rate of reverse reaction, with no net change in concentrations.',
    example: 'N₂ + 3H₂ ⇌ 2NH₃ reaches dynamic equilibrium in the Haber process.',
    tags: ['equilibrium']
  },
  {
    id: 'chem-al-term-007',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    difficulty: 'alevel',
    term: 'Ligand',
    definition: 'A species that donates a lone pair of electrons to a central metal ion to form a coordinate bond.',
    example: 'Water, ammonia, and chloride ions are common ligands.',
    tags: ['transition metals', 'coordination chemistry']
  },
  {
    id: 'chem-al-term-008',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    difficulty: 'alevel',
    term: 'Coordination number',
    definition: 'The number of coordinate bonds formed between a central metal ion and its ligands.',
    example: '[Cu(H₂O)₆]²⁺ has a coordination number of 6.',
    tags: ['transition metals', 'complex ions']
  },
  {
    id: 'chem-al-term-009',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    difficulty: 'alevel',
    term: 'Disproportionation',
    definition: 'A reaction in which the same element is simultaneously oxidised and reduced.',
    example: 'Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O (Cl₂ is both oxidised and reduced).',
    tags: ['redox', 'Group 7']
  },
  {
    id: 'chem-al-term-010',
    subject: 'chemistry',
    topic: 'Inorganic Chemistry',
    difficulty: 'alevel',
    term: 'Chelate effect',
    definition: 'The enhanced stability of complexes containing polydentate ligands compared to similar complexes with monodentate ligands.',
    example: 'EDTA complexes are more stable than those with six water molecules due to the chelate effect.',
    tags: ['transition metals', 'stability']
  },
  {
    id: 'chem-al-term-011',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'alevel',
    term: 'Electrophile',
    definition: 'An electron-pair acceptor that is attracted to regions of high electron density.',
    example: 'H⁺, NO₂⁺, and Br⁺ are electrophiles in organic reactions.',
    tags: ['mechanisms', 'organic']
  },
  {
    id: 'chem-al-term-012',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'alevel',
    term: 'Nucleophile',
    definition: 'An electron-pair donor that is attracted to regions of low electron density (positive centres).',
    example: 'OH⁻, CN⁻, and NH₃ are nucleophiles.',
    tags: ['mechanisms', 'organic']
  },
  {
    id: 'chem-al-term-013',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'alevel',
    term: 'Chiral centre',
    definition: 'A carbon atom bonded to four different groups, creating non-superimposable mirror images (enantiomers).',
    example: 'The central carbon in 2-bromobutane is a chiral centre.',
    tags: ['isomerism', 'stereochemistry']
  },
  {
    id: 'chem-al-term-014',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'alevel',
    term: 'Enantiomers',
    definition: 'Optical isomers that are non-superimposable mirror images of each other.',
    example: 'D-glucose and L-glucose are enantiomers.',
    tags: ['isomerism', 'optical']
  },
  {
    id: 'chem-al-term-015',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'alevel',
    term: 'Delocalisation',
    definition: 'The spreading of electrons over more than two atoms, increasing stability.',
    example: 'In benzene, the π electrons are delocalised over all six carbon atoms.',
    tags: ['bonding', 'aromatic']
  },
  {
    id: 'chem-al-term-016',
    subject: 'chemistry',
    topic: 'Electrochemistry',
    difficulty: 'alevel',
    term: 'Standard electrode potential',
    definition: 'The EMF of a half-cell measured against the standard hydrogen electrode under standard conditions.',
    example: 'E°(Cu²⁺/Cu) = +0.34 V',
    tags: ['electrochemistry', 'redox']
  },
  {
    id: 'chem-al-term-017',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    term: 'Buffer solution',
    definition: 'A solution that resists changes in pH when small amounts of acid or base are added.',
    example: 'Blood is buffered by the carbonic acid/hydrogencarbonate system.',
    tags: ['acids and bases', 'buffers']
  },
  {
    id: 'chem-al-term-018',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    term: 'Lattice enthalpy',
    definition: 'The enthalpy change when 1 mole of an ionic lattice is formed from its gaseous ions under standard conditions.',
    example: 'Lattice enthalpy of NaCl is -787 kJ mol⁻¹.',
    tags: ['thermodynamics', 'ionic bonding']
  },
  {
    id: 'chem-al-term-019',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'alevel',
    term: 'Carbonyl compound',
    definition: 'An organic compound containing the C=O functional group, including aldehydes and ketones.',
    example: 'Ethanal (CH₃CHO) is an aldehyde; propanone (CH₃COCH₃) is a ketone.',
    tags: ['functional groups', 'organic']
  },
  {
    id: 'chem-al-term-020',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    term: 'Order of reaction',
    definition: 'The power to which the concentration of a reactant is raised in the rate equation.',
    example: 'If rate = k[A]²[B], the order with respect to A is 2, and overall order is 3.',
    tags: ['kinetics', 'rate equations']
  }
];

// ============================================================================
// A-LEVEL CHEMISTRY FORMULAS - 20 Formulas
// ============================================================================

export const alevelChemistryFormulas: Formula[] = [
  {
    id: 'chem-al-form-001',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Gibbs Free Energy',
    formula: 'ΔG = ΔH - TΔS',
    variables: [
      { symbol: 'ΔG', meaning: 'Gibbs free energy change (kJ mol⁻¹)' },
      { symbol: 'ΔH', meaning: 'Enthalpy change (kJ mol⁻¹)' },
      { symbol: 'T', meaning: 'Temperature (K)' },
      { symbol: 'ΔS', meaning: 'Entropy change (kJ K⁻¹ mol⁻¹)' }
    ],
    units: 'kJ mol⁻¹',
    example: 'ΔG = -100 - (298 × 0.05) = -114.9 kJ mol⁻¹'
  },
  {
    id: 'chem-al-form-002',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Arrhenius Equation',
    formula: 'k = Ae^(-Ea/RT)',
    variables: [
      { symbol: 'k', meaning: 'Rate constant' },
      { symbol: 'A', meaning: 'Pre-exponential factor' },
      { symbol: 'Ea', meaning: 'Activation energy (J mol⁻¹)' },
      { symbol: 'R', meaning: 'Gas constant (8.314 J K⁻¹ mol⁻¹)' },
      { symbol: 'T', meaning: 'Temperature (K)' }
    ],
    units: 'Depends on reaction order',
    example: 'Used to calculate how rate constant changes with temperature'
  },
  {
    id: 'chem-al-form-003',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Arrhenius Equation (logarithmic form)',
    formula: 'ln k = ln A - Ea/RT',
    variables: [
      { symbol: 'ln k', meaning: 'Natural log of rate constant' },
      { symbol: 'ln A', meaning: 'Natural log of pre-exponential factor' },
      { symbol: 'Ea', meaning: 'Activation energy (J mol⁻¹)' },
      { symbol: 'R', meaning: 'Gas constant (8.314 J K⁻¹ mol⁻¹)' },
      { symbol: 'T', meaning: 'Temperature (K)' }
    ],
    units: 'dimensionless',
    example: 'Plotting ln k vs 1/T gives gradient = -Ea/R'
  },
  {
    id: 'chem-al-form-004',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'pH calculation',
    formula: 'pH = -log₁₀[H⁺]',
    variables: [
      { symbol: 'pH', meaning: 'Measure of acidity' },
      { symbol: '[H⁺]', meaning: 'Hydrogen ion concentration (mol dm⁻³)' }
    ],
    units: 'dimensionless',
    example: 'If [H⁺] = 0.01 mol dm⁻³, pH = -log(0.01) = 2'
  },
  {
    id: 'chem-al-form-005',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Weak acid [H⁺] calculation',
    formula: '[H⁺] = √(Ka × c)',
    variables: [
      { symbol: '[H⁺]', meaning: 'Hydrogen ion concentration (mol dm⁻³)' },
      { symbol: 'Ka', meaning: 'Acid dissociation constant (mol dm⁻³)' },
      { symbol: 'c', meaning: 'Concentration of acid (mol dm⁻³)' }
    ],
    units: 'mol dm⁻³',
    example: '[H⁺] = √(1.8×10⁻⁵ × 0.1) = 1.34×10⁻³ mol dm⁻³'
  },
  {
    id: 'chem-al-form-006',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Henderson-Hasselbalch Equation',
    formula: 'pH = pKa + log([A⁻]/[HA])',
    variables: [
      { symbol: 'pH', meaning: 'pH of buffer solution' },
      { symbol: 'pKa', meaning: '-log Ka' },
      { symbol: '[A⁻]', meaning: 'Concentration of conjugate base (mol dm⁻³)' },
      { symbol: '[HA]', meaning: 'Concentration of weak acid (mol dm⁻³)' }
    ],
    units: 'dimensionless',
    example: 'pH = 4.76 + log(0.2/0.1) = 4.76 + 0.30 = 5.06'
  },
  {
    id: 'chem-al-form-007',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Ionic product of water',
    formula: 'Kw = [H⁺][OH⁻] = 1 × 10⁻¹⁴ mol² dm⁻⁶ at 298 K',
    variables: [
      { symbol: 'Kw', meaning: 'Ionic product of water' },
      { symbol: '[H⁺]', meaning: 'Hydrogen ion concentration (mol dm⁻³)' },
      { symbol: '[OH⁻]', meaning: 'Hydroxide ion concentration (mol dm⁻³)' }
    ],
    units: 'mol² dm⁻⁶',
    example: 'If [OH⁻] = 0.1 mol dm⁻³, [H⁺] = 10⁻¹⁴/0.1 = 10⁻¹³ mol dm⁻³'
  },
  {
    id: 'chem-al-form-008',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Relationship between Kp and Kc',
    formula: 'Kp = Kc(RT)^Δn',
    variables: [
      { symbol: 'Kp', meaning: 'Equilibrium constant (partial pressures)' },
      { symbol: 'Kc', meaning: 'Equilibrium constant (concentrations)' },
      { symbol: 'R', meaning: 'Gas constant (8.314 J K⁻¹ mol⁻¹)' },
      { symbol: 'T', meaning: 'Temperature (K)' },
      { symbol: 'Δn', meaning: 'Change in moles of gas (products - reactants)' }
    ],
    units: 'Various',
    example: 'For N₂O₄ ⇌ 2NO₂, Δn = 2-1 = 1, so Kp = Kc × RT'
  },
  {
    id: 'chem-al-form-009',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Gibbs free energy and equilibrium constant',
    formula: 'ΔG° = -RT ln K',
    variables: [
      { symbol: 'ΔG°', meaning: 'Standard Gibbs free energy change (J mol⁻¹)' },
      { symbol: 'R', meaning: 'Gas constant (8.314 J K⁻¹ mol⁻¹)' },
      { symbol: 'T', meaning: 'Temperature (K)' },
      { symbol: 'K', meaning: 'Equilibrium constant' }
    ],
    units: 'J mol⁻¹',
    example: 'If K = 100 at 298 K, ΔG° = -8.314 × 298 × ln(100) = -11.4 kJ mol⁻¹'
  },
  {
    id: 'chem-al-form-010',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'First-order half-life',
    formula: 't½ = ln 2/k = 0.693/k',
    variables: [
      { symbol: 't½', meaning: 'Half-life (s)' },
      { symbol: 'k', meaning: 'Rate constant (s⁻¹)' }
    ],
    units: 's (or appropriate time unit)',
    example: 'If k = 0.01 s⁻¹, t½ = 0.693/0.01 = 69.3 s'
  },
  {
    id: 'chem-al-form-011',
    subject: 'chemistry',
    topic: 'Electrochemistry',
    difficulty: 'alevel',
    name: 'Cell EMF',
    formula: 'E°cell = E°(cathode) - E°(anode)',
    variables: [
      { symbol: 'E°cell', meaning: 'Standard cell potential (V)' },
      { symbol: 'E°(cathode)', meaning: 'Reduction potential at cathode (V)' },
      { symbol: 'E°(anode)', meaning: 'Reduction potential at anode (V)' }
    ],
    units: 'V',
    example: 'E°cell = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0.34 - (-0.76) = 1.10 V'
  },
  {
    id: 'chem-al-form-012',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Entropy change of system',
    formula: 'ΔS°system = ΣS°(products) - ΣS°(reactants)',
    variables: [
      { symbol: 'ΔS°system', meaning: 'Standard entropy change (J K⁻¹ mol⁻¹)' },
      { symbol: 'S°(products)', meaning: 'Standard molar entropy of products' },
      { symbol: 'S°(reactants)', meaning: 'Standard molar entropy of reactants' }
    ],
    units: 'J K⁻¹ mol⁻¹',
    example: 'Calculate from data booklet values'
  },
  {
    id: 'chem-al-form-013',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Ideal gas equation',
    formula: 'pV = nRT',
    variables: [
      { symbol: 'p', meaning: 'Pressure (Pa)' },
      { symbol: 'V', meaning: 'Volume (m³)' },
      { symbol: 'n', meaning: 'Number of moles' },
      { symbol: 'R', meaning: 'Gas constant (8.314 J K⁻¹ mol⁻¹)' },
      { symbol: 'T', meaning: 'Temperature (K)' }
    ],
    units: 'Pa × m³ = J',
    example: 'V = nRT/p = (1 × 8.314 × 298)/101325 = 0.0245 m³'
  },
  {
    id: 'chem-al-form-014',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Enthalpy change from bond energies',
    formula: 'ΔH = Σ(bonds broken) - Σ(bonds formed)',
    variables: [
      { symbol: 'ΔH', meaning: 'Enthalpy change (kJ mol⁻¹)' },
      { symbol: 'bonds broken', meaning: 'Sum of bond enthalpies in reactants' },
      { symbol: 'bonds formed', meaning: 'Sum of bond enthalpies in products' }
    ],
    units: 'kJ mol⁻¹',
    example: 'For H₂ + Cl₂ → 2HCl: ΔH = (436 + 242) - (2 × 431) = -184 kJ mol⁻¹'
  },
  {
    id: 'chem-al-form-015',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Hess\'s Law (formation enthalpies)',
    formula: 'ΔH°r = ΣΔHf°(products) - ΣΔHf°(reactants)',
    variables: [
      { symbol: 'ΔH°r', meaning: 'Standard enthalpy of reaction (kJ mol⁻¹)' },
      { symbol: 'ΔHf°(products)', meaning: 'Standard enthalpies of formation of products' },
      { symbol: 'ΔHf°(reactants)', meaning: 'Standard enthalpies of formation of reactants' }
    ],
    units: 'kJ mol⁻¹',
    example: 'ΔH = ΔHf°(CO₂) + ΔHf°(H₂O) - ΔHf°(CH₄) - 2ΔHf°(O₂)'
  },
  {
    id: 'chem-al-form-016',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Rate equation (general)',
    formula: 'rate = k[A]^m[B]^n',
    variables: [
      { symbol: 'rate', meaning: 'Reaction rate (mol dm⁻³ s⁻¹)' },
      { symbol: 'k', meaning: 'Rate constant' },
      { symbol: '[A], [B]', meaning: 'Concentrations of reactants (mol dm⁻³)' },
      { symbol: 'm, n', meaning: 'Orders with respect to A and B' }
    ],
    units: 'mol dm⁻³ s⁻¹',
    example: 'If rate = k[A][B]², overall order = 1 + 2 = 3'
  },
  {
    id: 'chem-al-form-017',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Ka expression',
    formula: 'Ka = [H⁺][A⁻]/[HA]',
    variables: [
      { symbol: 'Ka', meaning: 'Acid dissociation constant (mol dm⁻³)' },
      { symbol: '[H⁺]', meaning: 'Hydrogen ion concentration' },
      { symbol: '[A⁻]', meaning: 'Conjugate base concentration' },
      { symbol: '[HA]', meaning: 'Undissociated acid concentration' }
    ],
    units: 'mol dm⁻³',
    example: 'For ethanoic acid, Ka = 1.74 × 10⁻⁵ mol dm⁻³'
  },
  {
    id: 'chem-al-form-018',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Mole fraction and partial pressure',
    formula: 'pA = xA × P(total)',
    variables: [
      { symbol: 'pA', meaning: 'Partial pressure of gas A' },
      { symbol: 'xA', meaning: 'Mole fraction of A (nA/n(total))' },
      { symbol: 'P(total)', meaning: 'Total pressure' }
    ],
    units: 'atm, Pa, or kPa',
    example: 'If xN₂ = 0.78 and P(total) = 100 kPa, pN₂ = 78 kPa'
  },
  {
    id: 'chem-al-form-019',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Entropy change of surroundings',
    formula: 'ΔS(surroundings) = -ΔH/T',
    variables: [
      { symbol: 'ΔS(surroundings)', meaning: 'Entropy change of surroundings (J K⁻¹ mol⁻¹)' },
      { symbol: 'ΔH', meaning: 'Enthalpy change of system (J mol⁻¹)' },
      { symbol: 'T', meaning: 'Temperature (K)' }
    ],
    units: 'J K⁻¹ mol⁻¹',
    example: 'For exothermic reaction (-ΔH), surroundings gain entropy (+ΔS)'
  },
  {
    id: 'chem-al-form-020',
    subject: 'chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'alevel',
    name: 'Relationship between pH and pOH',
    formula: 'pH + pOH = pKw = 14 (at 298 K)',
    variables: [
      { symbol: 'pH', meaning: '-log[H⁺]' },
      { symbol: 'pOH', meaning: '-log[OH⁻]' },
      { symbol: 'pKw', meaning: '-log Kw = 14 at 298 K' }
    ],
    units: 'dimensionless',
    example: 'If pH = 4, pOH = 14 - 4 = 10'
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const alevelChemistryQuestions: Question[] = [
  ...physicalChemistryQuestions,
  ...inorganicChemistryQuestions,
  ...organicChemistryQuestions,
  ...redoxElectrochemistryQuestions,
  ...advancedCalculationsQuestions
];
