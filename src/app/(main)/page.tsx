import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import HeroSection from "@/components/landing/HeroSection"
import OurServices from "@/components/landing/OurServices"
import FeaturedProjectsSection from "@/components/projects/FeaturedProjectsSection"
import { Suspense } from "react"

export default async function HomePage() {
  return (
    <div className="">
      <HeroSection />

      <Suspense fallback={<>Loading</>}>
        <FeaturedProjectsSection />
      </Suspense>
      <OurServices />

      <div className=" border-t pt-8 min-h-[450px] container" id="contact">
        <h2 className="font-bold text-3xl mb-5">Contact Me</h2>

        <div className="grid gap-x-8 gap-y-5 grid-cols-3">
          <div className="col-span-3 md:col-span-1 ">
            <ContactInfo />
          </div>

          <div className="col-span-3 md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
