"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu"

import Link from "next/link"
import { SelectProject } from "@/db/schema"

import { deleteProjectAction } from "../proejctsAction"
import DeleteDialog from "@/components/ui/deleteDialog"
import { Badge } from "@/components/ui/badge"

export const projectColumns: ColumnDef<SelectProject>[] = [
  {
    accessorKey: "title",
    header: () => <div className="text-left capitalize">Title</div>,
    cell: ({ row }) => {
      const project = row.original

      return (
        <Link
          href={`projects/${project.id}`}
          className="text-center font-medium capitalize px-3"
        >
          {row.getValue("title")}
        </Link>
      )
    },
  },
  {
    accessorKey: "year",
    header: () => <div className="text-center">Year</div>,
    cell: ({ row }) => {
      return (
        <div className="font-medium text-center">{row.getValue("year")}</div>
      )
    },
  },
  {
    accessorKey: "tags",
    header: () => <div className="text-left">Tags</div>,
    cell: ({ row }) => {
      const tags = row.getValue("tags") as string[]
      return (
        <div className="font-medium text-left">
          {tags && tags.length > 0
            ? tags.map((tag, index) => (
                <Badge className="" key={index}>
                  {tag}
                </Badge>
              ))
            : "-"}
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const project = row.original

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
              href={`/admin/projects/${project.id}`}
              className={buttonVariants({ variant: "ghost" })}
            >
              Edit Project
            </Link>
            <DeleteProjectDialog projectId={project.id} />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

const DeleteProjectDialog = ({ projectId }: { projectId: string }) => {
  const onClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await deleteProjectAction(projectId)
  }
  return (
    <DeleteDialog
      onClickHandler={onClickHandler}
      title="Delete Proejct"
      actionLabel="Delete"
    />
  )
}
