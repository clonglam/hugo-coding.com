import { ScrollArea } from "@/components/ui/scrollArea"
import { SidebarNav } from "./SidebarNav"

import { dashboardConfig } from "@/config/dashboard"
import "@/styles/globals.css"
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"

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
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
        <ScrollArea className="py-6 pr-6 lg:py-8">
          <SidebarNav items={dashboardConfig.sidebarNav} />
        </ScrollArea>
      </aside>
      <main className="flex w-full flex-col overflow-hidden">{children}</main>
    </div>
  )
}
