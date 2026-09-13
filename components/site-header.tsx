"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" onClick={close} aria-label={`${siteConfig.business.displayName} home`}>
        <span className="wordmark-mark">+</span><span>{siteConfig.business.displayName}</span>
      </Link>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>Menu</button>
      <nav className={`site-nav${open ? " is-open" : ""}`} id="primary-navigation" aria-label="Primary navigation">
        <Link href="/#services" onClick={close}>Services</Link><Link href="/#approach" onClick={close}>Approach</Link><Link href="/about" onClick={close}>About</Link><Link className="nav-cta" href="/contact" onClick={close}>Start a conversation <span>↗</span></Link>
      </nav>
    </header>
  );
}
