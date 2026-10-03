/**
 * ThemeToggle — round icon button that switches between dark and light mode.
 * Shows a sun in dark mode (click for light) and a moon in light mode (click for dark).
 */
import { Moon, Sun } from 'lucide-react'
import type { Theme } from '../hooks/useTheme'

export default function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid size-9 place-items-center rounded-full border border-border bg-surface text-muted transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}
