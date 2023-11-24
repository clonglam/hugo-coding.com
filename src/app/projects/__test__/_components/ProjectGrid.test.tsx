import { render } from "@testing-library/react"
import ProjectGrid from "../../_components/ProjectGrid"
import { SelectProject } from "@/db/schema"

const renderComponent = () => {
  const projects: SelectProject[] = []
  render(<ProjectGrid projects={projects} />)
  return { projects }
}

it("should render 2 images cards in grid", () => {
  renderComponent()
})
