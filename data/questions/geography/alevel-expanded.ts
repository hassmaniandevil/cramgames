/**
 * A-Level Geography Expanded Question Bank
 * Advanced geographic analysis and case studies
 */

import { Question, TermDefinition } from '../types';

// ============================================
// PHYSICAL GEOGRAPHY - WATER CYCLE
// ============================================

export const alevelGeographyWater: Question[] = [
  {
    id: 'geo-alevel-exp-wat-001',
    subject: 'geography',
    topic: 'Water Cycle',
    subtopic: 'Drainage Basins',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In a drainage basin system, which is an OUTPUT?',
    correctAnswer: 'Evapotranspiration',
    wrongAnswers: ['Precipitation', 'Throughflow', 'Surface storage'],
    explanation: 'Systems thinking! Inputs enter the system (precipitation). Outputs leave (evapotranspiration, river discharge to sea). Throughput moves water within the system (infiltration, throughflow, groundwater flow). Storage holds water temporarily (lakes, soil moisture, groundwater).',
    hint: 'What leaves the drainage basin?',
    tags: ['water', 'systems', 'hydrology'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-wat-002',
    subject: 'geography',
    topic: 'Water Cycle',
    subtopic: 'Storm Hydrographs',
    difficulty: 'alevel',
    type: 'match',
    question: 'Match each factor to its effect on a storm hydrograph:',
    correctAnswer: ['Urbanisation → Shorter lag time, higher peak', 'Afforestation → Longer lag time, lower peak', 'Steep slopes → Shorter lag time', 'Permeable rock → Longer lag time, attenuated peak'],
    wrongAnswers: [],
    explanation: 'Hydrographs show how basins respond to rainfall! Impermeable surfaces (urban) cause rapid runoff = flashy hydrograph. Trees intercept rain and increase infiltration = slower response. Geology and slope also matter. These factors combine to create flood risk.',
    hint: 'What speeds up or slows down water reaching the river?',
    tags: ['water', 'hydrographs', 'factors'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-wat-003',
    subject: 'geography',
    topic: 'Water Cycle',
    subtopic: 'Water Insecurity',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The Aral Sea disaster was primarily caused by:',
    correctAnswer: 'Soviet irrigation projects diverting feeder rivers for cotton farming',
    wrongAnswers: ['Natural climate change', 'Tectonic activity', 'Overfishing'],
    explanation: 'The Aral Sea shrank 90% in decades! Soviet planners diverted the Amu Darya and Syr Darya for cotton irrigation. What was the world\'s 4th largest lake became several small, salty remnants. Local climate changed, fishing died, exposed seabed caused dust storms. Human water management gone catastrophically wrong.',
    hint: 'What human activity depleted the rivers feeding the sea?',
    tags: ['water', 'management', 'case-study'],
    yearGroup: [12, 13]
  },
];

// ============================================
// PHYSICAL GEOGRAPHY - CARBON CYCLE
// ============================================

export const alevelGeographyCarbon: Question[] = [
  {
    id: 'geo-alevel-exp-carb-001',
    subject: 'geography',
    topic: 'Carbon Cycle',
    subtopic: 'Stores and Fluxes',
    difficulty: 'alevel',
    type: 'order',
    question: 'Order these carbon stores from largest to smallest:',
    correctAnswer: ['Lithosphere (rocks and sediments)', 'Oceans (deep)', 'Soils', 'Atmosphere', 'Biosphere (living things)'],
    wrongAnswers: [],
    explanation: 'Scale matters! Rocks contain vastly more carbon than all life combined. Ocean depths are the next biggest store. Soils hold more than the atmosphere - which is why permafrost thaw is terrifying. The atmosphere is actually a small store, which is why adding to it matters so much!',
    hint: 'Think about which stores are measured in billions vs. millions of tonnes',
    tags: ['carbon', 'stores', 'cycle'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-carb-002',
    subject: 'geography',
    topic: 'Carbon Cycle',
    subtopic: 'Climate Feedbacks',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Permafrost thaw is a positive feedback because:',
    correctAnswer: 'Warming releases stored carbon, causing more warming',
    wrongAnswers: ['It increases snow cover', 'It creates a cooling effect', 'It absorbs more CO2'],
    explanation: 'Permafrost is a carbon bomb! Frozen soils contain ancient organic matter. When they thaw, microbes decompose it, releasing CO2 and methane. This causes more warming, more thawing, more release... a self-reinforcing spiral. Scientists call these "tipping points" - once triggered, hard to stop.',
    hint: 'Does the process amplify or dampen the original change?',
    tags: ['carbon', 'feedbacks', 'climate'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-carb-003',
    subject: 'geography',
    topic: 'Carbon Cycle',
    subtopic: 'Human Impact',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Tropical deforestation contributes more to climate change than all transportation combined.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Deforestation accounts for about 10% of global emissions - more than all cars, planes, and ships. Trees store carbon; when burned or decomposed, it releases. Plus, lost forests can\'t absorb future CO2. Protecting forests is as important as decarbonizing transport.',
    tags: ['carbon', 'deforestation', 'emissions'],
    yearGroup: [12, 13]
  },
];

// ============================================
// HUMAN GEOGRAPHY - GLOBALISATION
// ============================================

export const alevelGeographyGlobal: Question[] = [
  {
    id: 'geo-alevel-exp-glob-001',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'TNCs',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Transnational corporations (TNCs) contribute to the "race to the bottom" by:',
    correctAnswer: 'Seeking locations with lowest wages, taxes, and regulations',
    wrongAnswers: ['Improving working conditions globally', 'Staying in their home countries', 'Paying higher wages abroad'],
    explanation: 'TNCs play countries against each other! "Invest here - we have lower wages than Vietnam!" "No, come here - we\'ll cut your taxes!" Countries compete by lowering standards. Workers and environments can suffer. This is the dark side of footloose capital.',
    hint: 'What do TNCs seek to minimize?',
    tags: ['globalisation', 'tncs', 'regulation'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-glob-002',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'Networks',
    difficulty: 'alevel',
    type: 'match',
    question: 'Match each globalisation dimension to its example:',
    correctAnswer: ['Economic → Global supply chains and financial flows', 'Cultural → Spread of English language and American media', 'Political → International organizations like WTO and UN', 'Technological → Internet enabling instant global communication'],
    wrongAnswers: [],
    explanation: 'Globalisation is multidimensional! It\'s not just trade - it\'s ideas, culture, governance, and technology all interconnecting. These dimensions reinforce each other: technology enables trade enables cultural exchange enables political cooperation. Understanding globalisation requires seeing all dimensions.',
    hint: 'Each dimension involves different types of connections',
    tags: ['globalisation', 'dimensions', 'networks'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-glob-003',
    subject: 'geography',
    topic: 'Globalisation',
    subtopic: 'Switched-Off Places',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Which factor most explains why some places remain "switched off" from globalisation?',
    correctAnswer: 'Combination of poor infrastructure, conflict, and unfavorable governance',
    wrongAnswers: ['Geographic distance alone', 'Cultural resistance to change', 'Deliberate economic strategy'],
    explanation: 'Being "switched off" is rarely chosen! Conflict drives away investment (South Sudan, Yemen). Poor infrastructure (roads, ports, internet) prevents integration. Corrupt governance deters business. Some places get bypassed by global flows - left behind, not opting out.',
    hint: 'What prevents places from participating in global networks?',
    tags: ['globalisation', 'inequality', 'development'],
    yearGroup: [12, 13]
  },
];

// ============================================
// HUMAN GEOGRAPHY - MIGRATION
// ============================================

export const alevelGeographyMigration: Question[] = [
  {
    id: 'geo-alevel-exp-mig-001',
    subject: 'geography',
    topic: 'Migration',
    subtopic: 'Theories',
    difficulty: 'alevel',
    type: 'match',
    question: 'Match each migration theory to its key claim:',
    correctAnswer: ['Lee\'s model → Push-pull factors with intervening obstacles', 'Ravenstein\'s laws → Most migrants move short distances; longer moves go to major cities', 'Wallerstein → Migration as exploitation of periphery by core', 'Castles → Migration systems connecting specific origins and destinations'],
    wrongAnswers: [],
    explanation: 'Different theories explain different aspects! Lee adds obstacles and personal factors to push-pull. Ravenstein identified patterns (still valid 140 years later!). World systems theory sees migration as structural inequality. Systems theory maps specific migration corridors. Use multiple theories for full understanding.',
    hint: 'Each theory emphasizes different factors',
    tags: ['migration', 'theory', 'models'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-mig-002',
    subject: 'geography',
    topic: 'Migration',
    subtopic: 'Impacts',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Remittances (money sent home by migrants) exceed foreign aid to developing countries.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Remittances total $500+ billion annually - triple official development aid! They go directly to families, funding education, healthcare, and small businesses. Migration is a development strategy - but it can also create dependency and lose skilled workers (brain drain).',
    tags: ['migration', 'remittances', 'development'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-mig-003',
    subject: 'geography',
    topic: 'Migration',
    subtopic: 'Refugees',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Under international law, a refugee is someone who:',
    correctAnswer: 'Has fled their country due to persecution and cannot return safely',
    wrongAnswers: ['Moves for better economic opportunities', 'Is internally displaced within their country', 'Chooses to leave for any reason'],
    explanation: '1951 Refugee Convention defines it! Refugees face persecution based on race, religion, nationality, political opinion, or social group. They have legal rights to asylum. Economic migrants and IDPs (internally displaced persons) have different legal status. These distinctions matter for policy.',
    hint: 'What is the specific legal definition?',
    tags: ['migration', 'refugees', 'law'],
    yearGroup: [12, 13]
  },
];

// ============================================
// PHYSICAL GEOGRAPHY - HAZARDS
// ============================================

export const alevelGeographyHazards: Question[] = [
  {
    id: 'geo-alevel-exp-haz-001',
    subject: 'geography',
    topic: 'Hazards',
    subtopic: 'Risk Equation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The disaster risk equation is: Risk = Hazard × Vulnerability ÷ Capacity. This means:',
    correctAnswer: 'Same hazard causes different disasters depending on human factors',
    wrongAnswers: ['All hazards are equally dangerous', 'Physical factors alone determine risk', 'Capacity doesn\'t affect outcomes'],
    explanation: 'The equation shows disasters are NOT natural! A cyclone hitting Bangladesh (vulnerable, low capacity) vs. Japan (less vulnerable, high capacity) has very different impacts. Reducing vulnerability (poverty, inequality) and building capacity (warning systems, infrastructure) reduces risk even if hazards continue.',
    hint: 'What human factors are in the equation?',
    tags: ['hazards', 'risk', 'vulnerability'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-haz-002',
    subject: 'geography',
    topic: 'Hazards',
    subtopic: 'Management',
    difficulty: 'alevel',
    type: 'order',
    question: 'Order the stages of the hazard management cycle:',
    correctAnswer: ['Mitigation (reduce impact)', 'Preparedness (ready to respond)', 'Response (during/after event)', 'Recovery (return to normal)'],
    wrongAnswers: [],
    explanation: 'Effective management covers all stages! Mitigation = building codes, land use planning. Preparedness = warning systems, evacuation plans, drills. Response = search and rescue, emergency supplies. Recovery = rebuilding, psychological support. Then cycle back to mitigation based on lessons learned.',
    hint: 'Think about before, during, and after a disaster',
    tags: ['hazards', 'management', 'cycle'],
    yearGroup: [12, 13]
  },
  {
    id: 'geo-alevel-exp-haz-003',
    subject: 'geography',
    topic: 'Hazards',
    subtopic: 'Multi-Hazard Zones',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The Philippines is a multi-hazard hotspot because:',
    correctAnswer: 'Location on plate boundary, typhoon track, and volcanic arc',
    wrongAnswers: ['Poor government planning', 'Small land area', 'High population density only'],
    explanation: 'Geography concentrated hazards! The Philippines sits on the Pacific Ring of Fire (earthquakes, volcanoes), in typhoon alley (average 20 per year), with steep slopes (landslides) and low-lying coasts (flooding, storm surge). Add poverty and inequality, and vulnerability multiplies.',
    hint: 'What physical factors create multiple hazard types?',
    tags: ['hazards', 'multi-hazard', 'case-study'],
    yearGroup: [12, 13]
  },
];

// ============================================
// TERMS
// ============================================

export const alevelGeographyTermsExpanded: TermDefinition[] = [
  {
    id: 'geo-alevel-exp-term-001',
    subject: 'geography',
    difficulty: 'alevel',
    term: 'Anthropocene',
    definition: 'Proposed geological epoch marked by significant human impact on Earth\'s geology and ecosystems',
    example: 'Nuclear fallout, plastic pollution, and species extinctions leave permanent markers in geological strata - evidence of the Anthropocene.',
    tags: ['environment', 'geology', 'human-impact']
  },
  {
    id: 'geo-alevel-exp-term-002',
    subject: 'geography',
    difficulty: 'alevel',
    term: 'Deterritorialisation',
    definition: 'Weakening of connections between culture/identity and a specific geographic place through globalisation',
    example: 'Online communities, global brands, and diaspora connections mean identity is less tied to physical location.',
    tags: ['globalisation', 'culture', 'identity']
  },
  {
    id: 'geo-alevel-exp-term-003',
    subject: 'geography',
    difficulty: 'alevel',
    term: 'Tipping Point',
    definition: 'A threshold beyond which a system undergoes rapid, often irreversible change',
    example: 'If Greenland ice sheet melting crosses a tipping point, complete collapse becomes inevitable even if warming stops.',
    tags: ['climate', 'systems', 'change']
  },
  {
    id: 'geo-alevel-exp-term-004',
    subject: 'geography',
    difficulty: 'alevel',
    term: 'Glocalization',
    definition: 'Adaptation of global products or ideas to local cultures and conditions',
    example: 'McDonald\'s serves McAloo Tikki in India and Teriyaki burgers in Japan - global brand, local flavors.',
    tags: ['globalisation', 'culture', 'adaptation']
  },
  {
    id: 'geo-alevel-exp-term-005',
    subject: 'geography',
    difficulty: 'alevel',
    term: 'Circular Economy',
    definition: 'Economic model designed to eliminate waste by keeping products, materials, and resources in use',
    example: 'Instead of take-make-dispose, products are designed for repair, reuse, and recycling - closing the loop.',
    tags: ['sustainability', 'economy', 'resources']
  },
  {
    id: 'geo-alevel-exp-term-006',
    subject: 'geography',
    difficulty: 'alevel',
    term: 'Climate Justice',
    definition: 'The ethical principle that those least responsible for climate change should not bear its greatest burdens',
    example: 'Small island states contribute minimal emissions but face existential sea-level rise threats - raising climate justice concerns.',
    tags: ['climate', 'ethics', 'inequality']
  },
];

// Combined exports
export const alevelGeographyExpandedNew = [
  ...alevelGeographyWater,
  ...alevelGeographyCarbon,
  ...alevelGeographyGlobal,
  ...alevelGeographyMigration,
  ...alevelGeographyHazards,
];
