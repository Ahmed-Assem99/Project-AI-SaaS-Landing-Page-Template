/**
 * Navbar — sticky top bar with the logo, section links, theme toggle and a CTA button.
 * Mobile first: below the `md` breakpoint the links and CTA move into a hamburger menu.
 */
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks } from '../config/site'
import type { Theme } from '../hooks/useTheme'
import Button from './Button'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    // Translucent + blurred so content scrolls softly beneath it.
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8" aria-label="Main">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-muted transition hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* shrink-0 keeps the controls intact; the nav's gap-4 keeps them off the logo */}
        <div className="flex shrink-0 items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          {/* Desktop CTA. Visibility lives on a wrapper because Button always sets
              `inline-flex`, which would override a `hidden` class passed to it. */}
          <div className="hidden md:block">
            <Button href="#pricing">Get started</Button>
          </div>
          {/* Mobile menu button */}
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full border border-border md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="border-t border-border px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-muted hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#pricing" className="mt-3 w-full">
            Get started
          </Button>
        </div>
      )}
    </header>
  )
}
