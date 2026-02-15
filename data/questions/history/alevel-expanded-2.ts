/**
 * A-Level History Expanded Part 2
 * Advanced historiographical content
 */

import { Question, TermDefinition, TimelineEvent } from '../types';

// ============================================================================
// BRITISH POLITICAL HISTORY
// ============================================================================

const alevelBritishPolitics: Question[] = [
  {
    id: 'hist-alevel-exp2-001',
    subject: 'history',
    topic: 'British Political History',
    subtopic: 'Reform Acts',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why was the 1832 Reform Act passed?',
    correctAnswer: 'To prevent revolution by extending the vote to the middle classes',
    wrongAnswers: [
      'To give all men the vote',
      'To satisfy the working class',
      'To strengthen aristocratic power'
    ],
    explanation: 'After the 1830 French Revolution, Britain\'s elite feared similar upheaval. Giving middle-class men the vote (£10 householders) created allies against the "dangerous classes." Brilliant strategy or cynical manipulation?',
    tags: ['reform', 'democracy', 'class'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp2-002',
    subject: 'history',
    topic: 'British Political History',
    subtopic: 'Suffrage',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Historians debate whether women got the vote in 1918 because of...',
    correctAnswer: 'Militant suffragette tactics, peaceful suffragist campaigns, OR war service',
    wrongAnswers: [
      'A single petition signed by all women',
      'Men suddenly realizing women deserved equality',
      'An EU requirement'
    ],
    explanation: 'Multiple causation! Suffragettes raised awareness but alienated some. Suffragists built political alliances. War work proved capability. Likely combination of all three - historians still argue the weighting.',
    tags: ['suffrage', 'historiography', 'causation'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp2-003',
    subject: 'history',
    topic: 'British Political History',
    subtopic: 'Welfare State',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What was "consensus politics" in post-1945 Britain?',
    correctAnswer: 'Both major parties broadly agreeing on welfare state, NHS, and mixed economy',
    wrongAnswers: [
      'One party always in power',
      'Politicians never disagreeing',
      'Direct democracy'
    ],
    explanation: 'From 1945-1979, Labour and Conservative governments maintained similar policies: NHS, nationalization, full employment. Thatcher broke this consensus. Whether it ever really existed is debated.',
    tags: ['welfare', 'consensus', 'post-war'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// INTERNATIONAL RELATIONS
// ============================================================================

const alevelInternational: Question[] = [
  {
    id: 'hist-alevel-exp2-004',
    subject: 'history',
    topic: 'International Relations',
    subtopic: 'Origins of WWI',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Fischer\'s thesis argued that WWI was caused by...',
    correctAnswer: 'German desire for world power (Weltpolitik) and a deliberate war plan',
    wrongAnswers: [
      'Purely accidental escalation',
      'British aggression',
      'French revenge for 1870'
    ],
    explanation: 'Fritz Fischer (1961) sparked huge controversy by blaming Germany. Others argue all powers share blame, or that war was unintended. The "Fischer controversy" shows how historians shape national memory.',
    tags: ['ww1', 'historiography', 'fischer'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp2-005',
    subject: 'history',
    topic: 'International Relations',
    subtopic: 'Appeasement',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Revisionist historians view appeasement as...',
    correctAnswer: 'A rational policy given Britain\'s military weakness and public opinion',
    wrongAnswers: [
      'Obviously correct at the time',
      'A betrayal by cowardly politicians',
      'Something that never happened'
    ],
    explanation: 'The "Guilty Men" view blamed Chamberlain for weakness. Revisionists argue Britain couldn\'t fight in 1938: no rearmament complete, no allies ready, public against war. Munich bought time.',
    tags: ['appeasement', 'historiography', 'revisionism'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp2-006',
    subject: 'history',
    topic: 'International Relations',
    subtopic: 'Cold War',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Post-revisionist Cold War historians argue...',
    correctAnswer: 'Both superpowers contributed to Cold War tensions through mutual misperception',
    wrongAnswers: [
      'The USSR was entirely to blame',
      'The USA was entirely to blame',
      'The Cold War was a myth'
    ],
    explanation: 'Orthodox = Soviet expansion caused it. Revisionist = US economic imperialism. Post-revisionist = both sides misread each other, security dilemmas escalated. Nuance emerges from debate.',
    tags: ['cold-war', 'historiography', 'post-revisionism'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// SOCIAL HISTORY
// ============================================================================

const alevelSocial: Question[] = [
  {
    id: 'hist-alevel-exp2-007',
    subject: 'history',
    topic: 'Social History',
    subtopic: 'Working Class',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'E.P. Thompson\'s "The Making of the English Working Class" argued that class...',
    correctAnswer: 'Was a cultural formation, not just an economic category',
    wrongAnswers: [
      'Doesn\'t exist',
      'Was created by government policy',
      'Only matters in economics'
    ],
    explanation: 'Thompson showed class consciousness developed through shared experiences, traditions, and struggles - not just factory conditions. "History from below" gave voice to ordinary people.',
    tags: ['social-history', 'thompson', 'class'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp2-008',
    subject: 'history',
    topic: 'Social History',
    subtopic: 'Gender History',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Gender historians argue that "separate spheres" in Victorian Britain...',
    correctAnswer: 'Were an ideal that didn\'t reflect most women\'s actual lives',
    wrongAnswers: [
      'Applied equally to all classes',
      'Made all women happy',
      'Didn\'t exist at all'
    ],
    explanation: 'Middle-class ideology: women at home, men in public. But working-class women always worked. Elite women had public roles. "Separate spheres" was prescriptive, not descriptive.',
    tags: ['gender', 'victorian', 'ideology'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp2-009',
    subject: 'history',
    topic: 'Social History',
    subtopic: 'Empire',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Post-colonial historians have challenged traditional narratives of empire by...',
    correctAnswer: 'Centering the experiences and resistance of colonized peoples',
    wrongAnswers: [
      'Ignoring empire completely',
      'Praising all aspects of colonialism',
      'Focusing only on economics'
    ],
    explanation: 'Edward Said, Gayatri Spivak, and others showed how empire wasn\'t just done TO people but resisted, negotiated, and shaped BY them. Colonial voices were written out of history - now being recovered.',
    tags: ['empire', 'post-colonial', 'perspective'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// HISTORICAL METHOD
// ============================================================================

const alevelMethod: Question[] = [
  {
    id: 'hist-alevel-exp2-010',
    subject: 'history',
    topic: 'Historical Method',
    subtopic: 'Sources',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why must historians consider the provenance of a source?',
    correctAnswer: 'To understand how the creator\'s position affected the content',
    wrongAnswers: [
      'To make sure it\'s old enough',
      'Because new sources are always better',
      'To verify it\'s handwritten'
    ],
    explanation: 'Who wrote it? When? Why? For whom? A Nazi propaganda poster tells us about Nazi ideology, not objective reality. Provenance helps us read sources critically, not naively.',
    tags: ['sources', 'method', 'provenance'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp2-011',
    subject: 'history',
    topic: 'Historical Method',
    subtopic: 'Interpretation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why do historians\' interpretations change over time?',
    correctAnswer: 'New sources, new questions, and changing present-day concerns',
    wrongAnswers: [
      'Previous historians were stupid',
      'The past itself changes',
      'Interpretations never change'
    ],
    explanation: 'Each generation asks different questions. Cold War historians interpreted USSR differently than post-Cold War ones. Archives open. Social movements highlight neglected groups. History is never "finished."',
    tags: ['interpretation', 'historiography', 'change'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp2-012',
    subject: 'history',
    topic: 'Historical Method',
    subtopic: 'Causation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In historical causation, what is the difference between necessary and sufficient causes?',
    correctAnswer: 'Necessary must be present; sufficient alone is enough to cause the event',
    wrongAnswers: [
      'They mean the same thing',
      'Necessary causes are more important',
      'Sufficient causes happen after the event'
    ],
    explanation: 'WWI needed nationalism (necessary) but nationalism alone wasn\'t enough (not sufficient). You need multiple necessary conditions, or one sufficient cause. Causation is complex!',
    tags: ['causation', 'method', 'analysis'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const alevelHistoryTermsExpanded2: TermDefinition[] = [
  {
    id: 'hist-alevel-exp2-term-001',
    subject: 'history',
    topic: 'Historiography',
    difficulty: 'alevel',
    term: 'Revisionism',
    definition: 'Challenging established historical interpretations with new evidence or perspectives.',
    example: 'A.J.P. Taylor revised views on Hitler\'s foreign policy intentions.',
    tags: ['historiography', 'interpretation']
  },
  {
    id: 'hist-alevel-exp2-term-002',
    subject: 'history',
    topic: 'Historiography',
    difficulty: 'alevel',
    term: 'Whig History',
    definition: 'Interpreting the past as inevitable progress toward present-day values.',
    example: 'Seeing British history as steady march toward democracy.',
    tags: ['historiography', 'criticism']
  },
  {
    id: 'hist-alevel-exp2-term-003',
    subject: 'history',
    topic: 'Method',
    difficulty: 'alevel',
    term: 'Anachronism',
    definition: 'Applying modern ideas or standards to the past inappropriately.',
    example: 'Judging medieval people by 21st-century moral standards.',
    tags: ['method', 'analysis', 'error']
  },
  {
    id: 'hist-alevel-exp2-term-004',
    subject: 'history',
    topic: 'Social History',
    difficulty: 'alevel',
    term: 'Agency',
    definition: 'The capacity of individuals or groups to act independently and make choices.',
    example: 'Emphasizing how enslaved people resisted, not just how they were oppressed.',
    tags: ['social-history', 'theory']
  }
];

// ============================================================================
// TIMELINE
// ============================================================================

export const alevelHistoryTimelineExpanded2: TimelineEvent[] = [
  {
    id: 'hist-alevel-exp2-time-001',
    subject: 'history',
    year: 1832,
    event: 'First Reform Act passed',
    significance: 'Extended vote to middle-class men; began democratic reform process',
    topic: 'British Political History',
    difficulty: 'alevel',
    tags: ['reform', 'democracy']
  },
  {
    id: 'hist-alevel-exp2-time-002',
    subject: 'history',
    year: 1918,
    event: 'Representation of the People Act',
    significance: 'Women over 30 and all men over 21 get the vote',
    topic: 'British Political History',
    difficulty: 'alevel',
    tags: ['suffrage', 'democracy']
  },
  {
    id: 'hist-alevel-exp2-time-003',
    subject: 'history',
    year: 1961,
    event: 'Fischer publishes "Germany\'s Aims in the First World War"',
    significance: 'Sparked major historiographical debate about WWI origins',
    topic: 'Historiography',
    difficulty: 'alevel',
    tags: ['historiography', 'ww1']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const alevelHistoryExpanded2: Question[] = [
  ...alevelBritishPolitics,
  ...alevelInternational,
  ...alevelSocial,
  ...alevelMethod
];
