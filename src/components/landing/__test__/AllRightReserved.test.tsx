import { render, screen } from "@testing-library/react"
import AllRightReserved from "../AllRightReserved"

describe("Rendering Test", () => {
  it("should render the AllRightReserved Section", () => {
    render(<AllRightReserved />)

    expect(screen.getByRole("link", { name: /hugo lam/i })).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://github.com/clonglam/hugo-coding.com"
    )
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument()
  })
})
