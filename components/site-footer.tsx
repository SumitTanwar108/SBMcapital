import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function SiteFooter() {
  const { business } = siteConfig;
  return <footer className="site-footer"><div className="section-wrap footer-grid"><div className="footer-brand"><Link className="wordmark wordmark-footer" href="/"><span className="wordmark-emblem wordmark-emblem-footer" aria-hidden="true" /><span className="wordmark-copy"><span className="wordmark-name wordmark-name-footer">{business.displayName}</span><span className="wordmark-caption wordmark-caption-footer">Clarity, with care.</span></span></Link></div><div className="footer-column"><p className="footer-label">Find us</p><p className="footer-detail">{business.address}<br />{business.city}, {business.state}</p></div><div className="footer-column"><p className="footer-label">Contact</p><div className="footer-detail footer-detail-links"><a href={`mailto:${business.email}`}>{business.email}</a>{!business.phone.startsWith("TODO") && <><br /><a href={`tel:${business.phone}`}>{business.phone}</a></>}</div></div></div><div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} {business.displayName}</span><span><Link href="/privacy">Privacy</Link> · <Link href="/disclaimer">Disclaimer</Link> · Owner review required</span></div></footer>;
}
