/**
 * A-Level English Expanded Part 2
 * Advanced Literature and Language Analysis
 */

import { Question, TermDefinition } from '../types';

// ============================================================================
// TRAGEDY
// ============================================================================

const alevelTragedy: Question[] = [
  {
    id: 'eng-alevel-exp2-001',
    subject: 'english',
    topic: 'Tragedy',
    subtopic: 'Aristotelian',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What does Aristotle mean by "catharsis" in tragedy?',
    correctAnswer: 'The purging of emotions (pity and fear) through witnessing the drama',
    wrongAnswers: [
      'The death of the protagonist',
      'The final scene of the play',
      'The audience\'s laughter'
    ],
    explanation: 'Aristotle argued tragedy cleanses us emotionally. Watching Othello destroy himself purges our own fear and pity, leaving us emotionally balanced. It\'s theatrical therapy!',
    tags: ['tragedy', 'aristotle', 'catharsis'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp2-002',
    subject: 'english',
    topic: 'Tragedy',
    subtopic: 'Hamartia',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In Othello, what might be considered the protagonist\'s hamartia?',
    correctAnswer: 'His jealousy and susceptibility to manipulation',
    wrongAnswers: [
      'His military skill',
      'His love for Desdemona',
      'His race'
    ],
    explanation: 'Hamartia = tragic flaw. Othello\'s jealousy makes him vulnerable to Iago. But is it truly a "flaw" or is he victimized? Modern critics debate whether hamartia applies at all.',
    tags: ['tragedy', 'othello', 'hamartia'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp2-003',
    subject: 'english',
    topic: 'Tragedy',
    subtopic: 'Modern Tragedy',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Arthur Miller\'s "Death of a Salesman" challenges classical tragedy by...',
    correctAnswer: 'Having a common man as the tragic hero, not nobility',
    wrongAnswers: [
      'Not having anyone die',
      'Being set in ancient Greece',
      'Having a happy ending'
    ],
    explanation: 'Miller argued ordinary people deserve tragedy too. Willy Loman\'s fall is as moving as any king\'s. Modern tragedy democratizes suffering - the American Dream\'s failure affects everyone.',
    tags: ['tragedy', 'miller', 'modern'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// GOTHIC LITERATURE
// ============================================================================

const alevelGothic: Question[] = [
  {
    id: 'eng-alevel-exp2-004',
    subject: 'english',
    topic: 'Gothic',
    subtopic: 'Conventions',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Why do Gothic novels often feature crumbling castles and ruins?',
    correctAnswer: 'They represent the decay of the past and hidden family secrets',
    wrongAnswers: [
      'Authors couldn\'t afford to research modern buildings',
      'Readers only liked historical settings',
      'Ruins were cheaper to describe'
    ],
    explanation: 'Gothic architecture embodies the past\'s grip on the present. Hidden rooms = buried secrets. Decaying walls = corrupted bloodlines. The building IS the family\'s psychological state.',
    tags: ['gothic', 'setting', 'symbolism'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp2-005',
    subject: 'english',
    topic: 'Gothic',
    subtopic: 'The Double',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In "The Strange Case of Dr Jekyll and Mr Hyde," the double represents...',
    correctAnswer: 'The repressed desires and darkness within respectable Victorian society',
    wrongAnswers: [
      'A simple medical condition',
      'Jekyll\'s identical twin',
      'A completely separate person'
    ],
    explanation: 'Hyde IS Jekyll\'s repressed self - the violence and desire Victorian gentlemen hid. Stevenson critiques the hypocrisy of respectable society. Every Dr Jekyll has a Mr Hyde.',
    tags: ['gothic', 'double', 'victorian'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp2-006',
    subject: 'english',
    topic: 'Gothic',
    subtopic: 'Female Gothic',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Female Gothic typically features...',
    correctAnswer: 'A heroine trapped in a domestic space controlled by a threatening male',
    wrongAnswers: [
      'Only male authors writing about women',
      'Ghost stories without romance',
      'Happy marriages'
    ],
    explanation: 'From Radcliffe to du Maurier, Female Gothic explores women\'s powerlessness in patriarchal spaces. The house becomes a prison. "Rebecca" shows the second Mrs de Winter haunted by male authority.',
    tags: ['gothic', 'gender', 'feminism'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// LANGUAGE CHANGE
// ============================================================================

const alevelLanguageChange: Question[] = [
  {
    id: 'eng-alevel-exp2-007',
    subject: 'english',
    topic: 'Language Change',
    subtopic: 'Semantic Change',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: '"Nice" originally meant "foolish" or "ignorant." This change is an example of...',
    correctAnswer: 'Amelioration (word gains more positive meaning)',
    wrongAnswers: [
      'Pejoration',
      'Broadening',
      'Narrowing'
    ],
    explanation: 'Amelioration = words become more positive. "Nice" went from "foolish" → "precise" → "pleasant." Pejoration is the opposite (e.g., "villain" originally just meant "peasant").',
    tags: ['language-change', 'semantics', 'amelioration'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp2-008',
    subject: 'english',
    topic: 'Language Change',
    subtopic: 'Standardisation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What impact did the printing press have on English standardisation?',
    correctAnswer: 'It helped establish a fixed written form based on London dialect',
    wrongAnswers: [
      'It had no effect on language',
      'It created more regional variation',
      'It made everyone speak the same'
    ],
    explanation: 'Caxton\'s press (1476) needed consistent spelling for mass production. London dialect became the standard. Before printing, "church" could be spelled 30+ ways!',
    tags: ['language-change', 'standardisation', 'history'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp2-009',
    subject: 'english',
    topic: 'Language Change',
    subtopic: 'Prescriptivism vs Descriptivism',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A descriptivist linguist would say about "ain\'t"...',
    correctAnswer: 'It\'s a legitimate feature of some English dialects',
    wrongAnswers: [
      'It\'s always wrong and should be corrected',
      'It should be removed from the language',
      'Only uneducated people use it'
    ],
    explanation: 'Descriptivists observe and describe language as used, without judgment. Prescriptivists set rules about "correct" usage. "Ain\'t" is systematic in many dialects - it\'s not random error.',
    tags: ['language-change', 'attitudes', 'descriptivism'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// SOCIOLINGUISTICS
// ============================================================================

const alevelSociolinguistics: Question[] = [
  {
    id: 'eng-alevel-exp2-010',
    subject: 'english',
    topic: 'Sociolinguistics',
    subtopic: 'Register',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'What determines register?',
    correctAnswer: 'Field (topic), tenor (relationship), and mode (channel)',
    wrongAnswers: [
      'Only the speaker\'s education',
      'Only the formality of the situation',
      'Only the topic being discussed'
    ],
    explanation: 'Halliday\'s register theory: FIELD (what\'s discussed), TENOR (relationships), MODE (spoken/written). A doctor speaking to colleagues uses different register than speaking to patients.',
    tags: ['sociolinguistics', 'register', 'halliday'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp2-011',
    subject: 'english',
    topic: 'Sociolinguistics',
    subtopic: 'Code-switching',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Code-switching occurs when...',
    correctAnswer: 'Speakers shift between languages or dialects within a conversation',
    wrongAnswers: [
      'A computer changes programming language',
      'Someone forgets their native language',
      'Languages merge into one'
    ],
    explanation: 'Bilingual speakers code-switch for emphasis, identity, or audience. A British-Jamaican teenager might switch to Patois with friends and Standard English with teachers.',
    tags: ['sociolinguistics', 'multilingualism', 'identity'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp2-012',
    subject: 'english',
    topic: 'Sociolinguistics',
    subtopic: 'Accent Prejudice',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Research shows that accent prejudice...',
    correctAnswer: 'Is based on social attitudes, not linguistic logic',
    wrongAnswers: [
      'Is scientifically justified',
      'Only exists in Britain',
      'Has been eliminated in modern society'
    ],
    explanation: 'No accent is linguistically "better." RP sounds "educated" only because of social associations with power. A Birmingham accent is equally complex and rule-governed as any other.',
    tags: ['sociolinguistics', 'attitudes', 'accent'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// NARRATIVE THEORY
// ============================================================================

const alevelNarrative: Question[] = [
  {
    id: 'eng-alevel-exp2-013',
    subject: 'english',
    topic: 'Narrative Theory',
    subtopic: 'Propp',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'According to Propp, fairy tales contain a limited number of...',
    correctAnswer: 'Character functions (31 functions across 7 character types)',
    wrongAnswers: [
      'Words',
      'Pages',
      'Illustrations'
    ],
    explanation: 'Propp analysed Russian folk tales and found recurring patterns: Hero, Villain, Donor, Helper, Princess, Dispatcher, False Hero. Star Wars follows Propp\'s structure perfectly!',
    tags: ['narrative', 'propp', 'structuralism'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp2-014',
    subject: 'english',
    topic: 'Narrative Theory',
    subtopic: 'Todorov',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Todorov\'s narrative structure moves from...',
    correctAnswer: 'Equilibrium → Disruption → New Equilibrium',
    wrongAnswers: [
      'Beginning → Middle → End',
      'Conflict → Resolution',
      'Introduction → Climax → Conclusion'
    ],
    explanation: 'Todorov: stories begin in balance, something disrupts it, and a new (often changed) balance is found. The new equilibrium isn\'t the same as the old - characters have transformed.',
    tags: ['narrative', 'todorov', 'structure'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp2-015',
    subject: 'english',
    topic: 'Narrative Theory',
    subtopic: 'Barthes',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Barthes\' "hermeneutic code" refers to...',
    correctAnswer: 'The mysteries and questions that keep readers engaged',
    wrongAnswers: [
      'The actions that drive plot',
      'The symbols in a text',
      'The character\'s inner thoughts'
    ],
    explanation: 'Hermeneutic code = what-happens-next hooks. "Who killed the victim?" is hermeneutic. Barthes identified 5 codes: hermeneutic, proairetic (action), semantic, symbolic, cultural.',
    tags: ['narrative', 'barthes', 'codes'],
    yearGroup: [12, 13]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const alevelEnglishTermsExpanded2: TermDefinition[] = [
  {
    id: 'eng-alevel-exp2-term-001',
    subject: 'english',
    topic: 'Tragedy',
    difficulty: 'alevel',
    term: 'Anagnorisis',
    definition: 'The moment of critical discovery or recognition in tragedy.',
    example: 'Oedipus realising he killed his father and married his mother.',
    tags: ['tragedy', 'aristotle', 'recognition']
  },
  {
    id: 'eng-alevel-exp2-term-002',
    subject: 'english',
    topic: 'Gothic',
    difficulty: 'alevel',
    term: 'The Uncanny',
    definition: 'Freud\'s concept of something familiar made strange and unsettling.',
    example: 'Dolls, doubles, and the return of the repressed create uncanny effects.',
    tags: ['gothic', 'freud', 'psychoanalysis']
  },
  {
    id: 'eng-alevel-exp2-term-003',
    subject: 'english',
    topic: 'Language Change',
    difficulty: 'alevel',
    term: 'Pejoration',
    definition: 'When a word acquires a more negative meaning over time.',
    example: '"Villain" originally meant "peasant" but became associated with evil.',
    tags: ['language-change', 'semantics']
  },
  {
    id: 'eng-alevel-exp2-term-004',
    subject: 'english',
    topic: 'Sociolinguistics',
    difficulty: 'alevel',
    term: 'Idiolect',
    definition: 'An individual\'s unique way of speaking.',
    example: 'Your specific vocabulary, grammar choices, and pronunciation.',
    tags: ['sociolinguistics', 'variation']
  },
  {
    id: 'eng-alevel-exp2-term-005',
    subject: 'english',
    topic: 'Narrative',
    difficulty: 'alevel',
    term: 'Proairetic Code',
    definition: 'Barthes\' code of actions that drive the plot forward.',
    example: 'A character reaches for a gun = we anticipate shooting.',
    tags: ['narrative', 'barthes', 'structure']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const alevelEnglishExpanded2: Question[] = [
  ...alevelTragedy,
  ...alevelGothic,
  ...alevelLanguageChange,
  ...alevelSociolinguistics,
  ...alevelNarrative
];
