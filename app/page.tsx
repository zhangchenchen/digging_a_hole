import Image from "next/image"
import Link from "next/link"
import { Shovel, Download, BookOpen, FileText, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GameIntro } from "@/components/game-intro"
import { GameplayVideos } from "@/components/gameplay-videos"
import { FAQ } from "@/components/faq"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="block text-2xl md:text-3xl text-amber-600 mb-2">A Game About</span>
              <span className="block">DIGGING A</span>
              <span className="block">HOLE</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-md">
              Discover the simple joy of digging in this minimalist, relaxing game about creating the perfect hole.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700 h-12 px-6" asChild>
                <Link href="/download-a-game-about-digging-a-hole">
                  <Download className="mr-2 h-5 w-5" />
                  Download A Game About Digging A Hole
                </Link>
              </Button>
              <Button variant="outline" className="h-12 px-6" asChild>
                <Link href="/guides">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k7ERjCdct0dJeL1UaTpUHB0NLiguUX.png"
              alt="A Game About Digging A Hole screenshot"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Game Introduction */}
      <GameIntro />

      {/* Gameplay Videos */}
      <GameplayVideos />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Game Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Shovel className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Simple Mechanics</h3>
              <p className="text-gray-600">
                Intuitive controls make digging accessible and satisfying for players of all skill levels.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Relaxing Experience</h3>
              <p className="text-gray-600">
                No pressure, no time limits—just you and your shovel creating the perfect hole.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Beautiful World</h3>
              <p className="text-gray-600">
                Explore a charming, colorful environment as you dig deeper and discover secrets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* End of content */}
    </div>
  )
}

