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

`services` is hierarchical and follows this structure:

- `services[]` — top-level service lines such as Regulatory Certifications or Direct & Indirect Tax.
- `services[].categories[]` — grouped service clusters within each line.
- `services[].categories[].items[]` — the specific sub-services, each with a `name` and `detail`.

The UI renders this as a compact accordion: top-level services expand first, then each service cluster expands into its item list. Update titles, descriptions, categories, and items only after confirming that the firm actually offers them.

### Homepage and About Content

`content.home` controls the homepage editorial text:

- `heroIntro`
- `welcomeTitle`
- `welcomeParagraphs`
- `focusAreas`

`content.about` controls the about page and homepage about teaser:

- `overview`
- `mission`
- `vision`
- `values`
- `strategicPillars`

Use these sections for owner-approved long-form narrative content instead of hardcoding copy directly into page components.

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
FORMSPREE_FORM_ID=your-form-id
CONTACT_RECIPIENT_EMAIL=approved-inbox@example.com
```

Do not commit `.env.local`. It is ignored by Git. Never place email provider secrets in browser code.

The contact endpoint (`app/api/contact/route.ts`) validates the request with the shared Zod schema (`lib/validation.ts`), then forwards it server-side to [Formspree](https://formspree.io) using `FORMSPREE_FORM_ID`. That variable is intentionally **not** prefixed with `NEXT_PUBLIC_` — it must stay server-only so the browser bundle never sees it. Until it is set, the endpoint returns a generic not-configured response instead of attempting to send.

`CONTACT_RECIPIENT_EMAIL` is documentation only: Formspree does not accept a recipient override in the request (anti-spam design), so the actual delivery address is whatever is configured and verified for that form in the Formspree dashboard — not anything read from this codebase.

### Setting up Formspree

1. Create a Formspree account at formspree.io and create a form.
2. In the form's Settings, set — and verify, via the confirmation link Formspree emails — the notification address, e.g. `askushapinnacleadvisory@gmail.com`. This is the address that actually receives enquiries; it lives entirely in the Formspree dashboard.
3. Copy the form ID from the form's endpoint URL (`https://formspree.io/f/<form-id>`).
4. Fill in `.env.local`:
   ```env
   FORMSPREE_FORM_ID=your-form-id
   CONTACT_RECIPIENT_EMAIL=askushapinnacleadvisory@gmail.com
   ```
5. Restart `npm run dev` — Next.js only reads `.env.local` at process startup, so edits require a restart.
6. Test by submitting the form at `/contact` and confirming the email arrives.

### Deployment environment

`.env.local` is gitignored and never deploys automatically. Set the same variables directly in the hosting provider's project environment settings before going live:

```text
NEXT_PUBLIC_SITE_URL      — the real production domain, not localhost
FORMSPREE_FORM_ID         — same value as local; server-only, no NEXT_PUBLIC_ prefix
CONTACT_RECIPIENT_EMAIL   — documentation only, see above
```

On Vercel: Project → Settings → Environment Variables.

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

The current homepage design is no longer the earlier seal-led layout. It now uses:

- an editorial left-side copy column,
- a layered right-side hero composition,
- a lower signature rail,
- and a compact nested services accordion.

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

In development only, `script-src` also includes `'unsafe-eval'` (see `next.config.mjs`), because Next.js's Fast Refresh runtime needs `eval` to bootstrap in dev mode — without it, the page fails to hydrate at all and the site silently falls back to native (broken) HTML form submissions. Production never includes `'unsafe-eval'`, since production bundles don't use `eval`.

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
