"use server"

import { db } from "@/db"
import { eq, sql, and, inArray, desc } from "drizzle-orm"

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

type GetFeaturedProjectsType = { limit?: number }

export const getFeaturedProjects = async ({
  limit = 2,
}: GetFeaturedProjectsType) => {
  try {
    const data = await db.query.projects.findMany({
      where: and(eq(projects.featured, true), eq(projects.published, true)),
      with: {
        projectsToCategories: {
          columns: { projectId: false, categoryId: false },
          with: { category: true },
        },
      },
      limit,
    })
    return data
      ? { data, error: null }
      : { data: null, error: `Error, unabled to fetch featured projects.` }
  } catch (error) {
    return { data: null, error: `Error, unabled to fetch featured projects.` }
  }
}

type ListPublishedProjectsType = {
  categorySlug?: string
  limit?: number
  offset?: number
}

export const listPublishedProjects = async ({
  categorySlug,
  limit,
  offset,
}: ListPublishedProjectsType) => {
  if (categorySlug) {
    const projectsInCategory = await db.query.categories.findFirst({
      where: eq(categories.slug, categorySlug),
      with: { projectsToCategories: { with: { project: true } } },
    })

    return projectsInCategory?.projectsToCategories.map((project) => ({
      ...project.project,
    }))
  }

  return await db.query.projects.findMany({
    with: { projectsToCategories: { with: { category: true } } },
    where: and(eq(projects.published, true)),
    limit,
    offset,
    orderBy: [desc(projects.createdAt)],
  })
}

type ListProjectsType = {
  limit?: number
  offset?: number
}

export const listProjects = async ({ limit, offset }: ListProjectsType) =>
  await db.query.projects.findMany({
    with: { projectsToCategories: { with: { category: true } } },
    limit,
    offset,
  })

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
