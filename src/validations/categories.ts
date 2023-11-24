import { z } from "zod"

export const categorySchema = z.object({
  label: z.string().min(1, "Label is required.").max(255),
  slug: z.string().min(1, "Slug is required.").max(255),
})

export type CategoryFormData = z.infer<typeof categorySchema>
