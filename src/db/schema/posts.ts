import { createId } from "@paralleldrive/cuid2"
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm"
import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { z } from "zod"

export const posts = pgTable("posts", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: varchar("description", { length: 1024 }),
  featuredImage: varchar("featured_image", { length: 255 }).notNull(),
  tags: text("tags").array(),
  content: text("content").notNull(),
  featured: boolean("featured").default(false).notNull(),
  published: boolean("published").default(false).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  order: integer("order").default(0).notNull(),
})

export type SelectPost = InferSelectModel<typeof posts>
export type InsertPost = InferInsertModel<typeof posts>

export const insertPostSchema = createInsertSchema(posts, {
  tags: z.array(z.string()),
})
export const selectPostSchema = createSelectSchema(posts, {
  tags: z.array(z.string()),
})
