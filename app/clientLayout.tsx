"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        <ErrorBoundary
          fallback={
            <div className="flex min-h-screen items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
                <p className="mb-4">Please try refreshing the page</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-secondary text-white rounded-md"
                >
                  Refresh Page
                </button>
              </div>
            </div>
          }
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
