"use client"

import { useLanguage } from "./language-provider"

export function GameIntro() {
  const { t } = useLanguage()
  
  return (
    <section className="py-20 bg-green-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">{t("about.title")}</h2>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p>
            <strong>{t("hero.title")}</strong> {t("about.description")}
          </p>
          <p>
            {t("features.item5")} {t("features.item1")}
          </p>
          <p>
            {t("about.conclusion") || "Whether you have five minutes or five hours, this game provides a meditative escape from the complexities of modern gaming and everyday life."}
          </p>
        </div>
      </div>
    </section>
  )
}

