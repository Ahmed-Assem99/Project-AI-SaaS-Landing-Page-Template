/**
 * PricingCard — a single pricing tier. The tier flagged `popular` is highlighted with an
 * accent border, glow and "Most popular" badge, and gets the accent-filled button.
 */
import { Check } from 'lucide-react'
import type { PricingTier } from '../config/site'
import Button from './Button'

export default function PricingCard({ name, price, period, description, features, cta, popular }: PricingTier) {
  return (
    <article
      className={`card-interactive relative flex flex-col rounded-3xl border p-6 sm:p-8 ${
        popular
          ? 'border-accent bg-surface-strong shadow-xl shadow-accent/15 md:-translate-y-3'
          : 'border-border bg-surface'
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-on-accent">
          Most popular
        </span>
      )}
      <h3 className="text-3xl">{name}</h3>
      <p className="mt-2 text-base text-muted">{description}</p>
      <p className="mt-6 flex items-baseline gap-1">
        <span className="font-serif text-6xl leading-none tracking-tight">{price}</span>
        <span className="text-sm text-muted">{period}</span>
      </p>

      <ul className="mt-6 flex-1 space-y-3 text-base">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check className="mt-1 size-4 shrink-0 text-accent-text" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button href="#" variant={popular ? 'primary' : 'secondary'} className="mt-8 w-full">
        {cta}
      </Button>
    </article>
  )
}
