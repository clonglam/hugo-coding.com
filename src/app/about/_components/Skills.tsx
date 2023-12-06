import React from "react"

type Props = {}

function Skills({}: Props) {
  const skills = [
    {
      category: "Programming Languages",
      skill: "JavaScript, TypeScript, Java, Python, HTML, CSS, Sass, PHP",
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
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-5 text-xl">Skills</h2>
      {skills.map(({ category, skill }, index) => (
        <div className="mb-3" key={index}>
          <h3 className="font-semibold">{category}</h3>
          <p className="w-3xl">{skill}</p>
        </div>
      ))}
    </div>
  )
}

export default Skills
