# Analisa Angka

Clean rebuild of the legacy `backup-` app using Next.js.

## Stack

- Next.js App Router
- TypeScript
- Supabase legacy database
- Vercel for the app
- GitHub Actions for scraper jobs

## Scope

Included:

- Login page placeholder
- Dashboard page placeholder
- Analysis route placeholder
- Legacy Supabase adapters
- GitHub Actions scraper skeleton

Excluded from initial rebuild:

- Admin page
- Legacy CSS
- Service worker / PWA cache

## Font system

- Brand/logo: Orbitron
- Display/title/button: Rajdhani
- Body/UI: Inter
- Number/output/history: JetBrains Mono

## Environment

Copy `.env.example` to `.env.local` for local development.

Required:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SCRAPER_USER_AGENT=AnalisaAngkaBot/1.0
```

`SUPABASE_SERVICE_ROLE_KEY` must never be exposed to browser code. It is only for server scripts and GitHub Actions.

## Scripts

```bash
npm run dev
npm run build
npm run typecheck
npm run scrape
```

## Scraper

The scraper is scheduled in `.github/workflows/scrape.yml` and can also be run manually from GitHub Actions.

Current scraper status: skeleton only. Database write is disabled until the legacy schema is verified.
