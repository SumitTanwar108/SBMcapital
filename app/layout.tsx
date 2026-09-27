import type { Metadata } from "next";
import "./globals.css";
import { displaySerif, ibmPlexMono, ibmPlexSans, ibmPlexSerif } from "./fonts";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { metadataBase: new URL(siteConfig.siteUrl), title: { default: `${siteConfig.business.displayName} | ${siteConfig.seo.title}`, template: `%s | ${siteConfig.business.displayName}` }, description: siteConfig.seo.description, keywords: [...siteConfig.seo.keywords], openGraph: { title: siteConfig.business.displayName, description: siteConfig.seo.description, type: "website", url: siteConfig.siteUrl, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.business.displayName }] }, twitter: { card: "summary_large_image", title: siteConfig.business.displayName, description: siteConfig.seo.description, images: ["/opengraph-image"] } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable} ${ibmPlexMono.variable} ${displaySerif.variable}`}><body className="site-body"><PageShell>{children}</PageShell></body></html>; }
