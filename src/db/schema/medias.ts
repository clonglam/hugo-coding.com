import { createId } from "@paralleldrive/cuid2"
import { InferInsertModel, InferSelectModel } from "drizzle-orm"
import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { z } from "zod"

export const medias = pgTable("medias", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: varchar("name", { length: 255 }).notNull(),
  key: varchar("key", { length: 255 }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
})
export const insertMediaSchema = createInsertSchema(medias)
export const selectMediaSchema = createSelectSchema(medias)

export type SelectMedia = InferSelectModel<typeof medias>
export type InsertMedia = InferInsertModel<typeof medias>

export const deleteMediaSchema = z.object({
  id: z.string({
    invalid_type_error: "Invalid Id",
  }),
})
