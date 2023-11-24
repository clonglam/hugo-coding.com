import { db } from "."
import { projects } from "./schema"

const main = async () => {
  //   await migrate(db, { migrationsFolder: "drizzle" })
  await db.delete(projects)

  // const enzo = await db.insert(projects).values({
  //   slug: "enzo",
  //   name: "Enzo",
  //   description: "Live Enzo, This is a description",
  // })

  // console.log(`project ${enzo} is added to the DB.`)

  const res = await db.query.projects.findMany()
  console.log("res", res)
}

main()
