import React from "react"

function FeaturedCardLoader() {
  return (
    <div className=" rounded-md w-full">
      <div className="animate-pulse">
        <div className=" rounded bg-zinc-200 h-[320px] w-full mb-3"></div>

        <div className="flex-1 space-y-3 py-1 ">
          <div className="h-5 bg-zinc-200 rounded w-1/2"></div>

          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-zinc-200 rounded col-span-2"></div>
              <div className="h-2 bg-zinc-200 rounded col-span-1"></div>
              <div className="h-2 bg-zinc-200 rounded col-span-1"></div>
              <div className="h-2 bg-zinc-200 rounded col-span-2"></div>
            </div>
            <div className="h-2 bg-zinc-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCardLoader
