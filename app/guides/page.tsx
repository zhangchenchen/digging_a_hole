import Image from "next/image"
import Link from "next/link"
import { BookOpen, Award, Clock, Star } from "lucide-react"

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100 pt-20">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8">Game Guides</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
            href="/guides/achievements"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-amber-600 mr-2" />
                <h3 className="text-lg font-bold">Achievements</h3>
              </div>
              <p className="text-gray-600 text-sm">Complete guide to unlocking all achievements.</p>
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
              <p className="text-gray-600 text-sm">Tips and tricks for competitive digging.</p>
            </div>
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-6">Getting Started Guide</h2>

          <div className="prose prose-lg max-w-none">
            <h3>Welcome to A Game About Digging A Hole!</h3>
            <p>
              This guide will help you get started with the basics of digging. Whether you're a first-time digger or
              returning to perfect your technique, these tips will help you create the hole of your dreams.
            </p>

            <h4>Basic Controls</h4>
            <ul>
              <li>
                <strong>WASD or Arrow Keys:</strong> Move your character
              </li>
              <li>
                <strong>Left Mouse Button:</strong> Dig
              </li>
              <li>
                <strong>Right Mouse Button:</strong> Inspect soil
              </li>
              <li>
                <strong>Space:</strong> Jump
              </li>
              <li>
                <strong>E:</strong> Interact with objects
              </li>
              <li>
                <strong>Tab:</strong> Open inventory
              </li>
              <li>
                <strong>Esc:</strong> Pause menu
              </li>
            </ul>

            <h4>Your First Hole</h4>
            <p>
              When you first start the game, you'll find yourself in a peaceful backyard. This is your canvas! Follow
              these steps:
            </p>
            <ol>
              <li>Look for soft soil patches, which are easier to dig.</li>
              <li>Position yourself over the soil and click to start digging.</li>
              <li>Continue digging to create a deeper hole.</li>
              <li>Use the dirt you collect to build up areas around your hole.</li>
            </ol>

            <div className="my-8 flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k7ERjCdct0dJeL1UaTpUHB0NLiguUX.png"
                alt="Game screenshot showing digging area"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>

            <h4>Understanding Soil Types</h4>
            <p>Different soil types require different approaches:</p>
            <ul>
              <li>
                <strong>Topsoil:</strong> Easy to dig, perfect for beginners.
              </li>
              <li>
                <strong>Clay:</strong> Requires more effort but holds shape better.
              </li>
              <li>
                <strong>Rocky Soil:</strong> Contains obstacles that need special tools.
              </li>
              <li>
                <strong>Sandy Soil:</strong> Digs quickly but tends to collapse.
              </li>
            </ul>

            <h4>Tool Upgrades</h4>
            <p>As you progress, you'll unlock better tools:</p>
            <ul>
              <li>
                <strong>Basic Shovel:</strong> Your starting tool.
              </li>
              <li>
                <strong>Steel Shovel:</strong> Digs faster and handles tougher soil.
              </li>
              <li>
                <strong>Excavator:</strong> Perfect for large-scale digging projects.
              </li>
              <li>
                <strong>Precision Trowel:</strong> For detailed work and finding treasures.
              </li>
            </ul>

            <p>
              Ready to dig deeper? Check out our{" "}
              <Link href="/guides/strategies" className="text-amber-600 hover:underline">
                Strategy Guides
              </Link>{" "}
              for advanced techniques!
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Video Tutorials</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                {/* Replace with actual YouTube embed */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">Beginner Tutorial: First Steps</p>
                  {/* Actual implementation would use YouTube iframe */}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">Beginner's Guide to Digging</h3>
              <p className="text-gray-600">
                Learn the fundamentals of digging and tool management in this comprehensive tutorial for new players.
              </p>
            </div>

            <div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                {/* Replace with actual YouTube embed */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">Advanced Techniques</p>
                  {/* Actual implementation would use YouTube iframe */}
                </div>
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

