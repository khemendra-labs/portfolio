import { createMiddleware } from '@keystatic/core/next'

export const { middleware } = createMiddleware({
  config: 'keystatic.config',
  storage: {
    kind: 'github',
    repo: {
      owner: 'khemendra-labs',
      name: 'portfolio',
    },
  },
  secret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET || '',
})

export default middleware
