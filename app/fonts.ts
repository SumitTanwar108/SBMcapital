import { Cormorant_Garamond, IBM_Plex_Mono, Manrope, Prata } from "next/font/google";

export const ibmPlexSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans"
});

export const ibmPlexSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif"
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono"
});

export const displaySerif = Prata({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-display"
});
