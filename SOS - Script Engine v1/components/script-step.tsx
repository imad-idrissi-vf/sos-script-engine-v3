"use client"

import type { Step } from "@/types/calamity"

interface ScriptStepProps {
  step: Step
  value: any
  onChange: (value: any) => void
}

export function ScriptStep({ step, value, onChange }: ScriptStepProps) {
  // Determine the step type icon
  const getStepTypeIcon = () => {
    switch (step.type) {
      case "begroeting":
        return "👋"
      case "vraag":
        return "❓"
      case "uitleg":
        return "ℹ️"
      case "waarschuwing":
        return "⚠️"
      case "afsluiten":
        return "👍"
      default:
        return "📝"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="text-xl">{getStepTypeIcon()}</span>
        <h3 className="text-lg font-medium text-gray-800">{step.label}</h3>
      </div>

      <div className="rounded-lg bg-gray-50 p-4">
        <p className="text-gray-700">{step.say}</p>
      </div>

      {step.input && (
        <div className="space-y-2">
          <label htmlFor={`input-${step.id}`} className="block text-sm font-medium text-gray-700">
            Noteer antwoord:
          </label>

          {step.input.type === "text" && (
            <input
              id={`input-${step.id}`}
              type="text"
              value={value || ""}
              onChange={(e) => onChange(e.target.value)}
              placeholder={step.input.placeholder}
              className="w-full rounded-lg border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
            />
          )}

          {step.input.type === "select" && step.input.options && (
            <select
              id={`input-${step.id}`}
              value={value || ""}
              onChange={(e) => onChange(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
            >
              <option value="">Selecteer een optie</option>
              {step.input.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}

          {step.input.type === "radio" && step.input.options && (
            <div className="space-y-2">
              {step.input.options.map((option) => (
                <label key={option.value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`radio-${step.id}`}
                    value={option.value}
                    checked={value === option.value}
                    onChange={() => onChange(option.value)}
                    className="h-4 w-4 text-gray-600"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
