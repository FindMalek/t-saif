import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { NavDock } from "@/components/layout/nav-dock"
import { PageTransition } from "@/components/layout/page-transition"
import { Wordmark } from "@/components/layout/wordmark"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geistMonoHeading = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
})

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        geistMonoHeading.variable
      )}
    >
      <body>
        <ThemeProvider>
          <div className="px-6 pt-8">
            <Wordmark />
          </div>
          <main className="pb-28">
            <PageTransition>{children}</PageTransition>
          </main>
          <NavDock />
        </ThemeProvider>
      </body>
    </html>
  )
}
