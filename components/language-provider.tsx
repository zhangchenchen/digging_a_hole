"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type Language = "en" | "zh" | "ja" | "ko" | "fr" | "es"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.download": "Download",
    "nav.guides": "Guides",
    "nav.resources": "Resources",
    "nav.community": "Community",
    "hero.title": "A Game About Digging A Hole",
    "hero.subtitle": "Dig deep. Discover secrets. Change the world.",
    "hero.cta": "Start Digging",
    "about.title": "About the Game",
    "about.description":
      "A Game About Digging A Hole is a minimalist adventure where you dig through layers of earth to discover hidden secrets and treasures. With simple controls and beautiful visuals, it's an experience that's both relaxing and intriguing.",
    "features.title": "Features",
    "features.item1": "Simple, intuitive digging mechanics",
    "features.item2": "Beautiful, minimalist art style",
    "features.item3": "Discover hidden treasures and artifacts",
    "features.item4": "Relaxing soundtrack that evolves as you dig deeper",
    "features.item5": "No time pressure - dig at your own pace",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "What platforms is the game available on?",
    "faq.a1": "The game is currently available on Steam for Windows and Mac, with console versions coming soon.",
    "faq.q2": "How long does it take to complete the game?",
    "faq.a2":
      "The main experience can be completed in about 3-5 hours, but there are many secrets to discover that can extend playtime.",
    "faq.q3": "Is there a story?",
    "faq.a3": "Yes! While the game appears simple, there is a narrative that unfolds as you dig deeper.",
    "faq.q4": "Are there different difficulty levels?",
    "faq.a4":
      "The game is designed to be accessible to all players, but challenges increase naturally as you dig deeper.",
    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contact": "Contact",
  },
  zh: {
    "nav.home": "首页",
    "nav.download": "下载",
    "nav.guides": "指南",
    "nav.resources": "资源",
    "nav.community": "社区",
    "hero.title": "关于挖洞的游戏",
    "hero.subtitle": "深挖。发现秘密。改变世界。",
    "hero.cta": "开始挖掘",
    "about.title": "关于游戏",
    "about.description":
      "《关于挖洞的游戏》是一款极简主义冒险游戏，您可以通过挖掘地层来发现隐藏的秘密和宝藏。凭借简单的控制和精美的视觉效果，这是一种既放松又有趣的体验。",
    "features.title": "特点",
    "features.item1": "简单、直观的挖掘机制",
    "features.item2": "精美、极简的艺术风格",
    "features.item3": "发现隐藏的宝藏和文物",
    "features.item4": "随着挖掘深度的增加而演变的轻松配乐",
    "features.item5": "没有时间压力 - 按照自己的节奏挖掘",
    "faq.title": "常见问题",
    "faq.q1": "游戏在哪些平台上可用？",
    "faq.a1": "该游戏目前可在 Steam 上用于 Windows 和 Mac，主机版本即将推出。",
    "faq.q2": "完成游戏需要多长时间？",
    "faq.a2": "主要体验可以在大约 3-5 小时内完成，但有许多秘密可以发现，可以延长游戏时间。",
    "faq.q3": "有故事吗？",
    "faq.a3": "是的！虽然游戏看起来很简单，但随着你挖掘得更深，故事情节会逐渐展开。",
    "faq.q4": "有不同的难度级别吗？",
    "faq.a4": "该游戏旨在让所有玩家都能使用，但随着你挖掘得更深，挑战自然会增加。",
    "footer.rights": "版权所有",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
    "footer.contact": "联系我们",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.download": "ダウンロード",
    "nav.guides": "ガイド",
    "nav.resources": "リソース",
    "nav.community": "コミュニティ",
    "hero.title": "穴を掘るゲーム",
    "hero.subtitle": "深く掘る。秘密を発見する。世界を変える。",
    "hero.cta": "掘り始める",
    "about.title": "ゲームについて",
    "about.description":
      "「穴を掘るゲーム」は、地層を掘り進めて隠された秘密や宝物を発見するミニマリストアドベンチャーです。シンプルな操作と美しいビジュアルで、リラックスしながらも興味深い体験ができます。",
    "features.title": "特徴",
    "features.item1": "シンプルで直感的な掘削メカニクス",
    "features.item2": "美しいミニマリストアートスタイル",
    "features.item3": "隠された宝物やアーティファクトを発見",
    "features.item4": "掘り下げるにつれて進化するリラックスしたサウンドトラック",
    "features.item5": "時間的プレッシャーなし - 自分のペースで掘る",
    "faq.title": "よくある質問",
    "faq.q1": "ゲームはどのプラットフォームで利用できますか？",
    "faq.a1": "現在、WindowsとMac向けのSteamで利用可能で、コンソール版も近日公開予定です。",
    "faq.q2": "ゲームを完了するにはどれくらいの時間がかかりますか？",
    "faq.a2": "メインの体験は約3〜5時間で完了できますが、プレイ時間を延長できる多くの秘密があります。",
    "faq.q3": "ストーリーはありますか？",
    "faq.a3": "はい！ゲームはシンプルに見えますが、より深く掘り下げるにつれてストーリーが展開されます。",
    "faq.q4": "難易度レベルは異なりますか？",
    "faq.a4":
      "ゲームはすべてのプレイヤーがアクセスできるように設計されていますが、より深く掘り下げるにつれて自然に挑戦が増加します。",
    "footer.rights": "全著作権所有",
    "footer.privacy": "プライバシーポリシー",
    "footer.terms": "利用規約",
    "footer.contact": "お問い合わせ",
  },
  ko: {
    "nav.home": "홈",
    "nav.download": "다운로드",
    "nav.guides": "가이드",
    "nav.resources": "리소스",
    "nav.community": "커뮤니티",
    "hero.title": "구멍 파기 게임",
    "hero.subtitle": "깊이 파세요. 비밀을 발견하세요. 세상을 바꾸세요.",
    "hero.cta": "파기 시작",
    "about.title": "게임 소개",
    "about.description":
      "구멍 파기 게임은 지층을 파서 숨겨진 비밀과 보물을 발견하는 미니멀리스트 어드벤처입니다. 간단한 조작과 아름다운 비주얼로 편안하면서도 흥미로운 경험을 제공합니다.",
    "features.title": "특징",
    "features.item1": "간단하고 직관적인 파기 메커니즘",
    "features.item2": "아름답고 미니멀한 아트 스타일",
    "features.item3": "숨겨진 보물과 유물 발견",
    "features.item4": "더 깊이 파면서 진화하는 편안한 사운드트랙",
    "features.item5": "시간 압박 없음 - 자신의 속도로 파기",
    "faq.title": "자주 묻는 질문",
    "faq.q1": "게임은 어떤 플랫폼에서 이용 가능한가요?",
    "faq.a1": "현재 Windows 및 Mac용 Steam에서 이용 가능하며, 콘솔 버전이 곧 출시될 예정입니다.",
    "faq.q2": "게임을 완료하는 데 얼마나 걸리나요?",
    "faq.a2": "주요 경험은 약 3-5시간 내에 완료할 수 있지만, 플레이 시간을 연장할 수 있는 많은 비밀이 있습니다.",
    "faq.q3": "스토리가 있나요?",
    "faq.a3": "네! 게임은 단순해 보이지만, 더 깊이 파면서 이야기가 펼쳐집니다.",
    "faq.q4": "다양한 난이도 레벨이 있나요?",
    "faq.a4": "게임은 모든 플레이어가 접근할 수 있도록 설계되었지만, 더 깊이 파면서 자연스럽게 도전이 증가합니다.",
    "footer.rights": "모든 권리 보유",
    "footer.privacy": "개인정보 보호정책",
    "footer.terms": "서비스 약관",
    "footer.contact": "연락처",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.download": "Télécharger",
    "nav.guides": "Guides",
    "nav.resources": "Ressources",
    "nav.community": "Communauté",
    "hero.title": "Un Jeu Sur Creuser Un Trou",
    "hero.subtitle": "Creusez profondément. Découvrez des secrets. Changez le monde.",
    "hero.cta": "Commencer à Creuser",
    "about.title": "À Propos du Jeu",
    "about.description":
      "Un Jeu Sur Creuser Un Trou est une aventure minimaliste où vous creusez à travers des couches de terre pour découvrir des secrets et des trésors cachés. Avec des commandes simples et des visuels magnifiques, c'est une expérience à la fois relaxante et intrigante.",
    "features.title": "Caractéristiques",
    "features.item1": "Mécanismes de creusement simples et intuitifs",
    "features.item2": "Style artistique magnifique et minimaliste",
    "features.item3": "Découvrez des trésors et des artefacts cachés",
    "features.item4": "Bande sonore relaxante qui évolue à mesure que vous creusez plus profondément",
    "features.item5": "Pas de pression temporelle - creusez à votre propre rythme",
    "faq.title": "Questions Fréquemment Posées",
    "faq.q1": "Sur quelles plateformes le jeu est-il disponible ?",
    "faq.a1":
      "Le jeu est actuellement disponible sur Steam pour Windows et Mac, avec des versions console à venir prochainement.",
    "faq.q2": "Combien de temps faut-il pour terminer le jeu ?",
    "faq.a2":
      "L'expérience principale peut être terminée en environ 3 à 5 heures, mais il y a de nombreux secrets à découvrir qui peuvent prolonger le temps de jeu.",
    "faq.q3": "Y a-t-il une histoire ?",
    "faq.a3":
      "Oui ! Bien que le jeu semble simple, il y a un récit qui se dévoile au fur et à mesure que vous creusez plus profondément.",
    "faq.q4": "Y a-t-il différents niveaux de difficulté ?",
    "faq.a4":
      "Le jeu est conçu pour être accessible à tous les joueurs, mais les défis augmentent naturellement à mesure que vous creusez plus profondément.",
    "footer.rights": "Tous droits réservés",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions d'Utilisation",
    "footer.contact": "Contact",
  },
  es: {
    "nav.home": "Inicio",
    "nav.download": "Descargar",
    "nav.guides": "Guías",
    "nav.resources": "Recursos",
    "nav.community": "Comunidad",
    "hero.title": "Un Juego Sobre Cavar Un Hoyo",
    "hero.subtitle": "Cava profundo. Descubre secretos. Cambia el mundo.",
    "hero.cta": "Empezar a Cavar",
    "about.title": "Sobre el Juego",
    "about.description":
      "Un Juego Sobre Cavar Un Hoyo es una aventura minimalista donde cavas a través de capas de tierra para descubrir secretos y tesoros ocultos. Con controles simples y visuales hermosos, es una experiencia tanto relajante como intrigante.",
    "features.title": "Características",
    "features.item1": "Mecánicas de excavación simples e intuitivas",
    "features.item2": "Estilo artístico hermoso y minimalista",
    "features.item3": "Descubre tesoros y artefactos ocultos",
    "features.item4": "Banda sonora relajante que evoluciona a medida que cavas más profundo",
    "features.item5": "Sin presión de tiempo - cava a tu propio ritmo",
    "faq.title": "Preguntas Frecuentes",
    "faq.q1": "¿En qué plataformas está disponible el juego?",
    "faq.a1":
      "El juego está actualmente disponible en Steam para Windows y Mac, con versiones para consolas próximamente.",
    "faq.q2": "¿Cuánto tiempo lleva completar el juego?",
    "faq.a2":
      "La experiencia principal se puede completar en aproximadamente 3-5 horas, pero hay muchos secretos por descubrir que pueden extender el tiempo de juego.",
    "faq.q3": "¿Hay una historia?",
    "faq.a3":
      "¡Sí! Aunque el juego parece simple, hay una narrativa que se desarrolla a medida que cavas más profundo.",
    "faq.q4": "¿Hay diferentes niveles de dificultad?",
    "faq.a4":
      "El juego está diseñado para ser accesible a todos los jugadores, pero los desafíos aumentan naturalmente a medida que cavas más profundo.",
    "footer.rights": "Todos los derechos reservados",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.contact": "Contacto",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

