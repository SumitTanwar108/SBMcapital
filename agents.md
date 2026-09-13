# CA Consulting Website MVP

## Current repository state

This is an empty repository. There is currently no application code, package manifest, lockfile, test suite, or documentation. When implementing the MVP, scaffold the project before adding features and keep all business facts centralized in configuration.

## Product boundary

Build an informational, lead-generation website for an Indian CA consulting business. The MVP must not include a client portal, tax filing workflow, document uploads, payments, stored submissions, or an automated legal/tax advice engine.

Do not invent the firm's name, address, phone, email, professionals, qualifications, registrations, clients, awards, testimonials, rankings, statistics, or service claims. Keep unknown values as clearly marked placeholders and search for unresolved `TODO`, angle-bracket placeholders, `example.com`, demo contact data, and fake claims before reporting completion.

## Technical baseline

- Use Next.js App Router, TypeScript strict mode, and Tailwind CSS unless a later repository decision establishes a better local convention.
- Keep dependencies minimal. Use Zod for shared request validation and a transactional email provider behind server-only environment variables.
- Prefer reusable components for navigation, footer, sections, buttons, service cards, and form fields.
- Keep business and contact configuration centralized in `lib/config.ts` or the equivalent local module.
- Do not store enquiries in local files or expose provider credentials in browser code.

## Required routes and surfaces

Implement `/`, `/about`, `/services`, `/contact`, `/privacy`, `/terms`, and `/disclaimer`, plus a server-side contact endpoint such as `/api/contact`.

The site should provide factual service information, a professional profile, contact details, a responsive enquiry form, and clear draft/legal-review status for privacy, terms, and disclaimer pages. Add page metadata, canonical URLs from `NEXT_PUBLIC_SITE_URL`, Open Graph metadata, `robots.txt`, and `sitemap.xml` without publishing unverified structured-data claims.

## Contact form and privacy rules

Required fields: full name, email, Indian-format phone number, message, and consent. Company name and service of interest may be optional. Validate on client and server, reject malformed or oversized requests, use a honeypot or CAPTCHA/rate limiting, and return generic success/error messages.

Never accept PAN, Aadhaar, bank details, passwords, tax documents, or file uploads in the MVP. Avoid logging full messages or personal data. Link to the privacy page and state that an enquiry does not create a professional engagement. Implement CSRF-safe handling appropriate to the selected framework.

Use `.env.example` for placeholders such as:

```env
CONTACT_RECIPIENT_EMAIL=TODO
EMAIL_PROVIDER_API_KEY=TODO
EMAIL_FROM_ADDRESS=TODO
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_TURNSTILE_SITE_KEY=TODO
TURNSTILE_SECRET_KEY=TODO
```

Never commit `.env.local`, API keys, SMTP passwords, or production secrets.

## UX, accessibility, and content

- Use mobile-first responsive layouts, semantic HTML, correct heading order, visible focus states, keyboard navigation, and accessible labels/errors.
- Use factual, non-exaggerated copy. Avoid “best”, “No. 1”, “leading”, “guaranteed”, unsupported tax-saving claims, government influence, or implied outcomes.
- Do not use stock imagery, fake testimonials, client logos, awards, reviews, or invented case studies. Meaningful images need accurate alt text; decorative images should be hidden from assistive technology.
- Mark privacy, terms, disclaimer, firm identity, registration, qualifications, and claims as drafts or placeholders until the owner verifies them.

## Validation commands

Provide scripts equivalent to:

```text
npm run dev
npm run lint
npm run typecheck
npm run build
```

Before completion, run linting, type checking, and a production build. Exercise valid and invalid form submissions, missing environment variables, all routes, mobile layout, and keyboard-only navigation. Confirm no secrets are committed and report any remaining placeholders or unverified compliance items.

## Deployment and reporting

Target Vercel by default, but do not describe the site as production-ready until the production form, domain, privacy pages, and ICAI/compliance review are complete. Do not hard-code a final domain; use `NEXT_PUBLIC_SITE_URL`.

When work is complete, report changed files, implemented routes, commands and results, email-provider environment variables, remaining placeholders, security limitations, local run steps, deployment steps, and the pre-launch checklist. Do not commit changes unless explicitly asked.
