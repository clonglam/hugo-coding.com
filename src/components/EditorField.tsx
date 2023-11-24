"use client"
import { FC, useRef } from "react"
import { Controller, useFormContext } from "react-hook-form"

import { MDXEditorMethods } from "@mdxeditor/editor"
import dynamic from "next/dynamic"
const EditorComp = dynamic(() => import("@/components/EditorComponent"), {
  ssr: false,
})

export const EditorField: FC<{
  name: string
  defaultValue?: string
}> = ({ name, defaultValue, ...rest }) => {
  const { control } = useFormContext()

  const editorRef = useRef<MDXEditorMethods | null>(null)

  return (
    <Controller
      render={({ field: { onChange, value, onBlur } }) => {
        return (
          <EditorComp
            className="min-h-[600px] border border-solid border-black"
            markdown={value} // Ensure we're using the value provided by React Hook Form
            editorRef={editorRef}
            onChange={(markdown) => {
              console.log("markdown", markdown)
              onChange(markdown) // Notify React Hook Form of the change
            }}
            placeholder="Type the project feature here."
            onBlur={onBlur} // Notify React Hook Form when the editor is blurred
            {...rest} // Spread the rest of the props you might need
          />
        )
      }}
      control={control}
      name={name}
      defaultValue={defaultValue}
    />
  )
}

export default EditorField
