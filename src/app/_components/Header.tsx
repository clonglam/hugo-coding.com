import React from "react"
import Link from "next/link"
import landingConfig from "@/config/landing"
import NavToggler from "@/app/_components/NavToggler"
import MainNav from "./MainNav"

function Header() {
  return (
    <header
      className="relative bg-zinc-950 z-40"
      style={{ mixBlendMode: "difference", color: "white" }}
    >
      <div className="container navbar absolute left-0 right-0 top-2 z-40 pt-14">
        <div className="flex items-center justify-between">
          <Link aria-label="Home" href="/">
            <span className="text-lg font-semibold">Hugo Coding.</span>
          </Link>

          <div className="flex items-center gap-x-8 ">
            <Link
              className="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-50 text-black hover:bg-neutral-100/80"
              href="/contact"
            >
              <span className="relative">Contact us</span>
            </Link>

            <NavToggler />
          </div>
        </div>
      </div>
      <MainNav navLinks={landingConfig.navLinks} />
    </header>
  )
}

export default Header
