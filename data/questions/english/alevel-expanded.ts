/**
 * A-Level English Expanded Question Bank
 * Advanced literature and language analysis with engaging content
 */

import { Question, TermDefinition } from '../types';

// ============================================
// A-LEVEL ENGLISH LITERATURE - TRAGEDY
// ============================================

export const alevelEnglishTragedy: Question[] = [
  {
    id: 'eng-alevel-exp-trag-001',
    subject: 'english',
    topic: 'Tragedy',
    subtopic: 'Aristotelian Principles',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'According to Aristotle\'s Poetics, tragedy should evoke which two emotions?',
    correctAnswer: 'Pity and fear',
    wrongAnswers: ['Joy and sorrow', 'Love and hate', 'Anger and confusion'],
    explanation: 'Aristotle argued tragedy creates pity (for the suffering character) and fear (this could happen to us). Through experiencing these emotions safely, audiences achieve catharsis - emotional cleansing. This theory dominated tragedy for 2000+ years!',
    hint: 'What do we feel watching someone\'s downfall?',
    tags: ['tragedy', 'aristotle', 'theory'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-trag-002',
    subject: 'english',
    topic: 'Tragedy',
    subtopic: 'Tragic Heroes',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A tragic hero\'s downfall results from:',
    correctAnswer: 'A combination of character flaws and circumstances',
    wrongAnswers: ['Pure bad luck', 'Being a villain', 'Divine punishment for sin'],
    explanation: 'The best tragedies blend agency and fate. Macbeth\'s ambition meets the witches\' prophecy. Othello\'s jealousy meets Iago\'s manipulation. Neither pure victim nor pure villain - that\'s what makes tragedy so compelling and debatable!',
    hint: 'Is it all their fault? Or none of it?',
    tags: ['tragedy', 'hero', 'causation'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-trag-003',
    subject: 'english',
    topic: 'Othello',
    subtopic: 'Race and Identity',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Othello\'s "Haply, for I am black" soliloquy reveals:',
    correctAnswer: 'He has internalized racist attitudes from Venetian society',
    wrongAnswers: ['He\'s proud of his heritage', 'He\'s describing someone else', 'He\'s being sarcastic'],
    explanation: 'This is devastating! Othello begins to see himself through racist Venice\'s eyes - as an outsider, unworthy of Desdemona. Iago didn\'t create this insecurity; he exploited it. The tragedy shows racism corroding from within as well as without.',
    hint: 'Why does Othello suddenly doubt himself?',
    tags: ['othello', 'race', 'identity'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-trag-004',
    subject: 'english',
    topic: 'King Lear',
    subtopic: 'Nature',
    difficulty: 'alevel',
    type: 'match',
    question: 'Match each character\'s view of nature in King Lear:',
    correctAnswer: ['Edmund → Nature as amoral force justifying ambition', 'Lear → Nature should enforce filial duty', 'Cordelia → Natural love needs no performance', 'Edgar → Nature as healing wilderness'],
    wrongAnswers: [],
    explanation: 'Shakespeare interrogates "nature" from all angles! Edmund\'s "Thou, Nature, art my goddess" inverts natural order. Lear expects nature to punish Goneril. Cordelia\'s love is natural precisely because it\'s unspoken. The storm shows nature indifferent to human drama.',
    hint: 'Each character has a different relationship with the natural world',
    tags: ['king-lear', 'nature', 'themes'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-trag-005',
    subject: 'english',
    topic: 'Death of a Salesman',
    subtopic: 'Modern Tragedy',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Arthur Miller argued that common people can be tragic heroes because their willingness to sacrifice everything for dignity is as significant as any king\'s fall.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'Miller\'s essay "Tragedy and the Common Man" democratized tragedy! Willy Loman isn\'t royal, but his desperate clinging to the American Dream, and his final sacrifice (death = insurance money) for his family, has genuine tragic weight. The salesman IS the tragic hero of capitalism.',
    tags: ['salesman', 'miller', 'modern-tragedy'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-trag-006',
    subject: 'english',
    topic: 'Tragedy',
    subtopic: 'Catharsis',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Critics debate whether catharsis means:',
    correctAnswer: 'Either emotional purging OR intellectual clarification',
    wrongAnswers: ['Only crying at sad endings', 'The death of the protagonist', 'A type of Greek chorus'],
    explanation: 'The Greek word is ambiguous! Traditional view: we purge emotions by experiencing them safely. Newer interpretation: tragedy clarifies our understanding of human nature. Maybe both? That\'s literary criticism - productive disagreement, not right answers!',
    hint: 'The Greek term has multiple possible translations',
    tags: ['tragedy', 'catharsis', 'criticism'],
    yearGroup: [12, 13]
  },
];

// ============================================
// A-LEVEL ENGLISH LITERATURE - POETRY
// ============================================

export const alevelEnglishPoetry: Question[] = [
  {
    id: 'eng-alevel-exp-poet-001',
    subject: 'english',
    topic: 'Pre-1900 Poetry',
    subtopic: 'Romantic Poetry',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The Romantics rejected Enlightenment rationalism. Instead, they prioritized:',
    correctAnswer: 'Emotion, imagination, and individual experience',
    wrongAnswers: ['Scientific method and logic', 'Classical forms and rules', 'Industrial progress'],
    explanation: 'Romanticism was a revolution! Against cold reason, Wordsworth championed "spontaneous overflow of powerful feelings." Nature became sacred, childhood innocent, imagination divine. They were reacting against industrialization crushing the human spirit.',
    hint: 'What did the Enlightenment emphasize that Romantics rejected?',
    tags: ['romanticism', 'poetry', 'movement'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-poet-002',
    subject: 'english',
    topic: 'Pre-1900 Poetry',
    subtopic: 'Keats',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: '"Ode to a Nightingale" expresses Keats\'s desire to escape mortality through:',
    correctAnswer: 'Identification with the immortal bird and its song',
    wrongAnswers: ['Traveling to warmer climates', 'Becoming a professional poet', 'Drinking wine'],
    explanation: 'The nightingale represents what Keats cannot have - escape from pain, sickness, death. "Thou wast not born for death, immortal Bird!" But Keats knows he can\'t escape. The poem\'s beauty is in this impossible yearning. He died at 25, aware time was short.',
    hint: 'What does the nightingale symbolize for Keats?',
    tags: ['keats', 'romanticism', 'mortality'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-poet-003',
    subject: 'english',
    topic: 'Modern Poetry',
    subtopic: 'Modernism',
    difficulty: 'alevel',
    type: 'match',
    question: 'Match each Modernist technique to its purpose:',
    correctAnswer: ['Fragmentation → Reflects broken post-war consciousness', 'Allusion → Connects present to cultural past', 'Free verse → Breaks from tradition, mimics speech', 'Stream of consciousness → Captures inner thought processes'],
    wrongAnswers: [],
    explanation: 'WWI shattered certainties. Modernist poets responded with shattered forms. Eliot\'s "The Waste Land" is fragments "shored against ruins." T.S. Eliot and Pound packed poems with allusions (making them deliberately difficult). Joyce and Woolf pioneered stream of consciousness in prose.',
    hint: 'How did WWI affect artistic expression?',
    tags: ['modernism', 'poetry', 'technique'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-poet-004',
    subject: 'english',
    topic: 'Modern Poetry',
    subtopic: 'Eliot',
    difficulty: 'alevel',
    type: 'fill-blank',
    question: 'Eliot\'s "The Love Song of J. Alfred Prufrock" opens: "Let us go then, you and I / When the evening is spread out against the sky / Like a patient etherized upon a _____"',
    correctAnswer: 'table',
    wrongAnswers: ['bed', 'cloud', 'stage'],
    explanation: 'This shocking simile announces Modernism! Evening = something beautiful, right? Nope - it\'s like an unconscious patient on an operating table. The image is clinical, cold, unsettling. Beauty is sick. Romance is anesthetized. Welcome to the 20th century.',
    hint: 'Think medical equipment',
    tags: ['eliot', 'prufrock', 'imagery'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-poet-005',
    subject: 'english',
    topic: 'Post-1900 Poetry',
    subtopic: 'Plath',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In "Daddy," Plath uses Holocaust imagery to describe her father. This is:',
    correctAnswer: 'Controversial but arguably about personal trauma echoing historical atrocity',
    wrongAnswers: ['A literal family history', 'Simply bad taste with no meaning', 'Standard confessional technique'],
    explanation: 'This is THE debate in Plath criticism! Is comparing patriarchy to Nazism powerful or exploitative? Plath wasn\'t Jewish or a Holocaust survivor. But confessional poetry blurs personal and political. The imagery\'s extremity mirrors the extremity of her psychological suffering.',
    hint: 'Why might this imagery be both powerful and problematic?',
    tags: ['plath', 'confessional', 'controversy'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-poet-006',
    subject: 'english',
    topic: 'Post-1900 Poetry',
    subtopic: 'Hughes',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Ted Hughes\'s animal poems ("Hawk Roosting," "Pike") present nature as:',
    correctAnswer: 'Violent, amoral, and magnificently indifferent to humanity',
    wrongAnswers: ['Gentle and nurturing', 'A metaphor for British politics', 'Silly and entertaining'],
    explanation: 'Hughes\'s animals don\'t care about human morality. The hawk sees itself as God: "I kill where I please because it is all mine." The pike has "jaws hooked clamp and fangs." No Disney sentimentality here - Hughes shows raw nature without anthropomorphism.',
    hint: 'How does Hughes view the natural world?',
    tags: ['hughes', 'nature', 'violence'],
    yearGroup: [12, 13]
  },
];

// ============================================
// A-LEVEL ENGLISH LITERATURE - PROSE
// ============================================

export const alevelEnglishProse: Question[] = [
  {
    id: 'eng-alevel-exp-prose-001',
    subject: 'english',
    topic: 'The Novel',
    subtopic: 'Narrative Voice',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'First-person narration creates intimacy but also:',
    correctAnswer: 'Limits perspective and raises questions of reliability',
    wrongAnswers: ['Makes the story objectively true', 'Is easier to write than third-person', 'Always means the narrator is the hero'],
    explanation: 'First-person = one viewpoint only. We can\'t know what the narrator doesn\'t know (or chooses not to tell). Is Nick Carraway reliable about Gatsby? Is Stevens reliable in "Remains of the Day"? First-person invites us to read critically, not passively.',
    hint: 'What are the limitations of seeing through one character\'s eyes?',
    tags: ['narrative', 'voice', 'technique'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-prose-002',
    subject: 'english',
    topic: 'Gothic Literature',
    subtopic: 'Conventions',
    difficulty: 'alevel',
    type: 'match',
    question: 'Match each Gothic convention to its symbolic meaning:',
    correctAnswer: ['Crumbling castle → Decay of old order/aristocracy', 'Labyrinthine passages → Psychological confusion', 'Doppelganger → Divided self/repressed desires', 'Sublime landscape → Terror mixed with awe'],
    wrongAnswers: [],
    explanation: 'Gothic architecture mirrors Gothic psychology! Physical decay = moral decay. Getting lost in corridors = getting lost in the mind. The double (Hyde, Bertha Mason) embodies what we repress. Mountains overwhelm us like powerful emotions do.',
    hint: 'Gothic settings usually represent psychological states',
    tags: ['gothic', 'conventions', 'symbolism'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-prose-003',
    subject: 'english',
    topic: 'Victorian Novel',
    subtopic: 'Social Commentary',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'The Victorian novel was often used as a vehicle for social reform, with writers like Dickens and Gaskell exposing industrial poverty.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Novels reached mass audiences through serialization. Dickens\'s depiction of workhouses in "Oliver Twist" influenced public opinion. Gaskell\'s "North and South" humanized factory workers. Literature became activism. Fiction could change laws!',
    tags: ['victorian', 'social', 'reform'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-prose-004',
    subject: 'english',
    topic: 'Post-Colonial Literature',
    subtopic: 'Representation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Chinua Achebe criticized Conrad\'s "Heart of Darkness" for:',
    correctAnswer: 'Dehumanizing Africans and using Africa merely as a backdrop for European psychology',
    wrongAnswers: ['Poor prose style', 'Historical inaccuracies', 'Being too sympathetic to colonizers'],
    explanation: 'Achebe\'s famous 1977 essay called Conrad "a thoroughgoing racist." Africa in the novel is just "the other world" - Africans barely speak, exist only as backdrop for Marlow\'s journey. This sparked ongoing debate: can we separate artistic achievement from racist representation?',
    hint: 'What role do African characters actually play in the novel?',
    tags: ['post-colonial', 'achebe', 'conrad'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-prose-005',
    subject: 'english',
    topic: 'Feminist Criticism',
    subtopic: 'The Madwoman',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Gilbert and Gubar\'s "The Madwoman in the Attic" argues that Bertha Mason in Jane Eyre represents:',
    correctAnswer: 'Jane\'s repressed anger and the fate of women who rebel',
    wrongAnswers: ['Simply a plot device', 'An accurate portrayal of mental illness', 'Rochester\'s guilt'],
    explanation: 'Bertha as Jane\'s dark double! Gilbert and Gubar showed how 19th-century women writers encoded rage. Bertha does what Jane can\'t - destroys the house, attacks Rochester. She\'s the "madwoman" every rebellious woman risks becoming when she refuses compliance.',
    hint: 'What does Bertha do that Jane cannot?',
    tags: ['feminism', 'jane-eyre', 'criticism'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-prose-006',
    subject: 'english',
    topic: 'Dystopian Fiction',
    subtopic: 'Language',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'In "1984," Newspeak is designed to:',
    correctAnswer: 'Eliminate the possibility of subversive thought by removing necessary words',
    wrongAnswers: ['Make communication faster', 'Help children learn English', 'Preserve classical literature'],
    explanation: 'If you can\'t say "freedom," can you think it? Orwell explores the Sapir-Whorf hypothesis - language shapes thought. Newspeak shrinks vocabulary until rebellion becomes literally unthinkable. "Thoughtcrime" and "doublethink" show language as a tool of control.',
    hint: 'What happens when words for concepts are eliminated?',
    tags: ['1984', 'dystopia', 'language'],
    yearGroup: [12, 13]
  },
];

// ============================================
// A-LEVEL ENGLISH LANGUAGE
// ============================================

export const alevelEnglishLanguage: Question[] = [
  {
    id: 'eng-alevel-exp-lang-001',
    subject: 'english',
    topic: 'Language Change',
    subtopic: 'Historical Development',
    difficulty: 'alevel',
    type: 'order',
    question: 'Order these periods of English development:',
    correctAnswer: ['Old English (450-1100)', 'Middle English (1100-1500)', 'Early Modern English (1500-1700)', 'Late Modern English (1700-present)'],
    wrongAnswers: [],
    explanation: 'English evolved dramatically! Old English (Beowulf) is unreadable to us. Norman invasion brought French (Middle English = Chaucer). Printing standardized spelling (Early Modern = Shakespeare). Industrial Revolution expanded vocabulary (Late Modern = us).',
    hint: 'Think about major historical events that affected language',
    tags: ['language-change', 'history', 'periods'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-lang-002',
    subject: 'english',
    topic: 'Language Change',
    subtopic: 'Semantic Change',
    difficulty: 'alevel',
    type: 'match',
    question: 'Match each type of semantic change:',
    correctAnswer: ['Amelioration → Word gains positive meaning (nice: foolish → pleasant)', 'Pejoration → Word gains negative meaning (villain: farm worker → evil person)', 'Broadening → Word extends meaning (dog: specific breed → all dogs)', 'Narrowing → Word restricts meaning (meat: all food → animal flesh)'],
    wrongAnswers: [],
    explanation: 'Words change meaning over time! "Nice" once meant ignorant. "Silly" meant blessed. "Gay" meant happy. These shifts happen gradually through usage. Understanding semantic change helps you analyze historical texts without modern assumptions.',
    hint: 'Think about how the meaning expands or contracts',
    tags: ['semantics', 'language-change', 'meaning'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-lang-003',
    subject: 'english',
    topic: 'Sociolinguistics',
    subtopic: 'Sociolect',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'A sociolect is a variety of language associated with:',
    correctAnswer: 'A particular social group or class',
    wrongAnswers: ['A geographic region', 'A historical period', 'A single individual'],
    explanation: 'Sociolects mark social identity! U and non-U vocabulary (serviette vs. napkin), professional jargon, youth slang - all are sociolects. Bernstein controversially distinguished "elaborated" and "restricted" codes by class. Language reveals social position.',
    hint: 'What social factor defines this variety?',
    tags: ['sociolinguistics', 'sociolect', 'variation'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-lang-004',
    subject: 'english',
    topic: 'Language and Power',
    subtopic: 'Political Discourse',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Politicians use nominalization (turning verbs into nouns) to:',
    correctAnswer: 'Remove agency and obscure who is responsible for actions',
    wrongAnswers: ['Sound more intelligent', 'Make speeches shorter', 'Follow grammar rules'],
    explanation: '"The decision was made" vs. "I decided." Nominalization hides who acts! "Collateral damage" avoids saying "we killed civilians." "Restructuring" avoids "we\'re firing people." Analyze political language for hidden agents!',
    hint: 'What information gets lost in nominalization?',
    tags: ['power', 'politics', 'nominalization'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-lang-005',
    subject: 'english',
    topic: 'Language and Gender',
    subtopic: 'Theories',
    difficulty: 'alevel',
    type: 'match',
    question: 'Match each gender and language theorist to their key claim:',
    correctAnswer: ['Lakoff → Women\'s language is tentative and deferential', 'Tannen → Men and women have different conversational goals', 'Cameron → Gender differences are performed, not inherent', 'Coates → Women\'s talk is collaborative, not competitive'],
    wrongAnswers: [],
    explanation: 'Gender and language is hotly debated! Lakoff (1975) saw women as disadvantaged. Tannen (1990) proposed "different but equal." Cameron (2007) argued we DO gender through talk. Coates studied female friendship conversation. Each theory has strengths and critics!',
    hint: 'These theories range from deficit to difference to performance',
    tags: ['gender', 'sociolinguistics', 'theory'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-lang-006',
    subject: 'english',
    topic: 'Child Language Acquisition',
    subtopic: 'Stages',
    difficulty: 'alevel',
    type: 'order',
    question: 'Order the stages of child language acquisition:',
    correctAnswer: ['Cooing (6-8 weeks)', 'Babbling (6-9 months)', 'One-word/holophrastic (12-18 months)', 'Two-word (18-24 months)', 'Telegraphic (24-30 months)'],
    wrongAnswers: [],
    explanation: 'Children progress predictably! Cooing = vowel sounds. Babbling = consonant-vowel combinations (bababa). Holophrastic = single words representing whole ideas ("milk!" = I want milk). Two-word = basic grammar emerges. Telegraphic = key words without function words ("daddy go car").',
    hint: 'Start with the earliest sounds babies make',
    tags: ['acquisition', 'development', 'stages'],
    yearGroup: [12, 13]
  },
];

// ============================================
// A-LEVEL ENGLISH - CRITICAL THEORY
// ============================================

export const alevelEnglishTheory: Question[] = [
  {
    id: 'eng-alevel-exp-theory-001',
    subject: 'english',
    topic: 'Critical Theory',
    subtopic: 'Marxist Criticism',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Marxist literary criticism examines texts for:',
    correctAnswer: 'Class relations, ideology, and economic power structures',
    wrongAnswers: ['Biographical details about Marx', 'Communist propaganda', 'Scientific accuracy'],
    explanation: 'Marxists read for power! Who controls resources in the text? What ideology is presented as "natural"? How does the text support or challenge capitalism? Dickens might seem progressive, but does "A Christmas Carol" propose systemic change or just individual charity?',
    hint: 'What economic structures underpin the narrative?',
    tags: ['marxism', 'theory', 'criticism'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-theory-002',
    subject: 'english',
    topic: 'Critical Theory',
    subtopic: 'Structuralism',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Structuralism argues that meaning comes from relationships and contrasts within a system (like language), not from external reality.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Saussure showed that "dog" means dog not because of some natural connection, but because it\'s NOT "cat," "log," or "bog." Meaning = difference. Structuralists applied this to stories: heroes exist because villains exist. Light needs dark.',
    tags: ['structuralism', 'theory', 'saussure'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-theory-003',
    subject: 'english',
    topic: 'Critical Theory',
    subtopic: 'Post-Structuralism',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Derrida\'s concept of "deconstruction" involves:',
    correctAnswer: 'Revealing contradictions and unstable meanings in texts',
    wrongAnswers: ['Physically destroying books', 'Simplifying complex texts', 'Finding the author\'s true intention'],
    explanation: 'Deconstruction shows texts undermine themselves! Every binary (good/evil, male/female) has a hierarchy, and close reading can flip it. Texts say more than authors intend. Meaning is never fixed. This is intellectually exciting but can feel like everything dissolves!',
    hint: 'What happens when you look closely at binary oppositions?',
    tags: ['deconstruction', 'derrida', 'theory'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-theory-004',
    subject: 'english',
    topic: 'Critical Theory',
    subtopic: 'Reader-Response',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Reader-response theory argues that meaning is created:',
    correctAnswer: 'Through interaction between text and reader',
    wrongAnswers: ['Only by the author', 'Only in the text itself', 'By literary critics exclusively'],
    explanation: 'Different readers = different readings! Your experience, culture, and moment in history shape what a text means TO YOU. Stanley Fish\'s "interpretive communities" share reading strategies. This validates diverse interpretations but raises questions: are any readings wrong?',
    hint: 'Where does meaning actually reside?',
    tags: ['reader-response', 'theory', 'interpretation'],
    yearGroup: [12, 13]
  },
  {
    id: 'eng-alevel-exp-theory-005',
    subject: 'english',
    topic: 'Critical Theory',
    subtopic: 'Ecocriticism',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Ecocriticism examines literature through the lens of:',
    correctAnswer: 'Environmental concerns and human-nature relationships',
    wrongAnswers: ['Economic markets', 'Echo effects in poetry', 'Ecological science only'],
    explanation: 'A relatively new approach! Ecocritics ask: How does literature represent nature? Does it reinforce or challenge human dominance over environment? Wordsworth\'s nature poetry vs. industrial dystopia. Climate fiction as a growing genre. Literature can shape environmental attitudes.',
    hint: 'What environmental issues might be relevant to literary study?',
    tags: ['ecocriticism', 'theory', 'environment'],
    yearGroup: [12, 13]
  },
];

// ============================================
// TERMS
// ============================================

export const alevelEnglishTermsExpanded: TermDefinition[] = [
  {
    id: 'eng-alevel-exp-term-001',
    subject: 'english',
    difficulty: 'alevel',
    term: 'Mise en abyme',
    definition: 'A story within a story, or self-referential embedding (like a picture containing a smaller version of itself)',
    example: 'The play within "Hamlet" that mirrors the main plot - "The Mousetrap" - is mise en abyme.',
    tags: ['narrative', 'structure', 'technique']
  },
  {
    id: 'eng-alevel-exp-term-002',
    subject: 'english',
    difficulty: 'alevel',
    term: 'Intertextuality',
    definition: 'The relationship between texts, where one text references, echoes, or transforms another',
    example: 'Jean Rhys\'s "Wide Sargasso Sea" is intertextual with "Jane Eyre," telling Bertha Mason\'s story.',
    tags: ['theory', 'texts', 'relationships']
  },
  {
    id: 'eng-alevel-exp-term-003',
    subject: 'english',
    difficulty: 'alevel',
    term: 'Defamiliarization',
    definition: 'A literary technique that presents familiar things in unfamiliar ways, forcing readers to see them anew',
    example: 'Swift\'s "A Modest Proposal" defamiliarizes poverty by suggesting eating babies as a solution.',
    tags: ['technique', 'effect', 'formalism']
  },
  {
    id: 'eng-alevel-exp-term-004',
    subject: 'english',
    difficulty: 'alevel',
    term: 'Heteroglossia',
    definition: 'The presence of multiple voices, styles, or registers within a single text (Bakhtin\'s term)',
    example: 'Dickens\'s novels contain aristocratic speech, Cockney dialect, legal jargon - multiple social voices.',
    tags: ['narrative', 'voice', 'bakhtin']
  },
  {
    id: 'eng-alevel-exp-term-005',
    subject: 'english',
    difficulty: 'alevel',
    term: 'Pastiche',
    definition: 'An imitative work that celebrates or pays homage to the style of another work or period',
    example: 'A.S. Byatt\'s "Possession" contains pastiche Victorian poetry written by fictional poets.',
    tags: ['postmodernism', 'style', 'imitation']
  },
  {
    id: 'eng-alevel-exp-term-006',
    subject: 'english',
    difficulty: 'alevel',
    term: 'Palimpsest',
    definition: 'A text that has been written over but where traces of earlier writing remain visible',
    example: 'Post-colonial writers create palimpsests, rewriting colonial narratives while their traces remain.',
    tags: ['post-colonial', 'text', 'layers']
  },
  {
    id: 'eng-alevel-exp-term-007',
    subject: 'english',
    difficulty: 'alevel',
    term: 'Aporia',
    definition: 'A moment of doubt, contradiction, or logical impasse in a text that resists resolution',
    example: 'The ending of "The Turn of the Screw" creates aporia - we cannot determine if ghosts are real.',
    tags: ['theory', 'meaning', 'ambiguity']
  },
  {
    id: 'eng-alevel-exp-term-008',
    subject: 'english',
    difficulty: 'alevel',
    term: 'Metalepsis',
    definition: 'When a narrative level is transgressed, such as when a narrator addresses the reader or enters the story',
    example: 'When the narrator of "Tom Jones" directly addresses the reader, or when a character addresses the author.',
    tags: ['narrative', 'technique', 'levels']
  },
];

// Combined exports
export const alevelEnglishExpandedNew = [
  ...alevelEnglishTragedy,
  ...alevelEnglishPoetry,
  ...alevelEnglishProse,
  ...alevelEnglishLanguage,
  ...alevelEnglishTheory,
];
