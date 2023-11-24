import { db } from "@/db"
import { medias } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getMedia(id: string) {
  return await db.query.medias.findFirst({ where: eq(medias.id, id) })
}
