import React from "react"
import ContactInfo from "../../../_components/ContactInfo"
import ContactForm from "@/app/_components/ContactForm"

function ContactSection() {
  return (
    <section aria-label="Contact Form" className="container">
      <div className="grid gap-x-8 gap-y-5 grid-cols-3">
        <div className="col-span-3 md:col-span-1 ">
          <ContactInfo />
        </div>

        <div className="col-span-3 md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
