import { db } from "@/db"
import { projects } from "@/db/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"
import React from "react"

import SectionHeader from "@/components/SectionHeader"
import { Link } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import ProjectForm from "@/components/projects/ProjectForm"

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
      <SectionHeader
        header="Edit Project"
        description="You can add/edit the project from the dashboard"
      >
        <Link
          href="/admin/projects"
          className={buttonVariants({ variant: "dark" })}
        >
          Back
        </Link>
      </SectionHeader>

      <ProjectForm project={project} categories={categories} />
    </div>
  )
}

export default EditProjectPage
