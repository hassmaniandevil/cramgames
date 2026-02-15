/**
 * KS3 English Expanded Question Bank
 * Fun-first gamified questions for younger students
 */

import { Question, TermDefinition } from '../types';

// ============================================
// GRAMMAR & PUNCTUATION
// ============================================

export const ks3EnglishGrammar: Question[] = [
  {
    id: 'eng-ks3-exp-gram-001',
    subject: 'english',
    topic: 'Grammar',
    subtopic: 'Parts of Speech',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In "The lazy dog slept," what part of speech is "lazy"?',
    correctAnswer: 'Adjective (describes the noun)',
    wrongAnswers: ['Noun', 'Verb', 'Adverb'],
    explanation: 'Adjectives describe nouns. "Lazy" tells us about the dog. How do you spot an adjective? It usually comes before a noun and answers "what kind?"',
    hint: 'What kind of dog is it?',
    tags: ['grammar', 'adjectives', 'parts of speech'],
    yearGroup: [7, 8]
  },
  {
    id: 'eng-ks3-exp-gram-002',
    subject: 'english',
    topic: 'Grammar',
    subtopic: 'Parts of Speech',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In "She ran quickly," what part of speech is "quickly"?',
    correctAnswer: 'Adverb (describes how she ran)',
    wrongAnswers: ['Adjective', 'Noun', 'Pronoun'],
    explanation: 'Adverbs modify verbs, adjectives, or other adverbs. Many end in "-ly." "Quickly" tells us HOW she ran. Adjectives describe nouns, adverbs describe actions!',
    hint: 'HOW did she run?',
    tags: ['grammar', 'adverbs', 'parts of speech'],
    yearGroup: [7, 8]
  },
  {
    id: 'eng-ks3-exp-gram-003',
    subject: 'english',
    topic: 'Grammar',
    subtopic: 'Sentences',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which sentence is a compound sentence?',
    correctAnswer: 'I wanted pizza, but we ordered burgers.',
    wrongAnswers: ['I wanted pizza.', 'The pizza that I wanted was sold out.', 'I wanted pizza because I was hungry.'],
    explanation: 'Compound = two independent clauses joined by FANBOYS (for, and, nor, but, or, yet, so). Both parts could be sentences on their own!',
    hint: 'Look for two complete sentences joined by a conjunction',
    tags: ['grammar', 'sentences', 'compound'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'eng-ks3-exp-gram-004',
    subject: 'english',
    topic: 'Grammar',
    subtopic: 'Tenses',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: '"I have eaten breakfast" is which tense?',
    correctAnswer: 'Present perfect',
    wrongAnswers: ['Simple past', 'Present continuous', 'Future'],
    explanation: 'Present perfect uses "have/has + past participle" to connect past to present. "I have eaten" means eating happened before now but is relevant now. Still full!',
    hint: 'Have/has + past participle = what tense?',
    tags: ['grammar', 'tenses', 'present perfect'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'eng-ks3-exp-gram-005',
    subject: 'english',
    topic: 'Grammar',
    subtopic: 'Punctuation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'When do you use a semicolon?',
    correctAnswer: 'To join two related independent clauses',
    wrongAnswers: ['Before every "and"', 'Instead of a full stop always', 'Only in lists'],
    explanation: 'Semicolons join closely related sentences: "I love rain; it makes everything smell fresh." Both parts are complete sentences but deeply connected.',
    hint: 'It\'s like a full stop and comma had a baby',
    tags: ['grammar', 'punctuation', 'semicolon'],
    yearGroup: [8, 9]
  },
  {
    id: 'eng-ks3-exp-gram-006',
    subject: 'english',
    topic: 'Grammar',
    subtopic: 'Punctuation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: '"Let\'s eat Grandma" vs "Let\'s eat, Grandma" - what\'s the difference?',
    correctAnswer: 'The comma saves Grandma\'s life! It shows you\'re speaking TO her',
    wrongAnswers: ['No difference', 'The first is correct', 'Commas don\'t matter in English'],
    explanation: 'Without the comma, you\'re suggesting eating Grandma! The comma shows direct address - you\'re talking TO Grandma. Punctuation literally saves lives.',
    hint: 'Read both sentences out loud - what are you actually saying?',
    tags: ['grammar', 'punctuation', 'commas'],
    yearGroup: [7, 8]
  },

  // VOCABULARY
  {
    id: 'eng-ks3-exp-vocab-001',
    subject: 'english',
    topic: 'Vocabulary',
    subtopic: 'Word Roots',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'The prefix "anti-" means...',
    correctAnswer: 'Against or opposite',
    wrongAnswers: ['Before', 'After', 'With'],
    explanation: 'Anti- means against: antibacterial (against bacteria), anticlockwise (opposite to clockwise), antisocial (against social norms). Knowing prefixes = vocabulary superpower!',
    hint: 'Think of "antibiotics" - they fight AGAINST bacteria',
    tags: ['vocabulary', 'prefixes', 'word roots'],
    yearGroup: [7, 8]
  },
  {
    id: 'eng-ks3-exp-vocab-002',
    subject: 'english',
    topic: 'Vocabulary',
    subtopic: 'Word Roots',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match each prefix to its meaning:',
    correctAnswer: ['pre- → before', 'post- → after', 'sub- → under', 'super- → above/beyond'],
    wrongAnswers: [],
    explanation: 'Pre-historic (before history), post-war (after war), submarine (under the sea), superhuman (beyond human). Latin roots unlock thousands of English words!',
    hint: 'Think of words you know that start with each prefix',
    tags: ['vocabulary', 'prefixes', 'word roots'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'eng-ks3-exp-vocab-003',
    subject: 'english',
    topic: 'Vocabulary',
    subtopic: 'Synonyms',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which word is the best synonym for "happy" in formal writing?',
    correctAnswer: 'Elated',
    wrongAnswers: ['Chuffed', 'Stoked', 'Buzzing'],
    explanation: '"Elated" is formal and sophisticated. "Chuffed," "stoked," and "buzzing" are slang/informal. Match your vocabulary to your audience!',
    hint: 'Which word would you use in an essay?',
    tags: ['vocabulary', 'synonyms', 'register'],
    yearGroup: [7, 8, 9]
  },

  // READING COMPREHENSION
  {
    id: 'eng-ks3-exp-read-001',
    subject: 'english',
    topic: 'Reading',
    subtopic: 'Inference',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: '"Sarah slammed her book shut and stormed out of the library." How is Sarah feeling?',
    correctAnswer: 'Frustrated or angry',
    wrongAnswers: ['Happy', 'Tired', 'Confused'],
    explanation: 'The author doesn\'t say "Sarah was angry" but shows it through actions: "slammed" and "stormed" are aggressive actions. This is inference - reading between the lines!',
    hint: 'Look at the verbs - are they gentle or aggressive?',
    tags: ['reading', 'inference', 'comprehension'],
    yearGroup: [7, 8]
  },
  {
    id: 'eng-ks3-exp-read-002',
    subject: 'english',
    topic: 'Reading',
    subtopic: 'Language Analysis',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: '"The wind howled like a wounded animal." This is an example of...',
    correctAnswer: 'Simile (comparing using "like" or "as")',
    wrongAnswers: ['Metaphor', 'Personification', 'Alliteration'],
    explanation: 'Similes use "like" or "as" to compare things: wind is LIKE a wounded animal. Metaphors say something IS something else. Both create vivid images!',
    hint: 'What word signals a comparison?',
    tags: ['reading', 'language', 'simile'],
    yearGroup: [7, 8]
  },
  {
    id: 'eng-ks3-exp-read-003',
    subject: 'english',
    topic: 'Reading',
    subtopic: 'Language Analysis',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: '"The angry sea threw ships against the rocks." The technique used here is...',
    correctAnswer: 'Personification (giving human qualities to non-human things)',
    wrongAnswers: ['Simile', 'Onomatopoeia', 'Hyperbole'],
    explanation: 'The sea can\'t actually be "angry" or "throw" things - these are human actions. Personification makes non-human things come alive!',
    hint: 'Can the sea really feel emotions or throw things on purpose?',
    tags: ['reading', 'language', 'personification'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'eng-ks3-exp-read-004',
    subject: 'english',
    topic: 'Reading',
    subtopic: 'Structure',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'A story starts with the ending, then goes back to show how we got there. This is called...',
    correctAnswer: 'In medias res / flashback structure',
    wrongAnswers: ['Chronological order', 'Foreshadowing', 'Cliff-hanger'],
    explanation: '"In medias res" means "in the middle of things." Starting with action or the ending hooks readers, then flashbacks fill in the story. Very popular in films!',
    hint: 'Many films start with an exciting scene, then show "24 hours earlier..."',
    tags: ['reading', 'structure', 'narrative'],
    yearGroup: [8, 9]
  },

  // WRITING
  {
    id: 'eng-ks3-exp-write-001',
    subject: 'english',
    topic: 'Writing',
    subtopic: 'Paragraphs',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'When should you start a new paragraph?',
    correctAnswer: 'TiPToP: Time, Place, Topic, or Person changes',
    wrongAnswers: ['Every 3 sentences', 'Only at the start and end', 'Whenever you feel like it'],
    explanation: 'TiPToP helps you remember: new Time (next day), new Place (different room), new Topic (different idea), new Person (someone else speaks). Paragraphs organise your writing!',
    hint: 'What\'s the TiPToP rule?',
    tags: ['writing', 'paragraphs', 'structure'],
    yearGroup: [7, 8]
  },
  {
    id: 'eng-ks3-exp-write-002',
    subject: 'english',
    topic: 'Writing',
    subtopic: 'Openings',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which opening technique is "It was a dark and stormy night..." using?',
    correctAnswer: 'Pathetic fallacy (weather reflecting mood)',
    wrongAnswers: ['Direct address', 'In medias res', 'A rhetorical question'],
    explanation: 'Pathetic fallacy uses weather/environment to mirror emotions or create atmosphere. Dark + stormy = something bad is coming! Classic but effective.',
    hint: 'What does the weather tell us about the mood?',
    tags: ['writing', 'openings', 'pathetic fallacy'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'eng-ks3-exp-write-003',
    subject: 'english',
    topic: 'Writing',
    subtopic: 'Descriptive',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which sentence uses "show don\'t tell"?',
    correctAnswer: '"Her hands trembled as she opened the letter"',
    wrongAnswers: ['"She was nervous"', '"She felt scared"', '"She was anxious about the letter"'],
    explanation: '"Show don\'t tell" means describing actions/details that reveal emotions, not just stating them. Trembling hands SHOW nervousness without saying the word.',
    hint: 'Which one makes you figure out the emotion yourself?',
    tags: ['writing', 'descriptive', 'technique'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'eng-ks3-exp-write-004',
    subject: 'english',
    topic: 'Writing',
    subtopic: 'Persuasive',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: '"Don\'t you think students deserve longer breaks?" This is using...',
    correctAnswer: 'A rhetorical question',
    wrongAnswers: ['A command', 'A statement', 'An exclamation'],
    explanation: 'Rhetorical questions don\'t expect an answer - they make the reader agree with your point. "Don\'t you think...?" nudges them toward "yes!"',
    hint: 'Does this question actually want an answer?',
    tags: ['writing', 'persuasive', 'rhetorical question'],
    yearGroup: [7, 8, 9]
  },

  // SHAKESPEARE & LITERATURE
  {
    id: 'eng-ks3-exp-lit-001',
    subject: 'english',
    topic: 'Literature',
    subtopic: 'Shakespeare',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Shakespeare invented many words we still use. Which did he NOT create?',
    correctAnswer: 'Hello',
    wrongAnswers: ['Eyeball', 'Assassination', 'Lonely'],
    explanation: 'Shakespeare invented "eyeball," "assassination," "lonely," and about 1,700 other words! "Hello" came later (19th century). When words didn\'t exist, he made them up.',
    hint: 'Which word sounds the most modern?',
    tags: ['literature', 'Shakespeare', 'vocabulary'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'eng-ks3-exp-lit-002',
    subject: 'english',
    topic: 'Literature',
    subtopic: 'Shakespeare',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In Shakespeare\'s time, who played female roles?',
    correctAnswer: 'Young men/boys (women couldn\'t perform)',
    wrongAnswers: ['Professional actresses', 'The playwright himself', 'Puppets'],
    explanation: 'Women weren\'t allowed on stage, so young men with higher voices played female characters. This adds extra comedy to plays where women disguise as men!',
    hint: 'Think about social rules in the 1600s',
    tags: ['literature', 'Shakespeare', 'context'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'eng-ks3-exp-lit-003',
    subject: 'english',
    topic: 'Literature',
    subtopic: 'Poetry',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What is a sonnet?',
    correctAnswer: '14 lines, usually about love, with specific rhyme scheme',
    wrongAnswers: ['Any short poem', 'A poem without rhyme', 'A poem about death'],
    explanation: 'Sonnets have exactly 14 lines. Shakespeare\'s sonnets have rhyme scheme ABAB CDCD EFEF GG. Often about love, time, beauty. Very structured but emotionally powerful!',
    hint: 'How many lines?',
    tags: ['literature', 'poetry', 'forms'],
    yearGroup: [8, 9]
  },

  // SPEAKING & LISTENING
  {
    id: 'eng-ks3-exp-speak-001',
    subject: 'english',
    topic: 'Speaking',
    subtopic: 'Presentation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What\'s the "rule of three" in speeches?',
    correctAnswer: 'Grouping ideas in threes for impact (e.g., "education, education, education")',
    wrongAnswers: ['Speaking for exactly 3 minutes', 'Using only 3 slides', 'Asking 3 questions'],
    explanation: 'Three is memorable and satisfying: "Life, liberty, and the pursuit of happiness." "Blood, sweat, and tears." Our brains love patterns of three!',
    hint: 'Think of famous speech quotes - notice a pattern?',
    tags: ['speaking', 'rhetoric', 'techniques'],
    yearGroup: [7, 8, 9]
  },
];

// ============================================
// KS3 ENGLISH TERMS
// ============================================

export const ks3EnglishTermsExpanded: TermDefinition[] = [
  {
    id: 'eng-ks3-term-exp-001',
    subject: 'english',
    term: 'Simile',
    definition: 'Comparing two things using "like" or "as" - "brave as a lion," "runs like the wind"',
    difficulty: 'ks3',
    relatedTerms: ['metaphor', 'comparison', 'imagery']
  },
  {
    id: 'eng-ks3-term-exp-002',
    subject: 'english',
    term: 'Metaphor',
    definition: 'Saying something IS something else (not like it) - "time is money," "life is a journey"',
    difficulty: 'ks3',
    relatedTerms: ['simile', 'comparison', 'imagery']
  },
  {
    id: 'eng-ks3-term-exp-003',
    subject: 'english',
    term: 'Personification',
    definition: 'Giving human qualities to non-human things - "the sun smiled down"',
    difficulty: 'ks3',
    relatedTerms: ['imagery', 'figurative language', 'anthropomorphism']
  },
  {
    id: 'eng-ks3-term-exp-004',
    subject: 'english',
    term: 'Alliteration',
    definition: 'Repeating the same consonant sound at the start of words - "Peter Piper picked..."',
    difficulty: 'ks3',
    relatedTerms: ['assonance', 'sound devices', 'poetry']
  },
  {
    id: 'eng-ks3-term-exp-005',
    subject: 'english',
    term: 'Onomatopoeia',
    definition: 'Words that sound like what they mean - "buzz," "crash," "sizzle"',
    difficulty: 'ks3',
    relatedTerms: ['sound devices', 'imagery', 'poetry']
  },
  {
    id: 'eng-ks3-term-exp-006',
    subject: 'english',
    term: 'Hyperbole',
    definition: 'Extreme exaggeration for effect - "I\'ve told you a million times!"',
    difficulty: 'ks3',
    relatedTerms: ['exaggeration', 'figurative language', 'emphasis']
  },
  {
    id: 'eng-ks3-term-exp-007',
    subject: 'english',
    term: 'Pathetic fallacy',
    definition: 'Using weather/nature to reflect mood - storms for anger, sunshine for happiness',
    difficulty: 'ks3',
    relatedTerms: ['atmosphere', 'setting', 'mood']
  },
  {
    id: 'eng-ks3-term-exp-008',
    subject: 'english',
    term: 'Foreshadowing',
    definition: 'Hints about what will happen later in the story - building suspense',
    difficulty: 'ks3',
    relatedTerms: ['plot', 'tension', 'narrative']
  },
];

// Combined export
export const ks3EnglishExpanded = [...ks3EnglishGrammar];
