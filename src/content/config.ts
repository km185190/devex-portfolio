import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum([
      "DevOps",
      "Developer Experience",
      "Tutorials",
      "Case Studies",
    ]),
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

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    industry: z.string(),
    publishDate: z.date(),
    company: z.string(),
    duration: z.string(),
    companySize: z.string(),
    services: z.array(z.string()),
    results: z.array(
      z.object({
        metric: z.string(),
        value: z.string(),
        context: z.string().optional(),
      })
    ),
    technologies: z.array(z.string()),
    team: z.array(
      z.object({
        name: z.string(),
        role: z.string(),
        testimonial: z.string().optional(),
      })
    ),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  authors,
  series,
  caseStudies,
};
