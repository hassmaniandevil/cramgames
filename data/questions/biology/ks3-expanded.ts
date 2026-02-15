/**
 * KS3 Biology Expanded Question Bank
 * Fun-first gamified questions for younger students
 */

import { Question, TermDefinition } from '../types';

// ============================================
// CELLS & ORGANISATION
// ============================================

export const ks3BiologyCells: Question[] = [
  {
    id: 'bio-ks3-exp-cell-001',
    subject: 'biology',
    topic: 'Cells',
    subtopic: 'Cell Structure',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'If a cell was a school, the nucleus would be like the...',
    correctAnswer: 'Head teacher\'s office (controls everything)',
    wrongAnswers: ['Canteen (makes food)', 'Playground (where energy is released)', 'School gates (controls entry)'],
    explanation: 'The nucleus is the control centre! It contains DNA which is like the school rules and curriculum - telling the cell what to do and how to do it.',
    hint: 'Where are all the important decisions made?',
    tags: ['cells', 'nucleus', 'analogy'],
    yearGroup: [7, 8]
  },
  {
    id: 'bio-ks3-exp-cell-002',
    subject: 'biology',
    topic: 'Cells',
    subtopic: 'Cell Structure',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Mitochondria are called the "powerhouses" of the cell. What do they actually do?',
    correctAnswer: 'Release energy from food through respiration',
    wrongAnswers: ['Store electricity', 'Make the cell glow', 'Power your phone'],
    explanation: 'Mitochondria take glucose and oxygen and release energy through respiration. It\'s like having tiny power stations inside every cell! 🔋',
    hint: 'Think about what "powerhouse" means - it makes power/energy',
    tags: ['cells', 'mitochondria', 'respiration'],
    yearGroup: [7, 8]
  },
  {
    id: 'bio-ks3-exp-cell-003',
    subject: 'biology',
    topic: 'Cells',
    subtopic: 'Plant vs Animal',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'You\'re looking at a cell under a microscope. It has a cell wall and chloroplasts. Is it plant or animal?',
    correctAnswer: 'Plant cell',
    wrongAnswers: ['Animal cell', 'Could be either', 'Neither - it\'s a bacteria'],
    explanation: 'Plant cells have cell walls (for support) and chloroplasts (for photosynthesis). Animal cells have neither - they get their energy from eating, not sunlight!',
    hint: 'Which type of cell needs to do photosynthesis?',
    tags: ['cells', 'plant', 'animal'],
    yearGroup: [7, 8]
  },
  {
    id: 'bio-ks3-exp-cell-004',
    subject: 'biology',
    topic: 'Cells',
    subtopic: 'Specialised Cells',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match each specialised cell to its superpower:',
    correctAnswer: ['Red blood cell → Carries oxygen around the body', 'Root hair cell → Absorbs water from soil', 'Nerve cell → Sends electrical signals quickly', 'Sperm cell → Swims to reach the egg'],
    wrongAnswers: [],
    explanation: 'Each cell type is perfectly designed for its job! Red blood cells are packed with haemoglobin, root hair cells have huge surface area, nerve cells are super long, sperm cells have tails.',
    hint: 'Think about what each cell needs to do',
    tags: ['cells', 'specialised', 'function'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp-cell-005',
    subject: 'biology',
    topic: 'Cells',
    subtopic: 'Microscopes',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'A microscope has ×10 eyepiece and ×40 objective lens. What\'s the total magnification?',
    correctAnswer: '×400',
    wrongAnswers: ['×50', '×30', '×4000'],
    explanation: 'Total magnification = eyepiece × objective = 10 × 40 = 400. That means things look 400 times bigger than they really are! Mind-blowing.',
    hint: 'Multiply the two magnifications together',
    tags: ['cells', 'microscopes', 'calculation'],
    yearGroup: [7, 8]
  },

  // HUMAN BODY
  {
    id: 'bio-ks3-exp-body-001',
    subject: 'biology',
    topic: 'Human Body',
    subtopic: 'Digestive System',
    difficulty: 'ks3',
    type: 'order',
    question: 'Put these digestive organs in the order food passes through them:',
    correctAnswer: ['Mouth', 'Oesophagus', 'Stomach', 'Small intestine', 'Large intestine'],
    wrongAnswers: [],
    explanation: 'Food\'s journey: chewed in mouth → squeezed down oesophagus → churned in stomach → nutrients absorbed in small intestine → water absorbed in large intestine → out!',
    hint: 'Start where food enters, end where waste exits',
    tags: ['digestion', 'organs', 'order'],
    yearGroup: [7, 8]
  },
  {
    id: 'bio-ks3-exp-body-002',
    subject: 'biology',
    topic: 'Human Body',
    subtopic: 'Digestive System',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why is the small intestine actually really long (about 6 metres)?',
    correctAnswer: 'More surface area to absorb nutrients',
    wrongAnswers: ['To slow down food', 'To store food', 'Because it\'s stretchy'],
    explanation: 'Length + villi (finger-like projections) = massive surface area. More area = more absorption = you get more goodness from your food. It\'s all about efficiency!',
    hint: 'Think about what the small intestine\'s job is',
    tags: ['digestion', 'absorption', 'adaptation'],
    yearGroup: [7, 8]
  },
  {
    id: 'bio-ks3-exp-body-003',
    subject: 'biology',
    topic: 'Human Body',
    subtopic: 'Skeleton',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How many bones are in the adult human body?',
    correctAnswer: '206',
    wrongAnswers: ['106', '306', '506'],
    explanation: 'Babies have about 270 bones, but many fuse together as you grow. By adulthood: 206 bones. Fun fact: your hand alone has 27 bones!',
    hint: 'It\'s more than 100 but less than 300',
    tags: ['skeleton', 'bones', 'facts'],
    yearGroup: [7, 8]
  },
  {
    id: 'bio-ks3-exp-body-004',
    subject: 'biology',
    topic: 'Human Body',
    subtopic: 'Breathing',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'When you breathe IN, your diaphragm...',
    correctAnswer: 'Contracts and moves down, expanding the lungs',
    wrongAnswers: ['Relaxes and moves up', 'Stays completely still', 'Contracts and moves up'],
    explanation: 'Diaphragm contracts → flattens → chest cavity expands → air pressure drops → air rushes in. It\'s like pulling the plunger of a syringe!',
    hint: 'Contraction pulls the diaphragm which way?',
    tags: ['breathing', 'diaphragm', 'lungs'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp-body-005',
    subject: 'biology',
    topic: 'Human Body',
    subtopic: 'Circulation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Arteries carry blood AWAY from the heart. How can you remember this?',
    correctAnswer: 'Arteries = Away (both start with A)',
    wrongAnswers: ['Arteries = Arrive at organs', 'Arteries = Absorb oxygen', 'There\'s no good way to remember'],
    explanation: 'A for Artery, A for Away! Veins carry blood back to the heart. Arteries have thick walls because they carry high-pressure blood fresh from the heart.',
    hint: 'Look at the first letter of each word',
    tags: ['circulation', 'arteries', 'memory'],
    yearGroup: [7, 8]
  },

  // REPRODUCTION
  {
    id: 'bio-ks3-exp-repro-001',
    subject: 'biology',
    topic: 'Reproduction',
    subtopic: 'Puberty',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Puberty is triggered by hormones released from which gland in the brain?',
    correctAnswer: 'Pituitary gland',
    wrongAnswers: ['Sweat glands', 'Thyroid gland', 'The hippocampus'],
    explanation: 'The pituitary gland is the "master gland" - it sends chemical messages (hormones) that tell your body to start developing. It\'s tiny but mighty!',
    hint: 'It\'s sometimes called the "master gland"',
    tags: ['reproduction', 'puberty', 'hormones'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp-repro-002',
    subject: 'biology',
    topic: 'Reproduction',
    subtopic: 'Menstrual Cycle',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'The menstrual cycle is typically about how many days long?',
    correctAnswer: '28 days',
    wrongAnswers: ['7 days', '14 days', '365 days'],
    explanation: 'The average cycle is 28 days, though it varies between people. Day 1 is the start of a period, ovulation happens around day 14. Bodies are amazing timekeepers!',
    hint: 'It\'s about the same length as a lunar month',
    tags: ['reproduction', 'menstruation', 'cycle'],
    yearGroup: [8, 9]
  },

  // HEALTH
  {
    id: 'bio-ks3-exp-health-001',
    subject: 'biology',
    topic: 'Health',
    subtopic: 'Nutrients',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match each nutrient to what your body uses it for:',
    correctAnswer: ['Carbohydrates → Quick energy', 'Proteins → Growth and repair', 'Fats → Long-term energy and insulation', 'Vitamins → Keeping body processes working'],
    wrongAnswers: [],
    explanation: 'Your body needs all of these! Carbs are like quick fuel, proteins are building blocks, fats are emergency reserves and padding, vitamins are like oil keeping the machine running.',
    hint: 'Think about what each nutrient is known for',
    tags: ['health', 'nutrients', 'diet'],
    yearGroup: [7, 8]
  },
  {
    id: 'bio-ks3-exp-health-002',
    subject: 'biology',
    topic: 'Health',
    subtopic: 'Drugs',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Caffeine (in coffee, tea, energy drinks) is classified as what type of drug?',
    correctAnswer: 'Stimulant',
    wrongAnswers: ['Depressant', 'Hallucinogen', 'Painkiller'],
    explanation: 'Stimulants speed up your nervous system - making you feel more alert and awake. That\'s why people drink coffee in the morning! Too much can make you jittery though.',
    hint: 'Does caffeine make you sleepy or more awake?',
    tags: ['health', 'drugs', 'stimulants'],
    yearGroup: [8, 9]
  },
  {
    id: 'bio-ks3-exp-health-003',
    subject: 'biology',
    topic: 'Health',
    subtopic: 'Disease',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which of these is a communicable (infectious) disease?',
    correctAnswer: 'Flu',
    wrongAnswers: ['Diabetes', 'Heart disease', 'Asthma'],
    explanation: 'Communicable diseases spread between people - flu is caused by a virus you can catch! Diabetes, heart disease, and asthma are non-communicable - you can\'t "catch" them.',
    hint: 'Communicable means it can be communicated/spread',
    tags: ['health', 'disease', 'communicable'],
    yearGroup: [7, 8, 9]
  },

  // PLANTS
  {
    id: 'bio-ks3-exp-plant-001',
    subject: 'biology',
    topic: 'Plants',
    subtopic: 'Photosynthesis',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What do plants need for photosynthesis? (Pick the correct combination)',
    correctAnswer: 'Carbon dioxide + water + light',
    wrongAnswers: ['Oxygen + glucose + light', 'Carbon dioxide + oxygen + heat', 'Glucose + water + darkness'],
    explanation: 'CO₂ + H₂O + light energy → glucose + O₂. Plants take in carbon dioxide and water, use sunlight for energy, and make glucose (food) and oxygen (which we breathe!).',
    hint: 'Think about what plants take IN, not what they make',
    tags: ['plants', 'photosynthesis', 'equation'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp-plant-002',
    subject: 'biology',
    topic: 'Plants',
    subtopic: 'Photosynthesis',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Chlorophyll is green because it...',
    correctAnswer: 'Reflects green light and absorbs other colours',
    wrongAnswers: ['Absorbs green light', 'Is made of green chemicals', 'Contains green food colouring'],
    explanation: 'Chlorophyll absorbs red and blue light for photosynthesis but reflects green - that\'s what we see! If plants absorbed green too, they\'d look black.',
    hint: 'The colour you see is the colour that bounces off',
    tags: ['plants', 'chlorophyll', 'light'],
    yearGroup: [7, 8]
  },
  {
    id: 'bio-ks3-exp-plant-003',
    subject: 'biology',
    topic: 'Plants',
    subtopic: 'Plant Structure',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match each plant part to its function:',
    correctAnswer: ['Roots → Absorb water and anchor the plant', 'Stem → Transport water and support leaves', 'Leaves → Photosynthesis', 'Flower → Reproduction'],
    wrongAnswers: [],
    explanation: 'Each part has a special job! Roots are like underground anchors with straws. Stems are the plant\'s highway. Leaves are solar panels. Flowers are for making seeds.',
    hint: 'Think about where each part is and what it\'s exposed to',
    tags: ['plants', 'structure', 'function'],
    yearGroup: [7, 8]
  },

  // ECOLOGY
  {
    id: 'bio-ks3-exp-eco-001',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Food Chains',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In a food chain, why do plants always come first?',
    correctAnswer: 'They\'re producers - they make their own food from sunlight',
    wrongAnswers: ['Alphabetical order (P comes before other letters)', 'They\'re the smallest organisms', 'They\'re the most numerous'],
    explanation: 'Plants are PRODUCERS - they produce food using photosynthesis. Everything else is a consumer, eating plants or other animals. No plants = no food chain!',
    hint: 'What makes plants special compared to animals?',
    tags: ['ecology', 'food chains', 'producers'],
    yearGroup: [7, 8]
  },
  {
    id: 'bio-ks3-exp-eco-002',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Food Chains',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In this food chain: Grass → Rabbit → Fox → Eagle, what happens if a disease kills most rabbits?',
    correctAnswer: 'Fox numbers decrease (less food), grass increases (less eaten)',
    wrongAnswers: ['Nothing changes', 'Eagles eat more grass', 'Foxes become herbivores'],
    explanation: 'Fewer rabbits = less food for foxes = fox numbers fall. Fewer rabbits eating grass = grass increases. It\'s all connected - that\'s why we call it a food WEB!',
    hint: 'Think about who eats rabbits and what rabbits eat',
    tags: ['ecology', 'food chains', 'interdependence'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp-eco-003',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Habitats',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'A cactus survives in the desert because it has...',
    correctAnswer: 'Thick stem to store water, spines instead of leaves',
    wrongAnswers: ['Deep roots to find underground rivers', 'Special sand-filtering organs', 'The ability to make water from CO₂'],
    explanation: 'Cacti are adaptation champions! Thick stems store water, spines reduce water loss and protect from animals, waxy coating prevents evaporation. Desert survival mode!',
    hint: 'Think about the biggest challenge in a desert',
    tags: ['ecology', 'adaptation', 'desert'],
    yearGroup: [7, 8]
  },

  // GENETICS
  {
    id: 'bio-ks3-exp-gen-001',
    subject: 'biology',
    topic: 'Genetics',
    subtopic: 'DNA',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'DNA stands for deoxyribonucleic acid. Where is it found in cells?',
    correctAnswer: 'In the nucleus',
    wrongAnswers: ['In the mitochondria only', 'Floating in the cytoplasm', 'In the cell membrane'],
    explanation: 'DNA lives in the nucleus, coiled up into structures called chromosomes. It\'s like the cell\'s instruction manual - too important to leave lying around!',
    hint: 'The nucleus is the "control centre" - where would instructions be kept?',
    tags: ['genetics', 'DNA', 'nucleus'],
    yearGroup: [8, 9]
  },
  {
    id: 'bio-ks3-exp-gen-002',
    subject: 'biology',
    topic: 'Genetics',
    subtopic: 'Inheritance',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'You inherit half your DNA from your mum and half from your dad. This happens during...',
    correctAnswer: 'Fertilisation (when sperm meets egg)',
    wrongAnswers: ['Birth', 'Puberty', 'Your first birthday'],
    explanation: 'Sperm carries dad\'s DNA, egg carries mum\'s. When they fuse at fertilisation, you get a unique 50/50 mix. That\'s why you might have dad\'s nose and mum\'s eyes!',
    hint: 'When do the two halves first combine?',
    tags: ['genetics', 'inheritance', 'fertilisation'],
    yearGroup: [8, 9]
  },
  {
    id: 'bio-ks3-exp-gen-003',
    subject: 'biology',
    topic: 'Genetics',
    subtopic: 'Variation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Identical twins have identical DNA. Why might they still look slightly different?',
    correctAnswer: 'Environmental factors like diet, exercise, and experiences',
    wrongAnswers: ['One twin stole DNA from the other', 'Hospitals mix them up', 'DNA changes every year'],
    explanation: 'Genes aren\'t everything! Environment matters too. One twin might exercise more, eat differently, or get more sun. Nature AND nurture shape who we are.',
    hint: 'What besides genes can affect how you look?',
    tags: ['genetics', 'variation', 'environment'],
    yearGroup: [8, 9]
  },
];

// ============================================
// KS3 BIOLOGY TERMS
// ============================================

export const ks3BiologyTermsExpanded: TermDefinition[] = [
  {
    id: 'bio-ks3-term-exp-001',
    subject: 'biology',
    term: 'Cell membrane',
    definition: 'The thin outer layer of all cells that controls what enters and leaves - like a security guard at a gate',
    difficulty: 'ks3',
    relatedTerms: ['cell', 'diffusion', 'osmosis']
  },
  {
    id: 'bio-ks3-term-exp-002',
    subject: 'biology',
    term: 'Cytoplasm',
    definition: 'The jelly-like substance inside cells where chemical reactions happen - the cell\'s workshop',
    difficulty: 'ks3',
    relatedTerms: ['cell', 'organelles', 'reactions']
  },
  {
    id: 'bio-ks3-term-exp-003',
    subject: 'biology',
    term: 'Respiration',
    definition: 'The process of releasing energy from food - happens in ALL living things, not just breathing!',
    difficulty: 'ks3',
    relatedTerms: ['mitochondria', 'glucose', 'energy']
  },
  {
    id: 'bio-ks3-term-exp-004',
    subject: 'biology',
    term: 'Enzyme',
    definition: 'A biological catalyst that speeds up reactions - like a key that fits a specific lock',
    difficulty: 'ks3',
    relatedTerms: ['digestion', 'protein', 'active site']
  },
  {
    id: 'bio-ks3-term-exp-005',
    subject: 'biology',
    term: 'Habitat',
    definition: 'The natural home of an organism - where it lives, feeds, and reproduces',
    difficulty: 'ks3',
    relatedTerms: ['ecosystem', 'environment', 'adaptation']
  },
  {
    id: 'bio-ks3-term-exp-006',
    subject: 'biology',
    term: 'Predator',
    definition: 'An animal that hunts and eats other animals for food',
    difficulty: 'ks3',
    relatedTerms: ['prey', 'food chain', 'consumer']
  },
  {
    id: 'bio-ks3-term-exp-007',
    subject: 'biology',
    term: 'Chromosome',
    definition: 'Thread-like structures in the nucleus made of coiled DNA - humans have 46',
    difficulty: 'ks3',
    relatedTerms: ['DNA', 'genes', 'nucleus']
  },
  {
    id: 'bio-ks3-term-exp-008',
    subject: 'biology',
    term: 'Gene',
    definition: 'A section of DNA that codes for a characteristic - like eye colour or blood type',
    difficulty: 'ks3',
    relatedTerms: ['DNA', 'chromosome', 'inheritance']
  },
];

// Combined export
export const ks3BiologyExpanded = [...ks3BiologyCells];
