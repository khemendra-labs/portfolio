# Deployment Guide

## Cloudflare Pages Deployment

### Prerequisites

- Cloudflare account
- Cloudflare Pages project created
- GitHub repository connected to Cloudflare Pages
- Environment variables configured

### Environment Variables

Add these in Cloudflare Pages Settings → Environment Variables:

```env
KEYSTATIC_GITHUB_CLIENT_ID=your_github_client_id
KEYSTATIC_GITHUB_CLIENT_SECRET=your_github_client_secret
```

### Deployment Steps

1. **Connect GitHub Repository**
   - Go to Cloudflare Pages dashboard
   - Click "Create a project"
   - Connect your GitHub repository
   - Select the repository

2. **Configure Build Settings**
   - Build command: `pnpm build`
   - Build output directory: `.next`
   - Node.js version: `20`

3. **Add Environment Variables**
   - Add the Keystatic environment variables
   - Save and deploy

4. **Automatic Deployments**
   - Push to main branch triggers automatic deployment
   - Pull requests create preview deployments
   - Deployments are optimized by Cloudflare

### Custom Domain

1. In Cloudflare Pages project settings, click "Custom domains"
2. Add your domain (e.g., `khemendra.labs`)
3. Configure DNS records as instructed
4. Enable HTTPS (automatic with Cloudflare)

## GitHub Actions Deployment

### Required Secrets

Add these to GitHub repository Settings → Secrets and variables → Actions:

- `CLOUDFLARE_API_TOKEN`: Cloudflare API token with Pages permissions
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID`

### Deployment Workflow

The `.github/workflows/deploy.yml` file handles:
- Building the Next.js application
- Deploying to Cloudflare Pages via Wrangler
- Triggered on push to main branch

## Security Headers

The application includes comprehensive security headers:

- **Strict-Transport-Security**: Enforces HTTPS
- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME sniffing
- **Content-Security-Policy**: Restricts content sources
- **X-XSS-Protection**: XSS protection
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Controls browser features

## CI/CD Pipeline

### GitHub Actions Workflows

**CI Workflow** (`.github/workflows/ci.yml`):
- Linting
- Type checking
- Unit tests
- Build verification

**CodeQL Workflow** (`.github/codeql.yml`):
- Static code analysis
- Security vulnerability detection
- Runs weekly and on push/PR

### Dependabot

Automated dependency updates:
- Weekly checks on Mondays
- Pull requests for updates
- Reviewer assignment
- Version update limits

## Testing

### Unit Tests (Vitest)

```bash
pnpm test:unit
```

- Component testing
- Utility function testing
- Coverage reporting

### E2E Tests (Playwright)

```bash
pnpm test:e2e
```

- Browser automation
- User flow testing
- Cross-browser testing

### Type Checking

```bash
pnpm type-check
```

- TypeScript strict mode
- No implicit any
- Type safety verification

## Monitoring

### Cloudflare Analytics

Built-in analytics for:
- Page views
- Unique visitors
- Geographic distribution
- Device breakdown

### Custom Analytics

Add your analytics provider in `components/analytics.tsx`:
- Cloudflare Web Analytics
- Google Analytics
- Plausible
- Umami

## Performance Optimization

### Build Optimization

- SWC minification
- Tree shaking
- Code splitting
- Image optimization

### CDN

- Cloudflare CDN automatically enabled
- Global edge caching
- DDoS protection

## Troubleshooting

### Build Failures

1. Check build logs in Cloudflare Pages
2. Verify Node.js version compatibility
3. Ensure all dependencies are installed
4. Check for TypeScript errors

### Deployment Issues

1. Verify environment variables
2. Check GitHub Actions logs
3. Ensure Cloudflare API token is valid
4. Verify repository permissions

### Runtime Errors

1. Check browser console
2. Verify API endpoints
3. Check network requests
4. Review server logs

## Rollback

### Cloudflare Pages

1. Go to project dashboard
2. Click "Deployments"
3. Select previous deployment
4. Click "Rollback"

### GitHub

1. Revert commit
2. Push to main branch
3. Automatic deployment triggers

## Security Best Practices

1. **Never commit secrets**: Use environment variables
2. **Regular updates**: Dependabot handles this
3. **Code scanning**: CodeQL runs automatically
4. **Access control**: Limit admin access to CMS
5. **HTTPS only**: Enforced by security headers
