import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://parcaesyadepolama.com.tr'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
