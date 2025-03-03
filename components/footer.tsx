"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Shovel } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Shovel className="h-6 w-6 text-primary" />
              <span className="font-bold">A Game About Digging A Hole</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {t("footer.rights")}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("nav.download")}
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("nav.guides")}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("nav.resources")}
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("nav.community")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://twitter.com" className="text-sm text-muted-foreground hover:text-foreground">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://discord.com" className="text-sm text-muted-foreground hover:text-foreground">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="https://reddit.com" className="text-sm text-muted-foreground hover:text-foreground">
                  Reddit
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com" className="text-sm text-muted-foreground hover:text-foreground">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

