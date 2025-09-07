import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    modDate: z.coerce.date().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    
    // Schema para metadatos SEO
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      canonical: z.string().optional(),
      robots: z.object({
        index: z.boolean().optional(),
        follow: z.boolean().optional(),
        noimageindex: z.boolean().optional(),
        nosnippet: z.boolean().optional(),
        maxImagePreview: z.string().optional(),
      }).optional(),
      og: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        image: z.string().optional(),
        type: z.string().optional(),
      }).optional(),
      twitter: z.object({
        card: z.string().optional(),
      }).optional(),
      schema: z.array(z.any()).optional(), // Para JSON-LD schema
    }).optional(),
  }),
});

export const collections = { blog };