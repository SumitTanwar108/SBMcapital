# Business Consultancy Website MVP

A config-driven Next.js App Router website for an Indian business consultancy led by Chartered Accountants. The current design uses a warm editorial palette, Manrope and Cormorant Garamond typography, an asymmetric homepage hero with layered compliance/advisory panels, and a compact hierarchical services accordion.

## Run from the repository

Open PowerShell in the repository root:

```powershell
cd C:\Users\300537\SBM\SBMcapital
```

Install dependencies:

```powershell
npm install
```

If PowerShell blocks `npm.ps1`, use the Windows executable directly:

```powershell
npm.cmd install
```

Start the development server:

```powershell
npm run dev
```

Or, when PowerShell script execution is restricted:

```powershell
npm.cmd run dev
```

Open http://localhost:3000. Stop the server with `Ctrl+C`.

## Configure the website

Edit [`lib/config.ts`](lib/config.ts) before sharing the site. This is the central configuration file for:

- Firm display and legal name.
- Tagline and business description.
- City, state, address, phone, email, and office hours.
- Professional profiles: an array of directors, each with a name, designation, qualifications, and an optional bio (leave `bio` empty for anyone whose background hasn't been owner-verified yet).
- Brand colors.
- Homepage and about-page editorial content under `content.home` and `content.about`.
- Service groups, categories, and item-level descriptions.
- SEO title, description, keywords, and Open Graph image.

The services section is hierarchical:

- `services[]` contains each primary service line.
- `services[].categories[]` contains grouped clusters within a service line.
- `services[].categories[].items[]` contains the specific sub-services and their descriptions.

Owner-provided long-form about content is currently mapped into `content.about`, and the homepage welcome block is managed through `content.home`.

Replace all `TODO` values with owner-approved information. Verify existing contact, address, professional, and qualification details before publishing.

Create a local environment file from the template:

```powershell
Copy-Item .env.example .env.local
```

Then update `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
FORMSPREE_FORM_ID=TODO
CONTACT_RECIPIENT_EMAIL=TODO
```

`FORMSPREE_FORM_ID` is server-only (no `NEXT_PUBLIC_` prefix) and identifies a form on [Formspree](https://formspree.io). The actual recipient inbox is whatever address is configured and verified for that form in the Formspree dashboard — `CONTACT_RECIPIENT_EMAIL` is documentation only, since Formspree does not accept a recipient override in the request (anti-spam design). Until `FORMSPREE_FORM_ID` is configured, the contact endpoint intentionally returns a generic not-configured response. It does not store or log submissions. Never commit `.env.local` or provider credentials.

**Deploying:** `.env.local` never deploys automatically — set the same variables in your hosting provider's project environment settings too (e.g. on Vercel: Project → Settings → Environment Variables), using the real production domain for `NEXT_PUBLIC_SITE_URL`.

## Validate the project

Run these commands before committing:

```powershell
npm run typecheck
npm run lint
npm run build
```

Use `npm.cmd` instead of `npm` if PowerShell reports that script execution is disabled:

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
```

Run the production build locally:

```powershell
npm run start
```

The production server is available at http://localhost:3000 after `npm run build` completes.

## Included MVP surfaces

- Responsive home, services, approach, about, contact, privacy, terms, and disclaimer routes.
- Accessible labels, focus states, mobile navigation, honeypot field, and client/server form validation with Zod.
- Placeholder-safe config and non-exaggerated content.
- `POST /api/contact` route with request-size limits, in-memory rate limiting, origin-safe same-site routing, and no payload logging.
- Security headers including CSP, frame protection, referrer policy, and permissions policy.
- A homepage hero with editorial left-side copy, layered right-side advisory panels, and a lower signature rail.
- A dedicated about page using centralised overview, mission, vision, values, and strategic-pillar content.
- A nested services accordion with expandable service clusters and item-level descriptions.

## Before launch

Replace firm and professional placeholders, add reviewed privacy/terms/disclaimer pages, connect a transactional email provider, test the production form, and complete ICAI/compliance review. This preview is not production-ready until those steps are complete.

## Project structure

- `app/` — App Router pages, metadata, API route, robots, sitemap, and global styles.
- `components/` — reusable header, footer, shell, and contact form.
- `lib/config.ts` — single source of truth for business identity, services hierarchy, and homepage/about content.
- `public/office-texture.svg` — unused legacy asset kept for reference; the homepage hero is now CSS-driven with layered panels and orbital graphics, and the Open Graph preview image is generated at build time by `app/opengraph-image.tsx` via `next/og` (a real PNG, not a static file).
- `app/icon.svg` — browser tab favicon.

## Push to a remote repository

The configured remote is `https://github.com/SumitTanwar108/SBMcapital.git`. Review the staged file list before committing, and never stage `.env`, `.env.local`, `.venv`, or `__pycache__`.

```powershell
git status
git add .
git diff --cached --check
git commit -m "Migrate MVP to Next.js"
git branch -M main
git push -u origin main
```

For a new remote, replace the URL below before pushing:

```powershell
git remote add origin https://github.com/<username>/<repository>.git
git push -u origin main
```
