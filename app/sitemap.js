/**
 * This file generates the sitemap.xml for the website
 * It follows Next.js App Router standards
 */

export default function sitemap() {
  const baseUrl = 'https://a-game-about-digging-a-hole.com';
  
  // Main pages
  const routes = [
    '',
    '/download-a-game-about-digging-a-hole',
    '/resources', 
    '/community',
    '/guides',
    '/contact',
    '/privacy',
    '/terms',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Guide pages
  const guideRoutes = [
    '/guides/getting-started',
    '/guides/speedrun',
    '/guides/strategies',
    '/guides/achievements',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...guideRoutes];
} 