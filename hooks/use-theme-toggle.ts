"use client"

import { useTheme } from "next-themes"

export function useThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  return { theme, resolvedTheme, setTheme, toggleTheme }
}
