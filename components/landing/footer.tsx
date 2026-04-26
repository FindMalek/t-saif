import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiVimeoLine,
  RiYoutubeLine,
} from "@remixicon/react"

import { siteConfig } from "@/lib/site"

const SOCIAL_LINKS = [
  { href: siteConfig.socials.instagram, label: "Instagram", icon: RiInstagramLine },
  { href: siteConfig.socials.linkedin, label: "LinkedIn", icon: RiLinkedinBoxLine },
  { href: siteConfig.socials.vimeo, label: "Vimeo", icon: RiVimeoLine },
  { href: siteConfig.socials.youtube, label: "YouTube", icon: RiYoutubeLine },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 pb-28">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Saif Tarchoun
        </p>

        <span className="hidden font-sans text-sm font-semibold tracking-tight text-muted-foreground sm:block">
          saif.
        </span>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
