"use client"
// InitializedMDXEditor.tsx
import type { ForwardedRef } from "react"
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  imagePlugin,
  diffSourcePlugin,
} from "@mdxeditor/editor"
import { SelectMedia } from "@/db/backupSchema"

interface EditorProps extends MDXEditorProps {
  editorRef?: ForwardedRef<MDXEditorMethods> | null
}

// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: EditorProps) {
  async function imageUploadHandler(image: File) {
    console.log("image", image)
    const formData = new FormData()
    formData.append("image", image)
    formData.append("name", "Testing image")
    // send the file to your server and return
    // the URL of the uploaded image in the response
    const response = await fetch("/medias", {
      method: "POST",
      body: formData,
    })
    const json = (await response.json()) as {
      data: SelectMedia
      preview: string
    }
    return json.preview
  }

  return (
    <MDXEditor
      plugins={[
        // Example Plugin Usage
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        imagePlugin({ imageUploadHandler }),
        markdownShortcutPlugin(),
        diffSourcePlugin({
          diffMarkdown: "An older version",
          viewMode: "rich-text",
        }),
        // toolbarPlugin({
        //   toolbarContents: () => (
        //     <>
        //       <BoldItalicUnderlineToggles />
        //       <UndoRedo />
        //       <BlockTypeSelect />
        //       <InsertImage />
        //       <DiffSourceToggleWrapper>
        //         <UndoRedo />
        //       </DiffSourceToggleWrapper>
        //     </>
        //   ),
        // }),
      ]}
      {...props}
      ref={editorRef}
    />
  )
}
