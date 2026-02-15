/**
 * A-Level Biology Expanded Part 2
 * Advanced biology covering molecular biology, ecology, and practical skills
 */

import { Question, TermDefinition } from '../types';

// ============================================================================
// MOLECULAR BIOLOGY
// ============================================================================

const alevelMolecularBiology: Question[] = [
  {
    id: 'bio-alevel-exp2-001',
    subject: 'biology',
    topic: 'Molecular Biology',
    subtopic: 'DNA Replication',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why is DNA replication described as semi-conservative?',
    correctAnswer: 'Each new DNA molecule contains one original strand and one new strand',
    wrongAnswers: [
      'Half the DNA is destroyed in the process',
      'Only half the bases are replicated',
      'Two new strands are made from nothing'
    ],
    explanation: 'Meselson and Stahl proved this in 1958 using heavy nitrogen (¹⁵N). After one replication, all DNA was "hybrid" - half heavy, half light. This elegant experiment is a classic!',
    tags: ['dna', 'replication', 'semi-conservative'],
    yearGroup: [12, 13]
  },
  {
    id: 'bio-alevel-exp2-002',
    subject: 'biology',
    topic: 'Molecular Biology',
    subtopic: 'Transcription',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which strand of DNA is used as a template for transcription?',
    correctAnswer: 'The template (antisense) strand',
    wrongAnswers: [
      'The coding (sense) strand',
      'Both strands equally',
      'Neither - RNA is made from scratch'
    ],
    explanation: 'RNA polymerase reads the template strand 3\' to 5\' and makes mRNA 5\' to 3\'. The mRNA sequence matches the coding strand (with U instead of T). It\'s like making a negative then a positive.',
    tags: ['transcription', 'mrna', 'gene-expression'],
    yearGroup: [12, 13]
  },
  {
    id: 'bio-alevel-exp2-003',
    subject: 'biology',
    topic: 'Molecular Biology',
    subtopic: 'Translation',
    difficulty: 'alevel',
    type: 'order',
    question: 'Order the stages of translation.',
    correctAnswer: ['mRNA binds to ribosome', 'tRNA brings amino acid to A site', 'Peptide bond forms', 'Ribosome moves along mRNA', 'Stop codon reached, polypeptide released'],
    explanation: 'Translation has initiation, elongation, and termination phases. The ribosome is like a factory - raw materials (amino acids) in, product (protein) out!',
    tags: ['translation', 'protein-synthesis', 'ribosomes'],
    yearGroup: [12, 13]
  },
  {
    id: 'bio-alevel-exp2-004',
    subject: 'biology',
    topic: 'Molecular Biology',
    subtopic: 'Gene Regulation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In the lac operon, what happens when lactose is present?',
    correctAnswer: 'Lactose binds to repressor, allowing transcription of lac genes',
    wrongAnswers: [
      'Lactose directly activates RNA polymerase',
      'The repressor binds more tightly to DNA',
      'The operon is permanently switched off'
    ],
    explanation: 'The lac operon is an elegant switch. No lactose = repressor blocks transcription. Lactose present = binds repressor, removes it from operator, genes expressed. Energy efficient - only make enzymes when needed!',
    tags: ['gene-regulation', 'operon', 'bacteria'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// GENETICS AND EVOLUTION
// ============================================================================

const alevelGeneticsEvolution: Question[] = [
  {
    id: 'bio-alevel-exp2-005',
    subject: 'biology',
    topic: 'Genetics',
    subtopic: 'Chi-squared Test',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In a chi-squared test, what does a large χ² value indicate?',
    correctAnswer: 'Significant difference between observed and expected results',
    wrongAnswers: [
      'Results perfectly match expectations',
      'The experiment failed',
      'Not enough data was collected'
    ],
    explanation: 'χ² = Σ(O-E)²/E. Large χ² = big deviation from expected. Compare to critical value at chosen significance level. If χ² > critical value, reject null hypothesis.',
    tags: ['statistics', 'chi-squared', 'genetics'],
    yearGroup: [12, 13]
  },
  {
    id: 'bio-alevel-exp2-006',
    subject: 'biology',
    topic: 'Genetics',
    subtopic: 'Hardy-Weinberg',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'If the frequency of a recessive allele is 0.3, what is the expected frequency of heterozygotes?',
    correctAnswer: '0.42 (2pq = 2 × 0.7 × 0.3)',
    wrongAnswers: [
      '0.30',
      '0.21',
      '0.49'
    ],
    explanation: 'p + q = 1, so p = 0.7. Heterozygote frequency = 2pq = 2 × 0.7 × 0.3 = 0.42. Hardy-Weinberg lets us predict genotype frequencies from allele frequencies in stable populations.',
    tags: ['hardy-weinberg', 'population-genetics', 'alleles'],
    yearGroup: [12, 13]
  },
  {
    id: 'bio-alevel-exp2-007',
    subject: 'biology',
    topic: 'Evolution',
    subtopic: 'Speciation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the key difference between allopatric and sympatric speciation?',
    correctAnswer: 'Allopatric involves geographic isolation; sympatric does not',
    wrongAnswers: [
      'Only allopatric produces new species',
      'Sympatric is much faster',
      'Allopatric only occurs in plants'
    ],
    explanation: 'Allopatric = "different homeland" - physical barrier separates populations. Sympatric = "same homeland" - reproductive isolation without geographic barrier (e.g., polyploidy in plants).',
    tags: ['evolution', 'speciation', 'isolation'],
    yearGroup: [12, 13]
  },
  {
    id: 'bio-alevel-exp2-008',
    subject: 'biology',
    topic: 'Evolution',
    subtopic: 'Selection',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Stabilising selection favors which phenotypes?',
    correctAnswer: 'Intermediate phenotypes',
    wrongAnswers: [
      'Extreme phenotypes',
      'Only the largest individuals',
      'Random phenotypes'
    ],
    explanation: 'Stabilising selection narrows the range around the mean. Example: human birth weight - very small or large babies have higher mortality. Directional selection shifts the mean; disruptive creates two peaks.',
    tags: ['evolution', 'selection', 'phenotypes'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// ECOLOGY
// ============================================================================

const alevelEcology: Question[] = [
  {
    id: 'bio-alevel-exp2-009',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Energy Transfer',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why is only about 10% of energy transferred between trophic levels?',
    correctAnswer: 'Energy is lost as heat through respiration and not all biomass is consumed',
    wrongAnswers: [
      'The Sun only provides 10% of its energy',
      'Plants only absorb 10% of light',
      'Animals only eat 10% of their food'
    ],
    explanation: 'Energy losses: respiration (heat), excretion, uneaten parts, death/decomposition. This limits food chain length - after 4-5 levels, there\'s barely enough energy to support a population.',
    tags: ['ecology', 'energy-transfer', 'food-chains'],
    yearGroup: [12, 13]
  },
  {
    id: 'bio-alevel-exp2-010',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Succession',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What happens to species diversity during ecological succession?',
    correctAnswer: 'It generally increases then stabilizes at climax community',
    wrongAnswers: [
      'It continuously decreases',
      'It stays constant throughout',
      'It only increases in primary succession'
    ],
    explanation: 'Pioneer species → intermediate communities → climax. Biodiversity increases as more niches become available. The climax community is self-sustaining and in equilibrium with the climate.',
    tags: ['ecology', 'succession', 'biodiversity'],
    yearGroup: [12, 13]
  },
  {
    id: 'bio-alevel-exp2-011',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Nitrogen Cycle',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which bacteria convert ammonia to nitrates?',
    correctAnswer: 'Nitrifying bacteria (Nitrosomonas and Nitrobacter)',
    wrongAnswers: [
      'Denitrifying bacteria',
      'Nitrogen-fixing bacteria',
      'Decomposers'
    ],
    explanation: 'Nitrification: NH₄⁺ → NO₂⁻ (Nitrosomonas) → NO₃⁻ (Nitrobacter). This makes nitrogen available to plants. It\'s aerobic, so waterlogged soils have less nitrification.',
    tags: ['ecology', 'nitrogen-cycle', 'bacteria'],
    yearGroup: [12, 13]
  },
  {
    id: 'bio-alevel-exp2-012',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Population Dynamics',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What does carrying capacity (K) represent?',
    correctAnswer: 'Maximum population size the environment can sustain indefinitely',
    wrongAnswers: [
      'The birth rate of a population',
      'The maximum possible population ever',
      'The current population size'
    ],
    explanation: 'K is determined by limiting factors: food, space, water, etc. Populations exhibit logistic growth, slowing as they approach K due to increased competition and density-dependent factors.',
    tags: ['ecology', 'population', 'carrying-capacity'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// PRACTICAL SKILLS
// ============================================================================

const alevelPracticalBiology: Question[] = [
  {
    id: 'bio-alevel-exp2-013',
    subject: 'biology',
    topic: 'Practical Skills',
    subtopic: 'Microscopy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'An eyepiece graticule division represents 5 μm at ×400 magnification. At ×100 magnification, it represents?',
    correctAnswer: '20 μm',
    wrongAnswers: [
      '1.25 μm',
      '5 μm',
      '80 μm'
    ],
    explanation: 'Lower magnification = each division covers more real length. ×400 → ×100 is ÷4 magnification, so ×4 real size per division. 5 × 4 = 20 μm. Always calibrate at each magnification!',
    tags: ['practical', 'microscopy', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'bio-alevel-exp2-014',
    subject: 'biology',
    topic: 'Practical Skills',
    subtopic: 'Chromatography',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In paper chromatography of leaf pigments, what does the Rf value tell you?',
    correctAnswer: 'How far the pigment traveled relative to the solvent front',
    wrongAnswers: [
      'The colour of the pigment',
      'The molecular weight of the pigment',
      'How much pigment was present'
    ],
    explanation: 'Rf = distance moved by spot / distance moved by solvent. Each pigment has a characteristic Rf in a given solvent. Carotene has high Rf (least polar), chlorophyll b has low Rf (most polar).',
    tags: ['practical', 'chromatography', 'pigments'],
    yearGroup: [12, 13]
  },
  {
    id: 'bio-alevel-exp2-015',
    subject: 'biology',
    topic: 'Practical Skills',
    subtopic: 'Sampling',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why use a transect rather than random quadrats when studying zonation?',
    correctAnswer: 'To systematically sample along an environmental gradient',
    wrongAnswers: [
      'Random quadrats are too difficult',
      'Transects cover more area',
      'Random sampling is never accurate'
    ],
    explanation: 'Transects show how species distribution changes with a factor (e.g., distance from water). Place quadrats at regular intervals along the line. Perfect for studying rocky shores, sand dunes, etc.',
    tags: ['practical', 'sampling', 'ecology'],
    yearGroup: [12, 13]
  },
  {
    id: 'bio-alevel-exp2-016',
    subject: 'biology',
    topic: 'Practical Skills',
    subtopic: 'Statistical Tests',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'When would you use Spearman\'s rank correlation?',
    correctAnswer: 'To test for association between two continuous variables',
    wrongAnswers: [
      'To compare means of two groups',
      'To test if results differ from expected ratios',
      'To calculate standard deviation'
    ],
    explanation: 'Spearman\'s ranks the data and tests if high ranks in one variable correlate with high (or low) ranks in another. Returns rs from -1 to +1. No assumption of normal distribution required.',
    tags: ['practical', 'statistics', 'correlation'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// HUMAN BIOLOGY
// ============================================================================

const alevelHumanBiology: Question[] = [
  {
    id: 'bio-alevel-exp2-017',
    subject: 'biology',
    topic: 'Human Biology',
    subtopic: 'Immune System',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the difference between active and passive immunity?',
    correctAnswer: 'Active involves producing own antibodies; passive involves receiving antibodies',
    wrongAnswers: [
      'Active is faster; passive is slower',
      'Active only works against viruses',
      'Passive immunity lasts longer'
    ],
    explanation: 'Active = memory cells formed, long-lasting (vaccination, infection). Passive = temporary protection, no memory (breast milk antibodies, antivenom injection). Active takes longer to develop but is durable.',
    tags: ['immunity', 'antibodies', 'vaccines'],
    yearGroup: [12, 13]
  },
  {
    id: 'bio-alevel-exp2-018',
    subject: 'biology',
    topic: 'Human Biology',
    subtopic: 'Hormones',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'How does insulin reduce blood glucose concentration?',
    correctAnswer: 'Increases glucose uptake by cells and promotes glycogen synthesis',
    wrongAnswers: [
      'Breaks down glucose into water and CO₂',
      'Stops the pancreas producing glucagon',
      'Removes glucose via the kidneys'
    ],
    explanation: 'Insulin binds to cell receptors → GLUT4 transporters move to membrane → glucose enters cells → converted to glycogen in liver/muscle. Diabetes = insulin problems.',
    tags: ['hormones', 'homeostasis', 'diabetes'],
    yearGroup: [12, 13]
  },
  {
    id: 'bio-alevel-exp2-019',
    subject: 'biology',
    topic: 'Human Biology',
    subtopic: 'Nervous System',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What happens during the refractory period of a neurone?',
    correctAnswer: 'The neurone cannot fire another action potential',
    wrongAnswers: [
      'The neurone fires continuously',
      'Sodium ions rush into the cell',
      'The resting potential is established for the first time'
    ],
    explanation: 'Absolute refractory period: Na⁺ channels inactivated, impossible to fire. Relative refractory period: possible but needs stronger stimulus. This ensures unidirectional propagation and limits firing rate.',
    tags: ['neurones', 'action-potential', 'nerves'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const alevelBiologyTermsExpanded2: TermDefinition[] = [
  {
    id: 'bio-alevel-exp2-term-001',
    subject: 'biology',
    topic: 'Molecular Biology',
    difficulty: 'alevel',
    term: 'Codon',
    definition: 'A sequence of three nucleotides in mRNA that codes for one amino acid.',
    example: 'AUG is the start codon, coding for methionine.',
    tags: ['translation', 'genetic-code']
  },
  {
    id: 'bio-alevel-exp2-term-002',
    subject: 'biology',
    topic: 'Molecular Biology',
    difficulty: 'alevel',
    term: 'Anticodon',
    definition: 'A sequence of three nucleotides on tRNA that pairs with a codon on mRNA.',
    example: 'tRNA with anticodon UAC carries methionine (pairs with AUG).',
    tags: ['translation', 'trna']
  },
  {
    id: 'bio-alevel-exp2-term-003',
    subject: 'biology',
    topic: 'Genetics',
    difficulty: 'alevel',
    term: 'Epistasis',
    definition: 'When one gene masks or modifies the expression of another gene.',
    example: 'Coat colour in Labrador dogs: the E gene can mask the B gene.',
    tags: ['genetics', 'gene-interaction']
  },
  {
    id: 'bio-alevel-exp2-term-004',
    subject: 'biology',
    topic: 'Evolution',
    difficulty: 'alevel',
    term: 'Genetic Drift',
    definition: 'Random changes in allele frequency, especially significant in small populations.',
    example: 'Founder effect when a few individuals colonise a new habitat.',
    tags: ['evolution', 'population-genetics']
  },
  {
    id: 'bio-alevel-exp2-term-005',
    subject: 'biology',
    topic: 'Ecology',
    difficulty: 'alevel',
    term: 'Net Primary Productivity (NPP)',
    definition: 'Gross primary productivity minus energy lost through respiration. Energy available to consumers.',
    example: 'NPP = GPP - R, measured in kJ m⁻² year⁻¹.',
    tags: ['ecology', 'energy', 'productivity']
  },
  {
    id: 'bio-alevel-exp2-term-006',
    subject: 'biology',
    topic: 'Ecology',
    difficulty: 'alevel',
    term: 'Climax Community',
    definition: 'The final, stable community in ecological succession, in equilibrium with climate.',
    example: 'Oak woodland is the climax community in much of lowland Britain.',
    tags: ['ecology', 'succession']
  },
  {
    id: 'bio-alevel-exp2-term-007',
    subject: 'biology',
    topic: 'Immunity',
    difficulty: 'alevel',
    term: 'Clonal Selection',
    definition: 'Process where antigen selects and activates specific lymphocytes to divide.',
    example: 'B-cell with matching receptor encounters antigen, then proliferates.',
    tags: ['immunity', 'lymphocytes']
  },
  {
    id: 'bio-alevel-exp2-term-008',
    subject: 'biology',
    topic: 'Neuroscience',
    difficulty: 'alevel',
    term: 'Summation',
    definition: 'Addition of postsynaptic potentials to reach threshold for action potential.',
    example: 'Spatial summation: multiple synapses fire together; temporal: rapid repeated firing.',
    tags: ['neurones', 'synapses']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const alevelBiologyExpanded2: Question[] = [
  ...alevelMolecularBiology,
  ...alevelGeneticsEvolution,
  ...alevelEcology,
  ...alevelPracticalBiology,
  ...alevelHumanBiology
];
