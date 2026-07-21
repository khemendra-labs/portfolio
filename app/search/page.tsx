'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function SearchPage() {
  const [query, setQuery] = React.useState('')
  const [results, setResults] = React.useState([])

  // This will be replaced with actual search implementation
  // using Pagefind or similar search library
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    // TODO: Implement actual search
    setResults([])
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Search</h1>
          <p className="text-muted-foreground mb-8">
            Search across projects, reports, labs, and blog posts
          </p>

          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {query && results.length === 0 && (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                No results found for "{query}"
              </CardContent>
            </Card>
          )}

          {results.length > 0 && (
            <div className="space-y-4">
              {results.map((result: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:border-primary transition-colors cursor-pointer">
                    <CardHeader>
                      <CardTitle>{result.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{result.description}</p>
                      <Badge variant="outline" className="mt-2">{result.type}</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
