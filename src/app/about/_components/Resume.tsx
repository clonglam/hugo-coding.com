import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

type Props = {}

function Resume({}: Props) {
  return (
    <Link
      href="/assets/resume.pdf"
      target="_top"
      download
      className={cn(buttonVariants())}
    >
      Resume
    </Link>
  )
}

export default Resume
