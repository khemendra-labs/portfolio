interface RSSFeedOptions {
  title: string
  description: string
  site_url: string
  feed_url: string
  language?: string
}

interface RSSItem {
  title: string
  url: string
  date: Date
  description?: string
  author?: string
}

export class RSSFeed {
  private options: RSSFeedOptions
  private items: RSSItem[] = []

  constructor(options: RSSFeedOptions) {
    this.options = {
      language: 'en-us',
      ...options,
    }
  }

  addItem(item: RSSItem) {
    this.items.push(item)
  }

  xml(): string {
    const { title, description, site_url, feed_url, language } = this.options

    const items = this.items
      .map(
        (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.url}</link>
      <guid isPermaLink="true">${item.url}</guid>
      <pubDate>${item.date.toUTCString()}</pubDate>
      ${item.description ? `<description><![CDATA[${item.description}]]></description>` : ''}
      ${item.author ? `<author>${item.author}</author>` : ''}
    </item>`
      )
      .join('')

    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${title}]]></title>
    <description><![CDATA[${description}]]></description>
    <link>${site_url}</link>
    <atom:link href="${feed_url}" rel="self" type="application/rss+xml" />
    <language>${language}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`
  }
}
