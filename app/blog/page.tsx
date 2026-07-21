'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Building Effective Threat Hunting Queries for SIEM',
    slug: 'threat-hunting-siem-queries',
    excerpt: 'Learn how to create custom threat hunting queries to detect lateral movement, data exfiltration, and other advanced threats in your SIEM platform.',
    category: 'Threat Hunting',
    tags: ['SIEM', 'Threat Hunting', 'Security Operations'],
    publishedDate: '2024-01-20',
    readingTime: '8 min read',
    coverImage: null,
  },
  {
    id: 2,
    title: 'Memory Forensics: A Practical Guide to Volatility 3',
    slug: 'memory-forensics-volatility-3-guide',
    excerpt: 'Comprehensive guide to using Volatility 3 for memory analysis, including process analysis, network connections, and malware artifact detection.',
    category: 'Digital Forensics',
    tags: ['Memory Forensics', 'Volatility', 'DFIR'],
    publishedDate: '2024-01-15',
    readingTime: '12 min read',
    coverImage: null,
  },
  {
    id: 3,
    title: 'Setting Up a Malware Analysis Sandbox',
    slug: 'malware-analysis-sandbox-setup',
    excerpt: 'Step-by-step guide to building an isolated malware analysis environment using virtualization and automated analysis tools.',
    category: 'Malware Analysis',
    tags: ['Malware Analysis', 'Sandbox', 'Virtualization'],
    publishedDate: '2024-01-10',
    readingTime: '10 min read',
    coverImage: null,
  },
  {
    id: 4,
    title: 'Ubuntu Server Hardening with CIS Benchmarks',
    slug: 'ubuntu-server-hardening-cis',
    excerpt: 'Implement CIS benchmarks to harden Ubuntu servers against common attacks and vulnerabilities with automated scripts.',
    category: 'System Security',
    tags: ['Hardening', 'Ubuntu', 'CIS Benchmarks'],
    publishedDate: '2024-01-05',
    readingTime: '15 min read',
    coverImage: null,
  },
  {
    id: 5,
    title: 'Incident Response Workflow for Ransomware',
    slug: 'incident-response-ransomware-workflow',
    excerpt: 'Established workflow for responding to ransomware incidents, from initial detection to recovery and post-incident analysis.',
    category: 'Incident Response',
    tags: ['Incident Response', 'Ransomware', 'DFIR'],
    publishedDate: '2023-12-20',
    readingTime: '9 min read',
    coverImage: null,
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground mb-8">
            Cybersecurity tutorials, research findings, and technical articles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {post.publishedDate}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readingTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
