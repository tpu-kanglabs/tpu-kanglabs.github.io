import { defineCollection, z } from "astro:content";

const publications = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      authors: z.array(z.string()),
      year: z.number(),
      venue: z.string(),
      type: z.enum(["paper", "book", "patent", "software"]).default("paper"),
      cover: image().optional(),
      doi: z.string().optional(),
      award: z.string().optional(),
      links: z
        .object({
          pdf: z.string().optional(),
          code: z.string().optional(),
          website: z.string().optional(),
          demo: z.string().optional(),
          slides: z.string().optional(),
          video: z.string().optional(),
        })
        .optional(),
      featured: z.boolean().default(false),
      badges: z
        .array(
          z.object({
            text: z.string(),
            type: z
              .enum(["gold", "blue", "red", "green", "default"])
              .default("default"),
          }),
        )
        .optional(),
    }),
});

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

const books = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      authors: z.array(z.string()),
      year: z.number(),
      venue: z.string(),
      cover: image().optional(),
      doi: z.string().optional(),
      award: z.string().optional(),
      links: z
        .object({
          pdf: z.string().optional(),
          code: z.string().optional(),
          website: z.string().optional(),
          demo: z.string().optional(),
          slides: z.string().optional(),
          video: z.string().optional(),
        })
        .optional(),
      // Removed featured as per user request
      badges: z
        .array(
          z.object({
            text: z.string(),
            type: z
              .enum(["gold", "blue", "red", "green", "default"])
              .default("default"),
          }),
        )
        .optional(),
    }),
});

const team = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.enum([
        "Principal Investigator",
        "Professor",
        "Associate Professor",
        "Assistant Professor",
        "Postdoc",
        "Research Assistant",
        "PhD Student",
        "Master Student",
        "Undergraduate",
        "Alumni",
      ]),
      title: z.array(z.string()).optional(), // For specific academic titles like "Academician", "Changjiang Scholar"
      avatar: image(),
      bio: z.string().optional(), // Short bio for card
      email: z.string().optional(),
      website: z.string().optional(),
      linkedin: z.string().optional(),
      github: z.string().optional(),
      twitter: z.string().optional(),
      googleScholar: z.string().optional(),
      weight: z.number().default(100),
    }),
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
  }),
});

const research = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image().optional(),
      order: z.number().default(100),
    }),
});

const patents = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    inventors: z.array(z.string()),
    number: z.string(), // Patent Number
    date: z.date(),
    status: z.enum(["Granted", "Pending", "Filed"]),
    link: z.string().optional(),
  }),
});

const softwares = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    developers: z.array(z.string()),
    number: z.string(), // Registration Number
    date: z.date(),
    description: z.string().optional(),
  }),
});

const honors = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    award: z.string(), // e.g., "Gold Medal", "First Prize"
    date: z.date(),
    year: z.string(), // Display year on badge
    type: z.enum(["Challenge Cup", "Internet+", "Other"]).default("Other"),
    level: z.enum(["Special", "First", "Second", "Third"]).default("Third"),
  }),
});

const activities = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      cover: image().optional(),
      description: z.string().optional(),
    }),
});

export const collections = {
  publications,
  projects,
  books,
  team,
  news,
  research,
  patents,
  softwares,
  honors,
  activities,
};
