import { currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export const checkCurrentUser = async () => {
  const user = await currentUser()
  if (!user)
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 })
}
