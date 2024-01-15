import React, { ReactNode } from "react"

type Props = { children: ReactNode }

function FeaturedProjectSectionWrapper({ children }: Props) {
  return (
    <div className="container min-h-[480px] pt-[120px] pb-[160px]">
      <div className="mb-8">
        <h2 className="font-semibold text-3xl">Featured Projects</h2>
      </div>
      {children}
    </div>
  )
}

export default FeaturedProjectSectionWrapper
