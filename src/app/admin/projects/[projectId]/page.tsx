import { db } from "@/db"
import { projects } from "@/db/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"
import React from "react"
import ProjectForm from "../_components/ProjectForm"

type Props = {
  params: {
    projectId: string
  }
}

async function EditProjectPage({ params: { projectId } }: Props) {
  const project = await db.query.projects.findFirst({
    where: eq(projects.id, projectId),
    with: {
      projectsToCategories: { with: { category: true } },
    },
  })
  const categories = await db.query.categories.findMany()

  if (!project || !categories) return notFound()

  return (
    <div>
      <h2>Edit Project</h2>
      <ProjectForm project={project} categories={categories} />
    </div>
  )
}

export default EditProjectPage
