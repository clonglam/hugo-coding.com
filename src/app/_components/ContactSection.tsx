import { Icons } from "@/components/Icons"
import Link from "next/link"
import React from "react"

type Props = {}

function ContactSection({}: Props) {
  return (
    <Link href={"/contact"}>
      <div className="border-t pt-[100px] pb-[180px] container mt-8 flex items-center justify-between group">
        <div className="max-w-1/2  duration-300 transition-all group-hover:-translate-y-3 overflow-hidden">
          <p className="font-[600] text-[68px] cursor-pointer ">{`Let's work togetgher`}</p>
          <div className="border-t-4 border-black  duration-300 transition-all group-hover:-translate-x-0 -translate-x-[100%]"></div>
        </div>
        <div>
          <Icons.rightArrow
            className="group-hover:translate-x-8 transition-all duration-300"
            size={60}
          />
        </div>
      </div>
    </Link>
  )
}

export default ContactSection
