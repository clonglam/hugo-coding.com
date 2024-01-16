import React from "react"
import Link from "next/link"
import DashboardWrapper from "@/components/dashboard/DashboardWrapper"

import { buttonVariants } from "@/components/ui/button"
import { listProjects } from "@/actions/proejctsAction"
import { projectColumns } from "@/components/dashboard/projects/projectColumns"
import { PaginationTable } from "@/components/global/PaginationTable"

type AdminProjectsPageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

async function AdminProjectsPage({ searchParams }: AdminProjectsPageProps) {
  const { page, per_page, sort } = searchParams

  const limit = typeof per_page === "string" ? parseInt(per_page) : 8
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0

  const projects = await listProjects({
    limit,
    offset,
  })

  return (
    <DashboardWrapper
      header="All Projects"
      description="You can add/edit the project from the dashboard"
      sectionAction={
        <Link
          href="/admin/projects/new"
          className={buttonVariants({ variant: "dark" })}
        >
          New Project
        </Link>
      }
    >
      <PaginationTable columns={projectColumns} data={projects} />
    </DashboardWrapper>
  )
}

export default AdminProjectsPage
