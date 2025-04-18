"use client"

import { useState, useEffect } from "react"
import { CalamityTiles } from "@/components/calamity-tiles"
import { ScriptViewer } from "@/components/script-viewer"
import { calamities } from "@/data/calamities"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"

export default function Home() {
  const [selectedCalamity, setSelectedCalamity] = useState<string | null>(null)
  const [currentQuestionId, setCurrentQuestionId] = useState<string | null>(null)
  const [history, setHistory] = useState<string[]>([])
  const [conversationPath, setConversationPath] = useState<Array<{ question: string; answer: string }>>([])
  const [isComplete, setIsComplete] = useState(false)
  const [location, setLocation] = useState<string>("")
  const [actionTaken, setActionTaken] = useState<string>("")
  const [calamityType, setCalamityType] = useState<string>("")
  const [additionalInfo, setAdditionalInfo] = useState<Record<string, string>>({})
  const [contactInfo, setContactInfo] = useState<{
    name?: string
    postcode?: string
    huisnummer?: string
    telefoon?: string
    id?: string
  }>({})

  const handleSelectCalamity = (calamityId: string) => {
    const calamity = calamities.find((c) => c.id === calamityId)
    if (calamity) {
      setSelectedCalamity(calamityId)
      setCurrentQuestionId(calamity.start)
      setHistory([])
      setConversationPath([])
      setIsComplete(false)
      setLocation("")
      setActionTaken("")
      setCalamityType("")
      setAdditionalInfo({})
      setContactInfo({})
    }
  }

  const handleSelectOption = (nextQuestionId: string, questionLabel: string, optionLabel: string) => {
    if (currentQuestionId) {
      setHistory((prev) => [...prev, currentQuestionId])
      setConversationPath((prev) => [
        ...prev,
        {
          question: questionLabel,
          answer: optionLabel,
        },
      ])

      // Track contact information if this is the contact details question
      if (questionLabel === "Contactgegevens" && optionLabel === "Gegevens doorgegeven") {
        // For testing purposes, we'll set a specific ID
        const testId = "299463" // This can be replaced with actual input in a real scenario
        setContactInfo({
          id: testId,
          name: "Test Gebruiker",
          postcode: "1234 AB",
          huisnummer: "42",
          telefoon: "0612345678",
        })

        // Add the ID to the conversation path for the spoed/geen spoed logic to detect
        setConversationPath((prev) => [
          ...prev,
          {
            question: "ID",
            answer: testId,
          },
        ])
      }

      // Track location if the question is about location
      if (
        questionLabel.toLowerCase().includes("lokalisatie") ||
        questionLabel.toLowerCase().includes("ruimte") ||
        questionLabel.toLowerCase().includes("locatie")
      ) {
        setLocation(optionLabel)
      }

      // Track action taken
      if (
        questionLabel.toLowerCase().includes("advies") ||
        questionLabel.toLowerCase().includes("actie") ||
        questionLabel.toLowerCase().includes("controle") ||
        questionLabel.toLowerCase().includes("diagnose")
      ) {
        setActionTaken(optionLabel)
      }

      // Track calamity type
      if (
        questionLabel.toLowerCase().includes("soort") ||
        questionLabel.toLowerCase().includes("ernst") ||
        questionLabel.toLowerCase().includes("situatie")
      ) {
        setCalamityType(optionLabel)
      }

      // Track additional information
      if (
        questionLabel.toLowerCase().includes("controleren") ||
        questionLabel.toLowerCase().includes("check") ||
        questionLabel.toLowerCase().includes("informatie")
      ) {
        setAdditionalInfo((prev) => ({
          ...prev,
          [questionLabel]: optionLabel,
        }))
      }
    }

    // Check if this is a completion question or if there are no more options
    const targetCalamity = calamities.find((c) => c.id === selectedCalamity)
    const targetQuestion = targetCalamity?.vragen[nextQuestionId]

    if (
      nextQuestionId.startsWith("afsluiten") ||
      !targetQuestion ||
      !targetQuestion.opties ||
      Object.keys(targetQuestion.opties).length === 0
    ) {
      setIsComplete(true)
    } else {
      setCurrentQuestionId(nextQuestionId)
    }
  }

  // Force summary after a certain number of questions
  useEffect(() => {
    if (conversationPath.length >= 5 && !isComplete) {
      const lastQuestionId = currentQuestionId
      const targetCalamity = calamities.find((c) => c.id === selectedCalamity)
      const targetQuestion = targetCalamity?.vragen[lastQuestionId || ""]

      // If we're at a kostenmelding question, prepare to show summary
      if (lastQuestionId?.startsWith("kostenmelding")) {
        // Don't set isComplete yet, but prepare for it on next step
      }
    }
  }, [conversationPath.length, isComplete, currentQuestionId, selectedCalamity])

  const handleBack = () => {
    if (history.length > 0) {
      const prevQuestionId = history[history.length - 1]
      setCurrentQuestionId(prevQuestionId)
      setHistory((prev) => prev.slice(0, -1))
      setConversationPath((prev) => prev.slice(0, -1))
      setIsComplete(false)
    } else {
      // If no history, go back to calamity selection
      handleReset()
    }
  }

  const handleReset = () => {
    setSelectedCalamity(null)
    setCurrentQuestionId(null)
    setHistory([])
    setConversationPath([])
    setIsComplete(false)
    setLocation("")
    setActionTaken("")
    setCalamityType("")
    setAdditionalInfo({})
    setContactInfo({})
  }

  return (
    <main className="flex min-h-screen flex-col bg-white text-[#1c054f] transition-colors dark:bg-[#1c054f] dark:text-white">
      <Header />

      <div className="container mx-auto flex flex-1 items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {!selectedCalamity ? (
            <motion.div
              key="calamity-selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl"
            >
              <CalamityTiles calamities={calamities} onSelect={handleSelectCalamity} />
            </motion.div>
          ) : (
            <motion.div
              key="script-viewer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl"
            >
              <ScriptViewer
                calamityId={selectedCalamity}
                currentQuestionId={currentQuestionId}
                onSelectOption={handleSelectOption}
                onBack={handleBack}
                onClose={handleReset}
                conversationPath={conversationPath}
                isComplete={isComplete}
                location={location}
                actionTaken={actionTaken}
                calamityType={calamityType}
                additionalInfo={additionalInfo}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
