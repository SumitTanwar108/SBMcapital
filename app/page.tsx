import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ServiceAccordion } from "@/components/service-accordion";

const SEAL_TICKS = Array.from({ length: 60 }, (_, i) => {
  const angle = (i * 6 * Math.PI) / 180;
  const long = i % 5 === 0;
  const rOuter = long ? 133 : 129;
  const rInner = long ? 115 : 119;
  return {
    x1: 150 + rOuter * Math.cos(angle),
    y1: 150 + rOuter * Math.sin(angle),
    x2: 150 + rInner * Math.cos(angle),
    y2: 150 + rInner * Math.sin(angle),
    long
  };
});

export default function HomePage() {
  const { business, services, professionals } = siteConfig;
  return (
    <main>
      <section className="hero section-wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Business consultants · {business.city} <span /></p>
            <h1>Building Businesses,<br />Building Partnerships.<br />Growing <em>Together.</em></h1>
            <p className="hero-intro">{business.description}</p>
            <Link className="button button-dark" href="/contact">Talk to us <span>↗</span></Link>
          </div>
          <div className="hero-seal" aria-hidden="true">
            <svg viewBox="0 0 300 300" role="presentation">
              <circle cx="150" cy="150" r="136" className="seal-ring-outer" />
              <circle cx="150" cy="150" r="112" className="seal-ring-inner" />
              {SEAL_TICKS.map((tick, index) => (
                <line
                  key={index}
                  x1={tick.x1} y1={tick.y1} x2={tick.x2} y2={tick.y2}
                  className={tick.long ? "seal-tick seal-tick-long" : "seal-tick"}
                />
              ))}
            </svg>
            <div className="seal-text">
              <span className="seal-name">{business.displayName}</span>
              <span className="seal-divider" />
              <span className="seal-role">Business Consultants</span>
              <span className="seal-city">{business.city}</span>
            </div>
          </div>
        </div>
        <div className="hero-line" />
        <p className="hero-footnote">Serving {business.city}, {business.state}</p>
      </section>

      <section className="trust-band">
        <div className="section-wrap trust-inner">
          <span>Built for the work behind the work</span>
          <span>Compliance</span>
          <span>Accounts</span>
          <span>Advisory</span>
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
          <div className="about-stamp">A considered<br />way of working.</div>
          <div>
            <p className="eyebrow">The practice <span /></p>
            <h2>Room for the<br />details that <em>matter.</em></h2>
            <p className="about-copy">{professionals.map((person) => person.name).join(" and ")} lead the practice day to day, working directly across tax, GST, accounts, and the wider services <strong>{business.displayName}</strong> offers.</p>
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
