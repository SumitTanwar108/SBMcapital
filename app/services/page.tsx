import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { ServiceAccordion } from "@/components/service-accordion";

export const metadata: Metadata = { title: "Services", description: "Business consultancy services across tax, compliance, legal, risk, and advisory." };

export default function ServicesPage() {
	return <main className="interior-page"><section className="section-wrap interior-hero"><p className="eyebrow">What we can help with <span /></p><h1>Good advice starts<br />with good <em>context.</em></h1><p>Service information remains subject to owner review. Replace each description with the firm's approved scope before launch.</p></section><section className="section-wrap services-section services-page-grid"><ServiceAccordion services={siteConfig.services} headingLevel="h2" /></section></main>;
}
