'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glass' | 'gradient';
  glow?: 'none' | 'purple' | 'green' | 'blue' | 'orange' | 'pink';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      glow = 'none',
      padding = 'md',
      interactive = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-2xl border backdrop-blur-sm';

    const variants = {
      default: 'bg-galaxy-dark/80 border-purple-500/20',
      elevated:
        'bg-galaxy-dark/90 border-purple-500/30 shadow-xl shadow-black/30',
      glass: 'bg-white/5 border-white/10',
      gradient:
        'bg-gradient-to-br from-purple-900/40 to-pink-900/20 border-purple-500/30',
    };

    const glows = {
      none: '',
      purple: 'shadow-lg shadow-purple-500/20',
      green: 'shadow-lg shadow-green-500/20',
      blue: 'shadow-lg shadow-blue-500/20',
      orange: 'shadow-lg shadow-orange-500/20',
      pink: 'shadow-lg shadow-pink-500/20',
    };

    const paddings = {
      none: '',
      sm: 'p-3',
      md: 'p-5',
      lg: 'p-8',
    };

    const interactiveStyles = interactive
      ? 'cursor-pointer hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-200 active:scale-[0.98]'
      : '';

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          glows[glow],
          paddings[padding],
          interactiveStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };

// Animated card wrapper
export const AnimatedCard = motion(Card);

// Card header component
export function CardHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  );
}

// Card title component
export function CardTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'text-xl font-bold text-white tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

// Card description
export function CardDescription({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-sm text-white/60 mt-1', className)} {...props}>
      {children}
    </p>
  );
}

// Card content
export function CardContent({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
}

// Card footer
export function CardFooter({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-white/10', className)} {...props}>
      {children}
    </div>
  );
}
