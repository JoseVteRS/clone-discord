import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function PATCH(req: Request, { params }: { params: { serverId: string } }) {
  try {
    const profile = await currentProfile()
    if (!profile) return new Response("Unauthorized", { status: 401 })

    const { name, imageUrl } = await req.json()

    const server = await db.server.update({
      where: {
        id: params.serverId
      },
      data: {
        name, imageUrl
      }
    })

    return NextResponse.json(server)

  } catch (error) {
    serverInternalError("[SERVER_ID_PATCH]")
  }
}


export async function DELETE(req: Request, { params }: { params: { serverId: string } }) {
  try {
    const profile = await currentProfile()
    if (!profile) return new Response("Unauthorized", { status: 401 })

    const server = await db.server.delete({
      where: {
        id: params.serverId
      }
    })

    return NextResponse.json(server)

  } catch (error) {
    serverInternalError("[SERVER_ID_DELETE]")
  }
}



const serverInternalError = (messageLog: string) => {
  console.log(messageLog)
  return new Response("Internal error", { status: 500 })
}