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
import { projectsToCategories } from "./projectsToCategories"

export const projects = pgTable("projects", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: varchar("description", { length: 1024 }),
  year: varchar("year", { length: 4 }).notNull(),
  client: varchar("client", { length: 255 }),
  featuredImage: varchar("featured_image", { length: 255 }).notNull(),
  demoWebsite: varchar("demo_website", { length: 512 }),
  tags: text("tags").array(),
  content: text("content").notNull(),
  featured: boolean("featured").default(false).notNull(),
  published: boolean("published").default(false).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  order: integer("order").default(0).notNull(),
})

export const projectsRelations = relations(projects, ({ many }) => ({
  projectsToCategories: many(projectsToCategories),
}))

export type SelectProject = InferSelectModel<typeof projects>
export type InsertProject = InferInsertModel<typeof projects>

export const insertProjectSchema = createInsertSchema(projects, {
  tags: z.array(z.string()),
})
export const selectProjectSchema = createSelectSchema(projects, {
  tags: z.array(z.string()),
})

export type SelectProjectWithCategory = SelectProject & {
  projectsToCategories: Array<{
    category: {
      label: string
      id: string
      slug: string
    }
  }>
}
