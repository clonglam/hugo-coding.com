"use client"

import { FC, useCallback, useEffect, useState } from "react"
import { FileWithPath, useDropzone } from "react-dropzone"
import Modal from "../Modal"
import { Icons } from "../Icons"
import { useRouter } from "next/navigation"
import { SelectMedia } from "@/db/schema/medias"

export const UploadMediasModal: FC<{
  name: string
  defaultValue?: string
  containerClassName?: string
}> = ({ name, defaultValue, ...rest }) => {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined)
  const router = useRouter()
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
  }, [defaultValue, router])

  const onDrop = useCallback(
    async (acceptedFiles: FileWithPath[]) => {
      console.log("acceptedFiles", acceptedFiles)

      if (acceptedFiles.length > 0) {
        const formData = new FormData()
        formData.append("image", acceptedFiles[0])
        formData.append("name", acceptedFiles[0].name)

        const response = await fetch("/api/medias", {
          method: "POST",
          body: formData,
        })

        const json = (await response.json()) as {
          data: SelectMedia
          preview: string
        }

        router.back()
        router.refresh()

        setPreviewUrl(json.preview)
      }
    },
    [router]
  )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    ...rest,
  })

  return (
    <Modal header="Add Media">
      <div className="dropzone-section border-zinc-500 border-dashed border-2">
        <div
          {...getRootProps()}
          className="dropzone-container w-full flex flex-col justify-center items-center min-h-[60vh]"
        >
          <input {...getInputProps()} />
          <Icons.add className="" size={36} />
          <span aria-label="helper-text" className="helper-text">
            {`Drag & drop images to this area.`}
          </span>
        </div>
      </div>
    </Modal>
  )
}

export default UploadMediasModal
