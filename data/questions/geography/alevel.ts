/**
 * A-Level Geography Question Bank
 * Comprehensive questions for UK A-Level Geography curriculum
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================================================
// WATER AND CARBON CYCLES - 10 Questions
// ============================================================================

const waterCarbonQuestions: Question[] = [
  {
    id: 'geo-al-wc-001',
    subject: 'geography',
    topic: 'Water and Carbon Cycles',
    subtopic: 'Water Cycle',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which process transfers water from vegetation to the atmosphere?',
    correctAnswer: 'Transpiration',
    wrongAnswers: ['Evaporation', 'Precipitation', 'Infiltration'],
    options: ['Transpiration', 'Evaporation', 'Precipitation', 'Infiltration'],
    explanation: 'Transpiration is the release of water vapour from plant leaves through stomata.',
    tags: ['water cycle', 'processes'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-wc-002',
    subject: 'geography',
    topic: 'Water and Carbon Cycles',
    subtopic: 'Water Cycle',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the main store of freshwater on Earth?',
    correctAnswer: 'Ice caps and glaciers',
    wrongAnswers: ['Groundwater', 'Lakes and rivers', 'Atmospheric moisture'],
    options: ['Ice caps and glaciers', 'Groundwater', 'Lakes and rivers', 'Atmospheric moisture'],
    explanation: 'Approximately 69% of freshwater is stored in ice caps and glaciers.',
    tags: ['water cycle', 'stores'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-wc-003',
    subject: 'geography',
    topic: 'Water and Carbon Cycles',
    subtopic: 'Carbon Cycle',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'The ocean is a carbon sink because it absorbs more CO2 than it releases.',
    correctAnswer: 'True',
    explanation: 'Oceans absorb approximately 25% of anthropogenic CO2 emissions, making them a net carbon sink.',
    tags: ['carbon cycle', 'sinks'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-wc-004',
    subject: 'geography',
    topic: 'Water and Carbon Cycles',
    subtopic: 'Carbon Cycle',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which process converts atmospheric CO2 into organic carbon in plants?',
    correctAnswer: 'Photosynthesis',
    wrongAnswers: ['Respiration', 'Combustion', 'Decomposition'],
    options: ['Photosynthesis', 'Respiration', 'Combustion', 'Decomposition'],
    explanation: 'Photosynthesis uses CO2 and sunlight to produce glucose and oxygen.',
    tags: ['carbon cycle', 'processes'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-wc-005',
    subject: 'geography',
    topic: 'Water and Carbon Cycles',
    subtopic: 'Water Cycle',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'The movement of water through soil under gravity is called ___.',
    correctAnswer: 'percolation',
    explanation: 'Percolation is the downward movement of water through soil and rock layers.',
    tags: ['water cycle', 'processes'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-wc-006',
    subject: 'geography',
    topic: 'Water and Carbon Cycles',
    subtopic: 'Carbon Cycle',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the largest store of carbon on Earth?',
    correctAnswer: 'Lithosphere (rocks and sediments)',
    wrongAnswers: ['Atmosphere', 'Biosphere', 'Hydrosphere'],
    options: ['Lithosphere (rocks and sediments)', 'Atmosphere', 'Biosphere', 'Hydrosphere'],
    explanation: 'The lithosphere contains over 99% of Earth\'s carbon, mainly in carbonate rocks.',
    tags: ['carbon cycle', 'stores'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-wc-007',
    subject: 'geography',
    topic: 'Water and Carbon Cycles',
    subtopic: 'Water Cycle',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'If annual precipitation is 1200mm and evapotranspiration is 800mm, calculate the water surplus in mm.',
    correctAnswer: 400,
    explanation: 'Water surplus = Precipitation - Evapotranspiration = 1200 - 800 = 400mm',
    tags: ['water balance', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-wc-008',
    subject: 'geography',
    topic: 'Water and Carbon Cycles',
    subtopic: 'Carbon Cycle',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which human activity has most significantly altered the carbon cycle since the Industrial Revolution?',
    correctAnswer: 'Burning fossil fuels',
    wrongAnswers: ['Agriculture', 'Urbanisation', 'Mining'],
    options: ['Burning fossil fuels', 'Agriculture', 'Urbanisation', 'Mining'],
    explanation: 'Fossil fuel combustion releases stored carbon rapidly, increasing atmospheric CO2 by over 50%.',
    tags: ['carbon cycle', 'human impacts'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-wc-009',
    subject: 'geography',
    topic: 'Water and Carbon Cycles',
    subtopic: 'Water Cycle',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What effect does urbanisation have on the water cycle?',
    correctAnswer: 'Increases surface runoff and reduces infiltration',
    wrongAnswers: ['Increases infiltration and groundwater recharge', 'Decreases precipitation', 'Increases evapotranspiration'],
    options: ['Increases surface runoff and reduces infiltration', 'Increases infiltration and groundwater recharge', 'Decreases precipitation', 'Increases evapotranspiration'],
    explanation: 'Impermeable surfaces in urban areas prevent infiltration, increasing rapid surface runoff.',
    tags: ['water cycle', 'human impacts'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-wc-010',
    subject: 'geography',
    topic: 'Water and Carbon Cycles',
    subtopic: 'Carbon Cycle',
    difficulty: 'alevel',
    type: 'order',
    question: 'Order these carbon cycle processes from fastest to slowest flux rate.',
    correctAnswer: ['Photosynthesis', 'Ocean absorption', 'Rock weathering', 'Fossil fuel formation'],
    explanation: 'Photosynthesis occurs in seconds, ocean absorption over years, weathering over millennia, fossil fuel formation over millions of years.',
    tags: ['carbon cycle', 'timescales'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// COASTAL SYSTEMS AND LANDSCAPES - 10 Questions
// ============================================================================

const coastalQuestions: Question[] = [
  {
    id: 'geo-al-coast-001',
    subject: 'geography',
    topic: 'Coastal Systems',
    subtopic: 'Coastal Processes',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which type of wave has a strong backwash and weak swash?',
    correctAnswer: 'Destructive wave',
    wrongAnswers: ['Constructive wave', 'Refracted wave', 'Longshore wave'],
    options: ['Destructive wave', 'Constructive wave', 'Refracted wave', 'Longshore wave'],
    explanation: 'Destructive waves have a strong backwash that removes material from the beach.',
    tags: ['waves', 'erosion'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-coast-002',
    subject: 'geography',
    topic: 'Coastal Systems',
    subtopic: 'Erosion',
    difficulty: 'alevel',
    type: 'match',
    question: 'Match the coastal erosion process to its description.',
    correctAnswer: ['Hydraulic action - Compression of air in rock cracks', 'Abrasion - Waves throwing material against cliffs', 'Attrition - Rock fragments wearing each other down', 'Corrosion - Chemical dissolving of rock'],
    options: ['Hydraulic action', 'Abrasion', 'Attrition', 'Corrosion', 'Compression of air in rock cracks', 'Waves throwing material against cliffs', 'Rock fragments wearing each other down', 'Chemical dissolving of rock'],
    explanation: 'Each erosion process operates through different mechanisms to break down coastal rock.',
    tags: ['erosion', 'processes'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-coast-003',
    subject: 'geography',
    topic: 'Coastal Systems',
    subtopic: 'Landforms',
    difficulty: 'alevel',
    type: 'order',
    question: 'Order the formation of headland erosion features from first to last.',
    correctAnswer: ['Cave', 'Arch', 'Stack', 'Stump'],
    explanation: 'Waves erode weaknesses to form caves, which join to form arches, collapse to form stacks, then stumps.',
    tags: ['landforms', 'sequence'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-coast-004',
    subject: 'geography',
    topic: 'Coastal Systems',
    subtopic: 'Deposition',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is longshore drift?',
    correctAnswer: 'Movement of sediment along the coast by wave action',
    wrongAnswers: ['Movement of water offshore', 'Vertical movement of beach material', 'Wind-blown sand movement'],
    options: ['Movement of sediment along the coast by wave action', 'Movement of water offshore', 'Vertical movement of beach material', 'Wind-blown sand movement'],
    explanation: 'Longshore drift moves sediment along the coast due to waves approaching at an angle.',
    tags: ['transport', 'deposition'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-coast-005',
    subject: 'geography',
    topic: 'Coastal Systems',
    subtopic: 'Landforms',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which depositional landform extends from the coast into the sea?',
    correctAnswer: 'Spit',
    wrongAnswers: ['Bar', 'Tombolo', 'Beach'],
    options: ['Spit', 'Bar', 'Tombolo', 'Beach'],
    explanation: 'Spits are elongated ridges of sand extending from the coast, often with a curved end.',
    tags: ['landforms', 'deposition'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-coast-006',
    subject: 'geography',
    topic: 'Coastal Systems',
    subtopic: 'Management',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the main purpose of groynes as a coastal defence?',
    correctAnswer: 'To trap sediment and build up the beach',
    wrongAnswers: ['To absorb wave energy', 'To redirect wave direction', 'To prevent cliff erosion directly'],
    options: ['To trap sediment and build up the beach', 'To absorb wave energy', 'To redirect wave direction', 'To prevent cliff erosion directly'],
    explanation: 'Groynes interrupt longshore drift, causing sediment to accumulate on their updrift side.',
    tags: ['management', 'hard engineering'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-coast-007',
    subject: 'geography',
    topic: 'Coastal Systems',
    subtopic: 'Management',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which approach is an example of soft engineering coastal management?',
    correctAnswer: 'Beach nourishment',
    wrongAnswers: ['Sea walls', 'Rock armour', 'Groynes'],
    options: ['Beach nourishment', 'Sea walls', 'Rock armour', 'Groynes'],
    explanation: 'Beach nourishment adds sediment to beaches, working with natural processes.',
    tags: ['management', 'soft engineering'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-coast-008',
    subject: 'geography',
    topic: 'Coastal Systems',
    subtopic: 'Sea Level',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What type of coastline results from sea level rise relative to the land?',
    correctAnswer: 'Submergent coastline',
    wrongAnswers: ['Emergent coastline', 'Concordant coastline', 'Discordant coastline'],
    options: ['Submergent coastline', 'Emergent coastline', 'Concordant coastline', 'Discordant coastline'],
    explanation: 'Submergent coastlines form when sea level rises or land subsides, creating rias and fjords.',
    tags: ['sea level', 'coastlines'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-coast-009',
    subject: 'geography',
    topic: 'Coastal Systems',
    subtopic: 'Sediment Cells',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'A sediment cell is a closed system with no transfer of sediment between adjacent cells.',
    correctAnswer: 'True',
    explanation: 'Sediment cells are self-contained coastal units where sediment circulates within defined boundaries.',
    tags: ['sediment', 'systems'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-coast-010',
    subject: 'geography',
    topic: 'Coastal Systems',
    subtopic: 'Processes',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'If waves approach the coast at 45 degrees and travel 100m along the beach, calculate the distance moved parallel to the coast in metres.',
    correctAnswer: 71,
    explanation: 'Distance parallel to coast = 100 x cos(45) = 100 x 0.707 = 70.7m, rounded to 71m.',
    tags: ['calculations', 'longshore drift'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// GLACIAL SYSTEMS AND LANDSCAPES - 8 Questions
// ============================================================================

const glacialQuestions: Question[] = [
  {
    id: 'geo-al-glac-001',
    subject: 'geography',
    topic: 'Glacial Systems',
    subtopic: 'Glacial Processes',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the zone of accumulation in a glacier?',
    correctAnswer: 'The upper part where snow and ice gain exceeds loss',
    wrongAnswers: ['The lower part where melting occurs', 'The area at the glacier snout', 'The sides of the glacier'],
    options: ['The upper part where snow and ice gain exceeds loss', 'The lower part where melting occurs', 'The area at the glacier snout', 'The sides of the glacier'],
    explanation: 'The accumulation zone is where inputs exceed outputs, causing glacier growth.',
    tags: ['glacier budget', 'processes'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-glac-002',
    subject: 'geography',
    topic: 'Glacial Systems',
    subtopic: 'Erosion',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which erosion process involves the glacier freezing onto bedrock and plucking away fragments?',
    correctAnswer: 'Plucking',
    wrongAnswers: ['Abrasion', 'Freeze-thaw weathering', 'Rotational slipping'],
    options: ['Plucking', 'Abrasion', 'Freeze-thaw weathering', 'Rotational slipping'],
    explanation: 'Plucking occurs when meltwater refreezes around bedrock and pulls fragments away as ice moves.',
    tags: ['erosion', 'processes'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-glac-003',
    subject: 'geography',
    topic: 'Glacial Systems',
    subtopic: 'Landforms',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is a corrie (cirque)?',
    correctAnswer: 'An armchair-shaped hollow on a mountainside formed by glacial erosion',
    wrongAnswers: ['A U-shaped valley', 'A ridge between two valleys', 'A depositional landform'],
    options: ['An armchair-shaped hollow on a mountainside formed by glacial erosion', 'A U-shaped valley', 'A ridge between two valleys', 'A depositional landform'],
    explanation: 'Corries form through rotational ice movement, plucking and abrasion creating steep back walls.',
    tags: ['landforms', 'erosion'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-glac-004',
    subject: 'geography',
    topic: 'Glacial Systems',
    subtopic: 'Deposition',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What type of moraine is deposited at the furthest extent of glacial advance?',
    correctAnswer: 'Terminal moraine',
    wrongAnswers: ['Lateral moraine', 'Medial moraine', 'Ground moraine'],
    options: ['Terminal moraine', 'Lateral moraine', 'Medial moraine', 'Ground moraine'],
    explanation: 'Terminal moraines mark the maximum extent of glacial advance, forming ridges across valleys.',
    tags: ['deposition', 'landforms'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-glac-005',
    subject: 'geography',
    topic: 'Glacial Systems',
    subtopic: 'Landforms',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'A ___ is a knife-edge ridge formed when two corries erode back-to-back.',
    correctAnswer: 'arete',
    explanation: 'Aretes form as headward erosion of adjacent corries leaves a narrow, steep-sided ridge.',
    tags: ['landforms', 'erosion'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-glac-006',
    subject: 'geography',
    topic: 'Glacial Systems',
    subtopic: 'Fluvioglacial',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What are eskers?',
    correctAnswer: 'Sinuous ridges of sorted sand and gravel deposited by meltwater streams',
    wrongAnswers: ['Unsorted glacial till deposits', 'Elongated hills shaped by ice', 'Steep-sided valleys'],
    options: ['Sinuous ridges of sorted sand and gravel deposited by meltwater streams', 'Unsorted glacial till deposits', 'Elongated hills shaped by ice', 'Steep-sided valleys'],
    explanation: 'Eskers form in subglacial tunnels where meltwater deposits sorted sediments.',
    tags: ['fluvioglacial', 'landforms'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-glac-007',
    subject: 'geography',
    topic: 'Glacial Systems',
    subtopic: 'Processes',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Warm-based glaciers erode more effectively than cold-based glaciers.',
    correctAnswer: 'True',
    explanation: 'Warm-based glaciers have meltwater at the base enabling basal sliding and more active erosion.',
    tags: ['glacier types', 'erosion'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-glac-008',
    subject: 'geography',
    topic: 'Glacial Systems',
    subtopic: 'Landforms',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What distinguishes a drumlin from other glacial deposits?',
    correctAnswer: 'It has an elongated, streamlined shape aligned with ice flow direction',
    wrongAnswers: ['It consists of sorted sediments', 'It forms in front of the glacier', 'It is made of bedrock'],
    options: ['It has an elongated, streamlined shape aligned with ice flow direction', 'It consists of sorted sediments', 'It forms in front of the glacier', 'It is made of bedrock'],
    explanation: 'Drumlins are egg-shaped hills of till with steep stoss and gentle lee slopes.',
    tags: ['landforms', 'deposition'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// HAZARDS - 10 Questions
// ============================================================================

const hazardsQuestions: Question[] = [
  {
    id: 'geo-al-haz-001',
    subject: 'geography',
    topic: 'Hazards',
    subtopic: 'Tectonic Hazards',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What type of plate boundary is associated with the formation of the Himalayas?',
    correctAnswer: 'Continental-continental convergent',
    wrongAnswers: ['Oceanic-oceanic convergent', 'Divergent', 'Transform'],
    options: ['Continental-continental convergent', 'Oceanic-oceanic convergent', 'Divergent', 'Transform'],
    explanation: 'The Himalayas formed from the collision of the Indian and Eurasian continental plates.',
    tags: ['tectonics', 'plate boundaries'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-haz-002',
    subject: 'geography',
    topic: 'Hazards',
    subtopic: 'Volcanic Hazards',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which volcanic hazard consists of fast-moving clouds of hot gas and rock fragments?',
    correctAnswer: 'Pyroclastic flow',
    wrongAnswers: ['Lahar', 'Lava flow', 'Volcanic bomb'],
    options: ['Pyroclastic flow', 'Lahar', 'Lava flow', 'Volcanic bomb'],
    explanation: 'Pyroclastic flows can reach temperatures over 700C and speeds exceeding 100 km/h.',
    tags: ['volcanic', 'hazards'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-haz-003',
    subject: 'geography',
    topic: 'Hazards',
    subtopic: 'Earthquakes',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the difference between earthquake magnitude and intensity?',
    correctAnswer: 'Magnitude measures energy released; intensity measures effects at a location',
    wrongAnswers: ['Magnitude measures effects; intensity measures energy', 'They are the same thing', 'Magnitude only applies to volcanoes'],
    options: ['Magnitude measures energy released; intensity measures effects at a location', 'Magnitude measures effects; intensity measures energy', 'They are the same thing', 'Magnitude only applies to volcanoes'],
    explanation: 'Magnitude (Richter/moment) is fixed; intensity (Modified Mercalli) varies with distance and conditions.',
    tags: ['earthquakes', 'measurement'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-haz-004',
    subject: 'geography',
    topic: 'Hazards',
    subtopic: 'Atmospheric Hazards',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What conditions are required for tropical cyclone formation?',
    correctAnswer: 'Sea surface temperatures above 27C and the Coriolis effect',
    wrongAnswers: ['Cold ocean currents and low pressure', 'Mountain barriers and dry air', 'Polar air masses and jet streams'],
    options: ['Sea surface temperatures above 27C and the Coriolis effect', 'Cold ocean currents and low pressure', 'Mountain barriers and dry air', 'Polar air masses and jet streams'],
    explanation: 'Tropical cyclones need warm water for energy and the Coriolis effect for rotation.',
    tags: ['tropical cyclones', 'formation'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-haz-005',
    subject: 'geography',
    topic: 'Hazards',
    subtopic: 'Atmospheric Hazards',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'The calm centre of a tropical cyclone is called the ___.',
    correctAnswer: 'eye',
    explanation: 'The eye is the low-pressure centre where sinking air creates calm, clear conditions.',
    tags: ['tropical cyclones', 'structure'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-haz-006',
    subject: 'geography',
    topic: 'Hazards',
    subtopic: 'Hazard Management',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the hazard management cycle in correct order?',
    correctAnswer: 'Mitigation, Preparedness, Response, Recovery',
    wrongAnswers: ['Response, Recovery, Mitigation, Preparedness', 'Preparedness, Response, Mitigation, Recovery', 'Recovery, Response, Preparedness, Mitigation'],
    options: ['Mitigation, Preparedness, Response, Recovery', 'Response, Recovery, Mitigation, Preparedness', 'Preparedness, Response, Mitigation, Recovery', 'Recovery, Response, Preparedness, Mitigation'],
    explanation: 'The cycle moves from reducing risk, to preparing, to immediate response, to long-term recovery.',
    tags: ['management', 'cycle'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-haz-007',
    subject: 'geography',
    topic: 'Hazards',
    subtopic: 'Earthquakes',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'An earthquake measures 7.0 on the Richter scale. How many times more energy does it release than a magnitude 5.0 earthquake?',
    correctAnswer: 1000,
    explanation: 'Each whole number increase represents approximately 31.6 times more energy, so 31.6 x 31.6 = 1000.',
    tags: ['earthquakes', 'calculations'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-haz-008',
    subject: 'geography',
    topic: 'Hazards',
    subtopic: 'Mass Movement',
    difficulty: 'alevel',
    type: 'order',
    question: 'Order these mass movements from slowest to fastest.',
    correctAnswer: ['Soil creep', 'Solifluction', 'Slump', 'Rockfall'],
    explanation: 'Soil creep moves mm/year, solifluction cm/year, slumps m/day, rockfalls are instantaneous.',
    tags: ['mass movement', 'speeds'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-haz-009',
    subject: 'geography',
    topic: 'Hazards',
    subtopic: 'Volcanic Hazards',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the Volcanic Explosivity Index (VEI) based on?',
    correctAnswer: 'Volume of material ejected and height of eruption column',
    wrongAnswers: ['Number of casualties', 'Frequency of eruptions', 'Temperature of lava'],
    options: ['Volume of material ejected and height of eruption column', 'Number of casualties', 'Frequency of eruptions', 'Temperature of lava'],
    explanation: 'VEI ranges from 0-8 based on eruption volume and plume height.',
    tags: ['volcanic', 'measurement'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-haz-010',
    subject: 'geography',
    topic: 'Hazards',
    subtopic: 'Hazard Risk',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'According to the pressure and release model, what factors combine to create disaster risk?',
    correctAnswer: 'Hazard and vulnerability',
    wrongAnswers: ['Hazard and magnitude', 'Vulnerability and capacity', 'Exposure and frequency'],
    options: ['Hazard and vulnerability', 'Hazard and magnitude', 'Vulnerability and capacity', 'Exposure and frequency'],
    explanation: 'Risk = Hazard x Vulnerability. Without vulnerability, hazards do not become disasters.',
    tags: ['risk', 'vulnerability'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// ECOSYSTEMS UNDER STRESS - 7 Questions
// ============================================================================

const ecosystemsQuestions: Question[] = [
  {
    id: 'geo-al-eco-001',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Tropical Rainforests',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why do tropical rainforest soils tend to be nutrient-poor?',
    correctAnswer: 'Rapid decomposition and nutrient uptake keeps nutrients in biomass rather than soil',
    wrongAnswers: ['Cold temperatures slow decomposition', 'There is insufficient rainfall', 'Volcanic activity removes nutrients'],
    options: ['Rapid decomposition and nutrient uptake keeps nutrients in biomass rather than soil', 'Cold temperatures slow decomposition', 'There is insufficient rainfall', 'Volcanic activity removes nutrients'],
    explanation: 'The nutrient cycle is fast and closed; most nutrients are stored in living vegetation.',
    tags: ['rainforest', 'nutrient cycle'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-eco-002',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Succession',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is a plagioclimax community?',
    correctAnswer: 'A stable community maintained by human activity rather than natural processes',
    wrongAnswers: ['The final climatic climax vegetation', 'The first colonising species', 'A community destroyed by fire'],
    options: ['A stable community maintained by human activity rather than natural processes', 'The final climatic climax vegetation', 'The first colonising species', 'A community destroyed by fire'],
    explanation: 'Plagioclimax results from human intervention preventing natural succession, e.g., heathland.',
    tags: ['succession', 'human impact'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-eco-003',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Tropical Rainforests',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the main driver of deforestation in the Amazon?',
    correctAnswer: 'Agricultural expansion for cattle ranching and soy cultivation',
    wrongAnswers: ['Urban development', 'Mining operations', 'Natural forest fires'],
    options: ['Agricultural expansion for cattle ranching and soy cultivation', 'Urban development', 'Mining operations', 'Natural forest fires'],
    explanation: 'Approximately 80% of Amazon deforestation is linked to cattle ranching.',
    tags: ['deforestation', 'causes'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-eco-004',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Biodiversity',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Ecosystem services include provisioning, regulating, cultural, and supporting services.',
    correctAnswer: 'True',
    explanation: 'This classification by the Millennium Ecosystem Assessment covers all ways ecosystems benefit humans.',
    tags: ['ecosystem services', 'classification'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-eco-005',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Conservation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the purpose of ecological corridors in conservation?',
    correctAnswer: 'To connect fragmented habitats allowing species movement and genetic exchange',
    wrongAnswers: ['To provide tourist pathways', 'To increase agricultural land', 'To separate conflicting species'],
    options: ['To connect fragmented habitats allowing species movement and genetic exchange', 'To provide tourist pathways', 'To increase agricultural land', 'To separate conflicting species'],
    explanation: 'Corridors reduce habitat fragmentation impacts by enabling migration and gene flow.',
    tags: ['conservation', 'management'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-eco-006',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Climate Change',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'How does climate change threaten coral reef ecosystems?',
    correctAnswer: 'Ocean warming causes coral bleaching and acidification reduces calcification',
    wrongAnswers: ['Rising sea levels drown coral', 'Increased rainfall dilutes seawater', 'Reduced sunlight limits photosynthesis'],
    options: ['Ocean warming causes coral bleaching and acidification reduces calcification', 'Rising sea levels drown coral', 'Increased rainfall dilutes seawater', 'Reduced sunlight limits photosynthesis'],
    explanation: 'Bleaching expels zooxanthellae; acidification hinders coral skeleton formation.',
    tags: ['coral reefs', 'climate change'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-eco-007',
    subject: 'geography',
    topic: 'Ecosystems',
    subtopic: 'Energy Flow',
    difficulty: 'alevel',
    type: 'numeric',
    question: 'If producers capture 10,000 kJ of solar energy and only 10% transfers to each trophic level, how much energy is available to tertiary consumers in kJ?',
    correctAnswer: 10,
    explanation: '10,000 x 0.1 = 1000 (primary) x 0.1 = 100 (secondary) x 0.1 = 10 kJ (tertiary)',
    tags: ['energy flow', 'calculations'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// GLOBAL SYSTEMS AND GOVERNANCE - 5 Questions
// ============================================================================

const globalSystemsQuestions: Question[] = [
  {
    id: 'geo-al-glob-001',
    subject: 'geography',
    topic: 'Global Systems',
    subtopic: 'Globalisation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the main role of transnational corporations (TNCs) in globalisation?',
    correctAnswer: 'They integrate global production and create international trade flows',
    wrongAnswers: ['They restrict international trade', 'They only operate in one country', 'They reduce technology transfer'],
    options: ['They integrate global production and create international trade flows', 'They restrict international trade', 'They only operate in one country', 'They reduce technology transfer'],
    explanation: 'TNCs fragment production globally and are key agents of globalisation.',
    tags: ['globalisation', 'TNCs'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-glob-002',
    subject: 'geography',
    topic: 'Global Systems',
    subtopic: 'Trade',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is fair trade designed to address?',
    correctAnswer: 'Unequal trading relationships and producer exploitation',
    wrongAnswers: ['Reducing trade volumes', 'Increasing tariffs', 'Promoting free trade agreements'],
    options: ['Unequal trading relationships and producer exploitation', 'Reducing trade volumes', 'Increasing tariffs', 'Promoting free trade agreements'],
    explanation: 'Fair trade guarantees minimum prices and premiums to small-scale producers.',
    tags: ['trade', 'development'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-glob-003',
    subject: 'geography',
    topic: 'Global Systems',
    subtopic: 'Governance',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which international body is responsible for negotiating global climate agreements?',
    correctAnswer: 'UNFCCC (United Nations Framework Convention on Climate Change)',
    wrongAnswers: ['World Trade Organisation', 'World Bank', 'NATO'],
    options: ['UNFCCC (United Nations Framework Convention on Climate Change)', 'World Trade Organisation', 'World Bank', 'NATO'],
    explanation: 'UNFCCC organises annual COPs and negotiated the Paris Agreement.',
    tags: ['governance', 'climate'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-glob-004',
    subject: 'geography',
    topic: 'Global Systems',
    subtopic: 'Migration',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What are push factors in international migration?',
    correctAnswer: 'Negative conditions that encourage people to leave their origin country',
    wrongAnswers: ['Attractive features of the destination', 'Government migration policies', 'Distance between countries'],
    options: ['Negative conditions that encourage people to leave their origin country', 'Attractive features of the destination', 'Government migration policies', 'Distance between countries'],
    explanation: 'Push factors include conflict, poverty, and environmental hazards.',
    tags: ['migration', 'causes'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-glob-005',
    subject: 'geography',
    topic: 'Global Systems',
    subtopic: 'Development',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'The concept of ___ dependency describes how developing countries remain economically reliant on developed nations.',
    correctAnswer: 'neo-colonial',
    explanation: 'Neo-colonial dependency theory argues former colonies remain economically tied to former powers.',
    tags: ['development', 'theory'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// CHANGING PLACES - 5 Questions
// ============================================================================

const changingPlacesQuestions: Question[] = [
  {
    id: 'geo-al-place-001',
    subject: 'geography',
    topic: 'Changing Places',
    subtopic: 'Place Identity',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is place identity?',
    correctAnswer: 'The set of meanings and attachments people associate with a place',
    wrongAnswers: ['The coordinates of a location', 'The population of an area', 'The climate of a region'],
    options: ['The set of meanings and attachments people associate with a place', 'The coordinates of a location', 'The population of an area', 'The climate of a region'],
    explanation: 'Place identity is socially constructed through individual and collective experiences.',
    tags: ['place', 'identity'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-place-002',
    subject: 'geography',
    topic: 'Changing Places',
    subtopic: 'Place Representation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'How do media representations influence perceptions of place?',
    correctAnswer: 'They shape expectations and can reinforce stereotypes',
    wrongAnswers: ['They have no influence on perceptions', 'They only show objective reality', 'They reduce tourism everywhere'],
    options: ['They shape expectations and can reinforce stereotypes', 'They have no influence on perceptions', 'They only show objective reality', 'They reduce tourism everywhere'],
    explanation: 'Media can create positive or negative place images that influence behaviour.',
    tags: ['representation', 'media'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-place-003',
    subject: 'geography',
    topic: 'Changing Places',
    subtopic: 'Lived Experience',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What are insider and outsider perspectives on place?',
    correctAnswer: 'Insider views are from residents; outsider views are from visitors or non-residents',
    wrongAnswers: ['Insider views are official; outsider views are unofficial', 'They are the same thing', 'Insider views are negative; outsider positive'],
    options: ['Insider views are from residents; outsider views are from visitors or non-residents', 'Insider views are official; outsider views are unofficial', 'They are the same thing', 'Insider views are negative; outsider positive'],
    explanation: 'Insiders have deeper attachment and knowledge; outsiders may have more detached observations.',
    tags: ['perspectives', 'lived experience'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-place-004',
    subject: 'geography',
    topic: 'Changing Places',
    subtopic: 'Placemaking',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Gentrification always benefits existing communities in an area.',
    correctAnswer: 'False',
    explanation: 'Gentrification often displaces existing residents due to rising costs and changes community character.',
    tags: ['gentrification', 'change'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-place-005',
    subject: 'geography',
    topic: 'Changing Places',
    subtopic: 'Place Change',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is place marketing?',
    correctAnswer: 'Strategies to promote a positive image of a place to attract investment or visitors',
    wrongAnswers: ['Selling land in a place', 'Researching local history', 'Mapping an area'],
    options: ['Strategies to promote a positive image of a place to attract investment or visitors', 'Selling land in a place', 'Researching local history', 'Mapping an area'],
    explanation: 'Place marketing includes branding, events, and regeneration to improve place image.',
    tags: ['placemaking', 'regeneration'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// CONTEMPORARY URBAN ENVIRONMENTS - 5 Questions
// ============================================================================

const urbanQuestions: Question[] = [
  {
    id: 'geo-al-urban-001',
    subject: 'geography',
    topic: 'Urban Environments',
    subtopic: 'Urbanisation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is counter-urbanisation?',
    correctAnswer: 'Movement of people from cities to rural areas',
    wrongAnswers: ['Growth of cities', 'Movement from rural to urban areas', 'Decline of city centres'],
    options: ['Movement of people from cities to rural areas', 'Growth of cities', 'Movement from rural to urban areas', 'Decline of city centres'],
    explanation: 'Counter-urbanisation is driven by improved transport, telecommunications, and quality of life concerns.',
    tags: ['urbanisation', 'migration'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-urban-002',
    subject: 'geography',
    topic: 'Urban Environments',
    subtopic: 'Urban Form',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What urban growth pattern is characterised by low-density development spreading outwards?',
    correctAnswer: 'Urban sprawl',
    wrongAnswers: ['Urban consolidation', 'Vertical expansion', 'Urban renewal'],
    options: ['Urban sprawl', 'Urban consolidation', 'Vertical expansion', 'Urban renewal'],
    explanation: 'Urban sprawl extends city boundaries, often following transport routes.',
    tags: ['urban form', 'growth'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-urban-003',
    subject: 'geography',
    topic: 'Urban Environments',
    subtopic: 'Sustainability',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the urban heat island effect?',
    correctAnswer: 'Cities being warmer than surrounding rural areas due to human activities and surfaces',
    wrongAnswers: ['Cities being cooler due to shade', 'Islands in urban rivers', 'Urban flooding'],
    options: ['Cities being warmer than surrounding rural areas due to human activities and surfaces', 'Cities being cooler due to shade', 'Islands in urban rivers', 'Urban flooding'],
    explanation: 'Dark surfaces absorb heat, and human activities release thermal energy.',
    tags: ['climate', 'urban'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-urban-004',
    subject: 'geography',
    topic: 'Urban Environments',
    subtopic: 'Social Issues',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What are informal settlements?',
    correctAnswer: 'Unplanned housing areas without legal land tenure or basic services',
    wrongAnswers: ['Temporary construction camps', 'Government housing estates', 'Gated communities'],
    options: ['Unplanned housing areas without legal land tenure or basic services', 'Temporary construction camps', 'Government housing estates', 'Gated communities'],
    explanation: 'Informal settlements house over 1 billion people globally, often in developing countries.',
    tags: ['housing', 'inequality'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-urban-005',
    subject: 'geography',
    topic: 'Urban Environments',
    subtopic: 'Sustainability',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'A city that meets present needs without compromising future generations is called a ___ city.',
    correctAnswer: 'sustainable',
    explanation: 'Sustainable cities balance environmental, social and economic needs.',
    tags: ['sustainability', 'development'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// POPULATION AND ENVIRONMENT - 5 Questions
// ============================================================================

const populationQuestions: Question[] = [
  {
    id: 'geo-al-pop-001',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Demographic Transition',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In which stage of the demographic transition model does population growth peak?',
    correctAnswer: 'Stage 2',
    wrongAnswers: ['Stage 1', 'Stage 3', 'Stage 4'],
    options: ['Stage 2', 'Stage 1', 'Stage 3', 'Stage 4'],
    explanation: 'In Stage 2, death rates fall rapidly while birth rates remain high, causing rapid growth.',
    tags: ['DTM', 'population'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-pop-002',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Population Structure',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What does an ageing population pyramid typically show?',
    correctAnswer: 'A narrow base and wide top',
    wrongAnswers: ['A wide base and narrow top', 'Equal proportions at all ages', 'A bulge in the middle'],
    options: ['A narrow base and wide top', 'A wide base and narrow top', 'Equal proportions at all ages', 'A bulge in the middle'],
    explanation: 'Ageing populations have fewer young people and more elderly, creating an inverted pyramid.',
    tags: ['population structure', 'ageing'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-pop-003',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Carrying Capacity',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the environmental carrying capacity?',
    correctAnswer: 'The maximum population an environment can sustainably support',
    wrongAnswers: ['The current population of an area', 'The optimal population density', 'The birth rate minus death rate'],
    options: ['The maximum population an environment can sustainably support', 'The current population of an area', 'The optimal population density', 'The birth rate minus death rate'],
    explanation: 'Carrying capacity is determined by available resources and environmental conditions.',
    tags: ['carrying capacity', 'limits'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-pop-004',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Population-Environment',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is Malthusian theory primarily about?',
    correctAnswer: 'Population grows faster than food supply, leading to checks',
    wrongAnswers: ['Technology will solve all resource problems', 'Population will stabilise naturally', 'Resources are unlimited'],
    options: ['Population grows faster than food supply, leading to checks', 'Technology will solve all resource problems', 'Population will stabilise naturally', 'Resources are unlimited'],
    explanation: 'Malthus argued population grows geometrically while food grows arithmetically.',
    tags: ['theory', 'population'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-pop-005',
    subject: 'geography',
    topic: 'Population',
    subtopic: 'Population-Environment',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Boserup argued that population growth drives agricultural innovation.',
    correctAnswer: 'True',
    explanation: 'Boserup proposed necessity is the mother of invention - population pressure leads to intensification.',
    tags: ['theory', 'Boserup'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// RESOURCE SECURITY - 5 Questions
// ============================================================================

const resourceQuestions: Question[] = [
  {
    id: 'geo-al-res-001',
    subject: 'geography',
    topic: 'Resource Security',
    subtopic: 'Energy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is energy security?',
    correctAnswer: 'Uninterrupted availability of energy sources at an affordable price',
    wrongAnswers: ['Having nuclear weapons', 'Storing energy underground', 'Using only renewable energy'],
    options: ['Uninterrupted availability of energy sources at an affordable price', 'Having nuclear weapons', 'Storing energy underground', 'Using only renewable energy'],
    explanation: 'Energy security depends on reliability, affordability, and sustainability of supply.',
    tags: ['energy', 'security'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-res-002',
    subject: 'geography',
    topic: 'Resource Security',
    subtopic: 'Water',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is water stress?',
    correctAnswer: 'When water demand exceeds available supply or quality restricts use',
    wrongAnswers: ['Having too much water', 'Water at high pressure', 'Clean water availability'],
    options: ['When water demand exceeds available supply or quality restricts use', 'Having too much water', 'Water at high pressure', 'Clean water availability'],
    explanation: 'Water stress affects over 40% of the global population.',
    tags: ['water', 'security'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-res-003',
    subject: 'geography',
    topic: 'Resource Security',
    subtopic: 'Food',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What does food security require according to the FAO?',
    correctAnswer: 'Availability, access, utilisation, and stability of food supply',
    wrongAnswers: ['Only sufficient food production', 'Only food imports', 'Only local food production'],
    options: ['Availability, access, utilisation, and stability of food supply', 'Only sufficient food production', 'Only food imports', 'Only local food production'],
    explanation: 'The four pillars of food security address quantity, access, nutrition, and reliability.',
    tags: ['food', 'security'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-res-004',
    subject: 'geography',
    topic: 'Resource Security',
    subtopic: 'Minerals',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'Rare earth elements are critical for ___ technology but their supply is dominated by China.',
    correctAnswer: 'electronic',
    explanation: 'REEs are essential for smartphones, electric vehicles, and renewable energy technology.',
    tags: ['minerals', 'geopolitics'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-al-res-005',
    subject: 'geography',
    topic: 'Resource Security',
    subtopic: 'Sustainability',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What is the circular economy approach to resources?',
    correctAnswer: 'Designing out waste through reuse, repair and recycling',
    wrongAnswers: ['Extracting more resources', 'Linear take-make-dispose model', 'Importing more resources'],
    options: ['Designing out waste through reuse, repair and recycling', 'Extracting more resources', 'Linear take-make-dispose model', 'Importing more resources'],
    explanation: 'Circular economy aims to keep resources in use as long as possible.',
    tags: ['sustainability', 'circular economy'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// TERM DEFINITIONS - 20 Terms
// ============================================================================

export const alevelGeographyTerms: TermDefinition[] = [
  {
    id: 'geo-al-term-001',
    subject: 'geography',
    topic: 'Water and Carbon Cycles',
    difficulty: 'alevel',
    term: 'Evapotranspiration',
    definition: 'The combined process of evaporation from surfaces and transpiration from vegetation that transfers water to the atmosphere.',
    example: 'A forest has higher evapotranspiration rates than a car park due to plant activity.',
    tags: ['water cycle', 'processes']
  },
  {
    id: 'geo-al-term-002',
    subject: 'geography',
    topic: 'Water and Carbon Cycles',
    difficulty: 'alevel',
    term: 'Carbon sequestration',
    definition: 'The process of capturing and storing atmospheric carbon dioxide, either naturally or through technological means.',
    example: 'Peatlands sequester carbon by accumulating partially decomposed organic matter.',
    tags: ['carbon cycle', 'storage']
  },
  {
    id: 'geo-al-term-003',
    subject: 'geography',
    topic: 'Coastal Systems',
    difficulty: 'alevel',
    term: 'Sediment cell',
    definition: 'A self-contained section of coast within which sediment circulates, with minimal transfer to adjacent cells.',
    example: 'The UK coastline is divided into 11 major sediment cells for coastal management.',
    tags: ['coastal', 'systems']
  },
  {
    id: 'geo-al-term-004',
    subject: 'geography',
    topic: 'Coastal Systems',
    difficulty: 'alevel',
    term: 'Dynamic equilibrium',
    definition: 'A state of balance in a system where inputs and outputs are equal over time, though short-term fluctuations occur.',
    example: 'A beach in dynamic equilibrium maintains its profile despite seasonal wave changes.',
    tags: ['systems', 'balance']
  },
  {
    id: 'geo-al-term-005',
    subject: 'geography',
    topic: 'Glacial Systems',
    difficulty: 'alevel',
    term: 'Glacial budget',
    definition: 'The balance between accumulation (inputs) and ablation (outputs) in a glacier over a year.',
    example: 'A positive glacial budget means the glacier advances; negative means it retreats.',
    tags: ['glacial', 'balance']
  },
  {
    id: 'geo-al-term-006',
    subject: 'geography',
    topic: 'Glacial Systems',
    difficulty: 'alevel',
    term: 'Firn',
    definition: 'Compacted granular snow that is intermediate between fresh snow and glacial ice.',
    example: 'Snow transforms to firn after one year of compression, then to ice after several years.',
    tags: ['glacial', 'formation']
  },
  {
    id: 'geo-al-term-007',
    subject: 'geography',
    topic: 'Hazards',
    difficulty: 'alevel',
    term: 'Liquefaction',
    definition: 'A process where water-saturated soil temporarily loses strength and behaves like a liquid during an earthquake.',
    example: 'Liquefaction in Christchurch 2011 caused buildings to sink and tilt.',
    tags: ['earthquakes', 'effects']
  },
  {
    id: 'geo-al-term-008',
    subject: 'geography',
    topic: 'Hazards',
    difficulty: 'alevel',
    term: 'Disaster risk reduction',
    definition: 'The systematic approach to identifying, assessing and reducing disaster risks through prevention, mitigation and preparedness.',
    example: 'Building codes, early warning systems and education are disaster risk reduction strategies.',
    tags: ['management', 'risk']
  },
  {
    id: 'geo-al-term-009',
    subject: 'geography',
    topic: 'Ecosystems',
    difficulty: 'alevel',
    term: 'Trophic level',
    definition: 'A position in the food chain, determined by the number of energy-transfer steps from the primary producers.',
    example: 'Herbivores occupy the second trophic level, carnivores that eat them occupy the third.',
    tags: ['ecosystems', 'energy']
  },
  {
    id: 'geo-al-term-010',
    subject: 'geography',
    topic: 'Ecosystems',
    difficulty: 'alevel',
    term: 'Net primary productivity',
    definition: 'The rate at which producers store energy in new biomass, minus the energy used in respiration.',
    example: 'Tropical rainforests have high NPP due to warmth, moisture and sunlight availability.',
    tags: ['ecosystems', 'productivity']
  },
  {
    id: 'geo-al-term-011',
    subject: 'geography',
    topic: 'Global Systems',
    difficulty: 'alevel',
    term: 'Time-space compression',
    definition: 'The phenomenon of the world seeming smaller due to faster travel and instant communication technologies.',
    example: 'Video conferencing enables real-time meetings across continents, compressing space.',
    tags: ['globalisation', 'technology']
  },
  {
    id: 'geo-al-term-012',
    subject: 'geography',
    topic: 'Global Systems',
    difficulty: 'alevel',
    term: 'Glocalization',
    definition: 'The adaptation of global products or services to suit local markets and cultures.',
    example: 'McDonalds offers McAloo Tikki burgers in India to suit local tastes.',
    tags: ['globalisation', 'culture']
  },
  {
    id: 'geo-al-term-013',
    subject: 'geography',
    topic: 'Changing Places',
    difficulty: 'alevel',
    term: 'Sense of place',
    definition: 'The subjective emotional attachment and meaning that individuals or groups associate with a particular location.',
    example: 'Long-term residents develop a strong sense of place through memories and routines.',
    tags: ['place', 'identity']
  },
  {
    id: 'geo-al-term-014',
    subject: 'geography',
    topic: 'Changing Places',
    difficulty: 'alevel',
    term: 'Placelessness',
    definition: 'The loss of unique character in places due to standardised landscapes and globalised culture.',
    example: 'Identical shopping malls create placelessness as they look the same everywhere.',
    tags: ['place', 'identity']
  },
  {
    id: 'geo-al-term-015',
    subject: 'geography',
    topic: 'Urban Environments',
    difficulty: 'alevel',
    term: 'Megacity',
    definition: 'An urban agglomeration with a population exceeding 10 million inhabitants.',
    example: 'Tokyo, Delhi and Shanghai are megacities with populations over 25 million.',
    tags: ['urban', 'scale']
  },
  {
    id: 'geo-al-term-016',
    subject: 'geography',
    topic: 'Urban Environments',
    difficulty: 'alevel',
    term: 'Urban metabolism',
    definition: 'The flow of materials, energy and wastes through an urban system, analogous to a living organism.',
    example: 'Sustainable cities aim for circular urban metabolism with minimal waste outputs.',
    tags: ['urban', 'sustainability']
  },
  {
    id: 'geo-al-term-017',
    subject: 'geography',
    topic: 'Population',
    difficulty: 'alevel',
    term: 'Dependency ratio',
    definition: 'The ratio of non-working population (young and elderly) to working-age population, expressed as a percentage.',
    example: 'Japan has a high dependency ratio due to its ageing population.',
    tags: ['population', 'structure']
  },
  {
    id: 'geo-al-term-018',
    subject: 'geography',
    topic: 'Population',
    difficulty: 'alevel',
    term: 'Ecological footprint',
    definition: 'The amount of biologically productive land and water required to support a population and absorb its waste.',
    example: 'If everyone lived like Americans, we would need 5 Earths to sustain the population.',
    tags: ['population', 'environment']
  },
  {
    id: 'geo-al-term-019',
    subject: 'geography',
    topic: 'Resource Security',
    difficulty: 'alevel',
    term: 'Peak oil',
    definition: 'The theoretical point when global oil production reaches its maximum rate before entering terminal decline.',
    example: 'Peak oil concerns have driven investment in renewable energy alternatives.',
    tags: ['energy', 'resources']
  },
  {
    id: 'geo-al-term-020',
    subject: 'geography',
    topic: 'Resource Security',
    difficulty: 'alevel',
    term: 'Virtual water',
    definition: 'The total volume of water used in the production and supply chain of goods or services.',
    example: 'A kilogram of beef requires approximately 15,000 litres of virtual water to produce.',
    tags: ['water', 'trade']
  }
];

// ============================================================================
// FORMULAS - 10 Formulas
// ============================================================================

export const alevelGeographyFormulas: Formula[] = [
  {
    id: 'geo-al-form-001',
    subject: 'geography',
    topic: 'Rivers',
    difficulty: 'alevel',
    name: 'Hydraulic radius',
    formula: 'R = A / P',
    variables: [
      { symbol: 'R', meaning: 'hydraulic radius (m)' },
      { symbol: 'A', meaning: 'cross-sectional area (m2)' },
      { symbol: 'P', meaning: 'wetted perimeter (m)' }
    ],
    units: 'm',
    example: 'Channel with area 20m2 and wetted perimeter 10m: R = 20/10 = 2m'
  },
  {
    id: 'geo-al-form-002',
    subject: 'geography',
    topic: 'Rivers',
    difficulty: 'alevel',
    name: 'Channel gradient',
    formula: 'Gradient = (h1 - h2) / d x 100',
    variables: [
      { symbol: 'h1', meaning: 'upstream height (m)' },
      { symbol: 'h2', meaning: 'downstream height (m)' },
      { symbol: 'd', meaning: 'horizontal distance (m)' }
    ],
    units: '%',
    example: 'Heights of 150m and 100m over 1000m distance: Gradient = (150-100)/1000 x 100 = 5%'
  },
  {
    id: 'geo-al-form-003',
    subject: 'geography',
    topic: 'Population',
    difficulty: 'alevel',
    name: 'Population density',
    formula: 'PD = P / A',
    variables: [
      { symbol: 'PD', meaning: 'population density' },
      { symbol: 'P', meaning: 'total population' },
      { symbol: 'A', meaning: 'area (km2)' }
    ],
    units: 'people per km2',
    example: 'Population of 500,000 in 250km2: PD = 500,000/250 = 2,000 people/km2'
  },
  {
    id: 'geo-al-form-004',
    subject: 'geography',
    topic: 'Population',
    difficulty: 'alevel',
    name: 'Natural change rate',
    formula: 'NCR = (BR - DR) / 10',
    variables: [
      { symbol: 'NCR', meaning: 'natural change rate (%)' },
      { symbol: 'BR', meaning: 'birth rate per 1000' },
      { symbol: 'DR', meaning: 'death rate per 1000' }
    ],
    units: '%',
    example: 'Birth rate 20/1000, death rate 8/1000: NCR = (20-8)/10 = 1.2% growth'
  },
  {
    id: 'geo-al-form-005',
    subject: 'geography',
    topic: 'Population',
    difficulty: 'alevel',
    name: 'Dependency ratio',
    formula: 'DR = ((Y + E) / W) x 100',
    variables: [
      { symbol: 'DR', meaning: 'dependency ratio' },
      { symbol: 'Y', meaning: 'youth population (0-14)' },
      { symbol: 'E', meaning: 'elderly population (65+)' },
      { symbol: 'W', meaning: 'working age population (15-64)' }
    ],
    units: '%',
    example: 'Youth 20m, elderly 15m, working 65m: DR = ((20+15)/65) x 100 = 54%'
  },
  {
    id: 'geo-al-form-006',
    subject: 'geography',
    topic: 'Rivers',
    difficulty: 'alevel',
    name: 'River discharge',
    formula: 'Q = A x V',
    variables: [
      { symbol: 'Q', meaning: 'discharge (m3/s)' },
      { symbol: 'A', meaning: 'cross-sectional area (m2)' },
      { symbol: 'V', meaning: 'velocity (m/s)' }
    ],
    units: 'cumecs (m3/s)',
    example: 'Area 15m2, velocity 2m/s: Q = 15 x 2 = 30 cumecs'
  },
  {
    id: 'geo-al-form-007',
    subject: 'geography',
    topic: 'Ecosystems',
    difficulty: 'alevel',
    name: 'Simpson Diversity Index',
    formula: 'D = 1 - (sum(n(n-1)) / N(N-1))',
    variables: [
      { symbol: 'D', meaning: 'diversity index (0-1)' },
      { symbol: 'n', meaning: 'number of individuals per species' },
      { symbol: 'N', meaning: 'total number of individuals' }
    ],
    units: 'index value',
    example: 'D closer to 1 indicates higher diversity; D closer to 0 indicates lower diversity'
  },
  {
    id: 'geo-al-form-008',
    subject: 'geography',
    topic: 'Coastal Systems',
    difficulty: 'alevel',
    name: 'Wave steepness',
    formula: 'S = H / L',
    variables: [
      { symbol: 'S', meaning: 'wave steepness' },
      { symbol: 'H', meaning: 'wave height (m)' },
      { symbol: 'L', meaning: 'wavelength (m)' }
    ],
    units: 'ratio',
    example: 'Height 2m, wavelength 50m: S = 2/50 = 0.04 (constructive waves typically < 0.03)'
  },
  {
    id: 'geo-al-form-009',
    subject: 'geography',
    topic: 'Glacial Systems',
    difficulty: 'alevel',
    name: 'Glacial budget',
    formula: 'Bn = c - a',
    variables: [
      { symbol: 'Bn', meaning: 'net balance (m water equivalent)' },
      { symbol: 'c', meaning: 'accumulation (m water equivalent)' },
      { symbol: 'a', meaning: 'ablation (m water equivalent)' }
    ],
    units: 'm water equivalent',
    example: 'Accumulation 3m, ablation 2m: Bn = 3-2 = +1m (glacier advances)'
  },
  {
    id: 'geo-al-form-010',
    subject: 'geography',
    topic: 'Water Cycle',
    difficulty: 'alevel',
    name: 'Water balance equation',
    formula: 'P = Q + E +/- S',
    variables: [
      { symbol: 'P', meaning: 'precipitation (mm)' },
      { symbol: 'Q', meaning: 'runoff/discharge (mm)' },
      { symbol: 'E', meaning: 'evapotranspiration (mm)' },
      { symbol: 'S', meaning: 'change in storage (mm)' }
    ],
    units: 'mm',
    example: 'P=1000mm, Q=400mm, E=500mm: S change = 1000-400-500 = +100mm'
  }
];

// ============================================================================
// COMBINED EXPORT
// ============================================================================

export const alevelGeographyQuestions: Question[] = [
  ...waterCarbonQuestions,
  ...coastalQuestions,
  ...glacialQuestions,
  ...hazardsQuestions,
  ...ecosystemsQuestions,
  ...globalSystemsQuestions,
  ...changingPlacesQuestions,
  ...urbanQuestions,
  ...populationQuestions,
  ...resourceQuestions
];
