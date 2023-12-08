import { render, screen } from "@testing-library/react"

import { SelectProjectWithCategory } from "@/db/schema"
import { mockComponent } from "react-dom/test-utils"
import FeaturedCard from "../../_components/FeaturedCard"

const renderCompoent = async () => {
  const featuredProjects: SelectProjectWithCategory = {
    id: "1a312fe0-cb4e-4c6a-a3be-9e454e9b435c",
    title: "123123",
    slug: "12312",
    description: "12312312",
    year: "2022",
    client: "",
    featuredImage: "78adde0e-1e79-4845-9f0d-23cde0a5e5b3",
    demoWebsite: "",
    tags: [],
    content: "qwrqwrqwr",
    featured: false,
    createdAt: "2023-11-14T04:40:58.516Z",
    order: 0,
    projectsToCategories: [{ category: { label: "1", id: "1", slug: "1" } }],
  }
  render(<FeaturedCard project={featuredProjects} />)
  return featuredProjects
}
test("should Render Home Page with Hero Section", () => {
  // renderCompoent()
  // expect(screen.getByLabelText("hero-section")).toBeInTheDocument()
})
