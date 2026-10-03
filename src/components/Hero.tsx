/**
 * Hero — the first screen. A two-column layout: on the left a large serif headline (one
 * italic accent word), subheadline, buttons and social proof; on the right a big picture
 * (HeroVisual) with floating cards. Below it, the animated dashboard mockup.
 * Stacks into a single column on mobile. A single subtle glow sits behind the headline.
 */
import { ArrowRight, Star } from 'lucide-react'
import { siteConfig } from '../config/site'
import Button from './Button'
import Container from './Container'
import DashboardMockup from './DashboardMockup'
import HeroVisual from './HeroVisual'

// Initials for the small avatar stack in the social-proof row.
const proofAvatars = ['S', 'D', 'M', 'A']

export default function Hero() {
  // Split the headline so the highlighted word can get the accent treatment.
  const [before, after] = siteConfig.headline.split(siteConfig.highlightedWord)

  return (
    <section className="relative overflow-hidden pb-14 pt-12 sm:pt-20">
      {/* The one glow behind the hero text */}
      <div className="glow absolute left-0 top-0 -z-10 h-96 w-[min(40rem,90vw)] -translate-x-1/4" aria-hidden />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted">
              <span className="size-1.5 rounded-full bg-accent" /> Now with Lumen 2.0
            </span>

            <h1 className="mt-6 text-5xl leading-[0.98] sm:text-7xl">
              {before}
              <em className="text-accent-text">{siteConfig.highlightedWord}</em>
              {after}
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg text-muted sm:text-xl lg:mx-0">{siteConfig.subheadline}</p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button href={siteConfig.primaryCta.href} className="w-full sm:w-auto">
                {siteConfig.primaryCta.label} <ArrowRight className="size-4" />
              </Button>
              <Button href={siteConfig.secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
                {siteConfig.secondaryCta.label}
              </Button>
            </div>

            {/* Social proof: overlapping avatars + rating */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {proofAvatars.map((initial) => (
                  <span
                    key={initial}
                    className="grid size-9 place-items-center rounded-full border-2 border-background bg-accent text-xs font-medium text-on-accent"
                  >
                    {initial}
                  </span>
                ))}
              </div>
              <div className="text-sm text-muted">
                <span className="flex items-center justify-center gap-0.5 text-accent-text lg:justify-start">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                  <span className="ml-1.5 text-foreground">4.9/5</span>
                </span>
                from 2,000+ data teams
              </div>
            </div>
          </div>

          {/* Right: the picture */}
          <HeroVisual />
        </div>

        <DashboardMockup />
      </Container>
    </section>
  )
}
