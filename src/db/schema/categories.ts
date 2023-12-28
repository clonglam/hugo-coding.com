import { InferInsertModel, InferSelectModel, relations, sql } from "drizzle-orm"
import {
  timestamp,
  pgTable,
  text,
  varchar,
  uuid,
  primaryKey,
  boolean,
  integer,
} from "drizzle-orm/pg-core"
import { createId } from "@paralleldrive/cuid2"

import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { z } from "zod"
import { projectsToCategories } from "./projectsToCategories"

export const categories = pgTable("categories", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  label: varchar("label", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
})

export const categoriesRelations = relations(categories, ({ many }) => ({
  projectsToCategories: many(projectsToCategories),
}))

export type SelectCategory = InferSelectModel<typeof categories>
export type InsertCategory = InferInsertModel<typeof categories>
export const insertCategoriesSchema = createInsertSchema(categories)
export const selectCategoriesSchema = createSelectSchema(categories)
