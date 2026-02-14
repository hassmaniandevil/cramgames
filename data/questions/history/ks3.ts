/**
 * KS3 History Question Bank
 * Comprehensive questions for UK curriculum (Years 7-9)
 * Covers: Medieval England, Tudors, Stuarts, Industrial Revolution, British Empire
 */

import { Question, TermDefinition, TimelineEvent } from '../types';

// ============================================================================
// MEDIEVAL ENGLAND (20 Questions)
// ============================================================================

const medievalEnglandQuestions: Question[] = [
  {
    id: 'hist-ks3-medieval-001',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Norman Conquest',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In what year did the Battle of Hastings take place?',
    correctAnswer: '1066',
    wrongAnswers: ['1016', '1166', '1086'],
    explanation: 'The Battle of Hastings took place on 14 October 1066, when William of Normandy defeated King Harold II.',
    tags: ['norman conquest', 'battle of hastings'],
    yearGroup: [7]
  },
  {
    id: 'hist-ks3-medieval-002',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Norman Conquest',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Who won the Battle of Hastings?',
    correctAnswer: 'William, Duke of Normandy',
    wrongAnswers: ['King Harold II', 'Harald Hardrada', 'King Edward the Confessor'],
    explanation: 'William of Normandy (later William I or William the Conqueror) defeated King Harold II and became King of England.',
    tags: ['norman conquest', 'william the conqueror'],
    yearGroup: [7]
  },
  {
    id: 'hist-ks3-medieval-003',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Norman Conquest',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The _____ Tapestry is an embroidered cloth depicting the events leading up to the Norman Conquest.',
    correctAnswer: 'Bayeux',
    explanation: 'The Bayeux Tapestry is a 70-metre-long embroidered cloth that tells the story of the Norman Conquest.',
    tags: ['norman conquest', 'bayeux tapestry'],
    yearGroup: [7]
  },
  {
    id: 'hist-ks3-medieval-004',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Norman Conquest',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Harold II was killed by an arrow to the eye at the Battle of Hastings.',
    correctAnswer: 'True',
    explanation: 'According to tradition and the Bayeux Tapestry, Harold was killed by an arrow to the eye, though this is debated by historians.',
    tags: ['norman conquest', 'harold'],
    yearGroup: [7]
  },
  {
    id: 'hist-ks3-medieval-005',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Feudal System',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Who was at the top of the feudal system?',
    correctAnswer: 'The King',
    wrongAnswers: ['The Pope', 'The Barons', 'The Knights'],
    explanation: 'The feudal system was a hierarchy with the King at the top, followed by barons, knights, and peasants.',
    tags: ['feudal system', 'hierarchy'],
    yearGroup: [7]
  },
  {
    id: 'hist-ks3-medieval-006',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Feudal System',
    difficulty: 'ks3',
    type: 'order',
    question: 'Put the levels of the feudal system in order from highest to lowest.',
    correctAnswer: ['King', 'Barons', 'Knights', 'Peasants'],
    explanation: 'The feudal pyramid had the King at the top, followed by barons (lords), then knights, and peasants (serfs and villeins) at the bottom.',
    tags: ['feudal system', 'hierarchy'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-medieval-007',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Feudal System',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'In the feudal system, peasants who were not free to leave their land were called _____.',
    correctAnswer: 'serfs',
    explanation: 'Serfs were bound to the land and had to work for the lord of the manor. They could not leave without permission.',
    tags: ['feudal system', 'serfs'],
    yearGroup: [7]
  },
  {
    id: 'hist-ks3-medieval-008',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Magna Carta',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In what year was Magna Carta signed?',
    correctAnswer: '1215',
    wrongAnswers: ['1066', '1415', '1115'],
    explanation: 'Magna Carta was sealed by King John at Runnymede on 15 June 1215.',
    tags: ['magna carta', 'king john'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-medieval-009',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Magna Carta',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which king was forced to sign Magna Carta?',
    correctAnswer: 'King John',
    wrongAnswers: ['King Henry II', 'King Richard I', 'King William I'],
    explanation: 'King John was forced by rebellious barons to seal Magna Carta, which limited royal power.',
    tags: ['magna carta', 'king john'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-medieval-010',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Magna Carta',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Magna Carta stated that even the king must obey the law.',
    correctAnswer: 'True',
    explanation: 'Magna Carta established the principle that everyone, including the king, was subject to the law.',
    tags: ['magna carta', 'rule of law'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-medieval-011',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Black Death',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'When did the Black Death first reach England?',
    correctAnswer: '1348',
    wrongAnswers: ['1248', '1448', '1066'],
    explanation: 'The Black Death (bubonic plague) arrived in England in 1348, killing approximately one-third of the population.',
    tags: ['black death', 'plague'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-medieval-012',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Black Death',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What was the Black Death?',
    correctAnswer: 'Bubonic plague spread by fleas on rats',
    wrongAnswers: ['A famine caused by bad harvests', 'A war between England and France', 'A volcanic eruption'],
    explanation: 'The Black Death was bubonic plague, spread by fleas that lived on rats. It caused fever, swellings (buboes), and often death.',
    tags: ['black death', 'plague'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-medieval-013',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Black Death',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The Black Death killed approximately _____ of Englands population.',
    correctAnswer: 'one-third',
    explanation: 'Historians estimate that between one-third and one-half of Englands population died from the Black Death.',
    tags: ['black death', 'population'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-medieval-014',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Black Death',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What happened to the power of peasants after the Black Death?',
    correctAnswer: 'It increased because workers were in short supply',
    wrongAnswers: ['It decreased because they were blamed for the plague', 'It stayed the same', 'All peasants became nobles'],
    explanation: 'With fewer workers available, peasants could demand higher wages and better conditions, giving them more power.',
    tags: ['black death', 'peasants revolt'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-medieval-015',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Norman Conquest',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What was the Domesday Book?',
    correctAnswer: 'A survey of land ownership in England',
    wrongAnswers: ['A book about the end of the world', 'A history of the Norman invasion', 'A collection of laws'],
    explanation: 'The Domesday Book was commissioned by William I in 1085-86 to record who owned land and what it was worth for taxation.',
    tags: ['domesday book', 'william the conqueror'],
    yearGroup: [7]
  },
  {
    id: 'hist-ks3-medieval-016',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Medieval Life',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match the medieval job to its description.',
    correctAnswer: ['Blacksmith - Made metal tools and horseshoes', 'Miller - Ground grain into flour', 'Reeve - Managed the village for the lord', 'Bailiff - Collected rents and fines'],
    explanation: 'Medieval villages had various specialized workers who each played important roles in daily life.',
    tags: ['medieval life', 'jobs'],
    yearGroup: [7]
  },
  {
    id: 'hist-ks3-medieval-017',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Peasants Revolt',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In what year did the Peasants Revolt take place?',
    correctAnswer: '1381',
    wrongAnswers: ['1348', '1215', '1066'],
    explanation: 'The Peasants Revolt of 1381 was a major uprising against high taxes and the treatment of peasants.',
    tags: ['peasants revolt', 'wat tyler'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-medieval-018',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Peasants Revolt',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Who was the leader of the Peasants Revolt?',
    correctAnswer: 'Wat Tyler',
    wrongAnswers: ['Robin Hood', 'Richard II', 'John Ball'],
    explanation: 'Wat Tyler led the peasant army to London in 1381, though John Ball was also an important figure who inspired the revolt.',
    tags: ['peasants revolt', 'wat tyler'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-medieval-019',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Norman Conquest',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Motte and bailey castles were made entirely of stone.',
    correctAnswer: 'False',
    explanation: 'Early motte and bailey castles were made of wood. Stone castles came later as they were more expensive but stronger.',
    tags: ['castles', 'norman conquest'],
    yearGroup: [7]
  },
  {
    id: 'hist-ks3-medieval-020',
    subject: 'history',
    topic: 'Medieval England',
    subtopic: 'Medieval Church',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What was the role of the Church in medieval England?',
    correctAnswer: 'It was extremely powerful and controlled education, medicine, and daily life',
    wrongAnswers: ['It had no power and was ignored', 'It only dealt with religious ceremonies', 'It was banned by the king'],
    explanation: 'The medieval Church was incredibly powerful, controlling education, caring for the sick, and influencing all aspects of life.',
    tags: ['medieval church', 'religion'],
    yearGroup: [7, 8]
  }
];

// ============================================================================
// TUDORS (20 Questions)
// ============================================================================

const tudorsQuestions: Question[] = [
  {
    id: 'hist-ks3-tudors-001',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Henry VIII',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How many wives did Henry VIII have?',
    correctAnswer: 'Six',
    wrongAnswers: ['Four', 'Five', 'Eight'],
    explanation: 'Henry VIII had six wives: Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, and Catherine Parr.',
    tags: ['henry viii', 'wives'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-tudors-002',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Henry VIII',
    difficulty: 'ks3',
    type: 'order',
    question: 'Put Henry VIIIs wives in the correct order.',
    correctAnswer: ['Catherine of Aragon', 'Anne Boleyn', 'Jane Seymour', 'Anne of Cleves', 'Catherine Howard', 'Catherine Parr'],
    explanation: 'Henry VIII married his six wives in this order. A rhyme to remember: divorced, beheaded, died, divorced, beheaded, survived.',
    tags: ['henry viii', 'wives'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-tudors-003',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Reformation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why did Henry VIII break from the Roman Catholic Church?',
    correctAnswer: 'The Pope would not annul his marriage to Catherine of Aragon',
    wrongAnswers: ['He did not believe in God', 'He wanted to become Pope himself', 'The Church was too wealthy'],
    explanation: 'Henry wanted to divorce Catherine of Aragon to marry Anne Boleyn, but the Pope refused. Henry broke from Rome and made himself head of the Church of England.',
    tags: ['reformation', 'henry viii'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-tudors-004',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Reformation',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'Henry VIII became the Supreme Head of the Church of _____.',
    correctAnswer: 'England',
    explanation: 'In 1534, the Act of Supremacy made Henry VIII the Supreme Head of the Church of England, breaking ties with Rome.',
    tags: ['reformation', 'church of england'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-tudors-005',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Reformation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What was the Dissolution of the Monasteries?',
    correctAnswer: 'Henry VIII closing monasteries and taking their wealth',
    wrongAnswers: ['Building new monasteries across England', 'Making all monks bishops', 'A religious festival'],
    explanation: 'Between 1536 and 1541, Henry VIII closed all monasteries in England, taking their land and wealth for the crown.',
    tags: ['dissolution', 'monasteries'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-tudors-006',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Henry VIII',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which wife gave Henry VIII the son he desperately wanted?',
    correctAnswer: 'Jane Seymour',
    wrongAnswers: ['Catherine of Aragon', 'Anne Boleyn', 'Catherine Parr'],
    explanation: 'Jane Seymour gave birth to Edward (later Edward VI) in 1537, but died shortly after childbirth.',
    tags: ['henry viii', 'jane seymour', 'edward vi'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-tudors-007',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Elizabeth I',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Who was Elizabeth I the daughter of?',
    correctAnswer: 'Henry VIII and Anne Boleyn',
    wrongAnswers: ['Henry VIII and Catherine of Aragon', 'Henry VII and Elizabeth of York', 'Edward VI and Mary I'],
    explanation: 'Elizabeth I was the daughter of Henry VIII and his second wife Anne Boleyn, who was executed in 1536.',
    tags: ['elizabeth i', 'anne boleyn'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-tudors-008',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Elizabeth I',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Elizabeth I never married and was known as the Virgin Queen.',
    correctAnswer: 'True',
    explanation: 'Elizabeth I chose never to marry, using the possibility of marriage as a diplomatic tool. She was called the Virgin Queen.',
    tags: ['elizabeth i', 'virgin queen'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-tudors-009',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Elizabeth I',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What happened to the Spanish Armada in 1588?',
    correctAnswer: 'It was defeated by the English navy and bad weather',
    wrongAnswers: ['It successfully invaded England', 'It conquered Scotland', 'It was welcomed peacefully'],
    explanation: 'The Spanish Armada of 1588 was defeated by English ships and storms, securing Englands independence from Spain.',
    tags: ['spanish armada', 'elizabeth i'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-tudors-010',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Elizabeth I',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The period of Elizabeth Is reign is often called the _____ Age.',
    correctAnswer: 'Golden',
    explanation: 'The Elizabethan era is called the Golden Age due to flourishing arts, literature (Shakespeare), and exploration.',
    tags: ['elizabeth i', 'golden age'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-tudors-011',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Mary I',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why was Mary I nicknamed Bloody Mary?',
    correctAnswer: 'She burned Protestants for heresy',
    wrongAnswers: ['She loved eating rare meat', 'She started many wars', 'She had red hair'],
    explanation: 'Mary I, a Catholic, had about 280 Protestants burned at the stake during her reign, earning her the nickname Bloody Mary.',
    tags: ['mary i', 'bloody mary'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-tudors-012',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Tudor Exploration',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which famous explorer sailed around the world during Elizabeth Is reign?',
    correctAnswer: 'Sir Francis Drake',
    wrongAnswers: ['Christopher Columbus', 'Captain Cook', 'Vasco da Gama'],
    explanation: 'Sir Francis Drake circumnavigated the globe between 1577-1580 aboard the Golden Hind.',
    tags: ['exploration', 'francis drake'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-tudors-013',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Tudor Culture',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which famous playwright wrote during Elizabeth Is reign?',
    correctAnswer: 'William Shakespeare',
    wrongAnswers: ['Charles Dickens', 'Geoffrey Chaucer', 'Oscar Wilde'],
    explanation: 'William Shakespeare wrote many of his famous plays during the Elizabethan era, including Romeo and Juliet and Hamlet.',
    tags: ['shakespeare', 'elizabethan era'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-tudors-014',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Reformation',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match the Tudor monarch to their religion.',
    correctAnswer: ['Henry VIII - Founded Church of England', 'Edward VI - Protestant', 'Mary I - Catholic', 'Elizabeth I - Protestant (moderate)'],
    explanation: 'Religion changed frequently under Tudor monarchs, causing religious turmoil for ordinary people.',
    tags: ['reformation', 'religion'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-tudors-015',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Tudor Dynasty',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which battle established the Tudor dynasty in 1485?',
    correctAnswer: 'Battle of Bosworth Field',
    wrongAnswers: ['Battle of Hastings', 'Battle of Agincourt', 'Battle of Naseby'],
    explanation: 'Henry VII defeated Richard III at Bosworth Field in 1485, becoming the first Tudor monarch.',
    tags: ['henry vii', 'bosworth'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-tudors-016',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Elizabeth I',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Who was Mary, Queen of Scots to Elizabeth I?',
    correctAnswer: 'Her cousin',
    wrongAnswers: ['Her sister', 'Her mother', 'Her aunt'],
    explanation: 'Mary, Queen of Scots was Elizabeths cousin. Elizabeth eventually had her executed in 1587 for plotting against her.',
    tags: ['elizabeth i', 'mary queen of scots'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-tudors-017',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Henry VIII',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Anne Boleyn was executed for treason.',
    correctAnswer: 'True',
    explanation: 'Anne Boleyn was accused of treason, adultery, and incest. She was beheaded at the Tower of London in 1536.',
    tags: ['anne boleyn', 'henry viii'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-tudors-018',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Tudor Life',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What were Tudor houses typically made of?',
    correctAnswer: 'Timber frames with wattle and daub',
    wrongAnswers: ['Concrete and steel', 'Glass and metal', 'Only stone'],
    explanation: 'Tudor houses typically had timber frames filled with wattle (woven sticks) and daub (mud mixture), creating distinctive black and white buildings.',
    tags: ['tudor life', 'architecture'],
    yearGroup: [7]
  },
  {
    id: 'hist-ks3-tudors-019',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Tudor Entertainment',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What was the name of Shakespeares famous theatre?',
    correctAnswer: 'The Globe',
    wrongAnswers: ['The Colosseum', 'The Royal Theatre', 'The Rose'],
    explanation: 'The Globe Theatre was built in 1599 in Southwark, London. Many of Shakespeares plays were first performed there.',
    tags: ['shakespeare', 'globe theatre'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-tudors-020',
    subject: 'history',
    topic: 'Tudors',
    subtopic: 'Edward VI',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'How old was Edward VI when he became king?',
    correctAnswer: '9 years old',
    wrongAnswers: ['15 years old', '21 years old', '5 years old'],
    explanation: 'Edward VI became king at age 9 in 1547 after his father Henry VIII died. He died at just 15 in 1553.',
    tags: ['edward vi', 'tudor'],
    yearGroup: [7, 8]
  }
];

// ============================================================================
// STUARTS (20 Questions)
// ============================================================================

const stuartsQuestions: Question[] = [
  {
    id: 'hist-ks3-stuarts-001',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'James I',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Who was the first Stuart king of England?',
    correctAnswer: 'James I (James VI of Scotland)',
    wrongAnswers: ['Charles I', 'Charles II', 'William III'],
    explanation: 'James I became king in 1603, uniting the crowns of England and Scotland. He was already James VI of Scotland.',
    tags: ['james i', 'stuart'],
    yearGroup: [8]
  },
  {
    id: 'hist-ks3-stuarts-002',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Gunpowder Plot',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In what year was the Gunpowder Plot?',
    correctAnswer: '1605',
    wrongAnswers: ['1666', '1649', '1588'],
    explanation: 'The Gunpowder Plot of 1605 was a failed attempt by Catholic conspirators to blow up Parliament.',
    tags: ['gunpowder plot', 'guy fawkes'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-stuarts-003',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Gunpowder Plot',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: '_____ Fawkes was discovered guarding barrels of gunpowder beneath Parliament.',
    correctAnswer: 'Guy',
    explanation: 'Guy Fawkes was caught in the cellars beneath Parliament on 5 November 1605, and this date is still commemorated with bonfires.',
    tags: ['gunpowder plot', 'guy fawkes'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-stuarts-004',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'English Civil War',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'When did the English Civil War begin?',
    correctAnswer: '1642',
    wrongAnswers: ['1605', '1666', '1688'],
    explanation: 'The English Civil War began in 1642 as a conflict between King Charles I and Parliament.',
    tags: ['civil war', 'charles i'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-stuarts-005',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'English Civil War',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What were the two sides in the English Civil War called?',
    correctAnswer: 'Royalists (Cavaliers) and Parliamentarians (Roundheads)',
    wrongAnswers: ['Tudors and Stuarts', 'Catholics and Protestants', 'English and Scottish'],
    explanation: 'The Royalists (Cavaliers) supported the king, while Parliamentarians (Roundheads) supported Parliament.',
    tags: ['civil war', 'cavaliers', 'roundheads'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-stuarts-006',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'English Civil War',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Who led the Parliamentary army to victory?',
    correctAnswer: 'Oliver Cromwell',
    wrongAnswers: ['Charles I', 'Guy Fawkes', 'William of Orange'],
    explanation: 'Oliver Cromwell created the New Model Army and led Parliament to victory in the Civil War.',
    tags: ['civil war', 'cromwell'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-stuarts-007',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Execution of Charles I',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What happened to King Charles I in 1649?',
    correctAnswer: 'He was tried and executed for treason',
    wrongAnswers: ['He escaped to France', 'He won the Civil War', 'He abdicated peacefully'],
    explanation: 'Charles I was tried for treason against his own people and executed outside the Banqueting House in London on 30 January 1649.',
    tags: ['charles i', 'execution'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-stuarts-008',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Commonwealth',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'After Charles I was executed, England became a _____ (republic) ruled by Parliament.',
    correctAnswer: 'Commonwealth',
    explanation: 'From 1649-1660, England was a republic called the Commonwealth, without a monarch.',
    tags: ['commonwealth', 'republic'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-stuarts-009',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Cromwell',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What title did Oliver Cromwell take in 1653?',
    correctAnswer: 'Lord Protector',
    wrongAnswers: ['King', 'Emperor', 'Prime Minister'],
    explanation: 'Cromwell rejected the title of king but became Lord Protector, essentially ruling as a military dictator.',
    tags: ['cromwell', 'lord protector'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-stuarts-010',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Restoration',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What was the Restoration of 1660?',
    correctAnswer: 'The return of the monarchy under Charles II',
    wrongAnswers: ['The rebuilding of London after the fire', 'The restoration of Catholic churches', 'The return of Cromwell'],
    explanation: 'The Restoration saw Charles II return from exile to become king, restoring the monarchy after the Commonwealth.',
    tags: ['restoration', 'charles ii'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-stuarts-011',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Great Plague',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'When did the Great Plague of London occur?',
    correctAnswer: '1665',
    wrongAnswers: ['1666', '1348', '1605'],
    explanation: 'The Great Plague of 1665 killed approximately 100,000 Londoners, about a quarter of the citys population.',
    tags: ['great plague', '1665'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-stuarts-012',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Great Fire',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'When did the Great Fire of London occur?',
    correctAnswer: '1666',
    wrongAnswers: ['1665', '1605', '1688'],
    explanation: 'The Great Fire of London burned for four days in September 1666, destroying much of the city.',
    tags: ['great fire', '1666'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-stuarts-013',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Great Fire',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The Great Fire of London started in a bakery on _____ Lane.',
    correctAnswer: 'Pudding',
    explanation: 'The fire started in Thomas Farriners bakery on Pudding Lane in the early hours of 2 September 1666.',
    tags: ['great fire', 'pudding lane'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-stuarts-014',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Great Fire',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'The Great Fire of London helped end the plague by killing the rats.',
    correctAnswer: 'True',
    explanation: 'While debated by historians, the fire likely helped end the plague by destroying rat-infested slums and infected materials.',
    tags: ['great fire', 'plague'],
    yearGroup: [7, 8]
  },
  {
    id: 'hist-ks3-stuarts-015',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Glorious Revolution',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What was the Glorious Revolution of 1688?',
    correctAnswer: 'When William of Orange replaced James II as king',
    wrongAnswers: ['When Charles II was restored', 'When Cromwell took power', 'When England became a republic'],
    explanation: 'The Glorious Revolution saw Protestant William of Orange invited to replace Catholic James II, largely without bloodshed.',
    tags: ['glorious revolution', 'william of orange'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-stuarts-016',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Glorious Revolution',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What important document was passed in 1689 limiting royal power?',
    correctAnswer: 'The Bill of Rights',
    wrongAnswers: ['Magna Carta', 'The Constitution', 'The Declaration of Independence'],
    explanation: 'The Bill of Rights 1689 limited royal power, guaranteed free elections, and established Parliament as the supreme authority.',
    tags: ['bill of rights', 'constitutional monarchy'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-stuarts-017',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'English Civil War',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match the English Civil War term to its meaning.',
    correctAnswer: ['Cavaliers - Royalist supporters of the King', 'Roundheads - Parliamentary supporters', 'New Model Army - Cromwells professional army', 'Rump Parliament - Parliament after Pride Purge'],
    explanation: 'Understanding these terms helps explain the complex politics of the English Civil War period.',
    tags: ['civil war', 'terminology'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-stuarts-018',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Cromwell',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Oliver Cromwell banned Christmas celebrations during his rule.',
    correctAnswer: 'True',
    explanation: 'Cromwell and the Puritans banned Christmas as they saw it as a Catholic celebration involving too much eating and drinking.',
    tags: ['cromwell', 'puritans'],
    yearGroup: [8]
  },
  {
    id: 'hist-ks3-stuarts-019',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Charles I',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What was Charles I accused of that led to his execution?',
    correctAnswer: 'Tyranny and treason against his own people',
    wrongAnswers: ['Murder', 'Theft from the treasury', 'Being Catholic'],
    explanation: 'Charles I was tried for treason - for levying war against Parliament and the people of England.',
    tags: ['charles i', 'treason'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-stuarts-020',
    subject: 'history',
    topic: 'Stuarts',
    subtopic: 'Samuel Pepys',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Who wrote a famous diary describing the Great Fire and Plague?',
    correctAnswer: 'Samuel Pepys',
    wrongAnswers: ['Isaac Newton', 'Christopher Wren', 'John Milton'],
    explanation: 'Samuel Pepys diary is one of the most important primary sources for Stuart England, describing major events.',
    tags: ['samuel pepys', 'diary'],
    yearGroup: [7, 8]
  }
];

// ============================================================================
// INDUSTRIAL REVOLUTION (12 Questions)
// ============================================================================

const industrialRevolutionQuestions: Question[] = [
  {
    id: 'hist-ks3-industrial-001',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Origins',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'When did the Industrial Revolution begin in Britain?',
    correctAnswer: 'Around 1760',
    wrongAnswers: ['Around 1560', 'Around 1860', 'Around 1900'],
    explanation: 'The Industrial Revolution began around 1760 in Britain, transforming the country from agricultural to industrial.',
    tags: ['industrial revolution', 'origins'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-industrial-002',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Steam Power',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'James _____ improved the steam engine, making it practical for industry.',
    correctAnswer: 'Watt',
    explanation: 'James Watt improved the steam engine in the 1760s, making it much more efficient and practical for factories.',
    tags: ['steam engine', 'james watt'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-industrial-003',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Factories',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What was the factory system?',
    correctAnswer: 'Workers gathered in one building to work on machines',
    wrongAnswers: ['People working from home', 'Farming by machine', 'A type of government'],
    explanation: 'The factory system brought workers together under one roof to operate machines, replacing the domestic system of home working.',
    tags: ['factory system', 'industrialization'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-industrial-004',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Transport',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which invention revolutionised transport in the early 1800s?',
    correctAnswer: 'The steam railway',
    wrongAnswers: ['The car', 'The aeroplane', 'The bicycle'],
    explanation: 'Steam railways transformed transport. The first public railway opened in 1825 between Stockton and Darlington.',
    tags: ['railways', 'transport'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-industrial-005',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Working Conditions',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Children as young as five worked in factories and mines during the Industrial Revolution.',
    correctAnswer: 'True',
    explanation: 'Young children often worked in dangerous conditions. Factory Acts gradually improved conditions and limited child labour.',
    tags: ['child labour', 'working conditions'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-industrial-006',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Textile Industry',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which industry was transformed first by the Industrial Revolution?',
    correctAnswer: 'Textiles (cotton and wool)',
    wrongAnswers: ['Steel', 'Chemicals', 'Electronics'],
    explanation: 'The textile industry, especially cotton, was the first to be transformed by machines like the spinning jenny and power loom.',
    tags: ['textiles', 'cotton'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-industrial-007',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Urbanisation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What was urbanisation during the Industrial Revolution?',
    correctAnswer: 'People moving from countryside to towns and cities',
    wrongAnswers: ['People moving to the countryside', 'Building new roads', 'Creating new farms'],
    explanation: 'Urbanisation meant millions moved to growing industrial cities like Manchester and Birmingham for factory work.',
    tags: ['urbanisation', 'cities'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-industrial-008',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Inventors',
    difficulty: 'ks3',
    type: 'match',
    question: 'Match the inventor to their invention.',
    correctAnswer: ['James Watt - Improved steam engine', 'George Stephenson - Rocket locomotive', 'Richard Arkwright - Water frame', 'James Hargreaves - Spinning jenny'],
    explanation: 'These inventors transformed British industry with their machines and innovations.',
    tags: ['inventors', 'inventions'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-industrial-009',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Mining',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why was coal so important to the Industrial Revolution?',
    correctAnswer: 'It powered steam engines and smelted iron',
    wrongAnswers: ['It was used for cooking only', 'It was exported to other countries', 'It was used for lighting'],
    explanation: 'Coal was essential fuel for steam engines and for smelting iron ore into iron, both vital to industrialization.',
    tags: ['coal', 'energy'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-industrial-010',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Living Conditions',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What were living conditions like in industrial cities?',
    correctAnswer: 'Overcrowded, dirty, and disease-ridden',
    wrongAnswers: ['Clean and spacious', 'Better than in the countryside', 'Luxurious for all workers'],
    explanation: 'Industrial cities were often overcrowded with poor sanitation, leading to outbreaks of cholera and other diseases.',
    tags: ['living conditions', 'cities'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-industrial-011',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Railways',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'The first public passenger railway ran from Stockton to _____ in 1825.',
    correctAnswer: 'Darlington',
    explanation: 'The Stockton and Darlington Railway opened in 1825, marking the beginning of the railway age.',
    tags: ['railways', 'stockton darlington'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-industrial-012',
    subject: 'history',
    topic: 'Industrial Revolution',
    subtopic: 'Social Impact',
    difficulty: 'ks3',
    type: 'order',
    question: 'Put these stages of industrial development in order.',
    correctAnswer: ['Domestic system (working from home)', 'Water-powered mills', 'Steam-powered factories', 'Railways connect industrial centres'],
    explanation: 'Industrial development progressed from home working to water power, then steam power, with railways connecting everything.',
    tags: ['industrialization', 'development'],
    yearGroup: [8, 9]
  }
];

// ============================================================================
// BRITISH EMPIRE INTRODUCTION (8 Questions)
// ============================================================================

const britishEmpireQuestions: Question[] = [
  {
    id: 'hist-ks3-empire-001',
    subject: 'history',
    topic: 'British Empire',
    subtopic: 'Overview',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'At its height, what fraction of the worlds land area was part of the British Empire?',
    correctAnswer: 'About one quarter',
    wrongAnswers: ['About half', 'About one tenth', 'Almost all of it'],
    explanation: 'At its peak in 1920, the British Empire covered about 25% of the worlds land surface and ruled over 400 million people.',
    tags: ['british empire', 'size'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-empire-002',
    subject: 'history',
    topic: 'British Empire',
    subtopic: 'Slave Trade',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What was the triangular trade?',
    correctAnswer: 'Trade route connecting Britain, Africa, and the Americas',
    wrongAnswers: ['Trade between three European countries', 'A type of cargo ship', 'Trade within Britain only'],
    explanation: 'The triangular trade involved shipping goods to Africa, enslaved people to the Americas, and sugar/tobacco back to Britain.',
    tags: ['slave trade', 'triangular trade'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-empire-003',
    subject: 'history',
    topic: 'British Empire',
    subtopic: 'Slave Trade',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'When was the slave trade abolished in the British Empire?',
    correctAnswer: '1807',
    wrongAnswers: ['1707', '1907', '1833'],
    explanation: 'The Slave Trade Act 1807 abolished the slave trade. Slavery itself was abolished in 1833.',
    tags: ['abolition', 'slave trade'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-empire-004',
    subject: 'history',
    topic: 'British Empire',
    subtopic: 'India',
    difficulty: 'ks3',
    type: 'fill-blank',
    question: 'India was known as the _____ in the Crown of the British Empire.',
    correctAnswer: 'Jewel',
    explanation: 'India was called the Jewel in the Crown because of its vast wealth, population, and strategic importance.',
    tags: ['india', 'british raj'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-empire-005',
    subject: 'history',
    topic: 'British Empire',
    subtopic: 'Colonisation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which company controlled large parts of India before British government rule?',
    correctAnswer: 'The East India Company',
    wrongAnswers: ['The West India Company', 'The Royal Trading Company', 'The British India Company'],
    explanation: 'The East India Company controlled India until 1858, when the British government took direct control after the Indian Rebellion.',
    tags: ['east india company', 'india'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-empire-006',
    subject: 'history',
    topic: 'British Empire',
    subtopic: 'Abolition',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Who was a famous campaigner for the abolition of slavery?',
    correctAnswer: 'William Wilberforce',
    wrongAnswers: ['William Shakespeare', 'William the Conqueror', 'William Pitt'],
    explanation: 'William Wilberforce was an MP who campaigned for decades to abolish the slave trade, finally succeeding in 1807.',
    tags: ['abolition', 'wilberforce'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-empire-007',
    subject: 'history',
    topic: 'British Empire',
    subtopic: 'Colonisation',
    difficulty: 'ks3',
    type: 'true-false',
    question: 'Britain established colonies in North America, Australia, Africa, and Asia.',
    correctAnswer: 'True',
    explanation: 'The British Empire spread across all continents, including colonies like America (until 1776), Australia, India, and parts of Africa.',
    tags: ['colonies', 'empire'],
    yearGroup: [8, 9]
  },
  {
    id: 'hist-ks3-empire-008',
    subject: 'history',
    topic: 'British Empire',
    subtopic: 'Impact',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which statement best describes the impact of the British Empire?',
    correctAnswer: 'It had both positive and negative effects on colonised peoples',
    wrongAnswers: ['It was entirely beneficial to all', 'It had no lasting effects', 'It only affected Britain'],
    explanation: 'The Empire brought some infrastructure and education but also exploitation, racism, and destruction of local cultures.',
    tags: ['empire', 'impact'],
    yearGroup: [8, 9]
  }
];

// ============================================================================
// KEY TERMS AND DEFINITIONS
// ============================================================================

export const ks3HistoryTerms: TermDefinition[] = [
  {
    id: 'hist-ks3-term-001',
    subject: 'history',
    topic: 'Medieval England',
    difficulty: 'ks3',
    term: 'Feudal System',
    definition: 'A social and economic system where land was exchanged for military service and loyalty, creating a hierarchy from king to peasant.',
    example: 'A knight held land from a baron in exchange for fighting when called upon.',
    tags: ['feudalism', 'medieval']
  },
  {
    id: 'hist-ks3-term-002',
    subject: 'history',
    topic: 'Medieval England',
    difficulty: 'ks3',
    term: 'Serf',
    definition: 'A peasant who was bound to the land and could not leave without the lords permission.',
    example: 'Serfs had to work several days a week on the lords land without payment.',
    tags: ['peasants', 'feudalism']
  },
  {
    id: 'hist-ks3-term-003',
    subject: 'history',
    topic: 'Medieval England',
    difficulty: 'ks3',
    term: 'Magna Carta',
    definition: 'A charter signed in 1215 establishing that the king was subject to law and protecting certain rights.',
    example: 'Magna Carta stated that no free man could be imprisoned without lawful judgment.',
    tags: ['constitutional', 'rights']
  },
  {
    id: 'hist-ks3-term-004',
    subject: 'history',
    topic: 'Medieval England',
    difficulty: 'ks3',
    term: 'Black Death',
    definition: 'A devastating plague pandemic that killed approximately one-third of Europes population in the mid-14th century.',
    example: 'The Black Death arrived in England in 1348, spread by fleas on rats.',
    tags: ['plague', 'disease']
  },
  {
    id: 'hist-ks3-term-005',
    subject: 'history',
    topic: 'Tudors',
    difficulty: 'ks3',
    term: 'Reformation',
    definition: 'The religious movement that split Western Christianity into Catholic and Protestant churches.',
    example: 'Henry VIII broke from Rome during the English Reformation to form the Church of England.',
    tags: ['religion', 'protestantism']
  },
  {
    id: 'hist-ks3-term-006',
    subject: 'history',
    topic: 'Tudors',
    difficulty: 'ks3',
    term: 'Dissolution of the Monasteries',
    definition: 'Henry VIIIs closure of Catholic monasteries between 1536-1541, seizing their wealth and land.',
    example: 'Fountains Abbey in Yorkshire was closed during the Dissolution.',
    tags: ['henry viii', 'monasteries']
  },
  {
    id: 'hist-ks3-term-007',
    subject: 'history',
    topic: 'Tudors',
    difficulty: 'ks3',
    term: 'Spanish Armada',
    definition: 'The fleet of 130 ships sent by Spain to invade England in 1588, which was defeated.',
    example: 'English fireships and storms helped defeat the Spanish Armada.',
    tags: ['elizabeth i', 'spain']
  },
  {
    id: 'hist-ks3-term-008',
    subject: 'history',
    topic: 'Stuarts',
    difficulty: 'ks3',
    term: 'Divine Right of Kings',
    definition: 'The belief that monarchs derive their authority directly from God and cannot be challenged.',
    example: 'Charles I believed in the Divine Right of Kings, contributing to conflict with Parliament.',
    tags: ['monarchy', 'charles i']
  },
  {
    id: 'hist-ks3-term-009',
    subject: 'history',
    topic: 'Stuarts',
    difficulty: 'ks3',
    term: 'Cavaliers',
    definition: 'Supporters of King Charles I during the English Civil War, also called Royalists.',
    example: 'Cavaliers were often wealthy nobles who fought for the kings cause.',
    tags: ['civil war', 'royalists']
  },
  {
    id: 'hist-ks3-term-010',
    subject: 'history',
    topic: 'Stuarts',
    difficulty: 'ks3',
    term: 'Roundheads',
    definition: 'Supporters of Parliament during the English Civil War, named for their short haircuts.',
    example: 'Oliver Cromwell led the Roundhead forces to victory.',
    tags: ['civil war', 'parliament']
  },
  {
    id: 'hist-ks3-term-011',
    subject: 'history',
    topic: 'Stuarts',
    difficulty: 'ks3',
    term: 'Commonwealth',
    definition: 'The republic that governed England from 1649-1660 after Charles I was executed.',
    example: 'During the Commonwealth, England had no monarch.',
    tags: ['republic', 'cromwell']
  },
  {
    id: 'hist-ks3-term-012',
    subject: 'history',
    topic: 'Stuarts',
    difficulty: 'ks3',
    term: 'Restoration',
    definition: 'The return of the monarchy in 1660 when Charles II became king.',
    example: 'The Restoration ended Puritan rule and brought back theatres and celebrations.',
    tags: ['charles ii', 'monarchy']
  },
  {
    id: 'hist-ks3-term-013',
    subject: 'history',
    topic: 'Stuarts',
    difficulty: 'ks3',
    term: 'Glorious Revolution',
    definition: 'The 1688 overthrow of James II and his replacement by William III and Mary II.',
    example: 'The Glorious Revolution was largely bloodless and established constitutional monarchy.',
    tags: ['1688', 'constitutional monarchy']
  },
  {
    id: 'hist-ks3-term-014',
    subject: 'history',
    topic: 'Industrial Revolution',
    difficulty: 'ks3',
    term: 'Industrialisation',
    definition: 'The transformation from an agricultural economy to one based on manufacturing and factories.',
    example: 'Industrialisation changed Britain from a farming nation to the workshop of the world.',
    tags: ['factories', 'manufacturing']
  },
  {
    id: 'hist-ks3-term-015',
    subject: 'history',
    topic: 'Industrial Revolution',
    difficulty: 'ks3',
    term: 'Urbanisation',
    definition: 'The movement of people from rural areas to towns and cities.',
    example: 'Manchester grew from a small town to a major city due to urbanisation.',
    tags: ['cities', 'population']
  },
  {
    id: 'hist-ks3-term-016',
    subject: 'history',
    topic: 'Industrial Revolution',
    difficulty: 'ks3',
    term: 'Factory System',
    definition: 'A method of manufacturing where workers gather in one place to operate machines.',
    example: 'The factory system replaced cottage industries where people worked from home.',
    tags: ['factories', 'workers']
  },
  {
    id: 'hist-ks3-term-017',
    subject: 'history',
    topic: 'British Empire',
    difficulty: 'ks3',
    term: 'Colony',
    definition: 'A territory under the political control of a distant country.',
    example: 'America was a British colony until it declared independence in 1776.',
    tags: ['empire', 'colonialism']
  },
  {
    id: 'hist-ks3-term-018',
    subject: 'history',
    topic: 'British Empire',
    difficulty: 'ks3',
    term: 'Triangular Trade',
    definition: 'The three-legged trading route between Europe, Africa, and the Americas involving slaves and goods.',
    example: 'Ships carried goods to Africa, enslaved people to America, and sugar back to Britain.',
    tags: ['slave trade', 'commerce']
  },
  {
    id: 'hist-ks3-term-019',
    subject: 'history',
    topic: 'British Empire',
    difficulty: 'ks3',
    term: 'Abolition',
    definition: 'The act of officially ending a practice, particularly referring to ending slavery.',
    example: 'The abolition of slavery in the British Empire came in 1833.',
    tags: ['slavery', 'reform']
  },
  {
    id: 'hist-ks3-term-020',
    subject: 'history',
    topic: 'General',
    difficulty: 'ks3',
    term: 'Primary Source',
    definition: 'An original document or object created at the time being studied.',
    example: 'The Bayeux Tapestry is a primary source for the Norman Conquest.',
    tags: ['historical skills', 'sources']
  }
];

// ============================================================================
// TIMELINE EVENTS
// ============================================================================

export const ks3HistoryTimeline: TimelineEvent[] = [
  {
    id: 'hist-ks3-timeline-001',
    subject: 'history',
    topic: 'Medieval England',
    difficulty: 'ks3',
    event: 'Battle of Hastings',
    year: 1066,
    description: 'William of Normandy defeats King Harold II, beginning Norman rule of England.'
  },
  {
    id: 'hist-ks3-timeline-002',
    subject: 'history',
    topic: 'Medieval England',
    difficulty: 'ks3',
    event: 'Domesday Book completed',
    year: 1086,
    description: 'William I completes the great survey of English land ownership.'
  },
  {
    id: 'hist-ks3-timeline-003',
    subject: 'history',
    topic: 'Medieval England',
    difficulty: 'ks3',
    event: 'Magna Carta signed',
    year: 1215,
    description: 'King John is forced to seal Magna Carta, limiting royal power.'
  },
  {
    id: 'hist-ks3-timeline-004',
    subject: 'history',
    topic: 'Medieval England',
    difficulty: 'ks3',
    event: 'Black Death arrives in England',
    year: 1348,
    description: 'The bubonic plague reaches England, killing approximately one-third of the population.'
  },
  {
    id: 'hist-ks3-timeline-005',
    subject: 'history',
    topic: 'Medieval England',
    difficulty: 'ks3',
    event: 'Peasants Revolt',
    year: 1381,
    description: 'Peasants march on London demanding an end to serfdom and high taxes.'
  },
  {
    id: 'hist-ks3-timeline-006',
    subject: 'history',
    topic: 'Tudors',
    difficulty: 'ks3',
    event: 'Battle of Bosworth Field',
    year: 1485,
    description: 'Henry Tudor defeats Richard III, becoming Henry VII and founding the Tudor dynasty.'
  },
  {
    id: 'hist-ks3-timeline-007',
    subject: 'history',
    topic: 'Tudors',
    difficulty: 'ks3',
    event: 'Henry VIII becomes king',
    year: 1509,
    description: 'Henry VIII succeeds his father Henry VII to the throne.'
  },
  {
    id: 'hist-ks3-timeline-008',
    subject: 'history',
    topic: 'Tudors',
    difficulty: 'ks3',
    event: 'Act of Supremacy',
    year: 1534,
    description: 'Henry VIII becomes Supreme Head of the Church of England, breaking from Rome.'
  },
  {
    id: 'hist-ks3-timeline-009',
    subject: 'history',
    topic: 'Tudors',
    difficulty: 'ks3',
    event: 'Dissolution of the Monasteries begins',
    year: 1536,
    description: 'Henry VIII begins closing monasteries and seizing their wealth.'
  },
  {
    id: 'hist-ks3-timeline-010',
    subject: 'history',
    topic: 'Tudors',
    difficulty: 'ks3',
    event: 'Elizabeth I becomes queen',
    year: 1558,
    description: 'Elizabeth I succeeds her half-sister Mary I, beginning the Elizabethan era.'
  },
  {
    id: 'hist-ks3-timeline-011',
    subject: 'history',
    topic: 'Tudors',
    difficulty: 'ks3',
    event: 'Defeat of the Spanish Armada',
    year: 1588,
    description: 'The English navy and storms defeat the Spanish invasion fleet.'
  },
  {
    id: 'hist-ks3-timeline-012',
    subject: 'history',
    topic: 'Stuarts',
    difficulty: 'ks3',
    event: 'James I becomes king of England',
    year: 1603,
    description: 'James VI of Scotland becomes James I of England, uniting the crowns.'
  },
  {
    id: 'hist-ks3-timeline-013',
    subject: 'history',
    topic: 'Stuarts',
    difficulty: 'ks3',
    event: 'Gunpowder Plot',
    year: 1605,
    description: 'Guy Fawkes and Catholic conspirators fail to blow up Parliament.'
  },
  {
    id: 'hist-ks3-timeline-014',
    subject: 'history',
    topic: 'Stuarts',
    difficulty: 'ks3',
    event: 'English Civil War begins',
    year: 1642,
    description: 'War breaks out between King Charles I and Parliament.'
  },
  {
    id: 'hist-ks3-timeline-015',
    subject: 'history',
    topic: 'Stuarts',
    difficulty: 'ks3',
    event: 'Execution of Charles I',
    year: 1649,
    description: 'King Charles I is executed for treason; England becomes a republic.'
  },
  {
    id: 'hist-ks3-timeline-016',
    subject: 'history',
    topic: 'Stuarts',
    difficulty: 'ks3',
    event: 'The Restoration',
    year: 1660,
    description: 'Charles II returns from exile and the monarchy is restored.'
  },
  {
    id: 'hist-ks3-timeline-017',
    subject: 'history',
    topic: 'Stuarts',
    difficulty: 'ks3',
    event: 'Great Plague of London',
    year: 1665,
    description: 'Bubonic plague kills approximately 100,000 Londoners.'
  },
  {
    id: 'hist-ks3-timeline-018',
    subject: 'history',
    topic: 'Stuarts',
    difficulty: 'ks3',
    event: 'Great Fire of London',
    year: 1666,
    description: 'Fire destroys much of London, starting in Pudding Lane.'
  },
  {
    id: 'hist-ks3-timeline-019',
    subject: 'history',
    topic: 'Stuarts',
    difficulty: 'ks3',
    event: 'Glorious Revolution',
    year: 1688,
    description: 'William of Orange replaces James II; Bill of Rights passed in 1689.'
  },
  {
    id: 'hist-ks3-timeline-020',
    subject: 'history',
    topic: 'Industrial Revolution',
    difficulty: 'ks3',
    event: 'Industrial Revolution begins',
    year: '1760s',
    description: 'Factories and machines begin to transform British manufacturing.'
  },
  {
    id: 'hist-ks3-timeline-021',
    subject: 'history',
    topic: 'British Empire',
    difficulty: 'ks3',
    event: 'Abolition of the Slave Trade',
    year: 1807,
    description: 'The Slave Trade Act makes it illegal to trade in slaves in the British Empire.'
  },
  {
    id: 'hist-ks3-timeline-022',
    subject: 'history',
    topic: 'Industrial Revolution',
    difficulty: 'ks3',
    event: 'First public railway opens',
    year: 1825,
    description: 'The Stockton and Darlington Railway opens, beginning the railway age.'
  },
  {
    id: 'hist-ks3-timeline-023',
    subject: 'history',
    topic: 'British Empire',
    difficulty: 'ks3',
    event: 'Abolition of Slavery',
    year: 1833,
    description: 'The Slavery Abolition Act ends slavery throughout most of the British Empire.'
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const ks3HistoryQuestions: Question[] = [
  ...medievalEnglandQuestions,
  ...tudorsQuestions,
  ...stuartsQuestions,
  ...industrialRevolutionQuestions,
  ...britishEmpireQuestions
];
