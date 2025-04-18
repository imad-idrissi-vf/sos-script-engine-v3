"use client"

import { ArrowLeft, X } from "lucide-react"
import { useTheme } from "next-themes"

interface NavigationButtonsProps {
  onBack: () => void
  onClose: () => void
}

export function NavigationButtons({ onBack, onClose }: NavigationButtonsProps) {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  return (
    <div className="flex justify-between font-raleway">
      <button
        onClick={onBack}
        className={`flex items-center gap-2 rounded-[20px] px-6 py-3 font-medium transition-colors ${
          isDarkMode
            ? "border border-white bg-transparent text-white hover:bg-[#1c054f]/50"
            : "border border-[#1c054f] bg-transparent text-[#1c054f] hover:bg-gray-50"
        }`}
      >
        <ArrowLeft size={18} />
        Terug
      </button>

      <button
        onClick={onClose}
        className={`flex items-center gap-2 rounded-[20px] px-6 py-3 font-medium transition-colors ${
          isDarkMode
            ? "border border-white bg-transparent text-white hover:bg-[#1c054f]/50"
            : "border border-[#1c054f] bg-transparent text-[#1c054f] hover:bg-gray-50"
        }`}
      >
        <X size={18} />
        Gesprek afsluiten
      </button>
    </div>
  )
}
