/**
 * GCSE English Expanded Question Bank
 * Additional gamified questions for GCSE English Language & Literature
 */

import { Question, TermDefinition } from '../types';

// ============================================
// LANGUAGE PAPER 1 - EXPLORATIONS IN CREATIVE READING
// ============================================

export const gcseEnglishLanguage1: Question[] = [
  {
    id: 'eng-gcse-exp2-lang1-001',
    subject: 'english',
    topic: 'Language Analysis',
    subtopic: 'Sentence Forms',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A writer uses a single-word sentence: "Stop." What effect does this create?',
    correctAnswer: 'Creates dramatic impact and emphasis',
    wrongAnswers: ['Shows the writer is lazy', 'Indicates a grammar error', 'Makes the text childish'],
    explanation: 'Short sentences = punchy impact! They slow down the reader, create tension, or deliver a shocking moment. "Stop." is way more powerful than "I really wanted him to stop doing what he was doing."',
    hint: 'Think about how it feels different from a long sentence',
    tags: ['language', 'sentence-forms', 'effect'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-lang1-002',
    subject: 'english',
    topic: 'Language Analysis',
    subtopic: 'Listing',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '"The room contained books, papers, photographs, memories, regrets, and ghosts." The effect of this list is:',
    correctAnswer: 'Shows overwhelming accumulation, moving from concrete to abstract',
    wrongAnswers: ['Simply describes the room contents', 'Shows the character is messy', 'Creates humor'],
    explanation: 'Lists can be powerful! This one starts with physical items (books, papers) and shifts to abstract emotions (memories, regrets, ghosts). It shows psychological complexity - the room holds more than objects.',
    hint: 'Notice how the items change as the list progresses',
    tags: ['language', 'listing', 'structure'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-lang1-003',
    subject: 'english',
    topic: 'Language Analysis',
    subtopic: 'Juxtaposition',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '"The children laughed while the bombs fell." This technique is:',
    correctAnswer: 'Juxtaposition',
    wrongAnswers: ['Onomatopoeia', 'Simile', 'Hyperbole'],
    explanation: 'Juxtaposition = placing contrasting ideas side by side. Children\'s laughter vs. falling bombs = innocence vs. destruction. The contrast makes both elements more powerful. War literature loves this!',
    hint: 'What\'s being contrasted here?',
    tags: ['language', 'juxtaposition', 'techniques'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-lang1-004',
    subject: 'english',
    topic: 'Language Analysis',
    subtopic: 'Cyclical Structure',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'A cyclical structure is when a text ends where it began, suggesting nothing has changed or that events repeat.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'Cyclical structure = full circle! If a story starts and ends in the same place/situation, it can show entrapment ("nothing ever changes") or completion ("a journey finished"). Common in literature exploring social immobility.',
    tags: ['structure', 'cyclical', 'narrative'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-lang1-005',
    subject: 'english',
    topic: 'Language Analysis',
    subtopic: 'Anaphora',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: '"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields" - this repetition at the start of clauses is called _____.',
    correctAnswer: 'anaphora',
    wrongAnswers: ['alliteration', 'assonance', 'metaphor'],
    explanation: 'Anaphora = repetition at the START of lines/clauses. Churchill\'s famous speech uses it to build momentum and determination. It creates rhythm and emphasizes the repeated idea - "we SHALL fight!"',
    hint: 'The key is WHERE the repetition occurs',
    tags: ['language', 'anaphora', 'rhetoric'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-lang1-006',
    subject: 'english',
    topic: 'Language Analysis',
    subtopic: 'Syndetic Listing',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '"She was tired and hungry and cold and scared." This is an example of:',
    correctAnswer: 'Polysyndeton (syndetic listing)',
    wrongAnswers: ['Asyndeton', 'Anaphora', 'Epistrophe'],
    explanation: 'Polysyndeton = many conjunctions (and, and, and). It makes each item feel separate and overwhelming - like problems piling up. Asyndeton removes conjunctions: "tired, hungry, cold, scared" - faster, more urgent.',
    hint: 'Count the "ands"',
    tags: ['language', 'polysyndeton', 'listing'],
    yearGroup: [10, 11]
  },
];

// ============================================
// LANGUAGE PAPER 2 - WRITERS' VIEWPOINTS
// ============================================

export const gcseEnglishLanguage2: Question[] = [
  {
    id: 'eng-gcse-exp2-lang2-001',
    subject: 'english',
    topic: 'Non-Fiction',
    subtopic: 'Rhetorical Questions',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why do writers use rhetorical questions in persuasive writing?',
    correctAnswer: 'To engage readers and guide them toward an answer',
    wrongAnswers: ['Because they don\'t know the answer', 'To fill space in their article', 'To confuse the reader'],
    explanation: 'Rhetorical questions are persuasion gold! They make readers think they\'re reaching conclusions themselves. "Don\'t you deserve better?" implies YES YOU DO - without directly stating it. Mind control, basically.',
    hint: 'Think about what the writer WANTS you to think',
    tags: ['non-fiction', 'rhetoric', 'persuasion'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-lang2-002',
    subject: 'english',
    topic: 'Non-Fiction',
    subtopic: 'Rule of Three',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: '"Education, education, education" demonstrates which persuasive technique?',
    correctAnswer: 'Rule of three (tricolon)',
    wrongAnswers: ['Alliteration', 'Metaphor', 'Irony'],
    explanation: 'The rule of three is everywhere! Three items create rhythm and completeness. Tony Blair used it, comedians use it, your brain loves it. "Friends, Romans, countrymen" - three. "Life, liberty, pursuit of happiness" - three.',
    hint: 'Count the repetitions',
    tags: ['non-fiction', 'rule-of-three', 'rhetoric'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-lang2-003',
    subject: 'english',
    topic: 'Non-Fiction',
    subtopic: 'Direct Address',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Using "you" in persuasive writing creates a personal connection with the reader.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'Direct address is like eye contact in writing! "You" makes readers feel personally spoken to. "People should recycle" is general. "YOU should recycle" is a direct command. Much harder to ignore!',
    tags: ['non-fiction', 'direct-address', 'persuasion'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-lang2-004',
    subject: 'english',
    topic: 'Non-Fiction',
    subtopic: 'Statistics',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A writer states "87% of scientists agree..." Why use statistics?',
    correctAnswer: 'To provide factual evidence and appear credible',
    wrongAnswers: ['Because numbers are always true', 'To confuse readers with data', 'Because essays need numbers'],
    explanation: 'Statistics = instant credibility boost! Numbers seem objective and scientific. BUT beware: "87% of scientists" could mean 87 out of 100 cherry-picked scientists. Always question the source!',
    hint: 'What impression does a specific number create?',
    tags: ['non-fiction', 'evidence', 'statistics'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-lang2-005',
    subject: 'english',
    topic: 'Non-Fiction',
    subtopic: 'Anecdotes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A writer shares a personal story before arguing their point. This anecdote serves to:',
    correctAnswer: 'Create emotional connection and make the argument relatable',
    wrongAnswers: ['Waste the reader\'s time', 'Show off their interesting life', 'Avoid the actual topic'],
    explanation: 'Anecdotes = storytelling as evidence! A personal story about struggling with poverty is more powerful than "poverty is bad." Readers connect emotionally before logic kicks in. Sneaky but effective!',
    hint: 'How does a story make you feel compared to statistics?',
    tags: ['non-fiction', 'anecdotes', 'persuasion'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-lang2-006',
    subject: 'english',
    topic: 'Non-Fiction',
    subtopic: 'Tone',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each tone to its effect on readers:',
    correctAnswer: ['Sarcastic → Mocks opponents, entertains supporters', 'Angry → Conveys urgency and passion', 'Sympathetic → Creates emotional connection', 'Formal → Establishes authority and credibility'],
    wrongAnswers: [],
    explanation: 'Tone = attitude in writing. Writers choose tone deliberately! Sarcasm works for audiences who already agree. Anger mobilizes action. Sympathy pulls heartstrings. Formality commands respect. Mix them strategically.',
    hint: 'Think about how each tone would make a reader feel',
    tags: ['non-fiction', 'tone', 'effect'],
    yearGroup: [10, 11]
  },
];

// ============================================
// LITERATURE - SHAKESPEARE
// ============================================

export const gcseEnglishShakespeare: Question[] = [
  {
    id: 'eng-gcse-exp2-shak-001',
    subject: 'english',
    topic: 'Macbeth',
    subtopic: 'Themes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In Macbeth, "Fair is foul, and foul is fair" establishes the theme of:',
    correctAnswer: 'Appearance vs. reality / moral confusion',
    wrongAnswers: ['Weather in Scotland', 'The witches being ugly', 'A spelling mistake'],
    explanation: 'This line flips everything! Nothing is what it seems in Macbeth. The loyal warrior becomes a murderer. The "fair" King Duncan walks into death. The whole play questions what\'s truly good or evil.',
    hint: 'What do "fair" and "foul" usually mean?',
    tags: ['macbeth', 'themes', 'witches'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-shak-002',
    subject: 'english',
    topic: 'Macbeth',
    subtopic: 'Symbolism',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Lady Macbeth\'s "Out, damned spot!" scene uses blood to symbolize:',
    correctAnswer: 'Guilt that cannot be washed away',
    wrongAnswers: ['Her need for cleaning supplies', 'A physical injury', 'A fashion problem'],
    explanation: 'The blood won\'t come out because GUILT doesn\'t wash away! Lady Macbeth seemed cold earlier ("a little water clears us") but now she\'s mentally destroyed. The physical becomes psychological. The spot is imaginary but her guilt is real.',
    hint: 'Is the blood actually there?',
    tags: ['macbeth', 'symbolism', 'lady-macbeth'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-shak-003',
    subject: 'english',
    topic: 'Romeo and Juliet',
    subtopic: 'Language',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Romeo and Juliet share a sonnet when they first meet. This form suggests:',
    correctAnswer: 'Perfect harmony and destined love',
    wrongAnswers: ['Shakespeare was showing off', 'They both studied poetry', 'It was accidental'],
    explanation: 'A SHARED sonnet - they literally complete each other\'s sentences in perfect poetic form! It shows instant connection and compatibility. The 14 lines, rhyme scheme, and final kiss (the "prayer") create theatrical magic.',
    hint: 'What does a sonnet traditionally express?',
    tags: ['romeo-juliet', 'form', 'love'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-shak-004',
    subject: 'english',
    topic: 'Romeo and Juliet',
    subtopic: 'Context',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'In Shakespeare\'s time, Juliet\'s age (13) for marriage would have seemed unusually young.',
    correctAnswer: 'False',
    wrongAnswers: [],
    explanation: 'False! While we find it shocking today, aristocratic girls could be married young in Elizabethan England. Paris wanting Juliet at 13 wouldn\'t have scandalized the original audience - though Shakespeare does emphasize her youth throughout.',
    tags: ['romeo-juliet', 'context', 'social'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-shak-005',
    subject: 'english',
    topic: 'Macbeth',
    subtopic: 'Context',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Macbeth was written shortly after the Gunpowder Plot. The play\'s message to King James I was:',
    correctAnswer: 'Regicide (killing kings) brings divine punishment',
    wrongAnswers: ['Scotland has nice castles', 'Witches are real and helpful', 'Ambition is always good'],
    explanation: 'Shakespeare knew his audience! James I had just survived an assassination attempt. Macbeth shows regicide = chaos, madness, death. It\'s basically a "please don\'t kill our king" public service announcement. Smart politics!',
    hint: 'Think about what the king would want to hear',
    tags: ['macbeth', 'context', 'politics'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-shak-006',
    subject: 'english',
    topic: 'Macbeth',
    subtopic: 'Characters',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Lady Macbeth calls on spirits to "unsex me here." This shows:',
    correctAnswer: 'She rejects feminine weakness to pursue power',
    wrongAnswers: ['She wants to become a man literally', 'She\'s confused about her identity', 'It\'s a mistranslation'],
    explanation: 'Lady Macbeth associates femininity with compassion and weakness. To murder Duncan, she must become "un-woman" - cruel and cold. This was radical! Shakespeare shows how unnatural ambition corrupts even gender identity.',
    hint: 'What qualities did Elizabethans associate with women?',
    tags: ['macbeth', 'lady-macbeth', 'gender'],
    yearGroup: [10, 11]
  },
];

// ============================================
// LITERATURE - 19TH CENTURY NOVEL
// ============================================

export const gcseEnglishNovel: Question[] = [
  {
    id: 'eng-gcse-exp2-nov-001',
    subject: 'english',
    topic: 'A Christmas Carol',
    subtopic: 'Structure',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why did Dickens structure A Christmas Carol as "staves" instead of chapters?',
    correctAnswer: 'A stave is a verse of a song, reinforcing the carol/music theme',
    wrongAnswers: ['He made a spelling mistake', 'Stave is Victorian for chapter', 'He was being pretentious'],
    explanation: 'Dickens was clever! "Carol" = a song, "stave" = musical verse. The five staves mirror a musical composition. Scrooge\'s transformation is like a song building to its finale. The form matches the content!',
    hint: 'What does the title tell us?',
    tags: ['christmas-carol', 'structure', 'form'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-nov-002',
    subject: 'english',
    topic: 'A Christmas Carol',
    subtopic: 'Social Context',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Dickens wrote A Christmas Carol partly to criticize the Poor Laws and treatment of the poor.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! The 1834 Poor Law forced poor people into workhouses with terrible conditions. Scrooge\'s "Are there no prisons? No workhouses?" echoes real attitudes. Dickens used fiction to change hearts and minds about poverty.',
    tags: ['christmas-carol', 'context', 'social'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-nov-003',
    subject: 'english',
    topic: 'Jekyll and Hyde',
    subtopic: 'Themes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Jekyll and Hyde explores the Victorian concept of:',
    correctAnswer: 'Duality - the battle between respectable and primitive selves',
    wrongAnswers: ['Medical school dropout rates', 'London property prices', 'Weather patterns'],
    explanation: 'Victorian gentlemen had to appear perfect: controlled, rational, moral. But Stevenson suggests everyone has a "Hyde" - their repressed desires and violence. The novella asks: what if you could separate them?',
    hint: 'Think about what Jekyll gains by becoming Hyde',
    tags: ['jekyll-hyde', 'duality', 'themes'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-nov-004',
    subject: 'english',
    topic: 'Jekyll and Hyde',
    subtopic: 'Setting',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Hyde\'s door is described as blistered and neglected, while Jekyll\'s main entrance is grand. This contrast represents:',
    correctAnswer: 'The hidden, shameful side vs. the respectable public face',
    wrongAnswers: ['Poor maintenance', 'Different architectural styles', 'Jekyll needs a new builder'],
    explanation: 'The building IS Jekyll! Grand front = his public reputation. Shabby back door = where Hyde emerges. Victorian architecture mirrors Victorian psychology - everyone has a back door they hide.',
    hint: 'The house represents something about its owner',
    tags: ['jekyll-hyde', 'setting', 'symbolism'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-nov-005',
    subject: 'english',
    topic: 'An Inspector Calls',
    subtopic: 'Structure',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'An Inspector Calls follows the three unities of classical drama. This means:',
    correctAnswer: 'One setting, continuous time, single plot',
    wrongAnswers: ['Three acts with intervals', 'Three main characters', 'Three costume changes'],
    explanation: 'The whole play happens in one room, in real-time, following one plot thread. This creates intense claustrophobia - no escape! The Birlings can\'t leave or change subject. Every revelation builds pressure. Genius staging!',
    hint: 'Think about place, time, and action',
    tags: ['inspector-calls', 'structure', 'drama'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-nov-006',
    subject: 'english',
    topic: 'An Inspector Calls',
    subtopic: 'Politics',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Priestley was a socialist. What message does the Inspector deliver?',
    correctAnswer: 'We are all responsible for each other in society',
    wrongAnswers: ['The rich are always correct', 'Mind your own business', 'Police are always right'],
    explanation: '"We are members of one body" - the Inspector\'s final speech is Priestley\'s manifesto! Written in 1945, set in 1912, it argues for social responsibility. The audience knows two World Wars follow - Priestley warns: learn or repeat history.',
    hint: 'Think about Priestley\'s political beliefs',
    tags: ['inspector-calls', 'socialism', 'themes'],
    yearGroup: [10, 11]
  },
];

// ============================================
// LITERATURE - POETRY
// ============================================

export const gcseEnglishPoetry: Question[] = [
  {
    id: 'eng-gcse-exp2-poet-001',
    subject: 'english',
    topic: 'Power and Conflict Poetry',
    subtopic: 'Ozymandias',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In Ozymandias, the "shattered visage" with its "sneer of cold command" suggests:',
    correctAnswer: 'The king was cruel and arrogant, but even his power crumbled',
    wrongAnswers: ['He had a cold', 'The sculptor was bad at faces', 'Ancient people were ugly'],
    explanation: 'Shelley\'s ultimate power flex! Ozymandias thought he was the greatest king ever - "Look on my works, ye mighty, and despair!" But now? Just broken stone in empty desert. Power is temporary. Art (the poem) outlasts empires.',
    hint: 'What contrast is created between past and present?',
    tags: ['poetry', 'ozymandias', 'power'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-poet-002',
    subject: 'english',
    topic: 'Power and Conflict Poetry',
    subtopic: 'London',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match Blake\'s images to what they criticize:',
    correctAnswer: ['Chimney sweeper → Child labor exploitation', 'Church "blackening" → Religious hypocrisy', 'Soldier\'s blood on palace → War and royal indifference', 'Marriage hearse → Disease from prostitution'],
    wrongAnswers: [],
    explanation: 'Blake was ANGRY! Every image attacks corruption: children forced up chimneys, church ignoring suffering, soldiers dying for royalty\'s wars, marriage becoming death sentence via disease. London\'s streets reveal social rot.',
    hint: 'Blake was a radical critic of 18th-century society',
    tags: ['poetry', 'london', 'social-criticism'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-poet-003',
    subject: 'english',
    topic: 'Power and Conflict Poetry',
    subtopic: 'Exposure',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In Wilfred Owen\'s Exposure, the repeated line "But nothing happens" creates:',
    correctAnswer: 'A sense of futile waiting and psychological torment',
    wrongAnswers: ['Boredom (the poem is repetitive)', 'Hope that the war will end', 'Excitement about what\'s coming'],
    explanation: 'Owen shows war isn\'t just battles - it\'s endless, deadly waiting. Soldiers freeze, suffer, die... for nothing. "But nothing happens" becomes terrifying. They\'re slowly being destroyed by weather, not fighting. That\'s the cruel irony.',
    hint: 'What\'s worse: action or waiting?',
    tags: ['poetry', 'exposure', 'war'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-poet-004',
    subject: 'english',
    topic: 'Power and Conflict Poetry',
    subtopic: 'Remains',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'In "Remains," the soldier\'s PTSD is shown through repetitive, obsessive language like "probably armed, possibly not."',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! "Probably armed, possibly not" haunts the poem - he can\'t stop replaying the doubt. Did he kill an innocent? The memory loops endlessly. This IS PTSD on the page. The casual language makes it more disturbing, not less.',
    tags: ['poetry', 'remains', 'ptsd'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-poet-005',
    subject: 'english',
    topic: 'Poetry Analysis',
    subtopic: 'Comparison Skills',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'When comparing poems, the strongest approach focuses on:',
    correctAnswer: 'How both poems explore the same theme differently',
    wrongAnswers: ['Which poem you like more', 'Biographical details of poets', 'Counting syllables in each'],
    explanation: 'Comparison gold: "Both explore power, but while Ozymandias shows its DECAY, My Last Duchess shows its ABUSE." Link themes, then analyze different approaches. Don\'t just describe one then the other - weave them together!',
    hint: 'Examiners want analysis, not description',
    tags: ['poetry', 'comparison', 'exam-skills'],
    yearGroup: [10, 11]
  },
];

// ============================================
// WRITING SKILLS
// ============================================

export const gcseEnglishWriting: Question[] = [
  {
    id: 'eng-gcse-exp2-writ-001',
    subject: 'english',
    topic: 'Descriptive Writing',
    subtopic: 'Sensory Details',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which sentence uses the BEST sensory details?',
    correctAnswer: 'The coffee steamed, bitter and rich, warming her frozen fingers through the ceramic',
    wrongAnswers: ['The coffee was nice and hot', 'She drank her coffee', 'The good coffee was in her hands'],
    explanation: 'Stack those senses! "Steamed" = sight, "bitter and rich" = taste/smell, "warming" = touch, "frozen fingers" = temperature contrast, "ceramic" = texture. Paint with words! The boring version tells; the good version SHOWS.',
    hint: 'How many senses can you identify?',
    tags: ['writing', 'description', 'senses'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-writ-002',
    subject: 'english',
    topic: 'Persuasive Writing',
    subtopic: 'Emotive Language',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which version is most persuasively emotive?',
    correctAnswer: 'Innocent children are being abandoned to suffer alone',
    wrongAnswers: ['Some children don\'t have enough help', 'Child poverty exists', 'Kids need more support'],
    explanation: '"Innocent" = sympathy trigger. "Abandoned" = deliberate neglect (blame!). "Suffer alone" = isolation and pain. Emotive language makes readers FEEL something. Don\'t just inform - provoke emotion, then offer your solution!',
    hint: 'Which words carry emotional weight?',
    tags: ['writing', 'persuasion', 'emotive'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-writ-003',
    subject: 'english',
    topic: 'Argumentative Writing',
    subtopic: 'Counter-Arguments',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Including counter-arguments makes your writing WEAKER because you\'re admitting the other side has points.',
    correctAnswer: 'False',
    wrongAnswers: [],
    explanation: 'False! Counter-arguments make you STRONGER. "Some argue X, but actually Y" shows you\'ve considered both sides and still concluded your way. It\'s intellectual confidence. Examiners love it! Just don\'t leave the counter unanswered.',
    tags: ['writing', 'argument', 'counter-argument'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-writ-004',
    subject: 'english',
    topic: 'Writing',
    subtopic: 'Paragraphing',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'You should start a new paragraph when:',
    correctAnswer: 'All of these',
    wrongAnswers: ['Changing topic', 'Changing time or place', 'Changing speaker in dialogue'],
    explanation: 'TiPTOP! Time, Place, Topic, Person. Any change = new paragraph. One-sentence paragraphs can create emphasis. But avoid the "wall of text" - it\'s visually exhausting and loses marks. White space is your friend!',
    hint: 'Think about what a paragraph represents',
    tags: ['writing', 'paragraphs', 'structure'],
    yearGroup: [10, 11]
  },
  {
    id: 'eng-gcse-exp2-writ-005',
    subject: 'english',
    topic: 'Writing',
    subtopic: 'Punctuation',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each punctuation mark to its sophisticated use:',
    correctAnswer: ['Semicolon → Links related but independent clauses', 'Colon → Introduces a list or explanation', 'Dash → Creates dramatic pause or aside', 'Ellipsis → Shows trailing off or tension'],
    wrongAnswers: [],
    explanation: 'Level up your punctuation! Commas are basic; semicolons show sophistication. Colons announce what follows. Dashes add drama - like this! Ellipsis creates mystery... Varied punctuation = higher marks. Use them deliberately.',
    hint: 'Each has a specific grammatical purpose',
    tags: ['writing', 'punctuation', 'accuracy'],
    yearGroup: [10, 11]
  },
];

// ============================================
// TERMS
// ============================================

export const gcseEnglishTermsExpanded: TermDefinition[] = [
  {
    id: 'eng-gcse-exp2-term-001',
    subject: 'english',
    difficulty: 'gcse',
    term: 'Enjambment',
    definition: 'A line of poetry that continues into the next line without punctuation or pause',
    example: '"I wandered lonely as a cloud / That floats on high o\'er vales and hills" - the sentence flows across the line break.',
    tags: ['poetry', 'form', 'structure']
  },
  {
    id: 'eng-gcse-exp2-term-002',
    subject: 'english',
    difficulty: 'gcse',
    term: 'Caesura',
    definition: 'A pause in the middle of a line of poetry, often created by punctuation',
    example: '"To be, or not to be" - the comma creates a caesura, forcing the reader to pause.',
    tags: ['poetry', 'form', 'rhythm']
  },
  {
    id: 'eng-gcse-exp2-term-003',
    subject: 'english',
    difficulty: 'gcse',
    term: 'Volta',
    definition: 'A turning point or shift in thought/tone in a poem, especially in sonnets',
    example: 'In sonnets, the volta often occurs at line 9 (Petrarchan) or the final couplet (Shakespearean).',
    tags: ['poetry', 'structure', 'sonnet']
  },
  {
    id: 'eng-gcse-exp2-term-004',
    subject: 'english',
    difficulty: 'gcse',
    term: 'Dramatic Irony',
    definition: 'When the audience knows something that characters in the story do not',
    example: 'In Romeo and Juliet, we know Juliet is alive, but Romeo doesn\'t - creating tragic tension.',
    tags: ['drama', 'irony', 'effect']
  },
  {
    id: 'eng-gcse-exp2-term-005',
    subject: 'english',
    difficulty: 'gcse',
    term: 'Hamartia',
    definition: 'A tragic hero\'s fatal flaw that leads to their downfall',
    example: 'Macbeth\'s hamartia is his "vaulting ambition" - it drives him to murder and ultimately destruction.',
    tags: ['tragedy', 'character', 'literature']
  },
  {
    id: 'eng-gcse-exp2-term-006',
    subject: 'english',
    difficulty: 'gcse',
    term: 'Catharsis',
    definition: 'The emotional release or purification experienced by the audience in tragedy',
    example: 'Watching Macbeth\'s downfall provides catharsis - we feel pity and fear, then relief that order is restored.',
    tags: ['tragedy', 'audience', 'effect']
  },
  {
    id: 'eng-gcse-exp2-term-007',
    subject: 'english',
    difficulty: 'gcse',
    term: 'Motif',
    definition: 'A recurring element, image, or idea that reinforces themes throughout a text',
    example: 'Blood is a motif in Macbeth - it appears constantly, representing guilt and violence.',
    tags: ['literature', 'themes', 'analysis']
  },
  {
    id: 'eng-gcse-exp2-term-008',
    subject: 'english',
    difficulty: 'gcse',
    term: 'Bildungsroman',
    definition: 'A coming-of-age novel focusing on the psychological and moral development of a protagonist',
    example: 'Jane Eyre and Great Expectations are classic bildungsromans, following their protagonists from childhood to maturity.',
    tags: ['novel', 'genre', 'literature']
  },
  {
    id: 'eng-gcse-exp2-term-009',
    subject: 'english',
    difficulty: 'gcse',
    term: 'Free Indirect Discourse',
    definition: 'A narrative technique blending the character\'s thoughts with the narrator\'s voice',
    example: 'In Jane Austen: "She was sure he would come back." - is this Jane\'s thought or the narrator\'s observation? Both!',
    tags: ['narrative', 'voice', 'technique']
  },
  {
    id: 'eng-gcse-exp2-term-010',
    subject: 'english',
    difficulty: 'gcse',
    term: 'Unreliable Narrator',
    definition: 'A narrator whose credibility is compromised, making readers question the truth of events',
    example: 'In Jekyll and Hyde, we only piece together truth through multiple (limited) perspectives.',
    tags: ['narrative', 'voice', 'technique']
  },
];

// Combined exports
export const gcseEnglishExpandedNew = [
  ...gcseEnglishLanguage1,
  ...gcseEnglishLanguage2,
  ...gcseEnglishShakespeare,
  ...gcseEnglishNovel,
  ...gcseEnglishPoetry,
  ...gcseEnglishWriting,
];
