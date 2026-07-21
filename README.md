# Khemendra Labs

Cybersecurity Research & Engineering Portfolio

## Overview

A production-quality cybersecurity portfolio showcasing DFIR investigations, digital forensics research, vulnerability research, security tooling, malware analysis, incident response, and security automation.

## Features

### Core Features
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- **Dark/Light Theme**: Built-in theme switching with next-themes
- **Responsive Design**: Mobile-first approach with accessibility in mind
- **Professional UI**: Clean, minimal design focused on content
- **Security-Focused**: Built with security best practices

### Content Management
- **Keystatic CMS**: GitHub-based content management
- **GitHub OAuth**: Secure admin authentication
- **Draft/Preview Workflow**: Content staging and preview
- **Content Collections**: Projects, Reports, Labs, Blog

### Professional Features
- **SEO Optimized**: Metadata, structured data, sitemap, robots.txt
- **RSS Feed**: Blog syndication support
- **PWA Ready**: Progressive Web App manifest and icons
- **Analytics**: Cloudflare Web Analytics integration
- **Search**: Full-site search functionality

### Security & Quality
- **Security Headers**: HSTS, CSP, X-Frame-Options, etc.
- **CI/CD**: GitHub Actions for lint, test, and deploy
- **CodeQL**: Automated security scanning
- **Dependabot**: Automated dependency updates
- **Testing**: Vitest (unit) and Playwright (E2E)

## Architecture

- **Frontend**: Next.js App Router with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: Reusable shadcn/ui components
- **Animations**: Framer Motion for smooth transitions
- **Theme**: next-themes for dark/light mode
- **CMS**: Keystatic with GitHub storage
- **Deployment**: Cloudflare Pages

## Setup

### Prerequisites

- Node.js 18+
- pnpm 8+
- GitHub account (for CMS)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Copy environment variables:
```bash
cp .env.example .env.local
```

3. Configure GitHub OAuth for Keystatic CMS:
   - Create a GitHub OAuth App
   - Set callback URL to `http://localhost:3000/api/keystatic/github/callback`
   - Add `KEYSTATIC_GITHUB_CLIENT_ID` and `KEYSTATIC_GITHUB_CLIENT_SECRET` to `.env.local`

4. Run development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

```env
KEYSTATIC_GITHUB_CLIENT_ID=your_github_client_id
KEYSTATIC_GITHUB_CLIENT_SECRET=your_github_client_secret
```

## CMS Usage

Access the admin panel at `/admin` to:
- Create and edit content
- Manage projects, reports, labs, and blog posts
- Preview drafts before publishing

## Deployment

### Cloudflare Pages

1. Connect GitHub repository to Cloudflare Pages
2. Configure build settings:
   - Build command: `pnpm build`
   - Build output directory: `.next`
   - Node.js version: `20`
3. Add environment variables
4. Deploy automatically on push to main branch

See [docs/deployment.md](docs/deployment.md) for detailed instructions.

## Project Structure

```
khemendra-labs/
├── app/              # Next.js app directory
│   ├── about/        # About page
│   ├── projects/     # Projects listing and detail pages
│   ├── reports/      # Reports listing and detail pages
│   ├── labs/         # Labs listing and detail pages
│   ├── blog/         # Blog listing and detail pages
│   ├── search/       # Search page
│   ├── admin/        # CMS admin redirect
│   └── layout.tsx    # Root layout
├── components/       # React components
│   ├── ui/           # shadcn/ui components
│   ├── navbar.tsx    # Navigation bar
│   ├── footer.tsx    # Footer
│   └── theme-provider.tsx
├── lib/              # Utility functions
│   ├── metadata.ts   # SEO metadata
│   ├── rss.ts        # RSS feed generator
│   ├── structured-data.ts
│   └── resume.ts     # Resume integration
├── content/          # CMS content
│   ├── projects/     # Project markdown files
│   ├── reports/      # Report markdown files
│   ├── labs/         # Lab markdown files
│   └── blog/         # Blog post markdown files
├── config/           # Configuration files
│   ├── site.ts       # Site configuration
│   └── resume.ts     # Resume settings
├── public/           # Static assets
│   ├── manifest.json # PWA manifest
│   └── icons/        # PWA icons
├── docs/             # Documentation
│   ├── cms-setup.md
│   ├── deployment.md
│   └── seo-analytics.md
├── tests/            # Test files
│   ├── unit/         # Vitest unit tests
│   ├── e2e/          # Playwright E2E tests
│   └── setup.ts      # Test setup
├── .github/          # GitHub configuration
│   ├── workflows/    # CI/CD workflows
│   ├── codeql.yml    # CodeQL scanning
│   └── dependabot.yml
├── keystatic.config.ts
├── middleware.ts
├── next.config.ts
└── package.json
```

## Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript type checking
pnpm test:unit    # Run unit tests
pnpm test:e2e     # Run E2E tests
pnpm test         # Run all tests
```

## Security

- TypeScript strict mode enabled
- Security headers (HSTS, CSP, X-Frame-Options, etc.)
- Input validation
- Dependency management with Dependabot
- CodeQL security scanning
- GitHub OAuth for CMS authentication

## Documentation

- [CMS Setup Guide](docs/cms-setup.md)
- [Deployment Guide](docs/deployment.md)
- [SEO & Analytics Guide](docs/seo-analytics.md)

## License

Copyright © 2024 Khemendra Labs. All rights reserved.
