/**
 * Button — a link styled as a button, in three variants:
 *  - primary:   brand gradient (main call to action)
 *  - secondary: bordered, subtle surface
 *  - ghost:     text-only
 * Rendered as <a> because every button on this page navigates (anchor or external link).
 */
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-accent text-on-accent shadow-lg shadow-accent/25 hover:brightness-110',
  secondary: 'border border-border bg-surface text-foreground hover:bg-surface-strong',
  ghost: 'text-muted hover:text-foreground',
}

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
}

export default function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
