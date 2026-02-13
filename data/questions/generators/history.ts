// History Question Generator - UK Curriculum from KS1 to A-Level
import { Question } from '../index';

// ==========================================
// ANCIENT CIVILISATIONS (Years 3-7)
// ==========================================

function generateAncientHistoryQuestions(): Question[] {
  const questions: Question[] = [];

  // Stone Age to Iron Age (Year 3)
  const stoneAge = [
    { q: 'What period came first: Stone Age, Bronze Age, or Iron Age?', a: 'Stone Age', y: 3 },
    { q: 'What material did Stone Age people use to make tools?', a: 'Stone (flint)', y: 3 },
    { q: 'What is Stonehenge?', a: 'A prehistoric stone circle monument in Wiltshire', y: 3 },
    { q: 'What did people live in during the Stone Age?', a: 'Caves and simple shelters', y: 3 },
    { q: 'What did Stone Age people eat?', a: 'Hunted animals and gathered plants', y: 3 },
    { q: 'What material replaced stone for making tools?', a: 'Bronze', y: 3 },
    { q: 'What material replaced bronze for making tools?', a: 'Iron', y: 3 },
    { q: 'What does "prehistoric" mean?', a: 'Before written records', y: 3 },
    { q: 'What was Skara Brae?', a: 'A Stone Age village in Scotland', y: 3 },
    { q: 'What is an archaeologist?', a: 'Someone who studies the past by digging up objects', y: 3 },
  ];

  stoneAge.forEach((item, i) => {
    questions.push({
      id: `hist-stone-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['Bronze Age', 'Metal', 'Roman villa', 'Modern houses'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Stone Age',
      difficulty: 'easy'
    });
  });

  // Ancient Egypt (Year 3-4)
  const egyptQs = [
    { q: 'What did the Ancient Egyptians build as tombs for their pharaohs?', a: 'Pyramids', y: 3 },
    { q: 'What river was essential to Ancient Egyptian life?', a: 'The River Nile', y: 3 },
    { q: 'What is a pharaoh?', a: 'An Ancient Egyptian king or ruler', y: 3 },
    { q: 'What is mummification?', a: 'Preserving dead bodies for the afterlife', y: 4 },
    { q: 'What is the name of the famous boy pharaoh?', a: 'Tutankhamun', y: 4 },
    { q: 'What writing system did Ancient Egyptians use?', a: 'Hieroglyphics', y: 4 },
    { q: 'What is the Sphinx?', a: 'A statue with a lion\'s body and human head', y: 4 },
    { q: 'What did Ancient Egyptians believe happened after death?', a: 'They would live in an afterlife', y: 4 },
    { q: 'Who discovered Tutankhamun\'s tomb?', a: 'Howard Carter', y: 4 },
    { q: 'What organ did Egyptians leave inside mummies?', a: 'The heart', y: 4 },
  ];

  egyptQs.forEach((item, i) => {
    questions.push({
      id: `hist-egypt-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['Castles', 'Thames', 'Roman', 'Latin'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Ancient Egypt',
      difficulty: 'easy'
    });
  });

  // Ancient Greece (Year 5)
  const greeceQs = [
    { q: 'What did the Ancient Greeks invent that we still use today?', a: 'Democracy, Olympics, theatre', y: 5 },
    { q: 'What were Greek city-states called?', a: 'Polis (e.g., Athens, Sparta)', y: 5 },
    { q: 'Who was the king of the Greek gods?', a: 'Zeus', y: 5 },
    { q: 'What famous war did the Greeks fight against Troy?', a: 'The Trojan War', y: 5 },
    { q: 'What was the Trojan Horse?', a: 'A wooden horse used to sneak Greek soldiers into Troy', y: 5 },
    { q: 'What was the Parthenon?', a: 'A temple in Athens dedicated to Athena', y: 5 },
    { q: 'Who was Alexander the Great?', a: 'A Greek king who conquered a vast empire', y: 5 },
    { q: 'What were the Olympic Games originally?', a: 'Religious festivals for Zeus in Ancient Greece', y: 5 },
    { q: 'Who was the famous Greek philosopher?', a: 'Socrates, Plato, or Aristotle', y: 5 },
    { q: 'What were Greek warships called?', a: 'Triremes', y: 5 },
  ];

  greeceQs.forEach((item, i) => {
    questions.push({
      id: `hist-greece-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['Monarchy', 'Jupiter', 'Colosseum', 'England'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Ancient Greece',
      difficulty: 'easy'
    });
  });

  return questions;
}

// ==========================================
// ROMAN BRITAIN (Years 3-4, 7)
// ==========================================

function generateRomanQuestions(): Question[] {
  const questions: Question[] = [];

  const romanQs = [
    { q: 'When did the Romans invade Britain?', a: 'AD 43', y: 4 },
    { q: 'Who led the Roman invasion of Britain in AD 43?', a: 'Emperor Claudius', y: 4 },
    { q: 'Who was the first Roman to land in Britain?', a: 'Julius Caesar (55 BC)', y: 4 },
    { q: 'Who built Hadrian\'s Wall?', a: 'The Romans (under Emperor Hadrian)', y: 4 },
    { q: 'Why was Hadrian\'s Wall built?', a: 'To mark the northern frontier and defend against tribes', y: 4 },
    { q: 'Who was Boudicca?', a: 'A Celtic queen who led a revolt against the Romans', y: 4 },
    { q: 'What did the Romans build for travelling?', a: 'Straight roads', y: 3 },
    { q: 'What was a Roman bath house used for?', a: 'Bathing, socialising, and relaxing', y: 4 },
    { q: 'What language did the Romans speak?', a: 'Latin', y: 4 },
    { q: 'When did the Romans leave Britain?', a: 'Around AD 410', y: 4 },
    { q: 'What is an amphitheatre?', a: 'A Roman arena for entertainment and gladiator fights', y: 4 },
    { q: 'What did Roman soldiers wear?', a: 'Armour, helmet, and carried a shield (scutum)', y: 3 },
    { q: 'What was the main Roman city in Britain?', a: 'Londinium (London)', y: 4 },
    { q: 'What is a villa?', a: 'A Roman farmhouse or country house', y: 4 },
    { q: 'What was a centurion?', a: 'A Roman army officer commanding 80-100 men', y: 4 },
  ];

  romanQs.forEach((item, i) => {
    questions.push({
      id: `hist-roman-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['AD 1066', 'King Henry', 'English', 'Paris'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Romans',
      difficulty: item.y <= 4 ? 'easy' : 'medium'
    });
  });

  return questions;
}

// ==========================================
// ANGLO-SAXONS & VIKINGS (Years 4-5)
// ==========================================

function generateAngloSaxonVikingQuestions(): Question[] {
  const questions: Question[] = [];

  // Anglo-Saxons
  const saxonQs = [
    { q: 'Where did the Anglo-Saxons come from?', a: 'Germany, Denmark, and the Netherlands', y: 4 },
    { q: 'When did the Anglo-Saxons arrive in Britain?', a: 'Around AD 450', y: 4 },
    { q: 'What were the main Anglo-Saxon kingdoms?', a: 'Wessex, Mercia, Northumbria, East Anglia', y: 4 },
    { q: 'What religion did the Anglo-Saxons follow before Christianity?', a: 'Paganism (worshipping many gods)', y: 4 },
    { q: 'Who was the first Christian King of England?', a: 'Ethelbert of Kent', y: 5 },
    { q: 'What was the Sutton Hoo discovery?', a: 'An Anglo-Saxon ship burial with treasures', y: 5 },
    { q: 'What was a "witan"?', a: 'A council of advisors to the Anglo-Saxon king', y: 5 },
    { q: 'What was the Domesday Book?', a: 'A survey of England ordered by William I', y: 5 },
  ];

  saxonQs.forEach((item, i) => {
    questions.push({
      id: `hist-saxon-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['France', 'AD 1066', 'Christianity', 'Parliament'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Anglo-Saxons',
      difficulty: 'easy'
    });
  });

  // Vikings
  const vikingQs = [
    { q: 'Where did the Vikings come from?', a: 'Scandinavia (Norway, Sweden, Denmark)', y: 5 },
    { q: 'When did the Vikings first raid Britain?', a: 'AD 793 (Lindisfarne)', y: 5 },
    { q: 'What were Viking warriors called?', a: 'Raiders or sometimes berserkers', y: 5 },
    { q: 'What famous Viking leader invaded England?', a: 'King Cnut (Canute)', y: 5 },
    { q: 'What type of ships did Vikings use?', a: 'Longships', y: 5 },
    { q: 'What was the Danelaw?', a: 'The area of England ruled by Vikings', y: 5 },
    { q: 'Who was the Viking god of thunder?', a: 'Thor', y: 5 },
    { q: 'What was Valhalla?', a: 'The Viking heaven for warriors', y: 5 },
    { q: 'What famous king fought against the Vikings?', a: 'Alfred the Great', y: 5 },
    { q: 'What did Vikings use runes for?', a: 'Writing and carving messages', y: 5 },
  ];

  vikingQs.forEach((item, i) => {
    questions.push({
      id: `hist-viking-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['France', 'AD 1066', 'Zeus', 'Galleons'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Vikings',
      difficulty: 'easy'
    });
  });

  return questions;
}

// ==========================================
// MEDIEVAL BRITAIN (Years 5-8)
// ==========================================

function generateMedievalQuestions(): Question[] {
  const questions: Question[] = [];

  // Norman Conquest
  const normanQs = [
    { q: 'What year was the Battle of Hastings?', a: '1066', y: 5 },
    { q: 'Who won the Battle of Hastings?', a: 'William, Duke of Normandy (William the Conqueror)', y: 5 },
    { q: 'Who was the English king killed at Hastings?', a: 'Harold Godwinson (Harold II)', y: 5 },
    { q: 'How did Harold supposedly die?', a: 'Shot in the eye with an arrow', y: 5 },
    { q: 'What is the Bayeux Tapestry?', a: 'An embroidery depicting the Norman Conquest', y: 5 },
    { q: 'What did William build to control England?', a: 'Castles (including the Tower of London)', y: 5 },
    { q: 'What was the feudal system?', a: 'A social hierarchy based on land ownership', y: 5 },
    { q: 'Who was at the top of the feudal system?', a: 'The King', y: 5 },
    { q: 'Who was at the bottom of the feudal system?', a: 'Peasants/serfs', y: 5 },
  ];

  normanQs.forEach((item, i) => {
    questions.push({
      id: `hist-norman-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['1066', 'King Alfred', 'Romans', 'Parliament'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Normans',
      difficulty: 'easy'
    });
  });

  // Medieval Life
  const medievalQs = [
    { q: 'What is a medieval castle\'s moat?', a: 'A water-filled ditch for defence', y: 5 },
    { q: 'What was the Black Death?', a: 'A plague that killed millions in medieval Europe', y: 7 },
    { q: 'When did the Black Death reach Britain?', a: '1348', y: 7 },
    { q: 'What was Magna Carta?', a: 'A document limiting the king\'s power (1215)', y: 7 },
    { q: 'Which king signed Magna Carta?', a: 'King John', y: 7 },
    { q: 'What were the Crusades?', a: 'Religious wars to capture the Holy Land', y: 7 },
    { q: 'What was a knight\'s code of behaviour called?', a: 'Chivalry', y: 6 },
    { q: 'What was a serf?', a: 'A peasant bound to work on a lord\'s land', y: 6 },
    { q: 'What was the Peasants\' Revolt?', a: 'A 1381 uprising against poll tax and serfdom', y: 7 },
    { q: 'Who led the Peasants\' Revolt?', a: 'Wat Tyler', y: 7 },
    { q: 'What were the Wars of the Roses?', a: 'Civil wars between Houses of York and Lancaster', y: 8 },
    { q: 'What were the two roses in the Wars of the Roses?', a: 'White (York) and Red (Lancaster)', y: 8 },
  ];

  medievalQs.forEach((item, i) => {
    questions.push({
      id: `hist-medieval-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['A wall', 'World War I', 'Oliver Cromwell', 'Elizabeth I'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Medieval',
      difficulty: item.y <= 6 ? 'easy' : 'medium'
    });
  });

  return questions;
}

// ==========================================
// TUDORS & STUARTS (Years 5-8)
// ==========================================

function generateTudorStuartQuestions(): Question[] {
  const questions: Question[] = [];

  // Tudors
  const tudorQs = [
    { q: 'Who was the first Tudor monarch?', a: 'Henry VII', y: 6 },
    { q: 'How many wives did Henry VIII have?', a: 'Six', y: 5 },
    { q: 'Why did Henry VIII break from the Catholic Church?', a: 'To divorce Catherine of Aragon', y: 7 },
    { q: 'What church did Henry VIII create?', a: 'The Church of England', y: 7 },
    { q: 'Who was Elizabeth I\'s mother?', a: 'Anne Boleyn', y: 7 },
    { q: 'What was the Spanish Armada?', a: 'A Spanish fleet sent to invade England in 1588', y: 7 },
    { q: 'Who defeated the Spanish Armada?', a: 'English navy under Elizabeth I', y: 7 },
    { q: 'What famous playwright lived during Elizabeth\'s reign?', a: 'William Shakespeare', y: 6 },
    { q: 'What was the dissolution of the monasteries?', a: 'Henry VIII closing and seizing monasteries', y: 8 },
    { q: 'What was "Bloody Mary" known for?', a: 'Burning Protestants (trying to restore Catholicism)', y: 8 },
    { q: 'Name Henry VIII\'s six wives in order', a: 'Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, Catherine Parr', y: 7 },
    { q: 'What famous rhyme helps remember Henry\'s wives\' fates?', a: 'Divorced, beheaded, died, divorced, beheaded, survived', y: 6 },
  ];

  tudorQs.forEach((item, i) => {
    questions.push({
      id: `hist-tudor-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['Henry V', 'Four', 'French fleet', 'Charles Dickens'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Tudors',
      difficulty: item.y <= 6 ? 'easy' : 'medium'
    });
  });

  // Stuarts
  const stuartQs = [
    { q: 'Who was the first Stuart king of England?', a: 'James I (James VI of Scotland)', y: 7 },
    { q: 'What was the Gunpowder Plot?', a: 'A 1605 plot to blow up Parliament', y: 6 },
    { q: 'Who was the most famous Gunpowder plotter?', a: 'Guy Fawkes', y: 6 },
    { q: 'What do we celebrate on November 5th?', a: 'Guy Fawkes Night / Bonfire Night', y: 4 },
    { q: 'What was the English Civil War?', a: 'War between Parliament and King Charles I', y: 7 },
    { q: 'Who led Parliament\'s army?', a: 'Oliver Cromwell', y: 7 },
    { q: 'What happened to Charles I?', a: 'He was executed (beheaded) in 1649', y: 7 },
    { q: 'What was the Commonwealth?', a: 'England ruled without a king (1649-1660)', y: 8 },
    { q: 'What was the Restoration?', a: 'Return of the monarchy in 1660 (Charles II)', y: 8 },
    { q: 'What was the Great Fire of London?', a: 'A fire that destroyed much of London in 1666', y: 4 },
    { q: 'Where did the Great Fire start?', a: 'A bakery on Pudding Lane', y: 4 },
    { q: 'What was the Great Plague?', a: 'An outbreak of bubonic plague in 1665', y: 4 },
    { q: 'What was the Glorious Revolution?', a: 'The 1688 overthrow of James II', y: 8 },
  ];

  stuartQs.forEach((item, i) => {
    questions.push({
      id: `hist-stuart-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['Henry VIII', 'Battle of Hastings', 'Queen Victoria', 'World War II'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Stuarts',
      difficulty: item.y <= 6 ? 'easy' : 'medium'
    });
  });

  return questions;
}

// ==========================================
// INDUSTRIAL REVOLUTION (Years 8-10)
// ==========================================

function generateIndustrialQuestions(): Question[] {
  const questions: Question[] = [];

  const industrialQs = [
    { q: 'When did the Industrial Revolution begin in Britain?', a: 'Around 1760', y: 8 },
    { q: 'What country led the Industrial Revolution?', a: 'Britain', y: 8 },
    { q: 'Who invented the spinning jenny?', a: 'James Hargreaves', y: 8 },
    { q: 'Who invented the steam engine?', a: 'James Watt (improved it)', y: 8 },
    { q: 'What powered early factories?', a: 'Water and then steam', y: 8 },
    { q: 'What industry was most affected first?', a: 'Textile industry (cotton)', y: 8 },
    { q: 'What were working conditions like in factories?', a: 'Dangerous, long hours, low pay, child labour', y: 8 },
    { q: 'Who built the first passenger railway?', a: 'George Stephenson', y: 8 },
    { q: 'What was the name of Stephenson\'s famous locomotive?', a: 'The Rocket', y: 8 },
    { q: 'What opened in 1830 between Liverpool and Manchester?', a: 'The first passenger railway', y: 8 },
    { q: 'What did Isambard Kingdom Brunel design?', a: 'Railways, bridges, ships', y: 8 },
    { q: 'What social class grew during the Industrial Revolution?', a: 'The middle class', y: 9 },
    { q: 'What movement fought for workers\' rights?', a: 'The Trade Union movement', y: 9 },
    { q: 'What were the Luddites?', a: 'Workers who destroyed machines they blamed for unemployment', y: 9 },
    { q: 'What law limited child labour in factories?', a: 'Factory Acts', y: 9 },
  ];

  industrialQs.forEach((item, i) => {
    questions.push({
      id: `hist-industrial-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['Around 1900', 'France', 'Thomas Edison', 'The Titanic'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Industrial Revolution',
      difficulty: item.y <= 8 ? 'medium' : 'hard'
    });
  });

  return questions;
}

// ==========================================
// BRITISH EMPIRE & SLAVERY (Years 8-10)
// ==========================================

function generateEmpireQuestions(): Question[] {
  const questions: Question[] = [];

  const empireQs = [
    { q: 'What was the British Empire?', a: 'Territories ruled by Britain around the world', y: 8 },
    { q: 'At its height, what fraction of the world did Britain rule?', a: 'About one quarter', y: 8 },
    { q: 'What was the East India Company?', a: 'A trading company that controlled India', y: 9 },
    { q: 'What was the Transatlantic Slave Trade?', a: 'Forced transportation of Africans to the Americas', y: 8 },
    { q: 'What was the triangular trade?', a: 'Trade route: Britain-Africa-Americas-Britain', y: 8 },
    { q: 'When was the slave trade abolished in Britain?', a: '1807', y: 9 },
    { q: 'When was slavery abolished in the British Empire?', a: '1833', y: 9 },
    { q: 'Who campaigned to abolish slavery?', a: 'William Wilberforce', y: 8 },
    { q: 'What was the Indian Rebellion of 1857?', a: 'An uprising against British rule in India', y: 9 },
    { q: 'Who ruled India after 1858?', a: 'The British Crown directly', y: 9 },
    { q: 'What title did Queen Victoria take in 1876?', a: 'Empress of India', y: 9 },
    { q: 'What were the Opium Wars?', a: 'Wars between Britain and China over trade', y: 10 },
    { q: 'What happened in 1947?', a: 'India gained independence from Britain', y: 10 },
  ];

  empireQs.forEach((item, i) => {
    questions.push({
      id: `hist-empire-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['Half the world', 'France', '1900', 'Queen Elizabeth II'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'British Empire',
      difficulty: 'medium'
    });
  });

  return questions;
}

// ==========================================
// WORLD WAR ONE (Years 9-11)
// ==========================================

function generateWW1Questions(): Question[] {
  const questions: Question[] = [];

  const ww1Qs = [
    { q: 'When did World War One begin?', a: '1914', y: 9 },
    { q: 'When did World War One end?', a: '1918', y: 9 },
    { q: 'What event triggered World War One?', a: 'Assassination of Archduke Franz Ferdinand', y: 9 },
    { q: 'Who assassinated Franz Ferdinand?', a: 'Gavrilo Princip', y: 10 },
    { q: 'What were the two main alliances?', a: 'Triple Entente and Central Powers', y: 9 },
    { q: 'Which countries formed the Triple Entente?', a: 'Britain, France, Russia', y: 9 },
    { q: 'Which countries formed the Central Powers?', a: 'Germany, Austria-Hungary, Ottoman Empire', y: 9 },
    { q: 'What was trench warfare?', a: 'Fighting from defensive ditches', y: 9 },
    { q: 'What was "no man\'s land"?', a: 'The area between opposing trenches', y: 9 },
    { q: 'What new weapon was used for the first time in WWI?', a: 'Tanks, poison gas, aircraft', y: 9 },
    { q: 'What was the Battle of the Somme?', a: 'A 1916 battle with massive casualties', y: 10 },
    { q: 'How many British died on the first day of the Somme?', a: 'Nearly 20,000', y: 10 },
    { q: 'What poem was written by Wilfred Owen?', a: 'Dulce et Decorum Est', y: 10 },
    { q: 'What was the Treaty of Versailles?', a: 'The peace treaty ending WWI', y: 10 },
    { q: 'What day is Remembrance Day?', a: '11th November', y: 6 },
    { q: 'Why is Remembrance Day on 11th November?', a: 'WWI ended at 11am on 11/11/1918', y: 6 },
    { q: 'What country joined the war in 1917?', a: 'United States', y: 10 },
    { q: 'What revolution happened in Russia during WWI?', a: 'The Russian Revolution (1917)', y: 10 },
  ];

  ww1Qs.forEach((item, i) => {
    questions.push({
      id: `hist-ww1-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['1939', '1945', 'Pearl Harbor', 'Hitler'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'World War One',
      difficulty: item.y <= 9 ? 'easy' : 'medium'
    });
  });

  return questions;
}

// ==========================================
// WORLD WAR TWO (Years 6, 9-11)
// ==========================================

function generateWW2Questions(): Question[] {
  const questions: Question[] = [];

  const ww2Qs = [
    { q: 'When did World War Two begin?', a: '1939', y: 6 },
    { q: 'When did World War Two end?', a: '1945', y: 6 },
    { q: 'Who was the leader of Nazi Germany?', a: 'Adolf Hitler', y: 6 },
    { q: 'What was the Holocaust?', a: 'The Nazi genocide of six million Jews', y: 10 },
    { q: 'What was the Blitz?', a: 'German bombing of British cities', y: 6 },
    { q: 'What were children sent away from cities called?', a: 'Evacuees', y: 6 },
    { q: 'Who was the British Prime Minister during most of WWII?', a: 'Winston Churchill', y: 6 },
    { q: 'What was the Battle of Britain?', a: 'An air battle between Britain and Germany (1940)', y: 9 },
    { q: 'What was D-Day?', a: 'The Allied invasion of Normandy, France (6th June 1944)', y: 10 },
    { q: 'What was VE Day?', a: 'Victory in Europe Day (8th May 1945)', y: 6 },
    { q: 'What ended the war with Japan?', a: 'Atomic bombs on Hiroshima and Nagasaki', y: 10 },
    { q: 'What was the Dunkirk evacuation?', a: 'Rescue of British troops from France (1940)', y: 9 },
    { q: 'What were Anderson shelters?', a: 'Garden bomb shelters for families', y: 6 },
    { q: 'What was rationing?', a: 'Limiting food and goods during wartime', y: 6 },
    { q: 'What was the name of Hitler\'s party?', a: 'Nazi Party (NSDAP)', y: 10 },
    { q: 'What was Appeasement?', a: 'Policy of making concessions to Hitler to avoid war', y: 10 },
    { q: 'Who was Neville Chamberlain?', a: 'British PM who followed appeasement before WWII', y: 10 },
    { q: 'What was Operation Barbarossa?', a: 'Germany\'s invasion of the Soviet Union', y: 11 },
    { q: 'What battle was a turning point on the Eastern Front?', a: 'Battle of Stalingrad', y: 11 },
    { q: 'What was the Atlantic Charter?', a: 'Agreement between UK and USA on post-war world', y: 11 },
  ];

  ww2Qs.forEach((item, i) => {
    questions.push({
      id: `hist-ww2-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['1914', '1918', 'Joseph Stalin', 'Neville Chamberlain'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'World War Two',
      difficulty: item.y <= 6 ? 'easy' : item.y <= 10 ? 'medium' : 'hard'
    });
  });

  return questions;
}

// ==========================================
// COLD WAR & MODERN (Years 10-13)
// ==========================================

function generateColdWarModernQuestions(): Question[] {
  const questions: Question[] = [];

  const coldWarQs = [
    { q: 'What was the Cold War?', a: 'Tension between USA and USSR without direct war', y: 10 },
    { q: 'When was the Cold War roughly?', a: '1947-1991', y: 10 },
    { q: 'What was the Iron Curtain?', a: 'The division between Western and Eastern Europe', y: 10 },
    { q: 'Who coined the term "Iron Curtain"?', a: 'Winston Churchill', y: 11 },
    { q: 'What was the Berlin Wall?', a: 'A wall dividing East and West Berlin', y: 10 },
    { q: 'When was the Berlin Wall built?', a: '1961', y: 10 },
    { q: 'When did the Berlin Wall fall?', a: '1989', y: 10 },
    { q: 'What was NATO?', a: 'Western military alliance against Soviet threat', y: 10 },
    { q: 'What was the Warsaw Pact?', a: 'Soviet alliance of Eastern European countries', y: 10 },
    { q: 'What was the Cuban Missile Crisis?', a: 'A 1962 confrontation over Soviet missiles in Cuba', y: 11 },
    { q: 'Who was the Soviet leader during the Cuban Missile Crisis?', a: 'Nikita Khrushchev', y: 11 },
    { q: 'What was the Space Race?', a: 'Competition between USA and USSR to explore space', y: 9 },
    { q: 'Who was the first person in space?', a: 'Yuri Gagarin (Soviet)', y: 9 },
    { q: 'Who was the first person on the moon?', a: 'Neil Armstrong (American)', y: 6 },
    { q: 'When did the Soviet Union collapse?', a: '1991', y: 11 },
  ];

  coldWarQs.forEach((item, i) => {
    questions.push({
      id: `hist-coldwar-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['1914', 'World War II', 'Margaret Thatcher', 'John Kennedy'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Cold War',
      difficulty: item.y <= 10 ? 'medium' : 'hard'
    });
  });

  // Modern British History
  const modernQs = [
    { q: 'Who was Britain\'s first female Prime Minister?', a: 'Margaret Thatcher', y: 9 },
    { q: 'When was the NHS founded?', a: '1948', y: 10 },
    { q: 'What was the Windrush generation?', a: 'Caribbean migrants who came to Britain from 1948', y: 9 },
    { q: 'When did Britain join the European Economic Community?', a: '1973', y: 11 },
    { q: 'When did Britain leave the European Union?', a: '2020', y: 9 },
    { q: 'What was the Falklands War?', a: 'A 1982 war between Britain and Argentina', y: 10 },
    { q: 'When did Princess Diana die?', a: '1997', y: 9 },
    { q: 'When did Queen Elizabeth II die?', a: '2022', y: 6 },
    { q: 'How long did Queen Elizabeth II reign?', a: '70 years', y: 6 },
  ];

  modernQs.forEach((item, i) => {
    questions.push({
      id: `hist-modern-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['Margaret Thatcher', '1960', 'Tony Blair', '2000'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Modern Britain',
      difficulty: 'medium'
    });
  });

  return questions;
}

// ==========================================
// CIVIL RIGHTS & SOCIAL HISTORY (Years 8-11)
// ==========================================

function generateCivilRightsQuestions(): Question[] {
  const questions: Question[] = [];

  const civilRightsQs = [
    { q: 'What was the Suffragette movement?', a: 'Campaign for women\'s voting rights', y: 8 },
    { q: 'When did women over 30 get the vote in Britain?', a: '1918', y: 9 },
    { q: 'When did all women over 21 get the vote?', a: '1928', y: 9 },
    { q: 'Who was Emmeline Pankhurst?', a: 'A leading Suffragette campaigner', y: 8 },
    { q: 'What was the US Civil Rights Movement about?', a: 'Equality for African Americans', y: 10 },
    { q: 'Who was Martin Luther King Jr.?', a: 'A leader of the US Civil Rights Movement', y: 8 },
    { q: 'What was his famous speech?', a: 'I Have a Dream', y: 8 },
    { q: 'Who refused to give up her bus seat in 1955?', a: 'Rosa Parks', y: 8 },
    { q: 'What did the Race Relations Act (1965) do?', a: 'Made racial discrimination illegal in Britain', y: 10 },
    { q: 'What was apartheid?', a: 'Racial segregation in South Africa', y: 10 },
    { q: 'Who was Nelson Mandela?', a: 'South African leader who fought apartheid', y: 9 },
    { q: 'When was homosexuality decriminalised in England?', a: '1967', y: 11 },
    { q: 'When did same-sex marriage become legal in England?', a: '2014', y: 10 },
  ];

  civilRightsQs.forEach((item, i) => {
    questions.push({
      id: `hist-rights-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['1900', 'Queen Victoria', 'World War II', 'Winston Churchill'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Civil Rights',
      difficulty: item.y <= 8 ? 'easy' : 'medium'
    });
  });

  return questions;
}

// ==========================================
// HISTORICAL SKILLS & CONCEPTS (Years 3-11)
// ==========================================

function generateHistoricalSkillsQuestions(): Question[] {
  const questions: Question[] = [];

  const skillsQs = [
    { q: 'What is a primary source?', a: 'Evidence from the time period being studied', y: 5 },
    { q: 'What is a secondary source?', a: 'Evidence created later by studying primary sources', y: 5 },
    { q: 'What does AD mean?', a: 'Anno Domini (Year of our Lord)', y: 4 },
    { q: 'What does BC mean?', a: 'Before Christ', y: 4 },
    { q: 'What is chronology?', a: 'The order in which events happened', y: 3 },
    { q: 'What is a timeline?', a: 'A diagram showing events in order', y: 3 },
    { q: 'What is bias in history?', a: 'A one-sided or unfair viewpoint', y: 6 },
    { q: 'What is propaganda?', a: 'Information designed to persuade people', y: 7 },
    { q: 'What is an artefact?', a: 'An object made by humans from the past', y: 3 },
    { q: 'What is an eyewitness account?', a: 'A description from someone who was there', y: 5 },
    { q: 'What is historical significance?', a: 'How important an event was to history', y: 7 },
    { q: 'What are long-term causes?', a: 'Causes that develop over a long time', y: 8 },
    { q: 'What are short-term causes?', a: 'Immediate causes close to the event', y: 8 },
    { q: 'What is a trigger event?', a: 'The immediate cause that starts something', y: 8 },
  ];

  skillsQs.forEach((item, i) => {
    questions.push({
      id: `hist-skills-${i}`,
      question: item.q,
      correctAnswer: item.a,
      wrongAnswers: ['A book', 'Evidence from later', 'After Death', 'A modern creation'].slice(0, 3),
      explanation: item.a,
      subject: 'history',
      yearGroup: item.y,
      topic: 'Historical skills',
      difficulty: item.y <= 5 ? 'easy' : 'medium'
    });
  });

  return questions;
}

// ==========================================
// EXPORT ALL HISTORY QUESTIONS
// ==========================================

export function generateAllHistoryQuestions(): Question[] {
  return [
    ...generateAncientHistoryQuestions(),
    ...generateRomanQuestions(),
    ...generateAngloSaxonVikingQuestions(),
    ...generateMedievalQuestions(),
    ...generateTudorStuartQuestions(),
    ...generateIndustrialQuestions(),
    ...generateEmpireQuestions(),
    ...generateWW1Questions(),
    ...generateWW2Questions(),
    ...generateColdWarModernQuestions(),
    ...generateCivilRightsQuestions(),
    ...generateHistoricalSkillsQuestions(),
  ];
}

export default generateAllHistoryQuestions;
