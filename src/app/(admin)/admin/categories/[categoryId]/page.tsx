import { db } from "@/db"

import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

import SectionHeader from "@/components/main/SectionHeader"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import CateoryForm from "@/components/dashboard/categories/CategoryForm"
import { categories } from "@/db/schema/categories"

type Props = {
  params: {
    categoryId: string
  }
}

async function EditProjectPage({ params: { categoryId } }: Props) {
  const category = await db.query.categories.findFirst({
    where: eq(categories.id, categoryId),
  })

  if (!category) return notFound()

  return (
    <div>
      <SectionHeader
        header="Edit Category"
        description="You can edit the Category by the form. After finished edit just click the update button."
      >
        <Link
          href="/admin/categories"
          className={buttonVariants({ variant: "dark" })}
        >
          Cancel
        </Link>
      </SectionHeader>

      <CateoryForm category={category} />
    </div>
  )
}

export default EditProjectPage
