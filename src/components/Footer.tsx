/**
 * Footer — brand blurb, grouped link columns, copyright and social icons.
 * Link groups come from `footerLinks` in the site config.
 */
import { footerLinks, siteConfig } from '../config/site'
import Container from './Container'
import Logo from './Logo'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              The AI workspace that turns scattered data into decisions.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="font-sans text-sm font-medium tracking-normal">{group.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted transition hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.name} {siteConfig.tagline}. All rights reserved.
          </p>
          <SocialIcons />
        </div>
      </Container>
    </footer>
  )
}
