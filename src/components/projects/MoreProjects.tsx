import { SelectProject } from "@/db/backupSchema"
import Link from "next/link"
import React from "react"
import ProjectCard from "./ProjectCard"

type Props = { projects: SelectProject[] }

function MoreProjects({ projects }: Props) {
  return (
    <div>
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl">More Projects</h2>
        <Link
          href="/projects"
          className="text-xl hover:underline"
        >{`Back to List ->`}</Link>
      </div>

      <div className="grid grid-cols-12 gap-x-6">
        {projects.map(({ id, title, slug, featuredImage }) => (
          <ProjectCard
            key={id}
            id={id}
            title={title}
            slug={slug}
            priority={true}
            featuredImage={featuredImage}
          />
        ))}
      </div>
    </div>
  )
}

export default MoreProjects
