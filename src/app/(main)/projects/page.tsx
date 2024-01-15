import { db } from "@/db"

import SectionHeader from "@/components/SectionHeader"
import CategorySelctor from "@/components/projects/CategorySelctor"
import { getProductsByCategoryAction } from "@/actions/proejctsAction"

import ProjectGrid from "@/components/projects/ProjectGrid"
import { Suspense } from "react"
import { SelectProject } from "@/db/schema/projects"

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

async function ProjectsPage({ searchParams }: Props) {
  // const projects = await db.query.projects.findMany()
  const categoriesSelection = await db.query.categories.findMany()

  const { page, per_page, sort, category, store_page } = searchParams

  // Products transaction
  const limit = typeof per_page === "string" ? parseInt(per_page) : 8
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0

  const projectsinCategory = (await getProductsByCategoryAction({
    limit,
    offset,
    // sort: typeof sort === "string" ? sort : null,
    categorySlug: typeof category === "string" ? category : null,
  })) as SelectProject[]

  console.log("projectsinCategory", projectsinCategory)

  // const pageCount = Math.ceil(productsTransaction.total / limit)

  // Stores transaction
  const storesLimit = 25
  const storesOffset =
    typeof store_page === "string"
      ? (parseInt(store_page) - 1) * storesLimit
      : 0

  return (
    <div className="container min-h-[80vh]">
      <SectionHeader header="All Projects" description="" />
      <CategorySelctor
        categories={categoriesSelection}
        selectedCategory={typeof category === "string" ? category : null}
      />
      <Suspense>
        <ProjectGrid projects={projectsinCategory} />
      </Suspense>
    </div>
  )
}

export default ProjectsPage
