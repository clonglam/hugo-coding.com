import React from "react"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import landingConfig from "@/config/landing"

type Props = {}

function AboutSection({}: Props) {
  return (
    <section className="flex flex-wrap pt-8 pb-12 items-center justify-center container">
      <div className=" lg:order-1 order-3 grow w-full lg:w-1/2">
        <p className="text-lg font-semibold mb-2" aria-label="section-header">
          Hugo Lam
        </p>
        <h1 className="mb-6 text-4xl" data-aos="fade-up">
          I’m Front-end Developer based in Vancourver.
        </h1>
        <p className="">
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>
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
        <div className="flex flex-row lg:flex-col gap-x-8 gap-y-5 items-end justify-center">
          {landingConfig.socialMedias.map(({ url, label, Icon }, index) => (
            <a
              key={label}
              target="_blank"
              rel="noreferrer"
              href={url}
              className="w-10 h-10 hover:bg-slate-300/30 rounded-full p-2 flex justify-center items-center transition-all duration-300"
            >
              <Icon className=" h-4 w-4 fill-black" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
