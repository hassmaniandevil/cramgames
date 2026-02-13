// Science Question Generators - Biology, Chemistry, Physics
import { Question } from '../index';

// ==========================================
// BIOLOGY QUESTIONS
// ==========================================

export function generateBiologyQuestions(): Question[] {
  const questions: Question[] = [];

  // Cell Biology (Years 7-13)
  const cellParts = [
    { part: 'nucleus', function: 'Contains genetic material (DNA)', found: 'plant and animal cells' },
    { part: 'cell membrane', function: 'Controls what enters and leaves the cell', found: 'all cells' },
    { part: 'cytoplasm', function: 'Where chemical reactions occur', found: 'all cells' },
    { part: 'mitochondria', function: 'Site of aerobic respiration, releases energy', found: 'plant and animal cells' },
    { part: 'ribosome', function: 'Site of protein synthesis', found: 'all cells' },
    { part: 'cell wall', function: 'Provides structural support', found: 'plant cells only' },
    { part: 'chloroplast', function: 'Site of photosynthesis', found: 'plant cells only' },
    { part: 'vacuole', function: 'Stores cell sap and maintains turgor', found: 'plant cells (large central)' },
  ];

  cellParts.forEach((cp, i) => {
    questions.push({
      id: `bio-cell-func-${i}`,
      question: `What is the function of the ${cp.part}?`,
      correctAnswer: cp.function,
      wrongAnswers: cellParts.filter(x => x.part !== cp.part).slice(0, 3).map(x => x.function),
      explanation: `The ${cp.part} ${cp.function.toLowerCase()}. Found in ${cp.found}.`,
      subject: 'biology',
      yearGroup: 7,
      topic: 'Cells',
      difficulty: 'easy'
    });

    questions.push({
      id: `bio-cell-name-${i}`,
      question: `Which cell structure ${cp.function.toLowerCase()}?`,
      correctAnswer: cp.part.charAt(0).toUpperCase() + cp.part.slice(1),
      wrongAnswers: cellParts.filter(x => x.part !== cp.part).slice(0, 3).map(x => x.part.charAt(0).toUpperCase() + x.part.slice(1)),
      explanation: `The ${cp.part} ${cp.function.toLowerCase()}.`,
      subject: 'biology',
      yearGroup: 7,
      topic: 'Cells',
      difficulty: 'easy'
    });
  });

  // Photosynthesis (Years 5-11)
  const photoQuestions = [
    { q: 'What is the word equation for photosynthesis?', a: 'Carbon dioxide + Water → Glucose + Oxygen', y: 7, d: 'easy' as const },
    { q: 'Where does photosynthesis occur?', a: 'Chloroplasts', y: 7, d: 'easy' as const },
    { q: 'What gas do plants absorb during photosynthesis?', a: 'Carbon dioxide', y: 5, d: 'easy' as const },
    { q: 'What gas do plants release during photosynthesis?', a: 'Oxygen', y: 5, d: 'easy' as const },
    { q: 'What is the green pigment that absorbs light called?', a: 'Chlorophyll', y: 6, d: 'easy' as const },
    { q: 'What type of energy do plants need for photosynthesis?', a: 'Light energy', y: 5, d: 'easy' as const },
    { q: 'What is the product of photosynthesis used for energy?', a: 'Glucose', y: 7, d: 'easy' as const },
    { q: 'Name a limiting factor of photosynthesis', a: 'Light intensity, CO₂ concentration, or temperature', y: 9, d: 'medium' as const },
    { q: 'At what wavelengths does chlorophyll absorb light best?', a: 'Red and blue light', y: 11, d: 'hard' as const },
    { q: 'What is the balanced symbol equation for photosynthesis?', a: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', y: 10, d: 'hard' as const },
  ];

  photoQuestions.forEach((pq, i) => {
    questions.push({
      id: `bio-photo-${i}`,
      question: pq.q,
      correctAnswer: pq.a,
      wrongAnswers: ['Respiration', 'Mitochondria', 'Nitrogen'].slice(0, 3),
      explanation: pq.a,
      subject: 'biology',
      yearGroup: pq.y,
      topic: 'Photosynthesis',
      difficulty: pq.d
    });
  });

  // Respiration (Years 7-13)
  const respQuestions = [
    { q: 'What is the word equation for aerobic respiration?', a: 'Glucose + Oxygen → Carbon dioxide + Water + Energy', y: 7, d: 'easy' as const },
    { q: 'Where does aerobic respiration mainly occur?', a: 'Mitochondria', y: 8, d: 'easy' as const },
    { q: 'What type of respiration occurs without oxygen?', a: 'Anaerobic respiration', y: 8, d: 'easy' as const },
    { q: 'What is produced by anaerobic respiration in muscles?', a: 'Lactic acid', y: 9, d: 'medium' as const },
    { q: 'What is produced by anaerobic respiration in yeast?', a: 'Ethanol and carbon dioxide', y: 9, d: 'medium' as const },
    { q: 'Which releases more energy per glucose: aerobic or anaerobic?', a: 'Aerobic respiration', y: 9, d: 'medium' as const },
    { q: 'What molecule is the universal energy currency of cells?', a: 'ATP (Adenosine triphosphate)', y: 12, d: 'medium' as const },
    { q: 'How many ATP are produced from one glucose in aerobic respiration?', a: 'Approximately 30-32 ATP', y: 13, d: 'hard' as const },
    { q: 'Name the three stages of aerobic respiration', a: 'Glycolysis, Krebs cycle, Electron transport chain', y: 12, d: 'hard' as const },
  ];

  respQuestions.forEach((rq, i) => {
    questions.push({
      id: `bio-resp-${i}`,
      question: rq.q,
      correctAnswer: rq.a,
      wrongAnswers: ['Photosynthesis', 'Nucleus', 'Protein'].slice(0, 3),
      explanation: rq.a,
      subject: 'biology',
      yearGroup: rq.y,
      topic: 'Respiration',
      difficulty: rq.d
    });
  });

  // Body Systems (Years 4-11)
  const bodyParts = [
    { organ: 'heart', system: 'circulatory', function: 'pumps blood around the body' },
    { organ: 'lungs', system: 'respiratory', function: 'exchange oxygen and carbon dioxide' },
    { organ: 'brain', system: 'nervous', function: 'controls the body and processes information' },
    { organ: 'stomach', system: 'digestive', function: 'breaks down food using acid and enzymes' },
    { organ: 'small intestine', system: 'digestive', function: 'absorbs nutrients into the blood' },
    { organ: 'large intestine', system: 'digestive', function: 'absorbs water from undigested food' },
    { organ: 'liver', system: 'digestive', function: 'produces bile and processes nutrients' },
    { organ: 'kidneys', system: 'excretory', function: 'filter blood and produce urine' },
    { organ: 'skin', system: 'integumentary', function: 'protects the body and regulates temperature' },
  ];

  bodyParts.forEach((bp, i) => {
    questions.push({
      id: `bio-body-func-${i}`,
      question: `What is the main function of the ${bp.organ}?`,
      correctAnswer: `It ${bp.function}`,
      wrongAnswers: bodyParts.filter(x => x.organ !== bp.organ).slice(0, 3).map(x => `It ${x.function}`),
      explanation: `The ${bp.organ} is part of the ${bp.system} system and ${bp.function}.`,
      subject: 'biology',
      yearGroup: 6,
      topic: 'Body systems',
      difficulty: 'easy'
    });

    questions.push({
      id: `bio-body-system-${i}`,
      question: `Which system is the ${bp.organ} part of?`,
      correctAnswer: bp.system.charAt(0).toUpperCase() + bp.system.slice(1) + ' system',
      wrongAnswers: ['Nervous system', 'Digestive system', 'Respiratory system'].filter(x => !x.toLowerCase().includes(bp.system)).slice(0, 3),
      explanation: `The ${bp.organ} is part of the ${bp.system} system.`,
      subject: 'biology',
      yearGroup: 6,
      topic: 'Body systems',
      difficulty: 'easy'
    });
  });

  // Genetics (Years 9-13)
  const geneticsQs = [
    { q: 'How many chromosomes are in a human body cell?', a: '46', y: 9, d: 'easy' as const },
    { q: 'How many chromosomes are in a human sex cell (gamete)?', a: '23', y: 9, d: 'easy' as const },
    { q: 'What is the name of the molecule that carries genetic information?', a: 'DNA (Deoxyribonucleic acid)', y: 9, d: 'easy' as const },
    { q: 'What are the four bases in DNA?', a: 'Adenine, Thymine, Guanine, Cytosine', y: 10, d: 'medium' as const },
    { q: 'Which base pairs with Adenine?', a: 'Thymine', y: 10, d: 'easy' as const },
    { q: 'Which base pairs with Guanine?', a: 'Cytosine', y: 10, d: 'easy' as const },
    { q: 'What type of cell division produces identical cells?', a: 'Mitosis', y: 9, d: 'easy' as const },
    { q: 'What type of cell division produces gametes?', a: 'Meiosis', y: 9, d: 'easy' as const },
    { q: 'What do we call different versions of the same gene?', a: 'Alleles', y: 10, d: 'medium' as const },
    { q: 'What is a genotype?', a: 'The genetic makeup of an organism', y: 10, d: 'medium' as const },
    { q: 'What is a phenotype?', a: 'The observable characteristics of an organism', y: 10, d: 'medium' as const },
    { q: 'If B is dominant and b is recessive, what phenotype does Bb show?', a: 'The dominant phenotype (B)', y: 10, d: 'medium' as const },
    { q: 'What is the term for having two identical alleles (BB or bb)?', a: 'Homozygous', y: 10, d: 'medium' as const },
    { q: 'What is the term for having two different alleles (Bb)?', a: 'Heterozygous', y: 10, d: 'medium' as const },
    { q: 'Who discovered the structure of DNA?', a: 'Watson and Crick (with Franklin and Wilkins)', y: 10, d: 'easy' as const },
    { q: 'What shape is the DNA molecule?', a: 'Double helix', y: 9, d: 'easy' as const },
  ];

  geneticsQs.forEach((gq, i) => {
    questions.push({
      id: `bio-genetics-${i}`,
      question: gq.q,
      correctAnswer: gq.a,
      wrongAnswers: ['48', 'Single helix', 'Uracil', 'Transcription'].slice(0, 3),
      explanation: gq.a,
      subject: 'biology',
      yearGroup: gq.y,
      topic: 'Genetics',
      difficulty: gq.d
    });
  });

  // Ecology (Years 7-11)
  const ecologyQs = [
    { q: 'What is a food chain?', a: 'A diagram showing the transfer of energy between organisms', y: 7, d: 'easy' as const },
    { q: 'What is a producer?', a: 'An organism that makes its own food (e.g., plants)', y: 7, d: 'easy' as const },
    { q: 'What is a consumer?', a: 'An organism that eats other organisms', y: 7, d: 'easy' as const },
    { q: 'What is a herbivore?', a: 'An animal that only eats plants', y: 4, d: 'easy' as const },
    { q: 'What is a carnivore?', a: 'An animal that only eats other animals', y: 4, d: 'easy' as const },
    { q: 'What is an omnivore?', a: 'An animal that eats both plants and animals', y: 4, d: 'easy' as const },
    { q: 'What is a decomposer?', a: 'An organism that breaks down dead material', y: 7, d: 'easy' as const },
    { q: 'What is a habitat?', a: 'The place where an organism lives', y: 4, d: 'easy' as const },
    { q: 'What is biodiversity?', a: 'The variety of living organisms in an area', y: 9, d: 'medium' as const },
    { q: 'What is the term for all the organisms of one species in an area?', a: 'Population', y: 8, d: 'medium' as const },
    { q: 'What is a community?', a: 'All the populations of different species in an area', y: 8, d: 'medium' as const },
    { q: 'What is an ecosystem?', a: 'A community of organisms and their physical environment', y: 8, d: 'medium' as const },
  ];

  ecologyQs.forEach((eq, i) => {
    questions.push({
      id: `bio-ecology-${i}`,
      question: eq.q,
      correctAnswer: eq.a,
      wrongAnswers: ['A type of cell', 'A chemical reaction', 'A body organ'].slice(0, 3),
      explanation: eq.a,
      subject: 'biology',
      yearGroup: eq.y,
      topic: 'Ecology',
      difficulty: eq.d
    });
  });

  // Human Biology (Years 4-11)
  const bloodTypes = ['red blood cells', 'white blood cells', 'platelets', 'plasma'];
  const bloodFunctions = [
    'carry oxygen using haemoglobin',
    'fight infection and disease',
    'help blood to clot',
    'carries dissolved substances around the body'
  ];

  bloodTypes.forEach((type, i) => {
    questions.push({
      id: `bio-blood-${i}`,
      question: `What is the function of ${type}?`,
      correctAnswer: bloodFunctions[i].charAt(0).toUpperCase() + bloodFunctions[i].slice(1),
      wrongAnswers: bloodFunctions.filter((_, fi) => fi !== i).map(f => f.charAt(0).toUpperCase() + f.slice(1)),
      explanation: `${type.charAt(0).toUpperCase() + type.slice(1)} ${bloodFunctions[i]}.`,
      subject: 'biology',
      yearGroup: 8,
      topic: 'Blood',
      difficulty: 'medium'
    });
  });

  return questions;
}

// ==========================================
// CHEMISTRY QUESTIONS
// ==========================================

export function generateChemistryQuestions(): Question[] {
  const questions: Question[] = [];

  // Atomic Structure (Years 7-13)
  const particles = [
    { name: 'proton', charge: 'positive (+1)', location: 'nucleus', mass: '1' },
    { name: 'neutron', charge: 'no charge (0)', location: 'nucleus', mass: '1' },
    { name: 'electron', charge: 'negative (-1)', location: 'shells around nucleus', mass: 'negligible' },
  ];

  particles.forEach((p, i) => {
    questions.push({
      id: `chem-particle-charge-${i}`,
      question: `What is the charge of a ${p.name}?`,
      correctAnswer: p.charge.charAt(0).toUpperCase() + p.charge.slice(1),
      wrongAnswers: particles.filter(x => x.name !== p.name).map(x => x.charge.charAt(0).toUpperCase() + x.charge.slice(1)),
      explanation: `A ${p.name} has a ${p.charge} charge.`,
      subject: 'chemistry',
      yearGroup: 7,
      topic: 'Atomic structure',
      difficulty: 'easy'
    });

    questions.push({
      id: `chem-particle-location-${i}`,
      question: `Where is a ${p.name} found in an atom?`,
      correctAnswer: `In the ${p.location}`,
      wrongAnswers: particles.filter(x => x.name !== p.name).map(x => `In the ${x.location}`),
      explanation: `${p.name.charAt(0).toUpperCase() + p.name.slice(1)}s are found in the ${p.location}.`,
      subject: 'chemistry',
      yearGroup: 7,
      topic: 'Atomic structure',
      difficulty: 'easy'
    });
  });

  // Elements and Periodic Table (Years 7-11)
  const elements = [
    { name: 'Hydrogen', symbol: 'H', number: 1, group: '1' },
    { name: 'Helium', symbol: 'He', number: 2, group: '0' },
    { name: 'Carbon', symbol: 'C', number: 6, group: '4' },
    { name: 'Nitrogen', symbol: 'N', number: 7, group: '5' },
    { name: 'Oxygen', symbol: 'O', number: 8, group: '6' },
    { name: 'Sodium', symbol: 'Na', number: 11, group: '1' },
    { name: 'Magnesium', symbol: 'Mg', number: 12, group: '2' },
    { name: 'Chlorine', symbol: 'Cl', number: 17, group: '7' },
    { name: 'Potassium', symbol: 'K', number: 19, group: '1' },
    { name: 'Calcium', symbol: 'Ca', number: 20, group: '2' },
    { name: 'Iron', symbol: 'Fe', number: 26, group: '8' },
    { name: 'Copper', symbol: 'Cu', number: 29, group: '11' },
    { name: 'Zinc', symbol: 'Zn', number: 30, group: '12' },
    { name: 'Gold', symbol: 'Au', number: 79, group: '11' },
  ];

  elements.forEach((el, i) => {
    questions.push({
      id: `chem-element-symbol-${i}`,
      question: `What is the chemical symbol for ${el.name}?`,
      correctAnswer: el.symbol,
      wrongAnswers: elements.filter(x => x.name !== el.name).slice(0, 3).map(x => x.symbol),
      explanation: `The chemical symbol for ${el.name} is ${el.symbol}.`,
      subject: 'chemistry',
      yearGroup: 7,
      topic: 'Elements',
      difficulty: 'easy'
    });

    questions.push({
      id: `chem-element-name-${i}`,
      question: `Which element has the symbol ${el.symbol}?`,
      correctAnswer: el.name,
      wrongAnswers: elements.filter(x => x.symbol !== el.symbol).slice(0, 3).map(x => x.name),
      explanation: `${el.symbol} is the symbol for ${el.name}.`,
      subject: 'chemistry',
      yearGroup: 7,
      topic: 'Elements',
      difficulty: 'easy'
    });
  });

  // Bonding (Years 9-13)
  const bondingQs = [
    { q: 'What type of bonding involves sharing electrons?', a: 'Covalent bonding', y: 9, d: 'easy' as const },
    { q: 'What type of bonding involves transferring electrons?', a: 'Ionic bonding', y: 9, d: 'easy' as const },
    { q: 'What type of bonding is found in metals?', a: 'Metallic bonding', y: 9, d: 'easy' as const },
    { q: 'Ionic compounds form between which types of elements?', a: 'Metals and non-metals', y: 9, d: 'easy' as const },
    { q: 'Covalent compounds form between which types of elements?', a: 'Non-metals only', y: 9, d: 'easy' as const },
    { q: 'Why do ionic compounds conduct electricity when molten?', a: 'Ions are free to move', y: 10, d: 'medium' as const },
    { q: 'Why don\'t covalent compounds conduct electricity?', a: 'No free electrons or ions', y: 10, d: 'medium' as const },
    { q: 'What is the structure of diamond?', a: 'Giant covalent structure', y: 10, d: 'medium' as const },
    { q: 'Why is diamond hard?', a: 'Strong covalent bonds in all directions', y: 10, d: 'medium' as const },
    { q: 'What is graphite used for?', a: 'Lubricant and pencil leads', y: 10, d: 'easy' as const },
    { q: 'Why can graphite conduct electricity?', a: 'Delocalised electrons between layers', y: 10, d: 'hard' as const },
  ];

  bondingQs.forEach((bq, i) => {
    questions.push({
      id: `chem-bonding-${i}`,
      question: bq.q,
      correctAnswer: bq.a,
      wrongAnswers: ['Nuclear bonding', 'Van der Waals', 'Hydrogen bonding'].slice(0, 3),
      explanation: bq.a,
      subject: 'chemistry',
      yearGroup: bq.y,
      topic: 'Bonding',
      difficulty: bq.d
    });
  });

  // Acids and Bases (Years 7-11)
  const acidBaseQs = [
    { q: 'What pH is neutral?', a: '7', y: 7, d: 'easy' as const },
    { q: 'What pH range indicates an acid?', a: 'Below 7 (0-6)', y: 7, d: 'easy' as const },
    { q: 'What pH range indicates an alkali?', a: 'Above 7 (8-14)', y: 7, d: 'easy' as const },
    { q: 'What indicator turns red in acid and blue in alkali?', a: 'Litmus', y: 7, d: 'easy' as const },
    { q: 'What is produced when an acid reacts with a base?', a: 'Salt and water', y: 8, d: 'easy' as const },
    { q: 'What gas is produced when an acid reacts with a metal?', a: 'Hydrogen', y: 8, d: 'easy' as const },
    { q: 'What gas is produced when an acid reacts with a carbonate?', a: 'Carbon dioxide', y: 8, d: 'easy' as const },
    { q: 'What is the test for hydrogen gas?', a: 'Burns with a squeaky pop', y: 8, d: 'easy' as const },
    { q: 'What is the test for carbon dioxide?', a: 'Turns limewater milky/cloudy', y: 8, d: 'easy' as const },
    { q: 'Complete: acid + alkali →', a: 'Salt + water', y: 8, d: 'easy' as const },
    { q: 'Complete: acid + metal →', a: 'Salt + hydrogen', y: 8, d: 'easy' as const },
    { q: 'Complete: acid + carbonate →', a: 'Salt + water + carbon dioxide', y: 8, d: 'medium' as const },
    { q: 'What salt is formed from hydrochloric acid and sodium hydroxide?', a: 'Sodium chloride (NaCl)', y: 9, d: 'medium' as const },
    { q: 'What ion do all acids produce in solution?', a: 'H⁺ (hydrogen ions)', y: 10, d: 'medium' as const },
    { q: 'What ion do all alkalis produce in solution?', a: 'OH⁻ (hydroxide ions)', y: 10, d: 'medium' as const },
  ];

  acidBaseQs.forEach((ab, i) => {
    questions.push({
      id: `chem-acidbase-${i}`,
      question: ab.q,
      correctAnswer: ab.a,
      wrongAnswers: ['14', 'Oxygen', 'Red'].slice(0, 3),
      explanation: ab.a,
      subject: 'chemistry',
      yearGroup: ab.y,
      topic: 'Acids and bases',
      difficulty: ab.d
    });
  });

  // Reactivity Series (Years 8-11)
  const metals = ['Potassium', 'Sodium', 'Calcium', 'Magnesium', 'Aluminium', 'Zinc', 'Iron', 'Copper', 'Silver', 'Gold'];
  const reactivityPairs = [
    { q: 'Which is more reactive: magnesium or iron?', a: 'Magnesium' },
    { q: 'Which is more reactive: zinc or copper?', a: 'Zinc' },
    { q: 'Which is more reactive: sodium or calcium?', a: 'Sodium' },
    { q: 'Which is the most reactive metal in Group 1?', a: 'Francium (or Caesium of common ones)' },
    { q: 'What is the most reactive common metal?', a: 'Potassium' },
    { q: 'What is the least reactive common metal?', a: 'Gold' },
  ];

  reactivityPairs.forEach((rp, i) => {
    questions.push({
      id: `chem-reactivity-${i}`,
      question: rp.q,
      correctAnswer: rp.a,
      wrongAnswers: metals.filter(m => m !== rp.a).slice(0, 3),
      explanation: `${rp.a} is the answer based on the reactivity series.`,
      subject: 'chemistry',
      yearGroup: 9,
      topic: 'Reactivity',
      difficulty: 'medium'
    });
  });

  // States of Matter (Years 4-8)
  const statesQs = [
    { q: 'What are the three states of matter?', a: 'Solid, liquid, gas', y: 4, d: 'easy' as const },
    { q: 'What is it called when a solid turns into a liquid?', a: 'Melting', y: 4, d: 'easy' as const },
    { q: 'What is it called when a liquid turns into a gas?', a: 'Evaporation or boiling', y: 4, d: 'easy' as const },
    { q: 'What is it called when a gas turns into a liquid?', a: 'Condensation', y: 4, d: 'easy' as const },
    { q: 'What is it called when a liquid turns into a solid?', a: 'Freezing', y: 4, d: 'easy' as const },
    { q: 'At what temperature does water freeze?', a: '0°C', y: 4, d: 'easy' as const },
    { q: 'At what temperature does water boil?', a: '100°C', y: 4, d: 'easy' as const },
    { q: 'In which state of matter are particles closest together?', a: 'Solid', y: 5, d: 'easy' as const },
    { q: 'In which state of matter do particles move fastest?', a: 'Gas', y: 5, d: 'easy' as const },
    { q: 'What is sublimation?', a: 'When a solid turns directly into a gas', y: 8, d: 'medium' as const },
  ];

  statesQs.forEach((sq, i) => {
    questions.push({
      id: `chem-states-${i}`,
      question: sq.q,
      correctAnswer: sq.a,
      wrongAnswers: ['Plasma', 'Diffusion', '50°C'].slice(0, 3),
      explanation: sq.a,
      subject: 'chemistry',
      yearGroup: sq.y,
      topic: 'States of matter',
      difficulty: sq.d
    });
  });

  return questions;
}

// ==========================================
// PHYSICS QUESTIONS
// ==========================================

export function generatePhysicsQuestions(): Question[] {
  const questions: Question[] = [];

  // Forces (Years 5-11)
  const forcesQs = [
    { q: 'What force pulls objects towards Earth?', a: 'Gravity', y: 5, d: 'easy' as const },
    { q: 'What is the unit of force?', a: 'Newtons (N)', y: 7, d: 'easy' as const },
    { q: 'What force opposes motion between surfaces?', a: 'Friction', y: 5, d: 'easy' as const },
    { q: 'What is air resistance?', a: 'The force that opposes motion through air', y: 6, d: 'easy' as const },
    { q: 'What is weight?', a: 'The force of gravity on an object', y: 7, d: 'easy' as const },
    { q: 'What is mass?', a: 'The amount of matter in an object', y: 7, d: 'easy' as const },
    { q: 'What is the formula linking weight, mass and gravity?', a: 'W = mg', y: 8, d: 'easy' as const },
    { q: 'What is the value of g on Earth?', a: 'Approximately 10 N/kg (or 9.8 N/kg)', y: 8, d: 'easy' as const },
    { q: 'What is Newton\'s First Law?', a: 'An object stays at rest or constant velocity unless acted on by a force', y: 9, d: 'medium' as const },
    { q: 'What is Newton\'s Second Law?', a: 'F = ma (Force = mass × acceleration)', y: 9, d: 'medium' as const },
    { q: 'What is Newton\'s Third Law?', a: 'Every action has an equal and opposite reaction', y: 9, d: 'medium' as const },
    { q: 'What is terminal velocity?', a: 'Maximum velocity when drag equals weight', y: 10, d: 'medium' as const },
  ];

  forcesQs.forEach((fq, i) => {
    questions.push({
      id: `phys-forces-${i}`,
      question: fq.q,
      correctAnswer: fq.a,
      wrongAnswers: ['Magnetism', 'Joules', 'Speed'].slice(0, 3),
      explanation: fq.a,
      subject: 'physics',
      yearGroup: fq.y,
      topic: 'Forces',
      difficulty: fq.d
    });
  });

  // Energy (Years 5-11)
  const energyTypes = [
    { type: 'Kinetic', desc: 'energy of moving objects' },
    { type: 'Gravitational potential', desc: 'energy stored due to height' },
    { type: 'Elastic potential', desc: 'energy stored in stretched/compressed objects' },
    { type: 'Chemical', desc: 'energy stored in bonds (food, fuel, batteries)' },
    { type: 'Thermal', desc: 'energy related to temperature' },
    { type: 'Nuclear', desc: 'energy stored in atomic nuclei' },
    { type: 'Light', desc: 'energy carried by electromagnetic waves' },
    { type: 'Sound', desc: 'energy carried by vibrations' },
    { type: 'Electrical', desc: 'energy carried by electric current' },
  ];

  energyTypes.forEach((et, i) => {
    questions.push({
      id: `phys-energy-type-${i}`,
      question: `What is ${et.type.toLowerCase()} energy?`,
      correctAnswer: `Energy ${et.desc}`,
      wrongAnswers: energyTypes.filter(x => x.type !== et.type).slice(0, 3).map(x => `Energy ${x.desc}`),
      explanation: `${et.type} energy is ${et.desc}.`,
      subject: 'physics',
      yearGroup: 7,
      topic: 'Energy',
      difficulty: 'easy'
    });
  });

  const energyFormulas = [
    { q: 'What is the formula for kinetic energy?', a: 'KE = ½mv²', y: 10, d: 'easy' as const },
    { q: 'What is the formula for gravitational potential energy?', a: 'GPE = mgh', y: 10, d: 'easy' as const },
    { q: 'What is the formula for power?', a: 'P = E/t or P = W/t', y: 10, d: 'easy' as const },
    { q: 'What is the unit of energy?', a: 'Joules (J)', y: 7, d: 'easy' as const },
    { q: 'What is the unit of power?', a: 'Watts (W)', y: 7, d: 'easy' as const },
    { q: 'What does the law of conservation of energy state?', a: 'Energy cannot be created or destroyed, only transferred', y: 8, d: 'medium' as const },
  ];

  energyFormulas.forEach((ef, i) => {
    questions.push({
      id: `phys-energy-formula-${i}`,
      question: ef.q,
      correctAnswer: ef.a,
      wrongAnswers: ['E = mc²', 'V = IR', 'F = ma'].slice(0, 3),
      explanation: ef.a,
      subject: 'physics',
      yearGroup: ef.y,
      topic: 'Energy',
      difficulty: ef.d
    });
  });

  // Electricity (Years 6-11)
  const electricityQs = [
    { q: 'What is current?', a: 'The flow of electric charge', y: 6, d: 'easy' as const },
    { q: 'What is the unit of current?', a: 'Amperes (A)', y: 7, d: 'easy' as const },
    { q: 'What is voltage?', a: 'The energy transferred per unit charge', y: 8, d: 'medium' as const },
    { q: 'What is the unit of voltage?', a: 'Volts (V)', y: 7, d: 'easy' as const },
    { q: 'What is resistance?', a: 'Opposition to the flow of current', y: 8, d: 'easy' as const },
    { q: 'What is the unit of resistance?', a: 'Ohms (Ω)', y: 7, d: 'easy' as const },
    { q: 'What is Ohm\'s Law?', a: 'V = IR (Voltage = Current × Resistance)', y: 9, d: 'easy' as const },
    { q: 'In a series circuit, what happens to current?', a: 'It is the same throughout', y: 8, d: 'easy' as const },
    { q: 'In a parallel circuit, what happens to voltage?', a: 'It is the same across each branch', y: 8, d: 'medium' as const },
    { q: 'What is the formula for electrical power?', a: 'P = IV or P = I²R or P = V²/R', y: 10, d: 'medium' as const },
    { q: 'What does a resistor do?', a: 'Reduces current in a circuit', y: 8, d: 'easy' as const },
    { q: 'What is an LED?', a: 'Light Emitting Diode - only allows current one way and produces light', y: 8, d: 'easy' as const },
  ];

  electricityQs.forEach((eq, i) => {
    questions.push({
      id: `phys-electricity-${i}`,
      question: eq.q,
      correctAnswer: eq.a,
      wrongAnswers: ['Newtons', 'F = ma', 'Splits into branches'].slice(0, 3),
      explanation: eq.a,
      subject: 'physics',
      yearGroup: eq.y,
      topic: 'Electricity',
      difficulty: eq.d
    });
  });

  // Waves (Years 7-11)
  const wavesQs = [
    { q: 'What are the two types of waves?', a: 'Transverse and longitudinal', y: 7, d: 'easy' as const },
    { q: 'What type of wave is sound?', a: 'Longitudinal', y: 8, d: 'easy' as const },
    { q: 'What type of wave is light?', a: 'Transverse', y: 8, d: 'easy' as const },
    { q: 'Can sound travel through a vacuum?', a: 'No - it needs a medium', y: 7, d: 'easy' as const },
    { q: 'Can light travel through a vacuum?', a: 'Yes', y: 7, d: 'easy' as const },
    { q: 'What is the amplitude of a wave?', a: 'The maximum displacement from the rest position', y: 8, d: 'medium' as const },
    { q: 'What is the wavelength?', a: 'The distance between two adjacent peaks (or troughs)', y: 8, d: 'easy' as const },
    { q: 'What is frequency?', a: 'The number of waves passing a point per second', y: 8, d: 'easy' as const },
    { q: 'What is the unit of frequency?', a: 'Hertz (Hz)', y: 8, d: 'easy' as const },
    { q: 'What is the wave equation?', a: 'v = fλ (speed = frequency × wavelength)', y: 9, d: 'medium' as const },
    { q: 'What is the speed of light?', a: 'Approximately 3 × 10⁸ m/s', y: 9, d: 'medium' as const },
    { q: 'What happens when light enters a denser medium?', a: 'It slows down and bends towards the normal', y: 9, d: 'medium' as const },
  ];

  wavesQs.forEach((wq, i) => {
    questions.push({
      id: `phys-waves-${i}`,
      question: wq.q,
      correctAnswer: wq.a,
      wrongAnswers: ['Circular', 'Metres', '340 m/s'].slice(0, 3),
      explanation: wq.a,
      subject: 'physics',
      yearGroup: wq.y,
      topic: 'Waves',
      difficulty: wq.d
    });
  });

  // Electromagnetic Spectrum (Years 7-11)
  const emSpectrum = ['Radio waves', 'Microwaves', 'Infrared', 'Visible light', 'Ultraviolet', 'X-rays', 'Gamma rays'];

  questions.push({
    id: 'phys-em-order',
    question: 'List the electromagnetic spectrum from lowest to highest frequency',
    correctAnswer: emSpectrum.join(', '),
    wrongAnswers: [
      emSpectrum.reverse().join(', '),
      'Visible, Radio, Gamma, X-ray, UV, IR, Microwave',
      'Gamma, X-ray, UV, Visible, IR, Microwave, Radio'
    ],
    explanation: 'The order is Radio → Microwave → IR → Visible → UV → X-ray → Gamma',
    subject: 'physics',
    yearGroup: 9,
    topic: 'Electromagnetic spectrum',
    difficulty: 'hard'
  });

  const emUses = [
    { wave: 'Radio waves', use: 'TV and radio communication', y: 8 },
    { wave: 'Microwaves', use: 'Cooking food and mobile phones', y: 8 },
    { wave: 'Infrared', use: 'Thermal imaging and remote controls', y: 8 },
    { wave: 'Ultraviolet', use: 'Sterilisation and detecting fake banknotes', y: 8 },
    { wave: 'X-rays', use: 'Medical imaging of bones', y: 8 },
    { wave: 'Gamma rays', use: 'Cancer treatment and sterilising medical equipment', y: 8 },
  ];

  emUses.forEach((em, i) => {
    questions.push({
      id: `phys-em-use-${i}`,
      question: `What is one use of ${em.wave.toLowerCase()}?`,
      correctAnswer: em.use,
      wrongAnswers: emUses.filter(x => x.wave !== em.wave).slice(0, 3).map(x => x.use),
      explanation: `${em.wave} are used for ${em.use.toLowerCase()}.`,
      subject: 'physics',
      yearGroup: em.y,
      topic: 'Electromagnetic spectrum',
      difficulty: 'medium'
    });
  });

  return questions;
}

export default { generateBiologyQuestions, generateChemistryQuestions, generatePhysicsQuestions };
