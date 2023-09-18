import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="" >
      <div>
        <UserButton afterSignOutUrl="/"/>
        <ModeToggle />
      </div>
    </div>
  )
}
