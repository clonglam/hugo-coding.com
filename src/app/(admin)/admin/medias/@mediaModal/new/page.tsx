import React from "react"

import SectionHeader from "@/components/SectionHeader"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { db } from "@/db"
import { notFound } from "next/navigation"
import ProjectForm from "@/components/projects/ProjectForm"
import MediaForm from "../../../../../../components/media/MediaForm"
import Modal from "@/components/Modal"
import UploadMediasModal from "@/components/media/UploadMediasModal"

type Props = {}

async function NewMediaPage({}: Props) {
  return (
    // <Modal header="Add Media">
    <UploadMediasModal name={""} />
    // </Modal>
  )
}

export default NewMediaPage
