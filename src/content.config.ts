import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      link: z.string().url(),
      cover: image().optional(),
      order: z.number().default(100),
    }),
});

export const collections = {
  projects,
};
