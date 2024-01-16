import { getMedias } from "@/actions/mediaAction"
import Image from "next/image"
import Link from "next/link"
import SectionHeader from "../../../../components/main/SectionHeader"
import { buttonVariants } from "../../../../components/ui/button"
import { Icons } from "@/components/global/Icons"

type Props = {}

async function MediasPage({}: Props) {
  const medias = await getMedias()

  return (
    <div>
      <SectionHeader
        header="Medias"
        description="You can add/edit the medias from the dashboard"
      >
        <Link
          href="/admin/medias/new"
          className={buttonVariants({ variant: "dark" })}
        >
          Upload Media
        </Link>
      </SectionHeader>

      <div
        className="grid max-w-[1200px] mx-auto gap-3 gap-y-5"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        }}
      >
        <Link
          href={"/admin/medias/new"}
          className=" h-[120px] border-2 border-dashed border-zinc-400 text-zinc-400 flex flex-col justify-center items-center"
        >
          <Icons.add size={32} />
          <p className="text-sm">Add media</p>
        </Link>

        {medias.map((media) => (
          <Link
            href={`/admin/medias/${media.id}`}
            className="object-contain object-center group relative h-[120px]"
            key={media.key}
          >
            <Image
              src={
                "https://hugo-coding.s3.us-west-1.amazonaws.com/" + media.key
              }
              alt={media.name}
              fill
              sizes="(min-width: 480px) 50vw, 100vw"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
              className="group-hover:opacity-30 transition-all duration-300 object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MediasPage
