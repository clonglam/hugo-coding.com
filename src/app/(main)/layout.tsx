import Footer from "@/components/global/Footer"
import Header from "@/components/global/Header"
import { NavbarProvider } from "@/components/global/NavbarContext"

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
