// import "server-only"
import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import postgres from "postgres"
import { env } from "@/env.mjs"
import * as schema from "./schema"

// const connectionString = env.DATABASE_URL
// // for migrations
// const migrationClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db", { max: 1 });
// migrate(drizzle(migrationClient), ...)

// for query purposes
const queryClient = postgres(env.DATABASE_URL)
export const db = drizzle(queryClient, { schema })
