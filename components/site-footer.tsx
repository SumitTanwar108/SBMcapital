import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function SiteFooter() {
  const { business } = siteConfig;
  return <footer className="site-footer"><div className="section-wrap footer-grid"><div><Link className="wordmark wordmark-footer" href="/"><span>{business.displayName}</span></Link><p>Financial clarity, with care.</p></div><div><p className="footer-label">Find us</p><p>{business.address}<br />{business.city}, {business.state}</p></div><div><p className="footer-label">Contact</p><a href={`mailto:${business.email}`}>{business.email}</a>{!business.phone.startsWith("TODO") && <><br /><a href={`tel:${business.phone}`}>{business.phone}</a></>}</div></div><div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} {business.displayName}</span><span><Link href="/privacy">Privacy</Link> · <Link href="/disclaimer">Disclaimer</Link> · Owner review required</span></div></footer>;
}
