// Geography Question Generator - UK Curriculum from KS1 to A-Level
import { Question } from '../index';

// ==========================================
// PHYSICAL GEOGRAPHY (Years 3-13)
// ==========================================

function generatePhysicalGeographyQuestions(): Question[] {
  const questions: Question[] = [];

  // Rivers (Years 4-10)
  const riverQs = [
    { q: 'What is the source of a river?', a: 'Where the river begins (usually high ground)', y: 4 },
    { q: 'What is the mouth of a river?', a: 'Where the river meets the sea', y: 4 },
    { q: 'What is a tributary?', a: 'A smaller river joining a larger one', y: 5 },
    { q: 'What is erosion?', a: 'The wearing away of rock and soil', y: 5 },
    { q: 'What is a meander?', a: 'A bend in a river', y: 5 },
    { q: 'What is an oxbow lake?', a: 'A curved lake formed when a meander is cut off', y: 7 },
    { q: 'What is a floodplain?', a: 'Flat land next to a river that floods', y: 6 },
    { q: 'What is deposition?', a: 'When a river drops the material it carries', y: 6 },
    { q: 'What is the longest river in the UK?', a: 'River Severn', y: 5 },
    { q: 'What river flows through London?', a: 'River Thames', y: 3 },
    { q: 'What is a waterfall?', a: 'Where water falls vertically over a rock step', y: 5 },
    { q: 'What causes waterfalls to retreat upstream?', a: 'Undercutting and erosion', y: 9 },
    { q: 'What is a delta?', a: 'Triangular land formed at a river mouth', y: 7 },
    { q: 'What is hydraulic action?', a: 'Erosion by the force of water', y: 8 },
    { q: 'What is attrition?', a: 'Rocks wearing down by hitting each other', y: 8 },
    { q: 'What is abrasion?', a: 'Erosion by rocks scraping against surfaces', y: 8 },
    { q: 'What is solution (in rivers)?', a: 'Chemical dissolving of rock', y: 8 },
  ];

  riverQs.forEach((item, i) => {
    questions.push({
      id: `geo-river-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['The end', 'A waterfall', 'A dam', 'River Amazon'].slice(0, 3),
      explanation: item.a,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'Rivers',
      difficulty: item.y <= 6 ? 'easy' : 'medium'
    });
  });

  // Coasts (Years 5-10)
  const coastQs = [
    { q: 'What are the main processes of coastal erosion?', a: 'Hydraulic action, abrasion, attrition, solution', y: 8 },
    { q: 'What is a cliff?', a: 'A steep rock face at the coast', y: 4 },
    { q: 'What is a cave?', a: 'A hollow carved in rock by waves', y: 5 },
    { q: 'What is an arch?', a: 'When two caves break through a headland', y: 5 },
    { q: 'What is a stack?', a: 'A pillar of rock left when an arch collapses', y: 5 },
    { q: 'What is a beach?', a: 'An area of sand or pebbles at the coast', y: 3 },
    { q: 'What is longshore drift?', a: 'Movement of sediment along the coast', y: 7 },
    { q: 'What is a spit?', a: 'A finger of sand extending into the sea', y: 8 },
    { q: 'What is a groyne?', a: 'A wooden or stone barrier to stop beach erosion', y: 7 },
    { q: 'What is a sea wall?', a: 'A hard engineering defence against waves', y: 7 },
    { q: 'What is soft engineering?', a: 'Working with nature to manage coasts', y: 9 },
    { q: 'What is hard engineering?', a: 'Using structures to manage coasts', y: 9 },
    { q: 'What is managed retreat?', a: 'Allowing the sea to flood areas', y: 10 },
  ];

  coastQs.forEach((item, i) => {
    questions.push({
      id: `geo-coast-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['A mountain', 'Rain erosion', 'A valley', 'A building'].slice(0, 3),
      explanation: item.a,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'Coasts',
      difficulty: item.y <= 6 ? 'easy' : 'medium'
    });
  });

  // Weather & Climate (Years 4-11)
  const weatherQs = [
    { q: 'What is weather?', a: 'Day-to-day conditions of the atmosphere', y: 3 },
    { q: 'What is climate?', a: 'Average weather over a long period', y: 5 },
    { q: 'What causes rain?', a: 'Water vapour condensing in clouds', y: 4 },
    { q: 'What is precipitation?', a: 'Water falling from clouds (rain, snow, hail)', y: 5 },
    { q: 'What is relief rainfall?', a: 'Rain caused by air rising over hills', y: 7 },
    { q: 'What is convectional rainfall?', a: 'Rain caused by hot air rising', y: 7 },
    { q: 'What is frontal rainfall?', a: 'Rain caused by warm and cold air meeting', y: 7 },
    { q: 'What is the water cycle?', a: 'The continuous movement of water on Earth', y: 4 },
    { q: 'What is evaporation?', a: 'Water turning from liquid to gas', y: 4 },
    { q: 'What is condensation?', a: 'Water vapour turning to liquid', y: 4 },
    { q: 'What is the UK\'s climate type?', a: 'Temperate maritime', y: 7 },
    { q: 'What causes the UK to be warmer than expected?', a: 'The North Atlantic Drift (Gulf Stream)', y: 8 },
    { q: 'What is climate change?', a: 'Long-term change in global temperatures', y: 6 },
    { q: 'What gas is mainly causing climate change?', a: 'Carbon dioxide (CO₂)', y: 7 },
    { q: 'What is the greenhouse effect?', a: 'Gases trapping heat in the atmosphere', y: 7 },
  ];

  weatherQs.forEach((item, i) => {
    questions.push({
      id: `geo-weather-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['Average daily temperature', 'Wind', 'Sunshine', 'Oxygen'].slice(0, 3),
      explanation: item.a,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'Weather & Climate',
      difficulty: item.y <= 5 ? 'easy' : 'medium'
    });
  });

  // Tectonic Hazards (Years 7-11)
  const tectonicQs = [
    { q: 'What causes earthquakes?', a: 'Movement of tectonic plates', y: 7 },
    { q: 'What is the Earth\'s crust?', a: 'The outer rocky layer of Earth', y: 7 },
    { q: 'What is the mantle?', a: 'The hot layer beneath the crust', y: 7 },
    { q: 'What is the core?', a: 'The centre of the Earth (inner and outer)', y: 7 },
    { q: 'What is a tectonic plate?', a: 'A section of the Earth\'s crust', y: 7 },
    { q: 'What is the epicentre of an earthquake?', a: 'The point on the surface above the focus', y: 9 },
    { q: 'What is the focus of an earthquake?', a: 'Where the earthquake starts underground', y: 9 },
    { q: 'What scale measures earthquake magnitude?', a: 'Richter scale or Moment Magnitude Scale', y: 8 },
    { q: 'What is a volcano?', a: 'An opening where magma reaches the surface', y: 6 },
    { q: 'What is magma?', a: 'Molten rock beneath the surface', y: 7 },
    { q: 'What is lava?', a: 'Molten rock on the surface', y: 7 },
    { q: 'What type of plate boundary causes mountains?', a: 'Convergent (destructive) boundaries', y: 9 },
    { q: 'What type of plate boundary has volcanoes?', a: 'Convergent and divergent boundaries', y: 9 },
    { q: 'What is the Ring of Fire?', a: 'A zone of earthquakes and volcanoes around the Pacific', y: 8 },
    { q: 'What is a tsunami?', a: 'A giant wave caused by underwater earthquakes', y: 8 },
  ];

  tectonicQs.forEach((item, i) => {
    questions.push({
      id: `geo-tectonic-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['Wind', 'The atmosphere', 'Rain', 'A normal wave'].slice(0, 3),
      explanation: item.a,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'Tectonics',
      difficulty: item.y <= 7 ? 'easy' : 'medium'
    });
  });

  return questions;
}

// ==========================================
// HUMAN GEOGRAPHY (Years 3-13)
// ==========================================

function generateHumanGeographyQuestions(): Question[] {
  const questions: Question[] = [];

  // Settlement (Years 4-9)
  const settlementQs = [
    { q: 'What is a settlement?', a: 'A place where people live', y: 3 },
    { q: 'What is a village?', a: 'A small settlement in the countryside', y: 3 },
    { q: 'What is a town?', a: 'A settlement larger than a village', y: 3 },
    { q: 'What is a city?', a: 'A large settlement, often with a cathedral', y: 3 },
    { q: 'What is the CBD?', a: 'Central Business District - the city centre', y: 8 },
    { q: 'What are suburbs?', a: 'Residential areas on the edge of cities', y: 5 },
    { q: 'What is urban?', a: 'Related to towns and cities', y: 4 },
    { q: 'What is rural?', a: 'Related to the countryside', y: 4 },
    { q: 'What is urbanisation?', a: 'The growth of urban areas', y: 7 },
    { q: 'What is counter-urbanisation?', a: 'People moving from cities to the countryside', y: 9 },
    { q: 'What is a function of a settlement?', a: 'The main purpose or activities there', y: 6 },
    { q: 'What is a site?', a: 'The actual land a settlement is built on', y: 6 },
    { q: 'What is the situation?', a: 'The location of a settlement in relation to surroundings', y: 6 },
  ];

  settlementQs.forEach((item, i) => {
    questions.push({
      id: `geo-settle-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['A type of river', 'A mountain', 'The CBD', 'A farm'].slice(0, 3),
      explanation: item.a,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'Settlement',
      difficulty: item.y <= 5 ? 'easy' : 'medium'
    });
  });

  // Population (Years 7-11)
  const populationQs = [
    { q: 'What is population?', a: 'The number of people living in an area', y: 5 },
    { q: 'What is population density?', a: 'Number of people per square kilometre', y: 7 },
    { q: 'What is birth rate?', a: 'Number of births per 1000 people per year', y: 8 },
    { q: 'What is death rate?', a: 'Number of deaths per 1000 people per year', y: 8 },
    { q: 'What is natural increase?', a: 'Birth rate minus death rate', y: 8 },
    { q: 'What is migration?', a: 'Movement of people from one place to another', y: 6 },
    { q: 'What is immigration?', a: 'People moving into a country', y: 7 },
    { q: 'What is emigration?', a: 'People moving out of a country', y: 7 },
    { q: 'What is a push factor?', a: 'A reason to leave a place', y: 7 },
    { q: 'What is a pull factor?', a: 'A reason to move to a place', y: 7 },
    { q: 'What is a population pyramid?', a: 'A graph showing age and gender of a population', y: 8 },
    { q: 'What is the demographic transition model?', a: 'A model showing population change over time', y: 9 },
    { q: 'What is an ageing population?', a: 'When the average age is increasing', y: 9 },
    { q: 'What is overpopulation?', a: 'When there are too many people for resources', y: 8 },
  ];

  populationQs.forEach((item, i) => {
    questions.push({
      id: `geo-pop-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['A type of map', 'A city', 'Number of houses', 'A graph'].slice(0, 3),
      explanation: item.a,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'Population',
      difficulty: item.y <= 7 ? 'easy' : 'medium'
    });
  });

  // Economic Activity (Years 6-11)
  const economicQs = [
    { q: 'What is a primary industry?', a: 'Extracting raw materials (farming, mining)', y: 7 },
    { q: 'What is a secondary industry?', a: 'Manufacturing and processing', y: 7 },
    { q: 'What is a tertiary industry?', a: 'Services (shops, schools, hospitals)', y: 7 },
    { q: 'What is a quaternary industry?', a: 'Research and development, IT', y: 9 },
    { q: 'What is employment?', a: 'Having a paid job', y: 5 },
    { q: 'What is unemployment?', a: 'Not having a job when wanting one', y: 6 },
    { q: 'What is trade?', a: 'Buying and selling goods between places', y: 5 },
    { q: 'What are exports?', a: 'Goods sold to other countries', y: 6 },
    { q: 'What are imports?', a: 'Goods bought from other countries', y: 6 },
    { q: 'What is globalisation?', a: 'The world becoming more connected', y: 9 },
    { q: 'What is a TNC?', a: 'Transnational Corporation - a global company', y: 9 },
    { q: 'What is fair trade?', a: 'Trading that gives fair prices to producers', y: 6 },
    { q: 'What is sustainable development?', a: 'Development meeting needs without harming the future', y: 8 },
  ];

  economicQs.forEach((item, i) => {
    questions.push({
      id: `geo-econ-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['A type of farming', 'A country', 'A river', 'A mountain'].slice(0, 3),
      explanation: item.a,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'Economic Geography',
      difficulty: item.y <= 7 ? 'easy' : 'medium'
    });
  });

  // Development (Years 8-11)
  const developmentQs = [
    { q: 'What is development?', a: 'Improving quality of life and wealth', y: 8 },
    { q: 'What is GDP?', a: 'Gross Domestic Product - total value of goods/services', y: 9 },
    { q: 'What is GNI?', a: 'Gross National Income - income per person', y: 9 },
    { q: 'What is HDI?', a: 'Human Development Index - measure of development', y: 9 },
    { q: 'What is a HIC?', a: 'High Income Country', y: 8 },
    { q: 'What is a LIC?', a: 'Low Income Country', y: 8 },
    { q: 'What is a NEE?', a: 'Newly Emerging Economy', y: 9 },
    { q: 'What is life expectancy?', a: 'Average age people are expected to live to', y: 7 },
    { q: 'What is literacy rate?', a: 'Percentage of people who can read and write', y: 7 },
    { q: 'What is the development gap?', a: 'The difference between rich and poor countries', y: 9 },
    { q: 'What is aid?', a: 'Help given to countries in need', y: 7 },
  ];

  developmentQs.forEach((item, i) => {
    questions.push({
      id: `geo-dev-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['A river', 'A type of rock', 'A weather pattern', 'A population measure'].slice(0, 3),
      explanation: item.a,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'Development',
      difficulty: item.y <= 8 ? 'medium' : 'hard'
    });
  });

  return questions;
}

// ==========================================
// UK GEOGRAPHY (Years 3-9)
// ==========================================

function generateUKGeographyQuestions(): Question[] {
  const questions: Question[] = [];

  // UK Countries and Capitals
  const ukBasics = [
    { q: 'What are the four countries of the UK?', a: 'England, Scotland, Wales, Northern Ireland', y: 3 },
    { q: 'What is the capital of England?', a: 'London', y: 3 },
    { q: 'What is the capital of Scotland?', a: 'Edinburgh', y: 3 },
    { q: 'What is the capital of Wales?', a: 'Cardiff', y: 3 },
    { q: 'What is the capital of Northern Ireland?', a: 'Belfast', y: 3 },
    { q: 'What sea is to the east of England?', a: 'North Sea', y: 4 },
    { q: 'What sea is to the west of Wales?', a: 'Irish Sea', y: 4 },
    { q: 'What channel separates England from France?', a: 'English Channel', y: 4 },
    { q: 'What is the highest mountain in the UK?', a: 'Ben Nevis (Scotland)', y: 4 },
    { q: 'What is the highest mountain in England?', a: 'Scafell Pike', y: 5 },
    { q: 'What is the highest mountain in Wales?', a: 'Snowdon (Yr Wyddfa)', y: 5 },
    { q: 'What is the Lake District?', a: 'A national park with lakes in northwest England', y: 5 },
    { q: 'What is the largest lake in the UK?', a: 'Loch Lomond (Scotland) or Lough Neagh (NI)', y: 5 },
  ];

  ukBasics.forEach((item, i) => {
    questions.push({
      id: `geo-uk-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['Manchester', 'Atlantic Ocean', 'Mount Everest', 'Paris'].slice(0, 3),
      explanation: item.a,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'UK Geography',
      difficulty: 'easy'
    });
  });

  // UK Cities and Regions
  const ukCities = [
    { city: 'Manchester', region: 'North West England', fact: 'Known for industry and football', y: 4 },
    { city: 'Birmingham', region: 'West Midlands', fact: 'UK\'s second largest city', y: 4 },
    { city: 'Liverpool', region: 'North West England', fact: 'Major port and the Beatles', y: 4 },
    { city: 'Leeds', region: 'Yorkshire', fact: 'Major financial centre', y: 5 },
    { city: 'Glasgow', region: 'Scotland', fact: 'Scotland\'s largest city', y: 4 },
    { city: 'Bristol', region: 'South West England', fact: 'Major port and historic city', y: 5 },
    { city: 'Newcastle', region: 'North East England', fact: 'On the River Tyne', y: 5 },
    { city: 'Sheffield', region: 'Yorkshire', fact: 'Famous for steel production', y: 5 },
  ];

  ukCities.forEach((item, i) => {
    questions.push({
      id: `geo-ukcity-${i}`,
      question: `In which region is ${item.city}?`,
      correctAnswer: item.region,
      wrongAnswers: ['South East England', 'North East Scotland', 'Central Wales', 'Northern Ireland'].filter(r => r !== item.region).slice(0, 3),
      explanation: `${item.city} is in ${item.region}. ${item.fact}.`,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'UK Geography',
      difficulty: 'easy'
    });
  });

  return questions;
}

// ==========================================
// WORLD GEOGRAPHY (Years 3-11)
// ==========================================

function generateWorldGeographyQuestions(): Question[] {
  const questions: Question[] = [];

  // Continents and Oceans
  const continents = [
    { q: 'How many continents are there?', a: 'Seven', y: 3 },
    { q: 'Name the seven continents', a: 'Africa, Antarctica, Asia, Australia, Europe, North America, South America', y: 4 },
    { q: 'What is the largest continent?', a: 'Asia', y: 4 },
    { q: 'What is the smallest continent?', a: 'Australia/Oceania', y: 4 },
    { q: 'How many oceans are there?', a: 'Five', y: 3 },
    { q: 'Name the five oceans', a: 'Pacific, Atlantic, Indian, Southern, Arctic', y: 4 },
    { q: 'What is the largest ocean?', a: 'Pacific Ocean', y: 4 },
    { q: 'What is the equator?', a: 'An imaginary line around the middle of Earth', y: 4 },
    { q: 'What is the Northern Hemisphere?', a: 'The half of Earth above the equator', y: 4 },
    { q: 'What is the Southern Hemisphere?', a: 'The half of Earth below the equator', y: 4 },
    { q: 'What is the Prime Meridian?', a: 'The 0° line of longitude through Greenwich', y: 5 },
  ];

  continents.forEach((item, i) => {
    questions.push({
      id: `geo-world-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['Six', 'Africa', 'Europe', 'Four'].slice(0, 3),
      explanation: item.a,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'World Geography',
      difficulty: 'easy'
    });
  });

  // Countries and Capitals
  const countries = [
    { country: 'France', capital: 'Paris', continent: 'Europe', y: 4 },
    { country: 'Germany', capital: 'Berlin', continent: 'Europe', y: 4 },
    { country: 'Spain', capital: 'Madrid', continent: 'Europe', y: 4 },
    { country: 'Italy', capital: 'Rome', continent: 'Europe', y: 4 },
    { country: 'USA', capital: 'Washington D.C.', continent: 'North America', y: 4 },
    { country: 'Australia', capital: 'Canberra', continent: 'Oceania', y: 5 },
    { country: 'China', capital: 'Beijing', continent: 'Asia', y: 5 },
    { country: 'Japan', capital: 'Tokyo', continent: 'Asia', y: 5 },
    { country: 'India', capital: 'New Delhi', continent: 'Asia', y: 5 },
    { country: 'Brazil', capital: 'Brasília', continent: 'South America', y: 5 },
    { country: 'Egypt', capital: 'Cairo', continent: 'Africa', y: 5 },
    { country: 'South Africa', capital: 'Pretoria (administrative)', continent: 'Africa', y: 6 },
    { country: 'Canada', capital: 'Ottawa', continent: 'North America', y: 5 },
    { country: 'Russia', capital: 'Moscow', continent: 'Europe/Asia', y: 6 },
    { country: 'Kenya', capital: 'Nairobi', continent: 'Africa', y: 6 },
  ];

  countries.forEach((item, i) => {
    questions.push({
      id: `geo-capital-${i}`,
      question: `What is the capital of ${item.country}?`,
      correctAnswer: item.capital,
      wrongAnswers: countries.filter(c => c.capital !== item.capital).slice(0, 3).map(c => c.capital),
      explanation: `${item.capital} is the capital of ${item.country} in ${item.continent}.`,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'World Geography',
      difficulty: 'easy'
    });

    questions.push({
      id: `geo-continent-${i}`,
      question: `Which continent is ${item.country} in?`,
      correctAnswer: item.continent,
      wrongAnswers: ['Africa', 'Asia', 'Europe', 'North America'].filter(c => c !== item.continent).slice(0, 3),
      explanation: `${item.country} is in ${item.continent}.`,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'World Geography',
      difficulty: 'easy'
    });
  });

  // Physical Features
  const worldFeatures = [
    { q: 'What is the longest river in the world?', a: 'River Nile', y: 5 },
    { q: 'What is the largest rainforest?', a: 'Amazon Rainforest', y: 5 },
    { q: 'What is the highest mountain in the world?', a: 'Mount Everest', y: 4 },
    { q: 'What is the largest desert in the world?', a: 'Sahara Desert', y: 5 },
    { q: 'What is the deepest ocean trench?', a: 'Mariana Trench', y: 7 },
    { q: 'What is the largest coral reef?', a: 'Great Barrier Reef', y: 6 },
    { q: 'Where are the polar regions?', a: 'Arctic (North) and Antarctic (South)', y: 4 },
    { q: 'What is a tropical rainforest?', a: 'Dense forest in hot, wet areas near equator', y: 5 },
    { q: 'What is a savanna?', a: 'Grassland with scattered trees in tropical areas', y: 6 },
    { q: 'What is a desert?', a: 'A dry area with little rainfall', y: 4 },
  ];

  worldFeatures.forEach((item, i) => {
    questions.push({
      id: `geo-feature-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['River Thames', 'Sahara Desert', 'Ben Nevis', 'Arctic'].slice(0, 3),
      explanation: item.a,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'World Geography',
      difficulty: 'easy'
    });
  });

  return questions;
}

// ==========================================
// MAP SKILLS (Years 3-11)
// ==========================================

function generateMapSkillsQuestions(): Question[] {
  const questions: Question[] = [];

  const mapQs = [
    { q: 'What is a map?', a: 'A drawing of an area from above', y: 3 },
    { q: 'What is a key on a map?', a: 'A guide explaining the symbols used', y: 3 },
    { q: 'What is scale on a map?', a: 'The ratio between map distance and real distance', y: 5 },
    { q: 'What does a compass show?', a: 'Direction (North, South, East, West)', y: 3 },
    { q: 'What are the four cardinal directions?', a: 'North, South, East, West', y: 3 },
    { q: 'What is a grid reference?', a: 'Numbers to find a location on a map', y: 5 },
    { q: 'How do you read a 4-figure grid reference?', a: 'Along the corridor, then up the stairs', y: 5 },
    { q: 'What is a 6-figure grid reference?', a: 'A more precise location within a grid square', y: 6 },
    { q: 'What are contour lines?', a: 'Lines joining points of equal height', y: 5 },
    { q: 'What do close contour lines show?', a: 'Steep slopes', y: 6 },
    { q: 'What do far apart contour lines show?', a: 'Gentle slopes', y: 6 },
    { q: 'What is an OS map?', a: 'Ordnance Survey - detailed UK maps', y: 5 },
    { q: 'What is latitude?', a: 'Horizontal lines measuring north/south of equator', y: 6 },
    { q: 'What is longitude?', a: 'Vertical lines measuring east/west of Prime Meridian', y: 6 },
    { q: 'What is relief on a map?', a: 'The shape of the land (hills, valleys)', y: 6 },
  ];

  mapQs.forEach((item, i) => {
    questions.push({
      id: `geo-map-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['A type of weather', 'A river', 'A city', 'Flat land'].slice(0, 3),
      explanation: item.a,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'Map Skills',
      difficulty: item.y <= 5 ? 'easy' : 'medium'
    });
  });

  return questions;
}

// ==========================================
// ENVIRONMENTAL ISSUES (Years 5-11)
// ==========================================

function generateEnvironmentalQuestions(): Question[] {
  const questions: Question[] = [];

  const envQs = [
    { q: 'What is pollution?', a: 'Harmful substances in the environment', y: 4 },
    { q: 'What is air pollution?', a: 'Harmful gases and particles in the air', y: 5 },
    { q: 'What is water pollution?', a: 'Harmful substances in water', y: 5 },
    { q: 'What is deforestation?', a: 'Cutting down forests', y: 5 },
    { q: 'Why are rainforests important?', a: 'They produce oxygen and are home to wildlife', y: 5 },
    { q: 'What is recycling?', a: 'Turning waste into new products', y: 3 },
    { q: 'What is renewable energy?', a: 'Energy from sources that won\'t run out', y: 6 },
    { q: 'Name three renewable energy sources', a: 'Solar, wind, hydroelectric', y: 6 },
    { q: 'What is non-renewable energy?', a: 'Energy from sources that will run out', y: 6 },
    { q: 'Name three fossil fuels', a: 'Coal, oil, natural gas', y: 6 },
    { q: 'What is global warming?', a: 'The increase in Earth\'s average temperature', y: 6 },
    { q: 'What causes rising sea levels?', a: 'Melting ice and thermal expansion of water', y: 8 },
    { q: 'What is biodiversity?', a: 'The variety of living things in an area', y: 7 },
    { q: 'What is conservation?', a: 'Protecting natural environments and wildlife', y: 5 },
    { q: 'What is a national park?', a: 'A protected area of natural beauty', y: 5 },
    { q: 'What is sustainability?', a: 'Meeting needs without damaging the future', y: 7 },
    { q: 'What is carbon footprint?', a: 'The amount of CO₂ produced by a person/activity', y: 8 },
  ];

  envQs.forEach((item, i) => {
    questions.push({
      id: `geo-env-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['A type of rock', 'A river', 'A country', 'Climate'].slice(0, 3),
      explanation: item.a,
      subject: 'geography' as any,
      yearGroup: item.y,
      topic: 'Environment',
      difficulty: item.y <= 6 ? 'easy' : 'medium'
    });
  });

  return questions;
}

// ==========================================
// EXPORT ALL GEOGRAPHY QUESTIONS
// ==========================================

export function generateAllGeographyQuestions(): Question[] {
  return [
    ...generatePhysicalGeographyQuestions(),
    ...generateHumanGeographyQuestions(),
    ...generateUKGeographyQuestions(),
    ...generateWorldGeographyQuestions(),
    ...generateMapSkillsQuestions(),
    ...generateEnvironmentalQuestions(),
  ];
}

export default generateAllGeographyQuestions;
