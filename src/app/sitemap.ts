
import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

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
    '/blog',
    '/support',
    '/privacy-policy',
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...blogRoutes];
}
