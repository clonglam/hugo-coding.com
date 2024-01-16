import SectionHeader from "@/components/main/SectionHeader"
import CategoryForm from "@/components/dashboard/categories/CategoryForm"

type Props = {}

function NewCategoryPage({}: Props) {
  return (
    <div>
      <SectionHeader
        header="New Category"
        description="Type the Category details below the form."
      />

      <CategoryForm />
    </div>
  )
}

export default NewCategoryPage
