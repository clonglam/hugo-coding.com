import React from "react"
import ContactForm from "./_component/ContactForm"

import ContactInfo from "./_component/ContactInfo"

type Props = {}

function ContactPage({}: Props) {
  return (
    <section aria-label="Contact" className="container min-h-[80vh]">
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
  )
}

export default ContactPage
