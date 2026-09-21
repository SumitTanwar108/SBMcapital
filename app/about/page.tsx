import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { title: "About", description: `About ${siteConfig.business.displayName}.` };

export default function AboutPage() {
  const { business, professionals } = siteConfig;
  return (
    <main className="interior-page">
      <section className="section-wrap interior-hero">
        <p className="eyebrow">The practice <span /></p>
        <h1>Room for the<br />details that <em>matter.</em></h1>
        <p>{business.description}</p>
      </section>
      <section className="section-wrap profile-section">
        <div className="about-stamp">A considered<br />way of working.</div>
        <div>
          <p className="eyebrow">Professional profile <span /></p>
          <h2>{professionals.map((person) => person.name).join(" & ")}</h2>
          {professionals.map((person) => (
            <div className="profile-entry" key={person.name}>
              {person.bio && <p className="about-copy">{person.bio}</p>}
              <div className="profile-line">
                <span>{person.name} · {person.designation}</span>
                <span>{person.qualifications}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
