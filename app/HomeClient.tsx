'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useHydration } from '@/lib/stores/useHydration';
import { useProgressStore } from '@/lib/stores/progressStore';
import { useStreakStore } from '@/lib/stores/streakStore';
import {
  Search,
  Flame,
  Star,
  TrendingUp,
  Clock,
  Gamepad2,
  Book,
  User,
  Menu,
  X,
  Play,
  Users,
  Zap,
  Swords,
  Crown,
  School,
  FlaskConical,
  Rocket,
  Link,
  Calculator,
  Target,
  Brain,
  Shuffle,
  Atom,
  Beaker,
  Timer,
  GitBranch,
  Scale,
  Layers,
  Sparkles,
} from 'lucide-react';
import { QuickResume } from '@/components/game/QuickResume';
import { DailyMission } from '@/components/game/DailyMission';
import { ModeToggle } from '@/components/game/ModeToggle';
import { QuickSettings } from '@/components/game/QuickSettings';

// Game thumbnail component - creates unique artwork for each game
function GameThumbnail({ game, size = 'normal' }: { game: typeof ALL_GAMES[0], size?: 'normal' | 'large' }) {
  const iconSize = size === 'large' ? 48 : 32;
  const smallIconSize = size === 'large' ? 20 : 14;

  // Game-specific artwork configurations
  const artworkConfig: Record<string, {
    bg: string;
    pattern: string;
    icon: any;
    accent: string;
    decorations: Array<{ icon: any; pos: string; rotate?: number; opacity?: number }>;
  }> = {
    'pvp-battle': {
      bg: 'from-rose-900 via-red-800 to-orange-900',
      pattern: 'bg-[radial-gradient(circle_at_30%_70%,rgba(255,100,100,0.3),transparent_50%)]',
      icon: Swords,
      accent: 'text-red-400',
      decorations: [
        { icon: Zap, pos: 'top-2 right-3', rotate: 15, opacity: 0.4 },
        { icon: Flame, pos: 'bottom-3 left-3', rotate: -10, opacity: 0.3 },
      ]
    },
    'class-clash': {
      bg: 'from-blue-900 via-indigo-800 to-purple-900',
      pattern: 'bg-[radial-gradient(circle_at_70%_30%,rgba(100,150,255,0.3),transparent_50%)]',
      icon: School,
      accent: 'text-blue-400',
      decorations: [
        { icon: Users, pos: 'top-2 left-3', rotate: -5, opacity: 0.4 },
        { icon: Crown, pos: 'bottom-3 right-3', rotate: 10, opacity: 0.3 },
      ]
    },
    'boss-battle': {
      bg: 'from-purple-900 via-fuchsia-900 to-pink-900',
      pattern: 'bg-[radial-gradient(circle_at_50%_50%,rgba(200,100,255,0.2),transparent_60%)]',
      icon: Crown,
      accent: 'text-purple-400',
      decorations: [
        { icon: Sparkles, pos: 'top-2 right-3', rotate: 0, opacity: 0.5 },
        { icon: Star, pos: 'bottom-3 left-3', rotate: 15, opacity: 0.3 },
        { icon: Zap, pos: 'top-3 left-4', rotate: -20, opacity: 0.2 },
      ]
    },
    'lab-escape': {
      bg: 'from-emerald-900 via-teal-900 to-cyan-900',
      pattern: 'bg-[conic-gradient(from_180deg,rgba(0,200,150,0.1),transparent,rgba(0,200,150,0.1))]',
      icon: FlaskConical,
      accent: 'text-emerald-400',
      decorations: [
        { icon: Beaker, pos: 'top-2 right-3', rotate: 10, opacity: 0.4 },
        { icon: Atom, pos: 'bottom-3 left-3', rotate: 0, opacity: 0.3 },
      ]
    },
    'speed-blitz': {
      bg: 'from-cyan-900 via-blue-900 to-indigo-900',
      pattern: 'bg-[linear-gradient(135deg,rgba(0,200,255,0.1)_25%,transparent_25%,transparent_50%,rgba(0,200,255,0.1)_50%,rgba(0,200,255,0.1)_75%,transparent_75%)]',
      icon: Rocket,
      accent: 'text-cyan-400',
      decorations: [
        { icon: Zap, pos: 'top-2 left-3', rotate: -15, opacity: 0.4 },
        { icon: Timer, pos: 'bottom-3 right-3', rotate: 5, opacity: 0.3 },
      ]
    },
    'power-connect': {
      bg: 'from-amber-900 via-orange-900 to-red-900',
      pattern: 'bg-[radial-gradient(circle_at_20%_80%,rgba(255,180,0,0.2),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,100,0,0.2),transparent_40%)]',
      icon: Link,
      accent: 'text-amber-400',
      decorations: [
        { icon: Zap, pos: 'top-2 right-3', rotate: 0, opacity: 0.4 },
        { icon: Sparkles, pos: 'bottom-3 left-3', rotate: 0, opacity: 0.3 },
      ]
    },
    'number-ninja': {
      bg: 'from-violet-900 via-purple-900 to-indigo-900',
      pattern: 'bg-[repeating-linear-gradient(45deg,rgba(150,100,255,0.05),rgba(150,100,255,0.05)_10px,transparent_10px,transparent_20px)]',
      icon: Calculator,
      accent: 'text-violet-400',
      decorations: [
        { icon: Zap, pos: 'top-2 right-3', rotate: 10, opacity: 0.3 },
      ]
    },
    'reaction-race': {
      bg: 'from-green-900 via-emerald-900 to-teal-900',
      pattern: 'bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,150,0.15),transparent_50%)]',
      icon: Target,
      accent: 'text-green-400',
      decorations: [
        { icon: Zap, pos: 'top-2 left-3', rotate: -10, opacity: 0.4 },
        { icon: Timer, pos: 'bottom-3 right-3', rotate: 0, opacity: 0.3 },
      ]
    },
    'memory-match': {
      bg: 'from-pink-900 via-rose-900 to-red-900',
      pattern: 'bg-[radial-gradient(circle_at_30%_70%,rgba(255,150,200,0.2),transparent_40%)]',
      icon: Brain,
      accent: 'text-pink-400',
      decorations: [
        { icon: Sparkles, pos: 'top-2 right-3', rotate: 0, opacity: 0.4 },
        { icon: Star, pos: 'bottom-3 left-3', rotate: 15, opacity: 0.3 },
      ]
    },
    'word-scramble': {
      bg: 'from-indigo-900 via-blue-900 to-cyan-900',
      pattern: 'bg-[linear-gradient(to_right,rgba(100,150,255,0.1),transparent_50%,rgba(100,150,255,0.1))]',
      icon: Shuffle,
      accent: 'text-indigo-400',
      decorations: [
        { icon: Book, pos: 'bottom-3 right-3', rotate: 5, opacity: 0.3 },
      ]
    },
    'element-hunt': {
      bg: 'from-teal-900 via-cyan-900 to-blue-900',
      pattern: 'bg-[radial-gradient(circle_at_70%_70%,rgba(0,200,200,0.2),transparent_50%)]',
      icon: Atom,
      accent: 'text-teal-400',
      decorations: [
        { icon: Search, pos: 'top-2 right-3', rotate: 0, opacity: 0.4 },
        { icon: FlaskConical, pos: 'bottom-3 left-3', rotate: -10, opacity: 0.3 },
      ]
    },
    'formula-frenzy': {
      bg: 'from-orange-900 via-amber-900 to-yellow-900',
      pattern: 'bg-[conic-gradient(from_90deg,rgba(255,180,0,0.1),transparent,rgba(255,180,0,0.1),transparent)]',
      icon: FlaskConical,
      accent: 'text-orange-400',
      decorations: [
        { icon: Beaker, pos: 'top-2 left-3', rotate: -5, opacity: 0.4 },
        { icon: Atom, pos: 'bottom-3 right-3', rotate: 0, opacity: 0.3 },
      ]
    },
    'timeline-challenge': {
      bg: 'from-rose-900 via-pink-900 to-purple-900',
      pattern: 'bg-[linear-gradient(90deg,rgba(255,100,150,0.1)_1px,transparent_1px)] bg-[size:20px_100%]',
      icon: Clock,
      accent: 'text-rose-400',
      decorations: [
        { icon: TrendingUp, pos: 'bottom-3 right-3', rotate: 0, opacity: 0.3 },
      ]
    },
    'quick-fire': {
      bg: 'from-amber-900 via-orange-900 to-red-900',
      pattern: 'bg-[radial-gradient(circle_at_50%_100%,rgba(255,150,0,0.3),transparent_50%)]',
      icon: Flame,
      accent: 'text-amber-400',
      decorations: [
        { icon: Timer, pos: 'top-2 right-3', rotate: 0, opacity: 0.4 },
        { icon: Zap, pos: 'bottom-3 left-3', rotate: -15, opacity: 0.3 },
      ]
    },
    'definition-dash': {
      bg: 'from-lime-900 via-green-900 to-emerald-900',
      pattern: 'bg-[linear-gradient(135deg,rgba(150,255,100,0.1),transparent_50%)]',
      icon: GitBranch,
      accent: 'text-lime-400',
      decorations: [
        { icon: Book, pos: 'top-2 right-3', rotate: 5, opacity: 0.4 },
      ]
    },
    'equation-balancer': {
      bg: 'from-blue-900 via-indigo-900 to-violet-900',
      pattern: 'bg-[repeating-linear-gradient(0deg,rgba(100,100,255,0.05),rgba(100,100,255,0.05)_2px,transparent_2px,transparent_20px)]',
      icon: Scale,
      accent: 'text-blue-400',
      decorations: [
        { icon: Calculator, pos: 'bottom-3 right-3', rotate: 0, opacity: 0.3 },
      ]
    },
    'category-sort': {
      bg: 'from-sky-900 via-cyan-900 to-teal-900',
      pattern: 'bg-[radial-gradient(circle_at_0%_50%,rgba(0,200,255,0.15),transparent_50%)]',
      icon: Layers,
      accent: 'text-sky-400',
      decorations: [
        { icon: Sparkles, pos: 'top-2 right-3', rotate: 0, opacity: 0.3 },
      ]
    },
    'diagram-detective': {
      bg: 'from-fuchsia-900 via-purple-900 to-violet-900',
      pattern: 'bg-[radial-gradient(circle_at_80%_20%,rgba(200,100,255,0.2),transparent_40%)]',
      icon: Search,
      accent: 'text-fuchsia-400',
      decorations: [
        { icon: Layers, pos: 'bottom-3 left-3', rotate: 0, opacity: 0.3 },
        { icon: Atom, pos: 'top-2 right-3', rotate: 15, opacity: 0.3 },
      ]
    },
  };

  const config = artworkConfig[game.id] || {
    bg: 'from-gray-900 via-gray-800 to-gray-900',
    pattern: '',
    icon: Gamepad2,
    accent: 'text-gray-400',
    decorations: []
  };

  const MainIcon = config.icon;

  return (
    <div className={`aspect-video bg-gradient-to-br ${config.bg} relative overflow-hidden`}>
      {/* Pattern overlay */}
      <div className={`absolute inset-0 ${config.pattern}`} />

      {/* Grid lines for techy feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Decorative icons */}
      {config.decorations.map((dec, i) => {
        const DecIcon = dec.icon;
        return (
          <DecIcon
            key={i}
            size={smallIconSize}
            className={`absolute ${dec.pos} text-white`}
            style={{
              transform: `rotate(${dec.rotate || 0}deg)`,
              opacity: dec.opacity || 0.3
            }}
          />
        );
      })}

      {/* Main icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`${config.accent} opacity-90`}>
          <MainIcon size={iconSize} strokeWidth={1.5} />
        </div>
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
    </div>
  );
}

const FEATURED_GAMES = [
  {
    id: 'pvp-battle',
    title: 'PvP Battle',
    plays: '12.4K',
    rating: 4.8,
    isHot: true,
    isNew: false,
    description: 'Challenge friends in real-time battles',
    category: 'multiplayer',
  },
  {
    id: 'boss-battle',
    title: 'Boss Battle',
    plays: '8.2K',
    rating: 4.9,
    isHot: true,
    isNew: false,
    description: 'Defeat epic bosses to earn rewards',
    category: 'action',
  },
  {
    id: 'class-clash',
    title: 'Class Clash',
    plays: '5.1K',
    rating: 4.7,
    isHot: false,
    isNew: true,
    description: 'Compete with your class',
    category: 'multiplayer',
  },
];

const ALL_GAMES = [
  { id: 'pvp-battle', title: 'PvP Battle', plays: '12.4K', rating: 4.8, isHot: true, isNew: false, category: 'multiplayer' },
  { id: 'class-clash', title: 'Class Clash', plays: '5.1K', rating: 4.7, isHot: false, isNew: true, category: 'multiplayer' },
  { id: 'boss-battle', title: 'Boss Battle', plays: '8.2K', rating: 4.9, isHot: true, isNew: false, category: 'action' },
  { id: 'lab-escape', title: 'Lab Escape', plays: '6.8K', rating: 4.6, isHot: false, isNew: false, category: 'puzzle' },
  { id: 'speed-blitz', title: 'Speed Blitz', plays: '9.3K', rating: 4.5, isHot: true, isNew: false, category: 'action' },
  { id: 'power-connect', title: 'Power Connect', plays: '4.2K', rating: 4.4, isHot: false, isNew: false, category: 'puzzle' },
  { id: 'number-ninja', title: 'Number Ninja', plays: '7.1K', rating: 4.7, isHot: false, isNew: false, category: 'maths' },
  { id: 'reaction-race', title: 'Reaction Race', plays: '5.5K', rating: 4.3, isHot: false, isNew: false, category: 'action' },
  { id: 'memory-match', title: 'Memory Match', plays: '4.8K', rating: 4.5, isHot: false, isNew: false, category: 'puzzle' },
  { id: 'word-scramble', title: 'Word Scramble', plays: '3.9K', rating: 4.4, isHot: false, isNew: false, category: 'english' },
  { id: 'element-hunt', title: 'Element Hunt', plays: '6.2K', rating: 4.6, isHot: false, isNew: true, category: 'science' },
  { id: 'formula-frenzy', title: 'Formula Frenzy', plays: '3.4K', rating: 4.3, isHot: false, isNew: false, category: 'science' },
  { id: 'timeline-challenge', title: 'Timeline', plays: '4.1K', rating: 4.5, isHot: false, isNew: false, category: 'history' },
  { id: 'quick-fire', title: 'Quick Fire', plays: '8.7K', rating: 4.6, isHot: true, isNew: false, category: 'action' },
  { id: 'definition-dash', title: 'Definition Dash', plays: '3.2K', rating: 4.4, isHot: false, isNew: false, category: 'english' },
  { id: 'equation-balancer', title: 'Equations', plays: '2.8K', rating: 4.5, isHot: false, isNew: false, category: 'maths' },
  { id: 'category-sort', title: 'Category Sort', plays: '2.5K', rating: 4.2, isHot: false, isNew: false, category: 'puzzle' },
  { id: 'diagram-detective', title: 'Diagrams', plays: '2.1K', rating: 4.3, isHot: false, isNew: false, category: 'science' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Games', count: ALL_GAMES.length },
  { id: 'multiplayer', label: 'Multiplayer', count: 2 },
  { id: 'action', label: 'Action', count: 4 },
  { id: 'puzzle', label: 'Puzzle', count: 4 },
  { id: 'maths', label: 'Maths', count: 2 },
  { id: 'science', label: 'Science', count: 3 },
  { id: 'english', label: 'English', count: 2 },
];

export function HomeClient() {
  const router = useRouter();
  const hydrated = useHydration();
  const { totalXP, level } = useProgressStore();
  const { currentStreak } = useStreakStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [recentGames] = useState(['pvp-battle', 'boss-battle', 'speed-blitz']);

  const filteredGames = ALL_GAMES.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (!hydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
          {/* Menu button (mobile) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <button onClick={() => router.push('/')} className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Gamepad2 size={20} />
            </div>
            <span className="font-bold text-xl hidden sm:block tracking-tight">CramGames</span>
          </button>

          {/* Search */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-colors"
              />
            </div>
          </div>

          {/* Quick Settings - Easy year/subject toggle */}
          <QuickSettings className="hidden sm:flex" />

          {/* Stats */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5">
              <Zap className="text-yellow-500" size={16} />
              <span className="text-sm font-medium">{totalXP.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5">
              <Flame className={currentStreak > 0 ? 'text-orange-500' : 'text-gray-600'} size={16} />
              <span className="text-sm font-medium">{currentStreak}</span>
            </div>
          </div>

          {/* Profile */}
          <button
            onClick={() => router.push('/profile')}
            className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold shadow-lg shadow-purple-500/20"
          >
            {level}
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-[#111118] transform transition-transform lg:transform-none lg:static lg:w-56 shrink-0 border-r border-white/5
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="h-full flex flex-col p-4 lg:pt-6 overflow-y-auto">
            {/* Mobile close button */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden absolute top-4 right-4 p-2 hover:bg-white/5 rounded-lg"
            >
              <X size={20} />
            </button>

            {/* Categories */}
            <nav className="space-y-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Categories</p>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/20'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="text-xs text-gray-600">{cat.count}</span>
                </button>
              ))}
            </nav>

            {/* Divider */}
            <div className="border-t border-white/5 my-4" />

            {/* Year & Subject Settings */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Settings</p>
              <QuickSettings className="w-full" />
            </div>

            {/* Divider */}
            <div className="border-t border-white/5 my-4" />

            {/* Quick Links */}
            <nav className="space-y-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Quick Links</p>
              <button
                onClick={() => router.push('/codex')}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                <Book size={18} />
                <span>Codex</span>
              </button>
              <button
                onClick={() => router.push('/play')}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                <TrendingUp size={18} />
                <span>Progress</span>
              </button>
              <button
                onClick={() => router.push('/profile')}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                <User size={18} />
                <span>Profile</span>
              </button>
            </nav>

            {/* Stats card (mobile) */}
            <div className="mt-auto pt-4 lg:hidden">
              <div className="bg-white/5 rounded-xl p-4 space-y-3 border border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Level</span>
                  <span className="font-bold">{level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">XP</span>
                  <span className="font-bold text-yellow-500">{totalXP.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Streak</span>
                  <span className="font-bold text-orange-500">{currentStreak} days</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Sidebar overlay (mobile) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6 min-w-0 pb-24 lg:pb-6">
          {/* Quick Resume - ADHD: Remove task initiation friction */}
          {selectedCategory === 'all' && !searchQuery && (
            <QuickResume className="mb-6" />
          )}

          {/* Daily Mission - ADHD: Novelty & daily engagement */}
          {selectedCategory === 'all' && !searchQuery && (
            <DailyMission
              compact
              className="mb-6"
              onStartMission={() => router.push('/games/quick-fire')}
            />
          )}

          {/* Featured Section */}
          {selectedCategory === 'all' && !searchQuery && (
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <TrendingUp className="text-purple-500" size={20} />
                  Featured
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FEATURED_GAMES.map((game) => (
                  <motion.button
                    key={game.id}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push(`/games/${game.id}`)}
                    className="relative group rounded-xl overflow-hidden text-left border border-white/5 bg-[#111118]"
                  >
                    {/* Thumbnail */}
                    <div className="relative">
                      <GameThumbnail game={game} size="large" />

                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                          <Play className="text-white ml-1" size={24} fill="white" />
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {game.isHot && (
                          <span className="px-2 py-1 bg-orange-600 text-xs font-bold rounded">HOT</span>
                        )}
                        {game.isNew && (
                          <span className="px-2 py-1 bg-green-600 text-xs font-bold rounded">NEW</span>
                        )}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <h3 className="font-bold text-base mb-1">{game.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-1 mb-2">{game.description}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Users size={12} />
                          {game.plays}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star size={12} className="text-yellow-500" fill="currentColor" />
                          {game.rating}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </section>
          )}

          {/* Recently Played */}
          {selectedCategory === 'all' && !searchQuery && recentGames.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <Clock className="text-blue-500" size={20} />
                  Continue Playing
                </h2>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
                {recentGames.map((gameId) => {
                  const game = ALL_GAMES.find(g => g.id === gameId);
                  if (!game) return null;
                  return (
                    <motion.button
                      key={game.id}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => router.push(`/games/${game.id}`)}
                      className="shrink-0 w-44 group"
                    >
                      <div className="rounded-xl overflow-hidden border border-white/5 relative">
                        <GameThumbnail game={game} />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                          <Play className="text-white" size={24} fill="white" />
                        </div>
                      </div>
                      <p className="text-sm font-medium mt-2 truncate text-gray-300">{game.title}</p>
                    </motion.button>
                  );
                })}
              </div>
            </section>
          )}

          {/* All Games Grid */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">
                {selectedCategory === 'all' ? 'All Games' : CATEGORIES.find(c => c.id === selectedCategory)?.label}
                <span className="text-gray-600 font-normal ml-2">({filteredGames.length})</span>
              </h2>
            </div>

            {filteredGames.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No games found</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredGames.map((game, index) => (
                  <motion.button
                    key={game.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => router.push(`/games/${game.id}`)}
                    className="text-left group"
                  >
                    {/* Thumbnail */}
                    <div className="rounded-xl overflow-hidden border border-white/5 relative">
                      <GameThumbnail game={game} />

                      {/* Play overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                          <Play className="text-white ml-0.5" size={18} fill="white" />
                        </div>
                      </div>

                      {/* Badges */}
                      {(game.isHot || game.isNew) && (
                        <div className="absolute top-2 left-2">
                          {game.isHot && (
                            <span className="px-1.5 py-0.5 bg-orange-600 text-[10px] font-bold rounded">HOT</span>
                          )}
                          {game.isNew && (
                            <span className="px-1.5 py-0.5 bg-green-600 text-[10px] font-bold rounded">NEW</span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="mt-2">
                      <h3 className="font-medium text-sm truncate text-gray-200">{game.title}</h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Users size={10} />
                          {game.plays}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star size={10} className="text-yellow-500" fill="currentColor" />
                          {game.rating}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4 bg-[#08080c]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Gamepad2 size={16} />
              </div>
              <span className="font-bold">CramGames</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <button className="hover:text-white transition-colors">About</button>
              <button className="hover:text-white transition-colors">Privacy</button>
              <button className="hover:text-white transition-colors">Terms</button>
              <button className="hover:text-white transition-colors">Contact</button>
            </div>
            <p className="text-sm text-gray-600">© 2024 CramGames</p>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#111118]/95 backdrop-blur-sm border-t border-white/5 lg:hidden safe-area-pb">
        <div className="flex items-center justify-around py-2">
          <NavItem icon={Gamepad2} label="Games" active />
          <NavItem icon={Book} label="Codex" onClick={() => router.push('/codex')} />
          <NavItem icon={TrendingUp} label="Progress" onClick={() => router.push('/play')} />
          <NavItem icon={User} label="Profile" onClick={() => router.push('/profile')} />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false, onClick }: {
  icon: any;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 px-4 py-1 ${
        active ? 'text-purple-400' : 'text-gray-500'
      }`}
    >
      <Icon size={20} />
      <span className="text-xs">{label}</span>
    </button>
  );
}
