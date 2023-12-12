import landingConfig from "@/config/landing"
import { cn } from "@/lib/utils"
import React from "react"

type Props = {
  containerClassName?: string
  iconBackgroundClassName?: string
  iconClassName?: string
}

function SocialMediaIconsStack({
  containerClassName = "",
  iconBackgroundClassName = "",
  iconClassName = "",
}: Props) {
  return (
    <div className={cn("flex gap-x-2", containerClassName)}>
      {landingConfig.socialMedias.map(({ Icon, url, label }) => (
        <a
          key={label}
          href={url}
          aria-label={label}
          target="_blank"
          className={cn(
            "w-10 h-10 p-2 rounded-full hover:bg-slate-300/30",
            "flex justify-center items-center",
            "transition-all duration-300",
            iconBackgroundClassName
          )}
        >
          <Icon
            className={cn(
              "fill-[#ddd] stroke-none hover:fill-[#fff] w-[1.25rem] h-[1.25rem]",
              "transition-all duration-300",
              iconClassName
            )}
          />
        </a>
      ))}
    </div>
  )
}

export default SocialMediaIconsStack
