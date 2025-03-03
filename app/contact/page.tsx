import { Metadata } from "next"
import { MessageSquare } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us | A Game About Digging A Hole",
  description: "Contact information for A Game About Digging A Hole website",
  keywords: "A Game About Digging A Hole, download A Game About Digging A Hole, a game about digging a hole free, скачать a game about digging a hole",
  alternates: {
    canonical: '/contact',
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 pt-20">
      <div className="container py-12 mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <MessageSquare className="h-6 w-6 text-amber-600 mr-2" />
            <h2 className="text-2xl font-bold">Social Media</h2>
          </div>

          <p className="text-gray-600 mb-8">
            Connect with us through our social media channels. Follow us for the latest updates, news, and community interactions. Feel free to reach out with questions, suggestions, or feedback.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#1DA1F2] flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
              <Link 
                href="https://x.com/HoleDiggingGame" 
                target="_blank" 
                className="text-gray-700 font-medium hover:text-amber-600 transition-colors"
              >
                Twitter
              </Link>
              <p className="text-gray-500 text-sm text-center mt-2">
                Follow us for news and updates
              </p>
            </div>

            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              </div>
              <Link 
                href="https://discord.com/invite/8wPsjDxTyQ" 
                target="_blank" 
                className="text-gray-700 font-medium hover:text-amber-600 transition-colors"
              >
                Discord
              </Link>
              <p className="text-gray-500 text-sm text-center mt-2">
                Join our community
              </p>
            </div>

            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
              <Link 
                href="https://www.tiktok.com/@diggingholegame" 
                target="_blank" 
                className="text-gray-700 font-medium hover:text-amber-600 transition-colors"
              >
                TikTok
              </Link>
              <p className="text-gray-500 text-sm text-center mt-2">
                Watch our latest videos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 