/** @type {import('next').NextConfig} */

await import("./src/env.mjs")
import path from "path"

// const __dirname = path.dirname(new URL(import.meta.url).pathname)

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

export default nextConfig
