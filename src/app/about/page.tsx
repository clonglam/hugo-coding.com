import React from "react"
import AboutSection from "./_components/AboutSection"
import ContactSection from "../_components/ContactSection"

type Props = {}

function AboutPage({}: Props) {
  return (
    <div className="container">
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default AboutPage
