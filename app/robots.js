/**
 * This file generates the robots.txt content for the website
 * It follows Next.js App Router standards
 */

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/', 
          '/admin/',
          '/_next/',
          '/*.json$',
        ]
      },
    ],
    sitemap: 'https://a-game-about-digging-a-hole.com/sitemap.xml',
    host: 'https://a-game-about-digging-a-hole.com',
  }
} 