import FeaturedProjectsSection from "./projects/_components/FeaturedProjectsSection"
import SectionHeader from "@/components/SectionHeader"
import HeroSection from "./_components/HeroSection"
import ClientsList from "./_components/ClientsList"
import OurServices from "./_components/OurServices"
import ContactSection from "./_components/ContactSection"
import { Suspense } from "react"
import AboutSection from "./about/_components/AboutSection"

export default async function HomePage() {
  const events = [
    {
      id: 1,
      date: "1 Jan 2020",
      title: "Event One",
      description: "Description for event one.",
    },
    {
      id: 2,
      date: "1 Feb 2020",
      title: "Event Two",
      description: "Description for event two.",
    },
    // ... other events
  ]
  return (
    <div className="">
      <HeroSection />

      <FeaturedProjectsSection />

      {/* <ClientsList /> */}

      <OurServices />

      {/* <div className="container">
        <SectionHeader
          header="Posts"
          description="We believe technology is the answer to the world’s greatest challenges. It’s also the cause, so we find ourselves in bit of a catch 22 situation."
        />
      </div> */}
      <ContactSection />

      {/* <div className="py-[100px]">
        <CategorySelctor categories={categories} selectedCategory={null} />
        <ProjectGrid projects={projects} />
      </div> */}
      {/* <Timeline events={events} /> */}
    </div>
  )
}
