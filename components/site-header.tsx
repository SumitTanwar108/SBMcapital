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
        <span className="wordmark-emblem" aria-hidden="true" />
        <span className="wordmark-copy">
          <span className="wordmark-name">{siteConfig.business.displayName}</span>
          <span className="wordmark-caption">Business consultants</span>
        </span>
      </Link>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>Menu</button>
      <nav className={`site-nav${open ? " is-open" : ""}`} id="primary-navigation" aria-label="Primary navigation">
        <Link className="nav-link" href="/" onClick={close}>Home</Link><Link className="nav-link" href="/#services" onClick={close}>Services</Link><Link className="nav-link" href="/#approach" onClick={close}>Approach</Link><Link className="nav-link" href="/about" onClick={close}>About Us</Link><Link className="nav-cta" href="/contact" onClick={close}>Start a conversation <span>↗</span></Link>
      </nav>
    </header>
  );
}
