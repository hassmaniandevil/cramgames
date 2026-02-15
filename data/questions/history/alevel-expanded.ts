/**
 * A-Level History Expanded Question Bank
 * Advanced historiographical analysis and in-depth content
 */

import { Question, TermDefinition, TimelineEvent } from '../types';

// ============================================
// TUDOR ENGLAND
// ============================================

export const alevelHistoryTudors: Question[] = [
  {
    id: 'hist-alevel-exp-tud-001',
    subject: 'history',
    topic: 'Tudor England',
    subtopic: 'Henry VIII',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Elton\'s thesis on the "Tudor Revolution in Government" argues that Thomas Cromwell:',
    correctAnswer: 'Transformed government from household to bureaucratic state',
    wrongAnswers: ['Simply continued medieval practices', 'Weakened royal authority', 'Created parliamentary supremacy'],
    explanation: 'Elton argued Cromwell created modern bureaucracy! Instead of the king\'s household running everything personally, professional departments (Privy Council, courts) administered the state. Critics like Starkey argue household government persisted. The debate continues!',
    hint: 'What changed about how government was organized?',
    tags: ['tudor', 'cromwell', 'historiography'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp-tud-002',
    subject: 'history',
    topic: 'Tudor England',
    subtopic: 'Reformation',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Revisionist historians like Haigh and Duffy argue the English Reformation was:',
    correctAnswer: 'Imposed from above on a largely Catholic population',
    wrongAnswers: ['Demanded by widespread Protestant enthusiasm', 'Completed by 1534', 'Primarily about theology'],
    explanation: 'Haigh and Duffy challenged the Whig narrative! They showed pre-Reformation Catholicism was vibrant, not corrupt. The Reformation was slow, resisted, and incomplete for decades. The "Protestant nation" narrative is too simplistic - religion was imposed, not chosen.',
    hint: 'What do revisionist historians say about popular support?',
    tags: ['tudor', 'reformation', 'historiography'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp-tud-003',
    subject: 'history',
    topic: 'Tudor England',
    subtopic: 'Elizabeth I',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Susan Doran argues that Elizabeth\'s decision not to marry was a deliberate political strategy rather than personal choice.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'Doran shows Elizabeth used marriage negotiations as diplomacy! She strung along suitors for decades, gaining alliances without commitment. Marriage meant surrendering power to a husband. Remaining single kept her options - and her authority - open.',
    tags: ['tudor', 'elizabeth', 'historiography'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp-tud-004',
    subject: 'history',
    topic: 'Tudor England',
    subtopic: 'Succession',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The "mid-Tudor crisis" thesis suggests that Edward VI and Mary I\'s reigns were:',
    correctAnswer: 'Periods of instability threatening Tudor achievements',
    wrongAnswers: ['Continued Tudor success', 'Irrelevant transition periods', 'Times of great prosperity'],
    explanation: 'The "crisis" view: minorities, religious swings, rebellions, economic problems, and Mary\'s Spanish marriage threatened stability. But revisionist historians argue these reigns were more successful than assumed - effective government continued despite challenges.',
    hint: 'What problems did these reigns face?',
    tags: ['tudor', 'crisis', 'historiography'],
    yearGroup: [12, 13]
  },
];

// ============================================
// STUART BRITAIN
// ============================================

export const alevelHistoryStuarts: Question[] = [
  {
    id: 'hist-alevel-exp-stu-001',
    subject: 'history',
    topic: 'Stuart Britain',
    subtopic: 'Civil War Causes',
    difficulty: 'alevel',
    type: 'match',
    question: 'Match each historiographical interpretation of Civil War causes:',
    correctAnswer: ['Whig view → Struggle for parliamentary liberty against tyranny', 'Marxist view → Conflict between feudal aristocracy and rising bourgeoisie', 'Revisionist view → Short-term failures and contingent events', 'Post-revisionist → Multiple causes including religion and ideology'],
    wrongAnswers: [],
    explanation: 'Civil War historiography is a battlefield itself! Whigs saw inevitable progress toward liberty. Marxists saw class conflict. Revisionists (Russell, Conrad) rejected long-term causes. Post-revisionists synthesize: ideology mattered, but so did accidents and personalities.',
    hint: 'Each school emphasizes different factors',
    tags: ['stuart', 'civil-war', 'historiography'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp-stu-002',
    subject: 'history',
    topic: 'Stuart Britain',
    subtopic: 'Revolution',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Christopher Hill\'s Marxist interpretation of the English Revolution emphasizes:',
    correctAnswer: 'Radical movements like Levellers and Diggers challenging property and hierarchy',
    wrongAnswers: ['King Charles\'s personal failings', 'Religious differences only', 'Foreign intervention'],
    explanation: 'Hill recovered the "world turned upside down"! Levellers demanded political equality. Diggers tried communal farming. Ranters rejected all authority. These radicals frightened conservatives into restoring order - but showed alternative possibilities that were suppressed.',
    hint: 'Hill focused on ordinary people and radical ideas',
    tags: ['stuart', 'revolution', 'marxism'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp-stu-003',
    subject: 'history',
    topic: 'Stuart Britain',
    subtopic: 'Glorious Revolution',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'Steve Pincus argues the Glorious Revolution was "the first modern revolution" because:',
    correctAnswer: 'It involved ideological conflict over the nature of the state',
    wrongAnswers: ['It was completely bloodless', 'It established democracy', 'It ended religious conflict'],
    explanation: 'Pincus challenges the conservative interpretation! The Revolution wasn\'t just about Protestant succession - it involved genuine ideological conflict about political economy, religious toleration, and England\'s place in Europe. More than a "sensible" aristocratic coup.',
    hint: 'What made it "modern" in Pincus\'s view?',
    tags: ['stuart', '1688', 'historiography'],
    yearGroup: [12, 13]
  },
];

// ============================================
// RUSSIAN REVOLUTION
// ============================================

export const alevelHistoryRussia: Question[] = [
  {
    id: 'hist-alevel-exp-rus-001',
    subject: 'history',
    topic: 'Russian Revolution',
    subtopic: 'February Revolution',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The "pessimist" interpretation of Tsarist Russia argues that:',
    correctAnswer: 'Fundamental weaknesses made collapse inevitable regardless of WWI',
    wrongAnswers: ['Russia was modernizing successfully', 'The Tsar was a competent ruler', 'Revolution could have been avoided'],
    explanation: 'Pessimists see deep structural problems: autocracy couldn\'t reform, peasant land hunger was explosive, nationalism threatened the empire. WWI was the trigger, not the cause. Optimists counter that Stolypin\'s reforms might have succeeded given time. Debate!',
    hint: 'What long-term problems did Russia face?',
    tags: ['russia', 'revolution', 'historiography'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp-rus-002',
    subject: 'history',
    topic: 'Russian Revolution',
    subtopic: 'October Revolution',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The Libertarian/revisionist view of October 1917 emphasizes:',
    correctAnswer: 'Popular participation and genuine revolutionary enthusiasm',
    wrongAnswers: ['Bolshevik conspiracy alone', 'German funding as the key factor', 'Inevitable historical progress'],
    explanation: 'Against both Soviet hagiography and Cold War conspiracy theories, historians like Figes show October had mass support! Workers\' soviets, soldiers\' committees, and peasant seizures created a revolutionary situation. The Bolsheviks rode a wave, not just staged a coup.',
    hint: 'What role did ordinary people play?',
    tags: ['russia', 'bolsheviks', 'historiography'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp-rus-003',
    subject: 'history',
    topic: 'Russian Revolution',
    subtopic: 'Stalin',
    difficulty: 'alevel',
    type: 'match',
    question: 'Match each interpretation of Stalinism:',
    correctAnswer: ['Totalitarian school → Stalin as all-powerful dictator', 'Revisionist school → Limits on Stalin\'s control, local initiatives', 'Intentionalist → Stalin planned everything deliberately', 'Functionalist → Policies evolved chaotically in response to circumstances'],
    wrongAnswers: [],
    explanation: 'How did Stalinism work? Totalitarians emphasized top-down terror. Revisionists found chaos, competing agencies, local variation. Intentionalists see Stalin\'s master plan. Functionalists see improvisation. The Great Terror: planned purge or spiral out of control? Both views have evidence.',
    hint: 'How much control did Stalin actually have?',
    tags: ['russia', 'stalin', 'historiography'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp-rus-004',
    subject: 'history',
    topic: 'Russian Revolution',
    subtopic: 'Lenin',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Robert Service argues Lenin established the authoritarian foundations that Stalin later exploited, challenging the "good Lenin, bad Stalin" narrative.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'Service and Pipes emphasize continuity! One-party state, Cheka terror, suppression of opposition - all Lenin\'s doing. The Kronstadt rebellion\'s crushing showed Bolshevik intolerance. Stalin intensified but didn\'t invent authoritarianism. Lenin\'s heirs debate his legacy still.',
    tags: ['russia', 'lenin', 'historiography'],
    yearGroup: [12, 13]
  },
];

// ============================================
// CIVIL RIGHTS
// ============================================

export const alevelHistoryCivilRights: Question[] = [
  {
    id: 'hist-alevel-exp-cr-001',
    subject: 'history',
    topic: 'Civil Rights',
    subtopic: 'Historiography',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The "long civil rights movement" thesis argues:',
    correctAnswer: 'Struggle began in the 1930s-40s, not just 1954-1968',
    wrongAnswers: ['MLK was the only important leader', 'The movement ended in 1968', 'Federal government drove all change'],
    explanation: 'Jacquelyn Dowd Hall and others extend the timeline! Labor organizing, Communist Party activism, WWII\'s "Double V" campaign - the "classical" 1954-68 narrative is too narrow. And the movement didn\'t end with King\'s death but continued transforming.',
    hint: 'When did the struggle for civil rights really begin?',
    tags: ['civil-rights', 'historiography', 'timeline'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp-cr-002',
    subject: 'history',
    topic: 'Civil Rights',
    subtopic: 'Grassroots',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'John Dittmer\'s study of Mississippi emphasizes:',
    correctAnswer: 'Local people\'s courage mattered more than national leaders',
    wrongAnswers: ['Federal intervention was decisive', 'Mississippi was similar to other states', 'Violence was rare'],
    explanation: 'Local studies transformed civil rights history! Dittmer shows ordinary Mississippians like Fannie Lou Hamer risked everything. National leaders mattered, but without local organizing and local courage, nothing happened. "Local people" were the movement\'s backbone.',
    hint: 'Who actually took the risks on the ground?',
    tags: ['civil-rights', 'grassroots', 'historiography'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp-cr-003',
    subject: 'history',
    topic: 'Civil Rights',
    subtopic: 'Malcolm X',
    difficulty: 'alevel',
    type: 'true-false',
    question: 'Recent scholarship sees Malcolm X and Martin Luther King Jr. as more similar in their later views than traditionally portrayed.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! The MLK vs. Malcolm binary is overdrawn. By 1965, Malcolm moved toward coalition-building. King increasingly criticized capitalism and the Vietnam War. Both recognized interrelated injustices. Their "rivalry" was partly media construction. Convergence, not just contrast.',
    tags: ['civil-rights', 'malcolm-x', 'mlk'],
    yearGroup: [12, 13]
  },
];

// ============================================
// HISTORIOGRAPHICAL CONCEPTS
// ============================================

export const alevelHistoryHistoriography: Question[] = [
  {
    id: 'hist-alevel-exp-histo-001',
    subject: 'history',
    topic: 'Historiography',
    subtopic: 'Methods',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'E.H. Carr argued in "What is History?" that:',
    correctAnswer: 'History is a dialogue between past and present',
    wrongAnswers: ['Facts speak for themselves', 'Objectivity is easily achieved', 'Historians should avoid interpretation'],
    explanation: 'Carr\'s famous intervention! He argued historians inevitably select and interpret facts. "Study the historian before you study the facts." History isn\'t simply "what happened" but a constructed narrative. This challenged naive empiricism while avoiding total relativism.',
    hint: 'What role does the historian play?',
    tags: ['historiography', 'theory', 'carr'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp-histo-002',
    subject: 'history',
    topic: 'Historiography',
    subtopic: 'Theory',
    difficulty: 'alevel',
    type: 'match',
    question: 'Match each historical approach to its focus:',
    correctAnswer: ['Marxist history → Class conflict and economic structures', 'Annales school → Long-term structures and mentalities', 'Social history → Ordinary people\'s experiences', 'Postmodern history → Language, discourse, and power'],
    wrongAnswers: [],
    explanation: 'Different approaches illuminate different aspects! Marxists examine economic causation. Annales historians studied climate, geography, collective psychology over centuries. Social historians recovered "history from below." Postmodernists question whether we can access the past at all.',
    hint: 'What does each school prioritize studying?',
    tags: ['historiography', 'theory', 'approaches'],
    yearGroup: [12, 13]
  },
  {
    id: 'hist-alevel-exp-histo-003',
    subject: 'history',
    topic: 'Historiography',
    subtopic: 'Sources',
    difficulty: 'alevel',
    type: 'multiple-choice',
    question: 'The "linguistic turn" in history emphasized:',
    correctAnswer: 'How language shapes understanding of reality',
    wrongAnswers: ['The importance of learning languages', 'Primary sources over secondary', 'Quantitative analysis'],
    explanation: 'Post-structuralists argued language doesn\'t just describe reality - it constitutes it! Historical "facts" are textual constructions. This challenged historians to examine their own assumptions. Critics worried it meant "anything goes." Productive debate ensued.',
    hint: 'What relationship does language have with reality?',
    tags: ['historiography', 'linguistic-turn', 'theory'],
    yearGroup: [12, 13]
  },
];

// ============================================
// TERMS
// ============================================

export const alevelHistoryTermsExpanded: TermDefinition[] = [
  {
    id: 'hist-alevel-exp-term-001',
    subject: 'history',
    difficulty: 'alevel',
    term: 'Whig History',
    definition: 'An interpretation viewing history as inevitable progress toward liberty, parliamentary democracy, and Protestant enlightenment',
    example: 'Whig historians like Macaulay celebrated the Glorious Revolution as a triumph of English liberty over tyranny.',
    tags: ['historiography', 'interpretation', 'methodology']
  },
  {
    id: 'hist-alevel-exp-term-002',
    subject: 'history',
    difficulty: 'alevel',
    term: 'Historical Materialism',
    definition: 'Marxist theory that economic conditions (base) determine social, political, and ideological structures (superstructure)',
    example: 'Historical materialists explain the English Civil War as reflecting tensions between feudal and capitalist modes of production.',
    tags: ['marxism', 'theory', 'methodology']
  },
  {
    id: 'hist-alevel-exp-term-003',
    subject: 'history',
    difficulty: 'alevel',
    term: 'Longue Durée',
    definition: 'The Annales school concept of long-term historical structures (geography, climate, mentalities) that change slowly',
    example: 'Braudel\'s "The Mediterranean" studied long-term environmental and social patterns over centuries, not just events.',
    tags: ['annales', 'theory', 'methodology']
  },
  {
    id: 'hist-alevel-exp-term-004',
    subject: 'history',
    difficulty: 'alevel',
    term: 'Teleology',
    definition: 'Interpreting history as progressing toward a predetermined end or goal',
    example: 'Claiming Tudor England was "progressing toward" parliamentary democracy is teleological - it assumes the outcome was inevitable.',
    tags: ['historiography', 'fallacy', 'methodology']
  },
  {
    id: 'hist-alevel-exp-term-005',
    subject: 'history',
    difficulty: 'alevel',
    term: 'Revisionism',
    definition: 'Reinterpreting established historical narratives, often challenging orthodox or "Whig" interpretations',
    example: 'Revisionist Civil War historians like Conrad Russell challenged the idea of long-term constitutional conflict.',
    tags: ['historiography', 'interpretation', 'debate']
  },
  {
    id: 'hist-alevel-exp-term-006',
    subject: 'history',
    difficulty: 'alevel',
    term: 'Microhistory',
    definition: 'Intensive study of small units (a village, individual, trial) to illuminate larger historical processes',
    example: 'Carlo Ginzburg\'s "The Cheese and the Worms" used one miller\'s trial to explore popular religion and culture.',
    tags: ['historiography', 'methodology', 'social-history']
  },
];

// ============================================
// TIMELINE EVENTS
// ============================================

export const alevelHistoryTimelineExpanded: TimelineEvent[] = [
  {
    id: 'hist-alevel-exp-time-001',
    subject: 'history',
    topic: 'Tudor',
    difficulty: 'alevel',
    year: 1536,
    event: 'Dissolution of Smaller Monasteries begins',
    significance: 'Cromwell\'s religious and fiscal policy. Transferred vast wealth to the Crown and gentry, reshaping English society.',
    tags: ['tudor', 'reformation', 'cromwell']
  },
  {
    id: 'hist-alevel-exp-time-002',
    subject: 'history',
    topic: 'Stuart',
    difficulty: 'alevel',
    year: 1649,
    event: 'Execution of Charles I',
    significance: 'Unprecedented regicide. Demonstrated parliamentary sovereignty could override divine right. Shocked Europe.',
    tags: ['stuart', 'civil-war', 'execution']
  },
  {
    id: 'hist-alevel-exp-time-003',
    subject: 'history',
    topic: 'Russia',
    difficulty: 'alevel',
    year: 1917,
    event: 'April Theses published by Lenin',
    significance: 'Lenin rejects cooperation with Provisional Government. "All Power to the Soviets" - sets Bolshevik course toward October.',
    tags: ['russia', 'lenin', 'revolution']
  },
  {
    id: 'hist-alevel-exp-time-004',
    subject: 'history',
    topic: 'Civil Rights',
    difficulty: 'alevel',
    year: 1964,
    event: 'Mississippi Freedom Summer',
    significance: 'Voter registration drive brought national attention after murders of Chaney, Goodman, and Schwerner.',
    tags: ['civil-rights', 'voting', 'activism']
  },
];

// Combined exports
export const alevelHistoryExpanded = [
  ...alevelHistoryTudors,
  ...alevelHistoryStuarts,
  ...alevelHistoryRussia,
  ...alevelHistoryCivilRights,
  ...alevelHistoryHistoriography,
];
