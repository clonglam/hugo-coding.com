import React from "react"

type Props = {
  callForAction: string
}

function ContactBanner({ callForAction }: Props) {
  return (
    <section aria-label="ContactBanner" className="bg-zinc-100">
      <div className="py-[120px] container mb-[80px]">
        <h1 className="max-w-3xl">{callForAction}</h1>
      </div>
    </section>
  )
}

export default ContactBanner
