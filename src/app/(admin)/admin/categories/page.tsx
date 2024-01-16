import React from "react"
import { listCategoriesAction } from "@/actions/categoryActions"
import SectionHeader from "@/components/main/SectionHeader"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

import { categoryColumns } from "@/components/dashboard/categories/categoryColumns"
import { PaginationTable } from "@/components/global/PaginationTable"

async function CategoriesPage() {
  const categories = await listCategoriesAction()

  return (
    <div>
      <SectionHeader
        header="All Categories"
        description="You can add/edit new Category from the dashboard"
      >
        <Link
          href="/admin/categories/new"
          className={buttonVariants({ variant: "dark" })}
        >
          New Category
        </Link>
      </SectionHeader>

      <PaginationTable columns={categoryColumns} data={categories} />
    </div>
  )
}

export default CategoriesPage
