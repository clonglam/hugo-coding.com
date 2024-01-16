import * as React from "react"
import Image, { ImageProps } from "next/image"
import type { MDXComponents } from "mdx/types"
import { Suspense } from "react"
import { MDXRemote } from "next-mdx-remote/rsc"
import "@/styles/himo/components/mdx.scss"
import { cn } from "@/lib/utils"
import { MdxCard } from "./mdx-card"

const components: MDXComponents = {
  h1: ({ className, ...props }) => <h1 className={cn(className)} {...props} />,
  h2: ({ className, ...props }) => <h2 className={cn(className)} {...props} />,
  h3: ({ className, ...props }) => <h3 className={cn(className)} {...props} />,
  h4: ({ className, ...props }) => <h4 className={cn(className)} {...props} />,
  h5: ({ className, ...props }) => <h5 className={cn(className)} {...props} />,
  h6: ({ className, ...props }) => <h6 className={cn(className)} {...props} />,
  a: ({ className, ...props }) => <a className={cn(className)} {...props} />,
  p: ({ className, ...props }) => <p className={cn(className)} {...props} />,
  ul: ({ className, ...props }) => <ul className={cn(className)} {...props} />,
  ol: ({ className, ...props }) => <ol className={cn(className)} {...props} />,
  li: ({ className, ...props }) => <li className={cn(className)} {...props} />,
  blockquote: ({ className, ...props }) => (
    <blockquote className={cn(className)} {...props} />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      {...(props as ImageProps)}
      width={400}
      height={300}
      className="object-contain"
      alt={alt || "Image"}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-white py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  Image,
  TwoRowImage: ({ className, images, ...props }) => (
    <div className="grid grid-cols-12 gap-8">
      {images.map((image: any, index: number) => (
        <div
          className="relative lg:col-span-6 col-span-12 h-[380px]"
          key={index}
        >
          <Image src={image.url} alt="" fill={true} className="object-cover" />
        </div>
      ))}
    </div>
  ),
  // Callout,
  Card: MdxCard,
}

export function Mdx(props: { source: string; components?: MDXComponents }) {
  return (
    <div className="mdx-container">
      <Suspense fallback={<>Loading...</>}>
        <MDXRemote
          {...props}
          components={{ ...components, ...(props.components || {}) }}
        />
      </Suspense>
    </div>
  )
}
