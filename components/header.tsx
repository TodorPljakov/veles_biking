"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react" // Import the icons

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // This prevents hydration mismatch by ensuring the UI only 
  // renders icons after the component mounts on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/club-logo.png"
            alt="Велес Бајкинг Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h1 className="text-lg font-semibold text-foreground">Велес Бајкинг</h1>
            <p className="text-xs text-muted-foreground">Mountain Biking Club</p>
          </div>
        </div>

        {/* Theme Toggle Nav */}
        <nav className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-10 w-10"
          >
            {theme === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>

      </div>
    </header>
  )
}