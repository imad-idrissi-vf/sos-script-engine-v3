"use client"

import { motion } from "framer-motion"
import type { Calamity } from "@/types/calamity"
import {
  PowerIcon,
  FlameIcon,
  DropletIcon,
  LockIcon,
  PhoneIcon,
  AlertTriangleIcon,
  ThermometerIcon,
} from "lucide-react"
import { useTheme } from "next-themes"

interface CalamityTilesProps {
  calamities: Calamity[]
  onSelect: (calamityId: string) => void
}

export function CalamityTiles({ calamities, onSelect }: CalamityTilesProps) {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  // Map calamity IDs to their respective icons
  const getCalamityIcon = (id: string) => {
    switch (id) {
      case "stroomstoring":
        return <PowerIcon className="h-8 w-8 text-[#1c054f] dark:text-white" />
      case "gaslek":
        return <FlameIcon className="h-8 w-8 text-[#1c054f] dark:text-white" />
      case "waterlek":
        return <DropletIcon className="h-8 w-8 text-[#1c054f] dark:text-white" />
      case "inbraak":
        return <LockIcon className="h-8 w-8 text-[#1c054f] dark:text-white" />
      case "telefoniestoring":
        return <PhoneIcon className="h-8 w-8 text-[#1c054f] dark:text-white" />
      case "cvww":
        return <ThermometerIcon className="h-8 w-8 text-[#1c054f] dark:text-white" />
      default:
        return <AlertTriangleIcon className="h-8 w-8 text-[#1c054f] dark:text-white" />
    }
  }

  return (
    <div className="space-y-8">
      <h2 className="text-center text-2xl font-semibold text-[#1c054f] dark:text-white">Selecteer een calamiteit</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {calamities.map((calamity) => (
          <motion.div
            key={calamity.id}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(calamity.id)}
            className={`flex cursor-pointer flex-col items-center rounded-[20px] p-8 text-center shadow-sm transition-all hover:shadow-md ${
              isDarkMode ? "gradient-button text-white" : "bg-[#e7e7e7] text-[#1c054f]"
            }`}
          >
            <div
              className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
                isDarkMode ? "bg-[#4e2e86]/50" : "bg-white"
              }`}
            >
              {getCalamityIcon(calamity.id)}
            </div>
            <h3 className="text-lg font-medium">{calamity.label}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
