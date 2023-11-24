import React, { ReactNode } from "react"

type Props = {
  children?: ReactNode
  header: string
  description: string
}

function SectionHeader({ children, header, description }: Props) {
  return (
    <div className="flex justify-between items-center mb-3">
      <div>
        <h1 className="font-semibold w-[480px] mb-2 leading-tight">{header}</h1>
        <p className="max-w-xl text-zinc-500 text-md w-[580px]  leading-tight">
          {description}
        </p>
      </div>
      {children}
    </div>
  )
}

export default SectionHeader
