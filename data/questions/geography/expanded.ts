/**
 * Geography Expanded Question Bank
 * Fun-first gamified questions across all levels
 */

import { Question, TermDefinition } from '../types';

// ============================================
// KS3 GEOGRAPHY EXPANDED
// ============================================

export const ks3GeographyExpanded: Question[] = [
  // RIVERS & COASTS
  {
    id: 'geo-ks3-exp-rivers-001',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'River Features',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'A river flowing through your favourite video game map forms a waterfall. What\'s the geography term for this?',
    correctAnswer: 'Waterfall (or cascade)',
    wrongAnswers: ['River yeet point', 'Splashy drop zone', 'Hydro jump'],
    explanation: 'Waterfalls form where hard rock sits above soft rock - the soft rock erodes faster, creating a drop! Perfect for dramatic game cutscenes.',
    hint: 'It\'s literally called what it looks like!',
    tags: ['rivers', 'erosion', 'landforms'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-rivers-002',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Erosion',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Rivers erode their banks in four ways. Which process is like the river throwing rocks at the walls?',
    correctAnswer: 'Abrasion',
    wrongAnswers: ['Hydraulic action', 'Attrition', 'Solution'],
    explanation: 'Abrasion is when the river uses its load (rocks and sediment) as weapons against the banks - like throwing pebbles at a wall repeatedly!',
    hint: 'Think "abrasive" - rough and scratchy',
    tags: ['rivers', 'erosion', 'processes'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-rivers-003',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Meanders',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why do rivers wiggle and form S-shaped curves called meanders?',
    correctAnswer: 'Water flows faster on the outside of bends, eroding more there',
    wrongAnswers: ['Rivers get bored of going straight', 'Fish prefer curved rivers', 'The Earth\'s rotation makes them curve'],
    explanation: 'The fastest water hits the outer bank and erodes it, while slower water on the inside deposits sediment. This makes the curves bigger over time!',
    hint: 'Think about where water would naturally flow faster',
    tags: ['rivers', 'meanders', 'erosion'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geo-ks3-exp-rivers-004',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Coastal Features',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'You\'re exploring a coastal area and find a rock arch with a hole in the roof. This is called a...',
    correctAnswer: 'Blowhole',
    wrongAnswers: ['Sky portal', 'Rock nostril', 'Whale sneeze'],
    explanation: 'A blowhole forms when a cave erodes through to the clifftop. When waves crash in, water sprays up through the hole like a whale!',
    hint: 'Named after what it looks like when waves come through',
    tags: ['coasts', 'erosion', 'landforms'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-coasts-005',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Erosion',
    difficulty: 'ks3',
    type: 'order',
    question: 'Put these coastal features in order of how they form (first to last):',
    correctAnswer: ['Cave', 'Arch', 'Stack', 'Stump'],
    wrongAnswers: [],
    explanation: 'It\'s like watching a cliff slowly get destroyed! Cave forms first, then breaks through to make an arch, the top collapses to make a stack, and finally erodes to a stump.',
    hint: 'Start with what waves attack first',
    tags: ['coasts', 'erosion', 'sequence'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geo-ks3-exp-coasts-006',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Beach Formation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why is beach sand finer in some places and pebbly in others?',
    correctAnswer: 'Wave energy - calm areas get fine sand, rough areas get pebbles',
    wrongAnswers: ['Sand and pebbles choose their own holidays', 'The beach mood changes', 'Fish sort them by size'],
    explanation: 'Powerful waves can move heavy pebbles, but in calm waters only fine sand settles. So sheltered beaches = soft sand, exposed beaches = oww pebbles!',
    hint: 'Think about what different wave strengths can carry',
    tags: ['coasts', 'deposition', 'beaches'],
    yearGroup: [7, 8]
  },

  // WEATHER & CLIMATE
  {
    id: 'geo-ks3-exp-weather-001',
    subject: 'geography',
    topic: 'Weather',
    subtopic: 'Cloud Types',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Cumulonimbus clouds are the absolute drama queens of the sky. What do they bring?',
    correctAnswer: 'Thunderstorms with heavy rain, lightning, and sometimes hail',
    wrongAnswers: ['Light drizzle and good vibes', 'Sunny spells', 'Just decoration'],
    explanation: 'Cumulonimbus are MASSIVE tower clouds that can reach 12km high! They\'re basically weather boss battles - thunder, lightning, hail, the lot!',
    hint: 'These clouds look angry and dramatic for a reason',
    tags: ['weather', 'clouds', 'precipitation'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-weather-002',
    subject: 'geography',
    topic: 'Weather',
    subtopic: 'Pressure Systems',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'The UK weather forecast says "high pressure moving in this weekend." What should you expect?',
    correctAnswer: 'Sunny, dry weather with light winds',
    wrongAnswers: ['Heavy storms incoming', 'Bring an umbrella definitely', 'Gale force winds'],
    explanation: 'High pressure = sinking air = no clouds forming = nice weather! Low pressure is the opposite - rising air makes clouds and rain. Weekend saved!',
    hint: 'High pressure literally pushes clouds away',
    tags: ['weather', 'pressure', 'forecasting'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geo-ks3-exp-weather-003',
    subject: 'geography',
    topic: 'Weather',
    subtopic: 'Microclimates',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why is your school playground often hotter than the nearby park on a sunny day?',
    correctAnswer: 'Dark tarmac absorbs more heat than grass',
    wrongAnswers: ['Students generate heat by existing', 'Schools have secret heating', 'The grass steals the sun'],
    explanation: 'Dark surfaces like tarmac absorb sunlight and get HOT, while grass reflects more and stays cooler. This creates a "microclimate" - a tiny climate zone!',
    hint: 'Think about how you feel walking on grass vs pavement barefoot',
    tags: ['weather', 'microclimates', 'urban'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-climate-004',
    subject: 'geography',
    topic: 'Climate',
    subtopic: 'Climate Zones',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match the climate zone to what you\'d experience there:',
    correctAnswer: ['Tropical → Hot and wet all year', 'Desert → Hot days, cold nights, very dry', 'Mediterranean → Hot dry summers, mild wet winters', 'Polar → Freezing cold, ice and snow'],
    wrongAnswers: [],
    explanation: 'Earth\'s tilt and distance from the equator create these distinct zones. Each one has its own vibe - from sweating in the tropics to freezing at the poles!',
    hint: 'Think about where each zone is on Earth',
    tags: ['climate', 'zones', 'global'],
    yearGroup: [7, 8, 9]
  },

  // ECOSYSTEMS
  {
    id: 'geo-ks3-exp-eco-001',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Rainforests',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Tropical rainforests have distinct layers. Which layer gets ALL the sunlight and is where most animals live?',
    correctAnswer: 'Canopy layer',
    wrongAnswers: ['Forest floor', 'Emergent layer', 'Underground layer'],
    explanation: 'The canopy is like the rainforest\'s roof - 30m up, full of sunlight, fruit, and up to 90% of rainforest animals! It\'s basically the penthouse floor.',
    hint: 'Not the top (emergent) or bottom - the main leafy layer',
    tags: ['ecosystems', 'rainforest', 'structure'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-eco-002',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Food Chains',
    difficulty: 'ks3',
    type: 'order',
    question: 'Arrange this Arctic food chain from producer to top predator:',
    correctAnswer: ['Phytoplankton', 'Arctic cod', 'Ringed seal', 'Polar bear'],
    wrongAnswers: [],
    explanation: 'Energy flows: tiny plankton → fish → seal → bear. Each step up loses about 90% of energy, which is why top predators are rare!',
    hint: 'Start with what makes its own food from sunlight',
    tags: ['ecosystems', 'food chains', 'arctic'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-exp-eco-003',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Deserts',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Cacti store water in their stems and have spines instead of leaves. What advantage do spines give?',
    correctAnswer: 'Reduce water loss and protect from animals',
    wrongAnswers: ['Make them look intimidating on Instagram', 'Help them walk around', 'Attract pollinators'],
    explanation: 'Spines have tiny surface area so lose almost no water, plus they\'re sharp enough to make any thirsty animal think twice! Double win.',
    hint: 'Leaves lose water - spines don\'t',
    tags: ['ecosystems', 'deserts', 'adaptation'],
    yearGroup: [7, 8]
  },

  // POPULATION & SETTLEMENT
  {
    id: 'geo-ks3-exp-pop-001',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Migration',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Push factors make people want to LEAVE a place. Which is a push factor?',
    correctAnswer: 'War or conflict',
    wrongAnswers: ['Better job opportunities elsewhere', 'Family already living abroad', 'Nice weather somewhere else'],
    explanation: 'Push factors are the bad things that push you away - war, poverty, natural disasters. Pull factors are good things that pull you somewhere new!',
    hint: 'What would PUSH you out of somewhere?',
    tags: ['population', 'migration', 'factors'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-exp-pop-002',
    subject: 'geography',
    topic: 'Settlement',
    subtopic: 'Site Factors',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'You\'re founding a medieval settlement. Which site factor is MOST important?',
    correctAnswer: 'Water supply from a river',
    wrongAnswers: ['Good phone signal', 'Near a motorway', 'Close to the airport'],
    explanation: 'Clean water = survival! Medieval settlements needed rivers for drinking, farming, transport, and defence. Everything else came second.',
    hint: 'What did people absolutely need before modern technology?',
    tags: ['settlement', 'site', 'history'],
    yearGroup: [7, 8]
  },

  // NATURAL HAZARDS
  {
    id: 'geo-ks3-exp-hazard-001',
    subject: 'geography',
    topic: 'Natural Hazards',
    subtopic: 'Volcanoes',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why do people live near volcanoes despite the danger?',
    correctAnswer: 'Fertile soil for farming and tourism money',
    wrongAnswers: ['They forgot it\'s a volcano', 'Free heating', 'Volcanoes are just decoration'],
    explanation: 'Volcanic soil is incredibly fertile - perfect for farming! Plus tourists pay to visit. The risk is worth it for many communities, especially if eruptions are rare.',
    hint: 'Think about the benefits volcanic areas provide',
    tags: ['hazards', 'volcanoes', 'human'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'geo-ks3-exp-hazard-002',
    subject: 'geography',
    topic: 'Natural Hazards',
    subtopic: 'Earthquakes',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'The Richter scale measures earthquake magnitude. How much stronger is a magnitude 6 compared to magnitude 5?',
    correctAnswer: '10 times stronger',
    wrongAnswers: ['Twice as strong', '6 times stronger', '100 times stronger'],
    explanation: 'The Richter scale is logarithmic - each whole number is 10x more powerful! A magnitude 7 is 100x stronger than a 5. Mind = blown.',
    hint: 'It\'s not a simple difference - it multiplies!',
    tags: ['hazards', 'earthquakes', 'measurement'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-exp-hazard-003',
    subject: 'geography',
    topic: 'Natural Hazards',
    subtopic: 'Tropical Storms',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Tropical storms (hurricanes/typhoons) form over warm oceans. What\'s the minimum sea temperature needed?',
    correctAnswer: '26.5°C',
    wrongAnswers: ['15°C', '50°C', '0°C'],
    explanation: 'Warm water (at least 26.5°C) evaporates rapidly, providing the energy tropical storms need. This is why they form near the equator in summer/autumn!',
    hint: 'It needs to be quite warm - like a heated swimming pool',
    tags: ['hazards', 'tropical storms', 'formation'],
    yearGroup: [8, 9]
  },
];

// ============================================
// GCSE GEOGRAPHY EXPANDED
// ============================================

export const gcseGeographyExpanded: Question[] = [
  // TECTONIC HAZARDS
  {
    id: 'geo-gcse-exp-tec-001',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Plate Boundaries',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'At a conservative plate boundary, plates slide past each other. What hazard does this primarily cause?',
    correctAnswer: 'Earthquakes (but no volcanoes)',
    wrongAnswers: ['Volcanic eruptions', 'Mountain formation', 'Tsunami only'],
    explanation: 'No magma rises at conservative boundaries because plates aren\'t moving apart or together - they\'re sliding sideways. Friction builds up and releases as earthquakes. San Andreas Fault vibes!',
    hint: 'Think about what happens when things slide and stick',
    tags: ['tectonics', 'boundaries', 'hazards'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp-tec-002',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Volcano Types',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Shield volcanoes (like Hawaii) vs stratovolcanoes (like Mt Fuji) - which is more explosive and why?',
    correctAnswer: 'Stratovolcanoes - their thick, viscous lava traps gases',
    wrongAnswers: ['Shield volcanoes - they\'re bigger', 'Neither - all volcanoes are the same', 'Shield volcanoes - runny lava explodes more'],
    explanation: 'Stratovolcanoes have thick sticky lava that traps gases until BOOM! Shield volcanoes have runny lava that lets gas escape gently. Same reason shaking a sealed vs open bottle is different!',
    hint: 'Think about pressure building up vs escaping',
    tags: ['tectonics', 'volcanoes', 'types'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp-tec-003',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Management',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Japan uses "base isolation" in buildings. What does this earthquake management technique do?',
    correctAnswer: 'Allows the building to move independently from ground shaking',
    wrongAnswers: ['Connects buildings firmly to bedrock', 'Fills buildings with shock absorbers', 'Makes buildings lighter'],
    explanation: 'Base isolation uses rubber or steel bearings between building and foundation - the ground shakes but the building barely moves! Like standing on a wobble board vs the floor.',
    hint: 'The building is "isolated" from the shaking base',
    tags: ['tectonics', 'management', 'technology'],
    yearGroup: [10, 11]
  },

  // WEATHER HAZARDS & CLIMATE CHANGE
  {
    id: 'geo-gcse-exp-weather-001',
    subject: 'geography',
    topic: 'Weather Hazards',
    subtopic: 'UK Weather',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The UK gets weather from five main air masses. The Polar Maritime air mass brings...',
    correctAnswer: 'Cool, wet and changeable conditions',
    wrongAnswers: ['Hot, dry weather', 'Freezing but dry conditions', 'Warm and humid weather'],
    explanation: 'Polar Maritime comes from the north Atlantic - cold because polar, wet because maritime (sea). It\'s basically why UK weather is so unpredictable!',
    hint: 'Polar = cold, Maritime = from the sea = wet',
    tags: ['weather', 'air masses', 'UK'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp-weather-002',
    subject: 'geography',
    topic: 'Climate Change',
    subtopic: 'Evidence',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Scientists drill ice cores from Antarctica. Why are these useful for studying past climate?',
    correctAnswer: 'Trapped air bubbles show past atmospheric composition',
    wrongAnswers: ['The ice remembers the weather', 'Penguins wrote records in the ice', 'The colours show temperature'],
    explanation: 'Ice cores contain ancient air bubbles - literally samples of atmosphere from thousands of years ago! We can measure CO2 levels and correlate with temperature proxies.',
    hint: 'Think about what gets trapped as ice forms',
    tags: ['climate', 'evidence', 'methods'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp-climate-003',
    subject: 'geography',
    topic: 'Climate Change',
    subtopic: 'Impacts',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Sea levels rise due to climate change from TWO main causes. What are they?',
    correctAnswer: 'Thermal expansion of water AND melting land ice',
    wrongAnswers: ['More rain falling into the sea', 'Whales displacing water', 'The moon pulling the oceans higher'],
    explanation: 'Water expands when heated (thermal expansion) AND glaciers/ice sheets add water when they melt. Sea ice melting doesn\'t raise levels - it\'s already in the water!',
    hint: 'Think about what happens to water when it warms, plus adding more water',
    tags: ['climate', 'impacts', 'sea level'],
    yearGroup: [10, 11]
  },

  // ECOSYSTEMS
  {
    id: 'geo-gcse-exp-eco-001',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Tropical Rainforests',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Rainforest soils are surprisingly poor despite lush growth. Why?',
    correctAnswer: 'Nutrients are locked in vegetation, not soil - rapid decomposition and uptake',
    wrongAnswers: ['They\'re actually very fertile', 'Heavy rain washes away any nutrients instantly', 'Trees don\'t need nutrients'],
    explanation: 'The nutrient cycle is so fast - dead matter decomposes quickly and nutrients are immediately absorbed by roots. Cut down trees = nutrients gone = poor soil left behind.',
    hint: 'The nutrients are in the living plants, not waiting in the soil',
    tags: ['ecosystems', 'rainforest', 'soils'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp-eco-002',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Hot Deserts',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The Sahara Desert is expanding southward into the Sahel region. What\'s this process called?',
    correctAnswer: 'Desertification',
    wrongAnswers: ['Desert migration', 'Sand spreading', 'Heat wave'],
    explanation: 'Desertification is when fertile land becomes desert due to drought, deforestation, overgrazing, or climate change. The Sahel is losing farmland faster than people can adapt.',
    hint: 'It literally means "becoming desert"',
    tags: ['ecosystems', 'deserts', 'change'],
    yearGroup: [10, 11]
  },

  // URBAN ISSUES
  {
    id: 'geo-gcse-exp-urban-001',
    subject: 'geography',
    topic: 'Urban Issues',
    subtopic: 'Urbanisation',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'More than half the world\'s population now lives in cities. In which region is urbanisation happening fastest?',
    correctAnswer: 'Africa and Asia',
    wrongAnswers: ['Europe and North America', 'South America', 'Australia'],
    explanation: 'Africa and Asia are urbanising rapidly as people move to cities for jobs and opportunities. By 2050, Africa\'s urban population may triple! Europe/North America already urbanised.',
    hint: 'Think about where development is happening fastest right now',
    tags: ['urban', 'urbanisation', 'global'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp-urban-002',
    subject: 'geography',
    topic: 'Urban Issues',
    subtopic: 'Squatter Settlements',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Dharavi in Mumbai is one of the world\'s largest slums. What\'s a surprising fact about it?',
    correctAnswer: 'It generates $1 billion+ annually through recycling and small industries',
    wrongAnswers: ['It has the best infrastructure in Mumbai', 'Nobody actually lives there', 'It was built by the government'],
    explanation: 'Dharavi is a huge informal economy - recycling, leather, pottery, textiles. Residents are entrepreneurs despite lacking basic services. It challenges stereotypes about slums!',
    hint: 'Slums aren\'t just problems - they have their own economy',
    tags: ['urban', 'slums', 'economy'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp-urban-003',
    subject: 'geography',
    topic: 'Urban Issues',
    subtopic: 'Sustainability',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Freiburg (Germany) and Curitiba (Brazil) are famous for being "sustainable cities." What do they have in common?',
    correctAnswer: 'Excellent public transport, green spaces, and renewable energy focus',
    wrongAnswers: ['They banned all cars completely', 'They only allow electric vehicles', 'They have no industry'],
    explanation: 'Both cities prioritised public transport, cycling, parks, and waste management BEFORE it was trendy. Curitiba\'s bus system inspired many cities; Freiburg is car-free in parts.',
    hint: 'Think about what makes a city environmentally friendly',
    tags: ['urban', 'sustainability', 'examples'],
    yearGroup: [10, 11]
  },

  // RESOURCE MANAGEMENT
  {
    id: 'geo-gcse-exp-resource-001',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Water',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The UK has a "water deficit" in the South East but a "surplus" in the North West. What creates this imbalance?',
    correctAnswer: 'More people and less rainfall in the SE; fewer people and more rain in NW',
    wrongAnswers: ['Water flows downhill to the sea', 'The South East wastes water', 'Welsh people drink less water'],
    explanation: 'The South East has most of England\'s population but is drier. The North West has mountains that create heavy rainfall but fewer people. Solutions include transfers and conservation.',
    hint: 'Think population density vs rainfall patterns',
    tags: ['resources', 'water', 'UK'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp-resource-002',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Energy',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What percentage of the UK\'s electricity came from renewable sources in 2022?',
    correctAnswer: 'Around 40%',
    wrongAnswers: ['Around 5%', 'Around 80%', 'Around 15%'],
    explanation: 'The UK has massively increased renewables - especially offshore wind! We have the world\'s largest offshore wind capacity. Coal has virtually disappeared from our energy mix.',
    hint: 'It\'s increased a lot but still not the majority',
    tags: ['resources', 'energy', 'UK'],
    yearGroup: [10, 11]
  },

  // DEVELOPMENT
  {
    id: 'geo-gcse-exp-dev-001',
    subject: 'geography',
    topic: 'Development',
    subtopic: 'Indicators',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The Human Development Index (HDI) measures development using three factors. Which is NOT one of them?',
    correctAnswer: 'Internet access',
    wrongAnswers: ['Life expectancy', 'Education', 'Income'],
    explanation: 'HDI uses: 1) Life expectancy (health), 2) Education (years of schooling), 3) GNI per capita (income). Internet access could be useful but isn\'t included!',
    hint: 'Think basics: health, education, and money',
    tags: ['development', 'indicators', 'HDI'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp-dev-002',
    subject: 'geography',
    topic: 'Development',
    subtopic: 'Trade',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why is "fair trade" different from "free trade"?',
    correctAnswer: 'Fair trade guarantees minimum prices to producers; free trade has no price protection',
    wrongAnswers: ['They\'re the same thing', 'Free trade is more ethical', 'Fair trade removes all tariffs'],
    explanation: 'Free trade = open markets, prices set by supply/demand (can exploit workers). Fair trade = minimum prices and better conditions for producers, even if it costs consumers more.',
    hint: '"Fair" implies protection for workers, "free" implies no restrictions',
    tags: ['development', 'trade', 'ethics'],
    yearGroup: [10, 11]
  },
];

// ============================================
// A-LEVEL GEOGRAPHY EXPANDED
// ============================================

export const alevelGeographyExpanded: Question[] = [
  // TECTONIC PROCESSES
  {
    id: 'geo-alevel-exp-tec-001',
    subject: 'geography',
    topic: 'Tectonic Processes',
    subtopic: 'Mantle Convection',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The "ridge push" hypothesis suggests oceanic plates move because of...',
    correctAnswer: 'Gravity pulling the elevated ridge material downslope',
    wrongAnswers: ['Convection currents pushing from below only', 'Magnetic attraction to the core', 'Centrifugal force from Earth\'s rotation'],
    explanation: 'At mid-ocean ridges, hot material rises and cools - the elevated position means gravity pulls it away from the ridge. Combined with slab pull (cold crust sinking), this drives plate motion.',
    hint: 'Think about what happens to elevated material',
    tags: ['tectonics', 'processes', 'theory'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-tec-002',
    subject: 'geography',
    topic: 'Tectonic Processes',
    subtopic: 'Magma Types',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Andesitic magma is more explosive than basaltic magma. What compositional difference causes this?',
    correctAnswer: 'Higher silica content (55-65%) making it more viscous',
    wrongAnswers: ['More water content', 'Higher temperature', 'Less iron content'],
    explanation: 'Silica forms chains in magma - more silica = more chains = more viscous (sticky) = traps gas = explosive eruptions. Basalt (low silica) flows easily, releasing gas gently.',
    hint: 'Think about what makes magma thick and sticky',
    tags: ['tectonics', 'magma', 'composition'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-tec-003',
    subject: 'geography',
    topic: 'Tectonic Processes',
    subtopic: 'Seismic Waves',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'S-waves cannot pass through Earth\'s outer core. What does this tell us about the core\'s state?',
    correctAnswer: 'The outer core is liquid (S-waves only travel through solids)',
    wrongAnswers: ['The outer core is extremely hot', 'The outer core is magnetic', 'The outer core is under high pressure'],
    explanation: 'S-waves are shear waves that need a rigid medium - they can\'t propagate through liquids! The "shadow zone" where no S-waves reach proves the outer core is molten.',
    hint: 'S-waves need something solid to shake',
    tags: ['tectonics', 'seismic', 'structure'],
    yearGroup: [12, 13]
  },

  // COASTAL SYSTEMS
  {
    id: 'geo-alevel-exp-coast-001',
    subject: 'geography',
    topic: 'Coastal Systems',
    subtopic: 'Wave Energy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Wave energy is concentrated on headlands due to wave refraction. How exactly does this process work?',
    correctAnswer: 'Waves slow in shallow water, causing them to bend toward headlands',
    wrongAnswers: ['Headlands attract waves magnetically', 'Deeper water speeds up waves near headlands', 'Waves bounce off bays toward headlands'],
    explanation: 'As waves approach shore, they slow in shallow water. Headlands have shallow water earlier, so wave ends slow first and bend inward, concentrating energy on the headland.',
    hint: 'Think about what happens when one side of a wave slows before the other',
    tags: ['coasts', 'waves', 'processes'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-coast-002',
    subject: 'geography',
    topic: 'Coastal Systems',
    subtopic: 'Sediment Cells',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'England and Wales are divided into 11 sediment cells. What defines the boundaries between cells?',
    correctAnswer: 'Major headlands or estuaries where sediment transport is interrupted',
    wrongAnswers: ['Political county boundaries', 'Equal distances along the coast', 'Historical shipping routes'],
    explanation: 'Sediment cells are closed systems where sediment moves within but not between cells. Major features like headlands or deep estuaries block longshore drift, creating boundaries.',
    hint: 'Think about what physically stops sediment moving along the coast',
    tags: ['coasts', 'sediment', 'management'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-coast-003',
    subject: 'geography',
    topic: 'Coastal Systems',
    subtopic: 'Management Strategies',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Managed retreat (realignment) is increasingly favoured over hard engineering. Why is this approach considered more sustainable?',
    correctAnswer: 'Creates natural habitats, reduces long-term costs, and allows natural processes',
    wrongAnswers: ['It\'s cheaper in the short term', 'Governments save money by doing nothing', 'Local residents always prefer it'],
    explanation: 'Managed retreat creates salt marshes (carbon sinks, wildlife habitats, natural wave buffers), avoids expensive maintenance, and works with nature rather than against it. Though politically difficult!',
    hint: 'Think long-term environmental and economic benefits',
    tags: ['coasts', 'management', 'sustainability'],
    yearGroup: [12, 13]
  },

  // WATER CYCLE
  {
    id: 'geo-alevel-exp-water-001',
    subject: 'geography',
    topic: 'Water Cycle',
    subtopic: 'Drainage Basins',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What determines the "flashiness" of a river\'s hydrograph (quick response to rainfall)?',
    correctAnswer: 'Basin characteristics: steep slopes, impermeable rock, urban land use, circular shape',
    wrongAnswers: ['Only the amount of rainfall', 'River channel size alone', 'Distance from the sea'],
    explanation: 'Flashy rivers respond quickly because water reaches the channel fast. Steep slopes, hard rock, concrete surfaces, and compact basins all reduce lag time. Flat, forested, permeable basins respond slowly.',
    hint: 'Think about what speeds up water reaching the river',
    tags: ['water', 'hydrology', 'basins'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-water-002',
    subject: 'geography',
    topic: 'Water Cycle',
    subtopic: 'Global Water Budget',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'Approximately ___% of Earth\'s water is freshwater, and of that, about ___% is locked in ice caps and glaciers.',
    correctAnswer: '2.5, 69',
    wrongAnswers: [],
    explanation: 'Only 2.5% of Earth\'s water is fresh (rest is salty oceans). Of that freshwater, 69% is ice, 30% is groundwater, and less than 1% is accessible surface freshwater. Water is precious!',
    hint: 'Most Earth water is salty, most freshwater is frozen',
    tags: ['water', 'global', 'budget'],
    yearGroup: [12, 13]
  },

  // GLOBALISATION
  {
    id: 'geo-alevel-exp-global-001',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'TNCs',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Apple\'s supply chain involves 43 countries. Which concept best describes how TNCs like Apple create "global production networks"?',
    correctAnswer: 'New International Division of Labour (NIDL)',
    wrongAnswers: ['Vertical integration', 'Comparative advantage', 'Import substitution'],
    explanation: 'NIDL describes how manufacturing shifted from HICs to LICs/NEEs where labour is cheaper. TNCs fragment production globally - design in USA, chips in Taiwan, assembly in China, support in India.',
    hint: 'Think about how labour is divided internationally',
    tags: ['globalisation', 'TNCs', 'theory'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-global-002',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'Impacts',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The "race to the bottom" in globalisation refers to...',
    correctAnswer: 'Countries lowering labour/environmental standards to attract investment',
    wrongAnswers: ['Competition to produce the cheapest products', 'TNCs moving to lowest floors of buildings', 'Countries competing for Olympic hosting'],
    explanation: 'Countries compete for TNC investment by offering low taxes, weak unions, lax environmental laws. This can harm workers and environments as standards drop to be "competitive."',
    hint: 'What might countries sacrifice to attract foreign companies?',
    tags: ['globalisation', 'impacts', 'negative'],
    yearGroup: [12, 13]
  },

  // MIGRATION
  {
    id: 'geo-alevel-exp-mig-001',
    subject: 'geography',
    topic: 'Migration',
    subtopic: 'Theories',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Lee\'s migration model introduces the concept of "intervening obstacles." What does this mean?',
    correctAnswer: 'Barriers between origin and destination that make migration harder',
    wrongAnswers: ['Benefits at the destination', 'Problems at the origin', 'Personal characteristics of migrants'],
    explanation: 'Intervening obstacles include distance, cost, borders, language barriers, family ties. They can prevent migration even when push/pull factors are strong. Example: visa requirements, sea crossings.',
    hint: 'What might stand in the way between wanting to move and actually moving?',
    tags: ['migration', 'theory', 'models'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-mig-002',
    subject: 'geography',
    topic: 'Migration',
    subtopic: 'Impacts',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is a "brain drain" and why might it harm source countries?',
    correctAnswer: 'Emigration of skilled/educated workers, reducing the source country\'s human capital',
    wrongAnswers: ['Immigrants taking all the jobs', 'People forgetting their culture abroad', 'Economic decline causing depression'],
    explanation: 'When doctors, engineers, teachers emigrate, the source country loses investment in their education AND their potential contribution. This can slow development in LICs/NEEs significantly.',
    hint: 'Think about what happens when skilled people leave',
    tags: ['migration', 'impacts', 'development'],
    yearGroup: [12, 13]
  },
];

// ============================================
// GEOGRAPHY TERMS
// ============================================

export const geographyTermsExpanded: TermDefinition[] = [
  // Physical Geography
  {
    id: 'geo-term-exp-001',
    subject: 'geography',
    term: 'Isostatic rebound',
    definition: 'The rising of land after heavy ice sheets melt - like a mattress springing back when you get off it',
    difficulty: 'alevel',
    relatedTerms: ['glaciation', 'sea level', 'post-glacial']
  },
  {
    id: 'geo-term-exp-002',
    subject: 'geography',
    term: 'Eustatic sea level change',
    definition: 'Global sea level change (up or down) affecting all oceans equally - usually from ice melting or thermal expansion',
    difficulty: 'alevel',
    relatedTerms: ['isostatic', 'climate change', 'glaciation']
  },
  {
    id: 'geo-term-exp-003',
    subject: 'geography',
    term: 'Longshore drift',
    definition: 'The zigzag movement of sediment along a beach due to waves hitting at an angle - sediment travels down the coast like tiny tourists',
    difficulty: 'gcse',
    relatedTerms: ['swash', 'backwash', 'spits']
  },
  {
    id: 'geo-term-exp-004',
    subject: 'geography',
    term: 'Hydraulic action',
    definition: 'Erosion caused by water forcing into cracks, compressing air, and breaking rock apart - like waves punching cliffs',
    difficulty: 'ks3',
    relatedTerms: ['erosion', 'coasts', 'rivers']
  },
  {
    id: 'geo-term-exp-005',
    subject: 'geography',
    term: 'Abrasion',
    definition: 'Erosion caused by rocks carried by water scraping against surfaces - like sandpaper wearing down a surface',
    difficulty: 'ks3',
    relatedTerms: ['erosion', 'corrasion', 'load']
  },
  // Human Geography
  {
    id: 'geo-term-exp-006',
    subject: 'geography',
    term: 'Megacity',
    definition: 'A city with over 10 million people - basically a small country squashed into an urban area',
    difficulty: 'gcse',
    relatedTerms: ['urbanisation', 'primate city', 'conurbation']
  },
  {
    id: 'geo-term-exp-007',
    subject: 'geography',
    term: 'Gentrification',
    definition: 'When wealthier people move into a poorer area, renovate properties, and prices rise - original residents often displaced',
    difficulty: 'alevel',
    relatedTerms: ['urban renewal', 'displacement', 'inequality']
  },
  {
    id: 'geo-term-exp-008',
    subject: 'geography',
    term: 'Counter-urbanisation',
    definition: 'People moving from cities to rural areas - escaping the urban jungle for village life (with decent WiFi, hopefully)',
    difficulty: 'gcse',
    relatedTerms: ['urbanisation', 'suburbs', 'commuting']
  },
  {
    id: 'geo-term-exp-009',
    subject: 'geography',
    term: 'Demographic transition model',
    definition: 'Shows how birth/death rates change as countries develop - from high births/deaths to low births/deaths over 5 stages',
    difficulty: 'gcse',
    relatedTerms: ['population', 'development', 'birth rate']
  },
  {
    id: 'geo-term-exp-010',
    subject: 'geography',
    term: 'Carbon footprint',
    definition: 'The total CO2 emissions caused by an individual, company, or product - your personal contribution to climate change',
    difficulty: 'ks3',
    relatedTerms: ['climate change', 'sustainability', 'emissions']
  },
  // Development Terms
  {
    id: 'geo-term-exp-011',
    subject: 'geography',
    term: 'Newly Emerging Economy (NEE)',
    definition: 'Countries experiencing rapid industrialisation and economic growth - like China, India, Brazil becoming economic powerhouses',
    difficulty: 'gcse',
    relatedTerms: ['development', 'LIC', 'HIC']
  },
  {
    id: 'geo-term-exp-012',
    subject: 'geography',
    term: 'Top-down development',
    definition: 'Large-scale projects planned by governments/organisations - big infrastructure but doesn\'t always help locals',
    difficulty: 'alevel',
    relatedTerms: ['bottom-up', 'aid', 'development']
  },
  {
    id: 'geo-term-exp-013',
    subject: 'geography',
    term: 'Bottom-up development',
    definition: 'Small-scale community-led projects that empower locals - slower but more sustainable and appropriate',
    difficulty: 'alevel',
    relatedTerms: ['top-down', 'appropriate technology', 'NGOs']
  },
  {
    id: 'geo-term-exp-014',
    subject: 'geography',
    term: 'Appropriate technology',
    definition: 'Technology suited to local skills, resources, and needs - a solar cooker might be more useful than a microwave in rural Africa',
    difficulty: 'gcse',
    relatedTerms: ['intermediate technology', 'development', 'sustainability']
  },
  {
    id: 'geo-term-exp-015',
    subject: 'geography',
    term: 'Multiplier effect',
    definition: 'When one investment creates jobs, those workers spend money, creating more jobs - a positive spiral of growth',
    difficulty: 'gcse',
    relatedTerms: ['development', 'investment', 'employment']
  },
];

// Combined exports
export const geographyExpanded = [
  ...ks3GeographyExpanded,
  ...gcseGeographyExpanded,
  ...alevelGeographyExpanded,
];
