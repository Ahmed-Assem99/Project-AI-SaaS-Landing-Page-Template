/**
 * useTheme — manages the dark/light theme.
 *
 * Reads the theme that `index.html` already applied to <html data-theme="...">,
 * exposes a toggle, and persists the choice in localStorage. The CSS variables in
 * `src/index.css` react to the `data-theme` attribute.
 */
import { useCallback, useState } from 'react'

export type Theme = 'dark' | 'light'

function readInitialTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme)

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      try {
        localStorage.setItem('theme', next)
      } catch {
        // Storage can be unavailable (private mode); the toggle still works for this session.
      }
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
