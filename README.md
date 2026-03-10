# LODE Landing Page

Professional holding page for go-lode.com with email waitlist functionality.

## Features

- Modern, responsive design following **LODE Brand Guidelines Lite 2026**
- Official LODE logo and branding (Navy #0B1F3B, Orange #FF6A00)
- Trebuchet MS typography matching trip-dashboard
- Email waitlist signup with validation
- Optimized for Vercel deployment
- Built with Next.js 16, React 19, and Tailwind CSS

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push this code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in Vercel dashboard
3. Set Root Directory to `lode-landing`
4. Deploy

Or use Vercel CLI:

```bash
cd lode-landing
vercel
```

## Domain Configuration

To use with go-lode.com:

1. In Vercel project settings, add `go-lode.com` and `www.go-lode.com` as custom domains
2. Configure DNS at IONOS:
   - Add A record: `@` → `76.76.21.21`
   - Add A record: `@` → `76.76.19.19`
   - Add CNAME: `www` → `cname.vercel-dns.com`
3. Wait for DNS propagation (24-48 hours)
4. SSL certificate will be automatically provisioned

## Waitlist Management

Currently, waitlist signups are logged to console. To persist data, update `/src/app/api/waitlist/route.ts` to:

- Save to DynamoDB or PostgreSQL
- Send to email service (SendGrid, AWS SES)
- Add to CRM or marketing automation tool

## Branding

This landing page uses the official LODE branding from the trip-dashboard project:

- **Logo**: Blue:Orange variant for light theme (from `/public/logos/`)
- **Colors**:
  - Navy: #0B1F3B (headings, primary text)
  - Orange: #FF6A00 (CTAs, links, accents)
  - Slate: #94A3B8 (secondary text)
  - Light BG: #F5F7FA (backgrounds)
- **Typography**: Trebuchet MS font family
- **Components**: Uses `LodeLogo` component for consistent branding

## Customization

- Update colors in `tailwind.config.js` (LODE brand colors)
- Modify content in `src/app/page.tsx`
- Update metadata in `src/app/layout.tsx`
- Logo variants available in `/public/logos/`

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS
- **Deployment**: Vercel
- **Language**: TypeScript
- **Branding**: LODE Brand Guidelines Lite 2026
