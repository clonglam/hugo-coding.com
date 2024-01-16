import React from "react"

import SectionHeader from "@/components/main/SectionHeader"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { db } from "@/db"
import { notFound } from "next/navigation"

import DashboardWrapper from "@/components/dashboard/DashboardWrapper"
import ProjectForm from "@/components/dashboard/projects/ProjectForm"

type Props = {}

async function NewProjectPage({}: Props) {
  const categories = await db.query.categories.findMany()
  if (!categories) return notFound()

  return (
    <DashboardWrapper
      header="Add Project"
      description="Input the field below, after that press Add Project button to save the project."
      sectionAction={
        <Link
          href="/admin/projects"
          className={buttonVariants({ variant: "dark" })}
        >
          Back
        </Link>
      }
    >
      {/* <SectionHeader
        header="Add Project"
        description="Input the field below, after that press Add Project button to save the project."
      >
        <Link
          href="/admin/projects"
          className={buttonVariants({ variant: "dark" })}
        >
          Back
        </Link>
      </SectionHeader> */}
      <div className="">
        <ProjectForm categories={categories} />
      </div>
    </DashboardWrapper>
  )
}

export default NewProjectPage
