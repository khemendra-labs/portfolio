import { resumeConfig } from '@/config/resume'

export async function getResumeUrl() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${resumeConfig.githubRepo}/releases/tags/${resumeConfig.releaseTagName}`
    )
    
    if (!response.ok) {
      return resumeConfig.fallbackUrl
    }
    
    const data = await response.json()
    const asset = data.assets?.find((a: any) => a.name.endsWith('.pdf'))
    
    return asset?.browser_download_url || resumeConfig.fallbackUrl
  } catch (error) {
    console.error('Failed to fetch resume from GitHub:', error)
    return resumeConfig.fallbackUrl
  }
}
