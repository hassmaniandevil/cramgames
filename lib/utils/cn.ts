// Simple className utility (like clsx/classnames but lighter)
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
