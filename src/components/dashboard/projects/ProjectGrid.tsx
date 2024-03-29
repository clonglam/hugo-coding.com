import React, { Suspense } from "react"
import ProjectCard from "./ProjectCard"
import { SelectProject } from "@/db/schema/projects"

type Props = { projects: SelectProject[] }

function ProjectGrid({ projects }: Props) {
  return (
    <div className="grid grid-cols-12 gap-x-3 gap-y-12 mb-8">
      {projects.map(({ id, title, slug, featuredImage }, index) => (
        <div className="col-span-12 lg:col-span-4" key={id}>
          <Suspense fallback={<>loading</>}>
            <ProjectCard
              id={id}
              title={title}
              slug={slug}
              priority={index < 6}
              featuredImage={featuredImage}
            />
          </Suspense>
        </div>
      ))}
    </div>
  )
}

export default ProjectGrid
