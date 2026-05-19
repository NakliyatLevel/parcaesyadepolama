import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://parcaesyadepolama.com.tr'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/karakar/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
