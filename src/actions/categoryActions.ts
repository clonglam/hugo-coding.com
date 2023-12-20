"use server"
import { InsertCategory, categories, insertCategoriesSchema } from "@/db/schema"

import { db } from "@/db"
import { eq } from "drizzle-orm"

import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import { cache } from "react"

export async function addCategoryAction(input: InsertCategory) {
  const parsedCategory = insertCategoriesSchema.parse(input)

  const isDubplicateSlug = await db.query.categories.findFirst({
    where: eq(categories.slug, parsedCategory.slug),
  })

  if (isDubplicateSlug) {
    throw new Error("Category Slug is already taken.")
  }

  await db.insert(categories).values(parsedCategory)

  revalidateTag("categories") // Update cached posts
  redirect(`/admin/categories`) // Navigate to new route
}

export async function editCategoryAction(id: string, input: InsertCategory) {
  const parsedCategory = insertCategoriesSchema.parse(input)

  const isCategoryExisted = await db.query.categories.findFirst({
    where: eq(categories.id, id),
  })

  if (!isCategoryExisted) {
    throw new Error("Category is not exist.")
  }

  const editedCategory = await db
    .update(categories)
    .set(parsedCategory)
    .where(eq(categories.id, id))
    .returning()

  revalidateTag("categories") // Update cached posts
  revalidateTag(`categories/${editedCategory[0].id}`) // Update cached posts
  redirect(`/admin/categories`) // Navigate to new route
}

export const listCategoriesAction = cache(
  async () => await db.query.categories.findMany()
)

export async function deleteCategoryAction(id: string) {
  await db.delete(categories).where(eq(categories.id, id))
  revalidateTag("categories") // Update cached posts
}
