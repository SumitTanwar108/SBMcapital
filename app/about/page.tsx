import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { title: "About", description: `About ${siteConfig.business.displayName}.` };

export default function AboutPage() {
  const { business, content, professionals } = siteConfig;
  const profiledProfessionals = professionals.filter((person) => person.bio.trim());
  return (
    <main className="interior-page">
      <section className="section-wrap interior-hero">
        <p className="eyebrow">About us <span /></p>
        <h1>{business.displayName}<br />is built for<br /><em>long-term trust.</em></h1>
        <p>{content.about.overview}</p>
      </section>
      <section className="section-wrap story-section">
        <div className="story-grid">
          <div>
            <p className="eyebrow">Welcome <span /></p>
            <h2>{content.home.welcomeTitle}</h2>
          </div>
          <div className="story-copy">
            {content.home.welcomeParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="section-wrap principles-section">
        <div className="principles-grid">
          <article className="principle-panel principle-panel-strong">
            <p className="eyebrow">Our mission <span /></p>
            <h2>What we are here to do.</h2>
            <p>{content.about.mission}</p>
          </article>
          <article className="principle-panel">
            <p className="eyebrow">Our vision <span /></p>
            <h2>How we think about the long term.</h2>
            <p>{content.about.vision}</p>
          </article>
        </div>
        <div className="values-shell">
          <div>
            <p className="eyebrow">Core values <span /></p>
            <h2>How we work,<br />day to day.</h2>
          </div>
          <div className="values-grid">
            {content.about.values.map((value) => (
              <article className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
        <article className="pillar-panel">
          <p className="eyebrow">Strategic pillars <span /></p>
          <p>{content.about.strategicPillars}</p>
        </article>
      </section>
      <section className="section-wrap profile-section">
        <div className="about-stamp">Professional<br />stewardship,<br />close at hand.</div>
        <div>
          <p className="eyebrow">Professional profile <span /></p>
          <h2>{professionals.map((person) => person.name).join(" & ")}</h2>
          {profiledProfessionals.map((person) => (
            <article className="profile-entry" key={person.name}>
              {person.bio && <p className="about-copy">{person.bio}</p>}
              <div className="profile-line">
                <span>{person.name} · {person.designation}</span>
                <span>{person.qualifications}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
