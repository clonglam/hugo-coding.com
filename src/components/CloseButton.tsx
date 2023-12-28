"use client"
import { useRouter } from "next/navigation"
import React from "react"

type Props = {}

function CloseButton({}: Props) {
  const router = useRouter()
  return (
    <button className="absolute right-5 top-5" onClick={() => router.back()}>
      X
    </button>
  )
}

export default CloseButton
