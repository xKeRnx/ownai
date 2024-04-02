import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { UserCircle2 } from "lucide-react";
import LogoutButton from "./logout-button";
import { ThemeToggle } from "./theme-toggle";

export default async function Profile() {
  const session = await getSession();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex w-full min-w-0 items-center justify-between">
      <Link
        href="/settings"
        className="flex w-full min-w-0 flex-1 items-center space-x-3 rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:bg-stone-200 active:bg-stone-300 dark:text-white dark:hover:bg-stone-700 dark:active:bg-stone-800"
      >
        {session.user.image ? (
          <Image
            src={session.user.image}
            width={40}
            height={40}
            alt={session.user.name ?? "User avatar"}
            className="h-6 w-6 rounded-full"
          />
        ) : (
          <UserCircle2 />
        )}
        <span className="truncate text-sm font-medium">
          {session.user.name || session.user.username || session.user.email}
        </span>
      </Link>
      <ThemeToggle />
      <LogoutButton />
    </div>
  );
}
