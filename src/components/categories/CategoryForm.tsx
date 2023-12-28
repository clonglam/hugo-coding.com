"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  UncontrolledFormMessage,
} from "@/components/ui/form"

import {
  InsertCategory,
  SelectCategory,
  insertCategoriesSchema,
  selectCategoriesSchema,
} from "@/db/backupSchema"

import { Icons } from "@/components/Icons"
import Link from "next/link"

import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  addCategoryAction,
  editCategoryAction,
} from "../../actions/categoryActions"

type CategoryFormProps = {
  category?: SelectCategory
}

function CateoryForm({ category }: CategoryFormProps) {
  const [isPending, startTransition] = useTransition()

  const form = useForm<InsertCategory>({
    resolver: zodResolver(insertCategoriesSchema),
  })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form

  const onSubmit = handleSubmit(async (data) => {
    startTransition(async () => {
      try {
        category
          ? await editCategoryAction(category.id, data)
          : await addCategoryAction(data)
      } catch (err) {
        console.log("unexpected Error Occured")
      }
    })
  })

  return (
    <Form {...form}>
      <form
        id="project-form"
        className="gap-x-5 flex gap-y-5 flex-col"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-y-5">
          <FormItem>
            <FormLabel className="text-sm">Label*</FormLabel>
            <FormControl>
              <Input
                defaultValue={category?.label}
                aria-invalid={!!form.formState.errors.label}
                placeholder="Type Category label here."
                {...register("label")}
              />
            </FormControl>
            <UncontrolledFormMessage message={errors.label?.message} />
          </FormItem>

          <FormItem>
            <FormLabel className="text-sm">Slug*</FormLabel>
            <FormControl>
              <Input
                defaultValue={category?.slug}
                aria-invalid={!!form.formState.errors.slug}
                placeholder="Type Slug label here."
                {...register("slug")}
              />
            </FormControl>
            <UncontrolledFormMessage message={errors.slug?.message} />
          </FormItem>
        </div>

        <div className="py-8 flex gap-x-5 items-center">
          <Button disabled={isPending} variant={"outline"} form="project-form">
            {category ? "Update" : "Create"}
            {isPending && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
          </Button>
          <Link href="/admin/categories" className={buttonVariants()}>
            Cancel
          </Link>
        </div>
      </form>
    </Form>
  )
}

export default CateoryForm
