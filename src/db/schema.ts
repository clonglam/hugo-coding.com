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
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  order: integer("order").default(0),
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

export const projectsToCategories = pgTable(
  "projectsToCategories",
  {
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id, { onDelete: "cascade" }),
    categoryId: text("category_id")
      .notNull()
      .references(() => categories.id, { onDelete: "cascade" }),
  },
  (t) => ({
    pk: primaryKey(t.projectId, t.categoryId),
  })
)

export const projectsToCategoriesRelations = relations(
  projectsToCategories,
  ({ one }) => ({
    project: one(projects, {
      fields: [projectsToCategories.projectId],
      references: [projects.id],
    }),
    category: one(categories, {
      fields: [projectsToCategories.categoryId],
      references: [categories.id],
    }),
  })
)

export const medias = pgTable("medias", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: varchar("name", { length: 255 }).notNull(),
  key: varchar("key", { length: 255 }).notNull(),
})

export type SelectMedia = InferSelectModel<typeof medias>
export type InsertMedia = InferInsertModel<typeof medias>
