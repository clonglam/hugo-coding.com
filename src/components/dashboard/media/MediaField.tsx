"use client"
import { FC, useCallback, useEffect, useState } from "react"
import { FileWithPath } from "react-dropzone"
import { Controller, useFormContext } from "react-hook-form"
import { Dropzone } from "./Dropzone"
import { nanoid } from "nanoid"
import { SelectMedia } from "@/db/schema/medias"

export const FeaturedImageField: FC<{
  name: string
  defaultValue?: string
  containerClassName?: string
}> = ({ name, defaultValue, ...rest }) => {
  const { setValue, control } = useFormContext()
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (defaultValue) {
      fetch(`/medias/${defaultValue}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("PreviewfileUrl", data)
          setPreviewUrl(data.preview)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }, [defaultValue])

  const onDrop = useCallback(
    async (acceptedFiles: FileWithPath[]) => {
      console.log("acceptedFiles", acceptedFiles)

      if (acceptedFiles.length > 0) {
        const id = nanoid()
        const formData = new FormData()
        formData.append("image", acceptedFiles[0])
        formData.append("name", id)

        const response = await fetch("/api/medias", {
          method: "POST",
          body: formData,
        })

        const json = (await response.json()) as {
          data: SelectMedia
          preview: string
        }

        console.log("json", json)
        setValue(name, json.data.id)
        setPreviewUrl(json.preview)
      }
    },
    [name, setValue]
  )

  return (
    <Controller
      render={({ field }) => (
        <Dropzone
          multiple={false}
          name={name}
          onDrop={onDrop}
          previewUrl={previewUrl}
          {...rest}
        />
      )}
      control={control}
      name={name}
      defaultValue={defaultValue}
    />
  )
}

export default FeaturedImageField
