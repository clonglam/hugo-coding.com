import { render, screen } from "@testing-library/react"
import SkillsSection from "../_components/SkillsSection"

const renderComponent = () => {
  const skills = [
    {
      category: "Programming Languages",
      skill: "JavaScript, TypeScript, Java, Python, HTML, CSS, Sass, PHP",
    },
    {
      category: "Frameworks & Libraries",
      skill:
        "React, NextJs, Spring Boot, Express, React Native, Tailwind, Redux, JPA",
    },
    {
      category: "Tools & Platforms",
      skill:
        "Git, GitHub, AWS, Vercel, WordPress, Docker, Webpack, RTL, Storybook, Figma",
    },
  ]

  render(<SkillsSection skills={skills} />)
  return { skills }
}

it("should render Component Skills Section ", () => {
  const { skills } = renderComponent()

  expect(screen.getByText("Skills")).toBeInTheDocument()

  const sections = screen.getAllByRole("region")

  expect(sections.length).toBe(skills.length)

  skills.forEach(({ skill, category }, index) => {
    expect(sections[index]).toHaveTextContent(category)
    expect(sections[index]).toHaveTextContent(skill)
  })
})
