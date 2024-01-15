import { buttonVariants } from "@/components/ui/button"
import { getFeaturedProjects } from "@/db/queries"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Suspense } from "react"
import FeaturedProjectSectionWrapper from "../main/FeaturedProjectSectionWrapper"
import FeaturedCard from "./FeaturedCard"
import FeaturedCardLoader from "./FeaturedCardLoader"

async function FeaturedProjectsSection() {
  const { data: featuredProjects } = await getFeaturedProjects({ limit: 2 })
  if (featuredProjects === null) return

  return (
    <FeaturedProjectSectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
        <Suspense
          fallback={[...Array(2)].map((_, index) => (
            <FeaturedCardLoader key={index} />
          ))}
        >
          {featuredProjects.map((project, index) => (
            <FeaturedCard project={project} key={index} />
          ))}
        </Suspense>
      </div>

      <div className="flex items-center justify-center pt-[80px]">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "dark", size: "lg" }))}
        >
          View More
        </Link>
      </div>
    </FeaturedProjectSectionWrapper>
  )
}

export default FeaturedProjectsSection
