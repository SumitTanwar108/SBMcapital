# Repository Guide

## 1. What this project is

This repository contains a placeholder-driven Next.js App Router website for an Indian business consultancy led by Chartered Accountants.

The project includes:

- Responsive public website pages.
- Centralized business and branding configuration.
- Contact enquiry form with server-side validation.
- SEO metadata, sitemap, and robots configuration.
- Baseline security headers and contact endpoint protections.
- Draft privacy, terms, and disclaimer pages.

This is an informational lead-generation website. It does not include a client portal, tax filing workflow, document uploads, payments, stored submissions, or automated tax/legal advice.

## 2. Requirements

Install these tools before development:

- Node.js LTS.
- npm.
- Git.

Check the installation in PowerShell:

```powershell
node --version
npm --version
git --version
```

The Python `.venv` is not required by the current Next.js application.

## 3. Install and run locally

From the repository root:

```powershell
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Stop the development server with `Ctrl+C`.

If PowerShell blocks `npm.ps1`, use the Windows executable directly:

```powershell
npm.cmd install
npm.cmd run dev
```

Useful scripts:

```powershell
npm run typecheck
npm run lint
npm run build
npm run start
```

The production sequence is:

```powershell
npm run build
npm run start
```

## 4. Where to update company details

Edit this file:

```text
lib/config.ts
```

Update the following sections with owner-approved information:

### Business

- `displayName`
- `legalName`
- `tagline`
- `description`
- `city`
- `state`
- `address`
- `phone`
- `email`
- `officeHours`

### Professionals

`professionals` is an array — one entry per director:

- `name`
- `designation`
- `qualifications`
- `bio` — a short, owner-verified paragraph of real background (education, experience, prior roles). Leave it as an empty string (`""`) for anyone whose background hasn't been confirmed yet; the About page only renders a bio paragraph when one is present, so an empty string simply shows the name and role line with no fabricated content.

### Brand

- `accent`
- `ink`
- `paper`

### Services

`services` is an array of `{ title, text, subServices }`. `title` is the main service heading, `text` is its summary description, and `subServices` is an array of `{ name, detail }` — each a specific sub-service with a one-line explanation. Each row renders as a collapsed summary (title only) that expands to show `text` followed by the full `subServices` list on click. Update titles, descriptions, and sub-services only after confirming that the firm actually offers them.

Do not leave `TODO` values in a public launch. Do not add unverified qualifications, registrations, awards, clients, testimonials, rankings, statistics, or performance claims.

## 5. Where to update SEO metadata

SEO settings are also in:

```text
lib/config.ts
```

Update:

```ts
seo: {
  title: "Approved page title",
  description: "Approved search description",
  keywords: ["approved keyword", "approved service keyword"]
}
```

The Open Graph preview image is generated automatically by `app/opengraph-image.tsx` (using `next/og`, a real PNG, not a static file) from `siteConfig.business` and `siteConfig.seo.description` — update the copy there if the layout needs to change. The browser tab icon is `app/icon.svg`.

The metadata is consumed by:

```text
app/layout.tsx
```

The public site URL is configured through:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For deployment, set it to the approved production URL in `.env.local` or the hosting provider's environment settings.

## 6. Environment variables

Copy the example file:

```powershell
Copy-Item .env.example .env.local
```

Then replace the placeholders:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_RECIPIENT_EMAIL=approved-inbox@example.com
EMAIL_PROVIDER_API_KEY=provider-secret
EMAIL_FROM_ADDRESS=approved-sender@example.com
```

Do not commit `.env.local`. It is ignored by Git. Never place email provider secrets in browser code.

The contact endpoint (`app/api/contact/route.ts`) sends enquiries through [Resend](https://resend.com) using its REST API directly via `fetch` (no SDK dependency). Until all three email variables below are set, it returns a generic not-connected response instead of attempting to send.

### Setting up Resend

1. Create a Resend account at resend.com (free tier: 3,000 emails/month).
2. Get a sender address:
   - Quick test: use the sandbox sender `onboarding@resend.dev`. It only delivers to the email address on your own Resend account — fine for confirming the integration works, not for real enquiries.
   - Real use: verify your own domain in the Resend dashboard (Domains → Add Domain → add the DNS records it gives you), then use an address on that domain, e.g. `enquiries@yourdomain.com`.
3. Create an API key: dashboard → API Keys → Create API Key. It looks like `re_xxxxxxxxxxxx`.
4. Fill in `.env.local`:
   ```env
   CONTACT_RECIPIENT_EMAIL=askushapinnacleadvisory@gmail.com
   EMAIL_PROVIDER_API_KEY=re_xxxxxxxxxxxx
   EMAIL_FROM_ADDRESS=onboarding@resend.dev
   ```
   Swap `EMAIL_FROM_ADDRESS` for the verified domain address once you have one.
5. Restart `npm run dev` — Next.js only reads `.env.local` at process startup, so edits require a restart.
6. Test by submitting the form at `/contact` and confirming the email arrives.

## 7. Routes

| Route | Purpose |
|---|---|
| `/` | Homepage and primary conversion flow |
| `/about` | Practice and professional profile |
| `/services` | Service overview |
| `/contact` | Contact details and enquiry form |
| `/privacy` | Draft privacy notice |
| `/terms` | Draft terms of use |
| `/disclaimer` | Draft professional disclaimer |
| `/api/contact` | Server-side contact validation endpoint |
| `/robots.txt` | Generated by `app/robots.ts` |
| `/sitemap.xml` | Generated by `app/sitemap.ts` |

## 8. Project structure

```text
app/
  about/page.tsx
  api/contact/route.ts
  contact/page.tsx
  disclaimer/page.tsx
  privacy/page.tsx
  services/page.tsx
  terms/page.tsx
  fonts.ts
  globals.css
  icon.svg
  layout.tsx
  opengraph-image.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  contact-form.tsx
  page-shell.tsx
  site-footer.tsx
  site-header.tsx
lib/
  config.ts
  validation.ts
public/
  office-texture.svg
next.config.mjs
package.json
.env.example
```

Use `lib/config.ts` for business content. Use components for shared UI. Keep route-specific content in the relevant `app/**/page.tsx` file.

## 9. Security controls

The project includes:

- Zod validation on the contact endpoint.
- Required consent validation.
- Indian phone-number validation.
- Request body size limit.
- Honeypot field for basic bot filtering.
- In-memory rate limiting.
- Same-origin check for browser submissions.
- No logging or local persistence of submitted messages.
- Content Security Policy.
- `X-Frame-Options: DENY`.
- `X-Content-Type-Options: nosniff`.
- Referrer policy.
- Permissions policy.
- Disabled `X-Powered-By` response header.

The in-memory rate limiter is suitable only for a simple MVP and single-instance deployment. Use a shared rate-limit store or managed protection before scaling horizontally. It keys on the `X-Forwarded-For` header, which is only trustworthy behind a proxy that overwrites client-supplied values (Vercel's edge does this); behind a different or misconfigured proxy, a client can forge this header to bypass the limit. If the header is absent entirely, all callers share a single `"unknown"` bucket, so heavy legitimate traffic without that header could rate-limit unrelated users.

The Content-Security-Policy currently allows `'unsafe-inline'` for `script-src`, which Next.js's App Router relies on for its own inline hydration scripts. There is no `dangerouslySetInnerHTML` or similar sink in this codebase today, so there is no known exploitable injection path, but `'unsafe-inline'` means CSP would not contain a future one. Removing it requires a per-request nonce issued from `middleware.ts` and threaded into the CSP header (Next.js reads the nonce automatically from a `script-src 'nonce-...'` value it finds in the response header) — a bigger change than a config tweak, so it is left as a follow-up rather than done inline here.

## 10. Validation before a commit

Run:

```powershell
npm run typecheck
npm run lint
npm run build
```

Then inspect the change:

```powershell
git diff --check
git status
```

Check that these are not staged:

```text
.env
.env.local
.venv/
node_modules/
.next/
__pycache__/
```

Test manually:

- All public routes load.
- Mobile navigation opens and closes.
- Keyboard focus is visible.
- Invalid form submissions show an error.
- The honeypot does not expose a visible field.
- Valid form submissions behave according to provider configuration.
- No sensitive data is accepted by the form.

## 11. Git workflow

Review changes:

```powershell
git status
git diff --check
```

Stage and commit:

```powershell
git add .
git diff --cached --check
git commit -m "Update CA consulting website"
```

Push to the configured main branch:

```powershell
git branch -M main
git push -u origin main
```

Never commit secrets, `.env.local`, provider credentials, or generated build directories.

## 12. Deployment checklist

Before deployment:

1. Replace all business and professional placeholders.
2. Replace SEO placeholders with approved metadata.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
4. Configure the email provider and test delivery.
5. Complete the privacy, terms, and disclaimer review.
6. Confirm all service descriptions are accurate.
7. Complete ICAI and professional compliance review.
8. Run typecheck, lint, and production build.
9. Test the live contact form.
10. Confirm no secrets are committed.

The website should not be described as production-ready until the contact workflow, legal pages, domain, and compliance review are complete.
