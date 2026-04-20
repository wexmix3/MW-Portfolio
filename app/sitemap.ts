import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://maxwexley.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,             lastModified: new Date(), changeFrequency: 'weekly',  priority: 1 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/about`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/chat`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map(p => ({
    url:             `${base}/projects/${p.slug}`,
    lastModified:    new Date(),
    changeFrequency: 'monthly' as const,
    priority:        0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
