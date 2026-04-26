"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  RiFilmLine,
  RiHomeSmileLine,
  RiMailLine,
} from "@remixicon/react"

import { cn } from "@/lib/utils"
import { Dock, DockIcon } from "@/components/ui/dock"

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: RiHomeSmileLine },
  { href: "/work", label: "Work", icon: RiFilmLine },
  { href: "/contact", label: "Contact", icon: RiMailLine },
]

export function NavDock() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center">
      <Dock iconSize={36} iconMagnification={52} iconDistance={120}>
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href
          return (
            <DockIcon key={href}>
              <Link
                href={href}
                aria-label={label}
                className={cn(
                  "flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground"
                )}
              >
                <Icon size={20} />
              </Link>
            </DockIcon>
          )
        })}
      </Dock>
    </div>
  )
}
