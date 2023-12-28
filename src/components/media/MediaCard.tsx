import React from "react"
import Image from "next/image"

type MediaProps = Readonly<{
  name: string
  imageKey: string
}>

function MediaCard({ imageKey, name }: MediaProps) {
  return (
    <div className="">
      <Image
        src={"https://hugo-coding.s3.us-west-1.amazonaws.com/" + imageKey}
        alt={name}
        width={580}
        height={260}
        priority={true}
      />
    </div>
  )
}

export default MediaCard
