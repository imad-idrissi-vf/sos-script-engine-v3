"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Header() {
  const { theme } = useTheme()

  return (
    <header className="border-b border-gray-200 bg-white py-4 dark:border-gray-800 dark:bg-[#1c054f]">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex-1">
          <h1 className="text-xl font-medium text-[#1c054f] dark:text-white">Script Engine</h1>
        </div>

        <div className="flex items-center justify-center flex-1">
          {theme === "dark" ? (
            <Image src="/logo-dark.png" alt="Genesis Call Center" width={200} height={53} className="h-14 w-auto" />
          ) : (
            <Image src="/logo-light.png" alt="Genesis Call Center" width={200} height={53} className="h-14 w-auto" />
          )}
        </div>

        <div className="flex items-center justify-end flex-1">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
