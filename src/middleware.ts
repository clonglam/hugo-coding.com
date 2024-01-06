import { authMiddleware } from "@clerk/nextjs"

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/_vercel/speed-insights/vitals",
    "/icon",
    "/signin(.*)",
    "/projects(.*)",
    "/sso-callback(.*)",
    "/api(.*)",
    "/categories(.*)",
    "/about",
    "/contact",
  ],
  ignoredRoutes: [
    "/((?!api|trpc))(_next.*|.+.[w]+$)",
    "/_vercel/speed-insights/vitals",
  ],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
}
