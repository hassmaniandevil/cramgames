/**
 * GCSE Biology Expanded Part 2
 * Additional comprehensive gamified biology questions
 */

import { Question, TermDefinition } from '../types';

// ============================================
// CELL BIOLOGY
// ============================================

export const gcseBiologyCells: Question[] = [
  {
    id: 'bio-gcse-exp2-cell-001',
    subject: 'biology',
    topic: 'Cell Biology',
    subtopic: 'Microscopy',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'A cell appears 5mm wide under a microscope at ×400 magnification. What is its actual size in micrometers?',
    correctAnswer: 12.5,
    wrongAnswers: [2000, 0.0125, 125],
    explanation: 'Actual size = image size ÷ magnification = 5mm ÷ 400 = 0.0125mm = 12.5μm. Remember: 1mm = 1000μm. Cells are measured in micrometers because they\'re tiny!',
    hint: 'Convert mm to μm (1mm = 1000μm)',
    tags: ['cells', 'microscopy', 'calculations'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-cell-002',
    subject: 'biology',
    topic: 'Cell Biology',
    subtopic: 'Specialised Cells',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each specialised cell to its adaptation:',
    correctAnswer: ['Sperm → Tail for swimming, mitochondria for energy', 'Root hair → Long extension for large surface area', 'Red blood cell → No nucleus, biconcave shape, haemoglobin', 'Nerve cell → Long axon for transmitting impulses'],
    wrongAnswers: [],
    explanation: 'Form follows function! Each cell\'s structure is perfectly designed for its job. Sperm must swim to eggs. Root hairs absorb water. RBCs carry oxygen. Neurons transmit signals over long distances. Evolution shaped each one.',
    hint: 'Think about what job each cell needs to do',
    tags: ['cells', 'specialised', 'adaptations'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-cell-003',
    subject: 'biology',
    topic: 'Cell Biology',
    subtopic: 'Diffusion',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Diffusion is faster when:',
    correctAnswer: 'All of these',
    wrongAnswers: ['Concentration gradient is steeper', 'Temperature is higher', 'Surface area is larger'],
    explanation: 'All three speed up diffusion! Steeper gradient = more "push" to move. Higher temperature = particles move faster. More surface area = more space for particles to cross. This is why lungs have millions of alveoli!',
    hint: 'What factors affect how quickly particles spread?',
    tags: ['cells', 'diffusion', 'transport'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-cell-004',
    subject: 'biology',
    topic: 'Cell Biology',
    subtopic: 'Active Transport',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Active transport requires energy because it moves substances against the concentration gradient.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Diffusion is free (downhill). Active transport is like cycling uphill - you need energy (ATP). Root cells use active transport to absorb minerals from dilute soil solutions into more concentrated cell sap.',
    tags: ['cells', 'active-transport', 'energy'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-cell-005',
    subject: 'biology',
    topic: 'Cell Biology',
    subtopic: 'Cell Division',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Mitosis produces:',
    correctAnswer: '2 genetically identical diploid cells',
    wrongAnswers: ['4 genetically different haploid cells', '2 genetically different diploid cells', '4 genetically identical diploid cells'],
    explanation: 'Mitosis = copies! It creates two identical clones of the parent cell, each with the full chromosome set (diploid). Used for growth and repair. Meiosis (not mitosis) makes 4 different haploid gametes.',
    hint: 'Mitosis is for copying, not creating variety',
    tags: ['cells', 'mitosis', 'division'],
    yearGroup: [10, 11]
  },
];

// ============================================
// ORGANISATION
// ============================================

export const gcseBiologyOrganisation: Question[] = [
  {
    id: 'bio-gcse-exp2-org-001',
    subject: 'biology',
    topic: 'Organisation',
    subtopic: 'Digestive System',
    difficulty: 'gcse',
    type: 'order',
    question: 'Order the parts of the digestive system:',
    correctAnswer: ['Mouth', 'Oesophagus', 'Stomach', 'Small intestine', 'Large intestine'],
    wrongAnswers: [],
    explanation: 'Food\'s journey! Mouth (chewing, amylase). Oesophagus (peristalsis pushes food down). Stomach (acid kills bacteria, protease starts protein digestion). Small intestine (most digestion and absorption). Large intestine (water absorption).',
    hint: 'Follow the food from entry to exit',
    tags: ['organisation', 'digestion', 'systems'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-org-002',
    subject: 'biology',
    topic: 'Organisation',
    subtopic: 'Enzymes',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each enzyme to its substrate:',
    correctAnswer: ['Amylase → Starch', 'Protease → Proteins', 'Lipase → Lipids (fats)', 'Catalase → Hydrogen peroxide'],
    wrongAnswers: [],
    explanation: 'Enzymes are specific! Like locks and keys - each enzyme only fits one substrate. Amylase breaks starch into sugars. Protease breaks proteins into amino acids. Lipase breaks fats into fatty acids and glycerol. Wrong enzyme = no reaction!',
    hint: 'Each enzyme only works on one type of molecule',
    tags: ['organisation', 'enzymes', 'digestion'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-org-003',
    subject: 'biology',
    topic: 'Organisation',
    subtopic: 'Heart',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The left ventricle has the thickest wall because:',
    correctAnswer: 'It pumps blood to the whole body at high pressure',
    wrongAnswers: ['It pumps blood to the lungs', 'It receives blood from the body', 'It contains the pacemaker'],
    explanation: 'The left ventricle is the heart\'s workhorse! It must push blood through arteries to reach your toes and brain. The right ventricle only pumps to nearby lungs, so needs less muscle. Thick muscle = powerful squeeze = high pressure.',
    hint: 'Which journey is longer - to lungs or to the rest of the body?',
    tags: ['organisation', 'heart', 'circulation'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-org-004',
    subject: 'biology',
    topic: 'Organisation',
    subtopic: 'Blood Vessels',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each blood vessel to its features:',
    correctAnswer: ['Arteries → Thick walls, carry blood away from heart', 'Veins → Thin walls with valves, carry blood to heart', 'Capillaries → One cell thick, site of exchange'],
    wrongAnswers: [],
    explanation: 'A = Away (arteries carry blood Away). Arteries have thick muscular walls to withstand pressure. Veins have valves to prevent backflow (low pressure). Capillaries are super thin so substances can diffuse in and out.',
    hint: 'Think about pressure and the direction of blood flow',
    tags: ['organisation', 'blood-vessels', 'circulation'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-org-005',
    subject: 'biology',
    topic: 'Organisation',
    subtopic: 'Plants',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Xylem vessels transport water upward because of:',
    correctAnswer: 'Transpiration pull from leaves',
    wrongAnswers: ['Pumping from roots', 'Gravity pushing water down', 'Diffusion only'],
    explanation: 'It\'s like drinking through a straw! Water evaporates from leaves (transpiration), creating negative pressure that pulls water up from roots. Xylem vessels are dead tubes, reinforced with lignin - they can\'t actively pump.',
    hint: 'What creates the "suction" from above?',
    tags: ['organisation', 'plants', 'transport'],
    yearGroup: [10, 11]
  },
];

// ============================================
// INFECTION & RESPONSE
// ============================================

export const gcseBiologyInfection: Question[] = [
  {
    id: 'bio-gcse-exp2-inf-001',
    subject: 'biology',
    topic: 'Infection',
    subtopic: 'Pathogens',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each pathogen type to a disease it causes:',
    correctAnswer: ['Bacteria → Salmonella food poisoning', 'Virus → Measles', 'Fungus → Athlete\'s foot', 'Protist → Malaria'],
    wrongAnswers: [],
    explanation: 'Pathogens come in all types! Bacteria are cells (treatable with antibiotics). Viruses hijack your cells (antibiotics don\'t work). Fungi cause skin infections. Protists are single-celled eukaryotes like Plasmodium (malaria). Know the type to know the treatment!',
    hint: 'Each pathogen type causes different diseases',
    tags: ['infection', 'pathogens', 'disease'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-inf-002',
    subject: 'biology',
    topic: 'Infection',
    subtopic: 'Defences',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which is NOT a non-specific defence against pathogens?',
    correctAnswer: 'Antibodies',
    wrongAnswers: ['Skin as a barrier', 'Stomach acid', 'Mucus in airways'],
    explanation: 'Antibodies are specific! They\'re made to fight particular pathogens. Non-specific defences work against everything: skin blocks entry, stomach acid kills microbes, mucus traps particles, cilia sweep them out. Non-specific = first line of defence.',
    hint: 'Specific defences are tailored to individual pathogens',
    tags: ['infection', 'defences', 'immunity'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-inf-003',
    subject: 'biology',
    topic: 'Infection',
    subtopic: 'White Blood Cells',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each white blood cell action:',
    correctAnswer: ['Phagocytosis → Engulfing and digesting pathogens', 'Antibody production → Chemicals that bind to pathogens', 'Antitoxin production → Neutralising toxins'],
    wrongAnswers: [],
    explanation: 'White blood cells are your army! Phagocytes are the soldiers - they eat pathogens. Lymphocytes make antibodies (marking enemies for destruction) and antitoxins (neutralising poisons). Different cells, different jobs, one mission: protect you!',
    hint: 'Each type of response targets pathogens differently',
    tags: ['infection', 'immunity', 'white-blood-cells'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-inf-004',
    subject: 'biology',
    topic: 'Infection',
    subtopic: 'Vaccination',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Vaccines contain dead or weakened pathogens that stimulate the immune system without causing disease.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Vaccines trick your immune system into preparing for battle. Your body makes antibodies and memory cells without getting sick. If the real pathogen arrives later, your immune system remembers and responds fast. Herd immunity protects everyone!',
    tags: ['infection', 'vaccination', 'immunity'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-inf-005',
    subject: 'biology',
    topic: 'Infection',
    subtopic: 'Antibiotics',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why can\'t antibiotics treat viral infections?',
    correctAnswer: 'Viruses use host cell machinery, so antibiotics can\'t target them without harming us',
    wrongAnswers: ['Viruses are too small for antibiotics', 'Antibiotics are made from viruses', 'Viruses evolved to resist all antibiotics'],
    explanation: 'Antibiotics target bacterial structures (cell walls, ribosomes) that our cells don\'t have. Viruses reproduce inside our cells using OUR machinery. Attacking them would mean attacking ourselves! That\'s why we need antivirals or vaccines for viruses.',
    hint: 'Where do viruses reproduce?',
    tags: ['infection', 'antibiotics', 'treatment'],
    yearGroup: [10, 11]
  },
];

// ============================================
// BIOENERGETICS
// ============================================

export const gcseBiologyBioenergetics: Question[] = [
  {
    id: 'bio-gcse-exp2-bio-001',
    subject: 'biology',
    topic: 'Bioenergetics',
    subtopic: 'Photosynthesis',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The word equation for photosynthesis is: carbon dioxide + water → _____ + oxygen',
    correctAnswer: 'glucose',
    wrongAnswers: ['starch', 'protein', 'fat'],
    explanation: 'Photosynthesis makes glucose! CO₂ + H₂O → C₆H₁₂O₆ + O₂. Light energy is captured by chlorophyll and used to build glucose from simple molecules. Plants then use or store this glucose. It\'s the foundation of almost all food chains!',
    hint: 'What sugar do plants make?',
    tags: ['bioenergetics', 'photosynthesis', 'equations'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-bio-002',
    subject: 'biology',
    topic: 'Bioenergetics',
    subtopic: 'Limiting Factors',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each limiting factor to how it affects photosynthesis:',
    correctAnswer: ['Low light → Not enough energy for reactions', 'Low CO₂ → Not enough raw material', 'Low temperature → Enzymes work too slowly', 'Too hot → Enzymes denature'],
    wrongAnswers: [],
    explanation: 'The slowest factor limits the whole process! Like a chain - the weakest link determines strength. In winter: low light limits. In summer: CO₂ might limit. Greenhouses control all factors for maximum growth. Farmers optimize conditions!',
    hint: 'Think about what each factor provides or affects',
    tags: ['bioenergetics', 'limiting-factors', 'photosynthesis'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-bio-003',
    subject: 'biology',
    topic: 'Bioenergetics',
    subtopic: 'Respiration',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Aerobic respiration releases _____ the energy of anaerobic respiration.',
    correctAnswer: 'Much more than',
    wrongAnswers: ['The same as', 'Slightly more than', 'Less than'],
    explanation: 'Aerobic is WAY more efficient! Aerobic releases ~38 ATP per glucose. Anaerobic only ~2 ATP. That\'s why you breathe harder during exercise - you need oxygen for the efficient pathway. Anaerobic is a backup when oxygen runs out.',
    hint: 'Which pathway completely breaks down glucose?',
    tags: ['bioenergetics', 'respiration', 'comparison'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-bio-004',
    subject: 'biology',
    topic: 'Bioenergetics',
    subtopic: 'Anaerobic',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In humans, anaerobic respiration produces:',
    correctAnswer: 'Lactic acid',
    wrongAnswers: ['Ethanol and CO₂', 'Just CO₂', 'Water'],
    explanation: 'Muscles burn without oxygen! Glucose → lactic acid (+ small amount of energy). Lactic acid causes cramp and fatigue. You need to "repay the oxygen debt" afterward - breathing hard to break down the lactic acid. Yeast makes ethanol instead - that\'s brewing!',
    hint: 'What causes muscle cramps?',
    tags: ['bioenergetics', 'anaerobic', 'respiration'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-bio-005',
    subject: 'biology',
    topic: 'Bioenergetics',
    subtopic: 'Metabolism',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Metabolism includes all chemical reactions in an organism.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Metabolism = everything. Building molecules (anabolic): glucose → starch, amino acids → proteins. Breaking down (catabolic): glucose → CO₂ + H₂O. Your metabolic rate is how fast all this happens. Higher rate = more energy used.',
    tags: ['bioenergetics', 'metabolism', 'definitions'],
    yearGroup: [10, 11]
  },
];

// ============================================
// HOMEOSTASIS
// ============================================

export const gcseBiologyHomeostasis: Question[] = [
  {
    id: 'bio-gcse-exp2-hom-001',
    subject: 'biology',
    topic: 'Homeostasis',
    subtopic: 'Definition',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Homeostasis is:',
    correctAnswer: 'Maintaining a constant internal environment',
    wrongAnswers: ['Staying completely still', 'Having the same temperature as surroundings', 'Never changing anything'],
    explanation: 'Homeostasis is dynamic balance! Your body constantly adjusts to keep temperature, blood glucose, water levels etc. within narrow ranges. It\'s not about staying frozen - it\'s active regulation. Like a thermostat, not a statue!',
    hint: 'What does your body try to keep stable?',
    tags: ['homeostasis', 'definition', 'regulation'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-hom-002',
    subject: 'biology',
    topic: 'Homeostasis',
    subtopic: 'Nervous System',
    difficulty: 'gcse',
    type: 'order',
    question: 'Order the parts of a reflex arc:',
    correctAnswer: ['Stimulus', 'Receptor', 'Sensory neurone', 'Relay neurone (in spinal cord)', 'Motor neurone', 'Effector', 'Response'],
    wrongAnswers: [],
    explanation: 'Reflexes are lightning fast! Hot pan → receptors in skin → sensory neurone → relay neurone (no brain needed!) → motor neurone → muscle contracts → hand moves. The whole arc takes milliseconds. Faster than conscious thought!',
    hint: 'Follow the signal from detection to action',
    tags: ['homeostasis', 'nervous', 'reflex'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-hom-003',
    subject: 'biology',
    topic: 'Homeostasis',
    subtopic: 'Blood Glucose',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each hormone to its effect on blood glucose:',
    correctAnswer: ['Insulin → Lowers blood glucose', 'Glucagon → Raises blood glucose'],
    wrongAnswers: [],
    explanation: 'Insulin and glucagon are opposites! After eating: blood glucose rises → pancreas releases insulin → glucose enters cells, stored as glycogen → levels fall. When hungry: glucagon converts glycogen back to glucose. Two hormones, perfect balance!',
    hint: 'One lowers, one raises',
    tags: ['homeostasis', 'hormones', 'glucose'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-hom-004',
    subject: 'biology',
    topic: 'Homeostasis',
    subtopic: 'Temperature',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'When you\'re too hot, your body:',
    correctAnswer: 'All of these',
    wrongAnswers: ['Sweats more', 'Dilates blood vessels near skin', 'Hairs lie flat'],
    explanation: 'Full cooling mode! Sweat evaporates (using heat energy). Blood vessels dilate (vasodilation) bringing warm blood to skin surface to lose heat. Hairs lie flat so no insulating air layer. The opposite happens when cold. Your body is brilliant at thermoregulation!',
    hint: 'How does your body lose heat?',
    tags: ['homeostasis', 'temperature', 'regulation'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-hom-005',
    subject: 'biology',
    topic: 'Homeostasis',
    subtopic: 'Kidneys',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The kidneys maintain water balance by:',
    correctAnswer: 'Adjusting how much water is reabsorbed from urine',
    wrongAnswers: ['Controlling how much you drink', 'Changing blood pressure', 'Releasing water from storage'],
    explanation: 'Kidneys are master filters! They filter blood, then reabsorb what\'s needed. ADH hormone controls water reabsorption: more ADH = more water reabsorbed = concentrated urine. Less ADH = dilute urine. That\'s why your pee changes color!',
    hint: 'Where does water go after being filtered?',
    tags: ['homeostasis', 'kidneys', 'water'],
    yearGroup: [10, 11]
  },
];

// ============================================
// GENETICS & INHERITANCE
// ============================================

export const gcseBiologyGenetics: Question[] = [
  {
    id: 'bio-gcse-exp2-gen-001',
    subject: 'biology',
    topic: 'Genetics',
    subtopic: 'DNA',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'DNA\'s double helix is held together by:',
    correctAnswer: 'Complementary base pairs (A-T, C-G)',
    wrongAnswers: ['Covalent bonds only', 'Random base pairing', 'Protein connections'],
    explanation: 'A always pairs with T, C always pairs with G! These hydrogen bonds between complementary bases hold the two strands together. This pairing rule is why DNA can replicate accurately - each strand is a template for its partner.',
    hint: 'Which bases pair together?',
    tags: ['genetics', 'dna', 'structure'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-gen-002',
    subject: 'biology',
    topic: 'Genetics',
    subtopic: 'Inheritance',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'If both parents are heterozygous (Bb), what percentage of offspring would be homozygous recessive (bb)?',
    correctAnswer: 25,
    wrongAnswers: [50, 75, 0],
    explanation: 'Draw a Punnett square! Bb × Bb gives: BB (25%), Bb (50%), bb (25%). Only bb is homozygous recessive. Three quarters show the dominant trait, but only one quarter is BB. The 3:1 ratio is classic Mendelian genetics!',
    hint: 'Use a Punnett square',
    tags: ['genetics', 'inheritance', 'punnet'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-gen-003',
    subject: 'biology',
    topic: 'Genetics',
    subtopic: 'Sex Determination',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'In humans, the father determines the sex of the child because sperm carry either X or Y.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Eggs always carry X. Sperm carry either X or Y. XX = female, XY = male. So it\'s the sperm that determines sex. 50/50 chance each time. This is why the ratio of boys to girls is roughly equal in populations.',
    tags: ['genetics', 'sex-determination', 'chromosomes'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-gen-004',
    subject: 'biology',
    topic: 'Genetics',
    subtopic: 'Variation',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each cause of variation:',
    correctAnswer: ['Genetic → Eye color, blood type', 'Environmental → Language spoken, scars', 'Both → Height, weight, skin color'],
    wrongAnswers: [],
    explanation: 'Nature AND nurture! Some traits are purely genetic (blood type - environment can\'t change it). Some are purely environmental (language). Most are both - you inherit potential for height, but nutrition affects how tall you actually grow.',
    hint: 'Can the environment change these traits?',
    tags: ['genetics', 'variation', 'environment'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-gen-005',
    subject: 'biology',
    topic: 'Genetics',
    subtopic: 'Evolution',
    difficulty: 'gcse',
    type: 'order',
    question: 'Order the steps of natural selection:',
    correctAnswer: ['Variation exists in a population', 'Environmental pressure creates competition', 'Best-adapted individuals survive', 'Survivors reproduce, passing on advantageous alleles', 'Over time, population changes'],
    wrongAnswers: [],
    explanation: 'Darwin\'s big idea! Random variation + selective pressure + inheritance = evolution. It\'s not "survival of the fittest" meaning strongest - it\'s whoever fits best with the environment. Peppered moths, antibiotic resistance, Darwin\'s finches - all examples!',
    hint: 'What causes some individuals to survive better?',
    tags: ['genetics', 'evolution', 'natural-selection'],
    yearGroup: [10, 11]
  },
];

// ============================================
// ECOLOGY
// ============================================

export const gcseBiologyEcology: Question[] = [
  {
    id: 'bio-gcse-exp2-eco-001',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Food Chains',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In a food chain, only about 10% of energy transfers to the next level because:',
    correctAnswer: 'Energy is lost as heat from respiration and in waste',
    wrongAnswers: ['Animals only eat 10% of their food', 'Sunlight is 10% efficient', 'Plants store 90% of energy'],
    explanation: 'Energy leaks out at every step! Organisms respire, losing heat. Not all parts are eaten (bones, roots). Waste contains undigested energy. Only ~10% becomes new biomass. That\'s why food chains rarely exceed 5 levels - not enough energy left!',
    hint: 'Where does the "lost" energy go?',
    tags: ['ecology', 'energy', 'food-chains'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-eco-002',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Carbon Cycle',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each process to its role in the carbon cycle:',
    correctAnswer: ['Photosynthesis → Removes CO₂ from atmosphere', 'Respiration → Returns CO₂ to atmosphere', 'Combustion → Releases stored carbon quickly', 'Decomposition → Recycles carbon from dead organisms'],
    wrongAnswers: [],
    explanation: 'Carbon cycles continuously! Plants capture CO₂ (photosynthesis). All organisms release it (respiration). Decomposers break down dead matter. Fossil fuels are ancient stored carbon - burning releases it. The cycle should balance, but we\'re disrupting it!',
    hint: 'Which processes add or remove atmospheric CO₂?',
    tags: ['ecology', 'carbon-cycle', 'cycles'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-eco-003',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Biodiversity',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Biodiversity refers to the variety of all living organisms within an ecosystem.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Biodiversity = biological diversity. More species = more biodiversity. It includes genetic diversity within species too. High biodiversity makes ecosystems more resilient. Rainforests and coral reefs have the highest biodiversity. We\'re losing species fast!',
    tags: ['ecology', 'biodiversity', 'definitions'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-eco-004',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Human Impact',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Eutrophication occurs when:',
    correctAnswer: 'Excess nutrients cause algal blooms that deplete oxygen',
    wrongAnswers: ['Water becomes too cold for life', 'Rivers dry up completely', 'Fish evolve to breathe air'],
    explanation: 'Fertilizer runoff → nutrients in water → algae bloom → algae die → decomposers multiply → they use up all oxygen → fish suffocate. It\'s a chain reaction that turns living water into dead zones. Farming without care has consequences!',
    hint: 'What do excess nutrients feed in water?',
    tags: ['ecology', 'pollution', 'human-impact'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp2-eco-005',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Sampling',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Quadrats are used to:',
    correctAnswer: 'Estimate population size of plants or slow-moving animals',
    wrongAnswers: ['Measure temperature', 'Count fast-moving animals', 'Test water quality'],
    explanation: 'Quadrats are sampling squares! Place randomly, count organisms inside, scale up to estimate total population. For accurate estimates: use many quadrats, place randomly, calculate mean. It\'s statistics meets ecology - field work made scientific!',
    hint: 'What kind of organisms stay still long enough to count?',
    tags: ['ecology', 'sampling', 'fieldwork'],
    yearGroup: [10, 11]
  },
];

// ============================================
// TERMS
// ============================================

export const gcseBiologyTermsExpanded2: TermDefinition[] = [
  {
    id: 'bio-gcse-exp2-term-001',
    subject: 'biology',
    difficulty: 'gcse',
    term: 'Osmosis',
    definition: 'The diffusion of water molecules from a dilute solution to a concentrated solution through a partially permeable membrane',
    example: 'Plant cells become turgid when water moves in by osmosis, keeping the plant upright.',
    tags: ['cells', 'transport', 'water']
  },
  {
    id: 'bio-gcse-exp2-term-002',
    subject: 'biology',
    difficulty: 'gcse',
    term: 'Denaturation',
    definition: 'The permanent change in enzyme shape caused by high temperature or extreme pH, destroying its function',
    example: 'Cooking an egg denatures the proteins - they can\'t return to their original form.',
    tags: ['enzymes', 'proteins', 'temperature']
  },
  {
    id: 'bio-gcse-exp2-term-003',
    subject: 'biology',
    difficulty: 'gcse',
    term: 'Stomata',
    definition: 'Tiny pores on leaf surfaces that open and close to control gas exchange and water loss',
    example: 'Stomata close during drought to reduce water loss, but this also reduces CO₂ uptake for photosynthesis.',
    tags: ['plants', 'leaves', 'gas-exchange']
  },
  {
    id: 'bio-gcse-exp2-term-004',
    subject: 'biology',
    difficulty: 'gcse',
    term: 'Pandemic',
    definition: 'A disease outbreak that spreads across multiple countries or continents, affecting large numbers',
    example: 'COVID-19 was declared a pandemic in March 2020 when it spread globally.',
    tags: ['disease', 'spread', 'health']
  },
  {
    id: 'bio-gcse-exp2-term-005',
    subject: 'biology',
    difficulty: 'gcse',
    term: 'Trophic Level',
    definition: 'The position an organism occupies in a food chain, based on what it eats',
    example: 'Producers are trophic level 1, primary consumers are level 2, secondary consumers are level 3.',
    tags: ['ecology', 'food-chains', 'energy']
  },
  {
    id: 'bio-gcse-exp2-term-006',
    subject: 'biology',
    difficulty: 'gcse',
    term: 'Genotype',
    definition: 'The genetic makeup of an organism, the alleles it carries',
    example: 'A person with genotype Bb for eye color carries one brown allele and one blue allele.',
    tags: ['genetics', 'alleles', 'inheritance']
  },
];

// Combined exports
export const gcseBiologyExpanded2 = [
  ...gcseBiologyCells,
  ...gcseBiologyOrganisation,
  ...gcseBiologyInfection,
  ...gcseBiologyBioenergetics,
  ...gcseBiologyHomeostasis,
  ...gcseBiologyGenetics,
  ...gcseBiologyEcology,
];
