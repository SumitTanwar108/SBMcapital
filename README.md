# CA Consulting Website MVP

A placeholder-driven Next.js App Router MVP for an Indian CA consulting website. The design follows a restrained professional-services direction: warm paper tones, deep teal, muted terracotta, editorial typography, generous spacing, and an architectural texture asset.

## Run from the repository

Open PowerShell in the repository root:

```powershell
cd D:\SBM\SBMcapital
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
- Professional names, designations, and qualifications.
- Brand colors.
- Service names and descriptions.
- SEO title, description, keywords, and Open Graph image.

Replace all `TODO` values with owner-approved information. Verify existing contact, address, professional, and qualification details before publishing.

Create a local environment file from the template:

```powershell
Copy-Item .env.example .env.local
```

Then update `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_RECIPIENT_EMAIL=TODO
EMAIL_PROVIDER_API_KEY=TODO
EMAIL_FROM_ADDRESS=TODO
```

Until the email provider variables are configured, the contact endpoint intentionally returns a generic not-connected response. It does not store or log submissions. Never commit `.env.local` or provider credentials.

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

## Before launch

Replace firm and professional placeholders, add reviewed privacy/terms/disclaimer pages, connect a transactional email provider, test the production form, and complete ICAI/compliance review. This preview is not production-ready until those steps are complete.

## Project structure

- `app/` — App Router pages, metadata, API route, robots, sitemap, and global styles.
- `components/` — reusable header, footer, shell, and contact form.
- `lib/config.ts` — single source of truth for business content and branding.
- `public/office-texture.svg` — original abstract visual asset for the hero.

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
