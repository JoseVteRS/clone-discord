"use client"

import { cn } from "@/lib/utils"
import { Member, MemberRole, Profile, Server } from "@prisma/client"
import { ShieldAlert, ShieldCheck } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { UserAvatar } from "../user-avatar"

interface ServerMemberProps {
  member: Member & { profile: Profile }
  server: Server
}

const roleIconMap = {
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: <ShieldCheck className="mr-2 h-4 w-4 text-indigo-500" />,
  [MemberRole.ADMIN]: <ShieldAlert className="mr-2 h-4 w-4 text-rose-500" />,
}

export const ServerMember = ({
  member, server
}: ServerMemberProps) => {

  const params = useParams()
  const router = useRouter()

  const icon = roleIconMap[member.role]

  return (
    <button className={cn(
      "group px-2 py-2 rounded-md flex items-center gap--x-2 w-full hover:bg-zinc-600 dark:hover:bg-zinc-700 transition mb-1",
      params?.memberid === member.id && "bg-zinc-700/20 dark:bg-zinc-700"
    )}>
      <UserAvatar src={member.profile.imageUrl}
        className="w-8 h-8 md:w-8 md:h-8"
      />
      <p
      className={cn(
        "font-semibld p-2 text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
        params?.memberid === member.id && "text-primary dark:text-zinc-200 dark:group-hover:text-white"
      )}
      >
        {member.profile.name.split('null')[0]}
      </p>
    </button>
  )
}
