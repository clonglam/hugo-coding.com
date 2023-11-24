"use client"
import landingConfig from "@/config/landing"
import { cn } from "@/lib/utils"
import { NavLinks } from "@/types"
import Link from "next/link"
import { useNavbarContext } from "./NavbarContext"

type Props = { navLinks: NavLinks[] }

function MainNav({ navLinks }: Props) {
  const { isOpen, toggleNavbar } = useNavbarContext()

  return (
    <div
      className={cn(
        isOpen ? "sm:h-[800px] h-[100vh]" : "h-0",
        "overflow-hidden transition-all duration-500"
      )}
    >
      <nav className="pt-[180px] container">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-px font-display text-5xl font-medium tracking-tight ">
            {navLinks.map(({ label, href }) => (
              <Link
                className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
                key={label}
                href={href}
                onClick={() => toggleNavbar()}
              >
                {label}
                <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
                <span className="absolute inset-y-0 -z-10 border-y w-screen group-odd:right-0 group-even:left-0 border-neutral-800"></span>
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-px ">
          <div />
          <div className="py-16 pr-16">
            <h2 className="tracking-tight uppercase text-sm font-semibold">
              Connect Me
            </h2>

            <div className="flex flex-row gap-x-5 items-end justify-center">
              {landingConfig.socialMedias.map(({ url, label, Icon }, index) => (
                <a
                  key={label}
                  target="_blank"
                  rel="noreferrer"
                  href={url}
                  className="w-10 h-10 hover:bg-slate-300/30 rounded-full p-2 flex justify-center items-center transition-all duration-300"
                >
                  <Icon className=" h-4 w-4 fill-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MainNav
