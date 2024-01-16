"use client"

import { SelectCategory } from "@/db/schema/categories"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

type Props = {
  categories: SelectCategory[]
  selectedCategory?: string | null
}

function CategorySelctor({ categories, selectedCategory }: Props) {
  console.log("selectedCategory", selectedCategory)
  return (
    <div className="flex gap-x-8 border-b py-3 mb-5">
      <div className={cn("overflow-x-hidden")}>
        <Link
          href={"/projects"}
          className={cn(selectedCategory === null && "font-bold")}
        >
          All
        </Link>
        <div
          className={cn(
            "border-b border-solid -translate-x-[100%]  border-zinc-800 transition-transform duration-300 group-hover:translate-x-0",
            selectedCategory === null && "translate-x-0 font-bold"
          )}
        />
      </div>
      {categories.map(({ id, label, slug }) => (
        <div className={cn("overflow-x-hidden group")} key={id}>
          <Link
            href={`/projects?category=${slug}`}
            className={cn(selectedCategory === slug && "font-bold")}
          >
            {label}
          </Link>
          <div
            className={cn(
              "border-b border-solid -translate-x-[100%] border-zinc-800 transition-transform duration-300 group-hover:translate-x-0",
              selectedCategory === slug && "translate-x-0"
            )}
          />
        </div>
      ))}
    </div>
  )
}

export default CategorySelctor
