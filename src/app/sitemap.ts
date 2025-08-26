
import { MetadataRoute } from 'next';

const URL = 'https://brainplay-x7d62.web.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/quiz-clash',
    '/word-hunter',
    '/math-rush',
    '/logic-leap',
    '/memory-flip',
    '/spot-fake-news',
    '/daily-challenge',
    '/leaderboard',
    '/login',
    '/signup',
    '/profile',
    '/about',
    '/support',
    '/privacy-policy',
  ];

  return routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));
}
