import Image from "next/image"
import { Download, ImageIcon, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100 pt-20">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8">Resources</h1>

        <div className="grid md:grid-cols-1 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <ImageIcon className="h-6 w-6 text-amber-600 mr-2" />
              <h2 className="text-2xl font-bold">Artwork & Wallpapers</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k7ERjCdct0dJeL1UaTpUHB0NLiguUX.png"
                  alt="Game artwork"
                  width={300}
                  height={169}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=169&width=300"
                  alt="Game artwork"
                  width={300}
                  height={169}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=169&width=300"
                  alt="Game artwork"
                  width={300}
                  height={169}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=169&width=300"
                  alt="Game artwork"
                  width={300}
                  height={169}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <Button className="w-full">
              <Download className="mr-2 h-5 w-5" />
              Download Wallpaper Pack
            </Button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="flex items-center mb-6">
            <Bell className="h-6 w-6 text-amber-600 mr-2" />
            <h2 className="text-2xl font-bold">Announcements</h2>
          </div>

          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold mb-2">Version 1.2 Update Now Available!</h3>
              <div className="text-sm text-gray-500 mb-3">July 15, 2023</div>
              <p className="text-gray-600 mb-4">
                We're excited to announce the release of Version 1.2, which includes new digging tools, additional soil
                types, and performance improvements!
              </p>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-xl font-bold mb-2">Community Hole Design Contest</h3>
              <div className="text-sm text-gray-500 mb-3">June 3, 2023</div>
              <p className="text-gray-600 mb-4">
                Show off your digging skills in our first-ever Hole Design Contest! Submit screenshots of your most
                creative holes for a chance to win exclusive in-game items.
              </p>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Mobile Version Development Update</h3>
              <div className="text-sm text-gray-500 mb-3">May 12, 2023</div>
              <p className="text-gray-600 mb-4">
                We're making great progress on the mobile version of A Game About Digging A Hole! Check out this
                development update for a sneak peek at the touch controls.
              </p>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

