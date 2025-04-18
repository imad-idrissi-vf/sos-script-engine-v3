import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local"

// Load Raleway Pro font
const raleway = localFont({
  src: [
    {
      path: "../public/fonts/RalewayPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/RalewayPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/RalewayPro-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/RalewayPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-raleway",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Script Engine - Genesis Call Center",
  description: "Interactive call script system for Genesis Call Center",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <style>{`
          :root {
            --font-raleway: ${raleway.style.fontFamily}, sans-serif;
          }
        `}</style>
      </head>
      <body className={`${raleway.variable} font-raleway bg-white dark:bg-[#4e2e86]`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
