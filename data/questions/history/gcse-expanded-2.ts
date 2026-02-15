/**
 * GCSE History Expanded Part 2
 * Additional questions for Medicine, Germany, Cold War, and Elizabethan England
 */

import { Question, TermDefinition, TimelineEvent } from '../types';

// ============================================================================
// MEDICINE THROUGH TIME - ADVANCED
// ============================================================================

const gcseMedicineAdvanced: Question[] = [
  {
    id: 'hist-gcse-exp2-001',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Medieval Medicine',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why did the Church support Galen\'s ideas for so long?',
    correctAnswer: 'Galen\'s idea of a "Creator" designing the body fitted Christian beliefs',
    wrongAnswers: [
      'The Church owned all hospitals',
      'Galen was a Christian saint',
      'Dissection was encouraged by the Pope'
    ],
    explanation: 'Galen said anatomy showed the work of a divine Creator - perfect match for Christian doctrine. The Church controlled education and banned contradicting ancient texts. Religion + science = complicated!',
    tags: ['medieval', 'galen', 'church'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp2-002',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Renaissance Medicine',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How did the printing press impact medical knowledge?',
    correctAnswer: 'Ideas could spread faster and more accurately than copying by hand',
    wrongAnswers: [
      'It caused more diseases',
      'Only doctors could use it',
      'It had no medical impact'
    ],
    explanation: 'Before printing, each copy introduced errors. Vesalius\'s detailed anatomical drawings could now be mass-produced identically. Knowledge went from local to international.',
    tags: ['renaissance', 'printing', 'communication'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp2-003',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Industrial Revolution',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why did cholera spread rapidly in industrial cities?',
    correctAnswer: 'Overcrowding, contaminated water supplies, and lack of sewerage',
    wrongAnswers: [
      'Too much fresh air',
      'Wealthy people spreading it',
      'New machines caused it'
    ],
    explanation: 'Industrial cities grew faster than infrastructure. Cesspools overflowed into drinking water. The link to contaminated water wasn\'t proven until John Snow\'s 1854 investigation.',
    tags: ['industrial', 'cholera', 'public-health'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp2-004',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Modern Medicine',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What problem did Fleming\'s discovery of penicillin initially face?',
    correctAnswer: 'It couldn\'t be produced in large enough quantities',
    wrongAnswers: [
      'It didn\'t work on any bacteria',
      'No one believed Fleming',
      'It was too expensive to study'
    ],
    explanation: 'Fleming discovered penicillin in 1928 but couldn\'t mass-produce it. Florey and Chain solved this during WWII with American help - war drove medical innovation.',
    tags: ['modern', 'penicillin', 'antibiotics'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// WEIMAR AND NAZI GERMANY - ADVANCED
// ============================================================================

const gcseGermanyAdvanced: Question[] = [
  {
    id: 'hist-gcse-exp2-005',
    subject: 'history',
    topic: 'Weimar and Nazi Germany',
    subtopic: 'Weimar Republic',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why was proportional representation problematic for Weimar Germany?',
    correctAnswer: 'It created coalition governments that struggled to make decisions',
    wrongAnswers: [
      'It gave the President too much power',
      'Only one party ever won elections',
      'It was illegal under the constitution'
    ],
    explanation: 'PR meant many small parties entered the Reichstag. Coalitions were necessary but unstable - they collapsed frequently. This made Weimar look weak and ineffective.',
    tags: ['weimar', 'constitution', 'politics'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp2-006',
    subject: 'history',
    topic: 'Weimar and Nazi Germany',
    subtopic: 'Nazi Rise',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How did the Depression help Hitler?',
    correctAnswer: 'Unemployment made people desperate for radical solutions',
    wrongAnswers: [
      'It made Nazis rich',
      'There was no Depression in Germany',
      'It happened after Hitler took power'
    ],
    explanation: 'By 1932, 6 million Germans were unemployed. Mainstream parties seemed helpless. Hitler promised jobs, bread, and national renewal - extremism thrives on economic despair.',
    tags: ['nazi-rise', 'depression', 'economy'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp2-007',
    subject: 'history',
    topic: 'Weimar and Nazi Germany',
    subtopic: 'Nazi Control',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the Night of the Long Knives?',
    correctAnswer: 'The purge of SA leaders including Röhm in June 1934',
    wrongAnswers: [
      'Kristallnacht against Jews',
      'The murder of Hindenburg',
      'A military attack on France'
    ],
    explanation: 'Hitler eliminated SA leaders who threatened his power and alarmed the army. Killing his own supporters showed ruthlessness - and won army loyalty for the August oath.',
    tags: ['nazi-control', 'sa', 'consolidation'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp2-008',
    subject: 'history',
    topic: 'Weimar and Nazi Germany',
    subtopic: 'Life in Nazi Germany',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the "Strength Through Joy" programme?',
    correctAnswer: 'A leisure organisation offering workers holidays and activities',
    wrongAnswers: [
      'Military training for youth',
      'A religious movement',
      'Punishment for criminals'
    ],
    explanation: 'KdF (Kraft durch Freude) organised cruises, theatre, and sports for workers. It boosted morale AND controlled leisure time - "happy workers don\'t rebel."',
    tags: ['nazi-life', 'workers', 'propaganda'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// COLD WAR - ADVANCED
// ============================================================================

const gcseColdWarAdvanced: Question[] = [
  {
    id: 'hist-gcse-exp2-009',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Origins',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the Iron Curtain?',
    correctAnswer: 'The ideological and physical division between East and West Europe',
    wrongAnswers: [
      'An actual metal curtain built by Stalin',
      'The Berlin Wall only',
      'A type of Soviet weapon'
    ],
    explanation: 'Churchill\'s 1946 speech used "Iron Curtain" metaphorically - communist Eastern Europe was sealed off from the capitalist West. The term captured Cold War division perfectly.',
    tags: ['cold-war', 'origins', 'division'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp2-010',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Cuban Missile Crisis',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why did the Cuban Missile Crisis nearly cause nuclear war?',
    correctAnswer: 'Soviet missiles in Cuba could reach most US cities in minutes',
    wrongAnswers: [
      'Cuba invaded the USA',
      'The missiles were already launched',
      'Kennedy wanted war with USSR'
    ],
    explanation: 'For 13 days in October 1962, the world held its breath. The missiles gave Soviets first-strike capability. Both sides had to find a way out without losing face.',
    tags: ['cold-war', 'cuban-crisis', 'nuclear'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp2-011',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Detente',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was SALT I?',
    correctAnswer: 'A treaty limiting strategic nuclear weapons between USA and USSR',
    wrongAnswers: [
      'A trade agreement',
      'A secret CIA operation',
      'The Soviet space programme'
    ],
    explanation: 'Strategic Arms Limitation Talks (1972) froze missile numbers. Neither side could win an arms race - MAD (Mutual Assured Destruction) meant both would lose. Better to negotiate.',
    tags: ['cold-war', 'detente', 'arms-control'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp2-012',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'End of Cold War',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What did Gorbachev\'s "glasnost" mean?',
    correctAnswer: 'Openness - allowing more freedom of speech and information',
    wrongAnswers: [
      'Military strength',
      'Economic isolation',
      'Stricter censorship'
    ],
    explanation: 'Glasnost let people criticize the government - previously unthinkable in the USSR. Combined with perestroika (restructuring), it accidentally unleashed forces that collapsed the Soviet Union.',
    tags: ['cold-war', 'gorbachev', 'reform'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// ELIZABETHAN ENGLAND - ADVANCED
// ============================================================================

const gcseElizabethanAdvanced: Question[] = [
  {
    id: 'hist-gcse-exp2-013',
    subject: 'history',
    topic: 'Elizabethan England',
    subtopic: 'Religion',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the Religious Settlement of 1559?',
    correctAnswer: 'Elizabeth\'s compromise establishing a Protestant Church with some Catholic elements',
    wrongAnswers: [
      'A complete return to Catholicism',
      'Total ban on all religion',
      'Forcing everyone to become Puritan'
    ],
    explanation: 'The "Middle Way" - Protestant doctrine but with bishops, vestments, and ceremony. Elizabeth wanted to avoid extremes. It satisfied most, but angered Catholics AND Puritans.',
    tags: ['elizabethan', 'religion', 'settlement'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp2-014',
    subject: 'history',
    topic: 'Elizabethan England',
    subtopic: 'Mary Queen of Scots',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why was Mary Queen of Scots a threat to Elizabeth?',
    correctAnswer: 'She had a claim to the English throne and was Catholic',
    wrongAnswers: [
      'She had a larger army',
      'She was Elizabeth\'s daughter',
      'She controlled England\'s navy'
    ],
    explanation: 'Mary was next in line after Elizabeth and represented Catholic hopes. Multiple plots centered on her. Elizabeth delayed execution for 19 years - killing a fellow queen was unprecedented.',
    tags: ['elizabethan', 'mary', 'threat'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp2-015',
    subject: 'history',
    topic: 'Elizabethan England',
    subtopic: 'Spanish Armada',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What factors contributed to the Armada\'s defeat in 1588?',
    correctAnswer: 'English ships, fireships at Calais, and severe storms',
    wrongAnswers: [
      'Spanish ships were too fast',
      'England had more soldiers',
      'France attacked Spain'
    ],
    explanation: 'English ships were smaller but more maneuverable. Fireships scattered the Spanish at Calais. Storms wrecked many ships fleeing around Scotland. "God blew and they were scattered."',
    tags: ['elizabethan', 'armada', 'spain'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp2-016',
    subject: 'history',
    topic: 'Elizabethan England',
    subtopic: 'Society',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why did poverty increase during Elizabeth\'s reign?',
    correctAnswer: 'Population growth, enclosure, rising prices, and harvest failures',
    wrongAnswers: [
      'Elizabeth taxed the poor heavily',
      'Everyone became farmers',
      'There was no poverty in Elizabethan England'
    ],
    explanation: 'Population doubled, prices rose faster than wages, enclosure displaced farmers, and bad harvests caused famine. The Poor Laws tried to distinguish "deserving" from "undeserving" poor.',
    tags: ['elizabethan', 'poverty', 'society'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const gcseHistoryTermsExpanded2: TermDefinition[] = [
  {
    id: 'hist-gcse-exp2-term-001',
    subject: 'history',
    topic: 'Medicine',
    difficulty: 'gcse',
    term: 'Miasma',
    definition: 'The theory that disease was caused by bad air or smells from rotting matter.',
    example: 'The Great Stink of 1858 was blamed for disease - actually it was water.',
    tags: ['medicine', 'theory', 'disease']
  },
  {
    id: 'hist-gcse-exp2-term-002',
    subject: 'history',
    topic: 'Germany',
    difficulty: 'gcse',
    term: 'Gleichschaltung',
    definition: 'Nazi policy of "coordination" - bringing all aspects of life under Nazi control.',
    example: 'Trade unions were replaced with the German Labour Front.',
    tags: ['nazi', 'control', 'totalitarian']
  },
  {
    id: 'hist-gcse-exp2-term-003',
    subject: 'history',
    topic: 'Cold War',
    difficulty: 'gcse',
    term: 'MAD (Mutual Assured Destruction)',
    definition: 'The doctrine that nuclear war would destroy both sides, deterring either from attacking.',
    example: 'By the 1960s, both superpowers had enough weapons to destroy each other multiple times.',
    tags: ['cold-war', 'nuclear', 'deterrence']
  },
  {
    id: 'hist-gcse-exp2-term-004',
    subject: 'history',
    topic: 'Elizabethan',
    difficulty: 'gcse',
    term: 'Recusancy',
    definition: 'Refusal to attend Church of England services, particularly by Catholics.',
    example: 'Recusants faced fines of £20 per month - a huge sum.',
    tags: ['elizabethan', 'religion', 'catholics']
  }
];

// ============================================================================
// TIMELINE
// ============================================================================

export const gcseHistoryTimelineExpanded2: TimelineEvent[] = [
  {
    id: 'hist-gcse-exp2-time-001',
    subject: 'history',
    year: 1854,
    event: 'John Snow proves cholera spreads through water (Broad Street pump)',
    significance: 'Challenged miasma theory, led to improved water supply',
    topic: 'Medicine Through Time',
    difficulty: 'gcse',
    tags: ['medicine', 'cholera', 'public-health']
  },
  {
    id: 'hist-gcse-exp2-time-002',
    subject: 'history',
    year: 1933,
    event: 'Hitler appointed Chancellor of Germany',
    significance: 'Beginning of Nazi dictatorship and path to WWII',
    topic: 'Weimar and Nazi Germany',
    difficulty: 'gcse',
    tags: ['nazi', 'hitler', 'power']
  },
  {
    id: 'hist-gcse-exp2-time-003',
    subject: 'history',
    year: 1961,
    event: 'Berlin Wall constructed',
    significance: 'Physical symbol of Iron Curtain, prevented East Germans fleeing',
    topic: 'Cold War',
    difficulty: 'gcse',
    tags: ['cold-war', 'berlin', 'division']
  },
  {
    id: 'hist-gcse-exp2-time-004',
    subject: 'history',
    year: 1587,
    event: 'Execution of Mary Queen of Scots',
    significance: 'Removed Catholic threat but angered Spain and triggered Armada',
    topic: 'Elizabethan England',
    difficulty: 'gcse',
    tags: ['elizabethan', 'mary', 'execution']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const gcseHistoryExpanded2: Question[] = [
  ...gcseMedicineAdvanced,
  ...gcseGermanyAdvanced,
  ...gcseColdWarAdvanced,
  ...gcseElizabethanAdvanced
];
