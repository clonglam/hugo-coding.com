import landingConfig from "@/config/landing"
import React from "react"

type Props = {}

function ContactInfo({}: Props) {
  return (
    <div>
      <div>
        <h3 className="font-semibold">Contact info:</h3>
        <p>Email: hello@hugo-coding.com</p>
        <p>Phone: +1 604-818-2149</p>
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
  )
}

export default ContactInfo
