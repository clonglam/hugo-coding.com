"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import dayjs from "dayjs"

import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  UncontrolledFormMessage,
} from "@/components/ui/form"

import { ProjectFormData, projectSchema } from "@/validations/projects"

// import { SelectMedia } from "../../db/backupSchema"

import DeleteDialog from "../ui/deleteDialog"
import { useRouter } from "next/navigation"
import { deleteMedia } from "@/actions/mediaAction"

type MediaFormProps = {
  media: any
}

function UpdateMediaForm({ media }: MediaFormProps) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form

  const onSubmit = handleSubmit((data) => {
    console.log("form submited", data)

    //     const { categories, ...projectInput } = data

    //     startTransition(async () => {
    //       try {
    //         project
    //           ? await editProjectAction(project.id, projectInput, categories)
    //           : await addProjectAction(projectInput, categories)
    //       } catch (err) {
    //         console.log("unexpected Error Occured")
    //       }
    //     })
  })

  const onDeleteHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    startTransition(async () => {
      try {
        const res = await deleteMedia(media.id)
        router.back()
      } catch (err) {
        console.log("err")
      }
    })
  }

  return (
    <Form {...form}>
      <form id="project-form" className="min-w-[320px]" onSubmit={onSubmit}>
        <div className="px-5">
          <div className="mb-8 flex flex-col gap-y-5">
            <div>
              <FormLabel className="text-sm">Key</FormLabel>
              <p className="text-zinc-600">{media.id}</p>
            </div>

            <FormItem>
              <FormLabel className="text-sm">Name*</FormLabel>
              <FormControl>
                <Input
                  defaultValue={media?.name}
                  aria-invalid={!!form.formState.errors.title}
                  placeholder="Type project name here."
                  {...register("title")}
                />
              </FormControl>
              <UncontrolledFormMessage message={errors.slug?.message} />
            </FormItem>

            <div>
              <FormLabel className="text-sm">Created At</FormLabel>
              <p className="text-zinc-600">
                {dayjs(media.createdAt).format("DD/MM/YYYY-HH:mm:ssZ")}
              </p>
            </div>
            <div>
              <FormLabel className="text-sm">Updated At</FormLabel>
              <p className="text-zinc-600">
                {dayjs(media.updatedAt).format("DD/MM/YYYY-HH:mm:ssZ")}
              </p>
            </div>

            <div>
              <Button
                aria-disabled={isPending}
                disabled={isPending}
                variant={"outline"}
                form="project-form"
              >
                Update
              </Button>
              <DeleteDialog
                onClickHandler={onDeleteHandler}
                title="Delete Proejct"
                actionLabel="Delete"
              />
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default UpdateMediaForm
