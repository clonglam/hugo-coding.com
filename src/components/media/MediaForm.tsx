"use client"
import { Button } from "@/components/ui/button"
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

import { ProjectFormData, projectSchema } from "@/validations/projects"

import { InsertMedia, SelectMedia } from "../../db/backupSchema"
import FeaturedImageField from "../media/FeaturedImageField"
import { addMediaAction } from "@/actions/mediaAction"
import { insertMediaSchema } from "@/db/schema/medias"
import { Dropzone } from "./Dropzone"

type MediaFormProps = {
  media?: SelectMedia
}

function MediaForm({ media }: MediaFormProps) {
  const [isPending, startTransition] = useTransition()

  const form = useForm<InsertMedia>({
    resolver: zodResolver(insertMediaSchema),
  })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form

  const onSubmit = handleSubmit((data) => {
    console.log("form submited", data)
    startTransition(async () => {
      try {
        await addMediaAction(data)
      } catch (err) {
        console.log("unexpected Error Occured")
      }
    })
  })

  return (
    <Form {...form}>
      <form
        id="project-form"
        className="gap-x-5 grid grid-cols-12"
        onSubmit={onSubmit}
      >
        <div className="col-span-8 border border-zinc-800 flex justify-center items-center">
          <Dropzone multiple={true} />
        </div>
        <div className="col-span-4 px-5">
          <div className="mb-5">
            <div className="flex flex-col gap-y-5">
              <FormItem>
                <FormLabel className="text-sm">Tilte*</FormLabel>
                <FormControl>
                  <Input
                    defaultValue={media?.name}
                    aria-invalid={!!form.formState.errors.name}
                    placeholder="Type project name here."
                    {...register("name")}
                  />
                </FormControl>
                <UncontrolledFormMessage message={errors.name?.message} />
              </FormItem>

              <Button
                disabled={isPending}
                variant={"outline"}
                form="project-form"
              >
                Upload
                {/* {project ? "Update project" : "Create project"}
              {isPending && (
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )} */}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default MediaForm
