/**
 * GCSE Geography Expanded Question Bank
 * Gamified questions covering GCSE Geography topics
 */

import { Question, TermDefinition } from '../types';

// ============================================
// PHYSICAL LANDSCAPES UK
// ============================================

export const gcseGeographyPhysical: Question[] = [
  {
    id: 'geo-gcse-exp2-phys-001',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Wave Types',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each wave type to its characteristics:',
    correctAnswer: ['Constructive waves → Low, long wavelength, strong swash', 'Destructive waves → High, short wavelength, strong backwash'],
    wrongAnswers: [],
    explanation: 'Constructive waves BUILD beaches! Their gentle approach means swash > backwash, depositing material. Destructive waves DESTROY them - they crash hard and pull material back. The same beach can experience both depending on weather!',
    hint: 'Think about which wave type adds material',
    tags: ['coasts', 'waves', 'processes'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-phys-002',
    subject: 'geography',
    topic: 'Coasts',
    subtopic: 'Erosion Features',
    difficulty: 'gcse',
    type: 'order',
    question: 'Order the formation of a coastal arch and stack:',
    correctAnswer: ['Wave attacks weakness in cliff', 'Cave forms', 'Cave extends through headland to form arch', 'Arch roof collapses leaving a stack', 'Stack erodes to form a stump'],
    wrongAnswers: [],
    explanation: 'It\'s a dramatic sequence! Waves exploit cracks → caves → if back-to-back caves meet = arch → roof collapses = stack standing alone → eventually even the stack falls = stump. Visit Durdle Door (arch) or Old Harry Rocks (stacks) to see this!',
    hint: 'What happens when caves form on both sides of a headland?',
    tags: ['coasts', 'erosion', 'landforms'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-phys-003',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Long Profile',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The upper course of a river is characterized by:',
    correctAnswer: 'V-shaped valleys, waterfalls, and vertical erosion',
    wrongAnswers: ['Wide floodplains and meanders', 'Deltas and estuaries', 'Gentle gradients and deposition'],
    explanation: 'Upper course = steep and narrow! Rivers cut DOWN (vertical erosion) creating V-shaped valleys. Waterfalls form where hard rock overlies soft. As you move downstream, the profile changes: middle course gets meanders, lower course gets wide and flat.',
    hint: 'What does "upper" tell you about gradient?',
    tags: ['rivers', 'landscape', 'erosion'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-phys-004',
    subject: 'geography',
    topic: 'Rivers',
    subtopic: 'Flooding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which is a HARD engineering flood management technique?',
    correctAnswer: 'Building concrete flood walls',
    wrongAnswers: ['Planting trees in the catchment', 'Creating washlands for water storage', 'Restoring natural river meanders'],
    explanation: 'Hard engineering = concrete, steel, human structures fighting nature! Walls, dams, embankments. Soft engineering works WITH nature - afforestation slows runoff, washlands give water somewhere to go. Soft is usually cheaper and more sustainable, but hard can protect dense urban areas.',
    hint: 'Which involves construction rather than natural processes?',
    tags: ['rivers', 'flooding', 'management'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-phys-005',
    subject: 'geography',
    topic: 'Glaciation',
    subtopic: 'Landforms',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each glacial landform to its description:',
    correctAnswer: ['Corrie → Armchair-shaped hollow where glacier forms', 'Arête → Knife-edge ridge between two corries', 'U-shaped valley → Glacier-eroded valley with steep sides, flat floor', 'Drumlin → Elongated hill of glacial deposits'],
    wrongAnswers: [],
    explanation: 'Glaciers are landscape artists! Corries (cwms/cirques) are the starting points. Arêtes form when two corries erode back-to-back. U-shaped valleys are former V-shaped river valleys bulldozed by glaciers. Drumlins are deposited material streamlined by ice flow.',
    hint: 'Think about erosion vs. deposition features',
    tags: ['glaciation', 'landforms', 'processes'],
    yearGroup: [10, 11]
  },
];

// ============================================
// URBAN ISSUES AND CHALLENGES
// ============================================

export const gcseGeographyUrban: Question[] = [
  {
    id: 'geo-gcse-exp2-urb-001',
    subject: 'geography',
    topic: 'Urban Issues',
    subtopic: 'Urbanisation',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The fastest urbanisation is currently occurring in:',
    correctAnswer: 'LICs and NEEs (Low Income and Newly Emerging Economies)',
    wrongAnswers: ['HICs like the UK', 'Already fully urbanised countries', 'Rural farming communities'],
    explanation: 'Africa and Asia are urbanising fastest! Cities like Lagos and Mumbai grow by thousands daily. HICs are already 80%+ urban with slow growth. The UN predicts 68% of humanity will be urban by 2050. Managing this growth is the century\'s challenge.',
    hint: 'Where are cities growing most rapidly?',
    tags: ['urban', 'urbanisation', 'development'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-urb-002',
    subject: 'geography',
    topic: 'Urban Issues',
    subtopic: 'Megacities',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'A megacity has a population of at least how many million people?',
    correctAnswer: 10,
    wrongAnswers: [1, 5, 25],
    explanation: 'Megacity = 10+ million! In 1950, there were just 2 (New York, Tokyo). Now there are 30+. Tokyo is largest (~37 million). By 2030, there\'ll be 40+ megacities, mostly in Asia and Africa. These vast urban regions face huge infrastructure and environmental challenges.',
    hint: 'It\'s a round number in tens of millions',
    tags: ['urban', 'megacities', 'population'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-urb-003',
    subject: 'geography',
    topic: 'Urban Issues',
    subtopic: 'Squatter Settlements',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Problems in squatter settlements include:',
    correctAnswer: 'All of these',
    wrongAnswers: ['Lack of clean water and sanitation', 'No legal land ownership', 'Risk from fires and flooding'],
    explanation: 'Squatter settlements (favelas, slums) face multiple challenges! Residents often tap water illegally, have no sewers, can\'t get loans without legal ownership, and build with flammable materials in flood-prone areas. But they also show incredible community resilience and self-help.',
    hint: 'Think about basic services and security',
    tags: ['urban', 'squatter', 'challenges'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-urb-004',
    subject: 'geography',
    topic: 'Urban Issues',
    subtopic: 'Urban Regeneration',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Urban regeneration can lead to gentrification, where original residents are priced out of improved areas.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! When areas improve, property values rise. Original communities - often working-class or minority groups - can\'t afford rents. They\'re displaced by wealthier newcomers. Regeneration has benefits but must consider social costs and include affordable housing.',
    tags: ['urban', 'regeneration', 'gentrification'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-urb-005',
    subject: 'geography',
    topic: 'Urban Issues',
    subtopic: 'Sustainable Cities',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each sustainable urban feature to its benefit:',
    correctAnswer: ['Green roofs → Reduce urban heat island, absorb rainwater', 'Congestion charging → Reduces traffic and pollution', 'Urban farms → Local food, reduced transport emissions', 'Cycle lanes → Low-carbon transport, healthier population'],
    wrongAnswers: [],
    explanation: 'Sustainable cities work smarter! Green roofs cool buildings and absorb rain (reducing floods). Congestion charges funded London\'s buses. Urban farms bring food production close to consumers. Bike lanes in Copenhagen carry 50% of commuters. Each feature connects!',
    hint: 'Each intervention has environmental AND social benefits',
    tags: ['urban', 'sustainability', 'solutions'],
    yearGroup: [10, 11]
  },
];

// ============================================
// CHANGING ECONOMIC WORLD
// ============================================

export const gcseGeographyEconomic: Question[] = [
  {
    id: 'geo-gcse-exp2-econ-001',
    subject: 'geography',
    topic: 'Development',
    subtopic: 'Measuring Development',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The Human Development Index (HDI) combines measures of:',
    correctAnswer: 'Health, education, and living standards',
    wrongAnswers: ['GDP only', 'Population and land area', 'Military and economic power'],
    explanation: 'HDI gives a fuller picture than just money! It combines: life expectancy (health), years of schooling (education), and GNI per capita (income). A country with high income but poor health/education scores lower. Norway tops the HDI; Niger is near the bottom.',
    hint: 'HDI measures human wellbeing, not just wealth',
    tags: ['development', 'hdi', 'measurement'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-econ-002',
    subject: 'geography',
    topic: 'Development',
    subtopic: 'Development Gap',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which historical factor contributed to the development gap?',
    correctAnswer: 'Colonialism extracting resources and preventing industrialization',
    wrongAnswers: ['LICs having more natural disasters', 'Different human biology', 'Random chance'],
    explanation: 'Colonialism shaped the map! European powers extracted wealth from colonies while preventing local industry (to maintain export markets). Independence came with debt, artificial borders, and economies dependent on raw materials. Historical exploitation explains much of today\'s inequality.',
    hint: 'Think about the history of global trade patterns',
    tags: ['development', 'history', 'inequality'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-econ-003',
    subject: 'geography',
    topic: 'Development',
    subtopic: 'Strategies',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each development strategy to its approach:',
    correctAnswer: ['Top-down → Large government/international projects', 'Bottom-up → Community-led small-scale development', 'Aid → External financial/technical assistance', 'Fair trade → Better prices for producers'],
    wrongAnswers: [],
    explanation: 'Different scales, different approaches! Top-down (big dams, factories) is fast but can miss local needs. Bottom-up (microfinance, community wells) empowers locals but is slow to scale. Aid can help or create dependency. Fair trade gives farmers better income directly.',
    hint: 'Who makes the decisions in each approach?',
    tags: ['development', 'strategies', 'aid'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-econ-004',
    subject: 'geography',
    topic: 'UK Economy',
    subtopic: 'Deindustrialisation',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Deindustrialisation in the UK led to the decline of cities like Sheffield and the growth of the service sector.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Traditional industries (steel, coal, textiles) declined from the 1970s. Cities dependent on manufacturing suffered mass unemployment. The UK shifted to services: finance, retail, IT. London boomed while industrial heartlands struggled. The North-South divide widened.',
    tags: ['uk', 'deindustrialisation', 'economy'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-econ-005',
    subject: 'geography',
    topic: 'UK Economy',
    subtopic: 'Post-Industrial',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A science park typically locates near:',
    correctAnswer: 'Universities, for access to research and graduates',
    wrongAnswers: ['Coal mines', 'Ports for shipping', 'Remote rural areas'],
    explanation: 'Science parks need brains, not brawn! Cambridge Science Park grew around the university. Companies benefit from research partnerships and graduate recruitment. Clean, pleasant environments attract high-skilled workers. This is knowledge economy in action.',
    hint: 'What resource do high-tech companies need most?',
    tags: ['uk', 'science-parks', 'economy'],
    yearGroup: [10, 11]
  },
];

// ============================================
// RESOURCE MANAGEMENT
// ============================================

export const gcseGeographyResources: Question[] = [
  {
    id: 'geo-gcse-exp2-res-001',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Food',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Food insecurity is caused by:',
    correctAnswer: 'Complex factors including poverty, conflict, and climate change',
    wrongAnswers: ['Not enough food being produced globally', 'People choosing not to eat', 'Only drought and famine'],
    explanation: 'We produce enough food to feed everyone! The problem is access, not production. Poverty means people can\'t afford food. Conflict disrupts farming and supply chains. Climate change makes harvests unpredictable. Food insecurity is a social and political problem, not just agricultural.',
    hint: 'Is the issue production or distribution?',
    tags: ['resources', 'food', 'security'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-res-002',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Water',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The UK\'s water supply challenge is:',
    correctAnswer: 'Surplus in the north/west but deficit in the south/east where most people live',
    wrongAnswers: ['Complete water shortage everywhere', 'Too much water nationwide', 'Equal distribution across the country'],
    explanation: 'Mismatched supply and demand! Scotland and Wales have abundant water but fewer people. Southeast England has the population but lower rainfall. Solutions include reservoirs, water transfers (like the Severn-Thames link), and reducing London\'s leaky pipe losses!',
    hint: 'Where does it rain most? Where do most people live?',
    tags: ['resources', 'water', 'uk'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-res-003',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Energy',
    difficulty: 'gcse',
    type: 'order',
    question: 'Order these UK energy sources from largest to smallest share of electricity generation (2020s):',
    correctAnswer: ['Gas', 'Wind', 'Nuclear', 'Coal'],
    wrongAnswers: [],
    explanation: 'The UK\'s energy mix has transformed! Gas dominates but renewables are surging. Wind power sometimes generates more than gas on windy days. Nuclear provides steady baseload. Coal has collapsed from 40% (2012) to under 2% - the fastest decarbonisation of any major economy!',
    hint: 'Think about the UK\'s recent energy transition',
    tags: ['resources', 'energy', 'uk'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-res-004',
    subject: 'geography',
    topic: 'Resource Management',
    subtopic: 'Sustainability',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Renewable energy sources like wind and solar can provide all UK electricity needs without any backup power.',
    correctAnswer: 'False',
    wrongAnswers: [],
    explanation: 'False (currently)! Wind doesn\'t blow constantly; sun doesn\'t shine at night. We need "baseload" power (nuclear, gas with carbon capture, or massive batteries) for when renewables dip. Grid-scale storage and international connections help, but intermittency remains a challenge.',
    tags: ['resources', 'energy', 'sustainability'],
    yearGroup: [10, 11]
  },
];

// ============================================
// NATURAL HAZARDS
// ============================================

export const gcseGeographyHazards: Question[] = [
  {
    id: 'geo-gcse-exp2-haz-001',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Plate Boundaries',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each plate boundary to its hazards:',
    correctAnswer: ['Destructive → Earthquakes, explosive volcanoes, tsunamis', 'Constructive → Earthquakes, effusive volcanoes', 'Conservative → Earthquakes only (no volcanoes)'],
    wrongAnswers: [],
    explanation: 'Boundary type determines hazards! Destructive boundaries have it all - subduction creates deep earthquakes, explosive volcanoes, and tsunami risk (Japan, Chile). Constructive boundaries have gentler volcanism (Iceland). Conservative boundaries (San Andreas) have earthquakes but no magma reaches surface.',
    hint: 'Where is magma generated vs. where plates just slide?',
    tags: ['tectonics', 'boundaries', 'hazards'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-haz-002',
    subject: 'geography',
    topic: 'Tectonic Hazards',
    subtopic: 'Vulnerability',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A similar magnitude earthquake in Haiti caused 200,000+ deaths but in Japan caused hundreds. Why?',
    correctAnswer: 'Japan has earthquake-resistant buildings, emergency systems, and wealth',
    wrongAnswers: ['Japan is further from fault lines', 'Japanese earthquakes are weaker', 'Haiti has more people'],
    explanation: 'Vulnerability explains impact! Japan spends billions on earthquake-resistant construction, early warning systems, and education. Haiti had poorly constructed buildings, no warning systems, and poverty limited response. The same hazard, vastly different disasters. Development matters.',
    hint: 'What determines whether a hazard becomes a disaster?',
    tags: ['tectonics', 'vulnerability', 'development'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-haz-003',
    subject: 'geography',
    topic: 'Weather Hazards',
    subtopic: 'Tropical Storms',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Tropical storms form over oceans where water temperature is:',
    correctAnswer: 'Above 27°C, providing energy through evaporation',
    wrongAnswers: ['Below 15°C', 'Exactly 20°C', 'Any temperature'],
    explanation: 'Warm water is the fuel! Water above 27°C evaporates rapidly, rises, condenses (releasing heat energy), creating powerful updrafts. This is why tropical storms form in late summer (warmest seas) and weaken over land (no more fuel). Climate change = warmer seas = potentially stronger storms.',
    hint: 'What process transfers energy from sea to atmosphere?',
    tags: ['weather', 'tropical-storms', 'formation'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-haz-004',
    subject: 'geography',
    topic: 'Weather Hazards',
    subtopic: 'UK Weather',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The UK\'s weather is influenced by five air masses, making it changeable and unpredictable.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Arctic maritime (cold, wet), polar maritime (cool, wet), polar continental (cold, dry), tropical continental (hot, dry), tropical maritime (warm, wet) - they battle over Britain! No single air mass dominates, so weather changes constantly. That\'s why forecasting is hard!',
    tags: ['weather', 'uk', 'air-masses'],
    yearGroup: [10, 11]
  },
  {
    id: 'geo-gcse-exp2-haz-005',
    subject: 'geography',
    topic: 'Climate Change',
    subtopic: 'Evidence',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which provides evidence for past climate before temperature records existed?',
    correctAnswer: 'Ice cores showing trapped air bubbles from thousands of years ago',
    wrongAnswers: ['Satellite data', 'Weather station records', 'Newspaper archives'],
    explanation: 'Ice cores are time capsules! Antarctic ice contains air bubbles trapped for 800,000 years. Scientists analyze CO2 levels and isotopes to reconstruct past temperatures. Add tree rings, coral growth, and ocean sediments - multiple lines of evidence all show recent warming is unprecedented.',
    hint: 'What natural records preserve ancient climate data?',
    tags: ['climate', 'evidence', 'science'],
    yearGroup: [10, 11]
  },
];

// ============================================
// TERMS
// ============================================

export const gcseGeographyTermsExpanded: TermDefinition[] = [
  {
    id: 'geo-gcse-exp2-term-001',
    subject: 'geography',
    difficulty: 'gcse',
    term: 'Longshore Drift',
    definition: 'The movement of sediment along a coast by waves approaching at an angle',
    example: 'At Spurn Head, longshore drift has created a sand spit extending 5km into the Humber Estuary.',
    tags: ['coasts', 'processes', 'transport']
  },
  {
    id: 'geo-gcse-exp2-term-002',
    subject: 'geography',
    difficulty: 'gcse',
    term: 'Brownfield Site',
    definition: 'Land that was previously used for industry or commercial purposes, now available for redevelopment',
    example: 'The Olympic Park in Stratford was built on brownfield land that was formerly industrial wasteland.',
    tags: ['urban', 'land-use', 'development']
  },
  {
    id: 'geo-gcse-exp2-term-003',
    subject: 'geography',
    difficulty: 'gcse',
    term: 'Carbon Footprint',
    definition: 'The total amount of greenhouse gases produced directly and indirectly by an individual, event, organization, or product',
    example: 'Flying from London to New York creates about 1 tonne of CO2 per passenger.',
    tags: ['climate', 'sustainability', 'measurement']
  },
  {
    id: 'geo-gcse-exp2-term-004',
    subject: 'geography',
    difficulty: 'gcse',
    term: 'Multiplier Effect',
    definition: 'When one economic activity creates additional jobs and wealth in related industries',
    example: 'A new car factory creates jobs not just in manufacturing but in suppliers, services, and local shops.',
    tags: ['economy', 'development', 'employment']
  },
  {
    id: 'geo-gcse-exp2-term-005',
    subject: 'geography',
    difficulty: 'gcse',
    term: 'Pull Factor',
    definition: 'Positive aspects of a destination that attract migrants',
    example: 'Better wages, job opportunities, and safety are pull factors drawing people to cities.',
    tags: ['migration', 'urban', 'movement']
  },
  {
    id: 'geo-gcse-exp2-term-006',
    subject: 'geography',
    difficulty: 'gcse',
    term: 'Water Stress',
    definition: 'When water demand exceeds available supply or poor quality restricts use',
    example: 'Southeast England experiences water stress in summer when demand for irrigation increases.',
    tags: ['water', 'resources', 'management']
  },
  {
    id: 'geo-gcse-exp2-term-007',
    subject: 'geography',
    difficulty: 'gcse',
    term: 'Primary Effects',
    definition: 'Immediate impacts of a hazard event (deaths, injuries, building damage)',
    example: 'Primary effects of the Nepal 2015 earthquake included 9,000 deaths and destroyed buildings.',
    tags: ['hazards', 'impacts', 'assessment']
  },
  {
    id: 'geo-gcse-exp2-term-008',
    subject: 'geography',
    difficulty: 'gcse',
    term: 'Informal Economy',
    definition: 'Economic activities not officially recorded, taxed, or regulated by the government',
    example: 'Street vendors, waste pickers, and unlicensed taxi drivers work in the informal economy.',
    tags: ['economy', 'development', 'employment']
  },
];

// Combined exports
export const gcseGeographyExpandedNew = [
  ...gcseGeographyPhysical,
  ...gcseGeographyUrban,
  ...gcseGeographyEconomic,
  ...gcseGeographyResources,
  ...gcseGeographyHazards,
];
