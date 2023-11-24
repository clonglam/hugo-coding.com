import { db } from "@/db"
import React from "react"
import { projectColumns } from "./_components/projectColumns"
import { PaginationTable } from "../_components/PaginationTable"
import SectionHeader from "@/components/SectionHeader"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

type Props = {}

async function AdminProjectsPage({}: Props) {
  const projects = await db.query.projects.findMany({
    with: {
      projectsToCategories: { with: { category: true } },
    },
  })

  return (
    <div>
      <SectionHeader
        header="All Projects"
        description="You can add/edit the project from the dashboard"
      >
        <Link
          href="/admin/projects/new"
          className={buttonVariants({ variant: "dark" })}
        >
          New Project
        </Link>
      </SectionHeader>

      <PaginationTable columns={projectColumns} data={projects} />
    </div>
  )
}

export default AdminProjectsPage
