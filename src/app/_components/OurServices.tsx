import React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

type Props = {}

function OurServices({}: Props) {
  const services = [
    {
      label: "Web Design & Development",
      content:
        "Specializing in creating visually appealing and user-friendly websites, our web design and development services focus on crafting custom solutions that align with your brand identity and business goals. We ensure responsive design, intuitive navigation, and robust functionality to deliver a seamless user experience across all devices.",
    },
    {
      label: "Search Engine Optimization",
      content:
        "Enhance your website's visibility with our expert SEO services. We employ the latest techniques and strategies in search engine optimization to improve your site's ranking, attract more traffic, and increase conversion rates. Our approach includes keyword research, content optimization, on-page and off-page SEO, and performance monitoring.",
    },
    {
      label: "E-commerce Solutions",
      content:
        "Expand your business online with our comprehensive e-commerce solutions. From setting up online storefronts to integrating secure payment gateways, we provide end-to-end services to launch and manage your online store. Our solutions are designed to offer an easy, secure, and efficient shopping experience for your customers, boosting sales and customer satisfaction.",
    },
    {
      label: "Website Maintenance & Support",
      content:
        "Keep your website up-to-date and performing at its best with our website maintenance and support services. We offer regular updates, security checks, backup services, and technical support to ensure your website remains secure, fast, and free from any downtime. Our proactive approach helps in identifying and fixing issues promptly, maintaining the overall health of your site.",
    },
  ]
  return (
    <div className="bg-zinc-100">
      <div className="container pt-[120px] pb-[160px] min-h-[480px]">
        <p className="text-small font-[500] mb-5">What I do</p>

        <div className="grid grid-cols-12 gap-y-8">
          <div className="max-w-[440px] col-span-12 lg:col-span-4">
            <h2 className="font-[500] text-4xl lg:text-5xl leading-tight tracking-tight mb-3 lg:mb-8">
              I design UI/UX and create fast and maintainable code.
            </h2>
            <p className="mb-5 lg:mb-8 text-lg">
              Offering comprehensive web development, from custom design and SEO
              to e-commerce and maintenance, we ensure a seamless, impactful
              online presence for your business.
            </p>
            <Link
              href="/projects"
              className={cn(buttonVariants({ variant: "dark", size: "lg" }))}
            >
              Know More
            </Link>
          </div>

          <div className="lg:col-span-2" />

          <div className="w-full lg:col-span-6 col-span-12 ">
            <Accordion type="single" collapsible>
              {services.map((service, index) => (
                <AccordionItem value={`service-${index}`} key={index}>
                  <AccordionTrigger>{service.label}</AccordionTrigger>
                  <AccordionContent>{service.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
