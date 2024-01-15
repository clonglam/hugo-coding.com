"use client"
import { FC, useRef } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { MDXEditorMethods } from "@mdxeditor/editor"
import { ForwardRefEditor } from "./ForwardRefEditor"

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
            {...rest} // Spread the rest of the props you might need
            className="border border-solid border-black h-full hoverflow-scroll"
            markdown={value} // Ensure we're using the value provided by React Hook Form
            ref={editorRef}
            onChange={(markdown) => onChange(markdown)}
            placeholder="Type the project feature here."
            onBlur={onBlur} // Notify React Hook Form when the editor is blurred
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
