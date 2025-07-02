"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface CloudinaryWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function CloudinaryWrapper({ children, fallback }: CloudinaryWrapperProps) {
  const [isConfigured, setIsConfigured] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      if (process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
        setIsConfigured(true)
      } else {
        setError("Cloudinary not configured")
      }
    } catch (err) {
      setError("Cloudinary configuration error")
    }
  }, [])

  if (error && fallback) {
    return <>{fallback}</>
  }

  if (!isConfigured) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}
