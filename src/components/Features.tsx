/**
 * Features — bento grid of capability tiles, each with a small built-in visual.
 * 1 column on mobile, 2 on tablet, 3 on desktop. The tile spans in the config are chosen
 * so every row is completely filled at every breakpoint (no empty holes).
 */
import { features } from '../config/site'
import Container from './Container'
import FeatureCard from './FeatureCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-14 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Features"
            title="Everything you need to understand your business"
            description="Powerful analytics, wrapped in an interface anyone on your team can use."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
