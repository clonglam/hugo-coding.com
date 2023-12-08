"use client"
import React, { Suspense, useState } from "react"
import dynamic from "next/dynamic"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import Textarea from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  UncontrolledFormMessage,
} from "@/components/ui/form"
import { ProjectFormData, projectSchema } from "@/validations/projects"
import { SelectProject } from "@/db/schema"

const EditorComp = dynamic(() => import("@/components/form/EditorComponent"), {
  ssr: false,
})

type Props = {}

function ProjectContentForm({ project }: { project?: SelectProject }) {
  const [isSubmitting, setSubmitting] = useState(false)
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

  const onSubmit = handleSubmit(async (data) => {
    console.log("data", data)
  })

  return (
    <div>
      <Form {...form}>
        <form className="space-y-3" onSubmit={onSubmit}>
          <FormItem>
            <FormLabel className="text-sm">Tilte</FormLabel>
            <FormControl>
              <Input
                defaultValue={project?.title}
                aria-invalid={!!form.formState.errors.title}
                placeholder="Type project name here."
                {...register("title")}
              />
            </FormControl>

            <FormItem>
              <FormLabel className="text-sm">Slug</FormLabel>
              <FormControl>
                <Input
                  defaultValue={project?.slug}
                  placeholder="Type project Slug here."
                  {...register("slug")}
                />
              </FormControl>

              <UncontrolledFormMessage message={errors.slug?.message} />
            </FormItem>

            <UncontrolledFormMessage message={errors.title?.message} />
          </FormItem>

          <FormItem>
            <FormLabel className="text-sm">Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Type project description here."
                {...form.register("description")}
              />
            </FormControl>

            <UncontrolledFormMessage message={errors.slug?.message} />
          </FormItem>

          <Suspense fallback={<div>Loading...</div>}>
            <EditorComp markdown={"markdown"} />
          </Suspense>

          <Button disabled={isSubmitting}>
            {project ? "Update project" : "Upload project"}
            {
              isSubmitting
              //  && <Spinner />
            }
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default ProjectContentForm
