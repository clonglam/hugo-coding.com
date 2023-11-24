import landingConfig from "@/config/landing"
import React from "react"

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="border-t  min-h-[280px] bg-[#121212] text-[#fff]">
      <div className="mx-auto flex justify-between py-8 container">
        <div className="text-2xl">
          <span className="mr-5 font-bold">Email</span>
          <div className="overflow-x-hidden group">
            <a className="" href={`mailto:${landingConfig.email}`}>
              {landingConfig.email}
            </a>
            <div className="border-b border-solid border-black group-hover:translate-x-0 -translate-x-[100%] transition-transform"></div>
          </div>
        </div>

        <div className="flex gap-x-3">
          {landingConfig.socialMedias.map(({ Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              className=" hover:bg-slate-300/30 w-10 h-10 rounded-full flex justify-center items-center transition-all duration-300 p-2"
            >
              <Icon className="fill-[#ddd] stroke-none w-6 h-6 hover:fill-[#fff]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
