import { Question, TermDefinition } from '../types';

// ============================================
// PHYSICAL GEOGRAPHY QUESTIONS
// ============================================

// Tectonic Hazards Questions
const tectonicHazardsQuestions: Question[] = [
  {
    id: 'geo-gcse-tect-001',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Plate Boundaries',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What type of plate boundary occurs where two plates move apart?',
    correctAnswer: 'Divergent (constructive)',
    wrongAnswers: ['Convergent (destructive)', 'Transform (conservative)', 'Subduction'],
    explanation: 'Divergent or constructive boundaries occur where plates move apart, creating new crust.',
    tags: ['plate tectonics', 'boundaries']
  },
  {
    id: 'geo-gcse-tect-002',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Plate Boundaries',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What forms at a convergent boundary where oceanic crust meets continental crust?',
    correctAnswer: 'Subduction zone and ocean trench',
    wrongAnswers: ['Mid-ocean ridge', 'Rift valley', 'Transform fault'],
    explanation: 'The denser oceanic crust subducts beneath the lighter continental crust, forming a trench.',
    tags: ['plate tectonics', 'subduction']
  },
  {
    id: 'geo-gcse-tect-003',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Earthquakes',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The point on the Earth\'s surface directly above the focus of an earthquake is called the _____.',
    correctAnswer: 'epicentre',
    tags: ['earthquakes', 'terminology']
  },
  {
    id: 'geo-gcse-tect-004',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Earthquakes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which scale measures earthquake magnitude based on ground motion recorded by seismographs?',
    correctAnswer: 'Richter scale',
    wrongAnswers: ['Mercalli scale', 'Beaufort scale', 'Saffir-Simpson scale'],
    tags: ['earthquakes', 'measurement']
  },
  {
    id: 'geo-gcse-tect-005',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Case Study - Haiti',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'In what year did the devastating earthquake strike Haiti, killing over 200,000 people?',
    correctAnswer: 2010,
    explanation: 'The 2010 Haiti earthquake measured 7.0 magnitude and caused catastrophic damage.',
    tags: ['case study', 'Haiti', 'LIC']
  },
  {
    id: 'geo-gcse-tect-006',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Volcanoes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What type of volcano has gentle slopes and is formed from fluid lava?',
    correctAnswer: 'Shield volcano',
    wrongAnswers: ['Composite/stratovolcano', 'Cinder cone', 'Lava dome'],
    tags: ['volcanoes', 'types']
  },
  {
    id: 'geo-gcse-tect-007',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Volcanoes',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Composite volcanoes are typically found at destructive plate boundaries.',
    correctAnswer: 'True',
    explanation: 'Composite volcanoes form at destructive boundaries where magma rises through subduction.',
    tags: ['volcanoes', 'plate boundaries']
  },
  {
    id: 'geo-gcse-tect-008',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Management',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which of these is a method of predicting volcanic eruptions?',
    correctAnswer: 'Monitoring ground deformation using tiltmeters',
    wrongAnswers: ['Measuring ocean temperatures', 'Tracking bird migration', 'Analysing soil nutrients'],
    tags: ['management', 'prediction', 'volcanoes']
  },
  {
    id: 'geo-gcse-tect-009',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Case Study - Japan',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What secondary hazard followed the 2011 Tohoku earthquake in Japan?',
    correctAnswer: 'Tsunami and nuclear disaster at Fukushima',
    wrongAnswers: ['Drought and famine', 'Sandstorms', 'Flooding from heavy rain'],
    tags: ['case study', 'Japan', 'HIC', 'tsunami']
  },
  {
    id: 'geo-gcse-tect-010',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Plate Movement',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What drives the movement of tectonic plates?',
    correctAnswer: 'Convection currents in the mantle',
    wrongAnswers: ['Gravity from the Moon', 'Wind patterns', 'Ocean currents'],
    tags: ['plate tectonics', 'convection']
  }
];

// Weather Hazards Questions
const weatherHazardsQuestions: Question[] = [
  {
    id: 'geo-gcse-weather-001',
    subject: 'geography',
    topic: 'Weather Hazards',
    subtopic: 'Tropical Storms',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What minimum sea surface temperature is needed for tropical storms to form?',
    correctAnswer: '27 degrees Celsius',
    wrongAnswers: ['15 degrees Celsius', '20 degrees Celsius', '35 degrees Celsius'],
    tags: ['tropical storms', 'formation']
  },
  {
    id: 'geo-gcse-weather-002',
    subject: 'geography',
    topic: 'Weather Hazards',
    subtopic: 'Tropical Storms',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The calm centre of a tropical storm is called the _____.',
    correctAnswer: 'eye',
    tags: ['tropical storms', 'structure']
  },
  {
    id: 'geo-gcse-weather-003',
    subject: 'geography',
    topic: 'Weather Hazards',
    subtopic: 'Tropical Storms',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the Saffir-Simpson scale used to measure?',
    correctAnswer: 'Hurricane intensity based on wind speed',
    wrongAnswers: ['Earthquake magnitude', 'Tornado damage', 'Flood depth'],
    tags: ['tropical storms', 'measurement']
  },
  {
    id: 'geo-gcse-weather-004',
    subject: 'geography',
    topic: 'Weather Hazards',
    subtopic: 'Tropical Storms',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Tropical storms rotate clockwise in the Northern Hemisphere.',
    correctAnswer: 'False',
    explanation: 'Due to the Coriolis effect, tropical storms rotate anticlockwise in the Northern Hemisphere.',
    tags: ['tropical storms', 'Coriolis effect']
  },
  {
    id: 'geo-gcse-weather-005',
    subject: 'geography',
    topic: 'Weather Hazards',
    subtopic: 'Case Study - Typhoon Haiyan',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'In what year did Typhoon Haiyan devastate the Philippines?',
    correctAnswer: 2013,
    tags: ['case study', 'Philippines', 'typhoon']
  },
  {
    id: 'geo-gcse-weather-006',
    subject: 'geography',
    topic: 'Weather Hazards',
    subtopic: 'UK Weather',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What type of weather system brings wet and windy conditions to the UK?',
    correctAnswer: 'Low pressure system (depression)',
    wrongAnswers: ['High pressure system (anticyclone)', 'Tropical cyclone', 'Monsoon'],
    tags: ['UK weather', 'depressions']
  },
  {
    id: 'geo-gcse-weather-007',
    subject: 'geography',
    topic: 'Weather Hazards',
    subtopic: 'UK Weather',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which UK event in winter 2013-14 caused widespread flooding in Somerset Levels?',
    correctAnswer: 'Prolonged heavy rainfall and storms',
    wrongAnswers: ['Volcanic ash cloud', 'Severe drought', 'Earthquake'],
    tags: ['UK weather', 'flooding', 'case study']
  },
  {
    id: 'geo-gcse-weather-008',
    subject: 'geography',
    topic: 'Weather Hazards',
    subtopic: 'UK Weather',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The UK experiences extreme weather events more frequently due to its position where _____ air masses meet.',
    correctAnswer: 'polar and tropical',
    tags: ['UK weather', 'air masses']
  },
  {
    id: 'geo-gcse-weather-009',
    subject: 'geography',
    topic: 'Weather Hazards',
    subtopic: 'Management',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match the management strategy to its type.',
    correctAnswer: ['Planning - Building regulations', 'Prediction - Satellite tracking', 'Protection - Sea walls'],
    tags: ['management', 'strategies']
  },
  {
    id: 'geo-gcse-weather-010',
    subject: 'geography',
    topic: 'Weather Hazards',
    subtopic: 'Tropical Storms',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why do tropical storms lose strength when they move over land?',
    correctAnswer: 'They lose their warm water energy source and encounter friction',
    wrongAnswers: ['Land heats up faster than water', 'Mountains block the wind', 'People evacuate reducing casualties'],
    tags: ['tropical storms', 'weakening']
  }
];

// Climate Change Questions
const climateChangeQuestions: Question[] = [
  {
    id: 'geo-gcse-climate-001',
    subject: 'geography',
    topic: 'Climate Change',
    subtopic: 'Causes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which greenhouse gas is primarily responsible for human-induced climate change?',
    correctAnswer: 'Carbon dioxide (CO2)',
    wrongAnswers: ['Oxygen', 'Nitrogen', 'Argon'],
    tags: ['greenhouse gases', 'causes']
  },
  {
    id: 'geo-gcse-climate-002',
    subject: 'geography',
    topic: 'Climate Change',
    subtopic: 'Natural Causes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which natural factor affects global temperatures over cycles of approximately 100,000 years?',
    correctAnswer: 'Milankovitch cycles (orbital changes)',
    wrongAnswers: ['Volcanic eruptions', 'Ocean currents', 'Sunspot activity'],
    tags: ['natural causes', 'orbital changes']
  },
  {
    id: 'geo-gcse-climate-003',
    subject: 'geography',
    topic: 'Climate Change',
    subtopic: 'Evidence',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Scientists analyse _____ cores from glaciers to study past atmospheric conditions.',
    correctAnswer: 'ice',
    tags: ['evidence', 'ice cores']
  },
  {
    id: 'geo-gcse-climate-004',
    subject: 'geography',
    topic: 'Climate Change',
    subtopic: 'Effects',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Rising sea levels are caused only by melting ice caps.',
    correctAnswer: 'False',
    explanation: 'Sea levels also rise due to thermal expansion as ocean water warms and expands.',
    tags: ['effects', 'sea level rise']
  },
  {
    id: 'geo-gcse-climate-005',
    subject: 'geography',
    topic: 'Climate Change',
    subtopic: 'Effects',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How might climate change affect UK agriculture?',
    correctAnswer: 'Longer growing seasons but more extreme weather events',
    wrongAnswers: ['Only negative impacts like crop failure', 'No significant changes expected', 'Complete loss of farming'],
    tags: ['effects', 'UK', 'agriculture']
  },
  {
    id: 'geo-gcse-climate-006',
    subject: 'geography',
    topic: 'Climate Change',
    subtopic: 'Responses',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is carbon capture and storage (CCS)?',
    correctAnswer: 'Capturing CO2 emissions and storing them underground',
    wrongAnswers: ['Planting more trees', 'Using renewable energy', 'Reducing car use'],
    tags: ['mitigation', 'technology']
  },
  {
    id: 'geo-gcse-climate-007',
    subject: 'geography',
    topic: 'Climate Change',
    subtopic: 'Responses',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the difference between mitigation and adaptation in climate change response?',
    correctAnswer: 'Mitigation reduces causes; adaptation adjusts to effects',
    wrongAnswers: ['They mean the same thing', 'Mitigation is local; adaptation is global', 'Adaptation reduces causes; mitigation adjusts to effects'],
    tags: ['responses', 'mitigation', 'adaptation']
  },
  {
    id: 'geo-gcse-climate-008',
    subject: 'geography',
    topic: 'Climate Change',
    subtopic: 'International Agreements',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'In what year was the Paris Agreement on climate change signed?',
    correctAnswer: 2015,
    tags: ['international', 'Paris Agreement']
  },
  {
    id: 'geo-gcse-climate-009',
    subject: 'geography',
    topic: 'Climate Change',
    subtopic: 'Effects',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a positive feedback loop in climate change?',
    correctAnswer: 'A process that amplifies the original change',
    wrongAnswers: ['A good outcome of climate change', 'A process that reduces warming', 'Natural climate regulation'],
    explanation: 'Example: melting ice reduces reflectivity, absorbing more heat, causing more melting.',
    tags: ['feedback loops', 'processes']
  },
  {
    id: 'geo-gcse-climate-010',
    subject: 'geography',
    topic: 'Climate Change',
    subtopic: 'Human Causes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which human activity releases the most greenhouse gases globally?',
    correctAnswer: 'Burning fossil fuels for energy',
    wrongAnswers: ['Agriculture', 'Deforestation', 'Waste disposal'],
    tags: ['human causes', 'fossil fuels']
  }
];

// Ecosystems Questions
const ecosystemsQuestions: Question[] = [
  {
    id: 'geo-gcse-eco-001',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Tropical Rainforests',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What percentage of the world\'s species are estimated to live in tropical rainforests?',
    correctAnswer: 'Over 50%',
    wrongAnswers: ['About 10%', 'About 25%', 'About 35%'],
    tags: ['rainforest', 'biodiversity']
  },
  {
    id: 'geo-gcse-eco-002',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Tropical Rainforests',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The dense layer of trees forming a continuous cover in rainforests is called the _____.',
    correctAnswer: 'canopy',
    tags: ['rainforest', 'structure']
  },
  {
    id: 'geo-gcse-eco-003',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Tropical Rainforests',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why do rainforest soils become infertile when the forest is cleared?',
    correctAnswer: 'Nutrients are quickly leached without the recycling of organic matter',
    wrongAnswers: ['The soil is naturally infertile', 'Farmers take all the nutrients', 'Animals eat the nutrients'],
    tags: ['rainforest', 'soil', 'deforestation']
  },
  {
    id: 'geo-gcse-eco-004',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Hot Deserts',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What adaptation do cacti have to survive in hot deserts?',
    correctAnswer: 'Thick waxy stems to store water and reduce water loss',
    wrongAnswers: ['Large leaves to catch more sunlight', 'Shallow roots only', 'Dark coloring to absorb heat'],
    tags: ['desert', 'adaptations', 'plants']
  },
  {
    id: 'geo-gcse-eco-005',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Hot Deserts',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The Sahara Desert receives less than 250mm of rainfall per year.',
    correctAnswer: 'True',
    tags: ['desert', 'climate']
  },
  {
    id: 'geo-gcse-eco-006',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Cold Environments',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Ground that remains frozen for at least two consecutive years is called _____.',
    correctAnswer: 'permafrost',
    tags: ['cold environments', 'permafrost']
  },
  {
    id: 'geo-gcse-eco-007',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Cold Environments',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the main challenge for development in cold environments?',
    correctAnswer: 'Infrastructure damage from freeze-thaw and permafrost melting',
    wrongAnswers: ['Too many tourists', 'Lack of minerals', 'Dense vegetation blocking access'],
    tags: ['cold environments', 'development']
  },
  {
    id: 'geo-gcse-eco-008',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Food Chains',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a producer in an ecosystem?',
    correctAnswer: 'An organism that makes its own food through photosynthesis',
    wrongAnswers: ['An animal that eats plants', 'A decomposer', 'A top predator'],
    tags: ['food chains', 'producers']
  },
  {
    id: 'geo-gcse-eco-009',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Sustainable Management',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is selective logging in rainforest management?',
    correctAnswer: 'Only felling mature trees and leaving others to grow',
    wrongAnswers: ['Clearing entire forest areas', 'Planting only one tree species', 'Banning all logging completely'],
    tags: ['sustainability', 'management']
  },
  {
    id: 'geo-gcse-eco-010',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Case Study - Amazon',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a major cause of deforestation in the Amazon rainforest?',
    correctAnswer: 'Cattle ranching and soy farming',
    wrongAnswers: ['Mining only', 'Volcanic activity', 'Natural fires only'],
    tags: ['case study', 'Amazon', 'deforestation']
  }
];

// River Landscapes Questions
const riverLandscapesQuestions: Question[] = [
  {
    id: 'geo-gcse-river-001',
    subject: 'geography',
    topic: 'River Landscapes',
    subtopic: 'Erosion Processes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which erosion process involves rocks being thrown against the river bed and banks?',
    correctAnswer: 'Abrasion',
    wrongAnswers: ['Attrition', 'Hydraulic action', 'Solution'],
    tags: ['erosion', 'processes']
  },
  {
    id: 'geo-gcse-river-002',
    subject: 'geography',
    topic: 'River Landscapes',
    subtopic: 'Transportation',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Fine particles carried within the water flow are transported by _____.',
    correctAnswer: 'suspension',
    tags: ['transportation', 'processes']
  },
  {
    id: 'geo-gcse-river-003',
    subject: 'geography',
    topic: 'River Landscapes',
    subtopic: 'Landforms',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How is a waterfall formed?',
    correctAnswer: 'Differential erosion of hard and soft rock creates a step in the river bed',
    wrongAnswers: ['Deposition of sediment', 'Tectonic uplift only', 'Human construction'],
    tags: ['landforms', 'waterfalls']
  },
  {
    id: 'geo-gcse-river-004',
    subject: 'geography',
    topic: 'River Landscapes',
    subtopic: 'Landforms',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'An oxbow lake forms when a meander is cut off from the main river channel.',
    correctAnswer: 'True',
    tags: ['landforms', 'meanders', 'oxbow lakes']
  },
  {
    id: 'geo-gcse-river-005',
    subject: 'geography',
    topic: 'River Landscapes',
    subtopic: 'Flooding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a floodplain?',
    correctAnswer: 'The flat area of land either side of a river that floods periodically',
    wrongAnswers: ['A type of dam', 'A river delta', 'An underground water store'],
    tags: ['flooding', 'landforms']
  },
  {
    id: 'geo-gcse-river-006',
    subject: 'geography',
    topic: 'River Landscapes',
    subtopic: 'Flood Management',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a hard engineering approach to flood management?',
    correctAnswer: 'Building concrete flood walls and embankments',
    wrongAnswers: ['Planting trees in the catchment', 'Creating washlands', 'Restoring meanders'],
    tags: ['management', 'hard engineering']
  },
  {
    id: 'geo-gcse-river-007',
    subject: 'geography',
    topic: 'River Landscapes',
    subtopic: 'Flood Management',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Soft engineering flood management works with natural processes and is generally more _____.',
    correctAnswer: 'sustainable',
    tags: ['management', 'soft engineering']
  },
  {
    id: 'geo-gcse-river-008',
    subject: 'geography',
    topic: 'River Landscapes',
    subtopic: 'Upper Course',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the typical cross-section of a river in its upper course?',
    correctAnswer: 'Narrow and deep V-shaped valley',
    wrongAnswers: ['Wide and shallow', 'U-shaped valley', 'Flat floodplain'],
    tags: ['upper course', 'valley shape']
  },
  {
    id: 'geo-gcse-river-009',
    subject: 'geography',
    topic: 'River Landscapes',
    subtopic: 'Lower Course',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What landform is created where a river meets the sea and deposits sediment?',
    correctAnswer: 'Delta',
    wrongAnswers: ['Waterfall', 'Gorge', 'Interlocking spur'],
    tags: ['lower course', 'deposition', 'delta']
  },
  {
    id: 'geo-gcse-river-010',
    subject: 'geography',
    topic: 'River Landscapes',
    subtopic: 'Hydrographs',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What does a short lag time on a storm hydrograph indicate?',
    correctAnswer: 'Water reaches the river quickly, increasing flood risk',
    wrongAnswers: ['Slow drainage and low flood risk', 'No connection to rainfall', 'The river is drying up'],
    tags: ['hydrographs', 'flooding']
  }
];

// Coastal Landscapes Questions
const coastalLandscapesQuestions: Question[] = [
  {
    id: 'geo-gcse-coast-001',
    subject: 'geography',
    topic: 'Coastal Landscapes',
    subtopic: 'Erosion Processes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is hydraulic action?',
    correctAnswer: 'The force of waves compressing air into rock cracks, causing them to break apart',
    wrongAnswers: ['Rocks grinding against each other', 'Chemical dissolving of rock', 'Sand blasting the cliff face'],
    tags: ['erosion', 'processes']
  },
  {
    id: 'geo-gcse-coast-002',
    subject: 'geography',
    topic: 'Coastal Landscapes',
    subtopic: 'Waves',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Destructive waves have a weak swash and a strong backwash.',
    correctAnswer: 'True',
    explanation: 'Destructive waves erode material as the strong backwash pulls sediment seaward.',
    tags: ['waves', 'destructive']
  },
  {
    id: 'geo-gcse-coast-003',
    subject: 'geography',
    topic: 'Coastal Landscapes',
    subtopic: 'Landforms',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'A headland with caves on both sides can eventually form an _____ when the caves meet.',
    correctAnswer: 'arch',
    tags: ['landforms', 'erosion']
  },
  {
    id: 'geo-gcse-coast-004',
    subject: 'geography',
    topic: 'Coastal Landscapes',
    subtopic: 'Landforms',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What sequence describes the formation of coastal erosion landforms?',
    correctAnswer: 'Crack -> Cave -> Arch -> Stack -> Stump',
    wrongAnswers: ['Stack -> Arch -> Cave -> Stump', 'Cave -> Stack -> Arch -> Crack', 'Stump -> Stack -> Arch -> Cave'],
    tags: ['landforms', 'sequence']
  },
  {
    id: 'geo-gcse-coast-005',
    subject: 'geography',
    topic: 'Coastal Landscapes',
    subtopic: 'Deposition',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How is a spit formed?',
    correctAnswer: 'Longshore drift deposits sediment where the coastline changes direction',
    wrongAnswers: ['Waves erode a headland', 'A river meets the sea', 'Volcanic activity'],
    tags: ['deposition', 'landforms', 'spit']
  },
  {
    id: 'geo-gcse-coast-006',
    subject: 'geography',
    topic: 'Coastal Landscapes',
    subtopic: 'Coastal Management',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What are groynes used for?',
    correctAnswer: 'Trapping sediment to build up beaches and reduce erosion',
    wrongAnswers: ['Stopping waves completely', 'Creating harbours', 'Filtering sea water'],
    tags: ['management', 'hard engineering']
  },
  {
    id: 'geo-gcse-coast-007',
    subject: 'geography',
    topic: 'Coastal Landscapes',
    subtopic: 'Coastal Management',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Managed retreat involves allowing the sea to flood land that was previously protected, which is a form of _____ engineering.',
    correctAnswer: 'soft',
    tags: ['management', 'soft engineering']
  },
  {
    id: 'geo-gcse-coast-008',
    subject: 'geography',
    topic: 'Coastal Landscapes',
    subtopic: 'Transportation',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is longshore drift?',
    correctAnswer: 'The movement of sediment along the coast by waves approaching at an angle',
    wrongAnswers: ['Sediment moving out to sea', 'Sand blown by wind', 'River sediment reaching the coast'],
    tags: ['transportation', 'longshore drift']
  },
  {
    id: 'geo-gcse-coast-009',
    subject: 'geography',
    topic: 'Coastal Landscapes',
    subtopic: 'Case Study - UK',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which area of the UK coastline is experiencing rapid erosion of soft boulder clay cliffs?',
    correctAnswer: 'Holderness Coast, East Yorkshire',
    wrongAnswers: ['Jurassic Coast, Dorset', 'White Cliffs of Dover', 'Pembrokeshire Coast'],
    tags: ['case study', 'UK', 'erosion']
  },
  {
    id: 'geo-gcse-coast-010',
    subject: 'geography',
    topic: 'Coastal Landscapes',
    subtopic: 'Waves',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What type of waves build up beaches?',
    correctAnswer: 'Constructive waves',
    wrongAnswers: ['Destructive waves', 'Tidal waves', 'Tsunami waves'],
    explanation: 'Constructive waves have a strong swash that deposits more material than the backwash removes.',
    tags: ['waves', 'constructive', 'deposition']
  }
];

// Glacial Landscapes Questions
const glacialLandscapesQuestions: Question[] = [
  {
    id: 'geo-gcse-glacial-001',
    subject: 'geography',
    topic: 'Glacial Landscapes',
    subtopic: 'Erosion Processes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is glacial plucking?',
    correctAnswer: 'Ice freezing onto rock and pulling fragments away as the glacier moves',
    wrongAnswers: ['Meltwater dissolving rock', 'Rocks falling onto the glacier', 'Wind erosion on ice'],
    tags: ['erosion', 'plucking']
  },
  {
    id: 'geo-gcse-glacial-002',
    subject: 'geography',
    topic: 'Glacial Landscapes',
    subtopic: 'Erosion Processes',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Glacial abrasion creates scratches on rock surfaces called _____.',
    correctAnswer: 'striations',
    tags: ['erosion', 'abrasion']
  },
  {
    id: 'geo-gcse-glacial-003',
    subject: 'geography',
    topic: 'Glacial Landscapes',
    subtopic: 'Landforms',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a corrie (cirque)?',
    correctAnswer: 'An armchair-shaped hollow carved by a glacier at the head of a valley',
    wrongAnswers: ['A pile of glacial debris', 'A U-shaped valley', 'A glacial lake'],
    tags: ['landforms', 'corrie']
  },
  {
    id: 'geo-gcse-glacial-004',
    subject: 'geography',
    topic: 'Glacial Landscapes',
    subtopic: 'Landforms',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'An arete is a sharp ridge formed between two corries.',
    correctAnswer: 'True',
    tags: ['landforms', 'arete']
  },
  {
    id: 'geo-gcse-glacial-005',
    subject: 'geography',
    topic: 'Glacial Landscapes',
    subtopic: 'Landforms',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What shape valley does a glacier create?',
    correctAnswer: 'U-shaped valley',
    wrongAnswers: ['V-shaped valley', 'Flat valley', 'Circular valley'],
    tags: ['landforms', 'valley']
  },
  {
    id: 'geo-gcse-glacial-006',
    subject: 'geography',
    topic: 'Glacial Landscapes',
    subtopic: 'Deposition',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Material deposited directly by glacial ice is called _____ or boulder clay.',
    correctAnswer: 'till',
    tags: ['deposition', 'till']
  },
  {
    id: 'geo-gcse-glacial-007',
    subject: 'geography',
    topic: 'Glacial Landscapes',
    subtopic: 'Deposition',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a moraine?',
    correctAnswer: 'Accumulated rock debris deposited by a glacier',
    wrongAnswers: ['A glacial lake', 'An ice sheet', 'A mountain peak'],
    tags: ['deposition', 'moraine']
  },
  {
    id: 'geo-gcse-glacial-008',
    subject: 'geography',
    topic: 'Glacial Landscapes',
    subtopic: 'Landforms',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a hanging valley?',
    correctAnswer: 'A tributary valley left high above the main valley floor after glaciation',
    wrongAnswers: ['A valley with a waterfall at both ends', 'An underground glacier', 'A valley filled with ice'],
    tags: ['landforms', 'hanging valley']
  },
  {
    id: 'geo-gcse-glacial-009',
    subject: 'geography',
    topic: 'Glacial Landscapes',
    subtopic: 'Land Use',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why are glaciated uplands in the UK popular for tourism?',
    correctAnswer: 'Dramatic scenery for walking, climbing, and sightseeing',
    wrongAnswers: ['Warm climate', 'Sandy beaches', 'Large cities nearby'],
    tags: ['land use', 'tourism']
  },
  {
    id: 'geo-gcse-glacial-010',
    subject: 'geography',
    topic: 'Glacial Landscapes',
    subtopic: 'Landforms',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a pyramidal peak?',
    correctAnswer: 'A pointed mountain formed when three or more corries erode back to back',
    wrongAnswers: ['A volcanic cone', 'A sand dune', 'A coastal stack'],
    tags: ['landforms', 'pyramidal peak']
  }
];

// ============================================
// HUMAN GEOGRAPHY QUESTIONS
// ============================================

// Urban Issues and Challenges Questions
const urbanIssuesQuestions: Question[] = [
  {
    id: 'geo-gcse-urban-001',
    subject: 'geography',
    topic: 'Urban Issues and Challenges',
    subtopic: 'Urbanisation',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is urbanisation?',
    correctAnswer: 'The increase in the proportion of people living in urban areas',
    wrongAnswers: ['The decrease in city populations', 'The growth of rural areas', 'The building of new towns'],
    tags: ['urbanisation', 'definition']
  },
  {
    id: 'geo-gcse-urban-002',
    subject: 'geography',
    topic: 'Urban Issues and Challenges',
    subtopic: 'Urbanisation',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'A megacity is defined as an urban area with a population of over _____ million people.',
    correctAnswer: '10',
    tags: ['urbanisation', 'megacity']
  },
  {
    id: 'geo-gcse-urban-003',
    subject: 'geography',
    topic: 'Urban Issues and Challenges',
    subtopic: 'Push and Pull Factors',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which is a push factor for rural-urban migration in LICs?',
    correctAnswer: 'Lack of employment opportunities in rural areas',
    wrongAnswers: ['Better healthcare in cities', 'Higher wages in factories', 'Entertainment options'],
    explanation: 'Push factors are negative conditions that push people away from an area.',
    tags: ['migration', 'push factors']
  },
  {
    id: 'geo-gcse-urban-004',
    subject: 'geography',
    topic: 'Urban Issues and Challenges',
    subtopic: 'Squatter Settlements',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Squatter settlements often develop on marginal land such as steep slopes or floodplains.',
    correctAnswer: 'True',
    tags: ['squatter settlements', 'LICs']
  },
  {
    id: 'geo-gcse-urban-005',
    subject: 'geography',
    topic: 'Urban Issues and Challenges',
    subtopic: 'Case Study - Rio de Janeiro',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What are informal settlements called in Brazilian cities like Rio de Janeiro?',
    correctAnswer: 'Favelas',
    wrongAnswers: ['Slums', 'Townships', 'Barrios'],
    tags: ['case study', 'Brazil', 'favelas']
  },
  {
    id: 'geo-gcse-urban-006',
    subject: 'geography',
    topic: 'Urban Issues and Challenges',
    subtopic: 'UK Cities',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is urban regeneration?',
    correctAnswer: 'The investment and improvement of urban areas that have declined',
    wrongAnswers: ['Building new cities', 'Rural development', 'Destroying old buildings'],
    tags: ['regeneration', 'UK']
  },
  {
    id: 'geo-gcse-urban-007',
    subject: 'geography',
    topic: 'Urban Issues and Challenges',
    subtopic: 'Sustainable Cities',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'A sustainable urban neighbourhood that aims to reduce its environmental impact is sometimes called an _____.',
    correctAnswer: 'eco-town',
    tags: ['sustainability', 'eco-town']
  },
  {
    id: 'geo-gcse-urban-008',
    subject: 'geography',
    topic: 'Urban Issues and Challenges',
    subtopic: 'Urban Transport',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a sustainable transport strategy for cities?',
    correctAnswer: 'Integrated public transport systems and cycle lanes',
    wrongAnswers: ['Building more motorways', 'Increasing car parking', 'Removing bus services'],
    tags: ['transport', 'sustainability']
  },
  {
    id: 'geo-gcse-urban-009',
    subject: 'geography',
    topic: 'Urban Issues and Challenges',
    subtopic: 'Urban Change',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is counter-urbanisation?',
    correctAnswer: 'The movement of people from cities to rural areas',
    wrongAnswers: ['The growth of cities', 'Building new towns', 'Urban renewal'],
    tags: ['counter-urbanisation', 'migration']
  },
  {
    id: 'geo-gcse-urban-010',
    subject: 'geography',
    topic: 'Urban Issues and Challenges',
    subtopic: 'Urban Problems',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is social deprivation in urban areas?',
    correctAnswer: 'Lack of access to services, education, and opportunities',
    wrongAnswers: ['Too many people living together', 'Air pollution only', 'Traffic congestion'],
    tags: ['social issues', 'deprivation']
  }
];

// The Changing Economic World Questions
const economicWorldQuestions: Question[] = [
  {
    id: 'geo-gcse-econ-001',
    subject: 'geography',
    topic: 'The Changing Economic World',
    subtopic: 'Development Indicators',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What does GNI per capita measure?',
    correctAnswer: 'The average income per person in a country',
    wrongAnswers: ['Total population', 'Land area', 'Number of industries'],
    tags: ['development', 'indicators', 'GNI']
  },
  {
    id: 'geo-gcse-econ-002',
    subject: 'geography',
    topic: 'The Changing Economic World',
    subtopic: 'Development Indicators',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The Human Development Index (HDI) combines life expectancy, education, and _____ per capita.',
    correctAnswer: 'income',
    tags: ['development', 'HDI']
  },
  {
    id: 'geo-gcse-econ-003',
    subject: 'geography',
    topic: 'The Changing Economic World',
    subtopic: 'Development Gap',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the development gap?',
    correctAnswer: 'The difference in development between the richest and poorest countries',
    wrongAnswers: ['The distance between two countries', 'A type of trade agreement', 'A measurement of rainfall'],
    tags: ['development gap', 'inequality']
  },
  {
    id: 'geo-gcse-econ-004',
    subject: 'geography',
    topic: 'The Changing Economic World',
    subtopic: 'Causes of Inequality',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Historical colonialism has had lasting effects on development in many LICs.',
    correctAnswer: 'True',
    tags: ['causes', 'colonialism']
  },
  {
    id: 'geo-gcse-econ-005',
    subject: 'geography',
    topic: 'The Changing Economic World',
    subtopic: 'Reducing the Gap',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is fair trade?',
    correctAnswer: 'A trading partnership that ensures producers in LICs receive a fair price',
    wrongAnswers: ['Free trade between all countries', 'Trade within the EU only', 'Illegal trade'],
    tags: ['fair trade', 'strategies']
  },
  {
    id: 'geo-gcse-econ-006',
    subject: 'geography',
    topic: 'The Changing Economic World',
    subtopic: 'Economic Sectors',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which economic sector involves manufacturing and construction?',
    correctAnswer: 'Secondary sector',
    wrongAnswers: ['Primary sector', 'Tertiary sector', 'Quaternary sector'],
    tags: ['economic sectors', 'secondary']
  },
  {
    id: 'geo-gcse-econ-007',
    subject: 'geography',
    topic: 'The Changing Economic World',
    subtopic: 'UK Economy',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The process of industry moving away from traditional areas is called _____.',
    correctAnswer: 'deindustrialisation',
    tags: ['UK economy', 'deindustrialisation']
  },
  {
    id: 'geo-gcse-econ-008',
    subject: 'geography',
    topic: 'The Changing Economic World',
    subtopic: 'Case Study - Nigeria',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is Nigeria\'s main export product?',
    correctAnswer: 'Oil (petroleum)',
    wrongAnswers: ['Coffee', 'Diamonds', 'Manufactured goods'],
    tags: ['case study', 'Nigeria', 'NEE']
  },
  {
    id: 'geo-gcse-econ-009',
    subject: 'geography',
    topic: 'The Changing Economic World',
    subtopic: 'Aid',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the difference between bilateral and multilateral aid?',
    correctAnswer: 'Bilateral is government to government; multilateral is through international organisations',
    wrongAnswers: ['They are the same', 'Bilateral involves three countries', 'Multilateral is from individuals'],
    tags: ['aid', 'types']
  },
  {
    id: 'geo-gcse-econ-010',
    subject: 'geography',
    topic: 'The Changing Economic World',
    subtopic: 'TNCs',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Transnational corporations (TNCs) operate in more than one country.',
    correctAnswer: 'True',
    tags: ['TNCs', 'globalisation']
  }
];

// Resource Management Questions
const resourceManagementQuestions: Question[] = [
  {
    id: 'geo-gcse-resource-001',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Food',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is food security?',
    correctAnswer: 'Having reliable access to enough affordable, nutritious food',
    wrongAnswers: ['Locking up food stores', 'Growing only organic food', 'Eating local food only'],
    tags: ['food', 'security']
  },
  {
    id: 'geo-gcse-resource-002',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Food',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The _____ is the distance food travels from farm to plate.',
    correctAnswer: 'food miles',
    tags: ['food', 'food miles']
  },
  {
    id: 'geo-gcse-resource-003',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Water',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a water deficit?',
    correctAnswer: 'When water demand exceeds supply',
    wrongAnswers: ['Too much rainfall', 'Water pollution', 'Flooding'],
    tags: ['water', 'deficit']
  },
  {
    id: 'geo-gcse-resource-004',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Water',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The south-east of England has a water surplus.',
    correctAnswer: 'False',
    explanation: 'South-east England has a water deficit due to high population and lower rainfall.',
    tags: ['water', 'UK']
  },
  {
    id: 'geo-gcse-resource-005',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Water',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is water transfer?',
    correctAnswer: 'Moving water from areas of surplus to areas of deficit',
    wrongAnswers: ['Purifying water', 'Desalinating seawater', 'Collecting rainwater'],
    tags: ['water', 'transfer']
  },
  {
    id: 'geo-gcse-resource-006',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Energy',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which energy source is non-renewable?',
    correctAnswer: 'Natural gas',
    wrongAnswers: ['Solar power', 'Wind power', 'Hydroelectric power'],
    tags: ['energy', 'non-renewable']
  },
  {
    id: 'geo-gcse-resource-007',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Energy',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The UK\'s energy mix is changing with increased use of _____ energy sources.',
    correctAnswer: 'renewable',
    tags: ['energy', 'UK', 'renewable']
  },
  {
    id: 'geo-gcse-resource-008',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Food',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is agribusiness?',
    correctAnswer: 'Large-scale commercial farming using modern technology',
    wrongAnswers: ['Subsistence farming', 'Organic farming only', 'Urban gardening'],
    tags: ['food', 'agribusiness']
  },
  {
    id: 'geo-gcse-resource-009',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Energy',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is fracking?',
    correctAnswer: 'Hydraulic fracturing to extract shale gas from rocks',
    wrongAnswers: ['Solar panel installation', 'Wind turbine construction', 'Nuclear fusion'],
    tags: ['energy', 'fracking']
  },
  {
    id: 'geo-gcse-resource-010',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Sustainability',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What does sustainable resource management aim to do?',
    correctAnswer: 'Meet current needs without compromising future generations',
    wrongAnswers: ['Use all resources now', 'Stop using natural resources', 'Only use renewable energy'],
    tags: ['sustainability', 'management']
  }
];

// Globalisation Questions
const globalisationQuestions: Question[] = [
  {
    id: 'geo-gcse-global-001',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'Definition',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is globalisation?',
    correctAnswer: 'The increasing interconnection and interdependence of countries worldwide',
    wrongAnswers: ['The spread of Western culture only', 'International travel', 'Climate change'],
    tags: ['globalisation', 'definition']
  },
  {
    id: 'geo-gcse-global-002',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'Factors',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Improved _____ technology has accelerated globalisation by enabling instant global communication.',
    correctAnswer: 'information/communication',
    tags: ['globalisation', 'technology']
  },
  {
    id: 'geo-gcse-global-003',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'TNCs',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why do TNCs locate manufacturing in LICs?',
    correctAnswer: 'Lower labour costs and fewer regulations',
    wrongAnswers: ['Better technology', 'Closer to headquarters', 'Higher wages for workers'],
    tags: ['TNCs', 'manufacturing']
  },
  {
    id: 'geo-gcse-global-004',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'Impacts',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Globalisation has only positive impacts on all countries.',
    correctAnswer: 'False',
    explanation: 'Globalisation has both positive and negative impacts, including job losses in some areas.',
    tags: ['globalisation', 'impacts']
  },
  {
    id: 'geo-gcse-global-005',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'Trade',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is containerisation?',
    correctAnswer: 'Using standard shipping containers to transport goods globally',
    wrongAnswers: ['Growing plants in containers', 'Storing water', 'A type of packaging'],
    explanation: 'Containerisation has revolutionised global trade by reducing shipping costs.',
    tags: ['trade', 'containerisation']
  },
  {
    id: 'geo-gcse-global-006',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'Cultural',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is cultural homogenisation?',
    correctAnswer: 'The spread of similar cultures and practices worldwide',
    wrongAnswers: ['Celebrating cultural diversity', 'Protecting local traditions', 'Teaching multiple languages'],
    tags: ['culture', 'globalisation']
  },
  {
    id: 'geo-gcse-global-007',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'Transport',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The growth of low-cost _____ has made international travel more accessible.',
    correctAnswer: 'airlines',
    tags: ['transport', 'globalisation']
  },
  {
    id: 'geo-gcse-global-008',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'Economic',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is outsourcing?',
    correctAnswer: 'Companies contracting work to external organisations, often in other countries',
    wrongAnswers: ['Hiring local workers', 'Building new factories', 'Selling products abroad'],
    tags: ['economic', 'outsourcing']
  },
  {
    id: 'geo-gcse-global-009',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'Environmental',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the environmental impact of increased global trade?',
    correctAnswer: 'Increased carbon emissions from shipping and air freight',
    wrongAnswers: ['Reduced pollution', 'More rainforests', 'Cleaner oceans'],
    tags: ['environment', 'trade']
  },
  {
    id: 'geo-gcse-global-010',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'Political',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which organisation promotes free trade between countries?',
    correctAnswer: 'World Trade Organisation (WTO)',
    wrongAnswers: ['United Nations (UN)', 'World Health Organisation (WHO)', 'International Olympic Committee'],
    tags: ['trade', 'organisations']
  }
];

// ============================================
// COMBINED QUESTIONS EXPORT
// ============================================

export const gcseGeographyQuestions: Question[] = [
  ...tectonicHazardsQuestions,
  ...weatherHazardsQuestions,
  ...climateChangeQuestions,
  ...ecosystemsQuestions,
  ...riverLandscapesQuestions,
  ...coastalLandscapesQuestions,
  ...glacialLandscapesQuestions,
  ...urbanIssuesQuestions,
  ...economicWorldQuestions,
  ...resourceManagementQuestions,
  ...globalisationQuestions
];

// ============================================
// TERM DEFINITIONS
// ============================================

export const gcseGeographyTerms: TermDefinition[] = [
  // Physical Geography Terms
  {
    id: 'geo-gcse-term-001',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    difficulty: 'gcse',
    term: 'Epicentre',
    definition: 'The point on the Earth\'s surface directly above the focus of an earthquake',
    example: 'The epicentre of the 2010 Haiti earthquake was near the capital, Port-au-Prince.',
    tags: ['earthquakes', 'tectonics']
  },
  {
    id: 'geo-gcse-term-002',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    difficulty: 'gcse',
    term: 'Subduction',
    definition: 'The process where one tectonic plate moves under another and sinks into the mantle',
    example: 'Subduction zones often produce volcanic arcs and deep ocean trenches.',
    tags: ['plate tectonics', 'boundaries']
  },
  {
    id: 'geo-gcse-term-003',
    subject: 'geography',
    topic: 'Weather Hazards',
    difficulty: 'gcse',
    term: 'Coriolis effect',
    definition: 'The deflection of moving objects (including air and water) caused by Earth\'s rotation',
    example: 'The Coriolis effect causes hurricanes to spin anticlockwise in the Northern Hemisphere.',
    tags: ['weather', 'rotation']
  },
  {
    id: 'geo-gcse-term-004',
    subject: 'geography',
    topic: 'Climate Change',
    difficulty: 'gcse',
    term: 'Greenhouse effect',
    definition: 'The trapping of heat in Earth\'s atmosphere by greenhouse gases',
    example: 'Without the natural greenhouse effect, Earth would be too cold for life.',
    tags: ['climate', 'atmosphere']
  },
  {
    id: 'geo-gcse-term-005',
    subject: 'geography',
    topic: 'Climate Change',
    difficulty: 'gcse',
    term: 'Mitigation',
    definition: 'Actions taken to reduce or prevent the causes of climate change',
    example: 'Using renewable energy instead of fossil fuels is a mitigation strategy.',
    tags: ['climate change', 'responses']
  },
  {
    id: 'geo-gcse-term-006',
    subject: 'geography',
    topic: 'Ecosystems',
    difficulty: 'gcse',
    term: 'Biodiversity',
    definition: 'The variety of plant and animal life in a particular habitat or ecosystem',
    example: 'Tropical rainforests have the highest biodiversity of any terrestrial ecosystem.',
    tags: ['ecosystems', 'species']
  },
  {
    id: 'geo-gcse-term-007',
    subject: 'geography',
    topic: 'Ecosystems',
    difficulty: 'gcse',
    term: 'Nutrient cycling',
    definition: 'The continuous movement of nutrients between the biotic and abiotic components of an ecosystem',
    example: 'In rainforests, rapid nutrient cycling occurs due to warm, wet conditions.',
    tags: ['ecosystems', 'processes']
  },
  {
    id: 'geo-gcse-term-008',
    subject: 'geography',
    topic: 'River Landscapes',
    difficulty: 'gcse',
    term: 'Hydraulic action',
    definition: 'The force of water eroding rock surfaces and riverbanks',
    example: 'Hydraulic action is particularly effective at widening cracks in rock.',
    tags: ['erosion', 'rivers']
  },
  {
    id: 'geo-gcse-term-009',
    subject: 'geography',
    topic: 'River Landscapes',
    difficulty: 'gcse',
    term: 'Meander',
    definition: 'A bend or curve in a river channel',
    example: 'Meanders form in the middle and lower courses of rivers.',
    tags: ['rivers', 'landforms']
  },
  {
    id: 'geo-gcse-term-010',
    subject: 'geography',
    topic: 'Coastal Landscapes',
    difficulty: 'gcse',
    term: 'Longshore drift',
    definition: 'The movement of sediment along a coastline by waves approaching at an angle',
    example: 'Longshore drift moves sand along beaches and can form spits.',
    tags: ['coasts', 'transportation']
  },
  {
    id: 'geo-gcse-term-011',
    subject: 'geography',
    topic: 'Coastal Landscapes',
    difficulty: 'gcse',
    term: 'Wave-cut platform',
    definition: 'A flat rocky surface at the base of a cliff created by wave erosion',
    example: 'Wave-cut platforms are exposed at low tide.',
    tags: ['coasts', 'erosion']
  },
  {
    id: 'geo-gcse-term-012',
    subject: 'geography',
    topic: 'Glacial Landscapes',
    difficulty: 'gcse',
    term: 'Glacial till',
    definition: 'Unsorted sediment deposited directly by glacial ice',
    example: 'Till deposits are found across much of northern England from past ice ages.',
    tags: ['glaciation', 'deposition']
  },
  {
    id: 'geo-gcse-term-013',
    subject: 'geography',
    topic: 'Glacial Landscapes',
    difficulty: 'gcse',
    term: 'Corrie (cirque)',
    definition: 'An armchair-shaped hollow carved by a glacier into a mountainside',
    example: 'Red Tarn in the Lake District occupies a classic corrie.',
    tags: ['glaciation', 'landforms']
  },
  // Human Geography Terms
  {
    id: 'geo-gcse-term-014',
    subject: 'geography',
    topic: 'Urban Issues and Challenges',
    difficulty: 'gcse',
    term: 'Urbanisation',
    definition: 'The increase in the proportion of people living in towns and cities',
    example: 'Over 80% of the UK population now lives in urban areas.',
    tags: ['urban', 'population']
  },
  {
    id: 'geo-gcse-term-015',
    subject: 'geography',
    topic: 'Urban Issues and Challenges',
    difficulty: 'gcse',
    term: 'Gentrification',
    definition: 'The renovation of run-down urban areas by wealthier people moving in',
    example: 'Gentrification in East London has changed neighbourhoods significantly.',
    tags: ['urban', 'change']
  },
  {
    id: 'geo-gcse-term-016',
    subject: 'geography',
    topic: 'Urban Issues and Challenges',
    difficulty: 'gcse',
    term: 'Urban sprawl',
    definition: 'The uncontrolled expansion of urban areas into surrounding countryside',
    example: 'Green belt policies aim to prevent urban sprawl around cities.',
    tags: ['urban', 'growth']
  },
  {
    id: 'geo-gcse-term-017',
    subject: 'geography',
    topic: 'The Changing Economic World',
    difficulty: 'gcse',
    term: 'Newly Emerging Economy (NEE)',
    definition: 'A country that has begun rapid economic development and industrialisation',
    example: 'Countries like Brazil, India, and China are classified as NEEs.',
    tags: ['development', 'economy']
  },
  {
    id: 'geo-gcse-term-018',
    subject: 'geography',
    topic: 'The Changing Economic World',
    difficulty: 'gcse',
    term: 'Human Development Index (HDI)',
    definition: 'A composite measure of development using life expectancy, education, and income',
    example: 'Norway consistently ranks highest on the HDI.',
    tags: ['development', 'indicators']
  },
  {
    id: 'geo-gcse-term-019',
    subject: 'geography',
    topic: 'Resource Management',
    difficulty: 'gcse',
    term: 'Water stress',
    definition: 'When water demand approaches or exceeds the available supply',
    example: 'Many parts of South-east England experience water stress during summer.',
    tags: ['water', 'resources']
  },
  {
    id: 'geo-gcse-term-020',
    subject: 'geography',
    topic: 'Resource Management',
    difficulty: 'gcse',
    term: 'Carbon footprint',
    definition: 'The total greenhouse gas emissions caused by an individual, organisation, or product',
    example: 'Reducing food miles can lower your carbon footprint.',
    tags: ['environment', 'sustainability']
  },
  {
    id: 'geo-gcse-term-021',
    subject: 'geography',
    topic: 'Globalisation',
    difficulty: 'gcse',
    term: 'Transnational Corporation (TNC)',
    definition: 'A company that operates in more than one country',
    example: 'Apple, Nike, and McDonalds are examples of TNCs.',
    tags: ['globalisation', 'business']
  },
  {
    id: 'geo-gcse-term-022',
    subject: 'geography',
    topic: 'Globalisation',
    difficulty: 'gcse',
    term: 'Outsourcing',
    definition: 'Contracting work to external suppliers, often in other countries',
    example: 'Many UK companies outsource customer service to India.',
    tags: ['globalisation', 'employment']
  },
  {
    id: 'geo-gcse-term-023',
    subject: 'geography',
    topic: 'Climate Change',
    difficulty: 'gcse',
    term: 'Adaptation',
    definition: 'Adjusting practices and infrastructure to cope with the effects of climate change',
    example: 'Building flood defences is an example of climate change adaptation.',
    tags: ['climate change', 'responses']
  },
  {
    id: 'geo-gcse-term-024',
    subject: 'geography',
    topic: 'Ecosystems',
    difficulty: 'gcse',
    term: 'Deforestation',
    definition: 'The permanent removal of trees and forest cover from land',
    example: 'Deforestation in the Amazon releases stored carbon and reduces biodiversity.',
    tags: ['ecosystems', 'environment']
  },
  {
    id: 'geo-gcse-term-025',
    subject: 'geography',
    topic: 'Weather Hazards',
    difficulty: 'gcse',
    term: 'Storm surge',
    definition: 'An abnormal rise in sea level caused by a storm pushing water towards the coast',
    example: 'Storm surges during tropical cyclones can cause devastating coastal flooding.',
    tags: ['weather', 'hazards']
  }
];
