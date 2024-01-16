import { Suspense } from "react"
import { notFound } from "next/navigation"
import { db } from "@/db"

import SectionHeader from "@/components/SectionHeader"
import CategorySelctor from "@/components/projects/CategorySelctor"
import ProjectGrid from "@/components/projects/ProjectGrid"
import { listPublishedProjects } from "@/actions/proejctsAction"

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

async function ProjectsPage({ searchParams }: Props) {
  const { page, per_page, sort, category, store_page } = searchParams

  const limit = typeof per_page === "string" ? parseInt(per_page) : 8
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0

  const publishedProjects = await listPublishedProjects({
    limit,
    offset,
    categorySlug: typeof category === "string" ? category : undefined,
  })
  const categoriesSelection = await db.query.categories.findMany()

  if (!publishedProjects) return notFound()

  // const pageCount = Math.ceil(productsTransaction.total / limit)

  // Stores transaction
  // const storesLimit = 25
  // const storesOffset =
  //   typeof store_page === "string"
  //     ? (parseInt(store_page) - 1) * storesLimit
  //     : 0

  return (
    <div className="container min-h-[80vh]">
      <SectionHeader header="All Projects" description="" />
      <Suspense>
        <CategorySelctor
          categories={categoriesSelection}
          selectedCategory={typeof category === "string" ? category : null}
        />
      </Suspense>

      <Suspense>
        <ProjectGrid projects={publishedProjects} />
      </Suspense>
    </div>
  )
}

export default ProjectsPage
