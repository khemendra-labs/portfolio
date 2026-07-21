import { RSSFeed } from '@/lib/rss'

const siteUrl = 'https://khemendra.labs'

export async function GET() {
  const feed = new RSSFeed({
    title: 'Khemendra Singh Khangarot',
    description: 'Cybersecurity Research & Engineering Portfolio',
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss`,
  })

  // Add blog posts here when CMS is integrated
  // For now, add placeholder items
  feed.addItem({
    title: 'Building Effective Threat Hunting Queries for SIEM',
    url: `${siteUrl}/blog/threat-hunting-siem-queries`,
    date: new Date('2024-01-20'),
    description: 'Learn how to create custom threat hunting queries to detect lateral movement, data exfiltration, and other advanced threats in your SIEM platform.',
  })

  feed.addItem({
    title: 'Memory Forensics: A Practical Guide to Volatility 3',
    url: `${siteUrl}/blog/memory-forensics-volatility-3-guide`,
    date: new Date('2024-01-15'),
    description: 'Comprehensive guide to using Volatility 3 for memory analysis, including process analysis, network connections, and malware artifact detection.',
  })

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
