"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Shovel, Menu, X, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
    { code: "ja", name: "日本語" },
    { code: "ko", name: "한국어" },
    { code: "fr", name: "Français" },
    { code: "es", name: "Español" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Shovel className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">A Game About Digging A Hole</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.home")}
          </Link>
          <Link href="/download" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.download")}
          </Link>
          <Link href="/guides" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.guides")}
          </Link>
          <Link href="/resources" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.resources")}
          </Link>
          <Link href="/community" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.community")}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Switch language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={language === lang.code ? "bg-muted" : ""}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 bg-background">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/download"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.download")}
            </Link>
            <Link
              href="/guides"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.guides")}
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.resources")}
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.community")}
            </Link>

            <div className="pt-2 border-t">
              <p className="text-sm font-medium mb-2">{t("language")}</p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={language === lang.code ? "secondary" : "outline"}
                    size="sm"
                    onClick={() => setLanguage(lang.code as any)}
                    className="justify-start"
                  >
                    {lang.name}
                  </Button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

