import { z } from "zod"

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  slug: z.string().min(1, "Slug is required.").max(255),
  description: z.string().min(1, "Description is required.").max(65535),
  year: z.string().min(1, "Year is required.").max(4),
  client: z.union([z.string().max(255), z.null(), z.undefined()]),
  demoWebsite: z.union([z.string().max(512), z.null(), z.undefined()]),
  content: z.string().min(1, "Content is required.").max(65535),
  tags: z.array(z.string()),
  featuredImage: z.string(),
  categories: z.array(z.string()),
})

export type ProjectFormData = z.infer<typeof projectSchema>
