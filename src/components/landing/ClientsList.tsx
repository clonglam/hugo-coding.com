import React from "react"
import Image from "next/image"
import Carousel from "@/components/Carousel"

type Props = {}

function ClientsList({}: Props) {
  const clientsLists = [
    {
      logoUrl: "/assets/hkbu_logo.svg",
      label: "Hong Kong Baptist University",
    },
    {
      logoUrl: "/assets/hkbu_logo.svg",
      label: "Hong Kong Baptist University",
    },
    {
      logoUrl: "/assets/hkbu_logo.svg",
      label: "Hong Kong Baptist University",
    },
    {
      logoUrl: "/assets/hkbu_logo.svg",
      label: "Hong Kong Baptist University",
    },
    {
      logoUrl: "/assets/family_fund_logo.png",
      label: "Hong Kong Baptist University",
    },
    {
      logoUrl: "/assets/hkbu_logo.svg",
      label: "Hong Kong Baptist University",
    },
  ]
  return (
    <div className="bg-[#0A0A0A] min-h-[280px] py-8 flex gap-x-[32px] px-[48px] items-center">
      <Carousel clients={clientsLists} />
    </div>
  )
}

export default ClientsList
