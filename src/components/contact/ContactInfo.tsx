import landingConfig from "@/config/landing"
import React from "react"
import SocialMediaIconsStack from "../landing/SocialMediaIconsStack"

type Props = {}

function ContactInfo({}: Props) {
  return (
    <div>
      <div className="mb-5">
        <h3 className="font-semibold">Contact info:</h3>

        <p>
          {`Email: `}
          <a className="hover:underline" href={`mailto:${landingConfig.email}`}>
            {landingConfig.email}
          </a>
        </p>

        <p>Phone: +1 604-818-2149</p>
      </div>
      <SocialMediaIconsStack
        iconClassName="fill-black hover:fill-[#3e3e3e]"
        containerClassName={"-ml-3"}
      />
    </div>
  )
}

export default ContactInfo
