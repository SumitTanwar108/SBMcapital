import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms", description: "Draft terms requiring owner and legal review." };
export default function TermsPage() { return <main className="section-wrap legal-page"><p className="eyebrow">Draft for review <span /></p><h1>Terms of <em>use.</em></h1><p>This draft is not final legal advice. Replace it with reviewed terms covering website use, content accuracy, intellectual property, third-party links, enquiry handling, and limitations before launch.</p></main>; }
