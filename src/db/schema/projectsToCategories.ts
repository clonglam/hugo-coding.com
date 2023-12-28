import { relations } from "drizzle-orm"
import { pgTable, primaryKey, text } from "drizzle-orm/pg-core"
import { projects } from "./projects"
import { categories } from "./categories"

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
