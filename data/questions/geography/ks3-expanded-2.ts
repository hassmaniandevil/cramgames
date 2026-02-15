/**
 * KS3 Geography Expanded Part 2
 * Fun-first geography for Years 7-9
 */

import { Question, TermDefinition } from '../types';

// ============================================================================
// MAPS AND SKILLS
// ============================================================================

const ks3MapsSkills: Question[] = [
  {
    id: 'geog-ks3-exp2-001',
    subject: 'geography',
    topic: 'Map Skills',
    subtopic: 'Grid References',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In a six-figure grid reference, what does the third digit tell you?',
    correctAnswer: 'Tenths across the square (more precise easting)',
    wrongAnswers: [
      'The map scale',
      'The elevation',
      'The north direction'
    ],
    explanation: 'Four-figure = square, six-figure = precise point. 456 789 means go to square 45 78, then 6/10 across and 9/10 up. Like GPS before smartphones!',
    tags: ['maps', 'grid-references', 'skills'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geog-ks3-exp2-002',
    subject: 'geography',
    topic: 'Map Skills',
    subtopic: 'Scale',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'On a 1:50,000 map, 1 cm represents...',
    correctAnswer: '500 metres (or 0.5 km)',
    wrongAnswers: [
      '50 metres',
      '5 km',
      '50 km'
    ],
    explanation: '1:50,000 means 1 cm on map = 50,000 cm in real life = 500 m. The bigger the second number, the smaller features appear. 1:25,000 shows more detail than 1:50,000.',
    tags: ['maps', 'scale', 'measurement'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geog-ks3-exp2-003',
    subject: 'geography',
    topic: 'Map Skills',
    subtopic: 'Contour Lines',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'On a map, very close contour lines indicate...',
    correctAnswer: 'A steep slope',
    wrongAnswers: [
      'Flat ground',
      'Deep water',
      'A forest'
    ],
    explanation: 'Contour lines join points of equal height. Close together = height changes quickly = steep. Far apart = height changes slowly = gentle slope. Cliff? Lines almost touching!',
    tags: ['maps', 'contours', 'relief'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// WEATHER AND CLIMATE
// ============================================================================

const ks3Weather: Question[] = [
  {
    id: 'geog-ks3-exp2-004',
    subject: 'geography',
    topic: 'Weather',
    subtopic: 'UK Weather',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why does the west of Britain get more rain than the east?',
    correctAnswer: 'Prevailing winds bring moist air from the Atlantic; mountains cause it to rise and rain',
    wrongAnswers: [
      'The east is protected by a rain shield',
      'People in the west water their gardens more',
      'The sun shines more in the east'
    ],
    explanation: 'Relief rainfall! Moist Atlantic air hits mountains in Wales and Scotland, rises, cools, and dumps rain. By the time it reaches the east, it\'s already dry. That\'s why East Anglia farms!',
    tags: ['weather', 'rainfall', 'uk'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geog-ks3-exp2-005',
    subject: 'geography',
    topic: 'Weather',
    subtopic: 'Water Cycle',
    difficulty: 'ks3',
    type: 'order',
    question: 'Order the stages of the water cycle.',
    correctAnswer: ['Evaporation', 'Condensation', 'Precipitation', 'Collection'],
    explanation: 'Sun heats water (evaporation) → water vapor rises and cools (condensation into clouds) → falls as rain/snow (precipitation) → collects in rivers/oceans. Repeat forever!',
    tags: ['weather', 'water-cycle', 'processes'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geog-ks3-exp2-006',
    subject: 'geography',
    topic: 'Climate',
    subtopic: 'Climate Zones',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why are tropical rainforests hot all year round?',
    correctAnswer: 'They\'re near the equator where the sun is always high in the sky',
    wrongAnswers: [
      'The trees generate heat',
      'They have more volcanoes',
      'They\'re at sea level'
    ],
    explanation: 'The equator gets direct sunlight year-round. No seasons, always warm. Go further from the equator, the sun\'s angle decreases, seasons appear, and it gets colder.',
    tags: ['climate', 'tropical', 'equator'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// RIVERS
// ============================================================================

const ks3Rivers: Question[] = [
  {
    id: 'geog-ks3-exp2-007',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'River Features',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How does a meander form?',
    correctAnswer: 'Faster flow on the outside erodes, slower flow on inside deposits',
    wrongAnswers: [
      'Fish push the water sideways',
      'The river gets tired and wobbles',
      'Humans dig them'
    ],
    explanation: 'Water flows faster on the outside of bends (erosion = river cliff) and slower on the inside (deposition = slip-off slope). Over time, the bend gets bigger. Eventually it might cut off to form an oxbow lake!',
    tags: ['rivers', 'meanders', 'erosion'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geog-ks3-exp2-008',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Flooding',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which of these increases flood risk?',
    correctAnswer: 'Deforestation and building on floodplains',
    wrongAnswers: [
      'Planting more trees',
      'Building flood walls',
      'Using permeable surfaces'
    ],
    explanation: 'Trees absorb water; removing them means more runoff. Building on floodplains puts people in harm\'s way AND increases runoff (concrete doesn\'t absorb water). Bad combo!',
    tags: ['rivers', 'flooding', 'human-impact'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// POPULATION AND SETTLEMENT
// ============================================================================

const ks3Population: Question[] = [
  {
    id: 'geog-ks3-exp2-009',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Distribution',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why is population density high in river valleys?',
    correctAnswer: 'Flat land for farming and building, plus water supply',
    wrongAnswers: [
      'People like swimming',
      'Rivers are warmer',
      'Fish provide all food'
    ],
    explanation: 'River valleys offer: flat fertile land, water for drinking/farming/transport, fish, and natural defense. That\'s why ancient civilizations started near rivers (Nile, Tigris, Indus).',
    tags: ['population', 'distribution', 'settlement'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geog-ks3-exp2-010',
    subject: 'geography',
    topic: 'Settlement',
    subtopic: 'Functions',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is a market town?',
    correctAnswer: 'A settlement that grew because it hosted regular markets',
    wrongAnswers: [
      'A town that only sells supermarkets',
      'A capital city',
      'A town with no shops'
    ],
    explanation: 'Medieval markets needed a central location. Towns like Market Harborough grew as trading hubs. The name tells you the function - functional names everywhere in UK geography!',
    tags: ['settlement', 'function', 'history'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geog-ks3-exp2-011',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Migration',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is a "pull factor" in migration?',
    correctAnswer: 'Something that attracts people TO a place (like jobs or safety)',
    wrongAnswers: [
      'Something that pushes people away',
      'A rope used for moving',
      'Gravity'
    ],
    explanation: 'Push = why people leave (war, poverty). Pull = why they go somewhere (jobs, family, freedom). Most migration involves both. Understanding this helps explain global movement patterns.',
    tags: ['population', 'migration', 'factors'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// ENVIRONMENT
// ============================================================================

const ks3Environment: Question[] = [
  {
    id: 'geog-ks3-exp2-012',
    subject: 'geography',
    topic: 'Environment',
    subtopic: 'Climate Change',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why does burning fossil fuels contribute to climate change?',
    correctAnswer: 'It releases CO₂ which traps heat in the atmosphere',
    wrongAnswers: [
      'It creates holes in the atmosphere',
      'It makes the sun hotter',
      'It removes oxygen'
    ],
    explanation: 'CO₂ is a greenhouse gas - it lets sunlight in but traps heat from escaping. More CO₂ = more trapped heat = warmer planet. We\'ve increased CO₂ by 50% since pre-industrial times.',
    tags: ['climate-change', 'greenhouse-gases', 'fossil-fuels'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geog-ks3-exp2-013',
    subject: 'geography',
    topic: 'Environment',
    subtopic: 'Sustainability',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What does "sustainable development" mean?',
    correctAnswer: 'Meeting today\'s needs without damaging future generations\' ability to meet theirs',
    wrongAnswers: [
      'Never building anything',
      'Only using old technology',
      'Making everything from wood'
    ],
    explanation: 'Sustainability = balance. Use resources, but ensure they last. Recycle, use renewable energy, protect ecosystems. It\'s about being fair to people who aren\'t born yet!',
    tags: ['sustainability', 'development', 'future'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geog-ks3-exp2-014',
    subject: 'geography',
    topic: 'Environment',
    subtopic: 'Resources',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which energy source is renewable?',
    correctAnswer: 'Solar power',
    wrongAnswers: [
      'Coal',
      'Oil',
      'Natural gas'
    ],
    explanation: 'Renewable = won\'t run out (sun, wind, water). Fossil fuels took millions of years to form - once burned, they\'re gone. The sun will keep shining for 5 billion years!',
    tags: ['resources', 'energy', 'renewable'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const ks3GeographyTermsExpanded2: TermDefinition[] = [
  {
    id: 'geog-ks3-exp2-term-001',
    subject: 'geography',
    topic: 'Maps',
    difficulty: 'ks3',
    term: 'Easting',
    definition: 'The first part of a grid reference, reading left to right (along the corridor).',
    example: 'In grid reference 456 789, the easting is 456.',
    tags: ['maps', 'grid-references']
  },
  {
    id: 'geog-ks3-exp2-term-002',
    subject: 'geography',
    topic: 'Rivers',
    difficulty: 'ks3',
    term: 'Floodplain',
    definition: 'Flat area of land on either side of a river that floods regularly.',
    example: 'Floodplains have fertile soil deposited by floods.',
    tags: ['rivers', 'flooding', 'landforms']
  },
  {
    id: 'geog-ks3-exp2-term-003',
    subject: 'geography',
    topic: 'Population',
    difficulty: 'ks3',
    term: 'Population Density',
    definition: 'The number of people living per square kilometre.',
    example: 'Bangladesh has high population density; Australia has low.',
    tags: ['population', 'distribution']
  },
  {
    id: 'geog-ks3-exp2-term-004',
    subject: 'geography',
    topic: 'Environment',
    difficulty: 'ks3',
    term: 'Carbon Footprint',
    definition: 'The total CO₂ emissions caused by a person, event, or organization.',
    example: 'Flying creates a larger carbon footprint than taking the train.',
    tags: ['climate-change', 'emissions']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const ks3GeographyExpanded2: Question[] = [
  ...ks3MapsSkills,
  ...ks3Weather,
  ...ks3Rivers,
  ...ks3Population,
  ...ks3Environment
];
