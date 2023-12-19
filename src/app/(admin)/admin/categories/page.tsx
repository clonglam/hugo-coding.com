import React from "react"
import { listCategoriesAction } from "../../../../actions/categoryActions"
import SectionHeader from "@/components/SectionHeader"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { PaginationTable } from "../../../../components/PaginationTable"
import { categoryColumns } from "../../../../components/categories/categoryColumns"

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
