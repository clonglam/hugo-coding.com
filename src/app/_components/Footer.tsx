import landingConfig from "@/config/landing"
import React from "react"
import AllRightReserved from "./AllRightReserved"
import SocialMediaIconsStack from "./SocialMediaIconsStack"

function Footer() {
  return (
    <footer className="border-t bg-[#121212] text-[#fff] pt-[50px] pb-[80px]">
      <div className="mx-auto container">
        <p className="text-2xl font-bold mb-2">Hugo Coding.</p>

        <div className="min-h-[180px] grid grid-cols-12 gap-y-8">
          <div className="col-span-12 lg:col-span-4 ">
            <p className="w-72 font-light leading-[150%] text-zinc-300">
              Everyone can code, even a monkey. But good programe do human
              readable code. - Write code for humans, Not for machines.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 ">
            <div className="leading-[200%] mb-3">
              <p>M: +1 604-818-2149</p>
              <p>
                {`E: `}
                <a className="" href={`mailto:${landingConfig.email}`}>
                  {landingConfig.email}
                </a>
              </p>
            </div>

            <SocialMediaIconsStack containerClassName={"-ml-3"} />
          </div>
          <div className="col-span-12 lg:col-span-4 ">{/* Empty */}</div>
        </div>

        <AllRightReserved />
      </div>
    </footer>
  )
}

export default Footer
