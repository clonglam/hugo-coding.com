import React from "react"
import AboutSection from "./_components/AboutSection"

import Skills from "./_components/Skills"
import Experience from "./_components/Experience"
import Resume from "./_components/Resume"
import ContactInfo from "../contact/_component/ContactInfo"
import ContactForm from "../contact/_component/ContactForm"
import ContactBanner from "./_components/ContactBanner"
import ContactSection from "../contact/_component/ContactSection"

type Props = {}

function AboutPage({}: Props) {
  return (
    <div>
      <div className="container mb-8">
        <AboutSection />
        <Experience />
        <Skills />
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
