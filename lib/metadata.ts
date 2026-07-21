import { Metadata } from 'next'

const siteConfig = {
  name: 'Khemendra Labs',
  description: 'Cybersecurity Research & Engineering Portfolio - DFIR investigations, digital forensics research, vulnerability research, security tooling, malware analysis, incident response, and security automation.',
  url: 'https://khemendra.labs',
  ogImage: 'https://khemendra.labs/og-image.png',
  links: {
    twitter: 'https://twitter.com/khemendra',
    github: 'https://github.com/khemendra-labs',
    linkedin: 'https://linkedin.com/in/khemendra',
  },
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      'cybersecurity',
      'DFIR',
      'digital forensics',
      'malware analysis',
      'incident response',
      'vulnerability research',
      'security automation',
      'threat intelligence',
      'network security',
      'penetration testing',
    ],
    authors: [{ name: 'Khemendra' }],
    creator: 'Khemendra',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@khemendra',
    },
    icons: {
      icon: icons,
      shortcut: icons,
      apple: icons,
    },
    manifest: '/manifest.json',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
