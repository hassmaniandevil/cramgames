/**
 * GCSE Geography Expanded Part 2
 * Additional questions for physical and human geography
 */

import { Question, TermDefinition } from '../types';

// ============================================================================
// TECTONIC HAZARDS
// ============================================================================

const gcseTectonics: Question[] = [
  {
    id: 'geog-gcse-exp2-001',
    subject: 'geography',
    topic: 'Natural Hazards',
    subtopic: 'Tectonic Hazards',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What type of plate boundary is found at the San Andreas Fault?',
    correctAnswer: 'Conservative (transform)',
    wrongAnswers: [
      'Constructive (divergent)',
      'Destructive (convergent)',
      'Collision'
    ],
    explanation: 'At the San Andreas Fault, the Pacific and North American plates slide past each other. No crust is created or destroyed, but the friction causes earthquakes. The "Big One" is coming...',
    tags: ['tectonics', 'plate-boundaries', 'earthquakes'],
    yearGroup: [10, 11]
  },
  {
    id: 'geog-gcse-exp2-002',
    subject: 'geography',
    topic: 'Natural Hazards',
    subtopic: 'Tectonic Hazards',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why do earthquakes in HICs often cause fewer deaths than in LICs?',
    correctAnswer: 'Better building codes, emergency services, and preparedness',
    wrongAnswers: [
      'HICs have fewer earthquakes',
      'HIC earthquakes are weaker',
      'LIC people panic more'
    ],
    explanation: 'Japan survives earthquakes that devastate Haiti. It\'s not the hazard alone - it\'s vulnerability. Wealth allows earthquake-resistant buildings, early warning systems, and trained responders.',
    tags: ['tectonics', 'development', 'impacts'],
    yearGroup: [10, 11]
  },
  {
    id: 'geog-gcse-exp2-003',
    subject: 'geography',
    topic: 'Natural Hazards',
    subtopic: 'Volcanic Hazards',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a lahar?',
    correctAnswer: 'A volcanic mudflow of ash, rock, and water',
    wrongAnswers: [
      'A type of lava',
      'A volcanic gas cloud',
      'An underwater volcano'
    ],
    explanation: 'Lahars are deadly because they\'re fast, heavy, and travel far from the volcano. When Nevado del Ruiz erupted in 1985, lahars buried the town of Armero, killing 23,000 people.',
    tags: ['volcanoes', 'hazards', 'secondary'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// WEATHER HAZARDS
// ============================================================================

const gcseWeatherHazards: Question[] = [
  {
    id: 'geog-gcse-exp2-004',
    subject: 'geography',
    topic: 'Natural Hazards',
    subtopic: 'Weather Hazards',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What conditions are needed for a tropical storm to form?',
    correctAnswer: 'Warm ocean water (26°C+), low wind shear, distance from equator',
    wrongAnswers: [
      'Cold ocean water and high pressure',
      'Any temperature near mountains',
      'Only during winter months'
    ],
    explanation: 'Tropical storms are heat engines - warm water (26°C+) provides energy through evaporation. They form 5-20° from the equator (Coriolis effect needed) and dissipate over land or cold water.',
    tags: ['weather', 'tropical-storms', 'formation'],
    yearGroup: [10, 11]
  },
  {
    id: 'geog-gcse-exp2-005',
    subject: 'geography',
    topic: 'Natural Hazards',
    subtopic: 'Weather Hazards',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How is climate change affecting tropical storm frequency and intensity?',
    correctAnswer: 'Warmer oceans may fuel more intense storms',
    wrongAnswers: [
      'Climate change has no effect on storms',
      'Storms are becoming much less common',
      'Only cold countries are affected'
    ],
    explanation: 'While total numbers may not increase, evidence suggests storms are becoming more intense. Warmer oceans = more energy. Hurricane Harvey (2017) dumped record rainfall partly due to warmer Gulf waters.',
    tags: ['weather', 'climate-change', 'impacts'],
    yearGroup: [10, 11]
  },
  {
    id: 'geog-gcse-exp2-006',
    subject: 'geography',
    topic: 'Natural Hazards',
    subtopic: 'UK Weather',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What caused the Somerset Levels flooding in 2014?',
    correctAnswer: 'Record rainfall, high tides, and lack of river dredging',
    wrongAnswers: [
      'A tsunami from the Atlantic',
      'Dam failure',
      'Melting glaciers'
    ],
    explanation: 'It was the wettest January since records began. The Environment Agency was criticized for not dredging rivers. This became a political debate - who\'s responsible for flood management?',
    tags: ['weather', 'flooding', 'uk'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// ECOSYSTEMS
// ============================================================================

const gcseEcosystems: Question[] = [
  {
    id: 'geog-gcse-exp2-007',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Tropical Rainforests',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why are tropical rainforest soils often nutrient-poor?',
    correctAnswer: 'Nutrients are quickly recycled through vegetation, not stored in soil',
    wrongAnswers: [
      'It never rains enough',
      'Trees don\'t need nutrients',
      'The soil is too cold'
    ],
    explanation: 'Rapid decomposition means nutrients are immediately taken up by plants. Cut down the forest and the nutrient cycle breaks - soil becomes infertile within years. This is why slash-and-burn fails long-term.',
    tags: ['ecosystems', 'rainforest', 'nutrient-cycle'],
    yearGroup: [10, 11]
  },
  {
    id: 'geog-gcse-exp2-008',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Hot Deserts',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How have plants adapted to hot desert conditions?',
    correctAnswer: 'Deep/wide roots, waxy leaves, water storage',
    wrongAnswers: [
      'Large broad leaves for maximum sunlight',
      'Shallow roots only',
      'No adaptations needed'
    ],
    explanation: 'Cacti store water in stems, have waxy coatings to reduce evaporation, and spines instead of leaves. Some plants have roots 30m deep to reach groundwater. Every drop counts!',
    tags: ['ecosystems', 'desert', 'adaptation'],
    yearGroup: [10, 11]
  },
  {
    id: 'geog-gcse-exp2-009',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Cold Environments',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is permafrost?',
    correctAnswer: 'Permanently frozen ground found in polar regions',
    wrongAnswers: [
      'A type of glacier',
      'Very cold snow',
      'Frozen ocean water'
    ],
    explanation: 'In places like Siberia, ground is frozen year-round. Only the "active layer" thaws in summer. Climate change is melting permafrost, releasing methane and destabilizing buildings.',
    tags: ['ecosystems', 'cold-environments', 'permafrost'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// RIVERS AND COASTS
// ============================================================================

const gcseRiversCoasts: Question[] = [
  {
    id: 'geog-gcse-exp2-010',
    subject: 'geography',
    topic: 'Physical Landscapes UK',
    subtopic: 'Rivers',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How does a waterfall retreat to form a gorge?',
    correctAnswer: 'Undercutting of soft rock causes overhang to collapse, waterfall moves upstream',
    wrongAnswers: [
      'Water flows backwards',
      'The gorge was there first',
      'Earthquakes create the gap'
    ],
    explanation: 'At Niagara Falls, the waterfall retreats ~1m per year. Hydraulic action and abrasion undercut the resistant cap rock, it collapses, and the process repeats. Over time: a gorge.',
    tags: ['rivers', 'erosion', 'landforms'],
    yearGroup: [10, 11]
  },
  {
    id: 'geog-gcse-exp2-011',
    subject: 'geography',
    topic: 'Physical Landscapes UK',
    subtopic: 'Coasts',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What coastal management strategy involves doing nothing?',
    correctAnswer: 'Managed retreat',
    wrongAnswers: [
      'Hard engineering',
      'Beach nourishment',
      'Groynes'
    ],
    explanation: 'Managed retreat lets the coast erode naturally, often relocating people. It\'s cheaper and creates habitats, but unpopular with residents. Increasing sea levels make it more necessary.',
    tags: ['coasts', 'management', 'retreat'],
    yearGroup: [10, 11]
  },
  {
    id: 'geog-gcse-exp2-012',
    subject: 'geography',
    topic: 'Physical Landscapes UK',
    subtopic: 'Coasts',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why does longshore drift cause problems at groynes?',
    correctAnswer: 'Sand builds up on one side but is starved on the other',
    wrongAnswers: [
      'Groynes attract too many tourists',
      'Sand moves faster',
      'Groynes cause flooding'
    ],
    explanation: 'Groynes trap sediment on the updrift side, but beaches downdrift are starved of sand and erode faster. Protect one beach, damage the next - coastal management has consequences!',
    tags: ['coasts', 'groynes', 'management'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// URBAN ISSUES
// ============================================================================

const gcseUrban: Question[] = [
  {
    id: 'geog-gcse-exp2-013',
    subject: 'geography',
    topic: 'Urban Issues',
    subtopic: 'UK Cities',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is gentrification?',
    correctAnswer: 'Wealthier people moving into poorer areas, raising property values',
    wrongAnswers: [
      'Building new towns',
      'People moving to the countryside',
      'Demolishing old buildings'
    ],
    explanation: 'Gentrification brings investment but can displace original residents who can\'t afford rising rents. Is it urban renewal or social cleansing? Depends who you ask.',
    tags: ['urban', 'gentrification', 'change'],
    yearGroup: [10, 11]
  },
  {
    id: 'geog-gcse-exp2-014',
    subject: 'geography',
    topic: 'Urban Issues',
    subtopic: 'Global Cities',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why do squatter settlements grow in LIC cities?',
    correctAnswer: 'Rural-urban migration outpaces housing supply',
    wrongAnswers: [
      'People prefer slums',
      'Government builds them deliberately',
      'They are tourist attractions'
    ],
    explanation: 'Millions move to cities for jobs - Lagos grows by 77 people per HOUR. Governments can\'t build housing fast enough, so people build informal settlements. Home is home, even if it\'s improvised.',
    tags: ['urban', 'slums', 'migration'],
    yearGroup: [10, 11]
  },
  {
    id: 'geog-gcse-exp2-015',
    subject: 'geography',
    topic: 'Urban Issues',
    subtopic: 'Sustainable Cities',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How can cities become more sustainable?',
    correctAnswer: 'Green spaces, public transport, renewable energy, recycling',
    wrongAnswers: [
      'More cars and parking',
      'Building on all green spaces',
      'Using more fossil fuels'
    ],
    explanation: 'Freiburg in Germany: solar panels, car-free neighborhoods, efficient trams. Cities don\'t have to be environmental disasters - with planning, they can be greener than rural sprawl.',
    tags: ['urban', 'sustainability', 'planning'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// DEVELOPMENT
// ============================================================================

const gcseDevelopment: Question[] = [
  {
    id: 'geog-gcse-exp2-016',
    subject: 'geography',
    topic: 'Development',
    subtopic: 'Measuring Development',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why is HDI (Human Development Index) better than GDP for measuring development?',
    correctAnswer: 'It includes health and education, not just wealth',
    wrongAnswers: [
      'It\'s easier to calculate',
      'Only rich countries use it',
      'GDP includes everything important'
    ],
    explanation: 'HDI combines life expectancy, education, and income. A country might have high GDP but poor healthcare (looking at you, USA). HDI shows quality of life, not just money.',
    tags: ['development', 'hdi', 'measurement'],
    yearGroup: [10, 11]
  },
  {
    id: 'geog-gcse-exp2-017',
    subject: 'geography',
    topic: 'Development',
    subtopic: 'Strategies',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is microfinance?',
    correctAnswer: 'Small loans to poor people to start businesses',
    wrongAnswers: [
      'Very small currency',
      'Loans to large corporations',
      'International aid only'
    ],
    explanation: 'Grameen Bank in Bangladesh pioneered microfinance - small loans ($50-100) to women to start businesses. Bottom-up development that empowers individuals rather than relying on big projects.',
    tags: ['development', 'microfinance', 'strategies'],
    yearGroup: [10, 11]
  },
  {
    id: 'geog-gcse-exp2-018',
    subject: 'geography',
    topic: 'Development',
    subtopic: 'NEEs',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why has China developed so rapidly since 1980?',
    correctAnswer: 'Export-led growth, cheap labor, Special Economic Zones',
    wrongAnswers: [
      'Natural resources only',
      'It was always developed',
      'Foreign aid from the USA'
    ],
    explanation: 'Deng Xiaoping\'s reforms opened China to foreign investment. SEZs attracted manufacturing. Cheap labor made Chinese exports competitive. 800 million lifted out of poverty.',
    tags: ['development', 'china', 'nee'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const gcseGeographyTermsExpanded2: TermDefinition[] = [
  {
    id: 'geog-gcse-exp2-term-001',
    subject: 'geography',
    topic: 'Natural Hazards',
    difficulty: 'gcse',
    term: 'Liquefaction',
    definition: 'When saturated soil loses strength during an earthquake and behaves like liquid.',
    example: 'In Christchurch 2011, liquefaction caused buildings to sink into the ground.',
    tags: ['tectonics', 'earthquakes', 'impacts']
  },
  {
    id: 'geog-gcse-exp2-term-002',
    subject: 'geography',
    topic: 'Ecosystems',
    difficulty: 'gcse',
    term: 'Biodiversity',
    definition: 'The variety of plant and animal species in an ecosystem.',
    example: 'The Amazon rainforest has the highest biodiversity on Earth.',
    tags: ['ecosystems', 'species', 'conservation']
  },
  {
    id: 'geog-gcse-exp2-term-003',
    subject: 'geography',
    topic: 'Urban',
    difficulty: 'gcse',
    term: 'Urban Sprawl',
    definition: 'The uncontrolled expansion of urban areas into surrounding countryside.',
    example: 'Los Angeles is famous for its urban sprawl and car dependency.',
    tags: ['urban', 'growth', 'land-use']
  },
  {
    id: 'geog-gcse-exp2-term-004',
    subject: 'geography',
    topic: 'Development',
    difficulty: 'gcse',
    term: 'NEE (Newly Emerging Economy)',
    definition: 'A country experiencing rapid economic growth and industrialization.',
    example: 'China, India, and Brazil are classified as NEEs.',
    tags: ['development', 'growth', 'classification']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const gcseGeographyExpanded2: Question[] = [
  ...gcseTectonics,
  ...gcseWeatherHazards,
  ...gcseEcosystems,
  ...gcseRiversCoasts,
  ...gcseUrban,
  ...gcseDevelopment
];
