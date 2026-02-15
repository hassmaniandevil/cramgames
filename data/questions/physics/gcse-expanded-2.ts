/**
 * GCSE Physics Expanded Part 2
 * Additional comprehensive gamified physics questions
 */

import { Question, TermDefinition, Formula } from '../types';

// ============================================
// ENERGY
// ============================================

export const gcsePhysicsEnergy: Question[] = [
  {
    id: 'phys-gcse-exp2-nrg-001',
    subject: 'physics',
    topic: 'Energy',
    subtopic: 'Energy Stores',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each scenario to its main energy store:',
    correctAnswer: ['Ball at top of hill → Gravitational potential', 'Moving car → Kinetic', 'Stretched spring → Elastic potential', 'Hot cup of tea → Thermal'],
    wrongAnswers: [],
    explanation: 'Energy stores are like bank accounts! Gravitational PE is stored when you lift something against gravity. Kinetic energy is the energy of motion. Elastic PE is in stretched/squashed objects. Thermal energy is the jiggling of particles. Energy transfers between stores!',
    hint: 'Think about what gives each object its energy',
    tags: ['energy', 'stores', 'transfers'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-nrg-002',
    subject: 'physics',
    topic: 'Energy',
    subtopic: 'Conservation',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Energy cannot be created or destroyed, only transferred from one store to another.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! The conservation of energy is one of physics\' golden rules. When you "use" energy, it doesn\'t disappear - it transforms. A light bulb converts electrical energy to light and thermal energy. The total is always conserved, just spread around differently.',
    tags: ['energy', 'conservation', 'law'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-nrg-003',
    subject: 'physics',
    topic: 'Energy',
    subtopic: 'Efficiency',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'A motor uses 500J of electrical energy and does 350J of useful work. What is its efficiency as a percentage?',
    correctAnswer: 70,
    wrongAnswers: [50, 35, 85],
    explanation: 'Efficiency = (useful output ÷ total input) × 100 = (350 ÷ 500) × 100 = 70%. The other 150J becomes heat - wasted energy. No machine is 100% efficient because some energy always dissipates as heat. Electric motors are actually quite efficient compared to car engines (~25%)!',
    hint: 'Divide useful output by total input',
    tags: ['energy', 'efficiency', 'calculations'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-nrg-004',
    subject: 'physics',
    topic: 'Energy',
    subtopic: 'Power',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'A 60W light bulb and a 100W light bulb both run for 1 hour. Which uses more energy?',
    correctAnswer: 'The 100W bulb',
    wrongAnswers: ['The 60W bulb', 'They use the same energy', 'Cannot be determined'],
    explanation: 'Power = energy per second! A 100W bulb uses 100 joules every second. In 1 hour (3600 seconds), that\'s 360,000J. The 60W uses only 216,000J. Higher power = faster energy use = bigger electricity bill. But the 100W might be brighter, so it\'s about efficiency too!',
    hint: 'What does power measure?',
    tags: ['energy', 'power', 'calculations'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-nrg-005',
    subject: 'physics',
    topic: 'Energy',
    subtopic: 'Specific Heat Capacity',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Water has a high specific heat capacity. This means:',
    correctAnswer: 'It takes lots of energy to heat water, but it also stays hot longer',
    wrongAnswers: ['Water heats up very quickly', 'Water is always cold', 'Water cannot store energy'],
    explanation: 'Water is a thermal superstar! High specific heat capacity (4200 J/kg°C) means water absorbs/releases lots of energy per degree change. That\'s why oceans moderate coastal climates, and why we use water for heating systems. It\'s slow to heat but slow to cool!',
    hint: 'Think about what "capacity" for heat means',
    tags: ['energy', 'shc', 'thermal'],
    yearGroup: [10, 11]
  },
];

// ============================================
// ELECTRICITY
// ============================================

export const gcsePhysicsElectricity: Question[] = [
  {
    id: 'phys-gcse-exp2-elec-001',
    subject: 'physics',
    topic: 'Electricity',
    subtopic: 'Current',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Electric current is:',
    correctAnswer: 'The flow of charge (electrons in metals)',
    wrongAnswers: ['The same as voltage', 'Only found in batteries', 'The amount of energy stored'],
    explanation: 'Current is flow! In metals, electrons carry the charge. Current (I) is measured in amperes (A). One amp = one coulomb of charge passing per second. Think of it like water flow - current is how much water flows past a point, not the pressure pushing it.',
    hint: 'What actually moves through a wire?',
    tags: ['electricity', 'current', 'basics'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-elec-002',
    subject: 'physics',
    topic: 'Electricity',
    subtopic: 'Ohm\'s Law',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Ohm\'s Law states: V = I × _____',
    correctAnswer: 'R',
    wrongAnswers: ['P', 'Q', 'E'],
    explanation: 'V = IR is the holy trinity of circuits! Voltage = Current × Resistance. Rearrange it: I = V/R (current depends on voltage and resistance), R = V/I. If resistance increases, current decreases (for same voltage). It\'s like water through pipes - narrow pipes = less flow.',
    hint: 'What property of a component opposes current?',
    tags: ['electricity', 'ohms-law', 'equations'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-elec-003',
    subject: 'physics',
    topic: 'Electricity',
    subtopic: 'Series & Parallel',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each circuit type to its current behavior:',
    correctAnswer: ['Series → Same current through all components', 'Parallel → Current splits between branches'],
    wrongAnswers: [],
    explanation: 'Series = one path, current has no choice. Parallel = multiple paths, current divides. That\'s why one bulb blowing in series kills the whole circuit (Christmas lights!) but in parallel, others stay on. Your house uses parallel so one lamp doesn\'t affect others!',
    hint: 'How many paths can current take?',
    tags: ['electricity', 'circuits', 'series-parallel'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-elec-004',
    subject: 'physics',
    topic: 'Electricity',
    subtopic: 'Mains',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'UK mains electricity is:',
    correctAnswer: '230V, 50Hz AC',
    wrongAnswers: ['12V DC', '230V DC', '110V AC'],
    explanation: 'UK mains: 230 volts, alternating 50 times per second! AC (alternating current) changes direction constantly. It\'s easier to transform to different voltages for transmission. The US uses 110V - that\'s why you need adaptors abroad (and why US appliances work differently).',
    hint: 'Is it direct or alternating current?',
    tags: ['electricity', 'mains', 'safety'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-elec-005',
    subject: 'physics',
    topic: 'Electricity',
    subtopic: 'Safety',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The earth wire in a plug:',
    correctAnswer: 'Provides a safe path for current if the metal case becomes live',
    wrongAnswers: ['Carries the main current', 'Is just for decoration', 'Increases power output'],
    explanation: 'The earth wire is your bodyguard! If a fault connects live to the metal case, current flows through earth wire (low resistance path) instead of through YOU. This trips the fuse/circuit breaker. Double-insulated appliances don\'t need earth wires - no metal to touch.',
    hint: 'What happens if current finds a path through you?',
    tags: ['electricity', 'safety', 'wiring'],
    yearGroup: [10, 11]
  },
];

// ============================================
// FORCES & MOTION
// ============================================

export const gcsePhysicsForces: Question[] = [
  {
    id: 'phys-gcse-exp2-force-001',
    subject: 'physics',
    topic: 'Forces',
    subtopic: 'Newton\'s First Law',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'An object will continue at constant velocity unless:',
    correctAnswer: 'A resultant force acts on it',
    wrongAnswers: ['It runs out of energy', 'Gravity stops working', 'It reaches a speed limit'],
    explanation: 'Newton\'s First Law: objects are lazy! They keep doing what they\'re doing (moving or stationary) unless forced to change. In space, no friction means objects coast forever. On Earth, friction and air resistance are the forces that slow things down.',
    hint: 'What does it take to change motion?',
    tags: ['forces', 'newtons-laws', 'motion'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-force-002',
    subject: 'physics',
    topic: 'Forces',
    subtopic: 'Newton\'s Second Law',
    difficulty: 'gcse',
    type: 'numeric',
    question: 'A 1000kg car accelerates at 2 m/s². What force is needed?',
    correctAnswer: 2000,
    wrongAnswers: [500, 1002, 5000],
    explanation: 'F = ma! Force = mass × acceleration = 1000 × 2 = 2000 N. More mass = more force needed for same acceleration. This is why sports cars are lightweight - less mass means more acceleration for the same engine force. Heavy trucks accelerate slowly despite powerful engines.',
    hint: 'Use F = ma',
    tags: ['forces', 'calculations', 'motion'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-force-003',
    subject: 'physics',
    topic: 'Forces',
    subtopic: 'Terminal Velocity',
    difficulty: 'gcse',
    type: 'order',
    question: 'Order the stages of a skydiver\'s fall:',
    correctAnswer: ['Jumps from plane, accelerates downward', 'Air resistance increases with speed', 'Air resistance equals weight - terminal velocity', 'Opens parachute - large air resistance', 'Decelerates to new, lower terminal velocity'],
    wrongAnswers: [],
    explanation: 'Terminal velocity is when forces balance! Initially, only weight acts, so you accelerate. As speed increases, air resistance grows. When air resistance = weight, resultant force = 0, so acceleration = 0. You fall at constant speed (~55 m/s for a person, ~5 m/s with parachute).',
    hint: 'What happens when the forces become balanced?',
    tags: ['forces', 'terminal-velocity', 'falling'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-force-004',
    subject: 'physics',
    topic: 'Forces',
    subtopic: 'Stopping Distance',
    difficulty: 'gcse',
    type: 'match',
    question: 'Match each factor to how it affects stopping distance:',
    correctAnswer: ['Wet road → Increases (less friction)', 'Driver tired → Increases (slower reactions)', 'Faster speed → Increases (more kinetic energy)', 'Better brakes → Decreases (more braking force)'],
    wrongAnswers: [],
    explanation: 'Stopping distance = thinking distance + braking distance! Thinking distance depends on reaction time (affected by tiredness, alcohol, distractions). Braking distance depends on speed, road conditions, and brake quality. At 70mph vs 30mph, stopping distance is about 4× longer!',
    hint: 'What affects reaction time vs. braking effectiveness?',
    tags: ['forces', 'stopping-distance', 'safety'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-force-005',
    subject: 'physics',
    topic: 'Forces',
    subtopic: 'Momentum',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'In any collision, total momentum before equals total momentum after (momentum is conserved).',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Conservation of momentum is fundamental. In a collision, momentum transfers between objects but the total stays the same. A moving car hitting a stationary car shares its momentum. This is why heavy trucks are more dangerous - more momentum to transfer!',
    tags: ['forces', 'momentum', 'conservation'],
    yearGroup: [10, 11]
  },
];

// ============================================
// WAVES
// ============================================

export const gcsePhysicsWaves: Question[] = [
  {
    id: 'phys-gcse-exp2-wave-001',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Properties',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'The frequency of a wave is:',
    correctAnswer: 'The number of complete waves passing a point per second',
    wrongAnswers: ['The height of the wave', 'The length of one wave', 'The speed of the wave'],
    explanation: 'Frequency is how often waves arrive! Measured in Hertz (Hz) - waves per second. High frequency = short wavelength (at constant speed). Radio waves might be 1 million Hz (1 MHz). Sound you can hear: 20 Hz to 20,000 Hz. Light: hundreds of trillion Hz!',
    hint: 'What does frequency measure per second?',
    tags: ['waves', 'frequency', 'properties'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-wave-002',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Wave Equation',
    difficulty: 'gcse',
    type: 'fill-blank',
    question: 'Wave speed = frequency × _____',
    correctAnswer: 'wavelength',
    wrongAnswers: ['amplitude', 'period', 'height'],
    explanation: 'v = f × λ (speed = frequency × wavelength). If waves come faster (high f) with same speed, they must be shorter (lower λ). This equation links all wave properties. Light always travels at the same speed, so different colors (frequencies) have different wavelengths!',
    hint: 'What\'s the distance of one complete wave?',
    tags: ['waves', 'equation', 'calculations'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-wave-003',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'EM Spectrum',
    difficulty: 'gcse',
    type: 'order',
    question: 'Order the EM spectrum from lowest to highest frequency:',
    correctAnswer: ['Radio waves', 'Microwaves', 'Infrared', 'Visible light', 'Ultraviolet', 'X-rays', 'Gamma rays'],
    wrongAnswers: [],
    explanation: 'Roy G. Biv helps for visible, but the full spectrum is huge! Radio waves can be kilometers long; gamma rays are smaller than atoms. All travel at the speed of light (3×10⁸ m/s). Higher frequency = higher energy = more dangerous. That\'s why we X-ray carefully but bath in radio waves!',
    hint: 'Higher frequency means higher energy and more danger',
    tags: ['waves', 'em-spectrum', 'order'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-wave-004',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Reflection',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'The angle of incidence always equals the angle of reflection for light on a smooth surface.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! The law of reflection is simple and universal. Both angles measured from the normal (perpendicular to surface). That\'s why you see yourself in mirrors and can play billiards! Rough surfaces scatter light in all directions (diffuse reflection), which is why walls don\'t act like mirrors.',
    tags: ['waves', 'reflection', 'light'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-wave-005',
    subject: 'physics',
    topic: 'Waves',
    subtopic: 'Sound',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Sound waves cannot travel through:',
    correctAnswer: 'A vacuum (empty space)',
    wrongAnswers: ['Water', 'Steel', 'Air'],
    explanation: 'Sound needs particles to vibrate! No particles = no sound. That\'s why space is silent (despite what movies show!). Sound actually travels faster through solids than gases - particles are closer, so vibrations pass quicker. Sound in water: 1500 m/s. In steel: 5000 m/s. In air: 340 m/s.',
    hint: 'What do sound waves need to travel?',
    tags: ['waves', 'sound', 'medium'],
    yearGroup: [10, 11]
  },
];

// ============================================
// MAGNETISM & ELECTROMAGNETISM
// ============================================

export const gcsePhysicsMagnetism: Question[] = [
  {
    id: 'phys-gcse-exp2-mag-001',
    subject: 'physics',
    topic: 'Magnetism',
    subtopic: 'Magnetic Fields',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Magnetic field lines:',
    correctAnswer: 'Go from north to south pole and never cross',
    wrongAnswers: ['Go from south to north pole', 'Can cross at high intensity', 'Only exist inside magnets'],
    explanation: 'Field lines show the direction a north pole would move! They emerge from north, curve around, and enter south. They never cross because a compass can only point one direction at a time. Closer lines = stronger field. Earth has a magnetic field too - that\'s why compasses work!',
    hint: 'Which way would a north pole be pushed?',
    tags: ['magnetism', 'fields', 'basics'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-mag-002',
    subject: 'physics',
    topic: 'Magnetism',
    subtopic: 'Electromagnets',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'An electromagnet\'s strength can be increased by:',
    correctAnswer: 'All of these',
    wrongAnswers: ['Increasing current', 'Adding more coils', 'Adding an iron core'],
    explanation: 'Triple power boost! More current = stronger magnetic field. More coils = field adds up. Iron core = concentrates the field (iron is magnetic, air isn\'t). Unlike permanent magnets, electromagnets can be switched on/off. That\'s how scrapyard cranes pick up and drop cars!',
    hint: 'What affects the magnetic field strength?',
    tags: ['magnetism', 'electromagnets', 'factors'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-mag-003',
    subject: 'physics',
    topic: 'Electromagnetism',
    subtopic: 'Motor Effect',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'A current-carrying wire in a magnetic field experiences a force.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! This is the motor effect - the basis of all electric motors. Current creates its own magnetic field, which interacts with the external field, creating a force. Use Fleming\'s left-hand rule: First finger = Field, seCond finger = Current, thuMb = Motion (force).',
    tags: ['electromagnetism', 'motor-effect', 'forces'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-mag-004',
    subject: 'physics',
    topic: 'Electromagnetism',
    subtopic: 'Induction',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Moving a magnet into a coil of wire:',
    correctAnswer: 'Induces a voltage in the wire',
    wrongAnswers: ['Destroys the magnet', 'Creates new magnetic poles', 'Has no effect'],
    explanation: 'Electromagnetic induction! Changing magnetic field induces voltage. Move magnet faster = bigger voltage. More coils = bigger voltage. Stronger magnet = bigger voltage. This is how generators work - spin magnets near coils to produce electricity. Reverse of motor effect!',
    hint: 'What happens when magnetic field changes through a coil?',
    tags: ['electromagnetism', 'induction', 'generators'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-mag-005',
    subject: 'physics',
    topic: 'Electromagnetism',
    subtopic: 'Transformers',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Step-up transformers are used in the National Grid to:',
    correctAnswer: 'Increase voltage to reduce energy loss in transmission',
    wrongAnswers: ['Make electricity safer', 'Increase current for faster delivery', 'Create more electricity'],
    explanation: 'High voltage = low current = low energy loss! Power = voltage × current (P = VI). For same power, high V means low I. Energy loss in wires = I²R, so low current means much less loss. That\'s why pylons carry 400,000V, stepped down to 230V for your home.',
    hint: 'What causes energy loss in transmission cables?',
    tags: ['electromagnetism', 'transformers', 'grid'],
    yearGroup: [10, 11]
  },
];

// ============================================
// SPACE
// ============================================

export const gcsePhysicsSpace: Question[] = [
  {
    id: 'phys-gcse-exp2-space-001',
    subject: 'physics',
    topic: 'Space',
    subtopic: 'Solar System',
    difficulty: 'gcse',
    type: 'order',
    question: 'Order the planets from closest to furthest from the Sun:',
    correctAnswer: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    wrongAnswers: [],
    explanation: 'My Very Educated Mother Just Served Us Nachos! (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune). Pluto was demoted to "dwarf planet" in 2006. The inner rocky planets are close; gas giants are far out. Neptune takes 165 Earth years to orbit!',
    hint: 'Use the mnemonic',
    tags: ['space', 'solar-system', 'planets'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-space-002',
    subject: 'physics',
    topic: 'Space',
    subtopic: 'Life Cycle of Stars',
    difficulty: 'gcse',
    type: 'order',
    question: 'Order the stages in a massive star\'s life cycle:',
    correctAnswer: ['Nebula (gas cloud)', 'Protostar', 'Main sequence star', 'Red supergiant', 'Supernova explosion', 'Neutron star or black hole'],
    wrongAnswers: [],
    explanation: 'Stars live dramatic lives! They\'re born from gas clouds, shine by fusing hydrogen, swell into red giants, then... depending on mass: small stars fade to white dwarfs; massive stars explode as supernovae, leaving neutron stars or black holes. We\'re made of star stuff!',
    hint: 'Start with a cloud of gas and dust',
    tags: ['space', 'stars', 'life-cycle'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-space-003',
    subject: 'physics',
    topic: 'Space',
    subtopic: 'Red Shift',
    difficulty: 'gcse',
    type: 'multiple-choice',
    question: 'Light from distant galaxies is red-shifted. This tells us that:',
    correctAnswer: 'Galaxies are moving away from us (universe is expanding)',
    wrongAnswers: ['Galaxies are red in color', 'Light is slowing down', 'Galaxies are moving toward us'],
    explanation: 'Red shift is the Doppler effect for light! When galaxies move away, their light stretches to longer wavelengths (redder). The further the galaxy, the faster it\'s receding and the more red-shifted. This is evidence for the Big Bang - space itself is expanding!',
    hint: 'What does Doppler shift tell us about motion?',
    tags: ['space', 'red-shift', 'big-bang'],
    yearGroup: [10, 11]
  },
  {
    id: 'phys-gcse-exp2-space-004',
    subject: 'physics',
    topic: 'Space',
    subtopic: 'Gravity',
    difficulty: 'gcse',
    type: 'true-false',
    question: 'Planets orbit the Sun because of gravitational attraction.',
    correctAnswer: 'True',
    wrongAnswers: [],
    explanation: 'True! Gravity is the cosmic glue. The Sun\'s mass creates gravitational pull that bends planets\' paths into orbits. Without gravity, planets would fly off in straight lines. The Moon orbits Earth the same way. Even you have gravity - just too weak to notice!',
    tags: ['space', 'gravity', 'orbits'],
    yearGroup: [10, 11]
  },
];

// ============================================
// TERMS
// ============================================

export const gcsePhysicsTermsExpanded2: TermDefinition[] = [
  {
    id: 'phys-gcse-exp2-term-001',
    subject: 'physics',
    difficulty: 'gcse',
    term: 'Resultant Force',
    definition: 'The single force that has the same effect as all forces acting on an object combined',
    example: 'If 10N pushes right and 4N pushes left, resultant = 6N to the right.',
    tags: ['forces', 'motion', 'vectors']
  },
  {
    id: 'phys-gcse-exp2-term-002',
    subject: 'physics',
    difficulty: 'gcse',
    term: 'Ionising Radiation',
    definition: 'Radiation with enough energy to remove electrons from atoms, creating ions',
    example: 'Alpha, beta, and gamma radiation can all ionise atoms, which is why they\'re dangerous to living cells.',
    tags: ['radiation', 'nuclear', 'safety']
  },
  {
    id: 'phys-gcse-exp2-term-003',
    subject: 'physics',
    difficulty: 'gcse',
    term: 'Half-Life',
    definition: 'The time taken for half of the radioactive nuclei in a sample to decay',
    example: 'If a sample has a half-life of 10 years, after 10 years half remains; after 20 years, a quarter remains.',
    tags: ['radiation', 'nuclear', 'decay']
  },
  {
    id: 'phys-gcse-exp2-term-004',
    subject: 'physics',
    difficulty: 'gcse',
    term: 'Elastic Deformation',
    definition: 'When an object returns to its original shape after the force is removed',
    example: 'A spring stretched within its elastic limit returns to original length when released.',
    tags: ['forces', 'materials', 'deformation']
  },
  {
    id: 'phys-gcse-exp2-term-005',
    subject: 'physics',
    difficulty: 'gcse',
    term: 'Transverse Wave',
    definition: 'A wave where oscillations are perpendicular to the direction of energy transfer',
    example: 'Water waves and light waves are transverse - the disturbance is at right angles to wave travel.',
    tags: ['waves', 'types', 'properties']
  },
  {
    id: 'phys-gcse-exp2-term-006',
    subject: 'physics',
    difficulty: 'gcse',
    term: 'Renewable Energy',
    definition: 'Energy from sources that are replenished naturally and won\'t run out',
    example: 'Solar, wind, hydroelectric, tidal, geothermal, and biomass are all renewable energy sources.',
    tags: ['energy', 'resources', 'sustainability']
  },
];

// ============================================
// FORMULAS
// ============================================

export const gcsePhysicsFormulasExpanded2: Formula[] = [
  {
    id: 'phys-gcse-exp2-form-001',
    subject: 'physics',
    topic: 'Forces',
    difficulty: 'gcse',
    name: 'Weight',
    formula: 'W = mg',
    variables: [
      { symbol: 'W', meaning: 'Weight (N)' },
      { symbol: 'm', meaning: 'Mass (kg)' },
      { symbol: 'g', meaning: 'Gravitational field strength (N/kg)' }
    ],
    units: 'Newtons (N)',
    description: 'Weight is the force of gravity on an object'
  },
  {
    id: 'phys-gcse-exp2-form-002',
    subject: 'physics',
    topic: 'Energy',
    difficulty: 'gcse',
    name: 'Kinetic Energy',
    formula: 'KE = ½mv²',
    variables: [
      { symbol: 'KE', meaning: 'Kinetic energy (J)' },
      { symbol: 'm', meaning: 'Mass (kg)' },
      { symbol: 'v', meaning: 'Velocity (m/s)' }
    ],
    units: 'Joules (J)',
    description: 'Energy of a moving object - note v is squared!'
  },
  {
    id: 'phys-gcse-exp2-form-003',
    subject: 'physics',
    topic: 'Energy',
    difficulty: 'gcse',
    name: 'Gravitational Potential Energy',
    formula: 'GPE = mgh',
    variables: [
      { symbol: 'GPE', meaning: 'Gravitational potential energy (J)' },
      { symbol: 'm', meaning: 'Mass (kg)' },
      { symbol: 'g', meaning: 'Gravitational field strength (N/kg)' },
      { symbol: 'h', meaning: 'Height (m)' }
    ],
    units: 'Joules (J)',
    description: 'Energy stored due to position in a gravitational field'
  },
  {
    id: 'phys-gcse-exp2-form-004',
    subject: 'physics',
    topic: 'Electricity',
    difficulty: 'gcse',
    name: 'Electrical Power',
    formula: 'P = IV',
    variables: [
      { symbol: 'P', meaning: 'Power (W)' },
      { symbol: 'I', meaning: 'Current (A)' },
      { symbol: 'V', meaning: 'Voltage (V)' }
    ],
    units: 'Watts (W)',
    description: 'Power in an electrical circuit'
  },
];

// Combined exports
export const gcsePhysicsExpanded2 = [
  ...gcsePhysicsEnergy,
  ...gcsePhysicsElectricity,
  ...gcsePhysicsForces,
  ...gcsePhysicsWaves,
  ...gcsePhysicsMagnetism,
  ...gcsePhysicsSpace,
];
