import React from "react"

import ContactInfo from "../../_components/ContactInfo"
import SectionHeader from "@/components/SectionHeader"
import ContactForm from "@/app/_components/ContactForm"

function ContactPage() {
  return (
    <div className="">
      <div className="container">
        <SectionHeader header="Contact me" description="" />
      </div>

      <div className="py-[100px] mb-[80px] bg-zinc-50">
        <div className="container">
          <h1 className="max-w-xl ">
            For any enquiries, or to say hello, get in touch
          </h1>
        </div>
      </div>

      <div className="grid gap-x-8 gap-y-5 grid-cols-3 container">
        <div className="col-span-3 md:col-span-1 ">
          <ContactInfo />
        </div>

        <div className="col-span-3 md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
