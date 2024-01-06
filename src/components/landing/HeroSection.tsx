import React from "react"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import landingConfig from "@/config/landing"
import { cn } from "@/lib/utils"
import SocialMediaIconsStack from "./SocialMediaIconsStack"

type Props = {}

function HeroSection({}: Props) {
  return (
    <section className="flex flex-wrap pt-8 pb-12 items-center justify-center container">
      <div className=" lg:order-1 order-3 grow w-full lg:w-1/2">
        <p className="text-lg font-semibold mb-2" aria-label="section-header">
          Hugo Lam
        </p>
        <h1 className="mb-6 text-3xl">
          I’m Front-end Developer based in Vancourver.
        </h1>
        <p className="max-w-[520px] leading-7 mb-8">
          Proficient Software Engineer with a passion for developing innovative
          front-end solutions, excelling in integrating cutting-edge
          technologies for enhanced user experiences.
        </p>

        <Link
          href="/about"
          aria-label="Know More"
          className={cn(buttonVariants({ variant: "dark", size: "lg" }))}
        >
          Know More
        </Link>
      </div>

      <div className="order-2 grow block"></div>

      <div className="relative w-full  flex justify-center lg:w-auto lg:basis-auto order-1 lg:order-3 lg:pl-[30px] lg:block">
        <div className="relative w-[180px] h-[180px] block ">
          <Image
            className="object-cover aspect-square rounded-full"
            width={180}
            height={180}
            src="/assets/hugo-image.webp"
            alt=""
          />
        </div>
      </div>

      <div className="w-full lg:w-2/12 lg:col-span-2 text-center order-2 lg:order-4 mt-8 lg:mt-0 grow ">
        <SocialMediaIconsStack
          containerClassName="flex flex-row lg:flex-col gap-x-8 gap-y-5 items-end justify-center"
          iconClassName="fill-black hover:fill-[#121212]"
        />
      </div>
    </section>
  )
}

export default HeroSection
