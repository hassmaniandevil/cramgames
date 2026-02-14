/**
 * KS3 Geography Question Bank
 * Comprehensive questions for UK curriculum (Years 7-9)
 */

import { Question, TermDefinition } from '../types';

// ============================================================================
// WEATHER AND CLIMATE (12 Questions)
// ============================================================================

const weatherAndClimateQuestions: Question[] = [
  {
    id: 'geo-ks3-weather-001',
    subject: 'geography',
    topic: 'Weather and Climate',
    subtopic: 'Basics',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is the difference between weather and climate?',
    correctAnswer: 'Weather is day-to-day conditions; climate is the average over 30+ years',
    wrongAnswers: ['They mean the same thing', 'Climate is daily; weather is long-term', 'Weather is only about temperature'],
    explanation: 'Weather describes short-term atmospheric conditions, while climate is the average weather pattern over at least 30 years.',
    tags: ['weather', 'climate', 'basics'],
    yearGroup: [7]
  },
  {
    id: 'geo-ks3-weather-002',
    subject: 'geography',
    topic: 'Weather and Climate',
    subtopic: 'Measurement',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match the weather instrument to what it measures.',
    correctAnswer: ['Thermometer - Temperature', 'Barometer - Air pressure', 'Anemometer - Wind speed', 'Rain gauge - Precipitation'],
    explanation: 'Each instrument is specifically designed to measure a particular weather element.',
    tags: ['instruments', 'measurement'],
    yearGroup: [7]
  },
  {
    id: 'geo-ks3-weather-003',
    subject: 'geography',
    topic: 'Weather and Climate',
    subtopic: 'Air Pressure',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What type of weather does high pressure typically bring?',
    correctAnswer: 'Dry, settled weather with clear skies',
    wrongAnswers: ['Heavy rain and storms', 'Strong winds', 'Thick fog only'],
    explanation: 'High pressure systems cause air to sink, preventing cloud formation and typically bringing dry, calm conditions.',
    tags: ['air pressure', 'high pressure'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-weather-004',
    subject: 'geography',
    topic: 'Weather and Climate',
    subtopic: 'Air Pressure',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Low pressure systems are associated with unsettled, rainy weather.',
    correctAnswer: 'True',
    explanation: 'Low pressure causes air to rise, cool, and condense, forming clouds and precipitation.',
    tags: ['air pressure', 'low pressure'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-weather-005',
    subject: 'geography',
    topic: 'Weather and Climate',
    subtopic: 'UK Climate',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What type of climate does the UK have?',
    correctAnswer: 'Temperate maritime climate',
    wrongAnswers: ['Tropical climate', 'Continental climate', 'Mediterranean climate'],
    explanation: 'The UK has a temperate maritime climate with mild temperatures, frequent rainfall, and no extreme seasons.',
    tags: ['UK climate', 'maritime'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-weather-006',
    subject: 'geography',
    topic: 'Weather and Climate',
    subtopic: 'Factors',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The imaginary line around the middle of the Earth where temperatures are highest is called the _____.',
    correctAnswer: 'equator',
    explanation: 'The equator receives the most direct sunlight throughout the year, making it the warmest region.',
    tags: ['equator', 'latitude'],
    yearGroup: [7]
  },
  {
    id: 'geo-ks3-weather-007',
    subject: 'geography',
    topic: 'Weather and Climate',
    subtopic: 'Factors',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why do coastal areas have milder winters than inland areas?',
    correctAnswer: 'The sea retains heat and releases it slowly',
    wrongAnswers: ['The sea blocks cold winds', 'Coastal areas are lower altitude', 'There is less pollution at the coast'],
    explanation: 'Water has a high specific heat capacity, so the sea warms and cools more slowly than land, moderating coastal temperatures.',
    tags: ['coastal', 'maritime effect'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-weather-008',
    subject: 'geography',
    topic: 'Weather and Climate',
    subtopic: 'Relief Rainfall',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What causes relief rainfall?',
    correctAnswer: 'Moist air being forced to rise over hills or mountains',
    wrongAnswers: ['Cold and warm air masses meeting', 'The sun heating the ground', 'Low pressure systems'],
    explanation: 'When moist air is forced upward by high ground, it cools and condenses, forming clouds and precipitation.',
    tags: ['relief rainfall', 'orographic'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-weather-009',
    subject: 'geography',
    topic: 'Weather and Climate',
    subtopic: 'Rain Shadow',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The dry area on the leeward side of a mountain is called a rain _____.',
    correctAnswer: 'shadow',
    explanation: 'After air has risen over mountains and lost its moisture as rain, it descends as dry air, creating a rain shadow.',
    tags: ['rain shadow', 'relief rainfall'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-weather-010',
    subject: 'geography',
    topic: 'Weather and Climate',
    subtopic: 'Climate Zones',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which climate zone receives the least rainfall?',
    correctAnswer: 'Deserts at around 30 degrees latitude',
    wrongAnswers: ['Tropical rainforests at the equator', 'Temperate regions at 50 degrees', 'Polar regions'],
    explanation: 'At around 30 degrees latitude, air descends and warms, preventing cloud formation and creating desert climates.',
    tags: ['climate zones', 'deserts'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-weather-011',
    subject: 'geography',
    topic: 'Weather and Climate',
    subtopic: 'Climate Change',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'The greenhouse effect is entirely caused by human activity.',
    correctAnswer: 'False',
    explanation: 'The greenhouse effect is natural and essential for life, but human activities have enhanced it by releasing extra greenhouse gases.',
    tags: ['greenhouse effect', 'climate change'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-weather-012',
    subject: 'geography',
    topic: 'Weather and Climate',
    subtopic: 'Climate Change',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which gas is the main contributor to the enhanced greenhouse effect?',
    correctAnswer: 'Carbon dioxide',
    wrongAnswers: ['Oxygen', 'Nitrogen', 'Hydrogen'],
    explanation: 'Carbon dioxide from burning fossil fuels is the main greenhouse gas contributing to global warming.',
    tags: ['carbon dioxide', 'greenhouse gases'],
    yearGroup: [8, 9]
  }
];

// ============================================================================
// RIVERS (14 Questions)
// ============================================================================

const riversQuestions: Question[] = [
  {
    id: 'geo-ks3-rivers-001',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Drainage Basin',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The area of land drained by a river and its tributaries is called a drainage _____.',
    correctAnswer: 'basin',
    explanation: 'A drainage basin is the catchment area where all precipitation flows into a single river system.',
    tags: ['drainage basin', 'hydrology'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-rivers-002',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Drainage Basin',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is a watershed?',
    correctAnswer: 'The boundary between two drainage basins',
    wrongAnswers: ['A building that stores water', 'A type of waterfall', 'The source of a river'],
    explanation: 'A watershed is the high ground that separates one drainage basin from another.',
    tags: ['watershed', 'drainage basin'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-rivers-003',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'River Features',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match the river term to its definition.',
    correctAnswer: ['Source - Where a river starts', 'Mouth - Where a river ends', 'Tributary - A smaller river joining a larger one', 'Confluence - Where two rivers meet'],
    explanation: 'These are key terms describing different parts of a river system.',
    tags: ['river features', 'terminology'],
    yearGroup: [7]
  },
  {
    id: 'geo-ks3-rivers-004',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Erosion',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is hydraulic action?',
    correctAnswer: 'The force of water breaking rock apart',
    wrongAnswers: ['Rocks grinding against each other', 'Chemical dissolving of rock', 'Rocks hitting the river bed'],
    explanation: 'Hydraulic action occurs when the sheer force of water compresses air in cracks, causing rock to break apart.',
    tags: ['erosion', 'hydraulic action'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-rivers-005',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Erosion',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'When rocks and pebbles wear away the river bed by rubbing against it, this is called _____.',
    correctAnswer: 'abrasion',
    explanation: 'Abrasion (also called corrasion) is when the river uses its load like sandpaper to erode the channel.',
    tags: ['erosion', 'abrasion'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-rivers-006',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Erosion',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which type of erosion involves the chemical dissolving of rock?',
    correctAnswer: 'Corrosion (solution)',
    wrongAnswers: ['Attrition', 'Hydraulic action', 'Abrasion'],
    explanation: 'Corrosion occurs when slightly acidic river water dissolves soluble rocks like limestone.',
    tags: ['erosion', 'corrosion'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-rivers-007',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Erosion',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Attrition makes rocks in rivers rounder and smaller over time.',
    correctAnswer: 'True',
    explanation: 'Attrition is when rocks carried by the river bump into each other, breaking off pieces and becoming smoother.',
    tags: ['erosion', 'attrition'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-rivers-008',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Transportation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How does a river transport dissolved minerals?',
    correctAnswer: 'Solution',
    wrongAnswers: ['Traction', 'Saltation', 'Suspension'],
    explanation: 'Solution is the transport of dissolved material invisibly within the water.',
    tags: ['transportation', 'solution'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-rivers-009',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Transportation',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'Large boulders rolling along the river bed are transported by _____.',
    correctAnswer: 'traction',
    explanation: 'Traction is when heavy material is rolled along the river bed by the force of the water.',
    tags: ['transportation', 'traction'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-rivers-010',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Deposition',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'When does a river deposit its load?',
    correctAnswer: 'When the river loses energy and slows down',
    wrongAnswers: ['When the river speeds up', 'When it rains heavily', 'When the river gets deeper'],
    explanation: 'Deposition occurs when a river no longer has enough energy to carry its sediment load.',
    tags: ['deposition'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-rivers-011',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Landforms',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How is a waterfall formed?',
    correctAnswer: 'A river flows over hard rock onto soft rock, which erodes faster',
    wrongAnswers: ['An earthquake creates a cliff', 'Glaciers carve out a steep drop', 'Trees fall and dam the river'],
    explanation: 'Differential erosion of soft rock beneath hard rock creates a step, which develops into a waterfall.',
    tags: ['waterfall', 'landforms'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-rivers-012',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Landforms',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The horseshoe-shaped lake left behind when a meander is cut off is called an _____ lake.',
    correctAnswer: 'oxbow',
    explanation: 'An oxbow lake forms when a river cuts through the narrow neck of a meander, leaving a curved lake.',
    tags: ['oxbow lake', 'meanders'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-rivers-013',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Landforms',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is a floodplain?',
    correctAnswer: 'The flat area of land on either side of a river that floods',
    wrongAnswers: ['A type of aircraft', 'The deepest part of a river', 'A dam built across a river'],
    explanation: 'Floodplains are wide, flat areas formed by deposition during repeated flooding over thousands of years.',
    tags: ['floodplain', 'deposition'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-rivers-014',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Flooding',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which of these increases the risk of flooding?',
    correctAnswer: 'Deforestation in the drainage basin',
    wrongAnswers: ['Planting more trees', 'Building flood barriers', 'Creating wetland areas'],
    explanation: 'Deforestation removes trees that intercept rainfall and slow water flow, increasing surface runoff and flood risk.',
    tags: ['flooding', 'deforestation'],
    yearGroup: [8, 9]
  }
];

// ============================================================================
// COASTS (14 Questions)
// ============================================================================

const coastsQuestions: Question[] = [
  {
    id: 'geo-ks3-coasts-001',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Erosion',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is the main cause of coastal erosion?',
    correctAnswer: 'Wave action',
    wrongAnswers: ['River flow', 'Wind alone', 'Earthquakes'],
    explanation: 'Waves are the primary agent of coastal erosion, constantly attacking the coastline.',
    tags: ['erosion', 'waves'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-coasts-002',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Waves',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is the difference between constructive and destructive waves?',
    correctAnswer: 'Constructive waves build up beaches; destructive waves erode them',
    wrongAnswers: ['Constructive waves are taller', 'Destructive waves only occur in storms', 'There is no difference'],
    explanation: 'Constructive waves have a strong swash that deposits material, while destructive waves have a strong backwash that removes material.',
    tags: ['waves', 'constructive', 'destructive'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-coasts-003',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Waves',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The movement of water up a beach is called the _____.',
    correctAnswer: 'swash',
    explanation: 'The swash is the forward movement of a wave as it breaks and rushes up the beach.',
    tags: ['waves', 'swash'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-coasts-004',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Waves',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The movement of water back down a beach after a wave breaks is called the _____.',
    correctAnswer: 'backwash',
    explanation: 'The backwash is the return flow of water back to the sea under gravity.',
    tags: ['waves', 'backwash'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-coasts-005',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Erosion Processes',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match the coastal erosion process to its description.',
    correctAnswer: ['Hydraulic action - Force of waves compressing air in cracks', 'Abrasion - Rocks thrown against cliff by waves', 'Attrition - Rocks colliding and becoming smaller', 'Corrosion - Chemical dissolving of rock'],
    explanation: 'These four processes work together to erode coastlines.',
    tags: ['erosion', 'processes'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-coasts-006',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Landforms',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How is a headland formed?',
    correctAnswer: 'Soft rock erodes faster than hard rock, leaving the hard rock jutting out',
    wrongAnswers: ['Waves deposit sand in one area', 'Rivers deposit material at the coast', 'Volcanic activity pushes land up'],
    explanation: 'Differential erosion creates headlands where bands of resistant rock remain while softer rock is worn away.',
    tags: ['headland', 'differential erosion'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-coasts-007',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Landforms',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is the correct sequence of erosional features at a headland?',
    correctAnswer: 'Crack, cave, arch, stack, stump',
    wrongAnswers: ['Stack, arch, cave, crack, stump', 'Cave, stack, arch, stump, crack', 'Arch, cave, stack, crack, stump'],
    explanation: 'Erosion progressively enlarges a crack into a cave, then an arch, which collapses to leave a stack, then a stump.',
    tags: ['erosion sequence', 'landforms'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-coasts-008',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Landforms',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'A wave-cut platform is formed at the base of a cliff as it retreats.',
    correctAnswer: 'True',
    explanation: 'As a cliff is eroded at its base and collapses, a flat platform of rock is left behind at sea level.',
    tags: ['wave-cut platform', 'cliff retreat'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-coasts-009',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Transportation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is longshore drift?',
    correctAnswer: 'The movement of sediment along a beach by waves',
    wrongAnswers: ['A type of coastal erosion', 'Fish migration patterns', 'The effect of tides on boats'],
    explanation: 'Longshore drift moves beach material along the coast in a zigzag pattern due to waves approaching at an angle.',
    tags: ['longshore drift', 'transportation'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-coasts-010',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Depositional Landforms',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'A long, narrow ridge of sand or shingle extending from the coast into the sea is called a _____.',
    correctAnswer: 'spit',
    explanation: 'A spit forms when longshore drift deposits material beyond a bend in the coastline.',
    tags: ['spit', 'deposition'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-coasts-011',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Depositional Landforms',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is a bar?',
    correctAnswer: 'A spit that extends across a bay, joining two headlands',
    wrongAnswers: ['A rocky outcrop at sea', 'A deep underwater channel', 'A type of coral reef'],
    explanation: 'A bar forms when a spit grows all the way across a bay, creating a lagoon behind it.',
    tags: ['bar', 'deposition'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-coasts-012',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Coastal Management',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is the purpose of groynes on a beach?',
    correctAnswer: 'To trap sediment and prevent longshore drift',
    wrongAnswers: ['To create waves for surfing', 'To provide fishing platforms', 'To measure wave height'],
    explanation: 'Groynes are wooden or rock barriers that interrupt longshore drift, causing sand to build up.',
    tags: ['coastal management', 'groynes'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-coasts-013',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Coastal Management',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Sea walls are an example of hard engineering coastal defence.',
    correctAnswer: 'True',
    explanation: 'Hard engineering involves building artificial structures like sea walls, groynes, and rock armour.',
    tags: ['hard engineering', 'sea walls'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-coasts-014',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Coastal Management',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which is an example of soft engineering at the coast?',
    correctAnswer: 'Beach nourishment (adding sand to beaches)',
    wrongAnswers: ['Building concrete sea walls', 'Constructing rock armour', 'Installing metal groynes'],
    explanation: 'Soft engineering works with natural processes. Beach nourishment replaces lost sand naturally.',
    tags: ['soft engineering', 'beach nourishment'],
    yearGroup: [8, 9]
  }
];

// ============================================================================
// PLATE TECTONICS (12 Questions)
// ============================================================================

const plateTectonicsQuestions: Question[] = [
  {
    id: 'geo-ks3-tectonics-001',
    subject: 'geography',
    topic: 'Plate Tectonics',
    subtopic: 'Structure of Earth',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What are the four layers of the Earth in order from outside to inside?',
    correctAnswer: 'Crust, mantle, outer core, inner core',
    wrongAnswers: ['Mantle, crust, core, inner core', 'Inner core, outer core, mantle, crust', 'Crust, core, mantle, centre'],
    explanation: 'The Earth has four main layers, with the thin crust on the outside and the solid inner core at the centre.',
    tags: ['earth structure', 'layers'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-tectonics-002',
    subject: 'geography',
    topic: 'Plate Tectonics',
    subtopic: 'Tectonic Plates',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The outer layer of the Earth is broken into large pieces called tectonic _____.',
    correctAnswer: 'plates',
    explanation: 'The lithosphere (crust and upper mantle) is divided into about 15 major tectonic plates.',
    tags: ['tectonic plates'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-tectonics-003',
    subject: 'geography',
    topic: 'Plate Tectonics',
    subtopic: 'Plate Movement',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What causes tectonic plates to move?',
    correctAnswer: 'Convection currents in the mantle',
    wrongAnswers: ['The rotation of the Earth', 'Gravity from the Moon', 'Earthquakes pushing them'],
    explanation: 'Heat from the core creates convection currents in the semi-molten mantle, which drag the plates.',
    tags: ['convection currents', 'plate movement'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-tectonics-004',
    subject: 'geography',
    topic: 'Plate Tectonics',
    subtopic: 'Plate Boundaries',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match the plate boundary type to its description.',
    correctAnswer: ['Divergent - Plates moving apart', 'Convergent - Plates moving together', 'Transform - Plates sliding past each other'],
    explanation: 'The three main types of plate boundary are defined by the relative movement of the plates.',
    tags: ['plate boundaries'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-tectonics-005',
    subject: 'geography',
    topic: 'Plate Tectonics',
    subtopic: 'Earthquakes',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The point on the Earth\'s surface directly above where an earthquake originates is called the _____.',
    correctAnswer: 'epicentre',
    explanation: 'The epicentre is the surface location above the focus (where the earthquake actually starts underground).',
    tags: ['earthquakes', 'epicentre'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-tectonics-006',
    subject: 'geography',
    topic: 'Plate Tectonics',
    subtopic: 'Earthquakes',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What scale is commonly used to measure earthquake magnitude?',
    correctAnswer: 'The Richter scale',
    wrongAnswers: ['The Celsius scale', 'The Beaufort scale', 'The pH scale'],
    explanation: 'The Richter scale measures the energy released by an earthquake, from 1 (minor) to 10 (catastrophic).',
    tags: ['Richter scale', 'measurement'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-tectonics-007',
    subject: 'geography',
    topic: 'Plate Tectonics',
    subtopic: 'Earthquakes',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Most earthquakes occur at tectonic plate boundaries.',
    correctAnswer: 'True',
    explanation: 'The majority of earthquakes occur at plate boundaries where plates interact and create stress in the crust.',
    tags: ['earthquakes', 'plate boundaries'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-tectonics-008',
    subject: 'geography',
    topic: 'Plate Tectonics',
    subtopic: 'Volcanoes',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What type of volcano has steep sides and explosive eruptions?',
    correctAnswer: 'Composite (stratovolcano)',
    wrongAnswers: ['Shield volcano', 'Cinder cone', 'Plateau volcano'],
    explanation: 'Composite volcanoes have thick, viscous lava that cannot flow far, building steep sides and causing explosive eruptions.',
    tags: ['volcanoes', 'composite'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-tectonics-009',
    subject: 'geography',
    topic: 'Plate Tectonics',
    subtopic: 'Volcanoes',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'Molten rock beneath the Earth\'s surface is called _____.',
    correctAnswer: 'magma',
    explanation: 'Magma is molten rock below the surface. When it erupts, it is called lava.',
    tags: ['magma', 'volcanoes'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-tectonics-010',
    subject: 'geography',
    topic: 'Plate Tectonics',
    subtopic: 'Volcanoes',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why do people live near volcanoes despite the danger?',
    correctAnswer: 'Volcanic soil is very fertile for farming',
    wrongAnswers: ['Volcanoes never erupt twice', 'It is cooler near volcanoes', 'There is no other land available'],
    explanation: 'Volcanic ash creates extremely fertile soil, and many areas have geothermal energy and tourism opportunities.',
    tags: ['volcanoes', 'benefits'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-tectonics-011',
    subject: 'geography',
    topic: 'Plate Tectonics',
    subtopic: 'Ring of Fire',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is the Ring of Fire?',
    correctAnswer: 'A zone of frequent earthquakes and volcanoes around the Pacific Ocean',
    wrongAnswers: ['A type of volcanic eruption', 'A fire safety zone', 'A desert region in Africa'],
    explanation: 'The Ring of Fire marks the edges of the Pacific Plate where it meets other plates, causing intense tectonic activity.',
    tags: ['Ring of Fire', 'Pacific'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-tectonics-012',
    subject: 'geography',
    topic: 'Plate Tectonics',
    subtopic: 'Tsunamis',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What can cause a tsunami?',
    correctAnswer: 'An underwater earthquake displacing water',
    wrongAnswers: ['Strong winds', 'Heavy rainfall', 'High tides'],
    explanation: 'Tsunamis are caused by sudden displacement of water, usually from underwater earthquakes, volcanic eruptions, or landslides.',
    tags: ['tsunami', 'earthquakes'],
    yearGroup: [8, 9]
  }
];

// ============================================================================
// ECOSYSTEMS (10 Questions)
// ============================================================================

const ecosystemsQuestions: Question[] = [
  {
    id: 'geo-ks3-ecosystems-001',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Basics',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is an ecosystem?',
    correctAnswer: 'A community of living organisms interacting with their environment',
    wrongAnswers: ['A type of forest', 'Only the animals in an area', 'A weather system'],
    explanation: 'An ecosystem includes all living things (biotic) and non-living things (abiotic) in an area and how they interact.',
    tags: ['ecosystem', 'definition'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-ecosystems-002',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Rainforests',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'Tropical rainforests are located near the _____, where it is hot and wet all year.',
    correctAnswer: 'equator',
    explanation: 'Tropical rainforests are found between the Tropics of Cancer and Capricorn, receiving direct sunlight and high rainfall.',
    tags: ['rainforest', 'location'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-ecosystems-003',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Rainforests',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is the canopy layer of a rainforest?',
    correctAnswer: 'The main layer of treetops forming a continuous cover',
    wrongAnswers: ['The forest floor', 'The layer above all trees', 'The layer of small shrubs'],
    explanation: 'The canopy is the primary layer of the rainforest, 30-45m high, where most wildlife lives.',
    tags: ['rainforest', 'layers'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-ecosystems-004',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Rainforests',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Deforestation of rainforests contributes to climate change.',
    correctAnswer: 'True',
    explanation: 'Trees absorb CO2, so cutting them down releases stored carbon and reduces future absorption, increasing greenhouse gases.',
    tags: ['deforestation', 'climate change'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-ecosystems-005',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Deserts',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How is a desert defined?',
    correctAnswer: 'An area receiving less than 250mm of rainfall per year',
    wrongAnswers: ['Any area covered in sand', 'An area with no plants', 'Any hot region'],
    explanation: 'Deserts are defined by low precipitation. They can be hot (Sahara) or cold (Antarctica).',
    tags: ['desert', 'definition'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-ecosystems-006',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Deserts',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How do cacti survive in desert environments?',
    correctAnswer: 'They have thick stems to store water and spines instead of leaves',
    wrongAnswers: ['They have large leaves to catch rain', 'They only grow in oases', 'They get water from dew'],
    explanation: 'Cacti have adapted to store water in their stems and have spines to reduce water loss and deter animals.',
    tags: ['desert', 'adaptation'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-ecosystems-007',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Food Chains',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'Organisms that produce their own food through photosynthesis are called _____.',
    correctAnswer: 'producers',
    explanation: 'Producers (mainly plants) form the base of food chains by converting sunlight into energy.',
    tags: ['food chain', 'producers'],
    yearGroup: [7]
  },
  {
    id: 'geo-ks3-ecosystems-008',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Food Chains',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is a food web?',
    correctAnswer: 'Multiple interconnected food chains in an ecosystem',
    wrongAnswers: ['A single food chain', 'A spider\'s web for catching food', 'A type of fishing net'],
    explanation: 'A food web shows how many food chains are linked together, as most organisms eat more than one type of food.',
    tags: ['food web', 'ecosystem'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-ecosystems-009',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Biodiversity',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The variety of plant and animal life in an area is called _____.',
    correctAnswer: 'biodiversity',
    explanation: 'Biodiversity measures the variety of species in an ecosystem. Rainforests have the highest biodiversity.',
    tags: ['biodiversity'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-ecosystems-010',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Conservation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why is it important to protect ecosystems?',
    correctAnswer: 'They provide oxygen, food, medicine, and regulate climate',
    wrongAnswers: ['Only to protect rare animals', 'It is not important', 'Just for tourism'],
    explanation: 'Ecosystems provide essential services including clean air, water, food, medicines, and climate regulation.',
    tags: ['conservation', 'ecosystem services'],
    yearGroup: [8, 9]
  }
];

// ============================================================================
// POPULATION AND MIGRATION (8 Questions)
// ============================================================================

const populationQuestions: Question[] = [
  {
    id: 'geo-ks3-population-001',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Distribution',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What does population density measure?',
    correctAnswer: 'The number of people living per square kilometre',
    wrongAnswers: ['The total population of a country', 'How fast the population is growing', 'The age of the population'],
    explanation: 'Population density shows how crowded an area is by dividing population by area.',
    tags: ['population density'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-population-002',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Distribution',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Population distribution is even across the world.',
    correctAnswer: 'False',
    explanation: 'Population is unevenly distributed due to factors like climate, resources, jobs, and physical geography.',
    tags: ['population distribution'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-population-003',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Growth',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The rapid increase in world population since the 1800s is called the population _____.',
    correctAnswer: 'explosion',
    explanation: 'The population explosion resulted from improved medicine, sanitation, and food production reducing death rates.',
    tags: ['population growth', 'population explosion'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-population-004',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Migration',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is the difference between immigration and emigration?',
    correctAnswer: 'Immigration is moving into a country; emigration is moving out',
    wrongAnswers: ['They mean the same thing', 'Immigration is temporary; emigration is permanent', 'Immigration is forced; emigration is voluntary'],
    explanation: 'Immigration refers to people entering a new country to live, while emigration is leaving one\'s home country.',
    tags: ['migration', 'immigration', 'emigration'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-population-005',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Migration',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match the migration term to its meaning.',
    correctAnswer: ['Push factor - A reason to leave a place', 'Pull factor - A reason to move to a place', 'Refugee - Someone fleeing persecution or war', 'Economic migrant - Someone moving for work or better pay'],
    explanation: 'Migration is influenced by push factors (negatives about current location) and pull factors (positives about destination).',
    tags: ['migration', 'push pull factors'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-population-006',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Migration',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which is an example of a push factor for migration?',
    correctAnswer: 'Unemployment in your home country',
    wrongAnswers: ['Better healthcare in another country', 'Higher wages abroad', 'Family already living abroad'],
    explanation: 'Push factors are negative aspects that encourage people to leave, like unemployment, war, or natural disasters.',
    tags: ['push factors', 'migration'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-population-007',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Structure',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'A graph showing the age and gender structure of a population is called a population _____.',
    correctAnswer: 'pyramid',
    explanation: 'Population pyramids show the distribution of different age groups in males and females.',
    tags: ['population pyramid', 'age structure'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-population-008',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Structure',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What does a wide base on a population pyramid indicate?',
    correctAnswer: 'High birth rate with many young people',
    wrongAnswers: ['Low birth rate', 'An ageing population', 'Equal numbers at all ages'],
    explanation: 'A wide base shows many young people, typical of developing countries with high birth rates.',
    tags: ['population pyramid', 'birth rate'],
    yearGroup: [8, 9]
  }
];

// ============================================================================
// SETTLEMENTS AND URBANISATION (8 Questions)
// ============================================================================

const settlementsQuestions: Question[] = [
  {
    id: 'geo-ks3-settlements-001',
    subject: 'geography',
    topic: 'Settlements',
    subtopic: 'Site Factors',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is meant by the site of a settlement?',
    correctAnswer: 'The actual land on which a settlement is built',
    wrongAnswers: ['The area around a settlement', 'The roads leading to a settlement', 'The size of a settlement'],
    explanation: 'Site refers to the physical characteristics of the land where a settlement was built.',
    tags: ['site', 'settlement'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-settlements-002',
    subject: 'geography',
    topic: 'Settlements',
    subtopic: 'Site Factors',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why were many early settlements built near rivers?',
    correctAnswer: 'For water supply, transport, defence, and fertile land',
    wrongAnswers: ['Because rivers are beautiful', 'To catch fish only', 'Rivers were accidental locations'],
    explanation: 'Rivers provided drinking water, irrigation, transport routes, natural defences, and fertile floodplains.',
    tags: ['rivers', 'settlement location'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-settlements-003',
    subject: 'geography',
    topic: 'Settlements',
    subtopic: 'Settlement Hierarchy',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is the correct order of settlement sizes from smallest to largest?',
    correctAnswer: 'Hamlet, village, town, city',
    wrongAnswers: ['Village, hamlet, town, city', 'City, town, village, hamlet', 'Hamlet, town, village, city'],
    explanation: 'The settlement hierarchy ranks settlements by population and services, from hamlet to city.',
    tags: ['settlement hierarchy', 'size'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-settlements-004',
    subject: 'geography',
    topic: 'Settlements',
    subtopic: 'Functions',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The main purpose or economic activity of a settlement is called its _____.',
    correctAnswer: 'function',
    explanation: 'Settlement functions include residential, industrial, commercial, administrative, and tourist.',
    tags: ['function', 'settlement'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-settlements-005',
    subject: 'geography',
    topic: 'Settlements',
    subtopic: 'Urbanisation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is urbanisation?',
    correctAnswer: 'The growth in the proportion of people living in urban areas',
    wrongAnswers: ['Building more roads', 'People moving to the countryside', 'Making cities cleaner'],
    explanation: 'Urbanisation is the process of population shift from rural to urban areas, increasing city populations.',
    tags: ['urbanisation'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-settlements-006',
    subject: 'geography',
    topic: 'Settlements',
    subtopic: 'Urbanisation',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'More than half of the world\'s population now lives in urban areas.',
    correctAnswer: 'True',
    explanation: 'Since 2007, more than 50% of the global population lives in towns and cities, and this continues to grow.',
    tags: ['urbanisation', 'statistics'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-settlements-007',
    subject: 'geography',
    topic: 'Settlements',
    subtopic: 'Urban Problems',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is a shanty town (informal settlement)?',
    correctAnswer: 'An unplanned area of poorly-built housing with few services',
    wrongAnswers: ['A historic part of a city', 'A wealthy suburb', 'A government housing project'],
    explanation: 'Shanty towns develop when rapid urbanisation outpaces formal housing, often lacking sanitation and utilities.',
    tags: ['shanty town', 'informal settlement'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-settlements-008',
    subject: 'geography',
    topic: 'Settlements',
    subtopic: 'Land Use',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The centre of a city with shops, offices, and entertainment is called the _____ (abbreviation).',
    correctAnswer: 'CBD',
    explanation: 'CBD stands for Central Business District, the commercial and business centre of a city.',
    tags: ['CBD', 'land use'],
    yearGroup: [8, 9]
  }
];

// ============================================================================
// MAP SKILLS (10 Questions)
// ============================================================================

const mapSkillsQuestions: Question[] = [
  {
    id: 'geo-ks3-maps-001',
    subject: 'geography',
    topic: 'Map Skills',
    subtopic: 'Grid References',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In a four-figure grid reference, which numbers come first?',
    correctAnswer: 'The eastings (horizontal, along the bottom)',
    wrongAnswers: ['The northings (vertical, up the side)', 'It does not matter', 'The largest number'],
    explanation: 'Remember "along the corridor and up the stairs" - eastings first, then northings.',
    tags: ['grid reference', 'four-figure'],
    yearGroup: [7]
  },
  {
    id: 'geo-ks3-maps-002',
    subject: 'geography',
    topic: 'Map Skills',
    subtopic: 'Grid References',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'A six-figure grid reference locates a point within a _____ metre square.',
    correctAnswer: '100',
    explanation: 'Four-figure grid references locate a 1km square; six-figure references are ten times more precise at 100m.',
    tags: ['grid reference', 'six-figure'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-maps-003',
    subject: 'geography',
    topic: 'Map Skills',
    subtopic: 'Scale',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'On a 1:50,000 map, what does 2cm on the map represent in real life?',
    correctAnswer: '1 kilometre',
    wrongAnswers: ['50 metres', '500 metres', '2 kilometres'],
    explanation: 'On a 1:50,000 map, 1cm = 500m, so 2cm = 1,000m = 1km.',
    tags: ['scale', 'calculation'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-maps-004',
    subject: 'geography',
    topic: 'Map Skills',
    subtopic: 'Scale',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'A 1:25,000 map shows more detail than a 1:50,000 map.',
    correctAnswer: 'True',
    explanation: 'A larger scale (1:25,000) means objects are shown larger, allowing more detail to be included.',
    tags: ['scale', 'detail'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-maps-005',
    subject: 'geography',
    topic: 'Map Skills',
    subtopic: 'Contours',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What do contour lines on a map show?',
    correctAnswer: 'Height above sea level and the shape of the land',
    wrongAnswers: ['Rivers and lakes', 'Roads and paths', 'Country boundaries'],
    explanation: 'Contour lines join points of equal height, showing the relief (shape) of the land.',
    tags: ['contours', 'relief'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-maps-006',
    subject: 'geography',
    topic: 'Map Skills',
    subtopic: 'Contours',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What does it mean when contour lines are close together?',
    correctAnswer: 'The land is steep',
    wrongAnswers: ['The land is flat', 'There is a river', 'The land is low'],
    explanation: 'Close contour lines indicate a rapid change in height over a short distance, meaning steep terrain.',
    tags: ['contours', 'gradient'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-maps-007',
    subject: 'geography',
    topic: 'Map Skills',
    subtopic: 'Direction',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'There are _____ points on a compass.',
    correctAnswer: '8',
    hint: 'N, NE, E, SE, S, SW, W, NW',
    explanation: 'The eight compass points are: North, North-East, East, South-East, South, South-West, West, North-West.',
    tags: ['compass', 'direction'],
    yearGroup: [7]
  },
  {
    id: 'geo-ks3-maps-008',
    subject: 'geography',
    topic: 'Map Skills',
    subtopic: 'Symbols',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'On an OS map, what does a blue line usually represent?',
    correctAnswer: 'A river or stream',
    wrongAnswers: ['A main road', 'A railway', 'A footpath'],
    explanation: 'Blue is conventionally used for water features including rivers, streams, lakes, and the sea.',
    tags: ['symbols', 'water'],
    yearGroup: [7]
  },
  {
    id: 'geo-ks3-maps-009',
    subject: 'geography',
    topic: 'Map Skills',
    subtopic: 'Distance',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'On a 1:25,000 map, how many centimetres represent 1 kilometre?',
    correctAnswer: 4,
    explanation: 'On a 1:25,000 map, 1cm = 250m, so 1km (1000m) = 4cm.',
    tags: ['scale', 'distance'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-maps-010',
    subject: 'geography',
    topic: 'Map Skills',
    subtopic: 'Cross-Sections',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is a cross-section of a map?',
    correctAnswer: 'A side view showing the shape of the land along a line',
    wrongAnswers: ['A map cut in half', 'An aerial photograph', 'A road map'],
    explanation: 'A cross-section shows the profile of the land as if you cut through it, displaying hills and valleys.',
    tags: ['cross-section', 'relief'],
    yearGroup: [8, 9]
  }
];

// ============================================================================
// SUSTAINABILITY (6 Questions)
// ============================================================================

const sustainabilityQuestions: Question[] = [
  {
    id: 'geo-ks3-sustain-001',
    subject: 'geography',
    topic: 'Sustainability',
    subtopic: 'Definition',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What does sustainable development mean?',
    correctAnswer: 'Meeting present needs without compromising future generations',
    wrongAnswers: ['Building more houses', 'Using all resources now', 'Stopping all development'],
    explanation: 'Sustainable development balances economic growth, environmental protection, and social well-being for the long term.',
    tags: ['sustainability', 'definition'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-sustain-002',
    subject: 'geography',
    topic: 'Sustainability',
    subtopic: 'Resources',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which of these is a renewable resource?',
    correctAnswer: 'Solar energy',
    wrongAnswers: ['Coal', 'Oil', 'Natural gas'],
    explanation: 'Renewable resources can be replenished naturally. Solar energy from the sun is unlimited.',
    tags: ['renewable', 'resources'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-sustain-003',
    subject: 'geography',
    topic: 'Sustainability',
    subtopic: 'Resources',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'Resources that will run out and cannot be replaced are called _____ resources.',
    correctAnswer: 'non-renewable',
    explanation: 'Non-renewable resources like fossil fuels take millions of years to form and will eventually be exhausted.',
    tags: ['non-renewable', 'resources'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-sustain-004',
    subject: 'geography',
    topic: 'Sustainability',
    subtopic: 'Carbon Footprint',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is a carbon footprint?',
    correctAnswer: 'The total greenhouse gases produced by a person or activity',
    wrongAnswers: ['A footprint made of charcoal', 'The carbon in your body', 'A type of fossil'],
    explanation: 'A carbon footprint measures the environmental impact of activities in terms of carbon dioxide emissions.',
    tags: ['carbon footprint', 'emissions'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-sustain-005',
    subject: 'geography',
    topic: 'Sustainability',
    subtopic: 'Actions',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Recycling helps reduce the amount of waste going to landfill.',
    correctAnswer: 'True',
    explanation: 'Recycling converts waste materials into new products, reducing landfill use and conserving resources.',
    tags: ['recycling', 'waste'],
    yearGroup: [7, 8]
  },
  {
    id: 'geo-ks3-sustain-006',
    subject: 'geography',
    topic: 'Sustainability',
    subtopic: 'Actions',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What does "Reduce, Reuse, Recycle" encourage us to do?',
    correctAnswer: 'Minimise waste by using fewer resources and recycling materials',
    wrongAnswers: ['Buy more products', 'Throw everything away', 'Use more plastic'],
    explanation: 'The three Rs prioritise reducing consumption first, then reusing items, and finally recycling.',
    tags: ['three Rs', 'waste reduction'],
    yearGroup: [7, 8]
  }
];

// ============================================================================
// DEVELOPMENT (6 Questions)
// ============================================================================

const developmentQuestions: Question[] = [
  {
    id: 'geo-ks3-develop-001',
    subject: 'geography',
    topic: 'Development',
    subtopic: 'Indicators',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What does GDP per capita measure?',
    correctAnswer: 'The average wealth per person in a country',
    wrongAnswers: ['The total size of a country', 'The population of a country', 'The area of farmland'],
    explanation: 'GDP (Gross Domestic Product) per capita divides a country\'s total economic output by its population.',
    tags: ['GDP', 'indicators'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-develop-002',
    subject: 'geography',
    topic: 'Development',
    subtopic: 'Indicators',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The _____ Development Index (HDI) measures health, education, and income.',
    correctAnswer: 'Human',
    explanation: 'The Human Development Index combines life expectancy, education, and GNI to rank countries.',
    tags: ['HDI', 'indicators'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-develop-003',
    subject: 'geography',
    topic: 'Development',
    subtopic: 'Classification',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match the development classification to its description.',
    correctAnswer: ['HIC - High Income Country with advanced development', 'LIC - Low Income Country with lower development', 'NEE - Newly Emerging Economy with rapid growth'],
    explanation: 'Countries are classified by their level of economic development and income.',
    tags: ['classification', 'HIC', 'LIC', 'NEE'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-develop-004',
    subject: 'geography',
    topic: 'Development',
    subtopic: 'Quality of Life',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Life expectancy is generally higher in more developed countries.',
    correctAnswer: 'True',
    explanation: 'Better healthcare, nutrition, and living conditions in developed countries lead to longer life expectancy.',
    tags: ['life expectancy', 'development'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-develop-005',
    subject: 'geography',
    topic: 'Development',
    subtopic: 'Causes',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which factor can slow down a country\'s development?',
    correctAnswer: 'Conflict and political instability',
    wrongAnswers: ['Good education system', 'Stable government', 'Investment in healthcare'],
    explanation: 'War and instability disrupt economies, destroy infrastructure, and prevent investment and progress.',
    tags: ['barriers', 'development'],
    yearGroup: [8, 9]
  },
  {
    id: 'geo-ks3-develop-006',
    subject: 'geography',
    topic: 'Development',
    subtopic: 'Aid',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is international aid?',
    correctAnswer: 'Help given by one country or organisation to another',
    wrongAnswers: ['Money borrowed from banks', 'Trade between countries', 'Taxes paid by citizens'],
    explanation: 'Aid can be money, goods, or expertise given to help countries develop or respond to emergencies.',
    tags: ['aid', 'assistance'],
    yearGroup: [8, 9]
  }
];

// ============================================================================
// KS3 GEOGRAPHY TERMS
// ============================================================================

export const ks3GeographyTerms: TermDefinition[] = [
  {
    id: 'geo-ks3-term-001',
    subject: 'geography',
    topic: 'Weather and Climate',
    difficulty: 'ks3',
    term: 'Climate',
    definition: 'The average weather conditions of a place measured over 30 or more years',
    example: 'The UK has a temperate maritime climate with mild temperatures year-round',
    tags: ['climate', 'weather']
  },
  {
    id: 'geo-ks3-term-002',
    subject: 'geography',
    topic: 'Weather and Climate',
    difficulty: 'ks3',
    term: 'Precipitation',
    definition: 'Any form of water falling from the atmosphere, including rain, snow, sleet, and hail',
    example: 'Annual precipitation in the Amazon rainforest can exceed 2000mm',
    tags: ['precipitation', 'weather']
  },
  {
    id: 'geo-ks3-term-003',
    subject: 'geography',
    topic: 'Rivers',
    difficulty: 'ks3',
    term: 'Drainage Basin',
    definition: 'The area of land drained by a river and all its tributaries',
    example: 'The Amazon drainage basin covers about 7 million square kilometres',
    tags: ['drainage basin', 'hydrology']
  },
  {
    id: 'geo-ks3-term-004',
    subject: 'geography',
    topic: 'Rivers',
    difficulty: 'ks3',
    term: 'Erosion',
    definition: 'The wearing away and removal of rock, soil, and other materials by natural forces',
    example: 'River erosion created the Grand Canyon over millions of years',
    tags: ['erosion', 'processes']
  },
  {
    id: 'geo-ks3-term-005',
    subject: 'geography',
    topic: 'Rivers',
    difficulty: 'ks3',
    term: 'Deposition',
    definition: 'The dropping of material that has been transported by a river when it loses energy',
    example: 'Rivers deposit silt on floodplains during floods',
    tags: ['deposition', 'processes']
  },
  {
    id: 'geo-ks3-term-006',
    subject: 'geography',
    topic: 'Coasts',
    difficulty: 'ks3',
    term: 'Longshore Drift',
    definition: 'The movement of sediment along a coast by waves approaching at an angle',
    example: 'Longshore drift has built up Spurn Point spit on the Yorkshire coast',
    tags: ['longshore drift', 'transportation']
  },
  {
    id: 'geo-ks3-term-007',
    subject: 'geography',
    topic: 'Plate Tectonics',
    difficulty: 'ks3',
    term: 'Tectonic Plate',
    definition: 'A large section of the Earth\'s lithosphere that moves, floats, and sometimes fractures',
    example: 'The Pacific Plate is the largest tectonic plate on Earth',
    tags: ['tectonic plate', 'tectonics']
  },
  {
    id: 'geo-ks3-term-008',
    subject: 'geography',
    topic: 'Plate Tectonics',
    difficulty: 'ks3',
    term: 'Epicentre',
    definition: 'The point on the Earth\'s surface directly above the focus of an earthquake',
    example: 'The epicentre of the 2011 Japan earthquake was off the coast of Sendai',
    tags: ['epicentre', 'earthquakes']
  },
  {
    id: 'geo-ks3-term-009',
    subject: 'geography',
    topic: 'Ecosystems',
    difficulty: 'ks3',
    term: 'Ecosystem',
    definition: 'A community of living organisms interacting with each other and their physical environment',
    example: 'A pond ecosystem includes fish, plants, insects, and their aquatic environment',
    tags: ['ecosystem', 'ecology']
  },
  {
    id: 'geo-ks3-term-010',
    subject: 'geography',
    topic: 'Ecosystems',
    difficulty: 'ks3',
    term: 'Biodiversity',
    definition: 'The variety of plant and animal life in a particular habitat or ecosystem',
    example: 'Tropical rainforests have the highest biodiversity of any ecosystem',
    tags: ['biodiversity', 'ecology']
  },
  {
    id: 'geo-ks3-term-011',
    subject: 'geography',
    topic: 'Population',
    difficulty: 'ks3',
    term: 'Population Density',
    definition: 'The number of people living in a given area, usually per square kilometre',
    example: 'Bangladesh has a very high population density of over 1,200 people per km squared',
    tags: ['population density', 'population']
  },
  {
    id: 'geo-ks3-term-012',
    subject: 'geography',
    topic: 'Population',
    difficulty: 'ks3',
    term: 'Migration',
    definition: 'The movement of people from one place to another with the intention of settling',
    example: 'Rural-urban migration occurs when people move from countryside to cities',
    tags: ['migration', 'population']
  },
  {
    id: 'geo-ks3-term-013',
    subject: 'geography',
    topic: 'Settlements',
    difficulty: 'ks3',
    term: 'Urbanisation',
    definition: 'The growth in the proportion of a population living in urban areas',
    example: 'Urbanisation in China has moved millions from rural areas to cities',
    tags: ['urbanisation', 'settlements']
  },
  {
    id: 'geo-ks3-term-014',
    subject: 'geography',
    topic: 'Settlements',
    difficulty: 'ks3',
    term: 'CBD (Central Business District)',
    definition: 'The commercial and business centre of a city with shops, offices, and services',
    example: 'The City of London is the CBD of Greater London',
    tags: ['CBD', 'urban']
  },
  {
    id: 'geo-ks3-term-015',
    subject: 'geography',
    topic: 'Map Skills',
    difficulty: 'ks3',
    term: 'Contour Line',
    definition: 'A line on a map connecting points of equal height above sea level',
    example: 'Closely spaced contour lines indicate steep terrain',
    tags: ['contour', 'maps']
  },
  {
    id: 'geo-ks3-term-016',
    subject: 'geography',
    topic: 'Map Skills',
    difficulty: 'ks3',
    term: 'Grid Reference',
    definition: 'A system of coordinates used to locate places on a map',
    example: 'The six-figure grid reference 123456 locates a 100m square on the map',
    tags: ['grid reference', 'maps']
  },
  {
    id: 'geo-ks3-term-017',
    subject: 'geography',
    topic: 'Sustainability',
    difficulty: 'ks3',
    term: 'Sustainable Development',
    definition: 'Development that meets present needs without compromising the ability of future generations to meet their own needs',
    example: 'Using renewable energy is an example of sustainable development',
    tags: ['sustainability', 'development']
  },
  {
    id: 'geo-ks3-term-018',
    subject: 'geography',
    topic: 'Sustainability',
    difficulty: 'ks3',
    term: 'Renewable Resource',
    definition: 'A natural resource that can be replenished naturally over time',
    example: 'Wind power is a renewable resource that will never run out',
    tags: ['renewable', 'resources']
  },
  {
    id: 'geo-ks3-term-019',
    subject: 'geography',
    topic: 'Development',
    difficulty: 'ks3',
    term: 'HDI (Human Development Index)',
    definition: 'A measure of development combining life expectancy, education, and income indicators',
    example: 'Norway consistently has one of the highest HDI scores in the world',
    tags: ['HDI', 'development']
  },
  {
    id: 'geo-ks3-term-020',
    subject: 'geography',
    topic: 'Development',
    difficulty: 'ks3',
    term: 'GDP (Gross Domestic Product)',
    definition: 'The total value of goods and services produced by a country in a year',
    example: 'The United States has the largest GDP in the world',
    tags: ['GDP', 'economics']
  }
];

// ============================================================================
// EXPORT ALL QUESTIONS
// ============================================================================

export const ks3GeographyQuestions: Question[] = [
  ...weatherAndClimateQuestions,
  ...riversQuestions,
  ...coastsQuestions,
  ...plateTectonicsQuestions,
  ...ecosystemsQuestions,
  ...populationQuestions,
  ...settlementsQuestions,
  ...mapSkillsQuestions,
  ...sustainabilityQuestions,
  ...developmentQuestions
];
