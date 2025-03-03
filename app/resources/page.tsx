import Image from "next/image"
import { Download, Music, ImageIcon, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100 pt-20">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8">Resources</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <Music className="h-6 w-6 text-amber-600 mr-2" />
              <h2 className="text-2xl font-bold">Soundtrack</h2>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-gray-500 mr-3">01</span>
                  <span>Morning Dig</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-3">3:24</span>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-gray-500 mr-3">02</span>
                  <span>Deeper and Deeper</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-3">4:12</span>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-gray-500 mr-3">03</span>
                  <span>Soil and Toil</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-3">2:58</span>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-gray-500 mr-3">04</span>
                  <span>The Perfect Hole</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-3">5:16</span>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Button className="w-full">
              <Download className="mr-2 h-5 w-5" />
              Download Complete Soundtrack
            </Button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="flex items-center mb-6">
            <Bell className="h-6 w-6 text-amber-600 mr-2" />
            <h2 className="text-2xl font-bold">Official Announcements</h2>
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

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Press Kit</h2>

          <p className="text-gray-600 mb-6">
            If you're a content creator, journalist, or streamer interested in covering A Game About Digging A Hole, our
            press kit contains everything you need.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="font-bold mb-2">Game Logos</h3>
              <p className="text-sm text-gray-500 mb-3">PNG, SVG, EPS formats</p>
              <Button variant="outline" size="sm" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="font-bold mb-2">Screenshots Pack</h3>
              <p className="text-sm text-gray-500 mb-3">High-res PNG, 4K available</p>
              <Button variant="outline" size="sm" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="font-bold mb-2">Fact Sheet</h3>
              <p className="text-sm text-gray-500 mb-3">PDF, DOCX formats</p>
              <Button variant="outline" size="sm" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            For additional press inquiries or to request a review copy, please contact:
          </p>
          <p className="font-medium">press@digginggame.com</p>
        </div>
      </div>
    </div>
  )
}

