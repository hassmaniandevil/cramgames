/**
 * GCSE Chemistry Expanded Part 2
 * Additional comprehensive gamified chemistry questions
 */

import { Question, TermDefinition } from '../types';

// ============================================
// ATOMIC STRUCTURE & PERIODIC TABLE
// ============================================

export const gcseChemistryAtomic: Question[] = [
  {
    id: 'chem-gcse-exp2-atom-001',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Isotopes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Carbon-14 has the same number of _____ as Carbon-12 but a different number of _____.',
    correctAnswer: 'protons, neutrons',
    wrongAnswers: ['neutrons, protons', 'electrons, protons', 'protons, electrons'],
    explanation: 'Isotopes are atomic twins with different weights! Same element = same protons (carbon always has 6). But C-14 has 8 neutrons while C-12 has 6. This makes C-14 radioactive and perfect for dating ancient objects. Archaeology loves unstable atoms!',
    hint: 'What defines an element? What can vary?',
    tags: ['atomic', 'isotopes', 'structure'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-atom-002',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Electronic Configuration',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Sodium (Na) has electronic configuration 2,8,1. This means it has _____ electrons in its outer shell.',
    correctAnswer: '1',
    wrongAnswers: ['2', '8', '11'],
    explanation: 'The outer shell is the key to chemistry! Sodium has 1 lonely electron in its outer shell. It desperately wants to lose it to have a full outer shell like neon. That\'s why sodium is so reactive - it\'ll give away that electron to almost anything!',
    hint: 'The last number in the configuration tells you outer shell electrons',
    tags: ['atomic', 'electrons', 'configuration'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-atom-003',
    subject: 'chemistry',
    topic: 'Periodic Table',
    subtopic: 'Groups',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each group to its characteristics:',
    correctAnswer: ['Group 1 (Alkali Metals) → Soft metals, react with water', 'Group 7 (Halogens) → Colored non-metals, make salts', 'Group 0 (Noble Gases) → Unreactive, full outer shells', 'Group 2 (Alkaline Earth) → React slower than Group 1'],
    wrongAnswers: [],
    explanation: 'The periodic table is organized by behavior! Group 1 metals are like eager friends - too keen to give away electrons. Halogens are electron thieves. Noble gases are perfectly content alone. Mendeleev figured this out before anyone even knew about electrons!',
    hint: 'Each group has similar outer shell configurations',
    tags: ['periodic-table', 'groups', 'properties'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-atom-004',
    subject: 'chemistry',
    topic: 'Periodic Table',
    subtopic: 'Trends',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Going down Group 1, reactivity increases because:',
    correctAnswer: 'The outer electron is further from the nucleus and easier to lose',
    wrongAnswers: ['Atoms get smaller', 'There are fewer electrons', 'The nucleus gets weaker'],
    explanation: 'Bigger atoms, more reactive metals! As you go down, there are more shells. The outer electron is further from the positive nucleus (less attraction) and shielded by inner electrons. Francium at the bottom would explode instantly in water - but it\'s so rare we\'ve never tested it!',
    hint: 'Think about distance and attraction',
    tags: ['periodic-table', 'trends', 'reactivity'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-atom-005',
    subject: 'chemistry',
    topic: 'Periodic Table',
    subtopic: 'History',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Mendeleev left gaps in his periodic table for elements not yet discovered.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Mendeleev\'s genius wasn\'t just organizing known elements - he predicted unknown ones! He left gaps and described their properties. When gallium and germanium were later discovered, they matched his predictions almost exactly. That\'s scientific bravery!',
    tags: ['periodic-table', 'history', 'mendeleev'],
    yearGroup: [10, 11]
  },
];

// ============================================
// BONDING & STRUCTURE
// ============================================

export const gcseChemistryBonding: Question[] = [
  {
    id: 'chem-gcse-exp2-bond-001',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Ionic Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In sodium chloride, sodium becomes Na+ because it:',
    correctAnswer: 'Loses one electron to chlorine',
    wrongAnswers: ['Gains one electron', 'Shares electrons with chlorine', 'Loses one proton'],
    explanation: 'Ionic bonding is electron theft! Sodium gives its lonely outer electron to chlorine. Sodium becomes positive (lost a negative charge), chlorine becomes negative (gained one). Opposite charges attract, forming an ionic bond. It\'s chemistry\'s version of "give and take"!',
    hint: 'What happens to become a positive ion?',
    tags: ['bonding', 'ionic', 'electrons'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-bond-002',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Covalent Bonding',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'How many covalent bonds does a carbon atom typically form?',
    correctAnswer: 4,
    wrongAnswers: [1, 2, 3],
    explanation: 'Carbon is the social butterfly of chemistry! With 4 outer electrons, carbon needs 4 more to complete its shell. It forms 4 bonds, which is why it can make long chains (hydrocarbons), rings (benzene), and complex structures (DNA, proteins). Life is carbon-based for a reason!',
    hint: 'How many electrons does carbon need to complete its outer shell?',
    tags: ['bonding', 'covalent', 'carbon'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-bond-003',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Metallic Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Metals conduct electricity because:',
    correctAnswer: 'Delocalized electrons can flow through the structure',
    wrongAnswers: ['Ions can move freely', 'They contain negative protons', 'Heat makes them conductive'],
    explanation: 'Metal = sea of electrons! Metal atoms share their outer electrons across the whole structure. These delocalized electrons flow when voltage is applied, carrying current. It\'s like a motorway where electrons can zoom around freely, unlike ionic compounds where electrons are stuck in one place.',
    hint: 'What can move and carry charge?',
    tags: ['bonding', 'metallic', 'conductivity'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-bond-004',
    subject: 'chemistry',
    topic: 'Structure',
    subtopic: 'Giant Structures',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each structure to its properties:',
    correctAnswer: ['Diamond → Very hard, high melting point, doesn\'t conduct electricity', 'Graphite → Soft, high melting point, conducts electricity', 'Ionic compounds → High melting point, conduct when molten', 'Simple molecules → Low melting point, don\'t conduct electricity'],
    wrongAnswers: [],
    explanation: 'Structure determines properties! Diamond\'s rigid 3D network makes it hard. Graphite\'s layers slide (lubricant!) and have free electrons (conducts!). Ionic compounds need melting to free ions for conduction. Simple molecules have weak intermolecular forces, so they\'re easy to melt.',
    hint: 'Think about what holds each structure together',
    tags: ['structure', 'properties', 'bonding'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-bond-005',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Polymers',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Polymers are made by joining many small molecules called:',
    correctAnswer: 'Monomers',
    wrongAnswers: ['Polymers', 'Dimers', 'Electrons'],
    explanation: 'Monomers are the building blocks! "Poly" = many, "mono" = one. Ethene monomers join to make polyethene (plastic bags). The double bond breaks and links to neighbors, forming long chains. It\'s like a molecular Lego train - each piece connects to make something bigger!',
    hint: 'What does "mono" mean?',
    tags: ['bonding', 'polymers', 'organic'],
    yearGroup: [10, 11]
  },
];

// ============================================
// QUANTITATIVE CHEMISTRY
// ============================================

export const gcseChemistryQuant: Question[] = [
  {
    id: 'chem-gcse-exp2-quant-001',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Relative Formula Mass',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'Calculate the relative formula mass of H₂O. (H=1, O=16)',
    correctAnswer: 18,
    wrongAnswers: [17, 19, 34],
    explanation: 'Add up the atomic masses! H₂O has 2 hydrogens (2×1=2) and 1 oxygen (16). Total = 2+16 = 18. This is why water is lighter than CO₂ (44). Relative formula mass helps you calculate how much product you\'ll get from reactions!',
    hint: 'Multiply each element by its subscript, then add',
    tags: ['quantitative', 'mass', 'calculations'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-quant-002',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Moles',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'One mole of any substance contains approximately:',
    correctAnswer: '6.02 × 10²³ particles (Avogadro\'s number)',
    wrongAnswers: ['1000 particles', '1 million particles', '6.02 × 10⁶ particles'],
    explanation: 'Avogadro\'s number is HUGE! 6.02 × 10²³ is 602,000,000,000,000,000,000,000 particles. Why so big? Atoms are tiny! This number connects atomic scale (invisible) to lab scale (grams you can weigh). One mole of water = 18g = 6 × 10²³ molecules.',
    hint: 'It\'s a very large number to connect atoms to grams',
    tags: ['quantitative', 'moles', 'avogadro'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-quant-003',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Concentration',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Concentration is calculated as: concentration = _____ ÷ volume',
    correctAnswer: 'moles',
    wrongAnswers: ['mass', 'particles', 'density'],
    explanation: 'Concentration tells you how "strong" a solution is! mol/dm³ means moles per litre. High concentration = lots of solute in a small volume (concentrated acid). Low concentration = spread out (dilute). Diluting adds solvent, reducing concentration.',
    hint: 'Units are mol/dm³',
    tags: ['quantitative', 'concentration', 'solutions'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-quant-004',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Percentage Yield',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why is the actual yield of a reaction usually less than the theoretical yield?',
    correctAnswer: 'All of these reasons',
    wrongAnswers: ['Incomplete reactions', 'Product lost during transfer', 'Side reactions forming other products'],
    explanation: 'Real chemistry isn\'t perfect! Reactions might not complete, you spill some during transfers, or unwanted side reactions happen. 100% yield is rare. Industry works hard to maximize yield - higher yield = more profit, less waste!',
    hint: 'What can go wrong in a real experiment?',
    tags: ['quantitative', 'yield', 'practical'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-quant-005',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Titrations',
    difficulty: 'gcse',
    type: 'order',
    question: 'Order the steps of a titration:',
    correctAnswer: ['Fill burette with acid', 'Add indicator to alkali in conical flask', 'Add acid slowly until color change', 'Record burette reading', 'Calculate concentration'],
    wrongAnswers: [],
    explanation: 'Titrations find unknown concentrations! The indicator changes color at the endpoint (neutralization). You know the concentration of one solution, the volumes of both, and can calculate the unknown. Practice makes perfect - your first titration will be messy!',
    hint: 'You\'re measuring how much acid neutralizes the alkali',
    tags: ['quantitative', 'titrations', 'practical'],
    yearGroup: [10, 11]
  },
];

// ============================================
// CHEMICAL REACTIONS
// ============================================

export const gcseChemistryReactions: Question[] = [
  {
    id: 'chem-gcse-exp2-react-001',
    subject: 'chemistry',
    topic: 'Reactions',
    subtopic: 'Types of Reaction',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each reaction type to its description:',
    correctAnswer: ['Combustion → Fuel + oxygen → CO₂ + water', 'Neutralization → Acid + base → salt + water', 'Displacement → More reactive element replaces less reactive', 'Decomposition → One substance breaks into simpler ones'],
    wrongAnswers: [],
    explanation: 'Different reactions, different products! Combustion burns fuel. Neutralization cancels acidity. Displacement is like a popularity contest - the more reactive wins. Decomposition is falling apart. Recognizing reaction types helps predict products!',
    hint: 'Each type has a characteristic pattern',
    tags: ['reactions', 'types', 'classification'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-react-002',
    subject: 'chemistry',
    topic: 'Reactions',
    subtopic: 'Exothermic',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'In an exothermic reaction, energy is released to the surroundings and the temperature increases.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! EXOthermic = energy EXits. Combustion, neutralization, and respiration are exothermic - they give out heat. That\'s why fire is hot and hand warmers work! The products have less energy than the reactants; the difference is released as heat.',
    tags: ['reactions', 'energy', 'exothermic'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-react-003',
    subject: 'chemistry',
    topic: 'Reactions',
    subtopic: 'Rates',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Increasing temperature increases reaction rate because:',
    correctAnswer: 'Particles move faster and collide more often with more energy',
    wrongAnswers: ['Particles get bigger', 'More particles are created', 'Catalysts work better'],
    explanation: 'Heat = speed! Higher temperature means particles have more kinetic energy. They zoom around faster, collide more often, AND collide harder. More collisions with enough energy to react = faster reaction. That\'s why cooking is faster in a hot oven!',
    hint: 'Think about what happens to particles when heated',
    tags: ['reactions', 'rates', 'temperature'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-react-004',
    subject: 'chemistry',
    topic: 'Reactions',
    subtopic: 'Catalysts',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A catalyst speeds up a reaction by:',
    correctAnswer: 'Providing an alternative pathway with lower activation energy',
    wrongAnswers: ['Adding extra energy to the reaction', 'Increasing the temperature', 'Changing the products formed'],
    explanation: 'Catalysts are chemical shortcuts! Instead of climbing the mountain (high activation energy), you take a tunnel through it (lower energy pathway). The catalyst isn\'t used up, so it can help many reactions. Enzymes are biological catalysts - your body depends on them!',
    hint: 'How does a catalyst change the energy required?',
    tags: ['reactions', 'catalysts', 'rates'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-react-005',
    subject: 'chemistry',
    topic: 'Reactions',
    subtopic: 'Reversible',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'At dynamic equilibrium in a reversible reaction:',
    correctAnswer: 'Forward and backward reactions occur at equal rates',
    wrongAnswers: ['The reaction has completely stopped', 'Only forward reaction occurs', 'All reactants have been used up'],
    explanation: 'Dynamic equilibrium is a balancing act! Both directions continue, but at equal rates, so concentrations stay constant. It looks like nothing\'s happening, but molecules are constantly reacting both ways. Change temperature or pressure, and the equilibrium shifts to compensate!',
    hint: 'What does "dynamic" mean here?',
    tags: ['reactions', 'equilibrium', 'reversible'],
    yearGroup: [10, 11]
  },
];

// ============================================
// ORGANIC CHEMISTRY
// ============================================

export const gcseChemistryOrganic: Question[] = [
  {
    id: 'chem-gcse-exp2-org-001',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Hydrocarbons',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Alkanes have the general formula:',
    correctAnswer: 'CₙH₂ₙ₊₂',
    wrongAnswers: ['CₙH₂ₙ', 'CₙHₙ', 'CₙH₂ₙ₋₂'],
    explanation: 'The formula tells you the pattern! For alkanes: Methane CH₄ (n=1: 2×1+2=4 hydrogens ✓). Ethane C₂H₆ (n=2: 2×2+2=6 ✓). Alkenes are CₙH₂ₙ because the double bond "uses up" two hydrogens. Formulas are chemistry\'s cheat codes!',
    hint: 'Test it with methane (CH₄) where n=1',
    tags: ['organic', 'alkanes', 'formulas'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-org-002',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Bromine water turns from orange to colorless when shaken with:',
    correctAnswer: 'Ethene (an alkene)',
    wrongAnswers: ['Ethane (an alkane)', 'Carbon dioxide', 'Water'],
    explanation: 'The bromine test detects unsaturation! Alkenes have double bonds that can "add" bromine across them. The orange bromine is used up → colorless. Alkanes (saturated) can\'t do this - they already have all the hydrogens possible. It\'s a quick test for double bonds!',
    hint: 'What\'s special about alkene molecules?',
    tags: ['organic', 'alkenes', 'tests'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-org-003',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Cracking',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Cracking breaks long-chain hydrocarbons into shorter, more useful molecules.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Crude oil contains lots of heavy, long-chain molecules (bitumen, fuel oil) but we need lighter ones (petrol, alkenes for plastics). Cracking uses heat/catalysts to break long chains into short ones. It\'s recycling within the refinery - nothing wasted!',
    tags: ['organic', 'cracking', 'industry'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-org-004',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Ethanol can be produced by fermentation of:',
    correctAnswer: 'Sugar using yeast',
    wrongAnswers: ['Oil using catalysts', 'Water using electricity', 'Limestone using heat'],
    explanation: 'Yeast turns sugar into alcohol! Fermentation: glucose → ethanol + CO₂. It\'s how we\'ve made beer and wine for thousands of years. Alternatively, ethanol can be made from ethene + steam (industrial). Fermentation is renewable but slow; industrial is fast but uses oil.',
    hint: 'This is the traditional method for making alcoholic drinks',
    tags: ['organic', 'alcohols', 'fermentation'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-org-005',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each organic compound to its functional group:',
    correctAnswer: ['Alcohols → -OH group', 'Carboxylic acids → -COOH group', 'Esters → -COO- group', 'Alkenes → C=C double bond'],
    wrongAnswers: [],
    explanation: 'Functional groups = personality! The -OH makes alcohols soluble and less flammable. -COOH makes acids weak and smelly (vinegar!). Esters smell fruity (perfumes). C=C makes alkenes reactive. Same atoms, different arrangements = different properties!',
    hint: 'Each group gives the molecule its characteristic reactions',
    tags: ['organic', 'functional-groups', 'structure'],
    yearGroup: [10, 11]
  },
];

// ============================================
// EARTH & ATMOSPHERE
// ============================================

export const gcseChemistryEarth: Question[] = [
  {
    id: 'chem-gcse-exp2-earth-001',
    subject: 'chemistry',
    topic: 'Earth Science',
    subtopic: 'Atmosphere',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'What percentage of Earth\'s atmosphere is nitrogen? (Round to nearest whole number)',
    correctAnswer: 78,
    wrongAnswers: [21, 50, 99],
    explanation: '78% nitrogen, 21% oxygen, 1% other stuff! Nitrogen is inert (doesn\'t react easily), which is why we\'re not constantly on fire. Oxygen is the reactive bit. The atmosphere\'s composition has been roughly stable for millions of years, but humans are changing it.',
    hint: 'It\'s the majority component by far',
    tags: ['atmosphere', 'composition', 'gases'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-earth-002',
    subject: 'chemistry',
    topic: 'Earth Science',
    subtopic: 'Early Atmosphere',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Earth\'s early atmosphere (billions of years ago) was mostly:',
    correctAnswer: 'Carbon dioxide, like Venus and Mars today',
    wrongAnswers: ['Oxygen, like today', 'Helium, like the Sun', 'Pure nitrogen'],
    explanation: 'Early Earth was like Venus! CO₂ dominated from volcanoes, with some nitrogen and water vapor. No oxygen - that came later from photosynthesizing organisms. They literally changed the atmosphere over billions of years. Life terraformed Earth!',
    hint: 'Compare to other rocky planets without life',
    tags: ['atmosphere', 'history', 'evolution'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-earth-003',
    subject: 'chemistry',
    topic: 'Earth Science',
    subtopic: 'Carbon Cycle',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Burning fossil fuels releases carbon that was:',
    correctAnswer: 'Locked away millions of years ago from ancient organisms',
    wrongAnswers: ['Recently absorbed by plants', 'Created by the combustion process', 'Always in the atmosphere'],
    explanation: 'Fossil fuels are ancient carbon storage! Oil, coal, and gas are remains of organisms that died millions of years ago. Their carbon was removed from the atmosphere and stored underground. Burning releases it back - that\'s why it disrupts the carbon cycle!',
    hint: 'Where did the carbon in fossil fuels originally come from?',
    tags: ['atmosphere', 'carbon-cycle', 'climate'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-earth-004',
    subject: 'chemistry',
    topic: 'Earth Science',
    subtopic: 'Climate Change',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Peer-reviewed scientific evidence shows that human activities are causing climate change.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! 97%+ of climate scientists agree. Evidence: CO₂ isotope ratios show fossil fuel origin, warming matches CO₂ increase, temperature records show unprecedented change. This isn\'t opinion - it\'s evidence-based science reviewed by thousands of experts worldwide.',
    tags: ['atmosphere', 'climate-change', 'evidence'],
    yearGroup: [10, 11]
  },
  {
    id: 'chem-gcse-exp2-earth-005',
    subject: 'chemistry',
    topic: 'Earth Science',
    subtopic: 'Resources',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Potable water is water that is:',
    correctAnswer: 'Safe to drink',
    wrongAnswers: ['Completely pure H₂O', 'Bottled in plastic', 'From rivers only'],
    explanation: 'Potable ≠ pure! Potable means drinkable - safe levels of dissolved substances. Tap water contains minerals (good for you!) and tiny amounts of chlorine (kills bacteria). Making water potable requires filtration and sterilization. In some countries, this is a huge challenge.',
    hint: 'It\'s about safety, not purity',
    tags: ['resources', 'water', 'treatment'],
    yearGroup: [10, 11]
  },
];

// ============================================
// TERMS
// ============================================

export const gcseChemistryTermsExpanded2: TermDefinition[] = [
  {
    id: 'chem-gcse-exp2-term-001',
    subject: 'chemistry',
    difficulty: 'gcse',
    term: 'Activation Energy',
    definition: 'The minimum energy needed for a reaction to occur when particles collide',
    example: 'Striking a match provides activation energy to start the combustion reaction.',
    tags: ['reactions', 'energy', 'rates']
  },
  {
    id: 'chem-gcse-exp2-term-002',
    subject: 'chemistry',
    difficulty: 'gcse',
    term: 'Electrolysis',
    definition: 'Using electricity to decompose ionic compounds when molten or dissolved',
    example: 'Aluminium is extracted from bauxite ore by electrolysis because it\'s too reactive to reduce with carbon.',
    tags: ['electrolysis', 'ions', 'extraction']
  },
  {
    id: 'chem-gcse-exp2-term-003',
    subject: 'chemistry',
    difficulty: 'gcse',
    term: 'Homologous Series',
    definition: 'A family of organic compounds with the same functional group and general formula',
    example: 'The alkanes form a homologous series: methane, ethane, propane, butane... each differing by CH₂.',
    tags: ['organic', 'classification', 'families']
  },
  {
    id: 'chem-gcse-exp2-term-004',
    subject: 'chemistry',
    difficulty: 'gcse',
    term: 'Le Chatelier\'s Principle',
    definition: 'If conditions change, equilibrium shifts to oppose the change',
    example: 'Increasing pressure on the Haber process shifts equilibrium toward ammonia (fewer gas molecules).',
    tags: ['equilibrium', 'industry', 'reactions']
  },
  {
    id: 'chem-gcse-exp2-term-005',
    subject: 'chemistry',
    difficulty: 'gcse',
    term: 'Atom Economy',
    definition: 'The percentage of reactant atoms that end up in the desired product',
    example: 'Addition reactions have 100% atom economy; substitution reactions produce waste products.',
    tags: ['quantitative', 'sustainability', 'efficiency']
  },
  {
    id: 'chem-gcse-exp2-term-006',
    subject: 'chemistry',
    difficulty: 'gcse',
    term: 'Cation',
    definition: 'A positively charged ion formed when an atom loses electrons',
    example: 'Sodium becomes Na+ by losing one electron, making it a cation.',
    tags: ['ions', 'bonding', 'atoms']
  },
];

// Combined exports
export const gcseChemistryExpanded2 = [
  ...gcseChemistryAtomic,
  ...gcseChemistryBonding,
  ...gcseChemistryQuant,
  ...gcseChemistryReactions,
  ...gcseChemistryOrganic,
  ...gcseChemistryEarth,
];
