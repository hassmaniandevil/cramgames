'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Calculator,
  Leaf,
  FlaskConical,
  Atom,
  BookOpen,
  Languages,
  Star,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { CircularProgress } from '@/components/ui/ProgressBar';
import { cn } from '@/lib/utils/cn';
import { useProgressStore } from '@/lib/stores/progressStore';

// Subject configuration
export const SUBJECTS = [
  {
    id: 'maths',
    name: 'Mathematics',
    shortName: 'Maths',
    icon: Calculator,
    color: 'purple',
    gradient: 'from-purple-500 to-violet-600',
    glow: 'shadow-purple-500/30',
    description: 'Numbers, algebra & shapes',
    totalZones: 70,
  },
  {
    id: 'biology',
    name: 'Biology',
    shortName: 'Bio',
    icon: Leaf,
    color: 'green',
    gradient: 'from-green-500 to-emerald-600',
    glow: 'shadow-green-500/30',
    description: 'Life & living organisms',
    totalZones: 65,
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    shortName: 'Chem',
    icon: FlaskConical,
    color: 'orange',
    gradient: 'from-orange-500 to-amber-600',
    glow: 'shadow-orange-500/30',
    description: 'Elements & reactions',
    totalZones: 75,
  },
  {
    id: 'physics',
    name: 'Physics',
    shortName: 'Physics',
    icon: Atom,
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-600',
    glow: 'shadow-blue-500/30',
    description: 'Forces & energy',
    totalZones: 70,
  },
  {
    id: 'english-language',
    name: 'English Language',
    shortName: 'Eng Lang',
    icon: BookOpen,
    color: 'pink',
    gradient: 'from-pink-500 to-rose-600',
    glow: 'shadow-pink-500/30',
    description: 'Reading & writing',
    totalZones: 25,
  },
  {
    id: 'english-literature',
    name: 'English Literature',
    shortName: 'Eng Lit',
    icon: Star,
    color: 'yellow',
    gradient: 'from-yellow-500 to-amber-500',
    glow: 'shadow-yellow-500/30',
    description: 'Stories & poetry',
    totalZones: 20,
  },
] as const;

export function GalaxyMap() {
  const router = useRouter();
  const { subjectProgress } = useProgressStore();

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
          Choose Your Galaxy
        </h1>
        <p className="text-white/60">
          Each subject is a galaxy waiting to be explored
        </p>
      </motion.div>

      {/* Subject grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {SUBJECTS.map((subject, index) => {
          const progress = subjectProgress[subject.id];
          const completion = progress
            ? (progress.zonesCompleted / subject.totalZones) * 100
            : 0;
          const Icon = subject.icon;

          return (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                variant="elevated"
                padding="none"
                interactive
                className={cn(
                  'overflow-hidden cursor-pointer group',
                  `hover:${subject.glow}`
                )}
                onClick={() => router.push(`/play/planet/${subject.id}`)}
              >
                {/* Planet visual */}
                <div
                  className={cn(
                    'relative h-32 md:h-40 flex items-center justify-center',
                    `bg-gradient-to-br ${subject.gradient}`
                  )}
                >
                  {/* Planet "rings" */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      className="absolute w-40 h-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                      className="absolute w-56 h-56 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon
                      size={48}
                      className="text-white drop-shadow-lg"
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Progress ring */}
                  {completion > 0 && (
                    <div className="absolute bottom-2 right-2">
                      <CircularProgress
                        value={completion}
                        size={36}
                        strokeWidth={3}
                        showValue={false}
                      />
                    </div>
                  )}

                  {/* Stars decoration */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${15 + Math.random() * 70}%`,
                      }}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Info section */}
                <div className="p-4">
                  <h3 className="font-bold text-white text-lg mb-1">
                    {subject.shortName}
                  </h3>
                  <p className="text-white/50 text-sm mb-2">
                    {subject.description}
                  </p>

                  {/* Progress text */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/40">
                      {progress?.zonesCompleted || 0}/{subject.totalZones} zones
                    </span>
                    {progress?.totalXP ? (
                      <span className="text-yellow-400 font-medium">
                        {progress.totalXP.toLocaleString()} XP
                      </span>
                    ) : null}
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Floating elements for atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-1">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
