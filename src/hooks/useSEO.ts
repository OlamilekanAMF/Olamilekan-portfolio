import { useEffect } from 'react'

const BASE_URL = 'https://olamilekanamf-portfolio.netlify.app'

const DEFAULTS = {
  title: 'Olamilekan Portfolio | Full-Stack Developer & AI Specialist',
  description:
    'Building scalable apps, smart websites & AI-powered automations. Expert in React, Next.js, Mobile Development, and AI Integration.',
  url: BASE_URL,
}

interface SEOOptions {
  title: string
  description: string
  path?: string
  ogTitle?: string
  ogDescription?: string
}

function setMeta(selector: string, content: string) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

function setCanonical(url: string) {
  const el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (el) el.href = url
}

export function useSEO({ title, description, path = '', ogTitle, ogDescription }: SEOOptions) {
  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${path}`
    const finalOgTitle = ogTitle ?? title
    const finalOgDescription = ogDescription ?? description

    document.title = title
    setMeta('meta[name="description"]', description)
    setMeta('meta[name="title"]', title)

    setMeta('meta[property="og:title"]', finalOgTitle)
    setMeta('meta[property="og:description"]', finalOgDescription)
    setMeta('meta[property="og:url"]', canonicalUrl)

    setMeta('meta[property="twitter:title"]', finalOgTitle)
    setMeta('meta[property="twitter:description"]', finalOgDescription)
    setMeta('meta[property="twitter:url"]', canonicalUrl)

    setCanonical(canonicalUrl)

    return () => {
      document.title = DEFAULTS.title
      setMeta('meta[name="description"]', DEFAULTS.description)
      setMeta('meta[name="title"]', DEFAULTS.title)
      setMeta('meta[property="og:title"]', DEFAULTS.title)
      setMeta('meta[property="og:description"]', DEFAULTS.description)
      setMeta('meta[property="og:url"]', DEFAULTS.url)
      setMeta('meta[property="twitter:title"]', DEFAULTS.title)
      setMeta('meta[property="twitter:description"]', DEFAULTS.description)
      setMeta('meta[property="twitter:url"]', DEFAULTS.url)
      setCanonical(DEFAULTS.url)
    }
  }, [title, description, path, ogTitle, ogDescription])
}
