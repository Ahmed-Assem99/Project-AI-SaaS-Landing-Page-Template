/**
 * LandingPage — the single page of the site. It owns the theme state and simply
 * composes the section components in order, top to bottom.
 */
import CallToAction from '../components/CallToAction'
import FAQ from '../components/FAQ'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import LogoStrip from '../components/LogoStrip'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import { useTheme } from '../hooks/useTheme'

export default function LandingPage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div id="top">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <LogoStrip />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
