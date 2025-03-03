import Image from "next/image";
import Link from "next/link";
import { BookOpen, ChevronLeft } from "lucide-react";

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100 pt-20">
      <div className="container py-12">
        <Link 
          href="/guides"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          <span>Back to Guides</span>
        </Link>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-amber-600 mr-3" />
            <h1 className="text-3xl font-bold">Getting Started Guide</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Welcome to A Game About Digging A Hole!</h2>
            <p>
              Whether you're a first-time digger or returning to perfect your technique, this guide will help you create the hole of your dreams.
              On this page, you'll find basic controls and beginner tips to help you start your digging adventure.
            </p>

            {/* YouTube Video Embed */}
            <div className="my-8">
              <h3>Getting Started Video Tutorial</h3>
              <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200 shadow-md">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/6A2hXHhmq10" 
                  title="Getting Started with Digging A Hole Game" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Watch the video tutorial to quickly learn the basic game controls and gameplay
              </p>
            </div>

            <h3>Basic Controls</h3>
            <p>Here are the most essential controls in the game:</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-md">
                <h4 className="font-bold text-amber-800">Movement Controls</h4>
                <ul>
                  <li><strong>WASD or Arrow Keys:</strong> Move your character</li>
                  <li><strong>Space:</strong> Jump</li>
                  <li><strong>Shift:</strong> Sprint/Run</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-md">
                <h4 className="font-bold text-amber-800">Digging Controls</h4>
                <ul>
                  <li><strong>Left Mouse Button:</strong> Dig</li>
                  <li><strong>Right Mouse Button:</strong> Inspect soil</li>
                  <li><strong>E Key:</strong> Interact with objects</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-md">
                <h4 className="font-bold text-amber-800">Interface Controls</h4>
                <ul>
                  <li><strong>Tab:</strong> Open inventory</li>
                  <li><strong>M:</strong> Open map</li>
                  <li><strong>Esc:</strong> Pause menu</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-md">
                <h4 className="font-bold text-amber-800">Tool Usage</h4>
                <ul>
                  <li><strong>Number Keys 1-9:</strong> Select different tools</li>
                  <li><strong>Mouse Wheel:</strong> Cycle through tools</li>
                  <li><strong>Q Key:</strong> Quick switch to previous tool</li>
                </ul>
              </div>
            </div>

            <h3>Your First Hole</h3>
            <p>
              When you first start the game, you'll find yourself in a peaceful backyard. This is your canvas! Follow these steps:
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

            <h3>Understanding Soil Types</h3>
            <p>Different soil types require different approaches:</p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-amber-100">
                    <th className="border border-amber-200 px-4 py-2 text-left">Soil Type</th>
                    <th className="border border-amber-200 px-4 py-2 text-left">Characteristics</th>
                    <th className="border border-amber-200 px-4 py-2 text-left">Recommended Tools</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-amber-200 px-4 py-2"><strong>Topsoil</strong></td>
                    <td className="border border-amber-200 px-4 py-2">Easy to dig, perfect for beginners</td>
                    <td className="border border-amber-200 px-4 py-2">Basic Shovel</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="border border-amber-200 px-4 py-2"><strong>Clay</strong></td>
                    <td className="border border-amber-200 px-4 py-2">Requires more effort but holds shape better</td>
                    <td className="border border-amber-200 px-4 py-2">Steel Shovel</td>
                  </tr>
                  <tr>
                    <td className="border border-amber-200 px-4 py-2"><strong>Rocky Soil</strong></td>
                    <td className="border border-amber-200 px-4 py-2">Contains obstacles that need special tools</td>
                    <td className="border border-amber-200 px-4 py-2">Pickaxe or Drill</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="border border-amber-200 px-4 py-2"><strong>Sandy Soil</strong></td>
                    <td className="border border-amber-200 px-4 py-2">Digs quickly but tends to collapse</td>
                    <td className="border border-amber-200 px-4 py-2">Wide Shovel or Bucket</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Tool Upgrades</h3>
            <p>As you progress, you'll unlock better tools:</p>
            <ul>
              <li>
                <strong>Basic Shovel:</strong> Your starting tool, suitable for basic digging tasks.
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

            <h3>Advanced Techniques</h3>
            <p>
              Once you've mastered the basics, try these advanced techniques:
            </p>
            <ul>
              <li><strong>Layered Digging:</strong> Create step-like holes for easier movement</li>
              <li><strong>Support Structures:</strong> Place supports in deep holes to prevent collapse</li>
              <li><strong>Water Management:</strong> Learn how to handle underground water sources</li>
              <li><strong>Resource Planning:</strong> Properly manage excavated materials for later construction</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg my-8 border border-blue-100">
              <h4 className="text-blue-800 font-bold">Beginner's Tip</h4>
              <p className="text-blue-700">
                Don't try to dig too deep at once! As you go deeper, the soil becomes more unstable. Create stable structures and exit paths after each section of digging.
              </p>
            </div>

            <p>
              Ready to dig deeper? Check out our{" "}
              <Link href="/guides/strategies" className="text-amber-600 hover:underline">
                Strategy Guides
              </Link>{" "}
              for advanced techniques!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 