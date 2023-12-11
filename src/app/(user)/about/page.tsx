import React from "react"
import AboutSection from "./_components/AboutSection"

import SkillsSection from "./_components/SkillsSection"
import Experience from "./_components/Experience"
import Resume from "./_components/Resume"

import ContactBanner from "./_components/ContactBanner"
import ContactSection from "../contact/_component/ContactSection"
import { skills } from "@/config/skills"

type Props = {}

function AboutPage({}: Props) {
  return (
    <div>
      <div className="container mb-8">
        <AboutSection />
        <Experience />
        <SkillsSection skills={skills} />
        <Resume />
      </div>

      <ContactBanner
        callForAction={`For any enquiries, or to say hello, get in touch`}
      />

      <ContactSection />
    </div>
  )
}

export default AboutPage
