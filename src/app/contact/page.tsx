import React from "react"
import ContactForm from "./_component/ContactForm"
import landingConfig from "@/config/landing"

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
          <div>
            <h3>Contact info:</h3>
            <p>Email: hello@hugo-coding.com</p>
            <p>Phone: +1 454-4545-4545</p>
          </div>

          <div className="flex gap-x-3 ">
            {landingConfig.socialMedias.map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                className=" hover:bg-slate-300/30 w-10 h-10 rounded-full flex justify-center items-center transition-all duration-300 p-2"
              >
                <Icon className="fill-black stroke-none w-6 h-6 hover:fill-[#3e3e3e]" />
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-3 md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactPage
