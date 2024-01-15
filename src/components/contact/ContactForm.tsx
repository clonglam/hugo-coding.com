"use client"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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

import { Icons } from "@/components/Icons"
import Link from "next/link"
import {
  InsertCategory,
  SelectCategory,
  insertCategoriesSchema,
} from "@/db/schema/categories"

type CategoryFormProps = {
  category?: SelectCategory
}

function ContactForm({ category }: CategoryFormProps) {
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

  const onSubmit = handleSubmit((data) => {
    console.log("form submited", data)

    // startTransition(async () => {
    //   try {
    //     category
    //       ? await editCategoryAction(category.id, data)
    //       : await addCategoryAction(data)
    //   } catch (err) {
    //     console.log("unexpected Error Occured")
    //   }
    // })
  })

  return (
    <Form {...form}>
      <form
        id="project-form"
        className="gap-x-5 flex gap-y-5 flex-col"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-2 gap-x-8 gap-y-8">
          <FormItem>
            <FormControl>
              <Input
                defaultValue={category?.label}
                aria-invalid={!!form.formState.errors.label}
                placeholder="Category"
                variant={"underline"}
                className="h-12 placeholder:text-zinc-800"
                {...register("label")}
              />
            </FormControl>
            <UncontrolledFormMessage message={errors.label?.message} />
          </FormItem>

          <FormItem>
            <FormControl>
              <Input
                defaultValue={category?.label}
                aria-invalid={!!form.formState.errors.label}
                placeholder="Your Email."
                variant={"underline"}
                className="h-12 placeholder:text-zinc-800"
                {...register("label")}
              />
            </FormControl>
            <UncontrolledFormMessage message={errors.label?.message} />
          </FormItem>
          <FormItem>
            <FormControl>
              <Input
                defaultValue={category?.label}
                aria-invalid={!!form.formState.errors.label}
                placeholder="Your Phone."
                variant={"underline"}
                className="h-12 placeholder:text-zinc-800"
                {...register("label")}
              />
            </FormControl>
            <UncontrolledFormMessage message={errors.label?.message} />
          </FormItem>
          <FormItem>
            <FormControl>
              <Input
                defaultValue={category?.label}
                aria-invalid={!!form.formState.errors.label}
                placeholder="Company"
                variant={"underline"}
                className="h-12 placeholder:text-zinc-800"
                {...register("label")}
              />
            </FormControl>
            <UncontrolledFormMessage message={errors.label?.message} />
          </FormItem>

          <FormItem className="col-span-2">
            <FormControl>
              <Input
                defaultValue={category?.label}
                aria-invalid={!!form.formState.errors.label}
                placeholder="Enquiries"
                variant={"underline"}
                className="h-12 placeholder:text-zinc-800"
                {...register("label")}
              />
            </FormControl>
            <UncontrolledFormMessage message={errors.label?.message} />
          </FormItem>
        </div>

        <div className="py-8 flex gap-x-8 items-center">
          <Button disabled={isPending} form="project-form" size="lg">
            {category ? "Update" : "Create"}
            {isPending && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ContactForm
