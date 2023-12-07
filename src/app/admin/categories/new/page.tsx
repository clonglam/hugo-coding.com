import SectionHeader from "@/components/SectionHeader"
import CategoryForm from "../_components/CategoryForm"

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
