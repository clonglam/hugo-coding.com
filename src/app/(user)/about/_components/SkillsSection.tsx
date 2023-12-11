import { skillType } from "@/config/skills"
import React from "react"

type SkillsSectionProps = {
  skills: skillType[]
}

function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-5 text-xl">Skills</h2>
      {skills.map(({ category, skill }, index) => (
        <section aria-label={skill} className="mb-3" key={index}>
          <h3 className="font-semibold">{category}</h3>
          <p className="w-3xl">{skill}</p>
        </section>
      ))}
    </div>
  )
}

export default SkillsSection
