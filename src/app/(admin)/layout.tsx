import { ScrollArea } from "@/components/ui/scrollArea"
import { SidebarNav } from "./admin/SidebarNav"

import { dashboardConfig } from "@/config/dashboard"
import "@/app/globals.css"
import { ClerkProvider, currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import Link from "next/link"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await currentUser()

  if (!user) {
    redirect("/signin")
  }
  return (
    <ClerkProvider>
      <div className="h-[50px] w-full bg-white px-8 flex items-center">
        <p className="font-semibold text-lg">
          <Link href="/">Clong Coding</Link>
        </p>
      </div>
      <div className=" px-8 pt-5 flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 bg-white">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <ScrollArea className="py-6 pr-6 lg:py-8">
            <SidebarNav items={dashboardConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
    </ClerkProvider>
  )
}
