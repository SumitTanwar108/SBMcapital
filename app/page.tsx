import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ServiceAccordion } from "@/components/service-accordion";

export default function HomePage() {
  const { business, content, services, professionals } = siteConfig;
  return (
    <main>
      <section className="hero section-wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Business consultants · {business.city} <span /></p>
            <h1>Building Businesses,<br />Building Partnerships.<br />Growing <em>Together.</em></h1>
            <p className="hero-intro">{content.home.heroIntro}</p>
            <p className="hero-support">A multidisciplinary advisory practice for businesses that need careful judgement, clean execution, and a dependable partner through growth and compliance.</p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/contact">Talk to us <span>↗</span></Link>
              <Link className="text-link text-link-dark" href="/about">Read our story <span>↗</span></Link>
            </div>
            <div className="hero-focus" aria-label="Key focus areas">
              {content.home.focusAreas.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="hero-copy-accent" aria-hidden="true">
              <span className="hero-copy-accent-line" />
              <div className="hero-copy-accent-items">
                <span>{business.city} based</span>
                <span className="hero-copy-accent-separator">•</span>
                <span>Financial</span>
                <span className="hero-copy-accent-separator">•</span>
                <span>Legal</span>
                <span className="hero-copy-accent-separator">•</span>
                <span>Strategic</span>
              </div>
            </div>
          </div>
          <div className="hero-composition" aria-hidden="true">
            <div className="hero-composition-grid" />
            <div className="hero-orbit hero-orbit-outer" />
            <div className="hero-orbit hero-orbit-inner" />
            <div className="hero-orbit hero-orbit-core" />
            <div className="hero-beam hero-beam-one" />
            <div className="hero-beam hero-beam-two" />
            <div className="hero-panel hero-panel-primary">
              <span className="hero-panel-kicker">How we support growth</span>
              <strong>Governance that stays readable.</strong>
              <p>Advisory, registrations, taxation, and operational support arranged as one connected business picture rather than disconnected tasks.</p>
            </div>
            <div className="hero-panel hero-panel-note hero-panel-note-a">
              <span className="hero-metric-label">Regulatory path</span>
              <p>Licences, certifications, filings, and procedural guidance mapped into a clearer route.</p>
            </div>
            <div className="hero-panel hero-panel-note hero-panel-note-b">
              <span className="hero-metric-label">Financial grip</span>
              <p>Accounts, controls, and tax positions designed to hold up under scrutiny.</p>
            </div>
            <div className="hero-panel hero-panel-note hero-panel-note-c">
              <span className="hero-metric-label">Strategic view</span>
              <p>Structures, transactions, and growth decisions considered with the downstream impact in view.</p>
            </div>
            <div className="hero-composition-signature">
              <span className="hero-signature-name">{business.displayName}</span>
              <span className="hero-signature-separator" aria-hidden="true">•</span>
              <span>{business.city}</span>
              <span className="hero-signature-separator" aria-hidden="true">•</span>
              <span>{business.tagline}</span>
            </div>
          </div>
        </div>
        <div className="hero-line" />
        <p className="hero-footnote">Serving {business.city}, {business.state}</p>
      </section>

      <section className="trust-band">
        <div className="section-wrap trust-inner">
          <span>Built for the work behind the work</span>
          <span>Governance</span>
          <span>Accounts</span>
          <span>Advisory</span>
        </div>
      </section>

      <section className="section-wrap welcome-section">
        <div className="welcome-shell">
          <div className="welcome-lead">
            <p className="eyebrow">A welcome note <span /></p>
            <h2>{content.home.welcomeTitle}</h2>
          </div>
          <div className="welcome-copy">
            {content.home.welcomeParagraphs.slice(0, 3).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="welcome-signoff">{content.home.welcomeParagraphs[3]}</p>
          </div>
        </div>
      </section>

      <section className="section-wrap services-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What we can help with <span /></p>
          <h2>Good advice starts<br />with good <em>context.</em></h2>
        </div>
        <ServiceAccordion services={services} headingLevel="h3" />
      </section>

      <section className="approach-section" id="approach">
        <div className="section-wrap approach-grid">
          <div>
            <p className="eyebrow eyebrow-light">Our approach <span /></p>
            <h2>Useful before<br />it is <em>impressive.</em></h2>
          </div>
          <div className="approach-copy">
            <p>Business decisions should be easier to make, not buried under another layer of fog. We start with the facts, explain the options, and keep the work proportional to what you actually need.</p>
            <p className="small-copy">No exaggerated promises. No jargon for its own sake. Just a clear next step.</p>
            <Link className="text-link" href="/contact">Bring us a question <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section-wrap about-section">
        <div className="about-grid">
          <div className="about-stamp">Trust, rigour,<br />and long-term<br />partnership.</div>
          <div>
            <p className="eyebrow">The practice <span /></p>
            <h2>Built to support<br />complex decisions<br />with <em>clarity.</em></h2>
            <p className="about-copy">{siteConfig.content.about.overview}</p>
            <p className="about-copy about-copy-compact">{professionals.map((person) => person.name).join(" and ")} lead the practice day to day, working directly across tax, GST, accounts, and the wider services <strong>{business.displayName}</strong> offers.</p>
            <Link className="text-link text-link-dark" href="/about">Meet the practice <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="contact-teaser">
        <div className="section-wrap teaser-inner">
          <p className="eyebrow eyebrow-light">Start here <span /></p>
          <h2>Bring the question.<br /><em>We'll listen.</em></h2>
          <Link className="button button-light" href="/contact">Send an enquiry <span>↗</span></Link>
        </div>
      </section>
    </main>
  );
}
