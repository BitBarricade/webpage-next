import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bitbarricade.in/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://bitbarricade.in/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://bitbarricade.in/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
        url: 'https://bitbarricade.in/login',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://bitbarricade.in/project',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
        url: 'https://bitbarricade.in/service',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
        url: 'https://bitbarricade.in/team',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
        url: 'https://bitbarricade.in/testimonial',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
    },
  ]
}