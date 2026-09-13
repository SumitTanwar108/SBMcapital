import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/about", "/services", "/contact", "/privacy", "/terms", "/disclaimer"].map((path) => ({ url: `${siteConfig.siteUrl}${path}`, lastModified: new Date() })); }
