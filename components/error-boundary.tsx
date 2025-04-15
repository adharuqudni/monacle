"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function ErrorBoundary({ children, fallback = <div>Something went wrong</div> }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error("Error caught by error boundary:", event.error)
      setHasError(true)
      // Prevent the error from propagating
      event.preventDefault()
    }

    const handlePromiseRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled promise rejection caught:", event.reason)
      setHasError(true)
      // Prevent the rejection from propagating
      event.preventDefault()
    }

    // Add event listeners
    window.addEventListener("error", handleError)
    window.addEventListener("unhandledrejection", handlePromiseRejection)

    // Clean up
    return () => {
      window.removeEventListener("error", handleError)
      window.removeEventListener("unhandledrejection", handlePromiseRejection)
    }
  }, [])

  if (hasError) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
