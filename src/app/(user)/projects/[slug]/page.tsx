import Image from "next/image"

import { getMedia } from "@/app/(admin)/admin/medias/mediaAction"
import { getProjectBySlugAction } from "@/app/(admin)/admin/projects/proejctsAction"
import { Mdx } from "@/components/form/mdx-components"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { notFound } from "next/navigation"
type Props = { params: { slug: string } }

async function ProjectDetailPage({ params: { slug } }: Props) {
  const project = await getProjectBySlugAction(slug)
  if (!project) return notFound()

  const image = await getMedia(project.featuredImage)

  const { title, description, client, year, content, demoWebsite } = project
  return (
    <div className="">
      <div className="lg:pt-[160px] lg:pb-[100px] container">
        <h1 className="font-[500] text-[40px] tracking-tighter leading-loose mb-2">
          {title}
        </h1>

        <div className="lg:flex block justify-between mb-9">
          <p className=" w-full lg:w-7/12 mb-5 lg:mb-0 tracking-wide leading-6 text-justify">
            {description}
          </p>
          <div className="h-full flex w-full lg:w-4/12 flex-wrap gap-y-5 flex-col lg:flex-row">
            {[
              { label: "Client", data: client },
              { label: "Project Year", data: year },
              // { label: "Project Category", data: category.name },
              { label: "Preview", data: demoWebsite },
            ].map(({ label, data }) => {
              if (data)
                return (
                  <div className="min-w-[50%]" key={label}>
                    <p className="font-[500]">{label}</p>
                    <p>{data}</p>
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
