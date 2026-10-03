/**
 * Container — centers page content and applies consistent horizontal padding.
 * Wrap the inside of every section with it so widths stay aligned across the page.
 */
import type { ReactNode } from 'react'

export default function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}
