"use client"

import { motion } from "framer-motion"
import type { Question } from "@/types/calamity"
import { useTheme } from "next-themes"

interface QuestionCardProps {
  question: Question
  onSelectOption: (nextQuestionId: string, optionLabel: string) => void
}

export function QuestionCard({ question, onSelectOption }: QuestionCardProps) {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  // Remove greeting from question text if present
  const cleanQuestionText = question.tekst
    .replace(/^Goedemiddag,\s+u\s+spreekt\s+met\s+het\s+noodnummer\s+van\s+Genesis\.\s+/i, "")
    .replace(/^Goedemiddag,\s+/i, "")

  return (
    <div
      className={`rounded-[20px] p-8 shadow-sm ${
        isDarkMode ? "bg-[#4e2e86] bg-opacity-80 backdrop-blur-sm" : "bg-[#e7e7e7]"
      }`}
    >
      <div className="mb-2">
        <h3 className="text-xl font-semibold">{question.label}</h3>
      </div>

      <div className={`mb-8 rounded-lg p-6 ${isDarkMode ? "bg-[#1c054f]/50" : "bg-white"}`}>
        <p className="text-lg">"{cleanQuestionText}"</p>
      </div>

      {question.opties && Object.entries(question.opties).length > 0 && (
        <div className="space-y-3">
          {Object.entries(question.opties).map(([optionLabel, nextQuestionId]) => (
            <motion.button
              key={optionLabel}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectOption(nextQuestionId, optionLabel)}
              className={`w-full rounded-[20px] p-4 text-left transition-colors ${
                isDarkMode
                  ? "border border-white bg-[#1c054f]/50 text-white hover:bg-[#1c054f]/70"
                  : "border border-[#1c054f] bg-white text-[#1c054f] hover:bg-gray-50"
              }`}
            >
              {optionLabel}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  )
}
