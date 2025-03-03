import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft, Map, Key } from "lucide-react";

export default function StrategiesPage() {
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
            <Star className="h-8 w-8 text-amber-600 mr-3" />
            <h1 className="text-3xl font-bold">A Game About Digging A Hole Key Locations</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Finding the Keys for the Garage Crate</h2>
            <p>
              One of the most challenging puzzles in the game is finding the two keys needed to unlock 
              the mysterious crate in the garage. This guide will help you locate both keys efficiently.
            </p>

            {/* YouTube Video Embed */}
            <div className="my-8">
              <h3>Video Guide to Finding Keys</h3>
              <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200 shadow-md">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/2c843idfqoE" 
                  title="A Game About Digging A Hole - Key Locations Guide" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Watch the video tutorial to see exactly where to find both keys
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 my-8">
              <h3 className="text-amber-800 flex items-center"><Key className="h-5 w-5 mr-2" /> Key Locations Overview</h3>
              <p>
                The keys are always found at specific depths, but their horizontal positions can vary between playthroughs.
                Here's what you need to know:
              </p>
              <ul>
                <li><strong>First Key:</strong> Usually found at around <span className="text-amber-700 font-semibold">16-25 meters</span> deep</li>
                <li><strong>Second Key:</strong> Usually found at around <span className="text-amber-700 font-semibold">41-47 meters</span> deep</li>
              </ul>
            </div>

            <h3>Finding the First Key</h3>
            <p>
              The first key is typically easier to find as you won't have to dig as deep. Most players report finding it between 16-25 meters below the surface.
            </p>
            
            <p>Player reports indicate these common locations:</p>
            <ul>
              <li>Around 16-20 meters deep, often near the top left area of the garden</li>
              <li>Some players found it at approximately 19-25 meters deep</li>
              <li>Your metal detector will activate when you're close to the key</li>
            </ul>

            <h3>Finding the Second Key</h3>
            <p>
              The second key is considerably deeper than the first one, which makes it more challenging to locate.
              Most players report finding it between 41-47 meters below the surface.
            </p>
            
            <p>Common locations reported by players:</p>
            <ul>
              <li>Around 41-43 meters deep, often on the right side of the garden</li>
              <li>Some players found it at approximately 45-47 meters deep</li>
              <li>The horizontal position varies, but it's frequently found on the right side of the dig area</li>
              <li>As with the first key, your metal detector will activate when you're near it</li>
            </ul>

            <h3>Efficient Digging Strategy</h3>
            <p>
              Since the keys appear at relatively consistent depths but variable horizontal positions, the most efficient 
              approach is to dig horizontally at the key depths.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 my-8">
              <h4 className="text-blue-800 font-bold">Pro Tip</h4>
              <p>
                For the most efficient key hunting:
              </p>
              <ol>
                <li>Dig a vertical shaft to reach the target depth (around 20m for the first key)</li>
                <li>Dig horizontally in all directions at that depth, creating a flat plane</li>
                <li>Pay close attention to your metal detector</li>
                <li>Once you find the first key, continue your vertical shaft down to around 43m</li>
                <li>Repeat the horizontal digging pattern at this deeper level</li>
              </ol>
              <p className="mt-4">
                This "layer excavation" approach is much more efficient than randomly digging or trying to create a giant hole.
              </p>
            </div>

            <h3>Player Experiences</h3>
            <p>
              According to the Steam community discussion, these are some player reports about key locations:
            </p>
            
            <div className="border-l-4 border-gray-300 pl-4 my-4 italic">
              <p>"One is top left ~19m down. Other is ~43m down somewhere right side" - Crypher</p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4 my-4 italic">
              <p>"I found mine 16m near top left... I also found the other 45m down on right" - Brick</p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4 my-4 italic">
              <p>"One top left ~25m down. Other is ~47m down somewhere right" - fabenus</p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4 my-4 italic">
              <p>"I found both keys on the right side at -20 and -41m" - PKArtKat</p>
            </div>

            <h3>What to Do with the Keys</h3>
            <p>
              Once you've found both keys, return to the crate in your garage to unlock it. The keys are specifically for this 
              crate, not for other treasure chests you might find while digging deeper.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg my-8 border border-amber-100">
              <h4 className="text-amber-800 font-bold flex items-center">
                <Map className="h-5 w-5 mr-2" /> Important Note
              </h4>
              <p className="text-amber-700">
                The exact horizontal positions of the keys seem to vary between players, but the depths remain 
                fairly consistent. If you can't find a key at the exact locations mentioned, try expanding your 
                horizontal search at the same depth level.
              </p>
            </div>

            <h3>Conclusion</h3>
            <p>
              Finding both keys can be one of the more time-consuming aspects of the game, but with this strategic 
              approach of digging at specific depths (around 20m and 43m), you'll be able to locate them much more 
              efficiently than by random digging.
            </p>
            <p>
              Happy digging, and good luck opening that mysterious crate!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 