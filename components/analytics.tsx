'use client'

import { useEffect } from 'react'

export function Analytics() {
  useEffect(() => {
    // Cloudflare Web Analytics
    // Add your Cloudflare Web Analytics script here
    // const script = document.createElement('script')
    // script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
    // script.setAttribute('data-cf-beacon', '{"token": "your-token"}')
    // document.body.appendChild(script)

    // Alternatively, use other analytics services
    // Google Analytics, Plausible, etc.
  }, [])

  return null
}
