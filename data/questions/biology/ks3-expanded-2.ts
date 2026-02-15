/**
 * KS3 Biology Expanded Part 2
 * Fun-first biology for Years 7-9
 */

import { Question, TermDefinition } from '../types';

// ============================================================================
// CELLS AND ORGANISATION
// ============================================================================

const ks3CellsOrganisation: Question[] = [
  {
    id: 'bio-ks3-exp2-001',
    subject: 'biology',
    topic: 'Cells',
    subtopic: 'Cell Structure',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which organelle is found in plant cells but NOT animal cells?',
    correctAnswer: 'Chloroplast',
    wrongAnswers: [
      'Nucleus',
      'Mitochondria',
      'Cell membrane'
    ],
    explanation: 'Chloroplasts contain chlorophyll for photosynthesis - that\'s why plants are green! Animals eat plants to get energy; plants make their own food from sunlight.',
    tags: ['cells', 'chloroplasts', 'comparison'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp2-002',
    subject: 'biology',
    topic: 'Cells',
    subtopic: 'Specialised Cells',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why do red blood cells have no nucleus?',
    correctAnswer: 'To make more room for haemoglobin to carry oxygen',
    wrongAnswers: [
      'They are too small',
      'They don\'t need DNA',
      'It fell out'
    ],
    explanation: 'Red blood cells are oxygen-delivery experts. No nucleus = more space for haemoglobin. Trade-off: they can\'t divide or repair themselves, so only last about 120 days.',
    tags: ['cells', 'blood', 'specialisation'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp2-003',
    subject: 'biology',
    topic: 'Organisation',
    subtopic: 'Levels',
    difficulty: 'ks3',
    type: 'order',
    question: 'Order these from smallest to largest.',
    correctAnswer: ['Cell', 'Tissue', 'Organ', 'Organ system', 'Organism'],
    explanation: 'Cells → Tissues (groups of similar cells) → Organs (groups of tissues) → Organ systems (groups of organs) → Organism (the whole living thing). Teamwork makes the dream work!',
    tags: ['organisation', 'levels', 'hierarchy'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp2-004',
    subject: 'biology',
    topic: 'Organisation',
    subtopic: 'Digestive System',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is the role of the small intestine?',
    correctAnswer: 'Absorb nutrients into the blood',
    wrongAnswers: [
      'Store food',
      'Break down food with acid',
      'Remove water from waste'
    ],
    explanation: 'The small intestine is covered in villi (finger-like projections) that massively increase surface area. Nutrients pass through into blood vessels. It\'s about 6 metres long!',
    tags: ['digestion', 'absorption', 'intestine'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// REPRODUCTION
// ============================================================================

const ks3Reproduction: Question[] = [
  {
    id: 'bio-ks3-exp2-005',
    subject: 'biology',
    topic: 'Reproduction',
    subtopic: 'Human Reproduction',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Where does fertilisation normally occur in humans?',
    correctAnswer: 'In the fallopian tube (oviduct)',
    wrongAnswers: [
      'In the uterus',
      'In the ovary',
      'In the vagina'
    ],
    explanation: 'Sperm meets egg in the fallopian tube. The fertilised egg then travels to the uterus to implant. If twins implant, you get siblings born at the same time!',
    tags: ['reproduction', 'fertilisation', 'human'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp2-006',
    subject: 'biology',
    topic: 'Reproduction',
    subtopic: 'Plant Reproduction',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is the role of pollen?',
    correctAnswer: 'To carry male sex cells to the female part of a flower',
    wrongAnswers: [
      'To make the flower smell nice',
      'To attract bees for food',
      'To color the flower yellow'
    ],
    explanation: 'Pollen contains male gametes. It needs to reach the stigma (female part) for pollination. Bees, wind, and other agents help transport it. Achoo - hay fever is an allergy to pollen!',
    tags: ['reproduction', 'plants', 'pollination'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp2-007',
    subject: 'biology',
    topic: 'Reproduction',
    subtopic: 'Genetics Basics',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What carries genetic information in cells?',
    correctAnswer: 'DNA in the nucleus',
    wrongAnswers: [
      'Chloroplasts',
      'Cell membrane',
      'Cytoplasm'
    ],
    explanation: 'DNA is like a recipe book for building and running your body. You got half from each parent - that\'s why you might have your mum\'s eyes and dad\'s nose!',
    tags: ['genetics', 'dna', 'inheritance'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// HEALTH AND DISEASE
// ============================================================================

const ks3Health: Question[] = [
  {
    id: 'bio-ks3-exp2-008',
    subject: 'biology',
    topic: 'Health',
    subtopic: 'Nutrition',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match the nutrient to its function.',
    correctAnswer: {
      'Carbohydrates': 'Provide energy',
      'Proteins': 'Growth and repair',
      'Fats': 'Energy storage and insulation',
      'Vitamins': 'Keep body processes working'
    },
    explanation: 'A balanced diet includes all nutrients in the right amounts. Too much of one thing can be as bad as too little. Variety is key!',
    tags: ['nutrition', 'diet', 'nutrients'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp2-009',
    subject: 'biology',
    topic: 'Health',
    subtopic: 'Drugs',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What does "addictive" mean when describing a drug?',
    correctAnswer: 'The body becomes dependent and you need it to feel normal',
    wrongAnswers: [
      'It makes you happy',
      'It\'s illegal',
      'It\'s found in nature'
    ],
    explanation: 'Addiction changes your brain chemistry. Stopping causes withdrawal symptoms. Caffeine, nicotine, and alcohol are all addictive substances - even the legal ones have risks.',
    tags: ['drugs', 'addiction', 'health'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp2-010',
    subject: 'biology',
    topic: 'Health',
    subtopic: 'Disease',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How do white blood cells fight pathogens?',
    correctAnswer: 'By producing antibodies and engulfing pathogens',
    wrongAnswers: [
      'By carrying oxygen to fight them',
      'By making you sneeze',
      'By raising body temperature only'
    ],
    explanation: 'White blood cells are your immune army. Some produce antibodies (chemical weapons), others engulf and digest pathogens (like Pac-Man!). That\'s why cuts heal.',
    tags: ['immunity', 'white-blood-cells', 'pathogens'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp2-011',
    subject: 'biology',
    topic: 'Health',
    subtopic: 'Vaccination',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How do vaccines protect you?',
    correctAnswer: 'They train your immune system to recognise a pathogen',
    wrongAnswers: [
      'They kill all bacteria in your body',
      'They give you the disease to get it over with',
      'They make pathogens weaker'
    ],
    explanation: 'Vaccines contain weakened or dead pathogens. Your body learns to make antibodies without getting sick. If the real pathogen arrives, you\'re ready!',
    tags: ['vaccines', 'immunity', 'prevention'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// ECOSYSTEMS
// ============================================================================

const ks3Ecosystems: Question[] = [
  {
    id: 'bio-ks3-exp2-012',
    subject: 'biology',
    topic: 'Ecosystems',
    subtopic: 'Food Chains',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In a food chain, what do arrows represent?',
    correctAnswer: 'Energy transfer from one organism to another',
    wrongAnswers: [
      'The direction animals move',
      'Which animal is bigger',
      'Time passing'
    ],
    explanation: 'Grass → Rabbit → Fox means energy flows from grass to rabbit to fox. The arrow says "is eaten by" or "energy goes to". Each step loses energy as heat.',
    tags: ['food-chains', 'energy', 'transfer'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp2-013',
    subject: 'biology',
    topic: 'Ecosystems',
    subtopic: 'Producers',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why are plants called producers?',
    correctAnswer: 'They produce their own food through photosynthesis',
    wrongAnswers: [
      'They produce baby plants',
      'They produce oxygen only',
      'They produce soil'
    ],
    explanation: 'Producers make food from sunlight, water, and CO₂. They\'re the foundation of every food chain. Without plants, there would be no food for anything else!',
    tags: ['producers', 'photosynthesis', 'food-chains'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp2-014',
    subject: 'biology',
    topic: 'Ecosystems',
    subtopic: 'Adaptation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'A polar bear has white fur because...',
    correctAnswer: 'It provides camouflage in snow for hunting',
    wrongAnswers: [
      'White absorbs more heat',
      'It\'s the only color available',
      'They like how it looks'
    ],
    explanation: 'Camouflage helps polar bears sneak up on seals. Their black skin underneath absorbs heat, thick fur insulates, and small ears reduce heat loss. Perfect Arctic adaptation!',
    tags: ['adaptation', 'camouflage', 'arctic'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'bio-ks3-exp2-015',
    subject: 'biology',
    topic: 'Ecosystems',
    subtopic: 'Human Impact',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How does deforestation affect ecosystems?',
    correctAnswer: 'Habitats are destroyed and species may become extinct',
    wrongAnswers: [
      'It creates new habitats',
      'Animals move to cities instead',
      'It has no effect on wildlife'
    ],
    explanation: 'Trees provide homes, food, and oxygen. Cut them down and entire communities collapse. Orangutans are critically endangered because of palm oil plantations replacing rainforests.',
    tags: ['human-impact', 'deforestation', 'extinction'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const ks3BiologyTermsExpanded2: TermDefinition[] = [
  {
    id: 'bio-ks3-exp2-term-001',
    subject: 'biology',
    topic: 'Cells',
    difficulty: 'ks3',
    term: 'Diffusion',
    definition: 'The movement of particles from high to low concentration.',
    example: 'Oxygen diffuses from your lungs into your blood.',
    tags: ['cells', 'transport', 'diffusion']
  },
  {
    id: 'bio-ks3-exp2-term-002',
    subject: 'biology',
    topic: 'Health',
    difficulty: 'ks3',
    term: 'Pathogen',
    definition: 'A microorganism that causes disease (bacteria, viruses, fungi).',
    example: 'The flu virus is a pathogen that causes influenza.',
    tags: ['disease', 'microorganisms', 'infection']
  },
  {
    id: 'bio-ks3-exp2-term-003',
    subject: 'biology',
    topic: 'Ecosystems',
    difficulty: 'ks3',
    term: 'Consumer',
    definition: 'An organism that eats other organisms for energy.',
    example: 'Rabbits are primary consumers; foxes are secondary consumers.',
    tags: ['food-chains', 'consumers', 'energy']
  },
  {
    id: 'bio-ks3-exp2-term-004',
    subject: 'biology',
    topic: 'Reproduction',
    difficulty: 'ks3',
    term: 'Gamete',
    definition: 'A sex cell (sperm or egg) containing half the usual chromosomes.',
    example: 'Human gametes have 23 chromosomes; body cells have 46.',
    tags: ['reproduction', 'cells', 'chromosomes']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const ks3BiologyExpanded2: Question[] = [
  ...ks3CellsOrganisation,
  ...ks3Reproduction,
  ...ks3Health,
  ...ks3Ecosystems
];
