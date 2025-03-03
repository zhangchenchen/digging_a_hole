import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "A Game About Digging A Hole",
  description: "A website for A Game About Digging A Hole - a minimalist digging adventure",
  keywords: "A Game About Digging A Hole, download A Game About Digging A Hole, a game about digging a hole free, скачать a game about digging a hole",
  generator: 'v0.dev',
  metadataBase: new URL('https://a-game-about-digging-a-hole.com'),
  alternates: {
    canonical: '/',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'