"use client"
import { Icons } from "@/components/Icons"
import { useNavbarContext } from "./NavbarContext"

type Props = {}

function NavToggler({}: Props) {
  const { isOpen, toggleNavbar } = useNavbarContext()

  return (
    <button
      type="button"
      className="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-50/10"
      aria-label="Toggle navigation"
      onClick={toggleNavbar}
    >
      <Icons.menu className="h-6 w-6 fill-neutral-50 group-hover:fill-neutral-400" />
    </button>
  )
}

export default NavToggler
