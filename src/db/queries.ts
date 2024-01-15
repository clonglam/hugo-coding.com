"use server"

import { and, eq } from "drizzle-orm"
import { db } from "."
import { SelectProjectWithCategory, projects } from "./schema/projects"

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
  //   try {
  //     const data = await db.query.subscriptions.findFirst({
  //       where: (s, { eq }) => eq(s.userId, userId),
  //     })
  //     if (data) return { data: data as Subscription, error: null }
  //     else return { data: null, error: null }
  //   } catch (error) {
  //     console.log(error)
  //     return { data: null, error: `Error` }
  //   }
}
