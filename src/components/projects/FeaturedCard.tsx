import { Icons } from "@/components/Icons"
import { db } from "@/db"
import { SelectProjectWithCategory, medias } from "@/db/backupSchema"
import { eq } from "drizzle-orm"
import Image from "next/image"
import Link from "next/link"

type Props = { project: SelectProjectWithCategory }

async function FeaturedCard({ project }: Props) {
  const image = await db.query.medias.findFirst({
    where: eq(medias.id, project.featuredImage),
  })

  return (
    <div className="group">
      <div className="relative overflow-hidden lg:mb-3 mb-2 object-center">
        <div className="z-1 flex justify-center items-center absolute w-full top-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-400">
          <p className="-translate-x-10 group-hover:translate-x-0 transition-all duration-300">
            View
          </p>
          <Icons.add className="translate-x-10 group-hover:translate-x-0 transition-all duration-300" />
        </div>

        <Link href={`/projects/${project.slug}`}>
          <Image
            className="group-hover:scale-[1.05] group-hover:opacity-20 transition-all duration-500 object-cover w-full h-[320px] "
            src={
              image
                ? "https://hugo-coding.s3.us-west-1.amazonaws.com/" + image.key
                : "assets/placeholder.png"
            }
            alt={image ? image.name : "placeholder"}
            width={580}
            height={260}
            priority={true}
          />
        </Link>
      </div>

      <div className="group-hover:pt-0 pt-3 transition-all duration-500">
        <h2>
          <span className="font-semibold text-zinc-800">{project.title}</span>
          <span className="text-zinc-400 text-sm">
            {` / `}
            {project.projectsToCategories.length > 0
              ? project.projectsToCategories[0].category.label
              : "Project"}
          </span>
        </h2>

        <p className=" line-clamp-3 text-ellipsis mb-3 leading-[20px] h-[60px] max-w-lg text-zinc-800">
          {project.description}
        </p>

        <div className="mb-3 group flex items-center overflow-hidden">
          <Link href={`/projects/${project.slug}`}>
            <p>
              <span>View Project</span>
              <span className="pl-3 group-hover:pl-5  transition-all duration-300">{`>`}</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard
