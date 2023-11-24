import { z } from "zod"

export const imageSchema = z.object({
  name: z.string().min(1, "Title is required.").max(255),
  image: z
    .custom<File>()
    //   .transform((file) => file.length > 0 && file.item(0)),
    .refine((file) => !file || (!!file && file.size <= 500 * 1024 * 1024), {
      message: "The profile picture must be a maximum of 30MB.",
    })
    .refine((file) => !file || (!!file && file.type?.startsWith("image")), {
      message: "Only images are allowed to be sent.",
    }),
})

export type ImageUploaderData = z.infer<typeof imageSchema>

export const StoredFileSchema = z.object({
  id: z.string().min(1),
  name: z.string(),
  url: z.string(),
})
