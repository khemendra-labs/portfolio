import { describe, it, expect } from 'vitest'
import { constructMetadata } from '@/lib/metadata'

describe('Metadata utilities', () => {
  it('should construct metadata with defaults', () => {
    const metadata = constructMetadata()
    expect(metadata.title).toBeDefined()
    expect(metadata.description).toBeDefined()
  })

  it('should construct metadata with custom values', () => {
    const metadata = constructMetadata({
      title: 'Custom Title',
      description: 'Custom Description',
    })
    expect(metadata.title).toBe('Custom Title')
    expect(metadata.description).toBe('Custom Description')
  })

  it('should handle noIndex option', () => {
    const metadata = constructMetadata({ noIndex: true })
    expect(metadata.robots).toBeDefined()
    expect(metadata.robots?.index).toBe(false)
  })
})
