import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import FeaturedCard from "./FeaturedCard"
import { getFeaturedProjects } from "@/db/queries"

async function FeaturedProjectsSection() {
  const { data: featuredProjects } = await getFeaturedProjects({ limit: 2 })
  if (featuredProjects === null) return

  return (
    <div className="container min-h-[480px] pt-[120px] pb-[160px]">
      <div className="mb-8">
        <h2 className="font-semibold text-3xl">Featured Projects</h2>
      </div>

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
    </div>
  )
}

export default FeaturedProjectsSection
