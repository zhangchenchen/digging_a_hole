import { Button } from "@/components/ui/button"
import { Download, Monitor, Cpu, HardDrive } from "lucide-react"

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100 pt-20">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8">Download the Game</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Get A Game About Digging A Hole</h2>
            <p className="text-gray-600 mb-6">
              Available now on Steam for Windows, macOS, and Linux. Experience the simple joy of digging!
            </p>
            <div className="space-y-4">
              <a
                href="https://store.steampowered.com/app/3244220/A_Game_About_Digging_A_Hole/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-[#1b2838] hover:bg-[#2a475e] h-12">
                  <Download className="mr-2 h-5 w-5" />
                  Get on Steam
                </Button>
              </a>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 h-12" disabled>
                <Download className="mr-2 h-5 w-5" />
                Mobile Version (Coming Soon)
              </Button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">System Requirements</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium flex items-center mb-2">
                  <Monitor className="mr-2 h-5 w-5 text-amber-600" />
                  Minimum Requirements
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>OS:</strong> Windows 10, macOS 10.14, Ubuntu 18.04
                  </li>
                  <li>
                    <strong>Processor:</strong> Intel Core i3 or equivalent
                  </li>
                  <li>
                    <strong>Memory:</strong> 4 GB RAM
                  </li>
                  <li>
                    <strong>Graphics:</strong> Intel HD Graphics 4000
                  </li>
                  <li>
                    <strong>Storage:</strong> 2 GB available space
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium flex items-center mb-2">
                  <Cpu className="mr-2 h-5 w-5 text-amber-600" />
                  Recommended Requirements
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>OS:</strong> Windows 10, macOS 10.15, Ubuntu 20.04
                  </li>
                  <li>
                    <strong>Processor:</strong> Intel Core i5 or equivalent
                  </li>
                  <li>
                    <strong>Memory:</strong> 8 GB RAM
                  </li>
                  <li>
                    <strong>Graphics:</strong> NVIDIA GeForce GTX 960 or equivalent
                  </li>
                  <li>
                    <strong>Storage:</strong> 4 GB available space
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Installation Guide</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium flex items-center mb-2">
                <HardDrive className="mr-2 h-5 w-5 text-amber-600" />
                Steam Installation
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  Purchase and download the game from the{" "}
                  <a
                    href="https://store.steampowered.com/app/3244220/A_Game_About_Digging_A_Hole/"
                    className="text-amber-600 hover:underline"
                  >
                    Steam Store
                  </a>
                  .
                </li>
                <li>Open the Steam client and navigate to your Library.</li>
                <li>Find "A Game About Digging A Hole" in your library.</li>
                <li>Click "Install" and follow the on-screen instructions.</li>
                <li>Once installation is complete, click "Play" to start digging!</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Troubleshooting</h3>
              <p className="text-gray-600 mb-2">
                If you encounter any issues during installation or gameplay, try the following:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Verify the integrity of game files through Steam.</li>
                <li>Update your graphics drivers to the latest version.</li>
                <li>Restart your computer and try again.</li>
                <li>
                  Check our{" "}
                  <a href="/community" className="text-amber-600 hover:underline">
                    Community page
                  </a>{" "}
                  for common solutions.
                </li>
                <li>Contact our support team at support@digginggame.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

