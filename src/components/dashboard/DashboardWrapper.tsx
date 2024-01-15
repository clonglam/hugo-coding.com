import React, { ReactNode } from "react"
import SectionHeader from "../SectionHeader"

type Props = {
  sectionAction: ReactNode
  children: ReactNode
  header: string
  description: string
}

function DashboardWrapper({
  header,
  description,
  sectionAction,
  children,
}: Props) {
  return (
    <section>
      <div className="flex justify-between items-center mb-5 pb-3 border-b">
        <div>
          <h1 className="font-semibold w-[480px] mb-2 leading-tight">
            {header}
          </h1>
          <p className="max-w-xl text-zinc-500 text-md w-[580px] leading-tight">
            {description}
          </p>
        </div>
        {sectionAction}
      </div>

      {children}
    </section>
  )
}

export default DashboardWrapper
