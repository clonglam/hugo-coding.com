import { render, screen } from "@testing-library/react"
import HeroSection from "./HeroSection"

describe("Rendering Test", () => {
  it("should render the Hero Section", () => {
    render(<HeroSection />)

    expect(screen.getByLabelText("hero-section")).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "know-more-button" })
    ).toBeInTheDocument()

    // expect(screen.getByText("")).toBeInTheDocument()
  })
})
