// English Question Generator - Grammar, Vocabulary, Literature
import { Question } from '../index';

// ==========================================
// SPELLING & VOCABULARY (Years 1-11)
// ==========================================

function generateSpellingQuestions(): Question[] {
  const questions: Question[] = [];

  // Commonly misspelled words by year group
  const spellingWords = {
    1: [
      { word: 'because', wrong: ['becuse', 'becuase', 'becouse'] },
      { word: 'friend', wrong: ['freind', 'frend', 'frined'] },
      { word: 'said', wrong: ['sed', 'sayed', 'sayd'] },
      { word: 'people', wrong: ['peaple', 'poeple', 'peopel'] },
      { word: 'their', wrong: ['thier', 'there', 'thair'] },
    ],
    2: [
      { word: 'beautiful', wrong: ['beautifull', 'beutiful', 'beautful'] },
      { word: 'different', wrong: ['diffrent', 'diferent', 'differant'] },
      { word: 'together', wrong: ['togather', 'togeather', 'togeter'] },
      { word: 'important', wrong: ['importent', 'importint', 'imortant'] },
      { word: 'surprise', wrong: ['suprise', 'surprize', 'suprize'] },
    ],
    3: [
      { word: 'accommodate', wrong: ['accomodate', 'acommodate', 'acomodate'] },
      { word: 'separate', wrong: ['seperate', 'seprate', 'seperite'] },
      { word: 'necessary', wrong: ['neccessary', 'necessery', 'neccesary'] },
      { word: 'definitely', wrong: ['definately', 'definatly', 'deffinitely'] },
      { word: 'occurrence', wrong: ['occurence', 'occurance', 'occurrance'] },
    ],
    4: [
      { word: 'rhythm', wrong: ['rythm', 'rythym', 'rhythym'] },
      { word: 'conscience', wrong: ['concience', 'consience', 'consciense'] },
      { word: 'receive', wrong: ['recieve', 'receve', 'receeve'] },
      { word: 'embarrass', wrong: ['embarass', 'embarras', 'embaress'] },
      { word: 'maintenance', wrong: ['maintainance', 'maintenence', 'maintanance'] },
    ],
    5: [
      { word: 'millennium', wrong: ['millenium', 'milenium', 'milennium'] },
      { word: 'harass', wrong: ['harrass', 'harras', 'haras'] },
      { word: 'liaison', wrong: ['liason', 'liasion', 'liaision'] },
      { word: 'privilege', wrong: ['priviledge', 'privelege', 'privlege'] },
      { word: 'questionnaire', wrong: ['questionaire', 'questionairre', 'questionnare'] },
    ],
    6: [
      { word: 'acquaintance', wrong: ['aquaintance', 'acquaintence', 'acquantance'] },
      { word: 'inoculate', wrong: ['innoculate', 'inocullate', 'innocculate'] },
      { word: 'supersede', wrong: ['supercede', 'superceed', 'superseed'] },
      { word: 'mischievous', wrong: ['mischievious', 'mischevious', 'mischeivous'] },
      { word: 'pronunciation', wrong: ['pronounciation', 'pronuciation', 'pronunciaton'] },
    ],
  };

  Object.entries(spellingWords).forEach(([year, words]) => {
    words.forEach((item, i) => {
      questions.push({
        id: `eng-spell-y${year}-${i}`,
        question: `Which is the correct spelling?`,
        correctAnswer: item.word,
        wrongAnswers: item.wrong,
        explanation: `The correct spelling is "${item.word}".`,
        subject: 'english',
        yearGroup: parseInt(year),
        topic: 'Spelling',
        difficulty: parseInt(year) <= 2 ? 'easy' : parseInt(year) <= 4 ? 'medium' : 'hard'
      });
    });
  });

  return questions;
}

// ==========================================
// GRAMMAR (Years 1-11)
// ==========================================

function generateGrammarQuestions(): Question[] {
  const questions: Question[] = [];

  // Parts of Speech (Years 1-4)
  const partsOfSpeech = [
    { word: 'quickly', pos: 'adverb', sentence: 'She ran quickly.', y: 3 },
    { word: 'beautiful', pos: 'adjective', sentence: 'The beautiful flower bloomed.', y: 2 },
    { word: 'jumped', pos: 'verb', sentence: 'The cat jumped.', y: 1 },
    { word: 'table', pos: 'noun', sentence: 'The table was wooden.', y: 1 },
    { word: 'she', pos: 'pronoun', sentence: 'She went home.', y: 2 },
    { word: 'under', pos: 'preposition', sentence: 'The cat sat under the table.', y: 3 },
    { word: 'and', pos: 'conjunction', sentence: 'Bread and butter.', y: 2 },
    { word: 'wow', pos: 'interjection', sentence: 'Wow! That\'s amazing!', y: 3 },
    { word: 'the', pos: 'determiner', sentence: 'The dog barked.', y: 4 },
    { word: 'carefully', pos: 'adverb', sentence: 'He carefully opened the box.', y: 3 },
    { word: 'enormous', pos: 'adjective', sentence: 'The enormous elephant walked.', y: 3 },
    { word: 'whispered', pos: 'verb', sentence: 'She whispered a secret.', y: 2 },
  ];

  partsOfSpeech.forEach((item, i) => {
    questions.push({
      id: `eng-pos-${i}`,
      question: `What part of speech is "${item.word}" in: "${item.sentence}"`,
      correctAnswer: item.pos.charAt(0).toUpperCase() + item.pos.slice(1),
      wrongAnswers: ['Noun', 'Verb', 'Adjective', 'Adverb'].filter(x => x.toLowerCase() !== item.pos).slice(0, 3),
      explanation: `"${item.word}" is a ${item.pos} because it describes ${item.pos === 'verb' ? 'an action' : item.pos === 'noun' ? 'a thing' : item.pos === 'adjective' ? 'a noun' : 'how something is done'}.`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Grammar',
      difficulty: 'easy'
    });
  });

  // Tenses (Years 3-7)
  const tenses = [
    { sentence: 'I walk to school.', tense: 'simple present', y: 3 },
    { sentence: 'I walked to school.', tense: 'simple past', y: 3 },
    { sentence: 'I will walk to school.', tense: 'simple future', y: 3 },
    { sentence: 'I am walking to school.', tense: 'present continuous', y: 4 },
    { sentence: 'I was walking to school.', tense: 'past continuous', y: 4 },
    { sentence: 'I have walked to school.', tense: 'present perfect', y: 5 },
    { sentence: 'I had walked to school.', tense: 'past perfect', y: 6 },
    { sentence: 'I will have walked to school.', tense: 'future perfect', y: 7 },
    { sentence: 'I have been walking.', tense: 'present perfect continuous', y: 7 },
  ];

  tenses.forEach((item, i) => {
    questions.push({
      id: `eng-tense-${i}`,
      question: `What tense is: "${item.sentence}"`,
      correctAnswer: item.tense.charAt(0).toUpperCase() + item.tense.slice(1),
      wrongAnswers: tenses.filter(t => t.tense !== item.tense).slice(0, 3).map(t => t.tense.charAt(0).toUpperCase() + t.tense.slice(1)),
      explanation: `"${item.sentence}" is in the ${item.tense} tense.`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Grammar',
      difficulty: item.y <= 4 ? 'easy' : 'medium'
    });
  });

  // Subject-Verb Agreement (Years 4-7)
  const svAgreement = [
    { correct: 'The dog runs fast.', incorrect: 'The dog run fast.', y: 4 },
    { correct: 'The dogs run fast.', incorrect: 'The dogs runs fast.', y: 4 },
    { correct: 'She has a book.', incorrect: 'She have a book.', y: 4 },
    { correct: 'They have books.', incorrect: 'They has books.', y: 4 },
    { correct: 'Neither he nor she wants to go.', incorrect: 'Neither he nor she want to go.', y: 7 },
    { correct: 'Each of the boys has a pencil.', incorrect: 'Each of the boys have a pencil.', y: 6 },
    { correct: 'The team is winning.', incorrect: 'The team are winning.', y: 5 },
    { correct: 'Mathematics is my favourite subject.', incorrect: 'Mathematics are my favourite subject.', y: 5 },
  ];

  svAgreement.forEach((item, i) => {
    questions.push({
      id: `eng-sva-${i}`,
      question: `Which sentence is grammatically correct?`,
      correctAnswer: item.correct,
      wrongAnswers: [item.incorrect, item.incorrect.replace('.', '!'), item.incorrect.replace(/\b\w/, c => c.toLowerCase())].slice(0, 3),
      explanation: `"${item.correct}" is correct. The subject and verb must agree in number.`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Grammar',
      difficulty: item.y <= 5 ? 'easy' : 'medium'
    });
  });

  // Punctuation (Years 2-8)
  const punctuationQs = [
    { q: 'What punctuation ends a statement?', a: 'Full stop (.)', y: 1 },
    { q: 'What punctuation ends a question?', a: 'Question mark (?)', y: 1 },
    { q: 'What punctuation shows strong emotion?', a: 'Exclamation mark (!)', y: 2 },
    { q: 'What punctuation is used to list items?', a: 'Comma (,)', y: 2 },
    { q: 'What punctuation shows ownership?', a: 'Apostrophe (\')', y: 3 },
    { q: 'What punctuation introduces a list?', a: 'Colon (:)', y: 5 },
    { q: 'What punctuation links related clauses?', a: 'Semicolon (;)', y: 6 },
    { q: 'What punctuation shows speech?', a: 'Speech marks/Inverted commas (" ")', y: 3 },
    { q: 'What punctuation adds extra information?', a: 'Parentheses/Brackets ()', y: 5 },
    { q: 'What punctuation shows a pause or addition?', a: 'Dash (—) or hyphen (-)', y: 6 },
    { q: 'When do we use an apostrophe for contraction?', a: 'To show missing letters (e.g., don\'t = do not)', y: 4 },
  ];

  punctuationQs.forEach((item, i) => {
    questions.push({
      id: `eng-punct-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['Comma (,)', 'Full stop (.)', 'Apostrophe (\')'].filter(x => x !== item.a).slice(0, 3),
      explanation: item.a,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Punctuation',
      difficulty: item.y <= 3 ? 'easy' : 'medium'
    });
  });

  // Sentence Types (Years 3-6)
  const sentenceTypes = [
    { sentence: 'The cat sat on the mat.', type: 'statement (declarative)', y: 3 },
    { sentence: 'Where are you going?', type: 'question (interrogative)', y: 3 },
    { sentence: 'Stop right there!', type: 'command (imperative)', y: 3 },
    { sentence: 'What a beautiful day!', type: 'exclamation (exclamatory)', y: 3 },
    { sentence: 'Although it was raining, we went outside.', type: 'complex sentence', y: 5 },
    { sentence: 'I like cats and I like dogs.', type: 'compound sentence', y: 4 },
    { sentence: 'The dog barked.', type: 'simple sentence', y: 3 },
  ];

  sentenceTypes.forEach((item, i) => {
    questions.push({
      id: `eng-senttype-${i}`,
      question: `What type of sentence is: "${item.sentence}"`,
      correctAnswer: item.type.charAt(0).toUpperCase() + item.type.slice(1),
      wrongAnswers: sentenceTypes.filter(s => s.type !== item.type).slice(0, 3).map(s => s.type.charAt(0).toUpperCase() + s.type.slice(1)),
      explanation: `"${item.sentence}" is a ${item.type}.`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Grammar',
      difficulty: 'easy'
    });
  });

  return questions;
}

// ==========================================
// VOCABULARY & WORD MEANINGS (Years 1-11)
// ==========================================

function generateVocabularyQuestions(): Question[] {
  const questions: Question[] = [];

  // Synonyms (Years 3-9)
  const synonymPairs = [
    { word: 'happy', synonym: 'joyful', wrong: ['sad', 'angry', 'tired'], y: 3 },
    { word: 'big', synonym: 'large', wrong: ['small', 'tiny', 'short'], y: 2 },
    { word: 'fast', synonym: 'quick', wrong: ['slow', 'lazy', 'late'], y: 2 },
    { word: 'clever', synonym: 'intelligent', wrong: ['stupid', 'slow', 'silly'], y: 4 },
    { word: 'beautiful', synonym: 'stunning', wrong: ['ugly', 'plain', 'dull'], y: 4 },
    { word: 'angry', synonym: 'furious', wrong: ['calm', 'happy', 'peaceful'], y: 4 },
    { word: 'tired', synonym: 'exhausted', wrong: ['energetic', 'awake', 'alert'], y: 5 },
    { word: 'afraid', synonym: 'terrified', wrong: ['brave', 'bold', 'confident'], y: 5 },
    { word: 'important', synonym: 'significant', wrong: ['trivial', 'minor', 'petty'], y: 6 },
    { word: 'brave', synonym: 'courageous', wrong: ['cowardly', 'timid', 'fearful'], y: 6 },
    { word: 'difficult', synonym: 'arduous', wrong: ['easy', 'simple', 'effortless'], y: 7 },
    { word: 'ancient', synonym: 'primeval', wrong: ['modern', 'new', 'recent'], y: 8 },
  ];

  synonymPairs.forEach((item, i) => {
    questions.push({
      id: `eng-syn-${i}`,
      question: `Which word is a synonym for "${item.word}"?`,
      correctAnswer: item.synonym,
      wrongAnswers: item.wrong,
      explanation: `"${item.synonym}" means the same as "${item.word}".`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Vocabulary',
      difficulty: item.y <= 4 ? 'easy' : 'medium'
    });
  });

  // Antonyms (Years 3-9)
  const antonymPairs = [
    { word: 'hot', antonym: 'cold', wrong: ['warm', 'burning', 'heated'], y: 2 },
    { word: 'light', antonym: 'dark', wrong: ['bright', 'sunny', 'clear'], y: 2 },
    { word: 'loud', antonym: 'quiet', wrong: ['noisy', 'deafening', 'booming'], y: 3 },
    { word: 'begin', antonym: 'end', wrong: ['start', 'commence', 'initiate'], y: 3 },
    { word: 'ancient', antonym: 'modern', wrong: ['old', 'historic', 'antique'], y: 5 },
    { word: 'generous', antonym: 'selfish', wrong: ['kind', 'giving', 'charitable'], y: 5 },
    { word: 'expand', antonym: 'contract', wrong: ['grow', 'increase', 'enlarge'], y: 6 },
    { word: 'permanent', antonym: 'temporary', wrong: ['lasting', 'enduring', 'eternal'], y: 7 },
  ];

  antonymPairs.forEach((item, i) => {
    questions.push({
      id: `eng-ant-${i}`,
      question: `Which word is an antonym (opposite) of "${item.word}"?`,
      correctAnswer: item.antonym,
      wrongAnswers: item.wrong,
      explanation: `"${item.antonym}" is the opposite of "${item.word}".`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Vocabulary',
      difficulty: item.y <= 4 ? 'easy' : 'medium'
    });
  });

  // Homophones (Years 3-7)
  const homophones = [
    { pair: ['their', 'there', 'they\'re'], sentence: '___ going to the park.', answer: 'They\'re', y: 4 },
    { pair: ['your', 'you\'re'], sentence: '___ going to be late.', answer: 'You\'re', y: 4 },
    { pair: ['to', 'too', 'two'], sentence: 'I want to go ___.', answer: 'too', y: 3 },
    { pair: ['its', 'it\'s'], sentence: '___ raining outside.', answer: 'It\'s', y: 5 },
    { pair: ['hear', 'here'], sentence: 'Come over ___.', answer: 'here', y: 3 },
    { pair: ['wear', 'where', 'were'], sentence: '___ are you going?', answer: 'Where', y: 4 },
    { pair: ['piece', 'peace'], sentence: 'Can I have a ___ of cake?', answer: 'piece', y: 4 },
    { pair: ['affect', 'effect'], sentence: 'The rain will ___ our plans.', answer: 'affect', y: 7 },
    { pair: ['accept', 'except'], sentence: 'Everyone came ___ Tom.', answer: 'except', y: 6 },
    { pair: ['stationary', 'stationery'], sentence: 'I need to buy some ___ for school.', answer: 'stationery', y: 6 },
  ];

  homophones.forEach((item, i) => {
    questions.push({
      id: `eng-homo-${i}`,
      question: `Complete: "${item.sentence}"`,
      correctAnswer: item.answer,
      wrongAnswers: item.pair.filter(p => p.toLowerCase() !== item.answer.toLowerCase()).slice(0, 3),
      explanation: `The correct word is "${item.answer}".`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Vocabulary',
      difficulty: item.y <= 4 ? 'easy' : 'medium'
    });
  });

  // Prefixes and Suffixes (Years 3-7)
  const prefixes = [
    { prefix: 'un-', meaning: 'not', examples: 'unhappy, unkind, unfair', y: 3 },
    { prefix: 're-', meaning: 'again', examples: 'redo, rewrite, replay', y: 3 },
    { prefix: 'pre-', meaning: 'before', examples: 'preview, predict, prepare', y: 4 },
    { prefix: 'dis-', meaning: 'not/opposite', examples: 'disagree, disappear, dislike', y: 4 },
    { prefix: 'mis-', meaning: 'wrongly', examples: 'mistake, misunderstand, mislead', y: 4 },
    { prefix: 'sub-', meaning: 'under', examples: 'submarine, subway, subtitle', y: 5 },
    { prefix: 'super-', meaning: 'above/beyond', examples: 'superhero, supernatural', y: 5 },
    { prefix: 'anti-', meaning: 'against', examples: 'antifreeze, antibody, antidote', y: 6 },
    { prefix: 'auto-', meaning: 'self', examples: 'automatic, autobiography', y: 6 },
  ];

  prefixes.forEach((item, i) => {
    questions.push({
      id: `eng-prefix-${i}`,
      question: `What does the prefix "${item.prefix}" mean?`,
      correctAnswer: item.meaning.charAt(0).toUpperCase() + item.meaning.slice(1),
      wrongAnswers: prefixes.filter(p => p.prefix !== item.prefix).slice(0, 3).map(p => p.meaning.charAt(0).toUpperCase() + p.meaning.slice(1)),
      explanation: `"${item.prefix}" means "${item.meaning}". Examples: ${item.examples}`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Vocabulary',
      difficulty: item.y <= 4 ? 'easy' : 'medium'
    });
  });

  const suffixes = [
    { suffix: '-ful', meaning: 'full of', examples: 'beautiful, hopeful, careful', y: 3 },
    { suffix: '-less', meaning: 'without', examples: 'hopeless, careless, fearless', y: 3 },
    { suffix: '-ness', meaning: 'state of being', examples: 'happiness, kindness, darkness', y: 4 },
    { suffix: '-ment', meaning: 'action/result', examples: 'enjoyment, movement, treatment', y: 4 },
    { suffix: '-ly', meaning: 'in a way', examples: 'quickly, slowly, happily', y: 3 },
    { suffix: '-able/-ible', meaning: 'can be done', examples: 'readable, visible, possible', y: 5 },
    { suffix: '-tion/-sion', meaning: 'act of', examples: 'action, decision, creation', y: 5 },
  ];

  suffixes.forEach((item, i) => {
    questions.push({
      id: `eng-suffix-${i}`,
      question: `What does the suffix "${item.suffix}" mean?`,
      correctAnswer: item.meaning.charAt(0).toUpperCase() + item.meaning.slice(1),
      wrongAnswers: suffixes.filter(s => s.suffix !== item.suffix).slice(0, 3).map(s => s.meaning.charAt(0).toUpperCase() + s.meaning.slice(1)),
      explanation: `"${item.suffix}" means "${item.meaning}". Examples: ${item.examples}`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Vocabulary',
      difficulty: item.y <= 4 ? 'easy' : 'medium'
    });
  });

  return questions;
}

// ==========================================
// LITERARY DEVICES (Years 5-13)
// ==========================================

function generateLiteraryDevicesQuestions(): Question[] {
  const questions: Question[] = [];

  const devices = [
    { device: 'simile', definition: 'A comparison using "like" or "as"', example: 'Her eyes were like stars.', y: 5 },
    { device: 'metaphor', definition: 'A direct comparison (saying something IS something else)', example: 'Time is money.', y: 5 },
    { device: 'personification', definition: 'Giving human qualities to non-human things', example: 'The wind whispered through the trees.', y: 5 },
    { device: 'alliteration', definition: 'Repetition of the same sound at the start of words', example: 'Peter Piper picked a peck.', y: 4 },
    { device: 'onomatopoeia', definition: 'Words that imitate sounds', example: 'Buzz, bang, crash, sizzle.', y: 4 },
    { device: 'hyperbole', definition: 'Extreme exaggeration for effect', example: 'I\'ve told you a million times!', y: 6 },
    { device: 'oxymoron', definition: 'Two contradictory words together', example: 'Deafening silence, living dead.', y: 7 },
    { device: 'pathetic fallacy', definition: 'Using weather to reflect mood', example: 'Dark storm clouds gathered as the villain appeared.', y: 8 },
    { device: 'irony', definition: 'Saying the opposite of what you mean, or an unexpected outcome', example: 'A fire station burns down.', y: 7 },
    { device: 'foreshadowing', definition: 'Hints about what will happen later', example: 'Little did she know, this would be her last day.', y: 8 },
    { device: 'symbolism', definition: 'Using objects to represent ideas', example: 'A dove represents peace.', y: 7 },
    { device: 'juxtaposition', definition: 'Placing contrasting ideas side by side', example: 'Light and darkness, rich and poor.', y: 9 },
    { device: 'assonance', definition: 'Repetition of vowel sounds', example: 'The rain in Spain falls mainly on the plain.', y: 8 },
    { device: 'sibilance', definition: 'Repetition of "s" sounds', example: 'The snake slithered silently.', y: 9 },
    { device: 'enjambment', definition: 'When a sentence continues across line breaks', example: 'Poetry where the sentence doesn\'t end with the line.', y: 9 },
    { device: 'caesura', definition: 'A pause in the middle of a line of poetry', example: 'To be, or not to be.', y: 10 },
  ];

  devices.forEach((item, i) => {
    // Definition questions
    questions.push({
      id: `eng-device-def-${i}`,
      question: `What is ${item.device}?`,
      correctAnswer: item.definition,
      wrongAnswers: devices.filter(d => d.device !== item.device).slice(0, 3).map(d => d.definition),
      explanation: `${item.device.charAt(0).toUpperCase() + item.device.slice(1)}: ${item.definition}. Example: ${item.example}`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Literary devices',
      difficulty: item.y <= 6 ? 'easy' : 'medium'
    });

    // Identification questions
    questions.push({
      id: `eng-device-id-${i}`,
      question: `"${item.example}" is an example of which literary device?`,
      correctAnswer: item.device.charAt(0).toUpperCase() + item.device.slice(1),
      wrongAnswers: devices.filter(d => d.device !== item.device).slice(0, 3).map(d => d.device.charAt(0).toUpperCase() + d.device.slice(1)),
      explanation: `This is ${item.device} because ${item.definition.toLowerCase()}.`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Literary devices',
      difficulty: item.y <= 6 ? 'easy' : 'medium'
    });
  });

  return questions;
}

// ==========================================
// COMPREHENSION & ANALYSIS (Years 5-13)
// ==========================================

function generateComprehensionQuestions(): Question[] {
  const questions: Question[] = [];

  // Text Types (Years 3-8)
  const textTypes = [
    { type: 'narrative', purpose: 'To tell a story', features: 'Characters, plot, setting, conflict', y: 4 },
    { type: 'persuasive', purpose: 'To convince the reader', features: 'Rhetorical questions, emotive language, facts', y: 5 },
    { type: 'informative', purpose: 'To provide information', features: 'Facts, headings, clear structure', y: 4 },
    { type: 'descriptive', purpose: 'To describe something in detail', features: 'Adjectives, sensory language, imagery', y: 4 },
    { type: 'instructional', purpose: 'To tell someone how to do something', features: 'Numbered steps, imperatives, time connectives', y: 3 },
    { type: 'recount', purpose: 'To retell events that happened', features: 'Past tense, time connectives, first person', y: 3 },
    { type: 'explanation', purpose: 'To explain how or why something happens', features: 'Causal connectives, technical vocabulary', y: 5 },
    { type: 'discussion', purpose: 'To present different viewpoints', features: 'Arguments for and against, balanced view', y: 6 },
  ];

  textTypes.forEach((item, i) => {
    questions.push({
      id: `eng-texttype-purpose-${i}`,
      question: `What is the purpose of a ${item.type} text?`,
      correctAnswer: item.purpose,
      wrongAnswers: textTypes.filter(t => t.type !== item.type).slice(0, 3).map(t => t.purpose),
      explanation: `${item.type.charAt(0).toUpperCase() + item.type.slice(1)} texts ${item.purpose.toLowerCase()}.`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Text types',
      difficulty: 'easy'
    });
  });

  // Writing Techniques (Years 6-11)
  const techniques = [
    { q: 'What is the effect of short sentences?', a: 'Creates tension, impact, or emphasis', y: 6 },
    { q: 'What is the effect of long sentences?', a: 'Creates a flowing, detailed, or complex feel', y: 6 },
    { q: 'What is the effect of rhetorical questions?', a: 'Engages the reader and makes them think', y: 6 },
    { q: 'What is the effect of repetition?', a: 'Emphasises key points and makes them memorable', y: 6 },
    { q: 'What is the effect of emotive language?', a: 'Creates an emotional response in the reader', y: 7 },
    { q: 'What is the effect of direct address (using "you")?', a: 'Makes the reader feel personally involved', y: 7 },
    { q: 'What is the effect of first person narration?', a: 'Creates intimacy and personal connection', y: 7 },
    { q: 'What is the effect of third person omniscient narration?', a: 'Gives a broader view and access to all characters\' thoughts', y: 8 },
    { q: 'What is the effect of listing?', a: 'Emphasises quantity or creates rhythm', y: 6 },
    { q: 'What is the effect of sentence fragments?', a: 'Creates impact, mimics speech, or shows incomplete thoughts', y: 8 },
  ];

  techniques.forEach((item, i) => {
    questions.push({
      id: `eng-technique-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: techniques.filter(t => t.q !== item.q).slice(0, 3).map(t => t.a),
      explanation: item.a,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Analysis',
      difficulty: 'medium'
    });
  });

  return questions;
}

// ==========================================
// LITERATURE KNOWLEDGE (Years 7-13)
// ==========================================

function generateLiteratureQuestions(): Question[] {
  const questions: Question[] = [];

  // Shakespeare (Years 7-13)
  const shakespearePlays = [
    { play: 'Romeo and Juliet', genre: 'tragedy', year: '1597', themes: 'Love, fate, conflict, family', y: 9 },
    { play: 'Macbeth', genre: 'tragedy', year: '1606', themes: 'Ambition, guilt, supernatural, power', y: 9 },
    { play: 'A Midsummer Night\'s Dream', genre: 'comedy', year: '1596', themes: 'Love, magic, dreams, transformation', y: 8 },
    { play: 'The Tempest', genre: 'comedy/romance', year: '1611', themes: 'Power, revenge, forgiveness, colonialism', y: 10 },
    { play: 'Hamlet', genre: 'tragedy', year: '1601', themes: 'Revenge, death, madness, corruption', y: 11 },
    { play: 'Othello', genre: 'tragedy', year: '1604', themes: 'Jealousy, racism, manipulation, love', y: 11 },
    { play: 'The Merchant of Venice', genre: 'comedy', year: '1598', themes: 'Justice, mercy, prejudice, love', y: 10 },
    { play: 'Much Ado About Nothing', genre: 'comedy', year: '1599', themes: 'Love, deception, honour, wit', y: 9 },
  ];

  shakespearePlays.forEach((play, i) => {
    questions.push({
      id: `eng-shakes-genre-${i}`,
      question: `What genre is Shakespeare's "${play.play}"?`,
      correctAnswer: play.genre.charAt(0).toUpperCase() + play.genre.slice(1),
      wrongAnswers: ['Tragedy', 'Comedy', 'History', 'Romance'].filter(g => g.toLowerCase() !== play.genre.toLowerCase()).slice(0, 3),
      explanation: `"${play.play}" (${play.year}) is a ${play.genre}. Key themes: ${play.themes}`,
      subject: 'english',
      yearGroup: play.y,
      topic: 'Shakespeare',
      difficulty: 'medium'
    });
  });

  // Famous literary characters
  const characters = [
    { char: 'Scrooge', work: 'A Christmas Carol', author: 'Charles Dickens', y: 8 },
    { char: 'Pip', work: 'Great Expectations', author: 'Charles Dickens', y: 10 },
    { char: 'Elizabeth Bennet', work: 'Pride and Prejudice', author: 'Jane Austen', y: 10 },
    { char: 'The Inspector', work: 'An Inspector Calls', author: 'J.B. Priestley', y: 10 },
    { char: 'George', work: 'Of Mice and Men', author: 'John Steinbeck', y: 10 },
    { char: 'Atticus Finch', work: 'To Kill a Mockingbird', author: 'Harper Lee', y: 10 },
    { char: 'Winston Smith', work: '1984', author: 'George Orwell', y: 11 },
    { char: 'Ralph', work: 'Lord of the Flies', author: 'William Golding', y: 10 },
  ];

  characters.forEach((item, i) => {
    questions.push({
      id: `eng-char-${i}`,
      question: `Which novel does the character ${item.char} appear in?`,
      correctAnswer: item.work,
      wrongAnswers: characters.filter(c => c.char !== item.char).slice(0, 3).map(c => c.work),
      explanation: `${item.char} is a character in "${item.work}" by ${item.author}.`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Literature',
      difficulty: 'medium'
    });
  });

  // Poetry (Years 6-13)
  const poetryTerms = [
    { term: 'stanza', definition: 'A group of lines in a poem (like a paragraph)', y: 6 },
    { term: 'rhyme scheme', definition: 'The pattern of rhymes at the end of lines', y: 6 },
    { term: 'free verse', definition: 'Poetry without regular rhyme or rhythm', y: 7 },
    { term: 'sonnet', definition: 'A 14-line poem with a specific rhyme scheme', y: 8 },
    { term: 'iambic pentameter', definition: 'A rhythm of 10 syllables (unstressed, stressed) per line', y: 9 },
    { term: 'volta', definition: 'The turn or shift in a sonnet', y: 10 },
    { term: 'blank verse', definition: 'Unrhymed poetry in iambic pentameter', y: 10 },
    { term: 'couplet', definition: 'Two lines that rhyme', y: 6 },
    { term: 'quatrain', definition: 'A stanza of four lines', y: 7 },
  ];

  poetryTerms.forEach((item, i) => {
    questions.push({
      id: `eng-poetry-${i}`,
      question: `What is a ${item.term} in poetry?`,
      correctAnswer: item.definition,
      wrongAnswers: poetryTerms.filter(p => p.term !== item.term).slice(0, 3).map(p => p.definition),
      explanation: `A ${item.term} is ${item.definition.toLowerCase()}.`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Poetry',
      difficulty: item.y <= 7 ? 'easy' : 'medium'
    });
  });

  return questions;
}

// ==========================================
// READING SKILLS (Years 1-6)
// ==========================================

function generateReadingSkillsQuestions(): Question[] {
  const questions: Question[] = [];

  // Phonics (Years 1-2)
  const phonicsQs = [
    { q: 'Which word rhymes with "cat"?', a: 'hat', wrong: ['dog', 'cup', 'run'], y: 1 },
    { q: 'Which word rhymes with "fun"?', a: 'sun', wrong: ['fan', 'fit', 'fog'], y: 1 },
    { q: 'Which word begins with the "ch" sound?', a: 'chair', wrong: ['share', 'car', 'jar'], y: 1 },
    { q: 'Which word has a silent letter?', a: 'knight', wrong: ['kitten', 'kettle', 'kick'], y: 2 },
    { q: 'How many syllables are in "elephant"?', a: '3', wrong: ['2', '4', '5'], y: 2 },
    { q: 'How many syllables are in "butterfly"?', a: '3', wrong: ['2', '4', '5'], y: 2 },
    { q: 'Which word contains a long "a" sound?', a: 'cake', wrong: ['cat', 'cap', 'can'], y: 1 },
    { q: 'Which word contains a short "i" sound?', a: 'sit', wrong: ['kite', 'bike', 'time'], y: 1 },
  ];

  phonicsQs.forEach((item, i) => {
    questions.push({
      id: `eng-phonics-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: item.wrong,
      explanation: `The answer is "${item.a}".`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Phonics',
      difficulty: 'easy'
    });
  });

  // Story Elements (Years 2-5)
  const storyElements = [
    { element: 'setting', definition: 'Where and when a story takes place', y: 2 },
    { element: 'character', definition: 'A person, animal, or creature in the story', y: 2 },
    { element: 'plot', definition: 'The events that happen in a story', y: 3 },
    { element: 'conflict', definition: 'The main problem in the story', y: 4 },
    { element: 'resolution', definition: 'How the problem is solved', y: 4 },
    { element: 'theme', definition: 'The main message or lesson of the story', y: 5 },
    { element: 'narrator', definition: 'The person telling the story', y: 4 },
    { element: 'protagonist', definition: 'The main character in the story', y: 5 },
    { element: 'antagonist', definition: 'The character who opposes the main character', y: 5 },
  ];

  storyElements.forEach((item, i) => {
    questions.push({
      id: `eng-story-${i}`,
      question: `What is the ${item.element} of a story?`,
      correctAnswer: item.definition,
      wrongAnswers: storyElements.filter(s => s.element !== item.element).slice(0, 3).map(s => s.definition),
      explanation: `The ${item.element} is ${item.definition.toLowerCase()}.`,
      subject: 'english',
      yearGroup: item.y,
      topic: 'Reading',
      difficulty: 'easy'
    });
  });

  return questions;
}

// ==========================================
// EXPORT ALL ENGLISH QUESTIONS
// ==========================================

export function generateAllEnglishQuestions(): Question[] {
  return [
    ...generateSpellingQuestions(),
    ...generateGrammarQuestions(),
    ...generateVocabularyQuestions(),
    ...generateLiteraryDevicesQuestions(),
    ...generateComprehensionQuestions(),
    ...generateLiteratureQuestions(),
    ...generateReadingSkillsQuestions(),
  ];
}

export default generateAllEnglishQuestions;
