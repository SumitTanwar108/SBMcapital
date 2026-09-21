import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  const { business, services, professionals } = siteConfig;
  return (
    <main>
      <section className="hero section-wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Chartered accountants · {business.city} <span /></p>
            <h1>Make the books<br />balance. Then make<br />the <em>decision.</em></h1>
            <p className="hero-intro">{business.description}</p>
            <Link className="button button-dark" href="/contact">Talk to us <span>↗</span></Link>
          </div>
          <div className="voucher" aria-hidden="true">
            <p className="voucher-head">Voucher · General ledger</p>
            <div className="voucher-columns"><span>Particulars</span><span>Dr</span><span>Cr</span></div>
            <div className="voucher-row"><span>Guesswork</span><span className="voucher-mark voucher-debit">✕</span><span /></div>
            <div className="voucher-row"><span>Missed filings</span><span className="voucher-mark voucher-debit">✕</span><span /></div>
            <div className="voucher-row"><span>Clear accounts</span><span /><span className="voucher-mark voucher-credit">✓</span></div>
            <div className="voucher-row"><span>Straight answers</span><span /><span className="voucher-mark voucher-credit">✓</span></div>
            <div className="voucher-total"><span>Balance c/f</span><span className="voucher-result">Clarity</span></div>
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
        <div className="services-head" aria-hidden="true"><span>Code</span><span>Particulars</span></div>
        <div className="services-grid">
          {services.map((service) => (
            <details className="service-card" key={service.code}>
              <summary className="service-summary">
                <span className="service-code">{service.code}</span>
                <h3 className="service-title">{service.title}</h3>
                <span className="service-arrow" aria-hidden="true">⌄</span>
              </summary>
              <p className="service-text">{service.text}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="section-wrap approach-grid">
          <div>
            <p className="eyebrow eyebrow-light">Our approach <span /></p>
            <h2>Useful before<br />it is <em>impressive.</em></h2>
          </div>
          <div className="approach-copy">
            <p>Financial work should make decisions easier, not add another layer of fog. We start with the facts, explain the options, and keep the work proportional to what you actually need.</p>
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
