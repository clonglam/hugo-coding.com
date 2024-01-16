import "server-only"

import { Icons } from "@/components/global/Icons"
import { db } from "@/db"

import { eq } from "drizzle-orm"
import Image from "next/image"
import Link from "next/link"
import { medias } from "@/db/schema/medias"

type Props = {
  id: string
  title: string
  slug: string
  priority: boolean
  featuredImage: string
}

async function ProjectCard({
  id,
  title,
  slug,
  featuredImage,
  priority,
}: Props) {
  const image = await db.query.medias.findFirst({
    where: eq(medias.id, featuredImage),
  })

  return (
    <div className="group transition-transform" aria-label="project-card">
      <Link href={`/projects/${slug}`}>
        <div className="relative overflow-hidden lg:mb-3 mb-2 object-center">
          <div className="z-1 flex justify-center items-center absolute w-full top-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-400">
            <p className="-translate-x-10 group-hover:translate-x-0 transition-all duration-300">
              View
            </p>
            <Icons.add className="translate-x-10 group-hover:translate-x-0 transition-all duration-300" />
          </div>
          <Image
            className="group-hover:scale-[1.05] group-hover:opacity-20 transition-all duration-500 object-cover w-full h-[260px] "
            src={
              image
                ? "https://hugo-coding.s3.us-west-1.amazonaws.com/" + image.key
                : "assets/placeholder.png"
            }
            alt={image ? image.name : "placeholder"}
            width={580}
            height={260}
            priority={priority}
          />
        </div>

        <p
          aria-label="project-title"
          className="text-lg transition-transform translate-y-0 group-hover:-translate-y-2 duration-300"
        >
          {title}
        </p>
      </Link>
    </div>
  )
}

export default ProjectCard
