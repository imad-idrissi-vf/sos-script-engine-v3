export interface Question {
  label: string
  tekst: string
  opties?: Record<string, string>
}

export interface Calamity {
  id: string
  label: string
  start: string
  summaryTemplate?: string
  vragen: Record<string, Question>
}

export interface Step {
  id: string
  label: string
  say: string
  type: string
  input?: {
    type: string
    placeholder?: string
    options?: { value: string; label: string }[]
  }
}
