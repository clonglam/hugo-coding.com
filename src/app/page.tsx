import FeaturedProjectsSection from "./(user)/projects/_components/FeaturedProjectsSection"
import ContactSection from "./_components/ContactSection"
import HeroSection from "./_components/HeroSection"
import OurServices from "./_components/OurServices"

export default async function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedProjectsSection />
      <OurServices />
      <ContactSection />
    </div>
  )
}
