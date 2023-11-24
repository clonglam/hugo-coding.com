import type { SidebarNavItem } from "@/types"

export type DashboardConfig = {
  sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Medias",
      href: "/admin/medias",
      icon: "user",
      items: [],
    },
    {
      title: "Projects",
      href: "/admin/projects",
      icon: "store",
      items: [],
    },
    {
      title: "Category",
      href: "/admin/categories",
      icon: "billing",
      items: [],
    },
  ],
}
