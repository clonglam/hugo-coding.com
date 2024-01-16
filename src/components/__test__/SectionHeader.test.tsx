import { render, screen } from "@testing-library/react"
import SectionHeader from "../main/SectionHeader"

it("should render Component Section Header", () => {
  render(
    <SectionHeader
      header={"Section Header"}
      description={"section description."}
    />
  )
  expect(screen.getByText("Section Header")).toBeInTheDocument()
  expect(screen.getByText("section description.")).toBeInTheDocument()
})
