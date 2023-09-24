"use client"

import { CreateServerModal } from "@/components/modals/create-server-modal"
import { useIsMounted } from "@/hooks/use-is-mounted"
import { InviteModal } from "@/components/modals/invite-modal"
import { EditServerModal } from "@/components/modals/edit-server-modal"
import { MembersModal } from "../modals/members-modal"
import { CreateChannelModal } from "../modals/create-channel"

export const ModalProvider = () => {

  const isMounted = useIsMounted()

  if (!isMounted) return null

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
    </>
  )
}