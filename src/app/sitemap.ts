import { MetadataRoute } from 'next';

const URL = 'https://brainplay-x7d62.web.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/quiz-clash',
    '/word-hunter',
    '/math-rush',
    '/memory-flip',
    '/spot-fake-news',
    '/daily-challenge',
    '/login',
    '/signup',
  ];

  return routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));
}
