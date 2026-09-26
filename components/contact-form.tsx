"use client";

import { FormEvent, useState } from "react";
import { contactOptions } from "@/lib/config";
import { contactSchema } from "@/lib/validation";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("pending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
      website: formData.get("website")
    };

    const validation = contactSchema.safeParse(payload);
    if (!validation.success) {
      const firstIssue = validation.error.issues[0];
      const isHoneypot = firstIssue?.path[0] === "website";
      setStatus("error");
      setMessage(isHoneypot ? "Please check the form and try again." : firstIssue?.message ?? "Please check the form and try again.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data)
      });

      const responseData = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(responseData.message ?? "Thank you! We've received your enquiry and will get back to you soon.");
        form.reset();
        setCharCount(0);
      } else {
        setStatus("error");
        setMessage(responseData.error ?? "Unable to submit form. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setMessage("Unable to submit form. Please try again later.");
    }
  }

  function handleMessageChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCharCount(e.target.value.length);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">
        Full name <span aria-label="required">*</span>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          placeholder="Your full name"
        />
      </label>

      <label htmlFor="email">
        Email <span aria-label="required">*</span>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          placeholder="your@email.com"
        />
      </label>

      <label htmlFor="phone">
        Phone <span aria-label="required">*</span>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required
          placeholder="+91 98765 43210"
          pattern="^(?:\+91[\s-]?)?[6-9]\d{9}$"
          title="Enter a valid Indian phone number (10 digits starting with 6-9)"
        />
      </label>

      <label htmlFor="company">
        Company <span>(optional)</span>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={160}
          placeholder="Company name (if applicable)"
        />
      </label>

      <label htmlFor="service" className="form-wide">
        What can we help with? <span>(optional)</span>
        <select id="service" name="service">
          <option value="">Select a service</option>
          {contactOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="message" className="form-wide">
        Message <span aria-label="required">*</span>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={4}
          placeholder="Tell us what you need (minimum 10 characters)"
          onChange={handleMessageChange}
        />
        <span style={{ fontSize: "12px", color: "rgba(242,244,236,.5)", marginTop: "4px" }}>
          {charCount} / 2000 characters
        </span>
      </label>

      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
        </label>
      </div>

      <label htmlFor="consent" className="consent form-wide">
        <input
          id="consent"
          type="checkbox"
          name="consent"
          required
        />
        <span>
          I agree to the handling of my details for this enquiry and have read
          the <a href="/privacy">privacy note</a>.
        </span>
      </label>

      <button
        className="button button-light form-wide"
        type="submit"
        disabled={status === "pending"}
        aria-busy={status === "pending"}
      >
        {status === "pending" ? "Sending..." : "Send enquiry"} <span>↗</span>
      </button>

      {message && (
        <p
          className={`form-status ${status === "success" ? "success" : "error"}`}
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {message}
        </p>
      )}
    </form>
  );
}
