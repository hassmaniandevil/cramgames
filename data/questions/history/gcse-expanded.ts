/**
 * GCSE History Expanded Question Bank
 * Gamified questions covering GCSE History topics with engaging content
 */

import { Question, TermDefinition, TimelineEvent } from '../types';

// ============================================
// MEDICINE THROUGH TIME
// ============================================

export const gcseHistoryMedicine: Question[] = [
  {
    id: 'hist-gcse-exp-med-001',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Medieval Medicine',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Medieval doctors believed disease was caused by "miasma." What is miasma?',
    correctAnswer: 'Bad air or poisonous vapors',
    wrongAnswers: ['A type of bacteria', 'Punishment from God only', 'Eating too much meat'],
    explanation: 'Miasma theory = "bad air" causes disease! Medieval people avoided swamps and kept streets clean (sort of) to prevent smells. They were wrong about WHY, but cleaning up waste did actually help reduce disease. Right actions, wrong reasoning!',
    hint: 'Think about what people could actually observe causing sickness',
    tags: ['medicine', 'medieval', 'miasma'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-med-002',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'The Four Humours',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each humour to its associated element and quality:',
    correctAnswer: ['Blood → Air/Hot & Wet', 'Yellow Bile → Fire/Hot & Dry', 'Black Bile → Earth/Cold & Dry', 'Phlegm → Water/Cold & Wet'],
    wrongAnswers: [],
    explanation: 'The Four Humours dominated medicine for 1500+ years! Based on Galen\'s interpretation of Greek ideas. Illness = imbalance. Treatment = restore balance (bloodletting to reduce blood, purging to remove bile). Completely wrong, but remarkably persistent!',
    hint: 'Think about the natural elements and their properties',
    tags: ['medicine', 'humours', 'galen'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-med-003',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Black Death',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which response to the Black Death showed religious belief?',
    correctAnswer: 'Flagellants whipping themselves to atone for sins',
    wrongAnswers: ['Quarantining ships for 40 days', 'Burning infected clothes', 'Escaping to the countryside'],
    explanation: 'Flagellants believed the plague was God\'s punishment! They publicly whipped themselves bloody, hoping to atone for humanity\'s sins. It was dramatic public theater of faith - and probably spread the disease further through their gatherings.',
    hint: 'Which option involves seeking divine forgiveness?',
    tags: ['medicine', 'black-death', 'religion'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-med-004',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Renaissance Medicine',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Vesalius proved Galen wrong by dissecting human bodies and showing Galen had only dissected animals.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Vesalius actually cut up human corpses (illegal and shocking!) and found Galen\'s "facts" were based on pigs and apes. The human jaw is one bone, not two. This started challenging 1400 years of accepted wisdom. Seeing is believing!',
    tags: ['medicine', 'vesalius', 'renaissance'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-med-005',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Jenner',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Edward Jenner noticed that _____ never got smallpox, leading to his vaccination discovery.',
    correctAnswer: 'Milkmaids who had caught cowpox',
    wrongAnswers: ['Doctors who treated patients', 'People who ate lots of dairy', 'Children who played outdoors'],
    explanation: 'Country wisdom + scientific method = breakthrough! Milkmaids caught mild cowpox from cows and then were immune to deadly smallpox. Jenner tested this by deliberately infecting a boy with cowpox, then smallpox. Risky but revolutionary!',
    hint: 'What was unique about milkmaids\' exposure?',
    tags: ['medicine', 'jenner', 'vaccination'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-med-006',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Germ Theory',
    difficulty: 'gcse',
    type: 'order',
    question: 'Order these germ theory developments chronologically:',
    correctAnswer: ['Pasteur proves germs cause decay (1861)', 'Lister uses carbolic acid antiseptic (1867)', 'Koch identifies specific bacteria (1870s)', 'Fleming discovers penicillin (1928)'],
    wrongAnswers: [],
    explanation: 'Germ theory changed everything! Pasteur proved germs existed. Lister applied this to surgery (carbolic acid killed germs). Koch proved SPECIFIC germs cause SPECIFIC diseases. Fleming found something that killed germs - antibiotics. Each built on the last!',
    hint: 'Think about which discovery enabled the next one',
    tags: ['medicine', 'germ-theory', 'timeline'],
    yearGroup: [10, 11]
  },
];

// ============================================
// WEIMAR AND NAZI GERMANY
// ============================================

export const gcseHistoryGermany: Question[] = [
  {
    id: 'hist-gcse-exp-ger-001',
    subject: 'history',
    topic: 'Weimar and Nazi Germany',
    subtopic: 'Treaty of Versailles',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Germans called the Weimar politicians who signed the Treaty of Versailles:',
    correctAnswer: 'November Criminals (Novemberverbrecher)',
    wrongAnswers: ['War heroes', 'Peace makers', 'Loyal servants'],
    explanation: 'Stab-in-the-back myth! Many Germans believed the army wasn\'t defeated but BETRAYED by politicians who surrendered. The "November Criminals" signed humiliating peace terms. This poisoned Weimar democracy from the start - Hitler exploited this resentment constantly.',
    hint: 'Think about how Germans felt about surrender',
    tags: ['weimar', 'versailles', 'resentment'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-ger-002',
    subject: 'history',
    topic: 'Weimar and Nazi Germany',
    subtopic: 'Hyperinflation',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'In November 1923, how many marks did it take to buy 1 US dollar? (Enter the number without commas)',
    correctAnswer: 4200000000000,
    wrongAnswers: [1000000, 100000000, 1000000000000000],
    explanation: '4.2 TRILLION marks to $1! People needed wheelbarrows of cash to buy bread. Savings became worthless overnight. Some burned money for heat - it was cheaper than buying fuel. This trauma haunted Germany and made them desperate for stability.',
    hint: 'It\'s a number in the trillions',
    tags: ['weimar', 'hyperinflation', 'economy'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-ger-003',
    subject: 'history',
    topic: 'Weimar and Nazi Germany',
    subtopic: 'Nazi Rise',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The Great Depression helped Hitler because:',
    correctAnswer: 'Unemployment made millions desperate for radical solutions',
    wrongAnswers: ['He had better economic policies', 'The depression was already ending', 'Other parties supported him'],
    explanation: '6 million unemployed by 1932! Desperate people wanted change - ANY change. The Nazis promised jobs, bread, and national pride. Moderate parties seemed useless. When you\'re starving, extremism sounds better than "stay the course."',
    hint: 'What happens to politics during economic crisis?',
    tags: ['nazi', 'depression', 'rise'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-ger-004',
    subject: 'history',
    topic: 'Weimar and Nazi Germany',
    subtopic: 'Enabling Act',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The Enabling Act (1933) allowed Hitler to:',
    correctAnswer: 'Pass laws without the Reichstag for 4 years',
    wrongAnswers: ['Become President immediately', 'Control the army', 'Ban the Nazi Party\'s opponents'],
    explanation: 'Democracy voted itself out of existence! The Enabling Act gave Hitler dictatorial powers "legally." He intimidated opponents, banned Communist MPs, and got Catholic Centre Party support with false promises. Democracy = dead. All technically legal.',
    hint: 'What power did this give him over lawmaking?',
    tags: ['nazi', 'enabling-act', 'dictatorship'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-ger-005',
    subject: 'history',
    topic: 'Weimar and Nazi Germany',
    subtopic: 'Life in Nazi Germany',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each Nazi organization to its purpose:',
    correctAnswer: ['Hitler Youth → Indoctrinating young men', 'League of German Maidens → Training girls for motherhood', 'Kraft durch Freude → Providing leisure activities for workers', 'Gestapo → Secret police surveillance'],
    wrongAnswers: [],
    explanation: 'Total control of society! Youth groups taught Nazi ideology from childhood. Women prepared for "Kinder, Küche, Kirche" (children, kitchen, church). Workers got holidays and Volkswagens (never delivered). The Gestapo watched everyone. No escape from the state.',
    hint: 'Each group targeted a specific section of society',
    tags: ['nazi', 'control', 'society'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-ger-006',
    subject: 'history',
    topic: 'Weimar and Nazi Germany',
    subtopic: 'Holocaust',
    difficulty: 'gcse',
    type: 'order',
    question: 'Order the stages of Nazi persecution of Jews:',
    correctAnswer: ['Boycott of Jewish businesses (1933)', 'Nuremberg Laws strip citizenship (1935)', 'Kristallnacht pogrom (1938)', 'Wannsee Conference plans "Final Solution" (1942)'],
    wrongAnswers: [],
    explanation: 'The Holocaust didn\'t start with death camps - it escalated. First boycotts, then legal discrimination, then violence, then systematic murder. Each step made the next "acceptable." This gradual process shows how genocide becomes possible.',
    hint: 'Think about escalation from discrimination to extermination',
    tags: ['holocaust', 'persecution', 'timeline'],
    yearGroup: [10, 11]
  },
];

// ============================================
// COLD WAR
// ============================================

export const gcseHistoryColdWar: Question[] = [
  {
    id: 'hist-gcse-exp-cw-001',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Origins',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The Cold War is called "cold" because:',
    correctAnswer: 'The USA and USSR never fought each other directly',
    wrongAnswers: ['It mainly happened in cold climates', 'Both sides used "cold" tactics', 'Nuclear weapons are kept cold'],
    explanation: 'A "hot" war means actual fighting. The Cold War was tense confrontation WITHOUT direct combat between superpowers. They fought through proxies (Korea, Vietnam), propaganda, and the arms race. Direct conflict risked nuclear apocalypse!',
    hint: 'Think about the opposite of a "hot" war',
    tags: ['cold-war', 'origins', 'definition'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-cw-002',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Berlin',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why did the USSR blockade West Berlin in 1948?',
    correctAnswer: 'To force Western powers out by cutting off supplies',
    wrongAnswers: ['To protect Berlin from attack', 'To improve transport links', 'To share resources equally'],
    explanation: 'Stalin wanted ALL of Berlin! West Berlin was an island of capitalism inside communist East Germany. By blocking roads and railways, Stalin hoped to starve the West out. Instead, the Berlin Airlift supplied the city for 11 months. Stalin backed down.',
    hint: 'What was Stalin trying to achieve?',
    tags: ['cold-war', 'berlin', 'blockade'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-cw-003',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Cuban Missile Crisis',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'During the Cuban Missile Crisis, the world came closest to nuclear war when Soviet ships approached the US naval blockade.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! For 13 days in October 1962, humanity held its breath. Soviet ships carrying missiles approached Cuba. US Navy ships blocked them. If they\'d clashed... nuclear war. Khrushchev ordered the ships to turn back. We literally survived by luck and one man\'s decision.',
    tags: ['cold-war', 'cuba', 'nuclear'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-cw-004',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Vietnam',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'American tactics in Vietnam failed partly because:',
    correctAnswer: 'Guerrilla warfare and jungle terrain negated US technological advantage',
    wrongAnswers: ['The US had fewer soldiers', 'Vietnam had better weapons', 'The US didn\'t try hard enough'],
    explanation: 'The Viet Cong used guerrilla tactics - hit and run, booby traps, blending with civilians. Jungle hid them from US air power. Body counts and napalm couldn\'t defeat an enemy you couldn\'t see. Technology can\'t always beat determination and home advantage.',
    hint: 'What advantages did the Viet Cong have?',
    tags: ['cold-war', 'vietnam', 'tactics'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-cw-005',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'End of Cold War',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each event to its role in ending the Cold War:',
    correctAnswer: ['Gorbachev\'s reforms → Loosened Soviet control', 'Fall of Berlin Wall (1989) → Symbolized end of division', 'Eastern European revolutions → Communist governments collapsed', 'Soviet dissolution (1991) → USSR ceased to exist'],
    wrongAnswers: [],
    explanation: 'The Cold War didn\'t end with a bang but a crumble! Gorbachev\'s glasnost (openness) and perestroika (restructuring) weakened control. Eastern Europe broke free. The Wall fell. Finally, the USSR itself dissolved. 45 years of tension ended remarkably peacefully.',
    hint: 'Think about the sequence of events from 1985-1991',
    tags: ['cold-war', 'end', 'events'],
    yearGroup: [10, 11]
  },
];

// ============================================
// ELIZABETHAN ENGLAND
// ============================================

export const gcseHistoryElizabeth: Question[] = [
  {
    id: 'hist-gcse-exp-eliz-001',
    subject: 'history',
    topic: 'Elizabethan England',
    subtopic: 'Religious Settlement',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Elizabeth\'s Religious Settlement aimed to:',
    correctAnswer: 'Create a moderate Protestant church acceptable to most',
    wrongAnswers: ['Impose strict Catholicism', 'Abolish all religion', 'Copy the French system'],
    explanation: 'The "Middle Way"! Elizabeth was Protestant but pragmatic. The Settlement kept Protestant theology but some Catholic-style ceremonies. Most people could accept it. Extremists on both sides complained, but it mostly worked. Compromise = stability.',
    hint: 'Elizabeth tried to avoid religious extremes',
    tags: ['elizabethan', 'religion', 'settlement'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-eliz-002',
    subject: 'history',
    topic: 'Elizabethan England',
    subtopic: 'Mary Queen of Scots',
    difficulty: 'gcse',
    type: 'order',
    question: 'Order the events leading to Mary Queen of Scots\' execution:',
    correctAnswer: ['Mary flees Scotland to England (1568)', 'Mary held as Elizabeth\'s "guest" for 19 years', 'Babington Plot discovered (1586)', 'Mary executed at Fotheringhay (1587)'],
    wrongAnswers: [],
    explanation: 'Elizabeth\'s biggest headache! Mary was a Catholic claimant to the English throne. Elizabeth couldn\'t free her (danger!) or execute her (killing a queen sets bad precedent). The Babington Plot finally gave her an excuse. Elizabeth supposedly agonized over signing the death warrant.',
    hint: 'Think about why Elizabeth hesitated so long',
    tags: ['elizabethan', 'mary', 'politics'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-eliz-003',
    subject: 'history',
    topic: 'Elizabethan England',
    subtopic: 'Spanish Armada',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The Spanish Armada was defeated partly by:',
    correctAnswer: 'English fireships and bad weather',
    wrongAnswers: ['Superior Spanish navigation', 'French intervention', 'A peace treaty'],
    explanation: 'Fireships scattered the Armada formation at Calais! Then storms did the rest. The Spanish had to sail around Scotland and Ireland - thousands drowned. England celebrated divine intervention. Spain was humiliated. Elizabeth became a legend.',
    hint: 'What disrupted the Spanish fleet formation?',
    tags: ['elizabethan', 'armada', 'warfare'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-eliz-004',
    subject: 'history',
    topic: 'Elizabethan England',
    subtopic: 'Theatre',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Elizabethan theatres like the Globe were controversial because Puritans believed plays encouraged sin.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Puritans hated theatre. Plays were performed outside London\'s walls because city authorities banned them. They attracted crowds, spread plague, showed "immoral" content. Yet Elizabeth loved theatre and protected it. Shakespeare thrived despite opposition.',
    tags: ['elizabethan', 'theatre', 'culture'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-exp-eliz-005',
    subject: 'history',
    topic: 'Elizabethan England',
    subtopic: 'Exploration',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each Elizabethan explorer to their achievement:',
    correctAnswer: ['Francis Drake → Circumnavigated the globe', 'Walter Raleigh → Attempted Roanoke colony', 'John Hawkins → Involved in slave trade', 'Martin Frobisher → Searched for Northwest Passage'],
    wrongAnswers: [],
    explanation: 'England\'s age of exploration! Drake raided Spanish treasure ships and sailed around the world. Raleigh\'s Roanoke colony mysteriously vanished. Hawkins pioneered English involvement in the horrific slave trade. These voyages built England\'s naval power and colonial ambitions.',
    hint: 'Each explorer had different goals and achievements',
    tags: ['elizabethan', 'exploration', 'empire'],
    yearGroup: [10, 11]
  },
];

// ============================================
// TERMS
// ============================================

export const gcseHistoryTermsExpanded: TermDefinition[] = [
  {
    id: 'hist-gcse-exp-term-001',
    subject: 'history',
    difficulty: 'gcse',
    term: 'Propaganda',
    definition: 'Information, often biased or misleading, used to promote a political cause or point of view',
    example: 'Nazi propaganda films like "Triumph of the Will" glorified Hitler and the Nazi Party.',
    tags: ['concepts', 'media', 'politics']
  },
  {
    id: 'hist-gcse-exp-term-002',
    subject: 'history',
    difficulty: 'gcse',
    term: 'Totalitarianism',
    definition: 'A system of government where the state controls all aspects of public and private life',
    example: 'Nazi Germany was a totalitarian state - the regime controlled media, education, economy, and even family life.',
    tags: ['concepts', 'government', 'control']
  },
  {
    id: 'hist-gcse-exp-term-003',
    subject: 'history',
    difficulty: 'gcse',
    term: 'Appeasement',
    definition: 'The policy of making concessions to an aggressor to avoid conflict',
    example: 'Chamberlain\'s appeasement of Hitler at Munich (1938) allowed Germany to take the Sudetenland.',
    tags: ['concepts', 'diplomacy', 'wwii']
  },
  {
    id: 'hist-gcse-exp-term-004',
    subject: 'history',
    difficulty: 'gcse',
    term: 'Détente',
    definition: 'A period of relaxed tensions between rival countries, especially USA and USSR in the 1970s',
    example: 'During détente, the USA and USSR signed arms limitation treaties like SALT I.',
    tags: ['cold-war', 'diplomacy', 'peace']
  },
  {
    id: 'hist-gcse-exp-term-005',
    subject: 'history',
    difficulty: 'gcse',
    term: 'Proxy War',
    definition: 'A conflict where major powers support opposing sides without fighting directly',
    example: 'Korea and Vietnam were proxy wars - the USA and USSR backed different sides without direct confrontation.',
    tags: ['cold-war', 'warfare', 'superpowers']
  },
  {
    id: 'hist-gcse-exp-term-006',
    subject: 'history',
    difficulty: 'gcse',
    term: 'Recusant',
    definition: 'In Elizabethan England, someone (usually Catholic) who refused to attend Church of England services',
    example: 'Recusants faced fines of £20 per month - a huge sum that ruined many Catholic families.',
    tags: ['elizabethan', 'religion', 'catholics']
  },
  {
    id: 'hist-gcse-exp-term-007',
    subject: 'history',
    difficulty: 'gcse',
    term: 'Spontaneous Generation',
    definition: 'The disproven theory that living organisms could arise from non-living matter',
    example: 'Before Pasteur, people believed maggots spontaneously appeared in rotting meat.',
    tags: ['medicine', 'science', 'disproven']
  },
  {
    id: 'hist-gcse-exp-term-008',
    subject: 'history',
    difficulty: 'gcse',
    term: 'Lebensraum',
    definition: 'German for "living space" - Hitler\'s policy of expanding German territory eastward',
    example: 'Hitler\'s pursuit of Lebensraum led to the invasion of Poland and the USSR.',
    tags: ['nazi', 'expansion', 'ideology']
  },
];

// ============================================
// TIMELINE EVENTS
// ============================================

export const gcseHistoryTimelineExpanded: TimelineEvent[] = [
  {
    id: 'hist-gcse-exp-time-001',
    subject: 'history',
    topic: 'Medicine',
    difficulty: 'gcse',
    year: 1628,
    event: 'William Harvey publishes theory of blood circulation',
    significance: 'Disproved Galen\'s theory that blood was constantly produced and consumed. Showed blood circulates in a closed system.',
    tags: ['medicine', 'discovery', 'anatomy']
  },
  {
    id: 'hist-gcse-exp-time-002',
    subject: 'history',
    topic: 'Medicine',
    difficulty: 'gcse',
    year: 1854,
    event: 'John Snow removes Broad Street pump handle',
    significance: 'Proved cholera spread through contaminated water, not miasma. Pioneer of epidemiology.',
    tags: ['medicine', 'cholera', 'public-health']
  },
  {
    id: 'hist-gcse-exp-time-003',
    subject: 'history',
    topic: 'Nazi Germany',
    difficulty: 'gcse',
    year: 1934,
    event: 'Night of the Long Knives',
    significance: 'Hitler purged SA leadership, eliminating rivals and securing army support. Showed his willingness to use violence.',
    tags: ['nazi', 'violence', 'consolidation']
  },
  {
    id: 'hist-gcse-exp-time-004',
    subject: 'history',
    topic: 'Cold War',
    difficulty: 'gcse',
    year: 1961,
    event: 'Berlin Wall construction begins',
    significance: 'Divided Berlin physically, stopping East Germans fleeing to the West. Symbol of Iron Curtain.',
    tags: ['cold-war', 'berlin', 'division']
  },
  {
    id: 'hist-gcse-exp-time-005',
    subject: 'history',
    topic: 'Elizabethan',
    difficulty: 'gcse',
    year: 1559,
    event: 'Act of Supremacy and Act of Uniformity',
    significance: 'Established Elizabeth as head of Church of England and created the Religious Settlement.',
    tags: ['elizabethan', 'religion', 'settlement']
  },
  {
    id: 'hist-gcse-exp-time-006',
    subject: 'history',
    topic: 'Elizabethan',
    difficulty: 'gcse',
    year: 1601,
    event: 'Poor Law Act',
    significance: 'Made each parish responsible for its poor. Created categories of "deserving" and "undeserving" poor.',
    tags: ['elizabethan', 'poverty', 'law']
  },
];

// Combined exports
export const gcseHistoryExpanded = [
  ...gcseHistoryMedicine,
  ...gcseHistoryGermany,
  ...gcseHistoryColdWar,
  ...gcseHistoryElizabeth,
];
