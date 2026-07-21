import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This will be replaced with Keystatic data fetching
  const post = {
    title: 'Building Effective Threat Hunting Queries for SIEM',
    excerpt: 'Learn how to create custom threat hunting queries to detect lateral movement, data exfiltration, and other advanced threats in your SIEM platform.',
    category: 'Threat Hunting',
    tags: ['SIEM', 'Threat Hunting', 'Security Operations'],
    publishedDate: 'January 20, 2024',
    readingTime: '8 min read',
    coverImage: null,
    content: `
# Building Effective Threat Hunting Queries for SIEM

Threat hunting is a proactive approach to cybersecurity that involves searching for indicators of compromise (IOCs) and tactics, techniques, and procedures (TTPs) that may evade traditional detection methods.

## Understanding SIEM Query Languages

Most SIEM platforms use their own query languages:
- Splunk: SPL (Search Processing Language)
- Elastic: KQL (Kibana Query Language)
- Microsoft Sentinel: KQL
- Sumo Logic: SPL

## Common Threat Hunting Patterns

### Lateral Movement Detection

\`\`\`spl
index=security (EventCode=4624 OR EventCode=4625) 
| stats count by src_ip, dest_ip 
| where count > 10
\`\`\`

### Data Exfiltration Indicators

\`\`\`spl
index=network bytes_out > 1000000 
| stats sum(bytes_out) by dest_ip 
| where sum > 10000000
\`\`\`

## Best Practices

1. **Baseline Normal Behavior**: Establish baselines before hunting
2. **Iterative Refinement**: Continuously improve queries
3. **Contextual Analysis**: Consider business context
4. **Collaboration**: Share findings with team members

## Conclusion

Effective threat hunting requires understanding both the technical aspects of SIEM query languages and the behavioral patterns of adversaries.
    `,
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.publishedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
          </div>
        </article>
      </div>
    </div>
  )
}
