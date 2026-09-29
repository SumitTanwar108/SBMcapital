import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function ContactTeaser() {
  const { phone } = siteConfig.business;
  const telephone = phone.replace(/[\s-]/g, "");

  return (
    <section className="contact-teaser" aria-labelledby="contact-teaser-heading">
      <div className="section-wrap teaser-inner">
        <div className="teaser-copy">
          <p className="eyebrow eyebrow-light">Start here <span /></p>
          <h2 id="contact-teaser-heading">Bring the question.<br /><em>We&apos;ll listen.</em></h2>
          <a className="teaser-phone" href={`tel:${telephone}`}>
            Mobile <span>{phone}</span>
          </a>
        </div>
        <Link className="button button-light" href="/contact">Send an enquiry <span>↗</span></Link>
      </div>
    </section>
  );
}