/**
 * GCSE History Questions
 *
 * Comprehensive question bank covering key GCSE History topics:
 * - World War One
 * - Weimar and Nazi Germany
 * - World War Two
 * - Cold War
 * - Civil Rights
 * - Medicine through time
 * - Crime and punishment through time
 */

import { Question, TermDefinition, TimelineEvent } from '../types';

export const gcseHistoryQuestions: Question[] = [
  // ============================================
  // WORLD WAR ONE - Causes
  // ============================================
  {
    id: 'hist-gcse-ww1-001',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Causes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What event triggered the start of World War One in 1914?',
    correctAnswer: 'The assassination of Archduke Franz Ferdinand',
    wrongAnswers: [
      'The sinking of the Lusitania',
      'The invasion of Poland',
      'The signing of the Triple Alliance'
    ],
    options: [
      'The assassination of Archduke Franz Ferdinand',
      'The sinking of the Lusitania',
      'The invasion of Poland',
      'The signing of the Triple Alliance'
    ],
    explanation: 'Archduke Franz Ferdinand of Austria-Hungary was assassinated in Sarajevo on 28 June 1914 by Gavrilo Princip, a Serbian nationalist. This set off a chain of events leading to war.',
    tags: ['causes', 'assassination', 'triggers'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww1-002',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Causes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What does the acronym MAIN stand for when describing the causes of WWI?',
    correctAnswer: 'Militarism, Alliances, Imperialism, Nationalism',
    wrongAnswers: [
      'Money, Arms, Industry, Navy',
      'Military, Austria, Italy, Nations',
      'Maps, Agreements, Independence, Neutrality'
    ],
    options: [
      'Militarism, Alliances, Imperialism, Nationalism',
      'Money, Arms, Industry, Navy',
      'Military, Austria, Italy, Nations',
      'Maps, Agreements, Independence, Neutrality'
    ],
    explanation: 'MAIN is a mnemonic used to remember the four main long-term causes of World War One.',
    tags: ['causes', 'MAIN', 'long-term'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww1-003',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Causes',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The Triple Entente consisted of Britain, France, and Germany.',
    correctAnswer: 'False',
    explanation: 'The Triple Entente consisted of Britain, France, and Russia. Germany was part of the Triple Alliance with Austria-Hungary and Italy.',
    tags: ['alliances', 'Triple Entente'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww1-004',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Causes',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The _____ Crisis of 1914 occurred after the assassination of Franz Ferdinand and led to the outbreak of war.',
    correctAnswer: 'July',
    explanation: 'The July Crisis refers to the month of diplomatic tension following the assassination on 28 June 1914, leading to declarations of war in early August.',
    tags: ['causes', 'July Crisis'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww1-005',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Causes',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match the alliance member to the correct alliance:',
    correctAnswer: ['Britain - Triple Entente', 'Austria-Hungary - Triple Alliance', 'Russia - Triple Entente', 'Germany - Triple Alliance'],
    explanation: 'The Triple Entente was Britain, France, and Russia. The Triple Alliance was Germany, Austria-Hungary, and Italy.',
    tags: ['alliances'],
    yearGroup: [10, 11]
  },

  // ============================================
  // WORLD WAR ONE - Trench Warfare
  // ============================================
  {
    id: 'hist-gcse-ww1-006',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Trench Warfare',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the area between opposing trenches called?',
    correctAnswer: "No Man's Land",
    wrongAnswers: [
      'The Dead Zone',
      'The Killing Fields',
      'The Front Line'
    ],
    options: [
      "No Man's Land",
      'The Dead Zone',
      'The Killing Fields',
      'The Front Line'
    ],
    explanation: "No Man's Land was the dangerous territory between the trenches, often covered in barbed wire, shell craters, and bodies.",
    tags: ['trenches', 'Western Front'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww1-007',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Trench Warfare',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which disease, caused by standing in waterlogged trenches, affected many soldiers?',
    correctAnswer: 'Trench foot',
    wrongAnswers: [
      'Trench fever',
      'Shell shock',
      'Spanish flu'
    ],
    options: [
      'Trench foot',
      'Trench fever',
      'Shell shock',
      'Spanish flu'
    ],
    explanation: 'Trench foot was a fungal infection caused by prolonged exposure to damp, cold, and unsanitary conditions in the trenches.',
    tags: ['trenches', 'conditions', 'disease'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww1-008',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Trench Warfare',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The Battle of the Somme in 1916 resulted in over 1 million casualties on all sides.',
    correctAnswer: 'True',
    explanation: 'The Battle of the Somme (July-November 1916) was one of the bloodiest battles in history, with over 1 million men wounded or killed.',
    tags: ['Somme', 'casualties', 'battles'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww1-009',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Trench Warfare',
    difficulty: 'gcse',
    type: 'order',
    question: 'Put these trench system elements in order from front to back:',
    correctAnswer: ['Fire trench', 'Support trench', 'Reserve trench', 'Communication trench'],
    explanation: 'Trenches were organized in a system with fire trenches at the front, support trenches behind, reserve trenches further back, and communication trenches connecting them.',
    tags: ['trenches', 'structure'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww1-010',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Trench Warfare',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Soldiers who refused to fight or deserted could be executed by _____ _____.',
    correctAnswer: 'firing squad',
    explanation: 'During WWI, over 300 British soldiers were executed by firing squad for desertion or cowardice, though many are now thought to have suffered from shell shock.',
    tags: ['discipline', 'desertion'],
    yearGroup: [10, 11]
  },

  // ============================================
  // WORLD WAR ONE - Treaty of Versailles
  // ============================================
  {
    id: 'hist-gcse-ww1-011',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Treaty of Versailles',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In what year was the Treaty of Versailles signed?',
    correctAnswer: '1919',
    wrongAnswers: ['1918', '1920', '1917'],
    options: ['1919', '1918', '1920', '1917'],
    explanation: 'The Treaty of Versailles was signed on 28 June 1919, exactly five years after the assassination of Franz Ferdinand.',
    tags: ['Treaty of Versailles', 'peace'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww1-012',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Treaty of Versailles',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which clause of the Treaty of Versailles forced Germany to accept blame for the war?',
    correctAnswer: 'Article 231 (War Guilt Clause)',
    wrongAnswers: [
      'Article 48',
      'Article 119',
      'Article 160'
    ],
    options: [
      'Article 231 (War Guilt Clause)',
      'Article 48',
      'Article 119',
      'Article 160'
    ],
    explanation: 'Article 231, known as the War Guilt Clause, forced Germany to accept responsibility for causing the war and was deeply resented by Germans.',
    tags: ['Treaty of Versailles', 'War Guilt'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww1-013',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Treaty of Versailles',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Germany was required to pay _____ billion gold marks in reparations under the Treaty of Versailles.',
    correctAnswer: '132',
    explanation: 'Germany was ordered to pay 132 billion gold marks (around $33 billion) in reparations, a sum many considered impossible to pay.',
    tags: ['Treaty of Versailles', 'reparations'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww1-014',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Treaty of Versailles',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Germany was allowed to keep its air force under the Treaty of Versailles.',
    correctAnswer: 'False',
    explanation: 'Germany was forbidden from having an air force, tanks, or submarines. Its army was limited to 100,000 men and navy to 6 battleships.',
    tags: ['Treaty of Versailles', 'military restrictions'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww1-015',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Treaty of Versailles',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which region was demilitarized under the Treaty of Versailles?',
    correctAnswer: 'The Rhineland',
    wrongAnswers: [
      'The Sudetenland',
      'Alsace-Lorraine',
      'The Saar'
    ],
    options: [
      'The Rhineland',
      'The Sudetenland',
      'Alsace-Lorraine',
      'The Saar'
    ],
    explanation: 'The Rhineland, the German territory bordering France, was demilitarized to protect France from future German invasion.',
    tags: ['Treaty of Versailles', 'Rhineland'],
    yearGroup: [10, 11]
  },

  // ============================================
  // WEIMAR GERMANY
  // ============================================
  {
    id: 'hist-gcse-weimar-001',
    subject: 'history',
    topic: 'Weimar Germany',
    subtopic: 'Constitution',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was Article 48 of the Weimar Constitution?',
    correctAnswer: 'Emergency powers allowing the President to rule by decree',
    wrongAnswers: [
      'The War Guilt Clause',
      'The requirement for reparations',
      'The establishment of the Reichstag'
    ],
    options: [
      'Emergency powers allowing the President to rule by decree',
      'The War Guilt Clause',
      'The requirement for reparations',
      'The establishment of the Reichstag'
    ],
    explanation: 'Article 48 allowed the President to bypass the Reichstag in emergencies. This was later exploited by Hitler to consolidate power.',
    tags: ['Weimar', 'constitution', 'Article 48'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-weimar-002',
    subject: 'history',
    topic: 'Weimar Germany',
    subtopic: 'Challenges',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the main cause of hyperinflation in Germany in 1923?',
    correctAnswer: 'The government printed more money to pay workers during the Ruhr occupation',
    wrongAnswers: [
      'The Wall Street Crash',
      'The signing of the Treaty of Versailles',
      'The assassination of Rathenau'
    ],
    options: [
      'The government printed more money to pay workers during the Ruhr occupation',
      'The Wall Street Crash',
      'The signing of the Treaty of Versailles',
      'The assassination of Rathenau'
    ],
    explanation: 'When France occupied the Ruhr in 1923, workers went on strike. The government printed money to pay them, causing hyperinflation.',
    tags: ['Weimar', 'hyperinflation', 'Ruhr'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-weimar-003',
    subject: 'history',
    topic: 'Weimar Germany',
    subtopic: 'Challenges',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The Kapp Putsch of 1920 was a left-wing communist uprising.',
    correctAnswer: 'False',
    explanation: 'The Kapp Putsch was a right-wing coup attempt by Freikorps soldiers who opposed the Weimar Republic. It was defeated by a general strike.',
    tags: ['Weimar', 'Kapp Putsch', 'right-wing'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-weimar-004',
    subject: 'history',
    topic: 'Weimar Germany',
    subtopic: 'Recovery',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Gustav _____ was the Foreign Minister who helped Germany recover through the Locarno Treaties and joining the League of Nations.',
    correctAnswer: 'Stresemann',
    explanation: 'Gustav Stresemann served as Chancellor and Foreign Minister, negotiating the Dawes Plan, Locarno Treaties, and Germanys entry to the League of Nations.',
    tags: ['Weimar', 'Stresemann', 'recovery'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-weimar-005',
    subject: 'history',
    topic: 'Weimar Germany',
    subtopic: 'Culture',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The period 1924-1929 in Weimar Germany is often called:',
    correctAnswer: 'The Golden Age',
    wrongAnswers: [
      'The Iron Age',
      'The Dark Years',
      'The Great Recovery'
    ],
    options: [
      'The Golden Age',
      'The Iron Age',
      'The Dark Years',
      'The Great Recovery'
    ],
    explanation: 'The years 1924-1929 saw economic recovery, cultural flourishing, and improved international relations, earning the nickname "Golden Age."',
    tags: ['Weimar', 'Golden Age', 'culture'],
    yearGroup: [10, 11]
  },

  // ============================================
  // NAZI GERMANY - Rise of Hitler
  // ============================================
  {
    id: 'hist-gcse-nazi-001',
    subject: 'history',
    topic: 'Nazi Germany',
    subtopic: 'Rise of Hitler',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In what year did Hitler become Chancellor of Germany?',
    correctAnswer: '1933',
    wrongAnswers: ['1929', '1934', '1932'],
    options: ['1933', '1929', '1934', '1932'],
    explanation: 'Hitler was appointed Chancellor on 30 January 1933 by President Hindenburg.',
    tags: ['Nazi', 'Hitler', 'Chancellor'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-nazi-002',
    subject: 'history',
    topic: 'Nazi Germany',
    subtopic: 'Rise of Hitler',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the Munich Putsch of 1923?',
    correctAnswer: "Hitler's failed attempt to seize power in Bavaria",
    wrongAnswers: [
      'A successful Nazi takeover of Munich',
      'A communist uprising in Munich',
      'The signing of a peace treaty'
    ],
    options: [
      "Hitler's failed attempt to seize power in Bavaria",
      'A successful Nazi takeover of Munich',
      'A communist uprising in Munich',
      'The signing of a peace treaty'
    ],
    explanation: 'The Munich Putsch was a failed coup attempt by Hitler and the Nazi Party. Hitler was imprisoned and wrote Mein Kampf.',
    tags: ['Nazi', 'Munich Putsch', 'failed coup'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-nazi-003',
    subject: 'history',
    topic: 'Nazi Germany',
    subtopic: 'Rise of Hitler',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The _____ Fire of February 1933 was used by the Nazis as an excuse to suspend civil liberties.',
    correctAnswer: 'Reichstag',
    explanation: 'The Reichstag Fire on 27 February 1933 was blamed on communists and used to pass the Reichstag Fire Decree, suspending civil liberties.',
    tags: ['Nazi', 'Reichstag Fire', 'consolidation'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-nazi-004',
    subject: 'history',
    topic: 'Nazi Germany',
    subtopic: 'Rise of Hitler',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The Enabling Act of 1933 gave Hitler the power to make laws without the Reichstag.',
    correctAnswer: 'True',
    explanation: 'The Enabling Act, passed on 23 March 1933, allowed Hitler to pass laws without Reichstag approval, effectively making him a dictator.',
    tags: ['Nazi', 'Enabling Act', 'dictatorship'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-nazi-005',
    subject: 'history',
    topic: 'Nazi Germany',
    subtopic: 'Rise of Hitler',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the Night of the Long Knives in 1934?',
    correctAnswer: 'The purge of SA leaders including Ernst Rohm',
    wrongAnswers: [
      'A pogrom against Jewish businesses',
      'The assassination of Hindenburg',
      'A failed assassination attempt on Hitler'
    ],
    options: [
      'The purge of SA leaders including Ernst Rohm',
      'A pogrom against Jewish businesses',
      'The assassination of Hindenburg',
      'A failed assassination attempt on Hitler'
    ],
    explanation: 'The Night of the Long Knives (30 June 1934) saw the murder of SA leaders and other political opponents, consolidating Hitlers power.',
    tags: ['Nazi', 'Night of the Long Knives', 'SA'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-nazi-006',
    subject: 'history',
    topic: 'Nazi Germany',
    subtopic: 'Control',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Who was the head of Nazi propaganda?',
    correctAnswer: 'Joseph Goebbels',
    wrongAnswers: [
      'Heinrich Himmler',
      'Hermann Goering',
      'Rudolf Hess'
    ],
    options: [
      'Joseph Goebbels',
      'Heinrich Himmler',
      'Hermann Goering',
      'Rudolf Hess'
    ],
    explanation: 'Joseph Goebbels was Reich Minister of Propaganda, controlling all media, arts, and information in Nazi Germany.',
    tags: ['Nazi', 'Goebbels', 'propaganda'],
    yearGroup: [10, 11]
  },

  // ============================================
  // NAZI GERMANY - Holocaust
  // ============================================
  {
    id: 'hist-gcse-nazi-007',
    subject: 'history',
    topic: 'Nazi Germany',
    subtopic: 'Holocaust',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What were the Nuremberg Laws of 1935?',
    correctAnswer: 'Laws that stripped Jews of German citizenship and banned marriage between Jews and non-Jews',
    wrongAnswers: [
      'Laws establishing concentration camps',
      'Laws banning the Nazi Party',
      'Laws requiring military service'
    ],
    options: [
      'Laws that stripped Jews of German citizenship and banned marriage between Jews and non-Jews',
      'Laws establishing concentration camps',
      'Laws banning the Nazi Party',
      'Laws requiring military service'
    ],
    explanation: 'The Nuremberg Laws legally defined who was Jewish and removed their citizenship rights, marking a major step in persecution.',
    tags: ['Nazi', 'Holocaust', 'Nuremberg Laws'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-nazi-008',
    subject: 'history',
    topic: 'Nazi Germany',
    subtopic: 'Holocaust',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Kristallnacht, the "Night of Broken _____", occurred on 9-10 November 1938.',
    correctAnswer: 'Glass',
    explanation: 'Kristallnacht (Night of Broken Glass) saw Nazi-orchestrated attacks on Jewish homes, businesses, and synagogues across Germany.',
    tags: ['Nazi', 'Holocaust', 'Kristallnacht'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-nazi-009',
    subject: 'history',
    topic: 'Nazi Germany',
    subtopic: 'Holocaust',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The Wannsee Conference of 1942 was where Nazi leaders planned the "Final Solution" to systematically murder European Jews.',
    correctAnswer: 'True',
    explanation: 'The Wannsee Conference on 20 January 1942 coordinated the implementation of the Holocaust across Nazi-occupied Europe.',
    tags: ['Nazi', 'Holocaust', 'Wannsee Conference'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-nazi-010',
    subject: 'history',
    topic: 'Nazi Germany',
    subtopic: 'Holocaust',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Approximately how many Jews were murdered in the Holocaust?',
    correctAnswer: '6 million',
    wrongAnswers: [
      '1 million',
      '3 million',
      '10 million'
    ],
    options: [
      '6 million',
      '1 million',
      '3 million',
      '10 million'
    ],
    explanation: 'Approximately 6 million Jews were murdered in the Holocaust, along with millions of others including Roma, disabled people, and political prisoners.',
    tags: ['Nazi', 'Holocaust', 'victims'],
    yearGroup: [10, 11]
  },

  // ============================================
  // WORLD WAR TWO - Key Battles
  // ============================================
  {
    id: 'hist-gcse-ww2-001',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'Key Battles',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was Operation Barbarossa?',
    correctAnswer: 'The German invasion of the Soviet Union in 1941',
    wrongAnswers: [
      'The Allied invasion of Normandy',
      'The German invasion of Poland',
      'The evacuation of Dunkirk'
    ],
    options: [
      'The German invasion of the Soviet Union in 1941',
      'The Allied invasion of Normandy',
      'The German invasion of Poland',
      'The evacuation of Dunkirk'
    ],
    explanation: 'Operation Barbarossa began on 22 June 1941 and was the largest military operation in history. It ultimately failed, marking a turning point in the war.',
    tags: ['WWII', 'Barbarossa', 'Eastern Front'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww2-002',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'Key Battles',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which battle is considered the turning point on the Eastern Front?',
    correctAnswer: 'Battle of Stalingrad',
    wrongAnswers: [
      'Battle of Kursk',
      'Battle of Moscow',
      'Battle of Berlin'
    ],
    options: [
      'Battle of Stalingrad',
      'Battle of Kursk',
      'Battle of Moscow',
      'Battle of Berlin'
    ],
    explanation: 'The Battle of Stalingrad (1942-1943) was a devastating defeat for Germany and is widely seen as the turning point of WWII in Europe.',
    tags: ['WWII', 'Stalingrad', 'turning point'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww2-003',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'Key Battles',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The Battle of Britain was fought entirely in the air.',
    correctAnswer: 'True',
    explanation: 'The Battle of Britain (1940) was an air campaign fought between the German Luftwaffe and British RAF. Britains victory prevented a German invasion.',
    tags: ['WWII', 'Battle of Britain', 'RAF'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww2-004',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'Key Battles',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The evacuation of Allied soldiers from _____ in 1940 rescued over 300,000 troops.',
    correctAnswer: 'Dunkirk',
    explanation: 'Operation Dynamo evacuated 338,000 Allied soldiers from Dunkirk beaches between 26 May and 4 June 1940.',
    tags: ['WWII', 'Dunkirk', 'evacuation'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww2-005',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'Key Battles',
    difficulty: 'gcse',
    type: 'order',
    question: 'Put these WWII events in chronological order:',
    correctAnswer: ['Invasion of Poland', 'Dunkirk evacuation', 'Battle of Britain', 'Attack on Pearl Harbor', 'D-Day'],
    explanation: 'Poland was invaded in September 1939, Dunkirk was June 1940, Battle of Britain was summer 1940, Pearl Harbor was December 1941, D-Day was June 1944.',
    tags: ['WWII', 'chronology'],
    yearGroup: [10, 11]
  },

  // ============================================
  // WORLD WAR TWO - D-Day
  // ============================================
  {
    id: 'hist-gcse-ww2-006',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'D-Day',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'On what date did D-Day occur?',
    correctAnswer: '6 June 1944',
    wrongAnswers: [
      '6 June 1943',
      '8 May 1945',
      '1 September 1939'
    ],
    options: [
      '6 June 1944',
      '6 June 1943',
      '8 May 1945',
      '1 September 1939'
    ],
    explanation: 'D-Day, the Allied invasion of Normandy, took place on 6 June 1944 and was the largest amphibious invasion in history.',
    tags: ['WWII', 'D-Day', 'Normandy'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww2-007',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'D-Day',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The D-Day operation was codenamed Operation _____.',
    correctAnswer: 'Overlord',
    explanation: 'Operation Overlord was the codename for the Battle of Normandy, with the initial assault phase called Operation Neptune.',
    tags: ['WWII', 'D-Day', 'Overlord'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww2-008',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'D-Day',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Who was the Supreme Commander of Allied Forces for D-Day?',
    correctAnswer: 'Dwight D. Eisenhower',
    wrongAnswers: [
      'Bernard Montgomery',
      'Winston Churchill',
      'George Patton'
    ],
    options: [
      'Dwight D. Eisenhower',
      'Bernard Montgomery',
      'Winston Churchill',
      'George Patton'
    ],
    explanation: 'General Dwight D. Eisenhower was Supreme Commander of the Allied Expeditionary Force and later became US President.',
    tags: ['WWII', 'D-Day', 'Eisenhower'],
    yearGroup: [10, 11]
  },

  // ============================================
  // WORLD WAR TWO - Home Front
  // ============================================
  {
    id: 'hist-gcse-ww2-009',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'Home Front',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was rationing?',
    correctAnswer: 'A government system limiting the amount of goods each person could buy',
    wrongAnswers: [
      'A type of air raid shelter',
      'A method of growing vegetables',
      'A code used by spies'
    ],
    options: [
      'A government system limiting the amount of goods each person could buy',
      'A type of air raid shelter',
      'A method of growing vegetables',
      'A code used by spies'
    ],
    explanation: 'Rationing was introduced in Britain in January 1940 to ensure fair distribution of scarce goods like food, clothing, and fuel.',
    tags: ['WWII', 'Home Front', 'rationing'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww2-010',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'Home Front',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The Blitz was the sustained German bombing campaign against British cities in 1940-1941.',
    correctAnswer: 'True',
    explanation: 'The Blitz (from German "Blitzkrieg" meaning lightning war) involved nightly bombing of London and other cities, killing over 40,000 civilians.',
    tags: ['WWII', 'Home Front', 'Blitz'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww2-011',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'Home Front',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Children were sent from cities to the countryside in a process called _____.',
    correctAnswer: 'evacuation',
    explanation: 'Evacuation saw millions of children moved from cities to rural areas to protect them from bombing. Many had mixed experiences.',
    tags: ['WWII', 'Home Front', 'evacuation'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww2-012',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'Home Front',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the "Dig for Victory" campaign?',
    correctAnswer: 'An initiative encouraging people to grow their own food',
    wrongAnswers: [
      'A military recruitment drive',
      'A mining operation for war materials',
      'An archaeological program'
    ],
    options: [
      'An initiative encouraging people to grow their own food',
      'A military recruitment drive',
      'A mining operation for war materials',
      'An archaeological program'
    ],
    explanation: 'Dig for Victory encouraged civilians to grow vegetables in gardens and allotments to supplement rationed food supplies.',
    tags: ['WWII', 'Home Front', 'Dig for Victory'],
    yearGroup: [10, 11]
  },

  // ============================================
  // COLD WAR
  // ============================================
  {
    id: 'hist-gcse-cold-001',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Origins',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the "Iron Curtain"?',
    correctAnswer: 'The ideological and physical boundary dividing Europe into Western and Eastern blocs',
    wrongAnswers: [
      'A type of military fortification',
      'A Soviet nuclear weapon',
      'A trade agreement'
    ],
    options: [
      'The ideological and physical boundary dividing Europe into Western and Eastern blocs',
      'A type of military fortification',
      'A Soviet nuclear weapon',
      'A trade agreement'
    ],
    explanation: 'Winston Churchill coined the term "Iron Curtain" in 1946 to describe the division between communist Eastern Europe and the democratic West.',
    tags: ['Cold War', 'Iron Curtain', 'Churchill'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-cold-002',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Berlin',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In what year was the Berlin Wall built?',
    correctAnswer: '1961',
    wrongAnswers: ['1945', '1949', '1955'],
    options: ['1961', '1945', '1949', '1955'],
    explanation: 'The Berlin Wall was built on 13 August 1961 by East Germany to prevent its citizens from fleeing to the West.',
    tags: ['Cold War', 'Berlin Wall', 'division'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-cold-003',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Berlin',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The Berlin Wall fell on 9 November _____.',
    correctAnswer: '1989',
    explanation: 'The Berlin Wall fell on 9 November 1989, symbolizing the end of the Cold War and leading to German reunification in 1990.',
    tags: ['Cold War', 'Berlin Wall', 'fall'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-cold-004',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Cuban Missile Crisis',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What year did the Cuban Missile Crisis occur?',
    correctAnswer: '1962',
    wrongAnswers: ['1960', '1963', '1965'],
    options: ['1962', '1960', '1963', '1965'],
    explanation: 'The Cuban Missile Crisis occurred in October 1962 when the US discovered Soviet nuclear missiles in Cuba, bringing the world close to nuclear war.',
    tags: ['Cold War', 'Cuban Missile Crisis', 'nuclear'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-cold-005',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Cuban Missile Crisis',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The Cuban Missile Crisis lasted for 13 days.',
    correctAnswer: 'True',
    explanation: 'The crisis lasted from 16-28 October 1962. It ended when the Soviets agreed to remove missiles in exchange for US promises not to invade Cuba.',
    tags: ['Cold War', 'Cuban Missile Crisis', 'duration'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-cold-006',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Cuban Missile Crisis',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Who was the US President during the Cuban Missile Crisis?',
    correctAnswer: 'John F. Kennedy',
    wrongAnswers: [
      'Dwight D. Eisenhower',
      'Lyndon B. Johnson',
      'Richard Nixon'
    ],
    options: [
      'John F. Kennedy',
      'Dwight D. Eisenhower',
      'Lyndon B. Johnson',
      'Richard Nixon'
    ],
    explanation: 'President John F. Kennedy navigated the crisis through a naval blockade of Cuba rather than military strikes.',
    tags: ['Cold War', 'Cuban Missile Crisis', 'Kennedy'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-cold-007',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Proxy Wars',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the Truman Doctrine?',
    correctAnswer: 'US policy to contain the spread of communism by supporting free peoples',
    wrongAnswers: [
      'A plan to rebuild Europe after WWII',
      'A treaty banning nuclear weapons',
      'An agreement to divide Germany'
    ],
    options: [
      'US policy to contain the spread of communism by supporting free peoples',
      'A plan to rebuild Europe after WWII',
      'A treaty banning nuclear weapons',
      'An agreement to divide Germany'
    ],
    explanation: 'The Truman Doctrine (1947) committed the US to containing communism, initially by supporting Greece and Turkey.',
    tags: ['Cold War', 'Truman Doctrine', 'containment'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-cold-008',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Proxy Wars',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The _____ Plan provided economic aid to help rebuild Western Europe after WWII.',
    correctAnswer: 'Marshall',
    explanation: 'The Marshall Plan (1948-1952) provided $13 billion in economic aid to rebuild Western European economies and prevent the spread of communism.',
    tags: ['Cold War', 'Marshall Plan', 'aid'],
    yearGroup: [10, 11]
  },

  // ============================================
  // CIVIL RIGHTS - USA
  // ============================================
  {
    id: 'hist-gcse-civil-001',
    subject: 'history',
    topic: 'Civil Rights',
    subtopic: 'USA',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What did the Montgomery Bus Boycott of 1955-1956 protest against?',
    correctAnswer: 'Racial segregation on public buses',
    wrongAnswers: [
      'High bus fares',
      'Poor bus services',
      'Unemployment among bus drivers'
    ],
    options: [
      'Racial segregation on public buses',
      'High bus fares',
      'Poor bus services',
      'Unemployment among bus drivers'
    ],
    explanation: 'The boycott began after Rosa Parks refused to give up her seat. It lasted 381 days and ended with the Supreme Court ruling bus segregation unconstitutional.',
    tags: ['Civil Rights', 'USA', 'Montgomery'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-civil-002',
    subject: 'history',
    topic: 'Civil Rights',
    subtopic: 'USA',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Martin Luther King Jr. delivered his famous "I Have a _____" speech in 1963.',
    correctAnswer: 'Dream',
    explanation: 'The "I Have a Dream" speech was delivered at the March on Washington on 28 August 1963 and is one of the most famous speeches in history.',
    tags: ['Civil Rights', 'USA', 'MLK'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-civil-003',
    subject: 'history',
    topic: 'Civil Rights',
    subtopic: 'USA',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What did Jim Crow laws enforce in the American South?',
    correctAnswer: 'Racial segregation in public facilities',
    wrongAnswers: [
      'Voting rights for all citizens',
      'Equal pay for workers',
      'Integration in schools'
    ],
    options: [
      'Racial segregation in public facilities',
      'Voting rights for all citizens',
      'Equal pay for workers',
      'Integration in schools'
    ],
    explanation: 'Jim Crow laws enforced "separate but equal" segregation in schools, transport, restaurants, and other public facilities from the 1870s to 1960s.',
    tags: ['Civil Rights', 'USA', 'Jim Crow'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-civil-004',
    subject: 'history',
    topic: 'Civil Rights',
    subtopic: 'USA',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The Civil Rights Act of 1964 outlawed discrimination based on race, color, religion, sex, or national origin.',
    correctAnswer: 'True',
    explanation: 'The Civil Rights Act of 1964 was landmark legislation that ended Jim Crow laws and made discrimination in public places illegal.',
    tags: ['Civil Rights', 'USA', 'legislation'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-civil-005',
    subject: 'history',
    topic: 'Civil Rights',
    subtopic: 'USA',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Who was the leader of the Black Power movement and the Nation of Islam?',
    correctAnswer: 'Malcolm X',
    wrongAnswers: [
      'Martin Luther King Jr.',
      'Rosa Parks',
      'Jesse Jackson'
    ],
    options: [
      'Malcolm X',
      'Martin Luther King Jr.',
      'Rosa Parks',
      'Jesse Jackson'
    ],
    explanation: 'Malcolm X advocated for Black empowerment and self-defense, offering a more militant alternative to King s nonviolent approach.',
    tags: ['Civil Rights', 'USA', 'Malcolm X'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-civil-006',
    subject: 'history',
    topic: 'Civil Rights',
    subtopic: 'USA',
    difficulty: 'gcse',
    type: 'order',
    question: 'Put these Civil Rights events in chronological order:',
    correctAnswer: ['Brown v. Board of Education', 'Montgomery Bus Boycott', 'Little Rock Nine', 'March on Washington', 'Civil Rights Act'],
    explanation: 'Brown v. Board (1954), Montgomery (1955-56), Little Rock (1957), March on Washington (1963), Civil Rights Act (1964).',
    tags: ['Civil Rights', 'USA', 'chronology'],
    yearGroup: [10, 11]
  },

  // ============================================
  // CIVIL RIGHTS - UK
  // ============================================
  {
    id: 'hist-gcse-civil-007',
    subject: 'history',
    topic: 'Civil Rights',
    subtopic: 'UK',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the Windrush Generation?',
    correctAnswer: 'Caribbean migrants who came to Britain from 1948 onwards',
    wrongAnswers: [
      'British soldiers who served in WWII',
      'Refugees from Nazi Germany',
      'Irish immigrants in the 1840s'
    ],
    options: [
      'Caribbean migrants who came to Britain from 1948 onwards',
      'British soldiers who served in WWII',
      'Refugees from Nazi Germany',
      'Irish immigrants in the 1840s'
    ],
    explanation: 'The Windrush Generation is named after the ship HMT Empire Windrush, which brought one of the first large groups of Caribbean immigrants to Britain in 1948.',
    tags: ['Civil Rights', 'UK', 'Windrush'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-civil-008',
    subject: 'history',
    topic: 'Civil Rights',
    subtopic: 'UK',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The Race Relations Act was passed in Britain in _____.',
    correctAnswer: '1965',
    explanation: 'The Race Relations Act 1965 was the first legislation in Britain to address racial discrimination, banning it in public places.',
    tags: ['Civil Rights', 'UK', 'legislation'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-civil-009',
    subject: 'history',
    topic: 'Civil Rights',
    subtopic: 'UK',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The Brixton riots of 1981 were partly caused by tensions between Black communities and the police.',
    correctAnswer: 'True',
    explanation: 'The Brixton riots were sparked by heavy-handed policing, particularly the "sus laws" that allowed stop and search based on suspicion.',
    tags: ['Civil Rights', 'UK', 'Brixton'],
    yearGroup: [10, 11]
  },

  // ============================================
  // MEDICINE THROUGH TIME
  // ============================================
  {
    id: 'hist-gcse-med-001',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Ancient Medicine',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What did Hippocrates contribute to medicine?',
    correctAnswer: 'The Theory of the Four Humours and clinical observation',
    wrongAnswers: [
      'The discovery of penicillin',
      'The invention of vaccination',
      'The development of antiseptic surgery'
    ],
    options: [
      'The Theory of the Four Humours and clinical observation',
      'The discovery of penicillin',
      'The invention of vaccination',
      'The development of antiseptic surgery'
    ],
    explanation: 'Hippocrates believed illness was caused by an imbalance in four humours (blood, phlegm, yellow bile, black bile) rather than supernatural causes.',
    tags: ['Medicine', 'Hippocrates', 'Four Humours'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-med-002',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Medieval Medicine',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'During the Medieval period, the Church banned the dissection of human bodies.',
    correctAnswer: 'True',
    explanation: 'The Church restricted dissection, believing the body should remain whole for resurrection. This limited medical knowledge of anatomy.',
    tags: ['Medicine', 'Medieval', 'Church'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-med-003',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Renaissance',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Andreas _____ proved Galen wrong about human anatomy through dissection in the 16th century.',
    correctAnswer: 'Vesalius',
    explanation: 'Vesalius published "On the Fabric of the Human Body" (1543), correcting many of Galens anatomical errors through careful dissection.',
    tags: ['Medicine', 'Vesalius', 'anatomy'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-med-004',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Industrial Revolution',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What did Edward Jenner discover in 1796?',
    correctAnswer: 'Vaccination against smallpox using cowpox',
    wrongAnswers: [
      'The germ theory of disease',
      'Penicillin',
      'The structure of DNA'
    ],
    options: [
      'Vaccination against smallpox using cowpox',
      'The germ theory of disease',
      'Penicillin',
      'The structure of DNA'
    ],
    explanation: 'Jenner noticed milkmaids who had cowpox did not get smallpox. He proved vaccination could prevent the disease.',
    tags: ['Medicine', 'Jenner', 'vaccination'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-med-005',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Germ Theory',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Who developed the Germ Theory of disease in 1861?',
    correctAnswer: 'Louis Pasteur',
    wrongAnswers: [
      'Robert Koch',
      'Joseph Lister',
      'Florence Nightingale'
    ],
    options: [
      'Louis Pasteur',
      'Robert Koch',
      'Joseph Lister',
      'Florence Nightingale'
    ],
    explanation: 'Louis Pasteur proved that microorganisms caused disease and decay, revolutionizing medicine and leading to pasteurization.',
    tags: ['Medicine', 'Pasteur', 'Germ Theory'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-med-006',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Surgery',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Joseph Lister introduced _____ acid as an antiseptic in surgery in 1867.',
    correctAnswer: 'carbolic',
    explanation: 'Lister used carbolic acid to sterilize surgical instruments and wounds, dramatically reducing death rates from infection after surgery.',
    tags: ['Medicine', 'Lister', 'antiseptic'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-med-007',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Modern Medicine',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Who discovered penicillin in 1928?',
    correctAnswer: 'Alexander Fleming',
    wrongAnswers: [
      'Howard Florey',
      'Ernst Chain',
      'Louis Pasteur'
    ],
    options: [
      'Alexander Fleming',
      'Howard Florey',
      'Ernst Chain',
      'Louis Pasteur'
    ],
    explanation: 'Alexander Fleming discovered penicillin by accident when mould contaminated his bacterial cultures. Florey and Chain later mass-produced it.',
    tags: ['Medicine', 'Fleming', 'penicillin'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-med-008',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'NHS',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The National Health Service (NHS) was established in Britain in _____.',
    correctAnswer: '1948',
    explanation: 'The NHS was founded on 5 July 1948, providing free healthcare for all British citizens at the point of use.',
    tags: ['Medicine', 'NHS', 'welfare state'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-med-009',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Public Health',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What did John Snow prove about cholera in 1854?',
    correctAnswer: 'That it was spread through contaminated water',
    wrongAnswers: [
      'That it was spread through bad air (miasma)',
      'That it was inherited genetically',
      'That it was caused by bacteria'
    ],
    options: [
      'That it was spread through contaminated water',
      'That it was spread through bad air (miasma)',
      'That it was inherited genetically',
      'That it was caused by bacteria'
    ],
    explanation: 'John Snow traced a cholera outbreak to a contaminated water pump on Broad Street, London, proving waterborne transmission.',
    tags: ['Medicine', 'Snow', 'cholera'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-med-010',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'Nursing',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Florence Nightingale improved nursing standards during the Crimean War.',
    correctAnswer: 'True',
    explanation: 'Florence Nightingale transformed military nursing during the Crimean War (1853-56) and established nursing as a respected profession.',
    tags: ['Medicine', 'Nightingale', 'nursing'],
    yearGroup: [10, 11]
  },

  // ============================================
  // CRIME AND PUNISHMENT THROUGH TIME
  // ============================================
  {
    id: 'hist-gcse-crime-001',
    subject: 'history',
    topic: 'Crime and Punishment',
    subtopic: 'Medieval',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was trial by ordeal in Medieval times?',
    correctAnswer: 'A test where God was believed to reveal guilt or innocence through physical trials',
    wrongAnswers: [
      'A trial by jury of 12 people',
      'A formal court hearing with lawyers',
      'A public vote on guilt'
    ],
    options: [
      'A test where God was believed to reveal guilt or innocence through physical trials',
      'A trial by jury of 12 people',
      'A formal court hearing with lawyers',
      'A public vote on guilt'
    ],
    explanation: 'Trial by ordeal included tests like holding hot iron or being thrown in water. Survival or quick healing was seen as proof of innocence.',
    tags: ['Crime', 'Medieval', 'ordeal'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-crime-002',
    subject: 'history',
    topic: 'Crime and Punishment',
    subtopic: 'Medieval',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The _____ and cry required all villagers to chase and catch criminals.',
    correctAnswer: 'hue',
    explanation: 'The hue and cry was a medieval system where anyone witnessing a crime had to raise the alarm and pursue the criminal.',
    tags: ['Crime', 'Medieval', 'hue and cry'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-crime-003',
    subject: 'history',
    topic: 'Crime and Punishment',
    subtopic: 'Early Modern',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the Bloody Code?',
    correctAnswer: 'A period when over 200 crimes were punishable by death',
    wrongAnswers: [
      'A secret criminal organization',
      'A medieval torture method',
      'A book of criminal laws'
    ],
    options: [
      'A period when over 200 crimes were punishable by death',
      'A secret criminal organization',
      'A medieval torture method',
      'A book of criminal laws'
    ],
    explanation: 'The Bloody Code (1688-1815) saw the death penalty applied to crimes including stealing goods worth over 5 shillings.',
    tags: ['Crime', 'Bloody Code', 'capital punishment'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-crime-004',
    subject: 'history',
    topic: 'Crime and Punishment',
    subtopic: 'Early Modern',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Transportation to Australia was used as a punishment in Britain from the late 18th century.',
    correctAnswer: 'True',
    explanation: 'Transportation sent convicts to Australian colonies from 1787 to 1868. Over 160,000 convicts were transported as an alternative to execution.',
    tags: ['Crime', 'transportation', 'Australia'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-crime-005',
    subject: 'history',
    topic: 'Crime and Punishment',
    subtopic: 'Industrial',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Who established the Metropolitan Police Force in 1829?',
    correctAnswer: 'Robert Peel',
    wrongAnswers: [
      'William Gladstone',
      'Benjamin Disraeli',
      'Arthur Wellesley'
    ],
    options: [
      'Robert Peel',
      'William Gladstone',
      'Benjamin Disraeli',
      'Arthur Wellesley'
    ],
    explanation: 'Robert Peel established the Metropolitan Police, the first professional police force in Britain. Officers were nicknamed "Bobbies" after him.',
    tags: ['Crime', 'Peel', 'police'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-crime-006',
    subject: 'history',
    topic: 'Crime and Punishment',
    subtopic: 'Industrial',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Elizabeth Fry campaigned for better conditions for _____ in the 19th century.',
    correctAnswer: 'prisoners',
    explanation: 'Elizabeth Fry was a prison reformer who campaigned for better treatment of female prisoners and helped improve conditions in Newgate Prison.',
    tags: ['Crime', 'Fry', 'prison reform'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-crime-007',
    subject: 'history',
    topic: 'Crime and Punishment',
    subtopic: 'Modern',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'When was the death penalty abolished in Britain for murder?',
    correctAnswer: '1965',
    wrongAnswers: ['1945', '1955', '1975'],
    options: ['1965', '1945', '1955', '1975'],
    explanation: 'The Murder (Abolition of Death Penalty) Act 1965 suspended the death penalty for murder. It was made permanent in 1969.',
    tags: ['Crime', 'death penalty', 'abolition'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-crime-008',
    subject: 'history',
    topic: 'Crime and Punishment',
    subtopic: 'Witchcraft',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The peak period for witch trials in England was the 16th and 17th centuries.',
    correctAnswer: 'True',
    explanation: 'Witch trials peaked between 1560-1660, with the most intense period being the English Civil War era. Around 500 people were executed.',
    tags: ['Crime', 'witchcraft', 'persecution'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-crime-009',
    subject: 'history',
    topic: 'Crime and Punishment',
    subtopic: 'Witchcraft',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Matthew _____ was known as the Witchfinder General in 1640s England.',
    correctAnswer: 'Hopkins',
    explanation: 'Matthew Hopkins claimed to be the Witchfinder General and was responsible for the execution of around 300 alleged witches.',
    tags: ['Crime', 'Hopkins', 'witchcraft'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-crime-010',
    subject: 'history',
    topic: 'Crime and Punishment',
    subtopic: 'Highwaymen',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why did highway robbery decline after the 18th century?',
    correctAnswer: 'Improved roads, enclosure of common land, and better policing',
    wrongAnswers: [
      'All highwaymen were executed',
      'People stopped travelling',
      'Horses became too expensive'
    ],
    options: [
      'Improved roads, enclosure of common land, and better policing',
      'All highwaymen were executed',
      'People stopped travelling',
      'Horses became too expensive'
    ],
    explanation: 'Better roads meant faster travel, enclosed land removed hiding places, and the new police force improved law enforcement.',
    tags: ['Crime', 'highwaymen', 'decline'],
    yearGroup: [10, 11]
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Various Topics
  // ============================================
  {
    id: 'hist-gcse-ww1-016',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Technology',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which new weapon was first used at the Battle of the Somme in 1916?',
    correctAnswer: 'Tanks',
    wrongAnswers: [
      'Machine guns',
      'Poison gas',
      'Submarines'
    ],
    options: [
      'Tanks',
      'Machine guns',
      'Poison gas',
      'Submarines'
    ],
    explanation: 'Tanks were first used in battle on 15 September 1916 at the Somme, though early models were unreliable and slow.',
    tags: ['WWI', 'technology', 'tanks'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww1-017',
    subject: 'history',
    topic: 'World War One',
    subtopic: 'Technology',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Poison gas was banned by the Geneva Protocol after WWI.',
    correctAnswer: 'True',
    explanation: 'The 1925 Geneva Protocol banned the use of chemical and biological weapons in warfare following their devastating effects in WWI.',
    tags: ['WWI', 'technology', 'gas'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-nazi-011',
    subject: 'history',
    topic: 'Nazi Germany',
    subtopic: 'Youth',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the Hitler Youth?',
    correctAnswer: 'A Nazi organization to indoctrinate young Germans',
    wrongAnswers: [
      'A school for gifted students',
      'A sports club',
      'A military training academy'
    ],
    options: [
      'A Nazi organization to indoctrinate young Germans',
      'A school for gifted students',
      'A sports club',
      'A military training academy'
    ],
    explanation: 'The Hitler Youth trained boys aged 10-18 in Nazi ideology, physical fitness, and military skills. Membership became compulsory in 1936.',
    tags: ['Nazi', 'youth', 'indoctrination'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-nazi-012',
    subject: 'history',
    topic: 'Nazi Germany',
    subtopic: 'Opposition',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The White _____ was a student resistance group in Nazi Germany.',
    correctAnswer: 'Rose',
    explanation: 'The White Rose was a non-violent resistance group led by students Hans and Sophie Scholl. They were executed in 1943 for distributing anti-Nazi leaflets.',
    tags: ['Nazi', 'opposition', 'White Rose'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-cold-009',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Space Race',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Who was the first human in space?',
    correctAnswer: 'Yuri Gagarin',
    wrongAnswers: [
      'Neil Armstrong',
      'John Glenn',
      'Buzz Aldrin'
    ],
    options: [
      'Yuri Gagarin',
      'Neil Armstrong',
      'John Glenn',
      'Buzz Aldrin'
    ],
    explanation: 'Soviet cosmonaut Yuri Gagarin became the first human in space on 12 April 1961, orbiting Earth in Vostok 1.',
    tags: ['Cold War', 'Space Race', 'Gagarin'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-cold-010',
    subject: 'history',
    topic: 'Cold War',
    subtopic: 'Space Race',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The first Moon landing was achieved by Apollo _____ in 1969.',
    correctAnswer: '11',
    explanation: 'Apollo 11 landed on the Moon on 20 July 1969. Neil Armstrong became the first person to walk on the Moon.',
    tags: ['Cold War', 'Space Race', 'Moon landing'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww2-013',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'Pacific',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What event brought the United States into World War Two?',
    correctAnswer: 'The Japanese attack on Pearl Harbor',
    wrongAnswers: [
      'The invasion of Poland',
      'The fall of France',
      'The Battle of Britain'
    ],
    options: [
      'The Japanese attack on Pearl Harbor',
      'The invasion of Poland',
      'The fall of France',
      'The Battle of Britain'
    ],
    explanation: 'Japan attacked Pearl Harbor, Hawaii, on 7 December 1941, killing over 2,400 Americans and prompting the US to declare war.',
    tags: ['WWII', 'Pearl Harbor', 'USA'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww2-014',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'Pacific',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The atomic bombs were dropped on Hiroshima and _____.',
    correctAnswer: 'Nagasaki',
    explanation: 'Atomic bombs were dropped on Hiroshima (6 August 1945) and Nagasaki (9 August 1945), leading to Japans surrender.',
    tags: ['WWII', 'atomic bomb', 'Japan'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-ww2-015',
    subject: 'history',
    topic: 'World War Two',
    subtopic: 'End of War',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What date is VE Day?',
    correctAnswer: '8 May 1945',
    wrongAnswers: [
      '8 May 1944',
      '2 September 1945',
      '6 June 1944'
    ],
    options: [
      '8 May 1945',
      '8 May 1944',
      '2 September 1945',
      '6 June 1944'
    ],
    explanation: 'VE (Victory in Europe) Day on 8 May 1945 marked the formal acceptance of Germanys unconditional surrender.',
    tags: ['WWII', 'VE Day', 'surrender'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-med-011',
    subject: 'history',
    topic: 'Medicine Through Time',
    subtopic: 'DNA',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Who discovered the structure of DNA in 1953?',
    correctAnswer: 'Watson and Crick (with contributions from Franklin and Wilkins)',
    wrongAnswers: [
      'Louis Pasteur',
      'Alexander Fleming',
      'Edward Jenner'
    ],
    options: [
      'Watson and Crick (with contributions from Franklin and Wilkins)',
      'Louis Pasteur',
      'Alexander Fleming',
      'Edward Jenner'
    ],
    explanation: 'James Watson and Francis Crick determined DNAs double helix structure using X-ray data, crucially including work by Rosalind Franklin.',
    tags: ['Medicine', 'DNA', 'genetics'],
    yearGroup: [10, 11]
  },
  {
    id: 'hist-gcse-civil-010',
    subject: 'history',
    topic: 'Civil Rights',
    subtopic: 'USA',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the significance of Brown v. Board of Education (1954)?',
    correctAnswer: 'It ruled that racial segregation in public schools was unconstitutional',
    wrongAnswers: [
      'It gave Black Americans the right to vote',
      'It ended slavery',
      'It banned discrimination in employment'
    ],
    options: [
      'It ruled that racial segregation in public schools was unconstitutional',
      'It gave Black Americans the right to vote',
      'It ended slavery',
      'It banned discrimination in employment'
    ],
    explanation: 'Brown v. Board overturned "separate but equal" doctrine in education, declaring segregation inherently unequal.',
    tags: ['Civil Rights', 'USA', 'Brown v Board'],
    yearGroup: [10, 11]
  }
];

// ============================================
// TERM DEFINITIONS
// ============================================
export const gcseHistoryTerms: TermDefinition[] = [
  {
    id: 'hist-term-gcse-001',
    subject: 'history',
    topic: 'World War One',
    difficulty: 'gcse',
    term: 'Militarism',
    definition: 'The belief that a country should maintain a strong military capability and be prepared to use it aggressively to defend or promote national interests.',
    example: 'Germany and Britain competed in a naval arms race before WWI, building increasingly powerful battleships.',
    tags: ['WWI', 'causes', 'MAIN']
  },
  {
    id: 'hist-term-gcse-002',
    subject: 'history',
    topic: 'World War One',
    difficulty: 'gcse',
    term: 'Nationalism',
    definition: 'An extreme form of patriotism marked by a feeling of superiority over other countries.',
    example: 'Serbian nationalism led to the assassination of Archduke Franz Ferdinand by Gavrilo Princip.',
    tags: ['WWI', 'causes', 'MAIN']
  },
  {
    id: 'hist-term-gcse-003',
    subject: 'history',
    topic: 'World War One',
    difficulty: 'gcse',
    term: 'Imperialism',
    definition: 'A policy of extending a countrys power and influence through colonization, use of military force, or other means.',
    example: 'European powers competed for colonies in Africa and Asia, creating tensions that contributed to WWI.',
    tags: ['WWI', 'causes', 'MAIN']
  },
  {
    id: 'hist-term-gcse-004',
    subject: 'history',
    topic: 'World War One',
    difficulty: 'gcse',
    term: 'Stalemate',
    definition: 'A situation in which neither side in a conflict is able to make progress or gain an advantage.',
    example: 'The Western Front became a stalemate as both sides dug into trenches that stretched from the English Channel to Switzerland.',
    tags: ['WWI', 'trench warfare']
  },
  {
    id: 'hist-term-gcse-005',
    subject: 'history',
    topic: 'Weimar Germany',
    difficulty: 'gcse',
    term: 'Hyperinflation',
    definition: 'Extremely rapid or out of control inflation where prices increase exponentially.',
    example: 'In 1923 Germany, a loaf of bread cost 200 billion marks as the currency became worthless.',
    tags: ['Weimar', 'economic crisis']
  },
  {
    id: 'hist-term-gcse-006',
    subject: 'history',
    topic: 'Weimar Germany',
    difficulty: 'gcse',
    term: 'Putsch',
    definition: 'An attempted coup or violent uprising to seize power.',
    example: 'The Munich Putsch of 1923 was Hitlers failed attempt to overthrow the Weimar government.',
    tags: ['Weimar', 'Nazi', 'coups']
  },
  {
    id: 'hist-term-gcse-007',
    subject: 'history',
    topic: 'Nazi Germany',
    difficulty: 'gcse',
    term: 'Totalitarianism',
    definition: 'A system of government that requires complete subservience to the state and attempts to control all aspects of public and private life.',
    example: 'Nazi Germany was a totalitarian state where the government controlled the media, education, and all aspects of daily life.',
    tags: ['Nazi', 'dictatorship']
  },
  {
    id: 'hist-term-gcse-008',
    subject: 'history',
    topic: 'Nazi Germany',
    difficulty: 'gcse',
    term: 'Propaganda',
    definition: 'Information, especially of a biased or misleading nature, used to promote a political cause or point of view.',
    example: 'Goebbels used propaganda through radio, film, and newspapers to promote Nazi ideology and demonize Jews.',
    tags: ['Nazi', 'Goebbels', 'control']
  },
  {
    id: 'hist-term-gcse-009',
    subject: 'history',
    topic: 'Nazi Germany',
    difficulty: 'gcse',
    term: 'Holocaust',
    definition: 'The systematic, state-sponsored persecution and murder of six million Jews by the Nazi regime.',
    example: 'The Holocaust involved concentration camps, mass shootings, and death camps like Auschwitz.',
    tags: ['Nazi', 'genocide', 'Jews']
  },
  {
    id: 'hist-term-gcse-010',
    subject: 'history',
    topic: 'Cold War',
    difficulty: 'gcse',
    term: 'Containment',
    definition: 'US foreign policy strategy aimed at preventing the spread of communism to other countries.',
    example: 'The Truman Doctrine was based on containment, providing aid to countries resisting communist influence.',
    tags: ['Cold War', 'USA', 'policy']
  },
  {
    id: 'hist-term-gcse-011',
    subject: 'history',
    topic: 'Cold War',
    difficulty: 'gcse',
    term: 'Superpower',
    definition: 'A very powerful and influential nation, especially one with the ability to project military force globally.',
    example: 'After WWII, the USA and USSR emerged as the two superpowers competing for global dominance.',
    tags: ['Cold War', 'USA', 'USSR']
  },
  {
    id: 'hist-term-gcse-012',
    subject: 'history',
    topic: 'Cold War',
    difficulty: 'gcse',
    term: 'Mutually Assured Destruction (MAD)',
    definition: 'A doctrine of military strategy in which a full-scale use of nuclear weapons by two opposing sides would cause the complete annihilation of both.',
    example: 'MAD prevented direct conflict between the USA and USSR as both knew nuclear war would destroy both nations.',
    tags: ['Cold War', 'nuclear', 'deterrence']
  },
  {
    id: 'hist-term-gcse-013',
    subject: 'history',
    topic: 'Civil Rights',
    difficulty: 'gcse',
    term: 'Segregation',
    definition: 'The enforced separation of different racial groups in a country, community, or establishment.',
    example: 'Jim Crow laws enforced segregation in schools, buses, restaurants, and other public facilities in the American South.',
    tags: ['Civil Rights', 'USA', 'discrimination']
  },
  {
    id: 'hist-term-gcse-014',
    subject: 'history',
    topic: 'Civil Rights',
    difficulty: 'gcse',
    term: 'Non-violent protest',
    definition: 'A form of political protest that does not involve violence or destruction, often including sit-ins, marches, and boycotts.',
    example: 'Martin Luther King Jr. advocated non-violent protest, inspired by Mahatma Gandhis methods.',
    tags: ['Civil Rights', 'USA', 'MLK']
  },
  {
    id: 'hist-term-gcse-015',
    subject: 'history',
    topic: 'Medicine Through Time',
    difficulty: 'gcse',
    term: 'Four Humours',
    definition: 'An ancient medical theory that the body contained four fluids (blood, phlegm, yellow bile, black bile) whose balance affected health.',
    example: 'Doctors might prescribe bloodletting to remove excess blood if they believed this humour was out of balance.',
    tags: ['Medicine', 'ancient', 'Hippocrates']
  },
  {
    id: 'hist-term-gcse-016',
    subject: 'history',
    topic: 'Medicine Through Time',
    difficulty: 'gcse',
    term: 'Germ Theory',
    definition: 'The theory that certain diseases are caused by microorganisms, too small to see without magnification, invading the body.',
    example: 'Pasteurs germ theory disproved the miasma theory and led to major advances in preventing disease.',
    tags: ['Medicine', 'Pasteur', 'modern']
  },
  {
    id: 'hist-term-gcse-017',
    subject: 'history',
    topic: 'Medicine Through Time',
    difficulty: 'gcse',
    term: 'Vaccination',
    definition: 'The administration of a vaccine to stimulate the immune system to develop protection against a specific disease.',
    example: 'Jenners smallpox vaccine was the first successful vaccine and eventually led to the eradication of smallpox.',
    tags: ['Medicine', 'Jenner', 'prevention']
  },
  {
    id: 'hist-term-gcse-018',
    subject: 'history',
    topic: 'Crime and Punishment',
    difficulty: 'gcse',
    term: 'Deterrence',
    definition: 'The use of punishment to discourage people from committing crimes through fear of consequences.',
    example: 'Public executions under the Bloody Code were intended as deterrence, showing potential criminals their fate.',
    tags: ['Crime', 'punishment', 'theory']
  },
  {
    id: 'hist-term-gcse-019',
    subject: 'history',
    topic: 'Crime and Punishment',
    difficulty: 'gcse',
    term: 'Transportation',
    definition: 'The sending of convicted criminals to overseas colonies as punishment.',
    example: 'Over 160,000 convicts were transported from Britain to Australia between 1787 and 1868.',
    tags: ['Crime', 'punishment', 'colonies']
  },
  {
    id: 'hist-term-gcse-020',
    subject: 'history',
    topic: 'World War Two',
    difficulty: 'gcse',
    term: 'Blitzkrieg',
    definition: 'A German military tactic meaning "lightning war" involving rapid, concentrated attacks using tanks and aircraft.',
    example: 'Germany used blitzkrieg tactics to defeat Poland in just five weeks in 1939.',
    tags: ['WWII', 'tactics', 'Germany']
  },
  {
    id: 'hist-term-gcse-021',
    subject: 'history',
    topic: 'World War Two',
    difficulty: 'gcse',
    term: 'Appeasement',
    definition: 'The policy of making concessions to an aggressor in order to avoid conflict.',
    example: 'Neville Chamberlain pursued appeasement at Munich in 1938, allowing Hitler to annex the Sudetenland.',
    tags: ['WWII', 'policy', 'Chamberlain']
  },
  {
    id: 'hist-term-gcse-022',
    subject: 'history',
    topic: 'World War One',
    difficulty: 'gcse',
    term: 'Armistice',
    definition: 'A formal agreement of warring parties to stop fighting, not necessarily ending the war.',
    example: 'The Armistice of 11 November 1918 ended fighting in WWI, though the war officially ended with the Treaty of Versailles.',
    tags: ['WWI', 'peace']
  },
  {
    id: 'hist-term-gcse-023',
    subject: 'history',
    topic: 'World War One',
    difficulty: 'gcse',
    term: 'Reparations',
    definition: 'Compensation for war damage paid by a defeated state.',
    example: 'Germany was required to pay 132 billion gold marks in reparations under the Treaty of Versailles.',
    tags: ['WWI', 'Treaty of Versailles']
  },
  {
    id: 'hist-term-gcse-024',
    subject: 'history',
    topic: 'Cold War',
    difficulty: 'gcse',
    term: 'Proxy War',
    definition: 'A conflict in which major powers support opposing sides without directly fighting each other.',
    example: 'The Korean War and Vietnam War were proxy wars between the USA and USSR-backed communist forces.',
    tags: ['Cold War', 'conflict']
  },
  {
    id: 'hist-term-gcse-025',
    subject: 'history',
    topic: 'Nazi Germany',
    difficulty: 'gcse',
    term: 'Lebensraum',
    definition: 'German for "living space" - Hitlers policy of territorial expansion to provide land for the German people.',
    example: 'Hitlers pursuit of Lebensraum led to the invasion of Poland and the USSR.',
    tags: ['Nazi', 'expansion', 'policy']
  }
];

// ============================================
// TIMELINE EVENTS
// ============================================
export const gcseHistoryTimeline: TimelineEvent[] = [
  {
    id: 'hist-timeline-gcse-001',
    subject: 'history',
    topic: 'World War One',
    difficulty: 'gcse',
    event: 'Assassination of Archduke Franz Ferdinand',
    year: 1914,
    description: 'The assassination in Sarajevo triggered WWI'
  },
  {
    id: 'hist-timeline-gcse-002',
    subject: 'history',
    topic: 'World War One',
    difficulty: 'gcse',
    event: 'Battle of the Somme begins',
    year: 1916,
    description: 'One of the bloodiest battles in human history'
  },
  {
    id: 'hist-timeline-gcse-003',
    subject: 'history',
    topic: 'World War One',
    difficulty: 'gcse',
    event: 'Armistice Day - WWI ends',
    year: 1918,
    description: 'Fighting ended at 11am on 11 November'
  },
  {
    id: 'hist-timeline-gcse-004',
    subject: 'history',
    topic: 'World War One',
    difficulty: 'gcse',
    event: 'Treaty of Versailles signed',
    year: 1919,
    description: 'Peace treaty officially ending WWI'
  },
  {
    id: 'hist-timeline-gcse-005',
    subject: 'history',
    topic: 'Weimar Germany',
    difficulty: 'gcse',
    event: 'Munich Putsch',
    year: 1923,
    description: 'Hitlers failed attempt to seize power'
  },
  {
    id: 'hist-timeline-gcse-006',
    subject: 'history',
    topic: 'Weimar Germany',
    difficulty: 'gcse',
    event: 'Wall Street Crash',
    year: 1929,
    description: 'Economic collapse leading to global depression'
  },
  {
    id: 'hist-timeline-gcse-007',
    subject: 'history',
    topic: 'Nazi Germany',
    difficulty: 'gcse',
    event: 'Hitler becomes Chancellor',
    year: 1933,
    description: 'Hitler appointed Chancellor on 30 January'
  },
  {
    id: 'hist-timeline-gcse-008',
    subject: 'history',
    topic: 'Nazi Germany',
    difficulty: 'gcse',
    event: 'Reichstag Fire',
    year: 1933,
    description: 'Used as pretext to suspend civil liberties'
  },
  {
    id: 'hist-timeline-gcse-009',
    subject: 'history',
    topic: 'Nazi Germany',
    difficulty: 'gcse',
    event: 'Night of the Long Knives',
    year: 1934,
    description: 'Purge of SA leadership'
  },
  {
    id: 'hist-timeline-gcse-010',
    subject: 'history',
    topic: 'Nazi Germany',
    difficulty: 'gcse',
    event: 'Nuremberg Laws passed',
    year: 1935,
    description: 'Laws stripping Jews of citizenship'
  },
  {
    id: 'hist-timeline-gcse-011',
    subject: 'history',
    topic: 'Nazi Germany',
    difficulty: 'gcse',
    event: 'Kristallnacht',
    year: 1938,
    description: 'Night of Broken Glass - violent pogrom against Jews'
  },
  {
    id: 'hist-timeline-gcse-012',
    subject: 'history',
    topic: 'World War Two',
    difficulty: 'gcse',
    event: 'Germany invades Poland',
    year: 1939,
    description: 'Start of World War Two in Europe'
  },
  {
    id: 'hist-timeline-gcse-013',
    subject: 'history',
    topic: 'World War Two',
    difficulty: 'gcse',
    event: 'Dunkirk evacuation',
    year: 1940,
    description: 'Over 300,000 Allied troops rescued'
  },
  {
    id: 'hist-timeline-gcse-014',
    subject: 'history',
    topic: 'World War Two',
    difficulty: 'gcse',
    event: 'Battle of Britain',
    year: 1940,
    description: 'RAF defeats German Luftwaffe'
  },
  {
    id: 'hist-timeline-gcse-015',
    subject: 'history',
    topic: 'World War Two',
    difficulty: 'gcse',
    event: 'Operation Barbarossa',
    year: 1941,
    description: 'Germany invades Soviet Union'
  },
  {
    id: 'hist-timeline-gcse-016',
    subject: 'history',
    topic: 'World War Two',
    difficulty: 'gcse',
    event: 'Attack on Pearl Harbor',
    year: 1941,
    description: 'Japan attacks USA, bringing America into the war'
  },
  {
    id: 'hist-timeline-gcse-017',
    subject: 'history',
    topic: 'Nazi Germany',
    difficulty: 'gcse',
    event: 'Wannsee Conference',
    year: 1942,
    description: 'Nazi leaders coordinate the Holocaust'
  },
  {
    id: 'hist-timeline-gcse-018',
    subject: 'history',
    topic: 'World War Two',
    difficulty: 'gcse',
    event: 'Battle of Stalingrad ends',
    year: 1943,
    description: 'Major turning point on the Eastern Front'
  },
  {
    id: 'hist-timeline-gcse-019',
    subject: 'history',
    topic: 'World War Two',
    difficulty: 'gcse',
    event: 'D-Day landings',
    year: 1944,
    description: 'Allied invasion of Normandy'
  },
  {
    id: 'hist-timeline-gcse-020',
    subject: 'history',
    topic: 'World War Two',
    difficulty: 'gcse',
    event: 'VE Day',
    year: 1945,
    description: 'Victory in Europe - Germany surrenders'
  },
  {
    id: 'hist-timeline-gcse-021',
    subject: 'history',
    topic: 'World War Two',
    difficulty: 'gcse',
    event: 'Atomic bombs dropped on Japan',
    year: 1945,
    description: 'Hiroshima and Nagasaki bombed'
  },
  {
    id: 'hist-timeline-gcse-022',
    subject: 'history',
    topic: 'Medicine Through Time',
    difficulty: 'gcse',
    event: 'NHS established',
    year: 1948,
    description: 'National Health Service provides free healthcare'
  },
  {
    id: 'hist-timeline-gcse-023',
    subject: 'history',
    topic: 'Civil Rights',
    difficulty: 'gcse',
    event: 'Brown v. Board of Education',
    year: 1954,
    description: 'School segregation ruled unconstitutional'
  },
  {
    id: 'hist-timeline-gcse-024',
    subject: 'history',
    topic: 'Civil Rights',
    difficulty: 'gcse',
    event: 'Montgomery Bus Boycott begins',
    year: 1955,
    description: 'Rosa Parks refuses to give up her seat'
  },
  {
    id: 'hist-timeline-gcse-025',
    subject: 'history',
    topic: 'Cold War',
    difficulty: 'gcse',
    event: 'Berlin Wall built',
    year: 1961,
    description: 'East Germany builds wall dividing Berlin'
  },
  {
    id: 'hist-timeline-gcse-026',
    subject: 'history',
    topic: 'Cold War',
    difficulty: 'gcse',
    event: 'Cuban Missile Crisis',
    year: 1962,
    description: 'World comes closest to nuclear war'
  },
  {
    id: 'hist-timeline-gcse-027',
    subject: 'history',
    topic: 'Civil Rights',
    difficulty: 'gcse',
    event: 'March on Washington',
    year: 1963,
    description: 'MLK delivers "I Have a Dream" speech'
  },
  {
    id: 'hist-timeline-gcse-028',
    subject: 'history',
    topic: 'Civil Rights',
    difficulty: 'gcse',
    event: 'Civil Rights Act passed',
    year: 1964,
    description: 'Outlaws discrimination based on race'
  },
  {
    id: 'hist-timeline-gcse-029',
    subject: 'history',
    topic: 'Crime and Punishment',
    difficulty: 'gcse',
    event: 'Death penalty abolished for murder in UK',
    year: 1965,
    description: 'Capital punishment suspended then abolished'
  },
  {
    id: 'hist-timeline-gcse-030',
    subject: 'history',
    topic: 'Cold War',
    difficulty: 'gcse',
    event: 'Moon landing',
    year: 1969,
    description: 'Apollo 11 lands on the Moon'
  },
  {
    id: 'hist-timeline-gcse-031',
    subject: 'history',
    topic: 'Cold War',
    difficulty: 'gcse',
    event: 'Berlin Wall falls',
    year: 1989,
    description: 'Marks the end of Cold War division in Europe'
  },
  {
    id: 'hist-timeline-gcse-032',
    subject: 'history',
    topic: 'Cold War',
    difficulty: 'gcse',
    event: 'Soviet Union dissolves',
    year: 1991,
    description: 'End of the Cold War'
  }
];
