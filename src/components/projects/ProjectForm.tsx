"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Textarea from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { Suspense, useTransition } from "react"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  UncontrolledFormMessage,
} from "@/components/ui/form"

import { ProjectFormData, projectSchema } from "@/validations/projects"

import EditorField from "@/components/form/EditorField"
import { Icons } from "@/components/Icons"
import SelectCategoriesField from "@/components/form/SelectCategoriesField"
import TagsField from "@/components/ui/tagsField"

import { addProjectAction, editProjectAction } from "@/actions/proejctsAction"
import FeaturedImageField from "../media/FeaturedImageField"
import { Checkbox } from "../ui/checkbox"
import { SelectProjectWithCategory } from "@/db/schema/projects"
import { SelectCategory } from "@/db/schema/categories"

type ProjectFormProps = {
  project?: SelectProjectWithCategory
  categories: SelectCategory[]
}

function ProjectForm({ project, categories }: ProjectFormProps) {
  const [isPending, startTransition] = useTransition()
  // console.log("project", project)

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

    const { categories, ...projectInput } = data

    startTransition(async () => {
      try {
        project
          ? await editProjectAction(project.id, projectInput, categories)
          : await addProjectAction(projectInput, categories)
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
        <div className="flex-1 col-span-12 md:col-span-8 ">
          <Suspense fallback={<div>Loading...</div>}>
            <EditorField
              name={"content"}
              defaultValue={project?.content || ""}
            />
          </Suspense>
        </div>

        <div className="col-span-12 md:col-span-4 px-5">
          <div className="mb-5">
            <Button
              disabled={isPending}
              variant={"outline"}
              form="project-form"
            >
              {project ? "Update project" : "Create project"}
              {isPending && (
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
            </Button>
            <Button>Preview</Button>
          </div>

          <div className="flex flex-col gap-y-5">
            <FormItem>
              <FormLabel className="text-sm">Tilte*</FormLabel>
              <FormControl>
                <Input
                  defaultValue={project?.title}
                  aria-invalid={!!form.formState.errors.title}
                  placeholder="Type project name here."
                  {...register("title")}
                />
              </FormControl>
              <UncontrolledFormMessage message={errors.slug?.message} />
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm">Slug*</FormLabel>
              <FormControl>
                <Input
                  defaultValue={project?.slug}
                  placeholder="Type project Slug here."
                  {...register("slug")}
                />
              </FormControl>
              <UncontrolledFormMessage message={errors.slug?.message} />
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm">Description*</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type project description here."
                  defaultValue={project?.description || undefined}
                  className="min-h-[280px]"
                  {...form.register("description")}
                />
              </FormControl>
              <UncontrolledFormMessage message={errors.description?.message} />
            </FormItem>

            <FormField
              control={form.control}
              name="featured"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Featured</FormLabel>
                  <FormDescription>
                    check for feature the project
                  </FormDescription>
                </FormItem>
              )}
            />

            {/* 
            <FormItem>
              <FormLabel className="text-sm">Featured*</FormLabel>
              <FormControl>
                <BooleanCheckboxField
                  defaultValue={project?.featured ? project.featured : false}
                  label="Featured"
                  {...form.register("featured")}
                />
              </FormControl>
              <UncontrolledFormMessage message={errors.featured?.message} />
            </FormItem> */}

            {/* <FormItem>
              <FormLabel className="text-sm">Tags</FormLabel>
              <FormControl>
                <TagsField name={"tags"} defaultValue={project?.tags || []} />
              </FormControl>
              <UncontrolledFormMessage message={errors.title?.message} />
            </FormItem> */}

            {/* <FormItem>
              <FormLabel className="text-sm">Featured Image</FormLabel>
              <FormControl>
                <FeaturedImageField
                  name={"featuredImage"}
                  defaultValue={project?.featuredImage}
                />
              </FormControl>
              <UncontrolledFormMessage message={errors.title?.message} />
            </FormItem> */}

            {/* <FormItem>
              <FormLabel className="text-sm">Year*</FormLabel>
              <FormControl>
                <Input
                  defaultValue={project?.year}
                  placeholder="Type project year here."
                  {...register("year")}
                />
              </FormControl>
              <UncontrolledFormMessage message={errors.year?.message} />
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm">Category*</FormLabel>
              <FormControl>
                <SelectCategoriesField
                  defaultValue={project?.projectsToCategories.map(
                    (c) => c.category.id
                  )}
                  name="categories"
                  choices={categories}
                />
              </FormControl>
              <UncontrolledFormMessage message={errors.year?.message} />
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm">Client</FormLabel>
              <FormControl>
                <Input
                  defaultValue={project?.client || undefined}
                  placeholder="Type Client here."
                  {...register("client")}
                />
              </FormControl>
              <UncontrolledFormMessage message={errors.client?.message} />
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm">Demo Website</FormLabel>
              <FormControl>
                <Input
                  defaultValue={project?.demoWebsite || undefined}
                  placeholder="Type demo Website here."
                  {...register("demoWebsite")}
                />
              </FormControl>
              <UncontrolledFormMessage message={errors.demoWebsite?.message} />
            </FormItem>  */}
          </div>
        </div>
      </form>
    </Form>
  )
}

export default ProjectForm
