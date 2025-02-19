import { auth, signOut, signIn } from '@/auth'
import { BadgePlus, LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
            <Link href="/">
                <Image src="/logo.png" alt="link-a-thon logo" width={40} height={10} />
            </Link>

            <div className="flex items-center gap-5 text-black">
                {session && session?.user ? (
                    <>
                      <Link href="/project/create">
                        <span className="max-sm:hidden">Create</span>
                        <BadgePlus className="size-6 mt-[-6px] sm:hidden" />
                      </Link>

                      <form action={ async() => {
                        "use server";

                        await signOut({ redirectTo: "/" });
                        }}>
                        
                        <button type="submit">
                          <span className="max-sm:hidden">Logout</span>
                          <LogOut className="size-6 sm:hidden text-red-500" />
                        </button>
                        
                      </form>

                      <Link href={`/user/${session?.id}`}>
                        <Avatar className="size-10">
                          <AvatarImage
                            src={session?.user?.image || ""}
                            alt={`${session?.user?.name || ""}'s display picture`}
                          />
                          <AvatarFallback>
                            <span>{session?.user?.name}</span>
                          </AvatarFallback>
                        </Avatar>
                      </Link>
                    </>
                ) : (
                    <form action={ async () => {
                        "use server";

                        await signIn('github')
                        }}>
                        
                        <button type="submit">
                            Login
                        </button>
                    </form>
                )}
            </div>
        </nav>
    </header>
  )
}

export default Navbar