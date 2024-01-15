"use client"
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
  BoldItalicUnderlineToggles,
  UndoRedo,
  BlockTypeSelect,
  DiffSourceToggleWrapper,
  InsertImage,
  toolbarPlugin,
  codeBlockPlugin,
  sandpackPlugin,
  codeMirrorPlugin,
  SandpackConfig,
  ConditionalContents,
  ChangeCodeMirrorLanguage,
  ShowSandpackInfo,
  InsertCodeBlock,
  InsertSandpack,
  linkPlugin,
  linkDialogPlugin,
} from "@mdxeditor/editor"

import "@mdxeditor/editor/style.css"
import "@/styles/himo/components/mdx.scss"

import { SelectMedia } from "@/db/schema/medias"

interface EditorProps extends MDXEditorProps {
  editorRef?: ForwardedRef<MDXEditorMethods> | null
}

const simpleSandpackConfig: SandpackConfig = {
  defaultPreset: "react",
  presets: [
    {
      label: "React",
      name: "react",
      meta: "live react",
      sandpackTemplate: "react",
      sandpackTheme: "light",
      snippetFileName: "/App.js",
      snippetLanguage: "jsx",
      initialSnippetContent: "defaultSnippetContent",
    },
  ],
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
    const response = await fetch("/api/medias", {
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
      className="mdx-container"
      contentEditableClassName="mdx-container"
      plugins={[
        linkPlugin(),
        linkDialogPlugin({
          linkAutocompleteSuggestions: [
            "https://virtuoso.dev",
            "https://mdxeditor.dev",
          ],
        }),
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        imagePlugin({ imageUploadHandler }),
        markdownShortcutPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
        sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
        codeMirrorPlugin({
          codeBlockLanguages: { js: "JavaScript", css: "CSS" },
        }),
        diffSourcePlugin({
          diffMarkdown: "An older version",
          viewMode: "rich-text",
        }),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <BoldItalicUnderlineToggles />
              <UndoRedo />
              <BlockTypeSelect />
              <InsertImage />
              <ConditionalContents
                options={[
                  {
                    when: (editor) => editor?.editorType === "codeblock",
                    contents: () => <ChangeCodeMirrorLanguage />,
                  },
                  // {
                  //   when: (editor) => editor?.editorType === "sandpack",
                  //   contents: () => <ShowSandpackInfo />,
                  // },
                  {
                    fallback: () => (
                      <>
                        <InsertCodeBlock />
                        {/* <InsertSandpack /> */}
                      </>
                    ),
                  },
                ]}
              />

              <DiffSourceToggleWrapper>
                <UndoRedo />
              </DiffSourceToggleWrapper>
            </>
          ),
        }),
      ]}
      {...props}
      ref={editorRef}
    />
  )
}
