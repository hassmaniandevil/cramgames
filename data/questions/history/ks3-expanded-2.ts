/**
 * KS3 History Expanded Part 2
 * Fun-first history for Years 7-9
 */

import { Question, TermDefinition, TimelineEvent } from '../types';

// ============================================================================
// MEDIEVAL ENGLAND
// ============================================================================

const ks3Medieval: Question[] = [
  {
    id: 'hist-ks3-exp2-001',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Feudal System',
    difficulty: 'ks3',
    type: 'order',
    question: 'Order the feudal hierarchy from most to least powerful.',
    correctAnswer: ['King', 'Barons/Lords', 'Knights', 'Peasants/Serfs'],
    explanation: 'The feudal pyramid: King at the top, grants land to barons, who give some to knights, who get peasants to work it. Power and land flow down; taxes and service flow up!',
    tags: ['medieval', 'feudal', 'hierarchy'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'hist-ks3-exp2-002',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Black Death',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How did the Black Death affect peasants\' power?',
    correctAnswer: 'Fewer workers meant peasants could demand higher wages',
    wrongAnswers: [
      'Peasants became less important',
      'Lords gained more control',
      'Nothing changed economically'
    ],
    explanation: 'Supply and demand! With up to half the population dead, surviving peasants became valuable. They could negotiate better terms or leave for lords who paid more. Labor shortage = worker power.',
    tags: ['black-death', 'economics', 'peasants'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'hist-ks3-exp2-003',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Castles',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why did Norman castles have keeps with stairs spiraling clockwise?',
    correctAnswer: 'Defenders could swing swords with their right hand; attackers couldn\'t',
    wrongAnswers: [
      'It was fashionable',
      'Clockwise was luckier',
      'Building regulations required it'
    ],
    explanation: 'Medieval design hack! Going up, attackers face tight curve on their sword arm. Defenders above have free swinging space. Most people are right-handed, so this gave defenders an advantage.',
    tags: ['castles', 'defence', 'architecture'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'hist-ks3-exp2-004',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Church',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why was the Church so powerful in medieval England?',
    correctAnswer: 'It controlled education, landholding, and people feared Hell',
    wrongAnswers: [
      'The Church had the biggest army',
      'The Pope lived in England',
      'Only priests could read'
    ],
    explanation: 'The Church owned 1/3 of all land! It ran schools, hospitals, and influenced kings. Most importantly, everyone believed in Heaven and Hell - the Church controlled access to salvation.',
    tags: ['church', 'power', 'religion'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// TUDORS
// ============================================================================

const ks3Tudors: Question[] = [
  {
    id: 'hist-ks3-exp2-005',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Henry VIII',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why did Henry VIII break with Rome?',
    correctAnswer: 'The Pope refused to annul his marriage to Catherine of Aragon',
    wrongAnswers: [
      'He wanted to become Pope himself',
      'He thought the Pope was a heretic',
      'Rome attacked England'
    ],
    explanation: 'Henry needed a male heir and blamed Catherine for only giving him a daughter (Mary). The Pope refused the divorce, so Henry made himself head of the English Church. Problem solved!',
    tags: ['tudors', 'reformation', 'henry-viii'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'hist-ks3-exp2-006',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Elizabeth I',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why didn\'t Elizabeth I marry?',
    correctAnswer: 'Marriage would mean sharing or losing power to a husband',
    wrongAnswers: [
      'No one asked her',
      'She was too ugly',
      'Marriage was illegal for queens'
    ],
    explanation: '"I am already bound unto a husband, which is the kingdom of England." Elizabeth used marriage negotiations as diplomacy but kept her independence. The "Virgin Queen" ruled alone.',
    tags: ['tudors', 'elizabeth', 'power'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'hist-ks3-exp2-007',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Exploration',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why did Tudor explorers like Drake sail around the world?',
    correctAnswer: 'For gold, trade routes, glory, and to raid Spanish ships',
    wrongAnswers: [
      'They were lost',
      'To prove the Earth was round',
      'For scientific research only'
    ],
    explanation: 'Drake was basically a legal pirate! Elizabeth funded privateers to steal Spanish treasure and find trade routes. He returned with £600,000 of loot - Elizabeth\'s share paid off the national debt!',
    tags: ['tudors', 'exploration', 'drake'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// INDUSTRIAL REVOLUTION
// ============================================================================

const ks3Industrial: Question[] = [
  {
    id: 'hist-ks3-exp2-008',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Factory System',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why did factories replace cottage industries?',
    correctAnswer: 'Machines were too big and expensive for homes',
    wrongAnswers: [
      'People preferred working away from home',
      'Cottages were banned',
      'Factories had better food'
    ],
    explanation: 'Steam-powered machines needed huge buildings near rivers or coal. Workers had to come to the machines, not the other way round. The factory clock replaced the rhythm of seasons.',
    tags: ['industrial', 'factories', 'change'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'hist-ks3-exp2-009',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Child Labor',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why were children employed in factories and mines?',
    correctAnswer: 'Small bodies could fit in tight spaces and they were cheap to employ',
    wrongAnswers: [
      'Children asked for jobs',
      'It was part of their education',
      'Adults refused dangerous work'
    ],
    explanation: 'Tiny children crawled under machines and into mine tunnels. They worked 14+ hours for pennies. Factory Acts eventually limited child labor - after reformers showed Parliament how bad conditions were.',
    tags: ['industrial', 'child-labor', 'reform'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'hist-ks3-exp2-010',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Railways',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How did railways change Britain?',
    correctAnswer: 'Faster travel, cheaper goods, and standardized time across the country',
    wrongAnswers: [
      'Only rich people could travel',
      'Food became more expensive',
      'People stopped moving'
    ],
    explanation: 'Before railways, Bristol was 10 minutes behind London (sun time). Timetables needed consistency, so "railway time" standardized the whole country. Fresh food could reach cities. Everything sped up!',
    tags: ['industrial', 'railways', 'change'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// WORLD WARS
// ============================================================================

const ks3WorldWars: Question[] = [
  {
    id: 'hist-ks3-exp2-011',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Trenches',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why did WWI become a trench war on the Western Front?',
    correctAnswer: 'Both sides dug in when attacks failed; neither could break through',
    wrongAnswers: [
      'Generals preferred trenches',
      'Soldiers refused to fight',
      'Trenches were traditional'
    ],
    explanation: 'Machine guns and artillery made advancing across open ground suicidal. Both sides dug trenches for protection. The result: stalemate. Millions died trying to gain a few miles.',
    tags: ['ww1', 'trenches', 'stalemate'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'hist-ks3-exp2-012',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'Home Front',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What was the purpose of evacuating children during WWII?',
    correctAnswer: 'To protect them from bombing raids on cities',
    wrongAnswers: [
      'To give them a holiday',
      'To train them as soldiers',
      'To reduce food consumption in cities'
    ],
    explanation: 'Operation Pied Piper moved 3.5 million children from cities to countryside. Many experienced culture shock - some had never seen cows! It revealed huge class divides in Britain.',
    tags: ['ww2', 'evacuation', 'home-front'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'hist-ks3-exp2-013',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'Holocaust',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why do we remember the Holocaust?',
    correctAnswer: 'To honor victims and prevent genocide from happening again',
    wrongAnswers: [
      'To blame current generations',
      'Because it was the only genocide',
      'To make people feel guilty'
    ],
    explanation: '6 million Jews and millions of others were systematically murdered. Remembering isn\'t about blame - it\'s about understanding how prejudice leads to horror, and ensuring "never again."',
    tags: ['ww2', 'holocaust', 'remembrance'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const ks3HistoryTermsExpanded2: TermDefinition[] = [
  {
    id: 'hist-ks3-exp2-term-001',
    subject: 'history',
    topic: 'Medieval',
    difficulty: 'ks3',
    term: 'Serf',
    definition: 'A peasant who was tied to the land and couldn\'t leave without the lord\'s permission.',
    example: 'Serfs worked their lord\'s land in exchange for protection.',
    tags: ['medieval', 'feudal', 'peasants']
  },
  {
    id: 'hist-ks3-exp2-term-002',
    subject: 'history',
    topic: 'Tudors',
    difficulty: 'ks3',
    term: 'Reformation',
    definition: 'The religious movement that broke away from the Catholic Church.',
    example: 'Henry VIII\'s break with Rome was part of the wider European Reformation.',
    tags: ['tudors', 'religion', 'change']
  },
  {
    id: 'hist-ks3-exp2-term-003',
    subject: 'history',
    topic: 'Industrial',
    difficulty: 'ks3',
    term: 'Urbanisation',
    definition: 'The movement of people from countryside to towns and cities.',
    example: 'Manchester grew from 75,000 to 300,000 during the Industrial Revolution.',
    tags: ['industrial', 'cities', 'migration']
  },
  {
    id: 'hist-ks3-exp2-term-004',
    subject: 'history',
    topic: 'World Wars',
    difficulty: 'ks3',
    term: 'Propaganda',
    definition: 'Information designed to promote a particular political view or cause.',
    example: '"Your Country Needs You!" posters encouraged men to enlist in WWI.',
    tags: ['wars', 'media', 'persuasion']
  }
];

// ============================================================================
// TIMELINE
// ============================================================================

export const ks3HistoryTimelineExpanded2: TimelineEvent[] = [
  {
    id: 'hist-ks3-exp2-time-001',
    subject: 'history',
    year: 1066,
    event: 'Norman Conquest - William defeats Harold at Hastings',
    significance: 'Changed English language, law, and land ownership forever',
    topic: 'Medieval England',
    difficulty: 'ks3',
    tags: ['normans', 'conquest', 'change']
  },
  {
    id: 'hist-ks3-exp2-time-002',
    subject: 'history',
    year: 1348,
    event: 'Black Death arrives in England',
    significance: 'Killed up to half the population, transformed society',
    topic: 'Medieval England',
    difficulty: 'ks3',
    tags: ['plague', 'death', 'change']
  },
  {
    id: 'hist-ks3-exp2-time-003',
    subject: 'history',
    year: 1588,
    event: 'Spanish Armada defeated',
    significance: 'England becomes a major Protestant power; Elizabeth\'s triumph',
    topic: 'Tudors',
    difficulty: 'ks3',
    tags: ['tudors', 'armada', 'spain']
  },
  {
    id: 'hist-ks3-exp2-time-004',
    subject: 'history',
    year: 1830,
    event: 'Liverpool-Manchester Railway opens',
    significance: 'First passenger railway, revolutionized transport',
    topic: 'Industrial Revolution',
    difficulty: 'ks3',
    tags: ['industrial', 'railways', 'transport']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const ks3HistoryExpanded2: Question[] = [
  ...ks3Medieval,
  ...ks3Tudors,
  ...ks3Industrial,
  ...ks3WorldWars
];
