import React from "react"
import ProjectForm from "../_components/ProjectForm"
import SectionHeader from "@/components/SectionHeader"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { db } from "@/db"
import { notFound } from "next/navigation"

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
      <ProjectForm categories={categories} />
    </div>
  )
}

export default NewProjectPage
