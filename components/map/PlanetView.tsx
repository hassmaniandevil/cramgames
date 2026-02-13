'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Lock, Crown, Star, Check } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';
import { useProgressStore, MasteryLevel } from '@/lib/stores/progressStore';
import { SUBJECTS } from './GalaxyMap';

export interface Zone {
  id: string;
  name: string;
  topic: string;
  order: number;
  isBoss?: boolean;
  questionsCount: number;
}

export interface Topic {
  id: string;
  name: string;
  zones: Zone[];
}

export interface PlanetViewProps {
  subjectId: string;
  topics: Topic[];
}

export function PlanetView({ subjectId, topics }: PlanetViewProps) {
  const router = useRouter();
  const { zoneMastery, calculateMasteryLevel } = useProgressStore();

  const subject = SUBJECTS.find((s) => s.id === subjectId);
  if (!subject) return null;

  const Icon = subject.icon;

  const getMasteryStyle = (mastery: MasteryLevel) => {
    switch (mastery) {
      case 3: return { ring: 'ring-yellow-400', bg: 'bg-yellow-400/20', icon: '🏆' };
      case 2: return { ring: 'ring-gray-300', bg: 'bg-gray-300/20', icon: '🥈' };
      case 1: return { ring: 'ring-amber-600', bg: 'bg-amber-600/20', icon: '🥉' };
      default: return { ring: 'ring-white/20', bg: 'bg-white/5', icon: null };
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/play')}
          className="p-2"
        >
          <ArrowLeft size={20} />
        </Button>

        <div className="flex items-center gap-3">
          <div className={cn('p-2 rounded-xl bg-gradient-to-br', subject.gradient)}>
            <Icon size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{subject.name}</h1>
            <p className="text-white/50 text-sm">{topics.length} topics to explore</p>
          </div>
        </div>
      </div>

      {/* Topics */}
      <div className="space-y-8">
        {topics.map((topic, topicIndex) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: topicIndex * 0.1 }}
          >
            {/* Topic header */}
            <div className="flex items-center gap-3 mb-4">
              <div className={cn('w-1 h-8 rounded-full bg-gradient-to-b', subject.gradient)} />
              <h2 className="text-lg font-semibold text-white">{topic.name}</h2>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Zone grid */}
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {topic.zones.map((zone, zoneIndex) => {
                const mastery = calculateMasteryLevel(zone.id);
                const masteryStyle = getMasteryStyle(mastery);
                const isLocked = false; // TODO: Implement lock logic based on previous zone completion

                return (
                  <motion.button
                    key={zone.id}
                    className={cn(
                      'relative aspect-square rounded-xl flex flex-col items-center justify-center gap-1',
                      'transition-all duration-200',
                      masteryStyle.bg,
                      'ring-2',
                      masteryStyle.ring,
                      !isLocked && 'hover:scale-105 hover:ring-4 cursor-pointer',
                      isLocked && 'opacity-50 cursor-not-allowed',
                      zone.isBoss && 'ring-orange-500 bg-orange-500/20'
                    )}
                    onClick={() => {
                      if (!isLocked) {
                        router.push(`/play/battle/${zone.id}`);
                      }
                    }}
                    whileHover={!isLocked ? { scale: 1.05 } : {}}
                    whileTap={!isLocked ? { scale: 0.95 } : {}}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (topicIndex * 0.1) + (zoneIndex * 0.03) }}
                  >
                    {/* Zone icon/number */}
                    {isLocked ? (
                      <Lock size={20} className="text-white/30" />
                    ) : zone.isBoss ? (
                      <Crown size={20} className="text-orange-400" />
                    ) : masteryStyle.icon ? (
                      <span className="text-xl">{masteryStyle.icon}</span>
                    ) : mastery > 0 ? (
                      <Check size={20} className="text-green-400" />
                    ) : (
                      <span className="text-white/60 font-medium text-sm">
                        {zone.order}
                      </span>
                    )}

                    {/* Zone name tooltip on hover */}
                    <span className="text-[10px] text-white/50 text-center line-clamp-1 px-1">
                      {zone.name}
                    </span>

                    {/* Mastery stars */}
                    {mastery > 0 && (
                      <div className="absolute -top-1 -right-1 flex">
                        {[...Array(mastery)].map((_, i) => (
                          <Star
                            key={i}
                            size={10}
                            className={cn(
                              'fill-current -ml-1 first:ml-0',
                              mastery === 3 && 'text-yellow-400',
                              mastery === 2 && 'text-gray-300',
                              mastery === 1 && 'text-amber-600'
                            )}
                          />
                        ))}
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom padding for safe area */}
      <div className="h-20" />
    </div>
  );
}

// Simple zone card for list view alternative
export function ZoneCard({
  zone,
  mastery,
  onClick,
}: {
  zone: Zone;
  mastery: MasteryLevel;
  onClick: () => void;
}) {
  const masteryColors = {
    0: 'border-white/20',
    1: 'border-amber-600 shadow-amber-600/20',
    2: 'border-gray-300 shadow-gray-300/20',
    3: 'border-yellow-400 shadow-yellow-400/20',
  };

  return (
    <Card
      variant="default"
      padding="sm"
      interactive
      className={cn('border-2', masteryColors[mastery])}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-white">{zone.name}</h3>
          <p className="text-xs text-white/50">{zone.questionsCount} questions</p>
        </div>
        {zone.isBoss && <Crown size={20} className="text-orange-400" />}
        {mastery > 0 && !zone.isBoss && (
          <div className="flex gap-0.5">
            {[...Array(mastery)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={cn(
                  'fill-current',
                  mastery === 3 && 'text-yellow-400',
                  mastery === 2 && 'text-gray-300',
                  mastery === 1 && 'text-amber-600'
                )}
              />
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
