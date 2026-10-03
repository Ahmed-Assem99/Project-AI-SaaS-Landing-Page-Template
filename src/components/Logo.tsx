/**
 * Logo — the brand mark (gradient glyph) plus wordmark. Used in the Navbar and Footer.
 */
import { siteConfig } from '../config/site'

export default function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 tracking-tight">
      {/* Gradient rounded-square mark */}
      <span className="grid size-8 place-items-center rounded-xl bg-accent text-sm text-on-accent">
        L
      </span>
      <span className="text-lg">
        {siteConfig.name}
        <span className="text-muted"> {siteConfig.tagline}</span>
      </span>
    </a>
  )
}
