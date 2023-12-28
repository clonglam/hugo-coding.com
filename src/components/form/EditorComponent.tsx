"use client"
import { FC } from "react"
import "@mdxeditor/editor/style.css"
import {
  AdmonitionDirectiveDescriptor,
  GenericJsxEditor,
  InsertImage,
  JsxComponentDescriptor,
  MDXEditor,
  MDXEditorMethods,
  MDXEditorProps,
  NestedLexicalEditor,
  directivesPlugin,
  headingsPlugin,
  imagePlugin,
  jsxPlugin,
  jsxPluginHooks,
  linkDialogPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
} from "@mdxeditor/editor"
import { UndoRedo } from "@mdxeditor/editor/plugins/toolbar/components/UndoRedo"
import { BlockTypeSelect } from "@mdxeditor/editor/plugins/toolbar/components/BlockTypeSelect"
import { BoldItalicUnderlineToggles } from "@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles"
import { ChangeAdmonitionType } from "@mdxeditor/editor/plugins/toolbar/components/ChangeAdmonitionType"
import { toolbarPlugin } from "@mdxeditor/editor/plugins/toolbar"
import { linkPlugin } from "@mdxeditor/editor/plugins/link"
import { SelectMedia } from "@/db/backupSchema"

interface EditorProps extends MDXEditorProps {
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ markdown, editorRef, ...props }) => {
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
      ref={editorRef}
      markdown={markdown}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        linkPlugin(),
        quotePlugin(),
        markdownShortcutPlugin(),
        // jsxPlugin({ jsxComponentDescriptors }),
        linkDialogPlugin({
          linkAutocompleteSuggestions: [
            "https://virtuoso.dev",
            "https://mdxeditor.dev",
          ],
        }),
        imagePlugin({ imageUploadHandler }),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <BoldItalicUnderlineToggles />
              <UndoRedo />
              <BlockTypeSelect />
              <InsertImage />
            </>
          ),
        }),
      ]}
      {...props}
    />
  )
}

export default Editor
