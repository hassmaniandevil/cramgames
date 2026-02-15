/**
 * GCSE English Expanded Part 2
 * Additional Literature and Language questions
 */

import { Question, TermDefinition } from '../types';

// ============================================================================
// LANGUAGE PAPER 1 - FICTION
// ============================================================================

const gcseLanguageFiction: Question[] = [
  {
    id: 'eng-gcse-exp2-001',
    subject: 'english',
    topic: 'Language Paper 1',
    subtopic: 'Structural Analysis',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A story begins in the middle of the action. What is this technique called?',
    correctAnswer: 'In medias res',
    wrongAnswers: [
      'Flashback',
      'Foreshadowing',
      'Exposition'
    ],
    explanation: 'In medias res (Latin: "in the middle of things") drops readers straight into the action, creating immediate engagement. The Odyssey famously uses this - we meet Odysseus 10 years into his journey!',
    tags: ['structure', 'narrative', 'technique'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-002',
    subject: 'english',
    topic: 'Language Paper 1',
    subtopic: 'Narrative Voice',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'An unreliable narrator is one who...',
    correctAnswer: 'Cannot be trusted to tell the truth accurately',
    wrongAnswers: [
      'Tells the story from multiple perspectives',
      'Uses too many adjectives',
      'Always lies to the reader'
    ],
    explanation: 'Unreliable narrators may be biased, naive, or deliberately deceptive. Think of how a child might misunderstand adult situations. It makes readers question everything they\'re told!',
    tags: ['narrative', 'voice', 'perspective'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-003',
    subject: 'english',
    topic: 'Language Paper 1',
    subtopic: 'Language Analysis',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '"The wind screamed through the trees." What technique is used here?',
    correctAnswer: 'Personification',
    wrongAnswers: [
      'Simile',
      'Alliteration',
      'Metaphor'
    ],
    explanation: 'Personification gives human qualities to non-human things. Wind can\'t literally scream - but describing it this way creates a threatening atmosphere and suggests nature is alive and angry.',
    tags: ['language', 'personification', 'analysis'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-004',
    subject: 'english',
    topic: 'Language Paper 1',
    subtopic: 'Tension Building',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Short, punchy sentences in a tense scene create what effect?',
    correctAnswer: 'Increase pace and urgency',
    wrongAnswers: [
      'Make the scene feel calm',
      'Confuse the reader',
      'Show the character is educated'
    ],
    explanation: 'Short sentences = fast pace. Readers process them quickly, mimicking rapid heartbeat or urgent action. "She ran. Faster. The door was close. So close." - you feel the breathlessness.',
    tags: ['structure', 'pace', 'sentence-types'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-005',
    subject: 'english',
    topic: 'Language Paper 1',
    subtopic: 'Symbolism',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In literature, a raven often symbolizes...',
    correctAnswer: 'Death or ill omen',
    wrongAnswers: [
      'Peace and harmony',
      'New beginnings',
      'Childhood innocence'
    ],
    explanation: 'Ravens have been associated with death across cultures - they\'re black, eat carrion, and appear on battlefields. Poe\'s "The Raven" uses this perfectly. Symbols carry cultural weight!',
    tags: ['symbolism', 'imagery', 'interpretation'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// LANGUAGE PAPER 2 - NON-FICTION
// ============================================================================

const gcseLanguageNonFiction: Question[] = [
  {
    id: 'eng-gcse-exp2-006',
    subject: 'english',
    topic: 'Language Paper 2',
    subtopic: 'Rhetorical Devices',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields." This uses...',
    correctAnswer: 'Anaphora (repetition at start of clauses)',
    wrongAnswers: [
      'Metaphor',
      'Hyperbole',
      'Oxymoron'
    ],
    explanation: 'Churchill\'s speech uses anaphora - repeating "we shall fight" builds determination and rhythm. It\'s like a drumbeat of defiance. Powerful speeches often use this pattern.',
    tags: ['rhetoric', 'persuasion', 'speech'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-007',
    subject: 'english',
    topic: 'Language Paper 2',
    subtopic: 'Purpose and Audience',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A charity appeal uses emotive language to...',
    correctAnswer: 'Appeal to readers\' emotions and encourage donations',
    wrongAnswers: [
      'Provide statistical evidence',
      'Appear professional and distant',
      'Confuse readers with complex vocabulary'
    ],
    explanation: 'Emotive language like "suffering", "desperate", "heartbreaking" triggers emotional responses. Charities know logic alone doesn\'t open wallets - they need to make you feel something.',
    tags: ['purpose', 'audience', 'persuasion'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-008',
    subject: 'english',
    topic: 'Language Paper 2',
    subtopic: 'Comparing Texts',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'When comparing two non-fiction texts, you should focus on...',
    correctAnswer: 'Both similarities AND differences in methods and effects',
    wrongAnswers: [
      'Only what makes them the same',
      'Which one is better written',
      'Only the facts they contain'
    ],
    explanation: 'Good comparison is balanced - find connections AND contrasts. "Both writers use statistics, but while Writer A uses them to shock, Writer B uses them to reassure..."',
    tags: ['comparison', 'analysis', 'non-fiction'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-009',
    subject: 'english',
    topic: 'Language Paper 2',
    subtopic: 'Transactional Writing',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A formal letter should begin with...',
    correctAnswer: '"Dear Sir/Madam" if you don\'t know the recipient\'s name',
    wrongAnswers: [
      '"Hey there!"',
      '"To whoever reads this"',
      '"Hi friend!"'
    ],
    explanation: 'Formal register = "Dear Sir/Madam" + "Yours faithfully". If you know the name: "Dear Mr Smith" + "Yours sincerely". These conventions show professionalism and respect.',
    tags: ['writing', 'format', 'formal'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// MACBETH
// ============================================================================

const gcseMacbeth: Question[] = [
  {
    id: 'eng-gcse-exp2-010',
    subject: 'english',
    topic: 'Shakespeare',
    subtopic: 'Macbeth',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '"Is this a dagger which I see before me?" What does this soliloquy reveal?',
    correctAnswer: 'Macbeth\'s psychological torment before the murder',
    wrongAnswers: [
      'Lady Macbeth\'s manipulation',
      'The witches\' powers',
      'Duncan\'s suspicions'
    ],
    explanation: 'The dagger soliloquy shows Macbeth\'s fractured mind - he can\'t tell reality from imagination. Is it a supernatural sign, or his guilt manifesting? Shakespeare leaves it ambiguous.',
    tags: ['macbeth', 'soliloquy', 'psychology'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-011',
    subject: 'english',
    topic: 'Shakespeare',
    subtopic: 'Macbeth',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '"Out, damned spot!" reveals what about Lady Macbeth?',
    correctAnswer: 'Her overwhelming guilt drives her to madness',
    wrongAnswers: [
      'She is physically ill with disease',
      'She is still planning more murders',
      'She has completely forgotten the murder'
    ],
    explanation: 'The woman who said "a little water clears us of this deed" now compulsively washes imaginary blood. Ironic reversal - her earlier confidence crumbles into guilt-driven insanity.',
    tags: ['macbeth', 'lady-macbeth', 'guilt'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-012',
    subject: 'english',
    topic: 'Shakespeare',
    subtopic: 'Macbeth',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The witches\' predictions are examples of...',
    correctAnswer: 'Equivocation (deliberately ambiguous truth)',
    wrongAnswers: [
      'Direct lies',
      'Random prophecy',
      'Helpful advice'
    ],
    explanation: '"No man of woman born" sounds like invincibility - but Macduff was "from his mother\'s womb untimely ripp\'d" (C-section). The witches speak truth in misleading ways.',
    tags: ['macbeth', 'witches', 'equivocation'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// AN INSPECTOR CALLS
// ============================================================================

const gcseInspectorCalls: Question[] = [
  {
    id: 'eng-gcse-exp2-013',
    subject: 'english',
    topic: '20th Century Drama',
    subtopic: 'An Inspector Calls',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why does Priestley set the play in 1912 but write it in 1945?',
    correctAnswer: 'To show how pre-WWI attitudes led to disaster',
    wrongAnswers: [
      'He couldn\'t think of a modern setting',
      'The costumes were cheaper',
      'He wanted to confuse the audience'
    ],
    explanation: 'Writing in 1945 after two world wars, Priestley shows 1912 audiences were naive about upcoming catastrophes. Birling\'s "Titanic unsinkable" speech is dramatic irony - we know he\'s wrong.',
    tags: ['inspector-calls', 'context', 'dramatic-irony'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-014',
    subject: 'english',
    topic: '20th Century Drama',
    subtopic: 'An Inspector Calls',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What does the Inspector represent?',
    correctAnswer: 'Social conscience and collective responsibility',
    wrongAnswers: [
      'The police force',
      'The working class only',
      'Religious judgment'
    ],
    explanation: 'The Inspector (note the name "Goole" - ghoul?) represents our moral responsibility to each other. His message: "We are members of one body." Priestley\'s socialist beliefs shine through.',
    tags: ['inspector-calls', 'themes', 'socialism'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-015',
    subject: 'english',
    topic: '20th Century Drama',
    subtopic: 'An Inspector Calls',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Sheila changes during the play because she...',
    correctAnswer: 'Accepts responsibility and shows genuine remorse',
    wrongAnswers: [
      'Refuses to believe Eva existed',
      'Blames Eric for everything',
      'Remains as selfish as before'
    ],
    explanation: 'Sheila\'s arc goes from spoiled ("squiffy") to morally awakened. She\'s the generation that learns. Her parents don\'t change - making her the hope for the future.',
    tags: ['inspector-calls', 'character', 'development'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// POETRY - POWER AND CONFLICT
// ============================================================================

const gcsePoetry: Question[] = [
  {
    id: 'eng-gcse-exp2-016',
    subject: 'english',
    topic: 'Poetry',
    subtopic: 'Power and Conflict',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In "Ozymandias", the "shattered visage" represents...',
    correctAnswer: 'The temporary nature of human power',
    wrongAnswers: [
      'The sculptor\'s lack of skill',
      'A natural disaster',
      'The king\'s kindness'
    ],
    explanation: 'Shelley uses the broken statue to mock arrogance. Ozymandias boasted "Look on my works ye Mighty, and despair!" - but only sand remains. All power fades eventually.',
    tags: ['poetry', 'ozymandias', 'power'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-017',
    subject: 'english',
    topic: 'Poetry',
    subtopic: 'Power and Conflict',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '"Remains" by Simon Armitage uses colloquial language to...',
    correctAnswer: 'Show the soldier\'s authentic voice and trauma',
    wrongAnswers: [
      'Suggest the soldier is uneducated',
      'Make the poem suitable for children',
      'Follow traditional poetry rules'
    ],
    explanation: '"Probably armed, possibly not" - the casual tone contrasts with horrific content. This dissonance reveals how soldiers cope, and makes PTSD ("his bloody life in my bloody hands") more visceral.',
    tags: ['poetry', 'remains', 'conflict'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-018',
    subject: 'english',
    topic: 'Poetry',
    subtopic: 'Power and Conflict',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '"London" by Blake uses repetition of "charter\'d" to suggest...',
    correctAnswer: 'Control, restriction, and commercialization',
    wrongAnswers: [
      'Freedom and movement',
      'The beauty of the city',
      'Religious devotion'
    ],
    explanation: '"Charter\'d streets" and "charter\'d Thames" - even the river is owned and controlled. Blake criticizes how capitalism and institutions trap Londoners in "mind-forg\'d manacles."',
    tags: ['poetry', 'london', 'power'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-019',
    subject: 'english',
    topic: 'Poetry',
    subtopic: 'Power and Conflict',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In "Exposure", Owen repeats "But nothing happens" to convey...',
    correctAnswer: 'The tedious, futile suffering of trench warfare',
    wrongAnswers: [
      'The soldiers\' boredom without combat',
      'A positive message about survival',
      'The speed of battle'
    ],
    explanation: 'The anticlimactic refrain emphasizes WWI\'s horror: not glorious combat, but freezing, waiting, dying slowly. "Nothing happens" IS the tragedy - meaningless death from exposure.',
    tags: ['poetry', 'exposure', 'war'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// A CHRISTMAS CAROL
// ============================================================================

const gcseChristmasCarol: Question[] = [
  {
    id: 'eng-gcse-exp2-020',
    subject: 'english',
    topic: '19th Century Novel',
    subtopic: 'A Christmas Carol',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Dickens describes Scrooge as "solitary as an oyster" to show...',
    correctAnswer: 'His emotional isolation and self-protection',
    wrongAnswers: [
      'He lives near the sea',
      'He works with seafood',
      'He moves very slowly'
    ],
    explanation: 'Oysters are closed, hard-shelled, and hidden inside. The simile suggests Scrooge has built defenses around himself. But oysters contain pearls - hinting at hidden potential for goodness.',
    tags: ['christmas-carol', 'scrooge', 'simile'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-021',
    subject: 'english',
    topic: '19th Century Novel',
    subtopic: 'A Christmas Carol',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The Ghost of Christmas Yet to Come is silent because...',
    correctAnswer: 'The future is uncertain and terrifying - death needs no words',
    wrongAnswers: [
      'Dickens ran out of dialogue ideas',
      'It represents Scrooge\'s deafness',
      'Ghosts cannot speak'
    ],
    explanation: 'This phantom only points, shrouded in black. Silence is more frightening than words - Scrooge must confront his mortality without comfort or explanation. Pure existential dread.',
    tags: ['christmas-carol', 'ghosts', 'structure'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-022',
    subject: 'english',
    topic: '19th Century Novel',
    subtopic: 'A Christmas Carol',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Tiny Tim represents...',
    correctAnswer: 'The innocent poor suffering from society\'s neglect',
    wrongAnswers: [
      'Scrooge\'s lost son',
      'Bob Cratchit\'s greed',
      'Victorian medical advances'
    ],
    explanation: 'Tiny Tim is a sentimental device - his potential death represents all poor children dying from preventable causes. "Are there no prisons?" Scrooge asks. Tiny Tim is the answer.',
    tags: ['christmas-carol', 'poverty', 'social-criticism'],
    yearGroup: [10, 11]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const gcseEnglishTermsExpanded2: TermDefinition[] = [
  {
    id: 'eng-gcse-exp2-term-001',
    subject: 'english',
    topic: 'Language',
    difficulty: 'gcse',
    term: 'Anaphora',
    definition: 'Repetition of words or phrases at the beginning of successive clauses for emphasis.',
    example: '"I have a dream... I have a dream..." - MLK',
    tags: ['rhetoric', 'repetition']
  },
  {
    id: 'eng-gcse-exp2-term-002',
    subject: 'english',
    topic: 'Language',
    difficulty: 'gcse',
    term: 'In Medias Res',
    definition: 'Starting a narrative in the middle of the action, then filling in background later.',
    example: 'Homer\'s Odyssey begins with Odysseus already on his journey.',
    tags: ['structure', 'narrative']
  },
  {
    id: 'eng-gcse-exp2-term-003',
    subject: 'english',
    topic: 'Language',
    difficulty: 'gcse',
    term: 'Unreliable Narrator',
    definition: 'A narrator whose credibility is compromised, forcing readers to question the story.',
    example: 'Nick Carraway in The Great Gatsby may romanticize events.',
    tags: ['narrative', 'voice']
  },
  {
    id: 'eng-gcse-exp2-term-004',
    subject: 'english',
    topic: 'Shakespeare',
    difficulty: 'gcse',
    term: 'Equivocation',
    definition: 'Using ambiguous language to deceive without technically lying.',
    example: 'The witches\' prophecies in Macbeth are technically true but misleading.',
    tags: ['macbeth', 'language']
  },
  {
    id: 'eng-gcse-exp2-term-005',
    subject: 'english',
    topic: 'Poetry',
    difficulty: 'gcse',
    term: 'Refrain',
    definition: 'A line or phrase repeated throughout a poem, often at the end of stanzas.',
    example: '"But nothing happens" in Wilfred Owen\'s "Exposure".',
    tags: ['poetry', 'structure']
  },
  {
    id: 'eng-gcse-exp2-term-006',
    subject: 'english',
    topic: 'Drama',
    difficulty: 'gcse',
    term: 'Stage Directions',
    definition: 'Instructions in a script about movement, delivery, or setting.',
    example: 'In An Inspector Calls: "(curtly, to BIRLING)"',
    tags: ['drama', 'technique']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const gcseEnglishExpanded2: Question[] = [
  ...gcseLanguageFiction,
  ...gcseLanguageNonFiction,
  ...gcseMacbeth,
  ...gcseInspectorCalls,
  ...gcsePoetry,
  ...gcseChristmasCarol
];
