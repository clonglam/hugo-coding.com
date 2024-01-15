"use client"

import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import DeleteDialog from "@/components/ui/deleteDialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu"

import { deleteCategoryAction } from "../../actions/categoryActions"
import { SelectCategory } from "@/db/schema/categories"

export const categoryColumns: ColumnDef<SelectCategory>[] = [
  {
    accessorKey: "label",
    header: () => <div className="text-left capitalize">Label</div>,
    cell: ({ row }) => {
      const category = row.original

      return (
        <Link
          href={`categories/${category.id}`}
          className="text-center font-medium capitalize px-3"
        >
          {row.getValue("label")}
        </Link>
      )
    },
  },
  {
    accessorKey: "slug",
    header: () => <div className="">Slug</div>,
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("slug")}</div>
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center capitalize">Actions</div>,
    cell: ({ row }) => {
      const category = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="flex flex-col items-start"
          >
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <Link
              href={`/admin/categories/${category.id}`}
              className={buttonVariants({ variant: "ghost" })}
            >
              Edit Category
            </Link>
            <DeleteCategoryDialog categoryId={category.id} />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

const DeleteCategoryDialog = ({ categoryId }: { categoryId: string }) => {
  const onClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await deleteCategoryAction(categoryId)
  }
  return (
    <DeleteDialog
      onClickHandler={onClickHandler}
      title="Delete Proejct"
      actionLabel="Delete"
    />
  )
}
