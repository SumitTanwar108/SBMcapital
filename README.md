# CA Consulting Website MVP

A placeholder-driven MVP for an Indian CA consulting website. It uses a static frontend and a small Python standard-library server so it can run immediately with `uv` while Node.js is unavailable in the current environment.

## Run locally

```powershell
uv run server.py
```

Open http://localhost:8000. Stop the server with `Ctrl+C`.

## Customize

Update `config.js` before sharing the site. It contains the firm name, legal name, description, city, address, phone, email, office hours, professional details, colors, and service list. Replace every `TODO` value with owner-approved information.

Copy `.env.example` to `.env` or set the variables in the shell when wiring a transactional email provider. Until `CONTACT_RECIPIENT_EMAIL`, `EMAIL_PROVIDER_API_KEY`, and `EMAIL_FROM_ADDRESS` are configured, the form intentionally returns a generic not-connected response and does not store or log submissions.

## Included MVP surfaces

- Responsive home, services, approach, about, contact, and privacy-note sections.
- Accessible labels, focus states, mobile navigation, honeypot field, and client/server form validation.
- Placeholder-safe config and non-exaggerated content.
- `POST /api/contact` endpoint with size limits and no payload logging.

## Before launch

Replace firm and professional placeholders, add reviewed privacy/terms/disclaimer pages, connect a transactional email provider, test the production form, and complete ICAI/compliance review. This preview is not production-ready until those steps are complete.

## Push to a remote repository

The configured remote is `https://github.com/SumitTanwar108/SBMcapital.git`. Review the staged file list before committing, and never stage `.env`, `.env.local`, `.venv`, or `__pycache__`.

```powershell
git status
git add .
git diff --cached --check
git commit -m "Build CA consulting website MVP"
git branch -M main
git push -u origin main
```

For a new remote, replace the URL below before pushing:

```powershell
git remote add origin https://github.com/<username>/<repository>.git
git push -u origin main
```
