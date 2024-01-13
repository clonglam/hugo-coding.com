import React from "react"
import AboutSection from "@/components/about/AboutSection"

import ContactSection from "@/components/contact/ContactSection"
import { skills } from "@/config/skills"
import Experience from "@/components/about/Experience"
import SkillsSection from "@/components/about/SkillsSection"
import Resume from "@/components/about/Resume"
import ContactBanner from "@/components/about/ContactBanner"

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
