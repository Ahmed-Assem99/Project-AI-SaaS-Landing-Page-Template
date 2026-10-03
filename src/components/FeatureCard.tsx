/**
 * FeatureCard — one tile in the Features bento grid: a built-in mini visual on top, then
 * an icon, title and short description. `span` (from the config) sets how many grid
 * cells the tile occupies; hovering lifts the card and glows its border.
 */
import type { Feature } from '../config/site'
import FeatureVisual from './FeatureVisual'

export default function FeatureCard({ title, description, icon: Icon, visual, span }: Feature) {
  return (
    <article
      className={`card-interactive flex flex-col gap-6 rounded-3xl border border-border bg-surface p-5 sm:p-6 ${span}`}
    >
      <FeatureVisual kind={visual} />
      <div className="mt-auto">
        <div className="flex items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-text">
            <Icon className="size-4.5" />
          </span>
          <h3 className="text-2xl sm:text-3xl">{title}</h3>
        </div>
        <p className="mt-3 text-base text-muted">{description}</p>
      </div>
    </article>
  )
}
