import Image from "next/image"
import Link from "next/link"
import { BookOpen, Clock, Star } from "lucide-react"

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100 pt-20">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8">Game Guides</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/guides/getting-started"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-amber-600 mr-2" />
                <h3 className="text-lg font-bold">Getting Started</h3>
              </div>
              <p className="text-gray-600 text-sm">Learn the basics of digging and get familiar with the controls.</p>
            </div>
          </Link>

          <Link
            href="/guides/strategies"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-amber-600 mr-2" />
                <h3 className="text-lg font-bold">Strategy Guides</h3>
              </div>
              <p className="text-gray-600 text-sm">Advanced techniques to create the perfect hole.</p>
            </div>
          </Link>

          <Link
            href="/guides/speedrun"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-amber-600 mr-2" />
                <h3 className="text-lg font-bold">Speedrun Techniques</h3>
              </div>
              <p className="text-gray-600 text-sm">Tips and tricks for completing the game in under 30 minutes.</p>
            </div>
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Video Tutorials</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                {/* Beginner's Guide YouTube embed */}
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/7t1n59TZ3UM" 
                  title="Beginner's Guide to Digging" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-lg font-bold mb-2">Beginner's Guide to Digging</h3>
              <p className="text-gray-600">
                Learn the fundamentals of digging and tool management in this comprehensive tutorial for new players.
              </p>
            </div>

            <div>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                {/* Advanced Techniques YouTube embed */}
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/ZZdM7LiVVnI" 
                  title="Advanced Digging Techniques" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-lg font-bold mb-2">Advanced Digging Techniques</h3>
              <p className="text-gray-600">
                Master the art of precision digging and learn how to create complex hole structures with advanced
                techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

