import React from "react"
import AboutSection from "./_components/AboutSection"
import ContactSection from "../_components/ContactSection"
import ContactInfo from "../contact/_component/ContactInfo"
import ContactForm from "../contact/_component/ContactForm"
import Skills from "./_components/Skills"
import Experience from "./_components/Experience"
import Resume from "./_components/Resume"

type Props = {}

function AboutPage({}: Props) {
  return (
    <div className="container">
      <AboutSection />
      <Experience />
      <Skills />
      <Resume />

      <section aria-label="Contact" className="container">
        <div className="pt-[100px] pb-[180px]">
          <h1 className="max-w-3xl">
            For any enquiries, or to say hello, get in touch
          </h1>
        </div>

        <div className="grid gap-x-8 gap-y-5 grid-cols-3">
          <div className="col-span-3 md:col-span-1 ">
            <ContactInfo />
          </div>

          <div className="col-span-3 md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
