# Keystatic CMS Setup Guide

## Overview

Khemendra Labs uses Keystatic as the CMS for managing content. Keystatic provides a Git-based CMS that stores content in GitHub repositories with GitHub OAuth authentication.

## GitHub OAuth Setup

### 1. Create GitHub OAuth Application

1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Click "New OAuth App"
3. Fill in the application details:
   - **Application name**: Khemendra Labs CMS
   - **Homepage URL**: `https://your-domain.com`
   - **Application description**: CMS for Khemendra Labs portfolio
   - **Authorization callback URL**: `https://your-domain.com/api/keystatic/github/callback`
4. Click "Register application"

### 2. Configure OAuth Application

1. After registration, you'll see the **Client ID** - copy this
2. Click "Generate a new client secret" - copy this
3. Add these to your environment variables:
   ```env
   KEYSTATIC_GITHUB_CLIENT_ID=your_client_id
   KEYSTATIC_GITHUB_CLIENT_SECRET=your_client_secret
   ```

### 3. Repository Setup

1. Create a GitHub repository for content storage
2. Configure the repository in `keystatic.config.ts`:
   ```typescript
   repo: {
     owner: 'your-username',
     name: 'your-repo-name',
   }
   ```

### 4. Access Control

Keystatic uses GitHub OAuth for authentication. Only users with write access to the configured repository can access the CMS.

**Important**: Only the repository owner's GitHub account should be allowed for admin access as per project requirements.

## Content Collections

### Projects

- **Path**: `content/projects/*`
- **Fields**: title, description, problem, solution, technologies, securityArea, github, demo, featured, status, date, content
- **Status Options**: Active, In Development, Beta, Stable, Deprecated

### Reports

- **Path**: `content/reports/*`
- **Fields**: title, category, summary, tools, cves, references, date, content
- **Categories**: DFIR, Malware, Security Research

### Labs

- **Path**: `content/labs/*`
- **Fields**: title, objective, environment, methodology, findings, evidence, lessons, date, content

### Blog

- **Path**: `content/blog/*`
- **Fields**: title, excerpt, category, tags, publishedDate, readingTime, coverImage, references, content

## Workflow

### Draft → Preview → Review → Publish

1. **Draft**: Create content in Keystatic
2. **Preview**: Preview changes locally
3. **Review**: Review content in the CMS
4. **Publish**: Publish to GitHub
5. **Deploy**: Cloudflare Pages automatically deploys

## Accessing the CMS

1. Navigate to `/admin` or `/keystatic`
2. Authenticate with GitHub
3. Only users with repository access can log in
4. Create, edit, or delete content through the UI

## Content Structure

```
content/
├── projects/
│   ├── ointel/
│   ├── netscan/
│   └── ...
├── reports/
│   ├── windows-memory-forensics/
│   └── ...
├── labs/
│   ├── ransomware-analysis/
│   └── ...
└── blog/
    ├── threat-hunting-siem/
    └── ...
```

## Security Considerations

- GitHub OAuth provides secure authentication
- Content is stored in Git with full version history
- Only authorized GitHub users can access the CMS
- No passwords are stored locally
- All changes are tracked in Git commits

## Troubleshooting

### OAuth Callback Issues

- Ensure the callback URL matches exactly (including trailing slash)
- Check that the GitHub OAuth app is not in "Draft" mode
- Verify the client ID and secret are correct

### Repository Access Issues

- Ensure the GitHub user has write access to the repository
- Check that the repository name and owner are correct in the config
- Verify the repository is not private if using public OAuth app

### Content Not Appearing

- Check that content files are in the correct directory structure
- Verify the content is published (not in draft)
- Check the build logs for any errors
