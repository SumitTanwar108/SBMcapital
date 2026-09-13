import type { Metadata } from "next";
import "./globals.css";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { metadataBase: new URL(siteConfig.siteUrl), title: { default: `${siteConfig.business.displayName} | ${siteConfig.seo.title}`, template: `%s | ${siteConfig.business.displayName}` }, description: siteConfig.seo.description, keywords: [...siteConfig.seo.keywords], openGraph: { title: siteConfig.business.displayName, description: siteConfig.seo.description, type: "website", url: siteConfig.siteUrl, images: [siteConfig.seo.ogImage] } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><PageShell>{children}</PageShell></body></html>; }
