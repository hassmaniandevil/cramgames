import { Question, TermDefinition, Formula } from '../types';

const atomicStructureQuestions: Question[] = [
  {
    id: 'chem-gcse-atomic-001',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Subatomic Particles',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the relative charge of a proton?',
    correctAnswer: '+1',
    wrongAnswers: ['-1', '0', '+2'],
    tags: ['proton', 'charge']
  },
  {
    id: 'chem-gcse-atomic-002',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Subatomic Particles',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the relative mass of a neutron?',
    correctAnswer: '1',
    wrongAnswers: ['0', '2', '0.0005'],
    tags: ['neutron', 'mass']
  },
  {
    id: 'chem-gcse-atomic-003',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Subatomic Particles',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Electrons are found in _____ around the nucleus.',
    correctAnswer: 'shells',
    tags: ['electron', 'shells']
  },
  {
    id: 'chem-gcse-atomic-004',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Atomic Number',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What does the atomic number of an element represent?',
    correctAnswer: 'Number of protons',
    wrongAnswers: ['Number of neutrons', 'Number of electrons and neutrons', 'Total mass'],
    tags: ['atomic number', 'protons']
  },
  {
    id: 'chem-gcse-atomic-005',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Mass Number',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How do you calculate the number of neutrons in an atom?',
    correctAnswer: 'Mass number - atomic number',
    wrongAnswers: ['Mass number + atomic number', 'Atomic number - mass number', 'Mass number × 2'],
    tags: ['neutrons', 'calculation']
  },
  {
    id: 'chem-gcse-atomic-006',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Isotopes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What are isotopes?',
    correctAnswer: 'Atoms with the same number of protons but different numbers of neutrons',
    wrongAnswers: ['Atoms with different numbers of protons', 'Atoms with different numbers of electrons', 'Atoms with no neutrons'],
    tags: ['isotopes']
  },
  {
    id: 'chem-gcse-atomic-007',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Electronic Configuration',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the maximum number of electrons in the first shell?',
    correctAnswer: '2',
    wrongAnswers: ['8', '18', '1'],
    tags: ['electron shells', 'configuration']
  },
  {
    id: 'chem-gcse-atomic-008',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Electronic Configuration',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the electronic configuration of sodium (atomic number 11)?',
    correctAnswer: '2,8,1',
    wrongAnswers: ['2,8,2', '2,9', '2,7,2'],
    tags: ['configuration', 'sodium']
  },
  {
    id: 'chem-gcse-atomic-009',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Periodic Table',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Elements in the same group have the same number of electrons in their outer shell.',
    correctAnswer: 'True',
    tags: ['groups', 'periodic table']
  },
  {
    id: 'chem-gcse-atomic-010',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Periodic Table',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What does the period number indicate about an element?',
    correctAnswer: 'The number of electron shells',
    wrongAnswers: ['The number of protons', 'The number of neutrons', 'The relative atomic mass'],
    tags: ['periods', 'periodic table']
  },
  {
    id: 'chem-gcse-atomic-011',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Development of Atomic Model',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Who discovered the electron?',
    correctAnswer: 'J.J. Thomson',
    wrongAnswers: ['Ernest Rutherford', 'Niels Bohr', 'John Dalton'],
    tags: ['history', 'electron']
  },
  {
    id: 'chem-gcse-atomic-012',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Development of Atomic Model',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What did Rutherford\'s gold foil experiment prove?',
    correctAnswer: 'The atom has a small, dense, positive nucleus',
    wrongAnswers: ['Atoms are solid spheres', 'Electrons orbit in fixed shells', 'Neutrons exist'],
    tags: ['Rutherford', 'nucleus']
  },
  {
    id: 'chem-gcse-atomic-013',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Subatomic Particles',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The relative charge of an electron is _____.',
    correctAnswer: '-1',
    tags: ['electron', 'charge']
  },
  {
    id: 'chem-gcse-atomic-014',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Electronic Configuration',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'How many electrons can the second shell hold?',
    correctAnswer: 8,
    tags: ['electron shells']
  },
  {
    id: 'chem-gcse-atomic-015',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Isotopes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Carbon-12 and Carbon-14 are isotopes. How many neutrons does Carbon-14 have?',
    correctAnswer: '8',
    wrongAnswers: ['6', '14', '12'],
    tags: ['isotopes', 'carbon']
  },
  {
    id: 'chem-gcse-atomic-016',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Relative Atomic Mass',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why is the relative atomic mass of chlorine 35.5?',
    correctAnswer: 'It is an average of its isotopes weighted by abundance',
    wrongAnswers: ['Chlorine has half a neutron', 'It is rounded incorrectly', 'Chlorine loses mass when measured'],
    tags: ['relative atomic mass', 'isotopes']
  },
  {
    id: 'chem-gcse-atomic-017',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Periodic Table',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which group contains the noble gases?',
    correctAnswer: 'Group 0 (or 8)',
    wrongAnswers: ['Group 1', 'Group 7', 'Group 2'],
    tags: ['noble gases', 'groups']
  },
  {
    id: 'chem-gcse-atomic-018',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Periodic Table',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Noble gases are unreactive because they have full outer electron shells.',
    correctAnswer: 'True',
    tags: ['noble gases', 'reactivity']
  },
  {
    id: 'chem-gcse-atomic-019',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Electronic Configuration',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the electronic configuration of chlorine (atomic number 17)?',
    correctAnswer: '2,8,7',
    wrongAnswers: ['2,8,8', '2,7,8', '2,8,6'],
    tags: ['configuration', 'chlorine']
  },
  {
    id: 'chem-gcse-atomic-020',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    subtopic: 'Development of Atomic Model',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What was the "plum pudding" model?',
    correctAnswer: 'Electrons embedded in a sphere of positive charge',
    wrongAnswers: ['Electrons orbiting a nucleus', 'A solid indivisible sphere', 'Protons and neutrons in a nucleus'],
    tags: ['Thomson', 'atomic model']
  }
];

const bondingQuestions: Question[] = [
  {
    id: 'chem-gcse-bonding-001',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Ionic Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What happens during ionic bonding?',
    correctAnswer: 'Electrons are transferred from metal to non-metal atoms',
    wrongAnswers: ['Electrons are shared between atoms', 'Protons are transferred', 'Neutrons are shared'],
    tags: ['ionic bonding', 'electron transfer']
  },
  {
    id: 'chem-gcse-bonding-002',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Ionic Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What charge does a sodium ion have?',
    correctAnswer: '+1',
    wrongAnswers: ['-1', '+2', '0'],
    tags: ['ions', 'sodium']
  },
  {
    id: 'chem-gcse-bonding-003',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Ionic Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What charge does a chloride ion have?',
    correctAnswer: '-1',
    wrongAnswers: ['+1', '-2', '0'],
    tags: ['ions', 'chloride']
  },
  {
    id: 'chem-gcse-bonding-004',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Ionic Compounds',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Ionic compounds conduct electricity when solid.',
    correctAnswer: 'False',
    explanation: 'Ionic compounds only conduct when molten or dissolved because the ions must be free to move.',
    tags: ['ionic compounds', 'conductivity']
  },
  {
    id: 'chem-gcse-bonding-005',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Ionic Compounds',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why do ionic compounds have high melting points?',
    correctAnswer: 'Strong electrostatic forces between ions require lots of energy to overcome',
    wrongAnswers: ['The atoms are very heavy', 'The electrons move slowly', 'The compounds are large'],
    tags: ['ionic compounds', 'melting point']
  },
  {
    id: 'chem-gcse-bonding-006',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Covalent Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is covalent bonding?',
    correctAnswer: 'Sharing of electron pairs between non-metal atoms',
    wrongAnswers: ['Transfer of electrons', 'Sharing of protons', 'Transfer of neutrons'],
    tags: ['covalent bonding']
  },
  {
    id: 'chem-gcse-bonding-007',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Covalent Bonding',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'How many covalent bonds does a carbon atom typically form?',
    correctAnswer: 4,
    tags: ['carbon', 'covalent bonds']
  },
  {
    id: 'chem-gcse-bonding-008',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Covalent Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What type of bond is in a water molecule?',
    correctAnswer: 'Covalent',
    wrongAnswers: ['Ionic', 'Metallic', 'Hydrogen'],
    tags: ['water', 'covalent']
  },
  {
    id: 'chem-gcse-bonding-009',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Simple Molecular Substances',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why do simple molecular substances have low melting points?',
    correctAnswer: 'Weak intermolecular forces are easily overcome',
    wrongAnswers: ['Weak covalent bonds', 'Small atomic masses', 'Few electrons'],
    tags: ['molecular substances', 'melting point']
  },
  {
    id: 'chem-gcse-bonding-010',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Simple Molecular Substances',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Simple molecular substances conduct electricity.',
    correctAnswer: 'False',
    explanation: 'Simple molecular substances do not conduct as they have no free electrons or ions.',
    tags: ['molecular substances', 'conductivity']
  },
  {
    id: 'chem-gcse-bonding-011',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Giant Covalent Structures',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which substance has a giant covalent structure?',
    correctAnswer: 'Diamond',
    wrongAnswers: ['Sodium chloride', 'Water', 'Iron'],
    tags: ['giant covalent', 'diamond']
  },
  {
    id: 'chem-gcse-bonding-012',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Giant Covalent Structures',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why is diamond very hard?',
    correctAnswer: 'Each carbon atom forms four strong covalent bonds in a rigid structure',
    wrongAnswers: ['It contains metal atoms', 'It has ionic bonds', 'The atoms are very heavy'],
    tags: ['diamond', 'properties']
  },
  {
    id: 'chem-gcse-bonding-013',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Giant Covalent Structures',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why does graphite conduct electricity?',
    correctAnswer: 'It has delocalised electrons that can move between layers',
    wrongAnswers: ['It contains metal atoms', 'It has ions', 'The layers are close together'],
    tags: ['graphite', 'conductivity']
  },
  {
    id: 'chem-gcse-bonding-014',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Giant Covalent Structures',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why is graphite slippery?',
    correctAnswer: 'Weak forces between layers allow them to slide over each other',
    wrongAnswers: ['Strong covalent bonds', 'It contains water', 'The atoms are small'],
    tags: ['graphite', 'properties']
  },
  {
    id: 'chem-gcse-bonding-015',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Metallic Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is metallic bonding?',
    correctAnswer: 'Positive metal ions surrounded by a sea of delocalised electrons',
    wrongAnswers: ['Sharing of electrons between atoms', 'Transfer of electrons', 'Atoms held by weak forces'],
    tags: ['metallic bonding']
  },
  {
    id: 'chem-gcse-bonding-016',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Metallic Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why do metals conduct electricity?',
    correctAnswer: 'Delocalised electrons can move through the structure',
    wrongAnswers: ['They contain ions', 'They have covalent bonds', 'They are magnetic'],
    tags: ['metals', 'conductivity']
  },
  {
    id: 'chem-gcse-bonding-017',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Metallic Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why are metals malleable?',
    correctAnswer: 'Layers of ions can slide over each other while maintaining bonding',
    wrongAnswers: ['They have weak bonds', 'They contain no electrons', 'The atoms are soft'],
    tags: ['metals', 'malleability']
  },
  {
    id: 'chem-gcse-bonding-018',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Alloys',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is an alloy?',
    correctAnswer: 'A mixture of two or more metals, or a metal and another element',
    wrongAnswers: ['A pure metal', 'A metal oxide', 'A metal salt'],
    tags: ['alloys']
  },
  {
    id: 'chem-gcse-bonding-019',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Alloys',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why are alloys harder than pure metals?',
    correctAnswer: 'Different sized atoms disrupt the regular arrangement and prevent sliding',
    wrongAnswers: ['They have more electrons', 'They are heavier', 'They have stronger bonds'],
    tags: ['alloys', 'hardness']
  },
  {
    id: 'chem-gcse-bonding-020',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Ionic Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the formula of magnesium oxide?',
    correctAnswer: 'MgO',
    wrongAnswers: ['Mg2O', 'MgO2', 'Mg2O2'],
    tags: ['ionic compounds', 'formulas']
  },
  {
    id: 'chem-gcse-bonding-021',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Covalent Bonding',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How many shared pairs of electrons are in a double bond?',
    correctAnswer: '2',
    wrongAnswers: ['1', '4', '3'],
    tags: ['double bond', 'electrons']
  },
  {
    id: 'chem-gcse-bonding-022',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Fullerenes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What shape is a buckminsterfullerene (C60)?',
    correctAnswer: 'Spherical (like a football)',
    wrongAnswers: ['Flat sheets', 'Tubes', 'Tetrahedral'],
    tags: ['fullerenes', 'C60']
  },
  {
    id: 'chem-gcse-bonding-023',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Nanotubes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Carbon nanotubes can be used as catalysts because they have:',
    correctAnswer: 'A large surface area',
    wrongAnswers: ['Ionic bonds', 'Low melting points', 'No carbon atoms'],
    tags: ['nanotubes', 'catalysts']
  },
  {
    id: 'chem-gcse-bonding-024',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Graphene',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Graphene is a single layer of _____ atoms arranged in hexagons.',
    correctAnswer: 'carbon',
    tags: ['graphene']
  },
  {
    id: 'chem-gcse-bonding-025',
    subject: 'chemistry',
    topic: 'Bonding',
    subtopic: 'Polymers',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What type of bonding holds polymer chains together?',
    correctAnswer: 'Intermolecular forces',
    wrongAnswers: ['Ionic bonds', 'Metallic bonds', 'Nuclear forces'],
    tags: ['polymers', 'bonding']
  }
];

const quantitativeQuestions: Question[] = [
  {
    id: 'chem-gcse-quant-001',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Conservation of Mass',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'In a chemical reaction, mass is conserved.',
    correctAnswer: 'True',
    tags: ['conservation of mass']
  },
  {
    id: 'chem-gcse-quant-002',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Relative Formula Mass',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'Calculate the relative formula mass of H2O (H=1, O=16).',
    correctAnswer: 18,
    tags: ['relative formula mass', 'water']
  },
  {
    id: 'chem-gcse-quant-003',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Relative Formula Mass',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'Calculate the relative formula mass of CO2 (C=12, O=16).',
    correctAnswer: 44,
    tags: ['relative formula mass', 'carbon dioxide']
  },
  {
    id: 'chem-gcse-quant-004',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Moles',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the Avogadro constant?',
    correctAnswer: '6.02 × 10²³',
    wrongAnswers: ['6.02 × 10²²', '3.14 × 10²³', '6.02 × 10²⁴'],
    tags: ['Avogadro', 'moles']
  },
  {
    id: 'chem-gcse-quant-005',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Moles',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How do you calculate the number of moles?',
    correctAnswer: 'Mass ÷ relative formula mass',
    wrongAnswers: ['Mass × relative formula mass', 'Relative formula mass ÷ mass', 'Mass + relative formula mass'],
    tags: ['moles', 'calculation']
  },
  {
    id: 'chem-gcse-quant-006',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Moles',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'How many moles are in 36g of water? (Mr of H2O = 18)',
    correctAnswer: 2,
    tags: ['moles', 'calculation']
  },
  {
    id: 'chem-gcse-quant-007',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Balancing Equations',
    difficulty: 'gcse',
    type: 'equation',
    question: 'Balance the equation: Mg + O2 → MgO',
    correctAnswer: '2Mg + O2 → 2MgO',
    tags: ['balancing equations']
  },
  {
    id: 'chem-gcse-quant-008',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Balancing Equations',
    difficulty: 'gcse',
    type: 'equation',
    question: 'Balance the equation: H2 + Cl2 → HCl',
    correctAnswer: 'H2 + Cl2 → 2HCl',
    tags: ['balancing equations']
  },
  {
    id: 'chem-gcse-quant-009',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Concentration',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the unit for concentration?',
    correctAnswer: 'g/dm³ or mol/dm³',
    wrongAnswers: ['g/cm', 'mol/cm', 'dm³/g'],
    tags: ['concentration', 'units']
  },
  {
    id: 'chem-gcse-quant-010',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Concentration',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'Calculate the concentration in g/dm³ if 20g of solute is dissolved in 500cm³ of solution.',
    correctAnswer: 40,
    tags: ['concentration', 'calculation']
  },
  {
    id: 'chem-gcse-quant-011',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Percentage Yield',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How do you calculate percentage yield?',
    correctAnswer: '(Actual yield ÷ theoretical yield) × 100',
    wrongAnswers: ['(Theoretical yield ÷ actual yield) × 100', 'Actual yield × theoretical yield', 'Actual yield + theoretical yield'],
    tags: ['percentage yield']
  },
  {
    id: 'chem-gcse-quant-012',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Percentage Yield',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'If the theoretical yield is 50g and the actual yield is 40g, what is the percentage yield?',
    correctAnswer: 80,
    tags: ['percentage yield', 'calculation']
  },
  {
    id: 'chem-gcse-quant-013',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Atom Economy',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is atom economy?',
    correctAnswer: 'The percentage of reactant atoms that form the desired product',
    wrongAnswers: ['The number of atoms in a reaction', 'The cost of atoms', 'The speed of the reaction'],
    tags: ['atom economy']
  },
  {
    id: 'chem-gcse-quant-014',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Molar Volume',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the molar volume of any gas at room temperature and pressure (RTP)?',
    correctAnswer: '24 dm³',
    wrongAnswers: ['22.4 dm³', '1 dm³', '12 dm³'],
    tags: ['molar volume', 'gases']
  },
  {
    id: 'chem-gcse-quant-015',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Molar Volume',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'What volume does 2 moles of gas occupy at RTP?',
    correctAnswer: 48,
    tags: ['molar volume', 'calculation']
  },
  {
    id: 'chem-gcse-quant-016',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Limiting Reactant',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the limiting reactant?',
    correctAnswer: 'The reactant that is completely used up first, limiting the amount of product',
    wrongAnswers: ['The reactant in excess', 'The catalyst', 'The product'],
    tags: ['limiting reactant']
  },
  {
    id: 'chem-gcse-quant-017',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Relative Formula Mass',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'Calculate the relative formula mass of NaCl (Na=23, Cl=35.5).',
    correctAnswer: 58.5,
    tags: ['relative formula mass']
  },
  {
    id: 'chem-gcse-quant-018',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Percentage Composition',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'Calculate the percentage of oxygen in CO2 (C=12, O=16).',
    correctAnswer: 72.7,
    tags: ['percentage composition']
  },
  {
    id: 'chem-gcse-quant-019',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Empirical Formula',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is an empirical formula?',
    correctAnswer: 'The simplest whole number ratio of atoms of each element in a compound',
    wrongAnswers: ['The actual number of atoms in a molecule', 'The mass of a molecule', 'The number of moles'],
    tags: ['empirical formula']
  },
  {
    id: 'chem-gcse-quant-020',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Titration',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the purpose of a titration?',
    correctAnswer: 'To find the concentration of an unknown solution',
    wrongAnswers: ['To heat a solution', 'To filter a mixture', 'To evaporate a solvent'],
    tags: ['titration']
  },
  {
    id: 'chem-gcse-quant-021',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Balancing Equations',
    difficulty: 'gcse',
    type: 'equation',
    question: 'Balance the equation: Fe + O2 → Fe2O3',
    correctAnswer: '4Fe + 3O2 → 2Fe2O3',
    tags: ['balancing equations']
  },
  {
    id: 'chem-gcse-quant-022',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Concentration',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How do you convert mol/dm³ to g/dm³?',
    correctAnswer: 'Multiply by the relative formula mass',
    wrongAnswers: ['Divide by the relative formula mass', 'Add the relative formula mass', 'Subtract the relative formula mass'],
    tags: ['concentration', 'conversion']
  },
  {
    id: 'chem-gcse-quant-023',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Moles',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'Calculate the mass of 0.5 moles of CaCO3 (Mr = 100).',
    correctAnswer: 50,
    tags: ['moles', 'mass']
  },
  {
    id: 'chem-gcse-quant-024',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Molar Volume',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'How many moles of gas are in 48 dm³ at RTP?',
    correctAnswer: 2,
    tags: ['molar volume', 'moles']
  },
  {
    id: 'chem-gcse-quant-025',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    subtopic: 'Relative Formula Mass',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'Calculate the relative formula mass of H2SO4 (H=1, S=32, O=16).',
    correctAnswer: 98,
    tags: ['relative formula mass']
  }
];

const chemicalChangesQuestions: Question[] = [
  {
    id: 'chem-gcse-changes-001',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Reactivity Series',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which metal is most reactive?',
    correctAnswer: 'Potassium',
    wrongAnswers: ['Copper', 'Iron', 'Lead'],
    tags: ['reactivity series']
  },
  {
    id: 'chem-gcse-changes-002',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Reactivity Series',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a displacement reaction?',
    correctAnswer: 'A more reactive element replaces a less reactive element in a compound',
    wrongAnswers: ['Two elements swap places', 'A compound breaks down', 'Elements combine'],
    tags: ['displacement']
  },
  {
    id: 'chem-gcse-changes-003',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Extraction of Metals',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How is iron extracted from its ore?',
    correctAnswer: 'Reduction with carbon in a blast furnace',
    wrongAnswers: ['Electrolysis', 'Heating alone', 'Displacement with copper'],
    tags: ['extraction', 'iron']
  },
  {
    id: 'chem-gcse-changes-004',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Extraction of Metals',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why is aluminium extracted by electrolysis?',
    correctAnswer: 'It is more reactive than carbon',
    wrongAnswers: ['It is cheaper', 'It is less reactive than carbon', 'It melts easily'],
    tags: ['extraction', 'aluminium']
  },
  {
    id: 'chem-gcse-changes-005',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Oxidation and Reduction',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is oxidation in terms of electrons?',
    correctAnswer: 'Loss of electrons',
    wrongAnswers: ['Gain of electrons', 'Sharing of electrons', 'No change in electrons'],
    tags: ['oxidation', 'redox']
  },
  {
    id: 'chem-gcse-changes-006',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Oxidation and Reduction',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The mnemonic OILRIG stands for: Oxidation Is Loss, Reduction Is _____.',
    correctAnswer: 'Gain',
    tags: ['redox', 'OILRIG']
  },
  {
    id: 'chem-gcse-changes-007',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Acids and Bases',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the pH of a neutral substance?',
    correctAnswer: '7',
    wrongAnswers: ['0', '14', '1'],
    tags: ['pH', 'neutral']
  },
  {
    id: 'chem-gcse-changes-008',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Acids and Bases',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What ions do all acids produce in solution?',
    correctAnswer: 'H⁺ (hydrogen ions)',
    wrongAnswers: ['OH⁻ (hydroxide ions)', 'Na⁺ (sodium ions)', 'Cl⁻ (chloride ions)'],
    tags: ['acids', 'ions']
  },
  {
    id: 'chem-gcse-changes-009',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Neutralisation',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is produced when an acid reacts with a base?',
    correctAnswer: 'Salt and water',
    wrongAnswers: ['Only water', 'Only salt', 'Gas and water'],
    tags: ['neutralisation']
  },
  {
    id: 'chem-gcse-changes-010',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Reactions of Acids',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What gas is produced when an acid reacts with a metal carbonate?',
    correctAnswer: 'Carbon dioxide',
    wrongAnswers: ['Hydrogen', 'Oxygen', 'Nitrogen'],
    tags: ['acids', 'carbonates']
  },
  {
    id: 'chem-gcse-changes-011',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Reactions of Acids',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What gas is produced when an acid reacts with a metal?',
    correctAnswer: 'Hydrogen',
    wrongAnswers: ['Carbon dioxide', 'Oxygen', 'Chlorine'],
    tags: ['acids', 'metals']
  },
  {
    id: 'chem-gcse-changes-012',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Electrolysis',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is electrolysis?',
    correctAnswer: 'Using electricity to decompose an ionic compound',
    wrongAnswers: ['Generating electricity from chemicals', 'Mixing two solutions', 'Heating a compound'],
    tags: ['electrolysis']
  },
  {
    id: 'chem-gcse-changes-013',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Electrolysis',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'At which electrode are positive ions attracted during electrolysis?',
    correctAnswer: 'Cathode (negative electrode)',
    wrongAnswers: ['Anode (positive electrode)', 'Both electrodes equally', 'Neither electrode'],
    tags: ['electrolysis', 'electrodes']
  },
  {
    id: 'chem-gcse-changes-014',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Electrolysis',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is formed at the anode during electrolysis of brine?',
    correctAnswer: 'Chlorine gas',
    wrongAnswers: ['Hydrogen gas', 'Sodium metal', 'Oxygen gas'],
    tags: ['electrolysis', 'brine']
  },
  {
    id: 'chem-gcse-changes-015',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Electrolysis',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is formed at the cathode during electrolysis of brine?',
    correctAnswer: 'Hydrogen gas',
    wrongAnswers: ['Chlorine gas', 'Sodium hydroxide', 'Oxygen gas'],
    tags: ['electrolysis', 'brine']
  },
  {
    id: 'chem-gcse-changes-016',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Strong and Weak Acids',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the difference between a strong acid and a weak acid?',
    correctAnswer: 'Strong acids fully ionise; weak acids partially ionise',
    wrongAnswers: ['Strong acids are more concentrated', 'Strong acids are more dangerous', 'Strong acids have a lower pH always'],
    tags: ['strong acids', 'weak acids']
  },
  {
    id: 'chem-gcse-changes-017',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Strong and Weak Acids',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which of these is a strong acid?',
    correctAnswer: 'Hydrochloric acid (HCl)',
    wrongAnswers: ['Ethanoic acid', 'Citric acid', 'Carbonic acid'],
    tags: ['strong acids']
  },
  {
    id: 'chem-gcse-changes-018',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Reactivity Series',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Copper can displace iron from iron sulfate solution.',
    correctAnswer: 'False',
    explanation: 'Iron is more reactive than copper, so copper cannot displace iron.',
    tags: ['displacement', 'reactivity']
  },
  {
    id: 'chem-gcse-changes-019',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Electrolysis',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'During electrolysis, reduction occurs at the _____ electrode.',
    correctAnswer: 'cathode',
    tags: ['electrolysis', 'reduction']
  },
  {
    id: 'chem-gcse-changes-020',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    subtopic: 'Salts',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What salt is formed when sulfuric acid reacts with copper oxide?',
    correctAnswer: 'Copper sulfate',
    wrongAnswers: ['Copper chloride', 'Copper nitrate', 'Copper carbonate'],
    tags: ['salts', 'acids']
  }
];

const energyChangesQuestions: Question[] = [
  {
    id: 'chem-gcse-energy-001',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Exothermic Reactions',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What happens in an exothermic reaction?',
    correctAnswer: 'Energy is released to the surroundings',
    wrongAnswers: ['Energy is taken in from the surroundings', 'No energy change occurs', 'Energy is destroyed'],
    tags: ['exothermic']
  },
  {
    id: 'chem-gcse-energy-002',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Endothermic Reactions',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What happens in an endothermic reaction?',
    correctAnswer: 'Energy is taken in from the surroundings',
    wrongAnswers: ['Energy is released to the surroundings', 'No energy change occurs', 'Energy is created'],
    tags: ['endothermic']
  },
  {
    id: 'chem-gcse-energy-003',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Exothermic Reactions',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Which of these is an exothermic reaction?',
    correctAnswer: 'Combustion',
    wrongAnswers: ['Thermal decomposition', 'Photosynthesis', 'Dissolving ammonium nitrate'],
    tags: ['exothermic', 'examples']
  },
  {
    id: 'chem-gcse-energy-004',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Bond Energies',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Is breaking bonds endothermic or exothermic?',
    correctAnswer: 'Endothermic (energy is required)',
    wrongAnswers: ['Exothermic (energy is released)', 'Neither', 'Both'],
    tags: ['bond energy']
  },
  {
    id: 'chem-gcse-energy-005',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Bond Energies',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Is making bonds endothermic or exothermic?',
    correctAnswer: 'Exothermic (energy is released)',
    wrongAnswers: ['Endothermic (energy is required)', 'Neither', 'Both'],
    tags: ['bond energy']
  },
  {
    id: 'chem-gcse-energy-006',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Energy Profiles',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'In an energy profile for an exothermic reaction, the products are:',
    correctAnswer: 'Lower in energy than the reactants',
    wrongAnswers: ['Higher in energy than the reactants', 'At the same energy level', 'At zero energy'],
    tags: ['energy profile', 'exothermic']
  },
  {
    id: 'chem-gcse-energy-007',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Activation Energy',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is activation energy?',
    correctAnswer: 'The minimum energy needed to start a reaction',
    wrongAnswers: ['The energy released in a reaction', 'The energy stored in bonds', 'The total energy of the products'],
    tags: ['activation energy']
  },
  {
    id: 'chem-gcse-energy-008',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Catalysts',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How does a catalyst affect activation energy?',
    correctAnswer: 'It lowers the activation energy',
    wrongAnswers: ['It raises the activation energy', 'It has no effect on activation energy', 'It removes activation energy completely'],
    tags: ['catalyst', 'activation energy']
  },
  {
    id: 'chem-gcse-energy-009',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Cells and Batteries',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a chemical cell?',
    correctAnswer: 'A device that converts chemical energy to electrical energy',
    wrongAnswers: ['A device that stores electricity', 'A device that produces heat', 'A device that creates matter'],
    tags: ['cells', 'batteries']
  },
  {
    id: 'chem-gcse-energy-010',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Fuel Cells',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the only product of a hydrogen fuel cell?',
    correctAnswer: 'Water',
    wrongAnswers: ['Carbon dioxide', 'Hydrogen gas', 'Electricity'],
    tags: ['fuel cells', 'hydrogen']
  },
  {
    id: 'chem-gcse-energy-011',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Bond Energies',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'If energy released making bonds > energy required breaking bonds, the reaction is:',
    correctAnswer: 'Exothermic',
    wrongAnswers: ['Endothermic', 'Neither', 'Impossible to determine'],
    tags: ['bond energy', 'exothermic']
  },
  {
    id: 'chem-gcse-energy-012',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Endothermic Reactions',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Thermal decomposition is an endothermic process.',
    correctAnswer: 'True',
    tags: ['endothermic', 'decomposition']
  },
  {
    id: 'chem-gcse-energy-013',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Exothermic Reactions',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Hand warmers use which type of reaction?',
    correctAnswer: 'Exothermic',
    wrongAnswers: ['Endothermic', 'Neutral', 'Photochemical'],
    tags: ['exothermic', 'applications']
  },
  {
    id: 'chem-gcse-energy-014',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Endothermic Reactions',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Sports injury packs use which type of reaction?',
    correctAnswer: 'Endothermic',
    wrongAnswers: ['Exothermic', 'Neutral', 'Nuclear'],
    tags: ['endothermic', 'applications']
  },
  {
    id: 'chem-gcse-energy-015',
    subject: 'chemistry',
    topic: 'Energy Changes',
    subtopic: 'Cells and Batteries',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'A rechargeable battery uses reversible reactions.',
    correctAnswer: 'True',
    tags: ['batteries', 'reversible']
  }
];

const ratesOfReactionQuestions: Question[] = [
  {
    id: 'chem-gcse-rates-001',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Measuring Rate',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is rate of reaction?',
    correctAnswer: 'The change in concentration of reactants or products per unit time',
    wrongAnswers: ['The total amount of product formed', 'The temperature of the reaction', 'The volume of gas produced'],
    tags: ['rate definition']
  },
  {
    id: 'chem-gcse-rates-002',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Collision Theory',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'According to collision theory, for a reaction to occur, particles must:',
    correctAnswer: 'Collide with sufficient energy and correct orientation',
    wrongAnswers: ['Just touch each other', 'Be at high temperature', 'Be in solution'],
    tags: ['collision theory']
  },
  {
    id: 'chem-gcse-rates-003',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Temperature',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How does increasing temperature affect reaction rate?',
    correctAnswer: 'Increases the rate because particles move faster and collide more frequently with more energy',
    wrongAnswers: ['Decreases the rate', 'Has no effect', 'Only affects equilibrium'],
    tags: ['temperature', 'rate']
  },
  {
    id: 'chem-gcse-rates-004',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Concentration',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How does increasing concentration affect reaction rate?',
    correctAnswer: 'Increases the rate because there are more particles to collide',
    wrongAnswers: ['Decreases the rate', 'Has no effect', 'Only affects gas reactions'],
    tags: ['concentration', 'rate']
  },
  {
    id: 'chem-gcse-rates-005',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Surface Area',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Why does a powder react faster than a lump?',
    correctAnswer: 'The powder has a larger surface area exposed to reactants',
    wrongAnswers: ['The powder is hotter', 'The powder is purer', 'The powder is lighter'],
    tags: ['surface area', 'rate']
  },
  {
    id: 'chem-gcse-rates-006',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Catalysts',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a catalyst?',
    correctAnswer: 'A substance that speeds up a reaction without being used up',
    wrongAnswers: ['A substance that slows down a reaction', 'A reactant', 'A product'],
    tags: ['catalyst']
  },
  {
    id: 'chem-gcse-rates-007',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Catalysts',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'A catalyst is chemically unchanged at the end of a reaction.',
    correctAnswer: 'True',
    tags: ['catalyst']
  },
  {
    id: 'chem-gcse-rates-008',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Pressure',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How does increasing pressure affect the rate of gas reactions?',
    correctAnswer: 'Increases the rate because gas particles are closer together',
    wrongAnswers: ['Decreases the rate', 'Has no effect', 'Stops the reaction'],
    tags: ['pressure', 'rate']
  },
  {
    id: 'chem-gcse-rates-009',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Measuring Rate',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How can you measure the rate of a reaction that produces gas?',
    correctAnswer: 'Measure the volume of gas produced over time',
    wrongAnswers: ['Measure the colour change', 'Weigh the catalyst', 'Count the bubbles'],
    tags: ['measuring rate', 'gas']
  },
  {
    id: 'chem-gcse-rates-010',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Measuring Rate',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'On a graph of product against time, where is the reaction fastest?',
    correctAnswer: 'Where the gradient is steepest (at the start)',
    wrongAnswers: ['Where the line is flat', 'At the end', 'In the middle'],
    tags: ['graphs', 'rate']
  },
  {
    id: 'chem-gcse-rates-011',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Collision Theory',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'The minimum energy required for a successful collision is called _____ energy.',
    correctAnswer: 'activation',
    tags: ['activation energy']
  },
  {
    id: 'chem-gcse-rates-012',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Enzymes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What are enzymes?',
    correctAnswer: 'Biological catalysts',
    wrongAnswers: ['Chemical reactants', 'Types of proteins only', 'Synthetic catalysts'],
    tags: ['enzymes']
  },
  {
    id: 'chem-gcse-rates-013',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Reversible Reactions',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What does ⇌ mean in a chemical equation?',
    correctAnswer: 'The reaction is reversible',
    wrongAnswers: ['The reaction is complete', 'The reaction needs heat', 'The reaction is fast'],
    tags: ['reversible reactions']
  },
  {
    id: 'chem-gcse-rates-014',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Equilibrium',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'At equilibrium in a closed system:',
    correctAnswer: 'The rate of forward reaction equals the rate of backward reaction',
    wrongAnswers: ['The reaction stops', 'All reactants are used up', 'All products are formed'],
    tags: ['equilibrium']
  },
  {
    id: 'chem-gcse-rates-015',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    subtopic: 'Le Chatelier\'s Principle',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'If temperature is increased for an exothermic forward reaction, equilibrium shifts:',
    correctAnswer: 'To the left (favouring the backward reaction)',
    wrongAnswers: ['To the right (favouring the forward reaction)', 'Not at all', 'The reaction stops'],
    tags: ['Le Chatelier', 'equilibrium']
  }
];

const organicChemistryQuestions: Question[] = [
  {
    id: 'chem-gcse-organic-001',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Crude Oil',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is crude oil?',
    correctAnswer: 'A mixture of hydrocarbons',
    wrongAnswers: ['A pure substance', 'A compound', 'A single hydrocarbon'],
    tags: ['crude oil']
  },
  {
    id: 'chem-gcse-organic-002',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Fractional Distillation',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How is crude oil separated into fractions?',
    correctAnswer: 'Fractional distillation',
    wrongAnswers: ['Filtration', 'Crystallisation', 'Chromatography'],
    tags: ['fractional distillation']
  },
  {
    id: 'chem-gcse-organic-003',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the general formula for alkanes?',
    correctAnswer: 'CnH2n+2',
    wrongAnswers: ['CnH2n', 'CnH2n-2', 'CnHn'],
    tags: ['alkanes', 'formula']
  },
  {
    id: 'chem-gcse-organic-004',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the molecular formula of methane?',
    correctAnswer: 'CH4',
    wrongAnswers: ['C2H6', 'C3H8', 'CH3'],
    tags: ['methane', 'alkanes']
  },
  {
    id: 'chem-gcse-organic-005',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Alkanes',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Alkanes are described as _____ hydrocarbons because they only have single bonds.',
    correctAnswer: 'saturated',
    tags: ['alkanes', 'saturated']
  },
  {
    id: 'chem-gcse-organic-006',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Combustion',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What are the products of complete combustion of a hydrocarbon?',
    correctAnswer: 'Carbon dioxide and water',
    wrongAnswers: ['Carbon monoxide and water', 'Carbon and water', 'Carbon dioxide only'],
    tags: ['combustion']
  },
  {
    id: 'chem-gcse-organic-007',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Cracking',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is cracking?',
    correctAnswer: 'Breaking down large hydrocarbon molecules into smaller, more useful ones',
    wrongAnswers: ['Joining small molecules together', 'Burning hydrocarbons', 'Distilling crude oil'],
    tags: ['cracking']
  },
  {
    id: 'chem-gcse-organic-008',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is the general formula for alkenes?',
    correctAnswer: 'CnH2n',
    wrongAnswers: ['CnH2n+2', 'CnH2n-2', 'CnHn'],
    tags: ['alkenes', 'formula']
  },
  {
    id: 'chem-gcse-organic-009',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How do you test for an alkene?',
    correctAnswer: 'Add bromine water - it decolourises from orange to colourless',
    wrongAnswers: ['Add litmus paper', 'Heat it', 'Add water'],
    tags: ['alkenes', 'test']
  },
  {
    id: 'chem-gcse-organic-010',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Alkenes',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Alkenes are described as _____ hydrocarbons because they have a C=C double bond.',
    correctAnswer: 'unsaturated',
    tags: ['alkenes', 'unsaturated']
  },
  {
    id: 'chem-gcse-organic-011',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Addition Polymerisation',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is addition polymerisation?',
    correctAnswer: 'Many small alkene molecules (monomers) join to form a long chain polymer',
    wrongAnswers: ['Breaking down polymers', 'Adding water to alkenes', 'Burning polymers'],
    tags: ['polymerisation']
  },
  {
    id: 'chem-gcse-organic-012',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Polymers',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is poly(ethene) made from?',
    correctAnswer: 'Ethene monomers',
    wrongAnswers: ['Ethane monomers', 'Methane monomers', 'Propene monomers'],
    tags: ['polymers', 'polyethene']
  },
  {
    id: 'chem-gcse-organic-013',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Alcohols',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What functional group do alcohols contain?',
    correctAnswer: '-OH (hydroxyl group)',
    wrongAnswers: ['-COOH', '-CHO', '-CO-'],
    tags: ['alcohols', 'functional groups']
  },
  {
    id: 'chem-gcse-organic-014',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Carboxylic Acids',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What functional group do carboxylic acids contain?',
    correctAnswer: '-COOH',
    wrongAnswers: ['-OH', '-CHO', '-CO-'],
    tags: ['carboxylic acids', 'functional groups']
  },
  {
    id: 'chem-gcse-organic-015',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    subtopic: 'Condensation Polymerisation',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What small molecule is released during condensation polymerisation?',
    correctAnswer: 'Water',
    wrongAnswers: ['Carbon dioxide', 'Hydrogen', 'Oxygen'],
    tags: ['condensation polymerisation']
  }
];

const chemicalAnalysisQuestions: Question[] = [
  {
    id: 'chem-gcse-analysis-001',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Pure Substances',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is a pure substance in chemistry?',
    correctAnswer: 'A single element or compound, not mixed with anything else',
    wrongAnswers: ['A substance that is safe to drink', 'A natural substance', 'A colourless substance'],
    tags: ['pure substances']
  },
  {
    id: 'chem-gcse-analysis-002',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Pure Substances',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How can you tell if a substance is pure?',
    correctAnswer: 'It has a sharp melting point',
    wrongAnswers: ['It is colourless', 'It dissolves in water', 'It is odourless'],
    tags: ['pure substances', 'melting point']
  },
  {
    id: 'chem-gcse-analysis-003',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Chromatography',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What is chromatography used for?',
    correctAnswer: 'Separating and identifying substances in a mixture',
    wrongAnswers: ['Heating substances', 'Weighing substances', 'Cooling substances'],
    tags: ['chromatography']
  },
  {
    id: 'chem-gcse-analysis-004',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Chromatography',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What does Rf value stand for?',
    correctAnswer: 'Retention factor',
    wrongAnswers: ['Reaction factor', 'Rate factor', 'Reduction factor'],
    tags: ['chromatography', 'Rf']
  },
  {
    id: 'chem-gcse-analysis-005',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Chromatography',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How is Rf value calculated?',
    correctAnswer: 'Distance moved by substance ÷ distance moved by solvent',
    wrongAnswers: ['Distance moved by solvent ÷ distance moved by substance', 'Mass of substance ÷ mass of solvent', 'Time taken × distance'],
    tags: ['chromatography', 'Rf calculation']
  },
  {
    id: 'chem-gcse-analysis-006',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Flame Tests',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What colour flame does sodium produce?',
    correctAnswer: 'Yellow',
    wrongAnswers: ['Green', 'Red', 'Blue'],
    tags: ['flame tests', 'sodium']
  },
  {
    id: 'chem-gcse-analysis-007',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Flame Tests',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What colour flame does copper produce?',
    correctAnswer: 'Blue-green',
    wrongAnswers: ['Yellow', 'Lilac', 'Red'],
    tags: ['flame tests', 'copper']
  },
  {
    id: 'chem-gcse-analysis-008',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Flame Tests',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'What colour flame does potassium produce?',
    correctAnswer: 'Lilac',
    wrongAnswers: ['Yellow', 'Green', 'Blue'],
    tags: ['flame tests', 'potassium']
  },
  {
    id: 'chem-gcse-analysis-009',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Tests for Gases',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How do you test for hydrogen gas?',
    correctAnswer: 'A lit splint makes a squeaky pop',
    wrongAnswers: ['Limewater turns milky', 'A glowing splint relights', 'Damp litmus paper bleaches'],
    tags: ['gas tests', 'hydrogen']
  },
  {
    id: 'chem-gcse-analysis-010',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Tests for Gases',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How do you test for oxygen gas?',
    correctAnswer: 'A glowing splint relights',
    wrongAnswers: ['A lit splint makes a squeaky pop', 'Limewater turns milky', 'Damp litmus paper bleaches'],
    tags: ['gas tests', 'oxygen']
  },
  {
    id: 'chem-gcse-analysis-011',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Tests for Gases',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How do you test for carbon dioxide gas?',
    correctAnswer: 'Limewater turns milky/cloudy',
    wrongAnswers: ['A glowing splint relights', 'A lit splint makes a squeaky pop', 'Damp litmus paper turns red'],
    tags: ['gas tests', 'carbon dioxide']
  },
  {
    id: 'chem-gcse-analysis-012',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Tests for Gases',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How do you test for chlorine gas?',
    correctAnswer: 'Damp litmus paper is bleached white',
    wrongAnswers: ['Limewater turns milky', 'A glowing splint relights', 'A lit splint makes a squeaky pop'],
    tags: ['gas tests', 'chlorine']
  },
  {
    id: 'chem-gcse-analysis-013',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Tests for Ions',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How do you test for carbonate ions?',
    correctAnswer: 'Add dilute acid - bubbles of CO2 are produced',
    wrongAnswers: ['Add sodium hydroxide', 'Do a flame test', 'Add silver nitrate'],
    tags: ['ion tests', 'carbonates']
  },
  {
    id: 'chem-gcse-analysis-014',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Tests for Ions',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How do you test for sulfate ions?',
    correctAnswer: 'Add barium chloride - white precipitate forms',
    wrongAnswers: ['Add silver nitrate', 'Do a flame test', 'Add sodium hydroxide'],
    tags: ['ion tests', 'sulfates']
  },
  {
    id: 'chem-gcse-analysis-015',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    subtopic: 'Tests for Ions',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'How do you test for halide ions (chloride, bromide, iodide)?',
    correctAnswer: 'Add silver nitrate solution - coloured precipitate forms',
    wrongAnswers: ['Add barium chloride', 'Do a flame test', 'Add sodium hydroxide'],
    tags: ['ion tests', 'halides']
  }
];

export const gcseChemistryQuestions: Question[] = [
  ...atomicStructureQuestions,
  ...bondingQuestions,
  ...quantitativeQuestions,
  ...chemicalChangesQuestions,
  ...energyChangesQuestions,
  ...ratesOfReactionQuestions,
  ...organicChemistryQuestions,
  ...chemicalAnalysisQuestions
];

export const gcseChemistryTerms: TermDefinition[] = [
  {
    id: 'chem-gcse-term-001',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    difficulty: 'gcse',
    term: 'Atomic number',
    definition: 'The number of protons in the nucleus of an atom',
    tags: ['atomic structure']
  },
  {
    id: 'chem-gcse-term-002',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    difficulty: 'gcse',
    term: 'Mass number',
    definition: 'The total number of protons and neutrons in the nucleus',
    tags: ['atomic structure']
  },
  {
    id: 'chem-gcse-term-003',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    difficulty: 'gcse',
    term: 'Isotope',
    definition: 'Atoms of the same element with different numbers of neutrons',
    tags: ['isotopes']
  },
  {
    id: 'chem-gcse-term-004',
    subject: 'chemistry',
    topic: 'Bonding',
    difficulty: 'gcse',
    term: 'Ion',
    definition: 'An atom or group of atoms with an electrical charge due to loss or gain of electrons',
    tags: ['ions', 'bonding']
  },
  {
    id: 'chem-gcse-term-005',
    subject: 'chemistry',
    topic: 'Bonding',
    difficulty: 'gcse',
    term: 'Covalent bond',
    definition: 'A bond formed by the sharing of electrons between non-metal atoms',
    tags: ['covalent bonding']
  },
  {
    id: 'chem-gcse-term-006',
    subject: 'chemistry',
    topic: 'Bonding',
    difficulty: 'gcse',
    term: 'Ionic bond',
    definition: 'A bond formed by the transfer of electrons from a metal to a non-metal',
    tags: ['ionic bonding']
  },
  {
    id: 'chem-gcse-term-007',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    term: 'Mole',
    definition: 'The amount of substance containing 6.02 × 10²³ particles (Avogadro constant)',
    tags: ['moles']
  },
  {
    id: 'chem-gcse-term-008',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    term: 'Relative atomic mass',
    definition: 'The weighted mean mass of an atom compared to 1/12th the mass of carbon-12',
    tags: ['relative atomic mass']
  },
  {
    id: 'chem-gcse-term-009',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    term: 'Concentration',
    definition: 'The amount of solute dissolved per unit volume of solution',
    tags: ['concentration']
  },
  {
    id: 'chem-gcse-term-010',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    difficulty: 'gcse',
    term: 'Oxidation',
    definition: 'Loss of electrons, gain of oxygen, or loss of hydrogen',
    tags: ['redox']
  },
  {
    id: 'chem-gcse-term-011',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    difficulty: 'gcse',
    term: 'Reduction',
    definition: 'Gain of electrons, loss of oxygen, or gain of hydrogen',
    tags: ['redox']
  },
  {
    id: 'chem-gcse-term-012',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    difficulty: 'gcse',
    term: 'Electrolysis',
    definition: 'Using electricity to decompose an ionic compound when molten or in solution',
    tags: ['electrolysis']
  },
  {
    id: 'chem-gcse-term-013',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    difficulty: 'gcse',
    term: 'Acid',
    definition: 'A substance that produces H⁺ ions in aqueous solution',
    tags: ['acids']
  },
  {
    id: 'chem-gcse-term-014',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    difficulty: 'gcse',
    term: 'Base',
    definition: 'A substance that neutralises an acid, producing salt and water',
    tags: ['bases']
  },
  {
    id: 'chem-gcse-term-015',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    difficulty: 'gcse',
    term: 'Alkali',
    definition: 'A soluble base that produces OH⁻ ions in aqueous solution',
    tags: ['alkalis']
  },
  {
    id: 'chem-gcse-term-016',
    subject: 'chemistry',
    topic: 'Energy Changes',
    difficulty: 'gcse',
    term: 'Exothermic',
    definition: 'A reaction that releases energy to the surroundings',
    tags: ['exothermic']
  },
  {
    id: 'chem-gcse-term-017',
    subject: 'chemistry',
    topic: 'Energy Changes',
    difficulty: 'gcse',
    term: 'Endothermic',
    definition: 'A reaction that takes in energy from the surroundings',
    tags: ['endothermic']
  },
  {
    id: 'chem-gcse-term-018',
    subject: 'chemistry',
    topic: 'Energy Changes',
    difficulty: 'gcse',
    term: 'Activation energy',
    definition: 'The minimum energy required for a reaction to occur',
    tags: ['activation energy']
  },
  {
    id: 'chem-gcse-term-019',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    difficulty: 'gcse',
    term: 'Catalyst',
    definition: 'A substance that speeds up a reaction without being used up',
    tags: ['catalyst']
  },
  {
    id: 'chem-gcse-term-020',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    difficulty: 'gcse',
    term: 'Rate of reaction',
    definition: 'The change in concentration of reactants or products per unit time',
    tags: ['rate']
  },
  {
    id: 'chem-gcse-term-021',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    difficulty: 'gcse',
    term: 'Equilibrium',
    definition: 'When the rate of forward reaction equals the rate of backward reaction',
    tags: ['equilibrium']
  },
  {
    id: 'chem-gcse-term-022',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'gcse',
    term: 'Hydrocarbon',
    definition: 'A compound containing only hydrogen and carbon atoms',
    tags: ['hydrocarbons']
  },
  {
    id: 'chem-gcse-term-023',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'gcse',
    term: 'Alkane',
    definition: 'A saturated hydrocarbon with only single carbon-carbon bonds',
    tags: ['alkanes']
  },
  {
    id: 'chem-gcse-term-024',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'gcse',
    term: 'Alkene',
    definition: 'An unsaturated hydrocarbon with at least one carbon-carbon double bond',
    tags: ['alkenes']
  },
  {
    id: 'chem-gcse-term-025',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'gcse',
    term: 'Polymer',
    definition: 'A large molecule made from many small repeating units (monomers)',
    tags: ['polymers']
  },
  {
    id: 'chem-gcse-term-026',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'gcse',
    term: 'Monomer',
    definition: 'A small molecule that joins with others to form a polymer',
    tags: ['polymers']
  },
  {
    id: 'chem-gcse-term-027',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    difficulty: 'gcse',
    term: 'Formulation',
    definition: 'A mixture designed for a specific purpose with exact quantities',
    tags: ['formulations']
  },
  {
    id: 'chem-gcse-term-028',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    difficulty: 'gcse',
    term: 'Chromatography',
    definition: 'A technique for separating mixtures based on different solubilities',
    tags: ['chromatography']
  },
  {
    id: 'chem-gcse-term-029',
    subject: 'chemistry',
    topic: 'Bonding',
    difficulty: 'gcse',
    term: 'Alloy',
    definition: 'A mixture of two or more metals, or a metal and another element',
    tags: ['alloys']
  },
  {
    id: 'chem-gcse-term-030',
    subject: 'chemistry',
    topic: 'Bonding',
    difficulty: 'gcse',
    term: 'Delocalised electrons',
    definition: 'Electrons not associated with a single atom, free to move through the structure',
    tags: ['metallic bonding', 'graphite']
  }
];

export const gcseChemistryFormulas: Formula[] = [
  {
    id: 'chem-gcse-formula-001',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    name: 'Number of moles',
    formula: 'n = m / Mr',
    variables: [
      { symbol: 'n', meaning: 'number of moles' },
      { symbol: 'm', meaning: 'mass in grams' },
      { symbol: 'Mr', meaning: 'relative formula mass' }
    ],
    units: 'mol'
  },
  {
    id: 'chem-gcse-formula-002',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    name: 'Concentration (mass)',
    formula: 'c = m / V',
    variables: [
      { symbol: 'c', meaning: 'concentration' },
      { symbol: 'm', meaning: 'mass of solute in grams' },
      { symbol: 'V', meaning: 'volume in dm³' }
    ],
    units: 'g/dm³'
  },
  {
    id: 'chem-gcse-formula-003',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    name: 'Concentration (molar)',
    formula: 'c = n / V',
    variables: [
      { symbol: 'c', meaning: 'concentration' },
      { symbol: 'n', meaning: 'number of moles' },
      { symbol: 'V', meaning: 'volume in dm³' }
    ],
    units: 'mol/dm³'
  },
  {
    id: 'chem-gcse-formula-004',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    name: 'Percentage yield',
    formula: '% yield = (actual yield / theoretical yield) × 100',
    variables: [
      { symbol: 'actual yield', meaning: 'mass of product obtained' },
      { symbol: 'theoretical yield', meaning: 'maximum possible mass of product' }
    ],
    units: '%'
  },
  {
    id: 'chem-gcse-formula-005',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    name: 'Atom economy',
    formula: 'Atom economy = (Mr of desired product / Mr of all reactants) × 100',
    variables: [
      { symbol: 'Mr of desired product', meaning: 'relative formula mass of wanted product' },
      { symbol: 'Mr of all reactants', meaning: 'sum of relative formula masses of all reactants' }
    ],
    units: '%'
  },
  {
    id: 'chem-gcse-formula-006',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    name: 'Volume of gas at RTP',
    formula: 'V = n × 24',
    variables: [
      { symbol: 'V', meaning: 'volume of gas' },
      { symbol: 'n', meaning: 'number of moles' },
      { symbol: '24', meaning: 'molar volume at RTP in dm³' }
    ],
    units: 'dm³'
  },
  {
    id: 'chem-gcse-formula-007',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    name: 'Number of particles',
    formula: 'N = n × NA',
    variables: [
      { symbol: 'N', meaning: 'number of particles' },
      { symbol: 'n', meaning: 'number of moles' },
      { symbol: 'NA', meaning: 'Avogadro constant (6.02 × 10²³)' }
    ],
    units: 'particles'
  },
  {
    id: 'chem-gcse-formula-008',
    subject: 'chemistry',
    topic: 'Chemical Analysis',
    difficulty: 'gcse',
    name: 'Rf value',
    formula: 'Rf = distance moved by substance / distance moved by solvent',
    variables: [
      { symbol: 'Rf', meaning: 'retention factor' },
      { symbol: 'distance moved by substance', meaning: 'from baseline to centre of spot' },
      { symbol: 'distance moved by solvent', meaning: 'from baseline to solvent front' }
    ],
    units: 'no units'
  },
  {
    id: 'chem-gcse-formula-009',
    subject: 'chemistry',
    topic: 'Rates of Reaction',
    difficulty: 'gcse',
    name: 'Mean rate of reaction',
    formula: 'Rate = quantity of product formed / time taken',
    variables: [
      { symbol: 'Rate', meaning: 'mean rate of reaction' },
      { symbol: 'quantity', meaning: 'amount of product (mass or volume)' },
      { symbol: 'time', meaning: 'time taken' }
    ],
    units: 'g/s or cm³/s'
  },
  {
    id: 'chem-gcse-formula-010',
    subject: 'chemistry',
    topic: 'Atomic Structure',
    difficulty: 'gcse',
    name: 'Number of neutrons',
    formula: 'Neutrons = Mass number - Atomic number',
    variables: [
      { symbol: 'Mass number', meaning: 'total protons and neutrons' },
      { symbol: 'Atomic number', meaning: 'number of protons' }
    ],
    units: 'no units'
  },
  {
    id: 'chem-gcse-formula-011',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    name: 'Mass from moles',
    formula: 'm = n × Mr',
    variables: [
      { symbol: 'm', meaning: 'mass in grams' },
      { symbol: 'n', meaning: 'number of moles' },
      { symbol: 'Mr', meaning: 'relative formula mass' }
    ],
    units: 'g'
  },
  {
    id: 'chem-gcse-formula-012',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    name: 'Relative formula mass',
    formula: 'Mr = sum of all Ar values in the formula',
    variables: [
      { symbol: 'Mr', meaning: 'relative formula mass' },
      { symbol: 'Ar', meaning: 'relative atomic mass of each element' }
    ],
    units: 'no units'
  },
  {
    id: 'chem-gcse-formula-013',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    name: 'Percentage composition',
    formula: '% element = (Ar × number of atoms / Mr) × 100',
    variables: [
      { symbol: 'Ar', meaning: 'relative atomic mass of element' },
      { symbol: 'Mr', meaning: 'relative formula mass of compound' }
    ],
    units: '%'
  },
  {
    id: 'chem-gcse-formula-014',
    subject: 'chemistry',
    topic: 'Energy Changes',
    difficulty: 'gcse',
    name: 'Energy change (bond energies)',
    formula: 'ΔH = Energy to break bonds - Energy released making bonds',
    variables: [
      { symbol: 'ΔH', meaning: 'enthalpy change' },
      { symbol: 'Energy to break bonds', meaning: 'sum of bond energies of reactants' },
      { symbol: 'Energy released making bonds', meaning: 'sum of bond energies of products' }
    ],
    units: 'kJ/mol'
  },
  {
    id: 'chem-gcse-formula-015',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'gcse',
    name: 'Alkane general formula',
    formula: 'CnH2n+2',
    variables: [
      { symbol: 'n', meaning: 'number of carbon atoms' },
      { symbol: 'C', meaning: 'carbon' },
      { symbol: 'H', meaning: 'hydrogen' }
    ],
    units: 'no units'
  },
  {
    id: 'chem-gcse-formula-016',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'gcse',
    name: 'Alkene general formula',
    formula: 'CnH2n',
    variables: [
      { symbol: 'n', meaning: 'number of carbon atoms' },
      { symbol: 'C', meaning: 'carbon' },
      { symbol: 'H', meaning: 'hydrogen' }
    ],
    units: 'no units'
  },
  {
    id: 'chem-gcse-formula-017',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    name: 'Converting cm³ to dm³',
    formula: 'Volume (dm³) = Volume (cm³) / 1000',
    variables: [
      { symbol: 'dm³', meaning: 'cubic decimetres (litres)' },
      { symbol: 'cm³', meaning: 'cubic centimetres (millilitres)' }
    ],
    units: 'dm³'
  },
  {
    id: 'chem-gcse-formula-018',
    subject: 'chemistry',
    topic: 'Quantitative Chemistry',
    difficulty: 'gcse',
    name: 'Converting mol/dm³ to g/dm³',
    formula: 'Concentration (g/dm³) = Concentration (mol/dm³) × Mr',
    variables: [
      { symbol: 'g/dm³', meaning: 'mass concentration' },
      { symbol: 'mol/dm³', meaning: 'molar concentration' },
      { symbol: 'Mr', meaning: 'relative formula mass' }
    ],
    units: 'g/dm³'
  },
  {
    id: 'chem-gcse-formula-019',
    subject: 'chemistry',
    topic: 'Chemical Changes',
    difficulty: 'gcse',
    name: 'Neutralisation equation',
    formula: 'H⁺(aq) + OH⁻(aq) → H₂O(l)',
    variables: [
      { symbol: 'H⁺', meaning: 'hydrogen ion from acid' },
      { symbol: 'OH⁻', meaning: 'hydroxide ion from base' },
      { symbol: 'H₂O', meaning: 'water' }
    ],
    units: 'no units'
  },
  {
    id: 'chem-gcse-formula-020',
    subject: 'chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'gcse',
    name: 'Complete combustion of hydrocarbon',
    formula: 'Hydrocarbon + O₂ → CO₂ + H₂O',
    variables: [
      { symbol: 'Hydrocarbon', meaning: 'compound of C and H only' },
      { symbol: 'O₂', meaning: 'oxygen' },
      { symbol: 'CO₂', meaning: 'carbon dioxide' },
      { symbol: 'H₂O', meaning: 'water' }
    ],
    units: 'no units'
  }
];
