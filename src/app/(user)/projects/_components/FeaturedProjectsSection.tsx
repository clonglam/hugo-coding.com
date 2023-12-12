import { SelectProject, SelectProjectWithCategory, projects } from "@/db/schema"
import React, { Suspense } from "react"
import ProjectCard from "./ProjectCard"
import ProjectGrid from "./ProjectGrid"
import SectionHeader from "@/components/SectionHeader"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import FeaturedCard from "./FeaturedCard"
import { db } from "../../../../db"
import { eq } from "drizzle-orm"

type Props = {
  featuredProjects: SelectProjectWithCategory[]
}

async function FeaturedProjectsSection() {
  const featuredProjects = await db.query.projects.findMany({
    where: eq(projects.featured, true),
    with: {
      projectsToCategories: {
        columns: { projectId: false, categoryId: false },
        with: { category: true },
      },
    },
    limit: 2,
  })
  return (
    <div className="container min-h-[480px] pt-[120px] pb-[160px]">
      <div className="mb-8">
        <h3 className="font-semibold text-3xl">Featured Projects</h3>
        {/* <p className="text-md font-normal">
          Our strength is collaboration Our strength is collaboration Our
          strength is collaboration Our strength is collaboration
        </p> */}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
          {featuredProjects.map((project, index) => (
            <FeaturedCard project={project} key={index} />
          ))}
        </div>

        <div className="flex items-center justify-center pt-[80px]">
          <Link
            href="/projects"
            className={cn(buttonVariants({ variant: "dark", size: "lg" }))}
          >
            View More
          </Link>
        </div>
      </Suspense>
    </div>
  )
}

export default FeaturedProjectsSection
