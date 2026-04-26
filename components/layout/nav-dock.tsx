"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  RiFilmLine,
  RiHomeSmileLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiVimeoLine,
} from "@remixicon/react"

import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Dock, DockIcon } from "@/components/ui/dock"

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: RiHomeSmileLine },
  { href: "/work", label: "Work", icon: RiFilmLine },
  { href: "/contact", label: "Contact", icon: RiMailLine },
]

const SOCIAL_ITEMS = [
  { href: siteConfig.socials.instagram, label: "Instagram", icon: RiInstagramLine },
  { href: siteConfig.socials.linkedin, label: "LinkedIn", icon: RiLinkedinBoxLine },
  { href: siteConfig.socials.vimeo, label: "Vimeo", icon: RiVimeoLine },
]

export function NavDock() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center">
      <Dock iconSize={44} iconMagnification={58} iconDistance={130}>
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href
          return (
            <DockIcon key={href}>
              <Link
                href={href}
                aria-label={label}
                className={cn(
                  "flex items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive && "text-foreground"
                )}
              >
                <Icon size={20} />
              </Link>
            </DockIcon>
          )
        })}

        {/* Separator */}
        <div className="mx-1 h-6 w-px self-center bg-border" aria-hidden="true" />

        {SOCIAL_ITEMS.map(({ href, label, icon: Icon }) => (
          <DockIcon key={href}>
            <a
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Icon size={20} />
            </a>
          </DockIcon>
        ))}
      </Dock>
    </div>
  )
}
