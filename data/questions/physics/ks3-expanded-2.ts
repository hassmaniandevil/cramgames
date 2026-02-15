/**
 * KS3 Physics Expanded Part 2
 * Fun-first physics for Years 7-9
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================================================
// ENERGY
// ============================================================================

const ks3Energy: Question[] = [
  {
    id: 'phys-ks3-exp2-001',
    subject: 'physics',
    topic: 'Energy',
    subtopic: 'Energy Stores',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'A stretched spring has what type of energy stored?',
    correctAnswer: 'Elastic potential energy',
    wrongAnswers: [
      'Kinetic energy',
      'Chemical energy',
      'Thermal energy'
    ],
    explanation: 'Stretching or compressing something stores elastic potential energy. Release it and - BOING! The energy transfers. That\'s how trampolines and catapults work!',
    tags: ['energy', 'elastic', 'potential'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'phys-ks3-exp2-002',
    subject: 'physics',
    topic: 'Energy',
    subtopic: 'Energy Transfer',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'When you rub your hands together, kinetic energy is transferred to...',
    correctAnswer: 'Thermal energy (heat)',
    wrongAnswers: [
      'Chemical energy',
      'Light energy',
      'Sound energy'
    ],
    explanation: 'Friction converts movement (kinetic) into heat (thermal). That\'s why your hands warm up! It\'s also why car brakes get hot when stopping.',
    tags: ['energy', 'transfer', 'friction'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'phys-ks3-exp2-003',
    subject: 'physics',
    topic: 'Energy',
    subtopic: 'Conservation',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What does "energy cannot be created or destroyed" mean?',
    correctAnswer: 'Energy just changes form, the total stays the same',
    wrongAnswers: [
      'We will never run out of energy',
      'Energy is indestructible magic',
      'Nothing uses energy'
    ],
    explanation: 'Conservation of energy: energy transfers between stores but the total is constant. When a ball falls, gravitational potential → kinetic. The universe is the ultimate accountant - energy balances.',
    tags: ['energy', 'conservation', 'law'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'phys-ks3-exp2-004',
    subject: 'physics',
    topic: 'Energy',
    subtopic: 'Efficiency',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'A lightbulb uses 100J of electrical energy and produces 15J of light. What\'s its efficiency?',
    correctAnswer: '15%',
    wrongAnswers: [
      '85%',
      '100%',
      '115%'
    ],
    explanation: 'Efficiency = useful output / total input × 100 = 15/100 × 100 = 15%. The other 85J becomes heat - that\'s why old bulbs got hot. LEDs are much more efficient!',
    tags: ['energy', 'efficiency', 'calculations'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// FORCES
// ============================================================================

const ks3Forces: Question[] = [
  {
    id: 'phys-ks3-exp2-005',
    subject: 'physics',
    topic: 'Forces',
    subtopic: 'Balanced Forces',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'A book sitting on a table has balanced forces. What are they?',
    correctAnswer: 'Weight pulling down, normal force pushing up',
    wrongAnswers: [
      'Friction and air resistance',
      'Push from the book and pull from the table',
      'There are no forces acting'
    ],
    explanation: 'Weight (gravity) pulls the book down. The table pushes back with an equal normal force. They cancel out = no movement. Forces always act in pairs!',
    tags: ['forces', 'balanced', 'newton'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'phys-ks3-exp2-006',
    subject: 'physics',
    topic: 'Forces',
    subtopic: 'Friction',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Which surface would produce the MOST friction?',
    correctAnswer: 'Rough sandpaper',
    wrongAnswers: [
      'Smooth ice',
      'Polished glass',
      'Oiled metal'
    ],
    explanation: 'Friction increases with rough surfaces. Sandpaper\'s texture interlocks with objects. Ice is slippery (low friction), which is why skaters glide but also why cars slip!',
    tags: ['forces', 'friction', 'surfaces'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'phys-ks3-exp2-007',
    subject: 'physics',
    topic: 'Forces',
    subtopic: 'Pressure',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why do sharp knives cut better than blunt ones?',
    correctAnswer: 'Same force over smaller area = higher pressure',
    wrongAnswers: [
      'Sharp knives are heavier',
      'Blunt knives have more friction',
      'Sharp knives are magnetic'
    ],
    explanation: 'Pressure = Force ÷ Area. Sharp edge = tiny area = enormous pressure. That\'s also why drawing pins have pointed ends and flat heads - concentrate force where needed!',
    tags: ['forces', 'pressure', 'area'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'phys-ks3-exp2-008',
    subject: 'physics',
    topic: 'Forces',
    subtopic: 'Speed',
    difficulty: 'ks3',
    type: 'numeric',
    question: 'A car travels 120 km in 2 hours. What is its average speed in km/h?',
    correctAnswer: '60',
    explanation: 'Speed = distance ÷ time = 120 ÷ 2 = 60 km/h. "Average" because the car wasn\'t going exactly 60 km/h the whole time - it sped up, slowed down, stopped at lights...',
    tags: ['forces', 'speed', 'calculations'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// WAVES
// ============================================================================

const ks3Waves: Question[] = [
  {
    id: 'phys-ks3-exp2-009',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Sound',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why can\'t sound travel through space?',
    correctAnswer: 'Sound needs particles to vibrate; space is a vacuum',
    wrongAnswers: [
      'Space is too cold',
      'Sound is afraid of the dark',
      'Astronauts are too far away'
    ],
    explanation: 'Sound is a longitudinal wave that needs a medium (solid, liquid, or gas). Space is a vacuum - no particles, no vibrations, no sound. In space, no one can hear you scream!',
    tags: ['waves', 'sound', 'vacuum'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'phys-ks3-exp2-010',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Light',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What happens to light when it enters glass at an angle?',
    correctAnswer: 'It bends (refracts) toward the normal',
    wrongAnswers: [
      'It speeds up',
      'It changes color',
      'Nothing - light travels straight'
    ],
    explanation: 'Light slows down in glass and bends toward the normal (perpendicular line). That\'s refraction! It\'s why pools look shallower than they are and why lenses work.',
    tags: ['waves', 'light', 'refraction'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'phys-ks3-exp2-011',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Light',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'A red T-shirt looks red because it...',
    correctAnswer: 'Reflects red light and absorbs other colors',
    wrongAnswers: [
      'Produces red light',
      'Absorbs red light',
      'Contains red chemicals that glow'
    ],
    explanation: 'Objects don\'t have color - they reflect certain wavelengths. A red shirt absorbs blue and green but bounces red back to your eyes. In pure blue light, it would look black!',
    tags: ['waves', 'light', 'color'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// ELECTRICITY
// ============================================================================

const ks3Electricity: Question[] = [
  {
    id: 'phys-ks3-exp2-012',
    subject: 'physics',
    topic: 'Electricity',
    subtopic: 'Current',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'In a series circuit with two identical bulbs, the current...',
    correctAnswer: 'Is the same through both bulbs',
    wrongAnswers: [
      'Is split equally between bulbs',
      'Only flows through one bulb',
      'Doubles after each bulb'
    ],
    explanation: 'In series, there\'s only one path - current flows through everything equally. It\'s like water in a pipe: the same amount passes every point. Current is conserved!',
    tags: ['electricity', 'series', 'current'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'phys-ks3-exp2-013',
    subject: 'physics',
    topic: 'Electricity',
    subtopic: 'Voltage',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'What does voltage measure?',
    correctAnswer: 'The energy given to charges (electrical "push")',
    wrongAnswers: [
      'How fast electrons move',
      'How many electrons there are',
      'The temperature of the wire'
    ],
    explanation: 'Voltage is like water pressure - it pushes electrons around the circuit. Higher voltage = more energy per charge. That\'s why touching 240V is dangerous but 1.5V batteries are safe.',
    tags: ['electricity', 'voltage', 'energy'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'phys-ks3-exp2-014',
    subject: 'physics',
    topic: 'Electricity',
    subtopic: 'Resistance',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Adding more resistors in series makes the total resistance...',
    correctAnswer: 'Larger',
    wrongAnswers: [
      'Smaller',
      'Stay the same',
      'Zero'
    ],
    explanation: 'In series, resistances add up. More resistance = harder for current to flow. It\'s like adding more obstacles to a race track - harder to complete!',
    tags: ['electricity', 'resistance', 'series'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// SPACE
// ============================================================================

const ks3Space: Question[] = [
  {
    id: 'phys-ks3-exp2-015',
    subject: 'physics',
    topic: 'Space',
    subtopic: 'Solar System',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Why do we have seasons on Earth?',
    correctAnswer: 'Earth\'s axis is tilted, so different hemispheres face the Sun at different times',
    wrongAnswers: [
      'Earth moves closer to the Sun in summer',
      'The Sun gets hotter in summer',
      'Clouds block the Sun in winter'
    ],
    explanation: 'Earth\'s 23.5° tilt means the Northern Hemisphere gets more direct sunlight in June (summer) and less in December (winter). When it\'s winter in the UK, it\'s summer in Australia!',
    tags: ['space', 'seasons', 'earth'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'phys-ks3-exp2-016',
    subject: 'physics',
    topic: 'Space',
    subtopic: 'Moon',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'We see different moon phases because...',
    correctAnswer: 'We see different amounts of the lit side as the Moon orbits Earth',
    wrongAnswers: [
      'The Moon changes size',
      'Earth\'s shadow covers different amounts',
      'The Moon produces its own light sometimes'
    ],
    explanation: 'The Moon is always half-lit by the Sun. As it orbits Earth, we see different portions of that lit half. New moon = lit side faces away. Full moon = lit side faces us.',
    tags: ['space', 'moon', 'phases'],
    yearGroup: [7, 8, 9]
  },
  {
    id: 'phys-ks3-exp2-017',
    subject: 'physics',
    topic: 'Space',
    subtopic: 'Gravity',
    difficulty: 'ks3',
    type: 'multiple-choice',
    question: 'Your weight on the Moon would be about...',
    correctAnswer: 'One-sixth of your Earth weight',
    wrongAnswers: [
      'Exactly the same',
      'Zero',
      'Double'
    ],
    explanation: 'The Moon is smaller than Earth, so gravity is weaker (about 1/6). Your mass stays the same, but you\'d weigh less. Astronauts can jump really high on the Moon!',
    tags: ['space', 'gravity', 'weight'],
    yearGroup: [7, 8, 9]
  }
];

// ============================================================================
// TERMS
// ============================================================================

export const ks3PhysicsTermsExpanded2: TermDefinition[] = [
  {
    id: 'phys-ks3-exp2-term-001',
    subject: 'physics',
    topic: 'Energy',
    difficulty: 'ks3',
    term: 'Joule',
    definition: 'The unit of energy. Symbol: J. 1 joule is roughly the energy to lift an apple 1 metre.',
    example: 'A phone charger uses about 5 joules per second.',
    tags: ['energy', 'units']
  },
  {
    id: 'phys-ks3-exp2-term-002',
    subject: 'physics',
    topic: 'Waves',
    difficulty: 'ks3',
    term: 'Frequency',
    definition: 'How many waves pass a point per second. Measured in Hertz (Hz).',
    example: 'High-pitched sounds have high frequency, low-pitched sounds have low frequency.',
    tags: ['waves', 'sound', 'frequency']
  },
  {
    id: 'phys-ks3-exp2-term-003',
    subject: 'physics',
    topic: 'Electricity',
    difficulty: 'ks3',
    term: 'Ammeter',
    definition: 'Device that measures electric current. Connected in series.',
    example: 'An ammeter might show 0.5 A (amps) flowing through a circuit.',
    tags: ['electricity', 'measurement']
  },
  {
    id: 'phys-ks3-exp2-term-004',
    subject: 'physics',
    topic: 'Space',
    difficulty: 'ks3',
    term: 'Light Year',
    definition: 'The distance light travels in one year - about 9.46 trillion km.',
    example: 'The nearest star (Proxima Centauri) is about 4 light years away.',
    tags: ['space', 'distance', 'units']
  }
];

// ============================================================================
// FORMULAS
// ============================================================================

export const ks3PhysicsFormulasExpanded2: Formula[] = [
  {
    id: 'phys-ks3-exp2-form-001',
    subject: 'physics',
    topic: 'Energy',
    difficulty: 'ks3',
    name: 'Efficiency',
    formula: 'Efficiency = (useful output / total input) × 100%',
    variables: [
      { symbol: 'Efficiency', meaning: 'How good something is at converting energy (%)' },
      { symbol: 'Useful output', meaning: 'Energy that does what we want (J)' },
      { symbol: 'Total input', meaning: 'All energy put in (J)' }
    ],
    explanation: 'Nothing is 100% efficient - some energy always becomes waste heat.',
    tags: ['energy', 'efficiency']
  },
  {
    id: 'phys-ks3-exp2-form-002',
    subject: 'physics',
    topic: 'Forces',
    difficulty: 'ks3',
    name: 'Speed',
    formula: 'Speed = distance / time',
    variables: [
      { symbol: 'Speed', meaning: 'How fast something moves (m/s or km/h)' },
      { symbol: 'Distance', meaning: 'How far it travels (m or km)' },
      { symbol: 'Time', meaning: 'How long it takes (s or h)' }
    ],
    explanation: 'Remember: if using km and hours, answer is km/h. If using m and s, answer is m/s.',
    tags: ['forces', 'speed', 'motion']
  },
  {
    id: 'phys-ks3-exp2-form-003',
    subject: 'physics',
    topic: 'Forces',
    difficulty: 'ks3',
    name: 'Pressure',
    formula: 'Pressure = Force / Area',
    variables: [
      { symbol: 'Pressure', meaning: 'Force spread over area (N/m² or Pa)' },
      { symbol: 'Force', meaning: 'Push or pull (N)' },
      { symbol: 'Area', meaning: 'Surface area (m²)' }
    ],
    explanation: 'Smaller area = higher pressure. That\'s why heels sink into grass but trainers don\'t!',
    tags: ['forces', 'pressure']
  }
];

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const ks3PhysicsExpanded2: Question[] = [
  ...ks3Energy,
  ...ks3Forces,
  ...ks3Waves,
  ...ks3Electricity,
  ...ks3Space
];
