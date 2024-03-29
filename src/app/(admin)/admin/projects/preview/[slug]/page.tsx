import Image from "next/image"

import { getMedia } from "@/actions/mediaAction"
import { getProjectBySlugAction } from "@/actions/proejctsAction"
import { Mdx } from "@/components/mdx/mdx-components"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { notFound } from "next/navigation"
type Props = { params: { slug: string } }

async function ProjectDetailPage({ params: { slug } }: Props) {
  const project = await getProjectBySlugAction(slug)
  if (!project) return notFound()

  const image = await getMedia(project.featuredImage)

  const { title, description, client, year, content, demoWebsite, tags } =
    project

  return (
    <div className="">
      <div className="lg:pt-[160px] lg:pb-[100px] container">
        <div className="mb-3">
          <h1 className="font-[500] text-[40px] tracking-tighter">{title}</h1>

          <div className="text-zinc-400">
            {tags?.map((tag, index) => (
              <span className="" key={tag}>
                {tag}
                {index < tags.length - 1 && <span>{` / `}</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:flex block justify-between mb-9">
          <p className=" w-full lg:w-7/12 mb-5 lg:mb-0 tracking-wide leading-6 text-justify">
            {description}
          </p>
          <div className="h-full flex w-full lg:w-4/12 flex-wrap gap-y-5 flex-col lg:flex-row">
            {[
              { label: "Client", data: client },
              { label: "Project Year", data: year },
              { label: "Preview", data: demoWebsite },
            ].map(({ label, data }) => {
              if (data)
                return (
                  <div className="min-w-[50%]" key={label}>
                    <p className="font-[500]">{label}</p>
                    {label === "Preview" ? (
                      <a
                        href={data}
                        className="underline text-link"
                        target="_blank"
                      >
                        {data}
                      </a>
                    ) : (
                      <p>{data}</p>
                    )}
                  </div>
                )
            })}
          </div>
        </div>
      </div>

      <div className="relative w-full mb-10 lg:container">
        <Image
          src={
            image
              ? "https://hugo-coding.s3.us-west-1.amazonaws.com/" + image.key
              : "assets/placeholder.png"
          }
          alt={image ? image.name : "placeholder"}
          width={1920}
          height={720}
          className="object-cover object-center"
        />
      </div>

      <div className="container">
        <Mdx source={content} />

        <div className="mt-[120px] mb-[100px] mx-auto flex justify-center items-center">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({
                variant: "outline",
                className: "text-xl px-[80px] py-[38px]",
              })
            )}
          >
            Contact me
          </Link>
        </div>

        <div className="border-t-2 pt-[80px] pb-[130px]">
          {/* <MoreProjects projects={otherProjects} /> */}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
