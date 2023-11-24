import { db } from "@/db"
import { categories } from "@/db/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"
import CateoryForm from "../_components/CategoryForm"
import SectionHeader from "@/components/SectionHeader"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

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
