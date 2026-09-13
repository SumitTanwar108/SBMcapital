"use client";

import { FormEvent, useState } from "react";
import { contactOptions } from "@/lib/config";

export function ContactForm() {
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({ type: "idle", message: "" });
  const [pending, setPending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true); setStatus({ type: "idle", message: "" });
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    data.consent = new FormData(form).get("consent") === "on" ? "true" : "false";
    try {
      const payload = { ...data, consent: new FormData(form).get("consent") === "on" };
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Please check the form and try again.");
      setStatus({ type: "success", message: result.message }); form.reset();
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Please try again later." });
    } finally { setPending(false); }
  }

  return <form className="contact-form" onSubmit={submit} noValidate><label>Full name<input name="name" autoComplete="name" required minLength={2} maxLength={100} /></label><label>Email<input type="email" name="email" autoComplete="email" required maxLength={200} /></label><label>Phone<input name="phone" autoComplete="tel" inputMode="tel" required placeholder="+91" /></label><label>Company <span>(optional)</span><input name="company" autoComplete="organization" /></label><label className="form-wide">What can we help with?<select name="service"><option value="">Select one</option>{contactOptions.map((option) => <option key={option}>{option}</option>)}</select></label><label className="form-wide">Message<textarea name="message" required minLength={10} maxLength={2000} rows={4} /></label><div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div><label className="consent form-wide"><input type="checkbox" name="consent" required /><span>I agree to the handling of my details for this enquiry and have read the <a href="/privacy">privacy note</a>.</span></label><button className="button button-light form-wide" type="submit" disabled={pending}>{pending ? "Sending..." : "Send enquiry"} <span>↗</span></button><p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.message}</p></form>;
}
