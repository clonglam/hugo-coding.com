/** @type {import('next').NextConfig} */

await import("./src/env.mjs")
import path from "path"
import stylexPlugin from "@stylexjs/nextjs-plugin"

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

const stylexConfig = {
  rootDir: __dirname,
  useCSSLayers: true,
}
export default stylexPlugin(stylexConfig)(nextConfig)
