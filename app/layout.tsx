import type { Metadata } from "next";
import "./globals.css";
import { ibmPlexMono, ibmPlexSans, ibmPlexSerif } from "./fonts";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { metadataBase: new URL(siteConfig.siteUrl), title: { default: `${siteConfig.business.displayName} | ${siteConfig.seo.title}`, template: `%s | ${siteConfig.business.displayName}` }, description: siteConfig.seo.description, keywords: [...siteConfig.seo.keywords], openGraph: { title: siteConfig.business.displayName, description: siteConfig.seo.description, type: "website", url: siteConfig.siteUrl } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable} ${ibmPlexMono.variable}`}><body><PageShell>{children}</PageShell></body></html>; }
