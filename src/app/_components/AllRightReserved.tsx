import React from "react"

type Props = {}

function AllRightReserved({}: Props) {
  return (
    <div className="text-sm text-zinc-100 float-right">
      © All rights reserved. Made by{" "}
      <a className="cursor-pointer underline hover:text-zinc-200">Hugo Lam</a>
    </div>
  )
}

export default AllRightReserved
