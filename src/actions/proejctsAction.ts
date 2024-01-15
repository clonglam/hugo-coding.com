"use server"

import { db } from "@/db"
import { eq, sql, and, inArray } from "drizzle-orm"

import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import {
  InsertProject,
  SelectProject,
  SelectProjectWithCategory,
  insertProjectSchema,
  projects,
} from "@/db/schema/projects"
import { categories } from "@/db/schema/categories"

export async function addProjectAction(
  input: InsertProject,
  categories: string[]
) {
  const parsedProject = insertProjectSchema.parse(input)

  const isDubplicateSlug = await db.query.projects.findFirst({
    where: eq(projects.slug, parsedProject.slug),
  })

  if (isDubplicateSlug) {
    throw new Error("Project Slug is already taken.")
  }

  const addedProject = await db
    .insert(projects)
    .values(parsedProject)
    .returning()
  await updateProjectCategories(addedProject[0].id, categories)

  revalidateTag("projects") // Update cached posts
  redirect(`/admin/projects`) // Navigate to new route
  //   revalidatePath(`/admin/projects/${newProject.id}`)
}

export async function editProjectAction(
  id: string,
  input: InsertProject,
  categories: string[]
) {
  const data = insertProjectSchema.parse(input)

  const isProjectExisted = await db.query.projects.findFirst({
    where: eq(projects.id, id),
  })

  if (!isProjectExisted) {
    throw new Error("Project is not Exist.")
  }

  const editedProject = await db
    .update(projects)
    .set(data)
    .where(eq(projects.id, id))
    .returning()

  await updateProjectCategories(editedProject[0].id, categories)

  revalidateTag("projects") // Update cached posts
  revalidateTag(`projects/${editedProject[0].id}`) // Update cached posts
  redirect(`/admin/projects`) // Navigate to new route
}

export async function getProjectBySlugAction(slug: string) {
  return await db.query.projects.findFirst({ where: eq(projects.slug, slug) })
}

export async function deleteProjectAction(id: string) {
  await db.delete(projects).where(eq(projects.id, id))
  revalidateTag("projects") // Update cached posts
}

// Function to update the project's categories

async function updateProjectCategories(
  projectId: string,
  categoryIds: string[]
) {
  await db.transaction(async (tx) => {
    // Replace 'deleteFrom' and 'insertInto' with the correct methods if they are different
    await tx.execute(
      sql`DELETE FROM "projectsToCategories" WHERE project_id = ${projectId}`
    )

    for (const categoryId of categoryIds) {
      await tx.execute(
        sql`INSERT INTO "projectsToCategories" (project_id, category_id) VALUES (${projectId}, ${categoryId})`
      )
    }
  })
}

export async function getProductsByCategoryAction({
  categorySlug,
}: {
  limit: number
  offset: number
  categorySlug: string | null
  year?: number
}) {
  // TODO: Need to updated the problem
  // if (categorySlug) {
  //   const projectsInCategory: SelectProjectWithCategory[] =
  //     await db.query.categories.findFirst({
  //       where: eq(categories.slug, categorySlug),
  //       with: { projectsToCategories: { with: { project: true } } },
  //     })

  //   return projectsInCategory?.projectsToCategories.map((project) => ({
  //     ...project.project,
  //   }))
  // }
  return db.query.projects.findMany()
}
