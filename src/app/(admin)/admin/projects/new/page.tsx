import React from "react"

import SectionHeader from "@/components/SectionHeader"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { db } from "@/db"
import { notFound } from "next/navigation"
import ProjectForm from "@/components/projects/ProjectForm"

type Props = {}

async function NewProjectPage({}: Props) {
  const categories = await db.query.categories.findMany()
  if (!categories) return notFound()

  return (
    <div className="">
      <SectionHeader
        header="Add Project"
        description="Input the field below, after that press Add Project button to save the project."
      >
        <Link
          href="/admin/projects"
          className={buttonVariants({ variant: "dark" })}
        >
          Back
        </Link>
      </SectionHeader>
      <div className="">
        <ProjectForm categories={categories} />
      </div>
    </div>
  )
}

export default NewProjectPage
