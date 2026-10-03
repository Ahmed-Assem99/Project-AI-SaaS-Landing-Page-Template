/**
 * CallToAction — final full-width accent band that nudges visitors to sign up.
 */
import Container from './Container'
import Reveal from './Reveal'

export default function CallToAction() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-accent px-6 py-14 text-center text-on-accent sm:px-12 sm:py-20">
            {/* Decorative soft shapes */}
            <div className="absolute -right-20 -top-20 size-72 rounded-full bg-white/30 blur-3xl" aria-hidden />
            <div className="absolute -bottom-24 -left-16 size-64 rounded-full bg-black/10 blur-3xl" aria-hidden />
            <h2 className="relative mx-auto max-w-3xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Ready to see your data <em>clearly</em>?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-lg text-on-accent/80 sm:text-xl">
              Join thousands of teams making faster, smarter decisions with Lumen.
            </p>
            <a
              href="#pricing"
              className="relative mt-8 inline-flex rounded-full bg-black px-7 py-3.5 text-base font-medium text-white transition hover:bg-black/80"
            >
              Start for free
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
