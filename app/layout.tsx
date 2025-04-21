import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"

export const metadata: Metadata = {
  title: "Monocle Agency | Elevating Brands with Smart Digital Strategies",
  icons: {
    icon: "/mon.png",
  },
  description:
    "We help businesses grow through data-driven campaigns, creative content, and targeted digital solutions tailored to your goals.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'