import "./globals.css"

import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"

import Gtag from "@/lib/gtag"
import { NavbarProvider } from "@/components/landing/NavbarContext"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import { Inter, Roboto_Mono } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hugo Coding",
  description: "Hugo Coding | Frontend Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Gtag />
      <SpeedInsights />
      <body className="bg-black">
        <NavbarProvider>
          <Header />
          <div className="bg-white pt-[120px] ease-in">{children}</div>
          <Footer />
        </NavbarProvider>
      </body>
    </html>
  )
}
