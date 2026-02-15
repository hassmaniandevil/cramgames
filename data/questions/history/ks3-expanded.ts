/**
 * KS3 History Expanded Question Bank
 * Fun-first gamified questions for younger students
 */

import { Question, TermDefinition, TimelineEvent } from '../types';

// ============================================
// MEDIEVAL BRITAIN
// ============================================

export const ks3HistoryMedieval: Question[] = [
  {
    id: 'hist-ks3-exp-med-001',
    subject: 'history',
    topic: 'Medieval Britain',
    subtopic: 'Norman Conquest',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'The Battle of Hastings in 1066 lasted roughly how long?',
    correctAnswer: 'About 9 hours (all day)',
    wrongAnswers: ['30 minutes', '3 hours', '3 days'],
    explanation: 'The battle started around 9am and lasted until dusk - about 9 hours! Harold\'s army held the hilltop all day until that fateful arrow (allegedly) hit him in the eye.',
    hint: 'Medieval battles could last a surprisingly long time',
    tags: ['medieval', 'Norman', 'battles'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-exp-med-002',
    subject: 'history',
    topic: 'Medieval Britain',
    subtopic: 'Norman Conquest',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'William built motte and bailey castles quickly after 1066 because...',
    correctAnswer: 'He needed to control rebellious Anglo-Saxons fast',
    wrongAnswers: ['They were cheaper than stone', 'Wood was fashionable', 'Stone hadn\'t been invented yet'],
    explanation: 'Motte and bailey castles could be built in weeks using earth and wood. William built over 500 to dominate the landscape and crush rebellions. Speed + intimidation!',
    hint: 'What was the political situation after invasion?',
    tags: ['medieval', 'castles', 'control'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-exp-med-003',
    subject: 'history',
    topic: 'Medieval Britain',
    subtopic: 'Feudal System',
    difficulty: 'ks3',
    type: 'order',
    question: 'Put these feudal ranks in order from most to least powerful:',
    correctAnswer: ['King', 'Barons/Nobles', 'Knights', 'Peasants/Serfs'],
    wrongAnswers: [],
    explanation: 'The feudal pyramid: King at top owned all land. Barons got land for military service. Knights served barons. Peasants worked the land and had almost no rights.',
    hint: 'Who granted land to whom?',
    tags: ['medieval', 'feudalism', 'society'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-exp-med-004',
    subject: 'history',
    topic: 'Medieval Britain',
    subtopic: 'Medieval Life',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Medieval peasants typically worked how many days per week for their lord?',
    correctAnswer: '3 days (plus their own land on remaining days)',
    wrongAnswers: ['7 days - no breaks', '1 day only', 'They didn\'t work for the lord'],
    explanation: 'Serfs owed labour to their lord - usually 3 days per week. Other days they worked their own strips of land. They couldn\'t leave without permission. Not exactly freedom!',
    hint: 'It was split between lord\'s land and their own',
    tags: ['medieval', 'peasants', 'life'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-exp-med-005',
    subject: 'history',
    topic: 'Medieval Britain',
    subtopic: 'Black Death',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'The Black Death (1348-1350) killed approximately what proportion of England\'s population?',
    correctAnswer: 'One-third to one-half (30-50%)',
    wrongAnswers: ['5%', '10%', '90%'],
    explanation: 'The plague killed between 1/3 and 1/2 of England - millions dead! Entire villages were wiped out. The labour shortage afterward actually gave surviving peasants more power.',
    hint: 'It was absolutely devastating - but not total extinction',
    tags: ['medieval', 'Black Death', 'population'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-exp-med-006',
    subject: 'history',
    topic: 'Medieval Britain',
    subtopic: 'Religion',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why was the Church so powerful in medieval England?',
    correctAnswer: 'It controlled education, was extremely wealthy, and people feared hell',
    wrongAnswers: ['The King was secretly a priest', 'There were no other organizations', 'England was the Pope\'s homeland'],
    explanation: 'The Church ran schools, owned 25% of land, collected tithes (10% tax), and convinced people heaven/hell were real. Excommunication = social death. Total life control!',
    hint: 'Think about what the Church controlled and what people believed',
    tags: ['medieval', 'religion', 'power'],
    yearGroup: [7, 8, 9]
  },

  // TUDORS
  {
    id: 'hist-ks3-exp-tudor-001',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Henry VIII',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why did Henry VIII break with Rome and create the Church of England?',
    correctAnswer: 'The Pope refused to annul his marriage to Catherine of Aragon',
    wrongAnswers: ['He was bored of Catholicism', 'The Pope owed him money', 'He wanted to be Pope himself'],
    explanation: 'Henry wanted to divorce Catherine (no male heir) and marry Anne Boleyn. The Pope said no. Solution? Make himself head of the English Church. Religion = politics!',
    hint: 'It was about marriage and heirs, not theology originally',
    tags: ['Tudors', 'Henry VIII', 'religion'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'hist-ks3-exp-tudor-002',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Henry VIII',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match Henry VIII\'s wives to their fates:',
    correctAnswer: ['Catherine of Aragon → Divorced', 'Anne Boleyn → Beheaded', 'Jane Seymour → Died in childbirth', 'Anne of Cleves → Divorced'],
    wrongAnswers: [],
    explanation: 'Divorced, beheaded, died, divorced, beheaded, survived! Catherine Howard was also beheaded, Catherine Parr survived him. Being Henry\'s wife was dangerous!',
    hint: 'Remember the rhyme: divorced, beheaded, died...',
    tags: ['Tudors', 'Henry VIII', 'wives'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-exp-tudor-003',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Elizabeth I',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Elizabeth I never married. Her nickname was...',
    correctAnswer: 'The Virgin Queen',
    wrongAnswers: ['Bloody Mary', 'Good Queen Bess\'s Sister', 'The Warrior Princess'],
    explanation: 'Elizabeth used marriage negotiations as diplomacy but never committed. Marrying would mean sharing power. She declared herself "married to England" - queen first, woman second!',
    hint: 'Her unmarried status became part of her image',
    tags: ['Tudors', 'Elizabeth I', 'monarchy'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'hist-ks3-exp-tudor-004',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Spanish Armada',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What helped England defeat the Spanish Armada in 1588?',
    correctAnswer: 'English fire ships, bad weather, and Spanish mistakes',
    wrongAnswers: ['England had more ships', 'Spain surrendered immediately', 'France helped England'],
    explanation: 'English fire ships scattered the Spanish fleet at Calais. Then terrible storms ("Protestant Wind") destroyed many ships. England was outgunned but luckier and cleverer!',
    hint: 'It wasn\'t just military strength',
    tags: ['Tudors', 'Armada', 'warfare'],
    yearGroup: [7, 8, 9]
  },

  // INDUSTRIAL REVOLUTION
  {
    id: 'hist-ks3-exp-ind-001',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Causes',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why did the Industrial Revolution begin in Britain?',
    correctAnswer: 'Coal and iron resources, empire for raw materials, stable government',
    wrongAnswers: ['The weather was perfect for factories', 'Other countries weren\'t interested', 'Aliens brought technology'],
    explanation: 'Britain had coal (power), iron (machines), colonies (cotton/markets), canals/ports (transport), and political stability. The perfect storm for industrialisation!',
    hint: 'Think about what factories need: power, materials, markets',
    tags: ['Industrial Revolution', 'causes', 'Britain'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-exp-ind-002',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Inventions',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match each invention to its inventor:',
    correctAnswer: ['Spinning Jenny → James Hargreaves', 'Steam Engine (improved) → James Watt', 'Seed Drill → Jethro Tull'],
    wrongAnswers: [],
    explanation: 'These inventions transformed Britain! Spinning Jenny sped up textile production. Watt\'s steam engine powered factories. Tull\'s seed drill revolutionised farming.',
    hint: 'These are the "greatest hits" of the Industrial Revolution',
    tags: ['Industrial Revolution', 'inventions', 'inventors'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-exp-ind-003',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Child Labour',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Children as young as 5 worked in factories. What dangerous job did many do?',
    correctAnswer: 'Cleaning under moving machinery',
    wrongAnswers: ['Managing the accounts', 'Testing new products', 'Supervising adults'],
    explanation: 'Small children crawled under dangerous machines to clean them - while still running! Many were killed or maimed. It took decades of reform to stop this.',
    hint: 'They were used for jobs needing small bodies',
    tags: ['Industrial Revolution', 'child labour', 'conditions'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-exp-ind-004',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Urbanisation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Industrial cities like Manchester grew rapidly. What was a major problem?',
    correctAnswer: 'Disease spread easily in overcrowded slums without sanitation',
    wrongAnswers: ['Too much fresh air', 'People were too healthy', 'Cities were too clean'],
    explanation: 'No sewers, shared toilets, polluted water, cramped housing = perfect conditions for cholera, typhoid, and tuberculosis. Life expectancy in cities was shockingly low.',
    hint: 'Think about what happens when too many people live in small spaces',
    tags: ['Industrial Revolution', 'urbanisation', 'health'],
    yearGroup: [8, 9]
  },

  // WORLD WAR ONE
  {
    id: 'hist-ks3-exp-ww1-001',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Causes',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'The assassination of which person triggered WWI?',
    correctAnswer: 'Archduke Franz Ferdinand of Austria-Hungary',
    wrongAnswers: ['King George V of Britain', 'Kaiser Wilhelm II of Germany', 'Tsar Nicholas II of Russia'],
    explanation: 'Franz Ferdinand was shot in Sarajevo by Gavrilo Princip (Serbian nationalist) on 28 June 1914. Austria blamed Serbia, alliances kicked in, and boom - world war.',
    hint: 'He was an Austrian, killed in Bosnia',
    tags: ['WW1', 'causes', 'assassination'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-exp-ww1-002',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Trenches',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Life in the trenches was terrible. Which disease was caused by standing in water for days?',
    correctAnswer: 'Trench foot',
    wrongAnswers: ['Trench arm', 'Trench face', 'Trench fever (different disease)'],
    explanation: 'Trench foot: standing in cold, wet trenches for days caused feet to rot. Could lead to amputation! Soldiers were ordered to change socks and rub whale oil on feet.',
    hint: 'The name tells you which body part',
    tags: ['WW1', 'trenches', 'conditions'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-exp-ww1-003',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Technology',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which new weapon caused the most casualties in WWI?',
    correctAnswer: 'Artillery (big guns)',
    wrongAnswers: ['Machine guns', 'Tanks', 'Poison gas'],
    explanation: 'Artillery caused about 60% of all casualties! Constant bombardment created the shell-shocked, cratered hellscape of the Western Front. Machine guns were deadly too, but artillery dominated.',
    hint: 'Think about which weapon could fire from far away',
    tags: ['WW1', 'technology', 'weapons'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-exp-ww1-004',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Home Front',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How did WWI change opportunities for women in Britain?',
    correctAnswer: 'They took men\'s jobs in factories, farms, and transport',
    wrongAnswers: ['Nothing changed', 'They were sent to fight', 'They ran the government'],
    explanation: 'With men at war, women became bus drivers, factory workers, nurses, and farmers. This proved they could do "men\'s work" and helped win them the vote in 1918!',
    hint: 'Someone had to do the work while men were fighting',
    tags: ['WW1', 'women', 'society'],
    yearGroup: [8, 9]
  },
];

// ============================================
// KS3 HISTORY TERMS
// ============================================

export const ks3HistoryTermsExpanded: TermDefinition[] = [
  {
    id: 'hist-ks3-term-exp-001',
    subject: 'history',
    term: 'Feudal system',
    definition: 'Medieval social hierarchy where land was granted in exchange for loyalty and military service',
    difficulty: 'ks3',
    relatedTerms: ['medieval', 'lords', 'vassals']
  },
  {
    id: 'hist-ks3-term-exp-002',
    subject: 'history',
    term: 'Serf',
    definition: 'A peasant tied to the land who couldn\'t leave without their lord\'s permission',
    difficulty: 'ks3',
    relatedTerms: ['feudalism', 'peasant', 'medieval']
  },
  {
    id: 'hist-ks3-term-exp-003',
    subject: 'history',
    term: 'Reformation',
    definition: 'The 16th century religious movement that split Christianity into Catholic and Protestant',
    difficulty: 'ks3',
    relatedTerms: ['Tudors', 'Henry VIII', 'religion']
  },
  {
    id: 'hist-ks3-term-exp-004',
    subject: 'history',
    term: 'Dissolution of the Monasteries',
    definition: 'Henry VIII\'s closure of Catholic monasteries (1536-41) to seize their wealth and land',
    difficulty: 'ks3',
    relatedTerms: ['Henry VIII', 'Reformation', 'wealth']
  },
  {
    id: 'hist-ks3-term-exp-005',
    subject: 'history',
    term: 'Industrialisation',
    definition: 'The transformation from farming/craft economy to one based on factories and machines',
    difficulty: 'ks3',
    relatedTerms: ['Industrial Revolution', 'factories', 'urbanisation']
  },
  {
    id: 'hist-ks3-term-exp-006',
    subject: 'history',
    term: 'Urbanisation',
    definition: 'The growth of cities as people move from countryside to urban areas',
    difficulty: 'ks3',
    relatedTerms: ['Industrial Revolution', 'migration', 'cities']
  },
  {
    id: 'hist-ks3-term-exp-007',
    subject: 'history',
    term: 'Alliance',
    definition: 'Formal agreement between countries to support each other, especially in war',
    difficulty: 'ks3',
    relatedTerms: ['WW1', 'diplomacy', 'treaty']
  },
  {
    id: 'hist-ks3-term-exp-008',
    subject: 'history',
    term: 'Trench warfare',
    definition: 'Military strategy where soldiers fight from protective trenches dug into the ground',
    difficulty: 'ks3',
    relatedTerms: ['WW1', 'Western Front', 'stalemate']
  },
];

// ============================================
// KS3 HISTORY TIMELINE
// ============================================

export const ks3HistoryTimelineExpanded: TimelineEvent[] = [
  {
    id: 'hist-ks3-time-exp-001',
    subject: 'history',
    topic: 'Medieval Britain',
    difficulty: 'ks3',
    event: 'Battle of Hastings',
    year: 1066,
    description: 'William the Conqueror defeats Harold II - Norman rule begins'
  },
  {
    id: 'hist-ks3-time-exp-002',
    subject: 'history',
    topic: 'Medieval Britain',
    difficulty: 'ks3',
    event: 'Magna Carta signed',
    year: 1215,
    description: 'King John forced to accept limits on royal power'
  },
  {
    id: 'hist-ks3-time-exp-003',
    subject: 'history',
    topic: 'Medieval Britain',
    difficulty: 'ks3',
    event: 'Black Death arrives in England',
    year: 1348,
    description: 'Plague kills 30-50% of population'
  },
  {
    id: 'hist-ks3-time-exp-004',
    subject: 'history',
    topic: 'Tudors',
    difficulty: 'ks3',
    event: 'Henry VIII becomes King',
    year: 1509,
    description: 'Start of Tudor golden age'
  },
  {
    id: 'hist-ks3-time-exp-005',
    subject: 'history',
    topic: 'Tudors',
    difficulty: 'ks3',
    event: 'Break with Rome',
    year: 1534,
    description: 'Henry VIII creates Church of England'
  },
  {
    id: 'hist-ks3-time-exp-006',
    subject: 'history',
    topic: 'Tudors',
    difficulty: 'ks3',
    event: 'Spanish Armada defeated',
    year: 1588,
    description: 'England defeats Spanish invasion fleet'
  },
  {
    id: 'hist-ks3-time-exp-007',
    subject: 'history',
    topic: 'Industrial Revolution',
    difficulty: 'ks3',
    event: 'Spinning Jenny invented',
    year: 1764,
    description: 'Major advance in textile production'
  },
  {
    id: 'hist-ks3-time-exp-008',
    subject: 'history',
    topic: 'World War One',
    difficulty: 'ks3',
    event: 'World War One begins',
    year: 1914,
    description: 'Assassination of Franz Ferdinand triggers global war'
  },
];

// Combined export
export const ks3HistoryExpanded = [...ks3HistoryMedieval];
