import "server-only"

import { env } from "@/env.mjs"
import {
  GetObjectCommand,
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from "@aws-sdk/client-s3"
import sharp from "sharp"
import { Readable } from "stream"

// Set the AWS Region.

// Create an Amazon S3 service client object.
const s3Client = new S3Client({
  region: env.S3_REGION,
  credentials: {
    accessKeyId: env.S3_ACCESS_KEY_ID,
    secretAccessKey: env.S3_SECRET_ACCESS_KEY,
  },
})

// export const createPresignedUrl = (key: string) => {
//   const command = new GetObjectCommand({ Bucket: "joy-studio", Key: key })
//   return getSignedUrl(s3Client, command, { expiresIn: 3600 })
// }

export async function imagetoURL(key: string, width = 500) {
  if (key.startsWith("http://") || key.startsWith("https://")) return key

  const command = new GetObjectCommand({
    Bucket: "hugo-coding",
    Key: key,
  })
  const data = await s3Client.send(command)

  const converter = await sharp()
    .resize({
      fit: sharp.fit.contain,
      width,
    })
    .webp()
  const resizedBuffer = await (data.Body as Readable).pipe(converter).toBuffer()
  return resizedBuffer
  // return `data:image/png;base64,${resizedBody.toString("base64")}`
}

export const uploadImage = async (params: PutObjectCommandInput) => {
  const putObject = new PutObjectCommand(params)
  const s3Response = await s3Client.send(putObject)
  return s3Response
}

export const bufferToFile = (buffer: Buffer) =>
  `data:image/webp;base64,${buffer.toString("base64")}`

export default s3Client
