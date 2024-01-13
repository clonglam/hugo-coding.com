import Footer from "@/components/landing/Footer"
import Header from "@/components/landing/Header"
import { NavbarProvider } from "@/components/landing/NavbarContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavbarProvider>
        <Header />
        <div className="bg-white pt-[120px] ease-in">{children}</div>
        <Footer />
      </NavbarProvider>
    </>
  )
}
