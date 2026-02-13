// The Mystery of the Forgotten Academy
// A narrative lore system that unfolds as players progress

export interface LoreChapter {
  id: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  content: string;
  cliffhanger: string; // Teaser for what comes next
  unlockRequirement: UnlockRequirement;
}

export interface UnlockRequirement {
  type: 'start' | 'xp' | 'zones' | 'bosses' | 'streak' | 'mastery' | 'perfect' | 'all_subjects';
  value?: number;
  description: string;
}

export interface BonusFragment {
  id: string;
  title: string;
  content: string;
  requirement: UnlockRequirement;
  relatedChapter?: number;
}

// The main story unfolds through chapters
export const STORY_CHAPTERS: LoreChapter[] = [
  {
    id: 'ch-1',
    chapterNumber: 1,
    title: 'The Encrypted Journal',
    subtitle: 'A Discovery in the Attic',
    content: `You found it in your grandparent's attic—a leather-bound journal covered in dust and strange symbols. The cover reads: "Property of the Athenaeum Academy, 1847."

You'd never heard of any Athenaeum Academy. No one had. A quick search revealed nothing—not a single mention in any historical record, as if the place had been deliberately erased.

The first pages are written in an elegant hand:

"If you are reading this, then the Academy has fallen, and I am long gone. But knowledge cannot be destroyed—only hidden. I have encoded the truth within these pages, protected by puzzles that only a true seeker can solve.

You must learn what we learned. Only then will the words reveal themselves.

Begin with numbers. They are the language of the universe."

—Professor E. Blackwood, Last Headmaster`,
    cliffhanger: 'The journal\'s next page shows mathematical symbols you don\'t recognize... yet.',
    unlockRequirement: {
      type: 'start',
      description: 'Available from the beginning',
    },
  },
  {
    id: 'ch-2',
    chapterNumber: 2,
    title: 'The Language of Numbers',
    subtitle: 'First Pages Decoded',
    content: `Your mathematical understanding grows, and with it, the journal responds. Equations that once seemed like gibberish now form words:

"The Academy was founded in 1623 by seven scholars, each master of a different domain. They believed that all knowledge was connected—that mathematics, natural philosophy, language, and history were not separate subjects but fragments of a single truth.

They called this the Unified Theory of Understanding.

For two centuries, the Academy trained the greatest minds in secret. Newton studied here before Cambridge. Darwin refined his theories in our gardens. Mary Shelley wrote her first words in our library.

But we were not alone in seeking knowledge. Others sought to control it."

A name appears in the margin, heavily crossed out: "The Obscurantists."

Who were they? Why did someone try to hide their name?`,
    cliffhanger: 'The next section requires knowledge of living systems to decode...',
    unlockRequirement: {
      type: 'xp',
      value: 500,
      description: 'Earn 500 XP',
    },
  },
  {
    id: 'ch-3',
    chapterNumber: 3,
    title: 'The Garden of Secrets',
    subtitle: 'Biology Reveals Its Truths',
    content: `The pages describing the Academy's grounds come alive:

"Our gardens were no ordinary grounds. Every plant was chosen for a purpose—some for medicine, others for study, many for reasons the outside world must never know.

In the Greenhouse of Evolution, we observed nature's experiments unfold across generations. Darwin spent three years there before publishing a word.

But it was in the Anatomy Theatre where our greatest discoveries were made. Dr. Helena Vance proved that life itself follows mathematical patterns—that cells divide in sequences, that DNA spirals in perfect geometry.

The Obscurantists called this heresy. They believed knowledge should be kept from the common people, doled out only to the 'worthy.' When they learned what we taught freely to any who sought it, they began their campaign to destroy us.

First, they burned our records. Then, they came for our people."

A dried flower is pressed between the pages—a species you've never seen before.`,
    cliffhanger: 'Chemical formulas in the margins suggest the next revelation lies in the realm of elements...',
    unlockRequirement: {
      type: 'zones',
      value: 5,
      description: 'Complete 5 zones',
    },
  },
  {
    id: 'ch-4',
    chapterNumber: 4,
    title: 'The Alchemist\'s Warning',
    subtitle: 'Chemistry Unlocks the Past',
    content: `The chemistry sections reveal more of the Academy's secrets:

"In our laboratories, we had unlocked secrets that would not be 'discovered' for another century. We knew the structure of atoms. We understood radioactivity—and its dangers.

Professor Marie Laurent (yes, THAT Marie's grandmother) warned us: 'Knowledge is neutral, but its application is not. We must teach not just the how, but the why—and the when to refrain.'

The Obscurantists did not understand this wisdom. They wanted our secrets for power, not enlightenment. When we refused to weaponize our discoveries, they declared us enemies of the state.

In 1847, they finally found us. They came with soldiers and fire.

But we had prepared. The most dangerous knowledge—the things humanity was not ready for—we encoded and scattered. Only by learning all subjects could the code be broken.

This journal is the key."

A chemical formula is scratched into the margin: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy

The formula for life itself. A reminder that from simple things, everything grows.`,
    cliffhanger: 'Physical laws govern more than matter—they govern the fate of nations...',
    unlockRequirement: {
      type: 'bosses',
      value: 2,
      description: 'Defeat 2 boss battles',
    },
  },
  {
    id: 'ch-5',
    chapterNumber: 5,
    title: 'Forces in Motion',
    subtitle: 'Physics Charts the Course',
    content: `The physics passages reveal the night of the Academy's fall:

"Newton's laws teach us that every action has an equal reaction. The Obscurantists pushed, and we pushed back.

As soldiers surrounded the Academy, Professor Chen activated the device we had hoped never to use. Using principles of electromagnetic manipulation that the world wouldn't understand for another 150 years, she created a field that erased all physical evidence of our location.

Maps changed overnight. Memories blurred. The Academy had occupied 200 acres of English countryside—by morning, only a forest remained. The soldiers forgot why they had come.

But the device could not protect everything. It could not protect the people who had already fled. It could not protect our libraries, moved in carts across Europe to hidden locations.

Most importantly, it could not protect the children.

Over 100 students were away that night—visiting families, attending secret lectures in London, conducting field research. They returned to find nothing but trees.

I was one of them. I was fifteen years old."

The handwriting here becomes shaky, the ink blotted with what might be old tears.`,
    cliffhanger: 'The story of the scattered students—told in their own words...',
    unlockRequirement: {
      type: 'streak',
      value: 7,
      description: 'Achieve a 7-day streak',
    },
  },
  {
    id: 'ch-6',
    chapterNumber: 6,
    title: 'Words Carried Forward',
    subtitle: 'Language Preserves Memory',
    content: `The language and literature sections contain letters from the scattered students:

"We could not speak of what we had lost. The Obscurantists had agents everywhere, and to mention the Academy was to invite their attention.

So we developed a code. Hidden in the great works of literature—in novels, plays, and poetry—we embedded our messages. The Brontë sisters were among us (yes, all three). Their tales of isolated mansions and hidden passions? Allegories for the Academy.

Dickens knew of us and helped, though he was never a student. His 'Bleak House' contains seventeen coded references to our location. The 'fog' that opens the book? A description of Chen's electromagnetic field.

We aged. We had children. We taught them what we knew, in secret, in fragments.

The Unified Theory was too dangerous to write down whole. So each family preserved one piece. Only by reuniting all the pieces—all the subjects—could the full truth be reconstructed.

This journal is my family's piece. If you've decoded it this far, you carry the mathematics, the sciences, the languages in your mind.

You are becoming what we were."

A family tree is sketched in the margin. Your surname appears at the bottom.`,
    cliffhanger: 'The final pieces lie in understanding the past itself...',
    unlockRequirement: {
      type: 'mastery',
      value: 25,
      description: 'Achieve 25% overall mastery',
    },
  },
  {
    id: 'ch-7',
    chapterNumber: 7,
    title: 'History Remembers',
    subtitle: 'The Truth Emerges',
    content: `The history sections reveal the fate of the Obscurantists:

"They thought they had won. For decades, the Obscurantists controlled what humanity learned, suppressing discoveries, burning books, silencing voices.

But knowledge is like water. Dam it, and it finds another path.

Every scientific breakthrough they tried to hide eventually resurfaced. Every truth they buried was rediscovered. Their centuries of control delayed human progress, but could not stop it.

By 1945, they had lost. Universal education spread. Libraries opened to all. The internet connected minds across the globe. The very thing they feared—knowledge freely available to everyone—became reality.

The last of the Obscurantists faded into conspiracy theories and irrelevance.

But the Academy's true purpose was never about fighting them. It was about YOU.

The Unified Theory of Understanding was never a secret formula or hidden technology. It was a method of learning—connecting every subject, seeing patterns across disciplines, understanding that ALL knowledge is ONE knowledge.

You have been learning it all along."`,
    cliffhanger: 'One final secret remains...',
    unlockRequirement: {
      type: 'zones',
      value: 15,
      description: 'Complete 15 zones',
    },
  },
  {
    id: 'ch-8',
    chapterNumber: 8,
    title: 'The Unified Theory',
    subtitle: 'All Knowledge Is One',
    content: `The final pages glow with understanding:

"You have decoded my journal. You have learned what the Academy taught. Now you understand what we knew:

Mathematics is the language of the universe—from the spirals of galaxies to the branching of your lungs, the same patterns repeat.

Biology is chemistry in motion—molecules dancing in patterns that mathematics describes.

Chemistry is physics applied—forces between atoms creating everything you see.

Physics is the rulebook of reality—but the rules are written in mathematical poetry.

Language lets us share these truths—passing wisdom across generations, encoding meaning in symbol and sound.

History shows us that knowledge cannot be stopped—that every generation rediscovers what was lost and builds upon it.

This is the Unified Theory: There are no subjects, only perspectives on the same infinite truth.

The Academy may be gone, but its purpose lives on in every curious mind. In you.

Welcome to the Athenaeum."

The final page contains a symbol—seven circles interlocked, each representing a domain of knowledge, all connected at the center.

Below it: "Class of 2024. And every year thereafter. Forever."

—E. Blackwood (1832-1917), and all who came before and after`,
    cliffhanger: '',
    unlockRequirement: {
      type: 'all_subjects',
      description: 'Study all subjects (complete at least 1 zone in each)',
    },
  },
];

// Bonus fragments provide extra backstory and are earned through achievements
export const BONUS_FRAGMENTS: BonusFragment[] = [
  {
    id: 'bonus-perfect-1',
    title: 'The First Perfect Student',
    content: `A note tucked between Chapter 2's pages:

"The first student to achieve perfect marks across all subjects was a girl named Ada, daughter of a famous poet. She saw patterns others missed—the poetry in equations, the mathematics in music. We called her 'the Enchantress of Numbers.'

She went on to imagine a machine that could think. We called it fantasy. The world now calls it a computer."

—Academy Records, 1835`,
    requirement: {
      type: 'perfect',
      value: 5,
      description: 'Achieve 5 perfect scores in battles',
    },
    relatedChapter: 2,
  },
  {
    id: 'bonus-streak-14',
    title: 'The Disciplined Mind',
    content: `A meditation written in the margin:

"The greatest scholars were not the most naturally gifted. They were the most consistent. Every day, they added a stone to their foundation of knowledge.

The mind is a muscle. Exercise it daily, and it will carry you beyond what you thought possible.

This was our first lesson, and our most important."

—Academy Training Manual`,
    requirement: {
      type: 'streak',
      value: 14,
      description: 'Achieve a 14-day streak',
    },
  },
  {
    id: 'bonus-mastery-50',
    title: 'The Halfway Scholar',
    content: `A certificate falls from the journal:

"ATHENAEUM ACADEMY
Certificate of Intermediate Mastery

This acknowledges that the bearer has demonstrated proficiency in multiple domains of understanding. They stand at the threshold of true scholarship.

The second half of the journey is harder than the first—but infinitely more rewarding.

Continue, seeker. The truth awaits."

Your name appears on the certificate, written in fresh ink.`,
    requirement: {
      type: 'mastery',
      value: 50,
      description: 'Achieve 50% overall mastery',
    },
  },
  {
    id: 'bonus-bosses-5',
    title: 'The Trial of Champions',
    content: `A sealed letter, now open:

"The Academy's final exams were legendary. Each subject had a 'Guardian'—a master who challenged students with the hardest questions in their domain.

To graduate, you had to face all seven.

Most students spent years preparing. Some never passed. But those who did emerged transformed, their minds capable of connections others couldn't see.

You have faced several Guardians now. Each victory proves you belong here."

—Letter to a Graduate, 1801`,
    requirement: {
      type: 'bosses',
      value: 5,
      description: 'Defeat 5 boss battles',
    },
  },
  {
    id: 'bonus-xp-5000',
    title: 'The Weight of Knowledge',
    content: `An illustration shows a scale, perfectly balanced:

"A scholar once asked: 'How much does knowledge weigh?'

The Headmaster replied: 'Nothing at all. Yet it is the heaviest thing you will ever carry.'

For knowledge brings responsibility. To know is to understand consequences. To understand is to bear witness. To bear witness is to be compelled to act.

You have accumulated much knowledge. Use it wisely."

—Academy Philosophy, Author Unknown`,
    requirement: {
      type: 'xp',
      value: 5000,
      description: 'Earn 5,000 total XP',
    },
  },
  {
    id: 'bonus-streak-30',
    title: 'The Unbroken Chain',
    content: `A list of names, dozens long, each with a date:

"The Chain of Learning

Each name on this list represents a student who learned without interruption for 30 days or more. We believed this created a special kind of mind—one that could hold complex ideas in continuous development.

Modern science calls this 'spaced repetition' and 'neural pathway strengthening.' We simply called it dedication.

Your name has been added to the list."

The ink is fresh. The list is real.`,
    requirement: {
      type: 'streak',
      value: 30,
      description: 'Achieve a 30-day streak',
    },
  },
  {
    id: 'bonus-perfect-20',
    title: 'The Mind Like Diamond',
    content: `A diamond-shaped medal is drawn:

"We gave this medal to students who achieved perfection not once, but repeatedly. We called them 'Diamond Minds'—their knowledge was clear, unflawed, and virtually unbreakable.

This level of mastery was rare. Perhaps one student per decade achieved it.

You have shown that your mind can achieve perfection when focused. This is not luck. This is capability.

The question is: what will you do with it?"

—Academy Honor Roll`,
    requirement: {
      type: 'perfect',
      value: 20,
      description: 'Achieve 20 perfect scores in battles',
    },
    relatedChapter: 8,
  },
];

// Helper function to check if a requirement is met
export function isRequirementMet(
  requirement: UnlockRequirement,
  stats: {
    totalXP: number;
    completedZones: number;
    bossesDefeated: number;
    currentStreak: number;
    overallMastery: number;
    perfectGames: number;
    subjectsStarted: number;
  }
): boolean {
  switch (requirement.type) {
    case 'start':
      return true;
    case 'xp':
      return stats.totalXP >= (requirement.value || 0);
    case 'zones':
      return stats.completedZones >= (requirement.value || 0);
    case 'bosses':
      return stats.bossesDefeated >= (requirement.value || 0);
    case 'streak':
      return stats.currentStreak >= (requirement.value || 0);
    case 'mastery':
      return stats.overallMastery >= (requirement.value || 0);
    case 'perfect':
      return stats.perfectGames >= (requirement.value || 0);
    case 'all_subjects':
      return stats.subjectsStarted >= 7;
    default:
      return false;
  }
}

// Get unlocked chapters based on stats
export function getUnlockedChapters(stats: {
  totalXP: number;
  completedZones: number;
  bossesDefeated: number;
  currentStreak: number;
  overallMastery: number;
  perfectGames: number;
  subjectsStarted: number;
}): LoreChapter[] {
  return STORY_CHAPTERS.filter(chapter =>
    isRequirementMet(chapter.unlockRequirement, stats)
  );
}

// Get unlocked bonus fragments based on stats
export function getUnlockedBonusFragments(stats: {
  totalXP: number;
  completedZones: number;
  bossesDefeated: number;
  currentStreak: number;
  overallMastery: number;
  perfectGames: number;
  subjectsStarted: number;
}): BonusFragment[] {
  return BONUS_FRAGMENTS.filter(fragment =>
    isRequirementMet(fragment.requirement, stats)
  );
}

// Get the next locked chapter
export function getNextLockedChapter(stats: {
  totalXP: number;
  completedZones: number;
  bossesDefeated: number;
  currentStreak: number;
  overallMastery: number;
  perfectGames: number;
  subjectsStarted: number;
}): LoreChapter | null {
  return STORY_CHAPTERS.find(chapter =>
    !isRequirementMet(chapter.unlockRequirement, stats)
  ) || null;
}

export default STORY_CHAPTERS;
