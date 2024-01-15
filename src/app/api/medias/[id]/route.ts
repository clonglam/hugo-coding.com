import { NextRequest, NextResponse } from "next/server"

import { db } from "@/db"

import { eq } from "drizzle-orm"
import { medias } from "@/db/schema"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const media = await db.query.medias.findFirst({
    where: eq(medias.id, params.id),
  })

  if (!media)
    return NextResponse.json(
      {
        message: "Media not found.",
      },
      { status: 404 }
    )

  return NextResponse.json(
    {
      data: media,
      preview: "https://hugo-coding.s3.us-west-1.amazonaws.com/" + media.key,
    },
    { status: 201 }
  )
}
