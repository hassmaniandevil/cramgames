/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core brand colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Galaxy theme colors
        galaxy: {
          dark: '#0f0f23',
          deeper: '#0a0a1a',
          purple: '#7c3aed',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          pink: '#ec4899',
        },
        // Subject colors
        maths: {
          primary: '#8b5cf6',
          secondary: '#a78bfa',
          glow: '#c4b5fd',
        },
        biology: {
          primary: '#22c55e',
          secondary: '#4ade80',
          glow: '#86efac',
        },
        chemistry: {
          primary: '#f97316',
          secondary: '#fb923c',
          glow: '#fdba74',
        },
        physics: {
          primary: '#3b82f6',
          secondary: '#60a5fa',
          glow: '#93c5fd',
        },
        english: {
          primary: '#ec4899',
          secondary: '#f472b6',
          glow: '#f9a8d4',
        },
        // Feedback colors
        correct: {
          bg: '#052e16',
          border: '#22c55e',
          text: '#86efac',
        },
        wrong: {
          bg: '#450a0a',
          border: '#ef4444',
          text: '#fca5a5',
        },
        // Streak flame colors
        flame: {
          cold: '#64748b',
          warm: '#f97316',
          hot: '#ef4444',
          blazing: '#eab308',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'bounce-in': 'bounce-in 0.6s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'flame-flicker': 'flame-flicker 0.5s ease-in-out infinite',
        'combo-pop': 'combo-pop 0.3s ease-out',
        'confetti': 'confetti 1s ease-out forwards',
        'star-burst': 'star-burst 0.6s ease-out forwards',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'flame-flicker': {
          '0%, 100%': { transform: 'scaleY(1) scaleX(1)' },
          '25%': { transform: 'scaleY(1.1) scaleX(0.95)' },
          '50%': { transform: 'scaleY(0.95) scaleX(1.05)' },
          '75%': { transform: 'scaleY(1.05) scaleX(0.98)' },
        },
        'combo-pop': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
        'confetti': {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(-200px) rotate(720deg)', opacity: '0' },
        },
        'star-burst': {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'scale(1.5) rotate(180deg)', opacity: '0.8' },
          '100%': { transform: 'scale(2) rotate(360deg)', opacity: '0' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(139, 92, 246, 0.3)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.4)',
        'glow-lg': '0 0 30px rgba(139, 92, 246, 0.5)',
        'glow-correct': '0 0 20px rgba(34, 197, 94, 0.4)',
        'glow-wrong': '0 0 20px rgba(239, 68, 68, 0.4)',
        'glow-flame': '0 0 20px rgba(249, 115, 22, 0.5)',
      },
    },
  },
  plugins: [],
};
