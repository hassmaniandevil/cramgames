/**
 * KS3 Geography Expanded Question Bank
 * Fun-first gamified questions for younger students
 */

import { Question, TermDefinition } from '../types';

// ============================================
// PHYSICAL GEOGRAPHY
// ============================================

export const ks3GeographyPhysical: Question[] = [
  // RIVERS
  {
    id: 'geo-ks3-exp-riv-001',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'River Features',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'A river starts as a small stream in the hills. What is this starting point called?',
    correctAnswer: 'Source',
    wrongAnswers: ['Mouth', 'Tributary', 'Delta'],
    explanation: 'Rivers flow from source to mouth! The source is where the river begins (often a spring or melting snow in hills). The mouth is where it ends (usually the sea).',
    hint: 'Think about where water comes FROM',
    tags: ['rivers', 'features', 'vocabulary'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-riv-002',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Erosion',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match each type of river erosion to how it works:',
    correctAnswer: ['Hydraulic action → Water forced into cracks', 'Abrasion → Rocks scraping the bed', 'Attrition → Rocks hitting each other', 'Solution → Rock dissolved by water'],
    wrongAnswers: [],
    explanation: 'Rivers erode in 4 ways! Hydraulic action uses water pressure, abrasion uses rocks as sandpaper, attrition makes rocks round, solution dissolves rock like sugar in tea.',
    hint: 'Think about what\'s doing the eroding in each case',
    tags: ['rivers', 'erosion', 'processes'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geo-ks3-exp-riv-003',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Flooding',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which factor would make river flooding MORE likely?',
    correctAnswer: 'Heavy rainfall on concrete surfaces (impermeable)',
    wrongAnswers: ['Light drizzle on forests', 'Dry weather on grassland', 'Snow in winter'],
    explanation: 'Impermeable surfaces (concrete, tarmac) don\'t absorb water - it runs straight into rivers! Trees and soil absorb water, slowing the flow. Cities flood more easily.',
    hint: 'What happens when water can\'t soak into the ground?',
    tags: ['rivers', 'flooding', 'causes'],
    yearGroup: [7, 8, 9]
  },

  // COASTS
  {
    id: 'geo-ks3-exp-coast-001',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Waves',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Destructive waves erode coasts. What are their characteristics?',
    correctAnswer: 'Tall, steep, and powerful with strong backwash',
    wrongAnswers: ['Low, flat, and gentle with strong swash', 'They only occur in summer', 'They build beaches up'],
    explanation: 'Destructive waves crash and pull material away - strong backwash drags sediment out to sea. They\'re tall, frequent, and powerful. Storm waves are destructive!',
    hint: 'The name "destructive" gives you a clue',
    tags: ['coasts', 'waves', 'erosion'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-coast-002',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Features',
    difficulty: 'ks3',
    type: 'order',
    question: 'Put these coastal features in order of formation (first to last):',
    correctAnswer: ['Crack in cliff', 'Cave', 'Arch', 'Stack'],
    wrongAnswers: [],
    explanation: 'Waves attack weakness (crack) → erosion creates cave → cave erodes through headland to form arch → roof collapses leaving a stack. Coastal evolution!',
    hint: 'Start with the smallest feature',
    tags: ['coasts', 'features', 'formation'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geo-ks3-exp-coast-003',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Longshore Drift',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Longshore drift moves sediment along a beach. What causes it?',
    correctAnswer: 'Waves approaching at an angle to the shore',
    wrongAnswers: ['Wind blowing along the beach', 'Tides going in and out', 'People walking on the sand'],
    explanation: 'Waves approach at an angle (swash), but backwash goes straight back. This zigzag movement moves pebbles along the coast. Like a slow-motion conveyor belt!',
    hint: 'Think about the direction waves hit the beach',
    tags: ['coasts', 'longshore drift', 'transport'],
    yearGroup: [7, 8, 9]
  },

  // WEATHER & CLIMATE
  {
    id: 'geo-ks3-exp-weather-001',
    subject: 'geography',
    topic: 'Weather',
    subtopic: 'Water Cycle',
    difficulty: 'ks3',
    type: 'order',
    question: 'Put these water cycle stages in order:',
    correctAnswer: ['Evaporation', 'Condensation', 'Precipitation', 'Collection'],
    wrongAnswers: [],
    explanation: 'Water evaporates from oceans → condenses into clouds → falls as precipitation (rain/snow) → collects in rivers/lakes/seas. Then it starts again!',
    hint: 'Start with water turning to vapour',
    tags: ['weather', 'water cycle', 'processes'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-weather-002',
    subject: 'geography',
    topic: 'Weather',
    subtopic: 'Measuring Weather',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match each weather element to how it\'s measured:',
    correctAnswer: ['Temperature → Thermometer', 'Rainfall → Rain gauge', 'Wind speed → Anemometer', 'Air pressure → Barometer'],
    wrongAnswers: [],
    explanation: 'Weather stations use these instruments! Thermometers for temperature (°C), rain gauges catch rainfall (mm), anemometers spin for wind (mph/km/h), barometers for pressure (mb).',
    hint: 'Think about what each instrument looks like',
    tags: ['weather', 'measurement', 'instruments'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-weather-003',
    subject: 'geography',
    topic: 'Weather',
    subtopic: 'UK Weather',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why does western UK get more rainfall than eastern UK?',
    correctAnswer: 'Wet air from Atlantic hits western mountains first, drops rain there',
    wrongAnswers: ['Eastern UK has more umbrellas', 'The sun dries out eastern UK', 'Western UK is closer to the moon'],
    explanation: 'Relief rainfall! Atlantic air rises over western hills, cools, condenses, and rains. By the time air reaches the east, it\'s dry. This is the "rain shadow" effect.',
    hint: 'Think about where weather comes from and what happens at hills',
    tags: ['weather', 'UK', 'rainfall'],
    yearGroup: [7, 8, 9]
  },

  // TECTONICS
  {
    id: 'geo-ks3-exp-tec-001',
    subject: 'geography',
    topic: 'Tectonics',
    subtopic: 'Plate Boundaries',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Where do most earthquakes and volcanoes occur?',
    correctAnswer: 'At plate boundaries (edges of tectonic plates)',
    wrongAnswers: ['Randomly anywhere on Earth', 'Only on islands', 'In the middle of continents'],
    explanation: 'The "Ring of Fire" around the Pacific shows this clearly! Plates meet at boundaries - they collide, separate, or slide past each other. That\'s where the action is.',
    hint: 'Think about where plates interact',
    tags: ['tectonics', 'distribution', 'plates'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geo-ks3-exp-tec-002',
    subject: 'geography',
    topic: 'Tectonics',
    subtopic: 'Volcanoes',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What comes out of a volcano besides lava?',
    correctAnswer: 'Ash, gases, and pyroclastic flows',
    wrongAnswers: ['Only lava', 'Just smoke', 'Water'],
    explanation: 'Volcanoes erupt lava, ash clouds (can travel miles), toxic gases (SO₂, CO₂), and terrifying pyroclastic flows (superheated ash moving at 100mph). Lava isn\'t even the deadliest part!',
    hint: 'Think about volcanic eruption photos - what else do you see?',
    tags: ['tectonics', 'volcanoes', 'hazards'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-tec-003',
    subject: 'geography',
    topic: 'Tectonics',
    subtopic: 'Earthquakes',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'The point underground where an earthquake starts is called the...',
    correctAnswer: 'Focus',
    wrongAnswers: ['Epicentre', 'Fault line', 'Crater'],
    explanation: 'Focus = underground starting point. Epicentre = the point on the surface directly above the focus (where damage is usually worst). Don\'t mix them up!',
    hint: 'There\'s a specific word for the underground origin',
    tags: ['tectonics', 'earthquakes', 'terminology'],
    yearGroup: [7, 8, 9]
  },

  // ECOSYSTEMS
  {
    id: 'geo-ks3-exp-eco-001',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Biomes',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match each biome to its climate:',
    correctAnswer: ['Tropical rainforest → Hot and wet all year', 'Desert → Very hot, very dry', 'Tundra → Freezing cold, little precipitation', 'Temperate → Mild, moderate rainfall'],
    wrongAnswers: [],
    explanation: 'Climate creates biomes! Rainforests near equator (always hot + wet). Deserts at tropics (hot + dry). Tundra near poles (cold). UK is temperate (mild and changeable!).',
    hint: 'Think about where each biome is found on Earth',
    tags: ['ecosystems', 'biomes', 'climate'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-eco-002',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Food Chains',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In ecosystem food chains, energy is lost at each level. Where does this energy go?',
    correctAnswer: 'Released as heat through respiration and movement',
    wrongAnswers: ['It disappears completely', 'It goes into outer space', 'It\'s stored in rocks'],
    explanation: 'About 90% of energy is "lost" at each level - used for movement, keeping warm, and life processes. Only 10% is passed on. That\'s why top predators are rare!',
    hint: 'Energy can\'t be destroyed - it transforms into something else',
    tags: ['ecosystems', 'food chains', 'energy'],
    yearGroup: [7, 8, 9]
  },
];

// ============================================
// HUMAN GEOGRAPHY
// ============================================

export const ks3GeographyHuman: Question[] = [
  // POPULATION
  {
    id: 'geo-ks3-exp-pop-001',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Distribution',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Most of the world\'s population lives in...',
    correctAnswer: 'Asia (especially China, India, and Southeast Asia)',
    wrongAnswers: ['North America', 'Europe', 'Africa'],
    explanation: 'About 60% of humans live in Asia! China and India alone have over 2.8 billion people combined. That\'s more than any other continent.',
    hint: 'Which continent has the two most populous countries?',
    tags: ['population', 'distribution', 'global'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-pop-002',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Density',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Population density is calculated as...',
    correctAnswer: 'Number of people ÷ area (people per km²)',
    wrongAnswers: ['Area × number of people', 'Number of houses ÷ people', 'Just counting everyone'],
    explanation: 'Population density = people per square kilometre. Bangladesh has ~1,200 people/km², UK has ~280, Canada has ~4. Same population could be spread thin or packed tight!',
    hint: 'It\'s about how crowded an area is',
    tags: ['population', 'density', 'calculation'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-pop-003',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Migration',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is a "push factor" for migration?',
    correctAnswer: 'Something that makes people want to leave a place (war, poverty)',
    wrongAnswers: ['Something that attracts people to a new place', 'A literal push', 'A type of transport'],
    explanation: 'Push factors push you away: war, natural disasters, unemployment, persecution. Pull factors pull you toward somewhere: jobs, family, safety, better life.',
    hint: 'Does it make you want to leave or arrive?',
    tags: ['population', 'migration', 'factors'],
    yearGroup: [7, 8, 9]
  },

  // SETTLEMENTS
  {
    id: 'geo-ks3-exp-sett-001',
    subject: 'geography',
    topic: 'Settlements',
    subtopic: 'Site Factors',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Many old settlements are near rivers. Why?',
    correctAnswer: 'Water supply, transport, fishing, fertile land, defence',
    wrongAnswers: ['People liked swimming', 'Rivers were sacred', 'There was nowhere else'],
    explanation: 'Rivers = life! Clean water, food (fish), transport routes, irrigation for crops, and natural defence barriers. That\'s why London, Paris, and Cairo all have famous rivers.',
    hint: 'Think about what rivers provide',
    tags: ['settlements', 'site', 'factors'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-sett-002',
    subject: 'geography',
    topic: 'Settlements',
    subtopic: 'Land Use',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In the Burgess model of cities, what is in the centre?',
    correctAnswer: 'CBD (Central Business District) with shops and offices',
    wrongAnswers: ['Factories', 'Expensive houses', 'Farmland'],
    explanation: 'Cities grow outward from the centre! CBD in middle (commerce), then inner city/factories, suburbs, then countryside. It\'s like rings on a tree.',
    hint: 'What would be most valuable - land in the centre or edge?',
    tags: ['settlements', 'land use', 'models'],
    yearGroup: [8, 9]
  },

  // RESOURCES
  {
    id: 'geo-ks3-exp-res-001',
    subject: 'geography',
    topic: 'Resources',
    subtopic: 'Renewable vs Non-renewable',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which is a non-renewable energy source?',
    correctAnswer: 'Coal (takes millions of years to form)',
    wrongAnswers: ['Wind', 'Solar', 'Hydroelectric'],
    explanation: 'Non-renewable resources run out! Fossil fuels (coal, oil, gas) took millions of years to form from dead organisms. Once burned, they\'re gone. Renewables keep working!',
    hint: 'Can we make more of it in our lifetime?',
    tags: ['resources', 'energy', 'sustainability'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-res-002',
    subject: 'geography',
    topic: 'Resources',
    subtopic: 'Sustainability',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What does "sustainable development" mean?',
    correctAnswer: 'Meeting today\'s needs without harming future generations',
    wrongAnswers: ['Building as much as possible', 'Only using wood for construction', 'Never changing anything'],
    explanation: 'Sustainability is about balance - develop and improve lives NOW without stealing from the future. Think: can we keep doing this for 100 years?',
    hint: 'It\'s about now AND the future',
    tags: ['resources', 'sustainability', 'development'],
    yearGroup: [7, 8, 9]
  },

  // GLOBALISATION
  {
    id: 'geo-ks3-exp-glob-001',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'Connections',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Your phone was probably designed in USA, assembled in China, using parts from 10+ countries. This is an example of...',
    correctAnswer: 'Globalisation (world economies interconnected)',
    wrongAnswers: ['Localisation', 'Isolation', 'Nationalism'],
    explanation: 'Globalisation means the world is connected! Products, people, ideas, and money flow across borders. Your morning coffee might involve 5 countries before reaching your cup.',
    hint: 'The product involves many different countries',
    tags: ['globalisation', 'trade', 'connections'],
    yearGroup: [8, 9]
  },
];

// ============================================
// KS3 GEOGRAPHY TERMS
// ============================================

export const ks3GeographyTermsExpanded: TermDefinition[] = [
  {
    id: 'geo-ks3-term-exp-001',
    subject: 'geography',
    term: 'Erosion',
    definition: 'The wearing away and removal of rock, soil, or sediment by natural forces like water, wind, or ice',
    difficulty: 'ks3',
    relatedTerms: ['weathering', 'transport', 'deposition']
  },
  {
    id: 'geo-ks3-term-exp-002',
    subject: 'geography',
    term: 'Deposition',
    definition: 'When material carried by rivers, waves, or wind is dropped due to loss of energy',
    difficulty: 'ks3',
    relatedTerms: ['erosion', 'transport', 'sediment']
  },
  {
    id: 'geo-ks3-term-exp-003',
    subject: 'geography',
    term: 'Precipitation',
    definition: 'Water falling from clouds as rain, snow, sleet, or hail',
    difficulty: 'ks3',
    relatedTerms: ['water cycle', 'condensation', 'evaporation']
  },
  {
    id: 'geo-ks3-term-exp-004',
    subject: 'geography',
    term: 'Tectonic plate',
    definition: 'Massive slabs of Earth\'s crust that float on the mantle and move slowly',
    difficulty: 'ks3',
    relatedTerms: ['earthquake', 'volcano', 'boundary']
  },
  {
    id: 'geo-ks3-term-exp-005',
    subject: 'geography',
    term: 'Biome',
    definition: 'A large area with distinct climate, plants, and animals - like tropical rainforest or desert',
    difficulty: 'ks3',
    relatedTerms: ['ecosystem', 'climate', 'vegetation']
  },
  {
    id: 'geo-ks3-term-exp-006',
    subject: 'geography',
    term: 'Migration',
    definition: 'Movement of people from one place to another to live or work',
    difficulty: 'ks3',
    relatedTerms: ['push factors', 'pull factors', 'population']
  },
  {
    id: 'geo-ks3-term-exp-007',
    subject: 'geography',
    term: 'Sustainable',
    definition: 'Meeting present needs without compromising future generations\' ability to meet their needs',
    difficulty: 'ks3',
    relatedTerms: ['renewable', 'environment', 'resources']
  },
  {
    id: 'geo-ks3-term-exp-008',
    subject: 'geography',
    term: 'Globalisation',
    definition: 'Increasing connections between countries through trade, communication, and movement of people',
    difficulty: 'ks3',
    relatedTerms: ['trade', 'international', 'interconnected']
  },
];

// Combined export
export const ks3GeographyExpandedNew = [
  ...ks3GeographyPhysical,
  ...ks3GeographyHuman,
];
