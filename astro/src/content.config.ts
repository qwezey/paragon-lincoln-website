import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    department: z.enum([
      'engineering-design',
      'project-management',
      'construction-inspection',
      'construction-management',
      'information-technology',
    ]),
    publishDate: z.coerce.date(),
    author: z.string().default('Paragon Lincoln Engineering'),
  }),
});

export const collections = { blog };
