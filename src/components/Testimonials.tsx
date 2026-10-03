/**
 * Testimonials — customer quotes with real visual presence: one large featured quote
 * (oversized serif text, accent quote mark, star rating, headline metric) next to two
 * compact cards. Desktop uses a 5-column grid (3 + 2 stacked) so there are no gaps;
 * everything stacks on mobile.
 */
import { Star } from 'lucide-react'
import { testimonials } from '../config/site'
import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  const [featured, ...others] = testimonials

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="Loved by teams who move fast" />
          <div className="mt-10 grid gap-4 lg:grid-cols-5 lg:grid-rows-2">
            {/* Featured quote */}
            <figure className="card-interactive relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface-strong p-6 sm:p-10 lg:col-span-3 lg:row-span-2">
              {/* Oversized decorative quote mark */}
              <span className="pointer-events-none absolute -top-4 right-6 font-serif text-[10rem] leading-none text-accent/20" aria-hidden>
                ”
              </span>
              <div className="relative">
                <div className="flex gap-1 text-accent-text" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="size-5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  “{featured.quote}”
                </blockquote>
              </div>
              <figcaption className="relative mt-10 flex flex-wrap items-center justify-between gap-4">
                <span className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-full bg-accent font-medium text-on-accent">
                    {featured.name[0]}
                  </span>
                  <span>
                    <span className="block font-medium">{featured.name}</span>
                    <span className="block text-sm text-muted">{featured.role}</span>
                  </span>
                </span>
                {/* Headline result */}
                <span className="rounded-2xl border border-accent/40 bg-accent/10 px-4 py-2 text-right">
                  <span className="block font-serif text-3xl leading-none text-accent-text">{featured.metric}</span>
                  <span className="block text-xs text-muted">{featured.metricLabel}</span>
                </span>
              </figcaption>
            </figure>

            {/* Compact quotes */}
            {others.map((item) => (
              <figure
                key={item.name}
                className="card-interactive flex flex-col justify-between gap-6 rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:col-span-2"
              >
                <blockquote className="font-serif text-2xl leading-snug">“{item.quote}”</blockquote>
                <figcaption className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-accent text-sm font-medium text-on-accent">
                      {item.name[0]}
                    </span>
                    <span>
                      <span className="block text-sm font-medium">{item.name}</span>
                      <span className="block text-xs text-muted">{item.role}</span>
                    </span>
                  </span>
                  <span className="text-right">
                    <span className="block font-serif text-2xl leading-none text-accent-text">{item.metric}</span>
                    <span className="block text-[11px] text-muted">{item.metricLabel}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
