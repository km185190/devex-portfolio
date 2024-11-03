import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum(['DevOps', 'Developer Experience', 'Tutorials', 'Case Studies']),
    tags: z.array(z.string()),
    series: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const authors = defineCollection({
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    avatar: z.string().optional(),
    social: z.object({
      twitter: z.string().optional(),
      github: z.string().optional(),
      linkedin: z.string().optional(),
    }),
  }),
});

const series = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.array(z.string()),
  }),
});

export const collections = {
  blog,
  authors,
  series,
};