/**
 * GCSE Biology Expanded Question Bank
 * Fun-first gamified questions with real-world contexts
 */

import { Question, TermDefinition } from '../types';

// ============================================
// CELLS & ORGANISATION
// ============================================

export const gcseBiologyCells: Question[] = [
  {
    id: 'bio-gcse-exp-cell-001',
    subject: 'biology',
    topic: 'Cells',
    subtopic: 'Cell Structure',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Plant cells have three structures that animal cells don\'t. Which is NOT one of them?',
    correctAnswer: 'Mitochondria',
    wrongAnswers: ['Cell wall', 'Chloroplasts', 'Permanent vacuole'],
    explanation: 'Mitochondria are in BOTH plant and animal cells (they both need energy!). Only plants have cell walls (rigidity), chloroplasts (photosynthesis), and large permanent vacuoles (storage).',
    hint: 'Which one provides energy?',
    tags: ['cells', 'structure', 'comparison'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-cell-002',
    subject: 'biology',
    topic: 'Cells',
    subtopic: 'Microscopy',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'A cell appears 5mm wide under a microscope at ×400 magnification. What is its actual size in micrometres (μm)?',
    correctAnswer: '12.5',
    wrongAnswers: [],
    explanation: 'Actual size = Image size ÷ Magnification = 5mm ÷ 400 = 0.0125mm = 12.5μm. Most cells are 10-100μm!',
    hint: 'Divide image size by magnification, then convert mm to μm (×1000)',
    tags: ['cells', 'microscopy', 'calculation'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-cell-003',
    subject: 'biology',
    topic: 'Cells',
    subtopic: 'Cell Division',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A cell with 46 chromosomes undergoes mitosis. How many chromosomes are in each daughter cell?',
    correctAnswer: '46 - same as the parent cell',
    wrongAnswers: ['23 - half the parent', '92 - double the parent', '0 - they start fresh'],
    explanation: 'Mitosis creates IDENTICAL copies! DNA replicates, chromosomes line up, and the cell splits into two genetically identical cells with 46 chromosomes each.',
    hint: 'Mitosis is for growth and repair - cells need to be identical',
    tags: ['cells', 'mitosis', 'chromosomes'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-cell-004',
    subject: 'biology',
    topic: 'Cells',
    subtopic: 'Stem Cells',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Embryonic stem cells are controversial but scientifically valuable. Why are they more useful than adult stem cells?',
    correctAnswer: 'They can differentiate into ANY type of cell',
    wrongAnswers: ['They divide faster', 'They\'re easier to obtain', 'They live longer'],
    explanation: 'Embryonic stem cells are "pluripotent" - they can become any cell type (nerve, muscle, blood...). Adult stem cells can only become certain types. More potential = more uses!',
    hint: 'Think about what makes embryos special - they\'re building a whole body',
    tags: ['cells', 'stem cells', 'differentiation'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-cell-005',
    subject: 'biology',
    topic: 'Cells',
    subtopic: 'Diffusion',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A drop of food colouring spreads through water. This is diffusion. What drives this process?',
    correctAnswer: 'Random movement of particles from high to low concentration',
    wrongAnswers: ['Gravity pulling particles down', 'Water molecules pushing the dye', 'Chemical attraction to water'],
    explanation: 'Particles move randomly (kinetic energy). In areas of high concentration, particles spread out naturally. No energy required - it\'s passive! This is how oxygen enters cells.',
    hint: 'No energy input needed - particles just naturally spread out',
    tags: ['cells', 'diffusion', 'transport'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-cell-006',
    subject: 'biology',
    topic: 'Cells',
    subtopic: 'Osmosis',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A red blood cell is placed in pure water. What happens and why?',
    correctAnswer: 'It swells and bursts - water moves in by osmosis',
    wrongAnswers: ['It shrinks - water moves out', 'Nothing - it\'s protected', 'It dissolves completely'],
    explanation: 'Pure water has higher water concentration than inside the cell. Water moves INTO the cell by osmosis (down its concentration gradient). Animal cells have no cell wall, so... POP!',
    hint: 'Water moves from dilute to concentrated solution',
    tags: ['cells', 'osmosis', 'practical'],
    yearGroup: [10, 11]
  },

  // ORGANISATION
  {
    id: 'bio-gcse-exp-org-001',
    subject: 'biology',
    topic: 'Organisation',
    subtopic: 'Digestive System',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each digestive enzyme to what it breaks down:',
    correctAnswer: ['Amylase → Starch', 'Protease → Protein', 'Lipase → Fats'],
    wrongAnswers: [],
    explanation: 'Amylase (in saliva and pancreas) breaks starch into sugars. Protease (stomach and pancreas) breaks proteins into amino acids. Lipase (pancreas) breaks fats into fatty acids and glycerol.',
    hint: 'The names often hint at what they do',
    tags: ['digestion', 'enzymes', 'breakdown'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-org-002',
    subject: 'biology',
    topic: 'Organisation',
    subtopic: 'Heart',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The left ventricle has thicker walls than the right ventricle. Why?',
    correctAnswer: 'It pumps blood all around the body, not just to the lungs',
    wrongAnswers: ['It holds more blood', 'It beats faster', 'It\'s older'],
    explanation: 'Right ventricle only pumps blood to nearby lungs (short trip). Left ventricle pumps blood to your toes and everywhere else (long trip). More distance = more pressure needed = thicker muscle!',
    hint: 'Where does each ventricle send blood?',
    tags: ['circulation', 'heart', 'structure'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-org-003',
    subject: 'biology',
    topic: 'Organisation',
    subtopic: 'Blood',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Red blood cells have no nucleus. How does this help their function?',
    correctAnswer: 'More space for haemoglobin to carry oxygen',
    wrongAnswers: ['They can squeeze through capillaries better', 'They last longer without one', 'It makes them red'],
    explanation: 'Red blood cells are basically bags of haemoglobin (oxygen-carrying protein). No nucleus = more room for haemoglobin = more oxygen carried. They\'re optimised delivery vehicles!',
    hint: 'What\'s the main job of red blood cells?',
    tags: ['blood', 'red blood cells', 'adaptation'],
    yearGroup: [10, 11]
  },

  // INFECTION & RESPONSE
  {
    id: 'bio-gcse-exp-inf-001',
    subject: 'biology',
    topic: 'Infection',
    subtopic: 'Pathogens',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each pathogen type to a disease it causes:',
    correctAnswer: ['Bacteria → Salmonella', 'Virus → HIV', 'Fungus → Athlete\'s foot', 'Protist → Malaria'],
    wrongAnswers: [],
    explanation: 'Bacteria: single-celled, can be killed with antibiotics. Viruses: need a host cell, antibiotics don\'t work. Fungi: feed on living things. Protists: mostly single-celled parasites.',
    hint: 'Think about each disease and what causes it',
    tags: ['infection', 'pathogens', 'diseases'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-inf-002',
    subject: 'biology',
    topic: 'Infection',
    subtopic: 'Immune System',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'White blood cells fight infection in three main ways. Which is NOT one of them?',
    correctAnswer: 'Filtering blood through the kidneys',
    wrongAnswers: ['Phagocytosis (engulfing pathogens)', 'Producing antibodies', 'Producing antitoxins'],
    explanation: 'White blood cells: 1) Engulf and digest pathogens 2) Make antibodies that stick to pathogens 3) Make antitoxins that neutralise toxins. Kidneys filter waste, not pathogens!',
    hint: 'Which one isn\'t done by white blood cells?',
    tags: ['infection', 'immune system', 'defence'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-inf-003',
    subject: 'biology',
    topic: 'Infection',
    subtopic: 'Vaccination',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Vaccines contain dead or weakened pathogens. Why don\'t they make you ill?',
    correctAnswer: 'They can\'t reproduce or cause disease, but still trigger an immune response',
    wrongAnswers: ['They\'re too small to cause illness', 'Your body ignores dead things', 'The needle kills them'],
    explanation: 'Your immune system recognises the pathogen\'s antigens and makes antibodies. Memory cells form. Next time that pathogen attacks, your body responds FAST. No illness, full protection!',
    hint: 'What can dead pathogens still have that your body recognises?',
    tags: ['infection', 'vaccination', 'immunity'],
    yearGroup: [10, 11]
  },

  // BIOENERGETICS
  {
    id: 'bio-gcse-exp-bio-001',
    subject: 'biology',
    topic: 'Bioenergetics',
    subtopic: 'Photosynthesis',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Complete the word equation: carbon dioxide + water → glucose + ___',
    correctAnswer: 'oxygen',
    wrongAnswers: ['nitrogen', 'carbon monoxide', 'hydrogen'],
    explanation: 'CO₂ + H₂O → C₆H₁₂O₆ + O₂. Plants take in CO₂ and water, use light energy to make glucose (food), and release oxygen as a by-product. Thanks, plants!',
    hint: 'What gas do plants release that we need to breathe?',
    tags: ['photosynthesis', 'equation', 'products'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-bio-002',
    subject: 'biology',
    topic: 'Bioenergetics',
    subtopic: 'Limiting Factors',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A farmer wants to maximise crop growth in a greenhouse. At night, which factor is MOST limiting?',
    correctAnswer: 'Light intensity',
    wrongAnswers: ['CO₂ concentration', 'Temperature', 'Water availability'],
    explanation: 'No light = no photosynthesis! Light provides the energy for the reaction. Even with perfect CO₂ and temperature, plants can\'t photosynthesise in darkness.',
    hint: 'Photosynthesis needs light energy...',
    tags: ['photosynthesis', 'limiting factors', 'practical'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-bio-003',
    subject: 'biology',
    topic: 'Bioenergetics',
    subtopic: 'Respiration',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Aerobic respiration releases 38 ATP per glucose. Anaerobic respiration releases...',
    correctAnswer: '2 ATP per glucose',
    wrongAnswers: ['38 ATP', '76 ATP', '0 ATP'],
    explanation: 'Without oxygen, glucose isn\'t fully broken down. Anaerobic only releases 2 ATP - that\'s why you get tired quickly during sprinting! Oxygen debt builds up.',
    hint: 'Anaerobic is much less efficient',
    tags: ['respiration', 'aerobic', 'anaerobic'],
    yearGroup: [10, 11]
  },

  // HOMEOSTASIS
  {
    id: 'bio-gcse-exp-homeo-001',
    subject: 'biology',
    topic: 'Homeostasis',
    subtopic: 'Blood Glucose',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'After eating a big meal, blood glucose rises. What does the pancreas release to lower it?',
    correctAnswer: 'Insulin',
    wrongAnswers: ['Glucagon', 'Adrenaline', 'Bile'],
    explanation: 'Insulin tells cells to absorb glucose from blood. It also tells the liver to convert glucose to glycogen for storage. Blood glucose drops. Diabetes occurs when this system fails!',
    hint: 'People with diabetes often need to inject this hormone',
    tags: ['homeostasis', 'glucose', 'hormones'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-homeo-002',
    subject: 'biology',
    topic: 'Homeostasis',
    subtopic: 'Nervous System',
    difficulty: 'gcse',
    type: 'order',
    question: 'Put these in order for a reflex arc (touching a hot object):',
    correctAnswer: ['Receptor detects stimulus', 'Sensory neurone carries impulse', 'Relay neurone in spinal cord', 'Motor neurone activates effector', 'Muscle contracts (response)'],
    wrongAnswers: [],
    explanation: 'Reflex arcs are automatic and fast - they don\'t involve the brain! The signal goes: receptor → sensory neurone → relay neurone → motor neurone → effector. All in milliseconds!',
    hint: 'Starts with detecting, ends with responding',
    tags: ['homeostasis', 'reflexes', 'nervous system'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-homeo-003',
    subject: 'biology',
    topic: 'Homeostasis',
    subtopic: 'Thermoregulation',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'When you\'re cold, blood vessels in your skin constrict (vasoconstriction). Why does this help?',
    correctAnswer: 'Less blood flows near the surface, reducing heat loss to the environment',
    wrongAnswers: ['It creates friction to generate heat', 'It traps more air in the skin', 'It makes you shiver'],
    explanation: 'Blood carries heat. Vasoconstriction sends blood deeper, away from the cold surface. Less heat radiates away. That\'s why you look pale when cold - less blood near skin surface!',
    hint: 'Where does body heat escape from?',
    tags: ['homeostasis', 'temperature', 'blood vessels'],
    yearGroup: [10, 11]
  },

  // GENETICS & EVOLUTION
  {
    id: 'bio-gcse-exp-gen-001',
    subject: 'biology',
    topic: 'Genetics',
    subtopic: 'DNA',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'DNA bases pair specifically: A with T, C with G. What type of bonds hold the bases together?',
    correctAnswer: 'Hydrogen bonds',
    wrongAnswers: ['Ionic bonds', 'Covalent bonds', 'Metallic bonds'],
    explanation: 'Hydrogen bonds are weak individually but there are millions of them! This allows DNA to unzip for replication and transcription, then zip back up. Perfect balance of stability and accessibility.',
    hint: 'They need to be weak enough to separate during replication',
    tags: ['genetics', 'DNA', 'structure'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-gen-002',
    subject: 'biology',
    topic: 'Genetics',
    subtopic: 'Inheritance',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In a Punnett square cross between Bb × Bb, what percentage of offspring would be bb?',
    correctAnswer: '25%',
    wrongAnswers: ['50%', '75%', '0%'],
    explanation: 'Cross Bb × Bb: BB (25%), Bb (25%), Bb (25%), bb (25%). Only bb shows the recessive phenotype. Classic 3:1 ratio of dominant to recessive!',
    hint: 'Draw out the Punnett square: B and b from each parent',
    tags: ['genetics', 'inheritance', 'Punnett'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-gen-003',
    subject: 'biology',
    topic: 'Genetics',
    subtopic: 'Evolution',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Darwin\'s theory of natural selection can be summarised as "survival of the fittest." What does "fittest" really mean?',
    correctAnswer: 'Best adapted to survive and reproduce in that environment',
    wrongAnswers: ['Physically strongest', 'Most intelligent', 'Largest'],
    explanation: 'Fitness = reproductive success! A camouflaged moth that avoids predators is "fitter" than a strong one that gets eaten. It\'s about passing on genes, not winning arm wrestles.',
    hint: 'Evolution is about genes being passed on...',
    tags: ['genetics', 'evolution', 'natural selection'],
    yearGroup: [10, 11]
  },

  // ECOLOGY
  {
    id: 'bio-gcse-exp-eco-001',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Sampling',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'To estimate dandelion population in a field, you use quadrats. Why must quadrat placement be RANDOM?',
    correctAnswer: 'To avoid bias and make results representative',
    wrongAnswers: ['Quadrats work better in random places', 'Dandelions only grow randomly', 'It\'s faster'],
    explanation: 'If you choose where to place quadrats, you might (consciously or not) pick areas with lots/few dandelions. Random placement means your sample represents the whole field fairly!',
    hint: 'What could go wrong if you chose the "best" spots?',
    tags: ['ecology', 'sampling', 'methods'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-eco-002',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Carbon Cycle',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How does carbon move from the atmosphere INTO living organisms?',
    correctAnswer: 'Photosynthesis - plants absorb CO₂',
    wrongAnswers: ['Respiration releases CO₂ into organisms', 'Animals breathe in CO₂', 'Rain dissolves CO₂ into organisms'],
    explanation: 'Plants are the entry point! They absorb CO₂ and convert it to glucose (organic carbon). Animals then eat plants, passing carbon along food chains. It\'s all thanks to photosynthesis.',
    hint: 'Which process removes CO₂ from the air?',
    tags: ['ecology', 'carbon cycle', 'processes'],
    yearGroup: [10, 11]
  },
  {
    id: 'bio-gcse-exp-eco-003',
    subject: 'biology',
    topic: 'Ecology',
    subtopic: 'Biodiversity',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Pesticides killed many birds of prey in the 1960s through bioaccumulation. What is bioaccumulation?',
    correctAnswer: 'Toxins build up in organisms and increase at higher trophic levels',
    wrongAnswers: ['Pesticides make organisms reproduce faster', 'Birds ate too many crops', 'Chemicals break down into new toxins'],
    explanation: 'DDT built up in insects → concentrated in small birds that ate many insects → VERY concentrated in birds of prey that ate many small birds. Top predators got lethal doses.',
    hint: 'Think about what happens as you go up the food chain',
    tags: ['ecology', 'bioaccumulation', 'food chains'],
    yearGroup: [10, 11]
  },
];

// ============================================
// GCSE BIOLOGY TERMS
// ============================================

export const gcseBiologyTermsExpanded: TermDefinition[] = [
  {
    id: 'bio-gcse-term-exp-001',
    subject: 'biology',
    term: 'Differentiation',
    definition: 'When a cell becomes specialised for a particular function - stem cells do this to become nerve, muscle, blood cells etc.',
    difficulty: 'gcse',
    relatedTerms: ['stem cells', 'specialisation', 'mitosis']
  },
  {
    id: 'bio-gcse-term-exp-002',
    subject: 'biology',
    term: 'Active transport',
    definition: 'Moving substances against their concentration gradient using energy from respiration - opposite direction to diffusion',
    difficulty: 'gcse',
    relatedTerms: ['diffusion', 'osmosis', 'ATP']
  },
  {
    id: 'bio-gcse-term-exp-003',
    subject: 'biology',
    term: 'Antibody',
    definition: 'Y-shaped proteins made by white blood cells that bind to specific antigens on pathogens, marking them for destruction',
    difficulty: 'gcse',
    relatedTerms: ['antigen', 'immune system', 'vaccination']
  },
  {
    id: 'bio-gcse-term-exp-004',
    subject: 'biology',
    term: 'Limiting factor',
    definition: 'The factor in shortest supply that prevents a process going faster - for photosynthesis: light, CO₂, or temperature',
    difficulty: 'gcse',
    relatedTerms: ['photosynthesis', 'rate', 'variables']
  },
  {
    id: 'bio-gcse-term-exp-005',
    subject: 'biology',
    term: 'Negative feedback',
    definition: 'Control mechanism where a change triggers a response that reverses the change - keeps conditions stable',
    difficulty: 'gcse',
    relatedTerms: ['homeostasis', 'regulation', 'hormones']
  },
  {
    id: 'bio-gcse-term-exp-006',
    subject: 'biology',
    term: 'Allele',
    definition: 'Different versions of the same gene - you inherit one allele from each parent for each gene',
    difficulty: 'gcse',
    relatedTerms: ['gene', 'dominant', 'recessive']
  },
  {
    id: 'bio-gcse-term-exp-007',
    subject: 'biology',
    term: 'Phenotype',
    definition: 'The physical characteristics of an organism that result from its genotype and environment',
    difficulty: 'gcse',
    relatedTerms: ['genotype', 'alleles', 'expression']
  },
  {
    id: 'bio-gcse-term-exp-008',
    subject: 'biology',
    term: 'Trophic level',
    definition: 'The position of an organism in a food chain - producers are level 1, primary consumers level 2, etc.',
    difficulty: 'gcse',
    relatedTerms: ['food chain', 'pyramid', 'energy transfer']
  },
];

// Combined export
export const gcseBiologyExpanded = [...gcseBiologyCells];
