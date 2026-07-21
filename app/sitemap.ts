import { MetadataRoute } from 'next'

const siteUrl = 'https://khemendra.labs'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/projects',
    '/reports',
    '/labs',
    '/blog',
    '/certifications',
    '/timeline',
    '/now',
    '/contact',
    '/changelog',
  ]

  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
