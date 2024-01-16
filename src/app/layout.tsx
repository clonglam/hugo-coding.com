import "./globals.css"

import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

import Gtag from "@/lib/gtag"
import { Inter, Roboto_Mono } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

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
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
