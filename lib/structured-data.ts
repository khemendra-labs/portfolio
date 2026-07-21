export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Khemendra',
    jobTitle: 'Cybercrime Investigation Intern',
    description: 'Cybersecurity researcher and engineer specializing in DFIR, digital forensics, and malware analysis.',
    url: 'https://khemendra.labs',
    sameAs: [
      'https://github.com/khemendra-labs',
      'https://linkedin.com/in/khemendra',
      'https://twitter.com/khemendra',
    ],
    knowsAbout: [
      'Digital Forensics',
      'Incident Response',
      'Malware Analysis',
      'Vulnerability Assessment',
      'Security Automation',
      'Network Security',
      'Threat Intelligence',
    ],
  }
}

export function generateArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  url,
}: {
  title: string
  description: string
  datePublished: string
  dateModified: string
  author: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author,
    },
    url,
  }
}

export function generateSoftwareApplicationSchema({
  name,
  description,
  applicationCategory,
  operatingSystem,
  offers,
}: {
  name: string
  description: string
  applicationCategory: string
  operatingSystem: string
  offers?: {
    '@type': 'Offer'
    price: string
    priceCurrency: string
  }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory,
    operatingSystem,
    offers: offers || {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
