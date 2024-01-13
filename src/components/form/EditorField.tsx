"use client"
import { FC, useRef } from "react"
import { Controller, useFormContext } from "react-hook-form"

import { MDXEditorMethods } from "@mdxeditor/editor"
import dynamic from "next/dynamic"
import { ForwardRefEditor } from "../mdx/ForwardRefEditor"
// const EditorComp = dynamic(() => import("@/components/form/EditorComponent"), {
//   ssr: false,
// })

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
          <ForwardRefEditor
            className="border border-solid border-black h-full md:h-[480px] overflow-scroll"
            markdown={value} // Ensure we're using the value provided by React Hook Form
            ref={editorRef}
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
