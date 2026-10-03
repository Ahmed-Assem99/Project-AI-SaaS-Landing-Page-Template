/**
 * usePrefersReducedMotion — true when the user's OS asks for reduced motion.
 * JS-driven animations (typing demo, live dashboard tile) check this and render a static
 * state instead; CSS animations are disabled separately in `index.css`.
 */
import { useSyncExternalStore } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  )
}
