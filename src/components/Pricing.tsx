/**
 * Pricing — three pricing tiers; the middle one is highlighted as most popular.
 * Stacked on mobile, three columns from `md` up.
 */
import { pricingTiers } from '../config/site'
import Container from './Container'
import PricingCard from './PricingCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-14 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple pricing that scales with you"
            description="Start free. Upgrade when your team is ready."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
