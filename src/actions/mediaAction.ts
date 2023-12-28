"use server"

import { db } from "@/db"
import { env } from "@/env.mjs"
import {
  InsertMedia,
  deleteMediaSchema,
  insertMediaSchema,
  medias,
} from "@/db/schema/medias"
import s3Client from "@/lib/s3Client"
import { DeleteObjectCommand } from "@aws-sdk/client-s3"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"
import { checkCurrentUser } from "@/lib/auth"
import { currentUser } from "@clerk/nextjs/server"

export async function getMedia(id: string) {
  return await db.query.medias.findFirst({ where: eq(medias.id, id) })
}

export async function getMedias(limit?: number) {
  return await db.query.medias.findMany({ limit })
}

export async function deleteMedia(id: string) {
  const user = await currentUser()
  if (!user)
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 })

  const validatedFields = deleteMediaSchema.safeParse({ id })
  if (!validatedFields.success) {
    return NextResponse.json(
      { error: validatedFields.error.flatten().fieldErrors },
      { status: 500 }
    )
  }

  const media = await getMedia(id)

  if (!media)
    return NextResponse.json(
      { error: `Error! Media [${id}] is not existing.` },
      { status: 500 }
    )

  const data = await s3Client.send(
    new DeleteObjectCommand({ Bucket: env.S3_BUCKET, Key: media.key })
  )
  console.log("s3 Response", data)

  if (data) {
    await db.delete(medias).where(eq(medias.id, id))

    revalidatePath("/admin/medias")
  }
}

export async function addMediaAction(media: InsertMedia) {
  await checkCurrentUser()

  const validatedFields = insertMediaSchema.safeParse(media)

  if (!validatedFields.success) {
    return NextResponse.json(
      { error: validatedFields.error.flatten().fieldErrors },
      { status: 500 }
    )
  }

  return NextResponse.json({ message: "OK" }, { status: 200 })
}
