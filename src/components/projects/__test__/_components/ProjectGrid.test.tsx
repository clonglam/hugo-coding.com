import { render } from "@testing-library/react"

import { SelectProject } from "@/db/backupSchema"
import ProjectGrid from "../../ProjectGrid"

const renderComponent = () => {
  const projects: SelectProject[] = []
  render(<ProjectGrid projects={projects} />)
  return { projects }
}

it("should render 2 images cards in grid", () => {
  renderComponent()
})
